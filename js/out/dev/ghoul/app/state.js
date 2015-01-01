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
return cljs.core.map.call(null,(function (p1__10855_SHARP_){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(p1__10855_SHARP_)),new cljs.core.Keyword(null,"feed-url","feed-url",1903210362).cljs$core$IFn$_invoke$arity$1(p1__10855_SHARP_));
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
return (function (state_10875){
var state_val_10876 = (state_10875[(1)]);
if((state_val_10876 === (2))){
var inst_10872 = (state_10875[(2)]);
var inst_10873 = cljs.core.swap_BANG_.call(null,ghoul.app.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),inst_10872);
var state_10875__$1 = state_10875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10875__$1,inst_10873);
} else {
if((state_val_10876 === (1))){
var inst_10870 = ghoul.repository.item.retrieve_all_items.call(null);
var state_10875__$1 = state_10875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10875__$1,(2),inst_10870);
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
var statearr_10880 = [null,null,null,null,null,null,null];
(statearr_10880[(0)] = state_machine__7283__auto__);

(statearr_10880[(1)] = (1));

return statearr_10880;
});
var state_machine__7283__auto____1 = (function (state_10875){
while(true){
var ret_value__7284__auto__ = (function (){try{while(true){
var result__7285__auto__ = switch__7282__auto__.call(null,state_10875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7285__auto__;
}
break;
}
}catch (e10881){if((e10881 instanceof Object)){
var ex__7286__auto__ = e10881;
var statearr_10882_10884 = state_10875;
(statearr_10882_10884[(5)] = ex__7286__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10885 = state_10875;
state_10875 = G__10885;
continue;
} else {
return ret_value__7284__auto__;
}
break;
}
});
state_machine__7283__auto__ = function(state_10875){
switch(arguments.length){
case 0:
return state_machine__7283__auto____0.call(this);
case 1:
return state_machine__7283__auto____1.call(this,state_10875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7283__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7283__auto____0;
state_machine__7283__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7283__auto____1;
return state_machine__7283__auto__;
})()
;})(switch__7282__auto__,c__7297__auto__))
})();
var state__7299__auto__ = (function (){var statearr_10883 = f__7298__auto__.call(null);
(statearr_10883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7297__auto__);

return statearr_10883;
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
return (function (state_10905){
var state_val_10906 = (state_10905[(1)]);
if((state_val_10906 === (2))){
var inst_10902 = (state_10905[(2)]);
var inst_10903 = cljs.core.swap_BANG_.call(null,ghoul.app.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),inst_10902);
var state_10905__$1 = state_10905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10905__$1,inst_10903);
} else {
if((state_val_10906 === (1))){
var inst_10900 = ghoul.repository.item.retrieve_items_by_uid.call(null,uid_list);
var state_10905__$1 = state_10905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10905__$1,(2),inst_10900);
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
var statearr_10910 = [null,null,null,null,null,null,null];
(statearr_10910[(0)] = state_machine__7283__auto__);

(statearr_10910[(1)] = (1));

return statearr_10910;
});
var state_machine__7283__auto____1 = (function (state_10905){
while(true){
var ret_value__7284__auto__ = (function (){try{while(true){
var result__7285__auto__ = switch__7282__auto__.call(null,state_10905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7285__auto__;
}
break;
}
}catch (e10911){if((e10911 instanceof Object)){
var ex__7286__auto__ = e10911;
var statearr_10912_10914 = state_10905;
(statearr_10912_10914[(5)] = ex__7286__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10915 = state_10905;
state_10905 = G__10915;
continue;
} else {
return ret_value__7284__auto__;
}
break;
}
});
state_machine__7283__auto__ = function(state_10905){
switch(arguments.length){
case 0:
return state_machine__7283__auto____0.call(this);
case 1:
return state_machine__7283__auto____1.call(this,state_10905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7283__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7283__auto____0;
state_machine__7283__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7283__auto____1;
return state_machine__7283__auto__;
})()
;})(switch__7282__auto__,c__7297__auto__))
})();
var state__7299__auto__ = (function (){var statearr_10913 = f__7298__auto__.call(null);
(statearr_10913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7297__auto__);

return statearr_10913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7299__auto__);
});})(c__7297__auto__))
);

