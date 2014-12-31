// Compiled by ClojureScript 0.0-2411
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t19344 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19344 = (function (f,fn_handler,meta19345){
this.f = f;
this.fn_handler = fn_handler;
this.meta19345 = meta19345;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19344.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19344.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t19344.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t19344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19346){
var self__ = this;
var _19346__$1 = this;
return self__.meta19345;
});

cljs.core.async.t19344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19346,meta19345__$1){
var self__ = this;
var _19346__$1 = this;
return (new cljs.core.async.t19344(self__.f,self__.fn_handler,meta19345__$1));
});

cljs.core.async.t19344.cljs$lang$type = true;

cljs.core.async.t19344.cljs$lang$ctorStr = "cljs.core.async/t19344";

cljs.core.async.t19344.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t19344");
});

cljs.core.async.__GT_t19344 = (function __GT_t19344(f__$1,fn_handler__$1,meta19345){
return (new cljs.core.async.t19344(f__$1,fn_handler__$1,meta19345));
});

}

return (new cljs.core.async.t19344(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__19348 = buff;
if(G__19348){
var bit__4284__auto__ = null;
if(cljs.core.truth_((function (){var or__3608__auto__ = bit__4284__auto__;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return G__19348.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__19348.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19348);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19348);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19349 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19349);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19349,ret){
return (function (){
return fn1.call(null,val_19349);
});})(val_19349,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4490__auto___19350 = n;
var x_19351 = (0);
while(true){
if((x_19351 < n__4490__auto___19350)){
(a[x_19351] = (0));

var G__19352 = (x_19351 + (1));
x_19351 = G__19352;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__19353 = (i + (1));
i = G__19353;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t19357 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19357 = (function (flag,alt_flag,meta19358){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta19358 = meta19358;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19357.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19357.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t19357.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t19357.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19359){
var self__ = this;
var _19359__$1 = this;
return self__.meta19358;
});})(flag))
;

cljs.core.async.t19357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19359,meta19358__$1){
var self__ = this;
var _19359__$1 = this;
return (new cljs.core.async.t19357(self__.flag,self__.alt_flag,meta19358__$1));
});})(flag))
;

cljs.core.async.t19357.cljs$lang$type = true;

cljs.core.async.t19357.cljs$lang$ctorStr = "cljs.core.async/t19357";

cljs.core.async.t19357.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t19357");
});})(flag))
;

cljs.core.async.__GT_t19357 = ((function (flag){
return (function __GT_t19357(flag__$1,alt_flag__$1,meta19358){
return (new cljs.core.async.t19357(flag__$1,alt_flag__$1,meta19358));
});})(flag))
;

}

return (new cljs.core.async.t19357(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t19363 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19363 = (function (cb,flag,alt_handler,meta19364){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta19364 = meta19364;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19363.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19363.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t19363.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t19363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19365){
var self__ = this;
var _19365__$1 = this;
return self__.meta19364;
});

cljs.core.async.t19363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19365,meta19364__$1){
var self__ = this;
var _19365__$1 = this;
return (new cljs.core.async.t19363(self__.cb,self__.flag,self__.alt_handler,meta19364__$1));
});

cljs.core.async.t19363.cljs$lang$type = true;

cljs.core.async.t19363.cljs$lang$ctorStr = "cljs.core.async/t19363";

cljs.core.async.t19363.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t19363");
});

cljs.core.async.__GT_t19363 = (function __GT_t19363(cb__$1,flag__$1,alt_handler__$1,meta19364){
return (new cljs.core.async.t19363(cb__$1,flag__$1,alt_handler__$1,meta19364));
});

}

