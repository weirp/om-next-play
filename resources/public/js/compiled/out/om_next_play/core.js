// Compiled by ClojureScript 1.7.145 {}
goog.provide('om_next_play.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('cljs.test');
goog.require('datascript.core');
goog.require('sablono.core');
goog.require('om.next');
cljs.core.enable_console_print_BANG_.call(null);
/**
 * @constructor
 */
om_next_play.core.Hello = (function om_next_play$core$Hello(){
var this__27085__auto__ = this;
React.Component.apply(this__27085__auto__,arguments);

if(!((this__27085__auto__.initLocalState == null))){
this__27085__auto__.state = this__27085__auto__.initLocalState();
} else {
this__27085__auto__.state = {};
}

return this__27085__auto__;
});

om_next_play.core.Hello.prototype = goog.object.clone(React.Component.prototype);

var x34624_34632 = om_next_play.core.Hello.prototype;
x34624_34632.componentWillUpdate = ((function (x34624_34632){
return (function (next_props__27026__auto__,next_state__27027__auto__){
var this__27025__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__27025__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__27025__auto__);
});})(x34624_34632))
;

x34624_34632.shouldComponentUpdate = ((function (x34624_34632){
return (function (next_props__27026__auto__,next_state__27027__auto__){
var this__27025__auto__ = this;
var or__16344__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__27025__auto__),goog.object.get(next_props__27026__auto__,"omcljs$value"));
if(or__16344__auto__){
return or__16344__auto__;
} else {
var and__16332__auto__ = this__27025__auto__.state;
if(cljs.core.truth_(and__16332__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__27025__auto__.state,"omcljs$state"),goog.object.get(next_state__27027__auto__,"omcljs$state"));
} else {
return and__16332__auto__;
}
}
});})(x34624_34632))
;

x34624_34632.componentWillUnmount = ((function (x34624_34632){
return (function (){
var this__27025__auto__ = this;
var r__27031__auto__ = om.next.get_reconciler.call(null,this__27025__auto__);
var cfg__27032__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__27031__auto__);
var st__27033__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__27032__auto__);
var indexer__27030__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__27032__auto__);
if((st__27033__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__27033__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__27025__auto__);
}

if((indexer__27030__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__27030__auto__,this__27025__auto__);
}
});})(x34624_34632))
;

x34624_34632.componentDidUpdate = ((function (x34624_34632){
return (function (prev_props__27028__auto__,prev_state__27029__auto__){
var this__27025__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__27025__auto__);
});})(x34624_34632))
;

x34624_34632.isMounted = ((function (x34624_34632){
return (function (){
var this__27025__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__27025__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x34624_34632))
;

x34624_34632.componentWillMount = ((function (x34624_34632){
return (function (){
var this__27025__auto__ = this;
var indexer__27030__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__27025__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__27030__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__27030__auto__,this__27025__auto__);
}
});})(x34624_34632))
;

x34624_34632.render = ((function (x34624_34632){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_34625 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_34626 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_34627 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_34628 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_34629 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.p(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_34629;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_34628;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_34627;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_34626;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_34625;
}});})(x34624_34632))
;


om_next_play.core.Hello.prototype.constructor = om_next_play.core.Hello;

om_next_play.core.Hello.prototype.om$isComponent = true;

var x34630_34633 = om_next_play.core.Hello;


var x34631_34634 = om_next_play.core.Hello.prototype;


om_next_play.core.Hello.cljs$lang$type = true;

om_next_play.core.Hello.cljs$lang$ctorStr = "om-next-play.core/Hello";

