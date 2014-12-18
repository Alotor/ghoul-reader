// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.state');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('hodgepodge.core');
goog.require('cljs_uuid_utils');
goog.require('ghoul.http');
goog.require('ghoul.feeds_storage');
goog.require('hodgepodge.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs_uuid_utils');
goog.require('ghoul.feeds_storage');
goog.require('ghoul.http');
ghoul.state.retrieve_all_feeds = (function retrieve_all_feeds(){
return cljs.core.flatten.call(null,cljs.core.map.call(null,cljs.core.second,ghoul.state.feed_store_temp));
});
goog.exportSymbol('ghoul.state.retrieve_all_feeds', ghoul.state.retrieve_all_feeds);
ghoul.state.global = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"current-view","current-view",-1037279042),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"feeds-view","feeds-view",1214517259),new cljs.core.Keyword(null,"expanded-view","expanded-view",1276146539),new cljs.core.Keyword(null,"show-menu","show-menu",14072792),false,new cljs.core.Keyword(null,"popup","popup",635890211),null,new cljs.core.Keyword(null,"selected","selected",574897764),null,new cljs.core.Keyword(null,"groups","groups",-136896102),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"general-group-uid","general-group-uid",-1869498229),null,new cljs.core.Keyword(null,"feeds","feeds",855496306),cljs.core.PersistentVector.EMPTY], null));
ghoul.state.get_group_data = (function get_group_data(uid){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__55559_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(p1__55559_SHARP_),uid);
}),new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.state.global))));
});
ghoul.state.get_group_idx = (function get_group_idx(uid){
return cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__55560_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__55560_SHARP_)),uid);
}),cljs.core.map_indexed.call(null,cljs.core.vector,new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.state.global))))));
});
ghoul.state.get_feed_data = (function get_feed_data(uid){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__55561_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(p1__55561_SHARP_),uid);
}),cljs.core.flatten.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.state.global))))));
});
ghoul.state.group_contains_feed_uid = (function group_contains_feed_uid(group,feed_uid){
return cljs.core.some.call(null,(function (p1__55562_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(p1__55562_SHARP_),feed_uid);
}),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(group));
});
ghoul.state.get_feed_group_uid = (function get_feed_group_uid(feed_uid){
return new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__55563_SHARP_){
return ghoul.state.group_contains_feed_uid.call(null,p1__55563_SHARP_,feed_uid);
}),new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.state.global)))));
});
ghoul.state.get_feed_idx_group = (function get_feed_idx_group(group,feed_uid){
return cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__55564_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__55564_SHARP_)),feed_uid);
}),cljs.core.map_indexed.call(null,cljs.core.vector,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(group)))));
});
ghoul.state.group_QMARK_ = (function group_QMARK_(uid){
return cljs.core.some.call(null,(function (p1__55565_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(p1__55565_SHARP_),uid);
}),new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.state.global)));
});
goog.exportSymbol('ghoul.state.group_QMARK_', ghoul.state.group_QMARK_);
ghoul.state.feed_QMARK_ = (function feed_QMARK_(uid){
return cljs.core.some.call(null,(function (p1__55566_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(p1__55566_SHARP_),uid);
}),cljs.core.flatten.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.state.global)))));
});
goog.exportSymbol('ghoul.state.feed_QMARK_', ghoul.state.feed_QMARK_);
ghoul.state.get_title = (function get_title(uid){
var group_data = ghoul.state.get_group_data.call(null,uid);
if((group_data == null)){
return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(ghoul.state.get_feed_data.call(null,uid));
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(group_data);
}
});
ghoul.state.get_group_subscriptions = (function get_group_subscriptions(uid){
var group_data = ghoul.state.get_group_data.call(null,uid);
return cljs.core.map.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(group_data));
});
ghoul.state.retrieve_feeds = (function retrieve_feeds(uid){
var c__5809__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto__){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto__){
return (function (state_55615){
var state_val_55616 = (state_55615[(1)]);
if((state_val_55616 === (5))){
var inst_55612 = (state_55615[(2)]);
var inst_55613 = cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"feeds","feeds",855496306),inst_55612);
var state_55615__$1 = state_55615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55615__$1,inst_55613);
} else {
if((state_val_55616 === (4))){
var inst_55609 = (state_55615[(2)]);
var inst_55610 = ghoul.feeds_storage.retrieve_feeds_uids.call(null,inst_55609);
var state_55615__$1 = state_55615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55615__$1,(5),inst_55610);
} else {
if((state_val_55616 === (3))){
var inst_55607 = ghoul.state.get_group_subscriptions.call(null,uid);
var state_55615__$1 = state_55615;
var statearr_55617_55629 = state_55615__$1;
(statearr_55617_55629[(2)] = inst_55607);

(statearr_55617_55629[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55616 === (2))){
var inst_55603 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55604 = [uid];
var inst_55605 = (new cljs.core.PersistentVector(null,1,(5),inst_55603,inst_55604,null));
var state_55615__$1 = state_55615;
var statearr_55618_55630 = state_55615__$1;
(statearr_55618_55630[(2)] = inst_55605);

(statearr_55618_55630[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55616 === (1))){
var inst_55598 = cljs.core.PersistentVector.EMPTY;
var inst_55599 = cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"feeds","feeds",855496306),inst_55598);
var inst_55600 = ghoul.state.get_group_data.call(null,uid);
var inst_55601 = (inst_55600 == null);
var state_55615__$1 = (function (){var statearr_55619 = state_55615;
(statearr_55619[(7)] = inst_55599);

return statearr_55619;
})();
if(cljs.core.truth_(inst_55601)){
var statearr_55620_55631 = state_55615__$1;
(statearr_55620_55631[(1)] = (2));

} else {
var statearr_55621_55632 = state_55615__$1;
(statearr_55621_55632[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__5809__auto__))
;
return ((function (switch__5794__auto__,c__5809__auto__){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_55625 = [null,null,null,null,null,null,null,null];
(statearr_55625[(0)] = state_machine__5795__auto__);

(statearr_55625[(1)] = (1));

return statearr_55625;
});
var state_machine__5795__auto____1 = (function (state_55615){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_55615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e55626){if((e55626 instanceof Object)){
var ex__5798__auto__ = e55626;
var statearr_55627_55633 = state_55615;
(statearr_55627_55633[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55634 = state_55615;
state_55615 = G__55634;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_55615){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_55615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_55628 = f__5810__auto__.call(null);
(statearr_55628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_55628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto__))
);

return c__5809__auto__;
});
ghoul.state.select_feed = (function select_feed(uid){
cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),uid);

return ghoul.state.retrieve_feeds.call(null,uid);
});
ghoul.state.load_all_items = (function load_all_items(){
var c__5809__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto__){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto__){
return (function (state_55661){
var state_val_55662 = (state_55661[(1)]);
if((state_val_55662 === (3))){
var inst_55658 = (state_55661[(2)]);
var inst_55659 = cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"feeds","feeds",855496306),inst_55658);
var state_55661__$1 = state_55661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55661__$1,inst_55659);
} else {
if((state_val_55662 === (2))){
var inst_55655 = (state_55661[(2)]);
var inst_55656 = ghoul.feeds_storage.retrieve_all_feeds.call(null);
var state_55661__$1 = (function (){var statearr_55663 = state_55661;
(statearr_55663[(7)] = inst_55655);

return statearr_55663;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55661__$1,(3),inst_55656);
} else {
if((state_val_55662 === (1))){
var inst_55653 = ghoul.feeds_storage.init_database.call(null);
var state_55661__$1 = state_55661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55661__$1,(2),inst_55653);
} else {
return null;
}
}
}
});})(c__5809__auto__))
;
return ((function (switch__5794__auto__,c__5809__auto__){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_55667 = [null,null,null,null,null,null,null,null];
(statearr_55667[(0)] = state_machine__5795__auto__);

(statearr_55667[(1)] = (1));

return statearr_55667;
});
var state_machine__5795__auto____1 = (function (state_55661){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_55661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e55668){if((e55668 instanceof Object)){
var ex__5798__auto__ = e55668;
var statearr_55669_55671 = state_55661;
(statearr_55669_55671[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55672 = state_55661;
state_55661 = G__55672;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_55661){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_55661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_55670 = f__5810__auto__.call(null);
(statearr_55670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_55670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto__))
);

return c__5809__auto__;
});
ghoul.state.select_all_items = (function select_all_items(){
cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"all-items","all-items",1467247308));

return ghoul.state.load_all_items.call(null);
});
ghoul.state.load_favorites_items = (function load_favorites_items(){
return cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"feeds","feeds",855496306),cljs.core.PersistentVector.EMPTY);
});
ghoul.state.select_favorites_items = (function select_favorites_items(){
cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"favorite-items","favorite-items",389040315));

