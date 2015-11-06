// Compiled by ClojureScript 1.7.145 {}
goog.provide('datascript.parser');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('datascript.db');
datascript.parser.collect_vars_acc;

/**
 * @interface
 */
datascript.parser.ITraversable = function(){};

datascript.parser._collect = (function datascript$parser$_collect(_,pred,acc){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect$arity$3 == null)))){
return _.datascript$parser$ITraversable$_collect$arity$3(_,pred,acc);
} else {
var x__16999__auto__ = (((_ == null))?null:_);
var m__17000__auto__ = (datascript.parser._collect[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,_,pred,acc);
} else {
var m__17000__auto____$1 = (datascript.parser._collect["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,_,pred,acc);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect",_);
}
}
}
});

datascript.parser._collect_vars = (function datascript$parser$_collect_vars(_,acc){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect_vars$arity$2 == null)))){
return _.datascript$parser$ITraversable$_collect_vars$arity$2(_,acc);
} else {
var x__16999__auto__ = (((_ == null))?null:_);
var m__17000__auto__ = (datascript.parser._collect_vars[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,_,acc);
} else {
var m__17000__auto____$1 = (datascript.parser._collect_vars["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,_,acc);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect-vars",_);
}
}
}
});

datascript.parser._postwalk = (function datascript$parser$_postwalk(_,f){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_postwalk$arity$2 == null)))){
return _.datascript$parser$ITraversable$_postwalk$arity$2(_,f);
} else {
var x__16999__auto__ = (((_ == null))?null:_);
var m__17000__auto__ = (datascript.parser._postwalk[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,_,f);
} else {
var m__17000__auto____$1 = (datascript.parser._postwalk["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,_,f);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-postwalk",_);
}
}
}
});

datascript.parser.of_size_QMARK_ = (function datascript$parser$of_size_QMARK_(form,size){
return (cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),size));
});
datascript.parser.parse_seq = (function datascript$parser$parse_seq(parse_el,form){
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,(function (p1__40993_SHARP_,p2__40992_SHARP_){
var temp__4423__auto__ = parse_el.call(null,p2__40992_SHARP_);
if(cljs.core.truth_(temp__4423__auto__)){
var parsed = temp__4423__auto__;
return cljs.core.conj.call(null,p1__40993_SHARP_,parsed);
} else {
return cljs.core.reduced.call(null,null);
}
}),cljs.core.PersistentVector.EMPTY,form);
} else {
return null;
}
});
datascript.parser.collect = (function datascript$parser$collect(var_args){
var args__17409__auto__ = [];
var len__17402__auto___41000 = arguments.length;
var i__17403__auto___41001 = (0);
while(true){
if((i__17403__auto___41001 < len__17402__auto___41000)){
args__17409__auto__.push((arguments[i__17403__auto___41001]));

var G__41002 = (i__17403__auto___41001 + (1));
i__17403__auto___41001 = G__41002;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((2) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((2)),(0))):null);
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17410__auto__);
});

datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic = (function (pred,form,p__40997){
var vec__40998 = p__40997;
var acc = cljs.core.nth.call(null,vec__40998,(0),null);
var acc__$1 = (function (){var or__16344__auto__ = acc;
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
if(cljs.core.truth_(pred.call(null,form))){
return cljs.core.conj.call(null,acc__$1,form);
} else {
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return datascript.parser._collect.call(null,form,pred,acc__$1);
} else {
if(cljs.core.truth_(datascript.db.seqable_QMARK_.call(null,form))){
return cljs.core.reduce.call(null,((function (acc__$1,vec__40998,acc){
return (function (acc__$2,form__$1){
return datascript.parser.collect.call(null,pred,form__$1,acc__$2);
});})(acc__$1,vec__40998,acc))
,acc__$1,form);
} else {
return acc__$1;

}
}
}
});

datascript.parser.collect.cljs$lang$maxFixedArity = (2);

datascript.parser.collect.cljs$lang$applyTo = (function (seq40994){
var G__40995 = cljs.core.first.call(null,seq40994);
var seq40994__$1 = cljs.core.next.call(null,seq40994);
var G__40996 = cljs.core.first.call(null,seq40994__$1);
var seq40994__$2 = cljs.core.next.call(null,seq40994__$1);
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(G__40995,G__40996,seq40994__$2);
});
datascript.parser.distinct_QMARK_ = (function datascript$parser$distinct_QMARK_(coll){
var or__16344__auto__ = cljs.core.empty_QMARK_.call(null,coll);
if(or__16344__auto__){
return or__16344__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,coll);
}
});
datascript.parser.postwalk = (function datascript$parser$postwalk(form,f){
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return f.call(null,datascript.parser._postwalk.call(null,form,f));
} else {
if(cljs.core.map_QMARK_.call(null,form)){
return f.call(null,cljs.core.reduce.call(null,(function (form__$1,p__41009){
var vec__41010 = p__41009;
var k = cljs.core.nth.call(null,vec__41010,(0),null);
var v = cljs.core.nth.call(null,vec__41010,(1),null);
return cljs.core.assoc.call(null,form__$1,k,datascript$parser$postwalk.call(null,v,f));
}),form,form));
} else {
if(cljs.core.seq_QMARK_.call(null,form)){
return f.call(null,cljs.core.map.call(null,(function (p1__41003_SHARP_){
return datascript$parser$postwalk.call(null,p1__41003_SHARP_,f);
}),form));
} else {
if(cljs.core.coll_QMARK_.call(null,form)){
return f.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.map.call(null,(function (p1__41004_SHARP_){
return datascript$parser$postwalk.call(null,p1__41004_SHARP_,f);
}),form)));
} else {
return f.call(null,form);

}
}
}
}
});
datascript.parser.with_source = (function datascript$parser$with_source(obj,source){
return cljs.core.with_meta.call(null,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),source], null));
});
datascript.parser.source = (function datascript$parser$source(obj){
var or__16344__auto__ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,obj));
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return obj;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Placeholder = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16958__auto__,k__16959__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core._lookup.call(null,this__16958__auto____$1,k__16959__auto__,null);
});

datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k41015,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__41017 = k41015;
switch (G__41017) {
default:
return cljs.core.get.call(null,self__.__extmap,k41015,else__16961__auto__);

}
});

datascript.parser.Placeholder.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16972__auto__,writer__16973__auto__,opts__16974__auto__){
var self__ = this;
var this__16972__auto____$1 = this;
var pr_pair__16975__auto__ = ((function (this__16972__auto____$1){
return (function (keyval__16976__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,cljs.core.pr_writer,""," ","",opts__16974__auto__,keyval__16976__auto__);
});})(this__16972__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,pr_pair__16975__auto__,"#datascript.parser.Placeholder{",", ","}",opts__16974__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IIterable$ = true;

datascript.parser.Placeholder.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41014){
var self__ = this;
var G__41014__$1 = this;
return (new cljs.core.RecordIter((0),G__41014__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Placeholder.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Placeholder.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16952__auto__){
var self__ = this;
var this__16952__auto____$1 = this;
return (new datascript.parser.Placeholder(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16962__auto__){
var self__ = this;
var this__16962__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16953__auto__){
var self__ = this;
var this__16953__auto____$1 = this;
var h__16779__auto__ = self__.__hash;
if(!((h__16779__auto__ == null))){
return h__16779__auto__;
} else {
var h__16779__auto____$1 = cljs.core.hash_imap.call(null,this__16953__auto____$1);
self__.__hash = h__16779__auto____$1;

return h__16779__auto____$1;
}
});

datascript.parser.Placeholder.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16954__auto__,other__16955__auto__){
var self__ = this;
var this__16954__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16332__auto__ = other__16955__auto__;
if(cljs.core.truth_(and__16332__auto__)){
var and__16332__auto____$1 = (this__16954__auto____$1.constructor === other__16955__auto__.constructor);
if(and__16332__auto____$1){
return cljs.core.equiv_map.call(null,this__16954__auto____$1,other__16955__auto__);
} else {
return and__16332__auto____$1;
}
} else {
return and__16332__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Placeholder.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16967__auto__,k__16968__auto__){
var self__ = this;
var this__16967__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__16968__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16967__auto____$1),self__.__meta),k__16968__auto__);
} else {
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16968__auto__)),null));
}
});

datascript.parser.Placeholder.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__41014){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__41018 = cljs.core.keyword_identical_QMARK_;
var expr__41019 = k__16966__auto__;
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__41014),null));
});

datascript.parser.Placeholder.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__41014){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.Placeholder(G__41014,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16963__auto__,entry__16964__auto__){
var self__ = this;
var this__16963__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16964__auto__)){
return cljs.core._assoc.call(null,this__16963__auto____$1,cljs.core._nth.call(null,entry__16964__auto__,(0)),cljs.core._nth.call(null,entry__16964__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16963__auto____$1,entry__16964__auto__);
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26396__auto__,f41011){
var self__ = this;
var this__26396__auto____$1 = this;
var new__26397__auto__ = (new datascript.parser.Placeholder(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__26396__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__26398__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__26397__auto__,meta__26398__auto__);
} else {
return new__26397__auto__;
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26399__auto__,pred41012,acc41013){
var self__ = this;
var ___26399__auto____$1 = this;
return acc41013;
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26399__auto__,acc41013){
var self__ = this;
var ___26399__auto____$1 = this;
return acc41013;
});

datascript.parser.Placeholder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.Placeholder.cljs$lang$type = true;

datascript.parser.Placeholder.cljs$lang$ctorPrSeq = (function (this__16992__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Placeholder");
});

datascript.parser.Placeholder.cljs$lang$ctorPrWriter = (function (this__16992__auto__,writer__16993__auto__){
return cljs.core._write.call(null,writer__16993__auto__,"datascript.parser/Placeholder");
});

datascript.parser.__GT_Placeholder = (function datascript$parser$__GT_Placeholder(){
return (new datascript.parser.Placeholder(null,null,null));
});

datascript.parser.map__GT_Placeholder = (function datascript$parser$map__GT_Placeholder(G__41016){
return (new datascript.parser.Placeholder(null,cljs.core.dissoc.call(null,G__41016),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Variable = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16958__auto__,k__16959__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core._lookup.call(null,this__16958__auto____$1,k__16959__auto__,null);
});

datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k41026,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__41028 = (((k41026 instanceof cljs.core.Keyword))?k41026.fqn:null);
switch (G__41028) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41026,else__16961__auto__);

}
});

datascript.parser.Variable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16972__auto__,writer__16973__auto__,opts__16974__auto__){
var self__ = this;
var this__16972__auto____$1 = this;
var pr_pair__16975__auto__ = ((function (this__16972__auto____$1){
return (function (keyval__16976__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,cljs.core.pr_writer,""," ","",opts__16974__auto__,keyval__16976__auto__);
});})(this__16972__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,pr_pair__16975__auto__,"#datascript.parser.Variable{",", ","}",opts__16974__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IIterable$ = true;

datascript.parser.Variable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41025){
var self__ = this;
var G__41025__$1 = this;
return (new cljs.core.RecordIter((0),G__41025__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Variable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Variable.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16952__auto__){
var self__ = this;
var this__16952__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16962__auto__){
var self__ = this;
var this__16962__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16953__auto__){
var self__ = this;
var this__16953__auto____$1 = this;
var h__16779__auto__ = self__.__hash;
if(!((h__16779__auto__ == null))){
return h__16779__auto__;
} else {
var h__16779__auto____$1 = cljs.core.hash_imap.call(null,this__16953__auto____$1);
self__.__hash = h__16779__auto____$1;

return h__16779__auto____$1;
}
});

datascript.parser.Variable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16954__auto__,other__16955__auto__){
var self__ = this;
var this__16954__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16332__auto__ = other__16955__auto__;
if(cljs.core.truth_(and__16332__auto__)){
var and__16332__auto____$1 = (this__16954__auto____$1.constructor === other__16955__auto__.constructor);
if(and__16332__auto____$1){
return cljs.core.equiv_map.call(null,this__16954__auto____$1,other__16955__auto__);
} else {
return and__16332__auto____$1;
}
} else {
return and__16332__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Variable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16967__auto__,k__16968__auto__){
var self__ = this;
var this__16967__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__16968__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16967__auto____$1),self__.__meta),k__16968__auto__);
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16968__auto__)),null));
}
});

datascript.parser.Variable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__41025){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__41029 = cljs.core.keyword_identical_QMARK_;
var expr__41030 = k__16966__auto__;
if(cljs.core.truth_(pred__41029.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__41030))){
return (new datascript.parser.Variable(G__41025,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__41025),null));
}
});

datascript.parser.Variable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__41025){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,G__41025,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16963__auto__,entry__16964__auto__){
var self__ = this;
var this__16963__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16964__auto__)){
return cljs.core._assoc.call(null,this__16963__auto____$1,cljs.core._nth.call(null,entry__16964__auto__,(0)),cljs.core._nth.call(null,entry__16964__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16963__auto____$1,entry__16964__auto__);
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26396__auto__,f41022){
var self__ = this;
var this__26396__auto____$1 = this;
var new__26397__auto__ = (new datascript.parser.Variable(datascript.parser.postwalk.call(null,self__.symbol,f41022),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__26396__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__26398__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__26397__auto__,meta__26398__auto__);
} else {
return new__26397__auto__;
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26399__auto__,pred41023,acc41024){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect.call(null,pred41023,self__.symbol,acc41024);
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26399__auto__,acc41024){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc41024,self__.symbol);
});

datascript.parser.Variable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.Variable.cljs$lang$type = true;

datascript.parser.Variable.cljs$lang$ctorPrSeq = (function (this__16992__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Variable");
});

datascript.parser.Variable.cljs$lang$ctorPrWriter = (function (this__16992__auto__,writer__16993__auto__){
return cljs.core._write.call(null,writer__16993__auto__,"datascript.parser/Variable");
});

datascript.parser.__GT_Variable = (function datascript$parser$__GT_Variable(symbol){
return (new datascript.parser.Variable(symbol,null,null,null));
});

datascript.parser.map__GT_Variable = (function datascript$parser$map__GT_Variable(G__41027){
return (new datascript.parser.Variable(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__41027),null,cljs.core.dissoc.call(null,G__41027,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.SrcVar = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16958__auto__,k__16959__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core._lookup.call(null,this__16958__auto____$1,k__16959__auto__,null);
});

datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k41037,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__41039 = (((k41037 instanceof cljs.core.Keyword))?k41037.fqn:null);
switch (G__41039) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41037,else__16961__auto__);

}
});

datascript.parser.SrcVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16972__auto__,writer__16973__auto__,opts__16974__auto__){
var self__ = this;
var this__16972__auto____$1 = this;
var pr_pair__16975__auto__ = ((function (this__16972__auto____$1){
return (function (keyval__16976__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,cljs.core.pr_writer,""," ","",opts__16974__auto__,keyval__16976__auto__);
});})(this__16972__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,pr_pair__16975__auto__,"#datascript.parser.SrcVar{",", ","}",opts__16974__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IIterable$ = true;

datascript.parser.SrcVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41036){
var self__ = this;
var G__41036__$1 = this;
return (new cljs.core.RecordIter((0),G__41036__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.SrcVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return self__.__meta;
});

datascript.parser.SrcVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16952__auto__){
var self__ = this;
var this__16952__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16962__auto__){
var self__ = this;
var this__16962__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16953__auto__){
var self__ = this;
var this__16953__auto____$1 = this;
var h__16779__auto__ = self__.__hash;
if(!((h__16779__auto__ == null))){
return h__16779__auto__;
} else {
var h__16779__auto____$1 = cljs.core.hash_imap.call(null,this__16953__auto____$1);
self__.__hash = h__16779__auto____$1;

return h__16779__auto____$1;
}
});

datascript.parser.SrcVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16954__auto__,other__16955__auto__){
var self__ = this;
var this__16954__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16332__auto__ = other__16955__auto__;
if(cljs.core.truth_(and__16332__auto__)){
var and__16332__auto____$1 = (this__16954__auto____$1.constructor === other__16955__auto__.constructor);
if(and__16332__auto____$1){
return cljs.core.equiv_map.call(null,this__16954__auto____$1,other__16955__auto__);
} else {
return and__16332__auto____$1;
}
} else {
return and__16332__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.SrcVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16967__auto__,k__16968__auto__){
var self__ = this;
var this__16967__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__16968__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16967__auto____$1),self__.__meta),k__16968__auto__);
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16968__auto__)),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__41036){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__41040 = cljs.core.keyword_identical_QMARK_;
var expr__41041 = k__16966__auto__;
if(cljs.core.truth_(pred__41040.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__41041))){
return (new datascript.parser.SrcVar(G__41036,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__41036),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__41036){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,G__41036,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16963__auto__,entry__16964__auto__){
var self__ = this;
var this__16963__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16964__auto__)){
return cljs.core._assoc.call(null,this__16963__auto____$1,cljs.core._nth.call(null,entry__16964__auto__,(0)),cljs.core._nth.call(null,entry__16964__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16963__auto____$1,entry__16964__auto__);
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26396__auto__,f41033){
var self__ = this;
var this__26396__auto____$1 = this;
var new__26397__auto__ = (new datascript.parser.SrcVar(datascript.parser.postwalk.call(null,self__.symbol,f41033),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__26396__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__26398__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__26397__auto__,meta__26398__auto__);
} else {
return new__26397__auto__;
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26399__auto__,pred41034,acc41035){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect.call(null,pred41034,self__.symbol,acc41035);
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26399__auto__,acc41035){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc41035,self__.symbol);
});

datascript.parser.SrcVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.SrcVar.cljs$lang$type = true;

datascript.parser.SrcVar.cljs$lang$ctorPrSeq = (function (this__16992__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/SrcVar");
});

datascript.parser.SrcVar.cljs$lang$ctorPrWriter = (function (this__16992__auto__,writer__16993__auto__){
return cljs.core._write.call(null,writer__16993__auto__,"datascript.parser/SrcVar");
});

datascript.parser.__GT_SrcVar = (function datascript$parser$__GT_SrcVar(symbol){
return (new datascript.parser.SrcVar(symbol,null,null,null));
});

