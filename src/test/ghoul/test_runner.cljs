(ns ghoul.test-runner
  (:require [cljs.test :refer [empty-env]
                       :refer-macros [run-tests]]
            [ghoul.parser.opml-test]))


(enable-console-print!)

(defn main []
  (run-tests (empty-env)
             'ghoul.parser.opml-test))

(set! *main-cli-fn* main)
