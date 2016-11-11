(ns ghoul.parser.rss
  (:require [ghoul.parser.utils :as parse]
            [tubax.core :refer [xml->clj]]
            [clojure.zip :as zip]
            [ghoul.parser.head :as head]))

;; RSS 2.0
(defn parse-rss2-item
  "Parse an RSS 2.0 item inside a channel"
  [item]
  (let [item-zipper   (zip/xml-zip item)
        item-elements (-> item-zipper zip/children)
        get           (fn [tag] (parse/get-tag-value item-elements tag))]
    {:title       (get :title)
     :link        (get :link)
     :description (get :description)
     :uid         (get :guid)
     :pubdate     (-> (get :pubDate) parse/parse-date)}))

(defn normalize-rss2-document
  "Normalizes the datastructure with the RSS2.0 format after XML parsing"
  [parsed-document]
  (let [document-zipper  (zip/xml-zip parsed-document)
        channel-elements (-> document-zipper zip/down zip/children)
        get              (fn [tag] (parse/get-tag-value channel-elements tag))
        raw-item-list    (parse/list-by-tag channel-elements :item)
        item-list        (map parse-rss2-item raw-item-list)]
    {:title       (get :title)
     :link        (get :link)
     :description (get :description)
     :uid         (get :guid)
     :items       (into [] item-list)}))

;; ATOM
(defn parse-atom-item
  "Parse an Atom 1.0 item inside a channel"
  [item]
  (let [item-zipper   (zip/xml-zip item)
        item-elements (-> item-zipper zip/children)
        get           (fn [tag] (parse/get-tag-value item-elements tag))]
    {:title       (get :title)
     :link        (get :link)
     :description (get :summary)
     :uid         (get :id)
     :pubdate     (-> (get :updated) parse/parse-date)}))

(defn normalize-atom-document
  "Normalizes a document with Atom format"
  [parsed-document]
  (let [document-zipper  (zip/xml-zip parsed-document)
        channel-elements (-> document-zipper zip/children)
        get              (fn [tag] (parse/get-tag-value channel-elements tag))
        raw-item-list    (parse/list-by-tag channel-elements :entry)
        item-list        (map parse-atom-item raw-item-list)]
    {:title       (get :title)
     :link        (get :link)
     :description (get :subtitle)
     :uid         (get :id)
     :items       (into [] item-list)}))


(defn parse-document
  "Parse an XML document with the protocols supported"
  [raw-document]
  (let [;; Removes all the rubish before the rss tag
        parsed-document (as-> raw-document $
                              (re-find #"^.*\?>" $)
                              (or (count $) 0)
                              (.substring raw-document $)
                              (xml->clj $))]
    (condp = (:tag parsed-document)
      :rss  (normalize-rss2-document parsed-document)
      :feed (normalize-atom-document parsed-document)
      (throw js/Error "Unknown format"))))
