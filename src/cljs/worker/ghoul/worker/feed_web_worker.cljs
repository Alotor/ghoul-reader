(ns ghoul.worker.feed-web-worker
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [<!]]
            [cuerdas.core :as str]
            [ghoul.http :as http]
            [ghoul.feeds-storage :as storage]
            ))

(def cors-service "https://cors-anywhere.herokuapp.com/")
(def refresh-time-milis (* 30 60 1000))

(defn update-feed [feed-uid feed-url]
  (go
    (let [feed-data (-> feed-url
                        (str/replace-first #"https://" cors-service)
                        (str/replace-first #"http://" cors-service)
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
