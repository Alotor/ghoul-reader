(ns ghoul.app.main
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om]
            [om.dom :as dom]
            [cuerdas.core :as str]
            [cljs-uuid-utils :as uuid]
            [cljs.core.async :as async :refer [<!]]
            [ghoul.repository.item :as item-repository]
            [ghoul.app.state :as state]
            [ghoul.app.worker :as worker]
            [ghoul.app.messages :refer [msg]]
            [ghoul.app.components.root :as root]))

(defn ^:export initialize-app []
  (item-repository/init-database)
  (state/initialize-state)
  (om/root root/app
           state/global
           {:target (. js/document (getElementById "app-root"))
            :tx-listen (fn [{:keys [path new-value]} data]
                         (.log js/console (str " >>>> Change in " path))
                         (if (= path [:selected])
                           (state/load-selected-feeds new-value))
                         (if (and (= (first path) :items) (= (count path) 3))
                           (state/update-item (take 2 path))))})
  (worker/start-feed-worker)
  (worker/update-all-feeds)
  (.log js/console (msg :ghoul.initialized)))

(initialize-app)
