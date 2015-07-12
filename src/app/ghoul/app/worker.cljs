(ns ghoul.app.worker
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [cljs.core.async :refer [<! timeout]]
            [ghoul.app.state :as state]))

(def ^:private refresh-time-milis (atom (* 5 60 1000)))
(def ^:private update-feed-worker (atom nil))

(defn- feed-update [event]
  (let [result (-> event .-data (js->clj :keywordize-keys true))]
    (if (= (:result result) "ok")
      (state/include-feed (:data result)))))

(defn- ^:export read-feed [uid url]
  (set! (.-onmessage @update-feed-worker) feed-update)
  (.postMessage @update-feed-worker #js {:action "update" :uid uid :url url}))


(defn- update-all-feeds []
  (let [list-uid-url (state/list-uid-url)]
    (doseq [cur-uid-url list-uid-url]
      (let [[uid url] cur-uid-url]
        (read-feed uid url)))))

(defn start-feed-worker []
  (reset! update-feed-worker (js/Worker. "js/ghoul-worker.js"))
  (go-loop []
    (update-all-feeds)
    (<! (timeout @refresh-time-milis))
    (recur)))

(defn ^:export refresh-timer [new-timer]
  (reset! refresh-time-milis new-timer))
