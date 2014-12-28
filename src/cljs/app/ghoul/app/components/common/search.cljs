(ns ghoul.app.components.common.search
  (:require [om.core :as om]
            [om.dom :as dom]
            [ghoul.app.messages :refer [msg]]))

(defn search-box [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "search-box"}
               (dom/input {:placeholder (msg :ghoul.search.placeholder)})))))

