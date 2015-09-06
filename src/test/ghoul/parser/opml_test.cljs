(ns ghoul.parser.opml-test
  (:require [cljs.test :refer-macros [deftest testing is]]
            [ghoul.parser.opml :as opml]
            [ghoul.parser.opml-test-xml :as test]))


(deftest ompl-parsing
  (testing "Parse a basic opml document"
    (let [result (opml/parse-document test/document-basic)
          expected {:title "OPML file title"
                    :feeds [{:type "rss"
                             :name "Feed name1"
                             :title "Feed title1"
                             :url "http://www.domain.com/feed.rss"}
                            {:type "atom"
                             :name "Feed name2"
                             :title "Feed title2"
                             :url "http://www.domain.com/feed.atom"}]}]
      (is (= result expected))))

  (testing "Parse a opml document with a group"
    (let [result (opml/parse-document test/document-group)
          expected {:title "OPML file title"
                    :feeds [{:type "group"
                             :name "Group name"
                             :title "Group title"
                             :feeds [{:type "rss"
                                      :name "Group name1"
                                      :title "Group title1"
                                      :url "http://www.domain.com/feed.rss"}
                                     {:type "atom"
                                      :name "Group name2"
                                      :title "Group title2"
                                      :url "http://www.domain.com/feed.atom"}]}
                            {:type "rss"
                             :name "Feed name1"
                             :title "Feed title1"
                             :url "http://www.domain.com/feed.rss"}
                            {:type "atom"
                             :name "Feed name2"
                             :title "Feed title2"
                             :url "http://www.domain.com/feed.atom"}]}]
      (is (= result expected))))

  (testing "Parse a opml document with several groups"
    (let [result (opml/parse-document test/document-several-groups)
          expected {:title "OPML file title"
                    :feeds [{:type "group"
                             :name "Group name1"
                             :title "Group title1"
                             :feeds [{:type "rss"
                                      :name "Group name11"
                                      :title "Group title11"
                                      :url "http://www.domain.com/feed.rss"}
                                     {:type "atom"
                                      :name "Group name12"
                                      :title "Group title12"
                                      :url "http://www.domain.com/feed.atom"}]}
                            {:type "group"
                             :name "Group name2"
                             :title "Group title2"
                             :feeds [{:type "rss"
                                      :name "Group name21"
                                      :title "Group title21"
                                      :url "http://www.domain.com/feed.rss"}
                                     {:type "atom"
                                      :name "Group name22"
                                      :title "Group title22"
                                      :url "http://www.domain.com/feed.atom"}]}
                            {:type "rss"
                             :name "Feed name1"
                             :title "Feed title1"
                             :url "http://www.domain.com/feed.rss"}
                            {:type "atom"
                             :name "Feed name2"
                             :title "Feed title2"
                             :url "http://www.domain.com/feed.atom"}]}]
      (is (= result expected)))))
