(ns ghoul.app.state.core-test
  (:require [cljs.test :refer-macros [deftest testing is]]
            [ghoul.app.state.core :as state]))

(deftest state-transitions-happy-path
  (testing "Creates an empty state"
    (let [state (state/empty-state)]
      (is (= [:list :expanded-view] (state/get-display-mode state)))
      (is (= [:all-items] (state/get-selected state)))
      (is (empty? (state/list-index state)))
      (is (empty? (state/list-feeds state)))))

  (testing "Adds a feed into the state"
    (let [feed-uid  "truly-unique-1"
          feed-data {:title "Osom feed title" :link "http://rss.com/osom.rss" :uid feed-uid}
          state     (-> (state/empty-state)
                        (state/update-state [:add-feed feed-data]))]
      (is (= (first (state/list-feeds state)) feed-data))
      (is (= 1 (count (state/list-index state))))
      (is (= {:feed feed-uid} (first (state/list-index state))))))

  (testing "Create an empty group"
    (let [group-name  "Group"
          state     (-> (state/empty-state)
                        (state/update-state [:add-group group-name]))]
      (is (= (first (state/list-index state)) {:group group-name}))
      (is (empty? (state/list-feeds state :group group-name)))
      (is (= 1 (count (state/list-index state))))
      (is (= {:group group-name} (first (state/list-index state))))))

  (testing "Add feed into a group"
    (let [group1 "Group 1"
          feed1  {:title "Feed 1" :link "http://rss.com/feed1.rss" :uid "feed1"}
          feed2  {:title "Feed 2" :link "http://rss.com/feed2.rss" :uid "feed2"}
          transitions [[:add-feed feed1]
                       [:add-feed feed2]
                       [:add-group group1]
                       [:set-group-feed "feed1" group1]]
          state (reduce state/update-state (state/empty-state) transitions)]
      (is (= 2 (count (state/list-feeds state))))
      (is (= 1 (count (state/list-feeds state :group group1 ))))
      (is (= (assoc feed1 :group group1) (first (state/list-feeds state :group group1))))

      (is (= 2 (count (state/list-index state))))
      (is (= {:feed "feed2"}  (first (state/list-index state))))
      (is (= {:group group1} (second (state/list-index state))))))

  (testing "Change selected entry - all items")
  (testing "Change selected entry - favorite")
  (testing "Change selected entry - group")
  (testing "Change selected entry - feed")

  (testing "Change filter to to-read")
  (testing "Change filter to all")
  (testing "Change filter to recent first")
  (testing "Change filter to old first")
  )

#_(deftest state-transition-invalid-transitions
  (testing "Try to add an invalid feed")
  (testing "Try to add an invalid item")
  (testing "Try to add a duplicated group")
  (testing "Try to add a feed with the same uid as an existing one")
  (testing "Try to add an item when there is no feed")
  (testing "Try to move a feed to an unexisting group")
  (testing "Try to move a non-existing feed to a group"))

