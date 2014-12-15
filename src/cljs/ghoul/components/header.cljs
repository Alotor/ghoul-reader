(ns ghoul.components.header
  (:require [om.core :as om]
            [om.dom :as dom]))

(defn root [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/header nil
                  (dom/a #js {:className "menu-icon"} "Menu")
                  (dom/div #js {:className "logo"}
                           (dom/img #js {:src "./images/logo.png" :height "100%"})
                           (dom/div #js {:className "text"}
                                    (dom/span #js {:className "ghoul"} "Ghoul")
                                    (dom/span #js {:className "reader"} "Reader")))))))

