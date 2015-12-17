(ns ghoul.app.ui.components.subscriptions-list
  (:require
   [om.core :as om]
   [om-tools.core :refer-macros [defcomponent]]
   [sablono.core :as html :refer-macros [html]]
   [cljs-uuid-utils.core :as uuid]
   [ghoul.app.ui.dom :as dom]
   [ghoul.app.model.query :as q]
   [ghoul.app.update.events :as events]))

(defcomponent subscription-feed [{:keys [model feed] :as data} owner]
  (render [_]
    (let [signal (om/get-shared owner :signal)]
      (html
       [:li.subscriptions-list__subscription--feed
        (when (q/selected-feed? model (:uuid feed)) {:class "is-selected"})
        [:img.subscriptions-list__favicon {:src (:favicon-url feed)}]
        [:a.subscriptions-list__title
         {:href "#"
          :onClick (dom/click signal (events/SelectFeed. feed))}

         [:span.subscriptions-list__name (:title feed)]
         [:span.subscriptions-list__count (:pending feed)]]]))))

(defcomponent subscription-group [{:keys [model group] :as data} owner]
  (init-state [this]
    {:group-name (:name group)})

  (render-state [_ state]
    (let [signal (om/get-shared owner :signal)]
      (html [:li.subscriptions-list__subscription--group
             {:class [(when (q/selected-group? model (:name group)) "is-selected")
                      (when (:expanded group) "is-expanded")
                      (when (:editing group) "is-editing")]}

             [:a.subscriptions-list__btn--expand
              {:href "#"
               :onClick (dom/click signal (events/ToggleGroupDisplay. group))} "-"]

             [:a.subscriptions-list__group-link
              {:href "#"
               :onClick (dom/click signal (events/SelectGroup. group))}

              [:span.subscriptions-list__name--group (:name group)]
              [:input.subscriptions-list__name-input--group
               {:type "text"
                :autoFocus (:editing group)
                :value (om/get-state owner :group-name)
                :onChange #(om/set-state! owner :group-name (.. % -target -value))
                :onFocus #(.. % -target select)
                :onBlur #(signal (events/GroupUpdateName. (:name group)
                                                   (om/get-state owner :group-name)))
                :onKeyPress #(when (= (.. % -key) "Enter")
                               (signal (events/GroupUpdateName. (:name group)
                                                                (om/get-state owner :group-name))))
                }]
              [:span.subscriptions-list__count (:pending group)]]

             [:ul.subscriptions-list__group-feeds
              (for [current (:subscriptions group)]
                (om/build subscription-feed {:model model :feed current}))]]))))

(defcomponent subscriptions-list [data owner]
  (render [_]
    (html [:ul.subscriptions-list
           (for [current (q/get-subscriptions @data)]
             (cond (q/feed? current)
                   (om/build subscription-feed
                          {:model data :feed current}
                          {:react-key (uuid/uuid-string (uuid/make-random-uuid))})

                   (q/group? current)
                   (om/build subscription-group
                          {:model data :group current}
                          {:react-key (str "group."(:name current))})

                   :else
                   [:li (str "-- NOT FOUND --" current)]))])))
