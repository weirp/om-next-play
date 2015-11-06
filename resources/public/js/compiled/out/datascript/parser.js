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
return cljs.core.reduce.call(null,(function (p1__43701_SHARP_,p2__43700_SHARP_){
var temp__4423__auto__ = parse_el.call(null,p2__43700_SHARP_);
if(cljs.core.truth_(temp__4423__auto__)){
var parsed = temp__4423__auto__;
return cljs.core.conj.call(null,p1__43701_SHARP_,parsed);
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
var len__17402__auto___43708 = arguments.length;
var i__17403__auto___43709 = (0);
while(true){
if((i__17403__auto___43709 < len__17402__auto___43708)){
args__17409__auto__.push((arguments[i__17403__auto___43709]));

var G__43710 = (i__17403__auto___43709 + (1));
i__17403__auto___43709 = G__43710;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((2) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((2)),(0))):null);
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17410__auto__);
});

datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic = (function (pred,form,p__43705){
var vec__43706 = p__43705;
var acc = cljs.core.nth.call(null,vec__43706,(0),null);
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
return cljs.core.reduce.call(null,((function (acc__$1,vec__43706,acc){
return (function (acc__$2,form__$1){
return datascript.parser.collect.call(null,pred,form__$1,acc__$2);
});})(acc__$1,vec__43706,acc))
,acc__$1,form);
} else {
return acc__$1;

}
}
}
});

datascript.parser.collect.cljs$lang$maxFixedArity = (2);

