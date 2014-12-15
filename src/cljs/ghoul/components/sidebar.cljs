(ns ghoul.components.sidebar
  (:require [om.core :as om]
            [om.dom :as dom]))

(defn feed-subscription [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/li nil
              (dom/a nil
                     (dom/span nil (:title data))
                     (dom/span nil (:number data)))))))

(defn feeds-list [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:id "feeds"}
               (dom/ul nil
                       (dom/li nil
                               (dom/div #js {:className "folder expanded"}
                                        (dom/h4 nil
                                                (dom/span nil "Programming")
                                                (dom/span #js {:className "count"} "(773)")
                                                (dom/a #js {:className "plus-button"} "Expandir"))
                                        (dom/ul #js {:className "feed-list"}
                                                (om/build feed-subscription {:title "HackerNews" :number "(11)"})
                                                (om/build feed-subscription {:title "Slashdot" :number "(11)"})
                                                (om/build feed-subscription {:title "Reddit Programming" :number "(11)"})))))))))
(defn root [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/section #js {:id "sidebar"}
                   (dom/div #js {:className "search-box"}
                            (dom/input {:placeholder "Busqueda"}))
                   (dom/a #js {:className "menu-item all"} "All Items")
                   (dom/a #js {:className "menu-item favorite"} "Favorites")
                   (dom/a #js {:className "menu-item shared"} "Shared")
                   (om/build feeds-list data)))))
