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
if(typeof ghoul.components.sidebar.t10689 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.sidebar.t10689 = (function (owner,data,feed_util_buttons,meta10690){
this.owner = owner;
this.data = data;
this.feed_util_buttons = feed_util_buttons;
this.meta10690 = meta10690;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.sidebar.t10689.prototype.om$core$IRender$ = true;

ghoul.components.sidebar.t10689.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.call(null,{"className": "icon-buttons"},om.dom.a.call(null,{"className": "menu-icon add-group"},"Add Group"),om.dom.a.call(null,{"onClick": ghoul.state.toggle_feed_popup, "className": "menu-icon add-feed"},"Add Feed"),om.dom.a.call(null,{"className": "menu-icon import-feeds"},"Import"),om.dom.a.call(null,{"className": "menu-icon export-feeds"},"Export"),om.dom.a.call(null,{"className": "menu-icon refresh"},"Refresh"));
});

ghoul.components.sidebar.t10689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10691){
var self__ = this;
var _10691__$1 = this;
return self__.meta10690;
});

ghoul.components.sidebar.t10689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10691,meta10690__$1){
var self__ = this;
var _10691__$1 = this;
return (new ghoul.components.sidebar.t10689(self__.owner,self__.data,self__.feed_util_buttons,meta10690__$1));
});

ghoul.components.sidebar.t10689.cljs$lang$type = true;

ghoul.components.sidebar.t10689.cljs$lang$ctorStr = "ghoul.components.sidebar/t10689";

ghoul.components.sidebar.t10689.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.sidebar/t10689");
});

ghoul.components.sidebar.__GT_t10689 = (function __GT_t10689(owner__$1,data__$1,feed_util_buttons__$1,meta10690){
return (new ghoul.components.sidebar.t10689(owner__$1,data__$1,feed_util_buttons__$1,meta10690));
});

}

return (new ghoul.components.sidebar.t10689(owner,data,feed_util_buttons,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),73,new cljs.core.Keyword(null,"end-line","end-line",1837326455),17,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),8,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/components/sidebar.cljs"], null)));
});
ghoul.components.sidebar.feed_subscription = (function feed_subscription(data,owner){
if(typeof ghoul.components.sidebar.t10695 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.sidebar.t10695 = (function (owner,data,feed_subscription,meta10696){
this.owner = owner;
this.data = data;
this.feed_subscription = feed_subscription;
this.meta10696 = meta10696;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.sidebar.t10695.prototype.om$core$IRender$ = true;

ghoul.components.sidebar.t10695.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.li.call(null,null,om.dom.a.call(null,{"onClick": ((function (this$__$1){
return (function (e){
return ghoul.state.select_feed.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(self__.data));
});})(this$__$1))
},om.dom.span.call(null,null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.data)),om.dom.span.call(null,null,[cljs.core.str("("),cljs.core.str(new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.str(")")].join(''))));
});

ghoul.components.sidebar.t10695.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10697){
var self__ = this;
var _10697__$1 = this;
return self__.meta10696;
});

ghoul.components.sidebar.t10695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10697,meta10696__$1){
var self__ = this;
var _10697__$1 = this;
return (new ghoul.components.sidebar.t10695(self__.owner,self__.data,self__.feed_subscription,meta10696__$1));
});

ghoul.components.sidebar.t10695.cljs$lang$type = true;

ghoul.components.sidebar.t10695.cljs$lang$ctorStr = "ghoul.components.sidebar/t10695";

ghoul.components.sidebar.t10695.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.sidebar/t10695");
});

ghoul.components.sidebar.__GT_t10695 = (function __GT_t10695(owner__$1,data__$1,feed_subscription__$1,meta10696){
return (new ghoul.components.sidebar.t10695(owner__$1,data__$1,feed_subscription__$1,meta10696));
});

}

return (new ghoul.components.sidebar.t10695(owner,data,feed_subscription,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),70,new cljs.core.Keyword(null,"end-line","end-line",1837326455),26,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),20,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/components/sidebar.cljs"], null)));
});
ghoul.components.sidebar.feed_group = (function feed_group(data,owner){
if(typeof ghoul.components.sidebar.t10701 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.sidebar.t10701 = (function (owner,data,feed_group,meta10702){
this.owner = owner;
this.data = data;
this.feed_group = feed_group;
this.meta10702 = meta10702;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.sidebar.t10701.prototype.om$core$IRender$ = true;

ghoul.components.sidebar.t10701.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var group_class = (cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(self__.data))?"folder expanded":"folder");
return om.dom.li.call(null,null,om.dom.div.call(null,{"className": group_class},om.dom.h4.call(null,null,om.dom.span.call(null,null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.data)),om.dom.span.call(null,{"className": "count"},[cljs.core.str("("),cljs.core.str(new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.str(")")].join('')),(cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(self__.data))?om.dom.a.call(null,{"className": "minus-button"},"Contraer"):om.dom.a.call(null,{"className": "plus-button"},"Expandir"))),cljs.core.apply.call(null,om.dom.ul,{"className": "feed-list"},om.core.build_all.call(null,ghoul.components.sidebar.feed_subscription,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(self__.data)))));
});

ghoul.components.sidebar.t10701.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10703){
var self__ = this;
var _10703__$1 = this;
return self__.meta10702;
});

