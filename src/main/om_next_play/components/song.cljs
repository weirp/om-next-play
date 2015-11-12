(ns om-next-play.components.song
  (:require [goog.object :as gob]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [om-next-play.reconciler :refer [reconciler read mutate]]))

(enable-console-print!)
(println "loading comps song")

(defui Song
       static om/Ident
       (ident [this {:keys [song/id song/name song/album song/track] :as props}]
              [:song/by-id id])
       static om/IQuery
       (query [this]
              '[:song/id :song/name :song/track])
       Object
       (render [this]
               (let [{:keys [song/id song/name song/track]} (om/props this)]
                 (dom/li nil (dom/div #js {:className "song-details"}
                                      (dom/label nil (str track " - " name))))
                 )
               )
       )
(def song (om/factory Song {:keyfn :song/id}))