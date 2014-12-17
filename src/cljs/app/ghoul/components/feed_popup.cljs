(ns ghoul.components.feed-popup
  (:require [om.core :as om]
            [om.dom :as dom]
            [ghoul.state :as state]
            [ghoul.components.common :as common]))

(defn root [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:id "feed-popup"}
               (dom/div #js {:className "popup-wrapper"}
                        (dom/div #js {:className "popup"}
                                 (dom/h2 nil "Introduzca la URL del RSS")
                                 (dom/input nil)
                                 (dom/div #js {:className "button-holder"}
                                          (dom/a nil "OK")
                                          (dom/a nil "Cancel"))))
               (dom/div #js {:className "gray"})))))