ghoul.components.sidebar.t10701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10703,meta10702__$1){
var self__ = this;
var _10703__$1 = this;
return (new ghoul.components.sidebar.t10701(self__.owner,self__.data,self__.feed_group,meta10702__$1));
});

ghoul.components.sidebar.t10701.cljs$lang$type = true;

ghoul.components.sidebar.t10701.cljs$lang$ctorStr = "ghoul.components.sidebar/t10701";

ghoul.components.sidebar.t10701.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.sidebar/t10701");
});

ghoul.components.sidebar.__GT_t10701 = (function __GT_t10701(owner__$1,data__$1,feed_group__$1,meta10702){
return (new ghoul.components.sidebar.t10701(owner__$1,data__$1,feed_group__$1,meta10702));
});

}

return (new ghoul.components.sidebar.t10701(owner,data,feed_group,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),93,new cljs.core.Keyword(null,"end-line","end-line",1837326455),42,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),29,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/components/sidebar.cljs"], null)));
});
ghoul.components.sidebar.feeds_list = (function feeds_list(data,owner){
if(typeof ghoul.components.sidebar.t10707 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.sidebar.t10707 = (function (owner,data,feeds_list,meta10708){
this.owner = owner;
this.data = data;
this.feeds_list = feeds_list;
this.meta10708 = meta10708;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.sidebar.t10707.prototype.om$core$IRender$ = true;

ghoul.components.sidebar.t10707.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.call(null,{"id": "feeds"},cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,ghoul.components.sidebar.feed_group,self__.data)));
});

ghoul.components.sidebar.t10707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10709){
var self__ = this;
var _10709__$1 = this;
return self__.meta10708;
});

ghoul.components.sidebar.t10707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10709,meta10708__$1){
var self__ = this;
var _10709__$1 = this;
return (new ghoul.components.sidebar.t10707(self__.owner,self__.data,self__.feeds_list,meta10708__$1));
});

ghoul.components.sidebar.t10707.cljs$lang$type = true;

ghoul.components.sidebar.t10707.cljs$lang$ctorStr = "ghoul.components.sidebar/t10707";

ghoul.components.sidebar.t10707.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.sidebar/t10707");
});

ghoul.components.sidebar.__GT_t10707 = (function __GT_t10707(owner__$1,data__$1,feeds_list__$1,meta10708){
return (new ghoul.components.sidebar.t10707(owner__$1,data__$1,feeds_list__$1,meta10708));
});

}

return (new ghoul.components.sidebar.t10707(owner,data,feeds_list,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),58,new cljs.core.Keyword(null,"end-line","end-line",1837326455),49,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),44,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/components/sidebar.cljs"], null)));
});
ghoul.components.sidebar.root = (function root(data,owner){
if(typeof ghoul.components.sidebar.t10713 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.sidebar.t10713 = (function (owner,data,root,meta10714){
this.owner = owner;
this.data = data;
this.root = root;
this.meta10714 = meta10714;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.sidebar.t10713.prototype.om$core$IRender$ = true;

ghoul.components.sidebar.t10713.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.section.call(null,{"id": "sidebar"},om.core.build.call(null,ghoul.components.sidebar.feed_util_buttons,self__.data),om.core.build.call(null,ghoul.components.common.search_box,self__.data),om.dom.a.call(null,{"className": "menu-item all"},"All Items"),om.dom.a.call(null,{"className": "menu-item favorite"},"Favorites"),om.dom.a.call(null,{"className": "menu-item shared"},"Shared"),om.core.build.call(null,ghoul.components.sidebar.feeds_list,self__.data));
});

ghoul.components.sidebar.t10713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10715){
var self__ = this;
var _10715__$1 = this;
return self__.meta10714;
});

ghoul.components.sidebar.t10713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10715,meta10714__$1){
var self__ = this;
var _10715__$1 = this;
return (new ghoul.components.sidebar.t10713(self__.owner,self__.data,self__.root,meta10714__$1));
});

ghoul.components.sidebar.t10713.cljs$lang$type = true;

ghoul.components.sidebar.t10713.cljs$lang$ctorStr = "ghoul.components.sidebar/t10713";

ghoul.components.sidebar.t10713.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.sidebar/t10713");
});

ghoul.components.sidebar.__GT_t10713 = (function __GT_t10713(owner__$1,data__$1,root__$1,meta10714){
return (new ghoul.components.sidebar.t10713(owner__$1,data__$1,root__$1,meta10714));
});

}

return (new ghoul.components.sidebar.t10713(owner,data,root,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),49,new cljs.core.Keyword(null,"end-line","end-line",1837326455),61,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),52,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/components/sidebar.cljs"], null)));
});
