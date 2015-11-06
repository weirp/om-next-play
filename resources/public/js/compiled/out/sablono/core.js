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
var G__37207__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__37206 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__37206,(0),null);
var body = cljs.core.nthnext.call(null,vec__37206,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__37207 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37208__i = 0, G__37208__a = new Array(arguments.length -  0);
while (G__37208__i < G__37208__a.length) {G__37208__a[G__37208__i] = arguments[G__37208__i + 0]; ++G__37208__i;}
  args = new cljs.core.IndexedSeq(G__37208__a,0);
} 
return G__37207__delegate.call(this,args);};
G__37207.cljs$lang$maxFixedArity = 0;
G__37207.cljs$lang$applyTo = (function (arglist__37209){
var args = cljs.core.seq(arglist__37209);
return G__37207__delegate(args);
});
G__37207.cljs$core$IFn$_invoke$arity$variadic = G__37207__delegate;
return G__37207;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__17116__auto__ = (function sablono$core$update_arglists_$_iter__37214(s__37215){
return (new cljs.core.LazySeq(null,(function (){
var s__37215__$1 = s__37215;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__37215__$1);
if(temp__4425__auto__){
var s__37215__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37215__$2)){
var c__17114__auto__ = cljs.core.chunk_first.call(null,s__37215__$2);
var size__17115__auto__ = cljs.core.count.call(null,c__17114__auto__);
var b__37217 = cljs.core.chunk_buffer.call(null,size__17115__auto__);
if((function (){var i__37216 = (0);
while(true){
if((i__37216 < size__17115__auto__)){
var args = cljs.core._nth.call(null,c__17114__auto__,i__37216);
cljs.core.chunk_append.call(null,b__37217,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__37218 = (i__37216 + (1));
i__37216 = G__37218;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37217),sablono$core$update_arglists_$_iter__37214.call(null,cljs.core.chunk_rest.call(null,s__37215__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37217),null);
}
} else {
var args = cljs.core.first.call(null,s__37215__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__37214.call(null,cljs.core.rest.call(null,s__37215__$2)));
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
var len__17402__auto___37224 = arguments.length;
var i__17403__auto___37225 = (0);
while(true){
if((i__17403__auto___37225 < len__17402__auto___37224)){
args__17409__auto__.push((arguments[i__17403__auto___37225]));

var G__37226 = (i__17403__auto___37225 + (1));
i__17403__auto___37225 = G__37226;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((0) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__17410__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__17116__auto__ = (function sablono$core$iter__37220(s__37221){
return (new cljs.core.LazySeq(null,(function (){
var s__37221__$1 = s__37221;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__37221__$1);
if(temp__4425__auto__){
var s__37221__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37221__$2)){
var c__17114__auto__ = cljs.core.chunk_first.call(null,s__37221__$2);
var size__17115__auto__ = cljs.core.count.call(null,c__17114__auto__);
var b__37223 = cljs.core.chunk_buffer.call(null,size__17115__auto__);
if((function (){var i__37222 = (0);
while(true){
if((i__37222 < size__17115__auto__)){
var style = cljs.core._nth.call(null,c__17114__auto__,i__37222);
cljs.core.chunk_append.call(null,b__37223,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__37227 = (i__37222 + (1));
i__37222 = G__37227;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37223),sablono$core$iter__37220.call(null,cljs.core.chunk_rest.call(null,s__37221__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37223),null);
}
} else {
var style = cljs.core.first.call(null,s__37221__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__37220.call(null,cljs.core.rest.call(null,s__37221__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq37219){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37219));
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
sablono.core.link_to37228 = (function sablono$core$link_to37228(var_args){
var args__17409__auto__ = [];
var len__17402__auto___37231 = arguments.length;
var i__17403__auto___37232 = (0);
while(true){
if((i__17403__auto___37232 < len__17402__auto___37231)){
args__17409__auto__.push((arguments[i__17403__auto___37232]));

var G__37233 = (i__17403__auto___37232 + (1));
i__17403__auto___37232 = G__37233;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((1) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((1)),(0))):null);
return sablono.core.link_to37228.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17410__auto__);
});

sablono.core.link_to37228.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to37228.cljs$lang$maxFixedArity = (1);

sablono.core.link_to37228.cljs$lang$applyTo = (function (seq37229){
var G__37230 = cljs.core.first.call(null,seq37229);
var seq37229__$1 = cljs.core.next.call(null,seq37229);
return sablono.core.link_to37228.cljs$core$IFn$_invoke$arity$variadic(G__37230,seq37229__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to37228);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to37234 = (function sablono$core$mail_to37234(var_args){
var args__17409__auto__ = [];
var len__17402__auto___37239 = arguments.length;
var i__17403__auto___37240 = (0);
while(true){
if((i__17403__auto___37240 < len__17402__auto___37239)){
args__17409__auto__.push((arguments[i__17403__auto___37240]));

var G__37241 = (i__17403__auto___37240 + (1));
i__17403__auto___37240 = G__37241;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((1) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((1)),(0))):null);
return sablono.core.mail_to37234.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17410__auto__);
});

sablono.core.mail_to37234.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__37237){
var vec__37238 = p__37237;
var content = cljs.core.nth.call(null,vec__37238,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__16344__auto__ = content;
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to37234.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to37234.cljs$lang$applyTo = (function (seq37235){
var G__37236 = cljs.core.first.call(null,seq37235);
var seq37235__$1 = cljs.core.next.call(null,seq37235);
return sablono.core.mail_to37234.cljs$core$IFn$_invoke$arity$variadic(G__37236,seq37235__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to37234);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list37242 = (function sablono$core$unordered_list37242(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__17116__auto__ = (function sablono$core$unordered_list37242_$_iter__37247(s__37248){
return (new cljs.core.LazySeq(null,(function (){
var s__37248__$1 = s__37248;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__37248__$1);
if(temp__4425__auto__){
var s__37248__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37248__$2)){
var c__17114__auto__ = cljs.core.chunk_first.call(null,s__37248__$2);
var size__17115__auto__ = cljs.core.count.call(null,c__17114__auto__);
var b__37250 = cljs.core.chunk_buffer.call(null,size__17115__auto__);
if((function (){var i__37249 = (0);
while(true){
if((i__37249 < size__17115__auto__)){
var x = cljs.core._nth.call(null,c__17114__auto__,i__37249);
cljs.core.chunk_append.call(null,b__37250,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__37251 = (i__37249 + (1));
i__37249 = G__37251;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37250),sablono$core$unordered_list37242_$_iter__37247.call(null,cljs.core.chunk_rest.call(null,s__37248__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37250),null);
}
} else {
var x = cljs.core.first.call(null,s__37248__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list37242_$_iter__37247.call(null,cljs.core.rest.call(null,s__37248__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list37242);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list37252 = (function sablono$core$ordered_list37252(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__17116__auto__ = (function sablono$core$ordered_list37252_$_iter__37257(s__37258){
return (new cljs.core.LazySeq(null,(function (){
var s__37258__$1 = s__37258;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__37258__$1);
if(temp__4425__auto__){
var s__37258__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37258__$2)){
var c__17114__auto__ = cljs.core.chunk_first.call(null,s__37258__$2);
var size__17115__auto__ = cljs.core.count.call(null,c__17114__auto__);
var b__37260 = cljs.core.chunk_buffer.call(null,size__17115__auto__);
if((function (){var i__37259 = (0);
while(true){
if((i__37259 < size__17115__auto__)){
var x = cljs.core._nth.call(null,c__17114__auto__,i__37259);
cljs.core.chunk_append.call(null,b__37260,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__37261 = (i__37259 + (1));
i__37259 = G__37261;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37260),sablono$core$ordered_list37252_$_iter__37257.call(null,cljs.core.chunk_rest.call(null,s__37258__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37260),null);
}
} else {
var x = cljs.core.first.call(null,s__37258__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list37252_$_iter__37257.call(null,cljs.core.rest.call(null,s__37258__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list37252);
/**
 * Create an image element.
 */
sablono.core.image37262 = (function sablono$core$image37262(var_args){
var args37263 = [];
var len__17402__auto___37266 = arguments.length;
var i__17403__auto___37267 = (0);
while(true){
if((i__17403__auto___37267 < len__17402__auto___37266)){
args37263.push((arguments[i__17403__auto___37267]));

var G__37268 = (i__17403__auto___37267 + (1));
i__17403__auto___37267 = G__37268;
continue;
} else {
}
break;
}

var G__37265 = args37263.length;
switch (G__37265) {
case 1:
return sablono.core.image37262.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image37262.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37263.length)].join('')));

}
});

sablono.core.image37262.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image37262.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image37262.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image37262);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__37270_SHARP_,p2__37271_SHARP_){
return [cljs.core.str(p1__37270_SHARP_),cljs.core.str("["),cljs.core.str(p2__37271_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__37272_SHARP_,p2__37273_SHARP_){
return [cljs.core.str(p1__37272_SHARP_),cljs.core.str("-"),cljs.core.str(p2__37273_SHARP_)].join('');
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
sablono.core.color_field37274 = (function sablono$core$color_field37274(var_args){
var args37275 = [];
var len__17402__auto___37342 = arguments.length;
var i__17403__auto___37343 = (0);
while(true){
if((i__17403__auto___37343 < len__17402__auto___37342)){
args37275.push((arguments[i__17403__auto___37343]));

var G__37344 = (i__17403__auto___37343 + (1));
i__17403__auto___37343 = G__37344;
continue;
} else {
}
break;
}

var G__37277 = args37275.length;
switch (G__37277) {
case 1:
return sablono.core.color_field37274.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field37274.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37275.length)].join('')));

}
});

sablono.core.color_field37274.cljs$core$IFn$_invoke$arity$1 = (function (name__22912__auto__){
return sablono.core.color_field37274.call(null,name__22912__auto__,null);
});

sablono.core.color_field37274.cljs$core$IFn$_invoke$arity$2 = (function (name__22912__auto__,value__22913__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__22912__auto__,value__22913__auto__);
});

sablono.core.color_field37274.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field37274);

/**
 * Creates a date input field.
 */
sablono.core.date_field37278 = (function sablono$core$date_field37278(var_args){
var args37279 = [];
var len__17402__auto___37346 = arguments.length;
var i__17403__auto___37347 = (0);
while(true){
if((i__17403__auto___37347 < len__17402__auto___37346)){
args37279.push((arguments[i__17403__auto___37347]));

var G__37348 = (i__17403__auto___37347 + (1));
i__17403__auto___37347 = G__37348;
continue;
} else {
}
break;
}

var G__37281 = args37279.length;
switch (G__37281) {
case 1:
return sablono.core.date_field37278.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field37278.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37279.length)].join('')));

}
});

sablono.core.date_field37278.cljs$core$IFn$_invoke$arity$1 = (function (name__22912__auto__){
return sablono.core.date_field37278.call(null,name__22912__auto__,null);
});

sablono.core.date_field37278.cljs$core$IFn$_invoke$arity$2 = (function (name__22912__auto__,value__22913__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__22912__auto__,value__22913__auto__);
});

sablono.core.date_field37278.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field37278);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field37282 = (function sablono$core$datetime_field37282(var_args){
var args37283 = [];
var len__17402__auto___37350 = arguments.length;
var i__17403__auto___37351 = (0);
while(true){
if((i__17403__auto___37351 < len__17402__auto___37350)){
args37283.push((arguments[i__17403__auto___37351]));

var G__37352 = (i__17403__auto___37351 + (1));
i__17403__auto___37351 = G__37352;
continue;
} else {
}
break;
}

var G__37285 = args37283.length;
switch (G__37285) {
case 1:
return sablono.core.datetime_field37282.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field37282.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37283.length)].join('')));

}
});

sablono.core.datetime_field37282.cljs$core$IFn$_invoke$arity$1 = (function (name__22912__auto__){
return sablono.core.datetime_field37282.call(null,name__22912__auto__,null);
});

sablono.core.datetime_field37282.cljs$core$IFn$_invoke$arity$2 = (function (name__22912__auto__,value__22913__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__22912__auto__,value__22913__auto__);
});

sablono.core.datetime_field37282.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field37282);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field37286 = (function sablono$core$datetime_local_field37286(var_args){
var args37287 = [];
var len__17402__auto___37354 = arguments.length;
var i__17403__auto___37355 = (0);
while(true){
if((i__17403__auto___37355 < len__17402__auto___37354)){
args37287.push((arguments[i__17403__auto___37355]));

var G__37356 = (i__17403__auto___37355 + (1));
i__17403__auto___37355 = G__37356;
continue;
} else {
}
break;
}

var G__37289 = args37287.length;
switch (G__37289) {
case 1:
return sablono.core.datetime_local_field37286.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field37286.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37287.length)].join('')));

}
});

sablono.core.datetime_local_field37286.cljs$core$IFn$_invoke$arity$1 = (function (name__22912__auto__){
return sablono.core.datetime_local_field37286.call(null,name__22912__auto__,null);
});

sablono.core.datetime_local_field37286.cljs$core$IFn$_invoke$arity$2 = (function (name__22912__auto__,value__22913__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__22912__auto__,value__22913__auto__);
});

sablono.core.datetime_local_field37286.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field37286);

/**
 * Creates a email input field.
 */
sablono.core.email_field37290 = (function sablono$core$email_field37290(var_args){
var args37291 = [];
var len__17402__auto___37358 = arguments.length;
var i__17403__auto___37359 = (0);
while(true){
if((i__17403__auto___37359 < len__17402__auto___37358)){
args37291.push((arguments[i__17403__auto___37359]));

var G__37360 = (i__17403__auto___37359 + (1));
i__17403__auto___37359 = G__37360;
continue;
} else {
}
break;
}

var G__37293 = args37291.length;
switch (G__37293) {
case 1:
return sablono.core.email_field37290.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field37290.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37291.length)].join('')));

}
});

sablono.core.email_field37290.cljs$core$IFn$_invoke$arity$1 = (function (name__22912__auto__){
return sablono.core.email_field37290.call(null,name__22912__auto__,null);
});

sablono.core.email_field37290.cljs$core$IFn$_invoke$arity$2 = (function (name__22912__auto__,value__22913__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__22912__auto__,value__22913__auto__);
});

sablono.core.email_field37290.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field37290);

/**
 * Creates a file input field.
 */
sablono.core.file_field37294 = (function sablono$core$file_field37294(var_args){
var args37295 = [];
var len__17402__auto___37362 = arguments.length;
var i__17403__auto___37363 = (0);
while(true){
if((i__17403__auto___37363 < len__17402__auto___37362)){
args37295.push((arguments[i__17403__auto___37363]));

var G__37364 = (i__17403__auto___37363 + (1));
i__17403__auto___37363 = G__37364;
continue;
} else {
}
break;
}

var G__37297 = args37295.length;
switch (G__37297) {
case 1:
return sablono.core.file_field37294.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field37294.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37295.length)].join('')));

}
});

sablono.core.file_field37294.cljs$core$IFn$_invoke$arity$1 = (function (name__22912__auto__){
return sablono.core.file_field37294.call(null,name__22912__auto__,null);
});

sablono.core.file_field37294.cljs$core$IFn$_invoke$arity$2 = (function (name__22912__auto__,value__22913__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__22912__auto__,value__22913__auto__);
});

sablono.core.file_field37294.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field37294);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field37298 = (function sablono$core$hidden_field37298(var_args){
var args37299 = [];
var len__17402__auto___37366 = arguments.length;
var i__17403__auto___37367 = (0);
while(true){
if((i__17403__auto___37367 < len__17402__auto___37366)){
args37299.push((arguments[i__17403__auto___37367]));

var G__37368 = (i__17403__auto___37367 + (1));
i__17403__auto___37367 = G__37368;
continue;
} else {
}
break;
}

var G__37301 = args37299.length;
switch (G__37301) {
case 1:
return sablono.core.hidden_field37298.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field37298.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37299.length)].join('')));

}
});

sablono.core.hidden_field37298.cljs$core$IFn$_invoke$arity$1 = (function (name__22912__auto__){
return sablono.core.hidden_field37298.call(null,name__22912__auto__,null);
});

sablono.core.hidden_field37298.cljs$core$IFn$_invoke$arity$2 = (function (name__22912__auto__,value__22913__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__22912__auto__,value__22913__auto__);
});

sablono.core.hidden_field37298.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field37298);

/**
 * Creates a month input field.
 */
sablono.core.month_field37302 = (function sablono$core$month_field37302(var_args){
var args37303 = [];
var len__17402__auto___37370 = arguments.length;
var i__17403__auto___37371 = (0);
while(true){
if((i__17403__auto___37371 < len__17402__auto___37370)){
args37303.push((arguments[i__17403__auto___37371]));

var G__37372 = (i__17403__auto___37371 + (1));
i__17403__auto___37371 = G__37372;
continue;
} else {
}
break;
}

var G__37305 = args37303.length;
switch (G__37305) {
case 1:
return sablono.core.month_field37302.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field37302.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37303.length)].join('')));

}
});

sablono.core.month_field37302.cljs$core$IFn$_invoke$arity$1 = (function (name__22912__auto__){
return sablono.core.month_field37302.call(null,name__22912__auto__,null);
});

sablono.core.month_field37302.cljs$core$IFn$_invoke$arity$2 = (function (name__22912__auto__,value__22913__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__22912__auto__,value__22913__auto__);
});

sablono.core.month_field37302.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field37302);

