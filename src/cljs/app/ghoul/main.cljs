(ns ghoul.main
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om]
            [om.dom :as dom]
            [cuerdas.core :as str]
            [cljs-uuid-utils :as uuid]
            [cljs.core.async :as async :refer [<!]]
            [ghoul.state :as state]
            [ghoul.worker-api :as worker]
            [ghoul.feeds-storage :as storage]
            [ghoul.components.header :as header]
            [ghoul.components.sidebar :as sidebar]
            [ghoul.components.state-popup :as state-popup]
            [ghoul.components.feed-popup :as feed-popup]
            [ghoul.components.feeds-panel :as feeds-panel]
            [ghoul.components.home-panel :as home-panel]))

(defn app-root [data owner]
  (reify
    om/IRender
    (render [this]
      (let [class-view (name (:feeds-view data))
            class-menu (if (:show-menu data) "menu-expanded")
            class-popup (if (:popup data) (str (name (:popup data)) "-popup-visible") "")]
        (dom/div #js {:className class-popup}
                 (om/build feed-popup/root data)
                 (om/build state-popup/root data)
                 (dom/div #js {:className (str/join " " (list "app-container" class-view class-menu))}
                          (om/build header/root data)
                          (dom/div #js {:className "content"}
                                   (om/build sidebar/root data)
                                   (om/build feeds-panel/root data))))))))

(defn ^:export initialize-app []
  (storage/init-database)
  (state/initialize-state)
  (om/root app-root
           state/global
           {:target (. js/document (getElementById "app-root"))})
  (worker/start-feed-worker)
  (worker/update-all-feeds)
  (.log js/console "Ghoul Reader initialized"))

(initialize-app)
