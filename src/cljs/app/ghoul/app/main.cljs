(ns ghoul.app.main
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om]
            [om.dom :as dom]
            [cuerdas.core :as str]
            [cljs-uuid-utils :as uuid]
            [cljs.core.async :as async :refer [<!]]
            [ghoul.repository.item :as storage]
            [ghoul.app.state2 :as state]
            [ghoul.app.worker :as worker]
            [ghoul.app.messages :refer [msg]]
            [ghoul.app.components.root :as root]))

(defn ^:export initialize-app []
  (storage/init-database)
  (state/initialize-state)
  (om/root root/app
           state/global
           {:target (. js/document (getElementById "app-root"))})
  ;(worker/start-feed-worker)
  ;(worker/update-all-feeds)
  (.log js/console (msg :ghoul.initialized)))

(initialize-app)
