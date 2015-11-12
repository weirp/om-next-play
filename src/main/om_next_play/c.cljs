(ns om-next-play.c
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(enable-console-print!)

(println "Here I am!")

(defui Hello
       Object
       (render [this]
               (println "rendering Hello" (om/props this))
               (dom/div nil
                        (dom/h1 nil "xxxx")
                        (dom/label nil ((om/props this) :title) ))))

(def hello (om/factory Hello ))


(def p
  (om/parser
    {:read   (fn [_ _ _] {:quote true})
     :mutate (fn [_ _ _] {:quote true})}))

(def r
  (om/reconciler
    {:parser p
     :state {}
     :ui->ref (fn [c] (-> c om/props :id))
     }
    ))

(def app-state (atom {:count 0}))

(defui Counter
       static om/IQuery
       (query [this]
              (println "counter query\n\n")
              [:count ])
       Object
       (render [this]
               (let [{:keys [count]} (om/props this)]
                 (dom/div nil
                          (dom/span nil (str "Count: " count))
                          (dom/button
                            #js {:onClick
                                 (fn [e]
                                   (swap! app-state update-in [:count] inc))}
                            "Click me!")))))

(def reconciler
  (om/reconciler {:state app-state}))

(om/add-root! r
              Counter (gdom/getElement "app"))


;(def reconciler
;  (om/reconciler {:state app-state}))
;
;(om.next/add-root! reconciler
;                   Hello
;                   (gdom/getElement "app"))

;(js/React.render
;  (apply dom/div nil
;         (map #(hello {:title (str "Hello " %)})
;              (range 3)))
;  (gdom/getElement "app"))