/**
 * Creates a number input field.
 */
sablono.core.number_field37306 = (function sablono$core$number_field37306(var_args){
var args37307 = [];
var len__17402__auto___37374 = arguments.length;
var i__17403__auto___37375 = (0);
while(true){
if((i__17403__auto___37375 < len__17402__auto___37374)){
args37307.push((arguments[i__17403__auto___37375]));

var G__37376 = (i__17403__auto___37375 + (1));
i__17403__auto___37375 = G__37376;
continue;
} else {
}
break;
}

var G__37309 = args37307.length;
switch (G__37309) {
case 1:
return sablono.core.number_field37306.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field37306.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37307.length)].join('')));

}
});

sablono.core.number_field37306.cljs$core$IFn$_invoke$arity$1 = (function (name__22912__auto__){
return sablono.core.number_field37306.call(null,name__22912__auto__,null);
});

sablono.core.number_field37306.cljs$core$IFn$_invoke$arity$2 = (function (name__22912__auto__,value__22913__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__22912__auto__,value__22913__auto__);
});

sablono.core.number_field37306.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field37306);

/**
 * Creates a password input field.
 */
sablono.core.password_field37310 = (function sablono$core$password_field37310(var_args){
var args37311 = [];
var len__17402__auto___37378 = arguments.length;
var i__17403__auto___37379 = (0);
while(true){
if((i__17403__auto___37379 < len__17402__auto___37378)){
args37311.push((arguments[i__17403__auto___37379]));

var G__37380 = (i__17403__auto___37379 + (1));
i__17403__auto___37379 = G__37380;
continue;
} else {
}
break;
}

var G__37313 = args37311.length;
switch (G__37313) {
case 1:
return sablono.core.password_field37310.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field37310.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37311.length)].join('')));

}
});

