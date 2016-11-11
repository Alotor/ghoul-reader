(ns ghoul.repository.item
  (:require [cljs.core.async :refer [chan put!]]))

(def database (atom {}))
(def database-name "ghoul-reader")
(def database-version 12)
(def feeds-storage-name "feeds")

(defn cb-error [e] (.log js/console "error " e))

(defn init-database []
  (->
   (db/spec
    {:name    "ghoul-reader"
     :version 12
     :stores {:items [[:item-uuid   :text :not-null]
                      [:feed-uuid   :text :not-null]
                      [:title       :text :not-null :searchable]
                      [:description :text :searchable]
                      [:pub-date    :date [:default #(now)]]
                      [:is-read     :boolean [:default false]]
                      [:is-shared   :boolean [:default false]]]}})
   (db/connect)
   (p/then (db/add :items {:item-uid "uuid1"
                           :feed-uid "feed-uuid1"
                           :title "title"
                           :description "descriptipn"
                           :pub-date (now)}))
   (p/then (db/retrieve ["uuid1" "feed-uuid1"]))
   (p/then (fn [items] (println ">>> " items)))
   (p/then (db/update ["uuid1" "feed-uuid1"] {:is-read true})))

  (db/add :items {:item-uid "uuid1"
                  :feed-uid "feed-uuid1"
                  :title "title"
                  :description "descriptipn"
                  :pub-date (now)})

  (db/retrieve-all :sort-by :pub-date :filters {:is-read true :feed-uuid ""})
  (db/retrieve ["uuid1" "feed-uuuid1"])
  (db/update ["uuid1" "feed-uuuid1"] {:is-read true})
  )

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
                         (.createIndex feeds-object-store "pubdate" "pubdate" #js {:unique false}))))
        cb-success (fn [e]
                     (swap! database assoc :db (-> e .-target .-result))
                     (put! ret-chan {:result "ok"}))]
    (-> request .-onupgradeneeded (set! cb-upgrade))
    (-> request .-onsuccess (set! cb-success))
    (-> request .-onerror (set! cb-error))
    ret-chan))
o
(defn add-item [feed]
  (let [ret-chan (chan)
        trans (.transaction (:db @database) #js [feeds-storage-name] "readwrite")
        store (.objectStore trans feeds-storage-name)
        request (.put store (clj->js feed))
        cb-complete (fn [e]
                      (put! ret-chan {:result "ok"}))]
    (-> trans .-oncomplete (set! cb-complete))
    (-> trans .-onerror (set! cb-error))
    ret-chan))

(defn retrieve-all-items [&{:keys [feeduid-list]}]
  (let [ret-chan (chan)
        temp-list (atom [])
        trans (.transaction (:db @database) #js [feeds-storage-name] "readwrite")
        store (.objectStore trans feeds-storage-name)
        date-index (.index store "pubdate")
        cursor (.openCursor date-index nil "prev")
        cb-success (fn [e] (let [res (-> e .-target .-result)]
                             (if (not (nil? res))
                               (do
                                 (if (nil? feeduid-list)
                                   (swap! temp-list conj (-> res .-value (js->clj :keywordize-keys true)))
                                   (let [feeduid (-> res .-value (aget "feeduid"))]
                                     ; TODO Improve with a set
                                     (if (some #(= feeduid %) feeduid-list)
                                       (swap! temp-list conj (-> res .-value (js->clj :keywordize-keys true))))))
                                 (.continue res))
                               (put! ret-chan @temp-list))))]
    (-> cursor .-onsuccess (set! cb-success))
    (-> cursor .-onerror (set! cb-error))
    ret-chan))

(defn retrieve-items-by-uid [uid-list]
  (retrieve-all-items :feeduid-list uid-list))

(defn get-item [feed-uid uid]
  (let [ret-chan (chan)
        trans (.transaction (:db @database) #js [feeds-storage-name] "readwrite")
        store (.objectStore trans feeds-storage-name)
        key-range (.only js/IDBKeyRange #js [uid feed-uid])
        cursor (.openCursor store key-range)
        cb-success (fn [e] (let [res (-> e .-target .-result)]
                             (if (not (nil? res))
                               (put! ret-chan (-> res .-value (js->clj :keywordize-keys true)))
                               (put! ret-chan :not-found))))]
    (-> cursor .-onsuccess (set! cb-success))
    (-> cursor .-onerror (set! cb-error))
    ret-chan))

(defn clear []
  (let [ret-chan (chan)
        trans (.transaction (:db @database) #js [feeds-storage-name] "readwrite")
        store (.objectStore trans feeds-storage-name)]
    (.clear store)))
