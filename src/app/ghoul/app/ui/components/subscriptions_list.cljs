(ns ghoul.app.ui.components.subscriptions-list
  (:require
   [om.core :refer [build]]
   [om-tools.core :refer-macros [defcomponent]]
   [sablono.core :as html :refer-macros [html]]))

(defcomponent subscription-feed [data owner]
  (render [_]
    (html [:li.subscriptions-list__subscription--feed
           [:img.subscriptions-list__favicon {:src "/images/rssicon.png"}]
           [:a.subscriptions-list__title {:href "#"}
            [:span.subscriptions-list__name (str "Feed")]
            [:span.subscriptions-list__count (str 10)]]])))

(defcomponent subscription-group [data owner]
  (render [_]
    (html [:li.subscriptions-list__subscription--group {:class "is-expanded"}
           [:a.subscriptions-list__btn--expand {:href "#"} "expand"]

           [:a.subscriptions-list__group-link {:href "#"}
            [:span.subscriptions-list__name--group (str "Group")]
            [:span.subscriptions-list__count (str 10)]]

           [:ul.subscriptions-list__group-feeds
            (for [j (range 0 10)]
              (build subscription-feed data))]])))

(defcomponent subscriptions-list [data owner]
  (render [_]
    (html [:ul.subscriptions-list
           (build subscription-feed data)
           (build subscription-feed data)
           (for [i (range 0 10)]
             (build subscription-group data))])))
