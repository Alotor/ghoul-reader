(ns ghoul.app.components.root
  (:require [om.core :as om]
            [om.dom :as dom]
            [cuerdas.core :as str]
            [ghoul.common.utils :refer [project]]
            [ghoul.app.components.common.header :as header]
            [ghoul.app.components.common.sidebar :as sidebar]
            [ghoul.app.components.popup.state :as state-popup]
            [ghoul.app.components.popup.feed :as feed-popup]
            [ghoul.app.components.panel.items :as items-panel]
            [ghoul.app.components.panel.home :as home-panel]))

(defn app [data owner]
  (reify
    om/IRender
    (render [this]
      (let [class-view (name (first (:feeds-view data)))
            class-menu (if (-> data :show-menu first) "menu-expanded")
            class-popup (-> data :popup first name (str "-popup-visible"))
            class-app (str/join " " (list "app-container" class-view class-menu))]
        (dom/div #js {:className class-popup}
                 (om/build feed-popup/root (project data :popup :feeds))
                 (om/build state-popup/root (project data :popup))
                 (dom/div #js {:className class-app}
                          (om/build header/root (project data :show-menu))
                          (dom/div #js {:className "content"}
                                   (om/build sidebar/root
                                             (project data :popup :selected :groups :feeds))
                                   (if (empty? (:feeds data))
                                     (om/build home-panel/root {})
                                     (om/build items-panel/root
                                               (project data :selected :feeds :feeds-view :items))))))))))
