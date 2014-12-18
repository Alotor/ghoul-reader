(ns ghoul.feeds-storage
  (:require [cljs.core.async :refer [chan put!]]))

(def database (atom {}))
(def database-name "ghoul-reader")
(def database-version 10)
(def feeds-storage-name "feeds")

(defn cb-error [e] (.log js/console "error " e))

(defn init-database []
  (let [ret-chan (chan)
        request (.open js/indexedDB database-name database-version)
        cb-upgrade (fn [e]
                     (let [db (-> e .-target .-result)]
                       (if (-> db .-objectStoreNames (.contains feeds-storage-name))
                         (.deleteObjectStore db feeds-storage-name))
                       (let [feeds-object-store (.createObjectStore db feeds-storage-name #js {:keyPath #js ["uid" "feeduid"]})]
                         (.createIndex feeds-object-store "uid" "uid" #js {:unique false})
                         (.createIndex feeds-object-store "feeduid" "feeduid" #js {:unique false})
                         (.createIndex feeds-object-store "pubDate" "pubDate" #js {:unique false}))))
        cb-success (fn [e]
                     (swap! database assoc :db (-> e .-target .-result))
                     (put! ret-chan {:result "ok"}))]
    (-> request .-onupgradeneeded (set! cb-upgrade))
    (-> request .-onsuccess (set! cb-success))
    (-> request .-onerror (set! cb-error))
    ret-chan))

(defn add-feed [feed]
  (let [ret-chan (chan)
        trans (.transaction (:db @database) #js [feeds-storage-name] "readwrite")
        store (.objectStore trans feeds-storage-name)
        request (.put store (clj->js feed))
        cb-complete (fn [e]
                      (put! ret-chan {:result "ok"}))]
    (-> trans .-oncomplete (set! cb-complete))
    (-> trans .-onerror (set! cb-error))
    ret-chan))

(defn retrieve-all-feeds [&{:keys [feeduid-list]}]
  (let [ret-chan (chan)
        temp-list (atom [])
        trans (.transaction (:db @database) #js [feeds-storage-name] "readwrite")
        store (.objectStore trans feeds-storage-name)
        date-index (.index store "pubDate")
        cursor (.openCursor date-index nil "prev")
        cb-success (fn [e] (let [res (-> e .-target .-result)]
                             (if (not (nil? res))
                               (do
                                 (if (nil? feeduid-list)
                                   (swap! temp-list conj (-> res .-value (js->clj :keywordize-keys true)))
                                   (let [feeduid (-> res .-value (aget "feeduid"))]
                                     (if (some #(= feeduid %) feeduid-list)
                                       (swap! temp-list conj (-> res .-value (js->clj :keywordize-keys true))))))
                                 (.continue res))
                               (put! ret-chan @temp-list))))]
    (-> cursor .-onsuccess (set! cb-success))
    (-> cursor .-onerror (set! cb-error))
    ret-chan))

(defn retrieve-feeds-uids [uid-list]
  (retrieve-all-feeds :feeduid-list uid-list))

