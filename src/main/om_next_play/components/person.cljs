(ns om-next-play.components.person
  (:require
    [cljs.test :refer-macros [is async]]
    [goog.dom :as gdom]
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]
    [datascript.core :as d]
    [sablono.core :as sab :include-macros true])
  (:require-macros
    [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)

(defui Person
       static om/Ident
       (ident [this {:keys [name dateOfBirth] :as props}]
              (println "person ident\n\n")
              [:person/by-name name] )
       static om/IQuery
       (query [this]
              (println "person query\n\n")
              [:name :dateOfBirth ])
       Object
       (render [this]
               (dom/div nil
                        (dom/h2 nil (-> this om/props :name))
                        (dom/label nil "Date of Birth:")
                        (dom/text nil (-> this om/props :dateOfBirth))
                        (dom/button nil "click here"))))

(def person (om/factory Person {:keyfn :name}))


(defcard test-person-component
         "Test basic workings of Person component"
         (person {:name "Fred Flintstone" :dateOfBirth "12-Jun-1911"}))

(deftest testPerson
         "Test for person"
         (is (= 1 1) "Random test thing"))


