(ns ghoul.app.ui.components.opml-import
  (:require
   [om.core :refer [build get-shared]]
   [om-tools.core :refer-macros [defcomponent]]
   [sablono.core :as html :refer-macros [html]]
   [ghoul.app.ui.dom :as dom]
   [ghoul.app.model.query :as q]
   [ghoul.app.update.events :as events]))

(defcomponent opml-group [{:keys [title]} owner]
  (render [this]
    (html
     [:li.opml-import__item--group
      [:input.opml-import__checkbox {:type "checkbox" :name "feed#{n}" :checked true}]
      [:label.opml-import__item-data {:htmlFor "feed#{n}"}
       [:span.opml-import__item-title title]]])))

(defcomponent opml-feed [{:keys [title description]} owner]
  (render [this]
    (html
     [:li.opml-import__item--feed
      [:input.opml-import__checkbox {:type "checkbox" :name "feed#{n}" :checked true}]
      [:label.opml-import__item-data {:htmlFor "feed#{n}"}
       [:span.opml-import__item-title title]
       (when description
         [:span.opml-import__item-description description])]])))


(defcomponent opml-import [data owner]
  (render [this]
    (let [signal (get-shared owner :signal)
          flatten-list (mapcat #(apply list % (:feeds %)) (-> @data :import-data :feeds))]
      (html
       [:section.opml-import (when (:import-data data) {:class "is-visible"})
        [:.opml-import__main
         [:.opml-import__header
          [:a.opml-import__close
           {:href "#"
            :onClick (dom/click signal (events/DiscardOpmlFile.))} "Cancel"]

          [:h2.opml-import__title "Feeds import"]
          [:a.opml-import__select-all {:href "#"} "select all"]
          [:a.opml-import__select-all {:href "#"} "deselect all"]]

         [:.opml-import__content
          [:ul.opml-import__list
           (for [element flatten-list]
             (condp = (:type element)
               "group" (build opml-group element)
               "rss"   (build opml-feed  element)
               (println ">>???? " element)))
           ]]
         [:.opml-import__button-container
          [:a.opml-import__accept
           {:href "#"
            :onClick (dom/click signal (events/InsertFeedImport.))} "Import"]

          [:a.opml-import__cancel
           {:href "#"
            :onClick (dom/click signal (events/DiscardOpmlFile.))} "Cancel"]]]]))))
