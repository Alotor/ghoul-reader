(ns ghoul.app.components.popup.state
  (:require [om.core :as om]
            [om.dom :as dom]
            [ghoul.app.state :as state]
            [ghoul.app.messages :refer [msg]]
            [ghoul.app.worker :as worker]
            [ghoul.repository.item :as storage]))

(defn cb-save-popup [owner event]
  (let [state (-> owner (om/get-node "stateArea") .-value)
        clj-state (js->clj (.parse js/JSON state) :keywordize-keys true)]
    (reset! state/global clj-state)
    (storage/clear)
    (worker/update-all-feeds))
  (state/toggle-state-popup))

(defn cb-cancel-popup [owner event]
  (-> owner (om/get-node "stateArea") .-value (set! ""))
  (state/toggle-state-popup))

(defn root [data owner]
  (reify
    om/IDidUpdate
    (did-update [this next-props next-state]
      (-> owner (om/get-node "stateArea") .-value (set! (.stringify js/JSON (clj->js (dissoc @state/global :feeds)) nil 2))))
    om/IRender
    (render [this]
      (dom/div #js {:id "state-popup" :className "input-popup"}
               (dom/div #js {:className "popup-wrapper"}
                        (dom/div #js {:className "second-wrapper"}
                                 (dom/div #js {:className "popup"}
                                          (dom/h2 nil (msg :ghoul.popup.state.title))
                                          (dom/textarea #js {:ref "stateArea" :rows 4})
                                          (dom/div #js {:className "button-holder"}
                                                   (dom/a #js {:onClick (partial cb-save-popup owner)}
                                                          (msg :ghoul.button.ok))
                                                   (dom/a #js {:onClick (partial cb-cancel-popup owner)}
                                                          (msg :ghoul.button.cancel))))))
               (dom/div #js {:className "gray"
                             :onClick state/toggle-feed-popup})))))

