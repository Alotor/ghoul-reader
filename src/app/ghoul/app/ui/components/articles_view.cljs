(ns ghoul.app.ui.components.articles-view
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [om.core :refer [build set-state! get-state]]
   [om-tools.core :refer-macros [defcomponent]]
   [sablono.core :as html :refer-macros [html]]
   [cljs.core.async :as async :refer [<!]]

   [ghoul.repository.item :as items]
   [ghoul.app.ui.components.subscription-header :refer [subscription-header]]
   [ghoul.app.ui.components.article :refer [article]]))

(def initial-feeds 1)

(defn load-all-items [owner]
  (go (let [loaded-items (->> (items/retrieve-all-items) <!)]
        (set-state! owner {:items loaded-items
                           :displaying initial-feeds}))))

(defcomponent articles-view [data owner]
  (init-state [_]
    {:selected nil
     :displaying initial-feeds
     :items []})

  (will-mount [_]
    (set-state! owner :selected (:selected data))
    (load-all-items owner))

  (will-receive-props [_ next-props]
    ;; If the selected element has changed
    (when (not (= (:selected data) (-> owner get-state :selected)))
      (do
        (set-state! owner :selected (:selected data))
        (load-all-items owner))))

  (render-state [this {:keys [items displaying]}]
    (html [:.articles-view
           [:section.articles-view__subscription-header
            (build subscription-header data)]
           [:section.articles-view__articles-list
            (for [cur-item (take displaying items)]
              [:article.articles-view__article (build article {:model data :item cur-item})])]])))

