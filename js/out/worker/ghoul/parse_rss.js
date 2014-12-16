// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.parse_rss');
goog.require('cljs.core');
ghoul.parse_rss.add_tag = (function() {
var add_tag = null;
var add_tag__3 = (function (map,node,tag){
return add_tag.call(null,map,node,tag,tag);
});
var add_tag__4 = (function (map,node,target_keyword,tag){
try{return cljs.core.assoc.call(null,map,cljs.core.keyword.call(null,target_keyword),(node.getElements(tag)[(0)]).getText());
}catch (e23751){if((e23751 instanceof Object)){
var e = e23751;
console.log([cljs.core.str(e)].join(''),node);

return cljs.core.assoc.call(null,map,cljs.core.keyword.call(null,tag),null);
} else {
throw e23751;

}
}});
add_tag = function(map,node,target_keyword,tag){
switch(arguments.length){
case 3:
return add_tag__3.call(this,map,node,target_keyword);
case 4:
return add_tag__4.call(this,map,node,target_keyword,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_tag.cljs$core$IFn$_invoke$arity$3 = add_tag__3;
add_tag.cljs$core$IFn$_invoke$arity$4 = add_tag__4;
return add_tag;
})()
;
ghoul.parse_rss.parse_node = (function parse_node(node){
return ghoul.parse_rss.add_tag.call(null,ghoul.parse_rss.add_tag.call(null,ghoul.parse_rss.add_tag.call(null,ghoul.parse_rss.add_tag.call(null,ghoul.parse_rss.add_tag.call(null,ghoul.parse_rss.add_tag.call(null,cljs.core.PersistentArrayMap.EMPTY,node,"title"),node,"link"),node,"description"),node,"creator","dc:creator"),node,"pubDate"),node,"guid");
});
ghoul.parse_rss.parse_document = (function parse_document(response){
try{var document = (new XMLDoc(response)).docNode;
var channel_node = (document.getElements("channel")[(0)]);
var items_node_list = channel_node.getElements("item");
var items_parsed = cljs.core.map.call(null,ghoul.parse_rss.parse_node,(function (){var iter__4359__auto__ = ((function (document,channel_node,items_node_list){
return (function iter__23758(s__23759){
return (new cljs.core.LazySeq(null,((function (document,channel_node,items_node_list){
return (function (){
var s__23759__$1 = s__23759;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23759__$1);
if(temp__4126__auto__){
var s__23759__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23759__$2)){
var c__4357__auto__ = cljs.core.chunk_first.call(null,s__23759__$2);
var size__4358__auto__ = cljs.core.count.call(null,c__4357__auto__);
var b__23761 = cljs.core.chunk_buffer.call(null,size__4358__auto__);
if((function (){var i__23760 = (0);
while(true){
if((i__23760 < size__4358__auto__)){
var x = cljs.core._nth.call(null,c__4357__auto__,i__23760);
cljs.core.chunk_append.call(null,b__23761,(items_node_list[x]));

var G__23762 = (i__23760 + (1));
i__23760 = G__23762;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23761),iter__23758.call(null,cljs.core.chunk_rest.call(null,s__23759__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23761),null);
}
} else {
var x = cljs.core.first.call(null,s__23759__$2);
return cljs.core.cons.call(null,(items_node_list[x]),iter__23758.call(null,cljs.core.rest.call(null,s__23759__$2)));
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
}catch (e23757){if((e23757 instanceof Object)){
var e = e23757;
console.log(e);

return null;
} else {
throw e23757;

}
}});
