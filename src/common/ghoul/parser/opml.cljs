(ns ghoul.parser.opml
  (:require [ghoul.parser.utils :as parse]
            [tubax.core :refer [xml->clj]]
            [clojure.zip :as zip]))

(defn parse-outline-node
  "Parse the <outline> nodes from a OPML file"
  [outline-node]
  (let [node-zipper (zip/xml-zip outline-node)
        get         (fn [tag] (-> outline-node :attributes tag))]
    (if-let [children (seq (:content outline-node))]
      (let [feed-items (map parse-outline-node children)]
        {:type   "group"
         :name   (get :text)
         :title  (get :title)
         :feeds  (into [] feed-items)})
      {:type   (get :type)
       :name   (get :text)
       :title  (get :title)
       :url    (get :xmlUrl)})))

(defn parse-document
  "Parse OMPL files returning a clojure map as a result"
  [document]
  (let [parsed-document (xml->clj document)
        document-zipper (zip/xml-zip parsed-document)
        root-elements   (-> document-zipper zip/children)
        head-node       (first (parse/list-by-tag root-elements :head))
        body-node       (first (parse/list-by-tag root-elements :body))
        outline-nodes   (parse/list-by-tag (:content body-node) :outline)
        feed-list       (map parse-outline-node outline-nodes)]
    {:title       (parse/get-tag-value (:content head-node) :title)
     :feeds       (into [] feed-list)}))
