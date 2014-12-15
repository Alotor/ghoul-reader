(ns ghoul.state)

;(defn ^:export hello-world[] (js/alert "HOLA")) ; invoke through ghoul.state.hello_world() in JS
(declare feed-store-temp)
(defn ^:export retrieve-all-feeds []
  (flatten (map second feed-store-temp)))

(def feed-store-temp
  {"07aed140-83c9-11e4-b4a9-0800200c9a66" ; Taiga feeds
   [{:title "Help - There's no one at the controls of Taiga.io!"
     :link "https://blog.taiga.io/help-theres-no-one-at-the-controls-of-taigaio.html"
     :description "<p><img alt=\"Piweek\" src=\"http://blog.taiga.io/images/2014-12-15_piweek/piweek.jpg\" /></p> <p>Have you ever dozed off on a plane and then woken up in a cold sweat, having dreamt that the pilots had bailed and no one was at the controls?</p> <p>Well, for the development team at Taiga.io it's that kind of a moment. Only it's not a dream. Our favorite time of year is upon us when we basically blow you off for a WHOLE WEEK and think only ourselves! Starting Monday, Taiga users you are on your own! - We've off to ΠWEEK [1]</p> <p>We call it the <strong><a href=\"http://piweek.com/\" title=\"ΠWEEK\">ΠWEEK</a></strong> (PiWeek: Personal Innovation week) and its weeklong hackathon; we code for ourselves, on the projects voted by our team, to have fun, learn, challenge ourselves and to grow as developers and designers.</p> <iframe width=\"720\" height=\"440\" src=\"//www.youtube.com/embed/UcCgJmdUqt0?rel=0\" frameborder=\"0\" allowfullscreen style=\"margin: 0 auto;\"></iframe> <p>This year its 15+ projects and 40+ people. Extraordinary amounts of caffeine, a lot of sleep deprivation, some Carpal Tunnel Syndrome and loads of satisfaction. Follow our <a href=\"https://twitter.com/hashtag/piweek?f=realtime\" title=\"ΠWEEK on Twitter\">#piweek</a> timeline at Twitter</p> <p><small>[1] You're not really on your own. If anything goes wrong we're all over it! But please be patient with other non-urgent support issues. We'll be slower than usual.</small></p>"
     :creator "Taiga Team"
     :pubDate "Wed, 10 Dec 2014 13:00:00 +0100"
     :subscription "07aed140-83c9-11e4-b4a9-0800200c9a66"
     :read false}
    {:title "Taiga Abies veitchii Release (v1.4.0)"
     :link "https://blog.taiga.io/taiga-abies-veitchii-release-v140.html"
     :description "<p>What better name to give this early Christmas release than Abies Veitchii, a tree native to the Japanese forests occasionally grown to become Christmas trees? Hey Taiga users in Japan, send us a picture of your Abies Veitchiis....</p> <p><img alt=\"Taiga Day\" src=\"http://blog.taiga.io/images/2014-12-10_changelog140/01.jpg\" /> <small><em>Photo Credit: <a href=\"https://www.flickr.com/photos/54573638@N05/\">Koichi Oda</a></em></small></p> <p>So, let's see... what do we have for you this time?</p> <p><strong>New features</strong></p> <ul> <li>If you like your code repositories opensource, and you use GitLab, you're in luck. <strong>Taiga now integrates with GitLab!</strong></li> <li>If you prefer BitBucket, you're also in luck. <strong>BitBucket integration is also online now.</strong></li> <li>Check our the new <strong>Team View</strong> feature to see which team members are working on a project</li> <li>Unhappy with a project? Use the \"I'm outta here\" here <strong>exit a project feature</strong></li> </ul> <p><strong>UI Improvements</strong></p> <ul> <li>We did some <strong>Taskboard redesign</strong> to take better advantage of the screen real estate and help you see more of your project. Rows and columns can now be shrunk as well.</li> <li>We improved usability in tablets. But note we still don't support tablets</li> <li>We made some other general usability enhancements</li> </ul> <p><strong>Misc</strong></p> <ul> <li><strong>We killed tons of little bugs</strong>, including layout errors with certain browsers.</li> <li><strong>Improvements to concurrent editing</strong>. Now when more than one person is editing the same field at the same time, the system not only alerts the users to avoid overwriting the work of a colleague, it doesn't complain if small differences within blocks are different and accepts all changes. Oh... the little courtesies that make life bearable...</li> <li>We migrated to the <strong>new version of angular (1.3)</strong></li> </ul> <p>We took some time off as well. In fact there was long weekend last week and we did absolutely nothing, zilch, nada. But we'll make it up, we promise.</p>"
     :creator "Taiga Team"
     :pubDate "Wed, 10 Dec 2014 13:00:00 +0100"
     :subscription "07aed140-83c9-11e4-b4a9-0800200c9a66"
     :read false}
    {:title "EPIC Stories"
     :link "https://blog.taiga.io/epic-stories.html"
     :description "<p><img alt=\"EPIC Stories\" src=\"http://blog.taiga.io/images/2014-11-20_epic-stories/epic_stories.png\" style=\"width:100%\" /> <small> <em>Photo Credit: <a href=\"http://www.infoq.com/author/Kulawat-Wongsaroj\" title=\"Kulawat Wongsaroj\">Kulawat Wongsaroj</a> from the post <a href=\"http://www.infoq.com/articles/visualize-big-picture-agile\" title=\"Visualizing the Big Picture of your Agile Project\">Visualizing the Big Picture of your Agile Project</a>.</em></small></p> <p>Last week we had an interesting email exchange amongst the team at <a href=\"https://taiga.io\" title=\"Taiga.io\">Taiga.io</a>. It went like this: The question was a recurring one amongst users of our platform</p> <p><strong>What is an epic story?</strong></p> <p>I answered:</p> <blockquote> <p>According to the inventors of agile, An EPIC story is a large undefined user story that must be subdivided.</p> <p>An EPIC must be broken down into smaller user stories. As far as I recall, user stories should follow the \"INVEST\" pattern where \"I\" stands for \"independent\" and \"V\" for \"valuable\". In my opinion, an EPIC can make sense and be visible, perhaps in a different color so as to reflect its state as an embryonic proto-story, but not part of the application structure in the guise of a module or layer.</p> <p><strong>That leads to other questions:</strong></p> <p>All those subdivided and tiny user stories, would not deploy alone, they are related.</p> <p>Indeed, this is where the idea of EPIC can be useful as an aggregator of user stories. That is to say as an encompassing module. But you have to be careful as it can be very confusing to manage such a thing on any project management tool, or even on paper. It makes it very difficult for any client to prioritize as there are too many dependencies. Using tags will probably help here I think.</p> <p><strong>Are my designer’s prototypes a big story, an EPIC?</strong></p> <p>If so, then that can be either a problem of documentation, or that the designer is working on prototypes before user stories are specified, or that they’ve been broken down by the back end engineers with all of what that entails, or some combination of all three. If the user stories are independent they should each have a very clear prototype. You shouldn't have to dig deep to see which button refers to the user story that you are addressing at any specific moment.</p> <p><strong>But aren’t EPICS a way to group large functional blocks of the project, For example an API, the front part, Mobile?</strong></p> <p>No. But you can call these \"modules\" or something similar to that, but these modules don't have any specific value. The word EPIC is used by Mike Cohn in his book, so it is the official:-). I searched Google and found this wonderful article by Mike Cohn talking about all this: <a href=\"https://www.scrumalliance.org/community/spotlight/mike-cohn/march-2014/agile-user-stories-epics-and-themes\" title=\"Agile User Stories, Epics and Themes\">Agile User Stories, Epics and Themes</a>. It's a copy of this 2001 article: <a href=\"http://www.mountaingoatsoftware.com/blog/stories-epics-and-themes\" title=\"User Stories, Epics and Themes\">Agile User Stories, Epics and Themes</a></p> </blockquote> <p>Following this email exchange, <strong>we had a meeting to define what an EPIC could look like on <a href=\"https://taiga.io\" taiga=\"taiga\" title=\"Taiga.io\">Taiga</a>?</strong></p> <p>EPICS can be useful, and serve as the basis for a preliminary analysis, it can be the framework for conversations, diagrams, wireframes, even prototypes. That's information we want to capture.</p> <p>If we divide and EPIC into smaller stories, where do we put all that information? We decided that in <a href=\"https://taiga.io\" taiga=\"taiga\" title=\"Taiga.io\">Taiga</a> the final format will be a user story marked as EPIC and distinguished in the backlog by its color. The EPIC and all its derived user stories Will be related to one another and in that manner we will be able to access all the previous information should it be necessary.</p> <p>As a bonus, that aggregation of user stories into an EPIC Will allow us to then track the number of stories that have been completed, providing us with something similar to a module or a grouping of related stories.</p> <p>As an additional bonus, the stories that may emerge from an epic may not necessarily pertain to the project at hand, perhaps they ought to belong to a subproject. We could then have a \"base\" project in the form of: \"Main Company\" an EPIC named \"Christmas Campaign\", user stories pertaining to that EPIC in the sub-project, \"Marketing Department\" such as \"TV Spots\". All of these being related and trackable from the EPIC itself.</p> <p>What do you think?</p>"
     :creator "Antonio de la Torre"
     :pubDate "Thu, 20 Nov 2014 10:17:00 +0100"
     :subscription "07aed140-83c9-11e4-b4a9-0800200c9a66"
     :read false}]

   ; Slashdot feeds
   "f90eebc0-83c8-11e4-b4a9-0800200c9a66"
   [{:title "Eric Schmidt: To Avoid NSA Spying, Keep Your Data In Google's Services"
     :link "http://rss.slashdot.org/~r/Slashdot/slashdot/~3/WorHcMg7o4o/story01.htm"
     :description "jfruh writes Google Chairman Eric Schmidt told a conference on surveillance at the Cato Institute that Edward Snowden's revelations on NSA spying shocked the company's engineers &amp;mdash; who then immediately started working on making the company's servers and services more secure. Now, after a year and a half of work, Schmidt says that Google's services are the safest place to store your sensitive data.&lt;p&gt;&lt;div class=\"share_submission\" style=\"position:relative;\"&gt; &lt;a class=\"slashpop\" href=\"http://twitter.com/home?status=Eric+Schmidt%3A+To+Avoid+NSA+Spying%2C+Keep+Your+Data+In+Google's+Services%3A+http%3A%2F%2Fbit.ly%2F1wwsTFc\"&gt;&lt;img src=\"http://a.fsdn.com/sd/twitter_icon_large.png\"&gt;&lt;/a&gt; &lt;a class=\"slashpop\" href=\"http://www.facebook.com/sharer.php?u=http%3A%2F%2Ftech.slashdot.org%2Fstory%2F14%2F12%2F15%2F1243213%2Feric-schmidt-to-avoid-nsa-spying-keep-your-data-in-googles-services%3Futm_source%3Dslashdot%26utm_medium%3Dfacebook\"&gt;&lt;img src=\"http://a.fsdn.com/sd/facebook_icon_large.png\"&gt;&lt;/a&gt; &lt;a class=\"nobg\" href=\"http://plus.google.com/share?url=http://tech.slashdot.org/story/14/12/15/1243213/eric-schmidt-to-avoid-nsa-spying-keep-your-data-in-googles-services?utm_source=slashdot&amp;amp;utm_medium=googleplus\" onclick=\"javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;\"&gt;&lt;img src=\"http://www.gstatic.com/images/icons/gplus-16.png\" alt=\"Share on Google+\"/&gt;&lt;/a&gt; &lt;/div&gt;&lt;/p&gt;&lt;p&gt;&lt;a href=\"http://tech.slashdot.org/story/14/12/15/1243213/eric-schmidt-to-avoid-nsa-spying-keep-your-data-in-googles-services?utm_source=rss1.0moreanon&amp;amp;utm_medium=feed\"&gt;Read more of this story&lt;/a&gt; at Slashdot.&lt;/p&gt;&lt;iframe src=\"http://slashdot.org/slashdot-it.pl?op=discuss&amp;amp;id=6401853&amp;amp;smallembed=1\" style=\"height: 300px; width: 100%; border: none;\"&gt;&lt;/iframe&gt;&lt;img width='1' height='1' src='http://slashdot.feedsportal.com/c/35028/f/647410/s/41748afe/sc/5/mf.gif' border='0'/&gt;&lt;br clear='all'/&gt;&lt;br/&gt;&lt;br/&gt;&lt;a href=\"http://da.feedsportal.com/r/215951340402/u/49/f/647410/c/35028/s/41748afe/sc/5/rc/1/rc.htm\" rel=\"nofollow\"&gt;&lt;img src=\"http://da.feedsportal.com/r/215951340402/u/49/f/647410/c/35028/s/41748afe/sc/5/rc/1/rc.img\" border=\"0\"/&gt;&lt;/a&gt;&lt;br/&gt;&lt;a href=\"http://da.feedsportal.com/r/215951340402/u/49/f/647410/c/35028/s/41748afe/sc/5/rc/2/rc.htm\" rel=\"nofollow\"&gt;&lt;img src=\"http://da.feedsportal.com/r/215951340402/u/49/f/647410/c/35028/s/41748afe/sc/5/rc/2/rc.img\" border=\"0\"/&gt;&lt;/a&gt;&lt;br/&gt;&lt;a href=\"http://da.feedsportal.com/r/215951340402/u/49/f/647410/c/35028/s/41748afe/sc/5/rc/3/rc.htm\" rel=\"nofollow\"&gt;&lt;img src=\"http://da.feedsportal.com/r/215951340402/u/49/f/647410/c/35028/s/41748afe/sc/5/rc/3/rc.img\" border=\"0\"/&gt;&lt;/a&gt;&lt;br/&gt;&lt;br/&gt;&lt;a href=\"http://da.feedsportal.com/r/215951340402/u/49/f/647410/c/35028/s/41748afe/sc/5/a2.htm\"&gt;&lt;img src=\"http://da.feedsportal.com/r/215951340402/u/49/f/647410/c/35028/s/41748afe/sc/5/a2.img\" border=\"0\"/&gt;&lt;/a&gt;&lt;img width=\"1\" height=\"1\" src=\"http://pi.feedsportal.com/r/215951340402/u/49/f/647410/c/35028/s/41748afe/sc/5/a2t.img\" border=\"0\"/&gt;&lt;img src=\"//feeds.feedburner.com/~r/Slashdot/slashdot/~4/WorHcMg7o4o\" height=\"1\" width=\"1\" alt=\"\"/&gt;"
     :creator "samzenpus"
     :pubDate "Mon, 15 Dec 2014 13:50:00 GMT"
     :subscrition "f90eebc0-83c8-11e4-b4a9-0800200c9a66"
     :read false}
    {:title "Sony Pictures Leak Reveals Quashed Plan To Upload Phony Torrents"
     :link "http://rss.slashdot.org/~r/Slashdot/slashdot/~3/V2jas1m3dr4/story01.htm"
     :description "retroworks writes Motherboard.vice offers an interesting scoop from the hacked Sony Pictures email trove. A plan championed by Polish marketing employee Magda Mastalerz was to upload false versions of highly-pirated Sony programming, effectively polluting torrent sites with false positives. For example, a \"Hannibal\"-themed anti-piracy ad to popular torrent sites disguised as the first episode. Sony Pictures legal department quashed the idea, saying that if pirate sites were illegal, it would also be illegal for Sony Pictures to upload onto them. There were plans in WW2 to drop phony counterfeit currency to disrupt markets, and I wonder why flooding underground markets with phony products isn't widespread. Why don't credit card companies manufacture fake lists of stolen credit card numbers, or phony social security numbers, for illegal trading sites? For that matter, would fake ivory, fake illegal porn, and other \"false positives\" discourage buyers? Or create alibis?&lt;p&gt;&lt;div class=\"share_submission\" style=\"position:relative;\"&gt; &lt;a class=\"slashpop\" href=\"http://twitter.com/home?status=Sony+Pictures+Leak+Reveals+Quashed+Plan+To+Upload+Phony+Torrents%3A+http%3A%2F%2Fbit.ly%2F1uMLBEj\"&gt;&lt;img src=\"http://a.fsdn.com/sd/twitter_icon_large.png\"&gt;&lt;/a&gt; &lt;a class=\"slashpop\" href=\"http://www.facebook.com/sharer.php?u=http%3A%2F%2Fyro.slashdot.org%2Fstory%2F14%2F12%2F15%2F0348203%2Fsony-pictures-leak-reveals-quashed-plan-to-upload-phony-torrents%3Futm_source%3Dslashdot%26utm_medium%3Dfacebook\"&gt;&lt;img src=\"http://a.fsdn.com/sd/facebook_icon_large.png\"&gt;&lt;/a&gt; &lt;a class=\"nobg\" href=\"http://plus.google.com/share?url=http://yro.slashdot.org/story/14/12/15/0348203/sony-pictures-leak-reveals-quashed-plan-to-upload-phony-torrents?utm_source=slashdot&amp;amp;utm_medium=googleplus\" onclick=\"javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;\"&gt;&lt;img src=\"http://www.gstatic.com/images/icons/gplus-16.png\" alt=\"Share on Google+\"/&gt;&lt;/a&gt; &lt;/div&gt;&lt;/p&gt;&lt;p&gt;&lt;a href=\"http://yro.slashdot.org/story/14/12/15/0348203/sony-pictures-leak-reveals-quashed-plan-to-upload-phony-torrents?utm_source=rss1.0moreanon&amp;amp;utm_medium=feed\"&gt;Read more of this story&lt;/a&gt; at Slashdot.&lt;/p&gt;&lt;iframe src=\"http://slashdot.org/slashdot-it.pl?op=discuss&amp;amp;id=6397399&amp;amp;smallembed=1\" style=\"height: 300px; width: 100%; border: none;\"&gt;&lt;/iframe&gt;&lt;img width='1' height='1' src='http://slashdot.feedsportal.com/c/35028/f/647410/s/41747e62/sc/21/mf.gif' border='0'/&gt;&lt;br clear='all'/&gt;&lt;br/&gt;&lt;br/&gt;&lt;a href=\"http://da.feedsportal.com/r/215951338780/u/49/f/647410/c/35028/s/41747e62/sc/21/rc/1/rc.htm\" rel=\"nofollow\"&gt;&lt;img src=\"http://da.feedsportal.com/r/215951338780/u/49/f/647410/c/35028/s/41747e62/sc/21/rc/1/rc.img\" border=\"0\"/&gt;&lt;/a&gt;&lt;br/&gt;&lt;a href=\"http://da.feedsportal.com/r/215951338780/u/49/f/647410/c/35028/s/41747e62/sc/21/rc/2/rc.htm\" rel=\"nofollow\"&gt;&lt;img src=\"http://da.feedsportal.com/r/215951338780/u/49/f/647410/c/35028/s/41747e62/sc/21/rc/2/rc.img\" border=\"0\"/&gt;&lt;/a&gt;&lt;br/&gt;&lt;a href=\"http://da.feedsportal.com/r/215951338780/u/49/f/647410/c/35028/s/41747e62/sc/21/rc/3/rc.htm\" rel=\"nofollow\"&gt;&lt;img src=\"http://da.feedsportal.com/r/215951338780/u/49/f/647410/c/35028/s/41747e62/sc/21/rc/3/rc.img\" border=\"0\"/&gt;&lt;/a&gt;&lt;br/&gt;&lt;br/&gt;&lt;a href=\"http://da.feedsportal.com/r/215951338780/u/49/f/647410/c/35028/s/41747e62/sc/21/a2.htm\"&gt;&lt;img src=\"http://da.feedsportal.com/r/215951338780/u/49/f/647410/c/35028/s/41747e62/sc/21/a2.img\" border=\"0\"/&gt;&lt;/a&gt;&lt;img width=\"1\" height=\"1\" src=\"http://pi.feedsportal.com/r/215951338780/u/49/f/647410/c/35028/s/41747e62/sc/21/a2t.img\" border=\"0\"/&gt;&lt;img src=\"//feeds.feedburner.com/~r/Slashdot/slashdot/~4/V2jas1m3dr4\" height=\"1\" width=\"1\" alt=\"\"/&gt;"
     :creator "timothy"
     :pubDate "Mon, 15 Dec 2014 13:05:00 GMT"
     :subscrition "f90eebc0-83c8-11e4-b4a9-0800200c9a66"
     :read false}
    {:title "SpaceX Set To Create 300 New US Jobs and Expand Facilities"
     :link "http://rss.slashdot.org/~r/Slashdot/slashdot/~3/d96vS0pHgb0/story01.htm"
     :description "littlesparkvt writes The SpaceX manufacturing plant in McGregor , TX is set to spend $46 million on an expansion that would create 300 full-time jobs. SpaceX is proposing to invest $46.3 million in the site during the next five years. They will spend $32.4 million in real property improvements and $13.9 million in personal property improvements.&lt;p&gt;&lt;div class=\"share_submission\" style=\"position:relative;\"&gt; &lt;a class=\"slashpop\" href=\"http://twitter.com/home?status=SpaceX+Set+To+Create+300+New+US+Jobs+and+Expand+Facilities%3A+http%3A%2F%2Fbit.ly%2F1BI22qa\"&gt;&lt;img src=\"http://a.fsdn.com/sd/twitter_icon_large.png\"&gt;&lt;/a&gt; &lt;a class=\"slashpop\" href=\"http://www.facebook.com/sharer.php?u=http%3A%2F%2Fscience.slashdot.org%2Fstory%2F14%2F12%2F15%2F0438220%2Fspacex-set-to-create-300-new-us-jobs-and-expand-facilities%3Futm_source%3Dslashdot%26utm_medium%3Dfacebook\"&gt;&lt;img src=\"http://a.fsdn.com/sd/facebook_icon_large.png\"&gt;&lt;/a&gt; &lt;a class=\"nobg\" href=\"http://plus.google.com/share?url=http://science.slashdot.org/story/14/12/15/0438220/spacex-set-to-create-300-new-us-jobs-and-expand-facilities?utm_source=slashdot&amp;amp;utm_medium=googleplus\" onclick=\"javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;\"&gt;&lt;img src=\"http://www.gstatic.com/images/icons/gplus-16.png\" alt=\"Share on Google+\"/&gt;&lt;/a&gt; &lt;/div&gt;&lt;/p&gt;&lt;p&gt;&lt;a href=\"http://science.slashdot.org/story/14/12/15/0438220/spacex-set-to-create-300-new-us-jobs-and-expand-facilities?utm_source=rss1.0moreanon&amp;amp;utm_medium=feed\"&gt;Read more of this story&lt;/a&gt; at Slashdot.&lt;/p&gt;&lt;iframe src=\"http://slashdot.org/slashdot-it.pl?op=discuss&amp;amp;id=6397719&amp;amp;smallembed=1\" style=\"height: 300px; width: 100%; border: none;\"&gt;&lt;/iframe&gt;&lt;img width='1' height='1' src='http://slashdot.feedsportal.com/c/35028/f/647410/s/41737f6b/sc/2/mf.gif' border='0'/&gt;&lt;br clear='all'/&gt;&lt;br/&gt;&lt;br/&gt;&lt;a href=\"http://da.feedsportal.com/r/215951339513/u/49/f/647410/c/35028/s/41737f6b/sc/2/rc/1/rc.htm\" rel=\"nofollow\"&gt;&lt;img src=\"http://da.feedsportal.com/r/215951339513/u/49/f/647410/c/35028/s/41737f6b/sc/2/rc/1/rc.img\" border=\"0\"/&gt;&lt;/a&gt;&lt;br/&gt;&lt;a href=\"http://da.feedsportal.com/r/215951339513/u/49/f/647410/c/35028/s/41737f6b/sc/2/rc/2/rc.htm\" rel=\"nofollow\"&gt;&lt;img src=\"http://da.feedsportal.com/r/215951339513/u/49/f/647410/c/35028/s/41737f6b/sc/2/rc/2/rc.img\" border=\"0\"/&gt;&lt;/a&gt;&lt;br/&gt;&lt;a href=\"http://da.feedsportal.com/r/215951339513/u/49/f/647410/c/35028/s/41737f6b/sc/2/rc/3/rc.htm\" rel=\"nofollow\"&gt;&lt;img src=\"http://da.feedsportal.com/r/215951339513/u/49/f/647410/c/35028/s/41737f6b/sc/2/rc/3/rc.img\" border=\"0\"/&gt;&lt;/a&gt;&lt;br/&gt;&lt;br/&gt;&lt;a href=\"http://da.feedsportal.com/r/215951339513/u/49/f/647410/c/35028/s/41737f6b/sc/2/a2.htm\"&gt;&lt;img src=\"http://da.feedsportal.com/r/215951339513/u/49/f/647410/c/35028/s/41737f6b/sc/2/a2.img\" border=\"0\"/&gt;&lt;/a&gt;&lt;img width=\"1\" height=\"1\" src=\"http://pi.feedsportal.com/r/215951339513/u/49/f/647410/c/35028/s/41737f6b/sc/2/a2t.img\" border=\"0\"/&gt;&lt;img src=\"//feeds.feedburner.com/~r/Slashdot/slashdot/~4/d96vS0pHgb0\" height=\"1\" width=\"1\" alt=\"\"/&gt;"
     :creator "timothy"
     :pubDate "Mon, 15 Dec 2014 11:02:00 GMT"
     :subscrition "f90eebc0-83c8-11e4-b4a9-0800200c9a66"
     :read false}]

   ; Cognitect feeds
   "32fe28a0-83c9-11e4-b4a9-0800200c9a66"
   [{:title "Story Points Must Die: A Spacetime Adventure"
     :link "http://blog.cognitect.com/blog/2014/12/2/clojureconj-2014-is-in-the-books"
     :description "Long ago beyond the stars a civilization rose from dust and puddles to spread the gospel of “agile software development” across many worlds. Over time these worlds diverged into two distinct tribes, known as “Team A” and “Team B” (for they were truly unimaginative beings in the ways of names). Both tribes prospered, delivering software throughout the galaxy, but over many generations Team A grew to believe the source of their success was a mysterious force known as “Story Points”. Team A evolved an elaborate ritual that they performed during their traditional bi-weekly gatherings known as “Sprint Planning”. Team A believed these rituals allowed them to accurately predict the future. Abandoning the process of deep thought and discussion, Team A eventually focused their entire development process on these “points”, which for some reason existed only in quantities of 1, 2, 3, 5, and (very rarely) 8.While both tribes continued to ship software, fealty to this numeric master began to visibly distort Team A’s demeanor and appearance until travelers from other galaxies could easily tell which of the two tribes they had encountered. Those from Team A came to be known as victims of \"Fibonacci’s Curse\". Let us go now, across space and time in the blink of an eye to gaze upon two such parallel development efforts..."
     :creator "Marc Phillips"
     :pubDate "Tue, 09 Dec 2014 22:10:59 +0000"
     :subscrition "f90eebc0-83c8-11e4-b4a9-0800200c9a66"
     :read false}
    {:title "Clojure/conj 2014: The largest yet"
     :link "http://blog.cognitect.com/blog/2014/12/2/clojureconj-2014-is-in-the-books"
     :description "&lt;p&gt;Clojure/conj 2014 is in the books. This was the fifth Conj and by far the biggest, with 500 attendees and 21 speakers. In fact, the conference set some new bars. It was the first time:&lt;/p&gt;&lt;ul dir=\"ltr\"&gt;&lt;li&gt;the Conj has crested 500 attendees&lt;/li&gt;&lt;li&gt;the &lt;a href=\"http://youtube.com/clojuretv\"&gt;talk videos&lt;/a&gt; were posted same-day&lt;/li&gt;&lt;li&gt;&lt;a href=\"http://clojure-conj.org/grants\"&gt;opportunity grants&lt;/a&gt; were awarded&lt;/li&gt;&lt;li&gt;more than 60% of attendees were first-timers&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Since the videos have gone online at &lt;a href=\"http://youtube.com/clojuretv\"&gt;ClojureTV&lt;/a&gt; they have been collectively viewed more than 36,000 times.&amp;nbsp;&lt;/p&gt;&lt;p&gt;I'd like to extend some thanks to people who made the event such a success. &amp;nbsp;First, Lynn and Alex, for planning, organizing and staffing the event. &amp;nbsp;Next, to the speakers: it isn't easy getting up in front of that crowd, and you did it with style, and aplomb. &amp;nbsp;Third, to the &lt;a href=\"http://clojure-conj.org\"&gt;sponsors&lt;/a&gt;, whose support made so much of the event possible. And finally, to the attendees, without whom there is no event, and no purpose. &amp;nbsp;You *are* the show.&amp;nbsp;&lt;/p&gt;&lt;p&gt;We hope that everyone who attended found the content and the community they were expecting and some surprises in addition. For those who weren't able to attend, you can check out the videos online, and there is always Clojure/west and next year's Conj. &amp;nbsp;We hope to see you there!&lt;/p&gt;"
     :creator "Justin Gehtland"
     :pubDate "Wed, 03 Dec 2014 15:14:30 +0000"
     :subscrition "f90eebc0-83c8-11e4-b4a9-0800200c9a66"
     :read false}]
   })


