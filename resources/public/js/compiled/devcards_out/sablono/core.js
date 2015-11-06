// Compiled by ClojureScript 1.7.145 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__37333__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__37332 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__37332,(0),null);
var body = cljs.core.nthnext.call(null,vec__37332,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__37333 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37334__i = 0, G__37334__a = new Array(arguments.length -  0);
while (G__37334__i < G__37334__a.length) {G__37334__a[G__37334__i] = arguments[G__37334__i + 0]; ++G__37334__i;}
  args = new cljs.core.IndexedSeq(G__37334__a,0);
} 
return G__37333__delegate.call(this,args);};
G__37333.cljs$lang$maxFixedArity = 0;
G__37333.cljs$lang$applyTo = (function (arglist__37335){
var args = cljs.core.seq(arglist__37335);
return G__37333__delegate(args);
});
G__37333.cljs$core$IFn$_invoke$arity$variadic = G__37333__delegate;
return G__37333;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__17116__auto__ = (function sablono$core$update_arglists_$_iter__37340(s__37341){
return (new cljs.core.LazySeq(null,(function (){
var s__37341__$1 = s__37341;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__37341__$1);
if(temp__4425__auto__){
var s__37341__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37341__$2)){
var c__17114__auto__ = cljs.core.chunk_first.call(null,s__37341__$2);
var size__17115__auto__ = cljs.core.count.call(null,c__17114__auto__);
var b__37343 = cljs.core.chunk_buffer.call(null,size__17115__auto__);
if((function (){var i__37342 = (0);
while(true){
if((i__37342 < size__17115__auto__)){
var args = cljs.core._nth.call(null,c__17114__auto__,i__37342);
cljs.core.chunk_append.call(null,b__37343,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__37344 = (i__37342 + (1));
i__37342 = G__37344;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37343),sablono$core$update_arglists_$_iter__37340.call(null,cljs.core.chunk_rest.call(null,s__37341__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37343),null);
}
} else {
var args = cljs.core.first.call(null,s__37341__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__37340.call(null,cljs.core.rest.call(null,s__37341__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17116__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__17409__auto__ = [];
var len__17402__auto___37350 = arguments.length;
var i__17403__auto___37351 = (0);
while(true){
if((i__17403__auto___37351 < len__17402__auto___37350)){
args__17409__auto__.push((arguments[i__17403__auto___37351]));

var G__37352 = (i__17403__auto___37351 + (1));
i__17403__auto___37351 = G__37352;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((0) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__17410__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__17116__auto__ = (function sablono$core$iter__37346(s__37347){
return (new cljs.core.LazySeq(null,(function (){
var s__37347__$1 = s__37347;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__37347__$1);
if(temp__4425__auto__){
var s__37347__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37347__$2)){
var c__17114__auto__ = cljs.core.chunk_first.call(null,s__37347__$2);
var size__17115__auto__ = cljs.core.count.call(null,c__17114__auto__);
var b__37349 = cljs.core.chunk_buffer.call(null,size__17115__auto__);
if((function (){var i__37348 = (0);
while(true){
if((i__37348 < size__17115__auto__)){
var style = cljs.core._nth.call(null,c__17114__auto__,i__37348);
cljs.core.chunk_append.call(null,b__37349,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__37353 = (i__37348 + (1));
i__37348 = G__37353;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37349),sablono$core$iter__37346.call(null,cljs.core.chunk_rest.call(null,s__37347__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37349),null);
}
} else {
var style = cljs.core.first.call(null,s__37347__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__37346.call(null,cljs.core.rest.call(null,s__37347__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17116__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq37345){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37345));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to37354 = (function sablono$core$link_to37354(var_args){
var args__17409__auto__ = [];
var len__17402__auto___37357 = arguments.length;
var i__17403__auto___37358 = (0);
while(true){
if((i__17403__auto___37358 < len__17402__auto___37357)){
args__17409__auto__.push((arguments[i__17403__auto___37358]));

var G__37359 = (i__17403__auto___37358 + (1));
i__17403__auto___37358 = G__37359;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((1) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((1)),(0))):null);
return sablono.core.link_to37354.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17410__auto__);
});

sablono.core.link_to37354.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to37354.cljs$lang$maxFixedArity = (1);

sablono.core.link_to37354.cljs$lang$applyTo = (function (seq37355){
var G__37356 = cljs.core.first.call(null,seq37355);
var seq37355__$1 = cljs.core.next.call(null,seq37355);
return sablono.core.link_to37354.cljs$core$IFn$_invoke$arity$variadic(G__37356,seq37355__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to37354);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to37360 = (function sablono$core$mail_to37360(var_args){
var args__17409__auto__ = [];
var len__17402__auto___37365 = arguments.length;
var i__17403__auto___37366 = (0);
while(true){
if((i__17403__auto___37366 < len__17402__auto___37365)){
args__17409__auto__.push((arguments[i__17403__auto___37366]));

var G__37367 = (i__17403__auto___37366 + (1));
i__17403__auto___37366 = G__37367;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((1) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((1)),(0))):null);
return sablono.core.mail_to37360.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17410__auto__);
});

sablono.core.mail_to37360.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__37363){
var vec__37364 = p__37363;
var content = cljs.core.nth.call(null,vec__37364,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__16344__auto__ = content;
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to37360.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to37360.cljs$lang$applyTo = (function (seq37361){
var G__37362 = cljs.core.first.call(null,seq37361);
var seq37361__$1 = cljs.core.next.call(null,seq37361);
return sablono.core.mail_to37360.cljs$core$IFn$_invoke$arity$variadic(G__37362,seq37361__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to37360);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list37368 = (function sablono$core$unordered_list37368(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__17116__auto__ = (function sablono$core$unordered_list37368_$_iter__37373(s__37374){
return (new cljs.core.LazySeq(null,(function (){
var s__37374__$1 = s__37374;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__37374__$1);
if(temp__4425__auto__){
var s__37374__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37374__$2)){
var c__17114__auto__ = cljs.core.chunk_first.call(null,s__37374__$2);
var size__17115__auto__ = cljs.core.count.call(null,c__17114__auto__);
var b__37376 = cljs.core.chunk_buffer.call(null,size__17115__auto__);
if((function (){var i__37375 = (0);
while(true){
if((i__37375 < size__17115__auto__)){
var x = cljs.core._nth.call(null,c__17114__auto__,i__37375);
cljs.core.chunk_append.call(null,b__37376,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__37377 = (i__37375 + (1));
i__37375 = G__37377;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37376),sablono$core$unordered_list37368_$_iter__37373.call(null,cljs.core.chunk_rest.call(null,s__37374__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37376),null);
}
} else {
var x = cljs.core.first.call(null,s__37374__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list37368_$_iter__37373.call(null,cljs.core.rest.call(null,s__37374__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17116__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list37368);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list37378 = (function sablono$core$ordered_list37378(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__17116__auto__ = (function sablono$core$ordered_list37378_$_iter__37383(s__37384){
return (new cljs.core.LazySeq(null,(function (){
var s__37384__$1 = s__37384;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__37384__$1);
if(temp__4425__auto__){
var s__37384__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37384__$2)){
var c__17114__auto__ = cljs.core.chunk_first.call(null,s__37384__$2);
var size__17115__auto__ = cljs.core.count.call(null,c__17114__auto__);
var b__37386 = cljs.core.chunk_buffer.call(null,size__17115__auto__);
if((function (){var i__37385 = (0);
while(true){
if((i__37385 < size__17115__auto__)){
var x = cljs.core._nth.call(null,c__17114__auto__,i__37385);
cljs.core.chunk_append.call(null,b__37386,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__37387 = (i__37385 + (1));
i__37385 = G__37387;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37386),sablono$core$ordered_list37378_$_iter__37383.call(null,cljs.core.chunk_rest.call(null,s__37384__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37386),null);
}
} else {
var x = cljs.core.first.call(null,s__37384__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list37378_$_iter__37383.call(null,cljs.core.rest.call(null,s__37384__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17116__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list37378);
/**
 * Create an image element.
 */
sablono.core.image37388 = (function sablono$core$image37388(var_args){
var args37389 = [];
var len__17402__auto___37392 = arguments.length;
var i__17403__auto___37393 = (0);
while(true){
if((i__17403__auto___37393 < len__17402__auto___37392)){
args37389.push((arguments[i__17403__auto___37393]));

var G__37394 = (i__17403__auto___37393 + (1));
i__17403__auto___37393 = G__37394;
continue;
} else {
}
break;
}

var G__37391 = args37389.length;
switch (G__37391) {
case 1:
return sablono.core.image37388.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image37388.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37389.length)].join('')));

}
});

sablono.core.image37388.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image37388.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image37388.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image37388);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__37396_SHARP_,p2__37397_SHARP_){
return [cljs.core.str(p1__37396_SHARP_),cljs.core.str("["),cljs.core.str(p2__37397_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__37398_SHARP_,p2__37399_SHARP_){
return [cljs.core.str(p1__37398_SHARP_),cljs.core.str("-"),cljs.core.str(p2__37399_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field37400 = (function sablono$core$color_field37400(var_args){
var args37401 = [];
var len__17402__auto___37468 = arguments.length;
var i__17403__auto___37469 = (0);
while(true){
if((i__17403__auto___37469 < len__17402__auto___37468)){
args37401.push((arguments[i__17403__auto___37469]));

var G__37470 = (i__17403__auto___37469 + (1));
i__17403__auto___37469 = G__37470;
continue;
} else {
}
break;
}

var G__37403 = args37401.length;
switch (G__37403) {
case 1:
return sablono.core.color_field37400.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field37400.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37401.length)].join('')));

}
});

sablono.core.color_field37400.cljs$core$IFn$_invoke$arity$1 = (function (name__22913__auto__){
return sablono.core.color_field37400.call(null,name__22913__auto__,null);
});

sablono.core.color_field37400.cljs$core$IFn$_invoke$arity$2 = (function (name__22913__auto__,value__22914__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__22913__auto__,value__22914__auto__);
});

sablono.core.color_field37400.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field37400);

/**
 * Creates a date input field.
 */
sablono.core.date_field37404 = (function sablono$core$date_field37404(var_args){
var args37405 = [];
var len__17402__auto___37472 = arguments.length;
var i__17403__auto___37473 = (0);
while(true){
if((i__17403__auto___37473 < len__17402__auto___37472)){
args37405.push((arguments[i__17403__auto___37473]));

var G__37474 = (i__17403__auto___37473 + (1));
i__17403__auto___37473 = G__37474;
continue;
} else {
}
break;
}

var G__37407 = args37405.length;
switch (G__37407) {
case 1:
return sablono.core.date_field37404.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field37404.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37405.length)].join('')));

}
});

sablono.core.date_field37404.cljs$core$IFn$_invoke$arity$1 = (function (name__22913__auto__){
return sablono.core.date_field37404.call(null,name__22913__auto__,null);
});

sablono.core.date_field37404.cljs$core$IFn$_invoke$arity$2 = (function (name__22913__auto__,value__22914__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__22913__auto__,value__22914__auto__);
});

sablono.core.date_field37404.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field37404);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field37408 = (function sablono$core$datetime_field37408(var_args){
var args37409 = [];
var len__17402__auto___37476 = arguments.length;
var i__17403__auto___37477 = (0);
while(true){
if((i__17403__auto___37477 < len__17402__auto___37476)){
args37409.push((arguments[i__17403__auto___37477]));

var G__37478 = (i__17403__auto___37477 + (1));
i__17403__auto___37477 = G__37478;
continue;
} else {
}
break;
}

var G__37411 = args37409.length;
switch (G__37411) {
case 1:
return sablono.core.datetime_field37408.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field37408.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37409.length)].join('')));

}
});

sablono.core.datetime_field37408.cljs$core$IFn$_invoke$arity$1 = (function (name__22913__auto__){
return sablono.core.datetime_field37408.call(null,name__22913__auto__,null);
});

sablono.core.datetime_field37408.cljs$core$IFn$_invoke$arity$2 = (function (name__22913__auto__,value__22914__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__22913__auto__,value__22914__auto__);
});

sablono.core.datetime_field37408.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field37408);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field37412 = (function sablono$core$datetime_local_field37412(var_args){
var args37413 = [];
var len__17402__auto___37480 = arguments.length;
var i__17403__auto___37481 = (0);
while(true){
if((i__17403__auto___37481 < len__17402__auto___37480)){
args37413.push((arguments[i__17403__auto___37481]));

var G__37482 = (i__17403__auto___37481 + (1));
i__17403__auto___37481 = G__37482;
continue;
} else {
}
break;
}

var G__37415 = args37413.length;
switch (G__37415) {
case 1:
return sablono.core.datetime_local_field37412.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field37412.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37413.length)].join('')));

}
});

sablono.core.datetime_local_field37412.cljs$core$IFn$_invoke$arity$1 = (function (name__22913__auto__){
return sablono.core.datetime_local_field37412.call(null,name__22913__auto__,null);
});

sablono.core.datetime_local_field37412.cljs$core$IFn$_invoke$arity$2 = (function (name__22913__auto__,value__22914__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__22913__auto__,value__22914__auto__);
});

sablono.core.datetime_local_field37412.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field37412);

/**
 * Creates a email input field.
 */
sablono.core.email_field37416 = (function sablono$core$email_field37416(var_args){
var args37417 = [];
var len__17402__auto___37484 = arguments.length;
var i__17403__auto___37485 = (0);
while(true){
if((i__17403__auto___37485 < len__17402__auto___37484)){
args37417.push((arguments[i__17403__auto___37485]));

var G__37486 = (i__17403__auto___37485 + (1));
i__17403__auto___37485 = G__37486;
continue;
} else {
}
break;
}

var G__37419 = args37417.length;
switch (G__37419) {
case 1:
return sablono.core.email_field37416.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field37416.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37417.length)].join('')));

}
});

sablono.core.email_field37416.cljs$core$IFn$_invoke$arity$1 = (function (name__22913__auto__){
return sablono.core.email_field37416.call(null,name__22913__auto__,null);
});

sablono.core.email_field37416.cljs$core$IFn$_invoke$arity$2 = (function (name__22913__auto__,value__22914__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__22913__auto__,value__22914__auto__);
});

sablono.core.email_field37416.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field37416);

/**
 * Creates a file input field.
 */
sablono.core.file_field37420 = (function sablono$core$file_field37420(var_args){
var args37421 = [];
var len__17402__auto___37488 = arguments.length;
var i__17403__auto___37489 = (0);
while(true){
if((i__17403__auto___37489 < len__17402__auto___37488)){
args37421.push((arguments[i__17403__auto___37489]));

var G__37490 = (i__17403__auto___37489 + (1));
i__17403__auto___37489 = G__37490;
continue;
} else {
}
break;
}

var G__37423 = args37421.length;
switch (G__37423) {
case 1:
return sablono.core.file_field37420.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field37420.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37421.length)].join('')));

}
});

sablono.core.file_field37420.cljs$core$IFn$_invoke$arity$1 = (function (name__22913__auto__){
return sablono.core.file_field37420.call(null,name__22913__auto__,null);
});

sablono.core.file_field37420.cljs$core$IFn$_invoke$arity$2 = (function (name__22913__auto__,value__22914__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__22913__auto__,value__22914__auto__);
});

sablono.core.file_field37420.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field37420);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field37424 = (function sablono$core$hidden_field37424(var_args){
var args37425 = [];
var len__17402__auto___37492 = arguments.length;
var i__17403__auto___37493 = (0);
while(true){
if((i__17403__auto___37493 < len__17402__auto___37492)){
args37425.push((arguments[i__17403__auto___37493]));

var G__37494 = (i__17403__auto___37493 + (1));
i__17403__auto___37493 = G__37494;
continue;
} else {
}
break;
}

var G__37427 = args37425.length;
switch (G__37427) {
case 1:
return sablono.core.hidden_field37424.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field37424.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37425.length)].join('')));

}
});

sablono.core.hidden_field37424.cljs$core$IFn$_invoke$arity$1 = (function (name__22913__auto__){
return sablono.core.hidden_field37424.call(null,name__22913__auto__,null);
});

sablono.core.hidden_field37424.cljs$core$IFn$_invoke$arity$2 = (function (name__22913__auto__,value__22914__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__22913__auto__,value__22914__auto__);
});

sablono.core.hidden_field37424.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field37424);

/**
 * Creates a month input field.
 */
sablono.core.month_field37428 = (function sablono$core$month_field37428(var_args){
var args37429 = [];
var len__17402__auto___37496 = arguments.length;
var i__17403__auto___37497 = (0);
while(true){
if((i__17403__auto___37497 < len__17402__auto___37496)){
args37429.push((arguments[i__17403__auto___37497]));

var G__37498 = (i__17403__auto___37497 + (1));
i__17403__auto___37497 = G__37498;
continue;
} else {
}
break;
}

var G__37431 = args37429.length;
switch (G__37431) {
case 1:
return sablono.core.month_field37428.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field37428.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37429.length)].join('')));

}
});

sablono.core.month_field37428.cljs$core$IFn$_invoke$arity$1 = (function (name__22913__auto__){
return sablono.core.month_field37428.call(null,name__22913__auto__,null);
});

sablono.core.month_field37428.cljs$core$IFn$_invoke$arity$2 = (function (name__22913__auto__,value__22914__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__22913__auto__,value__22914__auto__);
});

sablono.core.month_field37428.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field37428);

/**
 * Creates a number input field.
 */
sablono.core.number_field37432 = (function sablono$core$number_field37432(var_args){
var args37433 = [];
var len__17402__auto___37500 = arguments.length;
var i__17403__auto___37501 = (0);
while(true){
if((i__17403__auto___37501 < len__17402__auto___37500)){
args37433.push((arguments[i__17403__auto___37501]));

var G__37502 = (i__17403__auto___37501 + (1));
i__17403__auto___37501 = G__37502;
continue;
} else {
}
break;
}

var G__37435 = args37433.length;
switch (G__37435) {
case 1:
return sablono.core.number_field37432.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field37432.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37433.length)].join('')));

}
});

sablono.core.number_field37432.cljs$core$IFn$_invoke$arity$1 = (function (name__22913__auto__){
return sablono.core.number_field37432.call(null,name__22913__auto__,null);
});

sablono.core.number_field37432.cljs$core$IFn$_invoke$arity$2 = (function (name__22913__auto__,value__22914__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__22913__auto__,value__22914__auto__);
});

