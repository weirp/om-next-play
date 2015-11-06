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
return (function (p1__42574_SHARP_){
var and__16332__auto__ = pred.call(null,u,p1__42574_SHARP_);
if(cljs.core.truth_(and__16332__auto__)){
return fdb.pred.call(null,p1__42574_SHARP_);
} else {
return and__16332__auto__;
}
});})(fdb,u))
,null,null,null));
} else {
return (new datascript.db.FilteredDB(db,(function (p1__42575_SHARP_){
return pred.call(null,db,p1__42575_SHARP_);
}),null,null,null));
}
});
datascript.core.with$ = (function datascript$core$with(var_args){
var args42576 = [];
var len__17402__auto___42579 = arguments.length;
var i__17403__auto___42580 = (0);
while(true){
if((i__17403__auto___42580 < len__17402__auto___42579)){
args42576.push((arguments[i__17403__auto___42580]));

var G__42581 = (i__17403__auto___42580 + (1));
i__17403__auto___42580 = G__42581;
continue;
} else {
}
break;
}

var G__42578 = args42576.length;
switch (G__42578) {
case 2:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42576.length)].join('')));

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
var args42583 = [];
var len__17402__auto___42586 = arguments.length;
var i__17403__auto___42587 = (0);
while(true){
if((i__17403__auto___42587 < len__17402__auto___42586)){
args42583.push((arguments[i__17403__auto___42587]));

var G__42588 = (i__17403__auto___42587 + (1));
i__17403__auto___42587 = G__42588;
continue;
} else {
}
break;
}

var G__42585 = args42583.length;
switch (G__42585) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42583.length)].join('')));

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
var args42590 = [];
var len__17402__auto___42593 = arguments.length;
var i__17403__auto___42594 = (0);
while(true){
if((i__17403__auto___42594 < len__17402__auto___42593)){
args42590.push((arguments[i__17403__auto___42594]));

var G__42595 = (i__17403__auto___42594 + (1));
i__17403__auto___42594 = G__42595;
continue;
} else {
}
break;
}

var G__42592 = args42590.length;
switch (G__42592) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42590.length)].join('')));

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
var args42601 = [];
var len__17402__auto___42604 = arguments.length;
var i__17403__auto___42605 = (0);
while(true){
if((i__17403__auto___42605 < len__17402__auto___42604)){
args42601.push((arguments[i__17403__auto___42605]));

var G__42606 = (i__17403__auto___42605 + (1));
i__17403__auto___42605 = G__42606;
continue;
} else {
}
break;
}

var G__42603 = args42601.length;
switch (G__42603) {
case 0:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42601.length)].join('')));

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
var args42608 = [];
var len__17402__auto___42617 = arguments.length;
var i__17403__auto___42618 = (0);
while(true){
if((i__17403__auto___42618 < len__17402__auto___42617)){
args42608.push((arguments[i__17403__auto___42618]));

var G__42619 = (i__17403__auto___42618 + (1));
i__17403__auto___42618 = G__42619;
continue;
} else {
}
break;
}

