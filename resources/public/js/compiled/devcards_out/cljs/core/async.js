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
if(typeof cljs.core.async.t_cljs$core$async34500 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34500 = (function (fn_handler,f,meta34501){
this.fn_handler = fn_handler;
this.f = f;
this.meta34501 = meta34501;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34502,meta34501__$1){
var self__ = this;
var _34502__$1 = this;
return (new cljs.core.async.t_cljs$core$async34500(self__.fn_handler,self__.f,meta34501__$1));
});

cljs.core.async.t_cljs$core$async34500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34502){
var self__ = this;
var _34502__$1 = this;
return self__.meta34501;
});

cljs.core.async.t_cljs$core$async34500.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34500.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34500.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34500.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta34501","meta34501",2035110828,null)], null);
});

cljs.core.async.t_cljs$core$async34500.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34500.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34500";

cljs.core.async.t_cljs$core$async34500.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async34500");
});

cljs.core.async.__GT_t_cljs$core$async34500 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async34500(fn_handler__$1,f__$1,meta34501){
return (new cljs.core.async.t_cljs$core$async34500(fn_handler__$1,f__$1,meta34501));
});

}

return (new cljs.core.async.t_cljs$core$async34500(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args34505 = [];
var len__17402__auto___34508 = arguments.length;
var i__17403__auto___34509 = (0);
while(true){
if((i__17403__auto___34509 < len__17402__auto___34508)){
args34505.push((arguments[i__17403__auto___34509]));

var G__34510 = (i__17403__auto___34509 + (1));
i__17403__auto___34509 = G__34510;
continue;
} else {
}
break;
}

var G__34507 = args34505.length;
switch (G__34507) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34505.length)].join('')));

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
var args34512 = [];
var len__17402__auto___34515 = arguments.length;
var i__17403__auto___34516 = (0);
while(true){
if((i__17403__auto___34516 < len__17402__auto___34515)){
args34512.push((arguments[i__17403__auto___34516]));

var G__34517 = (i__17403__auto___34516 + (1));
i__17403__auto___34516 = G__34517;
continue;
} else {
}
break;
}

var G__34514 = args34512.length;
switch (G__34514) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34512.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_34519 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34519);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34519,ret){
return (function (){
return fn1.call(null,val_34519);
});})(val_34519,ret))
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
var args34520 = [];
var len__17402__auto___34523 = arguments.length;
var i__17403__auto___34524 = (0);
while(true){
if((i__17403__auto___34524 < len__17402__auto___34523)){
args34520.push((arguments[i__17403__auto___34524]));

var G__34525 = (i__17403__auto___34524 + (1));
i__17403__auto___34524 = G__34525;
continue;
} else {
}
break;
}

var G__34522 = args34520.length;
switch (G__34522) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34520.length)].join('')));

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
var n__17247__auto___34527 = n;
var x_34528 = (0);
while(true){
if((x_34528 < n__17247__auto___34527)){
(a[x_34528] = (0));

var G__34529 = (x_34528 + (1));
x_34528 = G__34529;
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

var G__34530 = (i + (1));
i = G__34530;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async34534 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34534 = (function (alt_flag,flag,meta34535){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta34535 = meta34535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34536,meta34535__$1){
var self__ = this;
var _34536__$1 = this;
return (new cljs.core.async.t_cljs$core$async34534(self__.alt_flag,self__.flag,meta34535__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34534.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34536){
var self__ = this;
var _34536__$1 = this;
return self__.meta34535;
});})(flag))
;

cljs.core.async.t_cljs$core$async34534.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34534.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34534.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34534.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34535","meta34535",453150187,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34534.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34534.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34534";

cljs.core.async.t_cljs$core$async34534.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async34534");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async34534 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34534(alt_flag__$1,flag__$1,meta34535){
return (new cljs.core.async.t_cljs$core$async34534(alt_flag__$1,flag__$1,meta34535));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34534(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async34540 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34540 = (function (alt_handler,flag,cb,meta34541){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta34541 = meta34541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34542,meta34541__$1){
var self__ = this;
var _34542__$1 = this;
return (new cljs.core.async.t_cljs$core$async34540(self__.alt_handler,self__.flag,self__.cb,meta34541__$1));
});

cljs.core.async.t_cljs$core$async34540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34542){
var self__ = this;
var _34542__$1 = this;
return self__.meta34541;
});

cljs.core.async.t_cljs$core$async34540.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34540.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34540.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34540.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34541","meta34541",897322340,null)], null);
});

cljs.core.async.t_cljs$core$async34540.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34540";

cljs.core.async.t_cljs$core$async34540.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async34540");
});

cljs.core.async.__GT_t_cljs$core$async34540 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34540(alt_handler__$1,flag__$1,cb__$1,meta34541){
return (new cljs.core.async.t_cljs$core$async34540(alt_handler__$1,flag__$1,cb__$1,meta34541));
});

}

