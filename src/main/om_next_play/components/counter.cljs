(ns om-next-play.components.counter
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [om-next-play.reconciler :refer [reconciler read mutate]]))


(enable-console-print!)



(defmethod mutate 'app/increment-count
  [{:keys [state]} _ {:keys [countt]}]
  {:remote false
    :value [:count]
   :action (fn [] (swap! state update :count inc))})


(defmethod read :count
  [{:keys [state] :as env} _ {:keys [remote?]}]
  (let [st @state]
    (if-let [v (get st :count)]
      {:value v}                                                    ; {:value v :remote false}
      {}                                                    ; {:remote false}
      )))

(defmethod read :users
  [env key params]
  {})

(defui Counter
       static om/IQuery
       (query [this]
              (println "counter query\n\n")
              ;[:count {:users [:name]}]
              [:count]
              )
       Object
       (render [this]
               (println "render counter!!!")
               (dom/div nil
                        (dom/h2 nil "counter")
                        (let [{:keys [count]} (om/props this)]
                          (dom/div nil
                                   (dom/span nil (str "Count: " count))
                                   (dom/button
                                     #js {:onClick
                                          (fn [e]
                                            ;(swap! app-state update-in [:count] inc)
                                            (om/transact! this `[(app/increment-count {}) ])
                                            )}
                                     "Click me!"))))))
