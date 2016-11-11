(defproject ghoul-reader "0.3.0"
  :description "Offline RSS Reader. Clojurescript & React"
  :url         "http://alotor.github.io/ghoul-reader"
  :license     {:name "GNU Affero General Public License"
                :url "http://www.gnu.org/licenses/agpl-3.0.html"}

  :dependencies [[org.clojure/clojure       "1.7.0"]
                 [org.clojure/clojurescript "1.7.189"]
                 [org.clojure/core.async    "0.2.374"
                  :exclusions [org.clojure/tools.reader]]

                 [org.clojure/core.match    "0.3.0-alpha4"]

                 ;; Utils
                 [prismatic/schema                    "1.0.4"]
                 [com.lucasbradstreet/cljs-uuid-utils "1.0.2"]
                 [com.andrewmcveigh/cljs-time         "0.5.0-alpha1"]
                 [bidi                                "2.0.9"
                  :exclusions [commons-codec]]
                 [bouncer                             "1.0.0"]
                 [com.rpl/specter                     "0.11.0"]

                 ;; Rendering
                 [org.omcljs/om           "1.0.0-alpha36"]
                 [prismatic/om-tools      "0.4.0"]
                 [prismatic/dommy         "1.1.0"]
                 [sablono                 "0.7.2"]
                 [cljsjs/react            "15.0.1-1"]
                 [cljsjs/react-dom        "15.0.1-1"]
                 [cljsjs/react-dom-server "15.0.1-1"]
                 [garden                  "1.3.2"]

                 ;; Test scope
                 [figwheel-sidecar "0.5.3" :scope "test"
                  :exclusions [org.clojure/clojure org.clojure/clojurescript]]

                 ;; Best dependencies
                 [funcool/cuerdas    "0.7.2"]
                 [funcool/tubax      "0.2.0"]
                 [funcool/hodgepodge "0.1.4"]
                 [funcool/beicon     "1.4.0"]
                 [funcool/httpurr    "0.6.0"]
                 [funcool/cats       "1.2.1"]
                 [funcool/promesa    "1.2.0"]]

  :target-path "target/%s")
