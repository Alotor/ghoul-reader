(ns ghoul.parser.rss-test-xml)

(def feed-with-no-items "
  <rss version=\"2.0\">
    <channel>
      <title>RSS Title</title>
      <description>This is an example of an RSS feed</description>
      <link>http://www.example.com/main.html</link>
      <guid>XXXXX</guid>
      <lastBuildDate>Mon, 06 Sep 2010 00:01:00 +0000 </lastBuildDate>
      <pubDate>Sun, 06 Sep 2009 16:20:00 +0000</pubDate>
      <ttl>1800</ttl>
    </channel>
  </rss>")

(def feed-with-only-one-item "
  <rss version=\"2.0\">
    <channel>
      <title>RSS Title</title>
      <description>This is an example of an RSS feed</description>
      <link>http://www.example.com/main.html</link>
      <guid>XXXXX</guid>
      <lastBuildDate>Mon, 06 Sep 2010 00:01:00 +0000 </lastBuildDate>
      <pubDate>Sun, 06 Sep 2009 16:20:00 +0000</pubDate>
      <ttl>1800</ttl>
      <item>
        <title>Example entry</title>
        <description>Here is some text containing an interesting description.</description>
        <link>http://www.example.com/blog/post/1</link>
        <guid isPermaLink=\"false\">7bd204c6-1655-4c27-aeee-53f933c5395f</guid>
        <pubDate>Sun, 06 Sep 2009 16:20:00 +0000</pubDate>
      </item>
    </channel>
  </rss>")

(def feed-with-items "
  <rss version=\"2.0\">
    <channel>
      <title>RSS Title</title>
      <description>This is an example of an RSS feed</description>
      <link>http://www.example.com/main.html</link>
      <guid>XXXXX</guid>
      <lastBuildDate>Mon, 06 Sep 2010 00:01:00 +0000 </lastBuildDate>
      <pubDate>Sun, 06 Sep 2009 16:20:00 +0000</pubDate>
      <ttl>1800</ttl>
      <item>
        <title>Example entry</title>
        <description>Here is some text containing an interesting description.</description>
        <link>http://www.example.com/blog/post/1</link>
        <guid isPermaLink=\"false\">7bd204c6-1655-4c27-aeee-53f933c5395f</guid>
        <pubDate>Sun, 06 Sep 2009 16:20:00 +0000</pubDate>
      </item>
      <item>
        <title>Example entry2</title>
        <description>Here is some text containing an interesting description.</description>
        <link>http://www.example.com/blog/post/1</link>
        <guid isPermaLink=\"false\">7bd204c6-1655-4c27-aeee-53f933c5395f</guid>
        <pubDate>Sun, 06 Sep 2009 16:20:00 +0000</pubDate>
      </item>
    </channel>
  </rss>")