sablono.core.number_field37432.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field37432);

/**
 * Creates a password input field.
 */
sablono.core.password_field37436 = (function sablono$core$password_field37436(var_args){
var args37437 = [];
var len__17402__auto___37504 = arguments.length;
var i__17403__auto___37505 = (0);
while(true){
if((i__17403__auto___37505 < len__17402__auto___37504)){
args37437.push((arguments[i__17403__auto___37505]));

var G__37506 = (i__17403__auto___37505 + (1));
i__17403__auto___37505 = G__37506;
continue;
} else {
}
break;
}

var G__37439 = args37437.length;
switch (G__37439) {
case 1:
return sablono.core.password_field37436.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field37436.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37437.length)].join('')));

}
});

sablono.core.password_field37436.cljs$core$IFn$_invoke$arity$1 = (function (name__22913__auto__){
return sablono.core.password_field37436.call(null,name__22913__auto__,null);
});

sablono.core.password_field37436.cljs$core$IFn$_invoke$arity$2 = (function (name__22913__auto__,value__22914__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__22913__auto__,value__22914__auto__);
});

sablono.core.password_field37436.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field37436);

/**
 * Creates a range input field.
 */
sablono.core.range_field37440 = (function sablono$core$range_field37440(var_args){
var args37441 = [];
var len__17402__auto___37508 = arguments.length;
var i__17403__auto___37509 = (0);
while(true){
if((i__17403__auto___37509 < len__17402__auto___37508)){
args37441.push((arguments[i__17403__auto___37509]));

var G__37510 = (i__17403__auto___37509 + (1));
i__17403__auto___37509 = G__37510;
continue;
} else {
}
break;
}

var G__37443 = args37441.length;
switch (G__37443) {
case 1:
return sablono.core.range_field37440.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field37440.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37441.length)].join('')));

}
});

