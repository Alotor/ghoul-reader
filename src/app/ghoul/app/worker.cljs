(ns ghoul.app.worker
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan <! >! timeout]]
            [promesa.core :as p]
            [ghoul.app.model.query :as q]
            [ghoul.app.update.core :as update]
            [ghoul.app.update.events :as events]
            [beicon.core :as rx]))

;; TODO refactor this to use stream/promises to get into the flow
;; effects should call the worker
;; everything should have watch for the timeout

;; (def ^:private refresh-time-milis (atom (* 5 60 1000)))
;; (def ^:private update-feed-worker (atom nil))
;; (def ^:private update-feed-signal (atom nil))
;; (def ^:private update-favicon-worker (atom nil))
;; (def ^:private update-favicon-signal (atom nil))

;; (defn- feed-update [event]
;;   (let [result (-> event .-data (js->clj :keywordize-keys true))]
;;     (if (= (:result result) "ok")
;;       (@update-feed-signal (events/FeedUpdated. (:data result))))))

;; (defn get-data [event]
;;   (-> event .-data (js->clj :keywordize-keys true)))

;; (defn- ^:export read-feed [uid url]
;;   (set! (.-onmessage @update-feed-worker) (partial feed-update))
;;   (.postMessage @update-feed-worker #js {:action "update" :uid uid :url url}))

;; (def uuid-handlers (atom {}))

;; (defn fetch-favicon [uid url]
;;   (let [resp-chan (chan)]
;;     (swap! uuid-handlers assoc uid resp-chan)
;;     (set! (.-onmessage @update-favicon-worker)
;;           (fn [msg]
;;             (let [handler (get @uuid-handlers (:uid (get-data msg)))]
;;               (>! handler  msg))))
;;     (p/promise (fn [resolve reject]
;;                  (go (resolve (<! resp-chan))))))

;;   #_(let [result-promise
;;           (p/promise (fn [resolve reject]
;;                        (set! (.-onmessage @update-favicon-worker)
;;                              #(resolve (get-data %)))))]

;;       (.postMessage @update-favicon-worker (clj->js {:action "fetch-favicon" :uid uid :url url}))
;;       result-promise))

;; (defn- update-all-feeds [model]
;;   (doseq [{:keys [uuid feed-url]} (q/get-all-feeds model)]
;;     (println ">>> Update " feed-url uuid)
;;     (read-feed uuid feed-url)))

;; (defn start-feed-worker [signal]
;;   (reset! update-feed-worker    (js/Worker. "js/ghoul_rss_worker.js"))
;;   (reset! update-favicon-worker (js/Worker. "js/ghoul_favicon_worker.js"))

;;   (reset! update-feed-signal signal)
;;   (reset! update-favicon-signal signal)

;;   #_(go-loop []
;;     (update-all-feeds)
;;     (<! (timeout @refresh-time-milis))
;;     (recur)))

;; (defn ^:export refresh-timer [new-timer]
;;   (reset! refresh-time-milis new-timer))


;; ;;;;

(def rss-worker (atom nil))

(defn worker-set-handler! [worker handler]
  (set! (.-onmessage worker)
        (fn [event]
          (let [result (-> event .-data (js->clj :keywordize-keys true))]
            (if (= (:result result) "ok")
              (handler (:data result)))))))

(defn worker-send! [worker message]
  (.postMessage worker (clj->js message)))

(defn parse-feed-update [event]
  (let [result (-> event .-data (js->clj :keywordize-keys true))]
    (when (= (:result result) "ok")
      (:data result))))

(extend-type events/StartFeedStream
  update/EffectEvent
  (-apply-effect [_ model]
    (println ">> Creating worker")
    (reset! rss-worker (js/Worker. "js/ghoul_rss_worker.js")))

  update/WatchEvent
  (-apply-watch [_ model]
    (println ">> Starting feed tream")
    (let [feed-event-stream (rx/bus)]
      ;; Add a new handler of the results of the worker to insert into the stream
      (worker-set-handler!
       @rss-worker
       (fn [data]
         (rx/push! feed-event-stream
                   (events/FeedUpdated. (parse-feed-update data)))))
      feed-event-stream)))


(extend-type events/UpdateFeedRequest
  update/EffectEvent
  (-apply-effect [{:keys [feed-uuid feed-url]} model]
    (println ">>>> Update Feed request")
    (worker-send! @rss-worker {:action "update" :uid feed-uuid :url feed-url})))


(extend-type events/UpdateFeedResponse
  update/UpdateEvent
  (-apply-update [{:keys [data]} model]
    (println ">>>> Update Feed request")
    model))