datascript.parser.collect.cljs$lang$applyTo = (function (seq43702){
var G__43703 = cljs.core.first.call(null,seq43702);
var seq43702__$1 = cljs.core.next.call(null,seq43702);
var G__43704 = cljs.core.first.call(null,seq43702__$1);
var seq43702__$2 = cljs.core.next.call(null,seq43702__$1);
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(G__43703,G__43704,seq43702__$2);
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
return f.call(null,cljs.core.reduce.call(null,(function (form__$1,p__43717){
var vec__43718 = p__43717;
var k = cljs.core.nth.call(null,vec__43718,(0),null);
var v = cljs.core.nth.call(null,vec__43718,(1),null);
return cljs.core.assoc.call(null,form__$1,k,datascript$parser$postwalk.call(null,v,f));
}),form,form));
} else {
if(cljs.core.seq_QMARK_.call(null,form)){
return f.call(null,cljs.core.map.call(null,(function (p1__43711_SHARP_){
return datascript$parser$postwalk.call(null,p1__43711_SHARP_,f);
}),form));
} else {
if(cljs.core.coll_QMARK_.call(null,form)){
return f.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.map.call(null,(function (p1__43712_SHARP_){
return datascript$parser$postwalk.call(null,p1__43712_SHARP_,f);
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

datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k43723,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__43725 = k43723;
switch (G__43725) {
default:
return cljs.core.get.call(null,self__.__extmap,k43723,else__16961__auto__);

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

datascript.parser.Placeholder.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43722){
var self__ = this;
var G__43722__$1 = this;
return (new cljs.core.RecordIter((0),G__43722__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
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

datascript.parser.Placeholder.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__43722){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__43726 = cljs.core.keyword_identical_QMARK_;
var expr__43727 = k__16966__auto__;
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__43722),null));
});

datascript.parser.Placeholder.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__43722){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.Placeholder(G__43722,self__.__extmap,self__.__hash));
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

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__25953__auto__,f43719){
var self__ = this;
var this__25953__auto____$1 = this;
var new__25954__auto__ = (new datascript.parser.Placeholder(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__25953__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__25955__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__25954__auto__,meta__25955__auto__);
} else {
return new__25954__auto__;
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___25956__auto__,pred43720,acc43721){
var self__ = this;
var ___25956__auto____$1 = this;
return acc43721;
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___25956__auto__,acc43721){
var self__ = this;
var ___25956__auto____$1 = this;
return acc43721;
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

datascript.parser.map__GT_Placeholder = (function datascript$parser$map__GT_Placeholder(G__43724){
return (new datascript.parser.Placeholder(null,cljs.core.dissoc.call(null,G__43724),null));
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

datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k43734,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__43736 = (((k43734 instanceof cljs.core.Keyword))?k43734.fqn:null);
switch (G__43736) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43734,else__16961__auto__);

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

datascript.parser.Variable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43733){
var self__ = this;
var G__43733__$1 = this;
return (new cljs.core.RecordIter((0),G__43733__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

datascript.parser.Variable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__43733){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__43737 = cljs.core.keyword_identical_QMARK_;
var expr__43738 = k__16966__auto__;
if(cljs.core.truth_(pred__43737.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__43738))){
return (new datascript.parser.Variable(G__43733,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__43733),null));
}
});

datascript.parser.Variable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__43733){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,G__43733,self__.__extmap,self__.__hash));
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

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__25953__auto__,f43730){
var self__ = this;
var this__25953__auto____$1 = this;
var new__25954__auto__ = (new datascript.parser.Variable(datascript.parser.postwalk.call(null,self__.symbol,f43730),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__25953__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__25955__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__25954__auto__,meta__25955__auto__);
} else {
return new__25954__auto__;
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___25956__auto__,pred43731,acc43732){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect.call(null,pred43731,self__.symbol,acc43732);
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___25956__auto__,acc43732){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc43732,self__.symbol);
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

datascript.parser.map__GT_Variable = (function datascript$parser$map__GT_Variable(G__43735){
return (new datascript.parser.Variable(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__43735),null,cljs.core.dissoc.call(null,G__43735,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
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

datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k43745,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__43747 = (((k43745 instanceof cljs.core.Keyword))?k43745.fqn:null);
switch (G__43747) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43745,else__16961__auto__);

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

datascript.parser.SrcVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43744){
var self__ = this;
var G__43744__$1 = this;
return (new cljs.core.RecordIter((0),G__43744__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

datascript.parser.SrcVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__43744){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__43748 = cljs.core.keyword_identical_QMARK_;
var expr__43749 = k__16966__auto__;
if(cljs.core.truth_(pred__43748.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__43749))){
return (new datascript.parser.SrcVar(G__43744,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__43744),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__43744){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,G__43744,self__.__extmap,self__.__hash));
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

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__25953__auto__,f43741){
var self__ = this;
var this__25953__auto____$1 = this;
var new__25954__auto__ = (new datascript.parser.SrcVar(datascript.parser.postwalk.call(null,self__.symbol,f43741),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__25953__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__25955__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__25954__auto__,meta__25955__auto__);
} else {
return new__25954__auto__;
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___25956__auto__,pred43742,acc43743){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect.call(null,pred43742,self__.symbol,acc43743);
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___25956__auto__,acc43743){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc43743,self__.symbol);
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

datascript.parser.map__GT_SrcVar = (function datascript$parser$map__GT_SrcVar(G__43746){
return (new datascript.parser.SrcVar(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__43746),null,cljs.core.dissoc.call(null,G__43746,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
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

datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k43756,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__43758 = k43756;
switch (G__43758) {
default:
return cljs.core.get.call(null,self__.__extmap,k43756,else__16961__auto__);

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

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43755){
var self__ = this;
var G__43755__$1 = this;
return (new cljs.core.RecordIter((0),G__43755__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
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

datascript.parser.DefaultSrc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__43755){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__43759 = cljs.core.keyword_identical_QMARK_;
var expr__43760 = k__16966__auto__;
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__43755),null));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__43755){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.DefaultSrc(G__43755,self__.__extmap,self__.__hash));
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

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__25953__auto__,f43752){
var self__ = this;
var this__25953__auto____$1 = this;
var new__25954__auto__ = (new datascript.parser.DefaultSrc(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__25953__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__25955__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__25954__auto__,meta__25955__auto__);
} else {
return new__25954__auto__;
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___25956__auto__,pred43753,acc43754){
var self__ = this;
var ___25956__auto____$1 = this;
return acc43754;
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___25956__auto__,acc43754){
var self__ = this;
var ___25956__auto____$1 = this;
return acc43754;
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

datascript.parser.map__GT_DefaultSrc = (function datascript$parser$map__GT_DefaultSrc(G__43757){
return (new datascript.parser.DefaultSrc(null,cljs.core.dissoc.call(null,G__43757),null));
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

datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k43767,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__43769 = k43767;
switch (G__43769) {
default:
return cljs.core.get.call(null,self__.__extmap,k43767,else__16961__auto__);

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

datascript.parser.RulesVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43766){
var self__ = this;
var G__43766__$1 = this;
return (new cljs.core.RecordIter((0),G__43766__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
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

datascript.parser.RulesVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__43766){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__43770 = cljs.core.keyword_identical_QMARK_;
var expr__43771 = k__16966__auto__;
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__43766),null));
});

datascript.parser.RulesVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__43766){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.RulesVar(G__43766,self__.__extmap,self__.__hash));
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

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__25953__auto__,f43763){
var self__ = this;
var this__25953__auto____$1 = this;
var new__25954__auto__ = (new datascript.parser.RulesVar(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__25953__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__25955__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__25954__auto__,meta__25955__auto__);
} else {
return new__25954__auto__;
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___25956__auto__,pred43764,acc43765){
var self__ = this;
var ___25956__auto____$1 = this;
return acc43765;
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___25956__auto__,acc43765){
var self__ = this;
var ___25956__auto____$1 = this;
return acc43765;
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

datascript.parser.map__GT_RulesVar = (function datascript$parser$map__GT_RulesVar(G__43768){
return (new datascript.parser.RulesVar(null,cljs.core.dissoc.call(null,G__43768),null));
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

datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k43778,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__43780 = (((k43778 instanceof cljs.core.Keyword))?k43778.fqn:null);
switch (G__43780) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43778,else__16961__auto__);

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

datascript.parser.Constant.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43777){
var self__ = this;
var G__43777__$1 = this;
return (new cljs.core.RecordIter((0),G__43777__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

datascript.parser.Constant.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__43777){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__43781 = cljs.core.keyword_identical_QMARK_;
var expr__43782 = k__16966__auto__;
if(cljs.core.truth_(pred__43781.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__43782))){
return (new datascript.parser.Constant(G__43777,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__43777),null));
}
});

datascript.parser.Constant.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__43777){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,G__43777,self__.__extmap,self__.__hash));
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

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__25953__auto__,f43774){
var self__ = this;
var this__25953__auto____$1 = this;
var new__25954__auto__ = (new datascript.parser.Constant(datascript.parser.postwalk.call(null,self__.value,f43774),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__25953__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__25955__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__25954__auto__,meta__25955__auto__);
} else {
return new__25954__auto__;
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___25956__auto__,pred43775,acc43776){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect.call(null,pred43775,self__.value,acc43776);
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___25956__auto__,acc43776){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc43776,self__.value);
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

datascript.parser.map__GT_Constant = (function datascript$parser$map__GT_Constant(G__43779){
return (new datascript.parser.Constant(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__43779),null,cljs.core.dissoc.call(null,G__43779,new cljs.core.Keyword(null,"value","value",305978217)),null));
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

datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k43789,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__43791 = (((k43789 instanceof cljs.core.Keyword))?k43789.fqn:null);
switch (G__43791) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43789,else__16961__auto__);

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

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43788){
var self__ = this;
var G__43788__$1 = this;
return (new cljs.core.RecordIter((0),G__43788__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

datascript.parser.PlainSymbol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__43788){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__43792 = cljs.core.keyword_identical_QMARK_;
var expr__43793 = k__16966__auto__;
if(cljs.core.truth_(pred__43792.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__43793))){
return (new datascript.parser.PlainSymbol(G__43788,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__43788),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__43788){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,G__43788,self__.__extmap,self__.__hash));
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

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__25953__auto__,f43785){
var self__ = this;
var this__25953__auto____$1 = this;
var new__25954__auto__ = (new datascript.parser.PlainSymbol(datascript.parser.postwalk.call(null,self__.symbol,f43785),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__25953__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__25955__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__25954__auto__,meta__25955__auto__);
} else {
return new__25954__auto__;
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___25956__auto__,pred43786,acc43787){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect.call(null,pred43786,self__.symbol,acc43787);
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___25956__auto__,acc43787){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc43787,self__.symbol);
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

datascript.parser.map__GT_PlainSymbol = (function datascript$parser$map__GT_PlainSymbol(G__43790){
return (new datascript.parser.PlainSymbol(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__43790),null,cljs.core.dissoc.call(null,G__43790,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
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

datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k43800,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__43802 = (((k43800 instanceof cljs.core.Keyword))?k43800.fqn:null);
switch (G__43802) {
case "required":
return self__.required;

break;
case "free":
return self__.free;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43800,else__16961__auto__);

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

datascript.parser.RuleVars.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43799){
var self__ = this;
var G__43799__$1 = this;
return (new cljs.core.RecordIter((0),G__43799__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

datascript.parser.RuleVars.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__43799){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__43803 = cljs.core.keyword_identical_QMARK_;
var expr__43804 = k__16966__auto__;
if(cljs.core.truth_(pred__43803.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__43804))){
return (new datascript.parser.RuleVars(G__43799,self__.free,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43803.call(null,new cljs.core.Keyword(null,"free","free",801364328),expr__43804))){
return (new datascript.parser.RuleVars(self__.required,G__43799,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__43799),null));
}
}
});

datascript.parser.RuleVars.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__43799){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,G__43799,self__.__extmap,self__.__hash));
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

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__25953__auto__,f43796){
var self__ = this;
var this__25953__auto____$1 = this;
var new__25954__auto__ = (new datascript.parser.RuleVars(datascript.parser.postwalk.call(null,self__.required,f43796),datascript.parser.postwalk.call(null,self__.free,f43796),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__25953__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__25955__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__25954__auto__,meta__25955__auto__);
} else {
return new__25954__auto__;
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___25956__auto__,pred43797,acc43798){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect.call(null,pred43797,self__.free,datascript.parser.collect.call(null,pred43797,self__.required,acc43798));
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___25956__auto__,acc43798){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc43798,self__.required),self__.free);
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

datascript.parser.map__GT_RuleVars = (function datascript$parser$map__GT_RuleVars(G__43801){
return (new datascript.parser.RuleVars(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__43801),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(G__43801),null,cljs.core.dissoc.call(null,G__43801,new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)),null));
});

datascript.parser.parse_rule_vars = (function datascript$parser$parse_rule_vars(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__43808 = ((cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,form),cljs.core.next.call(null,form)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,form], null));
var required = cljs.core.nth.call(null,vec__43808,(0),null);
var rest = cljs.core.nth.call(null,vec__43808,(1),null);
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

datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k43813,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__43815 = k43813;
switch (G__43815) {
default:
return cljs.core.get.call(null,self__.__extmap,k43813,else__16961__auto__);

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

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43812){
var self__ = this;
var G__43812__$1 = this;
return (new cljs.core.RecordIter((0),G__43812__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
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

datascript.parser.BindIgnore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__43812){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__43816 = cljs.core.keyword_identical_QMARK_;
var expr__43817 = k__16966__auto__;
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__43812),null));
});

datascript.parser.BindIgnore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__43812){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.BindIgnore(G__43812,self__.__extmap,self__.__hash));
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

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__25953__auto__,f43809){
var self__ = this;
var this__25953__auto____$1 = this;
var new__25954__auto__ = (new datascript.parser.BindIgnore(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__25953__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__25955__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__25954__auto__,meta__25955__auto__);
} else {
return new__25954__auto__;
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___25956__auto__,pred43810,acc43811){
var self__ = this;
var ___25956__auto____$1 = this;
return acc43811;
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___25956__auto__,acc43811){
var self__ = this;
var ___25956__auto____$1 = this;
return acc43811;
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

datascript.parser.map__GT_BindIgnore = (function datascript$parser$map__GT_BindIgnore(G__43814){
return (new datascript.parser.BindIgnore(null,cljs.core.dissoc.call(null,G__43814),null));
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

datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k43824,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__43826 = (((k43824 instanceof cljs.core.Keyword))?k43824.fqn:null);
switch (G__43826) {
case "variable":
return self__.variable;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43824,else__16961__auto__);

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

datascript.parser.BindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43823){
var self__ = this;
var G__43823__$1 = this;
return (new cljs.core.RecordIter((0),G__43823__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

datascript.parser.BindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__43823){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__43827 = cljs.core.keyword_identical_QMARK_;
var expr__43828 = k__16966__auto__;
if(cljs.core.truth_(pred__43827.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__43828))){
return (new datascript.parser.BindScalar(G__43823,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__43823),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__43823){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,G__43823,self__.__extmap,self__.__hash));
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

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__25953__auto__,f43820){
var self__ = this;
var this__25953__auto____$1 = this;
var new__25954__auto__ = (new datascript.parser.BindScalar(datascript.parser.postwalk.call(null,self__.variable,f43820),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__25953__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__25955__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__25954__auto__,meta__25955__auto__);
} else {
return new__25954__auto__;
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___25956__auto__,pred43821,acc43822){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect.call(null,pred43821,self__.variable,acc43822);
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___25956__auto__,acc43822){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc43822,self__.variable);
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

datascript.parser.map__GT_BindScalar = (function datascript$parser$map__GT_BindScalar(G__43825){
return (new datascript.parser.BindScalar(new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__43825),null,cljs.core.dissoc.call(null,G__43825,new cljs.core.Keyword(null,"variable","variable",-281346492)),null));
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

datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k43835,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__43837 = (((k43835 instanceof cljs.core.Keyword))?k43835.fqn:null);
switch (G__43837) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43835,else__16961__auto__);

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

datascript.parser.BindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43834){
var self__ = this;
var G__43834__$1 = this;
return (new cljs.core.RecordIter((0),G__43834__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

datascript.parser.BindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__43834){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__43838 = cljs.core.keyword_identical_QMARK_;
var expr__43839 = k__16966__auto__;
if(cljs.core.truth_(pred__43838.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__43839))){
return (new datascript.parser.BindTuple(G__43834,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__43834),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__43834){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,G__43834,self__.__extmap,self__.__hash));
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

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__25953__auto__,f43831){
var self__ = this;
var this__25953__auto____$1 = this;
var new__25954__auto__ = (new datascript.parser.BindTuple(datascript.parser.postwalk.call(null,self__.bindings,f43831),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__25953__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__25955__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__25954__auto__,meta__25955__auto__);
} else {
return new__25954__auto__;
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___25956__auto__,pred43832,acc43833){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect.call(null,pred43832,self__.bindings,acc43833);
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___25956__auto__,acc43833){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc43833,self__.bindings);
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

datascript.parser.map__GT_BindTuple = (function datascript$parser$map__GT_BindTuple(G__43836){
return (new datascript.parser.BindTuple(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__43836),null,cljs.core.dissoc.call(null,G__43836,new cljs.core.Keyword(null,"bindings","bindings",1271397192)),null));
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

datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k43846,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__43848 = (((k43846 instanceof cljs.core.Keyword))?k43846.fqn:null);
switch (G__43848) {
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43846,else__16961__auto__);

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

datascript.parser.BindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43845){
var self__ = this;
var G__43845__$1 = this;
return (new cljs.core.RecordIter((0),G__43845__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binding","binding",539932593)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

datascript.parser.BindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__43845){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__43849 = cljs.core.keyword_identical_QMARK_;
var expr__43850 = k__16966__auto__;
if(cljs.core.truth_(pred__43849.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__43850))){
return (new datascript.parser.BindColl(G__43845,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__43845),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__43845){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,G__43845,self__.__extmap,self__.__hash));
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

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__25953__auto__,f43842){
var self__ = this;
var this__25953__auto____$1 = this;
var new__25954__auto__ = (new datascript.parser.BindColl(datascript.parser.postwalk.call(null,self__.binding,f43842),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__25953__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__25955__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__25954__auto__,meta__25955__auto__);
} else {
return new__25954__auto__;
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___25956__auto__,pred43843,acc43844){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect.call(null,pred43843,self__.binding,acc43844);
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___25956__auto__,acc43844){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc43844,self__.binding);
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

datascript.parser.map__GT_BindColl = (function datascript$parser$map__GT_BindColl(G__43847){
return (new datascript.parser.BindColl(new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__43847),null,cljs.core.dissoc.call(null,G__43847,new cljs.core.Keyword(null,"binding","binding",539932593)),null));
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

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k43857,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__43859 = (((k43857 instanceof cljs.core.Keyword))?k43857.fqn:null);
switch (G__43859) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43857,else__16961__auto__);

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

datascript.parser.Aggregate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43856){
var self__ = this;
var G__43856__$1 = this;
return (new cljs.core.RecordIter((0),G__43856__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

datascript.parser.Aggregate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__43856){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__43860 = cljs.core.keyword_identical_QMARK_;
var expr__43861 = k__16966__auto__;
if(cljs.core.truth_(pred__43860.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__43861))){
return (new datascript.parser.Aggregate(G__43856,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43860.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__43861))){
return (new datascript.parser.Aggregate(self__.fn,G__43856,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__43856),null));
}
}
});

datascript.parser.Aggregate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__43856){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,G__43856,self__.__extmap,self__.__hash));
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

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__25953__auto__,f43853){
var self__ = this;
var this__25953__auto____$1 = this;
var new__25954__auto__ = (new datascript.parser.Aggregate(datascript.parser.postwalk.call(null,self__.fn,f43853),datascript.parser.postwalk.call(null,self__.args,f43853),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__25953__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__25955__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__25954__auto__,meta__25955__auto__);
} else {
return new__25954__auto__;
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___25956__auto__,pred43854,acc43855){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect.call(null,pred43854,self__.args,datascript.parser.collect.call(null,pred43854,self__.fn,acc43855));
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___25956__auto__,acc43855){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc43855,self__.fn),self__.args);
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

datascript.parser.map__GT_Aggregate = (function datascript$parser$map__GT_Aggregate(G__43858){
return (new datascript.parser.Aggregate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__43858),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__43858),null,cljs.core.dissoc.call(null,G__43858,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
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

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k43868,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__43870 = (((k43868 instanceof cljs.core.Keyword))?k43868.fqn:null);
switch (G__43870) {
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
return cljs.core.get.call(null,self__.__extmap,k43868,else__16961__auto__);

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

datascript.parser.Pull.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43867){
var self__ = this;
var G__43867__$1 = this;
return (new cljs.core.RecordIter((0),G__43867__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

datascript.parser.Pull.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__43867){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__43871 = cljs.core.keyword_identical_QMARK_;
var expr__43872 = k__16966__auto__;
if(cljs.core.truth_(pred__43871.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__43872))){
return (new datascript.parser.Pull(G__43867,self__.variable,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43871.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__43872))){
return (new datascript.parser.Pull(self__.source,G__43867,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43871.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__43872))){
return (new datascript.parser.Pull(self__.source,self__.variable,G__43867,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__43867),null));
}
}
}
});

datascript.parser.Pull.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__43867){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,G__43867,self__.__extmap,self__.__hash));
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

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__25953__auto__,f43864){
var self__ = this;
var this__25953__auto____$1 = this;
var new__25954__auto__ = (new datascript.parser.Pull(datascript.parser.postwalk.call(null,self__.source,f43864),datascript.parser.postwalk.call(null,self__.variable,f43864),datascript.parser.postwalk.call(null,self__.pattern,f43864),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__25953__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__25955__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__25954__auto__,meta__25955__auto__);
} else {
return new__25954__auto__;
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___25956__auto__,pred43865,acc43866){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect.call(null,pred43865,self__.pattern,datascript.parser.collect.call(null,pred43865,self__.variable,datascript.parser.collect.call(null,pred43865,self__.source,acc43866)));
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___25956__auto__,acc43866){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc43866,self__.source),self__.variable),self__.pattern);
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

