(ns ghoul.main
  (:require [om.core :as om]
            [om.dom :as dom]
            [ghoul.state :as state]
            [ghoul.components.header :as header]
            [ghoul.components.sidebar :as sidebar]
            [ghoul.components.feeds-panel :as feeds-panel]))

(defn app-root [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "app-container"}
               (om/build header/root data)
               (dom/div #js {:className "content"}
                        (om/build sidebar/root (:groups data))
                        (om/build feeds-panel/root data))))))

(om/root app-root state/global
  {:target (. js/document (getElementById "app-root"))})

(.log js/console "Ghoul Reader loaded")
