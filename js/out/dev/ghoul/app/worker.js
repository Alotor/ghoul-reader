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
var seq__27602 = cljs.core.seq.call(null,list_uid_url);
var chunk__27603 = null;
var count__27604 = (0);
var i__27605 = (0);
while(true){
if((i__27605 < count__27604)){
var cur_uid_url = cljs.core._nth.call(null,chunk__27603,i__27605);
var vec__27606_27608 = cur_uid_url;
var uid_27609 = cljs.core.nth.call(null,vec__27606_27608,(0),null);
var url_27610 = cljs.core.nth.call(null,vec__27606_27608,(1),null);
ghoul.app.worker.read_feed.call(null,uid_27609,url_27610);

var G__27611 = seq__27602;
var G__27612 = chunk__27603;
var G__27613 = count__27604;
var G__27614 = (i__27605 + (1));
seq__27602 = G__27611;
chunk__27603 = G__27612;
count__27604 = G__27613;
i__27605 = G__27614;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__27602);
if(temp__4126__auto__){
var seq__27602__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27602__$1)){
var c__4390__auto__ = cljs.core.chunk_first.call(null,seq__27602__$1);
var G__27615 = cljs.core.chunk_rest.call(null,seq__27602__$1);
var G__27616 = c__4390__auto__;
var G__27617 = cljs.core.count.call(null,c__4390__auto__);
var G__27618 = (0);
seq__27602 = G__27615;
chunk__27603 = G__27616;
count__27604 = G__27617;
i__27605 = G__27618;
continue;
} else {
var cur_uid_url = cljs.core.first.call(null,seq__27602__$1);
var vec__27607_27619 = cur_uid_url;
var uid_27620 = cljs.core.nth.call(null,vec__27607_27619,(0),null);
var url_27621 = cljs.core.nth.call(null,vec__27607_27619,(1),null);
ghoul.app.worker.read_feed.call(null,uid_27620,url_27621);

var G__27622 = cljs.core.next.call(null,seq__27602__$1);
var G__27623 = null;
var G__27624 = (0);
var G__27625 = (0);
seq__27602 = G__27622;
chunk__27603 = G__27623;
count__27604 = G__27624;
i__27605 = G__27625;
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
return (function (state_27659){
var state_val_27660 = (state_27659[(1)]);
if((state_val_27660 === (4))){
var inst_27654 = (state_27659[(2)]);
var state_27659__$1 = (function (){var statearr_27661 = state_27659;
(statearr_27661[(7)] = inst_27654);

return statearr_27661;
})();
var statearr_27662_27672 = state_27659__$1;
(statearr_27662_27672[(2)] = null);

(statearr_27662_27672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27660 === (3))){
var inst_27657 = (state_27659[(2)]);
var state_27659__$1 = state_27659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27659__$1,inst_27657);
} else {
if((state_val_27660 === (2))){
var inst_27650 = ghoul.app.worker.update_all_feeds.call(null);
var inst_27651 = cljs.core.deref.call(null,ghoul.app.worker.refresh_time_milis);
var inst_27652 = cljs.core.async.timeout.call(null,inst_27651);
var state_27659__$1 = (function (){var statearr_27663 = state_27659;
(statearr_27663[(8)] = inst_27650);

return statearr_27663;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27659__$1,(4),inst_27652);
} else {
if((state_val_27660 === (1))){
var state_27659__$1 = state_27659;
var statearr_27664_27673 = state_27659__$1;
(statearr_27664_27673[(2)] = null);

(statearr_27664_27673[(1)] = (2));


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
var statearr_27668 = [null,null,null,null,null,null,null,null,null];
(statearr_27668[(0)] = state_machine__7289__auto__);

(statearr_27668[(1)] = (1));

return statearr_27668;
});
var state_machine__7289__auto____1 = (function (state_27659){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_27659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e27669){if((e27669 instanceof Object)){
var ex__7292__auto__ = e27669;
var statearr_27670_27674 = state_27659;
(statearr_27670_27674[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27675 = state_27659;
state_27659 = G__27675;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_27659){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_27659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto__))
})();
var state__7305__auto__ = (function (){var statearr_27671 = f__7304__auto__.call(null);
(statearr_27671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto__);

return statearr_27671;
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

//# sourceMappingURL=worker.js.map?rel=1420049677547