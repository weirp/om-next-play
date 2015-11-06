// Compiled by ClojureScript 1.7.145 {}
goog.provide('datascript.core');
goog.require('cljs.core');
goog.require('datascript.query');
goog.require('datascript.btset');
goog.require('datascript.db');
goog.require('datascript.pull_api');
goog.require('datascript.impl.entity');
datascript.core.q = datascript.query.q;
datascript.core.entity = datascript.impl.entity.entity;
datascript.core.entity_db = (function datascript$core$entity_db(entity){
if(cljs.core.truth_(datascript.impl.entity.entity_QMARK_.call(null,entity))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("de","entity?","de/entity?",555337042,null),new cljs.core.Symbol(null,"entity","entity",1189561251,null))))].join('')));
}

return entity.db;
});
datascript.core.datom = datascript.db.datom;
datascript.core.pull = datascript.pull_api.pull;
datascript.core.pull_many = datascript.pull_api.pull_many;
datascript.core.touch = datascript.impl.entity.touch;
datascript.core.empty_db = datascript.db.empty_db;
datascript.core.init_db = datascript.db.init_db;
datascript.core.datom_QMARK_ = datascript.db.datom_QMARK_;
datascript.core.db_QMARK_ = datascript.db.db_QMARK_;
datascript.core.tx0 = datascript.db.tx0;
datascript.core.is_filtered = (function datascript$core$is_filtered(x){
return (x instanceof datascript.db.FilteredDB);
});
datascript.core.filter = (function datascript$core$filter(db,pred){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

if(cljs.core.truth_(datascript.core.is_filtered.call(null,db))){
var fdb = db;
var u = fdb.unfiltered_db;
return (new datascript.db.FilteredDB(u,((function (fdb,u){
return (function (p1__39866_SHARP_){
var and__16332__auto__ = pred.call(null,u,p1__39866_SHARP_);
if(cljs.core.truth_(and__16332__auto__)){
return fdb.pred.call(null,p1__39866_SHARP_);
} else {
return and__16332__auto__;
}
});})(fdb,u))
,null,null,null));
} else {
return (new datascript.db.FilteredDB(db,(function (p1__39867_SHARP_){
return pred.call(null,db,p1__39867_SHARP_);
}),null,null,null));
}
});
datascript.core.with$ = (function datascript$core$with(var_args){
var args39868 = [];
var len__17402__auto___39871 = arguments.length;
var i__17403__auto___39872 = (0);
while(true){
if((i__17403__auto___39872 < len__17402__auto___39871)){
args39868.push((arguments[i__17403__auto___39872]));

var G__39873 = (i__17403__auto___39872 + (1));
i__17403__auto___39872 = G__39873;
continue;
} else {
}
break;
}

var G__39870 = args39868.length;
switch (G__39870) {
case 2:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39868.length)].join('')));

}
});

datascript.core.with$.cljs$core$IFn$_invoke$arity$2 = (function (db,tx_data){
return datascript.core.with$.call(null,db,tx_data,null);
});

datascript.core.with$.cljs$core$IFn$_invoke$arity$3 = (function (db,tx_data,tx_meta){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

if(cljs.core.truth_(datascript.core.is_filtered.call(null,db))){
throw cljs.core.ex_info.call(null,"Filtered DB cannot be modified",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transaction","filtered","transaction/filtered",1699706605)], null));
} else {
return datascript.db.transact_tx_data.call(null,datascript.db.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),db,new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null)),tx_data);
}
});