datascript.parser.map__GT_SrcVar = (function datascript$parser$map__GT_SrcVar(G__41038){
return (new datascript.parser.SrcVar(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__41038),null,cljs.core.dissoc.call(null,G__41038,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.DefaultSrc = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16958__auto__,k__16959__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core._lookup.call(null,this__16958__auto____$1,k__16959__auto__,null);
});

datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k41048,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__41050 = k41048;
switch (G__41050) {
default:
return cljs.core.get.call(null,self__.__extmap,k41048,else__16961__auto__);

}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16972__auto__,writer__16973__auto__,opts__16974__auto__){
var self__ = this;
var this__16972__auto____$1 = this;
var pr_pair__16975__auto__ = ((function (this__16972__auto____$1){
return (function (keyval__16976__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,cljs.core.pr_writer,""," ","",opts__16974__auto__,keyval__16976__auto__);
});})(this__16972__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,pr_pair__16975__auto__,"#datascript.parser.DefaultSrc{",", ","}",opts__16974__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$ = true;

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41047){
var self__ = this;
var G__41047__$1 = this;
return (new cljs.core.RecordIter((0),G__41047__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return self__.__meta;
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16952__auto__){
var self__ = this;
var this__16952__auto____$1 = this;
return (new datascript.parser.DefaultSrc(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16962__auto__){
var self__ = this;
var this__16962__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16953__auto__){
var self__ = this;
var this__16953__auto____$1 = this;
var h__16779__auto__ = self__.__hash;
if(!((h__16779__auto__ == null))){
return h__16779__auto__;
} else {
var h__16779__auto____$1 = cljs.core.hash_imap.call(null,this__16953__auto____$1);
self__.__hash = h__16779__auto____$1;

return h__16779__auto____$1;
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16954__auto__,other__16955__auto__){
var self__ = this;
var this__16954__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16332__auto__ = other__16955__auto__;
if(cljs.core.truth_(and__16332__auto__)){
var and__16332__auto____$1 = (this__16954__auto____$1.constructor === other__16955__auto__.constructor);
if(and__16332__auto____$1){
return cljs.core.equiv_map.call(null,this__16954__auto____$1,other__16955__auto__);
} else {
return and__16332__auto____$1;
}
} else {
return and__16332__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16967__auto__,k__16968__auto__){
var self__ = this;
var this__16967__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__16968__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16967__auto____$1),self__.__meta),k__16968__auto__);
} else {
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16968__auto__)),null));
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__41047){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__41051 = cljs.core.keyword_identical_QMARK_;
var expr__41052 = k__16966__auto__;
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__41047),null));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__41047){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.DefaultSrc(G__41047,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16963__auto__,entry__16964__auto__){
var self__ = this;
var this__16963__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16964__auto__)){
return cljs.core._assoc.call(null,this__16963__auto____$1,cljs.core._nth.call(null,entry__16964__auto__,(0)),cljs.core._nth.call(null,entry__16964__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16963__auto____$1,entry__16964__auto__);
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26396__auto__,f41044){
var self__ = this;
var this__26396__auto____$1 = this;
var new__26397__auto__ = (new datascript.parser.DefaultSrc(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__26396__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__26398__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__26397__auto__,meta__26398__auto__);
} else {
return new__26397__auto__;
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26399__auto__,pred41045,acc41046){
var self__ = this;
var ___26399__auto____$1 = this;
return acc41046;
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26399__auto__,acc41046){
var self__ = this;
var ___26399__auto____$1 = this;
return acc41046;
});

datascript.parser.DefaultSrc.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.DefaultSrc.cljs$lang$type = true;

datascript.parser.DefaultSrc.cljs$lang$ctorPrSeq = (function (this__16992__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/DefaultSrc");
});

datascript.parser.DefaultSrc.cljs$lang$ctorPrWriter = (function (this__16992__auto__,writer__16993__auto__){
return cljs.core._write.call(null,writer__16993__auto__,"datascript.parser/DefaultSrc");
});

datascript.parser.__GT_DefaultSrc = (function datascript$parser$__GT_DefaultSrc(){
return (new datascript.parser.DefaultSrc(null,null,null));
});

datascript.parser.map__GT_DefaultSrc = (function datascript$parser$map__GT_DefaultSrc(G__41049){
return (new datascript.parser.DefaultSrc(null,cljs.core.dissoc.call(null,G__41049),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RulesVar = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16958__auto__,k__16959__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core._lookup.call(null,this__16958__auto____$1,k__16959__auto__,null);
});

datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k41059,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__41061 = k41059;
switch (G__41061) {
default:
return cljs.core.get.call(null,self__.__extmap,k41059,else__16961__auto__);

}
});

datascript.parser.RulesVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16972__auto__,writer__16973__auto__,opts__16974__auto__){
var self__ = this;
var this__16972__auto____$1 = this;
var pr_pair__16975__auto__ = ((function (this__16972__auto____$1){
return (function (keyval__16976__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,cljs.core.pr_writer,""," ","",opts__16974__auto__,keyval__16976__auto__);
});})(this__16972__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,pr_pair__16975__auto__,"#datascript.parser.RulesVar{",", ","}",opts__16974__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IIterable$ = true;

datascript.parser.RulesVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41058){
var self__ = this;
var G__41058__$1 = this;
return (new cljs.core.RecordIter((0),G__41058__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RulesVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RulesVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16952__auto__){
var self__ = this;
var this__16952__auto____$1 = this;
return (new datascript.parser.RulesVar(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16962__auto__){
var self__ = this;
var this__16962__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16953__auto__){
var self__ = this;
var this__16953__auto____$1 = this;
var h__16779__auto__ = self__.__hash;
if(!((h__16779__auto__ == null))){
return h__16779__auto__;
} else {
var h__16779__auto____$1 = cljs.core.hash_imap.call(null,this__16953__auto____$1);
self__.__hash = h__16779__auto____$1;

return h__16779__auto____$1;
}
});

datascript.parser.RulesVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16954__auto__,other__16955__auto__){
var self__ = this;
var this__16954__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16332__auto__ = other__16955__auto__;
if(cljs.core.truth_(and__16332__auto__)){
var and__16332__auto____$1 = (this__16954__auto____$1.constructor === other__16955__auto__.constructor);
if(and__16332__auto____$1){
return cljs.core.equiv_map.call(null,this__16954__auto____$1,other__16955__auto__);
} else {
return and__16332__auto____$1;
}
} else {
return and__16332__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RulesVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16967__auto__,k__16968__auto__){
var self__ = this;
var this__16967__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__16968__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16967__auto____$1),self__.__meta),k__16968__auto__);
} else {
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16968__auto__)),null));
}
});

datascript.parser.RulesVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__41058){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__41062 = cljs.core.keyword_identical_QMARK_;
var expr__41063 = k__16966__auto__;
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__41058),null));
});

datascript.parser.RulesVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__41058){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.RulesVar(G__41058,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16963__auto__,entry__16964__auto__){
var self__ = this;
var this__16963__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16964__auto__)){
return cljs.core._assoc.call(null,this__16963__auto____$1,cljs.core._nth.call(null,entry__16964__auto__,(0)),cljs.core._nth.call(null,entry__16964__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16963__auto____$1,entry__16964__auto__);
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26396__auto__,f41055){
var self__ = this;
var this__26396__auto____$1 = this;
var new__26397__auto__ = (new datascript.parser.RulesVar(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__26396__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__26398__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__26397__auto__,meta__26398__auto__);
} else {
return new__26397__auto__;
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26399__auto__,pred41056,acc41057){
var self__ = this;
var ___26399__auto____$1 = this;
return acc41057;
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26399__auto__,acc41057){
var self__ = this;
var ___26399__auto____$1 = this;
return acc41057;
});

datascript.parser.RulesVar.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.RulesVar.cljs$lang$type = true;

datascript.parser.RulesVar.cljs$lang$ctorPrSeq = (function (this__16992__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RulesVar");
});

datascript.parser.RulesVar.cljs$lang$ctorPrWriter = (function (this__16992__auto__,writer__16993__auto__){
return cljs.core._write.call(null,writer__16993__auto__,"datascript.parser/RulesVar");
});

datascript.parser.__GT_RulesVar = (function datascript$parser$__GT_RulesVar(){
return (new datascript.parser.RulesVar(null,null,null));
});

datascript.parser.map__GT_RulesVar = (function datascript$parser$map__GT_RulesVar(G__41060){
return (new datascript.parser.RulesVar(null,cljs.core.dissoc.call(null,G__41060),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Constant = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16958__auto__,k__16959__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core._lookup.call(null,this__16958__auto____$1,k__16959__auto__,null);
});

datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k41070,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__41072 = (((k41070 instanceof cljs.core.Keyword))?k41070.fqn:null);
switch (G__41072) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41070,else__16961__auto__);

}
});

datascript.parser.Constant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16972__auto__,writer__16973__auto__,opts__16974__auto__){
var self__ = this;
var this__16972__auto____$1 = this;
var pr_pair__16975__auto__ = ((function (this__16972__auto____$1){
return (function (keyval__16976__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,cljs.core.pr_writer,""," ","",opts__16974__auto__,keyval__16976__auto__);
});})(this__16972__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,pr_pair__16975__auto__,"#datascript.parser.Constant{",", ","}",opts__16974__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IIterable$ = true;

datascript.parser.Constant.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41069){
var self__ = this;
var G__41069__$1 = this;
return (new cljs.core.RecordIter((0),G__41069__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Constant.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Constant.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16952__auto__){
var self__ = this;
var this__16952__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16962__auto__){
var self__ = this;
var this__16962__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16953__auto__){
var self__ = this;
var this__16953__auto____$1 = this;
var h__16779__auto__ = self__.__hash;
if(!((h__16779__auto__ == null))){
return h__16779__auto__;
} else {
var h__16779__auto____$1 = cljs.core.hash_imap.call(null,this__16953__auto____$1);
self__.__hash = h__16779__auto____$1;

return h__16779__auto____$1;
}
});

datascript.parser.Constant.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16954__auto__,other__16955__auto__){
var self__ = this;
var this__16954__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16332__auto__ = other__16955__auto__;
if(cljs.core.truth_(and__16332__auto__)){
var and__16332__auto____$1 = (this__16954__auto____$1.constructor === other__16955__auto__.constructor);
if(and__16332__auto____$1){
return cljs.core.equiv_map.call(null,this__16954__auto____$1,other__16955__auto__);
} else {
return and__16332__auto____$1;
}
} else {
return and__16332__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Constant.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16967__auto__,k__16968__auto__){
var self__ = this;
var this__16967__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__16968__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16967__auto____$1),self__.__meta),k__16968__auto__);
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16968__auto__)),null));
}
});

datascript.parser.Constant.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__41069){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__41073 = cljs.core.keyword_identical_QMARK_;
var expr__41074 = k__16966__auto__;
if(cljs.core.truth_(pred__41073.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__41074))){
return (new datascript.parser.Constant(G__41069,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__41069),null));
}
});

datascript.parser.Constant.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__41069){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,G__41069,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16963__auto__,entry__16964__auto__){
var self__ = this;
var this__16963__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16964__auto__)){
return cljs.core._assoc.call(null,this__16963__auto____$1,cljs.core._nth.call(null,entry__16964__auto__,(0)),cljs.core._nth.call(null,entry__16964__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16963__auto____$1,entry__16964__auto__);
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26396__auto__,f41066){
var self__ = this;
var this__26396__auto____$1 = this;
var new__26397__auto__ = (new datascript.parser.Constant(datascript.parser.postwalk.call(null,self__.value,f41066),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__26396__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__26398__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__26397__auto__,meta__26398__auto__);
} else {
return new__26397__auto__;
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26399__auto__,pred41067,acc41068){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect.call(null,pred41067,self__.value,acc41068);
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26399__auto__,acc41068){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc41068,self__.value);
});

datascript.parser.Constant.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

datascript.parser.Constant.cljs$lang$type = true;

datascript.parser.Constant.cljs$lang$ctorPrSeq = (function (this__16992__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Constant");
});

datascript.parser.Constant.cljs$lang$ctorPrWriter = (function (this__16992__auto__,writer__16993__auto__){
return cljs.core._write.call(null,writer__16993__auto__,"datascript.parser/Constant");
});

datascript.parser.__GT_Constant = (function datascript$parser$__GT_Constant(value){
return (new datascript.parser.Constant(value,null,null,null));
});

datascript.parser.map__GT_Constant = (function datascript$parser$map__GT_Constant(G__41071){
return (new datascript.parser.Constant(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__41071),null,cljs.core.dissoc.call(null,G__41071,new cljs.core.Keyword(null,"value","value",305978217)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.PlainSymbol = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16958__auto__,k__16959__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core._lookup.call(null,this__16958__auto____$1,k__16959__auto__,null);
});

datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k41081,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__41083 = (((k41081 instanceof cljs.core.Keyword))?k41081.fqn:null);
switch (G__41083) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41081,else__16961__auto__);

}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16972__auto__,writer__16973__auto__,opts__16974__auto__){
var self__ = this;
var this__16972__auto____$1 = this;
var pr_pair__16975__auto__ = ((function (this__16972__auto____$1){
return (function (keyval__16976__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,cljs.core.pr_writer,""," ","",opts__16974__auto__,keyval__16976__auto__);
});})(this__16972__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,pr_pair__16975__auto__,"#datascript.parser.PlainSymbol{",", ","}",opts__16974__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$ = true;

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41080){
var self__ = this;
var G__41080__$1 = this;
return (new cljs.core.RecordIter((0),G__41080__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return self__.__meta;
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16952__auto__){
var self__ = this;
var this__16952__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16962__auto__){
var self__ = this;
var this__16962__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16953__auto__){
var self__ = this;
var this__16953__auto____$1 = this;
var h__16779__auto__ = self__.__hash;
if(!((h__16779__auto__ == null))){
return h__16779__auto__;
} else {
var h__16779__auto____$1 = cljs.core.hash_imap.call(null,this__16953__auto____$1);
self__.__hash = h__16779__auto____$1;

return h__16779__auto____$1;
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16954__auto__,other__16955__auto__){
var self__ = this;
var this__16954__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16332__auto__ = other__16955__auto__;
if(cljs.core.truth_(and__16332__auto__)){
var and__16332__auto____$1 = (this__16954__auto____$1.constructor === other__16955__auto__.constructor);
if(and__16332__auto____$1){
return cljs.core.equiv_map.call(null,this__16954__auto____$1,other__16955__auto__);
} else {
return and__16332__auto____$1;
}
} else {
return and__16332__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16967__auto__,k__16968__auto__){
var self__ = this;
var this__16967__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__16968__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16967__auto____$1),self__.__meta),k__16968__auto__);
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16968__auto__)),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__41080){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__41084 = cljs.core.keyword_identical_QMARK_;
var expr__41085 = k__16966__auto__;
if(cljs.core.truth_(pred__41084.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__41085))){
return (new datascript.parser.PlainSymbol(G__41080,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__41080),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__41080){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,G__41080,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16963__auto__,entry__16964__auto__){
var self__ = this;
var this__16963__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16964__auto__)){
return cljs.core._assoc.call(null,this__16963__auto____$1,cljs.core._nth.call(null,entry__16964__auto__,(0)),cljs.core._nth.call(null,entry__16964__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16963__auto____$1,entry__16964__auto__);
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26396__auto__,f41077){
var self__ = this;
var this__26396__auto____$1 = this;
var new__26397__auto__ = (new datascript.parser.PlainSymbol(datascript.parser.postwalk.call(null,self__.symbol,f41077),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__26396__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__26398__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__26397__auto__,meta__26398__auto__);
} else {
return new__26397__auto__;
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26399__auto__,pred41078,acc41079){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect.call(null,pred41078,self__.symbol,acc41079);
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26399__auto__,acc41079){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc41079,self__.symbol);
});

datascript.parser.PlainSymbol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.PlainSymbol.cljs$lang$type = true;

datascript.parser.PlainSymbol.cljs$lang$ctorPrSeq = (function (this__16992__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/PlainSymbol");
});

datascript.parser.PlainSymbol.cljs$lang$ctorPrWriter = (function (this__16992__auto__,writer__16993__auto__){
return cljs.core._write.call(null,writer__16993__auto__,"datascript.parser/PlainSymbol");
});

datascript.parser.__GT_PlainSymbol = (function datascript$parser$__GT_PlainSymbol(symbol){
return (new datascript.parser.PlainSymbol(symbol,null,null,null));
});

datascript.parser.map__GT_PlainSymbol = (function datascript$parser$map__GT_PlainSymbol(G__41082){
return (new datascript.parser.PlainSymbol(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__41082),null,cljs.core.dissoc.call(null,G__41082,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});

datascript.parser.parse_placeholder = (function datascript$parser$parse_placeholder(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return (new datascript.parser.Placeholder(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_variable = (function datascript$parser$parse_variable(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"?"))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_src_var = (function datascript$parser$parse_src_var(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"$"))){
return (new datascript.parser.SrcVar(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_rules_var = (function datascript$parser$parse_rules_var(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"%","%",-950237169,null),form)){
return (new datascript.parser.RulesVar(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_constant = (function datascript$parser$parse_constant(form){
if(!((form instanceof cljs.core.Symbol))){
return (new datascript.parser.Constant(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_symbol = (function datascript$parser$parse_plain_symbol(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core.not.call(null,datascript.parser.parse_variable.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_src_var.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_placeholder.call(null,form)))){
return (new datascript.parser.PlainSymbol(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_fn_arg = (function datascript$parser$parse_fn_arg(form){
var or__16344__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
var or__16344__auto____$1 = datascript.parser.parse_constant.call(null,form);
if(cljs.core.truth_(or__16344__auto____$1)){
return or__16344__auto____$1;
} else {
return datascript.parser.parse_src_var.call(null,form);
}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleVars = (function (required,free,__meta,__extmap,__hash){
this.required = required;
this.free = free;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16958__auto__,k__16959__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core._lookup.call(null,this__16958__auto____$1,k__16959__auto__,null);
});

datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k41092,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__41094 = (((k41092 instanceof cljs.core.Keyword))?k41092.fqn:null);
switch (G__41094) {
case "required":
return self__.required;

break;
case "free":
return self__.free;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41092,else__16961__auto__);

}
});

datascript.parser.RuleVars.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16972__auto__,writer__16973__auto__,opts__16974__auto__){
var self__ = this;
var this__16972__auto____$1 = this;
var pr_pair__16975__auto__ = ((function (this__16972__auto____$1){
return (function (keyval__16976__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,cljs.core.pr_writer,""," ","",opts__16974__auto__,keyval__16976__auto__);
});})(this__16972__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,pr_pair__16975__auto__,"#datascript.parser.RuleVars{",", ","}",opts__16974__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleVars.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41091){
var self__ = this;
var G__41091__$1 = this;
return (new cljs.core.RecordIter((0),G__41091__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleVars.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleVars.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16952__auto__){
var self__ = this;
var this__16952__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16962__auto__){
var self__ = this;
var this__16962__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16953__auto__){
var self__ = this;
var this__16953__auto____$1 = this;
var h__16779__auto__ = self__.__hash;
if(!((h__16779__auto__ == null))){
return h__16779__auto__;
} else {
var h__16779__auto____$1 = cljs.core.hash_imap.call(null,this__16953__auto____$1);
self__.__hash = h__16779__auto____$1;

return h__16779__auto____$1;
}
});

datascript.parser.RuleVars.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16954__auto__,other__16955__auto__){
var self__ = this;
var this__16954__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16332__auto__ = other__16955__auto__;
if(cljs.core.truth_(and__16332__auto__)){
var and__16332__auto____$1 = (this__16954__auto____$1.constructor === other__16955__auto__.constructor);
if(and__16332__auto____$1){
return cljs.core.equiv_map.call(null,this__16954__auto____$1,other__16955__auto__);
} else {
return and__16332__auto____$1;
}
} else {
return and__16332__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleVars.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16967__auto__,k__16968__auto__){
var self__ = this;
var this__16967__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"free","free",801364328),null,new cljs.core.Keyword(null,"required","required",1807647006),null], null), null),k__16968__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16967__auto____$1),self__.__meta),k__16968__auto__);
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16968__auto__)),null));
}
});

datascript.parser.RuleVars.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__41091){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__41095 = cljs.core.keyword_identical_QMARK_;
var expr__41096 = k__16966__auto__;
if(cljs.core.truth_(pred__41095.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__41096))){
return (new datascript.parser.RuleVars(G__41091,self__.free,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41095.call(null,new cljs.core.Keyword(null,"free","free",801364328),expr__41096))){
return (new datascript.parser.RuleVars(self__.required,G__41091,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__41091),null));
}
}
});

datascript.parser.RuleVars.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__41091){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,G__41091,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16963__auto__,entry__16964__auto__){
var self__ = this;
var this__16963__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16964__auto__)){
return cljs.core._assoc.call(null,this__16963__auto____$1,cljs.core._nth.call(null,entry__16964__auto__,(0)),cljs.core._nth.call(null,entry__16964__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16963__auto____$1,entry__16964__auto__);
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26396__auto__,f41088){
var self__ = this;
var this__26396__auto____$1 = this;
var new__26397__auto__ = (new datascript.parser.RuleVars(datascript.parser.postwalk.call(null,self__.required,f41088),datascript.parser.postwalk.call(null,self__.free,f41088),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__26396__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__26398__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__26397__auto__,meta__26398__auto__);
} else {
return new__26397__auto__;
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26399__auto__,pred41089,acc41090){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect.call(null,pred41089,self__.free,datascript.parser.collect.call(null,pred41089,self__.required,acc41090));
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26399__auto__,acc41090){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc41090,self__.required),self__.free);
});

datascript.parser.RuleVars.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"required","required",-846788763,null),new cljs.core.Symbol(null,"free","free",-1853071441,null)], null);
});

datascript.parser.RuleVars.cljs$lang$type = true;

datascript.parser.RuleVars.cljs$lang$ctorPrSeq = (function (this__16992__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleVars");
});

datascript.parser.RuleVars.cljs$lang$ctorPrWriter = (function (this__16992__auto__,writer__16993__auto__){
return cljs.core._write.call(null,writer__16993__auto__,"datascript.parser/RuleVars");
});

datascript.parser.__GT_RuleVars = (function datascript$parser$__GT_RuleVars(required,free){
return (new datascript.parser.RuleVars(required,free,null,null,null));
});

datascript.parser.map__GT_RuleVars = (function datascript$parser$map__GT_RuleVars(G__41093){
return (new datascript.parser.RuleVars(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__41093),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(G__41093),null,cljs.core.dissoc.call(null,G__41093,new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)),null));
});

datascript.parser.parse_rule_vars = (function datascript$parser$parse_rule_vars(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__41100 = ((cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,form),cljs.core.next.call(null,form)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,form], null));
var required = cljs.core.nth.call(null,vec__41100,(0),null);
var rest = cljs.core.nth.call(null,vec__41100,(1),null);
var required_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,required);
var free_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,rest);
if((cljs.core.empty_QMARK_.call(null,required_STAR_)) && (cljs.core.empty_QMARK_.call(null,free_STAR_))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}

if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,cljs.core.concat.call(null,required_STAR_,free_STAR_)))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Rule variables should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

