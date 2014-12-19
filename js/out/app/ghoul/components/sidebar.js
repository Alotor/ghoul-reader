// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.components.sidebar');
goog.require('cljs.core');
goog.require('ghoul.state');
goog.require('ghoul.state');
goog.require('ghoul.components.common');
goog.require('ghoul.components.common');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
ghoul.components.sidebar.feed_util_buttons = (function feed_util_buttons(data,owner){
if(typeof ghoul.components.sidebar.t15592 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.sidebar.t15592 = (function (owner,data,feed_util_buttons,meta15593){
this.owner = owner;
this.data = data;
this.feed_util_buttons = feed_util_buttons;
this.meta15593 = meta15593;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.sidebar.t15592.prototype.om$core$IRender$ = true;

ghoul.components.sidebar.t15592.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.call(null,{"className": "icon-buttons"},om.dom.a.call(null,{"className": "menu-icon add-group"},"Add Group"),om.dom.a.call(null,{"onClick": ghoul.state.toggle_feed_popup, "className": "menu-icon add-feed"},"Add Feed"),om.dom.a.call(null,{"onClick": ghoul.state.toggle_state_popup, "className": "menu-icon import-feeds"},"Import"),om.dom.a.call(null,{"className": "menu-icon export-feeds"},"Export"),om.dom.a.call(null,{"className": "menu-icon refresh"},"Refresh"));
});

ghoul.components.sidebar.t15592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15594){
var self__ = this;
var _15594__$1 = this;
return self__.meta15593;
});

ghoul.components.sidebar.t15592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15594,meta15593__$1){
var self__ = this;
var _15594__$1 = this;
return (new ghoul.components.sidebar.t15592(self__.owner,self__.data,self__.feed_util_buttons,meta15593__$1));
});

ghoul.components.sidebar.t15592.cljs$lang$type = true;

ghoul.components.sidebar.t15592.cljs$lang$ctorStr = "ghoul.components.sidebar/t15592";

ghoul.components.sidebar.t15592.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.sidebar/t15592");
});

ghoul.components.sidebar.__GT_t15592 = (function __GT_t15592(owner__$1,data__$1,feed_util_buttons__$1,meta15593){
return (new ghoul.components.sidebar.t15592(owner__$1,data__$1,feed_util_buttons__$1,meta15593));
});

}

return (new ghoul.components.sidebar.t15592(owner,data,feed_util_buttons,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),73,new cljs.core.Keyword(null,"end-line","end-line",1837326455),18,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),8,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/components/sidebar.cljs"], null)));
});
ghoul.components.sidebar.feed_subscription = (function feed_subscription(data,owner){
if(typeof ghoul.components.sidebar.t15598 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.sidebar.t15598 = (function (owner,data,feed_subscription,meta15599){
this.owner = owner;
this.data = data;
this.feed_subscription = feed_subscription;
this.meta15599 = meta15599;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.sidebar.t15598.prototype.om$core$IRenderState$ = true;

ghoul.components.sidebar.t15598.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return om.dom.li.call(null,{"className": "subscription"},om.dom.a.call(null,{"onClick": ((function (this$__$1){
return (function (e){
return ghoul.state.select_feed.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(self__.data));
});})(this$__$1))
, "className": ((ghoul.state.selected_QMARK_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(self__.data)))?"selected":"")},om.dom.span.call(null,null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.data)),om.dom.span.call(null,{"className": "count"},[cljs.core.str(new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(self__.data))].join(''))));
});

ghoul.components.sidebar.t15598.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15600){
var self__ = this;
var _15600__$1 = this;
return self__.meta15599;
});

ghoul.components.sidebar.t15598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15600,meta15599__$1){
var self__ = this;
var _15600__$1 = this;
return (new ghoul.components.sidebar.t15598(self__.owner,self__.data,self__.feed_subscription,meta15599__$1));
});

ghoul.components.sidebar.t15598.cljs$lang$type = true;

ghoul.components.sidebar.t15598.cljs$lang$ctorStr = "ghoul.components.sidebar/t15598";

ghoul.components.sidebar.t15598.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.sidebar/t15598");
});

