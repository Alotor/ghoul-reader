(ns ghoul.app.model.query
  (:require [ghoul.app.model.types :as types]))

(defn get-feed-by-uuid [model uuid]
  (get-in model [:feeds uuid]))

(defmulti get-data (fn [_ [type]] type))

(defmethod get-data :feed [model [_ uuid]]
  (get-feed-by-uuid model uuid))

(defmethod get-data :group [model [_ title feeds expanded editing]]
  (let [feeds-values (map #(get-data model [:feed %]) feeds)
        group-pending (reduce #(+ (:pending %2) %1) 0 feeds-values)]
    (types/create-group title expanded feeds-values group-pending editing)))

(defn get-subscriptions [model]
  (->> (:index model)
       (map (partial get-data model))))

(defn selected-all? [model]
  (= (-> model :selected :type) [:all]))

(defn selected-favorites? [model]
  (= (-> model :selected :type) [:favorites]))

(defn selected-shared? [model]
  (= (-> model :selected :type) [:shared]))

(defn selected-feed? [model uuid]
  (= (-> model :selected :type) [:feed uuid]))

(defn selected-group? [model title]
  (= (-> model :selected :type) [:group title]))

(defn feed? [value]
  (= (:type value) :feed))

(defn group? [value]
  (= (:type value) :group))

(defn get-all-feeds [model]
  (-> model :feeds vals))

(defn get-group-feeds [model group-id]
  (let [fnz (fn [[_ id]] (= group-id id))
        [_ _ feeds-uuids] (first (filter fnz (:index model)))]
    (map #(get-in model [:feeds %]) feeds-uuids)))
