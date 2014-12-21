(defproject ghoul-reader "0.1.0"
  :description "Offline RSS Reader. Clojurescript + Om"
  :url "http://alotor.github.io/ghoul-reader"
  :license {:name "GNU Affero General Public License"
            :url "http://www.gnu.org/licenses/agpl-3.0.html"}

  :source-paths ["src/cljs"]

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2411"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [om "0.8.0-beta3"]
                 [cuerdas "0.1.0-SNAPSHOT"]
                 [org.clojars.franks42/cljs-uuid-utils "0.1.3"]
                 [com.andrewmcveigh/cljs-time "0.2.4"]
                 [hodgepodge "0.1.0"]]

  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-asciidoctor "0.1.12"]]

  :asciidoctor {:sources "doc/*.ad"
                :to-dir "dist/doc"
                :extract-css true
                :source-highlight true
                :toc :left}

  :cljsbuild {:builds
              {:worker
               {:source-paths ["src/cljs/worker" "src/cljs/common" "src/assets/js"]
                :compiler
                {:output-to "dist/js/worker.js"
                 :source-map "dist/js/worker.js.map"
                 :output-dir "dist/js/out/worker"
                 :preamble ["vendor/xmldom.js"]
                 :optimizations :whitespace
                 :pretty-print  true
                 :language-in :ecmascript5
                 :language-out :ecmascript5}}

               :app
               {:source-paths ["src/cljs/app" "src/cljs/common"]
                :compiler
                {:output-to "dist/js/app.js"
                 :source-map "dist/js/app.js.map"
                 :output-dir "dist/js/out/app"
                 :preamble ["react/react.min.js" "vendor/xmldom.js"]
                 :externs ["react/externs/react.js"]
                 :optimizations :whitespace
                 :pretty-print  true
                 :language-in :ecmascript5
                 :language-out :ecmascript5}}

               :dev
               {:source-paths ["src/cljs/app" "src/cljs/common"]
                :compiler
                {:output-to "dist/js/dev.js"
                 :source-map "dist/js/dev.js.map"
                 :output-dir "dist/js/out/dev"
                 :optimizations :none
                 :pretty-print  true
                 :language-in :ecmascript5
                 :language-out :ecmascript5}}
               }}
  )
