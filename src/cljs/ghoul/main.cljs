(ns ghoul.main
  (:require [om.core :as om]
            [om.dom :as dom]
            [cuerdas.core :as str]
            [ghoul.state :as state]
            [ghoul.components.header :as header]
            [ghoul.components.sidebar :as sidebar]
            [ghoul.components.feeds-panel :as feeds-panel]
            [ghoul.components.home-panel :as home-panel]))

(defn app-root [data owner]
  (reify
    om/IRender
    (render [this]
      (let [class-view (name (:feeds-view data))
            class-menu (if (:show-menu data) "menu-expanded")]
        (dom/div #js {:className (str/join " " (list "app-container" class-view class-menu))}
                 (om/build header/root data)
                 (dom/div #js {:className "content"}
                          (om/build sidebar/root (:groups data))
                          (om/build feeds-panel/root data)))))))

(om/root app-root state/global
  {:target (. js/document (getElementById "app-root"))})

(.log js/console "Ghoul Reader loaded")

(def feed-worker (js/Worker. "js/worker.js"))
(set! (.-onmessage feed-worker) (fn [event] (.log js/console ">> CALLBACK" event)))
