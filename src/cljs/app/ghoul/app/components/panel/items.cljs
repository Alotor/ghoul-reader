(ns ghoul.app.components.panel.items
  (:require [om.core :as om]
            [om.dom :as dom]
            [cuerdas.core :as str]
            [ghoul.common.utils :refer [project]]
            [ghoul.app.state :as state]
            [ghoul.app.messages :refer [msg]]
            [ghoul.common.utils :as utils]))

(defn item-description [data owner]
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

(defn item-content [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/article #js {:className "feed-content"
                        :onScroll (fn [e] (.log js/console "scroll " e))
                        :onFocus (fn [e] (.log js/console "focus " e))
                        
                        }
                   (dom/div #js {:className "rss-item-header"}
                            (dom/h4 #js {:className "rss-title"}
                                    (dom/a #js {:className "rss-link" :href (:link data)} (:title data)))
                            (dom/h5 #js {:className "rss-description-preview"}
                                    (-> data :description utils/restore-tags str/strip-tags)))
                   (om/build item-description (:description data))))))

(defn feed-title [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "feed-title"}
               (dom/div #js {:className "feed-title-text"}
                        (let [[section id] (:selected data)]
                          (cond
                            (= section :group) id
                            (= section :feed) (-> (filter #(= (:uid %) id) (:feeds data)) first :title)
                            (= section :all-items) (msg :ghoul.menu.all-items)
                            (= section :shared-items) (msg :ghoul.menu.shared-items)
                            (= section :favorite-items) (msg :ghoul.menu.favorite-items))))
               (dom/a #js {:className "compact-button"
                           :onClick #(om/update! (:feeds-view data) [:compact-view])}
                      (msg :ghoul.menu.compact-view))
               (dom/a #js {:className "expand-button"
                           :onClick #(om/update! (:feeds-view data) [:expanded-view])}
                      (msg :ghoul.menu.expanded-view))))))

(defn item-list [data owner]
  (reify
    om/IRenderState
    (render-state [this state]
      (apply dom/div #js {:className "feeds-wrapper"}
             (om/build-all item-content (:displaying-items state))))))

(defn root [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/section #js {:id "feeds-panel"}
                   (om/build feed-title (project data :selected :feeds-view :feeds))
                   (om/build item-list (project data :items) {:state {:items (:items data)
                                                                      :displaying-items (take 5 (:items data))}})))))
