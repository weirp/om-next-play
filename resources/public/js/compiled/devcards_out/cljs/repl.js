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
var seq__38804_38818 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38805_38819 = null;
var count__38806_38820 = (0);
var i__38807_38821 = (0);
while(true){
if((i__38807_38821 < count__38806_38820)){
var f_38822 = cljs.core._nth.call(null,chunk__38805_38819,i__38807_38821);
cljs.core.println.call(null,"  ",f_38822);

var G__38823 = seq__38804_38818;
var G__38824 = chunk__38805_38819;
var G__38825 = count__38806_38820;
var G__38826 = (i__38807_38821 + (1));
seq__38804_38818 = G__38823;
chunk__38805_38819 = G__38824;
count__38806_38820 = G__38825;
i__38807_38821 = G__38826;
continue;
} else {
var temp__4425__auto___38827 = cljs.core.seq.call(null,seq__38804_38818);
if(temp__4425__auto___38827){
var seq__38804_38828__$1 = temp__4425__auto___38827;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38804_38828__$1)){
var c__17147__auto___38829 = cljs.core.chunk_first.call(null,seq__38804_38828__$1);
var G__38830 = cljs.core.chunk_rest.call(null,seq__38804_38828__$1);
var G__38831 = c__17147__auto___38829;
var G__38832 = cljs.core.count.call(null,c__17147__auto___38829);
var G__38833 = (0);
seq__38804_38818 = G__38830;
chunk__38805_38819 = G__38831;
count__38806_38820 = G__38832;
i__38807_38821 = G__38833;
continue;
} else {
var f_38834 = cljs.core.first.call(null,seq__38804_38828__$1);
cljs.core.println.call(null,"  ",f_38834);

var G__38835 = cljs.core.next.call(null,seq__38804_38828__$1);
var G__38836 = null;
var G__38837 = (0);
var G__38838 = (0);
seq__38804_38818 = G__38835;
chunk__38805_38819 = G__38836;
count__38806_38820 = G__38837;
i__38807_38821 = G__38838;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38839 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16344__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38839);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38839)))?cljs.core.second.call(null,arglists_38839):arglists_38839));
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
var seq__38808 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38809 = null;
var count__38810 = (0);
var i__38811 = (0);
while(true){
if((i__38811 < count__38810)){
var vec__38812 = cljs.core._nth.call(null,chunk__38809,i__38811);
var name = cljs.core.nth.call(null,vec__38812,(0),null);
var map__38813 = cljs.core.nth.call(null,vec__38812,(1),null);
var map__38813__$1 = ((((!((map__38813 == null)))?((((map__38813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38813):map__38813);
var doc = cljs.core.get.call(null,map__38813__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__38813__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__38840 = seq__38808;
var G__38841 = chunk__38809;
var G__38842 = count__38810;
var G__38843 = (i__38811 + (1));
seq__38808 = G__38840;
chunk__38809 = G__38841;
count__38810 = G__38842;
i__38811 = G__38843;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__38808);
if(temp__4425__auto__){
var seq__38808__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38808__$1)){
var c__17147__auto__ = cljs.core.chunk_first.call(null,seq__38808__$1);
var G__38844 = cljs.core.chunk_rest.call(null,seq__38808__$1);
var G__38845 = c__17147__auto__;
var G__38846 = cljs.core.count.call(null,c__17147__auto__);
var G__38847 = (0);
seq__38808 = G__38844;
chunk__38809 = G__38845;
count__38810 = G__38846;
i__38811 = G__38847;
continue;
} else {
var vec__38815 = cljs.core.first.call(null,seq__38808__$1);
var name = cljs.core.nth.call(null,vec__38815,(0),null);
var map__38816 = cljs.core.nth.call(null,vec__38815,(1),null);
var map__38816__$1 = ((((!((map__38816 == null)))?((((map__38816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38816):map__38816);
var doc = cljs.core.get.call(null,map__38816__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__38816__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__38848 = cljs.core.next.call(null,seq__38808__$1);
var G__38849 = null;
var G__38850 = (0);
var G__38851 = (0);
seq__38808 = G__38848;
chunk__38809 = G__38849;
count__38810 = G__38850;
i__38811 = G__38851;
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

//# sourceMappingURL=repl.js.map?rel=1446794917240