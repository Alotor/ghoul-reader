(ns ghoul.app.keyboard
  (:require [goog.events :as events]
            [cljs.core.match :refer-macros [match]]
            [cljs.core.async :as async]
            [ghoul.app.state :as state])
  (:import [goog.events EventType KeyCodes]
           [goog.ui KeyboardShortcutHandler]))
;;
;; Calculate next item
;; feedsWrapperContainer.scrollTop = itemNode.offsetTop - 100

(def event-keys
  {"J"           :next-item
   "K"           :previous-item
   "SPACE"       :next-page
   "SHIFT+SPACE" :previous-page
   "ALT+G"       :new-group
   "ALT+F"       :new-feed
   "CTRL+C"      :copy
   "CTRL+V"      :paste
   "V"           :open-current-feed
   "SHIFT+S"     :share-current-feed
   "S"           :save-current-feed
   "G A"         :go-to-all
   "G F"         :go-to-favourites
   "G S"         :go-to-shared})

(defn dispatch-key [event-channel e]
  (match [(get event-keys (.-identifier e))]
         [:go-to-all] (state/select-all)
         [:new-group] (state/open-popup :group)
         [:new-feed]  (state/open-popup :feed)
         [:next-item]  (async/put! event-channel [:next-item])
         [:previous-item]  (async/put! event-channel [:previous-item])
         :else        (println "Handler not found")
         ))


(defn start-keyboard! [event-channel]
  (let [handler (KeyboardShortcutHandler. js/document)]
    (doseq [[shortcut key] event-keys]
      (.registerShortcut handler shortcut shortcut))

    (events/listen handler
                   KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED
                   (partial dispatch-key event-channel))))