; Global state
(def global
  (atom {:current-view :list ; or :detail
         :feeds-view :expanded-view ; or :compact-view
         :show-menu false
         :selected nil
         :groups [{:name "Open Source"
                   :count 10
                   :expanded true
                   :uid "c73f26a0-83c8-11e4-b4a9-0800200c9a66"
                   :subscriptions [{:title "Slashdot"
                                    :uid "f90eebc0-83c8-11e4-b4a9-0800200c9a66"
                                    :site-url "http://slashdot.org/"
                                    :feed-url "http://rss.slashdot.org/Slashdot/slashdot"
                                    :favicon "http://slashdot.org/favicon.ico"
                                    :pending 20}
                                   {:title "Taiga"
                                    :uid "07aed140-83c9-11e4-b4a9-0800200c9a66"
                                    :site-url "https://blog.taiga.io/"
                                    :feed-url "https://blog.taiga.io/feeds/rss.xml"
                                    :favicon "https://blog.taiga.io/theme/images/favicon.png"
                                    :pending 10}
                                   ]}
                  {:name "Clojure"
                   :count 10
                   :expanded true
                   :uid "2f83cef0-83c9-11e4-b4a9-0800200c9a66"
                   :subscriptions [{:title "Cognitect Blog"
                                    :uid "32fe28a0-83c9-11e4-b4a9-0800200c9a66"
                                    :feed-url "http://blog.cognitect.com/blog?format=rss"
                                    :site-url "http://blog.cognitect.com/"
                                    :favicon "http://blog.cognitect.com/favicon.ico"
                                    :pending 20
                                    }]}]
         :feeds (retrieve-all-feeds)}))