return (new datascript.parser.RuleVars(required_STAR_,free_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.flatten_rule_vars = (function datascript$parser$flatten_rule_vars(rule_vars){
return cljs.core.concat.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))?(function (){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);

return cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars));
})()
:null));
});
datascript.parser.rule_vars_arity = (function datascript$parser$rule_vars_arity(rule_vars){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars)),cljs.core.count.call(null,new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindIgnore = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16958__auto__,k__16959__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core._lookup.call(null,this__16958__auto____$1,k__16959__auto__,null);
});

datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k41105,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__41107 = k41105;
switch (G__41107) {
default:
return cljs.core.get.call(null,self__.__extmap,k41105,else__16961__auto__);

}
});

datascript.parser.BindIgnore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16972__auto__,writer__16973__auto__,opts__16974__auto__){
var self__ = this;
var this__16972__auto____$1 = this;
var pr_pair__16975__auto__ = ((function (this__16972__auto____$1){
return (function (keyval__16976__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,cljs.core.pr_writer,""," ","",opts__16974__auto__,keyval__16976__auto__);
});})(this__16972__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,pr_pair__16975__auto__,"#datascript.parser.BindIgnore{",", ","}",opts__16974__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41104){
var self__ = this;
var G__41104__$1 = this;
return (new cljs.core.RecordIter((0),G__41104__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindIgnore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindIgnore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16952__auto__){
var self__ = this;
var this__16952__auto____$1 = this;
return (new datascript.parser.BindIgnore(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16962__auto__){
var self__ = this;
var this__16962__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16953__auto__){
var self__ = this;
var this__16953__auto____$1 = this;
var h__16779__auto__ = self__.__hash;
if(!((h__16779__auto__ == null))){
return h__16779__auto__;
} else {
var h__16779__auto____$1 = cljs.core.hash_imap.call(null,this__16953__auto____$1);
self__.__hash = h__16779__auto____$1;

return h__16779__auto____$1;
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16954__auto__,other__16955__auto__){
var self__ = this;
var this__16954__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16332__auto__ = other__16955__auto__;
if(cljs.core.truth_(and__16332__auto__)){
var and__16332__auto____$1 = (this__16954__auto____$1.constructor === other__16955__auto__.constructor);
if(and__16332__auto____$1){
return cljs.core.equiv_map.call(null,this__16954__auto____$1,other__16955__auto__);
} else {
return and__16332__auto____$1;
}
} else {
return and__16332__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16967__auto__,k__16968__auto__){
var self__ = this;
var this__16967__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__16968__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16967__auto____$1),self__.__meta),k__16968__auto__);
} else {
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16968__auto__)),null));
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__41104){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__41108 = cljs.core.keyword_identical_QMARK_;
var expr__41109 = k__16966__auto__;
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__41104),null));
});

datascript.parser.BindIgnore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__41104){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.BindIgnore(G__41104,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16963__auto__,entry__16964__auto__){
var self__ = this;
var this__16963__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16964__auto__)){
return cljs.core._assoc.call(null,this__16963__auto____$1,cljs.core._nth.call(null,entry__16964__auto__,(0)),cljs.core._nth.call(null,entry__16964__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16963__auto____$1,entry__16964__auto__);
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26396__auto__,f41101){
var self__ = this;
var this__26396__auto____$1 = this;
var new__26397__auto__ = (new datascript.parser.BindIgnore(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__26396__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__26398__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__26397__auto__,meta__26398__auto__);
} else {
return new__26397__auto__;
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26399__auto__,pred41102,acc41103){
var self__ = this;
var ___26399__auto____$1 = this;
return acc41103;
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26399__auto__,acc41103){
var self__ = this;
var ___26399__auto____$1 = this;
return acc41103;
});

datascript.parser.BindIgnore.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.BindIgnore.cljs$lang$type = true;

datascript.parser.BindIgnore.cljs$lang$ctorPrSeq = (function (this__16992__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindIgnore");
});

datascript.parser.BindIgnore.cljs$lang$ctorPrWriter = (function (this__16992__auto__,writer__16993__auto__){
return cljs.core._write.call(null,writer__16993__auto__,"datascript.parser/BindIgnore");
});

datascript.parser.__GT_BindIgnore = (function datascript$parser$__GT_BindIgnore(){
return (new datascript.parser.BindIgnore(null,null,null));
});

datascript.parser.map__GT_BindIgnore = (function datascript$parser$map__GT_BindIgnore(G__41106){
return (new datascript.parser.BindIgnore(null,cljs.core.dissoc.call(null,G__41106),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindScalar = (function (variable,__meta,__extmap,__hash){
this.variable = variable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16958__auto__,k__16959__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core._lookup.call(null,this__16958__auto____$1,k__16959__auto__,null);
});

datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k41116,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__41118 = (((k41116 instanceof cljs.core.Keyword))?k41116.fqn:null);
switch (G__41118) {
case "variable":
return self__.variable;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41116,else__16961__auto__);

}
});

datascript.parser.BindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16972__auto__,writer__16973__auto__,opts__16974__auto__){
var self__ = this;
var this__16972__auto____$1 = this;
var pr_pair__16975__auto__ = ((function (this__16972__auto____$1){
return (function (keyval__16976__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,cljs.core.pr_writer,""," ","",opts__16974__auto__,keyval__16976__auto__);
});})(this__16972__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,pr_pair__16975__auto__,"#datascript.parser.BindScalar{",", ","}",opts__16974__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41115){
var self__ = this;
var G__41115__$1 = this;
return (new cljs.core.RecordIter((0),G__41115__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16952__auto__){
var self__ = this;
var this__16952__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16962__auto__){
var self__ = this;
var this__16962__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16953__auto__){
var self__ = this;
var this__16953__auto____$1 = this;
var h__16779__auto__ = self__.__hash;
if(!((h__16779__auto__ == null))){
return h__16779__auto__;
} else {
var h__16779__auto____$1 = cljs.core.hash_imap.call(null,this__16953__auto____$1);
self__.__hash = h__16779__auto____$1;

return h__16779__auto____$1;
}
});

datascript.parser.BindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16954__auto__,other__16955__auto__){
var self__ = this;
var this__16954__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16332__auto__ = other__16955__auto__;
if(cljs.core.truth_(and__16332__auto__)){
var and__16332__auto____$1 = (this__16954__auto____$1.constructor === other__16955__auto__.constructor);
if(and__16332__auto____$1){
return cljs.core.equiv_map.call(null,this__16954__auto____$1,other__16955__auto__);
} else {
return and__16332__auto____$1;
}
} else {
return and__16332__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16967__auto__,k__16968__auto__){
var self__ = this;
var this__16967__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variable","variable",-281346492),null], null), null),k__16968__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16967__auto____$1),self__.__meta),k__16968__auto__);
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16968__auto__)),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__41115){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__41119 = cljs.core.keyword_identical_QMARK_;
var expr__41120 = k__16966__auto__;
if(cljs.core.truth_(pred__41119.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__41120))){
return (new datascript.parser.BindScalar(G__41115,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__41115),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__41115){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,G__41115,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16963__auto__,entry__16964__auto__){
var self__ = this;
var this__16963__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16964__auto__)){
return cljs.core._assoc.call(null,this__16963__auto____$1,cljs.core._nth.call(null,entry__16964__auto__,(0)),cljs.core._nth.call(null,entry__16964__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16963__auto____$1,entry__16964__auto__);
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26396__auto__,f41112){
var self__ = this;
var this__26396__auto____$1 = this;
var new__26397__auto__ = (new datascript.parser.BindScalar(datascript.parser.postwalk.call(null,self__.variable,f41112),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__26396__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__26398__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__26397__auto__,meta__26398__auto__);
} else {
return new__26397__auto__;
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26399__auto__,pred41113,acc41114){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect.call(null,pred41113,self__.variable,acc41114);
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26399__auto__,acc41114){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc41114,self__.variable);
});

datascript.parser.BindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"variable","variable",1359185035,null)], null);
});

datascript.parser.BindScalar.cljs$lang$type = true;

datascript.parser.BindScalar.cljs$lang$ctorPrSeq = (function (this__16992__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindScalar");
});

datascript.parser.BindScalar.cljs$lang$ctorPrWriter = (function (this__16992__auto__,writer__16993__auto__){
return cljs.core._write.call(null,writer__16993__auto__,"datascript.parser/BindScalar");
});

datascript.parser.__GT_BindScalar = (function datascript$parser$__GT_BindScalar(variable){
return (new datascript.parser.BindScalar(variable,null,null,null));
});

datascript.parser.map__GT_BindScalar = (function datascript$parser$map__GT_BindScalar(G__41117){
return (new datascript.parser.BindScalar(new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__41117),null,cljs.core.dissoc.call(null,G__41117,new cljs.core.Keyword(null,"variable","variable",-281346492)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindTuple = (function (bindings,__meta,__extmap,__hash){
this.bindings = bindings;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16958__auto__,k__16959__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core._lookup.call(null,this__16958__auto____$1,k__16959__auto__,null);
});

datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k41127,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__41129 = (((k41127 instanceof cljs.core.Keyword))?k41127.fqn:null);
switch (G__41129) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41127,else__16961__auto__);

}
});

datascript.parser.BindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16972__auto__,writer__16973__auto__,opts__16974__auto__){
var self__ = this;
var this__16972__auto____$1 = this;
var pr_pair__16975__auto__ = ((function (this__16972__auto____$1){
return (function (keyval__16976__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,cljs.core.pr_writer,""," ","",opts__16974__auto__,keyval__16976__auto__);
});})(this__16972__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,pr_pair__16975__auto__,"#datascript.parser.BindTuple{",", ","}",opts__16974__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41126){
var self__ = this;
var G__41126__$1 = this;
return (new cljs.core.RecordIter((0),G__41126__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16952__auto__){
var self__ = this;
var this__16952__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16962__auto__){
var self__ = this;
var this__16962__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16953__auto__){
var self__ = this;
var this__16953__auto____$1 = this;
var h__16779__auto__ = self__.__hash;
if(!((h__16779__auto__ == null))){
return h__16779__auto__;
} else {
var h__16779__auto____$1 = cljs.core.hash_imap.call(null,this__16953__auto____$1);
self__.__hash = h__16779__auto____$1;

return h__16779__auto____$1;
}
});

datascript.parser.BindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16954__auto__,other__16955__auto__){
var self__ = this;
var this__16954__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16332__auto__ = other__16955__auto__;
if(cljs.core.truth_(and__16332__auto__)){
var and__16332__auto____$1 = (this__16954__auto____$1.constructor === other__16955__auto__.constructor);
if(and__16332__auto____$1){
return cljs.core.equiv_map.call(null,this__16954__auto____$1,other__16955__auto__);
} else {
return and__16332__auto____$1;
}
} else {
return and__16332__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16967__auto__,k__16968__auto__){
var self__ = this;
var this__16967__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),null], null), null),k__16968__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16967__auto____$1),self__.__meta),k__16968__auto__);
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16968__auto__)),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__41126){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__41130 = cljs.core.keyword_identical_QMARK_;
var expr__41131 = k__16966__auto__;
if(cljs.core.truth_(pred__41130.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__41131))){
return (new datascript.parser.BindTuple(G__41126,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__41126),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__41126){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,G__41126,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16963__auto__,entry__16964__auto__){
var self__ = this;
var this__16963__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16964__auto__)){
return cljs.core._assoc.call(null,this__16963__auto____$1,cljs.core._nth.call(null,entry__16964__auto__,(0)),cljs.core._nth.call(null,entry__16964__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16963__auto____$1,entry__16964__auto__);
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26396__auto__,f41123){
var self__ = this;
var this__26396__auto____$1 = this;
var new__26397__auto__ = (new datascript.parser.BindTuple(datascript.parser.postwalk.call(null,self__.bindings,f41123),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__26396__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__26398__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__26397__auto__,meta__26398__auto__);
} else {
return new__26397__auto__;
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26399__auto__,pred41124,acc41125){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect.call(null,pred41124,self__.bindings,acc41125);
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26399__auto__,acc41125){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc41125,self__.bindings);
});

datascript.parser.BindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null)], null);
});

datascript.parser.BindTuple.cljs$lang$type = true;

datascript.parser.BindTuple.cljs$lang$ctorPrSeq = (function (this__16992__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindTuple");
});

datascript.parser.BindTuple.cljs$lang$ctorPrWriter = (function (this__16992__auto__,writer__16993__auto__){
return cljs.core._write.call(null,writer__16993__auto__,"datascript.parser/BindTuple");
});

datascript.parser.__GT_BindTuple = (function datascript$parser$__GT_BindTuple(bindings){
return (new datascript.parser.BindTuple(bindings,null,null,null));
});

datascript.parser.map__GT_BindTuple = (function datascript$parser$map__GT_BindTuple(G__41128){
return (new datascript.parser.BindTuple(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__41128),null,cljs.core.dissoc.call(null,G__41128,new cljs.core.Keyword(null,"bindings","bindings",1271397192)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindColl = (function (binding,__meta,__extmap,__hash){
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16958__auto__,k__16959__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core._lookup.call(null,this__16958__auto____$1,k__16959__auto__,null);
});

datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k41138,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__41140 = (((k41138 instanceof cljs.core.Keyword))?k41138.fqn:null);
switch (G__41140) {
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41138,else__16961__auto__);

}
});

datascript.parser.BindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16972__auto__,writer__16973__auto__,opts__16974__auto__){
var self__ = this;
var this__16972__auto____$1 = this;
var pr_pair__16975__auto__ = ((function (this__16972__auto____$1){
return (function (keyval__16976__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,cljs.core.pr_writer,""," ","",opts__16974__auto__,keyval__16976__auto__);
});})(this__16972__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,pr_pair__16975__auto__,"#datascript.parser.BindColl{",", ","}",opts__16974__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41137){
var self__ = this;
var G__41137__$1 = this;
return (new cljs.core.RecordIter((0),G__41137__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binding","binding",539932593)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16952__auto__){
var self__ = this;
var this__16952__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16962__auto__){
var self__ = this;
var this__16962__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16953__auto__){
var self__ = this;
var this__16953__auto____$1 = this;
var h__16779__auto__ = self__.__hash;
if(!((h__16779__auto__ == null))){
return h__16779__auto__;
} else {
var h__16779__auto____$1 = cljs.core.hash_imap.call(null,this__16953__auto____$1);
self__.__hash = h__16779__auto____$1;

return h__16779__auto____$1;
}
});

datascript.parser.BindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16954__auto__,other__16955__auto__){
var self__ = this;
var this__16954__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16332__auto__ = other__16955__auto__;
if(cljs.core.truth_(and__16332__auto__)){
var and__16332__auto____$1 = (this__16954__auto____$1.constructor === other__16955__auto__.constructor);
if(and__16332__auto____$1){
return cljs.core.equiv_map.call(null,this__16954__auto____$1,other__16955__auto__);
} else {
return and__16332__auto____$1;
}
} else {
return and__16332__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16967__auto__,k__16968__auto__){
var self__ = this;
var this__16967__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__16968__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16967__auto____$1),self__.__meta),k__16968__auto__);
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16968__auto__)),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__41137){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__41141 = cljs.core.keyword_identical_QMARK_;
var expr__41142 = k__16966__auto__;
if(cljs.core.truth_(pred__41141.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__41142))){
return (new datascript.parser.BindColl(G__41137,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__41137),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__41137){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,G__41137,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16963__auto__,entry__16964__auto__){
var self__ = this;
var this__16963__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16964__auto__)){
return cljs.core._assoc.call(null,this__16963__auto____$1,cljs.core._nth.call(null,entry__16964__auto__,(0)),cljs.core._nth.call(null,entry__16964__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16963__auto____$1,entry__16964__auto__);
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26396__auto__,f41134){
var self__ = this;
var this__26396__auto____$1 = this;
var new__26397__auto__ = (new datascript.parser.BindColl(datascript.parser.postwalk.call(null,self__.binding,f41134),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__26396__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__26398__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__26397__auto__,meta__26398__auto__);
} else {
return new__26397__auto__;
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26399__auto__,pred41135,acc41136){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect.call(null,pred41135,self__.binding,acc41136);
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26399__auto__,acc41136){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc41136,self__.binding);
});

datascript.parser.BindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.BindColl.cljs$lang$type = true;

datascript.parser.BindColl.cljs$lang$ctorPrSeq = (function (this__16992__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindColl");
});

datascript.parser.BindColl.cljs$lang$ctorPrWriter = (function (this__16992__auto__,writer__16993__auto__){
return cljs.core._write.call(null,writer__16993__auto__,"datascript.parser/BindColl");
});

datascript.parser.__GT_BindColl = (function datascript$parser$__GT_BindColl(binding){
return (new datascript.parser.BindColl(binding,null,null,null));
});

datascript.parser.map__GT_BindColl = (function datascript$parser$map__GT_BindColl(G__41139){
return (new datascript.parser.BindColl(new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__41139),null,cljs.core.dissoc.call(null,G__41139,new cljs.core.Keyword(null,"binding","binding",539932593)),null));
});

datascript.parser.parse_binding;
datascript.parser.parse_bind_ignore = (function datascript$parser$parse_bind_ignore(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return datascript.parser.with_source.call(null,(new datascript.parser.BindIgnore(null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_scalar = (function datascript$parser$parse_bind_scalar(form){
var temp__4425__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var var$ = temp__4425__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_coll = (function datascript$parser$parse_bind_coll(form){
if(cljs.core.truth_((function (){var and__16332__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(2));
if(cljs.core.truth_(and__16332__auto__)){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,"...","...",-1926939749,null));
} else {
return and__16332__auto__;
}
})())){
var temp__4423__auto__ = datascript.parser.parse_binding.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4423__auto__)){
var sub_bind = temp__4423__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(sub_bind,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse collection binding")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_tuple_el = (function datascript$parser$parse_tuple_el(form){
var or__16344__auto__ = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_bind_tuple = (function datascript$parser$parse_bind_tuple(form){
var temp__4425__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_tuple_el,form);
if(cljs.core.truth_(temp__4425__auto__)){
var sub_bindings = temp__4425__auto__;
if(!(cljs.core.empty_QMARK_.call(null,sub_bindings))){
return datascript.parser.with_source.call(null,(new datascript.parser.BindTuple(sub_bindings,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Tuple binding cannot be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_bind_rel = (function datascript$parser$parse_bind_rel(form){
if(cljs.core.truth_((function (){var and__16332__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(1));
if(cljs.core.truth_(and__16332__auto__)){
return cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form));
} else {
return and__16332__auto__;
}
})())){
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(datascript.parser.parse_bind_tuple.call(null,cljs.core.first.call(null,form)),null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_binding = (function datascript$parser$parse_binding(form){
var or__16344__auto__ = datascript.parser.parse_bind_coll.call(null,form);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
var or__16344__auto____$1 = datascript.parser.parse_bind_rel.call(null,form);
if(cljs.core.truth_(or__16344__auto____$1)){
return or__16344__auto____$1;
} else {
var or__16344__auto____$2 = datascript.parser.parse_bind_tuple.call(null,form);
if(cljs.core.truth_(or__16344__auto____$2)){
return or__16344__auto____$2;
} else {
var or__16344__auto____$3 = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__16344__auto____$3)){
return or__16344__auto____$3;
} else {
var or__16344__auto____$4 = datascript.parser.parse_bind_scalar.call(null,form);
if(cljs.core.truth_(or__16344__auto____$4)){
return or__16344__auto____$4;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse binding, expected (bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
});

/**
 * @interface
 */
datascript.parser.IFindVars = function(){};

datascript.parser._find_vars = (function datascript$parser$_find_vars(this$){
if((!((this$ == null))) && (!((this$.datascript$parser$IFindVars$_find_vars$arity$1 == null)))){
return this$.datascript$parser$IFindVars$_find_vars$arity$1(this$);
} else {
var x__16999__auto__ = (((this$ == null))?null:this$);
var m__17000__auto__ = (datascript.parser._find_vars[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,this$);
} else {
var m__17000__auto____$1 = (datascript.parser._find_vars["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IFindVars.-find-vars",this$);
}
}
}
});

datascript.parser.Variable.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Variable.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1.symbol], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Aggregate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,cljs.core.last.call(null,self__.args));
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16958__auto__,k__16959__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core._lookup.call(null,this__16958__auto____$1,k__16959__auto__,null);
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k41149,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__41151 = (((k41149 instanceof cljs.core.Keyword))?k41149.fqn:null);
switch (G__41151) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41149,else__16961__auto__);

}
});

datascript.parser.Aggregate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16972__auto__,writer__16973__auto__,opts__16974__auto__){
var self__ = this;
var this__16972__auto____$1 = this;
var pr_pair__16975__auto__ = ((function (this__16972__auto____$1){
return (function (keyval__16976__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,cljs.core.pr_writer,""," ","",opts__16974__auto__,keyval__16976__auto__);
});})(this__16972__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,pr_pair__16975__auto__,"#datascript.parser.Aggregate{",", ","}",opts__16974__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IIterable$ = true;

datascript.parser.Aggregate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41148){
var self__ = this;
var G__41148__$1 = this;
return (new cljs.core.RecordIter((0),G__41148__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Aggregate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Aggregate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16952__auto__){
var self__ = this;
var this__16952__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16962__auto__){
var self__ = this;
var this__16962__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16953__auto__){
var self__ = this;
var this__16953__auto____$1 = this;
var h__16779__auto__ = self__.__hash;
if(!((h__16779__auto__ == null))){
return h__16779__auto__;
} else {
var h__16779__auto____$1 = cljs.core.hash_imap.call(null,this__16953__auto____$1);
self__.__hash = h__16779__auto____$1;

return h__16779__auto____$1;
}
});

datascript.parser.Aggregate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16954__auto__,other__16955__auto__){
var self__ = this;
var this__16954__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16332__auto__ = other__16955__auto__;
if(cljs.core.truth_(and__16332__auto__)){
var and__16332__auto____$1 = (this__16954__auto____$1.constructor === other__16955__auto__.constructor);
if(and__16332__auto____$1){
return cljs.core.equiv_map.call(null,this__16954__auto____$1,other__16955__auto__);
} else {
return and__16332__auto____$1;
}
} else {
return and__16332__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Aggregate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16967__auto__,k__16968__auto__){
var self__ = this;
var this__16967__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__16968__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16967__auto____$1),self__.__meta),k__16968__auto__);
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16968__auto__)),null));
}
});

datascript.parser.Aggregate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__41148){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__41152 = cljs.core.keyword_identical_QMARK_;
var expr__41153 = k__16966__auto__;
if(cljs.core.truth_(pred__41152.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__41153))){
return (new datascript.parser.Aggregate(G__41148,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41152.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__41153))){
return (new datascript.parser.Aggregate(self__.fn,G__41148,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__41148),null));
}
}
});

