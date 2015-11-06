// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async39743 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39743 = (function (fn_handler,f,meta39744){
this.fn_handler = fn_handler;
this.f = f;
this.meta39744 = meta39744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39745,meta39744__$1){
var self__ = this;
var _39745__$1 = this;
return (new cljs.core.async.t_cljs$core$async39743(self__.fn_handler,self__.f,meta39744__$1));
});

cljs.core.async.t_cljs$core$async39743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39745){
var self__ = this;
var _39745__$1 = this;
return self__.meta39744;
});

cljs.core.async.t_cljs$core$async39743.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async39743.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39743.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async39743.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta39744","meta39744",1345619550,null)], null);
});

cljs.core.async.t_cljs$core$async39743.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39743.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39743";

cljs.core.async.t_cljs$core$async39743.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async39743");
});

cljs.core.async.__GT_t_cljs$core$async39743 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async39743(fn_handler__$1,f__$1,meta39744){
return (new cljs.core.async.t_cljs$core$async39743(fn_handler__$1,f__$1,meta39744));
});

}

return (new cljs.core.async.t_cljs$core$async39743(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args39748 = [];
var len__17402__auto___39751 = arguments.length;
var i__17403__auto___39752 = (0);
while(true){
if((i__17403__auto___39752 < len__17402__auto___39751)){
args39748.push((arguments[i__17403__auto___39752]));

var G__39753 = (i__17403__auto___39752 + (1));
i__17403__auto___39752 = G__39753;
continue;
} else {
}
break;
}

var G__39750 = args39748.length;
switch (G__39750) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39748.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
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

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args39755 = [];
var len__17402__auto___39758 = arguments.length;
var i__17403__auto___39759 = (0);
while(true){
if((i__17403__auto___39759 < len__17402__auto___39758)){
args39755.push((arguments[i__17403__auto___39759]));

var G__39760 = (i__17403__auto___39759 + (1));
i__17403__auto___39759 = G__39760;
continue;
} else {
}
break;
}

var G__39757 = args39755.length;
switch (G__39757) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39755.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_39762 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_39762);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_39762,ret){
return (function (){
return fn1.call(null,val_39762);
});})(val_39762,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args39763 = [];
var len__17402__auto___39766 = arguments.length;
var i__17403__auto___39767 = (0);
while(true){
if((i__17403__auto___39767 < len__17402__auto___39766)){
args39763.push((arguments[i__17403__auto___39767]));

var G__39768 = (i__17403__auto___39767 + (1));
i__17403__auto___39767 = G__39768;
continue;
} else {
}
break;
}

var G__39765 = args39763.length;
switch (G__39765) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39763.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17247__auto___39770 = n;
var x_39771 = (0);
while(true){
if((x_39771 < n__17247__auto___39770)){
(a[x_39771] = (0));

var G__39772 = (x_39771 + (1));
x_39771 = G__39772;
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

var G__39773 = (i + (1));
i = G__39773;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async39777 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39777 = (function (alt_flag,flag,meta39778){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta39778 = meta39778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_39779,meta39778__$1){
var self__ = this;
var _39779__$1 = this;
return (new cljs.core.async.t_cljs$core$async39777(self__.alt_flag,self__.flag,meta39778__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async39777.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_39779){
var self__ = this;
var _39779__$1 = this;
return self__.meta39778;
});})(flag))
;

cljs.core.async.t_cljs$core$async39777.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async39777.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async39777.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39777.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39778","meta39778",828891170,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async39777.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39777.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39777";

cljs.core.async.t_cljs$core$async39777.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async39777");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async39777 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39777(alt_flag__$1,flag__$1,meta39778){
return (new cljs.core.async.t_cljs$core$async39777(alt_flag__$1,flag__$1,meta39778));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async39777(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async39783 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39783 = (function (alt_handler,flag,cb,meta39784){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta39784 = meta39784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39785,meta39784__$1){
var self__ = this;
var _39785__$1 = this;
return (new cljs.core.async.t_cljs$core$async39783(self__.alt_handler,self__.flag,self__.cb,meta39784__$1));
});

cljs.core.async.t_cljs$core$async39783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39785){
var self__ = this;
var _39785__$1 = this;
return self__.meta39784;
});

cljs.core.async.t_cljs$core$async39783.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async39783.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async39783.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async39783.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39784","meta39784",-147110052,null)], null);
});

cljs.core.async.t_cljs$core$async39783.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39783.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39783";

cljs.core.async.t_cljs$core$async39783.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async39783");
});

cljs.core.async.__GT_t_cljs$core$async39783 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39783(alt_handler__$1,flag__$1,cb__$1,meta39784){
return (new cljs.core.async.t_cljs$core$async39783(alt_handler__$1,flag__$1,cb__$1,meta39784));
});

}

