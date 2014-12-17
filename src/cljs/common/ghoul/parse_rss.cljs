(ns ghoul.parse-rss)

(defn add-tag
  ([map node tag] (add-tag map node tag tag))
  ([map node target-keyword tag]
   (try
     (assoc map (keyword target-keyword) (-> node (.getElements tag) (aget 0) .getText))
     (catch js/Object e
       (do (.log js/console (str e) node)
           (assoc map (keyword tag) nil))))))

(defn parse-node [node]
  (-> {}
      (add-tag node "title")
      (add-tag node "link")
      (add-tag node "description")
      (add-tag node "creator" "dc:creator")
      (add-tag node "pubDate")
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
