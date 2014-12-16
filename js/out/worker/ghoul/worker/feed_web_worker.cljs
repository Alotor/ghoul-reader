(ns ghoul.worker.feed-web-worker
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [<!]]
            [cuerdas.core :as str]
            [ghoul.http :as http]))

(def cors-service "https://cors-anywhere.herokuapp.com/")
(def refresh-time-milis (* 30 60 1000))

(def feed-list
  ["http://rss.slashdot.org/Slashdot/slashdot"
   "http://blog.taiga.io/feeds/rss.xml"
   "http://blog.cognitect.com/blog?format=rss"])

(defn ^:export periodic-read []
  (go
    (doseq [feed-url feed-list]
      (-> feed-url
          (str/replace-first #"http://" cors-service)
          http/get-rss <!
          clj->js
          js/postMessage))
    ;(js/setTimeout "ghoul.worker.feed_web_worker.periodic_read()" refresh-time-milis)
    ))

(periodic-read)


