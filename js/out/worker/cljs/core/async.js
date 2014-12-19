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
if(typeof cljs.core.async.t20022 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20022 = (function (f,fn_handler,meta20023){
this.f = f;
this.fn_handler = fn_handler;
this.meta20023 = meta20023;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20022.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20022.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t20022.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t20022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20024){
var self__ = this;
var _20024__$1 = this;
return self__.meta20023;
});

cljs.core.async.t20022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20024,meta20023__$1){
var self__ = this;
var _20024__$1 = this;
return (new cljs.core.async.t20022(self__.f,self__.fn_handler,meta20023__$1));
});

cljs.core.async.t20022.cljs$lang$type = true;

cljs.core.async.t20022.cljs$lang$ctorStr = "cljs.core.async/t20022";

cljs.core.async.t20022.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t20022");
});

cljs.core.async.__GT_t20022 = (function __GT_t20022(f__$1,fn_handler__$1,meta20023){
return (new cljs.core.async.t20022(f__$1,fn_handler__$1,meta20023));
});

}

return (new cljs.core.async.t20022(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
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
var G__20026 = buff;
if(G__20026){
var bit__4284__auto__ = null;
if(cljs.core.truth_((function (){var or__3608__auto__ = bit__4284__auto__;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return G__20026.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__20026.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20026);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20026);
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
var val_20027 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20027);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20027,ret){
return (function (){
return fn1.call(null,val_20027);
});})(val_20027,ret))
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
var n__4490__auto___20028 = n;
var x_20029 = (0);
while(true){
if((x_20029 < n__4490__auto___20028)){
(a[x_20029] = (0));

var G__20030 = (x_20029 + (1));
x_20029 = G__20030;
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

var G__20031 = (i + (1));
i = G__20031;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t20035 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20035 = (function (flag,alt_flag,meta20036){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta20036 = meta20036;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20035.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20035.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t20035.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t20035.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20037){
var self__ = this;
var _20037__$1 = this;
return self__.meta20036;
});})(flag))
;

cljs.core.async.t20035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20037,meta20036__$1){
var self__ = this;
var _20037__$1 = this;
return (new cljs.core.async.t20035(self__.flag,self__.alt_flag,meta20036__$1));
});})(flag))
;

cljs.core.async.t20035.cljs$lang$type = true;

cljs.core.async.t20035.cljs$lang$ctorStr = "cljs.core.async/t20035";

cljs.core.async.t20035.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t20035");
});})(flag))
;

cljs.core.async.__GT_t20035 = ((function (flag){
return (function __GT_t20035(flag__$1,alt_flag__$1,meta20036){
return (new cljs.core.async.t20035(flag__$1,alt_flag__$1,meta20036));
});})(flag))
;

}

return (new cljs.core.async.t20035(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t20041 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20041 = (function (cb,flag,alt_handler,meta20042){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta20042 = meta20042;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20041.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20041.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t20041.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t20041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20043){
var self__ = this;
var _20043__$1 = this;
return self__.meta20042;
});

cljs.core.async.t20041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20043,meta20042__$1){
var self__ = this;
var _20043__$1 = this;
return (new cljs.core.async.t20041(self__.cb,self__.flag,self__.alt_handler,meta20042__$1));
});

cljs.core.async.t20041.cljs$lang$type = true;

cljs.core.async.t20041.cljs$lang$ctorStr = "cljs.core.async/t20041";

cljs.core.async.t20041.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t20041");
});

cljs.core.async.__GT_t20041 = (function __GT_t20041(cb__$1,flag__$1,alt_handler__$1,meta20042){
return (new cljs.core.async.t20041(cb__$1,flag__$1,alt_handler__$1,meta20042));
});

}

