// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.worker.feed_web_worker');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('ghoul.feeds_storage');
goog.require('ghoul.feeds_storage');
goog.require('ghoul.http');
goog.require('ghoul.http');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
ghoul.worker.feed_web_worker.refresh_time_milis = (((30) * (60)) * (1000));
ghoul.worker.feed_web_worker.update_feed = (function update_feed(feed_uid,feed_url){
var c__5809__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto__){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto__){
return (function (state_22563){
var state_val_22564 = (state_22563[(1)]);
if((state_val_22564 === (7))){
var inst_22554 = (state_22563[(2)]);
var state_22563__$1 = state_22563;
var statearr_22565_22595 = state_22563__$1;
(statearr_22565_22595[(2)] = inst_22554);

(statearr_22565_22595[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22564 === (1))){
var inst_22506 = ghoul.http.get_rss.call(null,feed_url);
var state_22563__$1 = state_22563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22563__$1,(2),inst_22506);
} else {
if((state_val_22564 === (4))){
var inst_22556 = (state_22563[(2)]);
var inst_22557 = [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Keyword(null,"result","result",1415092211)];
var inst_22558 = ["update",feed_uid,"ok"];
var inst_22559 = cljs.core.PersistentHashMap.fromArrays(inst_22557,inst_22558);
var inst_22560 = cljs.core.clj__GT_js.call(null,inst_22559);
var inst_22561 = postMessage(inst_22560);
var state_22563__$1 = (function (){var statearr_22566 = state_22563;
(statearr_22566[(7)] = inst_22556);

return statearr_22566;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22563__$1,inst_22561);
} else {
if((state_val_22564 === (15))){
var inst_22532 = (state_22563[(8)]);
var inst_22545 = (state_22563[(2)]);
var inst_22546 = cljs.core.next.call(null,inst_22532);
var inst_22516 = inst_22546;
var inst_22517 = null;
var inst_22518 = (0);
var inst_22519 = (0);
var state_22563__$1 = (function (){var statearr_22567 = state_22563;
(statearr_22567[(9)] = inst_22517);

(statearr_22567[(10)] = inst_22519);

(statearr_22567[(11)] = inst_22545);

(statearr_22567[(12)] = inst_22516);

(statearr_22567[(13)] = inst_22518);

return statearr_22567;
})();
var statearr_22568_22596 = state_22563__$1;
(statearr_22568_22596[(2)] = null);

(statearr_22568_22596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22564 === (13))){
var inst_22532 = (state_22563[(8)]);
var inst_22541 = cljs.core.first.call(null,inst_22532);
var inst_22542 = cljs.core.assoc.call(null,inst_22541,new cljs.core.Keyword(null,"feeduid","feeduid",1367071876),feed_uid);
var inst_22543 = ghoul.feeds_storage.add_feed.call(null,inst_22542);
var state_22563__$1 = state_22563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22563__$1,(15),inst_22543);
} else {
if((state_val_22564 === (6))){
var inst_22516 = (state_22563[(12)]);
var inst_22532 = (state_22563[(8)]);
var inst_22532__$1 = cljs.core.seq.call(null,inst_22516);
var state_22563__$1 = (function (){var statearr_22569 = state_22563;
(statearr_22569[(8)] = inst_22532__$1);

return statearr_22569;
})();
if(inst_22532__$1){
var statearr_22570_22597 = state_22563__$1;
(statearr_22570_22597[(1)] = (9));

} else {
var statearr_22571_22598 = state_22563__$1;
(statearr_22571_22598[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22564 === (3))){
var inst_22519 = (state_22563[(10)]);
var inst_22518 = (state_22563[(13)]);
var inst_22521 = (inst_22519 < inst_22518);
var inst_22522 = inst_22521;
var state_22563__$1 = state_22563;
if(cljs.core.truth_(inst_22522)){
var statearr_22572_22599 = state_22563__$1;
(statearr_22572_22599[(1)] = (5));

} else {
var statearr_22573_22600 = state_22563__$1;
(statearr_22573_22600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22564 === (12))){
var inst_22532 = (state_22563[(8)]);
var inst_22536 = cljs.core.chunk_first.call(null,inst_22532);
var inst_22537 = cljs.core.chunk_rest.call(null,inst_22532);
var inst_22538 = cljs.core.count.call(null,inst_22536);
var inst_22516 = inst_22537;
var inst_22517 = inst_22536;
var inst_22518 = inst_22538;
var inst_22519 = (0);
var state_22563__$1 = (function (){var statearr_22574 = state_22563;
(statearr_22574[(9)] = inst_22517);

(statearr_22574[(10)] = inst_22519);

(statearr_22574[(12)] = inst_22516);

(statearr_22574[(13)] = inst_22518);

return statearr_22574;
})();
var statearr_22575_22601 = state_22563__$1;
(statearr_22575_22601[(2)] = null);

(statearr_22575_22601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22564 === (2))){
var inst_22508 = (state_22563[(2)]);
var inst_22509 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_22508);
var inst_22510 = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(inst_22509);
var inst_22515 = cljs.core.seq.call(null,inst_22510);
var inst_22516 = inst_22515;
var inst_22517 = null;
var inst_22518 = (0);
var inst_22519 = (0);
var state_22563__$1 = (function (){var statearr_22576 = state_22563;
(statearr_22576[(9)] = inst_22517);

(statearr_22576[(10)] = inst_22519);

(statearr_22576[(12)] = inst_22516);

(statearr_22576[(13)] = inst_22518);

return statearr_22576;
})();
var statearr_22577_22602 = state_22563__$1;
(statearr_22577_22602[(2)] = null);

(statearr_22577_22602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22564 === (11))){
var inst_22552 = (state_22563[(2)]);
var state_22563__$1 = state_22563;
var statearr_22578_22603 = state_22563__$1;
(statearr_22578_22603[(2)] = inst_22552);

(statearr_22578_22603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22564 === (9))){
var inst_22532 = (state_22563[(8)]);
var inst_22534 = cljs.core.chunked_seq_QMARK_.call(null,inst_22532);
var state_22563__$1 = state_22563;
if(inst_22534){
var statearr_22579_22604 = state_22563__$1;
(statearr_22579_22604[(1)] = (12));

} else {
var statearr_22580_22605 = state_22563__$1;
(statearr_22580_22605[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22564 === (5))){
var inst_22517 = (state_22563[(9)]);
var inst_22519 = (state_22563[(10)]);
var inst_22524 = cljs.core._nth.call(null,inst_22517,inst_22519);
var inst_22525 = cljs.core.assoc.call(null,inst_22524,new cljs.core.Keyword(null,"feeduid","feeduid",1367071876),feed_uid);
var inst_22526 = ghoul.feeds_storage.add_feed.call(null,inst_22525);
var state_22563__$1 = state_22563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22563__$1,(8),inst_22526);
} else {
if((state_val_22564 === (14))){
var inst_22549 = (state_22563[(2)]);
var state_22563__$1 = state_22563;
var statearr_22584_22606 = state_22563__$1;
(statearr_22584_22606[(2)] = inst_22549);

(statearr_22584_22606[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22564 === (10))){
var state_22563__$1 = state_22563;
var statearr_22585_22607 = state_22563__$1;
(statearr_22585_22607[(2)] = null);

(statearr_22585_22607[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22564 === (8))){
var inst_22517 = (state_22563[(9)]);
var inst_22519 = (state_22563[(10)]);
var inst_22516 = (state_22563[(12)]);
var inst_22518 = (state_22563[(13)]);
var inst_22528 = (state_22563[(2)]);
var inst_22529 = (inst_22519 + (1));
var tmp22581 = inst_22517;
var tmp22582 = inst_22516;
var tmp22583 = inst_22518;
var inst_22516__$1 = tmp22582;
var inst_22517__$1 = tmp22581;
var inst_22518__$1 = tmp22583;
var inst_22519__$1 = inst_22529;
var state_22563__$1 = (function (){var statearr_22586 = state_22563;
(statearr_22586[(14)] = inst_22528);

(statearr_22586[(9)] = inst_22517__$1);

(statearr_22586[(10)] = inst_22519__$1);

(statearr_22586[(12)] = inst_22516__$1);

(statearr_22586[(13)] = inst_22518__$1);

return statearr_22586;
})();
var statearr_22587_22608 = state_22563__$1;
(statearr_22587_22608[(2)] = null);

(statearr_22587_22608[(1)] = (3));


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
});})(c__5809__auto__))
;
return ((function (switch__5794__auto__,c__5809__auto__){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_22591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22591[(0)] = state_machine__5795__auto__);

(statearr_22591[(1)] = (1));

return statearr_22591;
});
var state_machine__5795__auto____1 = (function (state_22563){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_22563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e22592){if((e22592 instanceof Object)){
var ex__5798__auto__ = e22592;
var statearr_22593_22609 = state_22563;
(statearr_22593_22609[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22610 = state_22563;
state_22563 = G__22610;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_22563){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_22563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_22594 = f__5810__auto__.call(null);
(statearr_22594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_22594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto__))
);

return c__5809__auto__;
});
ghoul.worker.feed_web_worker.manage_command = (function manage_command(event){
var data = cljs.core.js__GT_clj.call(null,event.data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(data),"update")){
return ghoul.worker.feed_web_worker.update_feed.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(data));
} else {
return console.log([cljs.core.str(event)].join(''));

}
});
addEventListener("message",ghoul.worker.feed_web_worker.manage_command);
ghoul.feeds_storage.init_database.call(null);
