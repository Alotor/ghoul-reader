// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.app.components.panel.items');
goog.require('cljs.core');
goog.require('ghoul.app.messages');
goog.require('ghoul.common.utils');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('ghoul.app.messages');
goog.require('ghoul.common.utils');
goog.require('om.core');
goog.require('om.core');
goog.require('cuerdas.core');
goog.require('ghoul.common.utils');
goog.require('cuerdas.core');
ghoul.app.components.panel.items.mark_feed_read = (function mark_feed_read(data){
return om.core.update_BANG_.call(null,new cljs.core.Keyword(null,"feed","feed",-1566486205).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"read","read",1140058661),true);
});
ghoul.app.components.panel.items.decrement_pending_count = (function decrement_pending_count(data){
return om.core.transact_BANG_.call(null,new cljs.core.Keyword(null,"feed","feed",-1566486205).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"pending","pending",-220036727),cljs.core.dec);
});
ghoul.app.components.panel.items.change_to_compact_view = (function change_to_compact_view(data){
return om.core.update_BANG_.call(null,new cljs.core.Keyword(null,"feeds-view","feeds-view",1214517259).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compact-view","compact-view",1458667595)], null));
});
ghoul.app.components.panel.items.change_to_expanded_view = (function change_to_expanded_view(data){
return om.core.update_BANG_.call(null,new cljs.core.Keyword(null,"feeds-view","feeds-view",1214517259).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expanded-view","expanded-view",1276146539)], null));
});
ghoul.app.components.panel.items.get_item_visualization_state = (function get_item_visualization_state(item){
var node = item.getDOMNode();
var parent = node.parentElement;
var parent_top = parent.scrollTop;
var parent_bottom = (parent_top + parent.offsetHeight);
var item_top = (node.offsetTop - parent.offsetTop);
var item_bottom = (item_top + node.offsetHeight);
var result = (((item_bottom < parent_top))?new cljs.core.Keyword(null,"out-item","out-item",274448819):((((item_top < parent_top)) && ((item_bottom < parent_bottom)))?new cljs.core.Keyword(null,"partial-out-item","partial-out-item",1686614062):(((item_bottom < parent_bottom))?new cljs.core.Keyword(null,"in-item","in-item",430950747):((((item_top < parent_bottom)) && ((item_bottom > parent_bottom)))?new cljs.core.Keyword(null,"partial-in-item","partial-in-item",-201967355):new cljs.core.Keyword(null,"future-item","future-item",1408675726)
))));
return result;
});
ghoul.app.components.panel.items.state__GT_color = (function state__GT_color(state){
if(cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"out-item","out-item",274448819))){
return "black";
} else {
if(cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"partial-out-item","partial-out-item",1686614062))){
return "gray";
} else {
if(cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"in-item","in-item",430950747))){
return "green";
} else {
if(cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"partial-in-item","partial-in-item",-201967355))){
return "blue";
} else {
if(cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"future-item","future-item",1408675726))){
return "red";
} else {
return "#00000f";

}
}
}
}
}
});
ghoul.app.components.panel.items.item_description = (function item_description(data,owner){
var set_description_dom_BANG_ = (function (){
var shadow_root = owner.getDOMNode().shadowRoot;
var description = ghoul.common.utils.remove_unallowed_tags.call(null,ghoul.common.utils.restore_tags.call(null,data));
if((shadow_root == null)){
return owner.getDOMNode().createShadowRoot().innerHTML = description;
} else {
return shadow_root.innerHTML = description;
}
});
if(typeof ghoul.app.components.panel.items.t26522 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.app.components.panel.items.t26522 = (function (set_description_dom_BANG_,owner,data,item_description,meta26523){
this.set_description_dom_BANG_ = set_description_dom_BANG_;
this.owner = owner;
this.data = data;
this.item_description = item_description;
this.meta26523 = meta26523;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.app.components.panel.items.t26522.prototype.om$core$IRender$ = true;

ghoul.app.components.panel.items.t26522.prototype.om$core$IRender$render$arity$1 = ((function (set_description_dom_BANG_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.call(null,{"className": "rss-description"});
});})(set_description_dom_BANG_))
;

ghoul.app.components.panel.items.t26522.prototype.om$core$IDidUpdate$ = true;

ghoul.app.components.panel.items.t26522.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (set_description_dom_BANG_){
return (function (this$,next_props,next_state){
var self__ = this;
var this$__$1 = this;
return self__.set_description_dom_BANG_.call(null);
});})(set_description_dom_BANG_))
;

ghoul.app.components.panel.items.t26522.prototype.om$core$IDidMount$ = true;

ghoul.app.components.panel.items.t26522.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (set_description_dom_BANG_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.set_description_dom_BANG_.call(null);
});})(set_description_dom_BANG_))
;

