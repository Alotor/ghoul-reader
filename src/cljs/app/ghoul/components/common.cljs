(ns ghoul.components.common
  (:require [om.core :as om]
            [om.dom :as dom]
            [ghoul.state :as state]))

(defn search-box [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "search-box"}
               (dom/input {:placeholder "Search"})))))

