(ns om-next-play.components.card
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

(defui Card

       Object
       (render [this]
               (dom/div nil
                        (dom/h2 nil (-> this om/props :name))
                        (dom/button nil "xtxtxtx"))
               ))

(def card (om/factory Card))

(defcard test-card-component
         "Test basic workings of Card component"
         (card {:name "a card."}))

(deftest testCard
         "Test for card component"
         (is (= 1 1)))

(defcard xxxx
         "hhhh")

(defcard no-name-for-card
         "Test card with no name."
         (card))

(deftest testxxx
         "Test noname"
         (= (card) nil))
