(ns om-next-play.devcards
  (:require
    [cljs.test :refer-macros [is async]]
    [goog.dom :as gdom]
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]
    [datascript.core :as d]
    [sablono.core :as sab :include-macros true]
    [om-next-play.core :refer [hello Hello]])
  (:require-macros
    [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)

(defcard first-card
         (sab/html [:div
                    [:h1 "First devcard (in devcards src folder!"]]))


(defcard simple-component
         "Test that Om Next component work as regular React components."
         (hello {:text "Hello, world!"}))

(def p
  (om/parser
    {:read   (fn [_ _ _] {:quote true})
     :mutate (fn [_ _ _] {:quote true})}))

(def r
  (om/reconciler
    {:parser p
     :ui->ref (fn [c] (-> c om/props :id))}))

(defui Binder
       Object
       (componentDidMount [this]
                          (let [indexes @(get-in (-> this om/props :reconciler) [:config :indexer])]
                            (om/update-state! this assoc :indexes indexes)))
       (render [this]
               (binding [om/*reconciler* (-> this om/props :reconciler)]
                 (apply dom/div nil
                        (hello {:id 0 :text "Goodbye, world!"})
                        (when-let [indexes (get-in (om/get-state this)
                                                   [:indexes :ref->components])]
                          [(dom/p nil (pr-str indexes))])))))

(def binder (om/factory Binder))

;(defcard basic-nested-component
;         "Test that component nesting works"
;         (binder {:reconciler r}))
;
;(deftest test-indexer
;         "Test indexer"
;         (let [idxr (get-in r [:config :indexer])]
;           (is (not (nil? idxr)) "Indexer is not nil in the reconciler")
;           (is (not (nil? @idxr)) "Indexer is IDeref")))


(defn main []
  ;; conditionally start the app based on wether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (js/React.render (sab/html [:div "This is working (from devcards src folder)"]) node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html