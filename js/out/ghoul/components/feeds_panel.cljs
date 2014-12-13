(ns ghoul.components.feeds-panel
  (:require [om.core :as om]
            [om.dom :as dom]
            [ghoul.state :as state]
            [ghoul.utils :as utils]))

(defn feed-description [data owner]
  (let [set-description-dom!
        (fn []
          (-> owner
              .getDOMNode
              .createShadowRoot
              .-innerHTML
              (set! (-> data
                        utils/restore-tags
                        utils/remove-unallowed-tags))))]
    (reify
      om/IDidMount
      (did-mount [this] (set-description-dom!))
      om/IDidUpdate
      (did-update [this next-props next-state] (set-description-dom!))
      om/IRender
      (render [this]
        (dom/div #js {:className "rss-description" })))))

(defn feed-content [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/article #js {:className "feed-content"}
                   (dom/div #js {:className "rss-item-header"}
                            (dom/h4 #js {:className "rss-title"}
                                    (dom/a #js {:className "rss-link" :href (:link data)}
                                           (:title data)))
                            (dom/h5 #js {:className "rss-description-preview"} (:description data)))
                   (om/build feed-description (:description data))))))

(defn root [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/section #js {:id "feeds-panel"}
                   (dom/div #js {:className "feed-title"}
                            (dom/div #js {:className "feed-title-text"} (str (state/get-title (:selected data)) " - " (:selected data)))
                            (dom/a #js {:className "compact-button"
                                        :onClick (fn [e] (state/toggle-compact-view))} "Compact View")
                            (dom/a #js {:className "expand-button"
                                        :onClick (fn [e] (state/toggle-expanded-view))} "Expanded View"))
                   (apply dom/div #js {:className "feeds-wrapper"}
                          (om/build-all feed-content (:feeds data)))))))