ghoul.app.components.panel.items.t26522.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (set_description_dom_BANG_){
return (function (_26524){
var self__ = this;
var _26524__$1 = this;
return self__.meta26523;
});})(set_description_dom_BANG_))
;

ghoul.app.components.panel.items.t26522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (set_description_dom_BANG_){
return (function (_26524,meta26523__$1){
var self__ = this;
var _26524__$1 = this;
return (new ghoul.app.components.panel.items.t26522(self__.set_description_dom_BANG_,self__.owner,self__.data,self__.item_description,meta26523__$1));
});})(set_description_dom_BANG_))
;

ghoul.app.components.panel.items.t26522.cljs$lang$type = true;

ghoul.app.components.panel.items.t26522.cljs$lang$ctorStr = "ghoul.app.components.panel.items/t26522";

ghoul.app.components.panel.items.t26522.cljs$lang$ctorPrWriter = ((function (set_description_dom_BANG_){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.app.components.panel.items/t26522");
});})(set_description_dom_BANG_))
;

ghoul.app.components.panel.items.__GT_t26522 = ((function (set_description_dom_BANG_){
return (function __GT_t26522(set_description_dom_BANG___$1,owner__$1,data__$1,item_description__$1,meta26523){
return (new ghoul.app.components.panel.items.t26522(set_description_dom_BANG___$1,owner__$1,data__$1,item_description__$1,meta26523));
});})(set_description_dom_BANG_))
;

}

return (new ghoul.app.components.panel.items.t26522(set_description_dom_BANG_,owner,data,item_description,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),56,new cljs.core.Keyword(null,"end-line","end-line",1837326455),64,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),57,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/app/components/panel/items.cljs"], null)));
});
ghoul.app.components.panel.items.item_content = (function item_content(data,owner){
if(typeof ghoul.app.components.panel.items.t26544 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.app.components.panel.items.t26544 = (function (owner,data,item_content,meta26545){
this.owner = owner;
this.data = data;
this.item_content = item_content;
this.meta26545 = meta26545;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.app.components.panel.items.t26544.prototype.om$core$IRenderState$ = true;

ghoul.app.components.panel.items.t26544.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
var item_data = new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(self__.data);
var feed_data = new cljs.core.Keyword(null,"feed","feed",-1566486205).cljs$core$IFn$_invoke$arity$1(self__.data);
var class_read = (cljs.core.truth_(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(state))?"item-read":"");
return om.dom.article.call(null,{"style": {"background-color": new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770).cljs$core$IFn$_invoke$arity$1(state)}, "className": cuerdas.core.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["feed-content",class_read], null))},om.dom.div.call(null,{"className": "rss-item-header"},om.dom.h4.call(null,{"className": "rss-title"},om.dom.a.call(null,{"href": new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(item_data), "className": "rss-link"},[cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(feed_data)),cljs.core.str(" - "),cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(item_data))].join(''))),om.dom.h5.call(null,{"className": "rss-description-preview"},cuerdas.core.strip_tags.call(null,ghoul.common.utils.restore_tags.call(null,new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(item_data))))),om.core.build.call(null,ghoul.app.components.panel.items.item_description,new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(item_data)));
});

ghoul.app.components.panel.items.t26544.prototype.om$core$IWillReceiveProps$ = true;

ghoul.app.components.panel.items.t26544.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = (function (this$,props){
var self__ = this;
var this$__$1 = this;
var new_state = ghoul.app.components.panel.items.get_item_visualization_state.call(null,self__.owner);
if((cljs.core.not.call(null,new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,self__.owner)))) && ((cljs.core._EQ_.call(null,new_state,new cljs.core.Keyword(null,"partial-out-item","partial-out-item",1686614062))) || (cljs.core._EQ_.call(null,new_state,new cljs.core.Keyword(null,"in-item","in-item",430950747))))){
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"read","read",1140058661),true);

