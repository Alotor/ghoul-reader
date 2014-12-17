// Compiled by ClojureScript 0.0-2411
goog.provide('cljs_uuid.core');
goog.require('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('goog.string.StringBuffer');
cljs_uuid.core.make_string_buffer = (function make_string_buffer(){
return (new goog.string.StringBuffer());
});
cljs_uuid.core.str__GT_int = (function str__GT_int(s,r){
return parseInt(s,r);
});
cljs_uuid.core.make_exception = (function make_exception(msg){
return (new Error(msg));
});
cljs_uuid.core.num__GT_string = (function num__GT_string(number,radix){
var num = (new Number(number));
return num.toString(radix);
});
cljs_uuid.core.pow2_6 = (64);
cljs_uuid.core.pow2_8 = (256);
cljs_uuid.core.pow2_12 = (4096);
cljs_uuid.core.pow2_14 = (16384);
cljs_uuid.core.pow2_16 = (65536);
cljs_uuid.core.pow2_32 = (4294967296);
cljs_uuid.core.pow2_48 = (281474976710656);
/**
* append a padded hex number to stringbuffer
*/
cljs_uuid.core.padded_hex = (function padded_hex(sb,number,len){
var num_s = cljs_uuid.core.num__GT_string.call(null,number,(16));
var seq__11579_11583 = cljs.core.seq.call(null,cljs.core.range.call(null,(len - num_s.length)));
var chunk__11580_11584 = null;
var count__11581_11585 = (0);
var i__11582_11586 = (0);
while(true){
if((i__11582_11586 < count__11581_11585)){
var i_11587 = cljs.core._nth.call(null,chunk__11580_11584,i__11582_11586);
sb.append("0");

var G__11588 = seq__11579_11583;
var G__11589 = chunk__11580_11584;
var G__11590 = count__11581_11585;
var G__11591 = (i__11582_11586 + (1));
seq__11579_11583 = G__11588;
chunk__11580_11584 = G__11589;
count__11581_11585 = G__11590;
i__11582_11586 = G__11591;
continue;
} else {
var temp__4126__auto___11592 = cljs.core.seq.call(null,seq__11579_11583);
if(temp__4126__auto___11592){
var seq__11579_11593__$1 = temp__4126__auto___11592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11579_11593__$1)){
var c__4390__auto___11594 = cljs.core.chunk_first.call(null,seq__11579_11593__$1);
var G__11595 = cljs.core.chunk_rest.call(null,seq__11579_11593__$1);
var G__11596 = c__4390__auto___11594;
var G__11597 = cljs.core.count.call(null,c__4390__auto___11594);
var G__11598 = (0);
seq__11579_11583 = G__11595;
chunk__11580_11584 = G__11596;
count__11581_11585 = G__11597;
i__11582_11586 = G__11598;
continue;
} else {
var i_11599 = cljs.core.first.call(null,seq__11579_11593__$1);
sb.append("0");

var G__11600 = cljs.core.next.call(null,seq__11579_11593__$1);
var G__11601 = null;
var G__11602 = (0);
var G__11603 = (0);
seq__11579_11583 = G__11600;
chunk__11580_11584 = G__11601;
count__11581_11585 = G__11602;
i__11582_11586 = G__11603;
continue;
}
} else {
}
}
break;
}

return sb.append(num_s);
});

