(ns ghoul.app.components.common.header
  (:require [om.core :as om]
            [om.dom :as dom]
            [ghoul.app.messages :refer [msg]]
            [ghoul.app.components.common.search :as search]))

(defn toggle-menu [cursor]
  (om/transact! (:show-menu cursor) [0] not))

(defn root [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/header nil
                  (dom/a #js {:className "menu-icon"
                              :onClick #(toggle-menu data)} (msg :ghoul.header.menu))
                  (dom/div #js {:className "logo"}
                           (dom/img #js {:src "./images/logo.png" :height "100%"})
                           (dom/div #js {:className "text"}
                                    (dom/span #js {:className "ghoul"} (msg :ghoul.header.ghoul))
                                    (dom/span #js {:className "reader"} (msg :ghoul.header.reader))))
                  (om/build search/search-box {})))))

