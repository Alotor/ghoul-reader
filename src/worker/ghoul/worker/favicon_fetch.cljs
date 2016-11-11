(ns ghoul.worker.favicon-fetch
  (:require [ghoul.common.http2 :as http]
            [promesa.core :as p]))

(enable-console-print!)

(println ">> FETCH WORKER STARTED <<")

(defn send-response [sit-favicon-url]
  (js/postMessage #js {:action "update-favicon"
                       :result "ok"
                       :uuid site-uuid
                       :data favicon-url}))

(defn update-favicon [feed-uid site-url]
  (println "Fetch icon for.. " site-url)
  (-> (http/request-headers site-url)
      (p/then #(do (println "Result>> " %) (get % :favicon-link )))
      (p/then send-response)
      (p/catch #(.error js/console (str "Can't get favicon for " site-url ". " %)))))

(defn manage-command [event]
  (let [data (js->clj (.. event -data) :keywordize-keys true)]
    (condp = (:action data)
      "fetch-favicon"
      (update-favicon (:uid data) (:url data)))))

(js/addEventListener "message" manage-command)

