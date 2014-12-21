(ns ghoul.app.messages)

(def messages
  {:ghoul.initialized "Ghoul Reader initialized"

   ; Buttons
   :ghoul.button.ok "OK"
   :ghoul.button.cancel "Cancel"

   ; Search
   :ghoul.search.placeholder "Search"

   ; Popup
   :ghoul.popup.feed.title "Introduzca la URL del RSS"
   :ghoul.popup.state.title "Estado"

   ; Welcome panel
   :ghoul.welcome.first "Welcome to"
   :ghoul.welcome.title "GHOUL reader"
   :ghoul.welcome.description "Ghoul is an offline-optimized RSS reading platform with easiness in mind and using the great new technologies in HTML5 specs."
   :ghoul.welcome.tut1 "You can add a new RSS Subscription"
   :ghoul.welcome.link "HERE"

   ; Menus
   :ghoul.menu.all-items "All Items"
   :ghoul.menu.shared-items "Shared"
   :ghoul.menu.favorite-items "Favorites"
   :ghoul.menu.compact-view "Compact View"
   :ghoul.menu.expanded-view "Expanded View"

   ; Toolbar
   :ghoul.toolbar.add-group "Add Group"
   :ghoul.toolbar.add-feed "Add Feed"
   :ghoul.toolbar.import "Import"
   :ghoul.toolbar.export "Export"
   :ghoul.toolbar.refresh "Refresh"
   :ghoul.toolbar.contract "Contraer"
   :ghoul.toolbar.expand "Expandir"

   ; Header
   :ghoul.header.menu "Menu"
   :ghoul.header.ghoul "Ghoul"
   :ghoul.header.reader "Reader"

   ; Home
   :ghoul.home.title "Home"
   })

(defn msg [code]
  (code messages))
