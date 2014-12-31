// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.worker.feed_updater');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('ghoul.repository.item');
goog.require('ghoul.repository.item');
goog.require('ghoul.common.http');
goog.require('ghoul.common.http');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
ghoul.worker.feed_updater.update_feed = (function update_feed(feed_uid,feed_url){
var c__7303__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto__){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto__){
return (function (state_19240){
var state_val_19241 = (state_19240[(1)]);
if((state_val_19241 === (7))){
var inst_19236 = (state_19240[(2)]);
var state_19240__$1 = state_19240;
var statearr_19242_19286 = state_19240__$1;
(statearr_19242_19286[(2)] = inst_19236);

(statearr_19242_19286[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19241 === (20))){
var inst_19216 = (state_19240[(7)]);
var inst_19209 = (state_19240[(8)]);
var inst_19216__$1 = cljs.core.assoc.call(null,inst_19209,new cljs.core.Keyword(null,"feeduid","feeduid",1367071876),feed_uid);
var inst_19217 = ghoul.repository.item.add_feed.call(null,inst_19216__$1);
var state_19240__$1 = (function (){var statearr_19243 = state_19240;
(statearr_19243[(7)] = inst_19216__$1);

return statearr_19243;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19240__$1,(23),inst_19217);
} else {
if((state_val_19241 === (1))){
var inst_19158 = [cljs.core.str("Refreshing: "),cljs.core.str(feed_url)].join('');
var inst_19159 = console.log(inst_19158);
var inst_19160 = ghoul.common.http.get_rss.call(null,feed_url);
var state_19240__$1 = (function (){var statearr_19244 = state_19240;
(statearr_19244[(9)] = inst_19159);

return statearr_19244;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19240__$1,(2),inst_19160);
} else {
if((state_val_19241 === (4))){
var inst_19238 = (state_19240[(2)]);
var state_19240__$1 = state_19240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19240__$1,inst_19238);
} else {
if((state_val_19241 === (15))){
var inst_19234 = (state_19240[(2)]);
var state_19240__$1 = state_19240;
var statearr_19245_19287 = state_19240__$1;
(statearr_19245_19287[(2)] = inst_19234);

(statearr_19245_19287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19241 === (21))){
var state_19240__$1 = state_19240;
var statearr_19246_19288 = state_19240__$1;
(statearr_19246_19288[(2)] = null);

(statearr_19246_19288[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19241 === (13))){
var inst_19200 = (state_19240[(10)]);
var inst_19202 = cljs.core.chunked_seq_QMARK_.call(null,inst_19200);
var state_19240__$1 = state_19240;
if(inst_19202){
var statearr_19247_19289 = state_19240__$1;
(statearr_19247_19289[(1)] = (16));

} else {
var statearr_19248_19290 = state_19240__$1;
(statearr_19248_19290[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19241 === (22))){
var inst_19200 = (state_19240[(10)]);
var inst_19227 = (state_19240[(2)]);
var inst_19228 = cljs.core.next.call(null,inst_19200);
var inst_19170 = inst_19228;
var inst_19171 = null;
var inst_19172 = (0);
var inst_19173 = (0);
var state_19240__$1 = (function (){var statearr_19249 = state_19240;
(statearr_19249[(11)] = inst_19170);

(statearr_19249[(12)] = inst_19173);

(statearr_19249[(13)] = inst_19227);

(statearr_19249[(14)] = inst_19172);

(statearr_19249[(15)] = inst_19171);

return statearr_19249;
})();
var statearr_19250_19291 = state_19240__$1;
(statearr_19250_19291[(2)] = null);

(statearr_19250_19291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19241 === (6))){
var inst_19170 = (state_19240[(11)]);
var inst_19200 = (state_19240[(10)]);
var inst_19200__$1 = cljs.core.seq.call(null,inst_19170);
var state_19240__$1 = (function (){var statearr_19251 = state_19240;
(statearr_19251[(10)] = inst_19200__$1);

return statearr_19251;
})();
if(inst_19200__$1){
var statearr_19252_19292 = state_19240__$1;
(statearr_19252_19292[(1)] = (13));

} else {
var statearr_19253_19293 = state_19240__$1;
(statearr_19253_19293[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19241 === (17))){
var inst_19200 = (state_19240[(10)]);
var inst_19209 = (state_19240[(8)]);
var inst_19209__$1 = cljs.core.first.call(null,inst_19200);
var inst_19210 = new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(inst_19209__$1);
var inst_19211 = ghoul.repository.item.get_item.call(null,feed_uid,inst_19210);
var state_19240__$1 = (function (){var statearr_19254 = state_19240;
(statearr_19254[(8)] = inst_19209__$1);

return statearr_19254;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19240__$1,(19),inst_19211);
} else {
if((state_val_19241 === (3))){
var inst_19173 = (state_19240[(12)]);
var inst_19172 = (state_19240[(14)]);
var inst_19175 = (inst_19173 < inst_19172);
var inst_19176 = inst_19175;
var state_19240__$1 = state_19240;
if(cljs.core.truth_(inst_19176)){
var statearr_19255_19294 = state_19240__$1;
(statearr_19255_19294[(1)] = (5));

} else {
var statearr_19256_19295 = state_19240__$1;
(statearr_19256_19295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19241 === (12))){
var inst_19185 = (state_19240[(16)]);
var inst_19188 = (state_19240[(2)]);
var inst_19189 = [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"data","data",-232669377)];
var inst_19190 = ["update","ok",inst_19185];
var inst_19191 = cljs.core.PersistentHashMap.fromArrays(inst_19189,inst_19190);
var inst_19192 = cljs.core.clj__GT_js.call(null,inst_19191);
var inst_19193 = postMessage(inst_19192);
var state_19240__$1 = (function (){var statearr_19257 = state_19240;
(statearr_19257[(17)] = inst_19188);

return statearr_19257;
})();
var statearr_19258_19296 = state_19240__$1;
(statearr_19258_19296[(2)] = inst_19193);

(statearr_19258_19296[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19241 === (2))){
var inst_19162 = (state_19240[(2)]);
var inst_19163 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_19162);
var inst_19164 = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(inst_19163);
var inst_19169 = cljs.core.seq.call(null,inst_19164);
var inst_19170 = inst_19169;
var inst_19171 = null;
var inst_19172 = (0);
var inst_19173 = (0);
var state_19240__$1 = (function (){var statearr_19259 = state_19240;
(statearr_19259[(11)] = inst_19170);

(statearr_19259[(12)] = inst_19173);

(statearr_19259[(14)] = inst_19172);

(statearr_19259[(15)] = inst_19171);

return statearr_19259;
})();
var statearr_19260_19297 = state_19240__$1;
(statearr_19260_19297[(2)] = null);

(statearr_19260_19297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19241 === (23))){
var inst_19216 = (state_19240[(7)]);
var inst_19219 = (state_19240[(2)]);
var inst_19220 = [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"data","data",-232669377)];
var inst_19221 = ["update","ok",inst_19216];
var inst_19222 = cljs.core.PersistentHashMap.fromArrays(inst_19220,inst_19221);
var inst_19223 = cljs.core.clj__GT_js.call(null,inst_19222);
var inst_19224 = postMessage(inst_19223);
var state_19240__$1 = (function (){var statearr_19264 = state_19240;
(statearr_19264[(18)] = inst_19219);

return statearr_19264;
})();
var statearr_19265_19298 = state_19240__$1;
(statearr_19265_19298[(2)] = inst_19224);

(statearr_19265_19298[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19241 === (19))){
var inst_19213 = (state_19240[(2)]);
var inst_19214 = cljs.core._EQ_.call(null,inst_19213,new cljs.core.Keyword(null,"not-found","not-found",-629079980));
var state_19240__$1 = state_19240;
if(inst_19214){
var statearr_19266_19299 = state_19240__$1;
(statearr_19266_19299[(1)] = (20));

} else {
var statearr_19267_19300 = state_19240__$1;
(statearr_19267_19300[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19241 === (11))){
var inst_19170 = (state_19240[(11)]);
var inst_19173 = (state_19240[(12)]);
var inst_19172 = (state_19240[(14)]);
var inst_19171 = (state_19240[(15)]);
var inst_19196 = (state_19240[(2)]);
var inst_19197 = (inst_19173 + (1));
var tmp19261 = inst_19170;
var tmp19262 = inst_19172;
var tmp19263 = inst_19171;
var inst_19170__$1 = tmp19261;
var inst_19171__$1 = tmp19263;
var inst_19172__$1 = tmp19262;
var inst_19173__$1 = inst_19197;
var state_19240__$1 = (function (){var statearr_19268 = state_19240;
(statearr_19268[(11)] = inst_19170__$1);

(statearr_19268[(12)] = inst_19173__$1);

(statearr_19268[(14)] = inst_19172__$1);

(statearr_19268[(15)] = inst_19171__$1);

(statearr_19268[(19)] = inst_19196);

return statearr_19268;
})();
var statearr_19269_19301 = state_19240__$1;
(statearr_19269_19301[(2)] = null);

(statearr_19269_19301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19241 === (9))){
var inst_19185 = (state_19240[(16)]);
var inst_19178 = (state_19240[(20)]);
var inst_19185__$1 = cljs.core.assoc.call(null,inst_19178,new cljs.core.Keyword(null,"feeduid","feeduid",1367071876),feed_uid);
var inst_19186 = ghoul.repository.item.add_feed.call(null,inst_19185__$1);
var state_19240__$1 = (function (){var statearr_19270 = state_19240;
(statearr_19270[(16)] = inst_19185__$1);

return statearr_19270;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19240__$1,(12),inst_19186);
} else {
if((state_val_19241 === (5))){
var inst_19178 = (state_19240[(20)]);
var inst_19173 = (state_19240[(12)]);
var inst_19171 = (state_19240[(15)]);
var inst_19178__$1 = cljs.core._nth.call(null,inst_19171,inst_19173);
var inst_19179 = new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(inst_19178__$1);
var inst_19180 = ghoul.repository.item.get_item.call(null,feed_uid,inst_19179);
var state_19240__$1 = (function (){var statearr_19271 = state_19240;
(statearr_19271[(20)] = inst_19178__$1);

return statearr_19271;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19240__$1,(8),inst_19180);
} else {
if((state_val_19241 === (14))){
var state_19240__$1 = state_19240;
var statearr_19272_19302 = state_19240__$1;
(statearr_19272_19302[(2)] = null);

(statearr_19272_19302[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19241 === (16))){
var inst_19200 = (state_19240[(10)]);
var inst_19204 = cljs.core.chunk_first.call(null,inst_19200);
var inst_19205 = cljs.core.chunk_rest.call(null,inst_19200);
var inst_19206 = cljs.core.count.call(null,inst_19204);
var inst_19170 = inst_19205;
var inst_19171 = inst_19204;
var inst_19172 = inst_19206;
var inst_19173 = (0);
var state_19240__$1 = (function (){var statearr_19273 = state_19240;
(statearr_19273[(11)] = inst_19170);

(statearr_19273[(12)] = inst_19173);

(statearr_19273[(14)] = inst_19172);

(statearr_19273[(15)] = inst_19171);

return statearr_19273;
})();
var statearr_19274_19303 = state_19240__$1;
(statearr_19274_19303[(2)] = null);

(statearr_19274_19303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19241 === (10))){
var state_19240__$1 = state_19240;
var statearr_19275_19304 = state_19240__$1;
(statearr_19275_19304[(2)] = null);

(statearr_19275_19304[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19241 === (18))){
var inst_19231 = (state_19240[(2)]);
var state_19240__$1 = state_19240;
var statearr_19276_19305 = state_19240__$1;
(statearr_19276_19305[(2)] = inst_19231);

(statearr_19276_19305[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19241 === (8))){
var inst_19182 = (state_19240[(2)]);
var inst_19183 = cljs.core._EQ_.call(null,inst_19182,new cljs.core.Keyword(null,"not-found","not-found",-629079980));
var state_19240__$1 = state_19240;
if(inst_19183){
var statearr_19277_19306 = state_19240__$1;
(statearr_19277_19306[(1)] = (9));

} else {
var statearr_19278_19307 = state_19240__$1;
(statearr_19278_19307[(1)] = (10));

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
});})(c__7303__auto__))
;
return ((function (switch__7288__auto__,c__7303__auto__){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_19282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19282[(0)] = state_machine__7289__auto__);

(statearr_19282[(1)] = (1));

return statearr_19282;
});
var state_machine__7289__auto____1 = (function (state_19240){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_19240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e19283){if((e19283 instanceof Object)){
var ex__7292__auto__ = e19283;
var statearr_19284_19308 = state_19240;
(statearr_19284_19308[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19309 = state_19240;
state_19240 = G__19309;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_19240){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_19240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto__))
})();
var state__7305__auto__ = (function (){var statearr_19285 = f__7304__auto__.call(null);
(statearr_19285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto__);

return statearr_19285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto__))
);

return c__7303__auto__;
});
ghoul.worker.feed_updater.manage_command = (function manage_command(event){
var data = cljs.core.js__GT_clj.call(null,event.data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(data),"update")){
return ghoul.worker.feed_updater.update_feed.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(data));
} else {
return console.log([cljs.core.str(event)].join(''));

}
});
addEventListener("message",ghoul.worker.feed_updater.manage_command);
ghoul.repository.item.init_database.call(null);
