(ns ghoul.common.utils
  (:require [cuerdas.core :as str]))

(defn restore-tags [string]
  (-> string
      (str/replace "&gt;" ">")
      (str/replace "&lt;" "<")
      (str/replace "&quot;" "\"")
      (str/replace "&apos;" "'")
      (str/replace "&amp;" "&")
      (str/replace "&#34;" "\"")
      (str/replace "&#8220;" "“")
      (str/replace "&#8221;" "”")))

(defn remove-unallowed-tags [string]
  (-> string
      ; TODO we should do a white-list approach instead of
      ; blacklisting
      (str/strip-tags "script")
      (str/strip-tags "link")))
