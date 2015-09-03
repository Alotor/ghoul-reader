(ns ghoul.parser.rss
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-time.format :as format]
            [cljs-time.coerce :as coerce]
            [cuerdas.core :as str]
            [tubax.core :refer [xml->clj]]
            [clojure.zip :as zip]))

                                        ; Wed, 10 Dec 2014 13:00:00 +0100
(defn parse-date [string-date]
  (coerce/to-long
   (try (format/parse (format/formatters :rfc822) (str/replace-first string-date #"GMT" "+0000"))
        (catch js/Object e (println string-date e)))))

(defn get-tags [elements tag]
  (letfn [(has-tag? [el] (= (:tag el) tag))]
    (->> elements
         (filter has-tag?))))

(defn get-content [elements tag]
  (-> elements
      (get-tags tag)
      first
      :content))

(defn get-value [elements tag]
  (-> elements
      (get-content tag)
      first))

(defn parse-rss2-item [item]
  (let [item-zipper   (zip/xml-zip item)
        item-elements (-> item-zipper zip/children)
        get           (fn [key] (get-value item-elements key))]
    {:title (get :title)
     :link (get :link)
     :description (get :description)
     :uid (get :guid)
     :pubdate (parse-date (get :pubDate))}))


(defn parse-document [document]
  (let [parsed-document  (xml->clj document)
        documment-zipper (zip/xml-zip parsed-document)
        channel-elements (-> documment-zipper zip/down zip/children)
        get              (fn [key] (get-value channel-elements key))
        items            (map parse-rss2-item (get-tags channel-elements :item))]
    {:title (get :title)
     :link (get :link)
     :description (get :description)
     :uid (get :guid)
     :items (into [] items)}))
