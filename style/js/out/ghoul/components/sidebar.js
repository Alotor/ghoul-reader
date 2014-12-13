// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.components.sidebar');
goog.require('cljs.core');
goog.require('ghoul.state');
goog.require('ghoul.state');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
ghoul.components.sidebar.feed_subscription = (function feed_subscription(data,owner){
if(typeof ghoul.components.sidebar.t7804 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.sidebar.t7804 = (function (owner,data,feed_subscription,meta7805){
this.owner = owner;
this.data = data;
this.feed_subscription = feed_subscription;
this.meta7805 = meta7805;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.sidebar.t7804.prototype.om$core$IRender$ = true;

ghoul.components.sidebar.t7804.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.li.call(null,null,om.dom.a.call(null,{"onClick": ((function (this$__$1){
return (function (e){
return ghoul.state.select_feed.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(self__.data));
});})(this$__$1))
},om.dom.span.call(null,null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.data)),om.dom.span.call(null,null,[cljs.core.str("("),cljs.core.str(new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.str(")")].join(''))));
});

ghoul.components.sidebar.t7804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7806){
var self__ = this;
var _7806__$1 = this;
return self__.meta7805;
});

ghoul.components.sidebar.t7804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7806,meta7805__$1){
var self__ = this;
var _7806__$1 = this;
return (new ghoul.components.sidebar.t7804(self__.owner,self__.data,self__.feed_subscription,meta7805__$1));
});

ghoul.components.sidebar.t7804.cljs$lang$type = true;

ghoul.components.sidebar.t7804.cljs$lang$ctorStr = "ghoul.components.sidebar/t7804";

ghoul.components.sidebar.t7804.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.sidebar/t7804");
});

ghoul.components.sidebar.__GT_t7804 = (function __GT_t7804(owner__$1,data__$1,feed_subscription__$1,meta7805){
return (new ghoul.components.sidebar.t7804(owner__$1,data__$1,feed_subscription__$1,meta7805));
});

}

return (new ghoul.components.sidebar.t7804(owner,data,feed_subscription,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),70,new cljs.core.Keyword(null,"end-line","end-line",1837326455),13,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),7,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/ghoul/components/sidebar.cljs"], null)));
});
ghoul.components.sidebar.feed_group = (function feed_group(data,owner){
if(typeof ghoul.components.sidebar.t7810 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.sidebar.t7810 = (function (owner,data,feed_group,meta7811){
this.owner = owner;
this.data = data;
this.feed_group = feed_group;
this.meta7811 = meta7811;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.sidebar.t7810.prototype.om$core$IRender$ = true;

ghoul.components.sidebar.t7810.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var group_class = (cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(self__.data))?"folder expanded":"folder");
return om.dom.li.call(null,null,om.dom.div.call(null,{"className": group_class},om.dom.h4.call(null,null,om.dom.span.call(null,null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.data)),om.dom.span.call(null,{"className": "count"},[cljs.core.str("("),cljs.core.str(new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.str(")")].join('')),(cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(self__.data))?om.dom.a.call(null,{"className": "minus-button"},"Contraer"):om.dom.a.call(null,{"className": "plus-button"},"Expandir"))),cljs.core.apply.call(null,om.dom.ul,{"className": "feed-list"},om.core.build_all.call(null,ghoul.components.sidebar.feed_subscription,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(self__.data)))));
});

ghoul.components.sidebar.t7810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7812){
var self__ = this;
var _7812__$1 = this;
return self__.meta7811;
});

ghoul.components.sidebar.t7810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7812,meta7811__$1){
var self__ = this;
var _7812__$1 = this;
return (new ghoul.components.sidebar.t7810(self__.owner,self__.data,self__.feed_group,meta7811__$1));
});

ghoul.components.sidebar.t7810.cljs$lang$type = true;

ghoul.components.sidebar.t7810.cljs$lang$ctorStr = "ghoul.components.sidebar/t7810";

ghoul.components.sidebar.t7810.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.sidebar/t7810");
});

