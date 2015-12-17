(ns ghoul.parser.rss
  (:require [ghoul.parser.utils :as parse]
            [tubax.core :refer [xml->clj]]
            [clojure.zip :as zip]))

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


(defn parse-document
  "Parse an XML document with a RSS 2.0 format and returns a map"
  [raw-document]
  (let [;; Removes all the rubish before the rss tag
        document (->> raw-document (re-find #"^(.*)<rss") second count
                      (.substring raw-document))
        parsed-document  (xml->clj document)
        documment-zipper (zip/xml-zip parsed-document)
        channel-elements (-> documment-zipper zip/down zip/children)
        get              (fn [tag] (parse/get-tag-value channel-elements tag))
        raw-item-list    (parse/list-by-tag channel-elements :item)
        item-list        (map parse-rss2-item raw-item-list)]
    {:title       (get :title)
     :link        (get :link)
     :description (get :description)
     :uid         (get :guid)
     :items       (into [] item-list)}))
