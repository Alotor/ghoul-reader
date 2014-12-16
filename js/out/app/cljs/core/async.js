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
if(typeof cljs.core.async.t12081 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12081 = (function (f,fn_handler,meta12082){
this.f = f;
this.fn_handler = fn_handler;
this.meta12082 = meta12082;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12081.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12081.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t12081.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t12081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12083){
var self__ = this;
var _12083__$1 = this;
return self__.meta12082;
});

cljs.core.async.t12081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12083,meta12082__$1){
var self__ = this;
var _12083__$1 = this;
return (new cljs.core.async.t12081(self__.f,self__.fn_handler,meta12082__$1));
});

cljs.core.async.t12081.cljs$lang$type = true;

cljs.core.async.t12081.cljs$lang$ctorStr = "cljs.core.async/t12081";

cljs.core.async.t12081.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t12081");
});

cljs.core.async.__GT_t12081 = (function __GT_t12081(f__$1,fn_handler__$1,meta12082){
return (new cljs.core.async.t12081(f__$1,fn_handler__$1,meta12082));
});

}

return (new cljs.core.async.t12081(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
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
var G__12085 = buff;
if(G__12085){
var bit__4284__auto__ = null;
if(cljs.core.truth_((function (){var or__3608__auto__ = bit__4284__auto__;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return G__12085.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__12085.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12085);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12085);
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
var val_12086 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_12086);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_12086,ret){
return (function (){
return fn1.call(null,val_12086);
});})(val_12086,ret))
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
var n__4490__auto___12087 = n;
var x_12088 = (0);
while(true){
if((x_12088 < n__4490__auto___12087)){
(a[x_12088] = (0));

var G__12089 = (x_12088 + (1));
x_12088 = G__12089;
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

var G__12090 = (i + (1));
i = G__12090;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t12094 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12094 = (function (flag,alt_flag,meta12095){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12095 = meta12095;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12094.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12094.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t12094.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t12094.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12096){
var self__ = this;
var _12096__$1 = this;
return self__.meta12095;
});})(flag))
;

cljs.core.async.t12094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12096,meta12095__$1){
var self__ = this;
var _12096__$1 = this;
return (new cljs.core.async.t12094(self__.flag,self__.alt_flag,meta12095__$1));
});})(flag))
;

cljs.core.async.t12094.cljs$lang$type = true;

cljs.core.async.t12094.cljs$lang$ctorStr = "cljs.core.async/t12094";

cljs.core.async.t12094.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t12094");
});})(flag))
;

cljs.core.async.__GT_t12094 = ((function (flag){
return (function __GT_t12094(flag__$1,alt_flag__$1,meta12095){
return (new cljs.core.async.t12094(flag__$1,alt_flag__$1,meta12095));
});})(flag))
;

}

return (new cljs.core.async.t12094(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t12100 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12100 = (function (cb,flag,alt_handler,meta12101){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12101 = meta12101;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12100.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12100.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t12100.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t12100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12102){
var self__ = this;
var _12102__$1 = this;
return self__.meta12101;
});

cljs.core.async.t12100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12102,meta12101__$1){
var self__ = this;
var _12102__$1 = this;
return (new cljs.core.async.t12100(self__.cb,self__.flag,self__.alt_handler,meta12101__$1));
});

cljs.core.async.t12100.cljs$lang$type = true;

cljs.core.async.t12100.cljs$lang$ctorStr = "cljs.core.async/t12100";

cljs.core.async.t12100.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t12100");
});

cljs.core.async.__GT_t12100 = (function __GT_t12100(cb__$1,flag__$1,alt_handler__$1,meta12101){
return (new cljs.core.async.t12100(cb__$1,flag__$1,alt_handler__$1,meta12101));
});

}

