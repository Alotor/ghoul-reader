(defproject ghoul-reader "0.0.1-SNAPSHOT"
  :description "Offline RSS Reader. Clojurescript + Om"
  :url "http://piweek.github.io/ghoul-reader"
  :license {:name "GNU Affero General Public License"
            :url "http://www.gnu.org/licenses/agpl-3.0.html"}

  :source-paths ["src/cljs"]

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2411"]
                 [om "0.8.0-beta3"]
                 [cuerdas "0.1.0-SNAPSHOT"]]

  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-asciidoctor "0.1.12"]]

  :asciidoctor {:sources "doc/*.ad"
                :to-dir "dist/doc"
                :extract-css true
                :source-highlight true
                :toc :left}

  :cljsbuild {:builds
              {:worker
               {:source-paths ["src/cljs-worker"]
                :compiler {:output-to     "dist/js/worker.js"
                           :source-map    "dist/js/worker.js.map"
                           :output-dir    "dist/js/out-worker"
                           :optimizations :simple
                           :pretty-print  true}}

               :app
               {:source-paths ["src/cljs"]
                :compiler {:output-to     "dist/js/app.js"
                           :source-map    "dist/js/app.js.map"
                           :output-dir    "dist/js/out"
                           :preamble      ["react/react.min.js"]
                           :externs       ["react/externs/react.js"]
                           :optimizations :simple
                           :pretty-print  true}}
               }}
  )