sablono.core.range_field37440.cljs$core$IFn$_invoke$arity$1 = (function (name__22913__auto__){
return sablono.core.range_field37440.call(null,name__22913__auto__,null);
});

sablono.core.range_field37440.cljs$core$IFn$_invoke$arity$2 = (function (name__22913__auto__,value__22914__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__22913__auto__,value__22914__auto__);
});

sablono.core.range_field37440.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field37440);

/**
 * Creates a search input field.
 */
sablono.core.search_field37444 = (function sablono$core$search_field37444(var_args){
var args37445 = [];
var len__17402__auto___37512 = arguments.length;
var i__17403__auto___37513 = (0);
while(true){
if((i__17403__auto___37513 < len__17402__auto___37512)){
args37445.push((arguments[i__17403__auto___37513]));

var G__37514 = (i__17403__auto___37513 + (1));
i__17403__auto___37513 = G__37514;
continue;
} else {
}
break;
}

var G__37447 = args37445.length;
switch (G__37447) {
case 1:
return sablono.core.search_field37444.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field37444.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37445.length)].join('')));

}
});

sablono.core.search_field37444.cljs$core$IFn$_invoke$arity$1 = (function (name__22913__auto__){
return sablono.core.search_field37444.call(null,name__22913__auto__,null);
});