sablono.core.password_field37310.cljs$core$IFn$_invoke$arity$1 = (function (name__22912__auto__){
return sablono.core.password_field37310.call(null,name__22912__auto__,null);
});

sablono.core.password_field37310.cljs$core$IFn$_invoke$arity$2 = (function (name__22912__auto__,value__22913__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__22912__auto__,value__22913__auto__);
});

sablono.core.password_field37310.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field37310);

/**
 * Creates a range input field.
 */
sablono.core.range_field37314 = (function sablono$core$range_field37314(var_args){
var args37315 = [];
var len__17402__auto___37382 = arguments.length;
var i__17403__auto___37383 = (0);
while(true){
if((i__17403__auto___37383 < len__17402__auto___37382)){
args37315.push((arguments[i__17403__auto___37383]));

var G__37384 = (i__17403__auto___37383 + (1));
i__17403__auto___37383 = G__37384;
continue;
} else {
}
break;
}

var G__37317 = args37315.length;
switch (G__37317) {
case 1:
return sablono.core.range_field37314.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field37314.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37315.length)].join('')));

}
});

sablono.core.range_field37314.cljs$core$IFn$_invoke$arity$1 = (function (name__22912__auto__){
return sablono.core.range_field37314.call(null,name__22912__auto__,null);
});

