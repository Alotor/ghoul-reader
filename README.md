Ghoul Reader
============
![Ghoul Reader](https://raw.githubusercontent.com/PIWEEK/ghoul-reader/master/src/assets/images/logo400.png)

>This foul creature appears more or less humanoid, but has mottled, decaying flesh drawn tight across clearly visible bones. +
>It is mostly hairless and has a carnivore’s sharp teeth. Its eyes burn like hot coals in their sunken sockets.

**D&D Monsters Manual v3.5, Ghoul description**

You can try it now here: http://alotor.github.io/ghoul-reader

## Rationale

Google Reader shutted down on July 1st 2013. Since then I've been unable to find another RSS reader solution that had the same feeling while still being simple enough and provide a fluid interface.

This project is born with this need in mind and also trying to develop a Clojurescript application that doesn't need a server-side backend in order to provide functionalities of these services.

## Technologies

- Clojurescript
- Om + React.js
- HTML5 techlonologies
  - Web Workers (asynchronous feed reading)
  - Local Storage (state storage)
  - IndexedDB (local feed items storage)
  - Shadow DOM (description css sandboxing)
  - Local file reading (import ompl files)
  - Service workers (offline capabilities)

# Features & progress

- [X] Basic state rendering and actions
- [X] Retrieving state from IndexedDB
- [X] RSS news reading
- [X] Background RSS Updates
- [X] State saved into Local Storage
- [X] Feed news stored into IndexedDB
- [X] Responsive layout
- [ ] Improve state management
- [ ] Improve testing
- [ ] Improve error control
- [ ] Change XML library to JXT
- [ ] Internazionalization
- [ ] Check read/unread items
- [ ] Paging the items list so there are no problems with big items lists
- [ ] Group creation
- [ ] Feeds drag&drop to move into groups
- [ ] Remove feeds and groups
- [ ] ATOM format support
- [ ] Favicons into feed lists
- [ ] Feed description
- [ ] Import/Export OMPL file
- [ ] Remote synchronization of subscriptions
- [ ] CSS animations
- [ ] Shortcuts
- [ ] Offline capabilities
- [ ] Mobile version (Cordova)
- [ ] Sharing with other users
- [ ] Send to social media

# Acknowledges

Ghoul Reader logo by Juan de la Cruz. License under Creative Commons Attribution-NoDerivatives 4.0 International License.

This project is developed under the awesome PIWEEK initiative.

License under GNU AGPL license http://www.gnu.org/licenses/agpl-3.0.html
