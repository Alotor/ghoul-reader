(ns ghoul.app.update.events
  (:require [ghoul.common.http2 :as http]
            [ghoul.app.update.core :as update]
            [ghoul.app.model.update :as mu]
            [ghoul.app.model.types :as types]
            [ghoul.parser.opml :as opml]
            [promesa.core :as p]
            [beicon.core :as rx]))

;;; Workers events
(defrecord StartFaviconStream [])

(defrecord StartFeedStream [])
(defrecord UpdateFeedRequest  [feed-uuid feed-url])
(defrecord UpdateFeedResponse [data])

;;;;
(defrecord PrintEvent [str])
(defrecord SelectSection [type])
(defrecord SelectGroup [group])
(defrecord SelectFeed [feed])
(defrecord ToggleGroupDisplay [group])
(defrecord AddSubscription [feed-data])
(defrecord FetchSubscriptionData [feed-url])
(defrecord ImportOmplFile [content])
(defrecord DiscardOpmlFile [])
(defrecord CheckFeedImport [])
(defrecord UnheckFeedImport [])
(defrecord ChangeFavicon [uuid favicon-url])
(defrecord UpdateFavicon [uuid])
(defrecord InsertFeedImport [])
(defrecord FeedUpdated [update-data])
(defrecord CreateNewGroup [])
(defrecord GroupUpdateName [old-name new-name])
(defrecord StartEditing [group])
(defrecord MoveFeedToGroup [feed-uuid group-name])


;; Implementations
(extend-type PrintEvent
  update/EffectEvent
  (-apply-effect [{:keys [str]} model]
    (println "PrintEvent/" str)))

;; type ∊ (:all, :favorites, :shared)
(extend-type SelectSection
  update/UpdateEvent
  (-apply-update [{:keys [type]} model]
    (assoc-in model [:selected :type] [type])))

(extend-type SelectGroup
  update/UpdateEvent
  (-apply-update [{:keys [group]} model]
    (assoc-in model [:selected :type] [:group (:name group)])))

(extend-type SelectFeed
  update/UpdateEvent
  (-apply-update [{:keys [feed]} model]
    (assoc-in model [:selected :type] [:feed (:uuid feed)])))

(extend-type ToggleGroupDisplay
  update/UpdateEvent
  (-apply-update [{:keys [group]} model]
    (mu/toggle-group-display model (:name group))))


(extend-type AddSubscription
  update/UpdateEvent
  (-apply-update [{:keys [feed-data]} model]
    (-> model
        (assoc :subscription-data nil)
        (mu/add-feed feed-data)
        (mu/insert-feed-index feed-data)))

  update/WatchEvent
  (-apply-watch [{:keys [feed-data]} model]
    #_(rx/just (UpdateFeed. feed-data))
    ))


(extend-type FetchSubscriptionData
  update/UpdateEvent
  (-apply-update [{:keys [feed-url]} model]
    (-> model
        (assoc-in [:subscription-data :result]   :loading)
        (assoc-in [:subscription-data :feed-url] feed-url)))

  update/WatchEvent
  (-apply-watch [{:keys [feed-url]} model]
    (http/fetch-rss feed-url)))

(extend-type http/SubscriptionData
  update/UpdateEvent
  (-apply-update [{:keys [feed-data]} model]
    (let [feed-url (-> model :subscription-data :feed-url)
          {:keys [title link description]} feed-data
          feed (types/create-feed title description feed-url link)]
      (-> model
          (assoc-in [:subscription-data :data] feed))))

  update/WatchEvent
  (-apply-watch [{:keys [feed-data]} model]
    (http/fetch-favicon (:link feed-data))))

(extend-type http/SubscriptionError
  update/UpdateEvent
  (-apply-update [{:keys [status error]} model]
    (-> model
        (assoc-in [:subscription-data :result] :error)
        (assoc-in [:subscription-data :status] status)
        (assoc-in [:subscription-data :error]  error))))

(extend-type http/FaviconResult
  update/UpdateEvent
  (-apply-update [{:keys [url]} model]
    (-> model
        (assoc-in [:subscription-data :result] :success)
        (assoc-in [:subscription-data :data :favicon-url] url))))

(extend-type http/FaviconError
  update/EffectEvent
  (-apply-effect [{:keys [status error]} model]
    (println "Cannot find the favicon : " status error))

  update/UpdateEvent
  (-apply-update [{:keys [status error]} model]
    (-> model
        (assoc-in [:subscription-data :result] :success))))

(extend-type ImportOmplFile
  update/UpdateEvent
  (-apply-update [{:keys [content]} model]
    (assoc model :import-data (opml/parse-document content))))

(extend-type DiscardOpmlFile
  update/UpdateEvent
  (-apply-update [_ model]
    (assoc model :import-data nil)))

(extend-type ChangeFavicon
  update/UpdateEvent
  (-apply-update [{:keys [uuid favicon-url]} model]
    (-> model
        (assoc-in [:feeds uuid :favicon-url] favicon-url))))

(extend-type UpdateFavicon
  update/WatchEvent
  (-apply-watch [{:keys [uuid]} model]
    (let [feed-url (get-in model [:feeds uuid :feed-url])]
      (-> feed-url
          (http/get-favicon-from-feed)
          (p/then #(ChangeFavicon. uuid %))
          (p/catch #(println (str "ERROR [" feed-url "]") %))))))


(extend-type InsertFeedImport
  update/UpdateEvent
  (-apply-update [_ model]
    (-> model
        mu/parse-import
        (assoc :import-data nil)))

  ;; update/WatchEvent
  ;; (-apply-watch [_ model]
  ;;   (let [updates (->> model
  ;;                      :update-pending
  ;;                      (map #(UpdateFavicon. %)))
  ;;         updates (conj updates (UpdateAllFeeds.))]
  ;;     (rx/from-coll updates)))
  )

(extend-type FeedUpdated
  update/UpdateEvent
  (-apply-update [{:keys [update-data]} model]
    (let [{:keys [feeduid]} update-data]
      (update-in model [:feeds feeduid :pending] inc))))

(extend-type CreateNewGroup
  update/UpdateEvent
  (-apply-update [_ model]
    (update model :index conj [:group "Group" [] false true])))


(extend-type GroupUpdateName
  update/UpdateEvent
  (-apply-update [{:keys [old-name new-name]} model]
    (-> model
        (mu/change-group-name old-name new-name)
        (mu/toggle-editing new-name))))

(extend-type StartEditing
  update/UpdateEvent
  (-apply-update [{:keys [group]} model]
    (-> model
        (mu/toggle-editing (:name group)))))

(extend-type MoveFeedToGroup
  update/UpdateEvent
  (-apply-update [{:keys [feed-uuid group-name]} model]
    (let [new-model (-> model
                        (mu/remove-feed-from-groups feed-uuid)
                        (mu/insert-into-group group-name feed-uuid))]
      new-model)))


