(defproject ghoul-reader "0.3.0"
  :description "Offline RSS Reader. Clojurescript & React"
  :url         "http://alotor.github.io/ghoul-reader"
  :license     {:name "GNU Affero General Public License"
                :url "http://www.gnu.org/licenses/agpl-3.0.html"}

  :dependencies [[org.clojure/clojure       "1.7.0"]
                 [org.clojure/clojurescript "1.7.189"]
                 [org.clojure/core.async    "0.2.374"]
                 [org.clojure/core.match    "0.3.0-alpha4"]

                 ;; Utils
                 [prismatic/schema                    "1.0.4"]
                 [com.lucasbradstreet/cljs-uuid-utils "1.0.2"]
                 [com.andrewmcveigh/cljs-time         "0.3.14"]
                 [bidi                                "1.23.1"]
                 [bouncer                             "0.3.3"]

                 ;; Rendering
                 [org.omcljs/om           "1.0.0-alpha28"]
                 [prismatic/om-tools      "0.3.12"]
                 [prismatic/dommy         "1.1.0"]
                 [sablono                 "0.5.1"]
                 [cljsjs/react            "0.14.3-0"]
                 [cljsjs/react-dom        "0.14.3-1"]
                 [cljsjs/react-dom-server "0.14.3-0"]
                 [garden                  "1.3.0"]

                 ;; Test scope
                 [figwheel-sidecar "0.5.0-2" :scope "test"]

                 ;; Best dependencies
                 [funcool/cuerdas    "0.7.1"]
                 [funcool/tubax      "0.1.2"]
                 [funcool/hodgepodge "0.1.4"]
                 [funcool/beicon     "0.3.0"]
                 [funcool/httpurr    "0.2.0"]
                 [funcool/cats       "1.2.0"]
                 [funcool/promesa    "0.6.0"]]

  :target-path "target/%s")
