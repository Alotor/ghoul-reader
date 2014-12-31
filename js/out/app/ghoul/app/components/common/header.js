// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.app.components.common.header');
goog.require('cljs.core');
goog.require('ghoul.app.messages');
goog.require('ghoul.app.components.common.search');
goog.require('ghoul.app.components.common.search');
goog.require('ghoul.app.messages');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
ghoul.app.components.common.header.toggle_menu = (function toggle_menu(cursor){
return om.core.transact_BANG_.call(null,new cljs.core.Keyword(null,"show-menu","show-menu",14072792).cljs$core$IFn$_invoke$arity$1(cursor),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),cljs.core.not);
});
ghoul.app.components.common.header.root = (function root(data,owner){
if(typeof ghoul.app.components.common.header.t6006 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.app.components.common.header.t6006 = (function (owner,data,root,meta6007){
this.owner = owner;
this.data = data;
this.root = root;
this.meta6007 = meta6007;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.app.components.common.header.t6006.prototype.om$core$IRender$ = true;

ghoul.app.components.common.header.t6006.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.header.call(null,null,om.dom.a.call(null,{"onClick": ((function (this$__$1){
return (function (){
return ghoul.app.components.common.header.toggle_menu.call(null,self__.data);
});})(this$__$1))
, "className": "menu-icon"},ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.header.menu","ghoul.header.menu",1413283644))),om.dom.div.call(null,{"className": "logo"},om.dom.img.call(null,{"height": "100%", "src": "./images/logo.png"}),om.dom.div.call(null,{"className": "text"},om.dom.span.call(null,{"className": "ghoul"},ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.header.ghoul","ghoul.header.ghoul",-172045621))),om.dom.span.call(null,{"className": "reader"},ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.header.reader","ghoul.header.reader",-288264550))))),om.core.build.call(null,ghoul.app.components.common.search.search_box,cljs.core.PersistentArrayMap.EMPTY));
});

ghoul.app.components.common.header.t6006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6008){
var self__ = this;
var _6008__$1 = this;
return self__.meta6007;
});

ghoul.app.components.common.header.t6006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6008,meta6007__$1){
var self__ = this;
var _6008__$1 = this;
return (new ghoul.app.components.common.header.t6006(self__.owner,self__.data,self__.root,meta6007__$1));
});

ghoul.app.components.common.header.t6006.cljs$lang$type = true;

ghoul.app.components.common.header.t6006.cljs$lang$ctorStr = "ghoul.app.components.common.header/t6006";

ghoul.app.components.common.header.t6006.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.app.components.common.header/t6006");
});

ghoul.app.components.common.header.__GT_t6006 = (function __GT_t6006(owner__$1,data__$1,root__$1,meta6007){
return (new ghoul.app.components.common.header.t6006(owner__$1,data__$1,root__$1,meta6007));
});

}

return (new ghoul.app.components.common.header.t6006(owner,data,root,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),53,new cljs.core.Keyword(null,"end-line","end-line",1837326455),22,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),11,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/app/components/common/header.cljs"], null)));
});
