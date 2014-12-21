(ns ghoul.app.components.root
  (:require [om.core :as om]
            [om.dom :as dom]
            [cuerdas.core :as str]
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
      (let [class-view (name (:feeds-view data))
            class-menu (if (:show-menu data) "menu-expanded")
            class-popup (str (name (:popup data)) "-popup-visible")]
        (dom/div #js {:className class-popup}
                 (om/build feed-popup/root data)
                 (om/build state-popup/root data)
                 (dom/div #js {:className (str/join " " (list "app-container" class-view class-menu))}
                          (om/build header/root data)
                          (dom/div #js {:className "content"}
                                   (om/build sidebar/root data)
                                   (om/build items-panel/root data))))))))
