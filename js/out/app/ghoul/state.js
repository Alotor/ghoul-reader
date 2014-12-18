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
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__31166_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(p1__31166_SHARP_),uid);
}),new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.state.global))));
});
ghoul.state.get_feed_data = (function get_feed_data(uid){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__31167_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(p1__31167_SHARP_),uid);
}),cljs.core.flatten.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.state.global))))));
});
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
return (function (state_31216){
var state_val_31217 = (state_31216[(1)]);
if((state_val_31217 === (5))){
var inst_31213 = (state_31216[(2)]);
var inst_31214 = cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"feeds","feeds",855496306),inst_31213);
var state_31216__$1 = state_31216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31216__$1,inst_31214);
} else {
if((state_val_31217 === (4))){
var inst_31210 = (state_31216[(2)]);
var inst_31211 = ghoul.feeds_storage.retrieve_feeds_uids.call(null,inst_31210);
var state_31216__$1 = state_31216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31216__$1,(5),inst_31211);
} else {
if((state_val_31217 === (3))){
var inst_31208 = ghoul.state.get_group_subscriptions.call(null,uid);
var state_31216__$1 = state_31216;
var statearr_31218_31230 = state_31216__$1;
(statearr_31218_31230[(2)] = inst_31208);

(statearr_31218_31230[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (2))){
var inst_31204 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31205 = [uid];
var inst_31206 = (new cljs.core.PersistentVector(null,1,(5),inst_31204,inst_31205,null));
var state_31216__$1 = state_31216;
var statearr_31219_31231 = state_31216__$1;
(statearr_31219_31231[(2)] = inst_31206);

(statearr_31219_31231[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (1))){
var inst_31199 = cljs.core.PersistentVector.EMPTY;
var inst_31200 = cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"feeds","feeds",855496306),inst_31199);
var inst_31201 = ghoul.state.get_group_data.call(null,uid);
var inst_31202 = (inst_31201 == null);
var state_31216__$1 = (function (){var statearr_31220 = state_31216;
(statearr_31220[(7)] = inst_31200);

return statearr_31220;
})();
if(cljs.core.truth_(inst_31202)){
var statearr_31221_31232 = state_31216__$1;
(statearr_31221_31232[(1)] = (2));

} else {
var statearr_31222_31233 = state_31216__$1;
(statearr_31222_31233[(1)] = (3));

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
var statearr_31226 = [null,null,null,null,null,null,null,null];
(statearr_31226[(0)] = state_machine__5795__auto__);

(statearr_31226[(1)] = (1));

return statearr_31226;
});
var state_machine__5795__auto____1 = (function (state_31216){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_31216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e31227){if((e31227 instanceof Object)){
var ex__5798__auto__ = e31227;
var statearr_31228_31234 = state_31216;
(statearr_31228_31234[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31235 = state_31216;
state_31216 = G__31235;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_31216){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_31216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_31229 = f__5810__auto__.call(null);
(statearr_31229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_31229;
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
goog.exportSymbol('ghoul.state.select_feed', ghoul.state.select_feed);
ghoul.state.load_all_items = (function load_all_items(){
var c__5809__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto__){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto__){
return (function (state_31262){
var state_val_31263 = (state_31262[(1)]);
if((state_val_31263 === (3))){
var inst_31259 = (state_31262[(2)]);
var inst_31260 = cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"feeds","feeds",855496306),inst_31259);
var state_31262__$1 = state_31262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31262__$1,inst_31260);
} else {
if((state_val_31263 === (2))){
var inst_31256 = (state_31262[(2)]);
var inst_31257 = ghoul.feeds_storage.retrieve_all_feeds.call(null);
var state_31262__$1 = (function (){var statearr_31264 = state_31262;
(statearr_31264[(7)] = inst_31256);

return statearr_31264;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31262__$1,(3),inst_31257);
} else {
if((state_val_31263 === (1))){
var inst_31254 = ghoul.feeds_storage.init_database.call(null);
var state_31262__$1 = state_31262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31262__$1,(2),inst_31254);
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
var statearr_31268 = [null,null,null,null,null,null,null,null];
(statearr_31268[(0)] = state_machine__5795__auto__);

(statearr_31268[(1)] = (1));

return statearr_31268;
});
var state_machine__5795__auto____1 = (function (state_31262){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_31262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e31269){if((e31269 instanceof Object)){
var ex__5798__auto__ = e31269;
var statearr_31270_31272 = state_31262;
(statearr_31270_31272[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31273 = state_31262;
state_31262 = G__31273;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_31262){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_31262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_31271 = f__5810__auto__.call(null);
(statearr_31271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_31271;
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
var general_group = cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"General"),new cljs.core.Keyword(null,"count","count",2139924085),(0)),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true),new cljs.core.Keyword(null,"uid","uid",-1447769400),cljs_uuid_utils.uuid_string.call(null,cljs_uuid_utils.make_random_uuid.call(null))),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),cljs.core.PersistentVector.EMPTY);
cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"general-group-uid","general-group-uid",-1869498229),new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(general_group));

return cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"groups","groups",-136896102)], null),((function (general_group){
return (function (p1__31274_SHARP_){
return cljs.core.conj.call(null,p1__31274_SHARP_,general_group);
});})(general_group))
);
});
goog.exportSymbol('ghoul.state.add_general_group', ghoul.state.add_general_group);
ghoul.state.add_rss_subscription = (function add_rss_subscription(feed_url){
var c__5809__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto__){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto__){
return (function (state_31492){
var state_val_31493 = (state_31492[(1)]);
if((state_val_31493 === (7))){
var inst_31426 = (state_31492[(7)]);
var inst_31415 = (state_31492[(8)]);
var inst_31485 = (state_31492[(2)]);
var inst_31486 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31487 = [new cljs.core.Keyword(null,"groups","groups",-136896102),(0),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776)];
var inst_31488 = (new cljs.core.PersistentVector(null,3,(5),inst_31486,inst_31487,null));
var inst_31489 = (function (){var subscription = inst_31426;
var feed_data = inst_31415;
var group_idx = (0);
return ((function (subscription,feed_data,group_idx,inst_31426,inst_31415,inst_31485,inst_31486,inst_31487,inst_31488,state_val_31493,c__5809__auto__){
return (function (p1__31276_SHARP_){
return cljs.core.conj.call(null,p1__31276_SHARP_,subscription);
});
;})(subscription,feed_data,group_idx,inst_31426,inst_31415,inst_31485,inst_31486,inst_31487,inst_31488,state_val_31493,c__5809__auto__))
})();
var inst_31490 = cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.update_in,inst_31488,inst_31489);
var state_31492__$1 = (function (){var statearr_31494 = state_31492;
(statearr_31494[(9)] = inst_31485);

return statearr_31494;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31492__$1,inst_31490);
} else {
if((state_val_31493 === (1))){
var inst_31404 = cljs.core.deref.call(null,ghoul.state.global);
var inst_31405 = new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(inst_31404);
var inst_31406 = cljs.core.empty_QMARK_.call(null,inst_31405);
var state_31492__$1 = state_31492;
if(inst_31406){
var statearr_31495_31531 = state_31492__$1;
(statearr_31495_31531[(1)] = (2));

} else {
var statearr_31496_31532 = state_31492__$1;
(statearr_31496_31532[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (4))){
var inst_31411 = (state_31492[(2)]);
var inst_31412 = ghoul.http.get_rss.call(null,feed_url);
var state_31492__$1 = (function (){var statearr_31497 = state_31492;
(statearr_31497[(10)] = inst_31411);

return statearr_31497;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31492__$1,(5),inst_31412);
} else {
if((state_val_31493 === (15))){
var inst_31455 = (state_31492[(11)]);
var inst_31459 = cljs.core.chunk_first.call(null,inst_31455);
var inst_31460 = cljs.core.chunk_rest.call(null,inst_31455);
var inst_31461 = cljs.core.count.call(null,inst_31459);
var inst_31433 = inst_31460;
var inst_31434 = inst_31459;
var inst_31435 = inst_31461;
var inst_31436 = (0);
var state_31492__$1 = (function (){var statearr_31498 = state_31492;
(statearr_31498[(12)] = inst_31435);

(statearr_31498[(13)] = inst_31434);

(statearr_31498[(14)] = inst_31433);

(statearr_31498[(15)] = inst_31436);

return statearr_31498;
})();
var statearr_31499_31533 = state_31492__$1;
(statearr_31499_31533[(2)] = null);

(statearr_31499_31533[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (13))){
var state_31492__$1 = state_31492;
var statearr_31500_31534 = state_31492__$1;
(statearr_31500_31534[(2)] = null);

(statearr_31500_31534[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (6))){
var inst_31435 = (state_31492[(12)]);
var inst_31436 = (state_31492[(15)]);
var inst_31438 = (inst_31436 < inst_31435);
var inst_31439 = inst_31438;
var state_31492__$1 = state_31492;
if(cljs.core.truth_(inst_31439)){
var statearr_31501_31535 = state_31492__$1;
(statearr_31501_31535[(1)] = (8));

} else {
var statearr_31502_31536 = state_31492__$1;
(statearr_31502_31536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (17))){
var inst_31478 = (state_31492[(2)]);
var state_31492__$1 = state_31492;
var statearr_31503_31537 = state_31492__$1;
(statearr_31503_31537[(2)] = inst_31478);

(statearr_31503_31537[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (3))){
var state_31492__$1 = state_31492;
var statearr_31504_31538 = state_31492__$1;
(statearr_31504_31538[(2)] = null);

(statearr_31504_31538[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (12))){
var inst_31455 = (state_31492[(11)]);
var inst_31457 = cljs.core.chunked_seq_QMARK_.call(null,inst_31455);
var state_31492__$1 = state_31492;
if(inst_31457){
var statearr_31508_31539 = state_31492__$1;
(statearr_31508_31539[(1)] = (15));

} else {
var statearr_31509_31540 = state_31492__$1;
(statearr_31509_31540[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (2))){
var inst_31408 = ghoul.state.add_general_group.call(null);
var state_31492__$1 = state_31492;
var statearr_31510_31541 = state_31492__$1;
(statearr_31510_31541[(2)] = inst_31408);

(statearr_31510_31541[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (11))){
var inst_31435 = (state_31492[(12)]);
var inst_31434 = (state_31492[(13)]);
var inst_31433 = (state_31492[(14)]);
var inst_31441 = (state_31492[(16)]);
var inst_31426 = (state_31492[(7)]);
var inst_31415 = (state_31492[(8)]);
var inst_31436 = (state_31492[(15)]);
var inst_31446 = (state_31492[(2)]);
var inst_31447 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31448 = [new cljs.core.Keyword(null,"feeds","feeds",855496306)];
var inst_31449 = (new cljs.core.PersistentVector(null,1,(5),inst_31447,inst_31448,null));
var inst_31450 = (function (){var feed = inst_31441;
var seq__31427 = inst_31433;
var chunk__31428 = inst_31434;
var count__31429 = inst_31435;
var i__31430 = inst_31436;
var subscription = inst_31426;
var feed_data = inst_31415;
var group_idx = (0);
return ((function (feed,seq__31427,chunk__31428,count__31429,i__31430,subscription,feed_data,group_idx,inst_31435,inst_31434,inst_31433,inst_31441,inst_31426,inst_31415,inst_31436,inst_31446,inst_31447,inst_31448,inst_31449,state_val_31493,c__5809__auto__){
return (function (p1__31275_SHARP_){
return cljs.core.conj.call(null,p1__31275_SHARP_,feed);
});
;})(feed,seq__31427,chunk__31428,count__31429,i__31430,subscription,feed_data,group_idx,inst_31435,inst_31434,inst_31433,inst_31441,inst_31426,inst_31415,inst_31436,inst_31446,inst_31447,inst_31448,inst_31449,state_val_31493,c__5809__auto__))
})();
var inst_31451 = cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.update_in,inst_31449,inst_31450);
var inst_31452 = (inst_31436 + (1));
var tmp31505 = inst_31435;
var tmp31506 = inst_31434;
var tmp31507 = inst_31433;
var inst_31433__$1 = tmp31507;
var inst_31434__$1 = tmp31506;
var inst_31435__$1 = tmp31505;
var inst_31436__$1 = inst_31452;
var state_31492__$1 = (function (){var statearr_31511 = state_31492;
(statearr_31511[(12)] = inst_31435__$1);

(statearr_31511[(13)] = inst_31434__$1);

(statearr_31511[(14)] = inst_31433__$1);

(statearr_31511[(17)] = inst_31446);

(statearr_31511[(18)] = inst_31451);

(statearr_31511[(15)] = inst_31436__$1);

return statearr_31511;
})();
var statearr_31512_31542 = state_31492__$1;
(statearr_31512_31542[(2)] = null);

(statearr_31512_31542[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (9))){
var inst_31433 = (state_31492[(14)]);
var inst_31455 = (state_31492[(11)]);
var inst_31455__$1 = cljs.core.seq.call(null,inst_31433);
var state_31492__$1 = (function (){var statearr_31513 = state_31492;
(statearr_31513[(11)] = inst_31455__$1);

return statearr_31513;
})();
if(inst_31455__$1){
var statearr_31514_31543 = state_31492__$1;
(statearr_31514_31543[(1)] = (12));

} else {
var statearr_31515_31544 = state_31492__$1;
(statearr_31515_31544[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (5))){
var inst_31415 = (state_31492[(8)]);
var inst_31414 = (state_31492[(2)]);
var inst_31415__$1 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_31414);
var inst_31416 = cljs.core.PersistentHashMap.EMPTY;
var inst_31417 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(inst_31415__$1);
var inst_31418 = cljs.core.assoc.call(null,inst_31416,new cljs.core.Keyword(null,"title","title",636505583),inst_31417);
var inst_31419 = cljs_uuid_utils.make_random_uuid.call(null);
var inst_31420 = cljs_uuid_utils.uuid_string.call(null,inst_31419);
var inst_31421 = cljs.core.assoc.call(null,inst_31418,new cljs.core.Keyword(null,"uid","uid",-1447769400),inst_31420);
var inst_31422 = new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(inst_31415__$1);
var inst_31423 = cljs.core.assoc.call(null,inst_31421,new cljs.core.Keyword(null,"site-url","site-url",1492702733),inst_31422);
var inst_31424 = cljs.core.assoc.call(null,inst_31423,new cljs.core.Keyword(null,"feed-url","feed-url",1903210362),feed_url);
var inst_31425 = cljs.core.assoc.call(null,inst_31424,new cljs.core.Keyword(null,"favicon","favicon",-1214000341),"/images/favicon.png");
var inst_31426 = cljs.core.assoc.call(null,inst_31425,new cljs.core.Keyword(null,"pending","pending",-220036727),(0));
var inst_31431 = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(inst_31415__$1);
var inst_31432 = cljs.core.seq.call(null,inst_31431);
var inst_31433 = inst_31432;
var inst_31434 = null;
var inst_31435 = (0);
var inst_31436 = (0);
var state_31492__$1 = (function (){var statearr_31516 = state_31492;
(statearr_31516[(12)] = inst_31435);

(statearr_31516[(13)] = inst_31434);

(statearr_31516[(14)] = inst_31433);

(statearr_31516[(7)] = inst_31426);

(statearr_31516[(8)] = inst_31415__$1);

(statearr_31516[(15)] = inst_31436);

return statearr_31516;
})();
var statearr_31517_31545 = state_31492__$1;
(statearr_31517_31545[(2)] = null);

(statearr_31517_31545[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (14))){
var inst_31481 = (state_31492[(2)]);
var state_31492__$1 = state_31492;
var statearr_31518_31546 = state_31492__$1;
(statearr_31518_31546[(2)] = inst_31481);

(statearr_31518_31546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (16))){
var inst_31464 = (state_31492[(19)]);
var inst_31426 = (state_31492[(7)]);
var inst_31455 = (state_31492[(11)]);
var inst_31464__$1 = cljs.core.first.call(null,inst_31455);
var inst_31465 = new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(inst_31426);
var inst_31466 = cljs.core.assoc.call(null,inst_31464__$1,new cljs.core.Keyword(null,"feeduid","feeduid",1367071876),inst_31465);
var inst_31467 = ghoul.feeds_storage.add_feed.call(null,inst_31466);
var state_31492__$1 = (function (){var statearr_31519 = state_31492;
(statearr_31519[(19)] = inst_31464__$1);

return statearr_31519;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31492__$1,(18),inst_31467);
} else {
if((state_val_31493 === (10))){
var inst_31483 = (state_31492[(2)]);
var state_31492__$1 = state_31492;
var statearr_31520_31547 = state_31492__$1;
(statearr_31520_31547[(2)] = inst_31483);

(statearr_31520_31547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (18))){
var inst_31435 = (state_31492[(12)]);
var inst_31464 = (state_31492[(19)]);
var inst_31434 = (state_31492[(13)]);
var inst_31426 = (state_31492[(7)]);
var inst_31455 = (state_31492[(11)]);
var inst_31415 = (state_31492[(8)]);
var inst_31436 = (state_31492[(15)]);
var inst_31469 = (state_31492[(2)]);
var inst_31470 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31471 = [new cljs.core.Keyword(null,"feeds","feeds",855496306)];
var inst_31472 = (new cljs.core.PersistentVector(null,1,(5),inst_31470,inst_31471,null));
var inst_31473 = (function (){var feed = inst_31464;
var temp__4126__auto__ = inst_31455;
var seq__31427 = inst_31455;
var chunk__31428 = inst_31434;
var count__31429 = inst_31435;
var i__31430 = inst_31436;
var subscription = inst_31426;
var feed_data = inst_31415;
var group_idx = (0);
return ((function (feed,temp__4126__auto__,seq__31427,chunk__31428,count__31429,i__31430,subscription,feed_data,group_idx,inst_31435,inst_31464,inst_31434,inst_31426,inst_31455,inst_31415,inst_31436,inst_31469,inst_31470,inst_31471,inst_31472,state_val_31493,c__5809__auto__){
return (function (p1__31275_SHARP_){
return cljs.core.conj.call(null,p1__31275_SHARP_,feed);
});
;})(feed,temp__4126__auto__,seq__31427,chunk__31428,count__31429,i__31430,subscription,feed_data,group_idx,inst_31435,inst_31464,inst_31434,inst_31426,inst_31455,inst_31415,inst_31436,inst_31469,inst_31470,inst_31471,inst_31472,state_val_31493,c__5809__auto__))
})();
var inst_31474 = cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.update_in,inst_31472,inst_31473);
var inst_31475 = cljs.core.next.call(null,inst_31455);
var inst_31433 = inst_31475;
var inst_31434__$1 = null;
var inst_31435__$1 = (0);
var inst_31436__$1 = (0);
var state_31492__$1 = (function (){var statearr_31521 = state_31492;
(statearr_31521[(12)] = inst_31435__$1);

(statearr_31521[(20)] = inst_31469);

(statearr_31521[(21)] = inst_31474);

(statearr_31521[(13)] = inst_31434__$1);

(statearr_31521[(14)] = inst_31433);

(statearr_31521[(15)] = inst_31436__$1);

return statearr_31521;
})();
var statearr_31522_31548 = state_31492__$1;
(statearr_31522_31548[(2)] = null);

(statearr_31522_31548[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (8))){
var inst_31434 = (state_31492[(13)]);
var inst_31441 = (state_31492[(16)]);
var inst_31426 = (state_31492[(7)]);
var inst_31436 = (state_31492[(15)]);
var inst_31441__$1 = cljs.core._nth.call(null,inst_31434,inst_31436);
var inst_31442 = new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(inst_31426);
var inst_31443 = cljs.core.assoc.call(null,inst_31441__$1,new cljs.core.Keyword(null,"feeduid","feeduid",1367071876),inst_31442);
var inst_31444 = ghoul.feeds_storage.add_feed.call(null,inst_31443);
var state_31492__$1 = (function (){var statearr_31523 = state_31492;
(statearr_31523[(16)] = inst_31441__$1);

return statearr_31523;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31492__$1,(11),inst_31444);
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
var statearr_31527 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31527[(0)] = state_machine__5795__auto__);

(statearr_31527[(1)] = (1));

return statearr_31527;
});
var state_machine__5795__auto____1 = (function (state_31492){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_31492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e31528){if((e31528 instanceof Object)){
var ex__5798__auto__ = e31528;
var statearr_31529_31549 = state_31492;
(statearr_31529_31549[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31550 = state_31492;
state_31492 = G__31550;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_31492){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_31492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_31530 = f__5810__auto__.call(null);
(statearr_31530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_31530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto__))
);

return c__5809__auto__;
});
ghoul.state.store_state = (function store_state(state){
return cljs.core.assoc_BANG_.call(null,hodgepodge.core.local_storage,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"feeds","feeds",855496306)));
});
goog.exportSymbol('ghoul.state.store_state', ghoul.state.store_state);
ghoul.state.restore_state = (function restore_state(state_atom){
return cljs.core.reset_BANG_.call(null,state_atom,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(hodgepodge.core.local_storage));
});
goog.exportSymbol('ghoul.state.restore_state', ghoul.state.restore_state);
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