sablono.core.range_field37314.cljs$core$IFn$_invoke$arity$2 = (function (name__22912__auto__,value__22913__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__22912__auto__,value__22913__auto__);
});

sablono.core.range_field37314.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field37314);

/**
 * Creates a search input field.
 */
sablono.core.search_field37318 = (function sablono$core$search_field37318(var_args){
var args37319 = [];
var len__17402__auto___37386 = arguments.length;
var i__17403__auto___37387 = (0);
while(true){
if((i__17403__auto___37387 < len__17402__auto___37386)){
args37319.push((arguments[i__17403__auto___37387]));

var G__37388 = (i__17403__auto___37387 + (1));
i__17403__auto___37387 = G__37388;
continue;
} else {
}
break;
}

var G__37321 = args37319.length;
switch (G__37321) {
case 1:
return sablono.core.search_field37318.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field37318.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37319.length)].join('')));

}
});

sablono.core.search_field37318.cljs$core$IFn$_invoke$arity$1 = (function (name__22912__auto__){
return sablono.core.search_field37318.call(null,name__22912__auto__,null);
});

sablono.core.search_field37318.cljs$core$IFn$_invoke$arity$2 = (function (name__22912__auto__,value__22913__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__22912__auto__,value__22913__auto__);
});

sablono.core.search_field37318.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field37318);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field37322 = (function sablono$core$tel_field37322(var_args){
var args37323 = [];
var len__17402__auto___37390 = arguments.length;
var i__17403__auto___37391 = (0);
while(true){
if((i__17403__auto___37391 < len__17402__auto___37390)){
args37323.push((arguments[i__17403__auto___37391]));

var G__37392 = (i__17403__auto___37391 + (1));
i__17403__auto___37391 = G__37392;
continue;
} else {
}
break;
}

var G__37325 = args37323.length;
switch (G__37325) {
case 1:
return sablono.core.tel_field37322.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field37322.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37323.length)].join('')));

}
});

