(ns ghoul.parser.rss
  (:require [cljs-time.format :as format]
            [cljs-time.coerce :as coerce]
            [cuerdas.core :as str]))

; Wed, 10 Dec 2014 13:00:00 +0100
(defn parse-date [string-date]
  (coerce/to-long
   (try (format/parse (format/formatters :rfc822) (str/replace-first string-date #"GMT" "+0000"))
        (catch js/Object e (.log js/console string-date e)))))

(defn add-tag
  ([map node tag] (add-tag map node tag tag identity))
  ([map node target-keyword tag] (add-tag map node target-keyword tag identity))
  ([map node target-keyword tag transformer]
   (try
     (let [tag-elements (-> node (.getElements tag))
           to-insert (if (and (not (nil? tag-elements))
                              (> (.-length tag-elements) 0))
                       (-> tag-elements (aget 0) .getText transformer)
                       (do (.log js/console (str "Not found " tag)) nil))]
       (assoc map (keyword target-keyword) to-insert))
     (catch js/Object e
       (do (.log js/console (str "Error processing " target-keyword " " tag) node e)
           (assoc map (keyword tag) nil))))))

(defn parse-node [node]
  (-> {}
      (add-tag node "title")
      (add-tag node "link")
      (add-tag node "description")
      (add-tag node "creator" "dc:creator")
      (add-tag node "pubDate" "pubDate" parse-date)
      (add-tag node "uid" "guid")))

(defn parse-document [response]
  (try
    (let [document (-> (js/XMLDoc. response) .-docNode)
          channel-node (-> document (.getElements "channel") (aget 0))
          items-node-list (-> channel-node (.getElements "item"))
          items-parsed (map parse-node (for [x (range 0 (dec (.-length items-node-list)))] (aget items-node-list x)))]
      (-> {}
          (add-tag channel-node "title")
          (add-tag channel-node "link")
          (add-tag channel-node "description")
          (assoc :items items-parsed)))
    (catch js/Object e (do (.log js/console e) nil))))
