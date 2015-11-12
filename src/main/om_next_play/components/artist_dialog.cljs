(ns om-next-play.components.artist-dialog
  (:require [goog.object :as gobj]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [om-next-play.components.artist :refer [artist Artist]] ))

(enable-console-print!)

(defui ArtistDialog
       static om/Ident
       (ident [this props]
              (:artist/by-id (:artist/id props)))

       static om/IQuery
       (query [this]
              [:artist/id :artist/name])

       Object
       (render [this]
               (let [{:keys [id name]} (om/props this)
                     {:keys [close-fn]} (om/get-computed this)]
                 (println "\n\n\n\nrendering artistDialog\n\n\n\n")
                 (dom/div #js {:className "artist-dialog"}
                         (dom/div #js {:className "artist-dialog-closer" :onClick close-fn})
                          (dom/div #js {:className "artist-dialog-content"}
                                   (dom/h1 #js {:className "dialog-title"} "Edit Artist" )
                                   )))))

(def artist-dialog (om/factory ArtistDialog {:keyfn #(-> [:artist-dialog (:id %)])}))