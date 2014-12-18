(ns ghoul.main
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om]
            [om.dom :as dom]
            [cuerdas.core :as str]
            [cljs-uuid-utils :as uuid]
            [cljs.core.async :as async :refer [<!]]
            [ghoul.state :as state]
            [ghoul.feeds-storage :as storage]
            [ghoul.components.header :as header]
            [ghoul.components.sidebar :as sidebar]
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
                 (dom/div #js {:className (str/join " " (list "app-container" class-view class-menu))}
                          (om/build header/root data)
                          (dom/div #js {:className "content"}
                                   (om/build sidebar/root data)
                                   (om/build feeds-panel/root data))))))))

(def update-feed-worker (atom nil))

(defn feed-update [event]
  (let [result (-> event .-data (js->clj :keywordize-keys true))]
    (if (= (:result result) "ok")
      (state/include-feed (:data result)))))

(defn ^:export read-feed [uid url]
  (.log js/console (str "Updating: " uid ", " url))
  (set! (.-onmessage @update-feed-worker) feed-update)
  (.postMessage @update-feed-worker #js {:action "update" :uid uid :url url}))


(defn update-all-feeds []
  (let [list-uid-url (state/list-uid-url)]
    (doseq [cur-uid-url list-uid-url]
      (let [uid (first cur-uid-url)
            url (second cur-uid-url)]
        (read-feed uid url)))))

(defn ^:export initialize-app []
  (storage/init-database)
  (state/initialize-state)
  (om/root app-root
           state/global
           {:target (. js/document (getElementById "app-root"))})
  (reset! update-feed-worker (js/Worker. "js/worker.js"))
  (update-all-feeds)
  (.log js/console "Ghoul Reader initialized"))

(initialize-app)
