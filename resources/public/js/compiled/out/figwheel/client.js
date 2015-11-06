// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__37568 = cljs.core._EQ_;
var expr__37569 = (function (){var or__16344__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__37568.call(null,"true",expr__37569))){
return true;
} else {
if(cljs.core.truth_(pred__37568.call(null,"false",expr__37569))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__37569)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37571__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__37571 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37572__i = 0, G__37572__a = new Array(arguments.length -  0);
while (G__37572__i < G__37572__a.length) {G__37572__a[G__37572__i] = arguments[G__37572__i + 0]; ++G__37572__i;}
  args = new cljs.core.IndexedSeq(G__37572__a,0);
} 
return G__37571__delegate.call(this,args);};
G__37571.cljs$lang$maxFixedArity = 0;
G__37571.cljs$lang$applyTo = (function (arglist__37573){
var args = cljs.core.seq(arglist__37573);
return G__37571__delegate(args);
});
G__37571.cljs$core$IFn$_invoke$arity$variadic = G__37571__delegate;
return G__37571;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37574){
var map__37577 = p__37574;
var map__37577__$1 = ((((!((map__37577 == null)))?((((map__37577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37577):map__37577);
var message = cljs.core.get.call(null,map__37577__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37577__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16344__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16332__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16332__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16332__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20183__auto___37739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20183__auto___37739,ch){
return (function (){
var f__20184__auto__ = (function (){var switch__20118__auto__ = ((function (c__20183__auto___37739,ch){
return (function (state_37708){
var state_val_37709 = (state_37708[(1)]);
if((state_val_37709 === (7))){
var inst_37704 = (state_37708[(2)]);
var state_37708__$1 = state_37708;
var statearr_37710_37740 = state_37708__$1;
(statearr_37710_37740[(2)] = inst_37704);

(statearr_37710_37740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37709 === (1))){
var state_37708__$1 = state_37708;
var statearr_37711_37741 = state_37708__$1;
(statearr_37711_37741[(2)] = null);

(statearr_37711_37741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37709 === (4))){
var inst_37661 = (state_37708[(7)]);
var inst_37661__$1 = (state_37708[(2)]);
var state_37708__$1 = (function (){var statearr_37712 = state_37708;
(statearr_37712[(7)] = inst_37661__$1);

return statearr_37712;
})();
if(cljs.core.truth_(inst_37661__$1)){
var statearr_37713_37742 = state_37708__$1;
(statearr_37713_37742[(1)] = (5));

} else {
var statearr_37714_37743 = state_37708__$1;
(statearr_37714_37743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37709 === (15))){
var inst_37668 = (state_37708[(8)]);
var inst_37683 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37668);
var inst_37684 = cljs.core.first.call(null,inst_37683);
var inst_37685 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37684);
var inst_37686 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_37685)].join('');
var inst_37687 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37686);
var state_37708__$1 = state_37708;
var statearr_37715_37744 = state_37708__$1;
(statearr_37715_37744[(2)] = inst_37687);

(statearr_37715_37744[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37709 === (13))){
var inst_37692 = (state_37708[(2)]);
var state_37708__$1 = state_37708;
var statearr_37716_37745 = state_37708__$1;
(statearr_37716_37745[(2)] = inst_37692);

(statearr_37716_37745[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37709 === (6))){
var state_37708__$1 = state_37708;
var statearr_37717_37746 = state_37708__$1;
(statearr_37717_37746[(2)] = null);

(statearr_37717_37746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37709 === (17))){
var inst_37690 = (state_37708[(2)]);
var state_37708__$1 = state_37708;
var statearr_37718_37747 = state_37708__$1;
(statearr_37718_37747[(2)] = inst_37690);

(statearr_37718_37747[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37709 === (3))){
var inst_37706 = (state_37708[(2)]);
var state_37708__$1 = state_37708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37708__$1,inst_37706);
} else {
if((state_val_37709 === (12))){
var inst_37667 = (state_37708[(9)]);
var inst_37681 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37667,opts);
var state_37708__$1 = state_37708;
if(cljs.core.truth_(inst_37681)){
var statearr_37719_37748 = state_37708__$1;
(statearr_37719_37748[(1)] = (15));

} else {
var statearr_37720_37749 = state_37708__$1;
(statearr_37720_37749[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37709 === (2))){
var state_37708__$1 = state_37708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37708__$1,(4),ch);
} else {
if((state_val_37709 === (11))){
var inst_37668 = (state_37708[(8)]);
var inst_37673 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37674 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37668);
var inst_37675 = cljs.core.async.timeout.call(null,(1000));
var inst_37676 = [inst_37674,inst_37675];
var inst_37677 = (new cljs.core.PersistentVector(null,2,(5),inst_37673,inst_37676,null));
var state_37708__$1 = state_37708;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37708__$1,(14),inst_37677);
} else {
if((state_val_37709 === (9))){
var inst_37668 = (state_37708[(8)]);
var inst_37694 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37695 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37668);
var inst_37696 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37695);
var inst_37697 = [cljs.core.str("Not loading: "),cljs.core.str(inst_37696)].join('');
var inst_37698 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37697);
var state_37708__$1 = (function (){var statearr_37721 = state_37708;
(statearr_37721[(10)] = inst_37694);

return statearr_37721;
})();
var statearr_37722_37750 = state_37708__$1;
(statearr_37722_37750[(2)] = inst_37698);

(statearr_37722_37750[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37709 === (5))){
var inst_37661 = (state_37708[(7)]);
var inst_37663 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37664 = (new cljs.core.PersistentArrayMap(null,2,inst_37663,null));
var inst_37665 = (new cljs.core.PersistentHashSet(null,inst_37664,null));
var inst_37666 = figwheel.client.focus_msgs.call(null,inst_37665,inst_37661);
var inst_37667 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37666);
var inst_37668 = cljs.core.first.call(null,inst_37666);
var inst_37669 = figwheel.client.autoload_QMARK_.call(null);
var state_37708__$1 = (function (){var statearr_37723 = state_37708;
(statearr_37723[(9)] = inst_37667);

(statearr_37723[(8)] = inst_37668);

return statearr_37723;
})();
if(cljs.core.truth_(inst_37669)){
var statearr_37724_37751 = state_37708__$1;
(statearr_37724_37751[(1)] = (8));

} else {
var statearr_37725_37752 = state_37708__$1;
(statearr_37725_37752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37709 === (14))){
var inst_37679 = (state_37708[(2)]);
var state_37708__$1 = state_37708;
var statearr_37726_37753 = state_37708__$1;
(statearr_37726_37753[(2)] = inst_37679);

(statearr_37726_37753[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37709 === (16))){
var state_37708__$1 = state_37708;
var statearr_37727_37754 = state_37708__$1;
(statearr_37727_37754[(2)] = null);

(statearr_37727_37754[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37709 === (10))){
var inst_37700 = (state_37708[(2)]);
var state_37708__$1 = (function (){var statearr_37728 = state_37708;
(statearr_37728[(11)] = inst_37700);

return statearr_37728;
})();
var statearr_37729_37755 = state_37708__$1;
(statearr_37729_37755[(2)] = null);

(statearr_37729_37755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37709 === (8))){
var inst_37667 = (state_37708[(9)]);
var inst_37671 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37667,opts);
var state_37708__$1 = state_37708;
if(cljs.core.truth_(inst_37671)){
var statearr_37730_37756 = state_37708__$1;
(statearr_37730_37756[(1)] = (11));

} else {
var statearr_37731_37757 = state_37708__$1;
(statearr_37731_37757[(1)] = (12));

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
});})(c__20183__auto___37739,ch))
;
return ((function (switch__20118__auto__,c__20183__auto___37739,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20119__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20119__auto____0 = (function (){
var statearr_37735 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37735[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20119__auto__);

(statearr_37735[(1)] = (1));

return statearr_37735;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20119__auto____1 = (function (state_37708){
while(true){
var ret_value__20120__auto__ = (function (){try{while(true){
var result__20121__auto__ = switch__20118__auto__.call(null,state_37708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20121__auto__;
}
break;
}
}catch (e37736){if((e37736 instanceof Object)){
var ex__20122__auto__ = e37736;
var statearr_37737_37758 = state_37708;
(statearr_37737_37758[(5)] = ex__20122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37759 = state_37708;
state_37708 = G__37759;
continue;
} else {
return ret_value__20120__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20119__auto__ = function(state_37708){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20119__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20119__auto____1.call(this,state_37708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20119__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20119__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20119__auto__;
})()
;})(switch__20118__auto__,c__20183__auto___37739,ch))
})();
var state__20185__auto__ = (function (){var statearr_37738 = f__20184__auto__.call(null);
(statearr_37738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20183__auto___37739);

return statearr_37738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20185__auto__);
});})(c__20183__auto___37739,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37760_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37760_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37767 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37767){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_37765 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_37766 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_37765,_STAR_print_newline_STAR_37766,base_path_37767){
return (function() { 
var G__37768__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__37768 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37769__i = 0, G__37769__a = new Array(arguments.length -  0);
while (G__37769__i < G__37769__a.length) {G__37769__a[G__37769__i] = arguments[G__37769__i + 0]; ++G__37769__i;}
  args = new cljs.core.IndexedSeq(G__37769__a,0);
} 
return G__37768__delegate.call(this,args);};
G__37768.cljs$lang$maxFixedArity = 0;
G__37768.cljs$lang$applyTo = (function (arglist__37770){
var args = cljs.core.seq(arglist__37770);
return G__37768__delegate(args);
});
G__37768.cljs$core$IFn$_invoke$arity$variadic = G__37768__delegate;
return G__37768;
})()
;})(_STAR_print_fn_STAR_37765,_STAR_print_newline_STAR_37766,base_path_37767))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_37766;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_37765;
}}catch (e37764){if((e37764 instanceof Error)){
var e = e37764;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37767], null));
} else {
var e = e37764;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_37767))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37771){
var map__37778 = p__37771;
var map__37778__$1 = ((((!((map__37778 == null)))?((((map__37778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37778):map__37778);
var opts = map__37778__$1;
var build_id = cljs.core.get.call(null,map__37778__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37778,map__37778__$1,opts,build_id){
return (function (p__37780){
var vec__37781 = p__37780;
var map__37782 = cljs.core.nth.call(null,vec__37781,(0),null);
var map__37782__$1 = ((((!((map__37782 == null)))?((((map__37782.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37782.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37782):map__37782);
var msg = map__37782__$1;
var msg_name = cljs.core.get.call(null,map__37782__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__37781,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37781,map__37782,map__37782__$1,msg,msg_name,_,map__37778,map__37778__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37781,map__37782,map__37782__$1,msg,msg_name,_,map__37778,map__37778__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37778,map__37778__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37788){
var vec__37789 = p__37788;
var map__37790 = cljs.core.nth.call(null,vec__37789,(0),null);
var map__37790__$1 = ((((!((map__37790 == null)))?((((map__37790.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37790.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37790):map__37790);
var msg = map__37790__$1;
var msg_name = cljs.core.get.call(null,map__37790__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__37789,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37792){
var map__37802 = p__37792;
var map__37802__$1 = ((((!((map__37802 == null)))?((((map__37802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37802):map__37802);
var on_compile_warning = cljs.core.get.call(null,map__37802__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37802__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37802,map__37802__$1,on_compile_warning,on_compile_fail){
return (function (p__37804){
var vec__37805 = p__37804;
var map__37806 = cljs.core.nth.call(null,vec__37805,(0),null);
var map__37806__$1 = ((((!((map__37806 == null)))?((((map__37806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37806):map__37806);
var msg = map__37806__$1;
var msg_name = cljs.core.get.call(null,map__37806__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__37805,(1));
var pred__37808 = cljs.core._EQ_;
var expr__37809 = msg_name;
if(cljs.core.truth_(pred__37808.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37809))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37808.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37809))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37802,map__37802__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20183__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20183__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20184__auto__ = (function (){var switch__20118__auto__ = ((function (c__20183__auto__,msg_hist,msg_names,msg){
return (function (state_38025){
var state_val_38026 = (state_38025[(1)]);
if((state_val_38026 === (7))){
var inst_37949 = (state_38025[(2)]);
var state_38025__$1 = state_38025;
if(cljs.core.truth_(inst_37949)){
var statearr_38027_38073 = state_38025__$1;
(statearr_38027_38073[(1)] = (8));

} else {
var statearr_38028_38074 = state_38025__$1;
(statearr_38028_38074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (20))){
var inst_38019 = (state_38025[(2)]);
var state_38025__$1 = state_38025;
var statearr_38029_38075 = state_38025__$1;
(statearr_38029_38075[(2)] = inst_38019);

(statearr_38029_38075[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (27))){
var inst_38015 = (state_38025[(2)]);
var state_38025__$1 = state_38025;
var statearr_38030_38076 = state_38025__$1;
(statearr_38030_38076[(2)] = inst_38015);

(statearr_38030_38076[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (1))){
var inst_37942 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38025__$1 = state_38025;
if(cljs.core.truth_(inst_37942)){
var statearr_38031_38077 = state_38025__$1;
(statearr_38031_38077[(1)] = (2));

} else {
var statearr_38032_38078 = state_38025__$1;
(statearr_38032_38078[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (24))){
var inst_38017 = (state_38025[(2)]);
var state_38025__$1 = state_38025;
var statearr_38033_38079 = state_38025__$1;
(statearr_38033_38079[(2)] = inst_38017);

(statearr_38033_38079[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (4))){
var inst_38023 = (state_38025[(2)]);
var state_38025__$1 = state_38025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38025__$1,inst_38023);
} else {
if((state_val_38026 === (15))){
var inst_38021 = (state_38025[(2)]);
var state_38025__$1 = state_38025;
var statearr_38034_38080 = state_38025__$1;
(statearr_38034_38080[(2)] = inst_38021);

(statearr_38034_38080[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (21))){
var inst_37980 = (state_38025[(2)]);
var state_38025__$1 = state_38025;
var statearr_38035_38081 = state_38025__$1;
(statearr_38035_38081[(2)] = inst_37980);

(statearr_38035_38081[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (31))){
var inst_38004 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38025__$1 = state_38025;
if(cljs.core.truth_(inst_38004)){
var statearr_38036_38082 = state_38025__$1;
(statearr_38036_38082[(1)] = (34));

} else {
var statearr_38037_38083 = state_38025__$1;
(statearr_38037_38083[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (32))){
var inst_38013 = (state_38025[(2)]);
var state_38025__$1 = state_38025;
var statearr_38038_38084 = state_38025__$1;
(statearr_38038_38084[(2)] = inst_38013);

(statearr_38038_38084[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (33))){
var inst_38002 = (state_38025[(2)]);
var state_38025__$1 = state_38025;
var statearr_38039_38085 = state_38025__$1;
(statearr_38039_38085[(2)] = inst_38002);

(statearr_38039_38085[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (13))){
var inst_37963 = figwheel.client.heads_up.clear.call(null);
var state_38025__$1 = state_38025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38025__$1,(16),inst_37963);
} else {
if((state_val_38026 === (22))){
var inst_37984 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37985 = figwheel.client.heads_up.append_message.call(null,inst_37984);
var state_38025__$1 = state_38025;
var statearr_38040_38086 = state_38025__$1;
(statearr_38040_38086[(2)] = inst_37985);

(statearr_38040_38086[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (36))){
var inst_38011 = (state_38025[(2)]);
var state_38025__$1 = state_38025;
var statearr_38041_38087 = state_38025__$1;
(statearr_38041_38087[(2)] = inst_38011);

(statearr_38041_38087[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (29))){
var inst_37995 = (state_38025[(2)]);
var state_38025__$1 = state_38025;
var statearr_38042_38088 = state_38025__$1;
(statearr_38042_38088[(2)] = inst_37995);

(statearr_38042_38088[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (6))){
var inst_37944 = (state_38025[(7)]);
var state_38025__$1 = state_38025;
var statearr_38043_38089 = state_38025__$1;
(statearr_38043_38089[(2)] = inst_37944);

(statearr_38043_38089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (28))){
var inst_37991 = (state_38025[(2)]);
var inst_37992 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37993 = figwheel.client.heads_up.display_warning.call(null,inst_37992);
var state_38025__$1 = (function (){var statearr_38044 = state_38025;
(statearr_38044[(8)] = inst_37991);

return statearr_38044;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38025__$1,(29),inst_37993);
} else {
if((state_val_38026 === (25))){
var inst_37989 = figwheel.client.heads_up.clear.call(null);
var state_38025__$1 = state_38025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38025__$1,(28),inst_37989);
} else {
if((state_val_38026 === (34))){
var inst_38006 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38025__$1 = state_38025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38025__$1,(37),inst_38006);
} else {
if((state_val_38026 === (17))){
var inst_37971 = (state_38025[(2)]);
var state_38025__$1 = state_38025;
var statearr_38045_38090 = state_38025__$1;
(statearr_38045_38090[(2)] = inst_37971);

(statearr_38045_38090[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (3))){
var inst_37961 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38025__$1 = state_38025;
if(cljs.core.truth_(inst_37961)){
var statearr_38046_38091 = state_38025__$1;
(statearr_38046_38091[(1)] = (13));

} else {
var statearr_38047_38092 = state_38025__$1;
(statearr_38047_38092[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (12))){
var inst_37957 = (state_38025[(2)]);
var state_38025__$1 = state_38025;
var statearr_38048_38093 = state_38025__$1;
(statearr_38048_38093[(2)] = inst_37957);

(statearr_38048_38093[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (2))){
var inst_37944 = (state_38025[(7)]);
var inst_37944__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38025__$1 = (function (){var statearr_38049 = state_38025;
(statearr_38049[(7)] = inst_37944__$1);

return statearr_38049;
})();
if(cljs.core.truth_(inst_37944__$1)){
var statearr_38050_38094 = state_38025__$1;
(statearr_38050_38094[(1)] = (5));

} else {
var statearr_38051_38095 = state_38025__$1;
(statearr_38051_38095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (23))){
var inst_37987 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38025__$1 = state_38025;
if(cljs.core.truth_(inst_37987)){
var statearr_38052_38096 = state_38025__$1;
(statearr_38052_38096[(1)] = (25));

} else {
var statearr_38053_38097 = state_38025__$1;
(statearr_38053_38097[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (35))){
var state_38025__$1 = state_38025;
var statearr_38054_38098 = state_38025__$1;
(statearr_38054_38098[(2)] = null);

(statearr_38054_38098[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (19))){
var inst_37982 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38025__$1 = state_38025;
if(cljs.core.truth_(inst_37982)){
var statearr_38055_38099 = state_38025__$1;
(statearr_38055_38099[(1)] = (22));

} else {
var statearr_38056_38100 = state_38025__$1;
(statearr_38056_38100[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (11))){
var inst_37953 = (state_38025[(2)]);
var state_38025__$1 = state_38025;
var statearr_38057_38101 = state_38025__$1;
(statearr_38057_38101[(2)] = inst_37953);

(statearr_38057_38101[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (9))){
var inst_37955 = figwheel.client.heads_up.clear.call(null);
var state_38025__$1 = state_38025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38025__$1,(12),inst_37955);
} else {
if((state_val_38026 === (5))){
var inst_37946 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38025__$1 = state_38025;
var statearr_38058_38102 = state_38025__$1;
(statearr_38058_38102[(2)] = inst_37946);

(statearr_38058_38102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (14))){
var inst_37973 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38025__$1 = state_38025;
if(cljs.core.truth_(inst_37973)){
var statearr_38059_38103 = state_38025__$1;
(statearr_38059_38103[(1)] = (18));

} else {
var statearr_38060_38104 = state_38025__$1;
(statearr_38060_38104[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (26))){
var inst_37997 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38025__$1 = state_38025;
if(cljs.core.truth_(inst_37997)){
var statearr_38061_38105 = state_38025__$1;
(statearr_38061_38105[(1)] = (30));

} else {
var statearr_38062_38106 = state_38025__$1;
(statearr_38062_38106[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (16))){
var inst_37965 = (state_38025[(2)]);
var inst_37966 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37967 = figwheel.client.format_messages.call(null,inst_37966);
var inst_37968 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37969 = figwheel.client.heads_up.display_error.call(null,inst_37967,inst_37968);
var state_38025__$1 = (function (){var statearr_38063 = state_38025;
(statearr_38063[(9)] = inst_37965);

return statearr_38063;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38025__$1,(17),inst_37969);
} else {
if((state_val_38026 === (30))){
var inst_37999 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38000 = figwheel.client.heads_up.display_warning.call(null,inst_37999);
var state_38025__$1 = state_38025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38025__$1,(33),inst_38000);
} else {
if((state_val_38026 === (10))){
var inst_37959 = (state_38025[(2)]);
var state_38025__$1 = state_38025;
var statearr_38064_38107 = state_38025__$1;
(statearr_38064_38107[(2)] = inst_37959);

(statearr_38064_38107[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (18))){
var inst_37975 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37976 = figwheel.client.format_messages.call(null,inst_37975);
var inst_37977 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37978 = figwheel.client.heads_up.display_error.call(null,inst_37976,inst_37977);
var state_38025__$1 = state_38025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38025__$1,(21),inst_37978);
} else {
if((state_val_38026 === (37))){
var inst_38008 = (state_38025[(2)]);
var state_38025__$1 = state_38025;
var statearr_38065_38108 = state_38025__$1;
(statearr_38065_38108[(2)] = inst_38008);

(statearr_38065_38108[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (8))){
var inst_37951 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38025__$1 = state_38025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38025__$1,(11),inst_37951);
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
});})(c__20183__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20118__auto__,c__20183__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20119__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20119__auto____0 = (function (){
var statearr_38069 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38069[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20119__auto__);

(statearr_38069[(1)] = (1));

return statearr_38069;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20119__auto____1 = (function (state_38025){
while(true){
var ret_value__20120__auto__ = (function (){try{while(true){
var result__20121__auto__ = switch__20118__auto__.call(null,state_38025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20121__auto__;
}
break;
}
}catch (e38070){if((e38070 instanceof Object)){
var ex__20122__auto__ = e38070;
var statearr_38071_38109 = state_38025;
(statearr_38071_38109[(5)] = ex__20122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38110 = state_38025;
state_38025 = G__38110;
continue;
} else {
return ret_value__20120__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20119__auto__ = function(state_38025){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20119__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20119__auto____1.call(this,state_38025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20119__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20119__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20119__auto__;
})()
;})(switch__20118__auto__,c__20183__auto__,msg_hist,msg_names,msg))
})();
var state__20185__auto__ = (function (){var statearr_38072 = f__20184__auto__.call(null);
(statearr_38072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20183__auto__);

return statearr_38072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20185__auto__);
});})(c__20183__auto__,msg_hist,msg_names,msg))
);

return c__20183__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20183__auto___38173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20183__auto___38173,ch){
return (function (){
var f__20184__auto__ = (function (){var switch__20118__auto__ = ((function (c__20183__auto___38173,ch){
return (function (state_38156){
var state_val_38157 = (state_38156[(1)]);
if((state_val_38157 === (1))){
var state_38156__$1 = state_38156;
var statearr_38158_38174 = state_38156__$1;
(statearr_38158_38174[(2)] = null);

(statearr_38158_38174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38157 === (2))){
var state_38156__$1 = state_38156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38156__$1,(4),ch);
} else {
if((state_val_38157 === (3))){
var inst_38154 = (state_38156[(2)]);
var state_38156__$1 = state_38156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38156__$1,inst_38154);
} else {
if((state_val_38157 === (4))){
var inst_38144 = (state_38156[(7)]);
var inst_38144__$1 = (state_38156[(2)]);
var state_38156__$1 = (function (){var statearr_38159 = state_38156;
(statearr_38159[(7)] = inst_38144__$1);

return statearr_38159;
})();
if(cljs.core.truth_(inst_38144__$1)){
var statearr_38160_38175 = state_38156__$1;
(statearr_38160_38175[(1)] = (5));

} else {
var statearr_38161_38176 = state_38156__$1;
(statearr_38161_38176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38157 === (5))){
var inst_38144 = (state_38156[(7)]);
var inst_38146 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38144);
var state_38156__$1 = state_38156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38156__$1,(8),inst_38146);
} else {
if((state_val_38157 === (6))){
var state_38156__$1 = state_38156;
var statearr_38162_38177 = state_38156__$1;
(statearr_38162_38177[(2)] = null);

(statearr_38162_38177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38157 === (7))){
var inst_38152 = (state_38156[(2)]);
var state_38156__$1 = state_38156;
var statearr_38163_38178 = state_38156__$1;
(statearr_38163_38178[(2)] = inst_38152);

(statearr_38163_38178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38157 === (8))){
var inst_38148 = (state_38156[(2)]);
var state_38156__$1 = (function (){var statearr_38164 = state_38156;
(statearr_38164[(8)] = inst_38148);

return statearr_38164;
})();
var statearr_38165_38179 = state_38156__$1;
(statearr_38165_38179[(2)] = null);

(statearr_38165_38179[(1)] = (2));


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
});})(c__20183__auto___38173,ch))
;
return ((function (switch__20118__auto__,c__20183__auto___38173,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20119__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20119__auto____0 = (function (){
var statearr_38169 = [null,null,null,null,null,null,null,null,null];
(statearr_38169[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20119__auto__);

(statearr_38169[(1)] = (1));

return statearr_38169;
});
var figwheel$client$heads_up_plugin_$_state_machine__20119__auto____1 = (function (state_38156){
while(true){
var ret_value__20120__auto__ = (function (){try{while(true){
var result__20121__auto__ = switch__20118__auto__.call(null,state_38156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20121__auto__;
}
break;
}
}catch (e38170){if((e38170 instanceof Object)){
var ex__20122__auto__ = e38170;
var statearr_38171_38180 = state_38156;
(statearr_38171_38180[(5)] = ex__20122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38181 = state_38156;
state_38156 = G__38181;
continue;
} else {
return ret_value__20120__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20119__auto__ = function(state_38156){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20119__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20119__auto____1.call(this,state_38156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20119__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20119__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20119__auto__;
})()
;})(switch__20118__auto__,c__20183__auto___38173,ch))
})();
var state__20185__auto__ = (function (){var statearr_38172 = f__20184__auto__.call(null);
(statearr_38172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20183__auto___38173);

return statearr_38172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20185__auto__);
});})(c__20183__auto___38173,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20183__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20183__auto__){
return (function (){
var f__20184__auto__ = (function (){var switch__20118__auto__ = ((function (c__20183__auto__){
return (function (state_38202){
var state_val_38203 = (state_38202[(1)]);
if((state_val_38203 === (1))){
var inst_38197 = cljs.core.async.timeout.call(null,(3000));
var state_38202__$1 = state_38202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38202__$1,(2),inst_38197);
} else {
if((state_val_38203 === (2))){
var inst_38199 = (state_38202[(2)]);
var inst_38200 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38202__$1 = (function (){var statearr_38204 = state_38202;
(statearr_38204[(7)] = inst_38199);

return statearr_38204;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38202__$1,inst_38200);
} else {
return null;
}
}
});})(c__20183__auto__))
;
return ((function (switch__20118__auto__,c__20183__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20119__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20119__auto____0 = (function (){
var statearr_38208 = [null,null,null,null,null,null,null,null];
(statearr_38208[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20119__auto__);

(statearr_38208[(1)] = (1));

return statearr_38208;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20119__auto____1 = (function (state_38202){
while(true){
var ret_value__20120__auto__ = (function (){try{while(true){
var result__20121__auto__ = switch__20118__auto__.call(null,state_38202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20121__auto__;
}
break;
}
}catch (e38209){if((e38209 instanceof Object)){
var ex__20122__auto__ = e38209;
var statearr_38210_38212 = state_38202;
(statearr_38210_38212[(5)] = ex__20122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38213 = state_38202;
state_38202 = G__38213;
continue;
} else {
return ret_value__20120__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20119__auto__ = function(state_38202){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20119__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20119__auto____1.call(this,state_38202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20119__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20119__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20119__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20119__auto__;
})()
;})(switch__20118__auto__,c__20183__auto__))
})();
var state__20185__auto__ = (function (){var statearr_38211 = f__20184__auto__.call(null);
(statearr_38211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20183__auto__);

return statearr_38211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20185__auto__);
});})(c__20183__auto__))
);

return c__20183__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38214){
var map__38221 = p__38214;
var map__38221__$1 = ((((!((map__38221 == null)))?((((map__38221.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38221.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38221):map__38221);
var ed = map__38221__$1;
var formatted_exception = cljs.core.get.call(null,map__38221__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38221__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38221__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38223_38227 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38224_38228 = null;
var count__38225_38229 = (0);
var i__38226_38230 = (0);
while(true){
if((i__38226_38230 < count__38225_38229)){
var msg_38231 = cljs.core._nth.call(null,chunk__38224_38228,i__38226_38230);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38231);

var G__38232 = seq__38223_38227;
var G__38233 = chunk__38224_38228;
var G__38234 = count__38225_38229;
var G__38235 = (i__38226_38230 + (1));
seq__38223_38227 = G__38232;
chunk__38224_38228 = G__38233;
count__38225_38229 = G__38234;
i__38226_38230 = G__38235;
continue;
} else {
var temp__4425__auto___38236 = cljs.core.seq.call(null,seq__38223_38227);
if(temp__4425__auto___38236){
var seq__38223_38237__$1 = temp__4425__auto___38236;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38223_38237__$1)){
var c__17147__auto___38238 = cljs.core.chunk_first.call(null,seq__38223_38237__$1);
var G__38239 = cljs.core.chunk_rest.call(null,seq__38223_38237__$1);
var G__38240 = c__17147__auto___38238;
var G__38241 = cljs.core.count.call(null,c__17147__auto___38238);
var G__38242 = (0);
seq__38223_38227 = G__38239;
chunk__38224_38228 = G__38240;
count__38225_38229 = G__38241;
i__38226_38230 = G__38242;
continue;
} else {
var msg_38243 = cljs.core.first.call(null,seq__38223_38237__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38243);

var G__38244 = cljs.core.next.call(null,seq__38223_38237__$1);
var G__38245 = null;
var G__38246 = (0);
var G__38247 = (0);
seq__38223_38227 = G__38244;
chunk__38224_38228 = G__38245;
count__38225_38229 = G__38246;
i__38226_38230 = G__38247;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38248){
var map__38251 = p__38248;
var map__38251__$1 = ((((!((map__38251 == null)))?((((map__38251.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38251.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38251):map__38251);
var w = map__38251__$1;
var message = cljs.core.get.call(null,map__38251__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16332__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16332__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16332__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__38259 = cljs.core.seq.call(null,plugins);
var chunk__38260 = null;
var count__38261 = (0);
var i__38262 = (0);
while(true){
if((i__38262 < count__38261)){
var vec__38263 = cljs.core._nth.call(null,chunk__38260,i__38262);
var k = cljs.core.nth.call(null,vec__38263,(0),null);
var plugin = cljs.core.nth.call(null,vec__38263,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38265 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38259,chunk__38260,count__38261,i__38262,pl_38265,vec__38263,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38265.call(null,msg_hist);
});})(seq__38259,chunk__38260,count__38261,i__38262,pl_38265,vec__38263,k,plugin))
);
} else {
}

var G__38266 = seq__38259;
var G__38267 = chunk__38260;
var G__38268 = count__38261;
var G__38269 = (i__38262 + (1));
seq__38259 = G__38266;
chunk__38260 = G__38267;
count__38261 = G__38268;
i__38262 = G__38269;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__38259);
if(temp__4425__auto__){
var seq__38259__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38259__$1)){
var c__17147__auto__ = cljs.core.chunk_first.call(null,seq__38259__$1);
var G__38270 = cljs.core.chunk_rest.call(null,seq__38259__$1);
var G__38271 = c__17147__auto__;
var G__38272 = cljs.core.count.call(null,c__17147__auto__);
var G__38273 = (0);
seq__38259 = G__38270;
chunk__38260 = G__38271;
count__38261 = G__38272;
i__38262 = G__38273;
continue;
} else {
var vec__38264 = cljs.core.first.call(null,seq__38259__$1);
var k = cljs.core.nth.call(null,vec__38264,(0),null);
var plugin = cljs.core.nth.call(null,vec__38264,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38274 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38259,chunk__38260,count__38261,i__38262,pl_38274,vec__38264,k,plugin,seq__38259__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38274.call(null,msg_hist);
});})(seq__38259,chunk__38260,count__38261,i__38262,pl_38274,vec__38264,k,plugin,seq__38259__$1,temp__4425__auto__))
);
} else {
}

var G__38275 = cljs.core.next.call(null,seq__38259__$1);
var G__38276 = null;
var G__38277 = (0);
var G__38278 = (0);
seq__38259 = G__38275;
chunk__38260 = G__38276;
count__38261 = G__38277;
i__38262 = G__38278;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args38279 = [];
var len__17402__auto___38282 = arguments.length;
var i__17403__auto___38283 = (0);
while(true){
if((i__17403__auto___38283 < len__17402__auto___38282)){
args38279.push((arguments[i__17403__auto___38283]));

var G__38284 = (i__17403__auto___38283 + (1));
i__17403__auto___38283 = G__38284;
continue;
} else {
}
break;
}

var G__38281 = args38279.length;
switch (G__38281) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38279.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17409__auto__ = [];
var len__17402__auto___38290 = arguments.length;
var i__17403__auto___38291 = (0);
while(true){
if((i__17403__auto___38291 < len__17402__auto___38290)){
args__17409__auto__.push((arguments[i__17403__auto___38291]));

var G__38292 = (i__17403__auto___38291 + (1));
i__17403__auto___38291 = G__38292;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((0) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17410__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38287){
var map__38288 = p__38287;
var map__38288__$1 = ((((!((map__38288 == null)))?((((map__38288.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38288.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38288):map__38288);
var opts = map__38288__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38286){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38286));
});

//# sourceMappingURL=client.js.map?rel=1446795342895