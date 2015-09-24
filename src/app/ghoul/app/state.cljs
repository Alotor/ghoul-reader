(ns ghoul.app.state
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [<!]]
            [cljs-uuid-utils.core :as uuid]
            [hodgepodge.core :as hp]
            [ghoul.common.http :as http]
            [ghoul.repository.item :as item-repository]
            [ghoul.app.messages :refer [msg]]))

(defonce current-state-version 1)

(defonce global
  (atom {;; State version. Necesary to migrate when stored into the users local-storage
         :version current-state-version

         ;; Currently only list is
         :current-view :list ; or :detail

         ;; Should show items as expanded/compacted
         :feeds-view [:expanded-view] ; or :compact-view

         ;; Only for the mobile view. Diesplay state for sidebar
         :show-menu [false]

         ;; Active popup in display
         :popup [:none]

         ;; Current selected item in the sidebar
         :selected [:all-items]
                   ;[:group "Open Source"]
                   ;[:feed "f90eebc0-83c8-11e4-b4a9-0800200c9a66"]

         ;; Groups
         ;:groups [{:name "Open Source"
         ;          :expanded true
         ;          :subscriptions [ "f90eebc0-83c8-11e4-b4a9-0800200c9a66"
         ;                           "07aed140-83c9-11e4-b4a9-0800200c9a66"]}
         :groups []

         ;; Feeds
         ;:feeds [{:title "Feed Title"
         ;         :uid "f90eebc0-83c8-11e4-b4a9-0800200c9a66"
         ;         :site-url "http://example.com/"
         ;         :feed-url "http://example.com/rss"
         ;         :favicon "http://example.com/images/favicon.ico"
         ;         :pending 20}]

         :feeds []

         ;; Current items in display
         :items []}))

(defn list-uid-url []
  (map #(-> [] (conj (:uid %)) (conj (:feed-url %))) (:feeds @global)))

(defn store-state [state]
  (assoc! hp/local-storage :state (dissoc state :items)))

(defn restore-state [old-state]
  ;; TODO migrate from state old version to new
  (if (= (:version old-state) current-state-version)
    (reset! global old-state)))

(defn load-all-items []
  (go (->> (item-repository/retrieve-all-items) <!
           (swap! global assoc :items))))

(defn load-shared-items []
  (swap! global assoc :items []))

(defn load-favorites-items []
  (swap! global assoc :items []))


(defn load-items-by-uid-list [uid-list]
  (go (->> uid-list
           item-repository/retrieve-items-by-uid <!
           (swap! global assoc :items))))

(defn load-items-by-group [group-id]
  (let [feed-list (->> @global
                       :groups
                       (filter #(= (:name %) group-id))
                       first
                       :subscriptions)]
    (load-items-by-uid-list feed-list)))

(defn load-items-by-feed [feed-id]
  (load-items-by-uid-list [feed-id]))


;; TOOD Change to multi-method
(defn load-selected-feeds [item]
  (let [[selected id] item]
    (cond
      (= selected :all-items) (load-all-items)
      (= selected :shared-items) (load-shared-items)
      (= selected :favorite-items) (load-favorites-items)
      (= selected :group) (load-items-by-group id)
      :else (load-items-by-feed id))))

(defn state-change-listener [context key ref old-value new-value]
  (store-state @global))

(defn initialize-state []
  (let [old-state (:state hp/local-storage)]
    (if (not (nil? old-state))
      (do
        (restore-state old-state)
        (load-selected-feeds (:selected old-state))))
    (add-watch global nil state-change-listener)))

(defn add-general-group []
  (swap! global
         update-in [:groups]
         #(conj % (-> {}
                      (assoc :name (msg :ghoul.general.group))
                      (assoc :expanded true)
                      (assoc :subscriptions [])))))

(defn add-group [group-name]
  (swap! global
         update-in [:groups] conj
         {:name group-name
          :subscriptions []
          :expanded true}))

(defn add-rss-subscription [feed-url]
  (if (empty? (:groups @global))
    (add-general-group))
  (go
    (let [feed-data (-> feed-url http/get-rss <! :data)
          feed-num (-> feed-data :items count)
          feed-uid (uuid/uuid-string (uuid/make-random-uuid))
          subscription (-> {}
                           (assoc :title (:title feed-data))
                           (assoc :uid feed-uid)
                           (assoc :site-url (:link feed-data))
                           (assoc :feed-url feed-url)
                           (assoc :favicon "/images/favicon.png")
                           (assoc :pending feed-num))]
      ;; TODO move this to a worker call
      (doseq [item (:items feed-data)]
        (-> item
            (assoc :feeduid feed-uid)
            (item-repository/add-item)
            <!)
        (swap! global update-in [:items] #(conj % item)))
      (swap! global update-in [:feeds] #(conj % subscription))
      (swap! global update-in [:groups 0 :subscriptions] #(conj % feed-uid)))))



(defn get-feed-group [feed-uid]
  (let [group-contains-feed-uid (fn [group feed-uid]
                                  (->> group :subscriptions (some #(= % feed-uid))))]
    (->> @global
         :groups
         (filter #(group-contains-feed-uid % feed-uid))
         first)))

(defn get-feed-idx [uid]
  (->> @global
       :feeds
       (map-indexed vector)
       (filter #(= (:uid (second %)) uid))
       first
       first))

(defn increase-feed-pending [uid]
  (let [path [:feeds (get-feed-idx uid) :pending]]
    (swap! global update-in path inc)))

(defn include-feed [item-data]
  (let [[selected id] (:selected @global)
        feed-uid (:feeduid item-data)
        group-name (-> feed-uid get-feed-group :name)]
    (increase-feed-pending feed-uid)
    (if (or (= id feed-uid)
            (= id group-name)
            (= selected :all-items))
      (swap! global update-in [:items] #(conj % item-data)))))

(defn update-item [item-path]
  (let [item (get-in @global item-path)]
    (item-repository/add-item item)))

(defn select-all []
  (go
    (let [all-items (<! (item-repository/retrieve-all-items))]
      (swap! global (fn [state]
                      (-> state
                          (assoc :selected [:all-items])
                          (assoc :items all-items) ))))))

(defn open-popup [popup]
  (swap! global (fn [state]
                  (-> state
                      (assoc :popup [popup])))))
