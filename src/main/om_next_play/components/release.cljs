(ns om-next-play.components.release
  (:require [goog.object :as gob]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [goog.dom :as gdom]
            [om-next-play.components.song :refer [Song song]]
            [om-next-play.reconciler :refer [reconciler read mutate]]
            [om-next-play.styling]))

(enable-console-print!)
(println "loading comps release")

(defui Release
       static om/Ident
       (ident [this {:keys [release/id release/name release/artist release/tracks] :as props}]
              [:release/by-id id])
       static om/IQuery
       (query [this]
              (let [songQuery (om/get-query Song)]
                `[:release/id :release/name :release/artist {:release/tracks ~songQuery}]))
       Object
       (render [this]
               (let [{:keys [release/id release/name release/artist release/by-id release/tracks]} (om/props this)]
                 (dom/div nil
                          (dom/li nil (dom/div #js {:className "release-details"}
                                               (dom/label nil name)

                                               (dom/button #js {:className (str "add-song-button" om-next-play.styling/button-classes)
                                                                :onClick (fn [e]
                                                                           (println (str "add song to -" id " " name) )
                                                                           (gdom/getElement (str "add-song-div-" id))
                                                                           )}
                                                           "+")

                                               (dom/div #js {:className "add-song-div" :id (str "add-song-div-" id)
                                                             :style #js {:display "none"}}
                                                        (dom/label nil (str "in add-song-div for add-song-div-" id))
                                                        ;   (dom/input nil "    ")
                                                        )
                                               ))

                          (dom/ul nil
                                  (map (fn [x] (song (get-in @reconciler x)))
                                       tracks))
                          )

                 )
               )
       )
(def release (om/factory Release {:keyfn :release/id}))

(defn get-release [st ref]
  (println "get-release; st=" st "ref=" ref)
  (->> (get-in st ref)))

(defn get-releases [st key]
  (println "get-releases; st=" st "key=" key)
  (->> (get st key)
       (into [] (map #(get-release st %)))))

(defmethod read :releases
  [{:keys [state]} key _]
  (println "read.releases " key)
  (let [st @state]
    (println "in read.releases; here is the state" st)
    {:value (get-releases st key)}))

(defmethod read :artist/releases
  [{:keys [state]} key _]
  (println "read.artist/releases " key)
  (let [st @state]
    (println "in read.artist/releases; here is the state" st)

    {:value (get-releases st key)
     :static []
     :dynamic []}))