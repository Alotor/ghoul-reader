(ns ghoul.app.state.core)

;; Defining functions
(defn empty-state
  "Creates an empty state for the application"
  []
  {:display-mode [:list :expanded-view]
   :selected [:all-items]
   :groups []
   :feeds []
   :items []})

(defn get-display-mode
  "Retrieves the selected display-mode in the application"
  [state]
  (:display-mode state))

(defn get-selected
  "Retrieves the current group, feed or logical group (favourites, all...) selected"
  [state]
  (:selected state))

(defn get-groups
  "Retrieves a list of the groups currently in the state"
  [state]
  (:groups state))

(defn get-feeds
  "Retrieves the list of feeds in the state"
  [state]
  (:feeds state))

(defn get-items
  "Retrieves the items in the current state. Depends on the current value of `get-selected`"
  [state]
  (:items state))

(defn get-feed-by-uid
  "Retrieves a feed by a given uid"
  [state uid]
  (first (filter #(= (:uid %) uid) (get-feeds state))))

;; State transitions
(defmulti state-transition
  "Definition for state transitions. Payloads are vectors with it's first
   value the transition to be defined."
  (fn [_ [transition _]] transition))

(defmethod state-transition :add-feed [state [_ feed-data]]
  "Adds a new feed to the list of feeds. Will fail if the feed uid existed or the data doesn't
   match the schema for feed data"
  ;; TODO validate feed-data schema
  ;; TODO make sure it's an unique uid
  (update-in state [:feeds] conj feed-data))
