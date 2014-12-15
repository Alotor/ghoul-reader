(ns ghoul.state)

(def global
  (atom {:current-view :list ; or :detail
         :feeds-view :expanded-view ; or :compact-view
         :show-menu true
         :groups [{:name "Open Source"
                   :uid "c73f26a0-83c8-11e4-b4a9-0800200c9a66"
                   :subscriptions [{:title "Slashdot"
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
                                   ]}
                  {:name "Clojure"
                   :uid "2f83cef0-83c9-11e4-b4a9-0800200c9a66"
                   :subscriptions [{:title "Cognitect Blog"
                                    :uid "32fe28a0-83c9-11e4-b4a9-0800200c9a66"
                                    :feed-url "http://blog.cognitect.com/blog?format=rss"
                                    :site-url "http://blog.cognitect.com/"
                                    :favicon "http://blog.cognitect.com/favicon.ico"
                                    :pending 20
                                    }]}]
         :feeds [{:title "Taiga Abies veitchii Release (v1.4.0)"
                  :link "https://blog.taiga.io/taiga-abies-veitchii-release-v140.html"
                  :description "..."
                  :creator "Taiga Team"
                  :pubDate "Wed, 10 Dec 2014 13:00:00 +0100"
                  :subscription "07aed140-83c9-11e4-b4a9-0800200c9a66"
                  :read true}]}))