sablono.core.search_field37444.cljs$core$IFn$_invoke$arity$2 = (function (name__22913__auto__,value__22914__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__22913__auto__,value__22914__auto__);
});

sablono.core.search_field37444.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field37444);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field37448 = (function sablono$core$tel_field37448(var_args){
var args37449 = [];
var len__17402__auto___37516 = arguments.length;
var i__17403__auto___37517 = (0);
while(true){
if((i__17403__auto___37517 < len__17402__auto___37516)){
args37449.push((arguments[i__17403__auto___37517]));

var G__37518 = (i__17403__auto___37517 + (1));
i__17403__auto___37517 = G__37518;
continue;
} else {
}
break;
}

var G__37451 = args37449.length;
switch (G__37451) {
case 1:
return sablono.core.tel_field37448.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field37448.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37449.length)].join('')));

}
});

sablono.core.tel_field37448.cljs$core$IFn$_invoke$arity$1 = (function (name__22913__auto__){
return sablono.core.tel_field37448.call(null,name__22913__auto__,null);
});

sablono.core.tel_field37448.cljs$core$IFn$_invoke$arity$2 = (function (name__22913__auto__,value__22914__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__22913__auto__,value__22914__auto__);
});

sablono.core.tel_field37448.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field37448);

/**
 * Creates a text input field.
 */