return (new cljs.core.async.t19363(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19366_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19366_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19367_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19367_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3608__auto__ = wport;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19368 = (i + (1));
i = G__19368;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3608__auto__ = ret;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3596__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3596__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3596__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__19369){
var map__19371 = p__19369;
var map__19371__$1 = ((cljs.core.seq_QMARK_.call(null,map__19371))?cljs.core.apply.call(null,cljs.core.hash_map,map__19371):map__19371);
var opts = map__19371__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__19369 = null;
if (arguments.length > 1) {
  p__19369 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__19369);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__19372){
var ports = cljs.core.first(arglist__19372);
var p__19369 = cljs.core.rest(arglist__19372);
return alts_BANG___delegate(ports,p__19369);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__7303__auto___19467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___19467){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___19467){
return (function (state_19443){
var state_val_19444 = (state_19443[(1)]);
if((state_val_19444 === (7))){
var inst_19439 = (state_19443[(2)]);
var state_19443__$1 = state_19443;
var statearr_19445_19468 = state_19443__$1;
(statearr_19445_19468[(2)] = inst_19439);

(statearr_19445_19468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19444 === (1))){
var state_19443__$1 = state_19443;
var statearr_19446_19469 = state_19443__$1;
(statearr_19446_19469[(2)] = null);

(statearr_19446_19469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19444 === (4))){
var inst_19422 = (state_19443[(7)]);
var inst_19422__$1 = (state_19443[(2)]);
var inst_19423 = (inst_19422__$1 == null);
var state_19443__$1 = (function (){var statearr_19447 = state_19443;
(statearr_19447[(7)] = inst_19422__$1);

return statearr_19447;
})();
if(cljs.core.truth_(inst_19423)){
var statearr_19448_19470 = state_19443__$1;
(statearr_19448_19470[(1)] = (5));

} else {
var statearr_19449_19471 = state_19443__$1;
(statearr_19449_19471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19444 === (13))){
var state_19443__$1 = state_19443;
var statearr_19450_19472 = state_19443__$1;
(statearr_19450_19472[(2)] = null);

(statearr_19450_19472[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19444 === (6))){
var inst_19422 = (state_19443[(7)]);
var state_19443__$1 = state_19443;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19443__$1,(11),to,inst_19422);
} else {
if((state_val_19444 === (3))){
var inst_19441 = (state_19443[(2)]);
var state_19443__$1 = state_19443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19443__$1,inst_19441);
} else {
if((state_val_19444 === (12))){
var state_19443__$1 = state_19443;
var statearr_19451_19473 = state_19443__$1;
(statearr_19451_19473[(2)] = null);

(statearr_19451_19473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19444 === (2))){
var state_19443__$1 = state_19443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19443__$1,(4),from);
} else {
if((state_val_19444 === (11))){
var inst_19432 = (state_19443[(2)]);
var state_19443__$1 = state_19443;
if(cljs.core.truth_(inst_19432)){
var statearr_19452_19474 = state_19443__$1;
(statearr_19452_19474[(1)] = (12));

} else {
var statearr_19453_19475 = state_19443__$1;
(statearr_19453_19475[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19444 === (9))){
var state_19443__$1 = state_19443;
var statearr_19454_19476 = state_19443__$1;
(statearr_19454_19476[(2)] = null);

(statearr_19454_19476[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19444 === (5))){
var state_19443__$1 = state_19443;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19455_19477 = state_19443__$1;
(statearr_19455_19477[(1)] = (8));

} else {
var statearr_19456_19478 = state_19443__$1;
(statearr_19456_19478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19444 === (14))){
var inst_19437 = (state_19443[(2)]);
var state_19443__$1 = state_19443;
var statearr_19457_19479 = state_19443__$1;
(statearr_19457_19479[(2)] = inst_19437);

(statearr_19457_19479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19444 === (10))){
var inst_19429 = (state_19443[(2)]);
var state_19443__$1 = state_19443;
var statearr_19458_19480 = state_19443__$1;
(statearr_19458_19480[(2)] = inst_19429);

(statearr_19458_19480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19444 === (8))){
var inst_19426 = cljs.core.async.close_BANG_.call(null,to);
var state_19443__$1 = state_19443;
var statearr_19459_19481 = state_19443__$1;
(statearr_19459_19481[(2)] = inst_19426);

(statearr_19459_19481[(1)] = (10));


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
});})(c__7303__auto___19467))
;
return ((function (switch__7288__auto__,c__7303__auto___19467){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_19463 = [null,null,null,null,null,null,null,null];
(statearr_19463[(0)] = state_machine__7289__auto__);

(statearr_19463[(1)] = (1));

return statearr_19463;
});
var state_machine__7289__auto____1 = (function (state_19443){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_19443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e19464){if((e19464 instanceof Object)){
var ex__7292__auto__ = e19464;
var statearr_19465_19482 = state_19443;
(statearr_19465_19482[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19483 = state_19443;
state_19443 = G__19483;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_19443){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_19443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___19467))
})();
var state__7305__auto__ = (function (){var statearr_19466 = f__7304__auto__.call(null);
(statearr_19466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___19467);

return statearr_19466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___19467))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__19667){
var vec__19668 = p__19667;
var v = cljs.core.nth.call(null,vec__19668,(0),null);
var p = cljs.core.nth.call(null,vec__19668,(1),null);
var job = vec__19668;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7303__auto___19850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___19850,res,vec__19668,v,p,job,jobs,results){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___19850,res,vec__19668,v,p,job,jobs,results){
return (function (state_19673){
var state_val_19674 = (state_19673[(1)]);
if((state_val_19674 === (2))){
var inst_19670 = (state_19673[(2)]);
var inst_19671 = cljs.core.async.close_BANG_.call(null,res);
var state_19673__$1 = (function (){var statearr_19675 = state_19673;
(statearr_19675[(7)] = inst_19670);

return statearr_19675;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19673__$1,inst_19671);
} else {
if((state_val_19674 === (1))){
var state_19673__$1 = state_19673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19673__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7303__auto___19850,res,vec__19668,v,p,job,jobs,results))
;
return ((function (switch__7288__auto__,c__7303__auto___19850,res,vec__19668,v,p,job,jobs,results){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_19679 = [null,null,null,null,null,null,null,null];
(statearr_19679[(0)] = state_machine__7289__auto__);

(statearr_19679[(1)] = (1));

return statearr_19679;
});
var state_machine__7289__auto____1 = (function (state_19673){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_19673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e19680){if((e19680 instanceof Object)){
var ex__7292__auto__ = e19680;
var statearr_19681_19851 = state_19673;
(statearr_19681_19851[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19852 = state_19673;
state_19673 = G__19852;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_19673){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_19673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___19850,res,vec__19668,v,p,job,jobs,results))
})();
var state__7305__auto__ = (function (){var statearr_19682 = f__7304__auto__.call(null);
(statearr_19682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___19850);

return statearr_19682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___19850,res,vec__19668,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19683){
var vec__19684 = p__19683;
var v = cljs.core.nth.call(null,vec__19684,(0),null);
var p = cljs.core.nth.call(null,vec__19684,(1),null);
var job = vec__19684;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4490__auto___19853 = n;
var __19854 = (0);
while(true){
if((__19854 < n__4490__auto___19853)){
var G__19685_19855 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19685_19855) {
case "async":
var c__7303__auto___19857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19854,c__7303__auto___19857,G__19685_19855,n__4490__auto___19853,jobs,results,process,async){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (__19854,c__7303__auto___19857,G__19685_19855,n__4490__auto___19853,jobs,results,process,async){
return (function (state_19698){
var state_val_19699 = (state_19698[(1)]);
if((state_val_19699 === (7))){
var inst_19694 = (state_19698[(2)]);
var state_19698__$1 = state_19698;
var statearr_19700_19858 = state_19698__$1;
(statearr_19700_19858[(2)] = inst_19694);

(statearr_19700_19858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19699 === (6))){
var state_19698__$1 = state_19698;
var statearr_19701_19859 = state_19698__$1;
(statearr_19701_19859[(2)] = null);

(statearr_19701_19859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19699 === (5))){
var state_19698__$1 = state_19698;
var statearr_19702_19860 = state_19698__$1;
(statearr_19702_19860[(2)] = null);

(statearr_19702_19860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19699 === (4))){
var inst_19688 = (state_19698[(2)]);
var inst_19689 = async.call(null,inst_19688);
var state_19698__$1 = state_19698;
if(cljs.core.truth_(inst_19689)){
var statearr_19703_19861 = state_19698__$1;
(statearr_19703_19861[(1)] = (5));

} else {
var statearr_19704_19862 = state_19698__$1;
(statearr_19704_19862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19699 === (3))){
var inst_19696 = (state_19698[(2)]);
var state_19698__$1 = state_19698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19698__$1,inst_19696);
} else {
if((state_val_19699 === (2))){
var state_19698__$1 = state_19698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19698__$1,(4),jobs);
} else {
if((state_val_19699 === (1))){
var state_19698__$1 = state_19698;
var statearr_19705_19863 = state_19698__$1;
(statearr_19705_19863[(2)] = null);

(statearr_19705_19863[(1)] = (2));


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
});})(__19854,c__7303__auto___19857,G__19685_19855,n__4490__auto___19853,jobs,results,process,async))
;
return ((function (__19854,switch__7288__auto__,c__7303__auto___19857,G__19685_19855,n__4490__auto___19853,jobs,results,process,async){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_19709 = [null,null,null,null,null,null,null];
(statearr_19709[(0)] = state_machine__7289__auto__);

(statearr_19709[(1)] = (1));

return statearr_19709;
});
var state_machine__7289__auto____1 = (function (state_19698){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_19698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e19710){if((e19710 instanceof Object)){
var ex__7292__auto__ = e19710;
var statearr_19711_19864 = state_19698;
(statearr_19711_19864[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19865 = state_19698;
state_19698 = G__19865;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_19698){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_19698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(__19854,switch__7288__auto__,c__7303__auto___19857,G__19685_19855,n__4490__auto___19853,jobs,results,process,async))
})();
var state__7305__auto__ = (function (){var statearr_19712 = f__7304__auto__.call(null);
(statearr_19712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___19857);

return statearr_19712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(__19854,c__7303__auto___19857,G__19685_19855,n__4490__auto___19853,jobs,results,process,async))
);


break;
case "compute":
var c__7303__auto___19866 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19854,c__7303__auto___19866,G__19685_19855,n__4490__auto___19853,jobs,results,process,async){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (__19854,c__7303__auto___19866,G__19685_19855,n__4490__auto___19853,jobs,results,process,async){
return (function (state_19725){
var state_val_19726 = (state_19725[(1)]);
if((state_val_19726 === (7))){
var inst_19721 = (state_19725[(2)]);
var state_19725__$1 = state_19725;
var statearr_19727_19867 = state_19725__$1;
(statearr_19727_19867[(2)] = inst_19721);

(statearr_19727_19867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19726 === (6))){
var state_19725__$1 = state_19725;
var statearr_19728_19868 = state_19725__$1;
(statearr_19728_19868[(2)] = null);

(statearr_19728_19868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19726 === (5))){
var state_19725__$1 = state_19725;
var statearr_19729_19869 = state_19725__$1;
(statearr_19729_19869[(2)] = null);

(statearr_19729_19869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19726 === (4))){
var inst_19715 = (state_19725[(2)]);
var inst_19716 = process.call(null,inst_19715);
var state_19725__$1 = state_19725;
if(cljs.core.truth_(inst_19716)){
var statearr_19730_19870 = state_19725__$1;
(statearr_19730_19870[(1)] = (5));

} else {
var statearr_19731_19871 = state_19725__$1;
(statearr_19731_19871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19726 === (3))){
var inst_19723 = (state_19725[(2)]);
var state_19725__$1 = state_19725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19725__$1,inst_19723);
} else {
if((state_val_19726 === (2))){
var state_19725__$1 = state_19725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19725__$1,(4),jobs);
} else {
if((state_val_19726 === (1))){
var state_19725__$1 = state_19725;
var statearr_19732_19872 = state_19725__$1;
(statearr_19732_19872[(2)] = null);

(statearr_19732_19872[(1)] = (2));


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
});})(__19854,c__7303__auto___19866,G__19685_19855,n__4490__auto___19853,jobs,results,process,async))
;
return ((function (__19854,switch__7288__auto__,c__7303__auto___19866,G__19685_19855,n__4490__auto___19853,jobs,results,process,async){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_19736 = [null,null,null,null,null,null,null];
(statearr_19736[(0)] = state_machine__7289__auto__);

(statearr_19736[(1)] = (1));

return statearr_19736;
});
var state_machine__7289__auto____1 = (function (state_19725){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_19725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e19737){if((e19737 instanceof Object)){
var ex__7292__auto__ = e19737;
var statearr_19738_19873 = state_19725;
(statearr_19738_19873[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19874 = state_19725;
state_19725 = G__19874;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_19725){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_19725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(__19854,switch__7288__auto__,c__7303__auto___19866,G__19685_19855,n__4490__auto___19853,jobs,results,process,async))
})();
var state__7305__auto__ = (function (){var statearr_19739 = f__7304__auto__.call(null);
(statearr_19739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___19866);

return statearr_19739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(__19854,c__7303__auto___19866,G__19685_19855,n__4490__auto___19853,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__19875 = (__19854 + (1));
__19854 = G__19875;
continue;
} else {
}
break;
}

var c__7303__auto___19876 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___19876,jobs,results,process,async){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___19876,jobs,results,process,async){
return (function (state_19761){
var state_val_19762 = (state_19761[(1)]);
if((state_val_19762 === (9))){
var inst_19754 = (state_19761[(2)]);
var state_19761__$1 = (function (){var statearr_19763 = state_19761;
(statearr_19763[(7)] = inst_19754);

return statearr_19763;
})();
var statearr_19764_19877 = state_19761__$1;
(statearr_19764_19877[(2)] = null);

(statearr_19764_19877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19762 === (8))){
var inst_19747 = (state_19761[(8)]);
var inst_19752 = (state_19761[(2)]);
var state_19761__$1 = (function (){var statearr_19765 = state_19761;
(statearr_19765[(9)] = inst_19752);

return statearr_19765;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19761__$1,(9),results,inst_19747);
} else {
if((state_val_19762 === (7))){
var inst_19757 = (state_19761[(2)]);
var state_19761__$1 = state_19761;
var statearr_19766_19878 = state_19761__$1;
(statearr_19766_19878[(2)] = inst_19757);

(statearr_19766_19878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19762 === (6))){
var inst_19747 = (state_19761[(8)]);
var inst_19742 = (state_19761[(10)]);
var inst_19747__$1 = cljs.core.async.chan.call(null,(1));
var inst_19748 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19749 = [inst_19742,inst_19747__$1];
var inst_19750 = (new cljs.core.PersistentVector(null,2,(5),inst_19748,inst_19749,null));
var state_19761__$1 = (function (){var statearr_19767 = state_19761;
(statearr_19767[(8)] = inst_19747__$1);

return statearr_19767;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19761__$1,(8),jobs,inst_19750);
} else {
if((state_val_19762 === (5))){
var inst_19745 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19761__$1 = state_19761;
var statearr_19768_19879 = state_19761__$1;
(statearr_19768_19879[(2)] = inst_19745);

(statearr_19768_19879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19762 === (4))){
var inst_19742 = (state_19761[(10)]);
var inst_19742__$1 = (state_19761[(2)]);
var inst_19743 = (inst_19742__$1 == null);
var state_19761__$1 = (function (){var statearr_19769 = state_19761;
(statearr_19769[(10)] = inst_19742__$1);

return statearr_19769;
})();
if(cljs.core.truth_(inst_19743)){
var statearr_19770_19880 = state_19761__$1;
(statearr_19770_19880[(1)] = (5));

} else {
var statearr_19771_19881 = state_19761__$1;
(statearr_19771_19881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19762 === (3))){
var inst_19759 = (state_19761[(2)]);
var state_19761__$1 = state_19761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19761__$1,inst_19759);
} else {
if((state_val_19762 === (2))){
var state_19761__$1 = state_19761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19761__$1,(4),from);
} else {
if((state_val_19762 === (1))){
var state_19761__$1 = state_19761;
var statearr_19772_19882 = state_19761__$1;
(statearr_19772_19882[(2)] = null);

(statearr_19772_19882[(1)] = (2));


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
});})(c__7303__auto___19876,jobs,results,process,async))
;
return ((function (switch__7288__auto__,c__7303__auto___19876,jobs,results,process,async){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_19776 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19776[(0)] = state_machine__7289__auto__);

(statearr_19776[(1)] = (1));

return statearr_19776;
});
var state_machine__7289__auto____1 = (function (state_19761){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_19761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e19777){if((e19777 instanceof Object)){
var ex__7292__auto__ = e19777;
var statearr_19778_19883 = state_19761;
(statearr_19778_19883[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19884 = state_19761;
state_19761 = G__19884;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_19761){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_19761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___19876,jobs,results,process,async))
})();
var state__7305__auto__ = (function (){var statearr_19779 = f__7304__auto__.call(null);
(statearr_19779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___19876);

return statearr_19779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___19876,jobs,results,process,async))
);


var c__7303__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto__,jobs,results,process,async){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto__,jobs,results,process,async){
return (function (state_19817){
var state_val_19818 = (state_19817[(1)]);
if((state_val_19818 === (7))){
var inst_19813 = (state_19817[(2)]);
var state_19817__$1 = state_19817;
var statearr_19819_19885 = state_19817__$1;
(statearr_19819_19885[(2)] = inst_19813);

(statearr_19819_19885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19818 === (20))){
var state_19817__$1 = state_19817;
var statearr_19820_19886 = state_19817__$1;
(statearr_19820_19886[(2)] = null);

(statearr_19820_19886[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19818 === (1))){
var state_19817__$1 = state_19817;
var statearr_19821_19887 = state_19817__$1;
(statearr_19821_19887[(2)] = null);

(statearr_19821_19887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19818 === (4))){
var inst_19782 = (state_19817[(7)]);
var inst_19782__$1 = (state_19817[(2)]);
var inst_19783 = (inst_19782__$1 == null);
var state_19817__$1 = (function (){var statearr_19822 = state_19817;
(statearr_19822[(7)] = inst_19782__$1);

return statearr_19822;
})();
if(cljs.core.truth_(inst_19783)){
var statearr_19823_19888 = state_19817__$1;
(statearr_19823_19888[(1)] = (5));

} else {
var statearr_19824_19889 = state_19817__$1;
(statearr_19824_19889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19818 === (15))){
var inst_19795 = (state_19817[(8)]);
var state_19817__$1 = state_19817;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19817__$1,(18),to,inst_19795);
} else {
if((state_val_19818 === (21))){
var inst_19808 = (state_19817[(2)]);
var state_19817__$1 = state_19817;
var statearr_19825_19890 = state_19817__$1;
(statearr_19825_19890[(2)] = inst_19808);

(statearr_19825_19890[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19818 === (13))){
var inst_19810 = (state_19817[(2)]);
var state_19817__$1 = (function (){var statearr_19826 = state_19817;
(statearr_19826[(9)] = inst_19810);

return statearr_19826;
})();
var statearr_19827_19891 = state_19817__$1;
(statearr_19827_19891[(2)] = null);

(statearr_19827_19891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19818 === (6))){
var inst_19782 = (state_19817[(7)]);
var state_19817__$1 = state_19817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19817__$1,(11),inst_19782);
} else {
if((state_val_19818 === (17))){
var inst_19803 = (state_19817[(2)]);
var state_19817__$1 = state_19817;
if(cljs.core.truth_(inst_19803)){
var statearr_19828_19892 = state_19817__$1;
(statearr_19828_19892[(1)] = (19));

} else {
var statearr_19829_19893 = state_19817__$1;
(statearr_19829_19893[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19818 === (3))){
var inst_19815 = (state_19817[(2)]);
var state_19817__$1 = state_19817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19817__$1,inst_19815);
} else {
if((state_val_19818 === (12))){
var inst_19792 = (state_19817[(10)]);
var state_19817__$1 = state_19817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19817__$1,(14),inst_19792);
} else {
if((state_val_19818 === (2))){
var state_19817__$1 = state_19817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19817__$1,(4),results);
} else {
if((state_val_19818 === (19))){
var state_19817__$1 = state_19817;
var statearr_19830_19894 = state_19817__$1;
(statearr_19830_19894[(2)] = null);

(statearr_19830_19894[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19818 === (11))){
var inst_19792 = (state_19817[(2)]);
var state_19817__$1 = (function (){var statearr_19831 = state_19817;
(statearr_19831[(10)] = inst_19792);

return statearr_19831;
})();
var statearr_19832_19895 = state_19817__$1;
(statearr_19832_19895[(2)] = null);

(statearr_19832_19895[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19818 === (9))){
var state_19817__$1 = state_19817;
var statearr_19833_19896 = state_19817__$1;
(statearr_19833_19896[(2)] = null);

(statearr_19833_19896[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19818 === (5))){
var state_19817__$1 = state_19817;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19834_19897 = state_19817__$1;
(statearr_19834_19897[(1)] = (8));

} else {
var statearr_19835_19898 = state_19817__$1;
(statearr_19835_19898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19818 === (14))){
var inst_19795 = (state_19817[(8)]);
var inst_19797 = (state_19817[(11)]);
var inst_19795__$1 = (state_19817[(2)]);
var inst_19796 = (inst_19795__$1 == null);
var inst_19797__$1 = cljs.core.not.call(null,inst_19796);
var state_19817__$1 = (function (){var statearr_19836 = state_19817;
(statearr_19836[(8)] = inst_19795__$1);

(statearr_19836[(11)] = inst_19797__$1);

return statearr_19836;
})();
if(inst_19797__$1){
var statearr_19837_19899 = state_19817__$1;
(statearr_19837_19899[(1)] = (15));

} else {
var statearr_19838_19900 = state_19817__$1;
(statearr_19838_19900[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19818 === (16))){
var inst_19797 = (state_19817[(11)]);
var state_19817__$1 = state_19817;
var statearr_19839_19901 = state_19817__$1;
(statearr_19839_19901[(2)] = inst_19797);

(statearr_19839_19901[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19818 === (10))){
var inst_19789 = (state_19817[(2)]);
var state_19817__$1 = state_19817;
var statearr_19840_19902 = state_19817__$1;
(statearr_19840_19902[(2)] = inst_19789);

(statearr_19840_19902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19818 === (18))){
var inst_19800 = (state_19817[(2)]);
var state_19817__$1 = state_19817;
var statearr_19841_19903 = state_19817__$1;
(statearr_19841_19903[(2)] = inst_19800);

(statearr_19841_19903[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19818 === (8))){
var inst_19786 = cljs.core.async.close_BANG_.call(null,to);
var state_19817__$1 = state_19817;
var statearr_19842_19904 = state_19817__$1;
(statearr_19842_19904[(2)] = inst_19786);

(statearr_19842_19904[(1)] = (10));


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
});})(c__7303__auto__,jobs,results,process,async))
;
return ((function (switch__7288__auto__,c__7303__auto__,jobs,results,process,async){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_19846 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19846[(0)] = state_machine__7289__auto__);

(statearr_19846[(1)] = (1));

return statearr_19846;
});
var state_machine__7289__auto____1 = (function (state_19817){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_19817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e19847){if((e19847 instanceof Object)){
var ex__7292__auto__ = e19847;
var statearr_19848_19905 = state_19817;
(statearr_19848_19905[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19906 = state_19817;
state_19817 = G__19906;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_19817){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_19817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto__,jobs,results,process,async))
})();
var state__7305__auto__ = (function (){var statearr_19849 = f__7304__auto__.call(null);
(statearr_19849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto__);

return statearr_19849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto__,jobs,results,process,async))
);

return c__7303__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7303__auto___20007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___20007,tc,fc){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___20007,tc,fc){
return (function (state_19982){
var state_val_19983 = (state_19982[(1)]);
if((state_val_19983 === (7))){
var inst_19978 = (state_19982[(2)]);
var state_19982__$1 = state_19982;
var statearr_19984_20008 = state_19982__$1;
(statearr_19984_20008[(2)] = inst_19978);

(statearr_19984_20008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (1))){
var state_19982__$1 = state_19982;
var statearr_19985_20009 = state_19982__$1;
(statearr_19985_20009[(2)] = null);

(statearr_19985_20009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (4))){
var inst_19959 = (state_19982[(7)]);
var inst_19959__$1 = (state_19982[(2)]);
var inst_19960 = (inst_19959__$1 == null);
var state_19982__$1 = (function (){var statearr_19986 = state_19982;
(statearr_19986[(7)] = inst_19959__$1);

return statearr_19986;
})();
if(cljs.core.truth_(inst_19960)){
var statearr_19987_20010 = state_19982__$1;
(statearr_19987_20010[(1)] = (5));

} else {
var statearr_19988_20011 = state_19982__$1;
(statearr_19988_20011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (13))){
var state_19982__$1 = state_19982;
var statearr_19989_20012 = state_19982__$1;
(statearr_19989_20012[(2)] = null);

(statearr_19989_20012[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (6))){
var inst_19959 = (state_19982[(7)]);
var inst_19965 = p.call(null,inst_19959);
var state_19982__$1 = state_19982;
if(cljs.core.truth_(inst_19965)){
var statearr_19990_20013 = state_19982__$1;
(statearr_19990_20013[(1)] = (9));

} else {
var statearr_19991_20014 = state_19982__$1;
(statearr_19991_20014[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (3))){
var inst_19980 = (state_19982[(2)]);
var state_19982__$1 = state_19982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19982__$1,inst_19980);
} else {
if((state_val_19983 === (12))){
var state_19982__$1 = state_19982;
var statearr_19992_20015 = state_19982__$1;
(statearr_19992_20015[(2)] = null);

(statearr_19992_20015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (2))){
var state_19982__$1 = state_19982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19982__$1,(4),ch);
} else {
if((state_val_19983 === (11))){
var inst_19959 = (state_19982[(7)]);
var inst_19969 = (state_19982[(2)]);
var state_19982__$1 = state_19982;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19982__$1,(8),inst_19969,inst_19959);
} else {
if((state_val_19983 === (9))){
var state_19982__$1 = state_19982;
var statearr_19993_20016 = state_19982__$1;
(statearr_19993_20016[(2)] = tc);

(statearr_19993_20016[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (5))){
var inst_19962 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19963 = cljs.core.async.close_BANG_.call(null,fc);
var state_19982__$1 = (function (){var statearr_19994 = state_19982;
(statearr_19994[(8)] = inst_19962);

return statearr_19994;
})();
var statearr_19995_20017 = state_19982__$1;
(statearr_19995_20017[(2)] = inst_19963);

(statearr_19995_20017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (14))){
var inst_19976 = (state_19982[(2)]);
var state_19982__$1 = state_19982;
var statearr_19996_20018 = state_19982__$1;
(statearr_19996_20018[(2)] = inst_19976);

(statearr_19996_20018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (10))){
var state_19982__$1 = state_19982;
var statearr_19997_20019 = state_19982__$1;
(statearr_19997_20019[(2)] = fc);

(statearr_19997_20019[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (8))){
var inst_19971 = (state_19982[(2)]);
var state_19982__$1 = state_19982;
if(cljs.core.truth_(inst_19971)){
var statearr_19998_20020 = state_19982__$1;
(statearr_19998_20020[(1)] = (12));

} else {
var statearr_19999_20021 = state_19982__$1;
(statearr_19999_20021[(1)] = (13));

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
});})(c__7303__auto___20007,tc,fc))
;
return ((function (switch__7288__auto__,c__7303__auto___20007,tc,fc){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_20003 = [null,null,null,null,null,null,null,null,null];
(statearr_20003[(0)] = state_machine__7289__auto__);

(statearr_20003[(1)] = (1));

return statearr_20003;
});
var state_machine__7289__auto____1 = (function (state_19982){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_19982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e20004){if((e20004 instanceof Object)){
var ex__7292__auto__ = e20004;
var statearr_20005_20022 = state_19982;
(statearr_20005_20022[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20023 = state_19982;
state_19982 = G__20023;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_19982){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_19982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___20007,tc,fc))
})();
var state__7305__auto__ = (function (){var statearr_20006 = f__7304__auto__.call(null);
(statearr_20006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___20007);

return statearr_20006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___20007,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__7303__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto__){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto__){
return (function (state_20070){
var state_val_20071 = (state_20070[(1)]);
if((state_val_20071 === (7))){
var inst_20066 = (state_20070[(2)]);
var state_20070__$1 = state_20070;
var statearr_20072_20088 = state_20070__$1;
(statearr_20072_20088[(2)] = inst_20066);

(statearr_20072_20088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (6))){
var inst_20056 = (state_20070[(7)]);
var inst_20059 = (state_20070[(8)]);
var inst_20063 = f.call(null,inst_20056,inst_20059);
var inst_20056__$1 = inst_20063;
var state_20070__$1 = (function (){var statearr_20073 = state_20070;
(statearr_20073[(7)] = inst_20056__$1);

return statearr_20073;
})();
var statearr_20074_20089 = state_20070__$1;
(statearr_20074_20089[(2)] = null);

(statearr_20074_20089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (5))){
var inst_20056 = (state_20070[(7)]);
var state_20070__$1 = state_20070;
var statearr_20075_20090 = state_20070__$1;
(statearr_20075_20090[(2)] = inst_20056);

(statearr_20075_20090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (4))){
var inst_20059 = (state_20070[(8)]);
var inst_20059__$1 = (state_20070[(2)]);
var inst_20060 = (inst_20059__$1 == null);
var state_20070__$1 = (function (){var statearr_20076 = state_20070;
(statearr_20076[(8)] = inst_20059__$1);

return statearr_20076;
})();
if(cljs.core.truth_(inst_20060)){
var statearr_20077_20091 = state_20070__$1;
(statearr_20077_20091[(1)] = (5));

} else {
var statearr_20078_20092 = state_20070__$1;
(statearr_20078_20092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (3))){
var inst_20068 = (state_20070[(2)]);
var state_20070__$1 = state_20070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20070__$1,inst_20068);
} else {
if((state_val_20071 === (2))){
var state_20070__$1 = state_20070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20070__$1,(4),ch);
} else {
if((state_val_20071 === (1))){
var inst_20056 = init;
var state_20070__$1 = (function (){var statearr_20079 = state_20070;
(statearr_20079[(7)] = inst_20056);

return statearr_20079;
})();
var statearr_20080_20093 = state_20070__$1;
(statearr_20080_20093[(2)] = null);

(statearr_20080_20093[(1)] = (2));


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
});})(c__7303__auto__))
;
return ((function (switch__7288__auto__,c__7303__auto__){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_20084 = [null,null,null,null,null,null,null,null,null];
(statearr_20084[(0)] = state_machine__7289__auto__);

(statearr_20084[(1)] = (1));

return statearr_20084;
});
var state_machine__7289__auto____1 = (function (state_20070){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_20070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e20085){if((e20085 instanceof Object)){
var ex__7292__auto__ = e20085;
var statearr_20086_20094 = state_20070;
(statearr_20086_20094[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20095 = state_20070;
state_20070 = G__20095;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_20070){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_20070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto__))
})();
var state__7305__auto__ = (function (){var statearr_20087 = f__7304__auto__.call(null);
(statearr_20087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto__);

return statearr_20087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto__))
);

return c__7303__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__7303__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto__){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto__){
return (function (state_20169){
var state_val_20170 = (state_20169[(1)]);
if((state_val_20170 === (7))){
var inst_20151 = (state_20169[(2)]);
var state_20169__$1 = state_20169;
var statearr_20171_20194 = state_20169__$1;
(statearr_20171_20194[(2)] = inst_20151);

(statearr_20171_20194[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20170 === (1))){
var inst_20145 = cljs.core.seq.call(null,coll);
var inst_20146 = inst_20145;
var state_20169__$1 = (function (){var statearr_20172 = state_20169;
(statearr_20172[(7)] = inst_20146);

return statearr_20172;
})();
var statearr_20173_20195 = state_20169__$1;
(statearr_20173_20195[(2)] = null);

(statearr_20173_20195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20170 === (4))){
var inst_20146 = (state_20169[(7)]);
var inst_20149 = cljs.core.first.call(null,inst_20146);
var state_20169__$1 = state_20169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20169__$1,(7),ch,inst_20149);
} else {
if((state_val_20170 === (13))){
var inst_20163 = (state_20169[(2)]);
var state_20169__$1 = state_20169;
var statearr_20174_20196 = state_20169__$1;
(statearr_20174_20196[(2)] = inst_20163);

(statearr_20174_20196[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20170 === (6))){
var inst_20154 = (state_20169[(2)]);
var state_20169__$1 = state_20169;
if(cljs.core.truth_(inst_20154)){
var statearr_20175_20197 = state_20169__$1;
(statearr_20175_20197[(1)] = (8));

} else {
var statearr_20176_20198 = state_20169__$1;
(statearr_20176_20198[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20170 === (3))){
var inst_20167 = (state_20169[(2)]);
var state_20169__$1 = state_20169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20169__$1,inst_20167);
} else {
if((state_val_20170 === (12))){
var state_20169__$1 = state_20169;
var statearr_20177_20199 = state_20169__$1;
(statearr_20177_20199[(2)] = null);

(statearr_20177_20199[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20170 === (2))){
var inst_20146 = (state_20169[(7)]);
var state_20169__$1 = state_20169;
if(cljs.core.truth_(inst_20146)){
var statearr_20178_20200 = state_20169__$1;
(statearr_20178_20200[(1)] = (4));

} else {
var statearr_20179_20201 = state_20169__$1;
(statearr_20179_20201[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20170 === (11))){
var inst_20160 = cljs.core.async.close_BANG_.call(null,ch);
var state_20169__$1 = state_20169;
var statearr_20180_20202 = state_20169__$1;
(statearr_20180_20202[(2)] = inst_20160);

(statearr_20180_20202[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20170 === (9))){
var state_20169__$1 = state_20169;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20181_20203 = state_20169__$1;
(statearr_20181_20203[(1)] = (11));

} else {
var statearr_20182_20204 = state_20169__$1;
(statearr_20182_20204[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20170 === (5))){
var inst_20146 = (state_20169[(7)]);
var state_20169__$1 = state_20169;
var statearr_20183_20205 = state_20169__$1;
(statearr_20183_20205[(2)] = inst_20146);

(statearr_20183_20205[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20170 === (10))){
var inst_20165 = (state_20169[(2)]);
var state_20169__$1 = state_20169;
var statearr_20184_20206 = state_20169__$1;
(statearr_20184_20206[(2)] = inst_20165);

(statearr_20184_20206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20170 === (8))){
var inst_20146 = (state_20169[(7)]);
var inst_20156 = cljs.core.next.call(null,inst_20146);
var inst_20146__$1 = inst_20156;
var state_20169__$1 = (function (){var statearr_20185 = state_20169;
(statearr_20185[(7)] = inst_20146__$1);

return statearr_20185;
})();
var statearr_20186_20207 = state_20169__$1;
(statearr_20186_20207[(2)] = null);

(statearr_20186_20207[(1)] = (2));


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
});})(c__7303__auto__))
;
return ((function (switch__7288__auto__,c__7303__auto__){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_20190 = [null,null,null,null,null,null,null,null];
(statearr_20190[(0)] = state_machine__7289__auto__);

(statearr_20190[(1)] = (1));

return statearr_20190;
});
var state_machine__7289__auto____1 = (function (state_20169){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_20169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e20191){if((e20191 instanceof Object)){
var ex__7292__auto__ = e20191;
var statearr_20192_20208 = state_20169;
(statearr_20192_20208[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20209 = state_20169;
state_20169 = G__20209;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_20169){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_20169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto__))
})();
var state__7305__auto__ = (function (){var statearr_20193 = f__7304__auto__.call(null);
(statearr_20193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto__);

return statearr_20193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto__))
);

return c__7303__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj20211 = {};
return obj20211;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3596__auto__ = _;
if(and__3596__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3596__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4247__auto__ = (((_ == null))?null:_);
return (function (){var or__3608__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4247__auto__)]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj20213 = {};
return obj20213;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3596__auto__ = m;
if(and__3596__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3596__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4247__auto__ = (((m == null))?null:m);
return (function (){var or__3608__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4247__auto__)]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3596__auto__ = m;
if(and__3596__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3596__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4247__auto__ = (((m == null))?null:m);
return (function (){var or__3608__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4247__auto__)]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3596__auto__ = m;
if(and__3596__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3596__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4247__auto__ = (((m == null))?null:m);
return (function (){var or__3608__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4247__auto__)]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t20435 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20435 = (function (cs,ch,mult,meta20436){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta20436 = meta20436;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20435.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t20435.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t20435.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t20435.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t20435.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20435.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t20435.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20437){
var self__ = this;
var _20437__$1 = this;
return self__.meta20436;
});})(cs))
;

cljs.core.async.t20435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20437,meta20436__$1){
var self__ = this;
var _20437__$1 = this;
return (new cljs.core.async.t20435(self__.cs,self__.ch,self__.mult,meta20436__$1));
});})(cs))
;

cljs.core.async.t20435.cljs$lang$type = true;

cljs.core.async.t20435.cljs$lang$ctorStr = "cljs.core.async/t20435";

cljs.core.async.t20435.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t20435");
});})(cs))
;

cljs.core.async.__GT_t20435 = ((function (cs){
return (function __GT_t20435(cs__$1,ch__$1,mult__$1,meta20436){
return (new cljs.core.async.t20435(cs__$1,ch__$1,mult__$1,meta20436));
});})(cs))
;

}

return (new cljs.core.async.t20435(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7303__auto___20656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___20656,cs,m,dchan,dctr,done){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___20656,cs,m,dchan,dctr,done){
return (function (state_20568){
var state_val_20569 = (state_20568[(1)]);
if((state_val_20569 === (7))){
var inst_20564 = (state_20568[(2)]);
var state_20568__$1 = state_20568;
var statearr_20570_20657 = state_20568__$1;
(statearr_20570_20657[(2)] = inst_20564);

(statearr_20570_20657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (20))){
var inst_20469 = (state_20568[(7)]);
var inst_20479 = cljs.core.first.call(null,inst_20469);
var inst_20480 = cljs.core.nth.call(null,inst_20479,(0),null);
var inst_20481 = cljs.core.nth.call(null,inst_20479,(1),null);
var state_20568__$1 = (function (){var statearr_20571 = state_20568;
(statearr_20571[(8)] = inst_20480);

return statearr_20571;
})();
if(cljs.core.truth_(inst_20481)){
var statearr_20572_20658 = state_20568__$1;
(statearr_20572_20658[(1)] = (22));

} else {
var statearr_20573_20659 = state_20568__$1;
(statearr_20573_20659[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (27))){
var inst_20509 = (state_20568[(9)]);
var inst_20516 = (state_20568[(10)]);
var inst_20511 = (state_20568[(11)]);
var inst_20440 = (state_20568[(12)]);
var inst_20516__$1 = cljs.core._nth.call(null,inst_20509,inst_20511);
var inst_20517 = cljs.core.async.put_BANG_.call(null,inst_20516__$1,inst_20440,done);
var state_20568__$1 = (function (){var statearr_20574 = state_20568;
(statearr_20574[(10)] = inst_20516__$1);

return statearr_20574;
})();
if(cljs.core.truth_(inst_20517)){
var statearr_20575_20660 = state_20568__$1;
(statearr_20575_20660[(1)] = (30));

} else {
var statearr_20576_20661 = state_20568__$1;
(statearr_20576_20661[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (1))){
var state_20568__$1 = state_20568;
var statearr_20577_20662 = state_20568__$1;
(statearr_20577_20662[(2)] = null);

(statearr_20577_20662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (24))){
var inst_20469 = (state_20568[(7)]);
var inst_20486 = (state_20568[(2)]);
var inst_20487 = cljs.core.next.call(null,inst_20469);
var inst_20449 = inst_20487;
var inst_20450 = null;
var inst_20451 = (0);
var inst_20452 = (0);
var state_20568__$1 = (function (){var statearr_20578 = state_20568;
(statearr_20578[(13)] = inst_20450);

(statearr_20578[(14)] = inst_20451);

(statearr_20578[(15)] = inst_20449);

(statearr_20578[(16)] = inst_20486);

(statearr_20578[(17)] = inst_20452);

return statearr_20578;
})();
var statearr_20579_20663 = state_20568__$1;
(statearr_20579_20663[(2)] = null);

(statearr_20579_20663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (39))){
var state_20568__$1 = state_20568;
var statearr_20583_20664 = state_20568__$1;
(statearr_20583_20664[(2)] = null);

(statearr_20583_20664[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (4))){
var inst_20440 = (state_20568[(12)]);
var inst_20440__$1 = (state_20568[(2)]);
var inst_20441 = (inst_20440__$1 == null);
var state_20568__$1 = (function (){var statearr_20584 = state_20568;
(statearr_20584[(12)] = inst_20440__$1);

return statearr_20584;
})();
if(cljs.core.truth_(inst_20441)){
var statearr_20585_20665 = state_20568__$1;
(statearr_20585_20665[(1)] = (5));

} else {
var statearr_20586_20666 = state_20568__$1;
(statearr_20586_20666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (15))){
var inst_20450 = (state_20568[(13)]);
var inst_20451 = (state_20568[(14)]);
var inst_20449 = (state_20568[(15)]);
var inst_20452 = (state_20568[(17)]);
var inst_20465 = (state_20568[(2)]);
var inst_20466 = (inst_20452 + (1));
var tmp20580 = inst_20450;
var tmp20581 = inst_20451;
var tmp20582 = inst_20449;
var inst_20449__$1 = tmp20582;
var inst_20450__$1 = tmp20580;
var inst_20451__$1 = tmp20581;
var inst_20452__$1 = inst_20466;
var state_20568__$1 = (function (){var statearr_20587 = state_20568;
(statearr_20587[(13)] = inst_20450__$1);

(statearr_20587[(14)] = inst_20451__$1);

(statearr_20587[(15)] = inst_20449__$1);

(statearr_20587[(18)] = inst_20465);

(statearr_20587[(17)] = inst_20452__$1);

return statearr_20587;
})();
var statearr_20588_20667 = state_20568__$1;
(statearr_20588_20667[(2)] = null);

(statearr_20588_20667[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (21))){
var inst_20490 = (state_20568[(2)]);
var state_20568__$1 = state_20568;
var statearr_20592_20668 = state_20568__$1;
(statearr_20592_20668[(2)] = inst_20490);

(statearr_20592_20668[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (31))){
var inst_20516 = (state_20568[(10)]);
var inst_20520 = done.call(null,null);
var inst_20521 = cljs.core.async.untap_STAR_.call(null,m,inst_20516);
var state_20568__$1 = (function (){var statearr_20593 = state_20568;
(statearr_20593[(19)] = inst_20520);

return statearr_20593;
})();
var statearr_20594_20669 = state_20568__$1;
(statearr_20594_20669[(2)] = inst_20521);

(statearr_20594_20669[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (32))){
var inst_20509 = (state_20568[(9)]);
var inst_20510 = (state_20568[(20)]);
var inst_20511 = (state_20568[(11)]);
var inst_20508 = (state_20568[(21)]);
var inst_20523 = (state_20568[(2)]);
var inst_20524 = (inst_20511 + (1));
var tmp20589 = inst_20509;
var tmp20590 = inst_20510;
var tmp20591 = inst_20508;
var inst_20508__$1 = tmp20591;
var inst_20509__$1 = tmp20589;
var inst_20510__$1 = tmp20590;
var inst_20511__$1 = inst_20524;
var state_20568__$1 = (function (){var statearr_20595 = state_20568;
(statearr_20595[(22)] = inst_20523);

(statearr_20595[(9)] = inst_20509__$1);

(statearr_20595[(20)] = inst_20510__$1);

(statearr_20595[(11)] = inst_20511__$1);

(statearr_20595[(21)] = inst_20508__$1);

return statearr_20595;
})();
var statearr_20596_20670 = state_20568__$1;
(statearr_20596_20670[(2)] = null);

(statearr_20596_20670[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (40))){
var inst_20536 = (state_20568[(23)]);
var inst_20540 = done.call(null,null);
var inst_20541 = cljs.core.async.untap_STAR_.call(null,m,inst_20536);
var state_20568__$1 = (function (){var statearr_20597 = state_20568;
(statearr_20597[(24)] = inst_20540);

return statearr_20597;
})();
var statearr_20598_20671 = state_20568__$1;
(statearr_20598_20671[(2)] = inst_20541);

(statearr_20598_20671[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (33))){
var inst_20527 = (state_20568[(25)]);
var inst_20529 = cljs.core.chunked_seq_QMARK_.call(null,inst_20527);
var state_20568__$1 = state_20568;
if(inst_20529){
var statearr_20599_20672 = state_20568__$1;
(statearr_20599_20672[(1)] = (36));

} else {
var statearr_20600_20673 = state_20568__$1;
(statearr_20600_20673[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (13))){
var inst_20459 = (state_20568[(26)]);
var inst_20462 = cljs.core.async.close_BANG_.call(null,inst_20459);
var state_20568__$1 = state_20568;
var statearr_20601_20674 = state_20568__$1;
(statearr_20601_20674[(2)] = inst_20462);

(statearr_20601_20674[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (22))){
var inst_20480 = (state_20568[(8)]);
var inst_20483 = cljs.core.async.close_BANG_.call(null,inst_20480);
var state_20568__$1 = state_20568;
var statearr_20602_20675 = state_20568__$1;
(statearr_20602_20675[(2)] = inst_20483);

(statearr_20602_20675[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (36))){
var inst_20527 = (state_20568[(25)]);
var inst_20531 = cljs.core.chunk_first.call(null,inst_20527);
var inst_20532 = cljs.core.chunk_rest.call(null,inst_20527);
var inst_20533 = cljs.core.count.call(null,inst_20531);
var inst_20508 = inst_20532;
var inst_20509 = inst_20531;
var inst_20510 = inst_20533;
var inst_20511 = (0);
var state_20568__$1 = (function (){var statearr_20603 = state_20568;
(statearr_20603[(9)] = inst_20509);

(statearr_20603[(20)] = inst_20510);

(statearr_20603[(11)] = inst_20511);

(statearr_20603[(21)] = inst_20508);

return statearr_20603;
})();
var statearr_20604_20676 = state_20568__$1;
(statearr_20604_20676[(2)] = null);

(statearr_20604_20676[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (41))){
var inst_20527 = (state_20568[(25)]);
var inst_20543 = (state_20568[(2)]);
var inst_20544 = cljs.core.next.call(null,inst_20527);
var inst_20508 = inst_20544;
var inst_20509 = null;
var inst_20510 = (0);
var inst_20511 = (0);
var state_20568__$1 = (function (){var statearr_20605 = state_20568;
(statearr_20605[(9)] = inst_20509);

(statearr_20605[(20)] = inst_20510);

(statearr_20605[(27)] = inst_20543);

(statearr_20605[(11)] = inst_20511);

(statearr_20605[(21)] = inst_20508);

return statearr_20605;
})();
var statearr_20606_20677 = state_20568__$1;
(statearr_20606_20677[(2)] = null);

(statearr_20606_20677[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (43))){
var state_20568__$1 = state_20568;
var statearr_20607_20678 = state_20568__$1;
(statearr_20607_20678[(2)] = null);

(statearr_20607_20678[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (29))){
var inst_20552 = (state_20568[(2)]);
var state_20568__$1 = state_20568;
var statearr_20608_20679 = state_20568__$1;
(statearr_20608_20679[(2)] = inst_20552);

(statearr_20608_20679[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (44))){
var inst_20561 = (state_20568[(2)]);
var state_20568__$1 = (function (){var statearr_20609 = state_20568;
(statearr_20609[(28)] = inst_20561);

return statearr_20609;
})();
var statearr_20610_20680 = state_20568__$1;
(statearr_20610_20680[(2)] = null);

(statearr_20610_20680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (6))){
var inst_20500 = (state_20568[(29)]);
var inst_20499 = cljs.core.deref.call(null,cs);
var inst_20500__$1 = cljs.core.keys.call(null,inst_20499);
var inst_20501 = cljs.core.count.call(null,inst_20500__$1);
var inst_20502 = cljs.core.reset_BANG_.call(null,dctr,inst_20501);
var inst_20507 = cljs.core.seq.call(null,inst_20500__$1);
var inst_20508 = inst_20507;
var inst_20509 = null;
var inst_20510 = (0);
var inst_20511 = (0);
var state_20568__$1 = (function (){var statearr_20611 = state_20568;
(statearr_20611[(9)] = inst_20509);

(statearr_20611[(20)] = inst_20510);

(statearr_20611[(30)] = inst_20502);

(statearr_20611[(29)] = inst_20500__$1);

(statearr_20611[(11)] = inst_20511);

(statearr_20611[(21)] = inst_20508);

return statearr_20611;
})();
var statearr_20612_20681 = state_20568__$1;
(statearr_20612_20681[(2)] = null);

(statearr_20612_20681[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (28))){
var inst_20508 = (state_20568[(21)]);
var inst_20527 = (state_20568[(25)]);
var inst_20527__$1 = cljs.core.seq.call(null,inst_20508);
var state_20568__$1 = (function (){var statearr_20613 = state_20568;
(statearr_20613[(25)] = inst_20527__$1);

return statearr_20613;
})();
if(inst_20527__$1){
var statearr_20614_20682 = state_20568__$1;
(statearr_20614_20682[(1)] = (33));

} else {
var statearr_20615_20683 = state_20568__$1;
(statearr_20615_20683[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (25))){
var inst_20510 = (state_20568[(20)]);
var inst_20511 = (state_20568[(11)]);
var inst_20513 = (inst_20511 < inst_20510);
var inst_20514 = inst_20513;
var state_20568__$1 = state_20568;
if(cljs.core.truth_(inst_20514)){
var statearr_20616_20684 = state_20568__$1;
(statearr_20616_20684[(1)] = (27));

} else {
var statearr_20617_20685 = state_20568__$1;
(statearr_20617_20685[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (34))){
var state_20568__$1 = state_20568;
var statearr_20618_20686 = state_20568__$1;
(statearr_20618_20686[(2)] = null);

(statearr_20618_20686[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (17))){
var state_20568__$1 = state_20568;
var statearr_20619_20687 = state_20568__$1;
(statearr_20619_20687[(2)] = null);

(statearr_20619_20687[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (3))){
var inst_20566 = (state_20568[(2)]);
var state_20568__$1 = state_20568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20568__$1,inst_20566);
} else {
if((state_val_20569 === (12))){
var inst_20495 = (state_20568[(2)]);
var state_20568__$1 = state_20568;
var statearr_20620_20688 = state_20568__$1;
(statearr_20620_20688[(2)] = inst_20495);

(statearr_20620_20688[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (2))){
var state_20568__$1 = state_20568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20568__$1,(4),ch);
} else {
if((state_val_20569 === (23))){
var state_20568__$1 = state_20568;
var statearr_20621_20689 = state_20568__$1;
(statearr_20621_20689[(2)] = null);

(statearr_20621_20689[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (35))){
var inst_20550 = (state_20568[(2)]);
var state_20568__$1 = state_20568;
var statearr_20622_20690 = state_20568__$1;
(statearr_20622_20690[(2)] = inst_20550);

(statearr_20622_20690[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (19))){
var inst_20469 = (state_20568[(7)]);
var inst_20473 = cljs.core.chunk_first.call(null,inst_20469);
var inst_20474 = cljs.core.chunk_rest.call(null,inst_20469);
var inst_20475 = cljs.core.count.call(null,inst_20473);
var inst_20449 = inst_20474;
var inst_20450 = inst_20473;
var inst_20451 = inst_20475;
var inst_20452 = (0);
var state_20568__$1 = (function (){var statearr_20623 = state_20568;
(statearr_20623[(13)] = inst_20450);

(statearr_20623[(14)] = inst_20451);

(statearr_20623[(15)] = inst_20449);

(statearr_20623[(17)] = inst_20452);

return statearr_20623;
})();
var statearr_20624_20691 = state_20568__$1;
(statearr_20624_20691[(2)] = null);

(statearr_20624_20691[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (11))){
var inst_20449 = (state_20568[(15)]);
var inst_20469 = (state_20568[(7)]);
var inst_20469__$1 = cljs.core.seq.call(null,inst_20449);
var state_20568__$1 = (function (){var statearr_20625 = state_20568;
(statearr_20625[(7)] = inst_20469__$1);

return statearr_20625;
})();
if(inst_20469__$1){
var statearr_20626_20692 = state_20568__$1;
(statearr_20626_20692[(1)] = (16));

} else {
var statearr_20627_20693 = state_20568__$1;
(statearr_20627_20693[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (9))){
var inst_20497 = (state_20568[(2)]);
var state_20568__$1 = state_20568;
var statearr_20628_20694 = state_20568__$1;
(statearr_20628_20694[(2)] = inst_20497);

(statearr_20628_20694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (5))){
var inst_20447 = cljs.core.deref.call(null,cs);
var inst_20448 = cljs.core.seq.call(null,inst_20447);
var inst_20449 = inst_20448;
var inst_20450 = null;
var inst_20451 = (0);
var inst_20452 = (0);
var state_20568__$1 = (function (){var statearr_20629 = state_20568;
(statearr_20629[(13)] = inst_20450);

(statearr_20629[(14)] = inst_20451);

(statearr_20629[(15)] = inst_20449);

(statearr_20629[(17)] = inst_20452);

return statearr_20629;
})();
var statearr_20630_20695 = state_20568__$1;
(statearr_20630_20695[(2)] = null);

(statearr_20630_20695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (14))){
var state_20568__$1 = state_20568;
var statearr_20631_20696 = state_20568__$1;
(statearr_20631_20696[(2)] = null);

(statearr_20631_20696[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (45))){
var inst_20558 = (state_20568[(2)]);
var state_20568__$1 = state_20568;
var statearr_20632_20697 = state_20568__$1;
(statearr_20632_20697[(2)] = inst_20558);

(statearr_20632_20697[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (26))){
var inst_20500 = (state_20568[(29)]);
var inst_20554 = (state_20568[(2)]);
var inst_20555 = cljs.core.seq.call(null,inst_20500);
var state_20568__$1 = (function (){var statearr_20633 = state_20568;
(statearr_20633[(31)] = inst_20554);

return statearr_20633;
})();
if(inst_20555){
var statearr_20634_20698 = state_20568__$1;
(statearr_20634_20698[(1)] = (42));

} else {
var statearr_20635_20699 = state_20568__$1;
(statearr_20635_20699[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (16))){
var inst_20469 = (state_20568[(7)]);
var inst_20471 = cljs.core.chunked_seq_QMARK_.call(null,inst_20469);
var state_20568__$1 = state_20568;
if(inst_20471){
var statearr_20636_20700 = state_20568__$1;
(statearr_20636_20700[(1)] = (19));

} else {
var statearr_20637_20701 = state_20568__$1;
(statearr_20637_20701[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (38))){
var inst_20547 = (state_20568[(2)]);
var state_20568__$1 = state_20568;
var statearr_20638_20702 = state_20568__$1;
(statearr_20638_20702[(2)] = inst_20547);

(statearr_20638_20702[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (30))){
var state_20568__$1 = state_20568;
var statearr_20639_20703 = state_20568__$1;
(statearr_20639_20703[(2)] = null);

(statearr_20639_20703[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (10))){
var inst_20450 = (state_20568[(13)]);
var inst_20452 = (state_20568[(17)]);
var inst_20458 = cljs.core._nth.call(null,inst_20450,inst_20452);
var inst_20459 = cljs.core.nth.call(null,inst_20458,(0),null);
var inst_20460 = cljs.core.nth.call(null,inst_20458,(1),null);
var state_20568__$1 = (function (){var statearr_20640 = state_20568;
(statearr_20640[(26)] = inst_20459);

return statearr_20640;
})();
if(cljs.core.truth_(inst_20460)){
var statearr_20641_20704 = state_20568__$1;
(statearr_20641_20704[(1)] = (13));

} else {
var statearr_20642_20705 = state_20568__$1;
(statearr_20642_20705[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (18))){
var inst_20493 = (state_20568[(2)]);
var state_20568__$1 = state_20568;
var statearr_20643_20706 = state_20568__$1;
(statearr_20643_20706[(2)] = inst_20493);

(statearr_20643_20706[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (42))){
var state_20568__$1 = state_20568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20568__$1,(45),dchan);
} else {
if((state_val_20569 === (37))){
var inst_20536 = (state_20568[(23)]);
var inst_20440 = (state_20568[(12)]);
var inst_20527 = (state_20568[(25)]);
var inst_20536__$1 = cljs.core.first.call(null,inst_20527);
var inst_20537 = cljs.core.async.put_BANG_.call(null,inst_20536__$1,inst_20440,done);
var state_20568__$1 = (function (){var statearr_20644 = state_20568;
(statearr_20644[(23)] = inst_20536__$1);

return statearr_20644;
})();
if(cljs.core.truth_(inst_20537)){
var statearr_20645_20707 = state_20568__$1;
(statearr_20645_20707[(1)] = (39));

} else {
var statearr_20646_20708 = state_20568__$1;
(statearr_20646_20708[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (8))){
var inst_20451 = (state_20568[(14)]);
var inst_20452 = (state_20568[(17)]);
var inst_20454 = (inst_20452 < inst_20451);
var inst_20455 = inst_20454;
var state_20568__$1 = state_20568;
if(cljs.core.truth_(inst_20455)){
var statearr_20647_20709 = state_20568__$1;
(statearr_20647_20709[(1)] = (10));

} else {
var statearr_20648_20710 = state_20568__$1;
(statearr_20648_20710[(1)] = (11));

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
});})(c__7303__auto___20656,cs,m,dchan,dctr,done))
;
return ((function (switch__7288__auto__,c__7303__auto___20656,cs,m,dchan,dctr,done){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_20652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20652[(0)] = state_machine__7289__auto__);

(statearr_20652[(1)] = (1));

return statearr_20652;
});
var state_machine__7289__auto____1 = (function (state_20568){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_20568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e20653){if((e20653 instanceof Object)){
var ex__7292__auto__ = e20653;
var statearr_20654_20711 = state_20568;
(statearr_20654_20711[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20712 = state_20568;
state_20568 = G__20712;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_20568){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_20568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___20656,cs,m,dchan,dctr,done))
})();
var state__7305__auto__ = (function (){var statearr_20655 = f__7304__auto__.call(null);
(statearr_20655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___20656);

return statearr_20655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___20656,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj20714 = {};
return obj20714;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3596__auto__ = m;
if(and__3596__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3596__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4247__auto__ = (((m == null))?null:m);
return (function (){var or__3608__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4247__auto__)]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3596__auto__ = m;
if(and__3596__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3596__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4247__auto__ = (((m == null))?null:m);
return (function (){var or__3608__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4247__auto__)]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3596__auto__ = m;
if(and__3596__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3596__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4247__auto__ = (((m == null))?null:m);
return (function (){var or__3608__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4247__auto__)]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3596__auto__ = m;
if(and__3596__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3596__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4247__auto__ = (((m == null))?null:m);
return (function (){var or__3608__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4247__auto__)]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3596__auto__ = m;
if(and__3596__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3596__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4247__auto__ = (((m == null))?null:m);
return (function (){var or__3608__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4247__auto__)]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__20715){
var map__20720 = p__20715;
var map__20720__$1 = ((cljs.core.seq_QMARK_.call(null,map__20720))?cljs.core.apply.call(null,cljs.core.hash_map,map__20720):map__20720);
var opts = map__20720__$1;
var statearr_20721_20724 = state;
(statearr_20721_20724[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__20720,map__20720__$1,opts){
return (function (val){
var statearr_20722_20725 = state;
(statearr_20722_20725[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20720,map__20720__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_20723_20726 = state;
(statearr_20723_20726[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__20715 = null;
if (arguments.length > 3) {
  p__20715 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__20715);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__20727){
var state = cljs.core.first(arglist__20727);
arglist__20727 = cljs.core.next(arglist__20727);
var cont_block = cljs.core.first(arglist__20727);
arglist__20727 = cljs.core.next(arglist__20727);
var ports = cljs.core.first(arglist__20727);
var p__20715 = cljs.core.rest(arglist__20727);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__20715);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t20847 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20847 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20848){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta20848 = meta20848;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20847.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t20847.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20847.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20847.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20847.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20847.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20847.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20847.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20847.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20849){
var self__ = this;
var _20849__$1 = this;
return self__.meta20848;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20849,meta20848__$1){
var self__ = this;
var _20849__$1 = this;
return (new cljs.core.async.t20847(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20848__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20847.cljs$lang$type = true;

cljs.core.async.t20847.cljs$lang$ctorStr = "cljs.core.async/t20847";

cljs.core.async.t20847.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t20847");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t20847 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t20847(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20848){
return (new cljs.core.async.t20847(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20848));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t20847(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
})()
;
var c__7303__auto___20966 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___20966,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___20966,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20919){
var state_val_20920 = (state_20919[(1)]);
if((state_val_20920 === (7))){
var inst_20863 = (state_20919[(7)]);
var inst_20868 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20863);
var state_20919__$1 = state_20919;
var statearr_20921_20967 = state_20919__$1;
(statearr_20921_20967[(2)] = inst_20868);

(statearr_20921_20967[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20920 === (20))){
var inst_20878 = (state_20919[(8)]);
var state_20919__$1 = state_20919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20919__$1,(23),out,inst_20878);
} else {
if((state_val_20920 === (1))){
var inst_20853 = (state_20919[(9)]);
var inst_20853__$1 = calc_state.call(null);
var inst_20854 = cljs.core.seq_QMARK_.call(null,inst_20853__$1);
var state_20919__$1 = (function (){var statearr_20922 = state_20919;
(statearr_20922[(9)] = inst_20853__$1);

return statearr_20922;
})();
if(inst_20854){
var statearr_20923_20968 = state_20919__$1;
(statearr_20923_20968[(1)] = (2));

} else {
var statearr_20924_20969 = state_20919__$1;
(statearr_20924_20969[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20920 === (24))){
var inst_20871 = (state_20919[(10)]);
var inst_20863 = inst_20871;
var state_20919__$1 = (function (){var statearr_20925 = state_20919;
(statearr_20925[(7)] = inst_20863);

return statearr_20925;
})();
var statearr_20926_20970 = state_20919__$1;
(statearr_20926_20970[(2)] = null);

(statearr_20926_20970[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20920 === (4))){
var inst_20853 = (state_20919[(9)]);
var inst_20859 = (state_20919[(2)]);
var inst_20860 = cljs.core.get.call(null,inst_20859,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20861 = cljs.core.get.call(null,inst_20859,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20862 = cljs.core.get.call(null,inst_20859,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20863 = inst_20853;
var state_20919__$1 = (function (){var statearr_20927 = state_20919;
(statearr_20927[(11)] = inst_20862);

(statearr_20927[(12)] = inst_20861);

(statearr_20927[(13)] = inst_20860);

(statearr_20927[(7)] = inst_20863);

return statearr_20927;
})();
var statearr_20928_20971 = state_20919__$1;
(statearr_20928_20971[(2)] = null);

(statearr_20928_20971[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20920 === (15))){
var state_20919__$1 = state_20919;
var statearr_20929_20972 = state_20919__$1;
(statearr_20929_20972[(2)] = null);

(statearr_20929_20972[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20920 === (21))){
var inst_20871 = (state_20919[(10)]);
var inst_20863 = inst_20871;
var state_20919__$1 = (function (){var statearr_20930 = state_20919;
(statearr_20930[(7)] = inst_20863);

return statearr_20930;
})();
var statearr_20931_20973 = state_20919__$1;
(statearr_20931_20973[(2)] = null);

(statearr_20931_20973[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20920 === (13))){
var inst_20915 = (state_20919[(2)]);
var state_20919__$1 = state_20919;
var statearr_20932_20974 = state_20919__$1;
(statearr_20932_20974[(2)] = inst_20915);

(statearr_20932_20974[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20920 === (22))){
var inst_20913 = (state_20919[(2)]);
var state_20919__$1 = state_20919;
var statearr_20933_20975 = state_20919__$1;
(statearr_20933_20975[(2)] = inst_20913);

(statearr_20933_20975[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20920 === (6))){
var inst_20917 = (state_20919[(2)]);
var state_20919__$1 = state_20919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20919__$1,inst_20917);
} else {
if((state_val_20920 === (25))){
var state_20919__$1 = state_20919;
var statearr_20934_20976 = state_20919__$1;
(statearr_20934_20976[(2)] = null);

(statearr_20934_20976[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20920 === (17))){
var inst_20893 = (state_20919[(14)]);
var state_20919__$1 = state_20919;
var statearr_20935_20977 = state_20919__$1;
(statearr_20935_20977[(2)] = inst_20893);

(statearr_20935_20977[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20920 === (3))){
var inst_20853 = (state_20919[(9)]);
var state_20919__$1 = state_20919;
var statearr_20936_20978 = state_20919__$1;
(statearr_20936_20978[(2)] = inst_20853);

(statearr_20936_20978[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20920 === (12))){
var inst_20874 = (state_20919[(15)]);
var inst_20893 = (state_20919[(14)]);
var inst_20879 = (state_20919[(16)]);
var inst_20893__$1 = inst_20874.call(null,inst_20879);
var state_20919__$1 = (function (){var statearr_20937 = state_20919;
(statearr_20937[(14)] = inst_20893__$1);

return statearr_20937;
})();
if(cljs.core.truth_(inst_20893__$1)){
var statearr_20938_20979 = state_20919__$1;
(statearr_20938_20979[(1)] = (17));

} else {
var statearr_20939_20980 = state_20919__$1;
(statearr_20939_20980[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20920 === (2))){
var inst_20853 = (state_20919[(9)]);
var inst_20856 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20853);
var state_20919__$1 = state_20919;
var statearr_20940_20981 = state_20919__$1;
(statearr_20940_20981[(2)] = inst_20856);

(statearr_20940_20981[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20920 === (23))){
var inst_20904 = (state_20919[(2)]);
var state_20919__$1 = state_20919;
if(cljs.core.truth_(inst_20904)){
var statearr_20941_20982 = state_20919__$1;
(statearr_20941_20982[(1)] = (24));

} else {
var statearr_20942_20983 = state_20919__$1;
(statearr_20942_20983[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20920 === (19))){
var inst_20901 = (state_20919[(2)]);
var state_20919__$1 = state_20919;
if(cljs.core.truth_(inst_20901)){
var statearr_20943_20984 = state_20919__$1;
(statearr_20943_20984[(1)] = (20));

} else {
var statearr_20944_20985 = state_20919__$1;
(statearr_20944_20985[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20920 === (11))){
var inst_20878 = (state_20919[(8)]);
var inst_20884 = (inst_20878 == null);
var state_20919__$1 = state_20919;
if(cljs.core.truth_(inst_20884)){
var statearr_20945_20986 = state_20919__$1;
(statearr_20945_20986[(1)] = (14));

} else {
var statearr_20946_20987 = state_20919__$1;
(statearr_20946_20987[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20920 === (9))){
var inst_20871 = (state_20919[(10)]);
var inst_20871__$1 = (state_20919[(2)]);
var inst_20872 = cljs.core.get.call(null,inst_20871__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20873 = cljs.core.get.call(null,inst_20871__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20874 = cljs.core.get.call(null,inst_20871__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_20919__$1 = (function (){var statearr_20947 = state_20919;
(statearr_20947[(15)] = inst_20874);

(statearr_20947[(10)] = inst_20871__$1);

(statearr_20947[(17)] = inst_20873);

return statearr_20947;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20919__$1,(10),inst_20872);
} else {
if((state_val_20920 === (5))){
var inst_20863 = (state_20919[(7)]);
var inst_20866 = cljs.core.seq_QMARK_.call(null,inst_20863);
var state_20919__$1 = state_20919;
if(inst_20866){
var statearr_20948_20988 = state_20919__$1;
(statearr_20948_20988[(1)] = (7));

} else {
var statearr_20949_20989 = state_20919__$1;
(statearr_20949_20989[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20920 === (14))){
var inst_20879 = (state_20919[(16)]);
var inst_20886 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20879);
var state_20919__$1 = state_20919;
var statearr_20950_20990 = state_20919__$1;
(statearr_20950_20990[(2)] = inst_20886);

(statearr_20950_20990[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20920 === (26))){
var inst_20909 = (state_20919[(2)]);
var state_20919__$1 = state_20919;
var statearr_20951_20991 = state_20919__$1;
(statearr_20951_20991[(2)] = inst_20909);

(statearr_20951_20991[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20920 === (16))){
var inst_20889 = (state_20919[(2)]);
var inst_20890 = calc_state.call(null);
var inst_20863 = inst_20890;
var state_20919__$1 = (function (){var statearr_20952 = state_20919;
(statearr_20952[(18)] = inst_20889);

(statearr_20952[(7)] = inst_20863);

return statearr_20952;
})();
var statearr_20953_20992 = state_20919__$1;
(statearr_20953_20992[(2)] = null);

(statearr_20953_20992[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20920 === (10))){
var inst_20878 = (state_20919[(8)]);
var inst_20879 = (state_20919[(16)]);
var inst_20877 = (state_20919[(2)]);
var inst_20878__$1 = cljs.core.nth.call(null,inst_20877,(0),null);
var inst_20879__$1 = cljs.core.nth.call(null,inst_20877,(1),null);
var inst_20880 = (inst_20878__$1 == null);
var inst_20881 = cljs.core._EQ_.call(null,inst_20879__$1,change);
var inst_20882 = (inst_20880) || (inst_20881);
var state_20919__$1 = (function (){var statearr_20954 = state_20919;
(statearr_20954[(8)] = inst_20878__$1);

(statearr_20954[(16)] = inst_20879__$1);

return statearr_20954;
})();
if(cljs.core.truth_(inst_20882)){
var statearr_20955_20993 = state_20919__$1;
(statearr_20955_20993[(1)] = (11));

} else {
var statearr_20956_20994 = state_20919__$1;
(statearr_20956_20994[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20920 === (18))){
var inst_20874 = (state_20919[(15)]);
var inst_20879 = (state_20919[(16)]);
var inst_20873 = (state_20919[(17)]);
var inst_20896 = cljs.core.empty_QMARK_.call(null,inst_20874);
var inst_20897 = inst_20873.call(null,inst_20879);
var inst_20898 = cljs.core.not.call(null,inst_20897);
var inst_20899 = (inst_20896) && (inst_20898);
var state_20919__$1 = state_20919;
var statearr_20957_20995 = state_20919__$1;
(statearr_20957_20995[(2)] = inst_20899);

(statearr_20957_20995[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20920 === (8))){
var inst_20863 = (state_20919[(7)]);
var state_20919__$1 = state_20919;
var statearr_20958_20996 = state_20919__$1;
(statearr_20958_20996[(2)] = inst_20863);

(statearr_20958_20996[(1)] = (9));


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
});})(c__7303__auto___20966,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7288__auto__,c__7303__auto___20966,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_20962 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20962[(0)] = state_machine__7289__auto__);

(statearr_20962[(1)] = (1));

return statearr_20962;
});
var state_machine__7289__auto____1 = (function (state_20919){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_20919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e20963){if((e20963 instanceof Object)){
var ex__7292__auto__ = e20963;
var statearr_20964_20997 = state_20919;
(statearr_20964_20997[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20998 = state_20919;
state_20919 = G__20998;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_20919){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_20919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___20966,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7305__auto__ = (function (){var statearr_20965 = f__7304__auto__.call(null);
(statearr_20965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___20966);

return statearr_20965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___20966,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj21000 = {};
return obj21000;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3596__auto__ = p;
if(and__3596__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3596__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4247__auto__ = (((p == null))?null:p);
return (function (){var or__3608__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4247__auto__)]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3596__auto__ = p;
if(and__3596__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3596__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4247__auto__ = (((p == null))?null:p);
return (function (){var or__3608__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4247__auto__)]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3596__auto__ = p;
if(and__3596__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3596__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4247__auto__ = (((p == null))?null:p);
return (function (){var or__3608__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4247__auto__)]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3596__auto__ = p;
if(and__3596__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3596__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4247__auto__ = (((p == null))?null:p);
return (function (){var or__3608__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4247__auto__)]);
if(or__3608__auto__){
return or__3608__auto__;
} else {
var or__3608__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3608__auto____$1){
return or__3608__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3608__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3608__auto__,mults){
return (function (p1__21001_SHARP_){
if(cljs.core.truth_(p1__21001_SHARP_.call(null,topic))){
return p1__21001_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21001_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3608__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t21124 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21124 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta21125){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta21125 = meta21125;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21124.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t21124.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t21124.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t21124.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t21124.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t21124.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21124.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t21124.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21126){
var self__ = this;
var _21126__$1 = this;
return self__.meta21125;
});})(mults,ensure_mult))
;

cljs.core.async.t21124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21126,meta21125__$1){
var self__ = this;
var _21126__$1 = this;
return (new cljs.core.async.t21124(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta21125__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t21124.cljs$lang$type = true;

cljs.core.async.t21124.cljs$lang$ctorStr = "cljs.core.async/t21124";

cljs.core.async.t21124.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t21124");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t21124 = ((function (mults,ensure_mult){
return (function __GT_t21124(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta21125){
return (new cljs.core.async.t21124(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta21125));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t21124(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
})()
;
var c__7303__auto___21246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___21246,mults,ensure_mult,p){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___21246,mults,ensure_mult,p){
return (function (state_21198){
var state_val_21199 = (state_21198[(1)]);
if((state_val_21199 === (7))){
var inst_21194 = (state_21198[(2)]);
var state_21198__$1 = state_21198;
var statearr_21200_21247 = state_21198__$1;
(statearr_21200_21247[(2)] = inst_21194);

(statearr_21200_21247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (20))){
var state_21198__$1 = state_21198;
var statearr_21201_21248 = state_21198__$1;
(statearr_21201_21248[(2)] = null);

(statearr_21201_21248[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (1))){
var state_21198__$1 = state_21198;
var statearr_21202_21249 = state_21198__$1;
(statearr_21202_21249[(2)] = null);

(statearr_21202_21249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (24))){
var inst_21177 = (state_21198[(7)]);
var inst_21186 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21177);
var state_21198__$1 = state_21198;
var statearr_21203_21250 = state_21198__$1;
(statearr_21203_21250[(2)] = inst_21186);

(statearr_21203_21250[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (4))){
var inst_21129 = (state_21198[(8)]);
var inst_21129__$1 = (state_21198[(2)]);
var inst_21130 = (inst_21129__$1 == null);
var state_21198__$1 = (function (){var statearr_21204 = state_21198;
(statearr_21204[(8)] = inst_21129__$1);

return statearr_21204;
})();
if(cljs.core.truth_(inst_21130)){
var statearr_21205_21251 = state_21198__$1;
(statearr_21205_21251[(1)] = (5));

} else {
var statearr_21206_21252 = state_21198__$1;
(statearr_21206_21252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (15))){
var inst_21171 = (state_21198[(2)]);
var state_21198__$1 = state_21198;
var statearr_21207_21253 = state_21198__$1;
(statearr_21207_21253[(2)] = inst_21171);

(statearr_21207_21253[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (21))){
var inst_21191 = (state_21198[(2)]);
var state_21198__$1 = (function (){var statearr_21208 = state_21198;
(statearr_21208[(9)] = inst_21191);

return statearr_21208;
})();
var statearr_21209_21254 = state_21198__$1;
(statearr_21209_21254[(2)] = null);

(statearr_21209_21254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (13))){
var inst_21153 = (state_21198[(10)]);
var inst_21155 = cljs.core.chunked_seq_QMARK_.call(null,inst_21153);
var state_21198__$1 = state_21198;
if(inst_21155){
var statearr_21210_21255 = state_21198__$1;
(statearr_21210_21255[(1)] = (16));

} else {
var statearr_21211_21256 = state_21198__$1;
(statearr_21211_21256[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (22))){
var inst_21183 = (state_21198[(2)]);
var state_21198__$1 = state_21198;
if(cljs.core.truth_(inst_21183)){
var statearr_21212_21257 = state_21198__$1;
(statearr_21212_21257[(1)] = (23));

} else {
var statearr_21213_21258 = state_21198__$1;
(statearr_21213_21258[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (6))){
var inst_21129 = (state_21198[(8)]);
var inst_21177 = (state_21198[(7)]);
var inst_21179 = (state_21198[(11)]);
var inst_21177__$1 = topic_fn.call(null,inst_21129);
var inst_21178 = cljs.core.deref.call(null,mults);
var inst_21179__$1 = cljs.core.get.call(null,inst_21178,inst_21177__$1);
var state_21198__$1 = (function (){var statearr_21214 = state_21198;
(statearr_21214[(7)] = inst_21177__$1);

(statearr_21214[(11)] = inst_21179__$1);

return statearr_21214;
})();
if(cljs.core.truth_(inst_21179__$1)){
var statearr_21215_21259 = state_21198__$1;
(statearr_21215_21259[(1)] = (19));

} else {
var statearr_21216_21260 = state_21198__$1;
(statearr_21216_21260[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (25))){
var inst_21188 = (state_21198[(2)]);
var state_21198__$1 = state_21198;
var statearr_21217_21261 = state_21198__$1;
(statearr_21217_21261[(2)] = inst_21188);

(statearr_21217_21261[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (17))){
var inst_21153 = (state_21198[(10)]);
var inst_21162 = cljs.core.first.call(null,inst_21153);
var inst_21163 = cljs.core.async.muxch_STAR_.call(null,inst_21162);
var inst_21164 = cljs.core.async.close_BANG_.call(null,inst_21163);
var inst_21165 = cljs.core.next.call(null,inst_21153);
var inst_21139 = inst_21165;
var inst_21140 = null;
var inst_21141 = (0);
var inst_21142 = (0);
var state_21198__$1 = (function (){var statearr_21218 = state_21198;
(statearr_21218[(12)] = inst_21141);

(statearr_21218[(13)] = inst_21139);

(statearr_21218[(14)] = inst_21142);

(statearr_21218[(15)] = inst_21164);

(statearr_21218[(16)] = inst_21140);

return statearr_21218;
})();
var statearr_21219_21262 = state_21198__$1;
(statearr_21219_21262[(2)] = null);

(statearr_21219_21262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (3))){
var inst_21196 = (state_21198[(2)]);
var state_21198__$1 = state_21198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21198__$1,inst_21196);
} else {
if((state_val_21199 === (12))){
var inst_21173 = (state_21198[(2)]);
var state_21198__$1 = state_21198;
var statearr_21220_21263 = state_21198__$1;
(statearr_21220_21263[(2)] = inst_21173);

(statearr_21220_21263[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (2))){
var state_21198__$1 = state_21198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21198__$1,(4),ch);
} else {
if((state_val_21199 === (23))){
var state_21198__$1 = state_21198;
var statearr_21221_21264 = state_21198__$1;
(statearr_21221_21264[(2)] = null);

(statearr_21221_21264[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (19))){
var inst_21129 = (state_21198[(8)]);
var inst_21179 = (state_21198[(11)]);
var inst_21181 = cljs.core.async.muxch_STAR_.call(null,inst_21179);
var state_21198__$1 = state_21198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21198__$1,(22),inst_21181,inst_21129);
} else {
if((state_val_21199 === (11))){
var inst_21139 = (state_21198[(13)]);
var inst_21153 = (state_21198[(10)]);
var inst_21153__$1 = cljs.core.seq.call(null,inst_21139);
var state_21198__$1 = (function (){var statearr_21222 = state_21198;
(statearr_21222[(10)] = inst_21153__$1);

return statearr_21222;
})();
if(inst_21153__$1){
var statearr_21223_21265 = state_21198__$1;
(statearr_21223_21265[(1)] = (13));

} else {
var statearr_21224_21266 = state_21198__$1;
(statearr_21224_21266[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (9))){
var inst_21175 = (state_21198[(2)]);
var state_21198__$1 = state_21198;
var statearr_21225_21267 = state_21198__$1;
(statearr_21225_21267[(2)] = inst_21175);

(statearr_21225_21267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (5))){
var inst_21136 = cljs.core.deref.call(null,mults);
var inst_21137 = cljs.core.vals.call(null,inst_21136);
var inst_21138 = cljs.core.seq.call(null,inst_21137);
var inst_21139 = inst_21138;
var inst_21140 = null;
var inst_21141 = (0);
var inst_21142 = (0);
var state_21198__$1 = (function (){var statearr_21226 = state_21198;
(statearr_21226[(12)] = inst_21141);

(statearr_21226[(13)] = inst_21139);

(statearr_21226[(14)] = inst_21142);

(statearr_21226[(16)] = inst_21140);

return statearr_21226;
})();
var statearr_21227_21268 = state_21198__$1;
(statearr_21227_21268[(2)] = null);

(statearr_21227_21268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (14))){
var state_21198__$1 = state_21198;
var statearr_21231_21269 = state_21198__$1;
(statearr_21231_21269[(2)] = null);

(statearr_21231_21269[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (16))){
var inst_21153 = (state_21198[(10)]);
var inst_21157 = cljs.core.chunk_first.call(null,inst_21153);
var inst_21158 = cljs.core.chunk_rest.call(null,inst_21153);
var inst_21159 = cljs.core.count.call(null,inst_21157);
var inst_21139 = inst_21158;
var inst_21140 = inst_21157;
var inst_21141 = inst_21159;
var inst_21142 = (0);
var state_21198__$1 = (function (){var statearr_21232 = state_21198;
(statearr_21232[(12)] = inst_21141);

(statearr_21232[(13)] = inst_21139);

(statearr_21232[(14)] = inst_21142);

(statearr_21232[(16)] = inst_21140);

return statearr_21232;
})();
var statearr_21233_21270 = state_21198__$1;
(statearr_21233_21270[(2)] = null);

(statearr_21233_21270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (10))){
var inst_21141 = (state_21198[(12)]);
var inst_21139 = (state_21198[(13)]);
var inst_21142 = (state_21198[(14)]);
var inst_21140 = (state_21198[(16)]);
var inst_21147 = cljs.core._nth.call(null,inst_21140,inst_21142);
var inst_21148 = cljs.core.async.muxch_STAR_.call(null,inst_21147);
var inst_21149 = cljs.core.async.close_BANG_.call(null,inst_21148);
var inst_21150 = (inst_21142 + (1));
var tmp21228 = inst_21141;
var tmp21229 = inst_21139;
var tmp21230 = inst_21140;
var inst_21139__$1 = tmp21229;
var inst_21140__$1 = tmp21230;
var inst_21141__$1 = tmp21228;
var inst_21142__$1 = inst_21150;
var state_21198__$1 = (function (){var statearr_21234 = state_21198;
(statearr_21234[(12)] = inst_21141__$1);

(statearr_21234[(17)] = inst_21149);

(statearr_21234[(13)] = inst_21139__$1);

(statearr_21234[(14)] = inst_21142__$1);

(statearr_21234[(16)] = inst_21140__$1);

return statearr_21234;
})();
var statearr_21235_21271 = state_21198__$1;
(statearr_21235_21271[(2)] = null);

(statearr_21235_21271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (18))){
var inst_21168 = (state_21198[(2)]);
var state_21198__$1 = state_21198;
var statearr_21236_21272 = state_21198__$1;
(statearr_21236_21272[(2)] = inst_21168);

(statearr_21236_21272[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (8))){
var inst_21141 = (state_21198[(12)]);
var inst_21142 = (state_21198[(14)]);
var inst_21144 = (inst_21142 < inst_21141);
var inst_21145 = inst_21144;
var state_21198__$1 = state_21198;
if(cljs.core.truth_(inst_21145)){
var statearr_21237_21273 = state_21198__$1;
(statearr_21237_21273[(1)] = (10));

} else {
var statearr_21238_21274 = state_21198__$1;
(statearr_21238_21274[(1)] = (11));

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
});})(c__7303__auto___21246,mults,ensure_mult,p))
;
return ((function (switch__7288__auto__,c__7303__auto___21246,mults,ensure_mult,p){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_21242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21242[(0)] = state_machine__7289__auto__);

(statearr_21242[(1)] = (1));

return statearr_21242;
});
var state_machine__7289__auto____1 = (function (state_21198){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_21198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e21243){if((e21243 instanceof Object)){
var ex__7292__auto__ = e21243;
var statearr_21244_21275 = state_21198;
(statearr_21244_21275[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21276 = state_21198;
state_21198 = G__21276;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_21198){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_21198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___21246,mults,ensure_mult,p))
})();
var state__7305__auto__ = (function (){var statearr_21245 = f__7304__auto__.call(null);
(statearr_21245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___21246);

return statearr_21245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___21246,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__7303__auto___21413 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___21413,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___21413,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21383){
var state_val_21384 = (state_21383[(1)]);
if((state_val_21384 === (7))){
var state_21383__$1 = state_21383;
var statearr_21385_21414 = state_21383__$1;
(statearr_21385_21414[(2)] = null);

(statearr_21385_21414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21384 === (1))){
var state_21383__$1 = state_21383;
var statearr_21386_21415 = state_21383__$1;
(statearr_21386_21415[(2)] = null);

(statearr_21386_21415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21384 === (4))){
var inst_21347 = (state_21383[(7)]);
var inst_21349 = (inst_21347 < cnt);
var state_21383__$1 = state_21383;
if(cljs.core.truth_(inst_21349)){
var statearr_21387_21416 = state_21383__$1;
(statearr_21387_21416[(1)] = (6));

} else {
var statearr_21388_21417 = state_21383__$1;
(statearr_21388_21417[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21384 === (15))){
var inst_21379 = (state_21383[(2)]);
var state_21383__$1 = state_21383;
var statearr_21389_21418 = state_21383__$1;
(statearr_21389_21418[(2)] = inst_21379);

(statearr_21389_21418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21384 === (13))){
var inst_21372 = cljs.core.async.close_BANG_.call(null,out);
var state_21383__$1 = state_21383;
var statearr_21390_21419 = state_21383__$1;
(statearr_21390_21419[(2)] = inst_21372);

(statearr_21390_21419[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21384 === (6))){
var state_21383__$1 = state_21383;
var statearr_21391_21420 = state_21383__$1;
(statearr_21391_21420[(2)] = null);

(statearr_21391_21420[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21384 === (3))){
var inst_21381 = (state_21383[(2)]);
var state_21383__$1 = state_21383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21383__$1,inst_21381);
} else {
if((state_val_21384 === (12))){
var inst_21369 = (state_21383[(8)]);
var inst_21369__$1 = (state_21383[(2)]);
var inst_21370 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21369__$1);
var state_21383__$1 = (function (){var statearr_21392 = state_21383;
(statearr_21392[(8)] = inst_21369__$1);

return statearr_21392;
})();
if(cljs.core.truth_(inst_21370)){
var statearr_21393_21421 = state_21383__$1;
(statearr_21393_21421[(1)] = (13));

} else {
var statearr_21394_21422 = state_21383__$1;
(statearr_21394_21422[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21384 === (2))){
var inst_21346 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21347 = (0);
var state_21383__$1 = (function (){var statearr_21395 = state_21383;
(statearr_21395[(9)] = inst_21346);

(statearr_21395[(7)] = inst_21347);

return statearr_21395;
})();
var statearr_21396_21423 = state_21383__$1;
(statearr_21396_21423[(2)] = null);

(statearr_21396_21423[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21384 === (11))){
var inst_21347 = (state_21383[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21383,(10),Object,null,(9));
var inst_21356 = chs__$1.call(null,inst_21347);
var inst_21357 = done.call(null,inst_21347);
var inst_21358 = cljs.core.async.take_BANG_.call(null,inst_21356,inst_21357);
var state_21383__$1 = state_21383;
var statearr_21397_21424 = state_21383__$1;
(statearr_21397_21424[(2)] = inst_21358);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21383__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21384 === (9))){
var inst_21347 = (state_21383[(7)]);
var inst_21360 = (state_21383[(2)]);
var inst_21361 = (inst_21347 + (1));
var inst_21347__$1 = inst_21361;
var state_21383__$1 = (function (){var statearr_21398 = state_21383;
(statearr_21398[(10)] = inst_21360);

(statearr_21398[(7)] = inst_21347__$1);

return statearr_21398;
})();
var statearr_21399_21425 = state_21383__$1;
(statearr_21399_21425[(2)] = null);

(statearr_21399_21425[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21384 === (5))){
var inst_21367 = (state_21383[(2)]);
var state_21383__$1 = (function (){var statearr_21400 = state_21383;
(statearr_21400[(11)] = inst_21367);

return statearr_21400;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21383__$1,(12),dchan);
} else {
if((state_val_21384 === (14))){
var inst_21369 = (state_21383[(8)]);
var inst_21374 = cljs.core.apply.call(null,f,inst_21369);
var state_21383__$1 = state_21383;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21383__$1,(16),out,inst_21374);
} else {
if((state_val_21384 === (16))){
var inst_21376 = (state_21383[(2)]);
var state_21383__$1 = (function (){var statearr_21401 = state_21383;
(statearr_21401[(12)] = inst_21376);

return statearr_21401;
})();
var statearr_21402_21426 = state_21383__$1;
(statearr_21402_21426[(2)] = null);

(statearr_21402_21426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21384 === (10))){
var inst_21351 = (state_21383[(2)]);
var inst_21352 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21383__$1 = (function (){var statearr_21403 = state_21383;
(statearr_21403[(13)] = inst_21351);

return statearr_21403;
})();
var statearr_21404_21427 = state_21383__$1;
(statearr_21404_21427[(2)] = inst_21352);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21383__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21384 === (8))){
var inst_21365 = (state_21383[(2)]);
var state_21383__$1 = state_21383;
var statearr_21405_21428 = state_21383__$1;
(statearr_21405_21428[(2)] = inst_21365);

(statearr_21405_21428[(1)] = (5));


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
});})(c__7303__auto___21413,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7288__auto__,c__7303__auto___21413,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_21409 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21409[(0)] = state_machine__7289__auto__);

(statearr_21409[(1)] = (1));

return statearr_21409;
});
var state_machine__7289__auto____1 = (function (state_21383){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_21383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e21410){if((e21410 instanceof Object)){
var ex__7292__auto__ = e21410;
var statearr_21411_21429 = state_21383;
(statearr_21411_21429[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21430 = state_21383;
state_21383 = G__21430;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_21383){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_21383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___21413,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7305__auto__ = (function (){var statearr_21412 = f__7304__auto__.call(null);
(statearr_21412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___21413);

return statearr_21412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___21413,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7303__auto___21538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___21538,out){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___21538,out){
return (function (state_21514){
var state_val_21515 = (state_21514[(1)]);
if((state_val_21515 === (7))){
var inst_21493 = (state_21514[(7)]);
var inst_21494 = (state_21514[(8)]);
var inst_21493__$1 = (state_21514[(2)]);
var inst_21494__$1 = cljs.core.nth.call(null,inst_21493__$1,(0),null);
var inst_21495 = cljs.core.nth.call(null,inst_21493__$1,(1),null);
var inst_21496 = (inst_21494__$1 == null);
var state_21514__$1 = (function (){var statearr_21516 = state_21514;
(statearr_21516[(7)] = inst_21493__$1);

(statearr_21516[(9)] = inst_21495);

(statearr_21516[(8)] = inst_21494__$1);

return statearr_21516;
})();
if(cljs.core.truth_(inst_21496)){
var statearr_21517_21539 = state_21514__$1;
(statearr_21517_21539[(1)] = (8));

} else {
var statearr_21518_21540 = state_21514__$1;
(statearr_21518_21540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21515 === (1))){
var inst_21485 = cljs.core.vec.call(null,chs);
var inst_21486 = inst_21485;
var state_21514__$1 = (function (){var statearr_21519 = state_21514;
(statearr_21519[(10)] = inst_21486);

return statearr_21519;
})();
var statearr_21520_21541 = state_21514__$1;
(statearr_21520_21541[(2)] = null);

(statearr_21520_21541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21515 === (4))){
var inst_21486 = (state_21514[(10)]);
var state_21514__$1 = state_21514;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21514__$1,(7),inst_21486);
} else {
if((state_val_21515 === (6))){
var inst_21510 = (state_21514[(2)]);
var state_21514__$1 = state_21514;
var statearr_21521_21542 = state_21514__$1;
(statearr_21521_21542[(2)] = inst_21510);

(statearr_21521_21542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21515 === (3))){
var inst_21512 = (state_21514[(2)]);
var state_21514__$1 = state_21514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21514__$1,inst_21512);
} else {
if((state_val_21515 === (2))){
var inst_21486 = (state_21514[(10)]);
var inst_21488 = cljs.core.count.call(null,inst_21486);
var inst_21489 = (inst_21488 > (0));
var state_21514__$1 = state_21514;
if(cljs.core.truth_(inst_21489)){
var statearr_21523_21543 = state_21514__$1;
(statearr_21523_21543[(1)] = (4));

} else {
var statearr_21524_21544 = state_21514__$1;
(statearr_21524_21544[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21515 === (11))){
var inst_21486 = (state_21514[(10)]);
var inst_21503 = (state_21514[(2)]);
var tmp21522 = inst_21486;
var inst_21486__$1 = tmp21522;
var state_21514__$1 = (function (){var statearr_21525 = state_21514;
(statearr_21525[(11)] = inst_21503);

(statearr_21525[(10)] = inst_21486__$1);

return statearr_21525;
})();
var statearr_21526_21545 = state_21514__$1;
(statearr_21526_21545[(2)] = null);

(statearr_21526_21545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21515 === (9))){
var inst_21494 = (state_21514[(8)]);
var state_21514__$1 = state_21514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21514__$1,(11),out,inst_21494);
} else {
if((state_val_21515 === (5))){
var inst_21508 = cljs.core.async.close_BANG_.call(null,out);
var state_21514__$1 = state_21514;
var statearr_21527_21546 = state_21514__$1;
(statearr_21527_21546[(2)] = inst_21508);

(statearr_21527_21546[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21515 === (10))){
var inst_21506 = (state_21514[(2)]);
var state_21514__$1 = state_21514;
var statearr_21528_21547 = state_21514__$1;
(statearr_21528_21547[(2)] = inst_21506);

(statearr_21528_21547[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21515 === (8))){
var inst_21493 = (state_21514[(7)]);
var inst_21495 = (state_21514[(9)]);
var inst_21494 = (state_21514[(8)]);
var inst_21486 = (state_21514[(10)]);
var inst_21498 = (function (){var c = inst_21495;
var v = inst_21494;
var vec__21491 = inst_21493;
var cs = inst_21486;
return ((function (c,v,vec__21491,cs,inst_21493,inst_21495,inst_21494,inst_21486,state_val_21515,c__7303__auto___21538,out){
return (function (p1__21431_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21431_SHARP_);
});
;})(c,v,vec__21491,cs,inst_21493,inst_21495,inst_21494,inst_21486,state_val_21515,c__7303__auto___21538,out))
})();
var inst_21499 = cljs.core.filterv.call(null,inst_21498,inst_21486);
var inst_21486__$1 = inst_21499;
var state_21514__$1 = (function (){var statearr_21529 = state_21514;
(statearr_21529[(10)] = inst_21486__$1);

return statearr_21529;
})();
var statearr_21530_21548 = state_21514__$1;
(statearr_21530_21548[(2)] = null);

(statearr_21530_21548[(1)] = (2));


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
});})(c__7303__auto___21538,out))
;
return ((function (switch__7288__auto__,c__7303__auto___21538,out){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_21534 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21534[(0)] = state_machine__7289__auto__);

(statearr_21534[(1)] = (1));

return statearr_21534;
});
var state_machine__7289__auto____1 = (function (state_21514){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_21514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e21535){if((e21535 instanceof Object)){
var ex__7292__auto__ = e21535;
var statearr_21536_21549 = state_21514;
(statearr_21536_21549[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21550 = state_21514;
state_21514 = G__21550;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_21514){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_21514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___21538,out))
})();
var state__7305__auto__ = (function (){var statearr_21537 = f__7304__auto__.call(null);
(statearr_21537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___21538);

return statearr_21537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___21538,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7303__auto___21643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___21643,out){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___21643,out){
return (function (state_21620){
var state_val_21621 = (state_21620[(1)]);
if((state_val_21621 === (7))){
var inst_21602 = (state_21620[(7)]);
var inst_21602__$1 = (state_21620[(2)]);
var inst_21603 = (inst_21602__$1 == null);
var inst_21604 = cljs.core.not.call(null,inst_21603);
var state_21620__$1 = (function (){var statearr_21622 = state_21620;
(statearr_21622[(7)] = inst_21602__$1);

return statearr_21622;
})();
if(inst_21604){
var statearr_21623_21644 = state_21620__$1;
(statearr_21623_21644[(1)] = (8));

} else {
var statearr_21624_21645 = state_21620__$1;
(statearr_21624_21645[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21621 === (1))){
var inst_21597 = (0);
var state_21620__$1 = (function (){var statearr_21625 = state_21620;
(statearr_21625[(8)] = inst_21597);

return statearr_21625;
})();
var statearr_21626_21646 = state_21620__$1;
(statearr_21626_21646[(2)] = null);

(statearr_21626_21646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21621 === (4))){
var state_21620__$1 = state_21620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21620__$1,(7),ch);
} else {
if((state_val_21621 === (6))){
var inst_21615 = (state_21620[(2)]);
var state_21620__$1 = state_21620;
var statearr_21627_21647 = state_21620__$1;
(statearr_21627_21647[(2)] = inst_21615);

(statearr_21627_21647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21621 === (3))){
var inst_21617 = (state_21620[(2)]);
var inst_21618 = cljs.core.async.close_BANG_.call(null,out);
var state_21620__$1 = (function (){var statearr_21628 = state_21620;
(statearr_21628[(9)] = inst_21617);

return statearr_21628;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21620__$1,inst_21618);
} else {
if((state_val_21621 === (2))){
var inst_21597 = (state_21620[(8)]);
var inst_21599 = (inst_21597 < n);
var state_21620__$1 = state_21620;
if(cljs.core.truth_(inst_21599)){
var statearr_21629_21648 = state_21620__$1;
(statearr_21629_21648[(1)] = (4));

} else {
var statearr_21630_21649 = state_21620__$1;
(statearr_21630_21649[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21621 === (11))){
var inst_21597 = (state_21620[(8)]);
var inst_21607 = (state_21620[(2)]);
var inst_21608 = (inst_21597 + (1));
var inst_21597__$1 = inst_21608;
var state_21620__$1 = (function (){var statearr_21631 = state_21620;
(statearr_21631[(8)] = inst_21597__$1);

(statearr_21631[(10)] = inst_21607);

return statearr_21631;
})();
var statearr_21632_21650 = state_21620__$1;
(statearr_21632_21650[(2)] = null);

(statearr_21632_21650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21621 === (9))){
var state_21620__$1 = state_21620;
var statearr_21633_21651 = state_21620__$1;
(statearr_21633_21651[(2)] = null);

(statearr_21633_21651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21621 === (5))){
var state_21620__$1 = state_21620;
var statearr_21634_21652 = state_21620__$1;
(statearr_21634_21652[(2)] = null);

(statearr_21634_21652[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21621 === (10))){
var inst_21612 = (state_21620[(2)]);
var state_21620__$1 = state_21620;
var statearr_21635_21653 = state_21620__$1;
(statearr_21635_21653[(2)] = inst_21612);

(statearr_21635_21653[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21621 === (8))){
var inst_21602 = (state_21620[(7)]);
var state_21620__$1 = state_21620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21620__$1,(11),out,inst_21602);
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
});})(c__7303__auto___21643,out))
;
return ((function (switch__7288__auto__,c__7303__auto___21643,out){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_21639 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21639[(0)] = state_machine__7289__auto__);

(statearr_21639[(1)] = (1));

return statearr_21639;
});
var state_machine__7289__auto____1 = (function (state_21620){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_21620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e21640){if((e21640 instanceof Object)){
var ex__7292__auto__ = e21640;
var statearr_21641_21654 = state_21620;
(statearr_21641_21654[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21655 = state_21620;
state_21620 = G__21655;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_21620){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_21620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___21643,out))
})();
var state__7305__auto__ = (function (){var statearr_21642 = f__7304__auto__.call(null);
(statearr_21642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___21643);

return statearr_21642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___21643,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t21663 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21663 = (function (ch,f,map_LT_,meta21664){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21664 = meta21664;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21663.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21663.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t21663.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21663.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t21666 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21666 = (function (fn1,_,meta21664,map_LT_,f,ch,meta21667){
this.fn1 = fn1;
this._ = _;
this.meta21664 = meta21664;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21667 = meta21667;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21666.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21666.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t21666.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21656_SHARP_){
return f1.call(null,(((p1__21656_SHARP_ == null))?null:self__.f.call(null,p1__21656_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t21666.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21668){
var self__ = this;
var _21668__$1 = this;
return self__.meta21667;
});})(___$1))
;

cljs.core.async.t21666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21668,meta21667__$1){
var self__ = this;
var _21668__$1 = this;
return (new cljs.core.async.t21666(self__.fn1,self__._,self__.meta21664,self__.map_LT_,self__.f,self__.ch,meta21667__$1));
});})(___$1))
;

cljs.core.async.t21666.cljs$lang$type = true;

cljs.core.async.t21666.cljs$lang$ctorStr = "cljs.core.async/t21666";

cljs.core.async.t21666.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t21666");
});})(___$1))
;

cljs.core.async.__GT_t21666 = ((function (___$1){
return (function __GT_t21666(fn1__$1,___$2,meta21664__$1,map_LT___$1,f__$1,ch__$1,meta21667){
return (new cljs.core.async.t21666(fn1__$1,___$2,meta21664__$1,map_LT___$1,f__$1,ch__$1,meta21667));
});})(___$1))
;

}

return (new cljs.core.async.t21666(fn1,___$1,self__.meta21664,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3596__auto__ = ret;
if(cljs.core.truth_(and__3596__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3596__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t21663.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21663.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21663.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t21663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21665){
var self__ = this;
var _21665__$1 = this;
return self__.meta21664;
});

cljs.core.async.t21663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21665,meta21664__$1){
var self__ = this;
var _21665__$1 = this;
return (new cljs.core.async.t21663(self__.ch,self__.f,self__.map_LT_,meta21664__$1));
});

cljs.core.async.t21663.cljs$lang$type = true;

cljs.core.async.t21663.cljs$lang$ctorStr = "cljs.core.async/t21663";

cljs.core.async.t21663.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t21663");
});

cljs.core.async.__GT_t21663 = (function __GT_t21663(ch__$1,f__$1,map_LT___$1,meta21664){
return (new cljs.core.async.t21663(ch__$1,f__$1,map_LT___$1,meta21664));
});

}

return (new cljs.core.async.t21663(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t21672 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21672 = (function (ch,f,map_GT_,meta21673){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta21673 = meta21673;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21672.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21672.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t21672.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21672.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t21672.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21672.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21674){
var self__ = this;
var _21674__$1 = this;
return self__.meta21673;
});

cljs.core.async.t21672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21674,meta21673__$1){
var self__ = this;
var _21674__$1 = this;
return (new cljs.core.async.t21672(self__.ch,self__.f,self__.map_GT_,meta21673__$1));
});

cljs.core.async.t21672.cljs$lang$type = true;

cljs.core.async.t21672.cljs$lang$ctorStr = "cljs.core.async/t21672";

cljs.core.async.t21672.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t21672");
});

cljs.core.async.__GT_t21672 = (function __GT_t21672(ch__$1,f__$1,map_GT___$1,meta21673){
return (new cljs.core.async.t21672(ch__$1,f__$1,map_GT___$1,meta21673));
});

}

return (new cljs.core.async.t21672(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t21678 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21678 = (function (ch,p,filter_GT_,meta21679){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta21679 = meta21679;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21678.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21678.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t21678.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21678.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t21678.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21678.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21678.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t21678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21680){
var self__ = this;
var _21680__$1 = this;
return self__.meta21679;
});

cljs.core.async.t21678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21680,meta21679__$1){
var self__ = this;
var _21680__$1 = this;
return (new cljs.core.async.t21678(self__.ch,self__.p,self__.filter_GT_,meta21679__$1));
});

cljs.core.async.t21678.cljs$lang$type = true;

cljs.core.async.t21678.cljs$lang$ctorStr = "cljs.core.async/t21678";

cljs.core.async.t21678.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t21678");
});

cljs.core.async.__GT_t21678 = (function __GT_t21678(ch__$1,p__$1,filter_GT___$1,meta21679){
return (new cljs.core.async.t21678(ch__$1,p__$1,filter_GT___$1,meta21679));
});

}

return (new cljs.core.async.t21678(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7303__auto___21763 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___21763,out){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___21763,out){
return (function (state_21742){
var state_val_21743 = (state_21742[(1)]);
if((state_val_21743 === (7))){
var inst_21738 = (state_21742[(2)]);
var state_21742__$1 = state_21742;
var statearr_21744_21764 = state_21742__$1;
(statearr_21744_21764[(2)] = inst_21738);

(statearr_21744_21764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (1))){
var state_21742__$1 = state_21742;
var statearr_21745_21765 = state_21742__$1;
(statearr_21745_21765[(2)] = null);

(statearr_21745_21765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (4))){
var inst_21724 = (state_21742[(7)]);
var inst_21724__$1 = (state_21742[(2)]);
var inst_21725 = (inst_21724__$1 == null);
var state_21742__$1 = (function (){var statearr_21746 = state_21742;
(statearr_21746[(7)] = inst_21724__$1);

return statearr_21746;
})();
if(cljs.core.truth_(inst_21725)){
var statearr_21747_21766 = state_21742__$1;
(statearr_21747_21766[(1)] = (5));

} else {
var statearr_21748_21767 = state_21742__$1;
(statearr_21748_21767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (6))){
var inst_21724 = (state_21742[(7)]);
var inst_21729 = p.call(null,inst_21724);
var state_21742__$1 = state_21742;
if(cljs.core.truth_(inst_21729)){
var statearr_21749_21768 = state_21742__$1;
(statearr_21749_21768[(1)] = (8));

} else {
var statearr_21750_21769 = state_21742__$1;
(statearr_21750_21769[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (3))){
var inst_21740 = (state_21742[(2)]);
var state_21742__$1 = state_21742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21742__$1,inst_21740);
} else {
if((state_val_21743 === (2))){
var state_21742__$1 = state_21742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21742__$1,(4),ch);
} else {
if((state_val_21743 === (11))){
var inst_21732 = (state_21742[(2)]);
var state_21742__$1 = state_21742;
var statearr_21751_21770 = state_21742__$1;
(statearr_21751_21770[(2)] = inst_21732);

(statearr_21751_21770[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (9))){
var state_21742__$1 = state_21742;
var statearr_21752_21771 = state_21742__$1;
(statearr_21752_21771[(2)] = null);

(statearr_21752_21771[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (5))){
var inst_21727 = cljs.core.async.close_BANG_.call(null,out);
var state_21742__$1 = state_21742;
var statearr_21753_21772 = state_21742__$1;
(statearr_21753_21772[(2)] = inst_21727);

(statearr_21753_21772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (10))){
var inst_21735 = (state_21742[(2)]);
var state_21742__$1 = (function (){var statearr_21754 = state_21742;
(statearr_21754[(8)] = inst_21735);

return statearr_21754;
})();
var statearr_21755_21773 = state_21742__$1;
(statearr_21755_21773[(2)] = null);

(statearr_21755_21773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (8))){
var inst_21724 = (state_21742[(7)]);
var state_21742__$1 = state_21742;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21742__$1,(11),out,inst_21724);
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
});})(c__7303__auto___21763,out))
;
return ((function (switch__7288__auto__,c__7303__auto___21763,out){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_21759 = [null,null,null,null,null,null,null,null,null];
(statearr_21759[(0)] = state_machine__7289__auto__);

(statearr_21759[(1)] = (1));

return statearr_21759;
});
var state_machine__7289__auto____1 = (function (state_21742){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_21742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e21760){if((e21760 instanceof Object)){
var ex__7292__auto__ = e21760;
var statearr_21761_21774 = state_21742;
(statearr_21761_21774[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21775 = state_21742;
state_21742 = G__21775;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_21742){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_21742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___21763,out))
})();
var state__7305__auto__ = (function (){var statearr_21762 = f__7304__auto__.call(null);
(statearr_21762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___21763);

return statearr_21762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___21763,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__7303__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto__){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto__){
return (function (state_21941){
var state_val_21942 = (state_21941[(1)]);
if((state_val_21942 === (7))){
var inst_21937 = (state_21941[(2)]);
var state_21941__$1 = state_21941;
var statearr_21943_21984 = state_21941__$1;
(statearr_21943_21984[(2)] = inst_21937);

(statearr_21943_21984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21942 === (20))){
var inst_21907 = (state_21941[(7)]);
var inst_21918 = (state_21941[(2)]);
var inst_21919 = cljs.core.next.call(null,inst_21907);
var inst_21893 = inst_21919;
var inst_21894 = null;
var inst_21895 = (0);
var inst_21896 = (0);
var state_21941__$1 = (function (){var statearr_21944 = state_21941;
(statearr_21944[(8)] = inst_21893);

(statearr_21944[(9)] = inst_21894);

(statearr_21944[(10)] = inst_21896);

(statearr_21944[(11)] = inst_21918);

(statearr_21944[(12)] = inst_21895);

return statearr_21944;
})();
var statearr_21945_21985 = state_21941__$1;
(statearr_21945_21985[(2)] = null);

(statearr_21945_21985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21942 === (1))){
var state_21941__$1 = state_21941;
var statearr_21946_21986 = state_21941__$1;
(statearr_21946_21986[(2)] = null);

(statearr_21946_21986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21942 === (4))){
var inst_21882 = (state_21941[(13)]);
var inst_21882__$1 = (state_21941[(2)]);
var inst_21883 = (inst_21882__$1 == null);
var state_21941__$1 = (function (){var statearr_21947 = state_21941;
(statearr_21947[(13)] = inst_21882__$1);

return statearr_21947;
})();
if(cljs.core.truth_(inst_21883)){
var statearr_21948_21987 = state_21941__$1;
(statearr_21948_21987[(1)] = (5));

} else {
var statearr_21949_21988 = state_21941__$1;
(statearr_21949_21988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21942 === (15))){
var state_21941__$1 = state_21941;
var statearr_21953_21989 = state_21941__$1;
(statearr_21953_21989[(2)] = null);

(statearr_21953_21989[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21942 === (21))){
var state_21941__$1 = state_21941;
var statearr_21954_21990 = state_21941__$1;
(statearr_21954_21990[(2)] = null);

(statearr_21954_21990[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21942 === (13))){
var inst_21893 = (state_21941[(8)]);
var inst_21894 = (state_21941[(9)]);
var inst_21896 = (state_21941[(10)]);
var inst_21895 = (state_21941[(12)]);
var inst_21903 = (state_21941[(2)]);
var inst_21904 = (inst_21896 + (1));
var tmp21950 = inst_21893;
var tmp21951 = inst_21894;
var tmp21952 = inst_21895;
var inst_21893__$1 = tmp21950;
var inst_21894__$1 = tmp21951;
var inst_21895__$1 = tmp21952;
var inst_21896__$1 = inst_21904;
var state_21941__$1 = (function (){var statearr_21955 = state_21941;
(statearr_21955[(8)] = inst_21893__$1);

(statearr_21955[(9)] = inst_21894__$1);

(statearr_21955[(10)] = inst_21896__$1);

(statearr_21955[(14)] = inst_21903);

(statearr_21955[(12)] = inst_21895__$1);

return statearr_21955;
})();
var statearr_21956_21991 = state_21941__$1;
(statearr_21956_21991[(2)] = null);

(statearr_21956_21991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21942 === (22))){
var state_21941__$1 = state_21941;
var statearr_21957_21992 = state_21941__$1;
(statearr_21957_21992[(2)] = null);

(statearr_21957_21992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21942 === (6))){
var inst_21882 = (state_21941[(13)]);
var inst_21891 = f.call(null,inst_21882);
var inst_21892 = cljs.core.seq.call(null,inst_21891);
var inst_21893 = inst_21892;
var inst_21894 = null;
var inst_21895 = (0);
var inst_21896 = (0);
var state_21941__$1 = (function (){var statearr_21958 = state_21941;
(statearr_21958[(8)] = inst_21893);

(statearr_21958[(9)] = inst_21894);

(statearr_21958[(10)] = inst_21896);

(statearr_21958[(12)] = inst_21895);

return statearr_21958;
})();
var statearr_21959_21993 = state_21941__$1;
(statearr_21959_21993[(2)] = null);

(statearr_21959_21993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21942 === (17))){
var inst_21907 = (state_21941[(7)]);
var inst_21911 = cljs.core.chunk_first.call(null,inst_21907);
var inst_21912 = cljs.core.chunk_rest.call(null,inst_21907);
var inst_21913 = cljs.core.count.call(null,inst_21911);
var inst_21893 = inst_21912;
var inst_21894 = inst_21911;
var inst_21895 = inst_21913;
var inst_21896 = (0);
var state_21941__$1 = (function (){var statearr_21960 = state_21941;
(statearr_21960[(8)] = inst_21893);

(statearr_21960[(9)] = inst_21894);

(statearr_21960[(10)] = inst_21896);

(statearr_21960[(12)] = inst_21895);

return statearr_21960;
})();
var statearr_21961_21994 = state_21941__$1;
(statearr_21961_21994[(2)] = null);

(statearr_21961_21994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21942 === (3))){
var inst_21939 = (state_21941[(2)]);
var state_21941__$1 = state_21941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21941__$1,inst_21939);
} else {
if((state_val_21942 === (12))){
var inst_21927 = (state_21941[(2)]);
var state_21941__$1 = state_21941;
var statearr_21962_21995 = state_21941__$1;
(statearr_21962_21995[(2)] = inst_21927);

(statearr_21962_21995[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21942 === (2))){
var state_21941__$1 = state_21941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21941__$1,(4),in$);
} else {
if((state_val_21942 === (23))){
var inst_21935 = (state_21941[(2)]);
var state_21941__$1 = state_21941;
var statearr_21963_21996 = state_21941__$1;
(statearr_21963_21996[(2)] = inst_21935);

(statearr_21963_21996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21942 === (19))){
var inst_21922 = (state_21941[(2)]);
var state_21941__$1 = state_21941;
var statearr_21964_21997 = state_21941__$1;
(statearr_21964_21997[(2)] = inst_21922);

(statearr_21964_21997[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21942 === (11))){
var inst_21893 = (state_21941[(8)]);
var inst_21907 = (state_21941[(7)]);
var inst_21907__$1 = cljs.core.seq.call(null,inst_21893);
var state_21941__$1 = (function (){var statearr_21965 = state_21941;
(statearr_21965[(7)] = inst_21907__$1);

return statearr_21965;
})();
if(inst_21907__$1){
var statearr_21966_21998 = state_21941__$1;
(statearr_21966_21998[(1)] = (14));

} else {
var statearr_21967_21999 = state_21941__$1;
(statearr_21967_21999[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21942 === (9))){
var inst_21929 = (state_21941[(2)]);
var inst_21930 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21941__$1 = (function (){var statearr_21968 = state_21941;
(statearr_21968[(15)] = inst_21929);

return statearr_21968;
})();
if(cljs.core.truth_(inst_21930)){
var statearr_21969_22000 = state_21941__$1;
(statearr_21969_22000[(1)] = (21));

} else {
var statearr_21970_22001 = state_21941__$1;
(statearr_21970_22001[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21942 === (5))){
var inst_21885 = cljs.core.async.close_BANG_.call(null,out);
var state_21941__$1 = state_21941;
var statearr_21971_22002 = state_21941__$1;
(statearr_21971_22002[(2)] = inst_21885);

(statearr_21971_22002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21942 === (14))){
var inst_21907 = (state_21941[(7)]);
var inst_21909 = cljs.core.chunked_seq_QMARK_.call(null,inst_21907);
var state_21941__$1 = state_21941;
if(inst_21909){
var statearr_21972_22003 = state_21941__$1;
(statearr_21972_22003[(1)] = (17));

} else {
var statearr_21973_22004 = state_21941__$1;
(statearr_21973_22004[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21942 === (16))){
var inst_21925 = (state_21941[(2)]);
var state_21941__$1 = state_21941;
var statearr_21974_22005 = state_21941__$1;
(statearr_21974_22005[(2)] = inst_21925);

(statearr_21974_22005[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21942 === (10))){
var inst_21894 = (state_21941[(9)]);
var inst_21896 = (state_21941[(10)]);
var inst_21901 = cljs.core._nth.call(null,inst_21894,inst_21896);
var state_21941__$1 = state_21941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21941__$1,(13),out,inst_21901);
} else {
if((state_val_21942 === (18))){
var inst_21907 = (state_21941[(7)]);
var inst_21916 = cljs.core.first.call(null,inst_21907);
var state_21941__$1 = state_21941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21941__$1,(20),out,inst_21916);
} else {
if((state_val_21942 === (8))){
var inst_21896 = (state_21941[(10)]);
var inst_21895 = (state_21941[(12)]);
var inst_21898 = (inst_21896 < inst_21895);
var inst_21899 = inst_21898;
var state_21941__$1 = state_21941;
if(cljs.core.truth_(inst_21899)){
var statearr_21975_22006 = state_21941__$1;
(statearr_21975_22006[(1)] = (10));

} else {
var statearr_21976_22007 = state_21941__$1;
(statearr_21976_22007[(1)] = (11));

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
var statearr_21980 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21980[(0)] = state_machine__7289__auto__);

(statearr_21980[(1)] = (1));

return statearr_21980;
});
var state_machine__7289__auto____1 = (function (state_21941){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_21941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e21981){if((e21981 instanceof Object)){
var ex__7292__auto__ = e21981;
var statearr_21982_22008 = state_21941;
(statearr_21982_22008[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22009 = state_21941;
state_21941 = G__22009;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_21941){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_21941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto__))
})();
var state__7305__auto__ = (function (){var statearr_21983 = f__7304__auto__.call(null);
(statearr_21983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto__);

return statearr_21983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto__))
);

return c__7303__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7303__auto___22106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___22106,out){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___22106,out){
return (function (state_22081){
var state_val_22082 = (state_22081[(1)]);
if((state_val_22082 === (7))){
var inst_22076 = (state_22081[(2)]);
var state_22081__$1 = state_22081;
var statearr_22083_22107 = state_22081__$1;
(statearr_22083_22107[(2)] = inst_22076);

(statearr_22083_22107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (1))){
var inst_22058 = null;
var state_22081__$1 = (function (){var statearr_22084 = state_22081;
(statearr_22084[(7)] = inst_22058);

return statearr_22084;
})();
var statearr_22085_22108 = state_22081__$1;
(statearr_22085_22108[(2)] = null);

(statearr_22085_22108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (4))){
var inst_22061 = (state_22081[(8)]);
var inst_22061__$1 = (state_22081[(2)]);
var inst_22062 = (inst_22061__$1 == null);
var inst_22063 = cljs.core.not.call(null,inst_22062);
var state_22081__$1 = (function (){var statearr_22086 = state_22081;
(statearr_22086[(8)] = inst_22061__$1);

return statearr_22086;
})();
if(inst_22063){
var statearr_22087_22109 = state_22081__$1;
(statearr_22087_22109[(1)] = (5));

} else {
var statearr_22088_22110 = state_22081__$1;
(statearr_22088_22110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (6))){
var state_22081__$1 = state_22081;
var statearr_22089_22111 = state_22081__$1;
(statearr_22089_22111[(2)] = null);

(statearr_22089_22111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (3))){
var inst_22078 = (state_22081[(2)]);
var inst_22079 = cljs.core.async.close_BANG_.call(null,out);
var state_22081__$1 = (function (){var statearr_22090 = state_22081;
(statearr_22090[(9)] = inst_22078);

return statearr_22090;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22081__$1,inst_22079);
} else {
if((state_val_22082 === (2))){
var state_22081__$1 = state_22081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22081__$1,(4),ch);
} else {
if((state_val_22082 === (11))){
var inst_22061 = (state_22081[(8)]);
var inst_22070 = (state_22081[(2)]);
var inst_22058 = inst_22061;
var state_22081__$1 = (function (){var statearr_22091 = state_22081;
(statearr_22091[(7)] = inst_22058);

(statearr_22091[(10)] = inst_22070);

return statearr_22091;
})();
var statearr_22092_22112 = state_22081__$1;
(statearr_22092_22112[(2)] = null);

(statearr_22092_22112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (9))){
var inst_22061 = (state_22081[(8)]);
var state_22081__$1 = state_22081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22081__$1,(11),out,inst_22061);
} else {
if((state_val_22082 === (5))){
var inst_22058 = (state_22081[(7)]);
var inst_22061 = (state_22081[(8)]);
var inst_22065 = cljs.core._EQ_.call(null,inst_22061,inst_22058);
var state_22081__$1 = state_22081;
if(inst_22065){
var statearr_22094_22113 = state_22081__$1;
(statearr_22094_22113[(1)] = (8));

} else {
var statearr_22095_22114 = state_22081__$1;
(statearr_22095_22114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (10))){
var inst_22073 = (state_22081[(2)]);
var state_22081__$1 = state_22081;
var statearr_22096_22115 = state_22081__$1;
(statearr_22096_22115[(2)] = inst_22073);

(statearr_22096_22115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (8))){
var inst_22058 = (state_22081[(7)]);
var tmp22093 = inst_22058;
var inst_22058__$1 = tmp22093;
var state_22081__$1 = (function (){var statearr_22097 = state_22081;
(statearr_22097[(7)] = inst_22058__$1);

return statearr_22097;
})();
var statearr_22098_22116 = state_22081__$1;
(statearr_22098_22116[(2)] = null);

(statearr_22098_22116[(1)] = (2));


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
});})(c__7303__auto___22106,out))
;
return ((function (switch__7288__auto__,c__7303__auto___22106,out){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_22102 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22102[(0)] = state_machine__7289__auto__);

(statearr_22102[(1)] = (1));

return statearr_22102;
});
var state_machine__7289__auto____1 = (function (state_22081){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_22081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e22103){if((e22103 instanceof Object)){
var ex__7292__auto__ = e22103;
var statearr_22104_22117 = state_22081;
(statearr_22104_22117[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22118 = state_22081;
state_22081 = G__22118;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_22081){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_22081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___22106,out))
})();
var state__7305__auto__ = (function (){var statearr_22105 = f__7304__auto__.call(null);
(statearr_22105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___22106);

return statearr_22105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___22106,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7303__auto___22253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___22253,out){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___22253,out){
return (function (state_22223){
var state_val_22224 = (state_22223[(1)]);
if((state_val_22224 === (7))){
var inst_22219 = (state_22223[(2)]);
var state_22223__$1 = state_22223;
var statearr_22225_22254 = state_22223__$1;
(statearr_22225_22254[(2)] = inst_22219);

(statearr_22225_22254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22224 === (1))){
var inst_22186 = (new Array(n));
var inst_22187 = inst_22186;
var inst_22188 = (0);
var state_22223__$1 = (function (){var statearr_22226 = state_22223;
(statearr_22226[(7)] = inst_22188);

(statearr_22226[(8)] = inst_22187);

return statearr_22226;
})();
var statearr_22227_22255 = state_22223__$1;
(statearr_22227_22255[(2)] = null);

(statearr_22227_22255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22224 === (4))){
var inst_22191 = (state_22223[(9)]);
var inst_22191__$1 = (state_22223[(2)]);
var inst_22192 = (inst_22191__$1 == null);
var inst_22193 = cljs.core.not.call(null,inst_22192);
var state_22223__$1 = (function (){var statearr_22228 = state_22223;
(statearr_22228[(9)] = inst_22191__$1);

return statearr_22228;
})();
if(inst_22193){
var statearr_22229_22256 = state_22223__$1;
(statearr_22229_22256[(1)] = (5));

} else {
var statearr_22230_22257 = state_22223__$1;
(statearr_22230_22257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22224 === (15))){
var inst_22213 = (state_22223[(2)]);
var state_22223__$1 = state_22223;
var statearr_22231_22258 = state_22223__$1;
(statearr_22231_22258[(2)] = inst_22213);

(statearr_22231_22258[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22224 === (13))){
var state_22223__$1 = state_22223;
var statearr_22232_22259 = state_22223__$1;
(statearr_22232_22259[(2)] = null);

(statearr_22232_22259[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22224 === (6))){
var inst_22188 = (state_22223[(7)]);
var inst_22209 = (inst_22188 > (0));
var state_22223__$1 = state_22223;
if(cljs.core.truth_(inst_22209)){
var statearr_22233_22260 = state_22223__$1;
(statearr_22233_22260[(1)] = (12));

} else {
var statearr_22234_22261 = state_22223__$1;
(statearr_22234_22261[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22224 === (3))){
var inst_22221 = (state_22223[(2)]);
var state_22223__$1 = state_22223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22223__$1,inst_22221);
} else {
if((state_val_22224 === (12))){
var inst_22187 = (state_22223[(8)]);
var inst_22211 = cljs.core.vec.call(null,inst_22187);
var state_22223__$1 = state_22223;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22223__$1,(15),out,inst_22211);
} else {
if((state_val_22224 === (2))){
var state_22223__$1 = state_22223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22223__$1,(4),ch);
} else {
if((state_val_22224 === (11))){
var inst_22203 = (state_22223[(2)]);
var inst_22204 = (new Array(n));
var inst_22187 = inst_22204;
var inst_22188 = (0);
var state_22223__$1 = (function (){var statearr_22235 = state_22223;
(statearr_22235[(10)] = inst_22203);

(statearr_22235[(7)] = inst_22188);

(statearr_22235[(8)] = inst_22187);

return statearr_22235;
})();
var statearr_22236_22262 = state_22223__$1;
(statearr_22236_22262[(2)] = null);

(statearr_22236_22262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22224 === (9))){
var inst_22187 = (state_22223[(8)]);
var inst_22201 = cljs.core.vec.call(null,inst_22187);
var state_22223__$1 = state_22223;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22223__$1,(11),out,inst_22201);
} else {
if((state_val_22224 === (5))){
var inst_22196 = (state_22223[(11)]);
var inst_22191 = (state_22223[(9)]);
var inst_22188 = (state_22223[(7)]);
var inst_22187 = (state_22223[(8)]);
var inst_22195 = (inst_22187[inst_22188] = inst_22191);
var inst_22196__$1 = (inst_22188 + (1));
var inst_22197 = (inst_22196__$1 < n);
var state_22223__$1 = (function (){var statearr_22237 = state_22223;
(statearr_22237[(11)] = inst_22196__$1);

(statearr_22237[(12)] = inst_22195);

return statearr_22237;
})();
if(cljs.core.truth_(inst_22197)){
var statearr_22238_22263 = state_22223__$1;
(statearr_22238_22263[(1)] = (8));

} else {
var statearr_22239_22264 = state_22223__$1;
(statearr_22239_22264[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22224 === (14))){
var inst_22216 = (state_22223[(2)]);
var inst_22217 = cljs.core.async.close_BANG_.call(null,out);
var state_22223__$1 = (function (){var statearr_22241 = state_22223;
(statearr_22241[(13)] = inst_22216);

return statearr_22241;
})();
var statearr_22242_22265 = state_22223__$1;
(statearr_22242_22265[(2)] = inst_22217);

(statearr_22242_22265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22224 === (10))){
var inst_22207 = (state_22223[(2)]);
var state_22223__$1 = state_22223;
var statearr_22243_22266 = state_22223__$1;
(statearr_22243_22266[(2)] = inst_22207);

(statearr_22243_22266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22224 === (8))){
var inst_22196 = (state_22223[(11)]);
var inst_22187 = (state_22223[(8)]);
var tmp22240 = inst_22187;
var inst_22187__$1 = tmp22240;
var inst_22188 = inst_22196;
var state_22223__$1 = (function (){var statearr_22244 = state_22223;
(statearr_22244[(7)] = inst_22188);

(statearr_22244[(8)] = inst_22187__$1);

return statearr_22244;
})();
var statearr_22245_22267 = state_22223__$1;
(statearr_22245_22267[(2)] = null);

(statearr_22245_22267[(1)] = (2));


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
});})(c__7303__auto___22253,out))
;
return ((function (switch__7288__auto__,c__7303__auto___22253,out){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_22249 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22249[(0)] = state_machine__7289__auto__);

(statearr_22249[(1)] = (1));

return statearr_22249;
});
var state_machine__7289__auto____1 = (function (state_22223){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_22223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e22250){if((e22250 instanceof Object)){
var ex__7292__auto__ = e22250;
var statearr_22251_22268 = state_22223;
(statearr_22251_22268[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22269 = state_22223;
state_22223 = G__22269;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_22223){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_22223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___22253,out))
})();
var state__7305__auto__ = (function (){var statearr_22252 = f__7304__auto__.call(null);
(statearr_22252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___22253);

return statearr_22252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___22253,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7303__auto___22412 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___22412,out){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___22412,out){
return (function (state_22382){
var state_val_22383 = (state_22382[(1)]);
if((state_val_22383 === (7))){
var inst_22378 = (state_22382[(2)]);
var state_22382__$1 = state_22382;
var statearr_22384_22413 = state_22382__$1;
(statearr_22384_22413[(2)] = inst_22378);

(statearr_22384_22413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22383 === (1))){
var inst_22341 = [];
var inst_22342 = inst_22341;
var inst_22343 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22382__$1 = (function (){var statearr_22385 = state_22382;
(statearr_22385[(7)] = inst_22343);

(statearr_22385[(8)] = inst_22342);

return statearr_22385;
})();
var statearr_22386_22414 = state_22382__$1;
(statearr_22386_22414[(2)] = null);

(statearr_22386_22414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22383 === (4))){
var inst_22346 = (state_22382[(9)]);
var inst_22346__$1 = (state_22382[(2)]);
var inst_22347 = (inst_22346__$1 == null);
var inst_22348 = cljs.core.not.call(null,inst_22347);
var state_22382__$1 = (function (){var statearr_22387 = state_22382;
(statearr_22387[(9)] = inst_22346__$1);

return statearr_22387;
})();
if(inst_22348){
var statearr_22388_22415 = state_22382__$1;
(statearr_22388_22415[(1)] = (5));

} else {
var statearr_22389_22416 = state_22382__$1;
(statearr_22389_22416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22383 === (15))){
var inst_22372 = (state_22382[(2)]);
var state_22382__$1 = state_22382;
var statearr_22390_22417 = state_22382__$1;
(statearr_22390_22417[(2)] = inst_22372);

(statearr_22390_22417[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22383 === (13))){
var state_22382__$1 = state_22382;
var statearr_22391_22418 = state_22382__$1;
(statearr_22391_22418[(2)] = null);

(statearr_22391_22418[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22383 === (6))){
var inst_22342 = (state_22382[(8)]);
var inst_22367 = inst_22342.length;
var inst_22368 = (inst_22367 > (0));
var state_22382__$1 = state_22382;
if(cljs.core.truth_(inst_22368)){
var statearr_22392_22419 = state_22382__$1;
(statearr_22392_22419[(1)] = (12));

} else {
var statearr_22393_22420 = state_22382__$1;
(statearr_22393_22420[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22383 === (3))){
var inst_22380 = (state_22382[(2)]);
var state_22382__$1 = state_22382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22382__$1,inst_22380);
} else {
if((state_val_22383 === (12))){
var inst_22342 = (state_22382[(8)]);
var inst_22370 = cljs.core.vec.call(null,inst_22342);
var state_22382__$1 = state_22382;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22382__$1,(15),out,inst_22370);
} else {
if((state_val_22383 === (2))){
var state_22382__$1 = state_22382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22382__$1,(4),ch);
} else {
if((state_val_22383 === (11))){
var inst_22350 = (state_22382[(10)]);
var inst_22346 = (state_22382[(9)]);
var inst_22360 = (state_22382[(2)]);
var inst_22361 = [];
var inst_22362 = inst_22361.push(inst_22346);
var inst_22342 = inst_22361;
var inst_22343 = inst_22350;
var state_22382__$1 = (function (){var statearr_22394 = state_22382;
(statearr_22394[(11)] = inst_22362);

(statearr_22394[(7)] = inst_22343);

(statearr_22394[(12)] = inst_22360);

(statearr_22394[(8)] = inst_22342);

return statearr_22394;
})();
var statearr_22395_22421 = state_22382__$1;
(statearr_22395_22421[(2)] = null);

(statearr_22395_22421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22383 === (9))){
var inst_22342 = (state_22382[(8)]);
var inst_22358 = cljs.core.vec.call(null,inst_22342);
var state_22382__$1 = state_22382;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22382__$1,(11),out,inst_22358);
} else {
if((state_val_22383 === (5))){
var inst_22350 = (state_22382[(10)]);
var inst_22343 = (state_22382[(7)]);
var inst_22346 = (state_22382[(9)]);
var inst_22350__$1 = f.call(null,inst_22346);
var inst_22351 = cljs.core._EQ_.call(null,inst_22350__$1,inst_22343);
var inst_22352 = cljs.core.keyword_identical_QMARK_.call(null,inst_22343,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22353 = (inst_22351) || (inst_22352);
var state_22382__$1 = (function (){var statearr_22396 = state_22382;
(statearr_22396[(10)] = inst_22350__$1);

return statearr_22396;
})();
if(cljs.core.truth_(inst_22353)){
var statearr_22397_22422 = state_22382__$1;
(statearr_22397_22422[(1)] = (8));

} else {
var statearr_22398_22423 = state_22382__$1;
(statearr_22398_22423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22383 === (14))){
var inst_22375 = (state_22382[(2)]);
var inst_22376 = cljs.core.async.close_BANG_.call(null,out);
var state_22382__$1 = (function (){var statearr_22400 = state_22382;
(statearr_22400[(13)] = inst_22375);

return statearr_22400;
})();
var statearr_22401_22424 = state_22382__$1;
(statearr_22401_22424[(2)] = inst_22376);

(statearr_22401_22424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22383 === (10))){
var inst_22365 = (state_22382[(2)]);
var state_22382__$1 = state_22382;
var statearr_22402_22425 = state_22382__$1;
(statearr_22402_22425[(2)] = inst_22365);

(statearr_22402_22425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22383 === (8))){
var inst_22350 = (state_22382[(10)]);
var inst_22346 = (state_22382[(9)]);
var inst_22342 = (state_22382[(8)]);
var inst_22355 = inst_22342.push(inst_22346);
var tmp22399 = inst_22342;
var inst_22342__$1 = tmp22399;
var inst_22343 = inst_22350;
var state_22382__$1 = (function (){var statearr_22403 = state_22382;
(statearr_22403[(14)] = inst_22355);

(statearr_22403[(7)] = inst_22343);

(statearr_22403[(8)] = inst_22342__$1);

return statearr_22403;
})();
var statearr_22404_22426 = state_22382__$1;
(statearr_22404_22426[(2)] = null);

(statearr_22404_22426[(1)] = (2));


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
});})(c__7303__auto___22412,out))
;
return ((function (switch__7288__auto__,c__7303__auto___22412,out){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_22408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22408[(0)] = state_machine__7289__auto__);

(statearr_22408[(1)] = (1));

return statearr_22408;
});
var state_machine__7289__auto____1 = (function (state_22382){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_22382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e22409){if((e22409 instanceof Object)){
var ex__7292__auto__ = e22409;
var statearr_22410_22427 = state_22382;
(statearr_22410_22427[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22428 = state_22382;
state_22382 = G__22428;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_22382){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_22382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___22412,out))
})();
var state__7305__auto__ = (function (){var statearr_22411 = f__7304__auto__.call(null);
(statearr_22411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___22412);

return statearr_22411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___22412,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
