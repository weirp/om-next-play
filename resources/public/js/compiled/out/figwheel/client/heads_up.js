// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17409__auto__ = [];
var len__17402__auto___38430 = arguments.length;
var i__17403__auto___38431 = (0);
while(true){
if((i__17403__auto___38431 < len__17402__auto___38430)){
args__17409__auto__.push((arguments[i__17403__auto___38431]));

var G__38432 = (i__17403__auto___38431 + (1));
i__17403__auto___38431 = G__38432;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((2) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17410__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__38422_38433 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__38423_38434 = null;
var count__38424_38435 = (0);
var i__38425_38436 = (0);
while(true){
if((i__38425_38436 < count__38424_38435)){
var k_38437 = cljs.core._nth.call(null,chunk__38423_38434,i__38425_38436);
e.setAttribute(cljs.core.name.call(null,k_38437),cljs.core.get.call(null,attrs,k_38437));

var G__38438 = seq__38422_38433;
var G__38439 = chunk__38423_38434;
var G__38440 = count__38424_38435;
var G__38441 = (i__38425_38436 + (1));
seq__38422_38433 = G__38438;
chunk__38423_38434 = G__38439;
count__38424_38435 = G__38440;
i__38425_38436 = G__38441;
continue;
} else {
var temp__4425__auto___38442 = cljs.core.seq.call(null,seq__38422_38433);
if(temp__4425__auto___38442){
var seq__38422_38443__$1 = temp__4425__auto___38442;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38422_38443__$1)){
var c__17147__auto___38444 = cljs.core.chunk_first.call(null,seq__38422_38443__$1);
var G__38445 = cljs.core.chunk_rest.call(null,seq__38422_38443__$1);
var G__38446 = c__17147__auto___38444;
var G__38447 = cljs.core.count.call(null,c__17147__auto___38444);
var G__38448 = (0);
seq__38422_38433 = G__38445;
chunk__38423_38434 = G__38446;
count__38424_38435 = G__38447;
i__38425_38436 = G__38448;
continue;
} else {
var k_38449 = cljs.core.first.call(null,seq__38422_38443__$1);
e.setAttribute(cljs.core.name.call(null,k_38449),cljs.core.get.call(null,attrs,k_38449));

var G__38450 = cljs.core.next.call(null,seq__38422_38443__$1);
var G__38451 = null;
var G__38452 = (0);
var G__38453 = (0);
seq__38422_38433 = G__38450;
chunk__38423_38434 = G__38451;
count__38424_38435 = G__38452;
i__38425_38436 = G__38453;
continue;
}
} else {
}
}
break;
}

var seq__38426_38454 = cljs.core.seq.call(null,children);
var chunk__38427_38455 = null;
var count__38428_38456 = (0);
var i__38429_38457 = (0);
while(true){
if((i__38429_38457 < count__38428_38456)){
var ch_38458 = cljs.core._nth.call(null,chunk__38427_38455,i__38429_38457);
e.appendChild(ch_38458);

var G__38459 = seq__38426_38454;
var G__38460 = chunk__38427_38455;
var G__38461 = count__38428_38456;
var G__38462 = (i__38429_38457 + (1));
seq__38426_38454 = G__38459;
chunk__38427_38455 = G__38460;
count__38428_38456 = G__38461;
i__38429_38457 = G__38462;
continue;
} else {
var temp__4425__auto___38463 = cljs.core.seq.call(null,seq__38426_38454);
if(temp__4425__auto___38463){
var seq__38426_38464__$1 = temp__4425__auto___38463;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38426_38464__$1)){
var c__17147__auto___38465 = cljs.core.chunk_first.call(null,seq__38426_38464__$1);
var G__38466 = cljs.core.chunk_rest.call(null,seq__38426_38464__$1);
var G__38467 = c__17147__auto___38465;
var G__38468 = cljs.core.count.call(null,c__17147__auto___38465);
var G__38469 = (0);
seq__38426_38454 = G__38466;
chunk__38427_38455 = G__38467;
count__38428_38456 = G__38468;
i__38429_38457 = G__38469;
continue;
} else {
var ch_38470 = cljs.core.first.call(null,seq__38426_38464__$1);
e.appendChild(ch_38470);

var G__38471 = cljs.core.next.call(null,seq__38426_38464__$1);
var G__38472 = null;
var G__38473 = (0);
var G__38474 = (0);
seq__38426_38454 = G__38471;
chunk__38427_38455 = G__38472;
count__38428_38456 = G__38473;
i__38429_38457 = G__38474;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq38419){
var G__38420 = cljs.core.first.call(null,seq38419);
var seq38419__$1 = cljs.core.next.call(null,seq38419);
var G__38421 = cljs.core.first.call(null,seq38419__$1);
var seq38419__$2 = cljs.core.next.call(null,seq38419__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__38420,G__38421,seq38419__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17257__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17258__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17259__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17260__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17261__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17257__auto__,prefer_table__17258__auto__,method_cache__17259__auto__,cached_hierarchy__17260__auto__,hierarchy__17261__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17257__auto__,prefer_table__17258__auto__,method_cache__17259__auto__,cached_hierarchy__17260__auto__,hierarchy__17261__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17261__auto__,method_table__17257__auto__,prefer_table__17258__auto__,method_cache__17259__auto__,cached_hierarchy__17260__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_38475 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_38475.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_38475.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_38475.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_38475);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__38476,st_map){
var map__38481 = p__38476;
var map__38481__$1 = ((((!((map__38481 == null)))?((((map__38481.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38481.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38481):map__38481);
var container_el = cljs.core.get.call(null,map__38481__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__38481,map__38481__$1,container_el){
return (function (p__38483){
var vec__38484 = p__38483;
var k = cljs.core.nth.call(null,vec__38484,(0),null);
var v = cljs.core.nth.call(null,vec__38484,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__38481,map__38481__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__38485,dom_str){
var map__38488 = p__38485;
var map__38488__$1 = ((((!((map__38488 == null)))?((((map__38488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38488):map__38488);
var c = map__38488__$1;
var content_area_el = cljs.core.get.call(null,map__38488__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__38490){
var map__38493 = p__38490;
var map__38493__$1 = ((((!((map__38493 == null)))?((((map__38493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38493):map__38493);
var content_area_el = cljs.core.get.call(null,map__38493__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20183__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20183__auto__){
return (function (){
var f__20184__auto__ = (function (){var switch__20118__auto__ = ((function (c__20183__auto__){
return (function (state_38536){
var state_val_38537 = (state_38536[(1)]);
if((state_val_38537 === (1))){
var inst_38521 = (state_38536[(7)]);
var inst_38521__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_38522 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_38523 = ["10px","10px","100%","68px","1.0"];
var inst_38524 = cljs.core.PersistentHashMap.fromArrays(inst_38522,inst_38523);
var inst_38525 = cljs.core.merge.call(null,inst_38524,style);
var inst_38526 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_38521__$1,inst_38525);
var inst_38527 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_38521__$1,msg);
var inst_38528 = cljs.core.async.timeout.call(null,(300));
var state_38536__$1 = (function (){var statearr_38538 = state_38536;
(statearr_38538[(8)] = inst_38526);

(statearr_38538[(9)] = inst_38527);

(statearr_38538[(7)] = inst_38521__$1);

return statearr_38538;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38536__$1,(2),inst_38528);
} else {
if((state_val_38537 === (2))){
var inst_38521 = (state_38536[(7)]);
var inst_38530 = (state_38536[(2)]);
var inst_38531 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_38532 = ["auto"];
var inst_38533 = cljs.core.PersistentHashMap.fromArrays(inst_38531,inst_38532);
var inst_38534 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_38521,inst_38533);
var state_38536__$1 = (function (){var statearr_38539 = state_38536;
(statearr_38539[(10)] = inst_38530);

return statearr_38539;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38536__$1,inst_38534);
} else {
return null;
}
}
});})(c__20183__auto__))
;
return ((function (switch__20118__auto__,c__20183__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__20119__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__20119__auto____0 = (function (){
var statearr_38543 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38543[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20119__auto__);

(statearr_38543[(1)] = (1));

return statearr_38543;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20119__auto____1 = (function (state_38536){
while(true){
var ret_value__20120__auto__ = (function (){try{while(true){
var result__20121__auto__ = switch__20118__auto__.call(null,state_38536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20121__auto__;
}
break;
}
}catch (e38544){if((e38544 instanceof Object)){
var ex__20122__auto__ = e38544;
var statearr_38545_38547 = state_38536;
(statearr_38545_38547[(5)] = ex__20122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38548 = state_38536;
state_38536 = G__38548;
continue;
} else {
return ret_value__20120__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20119__auto__ = function(state_38536){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20119__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20119__auto____1.call(this,state_38536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20119__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20119__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20119__auto__;
})()
;})(switch__20118__auto__,c__20183__auto__))
})();
var state__20185__auto__ = (function (){var statearr_38546 = f__20184__auto__.call(null);
(statearr_38546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20183__auto__);

return statearr_38546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20185__auto__);
});})(c__20183__auto__))
);

return c__20183__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__38550 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__38550,(0),null);
var ln = cljs.core.nth.call(null,vec__38550,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__38553 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__38553,(0),null);
var file_line = cljs.core.nth.call(null,vec__38553,(1),null);
var file_column = cljs.core.nth.call(null,vec__38553,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__38553,file_name,file_line,file_column){
return (function (p1__38551_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__38551_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__38553,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16344__auto__ = file_line;
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
var and__16332__auto__ = cause;
if(cljs.core.truth_(and__16332__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16332__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__38556 = figwheel.client.heads_up.ensure_container.call(null);
var map__38556__$1 = ((((!((map__38556 == null)))?((((map__38556.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38556.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38556):map__38556);
var content_area_el = cljs.core.get.call(null,map__38556__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20183__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20183__auto__){
return (function (){
var f__20184__auto__ = (function (){var switch__20118__auto__ = ((function (c__20183__auto__){
return (function (state_38604){
var state_val_38605 = (state_38604[(1)]);
if((state_val_38605 === (1))){
var inst_38587 = (state_38604[(7)]);
var inst_38587__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_38588 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_38589 = ["0.0"];
var inst_38590 = cljs.core.PersistentHashMap.fromArrays(inst_38588,inst_38589);
var inst_38591 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_38587__$1,inst_38590);
var inst_38592 = cljs.core.async.timeout.call(null,(300));
var state_38604__$1 = (function (){var statearr_38606 = state_38604;
(statearr_38606[(7)] = inst_38587__$1);

(statearr_38606[(8)] = inst_38591);

return statearr_38606;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38604__$1,(2),inst_38592);
} else {
if((state_val_38605 === (2))){
var inst_38587 = (state_38604[(7)]);
var inst_38594 = (state_38604[(2)]);
var inst_38595 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_38596 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_38597 = cljs.core.PersistentHashMap.fromArrays(inst_38595,inst_38596);
var inst_38598 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_38587,inst_38597);
var inst_38599 = cljs.core.async.timeout.call(null,(200));
var state_38604__$1 = (function (){var statearr_38607 = state_38604;
(statearr_38607[(9)] = inst_38598);

(statearr_38607[(10)] = inst_38594);

return statearr_38607;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38604__$1,(3),inst_38599);
} else {
if((state_val_38605 === (3))){
var inst_38587 = (state_38604[(7)]);
var inst_38601 = (state_38604[(2)]);
var inst_38602 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_38587,"");
var state_38604__$1 = (function (){var statearr_38608 = state_38604;
(statearr_38608[(11)] = inst_38601);

return statearr_38608;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38604__$1,inst_38602);
} else {
return null;
}
}
}
});})(c__20183__auto__))
;
return ((function (switch__20118__auto__,c__20183__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__20119__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__20119__auto____0 = (function (){
var statearr_38612 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38612[(0)] = figwheel$client$heads_up$clear_$_state_machine__20119__auto__);

(statearr_38612[(1)] = (1));

return statearr_38612;
});
var figwheel$client$heads_up$clear_$_state_machine__20119__auto____1 = (function (state_38604){
while(true){
var ret_value__20120__auto__ = (function (){try{while(true){
var result__20121__auto__ = switch__20118__auto__.call(null,state_38604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20121__auto__;
}
break;
}
}catch (e38613){if((e38613 instanceof Object)){
var ex__20122__auto__ = e38613;
var statearr_38614_38616 = state_38604;
(statearr_38614_38616[(5)] = ex__20122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38617 = state_38604;
state_38604 = G__38617;
continue;
} else {
return ret_value__20120__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20119__auto__ = function(state_38604){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20119__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20119__auto____1.call(this,state_38604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20119__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20119__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20119__auto__;
})()
;})(switch__20118__auto__,c__20183__auto__))
})();
var state__20185__auto__ = (function (){var statearr_38615 = f__20184__auto__.call(null);
(statearr_38615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20183__auto__);

return statearr_38615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20185__auto__);
});})(c__20183__auto__))
);

return c__20183__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20183__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20183__auto__){
return (function (){
var f__20184__auto__ = (function (){var switch__20118__auto__ = ((function (c__20183__auto__){
return (function (state_38649){
var state_val_38650 = (state_38649[(1)]);
if((state_val_38650 === (1))){
var inst_38639 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_38649__$1 = state_38649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38649__$1,(2),inst_38639);
} else {
if((state_val_38650 === (2))){
var inst_38641 = (state_38649[(2)]);
var inst_38642 = cljs.core.async.timeout.call(null,(400));
var state_38649__$1 = (function (){var statearr_38651 = state_38649;
(statearr_38651[(7)] = inst_38641);

return statearr_38651;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38649__$1,(3),inst_38642);
} else {
if((state_val_38650 === (3))){
var inst_38644 = (state_38649[(2)]);
var inst_38645 = figwheel.client.heads_up.clear.call(null);
var state_38649__$1 = (function (){var statearr_38652 = state_38649;
(statearr_38652[(8)] = inst_38644);

return statearr_38652;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38649__$1,(4),inst_38645);
} else {
if((state_val_38650 === (4))){
var inst_38647 = (state_38649[(2)]);
var state_38649__$1 = state_38649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38649__$1,inst_38647);
} else {
return null;
}
}
}
}
});})(c__20183__auto__))
;
return ((function (switch__20118__auto__,c__20183__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__20119__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__20119__auto____0 = (function (){
var statearr_38656 = [null,null,null,null,null,null,null,null,null];
(statearr_38656[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20119__auto__);

(statearr_38656[(1)] = (1));

return statearr_38656;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20119__auto____1 = (function (state_38649){
while(true){
var ret_value__20120__auto__ = (function (){try{while(true){
var result__20121__auto__ = switch__20118__auto__.call(null,state_38649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20121__auto__;
}
break;
}
}catch (e38657){if((e38657 instanceof Object)){
var ex__20122__auto__ = e38657;
var statearr_38658_38660 = state_38649;
(statearr_38658_38660[(5)] = ex__20122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38661 = state_38649;
state_38649 = G__38661;
continue;
} else {
return ret_value__20120__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20119__auto__ = function(state_38649){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20119__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20119__auto____1.call(this,state_38649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20119__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20119__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20119__auto__;
})()
;})(switch__20118__auto__,c__20183__auto__))
})();
var state__20185__auto__ = (function (){var statearr_38659 = f__20184__auto__.call(null);
(statearr_38659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20183__auto__);

return statearr_38659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20185__auto__);
});})(c__20183__auto__))
);

return c__20183__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1446795343699