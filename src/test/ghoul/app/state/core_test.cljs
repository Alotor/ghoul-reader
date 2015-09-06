(ns ghoul.app.state.core-test
  (:require [cljs.test :refer-macros [deftest testing is]]
            [ghoul.app.state.core :as state]))

(deftest state-transitions-happy-path
  (testing "Creates an empty state"
    (let [state (state/empty-state)]
      (is (= [:list :expanded-view] (state/get-display-mode state)))
      (is (= [:all-items] (state/get-selected state)))
      (is (empty? (state/get-groups state)))
      (is (empty? (state/get-feeds state)))
      (is (empty? (state/get-items state)))))

  (testing "Adds a feed into the state"
    (let [feed-uid  "truly-unique-1"
          feed-data {:title "Osom feed title" :link "http://rss.com/osom.rss" :uid feed-uid}
          state     (-> (state/empty-state)
                        (state/state-transition [:add-feed feed-data]))]
      (is (= [:list :expanded-view] (state/get-display-mode state)))
      (is (= [:all-items] (state/get-selected state)))
      (is (= (first (state/get-feeds state)) feed-data))
      (is (= (state/get-feed-by-uid state feed-uid)))
      (is (empty? (state/get-groups state)))
      (is (empty? (state/get-items state))))))

#_(deftest state-transition-invalid-transitions
  (testing "Try to add an invalid feed")
  (testing "Try to add an invalid item")
  (testing "Try to add a feed with the same uid as an existing one")
  (testing "Try to add an item when there is no feed")
  (testing "Try to move a feed to an unexisting group"))

