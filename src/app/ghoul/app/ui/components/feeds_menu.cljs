(ns ghoul.app.ui.components.feeds-menu
  (:require
   [cljs.core.match :refer-macros [match]]
   [om.core :refer [build get-shared set-state!]]
   [om-tools.core :refer-macros [defcomponent]]
   [sablono.core :as html :refer-macros [html]]
   [ghoul.common.utils :as utils]
   [ghoul.app.ui.dom :as dom]
   [ghoul.app.model.query :as q]
   [ghoul.app.update.events :as events]
   [ghoul.app.ui.components.subscriptions-list :refer [subscriptions-list]]))

(defcomponent add-subscription [{:keys [subscription-data]} owner]
  (init-state [_]
    {:step "step1"
     :feed-url "https://blog.taiga.io/feeds/rss.xml"})

  (will-receive-props [_ {:keys [subscription-data]}]
    (match [subscription-data]
      [nil]                (set-state! owner {:step "step1"})
      [{:result :success}] (set-state! owner {:step "step3"})
      [{:result :error}]   (set-state! owner {:step "step2"})
      :else nil))

  (render-state [_ {:keys [feed-url step]}]
    (let [signal (get-shared owner :signal)
          is-loading (= (-> subscription-data :result) :loading)]
      (html
       [:section.feeds-menu__section--add-subscription
        {:class [(str "is-" step)
                 (when is-loading "is-loading")]}
        [:.feeds-menu__add-subscription-wrapper
         [:a.feeds-menu__btn--add-subscription
          {:href "#"
           :onClick #(set-state! owner :step "step2")} "Add subscripton"]

         [:.feeds-menu__add-container
          [:input.feeds-menu__feed-url
           {:type "text"
            :placeholder "Enter the url of the feed"
            :onChange (fn [e] (set-state! owner :feed-url (.. e -target -value)))
            :value feed-url
            :disabled is-loading}]

          [:a.feeds-menu__btn--add-subscription-small
           {:href "#"
            :onClick (dom/click signal (events/FetchSubscriptionData. feed-url))}]]

         [:.feeds-menu__feed-info-container
          [:img.feeds-menu__favicon--info-container
           {:src (-> subscription-data :data :favicon-url)}]

          [:input.feeds-menu__feed-title
           {:type "text"
            :value (-> subscription-data :data :title)}]

          [:.feeds-menu__feed-description
           (-> subscription-data :data :description)]

          [:.feeds-menu__subcription-buttons
           [:a.feeds-menu__btn--finish-subscription
            {:href "#"
             :onClick (dom/click signal #(events/AddSubscription. (-> subscription-data :data deref)))} "OK"]

           [:a.feeds-menu__btn--cancel-subscription
            {:href "#"
             :onClick #(set-state! owner :step "step1")} "cancel"]]]]]))))

(defcomponent filters [data owner]
  (render [_]
    (let [signal (get-shared owner :signal)]
      (html
       [:section.feeds-menu__section--filters
        [:ul.feeds-menu__section__items
         [:li.feeds-menu__filter--all-items
          (when (q/selected-all? data) {:class "is-selected"})
          [:a {:href "#"
               :onClick (dom/click signal (events/SelectSection. :all))} "All items"]]
         [:li.feeds-menu__filter--favorites
          (when (q/selected-favorites? data) {:class "is-selected"})
          [:a {:href "#"
               :onClick (dom/click signal (events/SelectSection. :favorites))} "Favorites"]]
         [:li.feeds-menu__filter--shared
          (when (q/selected-shared? data) {:class "is-selected"})
          [:a {:href "#"
               :onClick (dom/click signal (events/SelectSection. :shared))} "Shared"]]]]))))

(defcomponent config [data owner]
  (render [_]
    (let [signal (get-shared owner :signal)]
      (html
       [:section.feeds-menu__section--config
        [:a.feeds-menu__btn--import {:href "#"} "Import OMPL"
         [:input {:type "file"
                  :onChange (dom/read-file #(signal (events/ImportOmplFile. %)))}]]
        [:a.feeds-menu__btn--export {:href "#"} "Export OMPL"]
        [:a.feeds-menu__btn--refresh {:href "#"} "Refresh feeds"]]))))

(defcomponent feeds-menu [data owner]
  (render [_]
    (let [signal (get-shared owner :signal)]
      (html
       [:.feeds-menu
        [:h1.feeds-menu__logo "Ghoul Reader"]
        (build add-subscription (utils/project data :subscription-data))
        (when (= :error (-> data :subscription-data :result))
          [:.feeds-menu__error-message (-> data :subscription-data :data)])
        (build filters data)
        [:section.feeds-menu__subscription-header
         [:h2.feeds-menu__title--subscriptions "Subscriptions"]
         [:a.feeds-menu__btn--new-group {:href "#"
                                         :onClick (dom/click signal (events/CreateNewGroup.))} "Add group"]]
        [:section.feeds-menu__section--subscriptions
         [:.feeds-menu__subscriptions (build subscriptions-list data)]]
        (build config data)]))))
