(ns ghoul.app.ui.components.subscription-header
  (:require
   [om.core :refer [build]]
   [om-tools.core :refer-macros [defcomponent]]
   [sablono.core :as html :refer-macros [html]]
   [ghoul.app.model.query :as q]))

(defcomponent subscription-header [data owner]
  (render [_]
    (let [[selected id] (-> @data :selected :type)
          title (condp = selected
                  :all       "All Items"
                  :favorites "Favorites"
                  :shared    "Shared"
                  :group     id
                  :feed      (-> @data (q/get-feed-by-uuid id) :title))]
      (html [:.subscription-header
             [:h3.subscription-header__title title]]))))