datascript.core.with$.cljs$lang$maxFixedArity = 3;
datascript.core.db_with = (function datascript$core$db_with(db,tx_data){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(datascript.core.with$.call(null,db,tx_data));
});
datascript.core.datoms = (function datascript$core$datoms(var_args){
var args39875 = [];
var len__17402__auto___39878 = arguments.length;
var i__17403__auto___39879 = (0);
while(true){
if((i__17403__auto___39879 < len__17402__auto___39878)){
args39875.push((arguments[i__17403__auto___39879]));

var G__39880 = (i__17403__auto___39879 + (1));
i__17403__auto___39879 = G__39880;
continue;
} else {
}
break;
}

var G__39877 = args39875.length;
switch (G__39877) {
case 2:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39875.length)].join('')));

}
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.db._datoms.call(null,db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.core.datoms.cljs$lang$maxFixedArity = 6;
datascript.core.seek_datoms = (function datascript$core$seek_datoms(var_args){
var args39882 = [];
var len__17402__auto___39885 = arguments.length;
var i__17403__auto___39886 = (0);
while(true){
if((i__17403__auto___39886 < len__17402__auto___39885)){
args39882.push((arguments[i__17403__auto___39886]));

var G__39887 = (i__17403__auto___39886 + (1));
i__17403__auto___39886 = G__39887;
continue;
} else {
}
break;
}

var G__39884 = args39882.length;
switch (G__39884) {
case 2:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39882.length)].join('')));

}
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.db._seek_datoms.call(null,db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.core.seek_datoms.cljs$lang$maxFixedArity = 6;
datascript.core.index_range = (function datascript$core$index_range(db,attr,start,end){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.db._index_range.call(null,db,attr,start,end);
});
datascript.core.entid = datascript.db.entid;
datascript.core.conn_QMARK_ = (function datascript$core$conn_QMARK_(conn){
var and__16332__auto__ = ((!((conn == null)))?((((conn.cljs$lang$protocol_mask$partition0$ & (32768))) || (conn.cljs$core$IDeref$))?true:(((!conn.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,conn):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,conn));
if(and__16332__auto__){
return datascript.db.db_QMARK_.call(null,cljs.core.deref.call(null,conn));
} else {
return and__16332__auto__;
}
});
datascript.core.create_conn = (function datascript$core$create_conn(var_args){
var args39893 = [];
var len__17402__auto___39896 = arguments.length;
var i__17403__auto___39897 = (0);
while(true){
if((i__17403__auto___39897 < len__17402__auto___39896)){
args39893.push((arguments[i__17403__auto___39897]));

var G__39898 = (i__17403__auto___39897 + (1));
i__17403__auto___39897 = G__39898;
continue;
} else {
}
break;
}

var G__39895 = args39893.length;
switch (G__39895) {
case 0:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39893.length)].join('')));

}
});

datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.core.create_conn.call(null,datascript.db.default_schema);
});

datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return cljs.core.atom.call(null,datascript.core.empty_db.call(null,schema),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null));
});

datascript.core.create_conn.cljs$lang$maxFixedArity = 1;
datascript.core._transact_BANG_ = (function datascript$core$_transact_BANG_(conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"conn?","conn?",1807755802,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null))))].join('')));
}

var report = cljs.core.atom.call(null,null);
cljs.core.swap_BANG_.call(null,conn,((function (report){
return (function (db){
var r = datascript.core.with$.call(null,db,tx_data,tx_meta);
cljs.core.reset_BANG_.call(null,report,r);

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);

return cljs.core.deref.call(null,report);
});
datascript.core.transact_BANG_ = (function datascript$core$transact_BANG_(var_args){
var args39900 = [];
var len__17402__auto___39909 = arguments.length;
var i__17403__auto___39910 = (0);
while(true){
if((i__17403__auto___39910 < len__17402__auto___39909)){
args39900.push((arguments[i__17403__auto___39910]));

var G__39911 = (i__17403__auto___39910 + (1));
i__17403__auto___39910 = G__39911;
continue;
} else {
}
break;
}

var G__39902 = args39900.length;
switch (G__39902) {
case 2:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39900.length)].join('')));

}
});

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact_BANG_.call(null,conn,tx_data,null);
});

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"conn?","conn?",1807755802,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null))))].join('')));
}

