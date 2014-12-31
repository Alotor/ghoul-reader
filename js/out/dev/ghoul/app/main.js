// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.app.main');
goog.require('cljs.core');
goog.require('ghoul.app.messages');
goog.require('cljs.core.async');
goog.require('ghoul.repository.item');
goog.require('cljs_uuid_utils');
goog.require('ghoul.app.worker');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('ghoul.app.components.root');
goog.require('cljs.core.async');
goog.require('ghoul.repository.item');
goog.require('ghoul.app.messages');
goog.require('ghoul.app.state');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs_uuid_utils');
goog.require('ghoul.app.components.root');
goog.require('cuerdas.core');
goog.require('ghoul.app.worker');
goog.require('ghoul.app.state');
goog.require('cuerdas.core');
ghoul.app.main.initialize_app = (function initialize_app(){
ghoul.repository.item.init_database.call(null);

ghoul.app.state.initialize_state.call(null);

om.core.root.call(null,ghoul.app.components.root.app,ghoul.app.state.global,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app-root"),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),(function (p__27266,data){
var map__27267 = p__27266;
var map__27267__$1 = ((cljs.core.seq_QMARK_.call(null,map__27267))?cljs.core.apply.call(null,cljs.core.hash_map,map__27267):map__27267);
var new_value = cljs.core.get.call(null,map__27267__$1,new cljs.core.Keyword(null,"new-value","new-value",1087038368));
var path = cljs.core.get.call(null,map__27267__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core._EQ_.call(null,path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764)], null))){
return ghoul.app.state.load_selected_feeds.call(null,new_value);
} else {
return null;
}
})], null));

ghoul.app.worker.start_feed_worker.call(null);

ghoul.app.worker.update_all_feeds.call(null);

return console.log(ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.initialized","ghoul.initialized",-1523103855)));
});
goog.exportSymbol('ghoul.app.main.initialize_app', ghoul.app.main.initialize_app);
ghoul.app.main.initialize_app.call(null);

//# sourceMappingURL=main.js.map?rel=1420049677264