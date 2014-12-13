// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.components.header');
goog.require('cljs.core');
goog.require('ghoul.state');
goog.require('ghoul.state');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
ghoul.components.header.root = (function root(data,owner){
if(typeof ghoul.components.header.t7828 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.header.t7828 = (function (owner,data,root,meta7829){
this.owner = owner;
this.data = data;
this.root = root;
this.meta7829 = meta7829;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.header.t7828.prototype.om$core$IRender$ = true;

ghoul.components.header.t7828.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.header.call(null,null,om.dom.a.call(null,{"onClick": ((function (this$__$1){
return (function (e){
return ghoul.state.toggle_menu.call(null);
});})(this$__$1))
, "className": "menu-icon"},"Menu"),om.dom.div.call(null,{"className": "logo"},om.dom.img.call(null,{"height": "100%", "src": "./images/logo.png"}),om.dom.div.call(null,{"className": "text"},om.dom.span.call(null,{"className": "ghoul"},"Ghoul"),om.dom.span.call(null,{"className": "reader"},"Reader"))));
});

ghoul.components.header.t7828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7830){
var self__ = this;
var _7830__$1 = this;
return self__.meta7829;
});

ghoul.components.header.t7828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7830,meta7829__$1){
var self__ = this;
var _7830__$1 = this;
return (new ghoul.components.header.t7828(self__.owner,self__.data,self__.root,meta7829__$1));
});

ghoul.components.header.t7828.cljs$lang$type = true;

ghoul.components.header.t7828.cljs$lang$ctorStr = "ghoul.components.header/t7828";

ghoul.components.header.t7828.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.header/t7828");
});

ghoul.components.header.__GT_t7828 = (function __GT_t7828(owner__$1,data__$1,root__$1,meta7829){
return (new ghoul.components.header.t7828(owner__$1,data__$1,root__$1,meta7829));
});

}

return (new ghoul.components.header.t7828(owner,data,root,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),87,new cljs.core.Keyword(null,"end-line","end-line",1837326455),17,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),7,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/ghoul/components/header.cljs"], null)));
});
