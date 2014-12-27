(ns ghoul.app.components.panel.items
  (:require [om.core :as om]
            [om.dom :as dom]
            [cuerdas.core :as str]
            [ghoul.common.utils :refer [project mapply]]
            [ghoul.app.state :as state]
            [ghoul.app.messages :refer [msg]]
            [ghoul.common.utils :as utils]))

(defn get-item-visualization-state [item]
  (let [node (-> item .getDOMNode)
        parent (-> node .-parentElement)
        parent-top (-> parent .-scrollTop)
        parent-bottom (+ parent-top (-> parent .-offsetHeight))
        item-top (- (-> node .-offsetTop) (-> parent .-offsetTop))
        item-bottom (+ item-top (-> node .-offsetHeight))
        result (cond
                 (< item-bottom parent-top) :out-item
                 (and (< item-top parent-top) (< item-bottom parent-bottom)) :partial-out-item
                 (< item-bottom parent-bottom) :in-item
                 (and (< item-top parent-bottom) (> item-bottom parent-bottom)) :partial-in-item
                 :else :future-item)]
    (.log js/console (str "State(" item-top ", " item-bottom ") (" parent-top ", " parent-bottom ") -> " result))
    result))

(defn state->color [state]
  (cond
    (= state :out-item) "black"
    (= state :partial-out-item) "gray"
    (= state :in-item) "green"
    (= state :partial-in-item) "blue"
    (= state :future-item) "red"
    :else "#00000f"))

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
    om/IInitState
    (init-state [this]
      {:bgcolor "#ffffff"})

    om/IDidMount
    (did-mount [this]
      (om/set-state! owner :bgcolor (-> owner get-item-visualization-state state->color)))

    om/IWillUpdate
    (will-update [this next-props next-state]
      (om/set-state! owner :bgcolor (-> owner get-item-visualization-state state->color)))

    om/IRenderState
    (render-state [this state]
      (dom/article #js {:className "feed-content"
                        :style #js {"background-color" (:bgcolor state)}}
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
  (let [new-state (fn []
                    (let [node (.getDOMNode owner)]
                      {:scroll-height (.-scrollHeight node)
                       :scroll-top (.-scrollTop node)
                       :client-height (.-clientHeight node)}))]
    (reify
      om/IDidMount
      (did-mount [this]
        (om/set-state! owner (new-state)))
      om/IRenderState
      (render-state [this state]
        (apply dom/div #js {:className "feeds-wrapper"
                            :onScroll #(om/set-state! owner (-> (new-state)
                                                                (assoc :items (:items state))
                                                                (assoc :displaying-items (:displaying-items state))))}
               (dom/p #js {:style #js {"position" "fixed" "background-color" "white" "border" "1px solid black" "z-index" "1000"}}
                      (str (-> state (dissoc :items) (dissoc :displaying-items))))
               (om/build-all item-content (:displaying-items state) {:state state}))))))

(defn root [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/section #js {:id "feeds-panel"}
                   (om/build feed-title (project data :selected :feeds-view :feeds))
                   (om/build item-list (project data :items) {:state {:items (:items data)
                                                                      :displaying-items (take 5 (:items data))}})))))
