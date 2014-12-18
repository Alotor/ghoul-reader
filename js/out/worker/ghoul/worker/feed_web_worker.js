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
return (function (state_19491){
var state_val_19492 = (state_19491[(1)]);
if((state_val_19492 === (7))){
var inst_19482 = (state_19491[(2)]);
var state_19491__$1 = state_19491;
var statearr_19493_19523 = state_19491__$1;
(statearr_19493_19523[(2)] = inst_19482);

(statearr_19493_19523[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19492 === (1))){
var inst_19434 = ghoul.http.get_rss.call(null,feed_url);
var state_19491__$1 = state_19491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19491__$1,(2),inst_19434);
} else {
if((state_val_19492 === (4))){
var inst_19484 = (state_19491[(2)]);
var inst_19485 = [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Keyword(null,"result","result",1415092211)];
var inst_19486 = ["update",feed_uid,"ok"];
var inst_19487 = cljs.core.PersistentHashMap.fromArrays(inst_19485,inst_19486);
var inst_19488 = cljs.core.clj__GT_js.call(null,inst_19487);
var inst_19489 = postMessage(inst_19488);
var state_19491__$1 = (function (){var statearr_19494 = state_19491;
(statearr_19494[(7)] = inst_19484);

return statearr_19494;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19491__$1,inst_19489);
} else {
if((state_val_19492 === (15))){
var inst_19460 = (state_19491[(8)]);
var inst_19473 = (state_19491[(2)]);
var inst_19474 = cljs.core.next.call(null,inst_19460);
var inst_19444 = inst_19474;
var inst_19445 = null;
var inst_19446 = (0);
var inst_19447 = (0);
var state_19491__$1 = (function (){var statearr_19495 = state_19491;
(statearr_19495[(9)] = inst_19444);

(statearr_19495[(10)] = inst_19473);

(statearr_19495[(11)] = inst_19446);

(statearr_19495[(12)] = inst_19447);

(statearr_19495[(13)] = inst_19445);

return statearr_19495;
})();
var statearr_19496_19524 = state_19491__$1;
(statearr_19496_19524[(2)] = null);

(statearr_19496_19524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19492 === (13))){
var inst_19460 = (state_19491[(8)]);
var inst_19469 = cljs.core.first.call(null,inst_19460);
var inst_19470 = cljs.core.assoc.call(null,inst_19469,new cljs.core.Keyword(null,"feeduid","feeduid",1367071876),feed_uid);
var inst_19471 = ghoul.feeds_storage.add_feed.call(null,inst_19470);
var state_19491__$1 = state_19491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19491__$1,(15),inst_19471);
} else {
if((state_val_19492 === (6))){
var inst_19444 = (state_19491[(9)]);
var inst_19460 = (state_19491[(8)]);
var inst_19460__$1 = cljs.core.seq.call(null,inst_19444);
var state_19491__$1 = (function (){var statearr_19497 = state_19491;
(statearr_19497[(8)] = inst_19460__$1);

return statearr_19497;
})();
if(inst_19460__$1){
var statearr_19498_19525 = state_19491__$1;
(statearr_19498_19525[(1)] = (9));

} else {
var statearr_19499_19526 = state_19491__$1;
(statearr_19499_19526[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19492 === (3))){
var inst_19446 = (state_19491[(11)]);
var inst_19447 = (state_19491[(12)]);
var inst_19449 = (inst_19447 < inst_19446);
var inst_19450 = inst_19449;
var state_19491__$1 = state_19491;
if(cljs.core.truth_(inst_19450)){
var statearr_19500_19527 = state_19491__$1;
(statearr_19500_19527[(1)] = (5));

} else {
var statearr_19501_19528 = state_19491__$1;
(statearr_19501_19528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19492 === (12))){
var inst_19460 = (state_19491[(8)]);
var inst_19464 = cljs.core.chunk_first.call(null,inst_19460);
var inst_19465 = cljs.core.chunk_rest.call(null,inst_19460);
var inst_19466 = cljs.core.count.call(null,inst_19464);
var inst_19444 = inst_19465;
var inst_19445 = inst_19464;
var inst_19446 = inst_19466;
var inst_19447 = (0);
var state_19491__$1 = (function (){var statearr_19502 = state_19491;
(statearr_19502[(9)] = inst_19444);

(statearr_19502[(11)] = inst_19446);

(statearr_19502[(12)] = inst_19447);

(statearr_19502[(13)] = inst_19445);

return statearr_19502;
})();
var statearr_19503_19529 = state_19491__$1;
(statearr_19503_19529[(2)] = null);

(statearr_19503_19529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19492 === (2))){
var inst_19436 = (state_19491[(2)]);
var inst_19437 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_19436);
var inst_19438 = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(inst_19437);
var inst_19443 = cljs.core.seq.call(null,inst_19438);
var inst_19444 = inst_19443;
var inst_19445 = null;
var inst_19446 = (0);
var inst_19447 = (0);
var state_19491__$1 = (function (){var statearr_19504 = state_19491;
(statearr_19504[(9)] = inst_19444);

(statearr_19504[(11)] = inst_19446);

(statearr_19504[(12)] = inst_19447);

(statearr_19504[(13)] = inst_19445);

return statearr_19504;
})();
var statearr_19505_19530 = state_19491__$1;
(statearr_19505_19530[(2)] = null);

(statearr_19505_19530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19492 === (11))){
var inst_19480 = (state_19491[(2)]);
var state_19491__$1 = state_19491;
var statearr_19506_19531 = state_19491__$1;
(statearr_19506_19531[(2)] = inst_19480);

(statearr_19506_19531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19492 === (9))){
var inst_19460 = (state_19491[(8)]);
var inst_19462 = cljs.core.chunked_seq_QMARK_.call(null,inst_19460);
var state_19491__$1 = state_19491;
if(inst_19462){
var statearr_19507_19532 = state_19491__$1;
(statearr_19507_19532[(1)] = (12));

} else {
var statearr_19508_19533 = state_19491__$1;
(statearr_19508_19533[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19492 === (5))){
var inst_19447 = (state_19491[(12)]);
var inst_19445 = (state_19491[(13)]);
var inst_19452 = cljs.core._nth.call(null,inst_19445,inst_19447);
var inst_19453 = cljs.core.assoc.call(null,inst_19452,new cljs.core.Keyword(null,"feeduid","feeduid",1367071876),feed_uid);
var inst_19454 = ghoul.feeds_storage.add_feed.call(null,inst_19453);
var state_19491__$1 = state_19491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19491__$1,(8),inst_19454);
} else {
if((state_val_19492 === (14))){
var inst_19477 = (state_19491[(2)]);
var state_19491__$1 = state_19491;
var statearr_19512_19534 = state_19491__$1;
(statearr_19512_19534[(2)] = inst_19477);

(statearr_19512_19534[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19492 === (10))){
var state_19491__$1 = state_19491;
var statearr_19513_19535 = state_19491__$1;
(statearr_19513_19535[(2)] = null);

(statearr_19513_19535[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19492 === (8))){
var inst_19444 = (state_19491[(9)]);
var inst_19446 = (state_19491[(11)]);
var inst_19447 = (state_19491[(12)]);
var inst_19445 = (state_19491[(13)]);
var inst_19456 = (state_19491[(2)]);
var inst_19457 = (inst_19447 + (1));
var tmp19509 = inst_19444;
var tmp19510 = inst_19446;
var tmp19511 = inst_19445;
var inst_19444__$1 = tmp19509;
var inst_19445__$1 = tmp19511;
var inst_19446__$1 = tmp19510;
var inst_19447__$1 = inst_19457;
var state_19491__$1 = (function (){var statearr_19514 = state_19491;
(statearr_19514[(9)] = inst_19444__$1);

(statearr_19514[(11)] = inst_19446__$1);

(statearr_19514[(12)] = inst_19447__$1);

(statearr_19514[(14)] = inst_19456);

(statearr_19514[(13)] = inst_19445__$1);

return statearr_19514;
})();
var statearr_19515_19536 = state_19491__$1;
(statearr_19515_19536[(2)] = null);

(statearr_19515_19536[(1)] = (3));


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
var statearr_19519 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19519[(0)] = state_machine__5795__auto__);

(statearr_19519[(1)] = (1));

return statearr_19519;
});
var state_machine__5795__auto____1 = (function (state_19491){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_19491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e19520){if((e19520 instanceof Object)){
var ex__5798__auto__ = e19520;
var statearr_19521_19537 = state_19491;
(statearr_19521_19537[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19538 = state_19491;
state_19491 = G__19538;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_19491){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_19491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_19522 = f__5810__auto__.call(null);
(statearr_19522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_19522;
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