ghoul.components.sidebar.__GT_t7810 = (function __GT_t7810(owner__$1,data__$1,feed_group__$1,meta7811){
return (new ghoul.components.sidebar.t7810(owner__$1,data__$1,feed_group__$1,meta7811));
});

}

return (new ghoul.components.sidebar.t7810(owner,data,feed_group,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),93,new cljs.core.Keyword(null,"end-line","end-line",1837326455),29,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),16,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/ghoul/components/sidebar.cljs"], null)));
});
ghoul.components.sidebar.feeds_list = (function feeds_list(data,owner){
if(typeof ghoul.components.sidebar.t7816 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.sidebar.t7816 = (function (owner,data,feeds_list,meta7817){
this.owner = owner;
this.data = data;
this.feeds_list = feeds_list;
this.meta7817 = meta7817;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.sidebar.t7816.prototype.om$core$IRender$ = true;

ghoul.components.sidebar.t7816.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.call(null,{"id": "feeds"},cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,ghoul.components.sidebar.feed_group,self__.data)));
});

ghoul.components.sidebar.t7816.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7818){
var self__ = this;
var _7818__$1 = this;
return self__.meta7817;
});

ghoul.components.sidebar.t7816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7818,meta7817__$1){
var self__ = this;
var _7818__$1 = this;
return (new ghoul.components.sidebar.t7816(self__.owner,self__.data,self__.feeds_list,meta7817__$1));
});

ghoul.components.sidebar.t7816.cljs$lang$type = true;

ghoul.components.sidebar.t7816.cljs$lang$ctorStr = "ghoul.components.sidebar/t7816";

ghoul.components.sidebar.t7816.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.sidebar/t7816");
});

ghoul.components.sidebar.__GT_t7816 = (function __GT_t7816(owner__$1,data__$1,feeds_list__$1,meta7817){
return (new ghoul.components.sidebar.t7816(owner__$1,data__$1,feeds_list__$1,meta7817));
});

}

return (new ghoul.components.sidebar.t7816(owner,data,feeds_list,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),58,new cljs.core.Keyword(null,"end-line","end-line",1837326455),36,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),31,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/ghoul/components/sidebar.cljs"], null)));
});
ghoul.components.sidebar.root = (function root(data,owner){
if(typeof ghoul.components.sidebar.t7822 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.sidebar.t7822 = (function (owner,data,root,meta7823){
this.owner = owner;
this.data = data;
this.root = root;
this.meta7823 = meta7823;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.sidebar.t7822.prototype.om$core$IRender$ = true;

ghoul.components.sidebar.t7822.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.section.call(null,{"id": "sidebar"},om.dom.div.call(null,{"className": "search-box"},om.dom.input.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search"], null))),om.dom.a.call(null,{"className": "menu-item all"},"All Items"),om.dom.a.call(null,{"className": "menu-item favorite"},"Favorites"),om.dom.a.call(null,{"className": "menu-item shared"},"Shared"),om.core.build.call(null,ghoul.components.sidebar.feeds_list,self__.data));
});

ghoul.components.sidebar.t7822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7824){
var self__ = this;
var _7824__$1 = this;
return self__.meta7823;
});

ghoul.components.sidebar.t7822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7824,meta7823__$1){
var self__ = this;
var _7824__$1 = this;
return (new ghoul.components.sidebar.t7822(self__.owner,self__.data,self__.root,meta7823__$1));
});

ghoul.components.sidebar.t7822.cljs$lang$type = true;

ghoul.components.sidebar.t7822.cljs$lang$ctorStr = "ghoul.components.sidebar/t7822";

ghoul.components.sidebar.t7822.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.sidebar/t7822");
});

ghoul.components.sidebar.__GT_t7822 = (function __GT_t7822(owner__$1,data__$1,root__$1,meta7823){
return (new ghoul.components.sidebar.t7822(owner__$1,data__$1,root__$1,meta7823));
});

}

return (new ghoul.components.sidebar.t7822(owner,data,root,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),49,new cljs.core.Keyword(null,"end-line","end-line",1837326455),48,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),39,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/ghoul/components/sidebar.cljs"], null)));
});