return c__7297__auto__;
});
ghoul.app.state.load_items_by_group = (function load_items_by_group(group_id){
var feed_list = new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__10916_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__10916_SHARP_),group_id);
}),new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.app.state.global)))));
return ghoul.app.state.load_items_by_uid_list.call(null,feed_list);
});
ghoul.app.state.load_items_by_feed = (function load_items_by_feed(feed_id){
return ghoul.app.state.load_items_by_uid_list.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [feed_id], null));
});
ghoul.app.state.load_selected_feeds = (function load_selected_feeds(item){
var vec__10918 = item;
var selected = cljs.core.nth.call(null,vec__10918,(0),null);
var id = cljs.core.nth.call(null,vec__10918,(1),null);
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
return cljs.core.swap_BANG_.call(null,ghoul.app.state.global,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"groups","groups",-136896102)], null),(function (p1__10919_SHARP_){
return cljs.core.conj.call(null,p1__10919_SHARP_,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.general.group","ghoul.general.group",-121416907))),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),cljs.core.PersistentVector.EMPTY));
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
return (function (state_11127){
var state_val_11128 = (state_11127[(1)]);
if((state_val_11128 === (7))){
var inst_11113 = (state_11127[(2)]);
var state_11127__$1 = state_11127;
var statearr_11129_11161 = state_11127__$1;
(statearr_11129_11161[(2)] = inst_11113);

(statearr_11129_11161[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11128 === (1))){
var inst_11042 = ghoul.common.http.get_rss.call(null,feed_url);
var state_11127__$1 = state_11127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11127__$1,(2),inst_11042);
} else {
if((state_val_11128 === (4))){
var inst_11045 = (state_11127[(7)]);
var inst_11058 = (state_11127[(8)]);
var inst_11047 = (state_11127[(9)]);
var inst_11049 = (state_11127[(10)]);
var inst_11115 = (state_11127[(2)]);
var inst_11116 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11117 = [new cljs.core.Keyword(null,"feeds","feeds",855496306)];
var inst_11118 = (new cljs.core.PersistentVector(null,1,(5),inst_11116,inst_11117,null));
var inst_11119 = (function (){var subscription = inst_11058;
var feed_uid = inst_11049;
var feed_num = inst_11047;
var feed_data = inst_11045;
return ((function (subscription,feed_uid,feed_num,feed_data,inst_11045,inst_11058,inst_11047,inst_11049,inst_11115,inst_11116,inst_11117,inst_11118,state_val_11128,c__7297__auto__){
return (function (p1__10921_SHARP_){
return cljs.core.conj.call(null,p1__10921_SHARP_,subscription);
});
;})(subscription,feed_uid,feed_num,feed_data,inst_11045,inst_11058,inst_11047,inst_11049,inst_11115,inst_11116,inst_11117,inst_11118,state_val_11128,c__7297__auto__))
})();
var inst_11120 = cljs.core.swap_BANG_.call(null,ghoul.app.state.global,cljs.core.update_in,inst_11118,inst_11119);
var inst_11121 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11122 = [new cljs.core.Keyword(null,"groups","groups",-136896102),(0),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776)];
var inst_11123 = (new cljs.core.PersistentVector(null,3,(5),inst_11121,inst_11122,null));
var inst_11124 = (function (){var subscription = inst_11058;
var feed_uid = inst_11049;
var feed_num = inst_11047;
var feed_data = inst_11045;
return ((function (subscription,feed_uid,feed_num,feed_data,inst_11045,inst_11058,inst_11047,inst_11049,inst_11115,inst_11116,inst_11117,inst_11118,inst_11119,inst_11120,inst_11121,inst_11122,inst_11123,state_val_11128,c__7297__auto__){
return (function (p1__10922_SHARP_){
return cljs.core.conj.call(null,p1__10922_SHARP_,feed_uid);
});
;})(subscription,feed_uid,feed_num,feed_data,inst_11045,inst_11058,inst_11047,inst_11049,inst_11115,inst_11116,inst_11117,inst_11118,inst_11119,inst_11120,inst_11121,inst_11122,inst_11123,state_val_11128,c__7297__auto__))
})();
var inst_11125 = cljs.core.swap_BANG_.call(null,ghoul.app.state.global,cljs.core.update_in,inst_11123,inst_11124);
var state_11127__$1 = (function (){var statearr_11130 = state_11127;
(statearr_11130[(11)] = inst_11120);

(statearr_11130[(12)] = inst_11115);

return statearr_11130;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11127__$1,inst_11125);
} else {
if((state_val_11128 === (15))){
var inst_11086 = (state_11127[(13)]);
var inst_11045 = (state_11127[(7)]);
var inst_11067 = (state_11127[(14)]);
var inst_11058 = (state_11127[(8)]);
var inst_11066 = (state_11127[(15)]);
var inst_11047 = (state_11127[(9)]);
var inst_11049 = (state_11127[(10)]);
var inst_11068 = (state_11127[(16)]);
var inst_11095 = (state_11127[(17)]);
var inst_11099 = (state_11127[(2)]);
var inst_11100 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11101 = [new cljs.core.Keyword(null,"items","items",1031954938)];
var inst_11102 = (new cljs.core.PersistentVector(null,1,(5),inst_11100,inst_11101,null));
var inst_11103 = (function (){var count__11061 = inst_11067;
var temp__4126__auto__ = inst_11086;
var subscription = inst_11058;
var feed_data = inst_11045;
var i__11062 = inst_11068;
var item = inst_11095;
var seq__11059 = inst_11086;
var feed_uid = inst_11049;
var feed_num = inst_11047;
var chunk__11060 = inst_11066;
return ((function (count__11061,temp__4126__auto__,subscription,feed_data,i__11062,item,seq__11059,feed_uid,feed_num,chunk__11060,inst_11086,inst_11045,inst_11067,inst_11058,inst_11066,inst_11047,inst_11049,inst_11068,inst_11095,inst_11099,inst_11100,inst_11101,inst_11102,state_val_11128,c__7297__auto__){
return (function (p1__10920_SHARP_){
return cljs.core.conj.call(null,p1__10920_SHARP_,item);
});
;})(count__11061,temp__4126__auto__,subscription,feed_data,i__11062,item,seq__11059,feed_uid,feed_num,chunk__11060,inst_11086,inst_11045,inst_11067,inst_11058,inst_11066,inst_11047,inst_11049,inst_11068,inst_11095,inst_11099,inst_11100,inst_11101,inst_11102,state_val_11128,c__7297__auto__))
})();
var inst_11104 = cljs.core.swap_BANG_.call(null,ghoul.app.state.global,cljs.core.update_in,inst_11102,inst_11103);
var inst_11105 = cljs.core.next.call(null,inst_11086);
var inst_11065 = inst_11105;
var inst_11066__$1 = null;
var inst_11067__$1 = (0);
var inst_11068__$1 = (0);
var state_11127__$1 = (function (){var statearr_11131 = state_11127;
(statearr_11131[(18)] = inst_11099);

(statearr_11131[(19)] = inst_11065);

(statearr_11131[(14)] = inst_11067__$1);

(statearr_11131[(15)] = inst_11066__$1);

(statearr_11131[(16)] = inst_11068__$1);

(statearr_11131[(20)] = inst_11104);

return statearr_11131;
})();
var statearr_11132_11162 = state_11127__$1;
(statearr_11132_11162[(2)] = null);

(statearr_11132_11162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11128 === (13))){
var inst_11086 = (state_11127[(13)]);
var inst_11049 = (state_11127[(10)]);
var inst_11095 = (state_11127[(17)]);
var inst_11095__$1 = cljs.core.first.call(null,inst_11086);
var inst_11096 = cljs.core.assoc.call(null,inst_11095__$1,new cljs.core.Keyword(null,"feeduid","feeduid",1367071876),inst_11049);
var inst_11097 = ghoul.repository.item.add_item.call(null,inst_11096);
var state_11127__$1 = (function (){var statearr_11133 = state_11127;
(statearr_11133[(17)] = inst_11095__$1);

return statearr_11133;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11127__$1,(15),inst_11097);
} else {
if((state_val_11128 === (6))){
var inst_11086 = (state_11127[(13)]);
var inst_11065 = (state_11127[(19)]);
var inst_11086__$1 = cljs.core.seq.call(null,inst_11065);
var state_11127__$1 = (function (){var statearr_11134 = state_11127;
(statearr_11134[(13)] = inst_11086__$1);

return statearr_11134;
})();
if(inst_11086__$1){
var statearr_11135_11163 = state_11127__$1;
(statearr_11135_11163[(1)] = (9));

} else {
var statearr_11136_11164 = state_11127__$1;
(statearr_11136_11164[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11128 === (3))){
var inst_11067 = (state_11127[(14)]);
var inst_11068 = (state_11127[(16)]);
var inst_11070 = (inst_11068 < inst_11067);
var inst_11071 = inst_11070;
var state_11127__$1 = state_11127;
if(cljs.core.truth_(inst_11071)){
var statearr_11137_11165 = state_11127__$1;
(statearr_11137_11165[(1)] = (5));

} else {
var statearr_11138_11166 = state_11127__$1;
(statearr_11138_11166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11128 === (12))){
var inst_11086 = (state_11127[(13)]);
var inst_11090 = cljs.core.chunk_first.call(null,inst_11086);
var inst_11091 = cljs.core.chunk_rest.call(null,inst_11086);
var inst_11092 = cljs.core.count.call(null,inst_11090);
var inst_11065 = inst_11091;
var inst_11066 = inst_11090;
var inst_11067 = inst_11092;
var inst_11068 = (0);
var state_11127__$1 = (function (){var statearr_11139 = state_11127;
(statearr_11139[(19)] = inst_11065);

(statearr_11139[(14)] = inst_11067);

(statearr_11139[(15)] = inst_11066);

(statearr_11139[(16)] = inst_11068);

return statearr_11139;
})();
var statearr_11140_11167 = state_11127__$1;
(statearr_11140_11167[(2)] = null);

(statearr_11140_11167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11128 === (2))){
var inst_11045 = (state_11127[(7)]);
var inst_11047 = (state_11127[(9)]);
var inst_11049 = (state_11127[(10)]);
var inst_11044 = (state_11127[(2)]);
var inst_11045__$1 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_11044);
var inst_11046 = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(inst_11045__$1);
var inst_11047__$1 = cljs.core.count.call(null,inst_11046);
var inst_11048 = cljs_uuid_utils.make_random_uuid.call(null);
var inst_11049__$1 = cljs_uuid_utils.uuid_string.call(null,inst_11048);
var inst_11050 = cljs.core.PersistentHashMap.EMPTY;
var inst_11051 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(inst_11045__$1);
var inst_11052 = cljs.core.assoc.call(null,inst_11050,new cljs.core.Keyword(null,"title","title",636505583),inst_11051);
var inst_11053 = cljs.core.assoc.call(null,inst_11052,new cljs.core.Keyword(null,"uid","uid",-1447769400),inst_11049__$1);
var inst_11054 = new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(inst_11045__$1);
var inst_11055 = cljs.core.assoc.call(null,inst_11053,new cljs.core.Keyword(null,"site-url","site-url",1492702733),inst_11054);
var inst_11056 = cljs.core.assoc.call(null,inst_11055,new cljs.core.Keyword(null,"feed-url","feed-url",1903210362),feed_url);
var inst_11057 = cljs.core.assoc.call(null,inst_11056,new cljs.core.Keyword(null,"favicon","favicon",-1214000341),"/images/favicon.png");
var inst_11058 = cljs.core.assoc.call(null,inst_11057,new cljs.core.Keyword(null,"pending","pending",-220036727),inst_11047__$1);
var inst_11063 = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(inst_11045__$1);
var inst_11064 = cljs.core.seq.call(null,inst_11063);
var inst_11065 = inst_11064;
var inst_11066 = null;
var inst_11067 = (0);
var inst_11068 = (0);
var state_11127__$1 = (function (){var statearr_11141 = state_11127;
(statearr_11141[(7)] = inst_11045__$1);

(statearr_11141[(19)] = inst_11065);

(statearr_11141[(14)] = inst_11067);

(statearr_11141[(8)] = inst_11058);

(statearr_11141[(15)] = inst_11066);

(statearr_11141[(9)] = inst_11047__$1);

(statearr_11141[(10)] = inst_11049__$1);

(statearr_11141[(16)] = inst_11068);

return statearr_11141;
})();
var statearr_11142_11168 = state_11127__$1;
(statearr_11142_11168[(2)] = null);

(statearr_11142_11168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11128 === (11))){
var inst_11111 = (state_11127[(2)]);
var state_11127__$1 = state_11127;
var statearr_11143_11169 = state_11127__$1;
(statearr_11143_11169[(2)] = inst_11111);

(statearr_11143_11169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11128 === (9))){
var inst_11086 = (state_11127[(13)]);
var inst_11088 = cljs.core.chunked_seq_QMARK_.call(null,inst_11086);
var state_11127__$1 = state_11127;
if(inst_11088){
var statearr_11144_11170 = state_11127__$1;
(statearr_11144_11170[(1)] = (12));

} else {
var statearr_11145_11171 = state_11127__$1;
(statearr_11145_11171[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11128 === (5))){
var inst_11066 = (state_11127[(15)]);
var inst_11049 = (state_11127[(10)]);
var inst_11068 = (state_11127[(16)]);
var inst_11073 = (state_11127[(21)]);
var inst_11073__$1 = cljs.core._nth.call(null,inst_11066,inst_11068);
var inst_11074 = cljs.core.assoc.call(null,inst_11073__$1,new cljs.core.Keyword(null,"feeduid","feeduid",1367071876),inst_11049);
var inst_11075 = ghoul.repository.item.add_item.call(null,inst_11074);
var state_11127__$1 = (function (){var statearr_11146 = state_11127;
(statearr_11146[(21)] = inst_11073__$1);

return statearr_11146;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11127__$1,(8),inst_11075);
} else {
if((state_val_11128 === (14))){
var inst_11108 = (state_11127[(2)]);
var state_11127__$1 = state_11127;
var statearr_11150_11172 = state_11127__$1;
(statearr_11150_11172[(2)] = inst_11108);

(statearr_11150_11172[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11128 === (10))){
var state_11127__$1 = state_11127;
var statearr_11151_11173 = state_11127__$1;
(statearr_11151_11173[(2)] = null);

(statearr_11151_11173[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11128 === (8))){
var inst_11045 = (state_11127[(7)]);
var inst_11065 = (state_11127[(19)]);
var inst_11067 = (state_11127[(14)]);
var inst_11058 = (state_11127[(8)]);
var inst_11066 = (state_11127[(15)]);
var inst_11047 = (state_11127[(9)]);
var inst_11049 = (state_11127[(10)]);
var inst_11068 = (state_11127[(16)]);
var inst_11073 = (state_11127[(21)]);
var inst_11077 = (state_11127[(2)]);
var inst_11078 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11079 = [new cljs.core.Keyword(null,"items","items",1031954938)];
var inst_11080 = (new cljs.core.PersistentVector(null,1,(5),inst_11078,inst_11079,null));
var inst_11081 = (function (){var item = inst_11073;
var seq__11059 = inst_11065;
var chunk__11060 = inst_11066;
var count__11061 = inst_11067;
var i__11062 = inst_11068;
var subscription = inst_11058;
var feed_uid = inst_11049;
var feed_num = inst_11047;
var feed_data = inst_11045;
return ((function (item,seq__11059,chunk__11060,count__11061,i__11062,subscription,feed_uid,feed_num,feed_data,inst_11045,inst_11065,inst_11067,inst_11058,inst_11066,inst_11047,inst_11049,inst_11068,inst_11073,inst_11077,inst_11078,inst_11079,inst_11080,state_val_11128,c__7297__auto__){
return (function (p1__10920_SHARP_){
return cljs.core.conj.call(null,p1__10920_SHARP_,item);
});
;})(item,seq__11059,chunk__11060,count__11061,i__11062,subscription,feed_uid,feed_num,feed_data,inst_11045,inst_11065,inst_11067,inst_11058,inst_11066,inst_11047,inst_11049,inst_11068,inst_11073,inst_11077,inst_11078,inst_11079,inst_11080,state_val_11128,c__7297__auto__))
})();
var inst_11082 = cljs.core.swap_BANG_.call(null,ghoul.app.state.global,cljs.core.update_in,inst_11080,inst_11081);
var inst_11083 = (inst_11068 + (1));
var tmp11147 = inst_11065;
var tmp11148 = inst_11067;
var tmp11149 = inst_11066;
var inst_11065__$1 = tmp11147;
var inst_11066__$1 = tmp11149;
var inst_11067__$1 = tmp11148;
var inst_11068__$1 = inst_11083;
var state_11127__$1 = (function (){var statearr_11152 = state_11127;
(statearr_11152[(19)] = inst_11065__$1);

(statearr_11152[(22)] = inst_11082);

(statearr_11152[(14)] = inst_11067__$1);

(statearr_11152[(15)] = inst_11066__$1);

(statearr_11152[(16)] = inst_11068__$1);

(statearr_11152[(23)] = inst_11077);

return statearr_11152;
})();
var statearr_11153_11174 = state_11127__$1;
(statearr_11153_11174[(2)] = null);

(statearr_11153_11174[(1)] = (3));


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
var statearr_11157 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11157[(0)] = state_machine__7283__auto__);

(statearr_11157[(1)] = (1));

return statearr_11157;
});
var state_machine__7283__auto____1 = (function (state_11127){
while(true){
var ret_value__7284__auto__ = (function (){try{while(true){
var result__7285__auto__ = switch__7282__auto__.call(null,state_11127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7285__auto__;
}
break;
}
}catch (e11158){if((e11158 instanceof Object)){
var ex__7286__auto__ = e11158;
var statearr_11159_11175 = state_11127;
(statearr_11159_11175[(5)] = ex__7286__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11176 = state_11127;
state_11127 = G__11176;
continue;
} else {
return ret_value__7284__auto__;
}
break;
}
});
state_machine__7283__auto__ = function(state_11127){
switch(arguments.length){
case 0:
return state_machine__7283__auto____0.call(this);
case 1:
return state_machine__7283__auto____1.call(this,state_11127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7283__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7283__auto____0;
state_machine__7283__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7283__auto____1;
return state_machine__7283__auto__;
})()
;})(switch__7282__auto__,c__7297__auto__))
})();
var state__7299__auto__ = (function (){var statearr_11160 = f__7298__auto__.call(null);
(statearr_11160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7297__auto__);

return statearr_11160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7299__auto__);
});})(c__7297__auto__))
);

return c__7297__auto__;
});
ghoul.app.state.get_feed_group = (function get_feed_group(feed_uid){
var group_contains_feed_uid = (function (group,feed_uid__$1){
return cljs.core.some.call(null,(function (p1__11177_SHARP_){
return cljs.core._EQ_.call(null,p1__11177_SHARP_,feed_uid__$1);
}),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(group));
});
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (group_contains_feed_uid){
return (function (p1__11178_SHARP_){
return group_contains_feed_uid.call(null,p1__11178_SHARP_,feed_uid);
});})(group_contains_feed_uid))
,new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.app.state.global))));
});
ghoul.app.state.get_feed_idx = (function get_feed_idx(uid){
return cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__11179_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__11179_SHARP_)),uid);
}),cljs.core.map_indexed.call(null,cljs.core.vector,new cljs.core.Keyword(null,"feeds","feeds",855496306).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.app.state.global))))));
});
ghoul.app.state.increase_feed_pending = (function increase_feed_pending(uid){
var path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feeds","feeds",855496306),ghoul.app.state.get_feed_idx.call(null,uid),new cljs.core.Keyword(null,"pending","pending",-220036727)], null);
return cljs.core.swap_BANG_.call(null,ghoul.app.state.global,cljs.core.update_in,path,cljs.core.inc);
});
ghoul.app.state.include_feed = (function include_feed(item_data){
var vec__11182 = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.app.state.global));
var selected = cljs.core.nth.call(null,vec__11182,(0),null);
var id = cljs.core.nth.call(null,vec__11182,(1),null);
var feed_uid = new cljs.core.Keyword(null,"feeduid","feeduid",1367071876).cljs$core$IFn$_invoke$arity$1(item_data);
var group_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ghoul.app.state.get_feed_group.call(null,feed_uid));
ghoul.app.state.increase_feed_pending.call(null,feed_uid);

if((cljs.core._EQ_.call(null,id,feed_uid)) || (cljs.core._EQ_.call(null,id,group_name)) || (cljs.core._EQ_.call(null,selected,new cljs.core.Keyword(null,"all-items","all-items",1467247308)))){
return cljs.core.swap_BANG_.call(null,ghoul.app.state.global,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null),((function (vec__11182,selected,id,feed_uid,group_name){
return (function (p1__11180_SHARP_){
return cljs.core.conj.call(null,p1__11180_SHARP_,item_data);
});})(vec__11182,selected,id,feed_uid,group_name))
);
} else {
return null;
}
});
ghoul.app.state.update_item = (function update_item(item_path){
var item = cljs.core.get_in.call(null,cljs.core.deref.call(null,ghoul.app.state.global),item_path);
return ghoul.repository.item.add_item.call(null,item);
});

//# sourceMappingURL=state.js.map?rel=1420114682912