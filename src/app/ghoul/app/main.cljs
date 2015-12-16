(ns ghoul.app.main
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om]
            [cljs.core.async :as async :refer [<!]]
            [dommy.core :refer-macros [sel1]]
            [beicon.core :as rx]

            [ghoul.repository.item :as item-repository]
            [ghoul.app.state :as state]
            [ghoul.app.worker :as worker]
            [ghoul.app.messages :refer [msg]]
            [ghoul.app.keyboard :as keyboard]

            [ghoul.app.ui.root :as ui]
            [ghoul.app.model.core :as model]
            [ghoul.app.update.core :as update]))

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

(defn ^:export initialize-app []
  (item-repository/init-database)
  (let [state        (model/empty-state)
        state-atom   (atom state)
        event-stream (rx/bus)
        signal (fn [event]
                 (let [event (if (fn? event) (event) event)]
                   (println "Event/" (type event))
                   (rx/push! event-stream event)))]

    #_(state/initialize-state)

    #_(mount-root root/app state/global event-chan)

    (mount-root ui/root state-atom signal)

    (-> event-stream
        (update/create-model-stream state)
        (rx/retry)
        (rx/to-atom state-atom))

    (rx/push! event-stream (update/Refresh.))

    #_(worker/start-feed-worker)
    #_(worker/update-all-feeds)

    #_(keyboard/start-keyboard! event-chan)

    (println (msg :ghoul.initialized))))

(initialize-app)

(defn reload! []
  (println "Figwheel reloaded"))

