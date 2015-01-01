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
if(typeof cljs.core.async.t9727 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t9727 = (function (f,fn_handler,meta9728){
this.f = f;
this.fn_handler = fn_handler;
this.meta9728 = meta9728;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9727.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t9727.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t9727.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t9727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9729){
var self__ = this;
var _9729__$1 = this;
return self__.meta9728;
});

cljs.core.async.t9727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9729,meta9728__$1){
var self__ = this;
var _9729__$1 = this;
return (new cljs.core.async.t9727(self__.f,self__.fn_handler,meta9728__$1));
});

cljs.core.async.t9727.cljs$lang$type = true;

cljs.core.async.t9727.cljs$lang$ctorStr = "cljs.core.async/t9727";

cljs.core.async.t9727.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t9727");
});

cljs.core.async.__GT_t9727 = (function __GT_t9727(f__$1,fn_handler__$1,meta9728){
return (new cljs.core.async.t9727(f__$1,fn_handler__$1,meta9728));
});

}

return (new cljs.core.async.t9727(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
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
var G__9731 = buff;
if(G__9731){
var bit__4284__auto__ = null;
if(cljs.core.truth_((function (){var or__3608__auto__ = bit__4284__auto__;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return G__9731.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__9731.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9731);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9731);
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
var val_9732 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_9732);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_9732,ret){
return (function (){
return fn1.call(null,val_9732);
});})(val_9732,ret))
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
var n__4490__auto___9733 = n;
var x_9734 = (0);
while(true){
if((x_9734 < n__4490__auto___9733)){
(a[x_9734] = (0));

var G__9735 = (x_9734 + (1));
x_9734 = G__9735;
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

var G__9736 = (i + (1));
i = G__9736;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t9740 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t9740 = (function (flag,alt_flag,meta9741){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9741 = meta9741;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9740.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t9740.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t9740.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t9740.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9742){
var self__ = this;
var _9742__$1 = this;
return self__.meta9741;
});})(flag))
;

cljs.core.async.t9740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9742,meta9741__$1){
var self__ = this;
var _9742__$1 = this;
return (new cljs.core.async.t9740(self__.flag,self__.alt_flag,meta9741__$1));
});})(flag))
;

cljs.core.async.t9740.cljs$lang$type = true;

cljs.core.async.t9740.cljs$lang$ctorStr = "cljs.core.async/t9740";

cljs.core.async.t9740.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t9740");
});})(flag))
;

cljs.core.async.__GT_t9740 = ((function (flag){
return (function __GT_t9740(flag__$1,alt_flag__$1,meta9741){
return (new cljs.core.async.t9740(flag__$1,alt_flag__$1,meta9741));
});})(flag))
;

}

return (new cljs.core.async.t9740(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t9746 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t9746 = (function (cb,flag,alt_handler,meta9747){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9747 = meta9747;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9746.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t9746.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t9746.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t9746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9748){
var self__ = this;
var _9748__$1 = this;
return self__.meta9747;
});

cljs.core.async.t9746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9748,meta9747__$1){
var self__ = this;
var _9748__$1 = this;
return (new cljs.core.async.t9746(self__.cb,self__.flag,self__.alt_handler,meta9747__$1));
});

cljs.core.async.t9746.cljs$lang$type = true;

cljs.core.async.t9746.cljs$lang$ctorStr = "cljs.core.async/t9746";

cljs.core.async.t9746.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t9746");
});

cljs.core.async.__GT_t9746 = (function __GT_t9746(cb__$1,flag__$1,alt_handler__$1,meta9747){
return (new cljs.core.async.t9746(cb__$1,flag__$1,alt_handler__$1,meta9747));
});

}