datascript.parser.map__GT_Pull = (function datascript$parser$map__GT_Pull(G__43869){
return (new datascript.parser.Pull(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__43869),new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__43869),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__43869),null,cljs.core.dissoc.call(null,G__43869,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
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

datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k43879,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__43881 = (((k43879 instanceof cljs.core.Keyword))?k43879.fqn:null);
switch (G__43881) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43879,else__16961__auto__);

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

datascript.parser.FindRel.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43878){
var self__ = this;
var G__43878__$1 = this;
return (new cljs.core.RecordIter((0),G__43878__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

datascript.parser.FindRel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__43878){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__43882 = cljs.core.keyword_identical_QMARK_;
var expr__43883 = k__16966__auto__;
if(cljs.core.truth_(pred__43882.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__43883))){
return (new datascript.parser.FindRel(G__43878,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__43878),null));
}
});

datascript.parser.FindRel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__43878){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,G__43878,self__.__extmap,self__.__hash));
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

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__25953__auto__,f43875){
var self__ = this;
var this__25953__auto____$1 = this;
var new__25954__auto__ = (new datascript.parser.FindRel(datascript.parser.postwalk.call(null,self__.elements,f43875),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__25953__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__25955__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__25954__auto__,meta__25955__auto__);
} else {
return new__25954__auto__;
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___25956__auto__,pred43876,acc43877){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect.call(null,pred43876,self__.elements,acc43877);
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___25956__auto__,acc43877){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc43877,self__.elements);
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

datascript.parser.map__GT_FindRel = (function datascript$parser$map__GT_FindRel(G__43880){
return (new datascript.parser.FindRel(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__43880),null,cljs.core.dissoc.call(null,G__43880,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
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

datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k43890,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__43892 = (((k43890 instanceof cljs.core.Keyword))?k43890.fqn:null);
switch (G__43892) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43890,else__16961__auto__);

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

datascript.parser.FindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43889){
var self__ = this;
var G__43889__$1 = this;
return (new cljs.core.RecordIter((0),G__43889__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

datascript.parser.FindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__43889){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__43893 = cljs.core.keyword_identical_QMARK_;
var expr__43894 = k__16966__auto__;
if(cljs.core.truth_(pred__43893.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__43894))){
return (new datascript.parser.FindColl(G__43889,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__43889),null));
}
});

datascript.parser.FindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__43889){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,G__43889,self__.__extmap,self__.__hash));
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

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__25953__auto__,f43886){
var self__ = this;
var this__25953__auto____$1 = this;
var new__25954__auto__ = (new datascript.parser.FindColl(datascript.parser.postwalk.call(null,self__.element,f43886),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__25953__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__25955__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__25954__auto__,meta__25955__auto__);
} else {
return new__25954__auto__;
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___25956__auto__,pred43887,acc43888){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect.call(null,pred43887,self__.element,acc43888);
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___25956__auto__,acc43888){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc43888,self__.element);
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

datascript.parser.map__GT_FindColl = (function datascript$parser$map__GT_FindColl(G__43891){
return (new datascript.parser.FindColl(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__43891),null,cljs.core.dissoc.call(null,G__43891,new cljs.core.Keyword(null,"element","element",1974019749)),null));
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

datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k43901,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__43903 = (((k43901 instanceof cljs.core.Keyword))?k43901.fqn:null);
switch (G__43903) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43901,else__16961__auto__);

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

datascript.parser.FindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43900){
var self__ = this;
var G__43900__$1 = this;
return (new cljs.core.RecordIter((0),G__43900__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

datascript.parser.FindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__43900){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__43904 = cljs.core.keyword_identical_QMARK_;
var expr__43905 = k__16966__auto__;
if(cljs.core.truth_(pred__43904.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__43905))){
return (new datascript.parser.FindScalar(G__43900,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__43900),null));
}
});