sablono.core.tel_field37322.cljs$core$IFn$_invoke$arity$1 = (function (name__22912__auto__){
return sablono.core.tel_field37322.call(null,name__22912__auto__,null);
});

sablono.core.tel_field37322.cljs$core$IFn$_invoke$arity$2 = (function (name__22912__auto__,value__22913__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__22912__auto__,value__22913__auto__);
});

sablono.core.tel_field37322.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field37322);

/**
 * Creates a text input field.
 */
sablono.core.text_field37326 = (function sablono$core$text_field37326(var_args){
var args37327 = [];
var len__17402__auto___37394 = arguments.length;
var i__17403__auto___37395 = (0);
while(true){
if((i__17403__auto___37395 < len__17402__auto___37394)){
args37327.push((arguments[i__17403__auto___37395]));

var G__37396 = (i__17403__auto___37395 + (1));
i__17403__auto___37395 = G__37396;
continue;
} else {
}
break;
}

var G__37329 = args37327.length;
switch (G__37329) {
case 1:
return sablono.core.text_field37326.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field37326.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37327.length)].join('')));

}
});

sablono.core.text_field37326.cljs$core$IFn$_invoke$arity$1 = (function (name__22912__auto__){
return sablono.core.text_field37326.call(null,name__22912__auto__,null);
});

