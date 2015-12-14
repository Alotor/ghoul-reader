(ns ghoul.app.ui.components.subscriptions-list
  (:require
   [om.core :refer [build]]
   [om-tools.core :refer-macros [defcomponent]]
   [sablono.core :as html :refer-macros [html]]
   [ghoul.app.model.core :as model]))

(defcomponent subscription-feed [data owner]
  (render [_]
    (html [:li.subscriptions-list__subscription--feed
           [:img.subscriptions-list__favicon {:src (:favicon-url data)}]
           [:a.subscriptions-list__title {:href "#"}
            [:span.subscriptions-list__name (:title data)]
            [:span.subscriptions-list__count (:pending data)]]])))

(defcomponent subscription-group [data owner]
  (render [_]
    (html [:li.subscriptions-list__subscription--group {:class "is-expanded"}
           [:a.subscriptions-list__btn--expand {:href "#"} "expand"]

           [:a.subscriptions-list__group-link {:href "#"}
            [:span.subscriptions-list__name--group (:name data)]
            [:span.subscriptions-list__count (:pending data)]]

           [:ul.subscriptions-list__group-feeds
            (for [current (:subscriptions data)]
              (build subscription-feed current))]])))

(defcomponent subscriptions-list [data owner]
  (render [_]
    (html [:ul.subscriptions-list
           (for [current (model/get-subscriptions @data)]
             (cond (model/feed? current)
                   (build subscription-feed current)

                   (model/group? current)
                   (build subscription-group current)

                   :else
                   [:li (str "-- NOT FOUND --" current)]))])))