sablono.core.text_field37452 = (function sablono$core$text_field37452(var_args){
var args37453 = [];
var len__17402__auto___37520 = arguments.length;
var i__17403__auto___37521 = (0);
while(true){
if((i__17403__auto___37521 < len__17402__auto___37520)){
args37453.push((arguments[i__17403__auto___37521]));

var G__37522 = (i__17403__auto___37521 + (1));
i__17403__auto___37521 = G__37522;
continue;
} else {
}
break;
}

var G__37455 = args37453.length;
switch (G__37455) {
case 1:
return sablono.core.text_field37452.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field37452.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37453.length)].join('')));

}
});

sablono.core.text_field37452.cljs$core$IFn$_invoke$arity$1 = (function (name__22913__auto__){
return sablono.core.text_field37452.call(null,name__22913__auto__,null);
});

sablono.core.text_field37452.cljs$core$IFn$_invoke$arity$2 = (function (name__22913__auto__,value__22914__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__22913__auto__,value__22914__auto__);
});

sablono.core.text_field37452.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field37452);

/**
 * Creates a time input field.
 */
sablono.core.time_field37456 = (function sablono$core$time_field37456(var_args){
var args37457 = [];
var len__17402__auto___37524 = arguments.length;
var i__17403__auto___37525 = (0);
while(true){
if((i__17403__auto___37525 < len__17402__auto___37524)){
args37457.push((arguments[i__17403__auto___37525]));

var G__37526 = (i__17403__auto___37525 + (1));
i__17403__auto___37525 = G__37526;
continue;
} else {
}
break;
}

var G__37459 = args37457.length;
switch (G__37459) {
case 1:
return sablono.core.time_field37456.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field37456.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37457.length)].join('')));

}
});