sablono.core.text_field37326.cljs$core$IFn$_invoke$arity$2 = (function (name__22912__auto__,value__22913__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__22912__auto__,value__22913__auto__);
});

sablono.core.text_field37326.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field37326);

/**
 * Creates a time input field.
 */
sablono.core.time_field37330 = (function sablono$core$time_field37330(var_args){
var args37331 = [];
var len__17402__auto___37398 = arguments.length;
var i__17403__auto___37399 = (0);
while(true){
if((i__17403__auto___37399 < len__17402__auto___37398)){
args37331.push((arguments[i__17403__auto___37399]));

var G__37400 = (i__17403__auto___37399 + (1));
i__17403__auto___37399 = G__37400;
continue;
} else {
}
break;
}

var G__37333 = args37331.length;
switch (G__37333) {
case 1:
return sablono.core.time_field37330.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field37330.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37331.length)].join('')));

}
});

sablono.core.time_field37330.cljs$core$IFn$_invoke$arity$1 = (function (name__22912__auto__){
return sablono.core.time_field37330.call(null,name__22912__auto__,null);
});

sablono.core.time_field37330.cljs$core$IFn$_invoke$arity$2 = (function (name__22912__auto__,value__22913__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__22912__auto__,value__22913__auto__);
});

sablono.core.time_field37330.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field37330);

