(ns ghoul.http
  (:require [goog.events :as events]
            [goog.dom :as gdom]
            [cljs.core.async :refer [chan put!]]
            [ghoul.parse-rss :as rss])
  (:import [goog.net XhrIo EventType]
           [goog.events EventType])
  (:refer-clojure :exclude [get]))

(def ^:private method-key->method-string
  {:get "GET"
   :put "PUT"
   :post "POST"
   :delete "DELETE"})

(def headers #js {"Cache-Control" "no-cache"})

(defn send [{:keys [method url data response->data]}]
  (let [c (chan)
        xhr (XhrIo.)
        method (method-key->method-string method)]
    (try
      (.send xhr url method data headers)
      (catch js/Error e
        (put! c {:result :error
                 :message (str (.-message e))})))
    (events/listen xhr goog.net.EventType.SUCCESS
                   (fn [e] (put! c (let [response (.getResponseText xhr)
                                         data (response->data response)]
                                     (assoc {} :result :success :data data)))))
    (events/listen xhr goog.net.EventType.ERROR
                   (fn [e] (put! c {:result :error
                                    :message (str (.formatMsg_ xhr "Sending request")
                                               (.getResponseXml xhr))})))
    c))



(defn get [url]
  (send {:method :get, :url url, :response->data identity}))


(defn post [url data]
  (send {:method :post, :url url, :data data, :response->data identity}))


(defn put [url data]
  (send {:method :put, :url url, :data data, :response->data identity}))


(defn delete [url]
  (send {:method :delete, :url url, :response->data identity}))

(defn get-rss [url]
  (send {:method :get, :url url, :response->data rss/parse-document}))