var c__7303__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto__,new_state,this$__$1){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto__,new_state,this$__$1){
return (function (state_26553){
var state_val_26554 = (state_26553[(1)]);
if((state_val_26554 === (2))){
var inst_26549 = (state_26553[(2)]);
var inst_26550 = ghoul.app.components.panel.items.decrement_pending_count.call(null,self__.data);
var inst_26551 = ghoul.app.components.panel.items.mark_feed_read.call(null,self__.data);
var state_26553__$1 = (function (){var statearr_26555 = state_26553;
(statearr_26555[(7)] = inst_26549);

(statearr_26555[(8)] = inst_26550);

return statearr_26555;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26553__$1,inst_26551);
} else {
if((state_val_26554 === (1))){
var inst_26547 = cljs.core.async.timeout.call(null,(1));
var state_26553__$1 = state_26553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26553__$1,(2),inst_26547);
} else {
return null;
}
}
});})(c__7303__auto__,new_state,this$__$1))
;
return ((function (switch__7288__auto__,c__7303__auto__,new_state,this$__$1){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_26559 = [null,null,null,null,null,null,null,null,null];
(statearr_26559[(0)] = state_machine__7289__auto__);

(statearr_26559[(1)] = (1));

return statearr_26559;
});
var state_machine__7289__auto____1 = (function (state_26553){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_26553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e26560){if((e26560 instanceof Object)){
var ex__7292__auto__ = e26560;
var statearr_26561_26563 = state_26553;
(statearr_26561_26563[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26564 = state_26553;
state_26553 = G__26564;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_26553){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_26553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto__,new_state,this$__$1))
})();
var state__7305__auto__ = (function (){var statearr_26562 = f__7304__auto__.call(null);
(statearr_26562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto__);

return statearr_26562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto__,new_state,this$__$1))
);

return c__7303__auto__;
} else {
return null;
}
});

ghoul.app.components.panel.items.t26544.prototype.om$core$IInitState$ = true;

ghoul.app.components.panel.items.t26544.prototype.om$core$IInitState$init_state$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),(function (){var or__3608__auto__ = new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(self__.data);
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return false;
}
})(),new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770),"#ffffff"], null);
});

ghoul.app.components.panel.items.t26544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26546){
var self__ = this;
var _26546__$1 = this;
return self__.meta26545;
});

ghoul.app.components.panel.items.t26544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26546,meta26545__$1){
var self__ = this;
var _26546__$1 = this;
return (new ghoul.app.components.panel.items.t26544(self__.owner,self__.data,self__.item_content,meta26545__$1));
});

ghoul.app.components.panel.items.t26544.cljs$lang$type = true;

ghoul.app.components.panel.items.t26544.cljs$lang$ctorStr = "ghoul.app.components.panel.items/t26544";

ghoul.app.components.panel.items.t26544.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.app.components.panel.items/t26544");
});

ghoul.app.components.panel.items.__GT_t26544 = (function __GT_t26544(owner__$1,data__$1,item_content__$1,meta26545){
return (new ghoul.app.components.panel.items.t26544(owner__$1,data__$1,item_content__$1,meta26545));
});

}

return (new ghoul.app.components.panel.items.t26544(owner,data,item_content,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),78,new cljs.core.Keyword(null,"end-line","end-line",1837326455),99,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),67,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/app/components/panel/items.cljs"], null)));
});
ghoul.app.components.panel.items.item_list = (function item_list(data,owner){
if(typeof ghoul.app.components.panel.items.t26570 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.app.components.panel.items.t26570 = (function (owner,data,item_list,meta26571){
this.owner = owner;
this.data = data;
this.item_list = item_list;
this.meta26571 = meta26571;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.app.components.panel.items.t26570.prototype.om$core$IRenderState$ = true;

ghoul.app.components.panel.items.t26570.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
var cb_scroll = ((function (this$__$1){
return (function (e){
var node = self__.owner.getDOMNode();
var to_display = ((((node.scrollTop + node.clientHeight) >= (node.scrollHeight * 0.98)))?(new cljs.core.Keyword(null,"displaying-items","displaying-items",2059711494).cljs$core$IFn$_invoke$arity$1(state) + (1)):new cljs.core.Keyword(null,"displaying-items","displaying-items",2059711494).cljs$core$IFn$_invoke$arity$1(state));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"displaying-items","displaying-items",2059711494),to_display);
});})(this$__$1))
;
var get_feed = ((function (cb_scroll,this$__$1){
return (function (feeds,uid){
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (cb_scroll,this$__$1){
return (function (p1__26565_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(p1__26565_SHARP_),uid);
});})(cb_scroll,this$__$1))
,feeds));
});})(cb_scroll,this$__$1))
;
return cljs.core.apply.call(null,om.dom.div,{"onResize": cb_scroll, "onScroll": cb_scroll, "className": "feeds-wrapper"},om.core.build_all.call(null,ghoul.app.components.panel.items.item_content,cljs.core.map.call(null,((function (cb_scroll,get_feed,this$__$1){
return (function (p1__26566_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"feed","feed",-1566486205),get_feed.call(null,new cljs.core.Keyword(null,"feeds","feeds",855496306).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"feeduid","feeduid",1367071876).cljs$core$IFn$_invoke$arity$1(p1__26566_SHARP_))),new cljs.core.Keyword(null,"item","item",249373802),p1__26566_SHARP_);
});})(cb_scroll,get_feed,this$__$1))
,cljs.core.take.call(null,new cljs.core.Keyword(null,"displaying-items","displaying-items",2059711494).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(self__.data)))));
});

