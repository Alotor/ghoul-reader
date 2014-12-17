// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_uuid_utils');
goog.require('ghoul.components.feeds_panel');
goog.require('ghoul.feeds_storage');
goog.require('ghoul.components.feeds_panel');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('ghoul.components.home_panel');
goog.require('ghoul.components.header');
goog.require('om.dom');
goog.require('ghoul.components.feed_popup');
goog.require('cljs.core.async');
goog.require('ghoul.components.sidebar');
goog.require('ghoul.components.sidebar');
goog.require('ghoul.state');
goog.require('ghoul.components.feed_popup');
goog.require('ghoul.state');
goog.require('ghoul.components.header');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs_uuid_utils');
goog.require('cuerdas.core');
goog.require('ghoul.feeds_storage');
goog.require('ghoul.components.home_panel');
goog.require('cuerdas.core');
ghoul.main.app_root = (function app_root(data,owner){
if(typeof ghoul.main.t10644 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.main.t10644 = (function (owner,data,app_root,meta10645){
this.owner = owner;
this.data = data;
this.app_root = app_root;
this.meta10645 = meta10645;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.main.t10644.prototype.om$core$IRender$ = true;

ghoul.main.t10644.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var class_view = cljs.core.name.call(null,new cljs.core.Keyword(null,"feeds-view","feeds-view",1214517259).cljs$core$IFn$_invoke$arity$1(self__.data));
var class_menu = (cljs.core.truth_(new cljs.core.Keyword(null,"show-menu","show-menu",14072792).cljs$core$IFn$_invoke$arity$1(self__.data))?"menu-expanded":null);
var class_popup = (cljs.core.truth_(new cljs.core.Keyword(null,"popup","popup",635890211).cljs$core$IFn$_invoke$arity$1(self__.data))?[cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"popup","popup",635890211).cljs$core$IFn$_invoke$arity$1(self__.data))),cljs.core.str("-popup-visible")].join(''):"");
return om.dom.div.call(null,{"className": class_popup},om.core.build.call(null,ghoul.components.feed_popup.root,self__.data),om.dom.div.call(null,{"className": cuerdas.core.join.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,class_menu),class_view),"app-container"))},om.core.build.call(null,ghoul.components.header.root,self__.data),om.dom.div.call(null,{"className": "content"},om.core.build.call(null,ghoul.components.sidebar.root,new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(self__.data)),om.core.build.call(null,ghoul.components.feeds_panel.root,self__.data))));
});

ghoul.main.t10644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10646){
var self__ = this;
var _10646__$1 = this;
return self__.meta10645;
});

ghoul.main.t10644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10646,meta10645__$1){
var self__ = this;
var _10646__$1 = this;
return (new ghoul.main.t10644(self__.owner,self__.data,self__.app_root,meta10645__$1));
});

ghoul.main.t10644.cljs$lang$type = true;

ghoul.main.t10644.cljs$lang$ctorStr = "ghoul.main/t10644";

ghoul.main.t10644.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.main/t10644");
});

ghoul.main.__GT_t10644 = (function __GT_t10644(owner__$1,data__$1,app_root__$1,meta10645){
return (new ghoul.main.t10644(owner__$1,data__$1,app_root__$1,meta10645));
});

}

return (new ghoul.main.t10644(owner,data,app_root,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),74,new cljs.core.Keyword(null,"end-line","end-line",1837326455),29,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),17,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/main.cljs"], null)));
});
om.core.root.call(null,ghoul.main.app_root,ghoul.state.global,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app-root")], null));
console.log("Ghoul Reader loaded");
ghoul.main.update_feed_worker = (new Worker("js/worker.js"));
ghoul.main.read_feed = (function read_feed(uid,url){
var cb_worker = (function (event){
return console.log([cljs.core.str(">> Result"),cljs.core.str(cljs.core.js__GT_clj.call(null,event.data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true))].join(''));
});
ghoul.main.update_feed_worker.onmessage = cb_worker;

return ghoul.main.update_feed_worker.postMessage({"url": url, "uid": uid, "action": "update"});
});
goog.exportSymbol('ghoul.main.read_feed', ghoul.main.read_feed);
var c__5809__auto___10665 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___10665){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___10665){
return (function (state_10655){
var state_val_10656 = (state_10655[(1)]);
if((state_val_10656 === (3))){
var inst_10652 = (state_10655[(2)]);
var inst_10653 = cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"feeds","feeds",855496306),inst_10652);
var state_10655__$1 = state_10655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10655__$1,inst_10653);
} else {
if((state_val_10656 === (2))){
var inst_10649 = (state_10655[(2)]);
var inst_10650 = ghoul.feeds_storage.retrieve_all_feeds.call(null);
var state_10655__$1 = (function (){var statearr_10657 = state_10655;
(statearr_10657[(7)] = inst_10649);

return statearr_10657;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10655__$1,(3),inst_10650);
} else {
if((state_val_10656 === (1))){
var inst_10647 = ghoul.feeds_storage.init_database.call(null);
var state_10655__$1 = state_10655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10655__$1,(2),inst_10647);
} else {
return null;
}
}
}
});})(c__5809__auto___10665))
;
return ((function (switch__5794__auto__,c__5809__auto___10665){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_10661 = [null,null,null,null,null,null,null,null];
(statearr_10661[(0)] = state_machine__5795__auto__);

(statearr_10661[(1)] = (1));

return statearr_10661;
});
var state_machine__5795__auto____1 = (function (state_10655){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_10655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e10662){if((e10662 instanceof Object)){
var ex__5798__auto__ = e10662;
var statearr_10663_10666 = state_10655;
(statearr_10663_10666[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10667 = state_10655;
state_10655 = G__10667;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_10655){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_10655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___10665))
})();
var state__5811__auto__ = (function (){var statearr_10664 = f__5810__auto__.call(null);
(statearr_10664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___10665);

return statearr_10664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___10665))
);