datascript.parser.Aggregate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__41148){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,G__41148,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16963__auto__,entry__16964__auto__){
var self__ = this;
var this__16963__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16964__auto__)){
return cljs.core._assoc.call(null,this__16963__auto____$1,cljs.core._nth.call(null,entry__16964__auto__,(0)),cljs.core._nth.call(null,entry__16964__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16963__auto____$1,entry__16964__auto__);
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26396__auto__,f41145){
var self__ = this;
var this__26396__auto____$1 = this;
var new__26397__auto__ = (new datascript.parser.Aggregate(datascript.parser.postwalk.call(null,self__.fn,f41145),datascript.parser.postwalk.call(null,self__.args,f41145),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__26396__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__26398__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__26397__auto__,meta__26398__auto__);
} else {
return new__26397__auto__;
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26399__auto__,pred41146,acc41147){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect.call(null,pred41146,self__.args,datascript.parser.collect.call(null,pred41146,self__.fn,acc41147));
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26399__auto__,acc41147){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc41147,self__.fn),self__.args);
});

datascript.parser.Aggregate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Aggregate.cljs$lang$type = true;

datascript.parser.Aggregate.cljs$lang$ctorPrSeq = (function (this__16992__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Aggregate");
});

datascript.parser.Aggregate.cljs$lang$ctorPrWriter = (function (this__16992__auto__,writer__16993__auto__){
return cljs.core._write.call(null,writer__16993__auto__,"datascript.parser/Aggregate");
});

datascript.parser.__GT_Aggregate = (function datascript$parser$__GT_Aggregate(fn,args){
return (new datascript.parser.Aggregate(fn,args,null,null,null));
});

datascript.parser.map__GT_Aggregate = (function datascript$parser$map__GT_Aggregate(G__41150){
return (new datascript.parser.Aggregate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__41150),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__41150),null,cljs.core.dissoc.call(null,G__41150,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pull = (function (source,variable,pattern,__meta,__extmap,__hash){
this.source = source;
this.variable = variable;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Pull.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Pull.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,self__.variable);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16958__auto__,k__16959__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core._lookup.call(null,this__16958__auto____$1,k__16959__auto__,null);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k41160,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__41162 = (((k41160 instanceof cljs.core.Keyword))?k41160.fqn:null);
switch (G__41162) {
case "source":
return self__.source;

break;
case "variable":
return self__.variable;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41160,else__16961__auto__);

}
});

datascript.parser.Pull.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16972__auto__,writer__16973__auto__,opts__16974__auto__){
var self__ = this;
var this__16972__auto____$1 = this;
var pr_pair__16975__auto__ = ((function (this__16972__auto____$1){
return (function (keyval__16976__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,cljs.core.pr_writer,""," ","",opts__16974__auto__,keyval__16976__auto__);
});})(this__16972__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,pr_pair__16975__auto__,"#datascript.parser.Pull{",", ","}",opts__16974__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IIterable$ = true;

datascript.parser.Pull.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41159){
var self__ = this;
var G__41159__$1 = this;
return (new cljs.core.RecordIter((0),G__41159__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Pull.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pull.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16952__auto__){
var self__ = this;
var this__16952__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16962__auto__){
var self__ = this;
var this__16962__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16953__auto__){
var self__ = this;
var this__16953__auto____$1 = this;
var h__16779__auto__ = self__.__hash;
if(!((h__16779__auto__ == null))){
return h__16779__auto__;
} else {
var h__16779__auto____$1 = cljs.core.hash_imap.call(null,this__16953__auto____$1);
self__.__hash = h__16779__auto____$1;

return h__16779__auto____$1;
}
});

datascript.parser.Pull.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16954__auto__,other__16955__auto__){
var self__ = this;
var this__16954__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16332__auto__ = other__16955__auto__;
if(cljs.core.truth_(and__16332__auto__)){
var and__16332__auto____$1 = (this__16954__auto____$1.constructor === other__16955__auto__.constructor);
if(and__16332__auto____$1){
return cljs.core.equiv_map.call(null,this__16954__auto____$1,other__16955__auto__);
} else {
return and__16332__auto____$1;
}
} else {
return and__16332__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Pull.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16967__auto__,k__16968__auto__){
var self__ = this;
var this__16967__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variable","variable",-281346492),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__16968__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16967__auto____$1),self__.__meta),k__16968__auto__);
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16968__auto__)),null));
}
});

datascript.parser.Pull.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__41159){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__41163 = cljs.core.keyword_identical_QMARK_;
var expr__41164 = k__16966__auto__;
if(cljs.core.truth_(pred__41163.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__41164))){
return (new datascript.parser.Pull(G__41159,self__.variable,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41163.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__41164))){
return (new datascript.parser.Pull(self__.source,G__41159,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41163.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__41164))){
return (new datascript.parser.Pull(self__.source,self__.variable,G__41159,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__41159),null));
}
}
}
});

datascript.parser.Pull.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__41159){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,G__41159,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16963__auto__,entry__16964__auto__){
var self__ = this;
var this__16963__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16964__auto__)){
return cljs.core._assoc.call(null,this__16963__auto____$1,cljs.core._nth.call(null,entry__16964__auto__,(0)),cljs.core._nth.call(null,entry__16964__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16963__auto____$1,entry__16964__auto__);
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26396__auto__,f41156){
var self__ = this;
var this__26396__auto____$1 = this;
var new__26397__auto__ = (new datascript.parser.Pull(datascript.parser.postwalk.call(null,self__.source,f41156),datascript.parser.postwalk.call(null,self__.variable,f41156),datascript.parser.postwalk.call(null,self__.pattern,f41156),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__26396__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__26398__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__26397__auto__,meta__26398__auto__);
} else {
return new__26397__auto__;
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26399__auto__,pred41157,acc41158){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect.call(null,pred41157,self__.pattern,datascript.parser.collect.call(null,pred41157,self__.variable,datascript.parser.collect.call(null,pred41157,self__.source,acc41158)));
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26399__auto__,acc41158){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc41158,self__.source),self__.variable),self__.pattern);
});

datascript.parser.Pull.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"variable","variable",1359185035,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pull.cljs$lang$type = true;

datascript.parser.Pull.cljs$lang$ctorPrSeq = (function (this__16992__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pull");
});

datascript.parser.Pull.cljs$lang$ctorPrWriter = (function (this__16992__auto__,writer__16993__auto__){
return cljs.core._write.call(null,writer__16993__auto__,"datascript.parser/Pull");
});

datascript.parser.__GT_Pull = (function datascript$parser$__GT_Pull(source,variable,pattern){
return (new datascript.parser.Pull(source,variable,pattern,null,null,null));
});

datascript.parser.map__GT_Pull = (function datascript$parser$map__GT_Pull(G__41161){
return (new datascript.parser.Pull(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__41161),new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__41161),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__41161),null,cljs.core.dissoc.call(null,G__41161,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
});


/**
 * @interface
 */
datascript.parser.IFindElements = function(){};

datascript.parser.find_elements = (function datascript$parser$find_elements(this$){
if((!((this$ == null))) && (!((this$.datascript$parser$IFindElements$find_elements$arity$1 == null)))){
return this$.datascript$parser$IFindElements$find_elements$arity$1(this$);
} else {
var x__16999__auto__ = (((this$ == null))?null:this$);
var m__17000__auto__ = (datascript.parser.find_elements[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,this$);
} else {
var m__17000__auto____$1 = (datascript.parser.find_elements["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IFindElements.find-elements",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindRel = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16958__auto__,k__16959__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core._lookup.call(null,this__16958__auto____$1,k__16959__auto__,null);
});

datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k41171,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__41173 = (((k41171 instanceof cljs.core.Keyword))?k41171.fqn:null);
switch (G__41173) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41171,else__16961__auto__);

}
});

datascript.parser.FindRel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16972__auto__,writer__16973__auto__,opts__16974__auto__){
var self__ = this;
var this__16972__auto____$1 = this;
var pr_pair__16975__auto__ = ((function (this__16972__auto____$1){
return (function (keyval__16976__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,cljs.core.pr_writer,""," ","",opts__16974__auto__,keyval__16976__auto__);
});})(this__16972__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,pr_pair__16975__auto__,"#datascript.parser.FindRel{",", ","}",opts__16974__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindRel.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41170){
var self__ = this;
var G__41170__$1 = this;
return (new cljs.core.RecordIter((0),G__41170__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindRel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindRel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16952__auto__){
var self__ = this;
var this__16952__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16962__auto__){
var self__ = this;
var this__16962__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16953__auto__){
var self__ = this;
var this__16953__auto____$1 = this;
var h__16779__auto__ = self__.__hash;
if(!((h__16779__auto__ == null))){
return h__16779__auto__;
} else {
var h__16779__auto____$1 = cljs.core.hash_imap.call(null,this__16953__auto____$1);
self__.__hash = h__16779__auto____$1;

return h__16779__auto____$1;
}
});

datascript.parser.FindRel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16954__auto__,other__16955__auto__){
var self__ = this;
var this__16954__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16332__auto__ = other__16955__auto__;
if(cljs.core.truth_(and__16332__auto__)){
var and__16332__auto____$1 = (this__16954__auto____$1.constructor === other__16955__auto__.constructor);
if(and__16332__auto____$1){
return cljs.core.equiv_map.call(null,this__16954__auto____$1,other__16955__auto__);
} else {
return and__16332__auto____$1;
}
} else {
return and__16332__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindRel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16967__auto__,k__16968__auto__){
var self__ = this;
var this__16967__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__16968__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16967__auto____$1),self__.__meta),k__16968__auto__);
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16968__auto__)),null));
}
});

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindRel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__41170){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__41174 = cljs.core.keyword_identical_QMARK_;
var expr__41175 = k__16966__auto__;
if(cljs.core.truth_(pred__41174.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__41175))){
return (new datascript.parser.FindRel(G__41170,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__41170),null));
}
});

datascript.parser.FindRel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__41170){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,G__41170,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16963__auto__,entry__16964__auto__){
var self__ = this;
var this__16963__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16964__auto__)){
return cljs.core._assoc.call(null,this__16963__auto____$1,cljs.core._nth.call(null,entry__16964__auto__,(0)),cljs.core._nth.call(null,entry__16964__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16963__auto____$1,entry__16964__auto__);
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26396__auto__,f41167){
var self__ = this;
var this__26396__auto____$1 = this;
var new__26397__auto__ = (new datascript.parser.FindRel(datascript.parser.postwalk.call(null,self__.elements,f41167),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__26396__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__26398__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__26397__auto__,meta__26398__auto__);
} else {
return new__26397__auto__;
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26399__auto__,pred41168,acc41169){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect.call(null,pred41168,self__.elements,acc41169);
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26399__auto__,acc41169){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc41169,self__.elements);
});

datascript.parser.FindRel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindRel.cljs$lang$type = true;

datascript.parser.FindRel.cljs$lang$ctorPrSeq = (function (this__16992__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindRel");
});

datascript.parser.FindRel.cljs$lang$ctorPrWriter = (function (this__16992__auto__,writer__16993__auto__){
return cljs.core._write.call(null,writer__16993__auto__,"datascript.parser/FindRel");
});

datascript.parser.__GT_FindRel = (function datascript$parser$__GT_FindRel(elements){
return (new datascript.parser.FindRel(elements,null,null,null));
});

datascript.parser.map__GT_FindRel = (function datascript$parser$map__GT_FindRel(G__41172){
return (new datascript.parser.FindRel(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__41172),null,cljs.core.dissoc.call(null,G__41172,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindColl = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16958__auto__,k__16959__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core._lookup.call(null,this__16958__auto____$1,k__16959__auto__,null);
});

datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k41182,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__41184 = (((k41182 instanceof cljs.core.Keyword))?k41182.fqn:null);
switch (G__41184) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41182,else__16961__auto__);

}
});

datascript.parser.FindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16972__auto__,writer__16973__auto__,opts__16974__auto__){
var self__ = this;
var this__16972__auto____$1 = this;
var pr_pair__16975__auto__ = ((function (this__16972__auto____$1){
return (function (keyval__16976__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,cljs.core.pr_writer,""," ","",opts__16974__auto__,keyval__16976__auto__);
});})(this__16972__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,pr_pair__16975__auto__,"#datascript.parser.FindColl{",", ","}",opts__16974__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41181){
var self__ = this;
var G__41181__$1 = this;
return (new cljs.core.RecordIter((0),G__41181__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16952__auto__){
var self__ = this;
var this__16952__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16962__auto__){
var self__ = this;
var this__16962__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16953__auto__){
var self__ = this;
var this__16953__auto____$1 = this;
var h__16779__auto__ = self__.__hash;
if(!((h__16779__auto__ == null))){
return h__16779__auto__;
} else {
var h__16779__auto____$1 = cljs.core.hash_imap.call(null,this__16953__auto____$1);
self__.__hash = h__16779__auto____$1;

return h__16779__auto____$1;
}
});

datascript.parser.FindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16954__auto__,other__16955__auto__){
var self__ = this;
var this__16954__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16332__auto__ = other__16955__auto__;
if(cljs.core.truth_(and__16332__auto__)){
var and__16332__auto____$1 = (this__16954__auto____$1.constructor === other__16955__auto__.constructor);
if(and__16332__auto____$1){
return cljs.core.equiv_map.call(null,this__16954__auto____$1,other__16955__auto__);
} else {
return and__16332__auto____$1;
}
} else {
return and__16332__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16967__auto__,k__16968__auto__){
var self__ = this;
var this__16967__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__16968__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16967__auto____$1),self__.__meta),k__16968__auto__);
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16968__auto__)),null));
}
});

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__41181){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__41185 = cljs.core.keyword_identical_QMARK_;
var expr__41186 = k__16966__auto__;
if(cljs.core.truth_(pred__41185.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__41186))){
return (new datascript.parser.FindColl(G__41181,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__41181),null));
}
});

datascript.parser.FindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__41181){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,G__41181,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16963__auto__,entry__16964__auto__){
var self__ = this;
var this__16963__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16964__auto__)){
return cljs.core._assoc.call(null,this__16963__auto____$1,cljs.core._nth.call(null,entry__16964__auto__,(0)),cljs.core._nth.call(null,entry__16964__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16963__auto____$1,entry__16964__auto__);
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26396__auto__,f41178){
var self__ = this;
var this__26396__auto____$1 = this;
var new__26397__auto__ = (new datascript.parser.FindColl(datascript.parser.postwalk.call(null,self__.element,f41178),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__26396__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__26398__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__26397__auto__,meta__26398__auto__);
} else {
return new__26397__auto__;
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26399__auto__,pred41179,acc41180){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect.call(null,pred41179,self__.element,acc41180);
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26399__auto__,acc41180){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc41180,self__.element);
});

datascript.parser.FindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindColl.cljs$lang$type = true;

datascript.parser.FindColl.cljs$lang$ctorPrSeq = (function (this__16992__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindColl");
});

datascript.parser.FindColl.cljs$lang$ctorPrWriter = (function (this__16992__auto__,writer__16993__auto__){
return cljs.core._write.call(null,writer__16993__auto__,"datascript.parser/FindColl");
});

datascript.parser.__GT_FindColl = (function datascript$parser$__GT_FindColl(element){
return (new datascript.parser.FindColl(element,null,null,null));
});

datascript.parser.map__GT_FindColl = (function datascript$parser$map__GT_FindColl(G__41183){
return (new datascript.parser.FindColl(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__41183),null,cljs.core.dissoc.call(null,G__41183,new cljs.core.Keyword(null,"element","element",1974019749)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindScalar = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16958__auto__,k__16959__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core._lookup.call(null,this__16958__auto____$1,k__16959__auto__,null);
});

datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k41193,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__41195 = (((k41193 instanceof cljs.core.Keyword))?k41193.fqn:null);
switch (G__41195) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41193,else__16961__auto__);

}
});

datascript.parser.FindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16972__auto__,writer__16973__auto__,opts__16974__auto__){
var self__ = this;
var this__16972__auto____$1 = this;
var pr_pair__16975__auto__ = ((function (this__16972__auto____$1){
return (function (keyval__16976__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,cljs.core.pr_writer,""," ","",opts__16974__auto__,keyval__16976__auto__);
});})(this__16972__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,pr_pair__16975__auto__,"#datascript.parser.FindScalar{",", ","}",opts__16974__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41192){
var self__ = this;
var G__41192__$1 = this;
return (new cljs.core.RecordIter((0),G__41192__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16952__auto__){
var self__ = this;
var this__16952__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16962__auto__){
var self__ = this;
var this__16962__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16953__auto__){
var self__ = this;
var this__16953__auto____$1 = this;
var h__16779__auto__ = self__.__hash;
if(!((h__16779__auto__ == null))){
return h__16779__auto__;
} else {
var h__16779__auto____$1 = cljs.core.hash_imap.call(null,this__16953__auto____$1);
self__.__hash = h__16779__auto____$1;

return h__16779__auto____$1;
}
});

datascript.parser.FindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16954__auto__,other__16955__auto__){
var self__ = this;
var this__16954__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16332__auto__ = other__16955__auto__;
if(cljs.core.truth_(and__16332__auto__)){
var and__16332__auto____$1 = (this__16954__auto____$1.constructor === other__16955__auto__.constructor);
if(and__16332__auto____$1){
return cljs.core.equiv_map.call(null,this__16954__auto____$1,other__16955__auto__);
} else {
return and__16332__auto____$1;
}
} else {
return and__16332__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16967__auto__,k__16968__auto__){
var self__ = this;
var this__16967__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__16968__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16967__auto____$1),self__.__meta),k__16968__auto__);
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16968__auto__)),null));
}
});

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__41192){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__41196 = cljs.core.keyword_identical_QMARK_;
var expr__41197 = k__16966__auto__;
if(cljs.core.truth_(pred__41196.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__41197))){
return (new datascript.parser.FindScalar(G__41192,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__41192),null));
}
});

datascript.parser.FindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__41192){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,G__41192,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16963__auto__,entry__16964__auto__){
var self__ = this;
var this__16963__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16964__auto__)){
return cljs.core._assoc.call(null,this__16963__auto____$1,cljs.core._nth.call(null,entry__16964__auto__,(0)),cljs.core._nth.call(null,entry__16964__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16963__auto____$1,entry__16964__auto__);
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26396__auto__,f41189){
var self__ = this;
var this__26396__auto____$1 = this;
var new__26397__auto__ = (new datascript.parser.FindScalar(datascript.parser.postwalk.call(null,self__.element,f41189),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__26396__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__26398__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__26397__auto__,meta__26398__auto__);
} else {
return new__26397__auto__;
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26399__auto__,pred41190,acc41191){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect.call(null,pred41190,self__.element,acc41191);
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26399__auto__,acc41191){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc41191,self__.element);
});

