// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.app.components.root');
goog.require('cljs.core');
goog.require('ghoul.common.utils');
goog.require('ghoul.app.components.popup.state');
goog.require('om.dom');
goog.require('ghoul.app.components.popup.state');
goog.require('ghoul.app.components.panel.home');
goog.require('ghoul.app.components.common.sidebar');
goog.require('om.dom');
goog.require('ghoul.app.components.popup.feed');
goog.require('ghoul.app.components.panel.items');
goog.require('ghoul.common.utils');
goog.require('ghoul.app.components.popup.feed');
goog.require('ghoul.app.components.common.sidebar');
goog.require('ghoul.app.components.common.header');
goog.require('ghoul.app.components.panel.home');
goog.require('ghoul.app.components.common.header');
goog.require('om.core');
goog.require('om.core');
goog.require('cuerdas.core');
goog.require('cuerdas.core');
goog.require('ghoul.app.components.panel.items');
ghoul.app.components.root.app = (function app(data,owner){
if(typeof ghoul.app.components.root.t12620 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.app.components.root.t12620 = (function (owner,data,app,meta12621){
this.owner = owner;
this.data = data;
this.app = app;
this.meta12621 = meta12621;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.app.components.root.t12620.prototype.om$core$IRender$ = true;

ghoul.app.components.root.t12620.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var class_view = cljs.core.name.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"feeds-view","feeds-view",1214517259).cljs$core$IFn$_invoke$arity$1(self__.data)));
var class_menu = (cljs.core.truth_(cljs.core.first.call(null,new cljs.core.Keyword(null,"show-menu","show-menu",14072792).cljs$core$IFn$_invoke$arity$1(self__.data)))?"menu-expanded":null);
var class_popup = [cljs.core.str(cljs.core.name.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"popup","popup",635890211).cljs$core$IFn$_invoke$arity$1(self__.data)))),cljs.core.str("-popup-visible")].join('');
var class_app = cuerdas.core.join.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,class_menu),class_view),"app-container"));
return om.dom.div.call(null,{"className": class_popup},om.core.build.call(null,ghoul.app.components.popup.feed.root,ghoul.common.utils.project.call(null,self__.data,new cljs.core.Keyword(null,"popup","popup",635890211),new cljs.core.Keyword(null,"feeds","feeds",855496306))),om.core.build.call(null,ghoul.app.components.popup.state.root,ghoul.common.utils.project.call(null,self__.data,new cljs.core.Keyword(null,"popup","popup",635890211))),om.dom.div.call(null,{"className": class_app},om.core.build.call(null,ghoul.app.components.common.header.root,ghoul.common.utils.project.call(null,self__.data,new cljs.core.Keyword(null,"show-menu","show-menu",14072792))),om.dom.div.call(null,{"className": "content"},om.core.build.call(null,ghoul.app.components.common.sidebar.root,ghoul.common.utils.project.call(null,self__.data,new cljs.core.Keyword(null,"popup","popup",635890211),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"groups","groups",-136896102),new cljs.core.Keyword(null,"feeds","feeds",855496306))),((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"feeds","feeds",855496306).cljs$core$IFn$_invoke$arity$1(self__.data)))?om.core.build.call(null,ghoul.app.components.panel.home.root,ghoul.common.utils.project.call(null,self__.data,new cljs.core.Keyword(null,"popup","popup",635890211))):om.core.build.call(null,ghoul.app.components.panel.items.root,ghoul.common.utils.project.call(null,self__.data,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"feeds","feeds",855496306),new cljs.core.Keyword(null,"feeds-view","feeds-view",1214517259),new cljs.core.Keyword(null,"items","items",1031954938)))))));
});

ghoul.app.components.root.t12620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12622){
var self__ = this;
var _12622__$1 = this;
return self__.meta12621;
});

ghoul.app.components.root.t12620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12622,meta12621__$1){
var self__ = this;
var _12622__$1 = this;
return (new ghoul.app.components.root.t12620(self__.owner,self__.data,self__.app,meta12621__$1));
});

ghoul.app.components.root.t12620.cljs$lang$type = true;

ghoul.app.components.root.t12620.cljs$lang$ctorStr = "ghoul.app.components.root/t12620";

ghoul.app.components.root.t12620.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.app.components.root/t12620");
});

ghoul.app.components.root.__GT_t12620 = (function __GT_t12620(owner__$1,data__$1,app__$1,meta12621){
return (new ghoul.app.components.root.t12620(owner__$1,data__$1,app__$1,meta12621));
});

}

return (new ghoul.app.components.root.t12620(owner,data,app,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),109,new cljs.core.Keyword(null,"end-line","end-line",1837326455),33,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),14,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/app/components/root.cljs"], null)));
});

//# sourceMappingURL=root.js.map?rel=1420049877830