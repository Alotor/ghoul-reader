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
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__49417_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(p1__49417_SHARP_),uid);
}),new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.state.global))));
});
ghoul.state.get_group_idx = (function get_group_idx(uid){
return cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__49418_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__49418_SHARP_)),uid);
}),cljs.core.map_indexed.call(null,cljs.core.vector,new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.state.global))))));
});
ghoul.state.get_feed_data = (function get_feed_data(uid){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__49419_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(p1__49419_SHARP_),uid);
}),cljs.core.flatten.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.state.global))))));
});
ghoul.state.group_contains_feed_uid = (function group_contains_feed_uid(group,feed_uid){
return cljs.core.some.call(null,(function (p1__49420_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(p1__49420_SHARP_),feed_uid);
}),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(group));
});
ghoul.state.get_feed_group_uid = (function get_feed_group_uid(feed_uid){
return new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__49421_SHARP_){
return ghoul.state.group_contains_feed_uid.call(null,p1__49421_SHARP_,feed_uid);
}),new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.state.global)))));
});
ghoul.state.get_feed_idx_group = (function get_feed_idx_group(group,feed_uid){
return cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__49422_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__49422_SHARP_)),feed_uid);
}),cljs.core.map_indexed.call(null,cljs.core.vector,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(group)))));
});
ghoul.state.group_QMARK_ = (function group_QMARK_(uid){
return cljs.core.some.call(null,(function (p1__49423_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(p1__49423_SHARP_),uid);
}),new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.state.global)));
});
goog.exportSymbol('ghoul.state.group_QMARK_', ghoul.state.group_QMARK_);
ghoul.state.feed_QMARK_ = (function feed_QMARK_(uid){
return cljs.core.some.call(null,(function (p1__49424_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(p1__49424_SHARP_),uid);
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
return (function (state_49473){
var state_val_49474 = (state_49473[(1)]);
if((state_val_49474 === (5))){
var inst_49470 = (state_49473[(2)]);
var inst_49471 = cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"feeds","feeds",855496306),inst_49470);
var state_49473__$1 = state_49473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49473__$1,inst_49471);
} else {
if((state_val_49474 === (4))){
var inst_49467 = (state_49473[(2)]);
var inst_49468 = ghoul.feeds_storage.retrieve_feeds_uids.call(null,inst_49467);
var state_49473__$1 = state_49473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49473__$1,(5),inst_49468);
} else {
if((state_val_49474 === (3))){
var inst_49465 = ghoul.state.get_group_subscriptions.call(null,uid);
var state_49473__$1 = state_49473;
var statearr_49475_49487 = state_49473__$1;
(statearr_49475_49487[(2)] = inst_49465);

(statearr_49475_49487[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49474 === (2))){
var inst_49461 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49462 = [uid];
var inst_49463 = (new cljs.core.PersistentVector(null,1,(5),inst_49461,inst_49462,null));
var state_49473__$1 = state_49473;
var statearr_49476_49488 = state_49473__$1;
(statearr_49476_49488[(2)] = inst_49463);

(statearr_49476_49488[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49474 === (1))){
var inst_49456 = cljs.core.PersistentVector.EMPTY;
var inst_49457 = cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"feeds","feeds",855496306),inst_49456);
var inst_49458 = ghoul.state.get_group_data.call(null,uid);
var inst_49459 = (inst_49458 == null);
var state_49473__$1 = (function (){var statearr_49477 = state_49473;
(statearr_49477[(7)] = inst_49457);

return statearr_49477;
})();
if(cljs.core.truth_(inst_49459)){
var statearr_49478_49489 = state_49473__$1;
(statearr_49478_49489[(1)] = (2));

} else {
var statearr_49479_49490 = state_49473__$1;
(statearr_49479_49490[(1)] = (3));

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
var statearr_49483 = [null,null,null,null,null,null,null,null];
(statearr_49483[(0)] = state_machine__5795__auto__);

(statearr_49483[(1)] = (1));

return statearr_49483;
});
var state_machine__5795__auto____1 = (function (state_49473){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_49473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e49484){if((e49484 instanceof Object)){
var ex__5798__auto__ = e49484;
var statearr_49485_49491 = state_49473;
(statearr_49485_49491[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49492 = state_49473;
state_49473 = G__49492;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_49473){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_49473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_49486 = f__5810__auto__.call(null);
(statearr_49486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_49486;
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
return (function (state_49519){
var state_val_49520 = (state_49519[(1)]);
if((state_val_49520 === (3))){
var inst_49516 = (state_49519[(2)]);
var inst_49517 = cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"feeds","feeds",855496306),inst_49516);
var state_49519__$1 = state_49519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49519__$1,inst_49517);
} else {
if((state_val_49520 === (2))){
var inst_49513 = (state_49519[(2)]);
var inst_49514 = ghoul.feeds_storage.retrieve_all_feeds.call(null);
var state_49519__$1 = (function (){var statearr_49521 = state_49519;
(statearr_49521[(7)] = inst_49513);

return statearr_49521;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49519__$1,(3),inst_49514);
} else {
if((state_val_49520 === (1))){
var inst_49511 = ghoul.feeds_storage.init_database.call(null);
var state_49519__$1 = state_49519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49519__$1,(2),inst_49511);
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
var statearr_49525 = [null,null,null,null,null,null,null,null];
(statearr_49525[(0)] = state_machine__5795__auto__);

(statearr_49525[(1)] = (1));

return statearr_49525;
});
var state_machine__5795__auto____1 = (function (state_49519){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_49519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e49526){if((e49526 instanceof Object)){
var ex__5798__auto__ = e49526;
var statearr_49527_49529 = state_49519;
(statearr_49527_49529[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49530 = state_49519;
state_49519 = G__49530;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_49519){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_49519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_49528 = f__5810__auto__.call(null);
(statearr_49528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_49528;
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
return (function (p1__49531_SHARP_){
return cljs.core.conj.call(null,p1__49531_SHARP_,general_group);
});})(general_group))
);
});
ghoul.state.add_rss_subscription = (function add_rss_subscription(feed_url){
var c__5809__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto__){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto__){
return (function (state_49768){
var state_val_49769 = (state_49768[(1)]);
if((state_val_49769 === (7))){
var inst_49685 = (state_49768[(7)]);
var inst_49681 = (state_49768[(8)]);
var inst_49698 = (state_49768[(9)]);
var inst_49687 = (state_49768[(10)]);
var inst_49757 = (state_49768[(2)]);
var inst_49758 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49759 = [new cljs.core.Keyword(null,"groups","groups",-136896102),inst_49681,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776)];
var inst_49760 = (new cljs.core.PersistentVector(null,3,(5),inst_49758,inst_49759,null));
var inst_49761 = (function (){var subscription = inst_49698;
var feed_num = inst_49687;
var feed_data = inst_49685;
var group_idx = inst_49681;
return ((function (subscription,feed_num,feed_data,group_idx,inst_49685,inst_49681,inst_49698,inst_49687,inst_49757,inst_49758,inst_49759,inst_49760,state_val_49769,c__5809__auto__){
return (function (p1__49533_SHARP_){
return cljs.core.conj.call(null,p1__49533_SHARP_,subscription);
});
;})(subscription,feed_num,feed_data,group_idx,inst_49685,inst_49681,inst_49698,inst_49687,inst_49757,inst_49758,inst_49759,inst_49760,state_val_49769,c__5809__auto__))
})();
var inst_49762 = cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.update_in,inst_49760,inst_49761);
var inst_49763 = cljs.core.deref.call(null,ghoul.state.global);
var inst_49764 = new cljs.core.Keyword(null,"general-group-uid","general-group-uid",-1869498229).cljs$core$IFn$_invoke$arity$1(inst_49763);
var inst_49765 = (function (){var subscription = inst_49698;
var feed_num = inst_49687;
var feed_data = inst_49685;
var group_idx = inst_49681;
return ((function (subscription,feed_num,feed_data,group_idx,inst_49685,inst_49681,inst_49698,inst_49687,inst_49757,inst_49758,inst_49759,inst_49760,inst_49761,inst_49762,inst_49763,inst_49764,state_val_49769,c__5809__auto__){
return (function (p1__49534_SHARP_){
return (feed_num + p1__49534_SHARP_);
});
;})(subscription,feed_num,feed_data,group_idx,inst_49685,inst_49681,inst_49698,inst_49687,inst_49757,inst_49758,inst_49759,inst_49760,inst_49761,inst_49762,inst_49763,inst_49764,state_val_49769,c__5809__auto__))
})();
var inst_49766 = ghoul.state.update_uid_count.call(null,inst_49764,inst_49765);
var state_49768__$1 = (function (){var statearr_49770 = state_49768;
(statearr_49770[(11)] = inst_49762);

(statearr_49770[(12)] = inst_49757);

return statearr_49770;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49768__$1,inst_49766);
} else {
if((state_val_49769 === (1))){
var inst_49671 = cljs.core.deref.call(null,ghoul.state.global);
var inst_49672 = new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(inst_49671);
var inst_49673 = cljs.core.empty_QMARK_.call(null,inst_49672);
var state_49768__$1 = state_49768;
if(inst_49673){
var statearr_49771_49807 = state_49768__$1;
(statearr_49771_49807[(1)] = (2));

} else {
var statearr_49772_49808 = state_49768__$1;
(statearr_49772_49808[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49769 === (4))){
var inst_49678 = (state_49768[(2)]);
var inst_49679 = cljs.core.deref.call(null,ghoul.state.global);
var inst_49680 = new cljs.core.Keyword(null,"general-group-uid","general-group-uid",-1869498229).cljs$core$IFn$_invoke$arity$1(inst_49679);
var inst_49681 = ghoul.state.get_group_idx.call(null,inst_49680);
var inst_49682 = ghoul.http.get_rss.call(null,feed_url);
var state_49768__$1 = (function (){var statearr_49773 = state_49768;
(statearr_49773[(13)] = inst_49678);

(statearr_49773[(8)] = inst_49681);

return statearr_49773;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49768__$1,(5),inst_49682);
} else {
if((state_val_49769 === (15))){
var inst_49727 = (state_49768[(14)]);
var inst_49731 = cljs.core.chunk_first.call(null,inst_49727);
var inst_49732 = cljs.core.chunk_rest.call(null,inst_49727);
var inst_49733 = cljs.core.count.call(null,inst_49731);
var inst_49705 = inst_49732;
var inst_49706 = inst_49731;
var inst_49707 = inst_49733;
var inst_49708 = (0);
var state_49768__$1 = (function (){var statearr_49774 = state_49768;
(statearr_49774[(15)] = inst_49707);

(statearr_49774[(16)] = inst_49708);

(statearr_49774[(17)] = inst_49705);

(statearr_49774[(18)] = inst_49706);

return statearr_49774;
})();
var statearr_49775_49809 = state_49768__$1;
(statearr_49775_49809[(2)] = null);

(statearr_49775_49809[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49769 === (13))){
var state_49768__$1 = state_49768;
var statearr_49776_49810 = state_49768__$1;
(statearr_49776_49810[(2)] = null);

(statearr_49776_49810[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49769 === (6))){
var inst_49707 = (state_49768[(15)]);
var inst_49708 = (state_49768[(16)]);
var inst_49710 = (inst_49708 < inst_49707);
var inst_49711 = inst_49710;
var state_49768__$1 = state_49768;
if(cljs.core.truth_(inst_49711)){
var statearr_49777_49811 = state_49768__$1;
(statearr_49777_49811[(1)] = (8));

} else {
var statearr_49778_49812 = state_49768__$1;
(statearr_49778_49812[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49769 === (17))){
var inst_49750 = (state_49768[(2)]);
var state_49768__$1 = state_49768;
var statearr_49779_49813 = state_49768__$1;
(statearr_49779_49813[(2)] = inst_49750);

(statearr_49779_49813[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49769 === (3))){
var state_49768__$1 = state_49768;
var statearr_49780_49814 = state_49768__$1;
(statearr_49780_49814[(2)] = null);

(statearr_49780_49814[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49769 === (12))){
var inst_49727 = (state_49768[(14)]);
var inst_49729 = cljs.core.chunked_seq_QMARK_.call(null,inst_49727);
var state_49768__$1 = state_49768;
if(inst_49729){
var statearr_49784_49815 = state_49768__$1;
(statearr_49784_49815[(1)] = (15));

} else {
var statearr_49785_49816 = state_49768__$1;
(statearr_49785_49816[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49769 === (2))){
var inst_49675 = ghoul.state.add_general_group.call(null);
var state_49768__$1 = state_49768;
var statearr_49786_49817 = state_49768__$1;
(statearr_49786_49817[(2)] = inst_49675);

(statearr_49786_49817[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49769 === (11))){
var inst_49713 = (state_49768[(19)]);
var inst_49707 = (state_49768[(15)]);
var inst_49708 = (state_49768[(16)]);
var inst_49685 = (state_49768[(7)]);
var inst_49681 = (state_49768[(8)]);
var inst_49698 = (state_49768[(9)]);
var inst_49687 = (state_49768[(10)]);
var inst_49705 = (state_49768[(17)]);
var inst_49706 = (state_49768[(18)]);
var inst_49718 = (state_49768[(2)]);
var inst_49719 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49720 = [new cljs.core.Keyword(null,"feeds","feeds",855496306)];
var inst_49721 = (new cljs.core.PersistentVector(null,1,(5),inst_49719,inst_49720,null));
var inst_49722 = (function (){var feed = inst_49713;
var seq__49699 = inst_49705;
var chunk__49700 = inst_49706;
var count__49701 = inst_49707;
var i__49702 = inst_49708;
var subscription = inst_49698;
var feed_num = inst_49687;
var feed_data = inst_49685;
var group_idx = inst_49681;
return ((function (feed,seq__49699,chunk__49700,count__49701,i__49702,subscription,feed_num,feed_data,group_idx,inst_49713,inst_49707,inst_49708,inst_49685,inst_49681,inst_49698,inst_49687,inst_49705,inst_49706,inst_49718,inst_49719,inst_49720,inst_49721,state_val_49769,c__5809__auto__){
return (function (p1__49532_SHARP_){
return cljs.core.conj.call(null,p1__49532_SHARP_,feed);
});
;})(feed,seq__49699,chunk__49700,count__49701,i__49702,subscription,feed_num,feed_data,group_idx,inst_49713,inst_49707,inst_49708,inst_49685,inst_49681,inst_49698,inst_49687,inst_49705,inst_49706,inst_49718,inst_49719,inst_49720,inst_49721,state_val_49769,c__5809__auto__))
})();
var inst_49723 = cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.update_in,inst_49721,inst_49722);
var inst_49724 = (inst_49708 + (1));
var tmp49781 = inst_49707;
var tmp49782 = inst_49705;
var tmp49783 = inst_49706;
var inst_49705__$1 = tmp49782;
var inst_49706__$1 = tmp49783;
var inst_49707__$1 = tmp49781;
var inst_49708__$1 = inst_49724;
var state_49768__$1 = (function (){var statearr_49787 = state_49768;
(statearr_49787[(20)] = inst_49723);

(statearr_49787[(15)] = inst_49707__$1);

(statearr_49787[(21)] = inst_49718);

(statearr_49787[(16)] = inst_49708__$1);

(statearr_49787[(17)] = inst_49705__$1);

(statearr_49787[(18)] = inst_49706__$1);

return statearr_49787;
})();
var statearr_49788_49818 = state_49768__$1;
(statearr_49788_49818[(2)] = null);

(statearr_49788_49818[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49769 === (9))){
var inst_49727 = (state_49768[(14)]);
var inst_49705 = (state_49768[(17)]);
var inst_49727__$1 = cljs.core.seq.call(null,inst_49705);
var state_49768__$1 = (function (){var statearr_49789 = state_49768;
(statearr_49789[(14)] = inst_49727__$1);

return statearr_49789;
})();
if(inst_49727__$1){
var statearr_49790_49819 = state_49768__$1;
(statearr_49790_49819[(1)] = (12));

} else {
var statearr_49791_49820 = state_49768__$1;
(statearr_49791_49820[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49769 === (5))){
var inst_49685 = (state_49768[(7)]);
var inst_49687 = (state_49768[(10)]);
var inst_49684 = (state_49768[(2)]);
var inst_49685__$1 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_49684);
var inst_49686 = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(inst_49685__$1);
var inst_49687__$1 = cljs.core.count.call(null,inst_49686);
var inst_49688 = cljs.core.PersistentHashMap.EMPTY;
var inst_49689 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(inst_49685__$1);
var inst_49690 = cljs.core.assoc.call(null,inst_49688,new cljs.core.Keyword(null,"title","title",636505583),inst_49689);
var inst_49691 = cljs_uuid_utils.make_random_uuid.call(null);
var inst_49692 = cljs_uuid_utils.uuid_string.call(null,inst_49691);
var inst_49693 = cljs.core.assoc.call(null,inst_49690,new cljs.core.Keyword(null,"uid","uid",-1447769400),inst_49692);
var inst_49694 = new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(inst_49685__$1);
var inst_49695 = cljs.core.assoc.call(null,inst_49693,new cljs.core.Keyword(null,"site-url","site-url",1492702733),inst_49694);
var inst_49696 = cljs.core.assoc.call(null,inst_49695,new cljs.core.Keyword(null,"feed-url","feed-url",1903210362),feed_url);
var inst_49697 = cljs.core.assoc.call(null,inst_49696,new cljs.core.Keyword(null,"favicon","favicon",-1214000341),"/images/favicon.png");
var inst_49698 = cljs.core.assoc.call(null,inst_49697,new cljs.core.Keyword(null,"pending","pending",-220036727),inst_49687__$1);
var inst_49703 = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(inst_49685__$1);
var inst_49704 = cljs.core.seq.call(null,inst_49703);
var inst_49705 = inst_49704;
var inst_49706 = null;
var inst_49707 = (0);
var inst_49708 = (0);
var state_49768__$1 = (function (){var statearr_49792 = state_49768;
(statearr_49792[(15)] = inst_49707);

(statearr_49792[(16)] = inst_49708);

(statearr_49792[(7)] = inst_49685__$1);

(statearr_49792[(9)] = inst_49698);

(statearr_49792[(10)] = inst_49687__$1);

(statearr_49792[(17)] = inst_49705);

(statearr_49792[(18)] = inst_49706);

return statearr_49792;
})();
var statearr_49793_49821 = state_49768__$1;
(statearr_49793_49821[(2)] = null);

(statearr_49793_49821[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49769 === (14))){
var inst_49753 = (state_49768[(2)]);
var state_49768__$1 = state_49768;
var statearr_49794_49822 = state_49768__$1;
(statearr_49794_49822[(2)] = inst_49753);

(statearr_49794_49822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49769 === (16))){
var inst_49727 = (state_49768[(14)]);
var inst_49736 = (state_49768[(22)]);
var inst_49698 = (state_49768[(9)]);
var inst_49736__$1 = cljs.core.first.call(null,inst_49727);
var inst_49737 = new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(inst_49698);
var inst_49738 = cljs.core.assoc.call(null,inst_49736__$1,new cljs.core.Keyword(null,"feeduid","feeduid",1367071876),inst_49737);
var inst_49739 = ghoul.feeds_storage.add_feed.call(null,inst_49738);
var state_49768__$1 = (function (){var statearr_49795 = state_49768;
(statearr_49795[(22)] = inst_49736__$1);

return statearr_49795;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49768__$1,(18),inst_49739);
} else {
if((state_val_49769 === (10))){
var inst_49755 = (state_49768[(2)]);
var state_49768__$1 = state_49768;
var statearr_49796_49823 = state_49768__$1;
(statearr_49796_49823[(2)] = inst_49755);

(statearr_49796_49823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49769 === (18))){
var inst_49727 = (state_49768[(14)]);
var inst_49707 = (state_49768[(15)]);
var inst_49736 = (state_49768[(22)]);
var inst_49708 = (state_49768[(16)]);
var inst_49685 = (state_49768[(7)]);
var inst_49681 = (state_49768[(8)]);
var inst_49698 = (state_49768[(9)]);
var inst_49687 = (state_49768[(10)]);
var inst_49706 = (state_49768[(18)]);
var inst_49741 = (state_49768[(2)]);
var inst_49742 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49743 = [new cljs.core.Keyword(null,"feeds","feeds",855496306)];
var inst_49744 = (new cljs.core.PersistentVector(null,1,(5),inst_49742,inst_49743,null));
var inst_49745 = (function (){var temp__4126__auto__ = inst_49727;
var subscription = inst_49698;
var seq__49699 = inst_49727;
var feed = inst_49736;
var count__49701 = inst_49707;
var feed_data = inst_49685;
var feed_num = inst_49687;
var chunk__49700 = inst_49706;
var group_idx = inst_49681;
var i__49702 = inst_49708;
return ((function (temp__4126__auto__,subscription,seq__49699,feed,count__49701,feed_data,feed_num,chunk__49700,group_idx,i__49702,inst_49727,inst_49707,inst_49736,inst_49708,inst_49685,inst_49681,inst_49698,inst_49687,inst_49706,inst_49741,inst_49742,inst_49743,inst_49744,state_val_49769,c__5809__auto__){
return (function (p1__49532_SHARP_){
return cljs.core.conj.call(null,p1__49532_SHARP_,feed);
});
;})(temp__4126__auto__,subscription,seq__49699,feed,count__49701,feed_data,feed_num,chunk__49700,group_idx,i__49702,inst_49727,inst_49707,inst_49736,inst_49708,inst_49685,inst_49681,inst_49698,inst_49687,inst_49706,inst_49741,inst_49742,inst_49743,inst_49744,state_val_49769,c__5809__auto__))
})();
var inst_49746 = cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.update_in,inst_49744,inst_49745);
var inst_49747 = cljs.core.next.call(null,inst_49727);
var inst_49705 = inst_49747;
var inst_49706__$1 = null;
var inst_49707__$1 = (0);
var inst_49708__$1 = (0);
var state_49768__$1 = (function (){var statearr_49797 = state_49768;
(statearr_49797[(23)] = inst_49746);

(statearr_49797[(15)] = inst_49707__$1);

(statearr_49797[(24)] = inst_49741);

(statearr_49797[(16)] = inst_49708__$1);

(statearr_49797[(17)] = inst_49705);

(statearr_49797[(18)] = inst_49706__$1);

return statearr_49797;
})();
var statearr_49798_49824 = state_49768__$1;
(statearr_49798_49824[(2)] = null);

(statearr_49798_49824[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49769 === (8))){
var inst_49713 = (state_49768[(19)]);
var inst_49708 = (state_49768[(16)]);
var inst_49698 = (state_49768[(9)]);
var inst_49706 = (state_49768[(18)]);
var inst_49713__$1 = cljs.core._nth.call(null,inst_49706,inst_49708);
var inst_49714 = new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(inst_49698);
var inst_49715 = cljs.core.assoc.call(null,inst_49713__$1,new cljs.core.Keyword(null,"feeduid","feeduid",1367071876),inst_49714);
var inst_49716 = ghoul.feeds_storage.add_feed.call(null,inst_49715);
var state_49768__$1 = (function (){var statearr_49799 = state_49768;
(statearr_49799[(19)] = inst_49713__$1);

return statearr_49799;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49768__$1,(11),inst_49716);
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
var statearr_49803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49803[(0)] = state_machine__5795__auto__);

(statearr_49803[(1)] = (1));

return statearr_49803;
});
var state_machine__5795__auto____1 = (function (state_49768){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_49768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e49804){if((e49804 instanceof Object)){
var ex__5798__auto__ = e49804;
var statearr_49805_49825 = state_49768;
(statearr_49805_49825[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49826 = state_49768;
state_49768 = G__49826;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_49768){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_49768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_49806 = f__5810__auto__.call(null);
(statearr_49806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_49806;
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
var _ = console.log([cljs.core.str(path)].join(''));
return cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.assoc_in,path,new_count);
});
ghoul.state.update_uid_count = (function update_uid_count(uid,update_fn){
var path = cljs.core.conj.call(null,ghoul.state.get_update_path.call(null,uid),new cljs.core.Keyword(null,"pending","pending",-220036727));
var _ = console.log([cljs.core.str(path)].join(''));
return cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.update_in,path,update_fn);
});
ghoul.state.inc_uid_count = (function inc_uid_count(uid){
return ghoul.state.update_uid_count.call(null,uid,(function (p1__49827_SHARP_){
return ((20) + p1__49827_SHARP_);
}));
});
goog.exportSymbol('ghoul.state.inc_uid_count', ghoul.state.inc_uid_count);
