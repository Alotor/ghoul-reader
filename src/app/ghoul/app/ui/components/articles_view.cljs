(ns ghoul.app.ui.components.articles-view
  (:require
   [om.core :refer [build]]
   [om-tools.core :refer-macros [defcomponent]]
   [sablono.core :as html :refer-macros [html]]
   [ghoul.app.ui.components.subscription-header :refer [subscription-header]]
   [ghoul.app.ui.components.article :refer [article]]))

(defcomponent articles-view [data owner]
  (render [_]
    (html [:.articles-view
           [:section.articles-view__subscription-header
            (build subscription-header data)]
           [:section.articles-view__articles-list
            (for [v (range 0 4)]
              [:article.articles-view__article (build article data)])]
           ])))