/**
 * Creates a url input field.
 */
sablono.core.url_field37334 = (function sablono$core$url_field37334(var_args){
var args37335 = [];
var len__17402__auto___37402 = arguments.length;
var i__17403__auto___37403 = (0);
while(true){
if((i__17403__auto___37403 < len__17402__auto___37402)){
args37335.push((arguments[i__17403__auto___37403]));

var G__37404 = (i__17403__auto___37403 + (1));
i__17403__auto___37403 = G__37404;
continue;
} else {
}
break;
}

var G__37337 = args37335.length;
switch (G__37337) {
case 1:
return sablono.core.url_field37334.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field37334.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37335.length)].join('')));

}
});

sablono.core.url_field37334.cljs$core$IFn$_invoke$arity$1 = (function (name__22912__auto__){
return sablono.core.url_field37334.call(null,name__22912__auto__,null);
});

sablono.core.url_field37334.cljs$core$IFn$_invoke$arity$2 = (function (name__22912__auto__,value__22913__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__22912__auto__,value__22913__auto__);
});

sablono.core.url_field37334.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field37334);

/**
 * Creates a week input field.
 */
sablono.core.week_field37338 = (function sablono$core$week_field37338(var_args){
var args37339 = [];
var len__17402__auto___37406 = arguments.length;
var i__17403__auto___37407 = (0);
while(true){
if((i__17403__auto___37407 < len__17402__auto___37406)){
args37339.push((arguments[i__17403__auto___37407]));

var G__37408 = (i__17403__auto___37407 + (1));
i__17403__auto___37407 = G__37408;
continue;
} else {
}
break;
}

var G__37341 = args37339.length;
switch (G__37341) {
case 1:
return sablono.core.week_field37338.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field37338.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37339.length)].join('')));

}
});

sablono.core.week_field37338.cljs$core$IFn$_invoke$arity$1 = (function (name__22912__auto__){
return sablono.core.week_field37338.call(null,name__22912__auto__,null);
});

sablono.core.week_field37338.cljs$core$IFn$_invoke$arity$2 = (function (name__22912__auto__,value__22913__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__22912__auto__,value__22913__auto__);
});

sablono.core.week_field37338.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field37338);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box37410 = (function sablono$core$check_box37410(var_args){
var args37411 = [];
var len__17402__auto___37414 = arguments.length;
var i__17403__auto___37415 = (0);
while(true){
if((i__17403__auto___37415 < len__17402__auto___37414)){
args37411.push((arguments[i__17403__auto___37415]));

var G__37416 = (i__17403__auto___37415 + (1));
i__17403__auto___37415 = G__37416;
continue;
} else {
}
break;
}

var G__37413 = args37411.length;
switch (G__37413) {
case 1:
return sablono.core.check_box37410.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box37410.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box37410.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37411.length)].join('')));

}
});

sablono.core.check_box37410.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box37410.call(null,name,null);
});

sablono.core.check_box37410.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box37410.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box37410.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box37410.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box37410);
/**
 * Creates a radio button.
 */
sablono.core.radio_button37418 = (function sablono$core$radio_button37418(var_args){
var args37419 = [];
var len__17402__auto___37422 = arguments.length;
var i__17403__auto___37423 = (0);
while(true){
if((i__17403__auto___37423 < len__17402__auto___37422)){
args37419.push((arguments[i__17403__auto___37423]));

var G__37424 = (i__17403__auto___37423 + (1));
i__17403__auto___37423 = G__37424;
continue;
} else {
}
break;
}

var G__37421 = args37419.length;
switch (G__37421) {
case 1:
return sablono.core.radio_button37418.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button37418.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button37418.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37419.length)].join('')));

}
});

sablono.core.radio_button37418.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button37418.call(null,group,null);
});