var report = datascript.core._transact_BANG_.call(null,conn,tx_data,tx_meta);
var seq__39903_39913 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__39904_39914 = null;
var count__39905_39915 = (0);
var i__39906_39916 = (0);
while(true){
if((i__39906_39916 < count__39905_39915)){
var vec__39907_39917 = cljs.core._nth.call(null,chunk__39904_39914,i__39906_39916);
var __39918 = cljs.core.nth.call(null,vec__39907_39917,(0),null);
var callback_39919 = cljs.core.nth.call(null,vec__39907_39917,(1),null);
callback_39919.call(null,report);

var G__39920 = seq__39903_39913;
var G__39921 = chunk__39904_39914;
var G__39922 = count__39905_39915;
var G__39923 = (i__39906_39916 + (1));
seq__39903_39913 = G__39920;
chunk__39904_39914 = G__39921;
count__39905_39915 = G__39922;
i__39906_39916 = G__39923;
continue;
} else {
var temp__4425__auto___39924 = cljs.core.seq.call(null,seq__39903_39913);
if(temp__4425__auto___39924){
var seq__39903_39925__$1 = temp__4425__auto___39924;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39903_39925__$1)){
var c__17147__auto___39926 = cljs.core.chunk_first.call(null,seq__39903_39925__$1);
var G__39927 = cljs.core.chunk_rest.call(null,seq__39903_39925__$1);
var G__39928 = c__17147__auto___39926;
var G__39929 = cljs.core.count.call(null,c__17147__auto___39926);
var G__39930 = (0);
seq__39903_39913 = G__39927;
chunk__39904_39914 = G__39928;
count__39905_39915 = G__39929;
i__39906_39916 = G__39930;
continue;
} else {
var vec__39908_39931 = cljs.core.first.call(null,seq__39903_39925__$1);
var __39932 = cljs.core.nth.call(null,vec__39908_39931,(0),null);
var callback_39933 = cljs.core.nth.call(null,vec__39908_39931,(1),null);
callback_39933.call(null,report);

var G__39934 = cljs.core.next.call(null,seq__39903_39925__$1);
var G__39935 = null;
var G__39936 = (0);
var G__39937 = (0);
seq__39903_39913 = G__39934;
chunk__39904_39914 = G__39935;
count__39905_39915 = G__39936;
i__39906_39916 = G__39937;
continue;
}
} else {
}
}
break;
}

return report;
});

datascript.core.transact_BANG_.cljs$lang$maxFixedArity = 3;
datascript.core.listen_BANG_ = (function datascript$core$listen_BANG_(var_args){
var args39938 = [];
var len__17402__auto___39941 = arguments.length;
var i__17403__auto___39942 = (0);
while(true){
if((i__17403__auto___39942 < len__17402__auto___39941)){
args39938.push((arguments[i__17403__auto___39942]));

var G__39943 = (i__17403__auto___39942 + (1));
i__17403__auto___39942 = G__39943;
continue;
} else {
}
break;
}

var G__39940 = args39938.length;
switch (G__39940) {
case 2:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39938.length)].join('')));

}
});

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,callback){
return datascript.core.listen_BANG_.call(null,conn,cljs.core.rand.call(null),callback);
});

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,key,callback){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"conn?","conn?",1807755802,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null))))].join('')));
}

cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.assoc,key,callback);

return key;
});

datascript.core.listen_BANG_.cljs$lang$maxFixedArity = 3;
datascript.core.unlisten_BANG_ = (function datascript$core$unlisten_BANG_(conn,key){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"conn?","conn?",1807755802,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null))))].join('')));
}

