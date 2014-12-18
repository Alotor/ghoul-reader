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
if(typeof ghoul.components.sidebar.t28356 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.sidebar.t28356 = (function (owner,data,feed_util_buttons,meta28357){
this.owner = owner;
this.data = data;
this.feed_util_buttons = feed_util_buttons;
this.meta28357 = meta28357;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.sidebar.t28356.prototype.om$core$IRender$ = true;

ghoul.components.sidebar.t28356.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.call(null,{"className": "icon-buttons"},om.dom.a.call(null,{"className": "menu-icon add-group"},"Add Group"),om.dom.a.call(null,{"onClick": ghoul.state.toggle_feed_popup, "className": "menu-icon add-feed"},"Add Feed"),om.dom.a.call(null,{"className": "menu-icon import-feeds"},"Import"),om.dom.a.call(null,{"className": "menu-icon export-feeds"},"Export"),om.dom.a.call(null,{"className": "menu-icon refresh"},"Refresh"));
});

ghoul.components.sidebar.t28356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28358){
var self__ = this;
var _28358__$1 = this;
return self__.meta28357;
});

ghoul.components.sidebar.t28356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28358,meta28357__$1){
var self__ = this;
var _28358__$1 = this;
return (new ghoul.components.sidebar.t28356(self__.owner,self__.data,self__.feed_util_buttons,meta28357__$1));
});

ghoul.components.sidebar.t28356.cljs$lang$type = true;

ghoul.components.sidebar.t28356.cljs$lang$ctorStr = "ghoul.components.sidebar/t28356";

ghoul.components.sidebar.t28356.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.sidebar/t28356");
});

ghoul.components.sidebar.__GT_t28356 = (function __GT_t28356(owner__$1,data__$1,feed_util_buttons__$1,meta28357){
return (new ghoul.components.sidebar.t28356(owner__$1,data__$1,feed_util_buttons__$1,meta28357));
});

}

return (new ghoul.components.sidebar.t28356(owner,data,feed_util_buttons,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),73,new cljs.core.Keyword(null,"end-line","end-line",1837326455),17,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),8,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/components/sidebar.cljs"], null)));
});
ghoul.components.sidebar.feed_subscription = (function feed_subscription(data,owner){
if(typeof ghoul.components.sidebar.t28362 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.sidebar.t28362 = (function (owner,data,feed_subscription,meta28363){
this.owner = owner;
this.data = data;
this.feed_subscription = feed_subscription;
this.meta28363 = meta28363;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.sidebar.t28362.prototype.om$core$IRenderState$ = true;

ghoul.components.sidebar.t28362.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return om.dom.li.call(null,null,om.dom.a.call(null,{"onClick": ((function (this$__$1){
return (function (e){
return ghoul.state.select_feed.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(self__.data));
});})(this$__$1))
, "className": ((ghoul.state.selected_QMARK_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(self__.data)))?"selected":"")},om.dom.span.call(null,null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.data)),om.dom.span.call(null,null,[cljs.core.str("("),cljs.core.str(new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.str(")")].join(''))));
});

ghoul.components.sidebar.t28362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28364){
var self__ = this;
var _28364__$1 = this;
return self__.meta28363;
});

ghoul.components.sidebar.t28362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28364,meta28363__$1){
var self__ = this;
var _28364__$1 = this;
return (new ghoul.components.sidebar.t28362(self__.owner,self__.data,self__.feed_subscription,meta28363__$1));
});

ghoul.components.sidebar.t28362.cljs$lang$type = true;

ghoul.components.sidebar.t28362.cljs$lang$ctorStr = "ghoul.components.sidebar/t28362";

ghoul.components.sidebar.t28362.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.sidebar/t28362");
});

ghoul.components.sidebar.__GT_t28362 = (function __GT_t28362(owner__$1,data__$1,feed_subscription__$1,meta28363){
return (new ghoul.components.sidebar.t28362(owner__$1,data__$1,feed_subscription__$1,meta28363));
});

}

return (new ghoul.components.sidebar.t28362(owner,data,feed_subscription,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),70,new cljs.core.Keyword(null,"end-line","end-line",1837326455),27,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),20,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/components/sidebar.cljs"], null)));
});
ghoul.components.sidebar.feed_group = (function feed_group(data,owner){
if(typeof ghoul.components.sidebar.t28368 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.sidebar.t28368 = (function (owner,data,feed_group,meta28369){
this.owner = owner;
this.data = data;
this.feed_group = feed_group;
this.meta28369 = meta28369;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.sidebar.t28368.prototype.om$core$IRenderState$ = true;

ghoul.components.sidebar.t28368.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
var group_class = (cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(self__.data))?"folder expanded":"folder");
return om.dom.li.call(null,null,om.dom.div.call(null,{"className": group_class},om.dom.div.call(null,{"className": [cljs.core.str("group-title "),cljs.core.str(((ghoul.state.selected_QMARK_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(self__.data)))?"selected":""))].join('')},om.dom.a.call(null,{"onClick": ((function (group_class,this$__$1){
return (function (e){
return ghoul.state.select_feed.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(self__.data));
});})(group_class,this$__$1))
, "className": "group-select"},om.dom.span.call(null,null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.data)),om.dom.span.call(null,{"className": "count"},[cljs.core.str("("),cljs.core.str(new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.str(")")].join(''))),(cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(self__.data))?om.dom.a.call(null,{"onClick": ((function (group_class,this$__$1){
return (function (){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expanded","expanded",-3020742)], null),false);
});})(group_class,this$__$1))
, "className": "minus-button"},"Contraer"):om.dom.a.call(null,{"onClick": ((function (group_class,this$__$1){
return (function (){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expanded","expanded",-3020742)], null),true);
});})(group_class,this$__$1))
, "className": "plus-button"},"Expandir"))),cljs.core.apply.call(null,om.dom.ul,{"className": "feed-list"},om.core.build_all.call(null,ghoul.components.sidebar.feed_subscription,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null)))));
});

