// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.main');
goog.require('cljs.core');
goog.require('ghoul.components.feeds_panel');
goog.require('ghoul.components.feeds_panel');
goog.require('om.dom');
goog.require('ghoul.components.home_panel');
goog.require('ghoul.components.header');
goog.require('om.dom');
goog.require('ghoul.components.sidebar');
goog.require('ghoul.components.sidebar');
goog.require('ghoul.state');
goog.require('ghoul.state');
goog.require('ghoul.components.header');
goog.require('om.core');
goog.require('om.core');
goog.require('cuerdas.core');
goog.require('ghoul.components.home_panel');
goog.require('cuerdas.core');
ghoul.main.app_root = (function app_root(data,owner){
if(typeof ghoul.main.t15280 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.main.t15280 = (function (owner,data,app_root,meta15281){
this.owner = owner;
this.data = data;
this.app_root = app_root;
this.meta15281 = meta15281;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.main.t15280.prototype.om$core$IRender$ = true;

ghoul.main.t15280.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var class_view = cljs.core.name.call(null,new cljs.core.Keyword(null,"feeds-view","feeds-view",1214517259).cljs$core$IFn$_invoke$arity$1(self__.data));
var class_menu = (cljs.core.truth_(new cljs.core.Keyword(null,"show-menu","show-menu",14072792).cljs$core$IFn$_invoke$arity$1(self__.data))?"menu-expanded":null);
return om.dom.div.call(null,{"className": cuerdas.core.join.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,class_menu),class_view),"app-container"))},om.core.build.call(null,ghoul.components.header.root,self__.data),om.dom.div.call(null,{"className": "content"},om.core.build.call(null,ghoul.components.sidebar.root,new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(self__.data)),om.core.build.call(null,ghoul.components.feeds_panel.root,self__.data)));
});

ghoul.main.t15280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15282){
var self__ = this;
var _15282__$1 = this;
return self__.meta15281;
});

ghoul.main.t15280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15282,meta15281__$1){
var self__ = this;
var _15282__$1 = this;
return (new ghoul.main.t15280(self__.owner,self__.data,self__.app_root,meta15281__$1));
});

ghoul.main.t15280.cljs$lang$type = true;

ghoul.main.t15280.cljs$lang$ctorStr = "ghoul.main/t15280";

ghoul.main.t15280.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.main/t15280");
});

ghoul.main.__GT_t15280 = (function __GT_t15280(owner__$1,data__$1,app_root__$1,meta15281){
return (new ghoul.main.t15280(owner__$1,data__$1,app_root__$1,meta15281));
});

}

return (new ghoul.main.t15280(owner,data,app_root,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),64,new cljs.core.Keyword(null,"end-line","end-line",1837326455),21,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),12,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/main.cljs"], null)));
});
om.core.root.call(null,ghoul.main.app_root,ghoul.state.global,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app-root")], null));
console.log("Ghoul Reader loaded");
ghoul.main.launch_worker_BANG_ = (function launch_worker_BANG_(){
var update_feed_worker = (new Worker("js/worker.js"));
var cb_worker = ((function (update_feed_worker){
return (function (event){
return console.log([cljs.core.str(">> CALLBACK"),cljs.core.str(cljs.core.js__GT_clj.call(null,event.data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true))].join(''));
});})(update_feed_worker))
;
return update_feed_worker.onmessage = cb_worker;
});