datascript.parser.FindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__43900){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,G__43900,self__.__extmap,self__.__hash));
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

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__25953__auto__,f43897){
var self__ = this;
var this__25953__auto____$1 = this;
var new__25954__auto__ = (new datascript.parser.FindScalar(datascript.parser.postwalk.call(null,self__.element,f43897),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__25953__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__25955__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__25954__auto__,meta__25955__auto__);
} else {
return new__25954__auto__;
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___25956__auto__,pred43898,acc43899){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect.call(null,pred43898,self__.element,acc43899);
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___25956__auto__,acc43899){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc43899,self__.element);
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

datascript.parser.map__GT_FindScalar = (function datascript$parser$map__GT_FindScalar(G__43902){
return (new datascript.parser.FindScalar(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__43902),null,cljs.core.dissoc.call(null,G__43902,new cljs.core.Keyword(null,"element","element",1974019749)),null));
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

datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k43912,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__43914 = (((k43912 instanceof cljs.core.Keyword))?k43912.fqn:null);
switch (G__43914) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43912,else__16961__auto__);

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

datascript.parser.FindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43911){
var self__ = this;
var G__43911__$1 = this;
return (new cljs.core.RecordIter((0),G__43911__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

datascript.parser.FindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__43911){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__43915 = cljs.core.keyword_identical_QMARK_;
var expr__43916 = k__16966__auto__;
if(cljs.core.truth_(pred__43915.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__43916))){
return (new datascript.parser.FindTuple(G__43911,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__43911),null));
}
});

datascript.parser.FindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__43911){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,G__43911,self__.__extmap,self__.__hash));
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

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__25953__auto__,f43908){
var self__ = this;
var this__25953__auto____$1 = this;
var new__25954__auto__ = (new datascript.parser.FindTuple(datascript.parser.postwalk.call(null,self__.elements,f43908),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__25953__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__25955__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__25954__auto__,meta__25955__auto__);
} else {
return new__25954__auto__;
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___25956__auto__,pred43909,acc43910){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect.call(null,pred43909,self__.elements,acc43910);
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___25956__auto__,acc43910){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc43910,self__.elements);
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

datascript.parser.map__GT_FindTuple = (function datascript$parser$map__GT_FindTuple(G__43913){
return (new datascript.parser.FindTuple(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__43913),null,cljs.core.dissoc.call(null,G__43913,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
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
var vec__43920 = form;
var fn = cljs.core.nth.call(null,vec__43920,(0),null);
var args = cljs.core.nthnext.call(null,vec__43920,(1));
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
var vec__43922 = form;
var _ = cljs.core.nth.call(null,vec__43922,(0),null);
var fn = cljs.core.nth.call(null,vec__43922,(1),null);
var args = cljs.core.nthnext.call(null,vec__43922,(2));
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
var vec__43924 = ((long_QMARK_)?cljs.core.nnext.call(null,form):cljs.core.next.call(null,form));
var var$ = cljs.core.nth.call(null,vec__43924,(0),null);
var pattern = cljs.core.nth.call(null,vec__43924,(1),null);
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
var G__43926 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,form);
var G__43926__$1 = (((G__43926 == null))?null:(new datascript.parser.FindRel(G__43926,null,null,null)));
return G__43926__$1;
});
datascript.parser.parse_find_coll = (function datascript$parser$parse_find_coll(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
if((cljs.core.sequential_QMARK_.call(null,inner)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,inner),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,inner),new cljs.core.Symbol(null,"...","...",-1926939749,null)))){
var G__43928 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,inner));
var G__43928__$1 = (((G__43928 == null))?null:(new datascript.parser.FindColl(G__43928,null,null,null)));
return G__43928__$1;
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_find_scalar = (function datascript$parser$parse_find_scalar(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,".",".",1975675962,null)))){
var G__43930 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,form));
var G__43930__$1 = (((G__43930 == null))?null:(new datascript.parser.FindScalar(G__43930,null,null,null)));
return G__43930__$1;
} else {
return null;
}
});
datascript.parser.parse_find_tuple = (function datascript$parser$parse_find_tuple(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
var G__43932 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,inner);
var G__43932__$1 = (((G__43932 == null))?null:(new datascript.parser.FindTuple(G__43932,null,null,null)));
return G__43932__$1;
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

datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k43937,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__43939 = (((k43937 instanceof cljs.core.Keyword))?k43937.fqn:null);
switch (G__43939) {
case "source":
return self__.source;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43937,else__16961__auto__);

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

datascript.parser.Pattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43936){
var self__ = this;
var G__43936__$1 = this;
return (new cljs.core.RecordIter((0),G__43936__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

datascript.parser.Pattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__43936){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__43940 = cljs.core.keyword_identical_QMARK_;
var expr__43941 = k__16966__auto__;
if(cljs.core.truth_(pred__43940.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__43941))){
return (new datascript.parser.Pattern(G__43936,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43940.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__43941))){
return (new datascript.parser.Pattern(self__.source,G__43936,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__43936),null));
}
}
});

