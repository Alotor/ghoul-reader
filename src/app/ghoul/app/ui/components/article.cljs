(ns ghoul.app.ui.components.article
  (:require
   [om.core :refer [build get-node]]
   [om-tools.core :refer-macros [defcomponent]]
   [sablono.core :as html :refer-macros [html]]
   [ghoul.common.utils :as utils]))

(defn set-shadow-root! [node description]
  (let [shadow-root (-> node .-shadowRoot)
        description (-> description
                        utils/restore-tags
                        utils/remove-unallowed-tags)]
    (if (nil? shadow-root)
      (-> node .createShadowRoot .-innerHTML (set! description))
      (-> shadow-root .-innerHTML (set! description)))))

(defcomponent article [data owner]
  (did-mount [this]
    (set-shadow-root! (get-node owner "description") (:description data)))

  (did-update [this next-props next-state]
    (set-shadow-root! (get-node owner "description") (:description data)))

  (render [this]
    (html [:.article
           [:.article__header
            [:h4.article__title
             [:a.article__title-link {:href "#"} (str "Feed1" " - " (:title data))]]]
           [:.article__content {:ref "description"}]])))
