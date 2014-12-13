// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.worker.feed_web_worker');
goog.require('cljs.core');
ghoul.worker.feed_web_worker.counter = cljs.core.atom.call(null,(0));
ghoul.worker.feed_web_worker.timed_count = (function timed_count(){
cljs.core.swap_BANG_.call(null,ghoul.worker.feed_web_worker.counter,cljs.core.inc);

postMessage([cljs.core.str(cljs.core.deref.call(null,ghoul.worker.feed_web_worker.counter))].join(''));

return setTimeout("ghoul.worker.feed_web_worker.timed_count()",(60000));
});
goog.exportSymbol('ghoul.worker.feed_web_worker.timed_count', ghoul.worker.feed_web_worker.timed_count);
ghoul.worker.feed_web_worker.timed_count.call(null);
