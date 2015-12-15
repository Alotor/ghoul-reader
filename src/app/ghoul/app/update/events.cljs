(ns ghoul.app.update.events
  (:require [ghoul.app.update.core :as update]
            [ghoul.app.model.update :as mu]))

;; type ∊ (:all, :favorites, :shared)
(defrecord SelectSection [type]
  update/UpdateEvent
  (-apply-update [{:keys [type]} model]
    (assoc-in model [:selected :type] [type])))

(defrecord SelectGroup [group]
  update/UpdateEvent
  (-apply-update [{:keys [group]} model]
    (assoc-in model [:selected :type] [:group (:name group)])))

(defrecord SelectFeed [feed]
  update/UpdateEvent
  (-apply-update [{:keys [feed]} model]
    (assoc-in model [:selected :type] [:feed (:uuid feed)])))

(defrecord ToggleGroupDisplay [group]
  update/UpdateEvent
  (-apply-update [{:keys [group]} model]
    (mu/toggle-group-display model (:name group))))
