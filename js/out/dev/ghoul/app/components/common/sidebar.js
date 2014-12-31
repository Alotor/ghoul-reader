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
if(typeof ghoul.app.components.common.sidebar.t23705 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.app.components.common.sidebar.t23705 = (function (owner,data,feed_util_buttons,meta23706){
this.owner = owner;
this.data = data;
this.feed_util_buttons = feed_util_buttons;
this.meta23706 = meta23706;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.app.components.common.sidebar.t23705.prototype.om$core$IRender$ = true;

ghoul.app.components.common.sidebar.t23705.prototype.om$core$IRender$render$arity$1 = (function (this$){
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

ghoul.app.components.common.sidebar.t23705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23707){
var self__ = this;
var _23707__$1 = this;
return self__.meta23706;
});

ghoul.app.components.common.sidebar.t23705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23707,meta23706__$1){
var self__ = this;
var _23707__$1 = this;
return (new ghoul.app.components.common.sidebar.t23705(self__.owner,self__.data,self__.feed_util_buttons,meta23706__$1));
});

ghoul.app.components.common.sidebar.t23705.cljs$lang$type = true;

ghoul.app.components.common.sidebar.t23705.cljs$lang$ctorStr = "ghoul.app.components.common.sidebar/t23705";

ghoul.app.components.common.sidebar.t23705.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.app.components.common.sidebar/t23705");
});

ghoul.app.components.common.sidebar.__GT_t23705 = (function __GT_t23705(owner__$1,data__$1,feed_util_buttons__$1,meta23706){
return (new ghoul.app.components.common.sidebar.t23705(owner__$1,data__$1,feed_util_buttons__$1,meta23706));
});

}

return (new ghoul.app.components.common.sidebar.t23705(owner,data,feed_util_buttons,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),55,new cljs.core.Keyword(null,"end-line","end-line",1837326455),51,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),36,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/app/components/common/sidebar.cljs"], null)));
});
ghoul.app.components.common.sidebar.feed_subscription = (function feed_subscription(data,owner){
if(typeof ghoul.app.components.common.sidebar.t23712 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.app.components.common.sidebar.t23712 = (function (owner,data,feed_subscription,meta23713){
this.owner = owner;
this.data = data;
this.feed_subscription = feed_subscription;
this.meta23713 = meta23713;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.app.components.common.sidebar.t23712.prototype.om$core$IRender$ = true;

ghoul.app.components.common.sidebar.t23712.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var feed_data = new cljs.core.Keyword(null,"feed","feed",-1566486205).cljs$core$IFn$_invoke$arity$1(self__.data);
var vec__23715 = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.data);
var selected = cljs.core.nth.call(null,vec__23715,(0),null);
var id = cljs.core.nth.call(null,vec__23715,(1),null);
return om.dom.li.call(null,{"className": "subscription"},om.dom.a.call(null,{"onClick": ((function (feed_data,vec__23715,selected,id,this$__$1){
return (function (){
return ghoul.app.components.common.sidebar.select_feed.call(null,self__.data,feed_data);
});})(feed_data,vec__23715,selected,id,this$__$1))
, "className": ((cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(feed_data)))?"selected":"")},om.dom.span.call(null,null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(feed_data)),om.dom.span.call(null,{"className": "count"},[cljs.core.str(new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(feed_data))].join(''))));
});

ghoul.app.components.common.sidebar.t23712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23714){
var self__ = this;
var _23714__$1 = this;
return self__.meta23713;
});

ghoul.app.components.common.sidebar.t23712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23714,meta23713__$1){
var self__ = this;
var _23714__$1 = this;
return (new ghoul.app.components.common.sidebar.t23712(self__.owner,self__.data,self__.feed_subscription,meta23713__$1));
});

ghoul.app.components.common.sidebar.t23712.cljs$lang$type = true;

ghoul.app.components.common.sidebar.t23712.cljs$lang$ctorStr = "ghoul.app.components.common.sidebar/t23712";

ghoul.app.components.common.sidebar.t23712.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.app.components.common.sidebar/t23712");
});

