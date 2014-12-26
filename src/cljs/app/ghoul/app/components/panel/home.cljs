(ns ghoul.app.components.panel.home
  (:require [om.core :as om]
            [om.dom :as dom]
            [ghoul.app.state :as state]
            [ghoul.app.messages :refer [msg]]))

(defn root [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/section #js {:id "empty-subscription-panel"}
                   (dom/p nil
                          (dom/span nil (msg :ghoul.welcome.first))
                          (dom/span #js {:className "emphasis"}
                                    (msg :ghoul.welcome.title))
                          (dom/span nil "."))
                   (dom/p nil (msg :ghoul.welcome.description))
                   (dom/p nil
                          (dom/span nil (msg :ghoul.welcome.tut1))
                          (dom/a #js {:onClick state/toggle-feed-popup}
                                 (msg :ghoul.welcome.link)))))))
