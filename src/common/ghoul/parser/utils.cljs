(ns ghoul.parser.utils
  (:require [cljs-time.format :as format]
            [cljs-time.coerce :as coerce]
            [cuerdas.core :as str]))

(defn parse-date
  "Parse dates to conform the format 'Wed, 10 Dec 2014 13:00:00 +0100'"
  [string-date]
  (coerce/to-long
   (try (format/parse (format/formatters :rfc822) (str/replace-first string-date #"GMT" "+0000"))
        (catch js/Object e (println string-date e)))))

(defn list-by-tag
  "Retrieve a list of elements matching the parameter tag"
  [elements tag]
  (letfn [(has-tag? [el] (= (:tag el) tag))]
    (->> elements
         (filter has-tag?))))

(defn get-tag-content
  "Retrieve the content for a given tag"
  [elements tag]
  (if (coll? elements)
    (-> elements
        (list-by-tag tag)
        first
        :content)
    (:content elements)))

(defn get-tag-value
  "Get the value associated with the given tag"
  [elements tag]
  (-> elements
      (get-tag-content tag)
      first))