ghoul.app.components.common.sidebar.__GT_t23712 = (function __GT_t23712(owner__$1,data__$1,feed_subscription__$1,meta23713){
return (new ghoul.app.components.common.sidebar.t23712(owner__$1,data__$1,feed_subscription__$1,meta23713));
});

}

return (new ghoul.app.components.common.sidebar.t23712(owner,data,feed_subscription,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),91,new cljs.core.Keyword(null,"end-line","end-line",1837326455),63,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),54,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/app/components/common/sidebar.cljs"], null)));
});
ghoul.app.components.common.sidebar.feed_group = (function feed_group(data,owner){
if(typeof ghoul.app.components.common.sidebar.t23724 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.app.components.common.sidebar.t23724 = (function (owner,data,feed_group,meta23725){
this.owner = owner;
this.data = data;
this.feed_group = feed_group;
this.meta23725 = meta23725;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.app.components.common.sidebar.t23724.prototype.om$core$IRender$ = true;

ghoul.app.components.common.sidebar.t23724.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var group_data = new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(self__.data);
var group_feed_uid_set = cljs.core.set.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(self__.data)));
var group_feeds = cljs.core.filter.call(null,((function (group_data,group_feed_uid_set,this$__$1){
return (function (p1__23716_SHARP_){
return group_feed_uid_set.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(p1__23716_SHARP_));
});})(group_data,group_feed_uid_set,this$__$1))
,new cljs.core.Keyword(null,"feeds","feeds",855496306).cljs$core$IFn$_invoke$arity$1(self__.data));
var group_pending = cljs.core.reduce.call(null,((function (group_data,group_feed_uid_set,group_feeds,this$__$1){
return (function (p1__23717_SHARP_,p2__23718_SHARP_){
return (p1__23717_SHARP_ + new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(p2__23718_SHARP_));
});})(group_data,group_feed_uid_set,group_feeds,this$__$1))
,(0),group_feeds);
var group_class = (cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(group_data))?"folder expanded":"folder");
var vec__23727 = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.data);
var selected = cljs.core.nth.call(null,vec__23727,(0),null);
var id = cljs.core.nth.call(null,vec__23727,(1),null);
return om.dom.li.call(null,null,om.dom.div.call(null,{"className": group_class},om.dom.div.call(null,{"className": [cljs.core.str("group-title "),cljs.core.str(((cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(group_data)))?"selected":""))].join('')},om.dom.a.call(null,{"onClick": ((function (group_data,group_feed_uid_set,group_feeds,group_pending,group_class,vec__23727,selected,id,this$__$1){
return (function (){
return ghoul.app.components.common.sidebar.select_group.call(null,self__.data,group_data);
});})(group_data,group_feed_uid_set,group_feeds,group_pending,group_class,vec__23727,selected,id,this$__$1))
, "className": "group-select"},om.dom.span.call(null,null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(group_data)),om.dom.span.call(null,{"className": "count"},group_pending)),(cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(group_data))?om.dom.a.call(null,{"onClick": ((function (group_data,group_feed_uid_set,group_feeds,group_pending,group_class,vec__23727,selected,id,this$__$1){
return (function (){
return ghoul.app.components.common.sidebar.contract_group.call(null,group_data);
});})(group_data,group_feed_uid_set,group_feeds,group_pending,group_class,vec__23727,selected,id,this$__$1))
, "className": "minus-button"},ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.toolbar.contract","ghoul.toolbar.contract",-573466601))):om.dom.a.call(null,{"onClick": ((function (group_data,group_feed_uid_set,group_feeds,group_pending,group_class,vec__23727,selected,id,this$__$1){
return (function (){
return ghoul.app.components.common.sidebar.expand_group.call(null,group_data);
});})(group_data,group_feed_uid_set,group_feeds,group_pending,group_class,vec__23727,selected,id,this$__$1))
, "className": "plus-button"},ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.toolbar.expand","ghoul.toolbar.expand",1522560041))))),cljs.core.apply.call(null,om.dom.ul,{"className": "feed-list"},om.core.build_all.call(null,ghoul.app.components.common.sidebar.feed_subscription,cljs.core.map.call(null,((function (group_data,group_feed_uid_set,group_feeds,group_pending,group_class,vec__23727,selected,id,this$__$1){
return (function (p1__23719_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.Keyword(null,"group","group",582596132),group_data),new cljs.core.Keyword(null,"feed","feed",-1566486205),p1__23719_SHARP_);
});})(group_data,group_feed_uid_set,group_feeds,group_pending,group_class,vec__23727,selected,id,this$__$1))
,group_feeds)))));
});

