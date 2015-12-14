(require '[figwheel-sidecar.repl :as r]
         '[figwheel-sidecar.repl-api :as ra])

(println "Starting Figwheel...")

(ra/start-figwheel!
  {:figwheel-options {:css-dirs ["resources/public/css"]
                      :server-port 3000
                      :nrepl-port 7888}
   :build-ids ["dev"]
   :all-builds
   [{:id "dev"
     :source-paths ["src/app" "src/common"]
     :figwheel {:on-jsload "ghoul.app.main/reload!"}
     :compiler {:main 'ghoul.app.main
                :asset-path "js/out"
                :output-to "resources/public/js/ghoul.js"
                :output-dir "resources/public/js/out"
                :source-map-timestamp true }}]})

(ra/cljs-repl)
