(ns ghoul.app.main
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om]
            [cljs.core.async :as async :refer [<!]]
            [dommy.core :refer-macros [sel1]]

            [ghoul.repository.item :as item-repository]
            [ghoul.app.state :as state]
            [ghoul.app.worker :as worker]
            [ghoul.app.messages :refer [msg]]
            [ghoul.app.keyboard :as keyboard]

            [ghoul.app.ui.root :as ui]
            [ghoul.app.model.core :as model]))

(enable-console-print!)

(defn mount-root [main-view state-atom event-chan]
  (om/root main-view
           state-atom
           {:target (sel1 :#ghoul-reader)
            :shared {:event-chan event-chan}
            ;:tx-listen (fn [{:keys [path new-value]} data]
            ;             (if (= path [:selected])
            ;               (state/load-selected-feeds new-value))
            ;             (if (and (= (first path) :items) (= (count path) 3))
            ;               (state/update-item (take 2 path))))
            }))

(defn ^:export initialize-app []
  (let [event-chan (async/chan)]
    #_(item-repository/init-database)
    #_(state/initialize-state)

    #_(mount-root root/app state/global event-chan)
    (mount-root ui/root model/app-state event-chan)

    #_(worker/start-feed-worker)
    #_(worker/update-all-feeds)

    #_(keyboard/start-keyboard! event-chan)

    (println (msg :ghoul.initialized))))

(initialize-app)

(defn reload! []
  (println "Figwheel reloaded"))

