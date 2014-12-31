// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.common.http');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('goog.events.EventType');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('ghoul.parser.rss');
goog.require('goog.dom');
goog.require('goog.net.XhrIo');
goog.require('cuerdas.core');
goog.require('goog.events');
goog.require('ghoul.parser.rss');
goog.require('cuerdas.core');
ghoul.common.http.method_key__GT_method_string = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get","get",1683182755),"GET",new cljs.core.Keyword(null,"put","put",1299772570),"PUT",new cljs.core.Keyword(null,"post","post",269697687),"POST",new cljs.core.Keyword(null,"delete","delete",-1768633620),"DELETE"], null);
ghoul.common.http.headers = {"Cache-Control": "no-cache"};
ghoul.common.http.send = (function send(p__19310){
var map__19313 = p__19310;
var map__19313__$1 = ((cljs.core.seq_QMARK_.call(null,map__19313))?cljs.core.apply.call(null,cljs.core.hash_map,map__19313):map__19313);
var response__GT_data = cljs.core.get.call(null,map__19313__$1,new cljs.core.Keyword(null,"response->data","response->data",52433877));
var data = cljs.core.get.call(null,map__19313__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var url = cljs.core.get.call(null,map__19313__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.call(null,map__19313__$1,new cljs.core.Keyword(null,"method","method",55703592));
var c = cljs.core.async.chan.call(null);
var xhr = (new goog.net.XhrIo());
var method__$1 = ghoul.common.http.method_key__GT_method_string.call(null,method);
try{xhr.send(url,method__$1,data,ghoul.common.http.headers);
}catch (e19314){if((e19314 instanceof Error)){
var e_19315 = e19314;
cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"message","message",-406056002),[cljs.core.str(e_19315.message)].join('')], null));
} else {
throw e19314;

}
}
goog.events.listen(xhr,goog.net.EventType.SUCCESS,((function (c,xhr,method__$1,map__19313,map__19313__$1,response__GT_data,data,url,method){
return (function (e){
return cljs.core.async.put_BANG_.call(null,c,(function (){var response = xhr.getResponseText();
var data__$1 = response__GT_data.call(null,response);
return cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"data","data",-232669377),data__$1);
})());
});})(c,xhr,method__$1,map__19313,map__19313__$1,response__GT_data,data,url,method))
);

goog.events.listen(xhr,goog.net.EventType.ERROR,((function (c,xhr,method__$1,map__19313,map__19313__$1,response__GT_data,data,url,method){
return (function (e){
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"message","message",-406056002),[cljs.core.str(xhr.formatMsg_("Sending request")),cljs.core.str(xhr.getResponseXml())].join('')], null));
});})(c,xhr,method__$1,map__19313,map__19313__$1,response__GT_data,data,url,method))
);

return c;
});
ghoul.common.http.get = (function get(url){
return ghoul.common.http.send.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"response->data","response->data",52433877),cljs.core.identity], null));
});
ghoul.common.http.post = (function post(url,data){
return ghoul.common.http.send.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"response->data","response->data",52433877),cljs.core.identity], null));
});
ghoul.common.http.put = (function put(url,data){
return ghoul.common.http.send.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"response->data","response->data",52433877),cljs.core.identity], null));
});
ghoul.common.http.delete$ = (function delete$(url){
return ghoul.common.http.send.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"response->data","response->data",52433877),cljs.core.identity], null));
});
ghoul.common.http.cors_service = "https://cors-anywhere.herokuapp.com/";
ghoul.common.http.get_rss = (function get_rss(url){
var url__$1 = cuerdas.core.replace_first.call(null,cuerdas.core.replace_first.call(null,url,/https:\/\//,ghoul.common.http.cors_service),/http:\/\//,ghoul.common.http.cors_service);
return ghoul.common.http.send.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url__$1,new cljs.core.Keyword(null,"response->data","response->data",52433877),ghoul.parser.rss.parse_document], null));
});
