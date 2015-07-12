(ns ghoul.app.components.common.sidebar
  (:require [om.core :as om]
            [om.dom :as dom]
            [ghoul.common.utils :refer [project]]
            [ghoul.app.components.common.search :as search]
            [ghoul.app.messages :refer [msg]]))

(defn show-feed-popup [data]
  (om/update! (:popup data) [0] :feed))

(defn show-state-popup [data]
  (om/update! (:popup data) [0] :state))

(defn select-feed [data feed-data]
  (om/update! (:selected data) [:feed (:uid feed-data)]))

(defn select-group [data group-data]
  (om/update! (:selected data) [:group (:name group-data)]))

(defn expand-group [group-data]
  (om/update! group-data [:expanded] true))

(defn contract-group [group-data]
  (om/update! group-data [:expanded] false))

(defn select-all-items [data]
  (om/update! (:selected data) [:all-items]))

(defn select-favorite-items [data]
  (om/update! (:selected data) [:favorite-items]))

(defn select-shared-items [data]
  (om/update! (:selected data) [:shared-items]))

(defn feed-util-buttons [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "icon-buttons"}
               (dom/a #js {:className "menu-icon add-group"}
                      (msg :ghoul.toolbar.add-group))
               (dom/a #js {:className "menu-icon add-feed"
                           :onClick #(show-feed-popup data)}
                      (msg :ghoul.toolbar.add-feed))
               (dom/a #js {:className "menu-icon import-feeds"
                           :onClick #(show-state-popup data)}
                      (msg :ghoul.toolbar.import))
               (dom/a #js {:className "menu-icon export-feeds"}
                      (msg :ghoul.toolbar.export))
               (dom/a #js {:className "menu-icon refresh"}
                      (msg :ghoul.toolbar.refresh))))))

(defn feed-subscription [data owner]
  (reify
    om/IRender
    (render [this]
      (let [feed-data (:feed data)
            [selected id] (:selected data)]
        (dom/li #js {:className "subscription"}
                (dom/a #js {:className (if (= id (:uid feed-data)) "selected" "")
                            :onClick #(select-feed data feed-data)}
                       (dom/span nil (:title feed-data))
                       (dom/span #js {:className "count"} (str (:pending feed-data)))))))))

(defn feed-group [data owner]
  (reify
    om/IRender
    (render [this]
      (let [group-data (:group data)
            group-feed-uid-set (-> data :group :subscriptions set)
            group-feeds (filter #(-> % :uid group-feed-uid-set) (:feeds data))
            group-pending (reduce #(+ %1 (:pending %2)) 0 group-feeds)
            group-class (if (:expanded group-data) "folder expanded" "folder")
            [selected id] (:selected data)]
        (dom/li nil
                (dom/div #js {:className group-class}
                         (dom/div #js {:className (str "group-title " (if (= id (:name group-data)) "selected" ""))}
                                  (dom/a #js {:className "group-select"
                                              :onClick #(select-group data group-data)}
                                         (dom/span nil (:name group-data))
                                         (dom/span #js {:className "count"} group-pending))
                                  (if (:expanded group-data)
                                    (dom/a #js {:className "minus-button"
                                                :onClick #(contract-group group-data)} (msg :ghoul.toolbar.contract))
                                    (dom/a #js {:className "plus-button"
                                                :onClick #(expand-group group-data)} (msg :ghoul.toolbar.expand))))
                         (apply dom/ul #js {:className "feed-list"}
                                (om/build-all feed-subscription
                                              (map #(-> {}
                                                        (assoc :selected (:selected data))
                                                        (assoc :group group-data)
                                                        (assoc :feed %))
                                                   group-feeds)))))))))

(defn feeds-list [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:id "feeds"}
               (apply dom/ul nil
                      (om/build-all feed-group
                                    (map #(-> {}
                                              (assoc :selected (:selected data))
                                              (assoc :feeds (:feeds data))
                                              (assoc :group %))
                                         (:groups data))))))))

(defn root [data owner]
  (reify
    om/IRender
    (render [this]
      (let [[selected _] (:selected data)]
        (dom/section #js {:id "sidebar"}
                     (om/build feed-util-buttons data)
                     (om/build search/search-box {})
                     (dom/a #js {:className (str "menu-item all " (if (= selected :all-items) "selected" ""))
                                 :onClick #(select-all-items data)} (msg :ghoul.menu.all-items))
                     (dom/a #js {:className (str "menu-item favorite " (if (= selected :favorite-items) "selected" ""))
                                 :onClick #(select-favorite-items data)} (msg :ghoul.menu.favorite-items))
                     (dom/a #js {:className (str "menu-item shared " (if (= selected :shared-items) "selected" ""))
                                 :onClick #(select-shared-items data)} (msg :ghoul.menu.shared-items))
                     (om/build feeds-list (project data :selected :groups :feeds)))))))
