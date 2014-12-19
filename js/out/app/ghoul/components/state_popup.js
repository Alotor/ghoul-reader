// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.components.state_popup');
goog.require('cljs.core');
goog.require('ghoul.feeds_storage');
goog.require('ghoul.worker_api');
goog.require('om.dom');
goog.require('om.dom');
goog.require('ghoul.state');
goog.require('ghoul.state');
goog.require('om.core');
goog.require('om.core');
goog.require('ghoul.components.common');
goog.require('ghoul.worker_api');
goog.require('ghoul.components.common');
goog.require('ghoul.feeds_storage');
ghoul.components.state_popup.cb_save_popup = (function cb_save_popup(owner,event){
var state_24067 = om.core.get_node.call(null,owner,"stateArea").value;
var clj_state_24068 = cljs.core.js__GT_clj.call(null,JSON.parse(state_24067),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
cljs.core.reset_BANG_.call(null,ghoul.state.global,clj_state_24068);

ghoul.feeds_storage.clear.call(null);

ghoul.worker_api.update_all_feeds.call(null);

return ghoul.state.toggle_state_popup.call(null);
});
ghoul.components.state_popup.cb_cancel_popup = (function cb_cancel_popup(owner,event){
om.core.get_node.call(null,owner,"stateArea").value = "";

return ghoul.state.toggle_state_popup.call(null);
});
ghoul.components.state_popup.root = (function root(data,owner){
if(typeof ghoul.components.state_popup.t24072 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.state_popup.t24072 = (function (owner,data,root,meta24073){
this.owner = owner;
this.data = data;
this.root = root;
this.meta24073 = meta24073;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.state_popup.t24072.prototype.om$core$IRender$ = true;

ghoul.components.state_popup.t24072.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.call(null,{"className": "input-popup", "id": "state-popup"},om.dom.div.call(null,{"className": "popup-wrapper"},om.dom.div.call(null,{"className": "second-wrapper"},om.dom.div.call(null,{"className": "popup"},om.dom.h2.call(null,null,"Estado"),om.dom.textarea.call(null,{"rows": (4), "ref": "stateArea"}),om.dom.div.call(null,{"className": "button-holder"},om.dom.a.call(null,{"onClick": cljs.core.partial.call(null,ghoul.components.state_popup.cb_save_popup,self__.owner)},"OK"),om.dom.a.call(null,{"onClick": cljs.core.partial.call(null,ghoul.components.state_popup.cb_cancel_popup,self__.owner)},"Cancel"))))),om.dom.div.call(null,{"onClick": ghoul.state.toggle_feed_popup, "className": "gray"}));
});

ghoul.components.state_popup.t24072.prototype.om$core$IDidUpdate$ = true;

ghoul.components.state_popup.t24072.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (this$,next_props,next_state){
var self__ = this;
var this$__$1 = this;
return om.core.get_node.call(null,self__.owner,"stateArea").value = JSON.stringify(cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,cljs.core.deref.call(null,ghoul.state.global),new cljs.core.Keyword(null,"feeds","feeds",855496306))),null,(2));
});

ghoul.components.state_popup.t24072.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24074){
var self__ = this;
var _24074__$1 = this;
return self__.meta24073;
});

ghoul.components.state_popup.t24072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24074,meta24073__$1){
var self__ = this;
var _24074__$1 = this;
return (new ghoul.components.state_popup.t24072(self__.owner,self__.data,self__.root,meta24073__$1));
});

ghoul.components.state_popup.t24072.cljs$lang$type = true;

ghoul.components.state_popup.t24072.cljs$lang$ctorStr = "ghoul.components.state-popup/t24072";

ghoul.components.state_popup.t24072.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.state-popup/t24072");
});

ghoul.components.state_popup.__GT_t24072 = (function __GT_t24072(owner__$1,data__$1,root__$1,meta24073){
return (new ghoul.components.state_popup.t24072(owner__$1,data__$1,root__$1,meta24073));
});

}

return (new ghoul.components.state_popup.t24072(owner,data,root,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),67,new cljs.core.Keyword(null,"end-line","end-line",1837326455),38,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),22,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/components/state_popup.cljs"], null)));
});