/**
* @constructor
* @param {*} time_low
* @param {*} time_mid
* @param {*} time_hi_and_version
* @param {*} clock_seq_and_reserved
* @param {*} clock_seq_low
* @param {*} node
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.UUID = (function (time_low,time_mid,time_hi_and_version,clock_seq_and_reserved,clock_seq_low,node,__meta,__extmap){
this.time_low = time_low;
this.time_mid = time_mid;
this.time_hi_and_version = time_hi_and_version;
this.clock_seq_and_reserved = clock_seq_and_reserved;
this.clock_seq_low = clock_seq_low;
this.node = node;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>6){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs_uuid.core.UUID.prototype.toString = (function (){
var self__ = this;
var uuid = this;
var sb = cljs_uuid.core.make_string_buffer.call(null);
cljs_uuid.core.padded_hex.call(null,sb,new cljs.core.Keyword(null,"time-low","time-low",591474256).cljs$core$IFn$_invoke$arity$1(uuid),(8));

sb.append("-");

cljs_uuid.core.padded_hex.call(null,sb,new cljs.core.Keyword(null,"time-mid","time-mid",1260337195).cljs$core$IFn$_invoke$arity$1(uuid),(4));

sb.append("-");

cljs_uuid.core.padded_hex.call(null,sb,new cljs.core.Keyword(null,"time-hi-and-version","time-hi-and-version",-914424501).cljs$core$IFn$_invoke$arity$1(uuid),(4));

sb.append("-");

cljs_uuid.core.padded_hex.call(null,sb,new cljs.core.Keyword(null,"clock-seq-and-reserved","clock-seq-and-reserved",-1098918760).cljs$core$IFn$_invoke$arity$1(uuid),(2));

cljs_uuid.core.padded_hex.call(null,sb,new cljs.core.Keyword(null,"clock-seq-low","clock-seq-low",1625166418).cljs$core$IFn$_invoke$arity$1(uuid),(2));

sb.append("-");

cljs_uuid.core.padded_hex.call(null,sb,new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(uuid),(12));

return sb.toString();
});

cljs_uuid.core.UUID.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4206__auto__,k__4207__auto__){
var self__ = this;
var this__4206__auto____$1 = this;
return cljs.core._lookup.call(null,this__4206__auto____$1,k__4207__auto__,null);
});

cljs_uuid.core.UUID.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4208__auto__,k11605,else__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
var G__11607 = (((k11605 instanceof cljs.core.Keyword))?k11605.fqn:null);
switch (G__11607) {
case "node":
return self__.node;

break;
case "clock-seq-low":
return self__.clock_seq_low;

break;
case "clock-seq-and-reserved":
return self__.clock_seq_and_reserved;

break;
case "time-hi-and-version":
return self__.time_hi_and_version;

break;
case "time-mid":
return self__.time_mid;

break;
case "time-low":
return self__.time_low;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11605,else__4209__auto__);

}
});

cljs_uuid.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4220__auto__,writer__4221__auto__,opts__4222__auto__){
var self__ = this;
var this__4220__auto____$1 = this;
var pr_pair__4223__auto__ = ((function (this__4220__auto____$1){
return (function (keyval__4224__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4221__auto__,cljs.core.pr_writer,""," ","",opts__4222__auto__,keyval__4224__auto__);
});})(this__4220__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4221__auto__,pr_pair__4223__auto__,"#cljs.core.UUID{",", ","}",opts__4222__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"time-low","time-low",591474256),self__.time_low],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"time-mid","time-mid",1260337195),self__.time_mid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"time-hi-and-version","time-hi-and-version",-914424501),self__.time_hi_and_version],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clock-seq-and-reserved","clock-seq-and-reserved",-1098918760),self__.clock_seq_and_reserved],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clock-seq-low","clock-seq-low",1625166418),self__.clock_seq_low],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node","node",581201198),self__.node],null))], null),self__.__extmap));
});

cljs_uuid.core.UUID.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4204__auto__){
var self__ = this;
var this__4204__auto____$1 = this;
return self__.__meta;
});

cljs_uuid.core.UUID.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4200__auto__){
var self__ = this;
var this__4200__auto____$1 = this;
return (new cljs_uuid.core.UUID(self__.time_low,self__.time_mid,self__.time_hi_and_version,self__.clock_seq_and_reserved,self__.clock_seq_low,self__.node,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_uuid.core.UUID.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4210__auto__){
var self__ = this;
var this__4210__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

cljs_uuid.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
var h__4024__auto__ = self__.__hash;
if(!((h__4024__auto__ == null))){
return h__4024__auto__;
} else {
var h__4024__auto____$1 = cljs.core.hash_imap.call(null,this__4201__auto____$1);
self__.__hash = h__4024__auto____$1;

return h__4024__auto____$1;
}
});

cljs_uuid.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4202__auto__,other__4203__auto__){
var self__ = this;
var this__4202__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3596__auto__ = other__4203__auto__;
if(cljs.core.truth_(and__3596__auto__)){
return ((this__4202__auto____$1.constructor === other__4203__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4202__auto____$1,other__4203__auto__));
} else {
return and__3596__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs_uuid.core.UUID.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4215__auto__,k__4216__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"time-mid","time-mid",1260337195),null,new cljs.core.Keyword(null,"time-hi-and-version","time-hi-and-version",-914424501),null,new cljs.core.Keyword(null,"node","node",581201198),null,new cljs.core.Keyword(null,"time-low","time-low",591474256),null,new cljs.core.Keyword(null,"clock-seq-low","clock-seq-low",1625166418),null,new cljs.core.Keyword(null,"clock-seq-and-reserved","clock-seq-and-reserved",-1098918760),null], null), null),k__4216__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4215__auto____$1),self__.__meta),k__4216__auto__);
} else {
return (new cljs_uuid.core.UUID(self__.time_low,self__.time_mid,self__.time_hi_and_version,self__.clock_seq_and_reserved,self__.clock_seq_low,self__.node,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4216__auto__)),null));
}
});

cljs_uuid.core.UUID.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4213__auto__,k__4214__auto__,G__11604){
var self__ = this;
var this__4213__auto____$1 = this;
var pred__11608 = cljs.core.keyword_identical_QMARK_;
var expr__11609 = k__4214__auto__;
if(cljs.core.truth_(pred__11608.call(null,new cljs.core.Keyword(null,"time-low","time-low",591474256),expr__11609))){
return (new cljs_uuid.core.UUID(G__11604,self__.time_mid,self__.time_hi_and_version,self__.clock_seq_and_reserved,self__.clock_seq_low,self__.node,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11608.call(null,new cljs.core.Keyword(null,"time-mid","time-mid",1260337195),expr__11609))){
return (new cljs_uuid.core.UUID(self__.time_low,G__11604,self__.time_hi_and_version,self__.clock_seq_and_reserved,self__.clock_seq_low,self__.node,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11608.call(null,new cljs.core.Keyword(null,"time-hi-and-version","time-hi-and-version",-914424501),expr__11609))){
return (new cljs_uuid.core.UUID(self__.time_low,self__.time_mid,G__11604,self__.clock_seq_and_reserved,self__.clock_seq_low,self__.node,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11608.call(null,new cljs.core.Keyword(null,"clock-seq-and-reserved","clock-seq-and-reserved",-1098918760),expr__11609))){
return (new cljs_uuid.core.UUID(self__.time_low,self__.time_mid,self__.time_hi_and_version,G__11604,self__.clock_seq_low,self__.node,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11608.call(null,new cljs.core.Keyword(null,"clock-seq-low","clock-seq-low",1625166418),expr__11609))){
return (new cljs_uuid.core.UUID(self__.time_low,self__.time_mid,self__.time_hi_and_version,self__.clock_seq_and_reserved,G__11604,self__.node,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11608.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__11609))){
return (new cljs_uuid.core.UUID(self__.time_low,self__.time_mid,self__.time_hi_and_version,self__.clock_seq_and_reserved,self__.clock_seq_low,G__11604,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_uuid.core.UUID(self__.time_low,self__.time_mid,self__.time_hi_and_version,self__.clock_seq_and_reserved,self__.clock_seq_low,self__.node,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4214__auto__,G__11604),null));
}
}
}
}
}
}
});

cljs_uuid.core.UUID.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4218__auto__){
var self__ = this;
var this__4218__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"time-low","time-low",591474256),self__.time_low],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"time-mid","time-mid",1260337195),self__.time_mid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"time-hi-and-version","time-hi-and-version",-914424501),self__.time_hi_and_version],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clock-seq-and-reserved","clock-seq-and-reserved",-1098918760),self__.clock_seq_and_reserved],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clock-seq-low","clock-seq-low",1625166418),self__.clock_seq_low],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node","node",581201198),self__.node],null))], null),self__.__extmap));
});

cljs_uuid.core.UUID.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4205__auto__,G__11604){
var self__ = this;
var this__4205__auto____$1 = this;
return (new cljs_uuid.core.UUID(self__.time_low,self__.time_mid,self__.time_hi_and_version,self__.clock_seq_and_reserved,self__.clock_seq_low,self__.node,G__11604,self__.__extmap,self__.__hash));
});

cljs_uuid.core.UUID.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4211__auto__,entry__4212__auto__){
var self__ = this;
var this__4211__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4212__auto__)){
return cljs.core._assoc.call(null,this__4211__auto____$1,cljs.core._nth.call(null,entry__4212__auto__,(0)),cljs.core._nth.call(null,entry__4212__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4211__auto____$1,entry__4212__auto__);
}
});

cljs.core.UUID.cljs$lang$type = true;

cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core/UUID");
});

cljs.core.UUID.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"cljs.core/UUID");
});

cljs_uuid.core.__GT_UUID = (function __GT_UUID(time_low,time_mid,time_hi_and_version,clock_seq_and_reserved,clock_seq_low,node){
return (new cljs.core.UUID(time_low,time_mid,time_hi_and_version,clock_seq_and_reserved,clock_seq_low,node));
});

cljs_uuid.core.map__GT_UUID = (function map__GT_UUID(G__11606){
return (new cljs.core.UUID(new cljs.core.Keyword(null,"time-low","time-low",591474256).cljs$core$IFn$_invoke$arity$1(G__11606),new cljs.core.Keyword(null,"time-mid","time-mid",1260337195).cljs$core$IFn$_invoke$arity$1(G__11606),new cljs.core.Keyword(null,"time-hi-and-version","time-hi-and-version",-914424501).cljs$core$IFn$_invoke$arity$1(G__11606),new cljs.core.Keyword(null,"clock-seq-and-reserved","clock-seq-and-reserved",-1098918760).cljs$core$IFn$_invoke$arity$1(G__11606),new cljs.core.Keyword(null,"clock-seq-low","clock-seq-low",1625166418).cljs$core$IFn$_invoke$arity$1(G__11606),new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(G__11606),null,cljs.core.dissoc.call(null,G__11606,new cljs.core.Keyword(null,"time-low","time-low",591474256),new cljs.core.Keyword(null,"time-mid","time-mid",1260337195),new cljs.core.Keyword(null,"time-hi-and-version","time-hi-and-version",-914424501),new cljs.core.Keyword(null,"clock-seq-and-reserved","clock-seq-and-reserved",-1098918760),new cljs.core.Keyword(null,"clock-seq-low","clock-seq-low",1625166418),new cljs.core.Keyword(null,"node","node",581201198))));
});

/**
* make a version 4 (random UUID as per http://www.ietf.org/rfc/rfc4122.txt
*/
cljs_uuid.core.make_v4 = (function make_v4(){
return (new cljs_uuid.core.UUID(cljs.core.rand_int.call(null,cljs_uuid.core.pow2_32),cljs.core.rand_int.call(null,cljs_uuid.core.pow2_16),((16384) | cljs.core.rand_int.call(null,cljs_uuid.core.pow2_12)),((128) | cljs.core.rand_int.call(null,cljs_uuid.core.pow2_6)),cljs.core.rand_int.call(null,cljs_uuid.core.pow2_8),((cljs.core.rand_int.call(null,cljs_uuid.core.pow2_32) * cljs_uuid.core.pow2_16) + cljs.core.rand_int.call(null,cljs_uuid.core.pow2_16))));
});
cljs_uuid.core.UUID.prototype.cljs_uuid$core$IPrintable$ = true;

