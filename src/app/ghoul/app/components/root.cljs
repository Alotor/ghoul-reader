(ns ghoul.app.components.root
  (:require [om.core :as om]
            [om.dom :as dom]
            [cuerdas.core :as str]
            [ghoul.common.utils :refer [project]]
            [ghoul.app.components.common.header :as header]
            [ghoul.app.components.common.newsidebar :as sidebar]
            [ghoul.app.components.popup.state :as state-popup]
            [ghoul.app.components.popup.feed :as feed-popup]
            [ghoul.app.components.popup.groups :as group-popup]
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
          #_(om/build feed-popup/root (project data :popup :feeds))
          #_(om/build group-popup/root (project data :popup))
          #_(om/build state-popup/root (project data :popup))
          (dom/div #js {:className class-app}
            #_(om/build header/root (project data :show-menu))
            (dom/div #js {:className "content"}
              (om/build sidebar/root
                        (project data :popup :selected :groups :feeds))
              (if (empty? (:feeds data))
                (om/build home-panel/root (project data :popup))
                (do
                  (om/build items-panel/root
                            (project data :selected :feeds :feeds-view :items)))))))))))
