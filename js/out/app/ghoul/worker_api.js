// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.worker_api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('ghoul.state');
goog.require('ghoul.state');
ghoul.worker_api.refresh_time_milis = cljs.core.atom.call(null,(((5) * (60)) * (1000)));
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
ghoul.worker_api.update_all_feeds = (function update_all_feeds(){
var list_uid_url = ghoul.state.list_uid_url.call(null);
var seq__24807 = cljs.core.seq.call(null,list_uid_url);
var chunk__24808 = null;
var count__24809 = (0);
var i__24810 = (0);
while(true){
if((i__24810 < count__24809)){
var cur_uid_url = cljs.core._nth.call(null,chunk__24808,i__24810);
var uid_24811 = cljs.core.first.call(null,cur_uid_url);
var url_24812 = cljs.core.second.call(null,cur_uid_url);
ghoul.worker_api.read_feed.call(null,uid_24811,url_24812);

var G__24813 = seq__24807;
var G__24814 = chunk__24808;
var G__24815 = count__24809;
var G__24816 = (i__24810 + (1));
seq__24807 = G__24813;
chunk__24808 = G__24814;
count__24809 = G__24815;
i__24810 = G__24816;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__24807);
if(temp__4126__auto__){
var seq__24807__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24807__$1)){
var c__4390__auto__ = cljs.core.chunk_first.call(null,seq__24807__$1);
var G__24817 = cljs.core.chunk_rest.call(null,seq__24807__$1);
var G__24818 = c__4390__auto__;
var G__24819 = cljs.core.count.call(null,c__4390__auto__);
var G__24820 = (0);
seq__24807 = G__24817;
chunk__24808 = G__24818;
count__24809 = G__24819;
i__24810 = G__24820;
continue;
} else {
var cur_uid_url = cljs.core.first.call(null,seq__24807__$1);
var uid_24821 = cljs.core.first.call(null,cur_uid_url);
var url_24822 = cljs.core.second.call(null,cur_uid_url);
ghoul.worker_api.read_feed.call(null,uid_24821,url_24822);

var G__24823 = cljs.core.next.call(null,seq__24807__$1);
var G__24824 = null;
var G__24825 = (0);
var G__24826 = (0);
seq__24807 = G__24823;
chunk__24808 = G__24824;
count__24809 = G__24825;
i__24810 = G__24826;
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
return (function (state_24862){
var state_val_24863 = (state_24862[(1)]);
if((state_val_24863 === (4))){
var inst_24856 = (state_24862[(2)]);
var inst_24857 = console.log("Updating feeds");
var state_24862__$1 = (function (){var statearr_24864 = state_24862;
(statearr_24864[(7)] = inst_24856);

(statearr_24864[(8)] = inst_24857);

return statearr_24864;
})();
var statearr_24865_24875 = state_24862__$1;
(statearr_24865_24875[(2)] = null);

(statearr_24865_24875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24863 === (3))){
var inst_24860 = (state_24862[(2)]);
var state_24862__$1 = state_24862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24862__$1,inst_24860);
} else {
if((state_val_24863 === (2))){
var inst_24852 = ghoul.worker_api.update_all_feeds.call(null);
var inst_24853 = cljs.core.deref.call(null,ghoul.worker_api.refresh_time_milis);
var inst_24854 = cljs.core.async.timeout.call(null,inst_24853);
var state_24862__$1 = (function (){var statearr_24866 = state_24862;
(statearr_24866[(9)] = inst_24852);

return statearr_24866;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24862__$1,(4),inst_24854);
} else {
if((state_val_24863 === (1))){
var state_24862__$1 = state_24862;
var statearr_24867_24876 = state_24862__$1;
(statearr_24867_24876[(2)] = null);

(statearr_24867_24876[(1)] = (2));


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
var statearr_24871 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24871[(0)] = state_machine__5795__auto__);

(statearr_24871[(1)] = (1));

return statearr_24871;
});
var state_machine__5795__auto____1 = (function (state_24862){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_24862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e24872){if((e24872 instanceof Object)){
var ex__5798__auto__ = e24872;
var statearr_24873_24877 = state_24862;
(statearr_24873_24877[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24878 = state_24862;
state_24862 = G__24878;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_24862){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_24862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_24874 = f__5810__auto__.call(null);
(statearr_24874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_24874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto__))
);

return c__5809__auto__;
});
goog.exportSymbol('ghoul.worker_api.start_feed_worker', ghoul.worker_api.start_feed_worker);
ghoul.worker_api.refresh_timer = (function refresh_timer(new_timer){
return cljs.core.reset_BANG_.call(null,ghoul.worker_api.refresh_time_milis,new_timer);
});
goog.exportSymbol('ghoul.worker_api.refresh_timer', ghoul.worker_api.refresh_timer);