ghoul.components.sidebar.__GT_t15598 = (function __GT_t15598(owner__$1,data__$1,feed_subscription__$1,meta15599){
return (new ghoul.components.sidebar.t15598(owner__$1,data__$1,feed_subscription__$1,meta15599));
});

}

return (new ghoul.components.sidebar.t15598(owner,data,feed_subscription,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),83,new cljs.core.Keyword(null,"end-line","end-line",1837326455),28,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),21,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/components/sidebar.cljs"], null)));
});
ghoul.components.sidebar.feed_group = (function feed_group(data,owner){
if(typeof ghoul.components.sidebar.t15604 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.sidebar.t15604 = (function (owner,data,feed_group,meta15605){
this.owner = owner;
this.data = data;
this.feed_group = feed_group;
this.meta15605 = meta15605;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.sidebar.t15604.prototype.om$core$IRenderState$ = true;

ghoul.components.sidebar.t15604.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
var group_class = (cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(self__.data))?"folder expanded":"folder");
return om.dom.li.call(null,null,om.dom.div.call(null,{"className": group_class},om.dom.div.call(null,{"className": [cljs.core.str("group-title "),cljs.core.str(((ghoul.state.selected_QMARK_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(self__.data)))?"selected":""))].join('')},om.dom.a.call(null,{"onClick": ((function (group_class,this$__$1){
return (function (e){
return ghoul.state.select_feed.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(self__.data));
});})(group_class,this$__$1))
, "className": "group-select"},om.dom.span.call(null,null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.data)),om.dom.span.call(null,{"className": "count"},[cljs.core.str(new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(self__.data))].join(''))),(cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(self__.data))?om.dom.a.call(null,{"onClick": ((function (group_class,this$__$1){
return (function (){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expanded","expanded",-3020742)], null),false);
});})(group_class,this$__$1))
, "className": "minus-button"},"Contraer"):om.dom.a.call(null,{"onClick": ((function (group_class,this$__$1){
return (function (){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expanded","expanded",-3020742)], null),true);
});})(group_class,this$__$1))
, "className": "plus-button"},"Expandir"))),cljs.core.apply.call(null,om.dom.ul,{"className": "feed-list"},om.core.build_all.call(null,ghoul.components.sidebar.feed_subscription,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null)))));
});

ghoul.components.sidebar.t15604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15606){
var self__ = this;
var _15606__$1 = this;
return self__.meta15605;
});

ghoul.components.sidebar.t15604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15606,meta15605__$1){
var self__ = this;
var _15606__$1 = this;
return (new ghoul.components.sidebar.t15604(self__.owner,self__.data,self__.feed_group,meta15605__$1));
});

ghoul.components.sidebar.t15604.cljs$lang$type = true;

ghoul.components.sidebar.t15604.cljs$lang$ctorStr = "ghoul.components.sidebar/t15604";

ghoul.components.sidebar.t15604.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.sidebar/t15604");
});

ghoul.components.sidebar.__GT_t15604 = (function __GT_t15604(owner__$1,data__$1,feed_group__$1,meta15605){
return (new ghoul.components.sidebar.t15604(owner__$1,data__$1,feed_group__$1,meta15605));
});

}

return (new ghoul.components.sidebar.t15604(owner,data,feed_group,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),108,new cljs.core.Keyword(null,"end-line","end-line",1837326455),48,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),31,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/components/sidebar.cljs"], null)));
});
ghoul.components.sidebar.feeds_list = (function feeds_list(data,owner){
if(typeof ghoul.components.sidebar.t15610 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.sidebar.t15610 = (function (owner,data,feeds_list,meta15611){
this.owner = owner;
this.data = data;
this.feeds_list = feeds_list;
this.meta15611 = meta15611;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.sidebar.t15610.prototype.om$core$IRenderState$ = true;

ghoul.components.sidebar.t15610.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return om.dom.div.call(null,{"id": "feeds"},cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,ghoul.components.sidebar.feed_group,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null))));
});

ghoul.components.sidebar.t15610.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15612){
var self__ = this;
var _15612__$1 = this;
return self__.meta15611;
});

