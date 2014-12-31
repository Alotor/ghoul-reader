// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.app.components.common.sidebar');
goog.require('cljs.core');
goog.require('ghoul.common.utils');
goog.require('ghoul.app.messages');
goog.require('ghoul.app.messages');
goog.require('ghoul.app.components.common.search');
goog.require('ghoul.app.components.common.search');
goog.require('ghoul.common.utils');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
ghoul.app.components.common.sidebar.show_feed_popup = (function show_feed_popup(data){
return om.core.update_BANG_.call(null,new cljs.core.Keyword(null,"popup","popup",635890211).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.Keyword(null,"feed","feed",-1566486205));
});
ghoul.app.components.common.sidebar.show_state_popup = (function show_state_popup(data){
return om.core.update_BANG_.call(null,new cljs.core.Keyword(null,"popup","popup",635890211).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.Keyword(null,"state","state",-1988618099));
});
ghoul.app.components.common.sidebar.select_feed = (function select_feed(data,feed_data){
return om.core.update_BANG_.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(feed_data)], null));
});
ghoul.app.components.common.sidebar.select_group = (function select_group(data,group_data){
return om.core.update_BANG_.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(group_data)], null));
});
ghoul.app.components.common.sidebar.expand_group = (function expand_group(group_data){
return om.core.update_BANG_.call(null,group_data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expanded","expanded",-3020742)], null),true);
});
ghoul.app.components.common.sidebar.contract_group = (function contract_group(group_data){
return om.core.update_BANG_.call(null,group_data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expanded","expanded",-3020742)], null),false);
});
ghoul.app.components.common.sidebar.select_all_items = (function select_all_items(data){
return om.core.update_BANG_.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-items","all-items",1467247308)], null));
});
ghoul.app.components.common.sidebar.select_favorite_items = (function select_favorite_items(data){
return om.core.update_BANG_.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"favorite-items","favorite-items",389040315)], null));
});
ghoul.app.components.common.sidebar.select_shared_items = (function select_shared_items(data){
return om.core.update_BANG_.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared-items","shared-items",-572000165)], null));
});
ghoul.app.components.common.sidebar.feed_util_buttons = (function feed_util_buttons(data,owner){
if(typeof ghoul.app.components.common.sidebar.t6037 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.app.components.common.sidebar.t6037 = (function (owner,data,feed_util_buttons,meta6038){
this.owner = owner;
this.data = data;
this.feed_util_buttons = feed_util_buttons;
this.meta6038 = meta6038;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.app.components.common.sidebar.t6037.prototype.om$core$IRender$ = true;

ghoul.app.components.common.sidebar.t6037.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.call(null,{"className": "icon-buttons"},om.dom.a.call(null,{"className": "menu-icon add-group"},ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.toolbar.add-group","ghoul.toolbar.add-group",-1114053621))),om.dom.a.call(null,{"onClick": ((function (this$__$1){
return (function (){
return ghoul.app.components.common.sidebar.show_feed_popup.call(null,self__.data);
});})(this$__$1))
, "className": "menu-icon add-feed"},ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.toolbar.add-feed","ghoul.toolbar.add-feed",1806402013))),om.dom.a.call(null,{"onClick": ((function (this$__$1){
return (function (){
return ghoul.app.components.common.sidebar.show_state_popup.call(null,self__.data);
});})(this$__$1))
, "className": "menu-icon import-feeds"},ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.toolbar.import","ghoul.toolbar.import",-1056673439))),om.dom.a.call(null,{"className": "menu-icon export-feeds"},ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.toolbar.export","ghoul.toolbar.export",211645541))),om.dom.a.call(null,{"className": "menu-icon refresh"},ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.toolbar.refresh","ghoul.toolbar.refresh",1548474313))));
});

ghoul.app.components.common.sidebar.t6037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6039){
var self__ = this;
var _6039__$1 = this;
return self__.meta6038;
});

ghoul.app.components.common.sidebar.t6037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6039,meta6038__$1){
var self__ = this;
var _6039__$1 = this;
return (new ghoul.app.components.common.sidebar.t6037(self__.owner,self__.data,self__.feed_util_buttons,meta6038__$1));
});

ghoul.app.components.common.sidebar.t6037.cljs$lang$type = true;

ghoul.app.components.common.sidebar.t6037.cljs$lang$ctorStr = "ghoul.app.components.common.sidebar/t6037";

ghoul.app.components.common.sidebar.t6037.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.app.components.common.sidebar/t6037");
});

ghoul.app.components.common.sidebar.__GT_t6037 = (function __GT_t6037(owner__$1,data__$1,feed_util_buttons__$1,meta6038){
return (new ghoul.app.components.common.sidebar.t6037(owner__$1,data__$1,feed_util_buttons__$1,meta6038));
});

}

