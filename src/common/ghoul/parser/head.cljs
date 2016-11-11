(ns ghoul.parser.head
  (:require [cuerdas.core :refer [starts-with? contains?]]))

(defn parse-link
  [link-tag]
  (let [find-att (fn [att]
                   (or (second (re-find (re-pattern (str att "=\"([^\"]*)\"")) link-tag))
                       (second (re-find (re-pattern (str att "='([^']*)'")) link-tag))))]
    {:rel  (find-att "rel")
     :type (find-att "type")
     :href (find-att "href")}))

(defn absolute-href [base-url {link :href}]
  (if (and (starts-with? link "/")
           (not (starts-with? link "//")))
    (str base-url link)
    link))

(defn parse-head
  [document base-url]
  (if-let [document-head (re-find #"<head>(.|\n)*</head>" document)]
    (let [link-seq     (re-seq #"<link[^>]*" document)
          link-info    (map parse-link link-seq)
          find-url     (fn [key value] (->> link-info
                                            (filter #(contains? (key %) value))
                                            first
                                            (absolute-href base-url)))]
      {:rss-link     (find-url :type "rss")
       :atom-link    (find-url :type "atom")
       :favicon-link (find-url :rel "icon")})))