ghoul.components.sidebar.t28368.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28370){
var self__ = this;
var _28370__$1 = this;
return self__.meta28369;
});

ghoul.components.sidebar.t28368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28370,meta28369__$1){
var self__ = this;
var _28370__$1 = this;
return (new ghoul.components.sidebar.t28368(self__.owner,self__.data,self__.feed_group,meta28369__$1));
});

ghoul.components.sidebar.t28368.cljs$lang$type = true;

ghoul.components.sidebar.t28368.cljs$lang$ctorStr = "ghoul.components.sidebar/t28368";

ghoul.components.sidebar.t28368.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.sidebar/t28368");
});

ghoul.components.sidebar.__GT_t28368 = (function __GT_t28368(owner__$1,data__$1,feed_group__$1,meta28369){
return (new ghoul.components.sidebar.t28368(owner__$1,data__$1,feed_group__$1,meta28369));
});

}

return (new ghoul.components.sidebar.t28368(owner,data,feed_group,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),108,new cljs.core.Keyword(null,"end-line","end-line",1837326455),47,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),30,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/components/sidebar.cljs"], null)));
});
ghoul.components.sidebar.feeds_list = (function feeds_list(data,owner){
if(typeof ghoul.components.sidebar.t28374 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.sidebar.t28374 = (function (owner,data,feeds_list,meta28375){
this.owner = owner;
this.data = data;
this.feeds_list = feeds_list;
this.meta28375 = meta28375;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.sidebar.t28374.prototype.om$core$IRenderState$ = true;

ghoul.components.sidebar.t28374.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return om.dom.div.call(null,{"id": "feeds"},cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,ghoul.components.sidebar.feed_group,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null))));
});

ghoul.components.sidebar.t28374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28376){
var self__ = this;
var _28376__$1 = this;
return self__.meta28375;
});

ghoul.components.sidebar.t28374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28376,meta28375__$1){
var self__ = this;
var _28376__$1 = this;
return (new ghoul.components.sidebar.t28374(self__.owner,self__.data,self__.feeds_list,meta28375__$1));
});

ghoul.components.sidebar.t28374.cljs$lang$type = true;

ghoul.components.sidebar.t28374.cljs$lang$ctorStr = "ghoul.components.sidebar/t28374";

ghoul.components.sidebar.t28374.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.sidebar/t28374");
});

ghoul.components.sidebar.__GT_t28374 = (function __GT_t28374(owner__$1,data__$1,feeds_list__$1,meta28375){
return (new ghoul.components.sidebar.t28374(owner__$1,data__$1,feeds_list__$1,meta28375));
});

}

return (new ghoul.components.sidebar.t28374(owner,data,feeds_list,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),73,new cljs.core.Keyword(null,"end-line","end-line",1837326455),54,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),49,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/components/sidebar.cljs"], null)));
});
ghoul.components.sidebar.root = (function root(data,owner){
if(typeof ghoul.components.sidebar.t28380 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.sidebar.t28380 = (function (owner,data,root,meta28381){
this.owner = owner;
this.data = data;
this.root = root;
this.meta28381 = meta28381;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.sidebar.t28380.prototype.om$core$IRender$ = true;

ghoul.components.sidebar.t28380.prototype.om$core$IRender$render$arity$1 = (function (this$){
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

ghoul.components.sidebar.t28380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28382){
var self__ = this;
var _28382__$1 = this;
return self__.meta28381;
});

ghoul.components.sidebar.t28380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28382,meta28381__$1){
var self__ = this;
var _28382__$1 = this;
return (new ghoul.components.sidebar.t28380(self__.owner,self__.data,self__.root,meta28381__$1));
});

ghoul.components.sidebar.t28380.cljs$lang$type = true;

ghoul.components.sidebar.t28380.cljs$lang$ctorStr = "ghoul.components.sidebar/t28380";

ghoul.components.sidebar.t28380.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.sidebar/t28380");
});

ghoul.components.sidebar.__GT_t28380 = (function __GT_t28380(owner__$1,data__$1,root__$1,meta28381){
return (new ghoul.components.sidebar.t28380(owner__$1,data__$1,root__$1,meta28381));
});

}

return (new ghoul.components.sidebar.t28380(owner,data,root,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),101,new cljs.core.Keyword(null,"end-line","end-line",1837326455),69,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),57,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/components/sidebar.cljs"], null)));
});