var G__42610 = args42608.length;
switch (G__42610) {
case 2:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42608.length)].join('')));

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
var seq__42611_42621 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__42612_42622 = null;
var count__42613_42623 = (0);
var i__42614_42624 = (0);
while(true){
if((i__42614_42624 < count__42613_42623)){
var vec__42615_42625 = cljs.core._nth.call(null,chunk__42612_42622,i__42614_42624);
var __42626 = cljs.core.nth.call(null,vec__42615_42625,(0),null);
var callback_42627 = cljs.core.nth.call(null,vec__42615_42625,(1),null);
callback_42627.call(null,report);

var G__42628 = seq__42611_42621;
var G__42629 = chunk__42612_42622;
var G__42630 = count__42613_42623;
var G__42631 = (i__42614_42624 + (1));
seq__42611_42621 = G__42628;
chunk__42612_42622 = G__42629;
count__42613_42623 = G__42630;
i__42614_42624 = G__42631;
continue;
} else {
var temp__4425__auto___42632 = cljs.core.seq.call(null,seq__42611_42621);
if(temp__4425__auto___42632){
var seq__42611_42633__$1 = temp__4425__auto___42632;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42611_42633__$1)){
var c__17147__auto___42634 = cljs.core.chunk_first.call(null,seq__42611_42633__$1);
var G__42635 = cljs.core.chunk_rest.call(null,seq__42611_42633__$1);
var G__42636 = c__17147__auto___42634;
var G__42637 = cljs.core.count.call(null,c__17147__auto___42634);
var G__42638 = (0);
seq__42611_42621 = G__42635;
chunk__42612_42622 = G__42636;
count__42613_42623 = G__42637;
i__42614_42624 = G__42638;
continue;
} else {
var vec__42616_42639 = cljs.core.first.call(null,seq__42611_42633__$1);
var __42640 = cljs.core.nth.call(null,vec__42616_42639,(0),null);
var callback_42641 = cljs.core.nth.call(null,vec__42616_42639,(1),null);
callback_42641.call(null,report);

var G__42642 = cljs.core.next.call(null,seq__42611_42633__$1);
var G__42643 = null;
var G__42644 = (0);
var G__42645 = (0);
seq__42611_42621 = G__42642;
chunk__42612_42622 = G__42643;
count__42613_42623 = G__42644;
i__42614_42624 = G__42645;
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
var args42646 = [];
var len__17402__auto___42649 = arguments.length;
var i__17403__auto___42650 = (0);
while(true){
if((i__17403__auto___42650 < len__17402__auto___42649)){
args42646.push((arguments[i__17403__auto___42650]));

var G__42651 = (i__17403__auto___42650 + (1));
i__17403__auto___42650 = G__42651;
continue;
} else {
}
break;
}

var G__42648 = args42646.length;
switch (G__42648) {
case 2:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42646.length)].join('')));

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
var seq__42653_42659 = cljs.core.seq.call(null,datascript.core.data_readers);
var chunk__42654_42660 = null;
var count__42655_42661 = (0);
var i__42656_42662 = (0);
while(true){
if((i__42656_42662 < count__42655_42661)){
var vec__42657_42663 = cljs.core._nth.call(null,chunk__42654_42660,i__42656_42662);
var tag_42664 = cljs.core.nth.call(null,vec__42657_42663,(0),null);
var cb_42665 = cljs.core.nth.call(null,vec__42657_42663,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_42664,cb_42665);

var G__42666 = seq__42653_42659;
var G__42667 = chunk__42654_42660;
var G__42668 = count__42655_42661;
var G__42669 = (i__42656_42662 + (1));
seq__42653_42659 = G__42666;
chunk__42654_42660 = G__42667;
count__42655_42661 = G__42668;
i__42656_42662 = G__42669;
continue;
} else {
var temp__4425__auto___42670 = cljs.core.seq.call(null,seq__42653_42659);
if(temp__4425__auto___42670){
var seq__42653_42671__$1 = temp__4425__auto___42670;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42653_42671__$1)){
var c__17147__auto___42672 = cljs.core.chunk_first.call(null,seq__42653_42671__$1);
var G__42673 = cljs.core.chunk_rest.call(null,seq__42653_42671__$1);
var G__42674 = c__17147__auto___42672;
var G__42675 = cljs.core.count.call(null,c__17147__auto___42672);
var G__42676 = (0);
seq__42653_42659 = G__42673;
chunk__42654_42660 = G__42674;
count__42655_42661 = G__42675;
i__42656_42662 = G__42676;
continue;
} else {
var vec__42658_42677 = cljs.core.first.call(null,seq__42653_42671__$1);
var tag_42678 = cljs.core.nth.call(null,vec__42658_42677,(0),null);
var cb_42679 = cljs.core.nth.call(null,vec__42658_42677,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_42678,cb_42679);

var G__42680 = cljs.core.next.call(null,seq__42653_42671__$1);
var G__42681 = null;
var G__42682 = (0);
var G__42683 = (0);
seq__42653_42659 = G__42680;
chunk__42654_42660 = G__42681;
count__42655_42661 = G__42682;
i__42656_42662 = G__42683;
continue;
}
} else {
}
}
break;
}
datascript.core.last_tempid = cljs.core.atom.call(null,(-1000000));
datascript.core.tempid = (function datascript$core$tempid(var_args){
var args42684 = [];
var len__17402__auto___42687 = arguments.length;
var i__17403__auto___42688 = (0);
while(true){
if((i__17403__auto___42688 < len__17402__auto___42687)){
args42684.push((arguments[i__17403__auto___42688]));

var G__42689 = (i__17403__auto___42688 + (1));
i__17403__auto___42688 = G__42689;
continue;
} else {
}
break;
}

var G__42686 = args42684.length;
switch (G__42686) {
case 1:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42684.length)].join('')));

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
var args42691 = [];
var len__17402__auto___42697 = arguments.length;
var i__17403__auto___42698 = (0);
while(true){
if((i__17403__auto___42698 < len__17402__auto___42697)){
args42691.push((arguments[i__17403__auto___42698]));

var G__42699 = (i__17403__auto___42698 + (1));
i__17403__auto___42698 = G__42699;
continue;
} else {
}
break;
}