datascript.parser.Pattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__43936){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,G__43936,self__.__extmap,self__.__hash));
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

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__25953__auto__,f43933){
var self__ = this;
var this__25953__auto____$1 = this;
var new__25954__auto__ = (new datascript.parser.Pattern(datascript.parser.postwalk.call(null,self__.source,f43933),datascript.parser.postwalk.call(null,self__.pattern,f43933),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__25953__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__25955__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__25954__auto__,meta__25955__auto__);
} else {
return new__25954__auto__;
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___25956__auto__,pred43934,acc43935){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect.call(null,pred43934,self__.pattern,datascript.parser.collect.call(null,pred43934,self__.source,acc43935));
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___25956__auto__,acc43935){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc43935,self__.source),self__.pattern);
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

datascript.parser.map__GT_Pattern = (function datascript$parser$map__GT_Pattern(G__43938){
return (new datascript.parser.Pattern(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__43938),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__43938),null,cljs.core.dissoc.call(null,G__43938,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
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

datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k43948,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__43950 = (((k43948 instanceof cljs.core.Keyword))?k43948.fqn:null);
switch (G__43950) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43948,else__16961__auto__);

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

datascript.parser.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43947){
var self__ = this;
var G__43947__$1 = this;
return (new cljs.core.RecordIter((0),G__43947__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

datascript.parser.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__43947){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__43951 = cljs.core.keyword_identical_QMARK_;
var expr__43952 = k__16966__auto__;
if(cljs.core.truth_(pred__43951.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__43952))){
return (new datascript.parser.Predicate(G__43947,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43951.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__43952))){
return (new datascript.parser.Predicate(self__.fn,G__43947,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__43947),null));
}
}
});

datascript.parser.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__43947){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,G__43947,self__.__extmap,self__.__hash));
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

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__25953__auto__,f43944){
var self__ = this;
var this__25953__auto____$1 = this;
var new__25954__auto__ = (new datascript.parser.Predicate(datascript.parser.postwalk.call(null,self__.fn,f43944),datascript.parser.postwalk.call(null,self__.args,f43944),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__25953__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__25955__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__25954__auto__,meta__25955__auto__);
} else {
return new__25954__auto__;
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___25956__auto__,pred43945,acc43946){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect.call(null,pred43945,self__.args,datascript.parser.collect.call(null,pred43945,self__.fn,acc43946));
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___25956__auto__,acc43946){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc43946,self__.fn),self__.args);
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

datascript.parser.map__GT_Predicate = (function datascript$parser$map__GT_Predicate(G__43949){
return (new datascript.parser.Predicate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__43949),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__43949),null,cljs.core.dissoc.call(null,G__43949,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
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

datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k43959,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__43961 = (((k43959 instanceof cljs.core.Keyword))?k43959.fqn:null);
switch (G__43961) {
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
return cljs.core.get.call(null,self__.__extmap,k43959,else__16961__auto__);

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

datascript.parser.Function.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43958){
var self__ = this;
var G__43958__$1 = this;
return (new cljs.core.RecordIter((0),G__43958__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

datascript.parser.Function.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__43958){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__43962 = cljs.core.keyword_identical_QMARK_;
var expr__43963 = k__16966__auto__;
if(cljs.core.truth_(pred__43962.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__43963))){
return (new datascript.parser.Function(G__43958,self__.args,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43962.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__43963))){
return (new datascript.parser.Function(self__.fn,G__43958,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43962.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__43963))){
return (new datascript.parser.Function(self__.fn,self__.args,G__43958,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__43958),null));
}
}
}
});

datascript.parser.Function.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__43958){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,G__43958,self__.__extmap,self__.__hash));
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

datascript.parser.Function.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__25953__auto__,f43955){
var self__ = this;
var this__25953__auto____$1 = this;
var new__25954__auto__ = (new datascript.parser.Function(datascript.parser.postwalk.call(null,self__.fn,f43955),datascript.parser.postwalk.call(null,self__.args,f43955),datascript.parser.postwalk.call(null,self__.binding,f43955),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__25953__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__25955__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__25954__auto__,meta__25955__auto__);
} else {
return new__25954__auto__;
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___25956__auto__,pred43956,acc43957){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect.call(null,pred43956,self__.binding,datascript.parser.collect.call(null,pred43956,self__.args,datascript.parser.collect.call(null,pred43956,self__.fn,acc43957)));
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___25956__auto__,acc43957){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc43957,self__.fn),self__.args),self__.binding);
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

datascript.parser.map__GT_Function = (function datascript$parser$map__GT_Function(G__43960){
return (new datascript.parser.Function(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__43960),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__43960),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__43960),null,cljs.core.dissoc.call(null,G__43960,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)),null));
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

datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k43970,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__43972 = (((k43970 instanceof cljs.core.Keyword))?k43970.fqn:null);
switch (G__43972) {
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
return cljs.core.get.call(null,self__.__extmap,k43970,else__16961__auto__);

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

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43969){
var self__ = this;
var G__43969__$1 = this;
return (new cljs.core.RecordIter((0),G__43969__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

datascript.parser.RuleExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__43969){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__43973 = cljs.core.keyword_identical_QMARK_;
var expr__43974 = k__16966__auto__;
if(cljs.core.truth_(pred__43973.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__43974))){
return (new datascript.parser.RuleExpr(G__43969,self__.name,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43973.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__43974))){
return (new datascript.parser.RuleExpr(self__.source,G__43969,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43973.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__43974))){
return (new datascript.parser.RuleExpr(self__.source,self__.name,G__43969,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__43969),null));
}
}
}
});

datascript.parser.RuleExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__43969){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,G__43969,self__.__extmap,self__.__hash));
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

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__25953__auto__,f43966){
var self__ = this;
var this__25953__auto____$1 = this;
var new__25954__auto__ = (new datascript.parser.RuleExpr(datascript.parser.postwalk.call(null,self__.source,f43966),datascript.parser.postwalk.call(null,self__.name,f43966),datascript.parser.postwalk.call(null,self__.args,f43966),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__25953__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__25955__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__25954__auto__,meta__25955__auto__);
} else {
return new__25954__auto__;
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___25956__auto__,pred43967,acc43968){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect.call(null,pred43967,self__.args,datascript.parser.collect.call(null,pred43967,self__.name,datascript.parser.collect.call(null,pred43967,self__.source,acc43968)));
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___25956__auto__,acc43968){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc43968,self__.source),self__.name),self__.args);
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

datascript.parser.map__GT_RuleExpr = (function datascript$parser$map__GT_RuleExpr(G__43971){
return (new datascript.parser.RuleExpr(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__43971),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__43971),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__43971),null,cljs.core.dissoc.call(null,G__43971,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)),null));
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

datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k43981,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__43983 = (((k43981 instanceof cljs.core.Keyword))?k43981.fqn:null);
switch (G__43983) {
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
return cljs.core.get.call(null,self__.__extmap,k43981,else__16961__auto__);

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

datascript.parser.Not.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43980){
var self__ = this;
var G__43980__$1 = this;
return (new cljs.core.RecordIter((0),G__43980__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

datascript.parser.Not.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__43980){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__43984 = cljs.core.keyword_identical_QMARK_;
var expr__43985 = k__16966__auto__;
if(cljs.core.truth_(pred__43984.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__43985))){
return (new datascript.parser.Not(G__43980,self__.vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43984.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__43985))){
return (new datascript.parser.Not(self__.source,G__43980,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43984.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__43985))){
return (new datascript.parser.Not(self__.source,self__.vars,G__43980,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__43980),null));
}
}
}
});

