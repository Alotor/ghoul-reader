(ns ghoul.app.ui.components.articles-view
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [om.core :refer [build set-state!]]
   [om-tools.core :refer-macros [defcomponent]]
   [sablono.core :as html :refer-macros [html]]
   [cljs.core.async :as async :refer [<!]]

   [ghoul.repository.item :as items]
   [ghoul.app.ui.components.subscription-header :refer [subscription-header]]
   [ghoul.app.ui.components.article :refer [article]]))

(defn load-all-items [owner]
  (go (->> (items/retrieve-all-items) <!
           (set-state! owner :items))))

(defcomponent articles-view [data owner]
  (init-state [_]
    {:items []})

  (will-mount [_]
    (println ">> will-mount: " (:selected data))
    (load-all-items owner))

  (will-receive-props [_ next-props]
    (println ">> will-receive-props: " (:selected data))
    (load-all-items owner))

  (render-state [_ {:keys [items]}]
    (html [:.articles-view
           [:section.articles-view__subscription-header
            (build subscription-header data)]
           [:section.articles-view__articles-list
            (for [cur-item items]
              [:article.articles-view__article (build article cur-item)])]])))