sablono.core.time_field37456.cljs$core$IFn$_invoke$arity$1 = (function (name__22913__auto__){
return sablono.core.time_field37456.call(null,name__22913__auto__,null);
});

sablono.core.time_field37456.cljs$core$IFn$_invoke$arity$2 = (function (name__22913__auto__,value__22914__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__22913__auto__,value__22914__auto__);
});

sablono.core.time_field37456.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field37456);

/**
 * Creates a url input field.
 */
sablono.core.url_field37460 = (function sablono$core$url_field37460(var_args){
var args37461 = [];
var len__17402__auto___37528 = arguments.length;
var i__17403__auto___37529 = (0);
while(true){
if((i__17403__auto___37529 < len__17402__auto___37528)){
args37461.push((arguments[i__17403__auto___37529]));

var G__37530 = (i__17403__auto___37529 + (1));
i__17403__auto___37529 = G__37530;
continue;
} else {
}
break;
}

var G__37463 = args37461.length;
switch (G__37463) {
case 1:
return sablono.core.url_field37460.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field37460.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37461.length)].join('')));

}
});

sablono.core.url_field37460.cljs$core$IFn$_invoke$arity$1 = (function (name__22913__auto__){
return sablono.core.url_field37460.call(null,name__22913__auto__,null);
});

