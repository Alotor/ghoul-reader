// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.app.components.panel.home');
goog.require('cljs.core');
goog.require('ghoul.app.messages');
goog.require('ghoul.app.messages');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
ghoul.app.components.panel.home.show_feed_popup = (function show_feed_popup(data){
return om.core.update_BANG_.call(null,new cljs.core.Keyword(null,"popup","popup",635890211).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.Keyword(null,"feed","feed",-1566486205));
});
ghoul.app.components.panel.home.root = (function root(data,owner){
if(typeof ghoul.app.components.panel.home.t23746 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.app.components.panel.home.t23746 = (function (owner,data,root,meta23747){
this.owner = owner;
this.data = data;
this.root = root;
this.meta23747 = meta23747;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.app.components.panel.home.t23746.prototype.om$core$IRender$ = true;

ghoul.app.components.panel.home.t23746.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.section.call(null,{"id": "empty-subscription-panel"},om.dom.p.call(null,null,om.dom.span.call(null,null,ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.welcome.first","ghoul.welcome.first",915427518))),om.dom.span.call(null,{"className": "emphasis"},ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.welcome.title","ghoul.welcome.title",-288908645))),om.dom.span.call(null,null,".")),om.dom.p.call(null,null,ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.welcome.description","ghoul.welcome.description",116875686))),om.dom.p.call(null,null,om.dom.span.call(null,null,ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.welcome.tut1","ghoul.welcome.tut1",-344150588))),om.dom.a.call(null,{"onClick": ((function (this$__$1){
return (function (){
return ghoul.app.components.panel.home.show_feed_popup.call(null,self__.data);
});})(this$__$1))
},ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.welcome.link","ghoul.welcome.link",-545063252)))));
});

ghoul.app.components.panel.home.t23746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23748){
var self__ = this;
var _23748__$1 = this;
return self__.meta23747;
});

ghoul.app.components.panel.home.t23746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23748,meta23747__$1){
var self__ = this;
var _23748__$1 = this;
return (new ghoul.app.components.panel.home.t23746(self__.owner,self__.data,self__.root,meta23747__$1));
});

ghoul.app.components.panel.home.t23746.cljs$lang$type = true;

ghoul.app.components.panel.home.t23746.cljs$lang$ctorStr = "ghoul.app.components.panel.home/t23746";

ghoul.app.components.panel.home.t23746.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.app.components.panel.home/t23746");
});

ghoul.app.components.panel.home.__GT_t23746 = (function __GT_t23746(owner__$1,data__$1,root__$1,meta23747){
return (new ghoul.app.components.panel.home.t23746(owner__$1,data__$1,root__$1,meta23747));
});

}

return (new ghoul.app.components.panel.home.t23746(owner,data,root,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),64,new cljs.core.Keyword(null,"end-line","end-line",1837326455),23,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),10,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/app/components/panel/home.cljs"], null)));
});

//# sourceMappingURL=home.js.map?rel=1420049676237