datascript.parser.Not.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__43980){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,G__43980,self__.__extmap,self__.__hash));
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

datascript.parser.Not.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__25953__auto__,f43977){
var self__ = this;
var this__25953__auto____$1 = this;
var new__25954__auto__ = (new datascript.parser.Not(datascript.parser.postwalk.call(null,self__.source,f43977),datascript.parser.postwalk.call(null,self__.vars,f43977),datascript.parser.postwalk.call(null,self__.clauses,f43977),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__25953__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__25955__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__25954__auto__,meta__25955__auto__);
} else {
return new__25954__auto__;
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___25956__auto__,pred43978,acc43979){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect.call(null,pred43978,self__.clauses,datascript.parser.collect.call(null,pred43978,self__.vars,datascript.parser.collect.call(null,pred43978,self__.source,acc43979)));
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___25956__auto__,acc43979){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc43979,self__.source),self__.vars),self__.clauses);
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

datascript.parser.map__GT_Not = (function datascript$parser$map__GT_Not(G__43982){
return (new datascript.parser.Not(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__43982),new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__43982),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__43982),null,cljs.core.dissoc.call(null,G__43982,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
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

datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k43992,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__43994 = (((k43992 instanceof cljs.core.Keyword))?k43992.fqn:null);
switch (G__43994) {
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
return cljs.core.get.call(null,self__.__extmap,k43992,else__16961__auto__);

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

datascript.parser.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43991){
var self__ = this;
var G__43991__$1 = this;
return (new cljs.core.RecordIter((0),G__43991__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

datascript.parser.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__43991){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__43995 = cljs.core.keyword_identical_QMARK_;
var expr__43996 = k__16966__auto__;
if(cljs.core.truth_(pred__43995.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__43996))){
return (new datascript.parser.Or(G__43991,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43995.call(null,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),expr__43996))){
return (new datascript.parser.Or(self__.source,G__43991,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43995.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__43996))){
return (new datascript.parser.Or(self__.source,self__.rule_vars,G__43991,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__43991),null));
}
}
}
});

datascript.parser.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__43991){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,G__43991,self__.__extmap,self__.__hash));
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

datascript.parser.Or.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__25953__auto__,f43988){
var self__ = this;
var this__25953__auto____$1 = this;
var new__25954__auto__ = (new datascript.parser.Or(datascript.parser.postwalk.call(null,self__.source,f43988),datascript.parser.postwalk.call(null,self__.rule_vars,f43988),datascript.parser.postwalk.call(null,self__.clauses,f43988),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__25953__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__25955__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__25954__auto__,meta__25955__auto__);
} else {
return new__25954__auto__;
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___25956__auto__,pred43989,acc43990){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect.call(null,pred43989,self__.clauses,datascript.parser.collect.call(null,pred43989,self__.rule_vars,datascript.parser.collect.call(null,pred43989,self__.source,acc43990)));
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___25956__auto__,acc43990){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc43990,self__.source),self__.rule_vars),self__.clauses);
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

datascript.parser.map__GT_Or = (function datascript$parser$map__GT_Or(G__43993){
return (new datascript.parser.Or(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__43993),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(G__43993),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__43993),null,cljs.core.dissoc.call(null,G__43993,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
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

datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k44003,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__44005 = (((k44003 instanceof cljs.core.Keyword))?k44003.fqn:null);
switch (G__44005) {
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k44003,else__16961__auto__);

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

datascript.parser.And.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44002){
var self__ = this;
var G__44002__$1 = this;
return (new cljs.core.RecordIter((0),G__44002__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

datascript.parser.And.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__44002){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__44006 = cljs.core.keyword_identical_QMARK_;
var expr__44007 = k__16966__auto__;
if(cljs.core.truth_(pred__44006.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__44007))){
return (new datascript.parser.And(G__44002,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__44002),null));
}
});

datascript.parser.And.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__44002){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,G__44002,self__.__extmap,self__.__hash));
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

datascript.parser.And.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__25953__auto__,f43999){
var self__ = this;
var this__25953__auto____$1 = this;
var new__25954__auto__ = (new datascript.parser.And(datascript.parser.postwalk.call(null,self__.clauses,f43999),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__25953__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__25955__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__25954__auto__,meta__25955__auto__);
} else {
return new__25954__auto__;
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___25956__auto__,pred44000,acc44001){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect.call(null,pred44000,self__.clauses,acc44001);
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___25956__auto__,acc44001){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc44001,self__.clauses);
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

datascript.parser.map__GT_And = (function datascript$parser$map__GT_And(G__44004){
return (new datascript.parser.And(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__44004),null,cljs.core.dissoc.call(null,G__44004,new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
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
var vec__44011 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__44011,(0),null);
var next_form = cljs.core.nth.call(null,vec__44011,(1),null);
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
var vec__44013 = form;
var fn = cljs.core.nth.call(null,vec__44013,(0),null);
var args = cljs.core.nthnext.call(null,vec__44013,(1));
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
var vec__44015 = temp__4425__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__44015,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__44015,(1),null);
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
var vec__44018 = form;
var call = cljs.core.nth.call(null,vec__44018,(0),null);
var binding = cljs.core.nth.call(null,vec__44018,(1),null);
var temp__4425__auto__ = datascript.parser.parse_call.call(null,call);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__44019 = temp__4425__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__44019,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__44019,(1),null);
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
var vec__44022 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__44022,(0),null);
var next_form = cljs.core.nth.call(null,vec__44022,(1),null);
var vec__44023 = next_form;
var name = cljs.core.nth.call(null,vec__44023,(0),null);
var args = cljs.core.nthnext.call(null,vec__44023,(1));
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
var undeclared_44026 = clojure.set.difference.call(null,cljs.core.set.call(null,vars),cljs.core.set.call(null,datascript.parser.collect_vars.call(null,clauses)));
if(cljs.core.empty_QMARK_.call(null,undeclared_44026)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Join variable not declared inside clauses: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_44026)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
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
var vec__44029 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__44029,(0),null);
var next_form = cljs.core.nth.call(null,vec__44029,(1),null);
var vec__44030 = next_form;
var sym = cljs.core.nth.call(null,vec__44030,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__44030,(1));
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
var vec__44033 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__44033,(0),null);
var next_form = cljs.core.nth.call(null,vec__44033,(1),null);
var vec__44034 = next_form;
var sym = cljs.core.nth.call(null,vec__44034,(0),null);
var vars = cljs.core.nth.call(null,vec__44034,(1),null);
var clauses = cljs.core.nthnext.call(null,vec__44034,(2));
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
var map__44043 = clause;
var map__44043__$1 = ((((!((map__44043 == null)))?((((map__44043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44043):map__44043);
var map__44044 = cljs.core.get.call(null,map__44043__$1,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520));
var map__44044__$1 = ((((!((map__44044 == null)))?((((map__44044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44044):map__44044);
var required = cljs.core.get.call(null,map__44044__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var free = cljs.core.get.call(null,map__44044__$1,new cljs.core.Keyword(null,"free","free",801364328));
var clauses = cljs.core.get.call(null,map__44043__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var vars = cljs.core.concat.call(null,required,free);
var seq__44047_44051 = cljs.core.seq.call(null,clauses);
var chunk__44048_44052 = null;
var count__44049_44053 = (0);
var i__44050_44054 = (0);
while(true){
if((i__44050_44054 < count__44049_44053)){
var clause_44055__$1 = cljs.core._nth.call(null,chunk__44048_44052,i__44050_44054);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_44055__$1], null),form);

var G__44056 = seq__44047_44051;
var G__44057 = chunk__44048_44052;
var G__44058 = count__44049_44053;
var G__44059 = (i__44050_44054 + (1));
seq__44047_44051 = G__44056;
chunk__44048_44052 = G__44057;
count__44049_44053 = G__44058;
i__44050_44054 = G__44059;
continue;
} else {
var temp__4425__auto___44060 = cljs.core.seq.call(null,seq__44047_44051);
if(temp__4425__auto___44060){
var seq__44047_44061__$1 = temp__4425__auto___44060;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44047_44061__$1)){
var c__17147__auto___44062 = cljs.core.chunk_first.call(null,seq__44047_44061__$1);
var G__44063 = cljs.core.chunk_rest.call(null,seq__44047_44061__$1);
var G__44064 = c__17147__auto___44062;
var G__44065 = cljs.core.count.call(null,c__17147__auto___44062);
var G__44066 = (0);
seq__44047_44051 = G__44063;
chunk__44048_44052 = G__44064;
count__44049_44053 = G__44065;
i__44050_44054 = G__44066;
continue;
} else {
var clause_44067__$1 = cljs.core.first.call(null,seq__44047_44061__$1);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_44067__$1], null),form);

var G__44068 = cljs.core.next.call(null,seq__44047_44061__$1);
var G__44069 = null;
var G__44070 = (0);
var G__44071 = (0);
seq__44047_44051 = G__44068;
chunk__44048_44052 = G__44069;
count__44049_44053 = G__44070;
i__44050_44054 = G__44071;
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
var vec__44074 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__44074,(0),null);
var next_form = cljs.core.nth.call(null,vec__44074,(1),null);
var vec__44075 = next_form;
var sym = cljs.core.nth.call(null,vec__44075,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__44075,(1));
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
var vec__44078 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__44078,(0),null);
var next_form = cljs.core.nth.call(null,vec__44078,(1),null);
var vec__44079 = next_form;
var sym = cljs.core.nth.call(null,vec__44079,(0),null);
var vars = cljs.core.nth.call(null,vec__44079,(1),null);
var clauses = cljs.core.nthnext.call(null,vec__44079,(2));
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

datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k44085,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__44087 = (((k44085 instanceof cljs.core.Keyword))?k44085.fqn:null);
switch (G__44087) {
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k44085,else__16961__auto__);

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

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44084){
var self__ = this;
var G__44084__$1 = this;
return (new cljs.core.RecordIter((0),G__44084__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

datascript.parser.RuleBranch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__44084){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__44088 = cljs.core.keyword_identical_QMARK_;
var expr__44089 = k__16966__auto__;
if(cljs.core.truth_(pred__44088.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__44089))){
return (new datascript.parser.RuleBranch(G__44084,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44088.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__44089))){
return (new datascript.parser.RuleBranch(self__.vars,G__44084,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__44084),null));
}
}
});

datascript.parser.RuleBranch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__44084){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,G__44084,self__.__extmap,self__.__hash));
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

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__25953__auto__,f44081){
var self__ = this;
var this__25953__auto____$1 = this;
var new__25954__auto__ = (new datascript.parser.RuleBranch(datascript.parser.postwalk.call(null,self__.vars,f44081),datascript.parser.postwalk.call(null,self__.clauses,f44081),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__25953__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__25955__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__25954__auto__,meta__25955__auto__);
} else {
return new__25954__auto__;
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___25956__auto__,pred44082,acc44083){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect.call(null,pred44082,self__.clauses,datascript.parser.collect.call(null,pred44082,self__.vars,acc44083));
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___25956__auto__,acc44083){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc44083,self__.vars),self__.clauses);
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

