// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_uuid_utils');
goog.require('ghoul.components.feeds_panel');
goog.require('ghoul.feeds_storage');
goog.require('ghoul.components.feeds_panel');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('ghoul.components.home_panel');
goog.require('ghoul.components.header');
goog.require('om.dom');
goog.require('ghoul.components.feed_popup');
goog.require('cljs.core.async');
goog.require('ghoul.components.sidebar');
goog.require('ghoul.components.sidebar');
goog.require('ghoul.state');
goog.require('ghoul.components.feed_popup');
goog.require('ghoul.state');
goog.require('ghoul.components.header');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs_uuid_utils');
goog.require('cuerdas.core');
goog.require('ghoul.feeds_storage');
goog.require('ghoul.components.home_panel');
goog.require('cuerdas.core');
ghoul.main.app_root = (function app_root(data,owner){
if(typeof ghoul.main.t51960 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.main.t51960 = (function (owner,data,app_root,meta51961){
this.owner = owner;
this.data = data;
this.app_root = app_root;
this.meta51961 = meta51961;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.main.t51960.prototype.om$core$IRender$ = true;

ghoul.main.t51960.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var class_view = cljs.core.name.call(null,new cljs.core.Keyword(null,"feeds-view","feeds-view",1214517259).cljs$core$IFn$_invoke$arity$1(self__.data));
var class_menu = (cljs.core.truth_(new cljs.core.Keyword(null,"show-menu","show-menu",14072792).cljs$core$IFn$_invoke$arity$1(self__.data))?"menu-expanded":null);
var class_popup = (cljs.core.truth_(new cljs.core.Keyword(null,"popup","popup",635890211).cljs$core$IFn$_invoke$arity$1(self__.data))?[cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"popup","popup",635890211).cljs$core$IFn$_invoke$arity$1(self__.data))),cljs.core.str("-popup-visible")].join(''):"");
return om.dom.div.call(null,{"className": class_popup},om.core.build.call(null,ghoul.components.feed_popup.root,self__.data),om.dom.div.call(null,{"className": cuerdas.core.join.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,class_menu),class_view),"app-container"))},om.core.build.call(null,ghoul.components.header.root,self__.data),om.dom.div.call(null,{"className": "content"},om.core.build.call(null,ghoul.components.sidebar.root,self__.data),om.core.build.call(null,ghoul.components.feeds_panel.root,self__.data))));
});

ghoul.main.t51960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51962){
var self__ = this;
var _51962__$1 = this;
return self__.meta51961;
});

ghoul.main.t51960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51962,meta51961__$1){
var self__ = this;
var _51962__$1 = this;
return (new ghoul.main.t51960(self__.owner,self__.data,self__.app_root,meta51961__$1));
});

ghoul.main.t51960.cljs$lang$type = true;

ghoul.main.t51960.cljs$lang$ctorStr = "ghoul.main/t51960";

ghoul.main.t51960.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.main/t51960");
});

ghoul.main.__GT_t51960 = (function __GT_t51960(owner__$1,data__$1,app_root__$1,meta51961){
return (new ghoul.main.t51960(owner__$1,data__$1,app_root__$1,meta51961));
});

}

return (new ghoul.main.t51960(owner,data,app_root,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),74,new cljs.core.Keyword(null,"end-line","end-line",1837326455),29,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),17,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/main.cljs"], null)));
});
ghoul.main.update_feed_worker = cljs.core.atom.call(null,null);
ghoul.main.feed_update = (function feed_update(event){
var result = cljs.core.js__GT_clj.call(null,event.data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(result),"ok")){
return ghoul.state.include_feed.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(result));
} else {
return null;
}
});
ghoul.main.read_feed = (function read_feed(uid,url){
console.log([cljs.core.str("Updating: "),cljs.core.str(uid),cljs.core.str(", "),cljs.core.str(url)].join(''));

cljs.core.deref.call(null,ghoul.main.update_feed_worker).onmessage = ghoul.main.feed_update;

return cljs.core.deref.call(null,ghoul.main.update_feed_worker).postMessage({"url": url, "uid": uid, "action": "update"});
});
goog.exportSymbol('ghoul.main.read_feed', ghoul.main.read_feed);
ghoul.main.update_all_feeds = (function update_all_feeds(){
var list_uid_url = ghoul.state.list_uid_url.call(null);
var seq__51967 = cljs.core.seq.call(null,list_uid_url);
var chunk__51968 = null;
var count__51969 = (0);
var i__51970 = (0);
while(true){
if((i__51970 < count__51969)){
var cur_uid_url = cljs.core._nth.call(null,chunk__51968,i__51970);
var uid_51971 = cljs.core.first.call(null,cur_uid_url);
var url_51972 = cljs.core.second.call(null,cur_uid_url);
ghoul.main.read_feed.call(null,uid_51971,url_51972);

var G__51973 = seq__51967;
var G__51974 = chunk__51968;
var G__51975 = count__51969;
var G__51976 = (i__51970 + (1));
seq__51967 = G__51973;
chunk__51968 = G__51974;
count__51969 = G__51975;
i__51970 = G__51976;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__51967);
if(temp__4126__auto__){
var seq__51967__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51967__$1)){
var c__4390__auto__ = cljs.core.chunk_first.call(null,seq__51967__$1);
var G__51977 = cljs.core.chunk_rest.call(null,seq__51967__$1);
var G__51978 = c__4390__auto__;
var G__51979 = cljs.core.count.call(null,c__4390__auto__);
var G__51980 = (0);
seq__51967 = G__51977;
chunk__51968 = G__51978;
count__51969 = G__51979;
i__51970 = G__51980;
continue;
} else {
var cur_uid_url = cljs.core.first.call(null,seq__51967__$1);
var uid_51981 = cljs.core.first.call(null,cur_uid_url);
var url_51982 = cljs.core.second.call(null,cur_uid_url);
ghoul.main.read_feed.call(null,uid_51981,url_51982);

var G__51983 = cljs.core.next.call(null,seq__51967__$1);
var G__51984 = null;
var G__51985 = (0);
var G__51986 = (0);
seq__51967 = G__51983;
chunk__51968 = G__51984;
count__51969 = G__51985;
i__51970 = G__51986;
continue;
}
} else {
return null;
}
}
break;
}
});
ghoul.main.initialize_app = (function initialize_app(){
ghoul.feeds_storage.init_database.call(null);

ghoul.state.initialize_state.call(null);

om.core.root.call(null,ghoul.main.app_root,ghoul.state.global,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app-root")], null));

cljs.core.reset_BANG_.call(null,ghoul.main.update_feed_worker,(new Worker("js/worker.js")));

ghoul.main.update_all_feeds.call(null);

return console.log("Ghoul Reader initialized");
});
goog.exportSymbol('ghoul.main.initialize_app', ghoul.main.initialize_app);
ghoul.main.initialize_app.call(null);
