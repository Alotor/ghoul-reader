// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.state');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('ghoul.feeds_storage');
goog.require('ghoul.feeds_storage');
goog.require('ghoul.http');
goog.require('ghoul.http');
goog.require('cljs_uuid_utils');
goog.require('cljs_uuid_utils');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
ghoul.state.retrieve_all_feeds = (function retrieve_all_feeds(){
return cljs.core.flatten.call(null,cljs.core.map.call(null,cljs.core.second,ghoul.state.feed_store_temp));
});
goog.exportSymbol('ghoul.state.retrieve_all_feeds', ghoul.state.retrieve_all_feeds);
ghoul.state.global = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"current-view","current-view",-1037279042),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"feeds-view","feeds-view",1214517259),new cljs.core.Keyword(null,"expanded-view","expanded-view",1276146539),new cljs.core.Keyword(null,"show-menu","show-menu",14072792),false,new cljs.core.Keyword(null,"popup","popup",635890211),null,new cljs.core.Keyword(null,"selected","selected",574897764),null,new cljs.core.Keyword(null,"groups","groups",-136896102),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"general-group-uid","general-group-uid",-1869498229),null,new cljs.core.Keyword(null,"feeds","feeds",855496306),cljs.core.PersistentVector.EMPTY], null));
ghoul.state.get_group_data = (function get_group_data(uid){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__15530_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(p1__15530_SHARP_),uid);
}),new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.state.global))));
});
ghoul.state.get_feed_data = (function get_feed_data(uid){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__15531_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(p1__15531_SHARP_),uid);
}),cljs.core.flatten.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.state.global))))));
});
ghoul.state.get_title = (function get_title(uid){
var group_data = ghoul.state.get_group_data.call(null,uid);
if((group_data == null)){
return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(ghoul.state.get_feed_data.call(null,uid));
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(group_data);
}
});
ghoul.state.get_group_subscriptions = (function get_group_subscriptions(uid){
var group_data = ghoul.state.get_group_data.call(null,uid);
return cljs.core.map.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(group_data));
});
ghoul.state.retrieve_feeds = (function retrieve_feeds(uid){
var group = ghoul.state.get_group_data.call(null,uid);
var subscriptions_list = (((group == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid], null):ghoul.state.get_group_subscriptions.call(null,uid));
return cljs.core.PersistentVector.EMPTY;
});
ghoul.state.select_feed = (function select_feed(uid){
return cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),uid,new cljs.core.Keyword(null,"feeds","feeds",855496306),ghoul.state.retrieve_feeds.call(null,uid));
});
goog.exportSymbol('ghoul.state.select_feed', ghoul.state.select_feed);
ghoul.state.toggle_compact_view = (function toggle_compact_view(){
return cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"feeds-view","feeds-view",1214517259),new cljs.core.Keyword(null,"compact-view","compact-view",1458667595));
});
ghoul.state.toggle_expanded_view = (function toggle_expanded_view(){
return cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"feeds-view","feeds-view",1214517259),new cljs.core.Keyword(null,"expanded-view","expanded-view",1276146539));
});
ghoul.state.toggle_menu = (function toggle_menu(){
return cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"show-menu","show-menu",14072792),cljs.core.not.call(null,new cljs.core.Keyword(null,"show-menu","show-menu",14072792).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.state.global))));
});
ghoul.state.toggle_feed_popup = (function toggle_feed_popup(){
return cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.assoc,new cljs.core.Keyword(null,"popup","popup",635890211),(((new cljs.core.Keyword(null,"popup","popup",635890211).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ghoul.state.global)) == null))?new cljs.core.Keyword(null,"feed","feed",-1566486205):null));
});
ghoul.state.add_general_group = (function add_general_group(){
var general_group = cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"General"),new cljs.core.Keyword(null,"count","count",2139924085),(0)),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true),new cljs.core.Keyword(null,"uid","uid",-1447769400),cljs_uuid_utils.uuid_string.call(null,cljs_uuid_utils.make_random_uuid.call(null))),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),cljs.core.PersistentVector.EMPTY);
return cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"groups","groups",-136896102)], null),((function (general_group){
return (function (p1__15532_SHARP_){
return cljs.core.conj.call(null,p1__15532_SHARP_,general_group);
});})(general_group))
);
});
goog.exportSymbol('ghoul.state.add_general_group', ghoul.state.add_general_group);
ghoul.state.add_rss_subscription = (function add_rss_subscription(feed_url){
var c__5809__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto__){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto__){
return (function (state_15728){
var state_val_15729 = (state_15728[(1)]);
if((state_val_15729 === (7))){
var inst_15661 = (state_15728[(7)]);
var inst_15672 = (state_15728[(8)]);
var inst_15721 = (state_15728[(2)]);
var inst_15722 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15723 = [new cljs.core.Keyword(null,"groups","groups",-136896102),(0),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776)];
var inst_15724 = (new cljs.core.PersistentVector(null,3,(5),inst_15722,inst_15723,null));
var inst_15725 = (function (){var subscription = inst_15672;
var feed_data = inst_15661;
var group_idx = (0);
return ((function (subscription,feed_data,group_idx,inst_15661,inst_15672,inst_15721,inst_15722,inst_15723,inst_15724,state_val_15729,c__5809__auto__){
return (function (p1__15534_SHARP_){
return cljs.core.conj.call(null,p1__15534_SHARP_,subscription);
});
;})(subscription,feed_data,group_idx,inst_15661,inst_15672,inst_15721,inst_15722,inst_15723,inst_15724,state_val_15729,c__5809__auto__))
})();
var inst_15726 = cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.update_in,inst_15724,inst_15725);
var state_15728__$1 = (function (){var statearr_15730 = state_15728;
(statearr_15730[(9)] = inst_15721);

return statearr_15730;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15728__$1,inst_15726);
} else {
if((state_val_15729 === (1))){
var inst_15650 = cljs.core.deref.call(null,ghoul.state.global);
var inst_15651 = new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(inst_15650);
var inst_15652 = cljs.core.empty_QMARK_.call(null,inst_15651);
var state_15728__$1 = state_15728;
if(inst_15652){
var statearr_15731_15765 = state_15728__$1;
(statearr_15731_15765[(1)] = (2));

} else {
var statearr_15732_15766 = state_15728__$1;
(statearr_15732_15766[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (4))){
var inst_15657 = (state_15728[(2)]);
var inst_15658 = ghoul.http.get_rss.call(null,feed_url);
var state_15728__$1 = (function (){var statearr_15733 = state_15728;
(statearr_15733[(10)] = inst_15657);

return statearr_15733;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15728__$1,(5),inst_15658);
} else {
if((state_val_15729 === (15))){
var inst_15681 = (state_15728[(11)]);
var inst_15680 = (state_15728[(12)]);
var inst_15661 = (state_15728[(7)]);
var inst_15696 = (state_15728[(13)]);
var inst_15682 = (state_15728[(14)]);
var inst_15672 = (state_15728[(8)]);
var inst_15705 = cljs.core.first.call(null,inst_15696);
var inst_15706 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15707 = [new cljs.core.Keyword(null,"feeds","feeds",855496306)];
var inst_15708 = (new cljs.core.PersistentVector(null,1,(5),inst_15706,inst_15707,null));
var inst_15709 = (function (){var feed = inst_15705;
var temp__4126__auto__ = inst_15696;
var seq__15673 = inst_15696;
var chunk__15674 = inst_15680;
var count__15675 = inst_15681;
var i__15676 = inst_15682;
var subscription = inst_15672;
var feed_data = inst_15661;
var group_idx = (0);
return ((function (feed,temp__4126__auto__,seq__15673,chunk__15674,count__15675,i__15676,subscription,feed_data,group_idx,inst_15681,inst_15680,inst_15661,inst_15696,inst_15682,inst_15672,inst_15705,inst_15706,inst_15707,inst_15708,state_val_15729,c__5809__auto__){
return (function (p1__15533_SHARP_){
return cljs.core.conj.call(null,p1__15533_SHARP_,feed);
});
;})(feed,temp__4126__auto__,seq__15673,chunk__15674,count__15675,i__15676,subscription,feed_data,group_idx,inst_15681,inst_15680,inst_15661,inst_15696,inst_15682,inst_15672,inst_15705,inst_15706,inst_15707,inst_15708,state_val_15729,c__5809__auto__))
})();
var inst_15710 = cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.update_in,inst_15708,inst_15709);
var inst_15711 = cljs.core.next.call(null,inst_15696);
var inst_15679 = inst_15711;
var inst_15680__$1 = null;
var inst_15681__$1 = (0);
var inst_15682__$1 = (0);
var state_15728__$1 = (function (){var statearr_15734 = state_15728;
(statearr_15734[(11)] = inst_15681__$1);

(statearr_15734[(15)] = inst_15679);

(statearr_15734[(12)] = inst_15680__$1);

(statearr_15734[(14)] = inst_15682__$1);

(statearr_15734[(16)] = inst_15710);

return statearr_15734;
})();
var statearr_15735_15767 = state_15728__$1;
(statearr_15735_15767[(2)] = null);

(statearr_15735_15767[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (13))){
var inst_15717 = (state_15728[(2)]);
var state_15728__$1 = state_15728;
var statearr_15736_15768 = state_15728__$1;
(statearr_15736_15768[(2)] = inst_15717);

(statearr_15736_15768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (6))){
var inst_15681 = (state_15728[(11)]);
var inst_15682 = (state_15728[(14)]);
var inst_15684 = (inst_15682 < inst_15681);
var inst_15685 = inst_15684;
var state_15728__$1 = state_15728;
if(cljs.core.truth_(inst_15685)){
var statearr_15737_15769 = state_15728__$1;
(statearr_15737_15769[(1)] = (8));

} else {
var statearr_15738_15770 = state_15728__$1;
(statearr_15738_15770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (3))){
var state_15728__$1 = state_15728;
var statearr_15739_15771 = state_15728__$1;
(statearr_15739_15771[(2)] = null);

(statearr_15739_15771[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (12))){
var state_15728__$1 = state_15728;
var statearr_15740_15772 = state_15728__$1;
(statearr_15740_15772[(2)] = null);

(statearr_15740_15772[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (2))){
var inst_15654 = ghoul.state.add_general_group.call(null);
var state_15728__$1 = state_15728;
var statearr_15741_15773 = state_15728__$1;
(statearr_15741_15773[(2)] = inst_15654);

(statearr_15741_15773[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (11))){
var inst_15696 = (state_15728[(13)]);
var inst_15698 = cljs.core.chunked_seq_QMARK_.call(null,inst_15696);
var state_15728__$1 = state_15728;
if(inst_15698){
var statearr_15742_15774 = state_15728__$1;
(statearr_15742_15774[(1)] = (14));

} else {
var statearr_15743_15775 = state_15728__$1;
(statearr_15743_15775[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (9))){
var inst_15679 = (state_15728[(15)]);
var inst_15696 = (state_15728[(13)]);
var inst_15696__$1 = cljs.core.seq.call(null,inst_15679);
var state_15728__$1 = (function (){var statearr_15744 = state_15728;
(statearr_15744[(13)] = inst_15696__$1);

return statearr_15744;
})();
if(inst_15696__$1){
var statearr_15745_15776 = state_15728__$1;
(statearr_15745_15776[(1)] = (11));

} else {
var statearr_15746_15777 = state_15728__$1;
(statearr_15746_15777[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (5))){
var inst_15661 = (state_15728[(7)]);
var inst_15660 = (state_15728[(2)]);
var inst_15661__$1 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_15660);
var inst_15662 = cljs.core.PersistentHashMap.EMPTY;
var inst_15663 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(inst_15661__$1);
var inst_15664 = cljs.core.assoc.call(null,inst_15662,new cljs.core.Keyword(null,"title","title",636505583),inst_15663);
var inst_15665 = cljs_uuid_utils.make_random_uuid.call(null);
var inst_15666 = cljs_uuid_utils.uuid_string.call(null,inst_15665);
var inst_15667 = cljs.core.assoc.call(null,inst_15664,new cljs.core.Keyword(null,"uid","uid",-1447769400),inst_15666);
var inst_15668 = new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(inst_15661__$1);
var inst_15669 = cljs.core.assoc.call(null,inst_15667,new cljs.core.Keyword(null,"site-url","site-url",1492702733),inst_15668);
var inst_15670 = cljs.core.assoc.call(null,inst_15669,new cljs.core.Keyword(null,"feed-url","feed-url",1903210362),feed_url);
var inst_15671 = cljs.core.assoc.call(null,inst_15670,new cljs.core.Keyword(null,"favicon","favicon",-1214000341),"/images/favicon.png");
var inst_15672 = cljs.core.assoc.call(null,inst_15671,new cljs.core.Keyword(null,"pending","pending",-220036727),(0));
var inst_15677 = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(inst_15661__$1);
var inst_15678 = cljs.core.seq.call(null,inst_15677);
var inst_15679 = inst_15678;
var inst_15680 = null;
var inst_15681 = (0);
var inst_15682 = (0);
var state_15728__$1 = (function (){var statearr_15747 = state_15728;
(statearr_15747[(11)] = inst_15681);

(statearr_15747[(15)] = inst_15679);

(statearr_15747[(12)] = inst_15680);

(statearr_15747[(7)] = inst_15661__$1);

(statearr_15747[(14)] = inst_15682);

(statearr_15747[(8)] = inst_15672);

return statearr_15747;
})();
var statearr_15748_15778 = state_15728__$1;
(statearr_15748_15778[(2)] = null);

(statearr_15748_15778[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (14))){
var inst_15696 = (state_15728[(13)]);
var inst_15700 = cljs.core.chunk_first.call(null,inst_15696);
var inst_15701 = cljs.core.chunk_rest.call(null,inst_15696);
var inst_15702 = cljs.core.count.call(null,inst_15700);
var inst_15679 = inst_15701;
var inst_15680 = inst_15700;
var inst_15681 = inst_15702;
var inst_15682 = (0);
var state_15728__$1 = (function (){var statearr_15749 = state_15728;
(statearr_15749[(11)] = inst_15681);

(statearr_15749[(15)] = inst_15679);

(statearr_15749[(12)] = inst_15680);

(statearr_15749[(14)] = inst_15682);

return statearr_15749;
})();
var statearr_15750_15779 = state_15728__$1;
(statearr_15750_15779[(2)] = null);

(statearr_15750_15779[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (16))){
var inst_15714 = (state_15728[(2)]);
var state_15728__$1 = state_15728;
var statearr_15754_15780 = state_15728__$1;
(statearr_15754_15780[(2)] = inst_15714);

(statearr_15754_15780[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (10))){
var inst_15719 = (state_15728[(2)]);
var state_15728__$1 = state_15728;
var statearr_15755_15781 = state_15728__$1;
(statearr_15755_15781[(2)] = inst_15719);

(statearr_15755_15781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (8))){
var inst_15681 = (state_15728[(11)]);
var inst_15679 = (state_15728[(15)]);
var inst_15680 = (state_15728[(12)]);
var inst_15661 = (state_15728[(7)]);
var inst_15682 = (state_15728[(14)]);
var inst_15672 = (state_15728[(8)]);
var inst_15687 = cljs.core._nth.call(null,inst_15680,inst_15682);
var inst_15688 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15689 = [new cljs.core.Keyword(null,"feeds","feeds",855496306)];
var inst_15690 = (new cljs.core.PersistentVector(null,1,(5),inst_15688,inst_15689,null));
var inst_15691 = (function (){var feed = inst_15687;
var seq__15673 = inst_15679;
var chunk__15674 = inst_15680;
var count__15675 = inst_15681;
var i__15676 = inst_15682;
var subscription = inst_15672;
var feed_data = inst_15661;
var group_idx = (0);
return ((function (feed,seq__15673,chunk__15674,count__15675,i__15676,subscription,feed_data,group_idx,inst_15681,inst_15679,inst_15680,inst_15661,inst_15682,inst_15672,inst_15687,inst_15688,inst_15689,inst_15690,state_val_15729,c__5809__auto__){
return (function (p1__15533_SHARP_){
return cljs.core.conj.call(null,p1__15533_SHARP_,feed);
});
;})(feed,seq__15673,chunk__15674,count__15675,i__15676,subscription,feed_data,group_idx,inst_15681,inst_15679,inst_15680,inst_15661,inst_15682,inst_15672,inst_15687,inst_15688,inst_15689,inst_15690,state_val_15729,c__5809__auto__))
})();
var inst_15692 = cljs.core.swap_BANG_.call(null,ghoul.state.global,cljs.core.update_in,inst_15690,inst_15691);
var inst_15693 = (inst_15682 + (1));
var tmp15751 = inst_15681;
var tmp15752 = inst_15679;
var tmp15753 = inst_15680;
var inst_15679__$1 = tmp15752;
var inst_15680__$1 = tmp15753;
var inst_15681__$1 = tmp15751;
var inst_15682__$1 = inst_15693;
var state_15728__$1 = (function (){var statearr_15756 = state_15728;
(statearr_15756[(11)] = inst_15681__$1);

(statearr_15756[(15)] = inst_15679__$1);

(statearr_15756[(12)] = inst_15680__$1);

(statearr_15756[(17)] = inst_15692);

(statearr_15756[(14)] = inst_15682__$1);

return statearr_15756;
})();
var statearr_15757_15782 = state_15728__$1;
(statearr_15757_15782[(2)] = null);

(statearr_15757_15782[(1)] = (6));


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
});})(c__5809__auto__))
;
return ((function (switch__5794__auto__,c__5809__auto__){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_15761 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15761[(0)] = state_machine__5795__auto__);

(statearr_15761[(1)] = (1));

return statearr_15761;
});
var state_machine__5795__auto____1 = (function (state_15728){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_15728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e15762){if((e15762 instanceof Object)){
var ex__5798__auto__ = e15762;
var statearr_15763_15783 = state_15728;
(statearr_15763_15783[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15784 = state_15728;
state_15728 = G__15784;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_15728){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_15728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_15764 = f__5810__auto__.call(null);
(statearr_15764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_15764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto__))
);

return c__5809__auto__;
});
