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
               (dom/a #js {:className "menu-icon import-feeds"} "Import")
               (dom/a #js {:className "menu-icon export-feeds"} "Export")
               (dom/a #js {:className "menu-icon refresh"} "Refresh")))))

(defn feed-subscription [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/li nil
              (dom/a #js {:onClick (fn [e] (state/select-feed (:uid data)))}
                     (dom/span nil (:title data))
                     (dom/span nil (str "(" (:pending data) ")")))))))

(defn feed-group [data owner]
  (reify
    om/IRender
    (render [this]
      (let [group-class (if (:expanded data) "folder expanded" "folder")]
        (dom/li nil
                (dom/div #js {:className group-class}
                         (dom/div #js {:className "group-title"}
                                  (dom/a #js {:className "group-select"}
                                         (dom/span nil (:name data))
                                         (dom/span #js {:className "count"} (str "(" (:count data) ")")))
                                  (if (:expanded data)
                                    (dom/a #js {:className "minus-button"
                                                :onClick #(om/update! data [:expanded] false)} "Contraer")
                                    (dom/a #js {:className "plus-button"
                                                :onClick #(om/update! data [:expanded] true)} "Expandir")))
                         (apply dom/ul #js {:className "feed-list"}
                                (om/build-all feed-subscription (:subscriptions data)))))))))
(defn feeds-list [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:id "feeds"}
               (apply dom/ul nil
                       (om/build-all feed-group data))))))

(defn root [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/section #js {:id "sidebar"}
                   (om/build feed-util-buttons data)
                   (om/build common/search-box data)
                   (dom/a #js {:className "menu-item all"} "All Items")
                   (dom/a #js {:className "menu-item favorite"} "Favorites")
                   (dom/a #js {:className "menu-item shared"} "Shared")
                   (om/build feeds-list data)))))
