(ns ghoul.worker.feed-web-worker)

(def counter (atom 0))

(defn ^:export timed-count []
  (swap! counter inc)
  (js/postMessage (str @counter))
  (js/setTimeout "ghoul.worker.feed_web_worker.timed_count()" 60000))

(timed-count)

