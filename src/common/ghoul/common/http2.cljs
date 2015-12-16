(ns ghoul.common.http2
  (:require [httpurr.status :as s]
            [httpurr.client.xhr :as xhr]
            [promesa.core :as p]
            [ghoul.parser.rss :as rss]))

(def rss-proxy-base-url "http://localhost:5050/proxy/rss?url=")
(def headers-proxy-base-url "http://localhost:5050/proxy/headers?url=")

(defrecord SubscriptionData  [feed-data])
(defrecord SubscriptionError [status error])
(defrecord FaviconResult [url])
(defrecord FaviconError  [status error])

(defn parse-header [data]
  (-> data js/JSON.parse (js->clj :keywordize-keys true)))

(defn rss-response
  [response]
  (condp = (:status response)
    s/ok (p/resolved (-> response :body rss/parse-document SubscriptionData.))
         (p/resolved (SubscriptionError. (:status response) (:body response)))))

(defn favicon-response
  [response]
  (condp = (:status response)
    s/ok (p/resolved (-> response :body parse-header :favicon-link FaviconResult.))
         (p/resolved (FaviconError. (:status response) (:body response)))))

(defn rss-proxy
  [feed-url]
  (str rss-proxy-base-url feed-url))

(defn header-proxy
  [feed-url]
  (str headers-proxy-base-url feed-url))

(defn fetch-rss [feed-url]
  (-> (rss-proxy feed-url)
      (xhr/get)
      (p/then rss-response)))

(defn fetch-favicon [site-url]
  (-> (header-proxy site-url)
      (xhr/get)
      (p/then favicon-response)))