datascript.parser.FindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindScalar.cljs$lang$type = true;

datascript.parser.FindScalar.cljs$lang$ctorPrSeq = (function (this__16992__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindScalar");
});

datascript.parser.FindScalar.cljs$lang$ctorPrWriter = (function (this__16992__auto__,writer__16993__auto__){
return cljs.core._write.call(null,writer__16993__auto__,"datascript.parser/FindScalar");
});

datascript.parser.__GT_FindScalar = (function datascript$parser$__GT_FindScalar(element){
return (new datascript.parser.FindScalar(element,null,null,null));
});

datascript.parser.map__GT_FindScalar = (function datascript$parser$map__GT_FindScalar(G__41194){
return (new datascript.parser.FindScalar(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__41194),null,cljs.core.dissoc.call(null,G__41194,new cljs.core.Keyword(null,"element","element",1974019749)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindTuple = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16958__auto__,k__16959__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core._lookup.call(null,this__16958__auto____$1,k__16959__auto__,null);
});

datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k41204,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__41206 = (((k41204 instanceof cljs.core.Keyword))?k41204.fqn:null);
switch (G__41206) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41204,else__16961__auto__);

}
});

datascript.parser.FindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16972__auto__,writer__16973__auto__,opts__16974__auto__){
var self__ = this;
var this__16972__auto____$1 = this;
var pr_pair__16975__auto__ = ((function (this__16972__auto____$1){
return (function (keyval__16976__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,cljs.core.pr_writer,""," ","",opts__16974__auto__,keyval__16976__auto__);
});})(this__16972__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,pr_pair__16975__auto__,"#datascript.parser.FindTuple{",", ","}",opts__16974__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41203){
var self__ = this;
var G__41203__$1 = this;
return (new cljs.core.RecordIter((0),G__41203__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16952__auto__){
var self__ = this;
var this__16952__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16962__auto__){
var self__ = this;
var this__16962__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16953__auto__){
var self__ = this;
var this__16953__auto____$1 = this;
var h__16779__auto__ = self__.__hash;
if(!((h__16779__auto__ == null))){
return h__16779__auto__;
} else {
var h__16779__auto____$1 = cljs.core.hash_imap.call(null,this__16953__auto____$1);
self__.__hash = h__16779__auto____$1;

return h__16779__auto____$1;
}
});

datascript.parser.FindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16954__auto__,other__16955__auto__){
var self__ = this;
var this__16954__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16332__auto__ = other__16955__auto__;
if(cljs.core.truth_(and__16332__auto__)){
var and__16332__auto____$1 = (this__16954__auto____$1.constructor === other__16955__auto__.constructor);
if(and__16332__auto____$1){
return cljs.core.equiv_map.call(null,this__16954__auto____$1,other__16955__auto__);
} else {
return and__16332__auto____$1;
}
} else {
return and__16332__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16967__auto__,k__16968__auto__){
var self__ = this;
var this__16967__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__16968__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16967__auto____$1),self__.__meta),k__16968__auto__);
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16968__auto__)),null));
}
});

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__41203){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__41207 = cljs.core.keyword_identical_QMARK_;
var expr__41208 = k__16966__auto__;
if(cljs.core.truth_(pred__41207.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__41208))){
return (new datascript.parser.FindTuple(G__41203,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__41203),null));
}
});

datascript.parser.FindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__41203){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,G__41203,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16963__auto__,entry__16964__auto__){
var self__ = this;
var this__16963__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16964__auto__)){
return cljs.core._assoc.call(null,this__16963__auto____$1,cljs.core._nth.call(null,entry__16964__auto__,(0)),cljs.core._nth.call(null,entry__16964__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16963__auto____$1,entry__16964__auto__);
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26396__auto__,f41200){
var self__ = this;
var this__26396__auto____$1 = this;
var new__26397__auto__ = (new datascript.parser.FindTuple(datascript.parser.postwalk.call(null,self__.elements,f41200),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__26396__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__26398__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__26397__auto__,meta__26398__auto__);
} else {
return new__26397__auto__;
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26399__auto__,pred41201,acc41202){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect.call(null,pred41201,self__.elements,acc41202);
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26399__auto__,acc41202){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc41202,self__.elements);
});

datascript.parser.FindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindTuple.cljs$lang$type = true;

datascript.parser.FindTuple.cljs$lang$ctorPrSeq = (function (this__16992__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindTuple");
});

datascript.parser.FindTuple.cljs$lang$ctorPrWriter = (function (this__16992__auto__,writer__16993__auto__){
return cljs.core._write.call(null,writer__16993__auto__,"datascript.parser/FindTuple");
});

datascript.parser.__GT_FindTuple = (function datascript$parser$__GT_FindTuple(elements){
return (new datascript.parser.FindTuple(elements,null,null,null));
});

datascript.parser.map__GT_FindTuple = (function datascript$parser$map__GT_FindTuple(G__41205){
return (new datascript.parser.FindTuple(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__41205),null,cljs.core.dissoc.call(null,G__41205,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
});

datascript.parser.find_vars = (function datascript$parser$find_vars(find){
return cljs.core.mapcat.call(null,datascript.parser._find_vars,datascript.parser.find_elements.call(null,find));
});
datascript.parser.aggregate_QMARK_ = (function datascript$parser$aggregate_QMARK_(element){
return (element instanceof datascript.parser.Aggregate);
});
datascript.parser.pull_QMARK_ = (function datascript$parser$pull_QMARK_(element){
return (element instanceof datascript.parser.Pull);
});
datascript.parser.parse_aggregate = (function datascript$parser$parse_aggregate(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && ((cljs.core.count.call(null,form) >= (2)))){
var vec__41212 = form;
var fn = cljs.core.nth.call(null,vec__41212,(0),null);
var args = cljs.core.nthnext.call(null,vec__41212,(1));
var fn_STAR_ = datascript.parser.parse_plain_symbol.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__16332__auto__ = fn_STAR_;
if(cljs.core.truth_(and__16332__auto__)){
return args_STAR_;
} else {
return and__16332__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_aggregate_custom = (function datascript$parser$parse_aggregate_custom(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"aggregate","aggregate",-1142967327,null)))){
if((cljs.core.count.call(null,form) >= (3))){
var vec__41214 = form;
var _ = cljs.core.nth.call(null,vec__41214,(0),null);
var fn = cljs.core.nth.call(null,vec__41214,(1),null);
var args = cljs.core.nthnext.call(null,vec__41214,(2));
var fn_STAR_ = datascript.parser.parse_variable.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__16332__auto__ = fn_STAR_;
if(cljs.core.truth_(and__16332__auto__)){
return args_STAR_;
} else {
return and__16332__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_pull_expr = (function datascript$parser$parse_pull_expr(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"pull","pull",779986722,null)))){
if((((3) <= cljs.core.count.call(null,form))) && ((cljs.core.count.call(null,form) <= (4)))){
var long_QMARK_ = cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(4));
var src = ((long_QMARK_)?cljs.core.nth.call(null,form,(1)):new cljs.core.Symbol(null,"$","$",-1580747756,null));
var vec__41216 = ((long_QMARK_)?cljs.core.nnext.call(null,form):cljs.core.next.call(null,form));
var var$ = cljs.core.nth.call(null,vec__41216,(0),null);
var pattern = cljs.core.nth.call(null,vec__41216,(1),null);
var src_STAR_ = datascript.parser.parse_src_var.call(null,src);
var var_STAR_ = datascript.parser.parse_variable.call(null,var$);
var pattern_STAR_ = (function (){var or__16344__auto__ = datascript.parser.parse_variable.call(null,pattern);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return datascript.parser.parse_constant.call(null,pattern);
}
})();
if(cljs.core.truth_((function (){var and__16332__auto__ = src_STAR_;
if(cljs.core.truth_(and__16332__auto__)){
var and__16332__auto____$1 = var_STAR_;
if(cljs.core.truth_(and__16332__auto____$1)){
return pattern_STAR_;
} else {
return and__16332__auto____$1;
}
} else {
return and__16332__auto__;
}
})())){
return (new datascript.parser.Pull(src_STAR_,var_STAR_,pattern_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_find_elem = (function datascript$parser$parse_find_elem(form){
var or__16344__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
var or__16344__auto____$1 = datascript.parser.parse_pull_expr.call(null,form);
if(cljs.core.truth_(or__16344__auto____$1)){
return or__16344__auto____$1;
} else {
var or__16344__auto____$2 = datascript.parser.parse_aggregate_custom.call(null,form);
if(cljs.core.truth_(or__16344__auto____$2)){
return or__16344__auto____$2;
} else {
return datascript.parser.parse_aggregate.call(null,form);
}
}
}
});
datascript.parser.parse_find_rel = (function datascript$parser$parse_find_rel(form){
var G__41218 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,form);
var G__41218__$1 = (((G__41218 == null))?null:(new datascript.parser.FindRel(G__41218,null,null,null)));
return G__41218__$1;
});
datascript.parser.parse_find_coll = (function datascript$parser$parse_find_coll(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
if((cljs.core.sequential_QMARK_.call(null,inner)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,inner),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,inner),new cljs.core.Symbol(null,"...","...",-1926939749,null)))){
var G__41220 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,inner));
var G__41220__$1 = (((G__41220 == null))?null:(new datascript.parser.FindColl(G__41220,null,null,null)));
return G__41220__$1;
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_find_scalar = (function datascript$parser$parse_find_scalar(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,".",".",1975675962,null)))){
var G__41222 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,form));
var G__41222__$1 = (((G__41222 == null))?null:(new datascript.parser.FindScalar(G__41222,null,null,null)));
return G__41222__$1;
} else {
return null;
}
});
datascript.parser.parse_find_tuple = (function datascript$parser$parse_find_tuple(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
var G__41224 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,inner);
var G__41224__$1 = (((G__41224 == null))?null:(new datascript.parser.FindTuple(G__41224,null,null,null)));
return G__41224__$1;
} else {
return null;
}
});
datascript.parser.parse_find = (function datascript$parser$parse_find(form){
var or__16344__auto__ = datascript.parser.parse_find_rel.call(null,form);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
var or__16344__auto____$1 = datascript.parser.parse_find_coll.call(null,form);
if(cljs.core.truth_(or__16344__auto____$1)){
return or__16344__auto____$1;
} else {
var or__16344__auto____$2 = datascript.parser.parse_find_scalar.call(null,form);
if(cljs.core.truth_(or__16344__auto____$2)){
return or__16344__auto____$2;
} else {
var or__16344__auto____$3 = datascript.parser.parse_find_tuple.call(null,form);
if(cljs.core.truth_(or__16344__auto____$3)){
return or__16344__auto____$3;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :find, expected: (find-rel | find-coll | find-tuple | find-scalar)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
}
}
}
});
datascript.parser.parse_with = (function datascript$parser$parse_with(form){
var or__16344__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,form);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :with clause, expected [ variable+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","with","parser/with",-386255821),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.parse_in_binding = (function datascript$parser$parse_in_binding(form){
var temp__4423__auto__ = (function (){var or__16344__auto__ = datascript.parser.parse_src_var.call(null,form);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return datascript.parser.parse_rules_var.call(null,form);
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var var$ = temp__4423__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_in = (function datascript$parser$parse_in(form){
var or__16344__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_in_binding,form);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :in clause, expected (src-var | % | bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","in","parser/in",1617442048),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pattern = (function (source,pattern,__meta,__extmap,__hash){
this.source = source;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16958__auto__,k__16959__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core._lookup.call(null,this__16958__auto____$1,k__16959__auto__,null);
});

datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k41229,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__41231 = (((k41229 instanceof cljs.core.Keyword))?k41229.fqn:null);
switch (G__41231) {
case "source":
return self__.source;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41229,else__16961__auto__);

}
});

datascript.parser.Pattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16972__auto__,writer__16973__auto__,opts__16974__auto__){
var self__ = this;
var this__16972__auto____$1 = this;
var pr_pair__16975__auto__ = ((function (this__16972__auto____$1){
return (function (keyval__16976__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,cljs.core.pr_writer,""," ","",opts__16974__auto__,keyval__16976__auto__);
});})(this__16972__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,pr_pair__16975__auto__,"#datascript.parser.Pattern{",", ","}",opts__16974__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IIterable$ = true;

datascript.parser.Pattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41228){
var self__ = this;
var G__41228__$1 = this;
return (new cljs.core.RecordIter((0),G__41228__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Pattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16952__auto__){
var self__ = this;
var this__16952__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16962__auto__){
var self__ = this;
var this__16962__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16953__auto__){
var self__ = this;
var this__16953__auto____$1 = this;
var h__16779__auto__ = self__.__hash;
if(!((h__16779__auto__ == null))){
return h__16779__auto__;
} else {
var h__16779__auto____$1 = cljs.core.hash_imap.call(null,this__16953__auto____$1);
self__.__hash = h__16779__auto____$1;

return h__16779__auto____$1;
}
});

datascript.parser.Pattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16954__auto__,other__16955__auto__){
var self__ = this;
var this__16954__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16332__auto__ = other__16955__auto__;
if(cljs.core.truth_(and__16332__auto__)){
var and__16332__auto____$1 = (this__16954__auto____$1.constructor === other__16955__auto__.constructor);
if(and__16332__auto____$1){
return cljs.core.equiv_map.call(null,this__16954__auto____$1,other__16955__auto__);
} else {
return and__16332__auto____$1;
}
} else {
return and__16332__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Pattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16967__auto__,k__16968__auto__){
var self__ = this;
var this__16967__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__16968__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16967__auto____$1),self__.__meta),k__16968__auto__);
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16968__auto__)),null));
}
});

datascript.parser.Pattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__41228){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__41232 = cljs.core.keyword_identical_QMARK_;
var expr__41233 = k__16966__auto__;
if(cljs.core.truth_(pred__41232.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__41233))){
return (new datascript.parser.Pattern(G__41228,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41232.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__41233))){
return (new datascript.parser.Pattern(self__.source,G__41228,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__41228),null));
}
}
});

datascript.parser.Pattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__41228){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,G__41228,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16963__auto__,entry__16964__auto__){
var self__ = this;
var this__16963__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16964__auto__)){
return cljs.core._assoc.call(null,this__16963__auto____$1,cljs.core._nth.call(null,entry__16964__auto__,(0)),cljs.core._nth.call(null,entry__16964__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16963__auto____$1,entry__16964__auto__);
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26396__auto__,f41225){
var self__ = this;
var this__26396__auto____$1 = this;
var new__26397__auto__ = (new datascript.parser.Pattern(datascript.parser.postwalk.call(null,self__.source,f41225),datascript.parser.postwalk.call(null,self__.pattern,f41225),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__26396__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__26398__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__26397__auto__,meta__26398__auto__);
} else {
return new__26397__auto__;
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26399__auto__,pred41226,acc41227){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect.call(null,pred41226,self__.pattern,datascript.parser.collect.call(null,pred41226,self__.source,acc41227));
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26399__auto__,acc41227){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc41227,self__.source),self__.pattern);
});

datascript.parser.Pattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pattern.cljs$lang$type = true;

datascript.parser.Pattern.cljs$lang$ctorPrSeq = (function (this__16992__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pattern");
});

datascript.parser.Pattern.cljs$lang$ctorPrWriter = (function (this__16992__auto__,writer__16993__auto__){
return cljs.core._write.call(null,writer__16993__auto__,"datascript.parser/Pattern");
});

datascript.parser.__GT_Pattern = (function datascript$parser$__GT_Pattern(source,pattern){
return (new datascript.parser.Pattern(source,pattern,null,null,null));
});

datascript.parser.map__GT_Pattern = (function datascript$parser$map__GT_Pattern(G__41230){
return (new datascript.parser.Pattern(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__41230),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__41230),null,cljs.core.dissoc.call(null,G__41230,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Predicate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16958__auto__,k__16959__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core._lookup.call(null,this__16958__auto____$1,k__16959__auto__,null);
});

datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k41240,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__41242 = (((k41240 instanceof cljs.core.Keyword))?k41240.fqn:null);
switch (G__41242) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41240,else__16961__auto__);

}
});

datascript.parser.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16972__auto__,writer__16973__auto__,opts__16974__auto__){
var self__ = this;
var this__16972__auto____$1 = this;
var pr_pair__16975__auto__ = ((function (this__16972__auto____$1){
return (function (keyval__16976__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,cljs.core.pr_writer,""," ","",opts__16974__auto__,keyval__16976__auto__);
});})(this__16972__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,pr_pair__16975__auto__,"#datascript.parser.Predicate{",", ","}",opts__16974__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IIterable$ = true;

datascript.parser.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41239){
var self__ = this;
var G__41239__$1 = this;
return (new cljs.core.RecordIter((0),G__41239__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16952__auto__){
var self__ = this;
var this__16952__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16962__auto__){
var self__ = this;
var this__16962__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16953__auto__){
var self__ = this;
var this__16953__auto____$1 = this;
var h__16779__auto__ = self__.__hash;
if(!((h__16779__auto__ == null))){
return h__16779__auto__;
} else {
var h__16779__auto____$1 = cljs.core.hash_imap.call(null,this__16953__auto____$1);
self__.__hash = h__16779__auto____$1;

return h__16779__auto____$1;
}
});

datascript.parser.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16954__auto__,other__16955__auto__){
var self__ = this;
var this__16954__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16332__auto__ = other__16955__auto__;
if(cljs.core.truth_(and__16332__auto__)){
var and__16332__auto____$1 = (this__16954__auto____$1.constructor === other__16955__auto__.constructor);
if(and__16332__auto____$1){
return cljs.core.equiv_map.call(null,this__16954__auto____$1,other__16955__auto__);
} else {
return and__16332__auto____$1;
}
} else {
return and__16332__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16967__auto__,k__16968__auto__){
var self__ = this;
var this__16967__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__16968__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16967__auto____$1),self__.__meta),k__16968__auto__);
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16968__auto__)),null));
}
});

datascript.parser.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__41239){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__41243 = cljs.core.keyword_identical_QMARK_;
var expr__41244 = k__16966__auto__;
if(cljs.core.truth_(pred__41243.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__41244))){
return (new datascript.parser.Predicate(G__41239,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41243.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__41244))){
return (new datascript.parser.Predicate(self__.fn,G__41239,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__41239),null));
}
}
});

datascript.parser.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__41239){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,G__41239,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16963__auto__,entry__16964__auto__){
var self__ = this;
var this__16963__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16964__auto__)){
return cljs.core._assoc.call(null,this__16963__auto____$1,cljs.core._nth.call(null,entry__16964__auto__,(0)),cljs.core._nth.call(null,entry__16964__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16963__auto____$1,entry__16964__auto__);
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26396__auto__,f41236){
var self__ = this;
var this__26396__auto____$1 = this;
var new__26397__auto__ = (new datascript.parser.Predicate(datascript.parser.postwalk.call(null,self__.fn,f41236),datascript.parser.postwalk.call(null,self__.args,f41236),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__26396__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__26398__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__26397__auto__,meta__26398__auto__);
} else {
return new__26397__auto__;
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26399__auto__,pred41237,acc41238){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect.call(null,pred41237,self__.args,datascript.parser.collect.call(null,pred41237,self__.fn,acc41238));
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26399__auto__,acc41238){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc41238,self__.fn),self__.args);
});

datascript.parser.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Predicate.cljs$lang$type = true;

datascript.parser.Predicate.cljs$lang$ctorPrSeq = (function (this__16992__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Predicate");
});

datascript.parser.Predicate.cljs$lang$ctorPrWriter = (function (this__16992__auto__,writer__16993__auto__){
return cljs.core._write.call(null,writer__16993__auto__,"datascript.parser/Predicate");
});

datascript.parser.__GT_Predicate = (function datascript$parser$__GT_Predicate(fn,args){
return (new datascript.parser.Predicate(fn,args,null,null,null));
});

datascript.parser.map__GT_Predicate = (function datascript$parser$map__GT_Predicate(G__41241){
return (new datascript.parser.Predicate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__41241),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__41241),null,cljs.core.dissoc.call(null,G__41241,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Function = (function (fn,args,binding,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16958__auto__,k__16959__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core._lookup.call(null,this__16958__auto____$1,k__16959__auto__,null);
});

datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k41251,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__41253 = (((k41251 instanceof cljs.core.Keyword))?k41251.fqn:null);
switch (G__41253) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41251,else__16961__auto__);

}
});

