// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.components.common');
goog.require('cljs.core');
goog.require('ghoul.state');
goog.require('ghoul.state');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
ghoul.components.common.search_box = (function search_box(data,owner){
if(typeof ghoul.components.common.t10756 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.common.t10756 = (function (owner,data,search_box,meta10757){
this.owner = owner;
this.data = data;
this.search_box = search_box;
this.meta10757 = meta10757;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.common.t10756.prototype.om$core$IRender$ = true;

ghoul.components.common.t10756.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.call(null,{"className": "search-box"},om.dom.input.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search"], null)));
});

ghoul.components.common.t10756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10758){
var self__ = this;
var _10758__$1 = this;
return self__.meta10757;
});

ghoul.components.common.t10756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10758,meta10757__$1){
var self__ = this;
var _10758__$1 = this;
return (new ghoul.components.common.t10756(self__.owner,self__.data,self__.search_box,meta10757__$1));
});

ghoul.components.common.t10756.cljs$lang$type = true;

ghoul.components.common.t10756.cljs$lang$ctorStr = "ghoul.components.common/t10756";

ghoul.components.common.t10756.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.common/t10756");
});

ghoul.components.common.__GT_t10756 = (function __GT_t10756(owner__$1,data__$1,search_box__$1,meta10757){
return (new ghoul.components.common.t10756(owner__$1,data__$1,search_box__$1,meta10757));
});

}

return (new ghoul.components.common.t10756(owner,data,search_box,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),54,new cljs.core.Keyword(null,"end-line","end-line",1837326455),11,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),7,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/components/common.cljs"], null)));
});
