(ns ghoul.app.components.panel.home
  (:require [om.core :as om]
            [om.dom :as dom]
            [ghoul.app.messages :refer [msg]]))

(defn root [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/h4 nil (msg :ghoul.home.title)))))
