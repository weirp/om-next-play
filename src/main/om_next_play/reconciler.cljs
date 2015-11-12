(ns om-next-play.reconciler
  (:require [om.next :as om]
            [om-next-play.state :refer [merged-data]]
            ;[perx2.util :as util]
            ;)
))


(def initial-state
  {:users [{:id 1 :username "pjw" :name "Philip"}
           {:id 2 :username "rjpw"  :name "Roslyn"}
           {:id 3 :username "grw" :name "Giselle"}
           {:id 4 :username "sew" :name "Seraphine"}]
   :list/one [{:id 1 :username "j" :name "John" :points 0}
              {:id 2 :username "m" :name "Mary" :points 0}
              {:id 3 :username "b" :name "Bob"  :points 0}]
   :list/two [{:id 2 :username "m" :name "Mary" :points 0 :age 27}
              {:id 4 :username "g" :name "Gwen" :points 0}
              {:id 5 :username "j" :name "Jeff" :points 0}]
   :count 1234
   })

(enable-console-print!)
(println "load reconciler")

(defmulti read om/dispatch)

(defmulti mutate om/dispatch)

(def parser
  (om/parser {:read read :mutate mutate}))

(def reconciler
  (om/reconciler {
                  :state merged-data
                  :parser (om/parser {:read read :mutate mutate})
                  ;:merge-tree merge
                  ;:send (util/transit-post "/api")
                  }))

;(def user-reconciler
;  (om/reconciler {:state merged-data
;                  :parser (om/parser {:read read :mutate mutate})}))
