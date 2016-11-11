(ns ghoul.repository.indexdb)

(defn -process-store [store]
  ;; retrieve [key value]
  (let [name   (:name store)
        fields (into [] (map first (:fields store)))
        keys   (into [] (map extract-keys (:fields store)))
        ])
  )

(defn -do-with-store [database store-name mode]
  ;; Model: readwrite, readonly
  (let [trans (.transaction database #js [store-name] mode)
        store (.objectStore trans store-name)]

    (p/promise (fn [resolve reject]
                 (-> trans .-oncomplete (set! resolve))
                 (-> trans .-onerror (set! reject))))))

(defn open [name version schema]
  {:name    name
   :version version
   :stores  (into {} (map -process-store (:stores schema)))
   })

(defn add [store item]
  ;; check if the item contains the necessary data
  ;; sanitize the keys for easy insertion
  (-> do-with-store
      (p/then (fn [])))
  )

(defn retrieve-all [& {:keys [sort-by filters]}])

(defn retrieve [key])

(defn update [key changes])
