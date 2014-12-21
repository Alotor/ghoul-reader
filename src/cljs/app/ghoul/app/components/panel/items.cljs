(ns ghoul.app.components.panel.items
  (:require [om.core :as om]
            [om.dom :as dom]
            [cuerdas.core :as str]
            [ghoul.app.state :as state]
            [ghoul.app.messages :refer [msg]]
            [ghoul.common.utils :as utils]))

(defn feed-description [data owner]
  (let [set-description-dom!
        (fn []
          (let [shadow-root (-> owner .getDOMNode .-shadowRoot)
                description (-> data
                                utils/restore-tags
                                utils/remove-unallowed-tags)]
            (if (nil? shadow-root)
              (-> owner .getDOMNode .createShadowRoot .-innerHTML (set! description))
              (-> shadow-root .-innerHTML (set! description)))))]
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
                                    (dom/a #js {:className "rss-link" :href (:link data)} (:title data)))
                            (dom/h5 #js {:className "rss-description-preview"}
                                    (-> data :description utils/restore-tags str/strip-tags)))
                   (om/build feed-description (:description data))))))

(defn root [data owner]
  (reify
    om/IRender
    (render [this]
      (if (and (nil? (:selected data)) (empty? (:groups data)))
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
                                   (msg :ghoul.welcome.link))))
        (dom/section #js {:id "feeds-panel"}
                     (dom/div #js {:className "feed-title"}
                              (dom/div #js {:className "feed-title-text"}
                                       (cond
                                        (and (:selected data)
                                             (not (keyword? (:selected data))))
                                        (str (state/get-title (:selected data)))
                                        (= (:selected data) :all-items) (msg :ghoul.menu.all-items)
                                        (= (:selected data) :shared-items) (msg :ghoul.menu.shared-items)
                                        (= (:selected data) :favorite-items) (msg :ghoul.menu.favorite-items)
                                        :else (msg :ghoul.menu.all-items)))
                              (dom/a #js {:className "compact-button" :onClick (fn [e] (state/toggle-compact-view))}
                                     (msg :ghoul.menu.compact-view))
                              (dom/a #js {:className "expand-button" :onClick (fn [e] (state/toggle-expanded-view))}
                                     (msg :ghoul.menu.expanded-view)))
                     (apply dom/div #js {:className "feeds-wrapper"}
                            (om/build-all feed-content (:feeds data))))))))