return (new ghoul.app.components.common.sidebar.t6037(owner,data,feed_util_buttons,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),55,new cljs.core.Keyword(null,"end-line","end-line",1837326455),51,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),36,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/app/components/common/sidebar.cljs"], null)));
});
ghoul.app.components.common.sidebar.feed_subscription = (function feed_subscription(data,owner){
if(typeof ghoul.app.components.common.sidebar.t6044 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.app.components.common.sidebar.t6044 = (function (owner,data,feed_subscription,meta6045){
this.owner = owner;
this.data = data;
this.feed_subscription = feed_subscription;
this.meta6045 = meta6045;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.app.components.common.sidebar.t6044.prototype.om$core$IRender$ = true;

ghoul.app.components.common.sidebar.t6044.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var feed_data = new cljs.core.Keyword(null,"feed","feed",-1566486205).cljs$core$IFn$_invoke$arity$1(self__.data);
var vec__6047 = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.data);
var selected = cljs.core.nth.call(null,vec__6047,(0),null);
var id = cljs.core.nth.call(null,vec__6047,(1),null);
return om.dom.li.call(null,{"className": "subscription"},om.dom.a.call(null,{"onClick": ((function (feed_data,vec__6047,selected,id,this$__$1){
return (function (){
return ghoul.app.components.common.sidebar.select_feed.call(null,self__.data,feed_data);
});})(feed_data,vec__6047,selected,id,this$__$1))
, "className": ((cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(feed_data)))?"selected":"")},om.dom.span.call(null,null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(feed_data)),om.dom.span.call(null,{"className": "count"},[cljs.core.str(new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(feed_data))].join(''))));
});

ghoul.app.components.common.sidebar.t6044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6046){
var self__ = this;
var _6046__$1 = this;
return self__.meta6045;
});

ghoul.app.components.common.sidebar.t6044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6046,meta6045__$1){
var self__ = this;
var _6046__$1 = this;
return (new ghoul.app.components.common.sidebar.t6044(self__.owner,self__.data,self__.feed_subscription,meta6045__$1));
});

ghoul.app.components.common.sidebar.t6044.cljs$lang$type = true;

ghoul.app.components.common.sidebar.t6044.cljs$lang$ctorStr = "ghoul.app.components.common.sidebar/t6044";

ghoul.app.components.common.sidebar.t6044.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.app.components.common.sidebar/t6044");
});

ghoul.app.components.common.sidebar.__GT_t6044 = (function __GT_t6044(owner__$1,data__$1,feed_subscription__$1,meta6045){
return (new ghoul.app.components.common.sidebar.t6044(owner__$1,data__$1,feed_subscription__$1,meta6045));
});

}

return (new ghoul.app.components.common.sidebar.t6044(owner,data,feed_subscription,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),91,new cljs.core.Keyword(null,"end-line","end-line",1837326455),63,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),54,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/app/components/common/sidebar.cljs"], null)));
});
ghoul.app.components.common.sidebar.feed_group = (function feed_group(data,owner){
if(typeof ghoul.app.components.common.sidebar.t6056 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.app.components.common.sidebar.t6056 = (function (owner,data,feed_group,meta6057){
this.owner = owner;
this.data = data;
this.feed_group = feed_group;
this.meta6057 = meta6057;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.app.components.common.sidebar.t6056.prototype.om$core$IRender$ = true;

ghoul.app.components.common.sidebar.t6056.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var group_data = new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(self__.data);
var group_feed_uid_set = cljs.core.set.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(self__.data)));
var group_feeds = cljs.core.filter.call(null,((function (group_data,group_feed_uid_set,this$__$1){
return (function (p1__6048_SHARP_){
return group_feed_uid_set.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(p1__6048_SHARP_));
});})(group_data,group_feed_uid_set,this$__$1))
,new cljs.core.Keyword(null,"feeds","feeds",855496306).cljs$core$IFn$_invoke$arity$1(self__.data));
var group_pending = cljs.core.reduce.call(null,((function (group_data,group_feed_uid_set,group_feeds,this$__$1){
return (function (p1__6049_SHARP_,p2__6050_SHARP_){
return (p1__6049_SHARP_ + new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(p2__6050_SHARP_));
});})(group_data,group_feed_uid_set,group_feeds,this$__$1))
,(0),group_feeds);
var group_class = (cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(group_data))?"folder expanded":"folder");
var vec__6059 = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.data);
var selected = cljs.core.nth.call(null,vec__6059,(0),null);
var id = cljs.core.nth.call(null,vec__6059,(1),null);
return om.dom.li.call(null,null,om.dom.div.call(null,{"className": group_class},om.dom.div.call(null,{"className": [cljs.core.str("group-title "),cljs.core.str(((cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(group_data)))?"selected":""))].join('')},om.dom.a.call(null,{"onClick": ((function (group_data,group_feed_uid_set,group_feeds,group_pending,group_class,vec__6059,selected,id,this$__$1){
return (function (){
return ghoul.app.components.common.sidebar.select_group.call(null,self__.data,group_data);
});})(group_data,group_feed_uid_set,group_feeds,group_pending,group_class,vec__6059,selected,id,this$__$1))
, "className": "group-select"},om.dom.span.call(null,null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(group_data)),om.dom.span.call(null,{"className": "count"},group_pending)),(cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(group_data))?om.dom.a.call(null,{"onClick": ((function (group_data,group_feed_uid_set,group_feeds,group_pending,group_class,vec__6059,selected,id,this$__$1){
return (function (){
return ghoul.app.components.common.sidebar.contract_group.call(null,group_data);
});})(group_data,group_feed_uid_set,group_feeds,group_pending,group_class,vec__6059,selected,id,this$__$1))
, "className": "minus-button"},ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.toolbar.contract","ghoul.toolbar.contract",-573466601))):om.dom.a.call(null,{"onClick": ((function (group_data,group_feed_uid_set,group_feeds,group_pending,group_class,vec__6059,selected,id,this$__$1){
return (function (){
return ghoul.app.components.common.sidebar.expand_group.call(null,group_data);
});})(group_data,group_feed_uid_set,group_feeds,group_pending,group_class,vec__6059,selected,id,this$__$1))
, "className": "plus-button"},ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.toolbar.expand","ghoul.toolbar.expand",1522560041))))),cljs.core.apply.call(null,om.dom.ul,{"className": "feed-list"},om.core.build_all.call(null,ghoul.app.components.common.sidebar.feed_subscription,cljs.core.map.call(null,((function (group_data,group_feed_uid_set,group_feeds,group_pending,group_class,vec__6059,selected,id,this$__$1){
return (function (p1__6051_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.Keyword(null,"group","group",582596132),group_data),new cljs.core.Keyword(null,"feed","feed",-1566486205),p1__6051_SHARP_);
});})(group_data,group_feed_uid_set,group_feeds,group_pending,group_class,vec__6059,selected,id,this$__$1))
,group_feeds)))));
});

