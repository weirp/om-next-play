(ns om-next-play.components.artist
  (:require [goog.object :as gob]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [om-next-play.components.release :refer [release Release]]
            [om-next-play.reconciler :refer [reconciler read mutate]]
            [om-next-play.styling]))

(enable-console-print!)
(println "loading comps artist")

(defui Artist
       static om/Ident
       (ident [this {:keys [artist/id artist/name artist/releases] :as props}]
              (println "artist ident\n\n")
              [:artist/by-id id] )
       static om/IQuery
       (query [this]
              (println "artist query\n\n")
              (let [releaseQuery (om/get-query Release)
                    ;artistLocationQuery (om/get-query ArtistLocation)
                    ]
                `[:artist/id :artist/name {:artist/releases ~releaseQuery}
                  ;:favourite {:artistLocation ~artistLocationQuery}
                  ]))
       Object
       (render [this]
               (println "artist render\n\n")
               (let [{:keys [artist/name artist/id artist/releases]} (om/props this)]
                 (dom/li nil
                         ;;;; this should be pushed to the child(ren) as a prop
                         (dom/div #js {:className "artist-name" :id (str "div-artist-" id)}
                                  (dom/label nil name)
                                  ;(artistLocation location)
                                  (dom/button #js {:className (str "add-release-button " om-next-play.styling/button-classes)  :onClick
                                                   (fn [e] (println (str "clicked-" id " add a release for " name) ))} "+")
                                  (dom/div #js {:id (str "div-artist-details-" id)
                                                :style #js {:display "block" :padding 10 :borderBottom "1px solid black"}}
                                           (dom/ul nil
                                                   (map (fn [x] (release (get-in @reconciler x))) releases))))))))

(def artist (om/factory Artist {:keyfn :artist/id}))

(defn get-artist [st ref]
  (println "get-artist; st=" st "ref=" ref)
  (->> (get-in st ref)))

(defn get-artists [st key]
  (println "get-artists; st=" st "key=" key)
  (->> (get st key)
       (into [] (map #(get-artist st %)))))

(defn resolve-artists [st refs]
  (->> refs
       (map #(get-artist st %))
       (into [])))

(defn get-releases [st key]
  (println "get-releases " st)
  (->> (get st key)
       (into [] (map #(get-artist st %))))

  )

(defmethod read :artists
  [{:keys [state ast] :as allKeys} key _]
  (let [st @state]
    {:value (get-artists st key)
     :remote false
     :static []
     :dynamic []
     ;:dynamic (update-in ast [:sel]
     ;                    #(->> (for [[key _] %]
     ;                            [key [:favourite]])
     ;                          (into {})))
     }))

(defmethod read :artists/editing
  [{:keys [state ast] :as allKeys} key _]
  {:value (get-in @state [:artists/editing])
   :remote false?
   :static []
   :dynamic []}
  )

(defmethod read :favourite
  [{:keys [state ast] :as allKeys} key _]
  (println "\n\nread favourite\n\n\n")
  )

(defn create-artist [st]
  (let [id    (->> (get-artists st :artists) (map :artist/id) (cons 0) (reduce max) inc)
        artist {:artist/id id :artist/name "???" :artist/releases []}
        ref   [:artist/by-id id]]
    (println "\n\n\n\ncreate-artist " st " id=" id " ref=" ref " artist=" artist)
    (-> st
        (assoc-in ref artist)
        (update :artists conj ref)
        (assoc :artists/editing ref))))


(defmethod mutate 'artist/create-artist
  [{:keys [state]} _ _]
  (println "in mutate artist/create-artist\n\n")

  {:value [:artists :artists/editing]
   :action #(swap! state create-artist)})