return (new cljs.core.async.t_cljs$core$async34540(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34543_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34543_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34544_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34544_SHARP_,port], null));
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
var G__34545 = (i + (1));
i = G__34545;
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
var len__17402__auto___34551 = arguments.length;
var i__17403__auto___34552 = (0);
while(true){
if((i__17403__auto___34552 < len__17402__auto___34551)){
args__17409__auto__.push((arguments[i__17403__auto___34552]));

var G__34553 = (i__17403__auto___34552 + (1));
i__17403__auto___34552 = G__34553;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((1) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17410__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34548){
var map__34549 = p__34548;
var map__34549__$1 = ((((!((map__34549 == null)))?((((map__34549.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34549.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34549):map__34549);
var opts = map__34549__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34546){
var G__34547 = cljs.core.first.call(null,seq34546);
var seq34546__$1 = cljs.core.next.call(null,seq34546);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34547,seq34546__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args34554 = [];
var len__17402__auto___34604 = arguments.length;
var i__17403__auto___34605 = (0);
while(true){
if((i__17403__auto___34605 < len__17402__auto___34604)){
args34554.push((arguments[i__17403__auto___34605]));

var G__34606 = (i__17403__auto___34605 + (1));
i__17403__auto___34605 = G__34606;
continue;
} else {
}
break;
}

var G__34556 = args34554.length;
switch (G__34556) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34554.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20184__auto___34608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20184__auto___34608){
return (function (){
var f__20185__auto__ = (function (){var switch__20119__auto__ = ((function (c__20184__auto___34608){
return (function (state_34580){
var state_val_34581 = (state_34580[(1)]);
if((state_val_34581 === (7))){
var inst_34576 = (state_34580[(2)]);
var state_34580__$1 = state_34580;
var statearr_34582_34609 = state_34580__$1;
(statearr_34582_34609[(2)] = inst_34576);

(statearr_34582_34609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (1))){
var state_34580__$1 = state_34580;
var statearr_34583_34610 = state_34580__$1;
(statearr_34583_34610[(2)] = null);

(statearr_34583_34610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (4))){
var inst_34559 = (state_34580[(7)]);
var inst_34559__$1 = (state_34580[(2)]);
var inst_34560 = (inst_34559__$1 == null);
var state_34580__$1 = (function (){var statearr_34584 = state_34580;
(statearr_34584[(7)] = inst_34559__$1);

return statearr_34584;
})();
if(cljs.core.truth_(inst_34560)){
var statearr_34585_34611 = state_34580__$1;
(statearr_34585_34611[(1)] = (5));

} else {
var statearr_34586_34612 = state_34580__$1;
(statearr_34586_34612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (13))){
var state_34580__$1 = state_34580;
var statearr_34587_34613 = state_34580__$1;
(statearr_34587_34613[(2)] = null);

(statearr_34587_34613[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (6))){
var inst_34559 = (state_34580[(7)]);
var state_34580__$1 = state_34580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34580__$1,(11),to,inst_34559);
} else {
if((state_val_34581 === (3))){
var inst_34578 = (state_34580[(2)]);
var state_34580__$1 = state_34580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34580__$1,inst_34578);
} else {
if((state_val_34581 === (12))){
var state_34580__$1 = state_34580;
var statearr_34588_34614 = state_34580__$1;
(statearr_34588_34614[(2)] = null);

(statearr_34588_34614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (2))){
var state_34580__$1 = state_34580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34580__$1,(4),from);
} else {
if((state_val_34581 === (11))){
var inst_34569 = (state_34580[(2)]);
var state_34580__$1 = state_34580;
if(cljs.core.truth_(inst_34569)){
var statearr_34589_34615 = state_34580__$1;
(statearr_34589_34615[(1)] = (12));

} else {
var statearr_34590_34616 = state_34580__$1;
(statearr_34590_34616[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (9))){
var state_34580__$1 = state_34580;
var statearr_34591_34617 = state_34580__$1;
(statearr_34591_34617[(2)] = null);

(statearr_34591_34617[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (5))){
var state_34580__$1 = state_34580;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34592_34618 = state_34580__$1;
(statearr_34592_34618[(1)] = (8));

} else {
var statearr_34593_34619 = state_34580__$1;
(statearr_34593_34619[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (14))){
var inst_34574 = (state_34580[(2)]);
var state_34580__$1 = state_34580;
var statearr_34594_34620 = state_34580__$1;
(statearr_34594_34620[(2)] = inst_34574);

(statearr_34594_34620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (10))){
var inst_34566 = (state_34580[(2)]);
var state_34580__$1 = state_34580;
var statearr_34595_34621 = state_34580__$1;
(statearr_34595_34621[(2)] = inst_34566);

(statearr_34595_34621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (8))){
var inst_34563 = cljs.core.async.close_BANG_.call(null,to);
var state_34580__$1 = state_34580;
var statearr_34596_34622 = state_34580__$1;
(statearr_34596_34622[(2)] = inst_34563);

(statearr_34596_34622[(1)] = (10));


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
});})(c__20184__auto___34608))
;
return ((function (switch__20119__auto__,c__20184__auto___34608){
return (function() {
var cljs$core$async$state_machine__20120__auto__ = null;
var cljs$core$async$state_machine__20120__auto____0 = (function (){
var statearr_34600 = [null,null,null,null,null,null,null,null];
(statearr_34600[(0)] = cljs$core$async$state_machine__20120__auto__);

(statearr_34600[(1)] = (1));

return statearr_34600;
});
var cljs$core$async$state_machine__20120__auto____1 = (function (state_34580){
while(true){
var ret_value__20121__auto__ = (function (){try{while(true){
var result__20122__auto__ = switch__20119__auto__.call(null,state_34580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20122__auto__;
}
break;
}
}catch (e34601){if((e34601 instanceof Object)){
var ex__20123__auto__ = e34601;
var statearr_34602_34623 = state_34580;
(statearr_34602_34623[(5)] = ex__20123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34624 = state_34580;
state_34580 = G__34624;
continue;
} else {
return ret_value__20121__auto__;
}
break;
}
});
cljs$core$async$state_machine__20120__auto__ = function(state_34580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20120__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20120__auto____1.call(this,state_34580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20120__auto____0;
cljs$core$async$state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20120__auto____1;
return cljs$core$async$state_machine__20120__auto__;
})()
;})(switch__20119__auto__,c__20184__auto___34608))
})();
var state__20186__auto__ = (function (){var statearr_34603 = f__20185__auto__.call(null);
(statearr_34603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20184__auto___34608);

return statearr_34603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20186__auto__);
});})(c__20184__auto___34608))
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
return (function (p__34808){
var vec__34809 = p__34808;
var v = cljs.core.nth.call(null,vec__34809,(0),null);
var p = cljs.core.nth.call(null,vec__34809,(1),null);
var job = vec__34809;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20184__auto___34991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20184__auto___34991,res,vec__34809,v,p,job,jobs,results){
return (function (){
var f__20185__auto__ = (function (){var switch__20119__auto__ = ((function (c__20184__auto___34991,res,vec__34809,v,p,job,jobs,results){
return (function (state_34814){
var state_val_34815 = (state_34814[(1)]);
if((state_val_34815 === (1))){
var state_34814__$1 = state_34814;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34814__$1,(2),res,v);
} else {
if((state_val_34815 === (2))){
var inst_34811 = (state_34814[(2)]);
var inst_34812 = cljs.core.async.close_BANG_.call(null,res);
var state_34814__$1 = (function (){var statearr_34816 = state_34814;
(statearr_34816[(7)] = inst_34811);

return statearr_34816;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34814__$1,inst_34812);
} else {
return null;
}
}
});})(c__20184__auto___34991,res,vec__34809,v,p,job,jobs,results))
;
return ((function (switch__20119__auto__,c__20184__auto___34991,res,vec__34809,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20120__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20120__auto____0 = (function (){
var statearr_34820 = [null,null,null,null,null,null,null,null];
(statearr_34820[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20120__auto__);

(statearr_34820[(1)] = (1));

return statearr_34820;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20120__auto____1 = (function (state_34814){
while(true){
var ret_value__20121__auto__ = (function (){try{while(true){
var result__20122__auto__ = switch__20119__auto__.call(null,state_34814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20122__auto__;
}
break;
}
}catch (e34821){if((e34821 instanceof Object)){
var ex__20123__auto__ = e34821;
var statearr_34822_34992 = state_34814;
(statearr_34822_34992[(5)] = ex__20123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34993 = state_34814;
state_34814 = G__34993;
continue;
} else {
return ret_value__20121__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20120__auto__ = function(state_34814){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20120__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20120__auto____1.call(this,state_34814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20120__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20120__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20120__auto__;
})()
;})(switch__20119__auto__,c__20184__auto___34991,res,vec__34809,v,p,job,jobs,results))
})();
var state__20186__auto__ = (function (){var statearr_34823 = f__20185__auto__.call(null);
(statearr_34823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20184__auto___34991);

return statearr_34823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20186__auto__);
});})(c__20184__auto___34991,res,vec__34809,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34824){
var vec__34825 = p__34824;
var v = cljs.core.nth.call(null,vec__34825,(0),null);
var p = cljs.core.nth.call(null,vec__34825,(1),null);
var job = vec__34825;
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
var n__17247__auto___34994 = n;
var __34995 = (0);
while(true){
if((__34995 < n__17247__auto___34994)){
var G__34826_34996 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__34826_34996) {
case "compute":
var c__20184__auto___34998 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34995,c__20184__auto___34998,G__34826_34996,n__17247__auto___34994,jobs,results,process,async){
return (function (){
var f__20185__auto__ = (function (){var switch__20119__auto__ = ((function (__34995,c__20184__auto___34998,G__34826_34996,n__17247__auto___34994,jobs,results,process,async){
return (function (state_34839){
var state_val_34840 = (state_34839[(1)]);
if((state_val_34840 === (1))){
var state_34839__$1 = state_34839;
var statearr_34841_34999 = state_34839__$1;
(statearr_34841_34999[(2)] = null);

(statearr_34841_34999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (2))){
var state_34839__$1 = state_34839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34839__$1,(4),jobs);
} else {
if((state_val_34840 === (3))){
var inst_34837 = (state_34839[(2)]);
var state_34839__$1 = state_34839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34839__$1,inst_34837);
} else {
if((state_val_34840 === (4))){
var inst_34829 = (state_34839[(2)]);
var inst_34830 = process.call(null,inst_34829);
var state_34839__$1 = state_34839;
if(cljs.core.truth_(inst_34830)){
var statearr_34842_35000 = state_34839__$1;
(statearr_34842_35000[(1)] = (5));

} else {
var statearr_34843_35001 = state_34839__$1;
(statearr_34843_35001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (5))){
var state_34839__$1 = state_34839;
var statearr_34844_35002 = state_34839__$1;
(statearr_34844_35002[(2)] = null);

(statearr_34844_35002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (6))){
var state_34839__$1 = state_34839;
var statearr_34845_35003 = state_34839__$1;
(statearr_34845_35003[(2)] = null);

(statearr_34845_35003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (7))){
var inst_34835 = (state_34839[(2)]);
var state_34839__$1 = state_34839;
var statearr_34846_35004 = state_34839__$1;
(statearr_34846_35004[(2)] = inst_34835);

(statearr_34846_35004[(1)] = (3));


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
});})(__34995,c__20184__auto___34998,G__34826_34996,n__17247__auto___34994,jobs,results,process,async))
;
return ((function (__34995,switch__20119__auto__,c__20184__auto___34998,G__34826_34996,n__17247__auto___34994,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20120__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20120__auto____0 = (function (){
var statearr_34850 = [null,null,null,null,null,null,null];
(statearr_34850[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20120__auto__);

(statearr_34850[(1)] = (1));

return statearr_34850;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20120__auto____1 = (function (state_34839){
while(true){
var ret_value__20121__auto__ = (function (){try{while(true){
var result__20122__auto__ = switch__20119__auto__.call(null,state_34839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20122__auto__;
}
break;
}
}catch (e34851){if((e34851 instanceof Object)){
var ex__20123__auto__ = e34851;
var statearr_34852_35005 = state_34839;
(statearr_34852_35005[(5)] = ex__20123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35006 = state_34839;
state_34839 = G__35006;
continue;
} else {
return ret_value__20121__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20120__auto__ = function(state_34839){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20120__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20120__auto____1.call(this,state_34839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20120__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20120__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20120__auto__;
})()
;})(__34995,switch__20119__auto__,c__20184__auto___34998,G__34826_34996,n__17247__auto___34994,jobs,results,process,async))
})();
var state__20186__auto__ = (function (){var statearr_34853 = f__20185__auto__.call(null);
(statearr_34853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20184__auto___34998);

return statearr_34853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20186__auto__);
});})(__34995,c__20184__auto___34998,G__34826_34996,n__17247__auto___34994,jobs,results,process,async))
);


break;
case "async":
var c__20184__auto___35007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34995,c__20184__auto___35007,G__34826_34996,n__17247__auto___34994,jobs,results,process,async){
return (function (){
var f__20185__auto__ = (function (){var switch__20119__auto__ = ((function (__34995,c__20184__auto___35007,G__34826_34996,n__17247__auto___34994,jobs,results,process,async){
return (function (state_34866){
var state_val_34867 = (state_34866[(1)]);
if((state_val_34867 === (1))){
var state_34866__$1 = state_34866;
var statearr_34868_35008 = state_34866__$1;
(statearr_34868_35008[(2)] = null);

(statearr_34868_35008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34867 === (2))){
var state_34866__$1 = state_34866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34866__$1,(4),jobs);
} else {
if((state_val_34867 === (3))){
var inst_34864 = (state_34866[(2)]);
var state_34866__$1 = state_34866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34866__$1,inst_34864);
} else {
if((state_val_34867 === (4))){
var inst_34856 = (state_34866[(2)]);
var inst_34857 = async.call(null,inst_34856);
var state_34866__$1 = state_34866;
if(cljs.core.truth_(inst_34857)){
var statearr_34869_35009 = state_34866__$1;
(statearr_34869_35009[(1)] = (5));

} else {
var statearr_34870_35010 = state_34866__$1;
(statearr_34870_35010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34867 === (5))){
var state_34866__$1 = state_34866;
var statearr_34871_35011 = state_34866__$1;
(statearr_34871_35011[(2)] = null);

(statearr_34871_35011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34867 === (6))){
var state_34866__$1 = state_34866;
var statearr_34872_35012 = state_34866__$1;
(statearr_34872_35012[(2)] = null);

(statearr_34872_35012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34867 === (7))){
var inst_34862 = (state_34866[(2)]);
var state_34866__$1 = state_34866;
var statearr_34873_35013 = state_34866__$1;
(statearr_34873_35013[(2)] = inst_34862);

(statearr_34873_35013[(1)] = (3));


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
});})(__34995,c__20184__auto___35007,G__34826_34996,n__17247__auto___34994,jobs,results,process,async))
;
return ((function (__34995,switch__20119__auto__,c__20184__auto___35007,G__34826_34996,n__17247__auto___34994,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20120__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20120__auto____0 = (function (){
var statearr_34877 = [null,null,null,null,null,null,null];
(statearr_34877[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20120__auto__);

(statearr_34877[(1)] = (1));

return statearr_34877;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20120__auto____1 = (function (state_34866){
while(true){
var ret_value__20121__auto__ = (function (){try{while(true){
var result__20122__auto__ = switch__20119__auto__.call(null,state_34866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20122__auto__;
}
break;
}
}catch (e34878){if((e34878 instanceof Object)){
var ex__20123__auto__ = e34878;
var statearr_34879_35014 = state_34866;
(statearr_34879_35014[(5)] = ex__20123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35015 = state_34866;
state_34866 = G__35015;
continue;
} else {
return ret_value__20121__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20120__auto__ = function(state_34866){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20120__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20120__auto____1.call(this,state_34866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20120__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20120__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20120__auto__;
})()
;})(__34995,switch__20119__auto__,c__20184__auto___35007,G__34826_34996,n__17247__auto___34994,jobs,results,process,async))
})();
var state__20186__auto__ = (function (){var statearr_34880 = f__20185__auto__.call(null);
(statearr_34880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20184__auto___35007);

return statearr_34880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20186__auto__);
});})(__34995,c__20184__auto___35007,G__34826_34996,n__17247__auto___34994,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__35016 = (__34995 + (1));
__34995 = G__35016;
continue;
} else {
}
break;
}

var c__20184__auto___35017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20184__auto___35017,jobs,results,process,async){
return (function (){
var f__20185__auto__ = (function (){var switch__20119__auto__ = ((function (c__20184__auto___35017,jobs,results,process,async){
return (function (state_34902){
var state_val_34903 = (state_34902[(1)]);
if((state_val_34903 === (1))){
var state_34902__$1 = state_34902;
var statearr_34904_35018 = state_34902__$1;
(statearr_34904_35018[(2)] = null);

(statearr_34904_35018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (2))){
var state_34902__$1 = state_34902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34902__$1,(4),from);
} else {
if((state_val_34903 === (3))){
var inst_34900 = (state_34902[(2)]);
var state_34902__$1 = state_34902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34902__$1,inst_34900);
} else {
if((state_val_34903 === (4))){
var inst_34883 = (state_34902[(7)]);
var inst_34883__$1 = (state_34902[(2)]);
var inst_34884 = (inst_34883__$1 == null);
var state_34902__$1 = (function (){var statearr_34905 = state_34902;
(statearr_34905[(7)] = inst_34883__$1);

return statearr_34905;
})();
if(cljs.core.truth_(inst_34884)){
var statearr_34906_35019 = state_34902__$1;
(statearr_34906_35019[(1)] = (5));

} else {
var statearr_34907_35020 = state_34902__$1;
(statearr_34907_35020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (5))){
var inst_34886 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34902__$1 = state_34902;
var statearr_34908_35021 = state_34902__$1;
(statearr_34908_35021[(2)] = inst_34886);

(statearr_34908_35021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (6))){
var inst_34883 = (state_34902[(7)]);
var inst_34888 = (state_34902[(8)]);
var inst_34888__$1 = cljs.core.async.chan.call(null,(1));
var inst_34889 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34890 = [inst_34883,inst_34888__$1];
var inst_34891 = (new cljs.core.PersistentVector(null,2,(5),inst_34889,inst_34890,null));
var state_34902__$1 = (function (){var statearr_34909 = state_34902;
(statearr_34909[(8)] = inst_34888__$1);

return statearr_34909;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34902__$1,(8),jobs,inst_34891);
} else {
if((state_val_34903 === (7))){
var inst_34898 = (state_34902[(2)]);
var state_34902__$1 = state_34902;
var statearr_34910_35022 = state_34902__$1;
(statearr_34910_35022[(2)] = inst_34898);

(statearr_34910_35022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (8))){
var inst_34888 = (state_34902[(8)]);
var inst_34893 = (state_34902[(2)]);
var state_34902__$1 = (function (){var statearr_34911 = state_34902;
(statearr_34911[(9)] = inst_34893);

return statearr_34911;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34902__$1,(9),results,inst_34888);
} else {
if((state_val_34903 === (9))){
var inst_34895 = (state_34902[(2)]);
var state_34902__$1 = (function (){var statearr_34912 = state_34902;
(statearr_34912[(10)] = inst_34895);

return statearr_34912;
})();
var statearr_34913_35023 = state_34902__$1;
(statearr_34913_35023[(2)] = null);

(statearr_34913_35023[(1)] = (2));


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
});})(c__20184__auto___35017,jobs,results,process,async))
;
return ((function (switch__20119__auto__,c__20184__auto___35017,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20120__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20120__auto____0 = (function (){
var statearr_34917 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34917[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20120__auto__);

(statearr_34917[(1)] = (1));

return statearr_34917;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20120__auto____1 = (function (state_34902){
while(true){
var ret_value__20121__auto__ = (function (){try{while(true){
var result__20122__auto__ = switch__20119__auto__.call(null,state_34902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20122__auto__;
}
break;
}
}catch (e34918){if((e34918 instanceof Object)){
var ex__20123__auto__ = e34918;
var statearr_34919_35024 = state_34902;
(statearr_34919_35024[(5)] = ex__20123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35025 = state_34902;
state_34902 = G__35025;
continue;
} else {
return ret_value__20121__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20120__auto__ = function(state_34902){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20120__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20120__auto____1.call(this,state_34902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20120__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20120__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20120__auto__;
})()
;})(switch__20119__auto__,c__20184__auto___35017,jobs,results,process,async))
})();
var state__20186__auto__ = (function (){var statearr_34920 = f__20185__auto__.call(null);
(statearr_34920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20184__auto___35017);

return statearr_34920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20186__auto__);
});})(c__20184__auto___35017,jobs,results,process,async))
);


var c__20184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20184__auto__,jobs,results,process,async){
return (function (){
var f__20185__auto__ = (function (){var switch__20119__auto__ = ((function (c__20184__auto__,jobs,results,process,async){
return (function (state_34958){
var state_val_34959 = (state_34958[(1)]);
if((state_val_34959 === (7))){
var inst_34954 = (state_34958[(2)]);
var state_34958__$1 = state_34958;
var statearr_34960_35026 = state_34958__$1;
(statearr_34960_35026[(2)] = inst_34954);

(statearr_34960_35026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34959 === (20))){
var state_34958__$1 = state_34958;
var statearr_34961_35027 = state_34958__$1;
(statearr_34961_35027[(2)] = null);

(statearr_34961_35027[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34959 === (1))){
var state_34958__$1 = state_34958;
var statearr_34962_35028 = state_34958__$1;
(statearr_34962_35028[(2)] = null);

(statearr_34962_35028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34959 === (4))){
var inst_34923 = (state_34958[(7)]);
var inst_34923__$1 = (state_34958[(2)]);
var inst_34924 = (inst_34923__$1 == null);
var state_34958__$1 = (function (){var statearr_34963 = state_34958;
(statearr_34963[(7)] = inst_34923__$1);

return statearr_34963;
})();
if(cljs.core.truth_(inst_34924)){
var statearr_34964_35029 = state_34958__$1;
(statearr_34964_35029[(1)] = (5));

} else {
var statearr_34965_35030 = state_34958__$1;
(statearr_34965_35030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34959 === (15))){
var inst_34936 = (state_34958[(8)]);
var state_34958__$1 = state_34958;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34958__$1,(18),to,inst_34936);
} else {
if((state_val_34959 === (21))){
var inst_34949 = (state_34958[(2)]);
var state_34958__$1 = state_34958;
var statearr_34966_35031 = state_34958__$1;
(statearr_34966_35031[(2)] = inst_34949);

(statearr_34966_35031[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34959 === (13))){
var inst_34951 = (state_34958[(2)]);
var state_34958__$1 = (function (){var statearr_34967 = state_34958;
(statearr_34967[(9)] = inst_34951);

return statearr_34967;
})();
var statearr_34968_35032 = state_34958__$1;
(statearr_34968_35032[(2)] = null);

(statearr_34968_35032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34959 === (6))){
var inst_34923 = (state_34958[(7)]);
var state_34958__$1 = state_34958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34958__$1,(11),inst_34923);
} else {
if((state_val_34959 === (17))){
var inst_34944 = (state_34958[(2)]);
var state_34958__$1 = state_34958;
if(cljs.core.truth_(inst_34944)){
var statearr_34969_35033 = state_34958__$1;
(statearr_34969_35033[(1)] = (19));

} else {
var statearr_34970_35034 = state_34958__$1;
(statearr_34970_35034[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34959 === (3))){
var inst_34956 = (state_34958[(2)]);
var state_34958__$1 = state_34958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34958__$1,inst_34956);
} else {
if((state_val_34959 === (12))){
var inst_34933 = (state_34958[(10)]);
var state_34958__$1 = state_34958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34958__$1,(14),inst_34933);
} else {
if((state_val_34959 === (2))){
var state_34958__$1 = state_34958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34958__$1,(4),results);
} else {
if((state_val_34959 === (19))){
var state_34958__$1 = state_34958;
var statearr_34971_35035 = state_34958__$1;
(statearr_34971_35035[(2)] = null);

(statearr_34971_35035[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34959 === (11))){
var inst_34933 = (state_34958[(2)]);
var state_34958__$1 = (function (){var statearr_34972 = state_34958;
(statearr_34972[(10)] = inst_34933);

return statearr_34972;
})();
var statearr_34973_35036 = state_34958__$1;
(statearr_34973_35036[(2)] = null);

(statearr_34973_35036[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34959 === (9))){
var state_34958__$1 = state_34958;
var statearr_34974_35037 = state_34958__$1;
(statearr_34974_35037[(2)] = null);

(statearr_34974_35037[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34959 === (5))){
var state_34958__$1 = state_34958;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34975_35038 = state_34958__$1;
(statearr_34975_35038[(1)] = (8));

} else {
var statearr_34976_35039 = state_34958__$1;
(statearr_34976_35039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34959 === (14))){
var inst_34936 = (state_34958[(8)]);
var inst_34938 = (state_34958[(11)]);
var inst_34936__$1 = (state_34958[(2)]);
var inst_34937 = (inst_34936__$1 == null);
var inst_34938__$1 = cljs.core.not.call(null,inst_34937);
var state_34958__$1 = (function (){var statearr_34977 = state_34958;
(statearr_34977[(8)] = inst_34936__$1);

(statearr_34977[(11)] = inst_34938__$1);

return statearr_34977;
})();
if(inst_34938__$1){
var statearr_34978_35040 = state_34958__$1;
(statearr_34978_35040[(1)] = (15));

} else {
var statearr_34979_35041 = state_34958__$1;
(statearr_34979_35041[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34959 === (16))){
var inst_34938 = (state_34958[(11)]);
var state_34958__$1 = state_34958;
var statearr_34980_35042 = state_34958__$1;
(statearr_34980_35042[(2)] = inst_34938);

(statearr_34980_35042[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34959 === (10))){
var inst_34930 = (state_34958[(2)]);
var state_34958__$1 = state_34958;
var statearr_34981_35043 = state_34958__$1;
(statearr_34981_35043[(2)] = inst_34930);

(statearr_34981_35043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34959 === (18))){
var inst_34941 = (state_34958[(2)]);
var state_34958__$1 = state_34958;
var statearr_34982_35044 = state_34958__$1;
(statearr_34982_35044[(2)] = inst_34941);

(statearr_34982_35044[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34959 === (8))){
var inst_34927 = cljs.core.async.close_BANG_.call(null,to);
var state_34958__$1 = state_34958;
var statearr_34983_35045 = state_34958__$1;
(statearr_34983_35045[(2)] = inst_34927);

(statearr_34983_35045[(1)] = (10));


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
});})(c__20184__auto__,jobs,results,process,async))
;
return ((function (switch__20119__auto__,c__20184__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20120__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20120__auto____0 = (function (){
var statearr_34987 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34987[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20120__auto__);

(statearr_34987[(1)] = (1));

return statearr_34987;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20120__auto____1 = (function (state_34958){
while(true){
var ret_value__20121__auto__ = (function (){try{while(true){
var result__20122__auto__ = switch__20119__auto__.call(null,state_34958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20122__auto__;
}
break;
}
}catch (e34988){if((e34988 instanceof Object)){
var ex__20123__auto__ = e34988;
var statearr_34989_35046 = state_34958;
(statearr_34989_35046[(5)] = ex__20123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35047 = state_34958;
state_34958 = G__35047;
continue;
} else {
return ret_value__20121__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20120__auto__ = function(state_34958){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20120__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20120__auto____1.call(this,state_34958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20120__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20120__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20120__auto__;
})()
;})(switch__20119__auto__,c__20184__auto__,jobs,results,process,async))
})();
var state__20186__auto__ = (function (){var statearr_34990 = f__20185__auto__.call(null);
(statearr_34990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20184__auto__);

return statearr_34990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20186__auto__);
});})(c__20184__auto__,jobs,results,process,async))
);

return c__20184__auto__;
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
var args35048 = [];
var len__17402__auto___35051 = arguments.length;
var i__17403__auto___35052 = (0);
while(true){
if((i__17403__auto___35052 < len__17402__auto___35051)){
args35048.push((arguments[i__17403__auto___35052]));

var G__35053 = (i__17403__auto___35052 + (1));
i__17403__auto___35052 = G__35053;
continue;
} else {
}
break;
}

var G__35050 = args35048.length;
switch (G__35050) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35048.length)].join('')));

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
var args35055 = [];
var len__17402__auto___35058 = arguments.length;
var i__17403__auto___35059 = (0);
while(true){
if((i__17403__auto___35059 < len__17402__auto___35058)){
args35055.push((arguments[i__17403__auto___35059]));

var G__35060 = (i__17403__auto___35059 + (1));
i__17403__auto___35059 = G__35060;
continue;
} else {
}
break;
}

var G__35057 = args35055.length;
switch (G__35057) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35055.length)].join('')));

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
var args35062 = [];
var len__17402__auto___35115 = arguments.length;
var i__17403__auto___35116 = (0);
while(true){
if((i__17403__auto___35116 < len__17402__auto___35115)){
args35062.push((arguments[i__17403__auto___35116]));

var G__35117 = (i__17403__auto___35116 + (1));
i__17403__auto___35116 = G__35117;
continue;
} else {
}
break;
}

var G__35064 = args35062.length;
switch (G__35064) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35062.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20184__auto___35119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20184__auto___35119,tc,fc){
return (function (){
var f__20185__auto__ = (function (){var switch__20119__auto__ = ((function (c__20184__auto___35119,tc,fc){
return (function (state_35090){
var state_val_35091 = (state_35090[(1)]);
if((state_val_35091 === (7))){
var inst_35086 = (state_35090[(2)]);
var state_35090__$1 = state_35090;
var statearr_35092_35120 = state_35090__$1;
(statearr_35092_35120[(2)] = inst_35086);

(statearr_35092_35120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (1))){
var state_35090__$1 = state_35090;
var statearr_35093_35121 = state_35090__$1;
(statearr_35093_35121[(2)] = null);

(statearr_35093_35121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (4))){
var inst_35067 = (state_35090[(7)]);
var inst_35067__$1 = (state_35090[(2)]);
var inst_35068 = (inst_35067__$1 == null);
var state_35090__$1 = (function (){var statearr_35094 = state_35090;
(statearr_35094[(7)] = inst_35067__$1);

return statearr_35094;
})();
if(cljs.core.truth_(inst_35068)){
var statearr_35095_35122 = state_35090__$1;
(statearr_35095_35122[(1)] = (5));

} else {
var statearr_35096_35123 = state_35090__$1;
(statearr_35096_35123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (13))){
var state_35090__$1 = state_35090;
var statearr_35097_35124 = state_35090__$1;
(statearr_35097_35124[(2)] = null);

(statearr_35097_35124[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (6))){
var inst_35067 = (state_35090[(7)]);
var inst_35073 = p.call(null,inst_35067);
var state_35090__$1 = state_35090;
if(cljs.core.truth_(inst_35073)){
var statearr_35098_35125 = state_35090__$1;
(statearr_35098_35125[(1)] = (9));

} else {
var statearr_35099_35126 = state_35090__$1;
(statearr_35099_35126[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (3))){
var inst_35088 = (state_35090[(2)]);
var state_35090__$1 = state_35090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35090__$1,inst_35088);
} else {
if((state_val_35091 === (12))){
var state_35090__$1 = state_35090;
var statearr_35100_35127 = state_35090__$1;
(statearr_35100_35127[(2)] = null);

(statearr_35100_35127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (2))){
var state_35090__$1 = state_35090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35090__$1,(4),ch);
} else {
if((state_val_35091 === (11))){
var inst_35067 = (state_35090[(7)]);
var inst_35077 = (state_35090[(2)]);
var state_35090__$1 = state_35090;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35090__$1,(8),inst_35077,inst_35067);
} else {
if((state_val_35091 === (9))){
var state_35090__$1 = state_35090;
var statearr_35101_35128 = state_35090__$1;
(statearr_35101_35128[(2)] = tc);

(statearr_35101_35128[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (5))){
var inst_35070 = cljs.core.async.close_BANG_.call(null,tc);
var inst_35071 = cljs.core.async.close_BANG_.call(null,fc);
var state_35090__$1 = (function (){var statearr_35102 = state_35090;
(statearr_35102[(8)] = inst_35070);

return statearr_35102;
})();
var statearr_35103_35129 = state_35090__$1;
(statearr_35103_35129[(2)] = inst_35071);

(statearr_35103_35129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (14))){
var inst_35084 = (state_35090[(2)]);
var state_35090__$1 = state_35090;
var statearr_35104_35130 = state_35090__$1;
(statearr_35104_35130[(2)] = inst_35084);

(statearr_35104_35130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (10))){
var state_35090__$1 = state_35090;
var statearr_35105_35131 = state_35090__$1;
(statearr_35105_35131[(2)] = fc);

(statearr_35105_35131[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (8))){
var inst_35079 = (state_35090[(2)]);
var state_35090__$1 = state_35090;
if(cljs.core.truth_(inst_35079)){
var statearr_35106_35132 = state_35090__$1;
(statearr_35106_35132[(1)] = (12));

} else {
var statearr_35107_35133 = state_35090__$1;
(statearr_35107_35133[(1)] = (13));

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
});})(c__20184__auto___35119,tc,fc))
;
return ((function (switch__20119__auto__,c__20184__auto___35119,tc,fc){
return (function() {
var cljs$core$async$state_machine__20120__auto__ = null;
var cljs$core$async$state_machine__20120__auto____0 = (function (){
var statearr_35111 = [null,null,null,null,null,null,null,null,null];
(statearr_35111[(0)] = cljs$core$async$state_machine__20120__auto__);

(statearr_35111[(1)] = (1));

return statearr_35111;
});
var cljs$core$async$state_machine__20120__auto____1 = (function (state_35090){
while(true){
var ret_value__20121__auto__ = (function (){try{while(true){
var result__20122__auto__ = switch__20119__auto__.call(null,state_35090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20122__auto__;
}
break;
}
}catch (e35112){if((e35112 instanceof Object)){
var ex__20123__auto__ = e35112;
var statearr_35113_35134 = state_35090;
(statearr_35113_35134[(5)] = ex__20123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35135 = state_35090;
state_35090 = G__35135;
continue;
} else {
return ret_value__20121__auto__;
}
break;
}
});
cljs$core$async$state_machine__20120__auto__ = function(state_35090){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20120__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20120__auto____1.call(this,state_35090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20120__auto____0;
cljs$core$async$state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20120__auto____1;
return cljs$core$async$state_machine__20120__auto__;
})()
;})(switch__20119__auto__,c__20184__auto___35119,tc,fc))
})();
var state__20186__auto__ = (function (){var statearr_35114 = f__20185__auto__.call(null);
(statearr_35114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20184__auto___35119);

return statearr_35114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20186__auto__);
});})(c__20184__auto___35119,tc,fc))
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
var c__20184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20184__auto__){
return (function (){
var f__20185__auto__ = (function (){var switch__20119__auto__ = ((function (c__20184__auto__){
return (function (state_35182){
var state_val_35183 = (state_35182[(1)]);
if((state_val_35183 === (1))){
var inst_35168 = init;
var state_35182__$1 = (function (){var statearr_35184 = state_35182;
(statearr_35184[(7)] = inst_35168);

return statearr_35184;
})();
var statearr_35185_35200 = state_35182__$1;
(statearr_35185_35200[(2)] = null);

(statearr_35185_35200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35183 === (2))){
var state_35182__$1 = state_35182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35182__$1,(4),ch);
} else {
if((state_val_35183 === (3))){
var inst_35180 = (state_35182[(2)]);
var state_35182__$1 = state_35182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35182__$1,inst_35180);
} else {
if((state_val_35183 === (4))){
var inst_35171 = (state_35182[(8)]);
var inst_35171__$1 = (state_35182[(2)]);
var inst_35172 = (inst_35171__$1 == null);
var state_35182__$1 = (function (){var statearr_35186 = state_35182;
(statearr_35186[(8)] = inst_35171__$1);

return statearr_35186;
})();
if(cljs.core.truth_(inst_35172)){
var statearr_35187_35201 = state_35182__$1;
(statearr_35187_35201[(1)] = (5));

} else {
var statearr_35188_35202 = state_35182__$1;
(statearr_35188_35202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35183 === (5))){
var inst_35168 = (state_35182[(7)]);
var state_35182__$1 = state_35182;
var statearr_35189_35203 = state_35182__$1;
(statearr_35189_35203[(2)] = inst_35168);

(statearr_35189_35203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35183 === (6))){
var inst_35168 = (state_35182[(7)]);
var inst_35171 = (state_35182[(8)]);
var inst_35175 = f.call(null,inst_35168,inst_35171);
var inst_35168__$1 = inst_35175;
var state_35182__$1 = (function (){var statearr_35190 = state_35182;
(statearr_35190[(7)] = inst_35168__$1);

return statearr_35190;
})();
var statearr_35191_35204 = state_35182__$1;
(statearr_35191_35204[(2)] = null);

(statearr_35191_35204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35183 === (7))){
var inst_35178 = (state_35182[(2)]);
var state_35182__$1 = state_35182;
var statearr_35192_35205 = state_35182__$1;
(statearr_35192_35205[(2)] = inst_35178);

(statearr_35192_35205[(1)] = (3));


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
});})(c__20184__auto__))
;
return ((function (switch__20119__auto__,c__20184__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20120__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20120__auto____0 = (function (){
var statearr_35196 = [null,null,null,null,null,null,null,null,null];
(statearr_35196[(0)] = cljs$core$async$reduce_$_state_machine__20120__auto__);

(statearr_35196[(1)] = (1));

return statearr_35196;
});
var cljs$core$async$reduce_$_state_machine__20120__auto____1 = (function (state_35182){
while(true){
var ret_value__20121__auto__ = (function (){try{while(true){
var result__20122__auto__ = switch__20119__auto__.call(null,state_35182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20122__auto__;
}
break;
}
}catch (e35197){if((e35197 instanceof Object)){
var ex__20123__auto__ = e35197;
var statearr_35198_35206 = state_35182;
(statearr_35198_35206[(5)] = ex__20123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35207 = state_35182;
state_35182 = G__35207;
continue;
} else {
return ret_value__20121__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20120__auto__ = function(state_35182){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20120__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20120__auto____1.call(this,state_35182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20120__auto____0;
cljs$core$async$reduce_$_state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20120__auto____1;
return cljs$core$async$reduce_$_state_machine__20120__auto__;
})()
;})(switch__20119__auto__,c__20184__auto__))
})();
var state__20186__auto__ = (function (){var statearr_35199 = f__20185__auto__.call(null);
(statearr_35199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20184__auto__);

return statearr_35199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20186__auto__);
});})(c__20184__auto__))
);

return c__20184__auto__;
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
var args35208 = [];
var len__17402__auto___35260 = arguments.length;
var i__17403__auto___35261 = (0);
while(true){
if((i__17403__auto___35261 < len__17402__auto___35260)){
args35208.push((arguments[i__17403__auto___35261]));

var G__35262 = (i__17403__auto___35261 + (1));
i__17403__auto___35261 = G__35262;
continue;
} else {
}
break;
}

var G__35210 = args35208.length;
switch (G__35210) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35208.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20184__auto__){
return (function (){
var f__20185__auto__ = (function (){var switch__20119__auto__ = ((function (c__20184__auto__){
return (function (state_35235){
var state_val_35236 = (state_35235[(1)]);
if((state_val_35236 === (7))){
var inst_35217 = (state_35235[(2)]);
var state_35235__$1 = state_35235;
var statearr_35237_35264 = state_35235__$1;
(statearr_35237_35264[(2)] = inst_35217);

(statearr_35237_35264[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (1))){
var inst_35211 = cljs.core.seq.call(null,coll);
var inst_35212 = inst_35211;
var state_35235__$1 = (function (){var statearr_35238 = state_35235;
(statearr_35238[(7)] = inst_35212);

return statearr_35238;
})();
var statearr_35239_35265 = state_35235__$1;
(statearr_35239_35265[(2)] = null);

(statearr_35239_35265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (4))){
var inst_35212 = (state_35235[(7)]);
var inst_35215 = cljs.core.first.call(null,inst_35212);
var state_35235__$1 = state_35235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35235__$1,(7),ch,inst_35215);
} else {
if((state_val_35236 === (13))){
var inst_35229 = (state_35235[(2)]);
var state_35235__$1 = state_35235;
var statearr_35240_35266 = state_35235__$1;
(statearr_35240_35266[(2)] = inst_35229);

(statearr_35240_35266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (6))){
var inst_35220 = (state_35235[(2)]);
var state_35235__$1 = state_35235;
if(cljs.core.truth_(inst_35220)){
var statearr_35241_35267 = state_35235__$1;
(statearr_35241_35267[(1)] = (8));

} else {
var statearr_35242_35268 = state_35235__$1;
(statearr_35242_35268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (3))){
var inst_35233 = (state_35235[(2)]);
var state_35235__$1 = state_35235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35235__$1,inst_35233);
} else {
if((state_val_35236 === (12))){
var state_35235__$1 = state_35235;
var statearr_35243_35269 = state_35235__$1;
(statearr_35243_35269[(2)] = null);

(statearr_35243_35269[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (2))){
var inst_35212 = (state_35235[(7)]);
var state_35235__$1 = state_35235;
if(cljs.core.truth_(inst_35212)){
var statearr_35244_35270 = state_35235__$1;
(statearr_35244_35270[(1)] = (4));

} else {
var statearr_35245_35271 = state_35235__$1;
(statearr_35245_35271[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (11))){
var inst_35226 = cljs.core.async.close_BANG_.call(null,ch);
var state_35235__$1 = state_35235;
var statearr_35246_35272 = state_35235__$1;
(statearr_35246_35272[(2)] = inst_35226);

(statearr_35246_35272[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (9))){
var state_35235__$1 = state_35235;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35247_35273 = state_35235__$1;
(statearr_35247_35273[(1)] = (11));

} else {
var statearr_35248_35274 = state_35235__$1;
(statearr_35248_35274[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (5))){
var inst_35212 = (state_35235[(7)]);
var state_35235__$1 = state_35235;
var statearr_35249_35275 = state_35235__$1;
(statearr_35249_35275[(2)] = inst_35212);

(statearr_35249_35275[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (10))){
var inst_35231 = (state_35235[(2)]);
var state_35235__$1 = state_35235;
var statearr_35250_35276 = state_35235__$1;
(statearr_35250_35276[(2)] = inst_35231);

(statearr_35250_35276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (8))){
var inst_35212 = (state_35235[(7)]);
var inst_35222 = cljs.core.next.call(null,inst_35212);
var inst_35212__$1 = inst_35222;
var state_35235__$1 = (function (){var statearr_35251 = state_35235;
(statearr_35251[(7)] = inst_35212__$1);

return statearr_35251;
})();
var statearr_35252_35277 = state_35235__$1;
(statearr_35252_35277[(2)] = null);

(statearr_35252_35277[(1)] = (2));


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
});})(c__20184__auto__))
;
return ((function (switch__20119__auto__,c__20184__auto__){
return (function() {
var cljs$core$async$state_machine__20120__auto__ = null;
var cljs$core$async$state_machine__20120__auto____0 = (function (){
var statearr_35256 = [null,null,null,null,null,null,null,null];
(statearr_35256[(0)] = cljs$core$async$state_machine__20120__auto__);

(statearr_35256[(1)] = (1));

return statearr_35256;
});
var cljs$core$async$state_machine__20120__auto____1 = (function (state_35235){
while(true){
var ret_value__20121__auto__ = (function (){try{while(true){
var result__20122__auto__ = switch__20119__auto__.call(null,state_35235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20122__auto__;
}
break;
}
}catch (e35257){if((e35257 instanceof Object)){
var ex__20123__auto__ = e35257;
var statearr_35258_35278 = state_35235;
(statearr_35258_35278[(5)] = ex__20123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35279 = state_35235;
state_35235 = G__35279;
continue;
} else {
return ret_value__20121__auto__;
}
break;
}
});
cljs$core$async$state_machine__20120__auto__ = function(state_35235){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20120__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20120__auto____1.call(this,state_35235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20120__auto____0;
cljs$core$async$state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20120__auto____1;
return cljs$core$async$state_machine__20120__auto__;
})()
;})(switch__20119__auto__,c__20184__auto__))
})();
var state__20186__auto__ = (function (){var statearr_35259 = f__20185__auto__.call(null);
(statearr_35259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20184__auto__);

return statearr_35259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20186__auto__);
});})(c__20184__auto__))
);

return c__20184__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async35501 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35501 = (function (mult,ch,cs,meta35502){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta35502 = meta35502;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35503,meta35502__$1){
var self__ = this;
var _35503__$1 = this;
return (new cljs.core.async.t_cljs$core$async35501(self__.mult,self__.ch,self__.cs,meta35502__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async35501.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35503){
var self__ = this;
var _35503__$1 = this;
return self__.meta35502;
});})(cs))
;

cljs.core.async.t_cljs$core$async35501.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async35501.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async35501.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async35501.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35501.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35501.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35501.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35502","meta35502",1785968941,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async35501.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35501.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35501";

cljs.core.async.t_cljs$core$async35501.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async35501");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async35501 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async35501(mult__$1,ch__$1,cs__$1,meta35502){
return (new cljs.core.async.t_cljs$core$async35501(mult__$1,ch__$1,cs__$1,meta35502));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async35501(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__20184__auto___35722 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20184__auto___35722,cs,m,dchan,dctr,done){
return (function (){
var f__20185__auto__ = (function (){var switch__20119__auto__ = ((function (c__20184__auto___35722,cs,m,dchan,dctr,done){
return (function (state_35634){
var state_val_35635 = (state_35634[(1)]);
if((state_val_35635 === (7))){
var inst_35630 = (state_35634[(2)]);
var state_35634__$1 = state_35634;
var statearr_35636_35723 = state_35634__$1;
(statearr_35636_35723[(2)] = inst_35630);

(statearr_35636_35723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (20))){
var inst_35535 = (state_35634[(7)]);
var inst_35545 = cljs.core.first.call(null,inst_35535);
var inst_35546 = cljs.core.nth.call(null,inst_35545,(0),null);
var inst_35547 = cljs.core.nth.call(null,inst_35545,(1),null);
var state_35634__$1 = (function (){var statearr_35637 = state_35634;
(statearr_35637[(8)] = inst_35546);

return statearr_35637;
})();
if(cljs.core.truth_(inst_35547)){
var statearr_35638_35724 = state_35634__$1;
(statearr_35638_35724[(1)] = (22));

} else {
var statearr_35639_35725 = state_35634__$1;
(statearr_35639_35725[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (27))){
var inst_35582 = (state_35634[(9)]);
var inst_35575 = (state_35634[(10)]);
var inst_35506 = (state_35634[(11)]);
var inst_35577 = (state_35634[(12)]);
var inst_35582__$1 = cljs.core._nth.call(null,inst_35575,inst_35577);
var inst_35583 = cljs.core.async.put_BANG_.call(null,inst_35582__$1,inst_35506,done);
var state_35634__$1 = (function (){var statearr_35640 = state_35634;
(statearr_35640[(9)] = inst_35582__$1);

return statearr_35640;
})();
if(cljs.core.truth_(inst_35583)){
var statearr_35641_35726 = state_35634__$1;
(statearr_35641_35726[(1)] = (30));

} else {
var statearr_35642_35727 = state_35634__$1;
(statearr_35642_35727[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (1))){
var state_35634__$1 = state_35634;
var statearr_35643_35728 = state_35634__$1;
(statearr_35643_35728[(2)] = null);

(statearr_35643_35728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (24))){
var inst_35535 = (state_35634[(7)]);
var inst_35552 = (state_35634[(2)]);
var inst_35553 = cljs.core.next.call(null,inst_35535);
var inst_35515 = inst_35553;
var inst_35516 = null;
var inst_35517 = (0);
var inst_35518 = (0);
var state_35634__$1 = (function (){var statearr_35644 = state_35634;
(statearr_35644[(13)] = inst_35552);

(statearr_35644[(14)] = inst_35515);

(statearr_35644[(15)] = inst_35517);

(statearr_35644[(16)] = inst_35518);

(statearr_35644[(17)] = inst_35516);

return statearr_35644;
})();
var statearr_35645_35729 = state_35634__$1;
(statearr_35645_35729[(2)] = null);

(statearr_35645_35729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (39))){
var state_35634__$1 = state_35634;
var statearr_35649_35730 = state_35634__$1;
(statearr_35649_35730[(2)] = null);

(statearr_35649_35730[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (4))){
var inst_35506 = (state_35634[(11)]);
var inst_35506__$1 = (state_35634[(2)]);
var inst_35507 = (inst_35506__$1 == null);
var state_35634__$1 = (function (){var statearr_35650 = state_35634;
(statearr_35650[(11)] = inst_35506__$1);

return statearr_35650;
})();
if(cljs.core.truth_(inst_35507)){
var statearr_35651_35731 = state_35634__$1;
(statearr_35651_35731[(1)] = (5));

} else {
var statearr_35652_35732 = state_35634__$1;
(statearr_35652_35732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (15))){
var inst_35515 = (state_35634[(14)]);
var inst_35517 = (state_35634[(15)]);
var inst_35518 = (state_35634[(16)]);
var inst_35516 = (state_35634[(17)]);
var inst_35531 = (state_35634[(2)]);
var inst_35532 = (inst_35518 + (1));
var tmp35646 = inst_35515;
var tmp35647 = inst_35517;
var tmp35648 = inst_35516;
var inst_35515__$1 = tmp35646;
var inst_35516__$1 = tmp35648;
var inst_35517__$1 = tmp35647;
var inst_35518__$1 = inst_35532;
var state_35634__$1 = (function (){var statearr_35653 = state_35634;
(statearr_35653[(14)] = inst_35515__$1);

(statearr_35653[(15)] = inst_35517__$1);

(statearr_35653[(18)] = inst_35531);

(statearr_35653[(16)] = inst_35518__$1);

(statearr_35653[(17)] = inst_35516__$1);

return statearr_35653;
})();
var statearr_35654_35733 = state_35634__$1;
(statearr_35654_35733[(2)] = null);

(statearr_35654_35733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (21))){
var inst_35556 = (state_35634[(2)]);
var state_35634__$1 = state_35634;
var statearr_35658_35734 = state_35634__$1;
(statearr_35658_35734[(2)] = inst_35556);

(statearr_35658_35734[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (31))){
var inst_35582 = (state_35634[(9)]);
var inst_35586 = done.call(null,null);
var inst_35587 = cljs.core.async.untap_STAR_.call(null,m,inst_35582);
var state_35634__$1 = (function (){var statearr_35659 = state_35634;
(statearr_35659[(19)] = inst_35586);

return statearr_35659;
})();
var statearr_35660_35735 = state_35634__$1;
(statearr_35660_35735[(2)] = inst_35587);

(statearr_35660_35735[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (32))){
var inst_35574 = (state_35634[(20)]);
var inst_35575 = (state_35634[(10)]);
var inst_35576 = (state_35634[(21)]);
var inst_35577 = (state_35634[(12)]);
var inst_35589 = (state_35634[(2)]);
var inst_35590 = (inst_35577 + (1));
var tmp35655 = inst_35574;
var tmp35656 = inst_35575;
var tmp35657 = inst_35576;
var inst_35574__$1 = tmp35655;
var inst_35575__$1 = tmp35656;
var inst_35576__$1 = tmp35657;
var inst_35577__$1 = inst_35590;
var state_35634__$1 = (function (){var statearr_35661 = state_35634;
(statearr_35661[(20)] = inst_35574__$1);

(statearr_35661[(10)] = inst_35575__$1);

(statearr_35661[(21)] = inst_35576__$1);

(statearr_35661[(12)] = inst_35577__$1);

(statearr_35661[(22)] = inst_35589);

return statearr_35661;
})();
var statearr_35662_35736 = state_35634__$1;
(statearr_35662_35736[(2)] = null);

(statearr_35662_35736[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (40))){
var inst_35602 = (state_35634[(23)]);
var inst_35606 = done.call(null,null);
var inst_35607 = cljs.core.async.untap_STAR_.call(null,m,inst_35602);
var state_35634__$1 = (function (){var statearr_35663 = state_35634;
(statearr_35663[(24)] = inst_35606);

return statearr_35663;
})();
var statearr_35664_35737 = state_35634__$1;
(statearr_35664_35737[(2)] = inst_35607);

(statearr_35664_35737[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (33))){
var inst_35593 = (state_35634[(25)]);
var inst_35595 = cljs.core.chunked_seq_QMARK_.call(null,inst_35593);
var state_35634__$1 = state_35634;
if(inst_35595){
var statearr_35665_35738 = state_35634__$1;
(statearr_35665_35738[(1)] = (36));

} else {
var statearr_35666_35739 = state_35634__$1;
(statearr_35666_35739[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (13))){
var inst_35525 = (state_35634[(26)]);
var inst_35528 = cljs.core.async.close_BANG_.call(null,inst_35525);
var state_35634__$1 = state_35634;
var statearr_35667_35740 = state_35634__$1;
(statearr_35667_35740[(2)] = inst_35528);

(statearr_35667_35740[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (22))){
var inst_35546 = (state_35634[(8)]);
var inst_35549 = cljs.core.async.close_BANG_.call(null,inst_35546);
var state_35634__$1 = state_35634;
var statearr_35668_35741 = state_35634__$1;
(statearr_35668_35741[(2)] = inst_35549);

(statearr_35668_35741[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (36))){
var inst_35593 = (state_35634[(25)]);
var inst_35597 = cljs.core.chunk_first.call(null,inst_35593);
var inst_35598 = cljs.core.chunk_rest.call(null,inst_35593);
var inst_35599 = cljs.core.count.call(null,inst_35597);
var inst_35574 = inst_35598;
var inst_35575 = inst_35597;
var inst_35576 = inst_35599;
var inst_35577 = (0);
var state_35634__$1 = (function (){var statearr_35669 = state_35634;
(statearr_35669[(20)] = inst_35574);

(statearr_35669[(10)] = inst_35575);

(statearr_35669[(21)] = inst_35576);

(statearr_35669[(12)] = inst_35577);

return statearr_35669;
})();
var statearr_35670_35742 = state_35634__$1;
(statearr_35670_35742[(2)] = null);

(statearr_35670_35742[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (41))){
var inst_35593 = (state_35634[(25)]);
var inst_35609 = (state_35634[(2)]);
var inst_35610 = cljs.core.next.call(null,inst_35593);
var inst_35574 = inst_35610;
var inst_35575 = null;
var inst_35576 = (0);
var inst_35577 = (0);
var state_35634__$1 = (function (){var statearr_35671 = state_35634;
(statearr_35671[(20)] = inst_35574);

(statearr_35671[(10)] = inst_35575);

(statearr_35671[(21)] = inst_35576);

(statearr_35671[(12)] = inst_35577);

(statearr_35671[(27)] = inst_35609);

return statearr_35671;
})();
var statearr_35672_35743 = state_35634__$1;
(statearr_35672_35743[(2)] = null);

(statearr_35672_35743[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (43))){
var state_35634__$1 = state_35634;
var statearr_35673_35744 = state_35634__$1;
(statearr_35673_35744[(2)] = null);

(statearr_35673_35744[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (29))){
var inst_35618 = (state_35634[(2)]);
var state_35634__$1 = state_35634;
var statearr_35674_35745 = state_35634__$1;
(statearr_35674_35745[(2)] = inst_35618);

(statearr_35674_35745[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (44))){
var inst_35627 = (state_35634[(2)]);
var state_35634__$1 = (function (){var statearr_35675 = state_35634;
(statearr_35675[(28)] = inst_35627);

return statearr_35675;
})();
var statearr_35676_35746 = state_35634__$1;
(statearr_35676_35746[(2)] = null);

(statearr_35676_35746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (6))){
var inst_35566 = (state_35634[(29)]);
var inst_35565 = cljs.core.deref.call(null,cs);
var inst_35566__$1 = cljs.core.keys.call(null,inst_35565);
var inst_35567 = cljs.core.count.call(null,inst_35566__$1);
var inst_35568 = cljs.core.reset_BANG_.call(null,dctr,inst_35567);
var inst_35573 = cljs.core.seq.call(null,inst_35566__$1);
var inst_35574 = inst_35573;
var inst_35575 = null;
var inst_35576 = (0);
var inst_35577 = (0);
var state_35634__$1 = (function (){var statearr_35677 = state_35634;
(statearr_35677[(20)] = inst_35574);

(statearr_35677[(10)] = inst_35575);

(statearr_35677[(30)] = inst_35568);

(statearr_35677[(21)] = inst_35576);

(statearr_35677[(12)] = inst_35577);

(statearr_35677[(29)] = inst_35566__$1);

return statearr_35677;
})();
var statearr_35678_35747 = state_35634__$1;
(statearr_35678_35747[(2)] = null);

(statearr_35678_35747[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (28))){
var inst_35574 = (state_35634[(20)]);
var inst_35593 = (state_35634[(25)]);
var inst_35593__$1 = cljs.core.seq.call(null,inst_35574);
var state_35634__$1 = (function (){var statearr_35679 = state_35634;
(statearr_35679[(25)] = inst_35593__$1);

return statearr_35679;
})();
if(inst_35593__$1){
var statearr_35680_35748 = state_35634__$1;
(statearr_35680_35748[(1)] = (33));

} else {
var statearr_35681_35749 = state_35634__$1;
(statearr_35681_35749[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (25))){
var inst_35576 = (state_35634[(21)]);
var inst_35577 = (state_35634[(12)]);
var inst_35579 = (inst_35577 < inst_35576);
var inst_35580 = inst_35579;
var state_35634__$1 = state_35634;
if(cljs.core.truth_(inst_35580)){
var statearr_35682_35750 = state_35634__$1;
(statearr_35682_35750[(1)] = (27));

} else {
var statearr_35683_35751 = state_35634__$1;
(statearr_35683_35751[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (34))){
var state_35634__$1 = state_35634;
var statearr_35684_35752 = state_35634__$1;
(statearr_35684_35752[(2)] = null);

(statearr_35684_35752[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (17))){
var state_35634__$1 = state_35634;
var statearr_35685_35753 = state_35634__$1;
(statearr_35685_35753[(2)] = null);

(statearr_35685_35753[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (3))){
var inst_35632 = (state_35634[(2)]);
var state_35634__$1 = state_35634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35634__$1,inst_35632);
} else {
if((state_val_35635 === (12))){
var inst_35561 = (state_35634[(2)]);
var state_35634__$1 = state_35634;
var statearr_35686_35754 = state_35634__$1;
(statearr_35686_35754[(2)] = inst_35561);

(statearr_35686_35754[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (2))){
var state_35634__$1 = state_35634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35634__$1,(4),ch);
} else {
if((state_val_35635 === (23))){
var state_35634__$1 = state_35634;
var statearr_35687_35755 = state_35634__$1;
(statearr_35687_35755[(2)] = null);

(statearr_35687_35755[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (35))){
var inst_35616 = (state_35634[(2)]);
var state_35634__$1 = state_35634;
var statearr_35688_35756 = state_35634__$1;
(statearr_35688_35756[(2)] = inst_35616);

(statearr_35688_35756[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (19))){
var inst_35535 = (state_35634[(7)]);
var inst_35539 = cljs.core.chunk_first.call(null,inst_35535);
var inst_35540 = cljs.core.chunk_rest.call(null,inst_35535);
var inst_35541 = cljs.core.count.call(null,inst_35539);
var inst_35515 = inst_35540;
var inst_35516 = inst_35539;
var inst_35517 = inst_35541;
var inst_35518 = (0);
var state_35634__$1 = (function (){var statearr_35689 = state_35634;
(statearr_35689[(14)] = inst_35515);

(statearr_35689[(15)] = inst_35517);

(statearr_35689[(16)] = inst_35518);

(statearr_35689[(17)] = inst_35516);

return statearr_35689;
})();
var statearr_35690_35757 = state_35634__$1;
(statearr_35690_35757[(2)] = null);

(statearr_35690_35757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (11))){
var inst_35515 = (state_35634[(14)]);
var inst_35535 = (state_35634[(7)]);
var inst_35535__$1 = cljs.core.seq.call(null,inst_35515);
var state_35634__$1 = (function (){var statearr_35691 = state_35634;
(statearr_35691[(7)] = inst_35535__$1);

return statearr_35691;
})();
if(inst_35535__$1){
var statearr_35692_35758 = state_35634__$1;
(statearr_35692_35758[(1)] = (16));

} else {
var statearr_35693_35759 = state_35634__$1;
(statearr_35693_35759[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (9))){
var inst_35563 = (state_35634[(2)]);
var state_35634__$1 = state_35634;
var statearr_35694_35760 = state_35634__$1;
(statearr_35694_35760[(2)] = inst_35563);

(statearr_35694_35760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (5))){
var inst_35513 = cljs.core.deref.call(null,cs);
var inst_35514 = cljs.core.seq.call(null,inst_35513);
var inst_35515 = inst_35514;
var inst_35516 = null;
var inst_35517 = (0);
var inst_35518 = (0);
var state_35634__$1 = (function (){var statearr_35695 = state_35634;
(statearr_35695[(14)] = inst_35515);

(statearr_35695[(15)] = inst_35517);

(statearr_35695[(16)] = inst_35518);

(statearr_35695[(17)] = inst_35516);

return statearr_35695;
})();
var statearr_35696_35761 = state_35634__$1;
(statearr_35696_35761[(2)] = null);

(statearr_35696_35761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (14))){
var state_35634__$1 = state_35634;
var statearr_35697_35762 = state_35634__$1;
(statearr_35697_35762[(2)] = null);

(statearr_35697_35762[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (45))){
var inst_35624 = (state_35634[(2)]);
var state_35634__$1 = state_35634;
var statearr_35698_35763 = state_35634__$1;
(statearr_35698_35763[(2)] = inst_35624);

(statearr_35698_35763[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (26))){
var inst_35566 = (state_35634[(29)]);
var inst_35620 = (state_35634[(2)]);
var inst_35621 = cljs.core.seq.call(null,inst_35566);
var state_35634__$1 = (function (){var statearr_35699 = state_35634;
(statearr_35699[(31)] = inst_35620);

return statearr_35699;
})();
if(inst_35621){
var statearr_35700_35764 = state_35634__$1;
(statearr_35700_35764[(1)] = (42));

} else {
var statearr_35701_35765 = state_35634__$1;
(statearr_35701_35765[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (16))){
var inst_35535 = (state_35634[(7)]);
var inst_35537 = cljs.core.chunked_seq_QMARK_.call(null,inst_35535);
var state_35634__$1 = state_35634;
if(inst_35537){
var statearr_35702_35766 = state_35634__$1;
(statearr_35702_35766[(1)] = (19));

} else {
var statearr_35703_35767 = state_35634__$1;
(statearr_35703_35767[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (38))){
var inst_35613 = (state_35634[(2)]);
var state_35634__$1 = state_35634;
var statearr_35704_35768 = state_35634__$1;
(statearr_35704_35768[(2)] = inst_35613);

(statearr_35704_35768[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (30))){
var state_35634__$1 = state_35634;
var statearr_35705_35769 = state_35634__$1;
(statearr_35705_35769[(2)] = null);

(statearr_35705_35769[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (10))){
var inst_35518 = (state_35634[(16)]);
var inst_35516 = (state_35634[(17)]);
var inst_35524 = cljs.core._nth.call(null,inst_35516,inst_35518);
var inst_35525 = cljs.core.nth.call(null,inst_35524,(0),null);
var inst_35526 = cljs.core.nth.call(null,inst_35524,(1),null);
var state_35634__$1 = (function (){var statearr_35706 = state_35634;
(statearr_35706[(26)] = inst_35525);

return statearr_35706;
})();
if(cljs.core.truth_(inst_35526)){
var statearr_35707_35770 = state_35634__$1;
(statearr_35707_35770[(1)] = (13));

} else {
var statearr_35708_35771 = state_35634__$1;
(statearr_35708_35771[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (18))){
var inst_35559 = (state_35634[(2)]);
var state_35634__$1 = state_35634;
var statearr_35709_35772 = state_35634__$1;
(statearr_35709_35772[(2)] = inst_35559);

(statearr_35709_35772[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (42))){
var state_35634__$1 = state_35634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35634__$1,(45),dchan);
} else {
if((state_val_35635 === (37))){
var inst_35602 = (state_35634[(23)]);
var inst_35506 = (state_35634[(11)]);
var inst_35593 = (state_35634[(25)]);
var inst_35602__$1 = cljs.core.first.call(null,inst_35593);
var inst_35603 = cljs.core.async.put_BANG_.call(null,inst_35602__$1,inst_35506,done);
var state_35634__$1 = (function (){var statearr_35710 = state_35634;
(statearr_35710[(23)] = inst_35602__$1);

return statearr_35710;
})();
if(cljs.core.truth_(inst_35603)){
var statearr_35711_35773 = state_35634__$1;
(statearr_35711_35773[(1)] = (39));

} else {
var statearr_35712_35774 = state_35634__$1;
(statearr_35712_35774[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (8))){
var inst_35517 = (state_35634[(15)]);
var inst_35518 = (state_35634[(16)]);
var inst_35520 = (inst_35518 < inst_35517);
var inst_35521 = inst_35520;
var state_35634__$1 = state_35634;
if(cljs.core.truth_(inst_35521)){
var statearr_35713_35775 = state_35634__$1;
(statearr_35713_35775[(1)] = (10));

} else {
var statearr_35714_35776 = state_35634__$1;
(statearr_35714_35776[(1)] = (11));

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
});})(c__20184__auto___35722,cs,m,dchan,dctr,done))
;
return ((function (switch__20119__auto__,c__20184__auto___35722,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20120__auto__ = null;
var cljs$core$async$mult_$_state_machine__20120__auto____0 = (function (){
var statearr_35718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35718[(0)] = cljs$core$async$mult_$_state_machine__20120__auto__);

(statearr_35718[(1)] = (1));

return statearr_35718;
});
var cljs$core$async$mult_$_state_machine__20120__auto____1 = (function (state_35634){
while(true){
var ret_value__20121__auto__ = (function (){try{while(true){
var result__20122__auto__ = switch__20119__auto__.call(null,state_35634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20122__auto__;
}
break;
}
}catch (e35719){if((e35719 instanceof Object)){
var ex__20123__auto__ = e35719;
var statearr_35720_35777 = state_35634;
(statearr_35720_35777[(5)] = ex__20123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35778 = state_35634;
state_35634 = G__35778;
continue;
} else {
return ret_value__20121__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20120__auto__ = function(state_35634){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20120__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20120__auto____1.call(this,state_35634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20120__auto____0;
cljs$core$async$mult_$_state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20120__auto____1;
return cljs$core$async$mult_$_state_machine__20120__auto__;
})()
;})(switch__20119__auto__,c__20184__auto___35722,cs,m,dchan,dctr,done))
})();
var state__20186__auto__ = (function (){var statearr_35721 = f__20185__auto__.call(null);
(statearr_35721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20184__auto___35722);

return statearr_35721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20186__auto__);
});})(c__20184__auto___35722,cs,m,dchan,dctr,done))
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
var args35779 = [];
var len__17402__auto___35782 = arguments.length;
var i__17403__auto___35783 = (0);
while(true){
if((i__17403__auto___35783 < len__17402__auto___35782)){
args35779.push((arguments[i__17403__auto___35783]));

var G__35784 = (i__17403__auto___35783 + (1));
i__17403__auto___35783 = G__35784;
continue;
} else {
}
break;
}

var G__35781 = args35779.length;
switch (G__35781) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35779.length)].join('')));

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
var len__17402__auto___35796 = arguments.length;
var i__17403__auto___35797 = (0);
while(true){
if((i__17403__auto___35797 < len__17402__auto___35796)){
args__17409__auto__.push((arguments[i__17403__auto___35797]));

var G__35798 = (i__17403__auto___35797 + (1));
i__17403__auto___35797 = G__35798;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((3) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17410__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35790){
var map__35791 = p__35790;
var map__35791__$1 = ((((!((map__35791 == null)))?((((map__35791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35791):map__35791);
var opts = map__35791__$1;
var statearr_35793_35799 = state;
(statearr_35793_35799[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__35791,map__35791__$1,opts){
return (function (val){
var statearr_35794_35800 = state;
(statearr_35794_35800[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35791,map__35791__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_35795_35801 = state;
(statearr_35795_35801[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35786){
var G__35787 = cljs.core.first.call(null,seq35786);
var seq35786__$1 = cljs.core.next.call(null,seq35786);
var G__35788 = cljs.core.first.call(null,seq35786__$1);
var seq35786__$2 = cljs.core.next.call(null,seq35786__$1);
var G__35789 = cljs.core.first.call(null,seq35786__$2);
var seq35786__$3 = cljs.core.next.call(null,seq35786__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35787,G__35788,G__35789,seq35786__$3);
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
if(typeof cljs.core.async.t_cljs$core$async35965 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35965 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35966){
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
this.meta35966 = meta35966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35967,meta35966__$1){
var self__ = this;
var _35967__$1 = this;
return (new cljs.core.async.t_cljs$core$async35965(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35966__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35965.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35967){
var self__ = this;
var _35967__$1 = this;
return self__.meta35966;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35965.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async35965.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35965.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async35965.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35965.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35965.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35965.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35965.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async35965.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35966","meta35966",-203222394,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35965.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35965.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35965";

cljs.core.async.t_cljs$core$async35965.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async35965");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async35965 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35965(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35966){
return (new cljs.core.async.t_cljs$core$async35965(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35966));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35965(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20184__auto___36128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20184__auto___36128,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20185__auto__ = (function (){var switch__20119__auto__ = ((function (c__20184__auto___36128,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_36065){
var state_val_36066 = (state_36065[(1)]);
if((state_val_36066 === (7))){
var inst_35983 = (state_36065[(2)]);
var state_36065__$1 = state_36065;
var statearr_36067_36129 = state_36065__$1;
(statearr_36067_36129[(2)] = inst_35983);

(statearr_36067_36129[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (20))){
var inst_35995 = (state_36065[(7)]);
var state_36065__$1 = state_36065;
var statearr_36068_36130 = state_36065__$1;
(statearr_36068_36130[(2)] = inst_35995);

(statearr_36068_36130[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (27))){
var state_36065__$1 = state_36065;
var statearr_36069_36131 = state_36065__$1;
(statearr_36069_36131[(2)] = null);

(statearr_36069_36131[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (1))){
var inst_35971 = (state_36065[(8)]);
var inst_35971__$1 = calc_state.call(null);
var inst_35973 = (inst_35971__$1 == null);
var inst_35974 = cljs.core.not.call(null,inst_35973);
var state_36065__$1 = (function (){var statearr_36070 = state_36065;
(statearr_36070[(8)] = inst_35971__$1);

return statearr_36070;
})();
if(inst_35974){
var statearr_36071_36132 = state_36065__$1;
(statearr_36071_36132[(1)] = (2));

} else {
var statearr_36072_36133 = state_36065__$1;
(statearr_36072_36133[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (24))){
var inst_36025 = (state_36065[(9)]);
var inst_36039 = (state_36065[(10)]);
var inst_36018 = (state_36065[(11)]);
var inst_36039__$1 = inst_36018.call(null,inst_36025);
var state_36065__$1 = (function (){var statearr_36073 = state_36065;
(statearr_36073[(10)] = inst_36039__$1);

return statearr_36073;
})();
if(cljs.core.truth_(inst_36039__$1)){
var statearr_36074_36134 = state_36065__$1;
(statearr_36074_36134[(1)] = (29));

} else {
var statearr_36075_36135 = state_36065__$1;
(statearr_36075_36135[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (4))){
var inst_35986 = (state_36065[(2)]);
var state_36065__$1 = state_36065;
if(cljs.core.truth_(inst_35986)){
var statearr_36076_36136 = state_36065__$1;
(statearr_36076_36136[(1)] = (8));

} else {
var statearr_36077_36137 = state_36065__$1;
(statearr_36077_36137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (15))){
var inst_36012 = (state_36065[(2)]);
var state_36065__$1 = state_36065;
if(cljs.core.truth_(inst_36012)){
var statearr_36078_36138 = state_36065__$1;
(statearr_36078_36138[(1)] = (19));

} else {
var statearr_36079_36139 = state_36065__$1;
(statearr_36079_36139[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (21))){
var inst_36017 = (state_36065[(12)]);
var inst_36017__$1 = (state_36065[(2)]);
var inst_36018 = cljs.core.get.call(null,inst_36017__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36019 = cljs.core.get.call(null,inst_36017__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36020 = cljs.core.get.call(null,inst_36017__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36065__$1 = (function (){var statearr_36080 = state_36065;
(statearr_36080[(13)] = inst_36019);

(statearr_36080[(12)] = inst_36017__$1);

(statearr_36080[(11)] = inst_36018);

return statearr_36080;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_36065__$1,(22),inst_36020);
} else {
if((state_val_36066 === (31))){
var inst_36047 = (state_36065[(2)]);
var state_36065__$1 = state_36065;
if(cljs.core.truth_(inst_36047)){
var statearr_36081_36140 = state_36065__$1;
(statearr_36081_36140[(1)] = (32));

} else {
var statearr_36082_36141 = state_36065__$1;
(statearr_36082_36141[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (32))){
var inst_36024 = (state_36065[(14)]);
var state_36065__$1 = state_36065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36065__$1,(35),out,inst_36024);
} else {
if((state_val_36066 === (33))){
var inst_36017 = (state_36065[(12)]);
var inst_35995 = inst_36017;
var state_36065__$1 = (function (){var statearr_36083 = state_36065;
(statearr_36083[(7)] = inst_35995);

return statearr_36083;
})();
var statearr_36084_36142 = state_36065__$1;
(statearr_36084_36142[(2)] = null);

(statearr_36084_36142[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (13))){
var inst_35995 = (state_36065[(7)]);
var inst_36002 = inst_35995.cljs$lang$protocol_mask$partition0$;
var inst_36003 = (inst_36002 & (64));
var inst_36004 = inst_35995.cljs$core$ISeq$;
var inst_36005 = (inst_36003) || (inst_36004);
var state_36065__$1 = state_36065;
if(cljs.core.truth_(inst_36005)){
var statearr_36085_36143 = state_36065__$1;
(statearr_36085_36143[(1)] = (16));

} else {
var statearr_36086_36144 = state_36065__$1;
(statearr_36086_36144[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (22))){
var inst_36025 = (state_36065[(9)]);
var inst_36024 = (state_36065[(14)]);
var inst_36023 = (state_36065[(2)]);
var inst_36024__$1 = cljs.core.nth.call(null,inst_36023,(0),null);
var inst_36025__$1 = cljs.core.nth.call(null,inst_36023,(1),null);
var inst_36026 = (inst_36024__$1 == null);
var inst_36027 = cljs.core._EQ_.call(null,inst_36025__$1,change);
var inst_36028 = (inst_36026) || (inst_36027);
var state_36065__$1 = (function (){var statearr_36087 = state_36065;
(statearr_36087[(9)] = inst_36025__$1);

(statearr_36087[(14)] = inst_36024__$1);

return statearr_36087;
})();
if(cljs.core.truth_(inst_36028)){
var statearr_36088_36145 = state_36065__$1;
(statearr_36088_36145[(1)] = (23));

} else {
var statearr_36089_36146 = state_36065__$1;
(statearr_36089_36146[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (36))){
var inst_36017 = (state_36065[(12)]);
var inst_35995 = inst_36017;
var state_36065__$1 = (function (){var statearr_36090 = state_36065;
(statearr_36090[(7)] = inst_35995);

return statearr_36090;
})();
var statearr_36091_36147 = state_36065__$1;
(statearr_36091_36147[(2)] = null);

(statearr_36091_36147[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (29))){
var inst_36039 = (state_36065[(10)]);
var state_36065__$1 = state_36065;
var statearr_36092_36148 = state_36065__$1;
(statearr_36092_36148[(2)] = inst_36039);

(statearr_36092_36148[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (6))){
var state_36065__$1 = state_36065;
var statearr_36093_36149 = state_36065__$1;
(statearr_36093_36149[(2)] = false);

(statearr_36093_36149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (28))){
var inst_36035 = (state_36065[(2)]);
var inst_36036 = calc_state.call(null);
var inst_35995 = inst_36036;
var state_36065__$1 = (function (){var statearr_36094 = state_36065;
(statearr_36094[(15)] = inst_36035);

(statearr_36094[(7)] = inst_35995);

return statearr_36094;
})();
var statearr_36095_36150 = state_36065__$1;
(statearr_36095_36150[(2)] = null);

(statearr_36095_36150[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (25))){
var inst_36061 = (state_36065[(2)]);
var state_36065__$1 = state_36065;
var statearr_36096_36151 = state_36065__$1;
(statearr_36096_36151[(2)] = inst_36061);

(statearr_36096_36151[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (34))){
var inst_36059 = (state_36065[(2)]);
var state_36065__$1 = state_36065;
var statearr_36097_36152 = state_36065__$1;
(statearr_36097_36152[(2)] = inst_36059);

(statearr_36097_36152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (17))){
var state_36065__$1 = state_36065;
var statearr_36098_36153 = state_36065__$1;
(statearr_36098_36153[(2)] = false);

(statearr_36098_36153[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (3))){
var state_36065__$1 = state_36065;
var statearr_36099_36154 = state_36065__$1;
(statearr_36099_36154[(2)] = false);

(statearr_36099_36154[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (12))){
var inst_36063 = (state_36065[(2)]);
var state_36065__$1 = state_36065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36065__$1,inst_36063);
} else {
if((state_val_36066 === (2))){
var inst_35971 = (state_36065[(8)]);
var inst_35976 = inst_35971.cljs$lang$protocol_mask$partition0$;
var inst_35977 = (inst_35976 & (64));
var inst_35978 = inst_35971.cljs$core$ISeq$;
var inst_35979 = (inst_35977) || (inst_35978);
var state_36065__$1 = state_36065;
if(cljs.core.truth_(inst_35979)){
var statearr_36100_36155 = state_36065__$1;
(statearr_36100_36155[(1)] = (5));

} else {
var statearr_36101_36156 = state_36065__$1;
(statearr_36101_36156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (23))){
var inst_36024 = (state_36065[(14)]);
var inst_36030 = (inst_36024 == null);
var state_36065__$1 = state_36065;
if(cljs.core.truth_(inst_36030)){
var statearr_36102_36157 = state_36065__$1;
(statearr_36102_36157[(1)] = (26));

} else {
var statearr_36103_36158 = state_36065__$1;
(statearr_36103_36158[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (35))){
var inst_36050 = (state_36065[(2)]);
var state_36065__$1 = state_36065;
if(cljs.core.truth_(inst_36050)){
var statearr_36104_36159 = state_36065__$1;
(statearr_36104_36159[(1)] = (36));

} else {
var statearr_36105_36160 = state_36065__$1;
(statearr_36105_36160[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (19))){
var inst_35995 = (state_36065[(7)]);
var inst_36014 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35995);
var state_36065__$1 = state_36065;
var statearr_36106_36161 = state_36065__$1;
(statearr_36106_36161[(2)] = inst_36014);

(statearr_36106_36161[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (11))){
var inst_35995 = (state_36065[(7)]);
var inst_35999 = (inst_35995 == null);
var inst_36000 = cljs.core.not.call(null,inst_35999);
var state_36065__$1 = state_36065;
if(inst_36000){
var statearr_36107_36162 = state_36065__$1;
(statearr_36107_36162[(1)] = (13));

} else {
var statearr_36108_36163 = state_36065__$1;
(statearr_36108_36163[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (9))){
var inst_35971 = (state_36065[(8)]);
var state_36065__$1 = state_36065;
var statearr_36109_36164 = state_36065__$1;
(statearr_36109_36164[(2)] = inst_35971);

(statearr_36109_36164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (5))){
var state_36065__$1 = state_36065;
var statearr_36110_36165 = state_36065__$1;
(statearr_36110_36165[(2)] = true);

(statearr_36110_36165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (14))){
var state_36065__$1 = state_36065;
var statearr_36111_36166 = state_36065__$1;
(statearr_36111_36166[(2)] = false);

(statearr_36111_36166[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (26))){
var inst_36025 = (state_36065[(9)]);
var inst_36032 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36025);
var state_36065__$1 = state_36065;
var statearr_36112_36167 = state_36065__$1;
(statearr_36112_36167[(2)] = inst_36032);

(statearr_36112_36167[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (16))){
var state_36065__$1 = state_36065;
var statearr_36113_36168 = state_36065__$1;
(statearr_36113_36168[(2)] = true);

(statearr_36113_36168[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (38))){
var inst_36055 = (state_36065[(2)]);
var state_36065__$1 = state_36065;
var statearr_36114_36169 = state_36065__$1;
(statearr_36114_36169[(2)] = inst_36055);

(statearr_36114_36169[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (30))){
var inst_36025 = (state_36065[(9)]);
var inst_36019 = (state_36065[(13)]);
var inst_36018 = (state_36065[(11)]);
var inst_36042 = cljs.core.empty_QMARK_.call(null,inst_36018);
var inst_36043 = inst_36019.call(null,inst_36025);
var inst_36044 = cljs.core.not.call(null,inst_36043);
var inst_36045 = (inst_36042) && (inst_36044);
var state_36065__$1 = state_36065;
var statearr_36115_36170 = state_36065__$1;
(statearr_36115_36170[(2)] = inst_36045);

(statearr_36115_36170[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (10))){
var inst_35971 = (state_36065[(8)]);
var inst_35991 = (state_36065[(2)]);
var inst_35992 = cljs.core.get.call(null,inst_35991,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35993 = cljs.core.get.call(null,inst_35991,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35994 = cljs.core.get.call(null,inst_35991,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35995 = inst_35971;
var state_36065__$1 = (function (){var statearr_36116 = state_36065;
(statearr_36116[(16)] = inst_35992);

(statearr_36116[(17)] = inst_35994);

(statearr_36116[(18)] = inst_35993);

(statearr_36116[(7)] = inst_35995);

return statearr_36116;
})();
var statearr_36117_36171 = state_36065__$1;
(statearr_36117_36171[(2)] = null);

(statearr_36117_36171[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (18))){
var inst_36009 = (state_36065[(2)]);
var state_36065__$1 = state_36065;
var statearr_36118_36172 = state_36065__$1;
(statearr_36118_36172[(2)] = inst_36009);

(statearr_36118_36172[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (37))){
var state_36065__$1 = state_36065;
var statearr_36119_36173 = state_36065__$1;
(statearr_36119_36173[(2)] = null);

(statearr_36119_36173[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (8))){
var inst_35971 = (state_36065[(8)]);
var inst_35988 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35971);
var state_36065__$1 = state_36065;
var statearr_36120_36174 = state_36065__$1;
(statearr_36120_36174[(2)] = inst_35988);

(statearr_36120_36174[(1)] = (10));


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
});})(c__20184__auto___36128,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20119__auto__,c__20184__auto___36128,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20120__auto__ = null;
var cljs$core$async$mix_$_state_machine__20120__auto____0 = (function (){
var statearr_36124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36124[(0)] = cljs$core$async$mix_$_state_machine__20120__auto__);

(statearr_36124[(1)] = (1));

return statearr_36124;
});
var cljs$core$async$mix_$_state_machine__20120__auto____1 = (function (state_36065){
while(true){
var ret_value__20121__auto__ = (function (){try{while(true){
var result__20122__auto__ = switch__20119__auto__.call(null,state_36065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20122__auto__;
}
break;
}
}catch (e36125){if((e36125 instanceof Object)){
var ex__20123__auto__ = e36125;
var statearr_36126_36175 = state_36065;
(statearr_36126_36175[(5)] = ex__20123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36176 = state_36065;
state_36065 = G__36176;
continue;
} else {
return ret_value__20121__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20120__auto__ = function(state_36065){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20120__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20120__auto____1.call(this,state_36065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20120__auto____0;
cljs$core$async$mix_$_state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20120__auto____1;
return cljs$core$async$mix_$_state_machine__20120__auto__;
})()
;})(switch__20119__auto__,c__20184__auto___36128,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20186__auto__ = (function (){var statearr_36127 = f__20185__auto__.call(null);
(statearr_36127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20184__auto___36128);

return statearr_36127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20186__auto__);
});})(c__20184__auto___36128,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args36177 = [];
var len__17402__auto___36180 = arguments.length;
var i__17403__auto___36181 = (0);
while(true){
if((i__17403__auto___36181 < len__17402__auto___36180)){
args36177.push((arguments[i__17403__auto___36181]));

var G__36182 = (i__17403__auto___36181 + (1));
i__17403__auto___36181 = G__36182;
continue;
} else {
}
break;
}

var G__36179 = args36177.length;
switch (G__36179) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36177.length)].join('')));

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
var args36185 = [];
var len__17402__auto___36310 = arguments.length;
var i__17403__auto___36311 = (0);
while(true){
if((i__17403__auto___36311 < len__17402__auto___36310)){
args36185.push((arguments[i__17403__auto___36311]));

var G__36312 = (i__17403__auto___36311 + (1));
i__17403__auto___36311 = G__36312;
continue;
} else {
}
break;
}

var G__36187 = args36185.length;
switch (G__36187) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36185.length)].join('')));

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
return (function (p1__36184_SHARP_){
if(cljs.core.truth_(p1__36184_SHARP_.call(null,topic))){
return p1__36184_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__36184_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16344__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async36188 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36188 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36189){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36189 = meta36189;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36190,meta36189__$1){
var self__ = this;
var _36190__$1 = this;
return (new cljs.core.async.t_cljs$core$async36188(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36189__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36188.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36190){
var self__ = this;
var _36190__$1 = this;
return self__.meta36189;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36188.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async36188.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36188.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async36188.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36188.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async36188.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36188.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36188.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36189","meta36189",1730143699,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36188.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36188.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36188";

cljs.core.async.t_cljs$core$async36188.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async36188");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async36188 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async36188(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36189){
return (new cljs.core.async.t_cljs$core$async36188(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36189));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async36188(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20184__auto___36314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20184__auto___36314,mults,ensure_mult,p){
return (function (){
var f__20185__auto__ = (function (){var switch__20119__auto__ = ((function (c__20184__auto___36314,mults,ensure_mult,p){
return (function (state_36262){
var state_val_36263 = (state_36262[(1)]);
if((state_val_36263 === (7))){
var inst_36258 = (state_36262[(2)]);
var state_36262__$1 = state_36262;
var statearr_36264_36315 = state_36262__$1;
(statearr_36264_36315[(2)] = inst_36258);

(statearr_36264_36315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36263 === (20))){
var state_36262__$1 = state_36262;
var statearr_36265_36316 = state_36262__$1;
(statearr_36265_36316[(2)] = null);

(statearr_36265_36316[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36263 === (1))){
var state_36262__$1 = state_36262;
var statearr_36266_36317 = state_36262__$1;
(statearr_36266_36317[(2)] = null);

(statearr_36266_36317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36263 === (24))){
var inst_36241 = (state_36262[(7)]);
var inst_36250 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36241);
var state_36262__$1 = state_36262;
var statearr_36267_36318 = state_36262__$1;
(statearr_36267_36318[(2)] = inst_36250);

(statearr_36267_36318[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36263 === (4))){
var inst_36193 = (state_36262[(8)]);
var inst_36193__$1 = (state_36262[(2)]);
var inst_36194 = (inst_36193__$1 == null);
var state_36262__$1 = (function (){var statearr_36268 = state_36262;
(statearr_36268[(8)] = inst_36193__$1);

return statearr_36268;
})();
if(cljs.core.truth_(inst_36194)){
var statearr_36269_36319 = state_36262__$1;
(statearr_36269_36319[(1)] = (5));

} else {
var statearr_36270_36320 = state_36262__$1;
(statearr_36270_36320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36263 === (15))){
var inst_36235 = (state_36262[(2)]);
var state_36262__$1 = state_36262;
var statearr_36271_36321 = state_36262__$1;
(statearr_36271_36321[(2)] = inst_36235);

(statearr_36271_36321[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36263 === (21))){
var inst_36255 = (state_36262[(2)]);
var state_36262__$1 = (function (){var statearr_36272 = state_36262;
(statearr_36272[(9)] = inst_36255);

return statearr_36272;
})();
var statearr_36273_36322 = state_36262__$1;
(statearr_36273_36322[(2)] = null);

(statearr_36273_36322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36263 === (13))){
var inst_36217 = (state_36262[(10)]);
var inst_36219 = cljs.core.chunked_seq_QMARK_.call(null,inst_36217);
var state_36262__$1 = state_36262;
if(inst_36219){
var statearr_36274_36323 = state_36262__$1;
(statearr_36274_36323[(1)] = (16));

} else {
var statearr_36275_36324 = state_36262__$1;
(statearr_36275_36324[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36263 === (22))){
var inst_36247 = (state_36262[(2)]);
var state_36262__$1 = state_36262;
if(cljs.core.truth_(inst_36247)){
var statearr_36276_36325 = state_36262__$1;
(statearr_36276_36325[(1)] = (23));

} else {
var statearr_36277_36326 = state_36262__$1;
(statearr_36277_36326[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36263 === (6))){
var inst_36243 = (state_36262[(11)]);
var inst_36241 = (state_36262[(7)]);
var inst_36193 = (state_36262[(8)]);
var inst_36241__$1 = topic_fn.call(null,inst_36193);
var inst_36242 = cljs.core.deref.call(null,mults);
var inst_36243__$1 = cljs.core.get.call(null,inst_36242,inst_36241__$1);
var state_36262__$1 = (function (){var statearr_36278 = state_36262;
(statearr_36278[(11)] = inst_36243__$1);

(statearr_36278[(7)] = inst_36241__$1);

return statearr_36278;
})();
if(cljs.core.truth_(inst_36243__$1)){
var statearr_36279_36327 = state_36262__$1;
(statearr_36279_36327[(1)] = (19));

} else {
var statearr_36280_36328 = state_36262__$1;
(statearr_36280_36328[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36263 === (25))){
var inst_36252 = (state_36262[(2)]);
var state_36262__$1 = state_36262;
var statearr_36281_36329 = state_36262__$1;
(statearr_36281_36329[(2)] = inst_36252);

(statearr_36281_36329[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36263 === (17))){
var inst_36217 = (state_36262[(10)]);
var inst_36226 = cljs.core.first.call(null,inst_36217);
var inst_36227 = cljs.core.async.muxch_STAR_.call(null,inst_36226);
var inst_36228 = cljs.core.async.close_BANG_.call(null,inst_36227);
var inst_36229 = cljs.core.next.call(null,inst_36217);
var inst_36203 = inst_36229;
var inst_36204 = null;
var inst_36205 = (0);
var inst_36206 = (0);
var state_36262__$1 = (function (){var statearr_36282 = state_36262;
(statearr_36282[(12)] = inst_36206);

(statearr_36282[(13)] = inst_36203);

(statearr_36282[(14)] = inst_36228);

(statearr_36282[(15)] = inst_36205);

(statearr_36282[(16)] = inst_36204);

return statearr_36282;
})();
var statearr_36283_36330 = state_36262__$1;
(statearr_36283_36330[(2)] = null);

(statearr_36283_36330[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36263 === (3))){
var inst_36260 = (state_36262[(2)]);
var state_36262__$1 = state_36262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36262__$1,inst_36260);
} else {
if((state_val_36263 === (12))){
var inst_36237 = (state_36262[(2)]);
var state_36262__$1 = state_36262;
var statearr_36284_36331 = state_36262__$1;
(statearr_36284_36331[(2)] = inst_36237);

(statearr_36284_36331[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36263 === (2))){
var state_36262__$1 = state_36262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36262__$1,(4),ch);
} else {
if((state_val_36263 === (23))){
var state_36262__$1 = state_36262;
var statearr_36285_36332 = state_36262__$1;
(statearr_36285_36332[(2)] = null);

(statearr_36285_36332[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36263 === (19))){
var inst_36243 = (state_36262[(11)]);
var inst_36193 = (state_36262[(8)]);
var inst_36245 = cljs.core.async.muxch_STAR_.call(null,inst_36243);
var state_36262__$1 = state_36262;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36262__$1,(22),inst_36245,inst_36193);
} else {
if((state_val_36263 === (11))){
var inst_36217 = (state_36262[(10)]);
var inst_36203 = (state_36262[(13)]);
var inst_36217__$1 = cljs.core.seq.call(null,inst_36203);
var state_36262__$1 = (function (){var statearr_36286 = state_36262;
(statearr_36286[(10)] = inst_36217__$1);

return statearr_36286;
})();
if(inst_36217__$1){
var statearr_36287_36333 = state_36262__$1;
(statearr_36287_36333[(1)] = (13));

} else {
var statearr_36288_36334 = state_36262__$1;
(statearr_36288_36334[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36263 === (9))){
var inst_36239 = (state_36262[(2)]);
var state_36262__$1 = state_36262;
var statearr_36289_36335 = state_36262__$1;
(statearr_36289_36335[(2)] = inst_36239);

(statearr_36289_36335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36263 === (5))){
var inst_36200 = cljs.core.deref.call(null,mults);
var inst_36201 = cljs.core.vals.call(null,inst_36200);
var inst_36202 = cljs.core.seq.call(null,inst_36201);
var inst_36203 = inst_36202;
var inst_36204 = null;
var inst_36205 = (0);
var inst_36206 = (0);
var state_36262__$1 = (function (){var statearr_36290 = state_36262;
(statearr_36290[(12)] = inst_36206);

(statearr_36290[(13)] = inst_36203);

(statearr_36290[(15)] = inst_36205);

(statearr_36290[(16)] = inst_36204);

return statearr_36290;
})();
var statearr_36291_36336 = state_36262__$1;
(statearr_36291_36336[(2)] = null);

(statearr_36291_36336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36263 === (14))){
var state_36262__$1 = state_36262;
var statearr_36295_36337 = state_36262__$1;
(statearr_36295_36337[(2)] = null);

(statearr_36295_36337[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36263 === (16))){
var inst_36217 = (state_36262[(10)]);
var inst_36221 = cljs.core.chunk_first.call(null,inst_36217);
var inst_36222 = cljs.core.chunk_rest.call(null,inst_36217);
var inst_36223 = cljs.core.count.call(null,inst_36221);
var inst_36203 = inst_36222;
var inst_36204 = inst_36221;
var inst_36205 = inst_36223;
var inst_36206 = (0);
var state_36262__$1 = (function (){var statearr_36296 = state_36262;
(statearr_36296[(12)] = inst_36206);

(statearr_36296[(13)] = inst_36203);

(statearr_36296[(15)] = inst_36205);

(statearr_36296[(16)] = inst_36204);

return statearr_36296;
})();
var statearr_36297_36338 = state_36262__$1;
(statearr_36297_36338[(2)] = null);

(statearr_36297_36338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36263 === (10))){
var inst_36206 = (state_36262[(12)]);
var inst_36203 = (state_36262[(13)]);
var inst_36205 = (state_36262[(15)]);
var inst_36204 = (state_36262[(16)]);
var inst_36211 = cljs.core._nth.call(null,inst_36204,inst_36206);
var inst_36212 = cljs.core.async.muxch_STAR_.call(null,inst_36211);
var inst_36213 = cljs.core.async.close_BANG_.call(null,inst_36212);
var inst_36214 = (inst_36206 + (1));
var tmp36292 = inst_36203;
var tmp36293 = inst_36205;
var tmp36294 = inst_36204;
var inst_36203__$1 = tmp36292;
var inst_36204__$1 = tmp36294;
var inst_36205__$1 = tmp36293;
var inst_36206__$1 = inst_36214;
var state_36262__$1 = (function (){var statearr_36298 = state_36262;
(statearr_36298[(12)] = inst_36206__$1);

(statearr_36298[(13)] = inst_36203__$1);

(statearr_36298[(15)] = inst_36205__$1);

(statearr_36298[(16)] = inst_36204__$1);

(statearr_36298[(17)] = inst_36213);

return statearr_36298;
})();
var statearr_36299_36339 = state_36262__$1;
(statearr_36299_36339[(2)] = null);

(statearr_36299_36339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36263 === (18))){
var inst_36232 = (state_36262[(2)]);
var state_36262__$1 = state_36262;
var statearr_36300_36340 = state_36262__$1;
(statearr_36300_36340[(2)] = inst_36232);

(statearr_36300_36340[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36263 === (8))){
var inst_36206 = (state_36262[(12)]);
var inst_36205 = (state_36262[(15)]);
var inst_36208 = (inst_36206 < inst_36205);
var inst_36209 = inst_36208;
var state_36262__$1 = state_36262;
if(cljs.core.truth_(inst_36209)){
var statearr_36301_36341 = state_36262__$1;
(statearr_36301_36341[(1)] = (10));

} else {
var statearr_36302_36342 = state_36262__$1;
(statearr_36302_36342[(1)] = (11));

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
});})(c__20184__auto___36314,mults,ensure_mult,p))
;
return ((function (switch__20119__auto__,c__20184__auto___36314,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20120__auto__ = null;
var cljs$core$async$state_machine__20120__auto____0 = (function (){
var statearr_36306 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36306[(0)] = cljs$core$async$state_machine__20120__auto__);

(statearr_36306[(1)] = (1));

return statearr_36306;
});
var cljs$core$async$state_machine__20120__auto____1 = (function (state_36262){
while(true){
var ret_value__20121__auto__ = (function (){try{while(true){
var result__20122__auto__ = switch__20119__auto__.call(null,state_36262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20122__auto__;
}
break;
}
}catch (e36307){if((e36307 instanceof Object)){
var ex__20123__auto__ = e36307;
var statearr_36308_36343 = state_36262;
(statearr_36308_36343[(5)] = ex__20123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36344 = state_36262;
state_36262 = G__36344;
continue;
} else {
return ret_value__20121__auto__;
}
break;
}
});
cljs$core$async$state_machine__20120__auto__ = function(state_36262){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20120__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20120__auto____1.call(this,state_36262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20120__auto____0;
cljs$core$async$state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20120__auto____1;
return cljs$core$async$state_machine__20120__auto__;
})()
;})(switch__20119__auto__,c__20184__auto___36314,mults,ensure_mult,p))
})();
var state__20186__auto__ = (function (){var statearr_36309 = f__20185__auto__.call(null);
(statearr_36309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20184__auto___36314);

return statearr_36309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20186__auto__);
});})(c__20184__auto___36314,mults,ensure_mult,p))
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
var args36345 = [];
var len__17402__auto___36348 = arguments.length;
var i__17403__auto___36349 = (0);
while(true){
if((i__17403__auto___36349 < len__17402__auto___36348)){
args36345.push((arguments[i__17403__auto___36349]));

var G__36350 = (i__17403__auto___36349 + (1));
i__17403__auto___36349 = G__36350;
continue;
} else {
}
break;
}

var G__36347 = args36345.length;
switch (G__36347) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36345.length)].join('')));

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
var args36352 = [];
var len__17402__auto___36355 = arguments.length;
var i__17403__auto___36356 = (0);
while(true){
if((i__17403__auto___36356 < len__17402__auto___36355)){
args36352.push((arguments[i__17403__auto___36356]));

var G__36357 = (i__17403__auto___36356 + (1));
i__17403__auto___36356 = G__36357;
continue;
} else {
}
break;
}

var G__36354 = args36352.length;
switch (G__36354) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36352.length)].join('')));

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
var args36359 = [];
var len__17402__auto___36430 = arguments.length;
var i__17403__auto___36431 = (0);
while(true){
if((i__17403__auto___36431 < len__17402__auto___36430)){
args36359.push((arguments[i__17403__auto___36431]));

var G__36432 = (i__17403__auto___36431 + (1));
i__17403__auto___36431 = G__36432;
continue;
} else {
}
break;
}

var G__36361 = args36359.length;
switch (G__36361) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36359.length)].join('')));

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
var c__20184__auto___36434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20184__auto___36434,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20185__auto__ = (function (){var switch__20119__auto__ = ((function (c__20184__auto___36434,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_36400){
var state_val_36401 = (state_36400[(1)]);
if((state_val_36401 === (7))){
var state_36400__$1 = state_36400;
var statearr_36402_36435 = state_36400__$1;
(statearr_36402_36435[(2)] = null);

(statearr_36402_36435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (1))){
var state_36400__$1 = state_36400;
var statearr_36403_36436 = state_36400__$1;
(statearr_36403_36436[(2)] = null);

(statearr_36403_36436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (4))){
var inst_36364 = (state_36400[(7)]);
var inst_36366 = (inst_36364 < cnt);
var state_36400__$1 = state_36400;
if(cljs.core.truth_(inst_36366)){
var statearr_36404_36437 = state_36400__$1;
(statearr_36404_36437[(1)] = (6));

} else {
var statearr_36405_36438 = state_36400__$1;
(statearr_36405_36438[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (15))){
var inst_36396 = (state_36400[(2)]);
var state_36400__$1 = state_36400;
var statearr_36406_36439 = state_36400__$1;
(statearr_36406_36439[(2)] = inst_36396);

(statearr_36406_36439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (13))){
var inst_36389 = cljs.core.async.close_BANG_.call(null,out);
var state_36400__$1 = state_36400;
var statearr_36407_36440 = state_36400__$1;
(statearr_36407_36440[(2)] = inst_36389);

(statearr_36407_36440[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (6))){
var state_36400__$1 = state_36400;
var statearr_36408_36441 = state_36400__$1;
(statearr_36408_36441[(2)] = null);

(statearr_36408_36441[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (3))){
var inst_36398 = (state_36400[(2)]);
var state_36400__$1 = state_36400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36400__$1,inst_36398);
} else {
if((state_val_36401 === (12))){
var inst_36386 = (state_36400[(8)]);
var inst_36386__$1 = (state_36400[(2)]);
var inst_36387 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36386__$1);
var state_36400__$1 = (function (){var statearr_36409 = state_36400;
(statearr_36409[(8)] = inst_36386__$1);

return statearr_36409;
})();
if(cljs.core.truth_(inst_36387)){
var statearr_36410_36442 = state_36400__$1;
(statearr_36410_36442[(1)] = (13));

} else {
var statearr_36411_36443 = state_36400__$1;
(statearr_36411_36443[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (2))){
var inst_36363 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_36364 = (0);
var state_36400__$1 = (function (){var statearr_36412 = state_36400;
(statearr_36412[(9)] = inst_36363);

(statearr_36412[(7)] = inst_36364);

return statearr_36412;
})();
var statearr_36413_36444 = state_36400__$1;
(statearr_36413_36444[(2)] = null);

(statearr_36413_36444[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (11))){
var inst_36364 = (state_36400[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36400,(10),Object,null,(9));
var inst_36373 = chs__$1.call(null,inst_36364);
var inst_36374 = done.call(null,inst_36364);
var inst_36375 = cljs.core.async.take_BANG_.call(null,inst_36373,inst_36374);
var state_36400__$1 = state_36400;
var statearr_36414_36445 = state_36400__$1;
(statearr_36414_36445[(2)] = inst_36375);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36400__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (9))){
var inst_36364 = (state_36400[(7)]);
var inst_36377 = (state_36400[(2)]);
var inst_36378 = (inst_36364 + (1));
var inst_36364__$1 = inst_36378;
var state_36400__$1 = (function (){var statearr_36415 = state_36400;
(statearr_36415[(7)] = inst_36364__$1);

(statearr_36415[(10)] = inst_36377);

return statearr_36415;
})();
var statearr_36416_36446 = state_36400__$1;
(statearr_36416_36446[(2)] = null);

(statearr_36416_36446[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (5))){
var inst_36384 = (state_36400[(2)]);
var state_36400__$1 = (function (){var statearr_36417 = state_36400;
(statearr_36417[(11)] = inst_36384);

return statearr_36417;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36400__$1,(12),dchan);
} else {
if((state_val_36401 === (14))){
var inst_36386 = (state_36400[(8)]);
var inst_36391 = cljs.core.apply.call(null,f,inst_36386);
var state_36400__$1 = state_36400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36400__$1,(16),out,inst_36391);
} else {
if((state_val_36401 === (16))){
var inst_36393 = (state_36400[(2)]);
var state_36400__$1 = (function (){var statearr_36418 = state_36400;
(statearr_36418[(12)] = inst_36393);

return statearr_36418;
})();
var statearr_36419_36447 = state_36400__$1;
(statearr_36419_36447[(2)] = null);

(statearr_36419_36447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (10))){
var inst_36368 = (state_36400[(2)]);
var inst_36369 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_36400__$1 = (function (){var statearr_36420 = state_36400;
(statearr_36420[(13)] = inst_36368);

return statearr_36420;
})();
var statearr_36421_36448 = state_36400__$1;
(statearr_36421_36448[(2)] = inst_36369);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36400__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (8))){
var inst_36382 = (state_36400[(2)]);
var state_36400__$1 = state_36400;
var statearr_36422_36449 = state_36400__$1;
(statearr_36422_36449[(2)] = inst_36382);

(statearr_36422_36449[(1)] = (5));


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
});})(c__20184__auto___36434,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20119__auto__,c__20184__auto___36434,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20120__auto__ = null;
var cljs$core$async$state_machine__20120__auto____0 = (function (){
var statearr_36426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36426[(0)] = cljs$core$async$state_machine__20120__auto__);

(statearr_36426[(1)] = (1));

return statearr_36426;
});
var cljs$core$async$state_machine__20120__auto____1 = (function (state_36400){
while(true){
var ret_value__20121__auto__ = (function (){try{while(true){
var result__20122__auto__ = switch__20119__auto__.call(null,state_36400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20122__auto__;
}
break;
}
}catch (e36427){if((e36427 instanceof Object)){
var ex__20123__auto__ = e36427;
var statearr_36428_36450 = state_36400;
(statearr_36428_36450[(5)] = ex__20123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36451 = state_36400;
state_36400 = G__36451;
continue;
} else {
return ret_value__20121__auto__;
}
break;
}
});
cljs$core$async$state_machine__20120__auto__ = function(state_36400){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20120__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20120__auto____1.call(this,state_36400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20120__auto____0;
cljs$core$async$state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20120__auto____1;
return cljs$core$async$state_machine__20120__auto__;
})()
;})(switch__20119__auto__,c__20184__auto___36434,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20186__auto__ = (function (){var statearr_36429 = f__20185__auto__.call(null);
(statearr_36429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20184__auto___36434);

return statearr_36429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20186__auto__);
});})(c__20184__auto___36434,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args36453 = [];
var len__17402__auto___36509 = arguments.length;
var i__17403__auto___36510 = (0);
while(true){
if((i__17403__auto___36510 < len__17402__auto___36509)){
args36453.push((arguments[i__17403__auto___36510]));

var G__36511 = (i__17403__auto___36510 + (1));
i__17403__auto___36510 = G__36511;
continue;
} else {
}
break;
}

var G__36455 = args36453.length;
switch (G__36455) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36453.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20184__auto___36513 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20184__auto___36513,out){
return (function (){
var f__20185__auto__ = (function (){var switch__20119__auto__ = ((function (c__20184__auto___36513,out){
return (function (state_36485){
var state_val_36486 = (state_36485[(1)]);
if((state_val_36486 === (7))){
var inst_36465 = (state_36485[(7)]);
var inst_36464 = (state_36485[(8)]);
var inst_36464__$1 = (state_36485[(2)]);
var inst_36465__$1 = cljs.core.nth.call(null,inst_36464__$1,(0),null);
var inst_36466 = cljs.core.nth.call(null,inst_36464__$1,(1),null);
var inst_36467 = (inst_36465__$1 == null);
var state_36485__$1 = (function (){var statearr_36487 = state_36485;
(statearr_36487[(9)] = inst_36466);

(statearr_36487[(7)] = inst_36465__$1);

(statearr_36487[(8)] = inst_36464__$1);

return statearr_36487;
})();
if(cljs.core.truth_(inst_36467)){
var statearr_36488_36514 = state_36485__$1;
(statearr_36488_36514[(1)] = (8));

} else {
var statearr_36489_36515 = state_36485__$1;
(statearr_36489_36515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (1))){
var inst_36456 = cljs.core.vec.call(null,chs);
var inst_36457 = inst_36456;
var state_36485__$1 = (function (){var statearr_36490 = state_36485;
(statearr_36490[(10)] = inst_36457);

return statearr_36490;
})();
var statearr_36491_36516 = state_36485__$1;
(statearr_36491_36516[(2)] = null);

(statearr_36491_36516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (4))){
var inst_36457 = (state_36485[(10)]);
var state_36485__$1 = state_36485;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36485__$1,(7),inst_36457);
} else {
if((state_val_36486 === (6))){
var inst_36481 = (state_36485[(2)]);
var state_36485__$1 = state_36485;
var statearr_36492_36517 = state_36485__$1;
(statearr_36492_36517[(2)] = inst_36481);

(statearr_36492_36517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (3))){
var inst_36483 = (state_36485[(2)]);
var state_36485__$1 = state_36485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36485__$1,inst_36483);
} else {
if((state_val_36486 === (2))){
var inst_36457 = (state_36485[(10)]);
var inst_36459 = cljs.core.count.call(null,inst_36457);
var inst_36460 = (inst_36459 > (0));
var state_36485__$1 = state_36485;
if(cljs.core.truth_(inst_36460)){
var statearr_36494_36518 = state_36485__$1;
(statearr_36494_36518[(1)] = (4));

} else {
var statearr_36495_36519 = state_36485__$1;
(statearr_36495_36519[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (11))){
var inst_36457 = (state_36485[(10)]);
var inst_36474 = (state_36485[(2)]);
var tmp36493 = inst_36457;
var inst_36457__$1 = tmp36493;
var state_36485__$1 = (function (){var statearr_36496 = state_36485;
(statearr_36496[(11)] = inst_36474);

(statearr_36496[(10)] = inst_36457__$1);

return statearr_36496;
})();
var statearr_36497_36520 = state_36485__$1;
(statearr_36497_36520[(2)] = null);

(statearr_36497_36520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (9))){
var inst_36465 = (state_36485[(7)]);
var state_36485__$1 = state_36485;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36485__$1,(11),out,inst_36465);
} else {
if((state_val_36486 === (5))){
var inst_36479 = cljs.core.async.close_BANG_.call(null,out);
var state_36485__$1 = state_36485;
var statearr_36498_36521 = state_36485__$1;
(statearr_36498_36521[(2)] = inst_36479);

(statearr_36498_36521[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (10))){
var inst_36477 = (state_36485[(2)]);
var state_36485__$1 = state_36485;
var statearr_36499_36522 = state_36485__$1;
(statearr_36499_36522[(2)] = inst_36477);

(statearr_36499_36522[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (8))){
var inst_36466 = (state_36485[(9)]);
var inst_36465 = (state_36485[(7)]);
var inst_36464 = (state_36485[(8)]);
var inst_36457 = (state_36485[(10)]);
var inst_36469 = (function (){var cs = inst_36457;
var vec__36462 = inst_36464;
var v = inst_36465;
var c = inst_36466;
return ((function (cs,vec__36462,v,c,inst_36466,inst_36465,inst_36464,inst_36457,state_val_36486,c__20184__auto___36513,out){
return (function (p1__36452_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__36452_SHARP_);
});
;})(cs,vec__36462,v,c,inst_36466,inst_36465,inst_36464,inst_36457,state_val_36486,c__20184__auto___36513,out))
})();
var inst_36470 = cljs.core.filterv.call(null,inst_36469,inst_36457);
var inst_36457__$1 = inst_36470;
var state_36485__$1 = (function (){var statearr_36500 = state_36485;
(statearr_36500[(10)] = inst_36457__$1);

return statearr_36500;
})();
var statearr_36501_36523 = state_36485__$1;
(statearr_36501_36523[(2)] = null);

(statearr_36501_36523[(1)] = (2));


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
});})(c__20184__auto___36513,out))
;
return ((function (switch__20119__auto__,c__20184__auto___36513,out){
return (function() {
var cljs$core$async$state_machine__20120__auto__ = null;
var cljs$core$async$state_machine__20120__auto____0 = (function (){
var statearr_36505 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36505[(0)] = cljs$core$async$state_machine__20120__auto__);

(statearr_36505[(1)] = (1));

return statearr_36505;
});
var cljs$core$async$state_machine__20120__auto____1 = (function (state_36485){
while(true){
var ret_value__20121__auto__ = (function (){try{while(true){
var result__20122__auto__ = switch__20119__auto__.call(null,state_36485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20122__auto__;
}
break;
}
}catch (e36506){if((e36506 instanceof Object)){
var ex__20123__auto__ = e36506;
var statearr_36507_36524 = state_36485;
(statearr_36507_36524[(5)] = ex__20123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36525 = state_36485;
state_36485 = G__36525;
continue;
} else {
return ret_value__20121__auto__;
}
break;
}
});
cljs$core$async$state_machine__20120__auto__ = function(state_36485){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20120__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20120__auto____1.call(this,state_36485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20120__auto____0;
cljs$core$async$state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20120__auto____1;
return cljs$core$async$state_machine__20120__auto__;
})()
;})(switch__20119__auto__,c__20184__auto___36513,out))
})();
var state__20186__auto__ = (function (){var statearr_36508 = f__20185__auto__.call(null);
(statearr_36508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20184__auto___36513);

return statearr_36508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20186__auto__);
});})(c__20184__auto___36513,out))
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
var args36526 = [];
var len__17402__auto___36575 = arguments.length;
var i__17403__auto___36576 = (0);
while(true){
if((i__17403__auto___36576 < len__17402__auto___36575)){
args36526.push((arguments[i__17403__auto___36576]));

var G__36577 = (i__17403__auto___36576 + (1));
i__17403__auto___36576 = G__36577;
continue;
} else {
}
break;
}

var G__36528 = args36526.length;
switch (G__36528) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36526.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20184__auto___36579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20184__auto___36579,out){
return (function (){
var f__20185__auto__ = (function (){var switch__20119__auto__ = ((function (c__20184__auto___36579,out){
return (function (state_36552){
var state_val_36553 = (state_36552[(1)]);
if((state_val_36553 === (7))){
var inst_36534 = (state_36552[(7)]);
var inst_36534__$1 = (state_36552[(2)]);
var inst_36535 = (inst_36534__$1 == null);
var inst_36536 = cljs.core.not.call(null,inst_36535);
var state_36552__$1 = (function (){var statearr_36554 = state_36552;
(statearr_36554[(7)] = inst_36534__$1);

return statearr_36554;
})();
if(inst_36536){
var statearr_36555_36580 = state_36552__$1;
(statearr_36555_36580[(1)] = (8));

} else {
var statearr_36556_36581 = state_36552__$1;
(statearr_36556_36581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36553 === (1))){
var inst_36529 = (0);
var state_36552__$1 = (function (){var statearr_36557 = state_36552;
(statearr_36557[(8)] = inst_36529);

return statearr_36557;
})();
var statearr_36558_36582 = state_36552__$1;
(statearr_36558_36582[(2)] = null);

(statearr_36558_36582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36553 === (4))){
var state_36552__$1 = state_36552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36552__$1,(7),ch);
} else {
if((state_val_36553 === (6))){
var inst_36547 = (state_36552[(2)]);
var state_36552__$1 = state_36552;
var statearr_36559_36583 = state_36552__$1;
(statearr_36559_36583[(2)] = inst_36547);

(statearr_36559_36583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36553 === (3))){
var inst_36549 = (state_36552[(2)]);
var inst_36550 = cljs.core.async.close_BANG_.call(null,out);
var state_36552__$1 = (function (){var statearr_36560 = state_36552;
(statearr_36560[(9)] = inst_36549);

return statearr_36560;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36552__$1,inst_36550);
} else {
if((state_val_36553 === (2))){
var inst_36529 = (state_36552[(8)]);
var inst_36531 = (inst_36529 < n);
var state_36552__$1 = state_36552;
if(cljs.core.truth_(inst_36531)){
var statearr_36561_36584 = state_36552__$1;
(statearr_36561_36584[(1)] = (4));

} else {
var statearr_36562_36585 = state_36552__$1;
(statearr_36562_36585[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36553 === (11))){
var inst_36529 = (state_36552[(8)]);
var inst_36539 = (state_36552[(2)]);
var inst_36540 = (inst_36529 + (1));
var inst_36529__$1 = inst_36540;
var state_36552__$1 = (function (){var statearr_36563 = state_36552;
(statearr_36563[(10)] = inst_36539);

(statearr_36563[(8)] = inst_36529__$1);

return statearr_36563;
})();
var statearr_36564_36586 = state_36552__$1;
(statearr_36564_36586[(2)] = null);

(statearr_36564_36586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36553 === (9))){
var state_36552__$1 = state_36552;
var statearr_36565_36587 = state_36552__$1;
(statearr_36565_36587[(2)] = null);

(statearr_36565_36587[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36553 === (5))){
var state_36552__$1 = state_36552;
var statearr_36566_36588 = state_36552__$1;
(statearr_36566_36588[(2)] = null);

(statearr_36566_36588[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36553 === (10))){
var inst_36544 = (state_36552[(2)]);
var state_36552__$1 = state_36552;
var statearr_36567_36589 = state_36552__$1;
(statearr_36567_36589[(2)] = inst_36544);

(statearr_36567_36589[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36553 === (8))){
var inst_36534 = (state_36552[(7)]);
var state_36552__$1 = state_36552;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36552__$1,(11),out,inst_36534);
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
});})(c__20184__auto___36579,out))
;
return ((function (switch__20119__auto__,c__20184__auto___36579,out){
return (function() {
var cljs$core$async$state_machine__20120__auto__ = null;
var cljs$core$async$state_machine__20120__auto____0 = (function (){
var statearr_36571 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36571[(0)] = cljs$core$async$state_machine__20120__auto__);

(statearr_36571[(1)] = (1));

return statearr_36571;
});
var cljs$core$async$state_machine__20120__auto____1 = (function (state_36552){
while(true){
var ret_value__20121__auto__ = (function (){try{while(true){
var result__20122__auto__ = switch__20119__auto__.call(null,state_36552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20122__auto__;
}
break;
}
}catch (e36572){if((e36572 instanceof Object)){
var ex__20123__auto__ = e36572;
var statearr_36573_36590 = state_36552;
(statearr_36573_36590[(5)] = ex__20123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36591 = state_36552;
state_36552 = G__36591;
continue;
} else {
return ret_value__20121__auto__;
}
break;
}
});
cljs$core$async$state_machine__20120__auto__ = function(state_36552){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20120__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20120__auto____1.call(this,state_36552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20120__auto____0;
cljs$core$async$state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20120__auto____1;
return cljs$core$async$state_machine__20120__auto__;
})()
;})(switch__20119__auto__,c__20184__auto___36579,out))
})();
var state__20186__auto__ = (function (){var statearr_36574 = f__20185__auto__.call(null);
(statearr_36574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20184__auto___36579);

return statearr_36574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20186__auto__);
});})(c__20184__auto___36579,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36599 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36599 = (function (map_LT_,f,ch,meta36600){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta36600 = meta36600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36601,meta36600__$1){
var self__ = this;
var _36601__$1 = this;
return (new cljs.core.async.t_cljs$core$async36599(self__.map_LT_,self__.f,self__.ch,meta36600__$1));
});

cljs.core.async.t_cljs$core$async36599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36601){
var self__ = this;
var _36601__$1 = this;
return self__.meta36600;
});

cljs.core.async.t_cljs$core$async36599.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async36599.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36599.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36599.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async36599.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async36602 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36602 = (function (map_LT_,f,ch,meta36600,_,fn1,meta36603){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta36600 = meta36600;
this._ = _;
this.fn1 = fn1;
this.meta36603 = meta36603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36604,meta36603__$1){
var self__ = this;
var _36604__$1 = this;
return (new cljs.core.async.t_cljs$core$async36602(self__.map_LT_,self__.f,self__.ch,self__.meta36600,self__._,self__.fn1,meta36603__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async36602.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36604){
var self__ = this;
var _36604__$1 = this;
return self__.meta36603;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36602.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36602.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36602.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__36592_SHARP_){
return f1.call(null,(((p1__36592_SHARP_ == null))?null:self__.f.call(null,p1__36592_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async36602.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36600","meta36600",1922654589,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36599","cljs.core.async/t_cljs$core$async36599",-1150841105,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36603","meta36603",-1979221267,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36602.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36602.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36602";

cljs.core.async.t_cljs$core$async36602.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async36602");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async36602 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36602(map_LT___$1,f__$1,ch__$1,meta36600__$1,___$2,fn1__$1,meta36603){
return (new cljs.core.async.t_cljs$core$async36602(map_LT___$1,f__$1,ch__$1,meta36600__$1,___$2,fn1__$1,meta36603));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async36602(self__.map_LT_,self__.f,self__.ch,self__.meta36600,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async36599.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async36599.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async36599.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36600","meta36600",1922654589,null)], null);
});

cljs.core.async.t_cljs$core$async36599.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36599.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36599";

cljs.core.async.t_cljs$core$async36599.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async36599");
});

cljs.core.async.__GT_t_cljs$core$async36599 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36599(map_LT___$1,f__$1,ch__$1,meta36600){
return (new cljs.core.async.t_cljs$core$async36599(map_LT___$1,f__$1,ch__$1,meta36600));
});

}

return (new cljs.core.async.t_cljs$core$async36599(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36608 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36608 = (function (map_GT_,f,ch,meta36609){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta36609 = meta36609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36610,meta36609__$1){
var self__ = this;
var _36610__$1 = this;
return (new cljs.core.async.t_cljs$core$async36608(self__.map_GT_,self__.f,self__.ch,meta36609__$1));
});

cljs.core.async.t_cljs$core$async36608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36610){
var self__ = this;
var _36610__$1 = this;
return self__.meta36609;
});

cljs.core.async.t_cljs$core$async36608.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async36608.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36608.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async36608.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36608.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async36608.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async36608.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36609","meta36609",-513751556,null)], null);
});

cljs.core.async.t_cljs$core$async36608.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36608.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36608";

cljs.core.async.t_cljs$core$async36608.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async36608");
});

cljs.core.async.__GT_t_cljs$core$async36608 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36608(map_GT___$1,f__$1,ch__$1,meta36609){
return (new cljs.core.async.t_cljs$core$async36608(map_GT___$1,f__$1,ch__$1,meta36609));
});

}

return (new cljs.core.async.t_cljs$core$async36608(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async36614 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36614 = (function (filter_GT_,p,ch,meta36615){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta36615 = meta36615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36616,meta36615__$1){
var self__ = this;
var _36616__$1 = this;
return (new cljs.core.async.t_cljs$core$async36614(self__.filter_GT_,self__.p,self__.ch,meta36615__$1));
});

cljs.core.async.t_cljs$core$async36614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36616){
var self__ = this;
var _36616__$1 = this;
return self__.meta36615;
});

cljs.core.async.t_cljs$core$async36614.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async36614.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36614.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36614.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async36614.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36614.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async36614.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async36614.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36615","meta36615",1793875910,null)], null);
});

cljs.core.async.t_cljs$core$async36614.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36614.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36614";

cljs.core.async.t_cljs$core$async36614.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async36614");
});

cljs.core.async.__GT_t_cljs$core$async36614 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36614(filter_GT___$1,p__$1,ch__$1,meta36615){
return (new cljs.core.async.t_cljs$core$async36614(filter_GT___$1,p__$1,ch__$1,meta36615));
});

}

return (new cljs.core.async.t_cljs$core$async36614(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args36617 = [];
var len__17402__auto___36661 = arguments.length;
var i__17403__auto___36662 = (0);
while(true){
if((i__17403__auto___36662 < len__17402__auto___36661)){
args36617.push((arguments[i__17403__auto___36662]));

var G__36663 = (i__17403__auto___36662 + (1));
i__17403__auto___36662 = G__36663;
continue;
} else {
}
break;
}

var G__36619 = args36617.length;
switch (G__36619) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36617.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20184__auto___36665 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20184__auto___36665,out){
return (function (){
var f__20185__auto__ = (function (){var switch__20119__auto__ = ((function (c__20184__auto___36665,out){
return (function (state_36640){
var state_val_36641 = (state_36640[(1)]);
if((state_val_36641 === (7))){
var inst_36636 = (state_36640[(2)]);
var state_36640__$1 = state_36640;
var statearr_36642_36666 = state_36640__$1;
(statearr_36642_36666[(2)] = inst_36636);

(statearr_36642_36666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (1))){
var state_36640__$1 = state_36640;
var statearr_36643_36667 = state_36640__$1;
(statearr_36643_36667[(2)] = null);

(statearr_36643_36667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (4))){
var inst_36622 = (state_36640[(7)]);
var inst_36622__$1 = (state_36640[(2)]);
var inst_36623 = (inst_36622__$1 == null);
var state_36640__$1 = (function (){var statearr_36644 = state_36640;
(statearr_36644[(7)] = inst_36622__$1);

return statearr_36644;
})();
if(cljs.core.truth_(inst_36623)){
var statearr_36645_36668 = state_36640__$1;
(statearr_36645_36668[(1)] = (5));

} else {
var statearr_36646_36669 = state_36640__$1;
(statearr_36646_36669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (6))){
var inst_36622 = (state_36640[(7)]);
var inst_36627 = p.call(null,inst_36622);
var state_36640__$1 = state_36640;
if(cljs.core.truth_(inst_36627)){
var statearr_36647_36670 = state_36640__$1;
(statearr_36647_36670[(1)] = (8));

} else {
var statearr_36648_36671 = state_36640__$1;
(statearr_36648_36671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (3))){
var inst_36638 = (state_36640[(2)]);
var state_36640__$1 = state_36640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36640__$1,inst_36638);
} else {
if((state_val_36641 === (2))){
var state_36640__$1 = state_36640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36640__$1,(4),ch);
} else {
if((state_val_36641 === (11))){
var inst_36630 = (state_36640[(2)]);
var state_36640__$1 = state_36640;
var statearr_36649_36672 = state_36640__$1;
(statearr_36649_36672[(2)] = inst_36630);

(statearr_36649_36672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (9))){
var state_36640__$1 = state_36640;
var statearr_36650_36673 = state_36640__$1;
(statearr_36650_36673[(2)] = null);

(statearr_36650_36673[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (5))){
var inst_36625 = cljs.core.async.close_BANG_.call(null,out);
var state_36640__$1 = state_36640;
var statearr_36651_36674 = state_36640__$1;
(statearr_36651_36674[(2)] = inst_36625);

(statearr_36651_36674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (10))){
var inst_36633 = (state_36640[(2)]);
var state_36640__$1 = (function (){var statearr_36652 = state_36640;
(statearr_36652[(8)] = inst_36633);

return statearr_36652;
})();
var statearr_36653_36675 = state_36640__$1;
(statearr_36653_36675[(2)] = null);

(statearr_36653_36675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (8))){
var inst_36622 = (state_36640[(7)]);
var state_36640__$1 = state_36640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36640__$1,(11),out,inst_36622);
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
});})(c__20184__auto___36665,out))
;
return ((function (switch__20119__auto__,c__20184__auto___36665,out){
return (function() {
var cljs$core$async$state_machine__20120__auto__ = null;
var cljs$core$async$state_machine__20120__auto____0 = (function (){
var statearr_36657 = [null,null,null,null,null,null,null,null,null];
(statearr_36657[(0)] = cljs$core$async$state_machine__20120__auto__);

(statearr_36657[(1)] = (1));

return statearr_36657;
});
var cljs$core$async$state_machine__20120__auto____1 = (function (state_36640){
while(true){
var ret_value__20121__auto__ = (function (){try{while(true){
var result__20122__auto__ = switch__20119__auto__.call(null,state_36640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20122__auto__;
}
break;
}
}catch (e36658){if((e36658 instanceof Object)){
var ex__20123__auto__ = e36658;
var statearr_36659_36676 = state_36640;
(statearr_36659_36676[(5)] = ex__20123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36677 = state_36640;
state_36640 = G__36677;
continue;
} else {
return ret_value__20121__auto__;
}
break;
}
});
cljs$core$async$state_machine__20120__auto__ = function(state_36640){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20120__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20120__auto____1.call(this,state_36640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20120__auto____0;
cljs$core$async$state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20120__auto____1;
return cljs$core$async$state_machine__20120__auto__;
})()
;})(switch__20119__auto__,c__20184__auto___36665,out))
})();
var state__20186__auto__ = (function (){var statearr_36660 = f__20185__auto__.call(null);
(statearr_36660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20184__auto___36665);

return statearr_36660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20186__auto__);
});})(c__20184__auto___36665,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args36678 = [];
var len__17402__auto___36681 = arguments.length;
var i__17403__auto___36682 = (0);
while(true){
if((i__17403__auto___36682 < len__17402__auto___36681)){
args36678.push((arguments[i__17403__auto___36682]));

var G__36683 = (i__17403__auto___36682 + (1));
i__17403__auto___36682 = G__36683;
continue;
} else {
}
break;
}

var G__36680 = args36678.length;
switch (G__36680) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36678.length)].join('')));

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
var c__20184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20184__auto__){
return (function (){
var f__20185__auto__ = (function (){var switch__20119__auto__ = ((function (c__20184__auto__){
return (function (state_36850){
var state_val_36851 = (state_36850[(1)]);
if((state_val_36851 === (7))){
var inst_36846 = (state_36850[(2)]);
var state_36850__$1 = state_36850;
var statearr_36852_36893 = state_36850__$1;
(statearr_36852_36893[(2)] = inst_36846);

(statearr_36852_36893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36851 === (20))){
var inst_36816 = (state_36850[(7)]);
var inst_36827 = (state_36850[(2)]);
var inst_36828 = cljs.core.next.call(null,inst_36816);
var inst_36802 = inst_36828;
var inst_36803 = null;
var inst_36804 = (0);
var inst_36805 = (0);
var state_36850__$1 = (function (){var statearr_36853 = state_36850;
(statearr_36853[(8)] = inst_36802);

(statearr_36853[(9)] = inst_36803);

(statearr_36853[(10)] = inst_36805);

(statearr_36853[(11)] = inst_36827);

(statearr_36853[(12)] = inst_36804);

return statearr_36853;
})();
var statearr_36854_36894 = state_36850__$1;
(statearr_36854_36894[(2)] = null);

(statearr_36854_36894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36851 === (1))){
var state_36850__$1 = state_36850;
var statearr_36855_36895 = state_36850__$1;
(statearr_36855_36895[(2)] = null);

(statearr_36855_36895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36851 === (4))){
var inst_36791 = (state_36850[(13)]);
var inst_36791__$1 = (state_36850[(2)]);
var inst_36792 = (inst_36791__$1 == null);
var state_36850__$1 = (function (){var statearr_36856 = state_36850;
(statearr_36856[(13)] = inst_36791__$1);

return statearr_36856;
})();
if(cljs.core.truth_(inst_36792)){
var statearr_36857_36896 = state_36850__$1;
(statearr_36857_36896[(1)] = (5));

} else {
var statearr_36858_36897 = state_36850__$1;
(statearr_36858_36897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36851 === (15))){
var state_36850__$1 = state_36850;
var statearr_36862_36898 = state_36850__$1;
(statearr_36862_36898[(2)] = null);

(statearr_36862_36898[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36851 === (21))){
var state_36850__$1 = state_36850;
var statearr_36863_36899 = state_36850__$1;
(statearr_36863_36899[(2)] = null);

(statearr_36863_36899[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36851 === (13))){
var inst_36802 = (state_36850[(8)]);
var inst_36803 = (state_36850[(9)]);
var inst_36805 = (state_36850[(10)]);
var inst_36804 = (state_36850[(12)]);
var inst_36812 = (state_36850[(2)]);
var inst_36813 = (inst_36805 + (1));
var tmp36859 = inst_36802;
var tmp36860 = inst_36803;
var tmp36861 = inst_36804;
var inst_36802__$1 = tmp36859;
var inst_36803__$1 = tmp36860;
var inst_36804__$1 = tmp36861;
var inst_36805__$1 = inst_36813;
var state_36850__$1 = (function (){var statearr_36864 = state_36850;
(statearr_36864[(8)] = inst_36802__$1);

(statearr_36864[(9)] = inst_36803__$1);

(statearr_36864[(10)] = inst_36805__$1);

(statearr_36864[(12)] = inst_36804__$1);

(statearr_36864[(14)] = inst_36812);

return statearr_36864;
})();
var statearr_36865_36900 = state_36850__$1;
(statearr_36865_36900[(2)] = null);

(statearr_36865_36900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36851 === (22))){
var state_36850__$1 = state_36850;
var statearr_36866_36901 = state_36850__$1;
(statearr_36866_36901[(2)] = null);

(statearr_36866_36901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36851 === (6))){
var inst_36791 = (state_36850[(13)]);
var inst_36800 = f.call(null,inst_36791);
var inst_36801 = cljs.core.seq.call(null,inst_36800);
var inst_36802 = inst_36801;
var inst_36803 = null;
var inst_36804 = (0);
var inst_36805 = (0);
var state_36850__$1 = (function (){var statearr_36867 = state_36850;
(statearr_36867[(8)] = inst_36802);

(statearr_36867[(9)] = inst_36803);

(statearr_36867[(10)] = inst_36805);

(statearr_36867[(12)] = inst_36804);

return statearr_36867;
})();
var statearr_36868_36902 = state_36850__$1;
(statearr_36868_36902[(2)] = null);

(statearr_36868_36902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36851 === (17))){
var inst_36816 = (state_36850[(7)]);
var inst_36820 = cljs.core.chunk_first.call(null,inst_36816);
var inst_36821 = cljs.core.chunk_rest.call(null,inst_36816);
var inst_36822 = cljs.core.count.call(null,inst_36820);
var inst_36802 = inst_36821;
var inst_36803 = inst_36820;
var inst_36804 = inst_36822;
var inst_36805 = (0);
var state_36850__$1 = (function (){var statearr_36869 = state_36850;
(statearr_36869[(8)] = inst_36802);

(statearr_36869[(9)] = inst_36803);

(statearr_36869[(10)] = inst_36805);

(statearr_36869[(12)] = inst_36804);

return statearr_36869;
})();
var statearr_36870_36903 = state_36850__$1;
(statearr_36870_36903[(2)] = null);

(statearr_36870_36903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36851 === (3))){
var inst_36848 = (state_36850[(2)]);
var state_36850__$1 = state_36850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36850__$1,inst_36848);
} else {
if((state_val_36851 === (12))){
var inst_36836 = (state_36850[(2)]);
var state_36850__$1 = state_36850;
var statearr_36871_36904 = state_36850__$1;
(statearr_36871_36904[(2)] = inst_36836);

(statearr_36871_36904[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36851 === (2))){
var state_36850__$1 = state_36850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36850__$1,(4),in$);
} else {
if((state_val_36851 === (23))){
var inst_36844 = (state_36850[(2)]);
var state_36850__$1 = state_36850;
var statearr_36872_36905 = state_36850__$1;
(statearr_36872_36905[(2)] = inst_36844);

(statearr_36872_36905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36851 === (19))){
var inst_36831 = (state_36850[(2)]);
var state_36850__$1 = state_36850;
var statearr_36873_36906 = state_36850__$1;
(statearr_36873_36906[(2)] = inst_36831);

(statearr_36873_36906[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36851 === (11))){
var inst_36802 = (state_36850[(8)]);
var inst_36816 = (state_36850[(7)]);
var inst_36816__$1 = cljs.core.seq.call(null,inst_36802);
var state_36850__$1 = (function (){var statearr_36874 = state_36850;
(statearr_36874[(7)] = inst_36816__$1);

return statearr_36874;
})();
if(inst_36816__$1){
var statearr_36875_36907 = state_36850__$1;
(statearr_36875_36907[(1)] = (14));

} else {
var statearr_36876_36908 = state_36850__$1;
(statearr_36876_36908[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36851 === (9))){
var inst_36838 = (state_36850[(2)]);
var inst_36839 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36850__$1 = (function (){var statearr_36877 = state_36850;
(statearr_36877[(15)] = inst_36838);

return statearr_36877;
})();
if(cljs.core.truth_(inst_36839)){
var statearr_36878_36909 = state_36850__$1;
(statearr_36878_36909[(1)] = (21));

} else {
var statearr_36879_36910 = state_36850__$1;
(statearr_36879_36910[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36851 === (5))){
var inst_36794 = cljs.core.async.close_BANG_.call(null,out);
var state_36850__$1 = state_36850;
var statearr_36880_36911 = state_36850__$1;
(statearr_36880_36911[(2)] = inst_36794);

(statearr_36880_36911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36851 === (14))){
var inst_36816 = (state_36850[(7)]);
var inst_36818 = cljs.core.chunked_seq_QMARK_.call(null,inst_36816);
var state_36850__$1 = state_36850;
if(inst_36818){
var statearr_36881_36912 = state_36850__$1;
(statearr_36881_36912[(1)] = (17));

} else {
var statearr_36882_36913 = state_36850__$1;
(statearr_36882_36913[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36851 === (16))){
var inst_36834 = (state_36850[(2)]);
var state_36850__$1 = state_36850;
var statearr_36883_36914 = state_36850__$1;
(statearr_36883_36914[(2)] = inst_36834);

(statearr_36883_36914[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36851 === (10))){
var inst_36803 = (state_36850[(9)]);
var inst_36805 = (state_36850[(10)]);
var inst_36810 = cljs.core._nth.call(null,inst_36803,inst_36805);
var state_36850__$1 = state_36850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36850__$1,(13),out,inst_36810);
} else {
if((state_val_36851 === (18))){
var inst_36816 = (state_36850[(7)]);
var inst_36825 = cljs.core.first.call(null,inst_36816);
var state_36850__$1 = state_36850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36850__$1,(20),out,inst_36825);
} else {
if((state_val_36851 === (8))){
var inst_36805 = (state_36850[(10)]);
var inst_36804 = (state_36850[(12)]);
var inst_36807 = (inst_36805 < inst_36804);
var inst_36808 = inst_36807;
var state_36850__$1 = state_36850;
if(cljs.core.truth_(inst_36808)){
var statearr_36884_36915 = state_36850__$1;
(statearr_36884_36915[(1)] = (10));

} else {
var statearr_36885_36916 = state_36850__$1;
(statearr_36885_36916[(1)] = (11));

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
});})(c__20184__auto__))
;
return ((function (switch__20119__auto__,c__20184__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20120__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20120__auto____0 = (function (){
var statearr_36889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36889[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20120__auto__);

(statearr_36889[(1)] = (1));

return statearr_36889;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20120__auto____1 = (function (state_36850){
while(true){
var ret_value__20121__auto__ = (function (){try{while(true){
var result__20122__auto__ = switch__20119__auto__.call(null,state_36850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20122__auto__;
}
break;
}
}catch (e36890){if((e36890 instanceof Object)){
var ex__20123__auto__ = e36890;
var statearr_36891_36917 = state_36850;
(statearr_36891_36917[(5)] = ex__20123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36918 = state_36850;
state_36850 = G__36918;
continue;
} else {
return ret_value__20121__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20120__auto__ = function(state_36850){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20120__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20120__auto____1.call(this,state_36850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20120__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20120__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20120__auto__;
})()
;})(switch__20119__auto__,c__20184__auto__))
})();
var state__20186__auto__ = (function (){var statearr_36892 = f__20185__auto__.call(null);
(statearr_36892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20184__auto__);

return statearr_36892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20186__auto__);
});})(c__20184__auto__))
);

return c__20184__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args36919 = [];
var len__17402__auto___36922 = arguments.length;
var i__17403__auto___36923 = (0);
while(true){
if((i__17403__auto___36923 < len__17402__auto___36922)){
args36919.push((arguments[i__17403__auto___36923]));

var G__36924 = (i__17403__auto___36923 + (1));
i__17403__auto___36923 = G__36924;
continue;
} else {
}
break;
}

var G__36921 = args36919.length;
switch (G__36921) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36919.length)].join('')));

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
var args36926 = [];
var len__17402__auto___36929 = arguments.length;
var i__17403__auto___36930 = (0);
while(true){
if((i__17403__auto___36930 < len__17402__auto___36929)){
args36926.push((arguments[i__17403__auto___36930]));

var G__36931 = (i__17403__auto___36930 + (1));
i__17403__auto___36930 = G__36931;
continue;
} else {
}
break;
}

var G__36928 = args36926.length;
switch (G__36928) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36926.length)].join('')));

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
var args36933 = [];
var len__17402__auto___36984 = arguments.length;
var i__17403__auto___36985 = (0);
while(true){
if((i__17403__auto___36985 < len__17402__auto___36984)){
args36933.push((arguments[i__17403__auto___36985]));

var G__36986 = (i__17403__auto___36985 + (1));
i__17403__auto___36985 = G__36986;
continue;
} else {
}
break;
}

var G__36935 = args36933.length;
switch (G__36935) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36933.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20184__auto___36988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20184__auto___36988,out){
return (function (){
var f__20185__auto__ = (function (){var switch__20119__auto__ = ((function (c__20184__auto___36988,out){
return (function (state_36959){
var state_val_36960 = (state_36959[(1)]);
if((state_val_36960 === (7))){
var inst_36954 = (state_36959[(2)]);
var state_36959__$1 = state_36959;
var statearr_36961_36989 = state_36959__$1;
(statearr_36961_36989[(2)] = inst_36954);

(statearr_36961_36989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36960 === (1))){
var inst_36936 = null;
var state_36959__$1 = (function (){var statearr_36962 = state_36959;
(statearr_36962[(7)] = inst_36936);

return statearr_36962;
})();
var statearr_36963_36990 = state_36959__$1;
(statearr_36963_36990[(2)] = null);

(statearr_36963_36990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36960 === (4))){
var inst_36939 = (state_36959[(8)]);
var inst_36939__$1 = (state_36959[(2)]);
var inst_36940 = (inst_36939__$1 == null);
var inst_36941 = cljs.core.not.call(null,inst_36940);
var state_36959__$1 = (function (){var statearr_36964 = state_36959;
(statearr_36964[(8)] = inst_36939__$1);

return statearr_36964;
})();
if(inst_36941){
var statearr_36965_36991 = state_36959__$1;
(statearr_36965_36991[(1)] = (5));

} else {
var statearr_36966_36992 = state_36959__$1;
(statearr_36966_36992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36960 === (6))){
var state_36959__$1 = state_36959;
var statearr_36967_36993 = state_36959__$1;
(statearr_36967_36993[(2)] = null);

(statearr_36967_36993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36960 === (3))){
var inst_36956 = (state_36959[(2)]);
var inst_36957 = cljs.core.async.close_BANG_.call(null,out);
var state_36959__$1 = (function (){var statearr_36968 = state_36959;
(statearr_36968[(9)] = inst_36956);

return statearr_36968;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36959__$1,inst_36957);
} else {
if((state_val_36960 === (2))){
var state_36959__$1 = state_36959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36959__$1,(4),ch);
} else {
if((state_val_36960 === (11))){
var inst_36939 = (state_36959[(8)]);
var inst_36948 = (state_36959[(2)]);
var inst_36936 = inst_36939;
var state_36959__$1 = (function (){var statearr_36969 = state_36959;
(statearr_36969[(7)] = inst_36936);

(statearr_36969[(10)] = inst_36948);

return statearr_36969;
})();
var statearr_36970_36994 = state_36959__$1;
(statearr_36970_36994[(2)] = null);

(statearr_36970_36994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36960 === (9))){
var inst_36939 = (state_36959[(8)]);
var state_36959__$1 = state_36959;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36959__$1,(11),out,inst_36939);
} else {
if((state_val_36960 === (5))){
var inst_36936 = (state_36959[(7)]);
var inst_36939 = (state_36959[(8)]);
var inst_36943 = cljs.core._EQ_.call(null,inst_36939,inst_36936);
var state_36959__$1 = state_36959;
if(inst_36943){
var statearr_36972_36995 = state_36959__$1;
(statearr_36972_36995[(1)] = (8));

} else {
var statearr_36973_36996 = state_36959__$1;
(statearr_36973_36996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36960 === (10))){
var inst_36951 = (state_36959[(2)]);
var state_36959__$1 = state_36959;
var statearr_36974_36997 = state_36959__$1;
(statearr_36974_36997[(2)] = inst_36951);

(statearr_36974_36997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36960 === (8))){
var inst_36936 = (state_36959[(7)]);
var tmp36971 = inst_36936;
var inst_36936__$1 = tmp36971;
var state_36959__$1 = (function (){var statearr_36975 = state_36959;
(statearr_36975[(7)] = inst_36936__$1);

return statearr_36975;
})();
var statearr_36976_36998 = state_36959__$1;
(statearr_36976_36998[(2)] = null);

(statearr_36976_36998[(1)] = (2));


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
});})(c__20184__auto___36988,out))
;
return ((function (switch__20119__auto__,c__20184__auto___36988,out){
return (function() {
var cljs$core$async$state_machine__20120__auto__ = null;
var cljs$core$async$state_machine__20120__auto____0 = (function (){
var statearr_36980 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36980[(0)] = cljs$core$async$state_machine__20120__auto__);

(statearr_36980[(1)] = (1));

return statearr_36980;
});
var cljs$core$async$state_machine__20120__auto____1 = (function (state_36959){
while(true){
var ret_value__20121__auto__ = (function (){try{while(true){
var result__20122__auto__ = switch__20119__auto__.call(null,state_36959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20122__auto__;
}
break;
}
}catch (e36981){if((e36981 instanceof Object)){
var ex__20123__auto__ = e36981;
var statearr_36982_36999 = state_36959;
(statearr_36982_36999[(5)] = ex__20123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37000 = state_36959;
state_36959 = G__37000;
continue;
} else {
return ret_value__20121__auto__;
}
break;
}
});
cljs$core$async$state_machine__20120__auto__ = function(state_36959){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20120__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20120__auto____1.call(this,state_36959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20120__auto____0;
cljs$core$async$state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20120__auto____1;
return cljs$core$async$state_machine__20120__auto__;
})()
;})(switch__20119__auto__,c__20184__auto___36988,out))
})();
var state__20186__auto__ = (function (){var statearr_36983 = f__20185__auto__.call(null);
(statearr_36983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20184__auto___36988);

return statearr_36983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20186__auto__);
});})(c__20184__auto___36988,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args37001 = [];
var len__17402__auto___37071 = arguments.length;
var i__17403__auto___37072 = (0);
while(true){
if((i__17403__auto___37072 < len__17402__auto___37071)){
args37001.push((arguments[i__17403__auto___37072]));

var G__37073 = (i__17403__auto___37072 + (1));
i__17403__auto___37072 = G__37073;
continue;
} else {
}
break;
}

var G__37003 = args37001.length;
switch (G__37003) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37001.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20184__auto___37075 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20184__auto___37075,out){
return (function (){
var f__20185__auto__ = (function (){var switch__20119__auto__ = ((function (c__20184__auto___37075,out){
return (function (state_37041){
var state_val_37042 = (state_37041[(1)]);
if((state_val_37042 === (7))){
var inst_37037 = (state_37041[(2)]);
var state_37041__$1 = state_37041;
var statearr_37043_37076 = state_37041__$1;
(statearr_37043_37076[(2)] = inst_37037);

(statearr_37043_37076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37042 === (1))){
var inst_37004 = (new Array(n));
var inst_37005 = inst_37004;
var inst_37006 = (0);
var state_37041__$1 = (function (){var statearr_37044 = state_37041;
(statearr_37044[(7)] = inst_37006);

(statearr_37044[(8)] = inst_37005);

return statearr_37044;
})();
var statearr_37045_37077 = state_37041__$1;
(statearr_37045_37077[(2)] = null);

(statearr_37045_37077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37042 === (4))){
var inst_37009 = (state_37041[(9)]);
var inst_37009__$1 = (state_37041[(2)]);
var inst_37010 = (inst_37009__$1 == null);
var inst_37011 = cljs.core.not.call(null,inst_37010);
var state_37041__$1 = (function (){var statearr_37046 = state_37041;
(statearr_37046[(9)] = inst_37009__$1);

return statearr_37046;
})();
if(inst_37011){
var statearr_37047_37078 = state_37041__$1;
(statearr_37047_37078[(1)] = (5));

} else {
var statearr_37048_37079 = state_37041__$1;
(statearr_37048_37079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37042 === (15))){
var inst_37031 = (state_37041[(2)]);
var state_37041__$1 = state_37041;
var statearr_37049_37080 = state_37041__$1;
(statearr_37049_37080[(2)] = inst_37031);

(statearr_37049_37080[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37042 === (13))){
var state_37041__$1 = state_37041;
var statearr_37050_37081 = state_37041__$1;
(statearr_37050_37081[(2)] = null);

(statearr_37050_37081[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37042 === (6))){
var inst_37006 = (state_37041[(7)]);
var inst_37027 = (inst_37006 > (0));
var state_37041__$1 = state_37041;
if(cljs.core.truth_(inst_37027)){
var statearr_37051_37082 = state_37041__$1;
(statearr_37051_37082[(1)] = (12));

} else {
var statearr_37052_37083 = state_37041__$1;
(statearr_37052_37083[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37042 === (3))){
var inst_37039 = (state_37041[(2)]);
var state_37041__$1 = state_37041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37041__$1,inst_37039);
} else {
if((state_val_37042 === (12))){
var inst_37005 = (state_37041[(8)]);
var inst_37029 = cljs.core.vec.call(null,inst_37005);
var state_37041__$1 = state_37041;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37041__$1,(15),out,inst_37029);
} else {
if((state_val_37042 === (2))){
var state_37041__$1 = state_37041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37041__$1,(4),ch);
} else {
if((state_val_37042 === (11))){
var inst_37021 = (state_37041[(2)]);
var inst_37022 = (new Array(n));
var inst_37005 = inst_37022;
var inst_37006 = (0);
var state_37041__$1 = (function (){var statearr_37053 = state_37041;
(statearr_37053[(7)] = inst_37006);

(statearr_37053[(10)] = inst_37021);

(statearr_37053[(8)] = inst_37005);

return statearr_37053;
})();
var statearr_37054_37084 = state_37041__$1;
(statearr_37054_37084[(2)] = null);

(statearr_37054_37084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37042 === (9))){
var inst_37005 = (state_37041[(8)]);
var inst_37019 = cljs.core.vec.call(null,inst_37005);
var state_37041__$1 = state_37041;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37041__$1,(11),out,inst_37019);
} else {
if((state_val_37042 === (5))){
var inst_37006 = (state_37041[(7)]);
var inst_37009 = (state_37041[(9)]);
var inst_37014 = (state_37041[(11)]);
var inst_37005 = (state_37041[(8)]);
var inst_37013 = (inst_37005[inst_37006] = inst_37009);
var inst_37014__$1 = (inst_37006 + (1));
var inst_37015 = (inst_37014__$1 < n);
var state_37041__$1 = (function (){var statearr_37055 = state_37041;
(statearr_37055[(12)] = inst_37013);

(statearr_37055[(11)] = inst_37014__$1);

return statearr_37055;
})();
if(cljs.core.truth_(inst_37015)){
var statearr_37056_37085 = state_37041__$1;
(statearr_37056_37085[(1)] = (8));

} else {
var statearr_37057_37086 = state_37041__$1;
(statearr_37057_37086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37042 === (14))){
var inst_37034 = (state_37041[(2)]);
var inst_37035 = cljs.core.async.close_BANG_.call(null,out);
var state_37041__$1 = (function (){var statearr_37059 = state_37041;
(statearr_37059[(13)] = inst_37034);

return statearr_37059;
})();
var statearr_37060_37087 = state_37041__$1;
(statearr_37060_37087[(2)] = inst_37035);

(statearr_37060_37087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37042 === (10))){
var inst_37025 = (state_37041[(2)]);
var state_37041__$1 = state_37041;
var statearr_37061_37088 = state_37041__$1;
(statearr_37061_37088[(2)] = inst_37025);

(statearr_37061_37088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37042 === (8))){
var inst_37014 = (state_37041[(11)]);
var inst_37005 = (state_37041[(8)]);
var tmp37058 = inst_37005;
var inst_37005__$1 = tmp37058;
var inst_37006 = inst_37014;
var state_37041__$1 = (function (){var statearr_37062 = state_37041;
(statearr_37062[(7)] = inst_37006);

(statearr_37062[(8)] = inst_37005__$1);

return statearr_37062;
})();
var statearr_37063_37089 = state_37041__$1;
(statearr_37063_37089[(2)] = null);

(statearr_37063_37089[(1)] = (2));


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
});})(c__20184__auto___37075,out))
;
return ((function (switch__20119__auto__,c__20184__auto___37075,out){
return (function() {
var cljs$core$async$state_machine__20120__auto__ = null;
var cljs$core$async$state_machine__20120__auto____0 = (function (){
var statearr_37067 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37067[(0)] = cljs$core$async$state_machine__20120__auto__);

(statearr_37067[(1)] = (1));

return statearr_37067;
});
var cljs$core$async$state_machine__20120__auto____1 = (function (state_37041){
while(true){
var ret_value__20121__auto__ = (function (){try{while(true){
var result__20122__auto__ = switch__20119__auto__.call(null,state_37041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20122__auto__;
}
break;
}
}catch (e37068){if((e37068 instanceof Object)){
var ex__20123__auto__ = e37068;
var statearr_37069_37090 = state_37041;
(statearr_37069_37090[(5)] = ex__20123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37091 = state_37041;
state_37041 = G__37091;
continue;
} else {
return ret_value__20121__auto__;
}
break;
}
});
cljs$core$async$state_machine__20120__auto__ = function(state_37041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20120__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20120__auto____1.call(this,state_37041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20120__auto____0;
cljs$core$async$state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20120__auto____1;
return cljs$core$async$state_machine__20120__auto__;
})()
;})(switch__20119__auto__,c__20184__auto___37075,out))
})();
var state__20186__auto__ = (function (){var statearr_37070 = f__20185__auto__.call(null);
(statearr_37070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20184__auto___37075);

return statearr_37070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20186__auto__);
});})(c__20184__auto___37075,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args37092 = [];
var len__17402__auto___37166 = arguments.length;
var i__17403__auto___37167 = (0);
while(true){
if((i__17403__auto___37167 < len__17402__auto___37166)){
args37092.push((arguments[i__17403__auto___37167]));

var G__37168 = (i__17403__auto___37167 + (1));
i__17403__auto___37167 = G__37168;
continue;
} else {
}
break;
}

var G__37094 = args37092.length;
switch (G__37094) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37092.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20184__auto___37170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20184__auto___37170,out){
return (function (){
var f__20185__auto__ = (function (){var switch__20119__auto__ = ((function (c__20184__auto___37170,out){
return (function (state_37136){
var state_val_37137 = (state_37136[(1)]);
if((state_val_37137 === (7))){
var inst_37132 = (state_37136[(2)]);
var state_37136__$1 = state_37136;
var statearr_37138_37171 = state_37136__$1;
(statearr_37138_37171[(2)] = inst_37132);

(statearr_37138_37171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37137 === (1))){
var inst_37095 = [];
var inst_37096 = inst_37095;
var inst_37097 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37136__$1 = (function (){var statearr_37139 = state_37136;
(statearr_37139[(7)] = inst_37096);

(statearr_37139[(8)] = inst_37097);

return statearr_37139;
})();
var statearr_37140_37172 = state_37136__$1;
(statearr_37140_37172[(2)] = null);

(statearr_37140_37172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37137 === (4))){
var inst_37100 = (state_37136[(9)]);
var inst_37100__$1 = (state_37136[(2)]);
var inst_37101 = (inst_37100__$1 == null);
var inst_37102 = cljs.core.not.call(null,inst_37101);
var state_37136__$1 = (function (){var statearr_37141 = state_37136;
(statearr_37141[(9)] = inst_37100__$1);

return statearr_37141;
})();
if(inst_37102){
var statearr_37142_37173 = state_37136__$1;
(statearr_37142_37173[(1)] = (5));

} else {
var statearr_37143_37174 = state_37136__$1;
(statearr_37143_37174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37137 === (15))){
var inst_37126 = (state_37136[(2)]);
var state_37136__$1 = state_37136;
var statearr_37144_37175 = state_37136__$1;
(statearr_37144_37175[(2)] = inst_37126);

(statearr_37144_37175[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37137 === (13))){
var state_37136__$1 = state_37136;
var statearr_37145_37176 = state_37136__$1;
(statearr_37145_37176[(2)] = null);

(statearr_37145_37176[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37137 === (6))){
var inst_37096 = (state_37136[(7)]);
var inst_37121 = inst_37096.length;
var inst_37122 = (inst_37121 > (0));
var state_37136__$1 = state_37136;
if(cljs.core.truth_(inst_37122)){
var statearr_37146_37177 = state_37136__$1;
(statearr_37146_37177[(1)] = (12));

} else {
var statearr_37147_37178 = state_37136__$1;
(statearr_37147_37178[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37137 === (3))){
var inst_37134 = (state_37136[(2)]);
var state_37136__$1 = state_37136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37136__$1,inst_37134);
} else {
if((state_val_37137 === (12))){
var inst_37096 = (state_37136[(7)]);
var inst_37124 = cljs.core.vec.call(null,inst_37096);
var state_37136__$1 = state_37136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37136__$1,(15),out,inst_37124);
} else {
if((state_val_37137 === (2))){
var state_37136__$1 = state_37136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37136__$1,(4),ch);
} else {
if((state_val_37137 === (11))){
var inst_37104 = (state_37136[(10)]);
var inst_37100 = (state_37136[(9)]);
var inst_37114 = (state_37136[(2)]);
var inst_37115 = [];
var inst_37116 = inst_37115.push(inst_37100);
var inst_37096 = inst_37115;
var inst_37097 = inst_37104;
var state_37136__$1 = (function (){var statearr_37148 = state_37136;
(statearr_37148[(7)] = inst_37096);

(statearr_37148[(11)] = inst_37114);

(statearr_37148[(12)] = inst_37116);

(statearr_37148[(8)] = inst_37097);

return statearr_37148;
})();
var statearr_37149_37179 = state_37136__$1;
(statearr_37149_37179[(2)] = null);

(statearr_37149_37179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37137 === (9))){
var inst_37096 = (state_37136[(7)]);
var inst_37112 = cljs.core.vec.call(null,inst_37096);
var state_37136__$1 = state_37136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37136__$1,(11),out,inst_37112);
} else {
if((state_val_37137 === (5))){
var inst_37104 = (state_37136[(10)]);
var inst_37097 = (state_37136[(8)]);
var inst_37100 = (state_37136[(9)]);
var inst_37104__$1 = f.call(null,inst_37100);
var inst_37105 = cljs.core._EQ_.call(null,inst_37104__$1,inst_37097);
var inst_37106 = cljs.core.keyword_identical_QMARK_.call(null,inst_37097,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37107 = (inst_37105) || (inst_37106);
var state_37136__$1 = (function (){var statearr_37150 = state_37136;
(statearr_37150[(10)] = inst_37104__$1);

return statearr_37150;
})();
if(cljs.core.truth_(inst_37107)){
var statearr_37151_37180 = state_37136__$1;
(statearr_37151_37180[(1)] = (8));

} else {
var statearr_37152_37181 = state_37136__$1;
(statearr_37152_37181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37137 === (14))){
var inst_37129 = (state_37136[(2)]);
var inst_37130 = cljs.core.async.close_BANG_.call(null,out);
var state_37136__$1 = (function (){var statearr_37154 = state_37136;
(statearr_37154[(13)] = inst_37129);

return statearr_37154;
})();
var statearr_37155_37182 = state_37136__$1;
(statearr_37155_37182[(2)] = inst_37130);

(statearr_37155_37182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37137 === (10))){
var inst_37119 = (state_37136[(2)]);
var state_37136__$1 = state_37136;
var statearr_37156_37183 = state_37136__$1;
(statearr_37156_37183[(2)] = inst_37119);

(statearr_37156_37183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37137 === (8))){
var inst_37096 = (state_37136[(7)]);
var inst_37104 = (state_37136[(10)]);
var inst_37100 = (state_37136[(9)]);
var inst_37109 = inst_37096.push(inst_37100);
var tmp37153 = inst_37096;
var inst_37096__$1 = tmp37153;
var inst_37097 = inst_37104;
var state_37136__$1 = (function (){var statearr_37157 = state_37136;
(statearr_37157[(7)] = inst_37096__$1);

(statearr_37157[(14)] = inst_37109);

(statearr_37157[(8)] = inst_37097);

return statearr_37157;
})();
var statearr_37158_37184 = state_37136__$1;
(statearr_37158_37184[(2)] = null);

(statearr_37158_37184[(1)] = (2));


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
});})(c__20184__auto___37170,out))
;
return ((function (switch__20119__auto__,c__20184__auto___37170,out){
return (function() {
var cljs$core$async$state_machine__20120__auto__ = null;
var cljs$core$async$state_machine__20120__auto____0 = (function (){
var statearr_37162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37162[(0)] = cljs$core$async$state_machine__20120__auto__);

(statearr_37162[(1)] = (1));

return statearr_37162;
});
var cljs$core$async$state_machine__20120__auto____1 = (function (state_37136){
while(true){
var ret_value__20121__auto__ = (function (){try{while(true){
var result__20122__auto__ = switch__20119__auto__.call(null,state_37136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20122__auto__;
}
break;
}
}catch (e37163){if((e37163 instanceof Object)){
var ex__20123__auto__ = e37163;
var statearr_37164_37185 = state_37136;
(statearr_37164_37185[(5)] = ex__20123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37186 = state_37136;
state_37136 = G__37186;
continue;
} else {
return ret_value__20121__auto__;
}
break;
}
});
cljs$core$async$state_machine__20120__auto__ = function(state_37136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20120__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20120__auto____1.call(this,state_37136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20120__auto____0;
cljs$core$async$state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20120__auto____1;
return cljs$core$async$state_machine__20120__auto__;
})()
;})(switch__20119__auto__,c__20184__auto___37170,out))
})();
var state__20186__auto__ = (function (){var statearr_37165 = f__20185__auto__.call(null);
(statearr_37165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20184__auto___37170);

return statearr_37165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20186__auto__);
});})(c__20184__auto___37170,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1446794914059