datascript.parser.Function.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16972__auto__,writer__16973__auto__,opts__16974__auto__){
var self__ = this;
var this__16972__auto____$1 = this;
var pr_pair__16975__auto__ = ((function (this__16972__auto____$1){
return (function (keyval__16976__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,cljs.core.pr_writer,""," ","",opts__16974__auto__,keyval__16976__auto__);
});})(this__16972__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,pr_pair__16975__auto__,"#datascript.parser.Function{",", ","}",opts__16974__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IIterable$ = true;

datascript.parser.Function.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41250){
var self__ = this;
var G__41250__$1 = this;
return (new cljs.core.RecordIter((0),G__41250__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Function.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Function.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16952__auto__){
var self__ = this;
var this__16952__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16962__auto__){
var self__ = this;
var this__16962__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16953__auto__){
var self__ = this;
var this__16953__auto____$1 = this;
var h__16779__auto__ = self__.__hash;
if(!((h__16779__auto__ == null))){
return h__16779__auto__;
} else {
var h__16779__auto____$1 = cljs.core.hash_imap.call(null,this__16953__auto____$1);
self__.__hash = h__16779__auto____$1;

return h__16779__auto____$1;
}
});

datascript.parser.Function.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16954__auto__,other__16955__auto__){
var self__ = this;
var this__16954__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16332__auto__ = other__16955__auto__;
if(cljs.core.truth_(and__16332__auto__)){
var and__16332__auto____$1 = (this__16954__auto____$1.constructor === other__16955__auto__.constructor);
if(and__16332__auto____$1){
return cljs.core.equiv_map.call(null,this__16954__auto____$1,other__16955__auto__);
} else {
return and__16332__auto____$1;
}
} else {
return and__16332__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Function.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16967__auto__,k__16968__auto__){
var self__ = this;
var this__16967__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__16968__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16967__auto____$1),self__.__meta),k__16968__auto__);
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16968__auto__)),null));
}
});

datascript.parser.Function.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__41250){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__41254 = cljs.core.keyword_identical_QMARK_;
var expr__41255 = k__16966__auto__;
if(cljs.core.truth_(pred__41254.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__41255))){
return (new datascript.parser.Function(G__41250,self__.args,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41254.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__41255))){
return (new datascript.parser.Function(self__.fn,G__41250,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41254.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__41255))){
return (new datascript.parser.Function(self__.fn,self__.args,G__41250,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__41250),null));
}
}
}
});

datascript.parser.Function.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__41250){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,G__41250,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16963__auto__,entry__16964__auto__){
var self__ = this;
var this__16963__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16964__auto__)){
return cljs.core._assoc.call(null,this__16963__auto____$1,cljs.core._nth.call(null,entry__16964__auto__,(0)),cljs.core._nth.call(null,entry__16964__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16963__auto____$1,entry__16964__auto__);
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Function.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26396__auto__,f41247){
var self__ = this;
var this__26396__auto____$1 = this;
var new__26397__auto__ = (new datascript.parser.Function(datascript.parser.postwalk.call(null,self__.fn,f41247),datascript.parser.postwalk.call(null,self__.args,f41247),datascript.parser.postwalk.call(null,self__.binding,f41247),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__26396__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__26398__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__26397__auto__,meta__26398__auto__);
} else {
return new__26397__auto__;
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26399__auto__,pred41248,acc41249){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect.call(null,pred41248,self__.binding,datascript.parser.collect.call(null,pred41248,self__.args,datascript.parser.collect.call(null,pred41248,self__.fn,acc41249)));
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26399__auto__,acc41249){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc41249,self__.fn),self__.args),self__.binding);
});

datascript.parser.Function.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.Function.cljs$lang$type = true;

datascript.parser.Function.cljs$lang$ctorPrSeq = (function (this__16992__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Function");
});

datascript.parser.Function.cljs$lang$ctorPrWriter = (function (this__16992__auto__,writer__16993__auto__){
return cljs.core._write.call(null,writer__16993__auto__,"datascript.parser/Function");
});

datascript.parser.__GT_Function = (function datascript$parser$__GT_Function(fn,args,binding){
return (new datascript.parser.Function(fn,args,binding,null,null,null));
});

datascript.parser.map__GT_Function = (function datascript$parser$map__GT_Function(G__41252){
return (new datascript.parser.Function(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__41252),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__41252),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__41252),null,cljs.core.dissoc.call(null,G__41252,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleExpr = (function (source,name,args,__meta,__extmap,__hash){
this.source = source;
this.name = name;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16958__auto__,k__16959__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core._lookup.call(null,this__16958__auto____$1,k__16959__auto__,null);
});

datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k41262,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__41264 = (((k41262 instanceof cljs.core.Keyword))?k41262.fqn:null);
switch (G__41264) {
case "source":
return self__.source;

break;
case "name":
return self__.name;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41262,else__16961__auto__);

}
});

datascript.parser.RuleExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16972__auto__,writer__16973__auto__,opts__16974__auto__){
var self__ = this;
var this__16972__auto____$1 = this;
var pr_pair__16975__auto__ = ((function (this__16972__auto____$1){
return (function (keyval__16976__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,cljs.core.pr_writer,""," ","",opts__16974__auto__,keyval__16976__auto__);
});})(this__16972__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,pr_pair__16975__auto__,"#datascript.parser.RuleExpr{",", ","}",opts__16974__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41261){
var self__ = this;
var G__41261__$1 = this;
return (new cljs.core.RecordIter((0),G__41261__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16952__auto__){
var self__ = this;
var this__16952__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16962__auto__){
var self__ = this;
var this__16962__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16953__auto__){
var self__ = this;
var this__16953__auto____$1 = this;
var h__16779__auto__ = self__.__hash;
if(!((h__16779__auto__ == null))){
return h__16779__auto__;
} else {
var h__16779__auto____$1 = cljs.core.hash_imap.call(null,this__16953__auto____$1);
self__.__hash = h__16779__auto____$1;

return h__16779__auto____$1;
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16954__auto__,other__16955__auto__){
var self__ = this;
var this__16954__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16332__auto__ = other__16955__auto__;
if(cljs.core.truth_(and__16332__auto__)){
var and__16332__auto____$1 = (this__16954__auto____$1.constructor === other__16955__auto__.constructor);
if(and__16332__auto____$1){
return cljs.core.equiv_map.call(null,this__16954__auto____$1,other__16955__auto__);
} else {
return and__16332__auto____$1;
}
} else {
return and__16332__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16967__auto__,k__16968__auto__){
var self__ = this;
var this__16967__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"source","source",-433931539),null], null), null),k__16968__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16967__auto____$1),self__.__meta),k__16968__auto__);
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16968__auto__)),null));
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__41261){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__41265 = cljs.core.keyword_identical_QMARK_;
var expr__41266 = k__16966__auto__;
if(cljs.core.truth_(pred__41265.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__41266))){
return (new datascript.parser.RuleExpr(G__41261,self__.name,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41265.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__41266))){
return (new datascript.parser.RuleExpr(self__.source,G__41261,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41265.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__41266))){
return (new datascript.parser.RuleExpr(self__.source,self__.name,G__41261,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__41261),null));
}
}
}
});

datascript.parser.RuleExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__41261){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,G__41261,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16963__auto__,entry__16964__auto__){
var self__ = this;
var this__16963__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16964__auto__)){
return cljs.core._assoc.call(null,this__16963__auto____$1,cljs.core._nth.call(null,entry__16964__auto__,(0)),cljs.core._nth.call(null,entry__16964__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16963__auto____$1,entry__16964__auto__);
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26396__auto__,f41258){
var self__ = this;
var this__26396__auto____$1 = this;
var new__26397__auto__ = (new datascript.parser.RuleExpr(datascript.parser.postwalk.call(null,self__.source,f41258),datascript.parser.postwalk.call(null,self__.name,f41258),datascript.parser.postwalk.call(null,self__.args,f41258),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__26396__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__26398__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__26397__auto__,meta__26398__auto__);
} else {
return new__26397__auto__;
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26399__auto__,pred41259,acc41260){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect.call(null,pred41259,self__.args,datascript.parser.collect.call(null,pred41259,self__.name,datascript.parser.collect.call(null,pred41259,self__.source,acc41260)));
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26399__auto__,acc41260){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc41260,self__.source),self__.name),self__.args);
});

datascript.parser.RuleExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.RuleExpr.cljs$lang$type = true;

datascript.parser.RuleExpr.cljs$lang$ctorPrSeq = (function (this__16992__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleExpr");
});

datascript.parser.RuleExpr.cljs$lang$ctorPrWriter = (function (this__16992__auto__,writer__16993__auto__){
return cljs.core._write.call(null,writer__16993__auto__,"datascript.parser/RuleExpr");
});

datascript.parser.__GT_RuleExpr = (function datascript$parser$__GT_RuleExpr(source,name,args){
return (new datascript.parser.RuleExpr(source,name,args,null,null,null));
});

datascript.parser.map__GT_RuleExpr = (function datascript$parser$map__GT_RuleExpr(G__41263){
return (new datascript.parser.RuleExpr(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__41263),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__41263),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__41263),null,cljs.core.dissoc.call(null,G__41263,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Not = (function (source,vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16958__auto__,k__16959__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core._lookup.call(null,this__16958__auto____$1,k__16959__auto__,null);
});

datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k41273,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__41275 = (((k41273 instanceof cljs.core.Keyword))?k41273.fqn:null);
switch (G__41275) {
case "source":
return self__.source;

break;
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41273,else__16961__auto__);

}
});

datascript.parser.Not.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16972__auto__,writer__16973__auto__,opts__16974__auto__){
var self__ = this;
var this__16972__auto____$1 = this;
var pr_pair__16975__auto__ = ((function (this__16972__auto____$1){
return (function (keyval__16976__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,cljs.core.pr_writer,""," ","",opts__16974__auto__,keyval__16976__auto__);
});})(this__16972__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,pr_pair__16975__auto__,"#datascript.parser.Not{",", ","}",opts__16974__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IIterable$ = true;

datascript.parser.Not.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41272){
var self__ = this;
var G__41272__$1 = this;
return (new cljs.core.RecordIter((0),G__41272__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Not.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Not.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16952__auto__){
var self__ = this;
var this__16952__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16962__auto__){
var self__ = this;
var this__16962__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16953__auto__){
var self__ = this;
var this__16953__auto____$1 = this;
var h__16779__auto__ = self__.__hash;
if(!((h__16779__auto__ == null))){
return h__16779__auto__;
} else {
var h__16779__auto____$1 = cljs.core.hash_imap.call(null,this__16953__auto____$1);
self__.__hash = h__16779__auto____$1;

return h__16779__auto____$1;
}
});

datascript.parser.Not.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16954__auto__,other__16955__auto__){
var self__ = this;
var this__16954__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16332__auto__ = other__16955__auto__;
if(cljs.core.truth_(and__16332__auto__)){
var and__16332__auto____$1 = (this__16954__auto____$1.constructor === other__16955__auto__.constructor);
if(and__16332__auto____$1){
return cljs.core.equiv_map.call(null,this__16954__auto____$1,other__16955__auto__);
} else {
return and__16332__auto____$1;
}
} else {
return and__16332__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Not.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16967__auto__,k__16968__auto__){
var self__ = this;
var this__16967__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__16968__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16967__auto____$1),self__.__meta),k__16968__auto__);
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16968__auto__)),null));
}
});

datascript.parser.Not.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__41272){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__41276 = cljs.core.keyword_identical_QMARK_;
var expr__41277 = k__16966__auto__;
if(cljs.core.truth_(pred__41276.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__41277))){
return (new datascript.parser.Not(G__41272,self__.vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41276.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__41277))){
return (new datascript.parser.Not(self__.source,G__41272,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41276.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__41277))){
return (new datascript.parser.Not(self__.source,self__.vars,G__41272,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__41272),null));
}
}
}
});

datascript.parser.Not.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__41272){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,G__41272,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16963__auto__,entry__16964__auto__){
var self__ = this;
var this__16963__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16964__auto__)){
return cljs.core._assoc.call(null,this__16963__auto____$1,cljs.core._nth.call(null,entry__16964__auto__,(0)),cljs.core._nth.call(null,entry__16964__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16963__auto____$1,entry__16964__auto__);
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Not.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26396__auto__,f41269){
var self__ = this;
var this__26396__auto____$1 = this;
var new__26397__auto__ = (new datascript.parser.Not(datascript.parser.postwalk.call(null,self__.source,f41269),datascript.parser.postwalk.call(null,self__.vars,f41269),datascript.parser.postwalk.call(null,self__.clauses,f41269),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__26396__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__26398__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__26397__auto__,meta__26398__auto__);
} else {
return new__26397__auto__;
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26399__auto__,pred41270,acc41271){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect.call(null,pred41270,self__.clauses,datascript.parser.collect.call(null,pred41270,self__.vars,datascript.parser.collect.call(null,pred41270,self__.source,acc41271)));
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26399__auto__,acc41271){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc41271,self__.source),self__.vars),self__.clauses);
});

datascript.parser.Not.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Not.cljs$lang$type = true;

datascript.parser.Not.cljs$lang$ctorPrSeq = (function (this__16992__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Not");
});

datascript.parser.Not.cljs$lang$ctorPrWriter = (function (this__16992__auto__,writer__16993__auto__){
return cljs.core._write.call(null,writer__16993__auto__,"datascript.parser/Not");
});

datascript.parser.__GT_Not = (function datascript$parser$__GT_Not(source,vars,clauses){
return (new datascript.parser.Not(source,vars,clauses,null,null,null));
});

datascript.parser.map__GT_Not = (function datascript$parser$map__GT_Not(G__41274){
return (new datascript.parser.Not(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__41274),new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__41274),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__41274),null,cljs.core.dissoc.call(null,G__41274,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Or = (function (source,rule_vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.rule_vars = rule_vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16958__auto__,k__16959__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core._lookup.call(null,this__16958__auto____$1,k__16959__auto__,null);
});

datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k41284,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__41286 = (((k41284 instanceof cljs.core.Keyword))?k41284.fqn:null);
switch (G__41286) {
case "source":
return self__.source;

break;
case "rule-vars":
return self__.rule_vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41284,else__16961__auto__);

}
});

datascript.parser.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16972__auto__,writer__16973__auto__,opts__16974__auto__){
var self__ = this;
var this__16972__auto____$1 = this;
var pr_pair__16975__auto__ = ((function (this__16972__auto____$1){
return (function (keyval__16976__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,cljs.core.pr_writer,""," ","",opts__16974__auto__,keyval__16976__auto__);
});})(this__16972__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,pr_pair__16975__auto__,"#datascript.parser.Or{",", ","}",opts__16974__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IIterable$ = true;

datascript.parser.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41283){
var self__ = this;
var G__41283__$1 = this;
return (new cljs.core.RecordIter((0),G__41283__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16952__auto__){
var self__ = this;
var this__16952__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16962__auto__){
var self__ = this;
var this__16962__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16953__auto__){
var self__ = this;
var this__16953__auto____$1 = this;
var h__16779__auto__ = self__.__hash;
if(!((h__16779__auto__ == null))){
return h__16779__auto__;
} else {
var h__16779__auto____$1 = cljs.core.hash_imap.call(null,this__16953__auto____$1);
self__.__hash = h__16779__auto____$1;

return h__16779__auto____$1;
}
});

datascript.parser.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16954__auto__,other__16955__auto__){
var self__ = this;
var this__16954__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16332__auto__ = other__16955__auto__;
if(cljs.core.truth_(and__16332__auto__)){
var and__16332__auto____$1 = (this__16954__auto____$1.constructor === other__16955__auto__.constructor);
if(and__16332__auto____$1){
return cljs.core.equiv_map.call(null,this__16954__auto____$1,other__16955__auto__);
} else {
return and__16332__auto____$1;
}
} else {
return and__16332__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16967__auto__,k__16968__auto__){
var self__ = this;
var this__16967__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__16968__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16967__auto____$1),self__.__meta),k__16968__auto__);
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16968__auto__)),null));
}
});

datascript.parser.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__41283){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__41287 = cljs.core.keyword_identical_QMARK_;
var expr__41288 = k__16966__auto__;
if(cljs.core.truth_(pred__41287.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__41288))){
return (new datascript.parser.Or(G__41283,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41287.call(null,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),expr__41288))){
return (new datascript.parser.Or(self__.source,G__41283,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41287.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__41288))){
return (new datascript.parser.Or(self__.source,self__.rule_vars,G__41283,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__41283),null));
}
}
}
});

datascript.parser.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__41283){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,G__41283,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16963__auto__,entry__16964__auto__){
var self__ = this;
var this__16963__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16964__auto__)){
return cljs.core._assoc.call(null,this__16963__auto____$1,cljs.core._nth.call(null,entry__16964__auto__,(0)),cljs.core._nth.call(null,entry__16964__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16963__auto____$1,entry__16964__auto__);
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Or.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26396__auto__,f41280){
var self__ = this;
var this__26396__auto____$1 = this;
var new__26397__auto__ = (new datascript.parser.Or(datascript.parser.postwalk.call(null,self__.source,f41280),datascript.parser.postwalk.call(null,self__.rule_vars,f41280),datascript.parser.postwalk.call(null,self__.clauses,f41280),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__26396__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__26398__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__26397__auto__,meta__26398__auto__);
} else {
return new__26397__auto__;
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26399__auto__,pred41281,acc41282){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect.call(null,pred41281,self__.clauses,datascript.parser.collect.call(null,pred41281,self__.rule_vars,datascript.parser.collect.call(null,pred41281,self__.source,acc41282)));
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26399__auto__,acc41282){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc41282,self__.source),self__.rule_vars),self__.clauses);
});

datascript.parser.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"rule-vars","rule-vars",-988463249,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Or.cljs$lang$type = true;

datascript.parser.Or.cljs$lang$ctorPrSeq = (function (this__16992__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Or");
});

datascript.parser.Or.cljs$lang$ctorPrWriter = (function (this__16992__auto__,writer__16993__auto__){
return cljs.core._write.call(null,writer__16993__auto__,"datascript.parser/Or");
});

datascript.parser.__GT_Or = (function datascript$parser$__GT_Or(source,rule_vars,clauses){
return (new datascript.parser.Or(source,rule_vars,clauses,null,null,null));
});

datascript.parser.map__GT_Or = (function datascript$parser$map__GT_Or(G__41285){
return (new datascript.parser.Or(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__41285),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(G__41285),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__41285),null,cljs.core.dissoc.call(null,G__41285,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.And = (function (clauses,__meta,__extmap,__hash){
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16958__auto__,k__16959__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core._lookup.call(null,this__16958__auto____$1,k__16959__auto__,null);
});

datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k41295,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__41297 = (((k41295 instanceof cljs.core.Keyword))?k41295.fqn:null);
switch (G__41297) {
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41295,else__16961__auto__);

}
});

datascript.parser.And.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16972__auto__,writer__16973__auto__,opts__16974__auto__){
var self__ = this;
var this__16972__auto____$1 = this;
var pr_pair__16975__auto__ = ((function (this__16972__auto____$1){
return (function (keyval__16976__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,cljs.core.pr_writer,""," ","",opts__16974__auto__,keyval__16976__auto__);
});})(this__16972__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,pr_pair__16975__auto__,"#datascript.parser.And{",", ","}",opts__16974__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IIterable$ = true;

datascript.parser.And.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41294){
var self__ = this;
var G__41294__$1 = this;
return (new cljs.core.RecordIter((0),G__41294__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.And.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return self__.__meta;
});

datascript.parser.And.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16952__auto__){
var self__ = this;
var this__16952__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16962__auto__){
var self__ = this;
var this__16962__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16953__auto__){
var self__ = this;
var this__16953__auto____$1 = this;
var h__16779__auto__ = self__.__hash;
if(!((h__16779__auto__ == null))){
return h__16779__auto__;
} else {
var h__16779__auto____$1 = cljs.core.hash_imap.call(null,this__16953__auto____$1);
self__.__hash = h__16779__auto____$1;

return h__16779__auto____$1;
}
});

datascript.parser.And.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16954__auto__,other__16955__auto__){
var self__ = this;
var this__16954__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16332__auto__ = other__16955__auto__;
if(cljs.core.truth_(and__16332__auto__)){
var and__16332__auto____$1 = (this__16954__auto____$1.constructor === other__16955__auto__.constructor);
if(and__16332__auto____$1){
return cljs.core.equiv_map.call(null,this__16954__auto____$1,other__16955__auto__);
} else {
return and__16332__auto____$1;
}
} else {
return and__16332__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.And.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16967__auto__,k__16968__auto__){
var self__ = this;
var this__16967__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__16968__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16967__auto____$1),self__.__meta),k__16968__auto__);
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16968__auto__)),null));
}
});