return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.dissoc,key);
});
datascript.core.data_readers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("datascript","Datom","datascript/Datom",-901340080,null),datascript.db.datom_from_reader,new cljs.core.Symbol("datascript","DB","datascript/DB",-487332776,null),datascript.db.db_from_reader], null);
var seq__39945_39951 = cljs.core.seq.call(null,datascript.core.data_readers);
var chunk__39946_39952 = null;
var count__39947_39953 = (0);
var i__39948_39954 = (0);
while(true){
if((i__39948_39954 < count__39947_39953)){
var vec__39949_39955 = cljs.core._nth.call(null,chunk__39946_39952,i__39948_39954);
var tag_39956 = cljs.core.nth.call(null,vec__39949_39955,(0),null);
var cb_39957 = cljs.core.nth.call(null,vec__39949_39955,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_39956,cb_39957);

var G__39958 = seq__39945_39951;
var G__39959 = chunk__39946_39952;
var G__39960 = count__39947_39953;
var G__39961 = (i__39948_39954 + (1));
seq__39945_39951 = G__39958;
chunk__39946_39952 = G__39959;
count__39947_39953 = G__39960;
i__39948_39954 = G__39961;
continue;
} else {
var temp__4425__auto___39962 = cljs.core.seq.call(null,seq__39945_39951);
if(temp__4425__auto___39962){
var seq__39945_39963__$1 = temp__4425__auto___39962;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39945_39963__$1)){
var c__17147__auto___39964 = cljs.core.chunk_first.call(null,seq__39945_39963__$1);
var G__39965 = cljs.core.chunk_rest.call(null,seq__39945_39963__$1);
var G__39966 = c__17147__auto___39964;
var G__39967 = cljs.core.count.call(null,c__17147__auto___39964);
var G__39968 = (0);
seq__39945_39951 = G__39965;
chunk__39946_39952 = G__39966;
count__39947_39953 = G__39967;
i__39948_39954 = G__39968;
continue;
} else {
var vec__39950_39969 = cljs.core.first.call(null,seq__39945_39963__$1);
var tag_39970 = cljs.core.nth.call(null,vec__39950_39969,(0),null);
var cb_39971 = cljs.core.nth.call(null,vec__39950_39969,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_39970,cb_39971);

var G__39972 = cljs.core.next.call(null,seq__39945_39963__$1);
var G__39973 = null;
var G__39974 = (0);
var G__39975 = (0);
seq__39945_39951 = G__39972;
chunk__39946_39952 = G__39973;
count__39947_39953 = G__39974;
i__39948_39954 = G__39975;
continue;
}
} else {
}
}
break;
}
datascript.core.last_tempid = cljs.core.atom.call(null,(-1000000));
datascript.core.tempid = (function datascript$core$tempid(var_args){
var args39976 = [];
var len__17402__auto___39979 = arguments.length;
var i__17403__auto___39980 = (0);
while(true){
if((i__17403__auto___39980 < len__17402__auto___39979)){
args39976.push((arguments[i__17403__auto___39980]));

var G__39981 = (i__17403__auto___39980 + (1));
i__17403__auto___39980 = G__39981;
continue;
} else {
}
break;
}

var G__39978 = args39976.length;
switch (G__39978) {
case 1:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39976.length)].join('')));

}
});

datascript.core.tempid.cljs$core$IFn$_invoke$arity$1 = (function (part){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return cljs.core.swap_BANG_.call(null,datascript.core.last_tempid,cljs.core.dec);
}
});

datascript.core.tempid.cljs$core$IFn$_invoke$arity$2 = (function (part,x){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return x;
}
});

datascript.core.tempid.cljs$lang$maxFixedArity = 2;
datascript.core.resolve_tempid = (function datascript$core$resolve_tempid(_db,tempids,tempid){
return cljs.core.get.call(null,tempids,tempid);
});
datascript.core.db = (function datascript$core$db(conn){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"conn?","conn?",1807755802,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null))))].join('')));
}

