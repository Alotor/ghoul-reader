(ns ghoul.app.components.popup.groups
  (:require [om.core :as om]
            [om.dom :as dom]
            [ghoul.app.state :as state]
            [ghoul.app.messages :refer [msg]]))

(defn hide-popups [data]
  (om/update! (:popup data) [0] :none))

(defn cb-save-popup [owner data]
  (let [group-name (-> owner (om/get-node "groupName") .-value)]
    (state/add-group group-name)
    (-> owner (om/get-node "groupName") .-value (set! ""))
    (hide-popups data)))

(defn cb-cancel-popup [owner data]
  (-> owner (om/get-node "groupName") .-value (set! ""))
  (hide-popups data))

(defn root [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:id "group-popup" :className "input-popup"}
               (dom/div #js {:className "popup-wrapper"}
                        (dom/div #js {:className "second-wrapper"}
                                 (dom/div #js {:className "popup"}
                                          (dom/h2 nil (msg :ghoul.popup.group.title))
                                          (dom/input #js {:ref "groupName"})
                                          (dom/div #js {:className "button-holder"}
                                                   (dom/a #js {:onClick (partial cb-save-popup owner data)}
                                                          (msg :ghoul.button.ok))
                                                   (dom/a #js {:onClick (partial cb-cancel-popup owner data)}
                                                          (msg :ghoul.button.cancel))))))
               (dom/div #js {:className "gray"
                             :onClick #(hide-popups data)})))))
