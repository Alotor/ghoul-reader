(ns ghoul.app.components.common.sidebar
  (:require [om.core :as om]
            [om.dom :as dom]
            [ghoul.common.utils :refer [project active-classes]]
            [ghoul.app.components.common.search :as search]
            [ghoul.app.messages :refer [msg]]))

(def drag-drop-handled (atom #{}))
(defn drop-ok! [feeduid] (swap! drag-drop-handled conj feeduid))
(defn is-dropped? [feeduid] (@drag-drop-handled feeduid))
(defn drop-pop! [feeduid] (swap! drag-drop-handled disj feeduid))

(defn show-feed-popup [data]
  (om/update! (:popup data) [0] :feed))

(defn show-group-popup [data]
  (om/update! (:popup data) [0] :group))

(defn show-state-popup [data]
  (om/update! (:popup data) [0] :state))

(defn select-feed [data feed-data]
  (om/update! (:selected data) [:feed (:uid feed-data)]))

(defn select-group [data group-data]
  (om/update! (:selected data) [:group (:name group-data)]))

(defn expand-group [group-data]
  (om/update! group-data [:expanded] true))

(defn contract-group [group-data]
  (om/update! group-data [:expanded] false))

(defn remove-feed-group [group-data feeduid]
  (om/transact! group-data
                [:subscriptions]
                (fn [old] (into [] (filter #(not (= % feeduid))  old)))))

(defn add-feed-group [group-data feeduid]
  (om/transact! group-data [:subscriptions] #(conj % feeduid)))

(defn select-all-items [data]
  (om/update! (:selected data) [:all-items]))

(defn select-favorite-items [data]
  (om/update! (:selected data) [:favorite-items]))

(defn select-shared-items [data]
  (om/update! (:selected data) [:shared-items]))

(defn feed-util-buttons [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "icon-buttons"}
               (dom/a #js {:className "menu-icon add-group"
                           :onClick #(show-group-popup data)}
                      (msg :ghoul.toolbar.add-group))
               (dom/a #js {:className "menu-icon add-feed"
                           :onClick #(show-feed-popup data)}
                      (msg :ghoul.toolbar.add-feed))
               (dom/a #js {:className "menu-icon import-feeds"
                           :onClick #(show-state-popup data)}
                      (msg :ghoul.toolbar.import))
               (dom/a #js {:className "menu-icon export-feeds"}
                      (msg :ghoul.toolbar.export))
               (dom/a #js {:className "menu-icon refresh"}
                      (msg :ghoul.toolbar.refresh))))))

(defn feed-subscription [data owner]
  (reify
    om/IRender
    (render [this]
      (let [feed-data (:feed data)
            [selected id] (:selected data)]
        (dom/li #js {:className "subscription"}
                (dom/a #js {:className (if (= id (:uid feed-data)) "selected" "")
                            :onClick #(select-feed data feed-data)
                            :draggable true
                            :onDragStart (fn [e] (.setData (.-dataTransfer e) "uid" (:uid feed-data)))
                            :onDragEnd (fn [e]
                                         (when (is-dropped? (:uid feed-data))
                                           (do
                                             (remove-feed-group (:group data) (:uid feed-data))
                                             (drop-pop! (:uid feed-data))
                                             )))}
                       (dom/span nil (:title feed-data))
                       (dom/span #js {:className "count"} (str (:pending feed-data)))))))))

(defn feed-group [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:dragging-over false})

    om/IRender
    (render [this]
      (let [group-data (:group data)
            group-feed-uid-set (-> data :group :subscriptions set)
            group-feeds (filter #(-> % :uid group-feed-uid-set) (:feeds data))
            group-pending (reduce #(+ %1 (:pending %2)) 0 group-feeds)
            group-class (if (:expanded group-data) "folder expanded" "folder")
            [selected id] (:selected data)
            dragging-style (if (om/get-state owner :dragging-over) (clj->js {:border "1px solid red"}) {})]
        (dom/li #js {:style dragging-style
                     :onDragOver (fn [e]
                                   (.preventDefault e)
                                   (om/set-state! owner :dragging-over true))
                     :onDragLeave (fn [e]
                                    (.preventDefault e)
                                    (om/set-state! owner :dragging-over false))
                     :onDrop (fn [e]
                               (.preventDefault e)
                               (let [uid (.getData (.-dataTransfer e) "uid")]
                                 (when-not (some #{uid} (:subscriptions group-data))
                                   (add-feed-group group-data uid)
                                   (drop-ok! uid)))

                               (om/set-state! owner :dragging-over false))}
                (dom/div #js {:className group-class}
                         (dom/div #js {:draggable true
                                       :className (active-classes [:group-title]
                                                                  {:selected (= id (:name group-data))})}
                                  (dom/a #js {:className "group-select"
                                              :onClick #(select-group data group-data)}
                                         (dom/span nil (:name group-data))
                                         (dom/span #js {:className "count"} group-pending))
                                  (if (:expanded group-data)
                                    (dom/a #js {:className "minus-button"
                                                :onClick #(contract-group group-data)} (msg :ghoul.toolbar.contract))
                                    (dom/a #js {:className "plus-button"
                                                :onClick #(expand-group group-data)} (msg :ghoul.toolbar.expand))))
                         (apply dom/ul #js {:className "feed-list"}
                                (om/build-all feed-subscription
                                              (map #(-> {}
                                                        (assoc :selected (:selected data))
                                                        (assoc :group group-data)
                                                        (assoc :feed %))
                                                   group-feeds)))))))))

(defn feeds-list [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:id "feeds"}
               (apply dom/ul nil
                      (om/build-all feed-group
                                    (map #(-> {}
                                              (assoc :selected (:selected data))
                                              (assoc :feeds (:feeds data))
                                              (assoc :group %))
                                         (:groups data))))))))

(defn root [data owner]
  (reify
    om/IRender
    (render [this]
      (let [[selected _] (:selected data)]
        (dom/section #js {:id "sidebar"}
                     (om/build feed-util-buttons data)
                     (om/build search/search-box {})
                     (dom/a #js {:className (active-classes [:menu-item :all]
                                                            {:selected (= selected :all-items)})
                                 :onClick #(select-all-items data)} (msg :ghoul.menu.all-items))
                     (dom/a #js {:className (active-classes [:menu-item :favorite]
                                                            {:selected (= selected :favorite-items)})
                                 :onClick #(select-favorite-items data)} (msg :ghoul.menu.favorite-items))
                     (dom/a #js {:className (active-classes [:menu-item :shared]
                                                            {:selected (= selected :shared-items)})
                                 :onClick #(select-shared-items data)} (msg :ghoul.menu.shared-items))
                     (om/build feeds-list (project data :selected :groups :feeds)))))))