ghoul.app.components.common.sidebar.t23724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23726){
var self__ = this;
var _23726__$1 = this;
return self__.meta23725;
});

ghoul.app.components.common.sidebar.t23724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23726,meta23725__$1){
var self__ = this;
var _23726__$1 = this;
return (new ghoul.app.components.common.sidebar.t23724(self__.owner,self__.data,self__.feed_group,meta23725__$1));
});

ghoul.app.components.common.sidebar.t23724.cljs$lang$type = true;

ghoul.app.components.common.sidebar.t23724.cljs$lang$ctorStr = "ghoul.app.components.common.sidebar/t23724";

ghoul.app.components.common.sidebar.t23724.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.app.components.common.sidebar/t23724");
});

ghoul.app.components.common.sidebar.__GT_t23724 = (function __GT_t23724(owner__$1,data__$1,feed_group__$1,meta23725){
return (new ghoul.app.components.common.sidebar.t23724(owner__$1,data__$1,feed_group__$1,meta23725));
});

}

return (new ghoul.app.components.common.sidebar.t23724(owner,data,feed_group,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),71,new cljs.core.Keyword(null,"end-line","end-line",1837326455),93,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),66,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/app/components/common/sidebar.cljs"], null)));
});
ghoul.app.components.common.sidebar.feeds_list = (function feeds_list(data,owner){
if(typeof ghoul.app.components.common.sidebar.t23732 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.app.components.common.sidebar.t23732 = (function (owner,data,feeds_list,meta23733){
this.owner = owner;
this.data = data;
this.feeds_list = feeds_list;
this.meta23733 = meta23733;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.app.components.common.sidebar.t23732.prototype.om$core$IRender$ = true;

ghoul.app.components.common.sidebar.t23732.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.call(null,{"id": "feeds"},cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,ghoul.app.components.common.sidebar.feed_group,cljs.core.map.call(null,((function (this$__$1){
return (function (p1__23728_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.Keyword(null,"feeds","feeds",855496306),new cljs.core.Keyword(null,"feeds","feeds",855496306).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.Keyword(null,"group","group",582596132),p1__23728_SHARP_);
});})(this$__$1))
,new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(self__.data)))));
});

ghoul.app.components.common.sidebar.t23732.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23734){
var self__ = this;
var _23734__$1 = this;
return self__.meta23733;
});

ghoul.app.components.common.sidebar.t23732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23734,meta23733__$1){
var self__ = this;
var _23734__$1 = this;
return (new ghoul.app.components.common.sidebar.t23732(self__.owner,self__.data,self__.feeds_list,meta23733__$1));
});

ghoul.app.components.common.sidebar.t23732.cljs$lang$type = true;

ghoul.app.components.common.sidebar.t23732.cljs$lang$ctorStr = "ghoul.app.components.common.sidebar/t23732";

ghoul.app.components.common.sidebar.t23732.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.app.components.common.sidebar/t23732");
});

ghoul.app.components.common.sidebar.__GT_t23732 = (function __GT_t23732(owner__$1,data__$1,feeds_list__$1,meta23733){
return (new ghoul.app.components.common.sidebar.t23732(owner__$1,data__$1,feeds_list__$1,meta23733));
});

}

