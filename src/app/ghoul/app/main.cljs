(ns ghoul.app.main
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om]
            [cljs.core.async :as async :refer [<!]]
            [dommy.core :refer-macros [sel1]]
            [beicon.core :as rx]
            [hodgepodge.core :as hp]
            [promesa.core :as p]

            [ghoul.repository.item :as item-repository]
            [ghoul.app.worker :as worker]
            [ghoul.app.messages :refer [msg]]
            [ghoul.app.keyboard :as keyboard]

            [ghoul.app.ui.root :as ui]
            [ghoul.app.model.core :as model]
            [ghoul.app.update.core :as update]
            [ghoul.app.update.events :as events]
            ))

(enable-console-print!)

(defn mount-root [main-view state-atom signal]
  (om/root main-view
           state-atom
           {:target (sel1 :#ghoul-reader)
            :shared {:signal signal}
            ;:tx-listen (fn [{:keys [path new-value]} data]
            ;             (if (= path [:selected])
            ;               (state/load-selected-feeds new-value))
            ;             (if (and (= (first path) :items) (= (count path) 3))
            ;               (state/update-item (take 2 path))))
            }))

(defn store-state [state]
  (assoc! hp/local-storage :state state))

(defn restore-state []
  (:state hp/local-storage))

(defn ^:export initialize-app []
  (let [old-state    (restore-state)
        state        (or old-state (model/empty-state))
        state-atom   (atom state)
        event-stream (rx/bus)
        signal (fn [event]
                 (let [event (if (fn? event) (event) event)]
                   (println "Event/" (type event))
                   (rx/push! event-stream event)))]

    (item-repository/init-database)
    #_(state/initialize-state)

    #_(mount-root root/app state/global event-chan)

    (mount-root ui/root state-atom signal)

    (-> event-stream
        (update/create-model-stream state)
        (rx/retry)
        (rx/on-value
         (fn [new-model]
           (reset! state-atom new-model)
           (store-state new-model))))

    ;; Bootstrap the flow
    (signal (update/Refresh.))

    ;; Startup the workers
    (signal (events/StartFeedStream.))
    (signal (events/UpdateFeedRequest. "uuid-1234" "https://blog.taiga.io/feeds/rss.xml"))
    #_(signal (events/StartFaviconStream.))

    ;; (worker/start-feed-worker signal)
    ;; (worker/update-all-feeds state)

    ;; (-> (worker/fetch-favicon "uuid" "http://www.reddit.com/r/programming")
    ;;     (p/then #(println (str ">>> FAVICON " %))))

    #_(keyboard/start-keyboard! event-chan)

    (println (msg :ghoul.initialized))))

(initialize-app)

(defn reload! []
  (println "Figwheel reloaded"))

