(ns ghoul.app.ui.components.subscription-header
  (:require
   [om.core :refer [build]]
   [om-tools.core :refer-macros [defcomponent]]
   [sablono.core :as html :refer-macros [html]]))

(defcomponent subscription-header [data owner]
  (render [_]
    (html [:.subscription-header
           [:h3.subscription-header__title "All Items"]])))
