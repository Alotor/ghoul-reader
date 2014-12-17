(ns ghoul.state
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [<!]]
            [cljs-uuid-utils :as uuid]
            [ghoul.http :as http]
            [ghoul.feeds-storage :as storage]))

;(defn ^:export hello-world[] (js/alert "HOLA")) ; invoke through ghoul.state.hello_world() in JS
(declare feed-store-temp)
(defn ^:export retrieve-all-feeds []
  (flatten (map second feed-store-temp)))

; Global state
(def global
  (atom {:current-view :list ; or :detail
         :feeds-view :expanded-view ; or :compact-view
         :show-menu false
         :popup nil
         :selected nil
         :groups []
         :general-group-uid nil
         ;:groups [{:name "Open Source"
         ;          :count 10
         ;          :expanded true
         ;          :uid "c73f26a0-83c8-11e4-b4a9-0800200c9a66"
         ;          :subscriptions [{:title "Slashdot"
         ;                           :uid "f90eebc0-83c8-11e4-b4a9-0800200c9a66"
         ;                           :site-url "http://slashdot.org/"
         ;                           :feed-url "http://rss.slashdot.org/Slashdot/slashdot"
         ;                           :favicon "http://slashdot.org/favicon.ico"
         ;                           :pending 20}
         ;                          {:title "Taiga"
         ;                           :uid "07aed140-83c9-11e4-b4a9-0800200c9a66"
         ;                           :site-url "https://blog.taiga.io/"
         ;                           :feed-url "https://blog.taiga.io/feeds/rss.xml"
         ;                           :favicon "https://blog.taiga.io/theme/images/favicon.png"
         ;                           :pending 10}
         ;                          ]}
         ;         {:name "Clojure"
         ;          :count 10
         ;          :expanded true
         ;          :uid "2f83cef0-83c9-11e4-b4a9-0800200c9a66"
         ;          :subscriptions [{:title "Cognitect Blog"
         ;                           :uid "32fe28a0-83c9-11e4-b4a9-0800200c9a66"
         ;                           :feed-url "http://blog.cognitect.com/blog?format=rss"
         ;                           :site-url "http://blog.cognitect.com/"
         ;                           :favicon "http://blog.cognitect.com/favicon.ico"
         ;                           :pending 20
         ;                           }]}]
         :feeds []
         }))


(defn get-group-data [uid]
  (->> @global :groups
       (filter #(= (:uid %) uid))
       first))

(defn get-feed-data [uid]
  (->> @global :groups
      (map :subscriptions)
      flatten
      (filter #(= (:uid %) uid))
      first))

(defn get-title [uid]
  (let [group-data (get-group-data uid)]
    (if (nil? group-data)
      (:title (get-feed-data uid))
      (:name group-data))))

(defn get-group-subscriptions [uid]
  (let [group-data (get-group-data uid)]
    (map :uid (:subscriptions group-data))))

(defn retrieve-feeds [uid]
  (let [group (get-group-data uid)
        subscriptions-list (if (nil? group) [uid] (get-group-subscriptions uid))]
    ;(flatten (map #(if ((set subscriptions-list) (first %)) (second %) '()) feed-store-temp))
    []
    ))


(defn ^:export select-feed[uid]
  (swap! global assoc
         :selected uid
         :feeds (retrieve-feeds uid)))

(defn toggle-compact-view []
  (swap! global assoc :feeds-view :compact-view))

(defn toggle-expanded-view []
  (swap! global assoc :feeds-view :expanded-view))

(defn toggle-menu []
  (swap! global assoc :show-menu (not (:show-menu @global))))

(defn toggle-feed-popup []
  (swap! global assoc :popup (if (nil? (:popup @global)) :feed nil)))

(defn ^:export add-general-group []
  (let [general-group (-> {}
                          (assoc :name "General")
                          (assoc :count 0)
                          (assoc :expanded true)
                          (assoc :uid (uuid/uuid-string (uuid/make-random-uuid)))
                          (assoc :subscriptions []))]
    (swap! global update-in [:groups] #(conj % general-group))))

(defn add-rss-subscription [feed-url]
  (go
    (if (empty? (:groups @global))
      (add-general-group))
    (let [group-idx 0
          feed-data (-> feed-url
                        http/get-rss <!
                        :data)
          subscription (-> {}
                           (assoc :title (:title feed-data))
                           (assoc :uid (uuid/uuid-string (uuid/make-random-uuid)))
                           (assoc :site-url (:link feed-data))
                           (assoc :feed-url feed-url)
                           (assoc :favicon "/images/favicon.png")
                           (assoc :pending 0))]
      (doseq [feed (:items feed-data)]
        ;(-> feed
            ;(assoc :feeduid (:uid subscription))
            ;(storage/add-feed)
            ;<!)
        (swap! global update-in [:feeds] #(conj % feed)))
      (swap! global update-in [:groups group-idx :subscriptions] #(conj % subscription)))))
