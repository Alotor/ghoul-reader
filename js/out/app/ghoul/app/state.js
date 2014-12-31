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
return cljs.core.map.call(null,(function (p1__10865_SHARP_){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(p1__10865_SHARP_)),new cljs.core.Keyword(null,"feed-url","feed-url",1903210362).cljs$core$IFn$_invoke$arity$1(p1__10865_SHARP_));
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
var c__7303__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto__){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto__){
return (function (state_10885){
var state_val_10886 = (state_10885[(1)]);
if((state_val_10886 === (2))){
var inst_10882 = (state_10885[(2)]);
var inst_10883 = cljs.core.swap_BANG_.call(null,ghoul.app.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),inst_10882);
var state_10885__$1 = state_10885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10885__$1,inst_10883);
} else {
if((state_val_10886 === (1))){
var inst_10880 = ghoul.repository.item.retrieve_all_feeds.call(null);
var state_10885__$1 = state_10885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10885__$1,(2),inst_10880);
} else {
return null;
}
}
});})(c__7303__auto__))
;
return ((function (switch__7288__auto__,c__7303__auto__){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_10890 = [null,null,null,null,null,null,null];
(statearr_10890[(0)] = state_machine__7289__auto__);

(statearr_10890[(1)] = (1));

return statearr_10890;
});
var state_machine__7289__auto____1 = (function (state_10885){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_10885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e10891){if((e10891 instanceof Object)){
var ex__7292__auto__ = e10891;
var statearr_10892_10894 = state_10885;
(statearr_10892_10894[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10895 = state_10885;
state_10885 = G__10895;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_10885){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_10885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto__))
})();
var state__7305__auto__ = (function (){var statearr_10893 = f__7304__auto__.call(null);
(statearr_10893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto__);

return statearr_10893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto__))
);

return c__7303__auto__;
});
ghoul.app.state.load_shared_items = (function load_shared_items(){
return cljs.core.swap_BANG_.call(null,ghoul.app.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentVector.EMPTY);
});
ghoul.app.state.load_favorites_items = (function load_favorites_items(){
return cljs.core.swap_BANG_.call(null,ghoul.app.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentVector.EMPTY);
});
ghoul.app.state.load_items_by_uid_list = (function load_items_by_uid_list(uid_list){
var c__7303__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto__){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto__){
return (function (state_10915){
var state_val_10916 = (state_10915[(1)]);
if((state_val_10916 === (2))){
var inst_10912 = (state_10915[(2)]);
var inst_10913 = cljs.core.swap_BANG_.call(null,ghoul.app.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),inst_10912);
var state_10915__$1 = state_10915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10915__$1,inst_10913);
} else {
if((state_val_10916 === (1))){
var inst_10910 = ghoul.repository.item.retrieve_feeds_uids.call(null,uid_list);
var state_10915__$1 = state_10915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10915__$1,(2),inst_10910);
} else {
return null;
}
}
});})(c__7303__auto__))
;
return ((function (switch__7288__auto__,c__7303__auto__){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_10920 = [null,null,null,null,null,null,null];
(statearr_10920[(0)] = state_machine__7289__auto__);

(statearr_10920[(1)] = (1));

return statearr_10920;
});
var state_machine__7289__auto____1 = (function (state_10915){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_10915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e10921){if((e10921 instanceof Object)){
var ex__7292__auto__ = e10921;
var statearr_10922_10924 = state_10915;
(statearr_10922_10924[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10925 = state_10915;
state_10915 = G__10925;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_10915){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_10915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto__))
})();
var state__7305__auto__ = (function (){var statearr_10923 = f__7304__auto__.call(null);
(statearr_10923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto__);

return statearr_10923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto__))
);

return c__7303__auto__;
});
ghoul.app.state.load_items_by_group = (function load_items_by_group(group_id){
var feed_list = new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__10926_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__10926_SHARP_),group_id);
}),new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.app.state.global)))));
return ghoul.app.state.load_items_by_uid_list.call(null,feed_list);
});
ghoul.app.state.load_items_by_feed = (function load_items_by_feed(feed_id){
return ghoul.app.state.load_items_by_uid_list.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [feed_id], null));
});
ghoul.app.state.load_selected_feeds = (function load_selected_feeds(item){
var vec__10928 = item;
var selected = cljs.core.nth.call(null,vec__10928,(0),null);
var id = cljs.core.nth.call(null,vec__10928,(1),null);
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
return cljs.core.swap_BANG_.call(null,ghoul.app.state.global,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"groups","groups",-136896102)], null),(function (p1__10929_SHARP_){
return cljs.core.conj.call(null,p1__10929_SHARP_,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.general.group","ghoul.general.group",-121416907))),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),cljs.core.PersistentVector.EMPTY));
}));
});
ghoul.app.state.add_rss_subscription = (function add_rss_subscription(feed_url){
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.app.state.global)))){
ghoul.app.state.add_general_group.call(null);
} else {
}

