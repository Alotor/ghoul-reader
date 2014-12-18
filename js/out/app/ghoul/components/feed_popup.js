// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.components.feed_popup');
goog.require('cljs.core');
goog.require('ghoul.components.common');
goog.require('ghoul.components.common');
goog.require('ghoul.state');
goog.require('ghoul.state');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
ghoul.components.feed_popup.cb_save_popup = (function cb_save_popup(owner,event){
var url = om.core.get_node.call(null,owner,"urlInput").value;
console.log([cljs.core.str("Adding: "),cljs.core.str(url)].join(''));

ghoul.state.add_rss_subscription.call(null,url);

om.core.get_node.call(null,owner,"urlInput").value = "";

return ghoul.state.toggle_feed_popup.call(null);
});
ghoul.components.feed_popup.cb_cancel_popup = (function cb_cancel_popup(owner,event){
om.core.get_node.call(null,owner,"urlInput").value = "";

return ghoul.state.toggle_feed_popup.call(null);
});
ghoul.components.feed_popup.root = (function root(data,owner){
if(typeof ghoul.components.feed_popup.t10762 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.feed_popup.t10762 = (function (owner,data,root,meta10763){
this.owner = owner;
this.data = data;
this.root = root;
this.meta10763 = meta10763;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.feed_popup.t10762.prototype.om$core$IRender$ = true;

ghoul.components.feed_popup.t10762.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.call(null,{"id": "feed-popup"},om.dom.div.call(null,{"className": "popup-wrapper"},om.dom.div.call(null,{"className": "second-wrapper"},om.dom.div.call(null,{"className": "popup"},om.dom.h2.call(null,null,"Introduzca la URL del RSS"),om.dom.input.call(null,{"ref": "urlInput"}),om.dom.div.call(null,{"className": "button-holder"},om.dom.a.call(null,{"onClick": cljs.core.partial.call(null,ghoul.components.feed_popup.cb_save_popup,self__.owner)},"OK"),om.dom.a.call(null,{"onClick": cljs.core.partial.call(null,ghoul.components.feed_popup.cb_cancel_popup,self__.owner)},"Cancel"))))),om.dom.div.call(null,{"onClick": ghoul.state.toggle_feed_popup, "className": "gray"}));
});

ghoul.components.feed_popup.t10762.prototype.om$core$IDidUpdate$ = true;

ghoul.components.feed_popup.t10762.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (this$,next_props,next_state){
var self__ = this;
var this$__$1 = this;
return om.core.get_node.call(null,self__.owner,"urlInput").value = "https://blog.taiga.io/feeds/rss.xml";
});

ghoul.components.feed_popup.t10762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10764){
var self__ = this;
var _10764__$1 = this;
return self__.meta10763;
});

ghoul.components.feed_popup.t10762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10764,meta10763__$1){
var self__ = this;
var _10764__$1 = this;
return (new ghoul.components.feed_popup.t10762(self__.owner,self__.data,self__.root,meta10763__$1));
});

ghoul.components.feed_popup.t10762.cljs$lang$type = true;

ghoul.components.feed_popup.t10762.cljs$lang$ctorStr = "ghoul.components.feed-popup/t10762";

ghoul.components.feed_popup.t10762.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.feed-popup/t10762");
});

ghoul.components.feed_popup.__GT_t10762 = (function __GT_t10762(owner__$1,data__$1,root__$1,meta10763){
return (new ghoul.components.feed_popup.t10762(owner__$1,data__$1,root__$1,meta10763));
});

}

return (new ghoul.components.feed_popup.t10762(owner,data,root,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),67,new cljs.core.Keyword(null,"end-line","end-line",1837326455),35,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),19,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/components/feed_popup.cljs"], null)));
});
