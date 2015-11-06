// Compiled by ClojureScript 1.7.145 {}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('devcards.system');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('devcards.util.markdown');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.call(null);
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__16344__auto__ = (function (){var and__16332__auto__ = typeof Symbol !== 'undefined';
if(and__16332__auto__){
var and__16332__auto____$1 = cljs.core.fn_QMARK_.call(null,Symbol);
if(and__16332__auto____$1){
var and__16332__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__16332__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__16332__auto____$2;
}
} else {
return and__16332__auto____$1;
}
} else {
return and__16332__auto__;
}
})();
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__27307_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__27307_SHARP_.detail], null));
}));

return true;
})()
;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(){
devcards.system.start_ui.call(null,devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_.call(null);
});
devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__16332__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__16332__auto__){
var map__27314 = c;
var map__27314__$1 = ((((!((map__27314 == null)))?((((map__27314.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27314.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27314):map__27314);
var path = cljs.core.get.call(null,map__27314__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__27314__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return and__16332__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"card?","card?",2082377665,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}


return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",-1375971588),c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.hash.call(null,raw_html_str))].join(''),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),raw_html_str], null)], null)));
});
devcards.core.get_props;

devcards.core.ref__GT_node;
devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__4425__auto__ = devcards.core.ref__GT_node.call(null,this$,"code-ref");
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
var temp__4425__auto____$1 = devcards.core.get_hljs.call(null);
if(cljs.core.truth_(temp__4425__auto____$1)){
var hljs = temp__4425__auto____$1;
var temp__4425__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__4425__auto____$2)){
var highlight_block = temp__4425__auto____$2;
return highlight_block.call(null,node);
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
var base__23132__auto___27320 = {"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "render": (function (){
var this$ = this;
return React.createElement("pre",{"className": (cljs.core.truth_(devcards.core.get_hljs.call(null))?"com-rigsomelight-devcards-code-highlighting":"")},React.createElement("code",{"className": (function (){var or__16344__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return "";
}
})(), "ref": "code-ref"},sablono.interpreter.interpret.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))));
})};
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__23132__auto___27320);
}

var seq__27316_27321 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__27317_27322 = null;
var count__27318_27323 = (0);
var i__27319_27324 = (0);
while(true){
if((i__27319_27324 < count__27318_27323)){
var property__23133__auto___27325 = cljs.core._nth.call(null,chunk__27317_27322,i__27319_27324);
if(cljs.core.truth_((base__23132__auto___27320[property__23133__auto___27325]))){
(devcards.core.CodeHighlight.prototype[property__23133__auto___27325] = (base__23132__auto___27320[property__23133__auto___27325]));
} else {
}

var G__27326 = seq__27316_27321;
var G__27327 = chunk__27317_27322;
var G__27328 = count__27318_27323;
var G__27329 = (i__27319_27324 + (1));
seq__27316_27321 = G__27326;
chunk__27317_27322 = G__27327;
count__27318_27323 = G__27328;
i__27319_27324 = G__27329;
continue;
} else {
var temp__4425__auto___27330 = cljs.core.seq.call(null,seq__27316_27321);
if(temp__4425__auto___27330){
var seq__27316_27331__$1 = temp__4425__auto___27330;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27316_27331__$1)){
var c__17147__auto___27332 = cljs.core.chunk_first.call(null,seq__27316_27331__$1);
var G__27333 = cljs.core.chunk_rest.call(null,seq__27316_27331__$1);
var G__27334 = c__17147__auto___27332;
var G__27335 = cljs.core.count.call(null,c__17147__auto___27332);
var G__27336 = (0);
seq__27316_27321 = G__27333;
chunk__27317_27322 = G__27334;
count__27318_27323 = G__27335;
i__27319_27324 = G__27336;
continue;
} else {
var property__23133__auto___27337 = cljs.core.first.call(null,seq__27316_27331__$1);
if(cljs.core.truth_((base__23132__auto___27320[property__23133__auto___27337]))){
(devcards.core.CodeHighlight.prototype[property__23133__auto___27337] = (base__23132__auto___27320[property__23133__auto___27337]));
} else {
}

var G__27338 = cljs.core.next.call(null,seq__27316_27331__$1);
var G__27339 = null;
var G__27340 = (0);
var G__27341 = (0);
seq__27316_27321 = G__27338;
chunk__27317_27322 = G__27339;
count__27318_27323 = G__27340;
i__27319_27324 = G__27341;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
return React.createElement(devcards.core.CodeHighlight,{"code": code_str, "lang": lang});
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__17257__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17258__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17259__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17260__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17261__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17261__auto__,method_table__17257__auto__,prefer_table__17258__auto__,method_cache__17259__auto__,cached_hierarchy__17260__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__27342){
var map__27343 = p__27342;
var map__27343__$1 = ((((!((map__27343 == null)))?((((map__27343.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27343.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27343):map__27343);
var content = cljs.core.get.call(null,map__27343__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__27345){
var map__27346 = p__27345;
var map__27346__$1 = ((((!((map__27346 == null)))?((((map__27346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27346):map__27346);
var block = map__27346__$1;
var content = cljs.core.get.call(null,map__27346__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,{"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)});
}));
devcards.core.react_element_QMARK_;
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__17409__auto__ = [];
var len__17402__auto___27350 = arguments.length;
var i__17403__auto___27351 = (0);
while(true){
if((i__17403__auto___27351 < len__17402__auto___27350)){
args__17409__auto__.push((arguments[i__17403__auto___27351]));

var G__27352 = (i__17403__auto___27351 + (1));
i__17403__auto___27351 = G__27352;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((0) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((0)),(0))):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__17410__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.call(null,(function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_(devcards.core.react_element_QMARK_.call(null,x))){
return null;
} else {
return [cljs.core.str("```clojure\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,x)),cljs.core.str("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.call(null,devcards.util.markdown.parse_out_blocks,strs__$1);
var attrs27349 = cljs.core.map.call(null,devcards.core.markdown_block__GT_react,blocks);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27349))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-markdown","com-rigsomelight-devcards-typog"], null)], null),attrs27349)):{"className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27349))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27349)], null))));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown. \n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

return React.createElement("div",{"style": {"color": "#a94442"}},sablono.interpreter.interpret.call(null,message));
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq27348){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27348));
});
devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",{"className": (function (){var G__27354 = devcards.system.devcards_rendered_card_class;
var G__27354__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__27354),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__27354);
var G__27354__$2 = (cljs.core.truth_(cljs.core.not_empty.call(null,classname))?[cljs.core.str(G__27354__$1),cljs.core.str(" "),cljs.core.str(classname)].join(''):G__27354__$1);
return G__27354__$2;
})()},sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args27355 = [];
var len__17402__auto___27364 = arguments.length;
var i__17403__auto___27365 = (0);
while(true){
if((i__17403__auto___27365 < len__17402__auto___27364)){
args27355.push((arguments[i__17403__auto___27365]));

var G__27366 = (i__17403__auto___27365 + (1));
i__17403__auto___27365 = G__27366;
continue;
} else {
}
break;
}