om_next_play.core.Hello.cljs$lang$ctorPrWriter = (function (this__27087__auto__,writer__27088__auto__,opt__27089__auto__){
return cljs.core._write.call(null,writer__27088__auto__,"om-next-play.core/Hello");
});
om_next_play.core.hello = om.next.factory.call(null,om_next_play.core.Hello);
om_next_play.core.p = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),(function (_,___$1,___$2){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"quote","quote",-262615245),true], null);
}),new cljs.core.Keyword(null,"mutate","mutate",1422419038),(function (_,___$1,___$2){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"quote","quote",-262615245),true], null);
})], null));
om_next_play.core.r = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parser","parser",-1543495310),om_next_play.core.p,new cljs.core.Keyword(null,"ui->ref","ui->ref",-702529751),(function (c){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,c));
})], null));
/**
 * @constructor
 */
om_next_play.core.Binder = (function om_next_play$core$Binder(){
var this__27085__auto__ = this;
React.Component.apply(this__27085__auto__,arguments);

if(!((this__27085__auto__.initLocalState == null))){
this__27085__auto__.state = this__27085__auto__.initLocalState();
} else {
this__27085__auto__.state = {};
}

return this__27085__auto__;
});

om_next_play.core.Binder.prototype = goog.object.clone(React.Component.prototype);

var x34639_34648 = om_next_play.core.Binder.prototype;
x34639_34648.componentWillUpdate = ((function (x34639_34648){
return (function (next_props__27026__auto__,next_state__27027__auto__){
var this__27025__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__27025__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__27025__auto__);
});})(x34639_34648))
;

x34639_34648.shouldComponentUpdate = ((function (x34639_34648){
return (function (next_props__27026__auto__,next_state__27027__auto__){
var this__27025__auto__ = this;
var or__16344__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__27025__auto__),goog.object.get(next_props__27026__auto__,"omcljs$value"));
if(or__16344__auto__){
return or__16344__auto__;
} else {
var and__16332__auto__ = this__27025__auto__.state;
if(cljs.core.truth_(and__16332__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__27025__auto__.state,"omcljs$state"),goog.object.get(next_state__27027__auto__,"omcljs$state"));
} else {
return and__16332__auto__;
}
}
});})(x34639_34648))
;

x34639_34648.componentWillUnmount = ((function (x34639_34648){
return (function (){
var this__27025__auto__ = this;
var r__27031__auto__ = om.next.get_reconciler.call(null,this__27025__auto__);
var cfg__27032__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__27031__auto__);
var st__27033__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__27032__auto__);
var indexer__27030__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__27032__auto__);
if((st__27033__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__27033__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__27025__auto__);
}

if((indexer__27030__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__27030__auto__,this__27025__auto__);
}
});})(x34639_34648))
;

x34639_34648.componentDidUpdate = ((function (x34639_34648){
return (function (prev_props__27028__auto__,prev_state__27029__auto__){
var this__27025__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__27025__auto__);
});})(x34639_34648))
;

x34639_34648.isMounted = ((function (x34639_34648){
return (function (){
var this__27025__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__27025__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x34639_34648))
;

x34639_34648.componentWillMount = ((function (x34639_34648){
return (function (){
var this__27025__auto__ = this;
var indexer__27030__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__27025__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__27030__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__27030__auto__,this__27025__auto__);
}
});})(x34639_34648))
;

x34639_34648.componentDidMount = ((function (x34639_34648){
return (function (){
var this$ = this;
var indexes = cljs.core.deref.call(null,cljs.core.get_in.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null)));
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"indexes","indexes",1496475545),indexes);
});})(x34639_34648))
;

x34639_34648.render = ((function (x34639_34648){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_34640 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_34641 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_34642 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_34643 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_34644 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var _STAR_reconciler_STAR_34645 = om.next._STAR_reconciler_STAR_;
om.next._STAR_reconciler_STAR_ = new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));

try{return cljs.core.apply.call(null,om.dom.div,null,om_next_play.core.hello.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"text","text",-1790561697),"Goodbye, world!"], null)),(function (){var temp__4425__auto__ = cljs.core.get_in.call(null,om.next.get_state.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"ref->components","ref->components",-303587249)], null));
if(cljs.core.truth_(temp__4425__auto__)){
var indexes = temp__4425__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.p(null,cljs.core.pr_str.call(null,indexes))], null);
} else {
return null;
}
})());
}finally {om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_34645;
}}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_34644;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_34643;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_34642;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_34641;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_34640;
}});})(x34639_34648))
;


