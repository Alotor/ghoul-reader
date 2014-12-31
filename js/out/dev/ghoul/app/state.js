// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.app.state');
goog.require('cljs.core');
goog.require('ghoul.app.messages');
goog.require('cljs.core.async');
goog.require('ghoul.repository.item');
goog.require('hodgepodge.core');
goog.require('cljs_uuid_utils');
goog.require('hodgepodge.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('ghoul.repository.item');
goog.require('ghoul.app.messages');
goog.require('ghoul.common.http');
goog.require('cljs_uuid_utils');
goog.require('ghoul.common.http');
ghoul.app.state.current_state_version = (1);
ghoul.app.state.global = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"popup","popup",635890211),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"feeds-view","feeds-view",1214517259),new cljs.core.Keyword(null,"feeds","feeds",855496306),new cljs.core.Keyword(null,"show-menu","show-menu",14072792),new cljs.core.Keyword(null,"groups","groups",-136896102),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"current-view","current-view",-1037279042)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"none","none",1333468478)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-items","all-items",1467247308)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expanded-view","expanded-view",1276146539)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,ghoul.app.state.current_state_version,new cljs.core.Keyword(null,"list","list",765357683)]));
ghoul.app.state.list_uid_url = (function list_uid_url(){
return cljs.core.map.call(null,(function (p1__12289_SHARP_){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(p1__12289_SHARP_)),new cljs.core.Keyword(null,"feed-url","feed-url",1903210362).cljs$core$IFn$_invoke$arity$1(p1__12289_SHARP_));
}),new cljs.core.Keyword(null,"feeds","feeds",855496306).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.app.state.global)));
});
ghoul.app.state.store_state = (function store_state(state){
return cljs.core.assoc_BANG_.call(null,hodgepodge.core.local_storage,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"items","items",1031954938)));
});
ghoul.app.state.restore_state = (function restore_state(old_state){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(old_state),ghoul.app.state.current_state_version)){
return cljs.core.reset_BANG_.call(null,ghoul.app.state.global,old_state);
} else {
return null;
}
});
ghoul.app.state.load_all_items = (function load_all_items(){
var c__7297__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7297__auto__){
return (function (){
var f__7298__auto__ = (function (){var switch__7282__auto__ = ((function (c__7297__auto__){
return (function (state_12309){
var state_val_12310 = (state_12309[(1)]);
if((state_val_12310 === (2))){
var inst_12306 = (state_12309[(2)]);
var inst_12307 = cljs.core.swap_BANG_.call(null,ghoul.app.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),inst_12306);
var state_12309__$1 = state_12309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12309__$1,inst_12307);
} else {
if((state_val_12310 === (1))){
var inst_12304 = ghoul.repository.item.retrieve_all_feeds.call(null);
var state_12309__$1 = state_12309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12309__$1,(2),inst_12304);
} else {
return null;
}
}
});})(c__7297__auto__))
;
return ((function (switch__7282__auto__,c__7297__auto__){
return (function() {
var state_machine__7283__auto__ = null;
var state_machine__7283__auto____0 = (function (){
var statearr_12314 = [null,null,null,null,null,null,null];
(statearr_12314[(0)] = state_machine__7283__auto__);

(statearr_12314[(1)] = (1));

return statearr_12314;
});
var state_machine__7283__auto____1 = (function (state_12309){
while(true){
var ret_value__7284__auto__ = (function (){try{while(true){
var result__7285__auto__ = switch__7282__auto__.call(null,state_12309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7285__auto__;
}
break;
}
}catch (e12315){if((e12315 instanceof Object)){
var ex__7286__auto__ = e12315;
var statearr_12316_12318 = state_12309;
(statearr_12316_12318[(5)] = ex__7286__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12319 = state_12309;
state_12309 = G__12319;
continue;
} else {
return ret_value__7284__auto__;
}
break;
}
});
state_machine__7283__auto__ = function(state_12309){
switch(arguments.length){
case 0:
return state_machine__7283__auto____0.call(this);
case 1:
return state_machine__7283__auto____1.call(this,state_12309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7283__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7283__auto____0;
state_machine__7283__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7283__auto____1;
return state_machine__7283__auto__;
})()
;})(switch__7282__auto__,c__7297__auto__))
})();
var state__7299__auto__ = (function (){var statearr_12317 = f__7298__auto__.call(null);
(statearr_12317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7297__auto__);

return statearr_12317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7299__auto__);
});})(c__7297__auto__))
);

return c__7297__auto__;
});
ghoul.app.state.load_shared_items = (function load_shared_items(){
return cljs.core.swap_BANG_.call(null,ghoul.app.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentVector.EMPTY);
});
ghoul.app.state.load_favorites_items = (function load_favorites_items(){
return cljs.core.swap_BANG_.call(null,ghoul.app.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentVector.EMPTY);
});
ghoul.app.state.load_items_by_uid_list = (function load_items_by_uid_list(uid_list){
var c__7297__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7297__auto__){
return (function (){
var f__7298__auto__ = (function (){var switch__7282__auto__ = ((function (c__7297__auto__){
return (function (state_12339){
var state_val_12340 = (state_12339[(1)]);
if((state_val_12340 === (2))){
var inst_12336 = (state_12339[(2)]);
var inst_12337 = cljs.core.swap_BANG_.call(null,ghoul.app.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),inst_12336);
var state_12339__$1 = state_12339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12339__$1,inst_12337);
} else {
if((state_val_12340 === (1))){
var inst_12334 = ghoul.repository.item.retrieve_feeds_uids.call(null,uid_list);
var state_12339__$1 = state_12339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12339__$1,(2),inst_12334);
} else {
return null;
}
}
});})(c__7297__auto__))
;
return ((function (switch__7282__auto__,c__7297__auto__){
return (function() {
var state_machine__7283__auto__ = null;
var state_machine__7283__auto____0 = (function (){
var statearr_12344 = [null,null,null,null,null,null,null];
(statearr_12344[(0)] = state_machine__7283__auto__);

(statearr_12344[(1)] = (1));

return statearr_12344;
});
var state_machine__7283__auto____1 = (function (state_12339){
while(true){
var ret_value__7284__auto__ = (function (){try{while(true){
var result__7285__auto__ = switch__7282__auto__.call(null,state_12339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7285__auto__;
}
break;
}
}catch (e12345){if((e12345 instanceof Object)){
var ex__7286__auto__ = e12345;
var statearr_12346_12348 = state_12339;
(statearr_12346_12348[(5)] = ex__7286__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12349 = state_12339;
state_12339 = G__12349;
continue;
} else {
return ret_value__7284__auto__;
}
break;
}
});
state_machine__7283__auto__ = function(state_12339){
switch(arguments.length){
case 0:
return state_machine__7283__auto____0.call(this);
case 1:
return state_machine__7283__auto____1.call(this,state_12339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7283__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7283__auto____0;
state_machine__7283__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7283__auto____1;
return state_machine__7283__auto__;
})()
;})(switch__7282__auto__,c__7297__auto__))
})();
var state__7299__auto__ = (function (){var statearr_12347 = f__7298__auto__.call(null);
(statearr_12347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7297__auto__);

return statearr_12347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7299__auto__);
});})(c__7297__auto__))
);

return c__7297__auto__;
});
ghoul.app.state.load_items_by_group = (function load_items_by_group(group_id){
var feed_list = new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__12350_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__12350_SHARP_),group_id);
}),new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.app.state.global)))));
return ghoul.app.state.load_items_by_uid_list.call(null,feed_list);
});
ghoul.app.state.load_items_by_feed = (function load_items_by_feed(feed_id){
return ghoul.app.state.load_items_by_uid_list.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [feed_id], null));
});
ghoul.app.state.load_selected_feeds = (function load_selected_feeds(item){
var vec__12352 = item;
var selected = cljs.core.nth.call(null,vec__12352,(0),null);
var id = cljs.core.nth.call(null,vec__12352,(1),null);
if(cljs.core._EQ_.call(null,selected,new cljs.core.Keyword(null,"all-items","all-items",1467247308))){
return ghoul.app.state.load_all_items.call(null);
} else {
if(cljs.core._EQ_.call(null,selected,new cljs.core.Keyword(null,"shared-items","shared-items",-572000165))){
return ghoul.app.state.load_shared_items.call(null);
} else {
if(cljs.core._EQ_.call(null,selected,new cljs.core.Keyword(null,"favorite-items","favorite-items",389040315))){
return ghoul.app.state.load_favorites_items.call(null);
} else {
if(cljs.core._EQ_.call(null,selected,new cljs.core.Keyword(null,"group","group",582596132))){
return ghoul.app.state.load_items_by_group.call(null,id);
} else {
return ghoul.app.state.load_items_by_feed.call(null,id);

}
}
}
}
});
ghoul.app.state.state_change_listener = (function state_change_listener(context,key,ref,old_value,new_value){
return ghoul.app.state.store_state.call(null,cljs.core.deref.call(null,ghoul.app.state.global));
});
ghoul.app.state.initialize_state = (function initialize_state(){
var old_state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(hodgepodge.core.local_storage);
if(!((old_state == null))){
ghoul.app.state.restore_state.call(null,old_state);

ghoul.app.state.load_selected_feeds.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(old_state));
} else {
}

return cljs.core.add_watch.call(null,ghoul.app.state.global,null,ghoul.app.state.state_change_listener);
});
ghoul.app.state.add_general_group = (function add_general_group(){
return cljs.core.swap_BANG_.call(null,ghoul.app.state.global,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"groups","groups",-136896102)], null),(function (p1__12353_SHARP_){
return cljs.core.conj.call(null,p1__12353_SHARP_,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.general.group","ghoul.general.group",-121416907))),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),cljs.core.PersistentVector.EMPTY));
}));
});
ghoul.app.state.add_rss_subscription = (function add_rss_subscription(feed_url){
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.app.state.global)))){
ghoul.app.state.add_general_group.call(null);
} else {
}

