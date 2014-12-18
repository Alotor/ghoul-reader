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
if(typeof cljs.core.async.t11190 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11190 = (function (f,fn_handler,meta11191){
this.f = f;
this.fn_handler = fn_handler;
this.meta11191 = meta11191;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11190.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11190.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t11190.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t11190.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11192){
var self__ = this;
var _11192__$1 = this;
return self__.meta11191;
});

cljs.core.async.t11190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11192,meta11191__$1){
var self__ = this;
var _11192__$1 = this;
return (new cljs.core.async.t11190(self__.f,self__.fn_handler,meta11191__$1));
});

cljs.core.async.t11190.cljs$lang$type = true;

cljs.core.async.t11190.cljs$lang$ctorStr = "cljs.core.async/t11190";

cljs.core.async.t11190.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t11190");
});

cljs.core.async.__GT_t11190 = (function __GT_t11190(f__$1,fn_handler__$1,meta11191){
return (new cljs.core.async.t11190(f__$1,fn_handler__$1,meta11191));
});

}

return (new cljs.core.async.t11190(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
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
var G__11194 = buff;
if(G__11194){
var bit__4284__auto__ = null;
if(cljs.core.truth_((function (){var or__3608__auto__ = bit__4284__auto__;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return G__11194.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__11194.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11194);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11194);
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
var val_11195 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11195);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_11195,ret){
return (function (){
return fn1.call(null,val_11195);
});})(val_11195,ret))
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
var n__4490__auto___11196 = n;
var x_11197 = (0);
while(true){
if((x_11197 < n__4490__auto___11196)){
(a[x_11197] = (0));

var G__11198 = (x_11197 + (1));
x_11197 = G__11198;
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

var G__11199 = (i + (1));
i = G__11199;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t11203 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11203 = (function (flag,alt_flag,meta11204){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11204 = meta11204;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11203.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11203.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t11203.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t11203.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11205){
var self__ = this;
var _11205__$1 = this;
return self__.meta11204;
});})(flag))
;

cljs.core.async.t11203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11205,meta11204__$1){
var self__ = this;
var _11205__$1 = this;
return (new cljs.core.async.t11203(self__.flag,self__.alt_flag,meta11204__$1));
});})(flag))
;

cljs.core.async.t11203.cljs$lang$type = true;

cljs.core.async.t11203.cljs$lang$ctorStr = "cljs.core.async/t11203";

cljs.core.async.t11203.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t11203");
});})(flag))
;

cljs.core.async.__GT_t11203 = ((function (flag){
return (function __GT_t11203(flag__$1,alt_flag__$1,meta11204){
return (new cljs.core.async.t11203(flag__$1,alt_flag__$1,meta11204));
});})(flag))
;

}

return (new cljs.core.async.t11203(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t11209 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11209 = (function (cb,flag,alt_handler,meta11210){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11210 = meta11210;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11209.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11209.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t11209.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t11209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11211){
var self__ = this;
var _11211__$1 = this;
return self__.meta11210;
});

cljs.core.async.t11209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11211,meta11210__$1){
var self__ = this;
var _11211__$1 = this;
return (new cljs.core.async.t11209(self__.cb,self__.flag,self__.alt_handler,meta11210__$1));
});

cljs.core.async.t11209.cljs$lang$type = true;

cljs.core.async.t11209.cljs$lang$ctorStr = "cljs.core.async/t11209";

cljs.core.async.t11209.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t11209");
});

cljs.core.async.__GT_t11209 = (function __GT_t11209(cb__$1,flag__$1,alt_handler__$1,meta11210){
return (new cljs.core.async.t11209(cb__$1,flag__$1,alt_handler__$1,meta11210));
});

}

