(defproject ghoul-reader "0.2.0"
  :description "Offline RSS Reader. Clojurescript + Om"
  :url "http://alotor.github.io/ghoul-reader"
  :license {:name "GNU Affero General Public License"
            :url "http://www.gnu.org/licenses/agpl-3.0.html"}

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "0.0-3308"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.clojure/core.match "0.3.0-alpha4"]
                 [org.omcljs/om "0.8.8"]
                 [com.lucasbradstreet/cljs-uuid-utils "1.0.1"]
                 [com.andrewmcveigh/cljs-time "0.3.10"]
                 [funcool/cuerdas "0.4.0"]
                 [funcool/tubax "0.1.2"]
                 [funcool/hodgepodge "0.1.3"]]

  :plugins [[lein-cljsbuild "1.0.6"]
            [lein-figwheel "0.3.7"]
            [lein-asciidoctor "0.1.14"]
            [lein-sassy "1.0.7"]]

  :sass {:src "resources/public/style"
         :dst "resources/public/css"}

  :source-paths ["src/common" "src/app" "src/worker"]

  :clean-targets ^{:protect false} ["resources/public/js/" "target"]

  :figwheel {:css-dirs ["resources/public/css"]
             :server-port 3000
             :nrepl-port 7888}

  :asciidoctor {:sources "doc/*.ad"
                :to-dir "dist/doc"
                :extract-css true
                :source-highlight true
                :toc :left}

  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src/app" "src/common"]
                :figwheel {:on-jsload "ghoul.app.main/reload!"}
                :compiler {:main ghoul.app.main
                           :asset-path "js/out"
                           :output-to "resources/public/js/ghoul.js"
                           :output-dir "resources/public/js/out"
                           :source-map-timestamp true }}

               {:id "prod"
                :source-paths ["src/app" "src/common"]
                :compiler {:output-to "resources/public/js/ghoul.js"
                           :main ghoul.app.main
                           :optimizations :advanced
                           :pretty-print false}}

               {:id "worker-dev"
                :source-paths ["src/worker" "src/common"]
                :compiler {:output-to "resources/public/js/ghoul-worker.js"
                           :main ghoul.worker-feed-updater
                           ;:asset-path "js/out"
                           ;:output-dir "resources/public/js/worker"
                           :optimizations :whitespace
                           :pretty-print true
                           :source-map-timestamp true }}

               {:id "worker-prod"
                :source-paths ["src/worker" "src/common"]
                :compiler {:output-to "resources/public/js/ghoul-worker.js"
                           :main ghoul.worker.feed-updater
                           :optimizations :advanced
                           :pretty-print false}}
               ]}
  )
