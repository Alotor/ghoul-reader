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
if(typeof cljs.core.async.t11461 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11461 = (function (f,fn_handler,meta11462){
this.f = f;
this.fn_handler = fn_handler;
this.meta11462 = meta11462;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11461.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11461.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t11461.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t11461.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11463){
var self__ = this;
var _11463__$1 = this;
return self__.meta11462;
});

cljs.core.async.t11461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11463,meta11462__$1){
var self__ = this;
var _11463__$1 = this;
return (new cljs.core.async.t11461(self__.f,self__.fn_handler,meta11462__$1));
});

cljs.core.async.t11461.cljs$lang$type = true;

cljs.core.async.t11461.cljs$lang$ctorStr = "cljs.core.async/t11461";

cljs.core.async.t11461.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t11461");
});

cljs.core.async.__GT_t11461 = (function __GT_t11461(f__$1,fn_handler__$1,meta11462){
return (new cljs.core.async.t11461(f__$1,fn_handler__$1,meta11462));
});

}

return (new cljs.core.async.t11461(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
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
var G__11465 = buff;
if(G__11465){
var bit__4284__auto__ = null;
if(cljs.core.truth_((function (){var or__3608__auto__ = bit__4284__auto__;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return G__11465.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__11465.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11465);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11465);
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
var val_11466 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11466);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_11466,ret){
return (function (){
return fn1.call(null,val_11466);
});})(val_11466,ret))
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
var n__4490__auto___11467 = n;
var x_11468 = (0);
while(true){
if((x_11468 < n__4490__auto___11467)){
(a[x_11468] = (0));

var G__11469 = (x_11468 + (1));
x_11468 = G__11469;
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

var G__11470 = (i + (1));
i = G__11470;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t11474 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11474 = (function (flag,alt_flag,meta11475){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11475 = meta11475;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11474.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11474.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t11474.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t11474.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11476){
var self__ = this;
var _11476__$1 = this;
return self__.meta11475;
});})(flag))
;

cljs.core.async.t11474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11476,meta11475__$1){
var self__ = this;
var _11476__$1 = this;
return (new cljs.core.async.t11474(self__.flag,self__.alt_flag,meta11475__$1));
});})(flag))
;

cljs.core.async.t11474.cljs$lang$type = true;

cljs.core.async.t11474.cljs$lang$ctorStr = "cljs.core.async/t11474";

cljs.core.async.t11474.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t11474");
});})(flag))
;

cljs.core.async.__GT_t11474 = ((function (flag){
return (function __GT_t11474(flag__$1,alt_flag__$1,meta11475){
return (new cljs.core.async.t11474(flag__$1,alt_flag__$1,meta11475));
});})(flag))
;

}

return (new cljs.core.async.t11474(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t11480 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11480 = (function (cb,flag,alt_handler,meta11481){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11481 = meta11481;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11480.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11480.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t11480.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t11480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11482){
var self__ = this;
var _11482__$1 = this;
return self__.meta11481;
});

cljs.core.async.t11480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11482,meta11481__$1){
var self__ = this;
var _11482__$1 = this;
return (new cljs.core.async.t11480(self__.cb,self__.flag,self__.alt_handler,meta11481__$1));
});

cljs.core.async.t11480.cljs$lang$type = true;

cljs.core.async.t11480.cljs$lang$ctorStr = "cljs.core.async/t11480";

cljs.core.async.t11480.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t11480");
});

cljs.core.async.__GT_t11480 = (function __GT_t11480(cb__$1,flag__$1,alt_handler__$1,meta11481){
return (new cljs.core.async.t11480(cb__$1,flag__$1,alt_handler__$1,meta11481));
});

}

