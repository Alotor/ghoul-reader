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
if(typeof cljs.core.async.t11140 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11140 = (function (f,fn_handler,meta11141){
this.f = f;
this.fn_handler = fn_handler;
this.meta11141 = meta11141;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11140.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11140.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t11140.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t11140.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11142){
var self__ = this;
var _11142__$1 = this;
return self__.meta11141;
});

cljs.core.async.t11140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11142,meta11141__$1){
var self__ = this;
var _11142__$1 = this;
return (new cljs.core.async.t11140(self__.f,self__.fn_handler,meta11141__$1));
});

cljs.core.async.t11140.cljs$lang$type = true;

cljs.core.async.t11140.cljs$lang$ctorStr = "cljs.core.async/t11140";

cljs.core.async.t11140.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t11140");
});

cljs.core.async.__GT_t11140 = (function __GT_t11140(f__$1,fn_handler__$1,meta11141){
return (new cljs.core.async.t11140(f__$1,fn_handler__$1,meta11141));
});

}

return (new cljs.core.async.t11140(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
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
var G__11144 = buff;
if(G__11144){
var bit__4284__auto__ = null;
if(cljs.core.truth_((function (){var or__3608__auto__ = bit__4284__auto__;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return G__11144.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__11144.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11144);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11144);
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
var val_11145 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11145);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_11145,ret){
return (function (){
return fn1.call(null,val_11145);
});})(val_11145,ret))
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
var n__4490__auto___11146 = n;
var x_11147 = (0);
while(true){
if((x_11147 < n__4490__auto___11146)){
(a[x_11147] = (0));

var G__11148 = (x_11147 + (1));
x_11147 = G__11148;
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

var G__11149 = (i + (1));
i = G__11149;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t11153 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11153 = (function (flag,alt_flag,meta11154){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11154 = meta11154;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11153.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11153.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t11153.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t11153.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11155){
var self__ = this;
var _11155__$1 = this;
return self__.meta11154;
});})(flag))
;

cljs.core.async.t11153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11155,meta11154__$1){
var self__ = this;
var _11155__$1 = this;
return (new cljs.core.async.t11153(self__.flag,self__.alt_flag,meta11154__$1));
});})(flag))
;

cljs.core.async.t11153.cljs$lang$type = true;

cljs.core.async.t11153.cljs$lang$ctorStr = "cljs.core.async/t11153";

cljs.core.async.t11153.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t11153");
});})(flag))
;

cljs.core.async.__GT_t11153 = ((function (flag){
return (function __GT_t11153(flag__$1,alt_flag__$1,meta11154){
return (new cljs.core.async.t11153(flag__$1,alt_flag__$1,meta11154));
});})(flag))
;

}

return (new cljs.core.async.t11153(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t11159 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11159 = (function (cb,flag,alt_handler,meta11160){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11160 = meta11160;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11159.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11159.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t11159.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t11159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11161){
var self__ = this;
var _11161__$1 = this;
return self__.meta11160;
});

cljs.core.async.t11159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11161,meta11160__$1){
var self__ = this;
var _11161__$1 = this;
return (new cljs.core.async.t11159(self__.cb,self__.flag,self__.alt_handler,meta11160__$1));
});

cljs.core.async.t11159.cljs$lang$type = true;

cljs.core.async.t11159.cljs$lang$ctorStr = "cljs.core.async/t11159";

cljs.core.async.t11159.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t11159");
});

cljs.core.async.__GT_t11159 = (function __GT_t11159(cb__$1,flag__$1,alt_handler__$1,meta11160){
return (new cljs.core.async.t11159(cb__$1,flag__$1,alt_handler__$1,meta11160));
});

}

