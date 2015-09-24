(ns ghoul.app.components.common.newsidebar
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom :include-macros true]
            [ghoul.app.messages :refer [msg]]))

(defcomponent filters [data owner]
  (render [this]
    (dom/section {:className "filters"}
      (dom/ul
        (dom/li (dom/a {:className "all-items" :href "#"} "All items"))
        (dom/li (dom/a {:className "favorites" :href "#"} "Favorites"))
        (dom/li (dom/a {:className "shared" :href "#"} "Shared"))))))

(defcomponent subscriptions [data owner]
  (render [this]
    (dom/section {:className "subscriptions"}
        (dom/h2 "Susbcriptions")
        (dom/a {:className "add-group" :href "#"} "Add group")

        (dom/ul
          (dom/li
            (dom/img {:className "favicon" :src "/images/rssicon.png"})
            (dom/a {:href "#"} "Taiga" (dom/span {:className "count"} "2")))
          (dom/li
            (dom/img {:className "favicon" :src "https://taiga.io/static/images/favicon.png"})
            (dom/a {:href "#"} "Taiga" (dom/span {:className "count"} "2")))
          (dom/li
            (dom/img {:className "favicon" :src "https://taiga.io/static/images/favicon.png"})
            (dom/a {:href "#"} "Taiga" (dom/span {:className "count"} "2")))
          (dom/li {:className "group"}
            (dom/a {:className "toggle-view" :href "#"} "expand")
            (dom/a {:className "group-title" :href "#"}
                   (dom/span {:className "group-title-text"} "Programming")
                   (dom/span {:className "count"} "2"))
            (dom/ul
              (dom/li
                (dom/img {:className "favicon" :src "https://www.redditstatic.com/favicon.ico"})
                (dom/a {:href "#"} "Reddit programming" (dom/span {:className "count"} "2")))
              (dom/li
                (dom/img {:className "favicon" :src "http://slashdot.org/favicon.ico"})
                (dom/a {:href "#"} "Slashdot" (dom/span {:className "count"} "2")))
              ))
          (dom/li {:className "group"}
            (dom/a {:className "toggle-view" :href "#"} "expand")
            (dom/a {:className "group-title" :href "#"}
                   (dom/span {:className "group-title-text"} "Programming")
                   (dom/span {:className "count"} "2"))
            (dom/ul
              (dom/li
                (dom/img {:className "favicon" :src "https://www.redditstatic.com/favicon.ico"})
                (dom/a {:href "#"} "Reddit programming" (dom/span {:className "count"} "2")))
              (dom/li
                (dom/img {:className "favicon" :src "http://slashdot.org/favicon.ico"})
                (dom/a {:href "#"} "Slashdot" (dom/span {:className "count"} "2222")))
              ))
          ))))

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
