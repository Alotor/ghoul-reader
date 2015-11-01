(ns ghoul.app.state.core)

;; Defining functions
(defn empty-state
  "Creates an empty state for the application"
  []
  {;; Which menu item is currently selected
   :selected {:type   [:all] ;; :all, :favorite, :shared, :group, :feed
              :sort   [:date]
              :filter [:read]
              :view   :expanded-view}

   ;; Index representation
   :index [#_([:feed uid]
              [:group "title" [... feeds]]) ]

   ;; Current feeds database
   :feeds { #_(:uid :title :descrition :url) }})

(defn get-display-mode
  "Retrieves the selected display-mode in the application"
  [state]
  (->  state :selected :view))

(defn get-selected
  "Retrieves the current group, feed or logical group (favourites, all...) selected"
  [state]
  (-> state :selected :type))

(defn list-index
  "Retrieve the current defined index. This is the elements the user have available
  in her menu"
  [state]
  (:index state))

(defn list-feeds
  "Retrieves the list of feeds in the state"
  ([state]
   (vals (:feeds state)))
  ([state & {:keys [group]}]
   (filter #(= (:group %) group) (vals (:feeds state)))))

;; State transitions
(defmulti update-state
  "Definition for state transitions. Payloads are vectors with it's first
   value the transition to be defined."
  (fn [_ [transition _]] transition))

(defmethod update-state :add-feed [state [_ feed-data]]
  "Adds a new feed to the list of feeds. Will fail if the feed uid existed or the data doesn't
   match the schema for feed data"
  ;; TODO validate feed-data schema
  ;; TODO make sure it's an unique uid
  (-> state
      (assoc-in [:feeds (:uid feed-data)] feed-data)
      (update-in [:index] conj {:feed (:uid feed-data)})))

(defmethod update-state :add-group [state [_ group-name]]
  "Creates a new empty group inside the state. A group is only defined by its name"
  (update-in state [:index] conj {:group group-name}))

(defmethod update-state :set-group-feed [state [_ feed-uid group-name]]
  "Sets the feed group to a new value"
  ;; TODO Fail if feed-uid is not in the feed list
  (-> state
      ;; If the feed was in the index we remove it
      (assoc-in [:index] (into [] (filter #(not (= (:feed %) feed-uid)) (:index state))))
      (assoc-in [:feeds feed-uid :group] group-name)))

