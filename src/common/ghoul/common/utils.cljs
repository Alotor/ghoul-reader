(ns ghoul.common.utils
  (:require [cuerdas.core :as str]))

(defn restore-tags [string]
  (-> string
      (str/replace "&gt;" ">")
      (str/replace "&lt;" "<")
      (str/replace "&quot;" "\"")
      (str/replace "&apos;" "'")
      (str/replace "&amp;" "&")
      (str/replace "&#34;" "\"")
      (str/replace "&#8220;" "“")
      (str/replace "&#8221;" "”")))

(defn remove-unallowed-tags [string]
  (-> string
      ; TODO we should do a white-list approach instead of
      ; blacklisting
      (str/strip-tags "script")
      (str/strip-tags "link")))

(defn project [data & keys]
  (reduce #(assoc %1 %2 (%2 data)) {} keys))

(defn mapply [f & args] (apply f (apply concat (butlast args) (last args))))

(defn active-classes
  ([class-map]
   (active-classes [] class-map))

  ([fixed-classes class-map]
   (->> class-map
        (filter second)
        (map first)
        (into fixed-classes)
        (map name)
        (str/join " "))))

(defn ppeek [item]
  (.log js/console item)
  item)

(defn next-last [coll]
  (if (next (next coll))
    (recur (next coll))
    (first coll)))
