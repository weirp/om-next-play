// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38678_38692 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38679_38693 = null;
var count__38680_38694 = (0);
var i__38681_38695 = (0);
while(true){
if((i__38681_38695 < count__38680_38694)){
var f_38696 = cljs.core._nth.call(null,chunk__38679_38693,i__38681_38695);
cljs.core.println.call(null,"  ",f_38696);

var G__38697 = seq__38678_38692;
var G__38698 = chunk__38679_38693;
var G__38699 = count__38680_38694;
var G__38700 = (i__38681_38695 + (1));
seq__38678_38692 = G__38697;
chunk__38679_38693 = G__38698;
count__38680_38694 = G__38699;
i__38681_38695 = G__38700;
continue;
} else {
var temp__4425__auto___38701 = cljs.core.seq.call(null,seq__38678_38692);
if(temp__4425__auto___38701){
var seq__38678_38702__$1 = temp__4425__auto___38701;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38678_38702__$1)){
var c__17147__auto___38703 = cljs.core.chunk_first.call(null,seq__38678_38702__$1);
var G__38704 = cljs.core.chunk_rest.call(null,seq__38678_38702__$1);
var G__38705 = c__17147__auto___38703;
var G__38706 = cljs.core.count.call(null,c__17147__auto___38703);
var G__38707 = (0);
seq__38678_38692 = G__38704;
chunk__38679_38693 = G__38705;
count__38680_38694 = G__38706;
i__38681_38695 = G__38707;
continue;
} else {
var f_38708 = cljs.core.first.call(null,seq__38678_38702__$1);
cljs.core.println.call(null,"  ",f_38708);

var G__38709 = cljs.core.next.call(null,seq__38678_38702__$1);
var G__38710 = null;
var G__38711 = (0);
var G__38712 = (0);
seq__38678_38692 = G__38709;
chunk__38679_38693 = G__38710;
count__38680_38694 = G__38711;
i__38681_38695 = G__38712;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38713 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16344__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38713);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38713)))?cljs.core.second.call(null,arglists_38713):arglists_38713));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38682 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38683 = null;
var count__38684 = (0);
var i__38685 = (0);
while(true){
if((i__38685 < count__38684)){
var vec__38686 = cljs.core._nth.call(null,chunk__38683,i__38685);
var name = cljs.core.nth.call(null,vec__38686,(0),null);
var map__38687 = cljs.core.nth.call(null,vec__38686,(1),null);
var map__38687__$1 = ((((!((map__38687 == null)))?((((map__38687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38687):map__38687);
var doc = cljs.core.get.call(null,map__38687__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__38687__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__38714 = seq__38682;
var G__38715 = chunk__38683;
var G__38716 = count__38684;
var G__38717 = (i__38685 + (1));
seq__38682 = G__38714;
chunk__38683 = G__38715;
count__38684 = G__38716;
i__38685 = G__38717;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__38682);
if(temp__4425__auto__){
var seq__38682__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38682__$1)){
var c__17147__auto__ = cljs.core.chunk_first.call(null,seq__38682__$1);
var G__38718 = cljs.core.chunk_rest.call(null,seq__38682__$1);
var G__38719 = c__17147__auto__;
var G__38720 = cljs.core.count.call(null,c__17147__auto__);
var G__38721 = (0);
seq__38682 = G__38718;
chunk__38683 = G__38719;
count__38684 = G__38720;
i__38685 = G__38721;
continue;
} else {
var vec__38689 = cljs.core.first.call(null,seq__38682__$1);
var name = cljs.core.nth.call(null,vec__38689,(0),null);
var map__38690 = cljs.core.nth.call(null,vec__38689,(1),null);
var map__38690__$1 = ((((!((map__38690 == null)))?((((map__38690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38690):map__38690);
var doc = cljs.core.get.call(null,map__38690__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__38690__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__38722 = cljs.core.next.call(null,seq__38682__$1);
var G__38723 = null;
var G__38724 = (0);
var G__38725 = (0);
seq__38682 = G__38722;
chunk__38683 = G__38723;
count__38684 = G__38724;
i__38685 = G__38725;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1446795343783