// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.utils');
goog.require('cljs.core');
goog.require('cuerdas.core');
goog.require('cuerdas.core');
ghoul.utils.restore_tags = (function restore_tags(string){
return cuerdas.core.replace.call(null,cuerdas.core.replace.call(null,cuerdas.core.replace.call(null,cuerdas.core.replace.call(null,cuerdas.core.replace.call(null,string,"&gt;",">"),"&lt;","<"),"&quot;","\""),"&apos;","'"),"&amp;","&");
});
ghoul.utils.remove_unallowed_tags = (function remove_unallowed_tags(string){
return cuerdas.core.strip_tags.call(null,cuerdas.core.strip_tags.call(null,string,"script"),"link");
});
