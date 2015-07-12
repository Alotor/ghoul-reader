(ns ghoul.app.components.popup.state
  (:require [om.core :as om]
            [om.dom :as dom]
            [ghoul.app.state :as state]
            [ghoul.app.messages :refer [msg]]
            [ghoul.app.worker :as worker]
            [ghoul.repository.item :as storage]))

(defn hide-popups [data]
  (om/update! (:popup data) [0] :none))

(defn cb-save-popup [owner data]
  (let [state (-> owner (om/get-node "stateArea") .-value)
        clj-state (js->clj (.parse js/JSON state) :keywordize-keys true)]
    (.log js/console (str clj-state))
    (reset! state/global clj-state)
    (storage/clear)
    (worker/update-all-feeds))
  (hide-popups data))

(defn cb-cancel-popup [owner data]
  (-> owner (om/get-node "stateArea") .-value (set! ""))
  (hide-popups data))

(defn root [data owner]
  (reify
    om/IDidUpdate
    (did-update [this next-props next-state]
      (-> owner (om/get-node "stateArea") .-value (set! (.stringify js/JSON (clj->js (dissoc @state/global :items)) nil 2))))
    om/IRender
    (render [this]
      (dom/div #js {:id "state-popup" :className "input-popup"}
               (dom/div #js {:className "popup-wrapper"}
                        (dom/div #js {:className "second-wrapper"}
                                 (dom/div #js {:className "popup"}
                                          (dom/h2 nil (msg :ghoul.popup.state.title))
                                          (dom/textarea #js {:ref "stateArea" :rows 4})
                                          (dom/div #js {:className "button-holder"}
                                                   (dom/a #js {:onClick (partial cb-save-popup owner data)}
                                                          (msg :ghoul.button.ok))
                                                   (dom/a #js {:onClick (partial cb-cancel-popup owner data)}
                                                          (msg :ghoul.button.cancel))))))
               (dom/div #js {:className "gray"
                             :onClick #(hide-popups data)})))))

