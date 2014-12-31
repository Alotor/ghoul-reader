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
if(typeof cljs.core.async.t11922 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11922 = (function (f,fn_handler,meta11923){
this.f = f;
this.fn_handler = fn_handler;
this.meta11923 = meta11923;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11922.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11922.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t11922.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t11922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11924){
var self__ = this;
var _11924__$1 = this;
return self__.meta11923;
});

cljs.core.async.t11922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11924,meta11923__$1){
var self__ = this;
var _11924__$1 = this;
return (new cljs.core.async.t11922(self__.f,self__.fn_handler,meta11923__$1));
});

cljs.core.async.t11922.cljs$lang$type = true;

cljs.core.async.t11922.cljs$lang$ctorStr = "cljs.core.async/t11922";

cljs.core.async.t11922.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t11922");
});

cljs.core.async.__GT_t11922 = (function __GT_t11922(f__$1,fn_handler__$1,meta11923){
return (new cljs.core.async.t11922(f__$1,fn_handler__$1,meta11923));
});

}

return (new cljs.core.async.t11922(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
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
var G__11926 = buff;
if(G__11926){
var bit__4284__auto__ = null;
if(cljs.core.truth_((function (){var or__3608__auto__ = bit__4284__auto__;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return G__11926.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__11926.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11926);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11926);
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
var val_11927 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11927);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_11927,ret){
return (function (){
return fn1.call(null,val_11927);
});})(val_11927,ret))
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
var n__4490__auto___11928 = n;
var x_11929 = (0);
while(true){
if((x_11929 < n__4490__auto___11928)){
(a[x_11929] = (0));

var G__11930 = (x_11929 + (1));
x_11929 = G__11930;
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

var G__11931 = (i + (1));
i = G__11931;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t11935 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11935 = (function (flag,alt_flag,meta11936){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11936 = meta11936;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11935.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11935.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t11935.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t11935.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11937){
var self__ = this;
var _11937__$1 = this;
return self__.meta11936;
});})(flag))
;

cljs.core.async.t11935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11937,meta11936__$1){
var self__ = this;
var _11937__$1 = this;
return (new cljs.core.async.t11935(self__.flag,self__.alt_flag,meta11936__$1));
});})(flag))
;

cljs.core.async.t11935.cljs$lang$type = true;

cljs.core.async.t11935.cljs$lang$ctorStr = "cljs.core.async/t11935";

cljs.core.async.t11935.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t11935");
});})(flag))
;

cljs.core.async.__GT_t11935 = ((function (flag){
return (function __GT_t11935(flag__$1,alt_flag__$1,meta11936){
return (new cljs.core.async.t11935(flag__$1,alt_flag__$1,meta11936));
});})(flag))
;

}

return (new cljs.core.async.t11935(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t11941 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11941 = (function (cb,flag,alt_handler,meta11942){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11942 = meta11942;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11941.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11941.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t11941.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t11941.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11943){
var self__ = this;
var _11943__$1 = this;
return self__.meta11942;
});

cljs.core.async.t11941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11943,meta11942__$1){
var self__ = this;
var _11943__$1 = this;
return (new cljs.core.async.t11941(self__.cb,self__.flag,self__.alt_handler,meta11942__$1));
});

cljs.core.async.t11941.cljs$lang$type = true;

cljs.core.async.t11941.cljs$lang$ctorStr = "cljs.core.async/t11941";

cljs.core.async.t11941.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t11941");
});

cljs.core.async.__GT_t11941 = (function __GT_t11941(cb__$1,flag__$1,alt_handler__$1,meta11942){
return (new cljs.core.async.t11941(cb__$1,flag__$1,alt_handler__$1,meta11942));
});

}

