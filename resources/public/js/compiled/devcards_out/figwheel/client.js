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
var pred__37694 = cljs.core._EQ_;
var expr__37695 = (function (){var or__16344__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__37694.call(null,"true",expr__37695))){
return true;
} else {
if(cljs.core.truth_(pred__37694.call(null,"false",expr__37695))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__37695)].join('')));
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
var G__37697__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__37697 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37698__i = 0, G__37698__a = new Array(arguments.length -  0);
while (G__37698__i < G__37698__a.length) {G__37698__a[G__37698__i] = arguments[G__37698__i + 0]; ++G__37698__i;}
  args = new cljs.core.IndexedSeq(G__37698__a,0);
} 
return G__37697__delegate.call(this,args);};
G__37697.cljs$lang$maxFixedArity = 0;
G__37697.cljs$lang$applyTo = (function (arglist__37699){
var args = cljs.core.seq(arglist__37699);
return G__37697__delegate(args);
});
G__37697.cljs$core$IFn$_invoke$arity$variadic = G__37697__delegate;
return G__37697;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37700){
var map__37703 = p__37700;
var map__37703__$1 = ((((!((map__37703 == null)))?((((map__37703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37703):map__37703);
var message = cljs.core.get.call(null,map__37703__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37703__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__20184__auto___37865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20184__auto___37865,ch){
return (function (){
var f__20185__auto__ = (function (){var switch__20119__auto__ = ((function (c__20184__auto___37865,ch){
return (function (state_37834){
var state_val_37835 = (state_37834[(1)]);
if((state_val_37835 === (7))){
var inst_37830 = (state_37834[(2)]);
var state_37834__$1 = state_37834;
var statearr_37836_37866 = state_37834__$1;
(statearr_37836_37866[(2)] = inst_37830);

(statearr_37836_37866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37835 === (1))){
var state_37834__$1 = state_37834;
var statearr_37837_37867 = state_37834__$1;
(statearr_37837_37867[(2)] = null);

(statearr_37837_37867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37835 === (4))){
var inst_37787 = (state_37834[(7)]);
var inst_37787__$1 = (state_37834[(2)]);
var state_37834__$1 = (function (){var statearr_37838 = state_37834;
(statearr_37838[(7)] = inst_37787__$1);

return statearr_37838;
})();
if(cljs.core.truth_(inst_37787__$1)){
var statearr_37839_37868 = state_37834__$1;
(statearr_37839_37868[(1)] = (5));

} else {
var statearr_37840_37869 = state_37834__$1;
(statearr_37840_37869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37835 === (15))){
var inst_37794 = (state_37834[(8)]);
var inst_37809 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37794);
var inst_37810 = cljs.core.first.call(null,inst_37809);
var inst_37811 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37810);
var inst_37812 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_37811)].join('');
var inst_37813 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37812);
var state_37834__$1 = state_37834;
var statearr_37841_37870 = state_37834__$1;
(statearr_37841_37870[(2)] = inst_37813);

(statearr_37841_37870[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37835 === (13))){
var inst_37818 = (state_37834[(2)]);
var state_37834__$1 = state_37834;
var statearr_37842_37871 = state_37834__$1;
(statearr_37842_37871[(2)] = inst_37818);

(statearr_37842_37871[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37835 === (6))){
var state_37834__$1 = state_37834;
var statearr_37843_37872 = state_37834__$1;
(statearr_37843_37872[(2)] = null);

(statearr_37843_37872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37835 === (17))){
var inst_37816 = (state_37834[(2)]);
var state_37834__$1 = state_37834;
var statearr_37844_37873 = state_37834__$1;
(statearr_37844_37873[(2)] = inst_37816);

(statearr_37844_37873[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37835 === (3))){
var inst_37832 = (state_37834[(2)]);
var state_37834__$1 = state_37834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37834__$1,inst_37832);
} else {
if((state_val_37835 === (12))){
var inst_37793 = (state_37834[(9)]);
var inst_37807 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37793,opts);
var state_37834__$1 = state_37834;
if(cljs.core.truth_(inst_37807)){
var statearr_37845_37874 = state_37834__$1;
(statearr_37845_37874[(1)] = (15));

} else {
var statearr_37846_37875 = state_37834__$1;
(statearr_37846_37875[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37835 === (2))){
var state_37834__$1 = state_37834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37834__$1,(4),ch);
} else {
if((state_val_37835 === (11))){
var inst_37794 = (state_37834[(8)]);
var inst_37799 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37800 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37794);
var inst_37801 = cljs.core.async.timeout.call(null,(1000));
var inst_37802 = [inst_37800,inst_37801];
var inst_37803 = (new cljs.core.PersistentVector(null,2,(5),inst_37799,inst_37802,null));
var state_37834__$1 = state_37834;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37834__$1,(14),inst_37803);
} else {
if((state_val_37835 === (9))){
var inst_37794 = (state_37834[(8)]);
var inst_37820 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37821 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37794);
var inst_37822 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37821);
var inst_37823 = [cljs.core.str("Not loading: "),cljs.core.str(inst_37822)].join('');
var inst_37824 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37823);
var state_37834__$1 = (function (){var statearr_37847 = state_37834;
(statearr_37847[(10)] = inst_37820);

return statearr_37847;
})();
var statearr_37848_37876 = state_37834__$1;
(statearr_37848_37876[(2)] = inst_37824);

(statearr_37848_37876[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37835 === (5))){
var inst_37787 = (state_37834[(7)]);
var inst_37789 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37790 = (new cljs.core.PersistentArrayMap(null,2,inst_37789,null));
var inst_37791 = (new cljs.core.PersistentHashSet(null,inst_37790,null));
var inst_37792 = figwheel.client.focus_msgs.call(null,inst_37791,inst_37787);
var inst_37793 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37792);
var inst_37794 = cljs.core.first.call(null,inst_37792);
var inst_37795 = figwheel.client.autoload_QMARK_.call(null);
var state_37834__$1 = (function (){var statearr_37849 = state_37834;
(statearr_37849[(9)] = inst_37793);

(statearr_37849[(8)] = inst_37794);

return statearr_37849;
})();
if(cljs.core.truth_(inst_37795)){
var statearr_37850_37877 = state_37834__$1;
(statearr_37850_37877[(1)] = (8));

} else {
var statearr_37851_37878 = state_37834__$1;
(statearr_37851_37878[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37835 === (14))){
var inst_37805 = (state_37834[(2)]);
var state_37834__$1 = state_37834;
var statearr_37852_37879 = state_37834__$1;
(statearr_37852_37879[(2)] = inst_37805);

(statearr_37852_37879[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37835 === (16))){
var state_37834__$1 = state_37834;
var statearr_37853_37880 = state_37834__$1;
(statearr_37853_37880[(2)] = null);

(statearr_37853_37880[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37835 === (10))){
var inst_37826 = (state_37834[(2)]);
var state_37834__$1 = (function (){var statearr_37854 = state_37834;
(statearr_37854[(11)] = inst_37826);

return statearr_37854;
})();
var statearr_37855_37881 = state_37834__$1;
(statearr_37855_37881[(2)] = null);

(statearr_37855_37881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37835 === (8))){
var inst_37793 = (state_37834[(9)]);
var inst_37797 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37793,opts);
var state_37834__$1 = state_37834;
if(cljs.core.truth_(inst_37797)){
var statearr_37856_37882 = state_37834__$1;
(statearr_37856_37882[(1)] = (11));

} else {
var statearr_37857_37883 = state_37834__$1;
(statearr_37857_37883[(1)] = (12));

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
});})(c__20184__auto___37865,ch))
;
return ((function (switch__20119__auto__,c__20184__auto___37865,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20120__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20120__auto____0 = (function (){
var statearr_37861 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37861[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20120__auto__);

(statearr_37861[(1)] = (1));

return statearr_37861;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20120__auto____1 = (function (state_37834){
while(true){
var ret_value__20121__auto__ = (function (){try{while(true){
var result__20122__auto__ = switch__20119__auto__.call(null,state_37834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20122__auto__;
}
break;
}
}catch (e37862){if((e37862 instanceof Object)){
var ex__20123__auto__ = e37862;
var statearr_37863_37884 = state_37834;
(statearr_37863_37884[(5)] = ex__20123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37885 = state_37834;
state_37834 = G__37885;
continue;
} else {
return ret_value__20121__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20120__auto__ = function(state_37834){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20120__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20120__auto____1.call(this,state_37834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20120__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20120__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20120__auto__;
})()
;})(switch__20119__auto__,c__20184__auto___37865,ch))
})();
var state__20186__auto__ = (function (){var statearr_37864 = f__20185__auto__.call(null);
(statearr_37864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20184__auto___37865);

return statearr_37864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20186__auto__);
});})(c__20184__auto___37865,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37886_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37886_SHARP_));
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
var base_path_37893 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37893){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_37891 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_37892 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_37891,_STAR_print_newline_STAR_37892,base_path_37893){
return (function() { 
var G__37894__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__37894 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37895__i = 0, G__37895__a = new Array(arguments.length -  0);
while (G__37895__i < G__37895__a.length) {G__37895__a[G__37895__i] = arguments[G__37895__i + 0]; ++G__37895__i;}
  args = new cljs.core.IndexedSeq(G__37895__a,0);
} 
return G__37894__delegate.call(this,args);};
G__37894.cljs$lang$maxFixedArity = 0;
G__37894.cljs$lang$applyTo = (function (arglist__37896){
var args = cljs.core.seq(arglist__37896);
return G__37894__delegate(args);
});
G__37894.cljs$core$IFn$_invoke$arity$variadic = G__37894__delegate;
return G__37894;
})()
;})(_STAR_print_fn_STAR_37891,_STAR_print_newline_STAR_37892,base_path_37893))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_37892;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_37891;
}}catch (e37890){if((e37890 instanceof Error)){
var e = e37890;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37893], null));
} else {
var e = e37890;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_37893))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37897){
var map__37904 = p__37897;
var map__37904__$1 = ((((!((map__37904 == null)))?((((map__37904.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37904.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37904):map__37904);
var opts = map__37904__$1;
var build_id = cljs.core.get.call(null,map__37904__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37904,map__37904__$1,opts,build_id){
return (function (p__37906){
var vec__37907 = p__37906;
var map__37908 = cljs.core.nth.call(null,vec__37907,(0),null);
var map__37908__$1 = ((((!((map__37908 == null)))?((((map__37908.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37908.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37908):map__37908);
var msg = map__37908__$1;
var msg_name = cljs.core.get.call(null,map__37908__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__37907,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37907,map__37908,map__37908__$1,msg,msg_name,_,map__37904,map__37904__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37907,map__37908,map__37908__$1,msg,msg_name,_,map__37904,map__37904__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37904,map__37904__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37914){
var vec__37915 = p__37914;
var map__37916 = cljs.core.nth.call(null,vec__37915,(0),null);
var map__37916__$1 = ((((!((map__37916 == null)))?((((map__37916.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37916.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37916):map__37916);
var msg = map__37916__$1;
var msg_name = cljs.core.get.call(null,map__37916__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__37915,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37918){
var map__37928 = p__37918;
var map__37928__$1 = ((((!((map__37928 == null)))?((((map__37928.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37928.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37928):map__37928);
var on_compile_warning = cljs.core.get.call(null,map__37928__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37928__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37928,map__37928__$1,on_compile_warning,on_compile_fail){
return (function (p__37930){
var vec__37931 = p__37930;
var map__37932 = cljs.core.nth.call(null,vec__37931,(0),null);
var map__37932__$1 = ((((!((map__37932 == null)))?((((map__37932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37932):map__37932);
var msg = map__37932__$1;
var msg_name = cljs.core.get.call(null,map__37932__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__37931,(1));
var pred__37934 = cljs.core._EQ_;
var expr__37935 = msg_name;
if(cljs.core.truth_(pred__37934.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37935))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37934.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37935))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37928,map__37928__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20184__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20185__auto__ = (function (){var switch__20119__auto__ = ((function (c__20184__auto__,msg_hist,msg_names,msg){
return (function (state_38151){
var state_val_38152 = (state_38151[(1)]);
if((state_val_38152 === (7))){
var inst_38075 = (state_38151[(2)]);
var state_38151__$1 = state_38151;
if(cljs.core.truth_(inst_38075)){
var statearr_38153_38199 = state_38151__$1;
(statearr_38153_38199[(1)] = (8));

} else {
var statearr_38154_38200 = state_38151__$1;
(statearr_38154_38200[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (20))){
var inst_38145 = (state_38151[(2)]);
var state_38151__$1 = state_38151;
var statearr_38155_38201 = state_38151__$1;
(statearr_38155_38201[(2)] = inst_38145);

(statearr_38155_38201[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (27))){
var inst_38141 = (state_38151[(2)]);
var state_38151__$1 = state_38151;
var statearr_38156_38202 = state_38151__$1;
(statearr_38156_38202[(2)] = inst_38141);

(statearr_38156_38202[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (1))){
var inst_38068 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38151__$1 = state_38151;
if(cljs.core.truth_(inst_38068)){
var statearr_38157_38203 = state_38151__$1;
(statearr_38157_38203[(1)] = (2));

} else {
var statearr_38158_38204 = state_38151__$1;
(statearr_38158_38204[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (24))){
var inst_38143 = (state_38151[(2)]);
var state_38151__$1 = state_38151;
var statearr_38159_38205 = state_38151__$1;
(statearr_38159_38205[(2)] = inst_38143);

(statearr_38159_38205[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (4))){
var inst_38149 = (state_38151[(2)]);
var state_38151__$1 = state_38151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38151__$1,inst_38149);
} else {
if((state_val_38152 === (15))){
var inst_38147 = (state_38151[(2)]);
var state_38151__$1 = state_38151;
var statearr_38160_38206 = state_38151__$1;
(statearr_38160_38206[(2)] = inst_38147);

(statearr_38160_38206[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (21))){
var inst_38106 = (state_38151[(2)]);
var state_38151__$1 = state_38151;
var statearr_38161_38207 = state_38151__$1;
(statearr_38161_38207[(2)] = inst_38106);

(statearr_38161_38207[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (31))){
var inst_38130 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38151__$1 = state_38151;
if(cljs.core.truth_(inst_38130)){
var statearr_38162_38208 = state_38151__$1;
(statearr_38162_38208[(1)] = (34));

} else {
var statearr_38163_38209 = state_38151__$1;
(statearr_38163_38209[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (32))){
var inst_38139 = (state_38151[(2)]);
var state_38151__$1 = state_38151;
var statearr_38164_38210 = state_38151__$1;
(statearr_38164_38210[(2)] = inst_38139);

(statearr_38164_38210[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (33))){
var inst_38128 = (state_38151[(2)]);
var state_38151__$1 = state_38151;
var statearr_38165_38211 = state_38151__$1;
(statearr_38165_38211[(2)] = inst_38128);

(statearr_38165_38211[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (13))){
var inst_38089 = figwheel.client.heads_up.clear.call(null);
var state_38151__$1 = state_38151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38151__$1,(16),inst_38089);
} else {
if((state_val_38152 === (22))){
var inst_38110 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38111 = figwheel.client.heads_up.append_message.call(null,inst_38110);
var state_38151__$1 = state_38151;
var statearr_38166_38212 = state_38151__$1;
(statearr_38166_38212[(2)] = inst_38111);

(statearr_38166_38212[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (36))){
var inst_38137 = (state_38151[(2)]);
var state_38151__$1 = state_38151;
var statearr_38167_38213 = state_38151__$1;
(statearr_38167_38213[(2)] = inst_38137);

(statearr_38167_38213[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (29))){
var inst_38121 = (state_38151[(2)]);
var state_38151__$1 = state_38151;
var statearr_38168_38214 = state_38151__$1;
(statearr_38168_38214[(2)] = inst_38121);

(statearr_38168_38214[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (6))){
var inst_38070 = (state_38151[(7)]);
var state_38151__$1 = state_38151;
var statearr_38169_38215 = state_38151__$1;
(statearr_38169_38215[(2)] = inst_38070);

(statearr_38169_38215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (28))){
var inst_38117 = (state_38151[(2)]);
var inst_38118 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38119 = figwheel.client.heads_up.display_warning.call(null,inst_38118);
var state_38151__$1 = (function (){var statearr_38170 = state_38151;
(statearr_38170[(8)] = inst_38117);

return statearr_38170;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38151__$1,(29),inst_38119);
} else {
if((state_val_38152 === (25))){
var inst_38115 = figwheel.client.heads_up.clear.call(null);
var state_38151__$1 = state_38151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38151__$1,(28),inst_38115);
} else {
if((state_val_38152 === (34))){
var inst_38132 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38151__$1 = state_38151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38151__$1,(37),inst_38132);
} else {
if((state_val_38152 === (17))){
var inst_38097 = (state_38151[(2)]);
var state_38151__$1 = state_38151;
var statearr_38171_38216 = state_38151__$1;
(statearr_38171_38216[(2)] = inst_38097);

(statearr_38171_38216[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (3))){
var inst_38087 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38151__$1 = state_38151;
if(cljs.core.truth_(inst_38087)){
var statearr_38172_38217 = state_38151__$1;
(statearr_38172_38217[(1)] = (13));

} else {
var statearr_38173_38218 = state_38151__$1;
(statearr_38173_38218[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (12))){
var inst_38083 = (state_38151[(2)]);
var state_38151__$1 = state_38151;
var statearr_38174_38219 = state_38151__$1;
(statearr_38174_38219[(2)] = inst_38083);

(statearr_38174_38219[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (2))){
var inst_38070 = (state_38151[(7)]);
var inst_38070__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38151__$1 = (function (){var statearr_38175 = state_38151;
(statearr_38175[(7)] = inst_38070__$1);

return statearr_38175;
})();
if(cljs.core.truth_(inst_38070__$1)){
var statearr_38176_38220 = state_38151__$1;
(statearr_38176_38220[(1)] = (5));

} else {
var statearr_38177_38221 = state_38151__$1;
(statearr_38177_38221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (23))){
var inst_38113 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38151__$1 = state_38151;
if(cljs.core.truth_(inst_38113)){
var statearr_38178_38222 = state_38151__$1;
(statearr_38178_38222[(1)] = (25));

} else {
var statearr_38179_38223 = state_38151__$1;
(statearr_38179_38223[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (35))){
var state_38151__$1 = state_38151;
var statearr_38180_38224 = state_38151__$1;
(statearr_38180_38224[(2)] = null);

(statearr_38180_38224[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (19))){
var inst_38108 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38151__$1 = state_38151;
if(cljs.core.truth_(inst_38108)){
var statearr_38181_38225 = state_38151__$1;
(statearr_38181_38225[(1)] = (22));

} else {
var statearr_38182_38226 = state_38151__$1;
(statearr_38182_38226[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (11))){
var inst_38079 = (state_38151[(2)]);
var state_38151__$1 = state_38151;
var statearr_38183_38227 = state_38151__$1;
(statearr_38183_38227[(2)] = inst_38079);

(statearr_38183_38227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (9))){
var inst_38081 = figwheel.client.heads_up.clear.call(null);
var state_38151__$1 = state_38151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38151__$1,(12),inst_38081);
} else {
if((state_val_38152 === (5))){
var inst_38072 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38151__$1 = state_38151;
var statearr_38184_38228 = state_38151__$1;
(statearr_38184_38228[(2)] = inst_38072);

(statearr_38184_38228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (14))){
var inst_38099 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38151__$1 = state_38151;
if(cljs.core.truth_(inst_38099)){
var statearr_38185_38229 = state_38151__$1;
(statearr_38185_38229[(1)] = (18));

} else {
var statearr_38186_38230 = state_38151__$1;
(statearr_38186_38230[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (26))){
var inst_38123 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38151__$1 = state_38151;
if(cljs.core.truth_(inst_38123)){
var statearr_38187_38231 = state_38151__$1;
(statearr_38187_38231[(1)] = (30));

} else {
var statearr_38188_38232 = state_38151__$1;
(statearr_38188_38232[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (16))){
var inst_38091 = (state_38151[(2)]);
var inst_38092 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38093 = figwheel.client.format_messages.call(null,inst_38092);
var inst_38094 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38095 = figwheel.client.heads_up.display_error.call(null,inst_38093,inst_38094);
var state_38151__$1 = (function (){var statearr_38189 = state_38151;
(statearr_38189[(9)] = inst_38091);

return statearr_38189;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38151__$1,(17),inst_38095);
} else {
if((state_val_38152 === (30))){
var inst_38125 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38126 = figwheel.client.heads_up.display_warning.call(null,inst_38125);
var state_38151__$1 = state_38151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38151__$1,(33),inst_38126);
} else {
if((state_val_38152 === (10))){
var inst_38085 = (state_38151[(2)]);
var state_38151__$1 = state_38151;
var statearr_38190_38233 = state_38151__$1;
(statearr_38190_38233[(2)] = inst_38085);

(statearr_38190_38233[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (18))){
var inst_38101 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38102 = figwheel.client.format_messages.call(null,inst_38101);
var inst_38103 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38104 = figwheel.client.heads_up.display_error.call(null,inst_38102,inst_38103);
var state_38151__$1 = state_38151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38151__$1,(21),inst_38104);
} else {
if((state_val_38152 === (37))){
var inst_38134 = (state_38151[(2)]);
var state_38151__$1 = state_38151;
var statearr_38191_38234 = state_38151__$1;
(statearr_38191_38234[(2)] = inst_38134);

(statearr_38191_38234[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (8))){
var inst_38077 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38151__$1 = state_38151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38151__$1,(11),inst_38077);
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
});})(c__20184__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20119__auto__,c__20184__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20120__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20120__auto____0 = (function (){
var statearr_38195 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38195[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20120__auto__);

(statearr_38195[(1)] = (1));

return statearr_38195;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20120__auto____1 = (function (state_38151){
while(true){
var ret_value__20121__auto__ = (function (){try{while(true){
var result__20122__auto__ = switch__20119__auto__.call(null,state_38151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20122__auto__;
}
break;
}
}catch (e38196){if((e38196 instanceof Object)){
var ex__20123__auto__ = e38196;
var statearr_38197_38235 = state_38151;
(statearr_38197_38235[(5)] = ex__20123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38236 = state_38151;
state_38151 = G__38236;
continue;
} else {
return ret_value__20121__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20120__auto__ = function(state_38151){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20120__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20120__auto____1.call(this,state_38151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20120__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20120__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20120__auto__;
})()
;})(switch__20119__auto__,c__20184__auto__,msg_hist,msg_names,msg))
})();
var state__20186__auto__ = (function (){var statearr_38198 = f__20185__auto__.call(null);
(statearr_38198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20184__auto__);

return statearr_38198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20186__auto__);
});})(c__20184__auto__,msg_hist,msg_names,msg))
);

return c__20184__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20184__auto___38299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20184__auto___38299,ch){
return (function (){
var f__20185__auto__ = (function (){var switch__20119__auto__ = ((function (c__20184__auto___38299,ch){
return (function (state_38282){
var state_val_38283 = (state_38282[(1)]);
if((state_val_38283 === (1))){
var state_38282__$1 = state_38282;
var statearr_38284_38300 = state_38282__$1;
(statearr_38284_38300[(2)] = null);

(statearr_38284_38300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38283 === (2))){
var state_38282__$1 = state_38282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38282__$1,(4),ch);
} else {
if((state_val_38283 === (3))){
var inst_38280 = (state_38282[(2)]);
var state_38282__$1 = state_38282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38282__$1,inst_38280);
} else {
if((state_val_38283 === (4))){
var inst_38270 = (state_38282[(7)]);
var inst_38270__$1 = (state_38282[(2)]);
var state_38282__$1 = (function (){var statearr_38285 = state_38282;
(statearr_38285[(7)] = inst_38270__$1);

return statearr_38285;
})();
if(cljs.core.truth_(inst_38270__$1)){
var statearr_38286_38301 = state_38282__$1;
(statearr_38286_38301[(1)] = (5));

} else {
var statearr_38287_38302 = state_38282__$1;
(statearr_38287_38302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38283 === (5))){
var inst_38270 = (state_38282[(7)]);
var inst_38272 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38270);
var state_38282__$1 = state_38282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38282__$1,(8),inst_38272);
} else {
if((state_val_38283 === (6))){
var state_38282__$1 = state_38282;
var statearr_38288_38303 = state_38282__$1;
(statearr_38288_38303[(2)] = null);

(statearr_38288_38303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38283 === (7))){
var inst_38278 = (state_38282[(2)]);
var state_38282__$1 = state_38282;
var statearr_38289_38304 = state_38282__$1;
(statearr_38289_38304[(2)] = inst_38278);

(statearr_38289_38304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38283 === (8))){
var inst_38274 = (state_38282[(2)]);
var state_38282__$1 = (function (){var statearr_38290 = state_38282;
(statearr_38290[(8)] = inst_38274);

return statearr_38290;
})();
var statearr_38291_38305 = state_38282__$1;
(statearr_38291_38305[(2)] = null);

(statearr_38291_38305[(1)] = (2));


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
});})(c__20184__auto___38299,ch))
;
return ((function (switch__20119__auto__,c__20184__auto___38299,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20120__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20120__auto____0 = (function (){
var statearr_38295 = [null,null,null,null,null,null,null,null,null];
(statearr_38295[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20120__auto__);

(statearr_38295[(1)] = (1));

return statearr_38295;
});
var figwheel$client$heads_up_plugin_$_state_machine__20120__auto____1 = (function (state_38282){
while(true){
var ret_value__20121__auto__ = (function (){try{while(true){
var result__20122__auto__ = switch__20119__auto__.call(null,state_38282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20122__auto__;
}
break;
}
}catch (e38296){if((e38296 instanceof Object)){
var ex__20123__auto__ = e38296;
var statearr_38297_38306 = state_38282;
(statearr_38297_38306[(5)] = ex__20123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38307 = state_38282;
state_38282 = G__38307;
continue;
} else {
return ret_value__20121__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20120__auto__ = function(state_38282){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20120__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20120__auto____1.call(this,state_38282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20120__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20120__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20120__auto__;
})()
;})(switch__20119__auto__,c__20184__auto___38299,ch))
})();
var state__20186__auto__ = (function (){var statearr_38298 = f__20185__auto__.call(null);
(statearr_38298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20184__auto___38299);

return statearr_38298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20186__auto__);
});})(c__20184__auto___38299,ch))
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
var c__20184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20184__auto__){
return (function (){
var f__20185__auto__ = (function (){var switch__20119__auto__ = ((function (c__20184__auto__){
return (function (state_38328){
var state_val_38329 = (state_38328[(1)]);
if((state_val_38329 === (1))){
var inst_38323 = cljs.core.async.timeout.call(null,(3000));
var state_38328__$1 = state_38328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38328__$1,(2),inst_38323);
} else {
if((state_val_38329 === (2))){
var inst_38325 = (state_38328[(2)]);
var inst_38326 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38328__$1 = (function (){var statearr_38330 = state_38328;
(statearr_38330[(7)] = inst_38325);

return statearr_38330;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38328__$1,inst_38326);
} else {
return null;
}
}
});})(c__20184__auto__))
;
return ((function (switch__20119__auto__,c__20184__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20120__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20120__auto____0 = (function (){
var statearr_38334 = [null,null,null,null,null,null,null,null];
(statearr_38334[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20120__auto__);

(statearr_38334[(1)] = (1));

return statearr_38334;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20120__auto____1 = (function (state_38328){
while(true){
var ret_value__20121__auto__ = (function (){try{while(true){
var result__20122__auto__ = switch__20119__auto__.call(null,state_38328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20122__auto__;
}
break;
}
}catch (e38335){if((e38335 instanceof Object)){
var ex__20123__auto__ = e38335;
var statearr_38336_38338 = state_38328;
(statearr_38336_38338[(5)] = ex__20123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38339 = state_38328;
state_38328 = G__38339;
continue;
} else {
return ret_value__20121__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20120__auto__ = function(state_38328){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20120__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20120__auto____1.call(this,state_38328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20120__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20120__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20120__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20120__auto__;
})()
;})(switch__20119__auto__,c__20184__auto__))
})();
var state__20186__auto__ = (function (){var statearr_38337 = f__20185__auto__.call(null);
(statearr_38337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20184__auto__);

return statearr_38337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20186__auto__);
});})(c__20184__auto__))
);

return c__20184__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38340){
var map__38347 = p__38340;
var map__38347__$1 = ((((!((map__38347 == null)))?((((map__38347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38347):map__38347);
var ed = map__38347__$1;
var formatted_exception = cljs.core.get.call(null,map__38347__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38347__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38347__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38349_38353 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38350_38354 = null;
var count__38351_38355 = (0);
var i__38352_38356 = (0);
while(true){
if((i__38352_38356 < count__38351_38355)){
var msg_38357 = cljs.core._nth.call(null,chunk__38350_38354,i__38352_38356);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38357);

var G__38358 = seq__38349_38353;
var G__38359 = chunk__38350_38354;
var G__38360 = count__38351_38355;
var G__38361 = (i__38352_38356 + (1));
seq__38349_38353 = G__38358;
chunk__38350_38354 = G__38359;
count__38351_38355 = G__38360;
i__38352_38356 = G__38361;
continue;
} else {
var temp__4425__auto___38362 = cljs.core.seq.call(null,seq__38349_38353);
if(temp__4425__auto___38362){
var seq__38349_38363__$1 = temp__4425__auto___38362;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38349_38363__$1)){
var c__17147__auto___38364 = cljs.core.chunk_first.call(null,seq__38349_38363__$1);
var G__38365 = cljs.core.chunk_rest.call(null,seq__38349_38363__$1);
var G__38366 = c__17147__auto___38364;
var G__38367 = cljs.core.count.call(null,c__17147__auto___38364);
var G__38368 = (0);
seq__38349_38353 = G__38365;
chunk__38350_38354 = G__38366;
count__38351_38355 = G__38367;
i__38352_38356 = G__38368;
continue;
} else {
var msg_38369 = cljs.core.first.call(null,seq__38349_38363__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38369);

var G__38370 = cljs.core.next.call(null,seq__38349_38363__$1);
var G__38371 = null;
var G__38372 = (0);
var G__38373 = (0);
seq__38349_38353 = G__38370;
chunk__38350_38354 = G__38371;
count__38351_38355 = G__38372;
i__38352_38356 = G__38373;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38374){
var map__38377 = p__38374;
var map__38377__$1 = ((((!((map__38377 == null)))?((((map__38377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38377):map__38377);
var w = map__38377__$1;
var message = cljs.core.get.call(null,map__38377__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__38385 = cljs.core.seq.call(null,plugins);
var chunk__38386 = null;
var count__38387 = (0);
var i__38388 = (0);
while(true){
if((i__38388 < count__38387)){
var vec__38389 = cljs.core._nth.call(null,chunk__38386,i__38388);
var k = cljs.core.nth.call(null,vec__38389,(0),null);
var plugin = cljs.core.nth.call(null,vec__38389,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38391 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38385,chunk__38386,count__38387,i__38388,pl_38391,vec__38389,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38391.call(null,msg_hist);
});})(seq__38385,chunk__38386,count__38387,i__38388,pl_38391,vec__38389,k,plugin))
);
} else {
}

var G__38392 = seq__38385;
var G__38393 = chunk__38386;
var G__38394 = count__38387;
var G__38395 = (i__38388 + (1));
seq__38385 = G__38392;
chunk__38386 = G__38393;
count__38387 = G__38394;
i__38388 = G__38395;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__38385);
if(temp__4425__auto__){
var seq__38385__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38385__$1)){
var c__17147__auto__ = cljs.core.chunk_first.call(null,seq__38385__$1);
var G__38396 = cljs.core.chunk_rest.call(null,seq__38385__$1);
var G__38397 = c__17147__auto__;
var G__38398 = cljs.core.count.call(null,c__17147__auto__);
var G__38399 = (0);
seq__38385 = G__38396;
chunk__38386 = G__38397;
count__38387 = G__38398;
i__38388 = G__38399;
continue;
} else {
var vec__38390 = cljs.core.first.call(null,seq__38385__$1);
var k = cljs.core.nth.call(null,vec__38390,(0),null);
var plugin = cljs.core.nth.call(null,vec__38390,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38400 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38385,chunk__38386,count__38387,i__38388,pl_38400,vec__38390,k,plugin,seq__38385__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38400.call(null,msg_hist);
});})(seq__38385,chunk__38386,count__38387,i__38388,pl_38400,vec__38390,k,plugin,seq__38385__$1,temp__4425__auto__))
);
} else {
}

var G__38401 = cljs.core.next.call(null,seq__38385__$1);
var G__38402 = null;
var G__38403 = (0);
var G__38404 = (0);
seq__38385 = G__38401;
chunk__38386 = G__38402;
count__38387 = G__38403;
i__38388 = G__38404;
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
var args38405 = [];
var len__17402__auto___38408 = arguments.length;
var i__17403__auto___38409 = (0);
while(true){
if((i__17403__auto___38409 < len__17402__auto___38408)){
args38405.push((arguments[i__17403__auto___38409]));

var G__38410 = (i__17403__auto___38409 + (1));
i__17403__auto___38409 = G__38410;
continue;
} else {
}
break;
}

var G__38407 = args38405.length;
switch (G__38407) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38405.length)].join('')));

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
var len__17402__auto___38416 = arguments.length;
var i__17403__auto___38417 = (0);
while(true){
if((i__17403__auto___38417 < len__17402__auto___38416)){
args__17409__auto__.push((arguments[i__17403__auto___38417]));

var G__38418 = (i__17403__auto___38417 + (1));
i__17403__auto___38417 = G__38418;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((0) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17410__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38413){
var map__38414 = p__38413;
var map__38414__$1 = ((((!((map__38414 == null)))?((((map__38414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38414):map__38414);
var opts = map__38414__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38412){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38412));
});

//# sourceMappingURL=client.js.map?rel=1446794916433