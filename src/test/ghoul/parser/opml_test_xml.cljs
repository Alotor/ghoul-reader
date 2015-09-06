(ns ghoul.parser.opml-test-xml)

(def document-basic "
  <?xml version=\"1.0\" encoding=\"UTF-8\"?>

  <opml version=\"1.0\">
    <head>
        <title>OPML file title</title>
    </head>
    <body>
        <outline type=\"rss\"
                 text=\"Feed name1\"
                 title=\"Feed title1\"
                 xmlUrl=\"http://www.domain.com/feed.rss\"/>
        <outline type=\"atom\"
                 text=\"Feed name2\"
                 title=\"Feed title2\"
                 xmlUrl=\"http://www.domain.com/feed.atom\"/>
    </body>
  </opml>")

(def document-group "
  <?xml version=\"1.0\" encoding=\"UTF-8\"?>

  <opml version=\"1.0\">
    <head>
        <title>OPML file title</title>
    </head>
    <body>
        <outline text=\"Group name\" title=\"Group title\">
            <outline type=\"rss\"
                     text=\"Group name1\"
                     title=\"Group title1\"
                     xmlUrl=\"http://www.domain.com/feed.rss\"/>
            <outline type=\"atom\"
                     text=\"Group name2\"
                     title=\"Group title2\"
                     xmlUrl=\"http://www.domain.com/feed.atom\"/>
        </outline>

        <outline type=\"rss\"
                 text=\"Feed name1\"
                 title=\"Feed title1\"
                 xmlUrl=\"http://www.domain.com/feed.rss\"/>
        <outline type=\"atom\"
                 text=\"Feed name2\"
                 title=\"Feed title2\"
                 xmlUrl=\"http://www.domain.com/feed.atom\"/>
    </body>
  </opml>")

(def document-several-groups "
  <?xml version=\"1.0\" encoding=\"UTF-8\"?>

  <opml version=\"1.0\">
    <head>
        <title>OPML file title</title>
    </head>
    <body>
        <outline text=\"Group name1\" title=\"Group title1\">
            <outline type=\"rss\"
                     text=\"Group name11\"
                     title=\"Group title11\"
                     xmlUrl=\"http://www.domain.com/feed.rss\"/>
            <outline type=\"atom\"
                     text=\"Group name12\"
                     title=\"Group title12\"
                     xmlUrl=\"http://www.domain.com/feed.atom\"/>
        </outline>

        <outline text=\"Group name2\" title=\"Group title2\">
            <outline type=\"rss\"
                     text=\"Group name21\"
                     title=\"Group title21\"
                     xmlUrl=\"http://www.domain.com/feed.rss\"/>
            <outline type=\"atom\"
                     text=\"Group name22\"
                     title=\"Group title22\"
                     xmlUrl=\"http://www.domain.com/feed.atom\"/>
        </outline>

        <outline type=\"rss\"
                 text=\"Feed name1\"
                 title=\"Feed title1\"
                 xmlUrl=\"http://www.domain.com/feed.rss\"/>
        <outline type=\"atom\"
                 text=\"Feed name2\"
                 title=\"Feed title2\"
                 xmlUrl=\"http://www.domain.com/feed.atom\"/>
    </body>
  </opml>")
