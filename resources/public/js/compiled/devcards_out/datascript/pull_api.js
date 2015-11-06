// Compiled by ClojureScript 1.7.145 {}
goog.provide('datascript.pull_api');
goog.require('cljs.core');
goog.require('datascript.db');
goog.require('datascript.pull_parser');
datascript.pull_api.into_BANG_ = (function datascript$pull_api$into_BANG_(transient_coll,items){
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,transient_coll,items);
});
datascript.pull_api._PLUS_default_limit_PLUS_ = (1000);
datascript.pull_api.initial_frame = (function datascript$pull_api$initial_frame(pattern,eids,multi_QMARK_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"multi?","multi?",-749311069),new cljs.core.Keyword(null,"eids","eids",1546550700),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"recursion","recursion",-749738765),new cljs.core.Keyword(null,"specs","specs",1426570741),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),new cljs.core.Keyword(null,"kvps","kvps",65308317),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"results","results",-1134170113)],[multi_QMARK_,eids,new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"depth","depth",1768663640),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY], null),cljs.core.seq.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(pattern)),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101).cljs$core$IFn$_invoke$arity$1(pattern),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),pattern,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY)]);
});
datascript.pull_api.subpattern_frame = (function datascript$pull_api$subpattern_frame(pattern,eids,multi_QMARK_,attr){
return cljs.core.assoc.call(null,datascript.pull_api.initial_frame.call(null,pattern,eids,multi_QMARK_),new cljs.core.Keyword(null,"attr","attr",-604132353),attr);
});
datascript.pull_api.reset_frame = (function datascript$pull_api$reset_frame(frame,eids,kvps){
var pattern = new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(frame);
return cljs.core.assoc.call(null,frame,new cljs.core.Keyword(null,"eids","eids",1546550700),eids,new cljs.core.Keyword(null,"specs","specs",1426570741),cljs.core.seq.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(pattern)),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101).cljs$core$IFn$_invoke$arity$1(pattern),new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__40090 = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(frame);
var G__40090__$1 = ((cljs.core.seq.call(null,kvps))?cljs.core.conj_BANG_.call(null,G__40090,kvps):G__40090);
return G__40090__$1;
})());
});
datascript.pull_api.push_recursion = (function datascript$pull_api$push_recursion(rec,attr,eid){
var map__40093 = rec;
var map__40093__$1 = ((((!((map__40093 == null)))?((((map__40093.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40093.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40093):map__40093);
var depth = cljs.core.get.call(null,map__40093__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var seen = cljs.core.get.call(null,map__40093__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return cljs.core.assoc.call(null,rec,new cljs.core.Keyword(null,"depth","depth",1768663640),cljs.core.update.call(null,depth,attr,cljs.core.fnil.call(null,cljs.core.inc,(0))),new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.conj.call(null,seen,eid));
});
datascript.pull_api.seen_eid_QMARK_ = (function datascript$pull_api$seen_eid_QMARK_(frame,eid){
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,frame,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recursion","recursion",-749738765),new cljs.core.Keyword(null,"seen","seen",-518999789)], null),cljs.core.PersistentHashSet.EMPTY),eid);
});
datascript.pull_api.pull_seen_eid = (function datascript$pull_api$pull_seen_eid(frame,frames,eid){
if(cljs.core.truth_(datascript.pull_api.seen_eid_QMARK_.call(null,frame,eid))){
return cljs.core.conj.call(null,frames,cljs.core.update.call(null,frame,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.conj_BANG_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid], null)));
} else {
return null;
}
});
datascript.pull_api.single_frame_result = (function datascript$pull_api$single_frame_result(key,frame){
var G__40096 = new cljs.core.Keyword(null,"kvps","kvps",65308317).cljs$core$IFn$_invoke$arity$1(frame);
var G__40096__$1 = (((G__40096 == null))?null:cljs.core.persistent_BANG_.call(null,G__40096));
var G__40096__$2 = (((G__40096__$1 == null))?null:cljs.core.get.call(null,G__40096__$1,key));
return G__40096__$2;
});
datascript.pull_api.recursion_result = cljs.core.partial.call(null,datascript.pull_api.single_frame_result,new cljs.core.Keyword("datascript.pull-api","recursion","datascript.pull-api/recursion",-1897884534));
datascript.pull_api.recursion_frame = (function datascript$pull_api$recursion_frame(parent,eid){
var attr = new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(parent);
var rec = datascript.pull_api.push_recursion.call(null,new cljs.core.Keyword(null,"recursion","recursion",-749738765).cljs$core$IFn$_invoke$arity$1(parent),attr,eid);
return cljs.core.assoc.call(null,datascript.pull_api.subpattern_frame.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null),false,new cljs.core.Keyword("datascript.pull-api","recursion","datascript.pull-api/recursion",-1897884534)),new cljs.core.Keyword(null,"recursion","recursion",-749738765),rec);
});
datascript.pull_api.pull_recursion_frame = (function datascript$pull_api$pull_recursion_frame(db,p__40097){
var vec__40100 = p__40097;
var frame = cljs.core.nth.call(null,vec__40100,(0),null);
var frames = cljs.core.nthnext.call(null,vec__40100,(1));
var temp__4423__auto__ = cljs.core.seq.call(null,new cljs.core.Keyword(null,"eids","eids",1546550700).cljs$core$IFn$_invoke$arity$1(frame));
if(temp__4423__auto__){
var eids = temp__4423__auto__;
var frame__$1 = datascript.pull_api.reset_frame.call(null,frame,cljs.core.rest.call(null,eids),datascript.pull_api.recursion_result.call(null,frame));
var eid = cljs.core.first.call(null,eids);
var or__16344__auto__ = datascript.pull_api.pull_seen_eid.call(null,frame__$1,frames,eid);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return cljs.core.conj.call(null,frames,frame__$1,datascript.pull_api.recursion_frame.call(null,frame__$1,eid));
}
} else {
var kvps = datascript.pull_api.recursion_result.call(null,frame);
var results = (function (){var G__40101 = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(frame);
var G__40101__$1 = ((cljs.core.seq.call(null,kvps))?cljs.core.conj_BANG_.call(null,G__40101,kvps):G__40101);
return G__40101__$1;
})();
return cljs.core.conj.call(null,frames,cljs.core.assoc.call(null,frame,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"done","done",-889844188),new cljs.core.Keyword(null,"results","results",-1134170113),results));
}
});
datascript.pull_api.recurse_attr = (function datascript$pull_api$recurse_attr(db,attr,multi_QMARK_,eids,eid,parent,frames){
var map__40104 = parent;
var map__40104__$1 = ((((!((map__40104 == null)))?((((map__40104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40104):map__40104);
var recursion = cljs.core.get.call(null,map__40104__$1,new cljs.core.Keyword(null,"recursion","recursion",-749738765));
var pattern = cljs.core.get.call(null,map__40104__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
var depth = cljs.core.get.call(null,cljs.core.get.call(null,recursion,new cljs.core.Keyword(null,"depth","depth",1768663640)),attr,(0));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"recursion","recursion",-749738765).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(pattern),attr)),depth)){
return cljs.core.conj.call(null,frames,parent);
} else {
return datascript.pull_api.pull_recursion_frame.call(null,db,cljs.core.conj.call(null,frames,parent,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"recursion","recursion",-749738765),new cljs.core.Keyword(null,"pattern","pattern",242135423),pattern,new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"multi?","multi?",-749311069),multi_QMARK_,new cljs.core.Keyword(null,"eids","eids",1546550700),eids,new cljs.core.Keyword(null,"recursion","recursion",-749738765),recursion,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY)], null)));
}
});
var pattern_40106 = (new datascript.pull_parser.PullSpec(true,cljs.core.PersistentArrayMap.EMPTY,null,null,null));
datascript.pull_api.expand_frame = ((function (pattern_40106){
return (function datascript$pull_api$expand_frame(parent,eid,attr_key,multi_QMARK_,eids){
var rec = datascript.pull_api.push_recursion.call(null,new cljs.core.Keyword(null,"recursion","recursion",-749738765).cljs$core$IFn$_invoke$arity$1(parent),attr_key,eid);
return cljs.core.assoc.call(null,datascript.pull_api.subpattern_frame.call(null,pattern_40106,eids,multi_QMARK_,attr_key),new cljs.core.Keyword(null,"recursion","recursion",-749738765),rec);
});})(pattern_40106))
;
datascript.pull_api.pull_attr_datoms = (function datascript$pull_api$pull_attr_datoms(db,attr_key,attr,eid,forward_QMARK_,datoms,opts,p__40108){
var vec__40114 = p__40108;
var parent = cljs.core.nth.call(null,vec__40114,(0),null);
var frames = cljs.core.nthnext.call(null,vec__40114,(1));
var limit = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"limit","limit",-1355822363),datascript.pull_api._PLUS_default_limit_PLUS_);
var found = cljs.core.not_empty.call(null,(function (){var G__40115 = datoms;
var G__40115__$1 = (cljs.core.truth_(limit)?cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,limit),G__40115):G__40115);
return G__40115__$1;
})());
if(cljs.core.truth_(found)){
var ref_QMARK_ = datascript.db.ref_QMARK_.call(null,db,attr);
var component_QMARK_ = (ref_QMARK_) && (datascript.db.component_QMARK_.call(null,db,attr));
var multi_QMARK_ = (cljs.core.truth_(forward_QMARK_)?datascript.db.multival_QMARK_.call(null,db,attr):!(component_QMARK_));
var datom_val = (cljs.core.truth_(forward_QMARK_)?((function (ref_QMARK_,component_QMARK_,multi_QMARK_,limit,found,vec__40114,parent,frames){
return (function (d){
return d.v;
});})(ref_QMARK_,component_QMARK_,multi_QMARK_,limit,found,vec__40114,parent,frames))
:((function (ref_QMARK_,component_QMARK_,multi_QMARK_,limit,found,vec__40114,parent,frames){
return (function (d){
return d.e;
});})(ref_QMARK_,component_QMARK_,multi_QMARK_,limit,found,vec__40114,parent,frames))
);
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"subpattern","subpattern",45002743))){
return cljs.core.conj.call(null,frames,parent,datascript.pull_api.subpattern_frame.call(null,new cljs.core.Keyword(null,"subpattern","subpattern",45002743).cljs$core$IFn$_invoke$arity$1(opts),cljs.core.mapv.call(null,datom_val,found),multi_QMARK_,attr_key));
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"recursion","recursion",-749738765))){
return datascript.pull_api.recurse_attr.call(null,db,attr_key,multi_QMARK_,cljs.core.mapv.call(null,datom_val,found),eid,parent,frames);
} else {
if(cljs.core.truth_((function (){var and__16332__auto__ = component_QMARK_;
if(and__16332__auto__){
return forward_QMARK_;
} else {
return and__16332__auto__;
}
})())){
return cljs.core.conj.call(null,frames,parent,datascript.pull_api.expand_frame.call(null,parent,eid,attr_key,multi_QMARK_,cljs.core.mapv.call(null,datom_val,found)));
} else {
var as_value = (function (){var G__40116 = datom_val;
var G__40116__$1 = ((ref_QMARK_)?cljs.core.comp.call(null,((function (G__40116,ref_QMARK_,component_QMARK_,multi_QMARK_,datom_val,limit,found,vec__40114,parent,frames){
return (function (p1__40107_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("db","id","db/id",-1388397098)],[p1__40107_SHARP_]);
});})(G__40116,ref_QMARK_,component_QMARK_,multi_QMARK_,datom_val,limit,found,vec__40114,parent,frames))
,G__40116):G__40116);
return G__40116__$1;
})();
var single_QMARK_ = !(multi_QMARK_);
return cljs.core.conj.call(null,frames,cljs.core.update.call(null,parent,new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.assoc_BANG_,attr_key,(function (){var G__40117 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,as_value),found);
var G__40117__$1 = ((single_QMARK_)?cljs.core.first.call(null,G__40117):G__40117);
return G__40117__$1;
})()));

}
}
}
} else {
return cljs.core.conj.call(null,frames,(function (){var G__40118 = parent;
var G__40118__$1 = ((cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))?cljs.core.update.call(null,G__40118,new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.assoc_BANG_,attr_key,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts)):G__40118);
return G__40118__$1;
})());
}
});
datascript.pull_api.pull_attr = (function datascript$pull_api$pull_attr(db,spec,eid,frames){
var vec__40120 = spec;
var attr_key = cljs.core.nth.call(null,vec__40120,(0),null);
var opts = cljs.core.nth.call(null,vec__40120,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098),attr_key)){
if(cljs.core.truth_(cljs.core.not_empty.call(null,datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null))))){
return cljs.core.conj.call(null,cljs.core.rest.call(null,frames),cljs.core.update.call(null,cljs.core.first.call(null,frames),new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.assoc_BANG_,new cljs.core.Keyword("db","id","db/id",-1388397098),eid));
} else {
return frames;
}
} else {
var attr = new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(opts);
var forward_QMARK_ = cljs.core._EQ_.call(null,attr_key,attr);
var results = ((forward_QMARK_)?datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid,attr], null)):datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,eid], null)));
return datascript.pull_api.pull_attr_datoms.call(null,db,attr_key,attr,eid,forward_QMARK_,results,opts,frames);
}
});
datascript.pull_api.filter_reverse_attrs = cljs.core.filter.call(null,(function (p__40121){
var vec__40122 = p__40121;
var k = cljs.core.nth.call(null,vec__40122,(0),null);
var v = cljs.core.nth.call(null,vec__40122,(1),null);
return cljs.core.not_EQ_.call(null,k,new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(v));
}));
datascript.pull_api.expand_reverse_subpattern_frame = (function datascript$pull_api$expand_reverse_subpattern_frame(parent,eid,rattrs){
return datascript.pull_api.subpattern_frame.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),rattrs,new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null),false,new cljs.core.Keyword("datascript.pull-api","expand-rev","datascript.pull-api/expand-rev",2143627459));
});
datascript.pull_api.expand_result = (function datascript$pull_api$expand_result(frames,kvps){
return cljs.core.conj.call(null,cljs.core.rest.call(null,frames),cljs.core.update.call(null,cljs.core.first.call(null,frames),new cljs.core.Keyword(null,"kvps","kvps",65308317),datascript.pull_api.into_BANG_,cljs.core.persistent_BANG_.call(null,kvps)));
});
datascript.pull_api.pull_expand_reverse_frame = (function datascript$pull_api$pull_expand_reverse_frame(db,p__40123){
var vec__40125 = p__40123;
var frame = cljs.core.nth.call(null,vec__40125,(0),null);
var frames = cljs.core.nthnext.call(null,vec__40125,(1));
return datascript.pull_api.expand_result.call(null,frames,datascript.pull_api.into_BANG_.call(null,new cljs.core.Keyword(null,"expand-kvps","expand-kvps",44141154).cljs$core$IFn$_invoke$arity$1(frame),(function (){var or__16344__auto__ = datascript.pull_api.single_frame_result.call(null,new cljs.core.Keyword("datascript.pull-api","expand-rev","datascript.pull-api/expand-rev",2143627459),frame);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
});
datascript.pull_api.pull_expand_frame = (function datascript$pull_api$pull_expand_frame(db,p__40126){
var vec__40129 = p__40126;
var frame = cljs.core.nth.call(null,vec__40129,(0),null);
var frames = cljs.core.nthnext.call(null,vec__40129,(1));
var temp__4423__auto__ = cljs.core.seq.call(null,new cljs.core.Keyword(null,"datoms","datoms",-290874434).cljs$core$IFn$_invoke$arity$1(frame));
if(temp__4423__auto__){
var datoms_by_attr = temp__4423__auto__;
var vec__40130 = cljs.core.first.call(null,datoms_by_attr);
var attr = cljs.core.nth.call(null,vec__40130,(0),null);
var datoms = cljs.core.nth.call(null,vec__40130,(1),null);
var opts = cljs.core.get.call(null,cljs.core.get_in.call(null,frame,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attrs","attrs",-2090668713)], null)),attr,cljs.core.PersistentArrayMap.EMPTY);
return datascript.pull_api.pull_attr_datoms.call(null,db,attr,attr,new cljs.core.Keyword(null,"eid","eid",559519930).cljs$core$IFn$_invoke$arity$1(frame),true,datoms,opts,cljs.core.conj.call(null,frames,cljs.core.update.call(null,frame,new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.rest)));
} else {
var temp__4423__auto____$1 = cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,datascript.pull_api.filter_reverse_attrs,cljs.core.get_in.call(null,frame,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attrs","attrs",-2090668713)], null))));
if(cljs.core.truth_(temp__4423__auto____$1)){
var rattrs = temp__4423__auto____$1;
var frame__$1 = cljs.core.assoc.call(null,frame,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"expand-rev","expand-rev",1249112650),new cljs.core.Keyword(null,"expand-kvps","expand-kvps",44141154),new cljs.core.Keyword(null,"kvps","kvps",65308317).cljs$core$IFn$_invoke$arity$1(frame),new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
return cljs.core.conj.call(null,frames,frame__$1,datascript.pull_api.expand_reverse_subpattern_frame.call(null,frame__$1,new cljs.core.Keyword(null,"eid","eid",559519930).cljs$core$IFn$_invoke$arity$1(frame__$1),rattrs));
} else {
return datascript.pull_api.expand_result.call(null,frames,new cljs.core.Keyword(null,"kvps","kvps",65308317).cljs$core$IFn$_invoke$arity$1(frame));
}
}
});
datascript.pull_api.pull_wildcard_expand = (function datascript$pull_api$pull_wildcard_expand(db,frame,frames,eid,pattern){
var datoms = cljs.core.group_by.call(null,(function (d){
return d.a;
}),datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null)));
var map__40134 = frame;
var map__40134__$1 = ((((!((map__40134 == null)))?((((map__40134.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40134.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40134):map__40134);
var attr = cljs.core.get.call(null,map__40134__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var recursion = cljs.core.get.call(null,map__40134__$1,new cljs.core.Keyword(null,"recursion","recursion",-749738765));
var rec = (function (){var G__40136 = recursion;
var G__40136__$1 = ((cljs.core.some_QMARK_.call(null,attr))?datascript.pull_api.push_recursion.call(null,G__40136,attr,eid):G__40136);
return G__40136__$1;
})();
return datascript.pull_api.pull_expand_frame.call(null,db,cljs.core.conj.call(null,frames,frame,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"expand","expand",595248157),new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.transient$.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid], null)),new cljs.core.Keyword(null,"eid","eid",559519930),eid,new cljs.core.Keyword(null,"pattern","pattern",242135423),pattern,new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.seq.call(null,datoms),new cljs.core.Keyword(null,"recursion","recursion",-749738765),rec], null)));
});
datascript.pull_api.pull_wildcard = (function datascript$pull_api$pull_wildcard(db,frame,frames){
var map__40139 = frame;
var map__40139__$1 = ((((!((map__40139 == null)))?((((map__40139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40139):map__40139);
var eid = cljs.core.get.call(null,map__40139__$1,new cljs.core.Keyword(null,"eid","eid",559519930));
var pattern = cljs.core.get.call(null,map__40139__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
var or__16344__auto__ = datascript.pull_api.pull_seen_eid.call(null,frame,frames,eid);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return datascript.pull_api.pull_wildcard_expand.call(null,db,frame,frames,eid,pattern);
}
});
datascript.pull_api.pull_pattern_frame = (function datascript$pull_api$pull_pattern_frame(db,p__40141){
while(true){
var vec__40143 = p__40141;
var frame = cljs.core.nth.call(null,vec__40143,(0),null);
var frames = cljs.core.nthnext.call(null,vec__40143,(1));
var temp__4423__auto__ = cljs.core.seq.call(null,new cljs.core.Keyword(null,"eids","eids",1546550700).cljs$core$IFn$_invoke$arity$1(frame));
if(temp__4423__auto__){
var eids = temp__4423__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101).cljs$core$IFn$_invoke$arity$1(frame))){
return datascript.pull_api.pull_wildcard.call(null,db,cljs.core.assoc.call(null,frame,new cljs.core.Keyword(null,"specs","specs",1426570741),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"eid","eid",559519930),cljs.core.first.call(null,eids),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),false),frames);
} else {
var temp__4423__auto____$1 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"specs","specs",1426570741).cljs$core$IFn$_invoke$arity$1(frame));
if(temp__4423__auto____$1){
var specs = temp__4423__auto____$1;
var spec = cljs.core.first.call(null,specs);
var pattern = new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(frame);
var new_frames = cljs.core.conj.call(null,frames,cljs.core.assoc.call(null,frame,new cljs.core.Keyword(null,"specs","specs",1426570741),cljs.core.rest.call(null,specs)));
return datascript.pull_api.pull_attr.call(null,db,spec,cljs.core.first.call(null,eids),new_frames);
} else {
var G__40144 = db;
var G__40145 = cljs.core.conj.call(null,frames,datascript.pull_api.reset_frame.call(null,frame,cljs.core.rest.call(null,eids),cljs.core.not_empty.call(null,cljs.core.persistent_BANG_.call(null,new cljs.core.Keyword(null,"kvps","kvps",65308317).cljs$core$IFn$_invoke$arity$1(frame)))));
db = G__40144;
p__40141 = G__40145;
continue;
}
}
} else {
return cljs.core.conj.call(null,frames,cljs.core.assoc.call(null,frame,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"done","done",-889844188)));
}
break;
}
});
datascript.pull_api.pull_pattern = (function datascript$pull_api$pull_pattern(db,frames){
while(true){
var G__40150 = (((new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,frames)) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,frames)).fqn:null);
switch (G__40150) {
case "expand":
var G__40155 = db;
var G__40156 = datascript.pull_api.pull_expand_frame.call(null,db,frames);
db = G__40155;
frames = G__40156;
continue;

break;
case "expand-rev":
var G__40157 = db;
var G__40158 = datascript.pull_api.pull_expand_reverse_frame.call(null,db,frames);
db = G__40157;
frames = G__40158;
continue;

break;
case "pattern":
var G__40159 = db;
var G__40160 = datascript.pull_api.pull_pattern_frame.call(null,db,frames);
db = G__40159;
frames = G__40160;
continue;

break;
case "recursion":
var G__40161 = db;
var G__40162 = datascript.pull_api.pull_recursion_frame.call(null,db,frames);
db = G__40161;
frames = G__40162;
continue;

break;
case "done":
var vec__40151 = frames;
var f = cljs.core.nth.call(null,vec__40151,(0),null);
var remaining = cljs.core.nthnext.call(null,vec__40151,(1));
var result = (function (){var G__40152 = cljs.core.persistent_BANG_.call(null,new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(f));
var G__40152__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"multi?","multi?",-749311069).cljs$core$IFn$_invoke$arity$1(f)))?cljs.core.first.call(null,G__40152):G__40152);
return G__40152__$1;
})();
if(cljs.core.seq.call(null,remaining)){
var G__40163 = db;
var G__40164 = cljs.core.conj.call(null,cljs.core.rest.call(null,remaining),(function (){var G__40153 = cljs.core.first.call(null,remaining);
var G__40153__$1 = (cljs.core.truth_(result)?cljs.core.update.call(null,G__40153,new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.assoc_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(f),result):G__40153);
return G__40153__$1;
})());
db = G__40163;
frames = G__40164;
continue;
} else {
return result;
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,frames)))].join('')));

}
break;
}
});
datascript.pull_api.pull_spec = (function datascript$pull_api$pull_spec(db,pattern,eids,multi_QMARK_){
var eids__$1 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__40165_SHARP_){
return datascript.db.entid_strict.call(null,db,p1__40165_SHARP_);
})),eids);
return datascript.pull_api.pull_pattern.call(null,db,cljs.core._conj.call(null,cljs.core.List.EMPTY,datascript.pull_api.initial_frame.call(null,pattern,eids__$1,multi_QMARK_)));
});
datascript.pull_api.pull = (function datascript$pull_api$pull(db,selector,eid){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.pull_api.pull_spec.call(null,db,datascript.pull_parser.parse_pull.call(null,selector),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null),false);
});
datascript.pull_api.pull_many = (function datascript$pull_api$pull_many(db,selector,eids){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.pull_api.pull_spec.call(null,db,datascript.pull_parser.parse_pull.call(null,selector),eids,true);
});

//# sourceMappingURL=pull_api.js.map?rel=1446794918822