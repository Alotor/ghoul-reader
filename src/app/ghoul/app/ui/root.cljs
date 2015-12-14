(ns ghoul.app.ui.root
  (:require
   [om.core :refer [build]]
   [om-tools.core :refer-macros [defcomponent]]
   [sablono.core :as html :refer-macros [html]]

   [ghoul.app.ui.components.feeds-menu :refer [feeds-menu]]
   [ghoul.app.ui.components.articles-view :refer [articles-view]]))


(defcomponent root [data owner]
  (render [_]
    (html
     [:.main-container
      [:aside.main-container__aside
       (build feeds-menu data)]
      [:section.main-container__articles-view
       (build articles-view data)]])))

