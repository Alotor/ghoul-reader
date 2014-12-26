(ns ghoul.app.components.common.sidebar
  (:require [om.core :as om]
            [om.dom :as dom]
            [ghoul.common.utils :refer [project]]
            [ghoul.app.components.common.search :as search]
            [ghoul.app.state :as state]
            [ghoul.app.messages :refer [msg]]))

(defn feed-util-buttons [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "icon-buttons"}
               (dom/a #js {:className "menu-icon add-group"}
                      (msg :ghoul.toolbar.add-group))
               (dom/a #js {:className "menu-icon add-feed" :onClick state/toggle-feed-popup}
                      (msg :ghoul.toolbar.add-feed))
               (dom/a #js {:className "menu-icon import-feeds" :onClick state/toggle-state-popup}
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
                            :onClick #(om/update! (:selected data) [:feed (:uid feed-data)])}
                       (dom/span nil (:title feed-data))
                       (dom/span #js {:className "count"} (str (:pending feed-data)))))))))

(defn feed-group [data owner]
  (reify
    om/IRender
    (render [this]
      (let [group-data (:group data)
            group-feed-uid-set (-> data :group :subscriptions set)
            group-feeds (filter #(-> % :uid group-feed-uid-set) (:feeds data))
            group-pending (reduce #(+ %1 (:pending %2)) 0 group-feeds)
            group-class (if (:expanded group-data) "folder expanded" "folder")
            [selected id] (:selected data)]
        (dom/li nil
                (dom/div #js {:className group-class}
                         (dom/div #js {:className (str "group-title " (if (= id (:name group-data)) "selected" ""))}
                                  (dom/a #js {:className "group-select"
                                              :onClick #(om/update! (:selected data) [:group (:name group-data)])}
                                         (dom/span nil (:name group-data))
                                         (dom/span #js {:className "count"} group-pending))
                                  (if (:expanded group-data)
                                    (dom/a #js {:className "minus-button"
                                                :onClick #(om/update! group-data [:expanded] false)} (msg :ghoul.toolbar.contract))
                                    (dom/a #js {:className "plus-button"
                                                :onClick #(om/update! group-data [:expanded] true)} (msg :ghoul.toolbar.expand))))
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
      (let [[selected _] (:selected data)
            state (project data :selected :groups :feeds)]
        (dom/section #js {:id "sidebar"}
                     (om/build feed-util-buttons state)
                     (om/build search/search-box {})
                     (dom/a #js {:className (str "menu-item all " (if (= selected :all-items) "selected" ""))
                                 :onClick #(om/update! (:selected data) [:all-items])} (msg :ghoul.menu.all-items))
                     (dom/a #js {:className (str "menu-item favorite " (if (= selected :favorite-items) "selected" ""))
                                 :onClick #(om/update! (:selected data) [:favorite-items])} (msg :ghoul.menu.favorite-items))
                     (dom/a #js {:className (str "menu-item shared " (if (= selected :shared-items) "selected" ""))
                                 :onClick #(om/update! (:selected data) [:shared-items])} (msg :ghoul.menu.shared-items))
                     (om/build feeds-list state))))))
