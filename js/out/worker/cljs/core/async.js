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
if(typeof cljs.core.async.t18864 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18864 = (function (f,fn_handler,meta18865){
this.f = f;
this.fn_handler = fn_handler;
this.meta18865 = meta18865;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18864.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18864.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t18864.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t18864.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18866){
var self__ = this;
var _18866__$1 = this;
return self__.meta18865;
});

cljs.core.async.t18864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18866,meta18865__$1){
var self__ = this;
var _18866__$1 = this;
return (new cljs.core.async.t18864(self__.f,self__.fn_handler,meta18865__$1));
});

cljs.core.async.t18864.cljs$lang$type = true;

cljs.core.async.t18864.cljs$lang$ctorStr = "cljs.core.async/t18864";

cljs.core.async.t18864.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t18864");
});

cljs.core.async.__GT_t18864 = (function __GT_t18864(f__$1,fn_handler__$1,meta18865){
return (new cljs.core.async.t18864(f__$1,fn_handler__$1,meta18865));
});

}

return (new cljs.core.async.t18864(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
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
var G__18868 = buff;
if(G__18868){
var bit__4284__auto__ = null;
if(cljs.core.truth_((function (){var or__3608__auto__ = bit__4284__auto__;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return G__18868.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__18868.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18868);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18868);
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
var val_18869 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18869);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_18869,ret){
return (function (){
return fn1.call(null,val_18869);
});})(val_18869,ret))
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
var n__4490__auto___18870 = n;
var x_18871 = (0);
while(true){
if((x_18871 < n__4490__auto___18870)){
(a[x_18871] = (0));

var G__18872 = (x_18871 + (1));
x_18871 = G__18872;
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

var G__18873 = (i + (1));
i = G__18873;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t18877 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18877 = (function (flag,alt_flag,meta18878){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta18878 = meta18878;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18877.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18877.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t18877.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t18877.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18879){
var self__ = this;
var _18879__$1 = this;
return self__.meta18878;
});})(flag))
;

cljs.core.async.t18877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18879,meta18878__$1){
var self__ = this;
var _18879__$1 = this;
return (new cljs.core.async.t18877(self__.flag,self__.alt_flag,meta18878__$1));
});})(flag))
;

cljs.core.async.t18877.cljs$lang$type = true;

cljs.core.async.t18877.cljs$lang$ctorStr = "cljs.core.async/t18877";

cljs.core.async.t18877.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t18877");
});})(flag))
;

cljs.core.async.__GT_t18877 = ((function (flag){
return (function __GT_t18877(flag__$1,alt_flag__$1,meta18878){
return (new cljs.core.async.t18877(flag__$1,alt_flag__$1,meta18878));
});})(flag))
;

}

return (new cljs.core.async.t18877(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t18883 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18883 = (function (cb,flag,alt_handler,meta18884){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta18884 = meta18884;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18883.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18883.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t18883.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t18883.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18885){
var self__ = this;
var _18885__$1 = this;
return self__.meta18884;
});

cljs.core.async.t18883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18885,meta18884__$1){
var self__ = this;
var _18885__$1 = this;
return (new cljs.core.async.t18883(self__.cb,self__.flag,self__.alt_handler,meta18884__$1));
});

cljs.core.async.t18883.cljs$lang$type = true;

cljs.core.async.t18883.cljs$lang$ctorStr = "cljs.core.async/t18883";

cljs.core.async.t18883.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t18883");
});

cljs.core.async.__GT_t18883 = (function __GT_t18883(cb__$1,flag__$1,alt_handler__$1,meta18884){
return (new cljs.core.async.t18883(cb__$1,flag__$1,alt_handler__$1,meta18884));
});

}