ghoul.app.components.common.sidebar.t6056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6058){
var self__ = this;
var _6058__$1 = this;
return self__.meta6057;
});

ghoul.app.components.common.sidebar.t6056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6058,meta6057__$1){
var self__ = this;
var _6058__$1 = this;
return (new ghoul.app.components.common.sidebar.t6056(self__.owner,self__.data,self__.feed_group,meta6057__$1));
});

ghoul.app.components.common.sidebar.t6056.cljs$lang$type = true;

ghoul.app.components.common.sidebar.t6056.cljs$lang$ctorStr = "ghoul.app.components.common.sidebar/t6056";

ghoul.app.components.common.sidebar.t6056.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.app.components.common.sidebar/t6056");
});

ghoul.app.components.common.sidebar.__GT_t6056 = (function __GT_t6056(owner__$1,data__$1,feed_group__$1,meta6057){
return (new ghoul.app.components.common.sidebar.t6056(owner__$1,data__$1,feed_group__$1,meta6057));
});

}

return (new ghoul.app.components.common.sidebar.t6056(owner,data,feed_group,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),71,new cljs.core.Keyword(null,"end-line","end-line",1837326455),93,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),66,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/app/components/common/sidebar.cljs"], null)));
});
ghoul.app.components.common.sidebar.feeds_list = (function feeds_list(data,owner){
if(typeof ghoul.app.components.common.sidebar.t6064 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.app.components.common.sidebar.t6064 = (function (owner,data,feeds_list,meta6065){
this.owner = owner;
this.data = data;
this.feeds_list = feeds_list;
this.meta6065 = meta6065;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.app.components.common.sidebar.t6064.prototype.om$core$IRender$ = true;

ghoul.app.components.common.sidebar.t6064.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.call(null,{"id": "feeds"},cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,ghoul.app.components.common.sidebar.feed_group,cljs.core.map.call(null,((function (this$__$1){
return (function (p1__6060_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.Keyword(null,"feeds","feeds",855496306),new cljs.core.Keyword(null,"feeds","feeds",855496306).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.Keyword(null,"group","group",582596132),p1__6060_SHARP_);
});})(this$__$1))
,new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(self__.data)))));
});

ghoul.app.components.common.sidebar.t6064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6066){
var self__ = this;
var _6066__$1 = this;
return self__.meta6065;
});

ghoul.app.components.common.sidebar.t6064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6066,meta6065__$1){
var self__ = this;
var _6066__$1 = this;
return (new ghoul.app.components.common.sidebar.t6064(self__.owner,self__.data,self__.feeds_list,meta6065__$1));
});

ghoul.app.components.common.sidebar.t6064.cljs$lang$type = true;

