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
if(typeof cljs.core.async.t19993 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19993 = (function (f,fn_handler,meta19994){
this.f = f;
this.fn_handler = fn_handler;
this.meta19994 = meta19994;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19993.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19993.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t19993.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t19993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19995){
var self__ = this;
var _19995__$1 = this;
return self__.meta19994;
});

cljs.core.async.t19993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19995,meta19994__$1){
var self__ = this;
var _19995__$1 = this;
return (new cljs.core.async.t19993(self__.f,self__.fn_handler,meta19994__$1));
});

cljs.core.async.t19993.cljs$lang$type = true;

cljs.core.async.t19993.cljs$lang$ctorStr = "cljs.core.async/t19993";

cljs.core.async.t19993.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t19993");
});

cljs.core.async.__GT_t19993 = (function __GT_t19993(f__$1,fn_handler__$1,meta19994){
return (new cljs.core.async.t19993(f__$1,fn_handler__$1,meta19994));
});

}

return (new cljs.core.async.t19993(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
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
var G__19997 = buff;
if(G__19997){
var bit__4284__auto__ = null;
if(cljs.core.truth_((function (){var or__3608__auto__ = bit__4284__auto__;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return G__19997.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__19997.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19997);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19997);
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
var val_19998 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19998);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19998,ret){
return (function (){
return fn1.call(null,val_19998);
});})(val_19998,ret))
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
var n__4490__auto___19999 = n;
var x_20000 = (0);
while(true){
if((x_20000 < n__4490__auto___19999)){
(a[x_20000] = (0));

var G__20001 = (x_20000 + (1));
x_20000 = G__20001;
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

var G__20002 = (i + (1));
i = G__20002;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t20006 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20006 = (function (flag,alt_flag,meta20007){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta20007 = meta20007;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20006.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20006.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t20006.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t20006.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20008){
var self__ = this;
var _20008__$1 = this;
return self__.meta20007;
});})(flag))
;

cljs.core.async.t20006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20008,meta20007__$1){
var self__ = this;
var _20008__$1 = this;
return (new cljs.core.async.t20006(self__.flag,self__.alt_flag,meta20007__$1));
});})(flag))
;

cljs.core.async.t20006.cljs$lang$type = true;

cljs.core.async.t20006.cljs$lang$ctorStr = "cljs.core.async/t20006";

cljs.core.async.t20006.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t20006");
});})(flag))
;

cljs.core.async.__GT_t20006 = ((function (flag){
return (function __GT_t20006(flag__$1,alt_flag__$1,meta20007){
return (new cljs.core.async.t20006(flag__$1,alt_flag__$1,meta20007));
});})(flag))
;

}

return (new cljs.core.async.t20006(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t20012 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20012 = (function (cb,flag,alt_handler,meta20013){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta20013 = meta20013;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20012.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20012.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t20012.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t20012.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20014){
var self__ = this;
var _20014__$1 = this;
return self__.meta20013;
});

cljs.core.async.t20012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20014,meta20013__$1){
var self__ = this;
var _20014__$1 = this;
return (new cljs.core.async.t20012(self__.cb,self__.flag,self__.alt_handler,meta20013__$1));
});

cljs.core.async.t20012.cljs$lang$type = true;

cljs.core.async.t20012.cljs$lang$ctorStr = "cljs.core.async/t20012";

cljs.core.async.t20012.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t20012");
});

cljs.core.async.__GT_t20012 = (function __GT_t20012(cb__$1,flag__$1,alt_handler__$1,meta20013){
return (new cljs.core.async.t20012(cb__$1,flag__$1,alt_handler__$1,meta20013));
});

}

