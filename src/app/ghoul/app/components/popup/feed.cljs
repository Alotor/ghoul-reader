(ns ghoul.app.components.popup.feed
  (:require [om.core :as om]
            [om.dom :as dom]
            [ghoul.app.state :as state]
            [ghoul.app.messages :refer [msg]]))

(defn hide-popups [data]
  (om/update! (:popup data) [0] :none))

(defn cb-save-popup [owner data]
  (let [url (-> owner (om/get-node "urlInput") .-value)]
    (state/add-rss-subscription url)
    (-> owner (om/get-node "urlInput") .-value (set! ""))
    (hide-popups data)))

(defn cb-cancel-popup [owner data]
  (-> owner (om/get-node "urlInput") .-value (set! ""))
  (hide-popups data))

(defn root [data owner]
  (reify

    om/IDidUpdate
    (did-update [this next-props next-state]
      (-> owner (om/get-node "urlInput") .-value (set! "https://blog.taiga.io/feeds/rss.xml")))

    om/IRender
    (render [this]
      (dom/div #js {:id "feed-popup" :className "input-popup"}
        (dom/div #js {:className "popup-wrapper"}
          (dom/div #js {:className "second-wrapper"}
            (dom/div #js {:className "popup"}
              (dom/h2 nil (msg :ghoul.popup.feed.title))
              (dom/input #js {:ref "urlInput"})
              (dom/div #js {:className "button-holder"}
                (dom/a #js {:onClick (partial cb-save-popup owner data)}
                       (msg :ghoul.button.ok))
                (dom/a #js {:onClick (partial cb-cancel-popup owner data)}
                       (msg :ghoul.button.cancel))))))
        (dom/div #js {:className "gray"
                      :onClick #(hide-popups data)})))))

