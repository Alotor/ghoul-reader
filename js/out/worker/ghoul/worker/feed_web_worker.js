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
ghoul.worker.feed_web_worker.update_feed = (function update_feed(feed_uid,feed_url){
var c__5809__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto__){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto__){
return (function (state_23989){
var state_val_23990 = (state_23989[(1)]);
if((state_val_23990 === (7))){
var inst_23985 = (state_23989[(2)]);
var state_23989__$1 = state_23989;
var statearr_23991_24035 = state_23989__$1;
(statearr_23991_24035[(2)] = inst_23985);

(statearr_23991_24035[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23990 === (20))){
var inst_23965 = (state_23989[(7)]);
var inst_23958 = (state_23989[(8)]);
var inst_23965__$1 = cljs.core.assoc.call(null,inst_23958,new cljs.core.Keyword(null,"feeduid","feeduid",1367071876),feed_uid);
var inst_23966 = ghoul.feeds_storage.add_feed.call(null,inst_23965__$1);
var state_23989__$1 = (function (){var statearr_23992 = state_23989;
(statearr_23992[(7)] = inst_23965__$1);

return statearr_23992;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23989__$1,(23),inst_23966);
} else {
if((state_val_23990 === (1))){
var inst_23907 = [cljs.core.str("Refreshing: "),cljs.core.str(feed_url)].join('');
var inst_23908 = console.log(inst_23907);
var inst_23909 = ghoul.http.get_rss.call(null,feed_url);
var state_23989__$1 = (function (){var statearr_23993 = state_23989;
(statearr_23993[(9)] = inst_23908);

return statearr_23993;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23989__$1,(2),inst_23909);
} else {
if((state_val_23990 === (4))){
var inst_23987 = (state_23989[(2)]);
var state_23989__$1 = state_23989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23989__$1,inst_23987);
} else {
if((state_val_23990 === (15))){
var inst_23983 = (state_23989[(2)]);
var state_23989__$1 = state_23989;
var statearr_23994_24036 = state_23989__$1;
(statearr_23994_24036[(2)] = inst_23983);

(statearr_23994_24036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23990 === (21))){
var state_23989__$1 = state_23989;
var statearr_23995_24037 = state_23989__$1;
(statearr_23995_24037[(2)] = null);

(statearr_23995_24037[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23990 === (13))){
var inst_23949 = (state_23989[(10)]);
var inst_23951 = cljs.core.chunked_seq_QMARK_.call(null,inst_23949);
var state_23989__$1 = state_23989;
if(inst_23951){
var statearr_23996_24038 = state_23989__$1;
(statearr_23996_24038[(1)] = (16));

} else {
var statearr_23997_24039 = state_23989__$1;
(statearr_23997_24039[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23990 === (22))){
var inst_23949 = (state_23989[(10)]);
var inst_23976 = (state_23989[(2)]);
var inst_23977 = cljs.core.next.call(null,inst_23949);
var inst_23919 = inst_23977;
var inst_23920 = null;
var inst_23921 = (0);
var inst_23922 = (0);
var state_23989__$1 = (function (){var statearr_23998 = state_23989;
(statearr_23998[(11)] = inst_23919);

(statearr_23998[(12)] = inst_23921);

(statearr_23998[(13)] = inst_23976);

(statearr_23998[(14)] = inst_23922);

(statearr_23998[(15)] = inst_23920);

return statearr_23998;
})();
var statearr_23999_24040 = state_23989__$1;
(statearr_23999_24040[(2)] = null);

(statearr_23999_24040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23990 === (6))){
var inst_23949 = (state_23989[(10)]);
var inst_23919 = (state_23989[(11)]);
var inst_23949__$1 = cljs.core.seq.call(null,inst_23919);
var state_23989__$1 = (function (){var statearr_24000 = state_23989;
(statearr_24000[(10)] = inst_23949__$1);

return statearr_24000;
})();
if(inst_23949__$1){
var statearr_24001_24041 = state_23989__$1;
(statearr_24001_24041[(1)] = (13));

} else {
var statearr_24002_24042 = state_23989__$1;
(statearr_24002_24042[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23990 === (17))){
var inst_23949 = (state_23989[(10)]);
var inst_23958 = (state_23989[(8)]);
var inst_23958__$1 = cljs.core.first.call(null,inst_23949);
var inst_23959 = new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(inst_23958__$1);
var inst_23960 = ghoul.feeds_storage.get_item.call(null,feed_uid,inst_23959);
var state_23989__$1 = (function (){var statearr_24003 = state_23989;
(statearr_24003[(8)] = inst_23958__$1);

return statearr_24003;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23989__$1,(19),inst_23960);
} else {
if((state_val_23990 === (3))){
var inst_23921 = (state_23989[(12)]);
var inst_23922 = (state_23989[(14)]);
var inst_23924 = (inst_23922 < inst_23921);
var inst_23925 = inst_23924;
var state_23989__$1 = state_23989;
if(cljs.core.truth_(inst_23925)){
var statearr_24004_24043 = state_23989__$1;
(statearr_24004_24043[(1)] = (5));

} else {
var statearr_24005_24044 = state_23989__$1;
(statearr_24005_24044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23990 === (12))){
var inst_23934 = (state_23989[(16)]);
var inst_23937 = (state_23989[(2)]);
var inst_23938 = [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"data","data",-232669377)];
var inst_23939 = ["update","ok",inst_23934];
var inst_23940 = cljs.core.PersistentHashMap.fromArrays(inst_23938,inst_23939);
var inst_23941 = cljs.core.clj__GT_js.call(null,inst_23940);
var inst_23942 = postMessage(inst_23941);
var state_23989__$1 = (function (){var statearr_24006 = state_23989;
(statearr_24006[(17)] = inst_23937);

return statearr_24006;
})();
var statearr_24007_24045 = state_23989__$1;
(statearr_24007_24045[(2)] = inst_23942);

(statearr_24007_24045[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23990 === (2))){
var inst_23911 = (state_23989[(2)]);
var inst_23912 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_23911);
var inst_23913 = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(inst_23912);
var inst_23918 = cljs.core.seq.call(null,inst_23913);
var inst_23919 = inst_23918;
var inst_23920 = null;
var inst_23921 = (0);
var inst_23922 = (0);
var state_23989__$1 = (function (){var statearr_24008 = state_23989;
(statearr_24008[(11)] = inst_23919);

(statearr_24008[(12)] = inst_23921);

(statearr_24008[(14)] = inst_23922);

(statearr_24008[(15)] = inst_23920);

return statearr_24008;
})();
var statearr_24009_24046 = state_23989__$1;
(statearr_24009_24046[(2)] = null);

(statearr_24009_24046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23990 === (23))){
var inst_23965 = (state_23989[(7)]);
var inst_23968 = (state_23989[(2)]);
var inst_23969 = [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"data","data",-232669377)];
var inst_23970 = ["update","ok",inst_23965];
var inst_23971 = cljs.core.PersistentHashMap.fromArrays(inst_23969,inst_23970);
var inst_23972 = cljs.core.clj__GT_js.call(null,inst_23971);
var inst_23973 = postMessage(inst_23972);
var state_23989__$1 = (function (){var statearr_24013 = state_23989;
(statearr_24013[(18)] = inst_23968);

return statearr_24013;
})();
var statearr_24014_24047 = state_23989__$1;
(statearr_24014_24047[(2)] = inst_23973);

(statearr_24014_24047[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23990 === (19))){
var inst_23962 = (state_23989[(2)]);
var inst_23963 = cljs.core._EQ_.call(null,inst_23962,new cljs.core.Keyword(null,"not-found","not-found",-629079980));
var state_23989__$1 = state_23989;
if(inst_23963){
var statearr_24015_24048 = state_23989__$1;
(statearr_24015_24048[(1)] = (20));

} else {
var statearr_24016_24049 = state_23989__$1;
(statearr_24016_24049[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23990 === (11))){
var inst_23919 = (state_23989[(11)]);
var inst_23921 = (state_23989[(12)]);
var inst_23922 = (state_23989[(14)]);
var inst_23920 = (state_23989[(15)]);
var inst_23945 = (state_23989[(2)]);
var inst_23946 = (inst_23922 + (1));
var tmp24010 = inst_23919;
var tmp24011 = inst_23921;
var tmp24012 = inst_23920;
var inst_23919__$1 = tmp24010;
var inst_23920__$1 = tmp24012;
var inst_23921__$1 = tmp24011;
var inst_23922__$1 = inst_23946;
var state_23989__$1 = (function (){var statearr_24017 = state_23989;
(statearr_24017[(11)] = inst_23919__$1);

(statearr_24017[(12)] = inst_23921__$1);

(statearr_24017[(19)] = inst_23945);

(statearr_24017[(14)] = inst_23922__$1);

(statearr_24017[(15)] = inst_23920__$1);

return statearr_24017;
})();
var statearr_24018_24050 = state_23989__$1;
(statearr_24018_24050[(2)] = null);

(statearr_24018_24050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23990 === (9))){
var inst_23934 = (state_23989[(16)]);
var inst_23927 = (state_23989[(20)]);
var inst_23934__$1 = cljs.core.assoc.call(null,inst_23927,new cljs.core.Keyword(null,"feeduid","feeduid",1367071876),feed_uid);
var inst_23935 = ghoul.feeds_storage.add_feed.call(null,inst_23934__$1);
var state_23989__$1 = (function (){var statearr_24019 = state_23989;
(statearr_24019[(16)] = inst_23934__$1);

return statearr_24019;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23989__$1,(12),inst_23935);
} else {
if((state_val_23990 === (5))){
var inst_23922 = (state_23989[(14)]);
var inst_23927 = (state_23989[(20)]);
var inst_23920 = (state_23989[(15)]);
var inst_23927__$1 = cljs.core._nth.call(null,inst_23920,inst_23922);
var inst_23928 = new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(inst_23927__$1);
var inst_23929 = ghoul.feeds_storage.get_item.call(null,feed_uid,inst_23928);
var state_23989__$1 = (function (){var statearr_24020 = state_23989;
(statearr_24020[(20)] = inst_23927__$1);

return statearr_24020;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23989__$1,(8),inst_23929);
} else {
if((state_val_23990 === (14))){
var state_23989__$1 = state_23989;
var statearr_24021_24051 = state_23989__$1;
(statearr_24021_24051[(2)] = null);

(statearr_24021_24051[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23990 === (16))){
var inst_23949 = (state_23989[(10)]);
var inst_23953 = cljs.core.chunk_first.call(null,inst_23949);
var inst_23954 = cljs.core.chunk_rest.call(null,inst_23949);
var inst_23955 = cljs.core.count.call(null,inst_23953);
var inst_23919 = inst_23954;
var inst_23920 = inst_23953;
var inst_23921 = inst_23955;
var inst_23922 = (0);
var state_23989__$1 = (function (){var statearr_24022 = state_23989;
(statearr_24022[(11)] = inst_23919);

(statearr_24022[(12)] = inst_23921);

(statearr_24022[(14)] = inst_23922);

(statearr_24022[(15)] = inst_23920);

return statearr_24022;
})();
var statearr_24023_24052 = state_23989__$1;
(statearr_24023_24052[(2)] = null);

(statearr_24023_24052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23990 === (10))){
var state_23989__$1 = state_23989;
var statearr_24024_24053 = state_23989__$1;
(statearr_24024_24053[(2)] = null);

(statearr_24024_24053[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23990 === (18))){
var inst_23980 = (state_23989[(2)]);
var state_23989__$1 = state_23989;
var statearr_24025_24054 = state_23989__$1;
(statearr_24025_24054[(2)] = inst_23980);

(statearr_24025_24054[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23990 === (8))){
var inst_23931 = (state_23989[(2)]);
var inst_23932 = cljs.core._EQ_.call(null,inst_23931,new cljs.core.Keyword(null,"not-found","not-found",-629079980));
var state_23989__$1 = state_23989;
if(inst_23932){
var statearr_24026_24055 = state_23989__$1;
(statearr_24026_24055[(1)] = (9));

} else {
var statearr_24027_24056 = state_23989__$1;
(statearr_24027_24056[(1)] = (10));

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
var statearr_24031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24031[(0)] = state_machine__5795__auto__);

(statearr_24031[(1)] = (1));

return statearr_24031;
});
var state_machine__5795__auto____1 = (function (state_23989){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_23989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e24032){if((e24032 instanceof Object)){
var ex__5798__auto__ = e24032;
var statearr_24033_24057 = state_23989;
(statearr_24033_24057[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24058 = state_23989;
state_23989 = G__24058;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_23989){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_23989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_24034 = f__5810__auto__.call(null);
(statearr_24034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_24034;
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
