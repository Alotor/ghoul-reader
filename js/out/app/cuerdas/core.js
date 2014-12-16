// Compiled by ClojureScript 0.0-2411
goog.provide('cuerdas.core');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* Determines whether a string contains a substring.
*/
cuerdas.core.contains_QMARK_ = (function contains_QMARK_(s,subs){
return goog.string.contains(s,subs);
});
cuerdas.core.derive_regexp = (function derive_regexp(rx,flags){
var gflag = (cljs.core.truth_((function (){var and__3596__auto__ = cljs.core.not.call(null,cuerdas.core.contains_QMARK_.call(null,flags,"-g"));
if(and__3596__auto__){
var or__3608__auto__ = rx.global;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return cuerdas.core.contains_QMARK_.call(null,flags,"g");
}
} else {
return and__3596__auto__;
}
})())?"g":"");
var iflag = (cljs.core.truth_((function (){var and__3596__auto__ = cljs.core.not.call(null,cuerdas.core.contains_QMARK_.call(null,flags,"-i"));
if(and__3596__auto__){
var or__3608__auto__ = rx.ignoreCase;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return cuerdas.core.contains_QMARK_.call(null,flags,"i");
}
} else {
return and__3596__auto__;
}
})())?"i":"");
var mflag = (cljs.core.truth_((function (){var and__3596__auto__ = cljs.core.not.call(null,cuerdas.core.contains_QMARK_.call(null,flags,"-m"));
if(and__3596__auto__){
var or__3608__auto__ = rx.multiline;
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return cuerdas.core.contains_QMARK_.call(null,flags,"m");
}
} else {
return and__3596__auto__;
}
})())?"m":"");
return (new RegExp(rx.source,[cljs.core.str(gflag),cljs.core.str(iflag),cljs.core.str(mflag)].join('')));
});
/**
* Build or derive regexp instance.
*/
cuerdas.core.regexp = (function() {
var regexp = null;
var regexp__1 = (function (s){
return regexp.call(null,s,"");
});
var regexp__2 = (function (s,flags){
if(cljs.core.regexp_QMARK_.call(null,s)){
return cuerdas.core.derive_regexp.call(null,s,flags);
} else {
return (new RegExp(s,flags));
}
});
regexp = function(s,flags){
switch(arguments.length){
case 1:
return regexp__1.call(this,s);
case 2:
return regexp__2.call(this,s,flags);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
regexp.cljs$core$IFn$_invoke$arity$1 = regexp__1;
regexp.cljs$core$IFn$_invoke$arity$2 = regexp__2;
return regexp;
})()
;
/**
* Escapes characters in the string that are not safe
* to use in a RegExp.
*/
cuerdas.core.escape_regexp = (function escape_regexp(s){
return goog.string.regExpEscape(s);
});
/**
* Check if the string starts with prefix.
*/
cuerdas.core.startswith_QMARK_ = (function startswith_QMARK_(s,prefix){
return goog.string.startsWith(s,prefix);
});
/**
* Check if the string ends with suffix.
*/
cuerdas.core.endswith_QMARK_ = (function endswith_QMARK_(s,prefix){
return goog.string.endsWith(s,prefix);
});
/**
* Converts string to all lower-case.
*/
cuerdas.core.lower = (function lower(s){
return clojure.string.lower_case.call(null,s);
});
/**
* Converts string to all upper-case.
*/
cuerdas.core.upper = (function upper(s){
return clojure.string.upper_case.call(null,s);
});
/**
* Converts all adjacent whitespace characters
* to a single space.
*/
cuerdas.core.collapse_whitespace = (function collapse_whitespace(s){
return goog.string.collapseWhitespace(s);
});
/**
* Checks if a string is empty or contains only whitespaces.
*/
cuerdas.core.empty_QMARK_ = (function empty_QMARK_(s){
return goog.string.isEmpty(s);
});
/**
* Repeats string n times.
*/
cuerdas.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (s){
return repeat.call(null,s,(1));
});
var repeat__2 = (function (s,n){
return goog.string.repeat(s,n);
});
repeat = function(s,n){
switch(arguments.length){
case 1:
return repeat__1.call(this,s);
case 2:
return repeat__2.call(this,s,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeat.cljs$core$IFn$_invoke$arity$1 = repeat__1;
repeat.cljs$core$IFn$_invoke$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Takes a string and replaces newlines with a space.
* Multiple lines are replaced with a single space.
*/
cuerdas.core.strip_newlines = (function strip_newlines(s){
return goog.string.stripNewlines(s);
});
/**
* Splits a string on a separator a limited
* number of times. The separator can be a string
* or RegExp instance.
*/
cuerdas.core.split = (function() {
var split = null;
var split__1 = (function (s){
return split.call(null,s,/\s/,null);
});
var split__2 = (function (s,sep){
return split.call(null,s,sep,null);
});
var split__3 = (function (s,sep,num){
if(cljs.core.regexp_QMARK_.call(null,sep)){
return clojure.string.split.call(null,s,sep,num);
} else {
return clojure.string.split.call(null,s,cuerdas.core.regexp.call(null,sep),num);
}
});
split = function(s,sep,num){
switch(arguments.length){
case 1:
return split__1.call(this,s);
case 2:
return split__2.call(this,s,sep);
case 3:
return split__3.call(this,s,sep,num);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$1 = split__1;
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$3 = split__3;
return split;
})()
;
/**
* Return a list of the lines in the string.
*/
cuerdas.core.lines = (function lines(s){
return cuerdas.core.split.call(null,s,/\n|\r\n/);
});
/**
* Extracts a section of a string and returns a new string.
*/
cuerdas.core.slice = (function() {
var slice = null;
var slice__2 = (function (s,begin){
return s.slice(begin);
});
var slice__3 = (function (s,begin,end){
return s.slice(begin,end);
});
slice = function(s,begin,end){
switch(arguments.length){
case 2:
return slice__2.call(this,s,begin);
case 3:
return slice__3.call(this,s,begin,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
slice.cljs$core$IFn$_invoke$arity$2 = slice__2;
slice.cljs$core$IFn$_invoke$arity$3 = slice__3;
return slice;
})()
;
/**
* Replaces all instance of match with replacement in s.
*/
cuerdas.core.replace = (function replace(s,match,replacement){
return s.replace(cuerdas.core.regexp.call(null,match,"g"),replacement);
});
/**
* Replaces first instance of match with replacement in s.
*/
cuerdas.core.replace_first = (function replace_first(s,match,replacement){
return s.replace(cuerdas.core.regexp.call(null,match,"-g"),replacement);
});
/**
* Removes whitespace or specified characters
* from both ends of string.
*/
cuerdas.core.trim = (function() {
var trim = null;
var trim__1 = (function (s){
return trim.call(null,s," ");
});
var trim__2 = (function (s,chs){
var rxstr = [cljs.core.str("["),cljs.core.str(cuerdas.core.escape_regexp.call(null,chs)),cljs.core.str("]")].join('');
var rx = [cljs.core.str("^"),cljs.core.str(rxstr),cljs.core.str("+|"),cljs.core.str(rxstr),cljs.core.str("+$")].join('');
return cuerdas.core.replace.call(null,s,rx,"");
});
trim = function(s,chs){
switch(arguments.length){
case 1:
return trim__1.call(this,s);
case 2:
return trim__2.call(this,s,chs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
trim.cljs$core$IFn$_invoke$arity$1 = trim__1;
trim.cljs$core$IFn$_invoke$arity$2 = trim__2;
return trim;
})()
;
/**
* Removes whitespace or specified characters
* from right side of string.
*/
cuerdas.core.rtrim = (function() {
var rtrim = null;
var rtrim__1 = (function (s){
return rtrim.call(null,s," ");
});
var rtrim__2 = (function (s,chs){
var rxstr = [cljs.core.str("["),cljs.core.str(cuerdas.core.escape_regexp.call(null,chs)),cljs.core.str("]")].join('');
var rx = [cljs.core.str(rxstr),cljs.core.str("+$")].join('');
return cuerdas.core.replace.call(null,s,rx,"");
});
rtrim = function(s,chs){
switch(arguments.length){
case 1:
return rtrim__1.call(this,s);
case 2:
return rtrim__2.call(this,s,chs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rtrim.cljs$core$IFn$_invoke$arity$1 = rtrim__1;
rtrim.cljs$core$IFn$_invoke$arity$2 = rtrim__2;
return rtrim;
})()
;
/**
* Removes whitespace or specified characters
* from left side of string.
*/
cuerdas.core.ltrim = (function() {
var ltrim = null;
var ltrim__1 = (function (s){
return ltrim.call(null,s," ");
});
var ltrim__2 = (function (s,chs){
var rxstr = [cljs.core.str("["),cljs.core.str(cuerdas.core.escape_regexp.call(null,chs)),cljs.core.str("]")].join('');
var rx = [cljs.core.str("^"),cljs.core.str(rxstr),cljs.core.str("+")].join('');
return cuerdas.core.replace.call(null,s,rx,"");
});
ltrim = function(s,chs){
switch(arguments.length){
case 1:
return ltrim__1.call(this,s);
case 2:
return ltrim__2.call(this,s,chs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ltrim.cljs$core$IFn$_invoke$arity$1 = ltrim__1;
ltrim.cljs$core$IFn$_invoke$arity$2 = ltrim__2;
return ltrim;
})()
;
/**
* Truncates a string to a certain length and adds '...'
* if necessary.
*/
cuerdas.core.prune = (function() {
var prune = null;
var prune__2 = (function (s,num){
return prune.call(null,s,num,"...");
});
var prune__3 = (function (s,num,subs){
if((cljs.core.count.call(null,s) < num)){
return s;
} else {
var tmpl = (function (c){
if(cljs.core.not_EQ_.call(null,cuerdas.core.upper.call(null,c),cuerdas.core.lower.call(null,c))){
return "A";
} else {
return " ";
}
});
var template = cuerdas.core.replace.call(null,cuerdas.core.slice.call(null,s,(0),(cljs.core.count.call(null,s) + (1))),/.(?=\W*\w*$)/,tmpl);
var template__$1 = (cljs.core.truth_(cuerdas.core.slice.call(null,template,(cljs.core.count.call(null,template) - (2))).match(/\w\w/))?cuerdas.core.replace_first.call(null,template,/\s*\S+$/,""):cuerdas.core.rtrim.call(null,cuerdas.core.slice.call(null,template,(0),(cljs.core.count.call(null,template) - (1)))));
if((cljs.core.count.call(null,[cljs.core.str(template__$1),cljs.core.str(subs)].join('')) > cljs.core.count.call(null,s))){
return s;
} else {
return [cljs.core.str(cuerdas.core.slice.call(null,s,(0),cljs.core.count.call(null,template__$1))),cljs.core.str(subs)].join('');
}
}
});
prune = function(s,num,subs){
switch(arguments.length){
case 2:
return prune__2.call(this,s,num);
case 3:
return prune__3.call(this,s,num,subs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prune.cljs$core$IFn$_invoke$arity$2 = prune__2;
prune.cljs$core$IFn$_invoke$arity$3 = prune__3;
return prune;
})()
;
/**
* Joins strings together with given separator.
*/
cuerdas.core.join = (function() {
var join = null;
var join__1 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__2 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case 1:
return join__1.call(this,separator);
case 2:
return join__2.call(this,separator,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
join.cljs$core$IFn$_invoke$arity$1 = join__1;
join.cljs$core$IFn$_invoke$arity$2 = join__2;
return join;
})()
;
/**
* Surround a string with another string.
*/
cuerdas.core.surround = (function surround(s,wrap){
return cuerdas.core.join.call(null,"",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wrap,s,wrap], null));
});
/**
* Quotes a string.
*/
cuerdas.core.quote = (function() {
var quote = null;
var quote__1 = (function (s){
return cuerdas.core.surround.call(null,s,"\"");
});
var quote__2 = (function (s,qchar){
return cuerdas.core.surround.call(null,s,qchar);
});
quote = function(s,qchar){
switch(arguments.length){
case 1:
return quote__1.call(this,s);
case 2:
return quote__2.call(this,s,qchar);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
quote.cljs$core$IFn$_invoke$arity$1 = quote__1;
quote.cljs$core$IFn$_invoke$arity$2 = quote__2;
return quote;
})()
;
/**
* Unquote a string.
*/
cuerdas.core.unquote = (function() {
var unquote = null;
var unquote__1 = (function (s){
return unquote.call(null,s,"\"");
});
var unquote__2 = (function (s,qchar){
var length = cljs.core.count.call(null,s);
var fchar = (s[(0)]);
var lchar = (s[(length - (1))]);
if((cljs.core._EQ_.call(null,fchar,qchar)) && (cljs.core._EQ_.call(null,lchar,qchar))){
return cuerdas.core.slice.call(null,s,(1),(length - (1)));
} else {
return s;
}
});
unquote = function(s,qchar){
switch(arguments.length){
case 1:
return unquote__1.call(this,s);
case 2:
return unquote__2.call(this,s,qchar);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unquote.cljs$core$IFn$_invoke$arity$1 = unquote__1;
unquote.cljs$core$IFn$_invoke$arity$2 = unquote__2;
return unquote;
})()
;
/**
* Transform text into a URL slug.
*/
cuerdas.core.slugify = (function slugify(s){
var from = "\u0105\u00E0\u00E1\u00E4\u00E2\u00E3\u00E5\u00E6\u0103\u0107\u010D\u0109\u0119\u00E8\u00E9\u00EB\u00EA\u011D\u0125\u00EC\u00ED\u00EF\u00EE\u0135\u0142\u013E\u0144\u0148\u00F2\u00F3\u00F6\u0151\u00F4\u00F5\u00F0\u00F8\u015B\u0219\u0161\u015D\u0165\u021B\u016D\u00F9\u00FA\u00FC\u0171\u00FB\u00F1\u00FF\u00FD\u00E7\u017C\u017A\u017E";
var to = "aaaaaaaaaccceeeeeghiiiijllnnoooooooossssttuuuuuunyyczzz";
var regex = [cljs.core.str("["),cljs.core.str(cuerdas.core.escape_regexp.call(null,from)),cljs.core.str("]")].join('');
return cuerdas.core.dasherize.call(null,cuerdas.core.replace.call(null,cuerdas.core.replace.call(null,cuerdas.core.lower.call(null,s),regex,((function (from,to,regex){
return (function (c){
var index = from.indexOf(c);
var res = to.charAt(index);
if(cljs.core.truth_(cuerdas.core.empty_QMARK_.call(null,res))){
return "-";
} else {
return res;
}
});})(from,to,regex))
),/[^\w\s-]/,""));
});
/**
* Remove html tags from string.
* @param {...*} var_args
*/
cuerdas.core.strip_tags = (function() {
var strip_tags = null;
var strip_tags__1 = (function (s){
return strip_tags.call(null,s,"");
});
var strip_tags__2 = (function() { 
var G__12049__delegate = function (s,tags){
return cljs.core.reduce.call(null,(function (acc,tag){
var rx = cuerdas.core.regexp.call(null,[cljs.core.str("<\\/?"),cljs.core.str(tag),cljs.core.str("[^<>]*>")].join(''),"gi");
return cuerdas.core.replace.call(null,acc,rx,"");
}),s,tags);
};
var G__12049 = function (s,var_args){
var tags = null;
if (arguments.length > 1) {
  tags = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12049__delegate.call(this,s,tags);};
G__12049.cljs$lang$maxFixedArity = 1;
G__12049.cljs$lang$applyTo = (function (arglist__12050){
var s = cljs.core.first(arglist__12050);
var tags = cljs.core.rest(arglist__12050);
return G__12049__delegate(s,tags);
});
G__12049.cljs$core$IFn$_invoke$arity$variadic = G__12049__delegate;
return G__12049;
})()
;
strip_tags = function(s,var_args){
var tags = var_args;
switch(arguments.length){
case 1:
return strip_tags__1.call(this,s);
default:
return strip_tags__2.cljs$core$IFn$_invoke$arity$variadic(s, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
strip_tags.cljs$lang$maxFixedArity = 1;
strip_tags.cljs$lang$applyTo = strip_tags__2.cljs$lang$applyTo;
strip_tags.cljs$core$IFn$_invoke$arity$1 = strip_tags__1;
strip_tags.cljs$core$IFn$_invoke$arity$variadic = strip_tags__2.cljs$core$IFn$_invoke$arity$variadic;
return strip_tags;
})()
;
cuerdas.core.parse_number_impl = (function parse_number_impl(source){
var or__3608__auto__ = (source * (1));
if(cljs.core.truth_(or__3608__auto__)){
return or__3608__auto__;
} else {
return (0);
}
});
/**
* General purpose function for parse number like
* string to number. It works with both: integers
* and floats.
*/
cuerdas.core.parse_number = (function() {
var parse_number = null;
var parse_number__1 = (function (s){
return parse_number.call(null,s,(0));
});
var parse_number__2 = (function (s,precision){
if((s == null)){
return (0);
} else {
var s__$1 = cuerdas.core.trim.call(null,s);
var rx = /^-?\d+(?:\.\d+)?$/;
if(cljs.core.truth_(s__$1.match(rx))){
return cuerdas.core.parse_number_impl.call(null,cuerdas.core.parse_number_impl.call(null,s__$1).toFixed(precision));
} else {
return NaN;
}
}
});
parse_number = function(s,precision){
switch(arguments.length){
case 1:
return parse_number__1.call(this,s);
case 2:
return parse_number__2.call(this,s,precision);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parse_number.cljs$core$IFn$_invoke$arity$1 = parse_number__1;
parse_number.cljs$core$IFn$_invoke$arity$2 = parse_number__2;
return parse_number;
})()
;
/**
* Return the float value, wraps parseFloat.
*/
cuerdas.core.parse_float = (function() {
var parse_float = null;
var parse_float__1 = (function (s){
return parseFloat(s);
});
var parse_float__2 = (function (s,precision){
if((precision == null)){
return parseFloat(s);
} else {
return parseFloat(parseFloat(s).toFixed(precision));
}
});
parse_float = function(s,precision){
switch(arguments.length){
case 1:
return parse_float__1.call(this,s);
case 2:
return parse_float__2.call(this,s,precision);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parse_float.cljs$core$IFn$_invoke$arity$1 = parse_float__1;
parse_float.cljs$core$IFn$_invoke$arity$2 = parse_float__2;
return parse_float;
})()
;
/**
* Return the number value in integer form.
*/
cuerdas.core.parse_int = (function parse_int(s){
var rx = cuerdas.core.regexp.call(null,/^\s*-?0x/,"i");
if(cljs.core.truth_(rx.test(s))){
return parseInt(s,(16));
} else {
return parseInt(s,(10));
}
});
/**
* Simple string interpolation.
* @param {...*} var_args
*/
cuerdas.core.format = (function() { 
var format__delegate = function (s,args){
if((cljs.core._EQ_.call(null,cljs.core.count.call(null,args),(1))) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))){
var params = cljs.core.clj__GT_js.call(null,cljs.core.first.call(null,args));
return cuerdas.core.replace.call(null,s,cuerdas.core.regexp.call(null,/%\(\w+\)s/,"g"),((function (params){
return (function (match){
return [cljs.core.str((params[cuerdas.core.slice.call(null,match,(2),(-2))]))].join('');
});})(params))
);
} else {
var params = cljs.core.clj__GT_js.call(null,args);
return cuerdas.core.replace.call(null,s,cuerdas.core.regexp.call(null,"%s","g"),((function (params){
return (function (_){
return [cljs.core.str(params.shift())].join('');
});})(params))
);
}
};
var format = function (s,var_args){
var args = null;
if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this,s,args);};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__12051){
var s = cljs.core.first(arglist__12051);
var args = cljs.core.rest(arglist__12051);
return format__delegate(s,args);
});
format.cljs$core$IFn$_invoke$arity$variadic = format__delegate;
return format;
})()
;
/**
* Pads the str with characters until the total string
* length is equal to the passed length parameter. By
* default, pads on the left with the space char.
* @param {...*} var_args
*/
cuerdas.core.pad = (function() { 
var pad__delegate = function (s,p__12052){
var vec__12058 = p__12052;
var map__12059 = cljs.core.nth.call(null,vec__12058,(0),null);
var map__12059__$1 = ((cljs.core.seq_QMARK_.call(null,map__12059))?cljs.core.apply.call(null,cljs.core.hash_map,map__12059):map__12059);
var type = cljs.core.get.call(null,map__12059__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"left","left",-399115937));
var padding = cljs.core.get.call(null,map__12059__$1,new cljs.core.Keyword(null,"padding","padding",1660304693)," ");
var length = cljs.core.get.call(null,map__12059__$1,new cljs.core.Keyword(null,"length","length",588987862),(0));
var padding__$1 = (padding[(0)]);
var padlen = (length - cljs.core.count.call(null,s));
var pred__12060 = cljs.core._EQ_;
var expr__12061 = type;
if(cljs.core.truth_(pred__12060.call(null,new cljs.core.Keyword(null,"right","right",-452581833),expr__12061))){
return [cljs.core.str(s),cljs.core.str(cuerdas.core.repeat.call(null,padding__$1,padlen))].join('');
} else {
if(cljs.core.truth_(pred__12060.call(null,new cljs.core.Keyword(null,"both","both",-393648840),expr__12061))){
var first = cuerdas.core.repeat.call(null,padding__$1,Math.ceil((padlen / (2))));
var second = cuerdas.core.repeat.call(null,padding__$1,Math.floor((padlen / (2))));
return [cljs.core.str(first),cljs.core.str(s),cljs.core.str(second)].join('');
} else {
if(cljs.core.truth_(pred__12060.call(null,new cljs.core.Keyword(null,"left","left",-399115937),expr__12061))){
return [cljs.core.str(cuerdas.core.repeat.call(null,padding__$1,padlen)),cljs.core.str(s)].join('');
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12061)].join('')));
}
}
}
};
var pad = function (s,var_args){
var p__12052 = null;
if (arguments.length > 1) {
  p__12052 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return pad__delegate.call(this,s,p__12052);};
pad.cljs$lang$maxFixedArity = 1;
pad.cljs$lang$applyTo = (function (arglist__12063){
var s = cljs.core.first(arglist__12063);
var p__12052 = cljs.core.rest(arglist__12063);
return pad__delegate(s,p__12052);
});
pad.cljs$core$IFn$_invoke$arity$variadic = pad__delegate;
return pad;
})()
;
/**
* Converts first letter of the string to uppercase.
*/
cuerdas.core.capitalize = (function capitalize(s){
return [cljs.core.str(cuerdas.core.upper.call(null,s.charAt((0)))),cljs.core.str(cuerdas.core.slice.call(null,s,(1)))].join('');
});
/**
* Converts a string from selector-case to camelCase.
*/
cuerdas.core.camelize = (function camelize(s){
return cuerdas.core.replace.call(null,cuerdas.core.trim.call(null,s),cuerdas.core.regexp.call(null,/[-_\s]+(.)?/,"g"),(function (match,c){
if(cljs.core.truth_(c)){
return cuerdas.core.upper.call(null,c);
} else {
return "";
}
}));
});
/**
* Converts a underscored or camelized string
* into an dasherized one.
*/
cuerdas.core.dasherize = (function dasherize(s){
return cuerdas.core.lower.call(null,cuerdas.core.replace.call(null,cuerdas.core.replace.call(null,cuerdas.core.trim.call(null,s),/([A-Z])/,"-$1"),/[-_\s]+/,"-"));
});
/**
* Converts a camelized or dasherized string
* into an underscored one.
*/
cuerdas.core.underscored = (function underscored(s){
return cuerdas.core.lower.call(null,cuerdas.core.replace.call(null,cuerdas.core.replace.call(null,cuerdas.core.trim.call(null,s),cuerdas.core.regexp.call(null,/([a-z\d])([A-Z]+)/,"g"),"$1_$2"),cuerdas.core.regexp.call(null,/[-\s]+/,"g"),"_"));
});
/**
* Converts an underscored, camelized, or
* dasherized string into a humanized one.
*/
cuerdas.core.humanize = (function humanize(s){
return cuerdas.core.capitalize.call(null,cuerdas.core.replace.call(null,cuerdas.core.replace.call(null,cuerdas.core.underscored.call(null,s),/_id$/,""),cuerdas.core.regexp.call(null,"_","g")," "));
});
/**
* Converts a string into TitleCase.
*/
cuerdas.core.titleize = (function() {
var titleize = null;
var titleize__1 = (function (s){
return goog.string.toTitleCase(s);
});
var titleize__2 = (function (s,delimiters){
return goog.string.toTitleCase(s,delimiters);
});
titleize = function(s,delimiters){
switch(arguments.length){
case 1:
return titleize__1.call(this,s);
case 2:
return titleize__2.call(this,s,delimiters);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
titleize.cljs$core$IFn$_invoke$arity$1 = titleize__1;
titleize.cljs$core$IFn$_invoke$arity$2 = titleize__2;
return titleize;
})()
;
/**
* Converts string to camelized class name. First letter is always upper case.
*/
cuerdas.core.classify = (function classify(s){
return cuerdas.core.capitalize.call(null,cuerdas.core.replace.call(null,cuerdas.core.camelize.call(null,cuerdas.core.replace.call(null,[cljs.core.str(s)].join(''),/[\W_]/," ")),/\s/,""));
});