sablono.core.url_field37460.cljs$core$IFn$_invoke$arity$2 = (function (name__22913__auto__,value__22914__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__22913__auto__,value__22914__auto__);
});

sablono.core.url_field37460.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field37460);

/**
 * Creates a week input field.
 */
sablono.core.week_field37464 = (function sablono$core$week_field37464(var_args){
var args37465 = [];
var len__17402__auto___37532 = arguments.length;
var i__17403__auto___37533 = (0);
while(true){
if((i__17403__auto___37533 < len__17402__auto___37532)){
args37465.push((arguments[i__17403__auto___37533]));

var G__37534 = (i__17403__auto___37533 + (1));
i__17403__auto___37533 = G__37534;
continue;
} else {
}
break;
}

var G__37467 = args37465.length;
switch (G__37467) {
case 1:
return sablono.core.week_field37464.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field37464.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37465.length)].join('')));

}
});

sablono.core.week_field37464.cljs$core$IFn$_invoke$arity$1 = (function (name__22913__auto__){
return sablono.core.week_field37464.call(null,name__22913__auto__,null);
});

sablono.core.week_field37464.cljs$core$IFn$_invoke$arity$2 = (function (name__22913__auto__,value__22914__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__22913__auto__,value__22914__auto__);
});

sablono.core.week_field37464.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field37464);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box37536 = (function sablono$core$check_box37536(var_args){
var args37537 = [];
var len__17402__auto___37540 = arguments.length;
var i__17403__auto___37541 = (0);
while(true){
if((i__17403__auto___37541 < len__17402__auto___37540)){
args37537.push((arguments[i__17403__auto___37541]));

var G__37542 = (i__17403__auto___37541 + (1));
i__17403__auto___37541 = G__37542;
continue;
} else {
}
break;
}

var G__37539 = args37537.length;
switch (G__37539) {
case 1:
return sablono.core.check_box37536.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box37536.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box37536.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37537.length)].join('')));

}
});

sablono.core.check_box37536.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box37536.call(null,name,null);
});

sablono.core.check_box37536.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box37536.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box37536.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box37536.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box37536);
/**
 * Creates a radio button.
 */
sablono.core.radio_button37544 = (function sablono$core$radio_button37544(var_args){
var args37545 = [];
var len__17402__auto___37548 = arguments.length;
var i__17403__auto___37549 = (0);
while(true){
if((i__17403__auto___37549 < len__17402__auto___37548)){
args37545.push((arguments[i__17403__auto___37549]));

var G__37550 = (i__17403__auto___37549 + (1));
i__17403__auto___37549 = G__37550;
continue;
} else {
}
break;
}

var G__37547 = args37545.length;
switch (G__37547) {
case 1:
return sablono.core.radio_button37544.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button37544.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button37544.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37545.length)].join('')));

}
});

sablono.core.radio_button37544.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button37544.call(null,group,null);
});