sablono.core.radio_button37418.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button37418.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button37418.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button37418.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button37418);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options37426 = (function sablono$core$select_options37426(coll){
var iter__17116__auto__ = (function sablono$core$select_options37426_$_iter__37435(s__37436){
return (new cljs.core.LazySeq(null,(function (){
var s__37436__$1 = s__37436;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__37436__$1);
if(temp__4425__auto__){
var s__37436__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37436__$2)){
var c__17114__auto__ = cljs.core.chunk_first.call(null,s__37436__$2);
var size__17115__auto__ = cljs.core.count.call(null,c__17114__auto__);
var b__37438 = cljs.core.chunk_buffer.call(null,size__17115__auto__);
if((function (){var i__37437 = (0);
while(true){
if((i__37437 < size__17115__auto__)){
var x = cljs.core._nth.call(null,c__17114__auto__,i__37437);
cljs.core.chunk_append.call(null,b__37438,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37441 = x;
var text = cljs.core.nth.call(null,vec__37441,(0),null);
var val = cljs.core.nth.call(null,vec__37441,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__37441,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options37426.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__37443 = (i__37437 + (1));
i__37437 = G__37443;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37438),sablono$core$select_options37426_$_iter__37435.call(null,cljs.core.chunk_rest.call(null,s__37436__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37438),null);
}
} else {
var x = cljs.core.first.call(null,s__37436__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37442 = x;
var text = cljs.core.nth.call(null,vec__37442,(0),null);
var val = cljs.core.nth.call(null,vec__37442,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__37442,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options37426.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options37426_$_iter__37435.call(null,cljs.core.rest.call(null,s__37436__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options37426);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down37444 = (function sablono$core$drop_down37444(var_args){
var args37445 = [];
var len__17402__auto___37448 = arguments.length;
var i__17403__auto___37449 = (0);
while(true){
if((i__17403__auto___37449 < len__17402__auto___37448)){
args37445.push((arguments[i__17403__auto___37449]));

var G__37450 = (i__17403__auto___37449 + (1));
i__17403__auto___37449 = G__37450;
continue;
} else {
}
break;
}

var G__37447 = args37445.length;
switch (G__37447) {
case 2:
return sablono.core.drop_down37444.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down37444.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37445.length)].join('')));

}
});

sablono.core.drop_down37444.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down37444.call(null,name,options,null);
});

sablono.core.drop_down37444.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down37444.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down37444);
/**
 * Creates a text area element.
 */
sablono.core.text_area37452 = (function sablono$core$text_area37452(var_args){
var args37453 = [];
var len__17402__auto___37456 = arguments.length;
var i__17403__auto___37457 = (0);
while(true){
if((i__17403__auto___37457 < len__17402__auto___37456)){
args37453.push((arguments[i__17403__auto___37457]));

var G__37458 = (i__17403__auto___37457 + (1));
i__17403__auto___37457 = G__37458;
continue;
} else {
}
break;
}

var G__37455 = args37453.length;
switch (G__37455) {
case 1:
return sablono.core.text_area37452.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area37452.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37453.length)].join('')));

}
});

sablono.core.text_area37452.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area37452.call(null,name,null);
});

sablono.core.text_area37452.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area37452.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area37452);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label37460 = (function sablono$core$label37460(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label37460);
/**
 * Creates a submit button.
 */
sablono.core.submit_button37461 = (function sablono$core$submit_button37461(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button37461);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button37462 = (function sablono$core$reset_button37462(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button37462);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to37463 = (function sablono$core$form_to37463(var_args){
var args__17409__auto__ = [];
var len__17402__auto___37468 = arguments.length;
var i__17403__auto___37469 = (0);
while(true){
if((i__17403__auto___37469 < len__17402__auto___37468)){
args__17409__auto__.push((arguments[i__17403__auto___37469]));

var G__37470 = (i__17403__auto___37469 + (1));
i__17403__auto___37469 = G__37470;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((1) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((1)),(0))):null);
return sablono.core.form_to37463.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17410__auto__);
});

sablono.core.form_to37463.cljs$core$IFn$_invoke$arity$variadic = (function (p__37466,body){
var vec__37467 = p__37466;
var method = cljs.core.nth.call(null,vec__37467,(0),null);
var action = cljs.core.nth.call(null,vec__37467,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to37463.cljs$lang$maxFixedArity = (1);

sablono.core.form_to37463.cljs$lang$applyTo = (function (seq37464){
var G__37465 = cljs.core.first.call(null,seq37464);
var seq37464__$1 = cljs.core.next.call(null,seq37464);
return sablono.core.form_to37463.cljs$core$IFn$_invoke$arity$variadic(G__37465,seq37464__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to37463);

//# sourceMappingURL=core.js.map?rel=1446795341964