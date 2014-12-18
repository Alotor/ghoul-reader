(ns ghoul.state
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [<!]]
            [cljs-uuid-utils :as uuid]
            [ghoul.http :as http]
            [ghoul.feeds-storage :as storage]
            [hodgepodge.core :as hp]))

;(defn ^:export hello-world[] (js/alert "HOLA")) ; invoke through ghoul.state.hello_world() in JS
(declare feed-store-temp)
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
         ;:groups [{:name "Open Source"
         ;          :count 10
         ;          :expanded true
         ;          :uid "c73f26a0-83c8-11e4-b4a9-0800200c9a66"
         ;          :subscriptions [{:title "Slashdot"
         ;                           :uid "f90eebc0-83c8-11e4-b4a9-0800200c9a66"
         ;                           :site-url "http://slashdot.org/"
         ;                           :feed-url "http://rss.slashdot.org/Slashdot/slashdot"
         ;                           :favicon "http://slashdot.org/favicon.ico"
         ;                           :pending 20}
         ;                          {:title "Taiga"
         ;                           :uid "07aed140-83c9-11e4-b4a9-0800200c9a66"
         ;                           :site-url "https://blog.taiga.io/"
         ;                           :feed-url "https://blog.taiga.io/feeds/rss.xml"
         ;                           :favicon "https://blog.taiga.io/theme/images/favicon.png"
         ;                           :pending 10}
         ;                          ]}
         ;         {:name "Clojure"
         ;          :count 10
         ;          :expanded true
         ;          :uid "2f83cef0-83c9-11e4-b4a9-0800200c9a66"
         ;          :subscriptions [{:title "Cognitect Blog"
         ;                           :uid "32fe28a0-83c9-11e4-b4a9-0800200c9a66"
         ;                           :feed-url "http://blog.cognitect.com/blog?format=rss"
         ;                           :site-url "http://blog.cognitect.com/"
         ;                           :favicon "http://blog.cognitect.com/favicon.ico"
         ;                           :pending 20
         ;                           }]}]
         :feeds []
         }))


(defn get-group-data [uid]
  (->> @global :groups
       (filter #(= (:uid %) uid))
       first))

(defn get-feed-data [uid]
  (->> @global :groups
      (map :subscriptions)
      flatten
      (filter #(= (:uid %) uid))
      first))

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

(defn ^:export select-feed [uid]
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

(defn ^:export add-general-group []
  (let [general-group (-> {}
                          (assoc :name "General")
                          (assoc :count 0)
                          (assoc :expanded true)
                          (assoc :uid (uuid/uuid-string (uuid/make-random-uuid)))
                          (assoc :subscriptions []))]
    (swap! global assoc :general-group-uid (:uid general-group))
    (swap! global update-in [:groups] #(conj % general-group))))

(defn add-rss-subscription [feed-url]
  (go
    (if (empty? (:groups @global))
      (add-general-group))
    (let [group-idx 0
          feed-data (-> feed-url
                        http/get-rss <!
                        :data)
          subscription (-> {}
                           (assoc :title (:title feed-data))
                           (assoc :uid (uuid/uuid-string (uuid/make-random-uuid)))
                           (assoc :site-url (:link feed-data))
                           (assoc :feed-url feed-url)
                           (assoc :favicon "/images/favicon.png")
                           (assoc :pending 0))]
      (doseq [feed (:items feed-data)]
        (-> feed
            (assoc :feeduid (:uid subscription))
            (storage/add-feed)
            <!)
        (swap! global update-in [:feeds] #(conj % feed)))
      (swap! global update-in [:groups group-idx :subscriptions] #(conj % subscription)))))

(defn ^:export store-state [state]
  (assoc! hp/local-storage :state (dissoc state :feeds)))

(defn ^:export restore-state [state-atom]
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

