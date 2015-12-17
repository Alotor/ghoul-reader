(ns ghoul.app.update.core
  (:require [beicon.core :as rx]))

;; An abstraction for implement a simple state
;; transition. The `-apply-update` function receives
;; the state and shoudl return the transformed state.

(defprotocol UpdateEvent
  ;; Event -> Model -> Model
  (-apply-update [event model]))

;; An abstraction for perform some async stuff such
;; as communicate with api rest or other resources
;; that implies asynchronous access.
;; The `-apply-watch` receives the state and should
;; return a reactive stream of events (that can be
;; of `UpdateEvent`, `WatchEvent` or `EffectEvent`.

(defprotocol WatchEvent
  ;; Event -> Model -> Stream[Event]
  (-apply-watch [event model]))

;; An abstraction for perform just side effects. It
;; receives state and its return value is completly
;; ignored.

(defprotocol EffectEvent
  ;; Event -> Model -> IO Option[Event]
  (-apply-effect [event model]))

(defn update?
  "Return `true` when `e` satisfies
  the UpdateEvent protocol."
  [e]
  (satisfies? UpdateEvent e))

(defn watch?
  "Return `true` when `e` satisfies
  the WatchEvent protocol."
  [e]
  (satisfies? WatchEvent e))

(defn effect?
  "Return `true` when `e` satisfies
  the EffectEvent protocol."
  [e]
  (satisfies? EffectEvent e))

;(defonce bus (rx/bus))

;(defn emit!
;  "Emits an event or a collection of them.
;  The order of events does not matters."
;  ([event]
;   (rx/push! bus event))
;  ([event & events]
;   (run! #(rx/push! bus %) (into [event] events))))
;
;(defn swap-state
;  "A helper for just apply some function to state
;  without a need to declare additional event."
;  [f]
;  (reify
;    UpdateEvent
;    (-apply-update [_ state]
;      (f state))
;
;    IPrintWithWriter
;    (-pr-writer [mv writer _]
;      (-write writer "#<event:rstore/swap-state>"))))
;
;(defn reset-state
;  "A event that resets the internal state with
;  the provided value."
;  [state]
;  (reify
;    IPrintWithWriter
;    (-pr-writer [_ writer x]
;      (-write writer "#<event:rstore/reset-state ")
;      (-pr-writer state writer x)
;      (-write writer ">"))
;
;    UpdateEvent
;    (-apply-update [_ _]
;      state)))

;; This are the same versions but with corrected signatures and 'safe'

(defrecord Error [^js/Error error]
  EffectEvent
  (-apply-effect [{:keys [error]} model]
    (.error js/console error)))

;; Necessary to kick-start the stream
(defrecord Refresh []
  UpdateEvent
  (-apply-update [_ model] model))

(defn create-model-stream
  "Creates a new stream that will receive a flow of new model instances
  based on the events sent on the signal"
  [event-stream init-model]
  (letfn [(-process-update [model event]
            (let [send-error
                  (fn [error]
                    (rx/push! event-stream (Error. error))
                    model)]
              (try (let [new-model (-apply-update event model)]
                     (if (map? new-model)
                       new-model
                       (send-error (js/Error. "Update didn't return a map"))))
                   (catch js/Object e (send-error e)))))

          (-process-effect [[event model]]
            (try (-apply-effect event model)
                 (catch js/Object e (rx/push! event-stream (Error. e)))))

          (-process-watch [[event model]]
            (try (-apply-watch event model)
                 (catch js/Object e (rx/just (Error. e)))))]

    (let [update-stream (->> event-stream (rx/filter update?))
          watch-stream  (->> event-stream (rx/filter watch?))
          effect-stream (->> event-stream (rx/filter effect?))
          model-stream  (->> update-stream
                             (rx/scan -process-update init-model)
                             (rx/share))]

      ;; Process effects: combine with the latest model to process the new effect
      (as-> effect-stream $
        (rx/with-latest-from vector model-stream $)
        (rx/subscribe $ -process-effect))

      ;; Process event sources: combine with the latest model and the result will be
      ;; pushed to the event-stream bus
      (as-> watch-stream $
        (rx/with-latest-from vector model-stream $)
        (rx/flat-map -process-watch $)
        #_(rx/merge-all $)
        (rx/on-value $ (partial rx/push! event-stream)))

      model-stream)))