datascript.parser.map__GT_RuleBranch = (function datascript$parser$map__GT_RuleBranch(G__44086){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__44086),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__44086),null,cljs.core.dissoc.call(null,G__44086,new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
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

datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k44096,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__44098 = (((k44096 instanceof cljs.core.Keyword))?k44096.fqn:null);
switch (G__44098) {
case "name":
return self__.name;

break;
case "branches":
return self__.branches;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k44096,else__16961__auto__);

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

datascript.parser.Rule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44095){
var self__ = this;
var G__44095__$1 = this;
return (new cljs.core.RecordIter((0),G__44095__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

datascript.parser.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__44095){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__44099 = cljs.core.keyword_identical_QMARK_;
var expr__44100 = k__16966__auto__;
if(cljs.core.truth_(pred__44099.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__44100))){
return (new datascript.parser.Rule(G__44095,self__.branches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44099.call(null,new cljs.core.Keyword(null,"branches","branches",-1240337268),expr__44100))){
return (new datascript.parser.Rule(self__.name,G__44095,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__44095),null));
}
}
});

datascript.parser.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__44095){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,G__44095,self__.__extmap,self__.__hash));
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

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__25953__auto__,f44092){
var self__ = this;
var this__25953__auto____$1 = this;
var new__25954__auto__ = (new datascript.parser.Rule(datascript.parser.postwalk.call(null,self__.name,f44092),datascript.parser.postwalk.call(null,self__.branches,f44092),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__25953__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__25955__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__25954__auto__,meta__25955__auto__);
} else {
return new__25954__auto__;
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___25956__auto__,pred44093,acc44094){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect.call(null,pred44093,self__.branches,datascript.parser.collect.call(null,pred44093,self__.name,acc44094));
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___25956__auto__,acc44094){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc44094,self__.name),self__.branches);
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

datascript.parser.map__GT_Rule = (function datascript$parser$map__GT_Rule(G__44097){
return (new datascript.parser.Rule(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__44097),new cljs.core.Keyword(null,"branches","branches",-1240337268).cljs$core$IFn$_invoke$arity$1(G__44097),null,cljs.core.dissoc.call(null,G__44097,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)),null));
});

