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
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__15619_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(p1__15619_SHARP_),uid);
}),new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.state.global))));
});
ghoul.state.get_group_idx = (function get_group_idx(uid){
return cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__15620_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__15620_SHARP_)),uid);
}),cljs.core.map_indexed.call(null,cljs.core.vector,new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.state.global))))));
});
ghoul.state.get_feed_data = (function get_feed_data(uid){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__15621_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(p1__15621_SHARP_),uid);
}),cljs.core.flatten.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.state.global))))));
});
ghoul.state.group_contains_feed_uid = (function group_contains_feed_uid(group,feed_uid){
return cljs.core.some.call(null,(function (p1__15622_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(p1__15622_SHARP_),feed_uid);
}),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(group));
});
ghoul.state.get_feed_group_uid = (function get_feed_group_uid(feed_uid){
return new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__15623_SHARP_){
return ghoul.state.group_contains_feed_uid.call(null,p1__15623_SHARP_,feed_uid);
}),new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.state.global)))));
});
ghoul.state.get_feed_idx_group = (function get_feed_idx_group(group,feed_uid){
return cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__15624_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__15624_SHARP_)),feed_uid);
}),cljs.core.map_indexed.call(null,cljs.core.vector,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(group)))));
});
ghoul.state.group_QMARK_ = (function group_QMARK_(uid){
return cljs.core.some.call(null,(function (p1__15625_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(p1__15625_SHARP_),uid);
}),new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.state.global)));
});
goog.exportSymbol('ghoul.state.group_QMARK_', ghoul.state.group_QMARK_);
ghoul.state.feed_QMARK_ = (function feed_QMARK_(uid){
return cljs.core.some.call(null,(function (p1__15626_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(p1__15626_SHARP_),uid);
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
return (function (state_15675){
var state_val_15676 = (state_15675[(1)]);
if((state_val_15676 === (5))){
var inst_15672 = (state_15675[(2)]);
var inst_15673 = cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"feeds","feeds",855496306),inst_15672);
var state_15675__$1 = state_15675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15675__$1,inst_15673);
} else {
if((state_val_15676 === (4))){
var inst_15669 = (state_15675[(2)]);
var inst_15670 = ghoul.feeds_storage.retrieve_feeds_uids.call(null,inst_15669);
var state_15675__$1 = state_15675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15675__$1,(5),inst_15670);
} else {
if((state_val_15676 === (3))){
var inst_15667 = ghoul.state.get_group_subscriptions.call(null,uid);
var state_15675__$1 = state_15675;
var statearr_15677_15689 = state_15675__$1;
(statearr_15677_15689[(2)] = inst_15667);

(statearr_15677_15689[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15676 === (2))){
var inst_15663 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15664 = [uid];
var inst_15665 = (new cljs.core.PersistentVector(null,1,(5),inst_15663,inst_15664,null));
var state_15675__$1 = state_15675;
var statearr_15678_15690 = state_15675__$1;
(statearr_15678_15690[(2)] = inst_15665);

(statearr_15678_15690[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15676 === (1))){
var inst_15658 = cljs.core.PersistentVector.EMPTY;
var inst_15659 = cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"feeds","feeds",855496306),inst_15658);
var inst_15660 = ghoul.state.get_group_data.call(null,uid);
var inst_15661 = (inst_15660 == null);
var state_15675__$1 = (function (){var statearr_15679 = state_15675;
(statearr_15679[(7)] = inst_15659);

return statearr_15679;
})();
if(cljs.core.truth_(inst_15661)){
var statearr_15680_15691 = state_15675__$1;
(statearr_15680_15691[(1)] = (2));

} else {
var statearr_15681_15692 = state_15675__$1;
(statearr_15681_15692[(1)] = (3));

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
var statearr_15685 = [null,null,null,null,null,null,null,null];
(statearr_15685[(0)] = state_machine__5795__auto__);

(statearr_15685[(1)] = (1));

return statearr_15685;
});
var state_machine__5795__auto____1 = (function (state_15675){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_15675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e15686){if((e15686 instanceof Object)){
var ex__5798__auto__ = e15686;
var statearr_15687_15693 = state_15675;
(statearr_15687_15693[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15694 = state_15675;
state_15675 = G__15694;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_15675){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_15675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_15688 = f__5810__auto__.call(null);
(statearr_15688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_15688;
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
return (function (state_15721){
var state_val_15722 = (state_15721[(1)]);
if((state_val_15722 === (3))){
var inst_15718 = (state_15721[(2)]);
var inst_15719 = cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"feeds","feeds",855496306),inst_15718);
var state_15721__$1 = state_15721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15721__$1,inst_15719);
} else {
if((state_val_15722 === (2))){
var inst_15715 = (state_15721[(2)]);
var inst_15716 = ghoul.feeds_storage.retrieve_all_feeds.call(null);
var state_15721__$1 = (function (){var statearr_15723 = state_15721;
(statearr_15723[(7)] = inst_15715);

return statearr_15723;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15721__$1,(3),inst_15716);
} else {
if((state_val_15722 === (1))){
var inst_15713 = ghoul.feeds_storage.init_database.call(null);
var state_15721__$1 = state_15721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15721__$1,(2),inst_15713);
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
var statearr_15727 = [null,null,null,null,null,null,null,null];
(statearr_15727[(0)] = state_machine__5795__auto__);

(statearr_15727[(1)] = (1));

return statearr_15727;
});
var state_machine__5795__auto____1 = (function (state_15721){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_15721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e15728){if((e15728 instanceof Object)){
var ex__5798__auto__ = e15728;
var statearr_15729_15731 = state_15721;
(statearr_15729_15731[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15732 = state_15721;
state_15721 = G__15732;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_15721){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_15721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_15730 = f__5810__auto__.call(null);
(statearr_15730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_15730;
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
ghoul.state.toggle_state_popup = (function toggle_state_popup(){
return cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"popup","popup",635890211),(((new cljs.core.Keyword(null,"popup","popup",635890211).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.state.global)) == null))?new cljs.core.Keyword(null,"state","state",-1988618099):null));
});
ghoul.state.add_general_group = (function add_general_group(){
var general_group = cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"General"),new cljs.core.Keyword(null,"pending","pending",-220036727),(0)),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true),new cljs.core.Keyword(null,"uid","uid",-1447769400),cljs_uuid_utils.uuid_string.call(null,cljs_uuid_utils.make_random_uuid.call(null))),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),cljs.core.PersistentVector.EMPTY);
cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"general-group-uid","general-group-uid",-1869498229),new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(general_group));

return cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"groups","groups",-136896102)], null),((function (general_group){
return (function (p1__15733_SHARP_){
return cljs.core.conj.call(null,p1__15733_SHARP_,general_group);
});})(general_group))
);
});
ghoul.state.add_rss_subscription = (function add_rss_subscription(feed_url){
var c__5809__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto__){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto__){
return (function (state_15970){
var state_val_15971 = (state_15970[(1)]);
if((state_val_15971 === (7))){
var inst_15883 = (state_15970[(7)]);
var inst_15887 = (state_15970[(8)]);
var inst_15900 = (state_15970[(9)]);
var inst_15889 = (state_15970[(10)]);
var inst_15959 = (state_15970[(2)]);
var inst_15960 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15961 = [new cljs.core.Keyword(null,"groups","groups",-136896102),inst_15883,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776)];
var inst_15962 = (new cljs.core.PersistentVector(null,3,(5),inst_15960,inst_15961,null));
var inst_15963 = (function (){var subscription = inst_15900;
var feed_num = inst_15889;
var feed_data = inst_15887;
var group_idx = inst_15883;
return ((function (subscription,feed_num,feed_data,group_idx,inst_15883,inst_15887,inst_15900,inst_15889,inst_15959,inst_15960,inst_15961,inst_15962,state_val_15971,c__5809__auto__){
return (function (p1__15735_SHARP_){
return cljs.core.conj.call(null,p1__15735_SHARP_,subscription);
});
;})(subscription,feed_num,feed_data,group_idx,inst_15883,inst_15887,inst_15900,inst_15889,inst_15959,inst_15960,inst_15961,inst_15962,state_val_15971,c__5809__auto__))
})();
var inst_15964 = cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.update_in,inst_15962,inst_15963);
var inst_15965 = cljs.core.deref.call(null,ghoul.state.global);
var inst_15966 = new cljs.core.Keyword(null,"general-group-uid","general-group-uid",-1869498229).cljs$core$IFn$_invoke$arity$1(inst_15965);
var inst_15967 = (function (){var subscription = inst_15900;
var feed_num = inst_15889;
var feed_data = inst_15887;
var group_idx = inst_15883;
return ((function (subscription,feed_num,feed_data,group_idx,inst_15883,inst_15887,inst_15900,inst_15889,inst_15959,inst_15960,inst_15961,inst_15962,inst_15963,inst_15964,inst_15965,inst_15966,state_val_15971,c__5809__auto__){
return (function (p1__15736_SHARP_){
return (feed_num + p1__15736_SHARP_);
});
;})(subscription,feed_num,feed_data,group_idx,inst_15883,inst_15887,inst_15900,inst_15889,inst_15959,inst_15960,inst_15961,inst_15962,inst_15963,inst_15964,inst_15965,inst_15966,state_val_15971,c__5809__auto__))
})();
var inst_15968 = ghoul.state.update_uid_count.call(null,inst_15966,inst_15967);
var state_15970__$1 = (function (){var statearr_15972 = state_15970;
(statearr_15972[(11)] = inst_15959);

(statearr_15972[(12)] = inst_15964);

return statearr_15972;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15970__$1,inst_15968);
} else {
if((state_val_15971 === (1))){
var inst_15873 = cljs.core.deref.call(null,ghoul.state.global);
var inst_15874 = new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(inst_15873);
var inst_15875 = cljs.core.empty_QMARK_.call(null,inst_15874);
var state_15970__$1 = state_15970;
if(inst_15875){
var statearr_15973_16009 = state_15970__$1;
(statearr_15973_16009[(1)] = (2));

} else {
var statearr_15974_16010 = state_15970__$1;
(statearr_15974_16010[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15971 === (4))){
var inst_15880 = (state_15970[(2)]);
var inst_15881 = cljs.core.deref.call(null,ghoul.state.global);
var inst_15882 = new cljs.core.Keyword(null,"general-group-uid","general-group-uid",-1869498229).cljs$core$IFn$_invoke$arity$1(inst_15881);
var inst_15883 = ghoul.state.get_group_idx.call(null,inst_15882);
var inst_15884 = ghoul.http.get_rss.call(null,feed_url);
var state_15970__$1 = (function (){var statearr_15975 = state_15970;
(statearr_15975[(7)] = inst_15883);

(statearr_15975[(13)] = inst_15880);

return statearr_15975;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15970__$1,(5),inst_15884);
} else {
if((state_val_15971 === (15))){
var inst_15929 = (state_15970[(14)]);
var inst_15933 = cljs.core.chunk_first.call(null,inst_15929);
var inst_15934 = cljs.core.chunk_rest.call(null,inst_15929);
var inst_15935 = cljs.core.count.call(null,inst_15933);
var inst_15907 = inst_15934;
var inst_15908 = inst_15933;
var inst_15909 = inst_15935;
var inst_15910 = (0);
var state_15970__$1 = (function (){var statearr_15976 = state_15970;
(statearr_15976[(15)] = inst_15910);

(statearr_15976[(16)] = inst_15909);

(statearr_15976[(17)] = inst_15908);

(statearr_15976[(18)] = inst_15907);

return statearr_15976;
})();
var statearr_15977_16011 = state_15970__$1;
(statearr_15977_16011[(2)] = null);

(statearr_15977_16011[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15971 === (13))){
var state_15970__$1 = state_15970;
var statearr_15978_16012 = state_15970__$1;
(statearr_15978_16012[(2)] = null);

(statearr_15978_16012[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15971 === (6))){
var inst_15910 = (state_15970[(15)]);
var inst_15909 = (state_15970[(16)]);
var inst_15912 = (inst_15910 < inst_15909);
var inst_15913 = inst_15912;
var state_15970__$1 = state_15970;
if(cljs.core.truth_(inst_15913)){
var statearr_15979_16013 = state_15970__$1;
(statearr_15979_16013[(1)] = (8));

} else {
var statearr_15980_16014 = state_15970__$1;
(statearr_15980_16014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15971 === (17))){
var inst_15952 = (state_15970[(2)]);
var state_15970__$1 = state_15970;
var statearr_15981_16015 = state_15970__$1;
(statearr_15981_16015[(2)] = inst_15952);

(statearr_15981_16015[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15971 === (3))){
var state_15970__$1 = state_15970;
var statearr_15982_16016 = state_15970__$1;
(statearr_15982_16016[(2)] = null);

(statearr_15982_16016[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15971 === (12))){
var inst_15929 = (state_15970[(14)]);
var inst_15931 = cljs.core.chunked_seq_QMARK_.call(null,inst_15929);
var state_15970__$1 = state_15970;
if(inst_15931){
var statearr_15986_16017 = state_15970__$1;
(statearr_15986_16017[(1)] = (15));

} else {
var statearr_15987_16018 = state_15970__$1;
(statearr_15987_16018[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15971 === (2))){
var inst_15877 = ghoul.state.add_general_group.call(null);
var state_15970__$1 = state_15970;
var statearr_15988_16019 = state_15970__$1;
(statearr_15988_16019[(2)] = inst_15877);

(statearr_15988_16019[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15971 === (11))){
var inst_15910 = (state_15970[(15)]);
var inst_15909 = (state_15970[(16)]);
var inst_15883 = (state_15970[(7)]);
var inst_15887 = (state_15970[(8)]);
var inst_15915 = (state_15970[(19)]);
var inst_15908 = (state_15970[(17)]);
var inst_15907 = (state_15970[(18)]);
var inst_15900 = (state_15970[(9)]);
var inst_15889 = (state_15970[(10)]);
var inst_15920 = (state_15970[(2)]);
var inst_15921 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15922 = [new cljs.core.Keyword(null,"feeds","feeds",855496306)];
var inst_15923 = (new cljs.core.PersistentVector(null,1,(5),inst_15921,inst_15922,null));
var inst_15924 = (function (){var feed = inst_15915;
var seq__15901 = inst_15907;
var chunk__15902 = inst_15908;
var count__15903 = inst_15909;
var i__15904 = inst_15910;
var subscription = inst_15900;
var feed_num = inst_15889;
var feed_data = inst_15887;
var group_idx = inst_15883;
return ((function (feed,seq__15901,chunk__15902,count__15903,i__15904,subscription,feed_num,feed_data,group_idx,inst_15910,inst_15909,inst_15883,inst_15887,inst_15915,inst_15908,inst_15907,inst_15900,inst_15889,inst_15920,inst_15921,inst_15922,inst_15923,state_val_15971,c__5809__auto__){
return (function (p1__15734_SHARP_){
return cljs.core.conj.call(null,p1__15734_SHARP_,feed);
});
;})(feed,seq__15901,chunk__15902,count__15903,i__15904,subscription,feed_num,feed_data,group_idx,inst_15910,inst_15909,inst_15883,inst_15887,inst_15915,inst_15908,inst_15907,inst_15900,inst_15889,inst_15920,inst_15921,inst_15922,inst_15923,state_val_15971,c__5809__auto__))
})();
var inst_15925 = cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.update_in,inst_15923,inst_15924);
var inst_15926 = (inst_15910 + (1));
var tmp15983 = inst_15909;
var tmp15984 = inst_15908;
var tmp15985 = inst_15907;
var inst_15907__$1 = tmp15985;
var inst_15908__$1 = tmp15984;
var inst_15909__$1 = tmp15983;
var inst_15910__$1 = inst_15926;
var state_15970__$1 = (function (){var statearr_15989 = state_15970;
(statearr_15989[(20)] = inst_15920);

(statearr_15989[(15)] = inst_15910__$1);

(statearr_15989[(16)] = inst_15909__$1);

(statearr_15989[(21)] = inst_15925);

(statearr_15989[(17)] = inst_15908__$1);

(statearr_15989[(18)] = inst_15907__$1);

return statearr_15989;
})();
var statearr_15990_16020 = state_15970__$1;
(statearr_15990_16020[(2)] = null);

(statearr_15990_16020[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15971 === (9))){
var inst_15929 = (state_15970[(14)]);
var inst_15907 = (state_15970[(18)]);
var inst_15929__$1 = cljs.core.seq.call(null,inst_15907);
var state_15970__$1 = (function (){var statearr_15991 = state_15970;
(statearr_15991[(14)] = inst_15929__$1);

return statearr_15991;
})();
if(inst_15929__$1){
var statearr_15992_16021 = state_15970__$1;
(statearr_15992_16021[(1)] = (12));

} else {
var statearr_15993_16022 = state_15970__$1;
(statearr_15993_16022[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15971 === (5))){
var inst_15887 = (state_15970[(8)]);
var inst_15889 = (state_15970[(10)]);
var inst_15886 = (state_15970[(2)]);
var inst_15887__$1 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_15886);
var inst_15888 = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(inst_15887__$1);
var inst_15889__$1 = cljs.core.count.call(null,inst_15888);
var inst_15890 = cljs.core.PersistentHashMap.EMPTY;
var inst_15891 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(inst_15887__$1);
var inst_15892 = cljs.core.assoc.call(null,inst_15890,new cljs.core.Keyword(null,"title","title",636505583),inst_15891);
var inst_15893 = cljs_uuid_utils.make_random_uuid.call(null);
var inst_15894 = cljs_uuid_utils.uuid_string.call(null,inst_15893);
var inst_15895 = cljs.core.assoc.call(null,inst_15892,new cljs.core.Keyword(null,"uid","uid",-1447769400),inst_15894);
var inst_15896 = new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(inst_15887__$1);
var inst_15897 = cljs.core.assoc.call(null,inst_15895,new cljs.core.Keyword(null,"site-url","site-url",1492702733),inst_15896);
var inst_15898 = cljs.core.assoc.call(null,inst_15897,new cljs.core.Keyword(null,"feed-url","feed-url",1903210362),feed_url);
var inst_15899 = cljs.core.assoc.call(null,inst_15898,new cljs.core.Keyword(null,"favicon","favicon",-1214000341),"/images/favicon.png");
var inst_15900 = cljs.core.assoc.call(null,inst_15899,new cljs.core.Keyword(null,"pending","pending",-220036727),inst_15889__$1);
var inst_15905 = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(inst_15887__$1);
var inst_15906 = cljs.core.seq.call(null,inst_15905);
var inst_15907 = inst_15906;
var inst_15908 = null;
var inst_15909 = (0);
var inst_15910 = (0);
var state_15970__$1 = (function (){var statearr_15994 = state_15970;
(statearr_15994[(15)] = inst_15910);

(statearr_15994[(16)] = inst_15909);

(statearr_15994[(8)] = inst_15887__$1);

(statearr_15994[(17)] = inst_15908);

(statearr_15994[(18)] = inst_15907);

(statearr_15994[(9)] = inst_15900);

(statearr_15994[(10)] = inst_15889__$1);

return statearr_15994;
})();
var statearr_15995_16023 = state_15970__$1;
(statearr_15995_16023[(2)] = null);

(statearr_15995_16023[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15971 === (14))){
var inst_15955 = (state_15970[(2)]);
var state_15970__$1 = state_15970;
var statearr_15996_16024 = state_15970__$1;
(statearr_15996_16024[(2)] = inst_15955);

(statearr_15996_16024[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15971 === (16))){
var inst_15929 = (state_15970[(14)]);
var inst_15938 = (state_15970[(22)]);
var inst_15900 = (state_15970[(9)]);
var inst_15938__$1 = cljs.core.first.call(null,inst_15929);
var inst_15939 = new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(inst_15900);
var inst_15940 = cljs.core.assoc.call(null,inst_15938__$1,new cljs.core.Keyword(null,"feeduid","feeduid",1367071876),inst_15939);
var inst_15941 = ghoul.feeds_storage.add_feed.call(null,inst_15940);
var state_15970__$1 = (function (){var statearr_15997 = state_15970;
(statearr_15997[(22)] = inst_15938__$1);

return statearr_15997;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15970__$1,(18),inst_15941);
} else {
if((state_val_15971 === (10))){
var inst_15957 = (state_15970[(2)]);
var state_15970__$1 = state_15970;
var statearr_15998_16025 = state_15970__$1;
(statearr_15998_16025[(2)] = inst_15957);

(statearr_15998_16025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15971 === (18))){
var inst_15910 = (state_15970[(15)]);
var inst_15909 = (state_15970[(16)]);
var inst_15883 = (state_15970[(7)]);
var inst_15929 = (state_15970[(14)]);
var inst_15887 = (state_15970[(8)]);
var inst_15908 = (state_15970[(17)]);
var inst_15938 = (state_15970[(22)]);
var inst_15900 = (state_15970[(9)]);
var inst_15889 = (state_15970[(10)]);
var inst_15943 = (state_15970[(2)]);
var inst_15944 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15945 = [new cljs.core.Keyword(null,"feeds","feeds",855496306)];
var inst_15946 = (new cljs.core.PersistentVector(null,1,(5),inst_15944,inst_15945,null));
var inst_15947 = (function (){var temp__4126__auto__ = inst_15929;
var subscription = inst_15900;
var feed = inst_15938;
var feed_data = inst_15887;
var seq__15901 = inst_15929;
var feed_num = inst_15889;
var group_idx = inst_15883;
var i__15904 = inst_15910;
var count__15903 = inst_15909;
var chunk__15902 = inst_15908;
return ((function (temp__4126__auto__,subscription,feed,feed_data,seq__15901,feed_num,group_idx,i__15904,count__15903,chunk__15902,inst_15910,inst_15909,inst_15883,inst_15929,inst_15887,inst_15908,inst_15938,inst_15900,inst_15889,inst_15943,inst_15944,inst_15945,inst_15946,state_val_15971,c__5809__auto__){
return (function (p1__15734_SHARP_){
return cljs.core.conj.call(null,p1__15734_SHARP_,feed);
});
;})(temp__4126__auto__,subscription,feed,feed_data,seq__15901,feed_num,group_idx,i__15904,count__15903,chunk__15902,inst_15910,inst_15909,inst_15883,inst_15929,inst_15887,inst_15908,inst_15938,inst_15900,inst_15889,inst_15943,inst_15944,inst_15945,inst_15946,state_val_15971,c__5809__auto__))
})();
var inst_15948 = cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.update_in,inst_15946,inst_15947);
var inst_15949 = cljs.core.next.call(null,inst_15929);
var inst_15907 = inst_15949;
var inst_15908__$1 = null;
var inst_15909__$1 = (0);
var inst_15910__$1 = (0);
var state_15970__$1 = (function (){var statearr_15999 = state_15970;
(statearr_15999[(15)] = inst_15910__$1);

(statearr_15999[(16)] = inst_15909__$1);

(statearr_15999[(17)] = inst_15908__$1);

(statearr_15999[(18)] = inst_15907);

(statearr_15999[(23)] = inst_15943);

(statearr_15999[(24)] = inst_15948);

return statearr_15999;
})();
var statearr_16000_16026 = state_15970__$1;
(statearr_16000_16026[(2)] = null);

(statearr_16000_16026[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15971 === (8))){
var inst_15910 = (state_15970[(15)]);
var inst_15915 = (state_15970[(19)]);
var inst_15908 = (state_15970[(17)]);
var inst_15900 = (state_15970[(9)]);
var inst_15915__$1 = cljs.core._nth.call(null,inst_15908,inst_15910);
var inst_15916 = new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(inst_15900);
var inst_15917 = cljs.core.assoc.call(null,inst_15915__$1,new cljs.core.Keyword(null,"feeduid","feeduid",1367071876),inst_15916);
var inst_15918 = ghoul.feeds_storage.add_feed.call(null,inst_15917);
var state_15970__$1 = (function (){var statearr_16001 = state_15970;
(statearr_16001[(19)] = inst_15915__$1);

return statearr_16001;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15970__$1,(11),inst_15918);
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
var statearr_16005 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16005[(0)] = state_machine__5795__auto__);

(statearr_16005[(1)] = (1));

return statearr_16005;
});
var state_machine__5795__auto____1 = (function (state_15970){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_15970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e16006){if((e16006 instanceof Object)){
var ex__5798__auto__ = e16006;
var statearr_16007_16027 = state_15970;
(statearr_16007_16027[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16028 = state_15970;
state_15970 = G__16028;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_15970){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_15970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_16008 = f__5810__auto__.call(null);
(statearr_16008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_16008;
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
return cljs.core.map.call(null,(function (p1__16029_SHARP_){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(p1__16029_SHARP_)),new cljs.core.Keyword(null,"feed-url","feed-url",1903210362).cljs$core$IFn$_invoke$arity$1(p1__16029_SHARP_));
}),cljs.core.flatten.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.state.global)))));
});
ghoul.state.include_feed = (function include_feed(feed_data){
var feed_uid = new cljs.core.Keyword(null,"feeduid","feeduid",1367071876).cljs$core$IFn$_invoke$arity$1(feed_data);
var group_uid = ghoul.state.get_feed_group_uid.call(null,feed_uid);
ghoul.state.update_uid_count.call(null,feed_uid,cljs.core.inc);

ghoul.state.update_uid_count.call(null,group_uid,cljs.core.inc);

if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.state.global)),feed_uid)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.state.global)),group_uid)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.state.global)),new cljs.core.Keyword(null,"all-items","all-items",1467247308)))){
return cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feeds","feeds",855496306)], null),((function (feed_uid,group_uid){
return (function (p1__16030_SHARP_){
return cljs.core.conj.call(null,p1__16030_SHARP_,feed_data);
});})(feed_uid,group_uid))
);
} else {
return null;
}
});
