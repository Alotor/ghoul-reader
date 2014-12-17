// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.parse_rss');
goog.require('cljs.core');
goog.require('cuerdas.core');
goog.require('cuerdas.core');
goog.require('cljs_time.coerce');
goog.require('cljs_time.coerce');
goog.require('cljs_time.format');
goog.require('cljs_time.format');
ghoul.parse_rss.parse_date = (function parse_date(string_date){
return cljs_time.coerce.to_long.call(null,(function (){try{return cljs_time.format.parse.call(null,cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"rfc822","rfc822",-404628697)),cuerdas.core.replace_first.call(null,string_date,/GMT/,"+0000"));
}catch (e11001){if((e11001 instanceof Object)){
var e = e11001;
return console.log(string_date,e);
} else {
throw e11001;

}
}})());
});
ghoul.parse_rss.add_tag = (function() {
var add_tag = null;
var add_tag__3 = (function (map,node,tag){
return add_tag.call(null,map,node,tag,tag,cljs.core.identity);
});
var add_tag__4 = (function (map,node,target_keyword,tag){
return add_tag.call(null,map,node,target_keyword,tag,cljs.core.identity);
});
var add_tag__5 = (function (map,node,target_keyword,tag,transformer){
try{return cljs.core.assoc.call(null,map,cljs.core.keyword.call(null,target_keyword),transformer.call(null,(node.getElements(tag)[(0)]).getText()));
}catch (e11003){if((e11003 instanceof Object)){
var e = e11003;
console.log([cljs.core.str(e)].join(''),node);

return cljs.core.assoc.call(null,map,cljs.core.keyword.call(null,tag),null);
} else {
throw e11003;

}
}});
add_tag = function(map,node,target_keyword,tag,transformer){
switch(arguments.length){
case 3:
return add_tag__3.call(this,map,node,target_keyword);
case 4:
return add_tag__4.call(this,map,node,target_keyword,tag);
case 5:
return add_tag__5.call(this,map,node,target_keyword,tag,transformer);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_tag.cljs$core$IFn$_invoke$arity$3 = add_tag__3;
add_tag.cljs$core$IFn$_invoke$arity$4 = add_tag__4;
add_tag.cljs$core$IFn$_invoke$arity$5 = add_tag__5;
return add_tag;
})()
;
ghoul.parse_rss.parse_node = (function parse_node(node){
return ghoul.parse_rss.add_tag.call(null,ghoul.parse_rss.add_tag.call(null,ghoul.parse_rss.add_tag.call(null,ghoul.parse_rss.add_tag.call(null,ghoul.parse_rss.add_tag.call(null,ghoul.parse_rss.add_tag.call(null,cljs.core.PersistentArrayMap.EMPTY,node,"title"),node,"link"),node,"description"),node,"creator","dc:creator"),node,"pubDate","pubDate",ghoul.parse_rss.parse_date),node,"uid","guid");
});
ghoul.parse_rss.parse_document = (function parse_document(response){
try{var document = (new XMLDoc(response)).docNode;
var channel_node = (document.getElements("channel")[(0)]);
var items_node_list = channel_node.getElements("item");
var items_parsed = cljs.core.map.call(null,ghoul.parse_rss.parse_node,(function (){var iter__4359__auto__ = ((function (document,channel_node,items_node_list){
return (function iter__11010(s__11011){
return (new cljs.core.LazySeq(null,((function (document,channel_node,items_node_list){
return (function (){
var s__11011__$1 = s__11011;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11011__$1);
if(temp__4126__auto__){
var s__11011__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11011__$2)){
var c__4357__auto__ = cljs.core.chunk_first.call(null,s__11011__$2);
var size__4358__auto__ = cljs.core.count.call(null,c__4357__auto__);
var b__11013 = cljs.core.chunk_buffer.call(null,size__4358__auto__);
if((function (){var i__11012 = (0);
while(true){
if((i__11012 < size__4358__auto__)){
var x = cljs.core._nth.call(null,c__4357__auto__,i__11012);
cljs.core.chunk_append.call(null,b__11013,(items_node_list[x]));

var G__11014 = (i__11012 + (1));
i__11012 = G__11014;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11013),iter__11010.call(null,cljs.core.chunk_rest.call(null,s__11011__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11013),null);
}
} else {
var x = cljs.core.first.call(null,s__11011__$2);
return cljs.core.cons.call(null,(items_node_list[x]),iter__11010.call(null,cljs.core.rest.call(null,s__11011__$2)));
}
} else {
return null;
}
break;
}
});})(document,channel_node,items_node_list))
,null,null));
});})(document,channel_node,items_node_list))
;
return iter__4359__auto__.call(null,cljs.core.range.call(null,(0),(items_node_list.length - (1))));
})());
return cljs.core.assoc.call(null,ghoul.parse_rss.add_tag.call(null,ghoul.parse_rss.add_tag.call(null,ghoul.parse_rss.add_tag.call(null,cljs.core.PersistentArrayMap.EMPTY,channel_node,"title"),channel_node,"link"),channel_node,"description"),new cljs.core.Keyword(null,"items","items",1031954938),items_parsed);
}catch (e11009){if((e11009 instanceof Object)){
var e = e11009;
console.log(e);

return null;
} else {
throw e11009;

}
}});
