(require '[cljs.build.api :as b])

(let [start (System/nanoTime)]
  (println "[DEV] Building Favicon Worker " start)
  (b/build
   (b/inputs "src/worker" "src/common")
   {:main 'ghoul.worker.favicon-fetch
    :output-to "resources/public/js/ghoul_favicon_worker.js"
    :output-dir "resources/public/js/ghoul_favicon_worker"
    :optimizations :whitespace
    :verbose true
    :pretty-print true
    :source-map-timestamp true
    :language-in  :ecmascript5
    :language-out :ecmascript5})
  (println "[DEV] Building RSS Worker. Done after: " (/ (- (System/nanoTime) start) 1e9) "seconds"))