om_next_play.core.Binder.prototype.constructor = om_next_play.core.Binder;

om_next_play.core.Binder.prototype.om$isComponent = true;

var x34646_34649 = om_next_play.core.Binder;


var x34647_34650 = om_next_play.core.Binder.prototype;


om_next_play.core.Binder.cljs$lang$type = true;

om_next_play.core.Binder.cljs$lang$ctorStr = "om-next-play.core/Binder";

om_next_play.core.Binder.cljs$lang$ctorPrWriter = (function (this__27087__auto__,writer__27088__auto__,opt__27089__auto__){
return cljs.core._write.call(null,writer__27088__auto__,"om-next-play.core/Binder");
});
om_next_play.core.binder = om.next.factory.call(null,om_next_play.core.Binder);

om_next_play.core.test_indexer = (function om_next_play$core$test_indexer(){
return cljs.test.test_var.call(null,om_next_play$core$test_indexer.cljs$lang$var);
});
om_next_play.core.test_indexer.cljs$lang$test = (function (){

var idxr = cljs.core.get_in.call(null,om_next_play.core.r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
try{var values__23562__auto___34653 = cljs.core._conj.call(null,cljs.core.List.EMPTY,(idxr == null));
var result__23563__auto___34654 = cljs.core.apply.call(null,cljs.core.not,values__23562__auto___34653);
if(cljs.core.truth_(result__23563__auto___34654)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"idxr","idxr",-452160423,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__23562__auto___34653),new cljs.core.Keyword(null,"message","message",-406056002),"Indexer is not nil in the reconciler"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"idxr","idxr",-452160423,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__23562__auto___34653)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"Indexer is not nil in the reconciler"], null));
}

}catch (e34651){var t__23600__auto___34655 = e34651;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"idxr","idxr",-452160423,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__23600__auto___34655,new cljs.core.Keyword(null,"message","message",-406056002),"Indexer is not nil in the reconciler"], null));
}
try{var values__23562__auto__ = cljs.core._conj.call(null,cljs.core.List.EMPTY,(cljs.core.deref.call(null,idxr) == null));
var result__23563__auto__ = cljs.core.apply.call(null,cljs.core.not,values__23562__auto__);
if(cljs.core.truth_(result__23563__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"idxr","idxr",-452160423,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__23562__auto__),new cljs.core.Keyword(null,"message","message",-406056002),"Indexer is IDeref"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"idxr","idxr",-452160423,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__23562__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"Indexer is IDeref"], null));
}

return result__23563__auto__;
}catch (e34652){var t__23600__auto__ = e34652;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"idxr","idxr",-452160423,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__23600__auto__,new cljs.core.Keyword(null,"message","message",-406056002),"Indexer is IDeref"], null));
}});

om_next_play.core.test_indexer.cljs$lang$var = new cljs.core.Var(function(){return om_next_play.core.test_indexer;},new cljs.core.Symbol("om-next-play.core","test-indexer","om-next-play.core/test-indexer",-1083854174,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"om-next-play.core","om-next-play.core",1053081065,null),new cljs.core.Symbol(null,"test-indexer","test-indexer",937750832,null),"src/om_next_play/core.cljs",22,1,58,58,cljs.core.List.EMPTY,null,(cljs.core.truth_(om_next_play.core.test_indexer)?om_next_play.core.test_indexer.cljs$lang$test:null)]));
om_next_play.core.main = (function om_next_play$core$main(){
var temp__4423__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__4423__auto__)){
var node = temp__4423__auto__;
return React.render(React.createElement("div",null,"This is working"),node);
} else {
return null;
}
});
om_next_play.core.main.call(null);

//# sourceMappingURL=core.js.map?rel=1446795334360