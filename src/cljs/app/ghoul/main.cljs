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
            class-menu (if (:show-menu data) "menu-expanded")]
        (dom/div nil
                 (om/build feed-popup/root data)
                 (dom/div #js {:className (str/join " " (list "app-container" class-view class-menu))}
                          (om/build header/root data)
                          (dom/div #js {:className "content"}
                                   (om/build sidebar/root (:groups data))
                                   (om/build feeds-panel/root data))))))))

(om/root app-root state/global
  {:target (. js/document (getElementById "app-root"))})

(.log js/console "Ghoul Reader loaded")

(def update-feed-worker (js/Worker. "js/worker.js"))

(defn ^:export read-feed [uid url]
  (let [cb-worker (fn [event] (.log js/console (str ">> Result" (-> event .-data (js->clj :keywordize-keys true)))))]
    (set! (.-onmessage update-feed-worker) cb-worker)
    (.postMessage update-feed-worker #js {:action "update" :uid uid :url url})))

;(go
;  (let [_ (<! (storage/init-database))
;        _ (<! (storage/add-feed {;:uid (uuid/uuid-string (uuid/make-random-uuid))
;                                 :uid "529c62d7-5ace-4568-bef9-20de75338616"
;                                 :title (str "Test " (js/Date.))
;                                 :description (str ">>> XXXX" (js/Date.))}))
;        result (<! (storage/retrieve-all-feeds))]
;    (.log js/console (str result))))


(go (let [_ (<! (storage/init-database))
          result (<! (storage/retrieve-all-feeds))]
      (swap! state/global assoc :feeds result)))

;read-feed("07aed140-83c9-11e4-b4a9-0800200c9a66" "https://blog.taiga.io/feeds/rss.xml")
;read-feed("f90eebc0-83c8-11e4-b4a9-0800200c9a66" "http://rss.slashdot.org/Slashdot/slashdot")
;read-feed("32fe28a0-83c9-11e4-b4a9-0800200c9a66" "http://blog.cognitect.com/blog?format=rss")
