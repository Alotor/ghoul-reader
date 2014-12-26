(ns ghoul.app.state2
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [<!]]
            [cljs-uuid-utils :as uuid]
            [ghoul.common.http :as http]
            [ghoul.repository.item :as item-repository]))

(def global
  (atom {:current-view :list ; or :detail
         :feeds-view [:expanded-view] ; or :compact-view
         :show-menu false
         :popup :none
         :selected [:all-items] ;[:group "Open Source"] [:feed "f90eebc0-83c8-11e4-b4a9-0800200c9a66"]

         ;; Groups
         :groups [{:name "Open Source"
                   :uid "c73f26a0-83c8-11e4-b4a9-0800200c9a66"
                   :expanded true
                   :subscriptions [ "f90eebc0-83c8-11e4-b4a9-0800200c9a66"
                                    "07aed140-83c9-11e4-b4a9-0800200c9a66"]}
                  {:name "Clojure"
                   :uid "2f83cef0-83c9-11e4-b4a9-0800200c9a66"
                   :subscriptions [ "32fe28a0-83c9-11e4-b4a9-0800200c9a66"]}]

         ;; Feeds
         :feeds [{:title "Slashdot"
                  :uid "f90eebc0-83c8-11e4-b4a9-0800200c9a66"
                  :site-url "http://slashdot.org/"
                  :feed-url "http://rss.slashdot.org/Slashdot/slashdot"
                  :favicon "http://slashdot.org/favicon.ico"
                  :pending 20}
                 {:title "Taiga"
                  :uid "07aed140-83c9-11e4-b4a9-0800200c9a66"
                  :site-url "https://blog.taiga.io/"
                  :feed-url "https://blog.taiga.io/feeds/rss.xml"
                  :favicon "https://blog.taiga.io/theme/images/favicon.png"
                  :pending 10}
                 {:title "Cognitect Blog"
                  :uid "32fe28a0-83c9-11e4-b4a9-0800200c9a66"
                  :feed-url "http://blog.cognitect.com/blog?format=rss"
                  :site-url "http://blog.cognitect.com/"
                  :favicon "http://blog.cognitect.com/favicon.ico"
                  :pending 20}]

         :items []}))

(defn list-uid-url []
  (map #(-> [] (conj (:uid %)) (conj (:feed-url %))) (:feeds @global)))

(defn initialize-state []
  (.log js/console "INIT")
  (go (let [result (<! (item-repository/retrieve-all-feeds))]
        (.log js/console (str ">> Retrieving " (count result)))
        (swap! global assoc :items result))))