var c__7303__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto__){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto__){
return (function (state_11137){
var state_val_11138 = (state_11137[(1)]);
if((state_val_11138 === (7))){
var inst_11123 = (state_11137[(2)]);
var state_11137__$1 = state_11137;
var statearr_11139_11171 = state_11137__$1;
(statearr_11139_11171[(2)] = inst_11123);

(statearr_11139_11171[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (1))){
var inst_11052 = ghoul.common.http.get_rss.call(null,feed_url);
var state_11137__$1 = state_11137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11137__$1,(2),inst_11052);
} else {
if((state_val_11138 === (4))){
var inst_11057 = (state_11137[(7)]);
var inst_11068 = (state_11137[(8)]);
var inst_11055 = (state_11137[(9)]);
var inst_11059 = (state_11137[(10)]);
var inst_11125 = (state_11137[(2)]);
var inst_11126 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11127 = [new cljs.core.Keyword(null,"feeds","feeds",855496306)];
var inst_11128 = (new cljs.core.PersistentVector(null,1,(5),inst_11126,inst_11127,null));
var inst_11129 = (function (){var subscription = inst_11068;
var feed_uid = inst_11059;
var feed_num = inst_11057;
var feed_data = inst_11055;
return ((function (subscription,feed_uid,feed_num,feed_data,inst_11057,inst_11068,inst_11055,inst_11059,inst_11125,inst_11126,inst_11127,inst_11128,state_val_11138,c__7303__auto__){
return (function (p1__10931_SHARP_){
return cljs.core.conj.call(null,p1__10931_SHARP_,subscription);
});
;})(subscription,feed_uid,feed_num,feed_data,inst_11057,inst_11068,inst_11055,inst_11059,inst_11125,inst_11126,inst_11127,inst_11128,state_val_11138,c__7303__auto__))
})();
var inst_11130 = cljs.core.swap_BANG_.call(null,ghoul.app.state.global,cljs.core.update_in,inst_11128,inst_11129);
var inst_11131 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11132 = [new cljs.core.Keyword(null,"groups","groups",-136896102),(0),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776)];
var inst_11133 = (new cljs.core.PersistentVector(null,3,(5),inst_11131,inst_11132,null));
var inst_11134 = (function (){var subscription = inst_11068;
var feed_uid = inst_11059;
var feed_num = inst_11057;
var feed_data = inst_11055;
return ((function (subscription,feed_uid,feed_num,feed_data,inst_11057,inst_11068,inst_11055,inst_11059,inst_11125,inst_11126,inst_11127,inst_11128,inst_11129,inst_11130,inst_11131,inst_11132,inst_11133,state_val_11138,c__7303__auto__){
return (function (p1__10932_SHARP_){
return cljs.core.conj.call(null,p1__10932_SHARP_,feed_uid);
});
;})(subscription,feed_uid,feed_num,feed_data,inst_11057,inst_11068,inst_11055,inst_11059,inst_11125,inst_11126,inst_11127,inst_11128,inst_11129,inst_11130,inst_11131,inst_11132,inst_11133,state_val_11138,c__7303__auto__))
})();
var inst_11135 = cljs.core.swap_BANG_.call(null,ghoul.app.state.global,cljs.core.update_in,inst_11133,inst_11134);
var state_11137__$1 = (function (){var statearr_11140 = state_11137;
(statearr_11140[(11)] = inst_11125);

(statearr_11140[(12)] = inst_11130);

return statearr_11140;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11137__$1,inst_11135);
} else {
if((state_val_11138 === (15))){
var inst_11076 = (state_11137[(13)]);
var inst_11057 = (state_11137[(7)]);
var inst_11096 = (state_11137[(14)]);
var inst_11068 = (state_11137[(8)]);
var inst_11078 = (state_11137[(15)]);
var inst_11055 = (state_11137[(9)]);
var inst_11105 = (state_11137[(16)]);
var inst_11059 = (state_11137[(10)]);
var inst_11077 = (state_11137[(17)]);
var inst_11109 = (state_11137[(2)]);
var inst_11110 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11111 = [new cljs.core.Keyword(null,"items","items",1031954938)];
var inst_11112 = (new cljs.core.PersistentVector(null,1,(5),inst_11110,inst_11111,null));
var inst_11113 = (function (){var temp__4126__auto__ = inst_11096;
var subscription = inst_11068;
var feed_data = inst_11055;
var item = inst_11105;
var chunk__11070 = inst_11076;
var i__11072 = inst_11078;
var feed_uid = inst_11059;
var feed_num = inst_11057;
var count__11071 = inst_11077;
var seq__11069 = inst_11096;
return ((function (temp__4126__auto__,subscription,feed_data,item,chunk__11070,i__11072,feed_uid,feed_num,count__11071,seq__11069,inst_11076,inst_11057,inst_11096,inst_11068,inst_11078,inst_11055,inst_11105,inst_11059,inst_11077,inst_11109,inst_11110,inst_11111,inst_11112,state_val_11138,c__7303__auto__){
return (function (p1__10930_SHARP_){
return cljs.core.conj.call(null,p1__10930_SHARP_,item);
});
;})(temp__4126__auto__,subscription,feed_data,item,chunk__11070,i__11072,feed_uid,feed_num,count__11071,seq__11069,inst_11076,inst_11057,inst_11096,inst_11068,inst_11078,inst_11055,inst_11105,inst_11059,inst_11077,inst_11109,inst_11110,inst_11111,inst_11112,state_val_11138,c__7303__auto__))
})();
var inst_11114 = cljs.core.swap_BANG_.call(null,ghoul.app.state.global,cljs.core.update_in,inst_11112,inst_11113);
var inst_11115 = cljs.core.next.call(null,inst_11096);
var inst_11075 = inst_11115;
var inst_11076__$1 = null;
var inst_11077__$1 = (0);
var inst_11078__$1 = (0);
var state_11137__$1 = (function (){var statearr_11141 = state_11137;
(statearr_11141[(18)] = inst_11075);

(statearr_11141[(13)] = inst_11076__$1);

(statearr_11141[(19)] = inst_11109);

(statearr_11141[(20)] = inst_11114);

(statearr_11141[(15)] = inst_11078__$1);

(statearr_11141[(17)] = inst_11077__$1);

return statearr_11141;
})();
var statearr_11142_11172 = state_11137__$1;
(statearr_11142_11172[(2)] = null);

(statearr_11142_11172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (13))){
var inst_11096 = (state_11137[(14)]);
var inst_11105 = (state_11137[(16)]);
var inst_11059 = (state_11137[(10)]);
var inst_11105__$1 = cljs.core.first.call(null,inst_11096);
var inst_11106 = cljs.core.assoc.call(null,inst_11105__$1,new cljs.core.Keyword(null,"feeduid","feeduid",1367071876),inst_11059);
var inst_11107 = ghoul.repository.item.add_feed.call(null,inst_11106);
var state_11137__$1 = (function (){var statearr_11143 = state_11137;
(statearr_11143[(16)] = inst_11105__$1);

return statearr_11143;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11137__$1,(15),inst_11107);
} else {
if((state_val_11138 === (6))){
var inst_11075 = (state_11137[(18)]);
var inst_11096 = (state_11137[(14)]);
var inst_11096__$1 = cljs.core.seq.call(null,inst_11075);
var state_11137__$1 = (function (){var statearr_11144 = state_11137;
(statearr_11144[(14)] = inst_11096__$1);

return statearr_11144;
})();
if(inst_11096__$1){
var statearr_11145_11173 = state_11137__$1;
(statearr_11145_11173[(1)] = (9));

} else {
var statearr_11146_11174 = state_11137__$1;
(statearr_11146_11174[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (3))){
var inst_11078 = (state_11137[(15)]);
var inst_11077 = (state_11137[(17)]);
var inst_11080 = (inst_11078 < inst_11077);
var inst_11081 = inst_11080;
var state_11137__$1 = state_11137;
if(cljs.core.truth_(inst_11081)){
var statearr_11147_11175 = state_11137__$1;
(statearr_11147_11175[(1)] = (5));

} else {
var statearr_11148_11176 = state_11137__$1;
(statearr_11148_11176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (12))){
var inst_11096 = (state_11137[(14)]);
var inst_11100 = cljs.core.chunk_first.call(null,inst_11096);
var inst_11101 = cljs.core.chunk_rest.call(null,inst_11096);
var inst_11102 = cljs.core.count.call(null,inst_11100);
var inst_11075 = inst_11101;
var inst_11076 = inst_11100;
var inst_11077 = inst_11102;
var inst_11078 = (0);
var state_11137__$1 = (function (){var statearr_11149 = state_11137;
(statearr_11149[(18)] = inst_11075);

(statearr_11149[(13)] = inst_11076);

(statearr_11149[(15)] = inst_11078);

(statearr_11149[(17)] = inst_11077);

return statearr_11149;
})();
var statearr_11150_11177 = state_11137__$1;
(statearr_11150_11177[(2)] = null);

(statearr_11150_11177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (2))){
var inst_11057 = (state_11137[(7)]);
var inst_11055 = (state_11137[(9)]);
var inst_11059 = (state_11137[(10)]);
var inst_11054 = (state_11137[(2)]);
var inst_11055__$1 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_11054);
var inst_11056 = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(inst_11055__$1);
var inst_11057__$1 = cljs.core.count.call(null,inst_11056);
var inst_11058 = cljs_uuid_utils.make_random_uuid.call(null);
var inst_11059__$1 = cljs_uuid_utils.uuid_string.call(null,inst_11058);
var inst_11060 = cljs.core.PersistentHashMap.EMPTY;
var inst_11061 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(inst_11055__$1);
var inst_11062 = cljs.core.assoc.call(null,inst_11060,new cljs.core.Keyword(null,"title","title",636505583),inst_11061);
var inst_11063 = cljs.core.assoc.call(null,inst_11062,new cljs.core.Keyword(null,"uid","uid",-1447769400),inst_11059__$1);
var inst_11064 = new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(inst_11055__$1);
var inst_11065 = cljs.core.assoc.call(null,inst_11063,new cljs.core.Keyword(null,"site-url","site-url",1492702733),inst_11064);
var inst_11066 = cljs.core.assoc.call(null,inst_11065,new cljs.core.Keyword(null,"feed-url","feed-url",1903210362),feed_url);
var inst_11067 = cljs.core.assoc.call(null,inst_11066,new cljs.core.Keyword(null,"favicon","favicon",-1214000341),"/images/favicon.png");
var inst_11068 = cljs.core.assoc.call(null,inst_11067,new cljs.core.Keyword(null,"pending","pending",-220036727),inst_11057__$1);
var inst_11073 = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(inst_11055__$1);
var inst_11074 = cljs.core.seq.call(null,inst_11073);
var inst_11075 = inst_11074;
var inst_11076 = null;
var inst_11077 = (0);
var inst_11078 = (0);
var state_11137__$1 = (function (){var statearr_11151 = state_11137;
(statearr_11151[(18)] = inst_11075);

(statearr_11151[(13)] = inst_11076);

(statearr_11151[(7)] = inst_11057__$1);

(statearr_11151[(8)] = inst_11068);

(statearr_11151[(15)] = inst_11078);

(statearr_11151[(9)] = inst_11055__$1);

(statearr_11151[(10)] = inst_11059__$1);

(statearr_11151[(17)] = inst_11077);

return statearr_11151;
})();
var statearr_11152_11178 = state_11137__$1;
(statearr_11152_11178[(2)] = null);

(statearr_11152_11178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (11))){
var inst_11121 = (state_11137[(2)]);
var state_11137__$1 = state_11137;
var statearr_11153_11179 = state_11137__$1;
(statearr_11153_11179[(2)] = inst_11121);

(statearr_11153_11179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (9))){
var inst_11096 = (state_11137[(14)]);
var inst_11098 = cljs.core.chunked_seq_QMARK_.call(null,inst_11096);
var state_11137__$1 = state_11137;
if(inst_11098){
var statearr_11154_11180 = state_11137__$1;
(statearr_11154_11180[(1)] = (12));

} else {
var statearr_11155_11181 = state_11137__$1;
(statearr_11155_11181[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (5))){
var inst_11076 = (state_11137[(13)]);
var inst_11083 = (state_11137[(21)]);
var inst_11078 = (state_11137[(15)]);
var inst_11059 = (state_11137[(10)]);
var inst_11083__$1 = cljs.core._nth.call(null,inst_11076,inst_11078);
var inst_11084 = cljs.core.assoc.call(null,inst_11083__$1,new cljs.core.Keyword(null,"feeduid","feeduid",1367071876),inst_11059);
var inst_11085 = ghoul.repository.item.add_feed.call(null,inst_11084);
var state_11137__$1 = (function (){var statearr_11156 = state_11137;
(statearr_11156[(21)] = inst_11083__$1);

return statearr_11156;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11137__$1,(8),inst_11085);
} else {
if((state_val_11138 === (14))){
var inst_11118 = (state_11137[(2)]);
var state_11137__$1 = state_11137;
var statearr_11160_11182 = state_11137__$1;
(statearr_11160_11182[(2)] = inst_11118);

(statearr_11160_11182[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (10))){
var state_11137__$1 = state_11137;
var statearr_11161_11183 = state_11137__$1;
(statearr_11161_11183[(2)] = null);

(statearr_11161_11183[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11138 === (8))){
var inst_11075 = (state_11137[(18)]);
var inst_11076 = (state_11137[(13)]);
var inst_11083 = (state_11137[(21)]);
var inst_11057 = (state_11137[(7)]);
var inst_11068 = (state_11137[(8)]);
var inst_11078 = (state_11137[(15)]);
var inst_11055 = (state_11137[(9)]);
var inst_11059 = (state_11137[(10)]);
var inst_11077 = (state_11137[(17)]);
var inst_11087 = (state_11137[(2)]);
var inst_11088 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11089 = [new cljs.core.Keyword(null,"items","items",1031954938)];
var inst_11090 = (new cljs.core.PersistentVector(null,1,(5),inst_11088,inst_11089,null));
var inst_11091 = (function (){var item = inst_11083;
var seq__11069 = inst_11075;
var chunk__11070 = inst_11076;
var count__11071 = inst_11077;
var i__11072 = inst_11078;
var subscription = inst_11068;
var feed_uid = inst_11059;
var feed_num = inst_11057;
var feed_data = inst_11055;
return ((function (item,seq__11069,chunk__11070,count__11071,i__11072,subscription,feed_uid,feed_num,feed_data,inst_11075,inst_11076,inst_11083,inst_11057,inst_11068,inst_11078,inst_11055,inst_11059,inst_11077,inst_11087,inst_11088,inst_11089,inst_11090,state_val_11138,c__7303__auto__){
return (function (p1__10930_SHARP_){
return cljs.core.conj.call(null,p1__10930_SHARP_,item);
});
;})(item,seq__11069,chunk__11070,count__11071,i__11072,subscription,feed_uid,feed_num,feed_data,inst_11075,inst_11076,inst_11083,inst_11057,inst_11068,inst_11078,inst_11055,inst_11059,inst_11077,inst_11087,inst_11088,inst_11089,inst_11090,state_val_11138,c__7303__auto__))
})();
var inst_11092 = cljs.core.swap_BANG_.call(null,ghoul.app.state.global,cljs.core.update_in,inst_11090,inst_11091);
var inst_11093 = (inst_11078 + (1));
var tmp11157 = inst_11075;
var tmp11158 = inst_11076;
var tmp11159 = inst_11077;
var inst_11075__$1 = tmp11157;
var inst_11076__$1 = tmp11158;
var inst_11077__$1 = tmp11159;
var inst_11078__$1 = inst_11093;
var state_11137__$1 = (function (){var statearr_11162 = state_11137;
(statearr_11162[(18)] = inst_11075__$1);

(statearr_11162[(13)] = inst_11076__$1);

(statearr_11162[(22)] = inst_11087);

(statearr_11162[(23)] = inst_11092);

(statearr_11162[(15)] = inst_11078__$1);

(statearr_11162[(17)] = inst_11077__$1);

return statearr_11162;
})();
var statearr_11163_11184 = state_11137__$1;
(statearr_11163_11184[(2)] = null);

(statearr_11163_11184[(1)] = (3));


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
});})(c__7303__auto__))
;
return ((function (switch__7288__auto__,c__7303__auto__){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_11167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11167[(0)] = state_machine__7289__auto__);

(statearr_11167[(1)] = (1));

return statearr_11167;
});
var state_machine__7289__auto____1 = (function (state_11137){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_11137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e11168){if((e11168 instanceof Object)){
var ex__7292__auto__ = e11168;
var statearr_11169_11185 = state_11137;
(statearr_11169_11185[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11186 = state_11137;
state_11137 = G__11186;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_11137){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_11137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto__))
})();
var state__7305__auto__ = (function (){var statearr_11170 = f__7304__auto__.call(null);
(statearr_11170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto__);

return statearr_11170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto__))
);

return c__7303__auto__;
});
ghoul.app.state.get_feed_group = (function get_feed_group(feed_uid){
var group_contains_feed_uid = (function (group,feed_uid__$1){
return cljs.core.some.call(null,(function (p1__11187_SHARP_){
return cljs.core._EQ_.call(null,p1__11187_SHARP_,feed_uid__$1);
}),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(group));
});
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (group_contains_feed_uid){
return (function (p1__11188_SHARP_){
return group_contains_feed_uid.call(null,p1__11188_SHARP_,feed_uid);
});})(group_contains_feed_uid))
,new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.app.state.global))));
});
ghoul.app.state.get_feed_idx = (function get_feed_idx(uid){
return cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__11189_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__11189_SHARP_)),uid);
}),cljs.core.map_indexed.call(null,cljs.core.vector,new cljs.core.Keyword(null,"feeds","feeds",855496306).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.app.state.global))))));
});
ghoul.app.state.increase_feed_pending = (function increase_feed_pending(uid){
var path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feeds","feeds",855496306),ghoul.app.state.get_feed_idx.call(null,uid),new cljs.core.Keyword(null,"pending","pending",-220036727)], null);
return cljs.core.swap_BANG_.call(null,ghoul.app.state.global,cljs.core.update_in,path,cljs.core.inc);
});
ghoul.app.state.include_feed = (function include_feed(item_data){
var vec__11192 = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.app.state.global));
var selected = cljs.core.nth.call(null,vec__11192,(0),null);
var id = cljs.core.nth.call(null,vec__11192,(1),null);
var feed_uid = new cljs.core.Keyword(null,"feeduid","feeduid",1367071876).cljs$core$IFn$_invoke$arity$1(item_data);
var group_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ghoul.app.state.get_feed_group.call(null,feed_uid));
ghoul.app.state.increase_feed_pending.call(null,feed_uid);

if((cljs.core._EQ_.call(null,id,feed_uid)) || (cljs.core._EQ_.call(null,id,group_name)) || (cljs.core._EQ_.call(null,selected,new cljs.core.Keyword(null,"all-items","all-items",1467247308)))){
return cljs.core.swap_BANG_.call(null,ghoul.app.state.global,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null),((function (vec__11192,selected,id,feed_uid,group_name){
return (function (p1__11190_SHARP_){
return cljs.core.conj.call(null,p1__11190_SHARP_,item_data);
});})(vec__11192,selected,id,feed_uid,group_name))
);
} else {
return null;
}
});