ghoul.components.sidebar.t15610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15612,meta15611__$1){
var self__ = this;
var _15612__$1 = this;
return (new ghoul.components.sidebar.t15610(self__.owner,self__.data,self__.feeds_list,meta15611__$1));
});

ghoul.components.sidebar.t15610.cljs$lang$type = true;

ghoul.components.sidebar.t15610.cljs$lang$ctorStr = "ghoul.components.sidebar/t15610";

ghoul.components.sidebar.t15610.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.sidebar/t15610");
});

ghoul.components.sidebar.__GT_t15610 = (function __GT_t15610(owner__$1,data__$1,feeds_list__$1,meta15611){
return (new ghoul.components.sidebar.t15610(owner__$1,data__$1,feeds_list__$1,meta15611));
});

}

return (new ghoul.components.sidebar.t15610(owner,data,feeds_list,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),73,new cljs.core.Keyword(null,"end-line","end-line",1837326455),55,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),50,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/components/sidebar.cljs"], null)));
});
ghoul.components.sidebar.root = (function root(data,owner){
if(typeof ghoul.components.sidebar.t15616 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.sidebar.t15616 = (function (owner,data,root,meta15617){
this.owner = owner;
this.data = data;
this.root = root;
this.meta15617 = meta15617;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.sidebar.t15616.prototype.om$core$IRender$ = true;

ghoul.components.sidebar.t15616.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.section.call(null,{"id": "sidebar"},om.core.build.call(null,ghoul.components.sidebar.feed_util_buttons,self__.data),om.core.build.call(null,ghoul.components.common.search_box,self__.data),om.dom.a.call(null,{"onClick": ((function (this$__$1){
return (function (){
return ghoul.state.select_all_items.call(null);
});})(this$__$1))
, "className": [cljs.core.str("menu-item all "),cljs.core.str(((ghoul.state.selected_QMARK_.call(null,new cljs.core.Keyword(null,"all-items","all-items",1467247308)))?"selected":""))].join('')},"All Items"),om.dom.a.call(null,{"onClick": ((function (this$__$1){
return (function (){
return ghoul.state.select_favorites_items.call(null);
});})(this$__$1))
, "className": [cljs.core.str("menu-item favorite "),cljs.core.str(((ghoul.state.selected_QMARK_.call(null,new cljs.core.Keyword(null,"favorite-items","favorite-items",389040315)))?"selected":""))].join('')},"Favorites"),om.dom.a.call(null,{"onClick": ((function (this$__$1){
return (function (){
return ghoul.state.select_shared_items.call(null);
});})(this$__$1))
, "className": [cljs.core.str("menu-item shared "),cljs.core.str(((ghoul.state.selected_QMARK_.call(null,new cljs.core.Keyword(null,"shared-items","shared-items",-572000165)))?"selected":""))].join('')},"Shared"),om.core.build.call(null,ghoul.components.sidebar.feeds_list,new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected-uid","selected-uid",350904150),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.data)], null)], null)));
});

ghoul.components.sidebar.t15616.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15618){
var self__ = this;
var _15618__$1 = this;
return self__.meta15617;
});

ghoul.components.sidebar.t15616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15618,meta15617__$1){
var self__ = this;
var _15618__$1 = this;
return (new ghoul.components.sidebar.t15616(self__.owner,self__.data,self__.root,meta15617__$1));
});

ghoul.components.sidebar.t15616.cljs$lang$type = true;

ghoul.components.sidebar.t15616.cljs$lang$ctorStr = "ghoul.components.sidebar/t15616";

ghoul.components.sidebar.t15616.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.sidebar/t15616");
});

ghoul.components.sidebar.__GT_t15616 = (function __GT_t15616(owner__$1,data__$1,root__$1,meta15617){
return (new ghoul.components.sidebar.t15616(owner__$1,data__$1,root__$1,meta15617));
});

}

return (new ghoul.components.sidebar.t15616(owner,data,root,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),101,new cljs.core.Keyword(null,"end-line","end-line",1837326455),70,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),58,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/components/sidebar.cljs"], null)));
});