return (new ghoul.app.components.common.sidebar.t23732(owner,data,feeds_list,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),62,new cljs.core.Keyword(null,"end-line","end-line",1837326455),106,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),96,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/app/components/common/sidebar.cljs"], null)));
});
ghoul.app.components.common.sidebar.root = (function root(data,owner){
if(typeof ghoul.app.components.common.sidebar.t23739 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.app.components.common.sidebar.t23739 = (function (owner,data,root,meta23740){
this.owner = owner;
this.data = data;
this.root = root;
this.meta23740 = meta23740;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.app.components.common.sidebar.t23739.prototype.om$core$IRender$ = true;

ghoul.app.components.common.sidebar.t23739.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var vec__23742 = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.data);
var selected = cljs.core.nth.call(null,vec__23742,(0),null);
var _ = cljs.core.nth.call(null,vec__23742,(1),null);
return om.dom.section.call(null,{"id": "sidebar"},om.core.build.call(null,ghoul.app.components.common.sidebar.feed_util_buttons,self__.data),om.core.build.call(null,ghoul.app.components.common.search.search_box,cljs.core.PersistentArrayMap.EMPTY),om.dom.a.call(null,{"onClick": ((function (vec__23742,selected,_,this$__$1){
return (function (){
return ghoul.app.components.common.sidebar.select_all_items.call(null,self__.data);
});})(vec__23742,selected,_,this$__$1))
, "className": [cljs.core.str("menu-item all "),cljs.core.str(((cljs.core._EQ_.call(null,selected,new cljs.core.Keyword(null,"all-items","all-items",1467247308)))?"selected":""))].join('')},ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.menu.all-items","ghoul.menu.all-items",969128274))),om.dom.a.call(null,{"onClick": ((function (vec__23742,selected,_,this$__$1){
return (function (){
return ghoul.app.components.common.sidebar.select_favorite_items.call(null,self__.data);
});})(vec__23742,selected,_,this$__$1))
, "className": [cljs.core.str("menu-item favorite "),cljs.core.str(((cljs.core._EQ_.call(null,selected,new cljs.core.Keyword(null,"favorite-items","favorite-items",389040315)))?"selected":""))].join('')},ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.menu.favorite-items","ghoul.menu.favorite-items",-1852320894))),om.dom.a.call(null,{"onClick": ((function (vec__23742,selected,_,this$__$1){
return (function (){
return ghoul.app.components.common.sidebar.select_shared_items.call(null,self__.data);
});})(vec__23742,selected,_,this$__$1))
, "className": [cljs.core.str("menu-item shared "),cljs.core.str(((cljs.core._EQ_.call(null,selected,new cljs.core.Keyword(null,"shared-items","shared-items",-572000165)))?"selected":""))].join('')},ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.menu.shared-items","ghoul.menu.shared-items",764182131))),om.core.build.call(null,ghoul.app.components.common.sidebar.feeds_list,ghoul.common.utils.project.call(null,self__.data,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"groups","groups",-136896102),new cljs.core.Keyword(null,"feeds","feeds",855496306))));
});

ghoul.app.components.common.sidebar.t23739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23741){
var self__ = this;
var _23741__$1 = this;
return self__.meta23740;
});

ghoul.app.components.common.sidebar.t23739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23741,meta23740__$1){
var self__ = this;
var _23741__$1 = this;
return (new ghoul.app.components.common.sidebar.t23739(self__.owner,self__.data,self__.root,meta23740__$1));
});

ghoul.app.components.common.sidebar.t23739.cljs$lang$type = true;

ghoul.app.components.common.sidebar.t23739.cljs$lang$ctorStr = "ghoul.app.components.common.sidebar/t23739";

ghoul.app.components.common.sidebar.t23739.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.app.components.common.sidebar/t23739");
});

ghoul.app.components.common.sidebar.__GT_t23739 = (function __GT_t23739(owner__$1,data__$1,root__$1,meta23740){
return (new ghoul.app.components.common.sidebar.t23739(owner__$1,data__$1,root__$1,meta23740));
});

}

return (new ghoul.app.components.common.sidebar.t23739(owner,data,root,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),87,new cljs.core.Keyword(null,"end-line","end-line",1837326455),122,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),109,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/app/components/common/sidebar.cljs"], null)));
});

//# sourceMappingURL=sidebar.js.map?rel=1420049676201