return (new cljs.core.async.t11209(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
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
return (function (p1__11212_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11212_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11213_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11213_SHARP_,port], null));
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
var G__11214 = (i + (1));
i = G__11214;
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
var alts_BANG___delegate = function (ports,p__11215){
var map__11217 = p__11215;
var map__11217__$1 = ((cljs.core.seq_QMARK_.call(null,map__11217))?cljs.core.apply.call(null,cljs.core.hash_map,map__11217):map__11217);
var opts = map__11217__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__11215 = null;
if (arguments.length > 1) {
  p__11215 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__11215);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11218){
var ports = cljs.core.first(arglist__11218);
var p__11215 = cljs.core.rest(arglist__11218);
return alts_BANG___delegate(ports,p__11215);
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
var c__5809__auto___11313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___11313){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___11313){
return (function (state_11289){
var state_val_11290 = (state_11289[(1)]);
if((state_val_11290 === (7))){
var inst_11285 = (state_11289[(2)]);
var state_11289__$1 = state_11289;
var statearr_11291_11314 = state_11289__$1;
(statearr_11291_11314[(2)] = inst_11285);

(statearr_11291_11314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (1))){
var state_11289__$1 = state_11289;
var statearr_11292_11315 = state_11289__$1;
(statearr_11292_11315[(2)] = null);

(statearr_11292_11315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (4))){
var inst_11268 = (state_11289[(7)]);
var inst_11268__$1 = (state_11289[(2)]);
var inst_11269 = (inst_11268__$1 == null);
var state_11289__$1 = (function (){var statearr_11293 = state_11289;
(statearr_11293[(7)] = inst_11268__$1);

return statearr_11293;
})();
if(cljs.core.truth_(inst_11269)){
var statearr_11294_11316 = state_11289__$1;
(statearr_11294_11316[(1)] = (5));

} else {
var statearr_11295_11317 = state_11289__$1;
(statearr_11295_11317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (13))){
var state_11289__$1 = state_11289;
var statearr_11296_11318 = state_11289__$1;
(statearr_11296_11318[(2)] = null);

(statearr_11296_11318[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (6))){
var inst_11268 = (state_11289[(7)]);
var state_11289__$1 = state_11289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11289__$1,(11),to,inst_11268);
} else {
if((state_val_11290 === (3))){
var inst_11287 = (state_11289[(2)]);
var state_11289__$1 = state_11289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11289__$1,inst_11287);
} else {
if((state_val_11290 === (12))){
var state_11289__$1 = state_11289;
var statearr_11297_11319 = state_11289__$1;
(statearr_11297_11319[(2)] = null);

(statearr_11297_11319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (2))){
var state_11289__$1 = state_11289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11289__$1,(4),from);
} else {
if((state_val_11290 === (11))){
var inst_11278 = (state_11289[(2)]);
var state_11289__$1 = state_11289;
if(cljs.core.truth_(inst_11278)){
var statearr_11298_11320 = state_11289__$1;
(statearr_11298_11320[(1)] = (12));

} else {
var statearr_11299_11321 = state_11289__$1;
(statearr_11299_11321[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (9))){
var state_11289__$1 = state_11289;
var statearr_11300_11322 = state_11289__$1;
(statearr_11300_11322[(2)] = null);

(statearr_11300_11322[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (5))){
var state_11289__$1 = state_11289;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11301_11323 = state_11289__$1;
(statearr_11301_11323[(1)] = (8));

} else {
var statearr_11302_11324 = state_11289__$1;
(statearr_11302_11324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (14))){
var inst_11283 = (state_11289[(2)]);
var state_11289__$1 = state_11289;
var statearr_11303_11325 = state_11289__$1;
(statearr_11303_11325[(2)] = inst_11283);

(statearr_11303_11325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (10))){
var inst_11275 = (state_11289[(2)]);
var state_11289__$1 = state_11289;
var statearr_11304_11326 = state_11289__$1;
(statearr_11304_11326[(2)] = inst_11275);

(statearr_11304_11326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11290 === (8))){
var inst_11272 = cljs.core.async.close_BANG_.call(null,to);
var state_11289__$1 = state_11289;
var statearr_11305_11327 = state_11289__$1;
(statearr_11305_11327[(2)] = inst_11272);

(statearr_11305_11327[(1)] = (10));


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
});})(c__5809__auto___11313))
;
return ((function (switch__5794__auto__,c__5809__auto___11313){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_11309 = [null,null,null,null,null,null,null,null];
(statearr_11309[(0)] = state_machine__5795__auto__);

(statearr_11309[(1)] = (1));

return statearr_11309;
});
var state_machine__5795__auto____1 = (function (state_11289){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_11289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e11310){if((e11310 instanceof Object)){
var ex__5798__auto__ = e11310;
var statearr_11311_11328 = state_11289;
(statearr_11311_11328[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11329 = state_11289;
state_11289 = G__11329;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_11289){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_11289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___11313))
})();
var state__5811__auto__ = (function (){var statearr_11312 = f__5810__auto__.call(null);
(statearr_11312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___11313);

return statearr_11312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___11313))
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
return (function (p__11513){
var vec__11514 = p__11513;
var v = cljs.core.nth.call(null,vec__11514,(0),null);
var p = cljs.core.nth.call(null,vec__11514,(1),null);
var job = vec__11514;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__5809__auto___11696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___11696,res,vec__11514,v,p,job,jobs,results){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___11696,res,vec__11514,v,p,job,jobs,results){
return (function (state_11519){
var state_val_11520 = (state_11519[(1)]);
if((state_val_11520 === (2))){
var inst_11516 = (state_11519[(2)]);
var inst_11517 = cljs.core.async.close_BANG_.call(null,res);
var state_11519__$1 = (function (){var statearr_11521 = state_11519;
(statearr_11521[(7)] = inst_11516);

return statearr_11521;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11519__$1,inst_11517);
} else {
if((state_val_11520 === (1))){
var state_11519__$1 = state_11519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11519__$1,(2),res,v);
} else {
return null;
}
}
});})(c__5809__auto___11696,res,vec__11514,v,p,job,jobs,results))
;
return ((function (switch__5794__auto__,c__5809__auto___11696,res,vec__11514,v,p,job,jobs,results){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_11525 = [null,null,null,null,null,null,null,null];
(statearr_11525[(0)] = state_machine__5795__auto__);

(statearr_11525[(1)] = (1));

return statearr_11525;
});
var state_machine__5795__auto____1 = (function (state_11519){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_11519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e11526){if((e11526 instanceof Object)){
var ex__5798__auto__ = e11526;
var statearr_11527_11697 = state_11519;
(statearr_11527_11697[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11698 = state_11519;
state_11519 = G__11698;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_11519){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_11519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___11696,res,vec__11514,v,p,job,jobs,results))
})();
var state__5811__auto__ = (function (){var statearr_11528 = f__5810__auto__.call(null);
(statearr_11528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___11696);

return statearr_11528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___11696,res,vec__11514,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__11529){
var vec__11530 = p__11529;
var v = cljs.core.nth.call(null,vec__11530,(0),null);
var p = cljs.core.nth.call(null,vec__11530,(1),null);
var job = vec__11530;
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
var n__4490__auto___11699 = n;
var __11700 = (0);
while(true){
if((__11700 < n__4490__auto___11699)){
var G__11531_11701 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__11531_11701) {
case "async":
var c__5809__auto___11703 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11700,c__5809__auto___11703,G__11531_11701,n__4490__auto___11699,jobs,results,process,async){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (__11700,c__5809__auto___11703,G__11531_11701,n__4490__auto___11699,jobs,results,process,async){
return (function (state_11544){
var state_val_11545 = (state_11544[(1)]);
if((state_val_11545 === (7))){
var inst_11540 = (state_11544[(2)]);
var state_11544__$1 = state_11544;
var statearr_11546_11704 = state_11544__$1;
(statearr_11546_11704[(2)] = inst_11540);

(statearr_11546_11704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11545 === (6))){
var state_11544__$1 = state_11544;
var statearr_11547_11705 = state_11544__$1;
(statearr_11547_11705[(2)] = null);

(statearr_11547_11705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11545 === (5))){
var state_11544__$1 = state_11544;
var statearr_11548_11706 = state_11544__$1;
(statearr_11548_11706[(2)] = null);

(statearr_11548_11706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11545 === (4))){
var inst_11534 = (state_11544[(2)]);
var inst_11535 = async.call(null,inst_11534);
var state_11544__$1 = state_11544;
if(cljs.core.truth_(inst_11535)){
var statearr_11549_11707 = state_11544__$1;
(statearr_11549_11707[(1)] = (5));

} else {
var statearr_11550_11708 = state_11544__$1;
(statearr_11550_11708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11545 === (3))){
var inst_11542 = (state_11544[(2)]);
var state_11544__$1 = state_11544;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11544__$1,inst_11542);
} else {
if((state_val_11545 === (2))){
var state_11544__$1 = state_11544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11544__$1,(4),jobs);
} else {
if((state_val_11545 === (1))){
var state_11544__$1 = state_11544;
var statearr_11551_11709 = state_11544__$1;
(statearr_11551_11709[(2)] = null);

(statearr_11551_11709[(1)] = (2));


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
});})(__11700,c__5809__auto___11703,G__11531_11701,n__4490__auto___11699,jobs,results,process,async))
;
return ((function (__11700,switch__5794__auto__,c__5809__auto___11703,G__11531_11701,n__4490__auto___11699,jobs,results,process,async){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_11555 = [null,null,null,null,null,null,null];
(statearr_11555[(0)] = state_machine__5795__auto__);

(statearr_11555[(1)] = (1));

return statearr_11555;
});
var state_machine__5795__auto____1 = (function (state_11544){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_11544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e11556){if((e11556 instanceof Object)){
var ex__5798__auto__ = e11556;
var statearr_11557_11710 = state_11544;
(statearr_11557_11710[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11711 = state_11544;
state_11544 = G__11711;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_11544){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_11544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(__11700,switch__5794__auto__,c__5809__auto___11703,G__11531_11701,n__4490__auto___11699,jobs,results,process,async))
})();
var state__5811__auto__ = (function (){var statearr_11558 = f__5810__auto__.call(null);
(statearr_11558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___11703);

return statearr_11558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(__11700,c__5809__auto___11703,G__11531_11701,n__4490__auto___11699,jobs,results,process,async))
);


break;
case "compute":
var c__5809__auto___11712 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11700,c__5809__auto___11712,G__11531_11701,n__4490__auto___11699,jobs,results,process,async){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (__11700,c__5809__auto___11712,G__11531_11701,n__4490__auto___11699,jobs,results,process,async){
return (function (state_11571){
var state_val_11572 = (state_11571[(1)]);
if((state_val_11572 === (7))){
var inst_11567 = (state_11571[(2)]);
var state_11571__$1 = state_11571;
var statearr_11573_11713 = state_11571__$1;
(statearr_11573_11713[(2)] = inst_11567);

(statearr_11573_11713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11572 === (6))){
var state_11571__$1 = state_11571;
var statearr_11574_11714 = state_11571__$1;
(statearr_11574_11714[(2)] = null);

(statearr_11574_11714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11572 === (5))){
var state_11571__$1 = state_11571;
var statearr_11575_11715 = state_11571__$1;
(statearr_11575_11715[(2)] = null);

(statearr_11575_11715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11572 === (4))){
var inst_11561 = (state_11571[(2)]);
var inst_11562 = process.call(null,inst_11561);
var state_11571__$1 = state_11571;
if(cljs.core.truth_(inst_11562)){
var statearr_11576_11716 = state_11571__$1;
(statearr_11576_11716[(1)] = (5));

} else {
var statearr_11577_11717 = state_11571__$1;
(statearr_11577_11717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11572 === (3))){
var inst_11569 = (state_11571[(2)]);
var state_11571__$1 = state_11571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11571__$1,inst_11569);
} else {
if((state_val_11572 === (2))){
var state_11571__$1 = state_11571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11571__$1,(4),jobs);
} else {
if((state_val_11572 === (1))){
var state_11571__$1 = state_11571;
var statearr_11578_11718 = state_11571__$1;
(statearr_11578_11718[(2)] = null);

(statearr_11578_11718[(1)] = (2));


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
});})(__11700,c__5809__auto___11712,G__11531_11701,n__4490__auto___11699,jobs,results,process,async))
;
return ((function (__11700,switch__5794__auto__,c__5809__auto___11712,G__11531_11701,n__4490__auto___11699,jobs,results,process,async){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_11582 = [null,null,null,null,null,null,null];
(statearr_11582[(0)] = state_machine__5795__auto__);

(statearr_11582[(1)] = (1));

return statearr_11582;
});
var state_machine__5795__auto____1 = (function (state_11571){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_11571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e11583){if((e11583 instanceof Object)){
var ex__5798__auto__ = e11583;
var statearr_11584_11719 = state_11571;
(statearr_11584_11719[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11720 = state_11571;
state_11571 = G__11720;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_11571){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_11571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(__11700,switch__5794__auto__,c__5809__auto___11712,G__11531_11701,n__4490__auto___11699,jobs,results,process,async))
})();
var state__5811__auto__ = (function (){var statearr_11585 = f__5810__auto__.call(null);
(statearr_11585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___11712);

return statearr_11585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(__11700,c__5809__auto___11712,G__11531_11701,n__4490__auto___11699,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__11721 = (__11700 + (1));
__11700 = G__11721;
continue;
} else {
}
break;
}

var c__5809__auto___11722 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___11722,jobs,results,process,async){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___11722,jobs,results,process,async){
return (function (state_11607){
var state_val_11608 = (state_11607[(1)]);
if((state_val_11608 === (9))){
var inst_11600 = (state_11607[(2)]);
var state_11607__$1 = (function (){var statearr_11609 = state_11607;
(statearr_11609[(7)] = inst_11600);

return statearr_11609;
})();
var statearr_11610_11723 = state_11607__$1;
(statearr_11610_11723[(2)] = null);

(statearr_11610_11723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11608 === (8))){
var inst_11593 = (state_11607[(8)]);
var inst_11598 = (state_11607[(2)]);
var state_11607__$1 = (function (){var statearr_11611 = state_11607;
(statearr_11611[(9)] = inst_11598);

return statearr_11611;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11607__$1,(9),results,inst_11593);
} else {
if((state_val_11608 === (7))){
var inst_11603 = (state_11607[(2)]);
var state_11607__$1 = state_11607;
var statearr_11612_11724 = state_11607__$1;
(statearr_11612_11724[(2)] = inst_11603);

(statearr_11612_11724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11608 === (6))){
var inst_11593 = (state_11607[(8)]);
var inst_11588 = (state_11607[(10)]);
var inst_11593__$1 = cljs.core.async.chan.call(null,(1));
var inst_11594 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11595 = [inst_11588,inst_11593__$1];
var inst_11596 = (new cljs.core.PersistentVector(null,2,(5),inst_11594,inst_11595,null));
var state_11607__$1 = (function (){var statearr_11613 = state_11607;
(statearr_11613[(8)] = inst_11593__$1);

return statearr_11613;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11607__$1,(8),jobs,inst_11596);
} else {
if((state_val_11608 === (5))){
var inst_11591 = cljs.core.async.close_BANG_.call(null,jobs);
var state_11607__$1 = state_11607;
var statearr_11614_11725 = state_11607__$1;
(statearr_11614_11725[(2)] = inst_11591);

(statearr_11614_11725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11608 === (4))){
var inst_11588 = (state_11607[(10)]);
var inst_11588__$1 = (state_11607[(2)]);
var inst_11589 = (inst_11588__$1 == null);
var state_11607__$1 = (function (){var statearr_11615 = state_11607;
(statearr_11615[(10)] = inst_11588__$1);

return statearr_11615;
})();
if(cljs.core.truth_(inst_11589)){
var statearr_11616_11726 = state_11607__$1;
(statearr_11616_11726[(1)] = (5));

} else {
var statearr_11617_11727 = state_11607__$1;
(statearr_11617_11727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11608 === (3))){
var inst_11605 = (state_11607[(2)]);
var state_11607__$1 = state_11607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11607__$1,inst_11605);
} else {
if((state_val_11608 === (2))){
var state_11607__$1 = state_11607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11607__$1,(4),from);
} else {
if((state_val_11608 === (1))){
var state_11607__$1 = state_11607;
var statearr_11618_11728 = state_11607__$1;
(statearr_11618_11728[(2)] = null);

(statearr_11618_11728[(1)] = (2));


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
});})(c__5809__auto___11722,jobs,results,process,async))
;
return ((function (switch__5794__auto__,c__5809__auto___11722,jobs,results,process,async){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_11622 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11622[(0)] = state_machine__5795__auto__);

(statearr_11622[(1)] = (1));

return statearr_11622;
});
var state_machine__5795__auto____1 = (function (state_11607){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_11607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e11623){if((e11623 instanceof Object)){
var ex__5798__auto__ = e11623;
var statearr_11624_11729 = state_11607;
(statearr_11624_11729[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11730 = state_11607;
state_11607 = G__11730;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_11607){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_11607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___11722,jobs,results,process,async))
})();
var state__5811__auto__ = (function (){var statearr_11625 = f__5810__auto__.call(null);
(statearr_11625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___11722);

return statearr_11625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___11722,jobs,results,process,async))
);


var c__5809__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto__,jobs,results,process,async){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto__,jobs,results,process,async){
return (function (state_11663){
var state_val_11664 = (state_11663[(1)]);
if((state_val_11664 === (7))){
var inst_11659 = (state_11663[(2)]);
var state_11663__$1 = state_11663;
var statearr_11665_11731 = state_11663__$1;
(statearr_11665_11731[(2)] = inst_11659);

(statearr_11665_11731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11664 === (20))){
var state_11663__$1 = state_11663;
var statearr_11666_11732 = state_11663__$1;
(statearr_11666_11732[(2)] = null);

(statearr_11666_11732[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11664 === (1))){
var state_11663__$1 = state_11663;
var statearr_11667_11733 = state_11663__$1;
(statearr_11667_11733[(2)] = null);

(statearr_11667_11733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11664 === (4))){
var inst_11628 = (state_11663[(7)]);
var inst_11628__$1 = (state_11663[(2)]);
var inst_11629 = (inst_11628__$1 == null);
var state_11663__$1 = (function (){var statearr_11668 = state_11663;
(statearr_11668[(7)] = inst_11628__$1);

return statearr_11668;
})();
if(cljs.core.truth_(inst_11629)){
var statearr_11669_11734 = state_11663__$1;
(statearr_11669_11734[(1)] = (5));

} else {
var statearr_11670_11735 = state_11663__$1;
(statearr_11670_11735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11664 === (15))){
var inst_11641 = (state_11663[(8)]);
var state_11663__$1 = state_11663;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11663__$1,(18),to,inst_11641);
} else {
if((state_val_11664 === (21))){
var inst_11654 = (state_11663[(2)]);
var state_11663__$1 = state_11663;
var statearr_11671_11736 = state_11663__$1;
(statearr_11671_11736[(2)] = inst_11654);

(statearr_11671_11736[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11664 === (13))){
var inst_11656 = (state_11663[(2)]);
var state_11663__$1 = (function (){var statearr_11672 = state_11663;
(statearr_11672[(9)] = inst_11656);

return statearr_11672;
})();
var statearr_11673_11737 = state_11663__$1;
(statearr_11673_11737[(2)] = null);

(statearr_11673_11737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11664 === (6))){
var inst_11628 = (state_11663[(7)]);
var state_11663__$1 = state_11663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11663__$1,(11),inst_11628);
} else {
if((state_val_11664 === (17))){
var inst_11649 = (state_11663[(2)]);
var state_11663__$1 = state_11663;
if(cljs.core.truth_(inst_11649)){
var statearr_11674_11738 = state_11663__$1;
(statearr_11674_11738[(1)] = (19));

} else {
var statearr_11675_11739 = state_11663__$1;
(statearr_11675_11739[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11664 === (3))){
var inst_11661 = (state_11663[(2)]);
var state_11663__$1 = state_11663;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11663__$1,inst_11661);
} else {
if((state_val_11664 === (12))){
var inst_11638 = (state_11663[(10)]);
var state_11663__$1 = state_11663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11663__$1,(14),inst_11638);
} else {
if((state_val_11664 === (2))){
var state_11663__$1 = state_11663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11663__$1,(4),results);
} else {
if((state_val_11664 === (19))){
var state_11663__$1 = state_11663;
var statearr_11676_11740 = state_11663__$1;
(statearr_11676_11740[(2)] = null);

(statearr_11676_11740[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11664 === (11))){
var inst_11638 = (state_11663[(2)]);
var state_11663__$1 = (function (){var statearr_11677 = state_11663;
(statearr_11677[(10)] = inst_11638);

return statearr_11677;
})();
var statearr_11678_11741 = state_11663__$1;
(statearr_11678_11741[(2)] = null);

(statearr_11678_11741[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11664 === (9))){
var state_11663__$1 = state_11663;
var statearr_11679_11742 = state_11663__$1;
(statearr_11679_11742[(2)] = null);

(statearr_11679_11742[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11664 === (5))){
var state_11663__$1 = state_11663;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11680_11743 = state_11663__$1;
(statearr_11680_11743[(1)] = (8));

} else {
var statearr_11681_11744 = state_11663__$1;
(statearr_11681_11744[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11664 === (14))){
var inst_11643 = (state_11663[(11)]);
var inst_11641 = (state_11663[(8)]);
var inst_11641__$1 = (state_11663[(2)]);
var inst_11642 = (inst_11641__$1 == null);
var inst_11643__$1 = cljs.core.not.call(null,inst_11642);
var state_11663__$1 = (function (){var statearr_11682 = state_11663;
(statearr_11682[(11)] = inst_11643__$1);

(statearr_11682[(8)] = inst_11641__$1);

return statearr_11682;
})();
if(inst_11643__$1){
var statearr_11683_11745 = state_11663__$1;
(statearr_11683_11745[(1)] = (15));

} else {
var statearr_11684_11746 = state_11663__$1;
(statearr_11684_11746[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11664 === (16))){
var inst_11643 = (state_11663[(11)]);
var state_11663__$1 = state_11663;
var statearr_11685_11747 = state_11663__$1;
(statearr_11685_11747[(2)] = inst_11643);

(statearr_11685_11747[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11664 === (10))){
var inst_11635 = (state_11663[(2)]);
var state_11663__$1 = state_11663;
var statearr_11686_11748 = state_11663__$1;
(statearr_11686_11748[(2)] = inst_11635);

(statearr_11686_11748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11664 === (18))){
var inst_11646 = (state_11663[(2)]);
var state_11663__$1 = state_11663;
var statearr_11687_11749 = state_11663__$1;
(statearr_11687_11749[(2)] = inst_11646);

(statearr_11687_11749[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11664 === (8))){
var inst_11632 = cljs.core.async.close_BANG_.call(null,to);
var state_11663__$1 = state_11663;
var statearr_11688_11750 = state_11663__$1;
(statearr_11688_11750[(2)] = inst_11632);

(statearr_11688_11750[(1)] = (10));


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
var statearr_11692 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11692[(0)] = state_machine__5795__auto__);

(statearr_11692[(1)] = (1));

return statearr_11692;
});
var state_machine__5795__auto____1 = (function (state_11663){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_11663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e11693){if((e11693 instanceof Object)){
var ex__5798__auto__ = e11693;
var statearr_11694_11751 = state_11663;
(statearr_11694_11751[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11752 = state_11663;
state_11663 = G__11752;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_11663){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_11663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__,jobs,results,process,async))
})();
var state__5811__auto__ = (function (){var statearr_11695 = f__5810__auto__.call(null);
(statearr_11695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_11695;
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
var c__5809__auto___11853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___11853,tc,fc){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___11853,tc,fc){
return (function (state_11828){
var state_val_11829 = (state_11828[(1)]);
if((state_val_11829 === (7))){
var inst_11824 = (state_11828[(2)]);
var state_11828__$1 = state_11828;
var statearr_11830_11854 = state_11828__$1;
(statearr_11830_11854[(2)] = inst_11824);

(statearr_11830_11854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11829 === (1))){
var state_11828__$1 = state_11828;
var statearr_11831_11855 = state_11828__$1;
(statearr_11831_11855[(2)] = null);

(statearr_11831_11855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11829 === (4))){
var inst_11805 = (state_11828[(7)]);
var inst_11805__$1 = (state_11828[(2)]);
var inst_11806 = (inst_11805__$1 == null);
var state_11828__$1 = (function (){var statearr_11832 = state_11828;
(statearr_11832[(7)] = inst_11805__$1);

return statearr_11832;
})();
if(cljs.core.truth_(inst_11806)){
var statearr_11833_11856 = state_11828__$1;
(statearr_11833_11856[(1)] = (5));

} else {
var statearr_11834_11857 = state_11828__$1;
(statearr_11834_11857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11829 === (13))){
var state_11828__$1 = state_11828;
var statearr_11835_11858 = state_11828__$1;
(statearr_11835_11858[(2)] = null);

(statearr_11835_11858[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11829 === (6))){
var inst_11805 = (state_11828[(7)]);
var inst_11811 = p.call(null,inst_11805);
var state_11828__$1 = state_11828;
if(cljs.core.truth_(inst_11811)){
var statearr_11836_11859 = state_11828__$1;
(statearr_11836_11859[(1)] = (9));

} else {
var statearr_11837_11860 = state_11828__$1;
(statearr_11837_11860[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11829 === (3))){
var inst_11826 = (state_11828[(2)]);
var state_11828__$1 = state_11828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11828__$1,inst_11826);
} else {
if((state_val_11829 === (12))){
var state_11828__$1 = state_11828;
var statearr_11838_11861 = state_11828__$1;
(statearr_11838_11861[(2)] = null);

(statearr_11838_11861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11829 === (2))){
var state_11828__$1 = state_11828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11828__$1,(4),ch);
} else {
if((state_val_11829 === (11))){
var inst_11805 = (state_11828[(7)]);
var inst_11815 = (state_11828[(2)]);
var state_11828__$1 = state_11828;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11828__$1,(8),inst_11815,inst_11805);
} else {
if((state_val_11829 === (9))){
var state_11828__$1 = state_11828;
var statearr_11839_11862 = state_11828__$1;
(statearr_11839_11862[(2)] = tc);

(statearr_11839_11862[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11829 === (5))){
var inst_11808 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11809 = cljs.core.async.close_BANG_.call(null,fc);
var state_11828__$1 = (function (){var statearr_11840 = state_11828;
(statearr_11840[(8)] = inst_11808);

return statearr_11840;
})();
var statearr_11841_11863 = state_11828__$1;
(statearr_11841_11863[(2)] = inst_11809);

(statearr_11841_11863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11829 === (14))){
var inst_11822 = (state_11828[(2)]);
var state_11828__$1 = state_11828;
var statearr_11842_11864 = state_11828__$1;
(statearr_11842_11864[(2)] = inst_11822);

(statearr_11842_11864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11829 === (10))){
var state_11828__$1 = state_11828;
var statearr_11843_11865 = state_11828__$1;
(statearr_11843_11865[(2)] = fc);

(statearr_11843_11865[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11829 === (8))){
var inst_11817 = (state_11828[(2)]);
var state_11828__$1 = state_11828;
if(cljs.core.truth_(inst_11817)){
var statearr_11844_11866 = state_11828__$1;
(statearr_11844_11866[(1)] = (12));

} else {
var statearr_11845_11867 = state_11828__$1;
(statearr_11845_11867[(1)] = (13));

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
});})(c__5809__auto___11853,tc,fc))
;
return ((function (switch__5794__auto__,c__5809__auto___11853,tc,fc){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_11849 = [null,null,null,null,null,null,null,null,null];
(statearr_11849[(0)] = state_machine__5795__auto__);

(statearr_11849[(1)] = (1));

return statearr_11849;
});
var state_machine__5795__auto____1 = (function (state_11828){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_11828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e11850){if((e11850 instanceof Object)){
var ex__5798__auto__ = e11850;
var statearr_11851_11868 = state_11828;
(statearr_11851_11868[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11869 = state_11828;
state_11828 = G__11869;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_11828){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_11828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___11853,tc,fc))
})();
var state__5811__auto__ = (function (){var statearr_11852 = f__5810__auto__.call(null);
(statearr_11852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___11853);

return statearr_11852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___11853,tc,fc))
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
return (function (state_11916){
var state_val_11917 = (state_11916[(1)]);
if((state_val_11917 === (7))){
var inst_11912 = (state_11916[(2)]);
var state_11916__$1 = state_11916;
var statearr_11918_11934 = state_11916__$1;
(statearr_11918_11934[(2)] = inst_11912);

(statearr_11918_11934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (6))){
var inst_11902 = (state_11916[(7)]);
var inst_11905 = (state_11916[(8)]);
var inst_11909 = f.call(null,inst_11902,inst_11905);
var inst_11902__$1 = inst_11909;
var state_11916__$1 = (function (){var statearr_11919 = state_11916;
(statearr_11919[(7)] = inst_11902__$1);

return statearr_11919;
})();
var statearr_11920_11935 = state_11916__$1;
(statearr_11920_11935[(2)] = null);

(statearr_11920_11935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (5))){
var inst_11902 = (state_11916[(7)]);
var state_11916__$1 = state_11916;
var statearr_11921_11936 = state_11916__$1;
(statearr_11921_11936[(2)] = inst_11902);

(statearr_11921_11936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (4))){
var inst_11905 = (state_11916[(8)]);
var inst_11905__$1 = (state_11916[(2)]);
var inst_11906 = (inst_11905__$1 == null);
var state_11916__$1 = (function (){var statearr_11922 = state_11916;
(statearr_11922[(8)] = inst_11905__$1);

return statearr_11922;
})();
if(cljs.core.truth_(inst_11906)){
var statearr_11923_11937 = state_11916__$1;
(statearr_11923_11937[(1)] = (5));

} else {
var statearr_11924_11938 = state_11916__$1;
(statearr_11924_11938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11917 === (3))){
var inst_11914 = (state_11916[(2)]);
var state_11916__$1 = state_11916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11916__$1,inst_11914);
} else {
if((state_val_11917 === (2))){
var state_11916__$1 = state_11916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11916__$1,(4),ch);
} else {
if((state_val_11917 === (1))){
var inst_11902 = init;
var state_11916__$1 = (function (){var statearr_11925 = state_11916;
(statearr_11925[(7)] = inst_11902);

return statearr_11925;
})();
var statearr_11926_11939 = state_11916__$1;
(statearr_11926_11939[(2)] = null);

(statearr_11926_11939[(1)] = (2));


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
var statearr_11930 = [null,null,null,null,null,null,null,null,null];
(statearr_11930[(0)] = state_machine__5795__auto__);

(statearr_11930[(1)] = (1));

return statearr_11930;
});
var state_machine__5795__auto____1 = (function (state_11916){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_11916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e11931){if((e11931 instanceof Object)){
var ex__5798__auto__ = e11931;
var statearr_11932_11940 = state_11916;
(statearr_11932_11940[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11941 = state_11916;
state_11916 = G__11941;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_11916){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_11916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_11933 = f__5810__auto__.call(null);
(statearr_11933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_11933;
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
return (function (state_12015){
var state_val_12016 = (state_12015[(1)]);
if((state_val_12016 === (7))){
var inst_11997 = (state_12015[(2)]);
var state_12015__$1 = state_12015;
var statearr_12017_12040 = state_12015__$1;
(statearr_12017_12040[(2)] = inst_11997);

(statearr_12017_12040[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12016 === (1))){
var inst_11991 = cljs.core.seq.call(null,coll);
var inst_11992 = inst_11991;
var state_12015__$1 = (function (){var statearr_12018 = state_12015;
(statearr_12018[(7)] = inst_11992);

return statearr_12018;
})();
var statearr_12019_12041 = state_12015__$1;
(statearr_12019_12041[(2)] = null);

(statearr_12019_12041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12016 === (4))){
var inst_11992 = (state_12015[(7)]);
var inst_11995 = cljs.core.first.call(null,inst_11992);
var state_12015__$1 = state_12015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12015__$1,(7),ch,inst_11995);
} else {
if((state_val_12016 === (13))){
var inst_12009 = (state_12015[(2)]);
var state_12015__$1 = state_12015;
var statearr_12020_12042 = state_12015__$1;
(statearr_12020_12042[(2)] = inst_12009);

(statearr_12020_12042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12016 === (6))){
var inst_12000 = (state_12015[(2)]);
var state_12015__$1 = state_12015;
if(cljs.core.truth_(inst_12000)){
var statearr_12021_12043 = state_12015__$1;
(statearr_12021_12043[(1)] = (8));

} else {
var statearr_12022_12044 = state_12015__$1;
(statearr_12022_12044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12016 === (3))){
var inst_12013 = (state_12015[(2)]);
var state_12015__$1 = state_12015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12015__$1,inst_12013);
} else {
if((state_val_12016 === (12))){
var state_12015__$1 = state_12015;
var statearr_12023_12045 = state_12015__$1;
(statearr_12023_12045[(2)] = null);

(statearr_12023_12045[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12016 === (2))){
var inst_11992 = (state_12015[(7)]);
var state_12015__$1 = state_12015;
if(cljs.core.truth_(inst_11992)){
var statearr_12024_12046 = state_12015__$1;
(statearr_12024_12046[(1)] = (4));

} else {
var statearr_12025_12047 = state_12015__$1;
(statearr_12025_12047[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12016 === (11))){
var inst_12006 = cljs.core.async.close_BANG_.call(null,ch);
var state_12015__$1 = state_12015;
var statearr_12026_12048 = state_12015__$1;
(statearr_12026_12048[(2)] = inst_12006);

(statearr_12026_12048[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12016 === (9))){
var state_12015__$1 = state_12015;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12027_12049 = state_12015__$1;
(statearr_12027_12049[(1)] = (11));

} else {
var statearr_12028_12050 = state_12015__$1;
(statearr_12028_12050[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12016 === (5))){
var inst_11992 = (state_12015[(7)]);
var state_12015__$1 = state_12015;
var statearr_12029_12051 = state_12015__$1;
(statearr_12029_12051[(2)] = inst_11992);

(statearr_12029_12051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12016 === (10))){
var inst_12011 = (state_12015[(2)]);
var state_12015__$1 = state_12015;
var statearr_12030_12052 = state_12015__$1;
(statearr_12030_12052[(2)] = inst_12011);

(statearr_12030_12052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12016 === (8))){
var inst_11992 = (state_12015[(7)]);
var inst_12002 = cljs.core.next.call(null,inst_11992);
var inst_11992__$1 = inst_12002;
var state_12015__$1 = (function (){var statearr_12031 = state_12015;
(statearr_12031[(7)] = inst_11992__$1);

return statearr_12031;
})();
var statearr_12032_12053 = state_12015__$1;
(statearr_12032_12053[(2)] = null);

(statearr_12032_12053[(1)] = (2));


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
var statearr_12036 = [null,null,null,null,null,null,null,null];
(statearr_12036[(0)] = state_machine__5795__auto__);

(statearr_12036[(1)] = (1));

return statearr_12036;
});
var state_machine__5795__auto____1 = (function (state_12015){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_12015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e12037){if((e12037 instanceof Object)){
var ex__5798__auto__ = e12037;
var statearr_12038_12054 = state_12015;
(statearr_12038_12054[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12055 = state_12015;
state_12015 = G__12055;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_12015){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_12015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_12039 = f__5810__auto__.call(null);
(statearr_12039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_12039;
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

cljs.core.async.Mux = (function (){var obj12057 = {};
return obj12057;
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


cljs.core.async.Mult = (function (){var obj12059 = {};
return obj12059;
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
if(typeof cljs.core.async.t12281 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12281 = (function (cs,ch,mult,meta12282){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12282 = meta12282;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12281.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t12281.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t12281.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t12281.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t12281.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t12281.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t12281.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12283){
var self__ = this;
var _12283__$1 = this;
return self__.meta12282;
});})(cs))
;

cljs.core.async.t12281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12283,meta12282__$1){
var self__ = this;
var _12283__$1 = this;
return (new cljs.core.async.t12281(self__.cs,self__.ch,self__.mult,meta12282__$1));
});})(cs))
;

cljs.core.async.t12281.cljs$lang$type = true;

cljs.core.async.t12281.cljs$lang$ctorStr = "cljs.core.async/t12281";

cljs.core.async.t12281.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t12281");
});})(cs))
;

cljs.core.async.__GT_t12281 = ((function (cs){
return (function __GT_t12281(cs__$1,ch__$1,mult__$1,meta12282){
return (new cljs.core.async.t12281(cs__$1,ch__$1,mult__$1,meta12282));
});})(cs))
;

}

return (new cljs.core.async.t12281(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
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
var c__5809__auto___12502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___12502,cs,m,dchan,dctr,done){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___12502,cs,m,dchan,dctr,done){
return (function (state_12414){
var state_val_12415 = (state_12414[(1)]);
if((state_val_12415 === (7))){
var inst_12410 = (state_12414[(2)]);
var state_12414__$1 = state_12414;
var statearr_12416_12503 = state_12414__$1;
(statearr_12416_12503[(2)] = inst_12410);

(statearr_12416_12503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (20))){
var inst_12315 = (state_12414[(7)]);
var inst_12325 = cljs.core.first.call(null,inst_12315);
var inst_12326 = cljs.core.nth.call(null,inst_12325,(0),null);
var inst_12327 = cljs.core.nth.call(null,inst_12325,(1),null);
var state_12414__$1 = (function (){var statearr_12417 = state_12414;
(statearr_12417[(8)] = inst_12326);

return statearr_12417;
})();
if(cljs.core.truth_(inst_12327)){
var statearr_12418_12504 = state_12414__$1;
(statearr_12418_12504[(1)] = (22));

} else {
var statearr_12419_12505 = state_12414__$1;
(statearr_12419_12505[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (27))){
var inst_12286 = (state_12414[(9)]);
var inst_12362 = (state_12414[(10)]);
var inst_12357 = (state_12414[(11)]);
var inst_12355 = (state_12414[(12)]);
var inst_12362__$1 = cljs.core._nth.call(null,inst_12355,inst_12357);
var inst_12363 = cljs.core.async.put_BANG_.call(null,inst_12362__$1,inst_12286,done);
var state_12414__$1 = (function (){var statearr_12420 = state_12414;
(statearr_12420[(10)] = inst_12362__$1);

return statearr_12420;
})();
if(cljs.core.truth_(inst_12363)){
var statearr_12421_12506 = state_12414__$1;
(statearr_12421_12506[(1)] = (30));

} else {
var statearr_12422_12507 = state_12414__$1;
(statearr_12422_12507[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (1))){
var state_12414__$1 = state_12414;
var statearr_12423_12508 = state_12414__$1;
(statearr_12423_12508[(2)] = null);

(statearr_12423_12508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (24))){
var inst_12315 = (state_12414[(7)]);
var inst_12332 = (state_12414[(2)]);
var inst_12333 = cljs.core.next.call(null,inst_12315);
var inst_12295 = inst_12333;
var inst_12296 = null;
var inst_12297 = (0);
var inst_12298 = (0);
var state_12414__$1 = (function (){var statearr_12424 = state_12414;
(statearr_12424[(13)] = inst_12295);

(statearr_12424[(14)] = inst_12296);

(statearr_12424[(15)] = inst_12332);

(statearr_12424[(16)] = inst_12298);

(statearr_12424[(17)] = inst_12297);

return statearr_12424;
})();
var statearr_12425_12509 = state_12414__$1;
(statearr_12425_12509[(2)] = null);

(statearr_12425_12509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (39))){
var state_12414__$1 = state_12414;
var statearr_12429_12510 = state_12414__$1;
(statearr_12429_12510[(2)] = null);

(statearr_12429_12510[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (4))){
var inst_12286 = (state_12414[(9)]);
var inst_12286__$1 = (state_12414[(2)]);
var inst_12287 = (inst_12286__$1 == null);
var state_12414__$1 = (function (){var statearr_12430 = state_12414;
(statearr_12430[(9)] = inst_12286__$1);

return statearr_12430;
})();
if(cljs.core.truth_(inst_12287)){
var statearr_12431_12511 = state_12414__$1;
(statearr_12431_12511[(1)] = (5));

} else {
var statearr_12432_12512 = state_12414__$1;
(statearr_12432_12512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (15))){
var inst_12295 = (state_12414[(13)]);
var inst_12296 = (state_12414[(14)]);
var inst_12298 = (state_12414[(16)]);
var inst_12297 = (state_12414[(17)]);
var inst_12311 = (state_12414[(2)]);
var inst_12312 = (inst_12298 + (1));
var tmp12426 = inst_12295;
var tmp12427 = inst_12296;
var tmp12428 = inst_12297;
var inst_12295__$1 = tmp12426;
var inst_12296__$1 = tmp12427;
var inst_12297__$1 = tmp12428;
var inst_12298__$1 = inst_12312;
var state_12414__$1 = (function (){var statearr_12433 = state_12414;
(statearr_12433[(13)] = inst_12295__$1);

(statearr_12433[(18)] = inst_12311);

(statearr_12433[(14)] = inst_12296__$1);

(statearr_12433[(16)] = inst_12298__$1);

(statearr_12433[(17)] = inst_12297__$1);

return statearr_12433;
})();
var statearr_12434_12513 = state_12414__$1;
(statearr_12434_12513[(2)] = null);

(statearr_12434_12513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (21))){
var inst_12336 = (state_12414[(2)]);
var state_12414__$1 = state_12414;
var statearr_12438_12514 = state_12414__$1;
(statearr_12438_12514[(2)] = inst_12336);

(statearr_12438_12514[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (31))){
var inst_12362 = (state_12414[(10)]);
var inst_12366 = done.call(null,null);
var inst_12367 = cljs.core.async.untap_STAR_.call(null,m,inst_12362);
var state_12414__$1 = (function (){var statearr_12439 = state_12414;
(statearr_12439[(19)] = inst_12366);

return statearr_12439;
})();
var statearr_12440_12515 = state_12414__$1;
(statearr_12440_12515[(2)] = inst_12367);

(statearr_12440_12515[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (32))){
var inst_12356 = (state_12414[(20)]);
var inst_12354 = (state_12414[(21)]);
var inst_12357 = (state_12414[(11)]);
var inst_12355 = (state_12414[(12)]);
var inst_12369 = (state_12414[(2)]);
var inst_12370 = (inst_12357 + (1));
var tmp12435 = inst_12356;
var tmp12436 = inst_12354;
var tmp12437 = inst_12355;
var inst_12354__$1 = tmp12436;
var inst_12355__$1 = tmp12437;
var inst_12356__$1 = tmp12435;
var inst_12357__$1 = inst_12370;
var state_12414__$1 = (function (){var statearr_12441 = state_12414;
(statearr_12441[(20)] = inst_12356__$1);

(statearr_12441[(21)] = inst_12354__$1);

(statearr_12441[(22)] = inst_12369);

(statearr_12441[(11)] = inst_12357__$1);

(statearr_12441[(12)] = inst_12355__$1);

return statearr_12441;
})();
var statearr_12442_12516 = state_12414__$1;
(statearr_12442_12516[(2)] = null);

(statearr_12442_12516[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (40))){
var inst_12382 = (state_12414[(23)]);
var inst_12386 = done.call(null,null);
var inst_12387 = cljs.core.async.untap_STAR_.call(null,m,inst_12382);
var state_12414__$1 = (function (){var statearr_12443 = state_12414;
(statearr_12443[(24)] = inst_12386);

return statearr_12443;
})();
var statearr_12444_12517 = state_12414__$1;
(statearr_12444_12517[(2)] = inst_12387);

(statearr_12444_12517[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (33))){
var inst_12373 = (state_12414[(25)]);
var inst_12375 = cljs.core.chunked_seq_QMARK_.call(null,inst_12373);
var state_12414__$1 = state_12414;
if(inst_12375){
var statearr_12445_12518 = state_12414__$1;
(statearr_12445_12518[(1)] = (36));

} else {
var statearr_12446_12519 = state_12414__$1;
(statearr_12446_12519[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (13))){
var inst_12305 = (state_12414[(26)]);
var inst_12308 = cljs.core.async.close_BANG_.call(null,inst_12305);
var state_12414__$1 = state_12414;
var statearr_12447_12520 = state_12414__$1;
(statearr_12447_12520[(2)] = inst_12308);

(statearr_12447_12520[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (22))){
var inst_12326 = (state_12414[(8)]);
var inst_12329 = cljs.core.async.close_BANG_.call(null,inst_12326);
var state_12414__$1 = state_12414;
var statearr_12448_12521 = state_12414__$1;
(statearr_12448_12521[(2)] = inst_12329);

(statearr_12448_12521[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (36))){
var inst_12373 = (state_12414[(25)]);
var inst_12377 = cljs.core.chunk_first.call(null,inst_12373);
var inst_12378 = cljs.core.chunk_rest.call(null,inst_12373);
var inst_12379 = cljs.core.count.call(null,inst_12377);
var inst_12354 = inst_12378;
var inst_12355 = inst_12377;
var inst_12356 = inst_12379;
var inst_12357 = (0);
var state_12414__$1 = (function (){var statearr_12449 = state_12414;
(statearr_12449[(20)] = inst_12356);

(statearr_12449[(21)] = inst_12354);

(statearr_12449[(11)] = inst_12357);

(statearr_12449[(12)] = inst_12355);

return statearr_12449;
})();
var statearr_12450_12522 = state_12414__$1;
(statearr_12450_12522[(2)] = null);

(statearr_12450_12522[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (41))){
var inst_12373 = (state_12414[(25)]);
var inst_12389 = (state_12414[(2)]);
var inst_12390 = cljs.core.next.call(null,inst_12373);
var inst_12354 = inst_12390;
var inst_12355 = null;
var inst_12356 = (0);
var inst_12357 = (0);
var state_12414__$1 = (function (){var statearr_12451 = state_12414;
(statearr_12451[(20)] = inst_12356);

(statearr_12451[(21)] = inst_12354);

(statearr_12451[(27)] = inst_12389);

(statearr_12451[(11)] = inst_12357);

(statearr_12451[(12)] = inst_12355);

return statearr_12451;
})();
var statearr_12452_12523 = state_12414__$1;
(statearr_12452_12523[(2)] = null);

(statearr_12452_12523[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (43))){
var state_12414__$1 = state_12414;
var statearr_12453_12524 = state_12414__$1;
(statearr_12453_12524[(2)] = null);

(statearr_12453_12524[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (29))){
var inst_12398 = (state_12414[(2)]);
var state_12414__$1 = state_12414;
var statearr_12454_12525 = state_12414__$1;
(statearr_12454_12525[(2)] = inst_12398);

(statearr_12454_12525[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (44))){
var inst_12407 = (state_12414[(2)]);
var state_12414__$1 = (function (){var statearr_12455 = state_12414;
(statearr_12455[(28)] = inst_12407);

return statearr_12455;
})();
var statearr_12456_12526 = state_12414__$1;
(statearr_12456_12526[(2)] = null);

(statearr_12456_12526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (6))){
var inst_12346 = (state_12414[(29)]);
var inst_12345 = cljs.core.deref.call(null,cs);
var inst_12346__$1 = cljs.core.keys.call(null,inst_12345);
var inst_12347 = cljs.core.count.call(null,inst_12346__$1);
var inst_12348 = cljs.core.reset_BANG_.call(null,dctr,inst_12347);
var inst_12353 = cljs.core.seq.call(null,inst_12346__$1);
var inst_12354 = inst_12353;
var inst_12355 = null;
var inst_12356 = (0);
var inst_12357 = (0);
var state_12414__$1 = (function (){var statearr_12457 = state_12414;
(statearr_12457[(20)] = inst_12356);

(statearr_12457[(29)] = inst_12346__$1);

(statearr_12457[(21)] = inst_12354);

(statearr_12457[(30)] = inst_12348);

(statearr_12457[(11)] = inst_12357);

(statearr_12457[(12)] = inst_12355);

return statearr_12457;
})();
var statearr_12458_12527 = state_12414__$1;
(statearr_12458_12527[(2)] = null);

(statearr_12458_12527[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (28))){
var inst_12354 = (state_12414[(21)]);
var inst_12373 = (state_12414[(25)]);
var inst_12373__$1 = cljs.core.seq.call(null,inst_12354);
var state_12414__$1 = (function (){var statearr_12459 = state_12414;
(statearr_12459[(25)] = inst_12373__$1);

return statearr_12459;
})();
if(inst_12373__$1){
var statearr_12460_12528 = state_12414__$1;
(statearr_12460_12528[(1)] = (33));

} else {
var statearr_12461_12529 = state_12414__$1;
(statearr_12461_12529[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (25))){
var inst_12356 = (state_12414[(20)]);
var inst_12357 = (state_12414[(11)]);
var inst_12359 = (inst_12357 < inst_12356);
var inst_12360 = inst_12359;
var state_12414__$1 = state_12414;
if(cljs.core.truth_(inst_12360)){
var statearr_12462_12530 = state_12414__$1;
(statearr_12462_12530[(1)] = (27));

} else {
var statearr_12463_12531 = state_12414__$1;
(statearr_12463_12531[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (34))){
var state_12414__$1 = state_12414;
var statearr_12464_12532 = state_12414__$1;
(statearr_12464_12532[(2)] = null);

(statearr_12464_12532[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (17))){
var state_12414__$1 = state_12414;
var statearr_12465_12533 = state_12414__$1;
(statearr_12465_12533[(2)] = null);

(statearr_12465_12533[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (3))){
var inst_12412 = (state_12414[(2)]);
var state_12414__$1 = state_12414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12414__$1,inst_12412);
} else {
if((state_val_12415 === (12))){
var inst_12341 = (state_12414[(2)]);
var state_12414__$1 = state_12414;
var statearr_12466_12534 = state_12414__$1;
(statearr_12466_12534[(2)] = inst_12341);

(statearr_12466_12534[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (2))){
var state_12414__$1 = state_12414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12414__$1,(4),ch);
} else {
if((state_val_12415 === (23))){
var state_12414__$1 = state_12414;
var statearr_12467_12535 = state_12414__$1;
(statearr_12467_12535[(2)] = null);

(statearr_12467_12535[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (35))){
var inst_12396 = (state_12414[(2)]);
var state_12414__$1 = state_12414;
var statearr_12468_12536 = state_12414__$1;
(statearr_12468_12536[(2)] = inst_12396);

(statearr_12468_12536[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (19))){
var inst_12315 = (state_12414[(7)]);
var inst_12319 = cljs.core.chunk_first.call(null,inst_12315);
var inst_12320 = cljs.core.chunk_rest.call(null,inst_12315);
var inst_12321 = cljs.core.count.call(null,inst_12319);
var inst_12295 = inst_12320;
var inst_12296 = inst_12319;
var inst_12297 = inst_12321;
var inst_12298 = (0);
var state_12414__$1 = (function (){var statearr_12469 = state_12414;
(statearr_12469[(13)] = inst_12295);

(statearr_12469[(14)] = inst_12296);

(statearr_12469[(16)] = inst_12298);

(statearr_12469[(17)] = inst_12297);

return statearr_12469;
})();
var statearr_12470_12537 = state_12414__$1;
(statearr_12470_12537[(2)] = null);

(statearr_12470_12537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (11))){
var inst_12295 = (state_12414[(13)]);
var inst_12315 = (state_12414[(7)]);
var inst_12315__$1 = cljs.core.seq.call(null,inst_12295);
var state_12414__$1 = (function (){var statearr_12471 = state_12414;
(statearr_12471[(7)] = inst_12315__$1);

return statearr_12471;
})();
if(inst_12315__$1){
var statearr_12472_12538 = state_12414__$1;
(statearr_12472_12538[(1)] = (16));

} else {
var statearr_12473_12539 = state_12414__$1;
(statearr_12473_12539[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (9))){
var inst_12343 = (state_12414[(2)]);
var state_12414__$1 = state_12414;
var statearr_12474_12540 = state_12414__$1;
(statearr_12474_12540[(2)] = inst_12343);

(statearr_12474_12540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (5))){
var inst_12293 = cljs.core.deref.call(null,cs);
var inst_12294 = cljs.core.seq.call(null,inst_12293);
var inst_12295 = inst_12294;
var inst_12296 = null;
var inst_12297 = (0);
var inst_12298 = (0);
var state_12414__$1 = (function (){var statearr_12475 = state_12414;
(statearr_12475[(13)] = inst_12295);

(statearr_12475[(14)] = inst_12296);

(statearr_12475[(16)] = inst_12298);

(statearr_12475[(17)] = inst_12297);

return statearr_12475;
})();
var statearr_12476_12541 = state_12414__$1;
(statearr_12476_12541[(2)] = null);

(statearr_12476_12541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (14))){
var state_12414__$1 = state_12414;
var statearr_12477_12542 = state_12414__$1;
(statearr_12477_12542[(2)] = null);

(statearr_12477_12542[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (45))){
var inst_12404 = (state_12414[(2)]);
var state_12414__$1 = state_12414;
var statearr_12478_12543 = state_12414__$1;
(statearr_12478_12543[(2)] = inst_12404);

(statearr_12478_12543[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (26))){
var inst_12346 = (state_12414[(29)]);
var inst_12400 = (state_12414[(2)]);
var inst_12401 = cljs.core.seq.call(null,inst_12346);
var state_12414__$1 = (function (){var statearr_12479 = state_12414;
(statearr_12479[(31)] = inst_12400);

return statearr_12479;
})();
if(inst_12401){
var statearr_12480_12544 = state_12414__$1;
(statearr_12480_12544[(1)] = (42));

} else {
var statearr_12481_12545 = state_12414__$1;
(statearr_12481_12545[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (16))){
var inst_12315 = (state_12414[(7)]);
var inst_12317 = cljs.core.chunked_seq_QMARK_.call(null,inst_12315);
var state_12414__$1 = state_12414;
if(inst_12317){
var statearr_12482_12546 = state_12414__$1;
(statearr_12482_12546[(1)] = (19));

} else {
var statearr_12483_12547 = state_12414__$1;
(statearr_12483_12547[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (38))){
var inst_12393 = (state_12414[(2)]);
var state_12414__$1 = state_12414;
var statearr_12484_12548 = state_12414__$1;
(statearr_12484_12548[(2)] = inst_12393);

(statearr_12484_12548[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (30))){
var state_12414__$1 = state_12414;
var statearr_12485_12549 = state_12414__$1;
(statearr_12485_12549[(2)] = null);

(statearr_12485_12549[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (10))){
var inst_12296 = (state_12414[(14)]);
var inst_12298 = (state_12414[(16)]);
var inst_12304 = cljs.core._nth.call(null,inst_12296,inst_12298);
var inst_12305 = cljs.core.nth.call(null,inst_12304,(0),null);
var inst_12306 = cljs.core.nth.call(null,inst_12304,(1),null);
var state_12414__$1 = (function (){var statearr_12486 = state_12414;
(statearr_12486[(26)] = inst_12305);

return statearr_12486;
})();
if(cljs.core.truth_(inst_12306)){
var statearr_12487_12550 = state_12414__$1;
(statearr_12487_12550[(1)] = (13));

} else {
var statearr_12488_12551 = state_12414__$1;
(statearr_12488_12551[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (18))){
var inst_12339 = (state_12414[(2)]);
var state_12414__$1 = state_12414;
var statearr_12489_12552 = state_12414__$1;
(statearr_12489_12552[(2)] = inst_12339);

(statearr_12489_12552[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (42))){
var state_12414__$1 = state_12414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12414__$1,(45),dchan);
} else {
if((state_val_12415 === (37))){
var inst_12286 = (state_12414[(9)]);
var inst_12373 = (state_12414[(25)]);
var inst_12382 = (state_12414[(23)]);
var inst_12382__$1 = cljs.core.first.call(null,inst_12373);
var inst_12383 = cljs.core.async.put_BANG_.call(null,inst_12382__$1,inst_12286,done);
var state_12414__$1 = (function (){var statearr_12490 = state_12414;
(statearr_12490[(23)] = inst_12382__$1);

return statearr_12490;
})();
if(cljs.core.truth_(inst_12383)){
var statearr_12491_12553 = state_12414__$1;
(statearr_12491_12553[(1)] = (39));

} else {
var statearr_12492_12554 = state_12414__$1;
(statearr_12492_12554[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12415 === (8))){
var inst_12298 = (state_12414[(16)]);
var inst_12297 = (state_12414[(17)]);
var inst_12300 = (inst_12298 < inst_12297);
var inst_12301 = inst_12300;
var state_12414__$1 = state_12414;
if(cljs.core.truth_(inst_12301)){
var statearr_12493_12555 = state_12414__$1;
(statearr_12493_12555[(1)] = (10));

} else {
var statearr_12494_12556 = state_12414__$1;
(statearr_12494_12556[(1)] = (11));

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
});})(c__5809__auto___12502,cs,m,dchan,dctr,done))
;
return ((function (switch__5794__auto__,c__5809__auto___12502,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_12498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12498[(0)] = state_machine__5795__auto__);

(statearr_12498[(1)] = (1));

return statearr_12498;
});
var state_machine__5795__auto____1 = (function (state_12414){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_12414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e12499){if((e12499 instanceof Object)){
var ex__5798__auto__ = e12499;
var statearr_12500_12557 = state_12414;
(statearr_12500_12557[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12558 = state_12414;
state_12414 = G__12558;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_12414){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_12414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___12502,cs,m,dchan,dctr,done))
})();
var state__5811__auto__ = (function (){var statearr_12501 = f__5810__auto__.call(null);
(statearr_12501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___12502);

return statearr_12501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___12502,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj12560 = {};
return obj12560;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__12561){
var map__12566 = p__12561;
var map__12566__$1 = ((cljs.core.seq_QMARK_.call(null,map__12566))?cljs.core.apply.call(null,cljs.core.hash_map,map__12566):map__12566);
var opts = map__12566__$1;
var statearr_12567_12570 = state;
(statearr_12567_12570[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__12566,map__12566__$1,opts){
return (function (val){
var statearr_12568_12571 = state;
(statearr_12568_12571[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__12566,map__12566__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_12569_12572 = state;
(statearr_12569_12572[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__12561 = null;
if (arguments.length > 3) {
  p__12561 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__12561);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__12573){
var state = cljs.core.first(arglist__12573);
arglist__12573 = cljs.core.next(arglist__12573);
var cont_block = cljs.core.first(arglist__12573);
arglist__12573 = cljs.core.next(arglist__12573);
var ports = cljs.core.first(arglist__12573);
var p__12561 = cljs.core.rest(arglist__12573);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__12561);
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
if(typeof cljs.core.async.t12693 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12693 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12694){
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
this.meta12694 = meta12694;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12693.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t12693.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12693.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12693.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12693.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12693.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t12693.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t12693.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12693.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12695){
var self__ = this;
var _12695__$1 = this;
return self__.meta12694;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12695,meta12694__$1){
var self__ = this;
var _12695__$1 = this;
return (new cljs.core.async.t12693(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12694__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12693.cljs$lang$type = true;

cljs.core.async.t12693.cljs$lang$ctorStr = "cljs.core.async/t12693";

cljs.core.async.t12693.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t12693");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t12693 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12693(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12694){
return (new cljs.core.async.t12693(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12694));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t12693(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
})()
;
var c__5809__auto___12812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___12812,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___12812,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12765){
var state_val_12766 = (state_12765[(1)]);
if((state_val_12766 === (7))){
var inst_12709 = (state_12765[(7)]);
var inst_12714 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12709);
var state_12765__$1 = state_12765;
var statearr_12767_12813 = state_12765__$1;
(statearr_12767_12813[(2)] = inst_12714);

(statearr_12767_12813[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12766 === (20))){
var inst_12724 = (state_12765[(8)]);
var state_12765__$1 = state_12765;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12765__$1,(23),out,inst_12724);
} else {
if((state_val_12766 === (1))){
var inst_12699 = (state_12765[(9)]);
var inst_12699__$1 = calc_state.call(null);
var inst_12700 = cljs.core.seq_QMARK_.call(null,inst_12699__$1);
var state_12765__$1 = (function (){var statearr_12768 = state_12765;
(statearr_12768[(9)] = inst_12699__$1);

return statearr_12768;
})();
if(inst_12700){
var statearr_12769_12814 = state_12765__$1;
(statearr_12769_12814[(1)] = (2));

} else {
var statearr_12770_12815 = state_12765__$1;
(statearr_12770_12815[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12766 === (24))){
var inst_12717 = (state_12765[(10)]);
var inst_12709 = inst_12717;
var state_12765__$1 = (function (){var statearr_12771 = state_12765;
(statearr_12771[(7)] = inst_12709);

return statearr_12771;
})();
var statearr_12772_12816 = state_12765__$1;
(statearr_12772_12816[(2)] = null);

(statearr_12772_12816[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12766 === (4))){
var inst_12699 = (state_12765[(9)]);
var inst_12705 = (state_12765[(2)]);
var inst_12706 = cljs.core.get.call(null,inst_12705,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12707 = cljs.core.get.call(null,inst_12705,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12708 = cljs.core.get.call(null,inst_12705,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12709 = inst_12699;
var state_12765__$1 = (function (){var statearr_12773 = state_12765;
(statearr_12773[(7)] = inst_12709);

(statearr_12773[(11)] = inst_12707);

(statearr_12773[(12)] = inst_12706);

(statearr_12773[(13)] = inst_12708);

return statearr_12773;
})();
var statearr_12774_12817 = state_12765__$1;
(statearr_12774_12817[(2)] = null);

(statearr_12774_12817[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12766 === (15))){
var state_12765__$1 = state_12765;
var statearr_12775_12818 = state_12765__$1;
(statearr_12775_12818[(2)] = null);

(statearr_12775_12818[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12766 === (21))){
var inst_12717 = (state_12765[(10)]);
var inst_12709 = inst_12717;
var state_12765__$1 = (function (){var statearr_12776 = state_12765;
(statearr_12776[(7)] = inst_12709);

return statearr_12776;
})();
var statearr_12777_12819 = state_12765__$1;
(statearr_12777_12819[(2)] = null);

(statearr_12777_12819[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12766 === (13))){
var inst_12761 = (state_12765[(2)]);
var state_12765__$1 = state_12765;
var statearr_12778_12820 = state_12765__$1;
(statearr_12778_12820[(2)] = inst_12761);

(statearr_12778_12820[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12766 === (22))){
var inst_12759 = (state_12765[(2)]);
var state_12765__$1 = state_12765;
var statearr_12779_12821 = state_12765__$1;
(statearr_12779_12821[(2)] = inst_12759);

(statearr_12779_12821[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12766 === (6))){
var inst_12763 = (state_12765[(2)]);
var state_12765__$1 = state_12765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12765__$1,inst_12763);
} else {
if((state_val_12766 === (25))){
var state_12765__$1 = state_12765;
var statearr_12780_12822 = state_12765__$1;
(statearr_12780_12822[(2)] = null);

(statearr_12780_12822[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12766 === (17))){
var inst_12739 = (state_12765[(14)]);
var state_12765__$1 = state_12765;
var statearr_12781_12823 = state_12765__$1;
(statearr_12781_12823[(2)] = inst_12739);

(statearr_12781_12823[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12766 === (3))){
var inst_12699 = (state_12765[(9)]);
var state_12765__$1 = state_12765;
var statearr_12782_12824 = state_12765__$1;
(statearr_12782_12824[(2)] = inst_12699);

(statearr_12782_12824[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12766 === (12))){
var inst_12725 = (state_12765[(15)]);
var inst_12739 = (state_12765[(14)]);
var inst_12720 = (state_12765[(16)]);
var inst_12739__$1 = inst_12720.call(null,inst_12725);
var state_12765__$1 = (function (){var statearr_12783 = state_12765;
(statearr_12783[(14)] = inst_12739__$1);

return statearr_12783;
})();
if(cljs.core.truth_(inst_12739__$1)){
var statearr_12784_12825 = state_12765__$1;
(statearr_12784_12825[(1)] = (17));

} else {
var statearr_12785_12826 = state_12765__$1;
(statearr_12785_12826[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12766 === (2))){
var inst_12699 = (state_12765[(9)]);
var inst_12702 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12699);
var state_12765__$1 = state_12765;
var statearr_12786_12827 = state_12765__$1;
(statearr_12786_12827[(2)] = inst_12702);

(statearr_12786_12827[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12766 === (23))){
var inst_12750 = (state_12765[(2)]);
var state_12765__$1 = state_12765;
if(cljs.core.truth_(inst_12750)){
var statearr_12787_12828 = state_12765__$1;
(statearr_12787_12828[(1)] = (24));

} else {
var statearr_12788_12829 = state_12765__$1;
(statearr_12788_12829[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12766 === (19))){
var inst_12747 = (state_12765[(2)]);
var state_12765__$1 = state_12765;
if(cljs.core.truth_(inst_12747)){
var statearr_12789_12830 = state_12765__$1;
(statearr_12789_12830[(1)] = (20));

} else {
var statearr_12790_12831 = state_12765__$1;
(statearr_12790_12831[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12766 === (11))){
var inst_12724 = (state_12765[(8)]);
var inst_12730 = (inst_12724 == null);
var state_12765__$1 = state_12765;
if(cljs.core.truth_(inst_12730)){
var statearr_12791_12832 = state_12765__$1;
(statearr_12791_12832[(1)] = (14));

} else {
var statearr_12792_12833 = state_12765__$1;
(statearr_12792_12833[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12766 === (9))){
var inst_12717 = (state_12765[(10)]);
var inst_12717__$1 = (state_12765[(2)]);
var inst_12718 = cljs.core.get.call(null,inst_12717__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12719 = cljs.core.get.call(null,inst_12717__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12720 = cljs.core.get.call(null,inst_12717__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_12765__$1 = (function (){var statearr_12793 = state_12765;
(statearr_12793[(10)] = inst_12717__$1);

(statearr_12793[(17)] = inst_12719);

(statearr_12793[(16)] = inst_12720);

return statearr_12793;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12765__$1,(10),inst_12718);
} else {
if((state_val_12766 === (5))){
var inst_12709 = (state_12765[(7)]);
var inst_12712 = cljs.core.seq_QMARK_.call(null,inst_12709);
var state_12765__$1 = state_12765;
if(inst_12712){
var statearr_12794_12834 = state_12765__$1;
(statearr_12794_12834[(1)] = (7));

} else {
var statearr_12795_12835 = state_12765__$1;
(statearr_12795_12835[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12766 === (14))){
var inst_12725 = (state_12765[(15)]);
var inst_12732 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12725);
var state_12765__$1 = state_12765;
var statearr_12796_12836 = state_12765__$1;
(statearr_12796_12836[(2)] = inst_12732);

(statearr_12796_12836[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12766 === (26))){
var inst_12755 = (state_12765[(2)]);
var state_12765__$1 = state_12765;
var statearr_12797_12837 = state_12765__$1;
(statearr_12797_12837[(2)] = inst_12755);

(statearr_12797_12837[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12766 === (16))){
var inst_12735 = (state_12765[(2)]);
var inst_12736 = calc_state.call(null);
var inst_12709 = inst_12736;
var state_12765__$1 = (function (){var statearr_12798 = state_12765;
(statearr_12798[(18)] = inst_12735);

(statearr_12798[(7)] = inst_12709);

return statearr_12798;
})();
var statearr_12799_12838 = state_12765__$1;
(statearr_12799_12838[(2)] = null);

(statearr_12799_12838[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12766 === (10))){
var inst_12725 = (state_12765[(15)]);
var inst_12724 = (state_12765[(8)]);
var inst_12723 = (state_12765[(2)]);
var inst_12724__$1 = cljs.core.nth.call(null,inst_12723,(0),null);
var inst_12725__$1 = cljs.core.nth.call(null,inst_12723,(1),null);
var inst_12726 = (inst_12724__$1 == null);
var inst_12727 = cljs.core._EQ_.call(null,inst_12725__$1,change);
var inst_12728 = (inst_12726) || (inst_12727);
var state_12765__$1 = (function (){var statearr_12800 = state_12765;
(statearr_12800[(15)] = inst_12725__$1);

(statearr_12800[(8)] = inst_12724__$1);

return statearr_12800;
})();
if(cljs.core.truth_(inst_12728)){
var statearr_12801_12839 = state_12765__$1;
(statearr_12801_12839[(1)] = (11));

} else {
var statearr_12802_12840 = state_12765__$1;
(statearr_12802_12840[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12766 === (18))){
var inst_12725 = (state_12765[(15)]);
var inst_12719 = (state_12765[(17)]);
var inst_12720 = (state_12765[(16)]);
var inst_12742 = cljs.core.empty_QMARK_.call(null,inst_12720);
var inst_12743 = inst_12719.call(null,inst_12725);
var inst_12744 = cljs.core.not.call(null,inst_12743);
var inst_12745 = (inst_12742) && (inst_12744);
var state_12765__$1 = state_12765;
var statearr_12803_12841 = state_12765__$1;
(statearr_12803_12841[(2)] = inst_12745);

(statearr_12803_12841[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12766 === (8))){
var inst_12709 = (state_12765[(7)]);
var state_12765__$1 = state_12765;
var statearr_12804_12842 = state_12765__$1;
(statearr_12804_12842[(2)] = inst_12709);

(statearr_12804_12842[(1)] = (9));


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
});})(c__5809__auto___12812,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__5794__auto__,c__5809__auto___12812,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_12808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12808[(0)] = state_machine__5795__auto__);

(statearr_12808[(1)] = (1));

return statearr_12808;
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
}catch (e12809){if((e12809 instanceof Object)){
var ex__5798__auto__ = e12809;
var statearr_12810_12843 = state_12765;
(statearr_12810_12843[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12844 = state_12765;
state_12765 = G__12844;
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
;})(switch__5794__auto__,c__5809__auto___12812,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__5811__auto__ = (function (){var statearr_12811 = f__5810__auto__.call(null);
(statearr_12811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___12812);

return statearr_12811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___12812,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj12846 = {};
return obj12846;
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
return (function (p1__12847_SHARP_){
if(cljs.core.truth_(p1__12847_SHARP_.call(null,topic))){
return p1__12847_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12847_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3608__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t12970 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12970 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12971){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12971 = meta12971;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12970.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t12970.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t12970.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t12970.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t12970.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t12970.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t12970.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t12970.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12972){
var self__ = this;
var _12972__$1 = this;
return self__.meta12971;
});})(mults,ensure_mult))
;

cljs.core.async.t12970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12972,meta12971__$1){
var self__ = this;
var _12972__$1 = this;
return (new cljs.core.async.t12970(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12971__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t12970.cljs$lang$type = true;

cljs.core.async.t12970.cljs$lang$ctorStr = "cljs.core.async/t12970";

cljs.core.async.t12970.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t12970");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t12970 = ((function (mults,ensure_mult){
return (function __GT_t12970(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12971){
return (new cljs.core.async.t12970(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12971));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t12970(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
})()
;
var c__5809__auto___13092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___13092,mults,ensure_mult,p){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___13092,mults,ensure_mult,p){
return (function (state_13044){
var state_val_13045 = (state_13044[(1)]);
if((state_val_13045 === (7))){
var inst_13040 = (state_13044[(2)]);
var state_13044__$1 = state_13044;
var statearr_13046_13093 = state_13044__$1;
(statearr_13046_13093[(2)] = inst_13040);

(statearr_13046_13093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (20))){
var state_13044__$1 = state_13044;
var statearr_13047_13094 = state_13044__$1;
(statearr_13047_13094[(2)] = null);

(statearr_13047_13094[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (1))){
var state_13044__$1 = state_13044;
var statearr_13048_13095 = state_13044__$1;
(statearr_13048_13095[(2)] = null);

(statearr_13048_13095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (24))){
var inst_13023 = (state_13044[(7)]);
var inst_13032 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13023);
var state_13044__$1 = state_13044;
var statearr_13049_13096 = state_13044__$1;
(statearr_13049_13096[(2)] = inst_13032);

(statearr_13049_13096[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (4))){
var inst_12975 = (state_13044[(8)]);
var inst_12975__$1 = (state_13044[(2)]);
var inst_12976 = (inst_12975__$1 == null);
var state_13044__$1 = (function (){var statearr_13050 = state_13044;
(statearr_13050[(8)] = inst_12975__$1);

return statearr_13050;
})();
if(cljs.core.truth_(inst_12976)){
var statearr_13051_13097 = state_13044__$1;
(statearr_13051_13097[(1)] = (5));

} else {
var statearr_13052_13098 = state_13044__$1;
(statearr_13052_13098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (15))){
var inst_13017 = (state_13044[(2)]);
var state_13044__$1 = state_13044;
var statearr_13053_13099 = state_13044__$1;
(statearr_13053_13099[(2)] = inst_13017);

(statearr_13053_13099[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (21))){
var inst_13037 = (state_13044[(2)]);
var state_13044__$1 = (function (){var statearr_13054 = state_13044;
(statearr_13054[(9)] = inst_13037);

return statearr_13054;
})();
var statearr_13055_13100 = state_13044__$1;
(statearr_13055_13100[(2)] = null);

(statearr_13055_13100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (13))){
var inst_12999 = (state_13044[(10)]);
var inst_13001 = cljs.core.chunked_seq_QMARK_.call(null,inst_12999);
var state_13044__$1 = state_13044;
if(inst_13001){
var statearr_13056_13101 = state_13044__$1;
(statearr_13056_13101[(1)] = (16));

} else {
var statearr_13057_13102 = state_13044__$1;
(statearr_13057_13102[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (22))){
var inst_13029 = (state_13044[(2)]);
var state_13044__$1 = state_13044;
if(cljs.core.truth_(inst_13029)){
var statearr_13058_13103 = state_13044__$1;
(statearr_13058_13103[(1)] = (23));

} else {
var statearr_13059_13104 = state_13044__$1;
(statearr_13059_13104[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (6))){
var inst_13025 = (state_13044[(11)]);
var inst_12975 = (state_13044[(8)]);
var inst_13023 = (state_13044[(7)]);
var inst_13023__$1 = topic_fn.call(null,inst_12975);
var inst_13024 = cljs.core.deref.call(null,mults);
var inst_13025__$1 = cljs.core.get.call(null,inst_13024,inst_13023__$1);
var state_13044__$1 = (function (){var statearr_13060 = state_13044;
(statearr_13060[(11)] = inst_13025__$1);

(statearr_13060[(7)] = inst_13023__$1);

return statearr_13060;
})();
if(cljs.core.truth_(inst_13025__$1)){
var statearr_13061_13105 = state_13044__$1;
(statearr_13061_13105[(1)] = (19));

} else {
var statearr_13062_13106 = state_13044__$1;
(statearr_13062_13106[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (25))){
var inst_13034 = (state_13044[(2)]);
var state_13044__$1 = state_13044;
var statearr_13063_13107 = state_13044__$1;
(statearr_13063_13107[(2)] = inst_13034);

(statearr_13063_13107[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (17))){
var inst_12999 = (state_13044[(10)]);
var inst_13008 = cljs.core.first.call(null,inst_12999);
var inst_13009 = cljs.core.async.muxch_STAR_.call(null,inst_13008);
var inst_13010 = cljs.core.async.close_BANG_.call(null,inst_13009);
var inst_13011 = cljs.core.next.call(null,inst_12999);
var inst_12985 = inst_13011;
var inst_12986 = null;
var inst_12987 = (0);
var inst_12988 = (0);
var state_13044__$1 = (function (){var statearr_13064 = state_13044;
(statearr_13064[(12)] = inst_12988);

(statearr_13064[(13)] = inst_12986);

(statearr_13064[(14)] = inst_12987);

(statearr_13064[(15)] = inst_13010);

(statearr_13064[(16)] = inst_12985);

return statearr_13064;
})();
var statearr_13065_13108 = state_13044__$1;
(statearr_13065_13108[(2)] = null);

(statearr_13065_13108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (3))){
var inst_13042 = (state_13044[(2)]);
var state_13044__$1 = state_13044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13044__$1,inst_13042);
} else {
if((state_val_13045 === (12))){
var inst_13019 = (state_13044[(2)]);
var state_13044__$1 = state_13044;
var statearr_13066_13109 = state_13044__$1;
(statearr_13066_13109[(2)] = inst_13019);

(statearr_13066_13109[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (2))){
var state_13044__$1 = state_13044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13044__$1,(4),ch);
} else {
if((state_val_13045 === (23))){
var state_13044__$1 = state_13044;
var statearr_13067_13110 = state_13044__$1;
(statearr_13067_13110[(2)] = null);

(statearr_13067_13110[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (19))){
var inst_13025 = (state_13044[(11)]);
var inst_12975 = (state_13044[(8)]);
var inst_13027 = cljs.core.async.muxch_STAR_.call(null,inst_13025);
var state_13044__$1 = state_13044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13044__$1,(22),inst_13027,inst_12975);
} else {
if((state_val_13045 === (11))){
var inst_12999 = (state_13044[(10)]);
var inst_12985 = (state_13044[(16)]);
var inst_12999__$1 = cljs.core.seq.call(null,inst_12985);
var state_13044__$1 = (function (){var statearr_13068 = state_13044;
(statearr_13068[(10)] = inst_12999__$1);

return statearr_13068;
})();
if(inst_12999__$1){
var statearr_13069_13111 = state_13044__$1;
(statearr_13069_13111[(1)] = (13));

} else {
var statearr_13070_13112 = state_13044__$1;
(statearr_13070_13112[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (9))){
var inst_13021 = (state_13044[(2)]);
var state_13044__$1 = state_13044;
var statearr_13071_13113 = state_13044__$1;
(statearr_13071_13113[(2)] = inst_13021);

(statearr_13071_13113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (5))){
var inst_12982 = cljs.core.deref.call(null,mults);
var inst_12983 = cljs.core.vals.call(null,inst_12982);
var inst_12984 = cljs.core.seq.call(null,inst_12983);
var inst_12985 = inst_12984;
var inst_12986 = null;
var inst_12987 = (0);
var inst_12988 = (0);
var state_13044__$1 = (function (){var statearr_13072 = state_13044;
(statearr_13072[(12)] = inst_12988);

(statearr_13072[(13)] = inst_12986);

(statearr_13072[(14)] = inst_12987);

(statearr_13072[(16)] = inst_12985);

return statearr_13072;
})();
var statearr_13073_13114 = state_13044__$1;
(statearr_13073_13114[(2)] = null);

(statearr_13073_13114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (14))){
var state_13044__$1 = state_13044;
var statearr_13077_13115 = state_13044__$1;
(statearr_13077_13115[(2)] = null);

(statearr_13077_13115[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (16))){
var inst_12999 = (state_13044[(10)]);
var inst_13003 = cljs.core.chunk_first.call(null,inst_12999);
var inst_13004 = cljs.core.chunk_rest.call(null,inst_12999);
var inst_13005 = cljs.core.count.call(null,inst_13003);
var inst_12985 = inst_13004;
var inst_12986 = inst_13003;
var inst_12987 = inst_13005;
var inst_12988 = (0);
var state_13044__$1 = (function (){var statearr_13078 = state_13044;
(statearr_13078[(12)] = inst_12988);

(statearr_13078[(13)] = inst_12986);

(statearr_13078[(14)] = inst_12987);

(statearr_13078[(16)] = inst_12985);

return statearr_13078;
})();
var statearr_13079_13116 = state_13044__$1;
(statearr_13079_13116[(2)] = null);

(statearr_13079_13116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (10))){
var inst_12988 = (state_13044[(12)]);
var inst_12986 = (state_13044[(13)]);
var inst_12987 = (state_13044[(14)]);
var inst_12985 = (state_13044[(16)]);
var inst_12993 = cljs.core._nth.call(null,inst_12986,inst_12988);
var inst_12994 = cljs.core.async.muxch_STAR_.call(null,inst_12993);
var inst_12995 = cljs.core.async.close_BANG_.call(null,inst_12994);
var inst_12996 = (inst_12988 + (1));
var tmp13074 = inst_12986;
var tmp13075 = inst_12987;
var tmp13076 = inst_12985;
var inst_12985__$1 = tmp13076;
var inst_12986__$1 = tmp13074;
var inst_12987__$1 = tmp13075;
var inst_12988__$1 = inst_12996;
var state_13044__$1 = (function (){var statearr_13080 = state_13044;
(statearr_13080[(17)] = inst_12995);

(statearr_13080[(12)] = inst_12988__$1);

(statearr_13080[(13)] = inst_12986__$1);

(statearr_13080[(14)] = inst_12987__$1);

(statearr_13080[(16)] = inst_12985__$1);

return statearr_13080;
})();
var statearr_13081_13117 = state_13044__$1;
(statearr_13081_13117[(2)] = null);

(statearr_13081_13117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (18))){
var inst_13014 = (state_13044[(2)]);
var state_13044__$1 = state_13044;
var statearr_13082_13118 = state_13044__$1;
(statearr_13082_13118[(2)] = inst_13014);

(statearr_13082_13118[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (8))){
var inst_12988 = (state_13044[(12)]);
var inst_12987 = (state_13044[(14)]);
var inst_12990 = (inst_12988 < inst_12987);
var inst_12991 = inst_12990;
var state_13044__$1 = state_13044;
if(cljs.core.truth_(inst_12991)){
var statearr_13083_13119 = state_13044__$1;
(statearr_13083_13119[(1)] = (10));

} else {
var statearr_13084_13120 = state_13044__$1;
(statearr_13084_13120[(1)] = (11));

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
});})(c__5809__auto___13092,mults,ensure_mult,p))
;
return ((function (switch__5794__auto__,c__5809__auto___13092,mults,ensure_mult,p){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_13088 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13088[(0)] = state_machine__5795__auto__);

(statearr_13088[(1)] = (1));

return statearr_13088;
});
var state_machine__5795__auto____1 = (function (state_13044){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_13044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e13089){if((e13089 instanceof Object)){
var ex__5798__auto__ = e13089;
var statearr_13090_13121 = state_13044;
(statearr_13090_13121[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13122 = state_13044;
state_13044 = G__13122;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_13044){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_13044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___13092,mults,ensure_mult,p))
})();
var state__5811__auto__ = (function (){var statearr_13091 = f__5810__auto__.call(null);
(statearr_13091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___13092);

return statearr_13091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___13092,mults,ensure_mult,p))
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
var c__5809__auto___13259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___13259,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___13259,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13229){
var state_val_13230 = (state_13229[(1)]);
if((state_val_13230 === (7))){
var state_13229__$1 = state_13229;
var statearr_13231_13260 = state_13229__$1;
(statearr_13231_13260[(2)] = null);

(statearr_13231_13260[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13230 === (1))){
var state_13229__$1 = state_13229;
var statearr_13232_13261 = state_13229__$1;
(statearr_13232_13261[(2)] = null);

(statearr_13232_13261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13230 === (4))){
var inst_13193 = (state_13229[(7)]);
var inst_13195 = (inst_13193 < cnt);
var state_13229__$1 = state_13229;
if(cljs.core.truth_(inst_13195)){
var statearr_13233_13262 = state_13229__$1;
(statearr_13233_13262[(1)] = (6));

} else {
var statearr_13234_13263 = state_13229__$1;
(statearr_13234_13263[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13230 === (15))){
var inst_13225 = (state_13229[(2)]);
var state_13229__$1 = state_13229;
var statearr_13235_13264 = state_13229__$1;
(statearr_13235_13264[(2)] = inst_13225);

(statearr_13235_13264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13230 === (13))){
var inst_13218 = cljs.core.async.close_BANG_.call(null,out);
var state_13229__$1 = state_13229;
var statearr_13236_13265 = state_13229__$1;
(statearr_13236_13265[(2)] = inst_13218);

(statearr_13236_13265[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13230 === (6))){
var state_13229__$1 = state_13229;
var statearr_13237_13266 = state_13229__$1;
(statearr_13237_13266[(2)] = null);

(statearr_13237_13266[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13230 === (3))){
var inst_13227 = (state_13229[(2)]);
var state_13229__$1 = state_13229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13229__$1,inst_13227);
} else {
if((state_val_13230 === (12))){
var inst_13215 = (state_13229[(8)]);
var inst_13215__$1 = (state_13229[(2)]);
var inst_13216 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13215__$1);
var state_13229__$1 = (function (){var statearr_13238 = state_13229;
(statearr_13238[(8)] = inst_13215__$1);

return statearr_13238;
})();
if(cljs.core.truth_(inst_13216)){
var statearr_13239_13267 = state_13229__$1;
(statearr_13239_13267[(1)] = (13));

} else {
var statearr_13240_13268 = state_13229__$1;
(statearr_13240_13268[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13230 === (2))){
var inst_13192 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13193 = (0);
var state_13229__$1 = (function (){var statearr_13241 = state_13229;
(statearr_13241[(9)] = inst_13192);

(statearr_13241[(7)] = inst_13193);

return statearr_13241;
})();
var statearr_13242_13269 = state_13229__$1;
(statearr_13242_13269[(2)] = null);

(statearr_13242_13269[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13230 === (11))){
var inst_13193 = (state_13229[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13229,(10),Object,null,(9));
var inst_13202 = chs__$1.call(null,inst_13193);
var inst_13203 = done.call(null,inst_13193);
var inst_13204 = cljs.core.async.take_BANG_.call(null,inst_13202,inst_13203);
var state_13229__$1 = state_13229;
var statearr_13243_13270 = state_13229__$1;
(statearr_13243_13270[(2)] = inst_13204);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13229__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13230 === (9))){
var inst_13193 = (state_13229[(7)]);
var inst_13206 = (state_13229[(2)]);
var inst_13207 = (inst_13193 + (1));
var inst_13193__$1 = inst_13207;
var state_13229__$1 = (function (){var statearr_13244 = state_13229;
(statearr_13244[(10)] = inst_13206);

(statearr_13244[(7)] = inst_13193__$1);

return statearr_13244;
})();
var statearr_13245_13271 = state_13229__$1;
(statearr_13245_13271[(2)] = null);

(statearr_13245_13271[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13230 === (5))){
var inst_13213 = (state_13229[(2)]);
var state_13229__$1 = (function (){var statearr_13246 = state_13229;
(statearr_13246[(11)] = inst_13213);

return statearr_13246;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13229__$1,(12),dchan);
} else {
if((state_val_13230 === (14))){
var inst_13215 = (state_13229[(8)]);
var inst_13220 = cljs.core.apply.call(null,f,inst_13215);
var state_13229__$1 = state_13229;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13229__$1,(16),out,inst_13220);
} else {
if((state_val_13230 === (16))){
var inst_13222 = (state_13229[(2)]);
var state_13229__$1 = (function (){var statearr_13247 = state_13229;
(statearr_13247[(12)] = inst_13222);

return statearr_13247;
})();
var statearr_13248_13272 = state_13229__$1;
(statearr_13248_13272[(2)] = null);

(statearr_13248_13272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13230 === (10))){
var inst_13197 = (state_13229[(2)]);
var inst_13198 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13229__$1 = (function (){var statearr_13249 = state_13229;
(statearr_13249[(13)] = inst_13197);

return statearr_13249;
})();
var statearr_13250_13273 = state_13229__$1;
(statearr_13250_13273[(2)] = inst_13198);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13229__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13230 === (8))){
var inst_13211 = (state_13229[(2)]);
var state_13229__$1 = state_13229;
var statearr_13251_13274 = state_13229__$1;
(statearr_13251_13274[(2)] = inst_13211);

(statearr_13251_13274[(1)] = (5));


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
});})(c__5809__auto___13259,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__5794__auto__,c__5809__auto___13259,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_13255 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13255[(0)] = state_machine__5795__auto__);

(statearr_13255[(1)] = (1));

return statearr_13255;
});
var state_machine__5795__auto____1 = (function (state_13229){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_13229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e13256){if((e13256 instanceof Object)){
var ex__5798__auto__ = e13256;
var statearr_13257_13275 = state_13229;
(statearr_13257_13275[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13276 = state_13229;
state_13229 = G__13276;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_13229){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_13229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___13259,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__5811__auto__ = (function (){var statearr_13258 = f__5810__auto__.call(null);
(statearr_13258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___13259);

return statearr_13258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___13259,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__5809__auto___13384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___13384,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___13384,out){
return (function (state_13360){
var state_val_13361 = (state_13360[(1)]);
if((state_val_13361 === (7))){
var inst_13340 = (state_13360[(7)]);
var inst_13339 = (state_13360[(8)]);
var inst_13339__$1 = (state_13360[(2)]);
var inst_13340__$1 = cljs.core.nth.call(null,inst_13339__$1,(0),null);
var inst_13341 = cljs.core.nth.call(null,inst_13339__$1,(1),null);
var inst_13342 = (inst_13340__$1 == null);
var state_13360__$1 = (function (){var statearr_13362 = state_13360;
(statearr_13362[(7)] = inst_13340__$1);

(statearr_13362[(9)] = inst_13341);

(statearr_13362[(8)] = inst_13339__$1);

return statearr_13362;
})();
if(cljs.core.truth_(inst_13342)){
var statearr_13363_13385 = state_13360__$1;
(statearr_13363_13385[(1)] = (8));

} else {
var statearr_13364_13386 = state_13360__$1;
(statearr_13364_13386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13361 === (1))){
var inst_13331 = cljs.core.vec.call(null,chs);
var inst_13332 = inst_13331;
var state_13360__$1 = (function (){var statearr_13365 = state_13360;
(statearr_13365[(10)] = inst_13332);

return statearr_13365;
})();
var statearr_13366_13387 = state_13360__$1;
(statearr_13366_13387[(2)] = null);

(statearr_13366_13387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13361 === (4))){
var inst_13332 = (state_13360[(10)]);
var state_13360__$1 = state_13360;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13360__$1,(7),inst_13332);
} else {
if((state_val_13361 === (6))){
var inst_13356 = (state_13360[(2)]);
var state_13360__$1 = state_13360;
var statearr_13367_13388 = state_13360__$1;
(statearr_13367_13388[(2)] = inst_13356);

(statearr_13367_13388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13361 === (3))){
var inst_13358 = (state_13360[(2)]);
var state_13360__$1 = state_13360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13360__$1,inst_13358);
} else {
if((state_val_13361 === (2))){
var inst_13332 = (state_13360[(10)]);
var inst_13334 = cljs.core.count.call(null,inst_13332);
var inst_13335 = (inst_13334 > (0));
var state_13360__$1 = state_13360;
if(cljs.core.truth_(inst_13335)){
var statearr_13369_13389 = state_13360__$1;
(statearr_13369_13389[(1)] = (4));

} else {
var statearr_13370_13390 = state_13360__$1;
(statearr_13370_13390[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13361 === (11))){
var inst_13332 = (state_13360[(10)]);
var inst_13349 = (state_13360[(2)]);
var tmp13368 = inst_13332;
var inst_13332__$1 = tmp13368;
var state_13360__$1 = (function (){var statearr_13371 = state_13360;
(statearr_13371[(11)] = inst_13349);

(statearr_13371[(10)] = inst_13332__$1);

return statearr_13371;
})();
var statearr_13372_13391 = state_13360__$1;
(statearr_13372_13391[(2)] = null);

(statearr_13372_13391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13361 === (9))){
var inst_13340 = (state_13360[(7)]);
var state_13360__$1 = state_13360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13360__$1,(11),out,inst_13340);
} else {
if((state_val_13361 === (5))){
var inst_13354 = cljs.core.async.close_BANG_.call(null,out);
var state_13360__$1 = state_13360;
var statearr_13373_13392 = state_13360__$1;
(statearr_13373_13392[(2)] = inst_13354);

(statearr_13373_13392[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13361 === (10))){
var inst_13352 = (state_13360[(2)]);
var state_13360__$1 = state_13360;
var statearr_13374_13393 = state_13360__$1;
(statearr_13374_13393[(2)] = inst_13352);

(statearr_13374_13393[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13361 === (8))){
var inst_13340 = (state_13360[(7)]);
var inst_13341 = (state_13360[(9)]);
var inst_13332 = (state_13360[(10)]);
var inst_13339 = (state_13360[(8)]);
var inst_13344 = (function (){var c = inst_13341;
var v = inst_13340;
var vec__13337 = inst_13339;
var cs = inst_13332;
return ((function (c,v,vec__13337,cs,inst_13340,inst_13341,inst_13332,inst_13339,state_val_13361,c__5809__auto___13384,out){
return (function (p1__13277_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13277_SHARP_);
});
;})(c,v,vec__13337,cs,inst_13340,inst_13341,inst_13332,inst_13339,state_val_13361,c__5809__auto___13384,out))
})();
var inst_13345 = cljs.core.filterv.call(null,inst_13344,inst_13332);
var inst_13332__$1 = inst_13345;
var state_13360__$1 = (function (){var statearr_13375 = state_13360;
(statearr_13375[(10)] = inst_13332__$1);

return statearr_13375;
})();
var statearr_13376_13394 = state_13360__$1;
(statearr_13376_13394[(2)] = null);

(statearr_13376_13394[(1)] = (2));


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
});})(c__5809__auto___13384,out))
;
return ((function (switch__5794__auto__,c__5809__auto___13384,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_13380 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13380[(0)] = state_machine__5795__auto__);

(statearr_13380[(1)] = (1));

return statearr_13380;
});
var state_machine__5795__auto____1 = (function (state_13360){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_13360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e13381){if((e13381 instanceof Object)){
var ex__5798__auto__ = e13381;
var statearr_13382_13395 = state_13360;
(statearr_13382_13395[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13396 = state_13360;
state_13360 = G__13396;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_13360){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_13360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___13384,out))
})();
var state__5811__auto__ = (function (){var statearr_13383 = f__5810__auto__.call(null);
(statearr_13383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___13384);

return statearr_13383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___13384,out))
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
var c__5809__auto___13489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___13489,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___13489,out){
return (function (state_13466){
var state_val_13467 = (state_13466[(1)]);
if((state_val_13467 === (7))){
var inst_13448 = (state_13466[(7)]);
var inst_13448__$1 = (state_13466[(2)]);
var inst_13449 = (inst_13448__$1 == null);
var inst_13450 = cljs.core.not.call(null,inst_13449);
var state_13466__$1 = (function (){var statearr_13468 = state_13466;
(statearr_13468[(7)] = inst_13448__$1);

return statearr_13468;
})();
if(inst_13450){
var statearr_13469_13490 = state_13466__$1;
(statearr_13469_13490[(1)] = (8));

} else {
var statearr_13470_13491 = state_13466__$1;
(statearr_13470_13491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13467 === (1))){
var inst_13443 = (0);
var state_13466__$1 = (function (){var statearr_13471 = state_13466;
(statearr_13471[(8)] = inst_13443);

return statearr_13471;
})();
var statearr_13472_13492 = state_13466__$1;
(statearr_13472_13492[(2)] = null);

(statearr_13472_13492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13467 === (4))){
var state_13466__$1 = state_13466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13466__$1,(7),ch);
} else {
if((state_val_13467 === (6))){
var inst_13461 = (state_13466[(2)]);
var state_13466__$1 = state_13466;
var statearr_13473_13493 = state_13466__$1;
(statearr_13473_13493[(2)] = inst_13461);

(statearr_13473_13493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13467 === (3))){
var inst_13463 = (state_13466[(2)]);
var inst_13464 = cljs.core.async.close_BANG_.call(null,out);
var state_13466__$1 = (function (){var statearr_13474 = state_13466;
(statearr_13474[(9)] = inst_13463);

return statearr_13474;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13466__$1,inst_13464);
} else {
if((state_val_13467 === (2))){
var inst_13443 = (state_13466[(8)]);
var inst_13445 = (inst_13443 < n);
var state_13466__$1 = state_13466;
if(cljs.core.truth_(inst_13445)){
var statearr_13475_13494 = state_13466__$1;
(statearr_13475_13494[(1)] = (4));

} else {
var statearr_13476_13495 = state_13466__$1;
(statearr_13476_13495[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13467 === (11))){
var inst_13443 = (state_13466[(8)]);
var inst_13453 = (state_13466[(2)]);
var inst_13454 = (inst_13443 + (1));
var inst_13443__$1 = inst_13454;
var state_13466__$1 = (function (){var statearr_13477 = state_13466;
(statearr_13477[(10)] = inst_13453);

(statearr_13477[(8)] = inst_13443__$1);

return statearr_13477;
})();
var statearr_13478_13496 = state_13466__$1;
(statearr_13478_13496[(2)] = null);

(statearr_13478_13496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13467 === (9))){
var state_13466__$1 = state_13466;
var statearr_13479_13497 = state_13466__$1;
(statearr_13479_13497[(2)] = null);

(statearr_13479_13497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13467 === (5))){
var state_13466__$1 = state_13466;
var statearr_13480_13498 = state_13466__$1;
(statearr_13480_13498[(2)] = null);

(statearr_13480_13498[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13467 === (10))){
var inst_13458 = (state_13466[(2)]);
var state_13466__$1 = state_13466;
var statearr_13481_13499 = state_13466__$1;
(statearr_13481_13499[(2)] = inst_13458);

(statearr_13481_13499[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13467 === (8))){
var inst_13448 = (state_13466[(7)]);
var state_13466__$1 = state_13466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13466__$1,(11),out,inst_13448);
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
});})(c__5809__auto___13489,out))
;
return ((function (switch__5794__auto__,c__5809__auto___13489,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_13485 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13485[(0)] = state_machine__5795__auto__);

(statearr_13485[(1)] = (1));

return statearr_13485;
});
var state_machine__5795__auto____1 = (function (state_13466){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_13466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e13486){if((e13486 instanceof Object)){
var ex__5798__auto__ = e13486;
var statearr_13487_13500 = state_13466;
(statearr_13487_13500[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13501 = state_13466;
state_13466 = G__13501;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_13466){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_13466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___13489,out))
})();
var state__5811__auto__ = (function (){var statearr_13488 = f__5810__auto__.call(null);
(statearr_13488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___13489);

return statearr_13488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___13489,out))
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
if(typeof cljs.core.async.t13509 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13509 = (function (ch,f,map_LT_,meta13510){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13510 = meta13510;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13509.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t13509.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t13509.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t13509.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t13512 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13512 = (function (fn1,_,meta13510,map_LT_,f,ch,meta13513){
this.fn1 = fn1;
this._ = _;
this.meta13510 = meta13510;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta13513 = meta13513;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13512.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13512.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t13512.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__13502_SHARP_){
return f1.call(null,(((p1__13502_SHARP_ == null))?null:self__.f.call(null,p1__13502_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t13512.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13514){
var self__ = this;
var _13514__$1 = this;
return self__.meta13513;
});})(___$1))
;

cljs.core.async.t13512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13514,meta13513__$1){
var self__ = this;
var _13514__$1 = this;
return (new cljs.core.async.t13512(self__.fn1,self__._,self__.meta13510,self__.map_LT_,self__.f,self__.ch,meta13513__$1));
});})(___$1))
;

cljs.core.async.t13512.cljs$lang$type = true;

cljs.core.async.t13512.cljs$lang$ctorStr = "cljs.core.async/t13512";

cljs.core.async.t13512.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t13512");
});})(___$1))
;

cljs.core.async.__GT_t13512 = ((function (___$1){
return (function __GT_t13512(fn1__$1,___$2,meta13510__$1,map_LT___$1,f__$1,ch__$1,meta13513){
return (new cljs.core.async.t13512(fn1__$1,___$2,meta13510__$1,map_LT___$1,f__$1,ch__$1,meta13513));
});})(___$1))
;

}

return (new cljs.core.async.t13512(fn1,___$1,self__.meta13510,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
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

cljs.core.async.t13509.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t13509.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t13509.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t13509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13511){
var self__ = this;
var _13511__$1 = this;
return self__.meta13510;
});

cljs.core.async.t13509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13511,meta13510__$1){
var self__ = this;
var _13511__$1 = this;
return (new cljs.core.async.t13509(self__.ch,self__.f,self__.map_LT_,meta13510__$1));
});

cljs.core.async.t13509.cljs$lang$type = true;

cljs.core.async.t13509.cljs$lang$ctorStr = "cljs.core.async/t13509";

cljs.core.async.t13509.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t13509");
});

cljs.core.async.__GT_t13509 = (function __GT_t13509(ch__$1,f__$1,map_LT___$1,meta13510){
return (new cljs.core.async.t13509(ch__$1,f__$1,map_LT___$1,meta13510));
});

}

return (new cljs.core.async.t13509(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t13518 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13518 = (function (ch,f,map_GT_,meta13519){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13519 = meta13519;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13518.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t13518.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t13518.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t13518.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t13518.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t13518.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t13518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13520){
var self__ = this;
var _13520__$1 = this;
return self__.meta13519;
});

cljs.core.async.t13518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13520,meta13519__$1){
var self__ = this;
var _13520__$1 = this;
return (new cljs.core.async.t13518(self__.ch,self__.f,self__.map_GT_,meta13519__$1));
});

cljs.core.async.t13518.cljs$lang$type = true;

cljs.core.async.t13518.cljs$lang$ctorStr = "cljs.core.async/t13518";

cljs.core.async.t13518.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t13518");
});

cljs.core.async.__GT_t13518 = (function __GT_t13518(ch__$1,f__$1,map_GT___$1,meta13519){
return (new cljs.core.async.t13518(ch__$1,f__$1,map_GT___$1,meta13519));
});

}

return (new cljs.core.async.t13518(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t13524 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13524 = (function (ch,p,filter_GT_,meta13525){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13525 = meta13525;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13524.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t13524.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t13524.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t13524.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t13524.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t13524.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t13524.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t13524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13526){
var self__ = this;
var _13526__$1 = this;
return self__.meta13525;
});

cljs.core.async.t13524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13526,meta13525__$1){
var self__ = this;
var _13526__$1 = this;
return (new cljs.core.async.t13524(self__.ch,self__.p,self__.filter_GT_,meta13525__$1));
});

cljs.core.async.t13524.cljs$lang$type = true;

cljs.core.async.t13524.cljs$lang$ctorStr = "cljs.core.async/t13524";

cljs.core.async.t13524.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t13524");
});

cljs.core.async.__GT_t13524 = (function __GT_t13524(ch__$1,p__$1,filter_GT___$1,meta13525){
return (new cljs.core.async.t13524(ch__$1,p__$1,filter_GT___$1,meta13525));
});

}

return (new cljs.core.async.t13524(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
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
var c__5809__auto___13609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___13609,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___13609,out){
return (function (state_13588){
var state_val_13589 = (state_13588[(1)]);
if((state_val_13589 === (7))){
var inst_13584 = (state_13588[(2)]);
var state_13588__$1 = state_13588;
var statearr_13590_13610 = state_13588__$1;
(statearr_13590_13610[(2)] = inst_13584);

(statearr_13590_13610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13589 === (1))){
var state_13588__$1 = state_13588;
var statearr_13591_13611 = state_13588__$1;
(statearr_13591_13611[(2)] = null);

(statearr_13591_13611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13589 === (4))){
var inst_13570 = (state_13588[(7)]);
var inst_13570__$1 = (state_13588[(2)]);
var inst_13571 = (inst_13570__$1 == null);
var state_13588__$1 = (function (){var statearr_13592 = state_13588;
(statearr_13592[(7)] = inst_13570__$1);

return statearr_13592;
})();
if(cljs.core.truth_(inst_13571)){
var statearr_13593_13612 = state_13588__$1;
(statearr_13593_13612[(1)] = (5));

} else {
var statearr_13594_13613 = state_13588__$1;
(statearr_13594_13613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13589 === (6))){
var inst_13570 = (state_13588[(7)]);
var inst_13575 = p.call(null,inst_13570);
var state_13588__$1 = state_13588;
if(cljs.core.truth_(inst_13575)){
var statearr_13595_13614 = state_13588__$1;
(statearr_13595_13614[(1)] = (8));

} else {
var statearr_13596_13615 = state_13588__$1;
(statearr_13596_13615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13589 === (3))){
var inst_13586 = (state_13588[(2)]);
var state_13588__$1 = state_13588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13588__$1,inst_13586);
} else {
if((state_val_13589 === (2))){
var state_13588__$1 = state_13588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13588__$1,(4),ch);
} else {
if((state_val_13589 === (11))){
var inst_13578 = (state_13588[(2)]);
var state_13588__$1 = state_13588;
var statearr_13597_13616 = state_13588__$1;
(statearr_13597_13616[(2)] = inst_13578);

(statearr_13597_13616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13589 === (9))){
var state_13588__$1 = state_13588;
var statearr_13598_13617 = state_13588__$1;
(statearr_13598_13617[(2)] = null);

(statearr_13598_13617[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13589 === (5))){
var inst_13573 = cljs.core.async.close_BANG_.call(null,out);
var state_13588__$1 = state_13588;
var statearr_13599_13618 = state_13588__$1;
(statearr_13599_13618[(2)] = inst_13573);

(statearr_13599_13618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13589 === (10))){
var inst_13581 = (state_13588[(2)]);
var state_13588__$1 = (function (){var statearr_13600 = state_13588;
(statearr_13600[(8)] = inst_13581);

return statearr_13600;
})();
var statearr_13601_13619 = state_13588__$1;
(statearr_13601_13619[(2)] = null);

(statearr_13601_13619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13589 === (8))){
var inst_13570 = (state_13588[(7)]);
var state_13588__$1 = state_13588;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13588__$1,(11),out,inst_13570);
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
});})(c__5809__auto___13609,out))
;
return ((function (switch__5794__auto__,c__5809__auto___13609,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_13605 = [null,null,null,null,null,null,null,null,null];
(statearr_13605[(0)] = state_machine__5795__auto__);

(statearr_13605[(1)] = (1));

return statearr_13605;
});
var state_machine__5795__auto____1 = (function (state_13588){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_13588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e13606){if((e13606 instanceof Object)){
var ex__5798__auto__ = e13606;
var statearr_13607_13620 = state_13588;
(statearr_13607_13620[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13621 = state_13588;
state_13588 = G__13621;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_13588){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_13588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___13609,out))
})();
var state__5811__auto__ = (function (){var statearr_13608 = f__5810__auto__.call(null);
(statearr_13608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___13609);

return statearr_13608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___13609,out))
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
return (function (state_13787){
var state_val_13788 = (state_13787[(1)]);
if((state_val_13788 === (7))){
var inst_13783 = (state_13787[(2)]);
var state_13787__$1 = state_13787;
var statearr_13789_13830 = state_13787__$1;
(statearr_13789_13830[(2)] = inst_13783);

(statearr_13789_13830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (20))){
var inst_13753 = (state_13787[(7)]);
var inst_13764 = (state_13787[(2)]);
var inst_13765 = cljs.core.next.call(null,inst_13753);
var inst_13739 = inst_13765;
var inst_13740 = null;
var inst_13741 = (0);
var inst_13742 = (0);
var state_13787__$1 = (function (){var statearr_13790 = state_13787;
(statearr_13790[(8)] = inst_13764);

(statearr_13790[(9)] = inst_13742);

(statearr_13790[(10)] = inst_13741);

(statearr_13790[(11)] = inst_13740);

(statearr_13790[(12)] = inst_13739);

return statearr_13790;
})();
var statearr_13791_13831 = state_13787__$1;
(statearr_13791_13831[(2)] = null);

(statearr_13791_13831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (1))){
var state_13787__$1 = state_13787;
var statearr_13792_13832 = state_13787__$1;
(statearr_13792_13832[(2)] = null);

(statearr_13792_13832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (4))){
var inst_13728 = (state_13787[(13)]);
var inst_13728__$1 = (state_13787[(2)]);
var inst_13729 = (inst_13728__$1 == null);
var state_13787__$1 = (function (){var statearr_13793 = state_13787;
(statearr_13793[(13)] = inst_13728__$1);

return statearr_13793;
})();
if(cljs.core.truth_(inst_13729)){
var statearr_13794_13833 = state_13787__$1;
(statearr_13794_13833[(1)] = (5));

} else {
var statearr_13795_13834 = state_13787__$1;
(statearr_13795_13834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (15))){
var state_13787__$1 = state_13787;
var statearr_13799_13835 = state_13787__$1;
(statearr_13799_13835[(2)] = null);

(statearr_13799_13835[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (21))){
var state_13787__$1 = state_13787;
var statearr_13800_13836 = state_13787__$1;
(statearr_13800_13836[(2)] = null);

(statearr_13800_13836[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (13))){
var inst_13742 = (state_13787[(9)]);
var inst_13741 = (state_13787[(10)]);
var inst_13740 = (state_13787[(11)]);
var inst_13739 = (state_13787[(12)]);
var inst_13749 = (state_13787[(2)]);
var inst_13750 = (inst_13742 + (1));
var tmp13796 = inst_13741;
var tmp13797 = inst_13740;
var tmp13798 = inst_13739;
var inst_13739__$1 = tmp13798;
var inst_13740__$1 = tmp13797;
var inst_13741__$1 = tmp13796;
var inst_13742__$1 = inst_13750;
var state_13787__$1 = (function (){var statearr_13801 = state_13787;
(statearr_13801[(9)] = inst_13742__$1);

(statearr_13801[(10)] = inst_13741__$1);

(statearr_13801[(11)] = inst_13740__$1);

(statearr_13801[(12)] = inst_13739__$1);

(statearr_13801[(14)] = inst_13749);

return statearr_13801;
})();
var statearr_13802_13837 = state_13787__$1;
(statearr_13802_13837[(2)] = null);

(statearr_13802_13837[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (22))){
var state_13787__$1 = state_13787;
var statearr_13803_13838 = state_13787__$1;
(statearr_13803_13838[(2)] = null);

(statearr_13803_13838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (6))){
var inst_13728 = (state_13787[(13)]);
var inst_13737 = f.call(null,inst_13728);
var inst_13738 = cljs.core.seq.call(null,inst_13737);
var inst_13739 = inst_13738;
var inst_13740 = null;
var inst_13741 = (0);
var inst_13742 = (0);
var state_13787__$1 = (function (){var statearr_13804 = state_13787;
(statearr_13804[(9)] = inst_13742);

(statearr_13804[(10)] = inst_13741);

(statearr_13804[(11)] = inst_13740);

(statearr_13804[(12)] = inst_13739);

return statearr_13804;
})();
var statearr_13805_13839 = state_13787__$1;
(statearr_13805_13839[(2)] = null);

(statearr_13805_13839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (17))){
var inst_13753 = (state_13787[(7)]);
var inst_13757 = cljs.core.chunk_first.call(null,inst_13753);
var inst_13758 = cljs.core.chunk_rest.call(null,inst_13753);
var inst_13759 = cljs.core.count.call(null,inst_13757);
var inst_13739 = inst_13758;
var inst_13740 = inst_13757;
var inst_13741 = inst_13759;
var inst_13742 = (0);
var state_13787__$1 = (function (){var statearr_13806 = state_13787;
(statearr_13806[(9)] = inst_13742);

(statearr_13806[(10)] = inst_13741);

(statearr_13806[(11)] = inst_13740);

(statearr_13806[(12)] = inst_13739);

return statearr_13806;
})();
var statearr_13807_13840 = state_13787__$1;
(statearr_13807_13840[(2)] = null);

(statearr_13807_13840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (3))){
var inst_13785 = (state_13787[(2)]);
var state_13787__$1 = state_13787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13787__$1,inst_13785);
} else {
if((state_val_13788 === (12))){
var inst_13773 = (state_13787[(2)]);
var state_13787__$1 = state_13787;
var statearr_13808_13841 = state_13787__$1;
(statearr_13808_13841[(2)] = inst_13773);

(statearr_13808_13841[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (2))){
var state_13787__$1 = state_13787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13787__$1,(4),in$);
} else {
if((state_val_13788 === (23))){
var inst_13781 = (state_13787[(2)]);
var state_13787__$1 = state_13787;
var statearr_13809_13842 = state_13787__$1;
(statearr_13809_13842[(2)] = inst_13781);

(statearr_13809_13842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (19))){
var inst_13768 = (state_13787[(2)]);
var state_13787__$1 = state_13787;
var statearr_13810_13843 = state_13787__$1;
(statearr_13810_13843[(2)] = inst_13768);

(statearr_13810_13843[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (11))){
var inst_13753 = (state_13787[(7)]);
var inst_13739 = (state_13787[(12)]);
var inst_13753__$1 = cljs.core.seq.call(null,inst_13739);
var state_13787__$1 = (function (){var statearr_13811 = state_13787;
(statearr_13811[(7)] = inst_13753__$1);

return statearr_13811;
})();
if(inst_13753__$1){
var statearr_13812_13844 = state_13787__$1;
(statearr_13812_13844[(1)] = (14));

} else {
var statearr_13813_13845 = state_13787__$1;
(statearr_13813_13845[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (9))){
var inst_13775 = (state_13787[(2)]);
var inst_13776 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13787__$1 = (function (){var statearr_13814 = state_13787;
(statearr_13814[(15)] = inst_13775);

return statearr_13814;
})();
if(cljs.core.truth_(inst_13776)){
var statearr_13815_13846 = state_13787__$1;
(statearr_13815_13846[(1)] = (21));

} else {
var statearr_13816_13847 = state_13787__$1;
(statearr_13816_13847[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (5))){
var inst_13731 = cljs.core.async.close_BANG_.call(null,out);
var state_13787__$1 = state_13787;
var statearr_13817_13848 = state_13787__$1;
(statearr_13817_13848[(2)] = inst_13731);

(statearr_13817_13848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (14))){
var inst_13753 = (state_13787[(7)]);
var inst_13755 = cljs.core.chunked_seq_QMARK_.call(null,inst_13753);
var state_13787__$1 = state_13787;
if(inst_13755){
var statearr_13818_13849 = state_13787__$1;
(statearr_13818_13849[(1)] = (17));

} else {
var statearr_13819_13850 = state_13787__$1;
(statearr_13819_13850[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (16))){
var inst_13771 = (state_13787[(2)]);
var state_13787__$1 = state_13787;
var statearr_13820_13851 = state_13787__$1;
(statearr_13820_13851[(2)] = inst_13771);

(statearr_13820_13851[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (10))){
var inst_13742 = (state_13787[(9)]);
var inst_13740 = (state_13787[(11)]);
var inst_13747 = cljs.core._nth.call(null,inst_13740,inst_13742);
var state_13787__$1 = state_13787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13787__$1,(13),out,inst_13747);
} else {
if((state_val_13788 === (18))){
var inst_13753 = (state_13787[(7)]);
var inst_13762 = cljs.core.first.call(null,inst_13753);
var state_13787__$1 = state_13787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13787__$1,(20),out,inst_13762);
} else {
if((state_val_13788 === (8))){
var inst_13742 = (state_13787[(9)]);
var inst_13741 = (state_13787[(10)]);
var inst_13744 = (inst_13742 < inst_13741);
var inst_13745 = inst_13744;
var state_13787__$1 = state_13787;
if(cljs.core.truth_(inst_13745)){
var statearr_13821_13852 = state_13787__$1;
(statearr_13821_13852[(1)] = (10));

} else {
var statearr_13822_13853 = state_13787__$1;
(statearr_13822_13853[(1)] = (11));

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
var statearr_13826 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13826[(0)] = state_machine__5795__auto__);

(statearr_13826[(1)] = (1));

return statearr_13826;
});
var state_machine__5795__auto____1 = (function (state_13787){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_13787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e13827){if((e13827 instanceof Object)){
var ex__5798__auto__ = e13827;
var statearr_13828_13854 = state_13787;
(statearr_13828_13854[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13855 = state_13787;
state_13787 = G__13855;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_13787){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_13787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_13829 = f__5810__auto__.call(null);
(statearr_13829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_13829;
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
var c__5809__auto___13952 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___13952,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___13952,out){
return (function (state_13927){
var state_val_13928 = (state_13927[(1)]);
if((state_val_13928 === (7))){
var inst_13922 = (state_13927[(2)]);
var state_13927__$1 = state_13927;
var statearr_13929_13953 = state_13927__$1;
(statearr_13929_13953[(2)] = inst_13922);

(statearr_13929_13953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13928 === (1))){
var inst_13904 = null;
var state_13927__$1 = (function (){var statearr_13930 = state_13927;
(statearr_13930[(7)] = inst_13904);

return statearr_13930;
})();
var statearr_13931_13954 = state_13927__$1;
(statearr_13931_13954[(2)] = null);

(statearr_13931_13954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13928 === (4))){
var inst_13907 = (state_13927[(8)]);
var inst_13907__$1 = (state_13927[(2)]);
var inst_13908 = (inst_13907__$1 == null);
var inst_13909 = cljs.core.not.call(null,inst_13908);
var state_13927__$1 = (function (){var statearr_13932 = state_13927;
(statearr_13932[(8)] = inst_13907__$1);

return statearr_13932;
})();
if(inst_13909){
var statearr_13933_13955 = state_13927__$1;
(statearr_13933_13955[(1)] = (5));

} else {
var statearr_13934_13956 = state_13927__$1;
(statearr_13934_13956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13928 === (6))){
var state_13927__$1 = state_13927;
var statearr_13935_13957 = state_13927__$1;
(statearr_13935_13957[(2)] = null);

(statearr_13935_13957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13928 === (3))){
var inst_13924 = (state_13927[(2)]);
var inst_13925 = cljs.core.async.close_BANG_.call(null,out);
var state_13927__$1 = (function (){var statearr_13936 = state_13927;
(statearr_13936[(9)] = inst_13924);

return statearr_13936;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13927__$1,inst_13925);
} else {
if((state_val_13928 === (2))){
var state_13927__$1 = state_13927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13927__$1,(4),ch);
} else {
if((state_val_13928 === (11))){
var inst_13907 = (state_13927[(8)]);
var inst_13916 = (state_13927[(2)]);
var inst_13904 = inst_13907;
var state_13927__$1 = (function (){var statearr_13937 = state_13927;
(statearr_13937[(7)] = inst_13904);

(statearr_13937[(10)] = inst_13916);

return statearr_13937;
})();
var statearr_13938_13958 = state_13927__$1;
(statearr_13938_13958[(2)] = null);

(statearr_13938_13958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13928 === (9))){
var inst_13907 = (state_13927[(8)]);
var state_13927__$1 = state_13927;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13927__$1,(11),out,inst_13907);
} else {
if((state_val_13928 === (5))){
var inst_13904 = (state_13927[(7)]);
var inst_13907 = (state_13927[(8)]);
var inst_13911 = cljs.core._EQ_.call(null,inst_13907,inst_13904);
var state_13927__$1 = state_13927;
if(inst_13911){
var statearr_13940_13959 = state_13927__$1;
(statearr_13940_13959[(1)] = (8));

} else {
var statearr_13941_13960 = state_13927__$1;
(statearr_13941_13960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13928 === (10))){
var inst_13919 = (state_13927[(2)]);
var state_13927__$1 = state_13927;
var statearr_13942_13961 = state_13927__$1;
(statearr_13942_13961[(2)] = inst_13919);

(statearr_13942_13961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13928 === (8))){
var inst_13904 = (state_13927[(7)]);
var tmp13939 = inst_13904;
var inst_13904__$1 = tmp13939;
var state_13927__$1 = (function (){var statearr_13943 = state_13927;
(statearr_13943[(7)] = inst_13904__$1);

return statearr_13943;
})();
var statearr_13944_13962 = state_13927__$1;
(statearr_13944_13962[(2)] = null);

(statearr_13944_13962[(1)] = (2));


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
});})(c__5809__auto___13952,out))
;
return ((function (switch__5794__auto__,c__5809__auto___13952,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_13948 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13948[(0)] = state_machine__5795__auto__);

(statearr_13948[(1)] = (1));

return statearr_13948;
});
var state_machine__5795__auto____1 = (function (state_13927){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_13927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e13949){if((e13949 instanceof Object)){
var ex__5798__auto__ = e13949;
var statearr_13950_13963 = state_13927;
(statearr_13950_13963[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13964 = state_13927;
state_13927 = G__13964;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_13927){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_13927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___13952,out))
})();
var state__5811__auto__ = (function (){var statearr_13951 = f__5810__auto__.call(null);
(statearr_13951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___13952);

return statearr_13951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___13952,out))
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
var c__5809__auto___14099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___14099,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___14099,out){
return (function (state_14069){
var state_val_14070 = (state_14069[(1)]);
if((state_val_14070 === (7))){
var inst_14065 = (state_14069[(2)]);
var state_14069__$1 = state_14069;
var statearr_14071_14100 = state_14069__$1;
(statearr_14071_14100[(2)] = inst_14065);

(statearr_14071_14100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14070 === (1))){
var inst_14032 = (new Array(n));
var inst_14033 = inst_14032;
var inst_14034 = (0);
var state_14069__$1 = (function (){var statearr_14072 = state_14069;
(statearr_14072[(7)] = inst_14034);

(statearr_14072[(8)] = inst_14033);

return statearr_14072;
})();
var statearr_14073_14101 = state_14069__$1;
(statearr_14073_14101[(2)] = null);

(statearr_14073_14101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14070 === (4))){
var inst_14037 = (state_14069[(9)]);
var inst_14037__$1 = (state_14069[(2)]);
var inst_14038 = (inst_14037__$1 == null);
var inst_14039 = cljs.core.not.call(null,inst_14038);
var state_14069__$1 = (function (){var statearr_14074 = state_14069;
(statearr_14074[(9)] = inst_14037__$1);

return statearr_14074;
})();
if(inst_14039){
var statearr_14075_14102 = state_14069__$1;
(statearr_14075_14102[(1)] = (5));

} else {
var statearr_14076_14103 = state_14069__$1;
(statearr_14076_14103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14070 === (15))){
var inst_14059 = (state_14069[(2)]);
var state_14069__$1 = state_14069;
var statearr_14077_14104 = state_14069__$1;
(statearr_14077_14104[(2)] = inst_14059);

(statearr_14077_14104[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14070 === (13))){
var state_14069__$1 = state_14069;
var statearr_14078_14105 = state_14069__$1;
(statearr_14078_14105[(2)] = null);

(statearr_14078_14105[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14070 === (6))){
var inst_14034 = (state_14069[(7)]);
var inst_14055 = (inst_14034 > (0));
var state_14069__$1 = state_14069;
if(cljs.core.truth_(inst_14055)){
var statearr_14079_14106 = state_14069__$1;
(statearr_14079_14106[(1)] = (12));

} else {
var statearr_14080_14107 = state_14069__$1;
(statearr_14080_14107[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14070 === (3))){
var inst_14067 = (state_14069[(2)]);
var state_14069__$1 = state_14069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14069__$1,inst_14067);
} else {
if((state_val_14070 === (12))){
var inst_14033 = (state_14069[(8)]);
var inst_14057 = cljs.core.vec.call(null,inst_14033);
var state_14069__$1 = state_14069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14069__$1,(15),out,inst_14057);
} else {
if((state_val_14070 === (2))){
var state_14069__$1 = state_14069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14069__$1,(4),ch);
} else {
if((state_val_14070 === (11))){
var inst_14049 = (state_14069[(2)]);
var inst_14050 = (new Array(n));
var inst_14033 = inst_14050;
var inst_14034 = (0);
var state_14069__$1 = (function (){var statearr_14081 = state_14069;
(statearr_14081[(7)] = inst_14034);

(statearr_14081[(10)] = inst_14049);

(statearr_14081[(8)] = inst_14033);

return statearr_14081;
})();
var statearr_14082_14108 = state_14069__$1;
(statearr_14082_14108[(2)] = null);

(statearr_14082_14108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14070 === (9))){
var inst_14033 = (state_14069[(8)]);
var inst_14047 = cljs.core.vec.call(null,inst_14033);
var state_14069__$1 = state_14069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14069__$1,(11),out,inst_14047);
} else {
if((state_val_14070 === (5))){
var inst_14034 = (state_14069[(7)]);
var inst_14042 = (state_14069[(11)]);
var inst_14037 = (state_14069[(9)]);
var inst_14033 = (state_14069[(8)]);
var inst_14041 = (inst_14033[inst_14034] = inst_14037);
var inst_14042__$1 = (inst_14034 + (1));
var inst_14043 = (inst_14042__$1 < n);
var state_14069__$1 = (function (){var statearr_14083 = state_14069;
(statearr_14083[(12)] = inst_14041);

(statearr_14083[(11)] = inst_14042__$1);

return statearr_14083;
})();
if(cljs.core.truth_(inst_14043)){
var statearr_14084_14109 = state_14069__$1;
(statearr_14084_14109[(1)] = (8));

} else {
var statearr_14085_14110 = state_14069__$1;
(statearr_14085_14110[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14070 === (14))){
var inst_14062 = (state_14069[(2)]);
var inst_14063 = cljs.core.async.close_BANG_.call(null,out);
var state_14069__$1 = (function (){var statearr_14087 = state_14069;
(statearr_14087[(13)] = inst_14062);

return statearr_14087;
})();
var statearr_14088_14111 = state_14069__$1;
(statearr_14088_14111[(2)] = inst_14063);

(statearr_14088_14111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14070 === (10))){
var inst_14053 = (state_14069[(2)]);
var state_14069__$1 = state_14069;
var statearr_14089_14112 = state_14069__$1;
(statearr_14089_14112[(2)] = inst_14053);

(statearr_14089_14112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14070 === (8))){
var inst_14042 = (state_14069[(11)]);
var inst_14033 = (state_14069[(8)]);
var tmp14086 = inst_14033;
var inst_14033__$1 = tmp14086;
var inst_14034 = inst_14042;
var state_14069__$1 = (function (){var statearr_14090 = state_14069;
(statearr_14090[(7)] = inst_14034);

(statearr_14090[(8)] = inst_14033__$1);

return statearr_14090;
})();
var statearr_14091_14113 = state_14069__$1;
(statearr_14091_14113[(2)] = null);

(statearr_14091_14113[(1)] = (2));


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
});})(c__5809__auto___14099,out))
;
return ((function (switch__5794__auto__,c__5809__auto___14099,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_14095 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14095[(0)] = state_machine__5795__auto__);

(statearr_14095[(1)] = (1));

return statearr_14095;
});
var state_machine__5795__auto____1 = (function (state_14069){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_14069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e14096){if((e14096 instanceof Object)){
var ex__5798__auto__ = e14096;
var statearr_14097_14114 = state_14069;
(statearr_14097_14114[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14115 = state_14069;
state_14069 = G__14115;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_14069){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_14069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___14099,out))
})();
var state__5811__auto__ = (function (){var statearr_14098 = f__5810__auto__.call(null);
(statearr_14098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___14099);

return statearr_14098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___14099,out))
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
var c__5809__auto___14258 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___14258,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___14258,out){
return (function (state_14228){
var state_val_14229 = (state_14228[(1)]);
if((state_val_14229 === (7))){
var inst_14224 = (state_14228[(2)]);
var state_14228__$1 = state_14228;
var statearr_14230_14259 = state_14228__$1;
(statearr_14230_14259[(2)] = inst_14224);

(statearr_14230_14259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14229 === (1))){
var inst_14187 = [];
var inst_14188 = inst_14187;
var inst_14189 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14228__$1 = (function (){var statearr_14231 = state_14228;
(statearr_14231[(7)] = inst_14188);

(statearr_14231[(8)] = inst_14189);

return statearr_14231;
})();
var statearr_14232_14260 = state_14228__$1;
(statearr_14232_14260[(2)] = null);

(statearr_14232_14260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14229 === (4))){
var inst_14192 = (state_14228[(9)]);
var inst_14192__$1 = (state_14228[(2)]);
var inst_14193 = (inst_14192__$1 == null);
var inst_14194 = cljs.core.not.call(null,inst_14193);
var state_14228__$1 = (function (){var statearr_14233 = state_14228;
(statearr_14233[(9)] = inst_14192__$1);

return statearr_14233;
})();
if(inst_14194){
var statearr_14234_14261 = state_14228__$1;
(statearr_14234_14261[(1)] = (5));

} else {
var statearr_14235_14262 = state_14228__$1;
(statearr_14235_14262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14229 === (15))){
var inst_14218 = (state_14228[(2)]);
var state_14228__$1 = state_14228;
var statearr_14236_14263 = state_14228__$1;
(statearr_14236_14263[(2)] = inst_14218);

(statearr_14236_14263[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14229 === (13))){
var state_14228__$1 = state_14228;
var statearr_14237_14264 = state_14228__$1;
(statearr_14237_14264[(2)] = null);

(statearr_14237_14264[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14229 === (6))){
var inst_14188 = (state_14228[(7)]);
var inst_14213 = inst_14188.length;
var inst_14214 = (inst_14213 > (0));
var state_14228__$1 = state_14228;
if(cljs.core.truth_(inst_14214)){
var statearr_14238_14265 = state_14228__$1;
(statearr_14238_14265[(1)] = (12));

} else {
var statearr_14239_14266 = state_14228__$1;
(statearr_14239_14266[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14229 === (3))){
var inst_14226 = (state_14228[(2)]);
var state_14228__$1 = state_14228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14228__$1,inst_14226);
} else {
if((state_val_14229 === (12))){
var inst_14188 = (state_14228[(7)]);
var inst_14216 = cljs.core.vec.call(null,inst_14188);
var state_14228__$1 = state_14228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14228__$1,(15),out,inst_14216);
} else {
if((state_val_14229 === (2))){
var state_14228__$1 = state_14228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14228__$1,(4),ch);
} else {
if((state_val_14229 === (11))){
var inst_14196 = (state_14228[(10)]);
var inst_14192 = (state_14228[(9)]);
var inst_14206 = (state_14228[(2)]);
var inst_14207 = [];
var inst_14208 = inst_14207.push(inst_14192);
var inst_14188 = inst_14207;
var inst_14189 = inst_14196;
var state_14228__$1 = (function (){var statearr_14240 = state_14228;
(statearr_14240[(11)] = inst_14208);

(statearr_14240[(7)] = inst_14188);

(statearr_14240[(8)] = inst_14189);

(statearr_14240[(12)] = inst_14206);

return statearr_14240;
})();
var statearr_14241_14267 = state_14228__$1;
(statearr_14241_14267[(2)] = null);

(statearr_14241_14267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14229 === (9))){
var inst_14188 = (state_14228[(7)]);
var inst_14204 = cljs.core.vec.call(null,inst_14188);
var state_14228__$1 = state_14228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14228__$1,(11),out,inst_14204);
} else {
if((state_val_14229 === (5))){
var inst_14196 = (state_14228[(10)]);
var inst_14189 = (state_14228[(8)]);
var inst_14192 = (state_14228[(9)]);
var inst_14196__$1 = f.call(null,inst_14192);
var inst_14197 = cljs.core._EQ_.call(null,inst_14196__$1,inst_14189);
var inst_14198 = cljs.core.keyword_identical_QMARK_.call(null,inst_14189,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14199 = (inst_14197) || (inst_14198);
var state_14228__$1 = (function (){var statearr_14242 = state_14228;
(statearr_14242[(10)] = inst_14196__$1);

return statearr_14242;
})();
if(cljs.core.truth_(inst_14199)){
var statearr_14243_14268 = state_14228__$1;
(statearr_14243_14268[(1)] = (8));

} else {
var statearr_14244_14269 = state_14228__$1;
(statearr_14244_14269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14229 === (14))){
var inst_14221 = (state_14228[(2)]);
var inst_14222 = cljs.core.async.close_BANG_.call(null,out);
var state_14228__$1 = (function (){var statearr_14246 = state_14228;
(statearr_14246[(13)] = inst_14221);

return statearr_14246;
})();
var statearr_14247_14270 = state_14228__$1;
(statearr_14247_14270[(2)] = inst_14222);

(statearr_14247_14270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14229 === (10))){
var inst_14211 = (state_14228[(2)]);
var state_14228__$1 = state_14228;
var statearr_14248_14271 = state_14228__$1;
(statearr_14248_14271[(2)] = inst_14211);

(statearr_14248_14271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14229 === (8))){
var inst_14196 = (state_14228[(10)]);
var inst_14188 = (state_14228[(7)]);
var inst_14192 = (state_14228[(9)]);
var inst_14201 = inst_14188.push(inst_14192);
var tmp14245 = inst_14188;
var inst_14188__$1 = tmp14245;
var inst_14189 = inst_14196;
var state_14228__$1 = (function (){var statearr_14249 = state_14228;
(statearr_14249[(7)] = inst_14188__$1);

(statearr_14249[(14)] = inst_14201);

(statearr_14249[(8)] = inst_14189);

return statearr_14249;
})();
var statearr_14250_14272 = state_14228__$1;
(statearr_14250_14272[(2)] = null);

(statearr_14250_14272[(1)] = (2));


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
});})(c__5809__auto___14258,out))
;
return ((function (switch__5794__auto__,c__5809__auto___14258,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_14254 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14254[(0)] = state_machine__5795__auto__);

(statearr_14254[(1)] = (1));

return statearr_14254;
});
var state_machine__5795__auto____1 = (function (state_14228){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_14228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e14255){if((e14255 instanceof Object)){
var ex__5798__auto__ = e14255;
var statearr_14256_14273 = state_14228;
(statearr_14256_14273[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14274 = state_14228;
state_14228 = G__14274;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_14228){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_14228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___14258,out))
})();
var state__5811__auto__ = (function (){var statearr_14257 = f__5810__auto__.call(null);
(statearr_14257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___14258);

return statearr_14257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___14258,out))
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
