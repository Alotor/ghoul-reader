(ns ghoul.app.model.types
  (:require [schema.core :as s :include-macros true]
            [cljs-uuid-utils.core :as uuid]))

;; FEED DATA
(s/defrecord FeedData
    [title       :- s/Str
     description :- s/Str
     feed-url    :- s/Str
     site-url    :- s/Str
     favicon-url :- s/Str
     uuid        :- s/Str
     pending     :- s/Int])



;; GROUP DATA
(s/defrecord GroupData
    [name          :- s/Str
     expanded      :- s/Bool
     subscriptions :- [FeedData]
     pending       :- s/Int])


;; Constructor helpers

(s/defn create-feed :- FeedData
  "Create an empty feed data"
  ([title description feed-url site-url]
   (create-feed title description feed-url site-url "/images/rssicon.png"))

  ([title description feed-url site-url favicon-url]
   (FeedData. title
              description
              feed-url
              site-url
              favicon-url
              (uuid/uuid-string (uuid/make-random-uuid))
              5)))
