(ns ghoul.app.worker
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [cljs.core.async :refer [<! timeout]]
            [ghoul.app.model.query :as q]
            [ghoul.app.update.events :as events]))

(def ^:private refresh-time-milis (atom (* 5 60 1000)))
(def ^:private update-feed-worker (atom nil))

(defn- feed-update [signal event]
  (let [result (-> event .-data (js->clj :keywordize-keys true))]
    (if (= (:result result) "ok")
      (signal (events/FeedUpdated. (:data result))))))

(defn- ^:export read-feed [signal uid url]
  (set! (.-onmessage @update-feed-worker) (partial feed-update signal))
  (.postMessage @update-feed-worker #js {:action "update" :uid uid :url url}))

(defn- update-all-feeds [model signal]
  (doseq [{:keys [uuid feed-url]} (q/get-all-feeds model)]
    (println ">>> Update " feed-url uuid)
    (read-feed signal uuid feed-url)))

(defn start-feed-worker [signal]
  (reset! update-feed-worker (js/Worker. "js/ghoul-worker.js"))
  #_(go-loop []
    (update-all-feeds)
    (<! (timeout @refresh-time-milis))
    (recur)))

(defn ^:export refresh-timer [new-timer]
  (reset! refresh-time-milis new-timer))