ghoul.app.components.common.sidebar.t6064.cljs$lang$ctorStr = "ghoul.app.components.common.sidebar/t6064";

ghoul.app.components.common.sidebar.t6064.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.app.components.common.sidebar/t6064");
});

ghoul.app.components.common.sidebar.__GT_t6064 = (function __GT_t6064(owner__$1,data__$1,feeds_list__$1,meta6065){
return (new ghoul.app.components.common.sidebar.t6064(owner__$1,data__$1,feeds_list__$1,meta6065));
});

}

return (new ghoul.app.components.common.sidebar.t6064(owner,data,feeds_list,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),62,new cljs.core.Keyword(null,"end-line","end-line",1837326455),106,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),96,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/app/components/common/sidebar.cljs"], null)));
});
ghoul.app.components.common.sidebar.root = (function root(data,owner){
if(typeof ghoul.app.components.common.sidebar.t6071 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.app.components.common.sidebar.t6071 = (function (owner,data,root,meta6072){
this.owner = owner;
this.data = data;
this.root = root;
this.meta6072 = meta6072;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.app.components.common.sidebar.t6071.prototype.om$core$IRender$ = true;

ghoul.app.components.common.sidebar.t6071.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var vec__6074 = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.data);
var selected = cljs.core.nth.call(null,vec__6074,(0),null);
var _ = cljs.core.nth.call(null,vec__6074,(1),null);
return om.dom.section.call(null,{"id": "sidebar"},om.core.build.call(null,ghoul.app.components.common.sidebar.feed_util_buttons,self__.data),om.core.build.call(null,ghoul.app.components.common.search.search_box,cljs.core.PersistentArrayMap.EMPTY),om.dom.a.call(null,{"onClick": ((function (vec__6074,selected,_,this$__$1){
return (function (){
return ghoul.app.components.common.sidebar.select_all_items.call(null,self__.data);
});})(vec__6074,selected,_,this$__$1))
, "className": [cljs.core.str("menu-item all "),cljs.core.str(((cljs.core._EQ_.call(null,selected,new cljs.core.Keyword(null,"all-items","all-items",1467247308)))?"selected":""))].join('')},ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.menu.all-items","ghoul.menu.all-items",969128274))),om.dom.a.call(null,{"onClick": ((function (vec__6074,selected,_,this$__$1){
return (function (){
return ghoul.app.components.common.sidebar.select_favorite_items.call(null,self__.data);
});})(vec__6074,selected,_,this$__$1))
, "className": [cljs.core.str("menu-item favorite "),cljs.core.str(((cljs.core._EQ_.call(null,selected,new cljs.core.Keyword(null,"favorite-items","favorite-items",389040315)))?"selected":""))].join('')},ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.menu.favorite-items","ghoul.menu.favorite-items",-1852320894))),om.dom.a.call(null,{"onClick": ((function (vec__6074,selected,_,this$__$1){
return (function (){
return ghoul.app.components.common.sidebar.select_shared_items.call(null,self__.data);
});})(vec__6074,selected,_,this$__$1))
, "className": [cljs.core.str("menu-item shared "),cljs.core.str(((cljs.core._EQ_.call(null,selected,new cljs.core.Keyword(null,"shared-items","shared-items",-572000165)))?"selected":""))].join('')},ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.menu.shared-items","ghoul.menu.shared-items",764182131))),om.core.build.call(null,ghoul.app.components.common.sidebar.feeds_list,ghoul.common.utils.project.call(null,self__.data,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"groups","groups",-136896102),new cljs.core.Keyword(null,"feeds","feeds",855496306))));
});

ghoul.app.components.common.sidebar.t6071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6073){
var self__ = this;
var _6073__$1 = this;
return self__.meta6072;
});

ghoul.app.components.common.sidebar.t6071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6073,meta6072__$1){
var self__ = this;
var _6073__$1 = this;
return (new ghoul.app.components.common.sidebar.t6071(self__.owner,self__.data,self__.root,meta6072__$1));
});

ghoul.app.components.common.sidebar.t6071.cljs$lang$type = true;

ghoul.app.components.common.sidebar.t6071.cljs$lang$ctorStr = "ghoul.app.components.common.sidebar/t6071";

ghoul.app.components.common.sidebar.t6071.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.app.components.common.sidebar/t6071");
});

ghoul.app.components.common.sidebar.__GT_t6071 = (function __GT_t6071(owner__$1,data__$1,root__$1,meta6072){
return (new ghoul.app.components.common.sidebar.t6071(owner__$1,data__$1,root__$1,meta6072));
});

}

return (new ghoul.app.components.common.sidebar.t6071(owner,data,root,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),87,new cljs.core.Keyword(null,"end-line","end-line",1837326455),122,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),109,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/app/components/common/sidebar.cljs"], null)));
});