ghoul.app.components.panel.items.t26570.prototype.om$core$IDidUpdate$ = true;

ghoul.app.components.panel.items.t26570.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (this$,prev_props,prev_state){
var self__ = this;
var this$__$1 = this;
var element_height = self__.owner.getDOMNode().scrollHeight;
var parent_height = self__.owner.getDOMNode().parentNode.clientHeight;
if((parent_height >= element_height)){
return om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"displaying-items","displaying-items",2059711494),cljs.core.inc);
} else {
return null;
}
});

ghoul.app.components.panel.items.t26570.prototype.om$core$IWillUpdate$ = true;

ghoul.app.components.panel.items.t26570.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (this$,next_props,next_state){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(om.core.get_props.call(null,self__.owner)),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(next_props))){
self__.owner.getDOMNode().scrollTop = (0);

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"displaying-items","displaying-items",2059711494),(5));
} else {
return null;
}
});

ghoul.app.components.panel.items.t26570.prototype.om$core$IInitState$ = true;

ghoul.app.components.panel.items.t26570.prototype.om$core$IInitState$init_state$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"displaying-items","displaying-items",2059711494),(5)], null);
});

ghoul.app.components.panel.items.t26570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26572){
var self__ = this;
var _26572__$1 = this;
return self__.meta26571;
});

ghoul.app.components.panel.items.t26570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26572,meta26571__$1){
var self__ = this;
var _26572__$1 = this;
return (new ghoul.app.components.panel.items.t26570(self__.owner,self__.data,self__.item_list,meta26571__$1));
});

ghoul.app.components.panel.items.t26570.cljs$lang$type = true;

ghoul.app.components.panel.items.t26570.cljs$lang$ctorStr = "ghoul.app.components.panel.items/t26570";

ghoul.app.components.panel.items.t26570.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.app.components.panel.items/t26570");
});

ghoul.app.components.panel.items.__GT_t26570 = (function __GT_t26570(owner__$1,data__$1,item_list__$1,meta26571){
return (new ghoul.app.components.panel.items.t26570(owner__$1,data__$1,item_list__$1,meta26571));
});

}

return (new ghoul.app.components.panel.items.t26570(owner,data,item_list,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),100,new cljs.core.Keyword(null,"end-line","end-line",1837326455),136,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),102,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/app/components/panel/items.cljs"], null)));
});
ghoul.app.components.panel.items.feed_title = (function feed_title(data,owner){
if(typeof ghoul.app.components.panel.items.t26578 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.app.components.panel.items.t26578 = (function (owner,data,feed_title,meta26579){
this.owner = owner;
this.data = data;
this.feed_title = feed_title;
this.meta26579 = meta26579;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.app.components.panel.items.t26578.prototype.om$core$IRender$ = true;

ghoul.app.components.panel.items.t26578.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.call(null,{"className": "feed-title"},om.dom.div.call(null,{"className": "feed-title-text"},(function (){var vec__26581 = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.data);
var section = cljs.core.nth.call(null,vec__26581,(0),null);
var id = cljs.core.nth.call(null,vec__26581,(1),null);
if(cljs.core._EQ_.call(null,section,new cljs.core.Keyword(null,"group","group",582596132))){
return id;
} else {
if(cljs.core._EQ_.call(null,section,new cljs.core.Keyword(null,"feed","feed",-1566486205))){
return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (vec__26581,section,id,this$__$1){
return (function (p1__26573_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(p1__26573_SHARP_),id);
});})(vec__26581,section,id,this$__$1))
,new cljs.core.Keyword(null,"feeds","feeds",855496306).cljs$core$IFn$_invoke$arity$1(self__.data))));
} else {
if(cljs.core._EQ_.call(null,section,new cljs.core.Keyword(null,"all-items","all-items",1467247308))){
return ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.menu.all-items","ghoul.menu.all-items",969128274));
} else {
if(cljs.core._EQ_.call(null,section,new cljs.core.Keyword(null,"shared-items","shared-items",-572000165))){
return ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.menu.shared-items","ghoul.menu.shared-items",764182131));
} else {
if(cljs.core._EQ_.call(null,section,new cljs.core.Keyword(null,"favorite-items","favorite-items",389040315))){
return ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.menu.favorite-items","ghoul.menu.favorite-items",-1852320894));
} else {
return null;
}
}
}
}
}
})()),om.dom.a.call(null,{"onClick": ((function (this$__$1){
return (function (){
return ghoul.app.components.panel.items.change_to_compact_view.call(null,self__.data);
});})(this$__$1))
, "className": "compact-button"},ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.menu.compact-view","ghoul.menu.compact-view",1961645081))),om.dom.a.call(null,{"onClick": ((function (this$__$1){
return (function (){
return ghoul.app.components.panel.items.change_to_expanded_view.call(null,self__.data);
});})(this$__$1))
, "className": "expand-button"},ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.menu.expanded-view","ghoul.menu.expanded-view",2009178434))));
});