return cljs.core.deref.call(null,conn);
});
datascript.core.transact = (function datascript$core$transact(var_args){
var args39983 = [];
var len__17402__auto___39989 = arguments.length;
var i__17403__auto___39990 = (0);
while(true){
if((i__17403__auto___39990 < len__17402__auto___39989)){
args39983.push((arguments[i__17403__auto___39990]));

var G__39991 = (i__17403__auto___39990 + (1));
i__17403__auto___39990 = G__39991;
continue;
} else {
}
break;
}

var G__39985 = args39983.length;
switch (G__39985) {
case 2:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39983.length)].join('')));

}
});

datascript.core.transact.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact.call(null,conn,tx_data,null);
});

datascript.core.transact.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"conn?","conn?",1807755802,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null))))].join('')));
}

var res = datascript.core.transact_BANG_.call(null,conn,tx_data,tx_meta);
if(typeof datascript.core.t_datascript$core39986 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core39986 = (function (conn,tx_data,tx_meta,res,meta39987){
this.conn = conn;
this.tx_data = tx_data;
this.tx_meta = tx_meta;
this.res = res;
this.meta39987 = meta39987;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core39986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res){
return (function (_39988,meta39987__$1){
var self__ = this;
var _39988__$1 = this;
return (new datascript.core.t_datascript$core39986(self__.conn,self__.tx_data,self__.tx_meta,self__.res,meta39987__$1));
});})(res))
;

datascript.core.t_datascript$core39986.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res){
return (function (_39988){
var self__ = this;
var _39988__$1 = this;
return self__.meta39987;
});})(res))
;

datascript.core.t_datascript$core39986.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core39986.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core39986.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(res))
;

datascript.core.t_datascript$core39986.getBasis = ((function (res){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"meta39987","meta39987",968637356,null)], null);
});})(res))
;

datascript.core.t_datascript$core39986.cljs$lang$type = true;

datascript.core.t_datascript$core39986.cljs$lang$ctorStr = "datascript.core/t_datascript$core39986";

datascript.core.t_datascript$core39986.cljs$lang$ctorPrWriter = ((function (res){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"datascript.core/t_datascript$core39986");
});})(res))
;

datascript.core.__GT_t_datascript$core39986 = ((function (res){
return (function datascript$core$__GT_t_datascript$core39986(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta39987){
return (new datascript.core.t_datascript$core39986(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta39987));
});})(res))
;

}

return (new datascript.core.t_datascript$core39986(conn,tx_data,tx_meta,res,cljs.core.PersistentArrayMap.EMPTY));
});

datascript.core.transact.cljs$lang$maxFixedArity = 3;
datascript.core.future_call = (function datascript$core$future_call(f){
var res = cljs.core.atom.call(null,null);
var realized = cljs.core.atom.call(null,false);
setTimeout(((function (res,realized){
return (function (){
cljs.core.reset_BANG_.call(null,res,f.call(null));

return cljs.core.reset_BANG_.call(null,realized,true);
});})(res,realized))
,(0));

if(typeof datascript.core.t_datascript$core39996 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core39996 = (function (future_call,f,res,realized,meta39997){
this.future_call = future_call;
this.f = f;
this.res = res;
this.realized = realized;
this.meta39997 = meta39997;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core39996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_39998,meta39997__$1){
var self__ = this;
var _39998__$1 = this;
return (new datascript.core.t_datascript$core39996(self__.future_call,self__.f,self__.res,self__.realized,meta39997__$1));
});})(res,realized))
;

datascript.core.t_datascript$core39996.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_39998){
var self__ = this;
var _39998__$1 = this;
return self__.meta39997;
});})(res,realized))
;

datascript.core.t_datascript$core39996.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.res);
});})(res,realized))
;

datascript.core.t_datascript$core39996.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
return (function (_,___$1,timeout_val){
var self__ = this;
var ___$2 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,self__.realized))){
return cljs.core.deref.call(null,self__.res);
} else {
return timeout_val;
}
});})(res,realized))
;

datascript.core.t_datascript$core39996.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.realized);
});})(res,realized))
;

