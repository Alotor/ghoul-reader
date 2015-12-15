(ns ghoul.app.update.events
  (:require [ghoul.app.update.core :as update]))

;; type ∊ (:all, :favorites, :shared)
(defrecord SelectSection [type]
  update/UpdateEvent
  (-apply-update [{:keys [type]} model]
    (assoc-in model [:selected :type] [type])))