return (new cljs.core.async.t11159(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
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
return (function (p1__11162_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11162_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11163_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11163_SHARP_,port], null));
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
var G__11164 = (i + (1));
i = G__11164;
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
var alts_BANG___delegate = function (ports,p__11165){
var map__11167 = p__11165;
var map__11167__$1 = ((cljs.core.seq_QMARK_.call(null,map__11167))?cljs.core.apply.call(null,cljs.core.hash_map,map__11167):map__11167);
var opts = map__11167__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__11165 = null;
if (arguments.length > 1) {
  p__11165 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__11165);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11168){
var ports = cljs.core.first(arglist__11168);
var p__11165 = cljs.core.rest(arglist__11168);
return alts_BANG___delegate(ports,p__11165);
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
var c__5809__auto___11263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___11263){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___11263){
return (function (state_11239){
var state_val_11240 = (state_11239[(1)]);
if((state_val_11240 === (7))){
var inst_11235 = (state_11239[(2)]);
var state_11239__$1 = state_11239;
var statearr_11241_11264 = state_11239__$1;
(statearr_11241_11264[(2)] = inst_11235);

(statearr_11241_11264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11240 === (1))){
var state_11239__$1 = state_11239;
var statearr_11242_11265 = state_11239__$1;
(statearr_11242_11265[(2)] = null);

(statearr_11242_11265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11240 === (4))){
var inst_11218 = (state_11239[(7)]);
var inst_11218__$1 = (state_11239[(2)]);
var inst_11219 = (inst_11218__$1 == null);
var state_11239__$1 = (function (){var statearr_11243 = state_11239;
(statearr_11243[(7)] = inst_11218__$1);

return statearr_11243;
})();
if(cljs.core.truth_(inst_11219)){
var statearr_11244_11266 = state_11239__$1;
(statearr_11244_11266[(1)] = (5));

} else {
var statearr_11245_11267 = state_11239__$1;
(statearr_11245_11267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11240 === (13))){
var state_11239__$1 = state_11239;
var statearr_11246_11268 = state_11239__$1;
(statearr_11246_11268[(2)] = null);

(statearr_11246_11268[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11240 === (6))){
var inst_11218 = (state_11239[(7)]);
var state_11239__$1 = state_11239;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11239__$1,(11),to,inst_11218);
} else {
if((state_val_11240 === (3))){
var inst_11237 = (state_11239[(2)]);
var state_11239__$1 = state_11239;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11239__$1,inst_11237);
} else {
if((state_val_11240 === (12))){
var state_11239__$1 = state_11239;
var statearr_11247_11269 = state_11239__$1;
(statearr_11247_11269[(2)] = null);

(statearr_11247_11269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11240 === (2))){
var state_11239__$1 = state_11239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11239__$1,(4),from);
} else {
if((state_val_11240 === (11))){
var inst_11228 = (state_11239[(2)]);
var state_11239__$1 = state_11239;
if(cljs.core.truth_(inst_11228)){
var statearr_11248_11270 = state_11239__$1;
(statearr_11248_11270[(1)] = (12));

} else {
var statearr_11249_11271 = state_11239__$1;
(statearr_11249_11271[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11240 === (9))){
var state_11239__$1 = state_11239;
var statearr_11250_11272 = state_11239__$1;
(statearr_11250_11272[(2)] = null);

(statearr_11250_11272[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11240 === (5))){
var state_11239__$1 = state_11239;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11251_11273 = state_11239__$1;
(statearr_11251_11273[(1)] = (8));

} else {
var statearr_11252_11274 = state_11239__$1;
(statearr_11252_11274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11240 === (14))){
var inst_11233 = (state_11239[(2)]);
var state_11239__$1 = state_11239;
var statearr_11253_11275 = state_11239__$1;
(statearr_11253_11275[(2)] = inst_11233);

(statearr_11253_11275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11240 === (10))){
var inst_11225 = (state_11239[(2)]);
var state_11239__$1 = state_11239;
var statearr_11254_11276 = state_11239__$1;
(statearr_11254_11276[(2)] = inst_11225);

(statearr_11254_11276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11240 === (8))){
var inst_11222 = cljs.core.async.close_BANG_.call(null,to);
var state_11239__$1 = state_11239;
var statearr_11255_11277 = state_11239__$1;
(statearr_11255_11277[(2)] = inst_11222);

(statearr_11255_11277[(1)] = (10));


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
});})(c__5809__auto___11263))
;
return ((function (switch__5794__auto__,c__5809__auto___11263){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_11259 = [null,null,null,null,null,null,null,null];
(statearr_11259[(0)] = state_machine__5795__auto__);

(statearr_11259[(1)] = (1));

return statearr_11259;
});
var state_machine__5795__auto____1 = (function (state_11239){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_11239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e11260){if((e11260 instanceof Object)){
var ex__5798__auto__ = e11260;
var statearr_11261_11278 = state_11239;
(statearr_11261_11278[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11279 = state_11239;
state_11239 = G__11279;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_11239){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_11239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___11263))
})();
var state__5811__auto__ = (function (){var statearr_11262 = f__5810__auto__.call(null);
(statearr_11262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___11263);

return statearr_11262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___11263))
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
return (function (p__11463){
var vec__11464 = p__11463;
var v = cljs.core.nth.call(null,vec__11464,(0),null);
var p = cljs.core.nth.call(null,vec__11464,(1),null);
var job = vec__11464;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__5809__auto___11646 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___11646,res,vec__11464,v,p,job,jobs,results){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___11646,res,vec__11464,v,p,job,jobs,results){
return (function (state_11469){
var state_val_11470 = (state_11469[(1)]);
if((state_val_11470 === (2))){
var inst_11466 = (state_11469[(2)]);
var inst_11467 = cljs.core.async.close_BANG_.call(null,res);
var state_11469__$1 = (function (){var statearr_11471 = state_11469;
(statearr_11471[(7)] = inst_11466);

return statearr_11471;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11469__$1,inst_11467);
} else {
if((state_val_11470 === (1))){
var state_11469__$1 = state_11469;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11469__$1,(2),res,v);
} else {
return null;
}
}
});})(c__5809__auto___11646,res,vec__11464,v,p,job,jobs,results))
;
return ((function (switch__5794__auto__,c__5809__auto___11646,res,vec__11464,v,p,job,jobs,results){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_11475 = [null,null,null,null,null,null,null,null];
(statearr_11475[(0)] = state_machine__5795__auto__);

(statearr_11475[(1)] = (1));

return statearr_11475;
});
var state_machine__5795__auto____1 = (function (state_11469){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_11469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e11476){if((e11476 instanceof Object)){
var ex__5798__auto__ = e11476;
var statearr_11477_11647 = state_11469;
(statearr_11477_11647[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11648 = state_11469;
state_11469 = G__11648;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_11469){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_11469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___11646,res,vec__11464,v,p,job,jobs,results))
})();
var state__5811__auto__ = (function (){var statearr_11478 = f__5810__auto__.call(null);
(statearr_11478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___11646);

return statearr_11478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___11646,res,vec__11464,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__11479){
var vec__11480 = p__11479;
var v = cljs.core.nth.call(null,vec__11480,(0),null);
var p = cljs.core.nth.call(null,vec__11480,(1),null);
var job = vec__11480;
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
var n__4490__auto___11649 = n;
var __11650 = (0);
while(true){
if((__11650 < n__4490__auto___11649)){
var G__11481_11651 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__11481_11651) {
case "async":
var c__5809__auto___11653 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11650,c__5809__auto___11653,G__11481_11651,n__4490__auto___11649,jobs,results,process,async){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (__11650,c__5809__auto___11653,G__11481_11651,n__4490__auto___11649,jobs,results,process,async){
return (function (state_11494){
var state_val_11495 = (state_11494[(1)]);
if((state_val_11495 === (7))){
var inst_11490 = (state_11494[(2)]);
var state_11494__$1 = state_11494;
var statearr_11496_11654 = state_11494__$1;
(statearr_11496_11654[(2)] = inst_11490);

(statearr_11496_11654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11495 === (6))){
var state_11494__$1 = state_11494;
var statearr_11497_11655 = state_11494__$1;
(statearr_11497_11655[(2)] = null);

(statearr_11497_11655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11495 === (5))){
var state_11494__$1 = state_11494;
var statearr_11498_11656 = state_11494__$1;
(statearr_11498_11656[(2)] = null);

(statearr_11498_11656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11495 === (4))){
var inst_11484 = (state_11494[(2)]);
var inst_11485 = async.call(null,inst_11484);
var state_11494__$1 = state_11494;
if(cljs.core.truth_(inst_11485)){
var statearr_11499_11657 = state_11494__$1;
(statearr_11499_11657[(1)] = (5));

} else {
var statearr_11500_11658 = state_11494__$1;
(statearr_11500_11658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11495 === (3))){
var inst_11492 = (state_11494[(2)]);
var state_11494__$1 = state_11494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11494__$1,inst_11492);
} else {
if((state_val_11495 === (2))){
var state_11494__$1 = state_11494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11494__$1,(4),jobs);
} else {
if((state_val_11495 === (1))){
var state_11494__$1 = state_11494;
var statearr_11501_11659 = state_11494__$1;
(statearr_11501_11659[(2)] = null);

(statearr_11501_11659[(1)] = (2));


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
});})(__11650,c__5809__auto___11653,G__11481_11651,n__4490__auto___11649,jobs,results,process,async))
;
return ((function (__11650,switch__5794__auto__,c__5809__auto___11653,G__11481_11651,n__4490__auto___11649,jobs,results,process,async){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_11505 = [null,null,null,null,null,null,null];
(statearr_11505[(0)] = state_machine__5795__auto__);

(statearr_11505[(1)] = (1));

return statearr_11505;
});
var state_machine__5795__auto____1 = (function (state_11494){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_11494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e11506){if((e11506 instanceof Object)){
var ex__5798__auto__ = e11506;
var statearr_11507_11660 = state_11494;
(statearr_11507_11660[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11661 = state_11494;
state_11494 = G__11661;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_11494){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_11494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(__11650,switch__5794__auto__,c__5809__auto___11653,G__11481_11651,n__4490__auto___11649,jobs,results,process,async))
})();
var state__5811__auto__ = (function (){var statearr_11508 = f__5810__auto__.call(null);
(statearr_11508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___11653);

return statearr_11508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(__11650,c__5809__auto___11653,G__11481_11651,n__4490__auto___11649,jobs,results,process,async))
);


break;
case "compute":
var c__5809__auto___11662 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11650,c__5809__auto___11662,G__11481_11651,n__4490__auto___11649,jobs,results,process,async){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (__11650,c__5809__auto___11662,G__11481_11651,n__4490__auto___11649,jobs,results,process,async){
return (function (state_11521){
var state_val_11522 = (state_11521[(1)]);
if((state_val_11522 === (7))){
var inst_11517 = (state_11521[(2)]);
var state_11521__$1 = state_11521;
var statearr_11523_11663 = state_11521__$1;
(statearr_11523_11663[(2)] = inst_11517);

(statearr_11523_11663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11522 === (6))){
var state_11521__$1 = state_11521;
var statearr_11524_11664 = state_11521__$1;
(statearr_11524_11664[(2)] = null);

(statearr_11524_11664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11522 === (5))){
var state_11521__$1 = state_11521;
var statearr_11525_11665 = state_11521__$1;
(statearr_11525_11665[(2)] = null);

(statearr_11525_11665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11522 === (4))){
var inst_11511 = (state_11521[(2)]);
var inst_11512 = process.call(null,inst_11511);
var state_11521__$1 = state_11521;
if(cljs.core.truth_(inst_11512)){
var statearr_11526_11666 = state_11521__$1;
(statearr_11526_11666[(1)] = (5));

} else {
var statearr_11527_11667 = state_11521__$1;
(statearr_11527_11667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11522 === (3))){
var inst_11519 = (state_11521[(2)]);
var state_11521__$1 = state_11521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11521__$1,inst_11519);
} else {
if((state_val_11522 === (2))){
var state_11521__$1 = state_11521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11521__$1,(4),jobs);
} else {
if((state_val_11522 === (1))){
var state_11521__$1 = state_11521;
var statearr_11528_11668 = state_11521__$1;
(statearr_11528_11668[(2)] = null);

(statearr_11528_11668[(1)] = (2));


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
});})(__11650,c__5809__auto___11662,G__11481_11651,n__4490__auto___11649,jobs,results,process,async))
;
return ((function (__11650,switch__5794__auto__,c__5809__auto___11662,G__11481_11651,n__4490__auto___11649,jobs,results,process,async){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_11532 = [null,null,null,null,null,null,null];
(statearr_11532[(0)] = state_machine__5795__auto__);

(statearr_11532[(1)] = (1));

return statearr_11532;
});
var state_machine__5795__auto____1 = (function (state_11521){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_11521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e11533){if((e11533 instanceof Object)){
var ex__5798__auto__ = e11533;
var statearr_11534_11669 = state_11521;
(statearr_11534_11669[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11670 = state_11521;
state_11521 = G__11670;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_11521){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_11521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(__11650,switch__5794__auto__,c__5809__auto___11662,G__11481_11651,n__4490__auto___11649,jobs,results,process,async))
})();
var state__5811__auto__ = (function (){var statearr_11535 = f__5810__auto__.call(null);
(statearr_11535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___11662);

return statearr_11535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(__11650,c__5809__auto___11662,G__11481_11651,n__4490__auto___11649,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__11671 = (__11650 + (1));
__11650 = G__11671;
continue;
} else {
}
break;
}

var c__5809__auto___11672 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___11672,jobs,results,process,async){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___11672,jobs,results,process,async){
return (function (state_11557){
var state_val_11558 = (state_11557[(1)]);
if((state_val_11558 === (9))){
var inst_11550 = (state_11557[(2)]);
var state_11557__$1 = (function (){var statearr_11559 = state_11557;
(statearr_11559[(7)] = inst_11550);

return statearr_11559;
})();
var statearr_11560_11673 = state_11557__$1;
(statearr_11560_11673[(2)] = null);

(statearr_11560_11673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11558 === (8))){
var inst_11543 = (state_11557[(8)]);
var inst_11548 = (state_11557[(2)]);
var state_11557__$1 = (function (){var statearr_11561 = state_11557;
(statearr_11561[(9)] = inst_11548);

return statearr_11561;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11557__$1,(9),results,inst_11543);
} else {
if((state_val_11558 === (7))){
var inst_11553 = (state_11557[(2)]);
var state_11557__$1 = state_11557;
var statearr_11562_11674 = state_11557__$1;
(statearr_11562_11674[(2)] = inst_11553);

(statearr_11562_11674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11558 === (6))){
var inst_11543 = (state_11557[(8)]);
var inst_11538 = (state_11557[(10)]);
var inst_11543__$1 = cljs.core.async.chan.call(null,(1));
var inst_11544 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11545 = [inst_11538,inst_11543__$1];
var inst_11546 = (new cljs.core.PersistentVector(null,2,(5),inst_11544,inst_11545,null));
var state_11557__$1 = (function (){var statearr_11563 = state_11557;
(statearr_11563[(8)] = inst_11543__$1);

return statearr_11563;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11557__$1,(8),jobs,inst_11546);
} else {
if((state_val_11558 === (5))){
var inst_11541 = cljs.core.async.close_BANG_.call(null,jobs);
var state_11557__$1 = state_11557;
var statearr_11564_11675 = state_11557__$1;
(statearr_11564_11675[(2)] = inst_11541);

(statearr_11564_11675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11558 === (4))){
var inst_11538 = (state_11557[(10)]);
var inst_11538__$1 = (state_11557[(2)]);
var inst_11539 = (inst_11538__$1 == null);
var state_11557__$1 = (function (){var statearr_11565 = state_11557;
(statearr_11565[(10)] = inst_11538__$1);

return statearr_11565;
})();
if(cljs.core.truth_(inst_11539)){
var statearr_11566_11676 = state_11557__$1;
(statearr_11566_11676[(1)] = (5));

} else {
var statearr_11567_11677 = state_11557__$1;
(statearr_11567_11677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11558 === (3))){
var inst_11555 = (state_11557[(2)]);
var state_11557__$1 = state_11557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11557__$1,inst_11555);
} else {
if((state_val_11558 === (2))){
var state_11557__$1 = state_11557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11557__$1,(4),from);
} else {
if((state_val_11558 === (1))){
var state_11557__$1 = state_11557;
var statearr_11568_11678 = state_11557__$1;
(statearr_11568_11678[(2)] = null);

(statearr_11568_11678[(1)] = (2));


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
});})(c__5809__auto___11672,jobs,results,process,async))
;
return ((function (switch__5794__auto__,c__5809__auto___11672,jobs,results,process,async){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_11572 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11572[(0)] = state_machine__5795__auto__);

(statearr_11572[(1)] = (1));

return statearr_11572;
});
var state_machine__5795__auto____1 = (function (state_11557){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_11557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e11573){if((e11573 instanceof Object)){
var ex__5798__auto__ = e11573;
var statearr_11574_11679 = state_11557;
(statearr_11574_11679[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11680 = state_11557;
state_11557 = G__11680;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_11557){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_11557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___11672,jobs,results,process,async))
})();
var state__5811__auto__ = (function (){var statearr_11575 = f__5810__auto__.call(null);
(statearr_11575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___11672);

return statearr_11575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___11672,jobs,results,process,async))
);


var c__5809__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto__,jobs,results,process,async){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto__,jobs,results,process,async){
return (function (state_11613){
var state_val_11614 = (state_11613[(1)]);
if((state_val_11614 === (7))){
var inst_11609 = (state_11613[(2)]);
var state_11613__$1 = state_11613;
var statearr_11615_11681 = state_11613__$1;
(statearr_11615_11681[(2)] = inst_11609);

(statearr_11615_11681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11614 === (20))){
var state_11613__$1 = state_11613;
var statearr_11616_11682 = state_11613__$1;
(statearr_11616_11682[(2)] = null);

(statearr_11616_11682[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11614 === (1))){
var state_11613__$1 = state_11613;
var statearr_11617_11683 = state_11613__$1;
(statearr_11617_11683[(2)] = null);

(statearr_11617_11683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11614 === (4))){
var inst_11578 = (state_11613[(7)]);
var inst_11578__$1 = (state_11613[(2)]);
var inst_11579 = (inst_11578__$1 == null);
var state_11613__$1 = (function (){var statearr_11618 = state_11613;
(statearr_11618[(7)] = inst_11578__$1);

return statearr_11618;
})();
if(cljs.core.truth_(inst_11579)){
var statearr_11619_11684 = state_11613__$1;
(statearr_11619_11684[(1)] = (5));

} else {
var statearr_11620_11685 = state_11613__$1;
(statearr_11620_11685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11614 === (15))){
var inst_11591 = (state_11613[(8)]);
var state_11613__$1 = state_11613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11613__$1,(18),to,inst_11591);
} else {
if((state_val_11614 === (21))){
var inst_11604 = (state_11613[(2)]);
var state_11613__$1 = state_11613;
var statearr_11621_11686 = state_11613__$1;
(statearr_11621_11686[(2)] = inst_11604);

(statearr_11621_11686[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11614 === (13))){
var inst_11606 = (state_11613[(2)]);
var state_11613__$1 = (function (){var statearr_11622 = state_11613;
(statearr_11622[(9)] = inst_11606);

return statearr_11622;
})();
var statearr_11623_11687 = state_11613__$1;
(statearr_11623_11687[(2)] = null);

(statearr_11623_11687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11614 === (6))){
var inst_11578 = (state_11613[(7)]);
var state_11613__$1 = state_11613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11613__$1,(11),inst_11578);
} else {
if((state_val_11614 === (17))){
var inst_11599 = (state_11613[(2)]);
var state_11613__$1 = state_11613;
if(cljs.core.truth_(inst_11599)){
var statearr_11624_11688 = state_11613__$1;
(statearr_11624_11688[(1)] = (19));

} else {
var statearr_11625_11689 = state_11613__$1;
(statearr_11625_11689[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11614 === (3))){
var inst_11611 = (state_11613[(2)]);
var state_11613__$1 = state_11613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11613__$1,inst_11611);
} else {
if((state_val_11614 === (12))){
var inst_11588 = (state_11613[(10)]);
var state_11613__$1 = state_11613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11613__$1,(14),inst_11588);
} else {
if((state_val_11614 === (2))){
var state_11613__$1 = state_11613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11613__$1,(4),results);
} else {
if((state_val_11614 === (19))){
var state_11613__$1 = state_11613;
var statearr_11626_11690 = state_11613__$1;
(statearr_11626_11690[(2)] = null);

(statearr_11626_11690[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11614 === (11))){
var inst_11588 = (state_11613[(2)]);
var state_11613__$1 = (function (){var statearr_11627 = state_11613;
(statearr_11627[(10)] = inst_11588);

return statearr_11627;
})();
var statearr_11628_11691 = state_11613__$1;
(statearr_11628_11691[(2)] = null);

(statearr_11628_11691[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11614 === (9))){
var state_11613__$1 = state_11613;
var statearr_11629_11692 = state_11613__$1;
(statearr_11629_11692[(2)] = null);

(statearr_11629_11692[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11614 === (5))){
var state_11613__$1 = state_11613;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11630_11693 = state_11613__$1;
(statearr_11630_11693[(1)] = (8));

} else {
var statearr_11631_11694 = state_11613__$1;
(statearr_11631_11694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11614 === (14))){
var inst_11593 = (state_11613[(11)]);
var inst_11591 = (state_11613[(8)]);
var inst_11591__$1 = (state_11613[(2)]);
var inst_11592 = (inst_11591__$1 == null);
var inst_11593__$1 = cljs.core.not.call(null,inst_11592);
var state_11613__$1 = (function (){var statearr_11632 = state_11613;
(statearr_11632[(11)] = inst_11593__$1);

(statearr_11632[(8)] = inst_11591__$1);

return statearr_11632;
})();
if(inst_11593__$1){
var statearr_11633_11695 = state_11613__$1;
(statearr_11633_11695[(1)] = (15));

} else {
var statearr_11634_11696 = state_11613__$1;
(statearr_11634_11696[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11614 === (16))){
var inst_11593 = (state_11613[(11)]);
var state_11613__$1 = state_11613;
var statearr_11635_11697 = state_11613__$1;
(statearr_11635_11697[(2)] = inst_11593);

(statearr_11635_11697[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11614 === (10))){
var inst_11585 = (state_11613[(2)]);
var state_11613__$1 = state_11613;
var statearr_11636_11698 = state_11613__$1;
(statearr_11636_11698[(2)] = inst_11585);

(statearr_11636_11698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11614 === (18))){
var inst_11596 = (state_11613[(2)]);
var state_11613__$1 = state_11613;
var statearr_11637_11699 = state_11613__$1;
(statearr_11637_11699[(2)] = inst_11596);

(statearr_11637_11699[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11614 === (8))){
var inst_11582 = cljs.core.async.close_BANG_.call(null,to);
var state_11613__$1 = state_11613;
var statearr_11638_11700 = state_11613__$1;
(statearr_11638_11700[(2)] = inst_11582);

(statearr_11638_11700[(1)] = (10));


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
var statearr_11642 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11642[(0)] = state_machine__5795__auto__);

(statearr_11642[(1)] = (1));

return statearr_11642;
});
var state_machine__5795__auto____1 = (function (state_11613){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_11613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e11643){if((e11643 instanceof Object)){
var ex__5798__auto__ = e11643;
var statearr_11644_11701 = state_11613;
(statearr_11644_11701[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11702 = state_11613;
state_11613 = G__11702;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_11613){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_11613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__,jobs,results,process,async))
})();
var state__5811__auto__ = (function (){var statearr_11645 = f__5810__auto__.call(null);
(statearr_11645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_11645;
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
var c__5809__auto___11803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___11803,tc,fc){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___11803,tc,fc){
return (function (state_11778){
var state_val_11779 = (state_11778[(1)]);
if((state_val_11779 === (7))){
var inst_11774 = (state_11778[(2)]);
var state_11778__$1 = state_11778;
var statearr_11780_11804 = state_11778__$1;
(statearr_11780_11804[(2)] = inst_11774);

(statearr_11780_11804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (1))){
var state_11778__$1 = state_11778;
var statearr_11781_11805 = state_11778__$1;
(statearr_11781_11805[(2)] = null);

(statearr_11781_11805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (4))){
var inst_11755 = (state_11778[(7)]);
var inst_11755__$1 = (state_11778[(2)]);
var inst_11756 = (inst_11755__$1 == null);
var state_11778__$1 = (function (){var statearr_11782 = state_11778;
(statearr_11782[(7)] = inst_11755__$1);

return statearr_11782;
})();
if(cljs.core.truth_(inst_11756)){
var statearr_11783_11806 = state_11778__$1;
(statearr_11783_11806[(1)] = (5));

} else {
var statearr_11784_11807 = state_11778__$1;
(statearr_11784_11807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (13))){
var state_11778__$1 = state_11778;
var statearr_11785_11808 = state_11778__$1;
(statearr_11785_11808[(2)] = null);

(statearr_11785_11808[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (6))){
var inst_11755 = (state_11778[(7)]);
var inst_11761 = p.call(null,inst_11755);
var state_11778__$1 = state_11778;
if(cljs.core.truth_(inst_11761)){
var statearr_11786_11809 = state_11778__$1;
(statearr_11786_11809[(1)] = (9));

} else {
var statearr_11787_11810 = state_11778__$1;
(statearr_11787_11810[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (3))){
var inst_11776 = (state_11778[(2)]);
var state_11778__$1 = state_11778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11778__$1,inst_11776);
} else {
if((state_val_11779 === (12))){
var state_11778__$1 = state_11778;
var statearr_11788_11811 = state_11778__$1;
(statearr_11788_11811[(2)] = null);

(statearr_11788_11811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (2))){
var state_11778__$1 = state_11778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11778__$1,(4),ch);
} else {
if((state_val_11779 === (11))){
var inst_11755 = (state_11778[(7)]);
var inst_11765 = (state_11778[(2)]);
var state_11778__$1 = state_11778;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11778__$1,(8),inst_11765,inst_11755);
} else {
if((state_val_11779 === (9))){
var state_11778__$1 = state_11778;
var statearr_11789_11812 = state_11778__$1;
(statearr_11789_11812[(2)] = tc);

(statearr_11789_11812[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (5))){
var inst_11758 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11759 = cljs.core.async.close_BANG_.call(null,fc);
var state_11778__$1 = (function (){var statearr_11790 = state_11778;
(statearr_11790[(8)] = inst_11758);

return statearr_11790;
})();
var statearr_11791_11813 = state_11778__$1;
(statearr_11791_11813[(2)] = inst_11759);

(statearr_11791_11813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (14))){
var inst_11772 = (state_11778[(2)]);
var state_11778__$1 = state_11778;
var statearr_11792_11814 = state_11778__$1;
(statearr_11792_11814[(2)] = inst_11772);

(statearr_11792_11814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (10))){
var state_11778__$1 = state_11778;
var statearr_11793_11815 = state_11778__$1;
(statearr_11793_11815[(2)] = fc);

(statearr_11793_11815[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (8))){
var inst_11767 = (state_11778[(2)]);
var state_11778__$1 = state_11778;
if(cljs.core.truth_(inst_11767)){
var statearr_11794_11816 = state_11778__$1;
(statearr_11794_11816[(1)] = (12));

} else {
var statearr_11795_11817 = state_11778__$1;
(statearr_11795_11817[(1)] = (13));

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
});})(c__5809__auto___11803,tc,fc))
;
return ((function (switch__5794__auto__,c__5809__auto___11803,tc,fc){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_11799 = [null,null,null,null,null,null,null,null,null];
(statearr_11799[(0)] = state_machine__5795__auto__);

(statearr_11799[(1)] = (1));

return statearr_11799;
});
var state_machine__5795__auto____1 = (function (state_11778){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_11778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e11800){if((e11800 instanceof Object)){
var ex__5798__auto__ = e11800;
var statearr_11801_11818 = state_11778;
(statearr_11801_11818[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11819 = state_11778;
state_11778 = G__11819;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_11778){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_11778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___11803,tc,fc))
})();
var state__5811__auto__ = (function (){var statearr_11802 = f__5810__auto__.call(null);
(statearr_11802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___11803);

return statearr_11802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___11803,tc,fc))
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
return (function (state_11866){
var state_val_11867 = (state_11866[(1)]);
if((state_val_11867 === (7))){
var inst_11862 = (state_11866[(2)]);
var state_11866__$1 = state_11866;
var statearr_11868_11884 = state_11866__$1;
(statearr_11868_11884[(2)] = inst_11862);

(statearr_11868_11884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11867 === (6))){
var inst_11855 = (state_11866[(7)]);
var inst_11852 = (state_11866[(8)]);
var inst_11859 = f.call(null,inst_11852,inst_11855);
var inst_11852__$1 = inst_11859;
var state_11866__$1 = (function (){var statearr_11869 = state_11866;
(statearr_11869[(8)] = inst_11852__$1);

return statearr_11869;
})();
var statearr_11870_11885 = state_11866__$1;
(statearr_11870_11885[(2)] = null);

(statearr_11870_11885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11867 === (5))){
var inst_11852 = (state_11866[(8)]);
var state_11866__$1 = state_11866;
var statearr_11871_11886 = state_11866__$1;
(statearr_11871_11886[(2)] = inst_11852);

(statearr_11871_11886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11867 === (4))){
var inst_11855 = (state_11866[(7)]);
var inst_11855__$1 = (state_11866[(2)]);
var inst_11856 = (inst_11855__$1 == null);
var state_11866__$1 = (function (){var statearr_11872 = state_11866;
(statearr_11872[(7)] = inst_11855__$1);

return statearr_11872;
})();
if(cljs.core.truth_(inst_11856)){
var statearr_11873_11887 = state_11866__$1;
(statearr_11873_11887[(1)] = (5));

} else {
var statearr_11874_11888 = state_11866__$1;
(statearr_11874_11888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11867 === (3))){
var inst_11864 = (state_11866[(2)]);
var state_11866__$1 = state_11866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11866__$1,inst_11864);
} else {
if((state_val_11867 === (2))){
var state_11866__$1 = state_11866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11866__$1,(4),ch);
} else {
if((state_val_11867 === (1))){
var inst_11852 = init;
var state_11866__$1 = (function (){var statearr_11875 = state_11866;
(statearr_11875[(8)] = inst_11852);

return statearr_11875;
})();
var statearr_11876_11889 = state_11866__$1;
(statearr_11876_11889[(2)] = null);

(statearr_11876_11889[(1)] = (2));


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
var statearr_11880 = [null,null,null,null,null,null,null,null,null];
(statearr_11880[(0)] = state_machine__5795__auto__);

(statearr_11880[(1)] = (1));

return statearr_11880;
});
var state_machine__5795__auto____1 = (function (state_11866){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_11866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e11881){if((e11881 instanceof Object)){
var ex__5798__auto__ = e11881;
var statearr_11882_11890 = state_11866;
(statearr_11882_11890[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11891 = state_11866;
state_11866 = G__11891;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_11866){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_11866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_11883 = f__5810__auto__.call(null);
(statearr_11883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_11883;
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
return (function (state_11965){
var state_val_11966 = (state_11965[(1)]);
if((state_val_11966 === (7))){
var inst_11947 = (state_11965[(2)]);
var state_11965__$1 = state_11965;
var statearr_11967_11990 = state_11965__$1;
(statearr_11967_11990[(2)] = inst_11947);

(statearr_11967_11990[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11966 === (1))){
var inst_11941 = cljs.core.seq.call(null,coll);
var inst_11942 = inst_11941;
var state_11965__$1 = (function (){var statearr_11968 = state_11965;
(statearr_11968[(7)] = inst_11942);

return statearr_11968;
})();
var statearr_11969_11991 = state_11965__$1;
(statearr_11969_11991[(2)] = null);

(statearr_11969_11991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11966 === (4))){
var inst_11942 = (state_11965[(7)]);
var inst_11945 = cljs.core.first.call(null,inst_11942);
var state_11965__$1 = state_11965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11965__$1,(7),ch,inst_11945);
} else {
if((state_val_11966 === (13))){
var inst_11959 = (state_11965[(2)]);
var state_11965__$1 = state_11965;
var statearr_11970_11992 = state_11965__$1;
(statearr_11970_11992[(2)] = inst_11959);

(statearr_11970_11992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11966 === (6))){
var inst_11950 = (state_11965[(2)]);
var state_11965__$1 = state_11965;
if(cljs.core.truth_(inst_11950)){
var statearr_11971_11993 = state_11965__$1;
(statearr_11971_11993[(1)] = (8));

} else {
var statearr_11972_11994 = state_11965__$1;
(statearr_11972_11994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11966 === (3))){
var inst_11963 = (state_11965[(2)]);
var state_11965__$1 = state_11965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11965__$1,inst_11963);
} else {
if((state_val_11966 === (12))){
var state_11965__$1 = state_11965;
var statearr_11973_11995 = state_11965__$1;
(statearr_11973_11995[(2)] = null);

(statearr_11973_11995[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11966 === (2))){
var inst_11942 = (state_11965[(7)]);
var state_11965__$1 = state_11965;
if(cljs.core.truth_(inst_11942)){
var statearr_11974_11996 = state_11965__$1;
(statearr_11974_11996[(1)] = (4));

} else {
var statearr_11975_11997 = state_11965__$1;
(statearr_11975_11997[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11966 === (11))){
var inst_11956 = cljs.core.async.close_BANG_.call(null,ch);
var state_11965__$1 = state_11965;
var statearr_11976_11998 = state_11965__$1;
(statearr_11976_11998[(2)] = inst_11956);

(statearr_11976_11998[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11966 === (9))){
var state_11965__$1 = state_11965;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11977_11999 = state_11965__$1;
(statearr_11977_11999[(1)] = (11));

} else {
var statearr_11978_12000 = state_11965__$1;
(statearr_11978_12000[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11966 === (5))){
var inst_11942 = (state_11965[(7)]);
var state_11965__$1 = state_11965;
var statearr_11979_12001 = state_11965__$1;
(statearr_11979_12001[(2)] = inst_11942);

(statearr_11979_12001[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11966 === (10))){
var inst_11961 = (state_11965[(2)]);
var state_11965__$1 = state_11965;
var statearr_11980_12002 = state_11965__$1;
(statearr_11980_12002[(2)] = inst_11961);

(statearr_11980_12002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11966 === (8))){
var inst_11942 = (state_11965[(7)]);
var inst_11952 = cljs.core.next.call(null,inst_11942);
var inst_11942__$1 = inst_11952;
var state_11965__$1 = (function (){var statearr_11981 = state_11965;
(statearr_11981[(7)] = inst_11942__$1);

return statearr_11981;
})();
var statearr_11982_12003 = state_11965__$1;
(statearr_11982_12003[(2)] = null);

(statearr_11982_12003[(1)] = (2));


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
var statearr_11986 = [null,null,null,null,null,null,null,null];
(statearr_11986[(0)] = state_machine__5795__auto__);

(statearr_11986[(1)] = (1));

return statearr_11986;
});
var state_machine__5795__auto____1 = (function (state_11965){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_11965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e11987){if((e11987 instanceof Object)){
var ex__5798__auto__ = e11987;
var statearr_11988_12004 = state_11965;
(statearr_11988_12004[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12005 = state_11965;
state_11965 = G__12005;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_11965){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_11965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_11989 = f__5810__auto__.call(null);
(statearr_11989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_11989;
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

cljs.core.async.Mux = (function (){var obj12007 = {};
return obj12007;
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


cljs.core.async.Mult = (function (){var obj12009 = {};
return obj12009;
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
if(typeof cljs.core.async.t12231 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12231 = (function (cs,ch,mult,meta12232){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12232 = meta12232;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12231.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t12231.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t12231.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t12231.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t12231.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t12231.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t12231.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12233){
var self__ = this;
var _12233__$1 = this;
return self__.meta12232;
});})(cs))
;

cljs.core.async.t12231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12233,meta12232__$1){
var self__ = this;
var _12233__$1 = this;
return (new cljs.core.async.t12231(self__.cs,self__.ch,self__.mult,meta12232__$1));
});})(cs))
;

cljs.core.async.t12231.cljs$lang$type = true;

cljs.core.async.t12231.cljs$lang$ctorStr = "cljs.core.async/t12231";

cljs.core.async.t12231.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t12231");
});})(cs))
;

cljs.core.async.__GT_t12231 = ((function (cs){
return (function __GT_t12231(cs__$1,ch__$1,mult__$1,meta12232){
return (new cljs.core.async.t12231(cs__$1,ch__$1,mult__$1,meta12232));
});})(cs))
;

}

return (new cljs.core.async.t12231(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
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
var c__5809__auto___12452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___12452,cs,m,dchan,dctr,done){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___12452,cs,m,dchan,dctr,done){
return (function (state_12364){
var state_val_12365 = (state_12364[(1)]);
if((state_val_12365 === (7))){
var inst_12360 = (state_12364[(2)]);
var state_12364__$1 = state_12364;
var statearr_12366_12453 = state_12364__$1;
(statearr_12366_12453[(2)] = inst_12360);

(statearr_12366_12453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (20))){
var inst_12265 = (state_12364[(7)]);
var inst_12275 = cljs.core.first.call(null,inst_12265);
var inst_12276 = cljs.core.nth.call(null,inst_12275,(0),null);
var inst_12277 = cljs.core.nth.call(null,inst_12275,(1),null);
var state_12364__$1 = (function (){var statearr_12367 = state_12364;
(statearr_12367[(8)] = inst_12276);

return statearr_12367;
})();
if(cljs.core.truth_(inst_12277)){
var statearr_12368_12454 = state_12364__$1;
(statearr_12368_12454[(1)] = (22));

} else {
var statearr_12369_12455 = state_12364__$1;
(statearr_12369_12455[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (27))){
var inst_12312 = (state_12364[(9)]);
var inst_12305 = (state_12364[(10)]);
var inst_12236 = (state_12364[(11)]);
var inst_12307 = (state_12364[(12)]);
var inst_12312__$1 = cljs.core._nth.call(null,inst_12305,inst_12307);
var inst_12313 = cljs.core.async.put_BANG_.call(null,inst_12312__$1,inst_12236,done);
var state_12364__$1 = (function (){var statearr_12370 = state_12364;
(statearr_12370[(9)] = inst_12312__$1);

return statearr_12370;
})();
if(cljs.core.truth_(inst_12313)){
var statearr_12371_12456 = state_12364__$1;
(statearr_12371_12456[(1)] = (30));

} else {
var statearr_12372_12457 = state_12364__$1;
(statearr_12372_12457[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (1))){
var state_12364__$1 = state_12364;
var statearr_12373_12458 = state_12364__$1;
(statearr_12373_12458[(2)] = null);

(statearr_12373_12458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (24))){
var inst_12265 = (state_12364[(7)]);
var inst_12282 = (state_12364[(2)]);
var inst_12283 = cljs.core.next.call(null,inst_12265);
var inst_12245 = inst_12283;
var inst_12246 = null;
var inst_12247 = (0);
var inst_12248 = (0);
var state_12364__$1 = (function (){var statearr_12374 = state_12364;
(statearr_12374[(13)] = inst_12246);

(statearr_12374[(14)] = inst_12248);

(statearr_12374[(15)] = inst_12247);

(statearr_12374[(16)] = inst_12282);

(statearr_12374[(17)] = inst_12245);

return statearr_12374;
})();
var statearr_12375_12459 = state_12364__$1;
(statearr_12375_12459[(2)] = null);

(statearr_12375_12459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (39))){
var state_12364__$1 = state_12364;
var statearr_12379_12460 = state_12364__$1;
(statearr_12379_12460[(2)] = null);

(statearr_12379_12460[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (4))){
var inst_12236 = (state_12364[(11)]);
var inst_12236__$1 = (state_12364[(2)]);
var inst_12237 = (inst_12236__$1 == null);
var state_12364__$1 = (function (){var statearr_12380 = state_12364;
(statearr_12380[(11)] = inst_12236__$1);

return statearr_12380;
})();
if(cljs.core.truth_(inst_12237)){
var statearr_12381_12461 = state_12364__$1;
(statearr_12381_12461[(1)] = (5));

} else {
var statearr_12382_12462 = state_12364__$1;
(statearr_12382_12462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (15))){
var inst_12246 = (state_12364[(13)]);
var inst_12248 = (state_12364[(14)]);
var inst_12247 = (state_12364[(15)]);
var inst_12245 = (state_12364[(17)]);
var inst_12261 = (state_12364[(2)]);
var inst_12262 = (inst_12248 + (1));
var tmp12376 = inst_12246;
var tmp12377 = inst_12247;
var tmp12378 = inst_12245;
var inst_12245__$1 = tmp12378;
var inst_12246__$1 = tmp12376;
var inst_12247__$1 = tmp12377;
var inst_12248__$1 = inst_12262;
var state_12364__$1 = (function (){var statearr_12383 = state_12364;
(statearr_12383[(13)] = inst_12246__$1);

(statearr_12383[(18)] = inst_12261);

(statearr_12383[(14)] = inst_12248__$1);

(statearr_12383[(15)] = inst_12247__$1);

(statearr_12383[(17)] = inst_12245__$1);

return statearr_12383;
})();
var statearr_12384_12463 = state_12364__$1;
(statearr_12384_12463[(2)] = null);

(statearr_12384_12463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (21))){
var inst_12286 = (state_12364[(2)]);
var state_12364__$1 = state_12364;
var statearr_12388_12464 = state_12364__$1;
(statearr_12388_12464[(2)] = inst_12286);

(statearr_12388_12464[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (31))){
var inst_12312 = (state_12364[(9)]);
var inst_12316 = done.call(null,null);
var inst_12317 = cljs.core.async.untap_STAR_.call(null,m,inst_12312);
var state_12364__$1 = (function (){var statearr_12389 = state_12364;
(statearr_12389[(19)] = inst_12316);

return statearr_12389;
})();
var statearr_12390_12465 = state_12364__$1;
(statearr_12390_12465[(2)] = inst_12317);

(statearr_12390_12465[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (32))){
var inst_12306 = (state_12364[(20)]);
var inst_12305 = (state_12364[(10)]);
var inst_12307 = (state_12364[(12)]);
var inst_12304 = (state_12364[(21)]);
var inst_12319 = (state_12364[(2)]);
var inst_12320 = (inst_12307 + (1));
var tmp12385 = inst_12306;
var tmp12386 = inst_12305;
var tmp12387 = inst_12304;
var inst_12304__$1 = tmp12387;
var inst_12305__$1 = tmp12386;
var inst_12306__$1 = tmp12385;
var inst_12307__$1 = inst_12320;
var state_12364__$1 = (function (){var statearr_12391 = state_12364;
(statearr_12391[(20)] = inst_12306__$1);

(statearr_12391[(22)] = inst_12319);

(statearr_12391[(10)] = inst_12305__$1);

(statearr_12391[(12)] = inst_12307__$1);

(statearr_12391[(21)] = inst_12304__$1);

return statearr_12391;
})();
var statearr_12392_12466 = state_12364__$1;
(statearr_12392_12466[(2)] = null);

(statearr_12392_12466[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (40))){
var inst_12332 = (state_12364[(23)]);
var inst_12336 = done.call(null,null);
var inst_12337 = cljs.core.async.untap_STAR_.call(null,m,inst_12332);
var state_12364__$1 = (function (){var statearr_12393 = state_12364;
(statearr_12393[(24)] = inst_12336);

return statearr_12393;
})();
var statearr_12394_12467 = state_12364__$1;
(statearr_12394_12467[(2)] = inst_12337);

(statearr_12394_12467[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (33))){
var inst_12323 = (state_12364[(25)]);
var inst_12325 = cljs.core.chunked_seq_QMARK_.call(null,inst_12323);
var state_12364__$1 = state_12364;
if(inst_12325){
var statearr_12395_12468 = state_12364__$1;
(statearr_12395_12468[(1)] = (36));

} else {
var statearr_12396_12469 = state_12364__$1;
(statearr_12396_12469[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (13))){
var inst_12255 = (state_12364[(26)]);
var inst_12258 = cljs.core.async.close_BANG_.call(null,inst_12255);
var state_12364__$1 = state_12364;
var statearr_12397_12470 = state_12364__$1;
(statearr_12397_12470[(2)] = inst_12258);

(statearr_12397_12470[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (22))){
var inst_12276 = (state_12364[(8)]);
var inst_12279 = cljs.core.async.close_BANG_.call(null,inst_12276);
var state_12364__$1 = state_12364;
var statearr_12398_12471 = state_12364__$1;
(statearr_12398_12471[(2)] = inst_12279);

(statearr_12398_12471[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (36))){
var inst_12323 = (state_12364[(25)]);
var inst_12327 = cljs.core.chunk_first.call(null,inst_12323);
var inst_12328 = cljs.core.chunk_rest.call(null,inst_12323);
var inst_12329 = cljs.core.count.call(null,inst_12327);
var inst_12304 = inst_12328;
var inst_12305 = inst_12327;
var inst_12306 = inst_12329;
var inst_12307 = (0);
var state_12364__$1 = (function (){var statearr_12399 = state_12364;
(statearr_12399[(20)] = inst_12306);

(statearr_12399[(10)] = inst_12305);

(statearr_12399[(12)] = inst_12307);

(statearr_12399[(21)] = inst_12304);

return statearr_12399;
})();
var statearr_12400_12472 = state_12364__$1;
(statearr_12400_12472[(2)] = null);

(statearr_12400_12472[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (41))){
var inst_12323 = (state_12364[(25)]);
var inst_12339 = (state_12364[(2)]);
var inst_12340 = cljs.core.next.call(null,inst_12323);
var inst_12304 = inst_12340;
var inst_12305 = null;
var inst_12306 = (0);
var inst_12307 = (0);
var state_12364__$1 = (function (){var statearr_12401 = state_12364;
(statearr_12401[(27)] = inst_12339);

(statearr_12401[(20)] = inst_12306);

(statearr_12401[(10)] = inst_12305);

(statearr_12401[(12)] = inst_12307);

(statearr_12401[(21)] = inst_12304);

return statearr_12401;
})();
var statearr_12402_12473 = state_12364__$1;
(statearr_12402_12473[(2)] = null);

(statearr_12402_12473[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (43))){
var state_12364__$1 = state_12364;
var statearr_12403_12474 = state_12364__$1;
(statearr_12403_12474[(2)] = null);

(statearr_12403_12474[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (29))){
var inst_12348 = (state_12364[(2)]);
var state_12364__$1 = state_12364;
var statearr_12404_12475 = state_12364__$1;
(statearr_12404_12475[(2)] = inst_12348);

(statearr_12404_12475[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (44))){
var inst_12357 = (state_12364[(2)]);
var state_12364__$1 = (function (){var statearr_12405 = state_12364;
(statearr_12405[(28)] = inst_12357);

return statearr_12405;
})();
var statearr_12406_12476 = state_12364__$1;
(statearr_12406_12476[(2)] = null);

(statearr_12406_12476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (6))){
var inst_12296 = (state_12364[(29)]);
var inst_12295 = cljs.core.deref.call(null,cs);
var inst_12296__$1 = cljs.core.keys.call(null,inst_12295);
var inst_12297 = cljs.core.count.call(null,inst_12296__$1);
var inst_12298 = cljs.core.reset_BANG_.call(null,dctr,inst_12297);
var inst_12303 = cljs.core.seq.call(null,inst_12296__$1);
var inst_12304 = inst_12303;
var inst_12305 = null;
var inst_12306 = (0);
var inst_12307 = (0);
var state_12364__$1 = (function (){var statearr_12407 = state_12364;
(statearr_12407[(20)] = inst_12306);

(statearr_12407[(10)] = inst_12305);

(statearr_12407[(29)] = inst_12296__$1);

(statearr_12407[(12)] = inst_12307);

(statearr_12407[(30)] = inst_12298);

(statearr_12407[(21)] = inst_12304);

return statearr_12407;
})();
var statearr_12408_12477 = state_12364__$1;
(statearr_12408_12477[(2)] = null);

(statearr_12408_12477[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (28))){
var inst_12304 = (state_12364[(21)]);
var inst_12323 = (state_12364[(25)]);
var inst_12323__$1 = cljs.core.seq.call(null,inst_12304);
var state_12364__$1 = (function (){var statearr_12409 = state_12364;
(statearr_12409[(25)] = inst_12323__$1);

return statearr_12409;
})();
if(inst_12323__$1){
var statearr_12410_12478 = state_12364__$1;
(statearr_12410_12478[(1)] = (33));

} else {
var statearr_12411_12479 = state_12364__$1;
(statearr_12411_12479[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (25))){
var inst_12306 = (state_12364[(20)]);
var inst_12307 = (state_12364[(12)]);
var inst_12309 = (inst_12307 < inst_12306);
var inst_12310 = inst_12309;
var state_12364__$1 = state_12364;
if(cljs.core.truth_(inst_12310)){
var statearr_12412_12480 = state_12364__$1;
(statearr_12412_12480[(1)] = (27));

} else {
var statearr_12413_12481 = state_12364__$1;
(statearr_12413_12481[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (34))){
var state_12364__$1 = state_12364;
var statearr_12414_12482 = state_12364__$1;
(statearr_12414_12482[(2)] = null);

(statearr_12414_12482[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (17))){
var state_12364__$1 = state_12364;
var statearr_12415_12483 = state_12364__$1;
(statearr_12415_12483[(2)] = null);

(statearr_12415_12483[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (3))){
var inst_12362 = (state_12364[(2)]);
var state_12364__$1 = state_12364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12364__$1,inst_12362);
} else {
if((state_val_12365 === (12))){
var inst_12291 = (state_12364[(2)]);
var state_12364__$1 = state_12364;
var statearr_12416_12484 = state_12364__$1;
(statearr_12416_12484[(2)] = inst_12291);

(statearr_12416_12484[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (2))){
var state_12364__$1 = state_12364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12364__$1,(4),ch);
} else {
if((state_val_12365 === (23))){
var state_12364__$1 = state_12364;
var statearr_12417_12485 = state_12364__$1;
(statearr_12417_12485[(2)] = null);

(statearr_12417_12485[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (35))){
var inst_12346 = (state_12364[(2)]);
var state_12364__$1 = state_12364;
var statearr_12418_12486 = state_12364__$1;
(statearr_12418_12486[(2)] = inst_12346);

(statearr_12418_12486[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (19))){
var inst_12265 = (state_12364[(7)]);
var inst_12269 = cljs.core.chunk_first.call(null,inst_12265);
var inst_12270 = cljs.core.chunk_rest.call(null,inst_12265);
var inst_12271 = cljs.core.count.call(null,inst_12269);
var inst_12245 = inst_12270;
var inst_12246 = inst_12269;
var inst_12247 = inst_12271;
var inst_12248 = (0);
var state_12364__$1 = (function (){var statearr_12419 = state_12364;
(statearr_12419[(13)] = inst_12246);

(statearr_12419[(14)] = inst_12248);

(statearr_12419[(15)] = inst_12247);

(statearr_12419[(17)] = inst_12245);

return statearr_12419;
})();
var statearr_12420_12487 = state_12364__$1;
(statearr_12420_12487[(2)] = null);

(statearr_12420_12487[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (11))){
var inst_12265 = (state_12364[(7)]);
var inst_12245 = (state_12364[(17)]);
var inst_12265__$1 = cljs.core.seq.call(null,inst_12245);
var state_12364__$1 = (function (){var statearr_12421 = state_12364;
(statearr_12421[(7)] = inst_12265__$1);

return statearr_12421;
})();
if(inst_12265__$1){
var statearr_12422_12488 = state_12364__$1;
(statearr_12422_12488[(1)] = (16));

} else {
var statearr_12423_12489 = state_12364__$1;
(statearr_12423_12489[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (9))){
var inst_12293 = (state_12364[(2)]);
var state_12364__$1 = state_12364;
var statearr_12424_12490 = state_12364__$1;
(statearr_12424_12490[(2)] = inst_12293);

(statearr_12424_12490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (5))){
var inst_12243 = cljs.core.deref.call(null,cs);
var inst_12244 = cljs.core.seq.call(null,inst_12243);
var inst_12245 = inst_12244;
var inst_12246 = null;
var inst_12247 = (0);
var inst_12248 = (0);
var state_12364__$1 = (function (){var statearr_12425 = state_12364;
(statearr_12425[(13)] = inst_12246);

(statearr_12425[(14)] = inst_12248);

(statearr_12425[(15)] = inst_12247);

(statearr_12425[(17)] = inst_12245);

return statearr_12425;
})();
var statearr_12426_12491 = state_12364__$1;
(statearr_12426_12491[(2)] = null);

(statearr_12426_12491[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (14))){
var state_12364__$1 = state_12364;
var statearr_12427_12492 = state_12364__$1;
(statearr_12427_12492[(2)] = null);

(statearr_12427_12492[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (45))){
var inst_12354 = (state_12364[(2)]);
var state_12364__$1 = state_12364;
var statearr_12428_12493 = state_12364__$1;
(statearr_12428_12493[(2)] = inst_12354);

(statearr_12428_12493[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (26))){
var inst_12296 = (state_12364[(29)]);
var inst_12350 = (state_12364[(2)]);
var inst_12351 = cljs.core.seq.call(null,inst_12296);
var state_12364__$1 = (function (){var statearr_12429 = state_12364;
(statearr_12429[(31)] = inst_12350);

return statearr_12429;
})();
if(inst_12351){
var statearr_12430_12494 = state_12364__$1;
(statearr_12430_12494[(1)] = (42));

} else {
var statearr_12431_12495 = state_12364__$1;
(statearr_12431_12495[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (16))){
var inst_12265 = (state_12364[(7)]);
var inst_12267 = cljs.core.chunked_seq_QMARK_.call(null,inst_12265);
var state_12364__$1 = state_12364;
if(inst_12267){
var statearr_12432_12496 = state_12364__$1;
(statearr_12432_12496[(1)] = (19));

} else {
var statearr_12433_12497 = state_12364__$1;
(statearr_12433_12497[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (38))){
var inst_12343 = (state_12364[(2)]);
var state_12364__$1 = state_12364;
var statearr_12434_12498 = state_12364__$1;
(statearr_12434_12498[(2)] = inst_12343);

(statearr_12434_12498[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (30))){
var state_12364__$1 = state_12364;
var statearr_12435_12499 = state_12364__$1;
(statearr_12435_12499[(2)] = null);

(statearr_12435_12499[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (10))){
var inst_12246 = (state_12364[(13)]);
var inst_12248 = (state_12364[(14)]);
var inst_12254 = cljs.core._nth.call(null,inst_12246,inst_12248);
var inst_12255 = cljs.core.nth.call(null,inst_12254,(0),null);
var inst_12256 = cljs.core.nth.call(null,inst_12254,(1),null);
var state_12364__$1 = (function (){var statearr_12436 = state_12364;
(statearr_12436[(26)] = inst_12255);

return statearr_12436;
})();
if(cljs.core.truth_(inst_12256)){
var statearr_12437_12500 = state_12364__$1;
(statearr_12437_12500[(1)] = (13));

} else {
var statearr_12438_12501 = state_12364__$1;
(statearr_12438_12501[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (18))){
var inst_12289 = (state_12364[(2)]);
var state_12364__$1 = state_12364;
var statearr_12439_12502 = state_12364__$1;
(statearr_12439_12502[(2)] = inst_12289);

(statearr_12439_12502[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (42))){
var state_12364__$1 = state_12364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12364__$1,(45),dchan);
} else {
if((state_val_12365 === (37))){
var inst_12236 = (state_12364[(11)]);
var inst_12332 = (state_12364[(23)]);
var inst_12323 = (state_12364[(25)]);
var inst_12332__$1 = cljs.core.first.call(null,inst_12323);
var inst_12333 = cljs.core.async.put_BANG_.call(null,inst_12332__$1,inst_12236,done);
var state_12364__$1 = (function (){var statearr_12440 = state_12364;
(statearr_12440[(23)] = inst_12332__$1);

return statearr_12440;
})();
if(cljs.core.truth_(inst_12333)){
var statearr_12441_12503 = state_12364__$1;
(statearr_12441_12503[(1)] = (39));

} else {
var statearr_12442_12504 = state_12364__$1;
(statearr_12442_12504[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12365 === (8))){
var inst_12248 = (state_12364[(14)]);
var inst_12247 = (state_12364[(15)]);
var inst_12250 = (inst_12248 < inst_12247);
var inst_12251 = inst_12250;
var state_12364__$1 = state_12364;
if(cljs.core.truth_(inst_12251)){
var statearr_12443_12505 = state_12364__$1;
(statearr_12443_12505[(1)] = (10));

} else {
var statearr_12444_12506 = state_12364__$1;
(statearr_12444_12506[(1)] = (11));

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
});})(c__5809__auto___12452,cs,m,dchan,dctr,done))
;
return ((function (switch__5794__auto__,c__5809__auto___12452,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_12448 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12448[(0)] = state_machine__5795__auto__);

(statearr_12448[(1)] = (1));

return statearr_12448;
});
var state_machine__5795__auto____1 = (function (state_12364){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_12364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e12449){if((e12449 instanceof Object)){
var ex__5798__auto__ = e12449;
var statearr_12450_12507 = state_12364;
(statearr_12450_12507[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12508 = state_12364;
state_12364 = G__12508;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_12364){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_12364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___12452,cs,m,dchan,dctr,done))
})();
var state__5811__auto__ = (function (){var statearr_12451 = f__5810__auto__.call(null);
(statearr_12451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___12452);

return statearr_12451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___12452,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj12510 = {};
return obj12510;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__12511){
var map__12516 = p__12511;
var map__12516__$1 = ((cljs.core.seq_QMARK_.call(null,map__12516))?cljs.core.apply.call(null,cljs.core.hash_map,map__12516):map__12516);
var opts = map__12516__$1;
var statearr_12517_12520 = state;
(statearr_12517_12520[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__12516,map__12516__$1,opts){
return (function (val){
var statearr_12518_12521 = state;
(statearr_12518_12521[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__12516,map__12516__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_12519_12522 = state;
(statearr_12519_12522[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__12511 = null;
if (arguments.length > 3) {
  p__12511 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__12511);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__12523){
var state = cljs.core.first(arglist__12523);
arglist__12523 = cljs.core.next(arglist__12523);
var cont_block = cljs.core.first(arglist__12523);
arglist__12523 = cljs.core.next(arglist__12523);
var ports = cljs.core.first(arglist__12523);
var p__12511 = cljs.core.rest(arglist__12523);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__12511);
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
if(typeof cljs.core.async.t12643 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12643 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12644){
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
this.meta12644 = meta12644;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12643.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t12643.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12643.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12643.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12643.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12643.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t12643.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t12643.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12643.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12645){
var self__ = this;
var _12645__$1 = this;
return self__.meta12644;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12645,meta12644__$1){
var self__ = this;
var _12645__$1 = this;
return (new cljs.core.async.t12643(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12644__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12643.cljs$lang$type = true;

cljs.core.async.t12643.cljs$lang$ctorStr = "cljs.core.async/t12643";

cljs.core.async.t12643.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t12643");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t12643 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12643(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12644){
return (new cljs.core.async.t12643(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12644));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t12643(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
})()
;
var c__5809__auto___12762 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___12762,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___12762,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12715){
var state_val_12716 = (state_12715[(1)]);
if((state_val_12716 === (7))){
var inst_12659 = (state_12715[(7)]);
var inst_12664 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12659);
var state_12715__$1 = state_12715;
var statearr_12717_12763 = state_12715__$1;
(statearr_12717_12763[(2)] = inst_12664);

(statearr_12717_12763[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12716 === (20))){
var inst_12674 = (state_12715[(8)]);
var state_12715__$1 = state_12715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12715__$1,(23),out,inst_12674);
} else {
if((state_val_12716 === (1))){
var inst_12649 = (state_12715[(9)]);
var inst_12649__$1 = calc_state.call(null);
var inst_12650 = cljs.core.seq_QMARK_.call(null,inst_12649__$1);
var state_12715__$1 = (function (){var statearr_12718 = state_12715;
(statearr_12718[(9)] = inst_12649__$1);

return statearr_12718;
})();
if(inst_12650){
var statearr_12719_12764 = state_12715__$1;
(statearr_12719_12764[(1)] = (2));

} else {
var statearr_12720_12765 = state_12715__$1;
(statearr_12720_12765[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12716 === (24))){
var inst_12667 = (state_12715[(10)]);
var inst_12659 = inst_12667;
var state_12715__$1 = (function (){var statearr_12721 = state_12715;
(statearr_12721[(7)] = inst_12659);

return statearr_12721;
})();
var statearr_12722_12766 = state_12715__$1;
(statearr_12722_12766[(2)] = null);

(statearr_12722_12766[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12716 === (4))){
var inst_12649 = (state_12715[(9)]);
var inst_12655 = (state_12715[(2)]);
var inst_12656 = cljs.core.get.call(null,inst_12655,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12657 = cljs.core.get.call(null,inst_12655,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12658 = cljs.core.get.call(null,inst_12655,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12659 = inst_12649;
var state_12715__$1 = (function (){var statearr_12723 = state_12715;
(statearr_12723[(11)] = inst_12657);

(statearr_12723[(12)] = inst_12656);

(statearr_12723[(13)] = inst_12658);

(statearr_12723[(7)] = inst_12659);

return statearr_12723;
})();
var statearr_12724_12767 = state_12715__$1;
(statearr_12724_12767[(2)] = null);

(statearr_12724_12767[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12716 === (15))){
var state_12715__$1 = state_12715;
var statearr_12725_12768 = state_12715__$1;
(statearr_12725_12768[(2)] = null);

(statearr_12725_12768[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12716 === (21))){
var inst_12667 = (state_12715[(10)]);
var inst_12659 = inst_12667;
var state_12715__$1 = (function (){var statearr_12726 = state_12715;
(statearr_12726[(7)] = inst_12659);

return statearr_12726;
})();
var statearr_12727_12769 = state_12715__$1;
(statearr_12727_12769[(2)] = null);

(statearr_12727_12769[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12716 === (13))){
var inst_12711 = (state_12715[(2)]);
var state_12715__$1 = state_12715;
var statearr_12728_12770 = state_12715__$1;
(statearr_12728_12770[(2)] = inst_12711);

(statearr_12728_12770[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12716 === (22))){
var inst_12709 = (state_12715[(2)]);
var state_12715__$1 = state_12715;
var statearr_12729_12771 = state_12715__$1;
(statearr_12729_12771[(2)] = inst_12709);

(statearr_12729_12771[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12716 === (6))){
var inst_12713 = (state_12715[(2)]);
var state_12715__$1 = state_12715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12715__$1,inst_12713);
} else {
if((state_val_12716 === (25))){
var state_12715__$1 = state_12715;
var statearr_12730_12772 = state_12715__$1;
(statearr_12730_12772[(2)] = null);

(statearr_12730_12772[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12716 === (17))){
var inst_12689 = (state_12715[(14)]);
var state_12715__$1 = state_12715;
var statearr_12731_12773 = state_12715__$1;
(statearr_12731_12773[(2)] = inst_12689);

(statearr_12731_12773[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12716 === (3))){
var inst_12649 = (state_12715[(9)]);
var state_12715__$1 = state_12715;
var statearr_12732_12774 = state_12715__$1;
(statearr_12732_12774[(2)] = inst_12649);

(statearr_12732_12774[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12716 === (12))){
var inst_12689 = (state_12715[(14)]);
var inst_12675 = (state_12715[(15)]);
var inst_12670 = (state_12715[(16)]);
var inst_12689__$1 = inst_12670.call(null,inst_12675);
var state_12715__$1 = (function (){var statearr_12733 = state_12715;
(statearr_12733[(14)] = inst_12689__$1);

return statearr_12733;
})();
if(cljs.core.truth_(inst_12689__$1)){
var statearr_12734_12775 = state_12715__$1;
(statearr_12734_12775[(1)] = (17));

} else {
var statearr_12735_12776 = state_12715__$1;
(statearr_12735_12776[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12716 === (2))){
var inst_12649 = (state_12715[(9)]);
var inst_12652 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12649);
var state_12715__$1 = state_12715;
var statearr_12736_12777 = state_12715__$1;
(statearr_12736_12777[(2)] = inst_12652);

(statearr_12736_12777[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12716 === (23))){
var inst_12700 = (state_12715[(2)]);
var state_12715__$1 = state_12715;
if(cljs.core.truth_(inst_12700)){
var statearr_12737_12778 = state_12715__$1;
(statearr_12737_12778[(1)] = (24));

} else {
var statearr_12738_12779 = state_12715__$1;
(statearr_12738_12779[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12716 === (19))){
var inst_12697 = (state_12715[(2)]);
var state_12715__$1 = state_12715;
if(cljs.core.truth_(inst_12697)){
var statearr_12739_12780 = state_12715__$1;
(statearr_12739_12780[(1)] = (20));

} else {
var statearr_12740_12781 = state_12715__$1;
(statearr_12740_12781[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12716 === (11))){
var inst_12674 = (state_12715[(8)]);
var inst_12680 = (inst_12674 == null);
var state_12715__$1 = state_12715;
if(cljs.core.truth_(inst_12680)){
var statearr_12741_12782 = state_12715__$1;
(statearr_12741_12782[(1)] = (14));

} else {
var statearr_12742_12783 = state_12715__$1;
(statearr_12742_12783[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12716 === (9))){
var inst_12667 = (state_12715[(10)]);
var inst_12667__$1 = (state_12715[(2)]);
var inst_12668 = cljs.core.get.call(null,inst_12667__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12669 = cljs.core.get.call(null,inst_12667__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12670 = cljs.core.get.call(null,inst_12667__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_12715__$1 = (function (){var statearr_12743 = state_12715;
(statearr_12743[(17)] = inst_12669);

(statearr_12743[(10)] = inst_12667__$1);

(statearr_12743[(16)] = inst_12670);

return statearr_12743;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12715__$1,(10),inst_12668);
} else {
if((state_val_12716 === (5))){
var inst_12659 = (state_12715[(7)]);
var inst_12662 = cljs.core.seq_QMARK_.call(null,inst_12659);
var state_12715__$1 = state_12715;
if(inst_12662){
var statearr_12744_12784 = state_12715__$1;
(statearr_12744_12784[(1)] = (7));

} else {
var statearr_12745_12785 = state_12715__$1;
(statearr_12745_12785[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12716 === (14))){
var inst_12675 = (state_12715[(15)]);
var inst_12682 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12675);
var state_12715__$1 = state_12715;
var statearr_12746_12786 = state_12715__$1;
(statearr_12746_12786[(2)] = inst_12682);

(statearr_12746_12786[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12716 === (26))){
var inst_12705 = (state_12715[(2)]);
var state_12715__$1 = state_12715;
var statearr_12747_12787 = state_12715__$1;
(statearr_12747_12787[(2)] = inst_12705);

(statearr_12747_12787[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12716 === (16))){
var inst_12685 = (state_12715[(2)]);
var inst_12686 = calc_state.call(null);
var inst_12659 = inst_12686;
var state_12715__$1 = (function (){var statearr_12748 = state_12715;
(statearr_12748[(18)] = inst_12685);

(statearr_12748[(7)] = inst_12659);

return statearr_12748;
})();
var statearr_12749_12788 = state_12715__$1;
(statearr_12749_12788[(2)] = null);

(statearr_12749_12788[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12716 === (10))){
var inst_12674 = (state_12715[(8)]);
var inst_12675 = (state_12715[(15)]);
var inst_12673 = (state_12715[(2)]);
var inst_12674__$1 = cljs.core.nth.call(null,inst_12673,(0),null);
var inst_12675__$1 = cljs.core.nth.call(null,inst_12673,(1),null);
var inst_12676 = (inst_12674__$1 == null);
var inst_12677 = cljs.core._EQ_.call(null,inst_12675__$1,change);
var inst_12678 = (inst_12676) || (inst_12677);
var state_12715__$1 = (function (){var statearr_12750 = state_12715;
(statearr_12750[(8)] = inst_12674__$1);

(statearr_12750[(15)] = inst_12675__$1);

return statearr_12750;
})();
if(cljs.core.truth_(inst_12678)){
var statearr_12751_12789 = state_12715__$1;
(statearr_12751_12789[(1)] = (11));

} else {
var statearr_12752_12790 = state_12715__$1;
(statearr_12752_12790[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12716 === (18))){
var inst_12669 = (state_12715[(17)]);
var inst_12675 = (state_12715[(15)]);
var inst_12670 = (state_12715[(16)]);
var inst_12692 = cljs.core.empty_QMARK_.call(null,inst_12670);
var inst_12693 = inst_12669.call(null,inst_12675);
var inst_12694 = cljs.core.not.call(null,inst_12693);
var inst_12695 = (inst_12692) && (inst_12694);
var state_12715__$1 = state_12715;
var statearr_12753_12791 = state_12715__$1;
(statearr_12753_12791[(2)] = inst_12695);

(statearr_12753_12791[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12716 === (8))){
var inst_12659 = (state_12715[(7)]);
var state_12715__$1 = state_12715;
var statearr_12754_12792 = state_12715__$1;
(statearr_12754_12792[(2)] = inst_12659);

(statearr_12754_12792[(1)] = (9));


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
});})(c__5809__auto___12762,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__5794__auto__,c__5809__auto___12762,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_12758 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12758[(0)] = state_machine__5795__auto__);

(statearr_12758[(1)] = (1));

return statearr_12758;
});
var state_machine__5795__auto____1 = (function (state_12715){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_12715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e12759){if((e12759 instanceof Object)){
var ex__5798__auto__ = e12759;
var statearr_12760_12793 = state_12715;
(statearr_12760_12793[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12794 = state_12715;
state_12715 = G__12794;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_12715){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_12715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___12762,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__5811__auto__ = (function (){var statearr_12761 = f__5810__auto__.call(null);
(statearr_12761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___12762);

return statearr_12761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___12762,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj12796 = {};
return obj12796;
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
return (function (p1__12797_SHARP_){
if(cljs.core.truth_(p1__12797_SHARP_.call(null,topic))){
return p1__12797_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12797_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3608__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t12920 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12920 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12921){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12921 = meta12921;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12920.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t12920.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t12920.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t12920.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t12920.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t12920.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t12920.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t12920.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12922){
var self__ = this;
var _12922__$1 = this;
return self__.meta12921;
});})(mults,ensure_mult))
;

cljs.core.async.t12920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12922,meta12921__$1){
var self__ = this;
var _12922__$1 = this;
return (new cljs.core.async.t12920(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12921__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t12920.cljs$lang$type = true;

cljs.core.async.t12920.cljs$lang$ctorStr = "cljs.core.async/t12920";

cljs.core.async.t12920.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t12920");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t12920 = ((function (mults,ensure_mult){
return (function __GT_t12920(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12921){
return (new cljs.core.async.t12920(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12921));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t12920(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
})()
;
var c__5809__auto___13042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___13042,mults,ensure_mult,p){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___13042,mults,ensure_mult,p){
return (function (state_12994){
var state_val_12995 = (state_12994[(1)]);
if((state_val_12995 === (7))){
var inst_12990 = (state_12994[(2)]);
var state_12994__$1 = state_12994;
var statearr_12996_13043 = state_12994__$1;
(statearr_12996_13043[(2)] = inst_12990);

(statearr_12996_13043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (20))){
var state_12994__$1 = state_12994;
var statearr_12997_13044 = state_12994__$1;
(statearr_12997_13044[(2)] = null);

(statearr_12997_13044[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (1))){
var state_12994__$1 = state_12994;
var statearr_12998_13045 = state_12994__$1;
(statearr_12998_13045[(2)] = null);

(statearr_12998_13045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (24))){
var inst_12973 = (state_12994[(7)]);
var inst_12982 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12973);
var state_12994__$1 = state_12994;
var statearr_12999_13046 = state_12994__$1;
(statearr_12999_13046[(2)] = inst_12982);

(statearr_12999_13046[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (4))){
var inst_12925 = (state_12994[(8)]);
var inst_12925__$1 = (state_12994[(2)]);
var inst_12926 = (inst_12925__$1 == null);
var state_12994__$1 = (function (){var statearr_13000 = state_12994;
(statearr_13000[(8)] = inst_12925__$1);

return statearr_13000;
})();
if(cljs.core.truth_(inst_12926)){
var statearr_13001_13047 = state_12994__$1;
(statearr_13001_13047[(1)] = (5));

} else {
var statearr_13002_13048 = state_12994__$1;
(statearr_13002_13048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (15))){
var inst_12967 = (state_12994[(2)]);
var state_12994__$1 = state_12994;
var statearr_13003_13049 = state_12994__$1;
(statearr_13003_13049[(2)] = inst_12967);

(statearr_13003_13049[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (21))){
var inst_12987 = (state_12994[(2)]);
var state_12994__$1 = (function (){var statearr_13004 = state_12994;
(statearr_13004[(9)] = inst_12987);

return statearr_13004;
})();
var statearr_13005_13050 = state_12994__$1;
(statearr_13005_13050[(2)] = null);

(statearr_13005_13050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (13))){
var inst_12949 = (state_12994[(10)]);
var inst_12951 = cljs.core.chunked_seq_QMARK_.call(null,inst_12949);
var state_12994__$1 = state_12994;
if(inst_12951){
var statearr_13006_13051 = state_12994__$1;
(statearr_13006_13051[(1)] = (16));

} else {
var statearr_13007_13052 = state_12994__$1;
(statearr_13007_13052[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (22))){
var inst_12979 = (state_12994[(2)]);
var state_12994__$1 = state_12994;
if(cljs.core.truth_(inst_12979)){
var statearr_13008_13053 = state_12994__$1;
(statearr_13008_13053[(1)] = (23));

} else {
var statearr_13009_13054 = state_12994__$1;
(statearr_13009_13054[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (6))){
var inst_12975 = (state_12994[(11)]);
var inst_12925 = (state_12994[(8)]);
var inst_12973 = (state_12994[(7)]);
var inst_12973__$1 = topic_fn.call(null,inst_12925);
var inst_12974 = cljs.core.deref.call(null,mults);
var inst_12975__$1 = cljs.core.get.call(null,inst_12974,inst_12973__$1);
var state_12994__$1 = (function (){var statearr_13010 = state_12994;
(statearr_13010[(11)] = inst_12975__$1);

(statearr_13010[(7)] = inst_12973__$1);

return statearr_13010;
})();
if(cljs.core.truth_(inst_12975__$1)){
var statearr_13011_13055 = state_12994__$1;
(statearr_13011_13055[(1)] = (19));

} else {
var statearr_13012_13056 = state_12994__$1;
(statearr_13012_13056[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (25))){
var inst_12984 = (state_12994[(2)]);
var state_12994__$1 = state_12994;
var statearr_13013_13057 = state_12994__$1;
(statearr_13013_13057[(2)] = inst_12984);

(statearr_13013_13057[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (17))){
var inst_12949 = (state_12994[(10)]);
var inst_12958 = cljs.core.first.call(null,inst_12949);
var inst_12959 = cljs.core.async.muxch_STAR_.call(null,inst_12958);
var inst_12960 = cljs.core.async.close_BANG_.call(null,inst_12959);
var inst_12961 = cljs.core.next.call(null,inst_12949);
var inst_12935 = inst_12961;
var inst_12936 = null;
var inst_12937 = (0);
var inst_12938 = (0);
var state_12994__$1 = (function (){var statearr_13014 = state_12994;
(statearr_13014[(12)] = inst_12960);

(statearr_13014[(13)] = inst_12938);

(statearr_13014[(14)] = inst_12937);

(statearr_13014[(15)] = inst_12936);

(statearr_13014[(16)] = inst_12935);

return statearr_13014;
})();
var statearr_13015_13058 = state_12994__$1;
(statearr_13015_13058[(2)] = null);

(statearr_13015_13058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (3))){
var inst_12992 = (state_12994[(2)]);
var state_12994__$1 = state_12994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12994__$1,inst_12992);
} else {
if((state_val_12995 === (12))){
var inst_12969 = (state_12994[(2)]);
var state_12994__$1 = state_12994;
var statearr_13016_13059 = state_12994__$1;
(statearr_13016_13059[(2)] = inst_12969);

(statearr_13016_13059[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (2))){
var state_12994__$1 = state_12994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12994__$1,(4),ch);
} else {
if((state_val_12995 === (23))){
var state_12994__$1 = state_12994;
var statearr_13017_13060 = state_12994__$1;
(statearr_13017_13060[(2)] = null);

(statearr_13017_13060[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (19))){
var inst_12975 = (state_12994[(11)]);
var inst_12925 = (state_12994[(8)]);
var inst_12977 = cljs.core.async.muxch_STAR_.call(null,inst_12975);
var state_12994__$1 = state_12994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12994__$1,(22),inst_12977,inst_12925);
} else {
if((state_val_12995 === (11))){
var inst_12935 = (state_12994[(16)]);
var inst_12949 = (state_12994[(10)]);
var inst_12949__$1 = cljs.core.seq.call(null,inst_12935);
var state_12994__$1 = (function (){var statearr_13018 = state_12994;
(statearr_13018[(10)] = inst_12949__$1);

return statearr_13018;
})();
if(inst_12949__$1){
var statearr_13019_13061 = state_12994__$1;
(statearr_13019_13061[(1)] = (13));

} else {
var statearr_13020_13062 = state_12994__$1;
(statearr_13020_13062[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (9))){
var inst_12971 = (state_12994[(2)]);
var state_12994__$1 = state_12994;
var statearr_13021_13063 = state_12994__$1;
(statearr_13021_13063[(2)] = inst_12971);

(statearr_13021_13063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (5))){
var inst_12932 = cljs.core.deref.call(null,mults);
var inst_12933 = cljs.core.vals.call(null,inst_12932);
var inst_12934 = cljs.core.seq.call(null,inst_12933);
var inst_12935 = inst_12934;
var inst_12936 = null;
var inst_12937 = (0);
var inst_12938 = (0);
var state_12994__$1 = (function (){var statearr_13022 = state_12994;
(statearr_13022[(13)] = inst_12938);

(statearr_13022[(14)] = inst_12937);

(statearr_13022[(15)] = inst_12936);

(statearr_13022[(16)] = inst_12935);

return statearr_13022;
})();
var statearr_13023_13064 = state_12994__$1;
(statearr_13023_13064[(2)] = null);

(statearr_13023_13064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (14))){
var state_12994__$1 = state_12994;
var statearr_13027_13065 = state_12994__$1;
(statearr_13027_13065[(2)] = null);

(statearr_13027_13065[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (16))){
var inst_12949 = (state_12994[(10)]);
var inst_12953 = cljs.core.chunk_first.call(null,inst_12949);
var inst_12954 = cljs.core.chunk_rest.call(null,inst_12949);
var inst_12955 = cljs.core.count.call(null,inst_12953);
var inst_12935 = inst_12954;
var inst_12936 = inst_12953;
var inst_12937 = inst_12955;
var inst_12938 = (0);
var state_12994__$1 = (function (){var statearr_13028 = state_12994;
(statearr_13028[(13)] = inst_12938);

(statearr_13028[(14)] = inst_12937);

(statearr_13028[(15)] = inst_12936);

(statearr_13028[(16)] = inst_12935);

return statearr_13028;
})();
var statearr_13029_13066 = state_12994__$1;
(statearr_13029_13066[(2)] = null);

(statearr_13029_13066[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (10))){
var inst_12938 = (state_12994[(13)]);
var inst_12937 = (state_12994[(14)]);
var inst_12936 = (state_12994[(15)]);
var inst_12935 = (state_12994[(16)]);
var inst_12943 = cljs.core._nth.call(null,inst_12936,inst_12938);
var inst_12944 = cljs.core.async.muxch_STAR_.call(null,inst_12943);
var inst_12945 = cljs.core.async.close_BANG_.call(null,inst_12944);
var inst_12946 = (inst_12938 + (1));
var tmp13024 = inst_12937;
var tmp13025 = inst_12936;
var tmp13026 = inst_12935;
var inst_12935__$1 = tmp13026;
var inst_12936__$1 = tmp13025;
var inst_12937__$1 = tmp13024;
var inst_12938__$1 = inst_12946;
var state_12994__$1 = (function (){var statearr_13030 = state_12994;
(statearr_13030[(13)] = inst_12938__$1);

(statearr_13030[(17)] = inst_12945);

(statearr_13030[(14)] = inst_12937__$1);

(statearr_13030[(15)] = inst_12936__$1);

(statearr_13030[(16)] = inst_12935__$1);

return statearr_13030;
})();
var statearr_13031_13067 = state_12994__$1;
(statearr_13031_13067[(2)] = null);

(statearr_13031_13067[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (18))){
var inst_12964 = (state_12994[(2)]);
var state_12994__$1 = state_12994;
var statearr_13032_13068 = state_12994__$1;
(statearr_13032_13068[(2)] = inst_12964);

(statearr_13032_13068[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12995 === (8))){
var inst_12938 = (state_12994[(13)]);
var inst_12937 = (state_12994[(14)]);
var inst_12940 = (inst_12938 < inst_12937);
var inst_12941 = inst_12940;
var state_12994__$1 = state_12994;
if(cljs.core.truth_(inst_12941)){
var statearr_13033_13069 = state_12994__$1;
(statearr_13033_13069[(1)] = (10));

} else {
var statearr_13034_13070 = state_12994__$1;
(statearr_13034_13070[(1)] = (11));

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
});})(c__5809__auto___13042,mults,ensure_mult,p))
;
return ((function (switch__5794__auto__,c__5809__auto___13042,mults,ensure_mult,p){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_13038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13038[(0)] = state_machine__5795__auto__);

(statearr_13038[(1)] = (1));

return statearr_13038;
});
var state_machine__5795__auto____1 = (function (state_12994){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_12994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e13039){if((e13039 instanceof Object)){
var ex__5798__auto__ = e13039;
var statearr_13040_13071 = state_12994;
(statearr_13040_13071[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13072 = state_12994;
state_12994 = G__13072;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_12994){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_12994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___13042,mults,ensure_mult,p))
})();
var state__5811__auto__ = (function (){var statearr_13041 = f__5810__auto__.call(null);
(statearr_13041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___13042);

return statearr_13041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___13042,mults,ensure_mult,p))
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
var c__5809__auto___13209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___13209,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___13209,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13179){
var state_val_13180 = (state_13179[(1)]);
if((state_val_13180 === (7))){
var state_13179__$1 = state_13179;
var statearr_13181_13210 = state_13179__$1;
(statearr_13181_13210[(2)] = null);

(statearr_13181_13210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (1))){
var state_13179__$1 = state_13179;
var statearr_13182_13211 = state_13179__$1;
(statearr_13182_13211[(2)] = null);

(statearr_13182_13211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (4))){
var inst_13143 = (state_13179[(7)]);
var inst_13145 = (inst_13143 < cnt);
var state_13179__$1 = state_13179;
if(cljs.core.truth_(inst_13145)){
var statearr_13183_13212 = state_13179__$1;
(statearr_13183_13212[(1)] = (6));

} else {
var statearr_13184_13213 = state_13179__$1;
(statearr_13184_13213[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (15))){
var inst_13175 = (state_13179[(2)]);
var state_13179__$1 = state_13179;
var statearr_13185_13214 = state_13179__$1;
(statearr_13185_13214[(2)] = inst_13175);

(statearr_13185_13214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (13))){
var inst_13168 = cljs.core.async.close_BANG_.call(null,out);
var state_13179__$1 = state_13179;
var statearr_13186_13215 = state_13179__$1;
(statearr_13186_13215[(2)] = inst_13168);

(statearr_13186_13215[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (6))){
var state_13179__$1 = state_13179;
var statearr_13187_13216 = state_13179__$1;
(statearr_13187_13216[(2)] = null);

(statearr_13187_13216[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (3))){
var inst_13177 = (state_13179[(2)]);
var state_13179__$1 = state_13179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13179__$1,inst_13177);
} else {
if((state_val_13180 === (12))){
var inst_13165 = (state_13179[(8)]);
var inst_13165__$1 = (state_13179[(2)]);
var inst_13166 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13165__$1);
var state_13179__$1 = (function (){var statearr_13188 = state_13179;
(statearr_13188[(8)] = inst_13165__$1);

return statearr_13188;
})();
if(cljs.core.truth_(inst_13166)){
var statearr_13189_13217 = state_13179__$1;
(statearr_13189_13217[(1)] = (13));

} else {
var statearr_13190_13218 = state_13179__$1;
(statearr_13190_13218[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (2))){
var inst_13142 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13143 = (0);
var state_13179__$1 = (function (){var statearr_13191 = state_13179;
(statearr_13191[(9)] = inst_13142);

(statearr_13191[(7)] = inst_13143);

return statearr_13191;
})();
var statearr_13192_13219 = state_13179__$1;
(statearr_13192_13219[(2)] = null);

(statearr_13192_13219[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (11))){
var inst_13143 = (state_13179[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13179,(10),Object,null,(9));
var inst_13152 = chs__$1.call(null,inst_13143);
var inst_13153 = done.call(null,inst_13143);
var inst_13154 = cljs.core.async.take_BANG_.call(null,inst_13152,inst_13153);
var state_13179__$1 = state_13179;
var statearr_13193_13220 = state_13179__$1;
(statearr_13193_13220[(2)] = inst_13154);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13179__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (9))){
var inst_13143 = (state_13179[(7)]);
var inst_13156 = (state_13179[(2)]);
var inst_13157 = (inst_13143 + (1));
var inst_13143__$1 = inst_13157;
var state_13179__$1 = (function (){var statearr_13194 = state_13179;
(statearr_13194[(10)] = inst_13156);

(statearr_13194[(7)] = inst_13143__$1);

return statearr_13194;
})();
var statearr_13195_13221 = state_13179__$1;
(statearr_13195_13221[(2)] = null);

(statearr_13195_13221[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (5))){
var inst_13163 = (state_13179[(2)]);
var state_13179__$1 = (function (){var statearr_13196 = state_13179;
(statearr_13196[(11)] = inst_13163);

return statearr_13196;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13179__$1,(12),dchan);
} else {
if((state_val_13180 === (14))){
var inst_13165 = (state_13179[(8)]);
var inst_13170 = cljs.core.apply.call(null,f,inst_13165);
var state_13179__$1 = state_13179;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13179__$1,(16),out,inst_13170);
} else {
if((state_val_13180 === (16))){
var inst_13172 = (state_13179[(2)]);
var state_13179__$1 = (function (){var statearr_13197 = state_13179;
(statearr_13197[(12)] = inst_13172);

return statearr_13197;
})();
var statearr_13198_13222 = state_13179__$1;
(statearr_13198_13222[(2)] = null);

(statearr_13198_13222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (10))){
var inst_13147 = (state_13179[(2)]);
var inst_13148 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13179__$1 = (function (){var statearr_13199 = state_13179;
(statearr_13199[(13)] = inst_13147);

return statearr_13199;
})();
var statearr_13200_13223 = state_13179__$1;
(statearr_13200_13223[(2)] = inst_13148);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13179__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (8))){
var inst_13161 = (state_13179[(2)]);
var state_13179__$1 = state_13179;
var statearr_13201_13224 = state_13179__$1;
(statearr_13201_13224[(2)] = inst_13161);

(statearr_13201_13224[(1)] = (5));


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
});})(c__5809__auto___13209,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__5794__auto__,c__5809__auto___13209,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_13205 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13205[(0)] = state_machine__5795__auto__);

(statearr_13205[(1)] = (1));

return statearr_13205;
});
var state_machine__5795__auto____1 = (function (state_13179){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_13179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e13206){if((e13206 instanceof Object)){
var ex__5798__auto__ = e13206;
var statearr_13207_13225 = state_13179;
(statearr_13207_13225[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13226 = state_13179;
state_13179 = G__13226;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_13179){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_13179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___13209,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__5811__auto__ = (function (){var statearr_13208 = f__5810__auto__.call(null);
(statearr_13208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___13209);

return statearr_13208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___13209,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__5809__auto___13334 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___13334,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___13334,out){
return (function (state_13310){
var state_val_13311 = (state_13310[(1)]);
if((state_val_13311 === (7))){
var inst_13289 = (state_13310[(7)]);
var inst_13290 = (state_13310[(8)]);
var inst_13289__$1 = (state_13310[(2)]);
var inst_13290__$1 = cljs.core.nth.call(null,inst_13289__$1,(0),null);
var inst_13291 = cljs.core.nth.call(null,inst_13289__$1,(1),null);
var inst_13292 = (inst_13290__$1 == null);
var state_13310__$1 = (function (){var statearr_13312 = state_13310;
(statearr_13312[(9)] = inst_13291);

(statearr_13312[(7)] = inst_13289__$1);

(statearr_13312[(8)] = inst_13290__$1);

return statearr_13312;
})();
if(cljs.core.truth_(inst_13292)){
var statearr_13313_13335 = state_13310__$1;
(statearr_13313_13335[(1)] = (8));

} else {
var statearr_13314_13336 = state_13310__$1;
(statearr_13314_13336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13311 === (1))){
var inst_13281 = cljs.core.vec.call(null,chs);
var inst_13282 = inst_13281;
var state_13310__$1 = (function (){var statearr_13315 = state_13310;
(statearr_13315[(10)] = inst_13282);

return statearr_13315;
})();
var statearr_13316_13337 = state_13310__$1;
(statearr_13316_13337[(2)] = null);

(statearr_13316_13337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13311 === (4))){
var inst_13282 = (state_13310[(10)]);
var state_13310__$1 = state_13310;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13310__$1,(7),inst_13282);
} else {
if((state_val_13311 === (6))){
var inst_13306 = (state_13310[(2)]);
var state_13310__$1 = state_13310;
var statearr_13317_13338 = state_13310__$1;
(statearr_13317_13338[(2)] = inst_13306);

(statearr_13317_13338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13311 === (3))){
var inst_13308 = (state_13310[(2)]);
var state_13310__$1 = state_13310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13310__$1,inst_13308);
} else {
if((state_val_13311 === (2))){
var inst_13282 = (state_13310[(10)]);
var inst_13284 = cljs.core.count.call(null,inst_13282);
var inst_13285 = (inst_13284 > (0));
var state_13310__$1 = state_13310;
if(cljs.core.truth_(inst_13285)){
var statearr_13319_13339 = state_13310__$1;
(statearr_13319_13339[(1)] = (4));

} else {
var statearr_13320_13340 = state_13310__$1;
(statearr_13320_13340[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13311 === (11))){
var inst_13282 = (state_13310[(10)]);
var inst_13299 = (state_13310[(2)]);
var tmp13318 = inst_13282;
var inst_13282__$1 = tmp13318;
var state_13310__$1 = (function (){var statearr_13321 = state_13310;
(statearr_13321[(10)] = inst_13282__$1);

(statearr_13321[(11)] = inst_13299);

return statearr_13321;
})();
var statearr_13322_13341 = state_13310__$1;
(statearr_13322_13341[(2)] = null);

(statearr_13322_13341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13311 === (9))){
var inst_13290 = (state_13310[(8)]);
var state_13310__$1 = state_13310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13310__$1,(11),out,inst_13290);
} else {
if((state_val_13311 === (5))){
var inst_13304 = cljs.core.async.close_BANG_.call(null,out);
var state_13310__$1 = state_13310;
var statearr_13323_13342 = state_13310__$1;
(statearr_13323_13342[(2)] = inst_13304);

(statearr_13323_13342[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13311 === (10))){
var inst_13302 = (state_13310[(2)]);
var state_13310__$1 = state_13310;
var statearr_13324_13343 = state_13310__$1;
(statearr_13324_13343[(2)] = inst_13302);

(statearr_13324_13343[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13311 === (8))){
var inst_13282 = (state_13310[(10)]);
var inst_13291 = (state_13310[(9)]);
var inst_13289 = (state_13310[(7)]);
var inst_13290 = (state_13310[(8)]);
var inst_13294 = (function (){var c = inst_13291;
var v = inst_13290;
var vec__13287 = inst_13289;
var cs = inst_13282;
return ((function (c,v,vec__13287,cs,inst_13282,inst_13291,inst_13289,inst_13290,state_val_13311,c__5809__auto___13334,out){
return (function (p1__13227_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13227_SHARP_);
});
;})(c,v,vec__13287,cs,inst_13282,inst_13291,inst_13289,inst_13290,state_val_13311,c__5809__auto___13334,out))
})();
var inst_13295 = cljs.core.filterv.call(null,inst_13294,inst_13282);
var inst_13282__$1 = inst_13295;
var state_13310__$1 = (function (){var statearr_13325 = state_13310;
(statearr_13325[(10)] = inst_13282__$1);

return statearr_13325;
})();
var statearr_13326_13344 = state_13310__$1;
(statearr_13326_13344[(2)] = null);

(statearr_13326_13344[(1)] = (2));


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
});})(c__5809__auto___13334,out))
;
return ((function (switch__5794__auto__,c__5809__auto___13334,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_13330 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13330[(0)] = state_machine__5795__auto__);

(statearr_13330[(1)] = (1));

return statearr_13330;
});
var state_machine__5795__auto____1 = (function (state_13310){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_13310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e13331){if((e13331 instanceof Object)){
var ex__5798__auto__ = e13331;
var statearr_13332_13345 = state_13310;
(statearr_13332_13345[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13346 = state_13310;
state_13310 = G__13346;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_13310){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_13310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___13334,out))
})();
var state__5811__auto__ = (function (){var statearr_13333 = f__5810__auto__.call(null);
(statearr_13333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___13334);

return statearr_13333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___13334,out))
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
var c__5809__auto___13439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___13439,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___13439,out){
return (function (state_13416){
var state_val_13417 = (state_13416[(1)]);
if((state_val_13417 === (7))){
var inst_13398 = (state_13416[(7)]);
var inst_13398__$1 = (state_13416[(2)]);
var inst_13399 = (inst_13398__$1 == null);
var inst_13400 = cljs.core.not.call(null,inst_13399);
var state_13416__$1 = (function (){var statearr_13418 = state_13416;
(statearr_13418[(7)] = inst_13398__$1);

return statearr_13418;
})();
if(inst_13400){
var statearr_13419_13440 = state_13416__$1;
(statearr_13419_13440[(1)] = (8));

} else {
var statearr_13420_13441 = state_13416__$1;
(statearr_13420_13441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13417 === (1))){
var inst_13393 = (0);
var state_13416__$1 = (function (){var statearr_13421 = state_13416;
(statearr_13421[(8)] = inst_13393);

return statearr_13421;
})();
var statearr_13422_13442 = state_13416__$1;
(statearr_13422_13442[(2)] = null);

(statearr_13422_13442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13417 === (4))){
var state_13416__$1 = state_13416;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13416__$1,(7),ch);
} else {
if((state_val_13417 === (6))){
var inst_13411 = (state_13416[(2)]);
var state_13416__$1 = state_13416;
var statearr_13423_13443 = state_13416__$1;
(statearr_13423_13443[(2)] = inst_13411);

(statearr_13423_13443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13417 === (3))){
var inst_13413 = (state_13416[(2)]);
var inst_13414 = cljs.core.async.close_BANG_.call(null,out);
var state_13416__$1 = (function (){var statearr_13424 = state_13416;
(statearr_13424[(9)] = inst_13413);

return statearr_13424;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13416__$1,inst_13414);
} else {
if((state_val_13417 === (2))){
var inst_13393 = (state_13416[(8)]);
var inst_13395 = (inst_13393 < n);
var state_13416__$1 = state_13416;
if(cljs.core.truth_(inst_13395)){
var statearr_13425_13444 = state_13416__$1;
(statearr_13425_13444[(1)] = (4));

} else {
var statearr_13426_13445 = state_13416__$1;
(statearr_13426_13445[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13417 === (11))){
var inst_13393 = (state_13416[(8)]);
var inst_13403 = (state_13416[(2)]);
var inst_13404 = (inst_13393 + (1));
var inst_13393__$1 = inst_13404;
var state_13416__$1 = (function (){var statearr_13427 = state_13416;
(statearr_13427[(8)] = inst_13393__$1);

(statearr_13427[(10)] = inst_13403);

return statearr_13427;
})();
var statearr_13428_13446 = state_13416__$1;
(statearr_13428_13446[(2)] = null);

(statearr_13428_13446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13417 === (9))){
var state_13416__$1 = state_13416;
var statearr_13429_13447 = state_13416__$1;
(statearr_13429_13447[(2)] = null);

(statearr_13429_13447[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13417 === (5))){
var state_13416__$1 = state_13416;
var statearr_13430_13448 = state_13416__$1;
(statearr_13430_13448[(2)] = null);

(statearr_13430_13448[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13417 === (10))){
var inst_13408 = (state_13416[(2)]);
var state_13416__$1 = state_13416;
var statearr_13431_13449 = state_13416__$1;
(statearr_13431_13449[(2)] = inst_13408);

(statearr_13431_13449[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13417 === (8))){
var inst_13398 = (state_13416[(7)]);
var state_13416__$1 = state_13416;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13416__$1,(11),out,inst_13398);
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
});})(c__5809__auto___13439,out))
;
return ((function (switch__5794__auto__,c__5809__auto___13439,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_13435 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13435[(0)] = state_machine__5795__auto__);

(statearr_13435[(1)] = (1));

return statearr_13435;
});
var state_machine__5795__auto____1 = (function (state_13416){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_13416);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e13436){if((e13436 instanceof Object)){
var ex__5798__auto__ = e13436;
var statearr_13437_13450 = state_13416;
(statearr_13437_13450[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13451 = state_13416;
state_13416 = G__13451;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_13416){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_13416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___13439,out))
})();
var state__5811__auto__ = (function (){var statearr_13438 = f__5810__auto__.call(null);
(statearr_13438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___13439);

return statearr_13438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___13439,out))
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
if(typeof cljs.core.async.t13459 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13459 = (function (ch,f,map_LT_,meta13460){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13460 = meta13460;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13459.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t13459.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t13459.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t13459.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t13462 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13462 = (function (fn1,_,meta13460,map_LT_,f,ch,meta13463){
this.fn1 = fn1;
this._ = _;
this.meta13460 = meta13460;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta13463 = meta13463;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13462.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13462.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t13462.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__13452_SHARP_){
return f1.call(null,(((p1__13452_SHARP_ == null))?null:self__.f.call(null,p1__13452_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t13462.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13464){
var self__ = this;
var _13464__$1 = this;
return self__.meta13463;
});})(___$1))
;

cljs.core.async.t13462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13464,meta13463__$1){
var self__ = this;
var _13464__$1 = this;
return (new cljs.core.async.t13462(self__.fn1,self__._,self__.meta13460,self__.map_LT_,self__.f,self__.ch,meta13463__$1));
});})(___$1))
;

cljs.core.async.t13462.cljs$lang$type = true;

cljs.core.async.t13462.cljs$lang$ctorStr = "cljs.core.async/t13462";

cljs.core.async.t13462.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t13462");
});})(___$1))
;

cljs.core.async.__GT_t13462 = ((function (___$1){
return (function __GT_t13462(fn1__$1,___$2,meta13460__$1,map_LT___$1,f__$1,ch__$1,meta13463){
return (new cljs.core.async.t13462(fn1__$1,___$2,meta13460__$1,map_LT___$1,f__$1,ch__$1,meta13463));
});})(___$1))
;

}

return (new cljs.core.async.t13462(fn1,___$1,self__.meta13460,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
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

cljs.core.async.t13459.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t13459.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t13459.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t13459.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13461){
var self__ = this;
var _13461__$1 = this;
return self__.meta13460;
});

cljs.core.async.t13459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13461,meta13460__$1){
var self__ = this;
var _13461__$1 = this;
return (new cljs.core.async.t13459(self__.ch,self__.f,self__.map_LT_,meta13460__$1));
});

cljs.core.async.t13459.cljs$lang$type = true;

cljs.core.async.t13459.cljs$lang$ctorStr = "cljs.core.async/t13459";

cljs.core.async.t13459.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t13459");
});

cljs.core.async.__GT_t13459 = (function __GT_t13459(ch__$1,f__$1,map_LT___$1,meta13460){
return (new cljs.core.async.t13459(ch__$1,f__$1,map_LT___$1,meta13460));
});

}

return (new cljs.core.async.t13459(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t13468 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13468 = (function (ch,f,map_GT_,meta13469){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13469 = meta13469;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13468.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t13468.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t13468.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t13468.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t13468.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t13468.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t13468.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13470){
var self__ = this;
var _13470__$1 = this;
return self__.meta13469;
});

cljs.core.async.t13468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13470,meta13469__$1){
var self__ = this;
var _13470__$1 = this;
return (new cljs.core.async.t13468(self__.ch,self__.f,self__.map_GT_,meta13469__$1));
});

cljs.core.async.t13468.cljs$lang$type = true;

cljs.core.async.t13468.cljs$lang$ctorStr = "cljs.core.async/t13468";

cljs.core.async.t13468.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t13468");
});

cljs.core.async.__GT_t13468 = (function __GT_t13468(ch__$1,f__$1,map_GT___$1,meta13469){
return (new cljs.core.async.t13468(ch__$1,f__$1,map_GT___$1,meta13469));
});

}

return (new cljs.core.async.t13468(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t13474 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13474 = (function (ch,p,filter_GT_,meta13475){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13475 = meta13475;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13474.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t13474.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t13474.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t13474.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t13474.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t13474.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t13474.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t13474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13476){
var self__ = this;
var _13476__$1 = this;
return self__.meta13475;
});

cljs.core.async.t13474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13476,meta13475__$1){
var self__ = this;
var _13476__$1 = this;
return (new cljs.core.async.t13474(self__.ch,self__.p,self__.filter_GT_,meta13475__$1));
});

cljs.core.async.t13474.cljs$lang$type = true;

cljs.core.async.t13474.cljs$lang$ctorStr = "cljs.core.async/t13474";

cljs.core.async.t13474.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t13474");
});

cljs.core.async.__GT_t13474 = (function __GT_t13474(ch__$1,p__$1,filter_GT___$1,meta13475){
return (new cljs.core.async.t13474(ch__$1,p__$1,filter_GT___$1,meta13475));
});

}

return (new cljs.core.async.t13474(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
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
var c__5809__auto___13559 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___13559,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___13559,out){
return (function (state_13538){
var state_val_13539 = (state_13538[(1)]);
if((state_val_13539 === (7))){
var inst_13534 = (state_13538[(2)]);
var state_13538__$1 = state_13538;
var statearr_13540_13560 = state_13538__$1;
(statearr_13540_13560[(2)] = inst_13534);

(statearr_13540_13560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13539 === (1))){
var state_13538__$1 = state_13538;
var statearr_13541_13561 = state_13538__$1;
(statearr_13541_13561[(2)] = null);

(statearr_13541_13561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13539 === (4))){
var inst_13520 = (state_13538[(7)]);
var inst_13520__$1 = (state_13538[(2)]);
var inst_13521 = (inst_13520__$1 == null);
var state_13538__$1 = (function (){var statearr_13542 = state_13538;
(statearr_13542[(7)] = inst_13520__$1);

return statearr_13542;
})();
if(cljs.core.truth_(inst_13521)){
var statearr_13543_13562 = state_13538__$1;
(statearr_13543_13562[(1)] = (5));

} else {
var statearr_13544_13563 = state_13538__$1;
(statearr_13544_13563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13539 === (6))){
var inst_13520 = (state_13538[(7)]);
var inst_13525 = p.call(null,inst_13520);
var state_13538__$1 = state_13538;
if(cljs.core.truth_(inst_13525)){
var statearr_13545_13564 = state_13538__$1;
(statearr_13545_13564[(1)] = (8));

} else {
var statearr_13546_13565 = state_13538__$1;
(statearr_13546_13565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13539 === (3))){
var inst_13536 = (state_13538[(2)]);
var state_13538__$1 = state_13538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13538__$1,inst_13536);
} else {
if((state_val_13539 === (2))){
var state_13538__$1 = state_13538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13538__$1,(4),ch);
} else {
if((state_val_13539 === (11))){
var inst_13528 = (state_13538[(2)]);
var state_13538__$1 = state_13538;
var statearr_13547_13566 = state_13538__$1;
(statearr_13547_13566[(2)] = inst_13528);

(statearr_13547_13566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13539 === (9))){
var state_13538__$1 = state_13538;
var statearr_13548_13567 = state_13538__$1;
(statearr_13548_13567[(2)] = null);

(statearr_13548_13567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13539 === (5))){
var inst_13523 = cljs.core.async.close_BANG_.call(null,out);
var state_13538__$1 = state_13538;
var statearr_13549_13568 = state_13538__$1;
(statearr_13549_13568[(2)] = inst_13523);

(statearr_13549_13568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13539 === (10))){
var inst_13531 = (state_13538[(2)]);
var state_13538__$1 = (function (){var statearr_13550 = state_13538;
(statearr_13550[(8)] = inst_13531);

return statearr_13550;
})();
var statearr_13551_13569 = state_13538__$1;
(statearr_13551_13569[(2)] = null);

(statearr_13551_13569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13539 === (8))){
var inst_13520 = (state_13538[(7)]);
var state_13538__$1 = state_13538;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13538__$1,(11),out,inst_13520);
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
});})(c__5809__auto___13559,out))
;
return ((function (switch__5794__auto__,c__5809__auto___13559,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_13555 = [null,null,null,null,null,null,null,null,null];
(statearr_13555[(0)] = state_machine__5795__auto__);

(statearr_13555[(1)] = (1));

return statearr_13555;
});
var state_machine__5795__auto____1 = (function (state_13538){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_13538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e13556){if((e13556 instanceof Object)){
var ex__5798__auto__ = e13556;
var statearr_13557_13570 = state_13538;
(statearr_13557_13570[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13571 = state_13538;
state_13538 = G__13571;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_13538){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_13538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___13559,out))
})();
var state__5811__auto__ = (function (){var statearr_13558 = f__5810__auto__.call(null);
(statearr_13558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___13559);

return statearr_13558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___13559,out))
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
return (function (state_13737){
var state_val_13738 = (state_13737[(1)]);
if((state_val_13738 === (7))){
var inst_13733 = (state_13737[(2)]);
var state_13737__$1 = state_13737;
var statearr_13739_13780 = state_13737__$1;
(statearr_13739_13780[(2)] = inst_13733);

(statearr_13739_13780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13738 === (20))){
var inst_13703 = (state_13737[(7)]);
var inst_13714 = (state_13737[(2)]);
var inst_13715 = cljs.core.next.call(null,inst_13703);
var inst_13689 = inst_13715;
var inst_13690 = null;
var inst_13691 = (0);
var inst_13692 = (0);
var state_13737__$1 = (function (){var statearr_13740 = state_13737;
(statearr_13740[(8)] = inst_13690);

(statearr_13740[(9)] = inst_13714);

(statearr_13740[(10)] = inst_13689);

(statearr_13740[(11)] = inst_13691);

(statearr_13740[(12)] = inst_13692);

return statearr_13740;
})();
var statearr_13741_13781 = state_13737__$1;
(statearr_13741_13781[(2)] = null);

(statearr_13741_13781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13738 === (1))){
var state_13737__$1 = state_13737;
var statearr_13742_13782 = state_13737__$1;
(statearr_13742_13782[(2)] = null);

(statearr_13742_13782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13738 === (4))){
var inst_13678 = (state_13737[(13)]);
var inst_13678__$1 = (state_13737[(2)]);
var inst_13679 = (inst_13678__$1 == null);
var state_13737__$1 = (function (){var statearr_13743 = state_13737;
(statearr_13743[(13)] = inst_13678__$1);

return statearr_13743;
})();
if(cljs.core.truth_(inst_13679)){
var statearr_13744_13783 = state_13737__$1;
(statearr_13744_13783[(1)] = (5));

} else {
var statearr_13745_13784 = state_13737__$1;
(statearr_13745_13784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13738 === (15))){
var state_13737__$1 = state_13737;
var statearr_13749_13785 = state_13737__$1;
(statearr_13749_13785[(2)] = null);

(statearr_13749_13785[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13738 === (21))){
var state_13737__$1 = state_13737;
var statearr_13750_13786 = state_13737__$1;
(statearr_13750_13786[(2)] = null);

(statearr_13750_13786[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13738 === (13))){
var inst_13690 = (state_13737[(8)]);
var inst_13689 = (state_13737[(10)]);
var inst_13691 = (state_13737[(11)]);
var inst_13692 = (state_13737[(12)]);
var inst_13699 = (state_13737[(2)]);
var inst_13700 = (inst_13692 + (1));
var tmp13746 = inst_13690;
var tmp13747 = inst_13689;
var tmp13748 = inst_13691;
var inst_13689__$1 = tmp13747;
var inst_13690__$1 = tmp13746;
var inst_13691__$1 = tmp13748;
var inst_13692__$1 = inst_13700;
var state_13737__$1 = (function (){var statearr_13751 = state_13737;
(statearr_13751[(8)] = inst_13690__$1);

(statearr_13751[(10)] = inst_13689__$1);

(statearr_13751[(14)] = inst_13699);

(statearr_13751[(11)] = inst_13691__$1);

(statearr_13751[(12)] = inst_13692__$1);

return statearr_13751;
})();
var statearr_13752_13787 = state_13737__$1;
(statearr_13752_13787[(2)] = null);

(statearr_13752_13787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13738 === (22))){
var state_13737__$1 = state_13737;
var statearr_13753_13788 = state_13737__$1;
(statearr_13753_13788[(2)] = null);

(statearr_13753_13788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13738 === (6))){
var inst_13678 = (state_13737[(13)]);
var inst_13687 = f.call(null,inst_13678);
var inst_13688 = cljs.core.seq.call(null,inst_13687);
var inst_13689 = inst_13688;
var inst_13690 = null;
var inst_13691 = (0);
var inst_13692 = (0);
var state_13737__$1 = (function (){var statearr_13754 = state_13737;
(statearr_13754[(8)] = inst_13690);

(statearr_13754[(10)] = inst_13689);

(statearr_13754[(11)] = inst_13691);

(statearr_13754[(12)] = inst_13692);

return statearr_13754;
})();
var statearr_13755_13789 = state_13737__$1;
(statearr_13755_13789[(2)] = null);

(statearr_13755_13789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13738 === (17))){
var inst_13703 = (state_13737[(7)]);
var inst_13707 = cljs.core.chunk_first.call(null,inst_13703);
var inst_13708 = cljs.core.chunk_rest.call(null,inst_13703);
var inst_13709 = cljs.core.count.call(null,inst_13707);
var inst_13689 = inst_13708;
var inst_13690 = inst_13707;
var inst_13691 = inst_13709;
var inst_13692 = (0);
var state_13737__$1 = (function (){var statearr_13756 = state_13737;
(statearr_13756[(8)] = inst_13690);

(statearr_13756[(10)] = inst_13689);

(statearr_13756[(11)] = inst_13691);

(statearr_13756[(12)] = inst_13692);

return statearr_13756;
})();
var statearr_13757_13790 = state_13737__$1;
(statearr_13757_13790[(2)] = null);

(statearr_13757_13790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13738 === (3))){
var inst_13735 = (state_13737[(2)]);
var state_13737__$1 = state_13737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13737__$1,inst_13735);
} else {
if((state_val_13738 === (12))){
var inst_13723 = (state_13737[(2)]);
var state_13737__$1 = state_13737;
var statearr_13758_13791 = state_13737__$1;
(statearr_13758_13791[(2)] = inst_13723);

(statearr_13758_13791[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13738 === (2))){
var state_13737__$1 = state_13737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13737__$1,(4),in$);
} else {
if((state_val_13738 === (23))){
var inst_13731 = (state_13737[(2)]);
var state_13737__$1 = state_13737;
var statearr_13759_13792 = state_13737__$1;
(statearr_13759_13792[(2)] = inst_13731);

(statearr_13759_13792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13738 === (19))){
var inst_13718 = (state_13737[(2)]);
var state_13737__$1 = state_13737;
var statearr_13760_13793 = state_13737__$1;
(statearr_13760_13793[(2)] = inst_13718);

(statearr_13760_13793[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13738 === (11))){
var inst_13689 = (state_13737[(10)]);
var inst_13703 = (state_13737[(7)]);
var inst_13703__$1 = cljs.core.seq.call(null,inst_13689);
var state_13737__$1 = (function (){var statearr_13761 = state_13737;
(statearr_13761[(7)] = inst_13703__$1);

return statearr_13761;
})();
if(inst_13703__$1){
var statearr_13762_13794 = state_13737__$1;
(statearr_13762_13794[(1)] = (14));

} else {
var statearr_13763_13795 = state_13737__$1;
(statearr_13763_13795[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13738 === (9))){
var inst_13725 = (state_13737[(2)]);
var inst_13726 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13737__$1 = (function (){var statearr_13764 = state_13737;
(statearr_13764[(15)] = inst_13725);

return statearr_13764;
})();
if(cljs.core.truth_(inst_13726)){
var statearr_13765_13796 = state_13737__$1;
(statearr_13765_13796[(1)] = (21));

} else {
var statearr_13766_13797 = state_13737__$1;
(statearr_13766_13797[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13738 === (5))){
var inst_13681 = cljs.core.async.close_BANG_.call(null,out);
var state_13737__$1 = state_13737;
var statearr_13767_13798 = state_13737__$1;
(statearr_13767_13798[(2)] = inst_13681);

(statearr_13767_13798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13738 === (14))){
var inst_13703 = (state_13737[(7)]);
var inst_13705 = cljs.core.chunked_seq_QMARK_.call(null,inst_13703);
var state_13737__$1 = state_13737;
if(inst_13705){
var statearr_13768_13799 = state_13737__$1;
(statearr_13768_13799[(1)] = (17));

} else {
var statearr_13769_13800 = state_13737__$1;
(statearr_13769_13800[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13738 === (16))){
var inst_13721 = (state_13737[(2)]);
var state_13737__$1 = state_13737;
var statearr_13770_13801 = state_13737__$1;
(statearr_13770_13801[(2)] = inst_13721);

(statearr_13770_13801[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13738 === (10))){
var inst_13690 = (state_13737[(8)]);
var inst_13692 = (state_13737[(12)]);
var inst_13697 = cljs.core._nth.call(null,inst_13690,inst_13692);
var state_13737__$1 = state_13737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13737__$1,(13),out,inst_13697);
} else {
if((state_val_13738 === (18))){
var inst_13703 = (state_13737[(7)]);
var inst_13712 = cljs.core.first.call(null,inst_13703);
var state_13737__$1 = state_13737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13737__$1,(20),out,inst_13712);
} else {
if((state_val_13738 === (8))){
var inst_13691 = (state_13737[(11)]);
var inst_13692 = (state_13737[(12)]);
var inst_13694 = (inst_13692 < inst_13691);
var inst_13695 = inst_13694;
var state_13737__$1 = state_13737;
if(cljs.core.truth_(inst_13695)){
var statearr_13771_13802 = state_13737__$1;
(statearr_13771_13802[(1)] = (10));

} else {
var statearr_13772_13803 = state_13737__$1;
(statearr_13772_13803[(1)] = (11));

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
var statearr_13776 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13776[(0)] = state_machine__5795__auto__);

(statearr_13776[(1)] = (1));

return statearr_13776;
});
var state_machine__5795__auto____1 = (function (state_13737){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_13737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e13777){if((e13777 instanceof Object)){
var ex__5798__auto__ = e13777;
var statearr_13778_13804 = state_13737;
(statearr_13778_13804[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13805 = state_13737;
state_13737 = G__13805;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_13737){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_13737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_13779 = f__5810__auto__.call(null);
(statearr_13779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_13779;
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
var c__5809__auto___13902 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___13902,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___13902,out){
return (function (state_13877){
var state_val_13878 = (state_13877[(1)]);
if((state_val_13878 === (7))){
var inst_13872 = (state_13877[(2)]);
var state_13877__$1 = state_13877;
var statearr_13879_13903 = state_13877__$1;
(statearr_13879_13903[(2)] = inst_13872);

(statearr_13879_13903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13878 === (1))){
var inst_13854 = null;
var state_13877__$1 = (function (){var statearr_13880 = state_13877;
(statearr_13880[(7)] = inst_13854);

return statearr_13880;
})();
var statearr_13881_13904 = state_13877__$1;
(statearr_13881_13904[(2)] = null);

(statearr_13881_13904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13878 === (4))){
var inst_13857 = (state_13877[(8)]);
var inst_13857__$1 = (state_13877[(2)]);
var inst_13858 = (inst_13857__$1 == null);
var inst_13859 = cljs.core.not.call(null,inst_13858);
var state_13877__$1 = (function (){var statearr_13882 = state_13877;
(statearr_13882[(8)] = inst_13857__$1);

return statearr_13882;
})();
if(inst_13859){
var statearr_13883_13905 = state_13877__$1;
(statearr_13883_13905[(1)] = (5));

} else {
var statearr_13884_13906 = state_13877__$1;
(statearr_13884_13906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13878 === (6))){
var state_13877__$1 = state_13877;
var statearr_13885_13907 = state_13877__$1;
(statearr_13885_13907[(2)] = null);

(statearr_13885_13907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13878 === (3))){
var inst_13874 = (state_13877[(2)]);
var inst_13875 = cljs.core.async.close_BANG_.call(null,out);
var state_13877__$1 = (function (){var statearr_13886 = state_13877;
(statearr_13886[(9)] = inst_13874);

return statearr_13886;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13877__$1,inst_13875);
} else {
if((state_val_13878 === (2))){
var state_13877__$1 = state_13877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13877__$1,(4),ch);
} else {
if((state_val_13878 === (11))){
var inst_13857 = (state_13877[(8)]);
var inst_13866 = (state_13877[(2)]);
var inst_13854 = inst_13857;
var state_13877__$1 = (function (){var statearr_13887 = state_13877;
(statearr_13887[(10)] = inst_13866);

(statearr_13887[(7)] = inst_13854);

return statearr_13887;
})();
var statearr_13888_13908 = state_13877__$1;
(statearr_13888_13908[(2)] = null);

(statearr_13888_13908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13878 === (9))){
var inst_13857 = (state_13877[(8)]);
var state_13877__$1 = state_13877;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13877__$1,(11),out,inst_13857);
} else {
if((state_val_13878 === (5))){
var inst_13857 = (state_13877[(8)]);
var inst_13854 = (state_13877[(7)]);
var inst_13861 = cljs.core._EQ_.call(null,inst_13857,inst_13854);
var state_13877__$1 = state_13877;
if(inst_13861){
var statearr_13890_13909 = state_13877__$1;
(statearr_13890_13909[(1)] = (8));

} else {
var statearr_13891_13910 = state_13877__$1;
(statearr_13891_13910[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13878 === (10))){
var inst_13869 = (state_13877[(2)]);
var state_13877__$1 = state_13877;
var statearr_13892_13911 = state_13877__$1;
(statearr_13892_13911[(2)] = inst_13869);

(statearr_13892_13911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13878 === (8))){
var inst_13854 = (state_13877[(7)]);
var tmp13889 = inst_13854;
var inst_13854__$1 = tmp13889;
var state_13877__$1 = (function (){var statearr_13893 = state_13877;
(statearr_13893[(7)] = inst_13854__$1);

return statearr_13893;
})();
var statearr_13894_13912 = state_13877__$1;
(statearr_13894_13912[(2)] = null);

(statearr_13894_13912[(1)] = (2));


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
});})(c__5809__auto___13902,out))
;
return ((function (switch__5794__auto__,c__5809__auto___13902,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_13898 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13898[(0)] = state_machine__5795__auto__);

(statearr_13898[(1)] = (1));

return statearr_13898;
});
var state_machine__5795__auto____1 = (function (state_13877){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_13877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e13899){if((e13899 instanceof Object)){
var ex__5798__auto__ = e13899;
var statearr_13900_13913 = state_13877;
(statearr_13900_13913[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13914 = state_13877;
state_13877 = G__13914;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_13877){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_13877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___13902,out))
})();
var state__5811__auto__ = (function (){var statearr_13901 = f__5810__auto__.call(null);
(statearr_13901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___13902);

return statearr_13901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___13902,out))
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
var c__5809__auto___14049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___14049,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___14049,out){
return (function (state_14019){
var state_val_14020 = (state_14019[(1)]);
if((state_val_14020 === (7))){
var inst_14015 = (state_14019[(2)]);
var state_14019__$1 = state_14019;
var statearr_14021_14050 = state_14019__$1;
(statearr_14021_14050[(2)] = inst_14015);

(statearr_14021_14050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14020 === (1))){
var inst_13982 = (new Array(n));
var inst_13983 = inst_13982;
var inst_13984 = (0);
var state_14019__$1 = (function (){var statearr_14022 = state_14019;
(statearr_14022[(7)] = inst_13983);

(statearr_14022[(8)] = inst_13984);

return statearr_14022;
})();
var statearr_14023_14051 = state_14019__$1;
(statearr_14023_14051[(2)] = null);

(statearr_14023_14051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14020 === (4))){
var inst_13987 = (state_14019[(9)]);
var inst_13987__$1 = (state_14019[(2)]);
var inst_13988 = (inst_13987__$1 == null);
var inst_13989 = cljs.core.not.call(null,inst_13988);
var state_14019__$1 = (function (){var statearr_14024 = state_14019;
(statearr_14024[(9)] = inst_13987__$1);

return statearr_14024;
})();
if(inst_13989){
var statearr_14025_14052 = state_14019__$1;
(statearr_14025_14052[(1)] = (5));

} else {
var statearr_14026_14053 = state_14019__$1;
(statearr_14026_14053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14020 === (15))){
var inst_14009 = (state_14019[(2)]);
var state_14019__$1 = state_14019;
var statearr_14027_14054 = state_14019__$1;
(statearr_14027_14054[(2)] = inst_14009);

(statearr_14027_14054[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14020 === (13))){
var state_14019__$1 = state_14019;
var statearr_14028_14055 = state_14019__$1;
(statearr_14028_14055[(2)] = null);

(statearr_14028_14055[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14020 === (6))){
var inst_13984 = (state_14019[(8)]);
var inst_14005 = (inst_13984 > (0));
var state_14019__$1 = state_14019;
if(cljs.core.truth_(inst_14005)){
var statearr_14029_14056 = state_14019__$1;
(statearr_14029_14056[(1)] = (12));

} else {
var statearr_14030_14057 = state_14019__$1;
(statearr_14030_14057[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14020 === (3))){
var inst_14017 = (state_14019[(2)]);
var state_14019__$1 = state_14019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14019__$1,inst_14017);
} else {
if((state_val_14020 === (12))){
var inst_13983 = (state_14019[(7)]);
var inst_14007 = cljs.core.vec.call(null,inst_13983);
var state_14019__$1 = state_14019;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14019__$1,(15),out,inst_14007);
} else {
if((state_val_14020 === (2))){
var state_14019__$1 = state_14019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14019__$1,(4),ch);
} else {
if((state_val_14020 === (11))){
var inst_13999 = (state_14019[(2)]);
var inst_14000 = (new Array(n));
var inst_13983 = inst_14000;
var inst_13984 = (0);
var state_14019__$1 = (function (){var statearr_14031 = state_14019;
(statearr_14031[(10)] = inst_13999);

(statearr_14031[(7)] = inst_13983);

(statearr_14031[(8)] = inst_13984);

return statearr_14031;
})();
var statearr_14032_14058 = state_14019__$1;
(statearr_14032_14058[(2)] = null);

(statearr_14032_14058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14020 === (9))){
var inst_13983 = (state_14019[(7)]);
var inst_13997 = cljs.core.vec.call(null,inst_13983);
var state_14019__$1 = state_14019;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14019__$1,(11),out,inst_13997);
} else {
if((state_val_14020 === (5))){
var inst_13987 = (state_14019[(9)]);
var inst_13992 = (state_14019[(11)]);
var inst_13983 = (state_14019[(7)]);
var inst_13984 = (state_14019[(8)]);
var inst_13991 = (inst_13983[inst_13984] = inst_13987);
var inst_13992__$1 = (inst_13984 + (1));
var inst_13993 = (inst_13992__$1 < n);
var state_14019__$1 = (function (){var statearr_14033 = state_14019;
(statearr_14033[(11)] = inst_13992__$1);

(statearr_14033[(12)] = inst_13991);

return statearr_14033;
})();
if(cljs.core.truth_(inst_13993)){
var statearr_14034_14059 = state_14019__$1;
(statearr_14034_14059[(1)] = (8));

} else {
var statearr_14035_14060 = state_14019__$1;
(statearr_14035_14060[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14020 === (14))){
var inst_14012 = (state_14019[(2)]);
var inst_14013 = cljs.core.async.close_BANG_.call(null,out);
var state_14019__$1 = (function (){var statearr_14037 = state_14019;
(statearr_14037[(13)] = inst_14012);

return statearr_14037;
})();
var statearr_14038_14061 = state_14019__$1;
(statearr_14038_14061[(2)] = inst_14013);

(statearr_14038_14061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14020 === (10))){
var inst_14003 = (state_14019[(2)]);
var state_14019__$1 = state_14019;
var statearr_14039_14062 = state_14019__$1;
(statearr_14039_14062[(2)] = inst_14003);

(statearr_14039_14062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14020 === (8))){
var inst_13992 = (state_14019[(11)]);
var inst_13983 = (state_14019[(7)]);
var tmp14036 = inst_13983;
var inst_13983__$1 = tmp14036;
var inst_13984 = inst_13992;
var state_14019__$1 = (function (){var statearr_14040 = state_14019;
(statearr_14040[(7)] = inst_13983__$1);

(statearr_14040[(8)] = inst_13984);

return statearr_14040;
})();
var statearr_14041_14063 = state_14019__$1;
(statearr_14041_14063[(2)] = null);

(statearr_14041_14063[(1)] = (2));


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
});})(c__5809__auto___14049,out))
;
return ((function (switch__5794__auto__,c__5809__auto___14049,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_14045 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14045[(0)] = state_machine__5795__auto__);

(statearr_14045[(1)] = (1));

return statearr_14045;
});
var state_machine__5795__auto____1 = (function (state_14019){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_14019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e14046){if((e14046 instanceof Object)){
var ex__5798__auto__ = e14046;
var statearr_14047_14064 = state_14019;
(statearr_14047_14064[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14065 = state_14019;
state_14019 = G__14065;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_14019){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_14019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___14049,out))
})();
var state__5811__auto__ = (function (){var statearr_14048 = f__5810__auto__.call(null);
(statearr_14048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___14049);

return statearr_14048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___14049,out))
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
var c__5809__auto___14208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___14208,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___14208,out){
return (function (state_14178){
var state_val_14179 = (state_14178[(1)]);
if((state_val_14179 === (7))){
var inst_14174 = (state_14178[(2)]);
var state_14178__$1 = state_14178;
var statearr_14180_14209 = state_14178__$1;
(statearr_14180_14209[(2)] = inst_14174);

(statearr_14180_14209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14179 === (1))){
var inst_14137 = [];
var inst_14138 = inst_14137;
var inst_14139 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14178__$1 = (function (){var statearr_14181 = state_14178;
(statearr_14181[(7)] = inst_14138);

(statearr_14181[(8)] = inst_14139);

return statearr_14181;
})();
var statearr_14182_14210 = state_14178__$1;
(statearr_14182_14210[(2)] = null);

(statearr_14182_14210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14179 === (4))){
var inst_14142 = (state_14178[(9)]);
var inst_14142__$1 = (state_14178[(2)]);
var inst_14143 = (inst_14142__$1 == null);
var inst_14144 = cljs.core.not.call(null,inst_14143);
var state_14178__$1 = (function (){var statearr_14183 = state_14178;
(statearr_14183[(9)] = inst_14142__$1);

return statearr_14183;
})();
if(inst_14144){
var statearr_14184_14211 = state_14178__$1;
(statearr_14184_14211[(1)] = (5));

} else {
var statearr_14185_14212 = state_14178__$1;
(statearr_14185_14212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14179 === (15))){
var inst_14168 = (state_14178[(2)]);
var state_14178__$1 = state_14178;
var statearr_14186_14213 = state_14178__$1;
(statearr_14186_14213[(2)] = inst_14168);

(statearr_14186_14213[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14179 === (13))){
var state_14178__$1 = state_14178;
var statearr_14187_14214 = state_14178__$1;
(statearr_14187_14214[(2)] = null);

(statearr_14187_14214[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14179 === (6))){
var inst_14138 = (state_14178[(7)]);
var inst_14163 = inst_14138.length;
var inst_14164 = (inst_14163 > (0));
var state_14178__$1 = state_14178;
if(cljs.core.truth_(inst_14164)){
var statearr_14188_14215 = state_14178__$1;
(statearr_14188_14215[(1)] = (12));

} else {
var statearr_14189_14216 = state_14178__$1;
(statearr_14189_14216[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14179 === (3))){
var inst_14176 = (state_14178[(2)]);
var state_14178__$1 = state_14178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14178__$1,inst_14176);
} else {
if((state_val_14179 === (12))){
var inst_14138 = (state_14178[(7)]);
var inst_14166 = cljs.core.vec.call(null,inst_14138);
var state_14178__$1 = state_14178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14178__$1,(15),out,inst_14166);
} else {
if((state_val_14179 === (2))){
var state_14178__$1 = state_14178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14178__$1,(4),ch);
} else {
if((state_val_14179 === (11))){
var inst_14142 = (state_14178[(9)]);
var inst_14146 = (state_14178[(10)]);
var inst_14156 = (state_14178[(2)]);
var inst_14157 = [];
var inst_14158 = inst_14157.push(inst_14142);
var inst_14138 = inst_14157;
var inst_14139 = inst_14146;
var state_14178__$1 = (function (){var statearr_14190 = state_14178;
(statearr_14190[(11)] = inst_14156);

(statearr_14190[(12)] = inst_14158);

(statearr_14190[(7)] = inst_14138);

(statearr_14190[(8)] = inst_14139);

return statearr_14190;
})();
var statearr_14191_14217 = state_14178__$1;
(statearr_14191_14217[(2)] = null);

(statearr_14191_14217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14179 === (9))){
var inst_14138 = (state_14178[(7)]);
var inst_14154 = cljs.core.vec.call(null,inst_14138);
var state_14178__$1 = state_14178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14178__$1,(11),out,inst_14154);
} else {
if((state_val_14179 === (5))){
var inst_14142 = (state_14178[(9)]);
var inst_14146 = (state_14178[(10)]);
var inst_14139 = (state_14178[(8)]);
var inst_14146__$1 = f.call(null,inst_14142);
var inst_14147 = cljs.core._EQ_.call(null,inst_14146__$1,inst_14139);
var inst_14148 = cljs.core.keyword_identical_QMARK_.call(null,inst_14139,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14149 = (inst_14147) || (inst_14148);
var state_14178__$1 = (function (){var statearr_14192 = state_14178;
(statearr_14192[(10)] = inst_14146__$1);

return statearr_14192;
})();
if(cljs.core.truth_(inst_14149)){
var statearr_14193_14218 = state_14178__$1;
(statearr_14193_14218[(1)] = (8));

} else {
var statearr_14194_14219 = state_14178__$1;
(statearr_14194_14219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14179 === (14))){
var inst_14171 = (state_14178[(2)]);
var inst_14172 = cljs.core.async.close_BANG_.call(null,out);
var state_14178__$1 = (function (){var statearr_14196 = state_14178;
(statearr_14196[(13)] = inst_14171);

return statearr_14196;
})();
var statearr_14197_14220 = state_14178__$1;
(statearr_14197_14220[(2)] = inst_14172);

(statearr_14197_14220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14179 === (10))){
var inst_14161 = (state_14178[(2)]);
var state_14178__$1 = state_14178;
var statearr_14198_14221 = state_14178__$1;
(statearr_14198_14221[(2)] = inst_14161);

(statearr_14198_14221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14179 === (8))){
var inst_14142 = (state_14178[(9)]);
var inst_14146 = (state_14178[(10)]);
var inst_14138 = (state_14178[(7)]);
var inst_14151 = inst_14138.push(inst_14142);
var tmp14195 = inst_14138;
var inst_14138__$1 = tmp14195;
var inst_14139 = inst_14146;
var state_14178__$1 = (function (){var statearr_14199 = state_14178;
(statearr_14199[(14)] = inst_14151);

(statearr_14199[(7)] = inst_14138__$1);

(statearr_14199[(8)] = inst_14139);

return statearr_14199;
})();
var statearr_14200_14222 = state_14178__$1;
(statearr_14200_14222[(2)] = null);

(statearr_14200_14222[(1)] = (2));


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
});})(c__5809__auto___14208,out))
;
return ((function (switch__5794__auto__,c__5809__auto___14208,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_14204 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14204[(0)] = state_machine__5795__auto__);

(statearr_14204[(1)] = (1));

return statearr_14204;
});
var state_machine__5795__auto____1 = (function (state_14178){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_14178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e14205){if((e14205 instanceof Object)){
var ex__5798__auto__ = e14205;
var statearr_14206_14223 = state_14178;
(statearr_14206_14223[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14224 = state_14178;
state_14178 = G__14224;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_14178){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_14178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___14208,out))
})();
var state__5811__auto__ = (function (){var statearr_14207 = f__5810__auto__.call(null);
(statearr_14207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___14208);

return statearr_14207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___14208,out))
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