return (new cljs.core.async.t20041(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
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
return (function (p1__20044_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20044_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20045_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20045_SHARP_,port], null));
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
var G__20046 = (i + (1));
i = G__20046;
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
var alts_BANG___delegate = function (ports,p__20047){
var map__20049 = p__20047;
var map__20049__$1 = ((cljs.core.seq_QMARK_.call(null,map__20049))?cljs.core.apply.call(null,cljs.core.hash_map,map__20049):map__20049);
var opts = map__20049__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__20047 = null;
if (arguments.length > 1) {
  p__20047 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__20047);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__20050){
var ports = cljs.core.first(arglist__20050);
var p__20047 = cljs.core.rest(arglist__20050);
return alts_BANG___delegate(ports,p__20047);
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
var c__5809__auto___20145 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___20145){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___20145){
return (function (state_20121){
var state_val_20122 = (state_20121[(1)]);
if((state_val_20122 === (7))){
var inst_20117 = (state_20121[(2)]);
var state_20121__$1 = state_20121;
var statearr_20123_20146 = state_20121__$1;
(statearr_20123_20146[(2)] = inst_20117);

(statearr_20123_20146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20122 === (1))){
var state_20121__$1 = state_20121;
var statearr_20124_20147 = state_20121__$1;
(statearr_20124_20147[(2)] = null);

(statearr_20124_20147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20122 === (4))){
var inst_20100 = (state_20121[(7)]);
var inst_20100__$1 = (state_20121[(2)]);
var inst_20101 = (inst_20100__$1 == null);
var state_20121__$1 = (function (){var statearr_20125 = state_20121;
(statearr_20125[(7)] = inst_20100__$1);

return statearr_20125;
})();
if(cljs.core.truth_(inst_20101)){
var statearr_20126_20148 = state_20121__$1;
(statearr_20126_20148[(1)] = (5));

} else {
var statearr_20127_20149 = state_20121__$1;
(statearr_20127_20149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20122 === (13))){
var state_20121__$1 = state_20121;
var statearr_20128_20150 = state_20121__$1;
(statearr_20128_20150[(2)] = null);

(statearr_20128_20150[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20122 === (6))){
var inst_20100 = (state_20121[(7)]);
var state_20121__$1 = state_20121;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20121__$1,(11),to,inst_20100);
} else {
if((state_val_20122 === (3))){
var inst_20119 = (state_20121[(2)]);
var state_20121__$1 = state_20121;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20121__$1,inst_20119);
} else {
if((state_val_20122 === (12))){
var state_20121__$1 = state_20121;
var statearr_20129_20151 = state_20121__$1;
(statearr_20129_20151[(2)] = null);

(statearr_20129_20151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20122 === (2))){
var state_20121__$1 = state_20121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20121__$1,(4),from);
} else {
if((state_val_20122 === (11))){
var inst_20110 = (state_20121[(2)]);
var state_20121__$1 = state_20121;
if(cljs.core.truth_(inst_20110)){
var statearr_20130_20152 = state_20121__$1;
(statearr_20130_20152[(1)] = (12));

} else {
var statearr_20131_20153 = state_20121__$1;
(statearr_20131_20153[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20122 === (9))){
var state_20121__$1 = state_20121;
var statearr_20132_20154 = state_20121__$1;
(statearr_20132_20154[(2)] = null);

(statearr_20132_20154[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20122 === (5))){
var state_20121__$1 = state_20121;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20133_20155 = state_20121__$1;
(statearr_20133_20155[(1)] = (8));

} else {
var statearr_20134_20156 = state_20121__$1;
(statearr_20134_20156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20122 === (14))){
var inst_20115 = (state_20121[(2)]);
var state_20121__$1 = state_20121;
var statearr_20135_20157 = state_20121__$1;
(statearr_20135_20157[(2)] = inst_20115);

(statearr_20135_20157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20122 === (10))){
var inst_20107 = (state_20121[(2)]);
var state_20121__$1 = state_20121;
var statearr_20136_20158 = state_20121__$1;
(statearr_20136_20158[(2)] = inst_20107);

(statearr_20136_20158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20122 === (8))){
var inst_20104 = cljs.core.async.close_BANG_.call(null,to);
var state_20121__$1 = state_20121;
var statearr_20137_20159 = state_20121__$1;
(statearr_20137_20159[(2)] = inst_20104);

(statearr_20137_20159[(1)] = (10));


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
});})(c__5809__auto___20145))
;
return ((function (switch__5794__auto__,c__5809__auto___20145){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_20141 = [null,null,null,null,null,null,null,null];
(statearr_20141[(0)] = state_machine__5795__auto__);

(statearr_20141[(1)] = (1));

return statearr_20141;
});
var state_machine__5795__auto____1 = (function (state_20121){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_20121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e20142){if((e20142 instanceof Object)){
var ex__5798__auto__ = e20142;
var statearr_20143_20160 = state_20121;
(statearr_20143_20160[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20161 = state_20121;
state_20121 = G__20161;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_20121){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_20121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___20145))
})();
var state__5811__auto__ = (function (){var statearr_20144 = f__5810__auto__.call(null);
(statearr_20144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___20145);

return statearr_20144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___20145))
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
return (function (p__20345){
var vec__20346 = p__20345;
var v = cljs.core.nth.call(null,vec__20346,(0),null);
var p = cljs.core.nth.call(null,vec__20346,(1),null);
var job = vec__20346;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__5809__auto___20528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___20528,res,vec__20346,v,p,job,jobs,results){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___20528,res,vec__20346,v,p,job,jobs,results){
return (function (state_20351){
var state_val_20352 = (state_20351[(1)]);
if((state_val_20352 === (2))){
var inst_20348 = (state_20351[(2)]);
var inst_20349 = cljs.core.async.close_BANG_.call(null,res);
var state_20351__$1 = (function (){var statearr_20353 = state_20351;
(statearr_20353[(7)] = inst_20348);

return statearr_20353;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20351__$1,inst_20349);
} else {
if((state_val_20352 === (1))){
var state_20351__$1 = state_20351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20351__$1,(2),res,v);
} else {
return null;
}
}
});})(c__5809__auto___20528,res,vec__20346,v,p,job,jobs,results))
;
return ((function (switch__5794__auto__,c__5809__auto___20528,res,vec__20346,v,p,job,jobs,results){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_20357 = [null,null,null,null,null,null,null,null];
(statearr_20357[(0)] = state_machine__5795__auto__);

(statearr_20357[(1)] = (1));

return statearr_20357;
});
var state_machine__5795__auto____1 = (function (state_20351){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_20351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e20358){if((e20358 instanceof Object)){
var ex__5798__auto__ = e20358;
var statearr_20359_20529 = state_20351;
(statearr_20359_20529[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20530 = state_20351;
state_20351 = G__20530;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_20351){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_20351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___20528,res,vec__20346,v,p,job,jobs,results))
})();
var state__5811__auto__ = (function (){var statearr_20360 = f__5810__auto__.call(null);
(statearr_20360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___20528);

return statearr_20360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___20528,res,vec__20346,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20361){
var vec__20362 = p__20361;
var v = cljs.core.nth.call(null,vec__20362,(0),null);
var p = cljs.core.nth.call(null,vec__20362,(1),null);
var job = vec__20362;
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
var n__4490__auto___20531 = n;
var __20532 = (0);
while(true){
if((__20532 < n__4490__auto___20531)){
var G__20363_20533 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20363_20533) {
case "async":
var c__5809__auto___20535 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20532,c__5809__auto___20535,G__20363_20533,n__4490__auto___20531,jobs,results,process,async){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (__20532,c__5809__auto___20535,G__20363_20533,n__4490__auto___20531,jobs,results,process,async){
return (function (state_20376){
var state_val_20377 = (state_20376[(1)]);
if((state_val_20377 === (7))){
var inst_20372 = (state_20376[(2)]);
var state_20376__$1 = state_20376;
var statearr_20378_20536 = state_20376__$1;
(statearr_20378_20536[(2)] = inst_20372);

(statearr_20378_20536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20377 === (6))){
var state_20376__$1 = state_20376;
var statearr_20379_20537 = state_20376__$1;
(statearr_20379_20537[(2)] = null);

(statearr_20379_20537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20377 === (5))){
var state_20376__$1 = state_20376;
var statearr_20380_20538 = state_20376__$1;
(statearr_20380_20538[(2)] = null);

(statearr_20380_20538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20377 === (4))){
var inst_20366 = (state_20376[(2)]);
var inst_20367 = async.call(null,inst_20366);
var state_20376__$1 = state_20376;
if(cljs.core.truth_(inst_20367)){
var statearr_20381_20539 = state_20376__$1;
(statearr_20381_20539[(1)] = (5));

} else {
var statearr_20382_20540 = state_20376__$1;
(statearr_20382_20540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20377 === (3))){
var inst_20374 = (state_20376[(2)]);
var state_20376__$1 = state_20376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20376__$1,inst_20374);
} else {
if((state_val_20377 === (2))){
var state_20376__$1 = state_20376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20376__$1,(4),jobs);
} else {
if((state_val_20377 === (1))){
var state_20376__$1 = state_20376;
var statearr_20383_20541 = state_20376__$1;
(statearr_20383_20541[(2)] = null);

(statearr_20383_20541[(1)] = (2));


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
});})(__20532,c__5809__auto___20535,G__20363_20533,n__4490__auto___20531,jobs,results,process,async))
;
return ((function (__20532,switch__5794__auto__,c__5809__auto___20535,G__20363_20533,n__4490__auto___20531,jobs,results,process,async){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_20387 = [null,null,null,null,null,null,null];
(statearr_20387[(0)] = state_machine__5795__auto__);

(statearr_20387[(1)] = (1));

return statearr_20387;
});
var state_machine__5795__auto____1 = (function (state_20376){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_20376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e20388){if((e20388 instanceof Object)){
var ex__5798__auto__ = e20388;
var statearr_20389_20542 = state_20376;
(statearr_20389_20542[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20543 = state_20376;
state_20376 = G__20543;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_20376){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_20376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(__20532,switch__5794__auto__,c__5809__auto___20535,G__20363_20533,n__4490__auto___20531,jobs,results,process,async))
})();
var state__5811__auto__ = (function (){var statearr_20390 = f__5810__auto__.call(null);
(statearr_20390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___20535);

return statearr_20390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(__20532,c__5809__auto___20535,G__20363_20533,n__4490__auto___20531,jobs,results,process,async))
);


break;
case "compute":
var c__5809__auto___20544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20532,c__5809__auto___20544,G__20363_20533,n__4490__auto___20531,jobs,results,process,async){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (__20532,c__5809__auto___20544,G__20363_20533,n__4490__auto___20531,jobs,results,process,async){
return (function (state_20403){
var state_val_20404 = (state_20403[(1)]);
if((state_val_20404 === (7))){
var inst_20399 = (state_20403[(2)]);
var state_20403__$1 = state_20403;
var statearr_20405_20545 = state_20403__$1;
(statearr_20405_20545[(2)] = inst_20399);

(statearr_20405_20545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20404 === (6))){
var state_20403__$1 = state_20403;
var statearr_20406_20546 = state_20403__$1;
(statearr_20406_20546[(2)] = null);

(statearr_20406_20546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20404 === (5))){
var state_20403__$1 = state_20403;
var statearr_20407_20547 = state_20403__$1;
(statearr_20407_20547[(2)] = null);

(statearr_20407_20547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20404 === (4))){
var inst_20393 = (state_20403[(2)]);
var inst_20394 = process.call(null,inst_20393);
var state_20403__$1 = state_20403;
if(cljs.core.truth_(inst_20394)){
var statearr_20408_20548 = state_20403__$1;
(statearr_20408_20548[(1)] = (5));

} else {
var statearr_20409_20549 = state_20403__$1;
(statearr_20409_20549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20404 === (3))){
var inst_20401 = (state_20403[(2)]);
var state_20403__$1 = state_20403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20403__$1,inst_20401);
} else {
if((state_val_20404 === (2))){
var state_20403__$1 = state_20403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20403__$1,(4),jobs);
} else {
if((state_val_20404 === (1))){
var state_20403__$1 = state_20403;
var statearr_20410_20550 = state_20403__$1;
(statearr_20410_20550[(2)] = null);

(statearr_20410_20550[(1)] = (2));


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
});})(__20532,c__5809__auto___20544,G__20363_20533,n__4490__auto___20531,jobs,results,process,async))
;
return ((function (__20532,switch__5794__auto__,c__5809__auto___20544,G__20363_20533,n__4490__auto___20531,jobs,results,process,async){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_20414 = [null,null,null,null,null,null,null];
(statearr_20414[(0)] = state_machine__5795__auto__);

(statearr_20414[(1)] = (1));

return statearr_20414;
});
var state_machine__5795__auto____1 = (function (state_20403){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_20403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e20415){if((e20415 instanceof Object)){
var ex__5798__auto__ = e20415;
var statearr_20416_20551 = state_20403;
(statearr_20416_20551[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20552 = state_20403;
state_20403 = G__20552;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_20403){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_20403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(__20532,switch__5794__auto__,c__5809__auto___20544,G__20363_20533,n__4490__auto___20531,jobs,results,process,async))
})();
var state__5811__auto__ = (function (){var statearr_20417 = f__5810__auto__.call(null);
(statearr_20417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___20544);

return statearr_20417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(__20532,c__5809__auto___20544,G__20363_20533,n__4490__auto___20531,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20553 = (__20532 + (1));
__20532 = G__20553;
continue;
} else {
}
break;
}

var c__5809__auto___20554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___20554,jobs,results,process,async){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___20554,jobs,results,process,async){
return (function (state_20439){
var state_val_20440 = (state_20439[(1)]);
if((state_val_20440 === (9))){
var inst_20432 = (state_20439[(2)]);
var state_20439__$1 = (function (){var statearr_20441 = state_20439;
(statearr_20441[(7)] = inst_20432);

return statearr_20441;
})();
var statearr_20442_20555 = state_20439__$1;
(statearr_20442_20555[(2)] = null);

(statearr_20442_20555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20440 === (8))){
var inst_20425 = (state_20439[(8)]);
var inst_20430 = (state_20439[(2)]);
var state_20439__$1 = (function (){var statearr_20443 = state_20439;
(statearr_20443[(9)] = inst_20430);

return statearr_20443;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20439__$1,(9),results,inst_20425);
} else {
if((state_val_20440 === (7))){
var inst_20435 = (state_20439[(2)]);
var state_20439__$1 = state_20439;
var statearr_20444_20556 = state_20439__$1;
(statearr_20444_20556[(2)] = inst_20435);

(statearr_20444_20556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20440 === (6))){
var inst_20420 = (state_20439[(10)]);
var inst_20425 = (state_20439[(8)]);
var inst_20425__$1 = cljs.core.async.chan.call(null,(1));
var inst_20426 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20427 = [inst_20420,inst_20425__$1];
var inst_20428 = (new cljs.core.PersistentVector(null,2,(5),inst_20426,inst_20427,null));
var state_20439__$1 = (function (){var statearr_20445 = state_20439;
(statearr_20445[(8)] = inst_20425__$1);

return statearr_20445;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20439__$1,(8),jobs,inst_20428);
} else {
if((state_val_20440 === (5))){
var inst_20423 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20439__$1 = state_20439;
var statearr_20446_20557 = state_20439__$1;
(statearr_20446_20557[(2)] = inst_20423);

(statearr_20446_20557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20440 === (4))){
var inst_20420 = (state_20439[(10)]);
var inst_20420__$1 = (state_20439[(2)]);
var inst_20421 = (inst_20420__$1 == null);
var state_20439__$1 = (function (){var statearr_20447 = state_20439;
(statearr_20447[(10)] = inst_20420__$1);

return statearr_20447;
})();
if(cljs.core.truth_(inst_20421)){
var statearr_20448_20558 = state_20439__$1;
(statearr_20448_20558[(1)] = (5));

} else {
var statearr_20449_20559 = state_20439__$1;
(statearr_20449_20559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20440 === (3))){
var inst_20437 = (state_20439[(2)]);
var state_20439__$1 = state_20439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20439__$1,inst_20437);
} else {
if((state_val_20440 === (2))){
var state_20439__$1 = state_20439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20439__$1,(4),from);
} else {
if((state_val_20440 === (1))){
var state_20439__$1 = state_20439;
var statearr_20450_20560 = state_20439__$1;
(statearr_20450_20560[(2)] = null);

(statearr_20450_20560[(1)] = (2));


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
});})(c__5809__auto___20554,jobs,results,process,async))
;
return ((function (switch__5794__auto__,c__5809__auto___20554,jobs,results,process,async){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_20454 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20454[(0)] = state_machine__5795__auto__);

(statearr_20454[(1)] = (1));

return statearr_20454;
});
var state_machine__5795__auto____1 = (function (state_20439){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_20439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e20455){if((e20455 instanceof Object)){
var ex__5798__auto__ = e20455;
var statearr_20456_20561 = state_20439;
(statearr_20456_20561[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20562 = state_20439;
state_20439 = G__20562;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_20439){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_20439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___20554,jobs,results,process,async))
})();
var state__5811__auto__ = (function (){var statearr_20457 = f__5810__auto__.call(null);
(statearr_20457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___20554);

return statearr_20457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___20554,jobs,results,process,async))
);


var c__5809__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto__,jobs,results,process,async){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto__,jobs,results,process,async){
return (function (state_20495){
var state_val_20496 = (state_20495[(1)]);
if((state_val_20496 === (7))){
var inst_20491 = (state_20495[(2)]);
var state_20495__$1 = state_20495;
var statearr_20497_20563 = state_20495__$1;
(statearr_20497_20563[(2)] = inst_20491);

(statearr_20497_20563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20496 === (20))){
var state_20495__$1 = state_20495;
var statearr_20498_20564 = state_20495__$1;
(statearr_20498_20564[(2)] = null);

(statearr_20498_20564[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20496 === (1))){
var state_20495__$1 = state_20495;
var statearr_20499_20565 = state_20495__$1;
(statearr_20499_20565[(2)] = null);

(statearr_20499_20565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20496 === (4))){
var inst_20460 = (state_20495[(7)]);
var inst_20460__$1 = (state_20495[(2)]);
var inst_20461 = (inst_20460__$1 == null);
var state_20495__$1 = (function (){var statearr_20500 = state_20495;
(statearr_20500[(7)] = inst_20460__$1);

return statearr_20500;
})();
if(cljs.core.truth_(inst_20461)){
var statearr_20501_20566 = state_20495__$1;
(statearr_20501_20566[(1)] = (5));

} else {
var statearr_20502_20567 = state_20495__$1;
(statearr_20502_20567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20496 === (15))){
var inst_20473 = (state_20495[(8)]);
var state_20495__$1 = state_20495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20495__$1,(18),to,inst_20473);
} else {
if((state_val_20496 === (21))){
var inst_20486 = (state_20495[(2)]);
var state_20495__$1 = state_20495;
var statearr_20503_20568 = state_20495__$1;
(statearr_20503_20568[(2)] = inst_20486);

(statearr_20503_20568[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20496 === (13))){
var inst_20488 = (state_20495[(2)]);
var state_20495__$1 = (function (){var statearr_20504 = state_20495;
(statearr_20504[(9)] = inst_20488);

return statearr_20504;
})();
var statearr_20505_20569 = state_20495__$1;
(statearr_20505_20569[(2)] = null);

(statearr_20505_20569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20496 === (6))){
var inst_20460 = (state_20495[(7)]);
var state_20495__$1 = state_20495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20495__$1,(11),inst_20460);
} else {
if((state_val_20496 === (17))){
var inst_20481 = (state_20495[(2)]);
var state_20495__$1 = state_20495;
if(cljs.core.truth_(inst_20481)){
var statearr_20506_20570 = state_20495__$1;
(statearr_20506_20570[(1)] = (19));

} else {
var statearr_20507_20571 = state_20495__$1;
(statearr_20507_20571[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20496 === (3))){
var inst_20493 = (state_20495[(2)]);
var state_20495__$1 = state_20495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20495__$1,inst_20493);
} else {
if((state_val_20496 === (12))){
var inst_20470 = (state_20495[(10)]);
var state_20495__$1 = state_20495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20495__$1,(14),inst_20470);
} else {
if((state_val_20496 === (2))){
var state_20495__$1 = state_20495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20495__$1,(4),results);
} else {
if((state_val_20496 === (19))){
var state_20495__$1 = state_20495;
var statearr_20508_20572 = state_20495__$1;
(statearr_20508_20572[(2)] = null);

(statearr_20508_20572[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20496 === (11))){
var inst_20470 = (state_20495[(2)]);
var state_20495__$1 = (function (){var statearr_20509 = state_20495;
(statearr_20509[(10)] = inst_20470);

return statearr_20509;
})();
var statearr_20510_20573 = state_20495__$1;
(statearr_20510_20573[(2)] = null);

(statearr_20510_20573[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20496 === (9))){
var state_20495__$1 = state_20495;
var statearr_20511_20574 = state_20495__$1;
(statearr_20511_20574[(2)] = null);

(statearr_20511_20574[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20496 === (5))){
var state_20495__$1 = state_20495;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20512_20575 = state_20495__$1;
(statearr_20512_20575[(1)] = (8));

} else {
var statearr_20513_20576 = state_20495__$1;
(statearr_20513_20576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20496 === (14))){
var inst_20473 = (state_20495[(8)]);
var inst_20475 = (state_20495[(11)]);
var inst_20473__$1 = (state_20495[(2)]);
var inst_20474 = (inst_20473__$1 == null);
var inst_20475__$1 = cljs.core.not.call(null,inst_20474);
var state_20495__$1 = (function (){var statearr_20514 = state_20495;
(statearr_20514[(8)] = inst_20473__$1);

(statearr_20514[(11)] = inst_20475__$1);

return statearr_20514;
})();
if(inst_20475__$1){
var statearr_20515_20577 = state_20495__$1;
(statearr_20515_20577[(1)] = (15));

} else {
var statearr_20516_20578 = state_20495__$1;
(statearr_20516_20578[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20496 === (16))){
var inst_20475 = (state_20495[(11)]);
var state_20495__$1 = state_20495;
var statearr_20517_20579 = state_20495__$1;
(statearr_20517_20579[(2)] = inst_20475);

(statearr_20517_20579[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20496 === (10))){
var inst_20467 = (state_20495[(2)]);
var state_20495__$1 = state_20495;
var statearr_20518_20580 = state_20495__$1;
(statearr_20518_20580[(2)] = inst_20467);

(statearr_20518_20580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20496 === (18))){
var inst_20478 = (state_20495[(2)]);
var state_20495__$1 = state_20495;
var statearr_20519_20581 = state_20495__$1;
(statearr_20519_20581[(2)] = inst_20478);

(statearr_20519_20581[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20496 === (8))){
var inst_20464 = cljs.core.async.close_BANG_.call(null,to);
var state_20495__$1 = state_20495;
var statearr_20520_20582 = state_20495__$1;
(statearr_20520_20582[(2)] = inst_20464);

(statearr_20520_20582[(1)] = (10));


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
});})(c__5809__auto__,jobs,results,process,async))
;
return ((function (switch__5794__auto__,c__5809__auto__,jobs,results,process,async){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_20524 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20524[(0)] = state_machine__5795__auto__);

(statearr_20524[(1)] = (1));

return statearr_20524;
});
var state_machine__5795__auto____1 = (function (state_20495){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_20495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e20525){if((e20525 instanceof Object)){
var ex__5798__auto__ = e20525;
var statearr_20526_20583 = state_20495;
(statearr_20526_20583[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20584 = state_20495;
state_20495 = G__20584;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_20495){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_20495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__,jobs,results,process,async))
})();
var state__5811__auto__ = (function (){var statearr_20527 = f__5810__auto__.call(null);
(statearr_20527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_20527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto__,jobs,results,process,async))
);

return c__5809__auto__;
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
var c__5809__auto___20685 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___20685,tc,fc){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___20685,tc,fc){
return (function (state_20660){
var state_val_20661 = (state_20660[(1)]);
if((state_val_20661 === (7))){
var inst_20656 = (state_20660[(2)]);
var state_20660__$1 = state_20660;
var statearr_20662_20686 = state_20660__$1;
(statearr_20662_20686[(2)] = inst_20656);

(statearr_20662_20686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20661 === (1))){
var state_20660__$1 = state_20660;
var statearr_20663_20687 = state_20660__$1;
(statearr_20663_20687[(2)] = null);

(statearr_20663_20687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20661 === (4))){
var inst_20637 = (state_20660[(7)]);
var inst_20637__$1 = (state_20660[(2)]);
var inst_20638 = (inst_20637__$1 == null);
var state_20660__$1 = (function (){var statearr_20664 = state_20660;
(statearr_20664[(7)] = inst_20637__$1);

return statearr_20664;
})();
if(cljs.core.truth_(inst_20638)){
var statearr_20665_20688 = state_20660__$1;
(statearr_20665_20688[(1)] = (5));

} else {
var statearr_20666_20689 = state_20660__$1;
(statearr_20666_20689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20661 === (13))){
var state_20660__$1 = state_20660;
var statearr_20667_20690 = state_20660__$1;
(statearr_20667_20690[(2)] = null);

(statearr_20667_20690[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20661 === (6))){
var inst_20637 = (state_20660[(7)]);
var inst_20643 = p.call(null,inst_20637);
var state_20660__$1 = state_20660;
if(cljs.core.truth_(inst_20643)){
var statearr_20668_20691 = state_20660__$1;
(statearr_20668_20691[(1)] = (9));

} else {
var statearr_20669_20692 = state_20660__$1;
(statearr_20669_20692[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20661 === (3))){
var inst_20658 = (state_20660[(2)]);
var state_20660__$1 = state_20660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20660__$1,inst_20658);
} else {
if((state_val_20661 === (12))){
var state_20660__$1 = state_20660;
var statearr_20670_20693 = state_20660__$1;
(statearr_20670_20693[(2)] = null);

(statearr_20670_20693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20661 === (2))){
var state_20660__$1 = state_20660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20660__$1,(4),ch);
} else {
if((state_val_20661 === (11))){
var inst_20637 = (state_20660[(7)]);
var inst_20647 = (state_20660[(2)]);
var state_20660__$1 = state_20660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20660__$1,(8),inst_20647,inst_20637);
} else {
if((state_val_20661 === (9))){
var state_20660__$1 = state_20660;
var statearr_20671_20694 = state_20660__$1;
(statearr_20671_20694[(2)] = tc);

(statearr_20671_20694[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20661 === (5))){
var inst_20640 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20641 = cljs.core.async.close_BANG_.call(null,fc);
var state_20660__$1 = (function (){var statearr_20672 = state_20660;
(statearr_20672[(8)] = inst_20640);

return statearr_20672;
})();
var statearr_20673_20695 = state_20660__$1;
(statearr_20673_20695[(2)] = inst_20641);

(statearr_20673_20695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20661 === (14))){
var inst_20654 = (state_20660[(2)]);
var state_20660__$1 = state_20660;
var statearr_20674_20696 = state_20660__$1;
(statearr_20674_20696[(2)] = inst_20654);

(statearr_20674_20696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20661 === (10))){
var state_20660__$1 = state_20660;
var statearr_20675_20697 = state_20660__$1;
(statearr_20675_20697[(2)] = fc);

(statearr_20675_20697[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20661 === (8))){
var inst_20649 = (state_20660[(2)]);
var state_20660__$1 = state_20660;
if(cljs.core.truth_(inst_20649)){
var statearr_20676_20698 = state_20660__$1;
(statearr_20676_20698[(1)] = (12));

} else {
var statearr_20677_20699 = state_20660__$1;
(statearr_20677_20699[(1)] = (13));

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
});})(c__5809__auto___20685,tc,fc))
;
return ((function (switch__5794__auto__,c__5809__auto___20685,tc,fc){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_20681 = [null,null,null,null,null,null,null,null,null];
(statearr_20681[(0)] = state_machine__5795__auto__);

(statearr_20681[(1)] = (1));

return statearr_20681;
});
var state_machine__5795__auto____1 = (function (state_20660){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_20660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e20682){if((e20682 instanceof Object)){
var ex__5798__auto__ = e20682;
var statearr_20683_20700 = state_20660;
(statearr_20683_20700[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20701 = state_20660;
state_20660 = G__20701;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_20660){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_20660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___20685,tc,fc))
})();
var state__5811__auto__ = (function (){var statearr_20684 = f__5810__auto__.call(null);
(statearr_20684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___20685);

return statearr_20684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___20685,tc,fc))
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
var c__5809__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto__){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto__){
return (function (state_20748){
var state_val_20749 = (state_20748[(1)]);
if((state_val_20749 === (7))){
var inst_20744 = (state_20748[(2)]);
var state_20748__$1 = state_20748;
var statearr_20750_20766 = state_20748__$1;
(statearr_20750_20766[(2)] = inst_20744);

(statearr_20750_20766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20749 === (6))){
var inst_20734 = (state_20748[(7)]);
var inst_20737 = (state_20748[(8)]);
var inst_20741 = f.call(null,inst_20734,inst_20737);
var inst_20734__$1 = inst_20741;
var state_20748__$1 = (function (){var statearr_20751 = state_20748;
(statearr_20751[(7)] = inst_20734__$1);

return statearr_20751;
})();
var statearr_20752_20767 = state_20748__$1;
(statearr_20752_20767[(2)] = null);

(statearr_20752_20767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20749 === (5))){
var inst_20734 = (state_20748[(7)]);
var state_20748__$1 = state_20748;
var statearr_20753_20768 = state_20748__$1;
(statearr_20753_20768[(2)] = inst_20734);

(statearr_20753_20768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20749 === (4))){
var inst_20737 = (state_20748[(8)]);
var inst_20737__$1 = (state_20748[(2)]);
var inst_20738 = (inst_20737__$1 == null);
var state_20748__$1 = (function (){var statearr_20754 = state_20748;
(statearr_20754[(8)] = inst_20737__$1);

return statearr_20754;
})();
if(cljs.core.truth_(inst_20738)){
var statearr_20755_20769 = state_20748__$1;
(statearr_20755_20769[(1)] = (5));

} else {
var statearr_20756_20770 = state_20748__$1;
(statearr_20756_20770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20749 === (3))){
var inst_20746 = (state_20748[(2)]);
var state_20748__$1 = state_20748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20748__$1,inst_20746);
} else {
if((state_val_20749 === (2))){
var state_20748__$1 = state_20748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20748__$1,(4),ch);
} else {
if((state_val_20749 === (1))){
var inst_20734 = init;
var state_20748__$1 = (function (){var statearr_20757 = state_20748;
(statearr_20757[(7)] = inst_20734);

return statearr_20757;
})();
var statearr_20758_20771 = state_20748__$1;
(statearr_20758_20771[(2)] = null);

(statearr_20758_20771[(1)] = (2));


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
});})(c__5809__auto__))
;
return ((function (switch__5794__auto__,c__5809__auto__){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_20762 = [null,null,null,null,null,null,null,null,null];
(statearr_20762[(0)] = state_machine__5795__auto__);

(statearr_20762[(1)] = (1));

return statearr_20762;
});
var state_machine__5795__auto____1 = (function (state_20748){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_20748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e20763){if((e20763 instanceof Object)){
var ex__5798__auto__ = e20763;
var statearr_20764_20772 = state_20748;
(statearr_20764_20772[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20773 = state_20748;
state_20748 = G__20773;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_20748){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_20748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_20765 = f__5810__auto__.call(null);
(statearr_20765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_20765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto__))
);

return c__5809__auto__;
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
var c__5809__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto__){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto__){
return (function (state_20847){
var state_val_20848 = (state_20847[(1)]);
if((state_val_20848 === (7))){
var inst_20829 = (state_20847[(2)]);
var state_20847__$1 = state_20847;
var statearr_20849_20872 = state_20847__$1;
(statearr_20849_20872[(2)] = inst_20829);

(statearr_20849_20872[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20848 === (1))){
var inst_20823 = cljs.core.seq.call(null,coll);
var inst_20824 = inst_20823;
var state_20847__$1 = (function (){var statearr_20850 = state_20847;
(statearr_20850[(7)] = inst_20824);

return statearr_20850;
})();
var statearr_20851_20873 = state_20847__$1;
(statearr_20851_20873[(2)] = null);

(statearr_20851_20873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20848 === (4))){
var inst_20824 = (state_20847[(7)]);
var inst_20827 = cljs.core.first.call(null,inst_20824);
var state_20847__$1 = state_20847;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20847__$1,(7),ch,inst_20827);
} else {
if((state_val_20848 === (13))){
var inst_20841 = (state_20847[(2)]);
var state_20847__$1 = state_20847;
var statearr_20852_20874 = state_20847__$1;
(statearr_20852_20874[(2)] = inst_20841);

(statearr_20852_20874[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20848 === (6))){
var inst_20832 = (state_20847[(2)]);
var state_20847__$1 = state_20847;
if(cljs.core.truth_(inst_20832)){
var statearr_20853_20875 = state_20847__$1;
(statearr_20853_20875[(1)] = (8));

} else {
var statearr_20854_20876 = state_20847__$1;
(statearr_20854_20876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20848 === (3))){
var inst_20845 = (state_20847[(2)]);
var state_20847__$1 = state_20847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20847__$1,inst_20845);
} else {
if((state_val_20848 === (12))){
var state_20847__$1 = state_20847;
var statearr_20855_20877 = state_20847__$1;
(statearr_20855_20877[(2)] = null);

(statearr_20855_20877[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20848 === (2))){
var inst_20824 = (state_20847[(7)]);
var state_20847__$1 = state_20847;
if(cljs.core.truth_(inst_20824)){
var statearr_20856_20878 = state_20847__$1;
(statearr_20856_20878[(1)] = (4));

} else {
var statearr_20857_20879 = state_20847__$1;
(statearr_20857_20879[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20848 === (11))){
var inst_20838 = cljs.core.async.close_BANG_.call(null,ch);
var state_20847__$1 = state_20847;
var statearr_20858_20880 = state_20847__$1;
(statearr_20858_20880[(2)] = inst_20838);

(statearr_20858_20880[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20848 === (9))){
var state_20847__$1 = state_20847;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20859_20881 = state_20847__$1;
(statearr_20859_20881[(1)] = (11));

} else {
var statearr_20860_20882 = state_20847__$1;
(statearr_20860_20882[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20848 === (5))){
var inst_20824 = (state_20847[(7)]);
var state_20847__$1 = state_20847;
var statearr_20861_20883 = state_20847__$1;
(statearr_20861_20883[(2)] = inst_20824);

(statearr_20861_20883[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20848 === (10))){
var inst_20843 = (state_20847[(2)]);
var state_20847__$1 = state_20847;
var statearr_20862_20884 = state_20847__$1;
(statearr_20862_20884[(2)] = inst_20843);

(statearr_20862_20884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20848 === (8))){
var inst_20824 = (state_20847[(7)]);
var inst_20834 = cljs.core.next.call(null,inst_20824);
var inst_20824__$1 = inst_20834;
var state_20847__$1 = (function (){var statearr_20863 = state_20847;
(statearr_20863[(7)] = inst_20824__$1);

return statearr_20863;
})();
var statearr_20864_20885 = state_20847__$1;
(statearr_20864_20885[(2)] = null);

(statearr_20864_20885[(1)] = (2));


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
});})(c__5809__auto__))
;
return ((function (switch__5794__auto__,c__5809__auto__){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_20868 = [null,null,null,null,null,null,null,null];
(statearr_20868[(0)] = state_machine__5795__auto__);

(statearr_20868[(1)] = (1));

return statearr_20868;
});
var state_machine__5795__auto____1 = (function (state_20847){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_20847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e20869){if((e20869 instanceof Object)){
var ex__5798__auto__ = e20869;
var statearr_20870_20886 = state_20847;
(statearr_20870_20886[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20887 = state_20847;
state_20847 = G__20887;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_20847){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_20847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_20871 = f__5810__auto__.call(null);
(statearr_20871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_20871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto__))
);

return c__5809__auto__;
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

cljs.core.async.Mux = (function (){var obj20889 = {};
return obj20889;
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


cljs.core.async.Mult = (function (){var obj20891 = {};
return obj20891;
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
if(typeof cljs.core.async.t21113 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21113 = (function (cs,ch,mult,meta21114){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta21114 = meta21114;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21113.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t21113.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t21113.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t21113.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t21113.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21113.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t21113.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21115){
var self__ = this;
var _21115__$1 = this;
return self__.meta21114;
});})(cs))
;

cljs.core.async.t21113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21115,meta21114__$1){
var self__ = this;
var _21115__$1 = this;
return (new cljs.core.async.t21113(self__.cs,self__.ch,self__.mult,meta21114__$1));
});})(cs))
;

cljs.core.async.t21113.cljs$lang$type = true;

cljs.core.async.t21113.cljs$lang$ctorStr = "cljs.core.async/t21113";

cljs.core.async.t21113.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t21113");
});})(cs))
;

cljs.core.async.__GT_t21113 = ((function (cs){
return (function __GT_t21113(cs__$1,ch__$1,mult__$1,meta21114){
return (new cljs.core.async.t21113(cs__$1,ch__$1,mult__$1,meta21114));
});})(cs))
;

}

return (new cljs.core.async.t21113(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
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
var c__5809__auto___21334 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___21334,cs,m,dchan,dctr,done){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___21334,cs,m,dchan,dctr,done){
return (function (state_21246){
var state_val_21247 = (state_21246[(1)]);
if((state_val_21247 === (7))){
var inst_21242 = (state_21246[(2)]);
var state_21246__$1 = state_21246;
var statearr_21248_21335 = state_21246__$1;
(statearr_21248_21335[(2)] = inst_21242);

(statearr_21248_21335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (20))){
var inst_21147 = (state_21246[(7)]);
var inst_21157 = cljs.core.first.call(null,inst_21147);
var inst_21158 = cljs.core.nth.call(null,inst_21157,(0),null);
var inst_21159 = cljs.core.nth.call(null,inst_21157,(1),null);
var state_21246__$1 = (function (){var statearr_21249 = state_21246;
(statearr_21249[(8)] = inst_21158);

return statearr_21249;
})();
if(cljs.core.truth_(inst_21159)){
var statearr_21250_21336 = state_21246__$1;
(statearr_21250_21336[(1)] = (22));

} else {
var statearr_21251_21337 = state_21246__$1;
(statearr_21251_21337[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (27))){
var inst_21118 = (state_21246[(9)]);
var inst_21189 = (state_21246[(10)]);
var inst_21187 = (state_21246[(11)]);
var inst_21194 = (state_21246[(12)]);
var inst_21194__$1 = cljs.core._nth.call(null,inst_21187,inst_21189);
var inst_21195 = cljs.core.async.put_BANG_.call(null,inst_21194__$1,inst_21118,done);
var state_21246__$1 = (function (){var statearr_21252 = state_21246;
(statearr_21252[(12)] = inst_21194__$1);

return statearr_21252;
})();
if(cljs.core.truth_(inst_21195)){
var statearr_21253_21338 = state_21246__$1;
(statearr_21253_21338[(1)] = (30));

} else {
var statearr_21254_21339 = state_21246__$1;
(statearr_21254_21339[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (1))){
var state_21246__$1 = state_21246;
var statearr_21255_21340 = state_21246__$1;
(statearr_21255_21340[(2)] = null);

(statearr_21255_21340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (24))){
var inst_21147 = (state_21246[(7)]);
var inst_21164 = (state_21246[(2)]);
var inst_21165 = cljs.core.next.call(null,inst_21147);
var inst_21127 = inst_21165;
var inst_21128 = null;
var inst_21129 = (0);
var inst_21130 = (0);
var state_21246__$1 = (function (){var statearr_21256 = state_21246;
(statearr_21256[(13)] = inst_21129);

(statearr_21256[(14)] = inst_21127);

(statearr_21256[(15)] = inst_21164);

(statearr_21256[(16)] = inst_21130);

(statearr_21256[(17)] = inst_21128);

return statearr_21256;
})();
var statearr_21257_21341 = state_21246__$1;
(statearr_21257_21341[(2)] = null);

(statearr_21257_21341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (39))){
var state_21246__$1 = state_21246;
var statearr_21261_21342 = state_21246__$1;
(statearr_21261_21342[(2)] = null);

(statearr_21261_21342[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (4))){
var inst_21118 = (state_21246[(9)]);
var inst_21118__$1 = (state_21246[(2)]);
var inst_21119 = (inst_21118__$1 == null);
var state_21246__$1 = (function (){var statearr_21262 = state_21246;
(statearr_21262[(9)] = inst_21118__$1);

return statearr_21262;
})();
if(cljs.core.truth_(inst_21119)){
var statearr_21263_21343 = state_21246__$1;
(statearr_21263_21343[(1)] = (5));

} else {
var statearr_21264_21344 = state_21246__$1;
(statearr_21264_21344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (15))){
var inst_21129 = (state_21246[(13)]);
var inst_21127 = (state_21246[(14)]);
var inst_21130 = (state_21246[(16)]);
var inst_21128 = (state_21246[(17)]);
var inst_21143 = (state_21246[(2)]);
var inst_21144 = (inst_21130 + (1));
var tmp21258 = inst_21129;
var tmp21259 = inst_21127;
var tmp21260 = inst_21128;
var inst_21127__$1 = tmp21259;
var inst_21128__$1 = tmp21260;
var inst_21129__$1 = tmp21258;
var inst_21130__$1 = inst_21144;
var state_21246__$1 = (function (){var statearr_21265 = state_21246;
(statearr_21265[(13)] = inst_21129__$1);

(statearr_21265[(14)] = inst_21127__$1);

(statearr_21265[(18)] = inst_21143);

(statearr_21265[(16)] = inst_21130__$1);

(statearr_21265[(17)] = inst_21128__$1);

return statearr_21265;
})();
var statearr_21266_21345 = state_21246__$1;
(statearr_21266_21345[(2)] = null);

(statearr_21266_21345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (21))){
var inst_21168 = (state_21246[(2)]);
var state_21246__$1 = state_21246;
var statearr_21270_21346 = state_21246__$1;
(statearr_21270_21346[(2)] = inst_21168);

(statearr_21270_21346[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (31))){
var inst_21194 = (state_21246[(12)]);
var inst_21198 = done.call(null,null);
var inst_21199 = cljs.core.async.untap_STAR_.call(null,m,inst_21194);
var state_21246__$1 = (function (){var statearr_21271 = state_21246;
(statearr_21271[(19)] = inst_21198);

return statearr_21271;
})();
var statearr_21272_21347 = state_21246__$1;
(statearr_21272_21347[(2)] = inst_21199);

(statearr_21272_21347[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (32))){
var inst_21186 = (state_21246[(20)]);
var inst_21188 = (state_21246[(21)]);
var inst_21189 = (state_21246[(10)]);
var inst_21187 = (state_21246[(11)]);
var inst_21201 = (state_21246[(2)]);
var inst_21202 = (inst_21189 + (1));
var tmp21267 = inst_21186;
var tmp21268 = inst_21188;
var tmp21269 = inst_21187;
var inst_21186__$1 = tmp21267;
var inst_21187__$1 = tmp21269;
var inst_21188__$1 = tmp21268;
var inst_21189__$1 = inst_21202;
var state_21246__$1 = (function (){var statearr_21273 = state_21246;
(statearr_21273[(22)] = inst_21201);

(statearr_21273[(20)] = inst_21186__$1);

(statearr_21273[(21)] = inst_21188__$1);

(statearr_21273[(10)] = inst_21189__$1);

(statearr_21273[(11)] = inst_21187__$1);

return statearr_21273;
})();
var statearr_21274_21348 = state_21246__$1;
(statearr_21274_21348[(2)] = null);

(statearr_21274_21348[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (40))){
var inst_21214 = (state_21246[(23)]);
var inst_21218 = done.call(null,null);
var inst_21219 = cljs.core.async.untap_STAR_.call(null,m,inst_21214);
var state_21246__$1 = (function (){var statearr_21275 = state_21246;
(statearr_21275[(24)] = inst_21218);

return statearr_21275;
})();
var statearr_21276_21349 = state_21246__$1;
(statearr_21276_21349[(2)] = inst_21219);

(statearr_21276_21349[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (33))){
var inst_21205 = (state_21246[(25)]);
var inst_21207 = cljs.core.chunked_seq_QMARK_.call(null,inst_21205);
var state_21246__$1 = state_21246;
if(inst_21207){
var statearr_21277_21350 = state_21246__$1;
(statearr_21277_21350[(1)] = (36));

} else {
var statearr_21278_21351 = state_21246__$1;
(statearr_21278_21351[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (13))){
var inst_21137 = (state_21246[(26)]);
var inst_21140 = cljs.core.async.close_BANG_.call(null,inst_21137);
var state_21246__$1 = state_21246;
var statearr_21279_21352 = state_21246__$1;
(statearr_21279_21352[(2)] = inst_21140);

(statearr_21279_21352[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (22))){
var inst_21158 = (state_21246[(8)]);
var inst_21161 = cljs.core.async.close_BANG_.call(null,inst_21158);
var state_21246__$1 = state_21246;
var statearr_21280_21353 = state_21246__$1;
(statearr_21280_21353[(2)] = inst_21161);

(statearr_21280_21353[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (36))){
var inst_21205 = (state_21246[(25)]);
var inst_21209 = cljs.core.chunk_first.call(null,inst_21205);
var inst_21210 = cljs.core.chunk_rest.call(null,inst_21205);
var inst_21211 = cljs.core.count.call(null,inst_21209);
var inst_21186 = inst_21210;
var inst_21187 = inst_21209;
var inst_21188 = inst_21211;
var inst_21189 = (0);
var state_21246__$1 = (function (){var statearr_21281 = state_21246;
(statearr_21281[(20)] = inst_21186);

(statearr_21281[(21)] = inst_21188);

(statearr_21281[(10)] = inst_21189);

(statearr_21281[(11)] = inst_21187);

return statearr_21281;
})();
var statearr_21282_21354 = state_21246__$1;
(statearr_21282_21354[(2)] = null);

(statearr_21282_21354[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (41))){
var inst_21205 = (state_21246[(25)]);
var inst_21221 = (state_21246[(2)]);
var inst_21222 = cljs.core.next.call(null,inst_21205);
var inst_21186 = inst_21222;
var inst_21187 = null;
var inst_21188 = (0);
var inst_21189 = (0);
var state_21246__$1 = (function (){var statearr_21283 = state_21246;
(statearr_21283[(27)] = inst_21221);

(statearr_21283[(20)] = inst_21186);

(statearr_21283[(21)] = inst_21188);

(statearr_21283[(10)] = inst_21189);

(statearr_21283[(11)] = inst_21187);

return statearr_21283;
})();
var statearr_21284_21355 = state_21246__$1;
(statearr_21284_21355[(2)] = null);

(statearr_21284_21355[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (43))){
var state_21246__$1 = state_21246;
var statearr_21285_21356 = state_21246__$1;
(statearr_21285_21356[(2)] = null);

(statearr_21285_21356[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (29))){
var inst_21230 = (state_21246[(2)]);
var state_21246__$1 = state_21246;
var statearr_21286_21357 = state_21246__$1;
(statearr_21286_21357[(2)] = inst_21230);

(statearr_21286_21357[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (44))){
var inst_21239 = (state_21246[(2)]);
var state_21246__$1 = (function (){var statearr_21287 = state_21246;
(statearr_21287[(28)] = inst_21239);

return statearr_21287;
})();
var statearr_21288_21358 = state_21246__$1;
(statearr_21288_21358[(2)] = null);

(statearr_21288_21358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (6))){
var inst_21178 = (state_21246[(29)]);
var inst_21177 = cljs.core.deref.call(null,cs);
var inst_21178__$1 = cljs.core.keys.call(null,inst_21177);
var inst_21179 = cljs.core.count.call(null,inst_21178__$1);
var inst_21180 = cljs.core.reset_BANG_.call(null,dctr,inst_21179);
var inst_21185 = cljs.core.seq.call(null,inst_21178__$1);
var inst_21186 = inst_21185;
var inst_21187 = null;
var inst_21188 = (0);
var inst_21189 = (0);
var state_21246__$1 = (function (){var statearr_21289 = state_21246;
(statearr_21289[(29)] = inst_21178__$1);

(statearr_21289[(20)] = inst_21186);

(statearr_21289[(30)] = inst_21180);

(statearr_21289[(21)] = inst_21188);

(statearr_21289[(10)] = inst_21189);

(statearr_21289[(11)] = inst_21187);

return statearr_21289;
})();
var statearr_21290_21359 = state_21246__$1;
(statearr_21290_21359[(2)] = null);

(statearr_21290_21359[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (28))){
var inst_21205 = (state_21246[(25)]);
var inst_21186 = (state_21246[(20)]);
var inst_21205__$1 = cljs.core.seq.call(null,inst_21186);
var state_21246__$1 = (function (){var statearr_21291 = state_21246;
(statearr_21291[(25)] = inst_21205__$1);

return statearr_21291;
})();
if(inst_21205__$1){
var statearr_21292_21360 = state_21246__$1;
(statearr_21292_21360[(1)] = (33));

} else {
var statearr_21293_21361 = state_21246__$1;
(statearr_21293_21361[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (25))){
var inst_21188 = (state_21246[(21)]);
var inst_21189 = (state_21246[(10)]);
var inst_21191 = (inst_21189 < inst_21188);
var inst_21192 = inst_21191;
var state_21246__$1 = state_21246;
if(cljs.core.truth_(inst_21192)){
var statearr_21294_21362 = state_21246__$1;
(statearr_21294_21362[(1)] = (27));

} else {
var statearr_21295_21363 = state_21246__$1;
(statearr_21295_21363[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (34))){
var state_21246__$1 = state_21246;
var statearr_21296_21364 = state_21246__$1;
(statearr_21296_21364[(2)] = null);

(statearr_21296_21364[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (17))){
var state_21246__$1 = state_21246;
var statearr_21297_21365 = state_21246__$1;
(statearr_21297_21365[(2)] = null);

(statearr_21297_21365[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (3))){
var inst_21244 = (state_21246[(2)]);
var state_21246__$1 = state_21246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21246__$1,inst_21244);
} else {
if((state_val_21247 === (12))){
var inst_21173 = (state_21246[(2)]);
var state_21246__$1 = state_21246;
var statearr_21298_21366 = state_21246__$1;
(statearr_21298_21366[(2)] = inst_21173);

(statearr_21298_21366[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (2))){
var state_21246__$1 = state_21246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21246__$1,(4),ch);
} else {
if((state_val_21247 === (23))){
var state_21246__$1 = state_21246;
var statearr_21299_21367 = state_21246__$1;
(statearr_21299_21367[(2)] = null);

(statearr_21299_21367[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (35))){
var inst_21228 = (state_21246[(2)]);
var state_21246__$1 = state_21246;
var statearr_21300_21368 = state_21246__$1;
(statearr_21300_21368[(2)] = inst_21228);

(statearr_21300_21368[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (19))){
var inst_21147 = (state_21246[(7)]);
var inst_21151 = cljs.core.chunk_first.call(null,inst_21147);
var inst_21152 = cljs.core.chunk_rest.call(null,inst_21147);
var inst_21153 = cljs.core.count.call(null,inst_21151);
var inst_21127 = inst_21152;
var inst_21128 = inst_21151;
var inst_21129 = inst_21153;
var inst_21130 = (0);
var state_21246__$1 = (function (){var statearr_21301 = state_21246;
(statearr_21301[(13)] = inst_21129);

(statearr_21301[(14)] = inst_21127);

(statearr_21301[(16)] = inst_21130);

(statearr_21301[(17)] = inst_21128);

return statearr_21301;
})();
var statearr_21302_21369 = state_21246__$1;
(statearr_21302_21369[(2)] = null);

(statearr_21302_21369[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (11))){
var inst_21127 = (state_21246[(14)]);
var inst_21147 = (state_21246[(7)]);
var inst_21147__$1 = cljs.core.seq.call(null,inst_21127);
var state_21246__$1 = (function (){var statearr_21303 = state_21246;
(statearr_21303[(7)] = inst_21147__$1);

return statearr_21303;
})();
if(inst_21147__$1){
var statearr_21304_21370 = state_21246__$1;
(statearr_21304_21370[(1)] = (16));

} else {
var statearr_21305_21371 = state_21246__$1;
(statearr_21305_21371[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (9))){
var inst_21175 = (state_21246[(2)]);
var state_21246__$1 = state_21246;
var statearr_21306_21372 = state_21246__$1;
(statearr_21306_21372[(2)] = inst_21175);

(statearr_21306_21372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (5))){
var inst_21125 = cljs.core.deref.call(null,cs);
var inst_21126 = cljs.core.seq.call(null,inst_21125);
var inst_21127 = inst_21126;
var inst_21128 = null;
var inst_21129 = (0);
var inst_21130 = (0);
var state_21246__$1 = (function (){var statearr_21307 = state_21246;
(statearr_21307[(13)] = inst_21129);

(statearr_21307[(14)] = inst_21127);

(statearr_21307[(16)] = inst_21130);

(statearr_21307[(17)] = inst_21128);

return statearr_21307;
})();
var statearr_21308_21373 = state_21246__$1;
(statearr_21308_21373[(2)] = null);

(statearr_21308_21373[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (14))){
var state_21246__$1 = state_21246;
var statearr_21309_21374 = state_21246__$1;
(statearr_21309_21374[(2)] = null);

(statearr_21309_21374[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (45))){
var inst_21236 = (state_21246[(2)]);
var state_21246__$1 = state_21246;
var statearr_21310_21375 = state_21246__$1;
(statearr_21310_21375[(2)] = inst_21236);

(statearr_21310_21375[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (26))){
var inst_21178 = (state_21246[(29)]);
var inst_21232 = (state_21246[(2)]);
var inst_21233 = cljs.core.seq.call(null,inst_21178);
var state_21246__$1 = (function (){var statearr_21311 = state_21246;
(statearr_21311[(31)] = inst_21232);

return statearr_21311;
})();
if(inst_21233){
var statearr_21312_21376 = state_21246__$1;
(statearr_21312_21376[(1)] = (42));

} else {
var statearr_21313_21377 = state_21246__$1;
(statearr_21313_21377[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (16))){
var inst_21147 = (state_21246[(7)]);
var inst_21149 = cljs.core.chunked_seq_QMARK_.call(null,inst_21147);
var state_21246__$1 = state_21246;
if(inst_21149){
var statearr_21314_21378 = state_21246__$1;
(statearr_21314_21378[(1)] = (19));

} else {
var statearr_21315_21379 = state_21246__$1;
(statearr_21315_21379[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (38))){
var inst_21225 = (state_21246[(2)]);
var state_21246__$1 = state_21246;
var statearr_21316_21380 = state_21246__$1;
(statearr_21316_21380[(2)] = inst_21225);

(statearr_21316_21380[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (30))){
var state_21246__$1 = state_21246;
var statearr_21317_21381 = state_21246__$1;
(statearr_21317_21381[(2)] = null);

(statearr_21317_21381[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (10))){
var inst_21130 = (state_21246[(16)]);
var inst_21128 = (state_21246[(17)]);
var inst_21136 = cljs.core._nth.call(null,inst_21128,inst_21130);
var inst_21137 = cljs.core.nth.call(null,inst_21136,(0),null);
var inst_21138 = cljs.core.nth.call(null,inst_21136,(1),null);
var state_21246__$1 = (function (){var statearr_21318 = state_21246;
(statearr_21318[(26)] = inst_21137);

return statearr_21318;
})();
if(cljs.core.truth_(inst_21138)){
var statearr_21319_21382 = state_21246__$1;
(statearr_21319_21382[(1)] = (13));

} else {
var statearr_21320_21383 = state_21246__$1;
(statearr_21320_21383[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (18))){
var inst_21171 = (state_21246[(2)]);
var state_21246__$1 = state_21246;
var statearr_21321_21384 = state_21246__$1;
(statearr_21321_21384[(2)] = inst_21171);

(statearr_21321_21384[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (42))){
var state_21246__$1 = state_21246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21246__$1,(45),dchan);
} else {
if((state_val_21247 === (37))){
var inst_21205 = (state_21246[(25)]);
var inst_21214 = (state_21246[(23)]);
var inst_21118 = (state_21246[(9)]);
var inst_21214__$1 = cljs.core.first.call(null,inst_21205);
var inst_21215 = cljs.core.async.put_BANG_.call(null,inst_21214__$1,inst_21118,done);
var state_21246__$1 = (function (){var statearr_21322 = state_21246;
(statearr_21322[(23)] = inst_21214__$1);

return statearr_21322;
})();
if(cljs.core.truth_(inst_21215)){
var statearr_21323_21385 = state_21246__$1;
(statearr_21323_21385[(1)] = (39));

} else {
var statearr_21324_21386 = state_21246__$1;
(statearr_21324_21386[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (8))){
var inst_21129 = (state_21246[(13)]);
var inst_21130 = (state_21246[(16)]);
var inst_21132 = (inst_21130 < inst_21129);
var inst_21133 = inst_21132;
var state_21246__$1 = state_21246;
if(cljs.core.truth_(inst_21133)){
var statearr_21325_21387 = state_21246__$1;
(statearr_21325_21387[(1)] = (10));

} else {
var statearr_21326_21388 = state_21246__$1;
(statearr_21326_21388[(1)] = (11));

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
});})(c__5809__auto___21334,cs,m,dchan,dctr,done))
;
return ((function (switch__5794__auto__,c__5809__auto___21334,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_21330 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21330[(0)] = state_machine__5795__auto__);

(statearr_21330[(1)] = (1));

return statearr_21330;
});
var state_machine__5795__auto____1 = (function (state_21246){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_21246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e21331){if((e21331 instanceof Object)){
var ex__5798__auto__ = e21331;
var statearr_21332_21389 = state_21246;
(statearr_21332_21389[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21390 = state_21246;
state_21246 = G__21390;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_21246){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_21246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___21334,cs,m,dchan,dctr,done))
})();
var state__5811__auto__ = (function (){var statearr_21333 = f__5810__auto__.call(null);
(statearr_21333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___21334);

return statearr_21333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___21334,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj21392 = {};
return obj21392;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__21393){
var map__21398 = p__21393;
var map__21398__$1 = ((cljs.core.seq_QMARK_.call(null,map__21398))?cljs.core.apply.call(null,cljs.core.hash_map,map__21398):map__21398);
var opts = map__21398__$1;
var statearr_21399_21402 = state;
(statearr_21399_21402[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__21398,map__21398__$1,opts){
return (function (val){
var statearr_21400_21403 = state;
(statearr_21400_21403[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21398,map__21398__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_21401_21404 = state;
(statearr_21401_21404[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__21393 = null;
if (arguments.length > 3) {
  p__21393 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__21393);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__21405){
var state = cljs.core.first(arglist__21405);
arglist__21405 = cljs.core.next(arglist__21405);
var cont_block = cljs.core.first(arglist__21405);
arglist__21405 = cljs.core.next(arglist__21405);
var ports = cljs.core.first(arglist__21405);
var p__21393 = cljs.core.rest(arglist__21405);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__21393);
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
if(typeof cljs.core.async.t21525 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21525 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21526){
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
this.meta21526 = meta21526;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21525.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t21525.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21525.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21525.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21525.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21525.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t21525.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21525.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21525.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21527){
var self__ = this;
var _21527__$1 = this;
return self__.meta21526;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21527,meta21526__$1){
var self__ = this;
var _21527__$1 = this;
return (new cljs.core.async.t21525(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21526__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21525.cljs$lang$type = true;

cljs.core.async.t21525.cljs$lang$ctorStr = "cljs.core.async/t21525";

cljs.core.async.t21525.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t21525");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t21525 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t21525(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21526){
return (new cljs.core.async.t21525(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21526));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t21525(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
})()
;
var c__5809__auto___21644 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___21644,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___21644,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21597){
var state_val_21598 = (state_21597[(1)]);
if((state_val_21598 === (7))){
var inst_21541 = (state_21597[(7)]);
var inst_21546 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21541);
var state_21597__$1 = state_21597;
var statearr_21599_21645 = state_21597__$1;
(statearr_21599_21645[(2)] = inst_21546);

(statearr_21599_21645[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (20))){
var inst_21556 = (state_21597[(8)]);
var state_21597__$1 = state_21597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21597__$1,(23),out,inst_21556);
} else {
if((state_val_21598 === (1))){
var inst_21531 = (state_21597[(9)]);
var inst_21531__$1 = calc_state.call(null);
var inst_21532 = cljs.core.seq_QMARK_.call(null,inst_21531__$1);
var state_21597__$1 = (function (){var statearr_21600 = state_21597;
(statearr_21600[(9)] = inst_21531__$1);

return statearr_21600;
})();
if(inst_21532){
var statearr_21601_21646 = state_21597__$1;
(statearr_21601_21646[(1)] = (2));

} else {
var statearr_21602_21647 = state_21597__$1;
(statearr_21602_21647[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (24))){
var inst_21549 = (state_21597[(10)]);
var inst_21541 = inst_21549;
var state_21597__$1 = (function (){var statearr_21603 = state_21597;
(statearr_21603[(7)] = inst_21541);

return statearr_21603;
})();
var statearr_21604_21648 = state_21597__$1;
(statearr_21604_21648[(2)] = null);

(statearr_21604_21648[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (4))){
var inst_21531 = (state_21597[(9)]);
var inst_21537 = (state_21597[(2)]);
var inst_21538 = cljs.core.get.call(null,inst_21537,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21539 = cljs.core.get.call(null,inst_21537,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21540 = cljs.core.get.call(null,inst_21537,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21541 = inst_21531;
var state_21597__$1 = (function (){var statearr_21605 = state_21597;
(statearr_21605[(11)] = inst_21538);

(statearr_21605[(12)] = inst_21540);

(statearr_21605[(7)] = inst_21541);

(statearr_21605[(13)] = inst_21539);

return statearr_21605;
})();
var statearr_21606_21649 = state_21597__$1;
(statearr_21606_21649[(2)] = null);

(statearr_21606_21649[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (15))){
var state_21597__$1 = state_21597;
var statearr_21607_21650 = state_21597__$1;
(statearr_21607_21650[(2)] = null);

(statearr_21607_21650[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (21))){
var inst_21549 = (state_21597[(10)]);
var inst_21541 = inst_21549;
var state_21597__$1 = (function (){var statearr_21608 = state_21597;
(statearr_21608[(7)] = inst_21541);

return statearr_21608;
})();
var statearr_21609_21651 = state_21597__$1;
(statearr_21609_21651[(2)] = null);

(statearr_21609_21651[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (13))){
var inst_21593 = (state_21597[(2)]);
var state_21597__$1 = state_21597;
var statearr_21610_21652 = state_21597__$1;
(statearr_21610_21652[(2)] = inst_21593);

(statearr_21610_21652[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (22))){
var inst_21591 = (state_21597[(2)]);
var state_21597__$1 = state_21597;
var statearr_21611_21653 = state_21597__$1;
(statearr_21611_21653[(2)] = inst_21591);

(statearr_21611_21653[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (6))){
var inst_21595 = (state_21597[(2)]);
var state_21597__$1 = state_21597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21597__$1,inst_21595);
} else {
if((state_val_21598 === (25))){
var state_21597__$1 = state_21597;
var statearr_21612_21654 = state_21597__$1;
(statearr_21612_21654[(2)] = null);

(statearr_21612_21654[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (17))){
var inst_21571 = (state_21597[(14)]);
var state_21597__$1 = state_21597;
var statearr_21613_21655 = state_21597__$1;
(statearr_21613_21655[(2)] = inst_21571);

(statearr_21613_21655[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (3))){
var inst_21531 = (state_21597[(9)]);
var state_21597__$1 = state_21597;
var statearr_21614_21656 = state_21597__$1;
(statearr_21614_21656[(2)] = inst_21531);

(statearr_21614_21656[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (12))){
var inst_21571 = (state_21597[(14)]);
var inst_21552 = (state_21597[(15)]);
var inst_21557 = (state_21597[(16)]);
var inst_21571__$1 = inst_21552.call(null,inst_21557);
var state_21597__$1 = (function (){var statearr_21615 = state_21597;
(statearr_21615[(14)] = inst_21571__$1);

return statearr_21615;
})();
if(cljs.core.truth_(inst_21571__$1)){
var statearr_21616_21657 = state_21597__$1;
(statearr_21616_21657[(1)] = (17));

} else {
var statearr_21617_21658 = state_21597__$1;
(statearr_21617_21658[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (2))){
var inst_21531 = (state_21597[(9)]);
var inst_21534 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21531);
var state_21597__$1 = state_21597;
var statearr_21618_21659 = state_21597__$1;
(statearr_21618_21659[(2)] = inst_21534);

(statearr_21618_21659[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (23))){
var inst_21582 = (state_21597[(2)]);
var state_21597__$1 = state_21597;
if(cljs.core.truth_(inst_21582)){
var statearr_21619_21660 = state_21597__$1;
(statearr_21619_21660[(1)] = (24));

} else {
var statearr_21620_21661 = state_21597__$1;
(statearr_21620_21661[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (19))){
var inst_21579 = (state_21597[(2)]);
var state_21597__$1 = state_21597;
if(cljs.core.truth_(inst_21579)){
var statearr_21621_21662 = state_21597__$1;
(statearr_21621_21662[(1)] = (20));

} else {
var statearr_21622_21663 = state_21597__$1;
(statearr_21622_21663[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (11))){
var inst_21556 = (state_21597[(8)]);
var inst_21562 = (inst_21556 == null);
var state_21597__$1 = state_21597;
if(cljs.core.truth_(inst_21562)){
var statearr_21623_21664 = state_21597__$1;
(statearr_21623_21664[(1)] = (14));

} else {
var statearr_21624_21665 = state_21597__$1;
(statearr_21624_21665[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (9))){
var inst_21549 = (state_21597[(10)]);
var inst_21549__$1 = (state_21597[(2)]);
var inst_21550 = cljs.core.get.call(null,inst_21549__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21551 = cljs.core.get.call(null,inst_21549__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21552 = cljs.core.get.call(null,inst_21549__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_21597__$1 = (function (){var statearr_21625 = state_21597;
(statearr_21625[(15)] = inst_21552);

(statearr_21625[(17)] = inst_21551);

(statearr_21625[(10)] = inst_21549__$1);

return statearr_21625;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21597__$1,(10),inst_21550);
} else {
if((state_val_21598 === (5))){
var inst_21541 = (state_21597[(7)]);
var inst_21544 = cljs.core.seq_QMARK_.call(null,inst_21541);
var state_21597__$1 = state_21597;
if(inst_21544){
var statearr_21626_21666 = state_21597__$1;
(statearr_21626_21666[(1)] = (7));

} else {
var statearr_21627_21667 = state_21597__$1;
(statearr_21627_21667[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (14))){
var inst_21557 = (state_21597[(16)]);
var inst_21564 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21557);
var state_21597__$1 = state_21597;
var statearr_21628_21668 = state_21597__$1;
(statearr_21628_21668[(2)] = inst_21564);

(statearr_21628_21668[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (26))){
var inst_21587 = (state_21597[(2)]);
var state_21597__$1 = state_21597;
var statearr_21629_21669 = state_21597__$1;
(statearr_21629_21669[(2)] = inst_21587);

(statearr_21629_21669[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (16))){
var inst_21567 = (state_21597[(2)]);
var inst_21568 = calc_state.call(null);
var inst_21541 = inst_21568;
var state_21597__$1 = (function (){var statearr_21630 = state_21597;
(statearr_21630[(7)] = inst_21541);

(statearr_21630[(18)] = inst_21567);

return statearr_21630;
})();
var statearr_21631_21670 = state_21597__$1;
(statearr_21631_21670[(2)] = null);

(statearr_21631_21670[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (10))){
var inst_21556 = (state_21597[(8)]);
var inst_21557 = (state_21597[(16)]);
var inst_21555 = (state_21597[(2)]);
var inst_21556__$1 = cljs.core.nth.call(null,inst_21555,(0),null);
var inst_21557__$1 = cljs.core.nth.call(null,inst_21555,(1),null);
var inst_21558 = (inst_21556__$1 == null);
var inst_21559 = cljs.core._EQ_.call(null,inst_21557__$1,change);
var inst_21560 = (inst_21558) || (inst_21559);
var state_21597__$1 = (function (){var statearr_21632 = state_21597;
(statearr_21632[(8)] = inst_21556__$1);

(statearr_21632[(16)] = inst_21557__$1);

return statearr_21632;
})();
if(cljs.core.truth_(inst_21560)){
var statearr_21633_21671 = state_21597__$1;
(statearr_21633_21671[(1)] = (11));

} else {
var statearr_21634_21672 = state_21597__$1;
(statearr_21634_21672[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (18))){
var inst_21552 = (state_21597[(15)]);
var inst_21551 = (state_21597[(17)]);
var inst_21557 = (state_21597[(16)]);
var inst_21574 = cljs.core.empty_QMARK_.call(null,inst_21552);
var inst_21575 = inst_21551.call(null,inst_21557);
var inst_21576 = cljs.core.not.call(null,inst_21575);
var inst_21577 = (inst_21574) && (inst_21576);
var state_21597__$1 = state_21597;
var statearr_21635_21673 = state_21597__$1;
(statearr_21635_21673[(2)] = inst_21577);

(statearr_21635_21673[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (8))){
var inst_21541 = (state_21597[(7)]);
var state_21597__$1 = state_21597;
var statearr_21636_21674 = state_21597__$1;
(statearr_21636_21674[(2)] = inst_21541);

(statearr_21636_21674[(1)] = (9));


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
});})(c__5809__auto___21644,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__5794__auto__,c__5809__auto___21644,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_21640 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21640[(0)] = state_machine__5795__auto__);

(statearr_21640[(1)] = (1));

return statearr_21640;
});
var state_machine__5795__auto____1 = (function (state_21597){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_21597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e21641){if((e21641 instanceof Object)){
var ex__5798__auto__ = e21641;
var statearr_21642_21675 = state_21597;
(statearr_21642_21675[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21676 = state_21597;
state_21597 = G__21676;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_21597){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_21597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___21644,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__5811__auto__ = (function (){var statearr_21643 = f__5810__auto__.call(null);
(statearr_21643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___21644);

return statearr_21643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___21644,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj21678 = {};
return obj21678;
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
return (function (p1__21679_SHARP_){
if(cljs.core.truth_(p1__21679_SHARP_.call(null,topic))){
return p1__21679_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21679_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3608__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t21802 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21802 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta21803){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta21803 = meta21803;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21802.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t21802.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t21802.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t21802.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t21802.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t21802.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21802.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t21802.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21804){
var self__ = this;
var _21804__$1 = this;
return self__.meta21803;
});})(mults,ensure_mult))
;

cljs.core.async.t21802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21804,meta21803__$1){
var self__ = this;
var _21804__$1 = this;
return (new cljs.core.async.t21802(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta21803__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t21802.cljs$lang$type = true;

cljs.core.async.t21802.cljs$lang$ctorStr = "cljs.core.async/t21802";

cljs.core.async.t21802.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t21802");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t21802 = ((function (mults,ensure_mult){
return (function __GT_t21802(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta21803){
return (new cljs.core.async.t21802(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta21803));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t21802(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
})()
;
var c__5809__auto___21924 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___21924,mults,ensure_mult,p){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___21924,mults,ensure_mult,p){
return (function (state_21876){
var state_val_21877 = (state_21876[(1)]);
if((state_val_21877 === (7))){
var inst_21872 = (state_21876[(2)]);
var state_21876__$1 = state_21876;
var statearr_21878_21925 = state_21876__$1;
(statearr_21878_21925[(2)] = inst_21872);

(statearr_21878_21925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21877 === (20))){
var state_21876__$1 = state_21876;
var statearr_21879_21926 = state_21876__$1;
(statearr_21879_21926[(2)] = null);

(statearr_21879_21926[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21877 === (1))){
var state_21876__$1 = state_21876;
var statearr_21880_21927 = state_21876__$1;
(statearr_21880_21927[(2)] = null);

(statearr_21880_21927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21877 === (24))){
var inst_21855 = (state_21876[(7)]);
var inst_21864 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21855);
var state_21876__$1 = state_21876;
var statearr_21881_21928 = state_21876__$1;
(statearr_21881_21928[(2)] = inst_21864);

(statearr_21881_21928[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21877 === (4))){
var inst_21807 = (state_21876[(8)]);
var inst_21807__$1 = (state_21876[(2)]);
var inst_21808 = (inst_21807__$1 == null);
var state_21876__$1 = (function (){var statearr_21882 = state_21876;
(statearr_21882[(8)] = inst_21807__$1);

return statearr_21882;
})();
if(cljs.core.truth_(inst_21808)){
var statearr_21883_21929 = state_21876__$1;
(statearr_21883_21929[(1)] = (5));

} else {
var statearr_21884_21930 = state_21876__$1;
(statearr_21884_21930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21877 === (15))){
var inst_21849 = (state_21876[(2)]);
var state_21876__$1 = state_21876;
var statearr_21885_21931 = state_21876__$1;
(statearr_21885_21931[(2)] = inst_21849);

(statearr_21885_21931[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21877 === (21))){
var inst_21869 = (state_21876[(2)]);
var state_21876__$1 = (function (){var statearr_21886 = state_21876;
(statearr_21886[(9)] = inst_21869);

return statearr_21886;
})();
var statearr_21887_21932 = state_21876__$1;
(statearr_21887_21932[(2)] = null);

(statearr_21887_21932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21877 === (13))){
var inst_21831 = (state_21876[(10)]);
var inst_21833 = cljs.core.chunked_seq_QMARK_.call(null,inst_21831);
var state_21876__$1 = state_21876;
if(inst_21833){
var statearr_21888_21933 = state_21876__$1;
(statearr_21888_21933[(1)] = (16));

} else {
var statearr_21889_21934 = state_21876__$1;
(statearr_21889_21934[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21877 === (22))){
var inst_21861 = (state_21876[(2)]);
var state_21876__$1 = state_21876;
if(cljs.core.truth_(inst_21861)){
var statearr_21890_21935 = state_21876__$1;
(statearr_21890_21935[(1)] = (23));

} else {
var statearr_21891_21936 = state_21876__$1;
(statearr_21891_21936[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21877 === (6))){
var inst_21807 = (state_21876[(8)]);
var inst_21857 = (state_21876[(11)]);
var inst_21855 = (state_21876[(7)]);
var inst_21855__$1 = topic_fn.call(null,inst_21807);
var inst_21856 = cljs.core.deref.call(null,mults);
var inst_21857__$1 = cljs.core.get.call(null,inst_21856,inst_21855__$1);
var state_21876__$1 = (function (){var statearr_21892 = state_21876;
(statearr_21892[(11)] = inst_21857__$1);

(statearr_21892[(7)] = inst_21855__$1);

return statearr_21892;
})();
if(cljs.core.truth_(inst_21857__$1)){
var statearr_21893_21937 = state_21876__$1;
(statearr_21893_21937[(1)] = (19));

} else {
var statearr_21894_21938 = state_21876__$1;
(statearr_21894_21938[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21877 === (25))){
var inst_21866 = (state_21876[(2)]);
var state_21876__$1 = state_21876;
var statearr_21895_21939 = state_21876__$1;
(statearr_21895_21939[(2)] = inst_21866);

(statearr_21895_21939[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21877 === (17))){
var inst_21831 = (state_21876[(10)]);
var inst_21840 = cljs.core.first.call(null,inst_21831);
var inst_21841 = cljs.core.async.muxch_STAR_.call(null,inst_21840);
var inst_21842 = cljs.core.async.close_BANG_.call(null,inst_21841);
var inst_21843 = cljs.core.next.call(null,inst_21831);
var inst_21817 = inst_21843;
var inst_21818 = null;
var inst_21819 = (0);
var inst_21820 = (0);
var state_21876__$1 = (function (){var statearr_21896 = state_21876;
(statearr_21896[(12)] = inst_21819);

(statearr_21896[(13)] = inst_21820);

(statearr_21896[(14)] = inst_21842);

(statearr_21896[(15)] = inst_21818);

(statearr_21896[(16)] = inst_21817);

return statearr_21896;
})();
var statearr_21897_21940 = state_21876__$1;
(statearr_21897_21940[(2)] = null);

(statearr_21897_21940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21877 === (3))){
var inst_21874 = (state_21876[(2)]);
var state_21876__$1 = state_21876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21876__$1,inst_21874);
} else {
if((state_val_21877 === (12))){
var inst_21851 = (state_21876[(2)]);
var state_21876__$1 = state_21876;
var statearr_21898_21941 = state_21876__$1;
(statearr_21898_21941[(2)] = inst_21851);

(statearr_21898_21941[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21877 === (2))){
var state_21876__$1 = state_21876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21876__$1,(4),ch);
} else {
if((state_val_21877 === (23))){
var state_21876__$1 = state_21876;
var statearr_21899_21942 = state_21876__$1;
(statearr_21899_21942[(2)] = null);

(statearr_21899_21942[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21877 === (19))){
var inst_21807 = (state_21876[(8)]);
var inst_21857 = (state_21876[(11)]);
var inst_21859 = cljs.core.async.muxch_STAR_.call(null,inst_21857);
var state_21876__$1 = state_21876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21876__$1,(22),inst_21859,inst_21807);
} else {
if((state_val_21877 === (11))){
var inst_21831 = (state_21876[(10)]);
var inst_21817 = (state_21876[(16)]);
var inst_21831__$1 = cljs.core.seq.call(null,inst_21817);
var state_21876__$1 = (function (){var statearr_21900 = state_21876;
(statearr_21900[(10)] = inst_21831__$1);

return statearr_21900;
})();
if(inst_21831__$1){
var statearr_21901_21943 = state_21876__$1;
(statearr_21901_21943[(1)] = (13));

} else {
var statearr_21902_21944 = state_21876__$1;
(statearr_21902_21944[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21877 === (9))){
var inst_21853 = (state_21876[(2)]);
var state_21876__$1 = state_21876;
var statearr_21903_21945 = state_21876__$1;
(statearr_21903_21945[(2)] = inst_21853);

(statearr_21903_21945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21877 === (5))){
var inst_21814 = cljs.core.deref.call(null,mults);
var inst_21815 = cljs.core.vals.call(null,inst_21814);
var inst_21816 = cljs.core.seq.call(null,inst_21815);
var inst_21817 = inst_21816;
var inst_21818 = null;
var inst_21819 = (0);
var inst_21820 = (0);
var state_21876__$1 = (function (){var statearr_21904 = state_21876;
(statearr_21904[(12)] = inst_21819);

(statearr_21904[(13)] = inst_21820);

(statearr_21904[(15)] = inst_21818);

(statearr_21904[(16)] = inst_21817);

return statearr_21904;
})();
var statearr_21905_21946 = state_21876__$1;
(statearr_21905_21946[(2)] = null);

(statearr_21905_21946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21877 === (14))){
var state_21876__$1 = state_21876;
var statearr_21909_21947 = state_21876__$1;
(statearr_21909_21947[(2)] = null);

(statearr_21909_21947[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21877 === (16))){
var inst_21831 = (state_21876[(10)]);
var inst_21835 = cljs.core.chunk_first.call(null,inst_21831);
var inst_21836 = cljs.core.chunk_rest.call(null,inst_21831);
var inst_21837 = cljs.core.count.call(null,inst_21835);
var inst_21817 = inst_21836;
var inst_21818 = inst_21835;
var inst_21819 = inst_21837;
var inst_21820 = (0);
var state_21876__$1 = (function (){var statearr_21910 = state_21876;
(statearr_21910[(12)] = inst_21819);

(statearr_21910[(13)] = inst_21820);

(statearr_21910[(15)] = inst_21818);

(statearr_21910[(16)] = inst_21817);

return statearr_21910;
})();
var statearr_21911_21948 = state_21876__$1;
(statearr_21911_21948[(2)] = null);

(statearr_21911_21948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21877 === (10))){
var inst_21819 = (state_21876[(12)]);
var inst_21820 = (state_21876[(13)]);
var inst_21818 = (state_21876[(15)]);
var inst_21817 = (state_21876[(16)]);
var inst_21825 = cljs.core._nth.call(null,inst_21818,inst_21820);
var inst_21826 = cljs.core.async.muxch_STAR_.call(null,inst_21825);
var inst_21827 = cljs.core.async.close_BANG_.call(null,inst_21826);
var inst_21828 = (inst_21820 + (1));
var tmp21906 = inst_21819;
var tmp21907 = inst_21818;
var tmp21908 = inst_21817;
var inst_21817__$1 = tmp21908;
var inst_21818__$1 = tmp21907;
var inst_21819__$1 = tmp21906;
var inst_21820__$1 = inst_21828;
var state_21876__$1 = (function (){var statearr_21912 = state_21876;
(statearr_21912[(12)] = inst_21819__$1);

(statearr_21912[(13)] = inst_21820__$1);

(statearr_21912[(17)] = inst_21827);

(statearr_21912[(15)] = inst_21818__$1);

(statearr_21912[(16)] = inst_21817__$1);

return statearr_21912;
})();
var statearr_21913_21949 = state_21876__$1;
(statearr_21913_21949[(2)] = null);

(statearr_21913_21949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21877 === (18))){
var inst_21846 = (state_21876[(2)]);
var state_21876__$1 = state_21876;
var statearr_21914_21950 = state_21876__$1;
(statearr_21914_21950[(2)] = inst_21846);

(statearr_21914_21950[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21877 === (8))){
var inst_21819 = (state_21876[(12)]);
var inst_21820 = (state_21876[(13)]);
var inst_21822 = (inst_21820 < inst_21819);
var inst_21823 = inst_21822;
var state_21876__$1 = state_21876;
if(cljs.core.truth_(inst_21823)){
var statearr_21915_21951 = state_21876__$1;
(statearr_21915_21951[(1)] = (10));

} else {
var statearr_21916_21952 = state_21876__$1;
(statearr_21916_21952[(1)] = (11));

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
});})(c__5809__auto___21924,mults,ensure_mult,p))
;
return ((function (switch__5794__auto__,c__5809__auto___21924,mults,ensure_mult,p){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_21920 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21920[(0)] = state_machine__5795__auto__);

(statearr_21920[(1)] = (1));

return statearr_21920;
});
var state_machine__5795__auto____1 = (function (state_21876){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_21876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e21921){if((e21921 instanceof Object)){
var ex__5798__auto__ = e21921;
var statearr_21922_21953 = state_21876;
(statearr_21922_21953[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21954 = state_21876;
state_21876 = G__21954;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_21876){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_21876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___21924,mults,ensure_mult,p))
})();
var state__5811__auto__ = (function (){var statearr_21923 = f__5810__auto__.call(null);
(statearr_21923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___21924);

return statearr_21923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___21924,mults,ensure_mult,p))
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
var c__5809__auto___22091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___22091,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___22091,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22061){
var state_val_22062 = (state_22061[(1)]);
if((state_val_22062 === (7))){
var state_22061__$1 = state_22061;
var statearr_22063_22092 = state_22061__$1;
(statearr_22063_22092[(2)] = null);

(statearr_22063_22092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22062 === (1))){
var state_22061__$1 = state_22061;
var statearr_22064_22093 = state_22061__$1;
(statearr_22064_22093[(2)] = null);

(statearr_22064_22093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22062 === (4))){
var inst_22025 = (state_22061[(7)]);
var inst_22027 = (inst_22025 < cnt);
var state_22061__$1 = state_22061;
if(cljs.core.truth_(inst_22027)){
var statearr_22065_22094 = state_22061__$1;
(statearr_22065_22094[(1)] = (6));

} else {
var statearr_22066_22095 = state_22061__$1;
(statearr_22066_22095[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22062 === (15))){
var inst_22057 = (state_22061[(2)]);
var state_22061__$1 = state_22061;
var statearr_22067_22096 = state_22061__$1;
(statearr_22067_22096[(2)] = inst_22057);

(statearr_22067_22096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22062 === (13))){
var inst_22050 = cljs.core.async.close_BANG_.call(null,out);
var state_22061__$1 = state_22061;
var statearr_22068_22097 = state_22061__$1;
(statearr_22068_22097[(2)] = inst_22050);

(statearr_22068_22097[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22062 === (6))){
var state_22061__$1 = state_22061;
var statearr_22069_22098 = state_22061__$1;
(statearr_22069_22098[(2)] = null);

(statearr_22069_22098[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22062 === (3))){
var inst_22059 = (state_22061[(2)]);
var state_22061__$1 = state_22061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22061__$1,inst_22059);
} else {
if((state_val_22062 === (12))){
var inst_22047 = (state_22061[(8)]);
var inst_22047__$1 = (state_22061[(2)]);
var inst_22048 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22047__$1);
var state_22061__$1 = (function (){var statearr_22070 = state_22061;
(statearr_22070[(8)] = inst_22047__$1);

return statearr_22070;
})();
if(cljs.core.truth_(inst_22048)){
var statearr_22071_22099 = state_22061__$1;
(statearr_22071_22099[(1)] = (13));

} else {
var statearr_22072_22100 = state_22061__$1;
(statearr_22072_22100[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22062 === (2))){
var inst_22024 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22025 = (0);
var state_22061__$1 = (function (){var statearr_22073 = state_22061;
(statearr_22073[(9)] = inst_22024);

(statearr_22073[(7)] = inst_22025);

return statearr_22073;
})();
var statearr_22074_22101 = state_22061__$1;
(statearr_22074_22101[(2)] = null);

(statearr_22074_22101[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22062 === (11))){
var inst_22025 = (state_22061[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22061,(10),Object,null,(9));
var inst_22034 = chs__$1.call(null,inst_22025);
var inst_22035 = done.call(null,inst_22025);
var inst_22036 = cljs.core.async.take_BANG_.call(null,inst_22034,inst_22035);
var state_22061__$1 = state_22061;
var statearr_22075_22102 = state_22061__$1;
(statearr_22075_22102[(2)] = inst_22036);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22061__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22062 === (9))){
var inst_22025 = (state_22061[(7)]);
var inst_22038 = (state_22061[(2)]);
var inst_22039 = (inst_22025 + (1));
var inst_22025__$1 = inst_22039;
var state_22061__$1 = (function (){var statearr_22076 = state_22061;
(statearr_22076[(7)] = inst_22025__$1);

(statearr_22076[(10)] = inst_22038);

return statearr_22076;
})();
var statearr_22077_22103 = state_22061__$1;
(statearr_22077_22103[(2)] = null);

(statearr_22077_22103[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22062 === (5))){
var inst_22045 = (state_22061[(2)]);
var state_22061__$1 = (function (){var statearr_22078 = state_22061;
(statearr_22078[(11)] = inst_22045);

return statearr_22078;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22061__$1,(12),dchan);
} else {
if((state_val_22062 === (14))){
var inst_22047 = (state_22061[(8)]);
var inst_22052 = cljs.core.apply.call(null,f,inst_22047);
var state_22061__$1 = state_22061;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22061__$1,(16),out,inst_22052);
} else {
if((state_val_22062 === (16))){
var inst_22054 = (state_22061[(2)]);
var state_22061__$1 = (function (){var statearr_22079 = state_22061;
(statearr_22079[(12)] = inst_22054);

return statearr_22079;
})();
var statearr_22080_22104 = state_22061__$1;
(statearr_22080_22104[(2)] = null);

(statearr_22080_22104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22062 === (10))){
var inst_22029 = (state_22061[(2)]);
var inst_22030 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22061__$1 = (function (){var statearr_22081 = state_22061;
(statearr_22081[(13)] = inst_22029);

return statearr_22081;
})();
var statearr_22082_22105 = state_22061__$1;
(statearr_22082_22105[(2)] = inst_22030);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22061__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22062 === (8))){
var inst_22043 = (state_22061[(2)]);
var state_22061__$1 = state_22061;
var statearr_22083_22106 = state_22061__$1;
(statearr_22083_22106[(2)] = inst_22043);

(statearr_22083_22106[(1)] = (5));


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
});})(c__5809__auto___22091,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__5794__auto__,c__5809__auto___22091,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_22087 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22087[(0)] = state_machine__5795__auto__);

(statearr_22087[(1)] = (1));

return statearr_22087;
});
var state_machine__5795__auto____1 = (function (state_22061){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_22061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e22088){if((e22088 instanceof Object)){
var ex__5798__auto__ = e22088;
var statearr_22089_22107 = state_22061;
(statearr_22089_22107[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22108 = state_22061;
state_22061 = G__22108;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_22061){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_22061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___22091,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__5811__auto__ = (function (){var statearr_22090 = f__5810__auto__.call(null);
(statearr_22090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___22091);

return statearr_22090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___22091,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__5809__auto___22216 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___22216,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___22216,out){
return (function (state_22192){
var state_val_22193 = (state_22192[(1)]);
if((state_val_22193 === (7))){
var inst_22171 = (state_22192[(7)]);
var inst_22172 = (state_22192[(8)]);
var inst_22171__$1 = (state_22192[(2)]);
var inst_22172__$1 = cljs.core.nth.call(null,inst_22171__$1,(0),null);
var inst_22173 = cljs.core.nth.call(null,inst_22171__$1,(1),null);
var inst_22174 = (inst_22172__$1 == null);
var state_22192__$1 = (function (){var statearr_22194 = state_22192;
(statearr_22194[(7)] = inst_22171__$1);

(statearr_22194[(9)] = inst_22173);

(statearr_22194[(8)] = inst_22172__$1);

return statearr_22194;
})();
if(cljs.core.truth_(inst_22174)){
var statearr_22195_22217 = state_22192__$1;
(statearr_22195_22217[(1)] = (8));

} else {
var statearr_22196_22218 = state_22192__$1;
(statearr_22196_22218[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22193 === (1))){
var inst_22163 = cljs.core.vec.call(null,chs);
var inst_22164 = inst_22163;
var state_22192__$1 = (function (){var statearr_22197 = state_22192;
(statearr_22197[(10)] = inst_22164);

return statearr_22197;
})();
var statearr_22198_22219 = state_22192__$1;
(statearr_22198_22219[(2)] = null);

(statearr_22198_22219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22193 === (4))){
var inst_22164 = (state_22192[(10)]);
var state_22192__$1 = state_22192;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22192__$1,(7),inst_22164);
} else {
if((state_val_22193 === (6))){
var inst_22188 = (state_22192[(2)]);
var state_22192__$1 = state_22192;
var statearr_22199_22220 = state_22192__$1;
(statearr_22199_22220[(2)] = inst_22188);

(statearr_22199_22220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22193 === (3))){
var inst_22190 = (state_22192[(2)]);
var state_22192__$1 = state_22192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22192__$1,inst_22190);
} else {
if((state_val_22193 === (2))){
var inst_22164 = (state_22192[(10)]);
var inst_22166 = cljs.core.count.call(null,inst_22164);
var inst_22167 = (inst_22166 > (0));
var state_22192__$1 = state_22192;
if(cljs.core.truth_(inst_22167)){
var statearr_22201_22221 = state_22192__$1;
(statearr_22201_22221[(1)] = (4));

} else {
var statearr_22202_22222 = state_22192__$1;
(statearr_22202_22222[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22193 === (11))){
var inst_22164 = (state_22192[(10)]);
var inst_22181 = (state_22192[(2)]);
var tmp22200 = inst_22164;
var inst_22164__$1 = tmp22200;
var state_22192__$1 = (function (){var statearr_22203 = state_22192;
(statearr_22203[(10)] = inst_22164__$1);

(statearr_22203[(11)] = inst_22181);

return statearr_22203;
})();
var statearr_22204_22223 = state_22192__$1;
(statearr_22204_22223[(2)] = null);

(statearr_22204_22223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22193 === (9))){
var inst_22172 = (state_22192[(8)]);
var state_22192__$1 = state_22192;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22192__$1,(11),out,inst_22172);
} else {
if((state_val_22193 === (5))){
var inst_22186 = cljs.core.async.close_BANG_.call(null,out);
var state_22192__$1 = state_22192;
var statearr_22205_22224 = state_22192__$1;
(statearr_22205_22224[(2)] = inst_22186);

(statearr_22205_22224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22193 === (10))){
var inst_22184 = (state_22192[(2)]);
var state_22192__$1 = state_22192;
var statearr_22206_22225 = state_22192__$1;
(statearr_22206_22225[(2)] = inst_22184);

(statearr_22206_22225[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22193 === (8))){
var inst_22164 = (state_22192[(10)]);
var inst_22171 = (state_22192[(7)]);
var inst_22173 = (state_22192[(9)]);
var inst_22172 = (state_22192[(8)]);
var inst_22176 = (function (){var c = inst_22173;
var v = inst_22172;
var vec__22169 = inst_22171;
var cs = inst_22164;
return ((function (c,v,vec__22169,cs,inst_22164,inst_22171,inst_22173,inst_22172,state_val_22193,c__5809__auto___22216,out){
return (function (p1__22109_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22109_SHARP_);
});
;})(c,v,vec__22169,cs,inst_22164,inst_22171,inst_22173,inst_22172,state_val_22193,c__5809__auto___22216,out))
})();
var inst_22177 = cljs.core.filterv.call(null,inst_22176,inst_22164);
var inst_22164__$1 = inst_22177;
var state_22192__$1 = (function (){var statearr_22207 = state_22192;
(statearr_22207[(10)] = inst_22164__$1);

return statearr_22207;
})();
var statearr_22208_22226 = state_22192__$1;
(statearr_22208_22226[(2)] = null);

(statearr_22208_22226[(1)] = (2));


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
});})(c__5809__auto___22216,out))
;
return ((function (switch__5794__auto__,c__5809__auto___22216,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_22212 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22212[(0)] = state_machine__5795__auto__);

(statearr_22212[(1)] = (1));

return statearr_22212;
});
var state_machine__5795__auto____1 = (function (state_22192){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_22192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e22213){if((e22213 instanceof Object)){
var ex__5798__auto__ = e22213;
var statearr_22214_22227 = state_22192;
(statearr_22214_22227[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22228 = state_22192;
state_22192 = G__22228;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_22192){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_22192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___22216,out))
})();
var state__5811__auto__ = (function (){var statearr_22215 = f__5810__auto__.call(null);
(statearr_22215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___22216);

return statearr_22215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___22216,out))
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
var c__5809__auto___22321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___22321,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___22321,out){
return (function (state_22298){
var state_val_22299 = (state_22298[(1)]);
if((state_val_22299 === (7))){
var inst_22280 = (state_22298[(7)]);
var inst_22280__$1 = (state_22298[(2)]);
var inst_22281 = (inst_22280__$1 == null);
var inst_22282 = cljs.core.not.call(null,inst_22281);
var state_22298__$1 = (function (){var statearr_22300 = state_22298;
(statearr_22300[(7)] = inst_22280__$1);

return statearr_22300;
})();
if(inst_22282){
var statearr_22301_22322 = state_22298__$1;
(statearr_22301_22322[(1)] = (8));

} else {
var statearr_22302_22323 = state_22298__$1;
(statearr_22302_22323[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (1))){
var inst_22275 = (0);
var state_22298__$1 = (function (){var statearr_22303 = state_22298;
(statearr_22303[(8)] = inst_22275);

return statearr_22303;
})();
var statearr_22304_22324 = state_22298__$1;
(statearr_22304_22324[(2)] = null);

(statearr_22304_22324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (4))){
var state_22298__$1 = state_22298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22298__$1,(7),ch);
} else {
if((state_val_22299 === (6))){
var inst_22293 = (state_22298[(2)]);
var state_22298__$1 = state_22298;
var statearr_22305_22325 = state_22298__$1;
(statearr_22305_22325[(2)] = inst_22293);

(statearr_22305_22325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (3))){
var inst_22295 = (state_22298[(2)]);
var inst_22296 = cljs.core.async.close_BANG_.call(null,out);
var state_22298__$1 = (function (){var statearr_22306 = state_22298;
(statearr_22306[(9)] = inst_22295);

return statearr_22306;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22298__$1,inst_22296);
} else {
if((state_val_22299 === (2))){
var inst_22275 = (state_22298[(8)]);
var inst_22277 = (inst_22275 < n);
var state_22298__$1 = state_22298;
if(cljs.core.truth_(inst_22277)){
var statearr_22307_22326 = state_22298__$1;
(statearr_22307_22326[(1)] = (4));

} else {
var statearr_22308_22327 = state_22298__$1;
(statearr_22308_22327[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (11))){
var inst_22275 = (state_22298[(8)]);
var inst_22285 = (state_22298[(2)]);
var inst_22286 = (inst_22275 + (1));
var inst_22275__$1 = inst_22286;
var state_22298__$1 = (function (){var statearr_22309 = state_22298;
(statearr_22309[(8)] = inst_22275__$1);

(statearr_22309[(10)] = inst_22285);

return statearr_22309;
})();
var statearr_22310_22328 = state_22298__$1;
(statearr_22310_22328[(2)] = null);

(statearr_22310_22328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (9))){
var state_22298__$1 = state_22298;
var statearr_22311_22329 = state_22298__$1;
(statearr_22311_22329[(2)] = null);

(statearr_22311_22329[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (5))){
var state_22298__$1 = state_22298;
var statearr_22312_22330 = state_22298__$1;
(statearr_22312_22330[(2)] = null);

(statearr_22312_22330[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (10))){
var inst_22290 = (state_22298[(2)]);
var state_22298__$1 = state_22298;
var statearr_22313_22331 = state_22298__$1;
(statearr_22313_22331[(2)] = inst_22290);

(statearr_22313_22331[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (8))){
var inst_22280 = (state_22298[(7)]);
var state_22298__$1 = state_22298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22298__$1,(11),out,inst_22280);
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
});})(c__5809__auto___22321,out))
;
return ((function (switch__5794__auto__,c__5809__auto___22321,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_22317 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22317[(0)] = state_machine__5795__auto__);

(statearr_22317[(1)] = (1));

return statearr_22317;
});
var state_machine__5795__auto____1 = (function (state_22298){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_22298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e22318){if((e22318 instanceof Object)){
var ex__5798__auto__ = e22318;
var statearr_22319_22332 = state_22298;
(statearr_22319_22332[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22333 = state_22298;
state_22298 = G__22333;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_22298){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_22298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___22321,out))
})();
var state__5811__auto__ = (function (){var statearr_22320 = f__5810__auto__.call(null);
(statearr_22320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___22321);

return statearr_22320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___22321,out))
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
if(typeof cljs.core.async.t22341 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22341 = (function (ch,f,map_LT_,meta22342){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22342 = meta22342;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22341.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22341.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t22341.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22341.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t22344 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22344 = (function (fn1,_,meta22342,map_LT_,f,ch,meta22345){
this.fn1 = fn1;
this._ = _;
this.meta22342 = meta22342;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22345 = meta22345;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22344.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22344.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t22344.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22334_SHARP_){
return f1.call(null,(((p1__22334_SHARP_ == null))?null:self__.f.call(null,p1__22334_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t22344.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22346){
var self__ = this;
var _22346__$1 = this;
return self__.meta22345;
});})(___$1))
;

cljs.core.async.t22344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22346,meta22345__$1){
var self__ = this;
var _22346__$1 = this;
return (new cljs.core.async.t22344(self__.fn1,self__._,self__.meta22342,self__.map_LT_,self__.f,self__.ch,meta22345__$1));
});})(___$1))
;

cljs.core.async.t22344.cljs$lang$type = true;

cljs.core.async.t22344.cljs$lang$ctorStr = "cljs.core.async/t22344";

cljs.core.async.t22344.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t22344");
});})(___$1))
;

cljs.core.async.__GT_t22344 = ((function (___$1){
return (function __GT_t22344(fn1__$1,___$2,meta22342__$1,map_LT___$1,f__$1,ch__$1,meta22345){
return (new cljs.core.async.t22344(fn1__$1,___$2,meta22342__$1,map_LT___$1,f__$1,ch__$1,meta22345));
});})(___$1))
;

}

return (new cljs.core.async.t22344(fn1,___$1,self__.meta22342,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
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

cljs.core.async.t22341.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22341.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22341.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t22341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22343){
var self__ = this;
var _22343__$1 = this;
return self__.meta22342;
});

cljs.core.async.t22341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22343,meta22342__$1){
var self__ = this;
var _22343__$1 = this;
return (new cljs.core.async.t22341(self__.ch,self__.f,self__.map_LT_,meta22342__$1));
});

cljs.core.async.t22341.cljs$lang$type = true;

cljs.core.async.t22341.cljs$lang$ctorStr = "cljs.core.async/t22341";

cljs.core.async.t22341.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t22341");
});

cljs.core.async.__GT_t22341 = (function __GT_t22341(ch__$1,f__$1,map_LT___$1,meta22342){
return (new cljs.core.async.t22341(ch__$1,f__$1,map_LT___$1,meta22342));
});

}

return (new cljs.core.async.t22341(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t22350 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22350 = (function (ch,f,map_GT_,meta22351){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta22351 = meta22351;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22350.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22350.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t22350.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22350.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t22350.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22350.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22352){
var self__ = this;
var _22352__$1 = this;
return self__.meta22351;
});

cljs.core.async.t22350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22352,meta22351__$1){
var self__ = this;
var _22352__$1 = this;
return (new cljs.core.async.t22350(self__.ch,self__.f,self__.map_GT_,meta22351__$1));
});

cljs.core.async.t22350.cljs$lang$type = true;

cljs.core.async.t22350.cljs$lang$ctorStr = "cljs.core.async/t22350";

cljs.core.async.t22350.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t22350");
});

cljs.core.async.__GT_t22350 = (function __GT_t22350(ch__$1,f__$1,map_GT___$1,meta22351){
return (new cljs.core.async.t22350(ch__$1,f__$1,map_GT___$1,meta22351));
});

}

return (new cljs.core.async.t22350(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t22356 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22356 = (function (ch,p,filter_GT_,meta22357){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta22357 = meta22357;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22356.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22356.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t22356.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22356.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t22356.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22356.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22356.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t22356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22358){
var self__ = this;
var _22358__$1 = this;
return self__.meta22357;
});

cljs.core.async.t22356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22358,meta22357__$1){
var self__ = this;
var _22358__$1 = this;
return (new cljs.core.async.t22356(self__.ch,self__.p,self__.filter_GT_,meta22357__$1));
});

cljs.core.async.t22356.cljs$lang$type = true;

cljs.core.async.t22356.cljs$lang$ctorStr = "cljs.core.async/t22356";

cljs.core.async.t22356.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t22356");
});

cljs.core.async.__GT_t22356 = (function __GT_t22356(ch__$1,p__$1,filter_GT___$1,meta22357){
return (new cljs.core.async.t22356(ch__$1,p__$1,filter_GT___$1,meta22357));
});

}

return (new cljs.core.async.t22356(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
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
var c__5809__auto___22441 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___22441,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___22441,out){
return (function (state_22420){
var state_val_22421 = (state_22420[(1)]);
if((state_val_22421 === (7))){
var inst_22416 = (state_22420[(2)]);
var state_22420__$1 = state_22420;
var statearr_22422_22442 = state_22420__$1;
(statearr_22422_22442[(2)] = inst_22416);

(statearr_22422_22442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22421 === (1))){
var state_22420__$1 = state_22420;
var statearr_22423_22443 = state_22420__$1;
(statearr_22423_22443[(2)] = null);

(statearr_22423_22443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22421 === (4))){
var inst_22402 = (state_22420[(7)]);
var inst_22402__$1 = (state_22420[(2)]);
var inst_22403 = (inst_22402__$1 == null);
var state_22420__$1 = (function (){var statearr_22424 = state_22420;
(statearr_22424[(7)] = inst_22402__$1);

return statearr_22424;
})();
if(cljs.core.truth_(inst_22403)){
var statearr_22425_22444 = state_22420__$1;
(statearr_22425_22444[(1)] = (5));

} else {
var statearr_22426_22445 = state_22420__$1;
(statearr_22426_22445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22421 === (6))){
var inst_22402 = (state_22420[(7)]);
var inst_22407 = p.call(null,inst_22402);
var state_22420__$1 = state_22420;
if(cljs.core.truth_(inst_22407)){
var statearr_22427_22446 = state_22420__$1;
(statearr_22427_22446[(1)] = (8));

} else {
var statearr_22428_22447 = state_22420__$1;
(statearr_22428_22447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22421 === (3))){
var inst_22418 = (state_22420[(2)]);
var state_22420__$1 = state_22420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22420__$1,inst_22418);
} else {
if((state_val_22421 === (2))){
var state_22420__$1 = state_22420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22420__$1,(4),ch);
} else {
if((state_val_22421 === (11))){
var inst_22410 = (state_22420[(2)]);
var state_22420__$1 = state_22420;
var statearr_22429_22448 = state_22420__$1;
(statearr_22429_22448[(2)] = inst_22410);

(statearr_22429_22448[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22421 === (9))){
var state_22420__$1 = state_22420;
var statearr_22430_22449 = state_22420__$1;
(statearr_22430_22449[(2)] = null);

(statearr_22430_22449[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22421 === (5))){
var inst_22405 = cljs.core.async.close_BANG_.call(null,out);
var state_22420__$1 = state_22420;
var statearr_22431_22450 = state_22420__$1;
(statearr_22431_22450[(2)] = inst_22405);

(statearr_22431_22450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22421 === (10))){
var inst_22413 = (state_22420[(2)]);
var state_22420__$1 = (function (){var statearr_22432 = state_22420;
(statearr_22432[(8)] = inst_22413);

return statearr_22432;
})();
var statearr_22433_22451 = state_22420__$1;
(statearr_22433_22451[(2)] = null);

(statearr_22433_22451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22421 === (8))){
var inst_22402 = (state_22420[(7)]);
var state_22420__$1 = state_22420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22420__$1,(11),out,inst_22402);
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
});})(c__5809__auto___22441,out))
;
return ((function (switch__5794__auto__,c__5809__auto___22441,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_22437 = [null,null,null,null,null,null,null,null,null];
(statearr_22437[(0)] = state_machine__5795__auto__);

(statearr_22437[(1)] = (1));

return statearr_22437;
});
var state_machine__5795__auto____1 = (function (state_22420){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_22420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e22438){if((e22438 instanceof Object)){
var ex__5798__auto__ = e22438;
var statearr_22439_22452 = state_22420;
(statearr_22439_22452[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22453 = state_22420;
state_22420 = G__22453;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_22420){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_22420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___22441,out))
})();
var state__5811__auto__ = (function (){var statearr_22440 = f__5810__auto__.call(null);
(statearr_22440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___22441);

return statearr_22440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___22441,out))
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
var c__5809__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto__){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto__){
return (function (state_22619){
var state_val_22620 = (state_22619[(1)]);
if((state_val_22620 === (7))){
var inst_22615 = (state_22619[(2)]);
var state_22619__$1 = state_22619;
var statearr_22621_22662 = state_22619__$1;
(statearr_22621_22662[(2)] = inst_22615);

(statearr_22621_22662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (20))){
var inst_22585 = (state_22619[(7)]);
var inst_22596 = (state_22619[(2)]);
var inst_22597 = cljs.core.next.call(null,inst_22585);
var inst_22571 = inst_22597;
var inst_22572 = null;
var inst_22573 = (0);
var inst_22574 = (0);
var state_22619__$1 = (function (){var statearr_22622 = state_22619;
(statearr_22622[(8)] = inst_22571);

(statearr_22622[(9)] = inst_22572);

(statearr_22622[(10)] = inst_22574);

(statearr_22622[(11)] = inst_22596);

(statearr_22622[(12)] = inst_22573);

return statearr_22622;
})();
var statearr_22623_22663 = state_22619__$1;
(statearr_22623_22663[(2)] = null);

(statearr_22623_22663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (1))){
var state_22619__$1 = state_22619;
var statearr_22624_22664 = state_22619__$1;
(statearr_22624_22664[(2)] = null);

(statearr_22624_22664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (4))){
var inst_22560 = (state_22619[(13)]);
var inst_22560__$1 = (state_22619[(2)]);
var inst_22561 = (inst_22560__$1 == null);
var state_22619__$1 = (function (){var statearr_22625 = state_22619;
(statearr_22625[(13)] = inst_22560__$1);

return statearr_22625;
})();
if(cljs.core.truth_(inst_22561)){
var statearr_22626_22665 = state_22619__$1;
(statearr_22626_22665[(1)] = (5));

} else {
var statearr_22627_22666 = state_22619__$1;
(statearr_22627_22666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (15))){
var state_22619__$1 = state_22619;
var statearr_22631_22667 = state_22619__$1;
(statearr_22631_22667[(2)] = null);

(statearr_22631_22667[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (21))){
var state_22619__$1 = state_22619;
var statearr_22632_22668 = state_22619__$1;
(statearr_22632_22668[(2)] = null);

(statearr_22632_22668[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (13))){
var inst_22571 = (state_22619[(8)]);
var inst_22572 = (state_22619[(9)]);
var inst_22574 = (state_22619[(10)]);
var inst_22573 = (state_22619[(12)]);
var inst_22581 = (state_22619[(2)]);
var inst_22582 = (inst_22574 + (1));
var tmp22628 = inst_22571;
var tmp22629 = inst_22572;
var tmp22630 = inst_22573;
var inst_22571__$1 = tmp22628;
var inst_22572__$1 = tmp22629;
var inst_22573__$1 = tmp22630;
var inst_22574__$1 = inst_22582;
var state_22619__$1 = (function (){var statearr_22633 = state_22619;
(statearr_22633[(8)] = inst_22571__$1);

(statearr_22633[(9)] = inst_22572__$1);

(statearr_22633[(10)] = inst_22574__$1);

(statearr_22633[(14)] = inst_22581);

(statearr_22633[(12)] = inst_22573__$1);

return statearr_22633;
})();
var statearr_22634_22669 = state_22619__$1;
(statearr_22634_22669[(2)] = null);

(statearr_22634_22669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (22))){
var state_22619__$1 = state_22619;
var statearr_22635_22670 = state_22619__$1;
(statearr_22635_22670[(2)] = null);

(statearr_22635_22670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (6))){
var inst_22560 = (state_22619[(13)]);
var inst_22569 = f.call(null,inst_22560);
var inst_22570 = cljs.core.seq.call(null,inst_22569);
var inst_22571 = inst_22570;
var inst_22572 = null;
var inst_22573 = (0);
var inst_22574 = (0);
var state_22619__$1 = (function (){var statearr_22636 = state_22619;
(statearr_22636[(8)] = inst_22571);

(statearr_22636[(9)] = inst_22572);

(statearr_22636[(10)] = inst_22574);

(statearr_22636[(12)] = inst_22573);

return statearr_22636;
})();
var statearr_22637_22671 = state_22619__$1;
(statearr_22637_22671[(2)] = null);

(statearr_22637_22671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (17))){
var inst_22585 = (state_22619[(7)]);
var inst_22589 = cljs.core.chunk_first.call(null,inst_22585);
var inst_22590 = cljs.core.chunk_rest.call(null,inst_22585);
var inst_22591 = cljs.core.count.call(null,inst_22589);
var inst_22571 = inst_22590;
var inst_22572 = inst_22589;
var inst_22573 = inst_22591;
var inst_22574 = (0);
var state_22619__$1 = (function (){var statearr_22638 = state_22619;
(statearr_22638[(8)] = inst_22571);

(statearr_22638[(9)] = inst_22572);

(statearr_22638[(10)] = inst_22574);

(statearr_22638[(12)] = inst_22573);

return statearr_22638;
})();
var statearr_22639_22672 = state_22619__$1;
(statearr_22639_22672[(2)] = null);

(statearr_22639_22672[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (3))){
var inst_22617 = (state_22619[(2)]);
var state_22619__$1 = state_22619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22619__$1,inst_22617);
} else {
if((state_val_22620 === (12))){
var inst_22605 = (state_22619[(2)]);
var state_22619__$1 = state_22619;
var statearr_22640_22673 = state_22619__$1;
(statearr_22640_22673[(2)] = inst_22605);

(statearr_22640_22673[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (2))){
var state_22619__$1 = state_22619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22619__$1,(4),in$);
} else {
if((state_val_22620 === (23))){
var inst_22613 = (state_22619[(2)]);
var state_22619__$1 = state_22619;
var statearr_22641_22674 = state_22619__$1;
(statearr_22641_22674[(2)] = inst_22613);

(statearr_22641_22674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (19))){
var inst_22600 = (state_22619[(2)]);
var state_22619__$1 = state_22619;
var statearr_22642_22675 = state_22619__$1;
(statearr_22642_22675[(2)] = inst_22600);

(statearr_22642_22675[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (11))){
var inst_22571 = (state_22619[(8)]);
var inst_22585 = (state_22619[(7)]);
var inst_22585__$1 = cljs.core.seq.call(null,inst_22571);
var state_22619__$1 = (function (){var statearr_22643 = state_22619;
(statearr_22643[(7)] = inst_22585__$1);

return statearr_22643;
})();
if(inst_22585__$1){
var statearr_22644_22676 = state_22619__$1;
(statearr_22644_22676[(1)] = (14));

} else {
var statearr_22645_22677 = state_22619__$1;
(statearr_22645_22677[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (9))){
var inst_22607 = (state_22619[(2)]);
var inst_22608 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22619__$1 = (function (){var statearr_22646 = state_22619;
(statearr_22646[(15)] = inst_22607);

return statearr_22646;
})();
if(cljs.core.truth_(inst_22608)){
var statearr_22647_22678 = state_22619__$1;
(statearr_22647_22678[(1)] = (21));

} else {
var statearr_22648_22679 = state_22619__$1;
(statearr_22648_22679[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (5))){
var inst_22563 = cljs.core.async.close_BANG_.call(null,out);
var state_22619__$1 = state_22619;
var statearr_22649_22680 = state_22619__$1;
(statearr_22649_22680[(2)] = inst_22563);

(statearr_22649_22680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (14))){
var inst_22585 = (state_22619[(7)]);
var inst_22587 = cljs.core.chunked_seq_QMARK_.call(null,inst_22585);
var state_22619__$1 = state_22619;
if(inst_22587){
var statearr_22650_22681 = state_22619__$1;
(statearr_22650_22681[(1)] = (17));

} else {
var statearr_22651_22682 = state_22619__$1;
(statearr_22651_22682[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (16))){
var inst_22603 = (state_22619[(2)]);
var state_22619__$1 = state_22619;
var statearr_22652_22683 = state_22619__$1;
(statearr_22652_22683[(2)] = inst_22603);

(statearr_22652_22683[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (10))){
var inst_22572 = (state_22619[(9)]);
var inst_22574 = (state_22619[(10)]);
var inst_22579 = cljs.core._nth.call(null,inst_22572,inst_22574);
var state_22619__$1 = state_22619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22619__$1,(13),out,inst_22579);
} else {
if((state_val_22620 === (18))){
var inst_22585 = (state_22619[(7)]);
var inst_22594 = cljs.core.first.call(null,inst_22585);
var state_22619__$1 = state_22619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22619__$1,(20),out,inst_22594);
} else {
if((state_val_22620 === (8))){
var inst_22574 = (state_22619[(10)]);
var inst_22573 = (state_22619[(12)]);
var inst_22576 = (inst_22574 < inst_22573);
var inst_22577 = inst_22576;
var state_22619__$1 = state_22619;
if(cljs.core.truth_(inst_22577)){
var statearr_22653_22684 = state_22619__$1;
(statearr_22653_22684[(1)] = (10));

} else {
var statearr_22654_22685 = state_22619__$1;
(statearr_22654_22685[(1)] = (11));

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
var statearr_22658 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22658[(0)] = state_machine__5795__auto__);

(statearr_22658[(1)] = (1));

return statearr_22658;
});
var state_machine__5795__auto____1 = (function (state_22619){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_22619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e22659){if((e22659 instanceof Object)){
var ex__5798__auto__ = e22659;
var statearr_22660_22686 = state_22619;
(statearr_22660_22686[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22687 = state_22619;
state_22619 = G__22687;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_22619){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_22619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_22661 = f__5810__auto__.call(null);
(statearr_22661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_22661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto__))
);

return c__5809__auto__;
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
var c__5809__auto___22784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___22784,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___22784,out){
return (function (state_22759){
var state_val_22760 = (state_22759[(1)]);
if((state_val_22760 === (7))){
var inst_22754 = (state_22759[(2)]);
var state_22759__$1 = state_22759;
var statearr_22761_22785 = state_22759__$1;
(statearr_22761_22785[(2)] = inst_22754);

(statearr_22761_22785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22760 === (1))){
var inst_22736 = null;
var state_22759__$1 = (function (){var statearr_22762 = state_22759;
(statearr_22762[(7)] = inst_22736);

return statearr_22762;
})();
var statearr_22763_22786 = state_22759__$1;
(statearr_22763_22786[(2)] = null);

(statearr_22763_22786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22760 === (4))){
var inst_22739 = (state_22759[(8)]);
var inst_22739__$1 = (state_22759[(2)]);
var inst_22740 = (inst_22739__$1 == null);
var inst_22741 = cljs.core.not.call(null,inst_22740);
var state_22759__$1 = (function (){var statearr_22764 = state_22759;
(statearr_22764[(8)] = inst_22739__$1);

return statearr_22764;
})();
if(inst_22741){
var statearr_22765_22787 = state_22759__$1;
(statearr_22765_22787[(1)] = (5));

} else {
var statearr_22766_22788 = state_22759__$1;
(statearr_22766_22788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22760 === (6))){
var state_22759__$1 = state_22759;
var statearr_22767_22789 = state_22759__$1;
(statearr_22767_22789[(2)] = null);

(statearr_22767_22789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22760 === (3))){
var inst_22756 = (state_22759[(2)]);
var inst_22757 = cljs.core.async.close_BANG_.call(null,out);
var state_22759__$1 = (function (){var statearr_22768 = state_22759;
(statearr_22768[(9)] = inst_22756);

return statearr_22768;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22759__$1,inst_22757);
} else {
if((state_val_22760 === (2))){
var state_22759__$1 = state_22759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22759__$1,(4),ch);
} else {
if((state_val_22760 === (11))){
var inst_22739 = (state_22759[(8)]);
var inst_22748 = (state_22759[(2)]);
var inst_22736 = inst_22739;
var state_22759__$1 = (function (){var statearr_22769 = state_22759;
(statearr_22769[(7)] = inst_22736);

(statearr_22769[(10)] = inst_22748);

return statearr_22769;
})();
var statearr_22770_22790 = state_22759__$1;
(statearr_22770_22790[(2)] = null);

(statearr_22770_22790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22760 === (9))){
var inst_22739 = (state_22759[(8)]);
var state_22759__$1 = state_22759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22759__$1,(11),out,inst_22739);
} else {
if((state_val_22760 === (5))){
var inst_22739 = (state_22759[(8)]);
var inst_22736 = (state_22759[(7)]);
var inst_22743 = cljs.core._EQ_.call(null,inst_22739,inst_22736);
var state_22759__$1 = state_22759;
if(inst_22743){
var statearr_22772_22791 = state_22759__$1;
(statearr_22772_22791[(1)] = (8));

} else {
var statearr_22773_22792 = state_22759__$1;
(statearr_22773_22792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22760 === (10))){
var inst_22751 = (state_22759[(2)]);
var state_22759__$1 = state_22759;
var statearr_22774_22793 = state_22759__$1;
(statearr_22774_22793[(2)] = inst_22751);

(statearr_22774_22793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22760 === (8))){
var inst_22736 = (state_22759[(7)]);
var tmp22771 = inst_22736;
var inst_22736__$1 = tmp22771;
var state_22759__$1 = (function (){var statearr_22775 = state_22759;
(statearr_22775[(7)] = inst_22736__$1);

return statearr_22775;
})();
var statearr_22776_22794 = state_22759__$1;
(statearr_22776_22794[(2)] = null);

(statearr_22776_22794[(1)] = (2));


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
});})(c__5809__auto___22784,out))
;
return ((function (switch__5794__auto__,c__5809__auto___22784,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_22780 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22780[(0)] = state_machine__5795__auto__);

(statearr_22780[(1)] = (1));

return statearr_22780;
});
var state_machine__5795__auto____1 = (function (state_22759){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_22759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e22781){if((e22781 instanceof Object)){
var ex__5798__auto__ = e22781;
var statearr_22782_22795 = state_22759;
(statearr_22782_22795[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22796 = state_22759;
state_22759 = G__22796;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_22759){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_22759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___22784,out))
})();
var state__5811__auto__ = (function (){var statearr_22783 = f__5810__auto__.call(null);
(statearr_22783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___22784);

return statearr_22783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___22784,out))
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
var c__5809__auto___22931 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___22931,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___22931,out){
return (function (state_22901){
var state_val_22902 = (state_22901[(1)]);
if((state_val_22902 === (7))){
var inst_22897 = (state_22901[(2)]);
var state_22901__$1 = state_22901;
var statearr_22903_22932 = state_22901__$1;
(statearr_22903_22932[(2)] = inst_22897);

(statearr_22903_22932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22902 === (1))){
var inst_22864 = (new Array(n));
var inst_22865 = inst_22864;
var inst_22866 = (0);
var state_22901__$1 = (function (){var statearr_22904 = state_22901;
(statearr_22904[(7)] = inst_22866);

(statearr_22904[(8)] = inst_22865);

return statearr_22904;
})();
var statearr_22905_22933 = state_22901__$1;
(statearr_22905_22933[(2)] = null);

(statearr_22905_22933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22902 === (4))){
var inst_22869 = (state_22901[(9)]);
var inst_22869__$1 = (state_22901[(2)]);
var inst_22870 = (inst_22869__$1 == null);
var inst_22871 = cljs.core.not.call(null,inst_22870);
var state_22901__$1 = (function (){var statearr_22906 = state_22901;
(statearr_22906[(9)] = inst_22869__$1);

return statearr_22906;
})();
if(inst_22871){
var statearr_22907_22934 = state_22901__$1;
(statearr_22907_22934[(1)] = (5));

} else {
var statearr_22908_22935 = state_22901__$1;
(statearr_22908_22935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22902 === (15))){
var inst_22891 = (state_22901[(2)]);
var state_22901__$1 = state_22901;
var statearr_22909_22936 = state_22901__$1;
(statearr_22909_22936[(2)] = inst_22891);

(statearr_22909_22936[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22902 === (13))){
var state_22901__$1 = state_22901;
var statearr_22910_22937 = state_22901__$1;
(statearr_22910_22937[(2)] = null);

(statearr_22910_22937[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22902 === (6))){
var inst_22866 = (state_22901[(7)]);
var inst_22887 = (inst_22866 > (0));
var state_22901__$1 = state_22901;
if(cljs.core.truth_(inst_22887)){
var statearr_22911_22938 = state_22901__$1;
(statearr_22911_22938[(1)] = (12));

} else {
var statearr_22912_22939 = state_22901__$1;
(statearr_22912_22939[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22902 === (3))){
var inst_22899 = (state_22901[(2)]);
var state_22901__$1 = state_22901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22901__$1,inst_22899);
} else {
if((state_val_22902 === (12))){
var inst_22865 = (state_22901[(8)]);
var inst_22889 = cljs.core.vec.call(null,inst_22865);
var state_22901__$1 = state_22901;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22901__$1,(15),out,inst_22889);
} else {
if((state_val_22902 === (2))){
var state_22901__$1 = state_22901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22901__$1,(4),ch);
} else {
if((state_val_22902 === (11))){
var inst_22881 = (state_22901[(2)]);
var inst_22882 = (new Array(n));
var inst_22865 = inst_22882;
var inst_22866 = (0);
var state_22901__$1 = (function (){var statearr_22913 = state_22901;
(statearr_22913[(7)] = inst_22866);

(statearr_22913[(10)] = inst_22881);

(statearr_22913[(8)] = inst_22865);

return statearr_22913;
})();
var statearr_22914_22940 = state_22901__$1;
(statearr_22914_22940[(2)] = null);

(statearr_22914_22940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22902 === (9))){
var inst_22865 = (state_22901[(8)]);
var inst_22879 = cljs.core.vec.call(null,inst_22865);
var state_22901__$1 = state_22901;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22901__$1,(11),out,inst_22879);
} else {
if((state_val_22902 === (5))){
var inst_22866 = (state_22901[(7)]);
var inst_22865 = (state_22901[(8)]);
var inst_22869 = (state_22901[(9)]);
var inst_22874 = (state_22901[(11)]);
var inst_22873 = (inst_22865[inst_22866] = inst_22869);
var inst_22874__$1 = (inst_22866 + (1));
var inst_22875 = (inst_22874__$1 < n);
var state_22901__$1 = (function (){var statearr_22915 = state_22901;
(statearr_22915[(11)] = inst_22874__$1);

(statearr_22915[(12)] = inst_22873);

return statearr_22915;
})();
if(cljs.core.truth_(inst_22875)){
var statearr_22916_22941 = state_22901__$1;
(statearr_22916_22941[(1)] = (8));

} else {
var statearr_22917_22942 = state_22901__$1;
(statearr_22917_22942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22902 === (14))){
var inst_22894 = (state_22901[(2)]);
var inst_22895 = cljs.core.async.close_BANG_.call(null,out);
var state_22901__$1 = (function (){var statearr_22919 = state_22901;
(statearr_22919[(13)] = inst_22894);

return statearr_22919;
})();
var statearr_22920_22943 = state_22901__$1;
(statearr_22920_22943[(2)] = inst_22895);

(statearr_22920_22943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22902 === (10))){
var inst_22885 = (state_22901[(2)]);
var state_22901__$1 = state_22901;
var statearr_22921_22944 = state_22901__$1;
(statearr_22921_22944[(2)] = inst_22885);

(statearr_22921_22944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22902 === (8))){
var inst_22865 = (state_22901[(8)]);
var inst_22874 = (state_22901[(11)]);
var tmp22918 = inst_22865;
var inst_22865__$1 = tmp22918;
var inst_22866 = inst_22874;
var state_22901__$1 = (function (){var statearr_22922 = state_22901;
(statearr_22922[(7)] = inst_22866);

(statearr_22922[(8)] = inst_22865__$1);

return statearr_22922;
})();
var statearr_22923_22945 = state_22901__$1;
(statearr_22923_22945[(2)] = null);

(statearr_22923_22945[(1)] = (2));


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
});})(c__5809__auto___22931,out))
;
return ((function (switch__5794__auto__,c__5809__auto___22931,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_22927 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22927[(0)] = state_machine__5795__auto__);

(statearr_22927[(1)] = (1));

return statearr_22927;
});
var state_machine__5795__auto____1 = (function (state_22901){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_22901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e22928){if((e22928 instanceof Object)){
var ex__5798__auto__ = e22928;
var statearr_22929_22946 = state_22901;
(statearr_22929_22946[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22947 = state_22901;
state_22901 = G__22947;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_22901){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_22901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___22931,out))
})();
var state__5811__auto__ = (function (){var statearr_22930 = f__5810__auto__.call(null);
(statearr_22930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___22931);

return statearr_22930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___22931,out))
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
var c__5809__auto___23090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___23090,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___23090,out){
return (function (state_23060){
var state_val_23061 = (state_23060[(1)]);
if((state_val_23061 === (7))){
var inst_23056 = (state_23060[(2)]);
var state_23060__$1 = state_23060;
var statearr_23062_23091 = state_23060__$1;
(statearr_23062_23091[(2)] = inst_23056);

(statearr_23062_23091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23061 === (1))){
var inst_23019 = [];
var inst_23020 = inst_23019;
var inst_23021 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23060__$1 = (function (){var statearr_23063 = state_23060;
(statearr_23063[(7)] = inst_23020);

(statearr_23063[(8)] = inst_23021);

return statearr_23063;
})();
var statearr_23064_23092 = state_23060__$1;
(statearr_23064_23092[(2)] = null);

(statearr_23064_23092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23061 === (4))){
var inst_23024 = (state_23060[(9)]);
var inst_23024__$1 = (state_23060[(2)]);
var inst_23025 = (inst_23024__$1 == null);
var inst_23026 = cljs.core.not.call(null,inst_23025);
var state_23060__$1 = (function (){var statearr_23065 = state_23060;
(statearr_23065[(9)] = inst_23024__$1);

return statearr_23065;
})();
if(inst_23026){
var statearr_23066_23093 = state_23060__$1;
(statearr_23066_23093[(1)] = (5));

} else {
var statearr_23067_23094 = state_23060__$1;
(statearr_23067_23094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23061 === (15))){
var inst_23050 = (state_23060[(2)]);
var state_23060__$1 = state_23060;
var statearr_23068_23095 = state_23060__$1;
(statearr_23068_23095[(2)] = inst_23050);

(statearr_23068_23095[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23061 === (13))){
var state_23060__$1 = state_23060;
var statearr_23069_23096 = state_23060__$1;
(statearr_23069_23096[(2)] = null);

(statearr_23069_23096[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23061 === (6))){
var inst_23020 = (state_23060[(7)]);
var inst_23045 = inst_23020.length;
var inst_23046 = (inst_23045 > (0));
var state_23060__$1 = state_23060;
if(cljs.core.truth_(inst_23046)){
var statearr_23070_23097 = state_23060__$1;
(statearr_23070_23097[(1)] = (12));

} else {
var statearr_23071_23098 = state_23060__$1;
(statearr_23071_23098[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23061 === (3))){
var inst_23058 = (state_23060[(2)]);
var state_23060__$1 = state_23060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23060__$1,inst_23058);
} else {
if((state_val_23061 === (12))){
var inst_23020 = (state_23060[(7)]);
var inst_23048 = cljs.core.vec.call(null,inst_23020);
var state_23060__$1 = state_23060;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23060__$1,(15),out,inst_23048);
} else {
if((state_val_23061 === (2))){
var state_23060__$1 = state_23060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23060__$1,(4),ch);
} else {
if((state_val_23061 === (11))){
var inst_23024 = (state_23060[(9)]);
var inst_23028 = (state_23060[(10)]);
var inst_23038 = (state_23060[(2)]);
var inst_23039 = [];
var inst_23040 = inst_23039.push(inst_23024);
var inst_23020 = inst_23039;
var inst_23021 = inst_23028;
var state_23060__$1 = (function (){var statearr_23072 = state_23060;
(statearr_23072[(11)] = inst_23040);

(statearr_23072[(12)] = inst_23038);

(statearr_23072[(7)] = inst_23020);

(statearr_23072[(8)] = inst_23021);

return statearr_23072;
})();
var statearr_23073_23099 = state_23060__$1;
(statearr_23073_23099[(2)] = null);

(statearr_23073_23099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23061 === (9))){
var inst_23020 = (state_23060[(7)]);
var inst_23036 = cljs.core.vec.call(null,inst_23020);
var state_23060__$1 = state_23060;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23060__$1,(11),out,inst_23036);
} else {
if((state_val_23061 === (5))){
var inst_23024 = (state_23060[(9)]);
var inst_23028 = (state_23060[(10)]);
var inst_23021 = (state_23060[(8)]);
var inst_23028__$1 = f.call(null,inst_23024);
var inst_23029 = cljs.core._EQ_.call(null,inst_23028__$1,inst_23021);
var inst_23030 = cljs.core.keyword_identical_QMARK_.call(null,inst_23021,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23031 = (inst_23029) || (inst_23030);
var state_23060__$1 = (function (){var statearr_23074 = state_23060;
(statearr_23074[(10)] = inst_23028__$1);

return statearr_23074;
})();
if(cljs.core.truth_(inst_23031)){
var statearr_23075_23100 = state_23060__$1;
(statearr_23075_23100[(1)] = (8));

} else {
var statearr_23076_23101 = state_23060__$1;
(statearr_23076_23101[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23061 === (14))){
var inst_23053 = (state_23060[(2)]);
var inst_23054 = cljs.core.async.close_BANG_.call(null,out);
var state_23060__$1 = (function (){var statearr_23078 = state_23060;
(statearr_23078[(13)] = inst_23053);

return statearr_23078;
})();
var statearr_23079_23102 = state_23060__$1;
(statearr_23079_23102[(2)] = inst_23054);

(statearr_23079_23102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23061 === (10))){
var inst_23043 = (state_23060[(2)]);
var state_23060__$1 = state_23060;
var statearr_23080_23103 = state_23060__$1;
(statearr_23080_23103[(2)] = inst_23043);

(statearr_23080_23103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23061 === (8))){
var inst_23024 = (state_23060[(9)]);
var inst_23020 = (state_23060[(7)]);
var inst_23028 = (state_23060[(10)]);
var inst_23033 = inst_23020.push(inst_23024);
var tmp23077 = inst_23020;
var inst_23020__$1 = tmp23077;
var inst_23021 = inst_23028;
var state_23060__$1 = (function (){var statearr_23081 = state_23060;
(statearr_23081[(14)] = inst_23033);

(statearr_23081[(7)] = inst_23020__$1);

(statearr_23081[(8)] = inst_23021);

return statearr_23081;
})();
var statearr_23082_23104 = state_23060__$1;
(statearr_23082_23104[(2)] = null);

(statearr_23082_23104[(1)] = (2));


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
});})(c__5809__auto___23090,out))
;
return ((function (switch__5794__auto__,c__5809__auto___23090,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_23086 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23086[(0)] = state_machine__5795__auto__);

(statearr_23086[(1)] = (1));

return statearr_23086;
});
var state_machine__5795__auto____1 = (function (state_23060){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_23060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e23087){if((e23087 instanceof Object)){
var ex__5798__auto__ = e23087;
var statearr_23088_23105 = state_23060;
(statearr_23088_23105[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23106 = state_23060;
state_23060 = G__23106;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_23060){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_23060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___23090,out))
})();
var state__5811__auto__ = (function (){var statearr_23089 = f__5810__auto__.call(null);
(statearr_23089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___23090);

return statearr_23089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___23090,out))
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
