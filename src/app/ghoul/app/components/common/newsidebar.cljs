(ns ghoul.app.components.common.newsidebar
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom :include-macros true]
            [ghoul.app.messages :refer [msg]]
            [ghoul.common.utils :refer [active-classes]]))

(defcomponent filters [data owner]
  (render [this]
    (dom/section {:className "filters"}
      (dom/ul
        (dom/li (dom/a {:className "all-items" :href "#"} "All items"))
        (dom/li (dom/a {:className "favorites" :href "#"} "Favorites"))
        (dom/li (dom/a {:className "shared" :href "#"} "Shared"))))))

(defcomponent subscription [data owner]
  (render [this]
    (let [favicon     (or (-> data :feed :favicon) "/images/rssicon.png")
          title       (-> data :feed :title)
          count       (or (-> data :feed :pending) 0)
          is-selected false]
      (dom/li {:className (active-classes {:selected is-selected})}
        (dom/img {:className "favicon" :src favicon})
        (dom/a {:href "#"} title (dom/span {:className "count"} (str count)))))))

(defcomponent group [data owner]
  (render [this]
    (let [make-feed-data
          (fn [feed]
            (-> {}
                (assoc :selected (:selected data))
                (assoc :feed feed)))

          group-name (-> data :group :name)
          group-selected (= (-> data :selected second) group-name)
          group-feed-uid-set (-> data :group :subscriptions set)
          group-feeds (filter #(-> % :uid group-feed-uid-set) (:feeds data))]

      (dom/li {:className (active-classes ["group"] {:selected group-selected})}
        (dom/a {:className "toggle-view" :href "#"} "expand")
        (dom/a {:className "group-title" :href "#"}
               (dom/span {:className "group-title-text"} group-name)
               (dom/span {:className "count"} "2"))
        (dom/ul
          (om/build-all subscription (map make-feed-data group-feeds)))))))

(defcomponent subscriptions [data owner]
  (render [this]
    (let [make-group-data
          (fn [group]
            (-> {}
                (assoc :selected (:selected data))
                (assoc :feeds (:feeds data))
                (assoc :group group)))]

      (dom/section {:className "subscriptions"}
        (dom/h2 "Susbcriptions")
        (dom/a {:className "add-group" :href "#"} "Add group")

        (dom/ul
          (om/build-all group (map make-group-data (:groups data))))))))

(defcomponent config [data owner]
  (render [this]
    (dom/section {:className "config"}
        (dom/a {:className "button import" :href "#"} "Import OMPL")
        (dom/a {:className "button export" :href "#"} "Export OMPL")
        (dom/a {:className "button refresh" :href "#"} "Refresh feeds"))))

(defcomponent root [data owner]
  (render [this]
    (dom/aside {:id "menu" :className "is-visible"}
      (dom/h1 "Ghoul Reader")
      (dom/a {:className "button add-subscription" :href "#"} "Add subscription")
      (om/build filters data)
      (om/build subscriptions data)
      (om/build config data))))
