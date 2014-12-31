// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.app.components.popup.state');
goog.require('cljs.core');
goog.require('ghoul.app.messages');
goog.require('ghoul.app.worker');
goog.require('om.dom');
goog.require('om.dom');
goog.require('ghoul.repository.item');
goog.require('ghoul.app.messages');
goog.require('ghoul.app.state');
goog.require('om.core');
goog.require('om.core');
goog.require('ghoul.app.worker');
goog.require('ghoul.app.state');
goog.require('ghoul.repository.item');
ghoul.app.components.popup.state.hide_popups = (function hide_popups(data){
return om.core.update_BANG_.call(null,new cljs.core.Keyword(null,"popup","popup",635890211).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.Keyword(null,"none","none",1333468478));
});
ghoul.app.components.popup.state.cb_save_popup = (function cb_save_popup(owner,data){
var state_10847 = om.core.get_node.call(null,owner,"stateArea").value;
var clj_state_10848 = cljs.core.js__GT_clj.call(null,JSON.parse(state_10847),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
cljs.core.reset_BANG_.call(null,ghoul.app.state.global,clj_state_10848);

ghoul.repository.item.clear.call(null);

ghoul.app.worker.update_all_feeds.call(null);

return ghoul.app.components.popup.state.hide_popups.call(null,data);
});
ghoul.app.components.popup.state.cb_cancel_popup = (function cb_cancel_popup(owner,data){
om.core.get_node.call(null,owner,"stateArea").value = "";

return ghoul.app.components.popup.state.hide_popups.call(null,data);
});
ghoul.app.components.popup.state.root = (function root(data,owner){
if(typeof ghoul.app.components.popup.state.t10852 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.app.components.popup.state.t10852 = (function (owner,data,root,meta10853){
this.owner = owner;
this.data = data;
this.root = root;
this.meta10853 = meta10853;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.app.components.popup.state.t10852.prototype.om$core$IRender$ = true;

ghoul.app.components.popup.state.t10852.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.call(null,{"className": "input-popup", "id": "state-popup"},om.dom.div.call(null,{"className": "popup-wrapper"},om.dom.div.call(null,{"className": "second-wrapper"},om.dom.div.call(null,{"className": "popup"},om.dom.h2.call(null,null,ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.popup.state.title","ghoul.popup.state.title",1270281688))),om.dom.textarea.call(null,{"rows": (4), "ref": "stateArea"}),om.dom.div.call(null,{"className": "button-holder"},om.dom.a.call(null,{"onClick": cljs.core.partial.call(null,ghoul.app.components.popup.state.cb_save_popup,self__.owner,self__.data)},ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.button.ok","ghoul.button.ok",-194435295))),om.dom.a.call(null,{"onClick": cljs.core.partial.call(null,ghoul.app.components.popup.state.cb_cancel_popup,self__.owner,self__.data)},ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.button.cancel","ghoul.button.cancel",-1160989202))))))),om.dom.div.call(null,{"onClick": ((function (this$__$1){
return (function (){
return ghoul.app.components.popup.state.hide_popups.call(null,self__.data);
});})(this$__$1))
, "className": "gray"}));
});

ghoul.app.components.popup.state.t10852.prototype.om$core$IDidUpdate$ = true;

ghoul.app.components.popup.state.t10852.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (this$,next_props,next_state){
var self__ = this;
var this$__$1 = this;
return om.core.get_node.call(null,self__.owner,"stateArea").value = JSON.stringify(cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,cljs.core.deref.call(null,ghoul.app.state.global),new cljs.core.Keyword(null,"items","items",1031954938))),null,(2));
});

ghoul.app.components.popup.state.t10852.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10854){
var self__ = this;
var _10854__$1 = this;
return self__.meta10853;
});

ghoul.app.components.popup.state.t10852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10854,meta10853__$1){
var self__ = this;
var _10854__$1 = this;
return (new ghoul.app.components.popup.state.t10852(self__.owner,self__.data,self__.root,meta10853__$1));
});

ghoul.app.components.popup.state.t10852.cljs$lang$type = true;

ghoul.app.components.popup.state.t10852.cljs$lang$ctorStr = "ghoul.app.components.popup.state/t10852";

ghoul.app.components.popup.state.t10852.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.app.components.popup.state/t10852");
});

ghoul.app.components.popup.state.__GT_t10852 = (function __GT_t10852(owner__$1,data__$1,root__$1,meta10853){
return (new ghoul.app.components.popup.state.t10852(owner__$1,data__$1,root__$1,meta10853));
});

}

return (new ghoul.app.components.popup.state.t10852(owner,data,root,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),63,new cljs.core.Keyword(null,"end-line","end-line",1837326455),43,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),25,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/app/components/popup/state.cljs"], null)));
});
