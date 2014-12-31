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
if(typeof cljs.core.async.t28325 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28325 = (function (f,fn_handler,meta28326){
this.f = f;
this.fn_handler = fn_handler;
this.meta28326 = meta28326;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28325.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28325.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t28325.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t28325.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28327){
var self__ = this;
var _28327__$1 = this;
return self__.meta28326;
});

cljs.core.async.t28325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28327,meta28326__$1){
var self__ = this;
var _28327__$1 = this;
return (new cljs.core.async.t28325(self__.f,self__.fn_handler,meta28326__$1));
});

cljs.core.async.t28325.cljs$lang$type = true;

cljs.core.async.t28325.cljs$lang$ctorStr = "cljs.core.async/t28325";

cljs.core.async.t28325.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t28325");
});

cljs.core.async.__GT_t28325 = (function __GT_t28325(f__$1,fn_handler__$1,meta28326){
return (new cljs.core.async.t28325(f__$1,fn_handler__$1,meta28326));
});

}

return (new cljs.core.async.t28325(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/dev/cljs/core/async.cljs"], null)));
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
var G__28329 = buff;
if(G__28329){
var bit__4284__auto__ = null;
if(cljs.core.truth_((function (){var or__3608__auto__ = bit__4284__auto__;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return G__28329.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__28329.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28329);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28329);
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
var val_28330 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28330);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28330,ret){
return (function (){
return fn1.call(null,val_28330);
});})(val_28330,ret))
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
var n__4490__auto___28331 = n;
var x_28332 = (0);
while(true){
if((x_28332 < n__4490__auto___28331)){
(a[x_28332] = (0));

var G__28333 = (x_28332 + (1));
x_28332 = G__28333;
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

var G__28334 = (i + (1));
i = G__28334;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t28338 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28338 = (function (flag,alt_flag,meta28339){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta28339 = meta28339;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28338.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28338.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t28338.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t28338.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28340){
var self__ = this;
var _28340__$1 = this;
return self__.meta28339;
});})(flag))
;

cljs.core.async.t28338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28340,meta28339__$1){
var self__ = this;
var _28340__$1 = this;
return (new cljs.core.async.t28338(self__.flag,self__.alt_flag,meta28339__$1));
});})(flag))
;

cljs.core.async.t28338.cljs$lang$type = true;

cljs.core.async.t28338.cljs$lang$ctorStr = "cljs.core.async/t28338";

cljs.core.async.t28338.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t28338");
});})(flag))
;

cljs.core.async.__GT_t28338 = ((function (flag){
return (function __GT_t28338(flag__$1,alt_flag__$1,meta28339){
return (new cljs.core.async.t28338(flag__$1,alt_flag__$1,meta28339));
});})(flag))
;

}

return (new cljs.core.async.t28338(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/dev/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t28344 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28344 = (function (cb,flag,alt_handler,meta28345){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta28345 = meta28345;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28344.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28344.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t28344.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t28344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28346){
var self__ = this;
var _28346__$1 = this;
return self__.meta28345;
});

cljs.core.async.t28344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28346,meta28345__$1){
var self__ = this;
var _28346__$1 = this;
return (new cljs.core.async.t28344(self__.cb,self__.flag,self__.alt_handler,meta28345__$1));
});

cljs.core.async.t28344.cljs$lang$type = true;

cljs.core.async.t28344.cljs$lang$ctorStr = "cljs.core.async/t28344";

cljs.core.async.t28344.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t28344");
});

cljs.core.async.__GT_t28344 = (function __GT_t28344(cb__$1,flag__$1,alt_handler__$1,meta28345){
return (new cljs.core.async.t28344(cb__$1,flag__$1,alt_handler__$1,meta28345));
});

}

