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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__38856_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__38856_SHARP_));
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
var seq__38861 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__38862 = null;
var count__38863 = (0);
var i__38864 = (0);
while(true){
if((i__38864 < count__38863)){
var n = cljs.core._nth.call(null,chunk__38862,i__38864);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38865 = seq__38861;
var G__38866 = chunk__38862;
var G__38867 = count__38863;
var G__38868 = (i__38864 + (1));
seq__38861 = G__38865;
chunk__38862 = G__38866;
count__38863 = G__38867;
i__38864 = G__38868;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__38861);
if(temp__4425__auto__){
var seq__38861__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38861__$1)){
var c__17147__auto__ = cljs.core.chunk_first.call(null,seq__38861__$1);
var G__38869 = cljs.core.chunk_rest.call(null,seq__38861__$1);
var G__38870 = c__17147__auto__;
var G__38871 = cljs.core.count.call(null,c__17147__auto__);
var G__38872 = (0);
seq__38861 = G__38869;
chunk__38862 = G__38870;
count__38863 = G__38871;
i__38864 = G__38872;
continue;
} else {
var n = cljs.core.first.call(null,seq__38861__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38873 = cljs.core.next.call(null,seq__38861__$1);
var G__38874 = null;
var G__38875 = (0);
var G__38876 = (0);
seq__38861 = G__38873;
chunk__38862 = G__38874;
count__38863 = G__38875;
i__38864 = G__38876;
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

var seq__38915_38922 = cljs.core.seq.call(null,deps);
var chunk__38916_38923 = null;
var count__38917_38924 = (0);
var i__38918_38925 = (0);
while(true){
if((i__38918_38925 < count__38917_38924)){
var dep_38926 = cljs.core._nth.call(null,chunk__38916_38923,i__38918_38925);
topo_sort_helper_STAR_.call(null,dep_38926,(depth + (1)),state);

var G__38927 = seq__38915_38922;
var G__38928 = chunk__38916_38923;
var G__38929 = count__38917_38924;
var G__38930 = (i__38918_38925 + (1));
seq__38915_38922 = G__38927;
chunk__38916_38923 = G__38928;
count__38917_38924 = G__38929;
i__38918_38925 = G__38930;
continue;
} else {
var temp__4425__auto___38931 = cljs.core.seq.call(null,seq__38915_38922);
if(temp__4425__auto___38931){
var seq__38915_38932__$1 = temp__4425__auto___38931;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38915_38932__$1)){
var c__17147__auto___38933 = cljs.core.chunk_first.call(null,seq__38915_38932__$1);
var G__38934 = cljs.core.chunk_rest.call(null,seq__38915_38932__$1);
var G__38935 = c__17147__auto___38933;
var G__38936 = cljs.core.count.call(null,c__17147__auto___38933);
var G__38937 = (0);
seq__38915_38922 = G__38934;
chunk__38916_38923 = G__38935;
count__38917_38924 = G__38936;
i__38918_38925 = G__38937;
continue;
} else {
var dep_38938 = cljs.core.first.call(null,seq__38915_38932__$1);
topo_sort_helper_STAR_.call(null,dep_38938,(depth + (1)),state);

var G__38939 = cljs.core.next.call(null,seq__38915_38932__$1);
var G__38940 = null;
var G__38941 = (0);
var G__38942 = (0);
seq__38915_38922 = G__38939;
chunk__38916_38923 = G__38940;
count__38917_38924 = G__38941;
i__38918_38925 = G__38942;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__38919){
var vec__38921 = p__38919;
var x = cljs.core.nth.call(null,vec__38921,(0),null);
var xs = cljs.core.nthnext.call(null,vec__38921,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__38921,x,xs,get_deps__$1){
return (function (p1__38877_SHARP_){
return clojure.set.difference.call(null,p1__38877_SHARP_,x);
});})(vec__38921,x,xs,get_deps__$1))
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
var seq__38955 = cljs.core.seq.call(null,provides);
var chunk__38956 = null;
var count__38957 = (0);
var i__38958 = (0);
while(true){
if((i__38958 < count__38957)){
var prov = cljs.core._nth.call(null,chunk__38956,i__38958);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38959_38967 = cljs.core.seq.call(null,requires);
var chunk__38960_38968 = null;
var count__38961_38969 = (0);
var i__38962_38970 = (0);
while(true){
if((i__38962_38970 < count__38961_38969)){
var req_38971 = cljs.core._nth.call(null,chunk__38960_38968,i__38962_38970);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38971,prov);

var G__38972 = seq__38959_38967;
var G__38973 = chunk__38960_38968;
var G__38974 = count__38961_38969;
var G__38975 = (i__38962_38970 + (1));
seq__38959_38967 = G__38972;
chunk__38960_38968 = G__38973;
count__38961_38969 = G__38974;
i__38962_38970 = G__38975;
continue;
} else {
var temp__4425__auto___38976 = cljs.core.seq.call(null,seq__38959_38967);
if(temp__4425__auto___38976){
var seq__38959_38977__$1 = temp__4425__auto___38976;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38959_38977__$1)){
var c__17147__auto___38978 = cljs.core.chunk_first.call(null,seq__38959_38977__$1);
var G__38979 = cljs.core.chunk_rest.call(null,seq__38959_38977__$1);
var G__38980 = c__17147__auto___38978;
var G__38981 = cljs.core.count.call(null,c__17147__auto___38978);
var G__38982 = (0);
seq__38959_38967 = G__38979;
chunk__38960_38968 = G__38980;
count__38961_38969 = G__38981;
i__38962_38970 = G__38982;
continue;
} else {
var req_38983 = cljs.core.first.call(null,seq__38959_38977__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38983,prov);

var G__38984 = cljs.core.next.call(null,seq__38959_38977__$1);
var G__38985 = null;
var G__38986 = (0);
var G__38987 = (0);
seq__38959_38967 = G__38984;
chunk__38960_38968 = G__38985;
count__38961_38969 = G__38986;
i__38962_38970 = G__38987;
continue;
}
} else {
}
}
break;
}

var G__38988 = seq__38955;
var G__38989 = chunk__38956;
var G__38990 = count__38957;
var G__38991 = (i__38958 + (1));
seq__38955 = G__38988;
chunk__38956 = G__38989;
count__38957 = G__38990;
i__38958 = G__38991;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__38955);
if(temp__4425__auto__){
var seq__38955__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38955__$1)){
var c__17147__auto__ = cljs.core.chunk_first.call(null,seq__38955__$1);
var G__38992 = cljs.core.chunk_rest.call(null,seq__38955__$1);
var G__38993 = c__17147__auto__;
var G__38994 = cljs.core.count.call(null,c__17147__auto__);
var G__38995 = (0);
seq__38955 = G__38992;
chunk__38956 = G__38993;
count__38957 = G__38994;
i__38958 = G__38995;
continue;
} else {
var prov = cljs.core.first.call(null,seq__38955__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38963_38996 = cljs.core.seq.call(null,requires);
var chunk__38964_38997 = null;
var count__38965_38998 = (0);
var i__38966_38999 = (0);
while(true){
if((i__38966_38999 < count__38965_38998)){
var req_39000 = cljs.core._nth.call(null,chunk__38964_38997,i__38966_38999);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39000,prov);

var G__39001 = seq__38963_38996;
var G__39002 = chunk__38964_38997;
var G__39003 = count__38965_38998;
var G__39004 = (i__38966_38999 + (1));
seq__38963_38996 = G__39001;
chunk__38964_38997 = G__39002;
count__38965_38998 = G__39003;
i__38966_38999 = G__39004;
continue;
} else {
var temp__4425__auto___39005__$1 = cljs.core.seq.call(null,seq__38963_38996);
if(temp__4425__auto___39005__$1){
var seq__38963_39006__$1 = temp__4425__auto___39005__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38963_39006__$1)){
var c__17147__auto___39007 = cljs.core.chunk_first.call(null,seq__38963_39006__$1);
var G__39008 = cljs.core.chunk_rest.call(null,seq__38963_39006__$1);
var G__39009 = c__17147__auto___39007;
var G__39010 = cljs.core.count.call(null,c__17147__auto___39007);
var G__39011 = (0);
seq__38963_38996 = G__39008;
chunk__38964_38997 = G__39009;
count__38965_38998 = G__39010;
i__38966_38999 = G__39011;
continue;
} else {
var req_39012 = cljs.core.first.call(null,seq__38963_39006__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39012,prov);

var G__39013 = cljs.core.next.call(null,seq__38963_39006__$1);
var G__39014 = null;
var G__39015 = (0);
var G__39016 = (0);
seq__38963_38996 = G__39013;
chunk__38964_38997 = G__39014;
count__38965_38998 = G__39015;
i__38966_38999 = G__39016;
continue;
}
} else {
}
}
break;
}