return (new cljs.core.async.t11941(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
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
return (function (p1__11944_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11944_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11945_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11945_SHARP_,port], null));
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
var G__11946 = (i + (1));
i = G__11946;
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
var alts_BANG___delegate = function (ports,p__11947){
var map__11949 = p__11947;
var map__11949__$1 = ((cljs.core.seq_QMARK_.call(null,map__11949))?cljs.core.apply.call(null,cljs.core.hash_map,map__11949):map__11949);
var opts = map__11949__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__11947 = null;
if (arguments.length > 1) {
  p__11947 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__11947);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11950){
var ports = cljs.core.first(arglist__11950);
var p__11947 = cljs.core.rest(arglist__11950);
return alts_BANG___delegate(ports,p__11947);
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
var c__7303__auto___12045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___12045){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___12045){
return (function (state_12021){
var state_val_12022 = (state_12021[(1)]);
if((state_val_12022 === (7))){
var inst_12017 = (state_12021[(2)]);
var state_12021__$1 = state_12021;
var statearr_12023_12046 = state_12021__$1;
(statearr_12023_12046[(2)] = inst_12017);

(statearr_12023_12046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (1))){
var state_12021__$1 = state_12021;
var statearr_12024_12047 = state_12021__$1;
(statearr_12024_12047[(2)] = null);

(statearr_12024_12047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (4))){
var inst_12000 = (state_12021[(7)]);
var inst_12000__$1 = (state_12021[(2)]);
var inst_12001 = (inst_12000__$1 == null);
var state_12021__$1 = (function (){var statearr_12025 = state_12021;
(statearr_12025[(7)] = inst_12000__$1);

return statearr_12025;
})();
if(cljs.core.truth_(inst_12001)){
var statearr_12026_12048 = state_12021__$1;
(statearr_12026_12048[(1)] = (5));

} else {
var statearr_12027_12049 = state_12021__$1;
(statearr_12027_12049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (13))){
var state_12021__$1 = state_12021;
var statearr_12028_12050 = state_12021__$1;
(statearr_12028_12050[(2)] = null);

(statearr_12028_12050[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (6))){
var inst_12000 = (state_12021[(7)]);
var state_12021__$1 = state_12021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12021__$1,(11),to,inst_12000);
} else {
if((state_val_12022 === (3))){
var inst_12019 = (state_12021[(2)]);
var state_12021__$1 = state_12021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12021__$1,inst_12019);
} else {
if((state_val_12022 === (12))){
var state_12021__$1 = state_12021;
var statearr_12029_12051 = state_12021__$1;
(statearr_12029_12051[(2)] = null);

(statearr_12029_12051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (2))){
var state_12021__$1 = state_12021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12021__$1,(4),from);
} else {
if((state_val_12022 === (11))){
var inst_12010 = (state_12021[(2)]);
var state_12021__$1 = state_12021;
if(cljs.core.truth_(inst_12010)){
var statearr_12030_12052 = state_12021__$1;
(statearr_12030_12052[(1)] = (12));

} else {
var statearr_12031_12053 = state_12021__$1;
(statearr_12031_12053[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (9))){
var state_12021__$1 = state_12021;
var statearr_12032_12054 = state_12021__$1;
(statearr_12032_12054[(2)] = null);

(statearr_12032_12054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (5))){
var state_12021__$1 = state_12021;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12033_12055 = state_12021__$1;
(statearr_12033_12055[(1)] = (8));

} else {
var statearr_12034_12056 = state_12021__$1;
(statearr_12034_12056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (14))){
var inst_12015 = (state_12021[(2)]);
var state_12021__$1 = state_12021;
var statearr_12035_12057 = state_12021__$1;
(statearr_12035_12057[(2)] = inst_12015);

(statearr_12035_12057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (10))){
var inst_12007 = (state_12021[(2)]);
var state_12021__$1 = state_12021;
var statearr_12036_12058 = state_12021__$1;
(statearr_12036_12058[(2)] = inst_12007);

(statearr_12036_12058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (8))){
var inst_12004 = cljs.core.async.close_BANG_.call(null,to);
var state_12021__$1 = state_12021;
var statearr_12037_12059 = state_12021__$1;
(statearr_12037_12059[(2)] = inst_12004);

(statearr_12037_12059[(1)] = (10));


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
});})(c__7303__auto___12045))
;
return ((function (switch__7288__auto__,c__7303__auto___12045){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_12041 = [null,null,null,null,null,null,null,null];
(statearr_12041[(0)] = state_machine__7289__auto__);

(statearr_12041[(1)] = (1));

return statearr_12041;
});
var state_machine__7289__auto____1 = (function (state_12021){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_12021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e12042){if((e12042 instanceof Object)){
var ex__7292__auto__ = e12042;
var statearr_12043_12060 = state_12021;
(statearr_12043_12060[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12061 = state_12021;
state_12021 = G__12061;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_12021){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_12021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___12045))
})();
var state__7305__auto__ = (function (){var statearr_12044 = f__7304__auto__.call(null);
(statearr_12044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___12045);

return statearr_12044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___12045))
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
return (function (p__12245){
var vec__12246 = p__12245;
var v = cljs.core.nth.call(null,vec__12246,(0),null);
var p = cljs.core.nth.call(null,vec__12246,(1),null);
var job = vec__12246;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7303__auto___12428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___12428,res,vec__12246,v,p,job,jobs,results){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___12428,res,vec__12246,v,p,job,jobs,results){
return (function (state_12251){
var state_val_12252 = (state_12251[(1)]);
if((state_val_12252 === (2))){
var inst_12248 = (state_12251[(2)]);
var inst_12249 = cljs.core.async.close_BANG_.call(null,res);
var state_12251__$1 = (function (){var statearr_12253 = state_12251;
(statearr_12253[(7)] = inst_12248);

return statearr_12253;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12251__$1,inst_12249);
} else {
if((state_val_12252 === (1))){
var state_12251__$1 = state_12251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12251__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7303__auto___12428,res,vec__12246,v,p,job,jobs,results))
;
return ((function (switch__7288__auto__,c__7303__auto___12428,res,vec__12246,v,p,job,jobs,results){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_12257 = [null,null,null,null,null,null,null,null];
(statearr_12257[(0)] = state_machine__7289__auto__);

(statearr_12257[(1)] = (1));

return statearr_12257;
});
var state_machine__7289__auto____1 = (function (state_12251){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_12251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e12258){if((e12258 instanceof Object)){
var ex__7292__auto__ = e12258;
var statearr_12259_12429 = state_12251;
(statearr_12259_12429[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12430 = state_12251;
state_12251 = G__12430;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_12251){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_12251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___12428,res,vec__12246,v,p,job,jobs,results))
})();
var state__7305__auto__ = (function (){var statearr_12260 = f__7304__auto__.call(null);
(statearr_12260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___12428);

return statearr_12260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___12428,res,vec__12246,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__12261){
var vec__12262 = p__12261;
var v = cljs.core.nth.call(null,vec__12262,(0),null);
var p = cljs.core.nth.call(null,vec__12262,(1),null);
var job = vec__12262;
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
var n__4490__auto___12431 = n;
var __12432 = (0);
while(true){
if((__12432 < n__4490__auto___12431)){
var G__12263_12433 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__12263_12433) {
case "async":
var c__7303__auto___12435 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12432,c__7303__auto___12435,G__12263_12433,n__4490__auto___12431,jobs,results,process,async){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (__12432,c__7303__auto___12435,G__12263_12433,n__4490__auto___12431,jobs,results,process,async){
return (function (state_12276){
var state_val_12277 = (state_12276[(1)]);
if((state_val_12277 === (7))){
var inst_12272 = (state_12276[(2)]);
var state_12276__$1 = state_12276;
var statearr_12278_12436 = state_12276__$1;
(statearr_12278_12436[(2)] = inst_12272);

(statearr_12278_12436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12277 === (6))){
var state_12276__$1 = state_12276;
var statearr_12279_12437 = state_12276__$1;
(statearr_12279_12437[(2)] = null);

(statearr_12279_12437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12277 === (5))){
var state_12276__$1 = state_12276;
var statearr_12280_12438 = state_12276__$1;
(statearr_12280_12438[(2)] = null);

(statearr_12280_12438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12277 === (4))){
var inst_12266 = (state_12276[(2)]);
var inst_12267 = async.call(null,inst_12266);
var state_12276__$1 = state_12276;
if(cljs.core.truth_(inst_12267)){
var statearr_12281_12439 = state_12276__$1;
(statearr_12281_12439[(1)] = (5));

} else {
var statearr_12282_12440 = state_12276__$1;
(statearr_12282_12440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12277 === (3))){
var inst_12274 = (state_12276[(2)]);
var state_12276__$1 = state_12276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12276__$1,inst_12274);
} else {
if((state_val_12277 === (2))){
var state_12276__$1 = state_12276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12276__$1,(4),jobs);
} else {
if((state_val_12277 === (1))){
var state_12276__$1 = state_12276;
var statearr_12283_12441 = state_12276__$1;
(statearr_12283_12441[(2)] = null);

(statearr_12283_12441[(1)] = (2));


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
});})(__12432,c__7303__auto___12435,G__12263_12433,n__4490__auto___12431,jobs,results,process,async))
;
return ((function (__12432,switch__7288__auto__,c__7303__auto___12435,G__12263_12433,n__4490__auto___12431,jobs,results,process,async){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_12287 = [null,null,null,null,null,null,null];
(statearr_12287[(0)] = state_machine__7289__auto__);

(statearr_12287[(1)] = (1));

return statearr_12287;
});
var state_machine__7289__auto____1 = (function (state_12276){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_12276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e12288){if((e12288 instanceof Object)){
var ex__7292__auto__ = e12288;
var statearr_12289_12442 = state_12276;
(statearr_12289_12442[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12443 = state_12276;
state_12276 = G__12443;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_12276){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_12276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(__12432,switch__7288__auto__,c__7303__auto___12435,G__12263_12433,n__4490__auto___12431,jobs,results,process,async))
})();
var state__7305__auto__ = (function (){var statearr_12290 = f__7304__auto__.call(null);
(statearr_12290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___12435);

return statearr_12290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(__12432,c__7303__auto___12435,G__12263_12433,n__4490__auto___12431,jobs,results,process,async))
);


break;
case "compute":
var c__7303__auto___12444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12432,c__7303__auto___12444,G__12263_12433,n__4490__auto___12431,jobs,results,process,async){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (__12432,c__7303__auto___12444,G__12263_12433,n__4490__auto___12431,jobs,results,process,async){
return (function (state_12303){
var state_val_12304 = (state_12303[(1)]);
if((state_val_12304 === (7))){
var inst_12299 = (state_12303[(2)]);
var state_12303__$1 = state_12303;
var statearr_12305_12445 = state_12303__$1;
(statearr_12305_12445[(2)] = inst_12299);

(statearr_12305_12445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12304 === (6))){
var state_12303__$1 = state_12303;
var statearr_12306_12446 = state_12303__$1;
(statearr_12306_12446[(2)] = null);

(statearr_12306_12446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12304 === (5))){
var state_12303__$1 = state_12303;
var statearr_12307_12447 = state_12303__$1;
(statearr_12307_12447[(2)] = null);

(statearr_12307_12447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12304 === (4))){
var inst_12293 = (state_12303[(2)]);
var inst_12294 = process.call(null,inst_12293);
var state_12303__$1 = state_12303;
if(cljs.core.truth_(inst_12294)){
var statearr_12308_12448 = state_12303__$1;
(statearr_12308_12448[(1)] = (5));

} else {
var statearr_12309_12449 = state_12303__$1;
(statearr_12309_12449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12304 === (3))){
var inst_12301 = (state_12303[(2)]);
var state_12303__$1 = state_12303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12303__$1,inst_12301);
} else {
if((state_val_12304 === (2))){
var state_12303__$1 = state_12303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12303__$1,(4),jobs);
} else {
if((state_val_12304 === (1))){
var state_12303__$1 = state_12303;
var statearr_12310_12450 = state_12303__$1;
(statearr_12310_12450[(2)] = null);

(statearr_12310_12450[(1)] = (2));


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
});})(__12432,c__7303__auto___12444,G__12263_12433,n__4490__auto___12431,jobs,results,process,async))
;
return ((function (__12432,switch__7288__auto__,c__7303__auto___12444,G__12263_12433,n__4490__auto___12431,jobs,results,process,async){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_12314 = [null,null,null,null,null,null,null];
(statearr_12314[(0)] = state_machine__7289__auto__);

(statearr_12314[(1)] = (1));

return statearr_12314;
});
var state_machine__7289__auto____1 = (function (state_12303){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_12303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e12315){if((e12315 instanceof Object)){
var ex__7292__auto__ = e12315;
var statearr_12316_12451 = state_12303;
(statearr_12316_12451[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12452 = state_12303;
state_12303 = G__12452;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_12303){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_12303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(__12432,switch__7288__auto__,c__7303__auto___12444,G__12263_12433,n__4490__auto___12431,jobs,results,process,async))
})();
var state__7305__auto__ = (function (){var statearr_12317 = f__7304__auto__.call(null);
(statearr_12317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___12444);

return statearr_12317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(__12432,c__7303__auto___12444,G__12263_12433,n__4490__auto___12431,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__12453 = (__12432 + (1));
__12432 = G__12453;
continue;
} else {
}
break;
}

var c__7303__auto___12454 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___12454,jobs,results,process,async){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___12454,jobs,results,process,async){
return (function (state_12339){
var state_val_12340 = (state_12339[(1)]);
if((state_val_12340 === (9))){
var inst_12332 = (state_12339[(2)]);
var state_12339__$1 = (function (){var statearr_12341 = state_12339;
(statearr_12341[(7)] = inst_12332);

return statearr_12341;
})();
var statearr_12342_12455 = state_12339__$1;
(statearr_12342_12455[(2)] = null);

(statearr_12342_12455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12340 === (8))){
var inst_12325 = (state_12339[(8)]);
var inst_12330 = (state_12339[(2)]);
var state_12339__$1 = (function (){var statearr_12343 = state_12339;
(statearr_12343[(9)] = inst_12330);

return statearr_12343;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12339__$1,(9),results,inst_12325);
} else {
if((state_val_12340 === (7))){
var inst_12335 = (state_12339[(2)]);
var state_12339__$1 = state_12339;
var statearr_12344_12456 = state_12339__$1;
(statearr_12344_12456[(2)] = inst_12335);

(statearr_12344_12456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12340 === (6))){
var inst_12320 = (state_12339[(10)]);
var inst_12325 = (state_12339[(8)]);
var inst_12325__$1 = cljs.core.async.chan.call(null,(1));
var inst_12326 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12327 = [inst_12320,inst_12325__$1];
var inst_12328 = (new cljs.core.PersistentVector(null,2,(5),inst_12326,inst_12327,null));
var state_12339__$1 = (function (){var statearr_12345 = state_12339;
(statearr_12345[(8)] = inst_12325__$1);

return statearr_12345;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12339__$1,(8),jobs,inst_12328);
} else {
if((state_val_12340 === (5))){
var inst_12323 = cljs.core.async.close_BANG_.call(null,jobs);
var state_12339__$1 = state_12339;
var statearr_12346_12457 = state_12339__$1;
(statearr_12346_12457[(2)] = inst_12323);

(statearr_12346_12457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12340 === (4))){
var inst_12320 = (state_12339[(10)]);
var inst_12320__$1 = (state_12339[(2)]);
var inst_12321 = (inst_12320__$1 == null);
var state_12339__$1 = (function (){var statearr_12347 = state_12339;
(statearr_12347[(10)] = inst_12320__$1);

return statearr_12347;
})();
if(cljs.core.truth_(inst_12321)){
var statearr_12348_12458 = state_12339__$1;
(statearr_12348_12458[(1)] = (5));

} else {
var statearr_12349_12459 = state_12339__$1;
(statearr_12349_12459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12340 === (3))){
var inst_12337 = (state_12339[(2)]);
var state_12339__$1 = state_12339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12339__$1,inst_12337);
} else {
if((state_val_12340 === (2))){
var state_12339__$1 = state_12339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12339__$1,(4),from);
} else {
if((state_val_12340 === (1))){
var state_12339__$1 = state_12339;
var statearr_12350_12460 = state_12339__$1;
(statearr_12350_12460[(2)] = null);

(statearr_12350_12460[(1)] = (2));


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
});})(c__7303__auto___12454,jobs,results,process,async))
;
return ((function (switch__7288__auto__,c__7303__auto___12454,jobs,results,process,async){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_12354 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12354[(0)] = state_machine__7289__auto__);

(statearr_12354[(1)] = (1));

return statearr_12354;
});
var state_machine__7289__auto____1 = (function (state_12339){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_12339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e12355){if((e12355 instanceof Object)){
var ex__7292__auto__ = e12355;
var statearr_12356_12461 = state_12339;
(statearr_12356_12461[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12462 = state_12339;
state_12339 = G__12462;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_12339){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_12339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___12454,jobs,results,process,async))
})();
var state__7305__auto__ = (function (){var statearr_12357 = f__7304__auto__.call(null);
(statearr_12357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___12454);

return statearr_12357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___12454,jobs,results,process,async))
);


var c__7303__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto__,jobs,results,process,async){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto__,jobs,results,process,async){
return (function (state_12395){
var state_val_12396 = (state_12395[(1)]);
if((state_val_12396 === (7))){
var inst_12391 = (state_12395[(2)]);
var state_12395__$1 = state_12395;
var statearr_12397_12463 = state_12395__$1;
(statearr_12397_12463[(2)] = inst_12391);

(statearr_12397_12463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12396 === (20))){
var state_12395__$1 = state_12395;
var statearr_12398_12464 = state_12395__$1;
(statearr_12398_12464[(2)] = null);

(statearr_12398_12464[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12396 === (1))){
var state_12395__$1 = state_12395;
var statearr_12399_12465 = state_12395__$1;
(statearr_12399_12465[(2)] = null);

(statearr_12399_12465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12396 === (4))){
var inst_12360 = (state_12395[(7)]);
var inst_12360__$1 = (state_12395[(2)]);
var inst_12361 = (inst_12360__$1 == null);
var state_12395__$1 = (function (){var statearr_12400 = state_12395;
(statearr_12400[(7)] = inst_12360__$1);

return statearr_12400;
})();
if(cljs.core.truth_(inst_12361)){
var statearr_12401_12466 = state_12395__$1;
(statearr_12401_12466[(1)] = (5));

} else {
var statearr_12402_12467 = state_12395__$1;
(statearr_12402_12467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12396 === (15))){
var inst_12373 = (state_12395[(8)]);
var state_12395__$1 = state_12395;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12395__$1,(18),to,inst_12373);
} else {
if((state_val_12396 === (21))){
var inst_12386 = (state_12395[(2)]);
var state_12395__$1 = state_12395;
var statearr_12403_12468 = state_12395__$1;
(statearr_12403_12468[(2)] = inst_12386);

(statearr_12403_12468[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12396 === (13))){
var inst_12388 = (state_12395[(2)]);
var state_12395__$1 = (function (){var statearr_12404 = state_12395;
(statearr_12404[(9)] = inst_12388);

return statearr_12404;
})();
var statearr_12405_12469 = state_12395__$1;
(statearr_12405_12469[(2)] = null);

(statearr_12405_12469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12396 === (6))){
var inst_12360 = (state_12395[(7)]);
var state_12395__$1 = state_12395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12395__$1,(11),inst_12360);
} else {
if((state_val_12396 === (17))){
var inst_12381 = (state_12395[(2)]);
var state_12395__$1 = state_12395;
if(cljs.core.truth_(inst_12381)){
var statearr_12406_12470 = state_12395__$1;
(statearr_12406_12470[(1)] = (19));

} else {
var statearr_12407_12471 = state_12395__$1;
(statearr_12407_12471[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12396 === (3))){
var inst_12393 = (state_12395[(2)]);
var state_12395__$1 = state_12395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12395__$1,inst_12393);
} else {
if((state_val_12396 === (12))){
var inst_12370 = (state_12395[(10)]);
var state_12395__$1 = state_12395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12395__$1,(14),inst_12370);
} else {
if((state_val_12396 === (2))){
var state_12395__$1 = state_12395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12395__$1,(4),results);
} else {
if((state_val_12396 === (19))){
var state_12395__$1 = state_12395;
var statearr_12408_12472 = state_12395__$1;
(statearr_12408_12472[(2)] = null);

(statearr_12408_12472[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12396 === (11))){
var inst_12370 = (state_12395[(2)]);
var state_12395__$1 = (function (){var statearr_12409 = state_12395;
(statearr_12409[(10)] = inst_12370);

return statearr_12409;
})();
var statearr_12410_12473 = state_12395__$1;
(statearr_12410_12473[(2)] = null);

(statearr_12410_12473[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12396 === (9))){
var state_12395__$1 = state_12395;
var statearr_12411_12474 = state_12395__$1;
(statearr_12411_12474[(2)] = null);

(statearr_12411_12474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12396 === (5))){
var state_12395__$1 = state_12395;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12412_12475 = state_12395__$1;
(statearr_12412_12475[(1)] = (8));

} else {
var statearr_12413_12476 = state_12395__$1;
(statearr_12413_12476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12396 === (14))){
var inst_12373 = (state_12395[(8)]);
var inst_12375 = (state_12395[(11)]);
var inst_12373__$1 = (state_12395[(2)]);
var inst_12374 = (inst_12373__$1 == null);
var inst_12375__$1 = cljs.core.not.call(null,inst_12374);
var state_12395__$1 = (function (){var statearr_12414 = state_12395;
(statearr_12414[(8)] = inst_12373__$1);

(statearr_12414[(11)] = inst_12375__$1);

return statearr_12414;
})();
if(inst_12375__$1){
var statearr_12415_12477 = state_12395__$1;
(statearr_12415_12477[(1)] = (15));

} else {
var statearr_12416_12478 = state_12395__$1;
(statearr_12416_12478[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12396 === (16))){
var inst_12375 = (state_12395[(11)]);
var state_12395__$1 = state_12395;
var statearr_12417_12479 = state_12395__$1;
(statearr_12417_12479[(2)] = inst_12375);

(statearr_12417_12479[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12396 === (10))){
var inst_12367 = (state_12395[(2)]);
var state_12395__$1 = state_12395;
var statearr_12418_12480 = state_12395__$1;
(statearr_12418_12480[(2)] = inst_12367);

(statearr_12418_12480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12396 === (18))){
var inst_12378 = (state_12395[(2)]);
var state_12395__$1 = state_12395;
var statearr_12419_12481 = state_12395__$1;
(statearr_12419_12481[(2)] = inst_12378);

(statearr_12419_12481[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12396 === (8))){
var inst_12364 = cljs.core.async.close_BANG_.call(null,to);
var state_12395__$1 = state_12395;
var statearr_12420_12482 = state_12395__$1;
(statearr_12420_12482[(2)] = inst_12364);

(statearr_12420_12482[(1)] = (10));


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
var statearr_12424 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12424[(0)] = state_machine__7289__auto__);

(statearr_12424[(1)] = (1));

return statearr_12424;
});
var state_machine__7289__auto____1 = (function (state_12395){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_12395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e12425){if((e12425 instanceof Object)){
var ex__7292__auto__ = e12425;
var statearr_12426_12483 = state_12395;
(statearr_12426_12483[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12484 = state_12395;
state_12395 = G__12484;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_12395){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_12395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto__,jobs,results,process,async))
})();
var state__7305__auto__ = (function (){var statearr_12427 = f__7304__auto__.call(null);
(statearr_12427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto__);

return statearr_12427;
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
var c__7303__auto___12585 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___12585,tc,fc){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___12585,tc,fc){
return (function (state_12560){
var state_val_12561 = (state_12560[(1)]);
if((state_val_12561 === (7))){
var inst_12556 = (state_12560[(2)]);
var state_12560__$1 = state_12560;
var statearr_12562_12586 = state_12560__$1;
(statearr_12562_12586[(2)] = inst_12556);

(statearr_12562_12586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12561 === (1))){
var state_12560__$1 = state_12560;
var statearr_12563_12587 = state_12560__$1;
(statearr_12563_12587[(2)] = null);

(statearr_12563_12587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12561 === (4))){
var inst_12537 = (state_12560[(7)]);
var inst_12537__$1 = (state_12560[(2)]);
var inst_12538 = (inst_12537__$1 == null);
var state_12560__$1 = (function (){var statearr_12564 = state_12560;
(statearr_12564[(7)] = inst_12537__$1);

return statearr_12564;
})();
if(cljs.core.truth_(inst_12538)){
var statearr_12565_12588 = state_12560__$1;
(statearr_12565_12588[(1)] = (5));

} else {
var statearr_12566_12589 = state_12560__$1;
(statearr_12566_12589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12561 === (13))){
var state_12560__$1 = state_12560;
var statearr_12567_12590 = state_12560__$1;
(statearr_12567_12590[(2)] = null);

(statearr_12567_12590[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12561 === (6))){
var inst_12537 = (state_12560[(7)]);
var inst_12543 = p.call(null,inst_12537);
var state_12560__$1 = state_12560;
if(cljs.core.truth_(inst_12543)){
var statearr_12568_12591 = state_12560__$1;
(statearr_12568_12591[(1)] = (9));

} else {
var statearr_12569_12592 = state_12560__$1;
(statearr_12569_12592[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12561 === (3))){
var inst_12558 = (state_12560[(2)]);
var state_12560__$1 = state_12560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12560__$1,inst_12558);
} else {
if((state_val_12561 === (12))){
var state_12560__$1 = state_12560;
var statearr_12570_12593 = state_12560__$1;
(statearr_12570_12593[(2)] = null);

(statearr_12570_12593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12561 === (2))){
var state_12560__$1 = state_12560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12560__$1,(4),ch);
} else {
if((state_val_12561 === (11))){
var inst_12537 = (state_12560[(7)]);
var inst_12547 = (state_12560[(2)]);
var state_12560__$1 = state_12560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12560__$1,(8),inst_12547,inst_12537);
} else {
if((state_val_12561 === (9))){
var state_12560__$1 = state_12560;
var statearr_12571_12594 = state_12560__$1;
(statearr_12571_12594[(2)] = tc);

(statearr_12571_12594[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12561 === (5))){
var inst_12540 = cljs.core.async.close_BANG_.call(null,tc);
var inst_12541 = cljs.core.async.close_BANG_.call(null,fc);
var state_12560__$1 = (function (){var statearr_12572 = state_12560;
(statearr_12572[(8)] = inst_12540);

return statearr_12572;
})();
var statearr_12573_12595 = state_12560__$1;
(statearr_12573_12595[(2)] = inst_12541);

(statearr_12573_12595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12561 === (14))){
var inst_12554 = (state_12560[(2)]);
var state_12560__$1 = state_12560;
var statearr_12574_12596 = state_12560__$1;
(statearr_12574_12596[(2)] = inst_12554);

(statearr_12574_12596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12561 === (10))){
var state_12560__$1 = state_12560;
var statearr_12575_12597 = state_12560__$1;
(statearr_12575_12597[(2)] = fc);

(statearr_12575_12597[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12561 === (8))){
var inst_12549 = (state_12560[(2)]);
var state_12560__$1 = state_12560;
if(cljs.core.truth_(inst_12549)){
var statearr_12576_12598 = state_12560__$1;
(statearr_12576_12598[(1)] = (12));

} else {
var statearr_12577_12599 = state_12560__$1;
(statearr_12577_12599[(1)] = (13));

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
});})(c__7303__auto___12585,tc,fc))
;
return ((function (switch__7288__auto__,c__7303__auto___12585,tc,fc){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_12581 = [null,null,null,null,null,null,null,null,null];
(statearr_12581[(0)] = state_machine__7289__auto__);

(statearr_12581[(1)] = (1));

return statearr_12581;
});
var state_machine__7289__auto____1 = (function (state_12560){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_12560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e12582){if((e12582 instanceof Object)){
var ex__7292__auto__ = e12582;
var statearr_12583_12600 = state_12560;
(statearr_12583_12600[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12601 = state_12560;
state_12560 = G__12601;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_12560){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_12560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___12585,tc,fc))
})();
var state__7305__auto__ = (function (){var statearr_12584 = f__7304__auto__.call(null);
(statearr_12584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___12585);

return statearr_12584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___12585,tc,fc))
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
return (function (state_12648){
var state_val_12649 = (state_12648[(1)]);
if((state_val_12649 === (7))){
var inst_12644 = (state_12648[(2)]);
var state_12648__$1 = state_12648;
var statearr_12650_12666 = state_12648__$1;
(statearr_12650_12666[(2)] = inst_12644);

(statearr_12650_12666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12649 === (6))){
var inst_12637 = (state_12648[(7)]);
var inst_12634 = (state_12648[(8)]);
var inst_12641 = f.call(null,inst_12634,inst_12637);
var inst_12634__$1 = inst_12641;
var state_12648__$1 = (function (){var statearr_12651 = state_12648;
(statearr_12651[(8)] = inst_12634__$1);

return statearr_12651;
})();
var statearr_12652_12667 = state_12648__$1;
(statearr_12652_12667[(2)] = null);

(statearr_12652_12667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12649 === (5))){
var inst_12634 = (state_12648[(8)]);
var state_12648__$1 = state_12648;
var statearr_12653_12668 = state_12648__$1;
(statearr_12653_12668[(2)] = inst_12634);

(statearr_12653_12668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12649 === (4))){
var inst_12637 = (state_12648[(7)]);
var inst_12637__$1 = (state_12648[(2)]);
var inst_12638 = (inst_12637__$1 == null);
var state_12648__$1 = (function (){var statearr_12654 = state_12648;
(statearr_12654[(7)] = inst_12637__$1);

return statearr_12654;
})();
if(cljs.core.truth_(inst_12638)){
var statearr_12655_12669 = state_12648__$1;
(statearr_12655_12669[(1)] = (5));

} else {
var statearr_12656_12670 = state_12648__$1;
(statearr_12656_12670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12649 === (3))){
var inst_12646 = (state_12648[(2)]);
var state_12648__$1 = state_12648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12648__$1,inst_12646);
} else {
if((state_val_12649 === (2))){
var state_12648__$1 = state_12648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12648__$1,(4),ch);
} else {
if((state_val_12649 === (1))){
var inst_12634 = init;
var state_12648__$1 = (function (){var statearr_12657 = state_12648;
(statearr_12657[(8)] = inst_12634);

return statearr_12657;
})();
var statearr_12658_12671 = state_12648__$1;
(statearr_12658_12671[(2)] = null);

(statearr_12658_12671[(1)] = (2));


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
var statearr_12662 = [null,null,null,null,null,null,null,null,null];
(statearr_12662[(0)] = state_machine__7289__auto__);

(statearr_12662[(1)] = (1));

return statearr_12662;
});
var state_machine__7289__auto____1 = (function (state_12648){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_12648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e12663){if((e12663 instanceof Object)){
var ex__7292__auto__ = e12663;
var statearr_12664_12672 = state_12648;
(statearr_12664_12672[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12673 = state_12648;
state_12648 = G__12673;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_12648){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_12648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto__))
})();
var state__7305__auto__ = (function (){var statearr_12665 = f__7304__auto__.call(null);
(statearr_12665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto__);

return statearr_12665;
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
return (function (state_12747){
var state_val_12748 = (state_12747[(1)]);
if((state_val_12748 === (7))){
var inst_12729 = (state_12747[(2)]);
var state_12747__$1 = state_12747;
var statearr_12749_12772 = state_12747__$1;
(statearr_12749_12772[(2)] = inst_12729);

(statearr_12749_12772[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12748 === (1))){
var inst_12723 = cljs.core.seq.call(null,coll);
var inst_12724 = inst_12723;
var state_12747__$1 = (function (){var statearr_12750 = state_12747;
(statearr_12750[(7)] = inst_12724);

return statearr_12750;
})();
var statearr_12751_12773 = state_12747__$1;
(statearr_12751_12773[(2)] = null);

(statearr_12751_12773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12748 === (4))){
var inst_12724 = (state_12747[(7)]);
var inst_12727 = cljs.core.first.call(null,inst_12724);
var state_12747__$1 = state_12747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12747__$1,(7),ch,inst_12727);
} else {
if((state_val_12748 === (13))){
var inst_12741 = (state_12747[(2)]);
var state_12747__$1 = state_12747;
var statearr_12752_12774 = state_12747__$1;
(statearr_12752_12774[(2)] = inst_12741);

(statearr_12752_12774[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12748 === (6))){
var inst_12732 = (state_12747[(2)]);
var state_12747__$1 = state_12747;
if(cljs.core.truth_(inst_12732)){
var statearr_12753_12775 = state_12747__$1;
(statearr_12753_12775[(1)] = (8));

} else {
var statearr_12754_12776 = state_12747__$1;
(statearr_12754_12776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12748 === (3))){
var inst_12745 = (state_12747[(2)]);
var state_12747__$1 = state_12747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12747__$1,inst_12745);
} else {
if((state_val_12748 === (12))){
var state_12747__$1 = state_12747;
var statearr_12755_12777 = state_12747__$1;
(statearr_12755_12777[(2)] = null);

(statearr_12755_12777[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12748 === (2))){
var inst_12724 = (state_12747[(7)]);
var state_12747__$1 = state_12747;
if(cljs.core.truth_(inst_12724)){
var statearr_12756_12778 = state_12747__$1;
(statearr_12756_12778[(1)] = (4));

} else {
var statearr_12757_12779 = state_12747__$1;
(statearr_12757_12779[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12748 === (11))){
var inst_12738 = cljs.core.async.close_BANG_.call(null,ch);
var state_12747__$1 = state_12747;
var statearr_12758_12780 = state_12747__$1;
(statearr_12758_12780[(2)] = inst_12738);

(statearr_12758_12780[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12748 === (9))){
var state_12747__$1 = state_12747;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12759_12781 = state_12747__$1;
(statearr_12759_12781[(1)] = (11));

} else {
var statearr_12760_12782 = state_12747__$1;
(statearr_12760_12782[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12748 === (5))){
var inst_12724 = (state_12747[(7)]);
var state_12747__$1 = state_12747;
var statearr_12761_12783 = state_12747__$1;
(statearr_12761_12783[(2)] = inst_12724);

(statearr_12761_12783[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12748 === (10))){
var inst_12743 = (state_12747[(2)]);
var state_12747__$1 = state_12747;
var statearr_12762_12784 = state_12747__$1;
(statearr_12762_12784[(2)] = inst_12743);

(statearr_12762_12784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12748 === (8))){
var inst_12724 = (state_12747[(7)]);
var inst_12734 = cljs.core.next.call(null,inst_12724);
var inst_12724__$1 = inst_12734;
var state_12747__$1 = (function (){var statearr_12763 = state_12747;
(statearr_12763[(7)] = inst_12724__$1);

return statearr_12763;
})();
var statearr_12764_12785 = state_12747__$1;
(statearr_12764_12785[(2)] = null);

(statearr_12764_12785[(1)] = (2));


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
var statearr_12768 = [null,null,null,null,null,null,null,null];
(statearr_12768[(0)] = state_machine__7289__auto__);

(statearr_12768[(1)] = (1));

return statearr_12768;
});
var state_machine__7289__auto____1 = (function (state_12747){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_12747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e12769){if((e12769 instanceof Object)){
var ex__7292__auto__ = e12769;
var statearr_12770_12786 = state_12747;
(statearr_12770_12786[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12787 = state_12747;
state_12747 = G__12787;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_12747){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_12747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto__))
})();
var state__7305__auto__ = (function (){var statearr_12771 = f__7304__auto__.call(null);
(statearr_12771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto__);

return statearr_12771;
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

cljs.core.async.Mux = (function (){var obj12789 = {};
return obj12789;
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


cljs.core.async.Mult = (function (){var obj12791 = {};
return obj12791;
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
if(typeof cljs.core.async.t13013 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13013 = (function (cs,ch,mult,meta13014){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13014 = meta13014;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13013.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t13013.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t13013.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t13013.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t13013.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t13013.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t13013.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13015){
var self__ = this;
var _13015__$1 = this;
return self__.meta13014;
});})(cs))
;

cljs.core.async.t13013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13015,meta13014__$1){
var self__ = this;
var _13015__$1 = this;
return (new cljs.core.async.t13013(self__.cs,self__.ch,self__.mult,meta13014__$1));
});})(cs))
;

cljs.core.async.t13013.cljs$lang$type = true;

cljs.core.async.t13013.cljs$lang$ctorStr = "cljs.core.async/t13013";

cljs.core.async.t13013.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t13013");
});})(cs))
;

cljs.core.async.__GT_t13013 = ((function (cs){
return (function __GT_t13013(cs__$1,ch__$1,mult__$1,meta13014){
return (new cljs.core.async.t13013(cs__$1,ch__$1,mult__$1,meta13014));
});})(cs))
;

}

return (new cljs.core.async.t13013(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
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
var c__7303__auto___13234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___13234,cs,m,dchan,dctr,done){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___13234,cs,m,dchan,dctr,done){
return (function (state_13146){
var state_val_13147 = (state_13146[(1)]);
if((state_val_13147 === (7))){
var inst_13142 = (state_13146[(2)]);
var state_13146__$1 = state_13146;
var statearr_13148_13235 = state_13146__$1;
(statearr_13148_13235[(2)] = inst_13142);

(statearr_13148_13235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (20))){
var inst_13047 = (state_13146[(7)]);
var inst_13057 = cljs.core.first.call(null,inst_13047);
var inst_13058 = cljs.core.nth.call(null,inst_13057,(0),null);
var inst_13059 = cljs.core.nth.call(null,inst_13057,(1),null);
var state_13146__$1 = (function (){var statearr_13149 = state_13146;
(statearr_13149[(8)] = inst_13058);

return statearr_13149;
})();
if(cljs.core.truth_(inst_13059)){
var statearr_13150_13236 = state_13146__$1;
(statearr_13150_13236[(1)] = (22));

} else {
var statearr_13151_13237 = state_13146__$1;
(statearr_13151_13237[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (27))){
var inst_13089 = (state_13146[(9)]);
var inst_13094 = (state_13146[(10)]);
var inst_13087 = (state_13146[(11)]);
var inst_13018 = (state_13146[(12)]);
var inst_13094__$1 = cljs.core._nth.call(null,inst_13087,inst_13089);
var inst_13095 = cljs.core.async.put_BANG_.call(null,inst_13094__$1,inst_13018,done);
var state_13146__$1 = (function (){var statearr_13152 = state_13146;
(statearr_13152[(10)] = inst_13094__$1);

return statearr_13152;
})();
if(cljs.core.truth_(inst_13095)){
var statearr_13153_13238 = state_13146__$1;
(statearr_13153_13238[(1)] = (30));

} else {
var statearr_13154_13239 = state_13146__$1;
(statearr_13154_13239[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (1))){
var state_13146__$1 = state_13146;
var statearr_13155_13240 = state_13146__$1;
(statearr_13155_13240[(2)] = null);

(statearr_13155_13240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (24))){
var inst_13047 = (state_13146[(7)]);
var inst_13064 = (state_13146[(2)]);
var inst_13065 = cljs.core.next.call(null,inst_13047);
var inst_13027 = inst_13065;
var inst_13028 = null;
var inst_13029 = (0);
var inst_13030 = (0);
var state_13146__$1 = (function (){var statearr_13156 = state_13146;
(statearr_13156[(13)] = inst_13028);

(statearr_13156[(14)] = inst_13027);

(statearr_13156[(15)] = inst_13064);

(statearr_13156[(16)] = inst_13029);

(statearr_13156[(17)] = inst_13030);

return statearr_13156;
})();
var statearr_13157_13241 = state_13146__$1;
(statearr_13157_13241[(2)] = null);

(statearr_13157_13241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (39))){
var state_13146__$1 = state_13146;
var statearr_13161_13242 = state_13146__$1;
(statearr_13161_13242[(2)] = null);

(statearr_13161_13242[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (4))){
var inst_13018 = (state_13146[(12)]);
var inst_13018__$1 = (state_13146[(2)]);
var inst_13019 = (inst_13018__$1 == null);
var state_13146__$1 = (function (){var statearr_13162 = state_13146;
(statearr_13162[(12)] = inst_13018__$1);

return statearr_13162;
})();
if(cljs.core.truth_(inst_13019)){
var statearr_13163_13243 = state_13146__$1;
(statearr_13163_13243[(1)] = (5));

} else {
var statearr_13164_13244 = state_13146__$1;
(statearr_13164_13244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (15))){
var inst_13028 = (state_13146[(13)]);
var inst_13027 = (state_13146[(14)]);
var inst_13029 = (state_13146[(16)]);
var inst_13030 = (state_13146[(17)]);
var inst_13043 = (state_13146[(2)]);
var inst_13044 = (inst_13030 + (1));
var tmp13158 = inst_13028;
var tmp13159 = inst_13027;
var tmp13160 = inst_13029;
var inst_13027__$1 = tmp13159;
var inst_13028__$1 = tmp13158;
var inst_13029__$1 = tmp13160;
var inst_13030__$1 = inst_13044;
var state_13146__$1 = (function (){var statearr_13165 = state_13146;
(statearr_13165[(13)] = inst_13028__$1);

(statearr_13165[(14)] = inst_13027__$1);

(statearr_13165[(16)] = inst_13029__$1);

(statearr_13165[(18)] = inst_13043);

(statearr_13165[(17)] = inst_13030__$1);

return statearr_13165;
})();
var statearr_13166_13245 = state_13146__$1;
(statearr_13166_13245[(2)] = null);

(statearr_13166_13245[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (21))){
var inst_13068 = (state_13146[(2)]);
var state_13146__$1 = state_13146;
var statearr_13170_13246 = state_13146__$1;
(statearr_13170_13246[(2)] = inst_13068);

(statearr_13170_13246[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (31))){
var inst_13094 = (state_13146[(10)]);
var inst_13098 = done.call(null,null);
var inst_13099 = cljs.core.async.untap_STAR_.call(null,m,inst_13094);
var state_13146__$1 = (function (){var statearr_13171 = state_13146;
(statearr_13171[(19)] = inst_13098);

return statearr_13171;
})();
var statearr_13172_13247 = state_13146__$1;
(statearr_13172_13247[(2)] = inst_13099);

(statearr_13172_13247[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (32))){
var inst_13086 = (state_13146[(20)]);
var inst_13089 = (state_13146[(9)]);
var inst_13087 = (state_13146[(11)]);
var inst_13088 = (state_13146[(21)]);
var inst_13101 = (state_13146[(2)]);
var inst_13102 = (inst_13089 + (1));
var tmp13167 = inst_13086;
var tmp13168 = inst_13087;
var tmp13169 = inst_13088;
var inst_13086__$1 = tmp13167;
var inst_13087__$1 = tmp13168;
var inst_13088__$1 = tmp13169;
var inst_13089__$1 = inst_13102;
var state_13146__$1 = (function (){var statearr_13173 = state_13146;
(statearr_13173[(20)] = inst_13086__$1);

(statearr_13173[(9)] = inst_13089__$1);

(statearr_13173[(22)] = inst_13101);

(statearr_13173[(11)] = inst_13087__$1);

(statearr_13173[(21)] = inst_13088__$1);

return statearr_13173;
})();
var statearr_13174_13248 = state_13146__$1;
(statearr_13174_13248[(2)] = null);

(statearr_13174_13248[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (40))){
var inst_13114 = (state_13146[(23)]);
var inst_13118 = done.call(null,null);
var inst_13119 = cljs.core.async.untap_STAR_.call(null,m,inst_13114);
var state_13146__$1 = (function (){var statearr_13175 = state_13146;
(statearr_13175[(24)] = inst_13118);

return statearr_13175;
})();
var statearr_13176_13249 = state_13146__$1;
(statearr_13176_13249[(2)] = inst_13119);

(statearr_13176_13249[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (33))){
var inst_13105 = (state_13146[(25)]);
var inst_13107 = cljs.core.chunked_seq_QMARK_.call(null,inst_13105);
var state_13146__$1 = state_13146;
if(inst_13107){
var statearr_13177_13250 = state_13146__$1;
(statearr_13177_13250[(1)] = (36));

} else {
var statearr_13178_13251 = state_13146__$1;
(statearr_13178_13251[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (13))){
var inst_13037 = (state_13146[(26)]);
var inst_13040 = cljs.core.async.close_BANG_.call(null,inst_13037);
var state_13146__$1 = state_13146;
var statearr_13179_13252 = state_13146__$1;
(statearr_13179_13252[(2)] = inst_13040);

(statearr_13179_13252[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (22))){
var inst_13058 = (state_13146[(8)]);
var inst_13061 = cljs.core.async.close_BANG_.call(null,inst_13058);
var state_13146__$1 = state_13146;
var statearr_13180_13253 = state_13146__$1;
(statearr_13180_13253[(2)] = inst_13061);

(statearr_13180_13253[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (36))){
var inst_13105 = (state_13146[(25)]);
var inst_13109 = cljs.core.chunk_first.call(null,inst_13105);
var inst_13110 = cljs.core.chunk_rest.call(null,inst_13105);
var inst_13111 = cljs.core.count.call(null,inst_13109);
var inst_13086 = inst_13110;
var inst_13087 = inst_13109;
var inst_13088 = inst_13111;
var inst_13089 = (0);
var state_13146__$1 = (function (){var statearr_13181 = state_13146;
(statearr_13181[(20)] = inst_13086);

(statearr_13181[(9)] = inst_13089);

(statearr_13181[(11)] = inst_13087);

(statearr_13181[(21)] = inst_13088);

return statearr_13181;
})();
var statearr_13182_13254 = state_13146__$1;
(statearr_13182_13254[(2)] = null);

(statearr_13182_13254[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (41))){
var inst_13105 = (state_13146[(25)]);
var inst_13121 = (state_13146[(2)]);
var inst_13122 = cljs.core.next.call(null,inst_13105);
var inst_13086 = inst_13122;
var inst_13087 = null;
var inst_13088 = (0);
var inst_13089 = (0);
var state_13146__$1 = (function (){var statearr_13183 = state_13146;
(statearr_13183[(20)] = inst_13086);

(statearr_13183[(27)] = inst_13121);

(statearr_13183[(9)] = inst_13089);

(statearr_13183[(11)] = inst_13087);

(statearr_13183[(21)] = inst_13088);

return statearr_13183;
})();
var statearr_13184_13255 = state_13146__$1;
(statearr_13184_13255[(2)] = null);

(statearr_13184_13255[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (43))){
var state_13146__$1 = state_13146;
var statearr_13185_13256 = state_13146__$1;
(statearr_13185_13256[(2)] = null);

(statearr_13185_13256[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (29))){
var inst_13130 = (state_13146[(2)]);
var state_13146__$1 = state_13146;
var statearr_13186_13257 = state_13146__$1;
(statearr_13186_13257[(2)] = inst_13130);

(statearr_13186_13257[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (44))){
var inst_13139 = (state_13146[(2)]);
var state_13146__$1 = (function (){var statearr_13187 = state_13146;
(statearr_13187[(28)] = inst_13139);

return statearr_13187;
})();
var statearr_13188_13258 = state_13146__$1;
(statearr_13188_13258[(2)] = null);

(statearr_13188_13258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (6))){
var inst_13078 = (state_13146[(29)]);
var inst_13077 = cljs.core.deref.call(null,cs);
var inst_13078__$1 = cljs.core.keys.call(null,inst_13077);
var inst_13079 = cljs.core.count.call(null,inst_13078__$1);
var inst_13080 = cljs.core.reset_BANG_.call(null,dctr,inst_13079);
var inst_13085 = cljs.core.seq.call(null,inst_13078__$1);
var inst_13086 = inst_13085;
var inst_13087 = null;
var inst_13088 = (0);
var inst_13089 = (0);
var state_13146__$1 = (function (){var statearr_13189 = state_13146;
(statearr_13189[(20)] = inst_13086);

(statearr_13189[(9)] = inst_13089);

(statearr_13189[(29)] = inst_13078__$1);

(statearr_13189[(30)] = inst_13080);

(statearr_13189[(11)] = inst_13087);

(statearr_13189[(21)] = inst_13088);

return statearr_13189;
})();
var statearr_13190_13259 = state_13146__$1;
(statearr_13190_13259[(2)] = null);

(statearr_13190_13259[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (28))){
var inst_13086 = (state_13146[(20)]);
var inst_13105 = (state_13146[(25)]);
var inst_13105__$1 = cljs.core.seq.call(null,inst_13086);
var state_13146__$1 = (function (){var statearr_13191 = state_13146;
(statearr_13191[(25)] = inst_13105__$1);

return statearr_13191;
})();
if(inst_13105__$1){
var statearr_13192_13260 = state_13146__$1;
(statearr_13192_13260[(1)] = (33));

} else {
var statearr_13193_13261 = state_13146__$1;
(statearr_13193_13261[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (25))){
var inst_13089 = (state_13146[(9)]);
var inst_13088 = (state_13146[(21)]);
var inst_13091 = (inst_13089 < inst_13088);
var inst_13092 = inst_13091;
var state_13146__$1 = state_13146;
if(cljs.core.truth_(inst_13092)){
var statearr_13194_13262 = state_13146__$1;
(statearr_13194_13262[(1)] = (27));

} else {
var statearr_13195_13263 = state_13146__$1;
(statearr_13195_13263[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (34))){
var state_13146__$1 = state_13146;
var statearr_13196_13264 = state_13146__$1;
(statearr_13196_13264[(2)] = null);

(statearr_13196_13264[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (17))){
var state_13146__$1 = state_13146;
var statearr_13197_13265 = state_13146__$1;
(statearr_13197_13265[(2)] = null);

(statearr_13197_13265[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (3))){
var inst_13144 = (state_13146[(2)]);
var state_13146__$1 = state_13146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13146__$1,inst_13144);
} else {
if((state_val_13147 === (12))){
var inst_13073 = (state_13146[(2)]);
var state_13146__$1 = state_13146;
var statearr_13198_13266 = state_13146__$1;
(statearr_13198_13266[(2)] = inst_13073);

(statearr_13198_13266[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (2))){
var state_13146__$1 = state_13146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13146__$1,(4),ch);
} else {
if((state_val_13147 === (23))){
var state_13146__$1 = state_13146;
var statearr_13199_13267 = state_13146__$1;
(statearr_13199_13267[(2)] = null);

(statearr_13199_13267[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (35))){
var inst_13128 = (state_13146[(2)]);
var state_13146__$1 = state_13146;
var statearr_13200_13268 = state_13146__$1;
(statearr_13200_13268[(2)] = inst_13128);

(statearr_13200_13268[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (19))){
var inst_13047 = (state_13146[(7)]);
var inst_13051 = cljs.core.chunk_first.call(null,inst_13047);
var inst_13052 = cljs.core.chunk_rest.call(null,inst_13047);
var inst_13053 = cljs.core.count.call(null,inst_13051);
var inst_13027 = inst_13052;
var inst_13028 = inst_13051;
var inst_13029 = inst_13053;
var inst_13030 = (0);
var state_13146__$1 = (function (){var statearr_13201 = state_13146;
(statearr_13201[(13)] = inst_13028);

(statearr_13201[(14)] = inst_13027);

(statearr_13201[(16)] = inst_13029);

(statearr_13201[(17)] = inst_13030);

return statearr_13201;
})();
var statearr_13202_13269 = state_13146__$1;
(statearr_13202_13269[(2)] = null);

(statearr_13202_13269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (11))){
var inst_13027 = (state_13146[(14)]);
var inst_13047 = (state_13146[(7)]);
var inst_13047__$1 = cljs.core.seq.call(null,inst_13027);
var state_13146__$1 = (function (){var statearr_13203 = state_13146;
(statearr_13203[(7)] = inst_13047__$1);

return statearr_13203;
})();
if(inst_13047__$1){
var statearr_13204_13270 = state_13146__$1;
(statearr_13204_13270[(1)] = (16));

} else {
var statearr_13205_13271 = state_13146__$1;
(statearr_13205_13271[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (9))){
var inst_13075 = (state_13146[(2)]);
var state_13146__$1 = state_13146;
var statearr_13206_13272 = state_13146__$1;
(statearr_13206_13272[(2)] = inst_13075);

(statearr_13206_13272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (5))){
var inst_13025 = cljs.core.deref.call(null,cs);
var inst_13026 = cljs.core.seq.call(null,inst_13025);
var inst_13027 = inst_13026;
var inst_13028 = null;
var inst_13029 = (0);
var inst_13030 = (0);
var state_13146__$1 = (function (){var statearr_13207 = state_13146;
(statearr_13207[(13)] = inst_13028);

(statearr_13207[(14)] = inst_13027);

(statearr_13207[(16)] = inst_13029);

(statearr_13207[(17)] = inst_13030);

return statearr_13207;
})();
var statearr_13208_13273 = state_13146__$1;
(statearr_13208_13273[(2)] = null);

(statearr_13208_13273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (14))){
var state_13146__$1 = state_13146;
var statearr_13209_13274 = state_13146__$1;
(statearr_13209_13274[(2)] = null);

(statearr_13209_13274[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (45))){
var inst_13136 = (state_13146[(2)]);
var state_13146__$1 = state_13146;
var statearr_13210_13275 = state_13146__$1;
(statearr_13210_13275[(2)] = inst_13136);

(statearr_13210_13275[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (26))){
var inst_13078 = (state_13146[(29)]);
var inst_13132 = (state_13146[(2)]);
var inst_13133 = cljs.core.seq.call(null,inst_13078);
var state_13146__$1 = (function (){var statearr_13211 = state_13146;
(statearr_13211[(31)] = inst_13132);

return statearr_13211;
})();
if(inst_13133){
var statearr_13212_13276 = state_13146__$1;
(statearr_13212_13276[(1)] = (42));

} else {
var statearr_13213_13277 = state_13146__$1;
(statearr_13213_13277[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (16))){
var inst_13047 = (state_13146[(7)]);
var inst_13049 = cljs.core.chunked_seq_QMARK_.call(null,inst_13047);
var state_13146__$1 = state_13146;
if(inst_13049){
var statearr_13214_13278 = state_13146__$1;
(statearr_13214_13278[(1)] = (19));

} else {
var statearr_13215_13279 = state_13146__$1;
(statearr_13215_13279[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (38))){
var inst_13125 = (state_13146[(2)]);
var state_13146__$1 = state_13146;
var statearr_13216_13280 = state_13146__$1;
(statearr_13216_13280[(2)] = inst_13125);

(statearr_13216_13280[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (30))){
var state_13146__$1 = state_13146;
var statearr_13217_13281 = state_13146__$1;
(statearr_13217_13281[(2)] = null);

(statearr_13217_13281[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (10))){
var inst_13028 = (state_13146[(13)]);
var inst_13030 = (state_13146[(17)]);
var inst_13036 = cljs.core._nth.call(null,inst_13028,inst_13030);
var inst_13037 = cljs.core.nth.call(null,inst_13036,(0),null);
var inst_13038 = cljs.core.nth.call(null,inst_13036,(1),null);
var state_13146__$1 = (function (){var statearr_13218 = state_13146;
(statearr_13218[(26)] = inst_13037);

return statearr_13218;
})();
if(cljs.core.truth_(inst_13038)){
var statearr_13219_13282 = state_13146__$1;
(statearr_13219_13282[(1)] = (13));

} else {
var statearr_13220_13283 = state_13146__$1;
(statearr_13220_13283[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (18))){
var inst_13071 = (state_13146[(2)]);
var state_13146__$1 = state_13146;
var statearr_13221_13284 = state_13146__$1;
(statearr_13221_13284[(2)] = inst_13071);

(statearr_13221_13284[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (42))){
var state_13146__$1 = state_13146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13146__$1,(45),dchan);
} else {
if((state_val_13147 === (37))){
var inst_13105 = (state_13146[(25)]);
var inst_13114 = (state_13146[(23)]);
var inst_13018 = (state_13146[(12)]);
var inst_13114__$1 = cljs.core.first.call(null,inst_13105);
var inst_13115 = cljs.core.async.put_BANG_.call(null,inst_13114__$1,inst_13018,done);
var state_13146__$1 = (function (){var statearr_13222 = state_13146;
(statearr_13222[(23)] = inst_13114__$1);

return statearr_13222;
})();
if(cljs.core.truth_(inst_13115)){
var statearr_13223_13285 = state_13146__$1;
(statearr_13223_13285[(1)] = (39));

} else {
var statearr_13224_13286 = state_13146__$1;
(statearr_13224_13286[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13147 === (8))){
var inst_13029 = (state_13146[(16)]);
var inst_13030 = (state_13146[(17)]);
var inst_13032 = (inst_13030 < inst_13029);
var inst_13033 = inst_13032;
var state_13146__$1 = state_13146;
if(cljs.core.truth_(inst_13033)){
var statearr_13225_13287 = state_13146__$1;
(statearr_13225_13287[(1)] = (10));

} else {
var statearr_13226_13288 = state_13146__$1;
(statearr_13226_13288[(1)] = (11));

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
});})(c__7303__auto___13234,cs,m,dchan,dctr,done))
;
return ((function (switch__7288__auto__,c__7303__auto___13234,cs,m,dchan,dctr,done){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_13230 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13230[(0)] = state_machine__7289__auto__);

(statearr_13230[(1)] = (1));

return statearr_13230;
});
var state_machine__7289__auto____1 = (function (state_13146){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_13146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e13231){if((e13231 instanceof Object)){
var ex__7292__auto__ = e13231;
var statearr_13232_13289 = state_13146;
(statearr_13232_13289[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13290 = state_13146;
state_13146 = G__13290;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_13146){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_13146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___13234,cs,m,dchan,dctr,done))
})();
var state__7305__auto__ = (function (){var statearr_13233 = f__7304__auto__.call(null);
(statearr_13233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___13234);

return statearr_13233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___13234,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj13292 = {};
return obj13292;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__13293){
var map__13298 = p__13293;
var map__13298__$1 = ((cljs.core.seq_QMARK_.call(null,map__13298))?cljs.core.apply.call(null,cljs.core.hash_map,map__13298):map__13298);
var opts = map__13298__$1;
var statearr_13299_13302 = state;
(statearr_13299_13302[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__13298,map__13298__$1,opts){
return (function (val){
var statearr_13300_13303 = state;
(statearr_13300_13303[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13298,map__13298__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_13301_13304 = state;
(statearr_13301_13304[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__13293 = null;
if (arguments.length > 3) {
  p__13293 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__13293);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__13305){
var state = cljs.core.first(arglist__13305);
arglist__13305 = cljs.core.next(arglist__13305);
var cont_block = cljs.core.first(arglist__13305);
arglist__13305 = cljs.core.next(arglist__13305);
var ports = cljs.core.first(arglist__13305);
var p__13293 = cljs.core.rest(arglist__13305);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__13293);
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
if(typeof cljs.core.async.t13425 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13425 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13426){
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
this.meta13426 = meta13426;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13425.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t13425.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13425.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13425.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13425.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13425.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t13425.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t13425.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13425.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13427){
var self__ = this;
var _13427__$1 = this;
return self__.meta13426;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13427,meta13426__$1){
var self__ = this;
var _13427__$1 = this;
return (new cljs.core.async.t13425(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13426__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13425.cljs$lang$type = true;

cljs.core.async.t13425.cljs$lang$ctorStr = "cljs.core.async/t13425";

cljs.core.async.t13425.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t13425");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t13425 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13425(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13426){
return (new cljs.core.async.t13425(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13426));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t13425(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
})()
;
var c__7303__auto___13544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___13544,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___13544,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13497){
var state_val_13498 = (state_13497[(1)]);
if((state_val_13498 === (7))){
var inst_13441 = (state_13497[(7)]);
var inst_13446 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13441);
var state_13497__$1 = state_13497;
var statearr_13499_13545 = state_13497__$1;
(statearr_13499_13545[(2)] = inst_13446);

(statearr_13499_13545[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13498 === (20))){
var inst_13456 = (state_13497[(8)]);
var state_13497__$1 = state_13497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13497__$1,(23),out,inst_13456);
} else {
if((state_val_13498 === (1))){
var inst_13431 = (state_13497[(9)]);
var inst_13431__$1 = calc_state.call(null);
var inst_13432 = cljs.core.seq_QMARK_.call(null,inst_13431__$1);
var state_13497__$1 = (function (){var statearr_13500 = state_13497;
(statearr_13500[(9)] = inst_13431__$1);

return statearr_13500;
})();
if(inst_13432){
var statearr_13501_13546 = state_13497__$1;
(statearr_13501_13546[(1)] = (2));

} else {
var statearr_13502_13547 = state_13497__$1;
(statearr_13502_13547[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13498 === (24))){
var inst_13449 = (state_13497[(10)]);
var inst_13441 = inst_13449;
var state_13497__$1 = (function (){var statearr_13503 = state_13497;
(statearr_13503[(7)] = inst_13441);

return statearr_13503;
})();
var statearr_13504_13548 = state_13497__$1;
(statearr_13504_13548[(2)] = null);

(statearr_13504_13548[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13498 === (4))){
var inst_13431 = (state_13497[(9)]);
var inst_13437 = (state_13497[(2)]);
var inst_13438 = cljs.core.get.call(null,inst_13437,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13439 = cljs.core.get.call(null,inst_13437,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13440 = cljs.core.get.call(null,inst_13437,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13441 = inst_13431;
var state_13497__$1 = (function (){var statearr_13505 = state_13497;
(statearr_13505[(7)] = inst_13441);

(statearr_13505[(11)] = inst_13440);

(statearr_13505[(12)] = inst_13439);

(statearr_13505[(13)] = inst_13438);

return statearr_13505;
})();
var statearr_13506_13549 = state_13497__$1;
(statearr_13506_13549[(2)] = null);

(statearr_13506_13549[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13498 === (15))){
var state_13497__$1 = state_13497;
var statearr_13507_13550 = state_13497__$1;
(statearr_13507_13550[(2)] = null);

(statearr_13507_13550[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13498 === (21))){
var inst_13449 = (state_13497[(10)]);
var inst_13441 = inst_13449;
var state_13497__$1 = (function (){var statearr_13508 = state_13497;
(statearr_13508[(7)] = inst_13441);

return statearr_13508;
})();
var statearr_13509_13551 = state_13497__$1;
(statearr_13509_13551[(2)] = null);

(statearr_13509_13551[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13498 === (13))){
var inst_13493 = (state_13497[(2)]);
var state_13497__$1 = state_13497;
var statearr_13510_13552 = state_13497__$1;
(statearr_13510_13552[(2)] = inst_13493);

(statearr_13510_13552[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13498 === (22))){
var inst_13491 = (state_13497[(2)]);
var state_13497__$1 = state_13497;
var statearr_13511_13553 = state_13497__$1;
(statearr_13511_13553[(2)] = inst_13491);

(statearr_13511_13553[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13498 === (6))){
var inst_13495 = (state_13497[(2)]);
var state_13497__$1 = state_13497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13497__$1,inst_13495);
} else {
if((state_val_13498 === (25))){
var state_13497__$1 = state_13497;
var statearr_13512_13554 = state_13497__$1;
(statearr_13512_13554[(2)] = null);

(statearr_13512_13554[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13498 === (17))){
var inst_13471 = (state_13497[(14)]);
var state_13497__$1 = state_13497;
var statearr_13513_13555 = state_13497__$1;
(statearr_13513_13555[(2)] = inst_13471);

(statearr_13513_13555[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13498 === (3))){
var inst_13431 = (state_13497[(9)]);
var state_13497__$1 = state_13497;
var statearr_13514_13556 = state_13497__$1;
(statearr_13514_13556[(2)] = inst_13431);

(statearr_13514_13556[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13498 === (12))){
var inst_13471 = (state_13497[(14)]);
var inst_13452 = (state_13497[(15)]);
var inst_13457 = (state_13497[(16)]);
var inst_13471__$1 = inst_13452.call(null,inst_13457);
var state_13497__$1 = (function (){var statearr_13515 = state_13497;
(statearr_13515[(14)] = inst_13471__$1);

return statearr_13515;
})();
if(cljs.core.truth_(inst_13471__$1)){
var statearr_13516_13557 = state_13497__$1;
(statearr_13516_13557[(1)] = (17));

} else {
var statearr_13517_13558 = state_13497__$1;
(statearr_13517_13558[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13498 === (2))){
var inst_13431 = (state_13497[(9)]);
var inst_13434 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13431);
var state_13497__$1 = state_13497;
var statearr_13518_13559 = state_13497__$1;
(statearr_13518_13559[(2)] = inst_13434);

(statearr_13518_13559[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13498 === (23))){
var inst_13482 = (state_13497[(2)]);
var state_13497__$1 = state_13497;
if(cljs.core.truth_(inst_13482)){
var statearr_13519_13560 = state_13497__$1;
(statearr_13519_13560[(1)] = (24));

} else {
var statearr_13520_13561 = state_13497__$1;
(statearr_13520_13561[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13498 === (19))){
var inst_13479 = (state_13497[(2)]);
var state_13497__$1 = state_13497;
if(cljs.core.truth_(inst_13479)){
var statearr_13521_13562 = state_13497__$1;
(statearr_13521_13562[(1)] = (20));

} else {
var statearr_13522_13563 = state_13497__$1;
(statearr_13522_13563[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13498 === (11))){
var inst_13456 = (state_13497[(8)]);
var inst_13462 = (inst_13456 == null);
var state_13497__$1 = state_13497;
if(cljs.core.truth_(inst_13462)){
var statearr_13523_13564 = state_13497__$1;
(statearr_13523_13564[(1)] = (14));

} else {
var statearr_13524_13565 = state_13497__$1;
(statearr_13524_13565[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13498 === (9))){
var inst_13449 = (state_13497[(10)]);
var inst_13449__$1 = (state_13497[(2)]);
var inst_13450 = cljs.core.get.call(null,inst_13449__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13451 = cljs.core.get.call(null,inst_13449__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13452 = cljs.core.get.call(null,inst_13449__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_13497__$1 = (function (){var statearr_13525 = state_13497;
(statearr_13525[(17)] = inst_13451);

(statearr_13525[(10)] = inst_13449__$1);

(statearr_13525[(15)] = inst_13452);

return statearr_13525;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_13497__$1,(10),inst_13450);
} else {
if((state_val_13498 === (5))){
var inst_13441 = (state_13497[(7)]);
var inst_13444 = cljs.core.seq_QMARK_.call(null,inst_13441);
var state_13497__$1 = state_13497;
if(inst_13444){
var statearr_13526_13566 = state_13497__$1;
(statearr_13526_13566[(1)] = (7));

} else {
var statearr_13527_13567 = state_13497__$1;
(statearr_13527_13567[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13498 === (14))){
var inst_13457 = (state_13497[(16)]);
var inst_13464 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13457);
var state_13497__$1 = state_13497;
var statearr_13528_13568 = state_13497__$1;
(statearr_13528_13568[(2)] = inst_13464);

(statearr_13528_13568[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13498 === (26))){
var inst_13487 = (state_13497[(2)]);
var state_13497__$1 = state_13497;
var statearr_13529_13569 = state_13497__$1;
(statearr_13529_13569[(2)] = inst_13487);

(statearr_13529_13569[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13498 === (16))){
var inst_13467 = (state_13497[(2)]);
var inst_13468 = calc_state.call(null);
var inst_13441 = inst_13468;
var state_13497__$1 = (function (){var statearr_13530 = state_13497;
(statearr_13530[(7)] = inst_13441);

(statearr_13530[(18)] = inst_13467);

return statearr_13530;
})();
var statearr_13531_13570 = state_13497__$1;
(statearr_13531_13570[(2)] = null);

(statearr_13531_13570[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13498 === (10))){
var inst_13456 = (state_13497[(8)]);
var inst_13457 = (state_13497[(16)]);
var inst_13455 = (state_13497[(2)]);
var inst_13456__$1 = cljs.core.nth.call(null,inst_13455,(0),null);
var inst_13457__$1 = cljs.core.nth.call(null,inst_13455,(1),null);
var inst_13458 = (inst_13456__$1 == null);
var inst_13459 = cljs.core._EQ_.call(null,inst_13457__$1,change);
var inst_13460 = (inst_13458) || (inst_13459);
var state_13497__$1 = (function (){var statearr_13532 = state_13497;
(statearr_13532[(8)] = inst_13456__$1);

(statearr_13532[(16)] = inst_13457__$1);

return statearr_13532;
})();
if(cljs.core.truth_(inst_13460)){
var statearr_13533_13571 = state_13497__$1;
(statearr_13533_13571[(1)] = (11));

} else {
var statearr_13534_13572 = state_13497__$1;
(statearr_13534_13572[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13498 === (18))){
var inst_13451 = (state_13497[(17)]);
var inst_13452 = (state_13497[(15)]);
var inst_13457 = (state_13497[(16)]);
var inst_13474 = cljs.core.empty_QMARK_.call(null,inst_13452);
var inst_13475 = inst_13451.call(null,inst_13457);
var inst_13476 = cljs.core.not.call(null,inst_13475);
var inst_13477 = (inst_13474) && (inst_13476);
var state_13497__$1 = state_13497;
var statearr_13535_13573 = state_13497__$1;
(statearr_13535_13573[(2)] = inst_13477);

(statearr_13535_13573[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13498 === (8))){
var inst_13441 = (state_13497[(7)]);
var state_13497__$1 = state_13497;
var statearr_13536_13574 = state_13497__$1;
(statearr_13536_13574[(2)] = inst_13441);

(statearr_13536_13574[(1)] = (9));


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
});})(c__7303__auto___13544,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7288__auto__,c__7303__auto___13544,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_13540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13540[(0)] = state_machine__7289__auto__);

(statearr_13540[(1)] = (1));

return statearr_13540;
});
var state_machine__7289__auto____1 = (function (state_13497){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_13497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e13541){if((e13541 instanceof Object)){
var ex__7292__auto__ = e13541;
var statearr_13542_13575 = state_13497;
(statearr_13542_13575[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13576 = state_13497;
state_13497 = G__13576;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_13497){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_13497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___13544,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7305__auto__ = (function (){var statearr_13543 = f__7304__auto__.call(null);
(statearr_13543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___13544);

return statearr_13543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___13544,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj13578 = {};
return obj13578;
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
return (function (p1__13579_SHARP_){
if(cljs.core.truth_(p1__13579_SHARP_.call(null,topic))){
return p1__13579_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__13579_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3608__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t13702 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13702 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13703){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13703 = meta13703;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13702.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t13702.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t13702.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t13702.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t13702.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t13702.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t13702.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t13702.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13704){
var self__ = this;
var _13704__$1 = this;
return self__.meta13703;
});})(mults,ensure_mult))
;

cljs.core.async.t13702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13704,meta13703__$1){
var self__ = this;
var _13704__$1 = this;
return (new cljs.core.async.t13702(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13703__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t13702.cljs$lang$type = true;

cljs.core.async.t13702.cljs$lang$ctorStr = "cljs.core.async/t13702";

cljs.core.async.t13702.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t13702");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t13702 = ((function (mults,ensure_mult){
return (function __GT_t13702(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13703){
return (new cljs.core.async.t13702(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13703));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t13702(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
})()
;
var c__7303__auto___13824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___13824,mults,ensure_mult,p){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___13824,mults,ensure_mult,p){
return (function (state_13776){
var state_val_13777 = (state_13776[(1)]);
if((state_val_13777 === (7))){
var inst_13772 = (state_13776[(2)]);
var state_13776__$1 = state_13776;
var statearr_13778_13825 = state_13776__$1;
(statearr_13778_13825[(2)] = inst_13772);

(statearr_13778_13825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (20))){
var state_13776__$1 = state_13776;
var statearr_13779_13826 = state_13776__$1;
(statearr_13779_13826[(2)] = null);

(statearr_13779_13826[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (1))){
var state_13776__$1 = state_13776;
var statearr_13780_13827 = state_13776__$1;
(statearr_13780_13827[(2)] = null);

(statearr_13780_13827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (24))){
var inst_13755 = (state_13776[(7)]);
var inst_13764 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13755);
var state_13776__$1 = state_13776;
var statearr_13781_13828 = state_13776__$1;
(statearr_13781_13828[(2)] = inst_13764);

(statearr_13781_13828[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (4))){
var inst_13707 = (state_13776[(8)]);
var inst_13707__$1 = (state_13776[(2)]);
var inst_13708 = (inst_13707__$1 == null);
var state_13776__$1 = (function (){var statearr_13782 = state_13776;
(statearr_13782[(8)] = inst_13707__$1);

return statearr_13782;
})();
if(cljs.core.truth_(inst_13708)){
var statearr_13783_13829 = state_13776__$1;
(statearr_13783_13829[(1)] = (5));

} else {
var statearr_13784_13830 = state_13776__$1;
(statearr_13784_13830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (15))){
var inst_13749 = (state_13776[(2)]);
var state_13776__$1 = state_13776;
var statearr_13785_13831 = state_13776__$1;
(statearr_13785_13831[(2)] = inst_13749);

(statearr_13785_13831[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (21))){
var inst_13769 = (state_13776[(2)]);
var state_13776__$1 = (function (){var statearr_13786 = state_13776;
(statearr_13786[(9)] = inst_13769);

return statearr_13786;
})();
var statearr_13787_13832 = state_13776__$1;
(statearr_13787_13832[(2)] = null);

(statearr_13787_13832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (13))){
var inst_13731 = (state_13776[(10)]);
var inst_13733 = cljs.core.chunked_seq_QMARK_.call(null,inst_13731);
var state_13776__$1 = state_13776;
if(inst_13733){
var statearr_13788_13833 = state_13776__$1;
(statearr_13788_13833[(1)] = (16));

} else {
var statearr_13789_13834 = state_13776__$1;
(statearr_13789_13834[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (22))){
var inst_13761 = (state_13776[(2)]);
var state_13776__$1 = state_13776;
if(cljs.core.truth_(inst_13761)){
var statearr_13790_13835 = state_13776__$1;
(statearr_13790_13835[(1)] = (23));

} else {
var statearr_13791_13836 = state_13776__$1;
(statearr_13791_13836[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (6))){
var inst_13757 = (state_13776[(11)]);
var inst_13755 = (state_13776[(7)]);
var inst_13707 = (state_13776[(8)]);
var inst_13755__$1 = topic_fn.call(null,inst_13707);
var inst_13756 = cljs.core.deref.call(null,mults);
var inst_13757__$1 = cljs.core.get.call(null,inst_13756,inst_13755__$1);
var state_13776__$1 = (function (){var statearr_13792 = state_13776;
(statearr_13792[(11)] = inst_13757__$1);

(statearr_13792[(7)] = inst_13755__$1);

return statearr_13792;
})();
if(cljs.core.truth_(inst_13757__$1)){
var statearr_13793_13837 = state_13776__$1;
(statearr_13793_13837[(1)] = (19));

} else {
var statearr_13794_13838 = state_13776__$1;
(statearr_13794_13838[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (25))){
var inst_13766 = (state_13776[(2)]);
var state_13776__$1 = state_13776;
var statearr_13795_13839 = state_13776__$1;
(statearr_13795_13839[(2)] = inst_13766);

(statearr_13795_13839[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (17))){
var inst_13731 = (state_13776[(10)]);
var inst_13740 = cljs.core.first.call(null,inst_13731);
var inst_13741 = cljs.core.async.muxch_STAR_.call(null,inst_13740);
var inst_13742 = cljs.core.async.close_BANG_.call(null,inst_13741);
var inst_13743 = cljs.core.next.call(null,inst_13731);
var inst_13717 = inst_13743;
var inst_13718 = null;
var inst_13719 = (0);
var inst_13720 = (0);
var state_13776__$1 = (function (){var statearr_13796 = state_13776;
(statearr_13796[(12)] = inst_13717);

(statearr_13796[(13)] = inst_13719);

(statearr_13796[(14)] = inst_13718);

(statearr_13796[(15)] = inst_13742);

(statearr_13796[(16)] = inst_13720);

return statearr_13796;
})();
var statearr_13797_13840 = state_13776__$1;
(statearr_13797_13840[(2)] = null);

(statearr_13797_13840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (3))){
var inst_13774 = (state_13776[(2)]);
var state_13776__$1 = state_13776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13776__$1,inst_13774);
} else {
if((state_val_13777 === (12))){
var inst_13751 = (state_13776[(2)]);
var state_13776__$1 = state_13776;
var statearr_13798_13841 = state_13776__$1;
(statearr_13798_13841[(2)] = inst_13751);

(statearr_13798_13841[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (2))){
var state_13776__$1 = state_13776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13776__$1,(4),ch);
} else {
if((state_val_13777 === (23))){
var state_13776__$1 = state_13776;
var statearr_13799_13842 = state_13776__$1;
(statearr_13799_13842[(2)] = null);

(statearr_13799_13842[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (19))){
var inst_13757 = (state_13776[(11)]);
var inst_13707 = (state_13776[(8)]);
var inst_13759 = cljs.core.async.muxch_STAR_.call(null,inst_13757);
var state_13776__$1 = state_13776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13776__$1,(22),inst_13759,inst_13707);
} else {
if((state_val_13777 === (11))){
var inst_13717 = (state_13776[(12)]);
var inst_13731 = (state_13776[(10)]);
var inst_13731__$1 = cljs.core.seq.call(null,inst_13717);
var state_13776__$1 = (function (){var statearr_13800 = state_13776;
(statearr_13800[(10)] = inst_13731__$1);

return statearr_13800;
})();
if(inst_13731__$1){
var statearr_13801_13843 = state_13776__$1;
(statearr_13801_13843[(1)] = (13));

} else {
var statearr_13802_13844 = state_13776__$1;
(statearr_13802_13844[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (9))){
var inst_13753 = (state_13776[(2)]);
var state_13776__$1 = state_13776;
var statearr_13803_13845 = state_13776__$1;
(statearr_13803_13845[(2)] = inst_13753);

(statearr_13803_13845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (5))){
var inst_13714 = cljs.core.deref.call(null,mults);
var inst_13715 = cljs.core.vals.call(null,inst_13714);
var inst_13716 = cljs.core.seq.call(null,inst_13715);
var inst_13717 = inst_13716;
var inst_13718 = null;
var inst_13719 = (0);
var inst_13720 = (0);
var state_13776__$1 = (function (){var statearr_13804 = state_13776;
(statearr_13804[(12)] = inst_13717);

(statearr_13804[(13)] = inst_13719);

(statearr_13804[(14)] = inst_13718);

(statearr_13804[(16)] = inst_13720);

return statearr_13804;
})();
var statearr_13805_13846 = state_13776__$1;
(statearr_13805_13846[(2)] = null);

(statearr_13805_13846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (14))){
var state_13776__$1 = state_13776;
var statearr_13809_13847 = state_13776__$1;
(statearr_13809_13847[(2)] = null);

(statearr_13809_13847[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (16))){
var inst_13731 = (state_13776[(10)]);
var inst_13735 = cljs.core.chunk_first.call(null,inst_13731);
var inst_13736 = cljs.core.chunk_rest.call(null,inst_13731);
var inst_13737 = cljs.core.count.call(null,inst_13735);
var inst_13717 = inst_13736;
var inst_13718 = inst_13735;
var inst_13719 = inst_13737;
var inst_13720 = (0);
var state_13776__$1 = (function (){var statearr_13810 = state_13776;
(statearr_13810[(12)] = inst_13717);

(statearr_13810[(13)] = inst_13719);

(statearr_13810[(14)] = inst_13718);

(statearr_13810[(16)] = inst_13720);

return statearr_13810;
})();
var statearr_13811_13848 = state_13776__$1;
(statearr_13811_13848[(2)] = null);

(statearr_13811_13848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (10))){
var inst_13717 = (state_13776[(12)]);
var inst_13719 = (state_13776[(13)]);
var inst_13718 = (state_13776[(14)]);
var inst_13720 = (state_13776[(16)]);
var inst_13725 = cljs.core._nth.call(null,inst_13718,inst_13720);
var inst_13726 = cljs.core.async.muxch_STAR_.call(null,inst_13725);
var inst_13727 = cljs.core.async.close_BANG_.call(null,inst_13726);
var inst_13728 = (inst_13720 + (1));
var tmp13806 = inst_13717;
var tmp13807 = inst_13719;
var tmp13808 = inst_13718;
var inst_13717__$1 = tmp13806;
var inst_13718__$1 = tmp13808;
var inst_13719__$1 = tmp13807;
var inst_13720__$1 = inst_13728;
var state_13776__$1 = (function (){var statearr_13812 = state_13776;
(statearr_13812[(12)] = inst_13717__$1);

(statearr_13812[(13)] = inst_13719__$1);

(statearr_13812[(14)] = inst_13718__$1);

(statearr_13812[(17)] = inst_13727);

(statearr_13812[(16)] = inst_13720__$1);

return statearr_13812;
})();
var statearr_13813_13849 = state_13776__$1;
(statearr_13813_13849[(2)] = null);

(statearr_13813_13849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (18))){
var inst_13746 = (state_13776[(2)]);
var state_13776__$1 = state_13776;
var statearr_13814_13850 = state_13776__$1;
(statearr_13814_13850[(2)] = inst_13746);

(statearr_13814_13850[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (8))){
var inst_13719 = (state_13776[(13)]);
var inst_13720 = (state_13776[(16)]);
var inst_13722 = (inst_13720 < inst_13719);
var inst_13723 = inst_13722;
var state_13776__$1 = state_13776;
if(cljs.core.truth_(inst_13723)){
var statearr_13815_13851 = state_13776__$1;
(statearr_13815_13851[(1)] = (10));

} else {
var statearr_13816_13852 = state_13776__$1;
(statearr_13816_13852[(1)] = (11));

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
});})(c__7303__auto___13824,mults,ensure_mult,p))
;
return ((function (switch__7288__auto__,c__7303__auto___13824,mults,ensure_mult,p){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_13820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13820[(0)] = state_machine__7289__auto__);

(statearr_13820[(1)] = (1));

return statearr_13820;
});
var state_machine__7289__auto____1 = (function (state_13776){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_13776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e13821){if((e13821 instanceof Object)){
var ex__7292__auto__ = e13821;
var statearr_13822_13853 = state_13776;
(statearr_13822_13853[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13854 = state_13776;
state_13776 = G__13854;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_13776){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_13776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___13824,mults,ensure_mult,p))
})();
var state__7305__auto__ = (function (){var statearr_13823 = f__7304__auto__.call(null);
(statearr_13823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___13824);

return statearr_13823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___13824,mults,ensure_mult,p))
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
var c__7303__auto___13991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___13991,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___13991,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13961){
var state_val_13962 = (state_13961[(1)]);
if((state_val_13962 === (7))){
var state_13961__$1 = state_13961;
var statearr_13963_13992 = state_13961__$1;
(statearr_13963_13992[(2)] = null);

(statearr_13963_13992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13962 === (1))){
var state_13961__$1 = state_13961;
var statearr_13964_13993 = state_13961__$1;
(statearr_13964_13993[(2)] = null);

(statearr_13964_13993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13962 === (4))){
var inst_13925 = (state_13961[(7)]);
var inst_13927 = (inst_13925 < cnt);
var state_13961__$1 = state_13961;
if(cljs.core.truth_(inst_13927)){
var statearr_13965_13994 = state_13961__$1;
(statearr_13965_13994[(1)] = (6));

} else {
var statearr_13966_13995 = state_13961__$1;
(statearr_13966_13995[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13962 === (15))){
var inst_13957 = (state_13961[(2)]);
var state_13961__$1 = state_13961;
var statearr_13967_13996 = state_13961__$1;
(statearr_13967_13996[(2)] = inst_13957);

(statearr_13967_13996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13962 === (13))){
var inst_13950 = cljs.core.async.close_BANG_.call(null,out);
var state_13961__$1 = state_13961;
var statearr_13968_13997 = state_13961__$1;
(statearr_13968_13997[(2)] = inst_13950);

(statearr_13968_13997[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13962 === (6))){
var state_13961__$1 = state_13961;
var statearr_13969_13998 = state_13961__$1;
(statearr_13969_13998[(2)] = null);

(statearr_13969_13998[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13962 === (3))){
var inst_13959 = (state_13961[(2)]);
var state_13961__$1 = state_13961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13961__$1,inst_13959);
} else {
if((state_val_13962 === (12))){
var inst_13947 = (state_13961[(8)]);
var inst_13947__$1 = (state_13961[(2)]);
var inst_13948 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13947__$1);
var state_13961__$1 = (function (){var statearr_13970 = state_13961;
(statearr_13970[(8)] = inst_13947__$1);

return statearr_13970;
})();
if(cljs.core.truth_(inst_13948)){
var statearr_13971_13999 = state_13961__$1;
(statearr_13971_13999[(1)] = (13));

} else {
var statearr_13972_14000 = state_13961__$1;
(statearr_13972_14000[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13962 === (2))){
var inst_13924 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13925 = (0);
var state_13961__$1 = (function (){var statearr_13973 = state_13961;
(statearr_13973[(9)] = inst_13924);

(statearr_13973[(7)] = inst_13925);

return statearr_13973;
})();
var statearr_13974_14001 = state_13961__$1;
(statearr_13974_14001[(2)] = null);

(statearr_13974_14001[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13962 === (11))){
var inst_13925 = (state_13961[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13961,(10),Object,null,(9));
var inst_13934 = chs__$1.call(null,inst_13925);
var inst_13935 = done.call(null,inst_13925);
var inst_13936 = cljs.core.async.take_BANG_.call(null,inst_13934,inst_13935);
var state_13961__$1 = state_13961;
var statearr_13975_14002 = state_13961__$1;
(statearr_13975_14002[(2)] = inst_13936);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13961__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13962 === (9))){
var inst_13925 = (state_13961[(7)]);
var inst_13938 = (state_13961[(2)]);
var inst_13939 = (inst_13925 + (1));
var inst_13925__$1 = inst_13939;
var state_13961__$1 = (function (){var statearr_13976 = state_13961;
(statearr_13976[(10)] = inst_13938);

(statearr_13976[(7)] = inst_13925__$1);

return statearr_13976;
})();
var statearr_13977_14003 = state_13961__$1;
(statearr_13977_14003[(2)] = null);

(statearr_13977_14003[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13962 === (5))){
var inst_13945 = (state_13961[(2)]);
var state_13961__$1 = (function (){var statearr_13978 = state_13961;
(statearr_13978[(11)] = inst_13945);

return statearr_13978;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13961__$1,(12),dchan);
} else {
if((state_val_13962 === (14))){
var inst_13947 = (state_13961[(8)]);
var inst_13952 = cljs.core.apply.call(null,f,inst_13947);
var state_13961__$1 = state_13961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13961__$1,(16),out,inst_13952);
} else {
if((state_val_13962 === (16))){
var inst_13954 = (state_13961[(2)]);
var state_13961__$1 = (function (){var statearr_13979 = state_13961;
(statearr_13979[(12)] = inst_13954);

return statearr_13979;
})();
var statearr_13980_14004 = state_13961__$1;
(statearr_13980_14004[(2)] = null);

(statearr_13980_14004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13962 === (10))){
var inst_13929 = (state_13961[(2)]);
var inst_13930 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13961__$1 = (function (){var statearr_13981 = state_13961;
(statearr_13981[(13)] = inst_13929);

return statearr_13981;
})();
var statearr_13982_14005 = state_13961__$1;
(statearr_13982_14005[(2)] = inst_13930);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13961__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13962 === (8))){
var inst_13943 = (state_13961[(2)]);
var state_13961__$1 = state_13961;
var statearr_13983_14006 = state_13961__$1;
(statearr_13983_14006[(2)] = inst_13943);

(statearr_13983_14006[(1)] = (5));


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
});})(c__7303__auto___13991,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7288__auto__,c__7303__auto___13991,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_13987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13987[(0)] = state_machine__7289__auto__);

(statearr_13987[(1)] = (1));

return statearr_13987;
});
var state_machine__7289__auto____1 = (function (state_13961){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_13961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e13988){if((e13988 instanceof Object)){
var ex__7292__auto__ = e13988;
var statearr_13989_14007 = state_13961;
(statearr_13989_14007[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14008 = state_13961;
state_13961 = G__14008;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_13961){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_13961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___13991,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7305__auto__ = (function (){var statearr_13990 = f__7304__auto__.call(null);
(statearr_13990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___13991);

return statearr_13990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___13991,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__7303__auto___14116 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___14116,out){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___14116,out){
return (function (state_14092){
var state_val_14093 = (state_14092[(1)]);
if((state_val_14093 === (7))){
var inst_14072 = (state_14092[(7)]);
var inst_14071 = (state_14092[(8)]);
var inst_14071__$1 = (state_14092[(2)]);
var inst_14072__$1 = cljs.core.nth.call(null,inst_14071__$1,(0),null);
var inst_14073 = cljs.core.nth.call(null,inst_14071__$1,(1),null);
var inst_14074 = (inst_14072__$1 == null);
var state_14092__$1 = (function (){var statearr_14094 = state_14092;
(statearr_14094[(7)] = inst_14072__$1);

(statearr_14094[(8)] = inst_14071__$1);

(statearr_14094[(9)] = inst_14073);

return statearr_14094;
})();
if(cljs.core.truth_(inst_14074)){
var statearr_14095_14117 = state_14092__$1;
(statearr_14095_14117[(1)] = (8));

} else {
var statearr_14096_14118 = state_14092__$1;
(statearr_14096_14118[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (1))){
var inst_14063 = cljs.core.vec.call(null,chs);
var inst_14064 = inst_14063;
var state_14092__$1 = (function (){var statearr_14097 = state_14092;
(statearr_14097[(10)] = inst_14064);

return statearr_14097;
})();
var statearr_14098_14119 = state_14092__$1;
(statearr_14098_14119[(2)] = null);

(statearr_14098_14119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (4))){
var inst_14064 = (state_14092[(10)]);
var state_14092__$1 = state_14092;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14092__$1,(7),inst_14064);
} else {
if((state_val_14093 === (6))){
var inst_14088 = (state_14092[(2)]);
var state_14092__$1 = state_14092;
var statearr_14099_14120 = state_14092__$1;
(statearr_14099_14120[(2)] = inst_14088);

(statearr_14099_14120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (3))){
var inst_14090 = (state_14092[(2)]);
var state_14092__$1 = state_14092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14092__$1,inst_14090);
} else {
if((state_val_14093 === (2))){
var inst_14064 = (state_14092[(10)]);
var inst_14066 = cljs.core.count.call(null,inst_14064);
var inst_14067 = (inst_14066 > (0));
var state_14092__$1 = state_14092;
if(cljs.core.truth_(inst_14067)){
var statearr_14101_14121 = state_14092__$1;
(statearr_14101_14121[(1)] = (4));

} else {
var statearr_14102_14122 = state_14092__$1;
(statearr_14102_14122[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (11))){
var inst_14064 = (state_14092[(10)]);
var inst_14081 = (state_14092[(2)]);
var tmp14100 = inst_14064;
var inst_14064__$1 = tmp14100;
var state_14092__$1 = (function (){var statearr_14103 = state_14092;
(statearr_14103[(11)] = inst_14081);

(statearr_14103[(10)] = inst_14064__$1);

return statearr_14103;
})();
var statearr_14104_14123 = state_14092__$1;
(statearr_14104_14123[(2)] = null);

(statearr_14104_14123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (9))){
var inst_14072 = (state_14092[(7)]);
var state_14092__$1 = state_14092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14092__$1,(11),out,inst_14072);
} else {
if((state_val_14093 === (5))){
var inst_14086 = cljs.core.async.close_BANG_.call(null,out);
var state_14092__$1 = state_14092;
var statearr_14105_14124 = state_14092__$1;
(statearr_14105_14124[(2)] = inst_14086);

(statearr_14105_14124[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (10))){
var inst_14084 = (state_14092[(2)]);
var state_14092__$1 = state_14092;
var statearr_14106_14125 = state_14092__$1;
(statearr_14106_14125[(2)] = inst_14084);

(statearr_14106_14125[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (8))){
var inst_14072 = (state_14092[(7)]);
var inst_14071 = (state_14092[(8)]);
var inst_14073 = (state_14092[(9)]);
var inst_14064 = (state_14092[(10)]);
var inst_14076 = (function (){var c = inst_14073;
var v = inst_14072;
var vec__14069 = inst_14071;
var cs = inst_14064;
return ((function (c,v,vec__14069,cs,inst_14072,inst_14071,inst_14073,inst_14064,state_val_14093,c__7303__auto___14116,out){
return (function (p1__14009_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14009_SHARP_);
});
;})(c,v,vec__14069,cs,inst_14072,inst_14071,inst_14073,inst_14064,state_val_14093,c__7303__auto___14116,out))
})();
var inst_14077 = cljs.core.filterv.call(null,inst_14076,inst_14064);
var inst_14064__$1 = inst_14077;
var state_14092__$1 = (function (){var statearr_14107 = state_14092;
(statearr_14107[(10)] = inst_14064__$1);

return statearr_14107;
})();
var statearr_14108_14126 = state_14092__$1;
(statearr_14108_14126[(2)] = null);

(statearr_14108_14126[(1)] = (2));


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
});})(c__7303__auto___14116,out))
;
return ((function (switch__7288__auto__,c__7303__auto___14116,out){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_14112 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14112[(0)] = state_machine__7289__auto__);

(statearr_14112[(1)] = (1));

return statearr_14112;
});
var state_machine__7289__auto____1 = (function (state_14092){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_14092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e14113){if((e14113 instanceof Object)){
var ex__7292__auto__ = e14113;
var statearr_14114_14127 = state_14092;
(statearr_14114_14127[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14128 = state_14092;
state_14092 = G__14128;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_14092){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_14092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___14116,out))
})();
var state__7305__auto__ = (function (){var statearr_14115 = f__7304__auto__.call(null);
(statearr_14115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___14116);

return statearr_14115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___14116,out))
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
var c__7303__auto___14221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___14221,out){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___14221,out){
return (function (state_14198){
var state_val_14199 = (state_14198[(1)]);
if((state_val_14199 === (7))){
var inst_14180 = (state_14198[(7)]);
var inst_14180__$1 = (state_14198[(2)]);
var inst_14181 = (inst_14180__$1 == null);
var inst_14182 = cljs.core.not.call(null,inst_14181);
var state_14198__$1 = (function (){var statearr_14200 = state_14198;
(statearr_14200[(7)] = inst_14180__$1);

return statearr_14200;
})();
if(inst_14182){
var statearr_14201_14222 = state_14198__$1;
(statearr_14201_14222[(1)] = (8));

} else {
var statearr_14202_14223 = state_14198__$1;
(statearr_14202_14223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14199 === (1))){
var inst_14175 = (0);
var state_14198__$1 = (function (){var statearr_14203 = state_14198;
(statearr_14203[(8)] = inst_14175);

return statearr_14203;
})();
var statearr_14204_14224 = state_14198__$1;
(statearr_14204_14224[(2)] = null);

(statearr_14204_14224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14199 === (4))){
var state_14198__$1 = state_14198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14198__$1,(7),ch);
} else {
if((state_val_14199 === (6))){
var inst_14193 = (state_14198[(2)]);
var state_14198__$1 = state_14198;
var statearr_14205_14225 = state_14198__$1;
(statearr_14205_14225[(2)] = inst_14193);

(statearr_14205_14225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14199 === (3))){
var inst_14195 = (state_14198[(2)]);
var inst_14196 = cljs.core.async.close_BANG_.call(null,out);
var state_14198__$1 = (function (){var statearr_14206 = state_14198;
(statearr_14206[(9)] = inst_14195);

return statearr_14206;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14198__$1,inst_14196);
} else {
if((state_val_14199 === (2))){
var inst_14175 = (state_14198[(8)]);
var inst_14177 = (inst_14175 < n);
var state_14198__$1 = state_14198;
if(cljs.core.truth_(inst_14177)){
var statearr_14207_14226 = state_14198__$1;
(statearr_14207_14226[(1)] = (4));

} else {
var statearr_14208_14227 = state_14198__$1;
(statearr_14208_14227[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14199 === (11))){
var inst_14175 = (state_14198[(8)]);
var inst_14185 = (state_14198[(2)]);
var inst_14186 = (inst_14175 + (1));
var inst_14175__$1 = inst_14186;
var state_14198__$1 = (function (){var statearr_14209 = state_14198;
(statearr_14209[(10)] = inst_14185);

(statearr_14209[(8)] = inst_14175__$1);

return statearr_14209;
})();
var statearr_14210_14228 = state_14198__$1;
(statearr_14210_14228[(2)] = null);

(statearr_14210_14228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14199 === (9))){
var state_14198__$1 = state_14198;
var statearr_14211_14229 = state_14198__$1;
(statearr_14211_14229[(2)] = null);

(statearr_14211_14229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14199 === (5))){
var state_14198__$1 = state_14198;
var statearr_14212_14230 = state_14198__$1;
(statearr_14212_14230[(2)] = null);

(statearr_14212_14230[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14199 === (10))){
var inst_14190 = (state_14198[(2)]);
var state_14198__$1 = state_14198;
var statearr_14213_14231 = state_14198__$1;
(statearr_14213_14231[(2)] = inst_14190);

(statearr_14213_14231[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14199 === (8))){
var inst_14180 = (state_14198[(7)]);
var state_14198__$1 = state_14198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14198__$1,(11),out,inst_14180);
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
});})(c__7303__auto___14221,out))
;
return ((function (switch__7288__auto__,c__7303__auto___14221,out){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_14217 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14217[(0)] = state_machine__7289__auto__);

(statearr_14217[(1)] = (1));

return statearr_14217;
});
var state_machine__7289__auto____1 = (function (state_14198){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_14198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e14218){if((e14218 instanceof Object)){
var ex__7292__auto__ = e14218;
var statearr_14219_14232 = state_14198;
(statearr_14219_14232[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14233 = state_14198;
state_14198 = G__14233;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_14198){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_14198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___14221,out))
})();
var state__7305__auto__ = (function (){var statearr_14220 = f__7304__auto__.call(null);
(statearr_14220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___14221);

return statearr_14220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___14221,out))
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
if(typeof cljs.core.async.t14241 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14241 = (function (ch,f,map_LT_,meta14242){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14242 = meta14242;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14241.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14241.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t14241.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14241.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t14244 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14244 = (function (fn1,_,meta14242,map_LT_,f,ch,meta14245){
this.fn1 = fn1;
this._ = _;
this.meta14242 = meta14242;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14245 = meta14245;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14244.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14244.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t14244.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14234_SHARP_){
return f1.call(null,(((p1__14234_SHARP_ == null))?null:self__.f.call(null,p1__14234_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t14244.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14246){
var self__ = this;
var _14246__$1 = this;
return self__.meta14245;
});})(___$1))
;

cljs.core.async.t14244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14246,meta14245__$1){
var self__ = this;
var _14246__$1 = this;
return (new cljs.core.async.t14244(self__.fn1,self__._,self__.meta14242,self__.map_LT_,self__.f,self__.ch,meta14245__$1));
});})(___$1))
;

cljs.core.async.t14244.cljs$lang$type = true;

cljs.core.async.t14244.cljs$lang$ctorStr = "cljs.core.async/t14244";

cljs.core.async.t14244.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t14244");
});})(___$1))
;

cljs.core.async.__GT_t14244 = ((function (___$1){
return (function __GT_t14244(fn1__$1,___$2,meta14242__$1,map_LT___$1,f__$1,ch__$1,meta14245){
return (new cljs.core.async.t14244(fn1__$1,___$2,meta14242__$1,map_LT___$1,f__$1,ch__$1,meta14245));
});})(___$1))
;

}

return (new cljs.core.async.t14244(fn1,___$1,self__.meta14242,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
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

cljs.core.async.t14241.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14241.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14241.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t14241.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14243){
var self__ = this;
var _14243__$1 = this;
return self__.meta14242;
});

cljs.core.async.t14241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14243,meta14242__$1){
var self__ = this;
var _14243__$1 = this;
return (new cljs.core.async.t14241(self__.ch,self__.f,self__.map_LT_,meta14242__$1));
});

cljs.core.async.t14241.cljs$lang$type = true;

cljs.core.async.t14241.cljs$lang$ctorStr = "cljs.core.async/t14241";

cljs.core.async.t14241.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t14241");
});

cljs.core.async.__GT_t14241 = (function __GT_t14241(ch__$1,f__$1,map_LT___$1,meta14242){
return (new cljs.core.async.t14241(ch__$1,f__$1,map_LT___$1,meta14242));
});

}

return (new cljs.core.async.t14241(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t14250 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14250 = (function (ch,f,map_GT_,meta14251){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14251 = meta14251;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14250.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14250.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t14250.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14250.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t14250.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14250.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14250.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14252){
var self__ = this;
var _14252__$1 = this;
return self__.meta14251;
});

cljs.core.async.t14250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14252,meta14251__$1){
var self__ = this;
var _14252__$1 = this;
return (new cljs.core.async.t14250(self__.ch,self__.f,self__.map_GT_,meta14251__$1));
});

cljs.core.async.t14250.cljs$lang$type = true;

cljs.core.async.t14250.cljs$lang$ctorStr = "cljs.core.async/t14250";

cljs.core.async.t14250.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t14250");
});

cljs.core.async.__GT_t14250 = (function __GT_t14250(ch__$1,f__$1,map_GT___$1,meta14251){
return (new cljs.core.async.t14250(ch__$1,f__$1,map_GT___$1,meta14251));
});

}

return (new cljs.core.async.t14250(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t14256 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14256 = (function (ch,p,filter_GT_,meta14257){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14257 = meta14257;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14256.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14256.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t14256.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14256.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t14256.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14256.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14256.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t14256.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14258){
var self__ = this;
var _14258__$1 = this;
return self__.meta14257;
});

cljs.core.async.t14256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14258,meta14257__$1){
var self__ = this;
var _14258__$1 = this;
return (new cljs.core.async.t14256(self__.ch,self__.p,self__.filter_GT_,meta14257__$1));
});

cljs.core.async.t14256.cljs$lang$type = true;

cljs.core.async.t14256.cljs$lang$ctorStr = "cljs.core.async/t14256";

cljs.core.async.t14256.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"cljs.core.async/t14256");
});

cljs.core.async.__GT_t14256 = (function __GT_t14256(ch__$1,p__$1,filter_GT___$1,meta14257){
return (new cljs.core.async.t14256(ch__$1,p__$1,filter_GT___$1,meta14257));
});

}

return (new cljs.core.async.t14256(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/dist/js/out/app/cljs/core/async.cljs"], null)));
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
var c__7303__auto___14341 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___14341,out){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___14341,out){
return (function (state_14320){
var state_val_14321 = (state_14320[(1)]);
if((state_val_14321 === (7))){
var inst_14316 = (state_14320[(2)]);
var state_14320__$1 = state_14320;
var statearr_14322_14342 = state_14320__$1;
(statearr_14322_14342[(2)] = inst_14316);

(statearr_14322_14342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14321 === (1))){
var state_14320__$1 = state_14320;
var statearr_14323_14343 = state_14320__$1;
(statearr_14323_14343[(2)] = null);

(statearr_14323_14343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14321 === (4))){
var inst_14302 = (state_14320[(7)]);
var inst_14302__$1 = (state_14320[(2)]);
var inst_14303 = (inst_14302__$1 == null);
var state_14320__$1 = (function (){var statearr_14324 = state_14320;
(statearr_14324[(7)] = inst_14302__$1);

return statearr_14324;
})();
if(cljs.core.truth_(inst_14303)){
var statearr_14325_14344 = state_14320__$1;
(statearr_14325_14344[(1)] = (5));

} else {
var statearr_14326_14345 = state_14320__$1;
(statearr_14326_14345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14321 === (6))){
var inst_14302 = (state_14320[(7)]);
var inst_14307 = p.call(null,inst_14302);
var state_14320__$1 = state_14320;
if(cljs.core.truth_(inst_14307)){
var statearr_14327_14346 = state_14320__$1;
(statearr_14327_14346[(1)] = (8));

} else {
var statearr_14328_14347 = state_14320__$1;
(statearr_14328_14347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14321 === (3))){
var inst_14318 = (state_14320[(2)]);
var state_14320__$1 = state_14320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14320__$1,inst_14318);
} else {
if((state_val_14321 === (2))){
var state_14320__$1 = state_14320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14320__$1,(4),ch);
} else {
if((state_val_14321 === (11))){
var inst_14310 = (state_14320[(2)]);
var state_14320__$1 = state_14320;
var statearr_14329_14348 = state_14320__$1;
(statearr_14329_14348[(2)] = inst_14310);

(statearr_14329_14348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14321 === (9))){
var state_14320__$1 = state_14320;
var statearr_14330_14349 = state_14320__$1;
(statearr_14330_14349[(2)] = null);

(statearr_14330_14349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14321 === (5))){
var inst_14305 = cljs.core.async.close_BANG_.call(null,out);
var state_14320__$1 = state_14320;
var statearr_14331_14350 = state_14320__$1;
(statearr_14331_14350[(2)] = inst_14305);

(statearr_14331_14350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14321 === (10))){
var inst_14313 = (state_14320[(2)]);
var state_14320__$1 = (function (){var statearr_14332 = state_14320;
(statearr_14332[(8)] = inst_14313);

return statearr_14332;
})();
var statearr_14333_14351 = state_14320__$1;
(statearr_14333_14351[(2)] = null);

(statearr_14333_14351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14321 === (8))){
var inst_14302 = (state_14320[(7)]);
var state_14320__$1 = state_14320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14320__$1,(11),out,inst_14302);
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
});})(c__7303__auto___14341,out))
;
return ((function (switch__7288__auto__,c__7303__auto___14341,out){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_14337 = [null,null,null,null,null,null,null,null,null];
(statearr_14337[(0)] = state_machine__7289__auto__);

(statearr_14337[(1)] = (1));

return statearr_14337;
});
var state_machine__7289__auto____1 = (function (state_14320){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_14320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e14338){if((e14338 instanceof Object)){
var ex__7292__auto__ = e14338;
var statearr_14339_14352 = state_14320;
(statearr_14339_14352[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14353 = state_14320;
state_14320 = G__14353;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_14320){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_14320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___14341,out))
})();
var state__7305__auto__ = (function (){var statearr_14340 = f__7304__auto__.call(null);
(statearr_14340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___14341);

return statearr_14340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___14341,out))
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
return (function (state_14519){
var state_val_14520 = (state_14519[(1)]);
if((state_val_14520 === (7))){
var inst_14515 = (state_14519[(2)]);
var state_14519__$1 = state_14519;
var statearr_14521_14562 = state_14519__$1;
(statearr_14521_14562[(2)] = inst_14515);

(statearr_14521_14562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (20))){
var inst_14485 = (state_14519[(7)]);
var inst_14496 = (state_14519[(2)]);
var inst_14497 = cljs.core.next.call(null,inst_14485);
var inst_14471 = inst_14497;
var inst_14472 = null;
var inst_14473 = (0);
var inst_14474 = (0);
var state_14519__$1 = (function (){var statearr_14522 = state_14519;
(statearr_14522[(8)] = inst_14471);

(statearr_14522[(9)] = inst_14473);

(statearr_14522[(10)] = inst_14472);

(statearr_14522[(11)] = inst_14496);

(statearr_14522[(12)] = inst_14474);

return statearr_14522;
})();
var statearr_14523_14563 = state_14519__$1;
(statearr_14523_14563[(2)] = null);

(statearr_14523_14563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (1))){
var state_14519__$1 = state_14519;
var statearr_14524_14564 = state_14519__$1;
(statearr_14524_14564[(2)] = null);

(statearr_14524_14564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (4))){
var inst_14460 = (state_14519[(13)]);
var inst_14460__$1 = (state_14519[(2)]);
var inst_14461 = (inst_14460__$1 == null);
var state_14519__$1 = (function (){var statearr_14525 = state_14519;
(statearr_14525[(13)] = inst_14460__$1);

return statearr_14525;
})();
if(cljs.core.truth_(inst_14461)){
var statearr_14526_14565 = state_14519__$1;
(statearr_14526_14565[(1)] = (5));

} else {
var statearr_14527_14566 = state_14519__$1;
(statearr_14527_14566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (15))){
var state_14519__$1 = state_14519;
var statearr_14531_14567 = state_14519__$1;
(statearr_14531_14567[(2)] = null);

(statearr_14531_14567[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (21))){
var state_14519__$1 = state_14519;
var statearr_14532_14568 = state_14519__$1;
(statearr_14532_14568[(2)] = null);

(statearr_14532_14568[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (13))){
var inst_14471 = (state_14519[(8)]);
var inst_14473 = (state_14519[(9)]);
var inst_14472 = (state_14519[(10)]);
var inst_14474 = (state_14519[(12)]);
var inst_14481 = (state_14519[(2)]);
var inst_14482 = (inst_14474 + (1));
var tmp14528 = inst_14471;
var tmp14529 = inst_14473;
var tmp14530 = inst_14472;
var inst_14471__$1 = tmp14528;
var inst_14472__$1 = tmp14530;
var inst_14473__$1 = tmp14529;
var inst_14474__$1 = inst_14482;
var state_14519__$1 = (function (){var statearr_14533 = state_14519;
(statearr_14533[(8)] = inst_14471__$1);

(statearr_14533[(9)] = inst_14473__$1);

(statearr_14533[(10)] = inst_14472__$1);

(statearr_14533[(14)] = inst_14481);

(statearr_14533[(12)] = inst_14474__$1);

return statearr_14533;
})();
var statearr_14534_14569 = state_14519__$1;
(statearr_14534_14569[(2)] = null);

(statearr_14534_14569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (22))){
var state_14519__$1 = state_14519;
var statearr_14535_14570 = state_14519__$1;
(statearr_14535_14570[(2)] = null);

(statearr_14535_14570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (6))){
var inst_14460 = (state_14519[(13)]);
var inst_14469 = f.call(null,inst_14460);
var inst_14470 = cljs.core.seq.call(null,inst_14469);
var inst_14471 = inst_14470;
var inst_14472 = null;
var inst_14473 = (0);
var inst_14474 = (0);
var state_14519__$1 = (function (){var statearr_14536 = state_14519;
(statearr_14536[(8)] = inst_14471);

(statearr_14536[(9)] = inst_14473);

(statearr_14536[(10)] = inst_14472);

(statearr_14536[(12)] = inst_14474);

return statearr_14536;
})();
var statearr_14537_14571 = state_14519__$1;
(statearr_14537_14571[(2)] = null);

(statearr_14537_14571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (17))){
var inst_14485 = (state_14519[(7)]);
var inst_14489 = cljs.core.chunk_first.call(null,inst_14485);
var inst_14490 = cljs.core.chunk_rest.call(null,inst_14485);
var inst_14491 = cljs.core.count.call(null,inst_14489);
var inst_14471 = inst_14490;
var inst_14472 = inst_14489;
var inst_14473 = inst_14491;
var inst_14474 = (0);
var state_14519__$1 = (function (){var statearr_14538 = state_14519;
(statearr_14538[(8)] = inst_14471);

(statearr_14538[(9)] = inst_14473);

(statearr_14538[(10)] = inst_14472);

(statearr_14538[(12)] = inst_14474);

return statearr_14538;
})();
var statearr_14539_14572 = state_14519__$1;
(statearr_14539_14572[(2)] = null);

(statearr_14539_14572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (3))){
var inst_14517 = (state_14519[(2)]);
var state_14519__$1 = state_14519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14519__$1,inst_14517);
} else {
if((state_val_14520 === (12))){
var inst_14505 = (state_14519[(2)]);
var state_14519__$1 = state_14519;
var statearr_14540_14573 = state_14519__$1;
(statearr_14540_14573[(2)] = inst_14505);

(statearr_14540_14573[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (2))){
var state_14519__$1 = state_14519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14519__$1,(4),in$);
} else {
if((state_val_14520 === (23))){
var inst_14513 = (state_14519[(2)]);
var state_14519__$1 = state_14519;
var statearr_14541_14574 = state_14519__$1;
(statearr_14541_14574[(2)] = inst_14513);

(statearr_14541_14574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (19))){
var inst_14500 = (state_14519[(2)]);
var state_14519__$1 = state_14519;
var statearr_14542_14575 = state_14519__$1;
(statearr_14542_14575[(2)] = inst_14500);

(statearr_14542_14575[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (11))){
var inst_14471 = (state_14519[(8)]);
var inst_14485 = (state_14519[(7)]);
var inst_14485__$1 = cljs.core.seq.call(null,inst_14471);
var state_14519__$1 = (function (){var statearr_14543 = state_14519;
(statearr_14543[(7)] = inst_14485__$1);

return statearr_14543;
})();
if(inst_14485__$1){
var statearr_14544_14576 = state_14519__$1;
(statearr_14544_14576[(1)] = (14));

} else {
var statearr_14545_14577 = state_14519__$1;
(statearr_14545_14577[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (9))){
var inst_14507 = (state_14519[(2)]);
var inst_14508 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14519__$1 = (function (){var statearr_14546 = state_14519;
(statearr_14546[(15)] = inst_14507);

return statearr_14546;
})();
if(cljs.core.truth_(inst_14508)){
var statearr_14547_14578 = state_14519__$1;
(statearr_14547_14578[(1)] = (21));

} else {
var statearr_14548_14579 = state_14519__$1;
(statearr_14548_14579[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (5))){
var inst_14463 = cljs.core.async.close_BANG_.call(null,out);
var state_14519__$1 = state_14519;
var statearr_14549_14580 = state_14519__$1;
(statearr_14549_14580[(2)] = inst_14463);

(statearr_14549_14580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (14))){
var inst_14485 = (state_14519[(7)]);
var inst_14487 = cljs.core.chunked_seq_QMARK_.call(null,inst_14485);
var state_14519__$1 = state_14519;
if(inst_14487){
var statearr_14550_14581 = state_14519__$1;
(statearr_14550_14581[(1)] = (17));

} else {
var statearr_14551_14582 = state_14519__$1;
(statearr_14551_14582[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (16))){
var inst_14503 = (state_14519[(2)]);
var state_14519__$1 = state_14519;
var statearr_14552_14583 = state_14519__$1;
(statearr_14552_14583[(2)] = inst_14503);

(statearr_14552_14583[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14520 === (10))){
var inst_14472 = (state_14519[(10)]);
var inst_14474 = (state_14519[(12)]);
var inst_14479 = cljs.core._nth.call(null,inst_14472,inst_14474);
var state_14519__$1 = state_14519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14519__$1,(13),out,inst_14479);
} else {
if((state_val_14520 === (18))){
var inst_14485 = (state_14519[(7)]);
var inst_14494 = cljs.core.first.call(null,inst_14485);
var state_14519__$1 = state_14519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14519__$1,(20),out,inst_14494);
} else {
if((state_val_14520 === (8))){
var inst_14473 = (state_14519[(9)]);
var inst_14474 = (state_14519[(12)]);
var inst_14476 = (inst_14474 < inst_14473);
var inst_14477 = inst_14476;
var state_14519__$1 = state_14519;
if(cljs.core.truth_(inst_14477)){
var statearr_14553_14584 = state_14519__$1;
(statearr_14553_14584[(1)] = (10));

} else {
var statearr_14554_14585 = state_14519__$1;
(statearr_14554_14585[(1)] = (11));

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
var statearr_14558 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14558[(0)] = state_machine__7289__auto__);

(statearr_14558[(1)] = (1));

return statearr_14558;
});
var state_machine__7289__auto____1 = (function (state_14519){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_14519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e14559){if((e14559 instanceof Object)){
var ex__7292__auto__ = e14559;
var statearr_14560_14586 = state_14519;
(statearr_14560_14586[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14587 = state_14519;
state_14519 = G__14587;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_14519){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_14519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto__))
})();
var state__7305__auto__ = (function (){var statearr_14561 = f__7304__auto__.call(null);
(statearr_14561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto__);

return statearr_14561;
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
var c__7303__auto___14684 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___14684,out){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___14684,out){
return (function (state_14659){
var state_val_14660 = (state_14659[(1)]);
if((state_val_14660 === (7))){
var inst_14654 = (state_14659[(2)]);
var state_14659__$1 = state_14659;
var statearr_14661_14685 = state_14659__$1;
(statearr_14661_14685[(2)] = inst_14654);

(statearr_14661_14685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14660 === (1))){
var inst_14636 = null;
var state_14659__$1 = (function (){var statearr_14662 = state_14659;
(statearr_14662[(7)] = inst_14636);

return statearr_14662;
})();
var statearr_14663_14686 = state_14659__$1;
(statearr_14663_14686[(2)] = null);

(statearr_14663_14686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14660 === (4))){
var inst_14639 = (state_14659[(8)]);
var inst_14639__$1 = (state_14659[(2)]);
var inst_14640 = (inst_14639__$1 == null);
var inst_14641 = cljs.core.not.call(null,inst_14640);
var state_14659__$1 = (function (){var statearr_14664 = state_14659;
(statearr_14664[(8)] = inst_14639__$1);

return statearr_14664;
})();
if(inst_14641){
var statearr_14665_14687 = state_14659__$1;
(statearr_14665_14687[(1)] = (5));

} else {
var statearr_14666_14688 = state_14659__$1;
(statearr_14666_14688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14660 === (6))){
var state_14659__$1 = state_14659;
var statearr_14667_14689 = state_14659__$1;
(statearr_14667_14689[(2)] = null);

(statearr_14667_14689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14660 === (3))){
var inst_14656 = (state_14659[(2)]);
var inst_14657 = cljs.core.async.close_BANG_.call(null,out);
var state_14659__$1 = (function (){var statearr_14668 = state_14659;
(statearr_14668[(9)] = inst_14656);

return statearr_14668;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14659__$1,inst_14657);
} else {
if((state_val_14660 === (2))){
var state_14659__$1 = state_14659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14659__$1,(4),ch);
} else {
if((state_val_14660 === (11))){
var inst_14639 = (state_14659[(8)]);
var inst_14648 = (state_14659[(2)]);
var inst_14636 = inst_14639;
var state_14659__$1 = (function (){var statearr_14669 = state_14659;
(statearr_14669[(7)] = inst_14636);

(statearr_14669[(10)] = inst_14648);

return statearr_14669;
})();
var statearr_14670_14690 = state_14659__$1;
(statearr_14670_14690[(2)] = null);

(statearr_14670_14690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14660 === (9))){
var inst_14639 = (state_14659[(8)]);
var state_14659__$1 = state_14659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14659__$1,(11),out,inst_14639);
} else {
if((state_val_14660 === (5))){
var inst_14636 = (state_14659[(7)]);
var inst_14639 = (state_14659[(8)]);
var inst_14643 = cljs.core._EQ_.call(null,inst_14639,inst_14636);
var state_14659__$1 = state_14659;
if(inst_14643){
var statearr_14672_14691 = state_14659__$1;
(statearr_14672_14691[(1)] = (8));

} else {
var statearr_14673_14692 = state_14659__$1;
(statearr_14673_14692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14660 === (10))){
var inst_14651 = (state_14659[(2)]);
var state_14659__$1 = state_14659;
var statearr_14674_14693 = state_14659__$1;
(statearr_14674_14693[(2)] = inst_14651);

(statearr_14674_14693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14660 === (8))){
var inst_14636 = (state_14659[(7)]);
var tmp14671 = inst_14636;
var inst_14636__$1 = tmp14671;
var state_14659__$1 = (function (){var statearr_14675 = state_14659;
(statearr_14675[(7)] = inst_14636__$1);

return statearr_14675;
})();
var statearr_14676_14694 = state_14659__$1;
(statearr_14676_14694[(2)] = null);

(statearr_14676_14694[(1)] = (2));


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
});})(c__7303__auto___14684,out))
;
return ((function (switch__7288__auto__,c__7303__auto___14684,out){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_14680 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14680[(0)] = state_machine__7289__auto__);

(statearr_14680[(1)] = (1));

return statearr_14680;
});
var state_machine__7289__auto____1 = (function (state_14659){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_14659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e14681){if((e14681 instanceof Object)){
var ex__7292__auto__ = e14681;
var statearr_14682_14695 = state_14659;
(statearr_14682_14695[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14681;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14696 = state_14659;
state_14659 = G__14696;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_14659){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_14659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___14684,out))
})();
var state__7305__auto__ = (function (){var statearr_14683 = f__7304__auto__.call(null);
(statearr_14683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___14684);

return statearr_14683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___14684,out))
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
var c__7303__auto___14831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___14831,out){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___14831,out){
return (function (state_14801){
var state_val_14802 = (state_14801[(1)]);
if((state_val_14802 === (7))){
var inst_14797 = (state_14801[(2)]);
var state_14801__$1 = state_14801;
var statearr_14803_14832 = state_14801__$1;
(statearr_14803_14832[(2)] = inst_14797);

(statearr_14803_14832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14802 === (1))){
var inst_14764 = (new Array(n));
var inst_14765 = inst_14764;
var inst_14766 = (0);
var state_14801__$1 = (function (){var statearr_14804 = state_14801;
(statearr_14804[(7)] = inst_14765);

(statearr_14804[(8)] = inst_14766);

return statearr_14804;
})();
var statearr_14805_14833 = state_14801__$1;
(statearr_14805_14833[(2)] = null);

(statearr_14805_14833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14802 === (4))){
var inst_14769 = (state_14801[(9)]);
var inst_14769__$1 = (state_14801[(2)]);
var inst_14770 = (inst_14769__$1 == null);
var inst_14771 = cljs.core.not.call(null,inst_14770);
var state_14801__$1 = (function (){var statearr_14806 = state_14801;
(statearr_14806[(9)] = inst_14769__$1);

return statearr_14806;
})();
if(inst_14771){
var statearr_14807_14834 = state_14801__$1;
(statearr_14807_14834[(1)] = (5));

} else {
var statearr_14808_14835 = state_14801__$1;
(statearr_14808_14835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14802 === (15))){
var inst_14791 = (state_14801[(2)]);
var state_14801__$1 = state_14801;
var statearr_14809_14836 = state_14801__$1;
(statearr_14809_14836[(2)] = inst_14791);

(statearr_14809_14836[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14802 === (13))){
var state_14801__$1 = state_14801;
var statearr_14810_14837 = state_14801__$1;
(statearr_14810_14837[(2)] = null);

(statearr_14810_14837[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14802 === (6))){
var inst_14766 = (state_14801[(8)]);
var inst_14787 = (inst_14766 > (0));
var state_14801__$1 = state_14801;
if(cljs.core.truth_(inst_14787)){
var statearr_14811_14838 = state_14801__$1;
(statearr_14811_14838[(1)] = (12));

} else {
var statearr_14812_14839 = state_14801__$1;
(statearr_14812_14839[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14802 === (3))){
var inst_14799 = (state_14801[(2)]);
var state_14801__$1 = state_14801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14801__$1,inst_14799);
} else {
if((state_val_14802 === (12))){
var inst_14765 = (state_14801[(7)]);
var inst_14789 = cljs.core.vec.call(null,inst_14765);
var state_14801__$1 = state_14801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14801__$1,(15),out,inst_14789);
} else {
if((state_val_14802 === (2))){
var state_14801__$1 = state_14801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14801__$1,(4),ch);
} else {
if((state_val_14802 === (11))){
var inst_14781 = (state_14801[(2)]);
var inst_14782 = (new Array(n));
var inst_14765 = inst_14782;
var inst_14766 = (0);
var state_14801__$1 = (function (){var statearr_14813 = state_14801;
(statearr_14813[(10)] = inst_14781);

(statearr_14813[(7)] = inst_14765);

(statearr_14813[(8)] = inst_14766);

return statearr_14813;
})();
var statearr_14814_14840 = state_14801__$1;
(statearr_14814_14840[(2)] = null);

(statearr_14814_14840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14802 === (9))){
var inst_14765 = (state_14801[(7)]);
var inst_14779 = cljs.core.vec.call(null,inst_14765);
var state_14801__$1 = state_14801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14801__$1,(11),out,inst_14779);
} else {
if((state_val_14802 === (5))){
var inst_14769 = (state_14801[(9)]);
var inst_14774 = (state_14801[(11)]);
var inst_14765 = (state_14801[(7)]);
var inst_14766 = (state_14801[(8)]);
var inst_14773 = (inst_14765[inst_14766] = inst_14769);
var inst_14774__$1 = (inst_14766 + (1));
var inst_14775 = (inst_14774__$1 < n);
var state_14801__$1 = (function (){var statearr_14815 = state_14801;
(statearr_14815[(11)] = inst_14774__$1);

(statearr_14815[(12)] = inst_14773);

return statearr_14815;
})();
if(cljs.core.truth_(inst_14775)){
var statearr_14816_14841 = state_14801__$1;
(statearr_14816_14841[(1)] = (8));

} else {
var statearr_14817_14842 = state_14801__$1;
(statearr_14817_14842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14802 === (14))){
var inst_14794 = (state_14801[(2)]);
var inst_14795 = cljs.core.async.close_BANG_.call(null,out);
var state_14801__$1 = (function (){var statearr_14819 = state_14801;
(statearr_14819[(13)] = inst_14794);

return statearr_14819;
})();
var statearr_14820_14843 = state_14801__$1;
(statearr_14820_14843[(2)] = inst_14795);

(statearr_14820_14843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14802 === (10))){
var inst_14785 = (state_14801[(2)]);
var state_14801__$1 = state_14801;
var statearr_14821_14844 = state_14801__$1;
(statearr_14821_14844[(2)] = inst_14785);

(statearr_14821_14844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14802 === (8))){
var inst_14774 = (state_14801[(11)]);
var inst_14765 = (state_14801[(7)]);
var tmp14818 = inst_14765;
var inst_14765__$1 = tmp14818;
var inst_14766 = inst_14774;
var state_14801__$1 = (function (){var statearr_14822 = state_14801;
(statearr_14822[(7)] = inst_14765__$1);

(statearr_14822[(8)] = inst_14766);

return statearr_14822;
})();
var statearr_14823_14845 = state_14801__$1;
(statearr_14823_14845[(2)] = null);

(statearr_14823_14845[(1)] = (2));


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
});})(c__7303__auto___14831,out))
;
return ((function (switch__7288__auto__,c__7303__auto___14831,out){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_14827 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14827[(0)] = state_machine__7289__auto__);

(statearr_14827[(1)] = (1));

return statearr_14827;
});
var state_machine__7289__auto____1 = (function (state_14801){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_14801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e14828){if((e14828 instanceof Object)){
var ex__7292__auto__ = e14828;
var statearr_14829_14846 = state_14801;
(statearr_14829_14846[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14847 = state_14801;
state_14801 = G__14847;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_14801){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_14801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___14831,out))
})();
var state__7305__auto__ = (function (){var statearr_14830 = f__7304__auto__.call(null);
(statearr_14830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___14831);

return statearr_14830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___14831,out))
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
var c__7303__auto___14990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7303__auto___14990,out){
return (function (){
var f__7304__auto__ = (function (){var switch__7288__auto__ = ((function (c__7303__auto___14990,out){
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
var inst_14919 = [];
var inst_14920 = inst_14919;
var inst_14921 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14960__$1 = (function (){var statearr_14963 = state_14960;
(statearr_14963[(7)] = inst_14920);

(statearr_14963[(8)] = inst_14921);

return statearr_14963;
})();
var statearr_14964_14992 = state_14960__$1;
(statearr_14964_14992[(2)] = null);

(statearr_14964_14992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14961 === (4))){
var inst_14924 = (state_14960[(9)]);
var inst_14924__$1 = (state_14960[(2)]);
var inst_14925 = (inst_14924__$1 == null);
var inst_14926 = cljs.core.not.call(null,inst_14925);
var state_14960__$1 = (function (){var statearr_14965 = state_14960;
(statearr_14965[(9)] = inst_14924__$1);

return statearr_14965;
})();
if(inst_14926){
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
var inst_14920 = (state_14960[(7)]);
var inst_14945 = inst_14920.length;
var inst_14946 = (inst_14945 > (0));
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
var inst_14920 = (state_14960[(7)]);
var inst_14948 = cljs.core.vec.call(null,inst_14920);
var state_14960__$1 = state_14960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14960__$1,(15),out,inst_14948);
} else {
if((state_val_14961 === (2))){
var state_14960__$1 = state_14960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14960__$1,(4),ch);
} else {
if((state_val_14961 === (11))){
var inst_14928 = (state_14960[(10)]);
var inst_14924 = (state_14960[(9)]);
var inst_14938 = (state_14960[(2)]);
var inst_14939 = [];
var inst_14940 = inst_14939.push(inst_14924);
var inst_14920 = inst_14939;
var inst_14921 = inst_14928;
var state_14960__$1 = (function (){var statearr_14972 = state_14960;
(statearr_14972[(11)] = inst_14940);

(statearr_14972[(12)] = inst_14938);

(statearr_14972[(7)] = inst_14920);

(statearr_14972[(8)] = inst_14921);

return statearr_14972;
})();
var statearr_14973_14999 = state_14960__$1;
(statearr_14973_14999[(2)] = null);

(statearr_14973_14999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14961 === (9))){
var inst_14920 = (state_14960[(7)]);
var inst_14936 = cljs.core.vec.call(null,inst_14920);
var state_14960__$1 = state_14960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14960__$1,(11),out,inst_14936);
} else {
if((state_val_14961 === (5))){
var inst_14928 = (state_14960[(10)]);
var inst_14924 = (state_14960[(9)]);
var inst_14921 = (state_14960[(8)]);
var inst_14928__$1 = f.call(null,inst_14924);
var inst_14929 = cljs.core._EQ_.call(null,inst_14928__$1,inst_14921);
var inst_14930 = cljs.core.keyword_identical_QMARK_.call(null,inst_14921,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14931 = (inst_14929) || (inst_14930);
var state_14960__$1 = (function (){var statearr_14974 = state_14960;
(statearr_14974[(10)] = inst_14928__$1);

return statearr_14974;
})();
if(cljs.core.truth_(inst_14931)){
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
var inst_14943 = (state_14960[(2)]);
var state_14960__$1 = state_14960;
var statearr_14980_15003 = state_14960__$1;
(statearr_14980_15003[(2)] = inst_14943);

(statearr_14980_15003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14961 === (8))){
var inst_14928 = (state_14960[(10)]);
var inst_14924 = (state_14960[(9)]);
var inst_14920 = (state_14960[(7)]);
var inst_14933 = inst_14920.push(inst_14924);
var tmp14977 = inst_14920;
var inst_14920__$1 = tmp14977;
var inst_14921 = inst_14928;
var state_14960__$1 = (function (){var statearr_14981 = state_14960;
(statearr_14981[(14)] = inst_14933);

(statearr_14981[(7)] = inst_14920__$1);

(statearr_14981[(8)] = inst_14921);

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
});})(c__7303__auto___14990,out))
;
return ((function (switch__7288__auto__,c__7303__auto___14990,out){
return (function() {
var state_machine__7289__auto__ = null;
var state_machine__7289__auto____0 = (function (){
var statearr_14986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14986[(0)] = state_machine__7289__auto__);

(statearr_14986[(1)] = (1));

return statearr_14986;
});
var state_machine__7289__auto____1 = (function (state_14960){
while(true){
var ret_value__7290__auto__ = (function (){try{while(true){
var result__7291__auto__ = switch__7288__auto__.call(null,state_14960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7291__auto__;
}
break;
}
}catch (e14987){if((e14987 instanceof Object)){
var ex__7292__auto__ = e14987;
var statearr_14988_15005 = state_14960;
(statearr_14988_15005[(5)] = ex__7292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15006 = state_14960;
state_14960 = G__15006;
continue;
} else {
return ret_value__7290__auto__;
}
break;
}
});
state_machine__7289__auto__ = function(state_14960){
switch(arguments.length){
case 0:
return state_machine__7289__auto____0.call(this);
case 1:
return state_machine__7289__auto____1.call(this,state_14960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7289__auto____0;
state_machine__7289__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7289__auto____1;
return state_machine__7289__auto__;
})()
;})(switch__7288__auto__,c__7303__auto___14990,out))
})();
var state__7305__auto__ = (function (){var statearr_14989 = f__7304__auto__.call(null);
(statearr_14989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7303__auto___14990);

return statearr_14989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7305__auto__);
});})(c__7303__auto___14990,out))
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