datascript.parser.And.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__41294){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__41298 = cljs.core.keyword_identical_QMARK_;
var expr__41299 = k__16966__auto__;
if(cljs.core.truth_(pred__41298.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__41299))){
return (new datascript.parser.And(G__41294,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__41294),null));
}
});

datascript.parser.And.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__41294){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,G__41294,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16963__auto__,entry__16964__auto__){
var self__ = this;
var this__16963__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16964__auto__)){
return cljs.core._assoc.call(null,this__16963__auto____$1,cljs.core._nth.call(null,entry__16964__auto__,(0)),cljs.core._nth.call(null,entry__16964__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16963__auto____$1,entry__16964__auto__);
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.And.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26396__auto__,f41291){
var self__ = this;
var this__26396__auto____$1 = this;
var new__26397__auto__ = (new datascript.parser.And(datascript.parser.postwalk.call(null,self__.clauses,f41291),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__26396__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__26398__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__26397__auto__,meta__26398__auto__);
} else {
return new__26397__auto__;
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26399__auto__,pred41292,acc41293){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect.call(null,pred41292,self__.clauses,acc41293);
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26399__auto__,acc41293){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc41293,self__.clauses);
});

datascript.parser.And.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.And.cljs$lang$type = true;

datascript.parser.And.cljs$lang$ctorPrSeq = (function (this__16992__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/And");
});

datascript.parser.And.cljs$lang$ctorPrWriter = (function (this__16992__auto__,writer__16993__auto__){
return cljs.core._write.call(null,writer__16993__auto__,"datascript.parser/And");
});

datascript.parser.__GT_And = (function datascript$parser$__GT_And(clauses){
return (new datascript.parser.And(clauses,null,null,null));
});

datascript.parser.map__GT_And = (function datascript$parser$map__GT_And(G__41296){
return (new datascript.parser.And(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__41296),null,cljs.core.dissoc.call(null,G__41296,new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});

datascript.parser.parse_clause;

datascript.parser.parse_clauses;
datascript.parser.parse_pattern_el = (function datascript$parser$parse_pattern_el(form){
var or__16344__auto__ = datascript.parser.parse_placeholder.call(null,form);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
var or__16344__auto____$1 = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__16344__auto____$1)){
return or__16344__auto____$1;
} else {
return datascript.parser.parse_constant.call(null,form);
}
}
});
datascript.parser.take_source = (function datascript$parser$take_source(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var temp__4423__auto__ = datascript.parser.parse_src_var.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4423__auto__)){
var source_STAR_ = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source_STAR_,cljs.core.next.call(null,form)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.parser.DefaultSrc(null,null,null)),form], null);
}
} else {
return null;
}
});
datascript.parser.parse_pattern = (function datascript$parser$parse_pattern(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__41303 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__41303,(0),null);
var next_form = cljs.core.nth.call(null,vec__41303,(1),null);
var temp__4425__auto____$1 = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,next_form);
if(cljs.core.truth_(temp__4425__auto____$1)){
var pattern_STAR_ = temp__4425__auto____$1;
if(!(cljs.core.empty_QMARK_.call(null,pattern_STAR_))){
return datascript.parser.with_source.call(null,(new datascript.parser.Pattern(source_STAR_,pattern_STAR_,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Pattern could not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_call = (function datascript$parser$parse_call(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__41305 = form;
var fn = cljs.core.nth.call(null,vec__41305,(0),null);
var args = cljs.core.nthnext.call(null,vec__41305,(1));
var args__$1 = (((args == null))?cljs.core.PersistentVector.EMPTY:args);
var fn_STAR_ = (function (){var or__16344__auto__ = datascript.parser.parse_plain_symbol.call(null,fn);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return datascript.parser.parse_variable.call(null,fn);
}
})();
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args__$1);
if(cljs.core.truth_((function (){var and__16332__auto__ = fn_STAR_;
if(cljs.core.truth_(and__16332__auto__)){
return args_STAR_;
} else {
return and__16332__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_STAR_,args_STAR_], null);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_pred = (function datascript$parser$parse_pred(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_.call(null,form,(1)))){
var temp__4425__auto__ = datascript.parser.parse_call.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4425__auto__)){
var vec__41307 = temp__4425__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__41307,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__41307,(1),null);
return datascript.parser.with_source.call(null,(new datascript.parser.Predicate(fn_STAR_,args_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_fn = (function datascript$parser$parse_fn(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_.call(null,form,(2)))){
var vec__41310 = form;
var call = cljs.core.nth.call(null,vec__41310,(0),null);
var binding = cljs.core.nth.call(null,vec__41310,(1),null);
var temp__4425__auto__ = datascript.parser.parse_call.call(null,call);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__41311 = temp__4425__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__41311,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__41311,(1),null);
var temp__4425__auto____$1 = datascript.parser.parse_binding.call(null,binding);
if(cljs.core.truth_(temp__4425__auto____$1)){
var binding_STAR_ = temp__4425__auto____$1;
return datascript.parser.with_source.call(null,(new datascript.parser.Function(fn_STAR_,args_STAR_,binding_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_rule_expr = (function datascript$parser$parse_rule_expr(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__41314 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__41314,(0),null);
var next_form = cljs.core.nth.call(null,vec__41314,(1),null);
var vec__41315 = next_form;
var name = cljs.core.nth.call(null,vec__41315,(0),null);
var args = cljs.core.nthnext.call(null,vec__41315,(1));
var name_STAR_ = datascript.parser.parse_plain_symbol.call(null,name);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,args);
if(cljs.core.truth_(name_STAR_)){
if(cljs.core.empty_QMARK_.call(null,args)){
throw cljs.core.ex_info.call(null,[cljs.core.str("rule-expr requires at least one argument")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
if((args_STAR_ == null)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-expr arguments, expected [ (variable | constant | '_')+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return (new datascript.parser.RuleExpr(source_STAR_,name_STAR_,args_STAR_,null,null,null));

}
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.collect_vars_acc = (function datascript$parser$collect_vars_acc(acc,form){
if((form instanceof datascript.parser.Variable)){
return cljs.core.conj.call(null,acc,form);
} else {
if((form instanceof datascript.parser.Not)){
return cljs.core.into.call(null,acc,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(form));
} else {
if((form instanceof datascript.parser.Or)){
return datascript$parser$collect_vars_acc.call(null,acc,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(form));
} else {
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return datascript.parser._collect_vars.call(null,form,acc);
} else {
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,datascript$parser$collect_vars_acc,acc,form);
} else {
return acc;

}
}
}
}
}
});
datascript.parser.collect_vars = (function datascript$parser$collect_vars(form){
return datascript.parser.collect_vars_acc.call(null,cljs.core.PersistentVector.EMPTY,form);
});
datascript.parser.collect_vars_distinct = (function datascript$parser$collect_vars_distinct(form){
return cljs.core.vec.call(null,cljs.core.distinct.call(null,datascript.parser.collect_vars.call(null,form)));
});
datascript.parser.validate_join_vars = (function datascript$parser$validate_join_vars(vars,clauses,form){
var undeclared_41318 = clojure.set.difference.call(null,cljs.core.set.call(null,vars),cljs.core.set.call(null,datascript.parser.collect_vars.call(null,clauses)));
if(cljs.core.empty_QMARK_.call(null,undeclared_41318)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Join variable not declared inside clauses: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_41318)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,vars)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Join variables should not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.validate_not = (function datascript$parser$validate_not(clause,form){
datascript.parser.validate_join_vars.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(clause),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause),form);

return clause;
});
datascript.parser.parse_not = (function datascript$parser$parse_not(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__41321 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__41321,(0),null);
var next_form = cljs.core.nth.call(null,vec__41321,(1),null);
var vec__41322 = next_form;
var sym = cljs.core.nth.call(null,vec__41322,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__41322,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),sym)){
var temp__4423__auto__ = datascript.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_(temp__4423__auto__)){
var clauses_STAR_ = temp__4423__auto__;
return datascript.parser.validate_not.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Not(source_STAR_,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'not' clause, expected [ src-var? 'not' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_not_join = (function datascript$parser$parse_not_join(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__41325 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__41325,(0),null);
var next_form = cljs.core.nth.call(null,vec__41325,(1),null);
var vec__41326 = next_form;
var sym = cljs.core.nth.call(null,vec__41326,(0),null);
var vars = cljs.core.nth.call(null,vec__41326,(1),null);
var clauses = cljs.core.nthnext.call(null,vec__41326,(2));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),sym)){
var vars_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,vars);
var clauses_STAR_ = datascript.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_((function (){var and__16332__auto__ = vars_STAR_;
if(cljs.core.truth_(and__16332__auto__)){
return clauses_STAR_;
} else {
return and__16332__auto__;
}
})())){
return datascript.parser.validate_not.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Not(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'not-join' clause, expected [ src-var? 'not-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.validate_or = (function datascript$parser$validate_or(clause,form){
var map__41335 = clause;
var map__41335__$1 = ((((!((map__41335 == null)))?((((map__41335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41335):map__41335);
var map__41336 = cljs.core.get.call(null,map__41335__$1,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520));
var map__41336__$1 = ((((!((map__41336 == null)))?((((map__41336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41336):map__41336);
var required = cljs.core.get.call(null,map__41336__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var free = cljs.core.get.call(null,map__41336__$1,new cljs.core.Keyword(null,"free","free",801364328));
var clauses = cljs.core.get.call(null,map__41335__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var vars = cljs.core.concat.call(null,required,free);
var seq__41339_41343 = cljs.core.seq.call(null,clauses);
var chunk__41340_41344 = null;
var count__41341_41345 = (0);
var i__41342_41346 = (0);
while(true){
if((i__41342_41346 < count__41341_41345)){
var clause_41347__$1 = cljs.core._nth.call(null,chunk__41340_41344,i__41342_41346);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_41347__$1], null),form);

var G__41348 = seq__41339_41343;
var G__41349 = chunk__41340_41344;
var G__41350 = count__41341_41345;
var G__41351 = (i__41342_41346 + (1));
seq__41339_41343 = G__41348;
chunk__41340_41344 = G__41349;
count__41341_41345 = G__41350;
i__41342_41346 = G__41351;
continue;
} else {
var temp__4425__auto___41352 = cljs.core.seq.call(null,seq__41339_41343);
if(temp__4425__auto___41352){
var seq__41339_41353__$1 = temp__4425__auto___41352;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41339_41353__$1)){
var c__17147__auto___41354 = cljs.core.chunk_first.call(null,seq__41339_41353__$1);
var G__41355 = cljs.core.chunk_rest.call(null,seq__41339_41353__$1);
var G__41356 = c__17147__auto___41354;
var G__41357 = cljs.core.count.call(null,c__17147__auto___41354);
var G__41358 = (0);
seq__41339_41343 = G__41355;
chunk__41340_41344 = G__41356;
count__41341_41345 = G__41357;
i__41342_41346 = G__41358;
continue;
} else {
var clause_41359__$1 = cljs.core.first.call(null,seq__41339_41353__$1);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_41359__$1], null),form);

var G__41360 = cljs.core.next.call(null,seq__41339_41353__$1);
var G__41361 = null;
var G__41362 = (0);
var G__41363 = (0);
seq__41339_41343 = G__41360;
chunk__41340_41344 = G__41361;
count__41341_41345 = G__41362;
i__41342_41346 = G__41363;
continue;
}
} else {
}
}
break;
}

return clause;
});
datascript.parser.parse_and = (function datascript$parser$parse_and(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.first.call(null,form)))){
var clauses_STAR_ = datascript.parser.parse_clauses.call(null,cljs.core.next.call(null,form));
if(cljs.core.truth_(cljs.core.not_empty.call(null,clauses_STAR_))){
return (new datascript.parser.And(clauses_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'and' clause, expected [ 'and' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_or = (function datascript$parser$parse_or(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__41366 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__41366,(0),null);
var next_form = cljs.core.nth.call(null,vec__41366,(1),null);
var vec__41367 = next_form;
var sym = cljs.core.nth.call(null,vec__41367,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__41367,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or","or",1876275696,null),sym)){
var temp__4423__auto__ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_(temp__4423__auto__)){
var clauses_STAR_ = temp__4423__auto__;
return datascript.parser.validate_or.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Or(source_STAR_,(new datascript.parser.RuleVars(null,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),null,null,null)),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'or' clause, expected [ src-var? 'or' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_or_join = (function datascript$parser$parse_or_join(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__41370 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__41370,(0),null);
var next_form = cljs.core.nth.call(null,vec__41370,(1),null);
var vec__41371 = next_form;
var sym = cljs.core.nth.call(null,vec__41371,(0),null);
var vars = cljs.core.nth.call(null,vec__41371,(1),null);
var clauses = cljs.core.nthnext.call(null,vec__41371,(2));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or-join","or-join",591375469,null),sym)){
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_((function (){var and__16332__auto__ = vars_STAR_;
if(cljs.core.truth_(and__16332__auto__)){
return clauses_STAR_;
} else {
return and__16332__auto__;
}
})())){
return datascript.parser.validate_or.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Or(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'or-join' clause, expected [ src-var? 'or-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_clause = (function datascript$parser$parse_clause(form){
var or__16344__auto__ = datascript.parser.parse_not.call(null,form);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
var or__16344__auto____$1 = datascript.parser.parse_not_join.call(null,form);
if(cljs.core.truth_(or__16344__auto____$1)){
return or__16344__auto____$1;
} else {
var or__16344__auto____$2 = datascript.parser.parse_or.call(null,form);
if(cljs.core.truth_(or__16344__auto____$2)){
return or__16344__auto____$2;
} else {
var or__16344__auto____$3 = datascript.parser.parse_or_join.call(null,form);
if(cljs.core.truth_(or__16344__auto____$3)){
return or__16344__auto____$3;
} else {
var or__16344__auto____$4 = datascript.parser.parse_pred.call(null,form);
if(cljs.core.truth_(or__16344__auto____$4)){
return or__16344__auto____$4;
} else {
var or__16344__auto____$5 = datascript.parser.parse_fn.call(null,form);
if(cljs.core.truth_(or__16344__auto____$5)){
return or__16344__auto____$5;
} else {
var or__16344__auto____$6 = datascript.parser.parse_rule_expr.call(null,form);
if(cljs.core.truth_(or__16344__auto____$6)){
return or__16344__auto____$6;
} else {
var or__16344__auto____$7 = datascript.parser.parse_pattern.call(null,form);
if(cljs.core.truth_(or__16344__auto____$7)){
return or__16344__auto____$7;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse clause, expected (data-pattern | pred-expr | fn-expr | rule-expr | not-clause | not-join-clause | or-clause | or-join-clause)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
}
}
}
});
datascript.parser.parse_clauses = (function datascript$parser$parse_clauses(clauses){
return datascript.parser.parse_seq.call(null,datascript.parser.parse_clause,clauses);
});
datascript.parser.parse_where = (function datascript$parser$parse_where(form){
var or__16344__auto__ = datascript.parser.parse_clauses.call(null,form);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :where clause, expected [clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleBranch = (function (vars,clauses,__meta,__extmap,__hash){
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16958__auto__,k__16959__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core._lookup.call(null,this__16958__auto____$1,k__16959__auto__,null);
});

datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k41377,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__41379 = (((k41377 instanceof cljs.core.Keyword))?k41377.fqn:null);
switch (G__41379) {
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41377,else__16961__auto__);

}
});

datascript.parser.RuleBranch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16972__auto__,writer__16973__auto__,opts__16974__auto__){
var self__ = this;
var this__16972__auto____$1 = this;
var pr_pair__16975__auto__ = ((function (this__16972__auto____$1){
return (function (keyval__16976__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,cljs.core.pr_writer,""," ","",opts__16974__auto__,keyval__16976__auto__);
});})(this__16972__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,pr_pair__16975__auto__,"#datascript.parser.RuleBranch{",", ","}",opts__16974__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41376){
var self__ = this;
var G__41376__$1 = this;
return (new cljs.core.RecordIter((0),G__41376__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleBranch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleBranch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16952__auto__){
var self__ = this;
var this__16952__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16962__auto__){
var self__ = this;
var this__16962__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16953__auto__){
var self__ = this;
var this__16953__auto____$1 = this;
var h__16779__auto__ = self__.__hash;
if(!((h__16779__auto__ == null))){
return h__16779__auto__;
} else {
var h__16779__auto____$1 = cljs.core.hash_imap.call(null,this__16953__auto____$1);
self__.__hash = h__16779__auto____$1;

return h__16779__auto____$1;
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16954__auto__,other__16955__auto__){
var self__ = this;
var this__16954__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16332__auto__ = other__16955__auto__;
if(cljs.core.truth_(and__16332__auto__)){
var and__16332__auto____$1 = (this__16954__auto____$1.constructor === other__16955__auto__.constructor);
if(and__16332__auto____$1){
return cljs.core.equiv_map.call(null,this__16954__auto____$1,other__16955__auto__);
} else {
return and__16332__auto____$1;
}
} else {
return and__16332__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16967__auto__,k__16968__auto__){
var self__ = this;
var this__16967__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__16968__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16967__auto____$1),self__.__meta),k__16968__auto__);
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16968__auto__)),null));
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__41376){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__41380 = cljs.core.keyword_identical_QMARK_;
var expr__41381 = k__16966__auto__;
if(cljs.core.truth_(pred__41380.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__41381))){
return (new datascript.parser.RuleBranch(G__41376,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41380.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__41381))){
return (new datascript.parser.RuleBranch(self__.vars,G__41376,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__41376),null));
}
}
});

datascript.parser.RuleBranch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__41376){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,G__41376,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16963__auto__,entry__16964__auto__){
var self__ = this;
var this__16963__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16964__auto__)){
return cljs.core._assoc.call(null,this__16963__auto____$1,cljs.core._nth.call(null,entry__16964__auto__,(0)),cljs.core._nth.call(null,entry__16964__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16963__auto____$1,entry__16964__auto__);
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26396__auto__,f41373){
var self__ = this;
var this__26396__auto____$1 = this;
var new__26397__auto__ = (new datascript.parser.RuleBranch(datascript.parser.postwalk.call(null,self__.vars,f41373),datascript.parser.postwalk.call(null,self__.clauses,f41373),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__26396__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__26398__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__26397__auto__,meta__26398__auto__);
} else {
return new__26397__auto__;
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26399__auto__,pred41374,acc41375){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect.call(null,pred41374,self__.clauses,datascript.parser.collect.call(null,pred41374,self__.vars,acc41375));
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26399__auto__,acc41375){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc41375,self__.vars),self__.clauses);
});

datascript.parser.RuleBranch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.RuleBranch.cljs$lang$type = true;

datascript.parser.RuleBranch.cljs$lang$ctorPrSeq = (function (this__16992__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleBranch");
});

datascript.parser.RuleBranch.cljs$lang$ctorPrWriter = (function (this__16992__auto__,writer__16993__auto__){
return cljs.core._write.call(null,writer__16993__auto__,"datascript.parser/RuleBranch");
});

datascript.parser.__GT_RuleBranch = (function datascript$parser$__GT_RuleBranch(vars,clauses){
return (new datascript.parser.RuleBranch(vars,clauses,null,null,null));
});

datascript.parser.map__GT_RuleBranch = (function datascript$parser$map__GT_RuleBranch(G__41378){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__41378),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__41378),null,cljs.core.dissoc.call(null,G__41378,new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Rule = (function (name,branches,__meta,__extmap,__hash){
this.name = name;
this.branches = branches;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16958__auto__,k__16959__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core._lookup.call(null,this__16958__auto____$1,k__16959__auto__,null);
});

datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k41388,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__41390 = (((k41388 instanceof cljs.core.Keyword))?k41388.fqn:null);
switch (G__41390) {
case "name":
return self__.name;

break;
case "branches":
return self__.branches;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41388,else__16961__auto__);

}
});

datascript.parser.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16972__auto__,writer__16973__auto__,opts__16974__auto__){
var self__ = this;
var this__16972__auto____$1 = this;
var pr_pair__16975__auto__ = ((function (this__16972__auto____$1){
return (function (keyval__16976__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,cljs.core.pr_writer,""," ","",opts__16974__auto__,keyval__16976__auto__);
});})(this__16972__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,pr_pair__16975__auto__,"#datascript.parser.Rule{",", ","}",opts__16974__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IIterable$ = true;

datascript.parser.Rule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41387){
var self__ = this;
var G__41387__$1 = this;
return (new cljs.core.RecordIter((0),G__41387__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16952__auto__){
var self__ = this;
var this__16952__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16962__auto__){
var self__ = this;
var this__16962__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16953__auto__){
var self__ = this;
var this__16953__auto____$1 = this;
var h__16779__auto__ = self__.__hash;
if(!((h__16779__auto__ == null))){
return h__16779__auto__;
} else {
var h__16779__auto____$1 = cljs.core.hash_imap.call(null,this__16953__auto____$1);
self__.__hash = h__16779__auto____$1;

return h__16779__auto____$1;
}
});

datascript.parser.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16954__auto__,other__16955__auto__){
var self__ = this;
var this__16954__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16332__auto__ = other__16955__auto__;
if(cljs.core.truth_(and__16332__auto__)){
var and__16332__auto____$1 = (this__16954__auto____$1.constructor === other__16955__auto__.constructor);
if(and__16332__auto____$1){
return cljs.core.equiv_map.call(null,this__16954__auto____$1,other__16955__auto__);
} else {
return and__16332__auto____$1;
}
} else {
return and__16332__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16967__auto__,k__16968__auto__){
var self__ = this;
var this__16967__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"branches","branches",-1240337268),null], null), null),k__16968__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16967__auto____$1),self__.__meta),k__16968__auto__);
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16968__auto__)),null));
}
});

datascript.parser.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__41387){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__41391 = cljs.core.keyword_identical_QMARK_;
var expr__41392 = k__16966__auto__;
if(cljs.core.truth_(pred__41391.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__41392))){
return (new datascript.parser.Rule(G__41387,self__.branches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41391.call(null,new cljs.core.Keyword(null,"branches","branches",-1240337268),expr__41392))){
return (new datascript.parser.Rule(self__.name,G__41387,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__41387),null));
}
}
});

datascript.parser.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__41387){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,G__41387,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16963__auto__,entry__16964__auto__){
var self__ = this;
var this__16963__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16964__auto__)){
return cljs.core._assoc.call(null,this__16963__auto____$1,cljs.core._nth.call(null,entry__16964__auto__,(0)),cljs.core._nth.call(null,entry__16964__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16963__auto____$1,entry__16964__auto__);
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26396__auto__,f41384){
var self__ = this;
var this__26396__auto____$1 = this;
var new__26397__auto__ = (new datascript.parser.Rule(datascript.parser.postwalk.call(null,self__.name,f41384),datascript.parser.postwalk.call(null,self__.branches,f41384),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__26396__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__26398__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__26397__auto__,meta__26398__auto__);
} else {
return new__26397__auto__;
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26399__auto__,pred41385,acc41386){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect.call(null,pred41385,self__.branches,datascript.parser.collect.call(null,pred41385,self__.name,acc41386));
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26399__auto__,acc41386){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc41386,self__.name),self__.branches);
});