var G__42693 = args42691.length;
switch (G__42693) {
case 2:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42691.length)].join('')));

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
if(typeof datascript.core.t_datascript$core42694 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core42694 = (function (conn,tx_data,tx_meta,res,meta42695){
this.conn = conn;
this.tx_data = tx_data;
this.tx_meta = tx_meta;
this.res = res;
this.meta42695 = meta42695;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core42694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res){
return (function (_42696,meta42695__$1){
var self__ = this;
var _42696__$1 = this;
return (new datascript.core.t_datascript$core42694(self__.conn,self__.tx_data,self__.tx_meta,self__.res,meta42695__$1));
});})(res))
;

datascript.core.t_datascript$core42694.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res){
return (function (_42696){
var self__ = this;
var _42696__$1 = this;
return self__.meta42695;
});})(res))
;

datascript.core.t_datascript$core42694.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core42694.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core42694.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(res))
;

datascript.core.t_datascript$core42694.getBasis = ((function (res){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"meta42695","meta42695",-1101971063,null)], null);
});})(res))
;

datascript.core.t_datascript$core42694.cljs$lang$type = true;

datascript.core.t_datascript$core42694.cljs$lang$ctorStr = "datascript.core/t_datascript$core42694";

datascript.core.t_datascript$core42694.cljs$lang$ctorPrWriter = ((function (res){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"datascript.core/t_datascript$core42694");
});})(res))
;

datascript.core.__GT_t_datascript$core42694 = ((function (res){
return (function datascript$core$__GT_t_datascript$core42694(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta42695){
return (new datascript.core.t_datascript$core42694(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta42695));
});})(res))
;

}

return (new datascript.core.t_datascript$core42694(conn,tx_data,tx_meta,res,cljs.core.PersistentArrayMap.EMPTY));
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

if(typeof datascript.core.t_datascript$core42704 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core42704 = (function (future_call,f,res,realized,meta42705){
this.future_call = future_call;
this.f = f;
this.res = res;
this.realized = realized;
this.meta42705 = meta42705;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core42704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_42706,meta42705__$1){
var self__ = this;
var _42706__$1 = this;
return (new datascript.core.t_datascript$core42704(self__.future_call,self__.f,self__.res,self__.realized,meta42705__$1));
});})(res,realized))
;

datascript.core.t_datascript$core42704.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_42706){
var self__ = this;
var _42706__$1 = this;
return self__.meta42705;
});})(res,realized))
;

datascript.core.t_datascript$core42704.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.res);
});})(res,realized))
;

datascript.core.t_datascript$core42704.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
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

datascript.core.t_datascript$core42704.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.realized);
});})(res,realized))
;

datascript.core.t_datascript$core42704.getBasis = ((function (res,realized){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"future-call","future-call",96010083,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"realized","realized",1487343404,null),new cljs.core.Symbol(null,"meta42705","meta42705",1392316402,null)], null);
});})(res,realized))
;

datascript.core.t_datascript$core42704.cljs$lang$type = true;

datascript.core.t_datascript$core42704.cljs$lang$ctorStr = "datascript.core/t_datascript$core42704";

datascript.core.t_datascript$core42704.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"datascript.core/t_datascript$core42704");
});})(res,realized))
;

datascript.core.__GT_t_datascript$core42704 = ((function (res,realized){
return (function datascript$core$future_call_$___GT_t_datascript$core42704(future_call__$1,f__$1,res__$1,realized__$1,meta42705){
return (new datascript.core.t_datascript$core42704(future_call__$1,f__$1,res__$1,realized__$1,meta42705));
});})(res,realized))
;

}

return (new datascript.core.t_datascript$core42704(datascript$core$future_call,f,res,realized,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.core.transact_async = (function datascript$core$transact_async(var_args){
var args42707 = [];
var len__17402__auto___42710 = arguments.length;
var i__17403__auto___42711 = (0);
while(true){
if((i__17403__auto___42711 < len__17402__auto___42710)){
args42707.push((arguments[i__17403__auto___42711]));

var G__42712 = (i__17403__auto___42711 + (1));
i__17403__auto___42711 = G__42712;
continue;
} else {
}
break;
}

var G__42709 = args42707.length;
switch (G__42709) {
case 2:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42707.length)].join('')));

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
var args42714 = [];
var len__17402__auto___42717 = arguments.length;
var i__17403__auto___42718 = (0);
while(true){
if((i__17403__auto___42718 < len__17402__auto___42717)){
args42714.push((arguments[i__17403__auto___42718]));

var G__42719 = (i__17403__auto___42718 + (1));
i__17403__auto___42718 = G__42719;
continue;
} else {
}
break;
}

var G__42716 = args42714.length;
switch (G__42716) {
case 0:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42714.length)].join('')));

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

//# sourceMappingURL=core.js.map?rel=1446795349189