(ns ghoul.app.ui.components.subscriptions-list
  (:require
   [om.core :refer [build get-shared]]
   [om-tools.core :refer-macros [defcomponent]]
   [sablono.core :as html :refer-macros [html]]
   [cljs-uuid-utils.core :as uuid]

   [ghoul.app.model.query :as q]
   [ghoul.app.update.events :as events]))

(defcomponent subscription-feed [{:keys [model feed] :as data} owner]
  (render [_]
    (let [signal (get-shared owner :signal)]
      (html
       [:li.subscriptions-list__subscription--feed
        (when (q/selected-feed? model (:uuid feed)) {:class "is-selected"})
        [:img.subscriptions-list__favicon {:src (:favicon-url feed)}]
        [:a.subscriptions-list__title
         {:href "#"
          :onClick (signal (events/SelectFeed. feed))}

         [:span.subscriptions-list__name (:title feed)]
         [:span.subscriptions-list__count (:pending feed)]]]))))

(defcomponent subscription-group [{:keys [model group] :as data} owner]
  (render [_]
    (let [signal (get-shared owner :signal)]
      (html [:li.subscriptions-list__subscription--group
             {:class [(when (q/selected-group? model (:name group)) "is-selected")
                      (when (:expanded group) "is-expanded")]}

             [:a.subscriptions-list__btn--expand
              {:href "#"
               :onClick (signal (events/ToggleGroupDisplay. group))} "-"]

             [:a.subscriptions-list__group-link
              {:href "#"
               :onClick (signal (events/SelectGroup. group))}

              [:span.subscriptions-list__name--group (:name group)]
              [:span.subscriptions-list__count (:pending group)]]

             [:ul.subscriptions-list__group-feeds
              (for [current (:subscriptions group)]
                (build subscription-feed {:model model :feed current}))]]))))

(defcomponent subscriptions-list [data owner]
  (render [_]
    (html [:ul.subscriptions-list
           (for [current (q/get-subscriptions @data)]
             (cond (q/feed? current)
                   (build subscription-feed
                          {:model data :feed current}
                          {:react-key (uuid/uuid-string (uuid/make-random-uuid))})

                   (q/group? current)
                   (build subscription-group
                          {:model data :group current}
                          {:react-key (str "group."(:name current))})

                   :else
                   [:li (str "-- NOT FOUND --" current)]))])))