datascript.parser.validate_vars = (function datascript$parser$validate_vars(vars,clauses,form){
var declared_vars = datascript.parser.collect.call(null,(function (p1__44103_SHARP_){
return (p1__44103_SHARP_ instanceof datascript.parser.Variable);
}),vars,cljs.core.PersistentHashSet.EMPTY);
var used_vars = datascript.parser.collect.call(null,((function (declared_vars){
return (function (p1__44104_SHARP_){
return (p1__44104_SHARP_ instanceof datascript.parser.Variable);
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
var vec__44107 = form;
var head = cljs.core.nth.call(null,vec__44107,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__44107,(1));
if(cljs.core.sequential_QMARK_.call(null,head)){
var vec__44108 = head;
var name = cljs.core.nth.call(null,vec__44108,(0),null);
var vars = cljs.core.nthnext.call(null,vec__44108,(1));
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
var seq__44115 = cljs.core.seq.call(null,cljs.core.next.call(null,branches));
var chunk__44117 = null;
var count__44118 = (0);
var i__44119 = (0);
while(true){
if((i__44119 < count__44118)){
var b = cljs.core._nth.call(null,chunk__44117,i__44119);
var vars_44121 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_44121))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Arity mismatch for rule '"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str("': "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str(" vs. "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_44121)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__44122 = seq__44115;
var G__44123 = chunk__44117;
var G__44124 = count__44118;
var G__44125 = (i__44119 + (1));
seq__44115 = G__44122;
chunk__44117 = G__44123;
count__44118 = G__44124;
i__44119 = G__44125;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__44115);
if(temp__4425__auto__){
var seq__44115__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44115__$1)){
var c__17147__auto__ = cljs.core.chunk_first.call(null,seq__44115__$1);
var G__44126 = cljs.core.chunk_rest.call(null,seq__44115__$1);
var G__44127 = c__17147__auto__;
var G__44128 = cljs.core.count.call(null,c__17147__auto__);
var G__44129 = (0);
seq__44115 = G__44126;
chunk__44117 = G__44127;
count__44118 = G__44128;
i__44119 = G__44129;
continue;
} else {
var b = cljs.core.first.call(null,seq__44115__$1);
var vars_44130 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_44130))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Arity mismatch for rule '"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str("': "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str(" vs. "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_44130)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__44131 = cljs.core.next.call(null,seq__44115__$1);
var G__44132 = null;
var G__44133 = (0);
var G__44134 = (0);
seq__44115 = G__44131;
chunk__44117 = G__44132;
count__44118 = G__44133;
i__44119 = G__44134;
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
return cljs.core.vec.call(null,(function (){var iter__17116__auto__ = (function datascript$parser$parse_rules_$_iter__44144(s__44145){
return (new cljs.core.LazySeq(null,(function (){
var s__44145__$1 = s__44145;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__44145__$1);
if(temp__4425__auto__){
var s__44145__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44145__$2)){
var c__17114__auto__ = cljs.core.chunk_first.call(null,s__44145__$2);
var size__17115__auto__ = cljs.core.count.call(null,c__17114__auto__);
var b__44147 = cljs.core.chunk_buffer.call(null,size__17115__auto__);
if((function (){var i__44146 = (0);
while(true){
if((i__44146 < size__17115__auto__)){
var vec__44150 = cljs.core._nth.call(null,c__17114__auto__,i__44146);
var name = cljs.core.nth.call(null,vec__44150,(0),null);
var branches = cljs.core.nth.call(null,vec__44150,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (i__44146,vec__44150,name,branches,c__17114__auto__,size__17115__auto__,b__44147,s__44145__$2,temp__4425__auto__){
return (function (p1__44135_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__44135_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__44135_SHARP_),null,null,null));
});})(i__44146,vec__44150,name,branches,c__17114__auto__,size__17115__auto__,b__44147,s__44145__$2,temp__4425__auto__))
,branches);
cljs.core.chunk_append.call(null,b__44147,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
);

var G__44152 = (i__44146 + (1));
i__44146 = G__44152;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44147),datascript$parser$parse_rules_$_iter__44144.call(null,cljs.core.chunk_rest.call(null,s__44145__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44147),null);
}
} else {
var vec__44151 = cljs.core.first.call(null,s__44145__$2);
var name = cljs.core.nth.call(null,vec__44151,(0),null);
var branches = cljs.core.nth.call(null,vec__44151,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (vec__44151,name,branches,s__44145__$2,temp__4425__auto__){
return (function (p1__44135_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__44135_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__44135_SHARP_),null,null,null));
});})(vec__44151,name,branches,s__44145__$2,temp__4425__auto__))
,branches);
return cljs.core.cons.call(null,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
,datascript$parser$parse_rules_$_iter__44144.call(null,cljs.core.rest.call(null,s__44145__$2)));
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

datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k44157,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__44159 = (((k44157 instanceof cljs.core.Keyword))?k44157.fqn:null);
switch (G__44159) {
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
return cljs.core.get.call(null,self__.__extmap,k44157,else__16961__auto__);

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

datascript.parser.Query.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44156){
var self__ = this;
var G__44156__$1 = this;
return (new cljs.core.RecordIter((0),G__44156__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"where","where",-2044795965)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

datascript.parser.Query.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__44156){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__44160 = cljs.core.keyword_identical_QMARK_;
var expr__44161 = k__16966__auto__;
if(cljs.core.truth_(pred__44160.call(null,new cljs.core.Keyword(null,"find","find",496279456),expr__44161))){
return (new datascript.parser.Query(G__44156,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44160.call(null,new cljs.core.Keyword(null,"with","with",-1536296876),expr__44161))){
return (new datascript.parser.Query(self__.find,G__44156,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44160.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__44161))){
return (new datascript.parser.Query(self__.find,self__.with$,G__44156,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44160.call(null,new cljs.core.Keyword(null,"where","where",-2044795965),expr__44161))){
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,G__44156,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__44156),null));
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

datascript.parser.Query.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__44156){
var self__ = this;
var this__16957__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,G__44156,self__.__extmap,self__.__hash));
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

datascript.parser.Query.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__25953__auto__,f44153){
var self__ = this;
var this__25953__auto____$1 = this;
var new__25954__auto__ = (new datascript.parser.Query(datascript.parser.postwalk.call(null,self__.find,f44153),datascript.parser.postwalk.call(null,self__.with$,f44153),datascript.parser.postwalk.call(null,self__.in$,f44153),datascript.parser.postwalk.call(null,self__.where,f44153),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__25953__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__25955__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__25954__auto__,meta__25955__auto__);
} else {
return new__25954__auto__;
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___25956__auto__,pred44154,acc44155){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect.call(null,pred44154,self__.where,datascript.parser.collect.call(null,pred44154,self__.in$,datascript.parser.collect.call(null,pred44154,self__.with$,datascript.parser.collect.call(null,pred44154,self__.find,acc44155))));
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___25956__auto__,acc44155){
var self__ = this;
var ___25956__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc44155,self__.find),self__.with$),self__.in$),self__.where);
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

datascript.parser.map__GT_Query = (function datascript$parser$map__GT_Query(G__44158){
return (new datascript.parser.Query(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(G__44158),new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(G__44158),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__44158),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(G__44158),null,cljs.core.dissoc.call(null,G__44158,new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"where","where",-2044795965)),null));
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
var G__44164 = parsed;
var G__44165 = q;
var G__44166 = cljs.core.next.call(null,qs);
parsed = G__44164;
key = G__44165;
qs = G__44166;
continue;
} else {
var G__44167 = cljs.core.update_in.call(null,parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__44168 = key;
var G__44169 = cljs.core.next.call(null,qs);
parsed = G__44167;
key = G__44168;
qs = G__44169;
continue;
}
} else {
return parsed;
}
break;
}
});
datascript.parser.validate_query = (function datascript$parser$validate_query(q,form){
var find_vars_44176 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q)));
var with_vars_44177 = cljs.core.set.call(null,new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
var in_vars_44178 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q)));
var where_vars_44179 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q)));
var unknown_44180 = clojure.set.difference.call(null,clojure.set.union.call(null,find_vars_44176,with_vars_44177),clojure.set.union.call(null,where_vars_44179,in_vars_44178));
var shared_44181 = clojure.set.intersection.call(null,find_vars_44176,with_vars_44177);
if(cljs.core.empty_QMARK_.call(null,unknown_44180)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Query for unknown vars: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_44180)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_44180,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,shared_44181)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str(":in and :with should not use same variables: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),shared_44181)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),shared_44181,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_vars_44182 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
var in_sources_44183 = datascript.parser.collect.call(null,((function (in_vars_44182){
return (function (p1__44170_SHARP_){
return (p1__44170_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_vars_44182))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
var in_rules_44184 = datascript.parser.collect.call(null,((function (in_vars_44182,in_sources_44183){
return (function (p1__44171_SHARP_){
return (p1__44171_SHARP_ instanceof datascript.parser.RulesVar);
});})(in_vars_44182,in_sources_44183))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_((function (){var and__16332__auto__ = datascript.parser.distinct_QMARK_.call(null,in_vars_44182);
if(cljs.core.truth_(and__16332__auto__)){
var and__16332__auto____$1 = datascript.parser.distinct_QMARK_.call(null,in_sources_44183);
if(cljs.core.truth_(and__16332__auto____$1)){
return datascript.parser.distinct_QMARK_.call(null,in_rules_44184);
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

var with_vars_44185 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,with_vars_44185))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Vars used in :with should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_sources_44186 = datascript.parser.collect.call(null,(function (p1__44172_SHARP_){
return (p1__44172_SHARP_ instanceof datascript.parser.SrcVar);
}),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var where_sources_44187 = datascript.parser.collect.call(null,((function (in_sources_44186){
return (function (p1__44173_SHARP_){
return (p1__44173_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_sources_44186))
,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var unknown_44188 = clojure.set.difference.call(null,where_sources_44187,in_sources_44186);
if(cljs.core.empty_QMARK_.call(null,unknown_44188)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Where uses unknown source vars: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_44188)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_44188,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var rule_exprs = datascript.parser.collect.call(null,(function (p1__44174_SHARP_){
return (p1__44174_SHARP_ instanceof datascript.parser.RuleExpr);
}),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q));
var rules_vars = datascript.parser.collect.call(null,((function (rule_exprs){
return (function (p1__44175_SHARP_){
return (p1__44175_SHARP_ instanceof datascript.parser.RulesVar);
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

//# sourceMappingURL=parser.js.map?rel=1446795355945