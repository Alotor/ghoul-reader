// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.feeds_storage');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
ghoul.feeds_storage.database = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
ghoul.feeds_storage.database_name = "ghoul-reader";
ghoul.feeds_storage.database_version = (10);
ghoul.feeds_storage.feeds_storage_name = "feeds";
ghoul.feeds_storage.cb_error = (function cb_error(e){
return console.log("error ",e);
});
ghoul.feeds_storage.init_database = (function init_database(){
var ret_chan = cljs.core.async.chan.call(null);
var request = indexedDB.open(ghoul.feeds_storage.database_name,ghoul.feeds_storage.database_version);
var cb_upgrade = ((function (ret_chan,request){
return (function (e){
var db = e.target.result;
if(cljs.core.truth_(db.objectStoreNames.contains(ghoul.feeds_storage.feeds_storage_name))){
db.deleteObjectStore(ghoul.feeds_storage.feeds_storage_name);
} else {
}

var feeds_object_store = db.createObjectStore(ghoul.feeds_storage.feeds_storage_name,{"keyPath": ["uid","feeduid"]});
feeds_object_store.createIndex("uid","uid",{"unique": false});

feeds_object_store.createIndex("feeduid","feeduid",{"unique": false});

return feeds_object_store.createIndex("pubDate","pubDate",{"unique": false});
});})(ret_chan,request))
;
var cb_success = ((function (ret_chan,request,cb_upgrade){
return (function (e){
cljs.core.swap_BANG_.call(null,ghoul.feeds_storage.database,cljs.core.assoc,new cljs.core.Keyword(null,"db","db",993250759),e.target.result);

return cljs.core.async.put_BANG_.call(null,ret_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),"ok"], null));
});})(ret_chan,request,cb_upgrade))
;
request.onupgradeneeded = cb_upgrade;

request.onsuccess = cb_success;

request.onerror = ghoul.feeds_storage.cb_error;

return ret_chan;
});
ghoul.feeds_storage.add_feed = (function add_feed(feed){
var ret_chan = cljs.core.async.chan.call(null);
var trans = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.feeds_storage.database)).transaction([ghoul.feeds_storage.feeds_storage_name],"readwrite");
var store = trans.objectStore(ghoul.feeds_storage.feeds_storage_name);
var request = store.put(cljs.core.clj__GT_js.call(null,feed));
var cb_complete = ((function (ret_chan,trans,store,request){
return (function (e){
return cljs.core.async.put_BANG_.call(null,ret_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),"ok"], null));
});})(ret_chan,trans,store,request))
;
trans.oncomplete = cb_complete;

trans.onerror = ghoul.feeds_storage.cb_error;

return ret_chan;
});
/**
* @param {...*} var_args
*/
ghoul.feeds_storage.retrieve_all_feeds = (function() { 
var retrieve_all_feeds__delegate = function (p__23576){
var map__23578 = p__23576;
var map__23578__$1 = ((cljs.core.seq_QMARK_.call(null,map__23578))?cljs.core.apply.call(null,cljs.core.hash_map,map__23578):map__23578);
var feeduid_list = cljs.core.get.call(null,map__23578__$1,new cljs.core.Keyword(null,"feeduid-list","feeduid-list",1640476731));
var ret_chan = cljs.core.async.chan.call(null);
var temp_list = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var trans = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.feeds_storage.database)).transaction([ghoul.feeds_storage.feeds_storage_name],"readwrite");
var store = trans.objectStore(ghoul.feeds_storage.feeds_storage_name);
var date_index = store.index("pubDate");
var cursor = date_index.openCursor(null,"prev");
var cb_success = ((function (ret_chan,temp_list,trans,store,date_index,cursor,map__23578,map__23578__$1,feeduid_list){
return (function (e){
var res = e.target.result;
if(!((res == null))){
if((feeduid_list == null)){
cljs.core.swap_BANG_.call(null,temp_list,cljs.core.conj,cljs.core.js__GT_clj.call(null,res.value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
} else {
var feeduid_23579 = (res.value["feeduid"]);
if(cljs.core.truth_(cljs.core.some.call(null,((function (feeduid_23579,res,ret_chan,temp_list,trans,store,date_index,cursor,map__23578,map__23578__$1,feeduid_list){
return (function (p1__23575_SHARP_){
return cljs.core._EQ_.call(null,feeduid_23579,p1__23575_SHARP_);
});})(feeduid_23579,res,ret_chan,temp_list,trans,store,date_index,cursor,map__23578,map__23578__$1,feeduid_list))
,feeduid_list))){
cljs.core.swap_BANG_.call(null,temp_list,cljs.core.conj,cljs.core.js__GT_clj.call(null,res.value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
} else {
}
}

return res.continue();
} else {
return cljs.core.async.put_BANG_.call(null,ret_chan,cljs.core.deref.call(null,temp_list));
}
});})(ret_chan,temp_list,trans,store,date_index,cursor,map__23578,map__23578__$1,feeduid_list))
;
cursor.onsuccess = cb_success;

cursor.onerror = ghoul.feeds_storage.cb_error;

return ret_chan;
};
var retrieve_all_feeds = function (var_args){
var p__23576 = null;
if (arguments.length > 0) {
  p__23576 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return retrieve_all_feeds__delegate.call(this,p__23576);};
retrieve_all_feeds.cljs$lang$maxFixedArity = 0;
retrieve_all_feeds.cljs$lang$applyTo = (function (arglist__23580){
var p__23576 = cljs.core.seq(arglist__23580);
return retrieve_all_feeds__delegate(p__23576);
});
retrieve_all_feeds.cljs$core$IFn$_invoke$arity$variadic = retrieve_all_feeds__delegate;
return retrieve_all_feeds;
})()
;
ghoul.feeds_storage.retrieve_feeds_uids = (function retrieve_feeds_uids(uid_list){
return ghoul.feeds_storage.retrieve_all_feeds.call(null,new cljs.core.Keyword(null,"feeduid-list","feeduid-list",1640476731),uid_list);
});
ghoul.feeds_storage.get_item = (function get_item(feed_uid,uid){
var ret_chan = cljs.core.async.chan.call(null);
var trans = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.feeds_storage.database)).transaction([ghoul.feeds_storage.feeds_storage_name],"readwrite");
var store = trans.objectStore(ghoul.feeds_storage.feeds_storage_name);
var key_range = IDBKeyRange.only([uid,feed_uid]);
var cursor = store.openCursor(key_range);
var cb_success = ((function (ret_chan,trans,store,key_range,cursor){
return (function (e){
var res = e.target.result;
if(!((res == null))){
return cljs.core.async.put_BANG_.call(null,ret_chan,cljs.core.js__GT_clj.call(null,res.value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
} else {
return cljs.core.async.put_BANG_.call(null,ret_chan,new cljs.core.Keyword(null,"not-found","not-found",-629079980));
}
});})(ret_chan,trans,store,key_range,cursor))
;
cursor.onsuccess = cb_success;

cursor.onerror = ghoul.feeds_storage.cb_error;

return ret_chan;
});
ghoul.feeds_storage.clear = (function clear(){
var ret_chan = cljs.core.async.chan.call(null);
var trans = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.feeds_storage.database)).transaction([ghoul.feeds_storage.feeds_storage_name],"readwrite");
var store = trans.objectStore(ghoul.feeds_storage.feeds_storage_name);
return store.clear();
});
