// Compiled by ClojureScript 0.0-2411
goog.provide('cljs_time.internal.core');
goog.require('cljs.core');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* @param {...*} var_args
*/
cljs_time.internal.core._EQ_ = (function() { 
var _EQ___delegate = function (args){
if(cljs.core.every_QMARK_.call(null,(function (p1__14950_SHARP_){
return (p1__14950_SHARP_ instanceof goog.date.Date);
}),args)){
return cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,(function (p1__14951_SHARP_){
return p1__14951_SHARP_.getTime();
}),args));
} else {
return cljs.core.apply.call(null,cljs.core._EQ_,args);

}
};
var _EQ_ = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return _EQ___delegate.call(this,args);};
_EQ_.cljs$lang$maxFixedArity = 0;
_EQ_.cljs$lang$applyTo = (function (arglist__14952){
var args = cljs.core.seq(arglist__14952);
return _EQ___delegate(args);
});
_EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ___delegate;
return _EQ_;
})()
;
cljs_time.internal.core.leap_year_QMARK_ = (function leap_year_QMARK_(y){
if((cljs.core.mod.call(null,y,(400)) === (0))){
return true;
} else {
if((cljs.core.mod.call(null,y,(100)) === (0))){
return false;
} else {
if((cljs.core.mod.call(null,y,(4)) === (0))){
return true;
} else {
return false;

}
}
}
});
cljs_time.internal.core.days_in_month = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
cljs_time.internal.core.year_corrected_dim = (function year_corrected_dim(year,month){
var G__14954 = cljs_time.internal.core.days_in_month.call(null,(cljs.core.truth_(cljs_time.internal.core._EQ_.call(null,month,(1)))?(11):(month - (1))));
var G__14954__$1 = (cljs.core.truth_((function (){var and__3596__auto__ = cljs_time.internal.core.leap_year_QMARK_.call(null,year);
if(and__3596__auto__){
return cljs_time.internal.core._EQ_.call(null,month,(2));
} else {
return and__3596__auto__;
}
})())?(G__14954 + (1)):G__14954);
return G__14954__$1;
});
cljs_time.internal.core.valid_date_QMARK_ = (function valid_date_QMARK_(p__14955){
var map__14957 = p__14955;
var map__14957__$1 = ((cljs.core.seq_QMARK_.call(null,map__14957))?cljs.core.apply.call(null,cljs.core.hash_map,map__14957):map__14957);
var d = map__14957__$1;
var millis = cljs.core.get.call(null,map__14957__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds = cljs.core.get.call(null,map__14957__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes = cljs.core.get.call(null,map__14957__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours = cljs.core.get.call(null,map__14957__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days = cljs.core.get.call(null,map__14957__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var months = cljs.core.get.call(null,map__14957__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years = cljs.core.get.call(null,map__14957__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months__$1 = (months + (1));
var _GT__LT_ = ((function (months__$1,map__14957,map__14957__$1,d,millis,seconds,minutes,hours,days,months,years){
return (function _GT__LT_(a,b,x){
return ((x >= a)) && ((x <= b));
});})(months__$1,map__14957,map__14957__$1,d,millis,seconds,minutes,hours,days,months,years))
;
if(cljs.core.truth_((function (){var and__3596__auto__ = years;
if(cljs.core.truth_(and__3596__auto__)){
return (_GT__LT_.call(null,(1),(12),months__$1)) && (_GT__LT_.call(null,(1),cljs_time.internal.core.year_corrected_dim.call(null,years,months__$1),days)) && (_GT__LT_.call(null,(0),(23),hours)) && (_GT__LT_.call(null,(0),(59),minutes)) && (_GT__LT_.call(null,(0),(60),seconds)) && (_GT__LT_.call(null,(0),(999),millis));
} else {
return and__3596__auto__;
}
})())){
return d;
} else {
throw cljs.core.ex_info.call(null,"Date is not valid",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"invalid-date","invalid-date",2030506573),new cljs.core.Keyword(null,"date","date",-1463434462),d], null));
}
});
cljs_time.internal.core.index_of = (function index_of(coll,x){
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__14959_SHARP_,p2__14958_SHARP_){
if(cljs.core.truth_(cljs_time.internal.core._EQ_.call(null,p2__14958_SHARP_,x))){
return p1__14959_SHARP_;
} else {
return null;
}
}),coll));
});
/**
* @param {...*} var_args
*/
cljs_time.internal.core.period = (function() {
var period = null;
var period__2 = (function (period__$1,value){
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap.fromArray([period__$1,value], true, false),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("cljs-time.core","period","cljs-time.core/period",1354080486)], null));
});
var period__3 = (function() { 
var G__14960__delegate = function (p1,v1,kvs){
return cljs.core.apply.call(null,cljs.core.assoc,period.call(null,p1,v1),kvs);
};
var G__14960 = function (p1,v1,var_args){
var kvs = null;
if (arguments.length > 2) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14960__delegate.call(this,p1,v1,kvs);};
G__14960.cljs$lang$maxFixedArity = 2;
G__14960.cljs$lang$applyTo = (function (arglist__14961){
var p1 = cljs.core.first(arglist__14961);
arglist__14961 = cljs.core.next(arglist__14961);
var v1 = cljs.core.first(arglist__14961);
var kvs = cljs.core.rest(arglist__14961);
return G__14960__delegate(p1,v1,kvs);
});
G__14960.cljs$core$IFn$_invoke$arity$variadic = G__14960__delegate;
return G__14960;
})()
;
period = function(p1,v1,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return period__2.call(this,p1,v1);
default:
return period__3.cljs$core$IFn$_invoke$arity$variadic(p1,v1, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
period.cljs$lang$maxFixedArity = 2;
period.cljs$lang$applyTo = period__3.cljs$lang$applyTo;
period.cljs$core$IFn$_invoke$arity$2 = period__2;
period.cljs$core$IFn$_invoke$arity$variadic = period__3.cljs$core$IFn$_invoke$arity$variadic;
return period;
})()
;
/**
* Formats a string using goog.string.format.
* @param {...*} var_args
*/
cljs_time.internal.core.format = (function() { 
var format__delegate = function (fmt,args){
var args__$1 = cljs.core.map.call(null,(function (x){
if(((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol))){
return [cljs.core.str(x)].join('');
} else {
return x;
}
}),args);
return cljs.core.apply.call(null,goog.string.format,fmt,args__$1);
};
var format = function (fmt,var_args){
var args = null;
if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this,fmt,args);};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__14962){
var fmt = cljs.core.first(arglist__14962);
var args = cljs.core.rest(arglist__14962);
return format__delegate(fmt,args);
});
format.cljs$core$IFn$_invoke$arity$variadic = format__delegate;
return format;
})()
;
/**
* Remove the need to pull in gstring/format code in advanced compilation
*/
cljs_time.internal.core.zero_pad = (function() {
var zero_pad = null;
var zero_pad__1 = (function (n){
if((((0) <= n)) && ((n <= (9)))){
return [cljs.core.str("0"),cljs.core.str(n)].join('');
} else {
return [cljs.core.str(n)].join('');
}
});
var zero_pad__2 = (function (n,zeros){
if(((1) > zeros)){
return [cljs.core.str(n)].join('');
} else {
return [cljs.core.str(clojure.string.join.call(null,cljs.core.take.call(null,(zeros - cljs.core.count.call(null,[cljs.core.str(n)].join(''))),cljs.core.repeat.call(null,"0")))),cljs.core.str(n)].join('');
}
});
zero_pad = function(n,zeros){
switch(arguments.length){
case 1:
return zero_pad__1.call(this,n);
case 2:
return zero_pad__2.call(this,n,zeros);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
zero_pad.cljs$core$IFn$_invoke$arity$1 = zero_pad__1;
zero_pad.cljs$core$IFn$_invoke$arity$2 = zero_pad__2;
return zero_pad;
})()
;
