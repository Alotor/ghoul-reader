(ns ghoul.app.components.panel.items
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [om.core :as om]
            [om.dom :as dom]
            [cljs.core.async :as async :refer [timeout]]
            [cuerdas.core :as str]
            [ghoul.common.utils :refer [project mapply active-classes next-last ppeek]]
            [ghoul.app.messages :refer [msg]]
            [ghoul.common.utils :as utils]))

(defn mark-item-read [data]
  (om/update! (:item data) :read true))

(defn decrement-pending-count [data]
  (om/transact! (:feed data) :pending dec))

(defn change-to-compact-view [data]
  (om/update! (:feeds-view data) [:compact-view]))

(defn change-to-expanded-view [data]
  (om/update! (:feeds-view data) [:expanded-view]))

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
    result))

(defn get-top [item]
  (let [node (-> item .getDOMNode)
        parent (-> node .-parentElement)
        item-bounding-rect (.getBoundingClientRect node)
        parent-bounding-rect (.getBoundingClientRect parent)
        item-top (- (.-top item-bounding-rect) (.-top parent-bounding-rect))]
    item-top))

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
    om/IRenderState
    (render-state [this state]
      (let [item-data (:item data)
            feed-data (:feed data)]
        (.log js/console "Rendering.." (str "_" (:uid item-data)))
        (dom/article #js {:data-uid (str "_" (:uid item-data))
                          :className (active-classes [:feed-content] {:item-read (true? (:read item-data))})
                          :style #js {"backgroundColor" (:bgcolor state)}}
          (dom/div #js {:className "rss-item-header"}
            (dom/h4 #js {:className "rss-title"}
              (dom/a #js {:className "rss-link" :href (or (:link item-data) "#")}
                     (str (:title feed-data) " - " (:title item-data))))
            (dom/h5 #js {:className "rss-description-preview"}
              (-> item-data :description utils/restore-tags str/strip-tags)))
          (om/build item-description (:description item-data)))))))

(defn nodelist-to-seq
  [nl]
  (let [result-seq (map #(.item nl %) (range (.-length nl)))]
    (doall result-seq)))

(defn top-distance [dom-node]
  (let [title-node (.querySelector js/document ".feed-title")
        title-node-bounding (.getBoundingClientRect title-node)
        title-node-bottom (.-bottom title-node-bounding)
        dom-node-bounding (.getBoundingClientRect dom-node)
        dom-node-top (.-top dom-node-bounding)
        dom-node-scroll-height (- dom-node-top title-node-bottom)]
    dom-node-scroll-height))

(defn reading? [dom-node]
  (< (top-distance dom-node) 50))

(defn article-list [owner]
  (let [node (.getDOMNode owner)
        dom-articles (.querySelectorAll js/document "article")]
    (nodelist-to-seq dom-articles)))

(defn get-first-article-dom [owner]
  (->> (article-list owner) (filter reading?) last))

(defn get-next-article-dom [owner]
  (->> (article-list owner) (filter (comp not reading?)) first))

(defn get-previous-article-dom [owner]
  (->> (article-list owner) (filter reading?) next-last))

(defn scroll-node-into-view [node]
  (let [wrapper-node (.querySelector js/document ".feeds-wrapper")
        position (- (.-offsetTop node) 100)]
    (.log js/console (str ">> Move to: " position))
    (set! (.-scrollTop wrapper-node) position)))

(defn scroll-article-into-view [uuid]
  (scroll-node-into-view (.querySelector js/document "article[data-uid='" uuid "']")))

(defn item-list [data owner]
  (reify
    om/IInitState
    (init-state [this]
      {:displaying-items 5
       :currently-reading nil})

    om/IDidMount
    (did-mount [this]
      (let [move-scroll-next!
            (fn []
              (when-let [article-dom (get-next-article-dom owner)]
                (scroll-node-into-view article-dom)))

            move-scroll-previous!
            (fn []
              (when-let [article-dom (get-previous-article-dom owner)]
                (scroll-node-into-view article-dom)))

            event-chan (:event-chan (om/get-shared owner))]

        (go-loop []
          (let [next-event (<! event-chan)]
            (condp = (first next-event)
              :next-item (move-scroll-next!)
              :previous-item (move-scroll-previous!))
            (recur)))))

    om/IWillUpdate
    (will-update [this next-props next-state]
      (if (not= (-> owner om/get-props :selected) (-> next-props :selected))
        (do
          (-> owner .getDOMNode .-scrollTop (set! 0))
          (om/set-state! owner :displaying-items 5))))

    om/IDidUpdate
    (did-update [this prev-props prev-state]
      (let [element-height (-> owner .getDOMNode .-scrollHeight)
            parent-height (-> owner .getDOMNode .-parentNode .-clientHeight)]
        (if (>= parent-height element-height)
          (om/update-state! owner :displaying-items inc))))

    om/IRenderState
    (render-state [this state]
      (let [cb-scroll
            (fn [e]
              ;; Load more when we're close to the end of the scroll
              (let [node (.getDOMNode owner)
                    to-display (if (>= (+ (.-scrollTop node) (.-clientHeight node)) (* (.-scrollHeight node) 0.98))
                                 (inc (:displaying-items state))
                                 (:displaying-items state))]
                (om/set-state! owner :displaying-items to-display))

              ;; Mark the item as read
              (let [first-article-dom (get-first-article-dom owner)
                    first-article-uid (.getAttribute first-article-dom "data-uid")]
                (when (not (= first-article-uid (:currently-reading state)))
                  (om/set-state! owner :currently-reading first-article-uid)
                  (om/update-state! owner :displaying-items inc)
                  (.log js/console "read!"))))

            get-feed
            (fn [feeds uid] (first (filter #(= (:uid %) uid) feeds)))]
        (apply dom/div #js {:className "feeds-wrapper"
                            :onScroll cb-scroll
                            :onResize cb-scroll
                            :data-reading (:currently-reading state)}
               (om/build-all item-content (map #(-> {}
                                                    (assoc :feed (get-feed (:feeds data) (:feeduid %)))
                                                    (assoc :item %))
                                               (take (:displaying-items state) (:items data)))))))))

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
                    :onClick #(change-to-compact-view data)}
               (msg :ghoul.menu.compact-view))
        (dom/a #js {:className "expand-button"
                    :onClick #(change-to-expanded-view data)}
               (msg :ghoul.menu.expanded-view))))))

(defn root [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/section #js {:id "feeds-panel"}
        (om/build feed-title (project data :selected :feeds-view :feeds))
        (om/build item-list (project data :selected :feeds :items))))))
