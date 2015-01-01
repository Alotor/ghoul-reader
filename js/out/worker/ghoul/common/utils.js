// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.common.utils');
goog.require('cljs.core');
goog.require('cuerdas.core');
goog.require('cuerdas.core');
ghoul.common.utils.restore_tags = (function restore_tags(string){
return cuerdas.core.replace.call(null,cuerdas.core.replace.call(null,cuerdas.core.replace.call(null,cuerdas.core.replace.call(null,cuerdas.core.replace.call(null,cuerdas.core.replace.call(null,cuerdas.core.replace.call(null,cuerdas.core.replace.call(null,string,"&gt;",">"),"&lt;","<"),"&quot;","\""),"&apos;","'"),"&amp;","&"),"&#34;","\""),"&#8220;","\u201C"),"&#8221;","\u201D");
});
ghoul.common.utils.remove_unallowed_tags = (function remove_unallowed_tags(string){
return cuerdas.core.strip_tags.call(null,cuerdas.core.strip_tags.call(null,string,"script"),"link");
});
/**
* @param {...*} var_args
*/
ghoul.common.utils.project = (function() { 
var project__delegate = function (data,keys){
return cljs.core.reduce.call(null,(function (p1__9699_SHARP_,p2__9700_SHARP_){
return cljs.core.assoc.call(null,p1__9699_SHARP_,p2__9700_SHARP_,p2__9700_SHARP_.call(null,data));
}),cljs.core.PersistentArrayMap.EMPTY,keys);
};
var project = function (data,var_args){
var keys = null;
if (arguments.length > 1) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return project__delegate.call(this,data,keys);};
project.cljs$lang$maxFixedArity = 1;
project.cljs$lang$applyTo = (function (arglist__9701){
var data = cljs.core.first(arglist__9701);
var keys = cljs.core.rest(arglist__9701);
return project__delegate(data,keys);
});
project.cljs$core$IFn$_invoke$arity$variadic = project__delegate;
return project;
})()
;
/**
* @param {...*} var_args
*/
ghoul.common.utils.mapply = (function() { 
var mapply__delegate = function (f,args){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,cljs.core.butlast.call(null,args),cljs.core.last.call(null,args)));
};
var mapply = function (f,var_args){
var args = null;
if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return mapply__delegate.call(this,f,args);};
mapply.cljs$lang$maxFixedArity = 1;
mapply.cljs$lang$applyTo = (function (arglist__9702){
var f = cljs.core.first(arglist__9702);
var args = cljs.core.rest(arglist__9702);
return mapply__delegate(f,args);
});
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__delegate;
return mapply;
})()
;