sablono.core.radio_button37544.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button37544.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button37544.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button37544.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button37544);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options37552 = (function sablono$core$select_options37552(coll){
var iter__17116__auto__ = (function sablono$core$select_options37552_$_iter__37561(s__37562){
return (new cljs.core.LazySeq(null,(function (){
var s__37562__$1 = s__37562;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__37562__$1);
if(temp__4425__auto__){
var s__37562__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37562__$2)){
var c__17114__auto__ = cljs.core.chunk_first.call(null,s__37562__$2);
var size__17115__auto__ = cljs.core.count.call(null,c__17114__auto__);
var b__37564 = cljs.core.chunk_buffer.call(null,size__17115__auto__);
if((function (){var i__37563 = (0);
while(true){
if((i__37563 < size__17115__auto__)){
var x = cljs.core._nth.call(null,c__17114__auto__,i__37563);
cljs.core.chunk_append.call(null,b__37564,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37567 = x;
var text = cljs.core.nth.call(null,vec__37567,(0),null);
var val = cljs.core.nth.call(null,vec__37567,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__37567,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options37552.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__37569 = (i__37563 + (1));
i__37563 = G__37569;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37564),sablono$core$select_options37552_$_iter__37561.call(null,cljs.core.chunk_rest.call(null,s__37562__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37564),null);
}
} else {
var x = cljs.core.first.call(null,s__37562__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37568 = x;
var text = cljs.core.nth.call(null,vec__37568,(0),null);
var val = cljs.core.nth.call(null,vec__37568,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__37568,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options37552.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options37552_$_iter__37561.call(null,cljs.core.rest.call(null,s__37562__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17116__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options37552);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down37570 = (function sablono$core$drop_down37570(var_args){
var args37571 = [];
var len__17402__auto___37574 = arguments.length;
var i__17403__auto___37575 = (0);
while(true){
if((i__17403__auto___37575 < len__17402__auto___37574)){
args37571.push((arguments[i__17403__auto___37575]));

var G__37576 = (i__17403__auto___37575 + (1));
i__17403__auto___37575 = G__37576;
continue;
} else {
}
break;
}

var G__37573 = args37571.length;
switch (G__37573) {
case 2:
return sablono.core.drop_down37570.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down37570.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37571.length)].join('')));

}
});

sablono.core.drop_down37570.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down37570.call(null,name,options,null);
});

sablono.core.drop_down37570.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down37570.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down37570);
/**
 * Creates a text area element.
 */
sablono.core.text_area37578 = (function sablono$core$text_area37578(var_args){
var args37579 = [];
var len__17402__auto___37582 = arguments.length;
var i__17403__auto___37583 = (0);
while(true){
if((i__17403__auto___37583 < len__17402__auto___37582)){
args37579.push((arguments[i__17403__auto___37583]));

var G__37584 = (i__17403__auto___37583 + (1));
i__17403__auto___37583 = G__37584;
continue;
} else {
}
break;
}

var G__37581 = args37579.length;
switch (G__37581) {
case 1:
return sablono.core.text_area37578.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area37578.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37579.length)].join('')));

}
});

sablono.core.text_area37578.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area37578.call(null,name,null);
});

sablono.core.text_area37578.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area37578.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area37578);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label37586 = (function sablono$core$label37586(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label37586);
/**
 * Creates a submit button.
 */
sablono.core.submit_button37587 = (function sablono$core$submit_button37587(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button37587);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button37588 = (function sablono$core$reset_button37588(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button37588);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to37589 = (function sablono$core$form_to37589(var_args){
var args__17409__auto__ = [];
var len__17402__auto___37594 = arguments.length;
var i__17403__auto___37595 = (0);
while(true){
if((i__17403__auto___37595 < len__17402__auto___37594)){
args__17409__auto__.push((arguments[i__17403__auto___37595]));

var G__37596 = (i__17403__auto___37595 + (1));
i__17403__auto___37595 = G__37596;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((1) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((1)),(0))):null);
return sablono.core.form_to37589.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17410__auto__);
});

sablono.core.form_to37589.cljs$core$IFn$_invoke$arity$variadic = (function (p__37592,body){
var vec__37593 = p__37592;
var method = cljs.core.nth.call(null,vec__37593,(0),null);
var action = cljs.core.nth.call(null,vec__37593,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to37589.cljs$lang$maxFixedArity = (1);

sablono.core.form_to37589.cljs$lang$applyTo = (function (seq37590){
var G__37591 = cljs.core.first.call(null,seq37590);
var seq37590__$1 = cljs.core.next.call(null,seq37590);
return sablono.core.form_to37589.cljs$core$IFn$_invoke$arity$variadic(G__37591,seq37590__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to37589);

//# sourceMappingURL=core.js.map?rel=1446794915493