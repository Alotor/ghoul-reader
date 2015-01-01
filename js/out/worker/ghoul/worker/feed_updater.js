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
var c__5809__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto__){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto__){
return (function (state_9623){
var state_val_9624 = (state_9623[(1)]);
if((state_val_9624 === (7))){
var inst_9619 = (state_9623[(2)]);
var state_9623__$1 = state_9623;
var statearr_9625_9669 = state_9623__$1;
(statearr_9625_9669[(2)] = inst_9619);

(statearr_9625_9669[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9624 === (20))){
var inst_9599 = (state_9623[(7)]);
var inst_9592 = (state_9623[(8)]);
var inst_9599__$1 = cljs.core.assoc.call(null,inst_9592,new cljs.core.Keyword(null,"feeduid","feeduid",1367071876),feed_uid);
var inst_9600 = ghoul.repository.item.add_item.call(null,inst_9599__$1);
var state_9623__$1 = (function (){var statearr_9626 = state_9623;
(statearr_9626[(7)] = inst_9599__$1);

return statearr_9626;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9623__$1,(23),inst_9600);
} else {
if((state_val_9624 === (1))){
var inst_9541 = [cljs.core.str("Refreshing: "),cljs.core.str(feed_url)].join('');
var inst_9542 = console.log(inst_9541);
var inst_9543 = ghoul.common.http.get_rss.call(null,feed_url);
var state_9623__$1 = (function (){var statearr_9627 = state_9623;
(statearr_9627[(9)] = inst_9542);

return statearr_9627;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9623__$1,(2),inst_9543);
} else {
if((state_val_9624 === (4))){
var inst_9621 = (state_9623[(2)]);
var state_9623__$1 = state_9623;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9623__$1,inst_9621);
} else {
if((state_val_9624 === (15))){
var inst_9617 = (state_9623[(2)]);
var state_9623__$1 = state_9623;
var statearr_9628_9670 = state_9623__$1;
(statearr_9628_9670[(2)] = inst_9617);

(statearr_9628_9670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9624 === (21))){
var state_9623__$1 = state_9623;
var statearr_9629_9671 = state_9623__$1;
(statearr_9629_9671[(2)] = null);

(statearr_9629_9671[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9624 === (13))){
var inst_9583 = (state_9623[(10)]);
var inst_9585 = cljs.core.chunked_seq_QMARK_.call(null,inst_9583);
var state_9623__$1 = state_9623;
if(inst_9585){
var statearr_9630_9672 = state_9623__$1;
(statearr_9630_9672[(1)] = (16));

} else {
var statearr_9631_9673 = state_9623__$1;
(statearr_9631_9673[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9624 === (22))){
var inst_9583 = (state_9623[(10)]);
var inst_9610 = (state_9623[(2)]);
var inst_9611 = cljs.core.next.call(null,inst_9583);
var inst_9553 = inst_9611;
var inst_9554 = null;
var inst_9555 = (0);
var inst_9556 = (0);
var state_9623__$1 = (function (){var statearr_9632 = state_9623;
(statearr_9632[(11)] = inst_9555);

(statearr_9632[(12)] = inst_9554);

(statearr_9632[(13)] = inst_9553);

(statearr_9632[(14)] = inst_9610);

(statearr_9632[(15)] = inst_9556);

return statearr_9632;
})();
var statearr_9633_9674 = state_9623__$1;
(statearr_9633_9674[(2)] = null);

(statearr_9633_9674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9624 === (6))){
var inst_9553 = (state_9623[(13)]);
var inst_9583 = (state_9623[(10)]);
var inst_9583__$1 = cljs.core.seq.call(null,inst_9553);
var state_9623__$1 = (function (){var statearr_9634 = state_9623;
(statearr_9634[(10)] = inst_9583__$1);

return statearr_9634;
})();
if(inst_9583__$1){
var statearr_9635_9675 = state_9623__$1;
(statearr_9635_9675[(1)] = (13));

} else {
var statearr_9636_9676 = state_9623__$1;
(statearr_9636_9676[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9624 === (17))){
var inst_9592 = (state_9623[(8)]);
var inst_9583 = (state_9623[(10)]);
var inst_9592__$1 = cljs.core.first.call(null,inst_9583);
var inst_9593 = new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(inst_9592__$1);
var inst_9594 = ghoul.repository.item.get_item.call(null,feed_uid,inst_9593);
var state_9623__$1 = (function (){var statearr_9637 = state_9623;
(statearr_9637[(8)] = inst_9592__$1);

return statearr_9637;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9623__$1,(19),inst_9594);
} else {
if((state_val_9624 === (3))){
var inst_9555 = (state_9623[(11)]);
var inst_9556 = (state_9623[(15)]);
var inst_9558 = (inst_9556 < inst_9555);
var inst_9559 = inst_9558;
var state_9623__$1 = state_9623;
if(cljs.core.truth_(inst_9559)){
var statearr_9638_9677 = state_9623__$1;
(statearr_9638_9677[(1)] = (5));

} else {
var statearr_9639_9678 = state_9623__$1;
(statearr_9639_9678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9624 === (12))){
var inst_9568 = (state_9623[(16)]);
var inst_9571 = (state_9623[(2)]);
var inst_9572 = [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"data","data",-232669377)];
var inst_9573 = ["update","ok",inst_9568];
var inst_9574 = cljs.core.PersistentHashMap.fromArrays(inst_9572,inst_9573);
var inst_9575 = cljs.core.clj__GT_js.call(null,inst_9574);
var inst_9576 = postMessage(inst_9575);
var state_9623__$1 = (function (){var statearr_9640 = state_9623;
(statearr_9640[(17)] = inst_9571);

return statearr_9640;
})();
var statearr_9641_9679 = state_9623__$1;
(statearr_9641_9679[(2)] = inst_9576);

(statearr_9641_9679[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9624 === (2))){
var inst_9545 = (state_9623[(2)]);
var inst_9546 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_9545);
var inst_9547 = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(inst_9546);
var inst_9552 = cljs.core.seq.call(null,inst_9547);
var inst_9553 = inst_9552;
var inst_9554 = null;
var inst_9555 = (0);
var inst_9556 = (0);
var state_9623__$1 = (function (){var statearr_9642 = state_9623;
(statearr_9642[(11)] = inst_9555);

(statearr_9642[(12)] = inst_9554);

(statearr_9642[(13)] = inst_9553);

(statearr_9642[(15)] = inst_9556);

return statearr_9642;
})();
var statearr_9643_9680 = state_9623__$1;
(statearr_9643_9680[(2)] = null);

(statearr_9643_9680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9624 === (23))){
var inst_9599 = (state_9623[(7)]);
var inst_9602 = (state_9623[(2)]);
var inst_9603 = [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"data","data",-232669377)];
var inst_9604 = ["update","ok",inst_9599];
var inst_9605 = cljs.core.PersistentHashMap.fromArrays(inst_9603,inst_9604);
var inst_9606 = cljs.core.clj__GT_js.call(null,inst_9605);
var inst_9607 = postMessage(inst_9606);
var state_9623__$1 = (function (){var statearr_9647 = state_9623;
(statearr_9647[(18)] = inst_9602);

return statearr_9647;
})();
var statearr_9648_9681 = state_9623__$1;
(statearr_9648_9681[(2)] = inst_9607);

(statearr_9648_9681[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9624 === (19))){
var inst_9596 = (state_9623[(2)]);
var inst_9597 = cljs.core._EQ_.call(null,inst_9596,new cljs.core.Keyword(null,"not-found","not-found",-629079980));
var state_9623__$1 = state_9623;
if(inst_9597){
var statearr_9649_9682 = state_9623__$1;
(statearr_9649_9682[(1)] = (20));

} else {
var statearr_9650_9683 = state_9623__$1;
(statearr_9650_9683[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9624 === (11))){
var inst_9555 = (state_9623[(11)]);
var inst_9554 = (state_9623[(12)]);
var inst_9553 = (state_9623[(13)]);
var inst_9556 = (state_9623[(15)]);
var inst_9579 = (state_9623[(2)]);
var inst_9580 = (inst_9556 + (1));
var tmp9644 = inst_9555;
var tmp9645 = inst_9554;
var tmp9646 = inst_9553;
var inst_9553__$1 = tmp9646;
var inst_9554__$1 = tmp9645;
var inst_9555__$1 = tmp9644;
var inst_9556__$1 = inst_9580;
var state_9623__$1 = (function (){var statearr_9651 = state_9623;
(statearr_9651[(11)] = inst_9555__$1);

(statearr_9651[(12)] = inst_9554__$1);

(statearr_9651[(19)] = inst_9579);

(statearr_9651[(13)] = inst_9553__$1);

(statearr_9651[(15)] = inst_9556__$1);

return statearr_9651;
})();
var statearr_9652_9684 = state_9623__$1;
(statearr_9652_9684[(2)] = null);

(statearr_9652_9684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9624 === (9))){
var inst_9568 = (state_9623[(16)]);
var inst_9561 = (state_9623[(20)]);
var inst_9568__$1 = cljs.core.assoc.call(null,inst_9561,new cljs.core.Keyword(null,"feeduid","feeduid",1367071876),feed_uid);
var inst_9569 = ghoul.repository.item.add_item.call(null,inst_9568__$1);
var state_9623__$1 = (function (){var statearr_9653 = state_9623;
(statearr_9653[(16)] = inst_9568__$1);

return statearr_9653;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9623__$1,(12),inst_9569);
} else {
if((state_val_9624 === (5))){
var inst_9554 = (state_9623[(12)]);
var inst_9556 = (state_9623[(15)]);
var inst_9561 = (state_9623[(20)]);
var inst_9561__$1 = cljs.core._nth.call(null,inst_9554,inst_9556);
var inst_9562 = new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(inst_9561__$1);
var inst_9563 = ghoul.repository.item.get_item.call(null,feed_uid,inst_9562);
var state_9623__$1 = (function (){var statearr_9654 = state_9623;
(statearr_9654[(20)] = inst_9561__$1);

return statearr_9654;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9623__$1,(8),inst_9563);
} else {
if((state_val_9624 === (14))){
var state_9623__$1 = state_9623;
var statearr_9655_9685 = state_9623__$1;
(statearr_9655_9685[(2)] = null);

(statearr_9655_9685[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9624 === (16))){
var inst_9583 = (state_9623[(10)]);
var inst_9587 = cljs.core.chunk_first.call(null,inst_9583);
var inst_9588 = cljs.core.chunk_rest.call(null,inst_9583);
var inst_9589 = cljs.core.count.call(null,inst_9587);
var inst_9553 = inst_9588;
var inst_9554 = inst_9587;
var inst_9555 = inst_9589;
var inst_9556 = (0);
var state_9623__$1 = (function (){var statearr_9656 = state_9623;
(statearr_9656[(11)] = inst_9555);

(statearr_9656[(12)] = inst_9554);

(statearr_9656[(13)] = inst_9553);

(statearr_9656[(15)] = inst_9556);

return statearr_9656;
})();
var statearr_9657_9686 = state_9623__$1;
(statearr_9657_9686[(2)] = null);

(statearr_9657_9686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9624 === (10))){
var state_9623__$1 = state_9623;
var statearr_9658_9687 = state_9623__$1;
(statearr_9658_9687[(2)] = null);

(statearr_9658_9687[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9624 === (18))){
var inst_9614 = (state_9623[(2)]);
var state_9623__$1 = state_9623;
var statearr_9659_9688 = state_9623__$1;
(statearr_9659_9688[(2)] = inst_9614);

(statearr_9659_9688[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9624 === (8))){
var inst_9565 = (state_9623[(2)]);
var inst_9566 = cljs.core._EQ_.call(null,inst_9565,new cljs.core.Keyword(null,"not-found","not-found",-629079980));
var state_9623__$1 = state_9623;
if(inst_9566){
var statearr_9660_9689 = state_9623__$1;
(statearr_9660_9689[(1)] = (9));

} else {
var statearr_9661_9690 = state_9623__$1;
(statearr_9661_9690[(1)] = (10));

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
var statearr_9665 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9665[(0)] = state_machine__5795__auto__);

(statearr_9665[(1)] = (1));

return statearr_9665;
});
var state_machine__5795__auto____1 = (function (state_9623){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_9623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e9666){if((e9666 instanceof Object)){
var ex__5798__auto__ = e9666;
var statearr_9667_9691 = state_9623;
(statearr_9667_9691[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9692 = state_9623;
state_9623 = G__9692;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_9623){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_9623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_9668 = f__5810__auto__.call(null);
(statearr_9668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_9668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto__))
);

return c__5809__auto__;
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
