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
if(typeof ghoul.components.sidebar.t44983 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.sidebar.t44983 = (function (owner,data,feed_util_buttons,meta44984){
this.owner = owner;
this.data = data;
this.feed_util_buttons = feed_util_buttons;
this.meta44984 = meta44984;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.sidebar.t44983.prototype.om$core$IRender$ = true;

ghoul.components.sidebar.t44983.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.call(null,{"className": "icon-buttons"},om.dom.a.call(null,{"className": "menu-icon add-group"},"Add Group"),om.dom.a.call(null,{"onClick": ghoul.state.toggle_feed_popup, "className": "menu-icon add-feed"},"Add Feed"),om.dom.a.call(null,{"className": "menu-icon import-feeds"},"Import"),om.dom.a.call(null,{"className": "menu-icon export-feeds"},"Export"),om.dom.a.call(null,{"className": "menu-icon refresh"},"Refresh"));
});

ghoul.components.sidebar.t44983.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44985){
var self__ = this;
var _44985__$1 = this;
return self__.meta44984;
});

ghoul.components.sidebar.t44983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44985,meta44984__$1){
var self__ = this;
var _44985__$1 = this;
return (new ghoul.components.sidebar.t44983(self__.owner,self__.data,self__.feed_util_buttons,meta44984__$1));
});

ghoul.components.sidebar.t44983.cljs$lang$type = true;

ghoul.components.sidebar.t44983.cljs$lang$ctorStr = "ghoul.components.sidebar/t44983";

ghoul.components.sidebar.t44983.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.sidebar/t44983");
});

ghoul.components.sidebar.__GT_t44983 = (function __GT_t44983(owner__$1,data__$1,feed_util_buttons__$1,meta44984){
return (new ghoul.components.sidebar.t44983(owner__$1,data__$1,feed_util_buttons__$1,meta44984));
});

}

return (new ghoul.components.sidebar.t44983(owner,data,feed_util_buttons,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),73,new cljs.core.Keyword(null,"end-line","end-line",1837326455),17,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),8,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/components/sidebar.cljs"], null)));
});
ghoul.components.sidebar.feed_subscription = (function feed_subscription(data,owner){
if(typeof ghoul.components.sidebar.t44989 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.sidebar.t44989 = (function (owner,data,feed_subscription,meta44990){
this.owner = owner;
this.data = data;
this.feed_subscription = feed_subscription;
this.meta44990 = meta44990;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.sidebar.t44989.prototype.om$core$IRenderState$ = true;

ghoul.components.sidebar.t44989.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return om.dom.li.call(null,{"className": "subscription"},om.dom.a.call(null,{"onClick": ((function (this$__$1){
return (function (e){
return ghoul.state.select_feed.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(self__.data));
});})(this$__$1))
, "className": ((ghoul.state.selected_QMARK_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(self__.data)))?"selected":"")},om.dom.span.call(null,null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.data)),om.dom.span.call(null,{"className": "count"},[cljs.core.str(new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(self__.data))].join(''))));
});

ghoul.components.sidebar.t44989.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44991){
var self__ = this;
var _44991__$1 = this;
return self__.meta44990;
});

ghoul.components.sidebar.t44989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44991,meta44990__$1){
var self__ = this;
var _44991__$1 = this;
return (new ghoul.components.sidebar.t44989(self__.owner,self__.data,self__.feed_subscription,meta44990__$1));
});

ghoul.components.sidebar.t44989.cljs$lang$type = true;

ghoul.components.sidebar.t44989.cljs$lang$ctorStr = "ghoul.components.sidebar/t44989";

ghoul.components.sidebar.t44989.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.sidebar/t44989");
});

ghoul.components.sidebar.__GT_t44989 = (function __GT_t44989(owner__$1,data__$1,feed_subscription__$1,meta44990){
return (new ghoul.components.sidebar.t44989(owner__$1,data__$1,feed_subscription__$1,meta44990));
});

}