var G__27357 = args27355.length;
switch (G__27357) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27355.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__27358 = card;
var map__27358__$1 = ((((!((map__27358 == null)))?((((map__27358.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27358.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27358):map__27358);
var path = cljs.core.get.call(null,map__27358__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__27358__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": [cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')},sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"},(function (){var attrs27360 = (cljs.core.truth_(path)?React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__27358,map__27358__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__27358,map__27358__$1,path,options))
)},sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," "):(function (){var attrs27361 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs27361))?sablono.interpreter.attributes.call(null,attrs27361):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27361))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27361)], null))));
})());
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27360))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-typog"], null)], null),attrs27360)):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27360))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27360)], null))));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;

/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__16999__auto__ = (((this$ == null))?null:this$);
var m__17000__auto__ = (devcards.core._devcard_options[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,this$,devcard_opts);
} else {
var m__17000__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__16999__auto__ = (((this$ == null))?null:this$);
var m__17000__auto__ = (devcards.core._devcard[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,this$,devcard_opts);
} else {
var m__17000__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcard.-devcard",this$);
}
}
}
});

devcards.core.hist_recorder_STAR_;
devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__4425__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__4425__auto__)){
var comp = temp__4425__auto__;
return React.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return (this$.props[cljs.core.name.call(null,k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name.call(null,k)]);
} else {
return null;
}
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__16344__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || (data.cljs$core$IAtom$))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data))){
return data;
} else {
return cljs.core.atom.call(null,data);
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
return devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
}):(function (this$){
return devcards.core.wrangle_inital_data.call(null,this$);
}));
devcards.core.atom_like_QMARK_;
var base__23132__auto___27375 = {"getInitialState": (function (){
return {"unique_id": cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-base-","devcards-base-",-1457268595,null))};
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(new cljs.core.Keyword(null,"static-state","static-state",-1049492012).cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,initial_data))?cljs.core.deref.call(null,initial_data):initial_data);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,atom),data)){
return cljs.core.reset_BANG_.call(null,atom,data);
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return this$.setState((function (){var or__16344__auto__ = (function (){var and__16332__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__16332__auto__)){
return this$.state;
} else {
return and__16332__auto__;
}
})();
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return {"data_atom": devcards.core.wrangle_inital_data.call(null,this$)};
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_((function (){var and__16332__auto__ = data_atom;
if(cljs.core.truth_(and__16332__auto__)){
return id;
} else {
return and__16332__auto__;
}
})())){
return cljs.core.remove_watch.call(null,data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
var temp__4425__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(temp__4425__auto__)){
var data_atom = temp__4425__auto__;
var temp__4425__auto____$1 = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_(temp__4425__auto____$1)){
var id = temp__4425__auto____$1;
return cljs.core.add_watch.call(null,data_atom,id,((function (id,temp__4425__auto____$1,data_atom,temp__4425__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.forceUpdate();
});})(id,temp__4425__auto____$1,data_atom,temp__4425__auto__,this$))
);
} else {
return null;
}
} else {
return null;
}
}):(function (){
return null;
})), "render": (function (){
var this$ = this;
var data_atom = devcards.core.get_data_atom.call(null,this$);
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_.call(null,m)){
return m.call(null,data_atom,this$);
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not.call(null,devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_))))?devcards.core.code_highlight.call(null,devcards.util.utils.pprint_code.call(null,main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
var main = main_obj;
var hist_ctl = (cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(options))?devcards.core.hist_recorder_STAR_.call(null,data_atom):null);
var document = (function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__4425__auto__)){
var docu = temp__4425__auto__;
return devcards.core.markdown__GT_react.call(null,docu);
} else {
return null;
}
})();
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?(function (){var attrs27370 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27370))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs27370)):{"className": "com-rigsomelight-devcards-padding-top-border"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27370))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27370)], null))));
})():null);
var card__$1 = (((typeof main_obj === 'string') || ((main_obj == null)))?cljs.core.assoc_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"hide-border","hide-border",1463657151)], null),true):card);
var children = cljs.core.keep.call(null,cljs.core.identity,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,edn),hist_ctl),main),document));
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card__$1);
} else {
return React.createElement("div",{"className": "com-rigsomelight-devcards-frameless"},sablono.interpreter.interpret.call(null,children));
}
})};
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__23132__auto___27375);
}

var seq__27371_27376 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__27372_27377 = null;
var count__27373_27378 = (0);
var i__27374_27379 = (0);
while(true){
if((i__27374_27379 < count__27373_27378)){
var property__23133__auto___27380 = cljs.core._nth.call(null,chunk__27372_27377,i__27374_27379);
if(cljs.core.truth_((base__23132__auto___27375[property__23133__auto___27380]))){
(devcards.core.DevcardBase.prototype[property__23133__auto___27380] = (base__23132__auto___27375[property__23133__auto___27380]));
} else {
}

var G__27381 = seq__27371_27376;
var G__27382 = chunk__27372_27377;
var G__27383 = count__27373_27378;
var G__27384 = (i__27374_27379 + (1));
seq__27371_27376 = G__27381;
chunk__27372_27377 = G__27382;
count__27373_27378 = G__27383;
i__27374_27379 = G__27384;
continue;
} else {
var temp__4425__auto___27385 = cljs.core.seq.call(null,seq__27371_27376);
if(temp__4425__auto___27385){
var seq__27371_27386__$1 = temp__4425__auto___27385;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27371_27386__$1)){
var c__17147__auto___27387 = cljs.core.chunk_first.call(null,seq__27371_27386__$1);
var G__27388 = cljs.core.chunk_rest.call(null,seq__27371_27386__$1);
var G__27389 = c__17147__auto___27387;
var G__27390 = cljs.core.count.call(null,c__17147__auto___27387);
var G__27391 = (0);
seq__27371_27376 = G__27388;
chunk__27372_27377 = G__27389;
count__27373_27378 = G__27390;
i__27374_27379 = G__27391;
continue;
} else {
var property__23133__auto___27392 = cljs.core.first.call(null,seq__27371_27386__$1);
if(cljs.core.truth_((base__23132__auto___27375[property__23133__auto___27392]))){
(devcards.core.DevcardBase.prototype[property__23133__auto___27392] = (base__23132__auto___27375[property__23133__auto___27392]));
} else {
}

var G__27393 = cljs.core.next.call(null,seq__27371_27386__$1);
var G__27394 = null;
var G__27395 = (0);
var G__27396 = (0);
seq__27371_27376 = G__27393;
chunk__27372_27377 = G__27394;
count__27373_27378 = G__27395;
i__27374_27379 = G__27396;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
var temp__4425__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(temp__4425__auto__)){
var node_fn = temp__4425__auto__;
var temp__4425__auto____$1 = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4425__auto____$1)){
var node = temp__4425__auto____$1;
return node_fn.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),node);
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__23132__auto___27401 = {"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))].join('')};
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__16332__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__16332__auto__)){
return cljs.core.not_EQ_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),(prevP["node_fn"]));
} else {
return and__16332__auto__;
}
})())){
return devcards.core.render_into_dom.call(null,this$);
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4425__auto__ = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
return React.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return devcards.core.render_into_dom.call(null,this$);
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return React.DOM.div({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329))},"Card has not mounted DOM node.");
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))};
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__23132__auto___27401);
}