var c__7297__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7297__auto__){
return (function (){
var f__7298__auto__ = (function (){var switch__7282__auto__ = ((function (c__7297__auto__){
return (function (state_12561){
var state_val_12562 = (state_12561[(1)]);
if((state_val_12562 === (7))){
var inst_12547 = (state_12561[(2)]);
var state_12561__$1 = state_12561;
var statearr_12563_12595 = state_12561__$1;
(statearr_12563_12595[(2)] = inst_12547);

(statearr_12563_12595[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (1))){
var inst_12476 = ghoul.common.http.get_rss.call(null,feed_url);
var state_12561__$1 = state_12561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12561__$1,(2),inst_12476);
} else {
if((state_val_12562 === (4))){
var inst_12479 = (state_12561[(7)]);
var inst_12481 = (state_12561[(8)]);
var inst_12492 = (state_12561[(9)]);
var inst_12483 = (state_12561[(10)]);
var inst_12549 = (state_12561[(2)]);
var inst_12550 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12551 = [new cljs.core.Keyword(null,"feeds","feeds",855496306)];
var inst_12552 = (new cljs.core.PersistentVector(null,1,(5),inst_12550,inst_12551,null));
var inst_12553 = (function (){var subscription = inst_12492;
var feed_uid = inst_12483;
var feed_num = inst_12481;
var feed_data = inst_12479;
return ((function (subscription,feed_uid,feed_num,feed_data,inst_12479,inst_12481,inst_12492,inst_12483,inst_12549,inst_12550,inst_12551,inst_12552,state_val_12562,c__7297__auto__){
return (function (p1__12355_SHARP_){
return cljs.core.conj.call(null,p1__12355_SHARP_,subscription);
});
;})(subscription,feed_uid,feed_num,feed_data,inst_12479,inst_12481,inst_12492,inst_12483,inst_12549,inst_12550,inst_12551,inst_12552,state_val_12562,c__7297__auto__))
})();
var inst_12554 = cljs.core.swap_BANG_.call(null,ghoul.app.state.global,cljs.core.update_in,inst_12552,inst_12553);
var inst_12555 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12556 = [new cljs.core.Keyword(null,"groups","groups",-136896102),(0),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776)];
var inst_12557 = (new cljs.core.PersistentVector(null,3,(5),inst_12555,inst_12556,null));
var inst_12558 = (function (){var subscription = inst_12492;
var feed_uid = inst_12483;
var feed_num = inst_12481;
var feed_data = inst_12479;
return ((function (subscription,feed_uid,feed_num,feed_data,inst_12479,inst_12481,inst_12492,inst_12483,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,state_val_12562,c__7297__auto__){
return (function (p1__12356_SHARP_){
return cljs.core.conj.call(null,p1__12356_SHARP_,feed_uid);
});
;})(subscription,feed_uid,feed_num,feed_data,inst_12479,inst_12481,inst_12492,inst_12483,inst_12549,inst_12550,inst_12551,inst_12552,inst_12553,inst_12554,inst_12555,inst_12556,inst_12557,state_val_12562,c__7297__auto__))
})();
var inst_12559 = cljs.core.swap_BANG_.call(null,ghoul.app.state.global,cljs.core.update_in,inst_12557,inst_12558);
var state_12561__$1 = (function (){var statearr_12564 = state_12561;
(statearr_12564[(11)] = inst_12549);

(statearr_12564[(12)] = inst_12554);

return statearr_12564;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12561__$1,inst_12559);
} else {
if((state_val_12562 === (15))){
var inst_12500 = (state_12561[(13)]);
var inst_12501 = (state_12561[(14)]);
var inst_12520 = (state_12561[(15)]);
var inst_12502 = (state_12561[(16)]);
var inst_12479 = (state_12561[(7)]);
var inst_12529 = (state_12561[(17)]);
var inst_12481 = (state_12561[(8)]);
var inst_12492 = (state_12561[(9)]);
var inst_12483 = (state_12561[(10)]);
var inst_12533 = (state_12561[(2)]);
var inst_12534 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12535 = [new cljs.core.Keyword(null,"items","items",1031954938)];
var inst_12536 = (new cljs.core.PersistentVector(null,1,(5),inst_12534,inst_12535,null));
var inst_12537 = (function (){var chunk__12494 = inst_12500;
var seq__12493 = inst_12520;
var temp__4126__auto__ = inst_12520;
var subscription = inst_12492;
var count__12495 = inst_12501;
var feed_data = inst_12479;
var item = inst_12529;
var feed_uid = inst_12483;
var feed_num = inst_12481;
var i__12496 = inst_12502;
return ((function (chunk__12494,seq__12493,temp__4126__auto__,subscription,count__12495,feed_data,item,feed_uid,feed_num,i__12496,inst_12500,inst_12501,inst_12520,inst_12502,inst_12479,inst_12529,inst_12481,inst_12492,inst_12483,inst_12533,inst_12534,inst_12535,inst_12536,state_val_12562,c__7297__auto__){
return (function (p1__12354_SHARP_){
return cljs.core.conj.call(null,p1__12354_SHARP_,item);
});
;})(chunk__12494,seq__12493,temp__4126__auto__,subscription,count__12495,feed_data,item,feed_uid,feed_num,i__12496,inst_12500,inst_12501,inst_12520,inst_12502,inst_12479,inst_12529,inst_12481,inst_12492,inst_12483,inst_12533,inst_12534,inst_12535,inst_12536,state_val_12562,c__7297__auto__))
})();
var inst_12538 = cljs.core.swap_BANG_.call(null,ghoul.app.state.global,cljs.core.update_in,inst_12536,inst_12537);
var inst_12539 = cljs.core.next.call(null,inst_12520);
var inst_12499 = inst_12539;
var inst_12500__$1 = null;
var inst_12501__$1 = (0);
var inst_12502__$1 = (0);
var state_12561__$1 = (function (){var statearr_12565 = state_12561;
(statearr_12565[(13)] = inst_12500__$1);

(statearr_12565[(18)] = inst_12538);

(statearr_12565[(14)] = inst_12501__$1);

(statearr_12565[(16)] = inst_12502__$1);

(statearr_12565[(19)] = inst_12533);

(statearr_12565[(20)] = inst_12499);

return statearr_12565;
})();
var statearr_12566_12596 = state_12561__$1;
(statearr_12566_12596[(2)] = null);

(statearr_12566_12596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (13))){
var inst_12520 = (state_12561[(15)]);
var inst_12529 = (state_12561[(17)]);
var inst_12483 = (state_12561[(10)]);
var inst_12529__$1 = cljs.core.first.call(null,inst_12520);
var inst_12530 = cljs.core.assoc.call(null,inst_12529__$1,new cljs.core.Keyword(null,"feeduid","feeduid",1367071876),inst_12483);
var inst_12531 = ghoul.repository.item.add_feed.call(null,inst_12530);
var state_12561__$1 = (function (){var statearr_12567 = state_12561;
(statearr_12567[(17)] = inst_12529__$1);

return statearr_12567;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12561__$1,(15),inst_12531);
} else {
if((state_val_12562 === (6))){
var inst_12520 = (state_12561[(15)]);
var inst_12499 = (state_12561[(20)]);
var inst_12520__$1 = cljs.core.seq.call(null,inst_12499);
var state_12561__$1 = (function (){var statearr_12568 = state_12561;
(statearr_12568[(15)] = inst_12520__$1);

return statearr_12568;
})();
if(inst_12520__$1){
var statearr_12569_12597 = state_12561__$1;
(statearr_12569_12597[(1)] = (9));

} else {
var statearr_12570_12598 = state_12561__$1;
(statearr_12570_12598[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (3))){
var inst_12501 = (state_12561[(14)]);
var inst_12502 = (state_12561[(16)]);
var inst_12504 = (inst_12502 < inst_12501);
var inst_12505 = inst_12504;
var state_12561__$1 = state_12561;
if(cljs.core.truth_(inst_12505)){
var statearr_12571_12599 = state_12561__$1;
(statearr_12571_12599[(1)] = (5));

} else {
var statearr_12572_12600 = state_12561__$1;
(statearr_12572_12600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (12))){
var inst_12520 = (state_12561[(15)]);
var inst_12524 = cljs.core.chunk_first.call(null,inst_12520);
var inst_12525 = cljs.core.chunk_rest.call(null,inst_12520);
var inst_12526 = cljs.core.count.call(null,inst_12524);
var inst_12499 = inst_12525;
var inst_12500 = inst_12524;
var inst_12501 = inst_12526;
var inst_12502 = (0);
var state_12561__$1 = (function (){var statearr_12573 = state_12561;
(statearr_12573[(13)] = inst_12500);

(statearr_12573[(14)] = inst_12501);

(statearr_12573[(16)] = inst_12502);

(statearr_12573[(20)] = inst_12499);

return statearr_12573;
})();
var statearr_12574_12601 = state_12561__$1;
(statearr_12574_12601[(2)] = null);

(statearr_12574_12601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (2))){
var inst_12479 = (state_12561[(7)]);
var inst_12481 = (state_12561[(8)]);
var inst_12483 = (state_12561[(10)]);
var inst_12478 = (state_12561[(2)]);
var inst_12479__$1 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_12478);
var inst_12480 = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(inst_12479__$1);
var inst_12481__$1 = cljs.core.count.call(null,inst_12480);
var inst_12482 = cljs_uuid_utils.make_random_uuid.call(null);
var inst_12483__$1 = cljs_uuid_utils.uuid_string.call(null,inst_12482);
var inst_12484 = cljs.core.PersistentHashMap.EMPTY;
var inst_12485 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(inst_12479__$1);
var inst_12486 = cljs.core.assoc.call(null,inst_12484,new cljs.core.Keyword(null,"title","title",636505583),inst_12485);
var inst_12487 = cljs.core.assoc.call(null,inst_12486,new cljs.core.Keyword(null,"uid","uid",-1447769400),inst_12483__$1);
var inst_12488 = new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(inst_12479__$1);
var inst_12489 = cljs.core.assoc.call(null,inst_12487,new cljs.core.Keyword(null,"site-url","site-url",1492702733),inst_12488);
var inst_12490 = cljs.core.assoc.call(null,inst_12489,new cljs.core.Keyword(null,"feed-url","feed-url",1903210362),feed_url);
var inst_12491 = cljs.core.assoc.call(null,inst_12490,new cljs.core.Keyword(null,"favicon","favicon",-1214000341),"/images/favicon.png");
var inst_12492 = cljs.core.assoc.call(null,inst_12491,new cljs.core.Keyword(null,"pending","pending",-220036727),inst_12481__$1);
var inst_12497 = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(inst_12479__$1);
var inst_12498 = cljs.core.seq.call(null,inst_12497);
var inst_12499 = inst_12498;
var inst_12500 = null;
var inst_12501 = (0);
var inst_12502 = (0);
var state_12561__$1 = (function (){var statearr_12575 = state_12561;
(statearr_12575[(13)] = inst_12500);

(statearr_12575[(14)] = inst_12501);

(statearr_12575[(16)] = inst_12502);

(statearr_12575[(7)] = inst_12479__$1);

(statearr_12575[(20)] = inst_12499);

(statearr_12575[(8)] = inst_12481__$1);

(statearr_12575[(9)] = inst_12492);

(statearr_12575[(10)] = inst_12483__$1);

return statearr_12575;
})();
var statearr_12576_12602 = state_12561__$1;
(statearr_12576_12602[(2)] = null);

(statearr_12576_12602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (11))){
var inst_12545 = (state_12561[(2)]);
var state_12561__$1 = state_12561;
var statearr_12577_12603 = state_12561__$1;
(statearr_12577_12603[(2)] = inst_12545);

(statearr_12577_12603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (9))){
var inst_12520 = (state_12561[(15)]);
var inst_12522 = cljs.core.chunked_seq_QMARK_.call(null,inst_12520);
var state_12561__$1 = state_12561;
if(inst_12522){
var statearr_12578_12604 = state_12561__$1;
(statearr_12578_12604[(1)] = (12));

} else {
var statearr_12579_12605 = state_12561__$1;
(statearr_12579_12605[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (5))){
var inst_12500 = (state_12561[(13)]);
var inst_12502 = (state_12561[(16)]);
var inst_12507 = (state_12561[(21)]);
var inst_12483 = (state_12561[(10)]);
var inst_12507__$1 = cljs.core._nth.call(null,inst_12500,inst_12502);
var inst_12508 = cljs.core.assoc.call(null,inst_12507__$1,new cljs.core.Keyword(null,"feeduid","feeduid",1367071876),inst_12483);
var inst_12509 = ghoul.repository.item.add_feed.call(null,inst_12508);
var state_12561__$1 = (function (){var statearr_12580 = state_12561;
(statearr_12580[(21)] = inst_12507__$1);

return statearr_12580;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12561__$1,(8),inst_12509);
} else {
if((state_val_12562 === (14))){
var inst_12542 = (state_12561[(2)]);
var state_12561__$1 = state_12561;
var statearr_12584_12606 = state_12561__$1;
(statearr_12584_12606[(2)] = inst_12542);

(statearr_12584_12606[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (10))){
var state_12561__$1 = state_12561;
var statearr_12585_12607 = state_12561__$1;
(statearr_12585_12607[(2)] = null);

(statearr_12585_12607[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (8))){
var inst_12500 = (state_12561[(13)]);
var inst_12501 = (state_12561[(14)]);
var inst_12502 = (state_12561[(16)]);
var inst_12479 = (state_12561[(7)]);
var inst_12507 = (state_12561[(21)]);
var inst_12499 = (state_12561[(20)]);
var inst_12481 = (state_12561[(8)]);
var inst_12492 = (state_12561[(9)]);
var inst_12483 = (state_12561[(10)]);
var inst_12511 = (state_12561[(2)]);
var inst_12512 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12513 = [new cljs.core.Keyword(null,"items","items",1031954938)];
var inst_12514 = (new cljs.core.PersistentVector(null,1,(5),inst_12512,inst_12513,null));
var inst_12515 = (function (){var item = inst_12507;
var seq__12493 = inst_12499;
var chunk__12494 = inst_12500;
var count__12495 = inst_12501;
var i__12496 = inst_12502;
var subscription = inst_12492;
var feed_uid = inst_12483;
var feed_num = inst_12481;
var feed_data = inst_12479;
return ((function (item,seq__12493,chunk__12494,count__12495,i__12496,subscription,feed_uid,feed_num,feed_data,inst_12500,inst_12501,inst_12502,inst_12479,inst_12507,inst_12499,inst_12481,inst_12492,inst_12483,inst_12511,inst_12512,inst_12513,inst_12514,state_val_12562,c__7297__auto__){
return (function (p1__12354_SHARP_){
return cljs.core.conj.call(null,p1__12354_SHARP_,item);
});
;})(item,seq__12493,chunk__12494,count__12495,i__12496,subscription,feed_uid,feed_num,feed_data,inst_12500,inst_12501,inst_12502,inst_12479,inst_12507,inst_12499,inst_12481,inst_12492,inst_12483,inst_12511,inst_12512,inst_12513,inst_12514,state_val_12562,c__7297__auto__))
})();
var inst_12516 = cljs.core.swap_BANG_.call(null,ghoul.app.state.global,cljs.core.update_in,inst_12514,inst_12515);
var inst_12517 = (inst_12502 + (1));
var tmp12581 = inst_12500;
var tmp12582 = inst_12501;
var tmp12583 = inst_12499;
var inst_12499__$1 = tmp12583;
var inst_12500__$1 = tmp12581;
var inst_12501__$1 = tmp12582;
var inst_12502__$1 = inst_12517;
var state_12561__$1 = (function (){var statearr_12586 = state_12561;
(statearr_12586[(13)] = inst_12500__$1);

(statearr_12586[(22)] = inst_12511);

(statearr_12586[(14)] = inst_12501__$1);

(statearr_12586[(23)] = inst_12516);

(statearr_12586[(16)] = inst_12502__$1);

(statearr_12586[(20)] = inst_12499__$1);

return statearr_12586;
})();
var statearr_12587_12608 = state_12561__$1;
(statearr_12587_12608[(2)] = null);

(statearr_12587_12608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7297__auto__))
;
return ((function (switch__7282__auto__,c__7297__auto__){
return (function() {
var state_machine__7283__auto__ = null;
var state_machine__7283__auto____0 = (function (){
var statearr_12591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12591[(0)] = state_machine__7283__auto__);

(statearr_12591[(1)] = (1));

return statearr_12591;
});
var state_machine__7283__auto____1 = (function (state_12561){
while(true){
var ret_value__7284__auto__ = (function (){try{while(true){
var result__7285__auto__ = switch__7282__auto__.call(null,state_12561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7285__auto__;
}
break;
}
}catch (e12592){if((e12592 instanceof Object)){
var ex__7286__auto__ = e12592;
var statearr_12593_12609 = state_12561;
(statearr_12593_12609[(5)] = ex__7286__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12610 = state_12561;
state_12561 = G__12610;
continue;
} else {
return ret_value__7284__auto__;
}
break;
}
});
state_machine__7283__auto__ = function(state_12561){
switch(arguments.length){
case 0:
return state_machine__7283__auto____0.call(this);
case 1:
return state_machine__7283__auto____1.call(this,state_12561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7283__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7283__auto____0;
state_machine__7283__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7283__auto____1;
return state_machine__7283__auto__;
})()
;})(switch__7282__auto__,c__7297__auto__))
})();
var state__7299__auto__ = (function (){var statearr_12594 = f__7298__auto__.call(null);
(statearr_12594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7297__auto__);

return statearr_12594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7299__auto__);
});})(c__7297__auto__))
);

return c__7297__auto__;
});
ghoul.app.state.get_feed_group = (function get_feed_group(feed_uid){
var group_contains_feed_uid = (function (group,feed_uid__$1){
return cljs.core.some.call(null,(function (p1__12611_SHARP_){
return cljs.core._EQ_.call(null,p1__12611_SHARP_,feed_uid__$1);
}),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(group));
});
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (group_contains_feed_uid){
return (function (p1__12612_SHARP_){
return group_contains_feed_uid.call(null,p1__12612_SHARP_,feed_uid);
});})(group_contains_feed_uid))
,new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.app.state.global))));
});
ghoul.app.state.get_feed_idx = (function get_feed_idx(uid){
return cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__12613_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__12613_SHARP_)),uid);
}),cljs.core.map_indexed.call(null,cljs.core.vector,new cljs.core.Keyword(null,"feeds","feeds",855496306).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.app.state.global))))));
});
ghoul.app.state.increase_feed_pending = (function increase_feed_pending(uid){
var path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feeds","feeds",855496306),ghoul.app.state.get_feed_idx.call(null,uid),new cljs.core.Keyword(null,"pending","pending",-220036727)], null);
return cljs.core.swap_BANG_.call(null,ghoul.app.state.global,cljs.core.update_in,path,cljs.core.inc);
});
ghoul.app.state.include_feed = (function include_feed(item_data){
var vec__12616 = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.app.state.global));
var selected = cljs.core.nth.call(null,vec__12616,(0),null);
var id = cljs.core.nth.call(null,vec__12616,(1),null);
var feed_uid = new cljs.core.Keyword(null,"feeduid","feeduid",1367071876).cljs$core$IFn$_invoke$arity$1(item_data);
var group_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ghoul.app.state.get_feed_group.call(null,feed_uid));
ghoul.app.state.increase_feed_pending.call(null,feed_uid);

if((cljs.core._EQ_.call(null,id,feed_uid)) || (cljs.core._EQ_.call(null,id,group_name)) || (cljs.core._EQ_.call(null,selected,new cljs.core.Keyword(null,"all-items","all-items",1467247308)))){
return cljs.core.swap_BANG_.call(null,ghoul.app.state.global,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null),((function (vec__12616,selected,id,feed_uid,group_name){
return (function (p1__12614_SHARP_){
return cljs.core.conj.call(null,p1__12614_SHARP_,item_data);
});})(vec__12616,selected,id,feed_uid,group_name))
);
} else {
return null;
}
});

//# sourceMappingURL=state.js.map?rel=1420049797684