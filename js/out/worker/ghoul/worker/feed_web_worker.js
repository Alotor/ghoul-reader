// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.worker.feed_web_worker');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('ghoul.http');
goog.require('ghoul.http');
goog.require('cuerdas.core');
goog.require('cuerdas.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
ghoul.worker.feed_web_worker.cors_service = "https://cors-anywhere.herokuapp.com/";
ghoul.worker.feed_web_worker.refresh_time_milis = (((30) * (60)) * (1000));
ghoul.worker.feed_web_worker.feed_list = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://rss.slashdot.org/Slashdot/slashdot","http://blog.taiga.io/feeds/rss.xml","http://blog.cognitect.com/blog?format=rss"], null);
ghoul.worker.feed_web_worker.periodic_read = (function periodic_read(){
var c__7427__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7427__auto__){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (c__7427__auto__){
return (function (state_25016){
var state_val_25017 = (state_25016[(1)]);
if((state_val_25017 === (7))){
var inst_24972 = (state_25016[(7)]);
var inst_24973 = (state_25016[(8)]);
var inst_24970 = (state_25016[(9)]);
var inst_24971 = (state_25016[(10)]);
var inst_24982 = (state_25016[(2)]);
var inst_24983 = cljs.core.clj__GT_js.call(null,inst_24982);
var inst_24984 = postMessage(inst_24983);
var inst_24985 = (inst_24973 + (1));
var tmp25018 = inst_24972;
var tmp25019 = inst_24970;
var tmp25020 = inst_24971;
var inst_24970__$1 = tmp25019;
var inst_24971__$1 = tmp25020;
var inst_24972__$1 = tmp25018;
var inst_24973__$1 = inst_24985;
var state_25016__$1 = (function (){var statearr_25021 = state_25016;
(statearr_25021[(11)] = inst_24984);

(statearr_25021[(7)] = inst_24972__$1);

(statearr_25021[(8)] = inst_24973__$1);

(statearr_25021[(9)] = inst_24970__$1);

(statearr_25021[(10)] = inst_24971__$1);

return statearr_25021;
})();
var statearr_25022_25047 = state_25016__$1;
(statearr_25022_25047[(2)] = null);

(statearr_25022_25047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (1))){
var inst_24969 = cljs.core.seq.call(null,ghoul.worker.feed_web_worker.feed_list);
var inst_24970 = inst_24969;
var inst_24971 = null;
var inst_24972 = (0);
var inst_24973 = (0);
var state_25016__$1 = (function (){var statearr_25023 = state_25016;
(statearr_25023[(7)] = inst_24972);

(statearr_25023[(8)] = inst_24973);

(statearr_25023[(9)] = inst_24970);

(statearr_25023[(10)] = inst_24971);

return statearr_25023;
})();
var statearr_25024_25048 = state_25016__$1;
(statearr_25024_25048[(2)] = null);

(statearr_25024_25048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (4))){
var inst_24973 = (state_25016[(8)]);
var inst_24971 = (state_25016[(10)]);
var inst_24978 = cljs.core._nth.call(null,inst_24971,inst_24973);
var inst_24979 = cuerdas.core.replace_first.call(null,inst_24978,/http:\/\//,ghoul.worker.feed_web_worker.cors_service);
var inst_24980 = ghoul.http.get_rss.call(null,inst_24979);
var state_25016__$1 = state_25016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25016__$1,(7),inst_24980);
} else {
if((state_val_25017 === (13))){
var inst_25007 = (state_25016[(2)]);
var state_25016__$1 = state_25016;
var statearr_25025_25049 = state_25016__$1;
(statearr_25025_25049[(2)] = inst_25007);

(statearr_25025_25049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (6))){
var inst_25012 = (state_25016[(2)]);
var state_25016__$1 = state_25016;
var statearr_25026_25050 = state_25016__$1;
(statearr_25026_25050[(2)] = inst_25012);

(statearr_25026_25050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (3))){
var inst_25014 = (state_25016[(2)]);
var state_25016__$1 = state_25016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25016__$1,inst_25014);
} else {
if((state_val_25017 === (12))){
var inst_24988 = (state_25016[(12)]);
var inst_24997 = cljs.core.first.call(null,inst_24988);
var inst_24998 = cuerdas.core.replace_first.call(null,inst_24997,/http:\/\//,ghoul.worker.feed_web_worker.cors_service);
var inst_24999 = ghoul.http.get_rss.call(null,inst_24998);
var state_25016__$1 = state_25016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25016__$1,(14),inst_24999);
} else {
if((state_val_25017 === (2))){
var inst_24972 = (state_25016[(7)]);
var inst_24973 = (state_25016[(8)]);
var inst_24975 = (inst_24973 < inst_24972);
var inst_24976 = inst_24975;
var state_25016__$1 = state_25016;
if(cljs.core.truth_(inst_24976)){
var statearr_25027_25051 = state_25016__$1;
(statearr_25027_25051[(1)] = (4));

} else {
var statearr_25028_25052 = state_25016__$1;
(statearr_25028_25052[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (11))){
var inst_24988 = (state_25016[(12)]);
var inst_24992 = cljs.core.chunk_first.call(null,inst_24988);
var inst_24993 = cljs.core.chunk_rest.call(null,inst_24988);
var inst_24994 = cljs.core.count.call(null,inst_24992);
var inst_24970 = inst_24993;
var inst_24971 = inst_24992;
var inst_24972 = inst_24994;
var inst_24973 = (0);
var state_25016__$1 = (function (){var statearr_25029 = state_25016;
(statearr_25029[(7)] = inst_24972);

(statearr_25029[(8)] = inst_24973);

(statearr_25029[(9)] = inst_24970);

(statearr_25029[(10)] = inst_24971);

return statearr_25029;
})();
var statearr_25030_25053 = state_25016__$1;
(statearr_25030_25053[(2)] = null);

(statearr_25030_25053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (9))){
var state_25016__$1 = state_25016;
var statearr_25031_25054 = state_25016__$1;
(statearr_25031_25054[(2)] = null);

(statearr_25031_25054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (5))){
var inst_24988 = (state_25016[(12)]);
var inst_24970 = (state_25016[(9)]);
var inst_24988__$1 = cljs.core.seq.call(null,inst_24970);
var state_25016__$1 = (function (){var statearr_25032 = state_25016;
(statearr_25032[(12)] = inst_24988__$1);

return statearr_25032;
})();
if(inst_24988__$1){
var statearr_25033_25055 = state_25016__$1;
(statearr_25033_25055[(1)] = (8));

} else {
var statearr_25034_25056 = state_25016__$1;
(statearr_25034_25056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (14))){
var inst_24988 = (state_25016[(12)]);
var inst_25001 = (state_25016[(2)]);
var inst_25002 = cljs.core.clj__GT_js.call(null,inst_25001);
var inst_25003 = postMessage(inst_25002);
var inst_25004 = cljs.core.next.call(null,inst_24988);
var inst_24970 = inst_25004;
var inst_24971 = null;
var inst_24972 = (0);
var inst_24973 = (0);
var state_25016__$1 = (function (){var statearr_25035 = state_25016;
(statearr_25035[(13)] = inst_25003);

(statearr_25035[(7)] = inst_24972);

(statearr_25035[(8)] = inst_24973);

(statearr_25035[(9)] = inst_24970);

(statearr_25035[(10)] = inst_24971);

return statearr_25035;
})();
var statearr_25036_25057 = state_25016__$1;
(statearr_25036_25057[(2)] = null);

(statearr_25036_25057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (10))){
var inst_25010 = (state_25016[(2)]);
var state_25016__$1 = state_25016;
var statearr_25037_25058 = state_25016__$1;
(statearr_25037_25058[(2)] = inst_25010);

(statearr_25037_25058[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (8))){
var inst_24988 = (state_25016[(12)]);
var inst_24990 = cljs.core.chunked_seq_QMARK_.call(null,inst_24988);
var state_25016__$1 = state_25016;
if(inst_24990){
var statearr_25038_25059 = state_25016__$1;
(statearr_25038_25059[(1)] = (11));

} else {
var statearr_25039_25060 = state_25016__$1;
(statearr_25039_25060[(1)] = (12));

}

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
});})(c__7427__auto__))
;
return ((function (switch__7371__auto__,c__7427__auto__){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_25043 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25043[(0)] = state_machine__7372__auto__);

(statearr_25043[(1)] = (1));

return statearr_25043;
});
var state_machine__7372__auto____1 = (function (state_25016){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_25016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e25044){if((e25044 instanceof Object)){
var ex__7375__auto__ = e25044;
var statearr_25045_25061 = state_25016;
(statearr_25045_25061[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25062 = state_25016;
state_25016 = G__25062;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_25016){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_25016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto__))
})();
var state__7429__auto__ = (function (){var statearr_25046 = f__7428__auto__.call(null);
(statearr_25046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto__);

return statearr_25046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(c__7427__auto__))
);

return c__7427__auto__;
});
goog.exportSymbol('ghoul.worker.feed_web_worker.periodic_read', ghoul.worker.feed_web_worker.periodic_read);
ghoul.worker.feed_web_worker.periodic_read.call(null);
