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
ghoul.worker.feed_web_worker.refresh_time_milis = (((5) * (60)) * (1000));
ghoul.worker.feed_web_worker.update_feed = (function update_feed(feed_uid,feed_url){
var c__5809__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto__){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto__){
return (function (state_56199){
var state_val_56200 = (state_56199[(1)]);
if((state_val_56200 === (7))){
var inst_56126 = (state_56199[(7)]);
var inst_56131 = (state_56199[(8)]);
var inst_56124 = (state_56199[(9)]);
var inst_56131__$1 = cljs.core._nth.call(null,inst_56124,inst_56126);
var inst_56132 = new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(inst_56131__$1);
var inst_56133 = ghoul.feeds_storage.get_item.call(null,feed_uid,inst_56132);
var state_56199__$1 = (function (){var statearr_56201 = state_56199;
(statearr_56201[(8)] = inst_56131__$1);

return statearr_56201;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56199__$1,(10),inst_56133);
} else {
if((state_val_56200 === (20))){
var inst_56184 = (state_56199[(2)]);
var state_56199__$1 = state_56199;
var statearr_56202_56249 = state_56199__$1;
(statearr_56202_56249[(2)] = inst_56184);

(statearr_56202_56249[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56200 === (1))){
var state_56199__$1 = state_56199;
var statearr_56203_56250 = state_56199__$1;
(statearr_56203_56250[(2)] = null);

(statearr_56203_56250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56200 === (24))){
var inst_56153 = (state_56199[(10)]);
var inst_56180 = (state_56199[(2)]);
var inst_56181 = cljs.core.next.call(null,inst_56153);
var inst_56123 = inst_56181;
var inst_56124 = null;
var inst_56125 = (0);
var inst_56126 = (0);
var state_56199__$1 = (function (){var statearr_56204 = state_56199;
(statearr_56204[(11)] = inst_56123);

(statearr_56204[(7)] = inst_56126);

(statearr_56204[(9)] = inst_56124);

(statearr_56204[(12)] = inst_56180);

(statearr_56204[(13)] = inst_56125);

return statearr_56204;
})();
var statearr_56205_56251 = state_56199__$1;
(statearr_56205_56251[(2)] = null);

(statearr_56205_56251[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56200 === (4))){
var inst_56115 = (state_56199[(2)]);
var inst_56116 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_56115);
var inst_56117 = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(inst_56116);
var inst_56122 = cljs.core.seq.call(null,inst_56117);
var inst_56123 = inst_56122;
var inst_56124 = null;
var inst_56125 = (0);
var inst_56126 = (0);
var state_56199__$1 = (function (){var statearr_56206 = state_56199;
(statearr_56206[(11)] = inst_56123);

(statearr_56206[(7)] = inst_56126);

(statearr_56206[(9)] = inst_56124);

(statearr_56206[(13)] = inst_56125);

return statearr_56206;
})();
var statearr_56207_56252 = state_56199__$1;
(statearr_56207_56252[(2)] = null);

(statearr_56207_56252[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56200 === (15))){
var inst_56153 = (state_56199[(10)]);
var inst_56155 = cljs.core.chunked_seq_QMARK_.call(null,inst_56153);
var state_56199__$1 = state_56199;
if(inst_56155){
var statearr_56211_56253 = state_56199__$1;
(statearr_56211_56253[(1)] = (18));

} else {
var statearr_56212_56254 = state_56199__$1;
(statearr_56212_56254[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56200 === (21))){
var inst_56166 = (state_56199[(2)]);
var inst_56167 = cljs.core._EQ_.call(null,inst_56166,new cljs.core.Keyword(null,"not-found","not-found",-629079980));
var state_56199__$1 = state_56199;
if(inst_56167){
var statearr_56213_56255 = state_56199__$1;
(statearr_56213_56255[(1)] = (22));

} else {
var statearr_56214_56256 = state_56199__$1;
(statearr_56214_56256[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56200 === (13))){
var inst_56123 = (state_56199[(11)]);
var inst_56126 = (state_56199[(7)]);
var inst_56124 = (state_56199[(9)]);
var inst_56125 = (state_56199[(13)]);
var inst_56149 = (state_56199[(2)]);
var inst_56150 = (inst_56126 + (1));
var tmp56208 = inst_56123;
var tmp56209 = inst_56124;
var tmp56210 = inst_56125;
var inst_56123__$1 = tmp56208;
var inst_56124__$1 = tmp56209;
var inst_56125__$1 = tmp56210;
var inst_56126__$1 = inst_56150;
var state_56199__$1 = (function (){var statearr_56215 = state_56199;
(statearr_56215[(11)] = inst_56123__$1);

(statearr_56215[(14)] = inst_56149);

(statearr_56215[(7)] = inst_56126__$1);

(statearr_56215[(9)] = inst_56124__$1);

(statearr_56215[(13)] = inst_56125__$1);

return statearr_56215;
})();
var statearr_56216_56257 = state_56199__$1;
(statearr_56216_56257[(2)] = null);

(statearr_56216_56257[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56200 === (22))){
var inst_56169 = (state_56199[(15)]);
var inst_56162 = (state_56199[(16)]);
var inst_56169__$1 = cljs.core.assoc.call(null,inst_56162,new cljs.core.Keyword(null,"feeduid","feeduid",1367071876),feed_uid);
var inst_56170 = ghoul.feeds_storage.add_feed.call(null,inst_56169__$1);
var state_56199__$1 = (function (){var statearr_56217 = state_56199;
(statearr_56217[(15)] = inst_56169__$1);

return statearr_56217;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56199__$1,(25),inst_56170);
} else {
if((state_val_56200 === (6))){
var inst_56191 = (state_56199[(2)]);
var inst_56192 = cljs.core.async.timeout.call(null,ghoul.worker.feed_web_worker.refresh_time_milis);
var state_56199__$1 = (function (){var statearr_56218 = state_56199;
(statearr_56218[(17)] = inst_56191);

return statearr_56218;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56199__$1,(26),inst_56192);
} else {
if((state_val_56200 === (25))){
var inst_56169 = (state_56199[(15)]);
var inst_56172 = (state_56199[(2)]);
var inst_56173 = [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"data","data",-232669377)];
var inst_56174 = ["update","ok",inst_56169];
var inst_56175 = cljs.core.PersistentHashMap.fromArrays(inst_56173,inst_56174);
var inst_56176 = cljs.core.clj__GT_js.call(null,inst_56175);
var inst_56177 = postMessage(inst_56176);
var state_56199__$1 = (function (){var statearr_56219 = state_56199;
(statearr_56219[(18)] = inst_56172);

return statearr_56219;
})();
var statearr_56220_56258 = state_56199__$1;
(statearr_56220_56258[(2)] = inst_56177);

(statearr_56220_56258[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56200 === (17))){
var inst_56187 = (state_56199[(2)]);
var state_56199__$1 = state_56199;
var statearr_56221_56259 = state_56199__$1;
(statearr_56221_56259[(2)] = inst_56187);

(statearr_56221_56259[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56200 === (3))){
var inst_56197 = (state_56199[(2)]);
var state_56199__$1 = state_56199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56199__$1,inst_56197);
} else {
if((state_val_56200 === (12))){
var state_56199__$1 = state_56199;
var statearr_56222_56260 = state_56199__$1;
(statearr_56222_56260[(2)] = null);

(statearr_56222_56260[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56200 === (2))){
var inst_56111 = [cljs.core.str("Refreshing: "),cljs.core.str(feed_url)].join('');
var inst_56112 = console.log(inst_56111);
var inst_56113 = ghoul.http.get_rss.call(null,feed_url);
var state_56199__$1 = (function (){var statearr_56223 = state_56199;
(statearr_56223[(19)] = inst_56112);

return statearr_56223;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56199__$1,(4),inst_56113);
} else {
if((state_val_56200 === (23))){
var state_56199__$1 = state_56199;
var statearr_56224_56261 = state_56199__$1;
(statearr_56224_56261[(2)] = null);

(statearr_56224_56261[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56200 === (19))){
var inst_56162 = (state_56199[(16)]);
var inst_56153 = (state_56199[(10)]);
var inst_56162__$1 = cljs.core.first.call(null,inst_56153);
var inst_56163 = new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(inst_56162__$1);
var inst_56164 = ghoul.feeds_storage.get_item.call(null,feed_uid,inst_56163);
var state_56199__$1 = (function (){var statearr_56225 = state_56199;
(statearr_56225[(16)] = inst_56162__$1);

return statearr_56225;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56199__$1,(21),inst_56164);
} else {
if((state_val_56200 === (11))){
var inst_56131 = (state_56199[(8)]);
var inst_56138 = (state_56199[(20)]);
var inst_56138__$1 = cljs.core.assoc.call(null,inst_56131,new cljs.core.Keyword(null,"feeduid","feeduid",1367071876),feed_uid);
var inst_56139 = ghoul.feeds_storage.add_feed.call(null,inst_56138__$1);
var state_56199__$1 = (function (){var statearr_56226 = state_56199;
(statearr_56226[(20)] = inst_56138__$1);

return statearr_56226;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56199__$1,(14),inst_56139);
} else {
if((state_val_56200 === (9))){
var inst_56189 = (state_56199[(2)]);
var state_56199__$1 = state_56199;
var statearr_56227_56262 = state_56199__$1;
(statearr_56227_56262[(2)] = inst_56189);

(statearr_56227_56262[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56200 === (5))){
var inst_56126 = (state_56199[(7)]);
var inst_56125 = (state_56199[(13)]);
var inst_56128 = (inst_56126 < inst_56125);
var inst_56129 = inst_56128;
var state_56199__$1 = state_56199;
if(cljs.core.truth_(inst_56129)){
var statearr_56228_56263 = state_56199__$1;
(statearr_56228_56263[(1)] = (7));

} else {
var statearr_56229_56264 = state_56199__$1;
(statearr_56229_56264[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56200 === (14))){
var inst_56138 = (state_56199[(20)]);
var inst_56141 = (state_56199[(2)]);
var inst_56142 = [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"data","data",-232669377)];
var inst_56143 = ["update","ok",inst_56138];
var inst_56144 = cljs.core.PersistentHashMap.fromArrays(inst_56142,inst_56143);
var inst_56145 = cljs.core.clj__GT_js.call(null,inst_56144);
var inst_56146 = postMessage(inst_56145);
var state_56199__$1 = (function (){var statearr_56230 = state_56199;
(statearr_56230[(21)] = inst_56141);

return statearr_56230;
})();
var statearr_56231_56265 = state_56199__$1;
(statearr_56231_56265[(2)] = inst_56146);

(statearr_56231_56265[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56200 === (26))){
var inst_56194 = (state_56199[(2)]);
var state_56199__$1 = (function (){var statearr_56232 = state_56199;
(statearr_56232[(22)] = inst_56194);

return statearr_56232;
})();
var statearr_56233_56266 = state_56199__$1;
(statearr_56233_56266[(2)] = null);

(statearr_56233_56266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56200 === (16))){
var state_56199__$1 = state_56199;
var statearr_56234_56267 = state_56199__$1;
(statearr_56234_56267[(2)] = null);

(statearr_56234_56267[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56200 === (10))){
var inst_56135 = (state_56199[(2)]);
var inst_56136 = cljs.core._EQ_.call(null,inst_56135,new cljs.core.Keyword(null,"not-found","not-found",-629079980));
var state_56199__$1 = state_56199;
if(inst_56136){
var statearr_56235_56268 = state_56199__$1;
(statearr_56235_56268[(1)] = (11));

} else {
var statearr_56236_56269 = state_56199__$1;
(statearr_56236_56269[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56200 === (18))){
var inst_56153 = (state_56199[(10)]);
var inst_56157 = cljs.core.chunk_first.call(null,inst_56153);
var inst_56158 = cljs.core.chunk_rest.call(null,inst_56153);
var inst_56159 = cljs.core.count.call(null,inst_56157);
var inst_56123 = inst_56158;
var inst_56124 = inst_56157;
var inst_56125 = inst_56159;
var inst_56126 = (0);
var state_56199__$1 = (function (){var statearr_56237 = state_56199;
(statearr_56237[(11)] = inst_56123);

(statearr_56237[(7)] = inst_56126);

(statearr_56237[(9)] = inst_56124);

(statearr_56237[(13)] = inst_56125);

return statearr_56237;
})();
var statearr_56238_56270 = state_56199__$1;
(statearr_56238_56270[(2)] = null);

(statearr_56238_56270[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56200 === (8))){
var inst_56123 = (state_56199[(11)]);
var inst_56153 = (state_56199[(10)]);
var inst_56153__$1 = cljs.core.seq.call(null,inst_56123);
var state_56199__$1 = (function (){var statearr_56239 = state_56199;
(statearr_56239[(10)] = inst_56153__$1);

return statearr_56239;
})();
if(inst_56153__$1){
var statearr_56240_56271 = state_56199__$1;
(statearr_56240_56271[(1)] = (15));

} else {
var statearr_56241_56272 = state_56199__$1;
(statearr_56241_56272[(1)] = (16));

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
}
}
}
});})(c__5809__auto__))
;
return ((function (switch__5794__auto__,c__5809__auto__){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_56245 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56245[(0)] = state_machine__5795__auto__);

(statearr_56245[(1)] = (1));

return statearr_56245;
});
var state_machine__5795__auto____1 = (function (state_56199){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_56199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e56246){if((e56246 instanceof Object)){
var ex__5798__auto__ = e56246;
var statearr_56247_56273 = state_56199;
(statearr_56247_56273[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56274 = state_56199;
state_56199 = G__56274;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_56199){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_56199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_56248 = f__5810__auto__.call(null);
(statearr_56248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_56248;
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
