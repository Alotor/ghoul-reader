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
if(typeof cljs.core.async.t19563 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19563 = (function (f,fn_handler,meta19564){
this.f = f;
this.fn_handler = fn_handler;
this.meta19564 = meta19564;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19563.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19563.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t19563.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t19563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19565){
var self__ = this;
var _19565__$1 = this;
return self__.meta19564;
});

cljs.core.async.t19563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19565,meta19564__$1){
var self__ = this;
var _19565__$1 = this;
return (new cljs.core.async.t19563(self__.f,self__.fn_handler,meta19564__$1));
});

cljs.core.async.t19563.cljs$lang$type = true;

cljs.core.async.t19563.cljs$lang$ctorStr = "cljs.core.async/t19563";

cljs.core.async.t19563.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t19563");
});

cljs.core.async.__GT_t19563 = (function __GT_t19563(f__$1,fn_handler__$1,meta19564){
return (new cljs.core.async.t19563(f__$1,fn_handler__$1,meta19564));
});

}

return (new cljs.core.async.t19563(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
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
var G__19567 = buff;
if(G__19567){
var bit__4284__auto__ = null;
if(cljs.core.truth_((function (){var or__3608__auto__ = bit__4284__auto__;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return G__19567.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__19567.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19567);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19567);
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
var val_19568 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19568);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19568,ret){
return (function (){
return fn1.call(null,val_19568);
});})(val_19568,ret))
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
var n__4490__auto___19569 = n;
var x_19570 = (0);
while(true){
if((x_19570 < n__4490__auto___19569)){
(a[x_19570] = (0));

var G__19571 = (x_19570 + (1));
x_19570 = G__19571;
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

var G__19572 = (i + (1));
i = G__19572;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t19576 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19576 = (function (flag,alt_flag,meta19577){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta19577 = meta19577;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19576.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19576.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t19576.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t19576.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19578){
var self__ = this;
var _19578__$1 = this;
return self__.meta19577;
});})(flag))
;

cljs.core.async.t19576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19578,meta19577__$1){
var self__ = this;
var _19578__$1 = this;
return (new cljs.core.async.t19576(self__.flag,self__.alt_flag,meta19577__$1));
});})(flag))
;

cljs.core.async.t19576.cljs$lang$type = true;

cljs.core.async.t19576.cljs$lang$ctorStr = "cljs.core.async/t19576";

cljs.core.async.t19576.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t19576");
});})(flag))
;

cljs.core.async.__GT_t19576 = ((function (flag){
return (function __GT_t19576(flag__$1,alt_flag__$1,meta19577){
return (new cljs.core.async.t19576(flag__$1,alt_flag__$1,meta19577));
});})(flag))
;

}

return (new cljs.core.async.t19576(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t19582 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19582 = (function (cb,flag,alt_handler,meta19583){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta19583 = meta19583;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19582.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19582.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t19582.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t19582.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19584){
var self__ = this;
var _19584__$1 = this;
return self__.meta19583;
});

cljs.core.async.t19582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19584,meta19583__$1){
var self__ = this;
var _19584__$1 = this;
return (new cljs.core.async.t19582(self__.cb,self__.flag,self__.alt_handler,meta19583__$1));
});

cljs.core.async.t19582.cljs$lang$type = true;

cljs.core.async.t19582.cljs$lang$ctorStr = "cljs.core.async/t19582";

cljs.core.async.t19582.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t19582");
});

cljs.core.async.__GT_t19582 = (function __GT_t19582(cb__$1,flag__$1,alt_handler__$1,meta19583){
return (new cljs.core.async.t19582(cb__$1,flag__$1,alt_handler__$1,meta19583));
});

}

