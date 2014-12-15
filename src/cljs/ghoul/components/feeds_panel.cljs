(ns ghoul.components.feeds-panel
  (:require [om.core :as om]
            [om.dom :as dom]))

(defn feed-content [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/article #js {:className "feed-content"}
                   (dom/div #js {:className "rss-item-header"}
                            (dom/h4 #js {:className "rss-title"}
                                    (dom/a #js {:className "rss-link" :href "http://feeds.weblogssl.com/~r/vidaextra/~3/xVAgkTSy7AU/los-usuarios-de-pc-tambien-podran-disfrutar-de-dead-or-alive-5-last-round"}
                                           "Los usuarios de PC también podrán disfrutar de Dead or Alive 5: Last Round"))
                            (dom/h5 #js {:className "rss-description-preview"} "‘Dead or Alive 5: Last Round’ ya tiene su fecha de lanzamiento fijada para el 20 de febrero de 2015 para Xbox One y PS4. La buena noticia es que también se lanzará una versión para PC ese mismo día de lanzamiento, no hay necesidad de esperar."))
                   (dom/div #js {:className "rss-description"} "== Description ==")))))
(defn root [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/section #js {:id "feeds-panel"}
                   (dom/div #js {:className "feed-title"}
                            (dom/div #js {:className "feed-title-text"} "Sunlight foundation")
                            (dom/a #js {:className "compact-button"} "Compact View")
                            (dom/a #js {:className "expand-button"} "Expanded View"))
                   (dom/div #js {:className "feeds-wrapper"}
                            (om/build feed-content data))))))