datascript.parser.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"branches","branches",400194259,null)], null);
});

datascript.parser.Rule.cljs$lang$type = true;

datascript.parser.Rule.cljs$lang$ctorPrSeq = (function (this__16992__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Rule");
});

datascript.parser.Rule.cljs$lang$ctorPrWriter = (function (this__16992__auto__,writer__16993__auto__){
return cljs.core._write.call(null,writer__16993__auto__,"datascript.parser/Rule");
});

datascript.parser.__GT_Rule = (function datascript$parser$__GT_Rule(name,branches){
return (new datascript.parser.Rule(name,branches,null,null,null));
});

datascript.parser.map__GT_Rule = (function datascript$parser$map__GT_Rule(G__41389){
return (new datascript.parser.Rule(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__41389),new cljs.core.Keyword(null,"branches","branches",-1240337268).cljs$core$IFn$_invoke$arity$1(G__41389),null,cljs.core.dissoc.call(null,G__41389,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)),null));
});

datascript.parser.validate_vars = (function datascript$parser$validate_vars(vars,clauses,form){
var declared_vars = datascript.parser.collect.call(null,(function (p1__41395_SHARP_){
return (p1__41395_SHARP_ instanceof datascript.parser.Variable);
}),vars,cljs.core.PersistentHashSet.EMPTY);
var used_vars = datascript.parser.collect.call(null,((function (declared_vars){
return (function (p1__41396_SHARP_){
return (p1__41396_SHARP_ instanceof datascript.parser.Variable);
});})(declared_vars))
,clauses,cljs.core.PersistentHashSet.EMPTY);
var undeclared_vars = clojure.set.difference.call(null,used_vars,declared_vars);
if(cljs.core.empty_QMARK_.call(null,undeclared_vars)){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Reference to the unknown variables: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_vars)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),undeclared_vars], null));
}
});
datascript.parser.parse_rule = (function datascript$parser$parse_rule(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__41399 = form;
var head = cljs.core.nth.call(null,vec__41399,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__41399,(1));
if(cljs.core.sequential_QMARK_.call(null,head)){
var vec__41400 = head;
var name = cljs.core.nth.call(null,vec__41400,(0),null);
var vars = cljs.core.nthnext.call(null,vec__41400,(1));
var name_STAR_ = (function (){var or__16344__auto__ = datascript.parser.parse_plain_symbol.call(null,name);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule name, expected plain-symbol")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = (function (){var or__16344__auto__ = cljs.core.not_empty.call(null,datascript.parser.parse_clauses.call(null,clauses));
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Rule branch should have clauses")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
datascript.parser.validate_vars.call(null,vars_STAR_,clauses_STAR_,form);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name_STAR_,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars_STAR_,new cljs.core.Keyword(null,"clauses","clauses",1454841241),clauses_STAR_], null);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule head, expected [rule-name rule-vars]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule, expected [rule-head clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.validate_arity = (function datascript$parser$validate_arity(name,branches){
var vars0 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,branches));
var arity0 = datascript.parser.rule_vars_arity.call(null,vars0);
var seq__41407 = cljs.core.seq.call(null,cljs.core.next.call(null,branches));
var chunk__41409 = null;
var count__41410 = (0);
var i__41411 = (0);
while(true){
if((i__41411 < count__41410)){
var b = cljs.core._nth.call(null,chunk__41409,i__41411);
var vars_41413 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_41413))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Arity mismatch for rule '"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str("': "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str(" vs. "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_41413)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__41414 = seq__41407;
var G__41415 = chunk__41409;
var G__41416 = count__41410;
var G__41417 = (i__41411 + (1));
seq__41407 = G__41414;
chunk__41409 = G__41415;
count__41410 = G__41416;
i__41411 = G__41417;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__41407);
if(temp__4425__auto__){
var seq__41407__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41407__$1)){
var c__17147__auto__ = cljs.core.chunk_first.call(null,seq__41407__$1);
var G__41418 = cljs.core.chunk_rest.call(null,seq__41407__$1);
var G__41419 = c__17147__auto__;
var G__41420 = cljs.core.count.call(null,c__17147__auto__);
var G__41421 = (0);
seq__41407 = G__41418;
chunk__41409 = G__41419;
count__41410 = G__41420;
i__41411 = G__41421;
continue;
} else {
var b = cljs.core.first.call(null,seq__41407__$1);
var vars_41422 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_41422))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Arity mismatch for rule '"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str("': "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str(" vs. "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_41422)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__41423 = cljs.core.next.call(null,seq__41407__$1);
var G__41424 = null;
var G__41425 = (0);
var G__41426 = (0);
seq__41407 = G__41423;
chunk__41409 = G__41424;
count__41410 = G__41425;
i__41411 = G__41426;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.parser.parse_rules = (function datascript$parser$parse_rules(form){
return cljs.core.vec.call(null,(function (){var iter__17116__auto__ = (function datascript$parser$parse_rules_$_iter__41436(s__41437){
return (new cljs.core.LazySeq(null,(function (){
var s__41437__$1 = s__41437;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__41437__$1);
if(temp__4425__auto__){
var s__41437__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41437__$2)){
var c__17114__auto__ = cljs.core.chunk_first.call(null,s__41437__$2);
var size__17115__auto__ = cljs.core.count.call(null,c__17114__auto__);
var b__41439 = cljs.core.chunk_buffer.call(null,size__17115__auto__);
if((function (){var i__41438 = (0);
while(true){
if((i__41438 < size__17115__auto__)){
var vec__41442 = cljs.core._nth.call(null,c__17114__auto__,i__41438);
var name = cljs.core.nth.call(null,vec__41442,(0),null);
var branches = cljs.core.nth.call(null,vec__41442,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (i__41438,vec__41442,name,branches,c__17114__auto__,size__17115__auto__,b__41439,s__41437__$2,temp__4425__auto__){
return (function (p1__41427_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__41427_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__41427_SHARP_),null,null,null));
});})(i__41438,vec__41442,name,branches,c__17114__auto__,size__17115__auto__,b__41439,s__41437__$2,temp__4425__auto__))
,branches);
cljs.core.chunk_append.call(null,b__41439,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
);

var G__41444 = (i__41438 + (1));
i__41438 = G__41444;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41439),datascript$parser$parse_rules_$_iter__41436.call(null,cljs.core.chunk_rest.call(null,s__41437__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41439),null);
}
} else {
var vec__41443 = cljs.core.first.call(null,s__41437__$2);
var name = cljs.core.nth.call(null,vec__41443,(0),null);
var branches = cljs.core.nth.call(null,vec__41443,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (vec__41443,name,branches,s__41437__$2,temp__4425__auto__){
return (function (p1__41427_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__41427_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__41427_SHARP_),null,null,null));
});})(vec__41443,name,branches,s__41437__$2,temp__4425__auto__))
,branches);
return cljs.core.cons.call(null,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
,datascript$parser$parse_rules_$_iter__41436.call(null,cljs.core.rest.call(null,s__41437__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17116__auto__.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"name","name",1843675177),datascript.parser.parse_seq.call(null,datascript.parser.parse_rule,form)));
})());
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Query = (function (find,with$,in$,where,__meta,__extmap,__hash){
this.find = find;
this.with$ = with$;
this.in$ = in$;
this.where = where;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16958__auto__,k__16959__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core._lookup.call(null,this__16958__auto____$1,k__16959__auto__,null);
});

datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k41449,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__41451 = (((k41449 instanceof cljs.core.Keyword))?k41449.fqn:null);
switch (G__41451) {
case "find":
return self__.find;

break;
case "with":
return self__.with$;

break;
case "in":
return self__.in$;

break;
case "where":
return self__.where;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41449,else__16961__auto__);

}
});

datascript.parser.Query.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16972__auto__,writer__16973__auto__,opts__16974__auto__){
var self__ = this;
var this__16972__auto____$1 = this;
var pr_pair__16975__auto__ = ((function (this__16972__auto____$1){
return (function (keyval__16976__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,cljs.core.pr_writer,""," ","",opts__16974__auto__,keyval__16976__auto__);
});})(this__16972__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,pr_pair__16975__auto__,"#datascript.parser.Query{",", ","}",opts__16974__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"find","find",496279456),self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"with","with",-1536296876),self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"where","where",-2044795965),self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IIterable$ = true;

datascript.parser.Query.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41448){
var self__ = this;
var G__41448__$1 = this;
return (new cljs.core.RecordIter((0),G__41448__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"where","where",-2044795965)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Query.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Query.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16952__auto__){
var self__ = this;
var this__16952__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16962__auto__){
var self__ = this;
var this__16962__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16953__auto__){
var self__ = this;
var this__16953__auto____$1 = this;
var h__16779__auto__ = self__.__hash;
if(!((h__16779__auto__ == null))){
return h__16779__auto__;
} else {
var h__16779__auto____$1 = cljs.core.hash_imap.call(null,this__16953__auto____$1);
self__.__hash = h__16779__auto____$1;

return h__16779__auto____$1;
}
});

datascript.parser.Query.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16954__auto__,other__16955__auto__){
var self__ = this;
var this__16954__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16332__auto__ = other__16955__auto__;
if(cljs.core.truth_(and__16332__auto__)){
var and__16332__auto____$1 = (this__16954__auto____$1.constructor === other__16955__auto__.constructor);
if(and__16332__auto____$1){
return cljs.core.equiv_map.call(null,this__16954__auto____$1,other__16955__auto__);
} else {
return and__16332__auto____$1;
}
} else {
return and__16332__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Query.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16967__auto__,k__16968__auto__){
var self__ = this;
var this__16967__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"find","find",496279456),null,new cljs.core.Keyword(null,"where","where",-2044795965),null,new cljs.core.Keyword(null,"with","with",-1536296876),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__16968__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16967__auto____$1),self__.__meta),k__16968__auto__);
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16968__auto__)),null));
}
});

datascript.parser.Query.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__41448){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__41452 = cljs.core.keyword_identical_QMARK_;
var expr__41453 = k__16966__auto__;
if(cljs.core.truth_(pred__41452.call(null,new cljs.core.Keyword(null,"find","find",496279456),expr__41453))){
return (new datascript.parser.Query(G__41448,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41452.call(null,new cljs.core.Keyword(null,"with","with",-1536296876),expr__41453))){
return (new datascript.parser.Query(self__.find,G__41448,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41452.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__41453))){
return (new datascript.parser.Query(self__.find,self__.with$,G__41448,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41452.call(null,new cljs.core.Keyword(null,"where","where",-2044795965),expr__41453))){
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,G__41448,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__41448),null));
}
}
}
}
});

datascript.parser.Query.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"find","find",496279456),self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"with","with",-1536296876),self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"where","where",-2044795965),self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__41448){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,G__41448,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16963__auto__,entry__16964__auto__){
var self__ = this;
var this__16963__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16964__auto__)){
return cljs.core._assoc.call(null,this__16963__auto____$1,cljs.core._nth.call(null,entry__16964__auto__,(0)),cljs.core._nth.call(null,entry__16964__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16963__auto____$1,entry__16964__auto__);
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Query.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26396__auto__,f41445){
var self__ = this;
var this__26396__auto____$1 = this;
var new__26397__auto__ = (new datascript.parser.Query(datascript.parser.postwalk.call(null,self__.find,f41445),datascript.parser.postwalk.call(null,self__.with$,f41445),datascript.parser.postwalk.call(null,self__.in$,f41445),datascript.parser.postwalk.call(null,self__.where,f41445),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__26396__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__26398__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__26397__auto__,meta__26398__auto__);
} else {
return new__26397__auto__;
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26399__auto__,pred41446,acc41447){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect.call(null,pred41446,self__.where,datascript.parser.collect.call(null,pred41446,self__.in$,datascript.parser.collect.call(null,pred41446,self__.with$,datascript.parser.collect.call(null,pred41446,self__.find,acc41447))));
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26399__auto__,acc41447){
var self__ = this;
var ___26399__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc41447,self__.find),self__.with$),self__.in$),self__.where);
});

datascript.parser.Query.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"find","find",2136810983,null),new cljs.core.Symbol(null,"with","with",104234651,null),new cljs.core.Symbol(null,"in","in",109346662,null),new cljs.core.Symbol(null,"where","where",-404264438,null)], null);
});

datascript.parser.Query.cljs$lang$type = true;

datascript.parser.Query.cljs$lang$ctorPrSeq = (function (this__16992__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Query");
});

datascript.parser.Query.cljs$lang$ctorPrWriter = (function (this__16992__auto__,writer__16993__auto__){
return cljs.core._write.call(null,writer__16993__auto__,"datascript.parser/Query");
});

datascript.parser.__GT_Query = (function datascript$parser$__GT_Query(find,with$,in$,where){
return (new datascript.parser.Query(find,with$,in$,where,null,null,null));
});

datascript.parser.map__GT_Query = (function datascript$parser$map__GT_Query(G__41450){
return (new datascript.parser.Query(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(G__41450),new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(G__41450),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__41450),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(G__41450),null,cljs.core.dissoc.call(null,G__41450,new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"where","where",-2044795965)),null));
});

datascript.parser.query__GT_map = (function datascript$parser$query__GT_map(query){
var parsed = cljs.core.PersistentArrayMap.EMPTY;
var key = null;
var qs = query;
while(true){
var temp__4423__auto__ = cljs.core.first.call(null,qs);
if(cljs.core.truth_(temp__4423__auto__)){
var q = temp__4423__auto__;
if((q instanceof cljs.core.Keyword)){
var G__41456 = parsed;
var G__41457 = q;
var G__41458 = cljs.core.next.call(null,qs);
parsed = G__41456;
key = G__41457;
qs = G__41458;
continue;
} else {
var G__41459 = cljs.core.update_in.call(null,parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__41460 = key;
var G__41461 = cljs.core.next.call(null,qs);
parsed = G__41459;
key = G__41460;
qs = G__41461;
continue;
}
} else {
return parsed;
}
break;
}
});
datascript.parser.validate_query = (function datascript$parser$validate_query(q,form){
var find_vars_41468 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q)));
var with_vars_41469 = cljs.core.set.call(null,new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
var in_vars_41470 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q)));
var where_vars_41471 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q)));
var unknown_41472 = clojure.set.difference.call(null,clojure.set.union.call(null,find_vars_41468,with_vars_41469),clojure.set.union.call(null,where_vars_41471,in_vars_41470));
var shared_41473 = clojure.set.intersection.call(null,find_vars_41468,with_vars_41469);
if(cljs.core.empty_QMARK_.call(null,unknown_41472)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Query for unknown vars: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_41472)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_41472,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,shared_41473)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str(":in and :with should not use same variables: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),shared_41473)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),shared_41473,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_vars_41474 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
var in_sources_41475 = datascript.parser.collect.call(null,((function (in_vars_41474){
return (function (p1__41462_SHARP_){
return (p1__41462_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_vars_41474))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
var in_rules_41476 = datascript.parser.collect.call(null,((function (in_vars_41474,in_sources_41475){
return (function (p1__41463_SHARP_){
return (p1__41463_SHARP_ instanceof datascript.parser.RulesVar);
});})(in_vars_41474,in_sources_41475))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_((function (){var and__16332__auto__ = datascript.parser.distinct_QMARK_.call(null,in_vars_41474);
if(cljs.core.truth_(and__16332__auto__)){
var and__16332__auto____$1 = datascript.parser.distinct_QMARK_.call(null,in_sources_41475);
if(cljs.core.truth_(and__16332__auto____$1)){
return datascript.parser.distinct_QMARK_.call(null,in_rules_41476);
} else {
return and__16332__auto____$1;
}
} else {
return and__16332__auto__;
}
})())){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Vars used in :in should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var with_vars_41477 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,with_vars_41477))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Vars used in :with should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_sources_41478 = datascript.parser.collect.call(null,(function (p1__41464_SHARP_){
return (p1__41464_SHARP_ instanceof datascript.parser.SrcVar);
}),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var where_sources_41479 = datascript.parser.collect.call(null,((function (in_sources_41478){
return (function (p1__41465_SHARP_){
return (p1__41465_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_sources_41478))
,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var unknown_41480 = clojure.set.difference.call(null,where_sources_41479,in_sources_41478);
if(cljs.core.empty_QMARK_.call(null,unknown_41480)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Where uses unknown source vars: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_41480)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_41480,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var rule_exprs = datascript.parser.collect.call(null,(function (p1__41466_SHARP_){
return (p1__41466_SHARP_ instanceof datascript.parser.RuleExpr);
}),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q));
var rules_vars = datascript.parser.collect.call(null,((function (rule_exprs){
return (function (p1__41467_SHARP_){
return (p1__41467_SHARP_ instanceof datascript.parser.RulesVar);
});})(rule_exprs))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
if((!(cljs.core.empty_QMARK_.call(null,rule_exprs))) && (cljs.core.empty_QMARK_.call(null,rules_vars))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Missing rules var '%' in :in")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.parse_query = (function datascript$parser$parse_query(q){
var qm = ((cljs.core.map_QMARK_.call(null,q))?q:((cljs.core.sequential_QMARK_.call(null,q))?datascript.parser.query__GT_map.call(null,q):(function(){throw cljs.core.ex_info.call(null,[cljs.core.str("Query should be a vector or a map")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),q], null))})()
));
var res = datascript.parser.map__GT_Query.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"find","find",496279456),datascript.parser.parse_find.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"with","with",-1536296876),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(qm);
if(cljs.core.truth_(temp__4425__auto__)){
var with$ = temp__4425__auto__;
return datascript.parser.parse_with.call(null,with$);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"in","in",-1531184865),datascript.parser.parse_in.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$2(qm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null))),new cljs.core.Keyword(null,"where","where",-2044795965),datascript.parser.parse_where.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$2(qm,cljs.core.PersistentVector.EMPTY))], null));
datascript.parser.validate_query.call(null,res,q);

return res;
});

//# sourceMappingURL=parser.js.map?rel=1446794924550