datascript.core.t_datascript$core39996.getBasis = ((function (res,realized){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"future-call","future-call",96010083,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"realized","realized",1487343404,null),new cljs.core.Symbol(null,"meta39997","meta39997",397385376,null)], null);
});})(res,realized))
;

datascript.core.t_datascript$core39996.cljs$lang$type = true;

datascript.core.t_datascript$core39996.cljs$lang$ctorStr = "datascript.core/t_datascript$core39996";

datascript.core.t_datascript$core39996.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"datascript.core/t_datascript$core39996");
});})(res,realized))
;

datascript.core.__GT_t_datascript$core39996 = ((function (res,realized){
return (function datascript$core$future_call_$___GT_t_datascript$core39996(future_call__$1,f__$1,res__$1,realized__$1,meta39997){
return (new datascript.core.t_datascript$core39996(future_call__$1,f__$1,res__$1,realized__$1,meta39997));
});})(res,realized))
;

}

return (new datascript.core.t_datascript$core39996(datascript$core$future_call,f,res,realized,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.core.transact_async = (function datascript$core$transact_async(var_args){
var args39999 = [];
var len__17402__auto___40002 = arguments.length;
var i__17403__auto___40003 = (0);
while(true){
if((i__17403__auto___40003 < len__17402__auto___40002)){
args39999.push((arguments[i__17403__auto___40003]));

var G__40004 = (i__17403__auto___40003 + (1));
i__17403__auto___40003 = G__40004;
continue;
} else {
}
break;
}

var G__40001 = args39999.length;
switch (G__40001) {
case 2:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39999.length)].join('')));

}
});

datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact_async.call(null,conn,tx_data,null);
});

datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"conn?","conn?",1807755802,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null))))].join('')));
}

return datascript.core.future_call.call(null,(function (){
return datascript.core.transact_BANG_.call(null,conn,tx_data,tx_meta);
}));
});

datascript.core.transact_async.cljs$lang$maxFixedArity = 3;
datascript.core.rand_bits = (function datascript$core$rand_bits(pow){
return cljs.core.rand_int.call(null,((1) << pow));
});
datascript.core.to_hex_string = (function datascript$core$to_hex_string(n,l){
var s = n.toString((16));
var c = cljs.core.count.call(null,s);
if((c > l)){
return cljs.core.subs.call(null,s,(0),l);
} else {
if((c < l)){
return [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(l - c),"0"))),cljs.core.str(s)].join('');
} else {
return s;

}
}
});
datascript.core.squuid = (function datascript$core$squuid(var_args){
var args40006 = [];
var len__17402__auto___40009 = arguments.length;
var i__17403__auto___40010 = (0);
while(true){
if((i__17403__auto___40010 < len__17402__auto___40009)){
args40006.push((arguments[i__17403__auto___40010]));

var G__40011 = (i__17403__auto___40010 + (1));
i__17403__auto___40010 = G__40011;
continue;
} else {
}
break;
}

var G__40008 = args40006.length;
switch (G__40008) {
case 0:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40006.length)].join('')));

}
});

datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.core.squuid.call(null,(new Date()).getTime());
});

datascript.core.squuid.cljs$core$IFn$_invoke$arity$1 = (function (msec){
return cljs.core.uuid.call(null,[cljs.core.str(datascript.core.to_hex_string.call(null,((msec / (1000)) | (0)),(8))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string.call(null,((datascript.core.rand_bits.call(null,(16)) & (4095)) | (16384)),(4))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string.call(null,((datascript.core.rand_bits.call(null,(16)) & (16383)) | (32768)),(4))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4)))].join(''));
});

datascript.core.squuid.cljs$lang$maxFixedArity = 1;
datascript.core.squuid_time_millis = (function datascript$core$squuid_time_millis(uuid){
return (parseInt(cljs.core.subs.call(null,[cljs.core.str(uuid)].join(''),(0),(8)),(16)) * (1000));
});

//# sourceMappingURL=core.js.map?rel=1446794918385