(defn ^:export get-group-data [uid]
  (->> @global :groups
       (filter #(= (:uid %) uid))
       first))

(defn ^:export get-feed-data [uid]
  (->> @global :groups
      (map :subscriptions)
      flatten
      (filter #(= (:uid %) uid))
      first))

(defn get-title [uid]
  (let [group-data (get-group-data uid)]
    (if (nil? group-data)
      (:title (get-feed-data uid))
      (:name group-data))))

(defn ^:export get-group-subscriptions [uid]
  (let [group-data (get-group-data uid)]
    (map :uid (:subscriptions group-data))))

(defn ^:export retrieve-feeds [uid]
  (let [group (get-group-data uid)
        subscriptions-list (if (nil? group) [uid] (get-group-subscriptions uid))]
    (flatten (map #(if ((set subscriptions-list) (first %)) (second %) '()) feed-store-temp)) ))


(defn ^:export select-feed[uid]
  (swap! global assoc
         :selected uid
         :feeds (retrieve-feeds uid)))

(defn toggle-compact-view []
  (swap! global assoc :feeds-view :compact-view))

(defn toggle-expanded-view []
  (swap! global assoc :feeds-view :expanded-view))

(defn toggle-menu []
  (swap! global assoc :show-menu (not (:show-menu @global))))
