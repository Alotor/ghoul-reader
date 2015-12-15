(ns ghoul.app.ui.components.feeds-menu
  (:require
   [om.core :refer [build get-shared]]
   [om-tools.core :refer-macros [defcomponent]]
   [sablono.core :as html :refer-macros [html]]
   [ghoul.app.model.query :as q]
   [ghoul.app.update.events :as events]
   [ghoul.app.ui.components.subscriptions-list :refer [subscriptions-list]]))

(defcomponent add-subscription [data owner]
  (render [_]
    (html
     [:section.feeds-menu__section--add-subscription {:class "is-step1"}
      [:.feeds-menu__add-subscription-wrapper
       [:a.feeds-menu__btn--add-subscription {:href "#"} "Add subscripton"]
       [:.feeds-menu__add-container
        [:input.feeds-menu__feed-url {:type "text"
                                      :placeholder "Enter the url of the feed"}]
        [:a.feeds-menu__btn--add-subscription-small {:href "#"}]]
       [:.feeds-menu__feed-info-container
        [:img.feeds-menu__favicon--info-container {:src "/images/rssicon.png"}]
        [:input.feeds-menu__feed-title {:type "text"
                                        :value "feed 10"}]
        [:.feeds-menu__feed-description "Lorem ipsum dolor doleris volantis whatever"]
        [:a.feeds-menu__btn--finish-subscription {:href "#"} "Ok"]]]])))

(defcomponent filters [data owner]
  (render [_]
    (let [signal (get-shared owner :signal)]
      (html
       [:section.feeds-menu__section--filters
        [:ul.feeds-menu__section__items
         [:li.feeds-menu__filter--all-items
          (when (q/selected-all? data) {:class "is-selected"})
          [:a {:href "#"
               :onClick (signal (events/SelectSection. :all))} "All items"]]
         [:li.feeds-menu__filter--favorites
          (when (q/selected-favorites? data) {:class "is-selected"})
          [:a {:href "#"
               :onClick (signal (events/SelectSection. :favorites))} "Favorites"]]
         [:li.feeds-menu__filter--shared
          (when (q/selected-shared? data) {:class "is-selected"})
          [:a {:href "#"
               :onClick (signal (events/SelectSection. :shared))} "Shared"]]]]))))

(defcomponent config [data owner]
  (render [_]
    (html
     [:section.feeds-menu__section--config
      [:a.feeds-menu__btn--import {:href "#"} "Import OMPL"]
      [:a.feeds-menu__btn--export {:href "#"} "Export OMPL"]
      [:a.feeds-menu__btn--refresh {:href "#"} "Refresh feeds"]])))

(defcomponent feeds-menu [data owner]
  (render [_]
    (html
     [:.feeds-menu
      [:h1.feeds-menu__logo "Ghoul Reader"]
      (build add-subscription data)
      (build filters data)
      [:section.feeds-menu__subscription-header
       [:h2.feeds-menu__title--subscriptions "Subscriptions"]
       [:a.feeds-menu__btn--new-group {:href "#"} "Add group"]]
      [:section.feeds-menu__section--subscriptions
       [:.feeds-menu__subscriptions (build subscriptions-list data)]]
      (build config data)])))
