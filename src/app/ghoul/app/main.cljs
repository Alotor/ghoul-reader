(ns ^:figwheel-no-load ghoul.app.main
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om]
            [om.dom :as dom]
            [cuerdas.core :as str]
            [cljs-uuid-utils.core :as uuid]
            [cljs.core.async :as async :refer [<!]]
            [ghoul.repository.item :as item-repository]
            [ghoul.app.state :as state]
            [ghoul.app.worker :as worker]
            [ghoul.app.messages :refer [msg]]
            [ghoul.app.components.root :as root]
            [ghoul.app.keyboard :as keyboard]
            ))

(enable-console-print!)

(defonce event-chan (async/chan))

(defn render-app []
  (om/root root/app
           state/global
           {:target (. js/document (getElementById "app-root"))
            :shared { :event-chan event-chan }
            :tx-listen (fn [{:keys [path new-value]} data]
                         (if (= path [:selected])
                           (state/load-selected-feeds new-value))
                         (if (and (= (first path) :items) (= (count path) 3))
                           (state/update-item (take 2 path))))}))


(defn ^:export initialize-app []
  (item-repository/init-database)
  (state/initialize-state)
  (render-app)
  ;(worker/start-feed-worker)
  ;(worker/update-all-feeds)
  (keyboard/start-keyboard! event-chan)
  (println (msg :ghoul.initialized)))


(initialize-app)

(defn reload! []
  (render-app)
  (println "Figwheel reloaded"))