return (new cljs.core.async.t9746(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
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
return (function (p1__9749_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9749_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9750_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9750_SHARP_,port], null));
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
var G__9751 = (i + (1));
i = G__9751;
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
var alts_BANG___delegate = function (ports,p__9752){
var map__9754 = p__9752;
var map__9754__$1 = ((cljs.core.seq_QMARK_.call(null,map__9754))?cljs.core.apply.call(null,cljs.core.hash_map,map__9754):map__9754);
var opts = map__9754__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__9752 = null;
if (arguments.length > 1) {
  p__9752 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__9752);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9755){
var ports = cljs.core.first(arglist__9755);
var p__9752 = cljs.core.rest(arglist__9755);
return alts_BANG___delegate(ports,p__9752);
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
var c__5809__auto___9850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___9850){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___9850){
return (function (state_9826){
var state_val_9827 = (state_9826[(1)]);
if((state_val_9827 === (7))){
var inst_9822 = (state_9826[(2)]);
var state_9826__$1 = state_9826;
var statearr_9828_9851 = state_9826__$1;
(statearr_9828_9851[(2)] = inst_9822);

(statearr_9828_9851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9827 === (1))){
var state_9826__$1 = state_9826;
var statearr_9829_9852 = state_9826__$1;
(statearr_9829_9852[(2)] = null);

(statearr_9829_9852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9827 === (4))){
var inst_9805 = (state_9826[(7)]);
var inst_9805__$1 = (state_9826[(2)]);
var inst_9806 = (inst_9805__$1 == null);
var state_9826__$1 = (function (){var statearr_9830 = state_9826;
(statearr_9830[(7)] = inst_9805__$1);

return statearr_9830;
})();
if(cljs.core.truth_(inst_9806)){
var statearr_9831_9853 = state_9826__$1;
(statearr_9831_9853[(1)] = (5));

} else {
var statearr_9832_9854 = state_9826__$1;
(statearr_9832_9854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9827 === (13))){
var state_9826__$1 = state_9826;
var statearr_9833_9855 = state_9826__$1;
(statearr_9833_9855[(2)] = null);

(statearr_9833_9855[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9827 === (6))){
var inst_9805 = (state_9826[(7)]);
var state_9826__$1 = state_9826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9826__$1,(11),to,inst_9805);
} else {
if((state_val_9827 === (3))){
var inst_9824 = (state_9826[(2)]);
var state_9826__$1 = state_9826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9826__$1,inst_9824);
} else {
if((state_val_9827 === (12))){
var state_9826__$1 = state_9826;
var statearr_9834_9856 = state_9826__$1;
(statearr_9834_9856[(2)] = null);

(statearr_9834_9856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9827 === (2))){
var state_9826__$1 = state_9826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9826__$1,(4),from);
} else {
if((state_val_9827 === (11))){
var inst_9815 = (state_9826[(2)]);
var state_9826__$1 = state_9826;
if(cljs.core.truth_(inst_9815)){
var statearr_9835_9857 = state_9826__$1;
(statearr_9835_9857[(1)] = (12));

} else {
var statearr_9836_9858 = state_9826__$1;
(statearr_9836_9858[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9827 === (9))){
var state_9826__$1 = state_9826;
var statearr_9837_9859 = state_9826__$1;
(statearr_9837_9859[(2)] = null);

(statearr_9837_9859[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9827 === (5))){
var state_9826__$1 = state_9826;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9838_9860 = state_9826__$1;
(statearr_9838_9860[(1)] = (8));

} else {
var statearr_9839_9861 = state_9826__$1;
(statearr_9839_9861[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9827 === (14))){
var inst_9820 = (state_9826[(2)]);
var state_9826__$1 = state_9826;
var statearr_9840_9862 = state_9826__$1;
(statearr_9840_9862[(2)] = inst_9820);

(statearr_9840_9862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9827 === (10))){
var inst_9812 = (state_9826[(2)]);
var state_9826__$1 = state_9826;
var statearr_9841_9863 = state_9826__$1;
(statearr_9841_9863[(2)] = inst_9812);

(statearr_9841_9863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9827 === (8))){
var inst_9809 = cljs.core.async.close_BANG_.call(null,to);
var state_9826__$1 = state_9826;
var statearr_9842_9864 = state_9826__$1;
(statearr_9842_9864[(2)] = inst_9809);

(statearr_9842_9864[(1)] = (10));


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
});})(c__5809__auto___9850))
;
return ((function (switch__5794__auto__,c__5809__auto___9850){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_9846 = [null,null,null,null,null,null,null,null];
(statearr_9846[(0)] = state_machine__5795__auto__);

(statearr_9846[(1)] = (1));

return statearr_9846;
});
var state_machine__5795__auto____1 = (function (state_9826){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_9826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e9847){if((e9847 instanceof Object)){
var ex__5798__auto__ = e9847;
var statearr_9848_9865 = state_9826;
(statearr_9848_9865[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9866 = state_9826;
state_9826 = G__9866;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_9826){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_9826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___9850))
})();
var state__5811__auto__ = (function (){var statearr_9849 = f__5810__auto__.call(null);
(statearr_9849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___9850);

return statearr_9849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___9850))
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
return (function (p__10050){
var vec__10051 = p__10050;
var v = cljs.core.nth.call(null,vec__10051,(0),null);
var p = cljs.core.nth.call(null,vec__10051,(1),null);
var job = vec__10051;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__5809__auto___10233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___10233,res,vec__10051,v,p,job,jobs,results){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___10233,res,vec__10051,v,p,job,jobs,results){
return (function (state_10056){
var state_val_10057 = (state_10056[(1)]);
if((state_val_10057 === (2))){
var inst_10053 = (state_10056[(2)]);
var inst_10054 = cljs.core.async.close_BANG_.call(null,res);
var state_10056__$1 = (function (){var statearr_10058 = state_10056;
(statearr_10058[(7)] = inst_10053);

return statearr_10058;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10056__$1,inst_10054);
} else {
if((state_val_10057 === (1))){
var state_10056__$1 = state_10056;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10056__$1,(2),res,v);
} else {
return null;
}
}
});})(c__5809__auto___10233,res,vec__10051,v,p,job,jobs,results))
;
return ((function (switch__5794__auto__,c__5809__auto___10233,res,vec__10051,v,p,job,jobs,results){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_10062 = [null,null,null,null,null,null,null,null];
(statearr_10062[(0)] = state_machine__5795__auto__);

(statearr_10062[(1)] = (1));

return statearr_10062;
});
var state_machine__5795__auto____1 = (function (state_10056){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_10056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e10063){if((e10063 instanceof Object)){
var ex__5798__auto__ = e10063;
var statearr_10064_10234 = state_10056;
(statearr_10064_10234[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10235 = state_10056;
state_10056 = G__10235;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_10056){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_10056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___10233,res,vec__10051,v,p,job,jobs,results))
})();
var state__5811__auto__ = (function (){var statearr_10065 = f__5810__auto__.call(null);
(statearr_10065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___10233);

return statearr_10065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___10233,res,vec__10051,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__10066){
var vec__10067 = p__10066;
var v = cljs.core.nth.call(null,vec__10067,(0),null);
var p = cljs.core.nth.call(null,vec__10067,(1),null);
var job = vec__10067;
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
var n__4490__auto___10236 = n;
var __10237 = (0);
while(true){
if((__10237 < n__4490__auto___10236)){
var G__10068_10238 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__10068_10238) {
case "async":
var c__5809__auto___10240 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10237,c__5809__auto___10240,G__10068_10238,n__4490__auto___10236,jobs,results,process,async){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (__10237,c__5809__auto___10240,G__10068_10238,n__4490__auto___10236,jobs,results,process,async){
return (function (state_10081){
var state_val_10082 = (state_10081[(1)]);
if((state_val_10082 === (7))){
var inst_10077 = (state_10081[(2)]);
var state_10081__$1 = state_10081;
var statearr_10083_10241 = state_10081__$1;
(statearr_10083_10241[(2)] = inst_10077);

(statearr_10083_10241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10082 === (6))){
var state_10081__$1 = state_10081;
var statearr_10084_10242 = state_10081__$1;
(statearr_10084_10242[(2)] = null);

(statearr_10084_10242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10082 === (5))){
var state_10081__$1 = state_10081;
var statearr_10085_10243 = state_10081__$1;
(statearr_10085_10243[(2)] = null);

(statearr_10085_10243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10082 === (4))){
var inst_10071 = (state_10081[(2)]);
var inst_10072 = async.call(null,inst_10071);
var state_10081__$1 = state_10081;
if(cljs.core.truth_(inst_10072)){
var statearr_10086_10244 = state_10081__$1;
(statearr_10086_10244[(1)] = (5));

} else {
var statearr_10087_10245 = state_10081__$1;
(statearr_10087_10245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10082 === (3))){
var inst_10079 = (state_10081[(2)]);
var state_10081__$1 = state_10081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10081__$1,inst_10079);
} else {
if((state_val_10082 === (2))){
var state_10081__$1 = state_10081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10081__$1,(4),jobs);
} else {
if((state_val_10082 === (1))){
var state_10081__$1 = state_10081;
var statearr_10088_10246 = state_10081__$1;
(statearr_10088_10246[(2)] = null);

(statearr_10088_10246[(1)] = (2));


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
});})(__10237,c__5809__auto___10240,G__10068_10238,n__4490__auto___10236,jobs,results,process,async))
;
return ((function (__10237,switch__5794__auto__,c__5809__auto___10240,G__10068_10238,n__4490__auto___10236,jobs,results,process,async){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_10092 = [null,null,null,null,null,null,null];
(statearr_10092[(0)] = state_machine__5795__auto__);

(statearr_10092[(1)] = (1));

return statearr_10092;
});
var state_machine__5795__auto____1 = (function (state_10081){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_10081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e10093){if((e10093 instanceof Object)){
var ex__5798__auto__ = e10093;
var statearr_10094_10247 = state_10081;
(statearr_10094_10247[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10248 = state_10081;
state_10081 = G__10248;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_10081){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_10081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(__10237,switch__5794__auto__,c__5809__auto___10240,G__10068_10238,n__4490__auto___10236,jobs,results,process,async))
})();
var state__5811__auto__ = (function (){var statearr_10095 = f__5810__auto__.call(null);
(statearr_10095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___10240);

return statearr_10095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(__10237,c__5809__auto___10240,G__10068_10238,n__4490__auto___10236,jobs,results,process,async))
);


break;
case "compute":
var c__5809__auto___10249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10237,c__5809__auto___10249,G__10068_10238,n__4490__auto___10236,jobs,results,process,async){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (__10237,c__5809__auto___10249,G__10068_10238,n__4490__auto___10236,jobs,results,process,async){
return (function (state_10108){
var state_val_10109 = (state_10108[(1)]);
if((state_val_10109 === (7))){
var inst_10104 = (state_10108[(2)]);
var state_10108__$1 = state_10108;
var statearr_10110_10250 = state_10108__$1;
(statearr_10110_10250[(2)] = inst_10104);

(statearr_10110_10250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10109 === (6))){
var state_10108__$1 = state_10108;
var statearr_10111_10251 = state_10108__$1;
(statearr_10111_10251[(2)] = null);

(statearr_10111_10251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10109 === (5))){
var state_10108__$1 = state_10108;
var statearr_10112_10252 = state_10108__$1;
(statearr_10112_10252[(2)] = null);

(statearr_10112_10252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10109 === (4))){
var inst_10098 = (state_10108[(2)]);
var inst_10099 = process.call(null,inst_10098);
var state_10108__$1 = state_10108;
if(cljs.core.truth_(inst_10099)){
var statearr_10113_10253 = state_10108__$1;
(statearr_10113_10253[(1)] = (5));

} else {
var statearr_10114_10254 = state_10108__$1;
(statearr_10114_10254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10109 === (3))){
var inst_10106 = (state_10108[(2)]);
var state_10108__$1 = state_10108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10108__$1,inst_10106);
} else {
if((state_val_10109 === (2))){
var state_10108__$1 = state_10108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10108__$1,(4),jobs);
} else {
if((state_val_10109 === (1))){
var state_10108__$1 = state_10108;
var statearr_10115_10255 = state_10108__$1;
(statearr_10115_10255[(2)] = null);

(statearr_10115_10255[(1)] = (2));


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
});})(__10237,c__5809__auto___10249,G__10068_10238,n__4490__auto___10236,jobs,results,process,async))
;
return ((function (__10237,switch__5794__auto__,c__5809__auto___10249,G__10068_10238,n__4490__auto___10236,jobs,results,process,async){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_10119 = [null,null,null,null,null,null,null];
(statearr_10119[(0)] = state_machine__5795__auto__);

(statearr_10119[(1)] = (1));

return statearr_10119;
});
var state_machine__5795__auto____1 = (function (state_10108){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_10108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e10120){if((e10120 instanceof Object)){
var ex__5798__auto__ = e10120;
var statearr_10121_10256 = state_10108;
(statearr_10121_10256[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10257 = state_10108;
state_10108 = G__10257;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_10108){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_10108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(__10237,switch__5794__auto__,c__5809__auto___10249,G__10068_10238,n__4490__auto___10236,jobs,results,process,async))
})();
var state__5811__auto__ = (function (){var statearr_10122 = f__5810__auto__.call(null);
(statearr_10122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___10249);

return statearr_10122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(__10237,c__5809__auto___10249,G__10068_10238,n__4490__auto___10236,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__10258 = (__10237 + (1));
__10237 = G__10258;
continue;
} else {
}
break;
}

var c__5809__auto___10259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___10259,jobs,results,process,async){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___10259,jobs,results,process,async){
return (function (state_10144){
var state_val_10145 = (state_10144[(1)]);
if((state_val_10145 === (9))){
var inst_10137 = (state_10144[(2)]);
var state_10144__$1 = (function (){var statearr_10146 = state_10144;
(statearr_10146[(7)] = inst_10137);

return statearr_10146;
})();
var statearr_10147_10260 = state_10144__$1;
(statearr_10147_10260[(2)] = null);

(statearr_10147_10260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10145 === (8))){
var inst_10130 = (state_10144[(8)]);
var inst_10135 = (state_10144[(2)]);
var state_10144__$1 = (function (){var statearr_10148 = state_10144;
(statearr_10148[(9)] = inst_10135);

return statearr_10148;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10144__$1,(9),results,inst_10130);
} else {
if((state_val_10145 === (7))){
var inst_10140 = (state_10144[(2)]);
var state_10144__$1 = state_10144;
var statearr_10149_10261 = state_10144__$1;
(statearr_10149_10261[(2)] = inst_10140);

(statearr_10149_10261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10145 === (6))){
var inst_10125 = (state_10144[(10)]);
var inst_10130 = (state_10144[(8)]);
var inst_10130__$1 = cljs.core.async.chan.call(null,(1));
var inst_10131 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10132 = [inst_10125,inst_10130__$1];
var inst_10133 = (new cljs.core.PersistentVector(null,2,(5),inst_10131,inst_10132,null));
var state_10144__$1 = (function (){var statearr_10150 = state_10144;
(statearr_10150[(8)] = inst_10130__$1);

return statearr_10150;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10144__$1,(8),jobs,inst_10133);
} else {
if((state_val_10145 === (5))){
var inst_10128 = cljs.core.async.close_BANG_.call(null,jobs);
var state_10144__$1 = state_10144;
var statearr_10151_10262 = state_10144__$1;
(statearr_10151_10262[(2)] = inst_10128);

(statearr_10151_10262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10145 === (4))){
var inst_10125 = (state_10144[(10)]);
var inst_10125__$1 = (state_10144[(2)]);
var inst_10126 = (inst_10125__$1 == null);
var state_10144__$1 = (function (){var statearr_10152 = state_10144;
(statearr_10152[(10)] = inst_10125__$1);

return statearr_10152;
})();
if(cljs.core.truth_(inst_10126)){
var statearr_10153_10263 = state_10144__$1;
(statearr_10153_10263[(1)] = (5));

} else {
var statearr_10154_10264 = state_10144__$1;
(statearr_10154_10264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10145 === (3))){
var inst_10142 = (state_10144[(2)]);
var state_10144__$1 = state_10144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10144__$1,inst_10142);
} else {
if((state_val_10145 === (2))){
var state_10144__$1 = state_10144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10144__$1,(4),from);
} else {
if((state_val_10145 === (1))){
var state_10144__$1 = state_10144;
var statearr_10155_10265 = state_10144__$1;
(statearr_10155_10265[(2)] = null);

(statearr_10155_10265[(1)] = (2));


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
});})(c__5809__auto___10259,jobs,results,process,async))
;
return ((function (switch__5794__auto__,c__5809__auto___10259,jobs,results,process,async){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_10159 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10159[(0)] = state_machine__5795__auto__);

(statearr_10159[(1)] = (1));

return statearr_10159;
});
var state_machine__5795__auto____1 = (function (state_10144){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_10144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e10160){if((e10160 instanceof Object)){
var ex__5798__auto__ = e10160;
var statearr_10161_10266 = state_10144;
(statearr_10161_10266[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10267 = state_10144;
state_10144 = G__10267;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_10144){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_10144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___10259,jobs,results,process,async))
})();
var state__5811__auto__ = (function (){var statearr_10162 = f__5810__auto__.call(null);
(statearr_10162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___10259);

return statearr_10162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___10259,jobs,results,process,async))
);


var c__5809__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto__,jobs,results,process,async){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto__,jobs,results,process,async){
return (function (state_10200){
var state_val_10201 = (state_10200[(1)]);
if((state_val_10201 === (7))){
var inst_10196 = (state_10200[(2)]);
var state_10200__$1 = state_10200;
var statearr_10202_10268 = state_10200__$1;
(statearr_10202_10268[(2)] = inst_10196);

(statearr_10202_10268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10201 === (20))){
var state_10200__$1 = state_10200;
var statearr_10203_10269 = state_10200__$1;
(statearr_10203_10269[(2)] = null);

(statearr_10203_10269[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10201 === (1))){
var state_10200__$1 = state_10200;
var statearr_10204_10270 = state_10200__$1;
(statearr_10204_10270[(2)] = null);

(statearr_10204_10270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10201 === (4))){
var inst_10165 = (state_10200[(7)]);
var inst_10165__$1 = (state_10200[(2)]);
var inst_10166 = (inst_10165__$1 == null);
var state_10200__$1 = (function (){var statearr_10205 = state_10200;
(statearr_10205[(7)] = inst_10165__$1);

return statearr_10205;
})();
if(cljs.core.truth_(inst_10166)){
var statearr_10206_10271 = state_10200__$1;
(statearr_10206_10271[(1)] = (5));

} else {
var statearr_10207_10272 = state_10200__$1;
(statearr_10207_10272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10201 === (15))){
var inst_10178 = (state_10200[(8)]);
var state_10200__$1 = state_10200;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10200__$1,(18),to,inst_10178);
} else {
if((state_val_10201 === (21))){
var inst_10191 = (state_10200[(2)]);
var state_10200__$1 = state_10200;
var statearr_10208_10273 = state_10200__$1;
(statearr_10208_10273[(2)] = inst_10191);

(statearr_10208_10273[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10201 === (13))){
var inst_10193 = (state_10200[(2)]);
var state_10200__$1 = (function (){var statearr_10209 = state_10200;
(statearr_10209[(9)] = inst_10193);

return statearr_10209;
})();
var statearr_10210_10274 = state_10200__$1;
(statearr_10210_10274[(2)] = null);

(statearr_10210_10274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10201 === (6))){
var inst_10165 = (state_10200[(7)]);
var state_10200__$1 = state_10200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10200__$1,(11),inst_10165);
} else {
if((state_val_10201 === (17))){
var inst_10186 = (state_10200[(2)]);
var state_10200__$1 = state_10200;
if(cljs.core.truth_(inst_10186)){
var statearr_10211_10275 = state_10200__$1;
(statearr_10211_10275[(1)] = (19));

} else {
var statearr_10212_10276 = state_10200__$1;
(statearr_10212_10276[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10201 === (3))){
var inst_10198 = (state_10200[(2)]);
var state_10200__$1 = state_10200;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10200__$1,inst_10198);
} else {
if((state_val_10201 === (12))){
var inst_10175 = (state_10200[(10)]);
var state_10200__$1 = state_10200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10200__$1,(14),inst_10175);
} else {
if((state_val_10201 === (2))){
var state_10200__$1 = state_10200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10200__$1,(4),results);
} else {
if((state_val_10201 === (19))){
var state_10200__$1 = state_10200;
var statearr_10213_10277 = state_10200__$1;
(statearr_10213_10277[(2)] = null);

(statearr_10213_10277[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10201 === (11))){
var inst_10175 = (state_10200[(2)]);
var state_10200__$1 = (function (){var statearr_10214 = state_10200;
(statearr_10214[(10)] = inst_10175);

return statearr_10214;
})();
var statearr_10215_10278 = state_10200__$1;
(statearr_10215_10278[(2)] = null);

(statearr_10215_10278[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10201 === (9))){
var state_10200__$1 = state_10200;
var statearr_10216_10279 = state_10200__$1;
(statearr_10216_10279[(2)] = null);

(statearr_10216_10279[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10201 === (5))){
var state_10200__$1 = state_10200;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10217_10280 = state_10200__$1;
(statearr_10217_10280[(1)] = (8));

} else {
var statearr_10218_10281 = state_10200__$1;
(statearr_10218_10281[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10201 === (14))){
var inst_10180 = (state_10200[(11)]);
var inst_10178 = (state_10200[(8)]);
var inst_10178__$1 = (state_10200[(2)]);
var inst_10179 = (inst_10178__$1 == null);
var inst_10180__$1 = cljs.core.not.call(null,inst_10179);
var state_10200__$1 = (function (){var statearr_10219 = state_10200;
(statearr_10219[(11)] = inst_10180__$1);

(statearr_10219[(8)] = inst_10178__$1);

return statearr_10219;
})();
if(inst_10180__$1){
var statearr_10220_10282 = state_10200__$1;
(statearr_10220_10282[(1)] = (15));

} else {
var statearr_10221_10283 = state_10200__$1;
(statearr_10221_10283[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10201 === (16))){
var inst_10180 = (state_10200[(11)]);
var state_10200__$1 = state_10200;
var statearr_10222_10284 = state_10200__$1;
(statearr_10222_10284[(2)] = inst_10180);

(statearr_10222_10284[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10201 === (10))){
var inst_10172 = (state_10200[(2)]);
var state_10200__$1 = state_10200;
var statearr_10223_10285 = state_10200__$1;
(statearr_10223_10285[(2)] = inst_10172);

(statearr_10223_10285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10201 === (18))){
var inst_10183 = (state_10200[(2)]);
var state_10200__$1 = state_10200;
var statearr_10224_10286 = state_10200__$1;
(statearr_10224_10286[(2)] = inst_10183);

(statearr_10224_10286[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10201 === (8))){
var inst_10169 = cljs.core.async.close_BANG_.call(null,to);
var state_10200__$1 = state_10200;
var statearr_10225_10287 = state_10200__$1;
(statearr_10225_10287[(2)] = inst_10169);

(statearr_10225_10287[(1)] = (10));


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
var statearr_10229 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10229[(0)] = state_machine__5795__auto__);

(statearr_10229[(1)] = (1));

return statearr_10229;
});
var state_machine__5795__auto____1 = (function (state_10200){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_10200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e10230){if((e10230 instanceof Object)){
var ex__5798__auto__ = e10230;
var statearr_10231_10288 = state_10200;
(statearr_10231_10288[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10289 = state_10200;
state_10200 = G__10289;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_10200){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_10200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__,jobs,results,process,async))
})();
var state__5811__auto__ = (function (){var statearr_10232 = f__5810__auto__.call(null);
(statearr_10232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_10232;
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
var c__5809__auto___10390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___10390,tc,fc){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___10390,tc,fc){
return (function (state_10365){
var state_val_10366 = (state_10365[(1)]);
if((state_val_10366 === (7))){
var inst_10361 = (state_10365[(2)]);
var state_10365__$1 = state_10365;
var statearr_10367_10391 = state_10365__$1;
(statearr_10367_10391[(2)] = inst_10361);

(statearr_10367_10391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10366 === (1))){
var state_10365__$1 = state_10365;
var statearr_10368_10392 = state_10365__$1;
(statearr_10368_10392[(2)] = null);

(statearr_10368_10392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10366 === (4))){
var inst_10342 = (state_10365[(7)]);
var inst_10342__$1 = (state_10365[(2)]);
var inst_10343 = (inst_10342__$1 == null);
var state_10365__$1 = (function (){var statearr_10369 = state_10365;
(statearr_10369[(7)] = inst_10342__$1);

return statearr_10369;
})();
if(cljs.core.truth_(inst_10343)){
var statearr_10370_10393 = state_10365__$1;
(statearr_10370_10393[(1)] = (5));

} else {
var statearr_10371_10394 = state_10365__$1;
(statearr_10371_10394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10366 === (13))){
var state_10365__$1 = state_10365;
var statearr_10372_10395 = state_10365__$1;
(statearr_10372_10395[(2)] = null);

(statearr_10372_10395[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10366 === (6))){
var inst_10342 = (state_10365[(7)]);
var inst_10348 = p.call(null,inst_10342);
var state_10365__$1 = state_10365;
if(cljs.core.truth_(inst_10348)){
var statearr_10373_10396 = state_10365__$1;
(statearr_10373_10396[(1)] = (9));

} else {
var statearr_10374_10397 = state_10365__$1;
(statearr_10374_10397[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10366 === (3))){
var inst_10363 = (state_10365[(2)]);
var state_10365__$1 = state_10365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10365__$1,inst_10363);
} else {
if((state_val_10366 === (12))){
var state_10365__$1 = state_10365;
var statearr_10375_10398 = state_10365__$1;
(statearr_10375_10398[(2)] = null);

(statearr_10375_10398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10366 === (2))){
var state_10365__$1 = state_10365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10365__$1,(4),ch);
} else {
if((state_val_10366 === (11))){
var inst_10342 = (state_10365[(7)]);
var inst_10352 = (state_10365[(2)]);
var state_10365__$1 = state_10365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10365__$1,(8),inst_10352,inst_10342);
} else {
if((state_val_10366 === (9))){
var state_10365__$1 = state_10365;
var statearr_10376_10399 = state_10365__$1;
(statearr_10376_10399[(2)] = tc);

(statearr_10376_10399[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10366 === (5))){
var inst_10345 = cljs.core.async.close_BANG_.call(null,tc);
var inst_10346 = cljs.core.async.close_BANG_.call(null,fc);
var state_10365__$1 = (function (){var statearr_10377 = state_10365;
(statearr_10377[(8)] = inst_10345);

return statearr_10377;
})();
var statearr_10378_10400 = state_10365__$1;
(statearr_10378_10400[(2)] = inst_10346);

(statearr_10378_10400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10366 === (14))){
var inst_10359 = (state_10365[(2)]);
var state_10365__$1 = state_10365;
var statearr_10379_10401 = state_10365__$1;
(statearr_10379_10401[(2)] = inst_10359);

(statearr_10379_10401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10366 === (10))){
var state_10365__$1 = state_10365;
var statearr_10380_10402 = state_10365__$1;
(statearr_10380_10402[(2)] = fc);

(statearr_10380_10402[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10366 === (8))){
var inst_10354 = (state_10365[(2)]);
var state_10365__$1 = state_10365;
if(cljs.core.truth_(inst_10354)){
var statearr_10381_10403 = state_10365__$1;
(statearr_10381_10403[(1)] = (12));

} else {
var statearr_10382_10404 = state_10365__$1;
(statearr_10382_10404[(1)] = (13));

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
});})(c__5809__auto___10390,tc,fc))
;
return ((function (switch__5794__auto__,c__5809__auto___10390,tc,fc){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_10386 = [null,null,null,null,null,null,null,null,null];
(statearr_10386[(0)] = state_machine__5795__auto__);

(statearr_10386[(1)] = (1));

return statearr_10386;
});
var state_machine__5795__auto____1 = (function (state_10365){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_10365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e10387){if((e10387 instanceof Object)){
var ex__5798__auto__ = e10387;
var statearr_10388_10405 = state_10365;
(statearr_10388_10405[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10406 = state_10365;
state_10365 = G__10406;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_10365){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_10365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___10390,tc,fc))
})();
var state__5811__auto__ = (function (){var statearr_10389 = f__5810__auto__.call(null);
(statearr_10389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___10390);

return statearr_10389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___10390,tc,fc))
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
return (function (state_10453){
var state_val_10454 = (state_10453[(1)]);
if((state_val_10454 === (7))){
var inst_10449 = (state_10453[(2)]);
var state_10453__$1 = state_10453;
var statearr_10455_10471 = state_10453__$1;
(statearr_10455_10471[(2)] = inst_10449);

(statearr_10455_10471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10454 === (6))){
var inst_10439 = (state_10453[(7)]);
var inst_10442 = (state_10453[(8)]);
var inst_10446 = f.call(null,inst_10439,inst_10442);
var inst_10439__$1 = inst_10446;
var state_10453__$1 = (function (){var statearr_10456 = state_10453;
(statearr_10456[(7)] = inst_10439__$1);

return statearr_10456;
})();
var statearr_10457_10472 = state_10453__$1;
(statearr_10457_10472[(2)] = null);

(statearr_10457_10472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10454 === (5))){
var inst_10439 = (state_10453[(7)]);
var state_10453__$1 = state_10453;
var statearr_10458_10473 = state_10453__$1;
(statearr_10458_10473[(2)] = inst_10439);

(statearr_10458_10473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10454 === (4))){
var inst_10442 = (state_10453[(8)]);
var inst_10442__$1 = (state_10453[(2)]);
var inst_10443 = (inst_10442__$1 == null);
var state_10453__$1 = (function (){var statearr_10459 = state_10453;
(statearr_10459[(8)] = inst_10442__$1);

return statearr_10459;
})();
if(cljs.core.truth_(inst_10443)){
var statearr_10460_10474 = state_10453__$1;
(statearr_10460_10474[(1)] = (5));

} else {
var statearr_10461_10475 = state_10453__$1;
(statearr_10461_10475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10454 === (3))){
var inst_10451 = (state_10453[(2)]);
var state_10453__$1 = state_10453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10453__$1,inst_10451);
} else {
if((state_val_10454 === (2))){
var state_10453__$1 = state_10453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10453__$1,(4),ch);
} else {
if((state_val_10454 === (1))){
var inst_10439 = init;
var state_10453__$1 = (function (){var statearr_10462 = state_10453;
(statearr_10462[(7)] = inst_10439);

return statearr_10462;
})();
var statearr_10463_10476 = state_10453__$1;
(statearr_10463_10476[(2)] = null);

(statearr_10463_10476[(1)] = (2));


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
var statearr_10467 = [null,null,null,null,null,null,null,null,null];
(statearr_10467[(0)] = state_machine__5795__auto__);

(statearr_10467[(1)] = (1));

return statearr_10467;
});
var state_machine__5795__auto____1 = (function (state_10453){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_10453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e10468){if((e10468 instanceof Object)){
var ex__5798__auto__ = e10468;
var statearr_10469_10477 = state_10453;
(statearr_10469_10477[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10478 = state_10453;
state_10453 = G__10478;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_10453){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_10453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_10470 = f__5810__auto__.call(null);
(statearr_10470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_10470;
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
return (function (state_10552){
var state_val_10553 = (state_10552[(1)]);
if((state_val_10553 === (7))){
var inst_10534 = (state_10552[(2)]);
var state_10552__$1 = state_10552;
var statearr_10554_10577 = state_10552__$1;
(statearr_10554_10577[(2)] = inst_10534);

(statearr_10554_10577[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (1))){
var inst_10528 = cljs.core.seq.call(null,coll);
var inst_10529 = inst_10528;
var state_10552__$1 = (function (){var statearr_10555 = state_10552;
(statearr_10555[(7)] = inst_10529);

return statearr_10555;
})();
var statearr_10556_10578 = state_10552__$1;
(statearr_10556_10578[(2)] = null);

(statearr_10556_10578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (4))){
var inst_10529 = (state_10552[(7)]);
var inst_10532 = cljs.core.first.call(null,inst_10529);
var state_10552__$1 = state_10552;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10552__$1,(7),ch,inst_10532);
} else {
if((state_val_10553 === (13))){
var inst_10546 = (state_10552[(2)]);
var state_10552__$1 = state_10552;
var statearr_10557_10579 = state_10552__$1;
(statearr_10557_10579[(2)] = inst_10546);

(statearr_10557_10579[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (6))){
var inst_10537 = (state_10552[(2)]);
var state_10552__$1 = state_10552;
if(cljs.core.truth_(inst_10537)){
var statearr_10558_10580 = state_10552__$1;
(statearr_10558_10580[(1)] = (8));

} else {
var statearr_10559_10581 = state_10552__$1;
(statearr_10559_10581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (3))){
var inst_10550 = (state_10552[(2)]);
var state_10552__$1 = state_10552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10552__$1,inst_10550);
} else {
if((state_val_10553 === (12))){
var state_10552__$1 = state_10552;
var statearr_10560_10582 = state_10552__$1;
(statearr_10560_10582[(2)] = null);

(statearr_10560_10582[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (2))){
var inst_10529 = (state_10552[(7)]);
var state_10552__$1 = state_10552;
if(cljs.core.truth_(inst_10529)){
var statearr_10561_10583 = state_10552__$1;
(statearr_10561_10583[(1)] = (4));

} else {
var statearr_10562_10584 = state_10552__$1;
(statearr_10562_10584[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (11))){
var inst_10543 = cljs.core.async.close_BANG_.call(null,ch);
var state_10552__$1 = state_10552;
var statearr_10563_10585 = state_10552__$1;
(statearr_10563_10585[(2)] = inst_10543);

(statearr_10563_10585[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (9))){
var state_10552__$1 = state_10552;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10564_10586 = state_10552__$1;
(statearr_10564_10586[(1)] = (11));

} else {
var statearr_10565_10587 = state_10552__$1;
(statearr_10565_10587[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (5))){
var inst_10529 = (state_10552[(7)]);
var state_10552__$1 = state_10552;
var statearr_10566_10588 = state_10552__$1;
(statearr_10566_10588[(2)] = inst_10529);

(statearr_10566_10588[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (10))){
var inst_10548 = (state_10552[(2)]);
var state_10552__$1 = state_10552;
var statearr_10567_10589 = state_10552__$1;
(statearr_10567_10589[(2)] = inst_10548);

(statearr_10567_10589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10553 === (8))){
var inst_10529 = (state_10552[(7)]);
var inst_10539 = cljs.core.next.call(null,inst_10529);
var inst_10529__$1 = inst_10539;
var state_10552__$1 = (function (){var statearr_10568 = state_10552;
(statearr_10568[(7)] = inst_10529__$1);

return statearr_10568;
})();
var statearr_10569_10590 = state_10552__$1;
(statearr_10569_10590[(2)] = null);

(statearr_10569_10590[(1)] = (2));


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
var statearr_10573 = [null,null,null,null,null,null,null,null];
(statearr_10573[(0)] = state_machine__5795__auto__);

(statearr_10573[(1)] = (1));

return statearr_10573;
});
var state_machine__5795__auto____1 = (function (state_10552){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_10552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e10574){if((e10574 instanceof Object)){
var ex__5798__auto__ = e10574;
var statearr_10575_10591 = state_10552;
(statearr_10575_10591[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10592 = state_10552;
state_10552 = G__10592;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_10552){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_10552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_10576 = f__5810__auto__.call(null);
(statearr_10576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_10576;
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

cljs.core.async.Mux = (function (){var obj10594 = {};
return obj10594;
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


cljs.core.async.Mult = (function (){var obj10596 = {};
return obj10596;
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
if(typeof cljs.core.async.t10818 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10818 = (function (cs,ch,mult,meta10819){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10819 = meta10819;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10818.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t10818.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t10818.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t10818.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t10818.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t10818.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t10818.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10820){
var self__ = this;
var _10820__$1 = this;
return self__.meta10819;
});})(cs))
;

cljs.core.async.t10818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10820,meta10819__$1){
var self__ = this;
var _10820__$1 = this;
return (new cljs.core.async.t10818(self__.cs,self__.ch,self__.mult,meta10819__$1));
});})(cs))
;

cljs.core.async.t10818.cljs$lang$type = true;

cljs.core.async.t10818.cljs$lang$ctorStr = "cljs.core.async/t10818";

cljs.core.async.t10818.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t10818");
});})(cs))
;

cljs.core.async.__GT_t10818 = ((function (cs){
return (function __GT_t10818(cs__$1,ch__$1,mult__$1,meta10819){
return (new cljs.core.async.t10818(cs__$1,ch__$1,mult__$1,meta10819));
});})(cs))
;

}

return (new cljs.core.async.t10818(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
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
var c__5809__auto___11039 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___11039,cs,m,dchan,dctr,done){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___11039,cs,m,dchan,dctr,done){
return (function (state_10951){
var state_val_10952 = (state_10951[(1)]);
if((state_val_10952 === (7))){
var inst_10947 = (state_10951[(2)]);
var state_10951__$1 = state_10951;
var statearr_10953_11040 = state_10951__$1;
(statearr_10953_11040[(2)] = inst_10947);

(statearr_10953_11040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (20))){
var inst_10852 = (state_10951[(7)]);
var inst_10862 = cljs.core.first.call(null,inst_10852);
var inst_10863 = cljs.core.nth.call(null,inst_10862,(0),null);
var inst_10864 = cljs.core.nth.call(null,inst_10862,(1),null);
var state_10951__$1 = (function (){var statearr_10954 = state_10951;
(statearr_10954[(8)] = inst_10863);

return statearr_10954;
})();
if(cljs.core.truth_(inst_10864)){
var statearr_10955_11041 = state_10951__$1;
(statearr_10955_11041[(1)] = (22));

} else {
var statearr_10956_11042 = state_10951__$1;
(statearr_10956_11042[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (27))){
var inst_10899 = (state_10951[(9)]);
var inst_10892 = (state_10951[(10)]);
var inst_10823 = (state_10951[(11)]);
var inst_10894 = (state_10951[(12)]);
var inst_10899__$1 = cljs.core._nth.call(null,inst_10892,inst_10894);
var inst_10900 = cljs.core.async.put_BANG_.call(null,inst_10899__$1,inst_10823,done);
var state_10951__$1 = (function (){var statearr_10957 = state_10951;
(statearr_10957[(9)] = inst_10899__$1);

return statearr_10957;
})();
if(cljs.core.truth_(inst_10900)){
var statearr_10958_11043 = state_10951__$1;
(statearr_10958_11043[(1)] = (30));

} else {
var statearr_10959_11044 = state_10951__$1;
(statearr_10959_11044[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (1))){
var state_10951__$1 = state_10951;
var statearr_10960_11045 = state_10951__$1;
(statearr_10960_11045[(2)] = null);

(statearr_10960_11045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (24))){
var inst_10852 = (state_10951[(7)]);
var inst_10869 = (state_10951[(2)]);
var inst_10870 = cljs.core.next.call(null,inst_10852);
var inst_10832 = inst_10870;
var inst_10833 = null;
var inst_10834 = (0);
var inst_10835 = (0);
var state_10951__$1 = (function (){var statearr_10961 = state_10951;
(statearr_10961[(13)] = inst_10835);

(statearr_10961[(14)] = inst_10834);

(statearr_10961[(15)] = inst_10832);

(statearr_10961[(16)] = inst_10833);

(statearr_10961[(17)] = inst_10869);

return statearr_10961;
})();
var statearr_10962_11046 = state_10951__$1;
(statearr_10962_11046[(2)] = null);

(statearr_10962_11046[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (39))){
var state_10951__$1 = state_10951;
var statearr_10966_11047 = state_10951__$1;
(statearr_10966_11047[(2)] = null);

(statearr_10966_11047[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (4))){
var inst_10823 = (state_10951[(11)]);
var inst_10823__$1 = (state_10951[(2)]);
var inst_10824 = (inst_10823__$1 == null);
var state_10951__$1 = (function (){var statearr_10967 = state_10951;
(statearr_10967[(11)] = inst_10823__$1);

return statearr_10967;
})();
if(cljs.core.truth_(inst_10824)){
var statearr_10968_11048 = state_10951__$1;
(statearr_10968_11048[(1)] = (5));

} else {
var statearr_10969_11049 = state_10951__$1;
(statearr_10969_11049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (15))){
var inst_10835 = (state_10951[(13)]);
var inst_10834 = (state_10951[(14)]);
var inst_10832 = (state_10951[(15)]);
var inst_10833 = (state_10951[(16)]);
var inst_10848 = (state_10951[(2)]);
var inst_10849 = (inst_10835 + (1));
var tmp10963 = inst_10834;
var tmp10964 = inst_10832;
var tmp10965 = inst_10833;
var inst_10832__$1 = tmp10964;
var inst_10833__$1 = tmp10965;
var inst_10834__$1 = tmp10963;
var inst_10835__$1 = inst_10849;
var state_10951__$1 = (function (){var statearr_10970 = state_10951;
(statearr_10970[(13)] = inst_10835__$1);

(statearr_10970[(18)] = inst_10848);

(statearr_10970[(14)] = inst_10834__$1);

(statearr_10970[(15)] = inst_10832__$1);

(statearr_10970[(16)] = inst_10833__$1);

return statearr_10970;
})();
var statearr_10971_11050 = state_10951__$1;
(statearr_10971_11050[(2)] = null);

(statearr_10971_11050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (21))){
var inst_10873 = (state_10951[(2)]);
var state_10951__$1 = state_10951;
var statearr_10975_11051 = state_10951__$1;
(statearr_10975_11051[(2)] = inst_10873);

(statearr_10975_11051[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (31))){
var inst_10899 = (state_10951[(9)]);
var inst_10903 = done.call(null,null);
var inst_10904 = cljs.core.async.untap_STAR_.call(null,m,inst_10899);
var state_10951__$1 = (function (){var statearr_10976 = state_10951;
(statearr_10976[(19)] = inst_10903);

return statearr_10976;
})();
var statearr_10977_11052 = state_10951__$1;
(statearr_10977_11052[(2)] = inst_10904);

(statearr_10977_11052[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (32))){
var inst_10891 = (state_10951[(20)]);
var inst_10892 = (state_10951[(10)]);
var inst_10894 = (state_10951[(12)]);
var inst_10893 = (state_10951[(21)]);
var inst_10906 = (state_10951[(2)]);
var inst_10907 = (inst_10894 + (1));
var tmp10972 = inst_10891;
var tmp10973 = inst_10892;
var tmp10974 = inst_10893;
var inst_10891__$1 = tmp10972;
var inst_10892__$1 = tmp10973;
var inst_10893__$1 = tmp10974;
var inst_10894__$1 = inst_10907;
var state_10951__$1 = (function (){var statearr_10978 = state_10951;
(statearr_10978[(20)] = inst_10891__$1);

(statearr_10978[(22)] = inst_10906);

(statearr_10978[(10)] = inst_10892__$1);

(statearr_10978[(12)] = inst_10894__$1);

(statearr_10978[(21)] = inst_10893__$1);

return statearr_10978;
})();
var statearr_10979_11053 = state_10951__$1;
(statearr_10979_11053[(2)] = null);

(statearr_10979_11053[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (40))){
var inst_10919 = (state_10951[(23)]);
var inst_10923 = done.call(null,null);
var inst_10924 = cljs.core.async.untap_STAR_.call(null,m,inst_10919);
var state_10951__$1 = (function (){var statearr_10980 = state_10951;
(statearr_10980[(24)] = inst_10923);

return statearr_10980;
})();
var statearr_10981_11054 = state_10951__$1;
(statearr_10981_11054[(2)] = inst_10924);

(statearr_10981_11054[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (33))){
var inst_10910 = (state_10951[(25)]);
var inst_10912 = cljs.core.chunked_seq_QMARK_.call(null,inst_10910);
var state_10951__$1 = state_10951;
if(inst_10912){
var statearr_10982_11055 = state_10951__$1;
(statearr_10982_11055[(1)] = (36));

} else {
var statearr_10983_11056 = state_10951__$1;
(statearr_10983_11056[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (13))){
var inst_10842 = (state_10951[(26)]);
var inst_10845 = cljs.core.async.close_BANG_.call(null,inst_10842);
var state_10951__$1 = state_10951;
var statearr_10984_11057 = state_10951__$1;
(statearr_10984_11057[(2)] = inst_10845);

(statearr_10984_11057[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (22))){
var inst_10863 = (state_10951[(8)]);
var inst_10866 = cljs.core.async.close_BANG_.call(null,inst_10863);
var state_10951__$1 = state_10951;
var statearr_10985_11058 = state_10951__$1;
(statearr_10985_11058[(2)] = inst_10866);

(statearr_10985_11058[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (36))){
var inst_10910 = (state_10951[(25)]);
var inst_10914 = cljs.core.chunk_first.call(null,inst_10910);
var inst_10915 = cljs.core.chunk_rest.call(null,inst_10910);
var inst_10916 = cljs.core.count.call(null,inst_10914);
var inst_10891 = inst_10915;
var inst_10892 = inst_10914;
var inst_10893 = inst_10916;
var inst_10894 = (0);
var state_10951__$1 = (function (){var statearr_10986 = state_10951;
(statearr_10986[(20)] = inst_10891);

(statearr_10986[(10)] = inst_10892);

(statearr_10986[(12)] = inst_10894);

(statearr_10986[(21)] = inst_10893);

return statearr_10986;
})();
var statearr_10987_11059 = state_10951__$1;
(statearr_10987_11059[(2)] = null);

(statearr_10987_11059[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (41))){
var inst_10910 = (state_10951[(25)]);
var inst_10926 = (state_10951[(2)]);
var inst_10927 = cljs.core.next.call(null,inst_10910);
var inst_10891 = inst_10927;
var inst_10892 = null;
var inst_10893 = (0);
var inst_10894 = (0);
var state_10951__$1 = (function (){var statearr_10988 = state_10951;
(statearr_10988[(20)] = inst_10891);

(statearr_10988[(27)] = inst_10926);

(statearr_10988[(10)] = inst_10892);

(statearr_10988[(12)] = inst_10894);

(statearr_10988[(21)] = inst_10893);

return statearr_10988;
})();
var statearr_10989_11060 = state_10951__$1;
(statearr_10989_11060[(2)] = null);

(statearr_10989_11060[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (43))){
var state_10951__$1 = state_10951;
var statearr_10990_11061 = state_10951__$1;
(statearr_10990_11061[(2)] = null);

(statearr_10990_11061[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (29))){
var inst_10935 = (state_10951[(2)]);
var state_10951__$1 = state_10951;
var statearr_10991_11062 = state_10951__$1;
(statearr_10991_11062[(2)] = inst_10935);

(statearr_10991_11062[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (44))){
var inst_10944 = (state_10951[(2)]);
var state_10951__$1 = (function (){var statearr_10992 = state_10951;
(statearr_10992[(28)] = inst_10944);

return statearr_10992;
})();
var statearr_10993_11063 = state_10951__$1;
(statearr_10993_11063[(2)] = null);

(statearr_10993_11063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (6))){
var inst_10883 = (state_10951[(29)]);
var inst_10882 = cljs.core.deref.call(null,cs);
var inst_10883__$1 = cljs.core.keys.call(null,inst_10882);
var inst_10884 = cljs.core.count.call(null,inst_10883__$1);
var inst_10885 = cljs.core.reset_BANG_.call(null,dctr,inst_10884);
var inst_10890 = cljs.core.seq.call(null,inst_10883__$1);
var inst_10891 = inst_10890;
var inst_10892 = null;
var inst_10893 = (0);
var inst_10894 = (0);
var state_10951__$1 = (function (){var statearr_10994 = state_10951;
(statearr_10994[(20)] = inst_10891);

(statearr_10994[(30)] = inst_10885);

(statearr_10994[(29)] = inst_10883__$1);

(statearr_10994[(10)] = inst_10892);

(statearr_10994[(12)] = inst_10894);

(statearr_10994[(21)] = inst_10893);

return statearr_10994;
})();
var statearr_10995_11064 = state_10951__$1;
(statearr_10995_11064[(2)] = null);

(statearr_10995_11064[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (28))){
var inst_10891 = (state_10951[(20)]);
var inst_10910 = (state_10951[(25)]);
var inst_10910__$1 = cljs.core.seq.call(null,inst_10891);
var state_10951__$1 = (function (){var statearr_10996 = state_10951;
(statearr_10996[(25)] = inst_10910__$1);

return statearr_10996;
})();
if(inst_10910__$1){
var statearr_10997_11065 = state_10951__$1;
(statearr_10997_11065[(1)] = (33));

} else {
var statearr_10998_11066 = state_10951__$1;
(statearr_10998_11066[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (25))){
var inst_10894 = (state_10951[(12)]);
var inst_10893 = (state_10951[(21)]);
var inst_10896 = (inst_10894 < inst_10893);
var inst_10897 = inst_10896;
var state_10951__$1 = state_10951;
if(cljs.core.truth_(inst_10897)){
var statearr_10999_11067 = state_10951__$1;
(statearr_10999_11067[(1)] = (27));

} else {
var statearr_11000_11068 = state_10951__$1;
(statearr_11000_11068[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (34))){
var state_10951__$1 = state_10951;
var statearr_11001_11069 = state_10951__$1;
(statearr_11001_11069[(2)] = null);

(statearr_11001_11069[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (17))){
var state_10951__$1 = state_10951;
var statearr_11002_11070 = state_10951__$1;
(statearr_11002_11070[(2)] = null);

(statearr_11002_11070[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (3))){
var inst_10949 = (state_10951[(2)]);
var state_10951__$1 = state_10951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10951__$1,inst_10949);
} else {
if((state_val_10952 === (12))){
var inst_10878 = (state_10951[(2)]);
var state_10951__$1 = state_10951;
var statearr_11003_11071 = state_10951__$1;
(statearr_11003_11071[(2)] = inst_10878);

(statearr_11003_11071[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (2))){
var state_10951__$1 = state_10951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10951__$1,(4),ch);
} else {
if((state_val_10952 === (23))){
var state_10951__$1 = state_10951;
var statearr_11004_11072 = state_10951__$1;
(statearr_11004_11072[(2)] = null);

(statearr_11004_11072[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (35))){
var inst_10933 = (state_10951[(2)]);
var state_10951__$1 = state_10951;
var statearr_11005_11073 = state_10951__$1;
(statearr_11005_11073[(2)] = inst_10933);

(statearr_11005_11073[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (19))){
var inst_10852 = (state_10951[(7)]);
var inst_10856 = cljs.core.chunk_first.call(null,inst_10852);
var inst_10857 = cljs.core.chunk_rest.call(null,inst_10852);
var inst_10858 = cljs.core.count.call(null,inst_10856);
var inst_10832 = inst_10857;
var inst_10833 = inst_10856;
var inst_10834 = inst_10858;
var inst_10835 = (0);
var state_10951__$1 = (function (){var statearr_11006 = state_10951;
(statearr_11006[(13)] = inst_10835);

(statearr_11006[(14)] = inst_10834);

(statearr_11006[(15)] = inst_10832);

(statearr_11006[(16)] = inst_10833);

return statearr_11006;
})();
var statearr_11007_11074 = state_10951__$1;
(statearr_11007_11074[(2)] = null);

(statearr_11007_11074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (11))){
var inst_10852 = (state_10951[(7)]);
var inst_10832 = (state_10951[(15)]);
var inst_10852__$1 = cljs.core.seq.call(null,inst_10832);
var state_10951__$1 = (function (){var statearr_11008 = state_10951;
(statearr_11008[(7)] = inst_10852__$1);

return statearr_11008;
})();
if(inst_10852__$1){
var statearr_11009_11075 = state_10951__$1;
(statearr_11009_11075[(1)] = (16));

} else {
var statearr_11010_11076 = state_10951__$1;
(statearr_11010_11076[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (9))){
var inst_10880 = (state_10951[(2)]);
var state_10951__$1 = state_10951;
var statearr_11011_11077 = state_10951__$1;
(statearr_11011_11077[(2)] = inst_10880);

(statearr_11011_11077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (5))){
var inst_10830 = cljs.core.deref.call(null,cs);
var inst_10831 = cljs.core.seq.call(null,inst_10830);
var inst_10832 = inst_10831;
var inst_10833 = null;
var inst_10834 = (0);
var inst_10835 = (0);
var state_10951__$1 = (function (){var statearr_11012 = state_10951;
(statearr_11012[(13)] = inst_10835);

(statearr_11012[(14)] = inst_10834);

(statearr_11012[(15)] = inst_10832);

(statearr_11012[(16)] = inst_10833);

return statearr_11012;
})();
var statearr_11013_11078 = state_10951__$1;
(statearr_11013_11078[(2)] = null);

(statearr_11013_11078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (14))){
var state_10951__$1 = state_10951;
var statearr_11014_11079 = state_10951__$1;
(statearr_11014_11079[(2)] = null);

(statearr_11014_11079[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (45))){
var inst_10941 = (state_10951[(2)]);
var state_10951__$1 = state_10951;
var statearr_11015_11080 = state_10951__$1;
(statearr_11015_11080[(2)] = inst_10941);

(statearr_11015_11080[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (26))){
var inst_10883 = (state_10951[(29)]);
var inst_10937 = (state_10951[(2)]);
var inst_10938 = cljs.core.seq.call(null,inst_10883);
var state_10951__$1 = (function (){var statearr_11016 = state_10951;
(statearr_11016[(31)] = inst_10937);

return statearr_11016;
})();
if(inst_10938){
var statearr_11017_11081 = state_10951__$1;
(statearr_11017_11081[(1)] = (42));

} else {
var statearr_11018_11082 = state_10951__$1;
(statearr_11018_11082[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (16))){
var inst_10852 = (state_10951[(7)]);
var inst_10854 = cljs.core.chunked_seq_QMARK_.call(null,inst_10852);
var state_10951__$1 = state_10951;
if(inst_10854){
var statearr_11019_11083 = state_10951__$1;
(statearr_11019_11083[(1)] = (19));

} else {
var statearr_11020_11084 = state_10951__$1;
(statearr_11020_11084[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (38))){
var inst_10930 = (state_10951[(2)]);
var state_10951__$1 = state_10951;
var statearr_11021_11085 = state_10951__$1;
(statearr_11021_11085[(2)] = inst_10930);

(statearr_11021_11085[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (30))){
var state_10951__$1 = state_10951;
var statearr_11022_11086 = state_10951__$1;
(statearr_11022_11086[(2)] = null);

(statearr_11022_11086[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (10))){
var inst_10835 = (state_10951[(13)]);
var inst_10833 = (state_10951[(16)]);
var inst_10841 = cljs.core._nth.call(null,inst_10833,inst_10835);
var inst_10842 = cljs.core.nth.call(null,inst_10841,(0),null);
var inst_10843 = cljs.core.nth.call(null,inst_10841,(1),null);
var state_10951__$1 = (function (){var statearr_11023 = state_10951;
(statearr_11023[(26)] = inst_10842);

return statearr_11023;
})();
if(cljs.core.truth_(inst_10843)){
var statearr_11024_11087 = state_10951__$1;
(statearr_11024_11087[(1)] = (13));

} else {
var statearr_11025_11088 = state_10951__$1;
(statearr_11025_11088[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (18))){
var inst_10876 = (state_10951[(2)]);
var state_10951__$1 = state_10951;
var statearr_11026_11089 = state_10951__$1;
(statearr_11026_11089[(2)] = inst_10876);

(statearr_11026_11089[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (42))){
var state_10951__$1 = state_10951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10951__$1,(45),dchan);
} else {
if((state_val_10952 === (37))){
var inst_10823 = (state_10951[(11)]);
var inst_10919 = (state_10951[(23)]);
var inst_10910 = (state_10951[(25)]);
var inst_10919__$1 = cljs.core.first.call(null,inst_10910);
var inst_10920 = cljs.core.async.put_BANG_.call(null,inst_10919__$1,inst_10823,done);
var state_10951__$1 = (function (){var statearr_11027 = state_10951;
(statearr_11027[(23)] = inst_10919__$1);

return statearr_11027;
})();
if(cljs.core.truth_(inst_10920)){
var statearr_11028_11090 = state_10951__$1;
(statearr_11028_11090[(1)] = (39));

} else {
var statearr_11029_11091 = state_10951__$1;
(statearr_11029_11091[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10952 === (8))){
var inst_10835 = (state_10951[(13)]);
var inst_10834 = (state_10951[(14)]);
var inst_10837 = (inst_10835 < inst_10834);
var inst_10838 = inst_10837;
var state_10951__$1 = state_10951;
if(cljs.core.truth_(inst_10838)){
var statearr_11030_11092 = state_10951__$1;
(statearr_11030_11092[(1)] = (10));

} else {
var statearr_11031_11093 = state_10951__$1;
(statearr_11031_11093[(1)] = (11));

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
});})(c__5809__auto___11039,cs,m,dchan,dctr,done))
;
return ((function (switch__5794__auto__,c__5809__auto___11039,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_11035 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11035[(0)] = state_machine__5795__auto__);

(statearr_11035[(1)] = (1));

return statearr_11035;
});
var state_machine__5795__auto____1 = (function (state_10951){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_10951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e11036){if((e11036 instanceof Object)){
var ex__5798__auto__ = e11036;
var statearr_11037_11094 = state_10951;
(statearr_11037_11094[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11095 = state_10951;
state_10951 = G__11095;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_10951){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_10951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___11039,cs,m,dchan,dctr,done))
})();
var state__5811__auto__ = (function (){var statearr_11038 = f__5810__auto__.call(null);
(statearr_11038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___11039);

return statearr_11038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___11039,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj11097 = {};
return obj11097;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__11098){
var map__11103 = p__11098;
var map__11103__$1 = ((cljs.core.seq_QMARK_.call(null,map__11103))?cljs.core.apply.call(null,cljs.core.hash_map,map__11103):map__11103);
var opts = map__11103__$1;
var statearr_11104_11107 = state;
(statearr_11104_11107[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__11103,map__11103__$1,opts){
return (function (val){
var statearr_11105_11108 = state;
(statearr_11105_11108[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__11103,map__11103__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_11106_11109 = state;
(statearr_11106_11109[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__11098 = null;
if (arguments.length > 3) {
  p__11098 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__11098);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__11110){
var state = cljs.core.first(arglist__11110);
arglist__11110 = cljs.core.next(arglist__11110);
var cont_block = cljs.core.first(arglist__11110);
arglist__11110 = cljs.core.next(arglist__11110);
var ports = cljs.core.first(arglist__11110);
var p__11098 = cljs.core.rest(arglist__11110);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__11098);
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
if(typeof cljs.core.async.t11230 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11230 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11231){
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
this.meta11231 = meta11231;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11230.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t11230.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t11230.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t11230.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t11230.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t11230.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t11230.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t11230.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t11230.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11232){
var self__ = this;
var _11232__$1 = this;
return self__.meta11231;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t11230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11232,meta11231__$1){
var self__ = this;
var _11232__$1 = this;
return (new cljs.core.async.t11230(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11231__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t11230.cljs$lang$type = true;

cljs.core.async.t11230.cljs$lang$ctorStr = "cljs.core.async/t11230";

cljs.core.async.t11230.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t11230");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t11230 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11230(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11231){
return (new cljs.core.async.t11230(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11231));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t11230(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
})()
;
var c__5809__auto___11349 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___11349,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___11349,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11302){
var state_val_11303 = (state_11302[(1)]);
if((state_val_11303 === (7))){
var inst_11246 = (state_11302[(7)]);
var inst_11251 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11246);
var state_11302__$1 = state_11302;
var statearr_11304_11350 = state_11302__$1;
(statearr_11304_11350[(2)] = inst_11251);

(statearr_11304_11350[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11303 === (20))){
var inst_11261 = (state_11302[(8)]);
var state_11302__$1 = state_11302;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11302__$1,(23),out,inst_11261);
} else {
if((state_val_11303 === (1))){
var inst_11236 = (state_11302[(9)]);
var inst_11236__$1 = calc_state.call(null);
var inst_11237 = cljs.core.seq_QMARK_.call(null,inst_11236__$1);
var state_11302__$1 = (function (){var statearr_11305 = state_11302;
(statearr_11305[(9)] = inst_11236__$1);

return statearr_11305;
})();
if(inst_11237){
var statearr_11306_11351 = state_11302__$1;
(statearr_11306_11351[(1)] = (2));

} else {
var statearr_11307_11352 = state_11302__$1;
(statearr_11307_11352[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11303 === (24))){
var inst_11254 = (state_11302[(10)]);
var inst_11246 = inst_11254;
var state_11302__$1 = (function (){var statearr_11308 = state_11302;
(statearr_11308[(7)] = inst_11246);

return statearr_11308;
})();
var statearr_11309_11353 = state_11302__$1;
(statearr_11309_11353[(2)] = null);

(statearr_11309_11353[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11303 === (4))){
var inst_11236 = (state_11302[(9)]);
var inst_11242 = (state_11302[(2)]);
var inst_11243 = cljs.core.get.call(null,inst_11242,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11244 = cljs.core.get.call(null,inst_11242,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11245 = cljs.core.get.call(null,inst_11242,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11246 = inst_11236;
var state_11302__$1 = (function (){var statearr_11310 = state_11302;
(statearr_11310[(11)] = inst_11243);

(statearr_11310[(12)] = inst_11245);

(statearr_11310[(7)] = inst_11246);

(statearr_11310[(13)] = inst_11244);

return statearr_11310;
})();
var statearr_11311_11354 = state_11302__$1;
(statearr_11311_11354[(2)] = null);

(statearr_11311_11354[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11303 === (15))){
var state_11302__$1 = state_11302;
var statearr_11312_11355 = state_11302__$1;
(statearr_11312_11355[(2)] = null);

(statearr_11312_11355[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11303 === (21))){
var inst_11254 = (state_11302[(10)]);
var inst_11246 = inst_11254;
var state_11302__$1 = (function (){var statearr_11313 = state_11302;
(statearr_11313[(7)] = inst_11246);

return statearr_11313;
})();
var statearr_11314_11356 = state_11302__$1;
(statearr_11314_11356[(2)] = null);

(statearr_11314_11356[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11303 === (13))){
var inst_11298 = (state_11302[(2)]);
var state_11302__$1 = state_11302;
var statearr_11315_11357 = state_11302__$1;
(statearr_11315_11357[(2)] = inst_11298);

(statearr_11315_11357[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11303 === (22))){
var inst_11296 = (state_11302[(2)]);
var state_11302__$1 = state_11302;
var statearr_11316_11358 = state_11302__$1;
(statearr_11316_11358[(2)] = inst_11296);

(statearr_11316_11358[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11303 === (6))){
var inst_11300 = (state_11302[(2)]);
var state_11302__$1 = state_11302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11302__$1,inst_11300);
} else {
if((state_val_11303 === (25))){
var state_11302__$1 = state_11302;
var statearr_11317_11359 = state_11302__$1;
(statearr_11317_11359[(2)] = null);

(statearr_11317_11359[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11303 === (17))){
var inst_11276 = (state_11302[(14)]);
var state_11302__$1 = state_11302;
var statearr_11318_11360 = state_11302__$1;
(statearr_11318_11360[(2)] = inst_11276);

(statearr_11318_11360[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11303 === (3))){
var inst_11236 = (state_11302[(9)]);
var state_11302__$1 = state_11302;
var statearr_11319_11361 = state_11302__$1;
(statearr_11319_11361[(2)] = inst_11236);

(statearr_11319_11361[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11303 === (12))){
var inst_11262 = (state_11302[(15)]);
var inst_11276 = (state_11302[(14)]);
var inst_11257 = (state_11302[(16)]);
var inst_11276__$1 = inst_11257.call(null,inst_11262);
var state_11302__$1 = (function (){var statearr_11320 = state_11302;
(statearr_11320[(14)] = inst_11276__$1);

return statearr_11320;
})();
if(cljs.core.truth_(inst_11276__$1)){
var statearr_11321_11362 = state_11302__$1;
(statearr_11321_11362[(1)] = (17));

} else {
var statearr_11322_11363 = state_11302__$1;
(statearr_11322_11363[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11303 === (2))){
var inst_11236 = (state_11302[(9)]);
var inst_11239 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11236);
var state_11302__$1 = state_11302;
var statearr_11323_11364 = state_11302__$1;
(statearr_11323_11364[(2)] = inst_11239);

(statearr_11323_11364[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11303 === (23))){
var inst_11287 = (state_11302[(2)]);
var state_11302__$1 = state_11302;
if(cljs.core.truth_(inst_11287)){
var statearr_11324_11365 = state_11302__$1;
(statearr_11324_11365[(1)] = (24));

} else {
var statearr_11325_11366 = state_11302__$1;
(statearr_11325_11366[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11303 === (19))){
var inst_11284 = (state_11302[(2)]);
var state_11302__$1 = state_11302;
if(cljs.core.truth_(inst_11284)){
var statearr_11326_11367 = state_11302__$1;
(statearr_11326_11367[(1)] = (20));

} else {
var statearr_11327_11368 = state_11302__$1;
(statearr_11327_11368[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11303 === (11))){
var inst_11261 = (state_11302[(8)]);
var inst_11267 = (inst_11261 == null);
var state_11302__$1 = state_11302;
if(cljs.core.truth_(inst_11267)){
var statearr_11328_11369 = state_11302__$1;
(statearr_11328_11369[(1)] = (14));

} else {
var statearr_11329_11370 = state_11302__$1;
(statearr_11329_11370[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11303 === (9))){
var inst_11254 = (state_11302[(10)]);
var inst_11254__$1 = (state_11302[(2)]);
var inst_11255 = cljs.core.get.call(null,inst_11254__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11256 = cljs.core.get.call(null,inst_11254__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11257 = cljs.core.get.call(null,inst_11254__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_11302__$1 = (function (){var statearr_11330 = state_11302;
(statearr_11330[(17)] = inst_11256);

(statearr_11330[(10)] = inst_11254__$1);

(statearr_11330[(16)] = inst_11257);

return statearr_11330;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_11302__$1,(10),inst_11255);
} else {
if((state_val_11303 === (5))){
var inst_11246 = (state_11302[(7)]);
var inst_11249 = cljs.core.seq_QMARK_.call(null,inst_11246);
var state_11302__$1 = state_11302;
if(inst_11249){
var statearr_11331_11371 = state_11302__$1;
(statearr_11331_11371[(1)] = (7));

} else {
var statearr_11332_11372 = state_11302__$1;
(statearr_11332_11372[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11303 === (14))){
var inst_11262 = (state_11302[(15)]);
var inst_11269 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11262);
var state_11302__$1 = state_11302;
var statearr_11333_11373 = state_11302__$1;
(statearr_11333_11373[(2)] = inst_11269);

(statearr_11333_11373[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11303 === (26))){
var inst_11292 = (state_11302[(2)]);
var state_11302__$1 = state_11302;
var statearr_11334_11374 = state_11302__$1;
(statearr_11334_11374[(2)] = inst_11292);

(statearr_11334_11374[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11303 === (16))){
var inst_11272 = (state_11302[(2)]);
var inst_11273 = calc_state.call(null);
var inst_11246 = inst_11273;
var state_11302__$1 = (function (){var statearr_11335 = state_11302;
(statearr_11335[(7)] = inst_11246);

(statearr_11335[(18)] = inst_11272);

return statearr_11335;
})();
var statearr_11336_11375 = state_11302__$1;
(statearr_11336_11375[(2)] = null);

(statearr_11336_11375[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11303 === (10))){
var inst_11262 = (state_11302[(15)]);
var inst_11261 = (state_11302[(8)]);
var inst_11260 = (state_11302[(2)]);
var inst_11261__$1 = cljs.core.nth.call(null,inst_11260,(0),null);
var inst_11262__$1 = cljs.core.nth.call(null,inst_11260,(1),null);
var inst_11263 = (inst_11261__$1 == null);
var inst_11264 = cljs.core._EQ_.call(null,inst_11262__$1,change);
var inst_11265 = (inst_11263) || (inst_11264);
var state_11302__$1 = (function (){var statearr_11337 = state_11302;
(statearr_11337[(15)] = inst_11262__$1);

(statearr_11337[(8)] = inst_11261__$1);

return statearr_11337;
})();
if(cljs.core.truth_(inst_11265)){
var statearr_11338_11376 = state_11302__$1;
(statearr_11338_11376[(1)] = (11));

} else {
var statearr_11339_11377 = state_11302__$1;
(statearr_11339_11377[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11303 === (18))){
var inst_11262 = (state_11302[(15)]);
var inst_11256 = (state_11302[(17)]);
var inst_11257 = (state_11302[(16)]);
var inst_11279 = cljs.core.empty_QMARK_.call(null,inst_11257);
var inst_11280 = inst_11256.call(null,inst_11262);
var inst_11281 = cljs.core.not.call(null,inst_11280);
var inst_11282 = (inst_11279) && (inst_11281);
var state_11302__$1 = state_11302;
var statearr_11340_11378 = state_11302__$1;
(statearr_11340_11378[(2)] = inst_11282);

(statearr_11340_11378[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11303 === (8))){
var inst_11246 = (state_11302[(7)]);
var state_11302__$1 = state_11302;
var statearr_11341_11379 = state_11302__$1;
(statearr_11341_11379[(2)] = inst_11246);

(statearr_11341_11379[(1)] = (9));


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
});})(c__5809__auto___11349,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__5794__auto__,c__5809__auto___11349,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_11345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11345[(0)] = state_machine__5795__auto__);

(statearr_11345[(1)] = (1));

return statearr_11345;
});
var state_machine__5795__auto____1 = (function (state_11302){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_11302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e11346){if((e11346 instanceof Object)){
var ex__5798__auto__ = e11346;
var statearr_11347_11380 = state_11302;
(statearr_11347_11380[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11381 = state_11302;
state_11302 = G__11381;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_11302){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_11302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___11349,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__5811__auto__ = (function (){var statearr_11348 = f__5810__auto__.call(null);
(statearr_11348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___11349);

return statearr_11348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___11349,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj11383 = {};
return obj11383;
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
return (function (p1__11384_SHARP_){
if(cljs.core.truth_(p1__11384_SHARP_.call(null,topic))){
return p1__11384_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__11384_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3608__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t11507 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11507 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11508){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11508 = meta11508;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11507.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t11507.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t11507.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t11507.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t11507.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t11507.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t11507.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t11507.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11509){
var self__ = this;
var _11509__$1 = this;
return self__.meta11508;
});})(mults,ensure_mult))
;

cljs.core.async.t11507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11509,meta11508__$1){
var self__ = this;
var _11509__$1 = this;
return (new cljs.core.async.t11507(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11508__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t11507.cljs$lang$type = true;

cljs.core.async.t11507.cljs$lang$ctorStr = "cljs.core.async/t11507";

cljs.core.async.t11507.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t11507");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t11507 = ((function (mults,ensure_mult){
return (function __GT_t11507(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11508){
return (new cljs.core.async.t11507(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11508));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t11507(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
})()
;
var c__5809__auto___11629 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___11629,mults,ensure_mult,p){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___11629,mults,ensure_mult,p){
return (function (state_11581){
var state_val_11582 = (state_11581[(1)]);
if((state_val_11582 === (7))){
var inst_11577 = (state_11581[(2)]);
var state_11581__$1 = state_11581;
var statearr_11583_11630 = state_11581__$1;
(statearr_11583_11630[(2)] = inst_11577);

(statearr_11583_11630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (20))){
var state_11581__$1 = state_11581;
var statearr_11584_11631 = state_11581__$1;
(statearr_11584_11631[(2)] = null);

(statearr_11584_11631[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (1))){
var state_11581__$1 = state_11581;
var statearr_11585_11632 = state_11581__$1;
(statearr_11585_11632[(2)] = null);

(statearr_11585_11632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (24))){
var inst_11560 = (state_11581[(7)]);
var inst_11569 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11560);
var state_11581__$1 = state_11581;
var statearr_11586_11633 = state_11581__$1;
(statearr_11586_11633[(2)] = inst_11569);

(statearr_11586_11633[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (4))){
var inst_11512 = (state_11581[(8)]);
var inst_11512__$1 = (state_11581[(2)]);
var inst_11513 = (inst_11512__$1 == null);
var state_11581__$1 = (function (){var statearr_11587 = state_11581;
(statearr_11587[(8)] = inst_11512__$1);

return statearr_11587;
})();
if(cljs.core.truth_(inst_11513)){
var statearr_11588_11634 = state_11581__$1;
(statearr_11588_11634[(1)] = (5));

} else {
var statearr_11589_11635 = state_11581__$1;
(statearr_11589_11635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (15))){
var inst_11554 = (state_11581[(2)]);
var state_11581__$1 = state_11581;
var statearr_11590_11636 = state_11581__$1;
(statearr_11590_11636[(2)] = inst_11554);

(statearr_11590_11636[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (21))){
var inst_11574 = (state_11581[(2)]);
var state_11581__$1 = (function (){var statearr_11591 = state_11581;
(statearr_11591[(9)] = inst_11574);

return statearr_11591;
})();
var statearr_11592_11637 = state_11581__$1;
(statearr_11592_11637[(2)] = null);

(statearr_11592_11637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (13))){
var inst_11536 = (state_11581[(10)]);
var inst_11538 = cljs.core.chunked_seq_QMARK_.call(null,inst_11536);
var state_11581__$1 = state_11581;
if(inst_11538){
var statearr_11593_11638 = state_11581__$1;
(statearr_11593_11638[(1)] = (16));

} else {
var statearr_11594_11639 = state_11581__$1;
(statearr_11594_11639[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (22))){
var inst_11566 = (state_11581[(2)]);
var state_11581__$1 = state_11581;
if(cljs.core.truth_(inst_11566)){
var statearr_11595_11640 = state_11581__$1;
(statearr_11595_11640[(1)] = (23));

} else {
var statearr_11596_11641 = state_11581__$1;
(statearr_11596_11641[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (6))){
var inst_11512 = (state_11581[(8)]);
var inst_11560 = (state_11581[(7)]);
var inst_11562 = (state_11581[(11)]);
var inst_11560__$1 = topic_fn.call(null,inst_11512);
var inst_11561 = cljs.core.deref.call(null,mults);
var inst_11562__$1 = cljs.core.get.call(null,inst_11561,inst_11560__$1);
var state_11581__$1 = (function (){var statearr_11597 = state_11581;
(statearr_11597[(7)] = inst_11560__$1);

(statearr_11597[(11)] = inst_11562__$1);

return statearr_11597;
})();
if(cljs.core.truth_(inst_11562__$1)){
var statearr_11598_11642 = state_11581__$1;
(statearr_11598_11642[(1)] = (19));

} else {
var statearr_11599_11643 = state_11581__$1;
(statearr_11599_11643[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (25))){
var inst_11571 = (state_11581[(2)]);
var state_11581__$1 = state_11581;
var statearr_11600_11644 = state_11581__$1;
(statearr_11600_11644[(2)] = inst_11571);

(statearr_11600_11644[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (17))){
var inst_11536 = (state_11581[(10)]);
var inst_11545 = cljs.core.first.call(null,inst_11536);
var inst_11546 = cljs.core.async.muxch_STAR_.call(null,inst_11545);
var inst_11547 = cljs.core.async.close_BANG_.call(null,inst_11546);
var inst_11548 = cljs.core.next.call(null,inst_11536);
var inst_11522 = inst_11548;
var inst_11523 = null;
var inst_11524 = (0);
var inst_11525 = (0);
var state_11581__$1 = (function (){var statearr_11601 = state_11581;
(statearr_11601[(12)] = inst_11525);

(statearr_11601[(13)] = inst_11523);

(statearr_11601[(14)] = inst_11547);

(statearr_11601[(15)] = inst_11522);

(statearr_11601[(16)] = inst_11524);

return statearr_11601;
})();
var statearr_11602_11645 = state_11581__$1;
(statearr_11602_11645[(2)] = null);

(statearr_11602_11645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (3))){
var inst_11579 = (state_11581[(2)]);
var state_11581__$1 = state_11581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11581__$1,inst_11579);
} else {
if((state_val_11582 === (12))){
var inst_11556 = (state_11581[(2)]);
var state_11581__$1 = state_11581;
var statearr_11603_11646 = state_11581__$1;
(statearr_11603_11646[(2)] = inst_11556);

(statearr_11603_11646[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (2))){
var state_11581__$1 = state_11581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11581__$1,(4),ch);
} else {
if((state_val_11582 === (23))){
var state_11581__$1 = state_11581;
var statearr_11604_11647 = state_11581__$1;
(statearr_11604_11647[(2)] = null);

(statearr_11604_11647[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (19))){
var inst_11512 = (state_11581[(8)]);
var inst_11562 = (state_11581[(11)]);
var inst_11564 = cljs.core.async.muxch_STAR_.call(null,inst_11562);
var state_11581__$1 = state_11581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11581__$1,(22),inst_11564,inst_11512);
} else {
if((state_val_11582 === (11))){
var inst_11536 = (state_11581[(10)]);
var inst_11522 = (state_11581[(15)]);
var inst_11536__$1 = cljs.core.seq.call(null,inst_11522);
var state_11581__$1 = (function (){var statearr_11605 = state_11581;
(statearr_11605[(10)] = inst_11536__$1);

return statearr_11605;
})();
if(inst_11536__$1){
var statearr_11606_11648 = state_11581__$1;
(statearr_11606_11648[(1)] = (13));

} else {
var statearr_11607_11649 = state_11581__$1;
(statearr_11607_11649[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (9))){
var inst_11558 = (state_11581[(2)]);
var state_11581__$1 = state_11581;
var statearr_11608_11650 = state_11581__$1;
(statearr_11608_11650[(2)] = inst_11558);

(statearr_11608_11650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (5))){
var inst_11519 = cljs.core.deref.call(null,mults);
var inst_11520 = cljs.core.vals.call(null,inst_11519);
var inst_11521 = cljs.core.seq.call(null,inst_11520);
var inst_11522 = inst_11521;
var inst_11523 = null;
var inst_11524 = (0);
var inst_11525 = (0);
var state_11581__$1 = (function (){var statearr_11609 = state_11581;
(statearr_11609[(12)] = inst_11525);

(statearr_11609[(13)] = inst_11523);

(statearr_11609[(15)] = inst_11522);

(statearr_11609[(16)] = inst_11524);

return statearr_11609;
})();
var statearr_11610_11651 = state_11581__$1;
(statearr_11610_11651[(2)] = null);

(statearr_11610_11651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (14))){
var state_11581__$1 = state_11581;
var statearr_11614_11652 = state_11581__$1;
(statearr_11614_11652[(2)] = null);

(statearr_11614_11652[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (16))){
var inst_11536 = (state_11581[(10)]);
var inst_11540 = cljs.core.chunk_first.call(null,inst_11536);
var inst_11541 = cljs.core.chunk_rest.call(null,inst_11536);
var inst_11542 = cljs.core.count.call(null,inst_11540);
var inst_11522 = inst_11541;
var inst_11523 = inst_11540;
var inst_11524 = inst_11542;
var inst_11525 = (0);
var state_11581__$1 = (function (){var statearr_11615 = state_11581;
(statearr_11615[(12)] = inst_11525);

(statearr_11615[(13)] = inst_11523);

(statearr_11615[(15)] = inst_11522);

(statearr_11615[(16)] = inst_11524);

return statearr_11615;
})();
var statearr_11616_11653 = state_11581__$1;
(statearr_11616_11653[(2)] = null);

(statearr_11616_11653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (10))){
var inst_11525 = (state_11581[(12)]);
var inst_11523 = (state_11581[(13)]);
var inst_11522 = (state_11581[(15)]);
var inst_11524 = (state_11581[(16)]);
var inst_11530 = cljs.core._nth.call(null,inst_11523,inst_11525);
var inst_11531 = cljs.core.async.muxch_STAR_.call(null,inst_11530);
var inst_11532 = cljs.core.async.close_BANG_.call(null,inst_11531);
var inst_11533 = (inst_11525 + (1));
var tmp11611 = inst_11523;
var tmp11612 = inst_11522;
var tmp11613 = inst_11524;
var inst_11522__$1 = tmp11612;
var inst_11523__$1 = tmp11611;
var inst_11524__$1 = tmp11613;
var inst_11525__$1 = inst_11533;
var state_11581__$1 = (function (){var statearr_11617 = state_11581;
(statearr_11617[(12)] = inst_11525__$1);

(statearr_11617[(13)] = inst_11523__$1);

(statearr_11617[(17)] = inst_11532);

(statearr_11617[(15)] = inst_11522__$1);

(statearr_11617[(16)] = inst_11524__$1);

return statearr_11617;
})();
var statearr_11618_11654 = state_11581__$1;
(statearr_11618_11654[(2)] = null);

(statearr_11618_11654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (18))){
var inst_11551 = (state_11581[(2)]);
var state_11581__$1 = state_11581;
var statearr_11619_11655 = state_11581__$1;
(statearr_11619_11655[(2)] = inst_11551);

(statearr_11619_11655[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (8))){
var inst_11525 = (state_11581[(12)]);
var inst_11524 = (state_11581[(16)]);
var inst_11527 = (inst_11525 < inst_11524);
var inst_11528 = inst_11527;
var state_11581__$1 = state_11581;
if(cljs.core.truth_(inst_11528)){
var statearr_11620_11656 = state_11581__$1;
(statearr_11620_11656[(1)] = (10));

} else {
var statearr_11621_11657 = state_11581__$1;
(statearr_11621_11657[(1)] = (11));

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
});})(c__5809__auto___11629,mults,ensure_mult,p))
;
return ((function (switch__5794__auto__,c__5809__auto___11629,mults,ensure_mult,p){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_11625 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11625[(0)] = state_machine__5795__auto__);

(statearr_11625[(1)] = (1));

return statearr_11625;
});
var state_machine__5795__auto____1 = (function (state_11581){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_11581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e11626){if((e11626 instanceof Object)){
var ex__5798__auto__ = e11626;
var statearr_11627_11658 = state_11581;
(statearr_11627_11658[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11659 = state_11581;
state_11581 = G__11659;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_11581){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_11581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___11629,mults,ensure_mult,p))
})();
var state__5811__auto__ = (function (){var statearr_11628 = f__5810__auto__.call(null);
(statearr_11628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___11629);

return statearr_11628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___11629,mults,ensure_mult,p))
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
var c__5809__auto___11796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___11796,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___11796,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11766){
var state_val_11767 = (state_11766[(1)]);
if((state_val_11767 === (7))){
var state_11766__$1 = state_11766;
var statearr_11768_11797 = state_11766__$1;
(statearr_11768_11797[(2)] = null);

(statearr_11768_11797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11767 === (1))){
var state_11766__$1 = state_11766;
var statearr_11769_11798 = state_11766__$1;
(statearr_11769_11798[(2)] = null);

(statearr_11769_11798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11767 === (4))){
var inst_11730 = (state_11766[(7)]);
var inst_11732 = (inst_11730 < cnt);
var state_11766__$1 = state_11766;
if(cljs.core.truth_(inst_11732)){
var statearr_11770_11799 = state_11766__$1;
(statearr_11770_11799[(1)] = (6));

} else {
var statearr_11771_11800 = state_11766__$1;
(statearr_11771_11800[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11767 === (15))){
var inst_11762 = (state_11766[(2)]);
var state_11766__$1 = state_11766;
var statearr_11772_11801 = state_11766__$1;
(statearr_11772_11801[(2)] = inst_11762);

(statearr_11772_11801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11767 === (13))){
var inst_11755 = cljs.core.async.close_BANG_.call(null,out);
var state_11766__$1 = state_11766;
var statearr_11773_11802 = state_11766__$1;
(statearr_11773_11802[(2)] = inst_11755);

(statearr_11773_11802[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11767 === (6))){
var state_11766__$1 = state_11766;
var statearr_11774_11803 = state_11766__$1;
(statearr_11774_11803[(2)] = null);

(statearr_11774_11803[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11767 === (3))){
var inst_11764 = (state_11766[(2)]);
var state_11766__$1 = state_11766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11766__$1,inst_11764);
} else {
if((state_val_11767 === (12))){
var inst_11752 = (state_11766[(8)]);
var inst_11752__$1 = (state_11766[(2)]);
var inst_11753 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11752__$1);
var state_11766__$1 = (function (){var statearr_11775 = state_11766;
(statearr_11775[(8)] = inst_11752__$1);

return statearr_11775;
})();
if(cljs.core.truth_(inst_11753)){
var statearr_11776_11804 = state_11766__$1;
(statearr_11776_11804[(1)] = (13));

} else {
var statearr_11777_11805 = state_11766__$1;
(statearr_11777_11805[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11767 === (2))){
var inst_11729 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_11730 = (0);
var state_11766__$1 = (function (){var statearr_11778 = state_11766;
(statearr_11778[(7)] = inst_11730);

(statearr_11778[(9)] = inst_11729);

return statearr_11778;
})();
var statearr_11779_11806 = state_11766__$1;
(statearr_11779_11806[(2)] = null);

(statearr_11779_11806[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11767 === (11))){
var inst_11730 = (state_11766[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11766,(10),Object,null,(9));
var inst_11739 = chs__$1.call(null,inst_11730);
var inst_11740 = done.call(null,inst_11730);
var inst_11741 = cljs.core.async.take_BANG_.call(null,inst_11739,inst_11740);
var state_11766__$1 = state_11766;
var statearr_11780_11807 = state_11766__$1;
(statearr_11780_11807[(2)] = inst_11741);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11766__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11767 === (9))){
var inst_11730 = (state_11766[(7)]);
var inst_11743 = (state_11766[(2)]);
var inst_11744 = (inst_11730 + (1));
var inst_11730__$1 = inst_11744;
var state_11766__$1 = (function (){var statearr_11781 = state_11766;
(statearr_11781[(7)] = inst_11730__$1);

(statearr_11781[(10)] = inst_11743);

return statearr_11781;
})();
var statearr_11782_11808 = state_11766__$1;
(statearr_11782_11808[(2)] = null);

(statearr_11782_11808[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11767 === (5))){
var inst_11750 = (state_11766[(2)]);
var state_11766__$1 = (function (){var statearr_11783 = state_11766;
(statearr_11783[(11)] = inst_11750);

return statearr_11783;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11766__$1,(12),dchan);
} else {
if((state_val_11767 === (14))){
var inst_11752 = (state_11766[(8)]);
var inst_11757 = cljs.core.apply.call(null,f,inst_11752);
var state_11766__$1 = state_11766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11766__$1,(16),out,inst_11757);
} else {
if((state_val_11767 === (16))){
var inst_11759 = (state_11766[(2)]);
var state_11766__$1 = (function (){var statearr_11784 = state_11766;
(statearr_11784[(12)] = inst_11759);

return statearr_11784;
})();
var statearr_11785_11809 = state_11766__$1;
(statearr_11785_11809[(2)] = null);

(statearr_11785_11809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11767 === (10))){
var inst_11734 = (state_11766[(2)]);
var inst_11735 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_11766__$1 = (function (){var statearr_11786 = state_11766;
(statearr_11786[(13)] = inst_11734);

return statearr_11786;
})();
var statearr_11787_11810 = state_11766__$1;
(statearr_11787_11810[(2)] = inst_11735);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11766__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11767 === (8))){
var inst_11748 = (state_11766[(2)]);
var state_11766__$1 = state_11766;
var statearr_11788_11811 = state_11766__$1;
(statearr_11788_11811[(2)] = inst_11748);

(statearr_11788_11811[(1)] = (5));


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
});})(c__5809__auto___11796,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__5794__auto__,c__5809__auto___11796,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_11792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11792[(0)] = state_machine__5795__auto__);

(statearr_11792[(1)] = (1));

return statearr_11792;
});
var state_machine__5795__auto____1 = (function (state_11766){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_11766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e11793){if((e11793 instanceof Object)){
var ex__5798__auto__ = e11793;
var statearr_11794_11812 = state_11766;
(statearr_11794_11812[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11813 = state_11766;
state_11766 = G__11813;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_11766){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_11766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___11796,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__5811__auto__ = (function (){var statearr_11795 = f__5810__auto__.call(null);
(statearr_11795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___11796);

return statearr_11795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___11796,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__5809__auto___11921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___11921,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___11921,out){
return (function (state_11897){
var state_val_11898 = (state_11897[(1)]);
if((state_val_11898 === (7))){
var inst_11876 = (state_11897[(7)]);
var inst_11877 = (state_11897[(8)]);
var inst_11876__$1 = (state_11897[(2)]);
var inst_11877__$1 = cljs.core.nth.call(null,inst_11876__$1,(0),null);
var inst_11878 = cljs.core.nth.call(null,inst_11876__$1,(1),null);
var inst_11879 = (inst_11877__$1 == null);
var state_11897__$1 = (function (){var statearr_11899 = state_11897;
(statearr_11899[(7)] = inst_11876__$1);

(statearr_11899[(8)] = inst_11877__$1);

(statearr_11899[(9)] = inst_11878);

return statearr_11899;
})();
if(cljs.core.truth_(inst_11879)){
var statearr_11900_11922 = state_11897__$1;
(statearr_11900_11922[(1)] = (8));

} else {
var statearr_11901_11923 = state_11897__$1;
(statearr_11901_11923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11898 === (1))){
var inst_11868 = cljs.core.vec.call(null,chs);
var inst_11869 = inst_11868;
var state_11897__$1 = (function (){var statearr_11902 = state_11897;
(statearr_11902[(10)] = inst_11869);

return statearr_11902;
})();
var statearr_11903_11924 = state_11897__$1;
(statearr_11903_11924[(2)] = null);

(statearr_11903_11924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11898 === (4))){
var inst_11869 = (state_11897[(10)]);
var state_11897__$1 = state_11897;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11897__$1,(7),inst_11869);
} else {
if((state_val_11898 === (6))){
var inst_11893 = (state_11897[(2)]);
var state_11897__$1 = state_11897;
var statearr_11904_11925 = state_11897__$1;
(statearr_11904_11925[(2)] = inst_11893);

(statearr_11904_11925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11898 === (3))){
var inst_11895 = (state_11897[(2)]);
var state_11897__$1 = state_11897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11897__$1,inst_11895);
} else {
if((state_val_11898 === (2))){
var inst_11869 = (state_11897[(10)]);
var inst_11871 = cljs.core.count.call(null,inst_11869);
var inst_11872 = (inst_11871 > (0));
var state_11897__$1 = state_11897;
if(cljs.core.truth_(inst_11872)){
var statearr_11906_11926 = state_11897__$1;
(statearr_11906_11926[(1)] = (4));

} else {
var statearr_11907_11927 = state_11897__$1;
(statearr_11907_11927[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11898 === (11))){
var inst_11869 = (state_11897[(10)]);
var inst_11886 = (state_11897[(2)]);
var tmp11905 = inst_11869;
var inst_11869__$1 = tmp11905;
var state_11897__$1 = (function (){var statearr_11908 = state_11897;
(statearr_11908[(10)] = inst_11869__$1);

(statearr_11908[(11)] = inst_11886);

return statearr_11908;
})();
var statearr_11909_11928 = state_11897__$1;
(statearr_11909_11928[(2)] = null);

(statearr_11909_11928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11898 === (9))){
var inst_11877 = (state_11897[(8)]);
var state_11897__$1 = state_11897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11897__$1,(11),out,inst_11877);
} else {
if((state_val_11898 === (5))){
var inst_11891 = cljs.core.async.close_BANG_.call(null,out);
var state_11897__$1 = state_11897;
var statearr_11910_11929 = state_11897__$1;
(statearr_11910_11929[(2)] = inst_11891);

(statearr_11910_11929[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11898 === (10))){
var inst_11889 = (state_11897[(2)]);
var state_11897__$1 = state_11897;
var statearr_11911_11930 = state_11897__$1;
(statearr_11911_11930[(2)] = inst_11889);

(statearr_11911_11930[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11898 === (8))){
var inst_11869 = (state_11897[(10)]);
var inst_11876 = (state_11897[(7)]);
var inst_11877 = (state_11897[(8)]);
var inst_11878 = (state_11897[(9)]);
var inst_11881 = (function (){var c = inst_11878;
var v = inst_11877;
var vec__11874 = inst_11876;
var cs = inst_11869;
return ((function (c,v,vec__11874,cs,inst_11869,inst_11876,inst_11877,inst_11878,state_val_11898,c__5809__auto___11921,out){
return (function (p1__11814_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__11814_SHARP_);
});
;})(c,v,vec__11874,cs,inst_11869,inst_11876,inst_11877,inst_11878,state_val_11898,c__5809__auto___11921,out))
})();
var inst_11882 = cljs.core.filterv.call(null,inst_11881,inst_11869);
var inst_11869__$1 = inst_11882;
var state_11897__$1 = (function (){var statearr_11912 = state_11897;
(statearr_11912[(10)] = inst_11869__$1);

return statearr_11912;
})();
var statearr_11913_11931 = state_11897__$1;
(statearr_11913_11931[(2)] = null);

(statearr_11913_11931[(1)] = (2));


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
});})(c__5809__auto___11921,out))
;
return ((function (switch__5794__auto__,c__5809__auto___11921,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_11917 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11917[(0)] = state_machine__5795__auto__);

(statearr_11917[(1)] = (1));

return statearr_11917;
});
var state_machine__5795__auto____1 = (function (state_11897){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_11897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e11918){if((e11918 instanceof Object)){
var ex__5798__auto__ = e11918;
var statearr_11919_11932 = state_11897;
(statearr_11919_11932[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11933 = state_11897;
state_11897 = G__11933;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_11897){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_11897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___11921,out))
})();
var state__5811__auto__ = (function (){var statearr_11920 = f__5810__auto__.call(null);
(statearr_11920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___11921);

return statearr_11920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___11921,out))
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
var c__5809__auto___12026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___12026,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___12026,out){
return (function (state_12003){
var state_val_12004 = (state_12003[(1)]);
if((state_val_12004 === (7))){
var inst_11985 = (state_12003[(7)]);
var inst_11985__$1 = (state_12003[(2)]);
var inst_11986 = (inst_11985__$1 == null);
var inst_11987 = cljs.core.not.call(null,inst_11986);
var state_12003__$1 = (function (){var statearr_12005 = state_12003;
(statearr_12005[(7)] = inst_11985__$1);

return statearr_12005;
})();
if(inst_11987){
var statearr_12006_12027 = state_12003__$1;
(statearr_12006_12027[(1)] = (8));

} else {
var statearr_12007_12028 = state_12003__$1;
(statearr_12007_12028[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12004 === (1))){
var inst_11980 = (0);
var state_12003__$1 = (function (){var statearr_12008 = state_12003;
(statearr_12008[(8)] = inst_11980);

return statearr_12008;
})();
var statearr_12009_12029 = state_12003__$1;
(statearr_12009_12029[(2)] = null);

(statearr_12009_12029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12004 === (4))){
var state_12003__$1 = state_12003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12003__$1,(7),ch);
} else {
if((state_val_12004 === (6))){
var inst_11998 = (state_12003[(2)]);
var state_12003__$1 = state_12003;
var statearr_12010_12030 = state_12003__$1;
(statearr_12010_12030[(2)] = inst_11998);

(statearr_12010_12030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12004 === (3))){
var inst_12000 = (state_12003[(2)]);
var inst_12001 = cljs.core.async.close_BANG_.call(null,out);
var state_12003__$1 = (function (){var statearr_12011 = state_12003;
(statearr_12011[(9)] = inst_12000);

return statearr_12011;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12003__$1,inst_12001);
} else {
if((state_val_12004 === (2))){
var inst_11980 = (state_12003[(8)]);
var inst_11982 = (inst_11980 < n);
var state_12003__$1 = state_12003;
if(cljs.core.truth_(inst_11982)){
var statearr_12012_12031 = state_12003__$1;
(statearr_12012_12031[(1)] = (4));

} else {
var statearr_12013_12032 = state_12003__$1;
(statearr_12013_12032[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12004 === (11))){
var inst_11980 = (state_12003[(8)]);
var inst_11990 = (state_12003[(2)]);
var inst_11991 = (inst_11980 + (1));
var inst_11980__$1 = inst_11991;
var state_12003__$1 = (function (){var statearr_12014 = state_12003;
(statearr_12014[(8)] = inst_11980__$1);

(statearr_12014[(10)] = inst_11990);

return statearr_12014;
})();
var statearr_12015_12033 = state_12003__$1;
(statearr_12015_12033[(2)] = null);

(statearr_12015_12033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12004 === (9))){
var state_12003__$1 = state_12003;
var statearr_12016_12034 = state_12003__$1;
(statearr_12016_12034[(2)] = null);

(statearr_12016_12034[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12004 === (5))){
var state_12003__$1 = state_12003;
var statearr_12017_12035 = state_12003__$1;
(statearr_12017_12035[(2)] = null);

(statearr_12017_12035[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12004 === (10))){
var inst_11995 = (state_12003[(2)]);
var state_12003__$1 = state_12003;
var statearr_12018_12036 = state_12003__$1;
(statearr_12018_12036[(2)] = inst_11995);

(statearr_12018_12036[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12004 === (8))){
var inst_11985 = (state_12003[(7)]);
var state_12003__$1 = state_12003;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12003__$1,(11),out,inst_11985);
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
});})(c__5809__auto___12026,out))
;
return ((function (switch__5794__auto__,c__5809__auto___12026,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_12022 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12022[(0)] = state_machine__5795__auto__);

(statearr_12022[(1)] = (1));

return statearr_12022;
});
var state_machine__5795__auto____1 = (function (state_12003){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_12003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e12023){if((e12023 instanceof Object)){
var ex__5798__auto__ = e12023;
var statearr_12024_12037 = state_12003;
(statearr_12024_12037[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12038 = state_12003;
state_12003 = G__12038;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_12003){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_12003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___12026,out))
})();
var state__5811__auto__ = (function (){var statearr_12025 = f__5810__auto__.call(null);
(statearr_12025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___12026);

return statearr_12025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___12026,out))
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
if(typeof cljs.core.async.t12046 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12046 = (function (ch,f,map_LT_,meta12047){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12047 = meta12047;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12046.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t12046.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t12046.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t12046.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t12049 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12049 = (function (fn1,_,meta12047,map_LT_,f,ch,meta12050){
this.fn1 = fn1;
this._ = _;
this.meta12047 = meta12047;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta12050 = meta12050;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12049.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12049.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t12049.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__12039_SHARP_){
return f1.call(null,(((p1__12039_SHARP_ == null))?null:self__.f.call(null,p1__12039_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t12049.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12051){
var self__ = this;
var _12051__$1 = this;
return self__.meta12050;
});})(___$1))
;

cljs.core.async.t12049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12051,meta12050__$1){
var self__ = this;
var _12051__$1 = this;
return (new cljs.core.async.t12049(self__.fn1,self__._,self__.meta12047,self__.map_LT_,self__.f,self__.ch,meta12050__$1));
});})(___$1))
;

cljs.core.async.t12049.cljs$lang$type = true;

cljs.core.async.t12049.cljs$lang$ctorStr = "cljs.core.async/t12049";

cljs.core.async.t12049.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t12049");
});})(___$1))
;

cljs.core.async.__GT_t12049 = ((function (___$1){
return (function __GT_t12049(fn1__$1,___$2,meta12047__$1,map_LT___$1,f__$1,ch__$1,meta12050){
return (new cljs.core.async.t12049(fn1__$1,___$2,meta12047__$1,map_LT___$1,f__$1,ch__$1,meta12050));
});})(___$1))
;

}

return (new cljs.core.async.t12049(fn1,___$1,self__.meta12047,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
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

cljs.core.async.t12046.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t12046.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t12046.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t12046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12048){
var self__ = this;
var _12048__$1 = this;
return self__.meta12047;
});

cljs.core.async.t12046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12048,meta12047__$1){
var self__ = this;
var _12048__$1 = this;
return (new cljs.core.async.t12046(self__.ch,self__.f,self__.map_LT_,meta12047__$1));
});

cljs.core.async.t12046.cljs$lang$type = true;

cljs.core.async.t12046.cljs$lang$ctorStr = "cljs.core.async/t12046";

cljs.core.async.t12046.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t12046");
});

cljs.core.async.__GT_t12046 = (function __GT_t12046(ch__$1,f__$1,map_LT___$1,meta12047){
return (new cljs.core.async.t12046(ch__$1,f__$1,map_LT___$1,meta12047));
});

}

return (new cljs.core.async.t12046(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t12055 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12055 = (function (ch,f,map_GT_,meta12056){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12056 = meta12056;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12055.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t12055.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t12055.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t12055.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t12055.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t12055.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t12055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12057){
var self__ = this;
var _12057__$1 = this;
return self__.meta12056;
});

cljs.core.async.t12055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12057,meta12056__$1){
var self__ = this;
var _12057__$1 = this;
return (new cljs.core.async.t12055(self__.ch,self__.f,self__.map_GT_,meta12056__$1));
});

cljs.core.async.t12055.cljs$lang$type = true;

cljs.core.async.t12055.cljs$lang$ctorStr = "cljs.core.async/t12055";

cljs.core.async.t12055.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t12055");
});

cljs.core.async.__GT_t12055 = (function __GT_t12055(ch__$1,f__$1,map_GT___$1,meta12056){
return (new cljs.core.async.t12055(ch__$1,f__$1,map_GT___$1,meta12056));
});

}

return (new cljs.core.async.t12055(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t12061 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12061 = (function (ch,p,filter_GT_,meta12062){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12062 = meta12062;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12061.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t12061.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t12061.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t12061.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t12061.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t12061.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t12061.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t12061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12063){
var self__ = this;
var _12063__$1 = this;
return self__.meta12062;
});

cljs.core.async.t12061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12063,meta12062__$1){
var self__ = this;
var _12063__$1 = this;
return (new cljs.core.async.t12061(self__.ch,self__.p,self__.filter_GT_,meta12062__$1));
});

cljs.core.async.t12061.cljs$lang$type = true;

cljs.core.async.t12061.cljs$lang$ctorStr = "cljs.core.async/t12061";

cljs.core.async.t12061.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t12061");
});

cljs.core.async.__GT_t12061 = (function __GT_t12061(ch__$1,p__$1,filter_GT___$1,meta12062){
return (new cljs.core.async.t12061(ch__$1,p__$1,filter_GT___$1,meta12062));
});

}

return (new cljs.core.async.t12061(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
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
var c__5809__auto___12146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___12146,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___12146,out){
return (function (state_12125){
var state_val_12126 = (state_12125[(1)]);
if((state_val_12126 === (7))){
var inst_12121 = (state_12125[(2)]);
var state_12125__$1 = state_12125;
var statearr_12127_12147 = state_12125__$1;
(statearr_12127_12147[(2)] = inst_12121);

(statearr_12127_12147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12126 === (1))){
var state_12125__$1 = state_12125;
var statearr_12128_12148 = state_12125__$1;
(statearr_12128_12148[(2)] = null);

(statearr_12128_12148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12126 === (4))){
var inst_12107 = (state_12125[(7)]);
var inst_12107__$1 = (state_12125[(2)]);
var inst_12108 = (inst_12107__$1 == null);
var state_12125__$1 = (function (){var statearr_12129 = state_12125;
(statearr_12129[(7)] = inst_12107__$1);

return statearr_12129;
})();
if(cljs.core.truth_(inst_12108)){
var statearr_12130_12149 = state_12125__$1;
(statearr_12130_12149[(1)] = (5));

} else {
var statearr_12131_12150 = state_12125__$1;
(statearr_12131_12150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12126 === (6))){
var inst_12107 = (state_12125[(7)]);
var inst_12112 = p.call(null,inst_12107);
var state_12125__$1 = state_12125;
if(cljs.core.truth_(inst_12112)){
var statearr_12132_12151 = state_12125__$1;
(statearr_12132_12151[(1)] = (8));

} else {
var statearr_12133_12152 = state_12125__$1;
(statearr_12133_12152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12126 === (3))){
var inst_12123 = (state_12125[(2)]);
var state_12125__$1 = state_12125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12125__$1,inst_12123);
} else {
if((state_val_12126 === (2))){
var state_12125__$1 = state_12125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12125__$1,(4),ch);
} else {
if((state_val_12126 === (11))){
var inst_12115 = (state_12125[(2)]);
var state_12125__$1 = state_12125;
var statearr_12134_12153 = state_12125__$1;
(statearr_12134_12153[(2)] = inst_12115);

(statearr_12134_12153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12126 === (9))){
var state_12125__$1 = state_12125;
var statearr_12135_12154 = state_12125__$1;
(statearr_12135_12154[(2)] = null);

(statearr_12135_12154[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12126 === (5))){
var inst_12110 = cljs.core.async.close_BANG_.call(null,out);
var state_12125__$1 = state_12125;
var statearr_12136_12155 = state_12125__$1;
(statearr_12136_12155[(2)] = inst_12110);

(statearr_12136_12155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12126 === (10))){
var inst_12118 = (state_12125[(2)]);
var state_12125__$1 = (function (){var statearr_12137 = state_12125;
(statearr_12137[(8)] = inst_12118);

return statearr_12137;
})();
var statearr_12138_12156 = state_12125__$1;
(statearr_12138_12156[(2)] = null);

(statearr_12138_12156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12126 === (8))){
var inst_12107 = (state_12125[(7)]);
var state_12125__$1 = state_12125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12125__$1,(11),out,inst_12107);
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
});})(c__5809__auto___12146,out))
;
return ((function (switch__5794__auto__,c__5809__auto___12146,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_12142 = [null,null,null,null,null,null,null,null,null];
(statearr_12142[(0)] = state_machine__5795__auto__);

(statearr_12142[(1)] = (1));

return statearr_12142;
});
var state_machine__5795__auto____1 = (function (state_12125){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_12125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e12143){if((e12143 instanceof Object)){
var ex__5798__auto__ = e12143;
var statearr_12144_12157 = state_12125;
(statearr_12144_12157[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12158 = state_12125;
state_12125 = G__12158;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_12125){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_12125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___12146,out))
})();
var state__5811__auto__ = (function (){var statearr_12145 = f__5810__auto__.call(null);
(statearr_12145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___12146);

return statearr_12145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___12146,out))
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
return (function (state_12324){
var state_val_12325 = (state_12324[(1)]);
if((state_val_12325 === (7))){
var inst_12320 = (state_12324[(2)]);
var state_12324__$1 = state_12324;
var statearr_12326_12367 = state_12324__$1;
(statearr_12326_12367[(2)] = inst_12320);

(statearr_12326_12367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (20))){
var inst_12290 = (state_12324[(7)]);
var inst_12301 = (state_12324[(2)]);
var inst_12302 = cljs.core.next.call(null,inst_12290);
var inst_12276 = inst_12302;
var inst_12277 = null;
var inst_12278 = (0);
var inst_12279 = (0);
var state_12324__$1 = (function (){var statearr_12327 = state_12324;
(statearr_12327[(8)] = inst_12276);

(statearr_12327[(9)] = inst_12279);

(statearr_12327[(10)] = inst_12278);

(statearr_12327[(11)] = inst_12301);

(statearr_12327[(12)] = inst_12277);

return statearr_12327;
})();
var statearr_12328_12368 = state_12324__$1;
(statearr_12328_12368[(2)] = null);

(statearr_12328_12368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (1))){
var state_12324__$1 = state_12324;
var statearr_12329_12369 = state_12324__$1;
(statearr_12329_12369[(2)] = null);

(statearr_12329_12369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (4))){
var inst_12265 = (state_12324[(13)]);
var inst_12265__$1 = (state_12324[(2)]);
var inst_12266 = (inst_12265__$1 == null);
var state_12324__$1 = (function (){var statearr_12330 = state_12324;
(statearr_12330[(13)] = inst_12265__$1);

return statearr_12330;
})();
if(cljs.core.truth_(inst_12266)){
var statearr_12331_12370 = state_12324__$1;
(statearr_12331_12370[(1)] = (5));

} else {
var statearr_12332_12371 = state_12324__$1;
(statearr_12332_12371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (15))){
var state_12324__$1 = state_12324;
var statearr_12336_12372 = state_12324__$1;
(statearr_12336_12372[(2)] = null);

(statearr_12336_12372[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (21))){
var state_12324__$1 = state_12324;
var statearr_12337_12373 = state_12324__$1;
(statearr_12337_12373[(2)] = null);

(statearr_12337_12373[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (13))){
var inst_12276 = (state_12324[(8)]);
var inst_12279 = (state_12324[(9)]);
var inst_12278 = (state_12324[(10)]);
var inst_12277 = (state_12324[(12)]);
var inst_12286 = (state_12324[(2)]);
var inst_12287 = (inst_12279 + (1));
var tmp12333 = inst_12276;
var tmp12334 = inst_12278;
var tmp12335 = inst_12277;
var inst_12276__$1 = tmp12333;
var inst_12277__$1 = tmp12335;
var inst_12278__$1 = tmp12334;
var inst_12279__$1 = inst_12287;
var state_12324__$1 = (function (){var statearr_12338 = state_12324;
(statearr_12338[(8)] = inst_12276__$1);

(statearr_12338[(9)] = inst_12279__$1);

(statearr_12338[(14)] = inst_12286);

(statearr_12338[(10)] = inst_12278__$1);

(statearr_12338[(12)] = inst_12277__$1);

return statearr_12338;
})();
var statearr_12339_12374 = state_12324__$1;
(statearr_12339_12374[(2)] = null);

(statearr_12339_12374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (22))){
var state_12324__$1 = state_12324;
var statearr_12340_12375 = state_12324__$1;
(statearr_12340_12375[(2)] = null);

(statearr_12340_12375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (6))){
var inst_12265 = (state_12324[(13)]);
var inst_12274 = f.call(null,inst_12265);
var inst_12275 = cljs.core.seq.call(null,inst_12274);
var inst_12276 = inst_12275;
var inst_12277 = null;
var inst_12278 = (0);
var inst_12279 = (0);
var state_12324__$1 = (function (){var statearr_12341 = state_12324;
(statearr_12341[(8)] = inst_12276);

(statearr_12341[(9)] = inst_12279);

(statearr_12341[(10)] = inst_12278);

(statearr_12341[(12)] = inst_12277);

return statearr_12341;
})();
var statearr_12342_12376 = state_12324__$1;
(statearr_12342_12376[(2)] = null);

(statearr_12342_12376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (17))){
var inst_12290 = (state_12324[(7)]);
var inst_12294 = cljs.core.chunk_first.call(null,inst_12290);
var inst_12295 = cljs.core.chunk_rest.call(null,inst_12290);
var inst_12296 = cljs.core.count.call(null,inst_12294);
var inst_12276 = inst_12295;
var inst_12277 = inst_12294;
var inst_12278 = inst_12296;
var inst_12279 = (0);
var state_12324__$1 = (function (){var statearr_12343 = state_12324;
(statearr_12343[(8)] = inst_12276);

(statearr_12343[(9)] = inst_12279);

(statearr_12343[(10)] = inst_12278);

(statearr_12343[(12)] = inst_12277);

return statearr_12343;
})();
var statearr_12344_12377 = state_12324__$1;
(statearr_12344_12377[(2)] = null);

(statearr_12344_12377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (3))){
var inst_12322 = (state_12324[(2)]);
var state_12324__$1 = state_12324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12324__$1,inst_12322);
} else {
if((state_val_12325 === (12))){
var inst_12310 = (state_12324[(2)]);
var state_12324__$1 = state_12324;
var statearr_12345_12378 = state_12324__$1;
(statearr_12345_12378[(2)] = inst_12310);

(statearr_12345_12378[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (2))){
var state_12324__$1 = state_12324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12324__$1,(4),in$);
} else {
if((state_val_12325 === (23))){
var inst_12318 = (state_12324[(2)]);
var state_12324__$1 = state_12324;
var statearr_12346_12379 = state_12324__$1;
(statearr_12346_12379[(2)] = inst_12318);

(statearr_12346_12379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (19))){
var inst_12305 = (state_12324[(2)]);
var state_12324__$1 = state_12324;
var statearr_12347_12380 = state_12324__$1;
(statearr_12347_12380[(2)] = inst_12305);

(statearr_12347_12380[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (11))){
var inst_12276 = (state_12324[(8)]);
var inst_12290 = (state_12324[(7)]);
var inst_12290__$1 = cljs.core.seq.call(null,inst_12276);
var state_12324__$1 = (function (){var statearr_12348 = state_12324;
(statearr_12348[(7)] = inst_12290__$1);

return statearr_12348;
})();
if(inst_12290__$1){
var statearr_12349_12381 = state_12324__$1;
(statearr_12349_12381[(1)] = (14));

} else {
var statearr_12350_12382 = state_12324__$1;
(statearr_12350_12382[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (9))){
var inst_12312 = (state_12324[(2)]);
var inst_12313 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_12324__$1 = (function (){var statearr_12351 = state_12324;
(statearr_12351[(15)] = inst_12312);

return statearr_12351;
})();
if(cljs.core.truth_(inst_12313)){
var statearr_12352_12383 = state_12324__$1;
(statearr_12352_12383[(1)] = (21));

} else {
var statearr_12353_12384 = state_12324__$1;
(statearr_12353_12384[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (5))){
var inst_12268 = cljs.core.async.close_BANG_.call(null,out);
var state_12324__$1 = state_12324;
var statearr_12354_12385 = state_12324__$1;
(statearr_12354_12385[(2)] = inst_12268);

(statearr_12354_12385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (14))){
var inst_12290 = (state_12324[(7)]);
var inst_12292 = cljs.core.chunked_seq_QMARK_.call(null,inst_12290);
var state_12324__$1 = state_12324;
if(inst_12292){
var statearr_12355_12386 = state_12324__$1;
(statearr_12355_12386[(1)] = (17));

} else {
var statearr_12356_12387 = state_12324__$1;
(statearr_12356_12387[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (16))){
var inst_12308 = (state_12324[(2)]);
var state_12324__$1 = state_12324;
var statearr_12357_12388 = state_12324__$1;
(statearr_12357_12388[(2)] = inst_12308);

(statearr_12357_12388[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12325 === (10))){
var inst_12279 = (state_12324[(9)]);
var inst_12277 = (state_12324[(12)]);
var inst_12284 = cljs.core._nth.call(null,inst_12277,inst_12279);
var state_12324__$1 = state_12324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12324__$1,(13),out,inst_12284);
} else {
if((state_val_12325 === (18))){
var inst_12290 = (state_12324[(7)]);
var inst_12299 = cljs.core.first.call(null,inst_12290);
var state_12324__$1 = state_12324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12324__$1,(20),out,inst_12299);
} else {
if((state_val_12325 === (8))){
var inst_12279 = (state_12324[(9)]);
var inst_12278 = (state_12324[(10)]);
var inst_12281 = (inst_12279 < inst_12278);
var inst_12282 = inst_12281;
var state_12324__$1 = state_12324;
if(cljs.core.truth_(inst_12282)){
var statearr_12358_12389 = state_12324__$1;
(statearr_12358_12389[(1)] = (10));

} else {
var statearr_12359_12390 = state_12324__$1;
(statearr_12359_12390[(1)] = (11));

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
var statearr_12363 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12363[(0)] = state_machine__5795__auto__);

(statearr_12363[(1)] = (1));

return statearr_12363;
});
var state_machine__5795__auto____1 = (function (state_12324){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_12324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e12364){if((e12364 instanceof Object)){
var ex__5798__auto__ = e12364;
var statearr_12365_12391 = state_12324;
(statearr_12365_12391[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12392 = state_12324;
state_12324 = G__12392;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_12324){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_12324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_12366 = f__5810__auto__.call(null);
(statearr_12366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_12366;
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
var c__5809__auto___12489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___12489,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___12489,out){
return (function (state_12464){
var state_val_12465 = (state_12464[(1)]);
if((state_val_12465 === (7))){
var inst_12459 = (state_12464[(2)]);
var state_12464__$1 = state_12464;
var statearr_12466_12490 = state_12464__$1;
(statearr_12466_12490[(2)] = inst_12459);

(statearr_12466_12490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12465 === (1))){
var inst_12441 = null;
var state_12464__$1 = (function (){var statearr_12467 = state_12464;
(statearr_12467[(7)] = inst_12441);

return statearr_12467;
})();
var statearr_12468_12491 = state_12464__$1;
(statearr_12468_12491[(2)] = null);

(statearr_12468_12491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12465 === (4))){
var inst_12444 = (state_12464[(8)]);
var inst_12444__$1 = (state_12464[(2)]);
var inst_12445 = (inst_12444__$1 == null);
var inst_12446 = cljs.core.not.call(null,inst_12445);
var state_12464__$1 = (function (){var statearr_12469 = state_12464;
(statearr_12469[(8)] = inst_12444__$1);

return statearr_12469;
})();
if(inst_12446){
var statearr_12470_12492 = state_12464__$1;
(statearr_12470_12492[(1)] = (5));

} else {
var statearr_12471_12493 = state_12464__$1;
(statearr_12471_12493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12465 === (6))){
var state_12464__$1 = state_12464;
var statearr_12472_12494 = state_12464__$1;
(statearr_12472_12494[(2)] = null);

(statearr_12472_12494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12465 === (3))){
var inst_12461 = (state_12464[(2)]);
var inst_12462 = cljs.core.async.close_BANG_.call(null,out);
var state_12464__$1 = (function (){var statearr_12473 = state_12464;
(statearr_12473[(9)] = inst_12461);

return statearr_12473;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12464__$1,inst_12462);
} else {
if((state_val_12465 === (2))){
var state_12464__$1 = state_12464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12464__$1,(4),ch);
} else {
if((state_val_12465 === (11))){
var inst_12444 = (state_12464[(8)]);
var inst_12453 = (state_12464[(2)]);
var inst_12441 = inst_12444;
var state_12464__$1 = (function (){var statearr_12474 = state_12464;
(statearr_12474[(7)] = inst_12441);

(statearr_12474[(10)] = inst_12453);

return statearr_12474;
})();
var statearr_12475_12495 = state_12464__$1;
(statearr_12475_12495[(2)] = null);

(statearr_12475_12495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12465 === (9))){
var inst_12444 = (state_12464[(8)]);
var state_12464__$1 = state_12464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12464__$1,(11),out,inst_12444);
} else {
if((state_val_12465 === (5))){
var inst_12441 = (state_12464[(7)]);
var inst_12444 = (state_12464[(8)]);
var inst_12448 = cljs.core._EQ_.call(null,inst_12444,inst_12441);
var state_12464__$1 = state_12464;
if(inst_12448){
var statearr_12477_12496 = state_12464__$1;
(statearr_12477_12496[(1)] = (8));

} else {
var statearr_12478_12497 = state_12464__$1;
(statearr_12478_12497[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12465 === (10))){
var inst_12456 = (state_12464[(2)]);
var state_12464__$1 = state_12464;
var statearr_12479_12498 = state_12464__$1;
(statearr_12479_12498[(2)] = inst_12456);

(statearr_12479_12498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12465 === (8))){
var inst_12441 = (state_12464[(7)]);
var tmp12476 = inst_12441;
var inst_12441__$1 = tmp12476;
var state_12464__$1 = (function (){var statearr_12480 = state_12464;
(statearr_12480[(7)] = inst_12441__$1);

return statearr_12480;
})();
var statearr_12481_12499 = state_12464__$1;
(statearr_12481_12499[(2)] = null);

(statearr_12481_12499[(1)] = (2));


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
});})(c__5809__auto___12489,out))
;
return ((function (switch__5794__auto__,c__5809__auto___12489,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_12485 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12485[(0)] = state_machine__5795__auto__);

(statearr_12485[(1)] = (1));

return statearr_12485;
});
var state_machine__5795__auto____1 = (function (state_12464){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_12464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e12486){if((e12486 instanceof Object)){
var ex__5798__auto__ = e12486;
var statearr_12487_12500 = state_12464;
(statearr_12487_12500[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12501 = state_12464;
state_12464 = G__12501;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_12464){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_12464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___12489,out))
})();
var state__5811__auto__ = (function (){var statearr_12488 = f__5810__auto__.call(null);
(statearr_12488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___12489);

return statearr_12488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___12489,out))
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
var c__5809__auto___12636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___12636,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___12636,out){
return (function (state_12606){
var state_val_12607 = (state_12606[(1)]);
if((state_val_12607 === (7))){
var inst_12602 = (state_12606[(2)]);
var state_12606__$1 = state_12606;
var statearr_12608_12637 = state_12606__$1;
(statearr_12608_12637[(2)] = inst_12602);

(statearr_12608_12637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12607 === (1))){
var inst_12569 = (new Array(n));
var inst_12570 = inst_12569;
var inst_12571 = (0);
var state_12606__$1 = (function (){var statearr_12609 = state_12606;
(statearr_12609[(7)] = inst_12571);

(statearr_12609[(8)] = inst_12570);

return statearr_12609;
})();
var statearr_12610_12638 = state_12606__$1;
(statearr_12610_12638[(2)] = null);

(statearr_12610_12638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12607 === (4))){
var inst_12574 = (state_12606[(9)]);
var inst_12574__$1 = (state_12606[(2)]);
var inst_12575 = (inst_12574__$1 == null);
var inst_12576 = cljs.core.not.call(null,inst_12575);
var state_12606__$1 = (function (){var statearr_12611 = state_12606;
(statearr_12611[(9)] = inst_12574__$1);

return statearr_12611;
})();
if(inst_12576){
var statearr_12612_12639 = state_12606__$1;
(statearr_12612_12639[(1)] = (5));

} else {
var statearr_12613_12640 = state_12606__$1;
(statearr_12613_12640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12607 === (15))){
var inst_12596 = (state_12606[(2)]);
var state_12606__$1 = state_12606;
var statearr_12614_12641 = state_12606__$1;
(statearr_12614_12641[(2)] = inst_12596);

(statearr_12614_12641[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12607 === (13))){
var state_12606__$1 = state_12606;
var statearr_12615_12642 = state_12606__$1;
(statearr_12615_12642[(2)] = null);

(statearr_12615_12642[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12607 === (6))){
var inst_12571 = (state_12606[(7)]);
var inst_12592 = (inst_12571 > (0));
var state_12606__$1 = state_12606;
if(cljs.core.truth_(inst_12592)){
var statearr_12616_12643 = state_12606__$1;
(statearr_12616_12643[(1)] = (12));

} else {
var statearr_12617_12644 = state_12606__$1;
(statearr_12617_12644[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12607 === (3))){
var inst_12604 = (state_12606[(2)]);
var state_12606__$1 = state_12606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12606__$1,inst_12604);
} else {
if((state_val_12607 === (12))){
var inst_12570 = (state_12606[(8)]);
var inst_12594 = cljs.core.vec.call(null,inst_12570);
var state_12606__$1 = state_12606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12606__$1,(15),out,inst_12594);
} else {
if((state_val_12607 === (2))){
var state_12606__$1 = state_12606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12606__$1,(4),ch);
} else {
if((state_val_12607 === (11))){
var inst_12586 = (state_12606[(2)]);
var inst_12587 = (new Array(n));
var inst_12570 = inst_12587;
var inst_12571 = (0);
var state_12606__$1 = (function (){var statearr_12618 = state_12606;
(statearr_12618[(7)] = inst_12571);

(statearr_12618[(8)] = inst_12570);

(statearr_12618[(10)] = inst_12586);

return statearr_12618;
})();
var statearr_12619_12645 = state_12606__$1;
(statearr_12619_12645[(2)] = null);

(statearr_12619_12645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12607 === (9))){
var inst_12570 = (state_12606[(8)]);
var inst_12584 = cljs.core.vec.call(null,inst_12570);
var state_12606__$1 = state_12606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12606__$1,(11),out,inst_12584);
} else {
if((state_val_12607 === (5))){
var inst_12579 = (state_12606[(11)]);
var inst_12574 = (state_12606[(9)]);
var inst_12571 = (state_12606[(7)]);
var inst_12570 = (state_12606[(8)]);
var inst_12578 = (inst_12570[inst_12571] = inst_12574);
var inst_12579__$1 = (inst_12571 + (1));
var inst_12580 = (inst_12579__$1 < n);
var state_12606__$1 = (function (){var statearr_12620 = state_12606;
(statearr_12620[(11)] = inst_12579__$1);

(statearr_12620[(12)] = inst_12578);

return statearr_12620;
})();
if(cljs.core.truth_(inst_12580)){
var statearr_12621_12646 = state_12606__$1;
(statearr_12621_12646[(1)] = (8));

} else {
var statearr_12622_12647 = state_12606__$1;
(statearr_12622_12647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12607 === (14))){
var inst_12599 = (state_12606[(2)]);
var inst_12600 = cljs.core.async.close_BANG_.call(null,out);
var state_12606__$1 = (function (){var statearr_12624 = state_12606;
(statearr_12624[(13)] = inst_12599);

return statearr_12624;
})();
var statearr_12625_12648 = state_12606__$1;
(statearr_12625_12648[(2)] = inst_12600);

(statearr_12625_12648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12607 === (10))){
var inst_12590 = (state_12606[(2)]);
var state_12606__$1 = state_12606;
var statearr_12626_12649 = state_12606__$1;
(statearr_12626_12649[(2)] = inst_12590);

(statearr_12626_12649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12607 === (8))){
var inst_12579 = (state_12606[(11)]);
var inst_12570 = (state_12606[(8)]);
var tmp12623 = inst_12570;
var inst_12570__$1 = tmp12623;
var inst_12571 = inst_12579;
var state_12606__$1 = (function (){var statearr_12627 = state_12606;
(statearr_12627[(7)] = inst_12571);

(statearr_12627[(8)] = inst_12570__$1);

return statearr_12627;
})();
var statearr_12628_12650 = state_12606__$1;
(statearr_12628_12650[(2)] = null);

(statearr_12628_12650[(1)] = (2));


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
});})(c__5809__auto___12636,out))
;
return ((function (switch__5794__auto__,c__5809__auto___12636,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_12632 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12632[(0)] = state_machine__5795__auto__);

(statearr_12632[(1)] = (1));

return statearr_12632;
});
var state_machine__5795__auto____1 = (function (state_12606){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_12606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e12633){if((e12633 instanceof Object)){
var ex__5798__auto__ = e12633;
var statearr_12634_12651 = state_12606;
(statearr_12634_12651[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12652 = state_12606;
state_12606 = G__12652;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_12606){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_12606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___12636,out))
})();
var state__5811__auto__ = (function (){var statearr_12635 = f__5810__auto__.call(null);
(statearr_12635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___12636);

return statearr_12635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___12636,out))
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
var c__5809__auto___12795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___12795,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___12795,out){
return (function (state_12765){
var state_val_12766 = (state_12765[(1)]);
if((state_val_12766 === (7))){
var inst_12761 = (state_12765[(2)]);
var state_12765__$1 = state_12765;
var statearr_12767_12796 = state_12765__$1;
(statearr_12767_12796[(2)] = inst_12761);

(statearr_12767_12796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12766 === (1))){
var inst_12724 = [];
var inst_12725 = inst_12724;
var inst_12726 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12765__$1 = (function (){var statearr_12768 = state_12765;
(statearr_12768[(7)] = inst_12725);

(statearr_12768[(8)] = inst_12726);

return statearr_12768;
})();
var statearr_12769_12797 = state_12765__$1;
(statearr_12769_12797[(2)] = null);

(statearr_12769_12797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12766 === (4))){
var inst_12729 = (state_12765[(9)]);
var inst_12729__$1 = (state_12765[(2)]);
var inst_12730 = (inst_12729__$1 == null);
var inst_12731 = cljs.core.not.call(null,inst_12730);
var state_12765__$1 = (function (){var statearr_12770 = state_12765;
(statearr_12770[(9)] = inst_12729__$1);

return statearr_12770;
})();
if(inst_12731){
var statearr_12771_12798 = state_12765__$1;
(statearr_12771_12798[(1)] = (5));

} else {
var statearr_12772_12799 = state_12765__$1;
(statearr_12772_12799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12766 === (15))){
var inst_12755 = (state_12765[(2)]);
var state_12765__$1 = state_12765;
var statearr_12773_12800 = state_12765__$1;
(statearr_12773_12800[(2)] = inst_12755);

(statearr_12773_12800[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12766 === (13))){
var state_12765__$1 = state_12765;
var statearr_12774_12801 = state_12765__$1;
(statearr_12774_12801[(2)] = null);

(statearr_12774_12801[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12766 === (6))){
var inst_12725 = (state_12765[(7)]);
var inst_12750 = inst_12725.length;
var inst_12751 = (inst_12750 > (0));
var state_12765__$1 = state_12765;
if(cljs.core.truth_(inst_12751)){
var statearr_12775_12802 = state_12765__$1;
(statearr_12775_12802[(1)] = (12));

} else {
var statearr_12776_12803 = state_12765__$1;
(statearr_12776_12803[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12766 === (3))){
var inst_12763 = (state_12765[(2)]);
var state_12765__$1 = state_12765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12765__$1,inst_12763);
} else {
if((state_val_12766 === (12))){
var inst_12725 = (state_12765[(7)]);
var inst_12753 = cljs.core.vec.call(null,inst_12725);
var state_12765__$1 = state_12765;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12765__$1,(15),out,inst_12753);
} else {
if((state_val_12766 === (2))){
var state_12765__$1 = state_12765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12765__$1,(4),ch);
} else {
if((state_val_12766 === (11))){
var inst_12733 = (state_12765[(10)]);
var inst_12729 = (state_12765[(9)]);
var inst_12743 = (state_12765[(2)]);
var inst_12744 = [];
var inst_12745 = inst_12744.push(inst_12729);
var inst_12725 = inst_12744;
var inst_12726 = inst_12733;
var state_12765__$1 = (function (){var statearr_12777 = state_12765;
(statearr_12777[(11)] = inst_12745);

(statearr_12777[(7)] = inst_12725);

(statearr_12777[(12)] = inst_12743);

(statearr_12777[(8)] = inst_12726);

return statearr_12777;
})();
var statearr_12778_12804 = state_12765__$1;
(statearr_12778_12804[(2)] = null);

(statearr_12778_12804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12766 === (9))){
var inst_12725 = (state_12765[(7)]);
var inst_12741 = cljs.core.vec.call(null,inst_12725);
var state_12765__$1 = state_12765;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12765__$1,(11),out,inst_12741);
} else {
if((state_val_12766 === (5))){
var inst_12726 = (state_12765[(8)]);
var inst_12733 = (state_12765[(10)]);
var inst_12729 = (state_12765[(9)]);
var inst_12733__$1 = f.call(null,inst_12729);
var inst_12734 = cljs.core._EQ_.call(null,inst_12733__$1,inst_12726);
var inst_12735 = cljs.core.keyword_identical_QMARK_.call(null,inst_12726,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12736 = (inst_12734) || (inst_12735);
var state_12765__$1 = (function (){var statearr_12779 = state_12765;
(statearr_12779[(10)] = inst_12733__$1);

return statearr_12779;
})();
if(cljs.core.truth_(inst_12736)){
var statearr_12780_12805 = state_12765__$1;
(statearr_12780_12805[(1)] = (8));

} else {
var statearr_12781_12806 = state_12765__$1;
(statearr_12781_12806[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12766 === (14))){
var inst_12758 = (state_12765[(2)]);
var inst_12759 = cljs.core.async.close_BANG_.call(null,out);
var state_12765__$1 = (function (){var statearr_12783 = state_12765;
(statearr_12783[(13)] = inst_12758);

return statearr_12783;
})();
var statearr_12784_12807 = state_12765__$1;
(statearr_12784_12807[(2)] = inst_12759);

(statearr_12784_12807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12766 === (10))){
var inst_12748 = (state_12765[(2)]);
var state_12765__$1 = state_12765;
var statearr_12785_12808 = state_12765__$1;
(statearr_12785_12808[(2)] = inst_12748);

(statearr_12785_12808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12766 === (8))){
var inst_12725 = (state_12765[(7)]);
var inst_12733 = (state_12765[(10)]);
var inst_12729 = (state_12765[(9)]);
var inst_12738 = inst_12725.push(inst_12729);
var tmp12782 = inst_12725;
var inst_12725__$1 = tmp12782;
var inst_12726 = inst_12733;
var state_12765__$1 = (function (){var statearr_12786 = state_12765;
(statearr_12786[(7)] = inst_12725__$1);

(statearr_12786[(14)] = inst_12738);

(statearr_12786[(8)] = inst_12726);

return statearr_12786;
})();
var statearr_12787_12809 = state_12765__$1;
(statearr_12787_12809[(2)] = null);

(statearr_12787_12809[(1)] = (2));


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
});})(c__5809__auto___12795,out))
;
return ((function (switch__5794__auto__,c__5809__auto___12795,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_12791 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12791[(0)] = state_machine__5795__auto__);

(statearr_12791[(1)] = (1));

return statearr_12791;
});
var state_machine__5795__auto____1 = (function (state_12765){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_12765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e12792){if((e12792 instanceof Object)){
var ex__5798__auto__ = e12792;
var statearr_12793_12810 = state_12765;
(statearr_12793_12810[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12811 = state_12765;
state_12765 = G__12811;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_12765){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_12765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___12795,out))
})();
var state__5811__auto__ = (function (){var statearr_12794 = f__5810__auto__.call(null);
(statearr_12794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___12795);

return statearr_12794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___12795,out))
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