return (new cljs.core.async.t20012(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
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
return (function (p1__20015_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20015_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20016_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20016_SHARP_,port], null));
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
var G__20017 = (i + (1));
i = G__20017;
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
var alts_BANG___delegate = function (ports,p__20018){
var map__20020 = p__20018;
var map__20020__$1 = ((cljs.core.seq_QMARK_.call(null,map__20020))?cljs.core.apply.call(null,cljs.core.hash_map,map__20020):map__20020);
var opts = map__20020__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__20018 = null;
if (arguments.length > 1) {
  p__20018 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__20018);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__20021){
var ports = cljs.core.first(arglist__20021);
var p__20018 = cljs.core.rest(arglist__20021);
return alts_BANG___delegate(ports,p__20018);
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
var c__7427__auto___20116 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7427__auto___20116){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (c__7427__auto___20116){
return (function (state_20092){
var state_val_20093 = (state_20092[(1)]);
if((state_val_20093 === (7))){
var inst_20088 = (state_20092[(2)]);
var state_20092__$1 = state_20092;
var statearr_20094_20117 = state_20092__$1;
(statearr_20094_20117[(2)] = inst_20088);

(statearr_20094_20117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (1))){
var state_20092__$1 = state_20092;
var statearr_20095_20118 = state_20092__$1;
(statearr_20095_20118[(2)] = null);

(statearr_20095_20118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (4))){
var inst_20071 = (state_20092[(7)]);
var inst_20071__$1 = (state_20092[(2)]);
var inst_20072 = (inst_20071__$1 == null);
var state_20092__$1 = (function (){var statearr_20096 = state_20092;
(statearr_20096[(7)] = inst_20071__$1);

return statearr_20096;
})();
if(cljs.core.truth_(inst_20072)){
var statearr_20097_20119 = state_20092__$1;
(statearr_20097_20119[(1)] = (5));

} else {
var statearr_20098_20120 = state_20092__$1;
(statearr_20098_20120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (13))){
var state_20092__$1 = state_20092;
var statearr_20099_20121 = state_20092__$1;
(statearr_20099_20121[(2)] = null);

(statearr_20099_20121[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (6))){
var inst_20071 = (state_20092[(7)]);
var state_20092__$1 = state_20092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20092__$1,(11),to,inst_20071);
} else {
if((state_val_20093 === (3))){
var inst_20090 = (state_20092[(2)]);
var state_20092__$1 = state_20092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20092__$1,inst_20090);
} else {
if((state_val_20093 === (12))){
var state_20092__$1 = state_20092;
var statearr_20100_20122 = state_20092__$1;
(statearr_20100_20122[(2)] = null);

(statearr_20100_20122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (2))){
var state_20092__$1 = state_20092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20092__$1,(4),from);
} else {
if((state_val_20093 === (11))){
var inst_20081 = (state_20092[(2)]);
var state_20092__$1 = state_20092;
if(cljs.core.truth_(inst_20081)){
var statearr_20101_20123 = state_20092__$1;
(statearr_20101_20123[(1)] = (12));

} else {
var statearr_20102_20124 = state_20092__$1;
(statearr_20102_20124[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (9))){
var state_20092__$1 = state_20092;
var statearr_20103_20125 = state_20092__$1;
(statearr_20103_20125[(2)] = null);

(statearr_20103_20125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (5))){
var state_20092__$1 = state_20092;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20104_20126 = state_20092__$1;
(statearr_20104_20126[(1)] = (8));

} else {
var statearr_20105_20127 = state_20092__$1;
(statearr_20105_20127[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (14))){
var inst_20086 = (state_20092[(2)]);
var state_20092__$1 = state_20092;
var statearr_20106_20128 = state_20092__$1;
(statearr_20106_20128[(2)] = inst_20086);

(statearr_20106_20128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (10))){
var inst_20078 = (state_20092[(2)]);
var state_20092__$1 = state_20092;
var statearr_20107_20129 = state_20092__$1;
(statearr_20107_20129[(2)] = inst_20078);

(statearr_20107_20129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (8))){
var inst_20075 = cljs.core.async.close_BANG_.call(null,to);
var state_20092__$1 = state_20092;
var statearr_20108_20130 = state_20092__$1;
(statearr_20108_20130[(2)] = inst_20075);

(statearr_20108_20130[(1)] = (10));


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
});})(c__7427__auto___20116))
;
return ((function (switch__7371__auto__,c__7427__auto___20116){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_20112 = [null,null,null,null,null,null,null,null];
(statearr_20112[(0)] = state_machine__7372__auto__);

(statearr_20112[(1)] = (1));

return statearr_20112;
});
var state_machine__7372__auto____1 = (function (state_20092){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_20092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e20113){if((e20113 instanceof Object)){
var ex__7375__auto__ = e20113;
var statearr_20114_20131 = state_20092;
(statearr_20114_20131[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20132 = state_20092;
state_20092 = G__20132;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_20092){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_20092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto___20116))
})();
var state__7429__auto__ = (function (){var statearr_20115 = f__7428__auto__.call(null);
(statearr_20115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto___20116);

return statearr_20115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(c__7427__auto___20116))
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
return (function (p__20316){
var vec__20317 = p__20316;
var v = cljs.core.nth.call(null,vec__20317,(0),null);
var p = cljs.core.nth.call(null,vec__20317,(1),null);
var job = vec__20317;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7427__auto___20499 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7427__auto___20499,res,vec__20317,v,p,job,jobs,results){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (c__7427__auto___20499,res,vec__20317,v,p,job,jobs,results){
return (function (state_20322){
var state_val_20323 = (state_20322[(1)]);
if((state_val_20323 === (2))){
var inst_20319 = (state_20322[(2)]);
var inst_20320 = cljs.core.async.close_BANG_.call(null,res);
var state_20322__$1 = (function (){var statearr_20324 = state_20322;
(statearr_20324[(7)] = inst_20319);

return statearr_20324;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20322__$1,inst_20320);
} else {
if((state_val_20323 === (1))){
var state_20322__$1 = state_20322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20322__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7427__auto___20499,res,vec__20317,v,p,job,jobs,results))
;
return ((function (switch__7371__auto__,c__7427__auto___20499,res,vec__20317,v,p,job,jobs,results){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_20328 = [null,null,null,null,null,null,null,null];
(statearr_20328[(0)] = state_machine__7372__auto__);

(statearr_20328[(1)] = (1));

return statearr_20328;
});
var state_machine__7372__auto____1 = (function (state_20322){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_20322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e20329){if((e20329 instanceof Object)){
var ex__7375__auto__ = e20329;
var statearr_20330_20500 = state_20322;
(statearr_20330_20500[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20501 = state_20322;
state_20322 = G__20501;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_20322){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_20322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto___20499,res,vec__20317,v,p,job,jobs,results))
})();
var state__7429__auto__ = (function (){var statearr_20331 = f__7428__auto__.call(null);
(statearr_20331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto___20499);

return statearr_20331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(c__7427__auto___20499,res,vec__20317,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20332){
var vec__20333 = p__20332;
var v = cljs.core.nth.call(null,vec__20333,(0),null);
var p = cljs.core.nth.call(null,vec__20333,(1),null);
var job = vec__20333;
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
var n__4490__auto___20502 = n;
var __20503 = (0);
while(true){
if((__20503 < n__4490__auto___20502)){
var G__20334_20504 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20334_20504) {
case "async":
var c__7427__auto___20506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20503,c__7427__auto___20506,G__20334_20504,n__4490__auto___20502,jobs,results,process,async){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (__20503,c__7427__auto___20506,G__20334_20504,n__4490__auto___20502,jobs,results,process,async){
return (function (state_20347){
var state_val_20348 = (state_20347[(1)]);
if((state_val_20348 === (7))){
var inst_20343 = (state_20347[(2)]);
var state_20347__$1 = state_20347;
var statearr_20349_20507 = state_20347__$1;
(statearr_20349_20507[(2)] = inst_20343);

(statearr_20349_20507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20348 === (6))){
var state_20347__$1 = state_20347;
var statearr_20350_20508 = state_20347__$1;
(statearr_20350_20508[(2)] = null);

(statearr_20350_20508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20348 === (5))){
var state_20347__$1 = state_20347;
var statearr_20351_20509 = state_20347__$1;
(statearr_20351_20509[(2)] = null);

(statearr_20351_20509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20348 === (4))){
var inst_20337 = (state_20347[(2)]);
var inst_20338 = async.call(null,inst_20337);
var state_20347__$1 = state_20347;
if(cljs.core.truth_(inst_20338)){
var statearr_20352_20510 = state_20347__$1;
(statearr_20352_20510[(1)] = (5));

} else {
var statearr_20353_20511 = state_20347__$1;
(statearr_20353_20511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20348 === (3))){
var inst_20345 = (state_20347[(2)]);
var state_20347__$1 = state_20347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20347__$1,inst_20345);
} else {
if((state_val_20348 === (2))){
var state_20347__$1 = state_20347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20347__$1,(4),jobs);
} else {
if((state_val_20348 === (1))){
var state_20347__$1 = state_20347;
var statearr_20354_20512 = state_20347__$1;
(statearr_20354_20512[(2)] = null);

(statearr_20354_20512[(1)] = (2));


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
});})(__20503,c__7427__auto___20506,G__20334_20504,n__4490__auto___20502,jobs,results,process,async))
;
return ((function (__20503,switch__7371__auto__,c__7427__auto___20506,G__20334_20504,n__4490__auto___20502,jobs,results,process,async){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_20358 = [null,null,null,null,null,null,null];
(statearr_20358[(0)] = state_machine__7372__auto__);

(statearr_20358[(1)] = (1));

return statearr_20358;
});
var state_machine__7372__auto____1 = (function (state_20347){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_20347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e20359){if((e20359 instanceof Object)){
var ex__7375__auto__ = e20359;
var statearr_20360_20513 = state_20347;
(statearr_20360_20513[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20514 = state_20347;
state_20347 = G__20514;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_20347){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_20347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(__20503,switch__7371__auto__,c__7427__auto___20506,G__20334_20504,n__4490__auto___20502,jobs,results,process,async))
})();
var state__7429__auto__ = (function (){var statearr_20361 = f__7428__auto__.call(null);
(statearr_20361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto___20506);

return statearr_20361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(__20503,c__7427__auto___20506,G__20334_20504,n__4490__auto___20502,jobs,results,process,async))
);


break;
case "compute":
var c__7427__auto___20515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20503,c__7427__auto___20515,G__20334_20504,n__4490__auto___20502,jobs,results,process,async){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (__20503,c__7427__auto___20515,G__20334_20504,n__4490__auto___20502,jobs,results,process,async){
return (function (state_20374){
var state_val_20375 = (state_20374[(1)]);
if((state_val_20375 === (7))){
var inst_20370 = (state_20374[(2)]);
var state_20374__$1 = state_20374;
var statearr_20376_20516 = state_20374__$1;
(statearr_20376_20516[(2)] = inst_20370);

(statearr_20376_20516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20375 === (6))){
var state_20374__$1 = state_20374;
var statearr_20377_20517 = state_20374__$1;
(statearr_20377_20517[(2)] = null);

(statearr_20377_20517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20375 === (5))){
var state_20374__$1 = state_20374;
var statearr_20378_20518 = state_20374__$1;
(statearr_20378_20518[(2)] = null);

(statearr_20378_20518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20375 === (4))){
var inst_20364 = (state_20374[(2)]);
var inst_20365 = process.call(null,inst_20364);
var state_20374__$1 = state_20374;
if(cljs.core.truth_(inst_20365)){
var statearr_20379_20519 = state_20374__$1;
(statearr_20379_20519[(1)] = (5));

} else {
var statearr_20380_20520 = state_20374__$1;
(statearr_20380_20520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20375 === (3))){
var inst_20372 = (state_20374[(2)]);
var state_20374__$1 = state_20374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20374__$1,inst_20372);
} else {
if((state_val_20375 === (2))){
var state_20374__$1 = state_20374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20374__$1,(4),jobs);
} else {
if((state_val_20375 === (1))){
var state_20374__$1 = state_20374;
var statearr_20381_20521 = state_20374__$1;
(statearr_20381_20521[(2)] = null);

(statearr_20381_20521[(1)] = (2));


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
});})(__20503,c__7427__auto___20515,G__20334_20504,n__4490__auto___20502,jobs,results,process,async))
;
return ((function (__20503,switch__7371__auto__,c__7427__auto___20515,G__20334_20504,n__4490__auto___20502,jobs,results,process,async){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_20385 = [null,null,null,null,null,null,null];
(statearr_20385[(0)] = state_machine__7372__auto__);

(statearr_20385[(1)] = (1));

return statearr_20385;
});
var state_machine__7372__auto____1 = (function (state_20374){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_20374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e20386){if((e20386 instanceof Object)){
var ex__7375__auto__ = e20386;
var statearr_20387_20522 = state_20374;
(statearr_20387_20522[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20523 = state_20374;
state_20374 = G__20523;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_20374){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_20374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(__20503,switch__7371__auto__,c__7427__auto___20515,G__20334_20504,n__4490__auto___20502,jobs,results,process,async))
})();
var state__7429__auto__ = (function (){var statearr_20388 = f__7428__auto__.call(null);
(statearr_20388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto___20515);

return statearr_20388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(__20503,c__7427__auto___20515,G__20334_20504,n__4490__auto___20502,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20524 = (__20503 + (1));
__20503 = G__20524;
continue;
} else {
}
break;
}

var c__7427__auto___20525 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7427__auto___20525,jobs,results,process,async){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (c__7427__auto___20525,jobs,results,process,async){
return (function (state_20410){
var state_val_20411 = (state_20410[(1)]);
if((state_val_20411 === (9))){
var inst_20403 = (state_20410[(2)]);
var state_20410__$1 = (function (){var statearr_20412 = state_20410;
(statearr_20412[(7)] = inst_20403);

return statearr_20412;
})();
var statearr_20413_20526 = state_20410__$1;
(statearr_20413_20526[(2)] = null);

(statearr_20413_20526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20411 === (8))){
var inst_20396 = (state_20410[(8)]);
var inst_20401 = (state_20410[(2)]);
var state_20410__$1 = (function (){var statearr_20414 = state_20410;
(statearr_20414[(9)] = inst_20401);

return statearr_20414;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20410__$1,(9),results,inst_20396);
} else {
if((state_val_20411 === (7))){
var inst_20406 = (state_20410[(2)]);
var state_20410__$1 = state_20410;
var statearr_20415_20527 = state_20410__$1;
(statearr_20415_20527[(2)] = inst_20406);

(statearr_20415_20527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20411 === (6))){
var inst_20391 = (state_20410[(10)]);
var inst_20396 = (state_20410[(8)]);
var inst_20396__$1 = cljs.core.async.chan.call(null,(1));
var inst_20397 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20398 = [inst_20391,inst_20396__$1];
var inst_20399 = (new cljs.core.PersistentVector(null,2,(5),inst_20397,inst_20398,null));
var state_20410__$1 = (function (){var statearr_20416 = state_20410;
(statearr_20416[(8)] = inst_20396__$1);

return statearr_20416;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20410__$1,(8),jobs,inst_20399);
} else {
if((state_val_20411 === (5))){
var inst_20394 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20410__$1 = state_20410;
var statearr_20417_20528 = state_20410__$1;
(statearr_20417_20528[(2)] = inst_20394);

(statearr_20417_20528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20411 === (4))){
var inst_20391 = (state_20410[(10)]);
var inst_20391__$1 = (state_20410[(2)]);
var inst_20392 = (inst_20391__$1 == null);
var state_20410__$1 = (function (){var statearr_20418 = state_20410;
(statearr_20418[(10)] = inst_20391__$1);

return statearr_20418;
})();
if(cljs.core.truth_(inst_20392)){
var statearr_20419_20529 = state_20410__$1;
(statearr_20419_20529[(1)] = (5));

} else {
var statearr_20420_20530 = state_20410__$1;
(statearr_20420_20530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20411 === (3))){
var inst_20408 = (state_20410[(2)]);
var state_20410__$1 = state_20410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20410__$1,inst_20408);
} else {
if((state_val_20411 === (2))){
var state_20410__$1 = state_20410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20410__$1,(4),from);
} else {
if((state_val_20411 === (1))){
var state_20410__$1 = state_20410;
var statearr_20421_20531 = state_20410__$1;
(statearr_20421_20531[(2)] = null);

(statearr_20421_20531[(1)] = (2));


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
});})(c__7427__auto___20525,jobs,results,process,async))
;
return ((function (switch__7371__auto__,c__7427__auto___20525,jobs,results,process,async){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_20425 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20425[(0)] = state_machine__7372__auto__);

(statearr_20425[(1)] = (1));

return statearr_20425;
});
var state_machine__7372__auto____1 = (function (state_20410){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_20410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e20426){if((e20426 instanceof Object)){
var ex__7375__auto__ = e20426;
var statearr_20427_20532 = state_20410;
(statearr_20427_20532[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20533 = state_20410;
state_20410 = G__20533;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_20410){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_20410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto___20525,jobs,results,process,async))
})();
var state__7429__auto__ = (function (){var statearr_20428 = f__7428__auto__.call(null);
(statearr_20428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto___20525);

return statearr_20428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(c__7427__auto___20525,jobs,results,process,async))
);


var c__7427__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7427__auto__,jobs,results,process,async){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (c__7427__auto__,jobs,results,process,async){
return (function (state_20466){
var state_val_20467 = (state_20466[(1)]);
if((state_val_20467 === (7))){
var inst_20462 = (state_20466[(2)]);
var state_20466__$1 = state_20466;
var statearr_20468_20534 = state_20466__$1;
(statearr_20468_20534[(2)] = inst_20462);

(statearr_20468_20534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (20))){
var state_20466__$1 = state_20466;
var statearr_20469_20535 = state_20466__$1;
(statearr_20469_20535[(2)] = null);

(statearr_20469_20535[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (1))){
var state_20466__$1 = state_20466;
var statearr_20470_20536 = state_20466__$1;
(statearr_20470_20536[(2)] = null);

(statearr_20470_20536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (4))){
var inst_20431 = (state_20466[(7)]);
var inst_20431__$1 = (state_20466[(2)]);
var inst_20432 = (inst_20431__$1 == null);
var state_20466__$1 = (function (){var statearr_20471 = state_20466;
(statearr_20471[(7)] = inst_20431__$1);

return statearr_20471;
})();
if(cljs.core.truth_(inst_20432)){
var statearr_20472_20537 = state_20466__$1;
(statearr_20472_20537[(1)] = (5));

} else {
var statearr_20473_20538 = state_20466__$1;
(statearr_20473_20538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (15))){
var inst_20444 = (state_20466[(8)]);
var state_20466__$1 = state_20466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20466__$1,(18),to,inst_20444);
} else {
if((state_val_20467 === (21))){
var inst_20457 = (state_20466[(2)]);
var state_20466__$1 = state_20466;
var statearr_20474_20539 = state_20466__$1;
(statearr_20474_20539[(2)] = inst_20457);

(statearr_20474_20539[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (13))){
var inst_20459 = (state_20466[(2)]);
var state_20466__$1 = (function (){var statearr_20475 = state_20466;
(statearr_20475[(9)] = inst_20459);

return statearr_20475;
})();
var statearr_20476_20540 = state_20466__$1;
(statearr_20476_20540[(2)] = null);

(statearr_20476_20540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (6))){
var inst_20431 = (state_20466[(7)]);
var state_20466__$1 = state_20466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20466__$1,(11),inst_20431);
} else {
if((state_val_20467 === (17))){
var inst_20452 = (state_20466[(2)]);
var state_20466__$1 = state_20466;
if(cljs.core.truth_(inst_20452)){
var statearr_20477_20541 = state_20466__$1;
(statearr_20477_20541[(1)] = (19));

} else {
var statearr_20478_20542 = state_20466__$1;
(statearr_20478_20542[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (3))){
var inst_20464 = (state_20466[(2)]);
var state_20466__$1 = state_20466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20466__$1,inst_20464);
} else {
if((state_val_20467 === (12))){
var inst_20441 = (state_20466[(10)]);
var state_20466__$1 = state_20466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20466__$1,(14),inst_20441);
} else {
if((state_val_20467 === (2))){
var state_20466__$1 = state_20466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20466__$1,(4),results);
} else {
if((state_val_20467 === (19))){
var state_20466__$1 = state_20466;
var statearr_20479_20543 = state_20466__$1;
(statearr_20479_20543[(2)] = null);

(statearr_20479_20543[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (11))){
var inst_20441 = (state_20466[(2)]);
var state_20466__$1 = (function (){var statearr_20480 = state_20466;
(statearr_20480[(10)] = inst_20441);

return statearr_20480;
})();
var statearr_20481_20544 = state_20466__$1;
(statearr_20481_20544[(2)] = null);

(statearr_20481_20544[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (9))){
var state_20466__$1 = state_20466;
var statearr_20482_20545 = state_20466__$1;
(statearr_20482_20545[(2)] = null);

(statearr_20482_20545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (5))){
var state_20466__$1 = state_20466;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20483_20546 = state_20466__$1;
(statearr_20483_20546[(1)] = (8));

} else {
var statearr_20484_20547 = state_20466__$1;
(statearr_20484_20547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (14))){
var inst_20444 = (state_20466[(8)]);
var inst_20446 = (state_20466[(11)]);
var inst_20444__$1 = (state_20466[(2)]);
var inst_20445 = (inst_20444__$1 == null);
var inst_20446__$1 = cljs.core.not.call(null,inst_20445);
var state_20466__$1 = (function (){var statearr_20485 = state_20466;
(statearr_20485[(8)] = inst_20444__$1);

(statearr_20485[(11)] = inst_20446__$1);

return statearr_20485;
})();
if(inst_20446__$1){
var statearr_20486_20548 = state_20466__$1;
(statearr_20486_20548[(1)] = (15));

} else {
var statearr_20487_20549 = state_20466__$1;
(statearr_20487_20549[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (16))){
var inst_20446 = (state_20466[(11)]);
var state_20466__$1 = state_20466;
var statearr_20488_20550 = state_20466__$1;
(statearr_20488_20550[(2)] = inst_20446);

(statearr_20488_20550[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (10))){
var inst_20438 = (state_20466[(2)]);
var state_20466__$1 = state_20466;
var statearr_20489_20551 = state_20466__$1;
(statearr_20489_20551[(2)] = inst_20438);

(statearr_20489_20551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (18))){
var inst_20449 = (state_20466[(2)]);
var state_20466__$1 = state_20466;
var statearr_20490_20552 = state_20466__$1;
(statearr_20490_20552[(2)] = inst_20449);

(statearr_20490_20552[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (8))){
var inst_20435 = cljs.core.async.close_BANG_.call(null,to);
var state_20466__$1 = state_20466;
var statearr_20491_20553 = state_20466__$1;
(statearr_20491_20553[(2)] = inst_20435);

(statearr_20491_20553[(1)] = (10));


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
});})(c__7427__auto__,jobs,results,process,async))
;
return ((function (switch__7371__auto__,c__7427__auto__,jobs,results,process,async){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_20495 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20495[(0)] = state_machine__7372__auto__);

(statearr_20495[(1)] = (1));

return statearr_20495;
});
var state_machine__7372__auto____1 = (function (state_20466){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_20466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e20496){if((e20496 instanceof Object)){
var ex__7375__auto__ = e20496;
var statearr_20497_20554 = state_20466;
(statearr_20497_20554[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20555 = state_20466;
state_20466 = G__20555;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_20466){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_20466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto__,jobs,results,process,async))
})();
var state__7429__auto__ = (function (){var statearr_20498 = f__7428__auto__.call(null);
(statearr_20498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto__);

return statearr_20498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(c__7427__auto__,jobs,results,process,async))
);

return c__7427__auto__;
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
var c__7427__auto___20656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7427__auto___20656,tc,fc){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (c__7427__auto___20656,tc,fc){
return (function (state_20631){
var state_val_20632 = (state_20631[(1)]);
if((state_val_20632 === (7))){
var inst_20627 = (state_20631[(2)]);
var state_20631__$1 = state_20631;
var statearr_20633_20657 = state_20631__$1;
(statearr_20633_20657[(2)] = inst_20627);

(statearr_20633_20657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (1))){
var state_20631__$1 = state_20631;
var statearr_20634_20658 = state_20631__$1;
(statearr_20634_20658[(2)] = null);

(statearr_20634_20658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (4))){
var inst_20608 = (state_20631[(7)]);
var inst_20608__$1 = (state_20631[(2)]);
var inst_20609 = (inst_20608__$1 == null);
var state_20631__$1 = (function (){var statearr_20635 = state_20631;
(statearr_20635[(7)] = inst_20608__$1);

return statearr_20635;
})();
if(cljs.core.truth_(inst_20609)){
var statearr_20636_20659 = state_20631__$1;
(statearr_20636_20659[(1)] = (5));

} else {
var statearr_20637_20660 = state_20631__$1;
(statearr_20637_20660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (13))){
var state_20631__$1 = state_20631;
var statearr_20638_20661 = state_20631__$1;
(statearr_20638_20661[(2)] = null);

(statearr_20638_20661[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (6))){
var inst_20608 = (state_20631[(7)]);
var inst_20614 = p.call(null,inst_20608);
var state_20631__$1 = state_20631;
if(cljs.core.truth_(inst_20614)){
var statearr_20639_20662 = state_20631__$1;
(statearr_20639_20662[(1)] = (9));

} else {
var statearr_20640_20663 = state_20631__$1;
(statearr_20640_20663[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (3))){
var inst_20629 = (state_20631[(2)]);
var state_20631__$1 = state_20631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20631__$1,inst_20629);
} else {
if((state_val_20632 === (12))){
var state_20631__$1 = state_20631;
var statearr_20641_20664 = state_20631__$1;
(statearr_20641_20664[(2)] = null);

(statearr_20641_20664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (2))){
var state_20631__$1 = state_20631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20631__$1,(4),ch);
} else {
if((state_val_20632 === (11))){
var inst_20608 = (state_20631[(7)]);
var inst_20618 = (state_20631[(2)]);
var state_20631__$1 = state_20631;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20631__$1,(8),inst_20618,inst_20608);
} else {
if((state_val_20632 === (9))){
var state_20631__$1 = state_20631;
var statearr_20642_20665 = state_20631__$1;
(statearr_20642_20665[(2)] = tc);

(statearr_20642_20665[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (5))){
var inst_20611 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20612 = cljs.core.async.close_BANG_.call(null,fc);
var state_20631__$1 = (function (){var statearr_20643 = state_20631;
(statearr_20643[(8)] = inst_20611);

return statearr_20643;
})();
var statearr_20644_20666 = state_20631__$1;
(statearr_20644_20666[(2)] = inst_20612);

(statearr_20644_20666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (14))){
var inst_20625 = (state_20631[(2)]);
var state_20631__$1 = state_20631;
var statearr_20645_20667 = state_20631__$1;
(statearr_20645_20667[(2)] = inst_20625);

(statearr_20645_20667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (10))){
var state_20631__$1 = state_20631;
var statearr_20646_20668 = state_20631__$1;
(statearr_20646_20668[(2)] = fc);

(statearr_20646_20668[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (8))){
var inst_20620 = (state_20631[(2)]);
var state_20631__$1 = state_20631;
if(cljs.core.truth_(inst_20620)){
var statearr_20647_20669 = state_20631__$1;
(statearr_20647_20669[(1)] = (12));

} else {
var statearr_20648_20670 = state_20631__$1;
(statearr_20648_20670[(1)] = (13));

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
});})(c__7427__auto___20656,tc,fc))
;
return ((function (switch__7371__auto__,c__7427__auto___20656,tc,fc){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_20652 = [null,null,null,null,null,null,null,null,null];
(statearr_20652[(0)] = state_machine__7372__auto__);

(statearr_20652[(1)] = (1));

return statearr_20652;
});
var state_machine__7372__auto____1 = (function (state_20631){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_20631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e20653){if((e20653 instanceof Object)){
var ex__7375__auto__ = e20653;
var statearr_20654_20671 = state_20631;
(statearr_20654_20671[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20672 = state_20631;
state_20631 = G__20672;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_20631){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_20631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto___20656,tc,fc))
})();
var state__7429__auto__ = (function (){var statearr_20655 = f__7428__auto__.call(null);
(statearr_20655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto___20656);

return statearr_20655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(c__7427__auto___20656,tc,fc))
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
var c__7427__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7427__auto__){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (c__7427__auto__){
return (function (state_20719){
var state_val_20720 = (state_20719[(1)]);
if((state_val_20720 === (7))){
var inst_20715 = (state_20719[(2)]);
var state_20719__$1 = state_20719;
var statearr_20721_20737 = state_20719__$1;
(statearr_20721_20737[(2)] = inst_20715);

(statearr_20721_20737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20720 === (6))){
var inst_20708 = (state_20719[(7)]);
var inst_20705 = (state_20719[(8)]);
var inst_20712 = f.call(null,inst_20705,inst_20708);
var inst_20705__$1 = inst_20712;
var state_20719__$1 = (function (){var statearr_20722 = state_20719;
(statearr_20722[(8)] = inst_20705__$1);

return statearr_20722;
})();
var statearr_20723_20738 = state_20719__$1;
(statearr_20723_20738[(2)] = null);

(statearr_20723_20738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20720 === (5))){
var inst_20705 = (state_20719[(8)]);
var state_20719__$1 = state_20719;
var statearr_20724_20739 = state_20719__$1;
(statearr_20724_20739[(2)] = inst_20705);

(statearr_20724_20739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20720 === (4))){
var inst_20708 = (state_20719[(7)]);
var inst_20708__$1 = (state_20719[(2)]);
var inst_20709 = (inst_20708__$1 == null);
var state_20719__$1 = (function (){var statearr_20725 = state_20719;
(statearr_20725[(7)] = inst_20708__$1);

return statearr_20725;
})();
if(cljs.core.truth_(inst_20709)){
var statearr_20726_20740 = state_20719__$1;
(statearr_20726_20740[(1)] = (5));

} else {
var statearr_20727_20741 = state_20719__$1;
(statearr_20727_20741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20720 === (3))){
var inst_20717 = (state_20719[(2)]);
var state_20719__$1 = state_20719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20719__$1,inst_20717);
} else {
if((state_val_20720 === (2))){
var state_20719__$1 = state_20719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20719__$1,(4),ch);
} else {
if((state_val_20720 === (1))){
var inst_20705 = init;
var state_20719__$1 = (function (){var statearr_20728 = state_20719;
(statearr_20728[(8)] = inst_20705);

return statearr_20728;
})();
var statearr_20729_20742 = state_20719__$1;
(statearr_20729_20742[(2)] = null);

(statearr_20729_20742[(1)] = (2));


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
});})(c__7427__auto__))
;
return ((function (switch__7371__auto__,c__7427__auto__){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_20733 = [null,null,null,null,null,null,null,null,null];
(statearr_20733[(0)] = state_machine__7372__auto__);

(statearr_20733[(1)] = (1));

return statearr_20733;
});
var state_machine__7372__auto____1 = (function (state_20719){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_20719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e20734){if((e20734 instanceof Object)){
var ex__7375__auto__ = e20734;
var statearr_20735_20743 = state_20719;
(statearr_20735_20743[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20744 = state_20719;
state_20719 = G__20744;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_20719){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_20719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto__))
})();
var state__7429__auto__ = (function (){var statearr_20736 = f__7428__auto__.call(null);
(statearr_20736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto__);

return statearr_20736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(c__7427__auto__))
);

return c__7427__auto__;
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
var c__7427__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7427__auto__){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (c__7427__auto__){
return (function (state_20818){
var state_val_20819 = (state_20818[(1)]);
if((state_val_20819 === (7))){
var inst_20800 = (state_20818[(2)]);
var state_20818__$1 = state_20818;
var statearr_20820_20843 = state_20818__$1;
(statearr_20820_20843[(2)] = inst_20800);

(statearr_20820_20843[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20819 === (1))){
var inst_20794 = cljs.core.seq.call(null,coll);
var inst_20795 = inst_20794;
var state_20818__$1 = (function (){var statearr_20821 = state_20818;
(statearr_20821[(7)] = inst_20795);

return statearr_20821;
})();
var statearr_20822_20844 = state_20818__$1;
(statearr_20822_20844[(2)] = null);

(statearr_20822_20844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20819 === (4))){
var inst_20795 = (state_20818[(7)]);
var inst_20798 = cljs.core.first.call(null,inst_20795);
var state_20818__$1 = state_20818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20818__$1,(7),ch,inst_20798);
} else {
if((state_val_20819 === (13))){
var inst_20812 = (state_20818[(2)]);
var state_20818__$1 = state_20818;
var statearr_20823_20845 = state_20818__$1;
(statearr_20823_20845[(2)] = inst_20812);

(statearr_20823_20845[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20819 === (6))){
var inst_20803 = (state_20818[(2)]);
var state_20818__$1 = state_20818;
if(cljs.core.truth_(inst_20803)){
var statearr_20824_20846 = state_20818__$1;
(statearr_20824_20846[(1)] = (8));

} else {
var statearr_20825_20847 = state_20818__$1;
(statearr_20825_20847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20819 === (3))){
var inst_20816 = (state_20818[(2)]);
var state_20818__$1 = state_20818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20818__$1,inst_20816);
} else {
if((state_val_20819 === (12))){
var state_20818__$1 = state_20818;
var statearr_20826_20848 = state_20818__$1;
(statearr_20826_20848[(2)] = null);

(statearr_20826_20848[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20819 === (2))){
var inst_20795 = (state_20818[(7)]);
var state_20818__$1 = state_20818;
if(cljs.core.truth_(inst_20795)){
var statearr_20827_20849 = state_20818__$1;
(statearr_20827_20849[(1)] = (4));

} else {
var statearr_20828_20850 = state_20818__$1;
(statearr_20828_20850[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20819 === (11))){
var inst_20809 = cljs.core.async.close_BANG_.call(null,ch);
var state_20818__$1 = state_20818;
var statearr_20829_20851 = state_20818__$1;
(statearr_20829_20851[(2)] = inst_20809);

(statearr_20829_20851[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20819 === (9))){
var state_20818__$1 = state_20818;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20830_20852 = state_20818__$1;
(statearr_20830_20852[(1)] = (11));

} else {
var statearr_20831_20853 = state_20818__$1;
(statearr_20831_20853[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20819 === (5))){
var inst_20795 = (state_20818[(7)]);
var state_20818__$1 = state_20818;
var statearr_20832_20854 = state_20818__$1;
(statearr_20832_20854[(2)] = inst_20795);

(statearr_20832_20854[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20819 === (10))){
var inst_20814 = (state_20818[(2)]);
var state_20818__$1 = state_20818;
var statearr_20833_20855 = state_20818__$1;
(statearr_20833_20855[(2)] = inst_20814);

(statearr_20833_20855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20819 === (8))){
var inst_20795 = (state_20818[(7)]);
var inst_20805 = cljs.core.next.call(null,inst_20795);
var inst_20795__$1 = inst_20805;
var state_20818__$1 = (function (){var statearr_20834 = state_20818;
(statearr_20834[(7)] = inst_20795__$1);

return statearr_20834;
})();
var statearr_20835_20856 = state_20818__$1;
(statearr_20835_20856[(2)] = null);

(statearr_20835_20856[(1)] = (2));


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
});})(c__7427__auto__))
;
return ((function (switch__7371__auto__,c__7427__auto__){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_20839 = [null,null,null,null,null,null,null,null];
(statearr_20839[(0)] = state_machine__7372__auto__);

(statearr_20839[(1)] = (1));

return statearr_20839;
});
var state_machine__7372__auto____1 = (function (state_20818){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_20818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e20840){if((e20840 instanceof Object)){
var ex__7375__auto__ = e20840;
var statearr_20841_20857 = state_20818;
(statearr_20841_20857[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20858 = state_20818;
state_20818 = G__20858;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_20818){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_20818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto__))
})();
var state__7429__auto__ = (function (){var statearr_20842 = f__7428__auto__.call(null);
(statearr_20842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto__);

return statearr_20842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(c__7427__auto__))
);

return c__7427__auto__;
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

cljs.core.async.Mux = (function (){var obj20860 = {};
return obj20860;
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


cljs.core.async.Mult = (function (){var obj20862 = {};
return obj20862;
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
if(typeof cljs.core.async.t21084 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21084 = (function (cs,ch,mult,meta21085){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta21085 = meta21085;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21084.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t21084.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t21084.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t21084.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t21084.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21084.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t21084.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21086){
var self__ = this;
var _21086__$1 = this;
return self__.meta21085;
});})(cs))
;

cljs.core.async.t21084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21086,meta21085__$1){
var self__ = this;
var _21086__$1 = this;
return (new cljs.core.async.t21084(self__.cs,self__.ch,self__.mult,meta21085__$1));
});})(cs))
;

cljs.core.async.t21084.cljs$lang$type = true;

cljs.core.async.t21084.cljs$lang$ctorStr = "cljs.core.async/t21084";

cljs.core.async.t21084.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t21084");
});})(cs))
;

cljs.core.async.__GT_t21084 = ((function (cs){
return (function __GT_t21084(cs__$1,ch__$1,mult__$1,meta21085){
return (new cljs.core.async.t21084(cs__$1,ch__$1,mult__$1,meta21085));
});})(cs))
;

}

return (new cljs.core.async.t21084(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
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
var c__7427__auto___21305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7427__auto___21305,cs,m,dchan,dctr,done){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (c__7427__auto___21305,cs,m,dchan,dctr,done){
return (function (state_21217){
var state_val_21218 = (state_21217[(1)]);
if((state_val_21218 === (7))){
var inst_21213 = (state_21217[(2)]);
var state_21217__$1 = state_21217;
var statearr_21219_21306 = state_21217__$1;
(statearr_21219_21306[(2)] = inst_21213);

(statearr_21219_21306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (20))){
var inst_21118 = (state_21217[(7)]);
var inst_21128 = cljs.core.first.call(null,inst_21118);
var inst_21129 = cljs.core.nth.call(null,inst_21128,(0),null);
var inst_21130 = cljs.core.nth.call(null,inst_21128,(1),null);
var state_21217__$1 = (function (){var statearr_21220 = state_21217;
(statearr_21220[(8)] = inst_21129);

return statearr_21220;
})();
if(cljs.core.truth_(inst_21130)){
var statearr_21221_21307 = state_21217__$1;
(statearr_21221_21307[(1)] = (22));

} else {
var statearr_21222_21308 = state_21217__$1;
(statearr_21222_21308[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (27))){
var inst_21160 = (state_21217[(9)]);
var inst_21089 = (state_21217[(10)]);
var inst_21165 = (state_21217[(11)]);
var inst_21158 = (state_21217[(12)]);
var inst_21165__$1 = cljs.core._nth.call(null,inst_21158,inst_21160);
var inst_21166 = cljs.core.async.put_BANG_.call(null,inst_21165__$1,inst_21089,done);
var state_21217__$1 = (function (){var statearr_21223 = state_21217;
(statearr_21223[(11)] = inst_21165__$1);

return statearr_21223;
})();
if(cljs.core.truth_(inst_21166)){
var statearr_21224_21309 = state_21217__$1;
(statearr_21224_21309[(1)] = (30));

} else {
var statearr_21225_21310 = state_21217__$1;
(statearr_21225_21310[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (1))){
var state_21217__$1 = state_21217;
var statearr_21226_21311 = state_21217__$1;
(statearr_21226_21311[(2)] = null);

(statearr_21226_21311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (24))){
var inst_21118 = (state_21217[(7)]);
var inst_21135 = (state_21217[(2)]);
var inst_21136 = cljs.core.next.call(null,inst_21118);
var inst_21098 = inst_21136;
var inst_21099 = null;
var inst_21100 = (0);
var inst_21101 = (0);
var state_21217__$1 = (function (){var statearr_21227 = state_21217;
(statearr_21227[(13)] = inst_21101);

(statearr_21227[(14)] = inst_21099);

(statearr_21227[(15)] = inst_21100);

(statearr_21227[(16)] = inst_21098);

(statearr_21227[(17)] = inst_21135);

return statearr_21227;
})();
var statearr_21228_21312 = state_21217__$1;
(statearr_21228_21312[(2)] = null);

(statearr_21228_21312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (39))){
var state_21217__$1 = state_21217;
var statearr_21232_21313 = state_21217__$1;
(statearr_21232_21313[(2)] = null);

(statearr_21232_21313[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (4))){
var inst_21089 = (state_21217[(10)]);
var inst_21089__$1 = (state_21217[(2)]);
var inst_21090 = (inst_21089__$1 == null);
var state_21217__$1 = (function (){var statearr_21233 = state_21217;
(statearr_21233[(10)] = inst_21089__$1);

return statearr_21233;
})();
if(cljs.core.truth_(inst_21090)){
var statearr_21234_21314 = state_21217__$1;
(statearr_21234_21314[(1)] = (5));

} else {
var statearr_21235_21315 = state_21217__$1;
(statearr_21235_21315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (15))){
var inst_21101 = (state_21217[(13)]);
var inst_21099 = (state_21217[(14)]);
var inst_21100 = (state_21217[(15)]);
var inst_21098 = (state_21217[(16)]);
var inst_21114 = (state_21217[(2)]);
var inst_21115 = (inst_21101 + (1));
var tmp21229 = inst_21099;
var tmp21230 = inst_21100;
var tmp21231 = inst_21098;
var inst_21098__$1 = tmp21231;
var inst_21099__$1 = tmp21229;
var inst_21100__$1 = tmp21230;
var inst_21101__$1 = inst_21115;
var state_21217__$1 = (function (){var statearr_21236 = state_21217;
(statearr_21236[(13)] = inst_21101__$1);

(statearr_21236[(14)] = inst_21099__$1);

(statearr_21236[(15)] = inst_21100__$1);

(statearr_21236[(16)] = inst_21098__$1);

(statearr_21236[(18)] = inst_21114);

return statearr_21236;
})();
var statearr_21237_21316 = state_21217__$1;
(statearr_21237_21316[(2)] = null);

(statearr_21237_21316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (21))){
var inst_21139 = (state_21217[(2)]);
var state_21217__$1 = state_21217;
var statearr_21241_21317 = state_21217__$1;
(statearr_21241_21317[(2)] = inst_21139);

(statearr_21241_21317[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (31))){
var inst_21165 = (state_21217[(11)]);
var inst_21169 = done.call(null,null);
var inst_21170 = cljs.core.async.untap_STAR_.call(null,m,inst_21165);
var state_21217__$1 = (function (){var statearr_21242 = state_21217;
(statearr_21242[(19)] = inst_21169);

return statearr_21242;
})();
var statearr_21243_21318 = state_21217__$1;
(statearr_21243_21318[(2)] = inst_21170);

(statearr_21243_21318[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (32))){
var inst_21159 = (state_21217[(20)]);
var inst_21160 = (state_21217[(9)]);
var inst_21157 = (state_21217[(21)]);
var inst_21158 = (state_21217[(12)]);
var inst_21172 = (state_21217[(2)]);
var inst_21173 = (inst_21160 + (1));
var tmp21238 = inst_21159;
var tmp21239 = inst_21157;
var tmp21240 = inst_21158;
var inst_21157__$1 = tmp21239;
var inst_21158__$1 = tmp21240;
var inst_21159__$1 = tmp21238;
var inst_21160__$1 = inst_21173;
var state_21217__$1 = (function (){var statearr_21244 = state_21217;
(statearr_21244[(20)] = inst_21159__$1);

(statearr_21244[(22)] = inst_21172);

(statearr_21244[(9)] = inst_21160__$1);

(statearr_21244[(21)] = inst_21157__$1);

(statearr_21244[(12)] = inst_21158__$1);

return statearr_21244;
})();
var statearr_21245_21319 = state_21217__$1;
(statearr_21245_21319[(2)] = null);

(statearr_21245_21319[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (40))){
var inst_21185 = (state_21217[(23)]);
var inst_21189 = done.call(null,null);
var inst_21190 = cljs.core.async.untap_STAR_.call(null,m,inst_21185);
var state_21217__$1 = (function (){var statearr_21246 = state_21217;
(statearr_21246[(24)] = inst_21189);

return statearr_21246;
})();
var statearr_21247_21320 = state_21217__$1;
(statearr_21247_21320[(2)] = inst_21190);

(statearr_21247_21320[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (33))){
var inst_21176 = (state_21217[(25)]);
var inst_21178 = cljs.core.chunked_seq_QMARK_.call(null,inst_21176);
var state_21217__$1 = state_21217;
if(inst_21178){
var statearr_21248_21321 = state_21217__$1;
(statearr_21248_21321[(1)] = (36));

} else {
var statearr_21249_21322 = state_21217__$1;
(statearr_21249_21322[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (13))){
var inst_21108 = (state_21217[(26)]);
var inst_21111 = cljs.core.async.close_BANG_.call(null,inst_21108);
var state_21217__$1 = state_21217;
var statearr_21250_21323 = state_21217__$1;
(statearr_21250_21323[(2)] = inst_21111);

(statearr_21250_21323[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (22))){
var inst_21129 = (state_21217[(8)]);
var inst_21132 = cljs.core.async.close_BANG_.call(null,inst_21129);
var state_21217__$1 = state_21217;
var statearr_21251_21324 = state_21217__$1;
(statearr_21251_21324[(2)] = inst_21132);

(statearr_21251_21324[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (36))){
var inst_21176 = (state_21217[(25)]);
var inst_21180 = cljs.core.chunk_first.call(null,inst_21176);
var inst_21181 = cljs.core.chunk_rest.call(null,inst_21176);
var inst_21182 = cljs.core.count.call(null,inst_21180);
var inst_21157 = inst_21181;
var inst_21158 = inst_21180;
var inst_21159 = inst_21182;
var inst_21160 = (0);
var state_21217__$1 = (function (){var statearr_21252 = state_21217;
(statearr_21252[(20)] = inst_21159);

(statearr_21252[(9)] = inst_21160);

(statearr_21252[(21)] = inst_21157);

(statearr_21252[(12)] = inst_21158);

return statearr_21252;
})();
var statearr_21253_21325 = state_21217__$1;
(statearr_21253_21325[(2)] = null);

(statearr_21253_21325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (41))){
var inst_21176 = (state_21217[(25)]);
var inst_21192 = (state_21217[(2)]);
var inst_21193 = cljs.core.next.call(null,inst_21176);
var inst_21157 = inst_21193;
var inst_21158 = null;
var inst_21159 = (0);
var inst_21160 = (0);
var state_21217__$1 = (function (){var statearr_21254 = state_21217;
(statearr_21254[(20)] = inst_21159);

(statearr_21254[(9)] = inst_21160);

(statearr_21254[(21)] = inst_21157);

(statearr_21254[(27)] = inst_21192);

(statearr_21254[(12)] = inst_21158);

return statearr_21254;
})();
var statearr_21255_21326 = state_21217__$1;
(statearr_21255_21326[(2)] = null);

(statearr_21255_21326[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (43))){
var state_21217__$1 = state_21217;
var statearr_21256_21327 = state_21217__$1;
(statearr_21256_21327[(2)] = null);

(statearr_21256_21327[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (29))){
var inst_21201 = (state_21217[(2)]);
var state_21217__$1 = state_21217;
var statearr_21257_21328 = state_21217__$1;
(statearr_21257_21328[(2)] = inst_21201);

(statearr_21257_21328[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (44))){
var inst_21210 = (state_21217[(2)]);
var state_21217__$1 = (function (){var statearr_21258 = state_21217;
(statearr_21258[(28)] = inst_21210);

return statearr_21258;
})();
var statearr_21259_21329 = state_21217__$1;
(statearr_21259_21329[(2)] = null);

(statearr_21259_21329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (6))){
var inst_21149 = (state_21217[(29)]);
var inst_21148 = cljs.core.deref.call(null,cs);
var inst_21149__$1 = cljs.core.keys.call(null,inst_21148);
var inst_21150 = cljs.core.count.call(null,inst_21149__$1);
var inst_21151 = cljs.core.reset_BANG_.call(null,dctr,inst_21150);
var inst_21156 = cljs.core.seq.call(null,inst_21149__$1);
var inst_21157 = inst_21156;
var inst_21158 = null;
var inst_21159 = (0);
var inst_21160 = (0);
var state_21217__$1 = (function (){var statearr_21260 = state_21217;
(statearr_21260[(20)] = inst_21159);

(statearr_21260[(29)] = inst_21149__$1);

(statearr_21260[(9)] = inst_21160);

(statearr_21260[(21)] = inst_21157);

(statearr_21260[(30)] = inst_21151);

(statearr_21260[(12)] = inst_21158);

return statearr_21260;
})();
var statearr_21261_21330 = state_21217__$1;
(statearr_21261_21330[(2)] = null);

(statearr_21261_21330[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (28))){
var inst_21176 = (state_21217[(25)]);
var inst_21157 = (state_21217[(21)]);
var inst_21176__$1 = cljs.core.seq.call(null,inst_21157);
var state_21217__$1 = (function (){var statearr_21262 = state_21217;
(statearr_21262[(25)] = inst_21176__$1);

return statearr_21262;
})();
if(inst_21176__$1){
var statearr_21263_21331 = state_21217__$1;
(statearr_21263_21331[(1)] = (33));

} else {
var statearr_21264_21332 = state_21217__$1;
(statearr_21264_21332[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (25))){
var inst_21159 = (state_21217[(20)]);
var inst_21160 = (state_21217[(9)]);
var inst_21162 = (inst_21160 < inst_21159);
var inst_21163 = inst_21162;
var state_21217__$1 = state_21217;
if(cljs.core.truth_(inst_21163)){
var statearr_21265_21333 = state_21217__$1;
(statearr_21265_21333[(1)] = (27));

} else {
var statearr_21266_21334 = state_21217__$1;
(statearr_21266_21334[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (34))){
var state_21217__$1 = state_21217;
var statearr_21267_21335 = state_21217__$1;
(statearr_21267_21335[(2)] = null);

(statearr_21267_21335[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (17))){
var state_21217__$1 = state_21217;
var statearr_21268_21336 = state_21217__$1;
(statearr_21268_21336[(2)] = null);

(statearr_21268_21336[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (3))){
var inst_21215 = (state_21217[(2)]);
var state_21217__$1 = state_21217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21217__$1,inst_21215);
} else {
if((state_val_21218 === (12))){
var inst_21144 = (state_21217[(2)]);
var state_21217__$1 = state_21217;
var statearr_21269_21337 = state_21217__$1;
(statearr_21269_21337[(2)] = inst_21144);

(statearr_21269_21337[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (2))){
var state_21217__$1 = state_21217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21217__$1,(4),ch);
} else {
if((state_val_21218 === (23))){
var state_21217__$1 = state_21217;
var statearr_21270_21338 = state_21217__$1;
(statearr_21270_21338[(2)] = null);

(statearr_21270_21338[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (35))){
var inst_21199 = (state_21217[(2)]);
var state_21217__$1 = state_21217;
var statearr_21271_21339 = state_21217__$1;
(statearr_21271_21339[(2)] = inst_21199);

(statearr_21271_21339[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (19))){
var inst_21118 = (state_21217[(7)]);
var inst_21122 = cljs.core.chunk_first.call(null,inst_21118);
var inst_21123 = cljs.core.chunk_rest.call(null,inst_21118);
var inst_21124 = cljs.core.count.call(null,inst_21122);
var inst_21098 = inst_21123;
var inst_21099 = inst_21122;
var inst_21100 = inst_21124;
var inst_21101 = (0);
var state_21217__$1 = (function (){var statearr_21272 = state_21217;
(statearr_21272[(13)] = inst_21101);

(statearr_21272[(14)] = inst_21099);

(statearr_21272[(15)] = inst_21100);

(statearr_21272[(16)] = inst_21098);

return statearr_21272;
})();
var statearr_21273_21340 = state_21217__$1;
(statearr_21273_21340[(2)] = null);

(statearr_21273_21340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (11))){
var inst_21118 = (state_21217[(7)]);
var inst_21098 = (state_21217[(16)]);
var inst_21118__$1 = cljs.core.seq.call(null,inst_21098);
var state_21217__$1 = (function (){var statearr_21274 = state_21217;
(statearr_21274[(7)] = inst_21118__$1);

return statearr_21274;
})();
if(inst_21118__$1){
var statearr_21275_21341 = state_21217__$1;
(statearr_21275_21341[(1)] = (16));

} else {
var statearr_21276_21342 = state_21217__$1;
(statearr_21276_21342[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (9))){
var inst_21146 = (state_21217[(2)]);
var state_21217__$1 = state_21217;
var statearr_21277_21343 = state_21217__$1;
(statearr_21277_21343[(2)] = inst_21146);

(statearr_21277_21343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (5))){
var inst_21096 = cljs.core.deref.call(null,cs);
var inst_21097 = cljs.core.seq.call(null,inst_21096);
var inst_21098 = inst_21097;
var inst_21099 = null;
var inst_21100 = (0);
var inst_21101 = (0);
var state_21217__$1 = (function (){var statearr_21278 = state_21217;
(statearr_21278[(13)] = inst_21101);

(statearr_21278[(14)] = inst_21099);

(statearr_21278[(15)] = inst_21100);

(statearr_21278[(16)] = inst_21098);

return statearr_21278;
})();
var statearr_21279_21344 = state_21217__$1;
(statearr_21279_21344[(2)] = null);

(statearr_21279_21344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (14))){
var state_21217__$1 = state_21217;
var statearr_21280_21345 = state_21217__$1;
(statearr_21280_21345[(2)] = null);

(statearr_21280_21345[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (45))){
var inst_21207 = (state_21217[(2)]);
var state_21217__$1 = state_21217;
var statearr_21281_21346 = state_21217__$1;
(statearr_21281_21346[(2)] = inst_21207);

(statearr_21281_21346[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (26))){
var inst_21149 = (state_21217[(29)]);
var inst_21203 = (state_21217[(2)]);
var inst_21204 = cljs.core.seq.call(null,inst_21149);
var state_21217__$1 = (function (){var statearr_21282 = state_21217;
(statearr_21282[(31)] = inst_21203);

return statearr_21282;
})();
if(inst_21204){
var statearr_21283_21347 = state_21217__$1;
(statearr_21283_21347[(1)] = (42));

} else {
var statearr_21284_21348 = state_21217__$1;
(statearr_21284_21348[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (16))){
var inst_21118 = (state_21217[(7)]);
var inst_21120 = cljs.core.chunked_seq_QMARK_.call(null,inst_21118);
var state_21217__$1 = state_21217;
if(inst_21120){
var statearr_21285_21349 = state_21217__$1;
(statearr_21285_21349[(1)] = (19));

} else {
var statearr_21286_21350 = state_21217__$1;
(statearr_21286_21350[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (38))){
var inst_21196 = (state_21217[(2)]);
var state_21217__$1 = state_21217;
var statearr_21287_21351 = state_21217__$1;
(statearr_21287_21351[(2)] = inst_21196);

(statearr_21287_21351[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (30))){
var state_21217__$1 = state_21217;
var statearr_21288_21352 = state_21217__$1;
(statearr_21288_21352[(2)] = null);

(statearr_21288_21352[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (10))){
var inst_21101 = (state_21217[(13)]);
var inst_21099 = (state_21217[(14)]);
var inst_21107 = cljs.core._nth.call(null,inst_21099,inst_21101);
var inst_21108 = cljs.core.nth.call(null,inst_21107,(0),null);
var inst_21109 = cljs.core.nth.call(null,inst_21107,(1),null);
var state_21217__$1 = (function (){var statearr_21289 = state_21217;
(statearr_21289[(26)] = inst_21108);

return statearr_21289;
})();
if(cljs.core.truth_(inst_21109)){
var statearr_21290_21353 = state_21217__$1;
(statearr_21290_21353[(1)] = (13));

} else {
var statearr_21291_21354 = state_21217__$1;
(statearr_21291_21354[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (18))){
var inst_21142 = (state_21217[(2)]);
var state_21217__$1 = state_21217;
var statearr_21292_21355 = state_21217__$1;
(statearr_21292_21355[(2)] = inst_21142);

(statearr_21292_21355[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (42))){
var state_21217__$1 = state_21217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21217__$1,(45),dchan);
} else {
if((state_val_21218 === (37))){
var inst_21185 = (state_21217[(23)]);
var inst_21176 = (state_21217[(25)]);
var inst_21089 = (state_21217[(10)]);
var inst_21185__$1 = cljs.core.first.call(null,inst_21176);
var inst_21186 = cljs.core.async.put_BANG_.call(null,inst_21185__$1,inst_21089,done);
var state_21217__$1 = (function (){var statearr_21293 = state_21217;
(statearr_21293[(23)] = inst_21185__$1);

return statearr_21293;
})();
if(cljs.core.truth_(inst_21186)){
var statearr_21294_21356 = state_21217__$1;
(statearr_21294_21356[(1)] = (39));

} else {
var statearr_21295_21357 = state_21217__$1;
(statearr_21295_21357[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21218 === (8))){
var inst_21101 = (state_21217[(13)]);
var inst_21100 = (state_21217[(15)]);
var inst_21103 = (inst_21101 < inst_21100);
var inst_21104 = inst_21103;
var state_21217__$1 = state_21217;
if(cljs.core.truth_(inst_21104)){
var statearr_21296_21358 = state_21217__$1;
(statearr_21296_21358[(1)] = (10));

} else {
var statearr_21297_21359 = state_21217__$1;
(statearr_21297_21359[(1)] = (11));

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
});})(c__7427__auto___21305,cs,m,dchan,dctr,done))
;
return ((function (switch__7371__auto__,c__7427__auto___21305,cs,m,dchan,dctr,done){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_21301 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21301[(0)] = state_machine__7372__auto__);

(statearr_21301[(1)] = (1));

return statearr_21301;
});
var state_machine__7372__auto____1 = (function (state_21217){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_21217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e21302){if((e21302 instanceof Object)){
var ex__7375__auto__ = e21302;
var statearr_21303_21360 = state_21217;
(statearr_21303_21360[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21361 = state_21217;
state_21217 = G__21361;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_21217){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_21217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto___21305,cs,m,dchan,dctr,done))
})();
var state__7429__auto__ = (function (){var statearr_21304 = f__7428__auto__.call(null);
(statearr_21304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto___21305);

return statearr_21304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(c__7427__auto___21305,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj21363 = {};
return obj21363;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__21364){
var map__21369 = p__21364;
var map__21369__$1 = ((cljs.core.seq_QMARK_.call(null,map__21369))?cljs.core.apply.call(null,cljs.core.hash_map,map__21369):map__21369);
var opts = map__21369__$1;
var statearr_21370_21373 = state;
(statearr_21370_21373[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__21369,map__21369__$1,opts){
return (function (val){
var statearr_21371_21374 = state;
(statearr_21371_21374[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21369,map__21369__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_21372_21375 = state;
(statearr_21372_21375[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__21364 = null;
if (arguments.length > 3) {
  p__21364 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__21364);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__21376){
var state = cljs.core.first(arglist__21376);
arglist__21376 = cljs.core.next(arglist__21376);
var cont_block = cljs.core.first(arglist__21376);
arglist__21376 = cljs.core.next(arglist__21376);
var ports = cljs.core.first(arglist__21376);
var p__21364 = cljs.core.rest(arglist__21376);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__21364);
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
if(typeof cljs.core.async.t21496 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21496 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21497){
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
this.meta21497 = meta21497;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21496.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t21496.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21496.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21496.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21496.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21496.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t21496.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21496.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21496.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21498){
var self__ = this;
var _21498__$1 = this;
return self__.meta21497;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21498,meta21497__$1){
var self__ = this;
var _21498__$1 = this;
return (new cljs.core.async.t21496(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21497__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21496.cljs$lang$type = true;

cljs.core.async.t21496.cljs$lang$ctorStr = "cljs.core.async/t21496";

cljs.core.async.t21496.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t21496");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t21496 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t21496(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21497){
return (new cljs.core.async.t21496(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21497));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t21496(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
})()
;
var c__7427__auto___21615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7427__auto___21615,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (c__7427__auto___21615,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21568){
var state_val_21569 = (state_21568[(1)]);
if((state_val_21569 === (7))){
var inst_21512 = (state_21568[(7)]);
var inst_21517 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21512);
var state_21568__$1 = state_21568;
var statearr_21570_21616 = state_21568__$1;
(statearr_21570_21616[(2)] = inst_21517);

(statearr_21570_21616[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (20))){
var inst_21527 = (state_21568[(8)]);
var state_21568__$1 = state_21568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21568__$1,(23),out,inst_21527);
} else {
if((state_val_21569 === (1))){
var inst_21502 = (state_21568[(9)]);
var inst_21502__$1 = calc_state.call(null);
var inst_21503 = cljs.core.seq_QMARK_.call(null,inst_21502__$1);
var state_21568__$1 = (function (){var statearr_21571 = state_21568;
(statearr_21571[(9)] = inst_21502__$1);

return statearr_21571;
})();
if(inst_21503){
var statearr_21572_21617 = state_21568__$1;
(statearr_21572_21617[(1)] = (2));

} else {
var statearr_21573_21618 = state_21568__$1;
(statearr_21573_21618[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (24))){
var inst_21520 = (state_21568[(10)]);
var inst_21512 = inst_21520;
var state_21568__$1 = (function (){var statearr_21574 = state_21568;
(statearr_21574[(7)] = inst_21512);

return statearr_21574;
})();
var statearr_21575_21619 = state_21568__$1;
(statearr_21575_21619[(2)] = null);

(statearr_21575_21619[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (4))){
var inst_21502 = (state_21568[(9)]);
var inst_21508 = (state_21568[(2)]);
var inst_21509 = cljs.core.get.call(null,inst_21508,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21510 = cljs.core.get.call(null,inst_21508,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21511 = cljs.core.get.call(null,inst_21508,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21512 = inst_21502;
var state_21568__$1 = (function (){var statearr_21576 = state_21568;
(statearr_21576[(11)] = inst_21509);

(statearr_21576[(12)] = inst_21510);

(statearr_21576[(7)] = inst_21512);

(statearr_21576[(13)] = inst_21511);

return statearr_21576;
})();
var statearr_21577_21620 = state_21568__$1;
(statearr_21577_21620[(2)] = null);

(statearr_21577_21620[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (15))){
var state_21568__$1 = state_21568;
var statearr_21578_21621 = state_21568__$1;
(statearr_21578_21621[(2)] = null);

(statearr_21578_21621[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (21))){
var inst_21520 = (state_21568[(10)]);
var inst_21512 = inst_21520;
var state_21568__$1 = (function (){var statearr_21579 = state_21568;
(statearr_21579[(7)] = inst_21512);

return statearr_21579;
})();
var statearr_21580_21622 = state_21568__$1;
(statearr_21580_21622[(2)] = null);

(statearr_21580_21622[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (13))){
var inst_21564 = (state_21568[(2)]);
var state_21568__$1 = state_21568;
var statearr_21581_21623 = state_21568__$1;
(statearr_21581_21623[(2)] = inst_21564);

(statearr_21581_21623[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (22))){
var inst_21562 = (state_21568[(2)]);
var state_21568__$1 = state_21568;
var statearr_21582_21624 = state_21568__$1;
(statearr_21582_21624[(2)] = inst_21562);

(statearr_21582_21624[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (6))){
var inst_21566 = (state_21568[(2)]);
var state_21568__$1 = state_21568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21568__$1,inst_21566);
} else {
if((state_val_21569 === (25))){
var state_21568__$1 = state_21568;
var statearr_21583_21625 = state_21568__$1;
(statearr_21583_21625[(2)] = null);

(statearr_21583_21625[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (17))){
var inst_21542 = (state_21568[(14)]);
var state_21568__$1 = state_21568;
var statearr_21584_21626 = state_21568__$1;
(statearr_21584_21626[(2)] = inst_21542);

(statearr_21584_21626[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (3))){
var inst_21502 = (state_21568[(9)]);
var state_21568__$1 = state_21568;
var statearr_21585_21627 = state_21568__$1;
(statearr_21585_21627[(2)] = inst_21502);

(statearr_21585_21627[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (12))){
var inst_21542 = (state_21568[(14)]);
var inst_21523 = (state_21568[(15)]);
var inst_21528 = (state_21568[(16)]);
var inst_21542__$1 = inst_21523.call(null,inst_21528);
var state_21568__$1 = (function (){var statearr_21586 = state_21568;
(statearr_21586[(14)] = inst_21542__$1);

return statearr_21586;
})();
if(cljs.core.truth_(inst_21542__$1)){
var statearr_21587_21628 = state_21568__$1;
(statearr_21587_21628[(1)] = (17));

} else {
var statearr_21588_21629 = state_21568__$1;
(statearr_21588_21629[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (2))){
var inst_21502 = (state_21568[(9)]);
var inst_21505 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21502);
var state_21568__$1 = state_21568;
var statearr_21589_21630 = state_21568__$1;
(statearr_21589_21630[(2)] = inst_21505);

(statearr_21589_21630[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (23))){
var inst_21553 = (state_21568[(2)]);
var state_21568__$1 = state_21568;
if(cljs.core.truth_(inst_21553)){
var statearr_21590_21631 = state_21568__$1;
(statearr_21590_21631[(1)] = (24));

} else {
var statearr_21591_21632 = state_21568__$1;
(statearr_21591_21632[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (19))){
var inst_21550 = (state_21568[(2)]);
var state_21568__$1 = state_21568;
if(cljs.core.truth_(inst_21550)){
var statearr_21592_21633 = state_21568__$1;
(statearr_21592_21633[(1)] = (20));

} else {
var statearr_21593_21634 = state_21568__$1;
(statearr_21593_21634[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (11))){
var inst_21527 = (state_21568[(8)]);
var inst_21533 = (inst_21527 == null);
var state_21568__$1 = state_21568;
if(cljs.core.truth_(inst_21533)){
var statearr_21594_21635 = state_21568__$1;
(statearr_21594_21635[(1)] = (14));

} else {
var statearr_21595_21636 = state_21568__$1;
(statearr_21595_21636[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (9))){
var inst_21520 = (state_21568[(10)]);
var inst_21520__$1 = (state_21568[(2)]);
var inst_21521 = cljs.core.get.call(null,inst_21520__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21522 = cljs.core.get.call(null,inst_21520__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21523 = cljs.core.get.call(null,inst_21520__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_21568__$1 = (function (){var statearr_21596 = state_21568;
(statearr_21596[(10)] = inst_21520__$1);

(statearr_21596[(15)] = inst_21523);

(statearr_21596[(17)] = inst_21522);

return statearr_21596;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21568__$1,(10),inst_21521);
} else {
if((state_val_21569 === (5))){
var inst_21512 = (state_21568[(7)]);
var inst_21515 = cljs.core.seq_QMARK_.call(null,inst_21512);
var state_21568__$1 = state_21568;
if(inst_21515){
var statearr_21597_21637 = state_21568__$1;
(statearr_21597_21637[(1)] = (7));

} else {
var statearr_21598_21638 = state_21568__$1;
(statearr_21598_21638[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (14))){
var inst_21528 = (state_21568[(16)]);
var inst_21535 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21528);
var state_21568__$1 = state_21568;
var statearr_21599_21639 = state_21568__$1;
(statearr_21599_21639[(2)] = inst_21535);

(statearr_21599_21639[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (26))){
var inst_21558 = (state_21568[(2)]);
var state_21568__$1 = state_21568;
var statearr_21600_21640 = state_21568__$1;
(statearr_21600_21640[(2)] = inst_21558);

(statearr_21600_21640[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (16))){
var inst_21538 = (state_21568[(2)]);
var inst_21539 = calc_state.call(null);
var inst_21512 = inst_21539;
var state_21568__$1 = (function (){var statearr_21601 = state_21568;
(statearr_21601[(18)] = inst_21538);

(statearr_21601[(7)] = inst_21512);

return statearr_21601;
})();
var statearr_21602_21641 = state_21568__$1;
(statearr_21602_21641[(2)] = null);

(statearr_21602_21641[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (10))){
var inst_21527 = (state_21568[(8)]);
var inst_21528 = (state_21568[(16)]);
var inst_21526 = (state_21568[(2)]);
var inst_21527__$1 = cljs.core.nth.call(null,inst_21526,(0),null);
var inst_21528__$1 = cljs.core.nth.call(null,inst_21526,(1),null);
var inst_21529 = (inst_21527__$1 == null);
var inst_21530 = cljs.core._EQ_.call(null,inst_21528__$1,change);
var inst_21531 = (inst_21529) || (inst_21530);
var state_21568__$1 = (function (){var statearr_21603 = state_21568;
(statearr_21603[(8)] = inst_21527__$1);

(statearr_21603[(16)] = inst_21528__$1);

return statearr_21603;
})();
if(cljs.core.truth_(inst_21531)){
var statearr_21604_21642 = state_21568__$1;
(statearr_21604_21642[(1)] = (11));

} else {
var statearr_21605_21643 = state_21568__$1;
(statearr_21605_21643[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (18))){
var inst_21523 = (state_21568[(15)]);
var inst_21528 = (state_21568[(16)]);
var inst_21522 = (state_21568[(17)]);
var inst_21545 = cljs.core.empty_QMARK_.call(null,inst_21523);
var inst_21546 = inst_21522.call(null,inst_21528);
var inst_21547 = cljs.core.not.call(null,inst_21546);
var inst_21548 = (inst_21545) && (inst_21547);
var state_21568__$1 = state_21568;
var statearr_21606_21644 = state_21568__$1;
(statearr_21606_21644[(2)] = inst_21548);

(statearr_21606_21644[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (8))){
var inst_21512 = (state_21568[(7)]);
var state_21568__$1 = state_21568;
var statearr_21607_21645 = state_21568__$1;
(statearr_21607_21645[(2)] = inst_21512);

(statearr_21607_21645[(1)] = (9));


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
});})(c__7427__auto___21615,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7371__auto__,c__7427__auto___21615,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_21611 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21611[(0)] = state_machine__7372__auto__);

(statearr_21611[(1)] = (1));

return statearr_21611;
});
var state_machine__7372__auto____1 = (function (state_21568){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_21568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e21612){if((e21612 instanceof Object)){
var ex__7375__auto__ = e21612;
var statearr_21613_21646 = state_21568;
(statearr_21613_21646[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21647 = state_21568;
state_21568 = G__21647;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_21568){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_21568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto___21615,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7429__auto__ = (function (){var statearr_21614 = f__7428__auto__.call(null);
(statearr_21614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto___21615);

return statearr_21614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(c__7427__auto___21615,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj21649 = {};
return obj21649;
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
return (function (p1__21650_SHARP_){
if(cljs.core.truth_(p1__21650_SHARP_.call(null,topic))){
return p1__21650_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21650_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3608__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t21773 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21773 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta21774){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta21774 = meta21774;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21773.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t21773.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t21773.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t21773.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t21773.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t21773.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21773.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t21773.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21775){
var self__ = this;
var _21775__$1 = this;
return self__.meta21774;
});})(mults,ensure_mult))
;

cljs.core.async.t21773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21775,meta21774__$1){
var self__ = this;
var _21775__$1 = this;
return (new cljs.core.async.t21773(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta21774__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t21773.cljs$lang$type = true;

cljs.core.async.t21773.cljs$lang$ctorStr = "cljs.core.async/t21773";

cljs.core.async.t21773.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t21773");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t21773 = ((function (mults,ensure_mult){
return (function __GT_t21773(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta21774){
return (new cljs.core.async.t21773(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta21774));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t21773(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
})()
;
var c__7427__auto___21895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7427__auto___21895,mults,ensure_mult,p){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (c__7427__auto___21895,mults,ensure_mult,p){
return (function (state_21847){
var state_val_21848 = (state_21847[(1)]);
if((state_val_21848 === (7))){
var inst_21843 = (state_21847[(2)]);
var state_21847__$1 = state_21847;
var statearr_21849_21896 = state_21847__$1;
(statearr_21849_21896[(2)] = inst_21843);

(statearr_21849_21896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21848 === (20))){
var state_21847__$1 = state_21847;
var statearr_21850_21897 = state_21847__$1;
(statearr_21850_21897[(2)] = null);

(statearr_21850_21897[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21848 === (1))){
var state_21847__$1 = state_21847;
var statearr_21851_21898 = state_21847__$1;
(statearr_21851_21898[(2)] = null);

(statearr_21851_21898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21848 === (24))){
var inst_21826 = (state_21847[(7)]);
var inst_21835 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21826);
var state_21847__$1 = state_21847;
var statearr_21852_21899 = state_21847__$1;
(statearr_21852_21899[(2)] = inst_21835);

(statearr_21852_21899[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21848 === (4))){
var inst_21778 = (state_21847[(8)]);
var inst_21778__$1 = (state_21847[(2)]);
var inst_21779 = (inst_21778__$1 == null);
var state_21847__$1 = (function (){var statearr_21853 = state_21847;
(statearr_21853[(8)] = inst_21778__$1);

return statearr_21853;
})();
if(cljs.core.truth_(inst_21779)){
var statearr_21854_21900 = state_21847__$1;
(statearr_21854_21900[(1)] = (5));

} else {
var statearr_21855_21901 = state_21847__$1;
(statearr_21855_21901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21848 === (15))){
var inst_21820 = (state_21847[(2)]);
var state_21847__$1 = state_21847;
var statearr_21856_21902 = state_21847__$1;
(statearr_21856_21902[(2)] = inst_21820);

(statearr_21856_21902[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21848 === (21))){
var inst_21840 = (state_21847[(2)]);
var state_21847__$1 = (function (){var statearr_21857 = state_21847;
(statearr_21857[(9)] = inst_21840);

return statearr_21857;
})();
var statearr_21858_21903 = state_21847__$1;
(statearr_21858_21903[(2)] = null);

(statearr_21858_21903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21848 === (13))){
var inst_21802 = (state_21847[(10)]);
var inst_21804 = cljs.core.chunked_seq_QMARK_.call(null,inst_21802);
var state_21847__$1 = state_21847;
if(inst_21804){
var statearr_21859_21904 = state_21847__$1;
(statearr_21859_21904[(1)] = (16));

} else {
var statearr_21860_21905 = state_21847__$1;
(statearr_21860_21905[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21848 === (22))){
var inst_21832 = (state_21847[(2)]);
var state_21847__$1 = state_21847;
if(cljs.core.truth_(inst_21832)){
var statearr_21861_21906 = state_21847__$1;
(statearr_21861_21906[(1)] = (23));

} else {
var statearr_21862_21907 = state_21847__$1;
(statearr_21862_21907[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21848 === (6))){
var inst_21826 = (state_21847[(7)]);
var inst_21778 = (state_21847[(8)]);
var inst_21828 = (state_21847[(11)]);
var inst_21826__$1 = topic_fn.call(null,inst_21778);
var inst_21827 = cljs.core.deref.call(null,mults);
var inst_21828__$1 = cljs.core.get.call(null,inst_21827,inst_21826__$1);
var state_21847__$1 = (function (){var statearr_21863 = state_21847;
(statearr_21863[(7)] = inst_21826__$1);

(statearr_21863[(11)] = inst_21828__$1);

return statearr_21863;
})();
if(cljs.core.truth_(inst_21828__$1)){
var statearr_21864_21908 = state_21847__$1;
(statearr_21864_21908[(1)] = (19));

} else {
var statearr_21865_21909 = state_21847__$1;
(statearr_21865_21909[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21848 === (25))){
var inst_21837 = (state_21847[(2)]);
var state_21847__$1 = state_21847;
var statearr_21866_21910 = state_21847__$1;
(statearr_21866_21910[(2)] = inst_21837);

(statearr_21866_21910[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21848 === (17))){
var inst_21802 = (state_21847[(10)]);
var inst_21811 = cljs.core.first.call(null,inst_21802);
var inst_21812 = cljs.core.async.muxch_STAR_.call(null,inst_21811);
var inst_21813 = cljs.core.async.close_BANG_.call(null,inst_21812);
var inst_21814 = cljs.core.next.call(null,inst_21802);
var inst_21788 = inst_21814;
var inst_21789 = null;
var inst_21790 = (0);
var inst_21791 = (0);
var state_21847__$1 = (function (){var statearr_21867 = state_21847;
(statearr_21867[(12)] = inst_21813);

(statearr_21867[(13)] = inst_21788);

(statearr_21867[(14)] = inst_21790);

(statearr_21867[(15)] = inst_21789);

(statearr_21867[(16)] = inst_21791);

return statearr_21867;
})();
var statearr_21868_21911 = state_21847__$1;
(statearr_21868_21911[(2)] = null);

(statearr_21868_21911[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21848 === (3))){
var inst_21845 = (state_21847[(2)]);
var state_21847__$1 = state_21847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21847__$1,inst_21845);
} else {
if((state_val_21848 === (12))){
var inst_21822 = (state_21847[(2)]);
var state_21847__$1 = state_21847;
var statearr_21869_21912 = state_21847__$1;
(statearr_21869_21912[(2)] = inst_21822);

(statearr_21869_21912[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21848 === (2))){
var state_21847__$1 = state_21847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21847__$1,(4),ch);
} else {
if((state_val_21848 === (23))){
var state_21847__$1 = state_21847;
var statearr_21870_21913 = state_21847__$1;
(statearr_21870_21913[(2)] = null);

(statearr_21870_21913[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21848 === (19))){
var inst_21778 = (state_21847[(8)]);
var inst_21828 = (state_21847[(11)]);
var inst_21830 = cljs.core.async.muxch_STAR_.call(null,inst_21828);
var state_21847__$1 = state_21847;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21847__$1,(22),inst_21830,inst_21778);
} else {
if((state_val_21848 === (11))){
var inst_21788 = (state_21847[(13)]);
var inst_21802 = (state_21847[(10)]);
var inst_21802__$1 = cljs.core.seq.call(null,inst_21788);
var state_21847__$1 = (function (){var statearr_21871 = state_21847;
(statearr_21871[(10)] = inst_21802__$1);

return statearr_21871;
})();
if(inst_21802__$1){
var statearr_21872_21914 = state_21847__$1;
(statearr_21872_21914[(1)] = (13));

} else {
var statearr_21873_21915 = state_21847__$1;
(statearr_21873_21915[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21848 === (9))){
var inst_21824 = (state_21847[(2)]);
var state_21847__$1 = state_21847;
var statearr_21874_21916 = state_21847__$1;
(statearr_21874_21916[(2)] = inst_21824);

(statearr_21874_21916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21848 === (5))){
var inst_21785 = cljs.core.deref.call(null,mults);
var inst_21786 = cljs.core.vals.call(null,inst_21785);
var inst_21787 = cljs.core.seq.call(null,inst_21786);
var inst_21788 = inst_21787;
var inst_21789 = null;
var inst_21790 = (0);
var inst_21791 = (0);
var state_21847__$1 = (function (){var statearr_21875 = state_21847;
(statearr_21875[(13)] = inst_21788);

(statearr_21875[(14)] = inst_21790);

(statearr_21875[(15)] = inst_21789);

(statearr_21875[(16)] = inst_21791);

return statearr_21875;
})();
var statearr_21876_21917 = state_21847__$1;
(statearr_21876_21917[(2)] = null);

(statearr_21876_21917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21848 === (14))){
var state_21847__$1 = state_21847;
var statearr_21880_21918 = state_21847__$1;
(statearr_21880_21918[(2)] = null);

(statearr_21880_21918[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21848 === (16))){
var inst_21802 = (state_21847[(10)]);
var inst_21806 = cljs.core.chunk_first.call(null,inst_21802);
var inst_21807 = cljs.core.chunk_rest.call(null,inst_21802);
var inst_21808 = cljs.core.count.call(null,inst_21806);
var inst_21788 = inst_21807;
var inst_21789 = inst_21806;
var inst_21790 = inst_21808;
var inst_21791 = (0);
var state_21847__$1 = (function (){var statearr_21881 = state_21847;
(statearr_21881[(13)] = inst_21788);

(statearr_21881[(14)] = inst_21790);

(statearr_21881[(15)] = inst_21789);

(statearr_21881[(16)] = inst_21791);

return statearr_21881;
})();
var statearr_21882_21919 = state_21847__$1;
(statearr_21882_21919[(2)] = null);

(statearr_21882_21919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21848 === (10))){
var inst_21788 = (state_21847[(13)]);
var inst_21790 = (state_21847[(14)]);
var inst_21789 = (state_21847[(15)]);
var inst_21791 = (state_21847[(16)]);
var inst_21796 = cljs.core._nth.call(null,inst_21789,inst_21791);
var inst_21797 = cljs.core.async.muxch_STAR_.call(null,inst_21796);
var inst_21798 = cljs.core.async.close_BANG_.call(null,inst_21797);
var inst_21799 = (inst_21791 + (1));
var tmp21877 = inst_21788;
var tmp21878 = inst_21790;
var tmp21879 = inst_21789;
var inst_21788__$1 = tmp21877;
var inst_21789__$1 = tmp21879;
var inst_21790__$1 = tmp21878;
var inst_21791__$1 = inst_21799;
var state_21847__$1 = (function (){var statearr_21883 = state_21847;
(statearr_21883[(17)] = inst_21798);

(statearr_21883[(13)] = inst_21788__$1);

(statearr_21883[(14)] = inst_21790__$1);

(statearr_21883[(15)] = inst_21789__$1);

(statearr_21883[(16)] = inst_21791__$1);

return statearr_21883;
})();
var statearr_21884_21920 = state_21847__$1;
(statearr_21884_21920[(2)] = null);

(statearr_21884_21920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21848 === (18))){
var inst_21817 = (state_21847[(2)]);
var state_21847__$1 = state_21847;
var statearr_21885_21921 = state_21847__$1;
(statearr_21885_21921[(2)] = inst_21817);

(statearr_21885_21921[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21848 === (8))){
var inst_21790 = (state_21847[(14)]);
var inst_21791 = (state_21847[(16)]);
var inst_21793 = (inst_21791 < inst_21790);
var inst_21794 = inst_21793;
var state_21847__$1 = state_21847;
if(cljs.core.truth_(inst_21794)){
var statearr_21886_21922 = state_21847__$1;
(statearr_21886_21922[(1)] = (10));

} else {
var statearr_21887_21923 = state_21847__$1;
(statearr_21887_21923[(1)] = (11));

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
});})(c__7427__auto___21895,mults,ensure_mult,p))
;
return ((function (switch__7371__auto__,c__7427__auto___21895,mults,ensure_mult,p){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_21891 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21891[(0)] = state_machine__7372__auto__);

(statearr_21891[(1)] = (1));

return statearr_21891;
});
var state_machine__7372__auto____1 = (function (state_21847){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_21847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e21892){if((e21892 instanceof Object)){
var ex__7375__auto__ = e21892;
var statearr_21893_21924 = state_21847;
(statearr_21893_21924[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21925 = state_21847;
state_21847 = G__21925;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_21847){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_21847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto___21895,mults,ensure_mult,p))
})();
var state__7429__auto__ = (function (){var statearr_21894 = f__7428__auto__.call(null);
(statearr_21894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto___21895);

return statearr_21894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(c__7427__auto___21895,mults,ensure_mult,p))
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
var c__7427__auto___22062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7427__auto___22062,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (c__7427__auto___22062,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22032){
var state_val_22033 = (state_22032[(1)]);
if((state_val_22033 === (7))){
var state_22032__$1 = state_22032;
var statearr_22034_22063 = state_22032__$1;
(statearr_22034_22063[(2)] = null);

(statearr_22034_22063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22033 === (1))){
var state_22032__$1 = state_22032;
var statearr_22035_22064 = state_22032__$1;
(statearr_22035_22064[(2)] = null);

(statearr_22035_22064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22033 === (4))){
var inst_21996 = (state_22032[(7)]);
var inst_21998 = (inst_21996 < cnt);
var state_22032__$1 = state_22032;
if(cljs.core.truth_(inst_21998)){
var statearr_22036_22065 = state_22032__$1;
(statearr_22036_22065[(1)] = (6));

} else {
var statearr_22037_22066 = state_22032__$1;
(statearr_22037_22066[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22033 === (15))){
var inst_22028 = (state_22032[(2)]);
var state_22032__$1 = state_22032;
var statearr_22038_22067 = state_22032__$1;
(statearr_22038_22067[(2)] = inst_22028);

(statearr_22038_22067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22033 === (13))){
var inst_22021 = cljs.core.async.close_BANG_.call(null,out);
var state_22032__$1 = state_22032;
var statearr_22039_22068 = state_22032__$1;
(statearr_22039_22068[(2)] = inst_22021);

(statearr_22039_22068[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22033 === (6))){
var state_22032__$1 = state_22032;
var statearr_22040_22069 = state_22032__$1;
(statearr_22040_22069[(2)] = null);

(statearr_22040_22069[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22033 === (3))){
var inst_22030 = (state_22032[(2)]);
var state_22032__$1 = state_22032;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22032__$1,inst_22030);
} else {
if((state_val_22033 === (12))){
var inst_22018 = (state_22032[(8)]);
var inst_22018__$1 = (state_22032[(2)]);
var inst_22019 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22018__$1);
var state_22032__$1 = (function (){var statearr_22041 = state_22032;
(statearr_22041[(8)] = inst_22018__$1);

return statearr_22041;
})();
if(cljs.core.truth_(inst_22019)){
var statearr_22042_22070 = state_22032__$1;
(statearr_22042_22070[(1)] = (13));

} else {
var statearr_22043_22071 = state_22032__$1;
(statearr_22043_22071[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22033 === (2))){
var inst_21995 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21996 = (0);
var state_22032__$1 = (function (){var statearr_22044 = state_22032;
(statearr_22044[(7)] = inst_21996);

(statearr_22044[(9)] = inst_21995);

return statearr_22044;
})();
var statearr_22045_22072 = state_22032__$1;
(statearr_22045_22072[(2)] = null);

(statearr_22045_22072[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22033 === (11))){
var inst_21996 = (state_22032[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22032,(10),Object,null,(9));
var inst_22005 = chs__$1.call(null,inst_21996);
var inst_22006 = done.call(null,inst_21996);
var inst_22007 = cljs.core.async.take_BANG_.call(null,inst_22005,inst_22006);
var state_22032__$1 = state_22032;
var statearr_22046_22073 = state_22032__$1;
(statearr_22046_22073[(2)] = inst_22007);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22032__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22033 === (9))){
var inst_21996 = (state_22032[(7)]);
var inst_22009 = (state_22032[(2)]);
var inst_22010 = (inst_21996 + (1));
var inst_21996__$1 = inst_22010;
var state_22032__$1 = (function (){var statearr_22047 = state_22032;
(statearr_22047[(7)] = inst_21996__$1);

(statearr_22047[(10)] = inst_22009);

return statearr_22047;
})();
var statearr_22048_22074 = state_22032__$1;
(statearr_22048_22074[(2)] = null);

(statearr_22048_22074[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22033 === (5))){
var inst_22016 = (state_22032[(2)]);
var state_22032__$1 = (function (){var statearr_22049 = state_22032;
(statearr_22049[(11)] = inst_22016);

return statearr_22049;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22032__$1,(12),dchan);
} else {
if((state_val_22033 === (14))){
var inst_22018 = (state_22032[(8)]);
var inst_22023 = cljs.core.apply.call(null,f,inst_22018);
var state_22032__$1 = state_22032;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22032__$1,(16),out,inst_22023);
} else {
if((state_val_22033 === (16))){
var inst_22025 = (state_22032[(2)]);
var state_22032__$1 = (function (){var statearr_22050 = state_22032;
(statearr_22050[(12)] = inst_22025);

return statearr_22050;
})();
var statearr_22051_22075 = state_22032__$1;
(statearr_22051_22075[(2)] = null);

(statearr_22051_22075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22033 === (10))){
var inst_22000 = (state_22032[(2)]);
var inst_22001 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22032__$1 = (function (){var statearr_22052 = state_22032;
(statearr_22052[(13)] = inst_22000);

return statearr_22052;
})();
var statearr_22053_22076 = state_22032__$1;
(statearr_22053_22076[(2)] = inst_22001);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22032__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22033 === (8))){
var inst_22014 = (state_22032[(2)]);
var state_22032__$1 = state_22032;
var statearr_22054_22077 = state_22032__$1;
(statearr_22054_22077[(2)] = inst_22014);

(statearr_22054_22077[(1)] = (5));


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
});})(c__7427__auto___22062,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7371__auto__,c__7427__auto___22062,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_22058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22058[(0)] = state_machine__7372__auto__);

(statearr_22058[(1)] = (1));

return statearr_22058;
});
var state_machine__7372__auto____1 = (function (state_22032){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_22032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e22059){if((e22059 instanceof Object)){
var ex__7375__auto__ = e22059;
var statearr_22060_22078 = state_22032;
(statearr_22060_22078[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22079 = state_22032;
state_22032 = G__22079;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_22032){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_22032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto___22062,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7429__auto__ = (function (){var statearr_22061 = f__7428__auto__.call(null);
(statearr_22061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto___22062);

return statearr_22061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(c__7427__auto___22062,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__7427__auto___22187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7427__auto___22187,out){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (c__7427__auto___22187,out){
return (function (state_22163){
var state_val_22164 = (state_22163[(1)]);
if((state_val_22164 === (7))){
var inst_22143 = (state_22163[(7)]);
var inst_22142 = (state_22163[(8)]);
var inst_22142__$1 = (state_22163[(2)]);
var inst_22143__$1 = cljs.core.nth.call(null,inst_22142__$1,(0),null);
var inst_22144 = cljs.core.nth.call(null,inst_22142__$1,(1),null);
var inst_22145 = (inst_22143__$1 == null);
var state_22163__$1 = (function (){var statearr_22165 = state_22163;
(statearr_22165[(7)] = inst_22143__$1);

(statearr_22165[(8)] = inst_22142__$1);

(statearr_22165[(9)] = inst_22144);

return statearr_22165;
})();
if(cljs.core.truth_(inst_22145)){
var statearr_22166_22188 = state_22163__$1;
(statearr_22166_22188[(1)] = (8));

} else {
var statearr_22167_22189 = state_22163__$1;
(statearr_22167_22189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22164 === (1))){
var inst_22134 = cljs.core.vec.call(null,chs);
var inst_22135 = inst_22134;
var state_22163__$1 = (function (){var statearr_22168 = state_22163;
(statearr_22168[(10)] = inst_22135);

return statearr_22168;
})();
var statearr_22169_22190 = state_22163__$1;
(statearr_22169_22190[(2)] = null);

(statearr_22169_22190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22164 === (4))){
var inst_22135 = (state_22163[(10)]);
var state_22163__$1 = state_22163;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22163__$1,(7),inst_22135);
} else {
if((state_val_22164 === (6))){
var inst_22159 = (state_22163[(2)]);
var state_22163__$1 = state_22163;
var statearr_22170_22191 = state_22163__$1;
(statearr_22170_22191[(2)] = inst_22159);

(statearr_22170_22191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22164 === (3))){
var inst_22161 = (state_22163[(2)]);
var state_22163__$1 = state_22163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22163__$1,inst_22161);
} else {
if((state_val_22164 === (2))){
var inst_22135 = (state_22163[(10)]);
var inst_22137 = cljs.core.count.call(null,inst_22135);
var inst_22138 = (inst_22137 > (0));
var state_22163__$1 = state_22163;
if(cljs.core.truth_(inst_22138)){
var statearr_22172_22192 = state_22163__$1;
(statearr_22172_22192[(1)] = (4));

} else {
var statearr_22173_22193 = state_22163__$1;
(statearr_22173_22193[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22164 === (11))){
var inst_22135 = (state_22163[(10)]);
var inst_22152 = (state_22163[(2)]);
var tmp22171 = inst_22135;
var inst_22135__$1 = tmp22171;
var state_22163__$1 = (function (){var statearr_22174 = state_22163;
(statearr_22174[(10)] = inst_22135__$1);

(statearr_22174[(11)] = inst_22152);

return statearr_22174;
})();
var statearr_22175_22194 = state_22163__$1;
(statearr_22175_22194[(2)] = null);

(statearr_22175_22194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22164 === (9))){
var inst_22143 = (state_22163[(7)]);
var state_22163__$1 = state_22163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22163__$1,(11),out,inst_22143);
} else {
if((state_val_22164 === (5))){
var inst_22157 = cljs.core.async.close_BANG_.call(null,out);
var state_22163__$1 = state_22163;
var statearr_22176_22195 = state_22163__$1;
(statearr_22176_22195[(2)] = inst_22157);

(statearr_22176_22195[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22164 === (10))){
var inst_22155 = (state_22163[(2)]);
var state_22163__$1 = state_22163;
var statearr_22177_22196 = state_22163__$1;
(statearr_22177_22196[(2)] = inst_22155);

(statearr_22177_22196[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22164 === (8))){
var inst_22143 = (state_22163[(7)]);
var inst_22135 = (state_22163[(10)]);
var inst_22142 = (state_22163[(8)]);
var inst_22144 = (state_22163[(9)]);
var inst_22147 = (function (){var c = inst_22144;
var v = inst_22143;
var vec__22140 = inst_22142;
var cs = inst_22135;
return ((function (c,v,vec__22140,cs,inst_22143,inst_22135,inst_22142,inst_22144,state_val_22164,c__7427__auto___22187,out){
return (function (p1__22080_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22080_SHARP_);
});
;})(c,v,vec__22140,cs,inst_22143,inst_22135,inst_22142,inst_22144,state_val_22164,c__7427__auto___22187,out))
})();
var inst_22148 = cljs.core.filterv.call(null,inst_22147,inst_22135);
var inst_22135__$1 = inst_22148;
var state_22163__$1 = (function (){var statearr_22178 = state_22163;
(statearr_22178[(10)] = inst_22135__$1);

return statearr_22178;
})();
var statearr_22179_22197 = state_22163__$1;
(statearr_22179_22197[(2)] = null);

(statearr_22179_22197[(1)] = (2));


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
});})(c__7427__auto___22187,out))
;
return ((function (switch__7371__auto__,c__7427__auto___22187,out){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_22183 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22183[(0)] = state_machine__7372__auto__);

(statearr_22183[(1)] = (1));

return statearr_22183;
});
var state_machine__7372__auto____1 = (function (state_22163){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_22163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e22184){if((e22184 instanceof Object)){
var ex__7375__auto__ = e22184;
var statearr_22185_22198 = state_22163;
(statearr_22185_22198[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22199 = state_22163;
state_22163 = G__22199;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_22163){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_22163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto___22187,out))
})();
var state__7429__auto__ = (function (){var statearr_22186 = f__7428__auto__.call(null);
(statearr_22186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto___22187);

return statearr_22186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(c__7427__auto___22187,out))
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
var c__7427__auto___22292 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7427__auto___22292,out){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (c__7427__auto___22292,out){
return (function (state_22269){
var state_val_22270 = (state_22269[(1)]);
if((state_val_22270 === (7))){
var inst_22251 = (state_22269[(7)]);
var inst_22251__$1 = (state_22269[(2)]);
var inst_22252 = (inst_22251__$1 == null);
var inst_22253 = cljs.core.not.call(null,inst_22252);
var state_22269__$1 = (function (){var statearr_22271 = state_22269;
(statearr_22271[(7)] = inst_22251__$1);

return statearr_22271;
})();
if(inst_22253){
var statearr_22272_22293 = state_22269__$1;
(statearr_22272_22293[(1)] = (8));

} else {
var statearr_22273_22294 = state_22269__$1;
(statearr_22273_22294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (1))){
var inst_22246 = (0);
var state_22269__$1 = (function (){var statearr_22274 = state_22269;
(statearr_22274[(8)] = inst_22246);

return statearr_22274;
})();
var statearr_22275_22295 = state_22269__$1;
(statearr_22275_22295[(2)] = null);

(statearr_22275_22295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (4))){
var state_22269__$1 = state_22269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22269__$1,(7),ch);
} else {
if((state_val_22270 === (6))){
var inst_22264 = (state_22269[(2)]);
var state_22269__$1 = state_22269;
var statearr_22276_22296 = state_22269__$1;
(statearr_22276_22296[(2)] = inst_22264);

(statearr_22276_22296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (3))){
var inst_22266 = (state_22269[(2)]);
var inst_22267 = cljs.core.async.close_BANG_.call(null,out);
var state_22269__$1 = (function (){var statearr_22277 = state_22269;
(statearr_22277[(9)] = inst_22266);

return statearr_22277;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22269__$1,inst_22267);
} else {
if((state_val_22270 === (2))){
var inst_22246 = (state_22269[(8)]);
var inst_22248 = (inst_22246 < n);
var state_22269__$1 = state_22269;
if(cljs.core.truth_(inst_22248)){
var statearr_22278_22297 = state_22269__$1;
(statearr_22278_22297[(1)] = (4));

} else {
var statearr_22279_22298 = state_22269__$1;
(statearr_22279_22298[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (11))){
var inst_22246 = (state_22269[(8)]);
var inst_22256 = (state_22269[(2)]);
var inst_22257 = (inst_22246 + (1));
var inst_22246__$1 = inst_22257;
var state_22269__$1 = (function (){var statearr_22280 = state_22269;
(statearr_22280[(10)] = inst_22256);

(statearr_22280[(8)] = inst_22246__$1);

return statearr_22280;
})();
var statearr_22281_22299 = state_22269__$1;
(statearr_22281_22299[(2)] = null);

(statearr_22281_22299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (9))){
var state_22269__$1 = state_22269;
var statearr_22282_22300 = state_22269__$1;
(statearr_22282_22300[(2)] = null);

(statearr_22282_22300[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (5))){
var state_22269__$1 = state_22269;
var statearr_22283_22301 = state_22269__$1;
(statearr_22283_22301[(2)] = null);

(statearr_22283_22301[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (10))){
var inst_22261 = (state_22269[(2)]);
var state_22269__$1 = state_22269;
var statearr_22284_22302 = state_22269__$1;
(statearr_22284_22302[(2)] = inst_22261);

(statearr_22284_22302[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (8))){
var inst_22251 = (state_22269[(7)]);
var state_22269__$1 = state_22269;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22269__$1,(11),out,inst_22251);
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
});})(c__7427__auto___22292,out))
;
return ((function (switch__7371__auto__,c__7427__auto___22292,out){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_22288 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22288[(0)] = state_machine__7372__auto__);

(statearr_22288[(1)] = (1));

return statearr_22288;
});
var state_machine__7372__auto____1 = (function (state_22269){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_22269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e22289){if((e22289 instanceof Object)){
var ex__7375__auto__ = e22289;
var statearr_22290_22303 = state_22269;
(statearr_22290_22303[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22304 = state_22269;
state_22269 = G__22304;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_22269){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_22269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto___22292,out))
})();
var state__7429__auto__ = (function (){var statearr_22291 = f__7428__auto__.call(null);
(statearr_22291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto___22292);

return statearr_22291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(c__7427__auto___22292,out))
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
if(typeof cljs.core.async.t22312 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22312 = (function (ch,f,map_LT_,meta22313){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22313 = meta22313;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22312.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22312.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t22312.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22312.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t22315 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22315 = (function (fn1,_,meta22313,map_LT_,f,ch,meta22316){
this.fn1 = fn1;
this._ = _;
this.meta22313 = meta22313;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22316 = meta22316;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22315.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22315.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t22315.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22305_SHARP_){
return f1.call(null,(((p1__22305_SHARP_ == null))?null:self__.f.call(null,p1__22305_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t22315.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22317){
var self__ = this;
var _22317__$1 = this;
return self__.meta22316;
});})(___$1))
;

cljs.core.async.t22315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22317,meta22316__$1){
var self__ = this;
var _22317__$1 = this;
return (new cljs.core.async.t22315(self__.fn1,self__._,self__.meta22313,self__.map_LT_,self__.f,self__.ch,meta22316__$1));
});})(___$1))
;

cljs.core.async.t22315.cljs$lang$type = true;

cljs.core.async.t22315.cljs$lang$ctorStr = "cljs.core.async/t22315";

cljs.core.async.t22315.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t22315");
});})(___$1))
;

cljs.core.async.__GT_t22315 = ((function (___$1){
return (function __GT_t22315(fn1__$1,___$2,meta22313__$1,map_LT___$1,f__$1,ch__$1,meta22316){
return (new cljs.core.async.t22315(fn1__$1,___$2,meta22313__$1,map_LT___$1,f__$1,ch__$1,meta22316));
});})(___$1))
;

}

return (new cljs.core.async.t22315(fn1,___$1,self__.meta22313,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
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

cljs.core.async.t22312.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22312.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22312.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t22312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22314){
var self__ = this;
var _22314__$1 = this;
return self__.meta22313;
});

cljs.core.async.t22312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22314,meta22313__$1){
var self__ = this;
var _22314__$1 = this;
return (new cljs.core.async.t22312(self__.ch,self__.f,self__.map_LT_,meta22313__$1));
});

cljs.core.async.t22312.cljs$lang$type = true;

cljs.core.async.t22312.cljs$lang$ctorStr = "cljs.core.async/t22312";

cljs.core.async.t22312.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t22312");
});

cljs.core.async.__GT_t22312 = (function __GT_t22312(ch__$1,f__$1,map_LT___$1,meta22313){
return (new cljs.core.async.t22312(ch__$1,f__$1,map_LT___$1,meta22313));
});

}

return (new cljs.core.async.t22312(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t22321 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22321 = (function (ch,f,map_GT_,meta22322){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta22322 = meta22322;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22321.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22321.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t22321.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22321.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t22321.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22321.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22321.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22323){
var self__ = this;
var _22323__$1 = this;
return self__.meta22322;
});

cljs.core.async.t22321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22323,meta22322__$1){
var self__ = this;
var _22323__$1 = this;
return (new cljs.core.async.t22321(self__.ch,self__.f,self__.map_GT_,meta22322__$1));
});

cljs.core.async.t22321.cljs$lang$type = true;

cljs.core.async.t22321.cljs$lang$ctorStr = "cljs.core.async/t22321";

cljs.core.async.t22321.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t22321");
});

cljs.core.async.__GT_t22321 = (function __GT_t22321(ch__$1,f__$1,map_GT___$1,meta22322){
return (new cljs.core.async.t22321(ch__$1,f__$1,map_GT___$1,meta22322));
});

}

return (new cljs.core.async.t22321(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t22327 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22327 = (function (ch,p,filter_GT_,meta22328){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta22328 = meta22328;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22327.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22327.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t22327.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22327.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t22327.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22327.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22327.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t22327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22329){
var self__ = this;
var _22329__$1 = this;
return self__.meta22328;
});

cljs.core.async.t22327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22329,meta22328__$1){
var self__ = this;
var _22329__$1 = this;
return (new cljs.core.async.t22327(self__.ch,self__.p,self__.filter_GT_,meta22328__$1));
});

cljs.core.async.t22327.cljs$lang$type = true;

cljs.core.async.t22327.cljs$lang$ctorStr = "cljs.core.async/t22327";

cljs.core.async.t22327.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t22327");
});

cljs.core.async.__GT_t22327 = (function __GT_t22327(ch__$1,p__$1,filter_GT___$1,meta22328){
return (new cljs.core.async.t22327(ch__$1,p__$1,filter_GT___$1,meta22328));
});

}

return (new cljs.core.async.t22327(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
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
var c__7427__auto___22412 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7427__auto___22412,out){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (c__7427__auto___22412,out){
return (function (state_22391){
var state_val_22392 = (state_22391[(1)]);
if((state_val_22392 === (7))){
var inst_22387 = (state_22391[(2)]);
var state_22391__$1 = state_22391;
var statearr_22393_22413 = state_22391__$1;
(statearr_22393_22413[(2)] = inst_22387);

(statearr_22393_22413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (1))){
var state_22391__$1 = state_22391;
var statearr_22394_22414 = state_22391__$1;
(statearr_22394_22414[(2)] = null);

(statearr_22394_22414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (4))){
var inst_22373 = (state_22391[(7)]);
var inst_22373__$1 = (state_22391[(2)]);
var inst_22374 = (inst_22373__$1 == null);
var state_22391__$1 = (function (){var statearr_22395 = state_22391;
(statearr_22395[(7)] = inst_22373__$1);

return statearr_22395;
})();
if(cljs.core.truth_(inst_22374)){
var statearr_22396_22415 = state_22391__$1;
(statearr_22396_22415[(1)] = (5));

} else {
var statearr_22397_22416 = state_22391__$1;
(statearr_22397_22416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (6))){
var inst_22373 = (state_22391[(7)]);
var inst_22378 = p.call(null,inst_22373);
var state_22391__$1 = state_22391;
if(cljs.core.truth_(inst_22378)){
var statearr_22398_22417 = state_22391__$1;
(statearr_22398_22417[(1)] = (8));

} else {
var statearr_22399_22418 = state_22391__$1;
(statearr_22399_22418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (3))){
var inst_22389 = (state_22391[(2)]);
var state_22391__$1 = state_22391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22391__$1,inst_22389);
} else {
if((state_val_22392 === (2))){
var state_22391__$1 = state_22391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22391__$1,(4),ch);
} else {
if((state_val_22392 === (11))){
var inst_22381 = (state_22391[(2)]);
var state_22391__$1 = state_22391;
var statearr_22400_22419 = state_22391__$1;
(statearr_22400_22419[(2)] = inst_22381);

(statearr_22400_22419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (9))){
var state_22391__$1 = state_22391;
var statearr_22401_22420 = state_22391__$1;
(statearr_22401_22420[(2)] = null);

(statearr_22401_22420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (5))){
var inst_22376 = cljs.core.async.close_BANG_.call(null,out);
var state_22391__$1 = state_22391;
var statearr_22402_22421 = state_22391__$1;
(statearr_22402_22421[(2)] = inst_22376);

(statearr_22402_22421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (10))){
var inst_22384 = (state_22391[(2)]);
var state_22391__$1 = (function (){var statearr_22403 = state_22391;
(statearr_22403[(8)] = inst_22384);

return statearr_22403;
})();
var statearr_22404_22422 = state_22391__$1;
(statearr_22404_22422[(2)] = null);

(statearr_22404_22422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (8))){
var inst_22373 = (state_22391[(7)]);
var state_22391__$1 = state_22391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22391__$1,(11),out,inst_22373);
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
});})(c__7427__auto___22412,out))
;
return ((function (switch__7371__auto__,c__7427__auto___22412,out){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_22408 = [null,null,null,null,null,null,null,null,null];
(statearr_22408[(0)] = state_machine__7372__auto__);

(statearr_22408[(1)] = (1));

return statearr_22408;
});
var state_machine__7372__auto____1 = (function (state_22391){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_22391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e22409){if((e22409 instanceof Object)){
var ex__7375__auto__ = e22409;
var statearr_22410_22423 = state_22391;
(statearr_22410_22423[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22424 = state_22391;
state_22391 = G__22424;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_22391){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_22391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto___22412,out))
})();
var state__7429__auto__ = (function (){var statearr_22411 = f__7428__auto__.call(null);
(statearr_22411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto___22412);

return statearr_22411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(c__7427__auto___22412,out))
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
var c__7427__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7427__auto__){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (c__7427__auto__){
return (function (state_22590){
var state_val_22591 = (state_22590[(1)]);
if((state_val_22591 === (7))){
var inst_22586 = (state_22590[(2)]);
var state_22590__$1 = state_22590;
var statearr_22592_22633 = state_22590__$1;
(statearr_22592_22633[(2)] = inst_22586);

(statearr_22592_22633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (20))){
var inst_22556 = (state_22590[(7)]);
var inst_22567 = (state_22590[(2)]);
var inst_22568 = cljs.core.next.call(null,inst_22556);
var inst_22542 = inst_22568;
var inst_22543 = null;
var inst_22544 = (0);
var inst_22545 = (0);
var state_22590__$1 = (function (){var statearr_22593 = state_22590;
(statearr_22593[(8)] = inst_22542);

(statearr_22593[(9)] = inst_22545);

(statearr_22593[(10)] = inst_22567);

(statearr_22593[(11)] = inst_22543);

(statearr_22593[(12)] = inst_22544);

return statearr_22593;
})();
var statearr_22594_22634 = state_22590__$1;
(statearr_22594_22634[(2)] = null);

(statearr_22594_22634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (1))){
var state_22590__$1 = state_22590;
var statearr_22595_22635 = state_22590__$1;
(statearr_22595_22635[(2)] = null);

(statearr_22595_22635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (4))){
var inst_22531 = (state_22590[(13)]);
var inst_22531__$1 = (state_22590[(2)]);
var inst_22532 = (inst_22531__$1 == null);
var state_22590__$1 = (function (){var statearr_22596 = state_22590;
(statearr_22596[(13)] = inst_22531__$1);

return statearr_22596;
})();
if(cljs.core.truth_(inst_22532)){
var statearr_22597_22636 = state_22590__$1;
(statearr_22597_22636[(1)] = (5));

} else {
var statearr_22598_22637 = state_22590__$1;
(statearr_22598_22637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (15))){
var state_22590__$1 = state_22590;
var statearr_22602_22638 = state_22590__$1;
(statearr_22602_22638[(2)] = null);

(statearr_22602_22638[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (21))){
var state_22590__$1 = state_22590;
var statearr_22603_22639 = state_22590__$1;
(statearr_22603_22639[(2)] = null);

(statearr_22603_22639[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (13))){
var inst_22542 = (state_22590[(8)]);
var inst_22545 = (state_22590[(9)]);
var inst_22543 = (state_22590[(11)]);
var inst_22544 = (state_22590[(12)]);
var inst_22552 = (state_22590[(2)]);
var inst_22553 = (inst_22545 + (1));
var tmp22599 = inst_22542;
var tmp22600 = inst_22543;
var tmp22601 = inst_22544;
var inst_22542__$1 = tmp22599;
var inst_22543__$1 = tmp22600;
var inst_22544__$1 = tmp22601;
var inst_22545__$1 = inst_22553;
var state_22590__$1 = (function (){var statearr_22604 = state_22590;
(statearr_22604[(8)] = inst_22542__$1);

(statearr_22604[(9)] = inst_22545__$1);

(statearr_22604[(11)] = inst_22543__$1);

(statearr_22604[(12)] = inst_22544__$1);

(statearr_22604[(14)] = inst_22552);

return statearr_22604;
})();
var statearr_22605_22640 = state_22590__$1;
(statearr_22605_22640[(2)] = null);

(statearr_22605_22640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (22))){
var state_22590__$1 = state_22590;
var statearr_22606_22641 = state_22590__$1;
(statearr_22606_22641[(2)] = null);

(statearr_22606_22641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (6))){
var inst_22531 = (state_22590[(13)]);
var inst_22540 = f.call(null,inst_22531);
var inst_22541 = cljs.core.seq.call(null,inst_22540);
var inst_22542 = inst_22541;
var inst_22543 = null;
var inst_22544 = (0);
var inst_22545 = (0);
var state_22590__$1 = (function (){var statearr_22607 = state_22590;
(statearr_22607[(8)] = inst_22542);

(statearr_22607[(9)] = inst_22545);

(statearr_22607[(11)] = inst_22543);

(statearr_22607[(12)] = inst_22544);

return statearr_22607;
})();
var statearr_22608_22642 = state_22590__$1;
(statearr_22608_22642[(2)] = null);

(statearr_22608_22642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (17))){
var inst_22556 = (state_22590[(7)]);
var inst_22560 = cljs.core.chunk_first.call(null,inst_22556);
var inst_22561 = cljs.core.chunk_rest.call(null,inst_22556);
var inst_22562 = cljs.core.count.call(null,inst_22560);
var inst_22542 = inst_22561;
var inst_22543 = inst_22560;
var inst_22544 = inst_22562;
var inst_22545 = (0);
var state_22590__$1 = (function (){var statearr_22609 = state_22590;
(statearr_22609[(8)] = inst_22542);

(statearr_22609[(9)] = inst_22545);

(statearr_22609[(11)] = inst_22543);

(statearr_22609[(12)] = inst_22544);

return statearr_22609;
})();
var statearr_22610_22643 = state_22590__$1;
(statearr_22610_22643[(2)] = null);

(statearr_22610_22643[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (3))){
var inst_22588 = (state_22590[(2)]);
var state_22590__$1 = state_22590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22590__$1,inst_22588);
} else {
if((state_val_22591 === (12))){
var inst_22576 = (state_22590[(2)]);
var state_22590__$1 = state_22590;
var statearr_22611_22644 = state_22590__$1;
(statearr_22611_22644[(2)] = inst_22576);

(statearr_22611_22644[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (2))){
var state_22590__$1 = state_22590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22590__$1,(4),in$);
} else {
if((state_val_22591 === (23))){
var inst_22584 = (state_22590[(2)]);
var state_22590__$1 = state_22590;
var statearr_22612_22645 = state_22590__$1;
(statearr_22612_22645[(2)] = inst_22584);

(statearr_22612_22645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (19))){
var inst_22571 = (state_22590[(2)]);
var state_22590__$1 = state_22590;
var statearr_22613_22646 = state_22590__$1;
(statearr_22613_22646[(2)] = inst_22571);

(statearr_22613_22646[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (11))){
var inst_22556 = (state_22590[(7)]);
var inst_22542 = (state_22590[(8)]);
var inst_22556__$1 = cljs.core.seq.call(null,inst_22542);
var state_22590__$1 = (function (){var statearr_22614 = state_22590;
(statearr_22614[(7)] = inst_22556__$1);

return statearr_22614;
})();
if(inst_22556__$1){
var statearr_22615_22647 = state_22590__$1;
(statearr_22615_22647[(1)] = (14));

} else {
var statearr_22616_22648 = state_22590__$1;
(statearr_22616_22648[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (9))){
var inst_22578 = (state_22590[(2)]);
var inst_22579 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22590__$1 = (function (){var statearr_22617 = state_22590;
(statearr_22617[(15)] = inst_22578);

return statearr_22617;
})();
if(cljs.core.truth_(inst_22579)){
var statearr_22618_22649 = state_22590__$1;
(statearr_22618_22649[(1)] = (21));

} else {
var statearr_22619_22650 = state_22590__$1;
(statearr_22619_22650[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (5))){
var inst_22534 = cljs.core.async.close_BANG_.call(null,out);
var state_22590__$1 = state_22590;
var statearr_22620_22651 = state_22590__$1;
(statearr_22620_22651[(2)] = inst_22534);

(statearr_22620_22651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (14))){
var inst_22556 = (state_22590[(7)]);
var inst_22558 = cljs.core.chunked_seq_QMARK_.call(null,inst_22556);
var state_22590__$1 = state_22590;
if(inst_22558){
var statearr_22621_22652 = state_22590__$1;
(statearr_22621_22652[(1)] = (17));

} else {
var statearr_22622_22653 = state_22590__$1;
(statearr_22622_22653[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (16))){
var inst_22574 = (state_22590[(2)]);
var state_22590__$1 = state_22590;
var statearr_22623_22654 = state_22590__$1;
(statearr_22623_22654[(2)] = inst_22574);

(statearr_22623_22654[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22591 === (10))){
var inst_22545 = (state_22590[(9)]);
var inst_22543 = (state_22590[(11)]);
var inst_22550 = cljs.core._nth.call(null,inst_22543,inst_22545);
var state_22590__$1 = state_22590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22590__$1,(13),out,inst_22550);
} else {
if((state_val_22591 === (18))){
var inst_22556 = (state_22590[(7)]);
var inst_22565 = cljs.core.first.call(null,inst_22556);
var state_22590__$1 = state_22590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22590__$1,(20),out,inst_22565);
} else {
if((state_val_22591 === (8))){
var inst_22545 = (state_22590[(9)]);
var inst_22544 = (state_22590[(12)]);
var inst_22547 = (inst_22545 < inst_22544);
var inst_22548 = inst_22547;
var state_22590__$1 = state_22590;
if(cljs.core.truth_(inst_22548)){
var statearr_22624_22655 = state_22590__$1;
(statearr_22624_22655[(1)] = (10));

} else {
var statearr_22625_22656 = state_22590__$1;
(statearr_22625_22656[(1)] = (11));

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
});})(c__7427__auto__))
;
return ((function (switch__7371__auto__,c__7427__auto__){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_22629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22629[(0)] = state_machine__7372__auto__);

(statearr_22629[(1)] = (1));

return statearr_22629;
});
var state_machine__7372__auto____1 = (function (state_22590){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_22590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e22630){if((e22630 instanceof Object)){
var ex__7375__auto__ = e22630;
var statearr_22631_22657 = state_22590;
(statearr_22631_22657[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22658 = state_22590;
state_22590 = G__22658;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_22590){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_22590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto__))
})();
var state__7429__auto__ = (function (){var statearr_22632 = f__7428__auto__.call(null);
(statearr_22632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto__);

return statearr_22632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(c__7427__auto__))
);

return c__7427__auto__;
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
var c__7427__auto___22755 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7427__auto___22755,out){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (c__7427__auto___22755,out){
return (function (state_22730){
var state_val_22731 = (state_22730[(1)]);
if((state_val_22731 === (7))){
var inst_22725 = (state_22730[(2)]);
var state_22730__$1 = state_22730;
var statearr_22732_22756 = state_22730__$1;
(statearr_22732_22756[(2)] = inst_22725);

(statearr_22732_22756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (1))){
var inst_22707 = null;
var state_22730__$1 = (function (){var statearr_22733 = state_22730;
(statearr_22733[(7)] = inst_22707);

return statearr_22733;
})();
var statearr_22734_22757 = state_22730__$1;
(statearr_22734_22757[(2)] = null);

(statearr_22734_22757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (4))){
var inst_22710 = (state_22730[(8)]);
var inst_22710__$1 = (state_22730[(2)]);
var inst_22711 = (inst_22710__$1 == null);
var inst_22712 = cljs.core.not.call(null,inst_22711);
var state_22730__$1 = (function (){var statearr_22735 = state_22730;
(statearr_22735[(8)] = inst_22710__$1);

return statearr_22735;
})();
if(inst_22712){
var statearr_22736_22758 = state_22730__$1;
(statearr_22736_22758[(1)] = (5));

} else {
var statearr_22737_22759 = state_22730__$1;
(statearr_22737_22759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (6))){
var state_22730__$1 = state_22730;
var statearr_22738_22760 = state_22730__$1;
(statearr_22738_22760[(2)] = null);

(statearr_22738_22760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (3))){
var inst_22727 = (state_22730[(2)]);
var inst_22728 = cljs.core.async.close_BANG_.call(null,out);
var state_22730__$1 = (function (){var statearr_22739 = state_22730;
(statearr_22739[(9)] = inst_22727);

return statearr_22739;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22730__$1,inst_22728);
} else {
if((state_val_22731 === (2))){
var state_22730__$1 = state_22730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22730__$1,(4),ch);
} else {
if((state_val_22731 === (11))){
var inst_22710 = (state_22730[(8)]);
var inst_22719 = (state_22730[(2)]);
var inst_22707 = inst_22710;
var state_22730__$1 = (function (){var statearr_22740 = state_22730;
(statearr_22740[(7)] = inst_22707);

(statearr_22740[(10)] = inst_22719);

return statearr_22740;
})();
var statearr_22741_22761 = state_22730__$1;
(statearr_22741_22761[(2)] = null);

(statearr_22741_22761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (9))){
var inst_22710 = (state_22730[(8)]);
var state_22730__$1 = state_22730;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22730__$1,(11),out,inst_22710);
} else {
if((state_val_22731 === (5))){
var inst_22707 = (state_22730[(7)]);
var inst_22710 = (state_22730[(8)]);
var inst_22714 = cljs.core._EQ_.call(null,inst_22710,inst_22707);
var state_22730__$1 = state_22730;
if(inst_22714){
var statearr_22743_22762 = state_22730__$1;
(statearr_22743_22762[(1)] = (8));

} else {
var statearr_22744_22763 = state_22730__$1;
(statearr_22744_22763[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (10))){
var inst_22722 = (state_22730[(2)]);
var state_22730__$1 = state_22730;
var statearr_22745_22764 = state_22730__$1;
(statearr_22745_22764[(2)] = inst_22722);

(statearr_22745_22764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (8))){
var inst_22707 = (state_22730[(7)]);
var tmp22742 = inst_22707;
var inst_22707__$1 = tmp22742;
var state_22730__$1 = (function (){var statearr_22746 = state_22730;
(statearr_22746[(7)] = inst_22707__$1);

return statearr_22746;
})();
var statearr_22747_22765 = state_22730__$1;
(statearr_22747_22765[(2)] = null);

(statearr_22747_22765[(1)] = (2));


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
});})(c__7427__auto___22755,out))
;
return ((function (switch__7371__auto__,c__7427__auto___22755,out){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_22751 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22751[(0)] = state_machine__7372__auto__);

(statearr_22751[(1)] = (1));

return statearr_22751;
});
var state_machine__7372__auto____1 = (function (state_22730){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_22730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e22752){if((e22752 instanceof Object)){
var ex__7375__auto__ = e22752;
var statearr_22753_22766 = state_22730;
(statearr_22753_22766[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22767 = state_22730;
state_22730 = G__22767;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_22730){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_22730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto___22755,out))
})();
var state__7429__auto__ = (function (){var statearr_22754 = f__7428__auto__.call(null);
(statearr_22754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto___22755);

return statearr_22754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(c__7427__auto___22755,out))
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
var c__7427__auto___22902 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7427__auto___22902,out){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (c__7427__auto___22902,out){
return (function (state_22872){
var state_val_22873 = (state_22872[(1)]);
if((state_val_22873 === (7))){
var inst_22868 = (state_22872[(2)]);
var state_22872__$1 = state_22872;
var statearr_22874_22903 = state_22872__$1;
(statearr_22874_22903[(2)] = inst_22868);

(statearr_22874_22903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22873 === (1))){
var inst_22835 = (new Array(n));
var inst_22836 = inst_22835;
var inst_22837 = (0);
var state_22872__$1 = (function (){var statearr_22875 = state_22872;
(statearr_22875[(7)] = inst_22836);

(statearr_22875[(8)] = inst_22837);

return statearr_22875;
})();
var statearr_22876_22904 = state_22872__$1;
(statearr_22876_22904[(2)] = null);

(statearr_22876_22904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22873 === (4))){
var inst_22840 = (state_22872[(9)]);
var inst_22840__$1 = (state_22872[(2)]);
var inst_22841 = (inst_22840__$1 == null);
var inst_22842 = cljs.core.not.call(null,inst_22841);
var state_22872__$1 = (function (){var statearr_22877 = state_22872;
(statearr_22877[(9)] = inst_22840__$1);

return statearr_22877;
})();
if(inst_22842){
var statearr_22878_22905 = state_22872__$1;
(statearr_22878_22905[(1)] = (5));

} else {
var statearr_22879_22906 = state_22872__$1;
(statearr_22879_22906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22873 === (15))){
var inst_22862 = (state_22872[(2)]);
var state_22872__$1 = state_22872;
var statearr_22880_22907 = state_22872__$1;
(statearr_22880_22907[(2)] = inst_22862);

(statearr_22880_22907[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22873 === (13))){
var state_22872__$1 = state_22872;
var statearr_22881_22908 = state_22872__$1;
(statearr_22881_22908[(2)] = null);

(statearr_22881_22908[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22873 === (6))){
var inst_22837 = (state_22872[(8)]);
var inst_22858 = (inst_22837 > (0));
var state_22872__$1 = state_22872;
if(cljs.core.truth_(inst_22858)){
var statearr_22882_22909 = state_22872__$1;
(statearr_22882_22909[(1)] = (12));

} else {
var statearr_22883_22910 = state_22872__$1;
(statearr_22883_22910[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22873 === (3))){
var inst_22870 = (state_22872[(2)]);
var state_22872__$1 = state_22872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22872__$1,inst_22870);
} else {
if((state_val_22873 === (12))){
var inst_22836 = (state_22872[(7)]);
var inst_22860 = cljs.core.vec.call(null,inst_22836);
var state_22872__$1 = state_22872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22872__$1,(15),out,inst_22860);
} else {
if((state_val_22873 === (2))){
var state_22872__$1 = state_22872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22872__$1,(4),ch);
} else {
if((state_val_22873 === (11))){
var inst_22852 = (state_22872[(2)]);
var inst_22853 = (new Array(n));
var inst_22836 = inst_22853;
var inst_22837 = (0);
var state_22872__$1 = (function (){var statearr_22884 = state_22872;
(statearr_22884[(7)] = inst_22836);

(statearr_22884[(8)] = inst_22837);

(statearr_22884[(10)] = inst_22852);

return statearr_22884;
})();
var statearr_22885_22911 = state_22872__$1;
(statearr_22885_22911[(2)] = null);

(statearr_22885_22911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22873 === (9))){
var inst_22836 = (state_22872[(7)]);
var inst_22850 = cljs.core.vec.call(null,inst_22836);
var state_22872__$1 = state_22872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22872__$1,(11),out,inst_22850);
} else {
if((state_val_22873 === (5))){
var inst_22836 = (state_22872[(7)]);
var inst_22837 = (state_22872[(8)]);
var inst_22845 = (state_22872[(11)]);
var inst_22840 = (state_22872[(9)]);
var inst_22844 = (inst_22836[inst_22837] = inst_22840);
var inst_22845__$1 = (inst_22837 + (1));
var inst_22846 = (inst_22845__$1 < n);
var state_22872__$1 = (function (){var statearr_22886 = state_22872;
(statearr_22886[(11)] = inst_22845__$1);

(statearr_22886[(12)] = inst_22844);

return statearr_22886;
})();
if(cljs.core.truth_(inst_22846)){
var statearr_22887_22912 = state_22872__$1;
(statearr_22887_22912[(1)] = (8));

} else {
var statearr_22888_22913 = state_22872__$1;
(statearr_22888_22913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22873 === (14))){
var inst_22865 = (state_22872[(2)]);
var inst_22866 = cljs.core.async.close_BANG_.call(null,out);
var state_22872__$1 = (function (){var statearr_22890 = state_22872;
(statearr_22890[(13)] = inst_22865);

return statearr_22890;
})();
var statearr_22891_22914 = state_22872__$1;
(statearr_22891_22914[(2)] = inst_22866);

(statearr_22891_22914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22873 === (10))){
var inst_22856 = (state_22872[(2)]);
var state_22872__$1 = state_22872;
var statearr_22892_22915 = state_22872__$1;
(statearr_22892_22915[(2)] = inst_22856);

(statearr_22892_22915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22873 === (8))){
var inst_22836 = (state_22872[(7)]);
var inst_22845 = (state_22872[(11)]);
var tmp22889 = inst_22836;
var inst_22836__$1 = tmp22889;
var inst_22837 = inst_22845;
var state_22872__$1 = (function (){var statearr_22893 = state_22872;
(statearr_22893[(7)] = inst_22836__$1);

(statearr_22893[(8)] = inst_22837);

return statearr_22893;
})();
var statearr_22894_22916 = state_22872__$1;
(statearr_22894_22916[(2)] = null);

(statearr_22894_22916[(1)] = (2));


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
});})(c__7427__auto___22902,out))
;
return ((function (switch__7371__auto__,c__7427__auto___22902,out){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_22898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22898[(0)] = state_machine__7372__auto__);

(statearr_22898[(1)] = (1));

return statearr_22898;
});
var state_machine__7372__auto____1 = (function (state_22872){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_22872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e22899){if((e22899 instanceof Object)){
var ex__7375__auto__ = e22899;
var statearr_22900_22917 = state_22872;
(statearr_22900_22917[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22918 = state_22872;
state_22872 = G__22918;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_22872){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_22872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto___22902,out))
})();
var state__7429__auto__ = (function (){var statearr_22901 = f__7428__auto__.call(null);
(statearr_22901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto___22902);

return statearr_22901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(c__7427__auto___22902,out))
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
var c__7427__auto___23061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7427__auto___23061,out){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (c__7427__auto___23061,out){
return (function (state_23031){
var state_val_23032 = (state_23031[(1)]);
if((state_val_23032 === (7))){
var inst_23027 = (state_23031[(2)]);
var state_23031__$1 = state_23031;
var statearr_23033_23062 = state_23031__$1;
(statearr_23033_23062[(2)] = inst_23027);

(statearr_23033_23062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23032 === (1))){
var inst_22990 = [];
var inst_22991 = inst_22990;
var inst_22992 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23031__$1 = (function (){var statearr_23034 = state_23031;
(statearr_23034[(7)] = inst_22992);

(statearr_23034[(8)] = inst_22991);

return statearr_23034;
})();
var statearr_23035_23063 = state_23031__$1;
(statearr_23035_23063[(2)] = null);

(statearr_23035_23063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23032 === (4))){
var inst_22995 = (state_23031[(9)]);
var inst_22995__$1 = (state_23031[(2)]);
var inst_22996 = (inst_22995__$1 == null);
var inst_22997 = cljs.core.not.call(null,inst_22996);
var state_23031__$1 = (function (){var statearr_23036 = state_23031;
(statearr_23036[(9)] = inst_22995__$1);

return statearr_23036;
})();
if(inst_22997){
var statearr_23037_23064 = state_23031__$1;
(statearr_23037_23064[(1)] = (5));

} else {
var statearr_23038_23065 = state_23031__$1;
(statearr_23038_23065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23032 === (15))){
var inst_23021 = (state_23031[(2)]);
var state_23031__$1 = state_23031;
var statearr_23039_23066 = state_23031__$1;
(statearr_23039_23066[(2)] = inst_23021);

(statearr_23039_23066[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23032 === (13))){
var state_23031__$1 = state_23031;
var statearr_23040_23067 = state_23031__$1;
(statearr_23040_23067[(2)] = null);

(statearr_23040_23067[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23032 === (6))){
var inst_22991 = (state_23031[(8)]);
var inst_23016 = inst_22991.length;
var inst_23017 = (inst_23016 > (0));
var state_23031__$1 = state_23031;
if(cljs.core.truth_(inst_23017)){
var statearr_23041_23068 = state_23031__$1;
(statearr_23041_23068[(1)] = (12));

} else {
var statearr_23042_23069 = state_23031__$1;
(statearr_23042_23069[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23032 === (3))){
var inst_23029 = (state_23031[(2)]);
var state_23031__$1 = state_23031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23031__$1,inst_23029);
} else {
if((state_val_23032 === (12))){
var inst_22991 = (state_23031[(8)]);
var inst_23019 = cljs.core.vec.call(null,inst_22991);
var state_23031__$1 = state_23031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23031__$1,(15),out,inst_23019);
} else {
if((state_val_23032 === (2))){
var state_23031__$1 = state_23031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23031__$1,(4),ch);
} else {
if((state_val_23032 === (11))){
var inst_22999 = (state_23031[(10)]);
var inst_22995 = (state_23031[(9)]);
var inst_23009 = (state_23031[(2)]);
var inst_23010 = [];
var inst_23011 = inst_23010.push(inst_22995);
var inst_22991 = inst_23010;
var inst_22992 = inst_22999;
var state_23031__$1 = (function (){var statearr_23043 = state_23031;
(statearr_23043[(7)] = inst_22992);

(statearr_23043[(11)] = inst_23011);

(statearr_23043[(8)] = inst_22991);

(statearr_23043[(12)] = inst_23009);

return statearr_23043;
})();
var statearr_23044_23070 = state_23031__$1;
(statearr_23044_23070[(2)] = null);

(statearr_23044_23070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23032 === (9))){
var inst_22991 = (state_23031[(8)]);
var inst_23007 = cljs.core.vec.call(null,inst_22991);
var state_23031__$1 = state_23031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23031__$1,(11),out,inst_23007);
} else {
if((state_val_23032 === (5))){
var inst_22992 = (state_23031[(7)]);
var inst_22999 = (state_23031[(10)]);
var inst_22995 = (state_23031[(9)]);
var inst_22999__$1 = f.call(null,inst_22995);
var inst_23000 = cljs.core._EQ_.call(null,inst_22999__$1,inst_22992);
var inst_23001 = cljs.core.keyword_identical_QMARK_.call(null,inst_22992,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23002 = (inst_23000) || (inst_23001);
var state_23031__$1 = (function (){var statearr_23045 = state_23031;
(statearr_23045[(10)] = inst_22999__$1);

return statearr_23045;
})();
if(cljs.core.truth_(inst_23002)){
var statearr_23046_23071 = state_23031__$1;
(statearr_23046_23071[(1)] = (8));

} else {
var statearr_23047_23072 = state_23031__$1;
(statearr_23047_23072[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23032 === (14))){
var inst_23024 = (state_23031[(2)]);
var inst_23025 = cljs.core.async.close_BANG_.call(null,out);
var state_23031__$1 = (function (){var statearr_23049 = state_23031;
(statearr_23049[(13)] = inst_23024);

return statearr_23049;
})();
var statearr_23050_23073 = state_23031__$1;
(statearr_23050_23073[(2)] = inst_23025);

(statearr_23050_23073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23032 === (10))){
var inst_23014 = (state_23031[(2)]);
var state_23031__$1 = state_23031;
var statearr_23051_23074 = state_23031__$1;
(statearr_23051_23074[(2)] = inst_23014);

(statearr_23051_23074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23032 === (8))){
var inst_22999 = (state_23031[(10)]);
var inst_22995 = (state_23031[(9)]);
var inst_22991 = (state_23031[(8)]);
var inst_23004 = inst_22991.push(inst_22995);
var tmp23048 = inst_22991;
var inst_22991__$1 = tmp23048;
var inst_22992 = inst_22999;
var state_23031__$1 = (function (){var statearr_23052 = state_23031;
(statearr_23052[(7)] = inst_22992);

(statearr_23052[(14)] = inst_23004);

(statearr_23052[(8)] = inst_22991__$1);

return statearr_23052;
})();
var statearr_23053_23075 = state_23031__$1;
(statearr_23053_23075[(2)] = null);

(statearr_23053_23075[(1)] = (2));


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
});})(c__7427__auto___23061,out))
;
return ((function (switch__7371__auto__,c__7427__auto___23061,out){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_23057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23057[(0)] = state_machine__7372__auto__);

(statearr_23057[(1)] = (1));

return statearr_23057;
});
var state_machine__7372__auto____1 = (function (state_23031){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_23031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e23058){if((e23058 instanceof Object)){
var ex__7375__auto__ = e23058;
var statearr_23059_23076 = state_23031;
(statearr_23059_23076[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23077 = state_23031;
state_23031 = G__23077;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_23031){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_23031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto___23061,out))
})();
var state__7429__auto__ = (function (){var statearr_23060 = f__7428__auto__.call(null);
(statearr_23060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto___23061);

return statearr_23060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(c__7427__auto___23061,out))
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
