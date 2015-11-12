(ns om-next-play.state)

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
   :count 1
   })



(def init-data
  {:list/one [{:id 1 :username "j" :name "John" :points 0}
              {:id 2 :username "m" :name "Mary" :points 0}
              {:id 3 :username "b" :name "Bob"  :points 0}]
   :list/two [{:id 2 :username "m" :name "Mary" :points 0 :age 27}
              {:id 4 :username "g" :name "Gwen" :points 0}
              {:id 5 :username "j" :name "Jeff" :points 0}]})

(def new-data-set
  {:artists [{:artist/id 1 :artist/name "Led Zeppelin"}
             {:artist/id 2 :artist/name "Foetus"}
             {:artist/id 3 :artist/name "Patti Smith"}
             {:artist/id 4 :artist/name "The Fall"}]
   :releases [{:release/id 101 :release/name "The Song Remains the Same" :release/artist 1}
              {:release/id 102 :release/name "Nail" :release/artist 2}
              {:release/id 103 :release/name "Hole" :release/artist 2}
              {:release/id 104 :release/name "Gash" :release/artist 2}
              {:release/id 105 :release/name "Sink" :release/artist 2}
              {:release/id 106 :release/name "Love" :release/artist 2}
              {:release/id 107 :release/name "Horses" :release/artist 3}
              {:release/id 108 :release/name "Live at the Witch Trials" :release/artist 4}
              {:release/id 109 :release/name "Grotesque (After the Gramme)" :release/artist 4}]
   :media [{:media/id 201 :media/name "CD"}
           {:media/id 202 :media/name "MP3"}
           {:media/id 203 :media/name "wax cylinder"}
           {:media/id 204 :media/name "record"}
           {:media/id 205 :media/name "tape"}]
   :country [{:country/id 301 :country/name "USA"}
             {:country/id 302 :country/name "Aus"}]
   :songs [{:song/id 401 :song/name "A Prayer for my Death" :song/album 102 :song/track 10}
           {:song/id 402 :song/name "Paredolia" :song/album 106 :song/track 7}
           {:song/id 403 :song/name "New Face in Hell" :song/album 109 :song/track 3}
           {:song/id 404 :song/name "C'n'C-S Mithering" :song/album 109 :song/track 5}]
   }
  )
;(println "is parser? " (om/parser? parser))

;(om/add-root! user-reconciler
;              App
;              (.. js/document (getElementById "app")))


; -------------------------------------------------

(defn merge-songs->releases
  [ds]
  (assoc ds :releases
            (into [] (for [x (:releases ds)]
                       (assoc-in x [:release/tracks]
                                 (into []
                                       (filter #(= (:release/id x) (:song/album %))
                                               (:songs ds))))))))

(defn merge-releases->artists
  [ds]
  (assoc ds :artists
            (into []
                  (for [x (:artists ds)]
                    (assoc-in x [:artist/releases]
                              (into []
                                    (filter #(= (:artist/id x) (:release/artist %))
                                            (:releases ds))))))))

(def merged-data
  (into initial-state merge
        (merge-releases->artists
          (merge-songs->releases new-data-set)) ))