return ghoul.state.load_favorites_items.call(null);
});
ghoul.state.load_shared_items = (function load_shared_items(){
return cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"feeds","feeds",855496306),cljs.core.PersistentVector.EMPTY);
});
ghoul.state.select_shared_items = (function select_shared_items(){
cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"shared-items","shared-items",-572000165));

return ghoul.state.load_shared_items.call(null);
});
ghoul.state.toggle_compact_view = (function toggle_compact_view(){
return cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"feeds-view","feeds-view",1214517259),new cljs.core.Keyword(null,"compact-view","compact-view",1458667595));
});
ghoul.state.toggle_expanded_view = (function toggle_expanded_view(){
return cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"feeds-view","feeds-view",1214517259),new cljs.core.Keyword(null,"expanded-view","expanded-view",1276146539));
});
ghoul.state.toggle_menu = (function toggle_menu(){
return cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"show-menu","show-menu",14072792),cljs.core.not.call(null,new cljs.core.Keyword(null,"show-menu","show-menu",14072792).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.state.global))));
});
ghoul.state.toggle_feed_popup = (function toggle_feed_popup(){
return cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"popup","popup",635890211),(((new cljs.core.Keyword(null,"popup","popup",635890211).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.state.global)) == null))?new cljs.core.Keyword(null,"feed","feed",-1566486205):null));
});
ghoul.state.add_general_group = (function add_general_group(){
var general_group = cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"General"),new cljs.core.Keyword(null,"pending","pending",-220036727),(0)),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true),new cljs.core.Keyword(null,"uid","uid",-1447769400),cljs_uuid_utils.uuid_string.call(null,cljs_uuid_utils.make_random_uuid.call(null))),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),cljs.core.PersistentVector.EMPTY);
cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"general-group-uid","general-group-uid",-1869498229),new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(general_group));

return cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"groups","groups",-136896102)], null),((function (general_group){
return (function (p1__55673_SHARP_){
return cljs.core.conj.call(null,p1__55673_SHARP_,general_group);
});})(general_group))
);
});
ghoul.state.add_rss_subscription = (function add_rss_subscription(feed_url){
var c__5809__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto__){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto__){
return (function (state_55910){
var state_val_55911 = (state_55910[(1)]);
if((state_val_55911 === (7))){
var inst_55829 = (state_55910[(7)]);
var inst_55840 = (state_55910[(8)]);
var inst_55827 = (state_55910[(9)]);
var inst_55823 = (state_55910[(10)]);
var inst_55899 = (state_55910[(2)]);
var inst_55900 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55901 = [new cljs.core.Keyword(null,"groups","groups",-136896102),inst_55823,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776)];
var inst_55902 = (new cljs.core.PersistentVector(null,3,(5),inst_55900,inst_55901,null));
var inst_55903 = (function (){var subscription = inst_55840;
var feed_num = inst_55829;
var feed_data = inst_55827;
var group_idx = inst_55823;
return ((function (subscription,feed_num,feed_data,group_idx,inst_55829,inst_55840,inst_55827,inst_55823,inst_55899,inst_55900,inst_55901,inst_55902,state_val_55911,c__5809__auto__){
return (function (p1__55675_SHARP_){
return cljs.core.conj.call(null,p1__55675_SHARP_,subscription);
});
;})(subscription,feed_num,feed_data,group_idx,inst_55829,inst_55840,inst_55827,inst_55823,inst_55899,inst_55900,inst_55901,inst_55902,state_val_55911,c__5809__auto__))
})();
var inst_55904 = cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.update_in,inst_55902,inst_55903);
var inst_55905 = cljs.core.deref.call(null,ghoul.state.global);
var inst_55906 = new cljs.core.Keyword(null,"general-group-uid","general-group-uid",-1869498229).cljs$core$IFn$_invoke$arity$1(inst_55905);
var inst_55907 = (function (){var subscription = inst_55840;
var feed_num = inst_55829;
var feed_data = inst_55827;
var group_idx = inst_55823;
return ((function (subscription,feed_num,feed_data,group_idx,inst_55829,inst_55840,inst_55827,inst_55823,inst_55899,inst_55900,inst_55901,inst_55902,inst_55903,inst_55904,inst_55905,inst_55906,state_val_55911,c__5809__auto__){
return (function (p1__55676_SHARP_){
return (feed_num + p1__55676_SHARP_);
});
;})(subscription,feed_num,feed_data,group_idx,inst_55829,inst_55840,inst_55827,inst_55823,inst_55899,inst_55900,inst_55901,inst_55902,inst_55903,inst_55904,inst_55905,inst_55906,state_val_55911,c__5809__auto__))
})();
var inst_55908 = ghoul.state.update_uid_count.call(null,inst_55906,inst_55907);
var state_55910__$1 = (function (){var statearr_55912 = state_55910;
(statearr_55912[(11)] = inst_55899);

(statearr_55912[(12)] = inst_55904);

return statearr_55912;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55910__$1,inst_55908);
} else {
if((state_val_55911 === (1))){
var inst_55813 = cljs.core.deref.call(null,ghoul.state.global);
var inst_55814 = new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(inst_55813);
var inst_55815 = cljs.core.empty_QMARK_.call(null,inst_55814);
var state_55910__$1 = state_55910;
if(inst_55815){
var statearr_55913_55949 = state_55910__$1;
(statearr_55913_55949[(1)] = (2));

} else {
var statearr_55914_55950 = state_55910__$1;
(statearr_55914_55950[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55911 === (4))){
var inst_55820 = (state_55910[(2)]);
var inst_55821 = cljs.core.deref.call(null,ghoul.state.global);
var inst_55822 = new cljs.core.Keyword(null,"general-group-uid","general-group-uid",-1869498229).cljs$core$IFn$_invoke$arity$1(inst_55821);
var inst_55823 = ghoul.state.get_group_idx.call(null,inst_55822);
var inst_55824 = ghoul.http.get_rss.call(null,feed_url);
var state_55910__$1 = (function (){var statearr_55915 = state_55910;
(statearr_55915[(10)] = inst_55823);

(statearr_55915[(13)] = inst_55820);

return statearr_55915;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55910__$1,(5),inst_55824);
} else {
if((state_val_55911 === (15))){
var inst_55869 = (state_55910[(14)]);
var inst_55873 = cljs.core.chunk_first.call(null,inst_55869);
var inst_55874 = cljs.core.chunk_rest.call(null,inst_55869);
var inst_55875 = cljs.core.count.call(null,inst_55873);
var inst_55847 = inst_55874;
var inst_55848 = inst_55873;
var inst_55849 = inst_55875;
var inst_55850 = (0);
var state_55910__$1 = (function (){var statearr_55916 = state_55910;
(statearr_55916[(15)] = inst_55847);

(statearr_55916[(16)] = inst_55849);

(statearr_55916[(17)] = inst_55850);

(statearr_55916[(18)] = inst_55848);

return statearr_55916;
})();
var statearr_55917_55951 = state_55910__$1;
(statearr_55917_55951[(2)] = null);

(statearr_55917_55951[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55911 === (13))){
var state_55910__$1 = state_55910;
var statearr_55918_55952 = state_55910__$1;
(statearr_55918_55952[(2)] = null);

(statearr_55918_55952[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55911 === (6))){
var inst_55849 = (state_55910[(16)]);
var inst_55850 = (state_55910[(17)]);
var inst_55852 = (inst_55850 < inst_55849);
var inst_55853 = inst_55852;
var state_55910__$1 = state_55910;
if(cljs.core.truth_(inst_55853)){
var statearr_55919_55953 = state_55910__$1;
(statearr_55919_55953[(1)] = (8));

} else {
var statearr_55920_55954 = state_55910__$1;
(statearr_55920_55954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55911 === (17))){
var inst_55892 = (state_55910[(2)]);
var state_55910__$1 = state_55910;
var statearr_55921_55955 = state_55910__$1;
(statearr_55921_55955[(2)] = inst_55892);

(statearr_55921_55955[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55911 === (3))){
var state_55910__$1 = state_55910;
var statearr_55922_55956 = state_55910__$1;
(statearr_55922_55956[(2)] = null);

(statearr_55922_55956[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55911 === (12))){
var inst_55869 = (state_55910[(14)]);
var inst_55871 = cljs.core.chunked_seq_QMARK_.call(null,inst_55869);
var state_55910__$1 = state_55910;
if(inst_55871){
var statearr_55926_55957 = state_55910__$1;
(statearr_55926_55957[(1)] = (15));

} else {
var statearr_55927_55958 = state_55910__$1;
(statearr_55927_55958[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55911 === (2))){
var inst_55817 = ghoul.state.add_general_group.call(null);
var state_55910__$1 = state_55910;
var statearr_55928_55959 = state_55910__$1;
(statearr_55928_55959[(2)] = inst_55817);

(statearr_55928_55959[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55911 === (11))){
var inst_55855 = (state_55910[(19)]);
var inst_55829 = (state_55910[(7)]);
var inst_55847 = (state_55910[(15)]);
var inst_55849 = (state_55910[(16)]);
var inst_55840 = (state_55910[(8)]);
var inst_55827 = (state_55910[(9)]);
var inst_55823 = (state_55910[(10)]);
var inst_55850 = (state_55910[(17)]);
var inst_55848 = (state_55910[(18)]);
var inst_55860 = (state_55910[(2)]);
var inst_55861 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55862 = [new cljs.core.Keyword(null,"feeds","feeds",855496306)];
var inst_55863 = (new cljs.core.PersistentVector(null,1,(5),inst_55861,inst_55862,null));
var inst_55864 = (function (){var feed = inst_55855;
var seq__55841 = inst_55847;
var chunk__55842 = inst_55848;
var count__55843 = inst_55849;
var i__55844 = inst_55850;
var subscription = inst_55840;
var feed_num = inst_55829;
var feed_data = inst_55827;
var group_idx = inst_55823;
return ((function (feed,seq__55841,chunk__55842,count__55843,i__55844,subscription,feed_num,feed_data,group_idx,inst_55855,inst_55829,inst_55847,inst_55849,inst_55840,inst_55827,inst_55823,inst_55850,inst_55848,inst_55860,inst_55861,inst_55862,inst_55863,state_val_55911,c__5809__auto__){
return (function (p1__55674_SHARP_){
return cljs.core.conj.call(null,p1__55674_SHARP_,feed);
});
;})(feed,seq__55841,chunk__55842,count__55843,i__55844,subscription,feed_num,feed_data,group_idx,inst_55855,inst_55829,inst_55847,inst_55849,inst_55840,inst_55827,inst_55823,inst_55850,inst_55848,inst_55860,inst_55861,inst_55862,inst_55863,state_val_55911,c__5809__auto__))
})();
var inst_55865 = cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.update_in,inst_55863,inst_55864);
var inst_55866 = (inst_55850 + (1));
var tmp55923 = inst_55847;
var tmp55924 = inst_55849;
var tmp55925 = inst_55848;
var inst_55847__$1 = tmp55923;
var inst_55848__$1 = tmp55925;
var inst_55849__$1 = tmp55924;
var inst_55850__$1 = inst_55866;
var state_55910__$1 = (function (){var statearr_55929 = state_55910;
(statearr_55929[(20)] = inst_55865);

(statearr_55929[(15)] = inst_55847__$1);

(statearr_55929[(16)] = inst_55849__$1);

(statearr_55929[(17)] = inst_55850__$1);

(statearr_55929[(18)] = inst_55848__$1);

(statearr_55929[(21)] = inst_55860);

return statearr_55929;
})();
var statearr_55930_55960 = state_55910__$1;
(statearr_55930_55960[(2)] = null);

(statearr_55930_55960[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55911 === (9))){
var inst_55869 = (state_55910[(14)]);
var inst_55847 = (state_55910[(15)]);
var inst_55869__$1 = cljs.core.seq.call(null,inst_55847);
var state_55910__$1 = (function (){var statearr_55931 = state_55910;
(statearr_55931[(14)] = inst_55869__$1);

return statearr_55931;
})();
if(inst_55869__$1){
var statearr_55932_55961 = state_55910__$1;
(statearr_55932_55961[(1)] = (12));

} else {
var statearr_55933_55962 = state_55910__$1;
(statearr_55933_55962[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55911 === (5))){
var inst_55829 = (state_55910[(7)]);
var inst_55827 = (state_55910[(9)]);
var inst_55826 = (state_55910[(2)]);
var inst_55827__$1 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_55826);
var inst_55828 = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(inst_55827__$1);
var inst_55829__$1 = cljs.core.count.call(null,inst_55828);
var inst_55830 = cljs.core.PersistentHashMap.EMPTY;
var inst_55831 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(inst_55827__$1);
var inst_55832 = cljs.core.assoc.call(null,inst_55830,new cljs.core.Keyword(null,"title","title",636505583),inst_55831);
var inst_55833 = cljs_uuid_utils.make_random_uuid.call(null);
var inst_55834 = cljs_uuid_utils.uuid_string.call(null,inst_55833);
var inst_55835 = cljs.core.assoc.call(null,inst_55832,new cljs.core.Keyword(null,"uid","uid",-1447769400),inst_55834);
var inst_55836 = new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(inst_55827__$1);
var inst_55837 = cljs.core.assoc.call(null,inst_55835,new cljs.core.Keyword(null,"site-url","site-url",1492702733),inst_55836);
var inst_55838 = cljs.core.assoc.call(null,inst_55837,new cljs.core.Keyword(null,"feed-url","feed-url",1903210362),feed_url);
var inst_55839 = cljs.core.assoc.call(null,inst_55838,new cljs.core.Keyword(null,"favicon","favicon",-1214000341),"/images/favicon.png");
var inst_55840 = cljs.core.assoc.call(null,inst_55839,new cljs.core.Keyword(null,"pending","pending",-220036727),inst_55829__$1);
var inst_55845 = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(inst_55827__$1);
var inst_55846 = cljs.core.seq.call(null,inst_55845);
var inst_55847 = inst_55846;
var inst_55848 = null;
var inst_55849 = (0);
var inst_55850 = (0);
var state_55910__$1 = (function (){var statearr_55934 = state_55910;
(statearr_55934[(7)] = inst_55829__$1);

(statearr_55934[(15)] = inst_55847);

(statearr_55934[(16)] = inst_55849);

(statearr_55934[(8)] = inst_55840);

(statearr_55934[(9)] = inst_55827__$1);

(statearr_55934[(17)] = inst_55850);

(statearr_55934[(18)] = inst_55848);

return statearr_55934;
})();
var statearr_55935_55963 = state_55910__$1;
(statearr_55935_55963[(2)] = null);

(statearr_55935_55963[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55911 === (14))){
var inst_55895 = (state_55910[(2)]);
var state_55910__$1 = state_55910;
var statearr_55936_55964 = state_55910__$1;
(statearr_55936_55964[(2)] = inst_55895);

(statearr_55936_55964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55911 === (16))){
var inst_55869 = (state_55910[(14)]);
var inst_55840 = (state_55910[(8)]);
var inst_55878 = (state_55910[(22)]);
var inst_55878__$1 = cljs.core.first.call(null,inst_55869);
var inst_55879 = new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(inst_55840);
var inst_55880 = cljs.core.assoc.call(null,inst_55878__$1,new cljs.core.Keyword(null,"feeduid","feeduid",1367071876),inst_55879);
var inst_55881 = ghoul.feeds_storage.add_feed.call(null,inst_55880);
var state_55910__$1 = (function (){var statearr_55937 = state_55910;
(statearr_55937[(22)] = inst_55878__$1);

return statearr_55937;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55910__$1,(18),inst_55881);
} else {
if((state_val_55911 === (10))){
var inst_55897 = (state_55910[(2)]);
var state_55910__$1 = state_55910;
var statearr_55938_55965 = state_55910__$1;
(statearr_55938_55965[(2)] = inst_55897);

(statearr_55938_55965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55911 === (18))){
var inst_55869 = (state_55910[(14)]);
var inst_55829 = (state_55910[(7)]);
var inst_55849 = (state_55910[(16)]);
var inst_55840 = (state_55910[(8)]);
var inst_55827 = (state_55910[(9)]);
var inst_55823 = (state_55910[(10)]);
var inst_55850 = (state_55910[(17)]);
var inst_55848 = (state_55910[(18)]);
var inst_55878 = (state_55910[(22)]);
var inst_55883 = (state_55910[(2)]);
var inst_55884 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55885 = [new cljs.core.Keyword(null,"feeds","feeds",855496306)];
var inst_55886 = (new cljs.core.PersistentVector(null,1,(5),inst_55884,inst_55885,null));
var inst_55887 = (function (){var temp__4126__auto__ = inst_55869;
var subscription = inst_55840;
var feed = inst_55878;
var feed_data = inst_55827;
var count__55843 = inst_55849;
var chunk__55842 = inst_55848;
var seq__55841 = inst_55869;
var feed_num = inst_55829;
var i__55844 = inst_55850;
var group_idx = inst_55823;
return ((function (temp__4126__auto__,subscription,feed,feed_data,count__55843,chunk__55842,seq__55841,feed_num,i__55844,group_idx,inst_55869,inst_55829,inst_55849,inst_55840,inst_55827,inst_55823,inst_55850,inst_55848,inst_55878,inst_55883,inst_55884,inst_55885,inst_55886,state_val_55911,c__5809__auto__){
return (function (p1__55674_SHARP_){
return cljs.core.conj.call(null,p1__55674_SHARP_,feed);
});
;})(temp__4126__auto__,subscription,feed,feed_data,count__55843,chunk__55842,seq__55841,feed_num,i__55844,group_idx,inst_55869,inst_55829,inst_55849,inst_55840,inst_55827,inst_55823,inst_55850,inst_55848,inst_55878,inst_55883,inst_55884,inst_55885,inst_55886,state_val_55911,c__5809__auto__))
})();
var inst_55888 = cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.update_in,inst_55886,inst_55887);
var inst_55889 = cljs.core.next.call(null,inst_55869);
var inst_55847 = inst_55889;
var inst_55848__$1 = null;
var inst_55849__$1 = (0);
var inst_55850__$1 = (0);
var state_55910__$1 = (function (){var statearr_55939 = state_55910;
(statearr_55939[(23)] = inst_55883);

(statearr_55939[(24)] = inst_55888);

(statearr_55939[(15)] = inst_55847);

(statearr_55939[(16)] = inst_55849__$1);

(statearr_55939[(17)] = inst_55850__$1);

(statearr_55939[(18)] = inst_55848__$1);

return statearr_55939;
})();
var statearr_55940_55966 = state_55910__$1;
(statearr_55940_55966[(2)] = null);

(statearr_55940_55966[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55911 === (8))){
var inst_55855 = (state_55910[(19)]);
var inst_55840 = (state_55910[(8)]);
var inst_55850 = (state_55910[(17)]);
var inst_55848 = (state_55910[(18)]);
var inst_55855__$1 = cljs.core._nth.call(null,inst_55848,inst_55850);
var inst_55856 = new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(inst_55840);
var inst_55857 = cljs.core.assoc.call(null,inst_55855__$1,new cljs.core.Keyword(null,"feeduid","feeduid",1367071876),inst_55856);
var inst_55858 = ghoul.feeds_storage.add_feed.call(null,inst_55857);
var state_55910__$1 = (function (){var statearr_55941 = state_55910;
(statearr_55941[(19)] = inst_55855__$1);

return statearr_55941;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55910__$1,(11),inst_55858);
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
}
}
}
});})(c__5809__auto__))
;
return ((function (switch__5794__auto__,c__5809__auto__){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_55945 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55945[(0)] = state_machine__5795__auto__);

(statearr_55945[(1)] = (1));

return statearr_55945;
});
var state_machine__5795__auto____1 = (function (state_55910){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_55910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e55946){if((e55946 instanceof Object)){
var ex__5798__auto__ = e55946;
var statearr_55947_55967 = state_55910;
(statearr_55947_55967[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55968 = state_55910;
state_55910 = G__55968;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_55910){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_55910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_55948 = f__5810__auto__.call(null);
(statearr_55948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_55948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto__))
);

return c__5809__auto__;
});
ghoul.state.store_state = (function store_state(state){
return cljs.core.assoc_BANG_.call(null,hodgepodge.core.local_storage,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"feeds","feeds",855496306)));
});
ghoul.state.restore_state = (function restore_state(state_atom){
return cljs.core.reset_BANG_.call(null,state_atom,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(hodgepodge.core.local_storage));
});
ghoul.state.load_selected_feeds = (function load_selected_feeds(item){
console.log("Loading",item);

if(cljs.core._EQ_.call(null,item,new cljs.core.Keyword(null,"all-items","all-items",1467247308))){
return ghoul.state.load_all_items.call(null);
} else {
if(cljs.core._EQ_.call(null,item,new cljs.core.Keyword(null,"shared-items","shared-items",-572000165))){
return ghoul.state.load_shared_items.call(null);
} else {
if(cljs.core._EQ_.call(null,item,new cljs.core.Keyword(null,"favorite-items","favorite-items",389040315))){
return ghoul.state.load_favorites_items.call(null);
} else {
return ghoul.state.retrieve_feeds.call(null,item);

}
}
}
});
ghoul.state.selected_QMARK_ = (function selected_QMARK_(item){
return cljs.core._EQ_.call(null,item,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.state.global)));
});
ghoul.state.initialize_state = (function initialize_state(){
var old_state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(hodgepodge.core.local_storage);
if(!((old_state == null))){
ghoul.state.restore_state.call(null,ghoul.state.global);

ghoul.state.load_selected_feeds.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.state.global)));
} else {
}

return cljs.core.add_watch.call(null,ghoul.state.global,null,((function (old_state){
return (function (context,key,ref,old_value,new_value){
return ghoul.state.store_state.call(null,cljs.core.deref.call(null,ghoul.state.global));
});})(old_state))
);
});
ghoul.state.get_update_path = (function get_update_path(uid){
if(cljs.core.truth_(ghoul.state.group_QMARK_.call(null,uid))){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"groups","groups",-136896102)),ghoul.state.get_group_idx.call(null,uid));
} else {
var group_uid = ghoul.state.get_feed_group_uid.call(null,uid);
var group = ghoul.state.get_group_data.call(null,group_uid);
var group_idx = ghoul.state.get_group_idx.call(null,group_uid);
var feed_idx = ghoul.state.get_feed_idx_group.call(null,group,uid);
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"groups","groups",-136896102)),group_idx),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776)),feed_idx);
}
});
ghoul.state.set_uid_count = (function set_uid_count(uid,new_count){
var path = cljs.core.conj.call(null,ghoul.state.get_update_path.call(null,uid),new cljs.core.Keyword(null,"pending","pending",-220036727));
return cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.assoc_in,path,new_count);
});
goog.exportSymbol('ghoul.state.set_uid_count', ghoul.state.set_uid_count);
ghoul.state.update_uid_count = (function update_uid_count(uid,update_fn){
var path = cljs.core.conj.call(null,ghoul.state.get_update_path.call(null,uid),new cljs.core.Keyword(null,"pending","pending",-220036727));
return cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.update_in,path,update_fn);
});
ghoul.state.list_uid_url = (function list_uid_url(){
return cljs.core.map.call(null,(function (p1__55969_SHARP_){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(p1__55969_SHARP_)),new cljs.core.Keyword(null,"feed-url","feed-url",1903210362).cljs$core$IFn$_invoke$arity$1(p1__55969_SHARP_));
}),cljs.core.flatten.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.state.global)))));
});
ghoul.state.include_feed = (function include_feed(feed_data){
var feed_uid = new cljs.core.Keyword(null,"feeduid","feeduid",1367071876).cljs$core$IFn$_invoke$arity$1(feed_data);
var group_uid = ghoul.state.get_feed_group_uid.call(null,feed_uid);
ghoul.state.update_uid_count.call(null,feed_uid,cljs.core.inc);

ghoul.state.update_uid_count.call(null,group_uid,cljs.core.inc);

if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.state.global)),feed_uid)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.state.global)),group_uid)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.state.global)),new cljs.core.Keyword(null,"all-items","all-items",1467247308)))){
return cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feeds","feeds",855496306)], null),((function (feed_uid,group_uid){
return (function (p1__55970_SHARP_){
return cljs.core.conj.call(null,p1__55970_SHARP_,feed_data);
});})(feed_uid,group_uid))
);
} else {
return null;
}
});
