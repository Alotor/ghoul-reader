(ns ghoul.components.feed-popup
  (:require [om.core :as om]
            [om.dom :as dom]
            [ghoul.state :as state]
            [ghoul.components.common :as common]))

(defn cb-save-popup [owner event]
  (let [url (-> owner (om/get-node "urlInput") .-value)]
    (.log js/console (str "Adding: " url))
    (state/add-rss-subscription url)
    (-> owner (om/get-node "urlInput") .-value (set! ""))
    (state/toggle-feed-popup)))

(defn cb-cancel-popup [owner event]
  (-> owner (om/get-node "urlInput") .-value (set! ""))
  (state/toggle-feed-popup))

(defn root [data owner]
  (reify
    om/IDidUpdate
    (did-update [this next-props next-state]
      (-> owner (om/get-node "urlInput") .-value (set! "https://blog.taiga.io/feeds/rss.xml")))
    om/IRender
    (render [this]
      (dom/div #js {:id "feed-popup"}
               (dom/div #js {:className "popup-wrapper"}
                        (dom/div #js {:className "second-wrapper"}
                                 (dom/div #js {:className "popup"}
                                          (dom/h2 nil "Introduzca la URL del RSS")
                                          (dom/input #js {:ref "urlInput"})
                                          (dom/div #js {:className "button-holder"}
                                                   (dom/a #js {:onClick (partial cb-save-popup owner)} "OK")
                                                   (dom/a #js {:onClick (partial cb-cancel-popup owner)} "Cancel")))))
               (dom/div #js {:className "gray"
                             :onClick state/toggle-feed-popup})))))

