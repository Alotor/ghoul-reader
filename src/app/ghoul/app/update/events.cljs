(ns ghoul.app.update.events
  (:require [ghoul.common.http2 :as http]
            [ghoul.app.update.core :as update]
            [ghoul.app.model.update :as mu]
            [ghoul.app.model.types :as types]
            [ghoul.parser.opml :as opml]
            [promesa.core :as p]
            [beicon.core :as rx]))

(defrecord PrintEvent [str]
  update/EffectEvent
  (-apply-effect [{:keys [str]} model]
    (println "PrintEvent/" str)))

;; type ∊ (:all, :favorites, :shared)
(defrecord SelectSection [type]
  update/UpdateEvent
  (-apply-update [{:keys [type]} model]
    (assoc-in model [:selected :type] [type])))

(defrecord SelectGroup [group]
  update/UpdateEvent
  (-apply-update [{:keys [group]} model]
    (assoc-in model [:selected :type] [:group (:name group)])))

(defrecord SelectFeed [feed]
  update/UpdateEvent
  (-apply-update [{:keys [feed]} model]
    (assoc-in model [:selected :type] [:feed (:uuid feed)])))

(defrecord ToggleGroupDisplay [group]
  update/UpdateEvent
  (-apply-update [{:keys [group]} model]
    (mu/toggle-group-display model (:name group))))

(defrecord AddSubscription [feed-data]
  update/UpdateEvent
  (-apply-update [{:keys [feed-data]} model]
    (-> model
        (assoc :subscription-data nil)
        (mu/add-feed feed-data)
        (mu/insert-feed-index feed-data))))

(defrecord FetchSubscriptionData [feed-url]
  update/UpdateEvent
  (-apply-update [_ model]
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

(defrecord ImportOmplFile [content]
  update/UpdateEvent
  (-apply-update [{:keys [content]} model]
    (assoc model :import-data (opml/parse-document content))))

(defrecord DiscardOpmlFile []
  update/UpdateEvent
  (-apply-update [_ model]
    (assoc model :import-data nil)))

(defrecord CheckFeedImport [])
(defrecord UnheckFeedImport [])


(defrecord ChangeFavicon [uuid favicon-url]
  update/UpdateEvent
  (-apply-update [{:keys [uuid favicon-url]} model]
    (-> model
        (assoc-in [:feeds uuid :favicon-url] favicon-url))))

(defrecord UpdateFavicon [uuid]
  update/WatchEvent
  (-apply-watch [{:keys [uuid]} model]
    (let [feed-url (get-in model [:feeds uuid :feed-url])]
      (-> feed-url
          (http/get-favicon-from-feed)
          (p/then #(ChangeFavicon. uuid %))
          (p/catch #(println (str "ERROR [" feed-url "]") %))))))

(defrecord InsertFeedImport []
  update/UpdateEvent
  (-apply-update [_ model]
    (-> model
        mu/parse-import
        (assoc :import-data nil)))

  update/WatchEvent
  (-apply-watch [_ model]
    (->> model
         :update-pending
         (map #(UpdateFavicon. %))
         (take 10)
         (rx/from-coll))))

(defrecord FeedUpdated [update-data]
  update/UpdateEvent
  (-apply-update [{:keys [update-data]} model]
    (let [{:keys [feeduid]} update-data]
      (update-in model [:feeds feeduid :pending] inc))))

(defrecord CreateNewGroup []
  update/UpdateEvent
  (-apply-update [_ model]
    (update model :index conj [:group "Group" [] false true])))


(defrecord GroupUpdateName [old-name new-name]
  update/UpdateEvent
  (-apply-update [{:keys [old-name new-name]} model]
    (-> model
        (mu/change-group-name old-name new-name)
        (mu/toggle-editing new-name))))

(defrecord StartEditing [group]
  update/UpdateEvent
  (-apply-update [{:keys [group]} model]
    (-> model
        (mu/toggle-editing (:name group)))))

(defrecord MoveFeedToGroup [feed-uuid group-name]
  update/UpdateEvent
  (-apply-update [{:keys [feed-uuid group-name]} model]
    (let [new-model (-> model
                        (mu/remove-feed-from-groups feed-uuid)
                        (mu/insert-into-group group-name feed-uuid))]
      new-model)))