return (new cljs.core.async.t18883(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
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
return (function (p1__18886_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18886_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18887_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18887_SHARP_,port], null));
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
var G__18888 = (i + (1));
i = G__18888;
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
var alts_BANG___delegate = function (ports,p__18889){
var map__18891 = p__18889;
var map__18891__$1 = ((cljs.core.seq_QMARK_.call(null,map__18891))?cljs.core.apply.call(null,cljs.core.hash_map,map__18891):map__18891);
var opts = map__18891__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__18889 = null;
if (arguments.length > 1) {
  p__18889 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__18889);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__18892){
var ports = cljs.core.first(arglist__18892);
var p__18889 = cljs.core.rest(arglist__18892);
return alts_BANG___delegate(ports,p__18889);
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
var c__5809__auto___18987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___18987){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___18987){
return (function (state_18963){
var state_val_18964 = (state_18963[(1)]);
if((state_val_18964 === (7))){
var inst_18959 = (state_18963[(2)]);
var state_18963__$1 = state_18963;
var statearr_18965_18988 = state_18963__$1;
(statearr_18965_18988[(2)] = inst_18959);

(statearr_18965_18988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18964 === (1))){
var state_18963__$1 = state_18963;
var statearr_18966_18989 = state_18963__$1;
(statearr_18966_18989[(2)] = null);

(statearr_18966_18989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18964 === (4))){
var inst_18942 = (state_18963[(7)]);
var inst_18942__$1 = (state_18963[(2)]);
var inst_18943 = (inst_18942__$1 == null);
var state_18963__$1 = (function (){var statearr_18967 = state_18963;
(statearr_18967[(7)] = inst_18942__$1);

return statearr_18967;
})();
if(cljs.core.truth_(inst_18943)){
var statearr_18968_18990 = state_18963__$1;
(statearr_18968_18990[(1)] = (5));

} else {
var statearr_18969_18991 = state_18963__$1;
(statearr_18969_18991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18964 === (13))){
var state_18963__$1 = state_18963;
var statearr_18970_18992 = state_18963__$1;
(statearr_18970_18992[(2)] = null);

(statearr_18970_18992[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18964 === (6))){
var inst_18942 = (state_18963[(7)]);
var state_18963__$1 = state_18963;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18963__$1,(11),to,inst_18942);
} else {
if((state_val_18964 === (3))){
var inst_18961 = (state_18963[(2)]);
var state_18963__$1 = state_18963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18963__$1,inst_18961);
} else {
if((state_val_18964 === (12))){
var state_18963__$1 = state_18963;
var statearr_18971_18993 = state_18963__$1;
(statearr_18971_18993[(2)] = null);

(statearr_18971_18993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18964 === (2))){
var state_18963__$1 = state_18963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18963__$1,(4),from);
} else {
if((state_val_18964 === (11))){
var inst_18952 = (state_18963[(2)]);
var state_18963__$1 = state_18963;
if(cljs.core.truth_(inst_18952)){
var statearr_18972_18994 = state_18963__$1;
(statearr_18972_18994[(1)] = (12));

} else {
var statearr_18973_18995 = state_18963__$1;
(statearr_18973_18995[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18964 === (9))){
var state_18963__$1 = state_18963;
var statearr_18974_18996 = state_18963__$1;
(statearr_18974_18996[(2)] = null);

(statearr_18974_18996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18964 === (5))){
var state_18963__$1 = state_18963;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18975_18997 = state_18963__$1;
(statearr_18975_18997[(1)] = (8));

} else {
var statearr_18976_18998 = state_18963__$1;
(statearr_18976_18998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18964 === (14))){
var inst_18957 = (state_18963[(2)]);
var state_18963__$1 = state_18963;
var statearr_18977_18999 = state_18963__$1;
(statearr_18977_18999[(2)] = inst_18957);

(statearr_18977_18999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18964 === (10))){
var inst_18949 = (state_18963[(2)]);
var state_18963__$1 = state_18963;
var statearr_18978_19000 = state_18963__$1;
(statearr_18978_19000[(2)] = inst_18949);

(statearr_18978_19000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18964 === (8))){
var inst_18946 = cljs.core.async.close_BANG_.call(null,to);
var state_18963__$1 = state_18963;
var statearr_18979_19001 = state_18963__$1;
(statearr_18979_19001[(2)] = inst_18946);

(statearr_18979_19001[(1)] = (10));


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
});})(c__5809__auto___18987))
;
return ((function (switch__5794__auto__,c__5809__auto___18987){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_18983 = [null,null,null,null,null,null,null,null];
(statearr_18983[(0)] = state_machine__5795__auto__);

(statearr_18983[(1)] = (1));

return statearr_18983;
});
var state_machine__5795__auto____1 = (function (state_18963){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_18963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e18984){if((e18984 instanceof Object)){
var ex__5798__auto__ = e18984;
var statearr_18985_19002 = state_18963;
(statearr_18985_19002[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19003 = state_18963;
state_18963 = G__19003;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_18963){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_18963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___18987))
})();
var state__5811__auto__ = (function (){var statearr_18986 = f__5810__auto__.call(null);
(statearr_18986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___18987);

return statearr_18986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___18987))
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
return (function (p__19187){
var vec__19188 = p__19187;
var v = cljs.core.nth.call(null,vec__19188,(0),null);
var p = cljs.core.nth.call(null,vec__19188,(1),null);
var job = vec__19188;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__5809__auto___19370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___19370,res,vec__19188,v,p,job,jobs,results){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___19370,res,vec__19188,v,p,job,jobs,results){
return (function (state_19193){
var state_val_19194 = (state_19193[(1)]);
if((state_val_19194 === (2))){
var inst_19190 = (state_19193[(2)]);
var inst_19191 = cljs.core.async.close_BANG_.call(null,res);
var state_19193__$1 = (function (){var statearr_19195 = state_19193;
(statearr_19195[(7)] = inst_19190);

return statearr_19195;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19193__$1,inst_19191);
} else {
if((state_val_19194 === (1))){
var state_19193__$1 = state_19193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19193__$1,(2),res,v);
} else {
return null;
}
}
});})(c__5809__auto___19370,res,vec__19188,v,p,job,jobs,results))
;
return ((function (switch__5794__auto__,c__5809__auto___19370,res,vec__19188,v,p,job,jobs,results){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_19199 = [null,null,null,null,null,null,null,null];
(statearr_19199[(0)] = state_machine__5795__auto__);

(statearr_19199[(1)] = (1));

return statearr_19199;
});
var state_machine__5795__auto____1 = (function (state_19193){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_19193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e19200){if((e19200 instanceof Object)){
var ex__5798__auto__ = e19200;
var statearr_19201_19371 = state_19193;
(statearr_19201_19371[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19372 = state_19193;
state_19193 = G__19372;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_19193){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_19193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___19370,res,vec__19188,v,p,job,jobs,results))
})();
var state__5811__auto__ = (function (){var statearr_19202 = f__5810__auto__.call(null);
(statearr_19202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___19370);

return statearr_19202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___19370,res,vec__19188,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19203){
var vec__19204 = p__19203;
var v = cljs.core.nth.call(null,vec__19204,(0),null);
var p = cljs.core.nth.call(null,vec__19204,(1),null);
var job = vec__19204;
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
var n__4490__auto___19373 = n;
var __19374 = (0);
while(true){
if((__19374 < n__4490__auto___19373)){
var G__19205_19375 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19205_19375) {
case "async":
var c__5809__auto___19377 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19374,c__5809__auto___19377,G__19205_19375,n__4490__auto___19373,jobs,results,process,async){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (__19374,c__5809__auto___19377,G__19205_19375,n__4490__auto___19373,jobs,results,process,async){
return (function (state_19218){
var state_val_19219 = (state_19218[(1)]);
if((state_val_19219 === (7))){
var inst_19214 = (state_19218[(2)]);
var state_19218__$1 = state_19218;
var statearr_19220_19378 = state_19218__$1;
(statearr_19220_19378[(2)] = inst_19214);

(statearr_19220_19378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19219 === (6))){
var state_19218__$1 = state_19218;
var statearr_19221_19379 = state_19218__$1;
(statearr_19221_19379[(2)] = null);

(statearr_19221_19379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19219 === (5))){
var state_19218__$1 = state_19218;
var statearr_19222_19380 = state_19218__$1;
(statearr_19222_19380[(2)] = null);

(statearr_19222_19380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19219 === (4))){
var inst_19208 = (state_19218[(2)]);
var inst_19209 = async.call(null,inst_19208);
var state_19218__$1 = state_19218;
if(cljs.core.truth_(inst_19209)){
var statearr_19223_19381 = state_19218__$1;
(statearr_19223_19381[(1)] = (5));

} else {
var statearr_19224_19382 = state_19218__$1;
(statearr_19224_19382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19219 === (3))){
var inst_19216 = (state_19218[(2)]);
var state_19218__$1 = state_19218;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19218__$1,inst_19216);
} else {
if((state_val_19219 === (2))){
var state_19218__$1 = state_19218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19218__$1,(4),jobs);
} else {
if((state_val_19219 === (1))){
var state_19218__$1 = state_19218;
var statearr_19225_19383 = state_19218__$1;
(statearr_19225_19383[(2)] = null);

(statearr_19225_19383[(1)] = (2));


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
});})(__19374,c__5809__auto___19377,G__19205_19375,n__4490__auto___19373,jobs,results,process,async))
;
return ((function (__19374,switch__5794__auto__,c__5809__auto___19377,G__19205_19375,n__4490__auto___19373,jobs,results,process,async){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_19229 = [null,null,null,null,null,null,null];
(statearr_19229[(0)] = state_machine__5795__auto__);

(statearr_19229[(1)] = (1));

return statearr_19229;
});
var state_machine__5795__auto____1 = (function (state_19218){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_19218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e19230){if((e19230 instanceof Object)){
var ex__5798__auto__ = e19230;
var statearr_19231_19384 = state_19218;
(statearr_19231_19384[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19385 = state_19218;
state_19218 = G__19385;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_19218){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_19218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(__19374,switch__5794__auto__,c__5809__auto___19377,G__19205_19375,n__4490__auto___19373,jobs,results,process,async))
})();
var state__5811__auto__ = (function (){var statearr_19232 = f__5810__auto__.call(null);
(statearr_19232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___19377);

return statearr_19232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(__19374,c__5809__auto___19377,G__19205_19375,n__4490__auto___19373,jobs,results,process,async))
);


break;
case "compute":
var c__5809__auto___19386 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19374,c__5809__auto___19386,G__19205_19375,n__4490__auto___19373,jobs,results,process,async){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (__19374,c__5809__auto___19386,G__19205_19375,n__4490__auto___19373,jobs,results,process,async){
return (function (state_19245){
var state_val_19246 = (state_19245[(1)]);
if((state_val_19246 === (7))){
var inst_19241 = (state_19245[(2)]);
var state_19245__$1 = state_19245;
var statearr_19247_19387 = state_19245__$1;
(statearr_19247_19387[(2)] = inst_19241);

(statearr_19247_19387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19246 === (6))){
var state_19245__$1 = state_19245;
var statearr_19248_19388 = state_19245__$1;
(statearr_19248_19388[(2)] = null);

(statearr_19248_19388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19246 === (5))){
var state_19245__$1 = state_19245;
var statearr_19249_19389 = state_19245__$1;
(statearr_19249_19389[(2)] = null);

(statearr_19249_19389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19246 === (4))){
var inst_19235 = (state_19245[(2)]);
var inst_19236 = process.call(null,inst_19235);
var state_19245__$1 = state_19245;
if(cljs.core.truth_(inst_19236)){
var statearr_19250_19390 = state_19245__$1;
(statearr_19250_19390[(1)] = (5));

} else {
var statearr_19251_19391 = state_19245__$1;
(statearr_19251_19391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19246 === (3))){
var inst_19243 = (state_19245[(2)]);
var state_19245__$1 = state_19245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19245__$1,inst_19243);
} else {
if((state_val_19246 === (2))){
var state_19245__$1 = state_19245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19245__$1,(4),jobs);
} else {
if((state_val_19246 === (1))){
var state_19245__$1 = state_19245;
var statearr_19252_19392 = state_19245__$1;
(statearr_19252_19392[(2)] = null);

(statearr_19252_19392[(1)] = (2));


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
});})(__19374,c__5809__auto___19386,G__19205_19375,n__4490__auto___19373,jobs,results,process,async))
;
return ((function (__19374,switch__5794__auto__,c__5809__auto___19386,G__19205_19375,n__4490__auto___19373,jobs,results,process,async){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_19256 = [null,null,null,null,null,null,null];
(statearr_19256[(0)] = state_machine__5795__auto__);

(statearr_19256[(1)] = (1));

return statearr_19256;
});
var state_machine__5795__auto____1 = (function (state_19245){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_19245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e19257){if((e19257 instanceof Object)){
var ex__5798__auto__ = e19257;
var statearr_19258_19393 = state_19245;
(statearr_19258_19393[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19394 = state_19245;
state_19245 = G__19394;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_19245){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_19245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(__19374,switch__5794__auto__,c__5809__auto___19386,G__19205_19375,n__4490__auto___19373,jobs,results,process,async))
})();
var state__5811__auto__ = (function (){var statearr_19259 = f__5810__auto__.call(null);
(statearr_19259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___19386);

return statearr_19259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(__19374,c__5809__auto___19386,G__19205_19375,n__4490__auto___19373,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__19395 = (__19374 + (1));
__19374 = G__19395;
continue;
} else {
}
break;
}

var c__5809__auto___19396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___19396,jobs,results,process,async){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___19396,jobs,results,process,async){
return (function (state_19281){
var state_val_19282 = (state_19281[(1)]);
if((state_val_19282 === (9))){
var inst_19274 = (state_19281[(2)]);
var state_19281__$1 = (function (){var statearr_19283 = state_19281;
(statearr_19283[(7)] = inst_19274);

return statearr_19283;
})();
var statearr_19284_19397 = state_19281__$1;
(statearr_19284_19397[(2)] = null);

(statearr_19284_19397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (8))){
var inst_19267 = (state_19281[(8)]);
var inst_19272 = (state_19281[(2)]);
var state_19281__$1 = (function (){var statearr_19285 = state_19281;
(statearr_19285[(9)] = inst_19272);

return statearr_19285;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19281__$1,(9),results,inst_19267);
} else {
if((state_val_19282 === (7))){
var inst_19277 = (state_19281[(2)]);
var state_19281__$1 = state_19281;
var statearr_19286_19398 = state_19281__$1;
(statearr_19286_19398[(2)] = inst_19277);

(statearr_19286_19398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (6))){
var inst_19267 = (state_19281[(8)]);
var inst_19262 = (state_19281[(10)]);
var inst_19267__$1 = cljs.core.async.chan.call(null,(1));
var inst_19268 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19269 = [inst_19262,inst_19267__$1];
var inst_19270 = (new cljs.core.PersistentVector(null,2,(5),inst_19268,inst_19269,null));
var state_19281__$1 = (function (){var statearr_19287 = state_19281;
(statearr_19287[(8)] = inst_19267__$1);

return statearr_19287;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19281__$1,(8),jobs,inst_19270);
} else {
if((state_val_19282 === (5))){
var inst_19265 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19281__$1 = state_19281;
var statearr_19288_19399 = state_19281__$1;
(statearr_19288_19399[(2)] = inst_19265);

(statearr_19288_19399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (4))){
var inst_19262 = (state_19281[(10)]);
var inst_19262__$1 = (state_19281[(2)]);
var inst_19263 = (inst_19262__$1 == null);
var state_19281__$1 = (function (){var statearr_19289 = state_19281;
(statearr_19289[(10)] = inst_19262__$1);

return statearr_19289;
})();
if(cljs.core.truth_(inst_19263)){
var statearr_19290_19400 = state_19281__$1;
(statearr_19290_19400[(1)] = (5));

} else {
var statearr_19291_19401 = state_19281__$1;
(statearr_19291_19401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19282 === (3))){
var inst_19279 = (state_19281[(2)]);
var state_19281__$1 = state_19281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19281__$1,inst_19279);
} else {
if((state_val_19282 === (2))){
var state_19281__$1 = state_19281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19281__$1,(4),from);
} else {
if((state_val_19282 === (1))){
var state_19281__$1 = state_19281;
var statearr_19292_19402 = state_19281__$1;
(statearr_19292_19402[(2)] = null);

(statearr_19292_19402[(1)] = (2));


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
});})(c__5809__auto___19396,jobs,results,process,async))
;
return ((function (switch__5794__auto__,c__5809__auto___19396,jobs,results,process,async){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_19296 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19296[(0)] = state_machine__5795__auto__);

(statearr_19296[(1)] = (1));

return statearr_19296;
});
var state_machine__5795__auto____1 = (function (state_19281){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_19281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e19297){if((e19297 instanceof Object)){
var ex__5798__auto__ = e19297;
var statearr_19298_19403 = state_19281;
(statearr_19298_19403[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19404 = state_19281;
state_19281 = G__19404;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_19281){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_19281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___19396,jobs,results,process,async))
})();
var state__5811__auto__ = (function (){var statearr_19299 = f__5810__auto__.call(null);
(statearr_19299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___19396);

return statearr_19299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___19396,jobs,results,process,async))
);


var c__5809__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto__,jobs,results,process,async){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto__,jobs,results,process,async){
return (function (state_19337){
var state_val_19338 = (state_19337[(1)]);
if((state_val_19338 === (7))){
var inst_19333 = (state_19337[(2)]);
var state_19337__$1 = state_19337;
var statearr_19339_19405 = state_19337__$1;
(statearr_19339_19405[(2)] = inst_19333);

(statearr_19339_19405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19338 === (20))){
var state_19337__$1 = state_19337;
var statearr_19340_19406 = state_19337__$1;
(statearr_19340_19406[(2)] = null);

(statearr_19340_19406[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19338 === (1))){
var state_19337__$1 = state_19337;
var statearr_19341_19407 = state_19337__$1;
(statearr_19341_19407[(2)] = null);

(statearr_19341_19407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19338 === (4))){
var inst_19302 = (state_19337[(7)]);
var inst_19302__$1 = (state_19337[(2)]);
var inst_19303 = (inst_19302__$1 == null);
var state_19337__$1 = (function (){var statearr_19342 = state_19337;
(statearr_19342[(7)] = inst_19302__$1);

return statearr_19342;
})();
if(cljs.core.truth_(inst_19303)){
var statearr_19343_19408 = state_19337__$1;
(statearr_19343_19408[(1)] = (5));

} else {
var statearr_19344_19409 = state_19337__$1;
(statearr_19344_19409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19338 === (15))){
var inst_19315 = (state_19337[(8)]);
var state_19337__$1 = state_19337;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19337__$1,(18),to,inst_19315);
} else {
if((state_val_19338 === (21))){
var inst_19328 = (state_19337[(2)]);
var state_19337__$1 = state_19337;
var statearr_19345_19410 = state_19337__$1;
(statearr_19345_19410[(2)] = inst_19328);

(statearr_19345_19410[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19338 === (13))){
var inst_19330 = (state_19337[(2)]);
var state_19337__$1 = (function (){var statearr_19346 = state_19337;
(statearr_19346[(9)] = inst_19330);

return statearr_19346;
})();
var statearr_19347_19411 = state_19337__$1;
(statearr_19347_19411[(2)] = null);

(statearr_19347_19411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19338 === (6))){
var inst_19302 = (state_19337[(7)]);
var state_19337__$1 = state_19337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19337__$1,(11),inst_19302);
} else {
if((state_val_19338 === (17))){
var inst_19323 = (state_19337[(2)]);
var state_19337__$1 = state_19337;
if(cljs.core.truth_(inst_19323)){
var statearr_19348_19412 = state_19337__$1;
(statearr_19348_19412[(1)] = (19));

} else {
var statearr_19349_19413 = state_19337__$1;
(statearr_19349_19413[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19338 === (3))){
var inst_19335 = (state_19337[(2)]);
var state_19337__$1 = state_19337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19337__$1,inst_19335);
} else {
if((state_val_19338 === (12))){
var inst_19312 = (state_19337[(10)]);
var state_19337__$1 = state_19337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19337__$1,(14),inst_19312);
} else {
if((state_val_19338 === (2))){
var state_19337__$1 = state_19337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19337__$1,(4),results);
} else {
if((state_val_19338 === (19))){
var state_19337__$1 = state_19337;
var statearr_19350_19414 = state_19337__$1;
(statearr_19350_19414[(2)] = null);

(statearr_19350_19414[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19338 === (11))){
var inst_19312 = (state_19337[(2)]);
var state_19337__$1 = (function (){var statearr_19351 = state_19337;
(statearr_19351[(10)] = inst_19312);

return statearr_19351;
})();
var statearr_19352_19415 = state_19337__$1;
(statearr_19352_19415[(2)] = null);

(statearr_19352_19415[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19338 === (9))){
var state_19337__$1 = state_19337;
var statearr_19353_19416 = state_19337__$1;
(statearr_19353_19416[(2)] = null);

(statearr_19353_19416[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19338 === (5))){
var state_19337__$1 = state_19337;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19354_19417 = state_19337__$1;
(statearr_19354_19417[(1)] = (8));

} else {
var statearr_19355_19418 = state_19337__$1;
(statearr_19355_19418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19338 === (14))){
var inst_19317 = (state_19337[(11)]);
var inst_19315 = (state_19337[(8)]);
var inst_19315__$1 = (state_19337[(2)]);
var inst_19316 = (inst_19315__$1 == null);
var inst_19317__$1 = cljs.core.not.call(null,inst_19316);
var state_19337__$1 = (function (){var statearr_19356 = state_19337;
(statearr_19356[(11)] = inst_19317__$1);

(statearr_19356[(8)] = inst_19315__$1);

return statearr_19356;
})();
if(inst_19317__$1){
var statearr_19357_19419 = state_19337__$1;
(statearr_19357_19419[(1)] = (15));

} else {
var statearr_19358_19420 = state_19337__$1;
(statearr_19358_19420[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19338 === (16))){
var inst_19317 = (state_19337[(11)]);
var state_19337__$1 = state_19337;
var statearr_19359_19421 = state_19337__$1;
(statearr_19359_19421[(2)] = inst_19317);

(statearr_19359_19421[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19338 === (10))){
var inst_19309 = (state_19337[(2)]);
var state_19337__$1 = state_19337;
var statearr_19360_19422 = state_19337__$1;
(statearr_19360_19422[(2)] = inst_19309);

(statearr_19360_19422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19338 === (18))){
var inst_19320 = (state_19337[(2)]);
var state_19337__$1 = state_19337;
var statearr_19361_19423 = state_19337__$1;
(statearr_19361_19423[(2)] = inst_19320);

(statearr_19361_19423[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19338 === (8))){
var inst_19306 = cljs.core.async.close_BANG_.call(null,to);
var state_19337__$1 = state_19337;
var statearr_19362_19424 = state_19337__$1;
(statearr_19362_19424[(2)] = inst_19306);

(statearr_19362_19424[(1)] = (10));


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
var statearr_19366 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19366[(0)] = state_machine__5795__auto__);

(statearr_19366[(1)] = (1));

return statearr_19366;
});
var state_machine__5795__auto____1 = (function (state_19337){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_19337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e19367){if((e19367 instanceof Object)){
var ex__5798__auto__ = e19367;
var statearr_19368_19425 = state_19337;
(statearr_19368_19425[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19426 = state_19337;
state_19337 = G__19426;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_19337){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_19337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__,jobs,results,process,async))
})();
var state__5811__auto__ = (function (){var statearr_19369 = f__5810__auto__.call(null);
(statearr_19369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_19369;
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
var c__5809__auto___19527 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___19527,tc,fc){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___19527,tc,fc){
return (function (state_19502){
var state_val_19503 = (state_19502[(1)]);
if((state_val_19503 === (7))){
var inst_19498 = (state_19502[(2)]);
var state_19502__$1 = state_19502;
var statearr_19504_19528 = state_19502__$1;
(statearr_19504_19528[(2)] = inst_19498);

(statearr_19504_19528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (1))){
var state_19502__$1 = state_19502;
var statearr_19505_19529 = state_19502__$1;
(statearr_19505_19529[(2)] = null);

(statearr_19505_19529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (4))){
var inst_19479 = (state_19502[(7)]);
var inst_19479__$1 = (state_19502[(2)]);
var inst_19480 = (inst_19479__$1 == null);
var state_19502__$1 = (function (){var statearr_19506 = state_19502;
(statearr_19506[(7)] = inst_19479__$1);

return statearr_19506;
})();
if(cljs.core.truth_(inst_19480)){
var statearr_19507_19530 = state_19502__$1;
(statearr_19507_19530[(1)] = (5));

} else {
var statearr_19508_19531 = state_19502__$1;
(statearr_19508_19531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (13))){
var state_19502__$1 = state_19502;
var statearr_19509_19532 = state_19502__$1;
(statearr_19509_19532[(2)] = null);

(statearr_19509_19532[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (6))){
var inst_19479 = (state_19502[(7)]);
var inst_19485 = p.call(null,inst_19479);
var state_19502__$1 = state_19502;
if(cljs.core.truth_(inst_19485)){
var statearr_19510_19533 = state_19502__$1;
(statearr_19510_19533[(1)] = (9));

} else {
var statearr_19511_19534 = state_19502__$1;
(statearr_19511_19534[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (3))){
var inst_19500 = (state_19502[(2)]);
var state_19502__$1 = state_19502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19502__$1,inst_19500);
} else {
if((state_val_19503 === (12))){
var state_19502__$1 = state_19502;
var statearr_19512_19535 = state_19502__$1;
(statearr_19512_19535[(2)] = null);

(statearr_19512_19535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (2))){
var state_19502__$1 = state_19502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19502__$1,(4),ch);
} else {
if((state_val_19503 === (11))){
var inst_19479 = (state_19502[(7)]);
var inst_19489 = (state_19502[(2)]);
var state_19502__$1 = state_19502;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19502__$1,(8),inst_19489,inst_19479);
} else {
if((state_val_19503 === (9))){
var state_19502__$1 = state_19502;
var statearr_19513_19536 = state_19502__$1;
(statearr_19513_19536[(2)] = tc);

(statearr_19513_19536[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (5))){
var inst_19482 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19483 = cljs.core.async.close_BANG_.call(null,fc);
var state_19502__$1 = (function (){var statearr_19514 = state_19502;
(statearr_19514[(8)] = inst_19482);

return statearr_19514;
})();
var statearr_19515_19537 = state_19502__$1;
(statearr_19515_19537[(2)] = inst_19483);

(statearr_19515_19537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (14))){
var inst_19496 = (state_19502[(2)]);
var state_19502__$1 = state_19502;
var statearr_19516_19538 = state_19502__$1;
(statearr_19516_19538[(2)] = inst_19496);

(statearr_19516_19538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (10))){
var state_19502__$1 = state_19502;
var statearr_19517_19539 = state_19502__$1;
(statearr_19517_19539[(2)] = fc);

(statearr_19517_19539[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (8))){
var inst_19491 = (state_19502[(2)]);
var state_19502__$1 = state_19502;
if(cljs.core.truth_(inst_19491)){
var statearr_19518_19540 = state_19502__$1;
(statearr_19518_19540[(1)] = (12));

} else {
var statearr_19519_19541 = state_19502__$1;
(statearr_19519_19541[(1)] = (13));

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
});})(c__5809__auto___19527,tc,fc))
;
return ((function (switch__5794__auto__,c__5809__auto___19527,tc,fc){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_19523 = [null,null,null,null,null,null,null,null,null];
(statearr_19523[(0)] = state_machine__5795__auto__);

(statearr_19523[(1)] = (1));

return statearr_19523;
});
var state_machine__5795__auto____1 = (function (state_19502){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_19502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e19524){if((e19524 instanceof Object)){
var ex__5798__auto__ = e19524;
var statearr_19525_19542 = state_19502;
(statearr_19525_19542[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19543 = state_19502;
state_19502 = G__19543;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_19502){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_19502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___19527,tc,fc))
})();
var state__5811__auto__ = (function (){var statearr_19526 = f__5810__auto__.call(null);
(statearr_19526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___19527);

return statearr_19526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___19527,tc,fc))
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
return (function (state_19590){
var state_val_19591 = (state_19590[(1)]);
if((state_val_19591 === (7))){
var inst_19586 = (state_19590[(2)]);
var state_19590__$1 = state_19590;
var statearr_19592_19608 = state_19590__$1;
(statearr_19592_19608[(2)] = inst_19586);

(statearr_19592_19608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19591 === (6))){
var inst_19579 = (state_19590[(7)]);
var inst_19576 = (state_19590[(8)]);
var inst_19583 = f.call(null,inst_19576,inst_19579);
var inst_19576__$1 = inst_19583;
var state_19590__$1 = (function (){var statearr_19593 = state_19590;
(statearr_19593[(8)] = inst_19576__$1);

return statearr_19593;
})();
var statearr_19594_19609 = state_19590__$1;
(statearr_19594_19609[(2)] = null);

(statearr_19594_19609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19591 === (5))){
var inst_19576 = (state_19590[(8)]);
var state_19590__$1 = state_19590;
var statearr_19595_19610 = state_19590__$1;
(statearr_19595_19610[(2)] = inst_19576);

(statearr_19595_19610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19591 === (4))){
var inst_19579 = (state_19590[(7)]);
var inst_19579__$1 = (state_19590[(2)]);
var inst_19580 = (inst_19579__$1 == null);
var state_19590__$1 = (function (){var statearr_19596 = state_19590;
(statearr_19596[(7)] = inst_19579__$1);

return statearr_19596;
})();
if(cljs.core.truth_(inst_19580)){
var statearr_19597_19611 = state_19590__$1;
(statearr_19597_19611[(1)] = (5));

} else {
var statearr_19598_19612 = state_19590__$1;
(statearr_19598_19612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19591 === (3))){
var inst_19588 = (state_19590[(2)]);
var state_19590__$1 = state_19590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19590__$1,inst_19588);
} else {
if((state_val_19591 === (2))){
var state_19590__$1 = state_19590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19590__$1,(4),ch);
} else {
if((state_val_19591 === (1))){
var inst_19576 = init;
var state_19590__$1 = (function (){var statearr_19599 = state_19590;
(statearr_19599[(8)] = inst_19576);

return statearr_19599;
})();
var statearr_19600_19613 = state_19590__$1;
(statearr_19600_19613[(2)] = null);

(statearr_19600_19613[(1)] = (2));


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
var statearr_19604 = [null,null,null,null,null,null,null,null,null];
(statearr_19604[(0)] = state_machine__5795__auto__);

(statearr_19604[(1)] = (1));

return statearr_19604;
});
var state_machine__5795__auto____1 = (function (state_19590){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_19590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e19605){if((e19605 instanceof Object)){
var ex__5798__auto__ = e19605;
var statearr_19606_19614 = state_19590;
(statearr_19606_19614[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19615 = state_19590;
state_19590 = G__19615;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_19590){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_19590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_19607 = f__5810__auto__.call(null);
(statearr_19607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_19607;
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
return (function (state_19689){
var state_val_19690 = (state_19689[(1)]);
if((state_val_19690 === (7))){
var inst_19671 = (state_19689[(2)]);
var state_19689__$1 = state_19689;
var statearr_19691_19714 = state_19689__$1;
(statearr_19691_19714[(2)] = inst_19671);

(statearr_19691_19714[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19690 === (1))){
var inst_19665 = cljs.core.seq.call(null,coll);
var inst_19666 = inst_19665;
var state_19689__$1 = (function (){var statearr_19692 = state_19689;
(statearr_19692[(7)] = inst_19666);

return statearr_19692;
})();
var statearr_19693_19715 = state_19689__$1;
(statearr_19693_19715[(2)] = null);

(statearr_19693_19715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19690 === (4))){
var inst_19666 = (state_19689[(7)]);
var inst_19669 = cljs.core.first.call(null,inst_19666);
var state_19689__$1 = state_19689;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19689__$1,(7),ch,inst_19669);
} else {
if((state_val_19690 === (13))){
var inst_19683 = (state_19689[(2)]);
var state_19689__$1 = state_19689;
var statearr_19694_19716 = state_19689__$1;
(statearr_19694_19716[(2)] = inst_19683);

(statearr_19694_19716[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19690 === (6))){
var inst_19674 = (state_19689[(2)]);
var state_19689__$1 = state_19689;
if(cljs.core.truth_(inst_19674)){
var statearr_19695_19717 = state_19689__$1;
(statearr_19695_19717[(1)] = (8));

} else {
var statearr_19696_19718 = state_19689__$1;
(statearr_19696_19718[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19690 === (3))){
var inst_19687 = (state_19689[(2)]);
var state_19689__$1 = state_19689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19689__$1,inst_19687);
} else {
if((state_val_19690 === (12))){
var state_19689__$1 = state_19689;
var statearr_19697_19719 = state_19689__$1;
(statearr_19697_19719[(2)] = null);

(statearr_19697_19719[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19690 === (2))){
var inst_19666 = (state_19689[(7)]);
var state_19689__$1 = state_19689;
if(cljs.core.truth_(inst_19666)){
var statearr_19698_19720 = state_19689__$1;
(statearr_19698_19720[(1)] = (4));

} else {
var statearr_19699_19721 = state_19689__$1;
(statearr_19699_19721[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19690 === (11))){
var inst_19680 = cljs.core.async.close_BANG_.call(null,ch);
var state_19689__$1 = state_19689;
var statearr_19700_19722 = state_19689__$1;
(statearr_19700_19722[(2)] = inst_19680);

(statearr_19700_19722[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19690 === (9))){
var state_19689__$1 = state_19689;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19701_19723 = state_19689__$1;
(statearr_19701_19723[(1)] = (11));

} else {
var statearr_19702_19724 = state_19689__$1;
(statearr_19702_19724[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19690 === (5))){
var inst_19666 = (state_19689[(7)]);
var state_19689__$1 = state_19689;
var statearr_19703_19725 = state_19689__$1;
(statearr_19703_19725[(2)] = inst_19666);

(statearr_19703_19725[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19690 === (10))){
var inst_19685 = (state_19689[(2)]);
var state_19689__$1 = state_19689;
var statearr_19704_19726 = state_19689__$1;
(statearr_19704_19726[(2)] = inst_19685);

(statearr_19704_19726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19690 === (8))){
var inst_19666 = (state_19689[(7)]);
var inst_19676 = cljs.core.next.call(null,inst_19666);
var inst_19666__$1 = inst_19676;
var state_19689__$1 = (function (){var statearr_19705 = state_19689;
(statearr_19705[(7)] = inst_19666__$1);

return statearr_19705;
})();
var statearr_19706_19727 = state_19689__$1;
(statearr_19706_19727[(2)] = null);

(statearr_19706_19727[(1)] = (2));


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
var statearr_19710 = [null,null,null,null,null,null,null,null];
(statearr_19710[(0)] = state_machine__5795__auto__);

(statearr_19710[(1)] = (1));

return statearr_19710;
});
var state_machine__5795__auto____1 = (function (state_19689){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_19689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e19711){if((e19711 instanceof Object)){
var ex__5798__auto__ = e19711;
var statearr_19712_19728 = state_19689;
(statearr_19712_19728[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19729 = state_19689;
state_19689 = G__19729;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_19689){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_19689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_19713 = f__5810__auto__.call(null);
(statearr_19713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_19713;
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

cljs.core.async.Mux = (function (){var obj19731 = {};
return obj19731;
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


cljs.core.async.Mult = (function (){var obj19733 = {};
return obj19733;
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
if(typeof cljs.core.async.t19955 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19955 = (function (cs,ch,mult,meta19956){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta19956 = meta19956;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19955.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t19955.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t19955.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t19955.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t19955.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19955.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t19955.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19957){
var self__ = this;
var _19957__$1 = this;
return self__.meta19956;
});})(cs))
;

cljs.core.async.t19955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19957,meta19956__$1){
var self__ = this;
var _19957__$1 = this;
return (new cljs.core.async.t19955(self__.cs,self__.ch,self__.mult,meta19956__$1));
});})(cs))
;

cljs.core.async.t19955.cljs$lang$type = true;

cljs.core.async.t19955.cljs$lang$ctorStr = "cljs.core.async/t19955";

cljs.core.async.t19955.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t19955");
});})(cs))
;

cljs.core.async.__GT_t19955 = ((function (cs){
return (function __GT_t19955(cs__$1,ch__$1,mult__$1,meta19956){
return (new cljs.core.async.t19955(cs__$1,ch__$1,mult__$1,meta19956));
});})(cs))
;

}

return (new cljs.core.async.t19955(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
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
var c__5809__auto___20176 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___20176,cs,m,dchan,dctr,done){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___20176,cs,m,dchan,dctr,done){
return (function (state_20088){
var state_val_20089 = (state_20088[(1)]);
if((state_val_20089 === (7))){
var inst_20084 = (state_20088[(2)]);
var state_20088__$1 = state_20088;
var statearr_20090_20177 = state_20088__$1;
(statearr_20090_20177[(2)] = inst_20084);

(statearr_20090_20177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (20))){
var inst_19989 = (state_20088[(7)]);
var inst_19999 = cljs.core.first.call(null,inst_19989);
var inst_20000 = cljs.core.nth.call(null,inst_19999,(0),null);
var inst_20001 = cljs.core.nth.call(null,inst_19999,(1),null);
var state_20088__$1 = (function (){var statearr_20091 = state_20088;
(statearr_20091[(8)] = inst_20000);

return statearr_20091;
})();
if(cljs.core.truth_(inst_20001)){
var statearr_20092_20178 = state_20088__$1;
(statearr_20092_20178[(1)] = (22));

} else {
var statearr_20093_20179 = state_20088__$1;
(statearr_20093_20179[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (27))){
var inst_20031 = (state_20088[(9)]);
var inst_20029 = (state_20088[(10)]);
var inst_20036 = (state_20088[(11)]);
var inst_19960 = (state_20088[(12)]);
var inst_20036__$1 = cljs.core._nth.call(null,inst_20029,inst_20031);
var inst_20037 = cljs.core.async.put_BANG_.call(null,inst_20036__$1,inst_19960,done);
var state_20088__$1 = (function (){var statearr_20094 = state_20088;
(statearr_20094[(11)] = inst_20036__$1);

return statearr_20094;
})();
if(cljs.core.truth_(inst_20037)){
var statearr_20095_20180 = state_20088__$1;
(statearr_20095_20180[(1)] = (30));

} else {
var statearr_20096_20181 = state_20088__$1;
(statearr_20096_20181[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (1))){
var state_20088__$1 = state_20088;
var statearr_20097_20182 = state_20088__$1;
(statearr_20097_20182[(2)] = null);

(statearr_20097_20182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (24))){
var inst_19989 = (state_20088[(7)]);
var inst_20006 = (state_20088[(2)]);
var inst_20007 = cljs.core.next.call(null,inst_19989);
var inst_19969 = inst_20007;
var inst_19970 = null;
var inst_19971 = (0);
var inst_19972 = (0);
var state_20088__$1 = (function (){var statearr_20098 = state_20088;
(statearr_20098[(13)] = inst_19971);

(statearr_20098[(14)] = inst_19972);

(statearr_20098[(15)] = inst_20006);

(statearr_20098[(16)] = inst_19970);

(statearr_20098[(17)] = inst_19969);

return statearr_20098;
})();
var statearr_20099_20183 = state_20088__$1;
(statearr_20099_20183[(2)] = null);

(statearr_20099_20183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (39))){
var state_20088__$1 = state_20088;
var statearr_20103_20184 = state_20088__$1;
(statearr_20103_20184[(2)] = null);

(statearr_20103_20184[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (4))){
var inst_19960 = (state_20088[(12)]);
var inst_19960__$1 = (state_20088[(2)]);
var inst_19961 = (inst_19960__$1 == null);
var state_20088__$1 = (function (){var statearr_20104 = state_20088;
(statearr_20104[(12)] = inst_19960__$1);

return statearr_20104;
})();
if(cljs.core.truth_(inst_19961)){
var statearr_20105_20185 = state_20088__$1;
(statearr_20105_20185[(1)] = (5));

} else {
var statearr_20106_20186 = state_20088__$1;
(statearr_20106_20186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (15))){
var inst_19971 = (state_20088[(13)]);
var inst_19972 = (state_20088[(14)]);
var inst_19970 = (state_20088[(16)]);
var inst_19969 = (state_20088[(17)]);
var inst_19985 = (state_20088[(2)]);
var inst_19986 = (inst_19972 + (1));
var tmp20100 = inst_19971;
var tmp20101 = inst_19970;
var tmp20102 = inst_19969;
var inst_19969__$1 = tmp20102;
var inst_19970__$1 = tmp20101;
var inst_19971__$1 = tmp20100;
var inst_19972__$1 = inst_19986;
var state_20088__$1 = (function (){var statearr_20107 = state_20088;
(statearr_20107[(18)] = inst_19985);

(statearr_20107[(13)] = inst_19971__$1);

(statearr_20107[(14)] = inst_19972__$1);

(statearr_20107[(16)] = inst_19970__$1);

(statearr_20107[(17)] = inst_19969__$1);

return statearr_20107;
})();
var statearr_20108_20187 = state_20088__$1;
(statearr_20108_20187[(2)] = null);

(statearr_20108_20187[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (21))){
var inst_20010 = (state_20088[(2)]);
var state_20088__$1 = state_20088;
var statearr_20112_20188 = state_20088__$1;
(statearr_20112_20188[(2)] = inst_20010);

(statearr_20112_20188[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (31))){
var inst_20036 = (state_20088[(11)]);
var inst_20040 = done.call(null,null);
var inst_20041 = cljs.core.async.untap_STAR_.call(null,m,inst_20036);
var state_20088__$1 = (function (){var statearr_20113 = state_20088;
(statearr_20113[(19)] = inst_20040);

return statearr_20113;
})();
var statearr_20114_20189 = state_20088__$1;
(statearr_20114_20189[(2)] = inst_20041);

(statearr_20114_20189[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (32))){
var inst_20031 = (state_20088[(9)]);
var inst_20028 = (state_20088[(20)]);
var inst_20029 = (state_20088[(10)]);
var inst_20030 = (state_20088[(21)]);
var inst_20043 = (state_20088[(2)]);
var inst_20044 = (inst_20031 + (1));
var tmp20109 = inst_20028;
var tmp20110 = inst_20029;
var tmp20111 = inst_20030;
var inst_20028__$1 = tmp20109;
var inst_20029__$1 = tmp20110;
var inst_20030__$1 = tmp20111;
var inst_20031__$1 = inst_20044;
var state_20088__$1 = (function (){var statearr_20115 = state_20088;
(statearr_20115[(9)] = inst_20031__$1);

(statearr_20115[(20)] = inst_20028__$1);

(statearr_20115[(10)] = inst_20029__$1);

(statearr_20115[(21)] = inst_20030__$1);

(statearr_20115[(22)] = inst_20043);

return statearr_20115;
})();
var statearr_20116_20190 = state_20088__$1;
(statearr_20116_20190[(2)] = null);

(statearr_20116_20190[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (40))){
var inst_20056 = (state_20088[(23)]);
var inst_20060 = done.call(null,null);
var inst_20061 = cljs.core.async.untap_STAR_.call(null,m,inst_20056);
var state_20088__$1 = (function (){var statearr_20117 = state_20088;
(statearr_20117[(24)] = inst_20060);

return statearr_20117;
})();
var statearr_20118_20191 = state_20088__$1;
(statearr_20118_20191[(2)] = inst_20061);

(statearr_20118_20191[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (33))){
var inst_20047 = (state_20088[(25)]);
var inst_20049 = cljs.core.chunked_seq_QMARK_.call(null,inst_20047);
var state_20088__$1 = state_20088;
if(inst_20049){
var statearr_20119_20192 = state_20088__$1;
(statearr_20119_20192[(1)] = (36));

} else {
var statearr_20120_20193 = state_20088__$1;
(statearr_20120_20193[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (13))){
var inst_19979 = (state_20088[(26)]);
var inst_19982 = cljs.core.async.close_BANG_.call(null,inst_19979);
var state_20088__$1 = state_20088;
var statearr_20121_20194 = state_20088__$1;
(statearr_20121_20194[(2)] = inst_19982);

(statearr_20121_20194[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (22))){
var inst_20000 = (state_20088[(8)]);
var inst_20003 = cljs.core.async.close_BANG_.call(null,inst_20000);
var state_20088__$1 = state_20088;
var statearr_20122_20195 = state_20088__$1;
(statearr_20122_20195[(2)] = inst_20003);

(statearr_20122_20195[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (36))){
var inst_20047 = (state_20088[(25)]);
var inst_20051 = cljs.core.chunk_first.call(null,inst_20047);
var inst_20052 = cljs.core.chunk_rest.call(null,inst_20047);
var inst_20053 = cljs.core.count.call(null,inst_20051);
var inst_20028 = inst_20052;
var inst_20029 = inst_20051;
var inst_20030 = inst_20053;
var inst_20031 = (0);
var state_20088__$1 = (function (){var statearr_20123 = state_20088;
(statearr_20123[(9)] = inst_20031);

(statearr_20123[(20)] = inst_20028);

(statearr_20123[(10)] = inst_20029);

(statearr_20123[(21)] = inst_20030);

return statearr_20123;
})();
var statearr_20124_20196 = state_20088__$1;
(statearr_20124_20196[(2)] = null);

(statearr_20124_20196[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (41))){
var inst_20047 = (state_20088[(25)]);
var inst_20063 = (state_20088[(2)]);
var inst_20064 = cljs.core.next.call(null,inst_20047);
var inst_20028 = inst_20064;
var inst_20029 = null;
var inst_20030 = (0);
var inst_20031 = (0);
var state_20088__$1 = (function (){var statearr_20125 = state_20088;
(statearr_20125[(9)] = inst_20031);

(statearr_20125[(27)] = inst_20063);

(statearr_20125[(20)] = inst_20028);

(statearr_20125[(10)] = inst_20029);

(statearr_20125[(21)] = inst_20030);

return statearr_20125;
})();
var statearr_20126_20197 = state_20088__$1;
(statearr_20126_20197[(2)] = null);

(statearr_20126_20197[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (43))){
var state_20088__$1 = state_20088;
var statearr_20127_20198 = state_20088__$1;
(statearr_20127_20198[(2)] = null);

(statearr_20127_20198[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (29))){
var inst_20072 = (state_20088[(2)]);
var state_20088__$1 = state_20088;
var statearr_20128_20199 = state_20088__$1;
(statearr_20128_20199[(2)] = inst_20072);

(statearr_20128_20199[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (44))){
var inst_20081 = (state_20088[(2)]);
var state_20088__$1 = (function (){var statearr_20129 = state_20088;
(statearr_20129[(28)] = inst_20081);

return statearr_20129;
})();
var statearr_20130_20200 = state_20088__$1;
(statearr_20130_20200[(2)] = null);

(statearr_20130_20200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (6))){
var inst_20020 = (state_20088[(29)]);
var inst_20019 = cljs.core.deref.call(null,cs);
var inst_20020__$1 = cljs.core.keys.call(null,inst_20019);
var inst_20021 = cljs.core.count.call(null,inst_20020__$1);
var inst_20022 = cljs.core.reset_BANG_.call(null,dctr,inst_20021);
var inst_20027 = cljs.core.seq.call(null,inst_20020__$1);
var inst_20028 = inst_20027;
var inst_20029 = null;
var inst_20030 = (0);
var inst_20031 = (0);
var state_20088__$1 = (function (){var statearr_20131 = state_20088;
(statearr_20131[(9)] = inst_20031);

(statearr_20131[(20)] = inst_20028);

(statearr_20131[(10)] = inst_20029);

(statearr_20131[(21)] = inst_20030);

(statearr_20131[(30)] = inst_20022);

(statearr_20131[(29)] = inst_20020__$1);

return statearr_20131;
})();
var statearr_20132_20201 = state_20088__$1;
(statearr_20132_20201[(2)] = null);

(statearr_20132_20201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (28))){
var inst_20028 = (state_20088[(20)]);
var inst_20047 = (state_20088[(25)]);
var inst_20047__$1 = cljs.core.seq.call(null,inst_20028);
var state_20088__$1 = (function (){var statearr_20133 = state_20088;
(statearr_20133[(25)] = inst_20047__$1);

return statearr_20133;
})();
if(inst_20047__$1){
var statearr_20134_20202 = state_20088__$1;
(statearr_20134_20202[(1)] = (33));

} else {
var statearr_20135_20203 = state_20088__$1;
(statearr_20135_20203[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (25))){
var inst_20031 = (state_20088[(9)]);
var inst_20030 = (state_20088[(21)]);
var inst_20033 = (inst_20031 < inst_20030);
var inst_20034 = inst_20033;
var state_20088__$1 = state_20088;
if(cljs.core.truth_(inst_20034)){
var statearr_20136_20204 = state_20088__$1;
(statearr_20136_20204[(1)] = (27));

} else {
var statearr_20137_20205 = state_20088__$1;
(statearr_20137_20205[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (34))){
var state_20088__$1 = state_20088;
var statearr_20138_20206 = state_20088__$1;
(statearr_20138_20206[(2)] = null);

(statearr_20138_20206[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (17))){
var state_20088__$1 = state_20088;
var statearr_20139_20207 = state_20088__$1;
(statearr_20139_20207[(2)] = null);

(statearr_20139_20207[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (3))){
var inst_20086 = (state_20088[(2)]);
var state_20088__$1 = state_20088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20088__$1,inst_20086);
} else {
if((state_val_20089 === (12))){
var inst_20015 = (state_20088[(2)]);
var state_20088__$1 = state_20088;
var statearr_20140_20208 = state_20088__$1;
(statearr_20140_20208[(2)] = inst_20015);

(statearr_20140_20208[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (2))){
var state_20088__$1 = state_20088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20088__$1,(4),ch);
} else {
if((state_val_20089 === (23))){
var state_20088__$1 = state_20088;
var statearr_20141_20209 = state_20088__$1;
(statearr_20141_20209[(2)] = null);

(statearr_20141_20209[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (35))){
var inst_20070 = (state_20088[(2)]);
var state_20088__$1 = state_20088;
var statearr_20142_20210 = state_20088__$1;
(statearr_20142_20210[(2)] = inst_20070);

(statearr_20142_20210[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (19))){
var inst_19989 = (state_20088[(7)]);
var inst_19993 = cljs.core.chunk_first.call(null,inst_19989);
var inst_19994 = cljs.core.chunk_rest.call(null,inst_19989);
var inst_19995 = cljs.core.count.call(null,inst_19993);
var inst_19969 = inst_19994;
var inst_19970 = inst_19993;
var inst_19971 = inst_19995;
var inst_19972 = (0);
var state_20088__$1 = (function (){var statearr_20143 = state_20088;
(statearr_20143[(13)] = inst_19971);

(statearr_20143[(14)] = inst_19972);

(statearr_20143[(16)] = inst_19970);

(statearr_20143[(17)] = inst_19969);

return statearr_20143;
})();
var statearr_20144_20211 = state_20088__$1;
(statearr_20144_20211[(2)] = null);

(statearr_20144_20211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (11))){
var inst_19989 = (state_20088[(7)]);
var inst_19969 = (state_20088[(17)]);
var inst_19989__$1 = cljs.core.seq.call(null,inst_19969);
var state_20088__$1 = (function (){var statearr_20145 = state_20088;
(statearr_20145[(7)] = inst_19989__$1);

return statearr_20145;
})();
if(inst_19989__$1){
var statearr_20146_20212 = state_20088__$1;
(statearr_20146_20212[(1)] = (16));

} else {
var statearr_20147_20213 = state_20088__$1;
(statearr_20147_20213[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (9))){
var inst_20017 = (state_20088[(2)]);
var state_20088__$1 = state_20088;
var statearr_20148_20214 = state_20088__$1;
(statearr_20148_20214[(2)] = inst_20017);

(statearr_20148_20214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (5))){
var inst_19967 = cljs.core.deref.call(null,cs);
var inst_19968 = cljs.core.seq.call(null,inst_19967);
var inst_19969 = inst_19968;
var inst_19970 = null;
var inst_19971 = (0);
var inst_19972 = (0);
var state_20088__$1 = (function (){var statearr_20149 = state_20088;
(statearr_20149[(13)] = inst_19971);

(statearr_20149[(14)] = inst_19972);

(statearr_20149[(16)] = inst_19970);

(statearr_20149[(17)] = inst_19969);

return statearr_20149;
})();
var statearr_20150_20215 = state_20088__$1;
(statearr_20150_20215[(2)] = null);

(statearr_20150_20215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (14))){
var state_20088__$1 = state_20088;
var statearr_20151_20216 = state_20088__$1;
(statearr_20151_20216[(2)] = null);

(statearr_20151_20216[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (45))){
var inst_20078 = (state_20088[(2)]);
var state_20088__$1 = state_20088;
var statearr_20152_20217 = state_20088__$1;
(statearr_20152_20217[(2)] = inst_20078);

(statearr_20152_20217[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (26))){
var inst_20020 = (state_20088[(29)]);
var inst_20074 = (state_20088[(2)]);
var inst_20075 = cljs.core.seq.call(null,inst_20020);
var state_20088__$1 = (function (){var statearr_20153 = state_20088;
(statearr_20153[(31)] = inst_20074);

return statearr_20153;
})();
if(inst_20075){
var statearr_20154_20218 = state_20088__$1;
(statearr_20154_20218[(1)] = (42));

} else {
var statearr_20155_20219 = state_20088__$1;
(statearr_20155_20219[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (16))){
var inst_19989 = (state_20088[(7)]);
var inst_19991 = cljs.core.chunked_seq_QMARK_.call(null,inst_19989);
var state_20088__$1 = state_20088;
if(inst_19991){
var statearr_20156_20220 = state_20088__$1;
(statearr_20156_20220[(1)] = (19));

} else {
var statearr_20157_20221 = state_20088__$1;
(statearr_20157_20221[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (38))){
var inst_20067 = (state_20088[(2)]);
var state_20088__$1 = state_20088;
var statearr_20158_20222 = state_20088__$1;
(statearr_20158_20222[(2)] = inst_20067);

(statearr_20158_20222[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (30))){
var state_20088__$1 = state_20088;
var statearr_20159_20223 = state_20088__$1;
(statearr_20159_20223[(2)] = null);

(statearr_20159_20223[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (10))){
var inst_19972 = (state_20088[(14)]);
var inst_19970 = (state_20088[(16)]);
var inst_19978 = cljs.core._nth.call(null,inst_19970,inst_19972);
var inst_19979 = cljs.core.nth.call(null,inst_19978,(0),null);
var inst_19980 = cljs.core.nth.call(null,inst_19978,(1),null);
var state_20088__$1 = (function (){var statearr_20160 = state_20088;
(statearr_20160[(26)] = inst_19979);

return statearr_20160;
})();
if(cljs.core.truth_(inst_19980)){
var statearr_20161_20224 = state_20088__$1;
(statearr_20161_20224[(1)] = (13));

} else {
var statearr_20162_20225 = state_20088__$1;
(statearr_20162_20225[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (18))){
var inst_20013 = (state_20088[(2)]);
var state_20088__$1 = state_20088;
var statearr_20163_20226 = state_20088__$1;
(statearr_20163_20226[(2)] = inst_20013);

(statearr_20163_20226[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (42))){
var state_20088__$1 = state_20088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20088__$1,(45),dchan);
} else {
if((state_val_20089 === (37))){
var inst_20056 = (state_20088[(23)]);
var inst_20047 = (state_20088[(25)]);
var inst_19960 = (state_20088[(12)]);
var inst_20056__$1 = cljs.core.first.call(null,inst_20047);
var inst_20057 = cljs.core.async.put_BANG_.call(null,inst_20056__$1,inst_19960,done);
var state_20088__$1 = (function (){var statearr_20164 = state_20088;
(statearr_20164[(23)] = inst_20056__$1);

return statearr_20164;
})();
if(cljs.core.truth_(inst_20057)){
var statearr_20165_20227 = state_20088__$1;
(statearr_20165_20227[(1)] = (39));

} else {
var statearr_20166_20228 = state_20088__$1;
(statearr_20166_20228[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (8))){
var inst_19971 = (state_20088[(13)]);
var inst_19972 = (state_20088[(14)]);
var inst_19974 = (inst_19972 < inst_19971);
var inst_19975 = inst_19974;
var state_20088__$1 = state_20088;
if(cljs.core.truth_(inst_19975)){
var statearr_20167_20229 = state_20088__$1;
(statearr_20167_20229[(1)] = (10));

} else {
var statearr_20168_20230 = state_20088__$1;
(statearr_20168_20230[(1)] = (11));

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
});})(c__5809__auto___20176,cs,m,dchan,dctr,done))
;
return ((function (switch__5794__auto__,c__5809__auto___20176,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_20172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20172[(0)] = state_machine__5795__auto__);

(statearr_20172[(1)] = (1));

return statearr_20172;
});
var state_machine__5795__auto____1 = (function (state_20088){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_20088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e20173){if((e20173 instanceof Object)){
var ex__5798__auto__ = e20173;
var statearr_20174_20231 = state_20088;
(statearr_20174_20231[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20232 = state_20088;
state_20088 = G__20232;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_20088){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_20088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___20176,cs,m,dchan,dctr,done))
})();
var state__5811__auto__ = (function (){var statearr_20175 = f__5810__auto__.call(null);
(statearr_20175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___20176);

return statearr_20175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___20176,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj20234 = {};
return obj20234;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__20235){
var map__20240 = p__20235;
var map__20240__$1 = ((cljs.core.seq_QMARK_.call(null,map__20240))?cljs.core.apply.call(null,cljs.core.hash_map,map__20240):map__20240);
var opts = map__20240__$1;
var statearr_20241_20244 = state;
(statearr_20241_20244[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__20240,map__20240__$1,opts){
return (function (val){
var statearr_20242_20245 = state;
(statearr_20242_20245[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20240,map__20240__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_20243_20246 = state;
(statearr_20243_20246[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__20235 = null;
if (arguments.length > 3) {
  p__20235 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__20235);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__20247){
var state = cljs.core.first(arglist__20247);
arglist__20247 = cljs.core.next(arglist__20247);
var cont_block = cljs.core.first(arglist__20247);
arglist__20247 = cljs.core.next(arglist__20247);
var ports = cljs.core.first(arglist__20247);
var p__20235 = cljs.core.rest(arglist__20247);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__20235);
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
if(typeof cljs.core.async.t20367 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20367 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20368){
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
this.meta20368 = meta20368;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20367.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t20367.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20367.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20367.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20367.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20367.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t20367.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20367.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20367.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20369){
var self__ = this;
var _20369__$1 = this;
return self__.meta20368;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20369,meta20368__$1){
var self__ = this;
var _20369__$1 = this;
return (new cljs.core.async.t20367(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20368__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20367.cljs$lang$type = true;

cljs.core.async.t20367.cljs$lang$ctorStr = "cljs.core.async/t20367";

cljs.core.async.t20367.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t20367");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t20367 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t20367(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20368){
return (new cljs.core.async.t20367(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20368));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t20367(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
})()
;
var c__5809__auto___20486 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___20486,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___20486,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20439){
var state_val_20440 = (state_20439[(1)]);
if((state_val_20440 === (7))){
var inst_20383 = (state_20439[(7)]);
var inst_20388 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20383);
var state_20439__$1 = state_20439;
var statearr_20441_20487 = state_20439__$1;
(statearr_20441_20487[(2)] = inst_20388);

(statearr_20441_20487[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20440 === (20))){
var inst_20398 = (state_20439[(8)]);
var state_20439__$1 = state_20439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20439__$1,(23),out,inst_20398);
} else {
if((state_val_20440 === (1))){
var inst_20373 = (state_20439[(9)]);
var inst_20373__$1 = calc_state.call(null);
var inst_20374 = cljs.core.seq_QMARK_.call(null,inst_20373__$1);
var state_20439__$1 = (function (){var statearr_20442 = state_20439;
(statearr_20442[(9)] = inst_20373__$1);

return statearr_20442;
})();
if(inst_20374){
var statearr_20443_20488 = state_20439__$1;
(statearr_20443_20488[(1)] = (2));

} else {
var statearr_20444_20489 = state_20439__$1;
(statearr_20444_20489[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20440 === (24))){
var inst_20391 = (state_20439[(10)]);
var inst_20383 = inst_20391;
var state_20439__$1 = (function (){var statearr_20445 = state_20439;
(statearr_20445[(7)] = inst_20383);

return statearr_20445;
})();
var statearr_20446_20490 = state_20439__$1;
(statearr_20446_20490[(2)] = null);

(statearr_20446_20490[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20440 === (4))){
var inst_20373 = (state_20439[(9)]);
var inst_20379 = (state_20439[(2)]);
var inst_20380 = cljs.core.get.call(null,inst_20379,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20381 = cljs.core.get.call(null,inst_20379,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20382 = cljs.core.get.call(null,inst_20379,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20383 = inst_20373;
var state_20439__$1 = (function (){var statearr_20447 = state_20439;
(statearr_20447[(11)] = inst_20382);

(statearr_20447[(12)] = inst_20380);

(statearr_20447[(7)] = inst_20383);

(statearr_20447[(13)] = inst_20381);

return statearr_20447;
})();
var statearr_20448_20491 = state_20439__$1;
(statearr_20448_20491[(2)] = null);

(statearr_20448_20491[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20440 === (15))){
var state_20439__$1 = state_20439;
var statearr_20449_20492 = state_20439__$1;
(statearr_20449_20492[(2)] = null);

(statearr_20449_20492[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20440 === (21))){
var inst_20391 = (state_20439[(10)]);
var inst_20383 = inst_20391;
var state_20439__$1 = (function (){var statearr_20450 = state_20439;
(statearr_20450[(7)] = inst_20383);

return statearr_20450;
})();
var statearr_20451_20493 = state_20439__$1;
(statearr_20451_20493[(2)] = null);

(statearr_20451_20493[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20440 === (13))){
var inst_20435 = (state_20439[(2)]);
var state_20439__$1 = state_20439;
var statearr_20452_20494 = state_20439__$1;
(statearr_20452_20494[(2)] = inst_20435);

(statearr_20452_20494[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20440 === (22))){
var inst_20433 = (state_20439[(2)]);
var state_20439__$1 = state_20439;
var statearr_20453_20495 = state_20439__$1;
(statearr_20453_20495[(2)] = inst_20433);

(statearr_20453_20495[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20440 === (6))){
var inst_20437 = (state_20439[(2)]);
var state_20439__$1 = state_20439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20439__$1,inst_20437);
} else {
if((state_val_20440 === (25))){
var state_20439__$1 = state_20439;
var statearr_20454_20496 = state_20439__$1;
(statearr_20454_20496[(2)] = null);

(statearr_20454_20496[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20440 === (17))){
var inst_20413 = (state_20439[(14)]);
var state_20439__$1 = state_20439;
var statearr_20455_20497 = state_20439__$1;
(statearr_20455_20497[(2)] = inst_20413);

(statearr_20455_20497[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20440 === (3))){
var inst_20373 = (state_20439[(9)]);
var state_20439__$1 = state_20439;
var statearr_20456_20498 = state_20439__$1;
(statearr_20456_20498[(2)] = inst_20373);

(statearr_20456_20498[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20440 === (12))){
var inst_20394 = (state_20439[(15)]);
var inst_20399 = (state_20439[(16)]);
var inst_20413 = (state_20439[(14)]);
var inst_20413__$1 = inst_20394.call(null,inst_20399);
var state_20439__$1 = (function (){var statearr_20457 = state_20439;
(statearr_20457[(14)] = inst_20413__$1);

return statearr_20457;
})();
if(cljs.core.truth_(inst_20413__$1)){
var statearr_20458_20499 = state_20439__$1;
(statearr_20458_20499[(1)] = (17));

} else {
var statearr_20459_20500 = state_20439__$1;
(statearr_20459_20500[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20440 === (2))){
var inst_20373 = (state_20439[(9)]);
var inst_20376 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20373);
var state_20439__$1 = state_20439;
var statearr_20460_20501 = state_20439__$1;
(statearr_20460_20501[(2)] = inst_20376);

(statearr_20460_20501[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20440 === (23))){
var inst_20424 = (state_20439[(2)]);
var state_20439__$1 = state_20439;
if(cljs.core.truth_(inst_20424)){
var statearr_20461_20502 = state_20439__$1;
(statearr_20461_20502[(1)] = (24));

} else {
var statearr_20462_20503 = state_20439__$1;
(statearr_20462_20503[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20440 === (19))){
var inst_20421 = (state_20439[(2)]);
var state_20439__$1 = state_20439;
if(cljs.core.truth_(inst_20421)){
var statearr_20463_20504 = state_20439__$1;
(statearr_20463_20504[(1)] = (20));

} else {
var statearr_20464_20505 = state_20439__$1;
(statearr_20464_20505[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20440 === (11))){
var inst_20398 = (state_20439[(8)]);
var inst_20404 = (inst_20398 == null);
var state_20439__$1 = state_20439;
if(cljs.core.truth_(inst_20404)){
var statearr_20465_20506 = state_20439__$1;
(statearr_20465_20506[(1)] = (14));

} else {
var statearr_20466_20507 = state_20439__$1;
(statearr_20466_20507[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20440 === (9))){
var inst_20391 = (state_20439[(10)]);
var inst_20391__$1 = (state_20439[(2)]);
var inst_20392 = cljs.core.get.call(null,inst_20391__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20393 = cljs.core.get.call(null,inst_20391__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20394 = cljs.core.get.call(null,inst_20391__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_20439__$1 = (function (){var statearr_20467 = state_20439;
(statearr_20467[(17)] = inst_20393);

(statearr_20467[(15)] = inst_20394);

(statearr_20467[(10)] = inst_20391__$1);

return statearr_20467;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20439__$1,(10),inst_20392);
} else {
if((state_val_20440 === (5))){
var inst_20383 = (state_20439[(7)]);
var inst_20386 = cljs.core.seq_QMARK_.call(null,inst_20383);
var state_20439__$1 = state_20439;
if(inst_20386){
var statearr_20468_20508 = state_20439__$1;
(statearr_20468_20508[(1)] = (7));

} else {
var statearr_20469_20509 = state_20439__$1;
(statearr_20469_20509[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20440 === (14))){
var inst_20399 = (state_20439[(16)]);
var inst_20406 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20399);
var state_20439__$1 = state_20439;
var statearr_20470_20510 = state_20439__$1;
(statearr_20470_20510[(2)] = inst_20406);

(statearr_20470_20510[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20440 === (26))){
var inst_20429 = (state_20439[(2)]);
var state_20439__$1 = state_20439;
var statearr_20471_20511 = state_20439__$1;
(statearr_20471_20511[(2)] = inst_20429);

(statearr_20471_20511[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20440 === (16))){
var inst_20409 = (state_20439[(2)]);
var inst_20410 = calc_state.call(null);
var inst_20383 = inst_20410;
var state_20439__$1 = (function (){var statearr_20472 = state_20439;
(statearr_20472[(18)] = inst_20409);

(statearr_20472[(7)] = inst_20383);

return statearr_20472;
})();
var statearr_20473_20512 = state_20439__$1;
(statearr_20473_20512[(2)] = null);

(statearr_20473_20512[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20440 === (10))){
var inst_20398 = (state_20439[(8)]);
var inst_20399 = (state_20439[(16)]);
var inst_20397 = (state_20439[(2)]);
var inst_20398__$1 = cljs.core.nth.call(null,inst_20397,(0),null);
var inst_20399__$1 = cljs.core.nth.call(null,inst_20397,(1),null);
var inst_20400 = (inst_20398__$1 == null);
var inst_20401 = cljs.core._EQ_.call(null,inst_20399__$1,change);
var inst_20402 = (inst_20400) || (inst_20401);
var state_20439__$1 = (function (){var statearr_20474 = state_20439;
(statearr_20474[(8)] = inst_20398__$1);

(statearr_20474[(16)] = inst_20399__$1);

return statearr_20474;
})();
if(cljs.core.truth_(inst_20402)){
var statearr_20475_20513 = state_20439__$1;
(statearr_20475_20513[(1)] = (11));

} else {
var statearr_20476_20514 = state_20439__$1;
(statearr_20476_20514[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20440 === (18))){
var inst_20393 = (state_20439[(17)]);
var inst_20394 = (state_20439[(15)]);
var inst_20399 = (state_20439[(16)]);
var inst_20416 = cljs.core.empty_QMARK_.call(null,inst_20394);
var inst_20417 = inst_20393.call(null,inst_20399);
var inst_20418 = cljs.core.not.call(null,inst_20417);
var inst_20419 = (inst_20416) && (inst_20418);
var state_20439__$1 = state_20439;
var statearr_20477_20515 = state_20439__$1;
(statearr_20477_20515[(2)] = inst_20419);

(statearr_20477_20515[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20440 === (8))){
var inst_20383 = (state_20439[(7)]);
var state_20439__$1 = state_20439;
var statearr_20478_20516 = state_20439__$1;
(statearr_20478_20516[(2)] = inst_20383);

(statearr_20478_20516[(1)] = (9));


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
});})(c__5809__auto___20486,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__5794__auto__,c__5809__auto___20486,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_20482 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20482[(0)] = state_machine__5795__auto__);

(statearr_20482[(1)] = (1));

return statearr_20482;
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
}catch (e20483){if((e20483 instanceof Object)){
var ex__5798__auto__ = e20483;
var statearr_20484_20517 = state_20439;
(statearr_20484_20517[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20518 = state_20439;
state_20439 = G__20518;
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
;})(switch__5794__auto__,c__5809__auto___20486,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__5811__auto__ = (function (){var statearr_20485 = f__5810__auto__.call(null);
(statearr_20485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___20486);

return statearr_20485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___20486,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj20520 = {};
return obj20520;
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
return (function (p1__20521_SHARP_){
if(cljs.core.truth_(p1__20521_SHARP_.call(null,topic))){
return p1__20521_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20521_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3608__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t20644 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20644 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta20645){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta20645 = meta20645;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20644.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t20644.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t20644.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t20644.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t20644.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t20644.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20644.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t20644.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20646){
var self__ = this;
var _20646__$1 = this;
return self__.meta20645;
});})(mults,ensure_mult))
;

cljs.core.async.t20644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20646,meta20645__$1){
var self__ = this;
var _20646__$1 = this;
return (new cljs.core.async.t20644(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta20645__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t20644.cljs$lang$type = true;

cljs.core.async.t20644.cljs$lang$ctorStr = "cljs.core.async/t20644";

cljs.core.async.t20644.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t20644");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t20644 = ((function (mults,ensure_mult){
return (function __GT_t20644(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20645){
return (new cljs.core.async.t20644(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20645));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t20644(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
})()
;
var c__5809__auto___20766 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___20766,mults,ensure_mult,p){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___20766,mults,ensure_mult,p){
return (function (state_20718){
var state_val_20719 = (state_20718[(1)]);
if((state_val_20719 === (7))){
var inst_20714 = (state_20718[(2)]);
var state_20718__$1 = state_20718;
var statearr_20720_20767 = state_20718__$1;
(statearr_20720_20767[(2)] = inst_20714);

(statearr_20720_20767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (20))){
var state_20718__$1 = state_20718;
var statearr_20721_20768 = state_20718__$1;
(statearr_20721_20768[(2)] = null);

(statearr_20721_20768[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (1))){
var state_20718__$1 = state_20718;
var statearr_20722_20769 = state_20718__$1;
(statearr_20722_20769[(2)] = null);

(statearr_20722_20769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (24))){
var inst_20697 = (state_20718[(7)]);
var inst_20706 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20697);
var state_20718__$1 = state_20718;
var statearr_20723_20770 = state_20718__$1;
(statearr_20723_20770[(2)] = inst_20706);

(statearr_20723_20770[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (4))){
var inst_20649 = (state_20718[(8)]);
var inst_20649__$1 = (state_20718[(2)]);
var inst_20650 = (inst_20649__$1 == null);
var state_20718__$1 = (function (){var statearr_20724 = state_20718;
(statearr_20724[(8)] = inst_20649__$1);

return statearr_20724;
})();
if(cljs.core.truth_(inst_20650)){
var statearr_20725_20771 = state_20718__$1;
(statearr_20725_20771[(1)] = (5));

} else {
var statearr_20726_20772 = state_20718__$1;
(statearr_20726_20772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (15))){
var inst_20691 = (state_20718[(2)]);
var state_20718__$1 = state_20718;
var statearr_20727_20773 = state_20718__$1;
(statearr_20727_20773[(2)] = inst_20691);

(statearr_20727_20773[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (21))){
var inst_20711 = (state_20718[(2)]);
var state_20718__$1 = (function (){var statearr_20728 = state_20718;
(statearr_20728[(9)] = inst_20711);

return statearr_20728;
})();
var statearr_20729_20774 = state_20718__$1;
(statearr_20729_20774[(2)] = null);

(statearr_20729_20774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (13))){
var inst_20673 = (state_20718[(10)]);
var inst_20675 = cljs.core.chunked_seq_QMARK_.call(null,inst_20673);
var state_20718__$1 = state_20718;
if(inst_20675){
var statearr_20730_20775 = state_20718__$1;
(statearr_20730_20775[(1)] = (16));

} else {
var statearr_20731_20776 = state_20718__$1;
(statearr_20731_20776[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (22))){
var inst_20703 = (state_20718[(2)]);
var state_20718__$1 = state_20718;
if(cljs.core.truth_(inst_20703)){
var statearr_20732_20777 = state_20718__$1;
(statearr_20732_20777[(1)] = (23));

} else {
var statearr_20733_20778 = state_20718__$1;
(statearr_20733_20778[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (6))){
var inst_20697 = (state_20718[(7)]);
var inst_20699 = (state_20718[(11)]);
var inst_20649 = (state_20718[(8)]);
var inst_20697__$1 = topic_fn.call(null,inst_20649);
var inst_20698 = cljs.core.deref.call(null,mults);
var inst_20699__$1 = cljs.core.get.call(null,inst_20698,inst_20697__$1);
var state_20718__$1 = (function (){var statearr_20734 = state_20718;
(statearr_20734[(7)] = inst_20697__$1);

(statearr_20734[(11)] = inst_20699__$1);

return statearr_20734;
})();
if(cljs.core.truth_(inst_20699__$1)){
var statearr_20735_20779 = state_20718__$1;
(statearr_20735_20779[(1)] = (19));

} else {
var statearr_20736_20780 = state_20718__$1;
(statearr_20736_20780[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (25))){
var inst_20708 = (state_20718[(2)]);
var state_20718__$1 = state_20718;
var statearr_20737_20781 = state_20718__$1;
(statearr_20737_20781[(2)] = inst_20708);

(statearr_20737_20781[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (17))){
var inst_20673 = (state_20718[(10)]);
var inst_20682 = cljs.core.first.call(null,inst_20673);
var inst_20683 = cljs.core.async.muxch_STAR_.call(null,inst_20682);
var inst_20684 = cljs.core.async.close_BANG_.call(null,inst_20683);
var inst_20685 = cljs.core.next.call(null,inst_20673);
var inst_20659 = inst_20685;
var inst_20660 = null;
var inst_20661 = (0);
var inst_20662 = (0);
var state_20718__$1 = (function (){var statearr_20738 = state_20718;
(statearr_20738[(12)] = inst_20660);

(statearr_20738[(13)] = inst_20662);

(statearr_20738[(14)] = inst_20659);

(statearr_20738[(15)] = inst_20684);

(statearr_20738[(16)] = inst_20661);

return statearr_20738;
})();
var statearr_20739_20782 = state_20718__$1;
(statearr_20739_20782[(2)] = null);

(statearr_20739_20782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (3))){
var inst_20716 = (state_20718[(2)]);
var state_20718__$1 = state_20718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20718__$1,inst_20716);
} else {
if((state_val_20719 === (12))){
var inst_20693 = (state_20718[(2)]);
var state_20718__$1 = state_20718;
var statearr_20740_20783 = state_20718__$1;
(statearr_20740_20783[(2)] = inst_20693);

(statearr_20740_20783[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (2))){
var state_20718__$1 = state_20718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20718__$1,(4),ch);
} else {
if((state_val_20719 === (23))){
var state_20718__$1 = state_20718;
var statearr_20741_20784 = state_20718__$1;
(statearr_20741_20784[(2)] = null);

(statearr_20741_20784[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (19))){
var inst_20699 = (state_20718[(11)]);
var inst_20649 = (state_20718[(8)]);
var inst_20701 = cljs.core.async.muxch_STAR_.call(null,inst_20699);
var state_20718__$1 = state_20718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20718__$1,(22),inst_20701,inst_20649);
} else {
if((state_val_20719 === (11))){
var inst_20673 = (state_20718[(10)]);
var inst_20659 = (state_20718[(14)]);
var inst_20673__$1 = cljs.core.seq.call(null,inst_20659);
var state_20718__$1 = (function (){var statearr_20742 = state_20718;
(statearr_20742[(10)] = inst_20673__$1);

return statearr_20742;
})();
if(inst_20673__$1){
var statearr_20743_20785 = state_20718__$1;
(statearr_20743_20785[(1)] = (13));

} else {
var statearr_20744_20786 = state_20718__$1;
(statearr_20744_20786[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (9))){
var inst_20695 = (state_20718[(2)]);
var state_20718__$1 = state_20718;
var statearr_20745_20787 = state_20718__$1;
(statearr_20745_20787[(2)] = inst_20695);

(statearr_20745_20787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (5))){
var inst_20656 = cljs.core.deref.call(null,mults);
var inst_20657 = cljs.core.vals.call(null,inst_20656);
var inst_20658 = cljs.core.seq.call(null,inst_20657);
var inst_20659 = inst_20658;
var inst_20660 = null;
var inst_20661 = (0);
var inst_20662 = (0);
var state_20718__$1 = (function (){var statearr_20746 = state_20718;
(statearr_20746[(12)] = inst_20660);

(statearr_20746[(13)] = inst_20662);

(statearr_20746[(14)] = inst_20659);

(statearr_20746[(16)] = inst_20661);

return statearr_20746;
})();
var statearr_20747_20788 = state_20718__$1;
(statearr_20747_20788[(2)] = null);

(statearr_20747_20788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (14))){
var state_20718__$1 = state_20718;
var statearr_20751_20789 = state_20718__$1;
(statearr_20751_20789[(2)] = null);

(statearr_20751_20789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (16))){
var inst_20673 = (state_20718[(10)]);
var inst_20677 = cljs.core.chunk_first.call(null,inst_20673);
var inst_20678 = cljs.core.chunk_rest.call(null,inst_20673);
var inst_20679 = cljs.core.count.call(null,inst_20677);
var inst_20659 = inst_20678;
var inst_20660 = inst_20677;
var inst_20661 = inst_20679;
var inst_20662 = (0);
var state_20718__$1 = (function (){var statearr_20752 = state_20718;
(statearr_20752[(12)] = inst_20660);

(statearr_20752[(13)] = inst_20662);

(statearr_20752[(14)] = inst_20659);

(statearr_20752[(16)] = inst_20661);

return statearr_20752;
})();
var statearr_20753_20790 = state_20718__$1;
(statearr_20753_20790[(2)] = null);

(statearr_20753_20790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (10))){
var inst_20660 = (state_20718[(12)]);
var inst_20662 = (state_20718[(13)]);
var inst_20659 = (state_20718[(14)]);
var inst_20661 = (state_20718[(16)]);
var inst_20667 = cljs.core._nth.call(null,inst_20660,inst_20662);
var inst_20668 = cljs.core.async.muxch_STAR_.call(null,inst_20667);
var inst_20669 = cljs.core.async.close_BANG_.call(null,inst_20668);
var inst_20670 = (inst_20662 + (1));
var tmp20748 = inst_20660;
var tmp20749 = inst_20659;
var tmp20750 = inst_20661;
var inst_20659__$1 = tmp20749;
var inst_20660__$1 = tmp20748;
var inst_20661__$1 = tmp20750;
var inst_20662__$1 = inst_20670;
var state_20718__$1 = (function (){var statearr_20754 = state_20718;
(statearr_20754[(12)] = inst_20660__$1);

(statearr_20754[(13)] = inst_20662__$1);

(statearr_20754[(17)] = inst_20669);

(statearr_20754[(14)] = inst_20659__$1);

(statearr_20754[(16)] = inst_20661__$1);

return statearr_20754;
})();
var statearr_20755_20791 = state_20718__$1;
(statearr_20755_20791[(2)] = null);

(statearr_20755_20791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (18))){
var inst_20688 = (state_20718[(2)]);
var state_20718__$1 = state_20718;
var statearr_20756_20792 = state_20718__$1;
(statearr_20756_20792[(2)] = inst_20688);

(statearr_20756_20792[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (8))){
var inst_20662 = (state_20718[(13)]);
var inst_20661 = (state_20718[(16)]);
var inst_20664 = (inst_20662 < inst_20661);
var inst_20665 = inst_20664;
var state_20718__$1 = state_20718;
if(cljs.core.truth_(inst_20665)){
var statearr_20757_20793 = state_20718__$1;
(statearr_20757_20793[(1)] = (10));

} else {
var statearr_20758_20794 = state_20718__$1;
(statearr_20758_20794[(1)] = (11));

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
});})(c__5809__auto___20766,mults,ensure_mult,p))
;
return ((function (switch__5794__auto__,c__5809__auto___20766,mults,ensure_mult,p){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_20762 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20762[(0)] = state_machine__5795__auto__);

(statearr_20762[(1)] = (1));

return statearr_20762;
});
var state_machine__5795__auto____1 = (function (state_20718){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_20718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e20763){if((e20763 instanceof Object)){
var ex__5798__auto__ = e20763;
var statearr_20764_20795 = state_20718;
(statearr_20764_20795[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20796 = state_20718;
state_20718 = G__20796;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_20718){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_20718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___20766,mults,ensure_mult,p))
})();
var state__5811__auto__ = (function (){var statearr_20765 = f__5810__auto__.call(null);
(statearr_20765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___20766);

return statearr_20765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___20766,mults,ensure_mult,p))
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
var c__5809__auto___20933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___20933,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___20933,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20903){
var state_val_20904 = (state_20903[(1)]);
if((state_val_20904 === (7))){
var state_20903__$1 = state_20903;
var statearr_20905_20934 = state_20903__$1;
(statearr_20905_20934[(2)] = null);

(statearr_20905_20934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (1))){
var state_20903__$1 = state_20903;
var statearr_20906_20935 = state_20903__$1;
(statearr_20906_20935[(2)] = null);

(statearr_20906_20935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (4))){
var inst_20867 = (state_20903[(7)]);
var inst_20869 = (inst_20867 < cnt);
var state_20903__$1 = state_20903;
if(cljs.core.truth_(inst_20869)){
var statearr_20907_20936 = state_20903__$1;
(statearr_20907_20936[(1)] = (6));

} else {
var statearr_20908_20937 = state_20903__$1;
(statearr_20908_20937[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (15))){
var inst_20899 = (state_20903[(2)]);
var state_20903__$1 = state_20903;
var statearr_20909_20938 = state_20903__$1;
(statearr_20909_20938[(2)] = inst_20899);

(statearr_20909_20938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (13))){
var inst_20892 = cljs.core.async.close_BANG_.call(null,out);
var state_20903__$1 = state_20903;
var statearr_20910_20939 = state_20903__$1;
(statearr_20910_20939[(2)] = inst_20892);

(statearr_20910_20939[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (6))){
var state_20903__$1 = state_20903;
var statearr_20911_20940 = state_20903__$1;
(statearr_20911_20940[(2)] = null);

(statearr_20911_20940[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (3))){
var inst_20901 = (state_20903[(2)]);
var state_20903__$1 = state_20903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20903__$1,inst_20901);
} else {
if((state_val_20904 === (12))){
var inst_20889 = (state_20903[(8)]);
var inst_20889__$1 = (state_20903[(2)]);
var inst_20890 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20889__$1);
var state_20903__$1 = (function (){var statearr_20912 = state_20903;
(statearr_20912[(8)] = inst_20889__$1);

return statearr_20912;
})();
if(cljs.core.truth_(inst_20890)){
var statearr_20913_20941 = state_20903__$1;
(statearr_20913_20941[(1)] = (13));

} else {
var statearr_20914_20942 = state_20903__$1;
(statearr_20914_20942[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (2))){
var inst_20866 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20867 = (0);
var state_20903__$1 = (function (){var statearr_20915 = state_20903;
(statearr_20915[(7)] = inst_20867);

(statearr_20915[(9)] = inst_20866);

return statearr_20915;
})();
var statearr_20916_20943 = state_20903__$1;
(statearr_20916_20943[(2)] = null);

(statearr_20916_20943[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (11))){
var inst_20867 = (state_20903[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20903,(10),Object,null,(9));
var inst_20876 = chs__$1.call(null,inst_20867);
var inst_20877 = done.call(null,inst_20867);
var inst_20878 = cljs.core.async.take_BANG_.call(null,inst_20876,inst_20877);
var state_20903__$1 = state_20903;
var statearr_20917_20944 = state_20903__$1;
(statearr_20917_20944[(2)] = inst_20878);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20903__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (9))){
var inst_20867 = (state_20903[(7)]);
var inst_20880 = (state_20903[(2)]);
var inst_20881 = (inst_20867 + (1));
var inst_20867__$1 = inst_20881;
var state_20903__$1 = (function (){var statearr_20918 = state_20903;
(statearr_20918[(7)] = inst_20867__$1);

(statearr_20918[(10)] = inst_20880);

return statearr_20918;
})();
var statearr_20919_20945 = state_20903__$1;
(statearr_20919_20945[(2)] = null);

(statearr_20919_20945[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (5))){
var inst_20887 = (state_20903[(2)]);
var state_20903__$1 = (function (){var statearr_20920 = state_20903;
(statearr_20920[(11)] = inst_20887);

return statearr_20920;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20903__$1,(12),dchan);
} else {
if((state_val_20904 === (14))){
var inst_20889 = (state_20903[(8)]);
var inst_20894 = cljs.core.apply.call(null,f,inst_20889);
var state_20903__$1 = state_20903;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20903__$1,(16),out,inst_20894);
} else {
if((state_val_20904 === (16))){
var inst_20896 = (state_20903[(2)]);
var state_20903__$1 = (function (){var statearr_20921 = state_20903;
(statearr_20921[(12)] = inst_20896);

return statearr_20921;
})();
var statearr_20922_20946 = state_20903__$1;
(statearr_20922_20946[(2)] = null);

(statearr_20922_20946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (10))){
var inst_20871 = (state_20903[(2)]);
var inst_20872 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20903__$1 = (function (){var statearr_20923 = state_20903;
(statearr_20923[(13)] = inst_20871);

return statearr_20923;
})();
var statearr_20924_20947 = state_20903__$1;
(statearr_20924_20947[(2)] = inst_20872);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20903__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (8))){
var inst_20885 = (state_20903[(2)]);
var state_20903__$1 = state_20903;
var statearr_20925_20948 = state_20903__$1;
(statearr_20925_20948[(2)] = inst_20885);

(statearr_20925_20948[(1)] = (5));


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
});})(c__5809__auto___20933,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__5794__auto__,c__5809__auto___20933,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_20929 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20929[(0)] = state_machine__5795__auto__);

(statearr_20929[(1)] = (1));

return statearr_20929;
});
var state_machine__5795__auto____1 = (function (state_20903){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_20903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e20930){if((e20930 instanceof Object)){
var ex__5798__auto__ = e20930;
var statearr_20931_20949 = state_20903;
(statearr_20931_20949[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20950 = state_20903;
state_20903 = G__20950;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_20903){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_20903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___20933,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__5811__auto__ = (function (){var statearr_20932 = f__5810__auto__.call(null);
(statearr_20932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___20933);

return statearr_20932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___20933,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__5809__auto___21058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___21058,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___21058,out){
return (function (state_21034){
var state_val_21035 = (state_21034[(1)]);
if((state_val_21035 === (7))){
var inst_21013 = (state_21034[(7)]);
var inst_21014 = (state_21034[(8)]);
var inst_21013__$1 = (state_21034[(2)]);
var inst_21014__$1 = cljs.core.nth.call(null,inst_21013__$1,(0),null);
var inst_21015 = cljs.core.nth.call(null,inst_21013__$1,(1),null);
var inst_21016 = (inst_21014__$1 == null);
var state_21034__$1 = (function (){var statearr_21036 = state_21034;
(statearr_21036[(9)] = inst_21015);

(statearr_21036[(7)] = inst_21013__$1);

(statearr_21036[(8)] = inst_21014__$1);

return statearr_21036;
})();
if(cljs.core.truth_(inst_21016)){
var statearr_21037_21059 = state_21034__$1;
(statearr_21037_21059[(1)] = (8));

} else {
var statearr_21038_21060 = state_21034__$1;
(statearr_21038_21060[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21035 === (1))){
var inst_21005 = cljs.core.vec.call(null,chs);
var inst_21006 = inst_21005;
var state_21034__$1 = (function (){var statearr_21039 = state_21034;
(statearr_21039[(10)] = inst_21006);

return statearr_21039;
})();
var statearr_21040_21061 = state_21034__$1;
(statearr_21040_21061[(2)] = null);

(statearr_21040_21061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21035 === (4))){
var inst_21006 = (state_21034[(10)]);
var state_21034__$1 = state_21034;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21034__$1,(7),inst_21006);
} else {
if((state_val_21035 === (6))){
var inst_21030 = (state_21034[(2)]);
var state_21034__$1 = state_21034;
var statearr_21041_21062 = state_21034__$1;
(statearr_21041_21062[(2)] = inst_21030);

(statearr_21041_21062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21035 === (3))){
var inst_21032 = (state_21034[(2)]);
var state_21034__$1 = state_21034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21034__$1,inst_21032);
} else {
if((state_val_21035 === (2))){
var inst_21006 = (state_21034[(10)]);
var inst_21008 = cljs.core.count.call(null,inst_21006);
var inst_21009 = (inst_21008 > (0));
var state_21034__$1 = state_21034;
if(cljs.core.truth_(inst_21009)){
var statearr_21043_21063 = state_21034__$1;
(statearr_21043_21063[(1)] = (4));

} else {
var statearr_21044_21064 = state_21034__$1;
(statearr_21044_21064[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21035 === (11))){
var inst_21006 = (state_21034[(10)]);
var inst_21023 = (state_21034[(2)]);
var tmp21042 = inst_21006;
var inst_21006__$1 = tmp21042;
var state_21034__$1 = (function (){var statearr_21045 = state_21034;
(statearr_21045[(11)] = inst_21023);

(statearr_21045[(10)] = inst_21006__$1);

return statearr_21045;
})();
var statearr_21046_21065 = state_21034__$1;
(statearr_21046_21065[(2)] = null);

(statearr_21046_21065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21035 === (9))){
var inst_21014 = (state_21034[(8)]);
var state_21034__$1 = state_21034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21034__$1,(11),out,inst_21014);
} else {
if((state_val_21035 === (5))){
var inst_21028 = cljs.core.async.close_BANG_.call(null,out);
var state_21034__$1 = state_21034;
var statearr_21047_21066 = state_21034__$1;
(statearr_21047_21066[(2)] = inst_21028);

(statearr_21047_21066[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21035 === (10))){
var inst_21026 = (state_21034[(2)]);
var state_21034__$1 = state_21034;
var statearr_21048_21067 = state_21034__$1;
(statearr_21048_21067[(2)] = inst_21026);

(statearr_21048_21067[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21035 === (8))){
var inst_21015 = (state_21034[(9)]);
var inst_21013 = (state_21034[(7)]);
var inst_21006 = (state_21034[(10)]);
var inst_21014 = (state_21034[(8)]);
var inst_21018 = (function (){var c = inst_21015;
var v = inst_21014;
var vec__21011 = inst_21013;
var cs = inst_21006;
return ((function (c,v,vec__21011,cs,inst_21015,inst_21013,inst_21006,inst_21014,state_val_21035,c__5809__auto___21058,out){
return (function (p1__20951_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__20951_SHARP_);
});
;})(c,v,vec__21011,cs,inst_21015,inst_21013,inst_21006,inst_21014,state_val_21035,c__5809__auto___21058,out))
})();
var inst_21019 = cljs.core.filterv.call(null,inst_21018,inst_21006);
var inst_21006__$1 = inst_21019;
var state_21034__$1 = (function (){var statearr_21049 = state_21034;
(statearr_21049[(10)] = inst_21006__$1);

return statearr_21049;
})();
var statearr_21050_21068 = state_21034__$1;
(statearr_21050_21068[(2)] = null);

(statearr_21050_21068[(1)] = (2));


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
});})(c__5809__auto___21058,out))
;
return ((function (switch__5794__auto__,c__5809__auto___21058,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_21054 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21054[(0)] = state_machine__5795__auto__);

(statearr_21054[(1)] = (1));

return statearr_21054;
});
var state_machine__5795__auto____1 = (function (state_21034){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_21034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e21055){if((e21055 instanceof Object)){
var ex__5798__auto__ = e21055;
var statearr_21056_21069 = state_21034;
(statearr_21056_21069[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21070 = state_21034;
state_21034 = G__21070;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_21034){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_21034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___21058,out))
})();
var state__5811__auto__ = (function (){var statearr_21057 = f__5810__auto__.call(null);
(statearr_21057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___21058);

return statearr_21057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___21058,out))
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
var c__5809__auto___21163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___21163,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___21163,out){
return (function (state_21140){
var state_val_21141 = (state_21140[(1)]);
if((state_val_21141 === (7))){
var inst_21122 = (state_21140[(7)]);
var inst_21122__$1 = (state_21140[(2)]);
var inst_21123 = (inst_21122__$1 == null);
var inst_21124 = cljs.core.not.call(null,inst_21123);
var state_21140__$1 = (function (){var statearr_21142 = state_21140;
(statearr_21142[(7)] = inst_21122__$1);

return statearr_21142;
})();
if(inst_21124){
var statearr_21143_21164 = state_21140__$1;
(statearr_21143_21164[(1)] = (8));

} else {
var statearr_21144_21165 = state_21140__$1;
(statearr_21144_21165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21141 === (1))){
var inst_21117 = (0);
var state_21140__$1 = (function (){var statearr_21145 = state_21140;
(statearr_21145[(8)] = inst_21117);

return statearr_21145;
})();
var statearr_21146_21166 = state_21140__$1;
(statearr_21146_21166[(2)] = null);

(statearr_21146_21166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21141 === (4))){
var state_21140__$1 = state_21140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21140__$1,(7),ch);
} else {
if((state_val_21141 === (6))){
var inst_21135 = (state_21140[(2)]);
var state_21140__$1 = state_21140;
var statearr_21147_21167 = state_21140__$1;
(statearr_21147_21167[(2)] = inst_21135);

(statearr_21147_21167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21141 === (3))){
var inst_21137 = (state_21140[(2)]);
var inst_21138 = cljs.core.async.close_BANG_.call(null,out);
var state_21140__$1 = (function (){var statearr_21148 = state_21140;
(statearr_21148[(9)] = inst_21137);

return statearr_21148;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21140__$1,inst_21138);
} else {
if((state_val_21141 === (2))){
var inst_21117 = (state_21140[(8)]);
var inst_21119 = (inst_21117 < n);
var state_21140__$1 = state_21140;
if(cljs.core.truth_(inst_21119)){
var statearr_21149_21168 = state_21140__$1;
(statearr_21149_21168[(1)] = (4));

} else {
var statearr_21150_21169 = state_21140__$1;
(statearr_21150_21169[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21141 === (11))){
var inst_21117 = (state_21140[(8)]);
var inst_21127 = (state_21140[(2)]);
var inst_21128 = (inst_21117 + (1));
var inst_21117__$1 = inst_21128;
var state_21140__$1 = (function (){var statearr_21151 = state_21140;
(statearr_21151[(10)] = inst_21127);

(statearr_21151[(8)] = inst_21117__$1);

return statearr_21151;
})();
var statearr_21152_21170 = state_21140__$1;
(statearr_21152_21170[(2)] = null);

(statearr_21152_21170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21141 === (9))){
var state_21140__$1 = state_21140;
var statearr_21153_21171 = state_21140__$1;
(statearr_21153_21171[(2)] = null);

(statearr_21153_21171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21141 === (5))){
var state_21140__$1 = state_21140;
var statearr_21154_21172 = state_21140__$1;
(statearr_21154_21172[(2)] = null);

(statearr_21154_21172[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21141 === (10))){
var inst_21132 = (state_21140[(2)]);
var state_21140__$1 = state_21140;
var statearr_21155_21173 = state_21140__$1;
(statearr_21155_21173[(2)] = inst_21132);

(statearr_21155_21173[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21141 === (8))){
var inst_21122 = (state_21140[(7)]);
var state_21140__$1 = state_21140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21140__$1,(11),out,inst_21122);
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
});})(c__5809__auto___21163,out))
;
return ((function (switch__5794__auto__,c__5809__auto___21163,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_21159 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21159[(0)] = state_machine__5795__auto__);

(statearr_21159[(1)] = (1));

return statearr_21159;
});
var state_machine__5795__auto____1 = (function (state_21140){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_21140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e21160){if((e21160 instanceof Object)){
var ex__5798__auto__ = e21160;
var statearr_21161_21174 = state_21140;
(statearr_21161_21174[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21175 = state_21140;
state_21140 = G__21175;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_21140){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_21140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___21163,out))
})();
var state__5811__auto__ = (function (){var statearr_21162 = f__5810__auto__.call(null);
(statearr_21162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___21163);

return statearr_21162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___21163,out))
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
if(typeof cljs.core.async.t21183 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21183 = (function (ch,f,map_LT_,meta21184){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21184 = meta21184;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21183.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21183.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t21183.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21183.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t21186 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21186 = (function (fn1,_,meta21184,map_LT_,f,ch,meta21187){
this.fn1 = fn1;
this._ = _;
this.meta21184 = meta21184;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21187 = meta21187;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21186.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21186.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t21186.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21176_SHARP_){
return f1.call(null,(((p1__21176_SHARP_ == null))?null:self__.f.call(null,p1__21176_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t21186.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21188){
var self__ = this;
var _21188__$1 = this;
return self__.meta21187;
});})(___$1))
;

cljs.core.async.t21186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21188,meta21187__$1){
var self__ = this;
var _21188__$1 = this;
return (new cljs.core.async.t21186(self__.fn1,self__._,self__.meta21184,self__.map_LT_,self__.f,self__.ch,meta21187__$1));
});})(___$1))
;

cljs.core.async.t21186.cljs$lang$type = true;

cljs.core.async.t21186.cljs$lang$ctorStr = "cljs.core.async/t21186";

cljs.core.async.t21186.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t21186");
});})(___$1))
;

cljs.core.async.__GT_t21186 = ((function (___$1){
return (function __GT_t21186(fn1__$1,___$2,meta21184__$1,map_LT___$1,f__$1,ch__$1,meta21187){
return (new cljs.core.async.t21186(fn1__$1,___$2,meta21184__$1,map_LT___$1,f__$1,ch__$1,meta21187));
});})(___$1))
;

}

return (new cljs.core.async.t21186(fn1,___$1,self__.meta21184,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
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

cljs.core.async.t21183.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21183.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21183.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t21183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21185){
var self__ = this;
var _21185__$1 = this;
return self__.meta21184;
});

cljs.core.async.t21183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21185,meta21184__$1){
var self__ = this;
var _21185__$1 = this;
return (new cljs.core.async.t21183(self__.ch,self__.f,self__.map_LT_,meta21184__$1));
});

cljs.core.async.t21183.cljs$lang$type = true;

cljs.core.async.t21183.cljs$lang$ctorStr = "cljs.core.async/t21183";

cljs.core.async.t21183.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t21183");
});

cljs.core.async.__GT_t21183 = (function __GT_t21183(ch__$1,f__$1,map_LT___$1,meta21184){
return (new cljs.core.async.t21183(ch__$1,f__$1,map_LT___$1,meta21184));
});

}

return (new cljs.core.async.t21183(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t21192 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21192 = (function (ch,f,map_GT_,meta21193){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta21193 = meta21193;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21192.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21192.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t21192.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21192.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t21192.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21192.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21194){
var self__ = this;
var _21194__$1 = this;
return self__.meta21193;
});

cljs.core.async.t21192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21194,meta21193__$1){
var self__ = this;
var _21194__$1 = this;
return (new cljs.core.async.t21192(self__.ch,self__.f,self__.map_GT_,meta21193__$1));
});

cljs.core.async.t21192.cljs$lang$type = true;

cljs.core.async.t21192.cljs$lang$ctorStr = "cljs.core.async/t21192";

cljs.core.async.t21192.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t21192");
});

cljs.core.async.__GT_t21192 = (function __GT_t21192(ch__$1,f__$1,map_GT___$1,meta21193){
return (new cljs.core.async.t21192(ch__$1,f__$1,map_GT___$1,meta21193));
});

}

return (new cljs.core.async.t21192(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t21198 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21198 = (function (ch,p,filter_GT_,meta21199){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta21199 = meta21199;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21198.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21198.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t21198.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21198.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t21198.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21198.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21198.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t21198.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21200){
var self__ = this;
var _21200__$1 = this;
return self__.meta21199;
});

cljs.core.async.t21198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21200,meta21199__$1){
var self__ = this;
var _21200__$1 = this;
return (new cljs.core.async.t21198(self__.ch,self__.p,self__.filter_GT_,meta21199__$1));
});

cljs.core.async.t21198.cljs$lang$type = true;

cljs.core.async.t21198.cljs$lang$ctorStr = "cljs.core.async/t21198";

cljs.core.async.t21198.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t21198");
});

cljs.core.async.__GT_t21198 = (function __GT_t21198(ch__$1,p__$1,filter_GT___$1,meta21199){
return (new cljs.core.async.t21198(ch__$1,p__$1,filter_GT___$1,meta21199));
});

}

return (new cljs.core.async.t21198(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/worker/cljs/core/async.cljs"], null)));
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
var c__5809__auto___21283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___21283,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___21283,out){
return (function (state_21262){
var state_val_21263 = (state_21262[(1)]);
if((state_val_21263 === (7))){
var inst_21258 = (state_21262[(2)]);
var state_21262__$1 = state_21262;
var statearr_21264_21284 = state_21262__$1;
(statearr_21264_21284[(2)] = inst_21258);

(statearr_21264_21284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (1))){
var state_21262__$1 = state_21262;
var statearr_21265_21285 = state_21262__$1;
(statearr_21265_21285[(2)] = null);

(statearr_21265_21285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (4))){
var inst_21244 = (state_21262[(7)]);
var inst_21244__$1 = (state_21262[(2)]);
var inst_21245 = (inst_21244__$1 == null);
var state_21262__$1 = (function (){var statearr_21266 = state_21262;
(statearr_21266[(7)] = inst_21244__$1);

return statearr_21266;
})();
if(cljs.core.truth_(inst_21245)){
var statearr_21267_21286 = state_21262__$1;
(statearr_21267_21286[(1)] = (5));

} else {
var statearr_21268_21287 = state_21262__$1;
(statearr_21268_21287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (6))){
var inst_21244 = (state_21262[(7)]);
var inst_21249 = p.call(null,inst_21244);
var state_21262__$1 = state_21262;
if(cljs.core.truth_(inst_21249)){
var statearr_21269_21288 = state_21262__$1;
(statearr_21269_21288[(1)] = (8));

} else {
var statearr_21270_21289 = state_21262__$1;
(statearr_21270_21289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (3))){
var inst_21260 = (state_21262[(2)]);
var state_21262__$1 = state_21262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21262__$1,inst_21260);
} else {
if((state_val_21263 === (2))){
var state_21262__$1 = state_21262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21262__$1,(4),ch);
} else {
if((state_val_21263 === (11))){
var inst_21252 = (state_21262[(2)]);
var state_21262__$1 = state_21262;
var statearr_21271_21290 = state_21262__$1;
(statearr_21271_21290[(2)] = inst_21252);

(statearr_21271_21290[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (9))){
var state_21262__$1 = state_21262;
var statearr_21272_21291 = state_21262__$1;
(statearr_21272_21291[(2)] = null);

(statearr_21272_21291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (5))){
var inst_21247 = cljs.core.async.close_BANG_.call(null,out);
var state_21262__$1 = state_21262;
var statearr_21273_21292 = state_21262__$1;
(statearr_21273_21292[(2)] = inst_21247);

(statearr_21273_21292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (10))){
var inst_21255 = (state_21262[(2)]);
var state_21262__$1 = (function (){var statearr_21274 = state_21262;
(statearr_21274[(8)] = inst_21255);

return statearr_21274;
})();
var statearr_21275_21293 = state_21262__$1;
(statearr_21275_21293[(2)] = null);

(statearr_21275_21293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21263 === (8))){
var inst_21244 = (state_21262[(7)]);
var state_21262__$1 = state_21262;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21262__$1,(11),out,inst_21244);
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
});})(c__5809__auto___21283,out))
;
return ((function (switch__5794__auto__,c__5809__auto___21283,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_21279 = [null,null,null,null,null,null,null,null,null];
(statearr_21279[(0)] = state_machine__5795__auto__);

(statearr_21279[(1)] = (1));

return statearr_21279;
});
var state_machine__5795__auto____1 = (function (state_21262){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_21262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e21280){if((e21280 instanceof Object)){
var ex__5798__auto__ = e21280;
var statearr_21281_21294 = state_21262;
(statearr_21281_21294[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21295 = state_21262;
state_21262 = G__21295;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_21262){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_21262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___21283,out))
})();
var state__5811__auto__ = (function (){var statearr_21282 = f__5810__auto__.call(null);
(statearr_21282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___21283);

return statearr_21282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___21283,out))
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
return (function (state_21461){
var state_val_21462 = (state_21461[(1)]);
if((state_val_21462 === (7))){
var inst_21457 = (state_21461[(2)]);
var state_21461__$1 = state_21461;
var statearr_21463_21504 = state_21461__$1;
(statearr_21463_21504[(2)] = inst_21457);

(statearr_21463_21504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21462 === (20))){
var inst_21427 = (state_21461[(7)]);
var inst_21438 = (state_21461[(2)]);
var inst_21439 = cljs.core.next.call(null,inst_21427);
var inst_21413 = inst_21439;
var inst_21414 = null;
var inst_21415 = (0);
var inst_21416 = (0);
var state_21461__$1 = (function (){var statearr_21464 = state_21461;
(statearr_21464[(8)] = inst_21415);

(statearr_21464[(9)] = inst_21414);

(statearr_21464[(10)] = inst_21438);

(statearr_21464[(11)] = inst_21416);

(statearr_21464[(12)] = inst_21413);

return statearr_21464;
})();
var statearr_21465_21505 = state_21461__$1;
(statearr_21465_21505[(2)] = null);

(statearr_21465_21505[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21462 === (1))){
var state_21461__$1 = state_21461;
var statearr_21466_21506 = state_21461__$1;
(statearr_21466_21506[(2)] = null);

(statearr_21466_21506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21462 === (4))){
var inst_21402 = (state_21461[(13)]);
var inst_21402__$1 = (state_21461[(2)]);
var inst_21403 = (inst_21402__$1 == null);
var state_21461__$1 = (function (){var statearr_21467 = state_21461;
(statearr_21467[(13)] = inst_21402__$1);

return statearr_21467;
})();
if(cljs.core.truth_(inst_21403)){
var statearr_21468_21507 = state_21461__$1;
(statearr_21468_21507[(1)] = (5));

} else {
var statearr_21469_21508 = state_21461__$1;
(statearr_21469_21508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21462 === (15))){
var state_21461__$1 = state_21461;
var statearr_21473_21509 = state_21461__$1;
(statearr_21473_21509[(2)] = null);

(statearr_21473_21509[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21462 === (21))){
var state_21461__$1 = state_21461;
var statearr_21474_21510 = state_21461__$1;
(statearr_21474_21510[(2)] = null);

(statearr_21474_21510[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21462 === (13))){
var inst_21415 = (state_21461[(8)]);
var inst_21414 = (state_21461[(9)]);
var inst_21416 = (state_21461[(11)]);
var inst_21413 = (state_21461[(12)]);
var inst_21423 = (state_21461[(2)]);
var inst_21424 = (inst_21416 + (1));
var tmp21470 = inst_21415;
var tmp21471 = inst_21414;
var tmp21472 = inst_21413;
var inst_21413__$1 = tmp21472;
var inst_21414__$1 = tmp21471;
var inst_21415__$1 = tmp21470;
var inst_21416__$1 = inst_21424;
var state_21461__$1 = (function (){var statearr_21475 = state_21461;
(statearr_21475[(14)] = inst_21423);

(statearr_21475[(8)] = inst_21415__$1);

(statearr_21475[(9)] = inst_21414__$1);

(statearr_21475[(11)] = inst_21416__$1);

(statearr_21475[(12)] = inst_21413__$1);

return statearr_21475;
})();
var statearr_21476_21511 = state_21461__$1;
(statearr_21476_21511[(2)] = null);

(statearr_21476_21511[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21462 === (22))){
var state_21461__$1 = state_21461;
var statearr_21477_21512 = state_21461__$1;
(statearr_21477_21512[(2)] = null);

(statearr_21477_21512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21462 === (6))){
var inst_21402 = (state_21461[(13)]);
var inst_21411 = f.call(null,inst_21402);
var inst_21412 = cljs.core.seq.call(null,inst_21411);
var inst_21413 = inst_21412;
var inst_21414 = null;
var inst_21415 = (0);
var inst_21416 = (0);
var state_21461__$1 = (function (){var statearr_21478 = state_21461;
(statearr_21478[(8)] = inst_21415);

(statearr_21478[(9)] = inst_21414);

(statearr_21478[(11)] = inst_21416);

(statearr_21478[(12)] = inst_21413);

return statearr_21478;
})();
var statearr_21479_21513 = state_21461__$1;
(statearr_21479_21513[(2)] = null);

(statearr_21479_21513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21462 === (17))){
var inst_21427 = (state_21461[(7)]);
var inst_21431 = cljs.core.chunk_first.call(null,inst_21427);
var inst_21432 = cljs.core.chunk_rest.call(null,inst_21427);
var inst_21433 = cljs.core.count.call(null,inst_21431);
var inst_21413 = inst_21432;
var inst_21414 = inst_21431;
var inst_21415 = inst_21433;
var inst_21416 = (0);
var state_21461__$1 = (function (){var statearr_21480 = state_21461;
(statearr_21480[(8)] = inst_21415);

(statearr_21480[(9)] = inst_21414);

(statearr_21480[(11)] = inst_21416);

(statearr_21480[(12)] = inst_21413);

return statearr_21480;
})();
var statearr_21481_21514 = state_21461__$1;
(statearr_21481_21514[(2)] = null);

(statearr_21481_21514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21462 === (3))){
var inst_21459 = (state_21461[(2)]);
var state_21461__$1 = state_21461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21461__$1,inst_21459);
} else {
if((state_val_21462 === (12))){
var inst_21447 = (state_21461[(2)]);
var state_21461__$1 = state_21461;
var statearr_21482_21515 = state_21461__$1;
(statearr_21482_21515[(2)] = inst_21447);

(statearr_21482_21515[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21462 === (2))){
var state_21461__$1 = state_21461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21461__$1,(4),in$);
} else {
if((state_val_21462 === (23))){
var inst_21455 = (state_21461[(2)]);
var state_21461__$1 = state_21461;
var statearr_21483_21516 = state_21461__$1;
(statearr_21483_21516[(2)] = inst_21455);

(statearr_21483_21516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21462 === (19))){
var inst_21442 = (state_21461[(2)]);
var state_21461__$1 = state_21461;
var statearr_21484_21517 = state_21461__$1;
(statearr_21484_21517[(2)] = inst_21442);

(statearr_21484_21517[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21462 === (11))){
var inst_21413 = (state_21461[(12)]);
var inst_21427 = (state_21461[(7)]);
var inst_21427__$1 = cljs.core.seq.call(null,inst_21413);
var state_21461__$1 = (function (){var statearr_21485 = state_21461;
(statearr_21485[(7)] = inst_21427__$1);

return statearr_21485;
})();
if(inst_21427__$1){
var statearr_21486_21518 = state_21461__$1;
(statearr_21486_21518[(1)] = (14));

} else {
var statearr_21487_21519 = state_21461__$1;
(statearr_21487_21519[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21462 === (9))){
var inst_21449 = (state_21461[(2)]);
var inst_21450 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21461__$1 = (function (){var statearr_21488 = state_21461;
(statearr_21488[(15)] = inst_21449);

return statearr_21488;
})();
if(cljs.core.truth_(inst_21450)){
var statearr_21489_21520 = state_21461__$1;
(statearr_21489_21520[(1)] = (21));

} else {
var statearr_21490_21521 = state_21461__$1;
(statearr_21490_21521[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21462 === (5))){
var inst_21405 = cljs.core.async.close_BANG_.call(null,out);
var state_21461__$1 = state_21461;
var statearr_21491_21522 = state_21461__$1;
(statearr_21491_21522[(2)] = inst_21405);

(statearr_21491_21522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21462 === (14))){
var inst_21427 = (state_21461[(7)]);
var inst_21429 = cljs.core.chunked_seq_QMARK_.call(null,inst_21427);
var state_21461__$1 = state_21461;
if(inst_21429){
var statearr_21492_21523 = state_21461__$1;
(statearr_21492_21523[(1)] = (17));

} else {
var statearr_21493_21524 = state_21461__$1;
(statearr_21493_21524[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21462 === (16))){
var inst_21445 = (state_21461[(2)]);
var state_21461__$1 = state_21461;
var statearr_21494_21525 = state_21461__$1;
(statearr_21494_21525[(2)] = inst_21445);

(statearr_21494_21525[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21462 === (10))){
var inst_21414 = (state_21461[(9)]);
var inst_21416 = (state_21461[(11)]);
var inst_21421 = cljs.core._nth.call(null,inst_21414,inst_21416);
var state_21461__$1 = state_21461;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21461__$1,(13),out,inst_21421);
} else {
if((state_val_21462 === (18))){
var inst_21427 = (state_21461[(7)]);
var inst_21436 = cljs.core.first.call(null,inst_21427);
var state_21461__$1 = state_21461;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21461__$1,(20),out,inst_21436);
} else {
if((state_val_21462 === (8))){
var inst_21415 = (state_21461[(8)]);
var inst_21416 = (state_21461[(11)]);
var inst_21418 = (inst_21416 < inst_21415);
var inst_21419 = inst_21418;
var state_21461__$1 = state_21461;
if(cljs.core.truth_(inst_21419)){
var statearr_21495_21526 = state_21461__$1;
(statearr_21495_21526[(1)] = (10));

} else {
var statearr_21496_21527 = state_21461__$1;
(statearr_21496_21527[(1)] = (11));

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
var statearr_21500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21500[(0)] = state_machine__5795__auto__);

(statearr_21500[(1)] = (1));

return statearr_21500;
});
var state_machine__5795__auto____1 = (function (state_21461){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_21461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e21501){if((e21501 instanceof Object)){
var ex__5798__auto__ = e21501;
var statearr_21502_21528 = state_21461;
(statearr_21502_21528[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21529 = state_21461;
state_21461 = G__21529;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_21461){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_21461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto__))
})();
var state__5811__auto__ = (function (){var statearr_21503 = f__5810__auto__.call(null);
(statearr_21503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto__);

return statearr_21503;
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
var c__5809__auto___21626 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___21626,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___21626,out){
return (function (state_21601){
var state_val_21602 = (state_21601[(1)]);
if((state_val_21602 === (7))){
var inst_21596 = (state_21601[(2)]);
var state_21601__$1 = state_21601;
var statearr_21603_21627 = state_21601__$1;
(statearr_21603_21627[(2)] = inst_21596);

(statearr_21603_21627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21602 === (1))){
var inst_21578 = null;
var state_21601__$1 = (function (){var statearr_21604 = state_21601;
(statearr_21604[(7)] = inst_21578);

return statearr_21604;
})();
var statearr_21605_21628 = state_21601__$1;
(statearr_21605_21628[(2)] = null);

(statearr_21605_21628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21602 === (4))){
var inst_21581 = (state_21601[(8)]);
var inst_21581__$1 = (state_21601[(2)]);
var inst_21582 = (inst_21581__$1 == null);
var inst_21583 = cljs.core.not.call(null,inst_21582);
var state_21601__$1 = (function (){var statearr_21606 = state_21601;
(statearr_21606[(8)] = inst_21581__$1);

return statearr_21606;
})();
if(inst_21583){
var statearr_21607_21629 = state_21601__$1;
(statearr_21607_21629[(1)] = (5));

} else {
var statearr_21608_21630 = state_21601__$1;
(statearr_21608_21630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21602 === (6))){
var state_21601__$1 = state_21601;
var statearr_21609_21631 = state_21601__$1;
(statearr_21609_21631[(2)] = null);

(statearr_21609_21631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21602 === (3))){
var inst_21598 = (state_21601[(2)]);
var inst_21599 = cljs.core.async.close_BANG_.call(null,out);
var state_21601__$1 = (function (){var statearr_21610 = state_21601;
(statearr_21610[(9)] = inst_21598);

return statearr_21610;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21601__$1,inst_21599);
} else {
if((state_val_21602 === (2))){
var state_21601__$1 = state_21601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21601__$1,(4),ch);
} else {
if((state_val_21602 === (11))){
var inst_21581 = (state_21601[(8)]);
var inst_21590 = (state_21601[(2)]);
var inst_21578 = inst_21581;
var state_21601__$1 = (function (){var statearr_21611 = state_21601;
(statearr_21611[(10)] = inst_21590);

(statearr_21611[(7)] = inst_21578);

return statearr_21611;
})();
var statearr_21612_21632 = state_21601__$1;
(statearr_21612_21632[(2)] = null);

(statearr_21612_21632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21602 === (9))){
var inst_21581 = (state_21601[(8)]);
var state_21601__$1 = state_21601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21601__$1,(11),out,inst_21581);
} else {
if((state_val_21602 === (5))){
var inst_21578 = (state_21601[(7)]);
var inst_21581 = (state_21601[(8)]);
var inst_21585 = cljs.core._EQ_.call(null,inst_21581,inst_21578);
var state_21601__$1 = state_21601;
if(inst_21585){
var statearr_21614_21633 = state_21601__$1;
(statearr_21614_21633[(1)] = (8));

} else {
var statearr_21615_21634 = state_21601__$1;
(statearr_21615_21634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21602 === (10))){
var inst_21593 = (state_21601[(2)]);
var state_21601__$1 = state_21601;
var statearr_21616_21635 = state_21601__$1;
(statearr_21616_21635[(2)] = inst_21593);

(statearr_21616_21635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21602 === (8))){
var inst_21578 = (state_21601[(7)]);
var tmp21613 = inst_21578;
var inst_21578__$1 = tmp21613;
var state_21601__$1 = (function (){var statearr_21617 = state_21601;
(statearr_21617[(7)] = inst_21578__$1);

return statearr_21617;
})();
var statearr_21618_21636 = state_21601__$1;
(statearr_21618_21636[(2)] = null);

(statearr_21618_21636[(1)] = (2));


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
});})(c__5809__auto___21626,out))
;
return ((function (switch__5794__auto__,c__5809__auto___21626,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_21622 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21622[(0)] = state_machine__5795__auto__);

(statearr_21622[(1)] = (1));

return statearr_21622;
});
var state_machine__5795__auto____1 = (function (state_21601){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_21601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e21623){if((e21623 instanceof Object)){
var ex__5798__auto__ = e21623;
var statearr_21624_21637 = state_21601;
(statearr_21624_21637[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21638 = state_21601;
state_21601 = G__21638;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_21601){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_21601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___21626,out))
})();
var state__5811__auto__ = (function (){var statearr_21625 = f__5810__auto__.call(null);
(statearr_21625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___21626);

return statearr_21625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___21626,out))
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
var c__5809__auto___21773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___21773,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___21773,out){
return (function (state_21743){
var state_val_21744 = (state_21743[(1)]);
if((state_val_21744 === (7))){
var inst_21739 = (state_21743[(2)]);
var state_21743__$1 = state_21743;
var statearr_21745_21774 = state_21743__$1;
(statearr_21745_21774[(2)] = inst_21739);

(statearr_21745_21774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (1))){
var inst_21706 = (new Array(n));
var inst_21707 = inst_21706;
var inst_21708 = (0);
var state_21743__$1 = (function (){var statearr_21746 = state_21743;
(statearr_21746[(7)] = inst_21708);

(statearr_21746[(8)] = inst_21707);

return statearr_21746;
})();
var statearr_21747_21775 = state_21743__$1;
(statearr_21747_21775[(2)] = null);

(statearr_21747_21775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (4))){
var inst_21711 = (state_21743[(9)]);
var inst_21711__$1 = (state_21743[(2)]);
var inst_21712 = (inst_21711__$1 == null);
var inst_21713 = cljs.core.not.call(null,inst_21712);
var state_21743__$1 = (function (){var statearr_21748 = state_21743;
(statearr_21748[(9)] = inst_21711__$1);

return statearr_21748;
})();
if(inst_21713){
var statearr_21749_21776 = state_21743__$1;
(statearr_21749_21776[(1)] = (5));

} else {
var statearr_21750_21777 = state_21743__$1;
(statearr_21750_21777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (15))){
var inst_21733 = (state_21743[(2)]);
var state_21743__$1 = state_21743;
var statearr_21751_21778 = state_21743__$1;
(statearr_21751_21778[(2)] = inst_21733);

(statearr_21751_21778[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (13))){
var state_21743__$1 = state_21743;
var statearr_21752_21779 = state_21743__$1;
(statearr_21752_21779[(2)] = null);

(statearr_21752_21779[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (6))){
var inst_21708 = (state_21743[(7)]);
var inst_21729 = (inst_21708 > (0));
var state_21743__$1 = state_21743;
if(cljs.core.truth_(inst_21729)){
var statearr_21753_21780 = state_21743__$1;
(statearr_21753_21780[(1)] = (12));

} else {
var statearr_21754_21781 = state_21743__$1;
(statearr_21754_21781[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (3))){
var inst_21741 = (state_21743[(2)]);
var state_21743__$1 = state_21743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21743__$1,inst_21741);
} else {
if((state_val_21744 === (12))){
var inst_21707 = (state_21743[(8)]);
var inst_21731 = cljs.core.vec.call(null,inst_21707);
var state_21743__$1 = state_21743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21743__$1,(15),out,inst_21731);
} else {
if((state_val_21744 === (2))){
var state_21743__$1 = state_21743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21743__$1,(4),ch);
} else {
if((state_val_21744 === (11))){
var inst_21723 = (state_21743[(2)]);
var inst_21724 = (new Array(n));
var inst_21707 = inst_21724;
var inst_21708 = (0);
var state_21743__$1 = (function (){var statearr_21755 = state_21743;
(statearr_21755[(10)] = inst_21723);

(statearr_21755[(7)] = inst_21708);

(statearr_21755[(8)] = inst_21707);

return statearr_21755;
})();
var statearr_21756_21782 = state_21743__$1;
(statearr_21756_21782[(2)] = null);

(statearr_21756_21782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (9))){
var inst_21707 = (state_21743[(8)]);
var inst_21721 = cljs.core.vec.call(null,inst_21707);
var state_21743__$1 = state_21743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21743__$1,(11),out,inst_21721);
} else {
if((state_val_21744 === (5))){
var inst_21716 = (state_21743[(11)]);
var inst_21708 = (state_21743[(7)]);
var inst_21707 = (state_21743[(8)]);
var inst_21711 = (state_21743[(9)]);
var inst_21715 = (inst_21707[inst_21708] = inst_21711);
var inst_21716__$1 = (inst_21708 + (1));
var inst_21717 = (inst_21716__$1 < n);
var state_21743__$1 = (function (){var statearr_21757 = state_21743;
(statearr_21757[(12)] = inst_21715);

(statearr_21757[(11)] = inst_21716__$1);

return statearr_21757;
})();
if(cljs.core.truth_(inst_21717)){
var statearr_21758_21783 = state_21743__$1;
(statearr_21758_21783[(1)] = (8));

} else {
var statearr_21759_21784 = state_21743__$1;
(statearr_21759_21784[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (14))){
var inst_21736 = (state_21743[(2)]);
var inst_21737 = cljs.core.async.close_BANG_.call(null,out);
var state_21743__$1 = (function (){var statearr_21761 = state_21743;
(statearr_21761[(13)] = inst_21736);

return statearr_21761;
})();
var statearr_21762_21785 = state_21743__$1;
(statearr_21762_21785[(2)] = inst_21737);

(statearr_21762_21785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (10))){
var inst_21727 = (state_21743[(2)]);
var state_21743__$1 = state_21743;
var statearr_21763_21786 = state_21743__$1;
(statearr_21763_21786[(2)] = inst_21727);

(statearr_21763_21786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (8))){
var inst_21716 = (state_21743[(11)]);
var inst_21707 = (state_21743[(8)]);
var tmp21760 = inst_21707;
var inst_21707__$1 = tmp21760;
var inst_21708 = inst_21716;
var state_21743__$1 = (function (){var statearr_21764 = state_21743;
(statearr_21764[(7)] = inst_21708);

(statearr_21764[(8)] = inst_21707__$1);

return statearr_21764;
})();
var statearr_21765_21787 = state_21743__$1;
(statearr_21765_21787[(2)] = null);

(statearr_21765_21787[(1)] = (2));


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
});})(c__5809__auto___21773,out))
;
return ((function (switch__5794__auto__,c__5809__auto___21773,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_21769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21769[(0)] = state_machine__5795__auto__);

(statearr_21769[(1)] = (1));

return statearr_21769;
});
var state_machine__5795__auto____1 = (function (state_21743){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_21743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e21770){if((e21770 instanceof Object)){
var ex__5798__auto__ = e21770;
var statearr_21771_21788 = state_21743;
(statearr_21771_21788[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21789 = state_21743;
state_21743 = G__21789;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_21743){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_21743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___21773,out))
})();
var state__5811__auto__ = (function (){var statearr_21772 = f__5810__auto__.call(null);
(statearr_21772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___21773);

return statearr_21772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___21773,out))
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
var c__5809__auto___21932 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5809__auto___21932,out){
return (function (){
var f__5810__auto__ = (function (){var switch__5794__auto__ = ((function (c__5809__auto___21932,out){
return (function (state_21902){
var state_val_21903 = (state_21902[(1)]);
if((state_val_21903 === (7))){
var inst_21898 = (state_21902[(2)]);
var state_21902__$1 = state_21902;
var statearr_21904_21933 = state_21902__$1;
(statearr_21904_21933[(2)] = inst_21898);

(statearr_21904_21933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21903 === (1))){
var inst_21861 = [];
var inst_21862 = inst_21861;
var inst_21863 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21902__$1 = (function (){var statearr_21905 = state_21902;
(statearr_21905[(7)] = inst_21863);

(statearr_21905[(8)] = inst_21862);

return statearr_21905;
})();
var statearr_21906_21934 = state_21902__$1;
(statearr_21906_21934[(2)] = null);

(statearr_21906_21934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21903 === (4))){
var inst_21866 = (state_21902[(9)]);
var inst_21866__$1 = (state_21902[(2)]);
var inst_21867 = (inst_21866__$1 == null);
var inst_21868 = cljs.core.not.call(null,inst_21867);
var state_21902__$1 = (function (){var statearr_21907 = state_21902;
(statearr_21907[(9)] = inst_21866__$1);

return statearr_21907;
})();
if(inst_21868){
var statearr_21908_21935 = state_21902__$1;
(statearr_21908_21935[(1)] = (5));

} else {
var statearr_21909_21936 = state_21902__$1;
(statearr_21909_21936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21903 === (15))){
var inst_21892 = (state_21902[(2)]);
var state_21902__$1 = state_21902;
var statearr_21910_21937 = state_21902__$1;
(statearr_21910_21937[(2)] = inst_21892);

(statearr_21910_21937[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21903 === (13))){
var state_21902__$1 = state_21902;
var statearr_21911_21938 = state_21902__$1;
(statearr_21911_21938[(2)] = null);

(statearr_21911_21938[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21903 === (6))){
var inst_21862 = (state_21902[(8)]);
var inst_21887 = inst_21862.length;
var inst_21888 = (inst_21887 > (0));
var state_21902__$1 = state_21902;
if(cljs.core.truth_(inst_21888)){
var statearr_21912_21939 = state_21902__$1;
(statearr_21912_21939[(1)] = (12));

} else {
var statearr_21913_21940 = state_21902__$1;
(statearr_21913_21940[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21903 === (3))){
var inst_21900 = (state_21902[(2)]);
var state_21902__$1 = state_21902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21902__$1,inst_21900);
} else {
if((state_val_21903 === (12))){
var inst_21862 = (state_21902[(8)]);
var inst_21890 = cljs.core.vec.call(null,inst_21862);
var state_21902__$1 = state_21902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21902__$1,(15),out,inst_21890);
} else {
if((state_val_21903 === (2))){
var state_21902__$1 = state_21902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21902__$1,(4),ch);
} else {
if((state_val_21903 === (11))){
var inst_21866 = (state_21902[(9)]);
var inst_21870 = (state_21902[(10)]);
var inst_21880 = (state_21902[(2)]);
var inst_21881 = [];
var inst_21882 = inst_21881.push(inst_21866);
var inst_21862 = inst_21881;
var inst_21863 = inst_21870;
var state_21902__$1 = (function (){var statearr_21914 = state_21902;
(statearr_21914[(11)] = inst_21880);

(statearr_21914[(7)] = inst_21863);

(statearr_21914[(8)] = inst_21862);

(statearr_21914[(12)] = inst_21882);

return statearr_21914;
})();
var statearr_21915_21941 = state_21902__$1;
(statearr_21915_21941[(2)] = null);

(statearr_21915_21941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21903 === (9))){
var inst_21862 = (state_21902[(8)]);
var inst_21878 = cljs.core.vec.call(null,inst_21862);
var state_21902__$1 = state_21902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21902__$1,(11),out,inst_21878);
} else {
if((state_val_21903 === (5))){
var inst_21866 = (state_21902[(9)]);
var inst_21863 = (state_21902[(7)]);
var inst_21870 = (state_21902[(10)]);
var inst_21870__$1 = f.call(null,inst_21866);
var inst_21871 = cljs.core._EQ_.call(null,inst_21870__$1,inst_21863);
var inst_21872 = cljs.core.keyword_identical_QMARK_.call(null,inst_21863,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_21873 = (inst_21871) || (inst_21872);
var state_21902__$1 = (function (){var statearr_21916 = state_21902;
(statearr_21916[(10)] = inst_21870__$1);

return statearr_21916;
})();
if(cljs.core.truth_(inst_21873)){
var statearr_21917_21942 = state_21902__$1;
(statearr_21917_21942[(1)] = (8));

} else {
var statearr_21918_21943 = state_21902__$1;
(statearr_21918_21943[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21903 === (14))){
var inst_21895 = (state_21902[(2)]);
var inst_21896 = cljs.core.async.close_BANG_.call(null,out);
var state_21902__$1 = (function (){var statearr_21920 = state_21902;
(statearr_21920[(13)] = inst_21895);

return statearr_21920;
})();
var statearr_21921_21944 = state_21902__$1;
(statearr_21921_21944[(2)] = inst_21896);

(statearr_21921_21944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21903 === (10))){
var inst_21885 = (state_21902[(2)]);
var state_21902__$1 = state_21902;
var statearr_21922_21945 = state_21902__$1;
(statearr_21922_21945[(2)] = inst_21885);

(statearr_21922_21945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21903 === (8))){
var inst_21866 = (state_21902[(9)]);
var inst_21862 = (state_21902[(8)]);
var inst_21870 = (state_21902[(10)]);
var inst_21875 = inst_21862.push(inst_21866);
var tmp21919 = inst_21862;
var inst_21862__$1 = tmp21919;
var inst_21863 = inst_21870;
var state_21902__$1 = (function (){var statearr_21923 = state_21902;
(statearr_21923[(7)] = inst_21863);

(statearr_21923[(14)] = inst_21875);

(statearr_21923[(8)] = inst_21862__$1);

return statearr_21923;
})();
var statearr_21924_21946 = state_21902__$1;
(statearr_21924_21946[(2)] = null);

(statearr_21924_21946[(1)] = (2));


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
});})(c__5809__auto___21932,out))
;
return ((function (switch__5794__auto__,c__5809__auto___21932,out){
return (function() {
var state_machine__5795__auto__ = null;
var state_machine__5795__auto____0 = (function (){
var statearr_21928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21928[(0)] = state_machine__5795__auto__);

(statearr_21928[(1)] = (1));

return statearr_21928;
});
var state_machine__5795__auto____1 = (function (state_21902){
while(true){
var ret_value__5796__auto__ = (function (){try{while(true){
var result__5797__auto__ = switch__5794__auto__.call(null,state_21902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5797__auto__;
}
break;
}
}catch (e21929){if((e21929 instanceof Object)){
var ex__5798__auto__ = e21929;
var statearr_21930_21947 = state_21902;
(statearr_21930_21947[(5)] = ex__5798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21948 = state_21902;
state_21902 = G__21948;
continue;
} else {
return ret_value__5796__auto__;
}
break;
}
});
state_machine__5795__auto__ = function(state_21902){
switch(arguments.length){
case 0:
return state_machine__5795__auto____0.call(this);
case 1:
return state_machine__5795__auto____1.call(this,state_21902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5795__auto____0;
state_machine__5795__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5795__auto____1;
return state_machine__5795__auto__;
})()
;})(switch__5794__auto__,c__5809__auto___21932,out))
})();
var state__5811__auto__ = (function (){var statearr_21931 = f__5810__auto__.call(null);
(statearr_21931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5809__auto___21932);

return statearr_21931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5811__auto__);
});})(c__5809__auto___21932,out))
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