cljs_uuid.core.UUID.prototype.cljs_uuid$core$IPrintable$_pr_seq$arity$2 = (function (uuid,opts){
var uuid__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"\""),[cljs.core.str(uuid__$1)].join('')),"#uuid \"");
});
cljs_uuid.core.uuid_str_re = /([0-9a-fA-F]{8})-([0-9a-fA-F]{4})-([0-9a-fA-F]{4})-([0-9a-fA-F]{2})([0-9a-fA-F]{2})-([0-9a-fA-F]{12})/;
/**
* read a raw (8-4-4-4-12) uuid string
*/
cljs_uuid.core.read_str = (function read_str(uuid_str){
var temp__4124__auto__ = cljs.core.re_matches.call(null,cljs_uuid.core.uuid_str_re,uuid_str);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__11613 = temp__4124__auto__;
var _ = cljs.core.nth.call(null,vec__11613,(0),null);
var time_low = cljs.core.nth.call(null,vec__11613,(1),null);
var time_mid = cljs.core.nth.call(null,vec__11613,(2),null);
var time_hi_and_version = cljs.core.nth.call(null,vec__11613,(3),null);
var clock_seq_and_reserved = cljs.core.nth.call(null,vec__11613,(4),null);
var clock_seq_low = cljs.core.nth.call(null,vec__11613,(5),null);
var node = cljs.core.nth.call(null,vec__11613,(6),null);
return (new cljs_uuid.core.UUID(cljs_uuid.core.str__GT_int.call(null,time_low,(16)),cljs_uuid.core.str__GT_int.call(null,time_mid,(16)),cljs_uuid.core.str__GT_int.call(null,time_hi_and_version,(16)),cljs_uuid.core.str__GT_int.call(null,clock_seq_and_reserved,(16)),cljs_uuid.core.str__GT_int.call(null,clock_seq_low,(16)),cljs_uuid.core.str__GT_int.call(null,node,(16))));
} else {
throw cljs_uuid.core.make_exception.call(null,[cljs.core.str("Error Reading UUID: "),cljs.core.str(uuid_str)].join(''));
}
});
cljs_uuid.core.uuid_pr_str_re = /#uuid\s+\"(.{36})\"/;
/**
* read in #uuid "... "
*/
cljs_uuid.core.read_pr_str = (function read_pr_str(uuid_pr_str){
var temp__4124__auto__ = cljs.core.re_matches.call(null,cljs_uuid.core.uuid_pr_str_re,uuid_pr_str);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__11615 = temp__4124__auto__;
var _ = cljs.core.nth.call(null,vec__11615,(0),null);
var uuid_str = cljs.core.nth.call(null,vec__11615,(1),null);
return cljs_uuid.core.read_str.call(null,uuid_str);
} else {
throw cljs_uuid.core.make_exception.call(null,[cljs.core.str("Error Reading UUID: "),cljs.core.str(uuid_pr_str)].join(''));
}
});