return (new cljs.core.async.t19582(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
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
return (function (p1__19585_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19585_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19586_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19586_SHARP_,port], null));
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
var G__19587 = (i + (1));
i = G__19587;
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
var alts_BANG___delegate = function (ports,p__19588){
var map__19590 = p__19588;
var map__19590__$1 = ((cljs.core.seq_QMARK_.call(null,map__19590))?cljs.core.apply.call(null,cljs.core.hash_map,map__19590):map__19590);
var opts = map__19590__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__19588 = null;
if (arguments.length > 1) {
  p__19588 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__19588);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__19591){
var ports = cljs.core.first(arglist__19591);
var p__19588 = cljs.core.rest(arglist__19591);
return alts_BANG___delegate(ports,p__19588);
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
var c__5809__auto___19686 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___19686){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___19686){
return (function (state_19662){
var state_val_19663 = (state_19662[(1)]);
if((state_val_19663 === (7))){
var inst_19658 = (state_19662[(2)]);
var state_19662__$1 = state_19662;
var statearr_19664_19687 = state_19662__$1;
(statearr_19664_19687[(2)] = inst_19658);

(statearr_19664_19687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19663 === (1))){
var state_19662__$1 = state_19662;
var statearr_19665_19688 = state_19662__$1;
(statearr_19665_19688[(2)] = null);

(statearr_19665_19688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19663 === (4))){
var inst_19641 = (state_19662[(7)]);
var inst_19641__$1 = (state_19662[(2)]);
var inst_19642 = (inst_19641__$1 == null);
var state_19662__$1 = (function (){var statearr_19666 = state_19662;
(statearr_19666[(7)] = inst_19641__$1);

return statearr_19666;
})();
if(cljs.core.truth_(inst_19642)){
var statearr_19667_19689 = state_19662__$1;
(statearr_19667_19689[(1)] = (5));

} else {
var statearr_19668_19690 = state_19662__$1;
(statearr_19668_19690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19663 === (13))){
var state_19662__$1 = state_19662;
var statearr_19669_19691 = state_19662__$1;
(statearr_19669_19691[(2)] = null);

(statearr_19669_19691[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19663 === (6))){
var inst_19641 = (state_19662[(7)]);
var state_19662__$1 = state_19662;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19662__$1,(11),to,inst_19641);
} else {
if((state_val_19663 === (3))){
var inst_19660 = (state_19662[(2)]);
var state_19662__$1 = state_19662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19662__$1,inst_19660);
} else {
if((state_val_19663 === (12))){
var state_19662__$1 = state_19662;
var statearr_19670_19692 = state_19662__$1;
(statearr_19670_19692[(2)] = null);

(statearr_19670_19692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19663 === (2))){
var state_19662__$1 = state_19662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19662__$1,(4),from);
} else {
if((state_val_19663 === (11))){
var inst_19651 = (state_19662[(2)]);
var state_19662__$1 = state_19662;
if(cljs.core.truth_(inst_19651)){
var statearr_19671_19693 = state_19662__$1;
(statearr_19671_19693[(1)] = (12));

} else {
var statearr_19672_19694 = state_19662__$1;
(statearr_19672_19694[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19663 === (9))){
var state_19662__$1 = state_19662;
var statearr_19673_19695 = state_19662__$1;
(statearr_19673_19695[(2)] = null);

(statearr_19673_19695[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19663 === (5))){
var state_19662__$1 = state_19662;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19674_19696 = state_19662__$1;
(statearr_19674_19696[(1)] = (8));

} else {
var statearr_19675_19697 = state_19662__$1;
(statearr_19675_19697[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19663 === (14))){
var inst_19656 = (state_19662[(2)]);
var state_19662__$1 = state_19662;
var statearr_19676_19698 = state_19662__$1;
(statearr_19676_19698[(2)] = inst_19656);

(statearr_19676_19698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19663 === (10))){
var inst_19648 = (state_19662[(2)]);
var state_19662__$1 = state_19662;
var statearr_19677_19699 = state_19662__$1;
(statearr_19677_19699[(2)] = inst_19648);

(statearr_19677_19699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19663 === (8))){
var inst_19645 = cljs.core.async.close_BANG_.call(null,to);
var state_19662__$1 = state_19662;
var statearr_19678_19700 = state_19662__$1;
(statearr_19678_19700[(2)] = inst_19645);

(statearr_19678_19700[(1)] = (10));


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
});})(c__5809__auto___19686))
;
return ((function (switch__5794__auto__,c__5809__auto___19686){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_19682 = [null,null,null,null,null,null,null,null];
(statearr_19682[(0)] = state_machine__5795__auto__);

(statearr_19682[(1)] = (1));

return statearr_19682;
});
var state_machine__5795__auto____1 = (function (state_19662){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_19662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e19683){if((e19683 instanceof Object)){
var ex__5798__auto__ = e19683;
var statearr_19684_19701 = state_19662;
(statearr_19684_19701[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19702 = state_19662;
state_19662 = G__19702;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_19662){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_19662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___19686))
})();
var state__5811__auto__ = (function (){var statearr_19685 = f__5810__auto__.call(null);
(statearr_19685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___19686);

return statearr_19685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___19686))
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
return (function (p__19886){
var vec__19887 = p__19886;
var v = cljs.core.nth.call(null,vec__19887,(0),null);
var p = cljs.core.nth.call(null,vec__19887,(1),null);
var job = vec__19887;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__5809__auto___20069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___20069,res,vec__19887,v,p,job,jobs,results){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___20069,res,vec__19887,v,p,job,jobs,results){
return (function (state_19892){
var state_val_19893 = (state_19892[(1)]);
if((state_val_19893 === (2))){
var inst_19889 = (state_19892[(2)]);
var inst_19890 = cljs.core.async.close_BANG_.call(null,res);
var state_19892__$1 = (function (){var statearr_19894 = state_19892;
(statearr_19894[(7)] = inst_19889);

return statearr_19894;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19892__$1,inst_19890);
} else {
if((state_val_19893 === (1))){
var state_19892__$1 = state_19892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19892__$1,(2),res,v);
} else {
return null;
}
}
});})(c__5809__auto___20069,res,vec__19887,v,p,job,jobs,results))
;
return ((function (switch__5794__auto__,c__5809__auto___20069,res,vec__19887,v,p,job,jobs,results){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_19898 = [null,null,null,null,null,null,null,null];
(statearr_19898[(0)] = state_machine__5795__auto__);

(statearr_19898[(1)] = (1));

return statearr_19898;
});
var state_machine__5795__auto____1 = (function (state_19892){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_19892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e19899){if((e19899 instanceof Object)){
var ex__5798__auto__ = e19899;
var statearr_19900_20070 = state_19892;
(statearr_19900_20070[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20071 = state_19892;
state_19892 = G__20071;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_19892){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_19892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___20069,res,vec__19887,v,p,job,jobs,results))
})();
var state__5811__auto__ = (function (){var statearr_19901 = f__5810__auto__.call(null);
(statearr_19901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___20069);

return statearr_19901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___20069,res,vec__19887,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19902){
var vec__19903 = p__19902;
var v = cljs.core.nth.call(null,vec__19903,(0),null);
var p = cljs.core.nth.call(null,vec__19903,(1),null);
var job = vec__19903;
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
var n__4490__auto___20072 = n;
var __20073 = (0);
while(true){
if((__20073 < n__4490__auto___20072)){
var G__19904_20074 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19904_20074) {
case "async":
var c__5809__auto___20076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20073,c__5809__auto___20076,G__19904_20074,n__4490__auto___20072,jobs,results,process,async){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (__20073,c__5809__auto___20076,G__19904_20074,n__4490__auto___20072,jobs,results,process,async){
return (function (state_19917){
var state_val_19918 = (state_19917[(1)]);
if((state_val_19918 === (7))){
var inst_19913 = (state_19917[(2)]);
var state_19917__$1 = state_19917;
var statearr_19919_20077 = state_19917__$1;
(statearr_19919_20077[(2)] = inst_19913);

(statearr_19919_20077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (6))){
var state_19917__$1 = state_19917;
var statearr_19920_20078 = state_19917__$1;
(statearr_19920_20078[(2)] = null);

(statearr_19920_20078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (5))){
var state_19917__$1 = state_19917;
var statearr_19921_20079 = state_19917__$1;
(statearr_19921_20079[(2)] = null);

(statearr_19921_20079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (4))){
var inst_19907 = (state_19917[(2)]);
var inst_19908 = async.call(null,inst_19907);
var state_19917__$1 = state_19917;
if(cljs.core.truth_(inst_19908)){
var statearr_19922_20080 = state_19917__$1;
(statearr_19922_20080[(1)] = (5));

} else {
var statearr_19923_20081 = state_19917__$1;
(statearr_19923_20081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (3))){
var inst_19915 = (state_19917[(2)]);
var state_19917__$1 = state_19917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19917__$1,inst_19915);
} else {
if((state_val_19918 === (2))){
var state_19917__$1 = state_19917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19917__$1,(4),jobs);
} else {
if((state_val_19918 === (1))){
var state_19917__$1 = state_19917;
var statearr_19924_20082 = state_19917__$1;
(statearr_19924_20082[(2)] = null);

(statearr_19924_20082[(1)] = (2));


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
});})(__20073,c__5809__auto___20076,G__19904_20074,n__4490__auto___20072,jobs,results,process,async))
;
return ((function (__20073,switch__5794__auto__,c__5809__auto___20076,G__19904_20074,n__4490__auto___20072,jobs,results,process,async){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_19928 = [null,null,null,null,null,null,null];
(statearr_19928[(0)] = state_machine__5795__auto__);

(statearr_19928[(1)] = (1));

return statearr_19928;
});
var state_machine__5795__auto____1 = (function (state_19917){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_19917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e19929){if((e19929 instanceof Object)){
var ex__5798__auto__ = e19929;
var statearr_19930_20083 = state_19917;
(statearr_19930_20083[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20084 = state_19917;
state_19917 = G__20084;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_19917){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_19917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(__20073,switch__5794__auto__,c__5809__auto___20076,G__19904_20074,n__4490__auto___20072,jobs,results,process,async))
})();
var state__5811__auto__ = (function (){var statearr_19931 = f__5810__auto__.call(null);
(statearr_19931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___20076);

return statearr_19931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(__20073,c__5809__auto___20076,G__19904_20074,n__4490__auto___20072,jobs,results,process,async))
);


break;
case "compute":
var c__5809__auto___20085 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20073,c__5809__auto___20085,G__19904_20074,n__4490__auto___20072,jobs,results,process,async){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (__20073,c__5809__auto___20085,G__19904_20074,n__4490__auto___20072,jobs,results,process,async){
return (function (state_19944){
var state_val_19945 = (state_19944[(1)]);
if((state_val_19945 === (7))){
var inst_19940 = (state_19944[(2)]);
var state_19944__$1 = state_19944;
var statearr_19946_20086 = state_19944__$1;
(statearr_19946_20086[(2)] = inst_19940);

(statearr_19946_20086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19945 === (6))){
var state_19944__$1 = state_19944;
var statearr_19947_20087 = state_19944__$1;
(statearr_19947_20087[(2)] = null);

(statearr_19947_20087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19945 === (5))){
var state_19944__$1 = state_19944;
var statearr_19948_20088 = state_19944__$1;
(statearr_19948_20088[(2)] = null);

(statearr_19948_20088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19945 === (4))){
var inst_19934 = (state_19944[(2)]);
var inst_19935 = process.call(null,inst_19934);
var state_19944__$1 = state_19944;
if(cljs.core.truth_(inst_19935)){
var statearr_19949_20089 = state_19944__$1;
(statearr_19949_20089[(1)] = (5));

} else {
var statearr_19950_20090 = state_19944__$1;
(statearr_19950_20090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19945 === (3))){
var inst_19942 = (state_19944[(2)]);
var state_19944__$1 = state_19944;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19944__$1,inst_19942);
} else {
if((state_val_19945 === (2))){
var state_19944__$1 = state_19944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19944__$1,(4),jobs);
} else {
if((state_val_19945 === (1))){
var state_19944__$1 = state_19944;
var statearr_19951_20091 = state_19944__$1;
(statearr_19951_20091[(2)] = null);

(statearr_19951_20091[(1)] = (2));


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
});})(__20073,c__5809__auto___20085,G__19904_20074,n__4490__auto___20072,jobs,results,process,async))
;
return ((function (__20073,switch__5794__auto__,c__5809__auto___20085,G__19904_20074,n__4490__auto___20072,jobs,results,process,async){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_19955 = [null,null,null,null,null,null,null];
(statearr_19955[(0)] = state_machine__5795__auto__);

(statearr_19955[(1)] = (1));

return statearr_19955;
});
var state_machine__5795__auto____1 = (function (state_19944){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_19944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e19956){if((e19956 instanceof Object)){
var ex__5798__auto__ = e19956;
var statearr_19957_20092 = state_19944;
(statearr_19957_20092[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20093 = state_19944;
state_19944 = G__20093;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_19944){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_19944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(__20073,switch__5794__auto__,c__5809__auto___20085,G__19904_20074,n__4490__auto___20072,jobs,results,process,async))
})();
var state__5811__auto__ = (function (){var statearr_19958 = f__5810__auto__.call(null);
(statearr_19958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___20085);

return statearr_19958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(__20073,c__5809__auto___20085,G__19904_20074,n__4490__auto___20072,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20094 = (__20073 + (1));
__20073 = G__20094;
continue;
} else {
}
break;
}

var c__5809__auto___20095 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___20095,jobs,results,process,async){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___20095,jobs,results,process,async){
return (function (state_19980){
var state_val_19981 = (state_19980[(1)]);
if((state_val_19981 === (9))){
var inst_19973 = (state_19980[(2)]);
var state_19980__$1 = (function (){var statearr_19982 = state_19980;
(statearr_19982[(7)] = inst_19973);

return statearr_19982;
})();
var statearr_19983_20096 = state_19980__$1;
(statearr_19983_20096[(2)] = null);

(statearr_19983_20096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19981 === (8))){
var inst_19966 = (state_19980[(8)]);
var inst_19971 = (state_19980[(2)]);
var state_19980__$1 = (function (){var statearr_19984 = state_19980;
(statearr_19984[(9)] = inst_19971);

return statearr_19984;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19980__$1,(9),results,inst_19966);
} else {
if((state_val_19981 === (7))){
var inst_19976 = (state_19980[(2)]);
var state_19980__$1 = state_19980;
var statearr_19985_20097 = state_19980__$1;
(statearr_19985_20097[(2)] = inst_19976);

(statearr_19985_20097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19981 === (6))){
var inst_19966 = (state_19980[(8)]);
var inst_19961 = (state_19980[(10)]);
var inst_19966__$1 = cljs.core.async.chan.call(null,(1));
var inst_19967 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19968 = [inst_19961,inst_19966__$1];
var inst_19969 = (new cljs.core.PersistentVector(null,2,(5),inst_19967,inst_19968,null));
var state_19980__$1 = (function (){var statearr_19986 = state_19980;
(statearr_19986[(8)] = inst_19966__$1);

return statearr_19986;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19980__$1,(8),jobs,inst_19969);
} else {
if((state_val_19981 === (5))){
var inst_19964 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19980__$1 = state_19980;
var statearr_19987_20098 = state_19980__$1;
(statearr_19987_20098[(2)] = inst_19964);

(statearr_19987_20098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19981 === (4))){
var inst_19961 = (state_19980[(10)]);
var inst_19961__$1 = (state_19980[(2)]);
var inst_19962 = (inst_19961__$1 == null);
var state_19980__$1 = (function (){var statearr_19988 = state_19980;
(statearr_19988[(10)] = inst_19961__$1);

return statearr_19988;
})();
if(cljs.core.truth_(inst_19962)){
var statearr_19989_20099 = state_19980__$1;
(statearr_19989_20099[(1)] = (5));

} else {
var statearr_19990_20100 = state_19980__$1;
(statearr_19990_20100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19981 === (3))){
var inst_19978 = (state_19980[(2)]);
var state_19980__$1 = state_19980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19980__$1,inst_19978);
} else {
if((state_val_19981 === (2))){
var state_19980__$1 = state_19980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19980__$1,(4),from);
} else {
if((state_val_19981 === (1))){
var state_19980__$1 = state_19980;
var statearr_19991_20101 = state_19980__$1;
(statearr_19991_20101[(2)] = null);

(statearr_19991_20101[(1)] = (2));


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
});})(c__5809__auto___20095,jobs,results,process,async))
;
return ((function (switch__5794__auto__,c__5809__auto___20095,jobs,results,process,async){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_19995 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19995[(0)] = state_machine__5795__auto__);

(statearr_19995[(1)] = (1));

return statearr_19995;
});
var state_machine__5795__auto____1 = (function (state_19980){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_19980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e19996){if((e19996 instanceof Object)){
var ex__5798__auto__ = e19996;
var statearr_19997_20102 = state_19980;
(statearr_19997_20102[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20103 = state_19980;
state_19980 = G__20103;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_19980){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_19980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___20095,jobs,results,process,async))
})();
var state__5811__auto__ = (function (){var statearr_19998 = f__5810__auto__.call(null);
(statearr_19998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___20095);

return statearr_19998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___20095,jobs,results,process,async))
);


var c__5809__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto__,jobs,results,process,async){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto__,jobs,results,process,async){
return (function (state_20036){
var state_val_20037 = (state_20036[(1)]);
if((state_val_20037 === (7))){
var inst_20032 = (state_20036[(2)]);
var state_20036__$1 = state_20036;
var statearr_20038_20104 = state_20036__$1;
(statearr_20038_20104[(2)] = inst_20032);

(statearr_20038_20104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20037 === (20))){
var state_20036__$1 = state_20036;
var statearr_20039_20105 = state_20036__$1;
(statearr_20039_20105[(2)] = null);

(statearr_20039_20105[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20037 === (1))){
var state_20036__$1 = state_20036;
var statearr_20040_20106 = state_20036__$1;
(statearr_20040_20106[(2)] = null);

(statearr_20040_20106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20037 === (4))){
var inst_20001 = (state_20036[(7)]);
var inst_20001__$1 = (state_20036[(2)]);
var inst_20002 = (inst_20001__$1 == null);
var state_20036__$1 = (function (){var statearr_20041 = state_20036;
(statearr_20041[(7)] = inst_20001__$1);

return statearr_20041;
})();
if(cljs.core.truth_(inst_20002)){
var statearr_20042_20107 = state_20036__$1;
(statearr_20042_20107[(1)] = (5));

} else {
var statearr_20043_20108 = state_20036__$1;
(statearr_20043_20108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20037 === (15))){
var inst_20014 = (state_20036[(8)]);
var state_20036__$1 = state_20036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20036__$1,(18),to,inst_20014);
} else {
if((state_val_20037 === (21))){
var inst_20027 = (state_20036[(2)]);
var state_20036__$1 = state_20036;
var statearr_20044_20109 = state_20036__$1;
(statearr_20044_20109[(2)] = inst_20027);

(statearr_20044_20109[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20037 === (13))){
var inst_20029 = (state_20036[(2)]);
var state_20036__$1 = (function (){var statearr_20045 = state_20036;
(statearr_20045[(9)] = inst_20029);

return statearr_20045;
})();
var statearr_20046_20110 = state_20036__$1;
(statearr_20046_20110[(2)] = null);

(statearr_20046_20110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20037 === (6))){
var inst_20001 = (state_20036[(7)]);
var state_20036__$1 = state_20036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20036__$1,(11),inst_20001);
} else {
if((state_val_20037 === (17))){
var inst_20022 = (state_20036[(2)]);
var state_20036__$1 = state_20036;
if(cljs.core.truth_(inst_20022)){
var statearr_20047_20111 = state_20036__$1;
(statearr_20047_20111[(1)] = (19));

} else {
var statearr_20048_20112 = state_20036__$1;
(statearr_20048_20112[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20037 === (3))){
var inst_20034 = (state_20036[(2)]);
var state_20036__$1 = state_20036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20036__$1,inst_20034);
} else {
if((state_val_20037 === (12))){
var inst_20011 = (state_20036[(10)]);
var state_20036__$1 = state_20036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20036__$1,(14),inst_20011);
} else {
if((state_val_20037 === (2))){
var state_20036__$1 = state_20036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20036__$1,(4),results);
} else {
if((state_val_20037 === (19))){
var state_20036__$1 = state_20036;
var statearr_20049_20113 = state_20036__$1;
(statearr_20049_20113[(2)] = null);

(statearr_20049_20113[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20037 === (11))){
var inst_20011 = (state_20036[(2)]);
var state_20036__$1 = (function (){var statearr_20050 = state_20036;
(statearr_20050[(10)] = inst_20011);

return statearr_20050;
})();
var statearr_20051_20114 = state_20036__$1;
(statearr_20051_20114[(2)] = null);

(statearr_20051_20114[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20037 === (9))){
var state_20036__$1 = state_20036;
var statearr_20052_20115 = state_20036__$1;
(statearr_20052_20115[(2)] = null);

(statearr_20052_20115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20037 === (5))){
var state_20036__$1 = state_20036;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20053_20116 = state_20036__$1;
(statearr_20053_20116[(1)] = (8));

} else {
var statearr_20054_20117 = state_20036__$1;
(statearr_20054_20117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20037 === (14))){
var inst_20016 = (state_20036[(11)]);
var inst_20014 = (state_20036[(8)]);
var inst_20014__$1 = (state_20036[(2)]);
var inst_20015 = (inst_20014__$1 == null);
var inst_20016__$1 = cljs.core.not.call(null,inst_20015);
var state_20036__$1 = (function (){var statearr_20055 = state_20036;
(statearr_20055[(11)] = inst_20016__$1);

(statearr_20055[(8)] = inst_20014__$1);

return statearr_20055;
})();
if(inst_20016__$1){
var statearr_20056_20118 = state_20036__$1;
(statearr_20056_20118[(1)] = (15));

} else {
var statearr_20057_20119 = state_20036__$1;
(statearr_20057_20119[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20037 === (16))){
var inst_20016 = (state_20036[(11)]);
var state_20036__$1 = state_20036;
var statearr_20058_20120 = state_20036__$1;
(statearr_20058_20120[(2)] = inst_20016);

(statearr_20058_20120[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20037 === (10))){
var inst_20008 = (state_20036[(2)]);
var state_20036__$1 = state_20036;
var statearr_20059_20121 = state_20036__$1;
(statearr_20059_20121[(2)] = inst_20008);

(statearr_20059_20121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20037 === (18))){
var inst_20019 = (state_20036[(2)]);
var state_20036__$1 = state_20036;
var statearr_20060_20122 = state_20036__$1;
(statearr_20060_20122[(2)] = inst_20019);

(statearr_20060_20122[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20037 === (8))){
var inst_20005 = cljs.core.async.close_BANG_.call(null,to);
var state_20036__$1 = state_20036;
var statearr_20061_20123 = state_20036__$1;
(statearr_20061_20123[(2)] = inst_20005);

(statearr_20061_20123[(1)] = (10));


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
var statearr_20065 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20065[(0)] = state_machine__5795__auto__);

(statearr_20065[(1)] = (1));

return statearr_20065;
});
var state_machine__5795__auto____1 = (function (state_20036){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_20036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e20066){if((e20066 instanceof Object)){
var ex__5798__auto__ = e20066;
var statearr_20067_20124 = state_20036;
(statearr_20067_20124[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20125 = state_20036;
state_20036 = G__20125;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_20036){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_20036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__,jobs,results,process,async))
})();
var state__5811__auto__ = (function (){var statearr_20068 = f__5810__auto__.call(null);
(statearr_20068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_20068;
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
var c__5809__auto___20226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___20226,tc,fc){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___20226,tc,fc){
return (function (state_20201){
var state_val_20202 = (state_20201[(1)]);
if((state_val_20202 === (7))){
var inst_20197 = (state_20201[(2)]);
var state_20201__$1 = state_20201;
var statearr_20203_20227 = state_20201__$1;
(statearr_20203_20227[(2)] = inst_20197);

(statearr_20203_20227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20202 === (1))){
var state_20201__$1 = state_20201;
var statearr_20204_20228 = state_20201__$1;
(statearr_20204_20228[(2)] = null);

(statearr_20204_20228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20202 === (4))){
var inst_20178 = (state_20201[(7)]);
var inst_20178__$1 = (state_20201[(2)]);
var inst_20179 = (inst_20178__$1 == null);
var state_20201__$1 = (function (){var statearr_20205 = state_20201;
(statearr_20205[(7)] = inst_20178__$1);

return statearr_20205;
})();
if(cljs.core.truth_(inst_20179)){
var statearr_20206_20229 = state_20201__$1;
(statearr_20206_20229[(1)] = (5));

} else {
var statearr_20207_20230 = state_20201__$1;
(statearr_20207_20230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20202 === (13))){
var state_20201__$1 = state_20201;
var statearr_20208_20231 = state_20201__$1;
(statearr_20208_20231[(2)] = null);

(statearr_20208_20231[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20202 === (6))){
var inst_20178 = (state_20201[(7)]);
var inst_20184 = p.call(null,inst_20178);
var state_20201__$1 = state_20201;
if(cljs.core.truth_(inst_20184)){
var statearr_20209_20232 = state_20201__$1;
(statearr_20209_20232[(1)] = (9));

} else {
var statearr_20210_20233 = state_20201__$1;
(statearr_20210_20233[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20202 === (3))){
var inst_20199 = (state_20201[(2)]);
var state_20201__$1 = state_20201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20201__$1,inst_20199);
} else {
if((state_val_20202 === (12))){
var state_20201__$1 = state_20201;
var statearr_20211_20234 = state_20201__$1;
(statearr_20211_20234[(2)] = null);

(statearr_20211_20234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20202 === (2))){
var state_20201__$1 = state_20201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20201__$1,(4),ch);
} else {
if((state_val_20202 === (11))){
var inst_20178 = (state_20201[(7)]);
var inst_20188 = (state_20201[(2)]);
var state_20201__$1 = state_20201;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20201__$1,(8),inst_20188,inst_20178);
} else {
if((state_val_20202 === (9))){
var state_20201__$1 = state_20201;
var statearr_20212_20235 = state_20201__$1;
(statearr_20212_20235[(2)] = tc);

(statearr_20212_20235[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20202 === (5))){
var inst_20181 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20182 = cljs.core.async.close_BANG_.call(null,fc);
var state_20201__$1 = (function (){var statearr_20213 = state_20201;
(statearr_20213[(8)] = inst_20181);

return statearr_20213;
})();
var statearr_20214_20236 = state_20201__$1;
(statearr_20214_20236[(2)] = inst_20182);

(statearr_20214_20236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20202 === (14))){
var inst_20195 = (state_20201[(2)]);
var state_20201__$1 = state_20201;
var statearr_20215_20237 = state_20201__$1;
(statearr_20215_20237[(2)] = inst_20195);

(statearr_20215_20237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20202 === (10))){
var state_20201__$1 = state_20201;
var statearr_20216_20238 = state_20201__$1;
(statearr_20216_20238[(2)] = fc);

(statearr_20216_20238[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20202 === (8))){
var inst_20190 = (state_20201[(2)]);
var state_20201__$1 = state_20201;
if(cljs.core.truth_(inst_20190)){
var statearr_20217_20239 = state_20201__$1;
(statearr_20217_20239[(1)] = (12));

} else {
var statearr_20218_20240 = state_20201__$1;
(statearr_20218_20240[(1)] = (13));

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
});})(c__5809__auto___20226,tc,fc))
;
return ((function (switch__5794__auto__,c__5809__auto___20226,tc,fc){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_20222 = [null,null,null,null,null,null,null,null,null];
(statearr_20222[(0)] = state_machine__5795__auto__);

(statearr_20222[(1)] = (1));

return statearr_20222;
});
var state_machine__5795__auto____1 = (function (state_20201){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_20201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e20223){if((e20223 instanceof Object)){
var ex__5798__auto__ = e20223;
var statearr_20224_20241 = state_20201;
(statearr_20224_20241[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20242 = state_20201;
state_20201 = G__20242;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_20201){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_20201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___20226,tc,fc))
})();
var state__5811__auto__ = (function (){var statearr_20225 = f__5810__auto__.call(null);
(statearr_20225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___20226);

return statearr_20225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___20226,tc,fc))
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
return (function (state_20289){
var state_val_20290 = (state_20289[(1)]);
if((state_val_20290 === (7))){
var inst_20285 = (state_20289[(2)]);
var state_20289__$1 = state_20289;
var statearr_20291_20307 = state_20289__$1;
(statearr_20291_20307[(2)] = inst_20285);

(statearr_20291_20307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20290 === (6))){
var inst_20275 = (state_20289[(7)]);
var inst_20278 = (state_20289[(8)]);
var inst_20282 = f.call(null,inst_20275,inst_20278);
var inst_20275__$1 = inst_20282;
var state_20289__$1 = (function (){var statearr_20292 = state_20289;
(statearr_20292[(7)] = inst_20275__$1);

return statearr_20292;
})();
var statearr_20293_20308 = state_20289__$1;
(statearr_20293_20308[(2)] = null);

(statearr_20293_20308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20290 === (5))){
var inst_20275 = (state_20289[(7)]);
var state_20289__$1 = state_20289;
var statearr_20294_20309 = state_20289__$1;
(statearr_20294_20309[(2)] = inst_20275);

(statearr_20294_20309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20290 === (4))){
var inst_20278 = (state_20289[(8)]);
var inst_20278__$1 = (state_20289[(2)]);
var inst_20279 = (inst_20278__$1 == null);
var state_20289__$1 = (function (){var statearr_20295 = state_20289;
(statearr_20295[(8)] = inst_20278__$1);

return statearr_20295;
})();
if(cljs.core.truth_(inst_20279)){
var statearr_20296_20310 = state_20289__$1;
(statearr_20296_20310[(1)] = (5));

} else {
var statearr_20297_20311 = state_20289__$1;
(statearr_20297_20311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20290 === (3))){
var inst_20287 = (state_20289[(2)]);
var state_20289__$1 = state_20289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20289__$1,inst_20287);
} else {
if((state_val_20290 === (2))){
var state_20289__$1 = state_20289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20289__$1,(4),ch);
} else {
if((state_val_20290 === (1))){
var inst_20275 = init;
var state_20289__$1 = (function (){var statearr_20298 = state_20289;
(statearr_20298[(7)] = inst_20275);

return statearr_20298;
})();
var statearr_20299_20312 = state_20289__$1;
(statearr_20299_20312[(2)] = null);

(statearr_20299_20312[(1)] = (2));


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
var statearr_20303 = [null,null,null,null,null,null,null,null,null];
(statearr_20303[(0)] = state_machine__5795__auto__);

(statearr_20303[(1)] = (1));

return statearr_20303;
});
var state_machine__5795__auto____1 = (function (state_20289){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_20289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e20304){if((e20304 instanceof Object)){
var ex__5798__auto__ = e20304;
var statearr_20305_20313 = state_20289;
(statearr_20305_20313[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20314 = state_20289;
state_20289 = G__20314;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_20289){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_20289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_20306 = f__5810__auto__.call(null);
(statearr_20306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_20306;
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
return (function (state_20388){
var state_val_20389 = (state_20388[(1)]);
if((state_val_20389 === (7))){
var inst_20370 = (state_20388[(2)]);
var state_20388__$1 = state_20388;
var statearr_20390_20413 = state_20388__$1;
(statearr_20390_20413[(2)] = inst_20370);

(statearr_20390_20413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20389 === (1))){
var inst_20364 = cljs.core.seq.call(null,coll);
var inst_20365 = inst_20364;
var state_20388__$1 = (function (){var statearr_20391 = state_20388;
(statearr_20391[(7)] = inst_20365);

return statearr_20391;
})();
var statearr_20392_20414 = state_20388__$1;
(statearr_20392_20414[(2)] = null);

(statearr_20392_20414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20389 === (4))){
var inst_20365 = (state_20388[(7)]);
var inst_20368 = cljs.core.first.call(null,inst_20365);
var state_20388__$1 = state_20388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20388__$1,(7),ch,inst_20368);
} else {
if((state_val_20389 === (13))){
var inst_20382 = (state_20388[(2)]);
var state_20388__$1 = state_20388;
var statearr_20393_20415 = state_20388__$1;
(statearr_20393_20415[(2)] = inst_20382);

(statearr_20393_20415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20389 === (6))){
var inst_20373 = (state_20388[(2)]);
var state_20388__$1 = state_20388;
if(cljs.core.truth_(inst_20373)){
var statearr_20394_20416 = state_20388__$1;
(statearr_20394_20416[(1)] = (8));

} else {
var statearr_20395_20417 = state_20388__$1;
(statearr_20395_20417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20389 === (3))){
var inst_20386 = (state_20388[(2)]);
var state_20388__$1 = state_20388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20388__$1,inst_20386);
} else {
if((state_val_20389 === (12))){
var state_20388__$1 = state_20388;
var statearr_20396_20418 = state_20388__$1;
(statearr_20396_20418[(2)] = null);

(statearr_20396_20418[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20389 === (2))){
var inst_20365 = (state_20388[(7)]);
var state_20388__$1 = state_20388;
if(cljs.core.truth_(inst_20365)){
var statearr_20397_20419 = state_20388__$1;
(statearr_20397_20419[(1)] = (4));

} else {
var statearr_20398_20420 = state_20388__$1;
(statearr_20398_20420[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20389 === (11))){
var inst_20379 = cljs.core.async.close_BANG_.call(null,ch);
var state_20388__$1 = state_20388;
var statearr_20399_20421 = state_20388__$1;
(statearr_20399_20421[(2)] = inst_20379);

(statearr_20399_20421[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20389 === (9))){
var state_20388__$1 = state_20388;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20400_20422 = state_20388__$1;
(statearr_20400_20422[(1)] = (11));

} else {
var statearr_20401_20423 = state_20388__$1;
(statearr_20401_20423[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20389 === (5))){
var inst_20365 = (state_20388[(7)]);
var state_20388__$1 = state_20388;
var statearr_20402_20424 = state_20388__$1;
(statearr_20402_20424[(2)] = inst_20365);

(statearr_20402_20424[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20389 === (10))){
var inst_20384 = (state_20388[(2)]);
var state_20388__$1 = state_20388;
var statearr_20403_20425 = state_20388__$1;
(statearr_20403_20425[(2)] = inst_20384);

(statearr_20403_20425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20389 === (8))){
var inst_20365 = (state_20388[(7)]);
var inst_20375 = cljs.core.next.call(null,inst_20365);
var inst_20365__$1 = inst_20375;
var state_20388__$1 = (function (){var statearr_20404 = state_20388;
(statearr_20404[(7)] = inst_20365__$1);

return statearr_20404;
})();
var statearr_20405_20426 = state_20388__$1;
(statearr_20405_20426[(2)] = null);

(statearr_20405_20426[(1)] = (2));


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
var statearr_20409 = [null,null,null,null,null,null,null,null];
(statearr_20409[(0)] = state_machine__5795__auto__);

(statearr_20409[(1)] = (1));

return statearr_20409;
});
var state_machine__5795__auto____1 = (function (state_20388){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_20388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e20410){if((e20410 instanceof Object)){
var ex__5798__auto__ = e20410;
var statearr_20411_20427 = state_20388;
(statearr_20411_20427[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20428 = state_20388;
state_20388 = G__20428;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_20388){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_20388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_20412 = f__5810__auto__.call(null);
(statearr_20412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_20412;
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

cljs.core.async.Mux = (function (){var obj20430 = {};
return obj20430;
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


cljs.core.async.Mult = (function (){var obj20432 = {};
return obj20432;
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
if(typeof cljs.core.async.t20654 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20654 = (function (cs,ch,mult,meta20655){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta20655 = meta20655;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20654.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t20654.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t20654.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t20654.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t20654.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20654.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t20654.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20656){
var self__ = this;
var _20656__$1 = this;
return self__.meta20655;
});})(cs))
;

cljs.core.async.t20654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20656,meta20655__$1){
var self__ = this;
var _20656__$1 = this;
return (new cljs.core.async.t20654(self__.cs,self__.ch,self__.mult,meta20655__$1));
});})(cs))
;

cljs.core.async.t20654.cljs$lang$type = true;

cljs.core.async.t20654.cljs$lang$ctorStr = "cljs.core.async/t20654";

cljs.core.async.t20654.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t20654");
});})(cs))
;

cljs.core.async.__GT_t20654 = ((function (cs){
return (function __GT_t20654(cs__$1,ch__$1,mult__$1,meta20655){
return (new cljs.core.async.t20654(cs__$1,ch__$1,mult__$1,meta20655));
});})(cs))
;

}

return (new cljs.core.async.t20654(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
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
var c__5809__auto___20875 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___20875,cs,m,dchan,dctr,done){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___20875,cs,m,dchan,dctr,done){
return (function (state_20787){
var state_val_20788 = (state_20787[(1)]);
if((state_val_20788 === (7))){
var inst_20783 = (state_20787[(2)]);
var state_20787__$1 = state_20787;
var statearr_20789_20876 = state_20787__$1;
(statearr_20789_20876[(2)] = inst_20783);

(statearr_20789_20876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (20))){
var inst_20688 = (state_20787[(7)]);
var inst_20698 = cljs.core.first.call(null,inst_20688);
var inst_20699 = cljs.core.nth.call(null,inst_20698,(0),null);
var inst_20700 = cljs.core.nth.call(null,inst_20698,(1),null);
var state_20787__$1 = (function (){var statearr_20790 = state_20787;
(statearr_20790[(8)] = inst_20699);

return statearr_20790;
})();
if(cljs.core.truth_(inst_20700)){
var statearr_20791_20877 = state_20787__$1;
(statearr_20791_20877[(1)] = (22));

} else {
var statearr_20792_20878 = state_20787__$1;
(statearr_20792_20878[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (27))){
var inst_20728 = (state_20787[(9)]);
var inst_20730 = (state_20787[(10)]);
var inst_20659 = (state_20787[(11)]);
var inst_20735 = (state_20787[(12)]);
var inst_20735__$1 = cljs.core._nth.call(null,inst_20728,inst_20730);
var inst_20736 = cljs.core.async.put_BANG_.call(null,inst_20735__$1,inst_20659,done);
var state_20787__$1 = (function (){var statearr_20793 = state_20787;
(statearr_20793[(12)] = inst_20735__$1);

return statearr_20793;
})();
if(cljs.core.truth_(inst_20736)){
var statearr_20794_20879 = state_20787__$1;
(statearr_20794_20879[(1)] = (30));

} else {
var statearr_20795_20880 = state_20787__$1;
(statearr_20795_20880[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (1))){
var state_20787__$1 = state_20787;
var statearr_20796_20881 = state_20787__$1;
(statearr_20796_20881[(2)] = null);

(statearr_20796_20881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (24))){
var inst_20688 = (state_20787[(7)]);
var inst_20705 = (state_20787[(2)]);
var inst_20706 = cljs.core.next.call(null,inst_20688);
var inst_20668 = inst_20706;
var inst_20669 = null;
var inst_20670 = (0);
var inst_20671 = (0);
var state_20787__$1 = (function (){var statearr_20797 = state_20787;
(statearr_20797[(13)] = inst_20668);

(statearr_20797[(14)] = inst_20670);

(statearr_20797[(15)] = inst_20669);

(statearr_20797[(16)] = inst_20705);

(statearr_20797[(17)] = inst_20671);

return statearr_20797;
})();
var statearr_20798_20882 = state_20787__$1;
(statearr_20798_20882[(2)] = null);

(statearr_20798_20882[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (39))){
var state_20787__$1 = state_20787;
var statearr_20802_20883 = state_20787__$1;
(statearr_20802_20883[(2)] = null);

(statearr_20802_20883[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (4))){
var inst_20659 = (state_20787[(11)]);
var inst_20659__$1 = (state_20787[(2)]);
var inst_20660 = (inst_20659__$1 == null);
var state_20787__$1 = (function (){var statearr_20803 = state_20787;
(statearr_20803[(11)] = inst_20659__$1);

return statearr_20803;
})();
if(cljs.core.truth_(inst_20660)){
var statearr_20804_20884 = state_20787__$1;
(statearr_20804_20884[(1)] = (5));

} else {
var statearr_20805_20885 = state_20787__$1;
(statearr_20805_20885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (15))){
var inst_20668 = (state_20787[(13)]);
var inst_20670 = (state_20787[(14)]);
var inst_20669 = (state_20787[(15)]);
var inst_20671 = (state_20787[(17)]);
var inst_20684 = (state_20787[(2)]);
var inst_20685 = (inst_20671 + (1));
var tmp20799 = inst_20668;
var tmp20800 = inst_20670;
var tmp20801 = inst_20669;
var inst_20668__$1 = tmp20799;
var inst_20669__$1 = tmp20801;
var inst_20670__$1 = tmp20800;
var inst_20671__$1 = inst_20685;
var state_20787__$1 = (function (){var statearr_20806 = state_20787;
(statearr_20806[(13)] = inst_20668__$1);

(statearr_20806[(14)] = inst_20670__$1);

(statearr_20806[(15)] = inst_20669__$1);

(statearr_20806[(18)] = inst_20684);

(statearr_20806[(17)] = inst_20671__$1);

return statearr_20806;
})();
var statearr_20807_20886 = state_20787__$1;
(statearr_20807_20886[(2)] = null);

(statearr_20807_20886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (21))){
var inst_20709 = (state_20787[(2)]);
var state_20787__$1 = state_20787;
var statearr_20811_20887 = state_20787__$1;
(statearr_20811_20887[(2)] = inst_20709);

(statearr_20811_20887[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (31))){
var inst_20735 = (state_20787[(12)]);
var inst_20739 = done.call(null,null);
var inst_20740 = cljs.core.async.untap_STAR_.call(null,m,inst_20735);
var state_20787__$1 = (function (){var statearr_20812 = state_20787;
(statearr_20812[(19)] = inst_20739);

return statearr_20812;
})();
var statearr_20813_20888 = state_20787__$1;
(statearr_20813_20888[(2)] = inst_20740);

(statearr_20813_20888[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (32))){
var inst_20728 = (state_20787[(9)]);
var inst_20730 = (state_20787[(10)]);
var inst_20727 = (state_20787[(20)]);
var inst_20729 = (state_20787[(21)]);
var inst_20742 = (state_20787[(2)]);
var inst_20743 = (inst_20730 + (1));
var tmp20808 = inst_20728;
var tmp20809 = inst_20727;
var tmp20810 = inst_20729;
var inst_20727__$1 = tmp20809;
var inst_20728__$1 = tmp20808;
var inst_20729__$1 = tmp20810;
var inst_20730__$1 = inst_20743;
var state_20787__$1 = (function (){var statearr_20814 = state_20787;
(statearr_20814[(9)] = inst_20728__$1);

(statearr_20814[(10)] = inst_20730__$1);

(statearr_20814[(20)] = inst_20727__$1);

(statearr_20814[(21)] = inst_20729__$1);

(statearr_20814[(22)] = inst_20742);

return statearr_20814;
})();
var statearr_20815_20889 = state_20787__$1;
(statearr_20815_20889[(2)] = null);

(statearr_20815_20889[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (40))){
var inst_20755 = (state_20787[(23)]);
var inst_20759 = done.call(null,null);
var inst_20760 = cljs.core.async.untap_STAR_.call(null,m,inst_20755);
var state_20787__$1 = (function (){var statearr_20816 = state_20787;
(statearr_20816[(24)] = inst_20759);

return statearr_20816;
})();
var statearr_20817_20890 = state_20787__$1;
(statearr_20817_20890[(2)] = inst_20760);

(statearr_20817_20890[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (33))){
var inst_20746 = (state_20787[(25)]);
var inst_20748 = cljs.core.chunked_seq_QMARK_.call(null,inst_20746);
var state_20787__$1 = state_20787;
if(inst_20748){
var statearr_20818_20891 = state_20787__$1;
(statearr_20818_20891[(1)] = (36));

} else {
var statearr_20819_20892 = state_20787__$1;
(statearr_20819_20892[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (13))){
var inst_20678 = (state_20787[(26)]);
var inst_20681 = cljs.core.async.close_BANG_.call(null,inst_20678);
var state_20787__$1 = state_20787;
var statearr_20820_20893 = state_20787__$1;
(statearr_20820_20893[(2)] = inst_20681);

(statearr_20820_20893[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (22))){
var inst_20699 = (state_20787[(8)]);
var inst_20702 = cljs.core.async.close_BANG_.call(null,inst_20699);
var state_20787__$1 = state_20787;
var statearr_20821_20894 = state_20787__$1;
(statearr_20821_20894[(2)] = inst_20702);

(statearr_20821_20894[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (36))){
var inst_20746 = (state_20787[(25)]);
var inst_20750 = cljs.core.chunk_first.call(null,inst_20746);
var inst_20751 = cljs.core.chunk_rest.call(null,inst_20746);
var inst_20752 = cljs.core.count.call(null,inst_20750);
var inst_20727 = inst_20751;
var inst_20728 = inst_20750;
var inst_20729 = inst_20752;
var inst_20730 = (0);
var state_20787__$1 = (function (){var statearr_20822 = state_20787;
(statearr_20822[(9)] = inst_20728);

(statearr_20822[(10)] = inst_20730);

(statearr_20822[(20)] = inst_20727);

(statearr_20822[(21)] = inst_20729);

return statearr_20822;
})();
var statearr_20823_20895 = state_20787__$1;
(statearr_20823_20895[(2)] = null);

(statearr_20823_20895[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (41))){
var inst_20746 = (state_20787[(25)]);
var inst_20762 = (state_20787[(2)]);
var inst_20763 = cljs.core.next.call(null,inst_20746);
var inst_20727 = inst_20763;
var inst_20728 = null;
var inst_20729 = (0);
var inst_20730 = (0);
var state_20787__$1 = (function (){var statearr_20824 = state_20787;
(statearr_20824[(27)] = inst_20762);

(statearr_20824[(9)] = inst_20728);

(statearr_20824[(10)] = inst_20730);

(statearr_20824[(20)] = inst_20727);

(statearr_20824[(21)] = inst_20729);

return statearr_20824;
})();
var statearr_20825_20896 = state_20787__$1;
(statearr_20825_20896[(2)] = null);

(statearr_20825_20896[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (43))){
var state_20787__$1 = state_20787;
var statearr_20826_20897 = state_20787__$1;
(statearr_20826_20897[(2)] = null);

(statearr_20826_20897[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (29))){
var inst_20771 = (state_20787[(2)]);
var state_20787__$1 = state_20787;
var statearr_20827_20898 = state_20787__$1;
(statearr_20827_20898[(2)] = inst_20771);

(statearr_20827_20898[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (44))){
var inst_20780 = (state_20787[(2)]);
var state_20787__$1 = (function (){var statearr_20828 = state_20787;
(statearr_20828[(28)] = inst_20780);

return statearr_20828;
})();
var statearr_20829_20899 = state_20787__$1;
(statearr_20829_20899[(2)] = null);

(statearr_20829_20899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (6))){
var inst_20719 = (state_20787[(29)]);
var inst_20718 = cljs.core.deref.call(null,cs);
var inst_20719__$1 = cljs.core.keys.call(null,inst_20718);
var inst_20720 = cljs.core.count.call(null,inst_20719__$1);
var inst_20721 = cljs.core.reset_BANG_.call(null,dctr,inst_20720);
var inst_20726 = cljs.core.seq.call(null,inst_20719__$1);
var inst_20727 = inst_20726;
var inst_20728 = null;
var inst_20729 = (0);
var inst_20730 = (0);
var state_20787__$1 = (function (){var statearr_20830 = state_20787;
(statearr_20830[(9)] = inst_20728);

(statearr_20830[(10)] = inst_20730);

(statearr_20830[(20)] = inst_20727);

(statearr_20830[(21)] = inst_20729);

(statearr_20830[(30)] = inst_20721);

(statearr_20830[(29)] = inst_20719__$1);

return statearr_20830;
})();
var statearr_20831_20900 = state_20787__$1;
(statearr_20831_20900[(2)] = null);

(statearr_20831_20900[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (28))){
var inst_20727 = (state_20787[(20)]);
var inst_20746 = (state_20787[(25)]);
var inst_20746__$1 = cljs.core.seq.call(null,inst_20727);
var state_20787__$1 = (function (){var statearr_20832 = state_20787;
(statearr_20832[(25)] = inst_20746__$1);

return statearr_20832;
})();
if(inst_20746__$1){
var statearr_20833_20901 = state_20787__$1;
(statearr_20833_20901[(1)] = (33));

} else {
var statearr_20834_20902 = state_20787__$1;
(statearr_20834_20902[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (25))){
var inst_20730 = (state_20787[(10)]);
var inst_20729 = (state_20787[(21)]);
var inst_20732 = (inst_20730 < inst_20729);
var inst_20733 = inst_20732;
var state_20787__$1 = state_20787;
if(cljs.core.truth_(inst_20733)){
var statearr_20835_20903 = state_20787__$1;
(statearr_20835_20903[(1)] = (27));

} else {
var statearr_20836_20904 = state_20787__$1;
(statearr_20836_20904[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (34))){
var state_20787__$1 = state_20787;
var statearr_20837_20905 = state_20787__$1;
(statearr_20837_20905[(2)] = null);

(statearr_20837_20905[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (17))){
var state_20787__$1 = state_20787;
var statearr_20838_20906 = state_20787__$1;
(statearr_20838_20906[(2)] = null);

(statearr_20838_20906[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (3))){
var inst_20785 = (state_20787[(2)]);
var state_20787__$1 = state_20787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20787__$1,inst_20785);
} else {
if((state_val_20788 === (12))){
var inst_20714 = (state_20787[(2)]);
var state_20787__$1 = state_20787;
var statearr_20839_20907 = state_20787__$1;
(statearr_20839_20907[(2)] = inst_20714);

(statearr_20839_20907[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (2))){
var state_20787__$1 = state_20787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20787__$1,(4),ch);
} else {
if((state_val_20788 === (23))){
var state_20787__$1 = state_20787;
var statearr_20840_20908 = state_20787__$1;
(statearr_20840_20908[(2)] = null);

(statearr_20840_20908[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (35))){
var inst_20769 = (state_20787[(2)]);
var state_20787__$1 = state_20787;
var statearr_20841_20909 = state_20787__$1;
(statearr_20841_20909[(2)] = inst_20769);

(statearr_20841_20909[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (19))){
var inst_20688 = (state_20787[(7)]);
var inst_20692 = cljs.core.chunk_first.call(null,inst_20688);
var inst_20693 = cljs.core.chunk_rest.call(null,inst_20688);
var inst_20694 = cljs.core.count.call(null,inst_20692);
var inst_20668 = inst_20693;
var inst_20669 = inst_20692;
var inst_20670 = inst_20694;
var inst_20671 = (0);
var state_20787__$1 = (function (){var statearr_20842 = state_20787;
(statearr_20842[(13)] = inst_20668);

(statearr_20842[(14)] = inst_20670);

(statearr_20842[(15)] = inst_20669);

(statearr_20842[(17)] = inst_20671);

return statearr_20842;
})();
var statearr_20843_20910 = state_20787__$1;
(statearr_20843_20910[(2)] = null);

(statearr_20843_20910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (11))){
var inst_20668 = (state_20787[(13)]);
var inst_20688 = (state_20787[(7)]);
var inst_20688__$1 = cljs.core.seq.call(null,inst_20668);
var state_20787__$1 = (function (){var statearr_20844 = state_20787;
(statearr_20844[(7)] = inst_20688__$1);

return statearr_20844;
})();
if(inst_20688__$1){
var statearr_20845_20911 = state_20787__$1;
(statearr_20845_20911[(1)] = (16));

} else {
var statearr_20846_20912 = state_20787__$1;
(statearr_20846_20912[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (9))){
var inst_20716 = (state_20787[(2)]);
var state_20787__$1 = state_20787;
var statearr_20847_20913 = state_20787__$1;
(statearr_20847_20913[(2)] = inst_20716);

(statearr_20847_20913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (5))){
var inst_20666 = cljs.core.deref.call(null,cs);
var inst_20667 = cljs.core.seq.call(null,inst_20666);
var inst_20668 = inst_20667;
var inst_20669 = null;
var inst_20670 = (0);
var inst_20671 = (0);
var state_20787__$1 = (function (){var statearr_20848 = state_20787;
(statearr_20848[(13)] = inst_20668);

(statearr_20848[(14)] = inst_20670);

(statearr_20848[(15)] = inst_20669);

(statearr_20848[(17)] = inst_20671);

return statearr_20848;
})();
var statearr_20849_20914 = state_20787__$1;
(statearr_20849_20914[(2)] = null);

(statearr_20849_20914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (14))){
var state_20787__$1 = state_20787;
var statearr_20850_20915 = state_20787__$1;
(statearr_20850_20915[(2)] = null);

(statearr_20850_20915[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (45))){
var inst_20777 = (state_20787[(2)]);
var state_20787__$1 = state_20787;
var statearr_20851_20916 = state_20787__$1;
(statearr_20851_20916[(2)] = inst_20777);

(statearr_20851_20916[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (26))){
var inst_20719 = (state_20787[(29)]);
var inst_20773 = (state_20787[(2)]);
var inst_20774 = cljs.core.seq.call(null,inst_20719);
var state_20787__$1 = (function (){var statearr_20852 = state_20787;
(statearr_20852[(31)] = inst_20773);

return statearr_20852;
})();
if(inst_20774){
var statearr_20853_20917 = state_20787__$1;
(statearr_20853_20917[(1)] = (42));

} else {
var statearr_20854_20918 = state_20787__$1;
(statearr_20854_20918[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (16))){
var inst_20688 = (state_20787[(7)]);
var inst_20690 = cljs.core.chunked_seq_QMARK_.call(null,inst_20688);
var state_20787__$1 = state_20787;
if(inst_20690){
var statearr_20855_20919 = state_20787__$1;
(statearr_20855_20919[(1)] = (19));

} else {
var statearr_20856_20920 = state_20787__$1;
(statearr_20856_20920[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (38))){
var inst_20766 = (state_20787[(2)]);
var state_20787__$1 = state_20787;
var statearr_20857_20921 = state_20787__$1;
(statearr_20857_20921[(2)] = inst_20766);

(statearr_20857_20921[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (30))){
var state_20787__$1 = state_20787;
var statearr_20858_20922 = state_20787__$1;
(statearr_20858_20922[(2)] = null);

(statearr_20858_20922[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (10))){
var inst_20669 = (state_20787[(15)]);
var inst_20671 = (state_20787[(17)]);
var inst_20677 = cljs.core._nth.call(null,inst_20669,inst_20671);
var inst_20678 = cljs.core.nth.call(null,inst_20677,(0),null);
var inst_20679 = cljs.core.nth.call(null,inst_20677,(1),null);
var state_20787__$1 = (function (){var statearr_20859 = state_20787;
(statearr_20859[(26)] = inst_20678);

return statearr_20859;
})();
if(cljs.core.truth_(inst_20679)){
var statearr_20860_20923 = state_20787__$1;
(statearr_20860_20923[(1)] = (13));

} else {
var statearr_20861_20924 = state_20787__$1;
(statearr_20861_20924[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (18))){
var inst_20712 = (state_20787[(2)]);
var state_20787__$1 = state_20787;
var statearr_20862_20925 = state_20787__$1;
(statearr_20862_20925[(2)] = inst_20712);

(statearr_20862_20925[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (42))){
var state_20787__$1 = state_20787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20787__$1,(45),dchan);
} else {
if((state_val_20788 === (37))){
var inst_20746 = (state_20787[(25)]);
var inst_20755 = (state_20787[(23)]);
var inst_20659 = (state_20787[(11)]);
var inst_20755__$1 = cljs.core.first.call(null,inst_20746);
var inst_20756 = cljs.core.async.put_BANG_.call(null,inst_20755__$1,inst_20659,done);
var state_20787__$1 = (function (){var statearr_20863 = state_20787;
(statearr_20863[(23)] = inst_20755__$1);

return statearr_20863;
})();
if(cljs.core.truth_(inst_20756)){
var statearr_20864_20926 = state_20787__$1;
(statearr_20864_20926[(1)] = (39));

} else {
var statearr_20865_20927 = state_20787__$1;
(statearr_20865_20927[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (8))){
var inst_20670 = (state_20787[(14)]);
var inst_20671 = (state_20787[(17)]);
var inst_20673 = (inst_20671 < inst_20670);
var inst_20674 = inst_20673;
var state_20787__$1 = state_20787;
if(cljs.core.truth_(inst_20674)){
var statearr_20866_20928 = state_20787__$1;
(statearr_20866_20928[(1)] = (10));

} else {
var statearr_20867_20929 = state_20787__$1;
(statearr_20867_20929[(1)] = (11));

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
});})(c__5809__auto___20875,cs,m,dchan,dctr,done))
;
return ((function (switch__5794__auto__,c__5809__auto___20875,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_20871 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20871[(0)] = state_machine__5795__auto__);

(statearr_20871[(1)] = (1));

return statearr_20871;
});
var state_machine__5795__auto____1 = (function (state_20787){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_20787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e20872){if((e20872 instanceof Object)){
var ex__5798__auto__ = e20872;
var statearr_20873_20930 = state_20787;
(statearr_20873_20930[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20931 = state_20787;
state_20787 = G__20931;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_20787){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_20787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___20875,cs,m,dchan,dctr,done))
})();
var state__5811__auto__ = (function (){var statearr_20874 = f__5810__auto__.call(null);
(statearr_20874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___20875);

return statearr_20874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___20875,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj20933 = {};
return obj20933;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__20934){
var map__20939 = p__20934;
var map__20939__$1 = ((cljs.core.seq_QMARK_.call(null,map__20939))?cljs.core.apply.call(null,cljs.core.hash_map,map__20939):map__20939);
var opts = map__20939__$1;
var statearr_20940_20943 = state;
(statearr_20940_20943[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__20939,map__20939__$1,opts){
return (function (val){
var statearr_20941_20944 = state;
(statearr_20941_20944[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20939,map__20939__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_20942_20945 = state;
(statearr_20942_20945[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__20934 = null;
if (arguments.length > 3) {
  p__20934 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__20934);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__20946){
var state = cljs.core.first(arglist__20946);
arglist__20946 = cljs.core.next(arglist__20946);
var cont_block = cljs.core.first(arglist__20946);
arglist__20946 = cljs.core.next(arglist__20946);
var ports = cljs.core.first(arglist__20946);
var p__20934 = cljs.core.rest(arglist__20946);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__20934);
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
if(typeof cljs.core.async.t21066 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21066 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21067){
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
this.meta21067 = meta21067;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21066.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t21066.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21066.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21066.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21066.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21066.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t21066.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21066.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21066.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21068){
var self__ = this;
var _21068__$1 = this;
return self__.meta21067;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21068,meta21067__$1){
var self__ = this;
var _21068__$1 = this;
return (new cljs.core.async.t21066(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21067__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21066.cljs$lang$type = true;

cljs.core.async.t21066.cljs$lang$ctorStr = "cljs.core.async/t21066";

cljs.core.async.t21066.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t21066");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t21066 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t21066(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21067){
return (new cljs.core.async.t21066(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21067));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t21066(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
})()
;
var c__5809__auto___21185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___21185,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___21185,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21138){
var state_val_21139 = (state_21138[(1)]);
if((state_val_21139 === (7))){
var inst_21082 = (state_21138[(7)]);
var inst_21087 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21082);
var state_21138__$1 = state_21138;
var statearr_21140_21186 = state_21138__$1;
(statearr_21140_21186[(2)] = inst_21087);

(statearr_21140_21186[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21139 === (20))){
var inst_21097 = (state_21138[(8)]);
var state_21138__$1 = state_21138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21138__$1,(23),out,inst_21097);
} else {
if((state_val_21139 === (1))){
var inst_21072 = (state_21138[(9)]);
var inst_21072__$1 = calc_state.call(null);
var inst_21073 = cljs.core.seq_QMARK_.call(null,inst_21072__$1);
var state_21138__$1 = (function (){var statearr_21141 = state_21138;
(statearr_21141[(9)] = inst_21072__$1);

return statearr_21141;
})();
if(inst_21073){
var statearr_21142_21187 = state_21138__$1;
(statearr_21142_21187[(1)] = (2));

} else {
var statearr_21143_21188 = state_21138__$1;
(statearr_21143_21188[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21139 === (24))){
var inst_21090 = (state_21138[(10)]);
var inst_21082 = inst_21090;
var state_21138__$1 = (function (){var statearr_21144 = state_21138;
(statearr_21144[(7)] = inst_21082);

return statearr_21144;
})();
var statearr_21145_21189 = state_21138__$1;
(statearr_21145_21189[(2)] = null);

(statearr_21145_21189[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21139 === (4))){
var inst_21072 = (state_21138[(9)]);
var inst_21078 = (state_21138[(2)]);
var inst_21079 = cljs.core.get.call(null,inst_21078,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21080 = cljs.core.get.call(null,inst_21078,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21081 = cljs.core.get.call(null,inst_21078,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21082 = inst_21072;
var state_21138__$1 = (function (){var statearr_21146 = state_21138;
(statearr_21146[(11)] = inst_21079);

(statearr_21146[(7)] = inst_21082);

(statearr_21146[(12)] = inst_21080);

(statearr_21146[(13)] = inst_21081);

return statearr_21146;
})();
var statearr_21147_21190 = state_21138__$1;
(statearr_21147_21190[(2)] = null);

(statearr_21147_21190[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21139 === (15))){
var state_21138__$1 = state_21138;
var statearr_21148_21191 = state_21138__$1;
(statearr_21148_21191[(2)] = null);

(statearr_21148_21191[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21139 === (21))){
var inst_21090 = (state_21138[(10)]);
var inst_21082 = inst_21090;
var state_21138__$1 = (function (){var statearr_21149 = state_21138;
(statearr_21149[(7)] = inst_21082);

return statearr_21149;
})();
var statearr_21150_21192 = state_21138__$1;
(statearr_21150_21192[(2)] = null);

(statearr_21150_21192[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21139 === (13))){
var inst_21134 = (state_21138[(2)]);
var state_21138__$1 = state_21138;
var statearr_21151_21193 = state_21138__$1;
(statearr_21151_21193[(2)] = inst_21134);

(statearr_21151_21193[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21139 === (22))){
var inst_21132 = (state_21138[(2)]);
var state_21138__$1 = state_21138;
var statearr_21152_21194 = state_21138__$1;
(statearr_21152_21194[(2)] = inst_21132);

(statearr_21152_21194[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21139 === (6))){
var inst_21136 = (state_21138[(2)]);
var state_21138__$1 = state_21138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21138__$1,inst_21136);
} else {
if((state_val_21139 === (25))){
var state_21138__$1 = state_21138;
var statearr_21153_21195 = state_21138__$1;
(statearr_21153_21195[(2)] = null);

(statearr_21153_21195[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21139 === (17))){
var inst_21112 = (state_21138[(14)]);
var state_21138__$1 = state_21138;
var statearr_21154_21196 = state_21138__$1;
(statearr_21154_21196[(2)] = inst_21112);

(statearr_21154_21196[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21139 === (3))){
var inst_21072 = (state_21138[(9)]);
var state_21138__$1 = state_21138;
var statearr_21155_21197 = state_21138__$1;
(statearr_21155_21197[(2)] = inst_21072);

(statearr_21155_21197[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21139 === (12))){
var inst_21112 = (state_21138[(14)]);
var inst_21098 = (state_21138[(15)]);
var inst_21093 = (state_21138[(16)]);
var inst_21112__$1 = inst_21093.call(null,inst_21098);
var state_21138__$1 = (function (){var statearr_21156 = state_21138;
(statearr_21156[(14)] = inst_21112__$1);

return statearr_21156;
})();
if(cljs.core.truth_(inst_21112__$1)){
var statearr_21157_21198 = state_21138__$1;
(statearr_21157_21198[(1)] = (17));

} else {
var statearr_21158_21199 = state_21138__$1;
(statearr_21158_21199[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21139 === (2))){
var inst_21072 = (state_21138[(9)]);
var inst_21075 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21072);
var state_21138__$1 = state_21138;
var statearr_21159_21200 = state_21138__$1;
(statearr_21159_21200[(2)] = inst_21075);

(statearr_21159_21200[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21139 === (23))){
var inst_21123 = (state_21138[(2)]);
var state_21138__$1 = state_21138;
if(cljs.core.truth_(inst_21123)){
var statearr_21160_21201 = state_21138__$1;
(statearr_21160_21201[(1)] = (24));

} else {
var statearr_21161_21202 = state_21138__$1;
(statearr_21161_21202[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21139 === (19))){
var inst_21120 = (state_21138[(2)]);
var state_21138__$1 = state_21138;
if(cljs.core.truth_(inst_21120)){
var statearr_21162_21203 = state_21138__$1;
(statearr_21162_21203[(1)] = (20));

} else {
var statearr_21163_21204 = state_21138__$1;
(statearr_21163_21204[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21139 === (11))){
var inst_21097 = (state_21138[(8)]);
var inst_21103 = (inst_21097 == null);
var state_21138__$1 = state_21138;
if(cljs.core.truth_(inst_21103)){
var statearr_21164_21205 = state_21138__$1;
(statearr_21164_21205[(1)] = (14));

} else {
var statearr_21165_21206 = state_21138__$1;
(statearr_21165_21206[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21139 === (9))){
var inst_21090 = (state_21138[(10)]);
var inst_21090__$1 = (state_21138[(2)]);
var inst_21091 = cljs.core.get.call(null,inst_21090__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21092 = cljs.core.get.call(null,inst_21090__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21093 = cljs.core.get.call(null,inst_21090__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_21138__$1 = (function (){var statearr_21166 = state_21138;
(statearr_21166[(10)] = inst_21090__$1);

(statearr_21166[(17)] = inst_21092);

(statearr_21166[(16)] = inst_21093);

return statearr_21166;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21138__$1,(10),inst_21091);
} else {
if((state_val_21139 === (5))){
var inst_21082 = (state_21138[(7)]);
var inst_21085 = cljs.core.seq_QMARK_.call(null,inst_21082);
var state_21138__$1 = state_21138;
if(inst_21085){
var statearr_21167_21207 = state_21138__$1;
(statearr_21167_21207[(1)] = (7));

} else {
var statearr_21168_21208 = state_21138__$1;
(statearr_21168_21208[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21139 === (14))){
var inst_21098 = (state_21138[(15)]);
var inst_21105 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21098);
var state_21138__$1 = state_21138;
var statearr_21169_21209 = state_21138__$1;
(statearr_21169_21209[(2)] = inst_21105);

(statearr_21169_21209[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21139 === (26))){
var inst_21128 = (state_21138[(2)]);
var state_21138__$1 = state_21138;
var statearr_21170_21210 = state_21138__$1;
(statearr_21170_21210[(2)] = inst_21128);

(statearr_21170_21210[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21139 === (16))){
var inst_21108 = (state_21138[(2)]);
var inst_21109 = calc_state.call(null);
var inst_21082 = inst_21109;
var state_21138__$1 = (function (){var statearr_21171 = state_21138;
(statearr_21171[(7)] = inst_21082);

(statearr_21171[(18)] = inst_21108);

return statearr_21171;
})();
var statearr_21172_21211 = state_21138__$1;
(statearr_21172_21211[(2)] = null);

(statearr_21172_21211[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21139 === (10))){
var inst_21098 = (state_21138[(15)]);
var inst_21097 = (state_21138[(8)]);
var inst_21096 = (state_21138[(2)]);
var inst_21097__$1 = cljs.core.nth.call(null,inst_21096,(0),null);
var inst_21098__$1 = cljs.core.nth.call(null,inst_21096,(1),null);
var inst_21099 = (inst_21097__$1 == null);
var inst_21100 = cljs.core._EQ_.call(null,inst_21098__$1,change);
var inst_21101 = (inst_21099) || (inst_21100);
var state_21138__$1 = (function (){var statearr_21173 = state_21138;
(statearr_21173[(15)] = inst_21098__$1);

(statearr_21173[(8)] = inst_21097__$1);

return statearr_21173;
})();
if(cljs.core.truth_(inst_21101)){
var statearr_21174_21212 = state_21138__$1;
(statearr_21174_21212[(1)] = (11));

} else {
var statearr_21175_21213 = state_21138__$1;
(statearr_21175_21213[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21139 === (18))){
var inst_21092 = (state_21138[(17)]);
var inst_21098 = (state_21138[(15)]);
var inst_21093 = (state_21138[(16)]);
var inst_21115 = cljs.core.empty_QMARK_.call(null,inst_21093);
var inst_21116 = inst_21092.call(null,inst_21098);
var inst_21117 = cljs.core.not.call(null,inst_21116);
var inst_21118 = (inst_21115) && (inst_21117);
var state_21138__$1 = state_21138;
var statearr_21176_21214 = state_21138__$1;
(statearr_21176_21214[(2)] = inst_21118);

(statearr_21176_21214[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21139 === (8))){
var inst_21082 = (state_21138[(7)]);
var state_21138__$1 = state_21138;
var statearr_21177_21215 = state_21138__$1;
(statearr_21177_21215[(2)] = inst_21082);

(statearr_21177_21215[(1)] = (9));


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
});})(c__5809__auto___21185,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__5794__auto__,c__5809__auto___21185,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_21181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21181[(0)] = state_machine__5795__auto__);

(statearr_21181[(1)] = (1));

return statearr_21181;
});
var state_machine__5795__auto____1 = (function (state_21138){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_21138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e21182){if((e21182 instanceof Object)){
var ex__5798__auto__ = e21182;
var statearr_21183_21216 = state_21138;
(statearr_21183_21216[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21217 = state_21138;
state_21138 = G__21217;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_21138){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_21138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___21185,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__5811__auto__ = (function (){var statearr_21184 = f__5810__auto__.call(null);
(statearr_21184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___21185);

return statearr_21184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___21185,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj21219 = {};
return obj21219;
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
return (function (p1__21220_SHARP_){
if(cljs.core.truth_(p1__21220_SHARP_.call(null,topic))){
return p1__21220_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21220_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3608__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t21343 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21343 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta21344){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta21344 = meta21344;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21343.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t21343.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t21343.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t21343.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t21343.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t21343.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21343.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t21343.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21345){
var self__ = this;
var _21345__$1 = this;
return self__.meta21344;
});})(mults,ensure_mult))
;

cljs.core.async.t21343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21345,meta21344__$1){
var self__ = this;
var _21345__$1 = this;
return (new cljs.core.async.t21343(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta21344__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t21343.cljs$lang$type = true;

cljs.core.async.t21343.cljs$lang$ctorStr = "cljs.core.async/t21343";

cljs.core.async.t21343.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t21343");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t21343 = ((function (mults,ensure_mult){
return (function __GT_t21343(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta21344){
return (new cljs.core.async.t21343(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta21344));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t21343(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
})()
;
var c__5809__auto___21465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___21465,mults,ensure_mult,p){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___21465,mults,ensure_mult,p){
return (function (state_21417){
var state_val_21418 = (state_21417[(1)]);
if((state_val_21418 === (7))){
var inst_21413 = (state_21417[(2)]);
var state_21417__$1 = state_21417;
var statearr_21419_21466 = state_21417__$1;
(statearr_21419_21466[(2)] = inst_21413);

(statearr_21419_21466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21418 === (20))){
var state_21417__$1 = state_21417;
var statearr_21420_21467 = state_21417__$1;
(statearr_21420_21467[(2)] = null);

(statearr_21420_21467[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21418 === (1))){
var state_21417__$1 = state_21417;
var statearr_21421_21468 = state_21417__$1;
(statearr_21421_21468[(2)] = null);

(statearr_21421_21468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21418 === (24))){
var inst_21396 = (state_21417[(7)]);
var inst_21405 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21396);
var state_21417__$1 = state_21417;
var statearr_21422_21469 = state_21417__$1;
(statearr_21422_21469[(2)] = inst_21405);

(statearr_21422_21469[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21418 === (4))){
var inst_21348 = (state_21417[(8)]);
var inst_21348__$1 = (state_21417[(2)]);
var inst_21349 = (inst_21348__$1 == null);
var state_21417__$1 = (function (){var statearr_21423 = state_21417;
(statearr_21423[(8)] = inst_21348__$1);

return statearr_21423;
})();
if(cljs.core.truth_(inst_21349)){
var statearr_21424_21470 = state_21417__$1;
(statearr_21424_21470[(1)] = (5));

} else {
var statearr_21425_21471 = state_21417__$1;
(statearr_21425_21471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21418 === (15))){
var inst_21390 = (state_21417[(2)]);
var state_21417__$1 = state_21417;
var statearr_21426_21472 = state_21417__$1;
(statearr_21426_21472[(2)] = inst_21390);

(statearr_21426_21472[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21418 === (21))){
var inst_21410 = (state_21417[(2)]);
var state_21417__$1 = (function (){var statearr_21427 = state_21417;
(statearr_21427[(9)] = inst_21410);

return statearr_21427;
})();
var statearr_21428_21473 = state_21417__$1;
(statearr_21428_21473[(2)] = null);

(statearr_21428_21473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21418 === (13))){
var inst_21372 = (state_21417[(10)]);
var inst_21374 = cljs.core.chunked_seq_QMARK_.call(null,inst_21372);
var state_21417__$1 = state_21417;
if(inst_21374){
var statearr_21429_21474 = state_21417__$1;
(statearr_21429_21474[(1)] = (16));

} else {
var statearr_21430_21475 = state_21417__$1;
(statearr_21430_21475[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21418 === (22))){
var inst_21402 = (state_21417[(2)]);
var state_21417__$1 = state_21417;
if(cljs.core.truth_(inst_21402)){
var statearr_21431_21476 = state_21417__$1;
(statearr_21431_21476[(1)] = (23));

} else {
var statearr_21432_21477 = state_21417__$1;
(statearr_21432_21477[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21418 === (6))){
var inst_21398 = (state_21417[(11)]);
var inst_21348 = (state_21417[(8)]);
var inst_21396 = (state_21417[(7)]);
var inst_21396__$1 = topic_fn.call(null,inst_21348);
var inst_21397 = cljs.core.deref.call(null,mults);
var inst_21398__$1 = cljs.core.get.call(null,inst_21397,inst_21396__$1);
var state_21417__$1 = (function (){var statearr_21433 = state_21417;
(statearr_21433[(11)] = inst_21398__$1);

(statearr_21433[(7)] = inst_21396__$1);

return statearr_21433;
})();
if(cljs.core.truth_(inst_21398__$1)){
var statearr_21434_21478 = state_21417__$1;
(statearr_21434_21478[(1)] = (19));

} else {
var statearr_21435_21479 = state_21417__$1;
(statearr_21435_21479[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21418 === (25))){
var inst_21407 = (state_21417[(2)]);
var state_21417__$1 = state_21417;
var statearr_21436_21480 = state_21417__$1;
(statearr_21436_21480[(2)] = inst_21407);

(statearr_21436_21480[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21418 === (17))){
var inst_21372 = (state_21417[(10)]);
var inst_21381 = cljs.core.first.call(null,inst_21372);
var inst_21382 = cljs.core.async.muxch_STAR_.call(null,inst_21381);
var inst_21383 = cljs.core.async.close_BANG_.call(null,inst_21382);
var inst_21384 = cljs.core.next.call(null,inst_21372);
var inst_21358 = inst_21384;
var inst_21359 = null;
var inst_21360 = (0);
var inst_21361 = (0);
var state_21417__$1 = (function (){var statearr_21437 = state_21417;
(statearr_21437[(12)] = inst_21359);

(statearr_21437[(13)] = inst_21358);

(statearr_21437[(14)] = inst_21360);

(statearr_21437[(15)] = inst_21361);

(statearr_21437[(16)] = inst_21383);

return statearr_21437;
})();
var statearr_21438_21481 = state_21417__$1;
(statearr_21438_21481[(2)] = null);

(statearr_21438_21481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21418 === (3))){
var inst_21415 = (state_21417[(2)]);
var state_21417__$1 = state_21417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21417__$1,inst_21415);
} else {
if((state_val_21418 === (12))){
var inst_21392 = (state_21417[(2)]);
var state_21417__$1 = state_21417;
var statearr_21439_21482 = state_21417__$1;
(statearr_21439_21482[(2)] = inst_21392);

(statearr_21439_21482[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21418 === (2))){
var state_21417__$1 = state_21417;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21417__$1,(4),ch);
} else {
if((state_val_21418 === (23))){
var state_21417__$1 = state_21417;
var statearr_21440_21483 = state_21417__$1;
(statearr_21440_21483[(2)] = null);

(statearr_21440_21483[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21418 === (19))){
var inst_21398 = (state_21417[(11)]);
var inst_21348 = (state_21417[(8)]);
var inst_21400 = cljs.core.async.muxch_STAR_.call(null,inst_21398);
var state_21417__$1 = state_21417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21417__$1,(22),inst_21400,inst_21348);
} else {
if((state_val_21418 === (11))){
var inst_21372 = (state_21417[(10)]);
var inst_21358 = (state_21417[(13)]);
var inst_21372__$1 = cljs.core.seq.call(null,inst_21358);
var state_21417__$1 = (function (){var statearr_21441 = state_21417;
(statearr_21441[(10)] = inst_21372__$1);

return statearr_21441;
})();
if(inst_21372__$1){
var statearr_21442_21484 = state_21417__$1;
(statearr_21442_21484[(1)] = (13));

} else {
var statearr_21443_21485 = state_21417__$1;
(statearr_21443_21485[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21418 === (9))){
var inst_21394 = (state_21417[(2)]);
var state_21417__$1 = state_21417;
var statearr_21444_21486 = state_21417__$1;
(statearr_21444_21486[(2)] = inst_21394);

(statearr_21444_21486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21418 === (5))){
var inst_21355 = cljs.core.deref.call(null,mults);
var inst_21356 = cljs.core.vals.call(null,inst_21355);
var inst_21357 = cljs.core.seq.call(null,inst_21356);
var inst_21358 = inst_21357;
var inst_21359 = null;
var inst_21360 = (0);
var inst_21361 = (0);
var state_21417__$1 = (function (){var statearr_21445 = state_21417;
(statearr_21445[(12)] = inst_21359);

(statearr_21445[(13)] = inst_21358);

(statearr_21445[(14)] = inst_21360);

(statearr_21445[(15)] = inst_21361);

return statearr_21445;
})();
var statearr_21446_21487 = state_21417__$1;
(statearr_21446_21487[(2)] = null);

(statearr_21446_21487[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21418 === (14))){
var state_21417__$1 = state_21417;
var statearr_21450_21488 = state_21417__$1;
(statearr_21450_21488[(2)] = null);

(statearr_21450_21488[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21418 === (16))){
var inst_21372 = (state_21417[(10)]);
var inst_21376 = cljs.core.chunk_first.call(null,inst_21372);
var inst_21377 = cljs.core.chunk_rest.call(null,inst_21372);
var inst_21378 = cljs.core.count.call(null,inst_21376);
var inst_21358 = inst_21377;
var inst_21359 = inst_21376;
var inst_21360 = inst_21378;
var inst_21361 = (0);
var state_21417__$1 = (function (){var statearr_21451 = state_21417;
(statearr_21451[(12)] = inst_21359);

(statearr_21451[(13)] = inst_21358);

(statearr_21451[(14)] = inst_21360);

(statearr_21451[(15)] = inst_21361);

return statearr_21451;
})();
var statearr_21452_21489 = state_21417__$1;
(statearr_21452_21489[(2)] = null);

(statearr_21452_21489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21418 === (10))){
var inst_21359 = (state_21417[(12)]);
var inst_21358 = (state_21417[(13)]);
var inst_21360 = (state_21417[(14)]);
var inst_21361 = (state_21417[(15)]);
var inst_21366 = cljs.core._nth.call(null,inst_21359,inst_21361);
var inst_21367 = cljs.core.async.muxch_STAR_.call(null,inst_21366);
var inst_21368 = cljs.core.async.close_BANG_.call(null,inst_21367);
var inst_21369 = (inst_21361 + (1));
var tmp21447 = inst_21359;
var tmp21448 = inst_21358;
var tmp21449 = inst_21360;
var inst_21358__$1 = tmp21448;
var inst_21359__$1 = tmp21447;
var inst_21360__$1 = tmp21449;
var inst_21361__$1 = inst_21369;
var state_21417__$1 = (function (){var statearr_21453 = state_21417;
(statearr_21453[(12)] = inst_21359__$1);

(statearr_21453[(13)] = inst_21358__$1);

(statearr_21453[(14)] = inst_21360__$1);

(statearr_21453[(17)] = inst_21368);

(statearr_21453[(15)] = inst_21361__$1);

return statearr_21453;
})();
var statearr_21454_21490 = state_21417__$1;
(statearr_21454_21490[(2)] = null);

(statearr_21454_21490[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21418 === (18))){
var inst_21387 = (state_21417[(2)]);
var state_21417__$1 = state_21417;
var statearr_21455_21491 = state_21417__$1;
(statearr_21455_21491[(2)] = inst_21387);

(statearr_21455_21491[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21418 === (8))){
var inst_21360 = (state_21417[(14)]);
var inst_21361 = (state_21417[(15)]);
var inst_21363 = (inst_21361 < inst_21360);
var inst_21364 = inst_21363;
var state_21417__$1 = state_21417;
if(cljs.core.truth_(inst_21364)){
var statearr_21456_21492 = state_21417__$1;
(statearr_21456_21492[(1)] = (10));

} else {
var statearr_21457_21493 = state_21417__$1;
(statearr_21457_21493[(1)] = (11));

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
});})(c__5809__auto___21465,mults,ensure_mult,p))
;
return ((function (switch__5794__auto__,c__5809__auto___21465,mults,ensure_mult,p){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_21461 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21461[(0)] = state_machine__5795__auto__);

(statearr_21461[(1)] = (1));

return statearr_21461;
});
var state_machine__5795__auto____1 = (function (state_21417){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_21417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e21462){if((e21462 instanceof Object)){
var ex__5798__auto__ = e21462;
var statearr_21463_21494 = state_21417;
(statearr_21463_21494[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21495 = state_21417;
state_21417 = G__21495;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_21417){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_21417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___21465,mults,ensure_mult,p))
})();
var state__5811__auto__ = (function (){var statearr_21464 = f__5810__auto__.call(null);
(statearr_21464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___21465);

return statearr_21464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___21465,mults,ensure_mult,p))
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
var c__5809__auto___21632 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___21632,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___21632,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21602){
var state_val_21603 = (state_21602[(1)]);
if((state_val_21603 === (7))){
var state_21602__$1 = state_21602;
var statearr_21604_21633 = state_21602__$1;
(statearr_21604_21633[(2)] = null);

(statearr_21604_21633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (1))){
var state_21602__$1 = state_21602;
var statearr_21605_21634 = state_21602__$1;
(statearr_21605_21634[(2)] = null);

(statearr_21605_21634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (4))){
var inst_21566 = (state_21602[(7)]);
var inst_21568 = (inst_21566 < cnt);
var state_21602__$1 = state_21602;
if(cljs.core.truth_(inst_21568)){
var statearr_21606_21635 = state_21602__$1;
(statearr_21606_21635[(1)] = (6));

} else {
var statearr_21607_21636 = state_21602__$1;
(statearr_21607_21636[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (15))){
var inst_21598 = (state_21602[(2)]);
var state_21602__$1 = state_21602;
var statearr_21608_21637 = state_21602__$1;
(statearr_21608_21637[(2)] = inst_21598);

(statearr_21608_21637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (13))){
var inst_21591 = cljs.core.async.close_BANG_.call(null,out);
var state_21602__$1 = state_21602;
var statearr_21609_21638 = state_21602__$1;
(statearr_21609_21638[(2)] = inst_21591);

(statearr_21609_21638[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (6))){
var state_21602__$1 = state_21602;
var statearr_21610_21639 = state_21602__$1;
(statearr_21610_21639[(2)] = null);

(statearr_21610_21639[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (3))){
var inst_21600 = (state_21602[(2)]);
var state_21602__$1 = state_21602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21602__$1,inst_21600);
} else {
if((state_val_21603 === (12))){
var inst_21588 = (state_21602[(8)]);
var inst_21588__$1 = (state_21602[(2)]);
var inst_21589 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21588__$1);
var state_21602__$1 = (function (){var statearr_21611 = state_21602;
(statearr_21611[(8)] = inst_21588__$1);

return statearr_21611;
})();
if(cljs.core.truth_(inst_21589)){
var statearr_21612_21640 = state_21602__$1;
(statearr_21612_21640[(1)] = (13));

} else {
var statearr_21613_21641 = state_21602__$1;
(statearr_21613_21641[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (2))){
var inst_21565 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21566 = (0);
var state_21602__$1 = (function (){var statearr_21614 = state_21602;
(statearr_21614[(9)] = inst_21565);

(statearr_21614[(7)] = inst_21566);

return statearr_21614;
})();
var statearr_21615_21642 = state_21602__$1;
(statearr_21615_21642[(2)] = null);

(statearr_21615_21642[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (11))){
var inst_21566 = (state_21602[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21602,(10),Object,null,(9));
var inst_21575 = chs__$1.call(null,inst_21566);
var inst_21576 = done.call(null,inst_21566);
var inst_21577 = cljs.core.async.take_BANG_.call(null,inst_21575,inst_21576);
var state_21602__$1 = state_21602;
var statearr_21616_21643 = state_21602__$1;
(statearr_21616_21643[(2)] = inst_21577);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21602__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (9))){
var inst_21566 = (state_21602[(7)]);
var inst_21579 = (state_21602[(2)]);
var inst_21580 = (inst_21566 + (1));
var inst_21566__$1 = inst_21580;
var state_21602__$1 = (function (){var statearr_21617 = state_21602;
(statearr_21617[(10)] = inst_21579);

(statearr_21617[(7)] = inst_21566__$1);

return statearr_21617;
})();
var statearr_21618_21644 = state_21602__$1;
(statearr_21618_21644[(2)] = null);

(statearr_21618_21644[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (5))){
var inst_21586 = (state_21602[(2)]);
var state_21602__$1 = (function (){var statearr_21619 = state_21602;
(statearr_21619[(11)] = inst_21586);

return statearr_21619;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21602__$1,(12),dchan);
} else {
if((state_val_21603 === (14))){
var inst_21588 = (state_21602[(8)]);
var inst_21593 = cljs.core.apply.call(null,f,inst_21588);
var state_21602__$1 = state_21602;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21602__$1,(16),out,inst_21593);
} else {
if((state_val_21603 === (16))){
var inst_21595 = (state_21602[(2)]);
var state_21602__$1 = (function (){var statearr_21620 = state_21602;
(statearr_21620[(12)] = inst_21595);

return statearr_21620;
})();
var statearr_21621_21645 = state_21602__$1;
(statearr_21621_21645[(2)] = null);

(statearr_21621_21645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (10))){
var inst_21570 = (state_21602[(2)]);
var inst_21571 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21602__$1 = (function (){var statearr_21622 = state_21602;
(statearr_21622[(13)] = inst_21570);

return statearr_21622;
})();
var statearr_21623_21646 = state_21602__$1;
(statearr_21623_21646[(2)] = inst_21571);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21602__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (8))){
var inst_21584 = (state_21602[(2)]);
var state_21602__$1 = state_21602;
var statearr_21624_21647 = state_21602__$1;
(statearr_21624_21647[(2)] = inst_21584);

(statearr_21624_21647[(1)] = (5));


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
});})(c__5809__auto___21632,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__5794__auto__,c__5809__auto___21632,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_21628 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21628[(0)] = state_machine__5795__auto__);

(statearr_21628[(1)] = (1));

return statearr_21628;
});
var state_machine__5795__auto____1 = (function (state_21602){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_21602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e21629){if((e21629 instanceof Object)){
var ex__5798__auto__ = e21629;
var statearr_21630_21648 = state_21602;
(statearr_21630_21648[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21649 = state_21602;
state_21602 = G__21649;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_21602){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_21602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___21632,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__5811__auto__ = (function (){var statearr_21631 = f__5810__auto__.call(null);
(statearr_21631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___21632);

return statearr_21631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___21632,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__5809__auto___21757 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___21757,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___21757,out){
return (function (state_21733){
var state_val_21734 = (state_21733[(1)]);
if((state_val_21734 === (7))){
var inst_21713 = (state_21733[(7)]);
var inst_21712 = (state_21733[(8)]);
var inst_21712__$1 = (state_21733[(2)]);
var inst_21713__$1 = cljs.core.nth.call(null,inst_21712__$1,(0),null);
var inst_21714 = cljs.core.nth.call(null,inst_21712__$1,(1),null);
var inst_21715 = (inst_21713__$1 == null);
var state_21733__$1 = (function (){var statearr_21735 = state_21733;
(statearr_21735[(9)] = inst_21714);

(statearr_21735[(7)] = inst_21713__$1);

(statearr_21735[(8)] = inst_21712__$1);

return statearr_21735;
})();
if(cljs.core.truth_(inst_21715)){
var statearr_21736_21758 = state_21733__$1;
(statearr_21736_21758[(1)] = (8));

} else {
var statearr_21737_21759 = state_21733__$1;
(statearr_21737_21759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21734 === (1))){
var inst_21704 = cljs.core.vec.call(null,chs);
var inst_21705 = inst_21704;
var state_21733__$1 = (function (){var statearr_21738 = state_21733;
(statearr_21738[(10)] = inst_21705);

return statearr_21738;
})();
var statearr_21739_21760 = state_21733__$1;
(statearr_21739_21760[(2)] = null);

(statearr_21739_21760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21734 === (4))){
var inst_21705 = (state_21733[(10)]);
var state_21733__$1 = state_21733;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21733__$1,(7),inst_21705);
} else {
if((state_val_21734 === (6))){
var inst_21729 = (state_21733[(2)]);
var state_21733__$1 = state_21733;
var statearr_21740_21761 = state_21733__$1;
(statearr_21740_21761[(2)] = inst_21729);

(statearr_21740_21761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21734 === (3))){
var inst_21731 = (state_21733[(2)]);
var state_21733__$1 = state_21733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21733__$1,inst_21731);
} else {
if((state_val_21734 === (2))){
var inst_21705 = (state_21733[(10)]);
var inst_21707 = cljs.core.count.call(null,inst_21705);
var inst_21708 = (inst_21707 > (0));
var state_21733__$1 = state_21733;
if(cljs.core.truth_(inst_21708)){
var statearr_21742_21762 = state_21733__$1;
(statearr_21742_21762[(1)] = (4));

} else {
var statearr_21743_21763 = state_21733__$1;
(statearr_21743_21763[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21734 === (11))){
var inst_21705 = (state_21733[(10)]);
var inst_21722 = (state_21733[(2)]);
var tmp21741 = inst_21705;
var inst_21705__$1 = tmp21741;
var state_21733__$1 = (function (){var statearr_21744 = state_21733;
(statearr_21744[(10)] = inst_21705__$1);

(statearr_21744[(11)] = inst_21722);

return statearr_21744;
})();
var statearr_21745_21764 = state_21733__$1;
(statearr_21745_21764[(2)] = null);

(statearr_21745_21764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21734 === (9))){
var inst_21713 = (state_21733[(7)]);
var state_21733__$1 = state_21733;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21733__$1,(11),out,inst_21713);
} else {
if((state_val_21734 === (5))){
var inst_21727 = cljs.core.async.close_BANG_.call(null,out);
var state_21733__$1 = state_21733;
var statearr_21746_21765 = state_21733__$1;
(statearr_21746_21765[(2)] = inst_21727);

(statearr_21746_21765[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21734 === (10))){
var inst_21725 = (state_21733[(2)]);
var state_21733__$1 = state_21733;
var statearr_21747_21766 = state_21733__$1;
(statearr_21747_21766[(2)] = inst_21725);

(statearr_21747_21766[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21734 === (8))){
var inst_21705 = (state_21733[(10)]);
var inst_21714 = (state_21733[(9)]);
var inst_21713 = (state_21733[(7)]);
var inst_21712 = (state_21733[(8)]);
var inst_21717 = (function (){var c = inst_21714;
var v = inst_21713;
var vec__21710 = inst_21712;
var cs = inst_21705;
return ((function (c,v,vec__21710,cs,inst_21705,inst_21714,inst_21713,inst_21712,state_val_21734,c__5809__auto___21757,out){
return (function (p1__21650_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21650_SHARP_);
});
;})(c,v,vec__21710,cs,inst_21705,inst_21714,inst_21713,inst_21712,state_val_21734,c__5809__auto___21757,out))
})();
var inst_21718 = cljs.core.filterv.call(null,inst_21717,inst_21705);
var inst_21705__$1 = inst_21718;
var state_21733__$1 = (function (){var statearr_21748 = state_21733;
(statearr_21748[(10)] = inst_21705__$1);

return statearr_21748;
})();
var statearr_21749_21767 = state_21733__$1;
(statearr_21749_21767[(2)] = null);

(statearr_21749_21767[(1)] = (2));


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
});})(c__5809__auto___21757,out))
;
return ((function (switch__5794__auto__,c__5809__auto___21757,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_21753 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21753[(0)] = state_machine__5795__auto__);

(statearr_21753[(1)] = (1));

return statearr_21753;
});
var state_machine__5795__auto____1 = (function (state_21733){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_21733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e21754){if((e21754 instanceof Object)){
var ex__5798__auto__ = e21754;
var statearr_21755_21768 = state_21733;
(statearr_21755_21768[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21769 = state_21733;
state_21733 = G__21769;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_21733){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_21733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___21757,out))
})();
var state__5811__auto__ = (function (){var statearr_21756 = f__5810__auto__.call(null);
(statearr_21756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___21757);

return statearr_21756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___21757,out))
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
var c__5809__auto___21862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___21862,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___21862,out){
return (function (state_21839){
var state_val_21840 = (state_21839[(1)]);
if((state_val_21840 === (7))){
var inst_21821 = (state_21839[(7)]);
var inst_21821__$1 = (state_21839[(2)]);
var inst_21822 = (inst_21821__$1 == null);
var inst_21823 = cljs.core.not.call(null,inst_21822);
var state_21839__$1 = (function (){var statearr_21841 = state_21839;
(statearr_21841[(7)] = inst_21821__$1);

return statearr_21841;
})();
if(inst_21823){
var statearr_21842_21863 = state_21839__$1;
(statearr_21842_21863[(1)] = (8));

} else {
var statearr_21843_21864 = state_21839__$1;
(statearr_21843_21864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21840 === (1))){
var inst_21816 = (0);
var state_21839__$1 = (function (){var statearr_21844 = state_21839;
(statearr_21844[(8)] = inst_21816);

return statearr_21844;
})();
var statearr_21845_21865 = state_21839__$1;
(statearr_21845_21865[(2)] = null);

(statearr_21845_21865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21840 === (4))){
var state_21839__$1 = state_21839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21839__$1,(7),ch);
} else {
if((state_val_21840 === (6))){
var inst_21834 = (state_21839[(2)]);
var state_21839__$1 = state_21839;
var statearr_21846_21866 = state_21839__$1;
(statearr_21846_21866[(2)] = inst_21834);

(statearr_21846_21866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21840 === (3))){
var inst_21836 = (state_21839[(2)]);
var inst_21837 = cljs.core.async.close_BANG_.call(null,out);
var state_21839__$1 = (function (){var statearr_21847 = state_21839;
(statearr_21847[(9)] = inst_21836);

return statearr_21847;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21839__$1,inst_21837);
} else {
if((state_val_21840 === (2))){
var inst_21816 = (state_21839[(8)]);
var inst_21818 = (inst_21816 < n);
var state_21839__$1 = state_21839;
if(cljs.core.truth_(inst_21818)){
var statearr_21848_21867 = state_21839__$1;
(statearr_21848_21867[(1)] = (4));

} else {
var statearr_21849_21868 = state_21839__$1;
(statearr_21849_21868[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21840 === (11))){
var inst_21816 = (state_21839[(8)]);
var inst_21826 = (state_21839[(2)]);
var inst_21827 = (inst_21816 + (1));
var inst_21816__$1 = inst_21827;
var state_21839__$1 = (function (){var statearr_21850 = state_21839;
(statearr_21850[(8)] = inst_21816__$1);

(statearr_21850[(10)] = inst_21826);

return statearr_21850;
})();
var statearr_21851_21869 = state_21839__$1;
(statearr_21851_21869[(2)] = null);

(statearr_21851_21869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21840 === (9))){
var state_21839__$1 = state_21839;
var statearr_21852_21870 = state_21839__$1;
(statearr_21852_21870[(2)] = null);

(statearr_21852_21870[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21840 === (5))){
var state_21839__$1 = state_21839;
var statearr_21853_21871 = state_21839__$1;
(statearr_21853_21871[(2)] = null);

(statearr_21853_21871[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21840 === (10))){
var inst_21831 = (state_21839[(2)]);
var state_21839__$1 = state_21839;
var statearr_21854_21872 = state_21839__$1;
(statearr_21854_21872[(2)] = inst_21831);

(statearr_21854_21872[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21840 === (8))){
var inst_21821 = (state_21839[(7)]);
var state_21839__$1 = state_21839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21839__$1,(11),out,inst_21821);
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
});})(c__5809__auto___21862,out))
;
return ((function (switch__5794__auto__,c__5809__auto___21862,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_21858 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21858[(0)] = state_machine__5795__auto__);

(statearr_21858[(1)] = (1));

return statearr_21858;
});
var state_machine__5795__auto____1 = (function (state_21839){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_21839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e21859){if((e21859 instanceof Object)){
var ex__5798__auto__ = e21859;
var statearr_21860_21873 = state_21839;
(statearr_21860_21873[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21874 = state_21839;
state_21839 = G__21874;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_21839){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_21839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___21862,out))
})();
var state__5811__auto__ = (function (){var statearr_21861 = f__5810__auto__.call(null);
(statearr_21861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___21862);

return statearr_21861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___21862,out))
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
if(typeof cljs.core.async.t21882 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21882 = (function (ch,f,map_LT_,meta21883){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21883 = meta21883;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21882.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21882.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t21882.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21882.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t21885 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21885 = (function (fn1,_,meta21883,map_LT_,f,ch,meta21886){
this.fn1 = fn1;
this._ = _;
this.meta21883 = meta21883;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21886 = meta21886;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21885.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21885.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t21885.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21875_SHARP_){
return f1.call(null,(((p1__21875_SHARP_ == null))?null:self__.f.call(null,p1__21875_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t21885.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21887){
var self__ = this;
var _21887__$1 = this;
return self__.meta21886;
});})(___$1))
;

cljs.core.async.t21885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21887,meta21886__$1){
var self__ = this;
var _21887__$1 = this;
return (new cljs.core.async.t21885(self__.fn1,self__._,self__.meta21883,self__.map_LT_,self__.f,self__.ch,meta21886__$1));
});})(___$1))
;

cljs.core.async.t21885.cljs$lang$type = true;

cljs.core.async.t21885.cljs$lang$ctorStr = "cljs.core.async/t21885";

cljs.core.async.t21885.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t21885");
});})(___$1))
;

cljs.core.async.__GT_t21885 = ((function (___$1){
return (function __GT_t21885(fn1__$1,___$2,meta21883__$1,map_LT___$1,f__$1,ch__$1,meta21886){
return (new cljs.core.async.t21885(fn1__$1,___$2,meta21883__$1,map_LT___$1,f__$1,ch__$1,meta21886));
});})(___$1))
;

}

return (new cljs.core.async.t21885(fn1,___$1,self__.meta21883,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
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

cljs.core.async.t21882.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21882.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21882.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t21882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21884){
var self__ = this;
var _21884__$1 = this;
return self__.meta21883;
});

cljs.core.async.t21882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21884,meta21883__$1){
var self__ = this;
var _21884__$1 = this;
return (new cljs.core.async.t21882(self__.ch,self__.f,self__.map_LT_,meta21883__$1));
});

cljs.core.async.t21882.cljs$lang$type = true;

cljs.core.async.t21882.cljs$lang$ctorStr = "cljs.core.async/t21882";

cljs.core.async.t21882.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t21882");
});

cljs.core.async.__GT_t21882 = (function __GT_t21882(ch__$1,f__$1,map_LT___$1,meta21883){
return (new cljs.core.async.t21882(ch__$1,f__$1,map_LT___$1,meta21883));
});

}

return (new cljs.core.async.t21882(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t21891 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21891 = (function (ch,f,map_GT_,meta21892){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta21892 = meta21892;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21891.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21891.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t21891.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21891.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t21891.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21891.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21893){
var self__ = this;
var _21893__$1 = this;
return self__.meta21892;
});

cljs.core.async.t21891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21893,meta21892__$1){
var self__ = this;
var _21893__$1 = this;
return (new cljs.core.async.t21891(self__.ch,self__.f,self__.map_GT_,meta21892__$1));
});

cljs.core.async.t21891.cljs$lang$type = true;

cljs.core.async.t21891.cljs$lang$ctorStr = "cljs.core.async/t21891";

cljs.core.async.t21891.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t21891");
});

cljs.core.async.__GT_t21891 = (function __GT_t21891(ch__$1,f__$1,map_GT___$1,meta21892){
return (new cljs.core.async.t21891(ch__$1,f__$1,map_GT___$1,meta21892));
});

}

return (new cljs.core.async.t21891(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t21897 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21897 = (function (ch,p,filter_GT_,meta21898){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta21898 = meta21898;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21897.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21897.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t21897.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21897.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t21897.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21897.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21897.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t21897.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21899){
var self__ = this;
var _21899__$1 = this;
return self__.meta21898;
});

cljs.core.async.t21897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21899,meta21898__$1){
var self__ = this;
var _21899__$1 = this;
return (new cljs.core.async.t21897(self__.ch,self__.p,self__.filter_GT_,meta21898__$1));
});

cljs.core.async.t21897.cljs$lang$type = true;

cljs.core.async.t21897.cljs$lang$ctorStr = "cljs.core.async/t21897";

cljs.core.async.t21897.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t21897");
});

cljs.core.async.__GT_t21897 = (function __GT_t21897(ch__$1,p__$1,filter_GT___$1,meta21898){
return (new cljs.core.async.t21897(ch__$1,p__$1,filter_GT___$1,meta21898));
});

}

return (new cljs.core.async.t21897(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
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
var c__5809__auto___21982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___21982,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___21982,out){
return (function (state_21961){
var state_val_21962 = (state_21961[(1)]);
if((state_val_21962 === (7))){
var inst_21957 = (state_21961[(2)]);
var state_21961__$1 = state_21961;
var statearr_21963_21983 = state_21961__$1;
(statearr_21963_21983[(2)] = inst_21957);

(statearr_21963_21983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (1))){
var state_21961__$1 = state_21961;
var statearr_21964_21984 = state_21961__$1;
(statearr_21964_21984[(2)] = null);

(statearr_21964_21984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (4))){
var inst_21943 = (state_21961[(7)]);
var inst_21943__$1 = (state_21961[(2)]);
var inst_21944 = (inst_21943__$1 == null);
var state_21961__$1 = (function (){var statearr_21965 = state_21961;
(statearr_21965[(7)] = inst_21943__$1);

return statearr_21965;
})();
if(cljs.core.truth_(inst_21944)){
var statearr_21966_21985 = state_21961__$1;
(statearr_21966_21985[(1)] = (5));

} else {
var statearr_21967_21986 = state_21961__$1;
(statearr_21967_21986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (6))){
var inst_21943 = (state_21961[(7)]);
var inst_21948 = p.call(null,inst_21943);
var state_21961__$1 = state_21961;
if(cljs.core.truth_(inst_21948)){
var statearr_21968_21987 = state_21961__$1;
(statearr_21968_21987[(1)] = (8));

} else {
var statearr_21969_21988 = state_21961__$1;
(statearr_21969_21988[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (3))){
var inst_21959 = (state_21961[(2)]);
var state_21961__$1 = state_21961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21961__$1,inst_21959);
} else {
if((state_val_21962 === (2))){
var state_21961__$1 = state_21961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21961__$1,(4),ch);
} else {
if((state_val_21962 === (11))){
var inst_21951 = (state_21961[(2)]);
var state_21961__$1 = state_21961;
var statearr_21970_21989 = state_21961__$1;
(statearr_21970_21989[(2)] = inst_21951);

(statearr_21970_21989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (9))){
var state_21961__$1 = state_21961;
var statearr_21971_21990 = state_21961__$1;
(statearr_21971_21990[(2)] = null);

(statearr_21971_21990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (5))){
var inst_21946 = cljs.core.async.close_BANG_.call(null,out);
var state_21961__$1 = state_21961;
var statearr_21972_21991 = state_21961__$1;
(statearr_21972_21991[(2)] = inst_21946);

(statearr_21972_21991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (10))){
var inst_21954 = (state_21961[(2)]);
var state_21961__$1 = (function (){var statearr_21973 = state_21961;
(statearr_21973[(8)] = inst_21954);

return statearr_21973;
})();
var statearr_21974_21992 = state_21961__$1;
(statearr_21974_21992[(2)] = null);

(statearr_21974_21992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (8))){
var inst_21943 = (state_21961[(7)]);
var state_21961__$1 = state_21961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21961__$1,(11),out,inst_21943);
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
});})(c__5809__auto___21982,out))
;
return ((function (switch__5794__auto__,c__5809__auto___21982,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_21978 = [null,null,null,null,null,null,null,null,null];
(statearr_21978[(0)] = state_machine__5795__auto__);

(statearr_21978[(1)] = (1));

return statearr_21978;
});
var state_machine__5795__auto____1 = (function (state_21961){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_21961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e21979){if((e21979 instanceof Object)){
var ex__5798__auto__ = e21979;
var statearr_21980_21993 = state_21961;
(statearr_21980_21993[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21994 = state_21961;
state_21961 = G__21994;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_21961){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_21961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___21982,out))
})();
var state__5811__auto__ = (function (){var statearr_21981 = f__5810__auto__.call(null);
(statearr_21981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___21982);

return statearr_21981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___21982,out))
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
return (function (state_22160){
var state_val_22161 = (state_22160[(1)]);
if((state_val_22161 === (7))){
var inst_22156 = (state_22160[(2)]);
var state_22160__$1 = state_22160;
var statearr_22162_22203 = state_22160__$1;
(statearr_22162_22203[(2)] = inst_22156);

(statearr_22162_22203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22161 === (20))){
var inst_22126 = (state_22160[(7)]);
var inst_22137 = (state_22160[(2)]);
var inst_22138 = cljs.core.next.call(null,inst_22126);
var inst_22112 = inst_22138;
var inst_22113 = null;
var inst_22114 = (0);
var inst_22115 = (0);
var state_22160__$1 = (function (){var statearr_22163 = state_22160;
(statearr_22163[(8)] = inst_22112);

(statearr_22163[(9)] = inst_22137);

(statearr_22163[(10)] = inst_22113);

(statearr_22163[(11)] = inst_22115);

(statearr_22163[(12)] = inst_22114);

return statearr_22163;
})();
var statearr_22164_22204 = state_22160__$1;
(statearr_22164_22204[(2)] = null);

(statearr_22164_22204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22161 === (1))){
var state_22160__$1 = state_22160;
var statearr_22165_22205 = state_22160__$1;
(statearr_22165_22205[(2)] = null);

(statearr_22165_22205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22161 === (4))){
var inst_22101 = (state_22160[(13)]);
var inst_22101__$1 = (state_22160[(2)]);
var inst_22102 = (inst_22101__$1 == null);
var state_22160__$1 = (function (){var statearr_22166 = state_22160;
(statearr_22166[(13)] = inst_22101__$1);

return statearr_22166;
})();
if(cljs.core.truth_(inst_22102)){
var statearr_22167_22206 = state_22160__$1;
(statearr_22167_22206[(1)] = (5));

} else {
var statearr_22168_22207 = state_22160__$1;
(statearr_22168_22207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22161 === (15))){
var state_22160__$1 = state_22160;
var statearr_22172_22208 = state_22160__$1;
(statearr_22172_22208[(2)] = null);

(statearr_22172_22208[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22161 === (21))){
var state_22160__$1 = state_22160;
var statearr_22173_22209 = state_22160__$1;
(statearr_22173_22209[(2)] = null);

(statearr_22173_22209[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22161 === (13))){
var inst_22112 = (state_22160[(8)]);
var inst_22113 = (state_22160[(10)]);
var inst_22115 = (state_22160[(11)]);
var inst_22114 = (state_22160[(12)]);
var inst_22122 = (state_22160[(2)]);
var inst_22123 = (inst_22115 + (1));
var tmp22169 = inst_22112;
var tmp22170 = inst_22113;
var tmp22171 = inst_22114;
var inst_22112__$1 = tmp22169;
var inst_22113__$1 = tmp22170;
var inst_22114__$1 = tmp22171;
var inst_22115__$1 = inst_22123;
var state_22160__$1 = (function (){var statearr_22174 = state_22160;
(statearr_22174[(8)] = inst_22112__$1);

(statearr_22174[(14)] = inst_22122);

(statearr_22174[(10)] = inst_22113__$1);

(statearr_22174[(11)] = inst_22115__$1);

(statearr_22174[(12)] = inst_22114__$1);

return statearr_22174;
})();
var statearr_22175_22210 = state_22160__$1;
(statearr_22175_22210[(2)] = null);

(statearr_22175_22210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22161 === (22))){
var state_22160__$1 = state_22160;
var statearr_22176_22211 = state_22160__$1;
(statearr_22176_22211[(2)] = null);

(statearr_22176_22211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22161 === (6))){
var inst_22101 = (state_22160[(13)]);
var inst_22110 = f.call(null,inst_22101);
var inst_22111 = cljs.core.seq.call(null,inst_22110);
var inst_22112 = inst_22111;
var inst_22113 = null;
var inst_22114 = (0);
var inst_22115 = (0);
var state_22160__$1 = (function (){var statearr_22177 = state_22160;
(statearr_22177[(8)] = inst_22112);

(statearr_22177[(10)] = inst_22113);

(statearr_22177[(11)] = inst_22115);

(statearr_22177[(12)] = inst_22114);

return statearr_22177;
})();
var statearr_22178_22212 = state_22160__$1;
(statearr_22178_22212[(2)] = null);

(statearr_22178_22212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22161 === (17))){
var inst_22126 = (state_22160[(7)]);
var inst_22130 = cljs.core.chunk_first.call(null,inst_22126);
var inst_22131 = cljs.core.chunk_rest.call(null,inst_22126);
var inst_22132 = cljs.core.count.call(null,inst_22130);
var inst_22112 = inst_22131;
var inst_22113 = inst_22130;
var inst_22114 = inst_22132;
var inst_22115 = (0);
var state_22160__$1 = (function (){var statearr_22179 = state_22160;
(statearr_22179[(8)] = inst_22112);

(statearr_22179[(10)] = inst_22113);

(statearr_22179[(11)] = inst_22115);

(statearr_22179[(12)] = inst_22114);

return statearr_22179;
})();
var statearr_22180_22213 = state_22160__$1;
(statearr_22180_22213[(2)] = null);

(statearr_22180_22213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22161 === (3))){
var inst_22158 = (state_22160[(2)]);
var state_22160__$1 = state_22160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22160__$1,inst_22158);
} else {
if((state_val_22161 === (12))){
var inst_22146 = (state_22160[(2)]);
var state_22160__$1 = state_22160;
var statearr_22181_22214 = state_22160__$1;
(statearr_22181_22214[(2)] = inst_22146);

(statearr_22181_22214[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22161 === (2))){
var state_22160__$1 = state_22160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22160__$1,(4),in$);
} else {
if((state_val_22161 === (23))){
var inst_22154 = (state_22160[(2)]);
var state_22160__$1 = state_22160;
var statearr_22182_22215 = state_22160__$1;
(statearr_22182_22215[(2)] = inst_22154);

(statearr_22182_22215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22161 === (19))){
var inst_22141 = (state_22160[(2)]);
var state_22160__$1 = state_22160;
var statearr_22183_22216 = state_22160__$1;
(statearr_22183_22216[(2)] = inst_22141);

(statearr_22183_22216[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22161 === (11))){
var inst_22112 = (state_22160[(8)]);
var inst_22126 = (state_22160[(7)]);
var inst_22126__$1 = cljs.core.seq.call(null,inst_22112);
var state_22160__$1 = (function (){var statearr_22184 = state_22160;
(statearr_22184[(7)] = inst_22126__$1);

return statearr_22184;
})();
if(inst_22126__$1){
var statearr_22185_22217 = state_22160__$1;
(statearr_22185_22217[(1)] = (14));

} else {
var statearr_22186_22218 = state_22160__$1;
(statearr_22186_22218[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22161 === (9))){
var inst_22148 = (state_22160[(2)]);
var inst_22149 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22160__$1 = (function (){var statearr_22187 = state_22160;
(statearr_22187[(15)] = inst_22148);

return statearr_22187;
})();
if(cljs.core.truth_(inst_22149)){
var statearr_22188_22219 = state_22160__$1;
(statearr_22188_22219[(1)] = (21));

} else {
var statearr_22189_22220 = state_22160__$1;
(statearr_22189_22220[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22161 === (5))){
var inst_22104 = cljs.core.async.close_BANG_.call(null,out);
var state_22160__$1 = state_22160;
var statearr_22190_22221 = state_22160__$1;
(statearr_22190_22221[(2)] = inst_22104);

(statearr_22190_22221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22161 === (14))){
var inst_22126 = (state_22160[(7)]);
var inst_22128 = cljs.core.chunked_seq_QMARK_.call(null,inst_22126);
var state_22160__$1 = state_22160;
if(inst_22128){
var statearr_22191_22222 = state_22160__$1;
(statearr_22191_22222[(1)] = (17));

} else {
var statearr_22192_22223 = state_22160__$1;
(statearr_22192_22223[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22161 === (16))){
var inst_22144 = (state_22160[(2)]);
var state_22160__$1 = state_22160;
var statearr_22193_22224 = state_22160__$1;
(statearr_22193_22224[(2)] = inst_22144);

(statearr_22193_22224[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22161 === (10))){
var inst_22113 = (state_22160[(10)]);
var inst_22115 = (state_22160[(11)]);
var inst_22120 = cljs.core._nth.call(null,inst_22113,inst_22115);
var state_22160__$1 = state_22160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22160__$1,(13),out,inst_22120);
} else {
if((state_val_22161 === (18))){
var inst_22126 = (state_22160[(7)]);
var inst_22135 = cljs.core.first.call(null,inst_22126);
var state_22160__$1 = state_22160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22160__$1,(20),out,inst_22135);
} else {
if((state_val_22161 === (8))){
var inst_22115 = (state_22160[(11)]);
var inst_22114 = (state_22160[(12)]);
var inst_22117 = (inst_22115 < inst_22114);
var inst_22118 = inst_22117;
var state_22160__$1 = state_22160;
if(cljs.core.truth_(inst_22118)){
var statearr_22194_22225 = state_22160__$1;
(statearr_22194_22225[(1)] = (10));

} else {
var statearr_22195_22226 = state_22160__$1;
(statearr_22195_22226[(1)] = (11));

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
var statearr_22199 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22199[(0)] = state_machine__5795__auto__);

(statearr_22199[(1)] = (1));

return statearr_22199;
});
var state_machine__5795__auto____1 = (function (state_22160){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_22160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e22200){if((e22200 instanceof Object)){
var ex__5798__auto__ = e22200;
var statearr_22201_22227 = state_22160;
(statearr_22201_22227[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22228 = state_22160;
state_22160 = G__22228;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_22160){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_22160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_22202 = f__5810__auto__.call(null);
(statearr_22202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_22202;
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
var c__5809__auto___22325 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___22325,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___22325,out){
return (function (state_22300){
var state_val_22301 = (state_22300[(1)]);
if((state_val_22301 === (7))){
var inst_22295 = (state_22300[(2)]);
var state_22300__$1 = state_22300;
var statearr_22302_22326 = state_22300__$1;
(statearr_22302_22326[(2)] = inst_22295);

(statearr_22302_22326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22301 === (1))){
var inst_22277 = null;
var state_22300__$1 = (function (){var statearr_22303 = state_22300;
(statearr_22303[(7)] = inst_22277);

return statearr_22303;
})();
var statearr_22304_22327 = state_22300__$1;
(statearr_22304_22327[(2)] = null);

(statearr_22304_22327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22301 === (4))){
var inst_22280 = (state_22300[(8)]);
var inst_22280__$1 = (state_22300[(2)]);
var inst_22281 = (inst_22280__$1 == null);
var inst_22282 = cljs.core.not.call(null,inst_22281);
var state_22300__$1 = (function (){var statearr_22305 = state_22300;
(statearr_22305[(8)] = inst_22280__$1);

return statearr_22305;
})();
if(inst_22282){
var statearr_22306_22328 = state_22300__$1;
(statearr_22306_22328[(1)] = (5));

} else {
var statearr_22307_22329 = state_22300__$1;
(statearr_22307_22329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22301 === (6))){
var state_22300__$1 = state_22300;
var statearr_22308_22330 = state_22300__$1;
(statearr_22308_22330[(2)] = null);

(statearr_22308_22330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22301 === (3))){
var inst_22297 = (state_22300[(2)]);
var inst_22298 = cljs.core.async.close_BANG_.call(null,out);
var state_22300__$1 = (function (){var statearr_22309 = state_22300;
(statearr_22309[(9)] = inst_22297);

return statearr_22309;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22300__$1,inst_22298);
} else {
if((state_val_22301 === (2))){
var state_22300__$1 = state_22300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22300__$1,(4),ch);
} else {
if((state_val_22301 === (11))){
var inst_22280 = (state_22300[(8)]);
var inst_22289 = (state_22300[(2)]);
var inst_22277 = inst_22280;
var state_22300__$1 = (function (){var statearr_22310 = state_22300;
(statearr_22310[(7)] = inst_22277);

(statearr_22310[(10)] = inst_22289);

return statearr_22310;
})();
var statearr_22311_22331 = state_22300__$1;
(statearr_22311_22331[(2)] = null);

(statearr_22311_22331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22301 === (9))){
var inst_22280 = (state_22300[(8)]);
var state_22300__$1 = state_22300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22300__$1,(11),out,inst_22280);
} else {
if((state_val_22301 === (5))){
var inst_22277 = (state_22300[(7)]);
var inst_22280 = (state_22300[(8)]);
var inst_22284 = cljs.core._EQ_.call(null,inst_22280,inst_22277);
var state_22300__$1 = state_22300;
if(inst_22284){
var statearr_22313_22332 = state_22300__$1;
(statearr_22313_22332[(1)] = (8));

} else {
var statearr_22314_22333 = state_22300__$1;
(statearr_22314_22333[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22301 === (10))){
var inst_22292 = (state_22300[(2)]);
var state_22300__$1 = state_22300;
var statearr_22315_22334 = state_22300__$1;
(statearr_22315_22334[(2)] = inst_22292);

(statearr_22315_22334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22301 === (8))){
var inst_22277 = (state_22300[(7)]);
var tmp22312 = inst_22277;
var inst_22277__$1 = tmp22312;
var state_22300__$1 = (function (){var statearr_22316 = state_22300;
(statearr_22316[(7)] = inst_22277__$1);

return statearr_22316;
})();
var statearr_22317_22335 = state_22300__$1;
(statearr_22317_22335[(2)] = null);

(statearr_22317_22335[(1)] = (2));


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
});})(c__5809__auto___22325,out))
;
return ((function (switch__5794__auto__,c__5809__auto___22325,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_22321 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22321[(0)] = state_machine__5795__auto__);

(statearr_22321[(1)] = (1));

return statearr_22321;
});
var state_machine__5795__auto____1 = (function (state_22300){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_22300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e22322){if((e22322 instanceof Object)){
var ex__5798__auto__ = e22322;
var statearr_22323_22336 = state_22300;
(statearr_22323_22336[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22337 = state_22300;
state_22300 = G__22337;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_22300){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_22300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___22325,out))
})();
var state__5811__auto__ = (function (){var statearr_22324 = f__5810__auto__.call(null);
(statearr_22324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___22325);

return statearr_22324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___22325,out))
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
var c__5809__auto___22472 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___22472,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___22472,out){
return (function (state_22442){
var state_val_22443 = (state_22442[(1)]);
if((state_val_22443 === (7))){
var inst_22438 = (state_22442[(2)]);
var state_22442__$1 = state_22442;
var statearr_22444_22473 = state_22442__$1;
(statearr_22444_22473[(2)] = inst_22438);

(statearr_22444_22473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (1))){
var inst_22405 = (new Array(n));
var inst_22406 = inst_22405;
var inst_22407 = (0);
var state_22442__$1 = (function (){var statearr_22445 = state_22442;
(statearr_22445[(7)] = inst_22406);

(statearr_22445[(8)] = inst_22407);

return statearr_22445;
})();
var statearr_22446_22474 = state_22442__$1;
(statearr_22446_22474[(2)] = null);

(statearr_22446_22474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (4))){
var inst_22410 = (state_22442[(9)]);
var inst_22410__$1 = (state_22442[(2)]);
var inst_22411 = (inst_22410__$1 == null);
var inst_22412 = cljs.core.not.call(null,inst_22411);
var state_22442__$1 = (function (){var statearr_22447 = state_22442;
(statearr_22447[(9)] = inst_22410__$1);

return statearr_22447;
})();
if(inst_22412){
var statearr_22448_22475 = state_22442__$1;
(statearr_22448_22475[(1)] = (5));

} else {
var statearr_22449_22476 = state_22442__$1;
(statearr_22449_22476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (15))){
var inst_22432 = (state_22442[(2)]);
var state_22442__$1 = state_22442;
var statearr_22450_22477 = state_22442__$1;
(statearr_22450_22477[(2)] = inst_22432);

(statearr_22450_22477[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (13))){
var state_22442__$1 = state_22442;
var statearr_22451_22478 = state_22442__$1;
(statearr_22451_22478[(2)] = null);

(statearr_22451_22478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (6))){
var inst_22407 = (state_22442[(8)]);
var inst_22428 = (inst_22407 > (0));
var state_22442__$1 = state_22442;
if(cljs.core.truth_(inst_22428)){
var statearr_22452_22479 = state_22442__$1;
(statearr_22452_22479[(1)] = (12));

} else {
var statearr_22453_22480 = state_22442__$1;
(statearr_22453_22480[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (3))){
var inst_22440 = (state_22442[(2)]);
var state_22442__$1 = state_22442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22442__$1,inst_22440);
} else {
if((state_val_22443 === (12))){
var inst_22406 = (state_22442[(7)]);
var inst_22430 = cljs.core.vec.call(null,inst_22406);
var state_22442__$1 = state_22442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22442__$1,(15),out,inst_22430);
} else {
if((state_val_22443 === (2))){
var state_22442__$1 = state_22442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22442__$1,(4),ch);
} else {
if((state_val_22443 === (11))){
var inst_22422 = (state_22442[(2)]);
var inst_22423 = (new Array(n));
var inst_22406 = inst_22423;
var inst_22407 = (0);
var state_22442__$1 = (function (){var statearr_22454 = state_22442;
(statearr_22454[(10)] = inst_22422);

(statearr_22454[(7)] = inst_22406);

(statearr_22454[(8)] = inst_22407);

return statearr_22454;
})();
var statearr_22455_22481 = state_22442__$1;
(statearr_22455_22481[(2)] = null);

(statearr_22455_22481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (9))){
var inst_22406 = (state_22442[(7)]);
var inst_22420 = cljs.core.vec.call(null,inst_22406);
var state_22442__$1 = state_22442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22442__$1,(11),out,inst_22420);
} else {
if((state_val_22443 === (5))){
var inst_22406 = (state_22442[(7)]);
var inst_22410 = (state_22442[(9)]);
var inst_22407 = (state_22442[(8)]);
var inst_22415 = (state_22442[(11)]);
var inst_22414 = (inst_22406[inst_22407] = inst_22410);
var inst_22415__$1 = (inst_22407 + (1));
var inst_22416 = (inst_22415__$1 < n);
var state_22442__$1 = (function (){var statearr_22456 = state_22442;
(statearr_22456[(12)] = inst_22414);

(statearr_22456[(11)] = inst_22415__$1);

return statearr_22456;
})();
if(cljs.core.truth_(inst_22416)){
var statearr_22457_22482 = state_22442__$1;
(statearr_22457_22482[(1)] = (8));

} else {
var statearr_22458_22483 = state_22442__$1;
(statearr_22458_22483[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (14))){
var inst_22435 = (state_22442[(2)]);
var inst_22436 = cljs.core.async.close_BANG_.call(null,out);
var state_22442__$1 = (function (){var statearr_22460 = state_22442;
(statearr_22460[(13)] = inst_22435);

return statearr_22460;
})();
var statearr_22461_22484 = state_22442__$1;
(statearr_22461_22484[(2)] = inst_22436);

(statearr_22461_22484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (10))){
var inst_22426 = (state_22442[(2)]);
var state_22442__$1 = state_22442;
var statearr_22462_22485 = state_22442__$1;
(statearr_22462_22485[(2)] = inst_22426);

(statearr_22462_22485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (8))){
var inst_22406 = (state_22442[(7)]);
var inst_22415 = (state_22442[(11)]);
var tmp22459 = inst_22406;
var inst_22406__$1 = tmp22459;
var inst_22407 = inst_22415;
var state_22442__$1 = (function (){var statearr_22463 = state_22442;
(statearr_22463[(7)] = inst_22406__$1);

(statearr_22463[(8)] = inst_22407);

return statearr_22463;
})();
var statearr_22464_22486 = state_22442__$1;
(statearr_22464_22486[(2)] = null);

(statearr_22464_22486[(1)] = (2));


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
});})(c__5809__auto___22472,out))
;
return ((function (switch__5794__auto__,c__5809__auto___22472,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_22468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22468[(0)] = state_machine__5795__auto__);

(statearr_22468[(1)] = (1));

return statearr_22468;
});
var state_machine__5795__auto____1 = (function (state_22442){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_22442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e22469){if((e22469 instanceof Object)){
var ex__5798__auto__ = e22469;
var statearr_22470_22487 = state_22442;
(statearr_22470_22487[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22488 = state_22442;
state_22442 = G__22488;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_22442){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_22442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___22472,out))
})();
var state__5811__auto__ = (function (){var statearr_22471 = f__5810__auto__.call(null);
(statearr_22471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___22472);

return statearr_22471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___22472,out))
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
var c__5809__auto___22631 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___22631,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___22631,out){
return (function (state_22601){
var state_val_22602 = (state_22601[(1)]);
if((state_val_22602 === (7))){
var inst_22597 = (state_22601[(2)]);
var state_22601__$1 = state_22601;
var statearr_22603_22632 = state_22601__$1;
(statearr_22603_22632[(2)] = inst_22597);

(statearr_22603_22632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22602 === (1))){
var inst_22560 = [];
var inst_22561 = inst_22560;
var inst_22562 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22601__$1 = (function (){var statearr_22604 = state_22601;
(statearr_22604[(7)] = inst_22561);

(statearr_22604[(8)] = inst_22562);

return statearr_22604;
})();
var statearr_22605_22633 = state_22601__$1;
(statearr_22605_22633[(2)] = null);

(statearr_22605_22633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22602 === (4))){
var inst_22565 = (state_22601[(9)]);
var inst_22565__$1 = (state_22601[(2)]);
var inst_22566 = (inst_22565__$1 == null);
var inst_22567 = cljs.core.not.call(null,inst_22566);
var state_22601__$1 = (function (){var statearr_22606 = state_22601;
(statearr_22606[(9)] = inst_22565__$1);

return statearr_22606;
})();
if(inst_22567){
var statearr_22607_22634 = state_22601__$1;
(statearr_22607_22634[(1)] = (5));

} else {
var statearr_22608_22635 = state_22601__$1;
(statearr_22608_22635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22602 === (15))){
var inst_22591 = (state_22601[(2)]);
var state_22601__$1 = state_22601;
var statearr_22609_22636 = state_22601__$1;
(statearr_22609_22636[(2)] = inst_22591);

(statearr_22609_22636[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22602 === (13))){
var state_22601__$1 = state_22601;
var statearr_22610_22637 = state_22601__$1;
(statearr_22610_22637[(2)] = null);

(statearr_22610_22637[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22602 === (6))){
var inst_22561 = (state_22601[(7)]);
var inst_22586 = inst_22561.length;
var inst_22587 = (inst_22586 > (0));
var state_22601__$1 = state_22601;
if(cljs.core.truth_(inst_22587)){
var statearr_22611_22638 = state_22601__$1;
(statearr_22611_22638[(1)] = (12));

} else {
var statearr_22612_22639 = state_22601__$1;
(statearr_22612_22639[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22602 === (3))){
var inst_22599 = (state_22601[(2)]);
var state_22601__$1 = state_22601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22601__$1,inst_22599);
} else {
if((state_val_22602 === (12))){
var inst_22561 = (state_22601[(7)]);
var inst_22589 = cljs.core.vec.call(null,inst_22561);
var state_22601__$1 = state_22601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22601__$1,(15),out,inst_22589);
} else {
if((state_val_22602 === (2))){
var state_22601__$1 = state_22601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22601__$1,(4),ch);
} else {
if((state_val_22602 === (11))){
var inst_22565 = (state_22601[(9)]);
var inst_22569 = (state_22601[(10)]);
var inst_22579 = (state_22601[(2)]);
var inst_22580 = [];
var inst_22581 = inst_22580.push(inst_22565);
var inst_22561 = inst_22580;
var inst_22562 = inst_22569;
var state_22601__$1 = (function (){var statearr_22613 = state_22601;
(statearr_22613[(11)] = inst_22579);

(statearr_22613[(7)] = inst_22561);

(statearr_22613[(8)] = inst_22562);

(statearr_22613[(12)] = inst_22581);

return statearr_22613;
})();
var statearr_22614_22640 = state_22601__$1;
(statearr_22614_22640[(2)] = null);

(statearr_22614_22640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22602 === (9))){
var inst_22561 = (state_22601[(7)]);
var inst_22577 = cljs.core.vec.call(null,inst_22561);
var state_22601__$1 = state_22601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22601__$1,(11),out,inst_22577);
} else {
if((state_val_22602 === (5))){
var inst_22565 = (state_22601[(9)]);
var inst_22569 = (state_22601[(10)]);
var inst_22562 = (state_22601[(8)]);
var inst_22569__$1 = f.call(null,inst_22565);
var inst_22570 = cljs.core._EQ_.call(null,inst_22569__$1,inst_22562);
var inst_22571 = cljs.core.keyword_identical_QMARK_.call(null,inst_22562,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22572 = (inst_22570) || (inst_22571);
var state_22601__$1 = (function (){var statearr_22615 = state_22601;
(statearr_22615[(10)] = inst_22569__$1);

return statearr_22615;
})();
if(cljs.core.truth_(inst_22572)){
var statearr_22616_22641 = state_22601__$1;
(statearr_22616_22641[(1)] = (8));

} else {
var statearr_22617_22642 = state_22601__$1;
(statearr_22617_22642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22602 === (14))){
var inst_22594 = (state_22601[(2)]);
var inst_22595 = cljs.core.async.close_BANG_.call(null,out);
var state_22601__$1 = (function (){var statearr_22619 = state_22601;
(statearr_22619[(13)] = inst_22594);

return statearr_22619;
})();
var statearr_22620_22643 = state_22601__$1;
(statearr_22620_22643[(2)] = inst_22595);

(statearr_22620_22643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22602 === (10))){
var inst_22584 = (state_22601[(2)]);
var state_22601__$1 = state_22601;
var statearr_22621_22644 = state_22601__$1;
(statearr_22621_22644[(2)] = inst_22584);

(statearr_22621_22644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22602 === (8))){
var inst_22565 = (state_22601[(9)]);
var inst_22561 = (state_22601[(7)]);
var inst_22569 = (state_22601[(10)]);
var inst_22574 = inst_22561.push(inst_22565);
var tmp22618 = inst_22561;
var inst_22561__$1 = tmp22618;
var inst_22562 = inst_22569;
var state_22601__$1 = (function (){var statearr_22622 = state_22601;
(statearr_22622[(7)] = inst_22561__$1);

(statearr_22622[(14)] = inst_22574);

(statearr_22622[(8)] = inst_22562);

return statearr_22622;
})();
var statearr_22623_22645 = state_22601__$1;
(statearr_22623_22645[(2)] = null);

(statearr_22623_22645[(1)] = (2));


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
});})(c__5809__auto___22631,out))
;
return ((function (switch__5794__auto__,c__5809__auto___22631,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_22627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22627[(0)] = state_machine__5795__auto__);

(statearr_22627[(1)] = (1));

return statearr_22627;
});
var state_machine__5795__auto____1 = (function (state_22601){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_22601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e22628){if((e22628 instanceof Object)){
var ex__5798__auto__ = e22628;
var statearr_22629_22646 = state_22601;
(statearr_22629_22646[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22647 = state_22601;
state_22601 = G__22647;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_22601){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_22601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___22631,out))
})();
var state__5811__auto__ = (function (){var statearr_22630 = f__5810__auto__.call(null);
(statearr_22630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___22631);

return statearr_22630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___22631,out))
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
