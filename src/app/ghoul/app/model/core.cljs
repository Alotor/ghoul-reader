(ns ghoul.app.model.core
  (:require [schema.core :as s :include-macros true]
            [cljs-uuid-utils.core :as uuid]))

(s/defrecord FeedData
    [title       :- s/Str
     description :- s/Str
     feed-url    :- s/Str
     site-url    :- s/Str
     favicon-url :- s/Str
     uuid        :- s/Str
     pending     :- s/Int])

(s/defn create-feed :- FeedData
  "Create an empty feed data"
  ([title description feed-url site-url]
   (create-feed title description feed-url site-url "/images/rssicon.png"))

  ([title description feed-url site-url favicon-url]
   (FeedData. title
              description
              feed-url
              site-url
              favicon-url
              (uuid/uuid-string (uuid/make-random-uuid))
              5)))

(defn feed? [value]
  (instance? FeedData value))

(s/defrecord GroupData
    [name          :- s/Str
     expanded      :- s/Bool
     subscriptions :- [FeedData]
     pending       :- s/Int])

(defn group? [value]
  (instance? GroupData value))

(defn empty-state
  "Creates an empty state for the application"
  []
  (let [f1 (create-feed "Taiga.io"
                        "Lorem ipsum..."
                        "https://blog.taiga.io/"
                        "https://blog.taiga.io/feeds/rss.xml"
                        "https://blog.taiga.io/favicon.ico")
        f2 (create-feed "Reddit Programming"
                        "Lorem ipsum..."
                        "http://reddit.com/r/programming/.rss"
                        "https://www.reddit.com/r/programming"
                        "https://www.redditstatic.com/icon.png")]
    {;; Which menu item is currently selected
     :selected {:type   [:all] ;; :all, :favorite, :shared, :group, :feed
                :sort   [:date]
                :filter [:read]
                :view   :expanded-view}

     ;; Index representation
     :index [#_([:feed uid]
                [:group "title" [... feeds]])

             [:feed (:uuid f1)]
             [:feed (:uuid f2)]
             [:group "Test 1" [(:uuid f1) (:uuid f2)]]
             [:group "Test 2" [(:uuid f1) (:uuid f2)]]]

     ;; Current feeds database query
     :feeds  { #_(:uid {:title :descrition :url :pending})
              (:uuid f1) f1
              (:uuid f2) f2}}))

(def app-state (atom (empty-state)))

(defmulti get-data (fn [_ [type]] type))

(defmethod get-data :feed [model [_ uuid]]
  (get-in model [:feeds uuid]))

(defmethod get-data :group [model [_ title feeds]]
  (let [feeds-values (map #(get-data model [:feed %]) feeds)
        group-pending (reduce #(+ (:pending %2) %1) 0 feeds-values)]
    (GroupData. title true feeds-values group-pending)))

(defn get-subscriptions [model]
  (->> (:index model)
       (map (partial get-data model))))

; (defn get-display-mode
;   "Retrieves the selected display-mode in the application"
;   [state]
;   (->  state :selected :view))
; 
; (defn get-selected
;   "Retrieves the current group, feed or logical group (favourites, all...) selected"
;   [state]
;   (-> state :selected :type))
; 
; (defn list-index
;   "Retrieve the current defined index. This is the elements the user have available
;   in her menu"
;   [state]
;   (:index state))
; 
; (defn list-feeds
;   "Retrieves the list of feeds in the state"
;   ([state]
;    (vals (:feeds state)))
;   ([state & {:keys [group]}]
;    (filter #(= (:group %) group) (vals (:feeds state)))))

;; State transitions
;(defmulti update-state
;  "Definition for state transitions. Payloads are vectors with it's first
;   value the transition to be defined."
;  (fn [_ [transition _]] transition))
;
;(defmethod update-state :add-feed [state [_ feed-data]]
;  "Adds a new feed to the list of feeds. Will fail if the feed uid existed or the data doesn't
;   match the schema for feed data"
;  ;; TODO validate feed-data schema
;  ;; TODO make sure it's an unique uid
;  (-> state
;      (assoc-in [:feeds (:uid feed-data)] feed-data)
;      (update-in [:index] conj {:feed (:uid feed-data)})))
;
;(defmethod update-state :add-group [state [_ group-name]]
;  "Creates a new empty group inside the state. A group is only defined by its name"
;  (update-in state [:index] conj {:group group-name}))
;
;(defmethod update-state :set-group-feed [state [_ feed-uid group-name]]
;  "Sets the feed group to a new value"
;  ;; TODO Fail if feed-uid is not in the feed list
;  (-> state
;      ;; If the feed was in the index we remove it
;      (assoc-in [:index] (into [] (filter #(not (= (:feed %) feed-uid)) (:index state))))
;      (assoc-in [:feeds feed-uid :group] group-name)))