var seq__27397_27402 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__27398_27403 = null;
var count__27399_27404 = (0);
var i__27400_27405 = (0);
while(true){
if((i__27400_27405 < count__27399_27404)){
var property__23133__auto___27406 = cljs.core._nth.call(null,chunk__27398_27403,i__27400_27405);
if(cljs.core.truth_((base__23132__auto___27401[property__23133__auto___27406]))){
(devcards.core.DomComponent.prototype[property__23133__auto___27406] = (base__23132__auto___27401[property__23133__auto___27406]));
} else {
}

var G__27407 = seq__27397_27402;
var G__27408 = chunk__27398_27403;
var G__27409 = count__27399_27404;
var G__27410 = (i__27400_27405 + (1));
seq__27397_27402 = G__27407;
chunk__27398_27403 = G__27408;
count__27399_27404 = G__27409;
i__27400_27405 = G__27410;
continue;
} else {
var temp__4425__auto___27411 = cljs.core.seq.call(null,seq__27397_27402);
if(temp__4425__auto___27411){
var seq__27397_27412__$1 = temp__4425__auto___27411;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27397_27412__$1)){
var c__17147__auto___27413 = cljs.core.chunk_first.call(null,seq__27397_27412__$1);
var G__27414 = cljs.core.chunk_rest.call(null,seq__27397_27412__$1);
var G__27415 = c__17147__auto___27413;
var G__27416 = cljs.core.count.call(null,c__17147__auto___27413);
var G__27417 = (0);
seq__27397_27402 = G__27414;
chunk__27398_27403 = G__27415;
count__27399_27404 = G__27416;
i__27400_27405 = G__27417;
continue;
} else {
var property__23133__auto___27418 = cljs.core.first.call(null,seq__27397_27412__$1);
if(cljs.core.truth_((base__23132__auto___27401[property__23133__auto___27418]))){
(devcards.core.DomComponent.prototype[property__23133__auto___27418] = (base__23132__auto___27401[property__23133__auto___27418]));
} else {
}

var G__27419 = cljs.core.next.call(null,seq__27397_27412__$1);
var G__27420 = null;
var G__27421 = (0);
var G__27422 = (0);
seq__27397_27402 = G__27419;
chunk__27398_27403 = G__27420;
count__27399_27404 = G__27421;
i__27400_27405 = G__27422;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__16344__auto__ = x === true;
if(or__16344__auto__){
return or__16344__auto__;
} else {
var or__16344__auto____$1 = x === false;
if(or__16344__auto____$1){
return or__16344__auto____$1;
} else {
var or__16344__auto____$2 = (x == null);
if(or__16344__auto____$2){
return or__16344__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__16344__auto__ = typeof x === 'string';
if(or__16344__auto__){
return or__16344__auto__;
} else {
var or__16344__auto____$1 = (x == null);
if(or__16344__auto____$1){
return or__16344__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__16344__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,((function (propagated_errors){
return (function (p1__27423_SHARP_){
return !(p1__27423_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__27432 = opts;
var map__27432__$1 = ((((!((map__27432 == null)))?((((map__27432.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27432.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27432):map__27432);
var name = cljs.core.get.call(null,map__27432__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__27432__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__27432__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__27432__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__16344__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__16344__auto__){
return or__16344__auto__;
} else {
var or__16344__auto____$1 = (options == null);
if(or__16344__auto____$1){
return or__16344__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__16344__auto__ = (initial_data == null);
if(or__16344__auto__){
return or__16344__auto__;
} else {
var or__16344__auto____$1 = cljs.core.vector_QMARK_.call(null,initial_data);
if(or__16344__auto____$1){
return or__16344__auto____$1;
} else {
var or__16344__auto____$2 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__16344__auto____$2){
return or__16344__auto____$2;
} else {
var or__16344__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data));
if(or__16344__auto____$3){
return or__16344__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.mapv.call(null,((function (map__27432,map__27432__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__27424_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__27424_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__27432,map__27432__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",{"style": {"color": "#a94442", "display": "flex", "margin": "0.5em 0px"}},sablono.interpreter.interpret.call(null,React.createElement("code",{"style": {"flex": "1 100px", "marginRight": "10px"}},(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?sablono.interpreter.interpret.call(null,cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))):null))),React.createElement("span",{"style": {"flex": "3 100px", "marginRight": "10px"}},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",{"style": {"flex": "1 100px"}}," Received: ",(function (){var attrs27440 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs27440))?sablono.interpreter.attributes.call(null,attrs27440):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27440))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27440)], null))));
})()));
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null)], null);
} else {
return m;
}
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",{"className": "com-rigsomelight-devcards-card-base-no-pad"},(function (){var attrs27444 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27444))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs27444)):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27444))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27444)], null))));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs27445 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27445))?sablono.interpreter.attributes.call(null,attrs27445):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27445))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27445)], null))));
})(),((cljs.core.map_QMARK_.call(null,opts))?sablono.interpreter.interpret.call(null,(function (){var attrs27446 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27446))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs27446)):{"className": "com-rigsomelight-devcards-padding-top-border"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27446))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27446)], null))));
})()):null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__27447_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__27447_SHARP_);
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options.call(null,card_options);
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return devcards.core.render_errors.call(null,card_options,errors);
} else {
return React.createElement(devcards.core.DevcardBase,{"card": devcards.core.add_environment_defaults.call(null,card_options)});
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16958__auto__,k__16959__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core._lookup.call(null,this__16958__auto____$1,k__16959__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k27449,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__27451 = (((k27449 instanceof cljs.core.Keyword))?k27449.fqn:null);
switch (G__27451) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27449,else__16961__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16972__auto__,writer__16973__auto__,opts__16974__auto__){
var self__ = this;
var this__16972__auto____$1 = this;
var pr_pair__16975__auto__ = ((function (this__16972__auto____$1){
return (function (keyval__16976__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,cljs.core.pr_writer,""," ","",opts__16974__auto__,keyval__16976__auto__);
});})(this__16972__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,pr_pair__16975__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__16974__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27448){
var self__ = this;
var G__27448__$1 = this;
return (new cljs.core.RecordIter((0),G__27448__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16952__auto__){
var self__ = this;
var this__16952__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16962__auto__){
var self__ = this;
var this__16962__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16953__auto__){
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

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16954__auto__,other__16955__auto__){
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

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16967__auto__,k__16968__auto__){
var self__ = this;
var this__16967__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__16968__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16967__auto____$1),self__.__meta),k__16968__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16968__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__27448){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__27452 = cljs.core.keyword_identical_QMARK_;
var expr__27453 = k__16966__auto__;
if(cljs.core.truth_(pred__27452.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__27453))){
return (new devcards.core.IdentiyOptions(G__27448,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__27448),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__27448){
var self__ = this;
var this__16957__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__27448,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16963__auto__,entry__16964__auto__){
var self__ = this;
var this__16963__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16964__auto__)){
return cljs.core._assoc.call(null,this__16963__auto____$1,cljs.core._nth.call(null,entry__16964__auto__,(0)),cljs.core._nth.call(null,entry__16964__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16963__auto____$1,entry__16964__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__16992__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__16992__auto__,writer__16993__auto__){
return cljs.core._write.call(null,writer__16993__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__27450){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__27450),null,cljs.core.dissoc.call(null,G__27450,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__27456){
var map__27459 = p__27456;
var map__27459__$1 = ((((!((map__27459 == null)))?((((map__27459.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27459.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27459):map__27459);
var devcard_opts = map__27459__$1;
var options = cljs.core.get.call(null,map__27459__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__27459,map__27459__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__27459,map__27459__$1,devcard_opts,options))
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),main_obj,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),true], null),devcards.core.assert_options_map.call(null,options)));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16958__auto__,k__16959__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core._lookup.call(null,this__16958__auto____$1,k__16959__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k27462,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__27464 = (((k27462 instanceof cljs.core.Keyword))?k27462.fqn:null);
switch (G__27464) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27462,else__16961__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16972__auto__,writer__16973__auto__,opts__16974__auto__){
var self__ = this;
var this__16972__auto____$1 = this;
var pr_pair__16975__auto__ = ((function (this__16972__auto____$1){
return (function (keyval__16976__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,cljs.core.pr_writer,""," ","",opts__16974__auto__,keyval__16976__auto__);
});})(this__16972__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,pr_pair__16975__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__16974__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27461){
var self__ = this;
var G__27461__$1 = this;
return (new cljs.core.RecordIter((0),G__27461__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16952__auto__){
var self__ = this;
var this__16952__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16962__auto__){
var self__ = this;
var this__16962__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16953__auto__){
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

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16954__auto__,other__16955__auto__){
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

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16967__auto__,k__16968__auto__){
var self__ = this;
var this__16967__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__16968__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16967__auto____$1),self__.__meta),k__16968__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16968__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__27461){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__27465 = cljs.core.keyword_identical_QMARK_;
var expr__27466 = k__16966__auto__;
if(cljs.core.truth_(pred__27465.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__27466))){
return (new devcards.core.AtomLikeOptions(G__27461,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__27461),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__27461){
var self__ = this;
var this__16957__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__27461,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16963__auto__,entry__16964__auto__){
var self__ = this;
var this__16963__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16964__auto__)){
return cljs.core._assoc.call(null,this__16963__auto____$1,cljs.core._nth.call(null,entry__16964__auto__,(0)),cljs.core._nth.call(null,entry__16964__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16963__auto____$1,entry__16964__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__16992__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__16992__auto__,writer__16993__auto__){
return cljs.core._write.call(null,writer__16993__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__27463){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__27463),null,cljs.core.dissoc.call(null,G__27463,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.util.edn_renderer.html_edn.call(null,((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (main_obj.cljs$core$IDeref$))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj)))?cljs.core.deref.call(null,main_obj):main_obj)));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16958__auto__,k__16959__auto__){
var self__ = this;
var this__16958__auto____$1 = this;
return cljs.core._lookup.call(null,this__16958__auto____$1,k__16959__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16960__auto__,k27472,else__16961__auto__){
var self__ = this;
var this__16960__auto____$1 = this;
var G__27474 = (((k27472 instanceof cljs.core.Keyword))?k27472.fqn:null);
switch (G__27474) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27472,else__16961__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16972__auto__,writer__16973__auto__,opts__16974__auto__){
var self__ = this;
var this__16972__auto____$1 = this;
var pr_pair__16975__auto__ = ((function (this__16972__auto____$1){
return (function (keyval__16976__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,cljs.core.pr_writer,""," ","",opts__16974__auto__,keyval__16976__auto__);
});})(this__16972__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16973__auto__,pr_pair__16975__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__16974__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27471){
var self__ = this;
var G__27471__$1 = this;
return (new cljs.core.RecordIter((0),G__27471__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16956__auto__){
var self__ = this;
var this__16956__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16952__auto__){
var self__ = this;
var this__16952__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16962__auto__){
var self__ = this;
var this__16962__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16953__auto__){
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

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16954__auto__,other__16955__auto__){
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

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16967__auto__,k__16968__auto__){
var self__ = this;
var this__16967__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__16968__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16967__auto____$1),self__.__meta),k__16968__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16968__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16965__auto__,k__16966__auto__,G__27471){
var self__ = this;
var this__16965__auto____$1 = this;
var pred__27475 = cljs.core.keyword_identical_QMARK_;
var expr__27476 = k__16966__auto__;
if(cljs.core.truth_(pred__27475.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__27476))){
return (new devcards.core.EdnLikeOptions(G__27471,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16966__auto__,G__27471),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16970__auto__){
var self__ = this;
var this__16970__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16957__auto__,G__27471){
var self__ = this;
var this__16957__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__27471,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16963__auto__,entry__16964__auto__){
var self__ = this;
var this__16963__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16964__auto__)){
return cljs.core._assoc.call(null,this__16963__auto____$1,cljs.core._nth.call(null,entry__16964__auto__,(0)),cljs.core._nth.call(null,entry__16964__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16963__auto____$1,entry__16964__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__16992__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__16992__auto__,writer__16993__auto__){
return cljs.core._write.call(null,writer__16993__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__27473){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__27473),null,cljs.core.dissoc.call(null,G__27473,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__16332__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x));
if(and__16332__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
} else {
return and__16332__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || (main_obj.devcards$core$IDevcardOptions$))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_.call(null,main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__27490 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__27490 == null))){
if((false) || (G__27490.devcards$core$IDevcard$)){
return true;
} else {
if((!G__27490.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__27490);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__27490);
}
})()){
return devcards.core._devcard.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors.call(null,devcards.core._devcard_options.call(null,devcards.core.coerce_to_devcards_options.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
return React.createElement(devcards.core.DomComponent,{"node_fn": node_fn, "data_atom": data_atom});
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.call(null,devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742)], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__27493 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__27493__$1 = ((((!((map__27493 == null)))?((((map__27493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27493):map__27493);
var history = cljs.core.get.call(null,map__27493__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__27493__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return ((pointer + (1)) < cljs.core.count.call(null,history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__27497 = cljs.core.deref.call(null,history_atom);
var map__27497__$1 = ((((!((map__27497 == null)))?((((map__27497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27497):map__27497);
var history = cljs.core.get.call(null,map__27497__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__27497__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_back.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer + (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer + (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__27501 = cljs.core.deref.call(null,history_atom);
var map__27501__$1 = ((((!((map__27501 == null)))?((((map__27501.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27501.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27501):map__27501);
var history = cljs.core.get.call(null,map__27501__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__27501__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer - (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer - (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__27505 = cljs.core.deref.call(null,history_atom);
var map__27505__$1 = ((((!((map__27505 == null)))?((((map__27505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27505):map__27505);
var history = cljs.core.get.call(null,map__27505__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.first.call(null,history));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = React.createClass({"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-history-runner-","devcards-history-runner-",-1709703043,null)))].join(''), "history_atom": cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], null))};
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.deref.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)))));
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__16332__auto__ = data_atom;
if(cljs.core.truth_(and__16332__auto__)){
return id;
} else {
return and__16332__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_.call(null,this$))){
return cljs.core.swap_BANG_.call(null,history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__27507){
var map__27508 = p__27507;
var map__27508__$1 = ((((!((map__27508 == null)))?((((map__27508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27508):map__27508);
var ha = map__27508__$1;
var pointer = cljs.core.get.call(null,map__27508__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__27508__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__27508__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
} else {
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var abridged_hist = cljs.core.drop.call(null,pointer,history);
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,abridged_hist))){
return cljs.core.cons.call(null,n,abridged_hist);
} else {
return abridged_hist;
}
})(),new cljs.core.Keyword(null,"pointer","pointer",85071187),(0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,history_atom));
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,hist))){
return cljs.core.cons.call(null,n,hist);
} else {
return hist;
}
})(),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__16344__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())){
return React.createElement("div",{"style": {"display": (cljs.core.truth_((function (){var or__16344__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())?"block":"none")}, "className": "com-rigsomelight-devcards-history-control-bar"},(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_back.call(null,this$))?"visible":"hidden")}, "href": "#", "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-left"},"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
return cljs.core.reset_BANG_.call(null,data_atom,cljs.core.deref.call(null,data_atom));
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-stop"},"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-right"},"")));
})(),(function (){var listener = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": listener, "onTouchEnd": listener},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-small-arrow"}),React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-small-arrow"}),React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-block"})));
})());
} else {
return null;
}
})});
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
return React.createElement(devcards.core.HistoryComponent,{"data_atom": data_atom});
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206)], null),cljs.core.conj,cljs.core.merge.call(null,cljs.core.select_keys.call(null,cljs.test.get_current_env.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)),m));
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463)], null),(function (m){
devcards.core.collect_test.call(null,m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_27523 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_27523;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__17257__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17258__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17259__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17260__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17261__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17261__auto__,method_table__17257__auto__,prefer_table__17258__auto__,method_cache__17259__auto__,cached_hierarchy__17260__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs27524 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27524))?sablono.interpreter.attributes.call(null,attrs27524):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27524))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27524)], null))));
}));
devcards.core.display_message = (function devcards$core$display_message(p__27525,body){
var map__27529 = p__27525;
var map__27529__$1 = ((((!((map__27529 == null)))?((((map__27529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27529):map__27529);
var message = cljs.core.get.call(null,map__27529__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs27531 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs27531))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs27531)):{"className": "com-rigsomelight-devcards-test-message"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27531))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27531)], null))));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__27532){
var map__27535 = p__27532;
var map__27535__$1 = ((((!((map__27535 == null)))?((((map__27535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27535):map__27535);
var m = map__27535__$1;
var expected = cljs.core.get.call(null,map__27535__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
return devcards.core.display_message.call(null,m,React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"}));
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs27539 = [cljs.core.str(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs27539))?sablono.interpreter.attributes.call(null,attrs27539):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27539))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27539)], null))));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs27540 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27540))?sablono.interpreter.attributes.call(null,attrs27540):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27540))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27540)], null))));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__27541){
var map__27542 = p__27541;
var map__27542__$1 = ((((!((map__27542 == null)))?((((map__27542.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27542.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27542):map__27542);
var testing_contexts = cljs.core.get.call(null,map__27542__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs27544 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map.call(null,((function (map__27542,map__27542__$1,testing_contexts){
return (function (t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__27542,map__27542__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.first.call(null,testing_contexts)], null))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27544))?sablono.interpreter.attributes.call(null,attrs27544):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27544))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27544)], null))));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs27549 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__27550,t){
var map__27551 = p__27550;
var map__27551__$1 = ((((!((map__27551 == null)))?((((map__27551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27551):map__27551);
var last_context = cljs.core.get.call(null,map__27551__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__27551__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = cljs.core._conj.call(null,cljs.core.List.EMPTY,devcards.core.test_renderer.call(null,t));
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)))),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse.call(null,tests)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27549))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs27549)):{"className": "com-rigsomelight-devcards-test-card"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27549))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27549)], null))));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__27565){
var map__27566 = p__27565;
var map__27566__$1 = ((((!((map__27566 == null)))?((((map__27566.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27566.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27566):map__27566);
var type = cljs.core.get.call(null,map__27566__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__27564 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__27564__$1 = ((((!((map__27564 == null)))?((((map__27564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27564):map__27564);
var fail = cljs.core.get.call(null,map__27564__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__27564__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__27564__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"},React.createElement("div",{"className": "com-rigsomelight-devcards-panel-heading"},React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__27564,map__27564__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__27564,map__27564__$1,fail,pass,error,error__$1))
)},(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join('')):null)),React.createElement("button",{"style": {"float": "right", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__27564,map__27564__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": cljs.core.identity});
});})(error_QMARK_,tests,some_tests,total_tests,map__27564,map__27564__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,total_tests)),((((fail + error__$1) === (0)))?null:sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__27564,map__27564__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__27564,map__27564__$1,fail,pass,error,error__$1){
return (function (p__27569){
var map__27570 = p__27569;
var map__27570__$1 = ((((!((map__27570 == null)))?((((map__27570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27570):map__27570);
var type = cljs.core.get.call(null,map__27570__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__27564,map__27564__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__27564,map__27564__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,[cljs.core.str((fail + error__$1))].join(''))))),((((pass == null)) || ((pass === (0))))?null:sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__27564,map__27564__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__27564,map__27564__$1,fail,pass,error,error__$1){
return (function (p__27572){
var map__27573 = p__27572;
var map__27573__$1 = ((((!((map__27573 == null)))?((((map__27573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27573):map__27573);
var type = cljs.core.get.call(null,map__27573__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__27564,map__27564__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__27564,map__27564__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,pass))))),React.createElement("div",{"className": devcards.system.devcards_rendered_card_class},sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__16344__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return cljs.core.identity;
}
})(),tests)))));
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.call(null);
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.call(null);
var test_env = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
cljs.test.set_env_BANG_.call(null,test_env);

var tests = cljs.core.concat.call(null,test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.call(null,out,cljs.test.get_current_env.call(null));

return cljs.core.async.close_BANG_.call(null,out);
});})(out,test_env))
], null));
cljs.core.prn.call(null,"Running tests!!");

cljs.test.run_block.call(null,tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__20183__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20183__auto__){
return (function (){
var f__20184__auto__ = (function (){var switch__20118__auto__ = ((function (c__20183__auto__){
return (function (state_27661){
var state_val_27662 = (state_27661[(1)]);
if((state_val_27662 === (7))){
var state_27661__$1 = state_27661;
var statearr_27663_27712 = state_27661__$1;
(statearr_27663_27712[(2)] = false);

(statearr_27663_27712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (20))){
var inst_27602 = (state_27661[(7)]);
var inst_27621 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27602);
var state_27661__$1 = state_27661;
var statearr_27664_27713 = state_27661__$1;
(statearr_27664_27713[(2)] = inst_27621);

(statearr_27664_27713[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (27))){
var inst_27636 = (state_27661[(8)]);
var inst_27626 = (state_27661[(9)]);
var inst_27640 = inst_27626.call(null,inst_27636);
var state_27661__$1 = state_27661;
var statearr_27665_27714 = state_27661__$1;
(statearr_27665_27714[(2)] = inst_27640);

(statearr_27665_27714[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (1))){
var state_27661__$1 = state_27661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27661__$1,(2),devcards.core.test_channel);
} else {
if((state_val_27662 === (24))){
var state_27661__$1 = state_27661;
var statearr_27666_27715 = state_27661__$1;
(statearr_27666_27715[(2)] = null);

(statearr_27666_27715[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (4))){
var state_27661__$1 = state_27661;
var statearr_27667_27716 = state_27661__$1;
(statearr_27667_27716[(2)] = false);

(statearr_27667_27716[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (15))){
var state_27661__$1 = state_27661;
var statearr_27668_27717 = state_27661__$1;
(statearr_27668_27717[(2)] = false);

(statearr_27668_27717[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (21))){
var inst_27602 = (state_27661[(7)]);
var state_27661__$1 = state_27661;
var statearr_27669_27718 = state_27661__$1;
(statearr_27669_27718[(2)] = inst_27602);

(statearr_27669_27718[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (13))){
var inst_27659 = (state_27661[(2)]);
var state_27661__$1 = state_27661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27661__$1,inst_27659);
} else {
if((state_val_27662 === (22))){
var inst_27625 = (state_27661[(10)]);
var inst_27624 = (state_27661[(2)]);
var inst_27625__$1 = cljs.core.get.call(null,inst_27624,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_27626 = cljs.core.get.call(null,inst_27624,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_27661__$1 = (function (){var statearr_27670 = state_27661;
(statearr_27670[(10)] = inst_27625__$1);

(statearr_27670[(9)] = inst_27626);

return statearr_27670;
})();
if(cljs.core.truth_(inst_27625__$1)){
var statearr_27671_27719 = state_27661__$1;
(statearr_27671_27719[(1)] = (23));

} else {
var statearr_27672_27720 = state_27661__$1;
(statearr_27672_27720[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (29))){
var inst_27650 = (state_27661[(2)]);
var inst_27651 = cljs.test.clear_env_BANG_.call(null);
var state_27661__$1 = (function (){var statearr_27673 = state_27661;
(statearr_27673[(11)] = inst_27651);

(statearr_27673[(12)] = inst_27650);

return statearr_27673;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27661__$1,(30),devcards.core.test_channel);
} else {
if((state_val_27662 === (6))){
var state_27661__$1 = state_27661;
var statearr_27674_27721 = state_27661__$1;
(statearr_27674_27721[(2)] = true);

(statearr_27674_27721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (28))){
var inst_27626 = (state_27661[(9)]);
var inst_27642 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_27643 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_27644 = cljs.core.PersistentHashMap.fromArrays(inst_27642,inst_27643);
var inst_27645 = devcards.core.collect_test.call(null,inst_27644);
var inst_27646 = cljs.test.get_current_env.call(null);
var inst_27647 = cljs.core.assoc.call(null,inst_27646,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_27648 = inst_27626.call(null,inst_27647);
var state_27661__$1 = (function (){var statearr_27675 = state_27661;
(statearr_27675[(13)] = inst_27645);

return statearr_27675;
})();
var statearr_27676_27722 = state_27661__$1;
(statearr_27676_27722[(2)] = inst_27648);

(statearr_27676_27722[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (25))){
var inst_27657 = (state_27661[(2)]);
var state_27661__$1 = state_27661;
var statearr_27677_27723 = state_27661__$1;
(statearr_27677_27723[(2)] = inst_27657);

(statearr_27677_27723[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (17))){
var state_27661__$1 = state_27661;
var statearr_27678_27724 = state_27661__$1;
(statearr_27678_27724[(2)] = true);

(statearr_27678_27724[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (3))){
var inst_27579 = (state_27661[(14)]);
var inst_27584 = inst_27579.cljs$lang$protocol_mask$partition0$;
var inst_27585 = (inst_27584 & (64));
var inst_27586 = inst_27579.cljs$core$ISeq$;
var inst_27587 = (inst_27585) || (inst_27586);
var state_27661__$1 = state_27661;
if(cljs.core.truth_(inst_27587)){
var statearr_27679_27725 = state_27661__$1;
(statearr_27679_27725[(1)] = (6));

} else {
var statearr_27680_27726 = state_27661__$1;
(statearr_27680_27726[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (12))){
var inst_27602 = (state_27661[(7)]);
var inst_27606 = (inst_27602 == null);
var inst_27607 = cljs.core.not.call(null,inst_27606);
var state_27661__$1 = state_27661;
if(inst_27607){
var statearr_27681_27727 = state_27661__$1;
(statearr_27681_27727[(1)] = (14));

} else {
var statearr_27682_27728 = state_27661__$1;
(statearr_27682_27728[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (2))){
var inst_27579 = (state_27661[(14)]);
var inst_27579__$1 = (state_27661[(2)]);
var inst_27581 = (inst_27579__$1 == null);
var inst_27582 = cljs.core.not.call(null,inst_27581);
var state_27661__$1 = (function (){var statearr_27683 = state_27661;
(statearr_27683[(14)] = inst_27579__$1);

return statearr_27683;
})();
if(inst_27582){
var statearr_27684_27729 = state_27661__$1;
(statearr_27684_27729[(1)] = (3));

} else {
var statearr_27685_27730 = state_27661__$1;
(statearr_27685_27730[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (23))){
var inst_27625 = (state_27661[(10)]);
var inst_27629 = (state_27661[(15)]);
var inst_27629__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_27630 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27631 = devcards.core.run_card_tests.call(null,inst_27625);
var inst_27632 = [inst_27631,inst_27629__$1];
var inst_27633 = (new cljs.core.PersistentVector(null,2,(5),inst_27630,inst_27632,null));
var state_27661__$1 = (function (){var statearr_27686 = state_27661;
(statearr_27686[(15)] = inst_27629__$1);

return statearr_27686;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27661__$1,(26),inst_27633);
} else {
if((state_val_27662 === (19))){
var inst_27616 = (state_27661[(2)]);
var state_27661__$1 = state_27661;
var statearr_27687_27731 = state_27661__$1;
(statearr_27687_27731[(2)] = inst_27616);

(statearr_27687_27731[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (11))){
var inst_27579 = (state_27661[(14)]);
var inst_27599 = (state_27661[(2)]);
var inst_27600 = cljs.core.get.call(null,inst_27599,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_27601 = cljs.core.get.call(null,inst_27599,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_27602 = inst_27579;
var state_27661__$1 = (function (){var statearr_27688 = state_27661;
(statearr_27688[(16)] = inst_27601);

(statearr_27688[(7)] = inst_27602);

(statearr_27688[(17)] = inst_27600);

return statearr_27688;
})();
var statearr_27689_27732 = state_27661__$1;
(statearr_27689_27732[(2)] = null);

(statearr_27689_27732[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (9))){
var inst_27579 = (state_27661[(14)]);
var inst_27596 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27579);
var state_27661__$1 = state_27661;
var statearr_27690_27733 = state_27661__$1;
(statearr_27690_27733[(2)] = inst_27596);

(statearr_27690_27733[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (5))){
var inst_27594 = (state_27661[(2)]);
var state_27661__$1 = state_27661;
if(cljs.core.truth_(inst_27594)){
var statearr_27691_27734 = state_27661__$1;
(statearr_27691_27734[(1)] = (9));

} else {
var statearr_27692_27735 = state_27661__$1;
(statearr_27692_27735[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (14))){
var inst_27602 = (state_27661[(7)]);
var inst_27609 = inst_27602.cljs$lang$protocol_mask$partition0$;
var inst_27610 = (inst_27609 & (64));
var inst_27611 = inst_27602.cljs$core$ISeq$;
var inst_27612 = (inst_27610) || (inst_27611);
var state_27661__$1 = state_27661;
if(cljs.core.truth_(inst_27612)){
var statearr_27693_27736 = state_27661__$1;
(statearr_27693_27736[(1)] = (17));

} else {
var statearr_27694_27737 = state_27661__$1;
(statearr_27694_27737[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (26))){
var inst_27629 = (state_27661[(15)]);
var inst_27635 = (state_27661[(2)]);
var inst_27636 = cljs.core.nth.call(null,inst_27635,(0),null);
var inst_27637 = cljs.core.nth.call(null,inst_27635,(1),null);
var inst_27638 = cljs.core.not_EQ_.call(null,inst_27637,inst_27629);
var state_27661__$1 = (function (){var statearr_27695 = state_27661;
(statearr_27695[(8)] = inst_27636);

return statearr_27695;
})();
if(inst_27638){
var statearr_27696_27738 = state_27661__$1;
(statearr_27696_27738[(1)] = (27));

} else {
var statearr_27697_27739 = state_27661__$1;
(statearr_27697_27739[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (16))){
var inst_27619 = (state_27661[(2)]);
var state_27661__$1 = state_27661;
if(cljs.core.truth_(inst_27619)){
var statearr_27698_27740 = state_27661__$1;
(statearr_27698_27740[(1)] = (20));

} else {
var statearr_27699_27741 = state_27661__$1;
(statearr_27699_27741[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (30))){
var inst_27653 = (state_27661[(2)]);
var inst_27602 = inst_27653;
var state_27661__$1 = (function (){var statearr_27700 = state_27661;
(statearr_27700[(7)] = inst_27602);

return statearr_27700;
})();
var statearr_27701_27742 = state_27661__$1;
(statearr_27701_27742[(2)] = null);

(statearr_27701_27742[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (10))){
var inst_27579 = (state_27661[(14)]);
var state_27661__$1 = state_27661;
var statearr_27702_27743 = state_27661__$1;
(statearr_27702_27743[(2)] = inst_27579);

(statearr_27702_27743[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (18))){
var state_27661__$1 = state_27661;
var statearr_27703_27744 = state_27661__$1;
(statearr_27703_27744[(2)] = false);

(statearr_27703_27744[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (8))){
var inst_27591 = (state_27661[(2)]);
var state_27661__$1 = state_27661;
var statearr_27704_27745 = state_27661__$1;
(statearr_27704_27745[(2)] = inst_27591);

(statearr_27704_27745[(1)] = (5));


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
});})(c__20183__auto__))
;
return ((function (switch__20118__auto__,c__20183__auto__){
return (function() {
var devcards$core$state_machine__20119__auto__ = null;
var devcards$core$state_machine__20119__auto____0 = (function (){
var statearr_27708 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27708[(0)] = devcards$core$state_machine__20119__auto__);

(statearr_27708[(1)] = (1));

return statearr_27708;
});
var devcards$core$state_machine__20119__auto____1 = (function (state_27661){
while(true){
var ret_value__20120__auto__ = (function (){try{while(true){
var result__20121__auto__ = switch__20118__auto__.call(null,state_27661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20121__auto__;
}
break;
}
}catch (e27709){if((e27709 instanceof Object)){
var ex__20122__auto__ = e27709;
var statearr_27710_27746 = state_27661;
(statearr_27710_27746[(5)] = ex__20122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27747 = state_27661;
state_27661 = G__27747;
continue;
} else {
return ret_value__20120__auto__;
}
break;
}
});
devcards$core$state_machine__20119__auto__ = function(state_27661){
switch(arguments.length){
case 0:
return devcards$core$state_machine__20119__auto____0.call(this);
case 1:
return devcards$core$state_machine__20119__auto____1.call(this,state_27661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__20119__auto____0;
devcards$core$state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__20119__auto____1;
return devcards$core$state_machine__20119__auto__;
})()
;})(switch__20118__auto__,c__20183__auto__))
})();
var state__20185__auto__ = (function (){var statearr_27711 = f__20184__auto__.call(null);
(statearr_27711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20183__auto__);

return statearr_27711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20185__auto__);
});})(c__20183__auto__))
);

return c__20183__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState({"test_results": results});
})], null));
});
var base__23132__auto___27752 = {"componentWillMount": (function (){
var this$ = this;
var temp__4425__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805));
if(cljs.core.truth_(temp__4425__auto__)){
var test_thunks = temp__4425__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4425__auto__ = (next_props[cljs.core.name.call(null,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805))]);
if(cljs.core.truth_(temp__4425__auto__)){
var test_thunks = temp__4425__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"test_results","test_results",1062111317));
var path = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"path","path",-188191168));
return devcards.core.render_tests.call(null,this$,path,test_summary);
})};
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__23132__auto___27752);
}

var seq__27748_27753 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__27749_27754 = null;
var count__27750_27755 = (0);
var i__27751_27756 = (0);
while(true){
if((i__27751_27756 < count__27750_27755)){
var property__23133__auto___27757 = cljs.core._nth.call(null,chunk__27749_27754,i__27751_27756);
if(cljs.core.truth_((base__23132__auto___27752[property__23133__auto___27757]))){
(devcards.core.TestDevcard.prototype[property__23133__auto___27757] = (base__23132__auto___27752[property__23133__auto___27757]));
} else {
}

var G__27758 = seq__27748_27753;
var G__27759 = chunk__27749_27754;
var G__27760 = count__27750_27755;
var G__27761 = (i__27751_27756 + (1));
seq__27748_27753 = G__27758;
chunk__27749_27754 = G__27759;
count__27750_27755 = G__27760;
i__27751_27756 = G__27761;
continue;
} else {
var temp__4425__auto___27762 = cljs.core.seq.call(null,seq__27748_27753);
if(temp__4425__auto___27762){
var seq__27748_27763__$1 = temp__4425__auto___27762;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27748_27763__$1)){
var c__17147__auto___27764 = cljs.core.chunk_first.call(null,seq__27748_27763__$1);
var G__27765 = cljs.core.chunk_rest.call(null,seq__27748_27763__$1);
var G__27766 = c__17147__auto___27764;
var G__27767 = cljs.core.count.call(null,c__17147__auto___27764);
var G__27768 = (0);
seq__27748_27753 = G__27765;
chunk__27749_27754 = G__27766;
count__27750_27755 = G__27767;
i__27751_27756 = G__27768;
continue;
} else {
var property__23133__auto___27769 = cljs.core.first.call(null,seq__27748_27763__$1);
if(cljs.core.truth_((base__23132__auto___27752[property__23133__auto___27769]))){
(devcards.core.TestDevcard.prototype[property__23133__auto___27769] = (base__23132__auto___27752[property__23133__auto___27769]));
} else {
}

var G__27770 = cljs.core.next.call(null,seq__27748_27763__$1);
var G__27771 = null;
var G__27772 = (0);
var G__27773 = (0);
seq__27748_27753 = G__27770;
chunk__27749_27754 = G__27771;
count__27750_27755 = G__27772;
i__27751_27756 = G__27773;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__17409__auto__ = [];
var len__17402__auto___27778 = arguments.length;
var i__17403__auto___27779 = (0);
while(true){
if((i__17403__auto___27779 < len__17402__auto___27778)){
args__17409__auto__.push((arguments[i__17403__auto___27779]));

var G__27780 = (i__17403__auto___27779 + (1));
i__17403__auto___27779 = G__27780;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((0) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((0)),(0))):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__17410__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core27775 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core27775 = (function (test_thunks,meta27776){
this.test_thunks = test_thunks;
this.meta27776 = meta27776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core27775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27777,meta27776__$1){
var self__ = this;
var _27777__$1 = this;
return (new devcards.core.t_devcards$core27775(self__.test_thunks,meta27776__$1));
});

devcards.core.t_devcards$core27775.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27777){
var self__ = this;
var _27777__$1 = this;
return self__.meta27776;
});

devcards.core.t_devcards$core27775.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core27775.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,{"test_thunks": self__.test_thunks, "path": path});
});

devcards.core.t_devcards$core27775.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta27776","meta27776",-1547748407,null)], null);
});

devcards.core.t_devcards$core27775.cljs$lang$type = true;

devcards.core.t_devcards$core27775.cljs$lang$ctorStr = "devcards.core/t_devcards$core27775";

devcards.core.t_devcards$core27775.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"devcards.core/t_devcards$core27775");
});

devcards.core.__GT_t_devcards$core27775 = (function devcards$core$__GT_t_devcards$core27775(test_thunks__$1,meta27776){
return (new devcards.core.t_devcards$core27775(test_thunks__$1,meta27776));
});

}

return (new devcards.core.t_devcards$core27775(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq27774){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27774));
});
devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.call(null,cljs.core.aget,goog.global,cljs.core.concat.call(null,clojure.string.split.call(null,cljs.core.name.call(null,munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__4425__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state));
if(cljs.core.truth_(temp__4425__auto__)){
var cards = temp__4425__auto__;
var temp__4425__auto____$1 = cljs.core.get_in.call(null,cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,ns_symbol)], null));
if(cljs.core.truth_(temp__4425__auto____$1)){
var card = temp__4425__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_.call(null,devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__4425__auto__ = new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter.call(null,cljs.core.name.call(null,ns_symbol)));
if(cljs.core.truth_(temp__4425__auto__)){
var base_card_options = temp__4425__auto__;
cljs.core.println.call(null,"Adding base card options!",cljs.core.prn_str.call(null,base_card_options));

return cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),((function (base_card_options,temp__4425__auto__){
return (function (opts){
return cljs.core.merge.call(null,opts,base_card_options);
});})(base_card_options,temp__4425__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__4425__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4425__auto__)){
var card = temp__4425__auto__;
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str(React.renderToString((function (){var attrs27782 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27782))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs27782)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27782))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27782)], null))));
})())),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__4425__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4425__auto__)){
var card = temp__4425__auto__;
return React.render((function (){var attrs27784 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27784))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs27784)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27784))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27784)], null))));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__20183__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20183__auto__){
return (function (){
var f__20184__auto__ = (function (){var switch__20118__auto__ = ((function (c__20183__auto__){
return (function (state_27814){
var state_val_27815 = (state_27814[(1)]);
if((state_val_27815 === (1))){
var inst_27805 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_27814__$1 = state_27814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27814__$1,(2),inst_27805);
} else {
if((state_val_27815 === (2))){
var inst_27807 = (state_27814[(2)]);
var inst_27808 = cljs.core.async.timeout.call(null,(100));
var state_27814__$1 = (function (){var statearr_27816 = state_27814;
(statearr_27816[(7)] = inst_27807);

return statearr_27816;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27814__$1,(3),inst_27808);
} else {
if((state_val_27815 === (3))){
var inst_27810 = (state_27814[(2)]);
var inst_27811 = (function (){return ((function (inst_27810,state_val_27815,c__20183__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_27810,state_val_27815,c__20183__auto__))
})();
var inst_27812 = setTimeout(inst_27811,(0));
var state_27814__$1 = (function (){var statearr_27817 = state_27814;
(statearr_27817[(8)] = inst_27810);

return statearr_27817;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27814__$1,inst_27812);
} else {
return null;
}
}
}
});})(c__20183__auto__))
;
return ((function (switch__20118__auto__,c__20183__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__20119__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__20119__auto____0 = (function (){
var statearr_27821 = [null,null,null,null,null,null,null,null,null];
(statearr_27821[(0)] = devcards$core$mount_namespace_$_state_machine__20119__auto__);

(statearr_27821[(1)] = (1));

return statearr_27821;
});
var devcards$core$mount_namespace_$_state_machine__20119__auto____1 = (function (state_27814){
while(true){
var ret_value__20120__auto__ = (function (){try{while(true){
var result__20121__auto__ = switch__20118__auto__.call(null,state_27814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20121__auto__;
}
break;
}
}catch (e27822){if((e27822 instanceof Object)){
var ex__20122__auto__ = e27822;
var statearr_27823_27825 = state_27814;
(statearr_27823_27825[(5)] = ex__20122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27826 = state_27814;
state_27814 = G__27826;
continue;
} else {
return ret_value__20120__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__20119__auto__ = function(state_27814){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__20119__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__20119__auto____1.call(this,state_27814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__20119__auto____0;
devcards$core$mount_namespace_$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__20119__auto____1;
return devcards$core$mount_namespace_$_state_machine__20119__auto__;
})()
;})(switch__20118__auto__,c__20183__auto__))
})();
var state__20185__auto__ = (function (){var statearr_27824 = f__20184__auto__.call(null);
(statearr_27824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20183__auto__);

return statearr_27824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20185__auto__);
});})(c__20183__auto__))
);

return c__20183__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=core.js.map?rel=1446795080505