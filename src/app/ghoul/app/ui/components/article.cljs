(ns ghoul.app.ui.components.article
  (:require
   [om.core :refer [build]]
   [om-tools.core :refer-macros [defcomponent]]
   [sablono.core :as html :refer-macros [html]]
   [ghoul.app.ui.dom :as dom]
   [ghoul.app.model.query :as q]))

(defcomponent article [{:keys [model item] :as data} owner]
  (did-mount [this]
    (dom/set-shadow-root! (dom/get-node owner "description")
                          (:description item)))

  (did-update [this next-props next-state]
    (dom/set-shadow-root! (dom/get-node owner "description")
                          (:description item)))

  (render [this]
    (let [feed (q/get-feed-by-uuid model (:feeduid item))]
      (html
       [:.article
        [:.article__header
         [:h4.article__title
          [:a.article__title-link {:href (:link item)
                                   :target "_blank"} (:title item)]]
         [:h5.article__feed
          [:img.article__favicon {:src (:favicon-url feed)}]
          [:a.article__feed-link {:href (:site-url feed) :target "_blank"} (:title feed)]]]
        [:.article__content {:ref "description"}]]))))
