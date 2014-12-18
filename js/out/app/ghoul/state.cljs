(ns ghoul.state
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [<!]]
            [cljs-uuid-utils :as uuid]
            [ghoul.http :as http]
            [ghoul.feeds-storage :as storage]
            [hodgepodge.core :as hp]))

(declare feed-store-temp)
(declare update-uid-count)

(defn ^:export retrieve-all-feeds []
  (flatten (map second feed-store-temp)))

; Global state
(def global
  (atom {:current-view :list ; or :detail
         :feeds-view :expanded-view ; or :compact-view
         :show-menu false
         :popup nil
         :selected nil
         :groups []
         :general-group-uid nil
         :feeds []}))


(defn get-group-data [uid]
  (->> @global :groups
       (filter #(= (:uid %) uid))
       first))

(defn get-group-idx [uid]
  (->> @global
       :groups
       (map-indexed vector)
       (filter #(= (:uid (second %)) uid))
       first
       first))

(defn get-feed-data [uid]
  (->> @global :groups
      (map :subscriptions)
      flatten
      (filter #(= (:uid %) uid))
      first))

(defn group-contains-feed-uid [group feed-uid]
  (->> group :subscriptions (some #(-> % :uid (= feed-uid)))))

(defn get-feed-group-uid [feed-uid]
  (->> @global
       :groups
       (filter #(group-contains-feed-uid % feed-uid))
       first
       :uid))

(defn get-feed-idx-group [group feed-uid]
  (->> group
      :subscriptions
      (map-indexed vector)
      (filter #(= (:uid (second %)) feed-uid))
      first
      first))

(defn ^:export group? [uid]
  (->> @global
      :groups
      (some #(= (:uid %) uid))))

(defn ^:export feed? [uid]
  (->> @global
       :groups
       (map :subscriptions)
       flatten
       (some #(= (:uid %) uid))))

(defn get-title [uid]
  (let [group-data (get-group-data uid)]
    (if (nil? group-data)
      (:title (get-feed-data uid))
      (:name group-data))))

(defn get-group-subscriptions [uid]
  (let [group-data (get-group-data uid)]
    (map :uid (:subscriptions group-data))))

(defn retrieve-feeds [uid]
  (go
    (swap! global assoc :feeds [])
    (let [group (get-group-data uid)
          subscriptions-list (if (nil? group) [uid] (get-group-subscriptions uid))
          selected-feeds (<! (storage/retrieve-feeds-uids subscriptions-list))]
      (swap! global assoc :feeds selected-feeds))))

(defn select-feed [uid]
  (swap! global assoc :selected uid)
  (retrieve-feeds uid))

(defn load-all-items []
  (go (let [_ (<! (storage/init-database))
            result (<! (storage/retrieve-all-feeds))]
        (swap! global assoc :feeds result))))

(defn select-all-items []
  (swap! global assoc :selected :all-items)
  (load-all-items))

(defn load-favorites-items []
  (swap! global assoc :feeds []))

(defn select-favorites-items []
  (swap! global assoc :selected :favorite-items)
  (load-favorites-items))

(defn load-shared-items []
  (swap! global assoc :feeds []))

(defn select-shared-items []
  (swap! global assoc :selected :shared-items)
  (load-shared-items))

(defn toggle-compact-view []
  (swap! global assoc :feeds-view :compact-view))

(defn toggle-expanded-view []
  (swap! global assoc :feeds-view :expanded-view))

(defn toggle-menu []
  (swap! global assoc :show-menu (not (:show-menu @global))))

(defn toggle-feed-popup []
  (swap! global assoc :popup (if (nil? (:popup @global)) :feed nil)))

(defn add-general-group []
  (let [general-group (-> {}
                          (assoc :name "General")
                          (assoc :pending 0)
                          (assoc :expanded true)
                          (assoc :uid (uuid/uuid-string (uuid/make-random-uuid)))
                          (assoc :subscriptions []))]
    (swap! global assoc :general-group-uid (:uid general-group))
    (swap! global update-in [:groups] #(conj % general-group))))

(defn add-rss-subscription [feed-url]
  (go
    (if (empty? (:groups @global))
      (add-general-group))
    (let [group-idx (-> @global :general-group-uid get-group-idx)
          feed-data (-> feed-url
                        http/get-rss <!
                        :data)
          feed-num (-> feed-data :items count)
          subscription (-> {}
                           (assoc :title (:title feed-data))
                           (assoc :uid (uuid/uuid-string (uuid/make-random-uuid)))
                           (assoc :site-url (:link feed-data))
                           (assoc :feed-url feed-url)
                           (assoc :favicon "/images/favicon.png")
                           (assoc :pending feed-num))]
      (doseq [feed (:items feed-data)]
        (-> feed
            (assoc :feeduid (:uid subscription))
            (storage/add-feed)
            <!)
        (swap! global update-in [:feeds] #(conj % feed)))
      (swap! global update-in [:groups group-idx :subscriptions] #(conj % subscription))
      (update-uid-count (:general-group-uid @global) #(+ feed-num %)))))

(defn store-state [state]
  (assoc! hp/local-storage :state (dissoc state :feeds)))

(defn restore-state [state-atom]
  (->> (:state hp/local-storage) (reset! state-atom)))

(defn load-selected-feeds [item]
  (.log js/console "Loading" item)
  (cond
   (= item :all-items) (load-all-items)
   (= item :shared-items) (load-shared-items)
   (= item :favorite-items) (load-favorites-items)
   :else (retrieve-feeds item)))

(defn selected? [item]
  (= item (:selected @global)))

(defn initialize-state []
  (let [old-state (:state hp/local-storage)]
    (if (not (nil? old-state))
      (do
        (restore-state global)
        (load-selected-feeds (:selected @global))))
    (add-watch global
               nil
               (fn [context key ref old-value new-value]
                 (store-state @global)))))

(defn get-update-path [uid]
  (if (group? uid)
    (-> []
        (conj :groups)
        (conj (get-group-idx uid)))
    (let [group-uid (get-feed-group-uid uid)
          group (get-group-data group-uid)
          group-idx (get-group-idx group-uid)
          feed-idx (get-feed-idx-group group uid)]
      (-> []
          (conj :groups)
          (conj group-idx)
          (conj :subscriptions)
          (conj feed-idx)))))

(defn ^:export set-uid-count [uid new-count]
  (let [path (-> uid get-update-path (conj :pending))]
    (swap! global assoc-in path new-count)))

(defn update-uid-count [uid update-fn]
  (let [path (-> uid get-update-path (conj :pending))]
    (swap! global update-in path update-fn)))

(defn list-uid-url []
  (->> @global :groups
      (map :subscriptions)
      flatten
      (map #(-> [] (conj (:uid %)) (conj (:feed-url %))))))

(defn include-feed [feed-data]
  (let [feed-uid (:feeduid feed-data)
        group-uid (get-feed-group-uid feed-uid)]
    (update-uid-count feed-uid inc)
    (update-uid-count group-uid inc)
    (if (or (= (:selected @global) feed-uid)
            (= (:selected @global) group-uid)
            (= (:selected @global) :all-items))
      (swap! global update-in [:feeds] #(conj % feed-data)))))
