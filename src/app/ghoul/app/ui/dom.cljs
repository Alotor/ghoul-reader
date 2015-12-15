(ns ghoul.app.ui.dom
  (:require [ghoul.common.utils :as utils]))

(defn get-node
  "A helper function to get at React DOM refs. Given a owning pure node
  extract the DOM ref specified by name."
  ([owner]
   (.findDOMNode js/ReactDOM owner))
  ([owner name]
   {:pre [(string? name)]}
   (some-> (.-refs owner) (aget name) (get-node))))

(defn set-shadow-root!
  "Changes the "
  [node value]
  (let [shadow-root (-> node .-shadowRoot)
        curated-value (-> value
                          utils/restore-tags
                          utils/remove-unallowed-tags)]
    (if (nil? shadow-root)
      (-> node .createShadowRoot .-innerHTML (set! curated-value))
      (-> shadow-root .-innerHTML (set! curated-value)))))