return (new cljs.core.async.t12100(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
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
return (function (p1__12103_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12103_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12104_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12104_SHARP_,port], null));
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
var G__12105 = (i + (1));
i = G__12105;
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
var alts_BANG___delegate = function (ports,p__12106){
var map__12108 = p__12106;
var map__12108__$1 = ((cljs.core.seq_QMARK_.call(null,map__12108))?cljs.core.apply.call(null,cljs.core.hash_map,map__12108):map__12108);
var opts = map__12108__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__12106 = null;
if (arguments.length > 1) {
  p__12106 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__12106);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12109){
var ports = cljs.core.first(arglist__12109);
var p__12106 = cljs.core.rest(arglist__12109);
return alts_BANG___delegate(ports,p__12106);
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
var c__7427__auto___12204 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7427__auto___12204){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (c__7427__auto___12204){
return (function (state_12180){
var state_val_12181 = (state_12180[(1)]);
if((state_val_12181 === (7))){
var inst_12176 = (state_12180[(2)]);
var state_12180__$1 = state_12180;
var statearr_12182_12205 = state_12180__$1;
(statearr_12182_12205[(2)] = inst_12176);

(statearr_12182_12205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12181 === (1))){
var state_12180__$1 = state_12180;
var statearr_12183_12206 = state_12180__$1;
(statearr_12183_12206[(2)] = null);

(statearr_12183_12206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12181 === (4))){
var inst_12159 = (state_12180[(7)]);
var inst_12159__$1 = (state_12180[(2)]);
var inst_12160 = (inst_12159__$1 == null);
var state_12180__$1 = (function (){var statearr_12184 = state_12180;
(statearr_12184[(7)] = inst_12159__$1);

return statearr_12184;
})();
if(cljs.core.truth_(inst_12160)){
var statearr_12185_12207 = state_12180__$1;
(statearr_12185_12207[(1)] = (5));

} else {
var statearr_12186_12208 = state_12180__$1;
(statearr_12186_12208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12181 === (13))){
var state_12180__$1 = state_12180;
var statearr_12187_12209 = state_12180__$1;
(statearr_12187_12209[(2)] = null);

(statearr_12187_12209[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12181 === (6))){
var inst_12159 = (state_12180[(7)]);
var state_12180__$1 = state_12180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12180__$1,(11),to,inst_12159);
} else {
if((state_val_12181 === (3))){
var inst_12178 = (state_12180[(2)]);
var state_12180__$1 = state_12180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12180__$1,inst_12178);
} else {
if((state_val_12181 === (12))){
var state_12180__$1 = state_12180;
var statearr_12188_12210 = state_12180__$1;
(statearr_12188_12210[(2)] = null);

(statearr_12188_12210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12181 === (2))){
var state_12180__$1 = state_12180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12180__$1,(4),from);
} else {
if((state_val_12181 === (11))){
var inst_12169 = (state_12180[(2)]);
var state_12180__$1 = state_12180;
if(cljs.core.truth_(inst_12169)){
var statearr_12189_12211 = state_12180__$1;
(statearr_12189_12211[(1)] = (12));

} else {
var statearr_12190_12212 = state_12180__$1;
(statearr_12190_12212[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12181 === (9))){
var state_12180__$1 = state_12180;
var statearr_12191_12213 = state_12180__$1;
(statearr_12191_12213[(2)] = null);

(statearr_12191_12213[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12181 === (5))){
var state_12180__$1 = state_12180;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12192_12214 = state_12180__$1;
(statearr_12192_12214[(1)] = (8));

} else {
var statearr_12193_12215 = state_12180__$1;
(statearr_12193_12215[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12181 === (14))){
var inst_12174 = (state_12180[(2)]);
var state_12180__$1 = state_12180;
var statearr_12194_12216 = state_12180__$1;
(statearr_12194_12216[(2)] = inst_12174);

(statearr_12194_12216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12181 === (10))){
var inst_12166 = (state_12180[(2)]);
var state_12180__$1 = state_12180;
var statearr_12195_12217 = state_12180__$1;
(statearr_12195_12217[(2)] = inst_12166);

(statearr_12195_12217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12181 === (8))){
var inst_12163 = cljs.core.async.close_BANG_.call(null,to);
var state_12180__$1 = state_12180;
var statearr_12196_12218 = state_12180__$1;
(statearr_12196_12218[(2)] = inst_12163);

(statearr_12196_12218[(1)] = (10));


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
});})(c__7427__auto___12204))
;
return ((function (switch__7371__auto__,c__7427__auto___12204){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_12200 = [null,null,null,null,null,null,null,null];
(statearr_12200[(0)] = state_machine__7372__auto__);

(statearr_12200[(1)] = (1));

return statearr_12200;
});
var state_machine__7372__auto____1 = (function (state_12180){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_12180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e12201){if((e12201 instanceof Object)){
var ex__7375__auto__ = e12201;
var statearr_12202_12219 = state_12180;
(statearr_12202_12219[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12220 = state_12180;
state_12180 = G__12220;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_12180){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_12180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto___12204))
})();
var state__7429__auto__ = (function (){var statearr_12203 = f__7428__auto__.call(null);
(statearr_12203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto___12204);

return statearr_12203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(c__7427__auto___12204))
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
return (function (p__12404){
var vec__12405 = p__12404;
var v = cljs.core.nth.call(null,vec__12405,(0),null);
var p = cljs.core.nth.call(null,vec__12405,(1),null);
var job = vec__12405;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7427__auto___12587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7427__auto___12587,res,vec__12405,v,p,job,jobs,results){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (c__7427__auto___12587,res,vec__12405,v,p,job,jobs,results){
return (function (state_12410){
var state_val_12411 = (state_12410[(1)]);
if((state_val_12411 === (2))){
var inst_12407 = (state_12410[(2)]);
var inst_12408 = cljs.core.async.close_BANG_.call(null,res);
var state_12410__$1 = (function (){var statearr_12412 = state_12410;
(statearr_12412[(7)] = inst_12407);

return statearr_12412;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12410__$1,inst_12408);
} else {
if((state_val_12411 === (1))){
var state_12410__$1 = state_12410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12410__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7427__auto___12587,res,vec__12405,v,p,job,jobs,results))
;
return ((function (switch__7371__auto__,c__7427__auto___12587,res,vec__12405,v,p,job,jobs,results){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_12416 = [null,null,null,null,null,null,null,null];
(statearr_12416[(0)] = state_machine__7372__auto__);

(statearr_12416[(1)] = (1));

return statearr_12416;
});
var state_machine__7372__auto____1 = (function (state_12410){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_12410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e12417){if((e12417 instanceof Object)){
var ex__7375__auto__ = e12417;
var statearr_12418_12588 = state_12410;
(statearr_12418_12588[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12589 = state_12410;
state_12410 = G__12589;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_12410){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_12410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto___12587,res,vec__12405,v,p,job,jobs,results))
})();
var state__7429__auto__ = (function (){var statearr_12419 = f__7428__auto__.call(null);
(statearr_12419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto___12587);

return statearr_12419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(c__7427__auto___12587,res,vec__12405,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__12420){
var vec__12421 = p__12420;
var v = cljs.core.nth.call(null,vec__12421,(0),null);
var p = cljs.core.nth.call(null,vec__12421,(1),null);
var job = vec__12421;
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
var n__4490__auto___12590 = n;
var __12591 = (0);
while(true){
if((__12591 < n__4490__auto___12590)){
var G__12422_12592 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__12422_12592) {
case "async":
var c__7427__auto___12594 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12591,c__7427__auto___12594,G__12422_12592,n__4490__auto___12590,jobs,results,process,async){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (__12591,c__7427__auto___12594,G__12422_12592,n__4490__auto___12590,jobs,results,process,async){
return (function (state_12435){
var state_val_12436 = (state_12435[(1)]);
if((state_val_12436 === (7))){
var inst_12431 = (state_12435[(2)]);
var state_12435__$1 = state_12435;
var statearr_12437_12595 = state_12435__$1;
(statearr_12437_12595[(2)] = inst_12431);

(statearr_12437_12595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12436 === (6))){
var state_12435__$1 = state_12435;
var statearr_12438_12596 = state_12435__$1;
(statearr_12438_12596[(2)] = null);

(statearr_12438_12596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12436 === (5))){
var state_12435__$1 = state_12435;
var statearr_12439_12597 = state_12435__$1;
(statearr_12439_12597[(2)] = null);

(statearr_12439_12597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12436 === (4))){
var inst_12425 = (state_12435[(2)]);
var inst_12426 = async.call(null,inst_12425);
var state_12435__$1 = state_12435;
if(cljs.core.truth_(inst_12426)){
var statearr_12440_12598 = state_12435__$1;
(statearr_12440_12598[(1)] = (5));

} else {
var statearr_12441_12599 = state_12435__$1;
(statearr_12441_12599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12436 === (3))){
var inst_12433 = (state_12435[(2)]);
var state_12435__$1 = state_12435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12435__$1,inst_12433);
} else {
if((state_val_12436 === (2))){
var state_12435__$1 = state_12435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12435__$1,(4),jobs);
} else {
if((state_val_12436 === (1))){
var state_12435__$1 = state_12435;
var statearr_12442_12600 = state_12435__$1;
(statearr_12442_12600[(2)] = null);

(statearr_12442_12600[(1)] = (2));


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
});})(__12591,c__7427__auto___12594,G__12422_12592,n__4490__auto___12590,jobs,results,process,async))
;
return ((function (__12591,switch__7371__auto__,c__7427__auto___12594,G__12422_12592,n__4490__auto___12590,jobs,results,process,async){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_12446 = [null,null,null,null,null,null,null];
(statearr_12446[(0)] = state_machine__7372__auto__);

(statearr_12446[(1)] = (1));

return statearr_12446;
});
var state_machine__7372__auto____1 = (function (state_12435){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_12435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e12447){if((e12447 instanceof Object)){
var ex__7375__auto__ = e12447;
var statearr_12448_12601 = state_12435;
(statearr_12448_12601[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12602 = state_12435;
state_12435 = G__12602;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_12435){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_12435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(__12591,switch__7371__auto__,c__7427__auto___12594,G__12422_12592,n__4490__auto___12590,jobs,results,process,async))
})();
var state__7429__auto__ = (function (){var statearr_12449 = f__7428__auto__.call(null);
(statearr_12449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto___12594);

return statearr_12449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(__12591,c__7427__auto___12594,G__12422_12592,n__4490__auto___12590,jobs,results,process,async))
);


break;
case "compute":
var c__7427__auto___12603 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12591,c__7427__auto___12603,G__12422_12592,n__4490__auto___12590,jobs,results,process,async){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (__12591,c__7427__auto___12603,G__12422_12592,n__4490__auto___12590,jobs,results,process,async){
return (function (state_12462){
var state_val_12463 = (state_12462[(1)]);
if((state_val_12463 === (7))){
var inst_12458 = (state_12462[(2)]);
var state_12462__$1 = state_12462;
var statearr_12464_12604 = state_12462__$1;
(statearr_12464_12604[(2)] = inst_12458);

(statearr_12464_12604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12463 === (6))){
var state_12462__$1 = state_12462;
var statearr_12465_12605 = state_12462__$1;
(statearr_12465_12605[(2)] = null);

(statearr_12465_12605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12463 === (5))){
var state_12462__$1 = state_12462;
var statearr_12466_12606 = state_12462__$1;
(statearr_12466_12606[(2)] = null);

(statearr_12466_12606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12463 === (4))){
var inst_12452 = (state_12462[(2)]);
var inst_12453 = process.call(null,inst_12452);
var state_12462__$1 = state_12462;
if(cljs.core.truth_(inst_12453)){
var statearr_12467_12607 = state_12462__$1;
(statearr_12467_12607[(1)] = (5));

} else {
var statearr_12468_12608 = state_12462__$1;
(statearr_12468_12608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12463 === (3))){
var inst_12460 = (state_12462[(2)]);
var state_12462__$1 = state_12462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12462__$1,inst_12460);
} else {
if((state_val_12463 === (2))){
var state_12462__$1 = state_12462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12462__$1,(4),jobs);
} else {
if((state_val_12463 === (1))){
var state_12462__$1 = state_12462;
var statearr_12469_12609 = state_12462__$1;
(statearr_12469_12609[(2)] = null);

(statearr_12469_12609[(1)] = (2));


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
});})(__12591,c__7427__auto___12603,G__12422_12592,n__4490__auto___12590,jobs,results,process,async))
;
return ((function (__12591,switch__7371__auto__,c__7427__auto___12603,G__12422_12592,n__4490__auto___12590,jobs,results,process,async){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_12473 = [null,null,null,null,null,null,null];
(statearr_12473[(0)] = state_machine__7372__auto__);

(statearr_12473[(1)] = (1));

return statearr_12473;
});
var state_machine__7372__auto____1 = (function (state_12462){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_12462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e12474){if((e12474 instanceof Object)){
var ex__7375__auto__ = e12474;
var statearr_12475_12610 = state_12462;
(statearr_12475_12610[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12611 = state_12462;
state_12462 = G__12611;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_12462){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_12462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(__12591,switch__7371__auto__,c__7427__auto___12603,G__12422_12592,n__4490__auto___12590,jobs,results,process,async))
})();
var state__7429__auto__ = (function (){var statearr_12476 = f__7428__auto__.call(null);
(statearr_12476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto___12603);

return statearr_12476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(__12591,c__7427__auto___12603,G__12422_12592,n__4490__auto___12590,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__12612 = (__12591 + (1));
__12591 = G__12612;
continue;
} else {
}
break;
}

var c__7427__auto___12613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7427__auto___12613,jobs,results,process,async){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (c__7427__auto___12613,jobs,results,process,async){
return (function (state_12498){
var state_val_12499 = (state_12498[(1)]);
if((state_val_12499 === (9))){
var inst_12491 = (state_12498[(2)]);
var state_12498__$1 = (function (){var statearr_12500 = state_12498;
(statearr_12500[(7)] = inst_12491);

return statearr_12500;
})();
var statearr_12501_12614 = state_12498__$1;
(statearr_12501_12614[(2)] = null);

(statearr_12501_12614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12499 === (8))){
var inst_12484 = (state_12498[(8)]);
var inst_12489 = (state_12498[(2)]);
var state_12498__$1 = (function (){var statearr_12502 = state_12498;
(statearr_12502[(9)] = inst_12489);

return statearr_12502;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12498__$1,(9),results,inst_12484);
} else {
if((state_val_12499 === (7))){
var inst_12494 = (state_12498[(2)]);
var state_12498__$1 = state_12498;
var statearr_12503_12615 = state_12498__$1;
(statearr_12503_12615[(2)] = inst_12494);

(statearr_12503_12615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12499 === (6))){
var inst_12479 = (state_12498[(10)]);
var inst_12484 = (state_12498[(8)]);
var inst_12484__$1 = cljs.core.async.chan.call(null,(1));
var inst_12485 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12486 = [inst_12479,inst_12484__$1];
var inst_12487 = (new cljs.core.PersistentVector(null,2,(5),inst_12485,inst_12486,null));
var state_12498__$1 = (function (){var statearr_12504 = state_12498;
(statearr_12504[(8)] = inst_12484__$1);

return statearr_12504;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12498__$1,(8),jobs,inst_12487);
} else {
if((state_val_12499 === (5))){
var inst_12482 = cljs.core.async.close_BANG_.call(null,jobs);
var state_12498__$1 = state_12498;
var statearr_12505_12616 = state_12498__$1;
(statearr_12505_12616[(2)] = inst_12482);

(statearr_12505_12616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12499 === (4))){
var inst_12479 = (state_12498[(10)]);
var inst_12479__$1 = (state_12498[(2)]);
var inst_12480 = (inst_12479__$1 == null);
var state_12498__$1 = (function (){var statearr_12506 = state_12498;
(statearr_12506[(10)] = inst_12479__$1);

return statearr_12506;
})();
if(cljs.core.truth_(inst_12480)){
var statearr_12507_12617 = state_12498__$1;
(statearr_12507_12617[(1)] = (5));

} else {
var statearr_12508_12618 = state_12498__$1;
(statearr_12508_12618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12499 === (3))){
var inst_12496 = (state_12498[(2)]);
var state_12498__$1 = state_12498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12498__$1,inst_12496);
} else {
if((state_val_12499 === (2))){
var state_12498__$1 = state_12498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12498__$1,(4),from);
} else {
if((state_val_12499 === (1))){
var state_12498__$1 = state_12498;
var statearr_12509_12619 = state_12498__$1;
(statearr_12509_12619[(2)] = null);

(statearr_12509_12619[(1)] = (2));


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
});})(c__7427__auto___12613,jobs,results,process,async))
;
return ((function (switch__7371__auto__,c__7427__auto___12613,jobs,results,process,async){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_12513 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12513[(0)] = state_machine__7372__auto__);

(statearr_12513[(1)] = (1));

return statearr_12513;
});
var state_machine__7372__auto____1 = (function (state_12498){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_12498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e12514){if((e12514 instanceof Object)){
var ex__7375__auto__ = e12514;
var statearr_12515_12620 = state_12498;
(statearr_12515_12620[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12621 = state_12498;
state_12498 = G__12621;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_12498){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_12498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto___12613,jobs,results,process,async))
})();
var state__7429__auto__ = (function (){var statearr_12516 = f__7428__auto__.call(null);
(statearr_12516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto___12613);

return statearr_12516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(c__7427__auto___12613,jobs,results,process,async))
);


var c__7427__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7427__auto__,jobs,results,process,async){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (c__7427__auto__,jobs,results,process,async){
return (function (state_12554){
var state_val_12555 = (state_12554[(1)]);
if((state_val_12555 === (7))){
var inst_12550 = (state_12554[(2)]);
var state_12554__$1 = state_12554;
var statearr_12556_12622 = state_12554__$1;
(statearr_12556_12622[(2)] = inst_12550);

(statearr_12556_12622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12555 === (20))){
var state_12554__$1 = state_12554;
var statearr_12557_12623 = state_12554__$1;
(statearr_12557_12623[(2)] = null);

(statearr_12557_12623[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12555 === (1))){
var state_12554__$1 = state_12554;
var statearr_12558_12624 = state_12554__$1;
(statearr_12558_12624[(2)] = null);

(statearr_12558_12624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12555 === (4))){
var inst_12519 = (state_12554[(7)]);
var inst_12519__$1 = (state_12554[(2)]);
var inst_12520 = (inst_12519__$1 == null);
var state_12554__$1 = (function (){var statearr_12559 = state_12554;
(statearr_12559[(7)] = inst_12519__$1);

return statearr_12559;
})();
if(cljs.core.truth_(inst_12520)){
var statearr_12560_12625 = state_12554__$1;
(statearr_12560_12625[(1)] = (5));

} else {
var statearr_12561_12626 = state_12554__$1;
(statearr_12561_12626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12555 === (15))){
var inst_12532 = (state_12554[(8)]);
var state_12554__$1 = state_12554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12554__$1,(18),to,inst_12532);
} else {
if((state_val_12555 === (21))){
var inst_12545 = (state_12554[(2)]);
var state_12554__$1 = state_12554;
var statearr_12562_12627 = state_12554__$1;
(statearr_12562_12627[(2)] = inst_12545);

(statearr_12562_12627[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12555 === (13))){
var inst_12547 = (state_12554[(2)]);
var state_12554__$1 = (function (){var statearr_12563 = state_12554;
(statearr_12563[(9)] = inst_12547);

return statearr_12563;
})();
var statearr_12564_12628 = state_12554__$1;
(statearr_12564_12628[(2)] = null);

(statearr_12564_12628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12555 === (6))){
var inst_12519 = (state_12554[(7)]);
var state_12554__$1 = state_12554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12554__$1,(11),inst_12519);
} else {
if((state_val_12555 === (17))){
var inst_12540 = (state_12554[(2)]);
var state_12554__$1 = state_12554;
if(cljs.core.truth_(inst_12540)){
var statearr_12565_12629 = state_12554__$1;
(statearr_12565_12629[(1)] = (19));

} else {
var statearr_12566_12630 = state_12554__$1;
(statearr_12566_12630[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12555 === (3))){
var inst_12552 = (state_12554[(2)]);
var state_12554__$1 = state_12554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12554__$1,inst_12552);
} else {
if((state_val_12555 === (12))){
var inst_12529 = (state_12554[(10)]);
var state_12554__$1 = state_12554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12554__$1,(14),inst_12529);
} else {
if((state_val_12555 === (2))){
var state_12554__$1 = state_12554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12554__$1,(4),results);
} else {
if((state_val_12555 === (19))){
var state_12554__$1 = state_12554;
var statearr_12567_12631 = state_12554__$1;
(statearr_12567_12631[(2)] = null);

(statearr_12567_12631[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12555 === (11))){
var inst_12529 = (state_12554[(2)]);
var state_12554__$1 = (function (){var statearr_12568 = state_12554;
(statearr_12568[(10)] = inst_12529);

return statearr_12568;
})();
var statearr_12569_12632 = state_12554__$1;
(statearr_12569_12632[(2)] = null);

(statearr_12569_12632[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12555 === (9))){
var state_12554__$1 = state_12554;
var statearr_12570_12633 = state_12554__$1;
(statearr_12570_12633[(2)] = null);

(statearr_12570_12633[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12555 === (5))){
var state_12554__$1 = state_12554;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12571_12634 = state_12554__$1;
(statearr_12571_12634[(1)] = (8));

} else {
var statearr_12572_12635 = state_12554__$1;
(statearr_12572_12635[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12555 === (14))){
var inst_12532 = (state_12554[(8)]);
var inst_12534 = (state_12554[(11)]);
var inst_12532__$1 = (state_12554[(2)]);
var inst_12533 = (inst_12532__$1 == null);
var inst_12534__$1 = cljs.core.not.call(null,inst_12533);
var state_12554__$1 = (function (){var statearr_12573 = state_12554;
(statearr_12573[(8)] = inst_12532__$1);

(statearr_12573[(11)] = inst_12534__$1);

return statearr_12573;
})();
if(inst_12534__$1){
var statearr_12574_12636 = state_12554__$1;
(statearr_12574_12636[(1)] = (15));

} else {
var statearr_12575_12637 = state_12554__$1;
(statearr_12575_12637[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12555 === (16))){
var inst_12534 = (state_12554[(11)]);
var state_12554__$1 = state_12554;
var statearr_12576_12638 = state_12554__$1;
(statearr_12576_12638[(2)] = inst_12534);

(statearr_12576_12638[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12555 === (10))){
var inst_12526 = (state_12554[(2)]);
var state_12554__$1 = state_12554;
var statearr_12577_12639 = state_12554__$1;
(statearr_12577_12639[(2)] = inst_12526);

(statearr_12577_12639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12555 === (18))){
var inst_12537 = (state_12554[(2)]);
var state_12554__$1 = state_12554;
var statearr_12578_12640 = state_12554__$1;
(statearr_12578_12640[(2)] = inst_12537);

(statearr_12578_12640[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12555 === (8))){
var inst_12523 = cljs.core.async.close_BANG_.call(null,to);
var state_12554__$1 = state_12554;
var statearr_12579_12641 = state_12554__$1;
(statearr_12579_12641[(2)] = inst_12523);

(statearr_12579_12641[(1)] = (10));


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
var statearr_12583 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12583[(0)] = state_machine__7372__auto__);

(statearr_12583[(1)] = (1));

return statearr_12583;
});
var state_machine__7372__auto____1 = (function (state_12554){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_12554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e12584){if((e12584 instanceof Object)){
var ex__7375__auto__ = e12584;
var statearr_12585_12642 = state_12554;
(statearr_12585_12642[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12643 = state_12554;
state_12554 = G__12643;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_12554){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_12554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto__,jobs,results,process,async))
})();
var state__7429__auto__ = (function (){var statearr_12586 = f__7428__auto__.call(null);
(statearr_12586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto__);

return statearr_12586;
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
var c__7427__auto___12744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7427__auto___12744,tc,fc){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (c__7427__auto___12744,tc,fc){
return (function (state_12719){
var state_val_12720 = (state_12719[(1)]);
if((state_val_12720 === (7))){
var inst_12715 = (state_12719[(2)]);
var state_12719__$1 = state_12719;
var statearr_12721_12745 = state_12719__$1;
(statearr_12721_12745[(2)] = inst_12715);

(statearr_12721_12745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12720 === (1))){
var state_12719__$1 = state_12719;
var statearr_12722_12746 = state_12719__$1;
(statearr_12722_12746[(2)] = null);

(statearr_12722_12746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12720 === (4))){
var inst_12696 = (state_12719[(7)]);
var inst_12696__$1 = (state_12719[(2)]);
var inst_12697 = (inst_12696__$1 == null);
var state_12719__$1 = (function (){var statearr_12723 = state_12719;
(statearr_12723[(7)] = inst_12696__$1);

return statearr_12723;
})();
if(cljs.core.truth_(inst_12697)){
var statearr_12724_12747 = state_12719__$1;
(statearr_12724_12747[(1)] = (5));

} else {
var statearr_12725_12748 = state_12719__$1;
(statearr_12725_12748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12720 === (13))){
var state_12719__$1 = state_12719;
var statearr_12726_12749 = state_12719__$1;
(statearr_12726_12749[(2)] = null);

(statearr_12726_12749[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12720 === (6))){
var inst_12696 = (state_12719[(7)]);
var inst_12702 = p.call(null,inst_12696);
var state_12719__$1 = state_12719;
if(cljs.core.truth_(inst_12702)){
var statearr_12727_12750 = state_12719__$1;
(statearr_12727_12750[(1)] = (9));

} else {
var statearr_12728_12751 = state_12719__$1;
(statearr_12728_12751[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12720 === (3))){
var inst_12717 = (state_12719[(2)]);
var state_12719__$1 = state_12719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12719__$1,inst_12717);
} else {
if((state_val_12720 === (12))){
var state_12719__$1 = state_12719;
var statearr_12729_12752 = state_12719__$1;
(statearr_12729_12752[(2)] = null);

(statearr_12729_12752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12720 === (2))){
var state_12719__$1 = state_12719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12719__$1,(4),ch);
} else {
if((state_val_12720 === (11))){
var inst_12696 = (state_12719[(7)]);
var inst_12706 = (state_12719[(2)]);
var state_12719__$1 = state_12719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12719__$1,(8),inst_12706,inst_12696);
} else {
if((state_val_12720 === (9))){
var state_12719__$1 = state_12719;
var statearr_12730_12753 = state_12719__$1;
(statearr_12730_12753[(2)] = tc);

(statearr_12730_12753[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12720 === (5))){
var inst_12699 = cljs.core.async.close_BANG_.call(null,tc);
var inst_12700 = cljs.core.async.close_BANG_.call(null,fc);
var state_12719__$1 = (function (){var statearr_12731 = state_12719;
(statearr_12731[(8)] = inst_12699);

return statearr_12731;
})();
var statearr_12732_12754 = state_12719__$1;
(statearr_12732_12754[(2)] = inst_12700);

(statearr_12732_12754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12720 === (14))){
var inst_12713 = (state_12719[(2)]);
var state_12719__$1 = state_12719;
var statearr_12733_12755 = state_12719__$1;
(statearr_12733_12755[(2)] = inst_12713);

(statearr_12733_12755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12720 === (10))){
var state_12719__$1 = state_12719;
var statearr_12734_12756 = state_12719__$1;
(statearr_12734_12756[(2)] = fc);

(statearr_12734_12756[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12720 === (8))){
var inst_12708 = (state_12719[(2)]);
var state_12719__$1 = state_12719;
if(cljs.core.truth_(inst_12708)){
var statearr_12735_12757 = state_12719__$1;
(statearr_12735_12757[(1)] = (12));

} else {
var statearr_12736_12758 = state_12719__$1;
(statearr_12736_12758[(1)] = (13));

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
});})(c__7427__auto___12744,tc,fc))
;
return ((function (switch__7371__auto__,c__7427__auto___12744,tc,fc){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_12740 = [null,null,null,null,null,null,null,null,null];
(statearr_12740[(0)] = state_machine__7372__auto__);

(statearr_12740[(1)] = (1));

return statearr_12740;
});
var state_machine__7372__auto____1 = (function (state_12719){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_12719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e12741){if((e12741 instanceof Object)){
var ex__7375__auto__ = e12741;
var statearr_12742_12759 = state_12719;
(statearr_12742_12759[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12760 = state_12719;
state_12719 = G__12760;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_12719){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_12719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto___12744,tc,fc))
})();
var state__7429__auto__ = (function (){var statearr_12743 = f__7428__auto__.call(null);
(statearr_12743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto___12744);

return statearr_12743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(c__7427__auto___12744,tc,fc))
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
return (function (state_12807){
var state_val_12808 = (state_12807[(1)]);
if((state_val_12808 === (7))){
var inst_12803 = (state_12807[(2)]);
var state_12807__$1 = state_12807;
var statearr_12809_12825 = state_12807__$1;
(statearr_12809_12825[(2)] = inst_12803);

(statearr_12809_12825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12808 === (6))){
var inst_12796 = (state_12807[(7)]);
var inst_12793 = (state_12807[(8)]);
var inst_12800 = f.call(null,inst_12793,inst_12796);
var inst_12793__$1 = inst_12800;
var state_12807__$1 = (function (){var statearr_12810 = state_12807;
(statearr_12810[(8)] = inst_12793__$1);

return statearr_12810;
})();
var statearr_12811_12826 = state_12807__$1;
(statearr_12811_12826[(2)] = null);

(statearr_12811_12826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12808 === (5))){
var inst_12793 = (state_12807[(8)]);
var state_12807__$1 = state_12807;
var statearr_12812_12827 = state_12807__$1;
(statearr_12812_12827[(2)] = inst_12793);

(statearr_12812_12827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12808 === (4))){
var inst_12796 = (state_12807[(7)]);
var inst_12796__$1 = (state_12807[(2)]);
var inst_12797 = (inst_12796__$1 == null);
var state_12807__$1 = (function (){var statearr_12813 = state_12807;
(statearr_12813[(7)] = inst_12796__$1);

return statearr_12813;
})();
if(cljs.core.truth_(inst_12797)){
var statearr_12814_12828 = state_12807__$1;
(statearr_12814_12828[(1)] = (5));

} else {
var statearr_12815_12829 = state_12807__$1;
(statearr_12815_12829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12808 === (3))){
var inst_12805 = (state_12807[(2)]);
var state_12807__$1 = state_12807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12807__$1,inst_12805);
} else {
if((state_val_12808 === (2))){
var state_12807__$1 = state_12807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12807__$1,(4),ch);
} else {
if((state_val_12808 === (1))){
var inst_12793 = init;
var state_12807__$1 = (function (){var statearr_12816 = state_12807;
(statearr_12816[(8)] = inst_12793);

return statearr_12816;
})();
var statearr_12817_12830 = state_12807__$1;
(statearr_12817_12830[(2)] = null);

(statearr_12817_12830[(1)] = (2));


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
var statearr_12821 = [null,null,null,null,null,null,null,null,null];
(statearr_12821[(0)] = state_machine__7372__auto__);

(statearr_12821[(1)] = (1));

return statearr_12821;
});
var state_machine__7372__auto____1 = (function (state_12807){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_12807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e12822){if((e12822 instanceof Object)){
var ex__7375__auto__ = e12822;
var statearr_12823_12831 = state_12807;
(statearr_12823_12831[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12832 = state_12807;
state_12807 = G__12832;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_12807){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_12807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto__))
})();
var state__7429__auto__ = (function (){var statearr_12824 = f__7428__auto__.call(null);
(statearr_12824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto__);

return statearr_12824;
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
return (function (state_12906){
var state_val_12907 = (state_12906[(1)]);
if((state_val_12907 === (7))){
var inst_12888 = (state_12906[(2)]);
var state_12906__$1 = state_12906;
var statearr_12908_12931 = state_12906__$1;
(statearr_12908_12931[(2)] = inst_12888);

(statearr_12908_12931[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (1))){
var inst_12882 = cljs.core.seq.call(null,coll);
var inst_12883 = inst_12882;
var state_12906__$1 = (function (){var statearr_12909 = state_12906;
(statearr_12909[(7)] = inst_12883);

return statearr_12909;
})();
var statearr_12910_12932 = state_12906__$1;
(statearr_12910_12932[(2)] = null);

(statearr_12910_12932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (4))){
var inst_12883 = (state_12906[(7)]);
var inst_12886 = cljs.core.first.call(null,inst_12883);
var state_12906__$1 = state_12906;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12906__$1,(7),ch,inst_12886);
} else {
if((state_val_12907 === (13))){
var inst_12900 = (state_12906[(2)]);
var state_12906__$1 = state_12906;
var statearr_12911_12933 = state_12906__$1;
(statearr_12911_12933[(2)] = inst_12900);

(statearr_12911_12933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (6))){
var inst_12891 = (state_12906[(2)]);
var state_12906__$1 = state_12906;
if(cljs.core.truth_(inst_12891)){
var statearr_12912_12934 = state_12906__$1;
(statearr_12912_12934[(1)] = (8));

} else {
var statearr_12913_12935 = state_12906__$1;
(statearr_12913_12935[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (3))){
var inst_12904 = (state_12906[(2)]);
var state_12906__$1 = state_12906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12906__$1,inst_12904);
} else {
if((state_val_12907 === (12))){
var state_12906__$1 = state_12906;
var statearr_12914_12936 = state_12906__$1;
(statearr_12914_12936[(2)] = null);

(statearr_12914_12936[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (2))){
var inst_12883 = (state_12906[(7)]);
var state_12906__$1 = state_12906;
if(cljs.core.truth_(inst_12883)){
var statearr_12915_12937 = state_12906__$1;
(statearr_12915_12937[(1)] = (4));

} else {
var statearr_12916_12938 = state_12906__$1;
(statearr_12916_12938[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (11))){
var inst_12897 = cljs.core.async.close_BANG_.call(null,ch);
var state_12906__$1 = state_12906;
var statearr_12917_12939 = state_12906__$1;
(statearr_12917_12939[(2)] = inst_12897);

(statearr_12917_12939[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (9))){
var state_12906__$1 = state_12906;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12918_12940 = state_12906__$1;
(statearr_12918_12940[(1)] = (11));

} else {
var statearr_12919_12941 = state_12906__$1;
(statearr_12919_12941[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (5))){
var inst_12883 = (state_12906[(7)]);
var state_12906__$1 = state_12906;
var statearr_12920_12942 = state_12906__$1;
(statearr_12920_12942[(2)] = inst_12883);

(statearr_12920_12942[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (10))){
var inst_12902 = (state_12906[(2)]);
var state_12906__$1 = state_12906;
var statearr_12921_12943 = state_12906__$1;
(statearr_12921_12943[(2)] = inst_12902);

(statearr_12921_12943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (8))){
var inst_12883 = (state_12906[(7)]);
var inst_12893 = cljs.core.next.call(null,inst_12883);
var inst_12883__$1 = inst_12893;
var state_12906__$1 = (function (){var statearr_12922 = state_12906;
(statearr_12922[(7)] = inst_12883__$1);

return statearr_12922;
})();
var statearr_12923_12944 = state_12906__$1;
(statearr_12923_12944[(2)] = null);

(statearr_12923_12944[(1)] = (2));


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
var statearr_12927 = [null,null,null,null,null,null,null,null];
(statearr_12927[(0)] = state_machine__7372__auto__);

(statearr_12927[(1)] = (1));

return statearr_12927;
});
var state_machine__7372__auto____1 = (function (state_12906){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_12906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e12928){if((e12928 instanceof Object)){
var ex__7375__auto__ = e12928;
var statearr_12929_12945 = state_12906;
(statearr_12929_12945[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12946 = state_12906;
state_12906 = G__12946;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_12906){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_12906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto__))
})();
var state__7429__auto__ = (function (){var statearr_12930 = f__7428__auto__.call(null);
(statearr_12930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto__);

return statearr_12930;
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

cljs.core.async.Mux = (function (){var obj12948 = {};
return obj12948;
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


cljs.core.async.Mult = (function (){var obj12950 = {};
return obj12950;
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
if(typeof cljs.core.async.t13172 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13172 = (function (cs,ch,mult,meta13173){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13173 = meta13173;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13172.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t13172.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t13172.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t13172.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t13172.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t13172.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t13172.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13174){
var self__ = this;
var _13174__$1 = this;
return self__.meta13173;
});})(cs))
;

cljs.core.async.t13172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13174,meta13173__$1){
var self__ = this;
var _13174__$1 = this;
return (new cljs.core.async.t13172(self__.cs,self__.ch,self__.mult,meta13173__$1));
});})(cs))
;

cljs.core.async.t13172.cljs$lang$type = true;

cljs.core.async.t13172.cljs$lang$ctorStr = "cljs.core.async/t13172";

cljs.core.async.t13172.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t13172");
});})(cs))
;

cljs.core.async.__GT_t13172 = ((function (cs){
return (function __GT_t13172(cs__$1,ch__$1,mult__$1,meta13173){
return (new cljs.core.async.t13172(cs__$1,ch__$1,mult__$1,meta13173));
});})(cs))
;

}

return (new cljs.core.async.t13172(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
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
var c__7427__auto___13393 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7427__auto___13393,cs,m,dchan,dctr,done){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (c__7427__auto___13393,cs,m,dchan,dctr,done){
return (function (state_13305){
var state_val_13306 = (state_13305[(1)]);
if((state_val_13306 === (7))){
var inst_13301 = (state_13305[(2)]);
var state_13305__$1 = state_13305;
var statearr_13307_13394 = state_13305__$1;
(statearr_13307_13394[(2)] = inst_13301);

(statearr_13307_13394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (20))){
var inst_13206 = (state_13305[(7)]);
var inst_13216 = cljs.core.first.call(null,inst_13206);
var inst_13217 = cljs.core.nth.call(null,inst_13216,(0),null);
var inst_13218 = cljs.core.nth.call(null,inst_13216,(1),null);
var state_13305__$1 = (function (){var statearr_13308 = state_13305;
(statearr_13308[(8)] = inst_13217);

return statearr_13308;
})();
if(cljs.core.truth_(inst_13218)){
var statearr_13309_13395 = state_13305__$1;
(statearr_13309_13395[(1)] = (22));

} else {
var statearr_13310_13396 = state_13305__$1;
(statearr_13310_13396[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (27))){
var inst_13246 = (state_13305[(9)]);
var inst_13248 = (state_13305[(10)]);
var inst_13253 = (state_13305[(11)]);
var inst_13177 = (state_13305[(12)]);
var inst_13253__$1 = cljs.core._nth.call(null,inst_13246,inst_13248);
var inst_13254 = cljs.core.async.put_BANG_.call(null,inst_13253__$1,inst_13177,done);
var state_13305__$1 = (function (){var statearr_13311 = state_13305;
(statearr_13311[(11)] = inst_13253__$1);

return statearr_13311;
})();
if(cljs.core.truth_(inst_13254)){
var statearr_13312_13397 = state_13305__$1;
(statearr_13312_13397[(1)] = (30));

} else {
var statearr_13313_13398 = state_13305__$1;
(statearr_13313_13398[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (1))){
var state_13305__$1 = state_13305;
var statearr_13314_13399 = state_13305__$1;
(statearr_13314_13399[(2)] = null);

(statearr_13314_13399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (24))){
var inst_13206 = (state_13305[(7)]);
var inst_13223 = (state_13305[(2)]);
var inst_13224 = cljs.core.next.call(null,inst_13206);
var inst_13186 = inst_13224;
var inst_13187 = null;
var inst_13188 = (0);
var inst_13189 = (0);
var state_13305__$1 = (function (){var statearr_13315 = state_13305;
(statearr_13315[(13)] = inst_13189);

(statearr_13315[(14)] = inst_13186);

(statearr_13315[(15)] = inst_13188);

(statearr_13315[(16)] = inst_13223);

(statearr_13315[(17)] = inst_13187);

return statearr_13315;
})();
var statearr_13316_13400 = state_13305__$1;
(statearr_13316_13400[(2)] = null);

(statearr_13316_13400[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (39))){
var state_13305__$1 = state_13305;
var statearr_13320_13401 = state_13305__$1;
(statearr_13320_13401[(2)] = null);

(statearr_13320_13401[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (4))){
var inst_13177 = (state_13305[(12)]);
var inst_13177__$1 = (state_13305[(2)]);
var inst_13178 = (inst_13177__$1 == null);
var state_13305__$1 = (function (){var statearr_13321 = state_13305;
(statearr_13321[(12)] = inst_13177__$1);

return statearr_13321;
})();
if(cljs.core.truth_(inst_13178)){
var statearr_13322_13402 = state_13305__$1;
(statearr_13322_13402[(1)] = (5));

} else {
var statearr_13323_13403 = state_13305__$1;
(statearr_13323_13403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (15))){
var inst_13189 = (state_13305[(13)]);
var inst_13186 = (state_13305[(14)]);
var inst_13188 = (state_13305[(15)]);
var inst_13187 = (state_13305[(17)]);
var inst_13202 = (state_13305[(2)]);
var inst_13203 = (inst_13189 + (1));
var tmp13317 = inst_13186;
var tmp13318 = inst_13188;
var tmp13319 = inst_13187;
var inst_13186__$1 = tmp13317;
var inst_13187__$1 = tmp13319;
var inst_13188__$1 = tmp13318;
var inst_13189__$1 = inst_13203;
var state_13305__$1 = (function (){var statearr_13324 = state_13305;
(statearr_13324[(13)] = inst_13189__$1);

(statearr_13324[(14)] = inst_13186__$1);

(statearr_13324[(15)] = inst_13188__$1);

(statearr_13324[(17)] = inst_13187__$1);

(statearr_13324[(18)] = inst_13202);

return statearr_13324;
})();
var statearr_13325_13404 = state_13305__$1;
(statearr_13325_13404[(2)] = null);

(statearr_13325_13404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (21))){
var inst_13227 = (state_13305[(2)]);
var state_13305__$1 = state_13305;
var statearr_13329_13405 = state_13305__$1;
(statearr_13329_13405[(2)] = inst_13227);

(statearr_13329_13405[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (31))){
var inst_13253 = (state_13305[(11)]);
var inst_13257 = done.call(null,null);
var inst_13258 = cljs.core.async.untap_STAR_.call(null,m,inst_13253);
var state_13305__$1 = (function (){var statearr_13330 = state_13305;
(statearr_13330[(19)] = inst_13257);

return statearr_13330;
})();
var statearr_13331_13406 = state_13305__$1;
(statearr_13331_13406[(2)] = inst_13258);

(statearr_13331_13406[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (32))){
var inst_13246 = (state_13305[(9)]);
var inst_13247 = (state_13305[(20)]);
var inst_13248 = (state_13305[(10)]);
var inst_13245 = (state_13305[(21)]);
var inst_13260 = (state_13305[(2)]);
var inst_13261 = (inst_13248 + (1));
var tmp13326 = inst_13246;
var tmp13327 = inst_13247;
var tmp13328 = inst_13245;
var inst_13245__$1 = tmp13328;
var inst_13246__$1 = tmp13326;
var inst_13247__$1 = tmp13327;
var inst_13248__$1 = inst_13261;
var state_13305__$1 = (function (){var statearr_13332 = state_13305;
(statearr_13332[(9)] = inst_13246__$1);

(statearr_13332[(20)] = inst_13247__$1);

(statearr_13332[(10)] = inst_13248__$1);

(statearr_13332[(22)] = inst_13260);

(statearr_13332[(21)] = inst_13245__$1);

return statearr_13332;
})();
var statearr_13333_13407 = state_13305__$1;
(statearr_13333_13407[(2)] = null);

(statearr_13333_13407[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (40))){
var inst_13273 = (state_13305[(23)]);
var inst_13277 = done.call(null,null);
var inst_13278 = cljs.core.async.untap_STAR_.call(null,m,inst_13273);
var state_13305__$1 = (function (){var statearr_13334 = state_13305;
(statearr_13334[(24)] = inst_13277);

return statearr_13334;
})();
var statearr_13335_13408 = state_13305__$1;
(statearr_13335_13408[(2)] = inst_13278);

(statearr_13335_13408[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (33))){
var inst_13264 = (state_13305[(25)]);
var inst_13266 = cljs.core.chunked_seq_QMARK_.call(null,inst_13264);
var state_13305__$1 = state_13305;
if(inst_13266){
var statearr_13336_13409 = state_13305__$1;
(statearr_13336_13409[(1)] = (36));

} else {
var statearr_13337_13410 = state_13305__$1;
(statearr_13337_13410[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (13))){
var inst_13196 = (state_13305[(26)]);
var inst_13199 = cljs.core.async.close_BANG_.call(null,inst_13196);
var state_13305__$1 = state_13305;
var statearr_13338_13411 = state_13305__$1;
(statearr_13338_13411[(2)] = inst_13199);

(statearr_13338_13411[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (22))){
var inst_13217 = (state_13305[(8)]);
var inst_13220 = cljs.core.async.close_BANG_.call(null,inst_13217);
var state_13305__$1 = state_13305;
var statearr_13339_13412 = state_13305__$1;
(statearr_13339_13412[(2)] = inst_13220);

(statearr_13339_13412[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (36))){
var inst_13264 = (state_13305[(25)]);
var inst_13268 = cljs.core.chunk_first.call(null,inst_13264);
var inst_13269 = cljs.core.chunk_rest.call(null,inst_13264);
var inst_13270 = cljs.core.count.call(null,inst_13268);
var inst_13245 = inst_13269;
var inst_13246 = inst_13268;
var inst_13247 = inst_13270;
var inst_13248 = (0);
var state_13305__$1 = (function (){var statearr_13340 = state_13305;
(statearr_13340[(9)] = inst_13246);

(statearr_13340[(20)] = inst_13247);

(statearr_13340[(10)] = inst_13248);

(statearr_13340[(21)] = inst_13245);

return statearr_13340;
})();
var statearr_13341_13413 = state_13305__$1;
(statearr_13341_13413[(2)] = null);

(statearr_13341_13413[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (41))){
var inst_13264 = (state_13305[(25)]);
var inst_13280 = (state_13305[(2)]);
var inst_13281 = cljs.core.next.call(null,inst_13264);
var inst_13245 = inst_13281;
var inst_13246 = null;
var inst_13247 = (0);
var inst_13248 = (0);
var state_13305__$1 = (function (){var statearr_13342 = state_13305;
(statearr_13342[(9)] = inst_13246);

(statearr_13342[(20)] = inst_13247);

(statearr_13342[(10)] = inst_13248);

(statearr_13342[(27)] = inst_13280);

(statearr_13342[(21)] = inst_13245);

return statearr_13342;
})();
var statearr_13343_13414 = state_13305__$1;
(statearr_13343_13414[(2)] = null);

(statearr_13343_13414[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (43))){
var state_13305__$1 = state_13305;
var statearr_13344_13415 = state_13305__$1;
(statearr_13344_13415[(2)] = null);

(statearr_13344_13415[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (29))){
var inst_13289 = (state_13305[(2)]);
var state_13305__$1 = state_13305;
var statearr_13345_13416 = state_13305__$1;
(statearr_13345_13416[(2)] = inst_13289);

(statearr_13345_13416[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (44))){
var inst_13298 = (state_13305[(2)]);
var state_13305__$1 = (function (){var statearr_13346 = state_13305;
(statearr_13346[(28)] = inst_13298);

return statearr_13346;
})();
var statearr_13347_13417 = state_13305__$1;
(statearr_13347_13417[(2)] = null);

(statearr_13347_13417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (6))){
var inst_13237 = (state_13305[(29)]);
var inst_13236 = cljs.core.deref.call(null,cs);
var inst_13237__$1 = cljs.core.keys.call(null,inst_13236);
var inst_13238 = cljs.core.count.call(null,inst_13237__$1);
var inst_13239 = cljs.core.reset_BANG_.call(null,dctr,inst_13238);
var inst_13244 = cljs.core.seq.call(null,inst_13237__$1);
var inst_13245 = inst_13244;
var inst_13246 = null;
var inst_13247 = (0);
var inst_13248 = (0);
var state_13305__$1 = (function (){var statearr_13348 = state_13305;
(statearr_13348[(30)] = inst_13239);

(statearr_13348[(9)] = inst_13246);

(statearr_13348[(20)] = inst_13247);

(statearr_13348[(29)] = inst_13237__$1);

(statearr_13348[(10)] = inst_13248);

(statearr_13348[(21)] = inst_13245);

return statearr_13348;
})();
var statearr_13349_13418 = state_13305__$1;
(statearr_13349_13418[(2)] = null);

(statearr_13349_13418[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (28))){
var inst_13264 = (state_13305[(25)]);
var inst_13245 = (state_13305[(21)]);
var inst_13264__$1 = cljs.core.seq.call(null,inst_13245);
var state_13305__$1 = (function (){var statearr_13350 = state_13305;
(statearr_13350[(25)] = inst_13264__$1);

return statearr_13350;
})();
if(inst_13264__$1){
var statearr_13351_13419 = state_13305__$1;
(statearr_13351_13419[(1)] = (33));

} else {
var statearr_13352_13420 = state_13305__$1;
(statearr_13352_13420[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (25))){
var inst_13247 = (state_13305[(20)]);
var inst_13248 = (state_13305[(10)]);
var inst_13250 = (inst_13248 < inst_13247);
var inst_13251 = inst_13250;
var state_13305__$1 = state_13305;
if(cljs.core.truth_(inst_13251)){
var statearr_13353_13421 = state_13305__$1;
(statearr_13353_13421[(1)] = (27));

} else {
var statearr_13354_13422 = state_13305__$1;
(statearr_13354_13422[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (34))){
var state_13305__$1 = state_13305;
var statearr_13355_13423 = state_13305__$1;
(statearr_13355_13423[(2)] = null);

(statearr_13355_13423[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (17))){
var state_13305__$1 = state_13305;
var statearr_13356_13424 = state_13305__$1;
(statearr_13356_13424[(2)] = null);

(statearr_13356_13424[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (3))){
var inst_13303 = (state_13305[(2)]);
var state_13305__$1 = state_13305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13305__$1,inst_13303);
} else {
if((state_val_13306 === (12))){
var inst_13232 = (state_13305[(2)]);
var state_13305__$1 = state_13305;
var statearr_13357_13425 = state_13305__$1;
(statearr_13357_13425[(2)] = inst_13232);

(statearr_13357_13425[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (2))){
var state_13305__$1 = state_13305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13305__$1,(4),ch);
} else {
if((state_val_13306 === (23))){
var state_13305__$1 = state_13305;
var statearr_13358_13426 = state_13305__$1;
(statearr_13358_13426[(2)] = null);

(statearr_13358_13426[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (35))){
var inst_13287 = (state_13305[(2)]);
var state_13305__$1 = state_13305;
var statearr_13359_13427 = state_13305__$1;
(statearr_13359_13427[(2)] = inst_13287);

(statearr_13359_13427[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (19))){
var inst_13206 = (state_13305[(7)]);
var inst_13210 = cljs.core.chunk_first.call(null,inst_13206);
var inst_13211 = cljs.core.chunk_rest.call(null,inst_13206);
var inst_13212 = cljs.core.count.call(null,inst_13210);
var inst_13186 = inst_13211;
var inst_13187 = inst_13210;
var inst_13188 = inst_13212;
var inst_13189 = (0);
var state_13305__$1 = (function (){var statearr_13360 = state_13305;
(statearr_13360[(13)] = inst_13189);

(statearr_13360[(14)] = inst_13186);

(statearr_13360[(15)] = inst_13188);

(statearr_13360[(17)] = inst_13187);

return statearr_13360;
})();
var statearr_13361_13428 = state_13305__$1;
(statearr_13361_13428[(2)] = null);

(statearr_13361_13428[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (11))){
var inst_13186 = (state_13305[(14)]);
var inst_13206 = (state_13305[(7)]);
var inst_13206__$1 = cljs.core.seq.call(null,inst_13186);
var state_13305__$1 = (function (){var statearr_13362 = state_13305;
(statearr_13362[(7)] = inst_13206__$1);

return statearr_13362;
})();
if(inst_13206__$1){
var statearr_13363_13429 = state_13305__$1;
(statearr_13363_13429[(1)] = (16));

} else {
var statearr_13364_13430 = state_13305__$1;
(statearr_13364_13430[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (9))){
var inst_13234 = (state_13305[(2)]);
var state_13305__$1 = state_13305;
var statearr_13365_13431 = state_13305__$1;
(statearr_13365_13431[(2)] = inst_13234);

(statearr_13365_13431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (5))){
var inst_13184 = cljs.core.deref.call(null,cs);
var inst_13185 = cljs.core.seq.call(null,inst_13184);
var inst_13186 = inst_13185;
var inst_13187 = null;
var inst_13188 = (0);
var inst_13189 = (0);
var state_13305__$1 = (function (){var statearr_13366 = state_13305;
(statearr_13366[(13)] = inst_13189);

(statearr_13366[(14)] = inst_13186);

(statearr_13366[(15)] = inst_13188);

(statearr_13366[(17)] = inst_13187);

return statearr_13366;
})();
var statearr_13367_13432 = state_13305__$1;
(statearr_13367_13432[(2)] = null);

(statearr_13367_13432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (14))){
var state_13305__$1 = state_13305;
var statearr_13368_13433 = state_13305__$1;
(statearr_13368_13433[(2)] = null);

(statearr_13368_13433[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (45))){
var inst_13295 = (state_13305[(2)]);
var state_13305__$1 = state_13305;
var statearr_13369_13434 = state_13305__$1;
(statearr_13369_13434[(2)] = inst_13295);

(statearr_13369_13434[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (26))){
var inst_13237 = (state_13305[(29)]);
var inst_13291 = (state_13305[(2)]);
var inst_13292 = cljs.core.seq.call(null,inst_13237);
var state_13305__$1 = (function (){var statearr_13370 = state_13305;
(statearr_13370[(31)] = inst_13291);

return statearr_13370;
})();
if(inst_13292){
var statearr_13371_13435 = state_13305__$1;
(statearr_13371_13435[(1)] = (42));

} else {
var statearr_13372_13436 = state_13305__$1;
(statearr_13372_13436[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (16))){
var inst_13206 = (state_13305[(7)]);
var inst_13208 = cljs.core.chunked_seq_QMARK_.call(null,inst_13206);
var state_13305__$1 = state_13305;
if(inst_13208){
var statearr_13373_13437 = state_13305__$1;
(statearr_13373_13437[(1)] = (19));

} else {
var statearr_13374_13438 = state_13305__$1;
(statearr_13374_13438[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (38))){
var inst_13284 = (state_13305[(2)]);
var state_13305__$1 = state_13305;
var statearr_13375_13439 = state_13305__$1;
(statearr_13375_13439[(2)] = inst_13284);

(statearr_13375_13439[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (30))){
var state_13305__$1 = state_13305;
var statearr_13376_13440 = state_13305__$1;
(statearr_13376_13440[(2)] = null);

(statearr_13376_13440[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (10))){
var inst_13189 = (state_13305[(13)]);
var inst_13187 = (state_13305[(17)]);
var inst_13195 = cljs.core._nth.call(null,inst_13187,inst_13189);
var inst_13196 = cljs.core.nth.call(null,inst_13195,(0),null);
var inst_13197 = cljs.core.nth.call(null,inst_13195,(1),null);
var state_13305__$1 = (function (){var statearr_13377 = state_13305;
(statearr_13377[(26)] = inst_13196);

return statearr_13377;
})();
if(cljs.core.truth_(inst_13197)){
var statearr_13378_13441 = state_13305__$1;
(statearr_13378_13441[(1)] = (13));

} else {
var statearr_13379_13442 = state_13305__$1;
(statearr_13379_13442[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (18))){
var inst_13230 = (state_13305[(2)]);
var state_13305__$1 = state_13305;
var statearr_13380_13443 = state_13305__$1;
(statearr_13380_13443[(2)] = inst_13230);

(statearr_13380_13443[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (42))){
var state_13305__$1 = state_13305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13305__$1,(45),dchan);
} else {
if((state_val_13306 === (37))){
var inst_13273 = (state_13305[(23)]);
var inst_13264 = (state_13305[(25)]);
var inst_13177 = (state_13305[(12)]);
var inst_13273__$1 = cljs.core.first.call(null,inst_13264);
var inst_13274 = cljs.core.async.put_BANG_.call(null,inst_13273__$1,inst_13177,done);
var state_13305__$1 = (function (){var statearr_13381 = state_13305;
(statearr_13381[(23)] = inst_13273__$1);

return statearr_13381;
})();
if(cljs.core.truth_(inst_13274)){
var statearr_13382_13444 = state_13305__$1;
(statearr_13382_13444[(1)] = (39));

} else {
var statearr_13383_13445 = state_13305__$1;
(statearr_13383_13445[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13306 === (8))){
var inst_13189 = (state_13305[(13)]);
var inst_13188 = (state_13305[(15)]);
var inst_13191 = (inst_13189 < inst_13188);
var inst_13192 = inst_13191;
var state_13305__$1 = state_13305;
if(cljs.core.truth_(inst_13192)){
var statearr_13384_13446 = state_13305__$1;
(statearr_13384_13446[(1)] = (10));

} else {
var statearr_13385_13447 = state_13305__$1;
(statearr_13385_13447[(1)] = (11));

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
});})(c__7427__auto___13393,cs,m,dchan,dctr,done))
;
return ((function (switch__7371__auto__,c__7427__auto___13393,cs,m,dchan,dctr,done){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_13389 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13389[(0)] = state_machine__7372__auto__);

(statearr_13389[(1)] = (1));

return statearr_13389;
});
var state_machine__7372__auto____1 = (function (state_13305){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_13305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e13390){if((e13390 instanceof Object)){
var ex__7375__auto__ = e13390;
var statearr_13391_13448 = state_13305;
(statearr_13391_13448[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13449 = state_13305;
state_13305 = G__13449;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_13305){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_13305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto___13393,cs,m,dchan,dctr,done))
})();
var state__7429__auto__ = (function (){var statearr_13392 = f__7428__auto__.call(null);
(statearr_13392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto___13393);

return statearr_13392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(c__7427__auto___13393,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj13451 = {};
return obj13451;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__13452){
var map__13457 = p__13452;
var map__13457__$1 = ((cljs.core.seq_QMARK_.call(null,map__13457))?cljs.core.apply.call(null,cljs.core.hash_map,map__13457):map__13457);
var opts = map__13457__$1;
var statearr_13458_13461 = state;
(statearr_13458_13461[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__13457,map__13457__$1,opts){
return (function (val){
var statearr_13459_13462 = state;
(statearr_13459_13462[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13457,map__13457__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_13460_13463 = state;
(statearr_13460_13463[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__13452 = null;
if (arguments.length > 3) {
  p__13452 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__13452);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__13464){
var state = cljs.core.first(arglist__13464);
arglist__13464 = cljs.core.next(arglist__13464);
var cont_block = cljs.core.first(arglist__13464);
arglist__13464 = cljs.core.next(arglist__13464);
var ports = cljs.core.first(arglist__13464);
var p__13452 = cljs.core.rest(arglist__13464);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__13452);
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
if(typeof cljs.core.async.t13584 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13584 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13585){
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
this.meta13585 = meta13585;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13584.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t13584.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13584.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13584.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13584.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13584.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t13584.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t13584.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13584.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13586){
var self__ = this;
var _13586__$1 = this;
return self__.meta13585;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13586,meta13585__$1){
var self__ = this;
var _13586__$1 = this;
return (new cljs.core.async.t13584(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13585__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13584.cljs$lang$type = true;

cljs.core.async.t13584.cljs$lang$ctorStr = "cljs.core.async/t13584";

cljs.core.async.t13584.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t13584");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t13584 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13584(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13585){
return (new cljs.core.async.t13584(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13585));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t13584(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
})()
;
var c__7427__auto___13703 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7427__auto___13703,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (c__7427__auto___13703,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13656){
var state_val_13657 = (state_13656[(1)]);
if((state_val_13657 === (7))){
var inst_13600 = (state_13656[(7)]);
var inst_13605 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13600);
var state_13656__$1 = state_13656;
var statearr_13658_13704 = state_13656__$1;
(statearr_13658_13704[(2)] = inst_13605);

(statearr_13658_13704[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13657 === (20))){
var inst_13615 = (state_13656[(8)]);
var state_13656__$1 = state_13656;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13656__$1,(23),out,inst_13615);
} else {
if((state_val_13657 === (1))){
var inst_13590 = (state_13656[(9)]);
var inst_13590__$1 = calc_state.call(null);
var inst_13591 = cljs.core.seq_QMARK_.call(null,inst_13590__$1);
var state_13656__$1 = (function (){var statearr_13659 = state_13656;
(statearr_13659[(9)] = inst_13590__$1);

return statearr_13659;
})();
if(inst_13591){
var statearr_13660_13705 = state_13656__$1;
(statearr_13660_13705[(1)] = (2));

} else {
var statearr_13661_13706 = state_13656__$1;
(statearr_13661_13706[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13657 === (24))){
var inst_13608 = (state_13656[(10)]);
var inst_13600 = inst_13608;
var state_13656__$1 = (function (){var statearr_13662 = state_13656;
(statearr_13662[(7)] = inst_13600);

return statearr_13662;
})();
var statearr_13663_13707 = state_13656__$1;
(statearr_13663_13707[(2)] = null);

(statearr_13663_13707[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13657 === (4))){
var inst_13590 = (state_13656[(9)]);
var inst_13596 = (state_13656[(2)]);
var inst_13597 = cljs.core.get.call(null,inst_13596,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13598 = cljs.core.get.call(null,inst_13596,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13599 = cljs.core.get.call(null,inst_13596,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13600 = inst_13590;
var state_13656__$1 = (function (){var statearr_13664 = state_13656;
(statearr_13664[(11)] = inst_13597);

(statearr_13664[(12)] = inst_13599);

(statearr_13664[(7)] = inst_13600);

(statearr_13664[(13)] = inst_13598);

return statearr_13664;
})();
var statearr_13665_13708 = state_13656__$1;
(statearr_13665_13708[(2)] = null);

(statearr_13665_13708[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13657 === (15))){
var state_13656__$1 = state_13656;
var statearr_13666_13709 = state_13656__$1;
(statearr_13666_13709[(2)] = null);

(statearr_13666_13709[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13657 === (21))){
var inst_13608 = (state_13656[(10)]);
var inst_13600 = inst_13608;
var state_13656__$1 = (function (){var statearr_13667 = state_13656;
(statearr_13667[(7)] = inst_13600);

return statearr_13667;
})();
var statearr_13668_13710 = state_13656__$1;
(statearr_13668_13710[(2)] = null);

(statearr_13668_13710[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13657 === (13))){
var inst_13652 = (state_13656[(2)]);
var state_13656__$1 = state_13656;
var statearr_13669_13711 = state_13656__$1;
(statearr_13669_13711[(2)] = inst_13652);

(statearr_13669_13711[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13657 === (22))){
var inst_13650 = (state_13656[(2)]);
var state_13656__$1 = state_13656;
var statearr_13670_13712 = state_13656__$1;
(statearr_13670_13712[(2)] = inst_13650);

(statearr_13670_13712[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13657 === (6))){
var inst_13654 = (state_13656[(2)]);
var state_13656__$1 = state_13656;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13656__$1,inst_13654);
} else {
if((state_val_13657 === (25))){
var state_13656__$1 = state_13656;
var statearr_13671_13713 = state_13656__$1;
(statearr_13671_13713[(2)] = null);

(statearr_13671_13713[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13657 === (17))){
var inst_13630 = (state_13656[(14)]);
var state_13656__$1 = state_13656;
var statearr_13672_13714 = state_13656__$1;
(statearr_13672_13714[(2)] = inst_13630);

(statearr_13672_13714[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13657 === (3))){
var inst_13590 = (state_13656[(9)]);
var state_13656__$1 = state_13656;
var statearr_13673_13715 = state_13656__$1;
(statearr_13673_13715[(2)] = inst_13590);

(statearr_13673_13715[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13657 === (12))){
var inst_13630 = (state_13656[(14)]);
var inst_13616 = (state_13656[(15)]);
var inst_13611 = (state_13656[(16)]);
var inst_13630__$1 = inst_13611.call(null,inst_13616);
var state_13656__$1 = (function (){var statearr_13674 = state_13656;
(statearr_13674[(14)] = inst_13630__$1);

return statearr_13674;
})();
if(cljs.core.truth_(inst_13630__$1)){
var statearr_13675_13716 = state_13656__$1;
(statearr_13675_13716[(1)] = (17));

} else {
var statearr_13676_13717 = state_13656__$1;
(statearr_13676_13717[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13657 === (2))){
var inst_13590 = (state_13656[(9)]);
var inst_13593 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13590);
var state_13656__$1 = state_13656;
var statearr_13677_13718 = state_13656__$1;
(statearr_13677_13718[(2)] = inst_13593);

(statearr_13677_13718[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13657 === (23))){
var inst_13641 = (state_13656[(2)]);
var state_13656__$1 = state_13656;
if(cljs.core.truth_(inst_13641)){
var statearr_13678_13719 = state_13656__$1;
(statearr_13678_13719[(1)] = (24));

} else {
var statearr_13679_13720 = state_13656__$1;
(statearr_13679_13720[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13657 === (19))){
var inst_13638 = (state_13656[(2)]);
var state_13656__$1 = state_13656;
if(cljs.core.truth_(inst_13638)){
var statearr_13680_13721 = state_13656__$1;
(statearr_13680_13721[(1)] = (20));

} else {
var statearr_13681_13722 = state_13656__$1;
(statearr_13681_13722[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13657 === (11))){
var inst_13615 = (state_13656[(8)]);
var inst_13621 = (inst_13615 == null);
var state_13656__$1 = state_13656;
if(cljs.core.truth_(inst_13621)){
var statearr_13682_13723 = state_13656__$1;
(statearr_13682_13723[(1)] = (14));

} else {
var statearr_13683_13724 = state_13656__$1;
(statearr_13683_13724[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13657 === (9))){
var inst_13608 = (state_13656[(10)]);
var inst_13608__$1 = (state_13656[(2)]);
var inst_13609 = cljs.core.get.call(null,inst_13608__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13610 = cljs.core.get.call(null,inst_13608__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13611 = cljs.core.get.call(null,inst_13608__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_13656__$1 = (function (){var statearr_13684 = state_13656;
(statearr_13684[(17)] = inst_13610);

(statearr_13684[(16)] = inst_13611);

(statearr_13684[(10)] = inst_13608__$1);

return statearr_13684;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_13656__$1,(10),inst_13609);
} else {
if((state_val_13657 === (5))){
var inst_13600 = (state_13656[(7)]);
var inst_13603 = cljs.core.seq_QMARK_.call(null,inst_13600);
var state_13656__$1 = state_13656;
if(inst_13603){
var statearr_13685_13725 = state_13656__$1;
(statearr_13685_13725[(1)] = (7));

} else {
var statearr_13686_13726 = state_13656__$1;
(statearr_13686_13726[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13657 === (14))){
var inst_13616 = (state_13656[(15)]);
var inst_13623 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13616);
var state_13656__$1 = state_13656;
var statearr_13687_13727 = state_13656__$1;
(statearr_13687_13727[(2)] = inst_13623);

(statearr_13687_13727[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13657 === (26))){
var inst_13646 = (state_13656[(2)]);
var state_13656__$1 = state_13656;
var statearr_13688_13728 = state_13656__$1;
(statearr_13688_13728[(2)] = inst_13646);

(statearr_13688_13728[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13657 === (16))){
var inst_13626 = (state_13656[(2)]);
var inst_13627 = calc_state.call(null);
var inst_13600 = inst_13627;
var state_13656__$1 = (function (){var statearr_13689 = state_13656;
(statearr_13689[(18)] = inst_13626);

(statearr_13689[(7)] = inst_13600);

return statearr_13689;
})();
var statearr_13690_13729 = state_13656__$1;
(statearr_13690_13729[(2)] = null);

(statearr_13690_13729[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13657 === (10))){
var inst_13615 = (state_13656[(8)]);
var inst_13616 = (state_13656[(15)]);
var inst_13614 = (state_13656[(2)]);
var inst_13615__$1 = cljs.core.nth.call(null,inst_13614,(0),null);
var inst_13616__$1 = cljs.core.nth.call(null,inst_13614,(1),null);
var inst_13617 = (inst_13615__$1 == null);
var inst_13618 = cljs.core._EQ_.call(null,inst_13616__$1,change);
var inst_13619 = (inst_13617) || (inst_13618);
var state_13656__$1 = (function (){var statearr_13691 = state_13656;
(statearr_13691[(8)] = inst_13615__$1);

(statearr_13691[(15)] = inst_13616__$1);

return statearr_13691;
})();
if(cljs.core.truth_(inst_13619)){
var statearr_13692_13730 = state_13656__$1;
(statearr_13692_13730[(1)] = (11));

} else {
var statearr_13693_13731 = state_13656__$1;
(statearr_13693_13731[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13657 === (18))){
var inst_13616 = (state_13656[(15)]);
var inst_13610 = (state_13656[(17)]);
var inst_13611 = (state_13656[(16)]);
var inst_13633 = cljs.core.empty_QMARK_.call(null,inst_13611);
var inst_13634 = inst_13610.call(null,inst_13616);
var inst_13635 = cljs.core.not.call(null,inst_13634);
var inst_13636 = (inst_13633) && (inst_13635);
var state_13656__$1 = state_13656;
var statearr_13694_13732 = state_13656__$1;
(statearr_13694_13732[(2)] = inst_13636);

(statearr_13694_13732[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13657 === (8))){
var inst_13600 = (state_13656[(7)]);
var state_13656__$1 = state_13656;
var statearr_13695_13733 = state_13656__$1;
(statearr_13695_13733[(2)] = inst_13600);

(statearr_13695_13733[(1)] = (9));


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
});})(c__7427__auto___13703,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7371__auto__,c__7427__auto___13703,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_13699 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13699[(0)] = state_machine__7372__auto__);

(statearr_13699[(1)] = (1));

return statearr_13699;
});
var state_machine__7372__auto____1 = (function (state_13656){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_13656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e13700){if((e13700 instanceof Object)){
var ex__7375__auto__ = e13700;
var statearr_13701_13734 = state_13656;
(statearr_13701_13734[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13735 = state_13656;
state_13656 = G__13735;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_13656){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_13656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto___13703,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7429__auto__ = (function (){var statearr_13702 = f__7428__auto__.call(null);
(statearr_13702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto___13703);

return statearr_13702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(c__7427__auto___13703,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj13737 = {};
return obj13737;
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
return (function (p1__13738_SHARP_){
if(cljs.core.truth_(p1__13738_SHARP_.call(null,topic))){
return p1__13738_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__13738_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3608__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t13861 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13861 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13862){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13862 = meta13862;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13861.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t13861.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t13861.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t13861.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t13861.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t13861.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t13861.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t13861.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13863){
var self__ = this;
var _13863__$1 = this;
return self__.meta13862;
});})(mults,ensure_mult))
;

cljs.core.async.t13861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13863,meta13862__$1){
var self__ = this;
var _13863__$1 = this;
return (new cljs.core.async.t13861(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13862__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t13861.cljs$lang$type = true;

cljs.core.async.t13861.cljs$lang$ctorStr = "cljs.core.async/t13861";

cljs.core.async.t13861.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t13861");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t13861 = ((function (mults,ensure_mult){
return (function __GT_t13861(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13862){
return (new cljs.core.async.t13861(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13862));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t13861(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
})()
;
var c__7427__auto___13983 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7427__auto___13983,mults,ensure_mult,p){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (c__7427__auto___13983,mults,ensure_mult,p){
return (function (state_13935){
var state_val_13936 = (state_13935[(1)]);
if((state_val_13936 === (7))){
var inst_13931 = (state_13935[(2)]);
var state_13935__$1 = state_13935;
var statearr_13937_13984 = state_13935__$1;
(statearr_13937_13984[(2)] = inst_13931);

(statearr_13937_13984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13936 === (20))){
var state_13935__$1 = state_13935;
var statearr_13938_13985 = state_13935__$1;
(statearr_13938_13985[(2)] = null);

(statearr_13938_13985[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13936 === (1))){
var state_13935__$1 = state_13935;
var statearr_13939_13986 = state_13935__$1;
(statearr_13939_13986[(2)] = null);

(statearr_13939_13986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13936 === (24))){
var inst_13914 = (state_13935[(7)]);
var inst_13923 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13914);
var state_13935__$1 = state_13935;
var statearr_13940_13987 = state_13935__$1;
(statearr_13940_13987[(2)] = inst_13923);

(statearr_13940_13987[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13936 === (4))){
var inst_13866 = (state_13935[(8)]);
var inst_13866__$1 = (state_13935[(2)]);
var inst_13867 = (inst_13866__$1 == null);
var state_13935__$1 = (function (){var statearr_13941 = state_13935;
(statearr_13941[(8)] = inst_13866__$1);

return statearr_13941;
})();
if(cljs.core.truth_(inst_13867)){
var statearr_13942_13988 = state_13935__$1;
(statearr_13942_13988[(1)] = (5));

} else {
var statearr_13943_13989 = state_13935__$1;
(statearr_13943_13989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13936 === (15))){
var inst_13908 = (state_13935[(2)]);
var state_13935__$1 = state_13935;
var statearr_13944_13990 = state_13935__$1;
(statearr_13944_13990[(2)] = inst_13908);

(statearr_13944_13990[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13936 === (21))){
var inst_13928 = (state_13935[(2)]);
var state_13935__$1 = (function (){var statearr_13945 = state_13935;
(statearr_13945[(9)] = inst_13928);

return statearr_13945;
})();
var statearr_13946_13991 = state_13935__$1;
(statearr_13946_13991[(2)] = null);

(statearr_13946_13991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13936 === (13))){
var inst_13890 = (state_13935[(10)]);
var inst_13892 = cljs.core.chunked_seq_QMARK_.call(null,inst_13890);
var state_13935__$1 = state_13935;
if(inst_13892){
var statearr_13947_13992 = state_13935__$1;
(statearr_13947_13992[(1)] = (16));

} else {
var statearr_13948_13993 = state_13935__$1;
(statearr_13948_13993[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13936 === (22))){
var inst_13920 = (state_13935[(2)]);
var state_13935__$1 = state_13935;
if(cljs.core.truth_(inst_13920)){
var statearr_13949_13994 = state_13935__$1;
(statearr_13949_13994[(1)] = (23));

} else {
var statearr_13950_13995 = state_13935__$1;
(statearr_13950_13995[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13936 === (6))){
var inst_13866 = (state_13935[(8)]);
var inst_13914 = (state_13935[(7)]);
var inst_13916 = (state_13935[(11)]);
var inst_13914__$1 = topic_fn.call(null,inst_13866);
var inst_13915 = cljs.core.deref.call(null,mults);
var inst_13916__$1 = cljs.core.get.call(null,inst_13915,inst_13914__$1);
var state_13935__$1 = (function (){var statearr_13951 = state_13935;
(statearr_13951[(7)] = inst_13914__$1);

(statearr_13951[(11)] = inst_13916__$1);

return statearr_13951;
})();
if(cljs.core.truth_(inst_13916__$1)){
var statearr_13952_13996 = state_13935__$1;
(statearr_13952_13996[(1)] = (19));

} else {
var statearr_13953_13997 = state_13935__$1;
(statearr_13953_13997[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13936 === (25))){
var inst_13925 = (state_13935[(2)]);
var state_13935__$1 = state_13935;
var statearr_13954_13998 = state_13935__$1;
(statearr_13954_13998[(2)] = inst_13925);

(statearr_13954_13998[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13936 === (17))){
var inst_13890 = (state_13935[(10)]);
var inst_13899 = cljs.core.first.call(null,inst_13890);
var inst_13900 = cljs.core.async.muxch_STAR_.call(null,inst_13899);
var inst_13901 = cljs.core.async.close_BANG_.call(null,inst_13900);
var inst_13902 = cljs.core.next.call(null,inst_13890);
var inst_13876 = inst_13902;
var inst_13877 = null;
var inst_13878 = (0);
var inst_13879 = (0);
var state_13935__$1 = (function (){var statearr_13955 = state_13935;
(statearr_13955[(12)] = inst_13879);

(statearr_13955[(13)] = inst_13901);

(statearr_13955[(14)] = inst_13877);

(statearr_13955[(15)] = inst_13878);

(statearr_13955[(16)] = inst_13876);

return statearr_13955;
})();
var statearr_13956_13999 = state_13935__$1;
(statearr_13956_13999[(2)] = null);

(statearr_13956_13999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13936 === (3))){
var inst_13933 = (state_13935[(2)]);
var state_13935__$1 = state_13935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13935__$1,inst_13933);
} else {
if((state_val_13936 === (12))){
var inst_13910 = (state_13935[(2)]);
var state_13935__$1 = state_13935;
var statearr_13957_14000 = state_13935__$1;
(statearr_13957_14000[(2)] = inst_13910);

(statearr_13957_14000[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13936 === (2))){
var state_13935__$1 = state_13935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13935__$1,(4),ch);
} else {
if((state_val_13936 === (23))){
var state_13935__$1 = state_13935;
var statearr_13958_14001 = state_13935__$1;
(statearr_13958_14001[(2)] = null);

(statearr_13958_14001[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13936 === (19))){
var inst_13866 = (state_13935[(8)]);
var inst_13916 = (state_13935[(11)]);
var inst_13918 = cljs.core.async.muxch_STAR_.call(null,inst_13916);
var state_13935__$1 = state_13935;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13935__$1,(22),inst_13918,inst_13866);
} else {
if((state_val_13936 === (11))){
var inst_13876 = (state_13935[(16)]);
var inst_13890 = (state_13935[(10)]);
var inst_13890__$1 = cljs.core.seq.call(null,inst_13876);
var state_13935__$1 = (function (){var statearr_13959 = state_13935;
(statearr_13959[(10)] = inst_13890__$1);

return statearr_13959;
})();
if(inst_13890__$1){
var statearr_13960_14002 = state_13935__$1;
(statearr_13960_14002[(1)] = (13));

} else {
var statearr_13961_14003 = state_13935__$1;
(statearr_13961_14003[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13936 === (9))){
var inst_13912 = (state_13935[(2)]);
var state_13935__$1 = state_13935;
var statearr_13962_14004 = state_13935__$1;
(statearr_13962_14004[(2)] = inst_13912);

(statearr_13962_14004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13936 === (5))){
var inst_13873 = cljs.core.deref.call(null,mults);
var inst_13874 = cljs.core.vals.call(null,inst_13873);
var inst_13875 = cljs.core.seq.call(null,inst_13874);
var inst_13876 = inst_13875;
var inst_13877 = null;
var inst_13878 = (0);
var inst_13879 = (0);
var state_13935__$1 = (function (){var statearr_13963 = state_13935;
(statearr_13963[(12)] = inst_13879);

(statearr_13963[(14)] = inst_13877);

(statearr_13963[(15)] = inst_13878);

(statearr_13963[(16)] = inst_13876);

return statearr_13963;
})();
var statearr_13964_14005 = state_13935__$1;
(statearr_13964_14005[(2)] = null);

(statearr_13964_14005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13936 === (14))){
var state_13935__$1 = state_13935;
var statearr_13968_14006 = state_13935__$1;
(statearr_13968_14006[(2)] = null);

(statearr_13968_14006[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13936 === (16))){
var inst_13890 = (state_13935[(10)]);
var inst_13894 = cljs.core.chunk_first.call(null,inst_13890);
var inst_13895 = cljs.core.chunk_rest.call(null,inst_13890);
var inst_13896 = cljs.core.count.call(null,inst_13894);
var inst_13876 = inst_13895;
var inst_13877 = inst_13894;
var inst_13878 = inst_13896;
var inst_13879 = (0);
var state_13935__$1 = (function (){var statearr_13969 = state_13935;
(statearr_13969[(12)] = inst_13879);

(statearr_13969[(14)] = inst_13877);

(statearr_13969[(15)] = inst_13878);

(statearr_13969[(16)] = inst_13876);

return statearr_13969;
})();
var statearr_13970_14007 = state_13935__$1;
(statearr_13970_14007[(2)] = null);

(statearr_13970_14007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13936 === (10))){
var inst_13879 = (state_13935[(12)]);
var inst_13877 = (state_13935[(14)]);
var inst_13878 = (state_13935[(15)]);
var inst_13876 = (state_13935[(16)]);
var inst_13884 = cljs.core._nth.call(null,inst_13877,inst_13879);
var inst_13885 = cljs.core.async.muxch_STAR_.call(null,inst_13884);
var inst_13886 = cljs.core.async.close_BANG_.call(null,inst_13885);
var inst_13887 = (inst_13879 + (1));
var tmp13965 = inst_13877;
var tmp13966 = inst_13878;
var tmp13967 = inst_13876;
var inst_13876__$1 = tmp13967;
var inst_13877__$1 = tmp13965;
var inst_13878__$1 = tmp13966;
var inst_13879__$1 = inst_13887;
var state_13935__$1 = (function (){var statearr_13971 = state_13935;
(statearr_13971[(12)] = inst_13879__$1);

(statearr_13971[(17)] = inst_13886);

(statearr_13971[(14)] = inst_13877__$1);

(statearr_13971[(15)] = inst_13878__$1);

(statearr_13971[(16)] = inst_13876__$1);

return statearr_13971;
})();
var statearr_13972_14008 = state_13935__$1;
(statearr_13972_14008[(2)] = null);

(statearr_13972_14008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13936 === (18))){
var inst_13905 = (state_13935[(2)]);
var state_13935__$1 = state_13935;
var statearr_13973_14009 = state_13935__$1;
(statearr_13973_14009[(2)] = inst_13905);

(statearr_13973_14009[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13936 === (8))){
var inst_13879 = (state_13935[(12)]);
var inst_13878 = (state_13935[(15)]);
var inst_13881 = (inst_13879 < inst_13878);
var inst_13882 = inst_13881;
var state_13935__$1 = state_13935;
if(cljs.core.truth_(inst_13882)){
var statearr_13974_14010 = state_13935__$1;
(statearr_13974_14010[(1)] = (10));

} else {
var statearr_13975_14011 = state_13935__$1;
(statearr_13975_14011[(1)] = (11));

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
});})(c__7427__auto___13983,mults,ensure_mult,p))
;
return ((function (switch__7371__auto__,c__7427__auto___13983,mults,ensure_mult,p){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_13979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13979[(0)] = state_machine__7372__auto__);

(statearr_13979[(1)] = (1));

return statearr_13979;
});
var state_machine__7372__auto____1 = (function (state_13935){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_13935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e13980){if((e13980 instanceof Object)){
var ex__7375__auto__ = e13980;
var statearr_13981_14012 = state_13935;
(statearr_13981_14012[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14013 = state_13935;
state_13935 = G__14013;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_13935){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_13935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto___13983,mults,ensure_mult,p))
})();
var state__7429__auto__ = (function (){var statearr_13982 = f__7428__auto__.call(null);
(statearr_13982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto___13983);

return statearr_13982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(c__7427__auto___13983,mults,ensure_mult,p))
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
var c__7427__auto___14150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7427__auto___14150,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (c__7427__auto___14150,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14120){
var state_val_14121 = (state_14120[(1)]);
if((state_val_14121 === (7))){
var state_14120__$1 = state_14120;
var statearr_14122_14151 = state_14120__$1;
(statearr_14122_14151[(2)] = null);

(statearr_14122_14151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14121 === (1))){
var state_14120__$1 = state_14120;
var statearr_14123_14152 = state_14120__$1;
(statearr_14123_14152[(2)] = null);

(statearr_14123_14152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14121 === (4))){
var inst_14084 = (state_14120[(7)]);
var inst_14086 = (inst_14084 < cnt);
var state_14120__$1 = state_14120;
if(cljs.core.truth_(inst_14086)){
var statearr_14124_14153 = state_14120__$1;
(statearr_14124_14153[(1)] = (6));

} else {
var statearr_14125_14154 = state_14120__$1;
(statearr_14125_14154[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14121 === (15))){
var inst_14116 = (state_14120[(2)]);
var state_14120__$1 = state_14120;
var statearr_14126_14155 = state_14120__$1;
(statearr_14126_14155[(2)] = inst_14116);

(statearr_14126_14155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14121 === (13))){
var inst_14109 = cljs.core.async.close_BANG_.call(null,out);
var state_14120__$1 = state_14120;
var statearr_14127_14156 = state_14120__$1;
(statearr_14127_14156[(2)] = inst_14109);

(statearr_14127_14156[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14121 === (6))){
var state_14120__$1 = state_14120;
var statearr_14128_14157 = state_14120__$1;
(statearr_14128_14157[(2)] = null);

(statearr_14128_14157[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14121 === (3))){
var inst_14118 = (state_14120[(2)]);
var state_14120__$1 = state_14120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14120__$1,inst_14118);
} else {
if((state_val_14121 === (12))){
var inst_14106 = (state_14120[(8)]);
var inst_14106__$1 = (state_14120[(2)]);
var inst_14107 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14106__$1);
var state_14120__$1 = (function (){var statearr_14129 = state_14120;
(statearr_14129[(8)] = inst_14106__$1);

return statearr_14129;
})();
if(cljs.core.truth_(inst_14107)){
var statearr_14130_14158 = state_14120__$1;
(statearr_14130_14158[(1)] = (13));

} else {
var statearr_14131_14159 = state_14120__$1;
(statearr_14131_14159[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14121 === (2))){
var inst_14083 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14084 = (0);
var state_14120__$1 = (function (){var statearr_14132 = state_14120;
(statearr_14132[(9)] = inst_14083);

(statearr_14132[(7)] = inst_14084);

return statearr_14132;
})();
var statearr_14133_14160 = state_14120__$1;
(statearr_14133_14160[(2)] = null);

(statearr_14133_14160[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14121 === (11))){
var inst_14084 = (state_14120[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14120,(10),Object,null,(9));
var inst_14093 = chs__$1.call(null,inst_14084);
var inst_14094 = done.call(null,inst_14084);
var inst_14095 = cljs.core.async.take_BANG_.call(null,inst_14093,inst_14094);
var state_14120__$1 = state_14120;
var statearr_14134_14161 = state_14120__$1;
(statearr_14134_14161[(2)] = inst_14095);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14120__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14121 === (9))){
var inst_14084 = (state_14120[(7)]);
var inst_14097 = (state_14120[(2)]);
var inst_14098 = (inst_14084 + (1));
var inst_14084__$1 = inst_14098;
var state_14120__$1 = (function (){var statearr_14135 = state_14120;
(statearr_14135[(7)] = inst_14084__$1);

(statearr_14135[(10)] = inst_14097);

return statearr_14135;
})();
var statearr_14136_14162 = state_14120__$1;
(statearr_14136_14162[(2)] = null);

(statearr_14136_14162[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14121 === (5))){
var inst_14104 = (state_14120[(2)]);
var state_14120__$1 = (function (){var statearr_14137 = state_14120;
(statearr_14137[(11)] = inst_14104);

return statearr_14137;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14120__$1,(12),dchan);
} else {
if((state_val_14121 === (14))){
var inst_14106 = (state_14120[(8)]);
var inst_14111 = cljs.core.apply.call(null,f,inst_14106);
var state_14120__$1 = state_14120;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14120__$1,(16),out,inst_14111);
} else {
if((state_val_14121 === (16))){
var inst_14113 = (state_14120[(2)]);
var state_14120__$1 = (function (){var statearr_14138 = state_14120;
(statearr_14138[(12)] = inst_14113);

return statearr_14138;
})();
var statearr_14139_14163 = state_14120__$1;
(statearr_14139_14163[(2)] = null);

(statearr_14139_14163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14121 === (10))){
var inst_14088 = (state_14120[(2)]);
var inst_14089 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14120__$1 = (function (){var statearr_14140 = state_14120;
(statearr_14140[(13)] = inst_14088);

return statearr_14140;
})();
var statearr_14141_14164 = state_14120__$1;
(statearr_14141_14164[(2)] = inst_14089);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14120__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14121 === (8))){
var inst_14102 = (state_14120[(2)]);
var state_14120__$1 = state_14120;
var statearr_14142_14165 = state_14120__$1;
(statearr_14142_14165[(2)] = inst_14102);

(statearr_14142_14165[(1)] = (5));


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
});})(c__7427__auto___14150,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7371__auto__,c__7427__auto___14150,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_14146 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14146[(0)] = state_machine__7372__auto__);

(statearr_14146[(1)] = (1));

return statearr_14146;
});
var state_machine__7372__auto____1 = (function (state_14120){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_14120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e14147){if((e14147 instanceof Object)){
var ex__7375__auto__ = e14147;
var statearr_14148_14166 = state_14120;
(statearr_14148_14166[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14167 = state_14120;
state_14120 = G__14167;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_14120){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_14120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto___14150,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7429__auto__ = (function (){var statearr_14149 = f__7428__auto__.call(null);
(statearr_14149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto___14150);

return statearr_14149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(c__7427__auto___14150,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__7427__auto___14275 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7427__auto___14275,out){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (c__7427__auto___14275,out){
return (function (state_14251){
var state_val_14252 = (state_14251[(1)]);
if((state_val_14252 === (7))){
var inst_14230 = (state_14251[(7)]);
var inst_14231 = (state_14251[(8)]);
var inst_14230__$1 = (state_14251[(2)]);
var inst_14231__$1 = cljs.core.nth.call(null,inst_14230__$1,(0),null);
var inst_14232 = cljs.core.nth.call(null,inst_14230__$1,(1),null);
var inst_14233 = (inst_14231__$1 == null);
var state_14251__$1 = (function (){var statearr_14253 = state_14251;
(statearr_14253[(9)] = inst_14232);

(statearr_14253[(7)] = inst_14230__$1);

(statearr_14253[(8)] = inst_14231__$1);

return statearr_14253;
})();
if(cljs.core.truth_(inst_14233)){
var statearr_14254_14276 = state_14251__$1;
(statearr_14254_14276[(1)] = (8));

} else {
var statearr_14255_14277 = state_14251__$1;
(statearr_14255_14277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14252 === (1))){
var inst_14222 = cljs.core.vec.call(null,chs);
var inst_14223 = inst_14222;
var state_14251__$1 = (function (){var statearr_14256 = state_14251;
(statearr_14256[(10)] = inst_14223);

return statearr_14256;
})();
var statearr_14257_14278 = state_14251__$1;
(statearr_14257_14278[(2)] = null);

(statearr_14257_14278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14252 === (4))){
var inst_14223 = (state_14251[(10)]);
var state_14251__$1 = state_14251;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14251__$1,(7),inst_14223);
} else {
if((state_val_14252 === (6))){
var inst_14247 = (state_14251[(2)]);
var state_14251__$1 = state_14251;
var statearr_14258_14279 = state_14251__$1;
(statearr_14258_14279[(2)] = inst_14247);

(statearr_14258_14279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14252 === (3))){
var inst_14249 = (state_14251[(2)]);
var state_14251__$1 = state_14251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14251__$1,inst_14249);
} else {
if((state_val_14252 === (2))){
var inst_14223 = (state_14251[(10)]);
var inst_14225 = cljs.core.count.call(null,inst_14223);
var inst_14226 = (inst_14225 > (0));
var state_14251__$1 = state_14251;
if(cljs.core.truth_(inst_14226)){
var statearr_14260_14280 = state_14251__$1;
(statearr_14260_14280[(1)] = (4));

} else {
var statearr_14261_14281 = state_14251__$1;
(statearr_14261_14281[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14252 === (11))){
var inst_14223 = (state_14251[(10)]);
var inst_14240 = (state_14251[(2)]);
var tmp14259 = inst_14223;
var inst_14223__$1 = tmp14259;
var state_14251__$1 = (function (){var statearr_14262 = state_14251;
(statearr_14262[(10)] = inst_14223__$1);

(statearr_14262[(11)] = inst_14240);

return statearr_14262;
})();
var statearr_14263_14282 = state_14251__$1;
(statearr_14263_14282[(2)] = null);

(statearr_14263_14282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14252 === (9))){
var inst_14231 = (state_14251[(8)]);
var state_14251__$1 = state_14251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14251__$1,(11),out,inst_14231);
} else {
if((state_val_14252 === (5))){
var inst_14245 = cljs.core.async.close_BANG_.call(null,out);
var state_14251__$1 = state_14251;
var statearr_14264_14283 = state_14251__$1;
(statearr_14264_14283[(2)] = inst_14245);

(statearr_14264_14283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14252 === (10))){
var inst_14243 = (state_14251[(2)]);
var state_14251__$1 = state_14251;
var statearr_14265_14284 = state_14251__$1;
(statearr_14265_14284[(2)] = inst_14243);

(statearr_14265_14284[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14252 === (8))){
var inst_14232 = (state_14251[(9)]);
var inst_14223 = (state_14251[(10)]);
var inst_14230 = (state_14251[(7)]);
var inst_14231 = (state_14251[(8)]);
var inst_14235 = (function (){var c = inst_14232;
var v = inst_14231;
var vec__14228 = inst_14230;
var cs = inst_14223;
return ((function (c,v,vec__14228,cs,inst_14232,inst_14223,inst_14230,inst_14231,state_val_14252,c__7427__auto___14275,out){
return (function (p1__14168_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14168_SHARP_);
});
;})(c,v,vec__14228,cs,inst_14232,inst_14223,inst_14230,inst_14231,state_val_14252,c__7427__auto___14275,out))
})();
var inst_14236 = cljs.core.filterv.call(null,inst_14235,inst_14223);
var inst_14223__$1 = inst_14236;
var state_14251__$1 = (function (){var statearr_14266 = state_14251;
(statearr_14266[(10)] = inst_14223__$1);

return statearr_14266;
})();
var statearr_14267_14285 = state_14251__$1;
(statearr_14267_14285[(2)] = null);

(statearr_14267_14285[(1)] = (2));


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
});})(c__7427__auto___14275,out))
;
return ((function (switch__7371__auto__,c__7427__auto___14275,out){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_14271 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14271[(0)] = state_machine__7372__auto__);

(statearr_14271[(1)] = (1));

return statearr_14271;
});
var state_machine__7372__auto____1 = (function (state_14251){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_14251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e14272){if((e14272 instanceof Object)){
var ex__7375__auto__ = e14272;
var statearr_14273_14286 = state_14251;
(statearr_14273_14286[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14287 = state_14251;
state_14251 = G__14287;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_14251){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_14251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto___14275,out))
})();
var state__7429__auto__ = (function (){var statearr_14274 = f__7428__auto__.call(null);
(statearr_14274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto___14275);

return statearr_14274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(c__7427__auto___14275,out))
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
var c__7427__auto___14380 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7427__auto___14380,out){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (c__7427__auto___14380,out){
return (function (state_14357){
var state_val_14358 = (state_14357[(1)]);
if((state_val_14358 === (7))){
var inst_14339 = (state_14357[(7)]);
var inst_14339__$1 = (state_14357[(2)]);
var inst_14340 = (inst_14339__$1 == null);
var inst_14341 = cljs.core.not.call(null,inst_14340);
var state_14357__$1 = (function (){var statearr_14359 = state_14357;
(statearr_14359[(7)] = inst_14339__$1);

return statearr_14359;
})();
if(inst_14341){
var statearr_14360_14381 = state_14357__$1;
(statearr_14360_14381[(1)] = (8));

} else {
var statearr_14361_14382 = state_14357__$1;
(statearr_14361_14382[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14358 === (1))){
var inst_14334 = (0);
var state_14357__$1 = (function (){var statearr_14362 = state_14357;
(statearr_14362[(8)] = inst_14334);

return statearr_14362;
})();
var statearr_14363_14383 = state_14357__$1;
(statearr_14363_14383[(2)] = null);

(statearr_14363_14383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14358 === (4))){
var state_14357__$1 = state_14357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14357__$1,(7),ch);
} else {
if((state_val_14358 === (6))){
var inst_14352 = (state_14357[(2)]);
var state_14357__$1 = state_14357;
var statearr_14364_14384 = state_14357__$1;
(statearr_14364_14384[(2)] = inst_14352);

(statearr_14364_14384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14358 === (3))){
var inst_14354 = (state_14357[(2)]);
var inst_14355 = cljs.core.async.close_BANG_.call(null,out);
var state_14357__$1 = (function (){var statearr_14365 = state_14357;
(statearr_14365[(9)] = inst_14354);

return statearr_14365;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14357__$1,inst_14355);
} else {
if((state_val_14358 === (2))){
var inst_14334 = (state_14357[(8)]);
var inst_14336 = (inst_14334 < n);
var state_14357__$1 = state_14357;
if(cljs.core.truth_(inst_14336)){
var statearr_14366_14385 = state_14357__$1;
(statearr_14366_14385[(1)] = (4));

} else {
var statearr_14367_14386 = state_14357__$1;
(statearr_14367_14386[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14358 === (11))){
var inst_14334 = (state_14357[(8)]);
var inst_14344 = (state_14357[(2)]);
var inst_14345 = (inst_14334 + (1));
var inst_14334__$1 = inst_14345;
var state_14357__$1 = (function (){var statearr_14368 = state_14357;
(statearr_14368[(10)] = inst_14344);

(statearr_14368[(8)] = inst_14334__$1);

return statearr_14368;
})();
var statearr_14369_14387 = state_14357__$1;
(statearr_14369_14387[(2)] = null);

(statearr_14369_14387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14358 === (9))){
var state_14357__$1 = state_14357;
var statearr_14370_14388 = state_14357__$1;
(statearr_14370_14388[(2)] = null);

(statearr_14370_14388[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14358 === (5))){
var state_14357__$1 = state_14357;
var statearr_14371_14389 = state_14357__$1;
(statearr_14371_14389[(2)] = null);

(statearr_14371_14389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14358 === (10))){
var inst_14349 = (state_14357[(2)]);
var state_14357__$1 = state_14357;
var statearr_14372_14390 = state_14357__$1;
(statearr_14372_14390[(2)] = inst_14349);

(statearr_14372_14390[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14358 === (8))){
var inst_14339 = (state_14357[(7)]);
var state_14357__$1 = state_14357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14357__$1,(11),out,inst_14339);
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
});})(c__7427__auto___14380,out))
;
return ((function (switch__7371__auto__,c__7427__auto___14380,out){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_14376 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14376[(0)] = state_machine__7372__auto__);

(statearr_14376[(1)] = (1));

return statearr_14376;
});
var state_machine__7372__auto____1 = (function (state_14357){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_14357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e14377){if((e14377 instanceof Object)){
var ex__7375__auto__ = e14377;
var statearr_14378_14391 = state_14357;
(statearr_14378_14391[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14392 = state_14357;
state_14357 = G__14392;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_14357){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_14357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto___14380,out))
})();
var state__7429__auto__ = (function (){var statearr_14379 = f__7428__auto__.call(null);
(statearr_14379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto___14380);

return statearr_14379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(c__7427__auto___14380,out))
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
if(typeof cljs.core.async.t14400 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14400 = (function (ch,f,map_LT_,meta14401){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14401 = meta14401;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14400.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14400.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t14400.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14400.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t14403 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14403 = (function (fn1,_,meta14401,map_LT_,f,ch,meta14404){
this.fn1 = fn1;
this._ = _;
this.meta14401 = meta14401;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14404 = meta14404;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14403.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14403.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t14403.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14393_SHARP_){
return f1.call(null,(((p1__14393_SHARP_ == null))?null:self__.f.call(null,p1__14393_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t14403.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14405){
var self__ = this;
var _14405__$1 = this;
return self__.meta14404;
});})(___$1))
;

cljs.core.async.t14403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14405,meta14404__$1){
var self__ = this;
var _14405__$1 = this;
return (new cljs.core.async.t14403(self__.fn1,self__._,self__.meta14401,self__.map_LT_,self__.f,self__.ch,meta14404__$1));
});})(___$1))
;

cljs.core.async.t14403.cljs$lang$type = true;

cljs.core.async.t14403.cljs$lang$ctorStr = "cljs.core.async/t14403";

cljs.core.async.t14403.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t14403");
});})(___$1))
;

cljs.core.async.__GT_t14403 = ((function (___$1){
return (function __GT_t14403(fn1__$1,___$2,meta14401__$1,map_LT___$1,f__$1,ch__$1,meta14404){
return (new cljs.core.async.t14403(fn1__$1,___$2,meta14401__$1,map_LT___$1,f__$1,ch__$1,meta14404));
});})(___$1))
;

}

return (new cljs.core.async.t14403(fn1,___$1,self__.meta14401,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
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

cljs.core.async.t14400.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14400.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14400.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t14400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14402){
var self__ = this;
var _14402__$1 = this;
return self__.meta14401;
});

cljs.core.async.t14400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14402,meta14401__$1){
var self__ = this;
var _14402__$1 = this;
return (new cljs.core.async.t14400(self__.ch,self__.f,self__.map_LT_,meta14401__$1));
});

cljs.core.async.t14400.cljs$lang$type = true;

cljs.core.async.t14400.cljs$lang$ctorStr = "cljs.core.async/t14400";

cljs.core.async.t14400.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t14400");
});

cljs.core.async.__GT_t14400 = (function __GT_t14400(ch__$1,f__$1,map_LT___$1,meta14401){
return (new cljs.core.async.t14400(ch__$1,f__$1,map_LT___$1,meta14401));
});

}

return (new cljs.core.async.t14400(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t14409 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14409 = (function (ch,f,map_GT_,meta14410){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14410 = meta14410;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14409.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14409.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t14409.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14409.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t14409.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14409.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14409.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14411){
var self__ = this;
var _14411__$1 = this;
return self__.meta14410;
});

cljs.core.async.t14409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14411,meta14410__$1){
var self__ = this;
var _14411__$1 = this;
return (new cljs.core.async.t14409(self__.ch,self__.f,self__.map_GT_,meta14410__$1));
});

cljs.core.async.t14409.cljs$lang$type = true;

cljs.core.async.t14409.cljs$lang$ctorStr = "cljs.core.async/t14409";

cljs.core.async.t14409.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t14409");
});

cljs.core.async.__GT_t14409 = (function __GT_t14409(ch__$1,f__$1,map_GT___$1,meta14410){
return (new cljs.core.async.t14409(ch__$1,f__$1,map_GT___$1,meta14410));
});

}

return (new cljs.core.async.t14409(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t14415 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14415 = (function (ch,p,filter_GT_,meta14416){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14416 = meta14416;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14415.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14415.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t14415.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14415.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t14415.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14415.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14415.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t14415.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14417){
var self__ = this;
var _14417__$1 = this;
return self__.meta14416;
});

cljs.core.async.t14415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14417,meta14416__$1){
var self__ = this;
var _14417__$1 = this;
return (new cljs.core.async.t14415(self__.ch,self__.p,self__.filter_GT_,meta14416__$1));
});

cljs.core.async.t14415.cljs$lang$type = true;

cljs.core.async.t14415.cljs$lang$ctorStr = "cljs.core.async/t14415";

cljs.core.async.t14415.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t14415");
});

cljs.core.async.__GT_t14415 = (function __GT_t14415(ch__$1,p__$1,filter_GT___$1,meta14416){
return (new cljs.core.async.t14415(ch__$1,p__$1,filter_GT___$1,meta14416));
});

}

return (new cljs.core.async.t14415(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
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
var c__7427__auto___14500 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7427__auto___14500,out){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (c__7427__auto___14500,out){
return (function (state_14479){
var state_val_14480 = (state_14479[(1)]);
if((state_val_14480 === (7))){
var inst_14475 = (state_14479[(2)]);
var state_14479__$1 = state_14479;
var statearr_14481_14501 = state_14479__$1;
(statearr_14481_14501[(2)] = inst_14475);

(statearr_14481_14501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14480 === (1))){
var state_14479__$1 = state_14479;
var statearr_14482_14502 = state_14479__$1;
(statearr_14482_14502[(2)] = null);

(statearr_14482_14502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14480 === (4))){
var inst_14461 = (state_14479[(7)]);
var inst_14461__$1 = (state_14479[(2)]);
var inst_14462 = (inst_14461__$1 == null);
var state_14479__$1 = (function (){var statearr_14483 = state_14479;
(statearr_14483[(7)] = inst_14461__$1);

return statearr_14483;
})();
if(cljs.core.truth_(inst_14462)){
var statearr_14484_14503 = state_14479__$1;
(statearr_14484_14503[(1)] = (5));

} else {
var statearr_14485_14504 = state_14479__$1;
(statearr_14485_14504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14480 === (6))){
var inst_14461 = (state_14479[(7)]);
var inst_14466 = p.call(null,inst_14461);
var state_14479__$1 = state_14479;
if(cljs.core.truth_(inst_14466)){
var statearr_14486_14505 = state_14479__$1;
(statearr_14486_14505[(1)] = (8));

} else {
var statearr_14487_14506 = state_14479__$1;
(statearr_14487_14506[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14480 === (3))){
var inst_14477 = (state_14479[(2)]);
var state_14479__$1 = state_14479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14479__$1,inst_14477);
} else {
if((state_val_14480 === (2))){
var state_14479__$1 = state_14479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14479__$1,(4),ch);
} else {
if((state_val_14480 === (11))){
var inst_14469 = (state_14479[(2)]);
var state_14479__$1 = state_14479;
var statearr_14488_14507 = state_14479__$1;
(statearr_14488_14507[(2)] = inst_14469);

(statearr_14488_14507[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14480 === (9))){
var state_14479__$1 = state_14479;
var statearr_14489_14508 = state_14479__$1;
(statearr_14489_14508[(2)] = null);

(statearr_14489_14508[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14480 === (5))){
var inst_14464 = cljs.core.async.close_BANG_.call(null,out);
var state_14479__$1 = state_14479;
var statearr_14490_14509 = state_14479__$1;
(statearr_14490_14509[(2)] = inst_14464);

(statearr_14490_14509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14480 === (10))){
var inst_14472 = (state_14479[(2)]);
var state_14479__$1 = (function (){var statearr_14491 = state_14479;
(statearr_14491[(8)] = inst_14472);

return statearr_14491;
})();
var statearr_14492_14510 = state_14479__$1;
(statearr_14492_14510[(2)] = null);

(statearr_14492_14510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14480 === (8))){
var inst_14461 = (state_14479[(7)]);
var state_14479__$1 = state_14479;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14479__$1,(11),out,inst_14461);
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
});})(c__7427__auto___14500,out))
;
return ((function (switch__7371__auto__,c__7427__auto___14500,out){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_14496 = [null,null,null,null,null,null,null,null,null];
(statearr_14496[(0)] = state_machine__7372__auto__);

(statearr_14496[(1)] = (1));

return statearr_14496;
});
var state_machine__7372__auto____1 = (function (state_14479){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_14479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e14497){if((e14497 instanceof Object)){
var ex__7375__auto__ = e14497;
var statearr_14498_14511 = state_14479;
(statearr_14498_14511[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14512 = state_14479;
state_14479 = G__14512;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_14479){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_14479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto___14500,out))
})();
var state__7429__auto__ = (function (){var statearr_14499 = f__7428__auto__.call(null);
(statearr_14499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto___14500);

return statearr_14499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(c__7427__auto___14500,out))
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
return (function (state_14678){
var state_val_14679 = (state_14678[(1)]);
if((state_val_14679 === (7))){
var inst_14674 = (state_14678[(2)]);
var state_14678__$1 = state_14678;
var statearr_14680_14721 = state_14678__$1;
(statearr_14680_14721[(2)] = inst_14674);

(statearr_14680_14721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (20))){
var inst_14644 = (state_14678[(7)]);
var inst_14655 = (state_14678[(2)]);
var inst_14656 = cljs.core.next.call(null,inst_14644);
var inst_14630 = inst_14656;
var inst_14631 = null;
var inst_14632 = (0);
var inst_14633 = (0);
var state_14678__$1 = (function (){var statearr_14681 = state_14678;
(statearr_14681[(8)] = inst_14632);

(statearr_14681[(9)] = inst_14630);

(statearr_14681[(10)] = inst_14633);

(statearr_14681[(11)] = inst_14631);

(statearr_14681[(12)] = inst_14655);

return statearr_14681;
})();
var statearr_14682_14722 = state_14678__$1;
(statearr_14682_14722[(2)] = null);

(statearr_14682_14722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (1))){
var state_14678__$1 = state_14678;
var statearr_14683_14723 = state_14678__$1;
(statearr_14683_14723[(2)] = null);

(statearr_14683_14723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (4))){
var inst_14619 = (state_14678[(13)]);
var inst_14619__$1 = (state_14678[(2)]);
var inst_14620 = (inst_14619__$1 == null);
var state_14678__$1 = (function (){var statearr_14684 = state_14678;
(statearr_14684[(13)] = inst_14619__$1);

return statearr_14684;
})();
if(cljs.core.truth_(inst_14620)){
var statearr_14685_14724 = state_14678__$1;
(statearr_14685_14724[(1)] = (5));

} else {
var statearr_14686_14725 = state_14678__$1;
(statearr_14686_14725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (15))){
var state_14678__$1 = state_14678;
var statearr_14690_14726 = state_14678__$1;
(statearr_14690_14726[(2)] = null);

(statearr_14690_14726[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (21))){
var state_14678__$1 = state_14678;
var statearr_14691_14727 = state_14678__$1;
(statearr_14691_14727[(2)] = null);

(statearr_14691_14727[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (13))){
var inst_14632 = (state_14678[(8)]);
var inst_14630 = (state_14678[(9)]);
var inst_14633 = (state_14678[(10)]);
var inst_14631 = (state_14678[(11)]);
var inst_14640 = (state_14678[(2)]);
var inst_14641 = (inst_14633 + (1));
var tmp14687 = inst_14632;
var tmp14688 = inst_14630;
var tmp14689 = inst_14631;
var inst_14630__$1 = tmp14688;
var inst_14631__$1 = tmp14689;
var inst_14632__$1 = tmp14687;
var inst_14633__$1 = inst_14641;
var state_14678__$1 = (function (){var statearr_14692 = state_14678;
(statearr_14692[(8)] = inst_14632__$1);

(statearr_14692[(9)] = inst_14630__$1);

(statearr_14692[(10)] = inst_14633__$1);

(statearr_14692[(11)] = inst_14631__$1);

(statearr_14692[(14)] = inst_14640);

return statearr_14692;
})();
var statearr_14693_14728 = state_14678__$1;
(statearr_14693_14728[(2)] = null);

(statearr_14693_14728[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (22))){
var state_14678__$1 = state_14678;
var statearr_14694_14729 = state_14678__$1;
(statearr_14694_14729[(2)] = null);

(statearr_14694_14729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (6))){
var inst_14619 = (state_14678[(13)]);
var inst_14628 = f.call(null,inst_14619);
var inst_14629 = cljs.core.seq.call(null,inst_14628);
var inst_14630 = inst_14629;
var inst_14631 = null;
var inst_14632 = (0);
var inst_14633 = (0);
var state_14678__$1 = (function (){var statearr_14695 = state_14678;
(statearr_14695[(8)] = inst_14632);

(statearr_14695[(9)] = inst_14630);

(statearr_14695[(10)] = inst_14633);

(statearr_14695[(11)] = inst_14631);

return statearr_14695;
})();
var statearr_14696_14730 = state_14678__$1;
(statearr_14696_14730[(2)] = null);

(statearr_14696_14730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (17))){
var inst_14644 = (state_14678[(7)]);
var inst_14648 = cljs.core.chunk_first.call(null,inst_14644);
var inst_14649 = cljs.core.chunk_rest.call(null,inst_14644);
var inst_14650 = cljs.core.count.call(null,inst_14648);
var inst_14630 = inst_14649;
var inst_14631 = inst_14648;
var inst_14632 = inst_14650;
var inst_14633 = (0);
var state_14678__$1 = (function (){var statearr_14697 = state_14678;
(statearr_14697[(8)] = inst_14632);

(statearr_14697[(9)] = inst_14630);

(statearr_14697[(10)] = inst_14633);

(statearr_14697[(11)] = inst_14631);

return statearr_14697;
})();
var statearr_14698_14731 = state_14678__$1;
(statearr_14698_14731[(2)] = null);

(statearr_14698_14731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (3))){
var inst_14676 = (state_14678[(2)]);
var state_14678__$1 = state_14678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14678__$1,inst_14676);
} else {
if((state_val_14679 === (12))){
var inst_14664 = (state_14678[(2)]);
var state_14678__$1 = state_14678;
var statearr_14699_14732 = state_14678__$1;
(statearr_14699_14732[(2)] = inst_14664);

(statearr_14699_14732[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (2))){
var state_14678__$1 = state_14678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14678__$1,(4),in$);
} else {
if((state_val_14679 === (23))){
var inst_14672 = (state_14678[(2)]);
var state_14678__$1 = state_14678;
var statearr_14700_14733 = state_14678__$1;
(statearr_14700_14733[(2)] = inst_14672);

(statearr_14700_14733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (19))){
var inst_14659 = (state_14678[(2)]);
var state_14678__$1 = state_14678;
var statearr_14701_14734 = state_14678__$1;
(statearr_14701_14734[(2)] = inst_14659);

(statearr_14701_14734[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (11))){
var inst_14644 = (state_14678[(7)]);
var inst_14630 = (state_14678[(9)]);
var inst_14644__$1 = cljs.core.seq.call(null,inst_14630);
var state_14678__$1 = (function (){var statearr_14702 = state_14678;
(statearr_14702[(7)] = inst_14644__$1);

return statearr_14702;
})();
if(inst_14644__$1){
var statearr_14703_14735 = state_14678__$1;
(statearr_14703_14735[(1)] = (14));

} else {
var statearr_14704_14736 = state_14678__$1;
(statearr_14704_14736[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (9))){
var inst_14666 = (state_14678[(2)]);
var inst_14667 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14678__$1 = (function (){var statearr_14705 = state_14678;
(statearr_14705[(15)] = inst_14666);

return statearr_14705;
})();
if(cljs.core.truth_(inst_14667)){
var statearr_14706_14737 = state_14678__$1;
(statearr_14706_14737[(1)] = (21));

} else {
var statearr_14707_14738 = state_14678__$1;
(statearr_14707_14738[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (5))){
var inst_14622 = cljs.core.async.close_BANG_.call(null,out);
var state_14678__$1 = state_14678;
var statearr_14708_14739 = state_14678__$1;
(statearr_14708_14739[(2)] = inst_14622);

(statearr_14708_14739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (14))){
var inst_14644 = (state_14678[(7)]);
var inst_14646 = cljs.core.chunked_seq_QMARK_.call(null,inst_14644);
var state_14678__$1 = state_14678;
if(inst_14646){
var statearr_14709_14740 = state_14678__$1;
(statearr_14709_14740[(1)] = (17));

} else {
var statearr_14710_14741 = state_14678__$1;
(statearr_14710_14741[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (16))){
var inst_14662 = (state_14678[(2)]);
var state_14678__$1 = state_14678;
var statearr_14711_14742 = state_14678__$1;
(statearr_14711_14742[(2)] = inst_14662);

(statearr_14711_14742[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (10))){
var inst_14633 = (state_14678[(10)]);
var inst_14631 = (state_14678[(11)]);
var inst_14638 = cljs.core._nth.call(null,inst_14631,inst_14633);
var state_14678__$1 = state_14678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14678__$1,(13),out,inst_14638);
} else {
if((state_val_14679 === (18))){
var inst_14644 = (state_14678[(7)]);
var inst_14653 = cljs.core.first.call(null,inst_14644);
var state_14678__$1 = state_14678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14678__$1,(20),out,inst_14653);
} else {
if((state_val_14679 === (8))){
var inst_14632 = (state_14678[(8)]);
var inst_14633 = (state_14678[(10)]);
var inst_14635 = (inst_14633 < inst_14632);
var inst_14636 = inst_14635;
var state_14678__$1 = state_14678;
if(cljs.core.truth_(inst_14636)){
var statearr_14712_14743 = state_14678__$1;
(statearr_14712_14743[(1)] = (10));

} else {
var statearr_14713_14744 = state_14678__$1;
(statearr_14713_14744[(1)] = (11));

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
var statearr_14717 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14717[(0)] = state_machine__7372__auto__);

(statearr_14717[(1)] = (1));

return statearr_14717;
});
var state_machine__7372__auto____1 = (function (state_14678){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_14678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e14718){if((e14718 instanceof Object)){
var ex__7375__auto__ = e14718;
var statearr_14719_14745 = state_14678;
(statearr_14719_14745[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14746 = state_14678;
state_14678 = G__14746;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_14678){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_14678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto__))
})();
var state__7429__auto__ = (function (){var statearr_14720 = f__7428__auto__.call(null);
(statearr_14720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto__);

return statearr_14720;
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
var c__7427__auto___14843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7427__auto___14843,out){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (c__7427__auto___14843,out){
return (function (state_14818){
var state_val_14819 = (state_14818[(1)]);
if((state_val_14819 === (7))){
var inst_14813 = (state_14818[(2)]);
var state_14818__$1 = state_14818;
var statearr_14820_14844 = state_14818__$1;
(statearr_14820_14844[(2)] = inst_14813);

(statearr_14820_14844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14819 === (1))){
var inst_14795 = null;
var state_14818__$1 = (function (){var statearr_14821 = state_14818;
(statearr_14821[(7)] = inst_14795);

return statearr_14821;
})();
var statearr_14822_14845 = state_14818__$1;
(statearr_14822_14845[(2)] = null);

(statearr_14822_14845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14819 === (4))){
var inst_14798 = (state_14818[(8)]);
var inst_14798__$1 = (state_14818[(2)]);
var inst_14799 = (inst_14798__$1 == null);
var inst_14800 = cljs.core.not.call(null,inst_14799);
var state_14818__$1 = (function (){var statearr_14823 = state_14818;
(statearr_14823[(8)] = inst_14798__$1);

return statearr_14823;
})();
if(inst_14800){
var statearr_14824_14846 = state_14818__$1;
(statearr_14824_14846[(1)] = (5));

} else {
var statearr_14825_14847 = state_14818__$1;
(statearr_14825_14847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14819 === (6))){
var state_14818__$1 = state_14818;
var statearr_14826_14848 = state_14818__$1;
(statearr_14826_14848[(2)] = null);

(statearr_14826_14848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14819 === (3))){
var inst_14815 = (state_14818[(2)]);
var inst_14816 = cljs.core.async.close_BANG_.call(null,out);
var state_14818__$1 = (function (){var statearr_14827 = state_14818;
(statearr_14827[(9)] = inst_14815);

return statearr_14827;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14818__$1,inst_14816);
} else {
if((state_val_14819 === (2))){
var state_14818__$1 = state_14818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14818__$1,(4),ch);
} else {
if((state_val_14819 === (11))){
var inst_14798 = (state_14818[(8)]);
var inst_14807 = (state_14818[(2)]);
var inst_14795 = inst_14798;
var state_14818__$1 = (function (){var statearr_14828 = state_14818;
(statearr_14828[(7)] = inst_14795);

(statearr_14828[(10)] = inst_14807);

return statearr_14828;
})();
var statearr_14829_14849 = state_14818__$1;
(statearr_14829_14849[(2)] = null);

(statearr_14829_14849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14819 === (9))){
var inst_14798 = (state_14818[(8)]);
var state_14818__$1 = state_14818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14818__$1,(11),out,inst_14798);
} else {
if((state_val_14819 === (5))){
var inst_14795 = (state_14818[(7)]);
var inst_14798 = (state_14818[(8)]);
var inst_14802 = cljs.core._EQ_.call(null,inst_14798,inst_14795);
var state_14818__$1 = state_14818;
if(inst_14802){
var statearr_14831_14850 = state_14818__$1;
(statearr_14831_14850[(1)] = (8));

} else {
var statearr_14832_14851 = state_14818__$1;
(statearr_14832_14851[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14819 === (10))){
var inst_14810 = (state_14818[(2)]);
var state_14818__$1 = state_14818;
var statearr_14833_14852 = state_14818__$1;
(statearr_14833_14852[(2)] = inst_14810);

(statearr_14833_14852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14819 === (8))){
var inst_14795 = (state_14818[(7)]);
var tmp14830 = inst_14795;
var inst_14795__$1 = tmp14830;
var state_14818__$1 = (function (){var statearr_14834 = state_14818;
(statearr_14834[(7)] = inst_14795__$1);

return statearr_14834;
})();
var statearr_14835_14853 = state_14818__$1;
(statearr_14835_14853[(2)] = null);

(statearr_14835_14853[(1)] = (2));


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
});})(c__7427__auto___14843,out))
;
return ((function (switch__7371__auto__,c__7427__auto___14843,out){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_14839 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14839[(0)] = state_machine__7372__auto__);

(statearr_14839[(1)] = (1));

return statearr_14839;
});
var state_machine__7372__auto____1 = (function (state_14818){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_14818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e14840){if((e14840 instanceof Object)){
var ex__7375__auto__ = e14840;
var statearr_14841_14854 = state_14818;
(statearr_14841_14854[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14855 = state_14818;
state_14818 = G__14855;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_14818){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_14818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto___14843,out))
})();
var state__7429__auto__ = (function (){var statearr_14842 = f__7428__auto__.call(null);
(statearr_14842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto___14843);

return statearr_14842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(c__7427__auto___14843,out))
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
var c__7427__auto___14990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7427__auto___14990,out){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (c__7427__auto___14990,out){
return (function (state_14960){
var state_val_14961 = (state_14960[(1)]);
if((state_val_14961 === (7))){
var inst_14956 = (state_14960[(2)]);
var state_14960__$1 = state_14960;
var statearr_14962_14991 = state_14960__$1;
(statearr_14962_14991[(2)] = inst_14956);

(statearr_14962_14991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14961 === (1))){
var inst_14923 = (new Array(n));
var inst_14924 = inst_14923;
var inst_14925 = (0);
var state_14960__$1 = (function (){var statearr_14963 = state_14960;
(statearr_14963[(7)] = inst_14925);

(statearr_14963[(8)] = inst_14924);

return statearr_14963;
})();
var statearr_14964_14992 = state_14960__$1;
(statearr_14964_14992[(2)] = null);

(statearr_14964_14992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14961 === (4))){
var inst_14928 = (state_14960[(9)]);
var inst_14928__$1 = (state_14960[(2)]);
var inst_14929 = (inst_14928__$1 == null);
var inst_14930 = cljs.core.not.call(null,inst_14929);
var state_14960__$1 = (function (){var statearr_14965 = state_14960;
(statearr_14965[(9)] = inst_14928__$1);

return statearr_14965;
})();
if(inst_14930){
var statearr_14966_14993 = state_14960__$1;
(statearr_14966_14993[(1)] = (5));

} else {
var statearr_14967_14994 = state_14960__$1;
(statearr_14967_14994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14961 === (15))){
var inst_14950 = (state_14960[(2)]);
var state_14960__$1 = state_14960;
var statearr_14968_14995 = state_14960__$1;
(statearr_14968_14995[(2)] = inst_14950);

(statearr_14968_14995[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14961 === (13))){
var state_14960__$1 = state_14960;
var statearr_14969_14996 = state_14960__$1;
(statearr_14969_14996[(2)] = null);

(statearr_14969_14996[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14961 === (6))){
var inst_14925 = (state_14960[(7)]);
var inst_14946 = (inst_14925 > (0));
var state_14960__$1 = state_14960;
if(cljs.core.truth_(inst_14946)){
var statearr_14970_14997 = state_14960__$1;
(statearr_14970_14997[(1)] = (12));

} else {
var statearr_14971_14998 = state_14960__$1;
(statearr_14971_14998[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14961 === (3))){
var inst_14958 = (state_14960[(2)]);
var state_14960__$1 = state_14960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14960__$1,inst_14958);
} else {
if((state_val_14961 === (12))){
var inst_14924 = (state_14960[(8)]);
var inst_14948 = cljs.core.vec.call(null,inst_14924);
var state_14960__$1 = state_14960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14960__$1,(15),out,inst_14948);
} else {
if((state_val_14961 === (2))){
var state_14960__$1 = state_14960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14960__$1,(4),ch);
} else {
if((state_val_14961 === (11))){
var inst_14940 = (state_14960[(2)]);
var inst_14941 = (new Array(n));
var inst_14924 = inst_14941;
var inst_14925 = (0);
var state_14960__$1 = (function (){var statearr_14972 = state_14960;
(statearr_14972[(10)] = inst_14940);

(statearr_14972[(7)] = inst_14925);

(statearr_14972[(8)] = inst_14924);

return statearr_14972;
})();
var statearr_14973_14999 = state_14960__$1;
(statearr_14973_14999[(2)] = null);

(statearr_14973_14999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14961 === (9))){
var inst_14924 = (state_14960[(8)]);
var inst_14938 = cljs.core.vec.call(null,inst_14924);
var state_14960__$1 = state_14960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14960__$1,(11),out,inst_14938);
} else {
if((state_val_14961 === (5))){
var inst_14925 = (state_14960[(7)]);
var inst_14933 = (state_14960[(11)]);
var inst_14928 = (state_14960[(9)]);
var inst_14924 = (state_14960[(8)]);
var inst_14932 = (inst_14924[inst_14925] = inst_14928);
var inst_14933__$1 = (inst_14925 + (1));
var inst_14934 = (inst_14933__$1 < n);
var state_14960__$1 = (function (){var statearr_14974 = state_14960;
(statearr_14974[(12)] = inst_14932);

(statearr_14974[(11)] = inst_14933__$1);

return statearr_14974;
})();
if(cljs.core.truth_(inst_14934)){
var statearr_14975_15000 = state_14960__$1;
(statearr_14975_15000[(1)] = (8));

} else {
var statearr_14976_15001 = state_14960__$1;
(statearr_14976_15001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14961 === (14))){
var inst_14953 = (state_14960[(2)]);
var inst_14954 = cljs.core.async.close_BANG_.call(null,out);
var state_14960__$1 = (function (){var statearr_14978 = state_14960;
(statearr_14978[(13)] = inst_14953);

return statearr_14978;
})();
var statearr_14979_15002 = state_14960__$1;
(statearr_14979_15002[(2)] = inst_14954);

(statearr_14979_15002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14961 === (10))){
var inst_14944 = (state_14960[(2)]);
var state_14960__$1 = state_14960;
var statearr_14980_15003 = state_14960__$1;
(statearr_14980_15003[(2)] = inst_14944);

(statearr_14980_15003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14961 === (8))){
var inst_14933 = (state_14960[(11)]);
var inst_14924 = (state_14960[(8)]);
var tmp14977 = inst_14924;
var inst_14924__$1 = tmp14977;
var inst_14925 = inst_14933;
var state_14960__$1 = (function (){var statearr_14981 = state_14960;
(statearr_14981[(7)] = inst_14925);

(statearr_14981[(8)] = inst_14924__$1);

return statearr_14981;
})();
var statearr_14982_15004 = state_14960__$1;
(statearr_14982_15004[(2)] = null);

(statearr_14982_15004[(1)] = (2));


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
});})(c__7427__auto___14990,out))
;
return ((function (switch__7371__auto__,c__7427__auto___14990,out){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_14986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14986[(0)] = state_machine__7372__auto__);

(statearr_14986[(1)] = (1));

return statearr_14986;
});
var state_machine__7372__auto____1 = (function (state_14960){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_14960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e14987){if((e14987 instanceof Object)){
var ex__7375__auto__ = e14987;
var statearr_14988_15005 = state_14960;
(statearr_14988_15005[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15006 = state_14960;
state_14960 = G__15006;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_14960){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_14960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto___14990,out))
})();
var state__7429__auto__ = (function (){var statearr_14989 = f__7428__auto__.call(null);
(statearr_14989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto___14990);

return statearr_14989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(c__7427__auto___14990,out))
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
var c__7427__auto___15149 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7427__auto___15149,out){
return (function (){
var f__7428__auto__ = (function (){var switch__7371__auto__ = ((function (c__7427__auto___15149,out){
return (function (state_15119){
var state_val_15120 = (state_15119[(1)]);
if((state_val_15120 === (7))){
var inst_15115 = (state_15119[(2)]);
var state_15119__$1 = state_15119;
var statearr_15121_15150 = state_15119__$1;
(statearr_15121_15150[(2)] = inst_15115);

(statearr_15121_15150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (1))){
var inst_15078 = [];
var inst_15079 = inst_15078;
var inst_15080 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15119__$1 = (function (){var statearr_15122 = state_15119;
(statearr_15122[(7)] = inst_15079);

(statearr_15122[(8)] = inst_15080);

return statearr_15122;
})();
var statearr_15123_15151 = state_15119__$1;
(statearr_15123_15151[(2)] = null);

(statearr_15123_15151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (4))){
var inst_15083 = (state_15119[(9)]);
var inst_15083__$1 = (state_15119[(2)]);
var inst_15084 = (inst_15083__$1 == null);
var inst_15085 = cljs.core.not.call(null,inst_15084);
var state_15119__$1 = (function (){var statearr_15124 = state_15119;
(statearr_15124[(9)] = inst_15083__$1);

return statearr_15124;
})();
if(inst_15085){
var statearr_15125_15152 = state_15119__$1;
(statearr_15125_15152[(1)] = (5));

} else {
var statearr_15126_15153 = state_15119__$1;
(statearr_15126_15153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (15))){
var inst_15109 = (state_15119[(2)]);
var state_15119__$1 = state_15119;
var statearr_15127_15154 = state_15119__$1;
(statearr_15127_15154[(2)] = inst_15109);

(statearr_15127_15154[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (13))){
var state_15119__$1 = state_15119;
var statearr_15128_15155 = state_15119__$1;
(statearr_15128_15155[(2)] = null);

(statearr_15128_15155[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (6))){
var inst_15079 = (state_15119[(7)]);
var inst_15104 = inst_15079.length;
var inst_15105 = (inst_15104 > (0));
var state_15119__$1 = state_15119;
if(cljs.core.truth_(inst_15105)){
var statearr_15129_15156 = state_15119__$1;
(statearr_15129_15156[(1)] = (12));

} else {
var statearr_15130_15157 = state_15119__$1;
(statearr_15130_15157[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (3))){
var inst_15117 = (state_15119[(2)]);
var state_15119__$1 = state_15119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15119__$1,inst_15117);
} else {
if((state_val_15120 === (12))){
var inst_15079 = (state_15119[(7)]);
var inst_15107 = cljs.core.vec.call(null,inst_15079);
var state_15119__$1 = state_15119;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15119__$1,(15),out,inst_15107);
} else {
if((state_val_15120 === (2))){
var state_15119__$1 = state_15119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15119__$1,(4),ch);
} else {
if((state_val_15120 === (11))){
var inst_15087 = (state_15119[(10)]);
var inst_15083 = (state_15119[(9)]);
var inst_15097 = (state_15119[(2)]);
var inst_15098 = [];
var inst_15099 = inst_15098.push(inst_15083);
var inst_15079 = inst_15098;
var inst_15080 = inst_15087;
var state_15119__$1 = (function (){var statearr_15131 = state_15119;
(statearr_15131[(7)] = inst_15079);

(statearr_15131[(11)] = inst_15097);

(statearr_15131[(12)] = inst_15099);

(statearr_15131[(8)] = inst_15080);

return statearr_15131;
})();
var statearr_15132_15158 = state_15119__$1;
(statearr_15132_15158[(2)] = null);

(statearr_15132_15158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (9))){
var inst_15079 = (state_15119[(7)]);
var inst_15095 = cljs.core.vec.call(null,inst_15079);
var state_15119__$1 = state_15119;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15119__$1,(11),out,inst_15095);
} else {
if((state_val_15120 === (5))){
var inst_15087 = (state_15119[(10)]);
var inst_15080 = (state_15119[(8)]);
var inst_15083 = (state_15119[(9)]);
var inst_15087__$1 = f.call(null,inst_15083);
var inst_15088 = cljs.core._EQ_.call(null,inst_15087__$1,inst_15080);
var inst_15089 = cljs.core.keyword_identical_QMARK_.call(null,inst_15080,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15090 = (inst_15088) || (inst_15089);
var state_15119__$1 = (function (){var statearr_15133 = state_15119;
(statearr_15133[(10)] = inst_15087__$1);

return statearr_15133;
})();
if(cljs.core.truth_(inst_15090)){
var statearr_15134_15159 = state_15119__$1;
(statearr_15134_15159[(1)] = (8));

} else {
var statearr_15135_15160 = state_15119__$1;
(statearr_15135_15160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (14))){
var inst_15112 = (state_15119[(2)]);
var inst_15113 = cljs.core.async.close_BANG_.call(null,out);
var state_15119__$1 = (function (){var statearr_15137 = state_15119;
(statearr_15137[(13)] = inst_15112);

return statearr_15137;
})();
var statearr_15138_15161 = state_15119__$1;
(statearr_15138_15161[(2)] = inst_15113);

(statearr_15138_15161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (10))){
var inst_15102 = (state_15119[(2)]);
var state_15119__$1 = state_15119;
var statearr_15139_15162 = state_15119__$1;
(statearr_15139_15162[(2)] = inst_15102);

(statearr_15139_15162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15120 === (8))){
var inst_15087 = (state_15119[(10)]);
var inst_15079 = (state_15119[(7)]);
var inst_15083 = (state_15119[(9)]);
var inst_15092 = inst_15079.push(inst_15083);
var tmp15136 = inst_15079;
var inst_15079__$1 = tmp15136;
var inst_15080 = inst_15087;
var state_15119__$1 = (function (){var statearr_15140 = state_15119;
(statearr_15140[(7)] = inst_15079__$1);

(statearr_15140[(14)] = inst_15092);

(statearr_15140[(8)] = inst_15080);

return statearr_15140;
})();
var statearr_15141_15163 = state_15119__$1;
(statearr_15141_15163[(2)] = null);

(statearr_15141_15163[(1)] = (2));


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
});})(c__7427__auto___15149,out))
;
return ((function (switch__7371__auto__,c__7427__auto___15149,out){
return (function() {
var state_machine__7372__auto__ = null;
var state_machine__7372__auto____0 = (function (){
var statearr_15145 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15145[(0)] = state_machine__7372__auto__);

(statearr_15145[(1)] = (1));

return statearr_15145;
});
var state_machine__7372__auto____1 = (function (state_15119){
while(true){
var ret_value__7373__auto__ = (function (){try{while(true){
var result__7374__auto__ = switch__7371__auto__.call(null,state_15119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7374__auto__;
}
break;
}
}catch (e15146){if((e15146 instanceof Object)){
var ex__7375__auto__ = e15146;
var statearr_15147_15164 = state_15119;
(statearr_15147_15164[(5)] = ex__7375__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15165 = state_15119;
state_15119 = G__15165;
continue;
} else {
return ret_value__7373__auto__;
}
break;
}
});
state_machine__7372__auto__ = function(state_15119){
switch(arguments.length){
case 0:
return state_machine__7372__auto____0.call(this);
case 1:
return state_machine__7372__auto____1.call(this,state_15119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7372__auto____0;
state_machine__7372__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7372__auto____1;
return state_machine__7372__auto__;
})()
;})(switch__7371__auto__,c__7427__auto___15149,out))
})();
var state__7429__auto__ = (function (){var statearr_15148 = f__7428__auto__.call(null);
(statearr_15148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7427__auto___15149);

return statearr_15148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7429__auto__);
});})(c__7427__auto___15149,out))
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