ghoul.app.components.panel.items.t26578.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26580){
var self__ = this;
var _26580__$1 = this;
return self__.meta26579;
});

ghoul.app.components.panel.items.t26578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26580,meta26579__$1){
var self__ = this;
var _26580__$1 = this;
return (new ghoul.app.components.panel.items.t26578(self__.owner,self__.data,self__.feed_title,meta26579__$1));
});

ghoul.app.components.panel.items.t26578.cljs$lang$type = true;

ghoul.app.components.panel.items.t26578.cljs$lang$ctorStr = "ghoul.app.components.panel.items/t26578";

ghoul.app.components.panel.items.t26578.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.app.components.panel.items/t26578");
});

ghoul.app.components.panel.items.__GT_t26578 = (function __GT_t26578(owner__$1,data__$1,feed_title__$1,meta26579){
return (new ghoul.app.components.panel.items.t26578(owner__$1,data__$1,feed_title__$1,meta26579));
});

}

return (new ghoul.app.components.panel.items.t26578(owner,data,feed_title,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),58,new cljs.core.Keyword(null,"end-line","end-line",1837326455),156,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),139,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/app/components/panel/items.cljs"], null)));
});
ghoul.app.components.panel.items.root = (function root(data,owner){
if(typeof ghoul.app.components.panel.items.t26585 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.app.components.panel.items.t26585 = (function (owner,data,root,meta26586){
this.owner = owner;
this.data = data;
this.root = root;
this.meta26586 = meta26586;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.app.components.panel.items.t26585.prototype.om$core$IRender$ = true;

ghoul.app.components.panel.items.t26585.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.section.call(null,{"id": "feeds-panel"},om.core.build.call(null,ghoul.app.components.panel.items.feed_title,ghoul.common.utils.project.call(null,self__.data,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"feeds-view","feeds-view",1214517259),new cljs.core.Keyword(null,"feeds","feeds",855496306))),om.core.build.call(null,ghoul.app.components.panel.items.item_list,ghoul.common.utils.project.call(null,self__.data,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"feeds","feeds",855496306),new cljs.core.Keyword(null,"items","items",1031954938))));
});

ghoul.app.components.panel.items.t26585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26587){
var self__ = this;
var _26587__$1 = this;
return self__.meta26586;
});

ghoul.app.components.panel.items.t26585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26587,meta26586__$1){
var self__ = this;
var _26587__$1 = this;
return (new ghoul.app.components.panel.items.t26585(self__.owner,self__.data,self__.root,meta26586__$1));
});

ghoul.app.components.panel.items.t26585.cljs$lang$type = true;

ghoul.app.components.panel.items.t26585.cljs$lang$ctorStr = "ghoul.app.components.panel.items/t26585";

ghoul.app.components.panel.items.t26585.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.app.components.panel.items/t26585");
});

ghoul.app.components.panel.items.__GT_t26585 = (function __GT_t26585(owner__$1,data__$1,root__$1,meta26586){
return (new ghoul.app.components.panel.items.t26585(owner__$1,data__$1,root__$1,meta26586));
});

}

return (new ghoul.app.components.panel.items.t26585(owner,data,root,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),82,new cljs.core.Keyword(null,"end-line","end-line",1837326455),164,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),159,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/app/components/panel/items.cljs"], null)));
});

//# sourceMappingURL=items.js.map?rel=1420049676863