return (new cljs.core.async.t_cljs$core$async39783(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
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
return (function (p1__39786_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39786_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39787_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39787_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16344__auto__ = wport;
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return port;
}
})()], null));
} else {
var G__39788 = (i + (1));
i = G__39788;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16344__auto__ = ret;
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16332__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16332__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16332__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
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
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17409__auto__ = [];
var len__17402__auto___39794 = arguments.length;
var i__17403__auto___39795 = (0);
while(true){
if((i__17403__auto___39795 < len__17402__auto___39794)){
args__17409__auto__.push((arguments[i__17403__auto___39795]));

var G__39796 = (i__17403__auto___39795 + (1));
i__17403__auto___39795 = G__39796;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((1) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17410__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39791){
var map__39792 = p__39791;
var map__39792__$1 = ((((!((map__39792 == null)))?((((map__39792.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39792.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39792):map__39792);
var opts = map__39792__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39789){
var G__39790 = cljs.core.first.call(null,seq39789);
var seq39789__$1 = cljs.core.next.call(null,seq39789);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39790,seq39789__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args39797 = [];
var len__17402__auto___39847 = arguments.length;
var i__17403__auto___39848 = (0);
while(true){
if((i__17403__auto___39848 < len__17402__auto___39847)){
args39797.push((arguments[i__17403__auto___39848]));

var G__39849 = (i__17403__auto___39848 + (1));
i__17403__auto___39848 = G__39849;
continue;
} else {
}
break;
}

var G__39799 = args39797.length;
switch (G__39799) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39797.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20183__auto___39851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20183__auto___39851){
return (function (){
var f__20184__auto__ = (function (){var switch__20118__auto__ = ((function (c__20183__auto___39851){
return (function (state_39823){
var state_val_39824 = (state_39823[(1)]);
if((state_val_39824 === (7))){
var inst_39819 = (state_39823[(2)]);
var state_39823__$1 = state_39823;
var statearr_39825_39852 = state_39823__$1;
(statearr_39825_39852[(2)] = inst_39819);

(statearr_39825_39852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39824 === (1))){
var state_39823__$1 = state_39823;
var statearr_39826_39853 = state_39823__$1;
(statearr_39826_39853[(2)] = null);

(statearr_39826_39853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39824 === (4))){
var inst_39802 = (state_39823[(7)]);
var inst_39802__$1 = (state_39823[(2)]);
var inst_39803 = (inst_39802__$1 == null);
var state_39823__$1 = (function (){var statearr_39827 = state_39823;
(statearr_39827[(7)] = inst_39802__$1);

return statearr_39827;
})();
if(cljs.core.truth_(inst_39803)){
var statearr_39828_39854 = state_39823__$1;
(statearr_39828_39854[(1)] = (5));

} else {
var statearr_39829_39855 = state_39823__$1;
(statearr_39829_39855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39824 === (13))){
var state_39823__$1 = state_39823;
var statearr_39830_39856 = state_39823__$1;
(statearr_39830_39856[(2)] = null);

(statearr_39830_39856[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39824 === (6))){
var inst_39802 = (state_39823[(7)]);
var state_39823__$1 = state_39823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39823__$1,(11),to,inst_39802);
} else {
if((state_val_39824 === (3))){
var inst_39821 = (state_39823[(2)]);
var state_39823__$1 = state_39823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39823__$1,inst_39821);
} else {
if((state_val_39824 === (12))){
var state_39823__$1 = state_39823;
var statearr_39831_39857 = state_39823__$1;
(statearr_39831_39857[(2)] = null);

(statearr_39831_39857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39824 === (2))){
var state_39823__$1 = state_39823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39823__$1,(4),from);
} else {
if((state_val_39824 === (11))){
var inst_39812 = (state_39823[(2)]);
var state_39823__$1 = state_39823;
if(cljs.core.truth_(inst_39812)){
var statearr_39832_39858 = state_39823__$1;
(statearr_39832_39858[(1)] = (12));

} else {
var statearr_39833_39859 = state_39823__$1;
(statearr_39833_39859[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39824 === (9))){
var state_39823__$1 = state_39823;
var statearr_39834_39860 = state_39823__$1;
(statearr_39834_39860[(2)] = null);

(statearr_39834_39860[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39824 === (5))){
var state_39823__$1 = state_39823;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39835_39861 = state_39823__$1;
(statearr_39835_39861[(1)] = (8));

} else {
var statearr_39836_39862 = state_39823__$1;
(statearr_39836_39862[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39824 === (14))){
var inst_39817 = (state_39823[(2)]);
var state_39823__$1 = state_39823;
var statearr_39837_39863 = state_39823__$1;
(statearr_39837_39863[(2)] = inst_39817);

(statearr_39837_39863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39824 === (10))){
var inst_39809 = (state_39823[(2)]);
var state_39823__$1 = state_39823;
var statearr_39838_39864 = state_39823__$1;
(statearr_39838_39864[(2)] = inst_39809);

(statearr_39838_39864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39824 === (8))){
var inst_39806 = cljs.core.async.close_BANG_.call(null,to);
var state_39823__$1 = state_39823;
var statearr_39839_39865 = state_39823__$1;
(statearr_39839_39865[(2)] = inst_39806);

(statearr_39839_39865[(1)] = (10));


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
});})(c__20183__auto___39851))
;
return ((function (switch__20118__auto__,c__20183__auto___39851){
return (function() {
var cljs$core$async$state_machine__20119__auto__ = null;
var cljs$core$async$state_machine__20119__auto____0 = (function (){
var statearr_39843 = [null,null,null,null,null,null,null,null];
(statearr_39843[(0)] = cljs$core$async$state_machine__20119__auto__);

(statearr_39843[(1)] = (1));

return statearr_39843;
});
var cljs$core$async$state_machine__20119__auto____1 = (function (state_39823){
while(true){
var ret_value__20120__auto__ = (function (){try{while(true){
var result__20121__auto__ = switch__20118__auto__.call(null,state_39823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20121__auto__;
}
break;
}
}catch (e39844){if((e39844 instanceof Object)){
var ex__20122__auto__ = e39844;
var statearr_39845_39866 = state_39823;
(statearr_39845_39866[(5)] = ex__20122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39867 = state_39823;
state_39823 = G__39867;
continue;
} else {
return ret_value__20120__auto__;
}
break;
}
});
cljs$core$async$state_machine__20119__auto__ = function(state_39823){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20119__auto____1.call(this,state_39823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20119__auto____0;
cljs$core$async$state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20119__auto____1;
return cljs$core$async$state_machine__20119__auto__;
})()
;})(switch__20118__auto__,c__20183__auto___39851))
})();
var state__20185__auto__ = (function (){var statearr_39846 = f__20184__auto__.call(null);
(statearr_39846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20183__auto___39851);

return statearr_39846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20185__auto__);
});})(c__20183__auto___39851))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__40051){
var vec__40052 = p__40051;
var v = cljs.core.nth.call(null,vec__40052,(0),null);
var p = cljs.core.nth.call(null,vec__40052,(1),null);
var job = vec__40052;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20183__auto___40234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20183__auto___40234,res,vec__40052,v,p,job,jobs,results){
return (function (){
var f__20184__auto__ = (function (){var switch__20118__auto__ = ((function (c__20183__auto___40234,res,vec__40052,v,p,job,jobs,results){
return (function (state_40057){
var state_val_40058 = (state_40057[(1)]);
if((state_val_40058 === (1))){
var state_40057__$1 = state_40057;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40057__$1,(2),res,v);
} else {
if((state_val_40058 === (2))){
var inst_40054 = (state_40057[(2)]);
var inst_40055 = cljs.core.async.close_BANG_.call(null,res);
var state_40057__$1 = (function (){var statearr_40059 = state_40057;
(statearr_40059[(7)] = inst_40054);

return statearr_40059;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40057__$1,inst_40055);
} else {
return null;
}
}
});})(c__20183__auto___40234,res,vec__40052,v,p,job,jobs,results))
;
return ((function (switch__20118__auto__,c__20183__auto___40234,res,vec__40052,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20119__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20119__auto____0 = (function (){
var statearr_40063 = [null,null,null,null,null,null,null,null];
(statearr_40063[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20119__auto__);

(statearr_40063[(1)] = (1));

return statearr_40063;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20119__auto____1 = (function (state_40057){
while(true){
var ret_value__20120__auto__ = (function (){try{while(true){
var result__20121__auto__ = switch__20118__auto__.call(null,state_40057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20121__auto__;
}
break;
}
}catch (e40064){if((e40064 instanceof Object)){
var ex__20122__auto__ = e40064;
var statearr_40065_40235 = state_40057;
(statearr_40065_40235[(5)] = ex__20122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40236 = state_40057;
state_40057 = G__40236;
continue;
} else {
return ret_value__20120__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20119__auto__ = function(state_40057){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20119__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20119__auto____1.call(this,state_40057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20119__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20119__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20119__auto__;
})()
;})(switch__20118__auto__,c__20183__auto___40234,res,vec__40052,v,p,job,jobs,results))
})();
var state__20185__auto__ = (function (){var statearr_40066 = f__20184__auto__.call(null);
(statearr_40066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20183__auto___40234);

return statearr_40066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20185__auto__);
});})(c__20183__auto___40234,res,vec__40052,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__40067){
var vec__40068 = p__40067;
var v = cljs.core.nth.call(null,vec__40068,(0),null);
var p = cljs.core.nth.call(null,vec__40068,(1),null);
var job = vec__40068;
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
var n__17247__auto___40237 = n;
var __40238 = (0);
while(true){
if((__40238 < n__17247__auto___40237)){
var G__40069_40239 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__40069_40239) {
case "compute":
var c__20183__auto___40241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40238,c__20183__auto___40241,G__40069_40239,n__17247__auto___40237,jobs,results,process,async){
return (function (){
var f__20184__auto__ = (function (){var switch__20118__auto__ = ((function (__40238,c__20183__auto___40241,G__40069_40239,n__17247__auto___40237,jobs,results,process,async){
return (function (state_40082){
var state_val_40083 = (state_40082[(1)]);
if((state_val_40083 === (1))){
var state_40082__$1 = state_40082;
var statearr_40084_40242 = state_40082__$1;
(statearr_40084_40242[(2)] = null);

(statearr_40084_40242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40083 === (2))){
var state_40082__$1 = state_40082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40082__$1,(4),jobs);
} else {
if((state_val_40083 === (3))){
var inst_40080 = (state_40082[(2)]);
var state_40082__$1 = state_40082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40082__$1,inst_40080);
} else {
if((state_val_40083 === (4))){
var inst_40072 = (state_40082[(2)]);
var inst_40073 = process.call(null,inst_40072);
var state_40082__$1 = state_40082;
if(cljs.core.truth_(inst_40073)){
var statearr_40085_40243 = state_40082__$1;
(statearr_40085_40243[(1)] = (5));

} else {
var statearr_40086_40244 = state_40082__$1;
(statearr_40086_40244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40083 === (5))){
var state_40082__$1 = state_40082;
var statearr_40087_40245 = state_40082__$1;
(statearr_40087_40245[(2)] = null);

(statearr_40087_40245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40083 === (6))){
var state_40082__$1 = state_40082;
var statearr_40088_40246 = state_40082__$1;
(statearr_40088_40246[(2)] = null);

(statearr_40088_40246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40083 === (7))){
var inst_40078 = (state_40082[(2)]);
var state_40082__$1 = state_40082;
var statearr_40089_40247 = state_40082__$1;
(statearr_40089_40247[(2)] = inst_40078);

(statearr_40089_40247[(1)] = (3));


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
});})(__40238,c__20183__auto___40241,G__40069_40239,n__17247__auto___40237,jobs,results,process,async))
;
return ((function (__40238,switch__20118__auto__,c__20183__auto___40241,G__40069_40239,n__17247__auto___40237,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20119__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20119__auto____0 = (function (){
var statearr_40093 = [null,null,null,null,null,null,null];
(statearr_40093[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20119__auto__);

(statearr_40093[(1)] = (1));

return statearr_40093;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20119__auto____1 = (function (state_40082){
while(true){
var ret_value__20120__auto__ = (function (){try{while(true){
var result__20121__auto__ = switch__20118__auto__.call(null,state_40082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20121__auto__;
}
break;
}
}catch (e40094){if((e40094 instanceof Object)){
var ex__20122__auto__ = e40094;
var statearr_40095_40248 = state_40082;
(statearr_40095_40248[(5)] = ex__20122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40249 = state_40082;
state_40082 = G__40249;
continue;
} else {
return ret_value__20120__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20119__auto__ = function(state_40082){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20119__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20119__auto____1.call(this,state_40082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20119__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20119__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20119__auto__;
})()
;})(__40238,switch__20118__auto__,c__20183__auto___40241,G__40069_40239,n__17247__auto___40237,jobs,results,process,async))
})();
var state__20185__auto__ = (function (){var statearr_40096 = f__20184__auto__.call(null);
(statearr_40096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20183__auto___40241);

return statearr_40096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20185__auto__);
});})(__40238,c__20183__auto___40241,G__40069_40239,n__17247__auto___40237,jobs,results,process,async))
);


break;
case "async":
var c__20183__auto___40250 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40238,c__20183__auto___40250,G__40069_40239,n__17247__auto___40237,jobs,results,process,async){
return (function (){
var f__20184__auto__ = (function (){var switch__20118__auto__ = ((function (__40238,c__20183__auto___40250,G__40069_40239,n__17247__auto___40237,jobs,results,process,async){
return (function (state_40109){
var state_val_40110 = (state_40109[(1)]);
if((state_val_40110 === (1))){
var state_40109__$1 = state_40109;
var statearr_40111_40251 = state_40109__$1;
(statearr_40111_40251[(2)] = null);

(statearr_40111_40251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40110 === (2))){
var state_40109__$1 = state_40109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40109__$1,(4),jobs);
} else {
if((state_val_40110 === (3))){
var inst_40107 = (state_40109[(2)]);
var state_40109__$1 = state_40109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40109__$1,inst_40107);
} else {
if((state_val_40110 === (4))){
var inst_40099 = (state_40109[(2)]);
var inst_40100 = async.call(null,inst_40099);
var state_40109__$1 = state_40109;
if(cljs.core.truth_(inst_40100)){
var statearr_40112_40252 = state_40109__$1;
(statearr_40112_40252[(1)] = (5));

} else {
var statearr_40113_40253 = state_40109__$1;
(statearr_40113_40253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40110 === (5))){
var state_40109__$1 = state_40109;
var statearr_40114_40254 = state_40109__$1;
(statearr_40114_40254[(2)] = null);

(statearr_40114_40254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40110 === (6))){
var state_40109__$1 = state_40109;
var statearr_40115_40255 = state_40109__$1;
(statearr_40115_40255[(2)] = null);

(statearr_40115_40255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40110 === (7))){
var inst_40105 = (state_40109[(2)]);
var state_40109__$1 = state_40109;
var statearr_40116_40256 = state_40109__$1;
(statearr_40116_40256[(2)] = inst_40105);

(statearr_40116_40256[(1)] = (3));


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
});})(__40238,c__20183__auto___40250,G__40069_40239,n__17247__auto___40237,jobs,results,process,async))
;
return ((function (__40238,switch__20118__auto__,c__20183__auto___40250,G__40069_40239,n__17247__auto___40237,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20119__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20119__auto____0 = (function (){
var statearr_40120 = [null,null,null,null,null,null,null];
(statearr_40120[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20119__auto__);

(statearr_40120[(1)] = (1));

return statearr_40120;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20119__auto____1 = (function (state_40109){
while(true){
var ret_value__20120__auto__ = (function (){try{while(true){
var result__20121__auto__ = switch__20118__auto__.call(null,state_40109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20121__auto__;
}
break;
}
}catch (e40121){if((e40121 instanceof Object)){
var ex__20122__auto__ = e40121;
var statearr_40122_40257 = state_40109;
(statearr_40122_40257[(5)] = ex__20122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40258 = state_40109;
state_40109 = G__40258;
continue;
} else {
return ret_value__20120__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20119__auto__ = function(state_40109){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20119__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20119__auto____1.call(this,state_40109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20119__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20119__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20119__auto__;
})()
;})(__40238,switch__20118__auto__,c__20183__auto___40250,G__40069_40239,n__17247__auto___40237,jobs,results,process,async))
})();
var state__20185__auto__ = (function (){var statearr_40123 = f__20184__auto__.call(null);
(statearr_40123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20183__auto___40250);

return statearr_40123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20185__auto__);
});})(__40238,c__20183__auto___40250,G__40069_40239,n__17247__auto___40237,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__40259 = (__40238 + (1));
__40238 = G__40259;
continue;
} else {
}
break;
}

var c__20183__auto___40260 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20183__auto___40260,jobs,results,process,async){
return (function (){
var f__20184__auto__ = (function (){var switch__20118__auto__ = ((function (c__20183__auto___40260,jobs,results,process,async){
return (function (state_40145){
var state_val_40146 = (state_40145[(1)]);
if((state_val_40146 === (1))){
var state_40145__$1 = state_40145;
var statearr_40147_40261 = state_40145__$1;
(statearr_40147_40261[(2)] = null);

(statearr_40147_40261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40146 === (2))){
var state_40145__$1 = state_40145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40145__$1,(4),from);
} else {
if((state_val_40146 === (3))){
var inst_40143 = (state_40145[(2)]);
var state_40145__$1 = state_40145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40145__$1,inst_40143);
} else {
if((state_val_40146 === (4))){
var inst_40126 = (state_40145[(7)]);
var inst_40126__$1 = (state_40145[(2)]);
var inst_40127 = (inst_40126__$1 == null);
var state_40145__$1 = (function (){var statearr_40148 = state_40145;
(statearr_40148[(7)] = inst_40126__$1);

return statearr_40148;
})();
if(cljs.core.truth_(inst_40127)){
var statearr_40149_40262 = state_40145__$1;
(statearr_40149_40262[(1)] = (5));

} else {
var statearr_40150_40263 = state_40145__$1;
(statearr_40150_40263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40146 === (5))){
var inst_40129 = cljs.core.async.close_BANG_.call(null,jobs);
var state_40145__$1 = state_40145;
var statearr_40151_40264 = state_40145__$1;
(statearr_40151_40264[(2)] = inst_40129);

(statearr_40151_40264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40146 === (6))){
var inst_40131 = (state_40145[(8)]);
var inst_40126 = (state_40145[(7)]);
var inst_40131__$1 = cljs.core.async.chan.call(null,(1));
var inst_40132 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40133 = [inst_40126,inst_40131__$1];
var inst_40134 = (new cljs.core.PersistentVector(null,2,(5),inst_40132,inst_40133,null));
var state_40145__$1 = (function (){var statearr_40152 = state_40145;
(statearr_40152[(8)] = inst_40131__$1);

return statearr_40152;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40145__$1,(8),jobs,inst_40134);
} else {
if((state_val_40146 === (7))){
var inst_40141 = (state_40145[(2)]);
var state_40145__$1 = state_40145;
var statearr_40153_40265 = state_40145__$1;
(statearr_40153_40265[(2)] = inst_40141);

(statearr_40153_40265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40146 === (8))){
var inst_40131 = (state_40145[(8)]);
var inst_40136 = (state_40145[(2)]);
var state_40145__$1 = (function (){var statearr_40154 = state_40145;
(statearr_40154[(9)] = inst_40136);

return statearr_40154;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40145__$1,(9),results,inst_40131);
} else {
if((state_val_40146 === (9))){
var inst_40138 = (state_40145[(2)]);
var state_40145__$1 = (function (){var statearr_40155 = state_40145;
(statearr_40155[(10)] = inst_40138);

return statearr_40155;
})();
var statearr_40156_40266 = state_40145__$1;
(statearr_40156_40266[(2)] = null);

(statearr_40156_40266[(1)] = (2));


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
});})(c__20183__auto___40260,jobs,results,process,async))
;
return ((function (switch__20118__auto__,c__20183__auto___40260,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20119__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20119__auto____0 = (function (){
var statearr_40160 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40160[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20119__auto__);

(statearr_40160[(1)] = (1));

return statearr_40160;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20119__auto____1 = (function (state_40145){
while(true){
var ret_value__20120__auto__ = (function (){try{while(true){
var result__20121__auto__ = switch__20118__auto__.call(null,state_40145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20121__auto__;
}
break;
}
}catch (e40161){if((e40161 instanceof Object)){
var ex__20122__auto__ = e40161;
var statearr_40162_40267 = state_40145;
(statearr_40162_40267[(5)] = ex__20122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40268 = state_40145;
state_40145 = G__40268;
continue;
} else {
return ret_value__20120__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20119__auto__ = function(state_40145){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20119__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20119__auto____1.call(this,state_40145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20119__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20119__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20119__auto__;
})()
;})(switch__20118__auto__,c__20183__auto___40260,jobs,results,process,async))
})();
var state__20185__auto__ = (function (){var statearr_40163 = f__20184__auto__.call(null);
(statearr_40163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20183__auto___40260);

return statearr_40163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20185__auto__);
});})(c__20183__auto___40260,jobs,results,process,async))
);


var c__20183__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20183__auto__,jobs,results,process,async){
return (function (){
var f__20184__auto__ = (function (){var switch__20118__auto__ = ((function (c__20183__auto__,jobs,results,process,async){
return (function (state_40201){
var state_val_40202 = (state_40201[(1)]);
if((state_val_40202 === (7))){
var inst_40197 = (state_40201[(2)]);
var state_40201__$1 = state_40201;
var statearr_40203_40269 = state_40201__$1;
(statearr_40203_40269[(2)] = inst_40197);

(statearr_40203_40269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40202 === (20))){
var state_40201__$1 = state_40201;
var statearr_40204_40270 = state_40201__$1;
(statearr_40204_40270[(2)] = null);

(statearr_40204_40270[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40202 === (1))){
var state_40201__$1 = state_40201;
var statearr_40205_40271 = state_40201__$1;
(statearr_40205_40271[(2)] = null);

(statearr_40205_40271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40202 === (4))){
var inst_40166 = (state_40201[(7)]);
var inst_40166__$1 = (state_40201[(2)]);
var inst_40167 = (inst_40166__$1 == null);
var state_40201__$1 = (function (){var statearr_40206 = state_40201;
(statearr_40206[(7)] = inst_40166__$1);

return statearr_40206;
})();
if(cljs.core.truth_(inst_40167)){
var statearr_40207_40272 = state_40201__$1;
(statearr_40207_40272[(1)] = (5));

} else {
var statearr_40208_40273 = state_40201__$1;
(statearr_40208_40273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40202 === (15))){
var inst_40179 = (state_40201[(8)]);
var state_40201__$1 = state_40201;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40201__$1,(18),to,inst_40179);
} else {
if((state_val_40202 === (21))){
var inst_40192 = (state_40201[(2)]);
var state_40201__$1 = state_40201;
var statearr_40209_40274 = state_40201__$1;
(statearr_40209_40274[(2)] = inst_40192);

(statearr_40209_40274[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40202 === (13))){
var inst_40194 = (state_40201[(2)]);
var state_40201__$1 = (function (){var statearr_40210 = state_40201;
(statearr_40210[(9)] = inst_40194);

return statearr_40210;
})();
var statearr_40211_40275 = state_40201__$1;
(statearr_40211_40275[(2)] = null);

(statearr_40211_40275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40202 === (6))){
var inst_40166 = (state_40201[(7)]);
var state_40201__$1 = state_40201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40201__$1,(11),inst_40166);
} else {
if((state_val_40202 === (17))){
var inst_40187 = (state_40201[(2)]);
var state_40201__$1 = state_40201;
if(cljs.core.truth_(inst_40187)){
var statearr_40212_40276 = state_40201__$1;
(statearr_40212_40276[(1)] = (19));

} else {
var statearr_40213_40277 = state_40201__$1;
(statearr_40213_40277[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40202 === (3))){
var inst_40199 = (state_40201[(2)]);
var state_40201__$1 = state_40201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40201__$1,inst_40199);
} else {
if((state_val_40202 === (12))){
var inst_40176 = (state_40201[(10)]);
var state_40201__$1 = state_40201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40201__$1,(14),inst_40176);
} else {
if((state_val_40202 === (2))){
var state_40201__$1 = state_40201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40201__$1,(4),results);
} else {
if((state_val_40202 === (19))){
var state_40201__$1 = state_40201;
var statearr_40214_40278 = state_40201__$1;
(statearr_40214_40278[(2)] = null);

(statearr_40214_40278[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40202 === (11))){
var inst_40176 = (state_40201[(2)]);
var state_40201__$1 = (function (){var statearr_40215 = state_40201;
(statearr_40215[(10)] = inst_40176);

return statearr_40215;
})();
var statearr_40216_40279 = state_40201__$1;
(statearr_40216_40279[(2)] = null);

(statearr_40216_40279[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40202 === (9))){
var state_40201__$1 = state_40201;
var statearr_40217_40280 = state_40201__$1;
(statearr_40217_40280[(2)] = null);

(statearr_40217_40280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40202 === (5))){
var state_40201__$1 = state_40201;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40218_40281 = state_40201__$1;
(statearr_40218_40281[(1)] = (8));

} else {
var statearr_40219_40282 = state_40201__$1;
(statearr_40219_40282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40202 === (14))){
var inst_40181 = (state_40201[(11)]);
var inst_40179 = (state_40201[(8)]);
var inst_40179__$1 = (state_40201[(2)]);
var inst_40180 = (inst_40179__$1 == null);
var inst_40181__$1 = cljs.core.not.call(null,inst_40180);
var state_40201__$1 = (function (){var statearr_40220 = state_40201;
(statearr_40220[(11)] = inst_40181__$1);

(statearr_40220[(8)] = inst_40179__$1);

return statearr_40220;
})();
if(inst_40181__$1){
var statearr_40221_40283 = state_40201__$1;
(statearr_40221_40283[(1)] = (15));

} else {
var statearr_40222_40284 = state_40201__$1;
(statearr_40222_40284[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40202 === (16))){
var inst_40181 = (state_40201[(11)]);
var state_40201__$1 = state_40201;
var statearr_40223_40285 = state_40201__$1;
(statearr_40223_40285[(2)] = inst_40181);

(statearr_40223_40285[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40202 === (10))){
var inst_40173 = (state_40201[(2)]);
var state_40201__$1 = state_40201;
var statearr_40224_40286 = state_40201__$1;
(statearr_40224_40286[(2)] = inst_40173);

(statearr_40224_40286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40202 === (18))){
var inst_40184 = (state_40201[(2)]);
var state_40201__$1 = state_40201;
var statearr_40225_40287 = state_40201__$1;
(statearr_40225_40287[(2)] = inst_40184);

(statearr_40225_40287[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40202 === (8))){
var inst_40170 = cljs.core.async.close_BANG_.call(null,to);
var state_40201__$1 = state_40201;
var statearr_40226_40288 = state_40201__$1;
(statearr_40226_40288[(2)] = inst_40170);

(statearr_40226_40288[(1)] = (10));


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
});})(c__20183__auto__,jobs,results,process,async))
;
return ((function (switch__20118__auto__,c__20183__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20119__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20119__auto____0 = (function (){
var statearr_40230 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40230[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20119__auto__);

(statearr_40230[(1)] = (1));

return statearr_40230;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20119__auto____1 = (function (state_40201){
while(true){
var ret_value__20120__auto__ = (function (){try{while(true){
var result__20121__auto__ = switch__20118__auto__.call(null,state_40201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20121__auto__;
}
break;
}
}catch (e40231){if((e40231 instanceof Object)){
var ex__20122__auto__ = e40231;
var statearr_40232_40289 = state_40201;
(statearr_40232_40289[(5)] = ex__20122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40290 = state_40201;
state_40201 = G__40290;
continue;
} else {
return ret_value__20120__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20119__auto__ = function(state_40201){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20119__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20119__auto____1.call(this,state_40201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20119__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20119__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20119__auto__;
})()
;})(switch__20118__auto__,c__20183__auto__,jobs,results,process,async))
})();
var state__20185__auto__ = (function (){var statearr_40233 = f__20184__auto__.call(null);
(statearr_40233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20183__auto__);

return statearr_40233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20185__auto__);
});})(c__20183__auto__,jobs,results,process,async))
);

return c__20183__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args40291 = [];
var len__17402__auto___40294 = arguments.length;
var i__17403__auto___40295 = (0);
while(true){
if((i__17403__auto___40295 < len__17402__auto___40294)){
args40291.push((arguments[i__17403__auto___40295]));

var G__40296 = (i__17403__auto___40295 + (1));
i__17403__auto___40295 = G__40296;
continue;
} else {
}
break;
}

var G__40293 = args40291.length;
switch (G__40293) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40291.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args40298 = [];
var len__17402__auto___40301 = arguments.length;
var i__17403__auto___40302 = (0);
while(true){
if((i__17403__auto___40302 < len__17402__auto___40301)){
args40298.push((arguments[i__17403__auto___40302]));

var G__40303 = (i__17403__auto___40302 + (1));
i__17403__auto___40302 = G__40303;
continue;
} else {
}
break;
}

var G__40300 = args40298.length;
switch (G__40300) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40298.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args40305 = [];
var len__17402__auto___40358 = arguments.length;
var i__17403__auto___40359 = (0);
while(true){
if((i__17403__auto___40359 < len__17402__auto___40358)){
args40305.push((arguments[i__17403__auto___40359]));

var G__40360 = (i__17403__auto___40359 + (1));
i__17403__auto___40359 = G__40360;
continue;
} else {
}
break;
}

var G__40307 = args40305.length;
switch (G__40307) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40305.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20183__auto___40362 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20183__auto___40362,tc,fc){
return (function (){
var f__20184__auto__ = (function (){var switch__20118__auto__ = ((function (c__20183__auto___40362,tc,fc){
return (function (state_40333){
var state_val_40334 = (state_40333[(1)]);
if((state_val_40334 === (7))){
var inst_40329 = (state_40333[(2)]);
var state_40333__$1 = state_40333;
var statearr_40335_40363 = state_40333__$1;
(statearr_40335_40363[(2)] = inst_40329);

(statearr_40335_40363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40334 === (1))){
var state_40333__$1 = state_40333;
var statearr_40336_40364 = state_40333__$1;
(statearr_40336_40364[(2)] = null);

(statearr_40336_40364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40334 === (4))){
var inst_40310 = (state_40333[(7)]);
var inst_40310__$1 = (state_40333[(2)]);
var inst_40311 = (inst_40310__$1 == null);
var state_40333__$1 = (function (){var statearr_40337 = state_40333;
(statearr_40337[(7)] = inst_40310__$1);

return statearr_40337;
})();
if(cljs.core.truth_(inst_40311)){
var statearr_40338_40365 = state_40333__$1;
(statearr_40338_40365[(1)] = (5));

} else {
var statearr_40339_40366 = state_40333__$1;
(statearr_40339_40366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40334 === (13))){
var state_40333__$1 = state_40333;
var statearr_40340_40367 = state_40333__$1;
(statearr_40340_40367[(2)] = null);

(statearr_40340_40367[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40334 === (6))){
var inst_40310 = (state_40333[(7)]);
var inst_40316 = p.call(null,inst_40310);
var state_40333__$1 = state_40333;
if(cljs.core.truth_(inst_40316)){
var statearr_40341_40368 = state_40333__$1;
(statearr_40341_40368[(1)] = (9));

} else {
var statearr_40342_40369 = state_40333__$1;
(statearr_40342_40369[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40334 === (3))){
var inst_40331 = (state_40333[(2)]);
var state_40333__$1 = state_40333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40333__$1,inst_40331);
} else {
if((state_val_40334 === (12))){
var state_40333__$1 = state_40333;
var statearr_40343_40370 = state_40333__$1;
(statearr_40343_40370[(2)] = null);

(statearr_40343_40370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40334 === (2))){
var state_40333__$1 = state_40333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40333__$1,(4),ch);
} else {
if((state_val_40334 === (11))){
var inst_40310 = (state_40333[(7)]);
var inst_40320 = (state_40333[(2)]);
var state_40333__$1 = state_40333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40333__$1,(8),inst_40320,inst_40310);
} else {
if((state_val_40334 === (9))){
var state_40333__$1 = state_40333;
var statearr_40344_40371 = state_40333__$1;
(statearr_40344_40371[(2)] = tc);

(statearr_40344_40371[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40334 === (5))){
var inst_40313 = cljs.core.async.close_BANG_.call(null,tc);
var inst_40314 = cljs.core.async.close_BANG_.call(null,fc);
var state_40333__$1 = (function (){var statearr_40345 = state_40333;
(statearr_40345[(8)] = inst_40313);

return statearr_40345;
})();
var statearr_40346_40372 = state_40333__$1;
(statearr_40346_40372[(2)] = inst_40314);

(statearr_40346_40372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40334 === (14))){
var inst_40327 = (state_40333[(2)]);
var state_40333__$1 = state_40333;
var statearr_40347_40373 = state_40333__$1;
(statearr_40347_40373[(2)] = inst_40327);

(statearr_40347_40373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40334 === (10))){
var state_40333__$1 = state_40333;
var statearr_40348_40374 = state_40333__$1;
(statearr_40348_40374[(2)] = fc);

(statearr_40348_40374[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40334 === (8))){
var inst_40322 = (state_40333[(2)]);
var state_40333__$1 = state_40333;
if(cljs.core.truth_(inst_40322)){
var statearr_40349_40375 = state_40333__$1;
(statearr_40349_40375[(1)] = (12));

} else {
var statearr_40350_40376 = state_40333__$1;
(statearr_40350_40376[(1)] = (13));

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
});})(c__20183__auto___40362,tc,fc))
;
return ((function (switch__20118__auto__,c__20183__auto___40362,tc,fc){
return (function() {
var cljs$core$async$state_machine__20119__auto__ = null;
var cljs$core$async$state_machine__20119__auto____0 = (function (){
var statearr_40354 = [null,null,null,null,null,null,null,null,null];
(statearr_40354[(0)] = cljs$core$async$state_machine__20119__auto__);

(statearr_40354[(1)] = (1));

return statearr_40354;
});
var cljs$core$async$state_machine__20119__auto____1 = (function (state_40333){
while(true){
var ret_value__20120__auto__ = (function (){try{while(true){
var result__20121__auto__ = switch__20118__auto__.call(null,state_40333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20121__auto__;
}
break;
}
}catch (e40355){if((e40355 instanceof Object)){
var ex__20122__auto__ = e40355;
var statearr_40356_40377 = state_40333;
(statearr_40356_40377[(5)] = ex__20122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40378 = state_40333;
state_40333 = G__40378;
continue;
} else {
return ret_value__20120__auto__;
}
break;
}
});
cljs$core$async$state_machine__20119__auto__ = function(state_40333){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20119__auto____1.call(this,state_40333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20119__auto____0;
cljs$core$async$state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20119__auto____1;
return cljs$core$async$state_machine__20119__auto__;
})()
;})(switch__20118__auto__,c__20183__auto___40362,tc,fc))
})();
var state__20185__auto__ = (function (){var statearr_40357 = f__20184__auto__.call(null);
(statearr_40357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20183__auto___40362);

return statearr_40357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20185__auto__);
});})(c__20183__auto___40362,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20183__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20183__auto__){
return (function (){
var f__20184__auto__ = (function (){var switch__20118__auto__ = ((function (c__20183__auto__){
return (function (state_40425){
var state_val_40426 = (state_40425[(1)]);
if((state_val_40426 === (1))){
var inst_40411 = init;
var state_40425__$1 = (function (){var statearr_40427 = state_40425;
(statearr_40427[(7)] = inst_40411);

return statearr_40427;
})();
var statearr_40428_40443 = state_40425__$1;
(statearr_40428_40443[(2)] = null);

(statearr_40428_40443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40426 === (2))){
var state_40425__$1 = state_40425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40425__$1,(4),ch);
} else {
if((state_val_40426 === (3))){
var inst_40423 = (state_40425[(2)]);
var state_40425__$1 = state_40425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40425__$1,inst_40423);
} else {
if((state_val_40426 === (4))){
var inst_40414 = (state_40425[(8)]);
var inst_40414__$1 = (state_40425[(2)]);
var inst_40415 = (inst_40414__$1 == null);
var state_40425__$1 = (function (){var statearr_40429 = state_40425;
(statearr_40429[(8)] = inst_40414__$1);

return statearr_40429;
})();
if(cljs.core.truth_(inst_40415)){
var statearr_40430_40444 = state_40425__$1;
(statearr_40430_40444[(1)] = (5));

} else {
var statearr_40431_40445 = state_40425__$1;
(statearr_40431_40445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40426 === (5))){
var inst_40411 = (state_40425[(7)]);
var state_40425__$1 = state_40425;
var statearr_40432_40446 = state_40425__$1;
(statearr_40432_40446[(2)] = inst_40411);

(statearr_40432_40446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40426 === (6))){
var inst_40414 = (state_40425[(8)]);
var inst_40411 = (state_40425[(7)]);
var inst_40418 = f.call(null,inst_40411,inst_40414);
var inst_40411__$1 = inst_40418;
var state_40425__$1 = (function (){var statearr_40433 = state_40425;
(statearr_40433[(7)] = inst_40411__$1);

return statearr_40433;
})();
var statearr_40434_40447 = state_40425__$1;
(statearr_40434_40447[(2)] = null);

(statearr_40434_40447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40426 === (7))){
var inst_40421 = (state_40425[(2)]);
var state_40425__$1 = state_40425;
var statearr_40435_40448 = state_40425__$1;
(statearr_40435_40448[(2)] = inst_40421);

(statearr_40435_40448[(1)] = (3));


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
});})(c__20183__auto__))
;
return ((function (switch__20118__auto__,c__20183__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20119__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20119__auto____0 = (function (){
var statearr_40439 = [null,null,null,null,null,null,null,null,null];
(statearr_40439[(0)] = cljs$core$async$reduce_$_state_machine__20119__auto__);

(statearr_40439[(1)] = (1));

return statearr_40439;
});
var cljs$core$async$reduce_$_state_machine__20119__auto____1 = (function (state_40425){
while(true){
var ret_value__20120__auto__ = (function (){try{while(true){
var result__20121__auto__ = switch__20118__auto__.call(null,state_40425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20121__auto__;
}
break;
}
}catch (e40440){if((e40440 instanceof Object)){
var ex__20122__auto__ = e40440;
var statearr_40441_40449 = state_40425;
(statearr_40441_40449[(5)] = ex__20122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40450 = state_40425;
state_40425 = G__40450;
continue;
} else {
return ret_value__20120__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20119__auto__ = function(state_40425){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20119__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20119__auto____1.call(this,state_40425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20119__auto____0;
cljs$core$async$reduce_$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20119__auto____1;
return cljs$core$async$reduce_$_state_machine__20119__auto__;
})()
;})(switch__20118__auto__,c__20183__auto__))
})();
var state__20185__auto__ = (function (){var statearr_40442 = f__20184__auto__.call(null);
(statearr_40442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20183__auto__);

return statearr_40442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20185__auto__);
});})(c__20183__auto__))
);

return c__20183__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args40451 = [];
var len__17402__auto___40503 = arguments.length;
var i__17403__auto___40504 = (0);
while(true){
if((i__17403__auto___40504 < len__17402__auto___40503)){
args40451.push((arguments[i__17403__auto___40504]));

var G__40505 = (i__17403__auto___40504 + (1));
i__17403__auto___40504 = G__40505;
continue;
} else {
}
break;
}

var G__40453 = args40451.length;
switch (G__40453) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40451.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20183__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20183__auto__){
return (function (){
var f__20184__auto__ = (function (){var switch__20118__auto__ = ((function (c__20183__auto__){
return (function (state_40478){
var state_val_40479 = (state_40478[(1)]);
if((state_val_40479 === (7))){
var inst_40460 = (state_40478[(2)]);
var state_40478__$1 = state_40478;
var statearr_40480_40507 = state_40478__$1;
(statearr_40480_40507[(2)] = inst_40460);

(statearr_40480_40507[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40479 === (1))){
var inst_40454 = cljs.core.seq.call(null,coll);
var inst_40455 = inst_40454;
var state_40478__$1 = (function (){var statearr_40481 = state_40478;
(statearr_40481[(7)] = inst_40455);

return statearr_40481;
})();
var statearr_40482_40508 = state_40478__$1;
(statearr_40482_40508[(2)] = null);

(statearr_40482_40508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40479 === (4))){
var inst_40455 = (state_40478[(7)]);
var inst_40458 = cljs.core.first.call(null,inst_40455);
var state_40478__$1 = state_40478;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40478__$1,(7),ch,inst_40458);
} else {
if((state_val_40479 === (13))){
var inst_40472 = (state_40478[(2)]);
var state_40478__$1 = state_40478;
var statearr_40483_40509 = state_40478__$1;
(statearr_40483_40509[(2)] = inst_40472);

(statearr_40483_40509[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40479 === (6))){
var inst_40463 = (state_40478[(2)]);
var state_40478__$1 = state_40478;
if(cljs.core.truth_(inst_40463)){
var statearr_40484_40510 = state_40478__$1;
(statearr_40484_40510[(1)] = (8));

} else {
var statearr_40485_40511 = state_40478__$1;
(statearr_40485_40511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40479 === (3))){
var inst_40476 = (state_40478[(2)]);
var state_40478__$1 = state_40478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40478__$1,inst_40476);
} else {
if((state_val_40479 === (12))){
var state_40478__$1 = state_40478;
var statearr_40486_40512 = state_40478__$1;
(statearr_40486_40512[(2)] = null);

(statearr_40486_40512[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40479 === (2))){
var inst_40455 = (state_40478[(7)]);
var state_40478__$1 = state_40478;
if(cljs.core.truth_(inst_40455)){
var statearr_40487_40513 = state_40478__$1;
(statearr_40487_40513[(1)] = (4));

} else {
var statearr_40488_40514 = state_40478__$1;
(statearr_40488_40514[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40479 === (11))){
var inst_40469 = cljs.core.async.close_BANG_.call(null,ch);
var state_40478__$1 = state_40478;
var statearr_40489_40515 = state_40478__$1;
(statearr_40489_40515[(2)] = inst_40469);

(statearr_40489_40515[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40479 === (9))){
var state_40478__$1 = state_40478;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40490_40516 = state_40478__$1;
(statearr_40490_40516[(1)] = (11));

} else {
var statearr_40491_40517 = state_40478__$1;
(statearr_40491_40517[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40479 === (5))){
var inst_40455 = (state_40478[(7)]);
var state_40478__$1 = state_40478;
var statearr_40492_40518 = state_40478__$1;
(statearr_40492_40518[(2)] = inst_40455);

(statearr_40492_40518[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40479 === (10))){
var inst_40474 = (state_40478[(2)]);
var state_40478__$1 = state_40478;
var statearr_40493_40519 = state_40478__$1;
(statearr_40493_40519[(2)] = inst_40474);

(statearr_40493_40519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40479 === (8))){
var inst_40455 = (state_40478[(7)]);
var inst_40465 = cljs.core.next.call(null,inst_40455);
var inst_40455__$1 = inst_40465;
var state_40478__$1 = (function (){var statearr_40494 = state_40478;
(statearr_40494[(7)] = inst_40455__$1);

return statearr_40494;
})();
var statearr_40495_40520 = state_40478__$1;
(statearr_40495_40520[(2)] = null);

(statearr_40495_40520[(1)] = (2));


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
});})(c__20183__auto__))
;
return ((function (switch__20118__auto__,c__20183__auto__){
return (function() {
var cljs$core$async$state_machine__20119__auto__ = null;
var cljs$core$async$state_machine__20119__auto____0 = (function (){
var statearr_40499 = [null,null,null,null,null,null,null,null];
(statearr_40499[(0)] = cljs$core$async$state_machine__20119__auto__);

(statearr_40499[(1)] = (1));

return statearr_40499;
});
var cljs$core$async$state_machine__20119__auto____1 = (function (state_40478){
while(true){
var ret_value__20120__auto__ = (function (){try{while(true){
var result__20121__auto__ = switch__20118__auto__.call(null,state_40478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20121__auto__;
}
break;
}
}catch (e40500){if((e40500 instanceof Object)){
var ex__20122__auto__ = e40500;
var statearr_40501_40521 = state_40478;
(statearr_40501_40521[(5)] = ex__20122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40522 = state_40478;
state_40478 = G__40522;
continue;
} else {
return ret_value__20120__auto__;
}
break;
}
});
cljs$core$async$state_machine__20119__auto__ = function(state_40478){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20119__auto____1.call(this,state_40478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20119__auto____0;
cljs$core$async$state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20119__auto____1;
return cljs$core$async$state_machine__20119__auto__;
})()
;})(switch__20118__auto__,c__20183__auto__))
})();
var state__20185__auto__ = (function (){var statearr_40502 = f__20184__auto__.call(null);
(statearr_40502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20183__auto__);

return statearr_40502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20185__auto__);
});})(c__20183__auto__))
);

return c__20183__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16999__auto__ = (((_ == null))?null:_);
var m__17000__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,_);
} else {
var m__17000__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16999__auto__ = (((m == null))?null:m);
var m__17000__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17000__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16999__auto__ = (((m == null))?null:m);
var m__17000__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,m,ch);
} else {
var m__17000__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16999__auto__ = (((m == null))?null:m);
var m__17000__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,m);
} else {
var m__17000__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async40744 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40744 = (function (mult,ch,cs,meta40745){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta40745 = meta40745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_40746,meta40745__$1){
var self__ = this;
var _40746__$1 = this;
return (new cljs.core.async.t_cljs$core$async40744(self__.mult,self__.ch,self__.cs,meta40745__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async40744.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_40746){
var self__ = this;
var _40746__$1 = this;
return self__.meta40745;
});})(cs))
;

cljs.core.async.t_cljs$core$async40744.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async40744.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async40744.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async40744.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40744.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40744.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40744.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta40745","meta40745",-1024179552,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async40744.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40744.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40744";

cljs.core.async.t_cljs$core$async40744.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async40744");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async40744 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async40744(mult__$1,ch__$1,cs__$1,meta40745){
return (new cljs.core.async.t_cljs$core$async40744(mult__$1,ch__$1,cs__$1,meta40745));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async40744(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__20183__auto___40965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20183__auto___40965,cs,m,dchan,dctr,done){
return (function (){
var f__20184__auto__ = (function (){var switch__20118__auto__ = ((function (c__20183__auto___40965,cs,m,dchan,dctr,done){
return (function (state_40877){
var state_val_40878 = (state_40877[(1)]);
if((state_val_40878 === (7))){
var inst_40873 = (state_40877[(2)]);
var state_40877__$1 = state_40877;
var statearr_40879_40966 = state_40877__$1;
(statearr_40879_40966[(2)] = inst_40873);

(statearr_40879_40966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (20))){
var inst_40778 = (state_40877[(7)]);
var inst_40788 = cljs.core.first.call(null,inst_40778);
var inst_40789 = cljs.core.nth.call(null,inst_40788,(0),null);
var inst_40790 = cljs.core.nth.call(null,inst_40788,(1),null);
var state_40877__$1 = (function (){var statearr_40880 = state_40877;
(statearr_40880[(8)] = inst_40789);

return statearr_40880;
})();
if(cljs.core.truth_(inst_40790)){
var statearr_40881_40967 = state_40877__$1;
(statearr_40881_40967[(1)] = (22));

} else {
var statearr_40882_40968 = state_40877__$1;
(statearr_40882_40968[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (27))){
var inst_40749 = (state_40877[(9)]);
var inst_40820 = (state_40877[(10)]);
var inst_40818 = (state_40877[(11)]);
var inst_40825 = (state_40877[(12)]);
var inst_40825__$1 = cljs.core._nth.call(null,inst_40818,inst_40820);
var inst_40826 = cljs.core.async.put_BANG_.call(null,inst_40825__$1,inst_40749,done);
var state_40877__$1 = (function (){var statearr_40883 = state_40877;
(statearr_40883[(12)] = inst_40825__$1);

return statearr_40883;
})();
if(cljs.core.truth_(inst_40826)){
var statearr_40884_40969 = state_40877__$1;
(statearr_40884_40969[(1)] = (30));

} else {
var statearr_40885_40970 = state_40877__$1;
(statearr_40885_40970[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (1))){
var state_40877__$1 = state_40877;
var statearr_40886_40971 = state_40877__$1;
(statearr_40886_40971[(2)] = null);

(statearr_40886_40971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (24))){
var inst_40778 = (state_40877[(7)]);
var inst_40795 = (state_40877[(2)]);
var inst_40796 = cljs.core.next.call(null,inst_40778);
var inst_40758 = inst_40796;
var inst_40759 = null;
var inst_40760 = (0);
var inst_40761 = (0);
var state_40877__$1 = (function (){var statearr_40887 = state_40877;
(statearr_40887[(13)] = inst_40760);

(statearr_40887[(14)] = inst_40759);

(statearr_40887[(15)] = inst_40795);

(statearr_40887[(16)] = inst_40761);

(statearr_40887[(17)] = inst_40758);

return statearr_40887;
})();
var statearr_40888_40972 = state_40877__$1;
(statearr_40888_40972[(2)] = null);

(statearr_40888_40972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (39))){
var state_40877__$1 = state_40877;
var statearr_40892_40973 = state_40877__$1;
(statearr_40892_40973[(2)] = null);

(statearr_40892_40973[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (4))){
var inst_40749 = (state_40877[(9)]);
var inst_40749__$1 = (state_40877[(2)]);
var inst_40750 = (inst_40749__$1 == null);
var state_40877__$1 = (function (){var statearr_40893 = state_40877;
(statearr_40893[(9)] = inst_40749__$1);

return statearr_40893;
})();
if(cljs.core.truth_(inst_40750)){
var statearr_40894_40974 = state_40877__$1;
(statearr_40894_40974[(1)] = (5));

} else {
var statearr_40895_40975 = state_40877__$1;
(statearr_40895_40975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (15))){
var inst_40760 = (state_40877[(13)]);
var inst_40759 = (state_40877[(14)]);
var inst_40761 = (state_40877[(16)]);
var inst_40758 = (state_40877[(17)]);
var inst_40774 = (state_40877[(2)]);
var inst_40775 = (inst_40761 + (1));
var tmp40889 = inst_40760;
var tmp40890 = inst_40759;
var tmp40891 = inst_40758;
var inst_40758__$1 = tmp40891;
var inst_40759__$1 = tmp40890;
var inst_40760__$1 = tmp40889;
var inst_40761__$1 = inst_40775;
var state_40877__$1 = (function (){var statearr_40896 = state_40877;
(statearr_40896[(18)] = inst_40774);

(statearr_40896[(13)] = inst_40760__$1);

(statearr_40896[(14)] = inst_40759__$1);

(statearr_40896[(16)] = inst_40761__$1);

(statearr_40896[(17)] = inst_40758__$1);

return statearr_40896;
})();
var statearr_40897_40976 = state_40877__$1;
(statearr_40897_40976[(2)] = null);

(statearr_40897_40976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (21))){
var inst_40799 = (state_40877[(2)]);
var state_40877__$1 = state_40877;
var statearr_40901_40977 = state_40877__$1;
(statearr_40901_40977[(2)] = inst_40799);

(statearr_40901_40977[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (31))){
var inst_40825 = (state_40877[(12)]);
var inst_40829 = done.call(null,null);
var inst_40830 = cljs.core.async.untap_STAR_.call(null,m,inst_40825);
var state_40877__$1 = (function (){var statearr_40902 = state_40877;
(statearr_40902[(19)] = inst_40829);

return statearr_40902;
})();
var statearr_40903_40978 = state_40877__$1;
(statearr_40903_40978[(2)] = inst_40830);

(statearr_40903_40978[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (32))){
var inst_40820 = (state_40877[(10)]);
var inst_40817 = (state_40877[(20)]);
var inst_40819 = (state_40877[(21)]);
var inst_40818 = (state_40877[(11)]);
var inst_40832 = (state_40877[(2)]);
var inst_40833 = (inst_40820 + (1));
var tmp40898 = inst_40817;
var tmp40899 = inst_40819;
var tmp40900 = inst_40818;
var inst_40817__$1 = tmp40898;
var inst_40818__$1 = tmp40900;
var inst_40819__$1 = tmp40899;
var inst_40820__$1 = inst_40833;
var state_40877__$1 = (function (){var statearr_40904 = state_40877;
(statearr_40904[(10)] = inst_40820__$1);

(statearr_40904[(20)] = inst_40817__$1);

(statearr_40904[(21)] = inst_40819__$1);

(statearr_40904[(11)] = inst_40818__$1);

(statearr_40904[(22)] = inst_40832);

return statearr_40904;
})();
var statearr_40905_40979 = state_40877__$1;
(statearr_40905_40979[(2)] = null);

(statearr_40905_40979[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (40))){
var inst_40845 = (state_40877[(23)]);
var inst_40849 = done.call(null,null);
var inst_40850 = cljs.core.async.untap_STAR_.call(null,m,inst_40845);
var state_40877__$1 = (function (){var statearr_40906 = state_40877;
(statearr_40906[(24)] = inst_40849);

return statearr_40906;
})();
var statearr_40907_40980 = state_40877__$1;
(statearr_40907_40980[(2)] = inst_40850);

(statearr_40907_40980[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (33))){
var inst_40836 = (state_40877[(25)]);
var inst_40838 = cljs.core.chunked_seq_QMARK_.call(null,inst_40836);
var state_40877__$1 = state_40877;
if(inst_40838){
var statearr_40908_40981 = state_40877__$1;
(statearr_40908_40981[(1)] = (36));

} else {
var statearr_40909_40982 = state_40877__$1;
(statearr_40909_40982[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (13))){
var inst_40768 = (state_40877[(26)]);
var inst_40771 = cljs.core.async.close_BANG_.call(null,inst_40768);
var state_40877__$1 = state_40877;
var statearr_40910_40983 = state_40877__$1;
(statearr_40910_40983[(2)] = inst_40771);

(statearr_40910_40983[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (22))){
var inst_40789 = (state_40877[(8)]);
var inst_40792 = cljs.core.async.close_BANG_.call(null,inst_40789);
var state_40877__$1 = state_40877;
var statearr_40911_40984 = state_40877__$1;
(statearr_40911_40984[(2)] = inst_40792);

(statearr_40911_40984[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (36))){
var inst_40836 = (state_40877[(25)]);
var inst_40840 = cljs.core.chunk_first.call(null,inst_40836);
var inst_40841 = cljs.core.chunk_rest.call(null,inst_40836);
var inst_40842 = cljs.core.count.call(null,inst_40840);
var inst_40817 = inst_40841;
var inst_40818 = inst_40840;
var inst_40819 = inst_40842;
var inst_40820 = (0);
var state_40877__$1 = (function (){var statearr_40912 = state_40877;
(statearr_40912[(10)] = inst_40820);

(statearr_40912[(20)] = inst_40817);

(statearr_40912[(21)] = inst_40819);

(statearr_40912[(11)] = inst_40818);

return statearr_40912;
})();
var statearr_40913_40985 = state_40877__$1;
(statearr_40913_40985[(2)] = null);

(statearr_40913_40985[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (41))){
var inst_40836 = (state_40877[(25)]);
var inst_40852 = (state_40877[(2)]);
var inst_40853 = cljs.core.next.call(null,inst_40836);
var inst_40817 = inst_40853;
var inst_40818 = null;
var inst_40819 = (0);
var inst_40820 = (0);
var state_40877__$1 = (function (){var statearr_40914 = state_40877;
(statearr_40914[(10)] = inst_40820);

(statearr_40914[(27)] = inst_40852);

(statearr_40914[(20)] = inst_40817);

(statearr_40914[(21)] = inst_40819);

(statearr_40914[(11)] = inst_40818);

return statearr_40914;
})();
var statearr_40915_40986 = state_40877__$1;
(statearr_40915_40986[(2)] = null);

(statearr_40915_40986[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (43))){
var state_40877__$1 = state_40877;
var statearr_40916_40987 = state_40877__$1;
(statearr_40916_40987[(2)] = null);

(statearr_40916_40987[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (29))){
var inst_40861 = (state_40877[(2)]);
var state_40877__$1 = state_40877;
var statearr_40917_40988 = state_40877__$1;
(statearr_40917_40988[(2)] = inst_40861);

(statearr_40917_40988[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (44))){
var inst_40870 = (state_40877[(2)]);
var state_40877__$1 = (function (){var statearr_40918 = state_40877;
(statearr_40918[(28)] = inst_40870);

return statearr_40918;
})();
var statearr_40919_40989 = state_40877__$1;
(statearr_40919_40989[(2)] = null);

(statearr_40919_40989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (6))){
var inst_40809 = (state_40877[(29)]);
var inst_40808 = cljs.core.deref.call(null,cs);
var inst_40809__$1 = cljs.core.keys.call(null,inst_40808);
var inst_40810 = cljs.core.count.call(null,inst_40809__$1);
var inst_40811 = cljs.core.reset_BANG_.call(null,dctr,inst_40810);
var inst_40816 = cljs.core.seq.call(null,inst_40809__$1);
var inst_40817 = inst_40816;
var inst_40818 = null;
var inst_40819 = (0);
var inst_40820 = (0);
var state_40877__$1 = (function (){var statearr_40920 = state_40877;
(statearr_40920[(30)] = inst_40811);

(statearr_40920[(10)] = inst_40820);

(statearr_40920[(20)] = inst_40817);

(statearr_40920[(21)] = inst_40819);

(statearr_40920[(29)] = inst_40809__$1);

(statearr_40920[(11)] = inst_40818);

return statearr_40920;
})();
var statearr_40921_40990 = state_40877__$1;
(statearr_40921_40990[(2)] = null);

(statearr_40921_40990[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (28))){
var inst_40817 = (state_40877[(20)]);
var inst_40836 = (state_40877[(25)]);
var inst_40836__$1 = cljs.core.seq.call(null,inst_40817);
var state_40877__$1 = (function (){var statearr_40922 = state_40877;
(statearr_40922[(25)] = inst_40836__$1);

return statearr_40922;
})();
if(inst_40836__$1){
var statearr_40923_40991 = state_40877__$1;
(statearr_40923_40991[(1)] = (33));

} else {
var statearr_40924_40992 = state_40877__$1;
(statearr_40924_40992[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (25))){
var inst_40820 = (state_40877[(10)]);
var inst_40819 = (state_40877[(21)]);
var inst_40822 = (inst_40820 < inst_40819);
var inst_40823 = inst_40822;
var state_40877__$1 = state_40877;
if(cljs.core.truth_(inst_40823)){
var statearr_40925_40993 = state_40877__$1;
(statearr_40925_40993[(1)] = (27));

} else {
var statearr_40926_40994 = state_40877__$1;
(statearr_40926_40994[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (34))){
var state_40877__$1 = state_40877;
var statearr_40927_40995 = state_40877__$1;
(statearr_40927_40995[(2)] = null);

(statearr_40927_40995[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (17))){
var state_40877__$1 = state_40877;
var statearr_40928_40996 = state_40877__$1;
(statearr_40928_40996[(2)] = null);

(statearr_40928_40996[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (3))){
var inst_40875 = (state_40877[(2)]);
var state_40877__$1 = state_40877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40877__$1,inst_40875);
} else {
if((state_val_40878 === (12))){
var inst_40804 = (state_40877[(2)]);
var state_40877__$1 = state_40877;
var statearr_40929_40997 = state_40877__$1;
(statearr_40929_40997[(2)] = inst_40804);

(statearr_40929_40997[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (2))){
var state_40877__$1 = state_40877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40877__$1,(4),ch);
} else {
if((state_val_40878 === (23))){
var state_40877__$1 = state_40877;
var statearr_40930_40998 = state_40877__$1;
(statearr_40930_40998[(2)] = null);

(statearr_40930_40998[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (35))){
var inst_40859 = (state_40877[(2)]);
var state_40877__$1 = state_40877;
var statearr_40931_40999 = state_40877__$1;
(statearr_40931_40999[(2)] = inst_40859);

(statearr_40931_40999[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (19))){
var inst_40778 = (state_40877[(7)]);
var inst_40782 = cljs.core.chunk_first.call(null,inst_40778);
var inst_40783 = cljs.core.chunk_rest.call(null,inst_40778);
var inst_40784 = cljs.core.count.call(null,inst_40782);
var inst_40758 = inst_40783;
var inst_40759 = inst_40782;
var inst_40760 = inst_40784;
var inst_40761 = (0);
var state_40877__$1 = (function (){var statearr_40932 = state_40877;
(statearr_40932[(13)] = inst_40760);

(statearr_40932[(14)] = inst_40759);

(statearr_40932[(16)] = inst_40761);

(statearr_40932[(17)] = inst_40758);

return statearr_40932;
})();
var statearr_40933_41000 = state_40877__$1;
(statearr_40933_41000[(2)] = null);

(statearr_40933_41000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (11))){
var inst_40778 = (state_40877[(7)]);
var inst_40758 = (state_40877[(17)]);
var inst_40778__$1 = cljs.core.seq.call(null,inst_40758);
var state_40877__$1 = (function (){var statearr_40934 = state_40877;
(statearr_40934[(7)] = inst_40778__$1);

return statearr_40934;
})();
if(inst_40778__$1){
var statearr_40935_41001 = state_40877__$1;
(statearr_40935_41001[(1)] = (16));

} else {
var statearr_40936_41002 = state_40877__$1;
(statearr_40936_41002[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (9))){
var inst_40806 = (state_40877[(2)]);
var state_40877__$1 = state_40877;
var statearr_40937_41003 = state_40877__$1;
(statearr_40937_41003[(2)] = inst_40806);

(statearr_40937_41003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (5))){
var inst_40756 = cljs.core.deref.call(null,cs);
var inst_40757 = cljs.core.seq.call(null,inst_40756);
var inst_40758 = inst_40757;
var inst_40759 = null;
var inst_40760 = (0);
var inst_40761 = (0);
var state_40877__$1 = (function (){var statearr_40938 = state_40877;
(statearr_40938[(13)] = inst_40760);

(statearr_40938[(14)] = inst_40759);

(statearr_40938[(16)] = inst_40761);

(statearr_40938[(17)] = inst_40758);

return statearr_40938;
})();
var statearr_40939_41004 = state_40877__$1;
(statearr_40939_41004[(2)] = null);

(statearr_40939_41004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (14))){
var state_40877__$1 = state_40877;
var statearr_40940_41005 = state_40877__$1;
(statearr_40940_41005[(2)] = null);

(statearr_40940_41005[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (45))){
var inst_40867 = (state_40877[(2)]);
var state_40877__$1 = state_40877;
var statearr_40941_41006 = state_40877__$1;
(statearr_40941_41006[(2)] = inst_40867);

(statearr_40941_41006[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (26))){
var inst_40809 = (state_40877[(29)]);
var inst_40863 = (state_40877[(2)]);
var inst_40864 = cljs.core.seq.call(null,inst_40809);
var state_40877__$1 = (function (){var statearr_40942 = state_40877;
(statearr_40942[(31)] = inst_40863);

return statearr_40942;
})();
if(inst_40864){
var statearr_40943_41007 = state_40877__$1;
(statearr_40943_41007[(1)] = (42));

} else {
var statearr_40944_41008 = state_40877__$1;
(statearr_40944_41008[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (16))){
var inst_40778 = (state_40877[(7)]);
var inst_40780 = cljs.core.chunked_seq_QMARK_.call(null,inst_40778);
var state_40877__$1 = state_40877;
if(inst_40780){
var statearr_40945_41009 = state_40877__$1;
(statearr_40945_41009[(1)] = (19));

} else {
var statearr_40946_41010 = state_40877__$1;
(statearr_40946_41010[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (38))){
var inst_40856 = (state_40877[(2)]);
var state_40877__$1 = state_40877;
var statearr_40947_41011 = state_40877__$1;
(statearr_40947_41011[(2)] = inst_40856);

(statearr_40947_41011[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (30))){
var state_40877__$1 = state_40877;
var statearr_40948_41012 = state_40877__$1;
(statearr_40948_41012[(2)] = null);

(statearr_40948_41012[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (10))){
var inst_40759 = (state_40877[(14)]);
var inst_40761 = (state_40877[(16)]);
var inst_40767 = cljs.core._nth.call(null,inst_40759,inst_40761);
var inst_40768 = cljs.core.nth.call(null,inst_40767,(0),null);
var inst_40769 = cljs.core.nth.call(null,inst_40767,(1),null);
var state_40877__$1 = (function (){var statearr_40949 = state_40877;
(statearr_40949[(26)] = inst_40768);

return statearr_40949;
})();
if(cljs.core.truth_(inst_40769)){
var statearr_40950_41013 = state_40877__$1;
(statearr_40950_41013[(1)] = (13));

} else {
var statearr_40951_41014 = state_40877__$1;
(statearr_40951_41014[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (18))){
var inst_40802 = (state_40877[(2)]);
var state_40877__$1 = state_40877;
var statearr_40952_41015 = state_40877__$1;
(statearr_40952_41015[(2)] = inst_40802);

(statearr_40952_41015[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (42))){
var state_40877__$1 = state_40877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40877__$1,(45),dchan);
} else {
if((state_val_40878 === (37))){
var inst_40749 = (state_40877[(9)]);
var inst_40836 = (state_40877[(25)]);
var inst_40845 = (state_40877[(23)]);
var inst_40845__$1 = cljs.core.first.call(null,inst_40836);
var inst_40846 = cljs.core.async.put_BANG_.call(null,inst_40845__$1,inst_40749,done);
var state_40877__$1 = (function (){var statearr_40953 = state_40877;
(statearr_40953[(23)] = inst_40845__$1);

return statearr_40953;
})();
if(cljs.core.truth_(inst_40846)){
var statearr_40954_41016 = state_40877__$1;
(statearr_40954_41016[(1)] = (39));

} else {
var statearr_40955_41017 = state_40877__$1;
(statearr_40955_41017[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40878 === (8))){
var inst_40760 = (state_40877[(13)]);
var inst_40761 = (state_40877[(16)]);
var inst_40763 = (inst_40761 < inst_40760);
var inst_40764 = inst_40763;
var state_40877__$1 = state_40877;
if(cljs.core.truth_(inst_40764)){
var statearr_40956_41018 = state_40877__$1;
(statearr_40956_41018[(1)] = (10));

} else {
var statearr_40957_41019 = state_40877__$1;
(statearr_40957_41019[(1)] = (11));

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
});})(c__20183__auto___40965,cs,m,dchan,dctr,done))
;
return ((function (switch__20118__auto__,c__20183__auto___40965,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20119__auto__ = null;
var cljs$core$async$mult_$_state_machine__20119__auto____0 = (function (){
var statearr_40961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40961[(0)] = cljs$core$async$mult_$_state_machine__20119__auto__);

(statearr_40961[(1)] = (1));

return statearr_40961;
});
var cljs$core$async$mult_$_state_machine__20119__auto____1 = (function (state_40877){
while(true){
var ret_value__20120__auto__ = (function (){try{while(true){
var result__20121__auto__ = switch__20118__auto__.call(null,state_40877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20121__auto__;
}
break;
}
}catch (e40962){if((e40962 instanceof Object)){
var ex__20122__auto__ = e40962;
var statearr_40963_41020 = state_40877;
(statearr_40963_41020[(5)] = ex__20122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41021 = state_40877;
state_40877 = G__41021;
continue;
} else {
return ret_value__20120__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20119__auto__ = function(state_40877){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20119__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20119__auto____1.call(this,state_40877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20119__auto____0;
cljs$core$async$mult_$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20119__auto____1;
return cljs$core$async$mult_$_state_machine__20119__auto__;
})()
;})(switch__20118__auto__,c__20183__auto___40965,cs,m,dchan,dctr,done))
})();
var state__20185__auto__ = (function (){var statearr_40964 = f__20184__auto__.call(null);
(statearr_40964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20183__auto___40965);

return statearr_40964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20185__auto__);
});})(c__20183__auto___40965,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args41022 = [];
var len__17402__auto___41025 = arguments.length;
var i__17403__auto___41026 = (0);
while(true){
if((i__17403__auto___41026 < len__17402__auto___41025)){
args41022.push((arguments[i__17403__auto___41026]));

var G__41027 = (i__17403__auto___41026 + (1));
i__17403__auto___41026 = G__41027;
continue;
} else {
}
break;
}

var G__41024 = args41022.length;
switch (G__41024) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41022.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16999__auto__ = (((m == null))?null:m);
var m__17000__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,m,ch);
} else {
var m__17000__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16999__auto__ = (((m == null))?null:m);
var m__17000__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,m,ch);
} else {
var m__17000__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16999__auto__ = (((m == null))?null:m);
var m__17000__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,m);
} else {
var m__17000__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16999__auto__ = (((m == null))?null:m);
var m__17000__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,m,state_map);
} else {
var m__17000__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16999__auto__ = (((m == null))?null:m);
var m__17000__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,m,mode);
} else {
var m__17000__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17409__auto__ = [];
var len__17402__auto___41039 = arguments.length;
var i__17403__auto___41040 = (0);
while(true){
if((i__17403__auto___41040 < len__17402__auto___41039)){
args__17409__auto__.push((arguments[i__17403__auto___41040]));

var G__41041 = (i__17403__auto___41040 + (1));
i__17403__auto___41040 = G__41041;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((3) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17410__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__41033){
var map__41034 = p__41033;
var map__41034__$1 = ((((!((map__41034 == null)))?((((map__41034.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41034.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41034):map__41034);
var opts = map__41034__$1;
var statearr_41036_41042 = state;
(statearr_41036_41042[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__41034,map__41034__$1,opts){
return (function (val){
var statearr_41037_41043 = state;
(statearr_41037_41043[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__41034,map__41034__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_41038_41044 = state;
(statearr_41038_41044[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq41029){
var G__41030 = cljs.core.first.call(null,seq41029);
var seq41029__$1 = cljs.core.next.call(null,seq41029);
var G__41031 = cljs.core.first.call(null,seq41029__$1);
var seq41029__$2 = cljs.core.next.call(null,seq41029__$1);
var G__41032 = cljs.core.first.call(null,seq41029__$2);
var seq41029__$3 = cljs.core.next.call(null,seq41029__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41030,G__41031,G__41032,seq41029__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
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
if(typeof cljs.core.async.t_cljs$core$async41208 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41208 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41209){
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
this.meta41209 = meta41209;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41210,meta41209__$1){
var self__ = this;
var _41210__$1 = this;
return (new cljs.core.async.t_cljs$core$async41208(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta41209__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41208.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41210){
var self__ = this;
var _41210__$1 = this;
return self__.meta41209;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41208.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async41208.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41208.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async41208.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41208.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41208.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41208.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41208.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async41208.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta41209","meta41209",444098497,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41208.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41208.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41208";

cljs.core.async.t_cljs$core$async41208.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async41208");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async41208 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async41208(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41209){
return (new cljs.core.async.t_cljs$core$async41208(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41209));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async41208(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20183__auto___41371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20183__auto___41371,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20184__auto__ = (function (){var switch__20118__auto__ = ((function (c__20183__auto___41371,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_41308){
var state_val_41309 = (state_41308[(1)]);
if((state_val_41309 === (7))){
var inst_41226 = (state_41308[(2)]);
var state_41308__$1 = state_41308;
var statearr_41310_41372 = state_41308__$1;
(statearr_41310_41372[(2)] = inst_41226);

(statearr_41310_41372[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41309 === (20))){
var inst_41238 = (state_41308[(7)]);
var state_41308__$1 = state_41308;
var statearr_41311_41373 = state_41308__$1;
(statearr_41311_41373[(2)] = inst_41238);

(statearr_41311_41373[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41309 === (27))){
var state_41308__$1 = state_41308;
var statearr_41312_41374 = state_41308__$1;
(statearr_41312_41374[(2)] = null);

(statearr_41312_41374[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41309 === (1))){
var inst_41214 = (state_41308[(8)]);
var inst_41214__$1 = calc_state.call(null);
var inst_41216 = (inst_41214__$1 == null);
var inst_41217 = cljs.core.not.call(null,inst_41216);
var state_41308__$1 = (function (){var statearr_41313 = state_41308;
(statearr_41313[(8)] = inst_41214__$1);

return statearr_41313;
})();
if(inst_41217){
var statearr_41314_41375 = state_41308__$1;
(statearr_41314_41375[(1)] = (2));

} else {
var statearr_41315_41376 = state_41308__$1;
(statearr_41315_41376[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41309 === (24))){
var inst_41261 = (state_41308[(9)]);
var inst_41282 = (state_41308[(10)]);
var inst_41268 = (state_41308[(11)]);
var inst_41282__$1 = inst_41261.call(null,inst_41268);
var state_41308__$1 = (function (){var statearr_41316 = state_41308;
(statearr_41316[(10)] = inst_41282__$1);

return statearr_41316;
})();
if(cljs.core.truth_(inst_41282__$1)){
var statearr_41317_41377 = state_41308__$1;
(statearr_41317_41377[(1)] = (29));

} else {
var statearr_41318_41378 = state_41308__$1;
(statearr_41318_41378[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41309 === (4))){
var inst_41229 = (state_41308[(2)]);
var state_41308__$1 = state_41308;
if(cljs.core.truth_(inst_41229)){
var statearr_41319_41379 = state_41308__$1;
(statearr_41319_41379[(1)] = (8));

} else {
var statearr_41320_41380 = state_41308__$1;
(statearr_41320_41380[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41309 === (15))){
var inst_41255 = (state_41308[(2)]);
var state_41308__$1 = state_41308;
if(cljs.core.truth_(inst_41255)){
var statearr_41321_41381 = state_41308__$1;
(statearr_41321_41381[(1)] = (19));

} else {
var statearr_41322_41382 = state_41308__$1;
(statearr_41322_41382[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41309 === (21))){
var inst_41260 = (state_41308[(12)]);
var inst_41260__$1 = (state_41308[(2)]);
var inst_41261 = cljs.core.get.call(null,inst_41260__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41262 = cljs.core.get.call(null,inst_41260__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41263 = cljs.core.get.call(null,inst_41260__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_41308__$1 = (function (){var statearr_41323 = state_41308;
(statearr_41323[(12)] = inst_41260__$1);

(statearr_41323[(9)] = inst_41261);

(statearr_41323[(13)] = inst_41262);

return statearr_41323;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_41308__$1,(22),inst_41263);
} else {
if((state_val_41309 === (31))){
var inst_41290 = (state_41308[(2)]);
var state_41308__$1 = state_41308;
if(cljs.core.truth_(inst_41290)){
var statearr_41324_41383 = state_41308__$1;
(statearr_41324_41383[(1)] = (32));

} else {
var statearr_41325_41384 = state_41308__$1;
(statearr_41325_41384[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41309 === (32))){
var inst_41267 = (state_41308[(14)]);
var state_41308__$1 = state_41308;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41308__$1,(35),out,inst_41267);
} else {
if((state_val_41309 === (33))){
var inst_41260 = (state_41308[(12)]);
var inst_41238 = inst_41260;
var state_41308__$1 = (function (){var statearr_41326 = state_41308;
(statearr_41326[(7)] = inst_41238);

return statearr_41326;
})();
var statearr_41327_41385 = state_41308__$1;
(statearr_41327_41385[(2)] = null);

(statearr_41327_41385[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41309 === (13))){
var inst_41238 = (state_41308[(7)]);
var inst_41245 = inst_41238.cljs$lang$protocol_mask$partition0$;
var inst_41246 = (inst_41245 & (64));
var inst_41247 = inst_41238.cljs$core$ISeq$;
var inst_41248 = (inst_41246) || (inst_41247);
var state_41308__$1 = state_41308;
if(cljs.core.truth_(inst_41248)){
var statearr_41328_41386 = state_41308__$1;
(statearr_41328_41386[(1)] = (16));

} else {
var statearr_41329_41387 = state_41308__$1;
(statearr_41329_41387[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41309 === (22))){
var inst_41267 = (state_41308[(14)]);
var inst_41268 = (state_41308[(11)]);
var inst_41266 = (state_41308[(2)]);
var inst_41267__$1 = cljs.core.nth.call(null,inst_41266,(0),null);
var inst_41268__$1 = cljs.core.nth.call(null,inst_41266,(1),null);
var inst_41269 = (inst_41267__$1 == null);
var inst_41270 = cljs.core._EQ_.call(null,inst_41268__$1,change);
var inst_41271 = (inst_41269) || (inst_41270);
var state_41308__$1 = (function (){var statearr_41330 = state_41308;
(statearr_41330[(14)] = inst_41267__$1);

(statearr_41330[(11)] = inst_41268__$1);

return statearr_41330;
})();
if(cljs.core.truth_(inst_41271)){
var statearr_41331_41388 = state_41308__$1;
(statearr_41331_41388[(1)] = (23));

} else {
var statearr_41332_41389 = state_41308__$1;
(statearr_41332_41389[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41309 === (36))){
var inst_41260 = (state_41308[(12)]);
var inst_41238 = inst_41260;
var state_41308__$1 = (function (){var statearr_41333 = state_41308;
(statearr_41333[(7)] = inst_41238);

return statearr_41333;
})();
var statearr_41334_41390 = state_41308__$1;
(statearr_41334_41390[(2)] = null);

(statearr_41334_41390[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41309 === (29))){
var inst_41282 = (state_41308[(10)]);
var state_41308__$1 = state_41308;
var statearr_41335_41391 = state_41308__$1;
(statearr_41335_41391[(2)] = inst_41282);

(statearr_41335_41391[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41309 === (6))){
var state_41308__$1 = state_41308;
var statearr_41336_41392 = state_41308__$1;
(statearr_41336_41392[(2)] = false);

(statearr_41336_41392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41309 === (28))){
var inst_41278 = (state_41308[(2)]);
var inst_41279 = calc_state.call(null);
var inst_41238 = inst_41279;
var state_41308__$1 = (function (){var statearr_41337 = state_41308;
(statearr_41337[(15)] = inst_41278);

(statearr_41337[(7)] = inst_41238);

return statearr_41337;
})();
var statearr_41338_41393 = state_41308__$1;
(statearr_41338_41393[(2)] = null);

(statearr_41338_41393[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41309 === (25))){
var inst_41304 = (state_41308[(2)]);
var state_41308__$1 = state_41308;
var statearr_41339_41394 = state_41308__$1;
(statearr_41339_41394[(2)] = inst_41304);

(statearr_41339_41394[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41309 === (34))){
var inst_41302 = (state_41308[(2)]);
var state_41308__$1 = state_41308;
var statearr_41340_41395 = state_41308__$1;
(statearr_41340_41395[(2)] = inst_41302);

(statearr_41340_41395[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41309 === (17))){
var state_41308__$1 = state_41308;
var statearr_41341_41396 = state_41308__$1;
(statearr_41341_41396[(2)] = false);

(statearr_41341_41396[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41309 === (3))){
var state_41308__$1 = state_41308;
var statearr_41342_41397 = state_41308__$1;
(statearr_41342_41397[(2)] = false);

(statearr_41342_41397[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41309 === (12))){
var inst_41306 = (state_41308[(2)]);
var state_41308__$1 = state_41308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41308__$1,inst_41306);
} else {
if((state_val_41309 === (2))){
var inst_41214 = (state_41308[(8)]);
var inst_41219 = inst_41214.cljs$lang$protocol_mask$partition0$;
var inst_41220 = (inst_41219 & (64));
var inst_41221 = inst_41214.cljs$core$ISeq$;
var inst_41222 = (inst_41220) || (inst_41221);
var state_41308__$1 = state_41308;
if(cljs.core.truth_(inst_41222)){
var statearr_41343_41398 = state_41308__$1;
(statearr_41343_41398[(1)] = (5));

} else {
var statearr_41344_41399 = state_41308__$1;
(statearr_41344_41399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41309 === (23))){
var inst_41267 = (state_41308[(14)]);
var inst_41273 = (inst_41267 == null);
var state_41308__$1 = state_41308;
if(cljs.core.truth_(inst_41273)){
var statearr_41345_41400 = state_41308__$1;
(statearr_41345_41400[(1)] = (26));

} else {
var statearr_41346_41401 = state_41308__$1;
(statearr_41346_41401[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41309 === (35))){
var inst_41293 = (state_41308[(2)]);
var state_41308__$1 = state_41308;
if(cljs.core.truth_(inst_41293)){
var statearr_41347_41402 = state_41308__$1;
(statearr_41347_41402[(1)] = (36));

} else {
var statearr_41348_41403 = state_41308__$1;
(statearr_41348_41403[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41309 === (19))){
var inst_41238 = (state_41308[(7)]);
var inst_41257 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41238);
var state_41308__$1 = state_41308;
var statearr_41349_41404 = state_41308__$1;
(statearr_41349_41404[(2)] = inst_41257);

(statearr_41349_41404[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41309 === (11))){
var inst_41238 = (state_41308[(7)]);
var inst_41242 = (inst_41238 == null);
var inst_41243 = cljs.core.not.call(null,inst_41242);
var state_41308__$1 = state_41308;
if(inst_41243){
var statearr_41350_41405 = state_41308__$1;
(statearr_41350_41405[(1)] = (13));

} else {
var statearr_41351_41406 = state_41308__$1;
(statearr_41351_41406[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41309 === (9))){
var inst_41214 = (state_41308[(8)]);
var state_41308__$1 = state_41308;
var statearr_41352_41407 = state_41308__$1;
(statearr_41352_41407[(2)] = inst_41214);

(statearr_41352_41407[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41309 === (5))){
var state_41308__$1 = state_41308;
var statearr_41353_41408 = state_41308__$1;
(statearr_41353_41408[(2)] = true);

(statearr_41353_41408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41309 === (14))){
var state_41308__$1 = state_41308;
var statearr_41354_41409 = state_41308__$1;
(statearr_41354_41409[(2)] = false);

(statearr_41354_41409[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41309 === (26))){
var inst_41268 = (state_41308[(11)]);
var inst_41275 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_41268);
var state_41308__$1 = state_41308;
var statearr_41355_41410 = state_41308__$1;
(statearr_41355_41410[(2)] = inst_41275);

(statearr_41355_41410[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41309 === (16))){
var state_41308__$1 = state_41308;
var statearr_41356_41411 = state_41308__$1;
(statearr_41356_41411[(2)] = true);

(statearr_41356_41411[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41309 === (38))){
var inst_41298 = (state_41308[(2)]);
var state_41308__$1 = state_41308;
var statearr_41357_41412 = state_41308__$1;
(statearr_41357_41412[(2)] = inst_41298);

(statearr_41357_41412[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41309 === (30))){
var inst_41261 = (state_41308[(9)]);
var inst_41262 = (state_41308[(13)]);
var inst_41268 = (state_41308[(11)]);
var inst_41285 = cljs.core.empty_QMARK_.call(null,inst_41261);
var inst_41286 = inst_41262.call(null,inst_41268);
var inst_41287 = cljs.core.not.call(null,inst_41286);
var inst_41288 = (inst_41285) && (inst_41287);
var state_41308__$1 = state_41308;
var statearr_41358_41413 = state_41308__$1;
(statearr_41358_41413[(2)] = inst_41288);

(statearr_41358_41413[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41309 === (10))){
var inst_41214 = (state_41308[(8)]);
var inst_41234 = (state_41308[(2)]);
var inst_41235 = cljs.core.get.call(null,inst_41234,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41236 = cljs.core.get.call(null,inst_41234,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41237 = cljs.core.get.call(null,inst_41234,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_41238 = inst_41214;
var state_41308__$1 = (function (){var statearr_41359 = state_41308;
(statearr_41359[(16)] = inst_41236);

(statearr_41359[(17)] = inst_41237);

(statearr_41359[(18)] = inst_41235);

(statearr_41359[(7)] = inst_41238);

return statearr_41359;
})();
var statearr_41360_41414 = state_41308__$1;
(statearr_41360_41414[(2)] = null);

(statearr_41360_41414[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41309 === (18))){
var inst_41252 = (state_41308[(2)]);
var state_41308__$1 = state_41308;
var statearr_41361_41415 = state_41308__$1;
(statearr_41361_41415[(2)] = inst_41252);

(statearr_41361_41415[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41309 === (37))){
var state_41308__$1 = state_41308;
var statearr_41362_41416 = state_41308__$1;
(statearr_41362_41416[(2)] = null);

(statearr_41362_41416[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41309 === (8))){
var inst_41214 = (state_41308[(8)]);
var inst_41231 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41214);
var state_41308__$1 = state_41308;
var statearr_41363_41417 = state_41308__$1;
(statearr_41363_41417[(2)] = inst_41231);

(statearr_41363_41417[(1)] = (10));


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
});})(c__20183__auto___41371,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20118__auto__,c__20183__auto___41371,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20119__auto__ = null;
var cljs$core$async$mix_$_state_machine__20119__auto____0 = (function (){
var statearr_41367 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41367[(0)] = cljs$core$async$mix_$_state_machine__20119__auto__);

(statearr_41367[(1)] = (1));

return statearr_41367;
});
var cljs$core$async$mix_$_state_machine__20119__auto____1 = (function (state_41308){
while(true){
var ret_value__20120__auto__ = (function (){try{while(true){
var result__20121__auto__ = switch__20118__auto__.call(null,state_41308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20121__auto__;
}
break;
}
}catch (e41368){if((e41368 instanceof Object)){
var ex__20122__auto__ = e41368;
var statearr_41369_41418 = state_41308;
(statearr_41369_41418[(5)] = ex__20122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41419 = state_41308;
state_41308 = G__41419;
continue;
} else {
return ret_value__20120__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20119__auto__ = function(state_41308){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20119__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20119__auto____1.call(this,state_41308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20119__auto____0;
cljs$core$async$mix_$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20119__auto____1;
return cljs$core$async$mix_$_state_machine__20119__auto__;
})()
;})(switch__20118__auto__,c__20183__auto___41371,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20185__auto__ = (function (){var statearr_41370 = f__20184__auto__.call(null);
(statearr_41370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20183__auto___41371);

return statearr_41370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20185__auto__);
});})(c__20183__auto___41371,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16999__auto__ = (((p == null))?null:p);
var m__17000__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17000__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16999__auto__ = (((p == null))?null:p);
var m__17000__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,p,v,ch);
} else {
var m__17000__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args41420 = [];
var len__17402__auto___41423 = arguments.length;
var i__17403__auto___41424 = (0);
while(true){
if((i__17403__auto___41424 < len__17402__auto___41423)){
args41420.push((arguments[i__17403__auto___41424]));

var G__41425 = (i__17403__auto___41424 + (1));
i__17403__auto___41424 = G__41425;
continue;
} else {
}
break;
}

var G__41422 = args41420.length;
switch (G__41422) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41420.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16999__auto__ = (((p == null))?null:p);
var m__17000__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,p);
} else {
var m__17000__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16999__auto__ = (((p == null))?null:p);
var m__17000__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,p,v);
} else {
var m__17000__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args41428 = [];
var len__17402__auto___41553 = arguments.length;
var i__17403__auto___41554 = (0);
while(true){
if((i__17403__auto___41554 < len__17402__auto___41553)){
args41428.push((arguments[i__17403__auto___41554]));

var G__41555 = (i__17403__auto___41554 + (1));
i__17403__auto___41554 = G__41555;
continue;
} else {
}
break;
}

var G__41430 = args41428.length;
switch (G__41430) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41428.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16344__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16344__auto__,mults){
return (function (p1__41427_SHARP_){
if(cljs.core.truth_(p1__41427_SHARP_.call(null,topic))){
return p1__41427_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__41427_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16344__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async41431 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41431 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta41432){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta41432 = meta41432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_41433,meta41432__$1){
var self__ = this;
var _41433__$1 = this;
return (new cljs.core.async.t_cljs$core$async41431(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta41432__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41431.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_41433){
var self__ = this;
var _41433__$1 = this;
return self__.meta41432;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41431.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async41431.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41431.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async41431.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41431.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41431.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41431.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41431.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta41432","meta41432",-153714490,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41431.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41431.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41431";

cljs.core.async.t_cljs$core$async41431.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async41431");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async41431 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async41431(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41432){
return (new cljs.core.async.t_cljs$core$async41431(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41432));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async41431(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20183__auto___41557 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20183__auto___41557,mults,ensure_mult,p){
return (function (){
var f__20184__auto__ = (function (){var switch__20118__auto__ = ((function (c__20183__auto___41557,mults,ensure_mult,p){
return (function (state_41505){
var state_val_41506 = (state_41505[(1)]);
if((state_val_41506 === (7))){
var inst_41501 = (state_41505[(2)]);
var state_41505__$1 = state_41505;
var statearr_41507_41558 = state_41505__$1;
(statearr_41507_41558[(2)] = inst_41501);

(statearr_41507_41558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41506 === (20))){
var state_41505__$1 = state_41505;
var statearr_41508_41559 = state_41505__$1;
(statearr_41508_41559[(2)] = null);

(statearr_41508_41559[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41506 === (1))){
var state_41505__$1 = state_41505;
var statearr_41509_41560 = state_41505__$1;
(statearr_41509_41560[(2)] = null);

(statearr_41509_41560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41506 === (24))){
var inst_41484 = (state_41505[(7)]);
var inst_41493 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_41484);
var state_41505__$1 = state_41505;
var statearr_41510_41561 = state_41505__$1;
(statearr_41510_41561[(2)] = inst_41493);

(statearr_41510_41561[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41506 === (4))){
var inst_41436 = (state_41505[(8)]);
var inst_41436__$1 = (state_41505[(2)]);
var inst_41437 = (inst_41436__$1 == null);
var state_41505__$1 = (function (){var statearr_41511 = state_41505;
(statearr_41511[(8)] = inst_41436__$1);

return statearr_41511;
})();
if(cljs.core.truth_(inst_41437)){
var statearr_41512_41562 = state_41505__$1;
(statearr_41512_41562[(1)] = (5));

} else {
var statearr_41513_41563 = state_41505__$1;
(statearr_41513_41563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41506 === (15))){
var inst_41478 = (state_41505[(2)]);
var state_41505__$1 = state_41505;
var statearr_41514_41564 = state_41505__$1;
(statearr_41514_41564[(2)] = inst_41478);

(statearr_41514_41564[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41506 === (21))){
var inst_41498 = (state_41505[(2)]);
var state_41505__$1 = (function (){var statearr_41515 = state_41505;
(statearr_41515[(9)] = inst_41498);

return statearr_41515;
})();
var statearr_41516_41565 = state_41505__$1;
(statearr_41516_41565[(2)] = null);

(statearr_41516_41565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41506 === (13))){
var inst_41460 = (state_41505[(10)]);
var inst_41462 = cljs.core.chunked_seq_QMARK_.call(null,inst_41460);
var state_41505__$1 = state_41505;
if(inst_41462){
var statearr_41517_41566 = state_41505__$1;
(statearr_41517_41566[(1)] = (16));

} else {
var statearr_41518_41567 = state_41505__$1;
(statearr_41518_41567[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41506 === (22))){
var inst_41490 = (state_41505[(2)]);
var state_41505__$1 = state_41505;
if(cljs.core.truth_(inst_41490)){
var statearr_41519_41568 = state_41505__$1;
(statearr_41519_41568[(1)] = (23));

} else {
var statearr_41520_41569 = state_41505__$1;
(statearr_41520_41569[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41506 === (6))){
var inst_41484 = (state_41505[(7)]);
var inst_41486 = (state_41505[(11)]);
var inst_41436 = (state_41505[(8)]);
var inst_41484__$1 = topic_fn.call(null,inst_41436);
var inst_41485 = cljs.core.deref.call(null,mults);
var inst_41486__$1 = cljs.core.get.call(null,inst_41485,inst_41484__$1);
var state_41505__$1 = (function (){var statearr_41521 = state_41505;
(statearr_41521[(7)] = inst_41484__$1);

(statearr_41521[(11)] = inst_41486__$1);

return statearr_41521;
})();
if(cljs.core.truth_(inst_41486__$1)){
var statearr_41522_41570 = state_41505__$1;
(statearr_41522_41570[(1)] = (19));

} else {
var statearr_41523_41571 = state_41505__$1;
(statearr_41523_41571[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41506 === (25))){
var inst_41495 = (state_41505[(2)]);
var state_41505__$1 = state_41505;
var statearr_41524_41572 = state_41505__$1;
(statearr_41524_41572[(2)] = inst_41495);

(statearr_41524_41572[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41506 === (17))){
var inst_41460 = (state_41505[(10)]);
var inst_41469 = cljs.core.first.call(null,inst_41460);
var inst_41470 = cljs.core.async.muxch_STAR_.call(null,inst_41469);
var inst_41471 = cljs.core.async.close_BANG_.call(null,inst_41470);
var inst_41472 = cljs.core.next.call(null,inst_41460);
var inst_41446 = inst_41472;
var inst_41447 = null;
var inst_41448 = (0);
var inst_41449 = (0);
var state_41505__$1 = (function (){var statearr_41525 = state_41505;
(statearr_41525[(12)] = inst_41449);

(statearr_41525[(13)] = inst_41447);

(statearr_41525[(14)] = inst_41471);

(statearr_41525[(15)] = inst_41448);

(statearr_41525[(16)] = inst_41446);

return statearr_41525;
})();
var statearr_41526_41573 = state_41505__$1;
(statearr_41526_41573[(2)] = null);

(statearr_41526_41573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41506 === (3))){
var inst_41503 = (state_41505[(2)]);
var state_41505__$1 = state_41505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41505__$1,inst_41503);
} else {
if((state_val_41506 === (12))){
var inst_41480 = (state_41505[(2)]);
var state_41505__$1 = state_41505;
var statearr_41527_41574 = state_41505__$1;
(statearr_41527_41574[(2)] = inst_41480);

(statearr_41527_41574[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41506 === (2))){
var state_41505__$1 = state_41505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41505__$1,(4),ch);
} else {
if((state_val_41506 === (23))){
var state_41505__$1 = state_41505;
var statearr_41528_41575 = state_41505__$1;
(statearr_41528_41575[(2)] = null);

(statearr_41528_41575[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41506 === (19))){
var inst_41486 = (state_41505[(11)]);
var inst_41436 = (state_41505[(8)]);
var inst_41488 = cljs.core.async.muxch_STAR_.call(null,inst_41486);
var state_41505__$1 = state_41505;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41505__$1,(22),inst_41488,inst_41436);
} else {
if((state_val_41506 === (11))){
var inst_41446 = (state_41505[(16)]);
var inst_41460 = (state_41505[(10)]);
var inst_41460__$1 = cljs.core.seq.call(null,inst_41446);
var state_41505__$1 = (function (){var statearr_41529 = state_41505;
(statearr_41529[(10)] = inst_41460__$1);

return statearr_41529;
})();
if(inst_41460__$1){
var statearr_41530_41576 = state_41505__$1;
(statearr_41530_41576[(1)] = (13));

} else {
var statearr_41531_41577 = state_41505__$1;
(statearr_41531_41577[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41506 === (9))){
var inst_41482 = (state_41505[(2)]);
var state_41505__$1 = state_41505;
var statearr_41532_41578 = state_41505__$1;
(statearr_41532_41578[(2)] = inst_41482);

(statearr_41532_41578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41506 === (5))){
var inst_41443 = cljs.core.deref.call(null,mults);
var inst_41444 = cljs.core.vals.call(null,inst_41443);
var inst_41445 = cljs.core.seq.call(null,inst_41444);
var inst_41446 = inst_41445;
var inst_41447 = null;
var inst_41448 = (0);
var inst_41449 = (0);
var state_41505__$1 = (function (){var statearr_41533 = state_41505;
(statearr_41533[(12)] = inst_41449);

(statearr_41533[(13)] = inst_41447);

(statearr_41533[(15)] = inst_41448);

(statearr_41533[(16)] = inst_41446);

return statearr_41533;
})();
var statearr_41534_41579 = state_41505__$1;
(statearr_41534_41579[(2)] = null);

(statearr_41534_41579[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41506 === (14))){
var state_41505__$1 = state_41505;
var statearr_41538_41580 = state_41505__$1;
(statearr_41538_41580[(2)] = null);

(statearr_41538_41580[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41506 === (16))){
var inst_41460 = (state_41505[(10)]);
var inst_41464 = cljs.core.chunk_first.call(null,inst_41460);
var inst_41465 = cljs.core.chunk_rest.call(null,inst_41460);
var inst_41466 = cljs.core.count.call(null,inst_41464);
var inst_41446 = inst_41465;
var inst_41447 = inst_41464;
var inst_41448 = inst_41466;
var inst_41449 = (0);
var state_41505__$1 = (function (){var statearr_41539 = state_41505;
(statearr_41539[(12)] = inst_41449);

(statearr_41539[(13)] = inst_41447);

(statearr_41539[(15)] = inst_41448);

(statearr_41539[(16)] = inst_41446);

return statearr_41539;
})();
var statearr_41540_41581 = state_41505__$1;
(statearr_41540_41581[(2)] = null);

(statearr_41540_41581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41506 === (10))){
var inst_41449 = (state_41505[(12)]);
var inst_41447 = (state_41505[(13)]);
var inst_41448 = (state_41505[(15)]);
var inst_41446 = (state_41505[(16)]);
var inst_41454 = cljs.core._nth.call(null,inst_41447,inst_41449);
var inst_41455 = cljs.core.async.muxch_STAR_.call(null,inst_41454);
var inst_41456 = cljs.core.async.close_BANG_.call(null,inst_41455);
var inst_41457 = (inst_41449 + (1));
var tmp41535 = inst_41447;
var tmp41536 = inst_41448;
var tmp41537 = inst_41446;
var inst_41446__$1 = tmp41537;
var inst_41447__$1 = tmp41535;
var inst_41448__$1 = tmp41536;
var inst_41449__$1 = inst_41457;
var state_41505__$1 = (function (){var statearr_41541 = state_41505;
(statearr_41541[(17)] = inst_41456);

(statearr_41541[(12)] = inst_41449__$1);

(statearr_41541[(13)] = inst_41447__$1);

(statearr_41541[(15)] = inst_41448__$1);

(statearr_41541[(16)] = inst_41446__$1);

return statearr_41541;
})();
var statearr_41542_41582 = state_41505__$1;
(statearr_41542_41582[(2)] = null);

(statearr_41542_41582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41506 === (18))){
var inst_41475 = (state_41505[(2)]);
var state_41505__$1 = state_41505;
var statearr_41543_41583 = state_41505__$1;
(statearr_41543_41583[(2)] = inst_41475);

(statearr_41543_41583[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41506 === (8))){
var inst_41449 = (state_41505[(12)]);
var inst_41448 = (state_41505[(15)]);
var inst_41451 = (inst_41449 < inst_41448);
var inst_41452 = inst_41451;
var state_41505__$1 = state_41505;
if(cljs.core.truth_(inst_41452)){
var statearr_41544_41584 = state_41505__$1;
(statearr_41544_41584[(1)] = (10));

} else {
var statearr_41545_41585 = state_41505__$1;
(statearr_41545_41585[(1)] = (11));

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
});})(c__20183__auto___41557,mults,ensure_mult,p))
;
return ((function (switch__20118__auto__,c__20183__auto___41557,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20119__auto__ = null;
var cljs$core$async$state_machine__20119__auto____0 = (function (){
var statearr_41549 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41549[(0)] = cljs$core$async$state_machine__20119__auto__);

(statearr_41549[(1)] = (1));

return statearr_41549;
});
var cljs$core$async$state_machine__20119__auto____1 = (function (state_41505){
while(true){
var ret_value__20120__auto__ = (function (){try{while(true){
var result__20121__auto__ = switch__20118__auto__.call(null,state_41505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20121__auto__;
}
break;
}
}catch (e41550){if((e41550 instanceof Object)){
var ex__20122__auto__ = e41550;
var statearr_41551_41586 = state_41505;
(statearr_41551_41586[(5)] = ex__20122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41587 = state_41505;
state_41505 = G__41587;
continue;
} else {
return ret_value__20120__auto__;
}
break;
}
});
cljs$core$async$state_machine__20119__auto__ = function(state_41505){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20119__auto____1.call(this,state_41505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20119__auto____0;
cljs$core$async$state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20119__auto____1;
return cljs$core$async$state_machine__20119__auto__;
})()
;})(switch__20118__auto__,c__20183__auto___41557,mults,ensure_mult,p))
})();
var state__20185__auto__ = (function (){var statearr_41552 = f__20184__auto__.call(null);
(statearr_41552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20183__auto___41557);

return statearr_41552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20185__auto__);
});})(c__20183__auto___41557,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args41588 = [];
var len__17402__auto___41591 = arguments.length;
var i__17403__auto___41592 = (0);
while(true){
if((i__17403__auto___41592 < len__17402__auto___41591)){
args41588.push((arguments[i__17403__auto___41592]));

var G__41593 = (i__17403__auto___41592 + (1));
i__17403__auto___41592 = G__41593;
continue;
} else {
}
break;
}

var G__41590 = args41588.length;
switch (G__41590) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41588.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args41595 = [];
var len__17402__auto___41598 = arguments.length;
var i__17403__auto___41599 = (0);
while(true){
if((i__17403__auto___41599 < len__17402__auto___41598)){
args41595.push((arguments[i__17403__auto___41599]));

var G__41600 = (i__17403__auto___41599 + (1));
i__17403__auto___41599 = G__41600;
continue;
} else {
}
break;
}

var G__41597 = args41595.length;
switch (G__41597) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41595.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args41602 = [];
var len__17402__auto___41673 = arguments.length;
var i__17403__auto___41674 = (0);
while(true){
if((i__17403__auto___41674 < len__17402__auto___41673)){
args41602.push((arguments[i__17403__auto___41674]));

var G__41675 = (i__17403__auto___41674 + (1));
i__17403__auto___41674 = G__41675;
continue;
} else {
}
break;
}

var G__41604 = args41602.length;
switch (G__41604) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41602.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
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
var c__20183__auto___41677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20183__auto___41677,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20184__auto__ = (function (){var switch__20118__auto__ = ((function (c__20183__auto___41677,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_41643){
var state_val_41644 = (state_41643[(1)]);
if((state_val_41644 === (7))){
var state_41643__$1 = state_41643;
var statearr_41645_41678 = state_41643__$1;
(statearr_41645_41678[(2)] = null);

(statearr_41645_41678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41644 === (1))){
var state_41643__$1 = state_41643;
var statearr_41646_41679 = state_41643__$1;
(statearr_41646_41679[(2)] = null);

(statearr_41646_41679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41644 === (4))){
var inst_41607 = (state_41643[(7)]);
var inst_41609 = (inst_41607 < cnt);
var state_41643__$1 = state_41643;
if(cljs.core.truth_(inst_41609)){
var statearr_41647_41680 = state_41643__$1;
(statearr_41647_41680[(1)] = (6));

} else {
var statearr_41648_41681 = state_41643__$1;
(statearr_41648_41681[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41644 === (15))){
var inst_41639 = (state_41643[(2)]);
var state_41643__$1 = state_41643;
var statearr_41649_41682 = state_41643__$1;
(statearr_41649_41682[(2)] = inst_41639);

(statearr_41649_41682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41644 === (13))){
var inst_41632 = cljs.core.async.close_BANG_.call(null,out);
var state_41643__$1 = state_41643;
var statearr_41650_41683 = state_41643__$1;
(statearr_41650_41683[(2)] = inst_41632);

(statearr_41650_41683[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41644 === (6))){
var state_41643__$1 = state_41643;
var statearr_41651_41684 = state_41643__$1;
(statearr_41651_41684[(2)] = null);

(statearr_41651_41684[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41644 === (3))){
var inst_41641 = (state_41643[(2)]);
var state_41643__$1 = state_41643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41643__$1,inst_41641);
} else {
if((state_val_41644 === (12))){
var inst_41629 = (state_41643[(8)]);
var inst_41629__$1 = (state_41643[(2)]);
var inst_41630 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_41629__$1);
var state_41643__$1 = (function (){var statearr_41652 = state_41643;
(statearr_41652[(8)] = inst_41629__$1);

return statearr_41652;
})();
if(cljs.core.truth_(inst_41630)){
var statearr_41653_41685 = state_41643__$1;
(statearr_41653_41685[(1)] = (13));

} else {
var statearr_41654_41686 = state_41643__$1;
(statearr_41654_41686[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41644 === (2))){
var inst_41606 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_41607 = (0);
var state_41643__$1 = (function (){var statearr_41655 = state_41643;
(statearr_41655[(9)] = inst_41606);

(statearr_41655[(7)] = inst_41607);

return statearr_41655;
})();
var statearr_41656_41687 = state_41643__$1;
(statearr_41656_41687[(2)] = null);

(statearr_41656_41687[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41644 === (11))){
var inst_41607 = (state_41643[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41643,(10),Object,null,(9));
var inst_41616 = chs__$1.call(null,inst_41607);
var inst_41617 = done.call(null,inst_41607);
var inst_41618 = cljs.core.async.take_BANG_.call(null,inst_41616,inst_41617);
var state_41643__$1 = state_41643;
var statearr_41657_41688 = state_41643__$1;
(statearr_41657_41688[(2)] = inst_41618);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41643__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41644 === (9))){
var inst_41607 = (state_41643[(7)]);
var inst_41620 = (state_41643[(2)]);
var inst_41621 = (inst_41607 + (1));
var inst_41607__$1 = inst_41621;
var state_41643__$1 = (function (){var statearr_41658 = state_41643;
(statearr_41658[(10)] = inst_41620);

(statearr_41658[(7)] = inst_41607__$1);

return statearr_41658;
})();
var statearr_41659_41689 = state_41643__$1;
(statearr_41659_41689[(2)] = null);

(statearr_41659_41689[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41644 === (5))){
var inst_41627 = (state_41643[(2)]);
var state_41643__$1 = (function (){var statearr_41660 = state_41643;
(statearr_41660[(11)] = inst_41627);

return statearr_41660;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41643__$1,(12),dchan);
} else {
if((state_val_41644 === (14))){
var inst_41629 = (state_41643[(8)]);
var inst_41634 = cljs.core.apply.call(null,f,inst_41629);
var state_41643__$1 = state_41643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41643__$1,(16),out,inst_41634);
} else {
if((state_val_41644 === (16))){
var inst_41636 = (state_41643[(2)]);
var state_41643__$1 = (function (){var statearr_41661 = state_41643;
(statearr_41661[(12)] = inst_41636);

return statearr_41661;
})();
var statearr_41662_41690 = state_41643__$1;
(statearr_41662_41690[(2)] = null);

(statearr_41662_41690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41644 === (10))){
var inst_41611 = (state_41643[(2)]);
var inst_41612 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_41643__$1 = (function (){var statearr_41663 = state_41643;
(statearr_41663[(13)] = inst_41611);

return statearr_41663;
})();
var statearr_41664_41691 = state_41643__$1;
(statearr_41664_41691[(2)] = inst_41612);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41643__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41644 === (8))){
var inst_41625 = (state_41643[(2)]);
var state_41643__$1 = state_41643;
var statearr_41665_41692 = state_41643__$1;
(statearr_41665_41692[(2)] = inst_41625);

(statearr_41665_41692[(1)] = (5));


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
});})(c__20183__auto___41677,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20118__auto__,c__20183__auto___41677,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20119__auto__ = null;
var cljs$core$async$state_machine__20119__auto____0 = (function (){
var statearr_41669 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41669[(0)] = cljs$core$async$state_machine__20119__auto__);

(statearr_41669[(1)] = (1));

return statearr_41669;
});
var cljs$core$async$state_machine__20119__auto____1 = (function (state_41643){
while(true){
var ret_value__20120__auto__ = (function (){try{while(true){
var result__20121__auto__ = switch__20118__auto__.call(null,state_41643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20121__auto__;
}
break;
}
}catch (e41670){if((e41670 instanceof Object)){
var ex__20122__auto__ = e41670;
var statearr_41671_41693 = state_41643;
(statearr_41671_41693[(5)] = ex__20122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41694 = state_41643;
state_41643 = G__41694;
continue;
} else {
return ret_value__20120__auto__;
}
break;
}
});
cljs$core$async$state_machine__20119__auto__ = function(state_41643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20119__auto____1.call(this,state_41643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20119__auto____0;
cljs$core$async$state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20119__auto____1;
return cljs$core$async$state_machine__20119__auto__;
})()
;})(switch__20118__auto__,c__20183__auto___41677,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20185__auto__ = (function (){var statearr_41672 = f__20184__auto__.call(null);
(statearr_41672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20183__auto___41677);

return statearr_41672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20185__auto__);
});})(c__20183__auto___41677,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args41696 = [];
var len__17402__auto___41752 = arguments.length;
var i__17403__auto___41753 = (0);
while(true){
if((i__17403__auto___41753 < len__17402__auto___41752)){
args41696.push((arguments[i__17403__auto___41753]));

var G__41754 = (i__17403__auto___41753 + (1));
i__17403__auto___41753 = G__41754;
continue;
} else {
}
break;
}

var G__41698 = args41696.length;
switch (G__41698) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41696.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20183__auto___41756 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20183__auto___41756,out){
return (function (){
var f__20184__auto__ = (function (){var switch__20118__auto__ = ((function (c__20183__auto___41756,out){
return (function (state_41728){
var state_val_41729 = (state_41728[(1)]);
if((state_val_41729 === (7))){
var inst_41708 = (state_41728[(7)]);
var inst_41707 = (state_41728[(8)]);
var inst_41707__$1 = (state_41728[(2)]);
var inst_41708__$1 = cljs.core.nth.call(null,inst_41707__$1,(0),null);
var inst_41709 = cljs.core.nth.call(null,inst_41707__$1,(1),null);
var inst_41710 = (inst_41708__$1 == null);
var state_41728__$1 = (function (){var statearr_41730 = state_41728;
(statearr_41730[(7)] = inst_41708__$1);

(statearr_41730[(9)] = inst_41709);

(statearr_41730[(8)] = inst_41707__$1);

return statearr_41730;
})();
if(cljs.core.truth_(inst_41710)){
var statearr_41731_41757 = state_41728__$1;
(statearr_41731_41757[(1)] = (8));

} else {
var statearr_41732_41758 = state_41728__$1;
(statearr_41732_41758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41729 === (1))){
var inst_41699 = cljs.core.vec.call(null,chs);
var inst_41700 = inst_41699;
var state_41728__$1 = (function (){var statearr_41733 = state_41728;
(statearr_41733[(10)] = inst_41700);

return statearr_41733;
})();
var statearr_41734_41759 = state_41728__$1;
(statearr_41734_41759[(2)] = null);

(statearr_41734_41759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41729 === (4))){
var inst_41700 = (state_41728[(10)]);
var state_41728__$1 = state_41728;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41728__$1,(7),inst_41700);
} else {
if((state_val_41729 === (6))){
var inst_41724 = (state_41728[(2)]);
var state_41728__$1 = state_41728;
var statearr_41735_41760 = state_41728__$1;
(statearr_41735_41760[(2)] = inst_41724);

(statearr_41735_41760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41729 === (3))){
var inst_41726 = (state_41728[(2)]);
var state_41728__$1 = state_41728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41728__$1,inst_41726);
} else {
if((state_val_41729 === (2))){
var inst_41700 = (state_41728[(10)]);
var inst_41702 = cljs.core.count.call(null,inst_41700);
var inst_41703 = (inst_41702 > (0));
var state_41728__$1 = state_41728;
if(cljs.core.truth_(inst_41703)){
var statearr_41737_41761 = state_41728__$1;
(statearr_41737_41761[(1)] = (4));

} else {
var statearr_41738_41762 = state_41728__$1;
(statearr_41738_41762[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41729 === (11))){
var inst_41700 = (state_41728[(10)]);
var inst_41717 = (state_41728[(2)]);
var tmp41736 = inst_41700;
var inst_41700__$1 = tmp41736;
var state_41728__$1 = (function (){var statearr_41739 = state_41728;
(statearr_41739[(10)] = inst_41700__$1);

(statearr_41739[(11)] = inst_41717);

return statearr_41739;
})();
var statearr_41740_41763 = state_41728__$1;
(statearr_41740_41763[(2)] = null);

(statearr_41740_41763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41729 === (9))){
var inst_41708 = (state_41728[(7)]);
var state_41728__$1 = state_41728;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41728__$1,(11),out,inst_41708);
} else {
if((state_val_41729 === (5))){
var inst_41722 = cljs.core.async.close_BANG_.call(null,out);
var state_41728__$1 = state_41728;
var statearr_41741_41764 = state_41728__$1;
(statearr_41741_41764[(2)] = inst_41722);

(statearr_41741_41764[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41729 === (10))){
var inst_41720 = (state_41728[(2)]);
var state_41728__$1 = state_41728;
var statearr_41742_41765 = state_41728__$1;
(statearr_41742_41765[(2)] = inst_41720);

(statearr_41742_41765[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41729 === (8))){
var inst_41700 = (state_41728[(10)]);
var inst_41708 = (state_41728[(7)]);
var inst_41709 = (state_41728[(9)]);
var inst_41707 = (state_41728[(8)]);
var inst_41712 = (function (){var cs = inst_41700;
var vec__41705 = inst_41707;
var v = inst_41708;
var c = inst_41709;
return ((function (cs,vec__41705,v,c,inst_41700,inst_41708,inst_41709,inst_41707,state_val_41729,c__20183__auto___41756,out){
return (function (p1__41695_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__41695_SHARP_);
});
;})(cs,vec__41705,v,c,inst_41700,inst_41708,inst_41709,inst_41707,state_val_41729,c__20183__auto___41756,out))
})();
var inst_41713 = cljs.core.filterv.call(null,inst_41712,inst_41700);
var inst_41700__$1 = inst_41713;
var state_41728__$1 = (function (){var statearr_41743 = state_41728;
(statearr_41743[(10)] = inst_41700__$1);

return statearr_41743;
})();
var statearr_41744_41766 = state_41728__$1;
(statearr_41744_41766[(2)] = null);

(statearr_41744_41766[(1)] = (2));


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
});})(c__20183__auto___41756,out))
;
return ((function (switch__20118__auto__,c__20183__auto___41756,out){
return (function() {
var cljs$core$async$state_machine__20119__auto__ = null;
var cljs$core$async$state_machine__20119__auto____0 = (function (){
var statearr_41748 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41748[(0)] = cljs$core$async$state_machine__20119__auto__);

(statearr_41748[(1)] = (1));

return statearr_41748;
});
var cljs$core$async$state_machine__20119__auto____1 = (function (state_41728){
while(true){
var ret_value__20120__auto__ = (function (){try{while(true){
var result__20121__auto__ = switch__20118__auto__.call(null,state_41728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20121__auto__;
}
break;
}
}catch (e41749){if((e41749 instanceof Object)){
var ex__20122__auto__ = e41749;
var statearr_41750_41767 = state_41728;
(statearr_41750_41767[(5)] = ex__20122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41768 = state_41728;
state_41728 = G__41768;
continue;
} else {
return ret_value__20120__auto__;
}
break;
}
});
cljs$core$async$state_machine__20119__auto__ = function(state_41728){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20119__auto____1.call(this,state_41728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20119__auto____0;
cljs$core$async$state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20119__auto____1;
return cljs$core$async$state_machine__20119__auto__;
})()
;})(switch__20118__auto__,c__20183__auto___41756,out))
})();
var state__20185__auto__ = (function (){var statearr_41751 = f__20184__auto__.call(null);
(statearr_41751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20183__auto___41756);

return statearr_41751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20185__auto__);
});})(c__20183__auto___41756,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args41769 = [];
var len__17402__auto___41818 = arguments.length;
var i__17403__auto___41819 = (0);
while(true){
if((i__17403__auto___41819 < len__17402__auto___41818)){
args41769.push((arguments[i__17403__auto___41819]));

var G__41820 = (i__17403__auto___41819 + (1));
i__17403__auto___41819 = G__41820;
continue;
} else {
}
break;
}

var G__41771 = args41769.length;
switch (G__41771) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41769.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20183__auto___41822 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20183__auto___41822,out){
return (function (){
var f__20184__auto__ = (function (){var switch__20118__auto__ = ((function (c__20183__auto___41822,out){
return (function (state_41795){
var state_val_41796 = (state_41795[(1)]);
if((state_val_41796 === (7))){
var inst_41777 = (state_41795[(7)]);
var inst_41777__$1 = (state_41795[(2)]);
var inst_41778 = (inst_41777__$1 == null);
var inst_41779 = cljs.core.not.call(null,inst_41778);
var state_41795__$1 = (function (){var statearr_41797 = state_41795;
(statearr_41797[(7)] = inst_41777__$1);

return statearr_41797;
})();
if(inst_41779){
var statearr_41798_41823 = state_41795__$1;
(statearr_41798_41823[(1)] = (8));

} else {
var statearr_41799_41824 = state_41795__$1;
(statearr_41799_41824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41796 === (1))){
var inst_41772 = (0);
var state_41795__$1 = (function (){var statearr_41800 = state_41795;
(statearr_41800[(8)] = inst_41772);

return statearr_41800;
})();
var statearr_41801_41825 = state_41795__$1;
(statearr_41801_41825[(2)] = null);

(statearr_41801_41825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41796 === (4))){
var state_41795__$1 = state_41795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41795__$1,(7),ch);
} else {
if((state_val_41796 === (6))){
var inst_41790 = (state_41795[(2)]);
var state_41795__$1 = state_41795;
var statearr_41802_41826 = state_41795__$1;
(statearr_41802_41826[(2)] = inst_41790);

(statearr_41802_41826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41796 === (3))){
var inst_41792 = (state_41795[(2)]);
var inst_41793 = cljs.core.async.close_BANG_.call(null,out);
var state_41795__$1 = (function (){var statearr_41803 = state_41795;
(statearr_41803[(9)] = inst_41792);

return statearr_41803;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41795__$1,inst_41793);
} else {
if((state_val_41796 === (2))){
var inst_41772 = (state_41795[(8)]);
var inst_41774 = (inst_41772 < n);
var state_41795__$1 = state_41795;
if(cljs.core.truth_(inst_41774)){
var statearr_41804_41827 = state_41795__$1;
(statearr_41804_41827[(1)] = (4));

} else {
var statearr_41805_41828 = state_41795__$1;
(statearr_41805_41828[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41796 === (11))){
var inst_41772 = (state_41795[(8)]);
var inst_41782 = (state_41795[(2)]);
var inst_41783 = (inst_41772 + (1));
var inst_41772__$1 = inst_41783;
var state_41795__$1 = (function (){var statearr_41806 = state_41795;
(statearr_41806[(10)] = inst_41782);

(statearr_41806[(8)] = inst_41772__$1);

return statearr_41806;
})();
var statearr_41807_41829 = state_41795__$1;
(statearr_41807_41829[(2)] = null);

(statearr_41807_41829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41796 === (9))){
var state_41795__$1 = state_41795;
var statearr_41808_41830 = state_41795__$1;
(statearr_41808_41830[(2)] = null);

(statearr_41808_41830[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41796 === (5))){
var state_41795__$1 = state_41795;
var statearr_41809_41831 = state_41795__$1;
(statearr_41809_41831[(2)] = null);

(statearr_41809_41831[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41796 === (10))){
var inst_41787 = (state_41795[(2)]);
var state_41795__$1 = state_41795;
var statearr_41810_41832 = state_41795__$1;
(statearr_41810_41832[(2)] = inst_41787);

(statearr_41810_41832[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41796 === (8))){
var inst_41777 = (state_41795[(7)]);
var state_41795__$1 = state_41795;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41795__$1,(11),out,inst_41777);
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
});})(c__20183__auto___41822,out))
;
return ((function (switch__20118__auto__,c__20183__auto___41822,out){
return (function() {
var cljs$core$async$state_machine__20119__auto__ = null;
var cljs$core$async$state_machine__20119__auto____0 = (function (){
var statearr_41814 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41814[(0)] = cljs$core$async$state_machine__20119__auto__);

(statearr_41814[(1)] = (1));

return statearr_41814;
});
var cljs$core$async$state_machine__20119__auto____1 = (function (state_41795){
while(true){
var ret_value__20120__auto__ = (function (){try{while(true){
var result__20121__auto__ = switch__20118__auto__.call(null,state_41795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20121__auto__;
}
break;
}
}catch (e41815){if((e41815 instanceof Object)){
var ex__20122__auto__ = e41815;
var statearr_41816_41833 = state_41795;
(statearr_41816_41833[(5)] = ex__20122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41834 = state_41795;
state_41795 = G__41834;
continue;
} else {
return ret_value__20120__auto__;
}
break;
}
});
cljs$core$async$state_machine__20119__auto__ = function(state_41795){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20119__auto____1.call(this,state_41795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20119__auto____0;
cljs$core$async$state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20119__auto____1;
return cljs$core$async$state_machine__20119__auto__;
})()
;})(switch__20118__auto__,c__20183__auto___41822,out))
})();
var state__20185__auto__ = (function (){var statearr_41817 = f__20184__auto__.call(null);
(statearr_41817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20183__auto___41822);

return statearr_41817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20185__auto__);
});})(c__20183__auto___41822,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async41842 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41842 = (function (map_LT_,f,ch,meta41843){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta41843 = meta41843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41844,meta41843__$1){
var self__ = this;
var _41844__$1 = this;
return (new cljs.core.async.t_cljs$core$async41842(self__.map_LT_,self__.f,self__.ch,meta41843__$1));
});

cljs.core.async.t_cljs$core$async41842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41844){
var self__ = this;
var _41844__$1 = this;
return self__.meta41843;
});

cljs.core.async.t_cljs$core$async41842.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async41842.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41842.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41842.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async41842.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async41845 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41845 = (function (map_LT_,f,ch,meta41843,_,fn1,meta41846){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta41843 = meta41843;
this._ = _;
this.fn1 = fn1;
this.meta41846 = meta41846;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_41847,meta41846__$1){
var self__ = this;
var _41847__$1 = this;
return (new cljs.core.async.t_cljs$core$async41845(self__.map_LT_,self__.f,self__.ch,self__.meta41843,self__._,self__.fn1,meta41846__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async41845.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_41847){
var self__ = this;
var _41847__$1 = this;
return self__.meta41846;
});})(___$1))
;

cljs.core.async.t_cljs$core$async41845.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async41845.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async41845.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__41835_SHARP_){
return f1.call(null,(((p1__41835_SHARP_ == null))?null:self__.f.call(null,p1__41835_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async41845.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41843","meta41843",-1001039256,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async41842","cljs.core.async/t_cljs$core$async41842",-1767531848,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta41846","meta41846",-590263684,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async41845.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41845.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41845";

cljs.core.async.t_cljs$core$async41845.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async41845");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async41845 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41845(map_LT___$1,f__$1,ch__$1,meta41843__$1,___$2,fn1__$1,meta41846){
return (new cljs.core.async.t_cljs$core$async41845(map_LT___$1,f__$1,ch__$1,meta41843__$1,___$2,fn1__$1,meta41846));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async41845(self__.map_LT_,self__.f,self__.ch,self__.meta41843,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16332__auto__ = ret;
if(cljs.core.truth_(and__16332__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16332__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async41842.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async41842.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async41842.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41843","meta41843",-1001039256,null)], null);
});

cljs.core.async.t_cljs$core$async41842.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41842.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41842";

cljs.core.async.t_cljs$core$async41842.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async41842");
});

cljs.core.async.__GT_t_cljs$core$async41842 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41842(map_LT___$1,f__$1,ch__$1,meta41843){
return (new cljs.core.async.t_cljs$core$async41842(map_LT___$1,f__$1,ch__$1,meta41843));
});

}

return (new cljs.core.async.t_cljs$core$async41842(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async41851 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41851 = (function (map_GT_,f,ch,meta41852){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta41852 = meta41852;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41853,meta41852__$1){
var self__ = this;
var _41853__$1 = this;
return (new cljs.core.async.t_cljs$core$async41851(self__.map_GT_,self__.f,self__.ch,meta41852__$1));
});

cljs.core.async.t_cljs$core$async41851.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41853){
var self__ = this;
var _41853__$1 = this;
return self__.meta41852;
});

cljs.core.async.t_cljs$core$async41851.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async41851.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41851.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async41851.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async41851.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async41851.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async41851.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41852","meta41852",474159222,null)], null);
});

cljs.core.async.t_cljs$core$async41851.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41851.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41851";

cljs.core.async.t_cljs$core$async41851.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async41851");
});

cljs.core.async.__GT_t_cljs$core$async41851 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async41851(map_GT___$1,f__$1,ch__$1,meta41852){
return (new cljs.core.async.t_cljs$core$async41851(map_GT___$1,f__$1,ch__$1,meta41852));
});

}

return (new cljs.core.async.t_cljs$core$async41851(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async41857 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41857 = (function (filter_GT_,p,ch,meta41858){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta41858 = meta41858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41859,meta41858__$1){
var self__ = this;
var _41859__$1 = this;
return (new cljs.core.async.t_cljs$core$async41857(self__.filter_GT_,self__.p,self__.ch,meta41858__$1));
});

cljs.core.async.t_cljs$core$async41857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41859){
var self__ = this;
var _41859__$1 = this;
return self__.meta41858;
});

cljs.core.async.t_cljs$core$async41857.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async41857.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41857.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41857.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async41857.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async41857.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async41857.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async41857.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41858","meta41858",1342833674,null)], null);
});

cljs.core.async.t_cljs$core$async41857.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41857.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41857";

cljs.core.async.t_cljs$core$async41857.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async41857");
});

cljs.core.async.__GT_t_cljs$core$async41857 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async41857(filter_GT___$1,p__$1,ch__$1,meta41858){
return (new cljs.core.async.t_cljs$core$async41857(filter_GT___$1,p__$1,ch__$1,meta41858));
});

}

return (new cljs.core.async.t_cljs$core$async41857(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args41860 = [];
var len__17402__auto___41904 = arguments.length;
var i__17403__auto___41905 = (0);
while(true){
if((i__17403__auto___41905 < len__17402__auto___41904)){
args41860.push((arguments[i__17403__auto___41905]));

var G__41906 = (i__17403__auto___41905 + (1));
i__17403__auto___41905 = G__41906;
continue;
} else {
}
break;
}

var G__41862 = args41860.length;
switch (G__41862) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41860.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20183__auto___41908 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20183__auto___41908,out){
return (function (){
var f__20184__auto__ = (function (){var switch__20118__auto__ = ((function (c__20183__auto___41908,out){
return (function (state_41883){
var state_val_41884 = (state_41883[(1)]);
if((state_val_41884 === (7))){
var inst_41879 = (state_41883[(2)]);
var state_41883__$1 = state_41883;
var statearr_41885_41909 = state_41883__$1;
(statearr_41885_41909[(2)] = inst_41879);

(statearr_41885_41909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41884 === (1))){
var state_41883__$1 = state_41883;
var statearr_41886_41910 = state_41883__$1;
(statearr_41886_41910[(2)] = null);

(statearr_41886_41910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41884 === (4))){
var inst_41865 = (state_41883[(7)]);
var inst_41865__$1 = (state_41883[(2)]);
var inst_41866 = (inst_41865__$1 == null);
var state_41883__$1 = (function (){var statearr_41887 = state_41883;
(statearr_41887[(7)] = inst_41865__$1);

return statearr_41887;
})();
if(cljs.core.truth_(inst_41866)){
var statearr_41888_41911 = state_41883__$1;
(statearr_41888_41911[(1)] = (5));

} else {
var statearr_41889_41912 = state_41883__$1;
(statearr_41889_41912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41884 === (6))){
var inst_41865 = (state_41883[(7)]);
var inst_41870 = p.call(null,inst_41865);
var state_41883__$1 = state_41883;
if(cljs.core.truth_(inst_41870)){
var statearr_41890_41913 = state_41883__$1;
(statearr_41890_41913[(1)] = (8));

} else {
var statearr_41891_41914 = state_41883__$1;
(statearr_41891_41914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41884 === (3))){
var inst_41881 = (state_41883[(2)]);
var state_41883__$1 = state_41883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41883__$1,inst_41881);
} else {
if((state_val_41884 === (2))){
var state_41883__$1 = state_41883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41883__$1,(4),ch);
} else {
if((state_val_41884 === (11))){
var inst_41873 = (state_41883[(2)]);
var state_41883__$1 = state_41883;
var statearr_41892_41915 = state_41883__$1;
(statearr_41892_41915[(2)] = inst_41873);

(statearr_41892_41915[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41884 === (9))){
var state_41883__$1 = state_41883;
var statearr_41893_41916 = state_41883__$1;
(statearr_41893_41916[(2)] = null);

(statearr_41893_41916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41884 === (5))){
var inst_41868 = cljs.core.async.close_BANG_.call(null,out);
var state_41883__$1 = state_41883;
var statearr_41894_41917 = state_41883__$1;
(statearr_41894_41917[(2)] = inst_41868);

(statearr_41894_41917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41884 === (10))){
var inst_41876 = (state_41883[(2)]);
var state_41883__$1 = (function (){var statearr_41895 = state_41883;
(statearr_41895[(8)] = inst_41876);

return statearr_41895;
})();
var statearr_41896_41918 = state_41883__$1;
(statearr_41896_41918[(2)] = null);

(statearr_41896_41918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41884 === (8))){
var inst_41865 = (state_41883[(7)]);
var state_41883__$1 = state_41883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41883__$1,(11),out,inst_41865);
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
});})(c__20183__auto___41908,out))
;
return ((function (switch__20118__auto__,c__20183__auto___41908,out){
return (function() {
var cljs$core$async$state_machine__20119__auto__ = null;
var cljs$core$async$state_machine__20119__auto____0 = (function (){
var statearr_41900 = [null,null,null,null,null,null,null,null,null];
(statearr_41900[(0)] = cljs$core$async$state_machine__20119__auto__);

(statearr_41900[(1)] = (1));

return statearr_41900;
});
var cljs$core$async$state_machine__20119__auto____1 = (function (state_41883){
while(true){
var ret_value__20120__auto__ = (function (){try{while(true){
var result__20121__auto__ = switch__20118__auto__.call(null,state_41883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20121__auto__;
}
break;
}
}catch (e41901){if((e41901 instanceof Object)){
var ex__20122__auto__ = e41901;
var statearr_41902_41919 = state_41883;
(statearr_41902_41919[(5)] = ex__20122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41920 = state_41883;
state_41883 = G__41920;
continue;
} else {
return ret_value__20120__auto__;
}
break;
}
});
cljs$core$async$state_machine__20119__auto__ = function(state_41883){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20119__auto____1.call(this,state_41883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20119__auto____0;
cljs$core$async$state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20119__auto____1;
return cljs$core$async$state_machine__20119__auto__;
})()
;})(switch__20118__auto__,c__20183__auto___41908,out))
})();
var state__20185__auto__ = (function (){var statearr_41903 = f__20184__auto__.call(null);
(statearr_41903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20183__auto___41908);

return statearr_41903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20185__auto__);
});})(c__20183__auto___41908,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args41921 = [];
var len__17402__auto___41924 = arguments.length;
var i__17403__auto___41925 = (0);
while(true){
if((i__17403__auto___41925 < len__17402__auto___41924)){
args41921.push((arguments[i__17403__auto___41925]));

var G__41926 = (i__17403__auto___41925 + (1));
i__17403__auto___41925 = G__41926;
continue;
} else {
}
break;
}

var G__41923 = args41921.length;
switch (G__41923) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41921.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20183__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20183__auto__){
return (function (){
var f__20184__auto__ = (function (){var switch__20118__auto__ = ((function (c__20183__auto__){
return (function (state_42093){
var state_val_42094 = (state_42093[(1)]);
if((state_val_42094 === (7))){
var inst_42089 = (state_42093[(2)]);
var state_42093__$1 = state_42093;
var statearr_42095_42136 = state_42093__$1;
(statearr_42095_42136[(2)] = inst_42089);

(statearr_42095_42136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42094 === (20))){
var inst_42059 = (state_42093[(7)]);
var inst_42070 = (state_42093[(2)]);
var inst_42071 = cljs.core.next.call(null,inst_42059);
var inst_42045 = inst_42071;
var inst_42046 = null;
var inst_42047 = (0);
var inst_42048 = (0);
var state_42093__$1 = (function (){var statearr_42096 = state_42093;
(statearr_42096[(8)] = inst_42045);

(statearr_42096[(9)] = inst_42048);

(statearr_42096[(10)] = inst_42070);

(statearr_42096[(11)] = inst_42047);

(statearr_42096[(12)] = inst_42046);

return statearr_42096;
})();
var statearr_42097_42137 = state_42093__$1;
(statearr_42097_42137[(2)] = null);

(statearr_42097_42137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42094 === (1))){
var state_42093__$1 = state_42093;
var statearr_42098_42138 = state_42093__$1;
(statearr_42098_42138[(2)] = null);

(statearr_42098_42138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42094 === (4))){
var inst_42034 = (state_42093[(13)]);
var inst_42034__$1 = (state_42093[(2)]);
var inst_42035 = (inst_42034__$1 == null);
var state_42093__$1 = (function (){var statearr_42099 = state_42093;
(statearr_42099[(13)] = inst_42034__$1);

return statearr_42099;
})();
if(cljs.core.truth_(inst_42035)){
var statearr_42100_42139 = state_42093__$1;
(statearr_42100_42139[(1)] = (5));

} else {
var statearr_42101_42140 = state_42093__$1;
(statearr_42101_42140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42094 === (15))){
var state_42093__$1 = state_42093;
var statearr_42105_42141 = state_42093__$1;
(statearr_42105_42141[(2)] = null);

(statearr_42105_42141[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42094 === (21))){
var state_42093__$1 = state_42093;
var statearr_42106_42142 = state_42093__$1;
(statearr_42106_42142[(2)] = null);

(statearr_42106_42142[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42094 === (13))){
var inst_42045 = (state_42093[(8)]);
var inst_42048 = (state_42093[(9)]);
var inst_42047 = (state_42093[(11)]);
var inst_42046 = (state_42093[(12)]);
var inst_42055 = (state_42093[(2)]);
var inst_42056 = (inst_42048 + (1));
var tmp42102 = inst_42045;
var tmp42103 = inst_42047;
var tmp42104 = inst_42046;
var inst_42045__$1 = tmp42102;
var inst_42046__$1 = tmp42104;
var inst_42047__$1 = tmp42103;
var inst_42048__$1 = inst_42056;
var state_42093__$1 = (function (){var statearr_42107 = state_42093;
(statearr_42107[(8)] = inst_42045__$1);

(statearr_42107[(9)] = inst_42048__$1);

(statearr_42107[(11)] = inst_42047__$1);

(statearr_42107[(12)] = inst_42046__$1);

(statearr_42107[(14)] = inst_42055);

return statearr_42107;
})();
var statearr_42108_42143 = state_42093__$1;
(statearr_42108_42143[(2)] = null);

(statearr_42108_42143[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42094 === (22))){
var state_42093__$1 = state_42093;
var statearr_42109_42144 = state_42093__$1;
(statearr_42109_42144[(2)] = null);

(statearr_42109_42144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42094 === (6))){
var inst_42034 = (state_42093[(13)]);
var inst_42043 = f.call(null,inst_42034);
var inst_42044 = cljs.core.seq.call(null,inst_42043);
var inst_42045 = inst_42044;
var inst_42046 = null;
var inst_42047 = (0);
var inst_42048 = (0);
var state_42093__$1 = (function (){var statearr_42110 = state_42093;
(statearr_42110[(8)] = inst_42045);

(statearr_42110[(9)] = inst_42048);

(statearr_42110[(11)] = inst_42047);

(statearr_42110[(12)] = inst_42046);

return statearr_42110;
})();
var statearr_42111_42145 = state_42093__$1;
(statearr_42111_42145[(2)] = null);

(statearr_42111_42145[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42094 === (17))){
var inst_42059 = (state_42093[(7)]);
var inst_42063 = cljs.core.chunk_first.call(null,inst_42059);
var inst_42064 = cljs.core.chunk_rest.call(null,inst_42059);
var inst_42065 = cljs.core.count.call(null,inst_42063);
var inst_42045 = inst_42064;
var inst_42046 = inst_42063;
var inst_42047 = inst_42065;
var inst_42048 = (0);
var state_42093__$1 = (function (){var statearr_42112 = state_42093;
(statearr_42112[(8)] = inst_42045);

(statearr_42112[(9)] = inst_42048);

(statearr_42112[(11)] = inst_42047);

(statearr_42112[(12)] = inst_42046);

return statearr_42112;
})();
var statearr_42113_42146 = state_42093__$1;
(statearr_42113_42146[(2)] = null);

(statearr_42113_42146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42094 === (3))){
var inst_42091 = (state_42093[(2)]);
var state_42093__$1 = state_42093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42093__$1,inst_42091);
} else {
if((state_val_42094 === (12))){
var inst_42079 = (state_42093[(2)]);
var state_42093__$1 = state_42093;
var statearr_42114_42147 = state_42093__$1;
(statearr_42114_42147[(2)] = inst_42079);

(statearr_42114_42147[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42094 === (2))){
var state_42093__$1 = state_42093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42093__$1,(4),in$);
} else {
if((state_val_42094 === (23))){
var inst_42087 = (state_42093[(2)]);
var state_42093__$1 = state_42093;
var statearr_42115_42148 = state_42093__$1;
(statearr_42115_42148[(2)] = inst_42087);

(statearr_42115_42148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42094 === (19))){
var inst_42074 = (state_42093[(2)]);
var state_42093__$1 = state_42093;
var statearr_42116_42149 = state_42093__$1;
(statearr_42116_42149[(2)] = inst_42074);

(statearr_42116_42149[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42094 === (11))){
var inst_42045 = (state_42093[(8)]);
var inst_42059 = (state_42093[(7)]);
var inst_42059__$1 = cljs.core.seq.call(null,inst_42045);
var state_42093__$1 = (function (){var statearr_42117 = state_42093;
(statearr_42117[(7)] = inst_42059__$1);

return statearr_42117;
})();
if(inst_42059__$1){
var statearr_42118_42150 = state_42093__$1;
(statearr_42118_42150[(1)] = (14));

} else {
var statearr_42119_42151 = state_42093__$1;
(statearr_42119_42151[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42094 === (9))){
var inst_42081 = (state_42093[(2)]);
var inst_42082 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_42093__$1 = (function (){var statearr_42120 = state_42093;
(statearr_42120[(15)] = inst_42081);

return statearr_42120;
})();
if(cljs.core.truth_(inst_42082)){
var statearr_42121_42152 = state_42093__$1;
(statearr_42121_42152[(1)] = (21));

} else {
var statearr_42122_42153 = state_42093__$1;
(statearr_42122_42153[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42094 === (5))){
var inst_42037 = cljs.core.async.close_BANG_.call(null,out);
var state_42093__$1 = state_42093;
var statearr_42123_42154 = state_42093__$1;
(statearr_42123_42154[(2)] = inst_42037);

(statearr_42123_42154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42094 === (14))){
var inst_42059 = (state_42093[(7)]);
var inst_42061 = cljs.core.chunked_seq_QMARK_.call(null,inst_42059);
var state_42093__$1 = state_42093;
if(inst_42061){
var statearr_42124_42155 = state_42093__$1;
(statearr_42124_42155[(1)] = (17));

} else {
var statearr_42125_42156 = state_42093__$1;
(statearr_42125_42156[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42094 === (16))){
var inst_42077 = (state_42093[(2)]);
var state_42093__$1 = state_42093;
var statearr_42126_42157 = state_42093__$1;
(statearr_42126_42157[(2)] = inst_42077);

(statearr_42126_42157[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42094 === (10))){
var inst_42048 = (state_42093[(9)]);
var inst_42046 = (state_42093[(12)]);
var inst_42053 = cljs.core._nth.call(null,inst_42046,inst_42048);
var state_42093__$1 = state_42093;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42093__$1,(13),out,inst_42053);
} else {
if((state_val_42094 === (18))){
var inst_42059 = (state_42093[(7)]);
var inst_42068 = cljs.core.first.call(null,inst_42059);
var state_42093__$1 = state_42093;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42093__$1,(20),out,inst_42068);
} else {
if((state_val_42094 === (8))){
var inst_42048 = (state_42093[(9)]);
var inst_42047 = (state_42093[(11)]);
var inst_42050 = (inst_42048 < inst_42047);
var inst_42051 = inst_42050;
var state_42093__$1 = state_42093;
if(cljs.core.truth_(inst_42051)){
var statearr_42127_42158 = state_42093__$1;
(statearr_42127_42158[(1)] = (10));

} else {
var statearr_42128_42159 = state_42093__$1;
(statearr_42128_42159[(1)] = (11));

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
});})(c__20183__auto__))
;
return ((function (switch__20118__auto__,c__20183__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20119__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20119__auto____0 = (function (){
var statearr_42132 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42132[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20119__auto__);

(statearr_42132[(1)] = (1));

return statearr_42132;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20119__auto____1 = (function (state_42093){
while(true){
var ret_value__20120__auto__ = (function (){try{while(true){
var result__20121__auto__ = switch__20118__auto__.call(null,state_42093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20121__auto__;
}
break;
}
}catch (e42133){if((e42133 instanceof Object)){
var ex__20122__auto__ = e42133;
var statearr_42134_42160 = state_42093;
(statearr_42134_42160[(5)] = ex__20122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42161 = state_42093;
state_42093 = G__42161;
continue;
} else {
return ret_value__20120__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20119__auto__ = function(state_42093){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20119__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20119__auto____1.call(this,state_42093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20119__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20119__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20119__auto__;
})()
;})(switch__20118__auto__,c__20183__auto__))
})();
var state__20185__auto__ = (function (){var statearr_42135 = f__20184__auto__.call(null);
(statearr_42135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20183__auto__);

return statearr_42135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20185__auto__);
});})(c__20183__auto__))
);

return c__20183__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args42162 = [];
var len__17402__auto___42165 = arguments.length;
var i__17403__auto___42166 = (0);
while(true){
if((i__17403__auto___42166 < len__17402__auto___42165)){
args42162.push((arguments[i__17403__auto___42166]));

var G__42167 = (i__17403__auto___42166 + (1));
i__17403__auto___42166 = G__42167;
continue;
} else {
}
break;
}

var G__42164 = args42162.length;
switch (G__42164) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42162.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args42169 = [];
var len__17402__auto___42172 = arguments.length;
var i__17403__auto___42173 = (0);
while(true){
if((i__17403__auto___42173 < len__17402__auto___42172)){
args42169.push((arguments[i__17403__auto___42173]));

var G__42174 = (i__17403__auto___42173 + (1));
i__17403__auto___42173 = G__42174;
continue;
} else {
}
break;
}

var G__42171 = args42169.length;
switch (G__42171) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42169.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args42176 = [];
var len__17402__auto___42227 = arguments.length;
var i__17403__auto___42228 = (0);
while(true){
if((i__17403__auto___42228 < len__17402__auto___42227)){
args42176.push((arguments[i__17403__auto___42228]));

var G__42229 = (i__17403__auto___42228 + (1));
i__17403__auto___42228 = G__42229;
continue;
} else {
}
break;
}

var G__42178 = args42176.length;
switch (G__42178) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42176.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20183__auto___42231 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20183__auto___42231,out){
return (function (){
var f__20184__auto__ = (function (){var switch__20118__auto__ = ((function (c__20183__auto___42231,out){
return (function (state_42202){
var state_val_42203 = (state_42202[(1)]);
if((state_val_42203 === (7))){
var inst_42197 = (state_42202[(2)]);
var state_42202__$1 = state_42202;
var statearr_42204_42232 = state_42202__$1;
(statearr_42204_42232[(2)] = inst_42197);

(statearr_42204_42232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42203 === (1))){
var inst_42179 = null;
var state_42202__$1 = (function (){var statearr_42205 = state_42202;
(statearr_42205[(7)] = inst_42179);

return statearr_42205;
})();
var statearr_42206_42233 = state_42202__$1;
(statearr_42206_42233[(2)] = null);

(statearr_42206_42233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42203 === (4))){
var inst_42182 = (state_42202[(8)]);
var inst_42182__$1 = (state_42202[(2)]);
var inst_42183 = (inst_42182__$1 == null);
var inst_42184 = cljs.core.not.call(null,inst_42183);
var state_42202__$1 = (function (){var statearr_42207 = state_42202;
(statearr_42207[(8)] = inst_42182__$1);

return statearr_42207;
})();
if(inst_42184){
var statearr_42208_42234 = state_42202__$1;
(statearr_42208_42234[(1)] = (5));

} else {
var statearr_42209_42235 = state_42202__$1;
(statearr_42209_42235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42203 === (6))){
var state_42202__$1 = state_42202;
var statearr_42210_42236 = state_42202__$1;
(statearr_42210_42236[(2)] = null);

(statearr_42210_42236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42203 === (3))){
var inst_42199 = (state_42202[(2)]);
var inst_42200 = cljs.core.async.close_BANG_.call(null,out);
var state_42202__$1 = (function (){var statearr_42211 = state_42202;
(statearr_42211[(9)] = inst_42199);

return statearr_42211;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42202__$1,inst_42200);
} else {
if((state_val_42203 === (2))){
var state_42202__$1 = state_42202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42202__$1,(4),ch);
} else {
if((state_val_42203 === (11))){
var inst_42182 = (state_42202[(8)]);
var inst_42191 = (state_42202[(2)]);
var inst_42179 = inst_42182;
var state_42202__$1 = (function (){var statearr_42212 = state_42202;
(statearr_42212[(7)] = inst_42179);

(statearr_42212[(10)] = inst_42191);

return statearr_42212;
})();
var statearr_42213_42237 = state_42202__$1;
(statearr_42213_42237[(2)] = null);

(statearr_42213_42237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42203 === (9))){
var inst_42182 = (state_42202[(8)]);
var state_42202__$1 = state_42202;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42202__$1,(11),out,inst_42182);
} else {
if((state_val_42203 === (5))){
var inst_42179 = (state_42202[(7)]);
var inst_42182 = (state_42202[(8)]);
var inst_42186 = cljs.core._EQ_.call(null,inst_42182,inst_42179);
var state_42202__$1 = state_42202;
if(inst_42186){
var statearr_42215_42238 = state_42202__$1;
(statearr_42215_42238[(1)] = (8));

} else {
var statearr_42216_42239 = state_42202__$1;
(statearr_42216_42239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42203 === (10))){
var inst_42194 = (state_42202[(2)]);
var state_42202__$1 = state_42202;
var statearr_42217_42240 = state_42202__$1;
(statearr_42217_42240[(2)] = inst_42194);

(statearr_42217_42240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42203 === (8))){
var inst_42179 = (state_42202[(7)]);
var tmp42214 = inst_42179;
var inst_42179__$1 = tmp42214;
var state_42202__$1 = (function (){var statearr_42218 = state_42202;
(statearr_42218[(7)] = inst_42179__$1);

return statearr_42218;
})();
var statearr_42219_42241 = state_42202__$1;
(statearr_42219_42241[(2)] = null);

(statearr_42219_42241[(1)] = (2));


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
});})(c__20183__auto___42231,out))
;
return ((function (switch__20118__auto__,c__20183__auto___42231,out){
return (function() {
var cljs$core$async$state_machine__20119__auto__ = null;
var cljs$core$async$state_machine__20119__auto____0 = (function (){
var statearr_42223 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42223[(0)] = cljs$core$async$state_machine__20119__auto__);

(statearr_42223[(1)] = (1));

return statearr_42223;
});
var cljs$core$async$state_machine__20119__auto____1 = (function (state_42202){
while(true){
var ret_value__20120__auto__ = (function (){try{while(true){
var result__20121__auto__ = switch__20118__auto__.call(null,state_42202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20121__auto__;
}
break;
}
}catch (e42224){if((e42224 instanceof Object)){
var ex__20122__auto__ = e42224;
var statearr_42225_42242 = state_42202;
(statearr_42225_42242[(5)] = ex__20122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42224;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42243 = state_42202;
state_42202 = G__42243;
continue;
} else {
return ret_value__20120__auto__;
}
break;
}
});
cljs$core$async$state_machine__20119__auto__ = function(state_42202){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20119__auto____1.call(this,state_42202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20119__auto____0;
cljs$core$async$state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20119__auto____1;
return cljs$core$async$state_machine__20119__auto__;
})()
;})(switch__20118__auto__,c__20183__auto___42231,out))
})();
var state__20185__auto__ = (function (){var statearr_42226 = f__20184__auto__.call(null);
(statearr_42226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20183__auto___42231);

return statearr_42226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20185__auto__);
});})(c__20183__auto___42231,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args42244 = [];
var len__17402__auto___42314 = arguments.length;
var i__17403__auto___42315 = (0);
while(true){
if((i__17403__auto___42315 < len__17402__auto___42314)){
args42244.push((arguments[i__17403__auto___42315]));

var G__42316 = (i__17403__auto___42315 + (1));
i__17403__auto___42315 = G__42316;
continue;
} else {
}
break;
}

var G__42246 = args42244.length;
switch (G__42246) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42244.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20183__auto___42318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20183__auto___42318,out){
return (function (){
var f__20184__auto__ = (function (){var switch__20118__auto__ = ((function (c__20183__auto___42318,out){
return (function (state_42284){
var state_val_42285 = (state_42284[(1)]);
if((state_val_42285 === (7))){
var inst_42280 = (state_42284[(2)]);
var state_42284__$1 = state_42284;
var statearr_42286_42319 = state_42284__$1;
(statearr_42286_42319[(2)] = inst_42280);

(statearr_42286_42319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42285 === (1))){
var inst_42247 = (new Array(n));
var inst_42248 = inst_42247;
var inst_42249 = (0);
var state_42284__$1 = (function (){var statearr_42287 = state_42284;
(statearr_42287[(7)] = inst_42249);

(statearr_42287[(8)] = inst_42248);

return statearr_42287;
})();
var statearr_42288_42320 = state_42284__$1;
(statearr_42288_42320[(2)] = null);

(statearr_42288_42320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42285 === (4))){
var inst_42252 = (state_42284[(9)]);
var inst_42252__$1 = (state_42284[(2)]);
var inst_42253 = (inst_42252__$1 == null);
var inst_42254 = cljs.core.not.call(null,inst_42253);
var state_42284__$1 = (function (){var statearr_42289 = state_42284;
(statearr_42289[(9)] = inst_42252__$1);

return statearr_42289;
})();
if(inst_42254){
var statearr_42290_42321 = state_42284__$1;
(statearr_42290_42321[(1)] = (5));

} else {
var statearr_42291_42322 = state_42284__$1;
(statearr_42291_42322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42285 === (15))){
var inst_42274 = (state_42284[(2)]);
var state_42284__$1 = state_42284;
var statearr_42292_42323 = state_42284__$1;
(statearr_42292_42323[(2)] = inst_42274);

(statearr_42292_42323[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42285 === (13))){
var state_42284__$1 = state_42284;
var statearr_42293_42324 = state_42284__$1;
(statearr_42293_42324[(2)] = null);

(statearr_42293_42324[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42285 === (6))){
var inst_42249 = (state_42284[(7)]);
var inst_42270 = (inst_42249 > (0));
var state_42284__$1 = state_42284;
if(cljs.core.truth_(inst_42270)){
var statearr_42294_42325 = state_42284__$1;
(statearr_42294_42325[(1)] = (12));

} else {
var statearr_42295_42326 = state_42284__$1;
(statearr_42295_42326[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42285 === (3))){
var inst_42282 = (state_42284[(2)]);
var state_42284__$1 = state_42284;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42284__$1,inst_42282);
} else {
if((state_val_42285 === (12))){
var inst_42248 = (state_42284[(8)]);
var inst_42272 = cljs.core.vec.call(null,inst_42248);
var state_42284__$1 = state_42284;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42284__$1,(15),out,inst_42272);
} else {
if((state_val_42285 === (2))){
var state_42284__$1 = state_42284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42284__$1,(4),ch);
} else {
if((state_val_42285 === (11))){
var inst_42264 = (state_42284[(2)]);
var inst_42265 = (new Array(n));
var inst_42248 = inst_42265;
var inst_42249 = (0);
var state_42284__$1 = (function (){var statearr_42296 = state_42284;
(statearr_42296[(10)] = inst_42264);

(statearr_42296[(7)] = inst_42249);

(statearr_42296[(8)] = inst_42248);

return statearr_42296;
})();
var statearr_42297_42327 = state_42284__$1;
(statearr_42297_42327[(2)] = null);

(statearr_42297_42327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42285 === (9))){
var inst_42248 = (state_42284[(8)]);
var inst_42262 = cljs.core.vec.call(null,inst_42248);
var state_42284__$1 = state_42284;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42284__$1,(11),out,inst_42262);
} else {
if((state_val_42285 === (5))){
var inst_42257 = (state_42284[(11)]);
var inst_42249 = (state_42284[(7)]);
var inst_42248 = (state_42284[(8)]);
var inst_42252 = (state_42284[(9)]);
var inst_42256 = (inst_42248[inst_42249] = inst_42252);
var inst_42257__$1 = (inst_42249 + (1));
var inst_42258 = (inst_42257__$1 < n);
var state_42284__$1 = (function (){var statearr_42298 = state_42284;
(statearr_42298[(11)] = inst_42257__$1);

(statearr_42298[(12)] = inst_42256);

return statearr_42298;
})();
if(cljs.core.truth_(inst_42258)){
var statearr_42299_42328 = state_42284__$1;
(statearr_42299_42328[(1)] = (8));

} else {
var statearr_42300_42329 = state_42284__$1;
(statearr_42300_42329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42285 === (14))){
var inst_42277 = (state_42284[(2)]);
var inst_42278 = cljs.core.async.close_BANG_.call(null,out);
var state_42284__$1 = (function (){var statearr_42302 = state_42284;
(statearr_42302[(13)] = inst_42277);

return statearr_42302;
})();
var statearr_42303_42330 = state_42284__$1;
(statearr_42303_42330[(2)] = inst_42278);

(statearr_42303_42330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42285 === (10))){
var inst_42268 = (state_42284[(2)]);
var state_42284__$1 = state_42284;
var statearr_42304_42331 = state_42284__$1;
(statearr_42304_42331[(2)] = inst_42268);

(statearr_42304_42331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42285 === (8))){
var inst_42257 = (state_42284[(11)]);
var inst_42248 = (state_42284[(8)]);
var tmp42301 = inst_42248;
var inst_42248__$1 = tmp42301;
var inst_42249 = inst_42257;
var state_42284__$1 = (function (){var statearr_42305 = state_42284;
(statearr_42305[(7)] = inst_42249);

(statearr_42305[(8)] = inst_42248__$1);

return statearr_42305;
})();
var statearr_42306_42332 = state_42284__$1;
(statearr_42306_42332[(2)] = null);

(statearr_42306_42332[(1)] = (2));


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
});})(c__20183__auto___42318,out))
;
return ((function (switch__20118__auto__,c__20183__auto___42318,out){
return (function() {
var cljs$core$async$state_machine__20119__auto__ = null;
var cljs$core$async$state_machine__20119__auto____0 = (function (){
var statearr_42310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42310[(0)] = cljs$core$async$state_machine__20119__auto__);

(statearr_42310[(1)] = (1));

return statearr_42310;
});
var cljs$core$async$state_machine__20119__auto____1 = (function (state_42284){
while(true){
var ret_value__20120__auto__ = (function (){try{while(true){
var result__20121__auto__ = switch__20118__auto__.call(null,state_42284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20121__auto__;
}
break;
}
}catch (e42311){if((e42311 instanceof Object)){
var ex__20122__auto__ = e42311;
var statearr_42312_42333 = state_42284;
(statearr_42312_42333[(5)] = ex__20122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42334 = state_42284;
state_42284 = G__42334;
continue;
} else {
return ret_value__20120__auto__;
}
break;
}
});
cljs$core$async$state_machine__20119__auto__ = function(state_42284){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20119__auto____1.call(this,state_42284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20119__auto____0;
cljs$core$async$state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20119__auto____1;
return cljs$core$async$state_machine__20119__auto__;
})()
;})(switch__20118__auto__,c__20183__auto___42318,out))
})();
var state__20185__auto__ = (function (){var statearr_42313 = f__20184__auto__.call(null);
(statearr_42313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20183__auto___42318);

return statearr_42313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20185__auto__);
});})(c__20183__auto___42318,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args42335 = [];
var len__17402__auto___42409 = arguments.length;
var i__17403__auto___42410 = (0);
while(true){
if((i__17403__auto___42410 < len__17402__auto___42409)){
args42335.push((arguments[i__17403__auto___42410]));

var G__42411 = (i__17403__auto___42410 + (1));
i__17403__auto___42410 = G__42411;
continue;
} else {
}
break;
}

var G__42337 = args42335.length;
switch (G__42337) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42335.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20183__auto___42413 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20183__auto___42413,out){
return (function (){
var f__20184__auto__ = (function (){var switch__20118__auto__ = ((function (c__20183__auto___42413,out){
return (function (state_42379){
var state_val_42380 = (state_42379[(1)]);
if((state_val_42380 === (7))){
var inst_42375 = (state_42379[(2)]);
var state_42379__$1 = state_42379;
var statearr_42381_42414 = state_42379__$1;
(statearr_42381_42414[(2)] = inst_42375);

(statearr_42381_42414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (1))){
var inst_42338 = [];
var inst_42339 = inst_42338;
var inst_42340 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_42379__$1 = (function (){var statearr_42382 = state_42379;
(statearr_42382[(7)] = inst_42340);

(statearr_42382[(8)] = inst_42339);

return statearr_42382;
})();
var statearr_42383_42415 = state_42379__$1;
(statearr_42383_42415[(2)] = null);

(statearr_42383_42415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (4))){
var inst_42343 = (state_42379[(9)]);
var inst_42343__$1 = (state_42379[(2)]);
var inst_42344 = (inst_42343__$1 == null);
var inst_42345 = cljs.core.not.call(null,inst_42344);
var state_42379__$1 = (function (){var statearr_42384 = state_42379;
(statearr_42384[(9)] = inst_42343__$1);

return statearr_42384;
})();
if(inst_42345){
var statearr_42385_42416 = state_42379__$1;
(statearr_42385_42416[(1)] = (5));

} else {
var statearr_42386_42417 = state_42379__$1;
(statearr_42386_42417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (15))){
var inst_42369 = (state_42379[(2)]);
var state_42379__$1 = state_42379;
var statearr_42387_42418 = state_42379__$1;
(statearr_42387_42418[(2)] = inst_42369);

(statearr_42387_42418[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (13))){
var state_42379__$1 = state_42379;
var statearr_42388_42419 = state_42379__$1;
(statearr_42388_42419[(2)] = null);

(statearr_42388_42419[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (6))){
var inst_42339 = (state_42379[(8)]);
var inst_42364 = inst_42339.length;
var inst_42365 = (inst_42364 > (0));
var state_42379__$1 = state_42379;
if(cljs.core.truth_(inst_42365)){
var statearr_42389_42420 = state_42379__$1;
(statearr_42389_42420[(1)] = (12));

} else {
var statearr_42390_42421 = state_42379__$1;
(statearr_42390_42421[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (3))){
var inst_42377 = (state_42379[(2)]);
var state_42379__$1 = state_42379;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42379__$1,inst_42377);
} else {
if((state_val_42380 === (12))){
var inst_42339 = (state_42379[(8)]);
var inst_42367 = cljs.core.vec.call(null,inst_42339);
var state_42379__$1 = state_42379;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42379__$1,(15),out,inst_42367);
} else {
if((state_val_42380 === (2))){
var state_42379__$1 = state_42379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42379__$1,(4),ch);
} else {
if((state_val_42380 === (11))){
var inst_42347 = (state_42379[(10)]);
var inst_42343 = (state_42379[(9)]);
var inst_42357 = (state_42379[(2)]);
var inst_42358 = [];
var inst_42359 = inst_42358.push(inst_42343);
var inst_42339 = inst_42358;
var inst_42340 = inst_42347;
var state_42379__$1 = (function (){var statearr_42391 = state_42379;
(statearr_42391[(11)] = inst_42359);

(statearr_42391[(7)] = inst_42340);

(statearr_42391[(12)] = inst_42357);

(statearr_42391[(8)] = inst_42339);

return statearr_42391;
})();
var statearr_42392_42422 = state_42379__$1;
(statearr_42392_42422[(2)] = null);

(statearr_42392_42422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (9))){
var inst_42339 = (state_42379[(8)]);
var inst_42355 = cljs.core.vec.call(null,inst_42339);
var state_42379__$1 = state_42379;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42379__$1,(11),out,inst_42355);
} else {
if((state_val_42380 === (5))){
var inst_42347 = (state_42379[(10)]);
var inst_42340 = (state_42379[(7)]);
var inst_42343 = (state_42379[(9)]);
var inst_42347__$1 = f.call(null,inst_42343);
var inst_42348 = cljs.core._EQ_.call(null,inst_42347__$1,inst_42340);
var inst_42349 = cljs.core.keyword_identical_QMARK_.call(null,inst_42340,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_42350 = (inst_42348) || (inst_42349);
var state_42379__$1 = (function (){var statearr_42393 = state_42379;
(statearr_42393[(10)] = inst_42347__$1);

return statearr_42393;
})();
if(cljs.core.truth_(inst_42350)){
var statearr_42394_42423 = state_42379__$1;
(statearr_42394_42423[(1)] = (8));

} else {
var statearr_42395_42424 = state_42379__$1;
(statearr_42395_42424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (14))){
var inst_42372 = (state_42379[(2)]);
var inst_42373 = cljs.core.async.close_BANG_.call(null,out);
var state_42379__$1 = (function (){var statearr_42397 = state_42379;
(statearr_42397[(13)] = inst_42372);

return statearr_42397;
})();
var statearr_42398_42425 = state_42379__$1;
(statearr_42398_42425[(2)] = inst_42373);

(statearr_42398_42425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (10))){
var inst_42362 = (state_42379[(2)]);
var state_42379__$1 = state_42379;
var statearr_42399_42426 = state_42379__$1;
(statearr_42399_42426[(2)] = inst_42362);

(statearr_42399_42426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42380 === (8))){
var inst_42347 = (state_42379[(10)]);
var inst_42343 = (state_42379[(9)]);
var inst_42339 = (state_42379[(8)]);
var inst_42352 = inst_42339.push(inst_42343);
var tmp42396 = inst_42339;
var inst_42339__$1 = tmp42396;
var inst_42340 = inst_42347;
var state_42379__$1 = (function (){var statearr_42400 = state_42379;
(statearr_42400[(7)] = inst_42340);

(statearr_42400[(8)] = inst_42339__$1);

(statearr_42400[(14)] = inst_42352);

return statearr_42400;
})();
var statearr_42401_42427 = state_42379__$1;
(statearr_42401_42427[(2)] = null);

(statearr_42401_42427[(1)] = (2));


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
});})(c__20183__auto___42413,out))
;
return ((function (switch__20118__auto__,c__20183__auto___42413,out){
return (function() {
var cljs$core$async$state_machine__20119__auto__ = null;
var cljs$core$async$state_machine__20119__auto____0 = (function (){
var statearr_42405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42405[(0)] = cljs$core$async$state_machine__20119__auto__);

(statearr_42405[(1)] = (1));

return statearr_42405;
});
var cljs$core$async$state_machine__20119__auto____1 = (function (state_42379){
while(true){
var ret_value__20120__auto__ = (function (){try{while(true){
var result__20121__auto__ = switch__20118__auto__.call(null,state_42379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20121__auto__;
}
break;
}
}catch (e42406){if((e42406 instanceof Object)){
var ex__20122__auto__ = e42406;
var statearr_42407_42428 = state_42379;
(statearr_42407_42428[(5)] = ex__20122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42429 = state_42379;
state_42379 = G__42429;
continue;
} else {
return ret_value__20120__auto__;
}
break;
}
});
cljs$core$async$state_machine__20119__auto__ = function(state_42379){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20119__auto____1.call(this,state_42379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20119__auto____0;
cljs$core$async$state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20119__auto____1;
return cljs$core$async$state_machine__20119__auto__;
})()
;})(switch__20118__auto__,c__20183__auto___42413,out))
})();
var state__20185__auto__ = (function (){var statearr_42408 = f__20184__auto__.call(null);
(statearr_42408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20183__auto___42413);

return statearr_42408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20185__auto__);
});})(c__20183__auto___42413,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1446795347922