(ns ghoul.parser.rss-test
  (:require [cljs.test :refer-macros [deftest testing is]]
            [ghoul.parser.utils :as parse]
            [ghoul.parser.rss :as rss]
            [ghoul.parser.rss-test-xml :as test]))

(deftest rss-parsing
  (testing "Parse a basic rss document"
    (let [result (rss/parse-document test/feed-with-no-items)
          expected {:title "RSS Title"
                    :description "This is an example of an RSS feed"
                    :link "http://www.example.com/main.html"
                    :uid "XXXXX"
                    :items []}]
      (is (= result expected))))

  (testing "Parse a rss document with only one item"
    (let [result (rss/parse-document test/feed-with-only-one-item)
          expected {:title "RSS Title"
                    :description "This is an example of an RSS feed"
                    :link "http://www.example.com/main.html"
                    :uid "XXXXX"
                    :items [{:title "Example entry"
                             :link "http://www.example.com/blog/post/1"
                             :description "Here is some text containing an interesting description."
                             :uid "7bd204c6-1655-4c27-aeee-53f933c5395f"
                             :pubdate (parse/parse-date "Sun, 06 Sep 2009 16:20:00 +0000")}]}]
      (is (= result expected))))

  (testing "Parse a rss document with several items"
    (let [result (rss/parse-document test/feed-with-items)
          expected {:title "RSS Title"
                    :description "This is an example of an RSS feed"
                    :link "http://www.example.com/main.html"
                    :uid "XXXXX"
                    :items [{:title "Example entry"
                             :link "http://www.example.com/blog/post/1"
                             :description "Here is some text containing an interesting description."
                             :uid "7bd204c6-1655-4c27-aeee-53f933c5395f"
                             :pubdate (parse/parse-date "Sun, 06 Sep 2009 16:20:00 +0000")}
                            {:title "Example entry2"
                             :link "http://www.example.com/blog/post/1"
                             :description "Here is some text containing an interesting description."
                             :uid "7bd204c6-1655-4c27-aeee-53f933c5395f"
                             :pubdate (parse/parse-date "Sun, 06 Sep 2009 16:20:00 +0000")}]}]
      (is (= result expected)))))
