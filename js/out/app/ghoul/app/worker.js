// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.app.worker');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('ghoul.app.state');
goog.require('ghoul.app.state');
goog.require('cljs.core.async');
ghoul.app.worker.refresh_time_milis = cljs.core.atom.call(null,(((5) * (60)) * (1000)));
ghoul.app.worker.update_feed_worker = cljs.core.atom.call(null,null);
ghoul.app.worker.feed_update = (function feed_update(event){
var result = cljs.core.js__GT_clj.call(null,event.data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(result),"ok")){
return ghoul.app.state.include_feed.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(result));
} else {
return null;
}
});
ghoul.app.worker.read_feed = (function read_feed(uid,url){
cljs.core.deref.call(null,ghoul.app.worker.update_feed_worker).onmessage = ghoul.app.worker.feed_update;

return cljs.core.deref.call(null,ghoul.app.worker.update_feed_worker).postMessage({"url": url, "uid": uid, "action": "update"});
});
goog.exportSymbol('ghoul.app.worker.read_feed', ghoul.app.worker.read_feed);
ghoul.app.worker.update_all_feeds = (function update_all_feeds(){
var list_uid_url = ghoul.app.state.list_uid_url.call(null);
var seq__11199 = cljs.core.seq.call(null,list_uid_url);
var chunk__11200 = null;
var count__11201 = (0);
var i__11202 = (0);
while(true){
if((i__11202 < count__11201)){
var cur_uid_url = cljs.core._nth.call(null,chunk__11200,i__11202);
var vec__11203_11205 = cur_uid_url;
var uid_11206 = cljs.core.nth.call(null,vec__11203_11205,(0),null);
var url_11207 = cljs.core.nth.call(null,vec__11203_11205,(1),null);
ghoul.app.worker.read_feed.call(null,uid_11206,url_11207);

var G__11208 = seq__11199;
var G__11209 = chunk__11200;
var G__11210 = count__11201;
var G__11211 = (i__11202 + (1));
seq__11199 = G__11208;
chunk__11200 = G__11209;
count__11201 = G__11210;
i__11202 = G__11211;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__11199);
if(temp__4126__auto__){
var seq__11199__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11199__$1)){
var c__4390__auto__ = cljs.core.chunk_first.call(null,seq__11199__$1);
var G__11212 = cljs.core.chunk_rest.call(null,seq__11199__$1);
var G__11213 = c__4390__auto__;
var G__11214 = cljs.core.count.call(null,c__4390__auto__);
var G__11215 = (0);
seq__11199 = G__11212;
chunk__11200 = G__11213;
count__11201 = G__11214;
i__11202 = G__11215;
continue;
} else {
var cur_uid_url = cljs.core.first.call(null,seq__11199__$1);
var vec__11204_11216 = cur_uid_url;
var uid_11217 = cljs.core.nth.call(null,vec__11204_11216,(0),null);
var url_11218 = cljs.core.nth.call(null,vec__11204_11216,(1),null);
ghoul.app.worker.read_feed.call(null,uid_11217,url_11218);

var G__11219 = cljs.core.next.call(null,seq__11199__$1);
var G__11220 = null;
var G__11221 = (0);
var G__11222 = (0);
seq__11199 = G__11219;
chunk__11200 = G__11220;
count__11201 = G__11221;
i__11202 = G__11222;
continue;
}
} else {
return null;
}
}
break;
}
});
ghoul.app.worker.start_feed_worker = (function start_feed_worker(){
cljs.core.reset_BANG_.call(null,ghoul.app.worker.update_feed_worker,(new Worker("js/worker.js")));

var c__7303__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto__){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto__){
return (function (state_11256){
var state_val_11257 = (state_11256[(1)]);
if((state_val_11257 === (4))){
var inst_11251 = (state_11256[(2)]);
var state_11256__$1 = (function (){var statearr_11258 = state_11256;
(statearr_11258[(7)] = inst_11251);

return statearr_11258;
})();
var statearr_11259_11269 = state_11256__$1;
(statearr_11259_11269[(2)] = null);

(statearr_11259_11269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11257 === (3))){
var inst_11254 = (state_11256[(2)]);
var state_11256__$1 = state_11256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11256__$1,inst_11254);
} else {
if((state_val_11257 === (2))){
var inst_11247 = ghoul.app.worker.update_all_feeds.call(null);
var inst_11248 = cljs.core.deref.call(null,ghoul.app.worker.refresh_time_milis);
var inst_11249 = cljs.core.async.timeout.call(null,inst_11248);
var state_11256__$1 = (function (){var statearr_11260 = state_11256;
(statearr_11260[(8)] = inst_11247);

return statearr_11260;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11256__$1,(4),inst_11249);
} else {
if((state_val_11257 === (1))){
var state_11256__$1 = state_11256;
var statearr_11261_11270 = state_11256__$1;
(statearr_11261_11270[(2)] = null);

(statearr_11261_11270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
var statearr_11265 = [null,null,null,null,null,null,null,null,null];
(statearr_11265[(0)] = state_machine__7289__auto__);

(statearr_11265[(1)] = (1));

return statearr_11265;
});
var state_machine__7289__auto____1 = (function (state_11256){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_11256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e11266){if((e11266 instanceof Object)){
var ex__7292__auto__ = e11266;
var statearr_11267_11271 = state_11256;
(statearr_11267_11271[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11272 = state_11256;
state_11256 = G__11272;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_11256){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_11256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto__))
})();
var state__7305__auto__ = (function (){var statearr_11268 = f__7304__auto__.call(null);
(statearr_11268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto__);

return statearr_11268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto__))
);

return c__7303__auto__;
});
ghoul.app.worker.refresh_timer = (function refresh_timer(new_timer){
return cljs.core.reset_BANG_.call(null,ghoul.app.worker.refresh_time_milis,new_timer);
});
goog.exportSymbol('ghoul.app.worker.refresh_timer', ghoul.app.worker.refresh_timer);
