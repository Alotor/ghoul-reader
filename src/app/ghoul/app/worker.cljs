(ns ghoul.app.worker
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [cljs.core.async :refer [<! timeout]]
            [ghoul.app.model.query :as q]
            [ghoul.app.update.core :as update]
            [ghoul.app.update.events :as events]))

;; TODO refactor this to use stream/promises to get into the flow
;; effects should call the worker
;; everything should have watch for the timeout

(def ^:private refresh-time-milis (atom (* 5 60 1000)))
(def ^:private update-feed-worker (atom nil))
(def ^:private update-feed-signal (atom nil))

(defn- feed-update [event]
  (let [result (-> event .-data (js->clj :keywordize-keys true))]
    (if (= (:result result) "ok")
      (do
        (println ">> Updating")
        (@update-feed-signal (events/FeedUpdated. (:data result)))))))

(defn- ^:export read-feed [uid url]
  (set! (.-onmessage @update-feed-worker) (partial feed-update))
  (.postMessage @update-feed-worker #js {:action "update" :uid uid :url url}))

(defn- update-all-feeds [model]
  (doseq [{:keys [uuid feed-url]} (q/get-all-feeds model)]
    (println ">>> Update " feed-url uuid)
    (read-feed uuid feed-url)))

(defn start-feed-worker [signal]
  (reset! update-feed-worker (js/Worker. "js/ghoul-worker.js"))
  (reset! update-feed-signal signal)

  #_(go-loop []
    (update-all-feeds)
    (<! (timeout @refresh-time-milis))
    (recur)))

(defn ^:export refresh-timer [new-timer]
  (reset! refresh-time-milis new-timer))


(extend-type events/UpdateAllFeeds
  update/EffectEvent
  (-apply-effect [_ model]
    (update-all-feeds model)))

(extend-type events/UpdateFeed
  update/EffectEvent
  (-apply-effect [{:keys [feed]} model]
    (read-feed (:uuid feed)
               (:feed-url feed))))
