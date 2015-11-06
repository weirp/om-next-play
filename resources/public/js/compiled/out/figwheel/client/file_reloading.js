// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16344__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16344__auto__){
return or__16344__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16344__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__38730_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__38730_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__38735 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__38736 = null;
var count__38737 = (0);
var i__38738 = (0);
while(true){
if((i__38738 < count__38737)){
var n = cljs.core._nth.call(null,chunk__38736,i__38738);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38739 = seq__38735;
var G__38740 = chunk__38736;
var G__38741 = count__38737;
var G__38742 = (i__38738 + (1));
seq__38735 = G__38739;
chunk__38736 = G__38740;
count__38737 = G__38741;
i__38738 = G__38742;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__38735);
if(temp__4425__auto__){
var seq__38735__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38735__$1)){
var c__17147__auto__ = cljs.core.chunk_first.call(null,seq__38735__$1);
var G__38743 = cljs.core.chunk_rest.call(null,seq__38735__$1);
var G__38744 = c__17147__auto__;
var G__38745 = cljs.core.count.call(null,c__17147__auto__);
var G__38746 = (0);
seq__38735 = G__38743;
chunk__38736 = G__38744;
count__38737 = G__38745;
i__38738 = G__38746;
continue;
} else {
var n = cljs.core.first.call(null,seq__38735__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38747 = cljs.core.next.call(null,seq__38735__$1);
var G__38748 = null;
var G__38749 = (0);
var G__38750 = (0);
seq__38735 = G__38747;
chunk__38736 = G__38748;
count__38737 = G__38749;
i__38738 = G__38750;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__38789_38796 = cljs.core.seq.call(null,deps);
var chunk__38790_38797 = null;
var count__38791_38798 = (0);
var i__38792_38799 = (0);
while(true){
if((i__38792_38799 < count__38791_38798)){
var dep_38800 = cljs.core._nth.call(null,chunk__38790_38797,i__38792_38799);
topo_sort_helper_STAR_.call(null,dep_38800,(depth + (1)),state);

var G__38801 = seq__38789_38796;
var G__38802 = chunk__38790_38797;
var G__38803 = count__38791_38798;
var G__38804 = (i__38792_38799 + (1));
seq__38789_38796 = G__38801;
chunk__38790_38797 = G__38802;
count__38791_38798 = G__38803;
i__38792_38799 = G__38804;
continue;
} else {
var temp__4425__auto___38805 = cljs.core.seq.call(null,seq__38789_38796);
if(temp__4425__auto___38805){
var seq__38789_38806__$1 = temp__4425__auto___38805;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38789_38806__$1)){
var c__17147__auto___38807 = cljs.core.chunk_first.call(null,seq__38789_38806__$1);
var G__38808 = cljs.core.chunk_rest.call(null,seq__38789_38806__$1);
var G__38809 = c__17147__auto___38807;
var G__38810 = cljs.core.count.call(null,c__17147__auto___38807);
var G__38811 = (0);
seq__38789_38796 = G__38808;
chunk__38790_38797 = G__38809;
count__38791_38798 = G__38810;
i__38792_38799 = G__38811;
continue;
} else {
var dep_38812 = cljs.core.first.call(null,seq__38789_38806__$1);
topo_sort_helper_STAR_.call(null,dep_38812,(depth + (1)),state);

var G__38813 = cljs.core.next.call(null,seq__38789_38806__$1);
var G__38814 = null;
var G__38815 = (0);
var G__38816 = (0);
seq__38789_38796 = G__38813;
chunk__38790_38797 = G__38814;
count__38791_38798 = G__38815;
i__38792_38799 = G__38816;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__38793){
var vec__38795 = p__38793;
var x = cljs.core.nth.call(null,vec__38795,(0),null);
var xs = cljs.core.nthnext.call(null,vec__38795,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__38795,x,xs,get_deps__$1){
return (function (p1__38751_SHARP_){
return clojure.set.difference.call(null,p1__38751_SHARP_,x);
});})(vec__38795,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__38829 = cljs.core.seq.call(null,provides);
var chunk__38830 = null;
var count__38831 = (0);
var i__38832 = (0);
while(true){
if((i__38832 < count__38831)){
var prov = cljs.core._nth.call(null,chunk__38830,i__38832);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38833_38841 = cljs.core.seq.call(null,requires);
var chunk__38834_38842 = null;
var count__38835_38843 = (0);
var i__38836_38844 = (0);
while(true){
if((i__38836_38844 < count__38835_38843)){
var req_38845 = cljs.core._nth.call(null,chunk__38834_38842,i__38836_38844);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38845,prov);

var G__38846 = seq__38833_38841;
var G__38847 = chunk__38834_38842;
var G__38848 = count__38835_38843;
var G__38849 = (i__38836_38844 + (1));
seq__38833_38841 = G__38846;
chunk__38834_38842 = G__38847;
count__38835_38843 = G__38848;
i__38836_38844 = G__38849;
continue;
} else {
var temp__4425__auto___38850 = cljs.core.seq.call(null,seq__38833_38841);
if(temp__4425__auto___38850){
var seq__38833_38851__$1 = temp__4425__auto___38850;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38833_38851__$1)){
var c__17147__auto___38852 = cljs.core.chunk_first.call(null,seq__38833_38851__$1);
var G__38853 = cljs.core.chunk_rest.call(null,seq__38833_38851__$1);
var G__38854 = c__17147__auto___38852;
var G__38855 = cljs.core.count.call(null,c__17147__auto___38852);
var G__38856 = (0);
seq__38833_38841 = G__38853;
chunk__38834_38842 = G__38854;
count__38835_38843 = G__38855;
i__38836_38844 = G__38856;
continue;
} else {
var req_38857 = cljs.core.first.call(null,seq__38833_38851__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38857,prov);

var G__38858 = cljs.core.next.call(null,seq__38833_38851__$1);
var G__38859 = null;
var G__38860 = (0);
var G__38861 = (0);
seq__38833_38841 = G__38858;
chunk__38834_38842 = G__38859;
count__38835_38843 = G__38860;
i__38836_38844 = G__38861;
continue;
}
} else {
}
}
break;
}

var G__38862 = seq__38829;
var G__38863 = chunk__38830;
var G__38864 = count__38831;
var G__38865 = (i__38832 + (1));
seq__38829 = G__38862;
chunk__38830 = G__38863;
count__38831 = G__38864;
i__38832 = G__38865;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__38829);
if(temp__4425__auto__){
var seq__38829__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38829__$1)){
var c__17147__auto__ = cljs.core.chunk_first.call(null,seq__38829__$1);
var G__38866 = cljs.core.chunk_rest.call(null,seq__38829__$1);
var G__38867 = c__17147__auto__;
var G__38868 = cljs.core.count.call(null,c__17147__auto__);
var G__38869 = (0);
seq__38829 = G__38866;
chunk__38830 = G__38867;
count__38831 = G__38868;
i__38832 = G__38869;
continue;
} else {
var prov = cljs.core.first.call(null,seq__38829__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38837_38870 = cljs.core.seq.call(null,requires);
var chunk__38838_38871 = null;
var count__38839_38872 = (0);
var i__38840_38873 = (0);
while(true){
if((i__38840_38873 < count__38839_38872)){
var req_38874 = cljs.core._nth.call(null,chunk__38838_38871,i__38840_38873);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38874,prov);

var G__38875 = seq__38837_38870;
var G__38876 = chunk__38838_38871;
var G__38877 = count__38839_38872;
var G__38878 = (i__38840_38873 + (1));
seq__38837_38870 = G__38875;
chunk__38838_38871 = G__38876;
count__38839_38872 = G__38877;
i__38840_38873 = G__38878;
continue;
} else {
var temp__4425__auto___38879__$1 = cljs.core.seq.call(null,seq__38837_38870);
if(temp__4425__auto___38879__$1){
var seq__38837_38880__$1 = temp__4425__auto___38879__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38837_38880__$1)){
var c__17147__auto___38881 = cljs.core.chunk_first.call(null,seq__38837_38880__$1);
var G__38882 = cljs.core.chunk_rest.call(null,seq__38837_38880__$1);
var G__38883 = c__17147__auto___38881;
var G__38884 = cljs.core.count.call(null,c__17147__auto___38881);
var G__38885 = (0);
seq__38837_38870 = G__38882;
chunk__38838_38871 = G__38883;
count__38839_38872 = G__38884;
i__38840_38873 = G__38885;
continue;
} else {
var req_38886 = cljs.core.first.call(null,seq__38837_38880__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38886,prov);

var G__38887 = cljs.core.next.call(null,seq__38837_38880__$1);
var G__38888 = null;
var G__38889 = (0);
var G__38890 = (0);
seq__38837_38870 = G__38887;
chunk__38838_38871 = G__38888;
count__38839_38872 = G__38889;
i__38840_38873 = G__38890;
continue;
}
} else {
}
}
break;
}

