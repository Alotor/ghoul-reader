(ns ghoul.components.sidebar
  (:require [om.core :as om]
            [om.dom :as dom]
            [ghoul.state :as state]))

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
                         (dom/h4 nil
                                 (dom/span nil (:name data))
                                 (dom/span #js {:className "count"} (str "(" (:count data) ")"))
                                 (if (:expanded data)
                                   (dom/a #js {:className "minus-button"} "Contraer")
                                   (dom/a #js {:className "plus-button"} "Expandir")))
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
                   (dom/div #js {:className "search-box"}
                            (dom/input {:placeholder "Search"}))
                   (dom/a #js {:className "menu-item all"} "All Items")
                   (dom/a #js {:className "menu-item favorite"} "Favorites")
                   (dom/a #js {:className "menu-item shared"} "Shared")
                   (om/build feeds-list data)))))
