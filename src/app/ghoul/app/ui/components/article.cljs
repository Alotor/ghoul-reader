(ns ghoul.app.ui.components.article
  (:require
   [om.core :refer [build]]
   [om-tools.core :refer-macros [defcomponent]]
   [sablono.core :as html :refer-macros [html]]))

(defonce lorem-ipsum
  "Bacon ipsum dolor amet ground round ham hock tongue, short loin tri-tip turducken
   jerky frankfurter. Capicola strip steak rump, chuck alcatra jowl beef spare ribs
   biltong jerky kielbasa shank picanha. Tail leberkas pork belly picanha. Pancetta
   tongue bacon drumstick. Alcatra prosciutto leberkas jowl, sausage pig picanha
   hamburger. Ribeye turkey kevin shankle picanha brisket sirloin alcatra turducken
   spare ribs.

   Shank frankfurter alcatra boudin strip steak pork belly. Short loin pork belly
   shankle shank. Tail brisket fatback cupim chicken kielbasa capicola swine jerky rump
   filet mignon ground round hamburger. Strip steak ham short loin, frankfurter tail
   brisket jowl ribeye ham hock prosciutto turkey shank. Rump tongue ball tip, cow
   hamburger spare ribs pork belly ribeye corned beef alcatra. Turkey porchetta chuck
   cupim ribeye drumstick filet mignon ground round boudin.")

(defcomponent article [data-owner]
  (render [_]
    (html [:.article
           [:.article__header
            [:h4.article__title
             [:a.article__title-link {:href "#"} "Feed 1 - Rss title link lorem ipsum dolor doleris volentis whatever"]]]
           [:.article__content lorem-ipsum]])))