var G__39017 = cljs.core.next.call(null,seq__38955__$1);
var G__39018 = null;
var G__39019 = (0);
var G__39020 = (0);
seq__38955 = G__39017;
chunk__38956 = G__39018;
count__38957 = G__39019;
i__38958 = G__39020;
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
var seq__39025_39029 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__39026_39030 = null;
var count__39027_39031 = (0);
var i__39028_39032 = (0);
while(true){
if((i__39028_39032 < count__39027_39031)){
var ns_39033 = cljs.core._nth.call(null,chunk__39026_39030,i__39028_39032);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39033);

var G__39034 = seq__39025_39029;
var G__39035 = chunk__39026_39030;
var G__39036 = count__39027_39031;
var G__39037 = (i__39028_39032 + (1));
seq__39025_39029 = G__39034;
chunk__39026_39030 = G__39035;
count__39027_39031 = G__39036;
i__39028_39032 = G__39037;
continue;
} else {
var temp__4425__auto___39038 = cljs.core.seq.call(null,seq__39025_39029);
if(temp__4425__auto___39038){
var seq__39025_39039__$1 = temp__4425__auto___39038;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39025_39039__$1)){
var c__17147__auto___39040 = cljs.core.chunk_first.call(null,seq__39025_39039__$1);
var G__39041 = cljs.core.chunk_rest.call(null,seq__39025_39039__$1);
var G__39042 = c__17147__auto___39040;
var G__39043 = cljs.core.count.call(null,c__17147__auto___39040);
var G__39044 = (0);
seq__39025_39029 = G__39041;
chunk__39026_39030 = G__39042;
count__39027_39031 = G__39043;
i__39028_39032 = G__39044;
continue;
} else {
var ns_39045 = cljs.core.first.call(null,seq__39025_39039__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39045);

var G__39046 = cljs.core.next.call(null,seq__39025_39039__$1);
var G__39047 = null;
var G__39048 = (0);
var G__39049 = (0);
seq__39025_39029 = G__39046;
chunk__39026_39030 = G__39047;
count__39027_39031 = G__39048;
i__39028_39032 = G__39049;
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
var G__39050__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__39050 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39051__i = 0, G__39051__a = new Array(arguments.length -  0);
while (G__39051__i < G__39051__a.length) {G__39051__a[G__39051__i] = arguments[G__39051__i + 0]; ++G__39051__i;}
  args = new cljs.core.IndexedSeq(G__39051__a,0);
} 
return G__39050__delegate.call(this,args);};
G__39050.cljs$lang$maxFixedArity = 0;
G__39050.cljs$lang$applyTo = (function (arglist__39052){
var args = cljs.core.seq(arglist__39052);
return G__39050__delegate(args);
});
G__39050.cljs$core$IFn$_invoke$arity$variadic = G__39050__delegate;
return G__39050;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__39054 = cljs.core._EQ_;
var expr__39055 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__39054.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__39055))){
var path_parts = ((function (pred__39054,expr__39055){
return (function (p1__39053_SHARP_){
return clojure.string.split.call(null,p1__39053_SHARP_,/[\/\\]/);
});})(pred__39054,expr__39055))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__39054,expr__39055){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(clojure.string.join.call(null,"/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","..",request_url], null)));
}catch (e39057){if((e39057 instanceof Error)){
var e = e39057;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39057;

}
}})());
});
;})(path_parts,sep,root,pred__39054,expr__39055))
} else {
if(cljs.core.truth_(pred__39054.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__39055))){
return ((function (pred__39054,expr__39055){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__39054,expr__39055){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__39054,expr__39055))
);

return deferred.addErrback(((function (deferred,pred__39054,expr__39055){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__39054,expr__39055))
);
});
;})(pred__39054,expr__39055))
} else {
return ((function (pred__39054,expr__39055){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__39054,expr__39055))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__39058,callback){
var map__39061 = p__39058;
var map__39061__$1 = ((((!((map__39061 == null)))?((((map__39061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39061):map__39061);
var file_msg = map__39061__$1;
var request_url = cljs.core.get.call(null,map__39061__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__39061,map__39061__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__39061,map__39061__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__20184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20184__auto__){
return (function (){
var f__20185__auto__ = (function (){var switch__20119__auto__ = ((function (c__20184__auto__){
return (function (state_39085){
var state_val_39086 = (state_39085[(1)]);
if((state_val_39086 === (7))){
var inst_39081 = (state_39085[(2)]);
var state_39085__$1 = state_39085;
var statearr_39087_39107 = state_39085__$1;
(statearr_39087_39107[(2)] = inst_39081);

(statearr_39087_39107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39086 === (1))){
var state_39085__$1 = state_39085;
var statearr_39088_39108 = state_39085__$1;
(statearr_39088_39108[(2)] = null);

(statearr_39088_39108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39086 === (4))){
var inst_39065 = (state_39085[(7)]);
var inst_39065__$1 = (state_39085[(2)]);
var state_39085__$1 = (function (){var statearr_39089 = state_39085;
(statearr_39089[(7)] = inst_39065__$1);

return statearr_39089;
})();
if(cljs.core.truth_(inst_39065__$1)){
var statearr_39090_39109 = state_39085__$1;
(statearr_39090_39109[(1)] = (5));

} else {
var statearr_39091_39110 = state_39085__$1;
(statearr_39091_39110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39086 === (6))){
var state_39085__$1 = state_39085;
var statearr_39092_39111 = state_39085__$1;
(statearr_39092_39111[(2)] = null);

(statearr_39092_39111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39086 === (3))){
var inst_39083 = (state_39085[(2)]);
var state_39085__$1 = state_39085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39085__$1,inst_39083);
} else {
if((state_val_39086 === (2))){
var state_39085__$1 = state_39085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39085__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_39086 === (11))){
var inst_39077 = (state_39085[(2)]);
var state_39085__$1 = (function (){var statearr_39093 = state_39085;
(statearr_39093[(8)] = inst_39077);

return statearr_39093;
})();
var statearr_39094_39112 = state_39085__$1;
(statearr_39094_39112[(2)] = null);

(statearr_39094_39112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39086 === (9))){
var inst_39071 = (state_39085[(9)]);
var inst_39069 = (state_39085[(10)]);
var inst_39073 = inst_39071.call(null,inst_39069);
var state_39085__$1 = state_39085;
var statearr_39095_39113 = state_39085__$1;
(statearr_39095_39113[(2)] = inst_39073);

(statearr_39095_39113[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39086 === (5))){
var inst_39065 = (state_39085[(7)]);
var inst_39067 = figwheel.client.file_reloading.blocking_load.call(null,inst_39065);
var state_39085__$1 = state_39085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39085__$1,(8),inst_39067);
} else {
if((state_val_39086 === (10))){
var inst_39069 = (state_39085[(10)]);
var inst_39075 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_39069);
var state_39085__$1 = state_39085;
var statearr_39096_39114 = state_39085__$1;
(statearr_39096_39114[(2)] = inst_39075);

(statearr_39096_39114[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39086 === (8))){
var inst_39071 = (state_39085[(9)]);
var inst_39065 = (state_39085[(7)]);
var inst_39069 = (state_39085[(2)]);
var inst_39070 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_39071__$1 = cljs.core.get.call(null,inst_39070,inst_39065);
var state_39085__$1 = (function (){var statearr_39097 = state_39085;
(statearr_39097[(9)] = inst_39071__$1);

(statearr_39097[(10)] = inst_39069);

return statearr_39097;
})();
if(cljs.core.truth_(inst_39071__$1)){
var statearr_39098_39115 = state_39085__$1;
(statearr_39098_39115[(1)] = (9));

} else {
var statearr_39099_39116 = state_39085__$1;
(statearr_39099_39116[(1)] = (10));

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
});})(c__20184__auto__))
;
return ((function (switch__20119__auto__,c__20184__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20120__auto__ = null;
var figwheel$client$file_reloading$state_machine__20120__auto____0 = (function (){
var statearr_39103 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39103[(0)] = figwheel$client$file_reloading$state_machine__20120__auto__);

(statearr_39103[(1)] = (1));

return statearr_39103;
});
var figwheel$client$file_reloading$state_machine__20120__auto____1 = (function (state_39085){
while(true){
var ret_value__20121__auto__ = (function (){try{while(true){
var result__20122__auto__ = switch__20119__auto__.call(null,state_39085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20122__auto__;
}
break;
}
}catch (e39104){if((e39104 instanceof Object)){
var ex__20123__auto__ = e39104;
var statearr_39105_39117 = state_39085;
(statearr_39105_39117[(5)] = ex__20123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39118 = state_39085;
state_39085 = G__39118;
continue;
} else {
return ret_value__20121__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20120__auto__ = function(state_39085){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20120__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20120__auto____1.call(this,state_39085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20120__auto____0;
figwheel$client$file_reloading$state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20120__auto____1;
return figwheel$client$file_reloading$state_machine__20120__auto__;
})()
;})(switch__20119__auto__,c__20184__auto__))
})();
var state__20186__auto__ = (function (){var statearr_39106 = f__20185__auto__.call(null);
(statearr_39106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20184__auto__);

return statearr_39106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20186__auto__);
});})(c__20184__auto__))
);

return c__20184__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__39119,callback){
var map__39122 = p__39119;
var map__39122__$1 = ((((!((map__39122 == null)))?((((map__39122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39122):map__39122);
var file_msg = map__39122__$1;
var namespace = cljs.core.get.call(null,map__39122__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__39122,map__39122__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__39122,map__39122__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__39124){
var map__39127 = p__39124;
var map__39127__$1 = ((((!((map__39127 == null)))?((((map__39127.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39127.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39127):map__39127);
var file_msg = map__39127__$1;
var namespace = cljs.core.get.call(null,map__39127__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__39129,callback){
var map__39132 = p__39129;
var map__39132__$1 = ((((!((map__39132 == null)))?((((map__39132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39132):map__39132);
var file_msg = map__39132__$1;
var request_url = cljs.core.get.call(null,map__39132__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__39132__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__20184__auto___39220 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20184__auto___39220,out){
return (function (){
var f__20185__auto__ = (function (){var switch__20119__auto__ = ((function (c__20184__auto___39220,out){
return (function (state_39202){
var state_val_39203 = (state_39202[(1)]);
if((state_val_39203 === (1))){
var inst_39180 = cljs.core.nth.call(null,files,(0),null);
var inst_39181 = cljs.core.nthnext.call(null,files,(1));
var inst_39182 = files;
var state_39202__$1 = (function (){var statearr_39204 = state_39202;
(statearr_39204[(7)] = inst_39180);

(statearr_39204[(8)] = inst_39182);

(statearr_39204[(9)] = inst_39181);

return statearr_39204;
})();
var statearr_39205_39221 = state_39202__$1;
(statearr_39205_39221[(2)] = null);

(statearr_39205_39221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39203 === (2))){
var inst_39185 = (state_39202[(10)]);
var inst_39182 = (state_39202[(8)]);
var inst_39185__$1 = cljs.core.nth.call(null,inst_39182,(0),null);
var inst_39186 = cljs.core.nthnext.call(null,inst_39182,(1));
var inst_39187 = (inst_39185__$1 == null);
var inst_39188 = cljs.core.not.call(null,inst_39187);
var state_39202__$1 = (function (){var statearr_39206 = state_39202;
(statearr_39206[(10)] = inst_39185__$1);

(statearr_39206[(11)] = inst_39186);

return statearr_39206;
})();
if(inst_39188){
var statearr_39207_39222 = state_39202__$1;
(statearr_39207_39222[(1)] = (4));

} else {
var statearr_39208_39223 = state_39202__$1;
(statearr_39208_39223[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39203 === (3))){
var inst_39200 = (state_39202[(2)]);
var state_39202__$1 = state_39202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39202__$1,inst_39200);
} else {
if((state_val_39203 === (4))){
var inst_39185 = (state_39202[(10)]);
var inst_39190 = figwheel.client.file_reloading.reload_js_file.call(null,inst_39185);
var state_39202__$1 = state_39202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39202__$1,(7),inst_39190);
} else {
if((state_val_39203 === (5))){
var inst_39196 = cljs.core.async.close_BANG_.call(null,out);
var state_39202__$1 = state_39202;
var statearr_39209_39224 = state_39202__$1;
(statearr_39209_39224[(2)] = inst_39196);

(statearr_39209_39224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39203 === (6))){
var inst_39198 = (state_39202[(2)]);
var state_39202__$1 = state_39202;
var statearr_39210_39225 = state_39202__$1;
(statearr_39210_39225[(2)] = inst_39198);

(statearr_39210_39225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39203 === (7))){
var inst_39186 = (state_39202[(11)]);
var inst_39192 = (state_39202[(2)]);
var inst_39193 = cljs.core.async.put_BANG_.call(null,out,inst_39192);
var inst_39182 = inst_39186;
var state_39202__$1 = (function (){var statearr_39211 = state_39202;
(statearr_39211[(12)] = inst_39193);

(statearr_39211[(8)] = inst_39182);

return statearr_39211;
})();
var statearr_39212_39226 = state_39202__$1;
(statearr_39212_39226[(2)] = null);

(statearr_39212_39226[(1)] = (2));


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
});})(c__20184__auto___39220,out))
;
return ((function (switch__20119__auto__,c__20184__auto___39220,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20120__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20120__auto____0 = (function (){
var statearr_39216 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39216[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20120__auto__);

(statearr_39216[(1)] = (1));

return statearr_39216;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20120__auto____1 = (function (state_39202){
while(true){
var ret_value__20121__auto__ = (function (){try{while(true){
var result__20122__auto__ = switch__20119__auto__.call(null,state_39202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20122__auto__;
}
break;
}
}catch (e39217){if((e39217 instanceof Object)){
var ex__20123__auto__ = e39217;
var statearr_39218_39227 = state_39202;
(statearr_39218_39227[(5)] = ex__20123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39228 = state_39202;
state_39202 = G__39228;
continue;
} else {
return ret_value__20121__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20120__auto__ = function(state_39202){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20120__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20120__auto____1.call(this,state_39202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20120__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20120__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20120__auto__;
})()
;})(switch__20119__auto__,c__20184__auto___39220,out))
})();
var state__20186__auto__ = (function (){var statearr_39219 = f__20185__auto__.call(null);
(statearr_39219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20184__auto___39220);

return statearr_39219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20186__auto__);
});})(c__20184__auto___39220,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__39229,opts){
var map__39233 = p__39229;
var map__39233__$1 = ((((!((map__39233 == null)))?((((map__39233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39233):map__39233);
var eval_body__$1 = cljs.core.get.call(null,map__39233__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__39233__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e39235){var e = e39235;
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
return (function (p1__39236_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39236_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__39241){
var vec__39242 = p__39241;
var k = cljs.core.nth.call(null,vec__39242,(0),null);
var v = cljs.core.nth.call(null,vec__39242,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__39243){
var vec__39244 = p__39243;
var k = cljs.core.nth.call(null,vec__39244,(0),null);
var v = cljs.core.nth.call(null,vec__39244,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__39248,p__39249){
var map__39496 = p__39248;
var map__39496__$1 = ((((!((map__39496 == null)))?((((map__39496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39496):map__39496);
var opts = map__39496__$1;
var before_jsload = cljs.core.get.call(null,map__39496__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__39496__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__39496__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__39497 = p__39249;
var map__39497__$1 = ((((!((map__39497 == null)))?((((map__39497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39497):map__39497);
var msg = map__39497__$1;
var files = cljs.core.get.call(null,map__39497__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__39497__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__39497__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20184__auto__,map__39496,map__39496__$1,opts,before_jsload,on_jsload,reload_dependents,map__39497,map__39497__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20185__auto__ = (function (){var switch__20119__auto__ = ((function (c__20184__auto__,map__39496,map__39496__$1,opts,before_jsload,on_jsload,reload_dependents,map__39497,map__39497__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_39650){
var state_val_39651 = (state_39650[(1)]);
if((state_val_39651 === (7))){
var inst_39514 = (state_39650[(7)]);
var inst_39512 = (state_39650[(8)]);
var inst_39513 = (state_39650[(9)]);
var inst_39511 = (state_39650[(10)]);
var inst_39519 = cljs.core._nth.call(null,inst_39512,inst_39514);
var inst_39520 = figwheel.client.file_reloading.eval_body.call(null,inst_39519,opts);
var inst_39521 = (inst_39514 + (1));
var tmp39652 = inst_39512;
var tmp39653 = inst_39513;
var tmp39654 = inst_39511;
var inst_39511__$1 = tmp39654;
var inst_39512__$1 = tmp39652;
var inst_39513__$1 = tmp39653;
var inst_39514__$1 = inst_39521;
var state_39650__$1 = (function (){var statearr_39655 = state_39650;
(statearr_39655[(11)] = inst_39520);

(statearr_39655[(7)] = inst_39514__$1);

(statearr_39655[(8)] = inst_39512__$1);

(statearr_39655[(9)] = inst_39513__$1);

(statearr_39655[(10)] = inst_39511__$1);

return statearr_39655;
})();
var statearr_39656_39742 = state_39650__$1;
(statearr_39656_39742[(2)] = null);

(statearr_39656_39742[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (20))){
var inst_39554 = (state_39650[(12)]);
var inst_39562 = figwheel.client.file_reloading.sort_files.call(null,inst_39554);
var state_39650__$1 = state_39650;
var statearr_39657_39743 = state_39650__$1;
(statearr_39657_39743[(2)] = inst_39562);

(statearr_39657_39743[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (27))){
var state_39650__$1 = state_39650;
var statearr_39658_39744 = state_39650__$1;
(statearr_39658_39744[(2)] = null);

(statearr_39658_39744[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (1))){
var inst_39503 = (state_39650[(13)]);
var inst_39500 = before_jsload.call(null,files);
var inst_39501 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_39502 = (function (){return ((function (inst_39503,inst_39500,inst_39501,state_val_39651,c__20184__auto__,map__39496,map__39496__$1,opts,before_jsload,on_jsload,reload_dependents,map__39497,map__39497__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39245_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39245_SHARP_);
});
;})(inst_39503,inst_39500,inst_39501,state_val_39651,c__20184__auto__,map__39496,map__39496__$1,opts,before_jsload,on_jsload,reload_dependents,map__39497,map__39497__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39503__$1 = cljs.core.filter.call(null,inst_39502,files);
var inst_39504 = cljs.core.not_empty.call(null,inst_39503__$1);
var state_39650__$1 = (function (){var statearr_39659 = state_39650;
(statearr_39659[(14)] = inst_39501);

(statearr_39659[(13)] = inst_39503__$1);

(statearr_39659[(15)] = inst_39500);

return statearr_39659;
})();
if(cljs.core.truth_(inst_39504)){
var statearr_39660_39745 = state_39650__$1;
(statearr_39660_39745[(1)] = (2));

} else {
var statearr_39661_39746 = state_39650__$1;
(statearr_39661_39746[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (24))){
var state_39650__$1 = state_39650;
var statearr_39662_39747 = state_39650__$1;
(statearr_39662_39747[(2)] = null);

(statearr_39662_39747[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (39))){
var inst_39604 = (state_39650[(16)]);
var state_39650__$1 = state_39650;
var statearr_39663_39748 = state_39650__$1;
(statearr_39663_39748[(2)] = inst_39604);

(statearr_39663_39748[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (46))){
var inst_39645 = (state_39650[(2)]);
var state_39650__$1 = state_39650;
var statearr_39664_39749 = state_39650__$1;
(statearr_39664_39749[(2)] = inst_39645);

(statearr_39664_39749[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (4))){
var inst_39548 = (state_39650[(2)]);
var inst_39549 = cljs.core.List.EMPTY;
var inst_39550 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_39549);
var inst_39551 = (function (){return ((function (inst_39548,inst_39549,inst_39550,state_val_39651,c__20184__auto__,map__39496,map__39496__$1,opts,before_jsload,on_jsload,reload_dependents,map__39497,map__39497__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39246_SHARP_){
var and__16332__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39246_SHARP_);
if(cljs.core.truth_(and__16332__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39246_SHARP_));
} else {
return and__16332__auto__;
}
});
;})(inst_39548,inst_39549,inst_39550,state_val_39651,c__20184__auto__,map__39496,map__39496__$1,opts,before_jsload,on_jsload,reload_dependents,map__39497,map__39497__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39552 = cljs.core.filter.call(null,inst_39551,files);
var inst_39553 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_39554 = cljs.core.concat.call(null,inst_39552,inst_39553);
var state_39650__$1 = (function (){var statearr_39665 = state_39650;
(statearr_39665[(17)] = inst_39550);

(statearr_39665[(18)] = inst_39548);

(statearr_39665[(12)] = inst_39554);

return statearr_39665;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_39666_39750 = state_39650__$1;
(statearr_39666_39750[(1)] = (16));

} else {
var statearr_39667_39751 = state_39650__$1;
(statearr_39667_39751[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (15))){
var inst_39538 = (state_39650[(2)]);
var state_39650__$1 = state_39650;
var statearr_39668_39752 = state_39650__$1;
(statearr_39668_39752[(2)] = inst_39538);

(statearr_39668_39752[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (21))){
var inst_39564 = (state_39650[(19)]);
var inst_39564__$1 = (state_39650[(2)]);
var inst_39565 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_39564__$1);
var state_39650__$1 = (function (){var statearr_39669 = state_39650;
(statearr_39669[(19)] = inst_39564__$1);

return statearr_39669;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39650__$1,(22),inst_39565);
} else {
if((state_val_39651 === (31))){
var inst_39648 = (state_39650[(2)]);
var state_39650__$1 = state_39650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39650__$1,inst_39648);
} else {
if((state_val_39651 === (32))){
var inst_39604 = (state_39650[(16)]);
var inst_39609 = inst_39604.cljs$lang$protocol_mask$partition0$;
var inst_39610 = (inst_39609 & (64));
var inst_39611 = inst_39604.cljs$core$ISeq$;
var inst_39612 = (inst_39610) || (inst_39611);
var state_39650__$1 = state_39650;
if(cljs.core.truth_(inst_39612)){
var statearr_39670_39753 = state_39650__$1;
(statearr_39670_39753[(1)] = (35));

} else {
var statearr_39671_39754 = state_39650__$1;
(statearr_39671_39754[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (40))){
var inst_39625 = (state_39650[(20)]);
var inst_39624 = (state_39650[(2)]);
var inst_39625__$1 = cljs.core.get.call(null,inst_39624,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_39626 = cljs.core.get.call(null,inst_39624,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_39627 = cljs.core.not_empty.call(null,inst_39625__$1);
var state_39650__$1 = (function (){var statearr_39672 = state_39650;
(statearr_39672[(20)] = inst_39625__$1);

(statearr_39672[(21)] = inst_39626);

return statearr_39672;
})();
if(cljs.core.truth_(inst_39627)){
var statearr_39673_39755 = state_39650__$1;
(statearr_39673_39755[(1)] = (41));

} else {
var statearr_39674_39756 = state_39650__$1;
(statearr_39674_39756[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (33))){
var state_39650__$1 = state_39650;
var statearr_39675_39757 = state_39650__$1;
(statearr_39675_39757[(2)] = false);

(statearr_39675_39757[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (13))){
var inst_39524 = (state_39650[(22)]);
var inst_39528 = cljs.core.chunk_first.call(null,inst_39524);
var inst_39529 = cljs.core.chunk_rest.call(null,inst_39524);
var inst_39530 = cljs.core.count.call(null,inst_39528);
var inst_39511 = inst_39529;
var inst_39512 = inst_39528;
var inst_39513 = inst_39530;
var inst_39514 = (0);
var state_39650__$1 = (function (){var statearr_39676 = state_39650;
(statearr_39676[(7)] = inst_39514);

(statearr_39676[(8)] = inst_39512);

(statearr_39676[(9)] = inst_39513);

(statearr_39676[(10)] = inst_39511);

return statearr_39676;
})();
var statearr_39677_39758 = state_39650__$1;
(statearr_39677_39758[(2)] = null);

(statearr_39677_39758[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (22))){
var inst_39567 = (state_39650[(23)]);
var inst_39572 = (state_39650[(24)]);
var inst_39568 = (state_39650[(25)]);
var inst_39564 = (state_39650[(19)]);
var inst_39567__$1 = (state_39650[(2)]);
var inst_39568__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39567__$1);
var inst_39569 = (function (){var all_files = inst_39564;
var res_SINGLEQUOTE_ = inst_39567__$1;
var res = inst_39568__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_39567,inst_39572,inst_39568,inst_39564,inst_39567__$1,inst_39568__$1,state_val_39651,c__20184__auto__,map__39496,map__39496__$1,opts,before_jsload,on_jsload,reload_dependents,map__39497,map__39497__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39247_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__39247_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_39567,inst_39572,inst_39568,inst_39564,inst_39567__$1,inst_39568__$1,state_val_39651,c__20184__auto__,map__39496,map__39496__$1,opts,before_jsload,on_jsload,reload_dependents,map__39497,map__39497__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39570 = cljs.core.filter.call(null,inst_39569,inst_39567__$1);
var inst_39571 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_39572__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39571);
var inst_39573 = cljs.core.not_empty.call(null,inst_39572__$1);
var state_39650__$1 = (function (){var statearr_39678 = state_39650;
(statearr_39678[(23)] = inst_39567__$1);

(statearr_39678[(24)] = inst_39572__$1);

(statearr_39678[(26)] = inst_39570);

(statearr_39678[(25)] = inst_39568__$1);

return statearr_39678;
})();
if(cljs.core.truth_(inst_39573)){
var statearr_39679_39759 = state_39650__$1;
(statearr_39679_39759[(1)] = (23));

} else {
var statearr_39680_39760 = state_39650__$1;
(statearr_39680_39760[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (36))){
var state_39650__$1 = state_39650;
var statearr_39681_39761 = state_39650__$1;
(statearr_39681_39761[(2)] = false);

(statearr_39681_39761[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (41))){
var inst_39625 = (state_39650[(20)]);
var inst_39629 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_39630 = cljs.core.map.call(null,inst_39629,inst_39625);
var inst_39631 = cljs.core.pr_str.call(null,inst_39630);
var inst_39632 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_39631)].join('');
var inst_39633 = figwheel.client.utils.log.call(null,inst_39632);
var state_39650__$1 = state_39650;
var statearr_39682_39762 = state_39650__$1;
(statearr_39682_39762[(2)] = inst_39633);

(statearr_39682_39762[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (43))){
var inst_39626 = (state_39650[(21)]);
var inst_39636 = (state_39650[(2)]);
var inst_39637 = cljs.core.not_empty.call(null,inst_39626);
var state_39650__$1 = (function (){var statearr_39683 = state_39650;
(statearr_39683[(27)] = inst_39636);

return statearr_39683;
})();
if(cljs.core.truth_(inst_39637)){
var statearr_39684_39763 = state_39650__$1;
(statearr_39684_39763[(1)] = (44));

} else {
var statearr_39685_39764 = state_39650__$1;
(statearr_39685_39764[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (29))){
var inst_39567 = (state_39650[(23)]);
var inst_39572 = (state_39650[(24)]);
var inst_39604 = (state_39650[(16)]);
var inst_39570 = (state_39650[(26)]);
var inst_39568 = (state_39650[(25)]);
var inst_39564 = (state_39650[(19)]);
var inst_39600 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_39603 = (function (){var all_files = inst_39564;
var res_SINGLEQUOTE_ = inst_39567;
var res = inst_39568;
var files_not_loaded = inst_39570;
var dependencies_that_loaded = inst_39572;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39567,inst_39572,inst_39604,inst_39570,inst_39568,inst_39564,inst_39600,state_val_39651,c__20184__auto__,map__39496,map__39496__$1,opts,before_jsload,on_jsload,reload_dependents,map__39497,map__39497__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39602){
var map__39686 = p__39602;
var map__39686__$1 = ((((!((map__39686 == null)))?((((map__39686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39686):map__39686);
var namespace = cljs.core.get.call(null,map__39686__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39567,inst_39572,inst_39604,inst_39570,inst_39568,inst_39564,inst_39600,state_val_39651,c__20184__auto__,map__39496,map__39496__$1,opts,before_jsload,on_jsload,reload_dependents,map__39497,map__39497__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39604__$1 = cljs.core.group_by.call(null,inst_39603,inst_39570);
var inst_39606 = (inst_39604__$1 == null);
var inst_39607 = cljs.core.not.call(null,inst_39606);
var state_39650__$1 = (function (){var statearr_39688 = state_39650;
(statearr_39688[(28)] = inst_39600);

(statearr_39688[(16)] = inst_39604__$1);

return statearr_39688;
})();
if(inst_39607){
var statearr_39689_39765 = state_39650__$1;
(statearr_39689_39765[(1)] = (32));

} else {
var statearr_39690_39766 = state_39650__$1;
(statearr_39690_39766[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (44))){
var inst_39626 = (state_39650[(21)]);
var inst_39639 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39626);
var inst_39640 = cljs.core.pr_str.call(null,inst_39639);
var inst_39641 = [cljs.core.str("not required: "),cljs.core.str(inst_39640)].join('');
var inst_39642 = figwheel.client.utils.log.call(null,inst_39641);
var state_39650__$1 = state_39650;
var statearr_39691_39767 = state_39650__$1;
(statearr_39691_39767[(2)] = inst_39642);

(statearr_39691_39767[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (6))){
var inst_39545 = (state_39650[(2)]);
var state_39650__$1 = state_39650;
var statearr_39692_39768 = state_39650__$1;
(statearr_39692_39768[(2)] = inst_39545);

(statearr_39692_39768[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (28))){
var inst_39570 = (state_39650[(26)]);
var inst_39597 = (state_39650[(2)]);
var inst_39598 = cljs.core.not_empty.call(null,inst_39570);
var state_39650__$1 = (function (){var statearr_39693 = state_39650;
(statearr_39693[(29)] = inst_39597);

return statearr_39693;
})();
if(cljs.core.truth_(inst_39598)){
var statearr_39694_39769 = state_39650__$1;
(statearr_39694_39769[(1)] = (29));

} else {
var statearr_39695_39770 = state_39650__$1;
(statearr_39695_39770[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (25))){
var inst_39568 = (state_39650[(25)]);
var inst_39584 = (state_39650[(2)]);
var inst_39585 = cljs.core.not_empty.call(null,inst_39568);
var state_39650__$1 = (function (){var statearr_39696 = state_39650;
(statearr_39696[(30)] = inst_39584);

return statearr_39696;
})();
if(cljs.core.truth_(inst_39585)){
var statearr_39697_39771 = state_39650__$1;
(statearr_39697_39771[(1)] = (26));

} else {
var statearr_39698_39772 = state_39650__$1;
(statearr_39698_39772[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (34))){
var inst_39619 = (state_39650[(2)]);
var state_39650__$1 = state_39650;
if(cljs.core.truth_(inst_39619)){
var statearr_39699_39773 = state_39650__$1;
(statearr_39699_39773[(1)] = (38));

} else {
var statearr_39700_39774 = state_39650__$1;
(statearr_39700_39774[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (17))){
var state_39650__$1 = state_39650;
var statearr_39701_39775 = state_39650__$1;
(statearr_39701_39775[(2)] = recompile_dependents);

(statearr_39701_39775[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (3))){
var state_39650__$1 = state_39650;
var statearr_39702_39776 = state_39650__$1;
(statearr_39702_39776[(2)] = null);

(statearr_39702_39776[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (12))){
var inst_39541 = (state_39650[(2)]);
var state_39650__$1 = state_39650;
var statearr_39703_39777 = state_39650__$1;
(statearr_39703_39777[(2)] = inst_39541);

(statearr_39703_39777[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (2))){
var inst_39503 = (state_39650[(13)]);
var inst_39510 = cljs.core.seq.call(null,inst_39503);
var inst_39511 = inst_39510;
var inst_39512 = null;
var inst_39513 = (0);
var inst_39514 = (0);
var state_39650__$1 = (function (){var statearr_39704 = state_39650;
(statearr_39704[(7)] = inst_39514);

(statearr_39704[(8)] = inst_39512);

(statearr_39704[(9)] = inst_39513);

(statearr_39704[(10)] = inst_39511);

return statearr_39704;
})();
var statearr_39705_39778 = state_39650__$1;
(statearr_39705_39778[(2)] = null);

(statearr_39705_39778[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (23))){
var inst_39567 = (state_39650[(23)]);
var inst_39572 = (state_39650[(24)]);
var inst_39570 = (state_39650[(26)]);
var inst_39568 = (state_39650[(25)]);
var inst_39564 = (state_39650[(19)]);
var inst_39575 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_39577 = (function (){var all_files = inst_39564;
var res_SINGLEQUOTE_ = inst_39567;
var res = inst_39568;
var files_not_loaded = inst_39570;
var dependencies_that_loaded = inst_39572;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39567,inst_39572,inst_39570,inst_39568,inst_39564,inst_39575,state_val_39651,c__20184__auto__,map__39496,map__39496__$1,opts,before_jsload,on_jsload,reload_dependents,map__39497,map__39497__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39576){
var map__39706 = p__39576;
var map__39706__$1 = ((((!((map__39706 == null)))?((((map__39706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39706):map__39706);
var request_url = cljs.core.get.call(null,map__39706__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39567,inst_39572,inst_39570,inst_39568,inst_39564,inst_39575,state_val_39651,c__20184__auto__,map__39496,map__39496__$1,opts,before_jsload,on_jsload,reload_dependents,map__39497,map__39497__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39578 = cljs.core.reverse.call(null,inst_39572);
var inst_39579 = cljs.core.map.call(null,inst_39577,inst_39578);
var inst_39580 = cljs.core.pr_str.call(null,inst_39579);
var inst_39581 = figwheel.client.utils.log.call(null,inst_39580);
var state_39650__$1 = (function (){var statearr_39708 = state_39650;
(statearr_39708[(31)] = inst_39575);

return statearr_39708;
})();
var statearr_39709_39779 = state_39650__$1;
(statearr_39709_39779[(2)] = inst_39581);

(statearr_39709_39779[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (35))){
var state_39650__$1 = state_39650;
var statearr_39710_39780 = state_39650__$1;
(statearr_39710_39780[(2)] = true);

(statearr_39710_39780[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (19))){
var inst_39554 = (state_39650[(12)]);
var inst_39560 = figwheel.client.file_reloading.expand_files.call(null,inst_39554);
var state_39650__$1 = state_39650;
var statearr_39711_39781 = state_39650__$1;
(statearr_39711_39781[(2)] = inst_39560);

(statearr_39711_39781[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (11))){
var state_39650__$1 = state_39650;
var statearr_39712_39782 = state_39650__$1;
(statearr_39712_39782[(2)] = null);

(statearr_39712_39782[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (9))){
var inst_39543 = (state_39650[(2)]);
var state_39650__$1 = state_39650;
var statearr_39713_39783 = state_39650__$1;
(statearr_39713_39783[(2)] = inst_39543);

(statearr_39713_39783[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (5))){
var inst_39514 = (state_39650[(7)]);
var inst_39513 = (state_39650[(9)]);
var inst_39516 = (inst_39514 < inst_39513);
var inst_39517 = inst_39516;
var state_39650__$1 = state_39650;
if(cljs.core.truth_(inst_39517)){
var statearr_39714_39784 = state_39650__$1;
(statearr_39714_39784[(1)] = (7));

} else {
var statearr_39715_39785 = state_39650__$1;
(statearr_39715_39785[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (14))){
var inst_39524 = (state_39650[(22)]);
var inst_39533 = cljs.core.first.call(null,inst_39524);
var inst_39534 = figwheel.client.file_reloading.eval_body.call(null,inst_39533,opts);
var inst_39535 = cljs.core.next.call(null,inst_39524);
var inst_39511 = inst_39535;
var inst_39512 = null;
var inst_39513 = (0);
var inst_39514 = (0);
var state_39650__$1 = (function (){var statearr_39716 = state_39650;
(statearr_39716[(32)] = inst_39534);

(statearr_39716[(7)] = inst_39514);

(statearr_39716[(8)] = inst_39512);

(statearr_39716[(9)] = inst_39513);

(statearr_39716[(10)] = inst_39511);

return statearr_39716;
})();
var statearr_39717_39786 = state_39650__$1;
(statearr_39717_39786[(2)] = null);

(statearr_39717_39786[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (45))){
var state_39650__$1 = state_39650;
var statearr_39718_39787 = state_39650__$1;
(statearr_39718_39787[(2)] = null);

(statearr_39718_39787[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (26))){
var inst_39567 = (state_39650[(23)]);
var inst_39572 = (state_39650[(24)]);
var inst_39570 = (state_39650[(26)]);
var inst_39568 = (state_39650[(25)]);
var inst_39564 = (state_39650[(19)]);
var inst_39587 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_39589 = (function (){var all_files = inst_39564;
var res_SINGLEQUOTE_ = inst_39567;
var res = inst_39568;
var files_not_loaded = inst_39570;
var dependencies_that_loaded = inst_39572;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39567,inst_39572,inst_39570,inst_39568,inst_39564,inst_39587,state_val_39651,c__20184__auto__,map__39496,map__39496__$1,opts,before_jsload,on_jsload,reload_dependents,map__39497,map__39497__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39588){
var map__39719 = p__39588;
var map__39719__$1 = ((((!((map__39719 == null)))?((((map__39719.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39719.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39719):map__39719);
var namespace = cljs.core.get.call(null,map__39719__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__39719__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39567,inst_39572,inst_39570,inst_39568,inst_39564,inst_39587,state_val_39651,c__20184__auto__,map__39496,map__39496__$1,opts,before_jsload,on_jsload,reload_dependents,map__39497,map__39497__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39590 = cljs.core.map.call(null,inst_39589,inst_39568);
var inst_39591 = cljs.core.pr_str.call(null,inst_39590);
var inst_39592 = figwheel.client.utils.log.call(null,inst_39591);
var inst_39593 = (function (){var all_files = inst_39564;
var res_SINGLEQUOTE_ = inst_39567;
var res = inst_39568;
var files_not_loaded = inst_39570;
var dependencies_that_loaded = inst_39572;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39567,inst_39572,inst_39570,inst_39568,inst_39564,inst_39587,inst_39589,inst_39590,inst_39591,inst_39592,state_val_39651,c__20184__auto__,map__39496,map__39496__$1,opts,before_jsload,on_jsload,reload_dependents,map__39497,map__39497__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39567,inst_39572,inst_39570,inst_39568,inst_39564,inst_39587,inst_39589,inst_39590,inst_39591,inst_39592,state_val_39651,c__20184__auto__,map__39496,map__39496__$1,opts,before_jsload,on_jsload,reload_dependents,map__39497,map__39497__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39594 = setTimeout(inst_39593,(10));
var state_39650__$1 = (function (){var statearr_39721 = state_39650;
(statearr_39721[(33)] = inst_39592);

(statearr_39721[(34)] = inst_39587);

return statearr_39721;
})();
var statearr_39722_39788 = state_39650__$1;
(statearr_39722_39788[(2)] = inst_39594);

(statearr_39722_39788[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (16))){
var state_39650__$1 = state_39650;
var statearr_39723_39789 = state_39650__$1;
(statearr_39723_39789[(2)] = reload_dependents);

(statearr_39723_39789[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (38))){
var inst_39604 = (state_39650[(16)]);
var inst_39621 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39604);
var state_39650__$1 = state_39650;
var statearr_39724_39790 = state_39650__$1;
(statearr_39724_39790[(2)] = inst_39621);

(statearr_39724_39790[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (30))){
var state_39650__$1 = state_39650;
var statearr_39725_39791 = state_39650__$1;
(statearr_39725_39791[(2)] = null);

(statearr_39725_39791[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (10))){
var inst_39524 = (state_39650[(22)]);
var inst_39526 = cljs.core.chunked_seq_QMARK_.call(null,inst_39524);
var state_39650__$1 = state_39650;
if(inst_39526){
var statearr_39726_39792 = state_39650__$1;
(statearr_39726_39792[(1)] = (13));

} else {
var statearr_39727_39793 = state_39650__$1;
(statearr_39727_39793[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (18))){
var inst_39558 = (state_39650[(2)]);
var state_39650__$1 = state_39650;
if(cljs.core.truth_(inst_39558)){
var statearr_39728_39794 = state_39650__$1;
(statearr_39728_39794[(1)] = (19));

} else {
var statearr_39729_39795 = state_39650__$1;
(statearr_39729_39795[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (42))){
var state_39650__$1 = state_39650;
var statearr_39730_39796 = state_39650__$1;
(statearr_39730_39796[(2)] = null);

(statearr_39730_39796[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (37))){
var inst_39616 = (state_39650[(2)]);
var state_39650__$1 = state_39650;
var statearr_39731_39797 = state_39650__$1;
(statearr_39731_39797[(2)] = inst_39616);

(statearr_39731_39797[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39651 === (8))){
var inst_39524 = (state_39650[(22)]);
var inst_39511 = (state_39650[(10)]);
var inst_39524__$1 = cljs.core.seq.call(null,inst_39511);
var state_39650__$1 = (function (){var statearr_39732 = state_39650;
(statearr_39732[(22)] = inst_39524__$1);

return statearr_39732;
})();
if(inst_39524__$1){
var statearr_39733_39798 = state_39650__$1;
(statearr_39733_39798[(1)] = (10));

} else {
var statearr_39734_39799 = state_39650__$1;
(statearr_39734_39799[(1)] = (11));

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
});})(c__20184__auto__,map__39496,map__39496__$1,opts,before_jsload,on_jsload,reload_dependents,map__39497,map__39497__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20119__auto__,c__20184__auto__,map__39496,map__39496__$1,opts,before_jsload,on_jsload,reload_dependents,map__39497,map__39497__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20120__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20120__auto____0 = (function (){
var statearr_39738 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39738[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20120__auto__);

(statearr_39738[(1)] = (1));

return statearr_39738;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20120__auto____1 = (function (state_39650){
while(true){
var ret_value__20121__auto__ = (function (){try{while(true){
var result__20122__auto__ = switch__20119__auto__.call(null,state_39650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20122__auto__;
}
break;
}
}catch (e39739){if((e39739 instanceof Object)){
var ex__20123__auto__ = e39739;
var statearr_39740_39800 = state_39650;
(statearr_39740_39800[(5)] = ex__20123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39801 = state_39650;
state_39650 = G__39801;
continue;
} else {
return ret_value__20121__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20120__auto__ = function(state_39650){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20120__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20120__auto____1.call(this,state_39650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20120__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20120__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20120__auto__;
})()
;})(switch__20119__auto__,c__20184__auto__,map__39496,map__39496__$1,opts,before_jsload,on_jsload,reload_dependents,map__39497,map__39497__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20186__auto__ = (function (){var statearr_39741 = f__20185__auto__.call(null);
(statearr_39741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20184__auto__);

return statearr_39741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20186__auto__);
});})(c__20184__auto__,map__39496,map__39496__$1,opts,before_jsload,on_jsload,reload_dependents,map__39497,map__39497__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20184__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__39804,link){
var map__39807 = p__39804;
var map__39807__$1 = ((((!((map__39807 == null)))?((((map__39807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39807):map__39807);
var file = cljs.core.get.call(null,map__39807__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__39807,map__39807__$1,file){
return (function (p1__39802_SHARP_,p2__39803_SHARP_){
if(cljs.core._EQ_.call(null,p1__39802_SHARP_,p2__39803_SHARP_)){
return p1__39802_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__39807,map__39807__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__39813){
var map__39814 = p__39813;
var map__39814__$1 = ((((!((map__39814 == null)))?((((map__39814.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39814.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39814):map__39814);
var match_length = cljs.core.get.call(null,map__39814__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__39814__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__39809_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__39809_SHARP_);
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
var args39816 = [];
var len__17402__auto___39819 = arguments.length;
var i__17403__auto___39820 = (0);
while(true){
if((i__17403__auto___39820 < len__17402__auto___39819)){
args39816.push((arguments[i__17403__auto___39820]));

var G__39821 = (i__17403__auto___39820 + (1));
i__17403__auto___39820 = G__39821;
continue;
} else {
}
break;
}

var G__39818 = args39816.length;
switch (G__39818) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39816.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__39823_SHARP_,p2__39824_SHARP_){
return cljs.core.assoc.call(null,p1__39823_SHARP_,cljs.core.get.call(null,p2__39824_SHARP_,key),p2__39824_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__39825){
var map__39828 = p__39825;
var map__39828__$1 = ((((!((map__39828 == null)))?((((map__39828.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39828.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39828):map__39828);
var f_data = map__39828__$1;
var file = cljs.core.get.call(null,map__39828__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__39830,files_msg){
var map__39837 = p__39830;
var map__39837__$1 = ((((!((map__39837 == null)))?((((map__39837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39837):map__39837);
var opts = map__39837__$1;
var on_cssload = cljs.core.get.call(null,map__39837__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__39839_39843 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__39840_39844 = null;
var count__39841_39845 = (0);
var i__39842_39846 = (0);
while(true){
if((i__39842_39846 < count__39841_39845)){
var f_39847 = cljs.core._nth.call(null,chunk__39840_39844,i__39842_39846);
figwheel.client.file_reloading.reload_css_file.call(null,f_39847);

var G__39848 = seq__39839_39843;
var G__39849 = chunk__39840_39844;
var G__39850 = count__39841_39845;
var G__39851 = (i__39842_39846 + (1));
seq__39839_39843 = G__39848;
chunk__39840_39844 = G__39849;
count__39841_39845 = G__39850;
i__39842_39846 = G__39851;
continue;
} else {
var temp__4425__auto___39852 = cljs.core.seq.call(null,seq__39839_39843);
if(temp__4425__auto___39852){
var seq__39839_39853__$1 = temp__4425__auto___39852;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39839_39853__$1)){
var c__17147__auto___39854 = cljs.core.chunk_first.call(null,seq__39839_39853__$1);
var G__39855 = cljs.core.chunk_rest.call(null,seq__39839_39853__$1);
var G__39856 = c__17147__auto___39854;
var G__39857 = cljs.core.count.call(null,c__17147__auto___39854);
var G__39858 = (0);
seq__39839_39843 = G__39855;
chunk__39840_39844 = G__39856;
count__39841_39845 = G__39857;
i__39842_39846 = G__39858;
continue;
} else {
var f_39859 = cljs.core.first.call(null,seq__39839_39853__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_39859);

var G__39860 = cljs.core.next.call(null,seq__39839_39853__$1);
var G__39861 = null;
var G__39862 = (0);
var G__39863 = (0);
seq__39839_39843 = G__39860;
chunk__39840_39844 = G__39861;
count__39841_39845 = G__39862;
i__39842_39846 = G__39863;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__39837,map__39837__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__39837,map__39837__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1446794918006