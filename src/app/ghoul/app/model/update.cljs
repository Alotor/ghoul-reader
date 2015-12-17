(ns ghoul.app.model.update
  (:require [ghoul.app.model.types :as types]))

(defn- update-index [group-name fnz index-value]
  (let [index-type (first  index-value)
        index-id   (second index-value)]
    (if (and (= index-type :group) (= index-id group-name))
      (fnz index-value)
      index-value)))

(defn toggle-group-display
  "Updates the group visibility in the model index"
  [model group-name]
  (as-> group-name $
    (partial update-index $ #(update % 3 not))
    (map $ (:index model))
    (assoc model :index $)))

(defn change-group-name
  "Updates the group name in the model index"
  [model group-name new-name]
  (as-> group-name $
    (partial update-index $ #(assoc % 1 new-name))
    (map $ (:index model))
    (assoc model :index $)))

(defn toggle-editing
  "Updates the group editing toggle in the model index"
  [model group-name]
  (as-> group-name $
    (partial update-index $ #(update % 4 not))
    (map $ (:index model))
    (assoc model :index $)))

(defn add-feed
  "Insert a feed in the feed collection"
  [model feed]
  (assoc-in model [:feeds (:uuid feed)] feed))

(defn insert-feed-index
  "Insert a feed in the index list"
  [model feed]
  (update model :index conj [:feed (:uuid feed)]))

;{:type group, :name GO, :title GO, :feeds [...]}
;{{:type rss, :name Go Discussions, :title Go Discussions, :feed-url http://www.godiscussions.com/forum/external.php?type=RSS, :site-url nil}}

(defmulti parse-import-value (fn [model {:keys [type]}] type))

(defn parse-import-value-in-group [[model feed-uuids] {:keys [title description feed-url site-url]}]
  (let [feed-data (types/create-feed title description feed-url site-url)
        feed-uuid (:uuid feed-data)]
    [(-> model
         (update :update-pending conj feed-uuid)
         (assoc-in [:feeds feed-uuid] feed-data))
     (conj feed-uuids feed-uuid)]))

(defmethod parse-import-value "group" [model {:keys [name feeds]}]
  (let [[new-model feed-uuids] (reduce parse-import-value-in-group [model []] feeds)
        index-entry [:group name feed-uuids true false]]
    (-> new-model
        (update :index conj index-entry))))

(defmethod parse-import-value "rss" [model {:keys [title description feed-url site-url]}]
  (let [feed-data (types/create-feed title description feed-url site-url)
        feed-uuid (:uuid feed-data)
        index-entry [:feed feed-uuid]]
    (-> model
        (update :update-pending conj feed-uuid)
        (update :index conj index-entry)
        (assoc-in [:feeds feed-uuid] feed-data))))

(defn parse-import [model]
  (let [root (-> model :import-data :feeds)]
    (as-> model $
      (assoc $ :update-pending [])
      (reduce parse-import-value $ root))))
