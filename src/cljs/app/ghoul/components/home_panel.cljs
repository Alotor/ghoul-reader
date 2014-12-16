(ns ghoul.components.home-panel
  (:require [om.core :as om]
            [om.dom :as dom]))

(defn root [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/h4 nil "Home"))))
