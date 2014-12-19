// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.worker_api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('ghoul.state');
goog.require('ghoul.state');
ghoul.worker_api.refresh_time_milis = (((5) * (60)) * (1000));
ghoul.worker_api.update_feed_worker = cljs.core.atom.call(null,null);
ghoul.worker_api.feed_update = (function feed_update(event){
var result = cljs.core.js__GT_clj.call(null,event.data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(result),"ok")){
return ghoul.state.include_feed.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(result));
} else {
return null;
}
});
ghoul.worker_api.read_feed = (function read_feed(uid,url){
console.log([cljs.core.str("Updating: "),cljs.core.str(uid),cljs.core.str(", "),cljs.core.str(url)].join(''));

cljs.core.deref.call(null,ghoul.worker_api.update_feed_worker).onmessage = ghoul.worker_api.feed_update;

return cljs.core.deref.call(null,ghoul.worker_api.update_feed_worker).postMessage({"url": url, "uid": uid, "action": "update"});
});
goog.exportSymbol('ghoul.worker_api.read_feed', ghoul.worker_api.read_feed);
ghoul.worker_api.update_all_feeds = (function update_all_feeds(){
var list_uid_url = ghoul.state.list_uid_url.call(null);
var seq__24367 = cljs.core.seq.call(null,list_uid_url);
var chunk__24368 = null;
var count__24369 = (0);
var i__24370 = (0);
while(true){
if((i__24370 < count__24369)){
var cur_uid_url = cljs.core._nth.call(null,chunk__24368,i__24370);
var uid_24371 = cljs.core.first.call(null,cur_uid_url);
var url_24372 = cljs.core.second.call(null,cur_uid_url);
ghoul.worker_api.read_feed.call(null,uid_24371,url_24372);

var G__24373 = seq__24367;
var G__24374 = chunk__24368;
var G__24375 = count__24369;
var G__24376 = (i__24370 + (1));
seq__24367 = G__24373;
chunk__24368 = G__24374;
count__24369 = G__24375;
i__24370 = G__24376;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__24367);
if(temp__4126__auto__){
var seq__24367__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24367__$1)){
var c__4390__auto__ = cljs.core.chunk_first.call(null,seq__24367__$1);
var G__24377 = cljs.core.chunk_rest.call(null,seq__24367__$1);
var G__24378 = c__4390__auto__;
var G__24379 = cljs.core.count.call(null,c__4390__auto__);
var G__24380 = (0);
seq__24367 = G__24377;
chunk__24368 = G__24378;
count__24369 = G__24379;
i__24370 = G__24380;
continue;
} else {
var cur_uid_url = cljs.core.first.call(null,seq__24367__$1);
var uid_24381 = cljs.core.first.call(null,cur_uid_url);
var url_24382 = cljs.core.second.call(null,cur_uid_url);
ghoul.worker_api.read_feed.call(null,uid_24381,url_24382);

var G__24383 = cljs.core.next.call(null,seq__24367__$1);
var G__24384 = null;
var G__24385 = (0);
var G__24386 = (0);
seq__24367 = G__24383;
chunk__24368 = G__24384;
count__24369 = G__24385;
i__24370 = G__24386;
continue;
}
} else {
return null;
}
}
break;
}
});
ghoul.worker_api.start_feed_worker = (function start_feed_worker(){
cljs.core.reset_BANG_.call(null,ghoul.worker_api.update_feed_worker,(new Worker("js/worker.js")));

var c__5809__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto__){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto__){
return (function (state_24418){
var state_val_24419 = (state_24418[(1)]);
if((state_val_24419 === (4))){
var inst_24413 = (state_24418[(2)]);
var state_24418__$1 = (function (){var statearr_24420 = state_24418;
(statearr_24420[(7)] = inst_24413);

return statearr_24420;
})();
var statearr_24421_24431 = state_24418__$1;
(statearr_24421_24431[(2)] = null);

(statearr_24421_24431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24419 === (3))){
var inst_24416 = (state_24418[(2)]);
var state_24418__$1 = state_24418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24418__$1,inst_24416);
} else {
if((state_val_24419 === (2))){
var inst_24410 = ghoul.worker_api.update_all_feeds.call(null);
var inst_24411 = cljs.core.async.timeout.call(null,ghoul.worker_api.refresh_time_milis);
var state_24418__$1 = (function (){var statearr_24422 = state_24418;
(statearr_24422[(8)] = inst_24410);

return statearr_24422;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24418__$1,(4),inst_24411);
} else {
if((state_val_24419 === (1))){
var state_24418__$1 = state_24418;
var statearr_24423_24432 = state_24418__$1;
(statearr_24423_24432[(2)] = null);

(statearr_24423_24432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
var statearr_24427 = [null,null,null,null,null,null,null,null,null];
(statearr_24427[(0)] = state_machine__5795__auto__);

(statearr_24427[(1)] = (1));

return statearr_24427;
});
var state_machine__5795__auto____1 = (function (state_24418){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_24418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e24428){if((e24428 instanceof Object)){
var ex__5798__auto__ = e24428;
var statearr_24429_24433 = state_24418;
(statearr_24429_24433[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24434 = state_24418;
state_24418 = G__24434;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_24418){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_24418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_24430 = f__5810__auto__.call(null);
(statearr_24430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_24430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto__))
);

return c__5809__auto__;
});