var G__38891 = cljs.core.next.call(null,seq__38829__$1);
var G__38892 = null;
var G__38893 = (0);
var G__38894 = (0);
seq__38829 = G__38891;
chunk__38830 = G__38892;
count__38831 = G__38893;
i__38832 = G__38894;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__38899_38903 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__38900_38904 = null;
var count__38901_38905 = (0);
var i__38902_38906 = (0);
while(true){
if((i__38902_38906 < count__38901_38905)){
var ns_38907 = cljs.core._nth.call(null,chunk__38900_38904,i__38902_38906);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38907);

var G__38908 = seq__38899_38903;
var G__38909 = chunk__38900_38904;
var G__38910 = count__38901_38905;
var G__38911 = (i__38902_38906 + (1));
seq__38899_38903 = G__38908;
chunk__38900_38904 = G__38909;
count__38901_38905 = G__38910;
i__38902_38906 = G__38911;
continue;
} else {
var temp__4425__auto___38912 = cljs.core.seq.call(null,seq__38899_38903);
if(temp__4425__auto___38912){
var seq__38899_38913__$1 = temp__4425__auto___38912;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38899_38913__$1)){
var c__17147__auto___38914 = cljs.core.chunk_first.call(null,seq__38899_38913__$1);
var G__38915 = cljs.core.chunk_rest.call(null,seq__38899_38913__$1);
var G__38916 = c__17147__auto___38914;
var G__38917 = cljs.core.count.call(null,c__17147__auto___38914);
var G__38918 = (0);
seq__38899_38903 = G__38915;
chunk__38900_38904 = G__38916;
count__38901_38905 = G__38917;
i__38902_38906 = G__38918;
continue;
} else {
var ns_38919 = cljs.core.first.call(null,seq__38899_38913__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38919);

var G__38920 = cljs.core.next.call(null,seq__38899_38913__$1);
var G__38921 = null;
var G__38922 = (0);
var G__38923 = (0);
seq__38899_38903 = G__38920;
chunk__38900_38904 = G__38921;
count__38901_38905 = G__38922;
i__38902_38906 = G__38923;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16344__auto__ = goog.require__;
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__38924__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__38924 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38925__i = 0, G__38925__a = new Array(arguments.length -  0);
while (G__38925__i < G__38925__a.length) {G__38925__a[G__38925__i] = arguments[G__38925__i + 0]; ++G__38925__i;}
  args = new cljs.core.IndexedSeq(G__38925__a,0);
} 
return G__38924__delegate.call(this,args);};
G__38924.cljs$lang$maxFixedArity = 0;
G__38924.cljs$lang$applyTo = (function (arglist__38926){
var args = cljs.core.seq(arglist__38926);
return G__38924__delegate(args);
});
G__38924.cljs$core$IFn$_invoke$arity$variadic = G__38924__delegate;
return G__38924;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__38928 = cljs.core._EQ_;
var expr__38929 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__38928.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__38929))){
var path_parts = ((function (pred__38928,expr__38929){
return (function (p1__38927_SHARP_){
return clojure.string.split.call(null,p1__38927_SHARP_,/[\/\\]/);
});})(pred__38928,expr__38929))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__38928,expr__38929){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(clojure.string.join.call(null,"/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","..",request_url], null)));
}catch (e38931){if((e38931 instanceof Error)){
var e = e38931;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e38931;

}
}})());
});
;})(path_parts,sep,root,pred__38928,expr__38929))
} else {
if(cljs.core.truth_(pred__38928.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__38929))){
return ((function (pred__38928,expr__38929){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__38928,expr__38929){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__38928,expr__38929))
);

return deferred.addErrback(((function (deferred,pred__38928,expr__38929){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__38928,expr__38929))
);
});
;})(pred__38928,expr__38929))
} else {
return ((function (pred__38928,expr__38929){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__38928,expr__38929))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__38932,callback){
var map__38935 = p__38932;
var map__38935__$1 = ((((!((map__38935 == null)))?((((map__38935.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38935.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38935):map__38935);
var file_msg = map__38935__$1;
var request_url = cljs.core.get.call(null,map__38935__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__38935,map__38935__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__38935,map__38935__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20183__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20183__auto__){
return (function (){
var f__20184__auto__ = (function (){var switch__20118__auto__ = ((function (c__20183__auto__){
return (function (state_38959){
var state_val_38960 = (state_38959[(1)]);
if((state_val_38960 === (7))){
var inst_38955 = (state_38959[(2)]);
var state_38959__$1 = state_38959;
var statearr_38961_38981 = state_38959__$1;
(statearr_38961_38981[(2)] = inst_38955);

(statearr_38961_38981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (1))){
var state_38959__$1 = state_38959;
var statearr_38962_38982 = state_38959__$1;
(statearr_38962_38982[(2)] = null);

(statearr_38962_38982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (4))){
var inst_38939 = (state_38959[(7)]);
var inst_38939__$1 = (state_38959[(2)]);
var state_38959__$1 = (function (){var statearr_38963 = state_38959;
(statearr_38963[(7)] = inst_38939__$1);

return statearr_38963;
})();
if(cljs.core.truth_(inst_38939__$1)){
var statearr_38964_38983 = state_38959__$1;
(statearr_38964_38983[(1)] = (5));

} else {
var statearr_38965_38984 = state_38959__$1;
(statearr_38965_38984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (6))){
var state_38959__$1 = state_38959;
var statearr_38966_38985 = state_38959__$1;
(statearr_38966_38985[(2)] = null);

(statearr_38966_38985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (3))){
var inst_38957 = (state_38959[(2)]);
var state_38959__$1 = state_38959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38959__$1,inst_38957);
} else {
if((state_val_38960 === (2))){
var state_38959__$1 = state_38959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38959__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_38960 === (11))){
var inst_38951 = (state_38959[(2)]);
var state_38959__$1 = (function (){var statearr_38967 = state_38959;
(statearr_38967[(8)] = inst_38951);

return statearr_38967;
})();
var statearr_38968_38986 = state_38959__$1;
(statearr_38968_38986[(2)] = null);

(statearr_38968_38986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (9))){
var inst_38945 = (state_38959[(9)]);
var inst_38943 = (state_38959[(10)]);
var inst_38947 = inst_38945.call(null,inst_38943);
var state_38959__$1 = state_38959;
var statearr_38969_38987 = state_38959__$1;
(statearr_38969_38987[(2)] = inst_38947);

(statearr_38969_38987[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (5))){
var inst_38939 = (state_38959[(7)]);
var inst_38941 = figwheel.client.file_reloading.blocking_load.call(null,inst_38939);
var state_38959__$1 = state_38959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38959__$1,(8),inst_38941);
} else {
if((state_val_38960 === (10))){
var inst_38943 = (state_38959[(10)]);
var inst_38949 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_38943);
var state_38959__$1 = state_38959;
var statearr_38970_38988 = state_38959__$1;
(statearr_38970_38988[(2)] = inst_38949);

(statearr_38970_38988[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38960 === (8))){
var inst_38945 = (state_38959[(9)]);
var inst_38939 = (state_38959[(7)]);
var inst_38943 = (state_38959[(2)]);
var inst_38944 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_38945__$1 = cljs.core.get.call(null,inst_38944,inst_38939);
var state_38959__$1 = (function (){var statearr_38971 = state_38959;
(statearr_38971[(9)] = inst_38945__$1);

(statearr_38971[(10)] = inst_38943);

return statearr_38971;
})();
if(cljs.core.truth_(inst_38945__$1)){
var statearr_38972_38989 = state_38959__$1;
(statearr_38972_38989[(1)] = (9));

} else {
var statearr_38973_38990 = state_38959__$1;
(statearr_38973_38990[(1)] = (10));

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
});})(c__20183__auto__))
;
return ((function (switch__20118__auto__,c__20183__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20119__auto__ = null;
var figwheel$client$file_reloading$state_machine__20119__auto____0 = (function (){
var statearr_38977 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38977[(0)] = figwheel$client$file_reloading$state_machine__20119__auto__);

(statearr_38977[(1)] = (1));

return statearr_38977;
});
var figwheel$client$file_reloading$state_machine__20119__auto____1 = (function (state_38959){
while(true){
var ret_value__20120__auto__ = (function (){try{while(true){
var result__20121__auto__ = switch__20118__auto__.call(null,state_38959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20121__auto__;
}
break;
}
}catch (e38978){if((e38978 instanceof Object)){
var ex__20122__auto__ = e38978;
var statearr_38979_38991 = state_38959;
(statearr_38979_38991[(5)] = ex__20122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38992 = state_38959;
state_38959 = G__38992;
continue;
} else {
return ret_value__20120__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20119__auto__ = function(state_38959){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20119__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20119__auto____1.call(this,state_38959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20119__auto____0;
figwheel$client$file_reloading$state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20119__auto____1;
return figwheel$client$file_reloading$state_machine__20119__auto__;
})()
;})(switch__20118__auto__,c__20183__auto__))
})();
var state__20185__auto__ = (function (){var statearr_38980 = f__20184__auto__.call(null);
(statearr_38980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20183__auto__);

return statearr_38980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20185__auto__);
});})(c__20183__auto__))
);

return c__20183__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__38993,callback){
var map__38996 = p__38993;
var map__38996__$1 = ((((!((map__38996 == null)))?((((map__38996.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38996.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38996):map__38996);
var file_msg = map__38996__$1;
var namespace = cljs.core.get.call(null,map__38996__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__38996,map__38996__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__38996,map__38996__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__38998){
var map__39001 = p__38998;
var map__39001__$1 = ((((!((map__39001 == null)))?((((map__39001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39001):map__39001);
var file_msg = map__39001__$1;
var namespace = cljs.core.get.call(null,map__39001__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16332__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16332__auto__){
var or__16344__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
var or__16344__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16344__auto____$1)){
return or__16344__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16332__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__39003,callback){
var map__39006 = p__39003;
var map__39006__$1 = ((((!((map__39006 == null)))?((((map__39006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39006):map__39006);
var file_msg = map__39006__$1;
var request_url = cljs.core.get.call(null,map__39006__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__39006__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20183__auto___39094 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20183__auto___39094,out){
return (function (){
var f__20184__auto__ = (function (){var switch__20118__auto__ = ((function (c__20183__auto___39094,out){
return (function (state_39076){
var state_val_39077 = (state_39076[(1)]);
if((state_val_39077 === (1))){
var inst_39054 = cljs.core.nth.call(null,files,(0),null);
var inst_39055 = cljs.core.nthnext.call(null,files,(1));
var inst_39056 = files;
var state_39076__$1 = (function (){var statearr_39078 = state_39076;
(statearr_39078[(7)] = inst_39056);

(statearr_39078[(8)] = inst_39054);

(statearr_39078[(9)] = inst_39055);

return statearr_39078;
})();
var statearr_39079_39095 = state_39076__$1;
(statearr_39079_39095[(2)] = null);

(statearr_39079_39095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39077 === (2))){
var inst_39056 = (state_39076[(7)]);
var inst_39059 = (state_39076[(10)]);
var inst_39059__$1 = cljs.core.nth.call(null,inst_39056,(0),null);
var inst_39060 = cljs.core.nthnext.call(null,inst_39056,(1));
var inst_39061 = (inst_39059__$1 == null);
var inst_39062 = cljs.core.not.call(null,inst_39061);
var state_39076__$1 = (function (){var statearr_39080 = state_39076;
(statearr_39080[(10)] = inst_39059__$1);

(statearr_39080[(11)] = inst_39060);

return statearr_39080;
})();
if(inst_39062){
var statearr_39081_39096 = state_39076__$1;
(statearr_39081_39096[(1)] = (4));

} else {
var statearr_39082_39097 = state_39076__$1;
(statearr_39082_39097[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39077 === (3))){
var inst_39074 = (state_39076[(2)]);
var state_39076__$1 = state_39076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39076__$1,inst_39074);
} else {
if((state_val_39077 === (4))){
var inst_39059 = (state_39076[(10)]);
var inst_39064 = figwheel.client.file_reloading.reload_js_file.call(null,inst_39059);
var state_39076__$1 = state_39076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39076__$1,(7),inst_39064);
} else {
if((state_val_39077 === (5))){
var inst_39070 = cljs.core.async.close_BANG_.call(null,out);
var state_39076__$1 = state_39076;
var statearr_39083_39098 = state_39076__$1;
(statearr_39083_39098[(2)] = inst_39070);

(statearr_39083_39098[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39077 === (6))){
var inst_39072 = (state_39076[(2)]);
var state_39076__$1 = state_39076;
var statearr_39084_39099 = state_39076__$1;
(statearr_39084_39099[(2)] = inst_39072);

(statearr_39084_39099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39077 === (7))){
var inst_39060 = (state_39076[(11)]);
var inst_39066 = (state_39076[(2)]);
var inst_39067 = cljs.core.async.put_BANG_.call(null,out,inst_39066);
var inst_39056 = inst_39060;
var state_39076__$1 = (function (){var statearr_39085 = state_39076;
(statearr_39085[(7)] = inst_39056);

(statearr_39085[(12)] = inst_39067);

return statearr_39085;
})();
var statearr_39086_39100 = state_39076__$1;
(statearr_39086_39100[(2)] = null);

(statearr_39086_39100[(1)] = (2));


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
});})(c__20183__auto___39094,out))
;
return ((function (switch__20118__auto__,c__20183__auto___39094,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20119__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20119__auto____0 = (function (){
var statearr_39090 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39090[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20119__auto__);

(statearr_39090[(1)] = (1));

return statearr_39090;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20119__auto____1 = (function (state_39076){
while(true){
var ret_value__20120__auto__ = (function (){try{while(true){
var result__20121__auto__ = switch__20118__auto__.call(null,state_39076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20121__auto__;
}
break;
}
}catch (e39091){if((e39091 instanceof Object)){
var ex__20122__auto__ = e39091;
var statearr_39092_39101 = state_39076;
(statearr_39092_39101[(5)] = ex__20122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39102 = state_39076;
state_39076 = G__39102;
continue;
} else {
return ret_value__20120__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20119__auto__ = function(state_39076){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20119__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20119__auto____1.call(this,state_39076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20119__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20119__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20119__auto__;
})()
;})(switch__20118__auto__,c__20183__auto___39094,out))
})();
var state__20185__auto__ = (function (){var statearr_39093 = f__20184__auto__.call(null);
(statearr_39093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20183__auto___39094);

return statearr_39093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20185__auto__);
});})(c__20183__auto___39094,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__39103,opts){
var map__39107 = p__39103;
var map__39107__$1 = ((((!((map__39107 == null)))?((((map__39107.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39107.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39107):map__39107);
var eval_body__$1 = cljs.core.get.call(null,map__39107__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__39107__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16332__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16332__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16332__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e39109){var e = e39109;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__39110_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39110_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__39115){
var vec__39116 = p__39115;
var k = cljs.core.nth.call(null,vec__39116,(0),null);
var v = cljs.core.nth.call(null,vec__39116,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__39117){
var vec__39118 = p__39117;
var k = cljs.core.nth.call(null,vec__39118,(0),null);
var v = cljs.core.nth.call(null,vec__39118,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__39122,p__39123){
var map__39370 = p__39122;
var map__39370__$1 = ((((!((map__39370 == null)))?((((map__39370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39370):map__39370);
var opts = map__39370__$1;
var before_jsload = cljs.core.get.call(null,map__39370__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__39370__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__39370__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__39371 = p__39123;
var map__39371__$1 = ((((!((map__39371 == null)))?((((map__39371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39371):map__39371);
var msg = map__39371__$1;
var files = cljs.core.get.call(null,map__39371__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__39371__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__39371__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20183__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20183__auto__,map__39370,map__39370__$1,opts,before_jsload,on_jsload,reload_dependents,map__39371,map__39371__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20184__auto__ = (function (){var switch__20118__auto__ = ((function (c__20183__auto__,map__39370,map__39370__$1,opts,before_jsload,on_jsload,reload_dependents,map__39371,map__39371__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_39524){
var state_val_39525 = (state_39524[(1)]);
if((state_val_39525 === (7))){
var inst_39387 = (state_39524[(7)]);
var inst_39385 = (state_39524[(8)]);
var inst_39386 = (state_39524[(9)]);
var inst_39388 = (state_39524[(10)]);
var inst_39393 = cljs.core._nth.call(null,inst_39386,inst_39388);
var inst_39394 = figwheel.client.file_reloading.eval_body.call(null,inst_39393,opts);
var inst_39395 = (inst_39388 + (1));
var tmp39526 = inst_39387;
var tmp39527 = inst_39385;
var tmp39528 = inst_39386;
var inst_39385__$1 = tmp39527;
var inst_39386__$1 = tmp39528;
var inst_39387__$1 = tmp39526;
var inst_39388__$1 = inst_39395;
var state_39524__$1 = (function (){var statearr_39529 = state_39524;
(statearr_39529[(7)] = inst_39387__$1);

(statearr_39529[(8)] = inst_39385__$1);

(statearr_39529[(11)] = inst_39394);

(statearr_39529[(9)] = inst_39386__$1);

(statearr_39529[(10)] = inst_39388__$1);

return statearr_39529;
})();
var statearr_39530_39616 = state_39524__$1;
(statearr_39530_39616[(2)] = null);

(statearr_39530_39616[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (20))){
var inst_39428 = (state_39524[(12)]);
var inst_39436 = figwheel.client.file_reloading.sort_files.call(null,inst_39428);
var state_39524__$1 = state_39524;
var statearr_39531_39617 = state_39524__$1;
(statearr_39531_39617[(2)] = inst_39436);

(statearr_39531_39617[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (27))){
var state_39524__$1 = state_39524;
var statearr_39532_39618 = state_39524__$1;
(statearr_39532_39618[(2)] = null);

(statearr_39532_39618[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (1))){
var inst_39377 = (state_39524[(13)]);
var inst_39374 = before_jsload.call(null,files);
var inst_39375 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_39376 = (function (){return ((function (inst_39377,inst_39374,inst_39375,state_val_39525,c__20183__auto__,map__39370,map__39370__$1,opts,before_jsload,on_jsload,reload_dependents,map__39371,map__39371__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39119_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39119_SHARP_);
});
;})(inst_39377,inst_39374,inst_39375,state_val_39525,c__20183__auto__,map__39370,map__39370__$1,opts,before_jsload,on_jsload,reload_dependents,map__39371,map__39371__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39377__$1 = cljs.core.filter.call(null,inst_39376,files);
var inst_39378 = cljs.core.not_empty.call(null,inst_39377__$1);
var state_39524__$1 = (function (){var statearr_39533 = state_39524;
(statearr_39533[(14)] = inst_39374);

(statearr_39533[(15)] = inst_39375);

(statearr_39533[(13)] = inst_39377__$1);

return statearr_39533;
})();
if(cljs.core.truth_(inst_39378)){
var statearr_39534_39619 = state_39524__$1;
(statearr_39534_39619[(1)] = (2));

} else {
var statearr_39535_39620 = state_39524__$1;
(statearr_39535_39620[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (24))){
var state_39524__$1 = state_39524;
var statearr_39536_39621 = state_39524__$1;
(statearr_39536_39621[(2)] = null);

(statearr_39536_39621[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (39))){
var inst_39478 = (state_39524[(16)]);
var state_39524__$1 = state_39524;
var statearr_39537_39622 = state_39524__$1;
(statearr_39537_39622[(2)] = inst_39478);

(statearr_39537_39622[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (46))){
var inst_39519 = (state_39524[(2)]);
var state_39524__$1 = state_39524;
var statearr_39538_39623 = state_39524__$1;
(statearr_39538_39623[(2)] = inst_39519);

(statearr_39538_39623[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (4))){
var inst_39422 = (state_39524[(2)]);
var inst_39423 = cljs.core.List.EMPTY;
var inst_39424 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_39423);
var inst_39425 = (function (){return ((function (inst_39422,inst_39423,inst_39424,state_val_39525,c__20183__auto__,map__39370,map__39370__$1,opts,before_jsload,on_jsload,reload_dependents,map__39371,map__39371__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39120_SHARP_){
var and__16332__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39120_SHARP_);
if(cljs.core.truth_(and__16332__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39120_SHARP_));
} else {
return and__16332__auto__;
}
});
;})(inst_39422,inst_39423,inst_39424,state_val_39525,c__20183__auto__,map__39370,map__39370__$1,opts,before_jsload,on_jsload,reload_dependents,map__39371,map__39371__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39426 = cljs.core.filter.call(null,inst_39425,files);
var inst_39427 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_39428 = cljs.core.concat.call(null,inst_39426,inst_39427);
var state_39524__$1 = (function (){var statearr_39539 = state_39524;
(statearr_39539[(17)] = inst_39422);

(statearr_39539[(12)] = inst_39428);

(statearr_39539[(18)] = inst_39424);

return statearr_39539;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_39540_39624 = state_39524__$1;
(statearr_39540_39624[(1)] = (16));

} else {
var statearr_39541_39625 = state_39524__$1;
(statearr_39541_39625[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (15))){
var inst_39412 = (state_39524[(2)]);
var state_39524__$1 = state_39524;
var statearr_39542_39626 = state_39524__$1;
(statearr_39542_39626[(2)] = inst_39412);

(statearr_39542_39626[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (21))){
var inst_39438 = (state_39524[(19)]);
var inst_39438__$1 = (state_39524[(2)]);
var inst_39439 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_39438__$1);
var state_39524__$1 = (function (){var statearr_39543 = state_39524;
(statearr_39543[(19)] = inst_39438__$1);

return statearr_39543;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39524__$1,(22),inst_39439);
} else {
if((state_val_39525 === (31))){
var inst_39522 = (state_39524[(2)]);
var state_39524__$1 = state_39524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39524__$1,inst_39522);
} else {
if((state_val_39525 === (32))){
var inst_39478 = (state_39524[(16)]);
var inst_39483 = inst_39478.cljs$lang$protocol_mask$partition0$;
var inst_39484 = (inst_39483 & (64));
var inst_39485 = inst_39478.cljs$core$ISeq$;
var inst_39486 = (inst_39484) || (inst_39485);
var state_39524__$1 = state_39524;
if(cljs.core.truth_(inst_39486)){
var statearr_39544_39627 = state_39524__$1;
(statearr_39544_39627[(1)] = (35));

} else {
var statearr_39545_39628 = state_39524__$1;
(statearr_39545_39628[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (40))){
var inst_39499 = (state_39524[(20)]);
var inst_39498 = (state_39524[(2)]);
var inst_39499__$1 = cljs.core.get.call(null,inst_39498,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_39500 = cljs.core.get.call(null,inst_39498,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_39501 = cljs.core.not_empty.call(null,inst_39499__$1);
var state_39524__$1 = (function (){var statearr_39546 = state_39524;
(statearr_39546[(20)] = inst_39499__$1);

(statearr_39546[(21)] = inst_39500);

return statearr_39546;
})();
if(cljs.core.truth_(inst_39501)){
var statearr_39547_39629 = state_39524__$1;
(statearr_39547_39629[(1)] = (41));

} else {
var statearr_39548_39630 = state_39524__$1;
(statearr_39548_39630[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (33))){
var state_39524__$1 = state_39524;
var statearr_39549_39631 = state_39524__$1;
(statearr_39549_39631[(2)] = false);

(statearr_39549_39631[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (13))){
var inst_39398 = (state_39524[(22)]);
var inst_39402 = cljs.core.chunk_first.call(null,inst_39398);
var inst_39403 = cljs.core.chunk_rest.call(null,inst_39398);
var inst_39404 = cljs.core.count.call(null,inst_39402);
var inst_39385 = inst_39403;
var inst_39386 = inst_39402;
var inst_39387 = inst_39404;
var inst_39388 = (0);
var state_39524__$1 = (function (){var statearr_39550 = state_39524;
(statearr_39550[(7)] = inst_39387);

(statearr_39550[(8)] = inst_39385);

(statearr_39550[(9)] = inst_39386);

(statearr_39550[(10)] = inst_39388);

return statearr_39550;
})();
var statearr_39551_39632 = state_39524__$1;
(statearr_39551_39632[(2)] = null);

(statearr_39551_39632[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (22))){
var inst_39442 = (state_39524[(23)]);
var inst_39441 = (state_39524[(24)]);
var inst_39446 = (state_39524[(25)]);
var inst_39438 = (state_39524[(19)]);
var inst_39441__$1 = (state_39524[(2)]);
var inst_39442__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39441__$1);
var inst_39443 = (function (){var all_files = inst_39438;
var res_SINGLEQUOTE_ = inst_39441__$1;
var res = inst_39442__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_39442,inst_39441,inst_39446,inst_39438,inst_39441__$1,inst_39442__$1,state_val_39525,c__20183__auto__,map__39370,map__39370__$1,opts,before_jsload,on_jsload,reload_dependents,map__39371,map__39371__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39121_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__39121_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_39442,inst_39441,inst_39446,inst_39438,inst_39441__$1,inst_39442__$1,state_val_39525,c__20183__auto__,map__39370,map__39370__$1,opts,before_jsload,on_jsload,reload_dependents,map__39371,map__39371__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39444 = cljs.core.filter.call(null,inst_39443,inst_39441__$1);
var inst_39445 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_39446__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39445);
var inst_39447 = cljs.core.not_empty.call(null,inst_39446__$1);
var state_39524__$1 = (function (){var statearr_39552 = state_39524;
(statearr_39552[(23)] = inst_39442__$1);

(statearr_39552[(26)] = inst_39444);

(statearr_39552[(24)] = inst_39441__$1);

(statearr_39552[(25)] = inst_39446__$1);

return statearr_39552;
})();
if(cljs.core.truth_(inst_39447)){
var statearr_39553_39633 = state_39524__$1;
(statearr_39553_39633[(1)] = (23));

} else {
var statearr_39554_39634 = state_39524__$1;
(statearr_39554_39634[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (36))){
var state_39524__$1 = state_39524;
var statearr_39555_39635 = state_39524__$1;
(statearr_39555_39635[(2)] = false);

(statearr_39555_39635[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (41))){
var inst_39499 = (state_39524[(20)]);
var inst_39503 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_39504 = cljs.core.map.call(null,inst_39503,inst_39499);
var inst_39505 = cljs.core.pr_str.call(null,inst_39504);
var inst_39506 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_39505)].join('');
var inst_39507 = figwheel.client.utils.log.call(null,inst_39506);
var state_39524__$1 = state_39524;
var statearr_39556_39636 = state_39524__$1;
(statearr_39556_39636[(2)] = inst_39507);

(statearr_39556_39636[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (43))){
var inst_39500 = (state_39524[(21)]);
var inst_39510 = (state_39524[(2)]);
var inst_39511 = cljs.core.not_empty.call(null,inst_39500);
var state_39524__$1 = (function (){var statearr_39557 = state_39524;
(statearr_39557[(27)] = inst_39510);

return statearr_39557;
})();
if(cljs.core.truth_(inst_39511)){
var statearr_39558_39637 = state_39524__$1;
(statearr_39558_39637[(1)] = (44));

} else {
var statearr_39559_39638 = state_39524__$1;
(statearr_39559_39638[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (29))){
var inst_39442 = (state_39524[(23)]);
var inst_39444 = (state_39524[(26)]);
var inst_39441 = (state_39524[(24)]);
var inst_39446 = (state_39524[(25)]);
var inst_39478 = (state_39524[(16)]);
var inst_39438 = (state_39524[(19)]);
var inst_39474 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_39477 = (function (){var all_files = inst_39438;
var res_SINGLEQUOTE_ = inst_39441;
var res = inst_39442;
var files_not_loaded = inst_39444;
var dependencies_that_loaded = inst_39446;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39442,inst_39444,inst_39441,inst_39446,inst_39478,inst_39438,inst_39474,state_val_39525,c__20183__auto__,map__39370,map__39370__$1,opts,before_jsload,on_jsload,reload_dependents,map__39371,map__39371__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39476){
var map__39560 = p__39476;
var map__39560__$1 = ((((!((map__39560 == null)))?((((map__39560.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39560.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39560):map__39560);
var namespace = cljs.core.get.call(null,map__39560__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39442,inst_39444,inst_39441,inst_39446,inst_39478,inst_39438,inst_39474,state_val_39525,c__20183__auto__,map__39370,map__39370__$1,opts,before_jsload,on_jsload,reload_dependents,map__39371,map__39371__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39478__$1 = cljs.core.group_by.call(null,inst_39477,inst_39444);
var inst_39480 = (inst_39478__$1 == null);
var inst_39481 = cljs.core.not.call(null,inst_39480);
var state_39524__$1 = (function (){var statearr_39562 = state_39524;
(statearr_39562[(28)] = inst_39474);

(statearr_39562[(16)] = inst_39478__$1);

return statearr_39562;
})();
if(inst_39481){
var statearr_39563_39639 = state_39524__$1;
(statearr_39563_39639[(1)] = (32));

} else {
var statearr_39564_39640 = state_39524__$1;
(statearr_39564_39640[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (44))){
var inst_39500 = (state_39524[(21)]);
var inst_39513 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39500);
var inst_39514 = cljs.core.pr_str.call(null,inst_39513);
var inst_39515 = [cljs.core.str("not required: "),cljs.core.str(inst_39514)].join('');
var inst_39516 = figwheel.client.utils.log.call(null,inst_39515);
var state_39524__$1 = state_39524;
var statearr_39565_39641 = state_39524__$1;
(statearr_39565_39641[(2)] = inst_39516);

(statearr_39565_39641[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (6))){
var inst_39419 = (state_39524[(2)]);
var state_39524__$1 = state_39524;
var statearr_39566_39642 = state_39524__$1;
(statearr_39566_39642[(2)] = inst_39419);

(statearr_39566_39642[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (28))){
var inst_39444 = (state_39524[(26)]);
var inst_39471 = (state_39524[(2)]);
var inst_39472 = cljs.core.not_empty.call(null,inst_39444);
var state_39524__$1 = (function (){var statearr_39567 = state_39524;
(statearr_39567[(29)] = inst_39471);

return statearr_39567;
})();
if(cljs.core.truth_(inst_39472)){
var statearr_39568_39643 = state_39524__$1;
(statearr_39568_39643[(1)] = (29));

} else {
var statearr_39569_39644 = state_39524__$1;
(statearr_39569_39644[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (25))){
var inst_39442 = (state_39524[(23)]);
var inst_39458 = (state_39524[(2)]);
var inst_39459 = cljs.core.not_empty.call(null,inst_39442);
var state_39524__$1 = (function (){var statearr_39570 = state_39524;
(statearr_39570[(30)] = inst_39458);

return statearr_39570;
})();
if(cljs.core.truth_(inst_39459)){
var statearr_39571_39645 = state_39524__$1;
(statearr_39571_39645[(1)] = (26));

} else {
var statearr_39572_39646 = state_39524__$1;
(statearr_39572_39646[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (34))){
var inst_39493 = (state_39524[(2)]);
var state_39524__$1 = state_39524;
if(cljs.core.truth_(inst_39493)){
var statearr_39573_39647 = state_39524__$1;
(statearr_39573_39647[(1)] = (38));

} else {
var statearr_39574_39648 = state_39524__$1;
(statearr_39574_39648[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (17))){
var state_39524__$1 = state_39524;
var statearr_39575_39649 = state_39524__$1;
(statearr_39575_39649[(2)] = recompile_dependents);

(statearr_39575_39649[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (3))){
var state_39524__$1 = state_39524;
var statearr_39576_39650 = state_39524__$1;
(statearr_39576_39650[(2)] = null);

(statearr_39576_39650[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (12))){
var inst_39415 = (state_39524[(2)]);
var state_39524__$1 = state_39524;
var statearr_39577_39651 = state_39524__$1;
(statearr_39577_39651[(2)] = inst_39415);

(statearr_39577_39651[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (2))){
var inst_39377 = (state_39524[(13)]);
var inst_39384 = cljs.core.seq.call(null,inst_39377);
var inst_39385 = inst_39384;
var inst_39386 = null;
var inst_39387 = (0);
var inst_39388 = (0);
var state_39524__$1 = (function (){var statearr_39578 = state_39524;
(statearr_39578[(7)] = inst_39387);

(statearr_39578[(8)] = inst_39385);

(statearr_39578[(9)] = inst_39386);

(statearr_39578[(10)] = inst_39388);

return statearr_39578;
})();
var statearr_39579_39652 = state_39524__$1;
(statearr_39579_39652[(2)] = null);

(statearr_39579_39652[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (23))){
var inst_39442 = (state_39524[(23)]);
var inst_39444 = (state_39524[(26)]);
var inst_39441 = (state_39524[(24)]);
var inst_39446 = (state_39524[(25)]);
var inst_39438 = (state_39524[(19)]);
var inst_39449 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_39451 = (function (){var all_files = inst_39438;
var res_SINGLEQUOTE_ = inst_39441;
var res = inst_39442;
var files_not_loaded = inst_39444;
var dependencies_that_loaded = inst_39446;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39442,inst_39444,inst_39441,inst_39446,inst_39438,inst_39449,state_val_39525,c__20183__auto__,map__39370,map__39370__$1,opts,before_jsload,on_jsload,reload_dependents,map__39371,map__39371__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39450){
var map__39580 = p__39450;
var map__39580__$1 = ((((!((map__39580 == null)))?((((map__39580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39580):map__39580);
var request_url = cljs.core.get.call(null,map__39580__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39442,inst_39444,inst_39441,inst_39446,inst_39438,inst_39449,state_val_39525,c__20183__auto__,map__39370,map__39370__$1,opts,before_jsload,on_jsload,reload_dependents,map__39371,map__39371__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39452 = cljs.core.reverse.call(null,inst_39446);
var inst_39453 = cljs.core.map.call(null,inst_39451,inst_39452);
var inst_39454 = cljs.core.pr_str.call(null,inst_39453);
var inst_39455 = figwheel.client.utils.log.call(null,inst_39454);
var state_39524__$1 = (function (){var statearr_39582 = state_39524;
(statearr_39582[(31)] = inst_39449);

return statearr_39582;
})();
var statearr_39583_39653 = state_39524__$1;
(statearr_39583_39653[(2)] = inst_39455);

(statearr_39583_39653[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (35))){
var state_39524__$1 = state_39524;
var statearr_39584_39654 = state_39524__$1;
(statearr_39584_39654[(2)] = true);

(statearr_39584_39654[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (19))){
var inst_39428 = (state_39524[(12)]);
var inst_39434 = figwheel.client.file_reloading.expand_files.call(null,inst_39428);
var state_39524__$1 = state_39524;
var statearr_39585_39655 = state_39524__$1;
(statearr_39585_39655[(2)] = inst_39434);

(statearr_39585_39655[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (11))){
var state_39524__$1 = state_39524;
var statearr_39586_39656 = state_39524__$1;
(statearr_39586_39656[(2)] = null);

(statearr_39586_39656[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (9))){
var inst_39417 = (state_39524[(2)]);
var state_39524__$1 = state_39524;
var statearr_39587_39657 = state_39524__$1;
(statearr_39587_39657[(2)] = inst_39417);

(statearr_39587_39657[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (5))){
var inst_39387 = (state_39524[(7)]);
var inst_39388 = (state_39524[(10)]);
var inst_39390 = (inst_39388 < inst_39387);
var inst_39391 = inst_39390;
var state_39524__$1 = state_39524;
if(cljs.core.truth_(inst_39391)){
var statearr_39588_39658 = state_39524__$1;
(statearr_39588_39658[(1)] = (7));

} else {
var statearr_39589_39659 = state_39524__$1;
(statearr_39589_39659[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (14))){
var inst_39398 = (state_39524[(22)]);
var inst_39407 = cljs.core.first.call(null,inst_39398);
var inst_39408 = figwheel.client.file_reloading.eval_body.call(null,inst_39407,opts);
var inst_39409 = cljs.core.next.call(null,inst_39398);
var inst_39385 = inst_39409;
var inst_39386 = null;
var inst_39387 = (0);
var inst_39388 = (0);
var state_39524__$1 = (function (){var statearr_39590 = state_39524;
(statearr_39590[(7)] = inst_39387);

(statearr_39590[(8)] = inst_39385);

(statearr_39590[(9)] = inst_39386);

(statearr_39590[(32)] = inst_39408);

(statearr_39590[(10)] = inst_39388);

return statearr_39590;
})();
var statearr_39591_39660 = state_39524__$1;
(statearr_39591_39660[(2)] = null);

(statearr_39591_39660[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (45))){
var state_39524__$1 = state_39524;
var statearr_39592_39661 = state_39524__$1;
(statearr_39592_39661[(2)] = null);

(statearr_39592_39661[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (26))){
var inst_39442 = (state_39524[(23)]);
var inst_39444 = (state_39524[(26)]);
var inst_39441 = (state_39524[(24)]);
var inst_39446 = (state_39524[(25)]);
var inst_39438 = (state_39524[(19)]);
var inst_39461 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_39463 = (function (){var all_files = inst_39438;
var res_SINGLEQUOTE_ = inst_39441;
var res = inst_39442;
var files_not_loaded = inst_39444;
var dependencies_that_loaded = inst_39446;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39442,inst_39444,inst_39441,inst_39446,inst_39438,inst_39461,state_val_39525,c__20183__auto__,map__39370,map__39370__$1,opts,before_jsload,on_jsload,reload_dependents,map__39371,map__39371__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39462){
var map__39593 = p__39462;
var map__39593__$1 = ((((!((map__39593 == null)))?((((map__39593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39593):map__39593);
var namespace = cljs.core.get.call(null,map__39593__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__39593__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39442,inst_39444,inst_39441,inst_39446,inst_39438,inst_39461,state_val_39525,c__20183__auto__,map__39370,map__39370__$1,opts,before_jsload,on_jsload,reload_dependents,map__39371,map__39371__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39464 = cljs.core.map.call(null,inst_39463,inst_39442);
var inst_39465 = cljs.core.pr_str.call(null,inst_39464);
var inst_39466 = figwheel.client.utils.log.call(null,inst_39465);
var inst_39467 = (function (){var all_files = inst_39438;
var res_SINGLEQUOTE_ = inst_39441;
var res = inst_39442;
var files_not_loaded = inst_39444;
var dependencies_that_loaded = inst_39446;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39442,inst_39444,inst_39441,inst_39446,inst_39438,inst_39461,inst_39463,inst_39464,inst_39465,inst_39466,state_val_39525,c__20183__auto__,map__39370,map__39370__$1,opts,before_jsload,on_jsload,reload_dependents,map__39371,map__39371__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39442,inst_39444,inst_39441,inst_39446,inst_39438,inst_39461,inst_39463,inst_39464,inst_39465,inst_39466,state_val_39525,c__20183__auto__,map__39370,map__39370__$1,opts,before_jsload,on_jsload,reload_dependents,map__39371,map__39371__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39468 = setTimeout(inst_39467,(10));
var state_39524__$1 = (function (){var statearr_39595 = state_39524;
(statearr_39595[(33)] = inst_39461);

(statearr_39595[(34)] = inst_39466);

return statearr_39595;
})();
var statearr_39596_39662 = state_39524__$1;
(statearr_39596_39662[(2)] = inst_39468);

(statearr_39596_39662[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (16))){
var state_39524__$1 = state_39524;
var statearr_39597_39663 = state_39524__$1;
(statearr_39597_39663[(2)] = reload_dependents);

(statearr_39597_39663[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (38))){
var inst_39478 = (state_39524[(16)]);
var inst_39495 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39478);
var state_39524__$1 = state_39524;
var statearr_39598_39664 = state_39524__$1;
(statearr_39598_39664[(2)] = inst_39495);

(statearr_39598_39664[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (30))){
var state_39524__$1 = state_39524;
var statearr_39599_39665 = state_39524__$1;
(statearr_39599_39665[(2)] = null);

(statearr_39599_39665[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (10))){
var inst_39398 = (state_39524[(22)]);
var inst_39400 = cljs.core.chunked_seq_QMARK_.call(null,inst_39398);
var state_39524__$1 = state_39524;
if(inst_39400){
var statearr_39600_39666 = state_39524__$1;
(statearr_39600_39666[(1)] = (13));

} else {
var statearr_39601_39667 = state_39524__$1;
(statearr_39601_39667[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (18))){
var inst_39432 = (state_39524[(2)]);
var state_39524__$1 = state_39524;
if(cljs.core.truth_(inst_39432)){
var statearr_39602_39668 = state_39524__$1;
(statearr_39602_39668[(1)] = (19));

} else {
var statearr_39603_39669 = state_39524__$1;
(statearr_39603_39669[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (42))){
var state_39524__$1 = state_39524;
var statearr_39604_39670 = state_39524__$1;
(statearr_39604_39670[(2)] = null);

(statearr_39604_39670[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (37))){
var inst_39490 = (state_39524[(2)]);
var state_39524__$1 = state_39524;
var statearr_39605_39671 = state_39524__$1;
(statearr_39605_39671[(2)] = inst_39490);

(statearr_39605_39671[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39525 === (8))){
var inst_39385 = (state_39524[(8)]);
var inst_39398 = (state_39524[(22)]);
var inst_39398__$1 = cljs.core.seq.call(null,inst_39385);
var state_39524__$1 = (function (){var statearr_39606 = state_39524;
(statearr_39606[(22)] = inst_39398__$1);

return statearr_39606;
})();
if(inst_39398__$1){
var statearr_39607_39672 = state_39524__$1;
(statearr_39607_39672[(1)] = (10));

} else {
var statearr_39608_39673 = state_39524__$1;
(statearr_39608_39673[(1)] = (11));

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
}
});})(c__20183__auto__,map__39370,map__39370__$1,opts,before_jsload,on_jsload,reload_dependents,map__39371,map__39371__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20118__auto__,c__20183__auto__,map__39370,map__39370__$1,opts,before_jsload,on_jsload,reload_dependents,map__39371,map__39371__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20119__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20119__auto____0 = (function (){
var statearr_39612 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39612[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20119__auto__);

(statearr_39612[(1)] = (1));

return statearr_39612;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20119__auto____1 = (function (state_39524){
while(true){
var ret_value__20120__auto__ = (function (){try{while(true){
var result__20121__auto__ = switch__20118__auto__.call(null,state_39524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20121__auto__;
}
break;
}
}catch (e39613){if((e39613 instanceof Object)){
var ex__20122__auto__ = e39613;
var statearr_39614_39674 = state_39524;
(statearr_39614_39674[(5)] = ex__20122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39675 = state_39524;
state_39524 = G__39675;
continue;
} else {
return ret_value__20120__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20119__auto__ = function(state_39524){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20119__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20119__auto____1.call(this,state_39524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20119__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20119__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20119__auto__;
})()
;})(switch__20118__auto__,c__20183__auto__,map__39370,map__39370__$1,opts,before_jsload,on_jsload,reload_dependents,map__39371,map__39371__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20185__auto__ = (function (){var statearr_39615 = f__20184__auto__.call(null);
(statearr_39615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20183__auto__);

return statearr_39615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20185__auto__);
});})(c__20183__auto__,map__39370,map__39370__$1,opts,before_jsload,on_jsload,reload_dependents,map__39371,map__39371__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20183__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__39678,link){
var map__39681 = p__39678;
var map__39681__$1 = ((((!((map__39681 == null)))?((((map__39681.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39681.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39681):map__39681);
var file = cljs.core.get.call(null,map__39681__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__39681,map__39681__$1,file){
return (function (p1__39676_SHARP_,p2__39677_SHARP_){
if(cljs.core._EQ_.call(null,p1__39676_SHARP_,p2__39677_SHARP_)){
return p1__39676_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__39681,map__39681__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__39687){
var map__39688 = p__39687;
var map__39688__$1 = ((((!((map__39688 == null)))?((((map__39688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39688):map__39688);
var match_length = cljs.core.get.call(null,map__39688__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__39688__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__39683_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__39683_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args39690 = [];
var len__17402__auto___39693 = arguments.length;
var i__17403__auto___39694 = (0);
while(true){
if((i__17403__auto___39694 < len__17402__auto___39693)){
args39690.push((arguments[i__17403__auto___39694]));

var G__39695 = (i__17403__auto___39694 + (1));
i__17403__auto___39694 = G__39695;
continue;
} else {
}
break;
}

var G__39692 = args39690.length;
switch (G__39692) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39690.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__39697_SHARP_,p2__39698_SHARP_){
return cljs.core.assoc.call(null,p1__39697_SHARP_,cljs.core.get.call(null,p2__39698_SHARP_,key),p2__39698_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__39699){
var map__39702 = p__39699;
var map__39702__$1 = ((((!((map__39702 == null)))?((((map__39702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39702):map__39702);
var f_data = map__39702__$1;
var file = cljs.core.get.call(null,map__39702__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__39704,files_msg){
var map__39711 = p__39704;
var map__39711__$1 = ((((!((map__39711 == null)))?((((map__39711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39711):map__39711);
var opts = map__39711__$1;
var on_cssload = cljs.core.get.call(null,map__39711__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__39713_39717 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__39714_39718 = null;
var count__39715_39719 = (0);
var i__39716_39720 = (0);
while(true){
if((i__39716_39720 < count__39715_39719)){
var f_39721 = cljs.core._nth.call(null,chunk__39714_39718,i__39716_39720);
figwheel.client.file_reloading.reload_css_file.call(null,f_39721);

var G__39722 = seq__39713_39717;
var G__39723 = chunk__39714_39718;
var G__39724 = count__39715_39719;
var G__39725 = (i__39716_39720 + (1));
seq__39713_39717 = G__39722;
chunk__39714_39718 = G__39723;
count__39715_39719 = G__39724;
i__39716_39720 = G__39725;
continue;
} else {
var temp__4425__auto___39726 = cljs.core.seq.call(null,seq__39713_39717);
if(temp__4425__auto___39726){
var seq__39713_39727__$1 = temp__4425__auto___39726;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39713_39727__$1)){
var c__17147__auto___39728 = cljs.core.chunk_first.call(null,seq__39713_39727__$1);
var G__39729 = cljs.core.chunk_rest.call(null,seq__39713_39727__$1);
var G__39730 = c__17147__auto___39728;
var G__39731 = cljs.core.count.call(null,c__17147__auto___39728);
var G__39732 = (0);
seq__39713_39717 = G__39729;
chunk__39714_39718 = G__39730;
count__39715_39719 = G__39731;
i__39716_39720 = G__39732;
continue;
} else {
var f_39733 = cljs.core.first.call(null,seq__39713_39727__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_39733);

var G__39734 = cljs.core.next.call(null,seq__39713_39727__$1);
var G__39735 = null;
var G__39736 = (0);
var G__39737 = (0);
seq__39713_39717 = G__39734;
chunk__39714_39718 = G__39735;
count__39715_39719 = G__39736;
i__39716_39720 = G__39737;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__39711,map__39711__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__39711,map__39711__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1446795344653