return (new ghoul.components.sidebar.t44989(owner,data,feed_subscription,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),83,new cljs.core.Keyword(null,"end-line","end-line",1837326455),27,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),20,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/components/sidebar.cljs"], null)));
});
ghoul.components.sidebar.feed_group = (function feed_group(data,owner){
if(typeof ghoul.components.sidebar.t44995 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.sidebar.t44995 = (function (owner,data,feed_group,meta44996){
this.owner = owner;
this.data = data;
this.feed_group = feed_group;
this.meta44996 = meta44996;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.sidebar.t44995.prototype.om$core$IRenderState$ = true;

ghoul.components.sidebar.t44995.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
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

ghoul.components.sidebar.t44995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44997){
var self__ = this;
var _44997__$1 = this;
return self__.meta44996;
});

ghoul.components.sidebar.t44995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44997,meta44996__$1){
var self__ = this;
var _44997__$1 = this;
return (new ghoul.components.sidebar.t44995(self__.owner,self__.data,self__.feed_group,meta44996__$1));
});

ghoul.components.sidebar.t44995.cljs$lang$type = true;

ghoul.components.sidebar.t44995.cljs$lang$ctorStr = "ghoul.components.sidebar/t44995";

ghoul.components.sidebar.t44995.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.sidebar/t44995");
});

ghoul.components.sidebar.__GT_t44995 = (function __GT_t44995(owner__$1,data__$1,feed_group__$1,meta44996){
return (new ghoul.components.sidebar.t44995(owner__$1,data__$1,feed_group__$1,meta44996));
});

}

return (new ghoul.components.sidebar.t44995(owner,data,feed_group,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),108,new cljs.core.Keyword(null,"end-line","end-line",1837326455),47,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),30,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/components/sidebar.cljs"], null)));
});
ghoul.components.sidebar.feeds_list = (function feeds_list(data,owner){
if(typeof ghoul.components.sidebar.t45001 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.sidebar.t45001 = (function (owner,data,feeds_list,meta45002){
this.owner = owner;
this.data = data;
this.feeds_list = feeds_list;
this.meta45002 = meta45002;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.sidebar.t45001.prototype.om$core$IRenderState$ = true;

ghoul.components.sidebar.t45001.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return om.dom.div.call(null,{"id": "feeds"},cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,ghoul.components.sidebar.feed_group,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null))));
});

ghoul.components.sidebar.t45001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45003){
var self__ = this;
var _45003__$1 = this;
return self__.meta45002;
});

ghoul.components.sidebar.t45001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45003,meta45002__$1){
var self__ = this;
var _45003__$1 = this;
return (new ghoul.components.sidebar.t45001(self__.owner,self__.data,self__.feeds_list,meta45002__$1));
});

ghoul.components.sidebar.t45001.cljs$lang$type = true;

ghoul.components.sidebar.t45001.cljs$lang$ctorStr = "ghoul.components.sidebar/t45001";

ghoul.components.sidebar.t45001.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.sidebar/t45001");
});

ghoul.components.sidebar.__GT_t45001 = (function __GT_t45001(owner__$1,data__$1,feeds_list__$1,meta45002){
return (new ghoul.components.sidebar.t45001(owner__$1,data__$1,feeds_list__$1,meta45002));
});

}

return (new ghoul.components.sidebar.t45001(owner,data,feeds_list,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),73,new cljs.core.Keyword(null,"end-line","end-line",1837326455),54,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),49,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/components/sidebar.cljs"], null)));
});
ghoul.components.sidebar.root = (function root(data,owner){
if(typeof ghoul.components.sidebar.t45007 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.sidebar.t45007 = (function (owner,data,root,meta45008){
this.owner = owner;
this.data = data;
this.root = root;
this.meta45008 = meta45008;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.sidebar.t45007.prototype.om$core$IRender$ = true;

ghoul.components.sidebar.t45007.prototype.om$core$IRender$render$arity$1 = (function (this$){
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

ghoul.components.sidebar.t45007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45009){
var self__ = this;
var _45009__$1 = this;
return self__.meta45008;
});

ghoul.components.sidebar.t45007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45009,meta45008__$1){
var self__ = this;
var _45009__$1 = this;
return (new ghoul.components.sidebar.t45007(self__.owner,self__.data,self__.root,meta45008__$1));
});

ghoul.components.sidebar.t45007.cljs$lang$type = true;

ghoul.components.sidebar.t45007.cljs$lang$ctorStr = "ghoul.components.sidebar/t45007";

ghoul.components.sidebar.t45007.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.sidebar/t45007");
});

ghoul.components.sidebar.__GT_t45007 = (function __GT_t45007(owner__$1,data__$1,root__$1,meta45008){
return (new ghoul.components.sidebar.t45007(owner__$1,data__$1,root__$1,meta45008));
});

}

return (new ghoul.components.sidebar.t45007(owner,data,root,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),101,new cljs.core.Keyword(null,"end-line","end-line",1837326455),69,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),57,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/components/sidebar.cljs"], null)));
});
