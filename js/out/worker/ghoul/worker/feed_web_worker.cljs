(ns ghoul.worker.feed-web-worker
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [<!]]
            [ghoul.http :as http]
            [ghoul.feeds-storage :as storage]
            ))

(def refresh-time-milis (* 30 60 1000))

(defn update-feed [feed-uid feed-url]
  (go
    (let [feed-data (-> feed-url
                        http/get-rss <!
                        :data :items)]
      (doseq [feed feed-data]
        (-> feed
            (assoc :feeduid feed-uid)
            (storage/add-feed)
            <!))
      (js/postMessage (clj->js {:action "update" :uid feed-uid :result "ok"})))))

(defn manage-command [event]
  (let [data (-> event
                 .-data
                 (js->clj :keywordize-keys true))]
    (cond (= (:action data) "update") (update-feed (:uid data) (:url data))
          :else (.log js/console (str event)))))

(js/addEventListener "message" manage-command)
(storage/init-database)