return (new cljs.core.async.t11480(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
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
return (function (p1__11483_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11483_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11484_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11484_SHARP_,port], null));
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
var G__11485 = (i + (1));
i = G__11485;
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
var alts_BANG___delegate = function (ports,p__11486){
var map__11488 = p__11486;
var map__11488__$1 = ((cljs.core.seq_QMARK_.call(null,map__11488))?cljs.core.apply.call(null,cljs.core.hash_map,map__11488):map__11488);
var opts = map__11488__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__11486 = null;
if (arguments.length > 1) {
  p__11486 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__11486);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11489){
var ports = cljs.core.first(arglist__11489);
var p__11486 = cljs.core.rest(arglist__11489);
return alts_BANG___delegate(ports,p__11486);
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
var c__5809__auto___11584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___11584){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___11584){
return (function (state_11560){
var state_val_11561 = (state_11560[(1)]);
if((state_val_11561 === (7))){
var inst_11556 = (state_11560[(2)]);
var state_11560__$1 = state_11560;
var statearr_11562_11585 = state_11560__$1;
(statearr_11562_11585[(2)] = inst_11556);

(statearr_11562_11585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11561 === (1))){
var state_11560__$1 = state_11560;
var statearr_11563_11586 = state_11560__$1;
(statearr_11563_11586[(2)] = null);

(statearr_11563_11586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11561 === (4))){
var inst_11539 = (state_11560[(7)]);
var inst_11539__$1 = (state_11560[(2)]);
var inst_11540 = (inst_11539__$1 == null);
var state_11560__$1 = (function (){var statearr_11564 = state_11560;
(statearr_11564[(7)] = inst_11539__$1);

return statearr_11564;
})();
if(cljs.core.truth_(inst_11540)){
var statearr_11565_11587 = state_11560__$1;
(statearr_11565_11587[(1)] = (5));

} else {
var statearr_11566_11588 = state_11560__$1;
(statearr_11566_11588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11561 === (13))){
var state_11560__$1 = state_11560;
var statearr_11567_11589 = state_11560__$1;
(statearr_11567_11589[(2)] = null);

(statearr_11567_11589[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11561 === (6))){
var inst_11539 = (state_11560[(7)]);
var state_11560__$1 = state_11560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11560__$1,(11),to,inst_11539);
} else {
if((state_val_11561 === (3))){
var inst_11558 = (state_11560[(2)]);
var state_11560__$1 = state_11560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11560__$1,inst_11558);
} else {
if((state_val_11561 === (12))){
var state_11560__$1 = state_11560;
var statearr_11568_11590 = state_11560__$1;
(statearr_11568_11590[(2)] = null);

(statearr_11568_11590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11561 === (2))){
var state_11560__$1 = state_11560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11560__$1,(4),from);
} else {
if((state_val_11561 === (11))){
var inst_11549 = (state_11560[(2)]);
var state_11560__$1 = state_11560;
if(cljs.core.truth_(inst_11549)){
var statearr_11569_11591 = state_11560__$1;
(statearr_11569_11591[(1)] = (12));

} else {
var statearr_11570_11592 = state_11560__$1;
(statearr_11570_11592[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11561 === (9))){
var state_11560__$1 = state_11560;
var statearr_11571_11593 = state_11560__$1;
(statearr_11571_11593[(2)] = null);

(statearr_11571_11593[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11561 === (5))){
var state_11560__$1 = state_11560;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11572_11594 = state_11560__$1;
(statearr_11572_11594[(1)] = (8));

} else {
var statearr_11573_11595 = state_11560__$1;
(statearr_11573_11595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11561 === (14))){
var inst_11554 = (state_11560[(2)]);
var state_11560__$1 = state_11560;
var statearr_11574_11596 = state_11560__$1;
(statearr_11574_11596[(2)] = inst_11554);

(statearr_11574_11596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11561 === (10))){
var inst_11546 = (state_11560[(2)]);
var state_11560__$1 = state_11560;
var statearr_11575_11597 = state_11560__$1;
(statearr_11575_11597[(2)] = inst_11546);

(statearr_11575_11597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11561 === (8))){
var inst_11543 = cljs.core.async.close_BANG_.call(null,to);
var state_11560__$1 = state_11560;
var statearr_11576_11598 = state_11560__$1;
(statearr_11576_11598[(2)] = inst_11543);

(statearr_11576_11598[(1)] = (10));


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
});})(c__5809__auto___11584))
;
return ((function (switch__5794__auto__,c__5809__auto___11584){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_11580 = [null,null,null,null,null,null,null,null];
(statearr_11580[(0)] = state_machine__5795__auto__);

(statearr_11580[(1)] = (1));

return statearr_11580;
});
var state_machine__5795__auto____1 = (function (state_11560){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_11560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e11581){if((e11581 instanceof Object)){
var ex__5798__auto__ = e11581;
var statearr_11582_11599 = state_11560;
(statearr_11582_11599[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11600 = state_11560;
state_11560 = G__11600;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_11560){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_11560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___11584))
})();
var state__5811__auto__ = (function (){var statearr_11583 = f__5810__auto__.call(null);
(statearr_11583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___11584);

return statearr_11583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___11584))
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
return (function (p__11784){
var vec__11785 = p__11784;
var v = cljs.core.nth.call(null,vec__11785,(0),null);
var p = cljs.core.nth.call(null,vec__11785,(1),null);
var job = vec__11785;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__5809__auto___11967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___11967,res,vec__11785,v,p,job,jobs,results){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___11967,res,vec__11785,v,p,job,jobs,results){
return (function (state_11790){
var state_val_11791 = (state_11790[(1)]);
if((state_val_11791 === (2))){
var inst_11787 = (state_11790[(2)]);
var inst_11788 = cljs.core.async.close_BANG_.call(null,res);
var state_11790__$1 = (function (){var statearr_11792 = state_11790;
(statearr_11792[(7)] = inst_11787);

return statearr_11792;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11790__$1,inst_11788);
} else {
if((state_val_11791 === (1))){
var state_11790__$1 = state_11790;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11790__$1,(2),res,v);
} else {
return null;
}
}
});})(c__5809__auto___11967,res,vec__11785,v,p,job,jobs,results))
;
return ((function (switch__5794__auto__,c__5809__auto___11967,res,vec__11785,v,p,job,jobs,results){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_11796 = [null,null,null,null,null,null,null,null];
(statearr_11796[(0)] = state_machine__5795__auto__);

(statearr_11796[(1)] = (1));

return statearr_11796;
});
var state_machine__5795__auto____1 = (function (state_11790){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_11790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e11797){if((e11797 instanceof Object)){
var ex__5798__auto__ = e11797;
var statearr_11798_11968 = state_11790;
(statearr_11798_11968[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11969 = state_11790;
state_11790 = G__11969;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_11790){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_11790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___11967,res,vec__11785,v,p,job,jobs,results))
})();
var state__5811__auto__ = (function (){var statearr_11799 = f__5810__auto__.call(null);
(statearr_11799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___11967);

return statearr_11799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___11967,res,vec__11785,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__11800){
var vec__11801 = p__11800;
var v = cljs.core.nth.call(null,vec__11801,(0),null);
var p = cljs.core.nth.call(null,vec__11801,(1),null);
var job = vec__11801;
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
var n__4490__auto___11970 = n;
var __11971 = (0);
while(true){
if((__11971 < n__4490__auto___11970)){
var G__11802_11972 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__11802_11972) {
case "async":
var c__5809__auto___11974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11971,c__5809__auto___11974,G__11802_11972,n__4490__auto___11970,jobs,results,process,async){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (__11971,c__5809__auto___11974,G__11802_11972,n__4490__auto___11970,jobs,results,process,async){
return (function (state_11815){
var state_val_11816 = (state_11815[(1)]);
if((state_val_11816 === (7))){
var inst_11811 = (state_11815[(2)]);
var state_11815__$1 = state_11815;
var statearr_11817_11975 = state_11815__$1;
(statearr_11817_11975[(2)] = inst_11811);

(statearr_11817_11975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11816 === (6))){
var state_11815__$1 = state_11815;
var statearr_11818_11976 = state_11815__$1;
(statearr_11818_11976[(2)] = null);

(statearr_11818_11976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11816 === (5))){
var state_11815__$1 = state_11815;
var statearr_11819_11977 = state_11815__$1;
(statearr_11819_11977[(2)] = null);

(statearr_11819_11977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11816 === (4))){
var inst_11805 = (state_11815[(2)]);
var inst_11806 = async.call(null,inst_11805);
var state_11815__$1 = state_11815;
if(cljs.core.truth_(inst_11806)){
var statearr_11820_11978 = state_11815__$1;
(statearr_11820_11978[(1)] = (5));

} else {
var statearr_11821_11979 = state_11815__$1;
(statearr_11821_11979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11816 === (3))){
var inst_11813 = (state_11815[(2)]);
var state_11815__$1 = state_11815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11815__$1,inst_11813);
} else {
if((state_val_11816 === (2))){
var state_11815__$1 = state_11815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11815__$1,(4),jobs);
} else {
if((state_val_11816 === (1))){
var state_11815__$1 = state_11815;
var statearr_11822_11980 = state_11815__$1;
(statearr_11822_11980[(2)] = null);

(statearr_11822_11980[(1)] = (2));


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
});})(__11971,c__5809__auto___11974,G__11802_11972,n__4490__auto___11970,jobs,results,process,async))
;
return ((function (__11971,switch__5794__auto__,c__5809__auto___11974,G__11802_11972,n__4490__auto___11970,jobs,results,process,async){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_11826 = [null,null,null,null,null,null,null];
(statearr_11826[(0)] = state_machine__5795__auto__);

(statearr_11826[(1)] = (1));

return statearr_11826;
});
var state_machine__5795__auto____1 = (function (state_11815){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_11815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e11827){if((e11827 instanceof Object)){
var ex__5798__auto__ = e11827;
var statearr_11828_11981 = state_11815;
(statearr_11828_11981[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11982 = state_11815;
state_11815 = G__11982;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_11815){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_11815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(__11971,switch__5794__auto__,c__5809__auto___11974,G__11802_11972,n__4490__auto___11970,jobs,results,process,async))
})();
var state__5811__auto__ = (function (){var statearr_11829 = f__5810__auto__.call(null);
(statearr_11829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___11974);

return statearr_11829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(__11971,c__5809__auto___11974,G__11802_11972,n__4490__auto___11970,jobs,results,process,async))
);


break;
case "compute":
var c__5809__auto___11983 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11971,c__5809__auto___11983,G__11802_11972,n__4490__auto___11970,jobs,results,process,async){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (__11971,c__5809__auto___11983,G__11802_11972,n__4490__auto___11970,jobs,results,process,async){
return (function (state_11842){
var state_val_11843 = (state_11842[(1)]);
if((state_val_11843 === (7))){
var inst_11838 = (state_11842[(2)]);
var state_11842__$1 = state_11842;
var statearr_11844_11984 = state_11842__$1;
(statearr_11844_11984[(2)] = inst_11838);

(statearr_11844_11984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11843 === (6))){
var state_11842__$1 = state_11842;
var statearr_11845_11985 = state_11842__$1;
(statearr_11845_11985[(2)] = null);

(statearr_11845_11985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11843 === (5))){
var state_11842__$1 = state_11842;
var statearr_11846_11986 = state_11842__$1;
(statearr_11846_11986[(2)] = null);

(statearr_11846_11986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11843 === (4))){
var inst_11832 = (state_11842[(2)]);
var inst_11833 = process.call(null,inst_11832);
var state_11842__$1 = state_11842;
if(cljs.core.truth_(inst_11833)){
var statearr_11847_11987 = state_11842__$1;
(statearr_11847_11987[(1)] = (5));

} else {
var statearr_11848_11988 = state_11842__$1;
(statearr_11848_11988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11843 === (3))){
var inst_11840 = (state_11842[(2)]);
var state_11842__$1 = state_11842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11842__$1,inst_11840);
} else {
if((state_val_11843 === (2))){
var state_11842__$1 = state_11842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11842__$1,(4),jobs);
} else {
if((state_val_11843 === (1))){
var state_11842__$1 = state_11842;
var statearr_11849_11989 = state_11842__$1;
(statearr_11849_11989[(2)] = null);

(statearr_11849_11989[(1)] = (2));


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
});})(__11971,c__5809__auto___11983,G__11802_11972,n__4490__auto___11970,jobs,results,process,async))
;
return ((function (__11971,switch__5794__auto__,c__5809__auto___11983,G__11802_11972,n__4490__auto___11970,jobs,results,process,async){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_11853 = [null,null,null,null,null,null,null];
(statearr_11853[(0)] = state_machine__5795__auto__);

(statearr_11853[(1)] = (1));

return statearr_11853;
});
var state_machine__5795__auto____1 = (function (state_11842){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_11842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e11854){if((e11854 instanceof Object)){
var ex__5798__auto__ = e11854;
var statearr_11855_11990 = state_11842;
(statearr_11855_11990[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11991 = state_11842;
state_11842 = G__11991;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_11842){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_11842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(__11971,switch__5794__auto__,c__5809__auto___11983,G__11802_11972,n__4490__auto___11970,jobs,results,process,async))
})();
var state__5811__auto__ = (function (){var statearr_11856 = f__5810__auto__.call(null);
(statearr_11856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___11983);

return statearr_11856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(__11971,c__5809__auto___11983,G__11802_11972,n__4490__auto___11970,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__11992 = (__11971 + (1));
__11971 = G__11992;
continue;
} else {
}
break;
}

var c__5809__auto___11993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___11993,jobs,results,process,async){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___11993,jobs,results,process,async){
return (function (state_11878){
var state_val_11879 = (state_11878[(1)]);
if((state_val_11879 === (9))){
var inst_11871 = (state_11878[(2)]);
var state_11878__$1 = (function (){var statearr_11880 = state_11878;
(statearr_11880[(7)] = inst_11871);

return statearr_11880;
})();
var statearr_11881_11994 = state_11878__$1;
(statearr_11881_11994[(2)] = null);

(statearr_11881_11994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11879 === (8))){
var inst_11864 = (state_11878[(8)]);
var inst_11869 = (state_11878[(2)]);
var state_11878__$1 = (function (){var statearr_11882 = state_11878;
(statearr_11882[(9)] = inst_11869);

return statearr_11882;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11878__$1,(9),results,inst_11864);
} else {
if((state_val_11879 === (7))){
var inst_11874 = (state_11878[(2)]);
var state_11878__$1 = state_11878;
var statearr_11883_11995 = state_11878__$1;
(statearr_11883_11995[(2)] = inst_11874);

(statearr_11883_11995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11879 === (6))){
var inst_11864 = (state_11878[(8)]);
var inst_11859 = (state_11878[(10)]);
var inst_11864__$1 = cljs.core.async.chan.call(null,(1));
var inst_11865 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11866 = [inst_11859,inst_11864__$1];
var inst_11867 = (new cljs.core.PersistentVector(null,2,(5),inst_11865,inst_11866,null));
var state_11878__$1 = (function (){var statearr_11884 = state_11878;
(statearr_11884[(8)] = inst_11864__$1);

return statearr_11884;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11878__$1,(8),jobs,inst_11867);
} else {
if((state_val_11879 === (5))){
var inst_11862 = cljs.core.async.close_BANG_.call(null,jobs);
var state_11878__$1 = state_11878;
var statearr_11885_11996 = state_11878__$1;
(statearr_11885_11996[(2)] = inst_11862);

(statearr_11885_11996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11879 === (4))){
var inst_11859 = (state_11878[(10)]);
var inst_11859__$1 = (state_11878[(2)]);
var inst_11860 = (inst_11859__$1 == null);
var state_11878__$1 = (function (){var statearr_11886 = state_11878;
(statearr_11886[(10)] = inst_11859__$1);

return statearr_11886;
})();
if(cljs.core.truth_(inst_11860)){
var statearr_11887_11997 = state_11878__$1;
(statearr_11887_11997[(1)] = (5));

} else {
var statearr_11888_11998 = state_11878__$1;
(statearr_11888_11998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11879 === (3))){
var inst_11876 = (state_11878[(2)]);
var state_11878__$1 = state_11878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11878__$1,inst_11876);
} else {
if((state_val_11879 === (2))){
var state_11878__$1 = state_11878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11878__$1,(4),from);
} else {
if((state_val_11879 === (1))){
var state_11878__$1 = state_11878;
var statearr_11889_11999 = state_11878__$1;
(statearr_11889_11999[(2)] = null);

(statearr_11889_11999[(1)] = (2));


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
});})(c__5809__auto___11993,jobs,results,process,async))
;
return ((function (switch__5794__auto__,c__5809__auto___11993,jobs,results,process,async){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_11893 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11893[(0)] = state_machine__5795__auto__);

(statearr_11893[(1)] = (1));

return statearr_11893;
});
var state_machine__5795__auto____1 = (function (state_11878){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_11878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e11894){if((e11894 instanceof Object)){
var ex__5798__auto__ = e11894;
var statearr_11895_12000 = state_11878;
(statearr_11895_12000[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12001 = state_11878;
state_11878 = G__12001;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_11878){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_11878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___11993,jobs,results,process,async))
})();
var state__5811__auto__ = (function (){var statearr_11896 = f__5810__auto__.call(null);
(statearr_11896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___11993);

return statearr_11896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___11993,jobs,results,process,async))
);


var c__5809__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto__,jobs,results,process,async){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto__,jobs,results,process,async){
return (function (state_11934){
var state_val_11935 = (state_11934[(1)]);
if((state_val_11935 === (7))){
var inst_11930 = (state_11934[(2)]);
var state_11934__$1 = state_11934;
var statearr_11936_12002 = state_11934__$1;
(statearr_11936_12002[(2)] = inst_11930);

(statearr_11936_12002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11935 === (20))){
var state_11934__$1 = state_11934;
var statearr_11937_12003 = state_11934__$1;
(statearr_11937_12003[(2)] = null);

(statearr_11937_12003[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11935 === (1))){
var state_11934__$1 = state_11934;
var statearr_11938_12004 = state_11934__$1;
(statearr_11938_12004[(2)] = null);

(statearr_11938_12004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11935 === (4))){
var inst_11899 = (state_11934[(7)]);
var inst_11899__$1 = (state_11934[(2)]);
var inst_11900 = (inst_11899__$1 == null);
var state_11934__$1 = (function (){var statearr_11939 = state_11934;
(statearr_11939[(7)] = inst_11899__$1);

return statearr_11939;
})();
if(cljs.core.truth_(inst_11900)){
var statearr_11940_12005 = state_11934__$1;
(statearr_11940_12005[(1)] = (5));

} else {
var statearr_11941_12006 = state_11934__$1;
(statearr_11941_12006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11935 === (15))){
var inst_11912 = (state_11934[(8)]);
var state_11934__$1 = state_11934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11934__$1,(18),to,inst_11912);
} else {
if((state_val_11935 === (21))){
var inst_11925 = (state_11934[(2)]);
var state_11934__$1 = state_11934;
var statearr_11942_12007 = state_11934__$1;
(statearr_11942_12007[(2)] = inst_11925);

(statearr_11942_12007[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11935 === (13))){
var inst_11927 = (state_11934[(2)]);
var state_11934__$1 = (function (){var statearr_11943 = state_11934;
(statearr_11943[(9)] = inst_11927);

return statearr_11943;
})();
var statearr_11944_12008 = state_11934__$1;
(statearr_11944_12008[(2)] = null);

(statearr_11944_12008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11935 === (6))){
var inst_11899 = (state_11934[(7)]);
var state_11934__$1 = state_11934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11934__$1,(11),inst_11899);
} else {
if((state_val_11935 === (17))){
var inst_11920 = (state_11934[(2)]);
var state_11934__$1 = state_11934;
if(cljs.core.truth_(inst_11920)){
var statearr_11945_12009 = state_11934__$1;
(statearr_11945_12009[(1)] = (19));

} else {
var statearr_11946_12010 = state_11934__$1;
(statearr_11946_12010[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11935 === (3))){
var inst_11932 = (state_11934[(2)]);
var state_11934__$1 = state_11934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11934__$1,inst_11932);
} else {
if((state_val_11935 === (12))){
var inst_11909 = (state_11934[(10)]);
var state_11934__$1 = state_11934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11934__$1,(14),inst_11909);
} else {
if((state_val_11935 === (2))){
var state_11934__$1 = state_11934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11934__$1,(4),results);
} else {
if((state_val_11935 === (19))){
var state_11934__$1 = state_11934;
var statearr_11947_12011 = state_11934__$1;
(statearr_11947_12011[(2)] = null);

(statearr_11947_12011[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11935 === (11))){
var inst_11909 = (state_11934[(2)]);
var state_11934__$1 = (function (){var statearr_11948 = state_11934;
(statearr_11948[(10)] = inst_11909);

return statearr_11948;
})();
var statearr_11949_12012 = state_11934__$1;
(statearr_11949_12012[(2)] = null);

(statearr_11949_12012[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11935 === (9))){
var state_11934__$1 = state_11934;
var statearr_11950_12013 = state_11934__$1;
(statearr_11950_12013[(2)] = null);

(statearr_11950_12013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11935 === (5))){
var state_11934__$1 = state_11934;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11951_12014 = state_11934__$1;
(statearr_11951_12014[(1)] = (8));

} else {
var statearr_11952_12015 = state_11934__$1;
(statearr_11952_12015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11935 === (14))){
var inst_11912 = (state_11934[(8)]);
var inst_11914 = (state_11934[(11)]);
var inst_11912__$1 = (state_11934[(2)]);
var inst_11913 = (inst_11912__$1 == null);
var inst_11914__$1 = cljs.core.not.call(null,inst_11913);
var state_11934__$1 = (function (){var statearr_11953 = state_11934;
(statearr_11953[(8)] = inst_11912__$1);

(statearr_11953[(11)] = inst_11914__$1);

return statearr_11953;
})();
if(inst_11914__$1){
var statearr_11954_12016 = state_11934__$1;
(statearr_11954_12016[(1)] = (15));

} else {
var statearr_11955_12017 = state_11934__$1;
(statearr_11955_12017[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11935 === (16))){
var inst_11914 = (state_11934[(11)]);
var state_11934__$1 = state_11934;
var statearr_11956_12018 = state_11934__$1;
(statearr_11956_12018[(2)] = inst_11914);

(statearr_11956_12018[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11935 === (10))){
var inst_11906 = (state_11934[(2)]);
var state_11934__$1 = state_11934;
var statearr_11957_12019 = state_11934__$1;
(statearr_11957_12019[(2)] = inst_11906);

(statearr_11957_12019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11935 === (18))){
var inst_11917 = (state_11934[(2)]);
var state_11934__$1 = state_11934;
var statearr_11958_12020 = state_11934__$1;
(statearr_11958_12020[(2)] = inst_11917);

(statearr_11958_12020[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11935 === (8))){
var inst_11903 = cljs.core.async.close_BANG_.call(null,to);
var state_11934__$1 = state_11934;
var statearr_11959_12021 = state_11934__$1;
(statearr_11959_12021[(2)] = inst_11903);

(statearr_11959_12021[(1)] = (10));


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
var statearr_11963 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11963[(0)] = state_machine__5795__auto__);

(statearr_11963[(1)] = (1));

return statearr_11963;
});
var state_machine__5795__auto____1 = (function (state_11934){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_11934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e11964){if((e11964 instanceof Object)){
var ex__5798__auto__ = e11964;
var statearr_11965_12022 = state_11934;
(statearr_11965_12022[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12023 = state_11934;
state_11934 = G__12023;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_11934){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_11934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__,jobs,results,process,async))
})();
var state__5811__auto__ = (function (){var statearr_11966 = f__5810__auto__.call(null);
(statearr_11966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_11966;
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
var c__5809__auto___12124 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___12124,tc,fc){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___12124,tc,fc){
return (function (state_12099){
var state_val_12100 = (state_12099[(1)]);
if((state_val_12100 === (7))){
var inst_12095 = (state_12099[(2)]);
var state_12099__$1 = state_12099;
var statearr_12101_12125 = state_12099__$1;
(statearr_12101_12125[(2)] = inst_12095);

(statearr_12101_12125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12100 === (1))){
var state_12099__$1 = state_12099;
var statearr_12102_12126 = state_12099__$1;
(statearr_12102_12126[(2)] = null);

(statearr_12102_12126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12100 === (4))){
var inst_12076 = (state_12099[(7)]);
var inst_12076__$1 = (state_12099[(2)]);
var inst_12077 = (inst_12076__$1 == null);
var state_12099__$1 = (function (){var statearr_12103 = state_12099;
(statearr_12103[(7)] = inst_12076__$1);

return statearr_12103;
})();
if(cljs.core.truth_(inst_12077)){
var statearr_12104_12127 = state_12099__$1;
(statearr_12104_12127[(1)] = (5));

} else {
var statearr_12105_12128 = state_12099__$1;
(statearr_12105_12128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12100 === (13))){
var state_12099__$1 = state_12099;
var statearr_12106_12129 = state_12099__$1;
(statearr_12106_12129[(2)] = null);

(statearr_12106_12129[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12100 === (6))){
var inst_12076 = (state_12099[(7)]);
var inst_12082 = p.call(null,inst_12076);
var state_12099__$1 = state_12099;
if(cljs.core.truth_(inst_12082)){
var statearr_12107_12130 = state_12099__$1;
(statearr_12107_12130[(1)] = (9));

} else {
var statearr_12108_12131 = state_12099__$1;
(statearr_12108_12131[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12100 === (3))){
var inst_12097 = (state_12099[(2)]);
var state_12099__$1 = state_12099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12099__$1,inst_12097);
} else {
if((state_val_12100 === (12))){
var state_12099__$1 = state_12099;
var statearr_12109_12132 = state_12099__$1;
(statearr_12109_12132[(2)] = null);

(statearr_12109_12132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12100 === (2))){
var state_12099__$1 = state_12099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12099__$1,(4),ch);
} else {
if((state_val_12100 === (11))){
var inst_12076 = (state_12099[(7)]);
var inst_12086 = (state_12099[(2)]);
var state_12099__$1 = state_12099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12099__$1,(8),inst_12086,inst_12076);
} else {
if((state_val_12100 === (9))){
var state_12099__$1 = state_12099;
var statearr_12110_12133 = state_12099__$1;
(statearr_12110_12133[(2)] = tc);

(statearr_12110_12133[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12100 === (5))){
var inst_12079 = cljs.core.async.close_BANG_.call(null,tc);
var inst_12080 = cljs.core.async.close_BANG_.call(null,fc);
var state_12099__$1 = (function (){var statearr_12111 = state_12099;
(statearr_12111[(8)] = inst_12079);

return statearr_12111;
})();
var statearr_12112_12134 = state_12099__$1;
(statearr_12112_12134[(2)] = inst_12080);

(statearr_12112_12134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12100 === (14))){
var inst_12093 = (state_12099[(2)]);
var state_12099__$1 = state_12099;
var statearr_12113_12135 = state_12099__$1;
(statearr_12113_12135[(2)] = inst_12093);

(statearr_12113_12135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12100 === (10))){
var state_12099__$1 = state_12099;
var statearr_12114_12136 = state_12099__$1;
(statearr_12114_12136[(2)] = fc);

(statearr_12114_12136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12100 === (8))){
var inst_12088 = (state_12099[(2)]);
var state_12099__$1 = state_12099;
if(cljs.core.truth_(inst_12088)){
var statearr_12115_12137 = state_12099__$1;
(statearr_12115_12137[(1)] = (12));

} else {
var statearr_12116_12138 = state_12099__$1;
(statearr_12116_12138[(1)] = (13));

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
});})(c__5809__auto___12124,tc,fc))
;
return ((function (switch__5794__auto__,c__5809__auto___12124,tc,fc){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_12120 = [null,null,null,null,null,null,null,null,null];
(statearr_12120[(0)] = state_machine__5795__auto__);

(statearr_12120[(1)] = (1));

return statearr_12120;
});
var state_machine__5795__auto____1 = (function (state_12099){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_12099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e12121){if((e12121 instanceof Object)){
var ex__5798__auto__ = e12121;
var statearr_12122_12139 = state_12099;
(statearr_12122_12139[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12140 = state_12099;
state_12099 = G__12140;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_12099){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_12099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___12124,tc,fc))
})();
var state__5811__auto__ = (function (){var statearr_12123 = f__5810__auto__.call(null);
(statearr_12123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___12124);

return statearr_12123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___12124,tc,fc))
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
return (function (state_12187){
var state_val_12188 = (state_12187[(1)]);
if((state_val_12188 === (7))){
var inst_12183 = (state_12187[(2)]);
var state_12187__$1 = state_12187;
var statearr_12189_12205 = state_12187__$1;
(statearr_12189_12205[(2)] = inst_12183);

(statearr_12189_12205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (6))){
var inst_12173 = (state_12187[(7)]);
var inst_12176 = (state_12187[(8)]);
var inst_12180 = f.call(null,inst_12173,inst_12176);
var inst_12173__$1 = inst_12180;
var state_12187__$1 = (function (){var statearr_12190 = state_12187;
(statearr_12190[(7)] = inst_12173__$1);

return statearr_12190;
})();
var statearr_12191_12206 = state_12187__$1;
(statearr_12191_12206[(2)] = null);

(statearr_12191_12206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (5))){
var inst_12173 = (state_12187[(7)]);
var state_12187__$1 = state_12187;
var statearr_12192_12207 = state_12187__$1;
(statearr_12192_12207[(2)] = inst_12173);

(statearr_12192_12207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (4))){
var inst_12176 = (state_12187[(8)]);
var inst_12176__$1 = (state_12187[(2)]);
var inst_12177 = (inst_12176__$1 == null);
var state_12187__$1 = (function (){var statearr_12193 = state_12187;
(statearr_12193[(8)] = inst_12176__$1);

return statearr_12193;
})();
if(cljs.core.truth_(inst_12177)){
var statearr_12194_12208 = state_12187__$1;
(statearr_12194_12208[(1)] = (5));

} else {
var statearr_12195_12209 = state_12187__$1;
(statearr_12195_12209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (3))){
var inst_12185 = (state_12187[(2)]);
var state_12187__$1 = state_12187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12187__$1,inst_12185);
} else {
if((state_val_12188 === (2))){
var state_12187__$1 = state_12187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12187__$1,(4),ch);
} else {
if((state_val_12188 === (1))){
var inst_12173 = init;
var state_12187__$1 = (function (){var statearr_12196 = state_12187;
(statearr_12196[(7)] = inst_12173);

return statearr_12196;
})();
var statearr_12197_12210 = state_12187__$1;
(statearr_12197_12210[(2)] = null);

(statearr_12197_12210[(1)] = (2));


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
var statearr_12201 = [null,null,null,null,null,null,null,null,null];
(statearr_12201[(0)] = state_machine__5795__auto__);

(statearr_12201[(1)] = (1));

return statearr_12201;
});
var state_machine__5795__auto____1 = (function (state_12187){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_12187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e12202){if((e12202 instanceof Object)){
var ex__5798__auto__ = e12202;
var statearr_12203_12211 = state_12187;
(statearr_12203_12211[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12212 = state_12187;
state_12187 = G__12212;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_12187){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_12187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_12204 = f__5810__auto__.call(null);
(statearr_12204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_12204;
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
return (function (state_12286){
var state_val_12287 = (state_12286[(1)]);
if((state_val_12287 === (7))){
var inst_12268 = (state_12286[(2)]);
var state_12286__$1 = state_12286;
var statearr_12288_12311 = state_12286__$1;
(statearr_12288_12311[(2)] = inst_12268);

(statearr_12288_12311[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12287 === (1))){
var inst_12262 = cljs.core.seq.call(null,coll);
var inst_12263 = inst_12262;
var state_12286__$1 = (function (){var statearr_12289 = state_12286;
(statearr_12289[(7)] = inst_12263);

return statearr_12289;
})();
var statearr_12290_12312 = state_12286__$1;
(statearr_12290_12312[(2)] = null);

(statearr_12290_12312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12287 === (4))){
var inst_12263 = (state_12286[(7)]);
var inst_12266 = cljs.core.first.call(null,inst_12263);
var state_12286__$1 = state_12286;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12286__$1,(7),ch,inst_12266);
} else {
if((state_val_12287 === (13))){
var inst_12280 = (state_12286[(2)]);
var state_12286__$1 = state_12286;
var statearr_12291_12313 = state_12286__$1;
(statearr_12291_12313[(2)] = inst_12280);

(statearr_12291_12313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12287 === (6))){
var inst_12271 = (state_12286[(2)]);
var state_12286__$1 = state_12286;
if(cljs.core.truth_(inst_12271)){
var statearr_12292_12314 = state_12286__$1;
(statearr_12292_12314[(1)] = (8));

} else {
var statearr_12293_12315 = state_12286__$1;
(statearr_12293_12315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12287 === (3))){
var inst_12284 = (state_12286[(2)]);
var state_12286__$1 = state_12286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12286__$1,inst_12284);
} else {
if((state_val_12287 === (12))){
var state_12286__$1 = state_12286;
var statearr_12294_12316 = state_12286__$1;
(statearr_12294_12316[(2)] = null);

(statearr_12294_12316[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12287 === (2))){
var inst_12263 = (state_12286[(7)]);
var state_12286__$1 = state_12286;
if(cljs.core.truth_(inst_12263)){
var statearr_12295_12317 = state_12286__$1;
(statearr_12295_12317[(1)] = (4));

} else {
var statearr_12296_12318 = state_12286__$1;
(statearr_12296_12318[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12287 === (11))){
var inst_12277 = cljs.core.async.close_BANG_.call(null,ch);
var state_12286__$1 = state_12286;
var statearr_12297_12319 = state_12286__$1;
(statearr_12297_12319[(2)] = inst_12277);

(statearr_12297_12319[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12287 === (9))){
var state_12286__$1 = state_12286;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12298_12320 = state_12286__$1;
(statearr_12298_12320[(1)] = (11));

} else {
var statearr_12299_12321 = state_12286__$1;
(statearr_12299_12321[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12287 === (5))){
var inst_12263 = (state_12286[(7)]);
var state_12286__$1 = state_12286;
var statearr_12300_12322 = state_12286__$1;
(statearr_12300_12322[(2)] = inst_12263);

(statearr_12300_12322[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12287 === (10))){
var inst_12282 = (state_12286[(2)]);
var state_12286__$1 = state_12286;
var statearr_12301_12323 = state_12286__$1;
(statearr_12301_12323[(2)] = inst_12282);

(statearr_12301_12323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12287 === (8))){
var inst_12263 = (state_12286[(7)]);
var inst_12273 = cljs.core.next.call(null,inst_12263);
var inst_12263__$1 = inst_12273;
var state_12286__$1 = (function (){var statearr_12302 = state_12286;
(statearr_12302[(7)] = inst_12263__$1);

return statearr_12302;
})();
var statearr_12303_12324 = state_12286__$1;
(statearr_12303_12324[(2)] = null);

(statearr_12303_12324[(1)] = (2));


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
var statearr_12307 = [null,null,null,null,null,null,null,null];
(statearr_12307[(0)] = state_machine__5795__auto__);

(statearr_12307[(1)] = (1));

return statearr_12307;
});
var state_machine__5795__auto____1 = (function (state_12286){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_12286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e12308){if((e12308 instanceof Object)){
var ex__5798__auto__ = e12308;
var statearr_12309_12325 = state_12286;
(statearr_12309_12325[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12326 = state_12286;
state_12286 = G__12326;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_12286){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_12286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_12310 = f__5810__auto__.call(null);
(statearr_12310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_12310;
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

cljs.core.async.Mux = (function (){var obj12328 = {};
return obj12328;
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


cljs.core.async.Mult = (function (){var obj12330 = {};
return obj12330;
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
if(typeof cljs.core.async.t12552 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12552 = (function (cs,ch,mult,meta12553){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12553 = meta12553;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12552.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t12552.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t12552.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t12552.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t12552.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t12552.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t12552.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12554){
var self__ = this;
var _12554__$1 = this;
return self__.meta12553;
});})(cs))
;

cljs.core.async.t12552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12554,meta12553__$1){
var self__ = this;
var _12554__$1 = this;
return (new cljs.core.async.t12552(self__.cs,self__.ch,self__.mult,meta12553__$1));
});})(cs))
;

cljs.core.async.t12552.cljs$lang$type = true;

cljs.core.async.t12552.cljs$lang$ctorStr = "cljs.core.async/t12552";

cljs.core.async.t12552.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t12552");
});})(cs))
;

cljs.core.async.__GT_t12552 = ((function (cs){
return (function __GT_t12552(cs__$1,ch__$1,mult__$1,meta12553){
return (new cljs.core.async.t12552(cs__$1,ch__$1,mult__$1,meta12553));
});})(cs))
;

}

return (new cljs.core.async.t12552(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
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
var c__5809__auto___12773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___12773,cs,m,dchan,dctr,done){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___12773,cs,m,dchan,dctr,done){
return (function (state_12685){
var state_val_12686 = (state_12685[(1)]);
if((state_val_12686 === (7))){
var inst_12681 = (state_12685[(2)]);
var state_12685__$1 = state_12685;
var statearr_12687_12774 = state_12685__$1;
(statearr_12687_12774[(2)] = inst_12681);

(statearr_12687_12774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (20))){
var inst_12586 = (state_12685[(7)]);
var inst_12596 = cljs.core.first.call(null,inst_12586);
var inst_12597 = cljs.core.nth.call(null,inst_12596,(0),null);
var inst_12598 = cljs.core.nth.call(null,inst_12596,(1),null);
var state_12685__$1 = (function (){var statearr_12688 = state_12685;
(statearr_12688[(8)] = inst_12597);

return statearr_12688;
})();
if(cljs.core.truth_(inst_12598)){
var statearr_12689_12775 = state_12685__$1;
(statearr_12689_12775[(1)] = (22));

} else {
var statearr_12690_12776 = state_12685__$1;
(statearr_12690_12776[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (27))){
var inst_12633 = (state_12685[(9)]);
var inst_12628 = (state_12685[(10)]);
var inst_12557 = (state_12685[(11)]);
var inst_12626 = (state_12685[(12)]);
var inst_12633__$1 = cljs.core._nth.call(null,inst_12626,inst_12628);
var inst_12634 = cljs.core.async.put_BANG_.call(null,inst_12633__$1,inst_12557,done);
var state_12685__$1 = (function (){var statearr_12691 = state_12685;
(statearr_12691[(9)] = inst_12633__$1);

return statearr_12691;
})();
if(cljs.core.truth_(inst_12634)){
var statearr_12692_12777 = state_12685__$1;
(statearr_12692_12777[(1)] = (30));

} else {
var statearr_12693_12778 = state_12685__$1;
(statearr_12693_12778[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (1))){
var state_12685__$1 = state_12685;
var statearr_12694_12779 = state_12685__$1;
(statearr_12694_12779[(2)] = null);

(statearr_12694_12779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (24))){
var inst_12586 = (state_12685[(7)]);
var inst_12603 = (state_12685[(2)]);
var inst_12604 = cljs.core.next.call(null,inst_12586);
var inst_12566 = inst_12604;
var inst_12567 = null;
var inst_12568 = (0);
var inst_12569 = (0);
var state_12685__$1 = (function (){var statearr_12695 = state_12685;
(statearr_12695[(13)] = inst_12566);

(statearr_12695[(14)] = inst_12568);

(statearr_12695[(15)] = inst_12569);

(statearr_12695[(16)] = inst_12567);

(statearr_12695[(17)] = inst_12603);

return statearr_12695;
})();
var statearr_12696_12780 = state_12685__$1;
(statearr_12696_12780[(2)] = null);

(statearr_12696_12780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (39))){
var state_12685__$1 = state_12685;
var statearr_12700_12781 = state_12685__$1;
(statearr_12700_12781[(2)] = null);

(statearr_12700_12781[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (4))){
var inst_12557 = (state_12685[(11)]);
var inst_12557__$1 = (state_12685[(2)]);
var inst_12558 = (inst_12557__$1 == null);
var state_12685__$1 = (function (){var statearr_12701 = state_12685;
(statearr_12701[(11)] = inst_12557__$1);

return statearr_12701;
})();
if(cljs.core.truth_(inst_12558)){
var statearr_12702_12782 = state_12685__$1;
(statearr_12702_12782[(1)] = (5));

} else {
var statearr_12703_12783 = state_12685__$1;
(statearr_12703_12783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (15))){
var inst_12566 = (state_12685[(13)]);
var inst_12568 = (state_12685[(14)]);
var inst_12569 = (state_12685[(15)]);
var inst_12567 = (state_12685[(16)]);
var inst_12582 = (state_12685[(2)]);
var inst_12583 = (inst_12569 + (1));
var tmp12697 = inst_12566;
var tmp12698 = inst_12568;
var tmp12699 = inst_12567;
var inst_12566__$1 = tmp12697;
var inst_12567__$1 = tmp12699;
var inst_12568__$1 = tmp12698;
var inst_12569__$1 = inst_12583;
var state_12685__$1 = (function (){var statearr_12704 = state_12685;
(statearr_12704[(13)] = inst_12566__$1);

(statearr_12704[(18)] = inst_12582);

(statearr_12704[(14)] = inst_12568__$1);

(statearr_12704[(15)] = inst_12569__$1);

(statearr_12704[(16)] = inst_12567__$1);

return statearr_12704;
})();
var statearr_12705_12784 = state_12685__$1;
(statearr_12705_12784[(2)] = null);

(statearr_12705_12784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (21))){
var inst_12607 = (state_12685[(2)]);
var state_12685__$1 = state_12685;
var statearr_12709_12785 = state_12685__$1;
(statearr_12709_12785[(2)] = inst_12607);

(statearr_12709_12785[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (31))){
var inst_12633 = (state_12685[(9)]);
var inst_12637 = done.call(null,null);
var inst_12638 = cljs.core.async.untap_STAR_.call(null,m,inst_12633);
var state_12685__$1 = (function (){var statearr_12710 = state_12685;
(statearr_12710[(19)] = inst_12637);

return statearr_12710;
})();
var statearr_12711_12786 = state_12685__$1;
(statearr_12711_12786[(2)] = inst_12638);

(statearr_12711_12786[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (32))){
var inst_12627 = (state_12685[(20)]);
var inst_12628 = (state_12685[(10)]);
var inst_12625 = (state_12685[(21)]);
var inst_12626 = (state_12685[(12)]);
var inst_12640 = (state_12685[(2)]);
var inst_12641 = (inst_12628 + (1));
var tmp12706 = inst_12627;
var tmp12707 = inst_12625;
var tmp12708 = inst_12626;
var inst_12625__$1 = tmp12707;
var inst_12626__$1 = tmp12708;
var inst_12627__$1 = tmp12706;
var inst_12628__$1 = inst_12641;
var state_12685__$1 = (function (){var statearr_12712 = state_12685;
(statearr_12712[(20)] = inst_12627__$1);

(statearr_12712[(10)] = inst_12628__$1);

(statearr_12712[(21)] = inst_12625__$1);

(statearr_12712[(12)] = inst_12626__$1);

(statearr_12712[(22)] = inst_12640);

return statearr_12712;
})();
var statearr_12713_12787 = state_12685__$1;
(statearr_12713_12787[(2)] = null);

(statearr_12713_12787[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (40))){
var inst_12653 = (state_12685[(23)]);
var inst_12657 = done.call(null,null);
var inst_12658 = cljs.core.async.untap_STAR_.call(null,m,inst_12653);
var state_12685__$1 = (function (){var statearr_12714 = state_12685;
(statearr_12714[(24)] = inst_12657);

return statearr_12714;
})();
var statearr_12715_12788 = state_12685__$1;
(statearr_12715_12788[(2)] = inst_12658);

(statearr_12715_12788[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (33))){
var inst_12644 = (state_12685[(25)]);
var inst_12646 = cljs.core.chunked_seq_QMARK_.call(null,inst_12644);
var state_12685__$1 = state_12685;
if(inst_12646){
var statearr_12716_12789 = state_12685__$1;
(statearr_12716_12789[(1)] = (36));

} else {
var statearr_12717_12790 = state_12685__$1;
(statearr_12717_12790[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (13))){
var inst_12576 = (state_12685[(26)]);
var inst_12579 = cljs.core.async.close_BANG_.call(null,inst_12576);
var state_12685__$1 = state_12685;
var statearr_12718_12791 = state_12685__$1;
(statearr_12718_12791[(2)] = inst_12579);

(statearr_12718_12791[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (22))){
var inst_12597 = (state_12685[(8)]);
var inst_12600 = cljs.core.async.close_BANG_.call(null,inst_12597);
var state_12685__$1 = state_12685;
var statearr_12719_12792 = state_12685__$1;
(statearr_12719_12792[(2)] = inst_12600);

(statearr_12719_12792[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (36))){
var inst_12644 = (state_12685[(25)]);
var inst_12648 = cljs.core.chunk_first.call(null,inst_12644);
var inst_12649 = cljs.core.chunk_rest.call(null,inst_12644);
var inst_12650 = cljs.core.count.call(null,inst_12648);
var inst_12625 = inst_12649;
var inst_12626 = inst_12648;
var inst_12627 = inst_12650;
var inst_12628 = (0);
var state_12685__$1 = (function (){var statearr_12720 = state_12685;
(statearr_12720[(20)] = inst_12627);

(statearr_12720[(10)] = inst_12628);

(statearr_12720[(21)] = inst_12625);

(statearr_12720[(12)] = inst_12626);

return statearr_12720;
})();
var statearr_12721_12793 = state_12685__$1;
(statearr_12721_12793[(2)] = null);

(statearr_12721_12793[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (41))){
var inst_12644 = (state_12685[(25)]);
var inst_12660 = (state_12685[(2)]);
var inst_12661 = cljs.core.next.call(null,inst_12644);
var inst_12625 = inst_12661;
var inst_12626 = null;
var inst_12627 = (0);
var inst_12628 = (0);
var state_12685__$1 = (function (){var statearr_12722 = state_12685;
(statearr_12722[(27)] = inst_12660);

(statearr_12722[(20)] = inst_12627);

(statearr_12722[(10)] = inst_12628);

(statearr_12722[(21)] = inst_12625);

(statearr_12722[(12)] = inst_12626);

return statearr_12722;
})();
var statearr_12723_12794 = state_12685__$1;
(statearr_12723_12794[(2)] = null);

(statearr_12723_12794[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (43))){
var state_12685__$1 = state_12685;
var statearr_12724_12795 = state_12685__$1;
(statearr_12724_12795[(2)] = null);

(statearr_12724_12795[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (29))){
var inst_12669 = (state_12685[(2)]);
var state_12685__$1 = state_12685;
var statearr_12725_12796 = state_12685__$1;
(statearr_12725_12796[(2)] = inst_12669);

(statearr_12725_12796[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (44))){
var inst_12678 = (state_12685[(2)]);
var state_12685__$1 = (function (){var statearr_12726 = state_12685;
(statearr_12726[(28)] = inst_12678);

return statearr_12726;
})();
var statearr_12727_12797 = state_12685__$1;
(statearr_12727_12797[(2)] = null);

(statearr_12727_12797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (6))){
var inst_12617 = (state_12685[(29)]);
var inst_12616 = cljs.core.deref.call(null,cs);
var inst_12617__$1 = cljs.core.keys.call(null,inst_12616);
var inst_12618 = cljs.core.count.call(null,inst_12617__$1);
var inst_12619 = cljs.core.reset_BANG_.call(null,dctr,inst_12618);
var inst_12624 = cljs.core.seq.call(null,inst_12617__$1);
var inst_12625 = inst_12624;
var inst_12626 = null;
var inst_12627 = (0);
var inst_12628 = (0);
var state_12685__$1 = (function (){var statearr_12728 = state_12685;
(statearr_12728[(30)] = inst_12619);

(statearr_12728[(29)] = inst_12617__$1);

(statearr_12728[(20)] = inst_12627);

(statearr_12728[(10)] = inst_12628);

(statearr_12728[(21)] = inst_12625);

(statearr_12728[(12)] = inst_12626);

return statearr_12728;
})();
var statearr_12729_12798 = state_12685__$1;
(statearr_12729_12798[(2)] = null);

(statearr_12729_12798[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (28))){
var inst_12644 = (state_12685[(25)]);
var inst_12625 = (state_12685[(21)]);
var inst_12644__$1 = cljs.core.seq.call(null,inst_12625);
var state_12685__$1 = (function (){var statearr_12730 = state_12685;
(statearr_12730[(25)] = inst_12644__$1);

return statearr_12730;
})();
if(inst_12644__$1){
var statearr_12731_12799 = state_12685__$1;
(statearr_12731_12799[(1)] = (33));

} else {
var statearr_12732_12800 = state_12685__$1;
(statearr_12732_12800[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (25))){
var inst_12627 = (state_12685[(20)]);
var inst_12628 = (state_12685[(10)]);
var inst_12630 = (inst_12628 < inst_12627);
var inst_12631 = inst_12630;
var state_12685__$1 = state_12685;
if(cljs.core.truth_(inst_12631)){
var statearr_12733_12801 = state_12685__$1;
(statearr_12733_12801[(1)] = (27));

} else {
var statearr_12734_12802 = state_12685__$1;
(statearr_12734_12802[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (34))){
var state_12685__$1 = state_12685;
var statearr_12735_12803 = state_12685__$1;
(statearr_12735_12803[(2)] = null);

(statearr_12735_12803[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (17))){
var state_12685__$1 = state_12685;
var statearr_12736_12804 = state_12685__$1;
(statearr_12736_12804[(2)] = null);

(statearr_12736_12804[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (3))){
var inst_12683 = (state_12685[(2)]);
var state_12685__$1 = state_12685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12685__$1,inst_12683);
} else {
if((state_val_12686 === (12))){
var inst_12612 = (state_12685[(2)]);
var state_12685__$1 = state_12685;
var statearr_12737_12805 = state_12685__$1;
(statearr_12737_12805[(2)] = inst_12612);

(statearr_12737_12805[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (2))){
var state_12685__$1 = state_12685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12685__$1,(4),ch);
} else {
if((state_val_12686 === (23))){
var state_12685__$1 = state_12685;
var statearr_12738_12806 = state_12685__$1;
(statearr_12738_12806[(2)] = null);

(statearr_12738_12806[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (35))){
var inst_12667 = (state_12685[(2)]);
var state_12685__$1 = state_12685;
var statearr_12739_12807 = state_12685__$1;
(statearr_12739_12807[(2)] = inst_12667);

(statearr_12739_12807[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (19))){
var inst_12586 = (state_12685[(7)]);
var inst_12590 = cljs.core.chunk_first.call(null,inst_12586);
var inst_12591 = cljs.core.chunk_rest.call(null,inst_12586);
var inst_12592 = cljs.core.count.call(null,inst_12590);
var inst_12566 = inst_12591;
var inst_12567 = inst_12590;
var inst_12568 = inst_12592;
var inst_12569 = (0);
var state_12685__$1 = (function (){var statearr_12740 = state_12685;
(statearr_12740[(13)] = inst_12566);

(statearr_12740[(14)] = inst_12568);

(statearr_12740[(15)] = inst_12569);

(statearr_12740[(16)] = inst_12567);

return statearr_12740;
})();
var statearr_12741_12808 = state_12685__$1;
(statearr_12741_12808[(2)] = null);

(statearr_12741_12808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (11))){
var inst_12566 = (state_12685[(13)]);
var inst_12586 = (state_12685[(7)]);
var inst_12586__$1 = cljs.core.seq.call(null,inst_12566);
var state_12685__$1 = (function (){var statearr_12742 = state_12685;
(statearr_12742[(7)] = inst_12586__$1);

return statearr_12742;
})();
if(inst_12586__$1){
var statearr_12743_12809 = state_12685__$1;
(statearr_12743_12809[(1)] = (16));

} else {
var statearr_12744_12810 = state_12685__$1;
(statearr_12744_12810[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (9))){
var inst_12614 = (state_12685[(2)]);
var state_12685__$1 = state_12685;
var statearr_12745_12811 = state_12685__$1;
(statearr_12745_12811[(2)] = inst_12614);

(statearr_12745_12811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (5))){
var inst_12564 = cljs.core.deref.call(null,cs);
var inst_12565 = cljs.core.seq.call(null,inst_12564);
var inst_12566 = inst_12565;
var inst_12567 = null;
var inst_12568 = (0);
var inst_12569 = (0);
var state_12685__$1 = (function (){var statearr_12746 = state_12685;
(statearr_12746[(13)] = inst_12566);

(statearr_12746[(14)] = inst_12568);

(statearr_12746[(15)] = inst_12569);

(statearr_12746[(16)] = inst_12567);

return statearr_12746;
})();
var statearr_12747_12812 = state_12685__$1;
(statearr_12747_12812[(2)] = null);

(statearr_12747_12812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (14))){
var state_12685__$1 = state_12685;
var statearr_12748_12813 = state_12685__$1;
(statearr_12748_12813[(2)] = null);

(statearr_12748_12813[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (45))){
var inst_12675 = (state_12685[(2)]);
var state_12685__$1 = state_12685;
var statearr_12749_12814 = state_12685__$1;
(statearr_12749_12814[(2)] = inst_12675);

(statearr_12749_12814[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (26))){
var inst_12617 = (state_12685[(29)]);
var inst_12671 = (state_12685[(2)]);
var inst_12672 = cljs.core.seq.call(null,inst_12617);
var state_12685__$1 = (function (){var statearr_12750 = state_12685;
(statearr_12750[(31)] = inst_12671);

return statearr_12750;
})();
if(inst_12672){
var statearr_12751_12815 = state_12685__$1;
(statearr_12751_12815[(1)] = (42));

} else {
var statearr_12752_12816 = state_12685__$1;
(statearr_12752_12816[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (16))){
var inst_12586 = (state_12685[(7)]);
var inst_12588 = cljs.core.chunked_seq_QMARK_.call(null,inst_12586);
var state_12685__$1 = state_12685;
if(inst_12588){
var statearr_12753_12817 = state_12685__$1;
(statearr_12753_12817[(1)] = (19));

} else {
var statearr_12754_12818 = state_12685__$1;
(statearr_12754_12818[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (38))){
var inst_12664 = (state_12685[(2)]);
var state_12685__$1 = state_12685;
var statearr_12755_12819 = state_12685__$1;
(statearr_12755_12819[(2)] = inst_12664);

(statearr_12755_12819[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (30))){
var state_12685__$1 = state_12685;
var statearr_12756_12820 = state_12685__$1;
(statearr_12756_12820[(2)] = null);

(statearr_12756_12820[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (10))){
var inst_12569 = (state_12685[(15)]);
var inst_12567 = (state_12685[(16)]);
var inst_12575 = cljs.core._nth.call(null,inst_12567,inst_12569);
var inst_12576 = cljs.core.nth.call(null,inst_12575,(0),null);
var inst_12577 = cljs.core.nth.call(null,inst_12575,(1),null);
var state_12685__$1 = (function (){var statearr_12757 = state_12685;
(statearr_12757[(26)] = inst_12576);

return statearr_12757;
})();
if(cljs.core.truth_(inst_12577)){
var statearr_12758_12821 = state_12685__$1;
(statearr_12758_12821[(1)] = (13));

} else {
var statearr_12759_12822 = state_12685__$1;
(statearr_12759_12822[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (18))){
var inst_12610 = (state_12685[(2)]);
var state_12685__$1 = state_12685;
var statearr_12760_12823 = state_12685__$1;
(statearr_12760_12823[(2)] = inst_12610);

(statearr_12760_12823[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (42))){
var state_12685__$1 = state_12685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12685__$1,(45),dchan);
} else {
if((state_val_12686 === (37))){
var inst_12644 = (state_12685[(25)]);
var inst_12557 = (state_12685[(11)]);
var inst_12653 = (state_12685[(23)]);
var inst_12653__$1 = cljs.core.first.call(null,inst_12644);
var inst_12654 = cljs.core.async.put_BANG_.call(null,inst_12653__$1,inst_12557,done);
var state_12685__$1 = (function (){var statearr_12761 = state_12685;
(statearr_12761[(23)] = inst_12653__$1);

return statearr_12761;
})();
if(cljs.core.truth_(inst_12654)){
var statearr_12762_12824 = state_12685__$1;
(statearr_12762_12824[(1)] = (39));

} else {
var statearr_12763_12825 = state_12685__$1;
(statearr_12763_12825[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12686 === (8))){
var inst_12568 = (state_12685[(14)]);
var inst_12569 = (state_12685[(15)]);
var inst_12571 = (inst_12569 < inst_12568);
var inst_12572 = inst_12571;
var state_12685__$1 = state_12685;
if(cljs.core.truth_(inst_12572)){
var statearr_12764_12826 = state_12685__$1;
(statearr_12764_12826[(1)] = (10));

} else {
var statearr_12765_12827 = state_12685__$1;
(statearr_12765_12827[(1)] = (11));

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
});})(c__5809__auto___12773,cs,m,dchan,dctr,done))
;
return ((function (switch__5794__auto__,c__5809__auto___12773,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_12769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12769[(0)] = state_machine__5795__auto__);

(statearr_12769[(1)] = (1));

return statearr_12769;
});
var state_machine__5795__auto____1 = (function (state_12685){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_12685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e12770){if((e12770 instanceof Object)){
var ex__5798__auto__ = e12770;
var statearr_12771_12828 = state_12685;
(statearr_12771_12828[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12829 = state_12685;
state_12685 = G__12829;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_12685){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_12685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___12773,cs,m,dchan,dctr,done))
})();
var state__5811__auto__ = (function (){var statearr_12772 = f__5810__auto__.call(null);
(statearr_12772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___12773);

return statearr_12772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___12773,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj12831 = {};
return obj12831;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__12832){
var map__12837 = p__12832;
var map__12837__$1 = ((cljs.core.seq_QMARK_.call(null,map__12837))?cljs.core.apply.call(null,cljs.core.hash_map,map__12837):map__12837);
var opts = map__12837__$1;
var statearr_12838_12841 = state;
(statearr_12838_12841[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__12837,map__12837__$1,opts){
return (function (val){
var statearr_12839_12842 = state;
(statearr_12839_12842[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__12837,map__12837__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_12840_12843 = state;
(statearr_12840_12843[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__12832 = null;
if (arguments.length > 3) {
  p__12832 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__12832);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__12844){
var state = cljs.core.first(arglist__12844);
arglist__12844 = cljs.core.next(arglist__12844);
var cont_block = cljs.core.first(arglist__12844);
arglist__12844 = cljs.core.next(arglist__12844);
var ports = cljs.core.first(arglist__12844);
var p__12832 = cljs.core.rest(arglist__12844);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__12832);
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
if(typeof cljs.core.async.t12964 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12964 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12965){
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
this.meta12965 = meta12965;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12964.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t12964.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12964.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12964.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12964.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12964.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t12964.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t12964.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12964.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12966){
var self__ = this;
var _12966__$1 = this;
return self__.meta12965;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12966,meta12965__$1){
var self__ = this;
var _12966__$1 = this;
return (new cljs.core.async.t12964(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12965__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12964.cljs$lang$type = true;

cljs.core.async.t12964.cljs$lang$ctorStr = "cljs.core.async/t12964";

cljs.core.async.t12964.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t12964");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t12964 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12964(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12965){
return (new cljs.core.async.t12964(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12965));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t12964(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
})()
;
var c__5809__auto___13083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___13083,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___13083,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13036){
var state_val_13037 = (state_13036[(1)]);
if((state_val_13037 === (7))){
var inst_12980 = (state_13036[(7)]);
var inst_12985 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12980);
var state_13036__$1 = state_13036;
var statearr_13038_13084 = state_13036__$1;
(statearr_13038_13084[(2)] = inst_12985);

(statearr_13038_13084[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13037 === (20))){
var inst_12995 = (state_13036[(8)]);
var state_13036__$1 = state_13036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13036__$1,(23),out,inst_12995);
} else {
if((state_val_13037 === (1))){
var inst_12970 = (state_13036[(9)]);
var inst_12970__$1 = calc_state.call(null);
var inst_12971 = cljs.core.seq_QMARK_.call(null,inst_12970__$1);
var state_13036__$1 = (function (){var statearr_13039 = state_13036;
(statearr_13039[(9)] = inst_12970__$1);

return statearr_13039;
})();
if(inst_12971){
var statearr_13040_13085 = state_13036__$1;
(statearr_13040_13085[(1)] = (2));

} else {
var statearr_13041_13086 = state_13036__$1;
(statearr_13041_13086[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13037 === (24))){
var inst_12988 = (state_13036[(10)]);
var inst_12980 = inst_12988;
var state_13036__$1 = (function (){var statearr_13042 = state_13036;
(statearr_13042[(7)] = inst_12980);

return statearr_13042;
})();
var statearr_13043_13087 = state_13036__$1;
(statearr_13043_13087[(2)] = null);

(statearr_13043_13087[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13037 === (4))){
var inst_12970 = (state_13036[(9)]);
var inst_12976 = (state_13036[(2)]);
var inst_12977 = cljs.core.get.call(null,inst_12976,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12978 = cljs.core.get.call(null,inst_12976,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12979 = cljs.core.get.call(null,inst_12976,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12980 = inst_12970;
var state_13036__$1 = (function (){var statearr_13044 = state_13036;
(statearr_13044[(11)] = inst_12979);

(statearr_13044[(7)] = inst_12980);

(statearr_13044[(12)] = inst_12977);

(statearr_13044[(13)] = inst_12978);

return statearr_13044;
})();
var statearr_13045_13088 = state_13036__$1;
(statearr_13045_13088[(2)] = null);

(statearr_13045_13088[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13037 === (15))){
var state_13036__$1 = state_13036;
var statearr_13046_13089 = state_13036__$1;
(statearr_13046_13089[(2)] = null);

(statearr_13046_13089[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13037 === (21))){
var inst_12988 = (state_13036[(10)]);
var inst_12980 = inst_12988;
var state_13036__$1 = (function (){var statearr_13047 = state_13036;
(statearr_13047[(7)] = inst_12980);

return statearr_13047;
})();
var statearr_13048_13090 = state_13036__$1;
(statearr_13048_13090[(2)] = null);

(statearr_13048_13090[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13037 === (13))){
var inst_13032 = (state_13036[(2)]);
var state_13036__$1 = state_13036;
var statearr_13049_13091 = state_13036__$1;
(statearr_13049_13091[(2)] = inst_13032);

(statearr_13049_13091[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13037 === (22))){
var inst_13030 = (state_13036[(2)]);
var state_13036__$1 = state_13036;
var statearr_13050_13092 = state_13036__$1;
(statearr_13050_13092[(2)] = inst_13030);

(statearr_13050_13092[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13037 === (6))){
var inst_13034 = (state_13036[(2)]);
var state_13036__$1 = state_13036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13036__$1,inst_13034);
} else {
if((state_val_13037 === (25))){
var state_13036__$1 = state_13036;
var statearr_13051_13093 = state_13036__$1;
(statearr_13051_13093[(2)] = null);

(statearr_13051_13093[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13037 === (17))){
var inst_13010 = (state_13036[(14)]);
var state_13036__$1 = state_13036;
var statearr_13052_13094 = state_13036__$1;
(statearr_13052_13094[(2)] = inst_13010);

(statearr_13052_13094[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13037 === (3))){
var inst_12970 = (state_13036[(9)]);
var state_13036__$1 = state_13036;
var statearr_13053_13095 = state_13036__$1;
(statearr_13053_13095[(2)] = inst_12970);

(statearr_13053_13095[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13037 === (12))){
var inst_12991 = (state_13036[(15)]);
var inst_13010 = (state_13036[(14)]);
var inst_12996 = (state_13036[(16)]);
var inst_13010__$1 = inst_12991.call(null,inst_12996);
var state_13036__$1 = (function (){var statearr_13054 = state_13036;
(statearr_13054[(14)] = inst_13010__$1);

return statearr_13054;
})();
if(cljs.core.truth_(inst_13010__$1)){
var statearr_13055_13096 = state_13036__$1;
(statearr_13055_13096[(1)] = (17));

} else {
var statearr_13056_13097 = state_13036__$1;
(statearr_13056_13097[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13037 === (2))){
var inst_12970 = (state_13036[(9)]);
var inst_12973 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12970);
var state_13036__$1 = state_13036;
var statearr_13057_13098 = state_13036__$1;
(statearr_13057_13098[(2)] = inst_12973);

(statearr_13057_13098[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13037 === (23))){
var inst_13021 = (state_13036[(2)]);
var state_13036__$1 = state_13036;
if(cljs.core.truth_(inst_13021)){
var statearr_13058_13099 = state_13036__$1;
(statearr_13058_13099[(1)] = (24));

} else {
var statearr_13059_13100 = state_13036__$1;
(statearr_13059_13100[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13037 === (19))){
var inst_13018 = (state_13036[(2)]);
var state_13036__$1 = state_13036;
if(cljs.core.truth_(inst_13018)){
var statearr_13060_13101 = state_13036__$1;
(statearr_13060_13101[(1)] = (20));

} else {
var statearr_13061_13102 = state_13036__$1;
(statearr_13061_13102[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13037 === (11))){
var inst_12995 = (state_13036[(8)]);
var inst_13001 = (inst_12995 == null);
var state_13036__$1 = state_13036;
if(cljs.core.truth_(inst_13001)){
var statearr_13062_13103 = state_13036__$1;
(statearr_13062_13103[(1)] = (14));

} else {
var statearr_13063_13104 = state_13036__$1;
(statearr_13063_13104[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13037 === (9))){
var inst_12988 = (state_13036[(10)]);
var inst_12988__$1 = (state_13036[(2)]);
var inst_12989 = cljs.core.get.call(null,inst_12988__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12990 = cljs.core.get.call(null,inst_12988__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12991 = cljs.core.get.call(null,inst_12988__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_13036__$1 = (function (){var statearr_13064 = state_13036;
(statearr_13064[(10)] = inst_12988__$1);

(statearr_13064[(15)] = inst_12991);

(statearr_13064[(17)] = inst_12990);

return statearr_13064;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_13036__$1,(10),inst_12989);
} else {
if((state_val_13037 === (5))){
var inst_12980 = (state_13036[(7)]);
var inst_12983 = cljs.core.seq_QMARK_.call(null,inst_12980);
var state_13036__$1 = state_13036;
if(inst_12983){
var statearr_13065_13105 = state_13036__$1;
(statearr_13065_13105[(1)] = (7));

} else {
var statearr_13066_13106 = state_13036__$1;
(statearr_13066_13106[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13037 === (14))){
var inst_12996 = (state_13036[(16)]);
var inst_13003 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12996);
var state_13036__$1 = state_13036;
var statearr_13067_13107 = state_13036__$1;
(statearr_13067_13107[(2)] = inst_13003);

(statearr_13067_13107[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13037 === (26))){
var inst_13026 = (state_13036[(2)]);
var state_13036__$1 = state_13036;
var statearr_13068_13108 = state_13036__$1;
(statearr_13068_13108[(2)] = inst_13026);

(statearr_13068_13108[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13037 === (16))){
var inst_13006 = (state_13036[(2)]);
var inst_13007 = calc_state.call(null);
var inst_12980 = inst_13007;
var state_13036__$1 = (function (){var statearr_13069 = state_13036;
(statearr_13069[(7)] = inst_12980);

(statearr_13069[(18)] = inst_13006);

return statearr_13069;
})();
var statearr_13070_13109 = state_13036__$1;
(statearr_13070_13109[(2)] = null);

(statearr_13070_13109[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13037 === (10))){
var inst_12995 = (state_13036[(8)]);
var inst_12996 = (state_13036[(16)]);
var inst_12994 = (state_13036[(2)]);
var inst_12995__$1 = cljs.core.nth.call(null,inst_12994,(0),null);
var inst_12996__$1 = cljs.core.nth.call(null,inst_12994,(1),null);
var inst_12997 = (inst_12995__$1 == null);
var inst_12998 = cljs.core._EQ_.call(null,inst_12996__$1,change);
var inst_12999 = (inst_12997) || (inst_12998);
var state_13036__$1 = (function (){var statearr_13071 = state_13036;
(statearr_13071[(8)] = inst_12995__$1);

(statearr_13071[(16)] = inst_12996__$1);

return statearr_13071;
})();
if(cljs.core.truth_(inst_12999)){
var statearr_13072_13110 = state_13036__$1;
(statearr_13072_13110[(1)] = (11));

} else {
var statearr_13073_13111 = state_13036__$1;
(statearr_13073_13111[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13037 === (18))){
var inst_12991 = (state_13036[(15)]);
var inst_12990 = (state_13036[(17)]);
var inst_12996 = (state_13036[(16)]);
var inst_13013 = cljs.core.empty_QMARK_.call(null,inst_12991);
var inst_13014 = inst_12990.call(null,inst_12996);
var inst_13015 = cljs.core.not.call(null,inst_13014);
var inst_13016 = (inst_13013) && (inst_13015);
var state_13036__$1 = state_13036;
var statearr_13074_13112 = state_13036__$1;
(statearr_13074_13112[(2)] = inst_13016);

(statearr_13074_13112[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13037 === (8))){
var inst_12980 = (state_13036[(7)]);
var state_13036__$1 = state_13036;
var statearr_13075_13113 = state_13036__$1;
(statearr_13075_13113[(2)] = inst_12980);

(statearr_13075_13113[(1)] = (9));


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
});})(c__5809__auto___13083,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__5794__auto__,c__5809__auto___13083,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_13079 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13079[(0)] = state_machine__5795__auto__);

(statearr_13079[(1)] = (1));

return statearr_13079;
});
var state_machine__5795__auto____1 = (function (state_13036){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_13036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e13080){if((e13080 instanceof Object)){
var ex__5798__auto__ = e13080;
var statearr_13081_13114 = state_13036;
(statearr_13081_13114[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13115 = state_13036;
state_13036 = G__13115;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_13036){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_13036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___13083,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__5811__auto__ = (function (){var statearr_13082 = f__5810__auto__.call(null);
(statearr_13082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___13083);

return statearr_13082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___13083,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj13117 = {};
return obj13117;
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
return (function (p1__13118_SHARP_){
if(cljs.core.truth_(p1__13118_SHARP_.call(null,topic))){
return p1__13118_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__13118_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3608__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t13241 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13241 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13242){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13242 = meta13242;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13241.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t13241.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t13241.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t13241.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t13241.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t13241.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t13241.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t13241.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13243){
var self__ = this;
var _13243__$1 = this;
return self__.meta13242;
});})(mults,ensure_mult))
;

cljs.core.async.t13241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13243,meta13242__$1){
var self__ = this;
var _13243__$1 = this;
return (new cljs.core.async.t13241(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13242__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t13241.cljs$lang$type = true;

cljs.core.async.t13241.cljs$lang$ctorStr = "cljs.core.async/t13241";

cljs.core.async.t13241.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t13241");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t13241 = ((function (mults,ensure_mult){
return (function __GT_t13241(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13242){
return (new cljs.core.async.t13241(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13242));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t13241(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
})()
;
var c__5809__auto___13363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___13363,mults,ensure_mult,p){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___13363,mults,ensure_mult,p){
return (function (state_13315){
var state_val_13316 = (state_13315[(1)]);
if((state_val_13316 === (7))){
var inst_13311 = (state_13315[(2)]);
var state_13315__$1 = state_13315;
var statearr_13317_13364 = state_13315__$1;
(statearr_13317_13364[(2)] = inst_13311);

(statearr_13317_13364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (20))){
var state_13315__$1 = state_13315;
var statearr_13318_13365 = state_13315__$1;
(statearr_13318_13365[(2)] = null);

(statearr_13318_13365[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (1))){
var state_13315__$1 = state_13315;
var statearr_13319_13366 = state_13315__$1;
(statearr_13319_13366[(2)] = null);

(statearr_13319_13366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (24))){
var inst_13294 = (state_13315[(7)]);
var inst_13303 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13294);
var state_13315__$1 = state_13315;
var statearr_13320_13367 = state_13315__$1;
(statearr_13320_13367[(2)] = inst_13303);

(statearr_13320_13367[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (4))){
var inst_13246 = (state_13315[(8)]);
var inst_13246__$1 = (state_13315[(2)]);
var inst_13247 = (inst_13246__$1 == null);
var state_13315__$1 = (function (){var statearr_13321 = state_13315;
(statearr_13321[(8)] = inst_13246__$1);

return statearr_13321;
})();
if(cljs.core.truth_(inst_13247)){
var statearr_13322_13368 = state_13315__$1;
(statearr_13322_13368[(1)] = (5));

} else {
var statearr_13323_13369 = state_13315__$1;
(statearr_13323_13369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (15))){
var inst_13288 = (state_13315[(2)]);
var state_13315__$1 = state_13315;
var statearr_13324_13370 = state_13315__$1;
(statearr_13324_13370[(2)] = inst_13288);

(statearr_13324_13370[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (21))){
var inst_13308 = (state_13315[(2)]);
var state_13315__$1 = (function (){var statearr_13325 = state_13315;
(statearr_13325[(9)] = inst_13308);

return statearr_13325;
})();
var statearr_13326_13371 = state_13315__$1;
(statearr_13326_13371[(2)] = null);

(statearr_13326_13371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (13))){
var inst_13270 = (state_13315[(10)]);
var inst_13272 = cljs.core.chunked_seq_QMARK_.call(null,inst_13270);
var state_13315__$1 = state_13315;
if(inst_13272){
var statearr_13327_13372 = state_13315__$1;
(statearr_13327_13372[(1)] = (16));

} else {
var statearr_13328_13373 = state_13315__$1;
(statearr_13328_13373[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (22))){
var inst_13300 = (state_13315[(2)]);
var state_13315__$1 = state_13315;
if(cljs.core.truth_(inst_13300)){
var statearr_13329_13374 = state_13315__$1;
(statearr_13329_13374[(1)] = (23));

} else {
var statearr_13330_13375 = state_13315__$1;
(statearr_13330_13375[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (6))){
var inst_13246 = (state_13315[(8)]);
var inst_13296 = (state_13315[(11)]);
var inst_13294 = (state_13315[(7)]);
var inst_13294__$1 = topic_fn.call(null,inst_13246);
var inst_13295 = cljs.core.deref.call(null,mults);
var inst_13296__$1 = cljs.core.get.call(null,inst_13295,inst_13294__$1);
var state_13315__$1 = (function (){var statearr_13331 = state_13315;
(statearr_13331[(11)] = inst_13296__$1);

(statearr_13331[(7)] = inst_13294__$1);

return statearr_13331;
})();
if(cljs.core.truth_(inst_13296__$1)){
var statearr_13332_13376 = state_13315__$1;
(statearr_13332_13376[(1)] = (19));

} else {
var statearr_13333_13377 = state_13315__$1;
(statearr_13333_13377[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (25))){
var inst_13305 = (state_13315[(2)]);
var state_13315__$1 = state_13315;
var statearr_13334_13378 = state_13315__$1;
(statearr_13334_13378[(2)] = inst_13305);

(statearr_13334_13378[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (17))){
var inst_13270 = (state_13315[(10)]);
var inst_13279 = cljs.core.first.call(null,inst_13270);
var inst_13280 = cljs.core.async.muxch_STAR_.call(null,inst_13279);
var inst_13281 = cljs.core.async.close_BANG_.call(null,inst_13280);
var inst_13282 = cljs.core.next.call(null,inst_13270);
var inst_13256 = inst_13282;
var inst_13257 = null;
var inst_13258 = (0);
var inst_13259 = (0);
var state_13315__$1 = (function (){var statearr_13335 = state_13315;
(statearr_13335[(12)] = inst_13256);

(statearr_13335[(13)] = inst_13259);

(statearr_13335[(14)] = inst_13257);

(statearr_13335[(15)] = inst_13281);

(statearr_13335[(16)] = inst_13258);

return statearr_13335;
})();
var statearr_13336_13379 = state_13315__$1;
(statearr_13336_13379[(2)] = null);

(statearr_13336_13379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (3))){
var inst_13313 = (state_13315[(2)]);
var state_13315__$1 = state_13315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13315__$1,inst_13313);
} else {
if((state_val_13316 === (12))){
var inst_13290 = (state_13315[(2)]);
var state_13315__$1 = state_13315;
var statearr_13337_13380 = state_13315__$1;
(statearr_13337_13380[(2)] = inst_13290);

(statearr_13337_13380[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (2))){
var state_13315__$1 = state_13315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13315__$1,(4),ch);
} else {
if((state_val_13316 === (23))){
var state_13315__$1 = state_13315;
var statearr_13338_13381 = state_13315__$1;
(statearr_13338_13381[(2)] = null);

(statearr_13338_13381[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (19))){
var inst_13246 = (state_13315[(8)]);
var inst_13296 = (state_13315[(11)]);
var inst_13298 = cljs.core.async.muxch_STAR_.call(null,inst_13296);
var state_13315__$1 = state_13315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13315__$1,(22),inst_13298,inst_13246);
} else {
if((state_val_13316 === (11))){
var inst_13256 = (state_13315[(12)]);
var inst_13270 = (state_13315[(10)]);
var inst_13270__$1 = cljs.core.seq.call(null,inst_13256);
var state_13315__$1 = (function (){var statearr_13339 = state_13315;
(statearr_13339[(10)] = inst_13270__$1);

return statearr_13339;
})();
if(inst_13270__$1){
var statearr_13340_13382 = state_13315__$1;
(statearr_13340_13382[(1)] = (13));

} else {
var statearr_13341_13383 = state_13315__$1;
(statearr_13341_13383[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (9))){
var inst_13292 = (state_13315[(2)]);
var state_13315__$1 = state_13315;
var statearr_13342_13384 = state_13315__$1;
(statearr_13342_13384[(2)] = inst_13292);

(statearr_13342_13384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (5))){
var inst_13253 = cljs.core.deref.call(null,mults);
var inst_13254 = cljs.core.vals.call(null,inst_13253);
var inst_13255 = cljs.core.seq.call(null,inst_13254);
var inst_13256 = inst_13255;
var inst_13257 = null;
var inst_13258 = (0);
var inst_13259 = (0);
var state_13315__$1 = (function (){var statearr_13343 = state_13315;
(statearr_13343[(12)] = inst_13256);

(statearr_13343[(13)] = inst_13259);

(statearr_13343[(14)] = inst_13257);

(statearr_13343[(16)] = inst_13258);

return statearr_13343;
})();
var statearr_13344_13385 = state_13315__$1;
(statearr_13344_13385[(2)] = null);

(statearr_13344_13385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (14))){
var state_13315__$1 = state_13315;
var statearr_13348_13386 = state_13315__$1;
(statearr_13348_13386[(2)] = null);

(statearr_13348_13386[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (16))){
var inst_13270 = (state_13315[(10)]);
var inst_13274 = cljs.core.chunk_first.call(null,inst_13270);
var inst_13275 = cljs.core.chunk_rest.call(null,inst_13270);
var inst_13276 = cljs.core.count.call(null,inst_13274);
var inst_13256 = inst_13275;
var inst_13257 = inst_13274;
var inst_13258 = inst_13276;
var inst_13259 = (0);
var state_13315__$1 = (function (){var statearr_13349 = state_13315;
(statearr_13349[(12)] = inst_13256);

(statearr_13349[(13)] = inst_13259);

(statearr_13349[(14)] = inst_13257);

(statearr_13349[(16)] = inst_13258);

return statearr_13349;
})();
var statearr_13350_13387 = state_13315__$1;
(statearr_13350_13387[(2)] = null);

(statearr_13350_13387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (10))){
var inst_13256 = (state_13315[(12)]);
var inst_13259 = (state_13315[(13)]);
var inst_13257 = (state_13315[(14)]);
var inst_13258 = (state_13315[(16)]);
var inst_13264 = cljs.core._nth.call(null,inst_13257,inst_13259);
var inst_13265 = cljs.core.async.muxch_STAR_.call(null,inst_13264);
var inst_13266 = cljs.core.async.close_BANG_.call(null,inst_13265);
var inst_13267 = (inst_13259 + (1));
var tmp13345 = inst_13256;
var tmp13346 = inst_13257;
var tmp13347 = inst_13258;
var inst_13256__$1 = tmp13345;
var inst_13257__$1 = tmp13346;
var inst_13258__$1 = tmp13347;
var inst_13259__$1 = inst_13267;
var state_13315__$1 = (function (){var statearr_13351 = state_13315;
(statearr_13351[(12)] = inst_13256__$1);

(statearr_13351[(13)] = inst_13259__$1);

(statearr_13351[(14)] = inst_13257__$1);

(statearr_13351[(17)] = inst_13266);

(statearr_13351[(16)] = inst_13258__$1);

return statearr_13351;
})();
var statearr_13352_13388 = state_13315__$1;
(statearr_13352_13388[(2)] = null);

(statearr_13352_13388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (18))){
var inst_13285 = (state_13315[(2)]);
var state_13315__$1 = state_13315;
var statearr_13353_13389 = state_13315__$1;
(statearr_13353_13389[(2)] = inst_13285);

(statearr_13353_13389[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (8))){
var inst_13259 = (state_13315[(13)]);
var inst_13258 = (state_13315[(16)]);
var inst_13261 = (inst_13259 < inst_13258);
var inst_13262 = inst_13261;
var state_13315__$1 = state_13315;
if(cljs.core.truth_(inst_13262)){
var statearr_13354_13390 = state_13315__$1;
(statearr_13354_13390[(1)] = (10));

} else {
var statearr_13355_13391 = state_13315__$1;
(statearr_13355_13391[(1)] = (11));

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
});})(c__5809__auto___13363,mults,ensure_mult,p))
;
return ((function (switch__5794__auto__,c__5809__auto___13363,mults,ensure_mult,p){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_13359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13359[(0)] = state_machine__5795__auto__);

(statearr_13359[(1)] = (1));

return statearr_13359;
});
var state_machine__5795__auto____1 = (function (state_13315){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_13315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e13360){if((e13360 instanceof Object)){
var ex__5798__auto__ = e13360;
var statearr_13361_13392 = state_13315;
(statearr_13361_13392[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13393 = state_13315;
state_13315 = G__13393;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_13315){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_13315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___13363,mults,ensure_mult,p))
})();
var state__5811__auto__ = (function (){var statearr_13362 = f__5810__auto__.call(null);
(statearr_13362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___13363);

return statearr_13362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___13363,mults,ensure_mult,p))
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
var c__5809__auto___13530 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___13530,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___13530,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13500){
var state_val_13501 = (state_13500[(1)]);
if((state_val_13501 === (7))){
var state_13500__$1 = state_13500;
var statearr_13502_13531 = state_13500__$1;
(statearr_13502_13531[(2)] = null);

(statearr_13502_13531[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13501 === (1))){
var state_13500__$1 = state_13500;
var statearr_13503_13532 = state_13500__$1;
(statearr_13503_13532[(2)] = null);

(statearr_13503_13532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13501 === (4))){
var inst_13464 = (state_13500[(7)]);
var inst_13466 = (inst_13464 < cnt);
var state_13500__$1 = state_13500;
if(cljs.core.truth_(inst_13466)){
var statearr_13504_13533 = state_13500__$1;
(statearr_13504_13533[(1)] = (6));

} else {
var statearr_13505_13534 = state_13500__$1;
(statearr_13505_13534[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13501 === (15))){
var inst_13496 = (state_13500[(2)]);
var state_13500__$1 = state_13500;
var statearr_13506_13535 = state_13500__$1;
(statearr_13506_13535[(2)] = inst_13496);

(statearr_13506_13535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13501 === (13))){
var inst_13489 = cljs.core.async.close_BANG_.call(null,out);
var state_13500__$1 = state_13500;
var statearr_13507_13536 = state_13500__$1;
(statearr_13507_13536[(2)] = inst_13489);

(statearr_13507_13536[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13501 === (6))){
var state_13500__$1 = state_13500;
var statearr_13508_13537 = state_13500__$1;
(statearr_13508_13537[(2)] = null);

(statearr_13508_13537[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13501 === (3))){
var inst_13498 = (state_13500[(2)]);
var state_13500__$1 = state_13500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13500__$1,inst_13498);
} else {
if((state_val_13501 === (12))){
var inst_13486 = (state_13500[(8)]);
var inst_13486__$1 = (state_13500[(2)]);
var inst_13487 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13486__$1);
var state_13500__$1 = (function (){var statearr_13509 = state_13500;
(statearr_13509[(8)] = inst_13486__$1);

return statearr_13509;
})();
if(cljs.core.truth_(inst_13487)){
var statearr_13510_13538 = state_13500__$1;
(statearr_13510_13538[(1)] = (13));

} else {
var statearr_13511_13539 = state_13500__$1;
(statearr_13511_13539[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13501 === (2))){
var inst_13463 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13464 = (0);
var state_13500__$1 = (function (){var statearr_13512 = state_13500;
(statearr_13512[(9)] = inst_13463);

(statearr_13512[(7)] = inst_13464);

return statearr_13512;
})();
var statearr_13513_13540 = state_13500__$1;
(statearr_13513_13540[(2)] = null);

(statearr_13513_13540[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13501 === (11))){
var inst_13464 = (state_13500[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13500,(10),Object,null,(9));
var inst_13473 = chs__$1.call(null,inst_13464);
var inst_13474 = done.call(null,inst_13464);
var inst_13475 = cljs.core.async.take_BANG_.call(null,inst_13473,inst_13474);
var state_13500__$1 = state_13500;
var statearr_13514_13541 = state_13500__$1;
(statearr_13514_13541[(2)] = inst_13475);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13500__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13501 === (9))){
var inst_13464 = (state_13500[(7)]);
var inst_13477 = (state_13500[(2)]);
var inst_13478 = (inst_13464 + (1));
var inst_13464__$1 = inst_13478;
var state_13500__$1 = (function (){var statearr_13515 = state_13500;
(statearr_13515[(10)] = inst_13477);

(statearr_13515[(7)] = inst_13464__$1);

return statearr_13515;
})();
var statearr_13516_13542 = state_13500__$1;
(statearr_13516_13542[(2)] = null);

(statearr_13516_13542[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13501 === (5))){
var inst_13484 = (state_13500[(2)]);
var state_13500__$1 = (function (){var statearr_13517 = state_13500;
(statearr_13517[(11)] = inst_13484);

return statearr_13517;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13500__$1,(12),dchan);
} else {
if((state_val_13501 === (14))){
var inst_13486 = (state_13500[(8)]);
var inst_13491 = cljs.core.apply.call(null,f,inst_13486);
var state_13500__$1 = state_13500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13500__$1,(16),out,inst_13491);
} else {
if((state_val_13501 === (16))){
var inst_13493 = (state_13500[(2)]);
var state_13500__$1 = (function (){var statearr_13518 = state_13500;
(statearr_13518[(12)] = inst_13493);

return statearr_13518;
})();
var statearr_13519_13543 = state_13500__$1;
(statearr_13519_13543[(2)] = null);

(statearr_13519_13543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13501 === (10))){
var inst_13468 = (state_13500[(2)]);
var inst_13469 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13500__$1 = (function (){var statearr_13520 = state_13500;
(statearr_13520[(13)] = inst_13468);

return statearr_13520;
})();
var statearr_13521_13544 = state_13500__$1;
(statearr_13521_13544[(2)] = inst_13469);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13500__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13501 === (8))){
var inst_13482 = (state_13500[(2)]);
var state_13500__$1 = state_13500;
var statearr_13522_13545 = state_13500__$1;
(statearr_13522_13545[(2)] = inst_13482);

(statearr_13522_13545[(1)] = (5));


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
});})(c__5809__auto___13530,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__5794__auto__,c__5809__auto___13530,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_13526 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13526[(0)] = state_machine__5795__auto__);

(statearr_13526[(1)] = (1));

return statearr_13526;
});
var state_machine__5795__auto____1 = (function (state_13500){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_13500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e13527){if((e13527 instanceof Object)){
var ex__5798__auto__ = e13527;
var statearr_13528_13546 = state_13500;
(statearr_13528_13546[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13547 = state_13500;
state_13500 = G__13547;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_13500){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_13500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___13530,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__5811__auto__ = (function (){var statearr_13529 = f__5810__auto__.call(null);
(statearr_13529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___13530);

return statearr_13529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___13530,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__5809__auto___13655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___13655,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___13655,out){
return (function (state_13631){
var state_val_13632 = (state_13631[(1)]);
if((state_val_13632 === (7))){
var inst_13610 = (state_13631[(7)]);
var inst_13611 = (state_13631[(8)]);
var inst_13610__$1 = (state_13631[(2)]);
var inst_13611__$1 = cljs.core.nth.call(null,inst_13610__$1,(0),null);
var inst_13612 = cljs.core.nth.call(null,inst_13610__$1,(1),null);
var inst_13613 = (inst_13611__$1 == null);
var state_13631__$1 = (function (){var statearr_13633 = state_13631;
(statearr_13633[(7)] = inst_13610__$1);

(statearr_13633[(8)] = inst_13611__$1);

(statearr_13633[(9)] = inst_13612);

return statearr_13633;
})();
if(cljs.core.truth_(inst_13613)){
var statearr_13634_13656 = state_13631__$1;
(statearr_13634_13656[(1)] = (8));

} else {
var statearr_13635_13657 = state_13631__$1;
(statearr_13635_13657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13632 === (1))){
var inst_13602 = cljs.core.vec.call(null,chs);
var inst_13603 = inst_13602;
var state_13631__$1 = (function (){var statearr_13636 = state_13631;
(statearr_13636[(10)] = inst_13603);

return statearr_13636;
})();
var statearr_13637_13658 = state_13631__$1;
(statearr_13637_13658[(2)] = null);

(statearr_13637_13658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13632 === (4))){
var inst_13603 = (state_13631[(10)]);
var state_13631__$1 = state_13631;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13631__$1,(7),inst_13603);
} else {
if((state_val_13632 === (6))){
var inst_13627 = (state_13631[(2)]);
var state_13631__$1 = state_13631;
var statearr_13638_13659 = state_13631__$1;
(statearr_13638_13659[(2)] = inst_13627);

(statearr_13638_13659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13632 === (3))){
var inst_13629 = (state_13631[(2)]);
var state_13631__$1 = state_13631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13631__$1,inst_13629);
} else {
if((state_val_13632 === (2))){
var inst_13603 = (state_13631[(10)]);
var inst_13605 = cljs.core.count.call(null,inst_13603);
var inst_13606 = (inst_13605 > (0));
var state_13631__$1 = state_13631;
if(cljs.core.truth_(inst_13606)){
var statearr_13640_13660 = state_13631__$1;
(statearr_13640_13660[(1)] = (4));

} else {
var statearr_13641_13661 = state_13631__$1;
(statearr_13641_13661[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13632 === (11))){
var inst_13603 = (state_13631[(10)]);
var inst_13620 = (state_13631[(2)]);
var tmp13639 = inst_13603;
var inst_13603__$1 = tmp13639;
var state_13631__$1 = (function (){var statearr_13642 = state_13631;
(statearr_13642[(10)] = inst_13603__$1);

(statearr_13642[(11)] = inst_13620);

return statearr_13642;
})();
var statearr_13643_13662 = state_13631__$1;
(statearr_13643_13662[(2)] = null);

(statearr_13643_13662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13632 === (9))){
var inst_13611 = (state_13631[(8)]);
var state_13631__$1 = state_13631;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13631__$1,(11),out,inst_13611);
} else {
if((state_val_13632 === (5))){
var inst_13625 = cljs.core.async.close_BANG_.call(null,out);
var state_13631__$1 = state_13631;
var statearr_13644_13663 = state_13631__$1;
(statearr_13644_13663[(2)] = inst_13625);

(statearr_13644_13663[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13632 === (10))){
var inst_13623 = (state_13631[(2)]);
var state_13631__$1 = state_13631;
var statearr_13645_13664 = state_13631__$1;
(statearr_13645_13664[(2)] = inst_13623);

(statearr_13645_13664[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13632 === (8))){
var inst_13603 = (state_13631[(10)]);
var inst_13610 = (state_13631[(7)]);
var inst_13611 = (state_13631[(8)]);
var inst_13612 = (state_13631[(9)]);
var inst_13615 = (function (){var c = inst_13612;
var v = inst_13611;
var vec__13608 = inst_13610;
var cs = inst_13603;
return ((function (c,v,vec__13608,cs,inst_13603,inst_13610,inst_13611,inst_13612,state_val_13632,c__5809__auto___13655,out){
return (function (p1__13548_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13548_SHARP_);
});
;})(c,v,vec__13608,cs,inst_13603,inst_13610,inst_13611,inst_13612,state_val_13632,c__5809__auto___13655,out))
})();
var inst_13616 = cljs.core.filterv.call(null,inst_13615,inst_13603);
var inst_13603__$1 = inst_13616;
var state_13631__$1 = (function (){var statearr_13646 = state_13631;
(statearr_13646[(10)] = inst_13603__$1);

return statearr_13646;
})();
var statearr_13647_13665 = state_13631__$1;
(statearr_13647_13665[(2)] = null);

(statearr_13647_13665[(1)] = (2));


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
});})(c__5809__auto___13655,out))
;
return ((function (switch__5794__auto__,c__5809__auto___13655,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_13651 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13651[(0)] = state_machine__5795__auto__);

(statearr_13651[(1)] = (1));

return statearr_13651;
});
var state_machine__5795__auto____1 = (function (state_13631){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_13631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e13652){if((e13652 instanceof Object)){
var ex__5798__auto__ = e13652;
var statearr_13653_13666 = state_13631;
(statearr_13653_13666[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13667 = state_13631;
state_13631 = G__13667;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_13631){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_13631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___13655,out))
})();
var state__5811__auto__ = (function (){var statearr_13654 = f__5810__auto__.call(null);
(statearr_13654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___13655);

return statearr_13654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___13655,out))
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
var c__5809__auto___13760 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___13760,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___13760,out){
return (function (state_13737){
var state_val_13738 = (state_13737[(1)]);
if((state_val_13738 === (7))){
var inst_13719 = (state_13737[(7)]);
var inst_13719__$1 = (state_13737[(2)]);
var inst_13720 = (inst_13719__$1 == null);
var inst_13721 = cljs.core.not.call(null,inst_13720);
var state_13737__$1 = (function (){var statearr_13739 = state_13737;
(statearr_13739[(7)] = inst_13719__$1);

return statearr_13739;
})();
if(inst_13721){
var statearr_13740_13761 = state_13737__$1;
(statearr_13740_13761[(1)] = (8));

} else {
var statearr_13741_13762 = state_13737__$1;
(statearr_13741_13762[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13738 === (1))){
var inst_13714 = (0);
var state_13737__$1 = (function (){var statearr_13742 = state_13737;
(statearr_13742[(8)] = inst_13714);

return statearr_13742;
})();
var statearr_13743_13763 = state_13737__$1;
(statearr_13743_13763[(2)] = null);

(statearr_13743_13763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13738 === (4))){
var state_13737__$1 = state_13737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13737__$1,(7),ch);
} else {
if((state_val_13738 === (6))){
var inst_13732 = (state_13737[(2)]);
var state_13737__$1 = state_13737;
var statearr_13744_13764 = state_13737__$1;
(statearr_13744_13764[(2)] = inst_13732);

(statearr_13744_13764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13738 === (3))){
var inst_13734 = (state_13737[(2)]);
var inst_13735 = cljs.core.async.close_BANG_.call(null,out);
var state_13737__$1 = (function (){var statearr_13745 = state_13737;
(statearr_13745[(9)] = inst_13734);

return statearr_13745;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13737__$1,inst_13735);
} else {
if((state_val_13738 === (2))){
var inst_13714 = (state_13737[(8)]);
var inst_13716 = (inst_13714 < n);
var state_13737__$1 = state_13737;
if(cljs.core.truth_(inst_13716)){
var statearr_13746_13765 = state_13737__$1;
(statearr_13746_13765[(1)] = (4));

} else {
var statearr_13747_13766 = state_13737__$1;
(statearr_13747_13766[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13738 === (11))){
var inst_13714 = (state_13737[(8)]);
var inst_13724 = (state_13737[(2)]);
var inst_13725 = (inst_13714 + (1));
var inst_13714__$1 = inst_13725;
var state_13737__$1 = (function (){var statearr_13748 = state_13737;
(statearr_13748[(8)] = inst_13714__$1);

(statearr_13748[(10)] = inst_13724);

return statearr_13748;
})();
var statearr_13749_13767 = state_13737__$1;
(statearr_13749_13767[(2)] = null);

(statearr_13749_13767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13738 === (9))){
var state_13737__$1 = state_13737;
var statearr_13750_13768 = state_13737__$1;
(statearr_13750_13768[(2)] = null);

(statearr_13750_13768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13738 === (5))){
var state_13737__$1 = state_13737;
var statearr_13751_13769 = state_13737__$1;
(statearr_13751_13769[(2)] = null);

(statearr_13751_13769[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13738 === (10))){
var inst_13729 = (state_13737[(2)]);
var state_13737__$1 = state_13737;
var statearr_13752_13770 = state_13737__$1;
(statearr_13752_13770[(2)] = inst_13729);

(statearr_13752_13770[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13738 === (8))){
var inst_13719 = (state_13737[(7)]);
var state_13737__$1 = state_13737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13737__$1,(11),out,inst_13719);
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
});})(c__5809__auto___13760,out))
;
return ((function (switch__5794__auto__,c__5809__auto___13760,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_13756 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13756[(0)] = state_machine__5795__auto__);

(statearr_13756[(1)] = (1));

return statearr_13756;
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
}catch (e13757){if((e13757 instanceof Object)){
var ex__5798__auto__ = e13757;
var statearr_13758_13771 = state_13737;
(statearr_13758_13771[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13772 = state_13737;
state_13737 = G__13772;
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
;})(switch__5794__auto__,c__5809__auto___13760,out))
})();
var state__5811__auto__ = (function (){var statearr_13759 = f__5810__auto__.call(null);
(statearr_13759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___13760);

return statearr_13759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___13760,out))
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
if(typeof cljs.core.async.t13780 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13780 = (function (ch,f,map_LT_,meta13781){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13781 = meta13781;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13780.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t13780.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t13780.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t13780.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t13783 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13783 = (function (fn1,_,meta13781,map_LT_,f,ch,meta13784){
this.fn1 = fn1;
this._ = _;
this.meta13781 = meta13781;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta13784 = meta13784;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13783.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13783.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t13783.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__13773_SHARP_){
return f1.call(null,(((p1__13773_SHARP_ == null))?null:self__.f.call(null,p1__13773_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t13783.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13785){
var self__ = this;
var _13785__$1 = this;
return self__.meta13784;
});})(___$1))
;

cljs.core.async.t13783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13785,meta13784__$1){
var self__ = this;
var _13785__$1 = this;
return (new cljs.core.async.t13783(self__.fn1,self__._,self__.meta13781,self__.map_LT_,self__.f,self__.ch,meta13784__$1));
});})(___$1))
;

cljs.core.async.t13783.cljs$lang$type = true;

cljs.core.async.t13783.cljs$lang$ctorStr = "cljs.core.async/t13783";

cljs.core.async.t13783.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t13783");
});})(___$1))
;

cljs.core.async.__GT_t13783 = ((function (___$1){
return (function __GT_t13783(fn1__$1,___$2,meta13781__$1,map_LT___$1,f__$1,ch__$1,meta13784){
return (new cljs.core.async.t13783(fn1__$1,___$2,meta13781__$1,map_LT___$1,f__$1,ch__$1,meta13784));
});})(___$1))
;

}

return (new cljs.core.async.t13783(fn1,___$1,self__.meta13781,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
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

cljs.core.async.t13780.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t13780.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t13780.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t13780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13782){
var self__ = this;
var _13782__$1 = this;
return self__.meta13781;
});

cljs.core.async.t13780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13782,meta13781__$1){
var self__ = this;
var _13782__$1 = this;
return (new cljs.core.async.t13780(self__.ch,self__.f,self__.map_LT_,meta13781__$1));
});

cljs.core.async.t13780.cljs$lang$type = true;

cljs.core.async.t13780.cljs$lang$ctorStr = "cljs.core.async/t13780";

cljs.core.async.t13780.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t13780");
});

cljs.core.async.__GT_t13780 = (function __GT_t13780(ch__$1,f__$1,map_LT___$1,meta13781){
return (new cljs.core.async.t13780(ch__$1,f__$1,map_LT___$1,meta13781));
});

}

return (new cljs.core.async.t13780(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t13789 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13789 = (function (ch,f,map_GT_,meta13790){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13790 = meta13790;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13789.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t13789.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t13789.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t13789.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t13789.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t13789.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t13789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13791){
var self__ = this;
var _13791__$1 = this;
return self__.meta13790;
});

cljs.core.async.t13789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13791,meta13790__$1){
var self__ = this;
var _13791__$1 = this;
return (new cljs.core.async.t13789(self__.ch,self__.f,self__.map_GT_,meta13790__$1));
});

cljs.core.async.t13789.cljs$lang$type = true;

cljs.core.async.t13789.cljs$lang$ctorStr = "cljs.core.async/t13789";

cljs.core.async.t13789.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t13789");
});

cljs.core.async.__GT_t13789 = (function __GT_t13789(ch__$1,f__$1,map_GT___$1,meta13790){
return (new cljs.core.async.t13789(ch__$1,f__$1,map_GT___$1,meta13790));
});

}

return (new cljs.core.async.t13789(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t13795 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13795 = (function (ch,p,filter_GT_,meta13796){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13796 = meta13796;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13795.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t13795.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t13795.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t13795.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t13795.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t13795.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t13795.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t13795.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13797){
var self__ = this;
var _13797__$1 = this;
return self__.meta13796;
});

cljs.core.async.t13795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13797,meta13796__$1){
var self__ = this;
var _13797__$1 = this;
return (new cljs.core.async.t13795(self__.ch,self__.p,self__.filter_GT_,meta13796__$1));
});

cljs.core.async.t13795.cljs$lang$type = true;

cljs.core.async.t13795.cljs$lang$ctorStr = "cljs.core.async/t13795";

cljs.core.async.t13795.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t13795");
});

cljs.core.async.__GT_t13795 = (function __GT_t13795(ch__$1,p__$1,filter_GT___$1,meta13796){
return (new cljs.core.async.t13795(ch__$1,p__$1,filter_GT___$1,meta13796));
});

}

return (new cljs.core.async.t13795(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
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
var c__5809__auto___13880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___13880,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___13880,out){
return (function (state_13859){
var state_val_13860 = (state_13859[(1)]);
if((state_val_13860 === (7))){
var inst_13855 = (state_13859[(2)]);
var state_13859__$1 = state_13859;
var statearr_13861_13881 = state_13859__$1;
(statearr_13861_13881[(2)] = inst_13855);

(statearr_13861_13881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13860 === (1))){
var state_13859__$1 = state_13859;
var statearr_13862_13882 = state_13859__$1;
(statearr_13862_13882[(2)] = null);

(statearr_13862_13882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13860 === (4))){
var inst_13841 = (state_13859[(7)]);
var inst_13841__$1 = (state_13859[(2)]);
var inst_13842 = (inst_13841__$1 == null);
var state_13859__$1 = (function (){var statearr_13863 = state_13859;
(statearr_13863[(7)] = inst_13841__$1);

return statearr_13863;
})();
if(cljs.core.truth_(inst_13842)){
var statearr_13864_13883 = state_13859__$1;
(statearr_13864_13883[(1)] = (5));

} else {
var statearr_13865_13884 = state_13859__$1;
(statearr_13865_13884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13860 === (6))){
var inst_13841 = (state_13859[(7)]);
var inst_13846 = p.call(null,inst_13841);
var state_13859__$1 = state_13859;
if(cljs.core.truth_(inst_13846)){
var statearr_13866_13885 = state_13859__$1;
(statearr_13866_13885[(1)] = (8));

} else {
var statearr_13867_13886 = state_13859__$1;
(statearr_13867_13886[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13860 === (3))){
var inst_13857 = (state_13859[(2)]);
var state_13859__$1 = state_13859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13859__$1,inst_13857);
} else {
if((state_val_13860 === (2))){
var state_13859__$1 = state_13859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13859__$1,(4),ch);
} else {
if((state_val_13860 === (11))){
var inst_13849 = (state_13859[(2)]);
var state_13859__$1 = state_13859;
var statearr_13868_13887 = state_13859__$1;
(statearr_13868_13887[(2)] = inst_13849);

(statearr_13868_13887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13860 === (9))){
var state_13859__$1 = state_13859;
var statearr_13869_13888 = state_13859__$1;
(statearr_13869_13888[(2)] = null);

(statearr_13869_13888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13860 === (5))){
var inst_13844 = cljs.core.async.close_BANG_.call(null,out);
var state_13859__$1 = state_13859;
var statearr_13870_13889 = state_13859__$1;
(statearr_13870_13889[(2)] = inst_13844);

(statearr_13870_13889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13860 === (10))){
var inst_13852 = (state_13859[(2)]);
var state_13859__$1 = (function (){var statearr_13871 = state_13859;
(statearr_13871[(8)] = inst_13852);

return statearr_13871;
})();
var statearr_13872_13890 = state_13859__$1;
(statearr_13872_13890[(2)] = null);

(statearr_13872_13890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13860 === (8))){
var inst_13841 = (state_13859[(7)]);
var state_13859__$1 = state_13859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13859__$1,(11),out,inst_13841);
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
});})(c__5809__auto___13880,out))
;
return ((function (switch__5794__auto__,c__5809__auto___13880,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_13876 = [null,null,null,null,null,null,null,null,null];
(statearr_13876[(0)] = state_machine__5795__auto__);

(statearr_13876[(1)] = (1));

return statearr_13876;
});
var state_machine__5795__auto____1 = (function (state_13859){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_13859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e13877){if((e13877 instanceof Object)){
var ex__5798__auto__ = e13877;
var statearr_13878_13891 = state_13859;
(statearr_13878_13891[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13892 = state_13859;
state_13859 = G__13892;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_13859){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_13859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___13880,out))
})();
var state__5811__auto__ = (function (){var statearr_13879 = f__5810__auto__.call(null);
(statearr_13879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___13880);

return statearr_13879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___13880,out))
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
return (function (state_14058){
var state_val_14059 = (state_14058[(1)]);
if((state_val_14059 === (7))){
var inst_14054 = (state_14058[(2)]);
var state_14058__$1 = state_14058;
var statearr_14060_14101 = state_14058__$1;
(statearr_14060_14101[(2)] = inst_14054);

(statearr_14060_14101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14059 === (20))){
var inst_14024 = (state_14058[(7)]);
var inst_14035 = (state_14058[(2)]);
var inst_14036 = cljs.core.next.call(null,inst_14024);
var inst_14010 = inst_14036;
var inst_14011 = null;
var inst_14012 = (0);
var inst_14013 = (0);
var state_14058__$1 = (function (){var statearr_14061 = state_14058;
(statearr_14061[(8)] = inst_14035);

(statearr_14061[(9)] = inst_14013);

(statearr_14061[(10)] = inst_14010);

(statearr_14061[(11)] = inst_14012);

(statearr_14061[(12)] = inst_14011);

return statearr_14061;
})();
var statearr_14062_14102 = state_14058__$1;
(statearr_14062_14102[(2)] = null);

(statearr_14062_14102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14059 === (1))){
var state_14058__$1 = state_14058;
var statearr_14063_14103 = state_14058__$1;
(statearr_14063_14103[(2)] = null);

(statearr_14063_14103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14059 === (4))){
var inst_13999 = (state_14058[(13)]);
var inst_13999__$1 = (state_14058[(2)]);
var inst_14000 = (inst_13999__$1 == null);
var state_14058__$1 = (function (){var statearr_14064 = state_14058;
(statearr_14064[(13)] = inst_13999__$1);

return statearr_14064;
})();
if(cljs.core.truth_(inst_14000)){
var statearr_14065_14104 = state_14058__$1;
(statearr_14065_14104[(1)] = (5));

} else {
var statearr_14066_14105 = state_14058__$1;
(statearr_14066_14105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14059 === (15))){
var state_14058__$1 = state_14058;
var statearr_14070_14106 = state_14058__$1;
(statearr_14070_14106[(2)] = null);

(statearr_14070_14106[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14059 === (21))){
var state_14058__$1 = state_14058;
var statearr_14071_14107 = state_14058__$1;
(statearr_14071_14107[(2)] = null);

(statearr_14071_14107[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14059 === (13))){
var inst_14013 = (state_14058[(9)]);
var inst_14010 = (state_14058[(10)]);
var inst_14012 = (state_14058[(11)]);
var inst_14011 = (state_14058[(12)]);
var inst_14020 = (state_14058[(2)]);
var inst_14021 = (inst_14013 + (1));
var tmp14067 = inst_14010;
var tmp14068 = inst_14012;
var tmp14069 = inst_14011;
var inst_14010__$1 = tmp14067;
var inst_14011__$1 = tmp14069;
var inst_14012__$1 = tmp14068;
var inst_14013__$1 = inst_14021;
var state_14058__$1 = (function (){var statearr_14072 = state_14058;
(statearr_14072[(9)] = inst_14013__$1);

(statearr_14072[(10)] = inst_14010__$1);

(statearr_14072[(14)] = inst_14020);

(statearr_14072[(11)] = inst_14012__$1);

(statearr_14072[(12)] = inst_14011__$1);

return statearr_14072;
})();
var statearr_14073_14108 = state_14058__$1;
(statearr_14073_14108[(2)] = null);

(statearr_14073_14108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14059 === (22))){
var state_14058__$1 = state_14058;
var statearr_14074_14109 = state_14058__$1;
(statearr_14074_14109[(2)] = null);

(statearr_14074_14109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14059 === (6))){
var inst_13999 = (state_14058[(13)]);
var inst_14008 = f.call(null,inst_13999);
var inst_14009 = cljs.core.seq.call(null,inst_14008);
var inst_14010 = inst_14009;
var inst_14011 = null;
var inst_14012 = (0);
var inst_14013 = (0);
var state_14058__$1 = (function (){var statearr_14075 = state_14058;
(statearr_14075[(9)] = inst_14013);

(statearr_14075[(10)] = inst_14010);

(statearr_14075[(11)] = inst_14012);

(statearr_14075[(12)] = inst_14011);

return statearr_14075;
})();
var statearr_14076_14110 = state_14058__$1;
(statearr_14076_14110[(2)] = null);

(statearr_14076_14110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14059 === (17))){
var inst_14024 = (state_14058[(7)]);
var inst_14028 = cljs.core.chunk_first.call(null,inst_14024);
var inst_14029 = cljs.core.chunk_rest.call(null,inst_14024);
var inst_14030 = cljs.core.count.call(null,inst_14028);
var inst_14010 = inst_14029;
var inst_14011 = inst_14028;
var inst_14012 = inst_14030;
var inst_14013 = (0);
var state_14058__$1 = (function (){var statearr_14077 = state_14058;
(statearr_14077[(9)] = inst_14013);

(statearr_14077[(10)] = inst_14010);

(statearr_14077[(11)] = inst_14012);

(statearr_14077[(12)] = inst_14011);

return statearr_14077;
})();
var statearr_14078_14111 = state_14058__$1;
(statearr_14078_14111[(2)] = null);

(statearr_14078_14111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14059 === (3))){
var inst_14056 = (state_14058[(2)]);
var state_14058__$1 = state_14058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14058__$1,inst_14056);
} else {
if((state_val_14059 === (12))){
var inst_14044 = (state_14058[(2)]);
var state_14058__$1 = state_14058;
var statearr_14079_14112 = state_14058__$1;
(statearr_14079_14112[(2)] = inst_14044);

(statearr_14079_14112[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14059 === (2))){
var state_14058__$1 = state_14058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14058__$1,(4),in$);
} else {
if((state_val_14059 === (23))){
var inst_14052 = (state_14058[(2)]);
var state_14058__$1 = state_14058;
var statearr_14080_14113 = state_14058__$1;
(statearr_14080_14113[(2)] = inst_14052);

(statearr_14080_14113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14059 === (19))){
var inst_14039 = (state_14058[(2)]);
var state_14058__$1 = state_14058;
var statearr_14081_14114 = state_14058__$1;
(statearr_14081_14114[(2)] = inst_14039);

(statearr_14081_14114[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14059 === (11))){
var inst_14010 = (state_14058[(10)]);
var inst_14024 = (state_14058[(7)]);
var inst_14024__$1 = cljs.core.seq.call(null,inst_14010);
var state_14058__$1 = (function (){var statearr_14082 = state_14058;
(statearr_14082[(7)] = inst_14024__$1);

return statearr_14082;
})();
if(inst_14024__$1){
var statearr_14083_14115 = state_14058__$1;
(statearr_14083_14115[(1)] = (14));

} else {
var statearr_14084_14116 = state_14058__$1;
(statearr_14084_14116[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14059 === (9))){
var inst_14046 = (state_14058[(2)]);
var inst_14047 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14058__$1 = (function (){var statearr_14085 = state_14058;
(statearr_14085[(15)] = inst_14046);

return statearr_14085;
})();
if(cljs.core.truth_(inst_14047)){
var statearr_14086_14117 = state_14058__$1;
(statearr_14086_14117[(1)] = (21));

} else {
var statearr_14087_14118 = state_14058__$1;
(statearr_14087_14118[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14059 === (5))){
var inst_14002 = cljs.core.async.close_BANG_.call(null,out);
var state_14058__$1 = state_14058;
var statearr_14088_14119 = state_14058__$1;
(statearr_14088_14119[(2)] = inst_14002);

(statearr_14088_14119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14059 === (14))){
var inst_14024 = (state_14058[(7)]);
var inst_14026 = cljs.core.chunked_seq_QMARK_.call(null,inst_14024);
var state_14058__$1 = state_14058;
if(inst_14026){
var statearr_14089_14120 = state_14058__$1;
(statearr_14089_14120[(1)] = (17));

} else {
var statearr_14090_14121 = state_14058__$1;
(statearr_14090_14121[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14059 === (16))){
var inst_14042 = (state_14058[(2)]);
var state_14058__$1 = state_14058;
var statearr_14091_14122 = state_14058__$1;
(statearr_14091_14122[(2)] = inst_14042);

(statearr_14091_14122[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14059 === (10))){
var inst_14013 = (state_14058[(9)]);
var inst_14011 = (state_14058[(12)]);
var inst_14018 = cljs.core._nth.call(null,inst_14011,inst_14013);
var state_14058__$1 = state_14058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14058__$1,(13),out,inst_14018);
} else {
if((state_val_14059 === (18))){
var inst_14024 = (state_14058[(7)]);
var inst_14033 = cljs.core.first.call(null,inst_14024);
var state_14058__$1 = state_14058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14058__$1,(20),out,inst_14033);
} else {
if((state_val_14059 === (8))){
var inst_14013 = (state_14058[(9)]);
var inst_14012 = (state_14058[(11)]);
var inst_14015 = (inst_14013 < inst_14012);
var inst_14016 = inst_14015;
var state_14058__$1 = state_14058;
if(cljs.core.truth_(inst_14016)){
var statearr_14092_14123 = state_14058__$1;
(statearr_14092_14123[(1)] = (10));

} else {
var statearr_14093_14124 = state_14058__$1;
(statearr_14093_14124[(1)] = (11));

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
var statearr_14097 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14097[(0)] = state_machine__5795__auto__);

(statearr_14097[(1)] = (1));

return statearr_14097;
});
var state_machine__5795__auto____1 = (function (state_14058){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_14058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e14098){if((e14098 instanceof Object)){
var ex__5798__auto__ = e14098;
var statearr_14099_14125 = state_14058;
(statearr_14099_14125[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14126 = state_14058;
state_14058 = G__14126;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_14058){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_14058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_14100 = f__5810__auto__.call(null);
(statearr_14100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_14100;
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
var c__5809__auto___14223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___14223,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___14223,out){
return (function (state_14198){
var state_val_14199 = (state_14198[(1)]);
if((state_val_14199 === (7))){
var inst_14193 = (state_14198[(2)]);
var state_14198__$1 = state_14198;
var statearr_14200_14224 = state_14198__$1;
(statearr_14200_14224[(2)] = inst_14193);

(statearr_14200_14224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14199 === (1))){
var inst_14175 = null;
var state_14198__$1 = (function (){var statearr_14201 = state_14198;
(statearr_14201[(7)] = inst_14175);

return statearr_14201;
})();
var statearr_14202_14225 = state_14198__$1;
(statearr_14202_14225[(2)] = null);

(statearr_14202_14225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14199 === (4))){
var inst_14178 = (state_14198[(8)]);
var inst_14178__$1 = (state_14198[(2)]);
var inst_14179 = (inst_14178__$1 == null);
var inst_14180 = cljs.core.not.call(null,inst_14179);
var state_14198__$1 = (function (){var statearr_14203 = state_14198;
(statearr_14203[(8)] = inst_14178__$1);

return statearr_14203;
})();
if(inst_14180){
var statearr_14204_14226 = state_14198__$1;
(statearr_14204_14226[(1)] = (5));

} else {
var statearr_14205_14227 = state_14198__$1;
(statearr_14205_14227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14199 === (6))){
var state_14198__$1 = state_14198;
var statearr_14206_14228 = state_14198__$1;
(statearr_14206_14228[(2)] = null);

(statearr_14206_14228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14199 === (3))){
var inst_14195 = (state_14198[(2)]);
var inst_14196 = cljs.core.async.close_BANG_.call(null,out);
var state_14198__$1 = (function (){var statearr_14207 = state_14198;
(statearr_14207[(9)] = inst_14195);

return statearr_14207;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14198__$1,inst_14196);
} else {
if((state_val_14199 === (2))){
var state_14198__$1 = state_14198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14198__$1,(4),ch);
} else {
if((state_val_14199 === (11))){
var inst_14178 = (state_14198[(8)]);
var inst_14187 = (state_14198[(2)]);
var inst_14175 = inst_14178;
var state_14198__$1 = (function (){var statearr_14208 = state_14198;
(statearr_14208[(10)] = inst_14187);

(statearr_14208[(7)] = inst_14175);

return statearr_14208;
})();
var statearr_14209_14229 = state_14198__$1;
(statearr_14209_14229[(2)] = null);

(statearr_14209_14229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14199 === (9))){
var inst_14178 = (state_14198[(8)]);
var state_14198__$1 = state_14198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14198__$1,(11),out,inst_14178);
} else {
if((state_val_14199 === (5))){
var inst_14178 = (state_14198[(8)]);
var inst_14175 = (state_14198[(7)]);
var inst_14182 = cljs.core._EQ_.call(null,inst_14178,inst_14175);
var state_14198__$1 = state_14198;
if(inst_14182){
var statearr_14211_14230 = state_14198__$1;
(statearr_14211_14230[(1)] = (8));

} else {
var statearr_14212_14231 = state_14198__$1;
(statearr_14212_14231[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14199 === (10))){
var inst_14190 = (state_14198[(2)]);
var state_14198__$1 = state_14198;
var statearr_14213_14232 = state_14198__$1;
(statearr_14213_14232[(2)] = inst_14190);

(statearr_14213_14232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14199 === (8))){
var inst_14175 = (state_14198[(7)]);
var tmp14210 = inst_14175;
var inst_14175__$1 = tmp14210;
var state_14198__$1 = (function (){var statearr_14214 = state_14198;
(statearr_14214[(7)] = inst_14175__$1);

return statearr_14214;
})();
var statearr_14215_14233 = state_14198__$1;
(statearr_14215_14233[(2)] = null);

(statearr_14215_14233[(1)] = (2));


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
});})(c__5809__auto___14223,out))
;
return ((function (switch__5794__auto__,c__5809__auto___14223,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_14219 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14219[(0)] = state_machine__5795__auto__);

(statearr_14219[(1)] = (1));

return statearr_14219;
});
var state_machine__5795__auto____1 = (function (state_14198){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_14198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e14220){if((e14220 instanceof Object)){
var ex__5798__auto__ = e14220;
var statearr_14221_14234 = state_14198;
(statearr_14221_14234[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14235 = state_14198;
state_14198 = G__14235;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_14198){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_14198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___14223,out))
})();
var state__5811__auto__ = (function (){var statearr_14222 = f__5810__auto__.call(null);
(statearr_14222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___14223);

return statearr_14222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___14223,out))
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
var c__5809__auto___14370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___14370,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___14370,out){
return (function (state_14340){
var state_val_14341 = (state_14340[(1)]);
if((state_val_14341 === (7))){
var inst_14336 = (state_14340[(2)]);
var state_14340__$1 = state_14340;
var statearr_14342_14371 = state_14340__$1;
(statearr_14342_14371[(2)] = inst_14336);

(statearr_14342_14371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14341 === (1))){
var inst_14303 = (new Array(n));
var inst_14304 = inst_14303;
var inst_14305 = (0);
var state_14340__$1 = (function (){var statearr_14343 = state_14340;
(statearr_14343[(7)] = inst_14305);

(statearr_14343[(8)] = inst_14304);

return statearr_14343;
})();
var statearr_14344_14372 = state_14340__$1;
(statearr_14344_14372[(2)] = null);

(statearr_14344_14372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14341 === (4))){
var inst_14308 = (state_14340[(9)]);
var inst_14308__$1 = (state_14340[(2)]);
var inst_14309 = (inst_14308__$1 == null);
var inst_14310 = cljs.core.not.call(null,inst_14309);
var state_14340__$1 = (function (){var statearr_14345 = state_14340;
(statearr_14345[(9)] = inst_14308__$1);

return statearr_14345;
})();
if(inst_14310){
var statearr_14346_14373 = state_14340__$1;
(statearr_14346_14373[(1)] = (5));

} else {
var statearr_14347_14374 = state_14340__$1;
(statearr_14347_14374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14341 === (15))){
var inst_14330 = (state_14340[(2)]);
var state_14340__$1 = state_14340;
var statearr_14348_14375 = state_14340__$1;
(statearr_14348_14375[(2)] = inst_14330);

(statearr_14348_14375[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14341 === (13))){
var state_14340__$1 = state_14340;
var statearr_14349_14376 = state_14340__$1;
(statearr_14349_14376[(2)] = null);

(statearr_14349_14376[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14341 === (6))){
var inst_14305 = (state_14340[(7)]);
var inst_14326 = (inst_14305 > (0));
var state_14340__$1 = state_14340;
if(cljs.core.truth_(inst_14326)){
var statearr_14350_14377 = state_14340__$1;
(statearr_14350_14377[(1)] = (12));

} else {
var statearr_14351_14378 = state_14340__$1;
(statearr_14351_14378[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14341 === (3))){
var inst_14338 = (state_14340[(2)]);
var state_14340__$1 = state_14340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14340__$1,inst_14338);
} else {
if((state_val_14341 === (12))){
var inst_14304 = (state_14340[(8)]);
var inst_14328 = cljs.core.vec.call(null,inst_14304);
var state_14340__$1 = state_14340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14340__$1,(15),out,inst_14328);
} else {
if((state_val_14341 === (2))){
var state_14340__$1 = state_14340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14340__$1,(4),ch);
} else {
if((state_val_14341 === (11))){
var inst_14320 = (state_14340[(2)]);
var inst_14321 = (new Array(n));
var inst_14304 = inst_14321;
var inst_14305 = (0);
var state_14340__$1 = (function (){var statearr_14352 = state_14340;
(statearr_14352[(10)] = inst_14320);

(statearr_14352[(7)] = inst_14305);

(statearr_14352[(8)] = inst_14304);

return statearr_14352;
})();
var statearr_14353_14379 = state_14340__$1;
(statearr_14353_14379[(2)] = null);

(statearr_14353_14379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14341 === (9))){
var inst_14304 = (state_14340[(8)]);
var inst_14318 = cljs.core.vec.call(null,inst_14304);
var state_14340__$1 = state_14340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14340__$1,(11),out,inst_14318);
} else {
if((state_val_14341 === (5))){
var inst_14313 = (state_14340[(11)]);
var inst_14305 = (state_14340[(7)]);
var inst_14308 = (state_14340[(9)]);
var inst_14304 = (state_14340[(8)]);
var inst_14312 = (inst_14304[inst_14305] = inst_14308);
var inst_14313__$1 = (inst_14305 + (1));
var inst_14314 = (inst_14313__$1 < n);
var state_14340__$1 = (function (){var statearr_14354 = state_14340;
(statearr_14354[(12)] = inst_14312);

(statearr_14354[(11)] = inst_14313__$1);

return statearr_14354;
})();
if(cljs.core.truth_(inst_14314)){
var statearr_14355_14380 = state_14340__$1;
(statearr_14355_14380[(1)] = (8));

} else {
var statearr_14356_14381 = state_14340__$1;
(statearr_14356_14381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14341 === (14))){
var inst_14333 = (state_14340[(2)]);
var inst_14334 = cljs.core.async.close_BANG_.call(null,out);
var state_14340__$1 = (function (){var statearr_14358 = state_14340;
(statearr_14358[(13)] = inst_14333);

return statearr_14358;
})();
var statearr_14359_14382 = state_14340__$1;
(statearr_14359_14382[(2)] = inst_14334);

(statearr_14359_14382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14341 === (10))){
var inst_14324 = (state_14340[(2)]);
var state_14340__$1 = state_14340;
var statearr_14360_14383 = state_14340__$1;
(statearr_14360_14383[(2)] = inst_14324);

(statearr_14360_14383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14341 === (8))){
var inst_14313 = (state_14340[(11)]);
var inst_14304 = (state_14340[(8)]);
var tmp14357 = inst_14304;
var inst_14304__$1 = tmp14357;
var inst_14305 = inst_14313;
var state_14340__$1 = (function (){var statearr_14361 = state_14340;
(statearr_14361[(7)] = inst_14305);

(statearr_14361[(8)] = inst_14304__$1);

return statearr_14361;
})();
var statearr_14362_14384 = state_14340__$1;
(statearr_14362_14384[(2)] = null);

(statearr_14362_14384[(1)] = (2));


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
});})(c__5809__auto___14370,out))
;
return ((function (switch__5794__auto__,c__5809__auto___14370,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_14366 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14366[(0)] = state_machine__5795__auto__);

(statearr_14366[(1)] = (1));

return statearr_14366;
});
var state_machine__5795__auto____1 = (function (state_14340){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_14340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e14367){if((e14367 instanceof Object)){
var ex__5798__auto__ = e14367;
var statearr_14368_14385 = state_14340;
(statearr_14368_14385[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14386 = state_14340;
state_14340 = G__14386;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_14340){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_14340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___14370,out))
})();
var state__5811__auto__ = (function (){var statearr_14369 = f__5810__auto__.call(null);
(statearr_14369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___14370);

return statearr_14369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___14370,out))
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
var c__5809__auto___14529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___14529,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___14529,out){
return (function (state_14499){
var state_val_14500 = (state_14499[(1)]);
if((state_val_14500 === (7))){
var inst_14495 = (state_14499[(2)]);
var state_14499__$1 = state_14499;
var statearr_14501_14530 = state_14499__$1;
(statearr_14501_14530[(2)] = inst_14495);

(statearr_14501_14530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (1))){
var inst_14458 = [];
var inst_14459 = inst_14458;
var inst_14460 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14499__$1 = (function (){var statearr_14502 = state_14499;
(statearr_14502[(7)] = inst_14459);

(statearr_14502[(8)] = inst_14460);

return statearr_14502;
})();
var statearr_14503_14531 = state_14499__$1;
(statearr_14503_14531[(2)] = null);

(statearr_14503_14531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (4))){
var inst_14463 = (state_14499[(9)]);
var inst_14463__$1 = (state_14499[(2)]);
var inst_14464 = (inst_14463__$1 == null);
var inst_14465 = cljs.core.not.call(null,inst_14464);
var state_14499__$1 = (function (){var statearr_14504 = state_14499;
(statearr_14504[(9)] = inst_14463__$1);

return statearr_14504;
})();
if(inst_14465){
var statearr_14505_14532 = state_14499__$1;
(statearr_14505_14532[(1)] = (5));

} else {
var statearr_14506_14533 = state_14499__$1;
(statearr_14506_14533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (15))){
var inst_14489 = (state_14499[(2)]);
var state_14499__$1 = state_14499;
var statearr_14507_14534 = state_14499__$1;
(statearr_14507_14534[(2)] = inst_14489);

(statearr_14507_14534[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (13))){
var state_14499__$1 = state_14499;
var statearr_14508_14535 = state_14499__$1;
(statearr_14508_14535[(2)] = null);

(statearr_14508_14535[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (6))){
var inst_14459 = (state_14499[(7)]);
var inst_14484 = inst_14459.length;
var inst_14485 = (inst_14484 > (0));
var state_14499__$1 = state_14499;
if(cljs.core.truth_(inst_14485)){
var statearr_14509_14536 = state_14499__$1;
(statearr_14509_14536[(1)] = (12));

} else {
var statearr_14510_14537 = state_14499__$1;
(statearr_14510_14537[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (3))){
var inst_14497 = (state_14499[(2)]);
var state_14499__$1 = state_14499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14499__$1,inst_14497);
} else {
if((state_val_14500 === (12))){
var inst_14459 = (state_14499[(7)]);
var inst_14487 = cljs.core.vec.call(null,inst_14459);
var state_14499__$1 = state_14499;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14499__$1,(15),out,inst_14487);
} else {
if((state_val_14500 === (2))){
var state_14499__$1 = state_14499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14499__$1,(4),ch);
} else {
if((state_val_14500 === (11))){
var inst_14467 = (state_14499[(10)]);
var inst_14463 = (state_14499[(9)]);
var inst_14477 = (state_14499[(2)]);
var inst_14478 = [];
var inst_14479 = inst_14478.push(inst_14463);
var inst_14459 = inst_14478;
var inst_14460 = inst_14467;
var state_14499__$1 = (function (){var statearr_14511 = state_14499;
(statearr_14511[(7)] = inst_14459);

(statearr_14511[(8)] = inst_14460);

(statearr_14511[(11)] = inst_14479);

(statearr_14511[(12)] = inst_14477);

return statearr_14511;
})();
var statearr_14512_14538 = state_14499__$1;
(statearr_14512_14538[(2)] = null);

(statearr_14512_14538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (9))){
var inst_14459 = (state_14499[(7)]);
var inst_14475 = cljs.core.vec.call(null,inst_14459);
var state_14499__$1 = state_14499;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14499__$1,(11),out,inst_14475);
} else {
if((state_val_14500 === (5))){
var inst_14467 = (state_14499[(10)]);
var inst_14460 = (state_14499[(8)]);
var inst_14463 = (state_14499[(9)]);
var inst_14467__$1 = f.call(null,inst_14463);
var inst_14468 = cljs.core._EQ_.call(null,inst_14467__$1,inst_14460);
var inst_14469 = cljs.core.keyword_identical_QMARK_.call(null,inst_14460,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14470 = (inst_14468) || (inst_14469);
var state_14499__$1 = (function (){var statearr_14513 = state_14499;
(statearr_14513[(10)] = inst_14467__$1);

return statearr_14513;
})();
if(cljs.core.truth_(inst_14470)){
var statearr_14514_14539 = state_14499__$1;
(statearr_14514_14539[(1)] = (8));

} else {
var statearr_14515_14540 = state_14499__$1;
(statearr_14515_14540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (14))){
var inst_14492 = (state_14499[(2)]);
var inst_14493 = cljs.core.async.close_BANG_.call(null,out);
var state_14499__$1 = (function (){var statearr_14517 = state_14499;
(statearr_14517[(13)] = inst_14492);

return statearr_14517;
})();
var statearr_14518_14541 = state_14499__$1;
(statearr_14518_14541[(2)] = inst_14493);

(statearr_14518_14541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (10))){
var inst_14482 = (state_14499[(2)]);
var state_14499__$1 = state_14499;
var statearr_14519_14542 = state_14499__$1;
(statearr_14519_14542[(2)] = inst_14482);

(statearr_14519_14542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14500 === (8))){
var inst_14459 = (state_14499[(7)]);
var inst_14467 = (state_14499[(10)]);
var inst_14463 = (state_14499[(9)]);
var inst_14472 = inst_14459.push(inst_14463);
var tmp14516 = inst_14459;
var inst_14459__$1 = tmp14516;
var inst_14460 = inst_14467;
var state_14499__$1 = (function (){var statearr_14520 = state_14499;
(statearr_14520[(7)] = inst_14459__$1);

(statearr_14520[(8)] = inst_14460);

(statearr_14520[(14)] = inst_14472);

return statearr_14520;
})();
var statearr_14521_14543 = state_14499__$1;
(statearr_14521_14543[(2)] = null);

(statearr_14521_14543[(1)] = (2));


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
});})(c__5809__auto___14529,out))
;
return ((function (switch__5794__auto__,c__5809__auto___14529,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_14525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14525[(0)] = state_machine__5795__auto__);

(statearr_14525[(1)] = (1));

return statearr_14525;
});
var state_machine__5795__auto____1 = (function (state_14499){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_14499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e14526){if((e14526 instanceof Object)){
var ex__5798__auto__ = e14526;
var statearr_14527_14544 = state_14499;
(statearr_14527_14544[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14545 = state_14499;
state_14499 = G__14545;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_14499){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_14499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___14529,out))
})();
var state__5811__auto__ = (function (){var statearr_14528 = f__5810__auto__.call(null);
(statearr_14528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___14529);

return statearr_14528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___14529,out))
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