return (new cljs.core.async.t28344(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/dev/cljs/core/async.cljs"], null)));
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
return (function (p1__28347_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28347_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28348_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28348_SHARP_,port], null));
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
var G__28349 = (i + (1));
i = G__28349;
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
var alts_BANG___delegate = function (ports,p__28350){
var map__28352 = p__28350;
var map__28352__$1 = ((cljs.core.seq_QMARK_.call(null,map__28352))?cljs.core.apply.call(null,cljs.core.hash_map,map__28352):map__28352);
var opts = map__28352__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__28350 = null;
if (arguments.length > 1) {
  p__28350 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__28350);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__28353){
var ports = cljs.core.first(arglist__28353);
var p__28350 = cljs.core.rest(arglist__28353);
return alts_BANG___delegate(ports,p__28350);
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
var c__7303__auto___28448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___28448){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___28448){
return (function (state_28424){
var state_val_28425 = (state_28424[(1)]);
if((state_val_28425 === (7))){
var inst_28420 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
var statearr_28426_28449 = state_28424__$1;
(statearr_28426_28449[(2)] = inst_28420);

(statearr_28426_28449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (1))){
var state_28424__$1 = state_28424;
var statearr_28427_28450 = state_28424__$1;
(statearr_28427_28450[(2)] = null);

(statearr_28427_28450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (4))){
var inst_28403 = (state_28424[(7)]);
var inst_28403__$1 = (state_28424[(2)]);
var inst_28404 = (inst_28403__$1 == null);
var state_28424__$1 = (function (){var statearr_28428 = state_28424;
(statearr_28428[(7)] = inst_28403__$1);

return statearr_28428;
})();
if(cljs.core.truth_(inst_28404)){
var statearr_28429_28451 = state_28424__$1;
(statearr_28429_28451[(1)] = (5));

} else {
var statearr_28430_28452 = state_28424__$1;
(statearr_28430_28452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (13))){
var state_28424__$1 = state_28424;
var statearr_28431_28453 = state_28424__$1;
(statearr_28431_28453[(2)] = null);

(statearr_28431_28453[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (6))){
var inst_28403 = (state_28424[(7)]);
var state_28424__$1 = state_28424;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28424__$1,(11),to,inst_28403);
} else {
if((state_val_28425 === (3))){
var inst_28422 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28424__$1,inst_28422);
} else {
if((state_val_28425 === (12))){
var state_28424__$1 = state_28424;
var statearr_28432_28454 = state_28424__$1;
(statearr_28432_28454[(2)] = null);

(statearr_28432_28454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (2))){
var state_28424__$1 = state_28424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28424__$1,(4),from);
} else {
if((state_val_28425 === (11))){
var inst_28413 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
if(cljs.core.truth_(inst_28413)){
var statearr_28433_28455 = state_28424__$1;
(statearr_28433_28455[(1)] = (12));

} else {
var statearr_28434_28456 = state_28424__$1;
(statearr_28434_28456[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (9))){
var state_28424__$1 = state_28424;
var statearr_28435_28457 = state_28424__$1;
(statearr_28435_28457[(2)] = null);

(statearr_28435_28457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (5))){
var state_28424__$1 = state_28424;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28436_28458 = state_28424__$1;
(statearr_28436_28458[(1)] = (8));

} else {
var statearr_28437_28459 = state_28424__$1;
(statearr_28437_28459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (14))){
var inst_28418 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
var statearr_28438_28460 = state_28424__$1;
(statearr_28438_28460[(2)] = inst_28418);

(statearr_28438_28460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (10))){
var inst_28410 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
var statearr_28439_28461 = state_28424__$1;
(statearr_28439_28461[(2)] = inst_28410);

(statearr_28439_28461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28425 === (8))){
var inst_28407 = cljs.core.async.close_BANG_.call(null,to);
var state_28424__$1 = state_28424;
var statearr_28440_28462 = state_28424__$1;
(statearr_28440_28462[(2)] = inst_28407);

(statearr_28440_28462[(1)] = (10));


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
});})(c__7303__auto___28448))
;
return ((function (switch__7288__auto__,c__7303__auto___28448){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_28444 = [null,null,null,null,null,null,null,null];
(statearr_28444[(0)] = state_machine__7289__auto__);

(statearr_28444[(1)] = (1));

return statearr_28444;
});
var state_machine__7289__auto____1 = (function (state_28424){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_28424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e28445){if((e28445 instanceof Object)){
var ex__7292__auto__ = e28445;
var statearr_28446_28463 = state_28424;
(statearr_28446_28463[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28464 = state_28424;
state_28424 = G__28464;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_28424){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_28424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___28448))
})();
var state__7305__auto__ = (function (){var statearr_28447 = f__7304__auto__.call(null);
(statearr_28447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___28448);

return statearr_28447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___28448))
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
return (function (p__28648){
var vec__28649 = p__28648;
var v = cljs.core.nth.call(null,vec__28649,(0),null);
var p = cljs.core.nth.call(null,vec__28649,(1),null);
var job = vec__28649;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7303__auto___28831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___28831,res,vec__28649,v,p,job,jobs,results){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___28831,res,vec__28649,v,p,job,jobs,results){
return (function (state_28654){
var state_val_28655 = (state_28654[(1)]);
if((state_val_28655 === (2))){
var inst_28651 = (state_28654[(2)]);
var inst_28652 = cljs.core.async.close_BANG_.call(null,res);
var state_28654__$1 = (function (){var statearr_28656 = state_28654;
(statearr_28656[(7)] = inst_28651);

return statearr_28656;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28654__$1,inst_28652);
} else {
if((state_val_28655 === (1))){
var state_28654__$1 = state_28654;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28654__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7303__auto___28831,res,vec__28649,v,p,job,jobs,results))
;
return ((function (switch__7288__auto__,c__7303__auto___28831,res,vec__28649,v,p,job,jobs,results){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_28660 = [null,null,null,null,null,null,null,null];
(statearr_28660[(0)] = state_machine__7289__auto__);

(statearr_28660[(1)] = (1));

return statearr_28660;
});
var state_machine__7289__auto____1 = (function (state_28654){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_28654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e28661){if((e28661 instanceof Object)){
var ex__7292__auto__ = e28661;
var statearr_28662_28832 = state_28654;
(statearr_28662_28832[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28833 = state_28654;
state_28654 = G__28833;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_28654){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_28654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___28831,res,vec__28649,v,p,job,jobs,results))
})();
var state__7305__auto__ = (function (){var statearr_28663 = f__7304__auto__.call(null);
(statearr_28663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___28831);

return statearr_28663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___28831,res,vec__28649,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28664){
var vec__28665 = p__28664;
var v = cljs.core.nth.call(null,vec__28665,(0),null);
var p = cljs.core.nth.call(null,vec__28665,(1),null);
var job = vec__28665;
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
var n__4490__auto___28834 = n;
var __28835 = (0);
while(true){
if((__28835 < n__4490__auto___28834)){
var G__28666_28836 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28666_28836) {
case "async":
var c__7303__auto___28838 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28835,c__7303__auto___28838,G__28666_28836,n__4490__auto___28834,jobs,results,process,async){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (__28835,c__7303__auto___28838,G__28666_28836,n__4490__auto___28834,jobs,results,process,async){
return (function (state_28679){
var state_val_28680 = (state_28679[(1)]);
if((state_val_28680 === (7))){
var inst_28675 = (state_28679[(2)]);
var state_28679__$1 = state_28679;
var statearr_28681_28839 = state_28679__$1;
(statearr_28681_28839[(2)] = inst_28675);

(statearr_28681_28839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28680 === (6))){
var state_28679__$1 = state_28679;
var statearr_28682_28840 = state_28679__$1;
(statearr_28682_28840[(2)] = null);

(statearr_28682_28840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28680 === (5))){
var state_28679__$1 = state_28679;
var statearr_28683_28841 = state_28679__$1;
(statearr_28683_28841[(2)] = null);

(statearr_28683_28841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28680 === (4))){
var inst_28669 = (state_28679[(2)]);
var inst_28670 = async.call(null,inst_28669);
var state_28679__$1 = state_28679;
if(cljs.core.truth_(inst_28670)){
var statearr_28684_28842 = state_28679__$1;
(statearr_28684_28842[(1)] = (5));

} else {
var statearr_28685_28843 = state_28679__$1;
(statearr_28685_28843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28680 === (3))){
var inst_28677 = (state_28679[(2)]);
var state_28679__$1 = state_28679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28679__$1,inst_28677);
} else {
if((state_val_28680 === (2))){
var state_28679__$1 = state_28679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28679__$1,(4),jobs);
} else {
if((state_val_28680 === (1))){
var state_28679__$1 = state_28679;
var statearr_28686_28844 = state_28679__$1;
(statearr_28686_28844[(2)] = null);

(statearr_28686_28844[(1)] = (2));


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
});})(__28835,c__7303__auto___28838,G__28666_28836,n__4490__auto___28834,jobs,results,process,async))
;
return ((function (__28835,switch__7288__auto__,c__7303__auto___28838,G__28666_28836,n__4490__auto___28834,jobs,results,process,async){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_28690 = [null,null,null,null,null,null,null];
(statearr_28690[(0)] = state_machine__7289__auto__);

(statearr_28690[(1)] = (1));

return statearr_28690;
});
var state_machine__7289__auto____1 = (function (state_28679){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_28679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e28691){if((e28691 instanceof Object)){
var ex__7292__auto__ = e28691;
var statearr_28692_28845 = state_28679;
(statearr_28692_28845[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28846 = state_28679;
state_28679 = G__28846;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_28679){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_28679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(__28835,switch__7288__auto__,c__7303__auto___28838,G__28666_28836,n__4490__auto___28834,jobs,results,process,async))
})();
var state__7305__auto__ = (function (){var statearr_28693 = f__7304__auto__.call(null);
(statearr_28693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___28838);

return statearr_28693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(__28835,c__7303__auto___28838,G__28666_28836,n__4490__auto___28834,jobs,results,process,async))
);


break;
case "compute":
var c__7303__auto___28847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28835,c__7303__auto___28847,G__28666_28836,n__4490__auto___28834,jobs,results,process,async){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (__28835,c__7303__auto___28847,G__28666_28836,n__4490__auto___28834,jobs,results,process,async){
return (function (state_28706){
var state_val_28707 = (state_28706[(1)]);
if((state_val_28707 === (7))){
var inst_28702 = (state_28706[(2)]);
var state_28706__$1 = state_28706;
var statearr_28708_28848 = state_28706__$1;
(statearr_28708_28848[(2)] = inst_28702);

(statearr_28708_28848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28707 === (6))){
var state_28706__$1 = state_28706;
var statearr_28709_28849 = state_28706__$1;
(statearr_28709_28849[(2)] = null);

(statearr_28709_28849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28707 === (5))){
var state_28706__$1 = state_28706;
var statearr_28710_28850 = state_28706__$1;
(statearr_28710_28850[(2)] = null);

(statearr_28710_28850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28707 === (4))){
var inst_28696 = (state_28706[(2)]);
var inst_28697 = process.call(null,inst_28696);
var state_28706__$1 = state_28706;
if(cljs.core.truth_(inst_28697)){
var statearr_28711_28851 = state_28706__$1;
(statearr_28711_28851[(1)] = (5));

} else {
var statearr_28712_28852 = state_28706__$1;
(statearr_28712_28852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28707 === (3))){
var inst_28704 = (state_28706[(2)]);
var state_28706__$1 = state_28706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28706__$1,inst_28704);
} else {
if((state_val_28707 === (2))){
var state_28706__$1 = state_28706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28706__$1,(4),jobs);
} else {
if((state_val_28707 === (1))){
var state_28706__$1 = state_28706;
var statearr_28713_28853 = state_28706__$1;
(statearr_28713_28853[(2)] = null);

(statearr_28713_28853[(1)] = (2));


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
});})(__28835,c__7303__auto___28847,G__28666_28836,n__4490__auto___28834,jobs,results,process,async))
;
return ((function (__28835,switch__7288__auto__,c__7303__auto___28847,G__28666_28836,n__4490__auto___28834,jobs,results,process,async){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_28717 = [null,null,null,null,null,null,null];
(statearr_28717[(0)] = state_machine__7289__auto__);

(statearr_28717[(1)] = (1));

return statearr_28717;
});
var state_machine__7289__auto____1 = (function (state_28706){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_28706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e28718){if((e28718 instanceof Object)){
var ex__7292__auto__ = e28718;
var statearr_28719_28854 = state_28706;
(statearr_28719_28854[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28855 = state_28706;
state_28706 = G__28855;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_28706){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_28706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(__28835,switch__7288__auto__,c__7303__auto___28847,G__28666_28836,n__4490__auto___28834,jobs,results,process,async))
})();
var state__7305__auto__ = (function (){var statearr_28720 = f__7304__auto__.call(null);
(statearr_28720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___28847);

return statearr_28720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(__28835,c__7303__auto___28847,G__28666_28836,n__4490__auto___28834,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28856 = (__28835 + (1));
__28835 = G__28856;
continue;
} else {
}
break;
}

var c__7303__auto___28857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___28857,jobs,results,process,async){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___28857,jobs,results,process,async){
return (function (state_28742){
var state_val_28743 = (state_28742[(1)]);
if((state_val_28743 === (9))){
var inst_28735 = (state_28742[(2)]);
var state_28742__$1 = (function (){var statearr_28744 = state_28742;
(statearr_28744[(7)] = inst_28735);

return statearr_28744;
})();
var statearr_28745_28858 = state_28742__$1;
(statearr_28745_28858[(2)] = null);

(statearr_28745_28858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (8))){
var inst_28728 = (state_28742[(8)]);
var inst_28733 = (state_28742[(2)]);
var state_28742__$1 = (function (){var statearr_28746 = state_28742;
(statearr_28746[(9)] = inst_28733);

return statearr_28746;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28742__$1,(9),results,inst_28728);
} else {
if((state_val_28743 === (7))){
var inst_28738 = (state_28742[(2)]);
var state_28742__$1 = state_28742;
var statearr_28747_28859 = state_28742__$1;
(statearr_28747_28859[(2)] = inst_28738);

(statearr_28747_28859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (6))){
var inst_28723 = (state_28742[(10)]);
var inst_28728 = (state_28742[(8)]);
var inst_28728__$1 = cljs.core.async.chan.call(null,(1));
var inst_28729 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28730 = [inst_28723,inst_28728__$1];
var inst_28731 = (new cljs.core.PersistentVector(null,2,(5),inst_28729,inst_28730,null));
var state_28742__$1 = (function (){var statearr_28748 = state_28742;
(statearr_28748[(8)] = inst_28728__$1);

return statearr_28748;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28742__$1,(8),jobs,inst_28731);
} else {
if((state_val_28743 === (5))){
var inst_28726 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28742__$1 = state_28742;
var statearr_28749_28860 = state_28742__$1;
(statearr_28749_28860[(2)] = inst_28726);

(statearr_28749_28860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (4))){
var inst_28723 = (state_28742[(10)]);
var inst_28723__$1 = (state_28742[(2)]);
var inst_28724 = (inst_28723__$1 == null);
var state_28742__$1 = (function (){var statearr_28750 = state_28742;
(statearr_28750[(10)] = inst_28723__$1);

return statearr_28750;
})();
if(cljs.core.truth_(inst_28724)){
var statearr_28751_28861 = state_28742__$1;
(statearr_28751_28861[(1)] = (5));

} else {
var statearr_28752_28862 = state_28742__$1;
(statearr_28752_28862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (3))){
var inst_28740 = (state_28742[(2)]);
var state_28742__$1 = state_28742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28742__$1,inst_28740);
} else {
if((state_val_28743 === (2))){
var state_28742__$1 = state_28742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28742__$1,(4),from);
} else {
if((state_val_28743 === (1))){
var state_28742__$1 = state_28742;
var statearr_28753_28863 = state_28742__$1;
(statearr_28753_28863[(2)] = null);

(statearr_28753_28863[(1)] = (2));


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
});})(c__7303__auto___28857,jobs,results,process,async))
;
return ((function (switch__7288__auto__,c__7303__auto___28857,jobs,results,process,async){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_28757 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28757[(0)] = state_machine__7289__auto__);

(statearr_28757[(1)] = (1));

return statearr_28757;
});
var state_machine__7289__auto____1 = (function (state_28742){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_28742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e28758){if((e28758 instanceof Object)){
var ex__7292__auto__ = e28758;
var statearr_28759_28864 = state_28742;
(statearr_28759_28864[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28865 = state_28742;
state_28742 = G__28865;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_28742){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_28742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___28857,jobs,results,process,async))
})();
var state__7305__auto__ = (function (){var statearr_28760 = f__7304__auto__.call(null);
(statearr_28760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___28857);

return statearr_28760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___28857,jobs,results,process,async))
);


var c__7303__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto__,jobs,results,process,async){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto__,jobs,results,process,async){
return (function (state_28798){
var state_val_28799 = (state_28798[(1)]);
if((state_val_28799 === (7))){
var inst_28794 = (state_28798[(2)]);
var state_28798__$1 = state_28798;
var statearr_28800_28866 = state_28798__$1;
(statearr_28800_28866[(2)] = inst_28794);

(statearr_28800_28866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28799 === (20))){
var state_28798__$1 = state_28798;
var statearr_28801_28867 = state_28798__$1;
(statearr_28801_28867[(2)] = null);

(statearr_28801_28867[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28799 === (1))){
var state_28798__$1 = state_28798;
var statearr_28802_28868 = state_28798__$1;
(statearr_28802_28868[(2)] = null);

(statearr_28802_28868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28799 === (4))){
var inst_28763 = (state_28798[(7)]);
var inst_28763__$1 = (state_28798[(2)]);
var inst_28764 = (inst_28763__$1 == null);
var state_28798__$1 = (function (){var statearr_28803 = state_28798;
(statearr_28803[(7)] = inst_28763__$1);

return statearr_28803;
})();
if(cljs.core.truth_(inst_28764)){
var statearr_28804_28869 = state_28798__$1;
(statearr_28804_28869[(1)] = (5));

} else {
var statearr_28805_28870 = state_28798__$1;
(statearr_28805_28870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28799 === (15))){
var inst_28776 = (state_28798[(8)]);
var state_28798__$1 = state_28798;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28798__$1,(18),to,inst_28776);
} else {
if((state_val_28799 === (21))){
var inst_28789 = (state_28798[(2)]);
var state_28798__$1 = state_28798;
var statearr_28806_28871 = state_28798__$1;
(statearr_28806_28871[(2)] = inst_28789);

(statearr_28806_28871[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28799 === (13))){
var inst_28791 = (state_28798[(2)]);
var state_28798__$1 = (function (){var statearr_28807 = state_28798;
(statearr_28807[(9)] = inst_28791);

return statearr_28807;
})();
var statearr_28808_28872 = state_28798__$1;
(statearr_28808_28872[(2)] = null);

(statearr_28808_28872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28799 === (6))){
var inst_28763 = (state_28798[(7)]);
var state_28798__$1 = state_28798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28798__$1,(11),inst_28763);
} else {
if((state_val_28799 === (17))){
var inst_28784 = (state_28798[(2)]);
var state_28798__$1 = state_28798;
if(cljs.core.truth_(inst_28784)){
var statearr_28809_28873 = state_28798__$1;
(statearr_28809_28873[(1)] = (19));

} else {
var statearr_28810_28874 = state_28798__$1;
(statearr_28810_28874[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28799 === (3))){
var inst_28796 = (state_28798[(2)]);
var state_28798__$1 = state_28798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28798__$1,inst_28796);
} else {
if((state_val_28799 === (12))){
var inst_28773 = (state_28798[(10)]);
var state_28798__$1 = state_28798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28798__$1,(14),inst_28773);
} else {
if((state_val_28799 === (2))){
var state_28798__$1 = state_28798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28798__$1,(4),results);
} else {
if((state_val_28799 === (19))){
var state_28798__$1 = state_28798;
var statearr_28811_28875 = state_28798__$1;
(statearr_28811_28875[(2)] = null);

(statearr_28811_28875[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28799 === (11))){
var inst_28773 = (state_28798[(2)]);
var state_28798__$1 = (function (){var statearr_28812 = state_28798;
(statearr_28812[(10)] = inst_28773);

return statearr_28812;
})();
var statearr_28813_28876 = state_28798__$1;
(statearr_28813_28876[(2)] = null);

(statearr_28813_28876[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28799 === (9))){
var state_28798__$1 = state_28798;
var statearr_28814_28877 = state_28798__$1;
(statearr_28814_28877[(2)] = null);

(statearr_28814_28877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28799 === (5))){
var state_28798__$1 = state_28798;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28815_28878 = state_28798__$1;
(statearr_28815_28878[(1)] = (8));

} else {
var statearr_28816_28879 = state_28798__$1;
(statearr_28816_28879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28799 === (14))){
var inst_28776 = (state_28798[(8)]);
var inst_28778 = (state_28798[(11)]);
var inst_28776__$1 = (state_28798[(2)]);
var inst_28777 = (inst_28776__$1 == null);
var inst_28778__$1 = cljs.core.not.call(null,inst_28777);
var state_28798__$1 = (function (){var statearr_28817 = state_28798;
(statearr_28817[(8)] = inst_28776__$1);

(statearr_28817[(11)] = inst_28778__$1);

return statearr_28817;
})();
if(inst_28778__$1){
var statearr_28818_28880 = state_28798__$1;
(statearr_28818_28880[(1)] = (15));

} else {
var statearr_28819_28881 = state_28798__$1;
(statearr_28819_28881[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28799 === (16))){
var inst_28778 = (state_28798[(11)]);
var state_28798__$1 = state_28798;
var statearr_28820_28882 = state_28798__$1;
(statearr_28820_28882[(2)] = inst_28778);

(statearr_28820_28882[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28799 === (10))){
var inst_28770 = (state_28798[(2)]);
var state_28798__$1 = state_28798;
var statearr_28821_28883 = state_28798__$1;
(statearr_28821_28883[(2)] = inst_28770);

(statearr_28821_28883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28799 === (18))){
var inst_28781 = (state_28798[(2)]);
var state_28798__$1 = state_28798;
var statearr_28822_28884 = state_28798__$1;
(statearr_28822_28884[(2)] = inst_28781);

(statearr_28822_28884[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28799 === (8))){
var inst_28767 = cljs.core.async.close_BANG_.call(null,to);
var state_28798__$1 = state_28798;
var statearr_28823_28885 = state_28798__$1;
(statearr_28823_28885[(2)] = inst_28767);

(statearr_28823_28885[(1)] = (10));


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
var statearr_28827 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28827[(0)] = state_machine__7289__auto__);

(statearr_28827[(1)] = (1));

return statearr_28827;
});
var state_machine__7289__auto____1 = (function (state_28798){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_28798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e28828){if((e28828 instanceof Object)){
var ex__7292__auto__ = e28828;
var statearr_28829_28886 = state_28798;
(statearr_28829_28886[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28887 = state_28798;
state_28798 = G__28887;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_28798){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_28798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto__,jobs,results,process,async))
})();
var state__7305__auto__ = (function (){var statearr_28830 = f__7304__auto__.call(null);
(statearr_28830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto__);

return statearr_28830;
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
var c__7303__auto___28988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___28988,tc,fc){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___28988,tc,fc){
return (function (state_28963){
var state_val_28964 = (state_28963[(1)]);
if((state_val_28964 === (7))){
var inst_28959 = (state_28963[(2)]);
var state_28963__$1 = state_28963;
var statearr_28965_28989 = state_28963__$1;
(statearr_28965_28989[(2)] = inst_28959);

(statearr_28965_28989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (1))){
var state_28963__$1 = state_28963;
var statearr_28966_28990 = state_28963__$1;
(statearr_28966_28990[(2)] = null);

(statearr_28966_28990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (4))){
var inst_28940 = (state_28963[(7)]);
var inst_28940__$1 = (state_28963[(2)]);
var inst_28941 = (inst_28940__$1 == null);
var state_28963__$1 = (function (){var statearr_28967 = state_28963;
(statearr_28967[(7)] = inst_28940__$1);

return statearr_28967;
})();
if(cljs.core.truth_(inst_28941)){
var statearr_28968_28991 = state_28963__$1;
(statearr_28968_28991[(1)] = (5));

} else {
var statearr_28969_28992 = state_28963__$1;
(statearr_28969_28992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (13))){
var state_28963__$1 = state_28963;
var statearr_28970_28993 = state_28963__$1;
(statearr_28970_28993[(2)] = null);

(statearr_28970_28993[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (6))){
var inst_28940 = (state_28963[(7)]);
var inst_28946 = p.call(null,inst_28940);
var state_28963__$1 = state_28963;
if(cljs.core.truth_(inst_28946)){
var statearr_28971_28994 = state_28963__$1;
(statearr_28971_28994[(1)] = (9));

} else {
var statearr_28972_28995 = state_28963__$1;
(statearr_28972_28995[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (3))){
var inst_28961 = (state_28963[(2)]);
var state_28963__$1 = state_28963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28963__$1,inst_28961);
} else {
if((state_val_28964 === (12))){
var state_28963__$1 = state_28963;
var statearr_28973_28996 = state_28963__$1;
(statearr_28973_28996[(2)] = null);

(statearr_28973_28996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (2))){
var state_28963__$1 = state_28963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28963__$1,(4),ch);
} else {
if((state_val_28964 === (11))){
var inst_28940 = (state_28963[(7)]);
var inst_28950 = (state_28963[(2)]);
var state_28963__$1 = state_28963;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28963__$1,(8),inst_28950,inst_28940);
} else {
if((state_val_28964 === (9))){
var state_28963__$1 = state_28963;
var statearr_28974_28997 = state_28963__$1;
(statearr_28974_28997[(2)] = tc);

(statearr_28974_28997[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (5))){
var inst_28943 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28944 = cljs.core.async.close_BANG_.call(null,fc);
var state_28963__$1 = (function (){var statearr_28975 = state_28963;
(statearr_28975[(8)] = inst_28943);

return statearr_28975;
})();
var statearr_28976_28998 = state_28963__$1;
(statearr_28976_28998[(2)] = inst_28944);

(statearr_28976_28998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (14))){
var inst_28957 = (state_28963[(2)]);
var state_28963__$1 = state_28963;
var statearr_28977_28999 = state_28963__$1;
(statearr_28977_28999[(2)] = inst_28957);

(statearr_28977_28999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (10))){
var state_28963__$1 = state_28963;
var statearr_28978_29000 = state_28963__$1;
(statearr_28978_29000[(2)] = fc);

(statearr_28978_29000[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (8))){
var inst_28952 = (state_28963[(2)]);
var state_28963__$1 = state_28963;
if(cljs.core.truth_(inst_28952)){
var statearr_28979_29001 = state_28963__$1;
(statearr_28979_29001[(1)] = (12));

} else {
var statearr_28980_29002 = state_28963__$1;
(statearr_28980_29002[(1)] = (13));

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
});})(c__7303__auto___28988,tc,fc))
;
return ((function (switch__7288__auto__,c__7303__auto___28988,tc,fc){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_28984 = [null,null,null,null,null,null,null,null,null];
(statearr_28984[(0)] = state_machine__7289__auto__);

(statearr_28984[(1)] = (1));

return statearr_28984;
});
var state_machine__7289__auto____1 = (function (state_28963){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_28963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e28985){if((e28985 instanceof Object)){
var ex__7292__auto__ = e28985;
var statearr_28986_29003 = state_28963;
(statearr_28986_29003[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29004 = state_28963;
state_28963 = G__29004;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_28963){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_28963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___28988,tc,fc))
})();
var state__7305__auto__ = (function (){var statearr_28987 = f__7304__auto__.call(null);
(statearr_28987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___28988);

return statearr_28987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___28988,tc,fc))
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
return (function (state_29051){
var state_val_29052 = (state_29051[(1)]);
if((state_val_29052 === (7))){
var inst_29047 = (state_29051[(2)]);
var state_29051__$1 = state_29051;
var statearr_29053_29069 = state_29051__$1;
(statearr_29053_29069[(2)] = inst_29047);

(statearr_29053_29069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29052 === (6))){
var inst_29037 = (state_29051[(7)]);
var inst_29040 = (state_29051[(8)]);
var inst_29044 = f.call(null,inst_29037,inst_29040);
var inst_29037__$1 = inst_29044;
var state_29051__$1 = (function (){var statearr_29054 = state_29051;
(statearr_29054[(7)] = inst_29037__$1);

return statearr_29054;
})();
var statearr_29055_29070 = state_29051__$1;
(statearr_29055_29070[(2)] = null);

(statearr_29055_29070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29052 === (5))){
var inst_29037 = (state_29051[(7)]);
var state_29051__$1 = state_29051;
var statearr_29056_29071 = state_29051__$1;
(statearr_29056_29071[(2)] = inst_29037);

(statearr_29056_29071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29052 === (4))){
var inst_29040 = (state_29051[(8)]);
var inst_29040__$1 = (state_29051[(2)]);
var inst_29041 = (inst_29040__$1 == null);
var state_29051__$1 = (function (){var statearr_29057 = state_29051;
(statearr_29057[(8)] = inst_29040__$1);

return statearr_29057;
})();
if(cljs.core.truth_(inst_29041)){
var statearr_29058_29072 = state_29051__$1;
(statearr_29058_29072[(1)] = (5));

} else {
var statearr_29059_29073 = state_29051__$1;
(statearr_29059_29073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29052 === (3))){
var inst_29049 = (state_29051[(2)]);
var state_29051__$1 = state_29051;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29051__$1,inst_29049);
} else {
if((state_val_29052 === (2))){
var state_29051__$1 = state_29051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29051__$1,(4),ch);
} else {
if((state_val_29052 === (1))){
var inst_29037 = init;
var state_29051__$1 = (function (){var statearr_29060 = state_29051;
(statearr_29060[(7)] = inst_29037);

return statearr_29060;
})();
var statearr_29061_29074 = state_29051__$1;
(statearr_29061_29074[(2)] = null);

(statearr_29061_29074[(1)] = (2));


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
var statearr_29065 = [null,null,null,null,null,null,null,null,null];
(statearr_29065[(0)] = state_machine__7289__auto__);

(statearr_29065[(1)] = (1));

return statearr_29065;
});
var state_machine__7289__auto____1 = (function (state_29051){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_29051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e29066){if((e29066 instanceof Object)){
var ex__7292__auto__ = e29066;
var statearr_29067_29075 = state_29051;
(statearr_29067_29075[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29076 = state_29051;
state_29051 = G__29076;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_29051){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_29051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto__))
})();
var state__7305__auto__ = (function (){var statearr_29068 = f__7304__auto__.call(null);
(statearr_29068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto__);

return statearr_29068;
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
return (function (state_29150){
var state_val_29151 = (state_29150[(1)]);
if((state_val_29151 === (7))){
var inst_29132 = (state_29150[(2)]);
var state_29150__$1 = state_29150;
var statearr_29152_29175 = state_29150__$1;
(statearr_29152_29175[(2)] = inst_29132);

(statearr_29152_29175[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (1))){
var inst_29126 = cljs.core.seq.call(null,coll);
var inst_29127 = inst_29126;
var state_29150__$1 = (function (){var statearr_29153 = state_29150;
(statearr_29153[(7)] = inst_29127);

return statearr_29153;
})();
var statearr_29154_29176 = state_29150__$1;
(statearr_29154_29176[(2)] = null);

(statearr_29154_29176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (4))){
var inst_29127 = (state_29150[(7)]);
var inst_29130 = cljs.core.first.call(null,inst_29127);
var state_29150__$1 = state_29150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29150__$1,(7),ch,inst_29130);
} else {
if((state_val_29151 === (13))){
var inst_29144 = (state_29150[(2)]);
var state_29150__$1 = state_29150;
var statearr_29155_29177 = state_29150__$1;
(statearr_29155_29177[(2)] = inst_29144);

(statearr_29155_29177[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (6))){
var inst_29135 = (state_29150[(2)]);
var state_29150__$1 = state_29150;
if(cljs.core.truth_(inst_29135)){
var statearr_29156_29178 = state_29150__$1;
(statearr_29156_29178[(1)] = (8));

} else {
var statearr_29157_29179 = state_29150__$1;
(statearr_29157_29179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (3))){
var inst_29148 = (state_29150[(2)]);
var state_29150__$1 = state_29150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29150__$1,inst_29148);
} else {
if((state_val_29151 === (12))){
var state_29150__$1 = state_29150;
var statearr_29158_29180 = state_29150__$1;
(statearr_29158_29180[(2)] = null);

(statearr_29158_29180[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (2))){
var inst_29127 = (state_29150[(7)]);
var state_29150__$1 = state_29150;
if(cljs.core.truth_(inst_29127)){
var statearr_29159_29181 = state_29150__$1;
(statearr_29159_29181[(1)] = (4));

} else {
var statearr_29160_29182 = state_29150__$1;
(statearr_29160_29182[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (11))){
var inst_29141 = cljs.core.async.close_BANG_.call(null,ch);
var state_29150__$1 = state_29150;
var statearr_29161_29183 = state_29150__$1;
(statearr_29161_29183[(2)] = inst_29141);

(statearr_29161_29183[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (9))){
var state_29150__$1 = state_29150;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29162_29184 = state_29150__$1;
(statearr_29162_29184[(1)] = (11));

} else {
var statearr_29163_29185 = state_29150__$1;
(statearr_29163_29185[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (5))){
var inst_29127 = (state_29150[(7)]);
var state_29150__$1 = state_29150;
var statearr_29164_29186 = state_29150__$1;
(statearr_29164_29186[(2)] = inst_29127);

(statearr_29164_29186[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (10))){
var inst_29146 = (state_29150[(2)]);
var state_29150__$1 = state_29150;
var statearr_29165_29187 = state_29150__$1;
(statearr_29165_29187[(2)] = inst_29146);

(statearr_29165_29187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (8))){
var inst_29127 = (state_29150[(7)]);
var inst_29137 = cljs.core.next.call(null,inst_29127);
var inst_29127__$1 = inst_29137;
var state_29150__$1 = (function (){var statearr_29166 = state_29150;
(statearr_29166[(7)] = inst_29127__$1);

return statearr_29166;
})();
var statearr_29167_29188 = state_29150__$1;
(statearr_29167_29188[(2)] = null);

(statearr_29167_29188[(1)] = (2));


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
var statearr_29171 = [null,null,null,null,null,null,null,null];
(statearr_29171[(0)] = state_machine__7289__auto__);

(statearr_29171[(1)] = (1));

return statearr_29171;
});
var state_machine__7289__auto____1 = (function (state_29150){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_29150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e29172){if((e29172 instanceof Object)){
var ex__7292__auto__ = e29172;
var statearr_29173_29189 = state_29150;
(statearr_29173_29189[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29190 = state_29150;
state_29150 = G__29190;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_29150){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_29150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto__))
})();
var state__7305__auto__ = (function (){var statearr_29174 = f__7304__auto__.call(null);
(statearr_29174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto__);

return statearr_29174;
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

cljs.core.async.Mux = (function (){var obj29192 = {};
return obj29192;
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


cljs.core.async.Mult = (function (){var obj29194 = {};
return obj29194;
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
if(typeof cljs.core.async.t29416 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29416 = (function (cs,ch,mult,meta29417){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta29417 = meta29417;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29416.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t29416.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t29416.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t29416.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t29416.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29416.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t29416.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29418){
var self__ = this;
var _29418__$1 = this;
return self__.meta29417;
});})(cs))
;

cljs.core.async.t29416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29418,meta29417__$1){
var self__ = this;
var _29418__$1 = this;
return (new cljs.core.async.t29416(self__.cs,self__.ch,self__.mult,meta29417__$1));
});})(cs))
;

cljs.core.async.t29416.cljs$lang$type = true;

cljs.core.async.t29416.cljs$lang$ctorStr = "cljs.core.async/t29416";

cljs.core.async.t29416.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t29416");
});})(cs))
;

cljs.core.async.__GT_t29416 = ((function (cs){
return (function __GT_t29416(cs__$1,ch__$1,mult__$1,meta29417){
return (new cljs.core.async.t29416(cs__$1,ch__$1,mult__$1,meta29417));
});})(cs))
;

}

return (new cljs.core.async.t29416(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/dev/cljs/core/async.cljs"], null)));
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
var c__7303__auto___29637 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___29637,cs,m,dchan,dctr,done){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___29637,cs,m,dchan,dctr,done){
return (function (state_29549){
var state_val_29550 = (state_29549[(1)]);
if((state_val_29550 === (7))){
var inst_29545 = (state_29549[(2)]);
var state_29549__$1 = state_29549;
var statearr_29551_29638 = state_29549__$1;
(statearr_29551_29638[(2)] = inst_29545);

(statearr_29551_29638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (20))){
var inst_29450 = (state_29549[(7)]);
var inst_29460 = cljs.core.first.call(null,inst_29450);
var inst_29461 = cljs.core.nth.call(null,inst_29460,(0),null);
var inst_29462 = cljs.core.nth.call(null,inst_29460,(1),null);
var state_29549__$1 = (function (){var statearr_29552 = state_29549;
(statearr_29552[(8)] = inst_29461);

return statearr_29552;
})();
if(cljs.core.truth_(inst_29462)){
var statearr_29553_29639 = state_29549__$1;
(statearr_29553_29639[(1)] = (22));

} else {
var statearr_29554_29640 = state_29549__$1;
(statearr_29554_29640[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (27))){
var inst_29497 = (state_29549[(9)]);
var inst_29490 = (state_29549[(10)]);
var inst_29421 = (state_29549[(11)]);
var inst_29492 = (state_29549[(12)]);
var inst_29497__$1 = cljs.core._nth.call(null,inst_29490,inst_29492);
var inst_29498 = cljs.core.async.put_BANG_.call(null,inst_29497__$1,inst_29421,done);
var state_29549__$1 = (function (){var statearr_29555 = state_29549;
(statearr_29555[(9)] = inst_29497__$1);

return statearr_29555;
})();
if(cljs.core.truth_(inst_29498)){
var statearr_29556_29641 = state_29549__$1;
(statearr_29556_29641[(1)] = (30));

} else {
var statearr_29557_29642 = state_29549__$1;
(statearr_29557_29642[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (1))){
var state_29549__$1 = state_29549;
var statearr_29558_29643 = state_29549__$1;
(statearr_29558_29643[(2)] = null);

(statearr_29558_29643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (24))){
var inst_29450 = (state_29549[(7)]);
var inst_29467 = (state_29549[(2)]);
var inst_29468 = cljs.core.next.call(null,inst_29450);
var inst_29430 = inst_29468;
var inst_29431 = null;
var inst_29432 = (0);
var inst_29433 = (0);
var state_29549__$1 = (function (){var statearr_29559 = state_29549;
(statearr_29559[(13)] = inst_29467);

(statearr_29559[(14)] = inst_29431);

(statearr_29559[(15)] = inst_29430);

(statearr_29559[(16)] = inst_29433);

(statearr_29559[(17)] = inst_29432);

return statearr_29559;
})();
var statearr_29560_29644 = state_29549__$1;
(statearr_29560_29644[(2)] = null);

(statearr_29560_29644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (39))){
var state_29549__$1 = state_29549;
var statearr_29564_29645 = state_29549__$1;
(statearr_29564_29645[(2)] = null);

(statearr_29564_29645[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (4))){
var inst_29421 = (state_29549[(11)]);
var inst_29421__$1 = (state_29549[(2)]);
var inst_29422 = (inst_29421__$1 == null);
var state_29549__$1 = (function (){var statearr_29565 = state_29549;
(statearr_29565[(11)] = inst_29421__$1);

return statearr_29565;
})();
if(cljs.core.truth_(inst_29422)){
var statearr_29566_29646 = state_29549__$1;
(statearr_29566_29646[(1)] = (5));

} else {
var statearr_29567_29647 = state_29549__$1;
(statearr_29567_29647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (15))){
var inst_29431 = (state_29549[(14)]);
var inst_29430 = (state_29549[(15)]);
var inst_29433 = (state_29549[(16)]);
var inst_29432 = (state_29549[(17)]);
var inst_29446 = (state_29549[(2)]);
var inst_29447 = (inst_29433 + (1));
var tmp29561 = inst_29431;
var tmp29562 = inst_29430;
var tmp29563 = inst_29432;
var inst_29430__$1 = tmp29562;
var inst_29431__$1 = tmp29561;
var inst_29432__$1 = tmp29563;
var inst_29433__$1 = inst_29447;
var state_29549__$1 = (function (){var statearr_29568 = state_29549;
(statearr_29568[(18)] = inst_29446);

(statearr_29568[(14)] = inst_29431__$1);

(statearr_29568[(15)] = inst_29430__$1);

(statearr_29568[(16)] = inst_29433__$1);

(statearr_29568[(17)] = inst_29432__$1);

return statearr_29568;
})();
var statearr_29569_29648 = state_29549__$1;
(statearr_29569_29648[(2)] = null);

(statearr_29569_29648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (21))){
var inst_29471 = (state_29549[(2)]);
var state_29549__$1 = state_29549;
var statearr_29573_29649 = state_29549__$1;
(statearr_29573_29649[(2)] = inst_29471);

(statearr_29573_29649[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (31))){
var inst_29497 = (state_29549[(9)]);
var inst_29501 = done.call(null,null);
var inst_29502 = cljs.core.async.untap_STAR_.call(null,m,inst_29497);
var state_29549__$1 = (function (){var statearr_29574 = state_29549;
(statearr_29574[(19)] = inst_29501);

return statearr_29574;
})();
var statearr_29575_29650 = state_29549__$1;
(statearr_29575_29650[(2)] = inst_29502);

(statearr_29575_29650[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (32))){
var inst_29491 = (state_29549[(20)]);
var inst_29489 = (state_29549[(21)]);
var inst_29490 = (state_29549[(10)]);
var inst_29492 = (state_29549[(12)]);
var inst_29504 = (state_29549[(2)]);
var inst_29505 = (inst_29492 + (1));
var tmp29570 = inst_29491;
var tmp29571 = inst_29489;
var tmp29572 = inst_29490;
var inst_29489__$1 = tmp29571;
var inst_29490__$1 = tmp29572;
var inst_29491__$1 = tmp29570;
var inst_29492__$1 = inst_29505;
var state_29549__$1 = (function (){var statearr_29576 = state_29549;
(statearr_29576[(20)] = inst_29491__$1);

(statearr_29576[(22)] = inst_29504);

(statearr_29576[(21)] = inst_29489__$1);

(statearr_29576[(10)] = inst_29490__$1);

(statearr_29576[(12)] = inst_29492__$1);

return statearr_29576;
})();
var statearr_29577_29651 = state_29549__$1;
(statearr_29577_29651[(2)] = null);

(statearr_29577_29651[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (40))){
var inst_29517 = (state_29549[(23)]);
var inst_29521 = done.call(null,null);
var inst_29522 = cljs.core.async.untap_STAR_.call(null,m,inst_29517);
var state_29549__$1 = (function (){var statearr_29578 = state_29549;
(statearr_29578[(24)] = inst_29521);

return statearr_29578;
})();
var statearr_29579_29652 = state_29549__$1;
(statearr_29579_29652[(2)] = inst_29522);

(statearr_29579_29652[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (33))){
var inst_29508 = (state_29549[(25)]);
var inst_29510 = cljs.core.chunked_seq_QMARK_.call(null,inst_29508);
var state_29549__$1 = state_29549;
if(inst_29510){
var statearr_29580_29653 = state_29549__$1;
(statearr_29580_29653[(1)] = (36));

} else {
var statearr_29581_29654 = state_29549__$1;
(statearr_29581_29654[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (13))){
var inst_29440 = (state_29549[(26)]);
var inst_29443 = cljs.core.async.close_BANG_.call(null,inst_29440);
var state_29549__$1 = state_29549;
var statearr_29582_29655 = state_29549__$1;
(statearr_29582_29655[(2)] = inst_29443);

(statearr_29582_29655[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (22))){
var inst_29461 = (state_29549[(8)]);
var inst_29464 = cljs.core.async.close_BANG_.call(null,inst_29461);
var state_29549__$1 = state_29549;
var statearr_29583_29656 = state_29549__$1;
(statearr_29583_29656[(2)] = inst_29464);

(statearr_29583_29656[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (36))){
var inst_29508 = (state_29549[(25)]);
var inst_29512 = cljs.core.chunk_first.call(null,inst_29508);
var inst_29513 = cljs.core.chunk_rest.call(null,inst_29508);
var inst_29514 = cljs.core.count.call(null,inst_29512);
var inst_29489 = inst_29513;
var inst_29490 = inst_29512;
var inst_29491 = inst_29514;
var inst_29492 = (0);
var state_29549__$1 = (function (){var statearr_29584 = state_29549;
(statearr_29584[(20)] = inst_29491);

(statearr_29584[(21)] = inst_29489);

(statearr_29584[(10)] = inst_29490);

(statearr_29584[(12)] = inst_29492);

return statearr_29584;
})();
var statearr_29585_29657 = state_29549__$1;
(statearr_29585_29657[(2)] = null);

(statearr_29585_29657[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (41))){
var inst_29508 = (state_29549[(25)]);
var inst_29524 = (state_29549[(2)]);
var inst_29525 = cljs.core.next.call(null,inst_29508);
var inst_29489 = inst_29525;
var inst_29490 = null;
var inst_29491 = (0);
var inst_29492 = (0);
var state_29549__$1 = (function (){var statearr_29586 = state_29549;
(statearr_29586[(27)] = inst_29524);

(statearr_29586[(20)] = inst_29491);

(statearr_29586[(21)] = inst_29489);

(statearr_29586[(10)] = inst_29490);

(statearr_29586[(12)] = inst_29492);

return statearr_29586;
})();
var statearr_29587_29658 = state_29549__$1;
(statearr_29587_29658[(2)] = null);

(statearr_29587_29658[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (43))){
var state_29549__$1 = state_29549;
var statearr_29588_29659 = state_29549__$1;
(statearr_29588_29659[(2)] = null);

(statearr_29588_29659[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (29))){
var inst_29533 = (state_29549[(2)]);
var state_29549__$1 = state_29549;
var statearr_29589_29660 = state_29549__$1;
(statearr_29589_29660[(2)] = inst_29533);

(statearr_29589_29660[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (44))){
var inst_29542 = (state_29549[(2)]);
var state_29549__$1 = (function (){var statearr_29590 = state_29549;
(statearr_29590[(28)] = inst_29542);

return statearr_29590;
})();
var statearr_29591_29661 = state_29549__$1;
(statearr_29591_29661[(2)] = null);

(statearr_29591_29661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (6))){
var inst_29481 = (state_29549[(29)]);
var inst_29480 = cljs.core.deref.call(null,cs);
var inst_29481__$1 = cljs.core.keys.call(null,inst_29480);
var inst_29482 = cljs.core.count.call(null,inst_29481__$1);
var inst_29483 = cljs.core.reset_BANG_.call(null,dctr,inst_29482);
var inst_29488 = cljs.core.seq.call(null,inst_29481__$1);
var inst_29489 = inst_29488;
var inst_29490 = null;
var inst_29491 = (0);
var inst_29492 = (0);
var state_29549__$1 = (function (){var statearr_29592 = state_29549;
(statearr_29592[(20)] = inst_29491);

(statearr_29592[(21)] = inst_29489);

(statearr_29592[(10)] = inst_29490);

(statearr_29592[(12)] = inst_29492);

(statearr_29592[(30)] = inst_29483);

(statearr_29592[(29)] = inst_29481__$1);

return statearr_29592;
})();
var statearr_29593_29662 = state_29549__$1;
(statearr_29593_29662[(2)] = null);

(statearr_29593_29662[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (28))){
var inst_29489 = (state_29549[(21)]);
var inst_29508 = (state_29549[(25)]);
var inst_29508__$1 = cljs.core.seq.call(null,inst_29489);
var state_29549__$1 = (function (){var statearr_29594 = state_29549;
(statearr_29594[(25)] = inst_29508__$1);

return statearr_29594;
})();
if(inst_29508__$1){
var statearr_29595_29663 = state_29549__$1;
(statearr_29595_29663[(1)] = (33));

} else {
var statearr_29596_29664 = state_29549__$1;
(statearr_29596_29664[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (25))){
var inst_29491 = (state_29549[(20)]);
var inst_29492 = (state_29549[(12)]);
var inst_29494 = (inst_29492 < inst_29491);
var inst_29495 = inst_29494;
var state_29549__$1 = state_29549;
if(cljs.core.truth_(inst_29495)){
var statearr_29597_29665 = state_29549__$1;
(statearr_29597_29665[(1)] = (27));

} else {
var statearr_29598_29666 = state_29549__$1;
(statearr_29598_29666[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (34))){
var state_29549__$1 = state_29549;
var statearr_29599_29667 = state_29549__$1;
(statearr_29599_29667[(2)] = null);

(statearr_29599_29667[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (17))){
var state_29549__$1 = state_29549;
var statearr_29600_29668 = state_29549__$1;
(statearr_29600_29668[(2)] = null);

(statearr_29600_29668[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (3))){
var inst_29547 = (state_29549[(2)]);
var state_29549__$1 = state_29549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29549__$1,inst_29547);
} else {
if((state_val_29550 === (12))){
var inst_29476 = (state_29549[(2)]);
var state_29549__$1 = state_29549;
var statearr_29601_29669 = state_29549__$1;
(statearr_29601_29669[(2)] = inst_29476);

(statearr_29601_29669[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (2))){
var state_29549__$1 = state_29549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29549__$1,(4),ch);
} else {
if((state_val_29550 === (23))){
var state_29549__$1 = state_29549;
var statearr_29602_29670 = state_29549__$1;
(statearr_29602_29670[(2)] = null);

(statearr_29602_29670[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (35))){
var inst_29531 = (state_29549[(2)]);
var state_29549__$1 = state_29549;
var statearr_29603_29671 = state_29549__$1;
(statearr_29603_29671[(2)] = inst_29531);

(statearr_29603_29671[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (19))){
var inst_29450 = (state_29549[(7)]);
var inst_29454 = cljs.core.chunk_first.call(null,inst_29450);
var inst_29455 = cljs.core.chunk_rest.call(null,inst_29450);
var inst_29456 = cljs.core.count.call(null,inst_29454);
var inst_29430 = inst_29455;
var inst_29431 = inst_29454;
var inst_29432 = inst_29456;
var inst_29433 = (0);
var state_29549__$1 = (function (){var statearr_29604 = state_29549;
(statearr_29604[(14)] = inst_29431);

(statearr_29604[(15)] = inst_29430);

(statearr_29604[(16)] = inst_29433);

(statearr_29604[(17)] = inst_29432);

return statearr_29604;
})();
var statearr_29605_29672 = state_29549__$1;
(statearr_29605_29672[(2)] = null);

(statearr_29605_29672[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (11))){
var inst_29450 = (state_29549[(7)]);
var inst_29430 = (state_29549[(15)]);
var inst_29450__$1 = cljs.core.seq.call(null,inst_29430);
var state_29549__$1 = (function (){var statearr_29606 = state_29549;
(statearr_29606[(7)] = inst_29450__$1);

return statearr_29606;
})();
if(inst_29450__$1){
var statearr_29607_29673 = state_29549__$1;
(statearr_29607_29673[(1)] = (16));

} else {
var statearr_29608_29674 = state_29549__$1;
(statearr_29608_29674[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (9))){
var inst_29478 = (state_29549[(2)]);
var state_29549__$1 = state_29549;
var statearr_29609_29675 = state_29549__$1;
(statearr_29609_29675[(2)] = inst_29478);

(statearr_29609_29675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (5))){
var inst_29428 = cljs.core.deref.call(null,cs);
var inst_29429 = cljs.core.seq.call(null,inst_29428);
var inst_29430 = inst_29429;
var inst_29431 = null;
var inst_29432 = (0);
var inst_29433 = (0);
var state_29549__$1 = (function (){var statearr_29610 = state_29549;
(statearr_29610[(14)] = inst_29431);

(statearr_29610[(15)] = inst_29430);

(statearr_29610[(16)] = inst_29433);

(statearr_29610[(17)] = inst_29432);

return statearr_29610;
})();
var statearr_29611_29676 = state_29549__$1;
(statearr_29611_29676[(2)] = null);

(statearr_29611_29676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (14))){
var state_29549__$1 = state_29549;
var statearr_29612_29677 = state_29549__$1;
(statearr_29612_29677[(2)] = null);

(statearr_29612_29677[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (45))){
var inst_29539 = (state_29549[(2)]);
var state_29549__$1 = state_29549;
var statearr_29613_29678 = state_29549__$1;
(statearr_29613_29678[(2)] = inst_29539);

(statearr_29613_29678[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (26))){
var inst_29481 = (state_29549[(29)]);
var inst_29535 = (state_29549[(2)]);
var inst_29536 = cljs.core.seq.call(null,inst_29481);
var state_29549__$1 = (function (){var statearr_29614 = state_29549;
(statearr_29614[(31)] = inst_29535);

return statearr_29614;
})();
if(inst_29536){
var statearr_29615_29679 = state_29549__$1;
(statearr_29615_29679[(1)] = (42));

} else {
var statearr_29616_29680 = state_29549__$1;
(statearr_29616_29680[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (16))){
var inst_29450 = (state_29549[(7)]);
var inst_29452 = cljs.core.chunked_seq_QMARK_.call(null,inst_29450);
var state_29549__$1 = state_29549;
if(inst_29452){
var statearr_29617_29681 = state_29549__$1;
(statearr_29617_29681[(1)] = (19));

} else {
var statearr_29618_29682 = state_29549__$1;
(statearr_29618_29682[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (38))){
var inst_29528 = (state_29549[(2)]);
var state_29549__$1 = state_29549;
var statearr_29619_29683 = state_29549__$1;
(statearr_29619_29683[(2)] = inst_29528);

(statearr_29619_29683[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (30))){
var state_29549__$1 = state_29549;
var statearr_29620_29684 = state_29549__$1;
(statearr_29620_29684[(2)] = null);

(statearr_29620_29684[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (10))){
var inst_29431 = (state_29549[(14)]);
var inst_29433 = (state_29549[(16)]);
var inst_29439 = cljs.core._nth.call(null,inst_29431,inst_29433);
var inst_29440 = cljs.core.nth.call(null,inst_29439,(0),null);
var inst_29441 = cljs.core.nth.call(null,inst_29439,(1),null);
var state_29549__$1 = (function (){var statearr_29621 = state_29549;
(statearr_29621[(26)] = inst_29440);

return statearr_29621;
})();
if(cljs.core.truth_(inst_29441)){
var statearr_29622_29685 = state_29549__$1;
(statearr_29622_29685[(1)] = (13));

} else {
var statearr_29623_29686 = state_29549__$1;
(statearr_29623_29686[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (18))){
var inst_29474 = (state_29549[(2)]);
var state_29549__$1 = state_29549;
var statearr_29624_29687 = state_29549__$1;
(statearr_29624_29687[(2)] = inst_29474);

(statearr_29624_29687[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (42))){
var state_29549__$1 = state_29549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29549__$1,(45),dchan);
} else {
if((state_val_29550 === (37))){
var inst_29508 = (state_29549[(25)]);
var inst_29517 = (state_29549[(23)]);
var inst_29421 = (state_29549[(11)]);
var inst_29517__$1 = cljs.core.first.call(null,inst_29508);
var inst_29518 = cljs.core.async.put_BANG_.call(null,inst_29517__$1,inst_29421,done);
var state_29549__$1 = (function (){var statearr_29625 = state_29549;
(statearr_29625[(23)] = inst_29517__$1);

return statearr_29625;
})();
if(cljs.core.truth_(inst_29518)){
var statearr_29626_29688 = state_29549__$1;
(statearr_29626_29688[(1)] = (39));

} else {
var statearr_29627_29689 = state_29549__$1;
(statearr_29627_29689[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (8))){
var inst_29433 = (state_29549[(16)]);
var inst_29432 = (state_29549[(17)]);
var inst_29435 = (inst_29433 < inst_29432);
var inst_29436 = inst_29435;
var state_29549__$1 = state_29549;
if(cljs.core.truth_(inst_29436)){
var statearr_29628_29690 = state_29549__$1;
(statearr_29628_29690[(1)] = (10));

} else {
var statearr_29629_29691 = state_29549__$1;
(statearr_29629_29691[(1)] = (11));

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
});})(c__7303__auto___29637,cs,m,dchan,dctr,done))
;
return ((function (switch__7288__auto__,c__7303__auto___29637,cs,m,dchan,dctr,done){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_29633 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29633[(0)] = state_machine__7289__auto__);

(statearr_29633[(1)] = (1));

return statearr_29633;
});
var state_machine__7289__auto____1 = (function (state_29549){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_29549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e29634){if((e29634 instanceof Object)){
var ex__7292__auto__ = e29634;
var statearr_29635_29692 = state_29549;
(statearr_29635_29692[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29693 = state_29549;
state_29549 = G__29693;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_29549){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_29549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___29637,cs,m,dchan,dctr,done))
})();
var state__7305__auto__ = (function (){var statearr_29636 = f__7304__auto__.call(null);
(statearr_29636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___29637);

return statearr_29636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___29637,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj29695 = {};
return obj29695;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__29696){
var map__29701 = p__29696;
var map__29701__$1 = ((cljs.core.seq_QMARK_.call(null,map__29701))?cljs.core.apply.call(null,cljs.core.hash_map,map__29701):map__29701);
var opts = map__29701__$1;
var statearr_29702_29705 = state;
(statearr_29702_29705[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__29701,map__29701__$1,opts){
return (function (val){
var statearr_29703_29706 = state;
(statearr_29703_29706[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29701,map__29701__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_29704_29707 = state;
(statearr_29704_29707[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__29696 = null;
if (arguments.length > 3) {
  p__29696 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__29696);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__29708){
var state = cljs.core.first(arglist__29708);
arglist__29708 = cljs.core.next(arglist__29708);
var cont_block = cljs.core.first(arglist__29708);
arglist__29708 = cljs.core.next(arglist__29708);
var ports = cljs.core.first(arglist__29708);
var p__29696 = cljs.core.rest(arglist__29708);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__29696);
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
if(typeof cljs.core.async.t29828 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29828 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29829){
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
this.meta29829 = meta29829;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29828.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t29828.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29828.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29828.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29828.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29828.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t29828.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29828.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29828.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29830){
var self__ = this;
var _29830__$1 = this;
return self__.meta29829;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29830,meta29829__$1){
var self__ = this;
var _29830__$1 = this;
return (new cljs.core.async.t29828(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29829__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29828.cljs$lang$type = true;

cljs.core.async.t29828.cljs$lang$ctorStr = "cljs.core.async/t29828";

cljs.core.async.t29828.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t29828");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t29828 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t29828(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29829){
return (new cljs.core.async.t29828(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29829));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t29828(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/dev/cljs/core/async.cljs"], null)));
})()
;
var c__7303__auto___29947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___29947,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___29947,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29900){
var state_val_29901 = (state_29900[(1)]);
if((state_val_29901 === (7))){
var inst_29844 = (state_29900[(7)]);
var inst_29849 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29844);
var state_29900__$1 = state_29900;
var statearr_29902_29948 = state_29900__$1;
(statearr_29902_29948[(2)] = inst_29849);

(statearr_29902_29948[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (20))){
var inst_29859 = (state_29900[(8)]);
var state_29900__$1 = state_29900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29900__$1,(23),out,inst_29859);
} else {
if((state_val_29901 === (1))){
var inst_29834 = (state_29900[(9)]);
var inst_29834__$1 = calc_state.call(null);
var inst_29835 = cljs.core.seq_QMARK_.call(null,inst_29834__$1);
var state_29900__$1 = (function (){var statearr_29903 = state_29900;
(statearr_29903[(9)] = inst_29834__$1);

return statearr_29903;
})();
if(inst_29835){
var statearr_29904_29949 = state_29900__$1;
(statearr_29904_29949[(1)] = (2));

} else {
var statearr_29905_29950 = state_29900__$1;
(statearr_29905_29950[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (24))){
var inst_29852 = (state_29900[(10)]);
var inst_29844 = inst_29852;
var state_29900__$1 = (function (){var statearr_29906 = state_29900;
(statearr_29906[(7)] = inst_29844);

return statearr_29906;
})();
var statearr_29907_29951 = state_29900__$1;
(statearr_29907_29951[(2)] = null);

(statearr_29907_29951[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (4))){
var inst_29834 = (state_29900[(9)]);
var inst_29840 = (state_29900[(2)]);
var inst_29841 = cljs.core.get.call(null,inst_29840,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29842 = cljs.core.get.call(null,inst_29840,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29843 = cljs.core.get.call(null,inst_29840,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29844 = inst_29834;
var state_29900__$1 = (function (){var statearr_29908 = state_29900;
(statearr_29908[(11)] = inst_29841);

(statearr_29908[(7)] = inst_29844);

(statearr_29908[(12)] = inst_29843);

(statearr_29908[(13)] = inst_29842);

return statearr_29908;
})();
var statearr_29909_29952 = state_29900__$1;
(statearr_29909_29952[(2)] = null);

(statearr_29909_29952[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (15))){
var state_29900__$1 = state_29900;
var statearr_29910_29953 = state_29900__$1;
(statearr_29910_29953[(2)] = null);

(statearr_29910_29953[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (21))){
var inst_29852 = (state_29900[(10)]);
var inst_29844 = inst_29852;
var state_29900__$1 = (function (){var statearr_29911 = state_29900;
(statearr_29911[(7)] = inst_29844);

return statearr_29911;
})();
var statearr_29912_29954 = state_29900__$1;
(statearr_29912_29954[(2)] = null);

(statearr_29912_29954[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (13))){
var inst_29896 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
var statearr_29913_29955 = state_29900__$1;
(statearr_29913_29955[(2)] = inst_29896);

(statearr_29913_29955[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (22))){
var inst_29894 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
var statearr_29914_29956 = state_29900__$1;
(statearr_29914_29956[(2)] = inst_29894);

(statearr_29914_29956[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (6))){
var inst_29898 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29900__$1,inst_29898);
} else {
if((state_val_29901 === (25))){
var state_29900__$1 = state_29900;
var statearr_29915_29957 = state_29900__$1;
(statearr_29915_29957[(2)] = null);

(statearr_29915_29957[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (17))){
var inst_29874 = (state_29900[(14)]);
var state_29900__$1 = state_29900;
var statearr_29916_29958 = state_29900__$1;
(statearr_29916_29958[(2)] = inst_29874);

(statearr_29916_29958[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (3))){
var inst_29834 = (state_29900[(9)]);
var state_29900__$1 = state_29900;
var statearr_29917_29959 = state_29900__$1;
(statearr_29917_29959[(2)] = inst_29834);

(statearr_29917_29959[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (12))){
var inst_29855 = (state_29900[(15)]);
var inst_29860 = (state_29900[(16)]);
var inst_29874 = (state_29900[(14)]);
var inst_29874__$1 = inst_29855.call(null,inst_29860);
var state_29900__$1 = (function (){var statearr_29918 = state_29900;
(statearr_29918[(14)] = inst_29874__$1);

return statearr_29918;
})();
if(cljs.core.truth_(inst_29874__$1)){
var statearr_29919_29960 = state_29900__$1;
(statearr_29919_29960[(1)] = (17));

} else {
var statearr_29920_29961 = state_29900__$1;
(statearr_29920_29961[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (2))){
var inst_29834 = (state_29900[(9)]);
var inst_29837 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29834);
var state_29900__$1 = state_29900;
var statearr_29921_29962 = state_29900__$1;
(statearr_29921_29962[(2)] = inst_29837);

(statearr_29921_29962[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (23))){
var inst_29885 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
if(cljs.core.truth_(inst_29885)){
var statearr_29922_29963 = state_29900__$1;
(statearr_29922_29963[(1)] = (24));

} else {
var statearr_29923_29964 = state_29900__$1;
(statearr_29923_29964[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (19))){
var inst_29882 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
if(cljs.core.truth_(inst_29882)){
var statearr_29924_29965 = state_29900__$1;
(statearr_29924_29965[(1)] = (20));

} else {
var statearr_29925_29966 = state_29900__$1;
(statearr_29925_29966[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (11))){
var inst_29859 = (state_29900[(8)]);
var inst_29865 = (inst_29859 == null);
var state_29900__$1 = state_29900;
if(cljs.core.truth_(inst_29865)){
var statearr_29926_29967 = state_29900__$1;
(statearr_29926_29967[(1)] = (14));

} else {
var statearr_29927_29968 = state_29900__$1;
(statearr_29927_29968[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (9))){
var inst_29852 = (state_29900[(10)]);
var inst_29852__$1 = (state_29900[(2)]);
var inst_29853 = cljs.core.get.call(null,inst_29852__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29854 = cljs.core.get.call(null,inst_29852__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29855 = cljs.core.get.call(null,inst_29852__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_29900__$1 = (function (){var statearr_29928 = state_29900;
(statearr_29928[(15)] = inst_29855);

(statearr_29928[(17)] = inst_29854);

(statearr_29928[(10)] = inst_29852__$1);

return statearr_29928;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29900__$1,(10),inst_29853);
} else {
if((state_val_29901 === (5))){
var inst_29844 = (state_29900[(7)]);
var inst_29847 = cljs.core.seq_QMARK_.call(null,inst_29844);
var state_29900__$1 = state_29900;
if(inst_29847){
var statearr_29929_29969 = state_29900__$1;
(statearr_29929_29969[(1)] = (7));

} else {
var statearr_29930_29970 = state_29900__$1;
(statearr_29930_29970[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (14))){
var inst_29860 = (state_29900[(16)]);
var inst_29867 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29860);
var state_29900__$1 = state_29900;
var statearr_29931_29971 = state_29900__$1;
(statearr_29931_29971[(2)] = inst_29867);

(statearr_29931_29971[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (26))){
var inst_29890 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
var statearr_29932_29972 = state_29900__$1;
(statearr_29932_29972[(2)] = inst_29890);

(statearr_29932_29972[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (16))){
var inst_29870 = (state_29900[(2)]);
var inst_29871 = calc_state.call(null);
var inst_29844 = inst_29871;
var state_29900__$1 = (function (){var statearr_29933 = state_29900;
(statearr_29933[(18)] = inst_29870);

(statearr_29933[(7)] = inst_29844);

return statearr_29933;
})();
var statearr_29934_29973 = state_29900__$1;
(statearr_29934_29973[(2)] = null);

(statearr_29934_29973[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (10))){
var inst_29859 = (state_29900[(8)]);
var inst_29860 = (state_29900[(16)]);
var inst_29858 = (state_29900[(2)]);
var inst_29859__$1 = cljs.core.nth.call(null,inst_29858,(0),null);
var inst_29860__$1 = cljs.core.nth.call(null,inst_29858,(1),null);
var inst_29861 = (inst_29859__$1 == null);
var inst_29862 = cljs.core._EQ_.call(null,inst_29860__$1,change);
var inst_29863 = (inst_29861) || (inst_29862);
var state_29900__$1 = (function (){var statearr_29935 = state_29900;
(statearr_29935[(8)] = inst_29859__$1);

(statearr_29935[(16)] = inst_29860__$1);

return statearr_29935;
})();
if(cljs.core.truth_(inst_29863)){
var statearr_29936_29974 = state_29900__$1;
(statearr_29936_29974[(1)] = (11));

} else {
var statearr_29937_29975 = state_29900__$1;
(statearr_29937_29975[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (18))){
var inst_29855 = (state_29900[(15)]);
var inst_29860 = (state_29900[(16)]);
var inst_29854 = (state_29900[(17)]);
var inst_29877 = cljs.core.empty_QMARK_.call(null,inst_29855);
var inst_29878 = inst_29854.call(null,inst_29860);
var inst_29879 = cljs.core.not.call(null,inst_29878);
var inst_29880 = (inst_29877) && (inst_29879);
var state_29900__$1 = state_29900;
var statearr_29938_29976 = state_29900__$1;
(statearr_29938_29976[(2)] = inst_29880);

(statearr_29938_29976[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (8))){
var inst_29844 = (state_29900[(7)]);
var state_29900__$1 = state_29900;
var statearr_29939_29977 = state_29900__$1;
(statearr_29939_29977[(2)] = inst_29844);

(statearr_29939_29977[(1)] = (9));


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
});})(c__7303__auto___29947,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7288__auto__,c__7303__auto___29947,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_29943 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29943[(0)] = state_machine__7289__auto__);

(statearr_29943[(1)] = (1));

return statearr_29943;
});
var state_machine__7289__auto____1 = (function (state_29900){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_29900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e29944){if((e29944 instanceof Object)){
var ex__7292__auto__ = e29944;
var statearr_29945_29978 = state_29900;
(statearr_29945_29978[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29979 = state_29900;
state_29900 = G__29979;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_29900){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_29900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___29947,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7305__auto__ = (function (){var statearr_29946 = f__7304__auto__.call(null);
(statearr_29946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___29947);

return statearr_29946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___29947,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj29981 = {};
return obj29981;
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
return (function (p1__29982_SHARP_){
if(cljs.core.truth_(p1__29982_SHARP_.call(null,topic))){
return p1__29982_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29982_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3608__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t30105 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30105 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta30106){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta30106 = meta30106;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30105.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t30105.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t30105.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t30105.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t30105.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t30105.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30105.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t30105.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30107){
var self__ = this;
var _30107__$1 = this;
return self__.meta30106;
});})(mults,ensure_mult))
;

cljs.core.async.t30105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30107,meta30106__$1){
var self__ = this;
var _30107__$1 = this;
return (new cljs.core.async.t30105(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta30106__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t30105.cljs$lang$type = true;

cljs.core.async.t30105.cljs$lang$ctorStr = "cljs.core.async/t30105";

cljs.core.async.t30105.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t30105");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t30105 = ((function (mults,ensure_mult){
return (function __GT_t30105(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta30106){
return (new cljs.core.async.t30105(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta30106));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t30105(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/dev/cljs/core/async.cljs"], null)));
})()
;
var c__7303__auto___30227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___30227,mults,ensure_mult,p){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___30227,mults,ensure_mult,p){
return (function (state_30179){
var state_val_30180 = (state_30179[(1)]);
if((state_val_30180 === (7))){
var inst_30175 = (state_30179[(2)]);
var state_30179__$1 = state_30179;
var statearr_30181_30228 = state_30179__$1;
(statearr_30181_30228[(2)] = inst_30175);

(statearr_30181_30228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (20))){
var state_30179__$1 = state_30179;
var statearr_30182_30229 = state_30179__$1;
(statearr_30182_30229[(2)] = null);

(statearr_30182_30229[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (1))){
var state_30179__$1 = state_30179;
var statearr_30183_30230 = state_30179__$1;
(statearr_30183_30230[(2)] = null);

(statearr_30183_30230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (24))){
var inst_30158 = (state_30179[(7)]);
var inst_30167 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30158);
var state_30179__$1 = state_30179;
var statearr_30184_30231 = state_30179__$1;
(statearr_30184_30231[(2)] = inst_30167);

(statearr_30184_30231[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (4))){
var inst_30110 = (state_30179[(8)]);
var inst_30110__$1 = (state_30179[(2)]);
var inst_30111 = (inst_30110__$1 == null);
var state_30179__$1 = (function (){var statearr_30185 = state_30179;
(statearr_30185[(8)] = inst_30110__$1);

return statearr_30185;
})();
if(cljs.core.truth_(inst_30111)){
var statearr_30186_30232 = state_30179__$1;
(statearr_30186_30232[(1)] = (5));

} else {
var statearr_30187_30233 = state_30179__$1;
(statearr_30187_30233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (15))){
var inst_30152 = (state_30179[(2)]);
var state_30179__$1 = state_30179;
var statearr_30188_30234 = state_30179__$1;
(statearr_30188_30234[(2)] = inst_30152);

(statearr_30188_30234[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (21))){
var inst_30172 = (state_30179[(2)]);
var state_30179__$1 = (function (){var statearr_30189 = state_30179;
(statearr_30189[(9)] = inst_30172);

return statearr_30189;
})();
var statearr_30190_30235 = state_30179__$1;
(statearr_30190_30235[(2)] = null);

(statearr_30190_30235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (13))){
var inst_30134 = (state_30179[(10)]);
var inst_30136 = cljs.core.chunked_seq_QMARK_.call(null,inst_30134);
var state_30179__$1 = state_30179;
if(inst_30136){
var statearr_30191_30236 = state_30179__$1;
(statearr_30191_30236[(1)] = (16));

} else {
var statearr_30192_30237 = state_30179__$1;
(statearr_30192_30237[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (22))){
var inst_30164 = (state_30179[(2)]);
var state_30179__$1 = state_30179;
if(cljs.core.truth_(inst_30164)){
var statearr_30193_30238 = state_30179__$1;
(statearr_30193_30238[(1)] = (23));

} else {
var statearr_30194_30239 = state_30179__$1;
(statearr_30194_30239[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (6))){
var inst_30158 = (state_30179[(7)]);
var inst_30110 = (state_30179[(8)]);
var inst_30160 = (state_30179[(11)]);
var inst_30158__$1 = topic_fn.call(null,inst_30110);
var inst_30159 = cljs.core.deref.call(null,mults);
var inst_30160__$1 = cljs.core.get.call(null,inst_30159,inst_30158__$1);
var state_30179__$1 = (function (){var statearr_30195 = state_30179;
(statearr_30195[(7)] = inst_30158__$1);

(statearr_30195[(11)] = inst_30160__$1);

return statearr_30195;
})();
if(cljs.core.truth_(inst_30160__$1)){
var statearr_30196_30240 = state_30179__$1;
(statearr_30196_30240[(1)] = (19));

} else {
var statearr_30197_30241 = state_30179__$1;
(statearr_30197_30241[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (25))){
var inst_30169 = (state_30179[(2)]);
var state_30179__$1 = state_30179;
var statearr_30198_30242 = state_30179__$1;
(statearr_30198_30242[(2)] = inst_30169);

(statearr_30198_30242[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (17))){
var inst_30134 = (state_30179[(10)]);
var inst_30143 = cljs.core.first.call(null,inst_30134);
var inst_30144 = cljs.core.async.muxch_STAR_.call(null,inst_30143);
var inst_30145 = cljs.core.async.close_BANG_.call(null,inst_30144);
var inst_30146 = cljs.core.next.call(null,inst_30134);
var inst_30120 = inst_30146;
var inst_30121 = null;
var inst_30122 = (0);
var inst_30123 = (0);
var state_30179__$1 = (function (){var statearr_30199 = state_30179;
(statearr_30199[(12)] = inst_30121);

(statearr_30199[(13)] = inst_30122);

(statearr_30199[(14)] = inst_30145);

(statearr_30199[(15)] = inst_30123);

(statearr_30199[(16)] = inst_30120);

return statearr_30199;
})();
var statearr_30200_30243 = state_30179__$1;
(statearr_30200_30243[(2)] = null);

(statearr_30200_30243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (3))){
var inst_30177 = (state_30179[(2)]);
var state_30179__$1 = state_30179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30179__$1,inst_30177);
} else {
if((state_val_30180 === (12))){
var inst_30154 = (state_30179[(2)]);
var state_30179__$1 = state_30179;
var statearr_30201_30244 = state_30179__$1;
(statearr_30201_30244[(2)] = inst_30154);

(statearr_30201_30244[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (2))){
var state_30179__$1 = state_30179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30179__$1,(4),ch);
} else {
if((state_val_30180 === (23))){
var state_30179__$1 = state_30179;
var statearr_30202_30245 = state_30179__$1;
(statearr_30202_30245[(2)] = null);

(statearr_30202_30245[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (19))){
var inst_30110 = (state_30179[(8)]);
var inst_30160 = (state_30179[(11)]);
var inst_30162 = cljs.core.async.muxch_STAR_.call(null,inst_30160);
var state_30179__$1 = state_30179;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30179__$1,(22),inst_30162,inst_30110);
} else {
if((state_val_30180 === (11))){
var inst_30134 = (state_30179[(10)]);
var inst_30120 = (state_30179[(16)]);
var inst_30134__$1 = cljs.core.seq.call(null,inst_30120);
var state_30179__$1 = (function (){var statearr_30203 = state_30179;
(statearr_30203[(10)] = inst_30134__$1);

return statearr_30203;
})();
if(inst_30134__$1){
var statearr_30204_30246 = state_30179__$1;
(statearr_30204_30246[(1)] = (13));

} else {
var statearr_30205_30247 = state_30179__$1;
(statearr_30205_30247[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (9))){
var inst_30156 = (state_30179[(2)]);
var state_30179__$1 = state_30179;
var statearr_30206_30248 = state_30179__$1;
(statearr_30206_30248[(2)] = inst_30156);

(statearr_30206_30248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (5))){
var inst_30117 = cljs.core.deref.call(null,mults);
var inst_30118 = cljs.core.vals.call(null,inst_30117);
var inst_30119 = cljs.core.seq.call(null,inst_30118);
var inst_30120 = inst_30119;
var inst_30121 = null;
var inst_30122 = (0);
var inst_30123 = (0);
var state_30179__$1 = (function (){var statearr_30207 = state_30179;
(statearr_30207[(12)] = inst_30121);

(statearr_30207[(13)] = inst_30122);

(statearr_30207[(15)] = inst_30123);

(statearr_30207[(16)] = inst_30120);

return statearr_30207;
})();
var statearr_30208_30249 = state_30179__$1;
(statearr_30208_30249[(2)] = null);

(statearr_30208_30249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (14))){
var state_30179__$1 = state_30179;
var statearr_30212_30250 = state_30179__$1;
(statearr_30212_30250[(2)] = null);

(statearr_30212_30250[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (16))){
var inst_30134 = (state_30179[(10)]);
var inst_30138 = cljs.core.chunk_first.call(null,inst_30134);
var inst_30139 = cljs.core.chunk_rest.call(null,inst_30134);
var inst_30140 = cljs.core.count.call(null,inst_30138);
var inst_30120 = inst_30139;
var inst_30121 = inst_30138;
var inst_30122 = inst_30140;
var inst_30123 = (0);
var state_30179__$1 = (function (){var statearr_30213 = state_30179;
(statearr_30213[(12)] = inst_30121);

(statearr_30213[(13)] = inst_30122);

(statearr_30213[(15)] = inst_30123);

(statearr_30213[(16)] = inst_30120);

return statearr_30213;
})();
var statearr_30214_30251 = state_30179__$1;
(statearr_30214_30251[(2)] = null);

(statearr_30214_30251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (10))){
var inst_30121 = (state_30179[(12)]);
var inst_30122 = (state_30179[(13)]);
var inst_30123 = (state_30179[(15)]);
var inst_30120 = (state_30179[(16)]);
var inst_30128 = cljs.core._nth.call(null,inst_30121,inst_30123);
var inst_30129 = cljs.core.async.muxch_STAR_.call(null,inst_30128);
var inst_30130 = cljs.core.async.close_BANG_.call(null,inst_30129);
var inst_30131 = (inst_30123 + (1));
var tmp30209 = inst_30121;
var tmp30210 = inst_30122;
var tmp30211 = inst_30120;
var inst_30120__$1 = tmp30211;
var inst_30121__$1 = tmp30209;
var inst_30122__$1 = tmp30210;
var inst_30123__$1 = inst_30131;
var state_30179__$1 = (function (){var statearr_30215 = state_30179;
(statearr_30215[(17)] = inst_30130);

(statearr_30215[(12)] = inst_30121__$1);

(statearr_30215[(13)] = inst_30122__$1);

(statearr_30215[(15)] = inst_30123__$1);

(statearr_30215[(16)] = inst_30120__$1);

return statearr_30215;
})();
var statearr_30216_30252 = state_30179__$1;
(statearr_30216_30252[(2)] = null);

(statearr_30216_30252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (18))){
var inst_30149 = (state_30179[(2)]);
var state_30179__$1 = state_30179;
var statearr_30217_30253 = state_30179__$1;
(statearr_30217_30253[(2)] = inst_30149);

(statearr_30217_30253[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (8))){
var inst_30122 = (state_30179[(13)]);
var inst_30123 = (state_30179[(15)]);
var inst_30125 = (inst_30123 < inst_30122);
var inst_30126 = inst_30125;
var state_30179__$1 = state_30179;
if(cljs.core.truth_(inst_30126)){
var statearr_30218_30254 = state_30179__$1;
(statearr_30218_30254[(1)] = (10));

} else {
var statearr_30219_30255 = state_30179__$1;
(statearr_30219_30255[(1)] = (11));

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
});})(c__7303__auto___30227,mults,ensure_mult,p))
;
return ((function (switch__7288__auto__,c__7303__auto___30227,mults,ensure_mult,p){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_30223 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30223[(0)] = state_machine__7289__auto__);

(statearr_30223[(1)] = (1));

return statearr_30223;
});
var state_machine__7289__auto____1 = (function (state_30179){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_30179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e30224){if((e30224 instanceof Object)){
var ex__7292__auto__ = e30224;
var statearr_30225_30256 = state_30179;
(statearr_30225_30256[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30224;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30257 = state_30179;
state_30179 = G__30257;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_30179){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_30179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___30227,mults,ensure_mult,p))
})();
var state__7305__auto__ = (function (){var statearr_30226 = f__7304__auto__.call(null);
(statearr_30226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___30227);

return statearr_30226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___30227,mults,ensure_mult,p))
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
var c__7303__auto___30394 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___30394,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___30394,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30364){
var state_val_30365 = (state_30364[(1)]);
if((state_val_30365 === (7))){
var state_30364__$1 = state_30364;
var statearr_30366_30395 = state_30364__$1;
(statearr_30366_30395[(2)] = null);

(statearr_30366_30395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (1))){
var state_30364__$1 = state_30364;
var statearr_30367_30396 = state_30364__$1;
(statearr_30367_30396[(2)] = null);

(statearr_30367_30396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (4))){
var inst_30328 = (state_30364[(7)]);
var inst_30330 = (inst_30328 < cnt);
var state_30364__$1 = state_30364;
if(cljs.core.truth_(inst_30330)){
var statearr_30368_30397 = state_30364__$1;
(statearr_30368_30397[(1)] = (6));

} else {
var statearr_30369_30398 = state_30364__$1;
(statearr_30369_30398[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (15))){
var inst_30360 = (state_30364[(2)]);
var state_30364__$1 = state_30364;
var statearr_30370_30399 = state_30364__$1;
(statearr_30370_30399[(2)] = inst_30360);

(statearr_30370_30399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (13))){
var inst_30353 = cljs.core.async.close_BANG_.call(null,out);
var state_30364__$1 = state_30364;
var statearr_30371_30400 = state_30364__$1;
(statearr_30371_30400[(2)] = inst_30353);

(statearr_30371_30400[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (6))){
var state_30364__$1 = state_30364;
var statearr_30372_30401 = state_30364__$1;
(statearr_30372_30401[(2)] = null);

(statearr_30372_30401[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (3))){
var inst_30362 = (state_30364[(2)]);
var state_30364__$1 = state_30364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30364__$1,inst_30362);
} else {
if((state_val_30365 === (12))){
var inst_30350 = (state_30364[(8)]);
var inst_30350__$1 = (state_30364[(2)]);
var inst_30351 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30350__$1);
var state_30364__$1 = (function (){var statearr_30373 = state_30364;
(statearr_30373[(8)] = inst_30350__$1);

return statearr_30373;
})();
if(cljs.core.truth_(inst_30351)){
var statearr_30374_30402 = state_30364__$1;
(statearr_30374_30402[(1)] = (13));

} else {
var statearr_30375_30403 = state_30364__$1;
(statearr_30375_30403[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (2))){
var inst_30327 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30328 = (0);
var state_30364__$1 = (function (){var statearr_30376 = state_30364;
(statearr_30376[(9)] = inst_30327);

(statearr_30376[(7)] = inst_30328);

return statearr_30376;
})();
var statearr_30377_30404 = state_30364__$1;
(statearr_30377_30404[(2)] = null);

(statearr_30377_30404[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (11))){
var inst_30328 = (state_30364[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30364,(10),Object,null,(9));
var inst_30337 = chs__$1.call(null,inst_30328);
var inst_30338 = done.call(null,inst_30328);
var inst_30339 = cljs.core.async.take_BANG_.call(null,inst_30337,inst_30338);
var state_30364__$1 = state_30364;
var statearr_30378_30405 = state_30364__$1;
(statearr_30378_30405[(2)] = inst_30339);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30364__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (9))){
var inst_30328 = (state_30364[(7)]);
var inst_30341 = (state_30364[(2)]);
var inst_30342 = (inst_30328 + (1));
var inst_30328__$1 = inst_30342;
var state_30364__$1 = (function (){var statearr_30379 = state_30364;
(statearr_30379[(7)] = inst_30328__$1);

(statearr_30379[(10)] = inst_30341);

return statearr_30379;
})();
var statearr_30380_30406 = state_30364__$1;
(statearr_30380_30406[(2)] = null);

(statearr_30380_30406[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (5))){
var inst_30348 = (state_30364[(2)]);
var state_30364__$1 = (function (){var statearr_30381 = state_30364;
(statearr_30381[(11)] = inst_30348);

return statearr_30381;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30364__$1,(12),dchan);
} else {
if((state_val_30365 === (14))){
var inst_30350 = (state_30364[(8)]);
var inst_30355 = cljs.core.apply.call(null,f,inst_30350);
var state_30364__$1 = state_30364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30364__$1,(16),out,inst_30355);
} else {
if((state_val_30365 === (16))){
var inst_30357 = (state_30364[(2)]);
var state_30364__$1 = (function (){var statearr_30382 = state_30364;
(statearr_30382[(12)] = inst_30357);

return statearr_30382;
})();
var statearr_30383_30407 = state_30364__$1;
(statearr_30383_30407[(2)] = null);

(statearr_30383_30407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (10))){
var inst_30332 = (state_30364[(2)]);
var inst_30333 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30364__$1 = (function (){var statearr_30384 = state_30364;
(statearr_30384[(13)] = inst_30332);

return statearr_30384;
})();
var statearr_30385_30408 = state_30364__$1;
(statearr_30385_30408[(2)] = inst_30333);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30364__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (8))){
var inst_30346 = (state_30364[(2)]);
var state_30364__$1 = state_30364;
var statearr_30386_30409 = state_30364__$1;
(statearr_30386_30409[(2)] = inst_30346);

(statearr_30386_30409[(1)] = (5));


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
});})(c__7303__auto___30394,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7288__auto__,c__7303__auto___30394,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_30390 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30390[(0)] = state_machine__7289__auto__);

(statearr_30390[(1)] = (1));

return statearr_30390;
});
var state_machine__7289__auto____1 = (function (state_30364){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_30364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e30391){if((e30391 instanceof Object)){
var ex__7292__auto__ = e30391;
var statearr_30392_30410 = state_30364;
(statearr_30392_30410[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30411 = state_30364;
state_30364 = G__30411;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_30364){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_30364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___30394,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7305__auto__ = (function (){var statearr_30393 = f__7304__auto__.call(null);
(statearr_30393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___30394);

return statearr_30393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___30394,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__7303__auto___30519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___30519,out){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___30519,out){
return (function (state_30495){
var state_val_30496 = (state_30495[(1)]);
if((state_val_30496 === (7))){
var inst_30474 = (state_30495[(7)]);
var inst_30475 = (state_30495[(8)]);
var inst_30474__$1 = (state_30495[(2)]);
var inst_30475__$1 = cljs.core.nth.call(null,inst_30474__$1,(0),null);
var inst_30476 = cljs.core.nth.call(null,inst_30474__$1,(1),null);
var inst_30477 = (inst_30475__$1 == null);
var state_30495__$1 = (function (){var statearr_30497 = state_30495;
(statearr_30497[(9)] = inst_30476);

(statearr_30497[(7)] = inst_30474__$1);

(statearr_30497[(8)] = inst_30475__$1);

return statearr_30497;
})();
if(cljs.core.truth_(inst_30477)){
var statearr_30498_30520 = state_30495__$1;
(statearr_30498_30520[(1)] = (8));

} else {
var statearr_30499_30521 = state_30495__$1;
(statearr_30499_30521[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30496 === (1))){
var inst_30466 = cljs.core.vec.call(null,chs);
var inst_30467 = inst_30466;
var state_30495__$1 = (function (){var statearr_30500 = state_30495;
(statearr_30500[(10)] = inst_30467);

return statearr_30500;
})();
var statearr_30501_30522 = state_30495__$1;
(statearr_30501_30522[(2)] = null);

(statearr_30501_30522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30496 === (4))){
var inst_30467 = (state_30495[(10)]);
var state_30495__$1 = state_30495;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30495__$1,(7),inst_30467);
} else {
if((state_val_30496 === (6))){
var inst_30491 = (state_30495[(2)]);
var state_30495__$1 = state_30495;
var statearr_30502_30523 = state_30495__$1;
(statearr_30502_30523[(2)] = inst_30491);

(statearr_30502_30523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30496 === (3))){
var inst_30493 = (state_30495[(2)]);
var state_30495__$1 = state_30495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30495__$1,inst_30493);
} else {
if((state_val_30496 === (2))){
var inst_30467 = (state_30495[(10)]);
var inst_30469 = cljs.core.count.call(null,inst_30467);
var inst_30470 = (inst_30469 > (0));
var state_30495__$1 = state_30495;
if(cljs.core.truth_(inst_30470)){
var statearr_30504_30524 = state_30495__$1;
(statearr_30504_30524[(1)] = (4));

} else {
var statearr_30505_30525 = state_30495__$1;
(statearr_30505_30525[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30496 === (11))){
var inst_30467 = (state_30495[(10)]);
var inst_30484 = (state_30495[(2)]);
var tmp30503 = inst_30467;
var inst_30467__$1 = tmp30503;
var state_30495__$1 = (function (){var statearr_30506 = state_30495;
(statearr_30506[(10)] = inst_30467__$1);

(statearr_30506[(11)] = inst_30484);

return statearr_30506;
})();
var statearr_30507_30526 = state_30495__$1;
(statearr_30507_30526[(2)] = null);

(statearr_30507_30526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30496 === (9))){
var inst_30475 = (state_30495[(8)]);
var state_30495__$1 = state_30495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30495__$1,(11),out,inst_30475);
} else {
if((state_val_30496 === (5))){
var inst_30489 = cljs.core.async.close_BANG_.call(null,out);
var state_30495__$1 = state_30495;
var statearr_30508_30527 = state_30495__$1;
(statearr_30508_30527[(2)] = inst_30489);

(statearr_30508_30527[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30496 === (10))){
var inst_30487 = (state_30495[(2)]);
var state_30495__$1 = state_30495;
var statearr_30509_30528 = state_30495__$1;
(statearr_30509_30528[(2)] = inst_30487);

(statearr_30509_30528[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30496 === (8))){
var inst_30467 = (state_30495[(10)]);
var inst_30476 = (state_30495[(9)]);
var inst_30474 = (state_30495[(7)]);
var inst_30475 = (state_30495[(8)]);
var inst_30479 = (function (){var c = inst_30476;
var v = inst_30475;
var vec__30472 = inst_30474;
var cs = inst_30467;
return ((function (c,v,vec__30472,cs,inst_30467,inst_30476,inst_30474,inst_30475,state_val_30496,c__7303__auto___30519,out){
return (function (p1__30412_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30412_SHARP_);
});
;})(c,v,vec__30472,cs,inst_30467,inst_30476,inst_30474,inst_30475,state_val_30496,c__7303__auto___30519,out))
})();
var inst_30480 = cljs.core.filterv.call(null,inst_30479,inst_30467);
var inst_30467__$1 = inst_30480;
var state_30495__$1 = (function (){var statearr_30510 = state_30495;
(statearr_30510[(10)] = inst_30467__$1);

return statearr_30510;
})();
var statearr_30511_30529 = state_30495__$1;
(statearr_30511_30529[(2)] = null);

(statearr_30511_30529[(1)] = (2));


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
});})(c__7303__auto___30519,out))
;
return ((function (switch__7288__auto__,c__7303__auto___30519,out){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_30515 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30515[(0)] = state_machine__7289__auto__);

(statearr_30515[(1)] = (1));

return statearr_30515;
});
var state_machine__7289__auto____1 = (function (state_30495){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_30495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e30516){if((e30516 instanceof Object)){
var ex__7292__auto__ = e30516;
var statearr_30517_30530 = state_30495;
(statearr_30517_30530[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30531 = state_30495;
state_30495 = G__30531;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_30495){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_30495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___30519,out))
})();
var state__7305__auto__ = (function (){var statearr_30518 = f__7304__auto__.call(null);
(statearr_30518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___30519);

return statearr_30518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___30519,out))
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
var c__7303__auto___30624 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___30624,out){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___30624,out){
return (function (state_30601){
var state_val_30602 = (state_30601[(1)]);
if((state_val_30602 === (7))){
var inst_30583 = (state_30601[(7)]);
var inst_30583__$1 = (state_30601[(2)]);
var inst_30584 = (inst_30583__$1 == null);
var inst_30585 = cljs.core.not.call(null,inst_30584);
var state_30601__$1 = (function (){var statearr_30603 = state_30601;
(statearr_30603[(7)] = inst_30583__$1);

return statearr_30603;
})();
if(inst_30585){
var statearr_30604_30625 = state_30601__$1;
(statearr_30604_30625[(1)] = (8));

} else {
var statearr_30605_30626 = state_30601__$1;
(statearr_30605_30626[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (1))){
var inst_30578 = (0);
var state_30601__$1 = (function (){var statearr_30606 = state_30601;
(statearr_30606[(8)] = inst_30578);

return statearr_30606;
})();
var statearr_30607_30627 = state_30601__$1;
(statearr_30607_30627[(2)] = null);

(statearr_30607_30627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (4))){
var state_30601__$1 = state_30601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30601__$1,(7),ch);
} else {
if((state_val_30602 === (6))){
var inst_30596 = (state_30601[(2)]);
var state_30601__$1 = state_30601;
var statearr_30608_30628 = state_30601__$1;
(statearr_30608_30628[(2)] = inst_30596);

(statearr_30608_30628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (3))){
var inst_30598 = (state_30601[(2)]);
var inst_30599 = cljs.core.async.close_BANG_.call(null,out);
var state_30601__$1 = (function (){var statearr_30609 = state_30601;
(statearr_30609[(9)] = inst_30598);

return statearr_30609;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30601__$1,inst_30599);
} else {
if((state_val_30602 === (2))){
var inst_30578 = (state_30601[(8)]);
var inst_30580 = (inst_30578 < n);
var state_30601__$1 = state_30601;
if(cljs.core.truth_(inst_30580)){
var statearr_30610_30629 = state_30601__$1;
(statearr_30610_30629[(1)] = (4));

} else {
var statearr_30611_30630 = state_30601__$1;
(statearr_30611_30630[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (11))){
var inst_30578 = (state_30601[(8)]);
var inst_30588 = (state_30601[(2)]);
var inst_30589 = (inst_30578 + (1));
var inst_30578__$1 = inst_30589;
var state_30601__$1 = (function (){var statearr_30612 = state_30601;
(statearr_30612[(10)] = inst_30588);

(statearr_30612[(8)] = inst_30578__$1);

return statearr_30612;
})();
var statearr_30613_30631 = state_30601__$1;
(statearr_30613_30631[(2)] = null);

(statearr_30613_30631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (9))){
var state_30601__$1 = state_30601;
var statearr_30614_30632 = state_30601__$1;
(statearr_30614_30632[(2)] = null);

(statearr_30614_30632[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (5))){
var state_30601__$1 = state_30601;
var statearr_30615_30633 = state_30601__$1;
(statearr_30615_30633[(2)] = null);

(statearr_30615_30633[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (10))){
var inst_30593 = (state_30601[(2)]);
var state_30601__$1 = state_30601;
var statearr_30616_30634 = state_30601__$1;
(statearr_30616_30634[(2)] = inst_30593);

(statearr_30616_30634[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30602 === (8))){
var inst_30583 = (state_30601[(7)]);
var state_30601__$1 = state_30601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30601__$1,(11),out,inst_30583);
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
});})(c__7303__auto___30624,out))
;
return ((function (switch__7288__auto__,c__7303__auto___30624,out){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_30620 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30620[(0)] = state_machine__7289__auto__);

(statearr_30620[(1)] = (1));

return statearr_30620;
});
var state_machine__7289__auto____1 = (function (state_30601){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_30601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e30621){if((e30621 instanceof Object)){
var ex__7292__auto__ = e30621;
var statearr_30622_30635 = state_30601;
(statearr_30622_30635[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30636 = state_30601;
state_30601 = G__30636;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_30601){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_30601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___30624,out))
})();
var state__7305__auto__ = (function (){var statearr_30623 = f__7304__auto__.call(null);
(statearr_30623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___30624);

return statearr_30623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___30624,out))
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
if(typeof cljs.core.async.t30644 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30644 = (function (ch,f,map_LT_,meta30645){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta30645 = meta30645;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30644.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30644.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t30644.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30644.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t30647 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30647 = (function (fn1,_,meta30645,map_LT_,f,ch,meta30648){
this.fn1 = fn1;
this._ = _;
this.meta30645 = meta30645;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30648 = meta30648;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30647.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30647.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t30647.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30637_SHARP_){
return f1.call(null,(((p1__30637_SHARP_ == null))?null:self__.f.call(null,p1__30637_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t30647.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30649){
var self__ = this;
var _30649__$1 = this;
return self__.meta30648;
});})(___$1))
;

cljs.core.async.t30647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30649,meta30648__$1){
var self__ = this;
var _30649__$1 = this;
return (new cljs.core.async.t30647(self__.fn1,self__._,self__.meta30645,self__.map_LT_,self__.f,self__.ch,meta30648__$1));
});})(___$1))
;

cljs.core.async.t30647.cljs$lang$type = true;

cljs.core.async.t30647.cljs$lang$ctorStr = "cljs.core.async/t30647";

cljs.core.async.t30647.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t30647");
});})(___$1))
;

cljs.core.async.__GT_t30647 = ((function (___$1){
return (function __GT_t30647(fn1__$1,___$2,meta30645__$1,map_LT___$1,f__$1,ch__$1,meta30648){
return (new cljs.core.async.t30647(fn1__$1,___$2,meta30645__$1,map_LT___$1,f__$1,ch__$1,meta30648));
});})(___$1))
;

}

return (new cljs.core.async.t30647(fn1,___$1,self__.meta30645,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/dev/cljs/core/async.cljs"], null)));
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

cljs.core.async.t30644.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30644.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30644.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30646){
var self__ = this;
var _30646__$1 = this;
return self__.meta30645;
});

cljs.core.async.t30644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30646,meta30645__$1){
var self__ = this;
var _30646__$1 = this;
return (new cljs.core.async.t30644(self__.ch,self__.f,self__.map_LT_,meta30645__$1));
});

cljs.core.async.t30644.cljs$lang$type = true;

cljs.core.async.t30644.cljs$lang$ctorStr = "cljs.core.async/t30644";

cljs.core.async.t30644.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t30644");
});

cljs.core.async.__GT_t30644 = (function __GT_t30644(ch__$1,f__$1,map_LT___$1,meta30645){
return (new cljs.core.async.t30644(ch__$1,f__$1,map_LT___$1,meta30645));
});

}

return (new cljs.core.async.t30644(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/dev/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t30653 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30653 = (function (ch,f,map_GT_,meta30654){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta30654 = meta30654;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30653.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30653.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t30653.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30653.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30653.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30653.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30655){
var self__ = this;
var _30655__$1 = this;
return self__.meta30654;
});

cljs.core.async.t30653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30655,meta30654__$1){
var self__ = this;
var _30655__$1 = this;
return (new cljs.core.async.t30653(self__.ch,self__.f,self__.map_GT_,meta30654__$1));
});

cljs.core.async.t30653.cljs$lang$type = true;

cljs.core.async.t30653.cljs$lang$ctorStr = "cljs.core.async/t30653";

cljs.core.async.t30653.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t30653");
});

cljs.core.async.__GT_t30653 = (function __GT_t30653(ch__$1,f__$1,map_GT___$1,meta30654){
return (new cljs.core.async.t30653(ch__$1,f__$1,map_GT___$1,meta30654));
});

}

return (new cljs.core.async.t30653(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/dev/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t30659 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30659 = (function (ch,p,filter_GT_,meta30660){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta30660 = meta30660;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30659.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30659.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t30659.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30659.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30659.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30659.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30659.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30661){
var self__ = this;
var _30661__$1 = this;
return self__.meta30660;
});

cljs.core.async.t30659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30661,meta30660__$1){
var self__ = this;
var _30661__$1 = this;
return (new cljs.core.async.t30659(self__.ch,self__.p,self__.filter_GT_,meta30660__$1));
});

cljs.core.async.t30659.cljs$lang$type = true;

cljs.core.async.t30659.cljs$lang$ctorStr = "cljs.core.async/t30659";

cljs.core.async.t30659.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t30659");
});

cljs.core.async.__GT_t30659 = (function __GT_t30659(ch__$1,p__$1,filter_GT___$1,meta30660){
return (new cljs.core.async.t30659(ch__$1,p__$1,filter_GT___$1,meta30660));
});

}

return (new cljs.core.async.t30659(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/dev/cljs/core/async.cljs"], null)));
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
var c__7303__auto___30744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___30744,out){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___30744,out){
return (function (state_30723){
var state_val_30724 = (state_30723[(1)]);
if((state_val_30724 === (7))){
var inst_30719 = (state_30723[(2)]);
var state_30723__$1 = state_30723;
var statearr_30725_30745 = state_30723__$1;
(statearr_30725_30745[(2)] = inst_30719);

(statearr_30725_30745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30724 === (1))){
var state_30723__$1 = state_30723;
var statearr_30726_30746 = state_30723__$1;
(statearr_30726_30746[(2)] = null);

(statearr_30726_30746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30724 === (4))){
var inst_30705 = (state_30723[(7)]);
var inst_30705__$1 = (state_30723[(2)]);
var inst_30706 = (inst_30705__$1 == null);
var state_30723__$1 = (function (){var statearr_30727 = state_30723;
(statearr_30727[(7)] = inst_30705__$1);

return statearr_30727;
})();
if(cljs.core.truth_(inst_30706)){
var statearr_30728_30747 = state_30723__$1;
(statearr_30728_30747[(1)] = (5));

} else {
var statearr_30729_30748 = state_30723__$1;
(statearr_30729_30748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30724 === (6))){
var inst_30705 = (state_30723[(7)]);
var inst_30710 = p.call(null,inst_30705);
var state_30723__$1 = state_30723;
if(cljs.core.truth_(inst_30710)){
var statearr_30730_30749 = state_30723__$1;
(statearr_30730_30749[(1)] = (8));

} else {
var statearr_30731_30750 = state_30723__$1;
(statearr_30731_30750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30724 === (3))){
var inst_30721 = (state_30723[(2)]);
var state_30723__$1 = state_30723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30723__$1,inst_30721);
} else {
if((state_val_30724 === (2))){
var state_30723__$1 = state_30723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30723__$1,(4),ch);
} else {
if((state_val_30724 === (11))){
var inst_30713 = (state_30723[(2)]);
var state_30723__$1 = state_30723;
var statearr_30732_30751 = state_30723__$1;
(statearr_30732_30751[(2)] = inst_30713);

(statearr_30732_30751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30724 === (9))){
var state_30723__$1 = state_30723;
var statearr_30733_30752 = state_30723__$1;
(statearr_30733_30752[(2)] = null);

(statearr_30733_30752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30724 === (5))){
var inst_30708 = cljs.core.async.close_BANG_.call(null,out);
var state_30723__$1 = state_30723;
var statearr_30734_30753 = state_30723__$1;
(statearr_30734_30753[(2)] = inst_30708);

(statearr_30734_30753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30724 === (10))){
var inst_30716 = (state_30723[(2)]);
var state_30723__$1 = (function (){var statearr_30735 = state_30723;
(statearr_30735[(8)] = inst_30716);

return statearr_30735;
})();
var statearr_30736_30754 = state_30723__$1;
(statearr_30736_30754[(2)] = null);

(statearr_30736_30754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30724 === (8))){
var inst_30705 = (state_30723[(7)]);
var state_30723__$1 = state_30723;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30723__$1,(11),out,inst_30705);
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
});})(c__7303__auto___30744,out))
;
return ((function (switch__7288__auto__,c__7303__auto___30744,out){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_30740 = [null,null,null,null,null,null,null,null,null];
(statearr_30740[(0)] = state_machine__7289__auto__);

(statearr_30740[(1)] = (1));

return statearr_30740;
});
var state_machine__7289__auto____1 = (function (state_30723){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_30723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e30741){if((e30741 instanceof Object)){
var ex__7292__auto__ = e30741;
var statearr_30742_30755 = state_30723;
(statearr_30742_30755[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30756 = state_30723;
state_30723 = G__30756;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_30723){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_30723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___30744,out))
})();
var state__7305__auto__ = (function (){var statearr_30743 = f__7304__auto__.call(null);
(statearr_30743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___30744);

return statearr_30743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___30744,out))
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
return (function (state_30922){
var state_val_30923 = (state_30922[(1)]);
if((state_val_30923 === (7))){
var inst_30918 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
var statearr_30924_30965 = state_30922__$1;
(statearr_30924_30965[(2)] = inst_30918);

(statearr_30924_30965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (20))){
var inst_30888 = (state_30922[(7)]);
var inst_30899 = (state_30922[(2)]);
var inst_30900 = cljs.core.next.call(null,inst_30888);
var inst_30874 = inst_30900;
var inst_30875 = null;
var inst_30876 = (0);
var inst_30877 = (0);
var state_30922__$1 = (function (){var statearr_30925 = state_30922;
(statearr_30925[(8)] = inst_30874);

(statearr_30925[(9)] = inst_30876);

(statearr_30925[(10)] = inst_30899);

(statearr_30925[(11)] = inst_30877);

(statearr_30925[(12)] = inst_30875);

return statearr_30925;
})();
var statearr_30926_30966 = state_30922__$1;
(statearr_30926_30966[(2)] = null);

(statearr_30926_30966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (1))){
var state_30922__$1 = state_30922;
var statearr_30927_30967 = state_30922__$1;
(statearr_30927_30967[(2)] = null);

(statearr_30927_30967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (4))){
var inst_30863 = (state_30922[(13)]);
var inst_30863__$1 = (state_30922[(2)]);
var inst_30864 = (inst_30863__$1 == null);
var state_30922__$1 = (function (){var statearr_30928 = state_30922;
(statearr_30928[(13)] = inst_30863__$1);

return statearr_30928;
})();
if(cljs.core.truth_(inst_30864)){
var statearr_30929_30968 = state_30922__$1;
(statearr_30929_30968[(1)] = (5));

} else {
var statearr_30930_30969 = state_30922__$1;
(statearr_30930_30969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (15))){
var state_30922__$1 = state_30922;
var statearr_30934_30970 = state_30922__$1;
(statearr_30934_30970[(2)] = null);

(statearr_30934_30970[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (21))){
var state_30922__$1 = state_30922;
var statearr_30935_30971 = state_30922__$1;
(statearr_30935_30971[(2)] = null);

(statearr_30935_30971[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (13))){
var inst_30874 = (state_30922[(8)]);
var inst_30876 = (state_30922[(9)]);
var inst_30877 = (state_30922[(11)]);
var inst_30875 = (state_30922[(12)]);
var inst_30884 = (state_30922[(2)]);
var inst_30885 = (inst_30877 + (1));
var tmp30931 = inst_30874;
var tmp30932 = inst_30876;
var tmp30933 = inst_30875;
var inst_30874__$1 = tmp30931;
var inst_30875__$1 = tmp30933;
var inst_30876__$1 = tmp30932;
var inst_30877__$1 = inst_30885;
var state_30922__$1 = (function (){var statearr_30936 = state_30922;
(statearr_30936[(14)] = inst_30884);

(statearr_30936[(8)] = inst_30874__$1);

(statearr_30936[(9)] = inst_30876__$1);

(statearr_30936[(11)] = inst_30877__$1);

(statearr_30936[(12)] = inst_30875__$1);

return statearr_30936;
})();
var statearr_30937_30972 = state_30922__$1;
(statearr_30937_30972[(2)] = null);

(statearr_30937_30972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (22))){
var state_30922__$1 = state_30922;
var statearr_30938_30973 = state_30922__$1;
(statearr_30938_30973[(2)] = null);

(statearr_30938_30973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (6))){
var inst_30863 = (state_30922[(13)]);
var inst_30872 = f.call(null,inst_30863);
var inst_30873 = cljs.core.seq.call(null,inst_30872);
var inst_30874 = inst_30873;
var inst_30875 = null;
var inst_30876 = (0);
var inst_30877 = (0);
var state_30922__$1 = (function (){var statearr_30939 = state_30922;
(statearr_30939[(8)] = inst_30874);

(statearr_30939[(9)] = inst_30876);

(statearr_30939[(11)] = inst_30877);

(statearr_30939[(12)] = inst_30875);

return statearr_30939;
})();
var statearr_30940_30974 = state_30922__$1;
(statearr_30940_30974[(2)] = null);

(statearr_30940_30974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (17))){
var inst_30888 = (state_30922[(7)]);
var inst_30892 = cljs.core.chunk_first.call(null,inst_30888);
var inst_30893 = cljs.core.chunk_rest.call(null,inst_30888);
var inst_30894 = cljs.core.count.call(null,inst_30892);
var inst_30874 = inst_30893;
var inst_30875 = inst_30892;
var inst_30876 = inst_30894;
var inst_30877 = (0);
var state_30922__$1 = (function (){var statearr_30941 = state_30922;
(statearr_30941[(8)] = inst_30874);

(statearr_30941[(9)] = inst_30876);

(statearr_30941[(11)] = inst_30877);

(statearr_30941[(12)] = inst_30875);

return statearr_30941;
})();
var statearr_30942_30975 = state_30922__$1;
(statearr_30942_30975[(2)] = null);

(statearr_30942_30975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (3))){
var inst_30920 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30922__$1,inst_30920);
} else {
if((state_val_30923 === (12))){
var inst_30908 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
var statearr_30943_30976 = state_30922__$1;
(statearr_30943_30976[(2)] = inst_30908);

(statearr_30943_30976[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (2))){
var state_30922__$1 = state_30922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30922__$1,(4),in$);
} else {
if((state_val_30923 === (23))){
var inst_30916 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
var statearr_30944_30977 = state_30922__$1;
(statearr_30944_30977[(2)] = inst_30916);

(statearr_30944_30977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (19))){
var inst_30903 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
var statearr_30945_30978 = state_30922__$1;
(statearr_30945_30978[(2)] = inst_30903);

(statearr_30945_30978[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (11))){
var inst_30888 = (state_30922[(7)]);
var inst_30874 = (state_30922[(8)]);
var inst_30888__$1 = cljs.core.seq.call(null,inst_30874);
var state_30922__$1 = (function (){var statearr_30946 = state_30922;
(statearr_30946[(7)] = inst_30888__$1);

return statearr_30946;
})();
if(inst_30888__$1){
var statearr_30947_30979 = state_30922__$1;
(statearr_30947_30979[(1)] = (14));

} else {
var statearr_30948_30980 = state_30922__$1;
(statearr_30948_30980[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (9))){
var inst_30910 = (state_30922[(2)]);
var inst_30911 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30922__$1 = (function (){var statearr_30949 = state_30922;
(statearr_30949[(15)] = inst_30910);

return statearr_30949;
})();
if(cljs.core.truth_(inst_30911)){
var statearr_30950_30981 = state_30922__$1;
(statearr_30950_30981[(1)] = (21));

} else {
var statearr_30951_30982 = state_30922__$1;
(statearr_30951_30982[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (5))){
var inst_30866 = cljs.core.async.close_BANG_.call(null,out);
var state_30922__$1 = state_30922;
var statearr_30952_30983 = state_30922__$1;
(statearr_30952_30983[(2)] = inst_30866);

(statearr_30952_30983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (14))){
var inst_30888 = (state_30922[(7)]);
var inst_30890 = cljs.core.chunked_seq_QMARK_.call(null,inst_30888);
var state_30922__$1 = state_30922;
if(inst_30890){
var statearr_30953_30984 = state_30922__$1;
(statearr_30953_30984[(1)] = (17));

} else {
var statearr_30954_30985 = state_30922__$1;
(statearr_30954_30985[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (16))){
var inst_30906 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
var statearr_30955_30986 = state_30922__$1;
(statearr_30955_30986[(2)] = inst_30906);

(statearr_30955_30986[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (10))){
var inst_30877 = (state_30922[(11)]);
var inst_30875 = (state_30922[(12)]);
var inst_30882 = cljs.core._nth.call(null,inst_30875,inst_30877);
var state_30922__$1 = state_30922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30922__$1,(13),out,inst_30882);
} else {
if((state_val_30923 === (18))){
var inst_30888 = (state_30922[(7)]);
var inst_30897 = cljs.core.first.call(null,inst_30888);
var state_30922__$1 = state_30922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30922__$1,(20),out,inst_30897);
} else {
if((state_val_30923 === (8))){
var inst_30876 = (state_30922[(9)]);
var inst_30877 = (state_30922[(11)]);
var inst_30879 = (inst_30877 < inst_30876);
var inst_30880 = inst_30879;
var state_30922__$1 = state_30922;
if(cljs.core.truth_(inst_30880)){
var statearr_30956_30987 = state_30922__$1;
(statearr_30956_30987[(1)] = (10));

} else {
var statearr_30957_30988 = state_30922__$1;
(statearr_30957_30988[(1)] = (11));

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
var statearr_30961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30961[(0)] = state_machine__7289__auto__);

(statearr_30961[(1)] = (1));

return statearr_30961;
});
var state_machine__7289__auto____1 = (function (state_30922){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_30922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e30962){if((e30962 instanceof Object)){
var ex__7292__auto__ = e30962;
var statearr_30963_30989 = state_30922;
(statearr_30963_30989[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30990 = state_30922;
state_30922 = G__30990;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_30922){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_30922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto__))
})();
var state__7305__auto__ = (function (){var statearr_30964 = f__7304__auto__.call(null);
(statearr_30964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto__);

return statearr_30964;
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
var c__7303__auto___31087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___31087,out){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___31087,out){
return (function (state_31062){
var state_val_31063 = (state_31062[(1)]);
if((state_val_31063 === (7))){
var inst_31057 = (state_31062[(2)]);
var state_31062__$1 = state_31062;
var statearr_31064_31088 = state_31062__$1;
(statearr_31064_31088[(2)] = inst_31057);

(statearr_31064_31088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (1))){
var inst_31039 = null;
var state_31062__$1 = (function (){var statearr_31065 = state_31062;
(statearr_31065[(7)] = inst_31039);

return statearr_31065;
})();
var statearr_31066_31089 = state_31062__$1;
(statearr_31066_31089[(2)] = null);

(statearr_31066_31089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (4))){
var inst_31042 = (state_31062[(8)]);
var inst_31042__$1 = (state_31062[(2)]);
var inst_31043 = (inst_31042__$1 == null);
var inst_31044 = cljs.core.not.call(null,inst_31043);
var state_31062__$1 = (function (){var statearr_31067 = state_31062;
(statearr_31067[(8)] = inst_31042__$1);

return statearr_31067;
})();
if(inst_31044){
var statearr_31068_31090 = state_31062__$1;
(statearr_31068_31090[(1)] = (5));

} else {
var statearr_31069_31091 = state_31062__$1;
(statearr_31069_31091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (6))){
var state_31062__$1 = state_31062;
var statearr_31070_31092 = state_31062__$1;
(statearr_31070_31092[(2)] = null);

(statearr_31070_31092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (3))){
var inst_31059 = (state_31062[(2)]);
var inst_31060 = cljs.core.async.close_BANG_.call(null,out);
var state_31062__$1 = (function (){var statearr_31071 = state_31062;
(statearr_31071[(9)] = inst_31059);

return statearr_31071;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31062__$1,inst_31060);
} else {
if((state_val_31063 === (2))){
var state_31062__$1 = state_31062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31062__$1,(4),ch);
} else {
if((state_val_31063 === (11))){
var inst_31042 = (state_31062[(8)]);
var inst_31051 = (state_31062[(2)]);
var inst_31039 = inst_31042;
var state_31062__$1 = (function (){var statearr_31072 = state_31062;
(statearr_31072[(10)] = inst_31051);

(statearr_31072[(7)] = inst_31039);

return statearr_31072;
})();
var statearr_31073_31093 = state_31062__$1;
(statearr_31073_31093[(2)] = null);

(statearr_31073_31093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (9))){
var inst_31042 = (state_31062[(8)]);
var state_31062__$1 = state_31062;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31062__$1,(11),out,inst_31042);
} else {
if((state_val_31063 === (5))){
var inst_31039 = (state_31062[(7)]);
var inst_31042 = (state_31062[(8)]);
var inst_31046 = cljs.core._EQ_.call(null,inst_31042,inst_31039);
var state_31062__$1 = state_31062;
if(inst_31046){
var statearr_31075_31094 = state_31062__$1;
(statearr_31075_31094[(1)] = (8));

} else {
var statearr_31076_31095 = state_31062__$1;
(statearr_31076_31095[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (10))){
var inst_31054 = (state_31062[(2)]);
var state_31062__$1 = state_31062;
var statearr_31077_31096 = state_31062__$1;
(statearr_31077_31096[(2)] = inst_31054);

(statearr_31077_31096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (8))){
var inst_31039 = (state_31062[(7)]);
var tmp31074 = inst_31039;
var inst_31039__$1 = tmp31074;
var state_31062__$1 = (function (){var statearr_31078 = state_31062;
(statearr_31078[(7)] = inst_31039__$1);

return statearr_31078;
})();
var statearr_31079_31097 = state_31062__$1;
(statearr_31079_31097[(2)] = null);

(statearr_31079_31097[(1)] = (2));


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
});})(c__7303__auto___31087,out))
;
return ((function (switch__7288__auto__,c__7303__auto___31087,out){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_31083 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31083[(0)] = state_machine__7289__auto__);

(statearr_31083[(1)] = (1));

return statearr_31083;
});
var state_machine__7289__auto____1 = (function (state_31062){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_31062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e31084){if((e31084 instanceof Object)){
var ex__7292__auto__ = e31084;
var statearr_31085_31098 = state_31062;
(statearr_31085_31098[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31099 = state_31062;
state_31062 = G__31099;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_31062){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_31062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___31087,out))
})();
var state__7305__auto__ = (function (){var statearr_31086 = f__7304__auto__.call(null);
(statearr_31086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___31087);

return statearr_31086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___31087,out))
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
var c__7303__auto___31234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___31234,out){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___31234,out){
return (function (state_31204){
var state_val_31205 = (state_31204[(1)]);
if((state_val_31205 === (7))){
var inst_31200 = (state_31204[(2)]);
var state_31204__$1 = state_31204;
var statearr_31206_31235 = state_31204__$1;
(statearr_31206_31235[(2)] = inst_31200);

(statearr_31206_31235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31205 === (1))){
var inst_31167 = (new Array(n));
var inst_31168 = inst_31167;
var inst_31169 = (0);
var state_31204__$1 = (function (){var statearr_31207 = state_31204;
(statearr_31207[(7)] = inst_31169);

(statearr_31207[(8)] = inst_31168);

return statearr_31207;
})();
var statearr_31208_31236 = state_31204__$1;
(statearr_31208_31236[(2)] = null);

(statearr_31208_31236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31205 === (4))){
var inst_31172 = (state_31204[(9)]);
var inst_31172__$1 = (state_31204[(2)]);
var inst_31173 = (inst_31172__$1 == null);
var inst_31174 = cljs.core.not.call(null,inst_31173);
var state_31204__$1 = (function (){var statearr_31209 = state_31204;
(statearr_31209[(9)] = inst_31172__$1);

return statearr_31209;
})();
if(inst_31174){
var statearr_31210_31237 = state_31204__$1;
(statearr_31210_31237[(1)] = (5));

} else {
var statearr_31211_31238 = state_31204__$1;
(statearr_31211_31238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31205 === (15))){
var inst_31194 = (state_31204[(2)]);
var state_31204__$1 = state_31204;
var statearr_31212_31239 = state_31204__$1;
(statearr_31212_31239[(2)] = inst_31194);

(statearr_31212_31239[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31205 === (13))){
var state_31204__$1 = state_31204;
var statearr_31213_31240 = state_31204__$1;
(statearr_31213_31240[(2)] = null);

(statearr_31213_31240[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31205 === (6))){
var inst_31169 = (state_31204[(7)]);
var inst_31190 = (inst_31169 > (0));
var state_31204__$1 = state_31204;
if(cljs.core.truth_(inst_31190)){
var statearr_31214_31241 = state_31204__$1;
(statearr_31214_31241[(1)] = (12));

} else {
var statearr_31215_31242 = state_31204__$1;
(statearr_31215_31242[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31205 === (3))){
var inst_31202 = (state_31204[(2)]);
var state_31204__$1 = state_31204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31204__$1,inst_31202);
} else {
if((state_val_31205 === (12))){
var inst_31168 = (state_31204[(8)]);
var inst_31192 = cljs.core.vec.call(null,inst_31168);
var state_31204__$1 = state_31204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31204__$1,(15),out,inst_31192);
} else {
if((state_val_31205 === (2))){
var state_31204__$1 = state_31204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31204__$1,(4),ch);
} else {
if((state_val_31205 === (11))){
var inst_31184 = (state_31204[(2)]);
var inst_31185 = (new Array(n));
var inst_31168 = inst_31185;
var inst_31169 = (0);
var state_31204__$1 = (function (){var statearr_31216 = state_31204;
(statearr_31216[(7)] = inst_31169);

(statearr_31216[(10)] = inst_31184);

(statearr_31216[(8)] = inst_31168);

return statearr_31216;
})();
var statearr_31217_31243 = state_31204__$1;
(statearr_31217_31243[(2)] = null);

(statearr_31217_31243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31205 === (9))){
var inst_31168 = (state_31204[(8)]);
var inst_31182 = cljs.core.vec.call(null,inst_31168);
var state_31204__$1 = state_31204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31204__$1,(11),out,inst_31182);
} else {
if((state_val_31205 === (5))){
var inst_31169 = (state_31204[(7)]);
var inst_31172 = (state_31204[(9)]);
var inst_31177 = (state_31204[(11)]);
var inst_31168 = (state_31204[(8)]);
var inst_31176 = (inst_31168[inst_31169] = inst_31172);
var inst_31177__$1 = (inst_31169 + (1));
var inst_31178 = (inst_31177__$1 < n);
var state_31204__$1 = (function (){var statearr_31218 = state_31204;
(statearr_31218[(11)] = inst_31177__$1);

(statearr_31218[(12)] = inst_31176);

return statearr_31218;
})();
if(cljs.core.truth_(inst_31178)){
var statearr_31219_31244 = state_31204__$1;
(statearr_31219_31244[(1)] = (8));

} else {
var statearr_31220_31245 = state_31204__$1;
(statearr_31220_31245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31205 === (14))){
var inst_31197 = (state_31204[(2)]);
var inst_31198 = cljs.core.async.close_BANG_.call(null,out);
var state_31204__$1 = (function (){var statearr_31222 = state_31204;
(statearr_31222[(13)] = inst_31197);

return statearr_31222;
})();
var statearr_31223_31246 = state_31204__$1;
(statearr_31223_31246[(2)] = inst_31198);

(statearr_31223_31246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31205 === (10))){
var inst_31188 = (state_31204[(2)]);
var state_31204__$1 = state_31204;
var statearr_31224_31247 = state_31204__$1;
(statearr_31224_31247[(2)] = inst_31188);

(statearr_31224_31247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31205 === (8))){
var inst_31177 = (state_31204[(11)]);
var inst_31168 = (state_31204[(8)]);
var tmp31221 = inst_31168;
var inst_31168__$1 = tmp31221;
var inst_31169 = inst_31177;
var state_31204__$1 = (function (){var statearr_31225 = state_31204;
(statearr_31225[(7)] = inst_31169);

(statearr_31225[(8)] = inst_31168__$1);

return statearr_31225;
})();
var statearr_31226_31248 = state_31204__$1;
(statearr_31226_31248[(2)] = null);

(statearr_31226_31248[(1)] = (2));


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
});})(c__7303__auto___31234,out))
;
return ((function (switch__7288__auto__,c__7303__auto___31234,out){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_31230 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31230[(0)] = state_machine__7289__auto__);

(statearr_31230[(1)] = (1));

return statearr_31230;
});
var state_machine__7289__auto____1 = (function (state_31204){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_31204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e31231){if((e31231 instanceof Object)){
var ex__7292__auto__ = e31231;
var statearr_31232_31249 = state_31204;
(statearr_31232_31249[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31250 = state_31204;
state_31204 = G__31250;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_31204){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_31204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___31234,out))
})();
var state__7305__auto__ = (function (){var statearr_31233 = f__7304__auto__.call(null);
(statearr_31233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___31234);

return statearr_31233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___31234,out))
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
var c__7303__auto___31393 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___31393,out){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___31393,out){
return (function (state_31363){
var state_val_31364 = (state_31363[(1)]);
if((state_val_31364 === (7))){
var inst_31359 = (state_31363[(2)]);
var state_31363__$1 = state_31363;
var statearr_31365_31394 = state_31363__$1;
(statearr_31365_31394[(2)] = inst_31359);

(statearr_31365_31394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31364 === (1))){
var inst_31322 = [];
var inst_31323 = inst_31322;
var inst_31324 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31363__$1 = (function (){var statearr_31366 = state_31363;
(statearr_31366[(7)] = inst_31323);

(statearr_31366[(8)] = inst_31324);

return statearr_31366;
})();
var statearr_31367_31395 = state_31363__$1;
(statearr_31367_31395[(2)] = null);

(statearr_31367_31395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31364 === (4))){
var inst_31327 = (state_31363[(9)]);
var inst_31327__$1 = (state_31363[(2)]);
var inst_31328 = (inst_31327__$1 == null);
var inst_31329 = cljs.core.not.call(null,inst_31328);
var state_31363__$1 = (function (){var statearr_31368 = state_31363;
(statearr_31368[(9)] = inst_31327__$1);

return statearr_31368;
})();
if(inst_31329){
var statearr_31369_31396 = state_31363__$1;
(statearr_31369_31396[(1)] = (5));

} else {
var statearr_31370_31397 = state_31363__$1;
(statearr_31370_31397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31364 === (15))){
var inst_31353 = (state_31363[(2)]);
var state_31363__$1 = state_31363;
var statearr_31371_31398 = state_31363__$1;
(statearr_31371_31398[(2)] = inst_31353);

(statearr_31371_31398[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31364 === (13))){
var state_31363__$1 = state_31363;
var statearr_31372_31399 = state_31363__$1;
(statearr_31372_31399[(2)] = null);

(statearr_31372_31399[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31364 === (6))){
var inst_31323 = (state_31363[(7)]);
var inst_31348 = inst_31323.length;
var inst_31349 = (inst_31348 > (0));
var state_31363__$1 = state_31363;
if(cljs.core.truth_(inst_31349)){
var statearr_31373_31400 = state_31363__$1;
(statearr_31373_31400[(1)] = (12));

} else {
var statearr_31374_31401 = state_31363__$1;
(statearr_31374_31401[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31364 === (3))){
var inst_31361 = (state_31363[(2)]);
var state_31363__$1 = state_31363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31363__$1,inst_31361);
} else {
if((state_val_31364 === (12))){
var inst_31323 = (state_31363[(7)]);
var inst_31351 = cljs.core.vec.call(null,inst_31323);
var state_31363__$1 = state_31363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31363__$1,(15),out,inst_31351);
} else {
if((state_val_31364 === (2))){
var state_31363__$1 = state_31363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31363__$1,(4),ch);
} else {
if((state_val_31364 === (11))){
var inst_31331 = (state_31363[(10)]);
var inst_31327 = (state_31363[(9)]);
var inst_31341 = (state_31363[(2)]);
var inst_31342 = [];
var inst_31343 = inst_31342.push(inst_31327);
var inst_31323 = inst_31342;
var inst_31324 = inst_31331;
var state_31363__$1 = (function (){var statearr_31375 = state_31363;
(statearr_31375[(7)] = inst_31323);

(statearr_31375[(11)] = inst_31341);

(statearr_31375[(12)] = inst_31343);

(statearr_31375[(8)] = inst_31324);

return statearr_31375;
})();
var statearr_31376_31402 = state_31363__$1;
(statearr_31376_31402[(2)] = null);

(statearr_31376_31402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31364 === (9))){
var inst_31323 = (state_31363[(7)]);
var inst_31339 = cljs.core.vec.call(null,inst_31323);
var state_31363__$1 = state_31363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31363__$1,(11),out,inst_31339);
} else {
if((state_val_31364 === (5))){
var inst_31331 = (state_31363[(10)]);
var inst_31324 = (state_31363[(8)]);
var inst_31327 = (state_31363[(9)]);
var inst_31331__$1 = f.call(null,inst_31327);
var inst_31332 = cljs.core._EQ_.call(null,inst_31331__$1,inst_31324);
var inst_31333 = cljs.core.keyword_identical_QMARK_.call(null,inst_31324,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31334 = (inst_31332) || (inst_31333);
var state_31363__$1 = (function (){var statearr_31377 = state_31363;
(statearr_31377[(10)] = inst_31331__$1);

return statearr_31377;
})();
if(cljs.core.truth_(inst_31334)){
var statearr_31378_31403 = state_31363__$1;
(statearr_31378_31403[(1)] = (8));

} else {
var statearr_31379_31404 = state_31363__$1;
(statearr_31379_31404[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31364 === (14))){
var inst_31356 = (state_31363[(2)]);
var inst_31357 = cljs.core.async.close_BANG_.call(null,out);
var state_31363__$1 = (function (){var statearr_31381 = state_31363;
(statearr_31381[(13)] = inst_31356);

return statearr_31381;
})();
var statearr_31382_31405 = state_31363__$1;
(statearr_31382_31405[(2)] = inst_31357);

(statearr_31382_31405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31364 === (10))){
var inst_31346 = (state_31363[(2)]);
var state_31363__$1 = state_31363;
var statearr_31383_31406 = state_31363__$1;
(statearr_31383_31406[(2)] = inst_31346);

(statearr_31383_31406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31364 === (8))){
var inst_31323 = (state_31363[(7)]);
var inst_31331 = (state_31363[(10)]);
var inst_31327 = (state_31363[(9)]);
var inst_31336 = inst_31323.push(inst_31327);
var tmp31380 = inst_31323;
var inst_31323__$1 = tmp31380;
var inst_31324 = inst_31331;
var state_31363__$1 = (function (){var statearr_31384 = state_31363;
(statearr_31384[(7)] = inst_31323__$1);

(statearr_31384[(8)] = inst_31324);

(statearr_31384[(14)] = inst_31336);

return statearr_31384;
})();
var statearr_31385_31407 = state_31363__$1;
(statearr_31385_31407[(2)] = null);

(statearr_31385_31407[(1)] = (2));


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
});})(c__7303__auto___31393,out))
;
return ((function (switch__7288__auto__,c__7303__auto___31393,out){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_31389 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31389[(0)] = state_machine__7289__auto__);

(statearr_31389[(1)] = (1));

return statearr_31389;
});
var state_machine__7289__auto____1 = (function (state_31363){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_31363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e31390){if((e31390 instanceof Object)){
var ex__7292__auto__ = e31390;
var statearr_31391_31408 = state_31363;
(statearr_31391_31408[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31409 = state_31363;
state_31363 = G__31409;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_31363){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_31363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___31393,out))
})();
var state__7305__auto__ = (function (){var statearr_31392 = f__7304__auto__.call(null);
(statearr_31392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___31393);

return statearr_31392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___31393,out))
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

//# sourceMappingURL=async.js.map?rel=1420049680242