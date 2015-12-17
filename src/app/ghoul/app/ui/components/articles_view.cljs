(ns ghoul.app.ui.components.articles-view
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.match :refer-macros [match]]
            [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [sablono.core :as html :refer-macros [html]]
            [cljs.core.async :as async :refer [<!]]

            [ghoul.app.ui.dom :as dom]
            [ghoul.repository.item :as items]
            [ghoul.app.model.query :as q]
            [ghoul.app.ui.components.subscription-header :refer [subscription-header]]
            [ghoul.app.ui.components.article :refer [article]]))

(def initial-feeds 5)

(defn selected->items [model {:keys [type]}]
  (let [[index-type index-id] type]
    (match [index-type index-id]
      [:group group-id] (->> (q/get-group-feeds model group-id)
                               (map :uuid)
                               (items/retrieve-items-by-uid))
      [:feed feed-uuid] (items/retrieve-items-by-uid [feed-uuid])
      :else               (items/retrieve-all-items))))

(defn load-all-items [model owner]
  (go (let [selected (om/get-state owner :selected)
            loaded-items (-> model (selected->items selected) <!)]
        (om/set-state! owner {:items loaded-items
                           :displaying initial-feeds}))))

(defn cb-scroll [owner]
  (fn [e]
    ;; Load more when we're close to the end of the scroll
    (let [node (.. e -target)
          to-display (when (>= (+ (.-scrollTop node)
                                  (.-clientHeight node))
                               (* (.-scrollHeight node) 0.98))
                       (om/update-state! owner :displaying inc))])

    ;; Mark the item as read
    #_(let [first-article-dom (get-first-article-dom owner)
          first-article-uid (.getAttribute first-article-dom "data-uid")]
      (when (not (= first-article-uid (:currently-reading state)))
        (om/set-state! owner :currently-reading first-article-uid)
        (om/update-state! owner :displaying-items inc)
        (.log js/console "read!")))))

(defcomponent articles-view [data owner]
  (init-state [_]
    {:selected nil
     :displaying initial-feeds
     :items []})

  (will-mount [_]
    (om/set-state! owner :selected (:selected data))
    (load-all-items data owner))

  (will-receive-props [_ next-props]
    ;; If the selected element has changed
    (when (not (= (:selected data) (-> owner om/get-state :selected)))
      (do
        (dom/reset-scroll owner "scroll-pane")
        (om/set-state! owner :selected (:selected next-props))
        (load-all-items data owner))))

  (render-state [this {:keys [items displaying]}]
    (html [:.articles-view
           [:section.articles-view__subscription-header
            (om/build subscription-header data)]
           [:section.articles-view__articles-list
            {:ref "scroll-pane"
             :onScroll (cb-scroll owner)}
            (for [cur-item (take displaying items)]
              [:article.articles-view__article (om/build article {:model data :item cur-item})])]])))

