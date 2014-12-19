(ns ghoul.worker-api
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [ghoul.state :as state]
            [cljs.core.async :as async :refer [<! timeout]]))

(def refresh-time-milis (atom (* 5 60 1000)))
(def update-feed-worker (atom nil))

(defn feed-update [event]
  (let [result (-> event .-data (js->clj :keywordize-keys true))]
    (if (= (:result result) "ok")
      (state/include-feed (:data result)))))

(defn read-feed [uid url]
  (.log js/console (str "Updating: " uid ", " url))
  (set! (.-onmessage @update-feed-worker) feed-update)
  (.postMessage @update-feed-worker #js {:action "update" :uid uid :url url}))


(defn update-all-feeds []
  (let [list-uid-url (state/list-uid-url)]
    (doseq [cur-uid-url list-uid-url]
      (let [uid (first cur-uid-url)
            url (second cur-uid-url)]
        (read-feed uid url)))))

(defn ^:export start-feed-worker []
  (reset! update-feed-worker (js/Worker. "js/worker.js"))
  (go-loop []
    (update-all-feeds)
    (<! (timeout @refresh-time-milis))
    (.log js/console "Updating feeds")
    (recur)))

(defn ^:export refresh-timer [new-timer]
  (reset! refresh-time-milis new-timer))
