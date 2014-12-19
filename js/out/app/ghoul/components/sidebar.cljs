(ns ghoul.components.sidebar
  (:require [om.core :as om]
            [om.dom :as dom]
            [ghoul.components.common :as common]
            [ghoul.state :as state]))

(defn feed-util-buttons [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "icon-buttons"}
               (dom/a #js {:className "menu-icon add-group"} "Add Group")
               (dom/a #js {:className "menu-icon add-feed"
                           :onClick state/toggle-feed-popup} "Add Feed")
               (dom/a #js {:className "menu-icon import-feeds"
                           :onClick state/toggle-state-popup} "Import")
               (dom/a #js {:className "menu-icon export-feeds"} "Export")
               (dom/a #js {:className "menu-icon refresh"} "Refresh")))))

(defn feed-subscription [data owner]
  (reify
    om/IRenderState
    (render-state [this state]
      (dom/li #js {:className "subscription"}
              (dom/a #js {:className (if (state/selected? (:uid data)) "selected" "")
                          :onClick (fn [e] (state/select-feed (:uid data)))}
                     (dom/span nil (:title data))
                     (dom/span #js {:className "count"} (str (:pending data))))))))

(defn feed-group [data owner]
  (reify
    om/IRenderState
    (render-state [this state]
      (let [group-class (if (:expanded data) "folder expanded" "folder")]
        (dom/li nil
                (dom/div #js {:className group-class}
                         (dom/div #js {:className (str "group-title " (if (state/selected? (:uid data)) "selected" ""))}
                                  (dom/a #js {:className "group-select"
                                              :onClick (fn [e] (state/select-feed (:uid data)))}
                                         (dom/span nil (:name data))
                                         (dom/span #js {:className "count"} (str (:pending data))))
                                  (if (:expanded data)
                                    (dom/a #js {:className "minus-button"
                                                :onClick #(om/update! data [:expanded] false)} "Contraer")
                                    (dom/a #js {:className "plus-button"
                                                :onClick #(om/update! data [:expanded] true)} "Expandir")))
                         (apply dom/ul #js {:className "feed-list"}
                                (om/build-all feed-subscription (:subscriptions data) {:state state}))))))))
(defn feeds-list [data owner]
  (reify
    om/IRenderState
    (render-state [this state]
      (dom/div #js {:id "feeds"}
               (apply dom/ul nil
                       (om/build-all feed-group data {:state state}))))))

(defn root [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/section #js {:id "sidebar"}
                   (om/build feed-util-buttons data)
                   (om/build common/search-box data)
                   (dom/a #js {:className (str "menu-item all " (if (state/selected? :all-items) "selected" ""))
                               :onClick #(state/select-all-items)} "All Items")
                   (dom/a #js {:className (str "menu-item favorite " (if (state/selected? :favorite-items) "selected" ""))
                               :onClick #(state/select-favorites-items)} "Favorites")
                   (dom/a #js {:className (str "menu-item shared " (if (state/selected? :shared-items) "selected" ""))
                               :onClick #(state/select-shared-items)} "Shared")
                   (om/build feeds-list (:groups data) {:state {:selected-uid (:selected data)}})))))
