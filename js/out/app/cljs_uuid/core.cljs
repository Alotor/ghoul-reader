(ns cljs-uuid.core
  (:require 
    [goog.string.StringBuffer :as StringBuffer]
    )
  )

;; portability functions - js
;; could be made portable to clojure if useful. 
;; but java.lang.UUID available already
(defn make-string-buffer []
  (goog.string.StringBuffer.))

(defn str->int [s r]
  (js/parseInt s r))

(defn make-exception [msg] 
  (js/Error. msg))

(defn num->string [number radix]
  (let [num (js/Number. number)]
    (.toString num radix)))



;; constants
(def pow2-6  64)
(def pow2-8  256)
(def pow2-12 4096)
(def pow2-14 16384)
(def pow2-16 65536)
(def pow2-32 4294967296)
(def pow2-48 281474976710656)


(defn padded-hex 
  "append a padded hex number to stringbuffer"
  [sb number len]
  (let [num-s (num->string number 16)]
    (doseq [i (range (- len (.-length num-s)))]
      (.append sb "0"))
    (.append sb num-s)))


;; UUID record
(defrecord UUID [time-low 
                 time-mid 
                 time-hi-and-version 
                 clock-seq-and-reserved
                 clock-seq-low
                 node]
   Object
   (toString 
     [uuid]
     (let [sb (make-string-buffer)]
       (padded-hex sb (:time-low uuid) 8)
       (.append sb "-")
       (padded-hex sb (:time-mid uuid) 4)
       (.append sb "-")
       (padded-hex sb (:time-hi-and-version uuid) 4)
       (.append sb "-")
       (padded-hex sb (:clock-seq-and-reserved uuid) 2)
       (padded-hex sb (:clock-seq-low uuid) 2)
       (.append sb "-")
       (padded-hex sb (:node uuid) 12)
       (.toString sb)))
   )


(defn make-v4 
  "make a version 4 (random UUID as per http://www.ietf.org/rfc/rfc4122.txt"
  []
  (UUID. 
    (rand-int pow2-32)                   ; time-low               4 bytes
    (rand-int pow2-16)                   ; time-mid               2 bytes
    (bit-or   0x4000 (rand-int pow2-12)) ; time-hi-and-version    4 bytes
    (bit-or   0x80   (rand-int pow2-6))  ; clock-seq-and-reserved 2 bytes
    (rand-int pow2-8)                    ; clock-seq-low          2 bytes
    
    ; node 6 bytes 
    ;  - gets special attention due to js int behaviour beyond 32 bits
    (+ (* (rand-int pow2-32) pow2-16)    
       (rand-int pow2-16))
    ))
                 

;; make UUID pr-str printable
(extend-protocol IPrintable
  UUID
  (-pr-seq [uuid opts] (list "#uuid \"" (str uuid)  "\"")))


;; reading

(def uuid-str-re #"([0-9a-fA-F]{8})-([0-9a-fA-F]{4})-([0-9a-fA-F]{4})-([0-9a-fA-F]{2})([0-9a-fA-F]{2})-([0-9a-fA-F]{12})")

(defn read-str 
  "read a raw (8-4-4-4-12) uuid string"
  [uuid-str]
  (if-let [[_
            time-low                ;(subs uuid-str 0  8)
            time-mid                ;(subs uuid-str 9  13)                  
            time-hi-and-version     ;(subs uuid-str 14 18)  
            clock-seq-and-reserved  ;(subs uuid-str 19 21)  
            clock-seq-low           ;(subs uuid-str 21 23)  
            node                    ;(subs uuid-str 24 36)   
            ] (re-matches uuid-str-re uuid-str)] ; split and validate input
    (UUID. 
      (str->int time-low 16)
      (str->int time-mid 16)
      (str->int time-hi-and-version 16)
      (str->int clock-seq-and-reserved 16)
      (str->int clock-seq-low 16)
      (str->int node 16))
    (throw (make-exception (str "Error Reading UUID: " uuid-str)))  
    ))


(def uuid-pr-str-re #"#uuid\s+\"(.{36})\"")

;; Reader in cljs - does not (yet?) handle tags
;; and I don't know how to extend it anyway.
(defn read-pr-str 
  "read in #uuid \"... \""
  [uuid-pr-str]
  (if-let [[_ uuid-str] (re-matches uuid-pr-str-re uuid-pr-str)]
    (read-str uuid-str)
    (throw (make-exception (str "Error Reading UUID: " uuid-pr-str)))))

