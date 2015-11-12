(ns om-next-play.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [om-next-play.reconciler :refer [reconciler read mutate]]
            [om-next-play.components.counter :refer [Counter]]
            [om-next-play.components.artist :refer [Artist artist]]
            [om-next-play.components.release :refer [Release release]]
            [om-next-play.components.artist-dialog :refer [ArtistDialog artist-dialog]]

            [om-next-play.styling ]

            ))

(enable-console-print!)

(println "Here I am!")

(enable-console-print!)

;(defcard first-card
;         (sab/html [:div
;                    [:h1 "This is your a devcard defined in core!"]]))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )

(defui Hello
       static om/IQuery
       (query [this]
              ;(let [personQuery (om/get-query Person)]
              ;  `[{:people ~personQuery}])
              [:people]
              )
       Object
       (render [this]
               (println "rendering Hello" (om/props this))
               (dom/div nil
                        (dom/h1 nil "xxxx")
                        (let [{:keys [people]} (om/props this)]
                          (dom/div nil
                                   (dom/p nil (str "Here it is " (-> this om/props :text)) )
                                   ;(apply dom/ul nil (map person people))
                                   )))))

(def hello (om/factory Hello ))

;(defcard simple-component
;         "Test that Om Next component work as regular React components."
;         (hello {:text "Hello, world!"}))
;
;(defcard xxxx
;         "hhhh")




;
;

;(defmulti read om/dispatch)
;
;(defmulti mutate om/dispatch)
;
;(defn get-person [st ref]
;  (println "get-person; st=" st "ref=" ref)
;  (->> (get-in st ref)))
;
;(defn get-people [st key]
;  (println "get-people; st=" st "key=" key)
;  (->> (get st key)
;       (into [] (map #(get-person st %)))))
;
;(defmethod read :people
;  [{:keys [state ast] :as allKeys} key _]
;  (let [st @state
;        peeps (get-people st key)]
;    (println "got peeps " (get-people st key))
;    (println "key=" key)
;    (println "st=" st)
;    {:value (get-people st key)}
;    ;{:value "" :remote false}
;    ;true
;    ))
;
;
;
;
;
;(def parser
;  (om/parser {:read read :mutate mutate}))
;
;
;(def reconciler
;  (om/reconciler {:state {}                                 ; init-state
;                  :parser parser
;                  ;;    :merge-tree merge
;                  ;;:send (util/transit-post "/api")
;                  }))
;(println @reconciler)


; -----------------------------------
;(def app-state (atom {:count 0}))
(def app-state {:count 0})

(def p
  (om/parser
    {:read   (fn [_ _ _] {:quote true})
     :mutate (fn [_ _ _] {:quote true})}))

(def r
  (om/reconciler
    {
     :state app-state
     :parser (om/parser {:read read :mutate mutate})
     ;:ui->ref (fn [c] (-> c om/props :id))
     ;
     ;:normalize true
     ;:merge-tree (fn [a b] (println "|merge" a b) (merge a b))

     ;  :send (transit-post "/api")
     }
    ))


;
;
;(defui App2
;       static om/IQuery
;       (query [this]
;              [:count]
;              ;(let [personQuery (om/get-query Person)]
;              ;  `[{:people ~personQuery} ])
;        )
;       Object
;       (render [this]
;               (println "\n\n\nrendering app2" (om/props this))
;               (dom/div nil
;                        (dom/h2 nil "ss")
;                        ;(let [{:keys [people]} (om/props this)]
;                        ;  (println "\n\n\nartists" people)
;                        ;  (println "all" (om/props this))
;                        ;  (println "all2" (om/state this))
;                        ;  (apply dom/ul nil (map person people)))
;                        )
;               ))
;


(println "adding root")


;(om/add-root! reconciler
;              Counter
;              (gdom/getElement "counterDiv"))

(defui App2
       static om/IQuery
       (query [this]
              (let [artistQuery (om/get-query Artist)
                    releaseQuery (om/get-query Release)
                    artistsEditingQuery (om/get-query ArtistDialog)]
                `[{:artists ~artistQuery
                   :artists/editing ~artistsEditingQuery} ]))

       Object
       (artist-create [this]
                      (println "in artist-create")
                      (om/transact! this `[(artist/create-artist {} )
                                           :artists         ;:artists/editing
                                           ])
                      )

       (render [this]
               (dom/div #js {:className "the-artist-app-main-div"}
                        (dom/hr nil)
                        (dom/span #js {:align "right"}
                                  (dom/label nil "Add Artiste")
                                  (dom/button #js {:className (str "add-artist-btn " om-next-play.styling/button-classes)
                                                   :onClick #(.artist-create this)
                                                   }
                                              "+")
                                  )
                        (dom/hr nil)

                        (if-let [artist (-> this om/props :artists/editing)]
                          (println "\n\n\n\n\n\n\n\n\n\nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn\n\n\n\n\n\n"))
                        (if-let [artist (-> this om/props :artists/editing)]
                          (artist-dialog (om/computed artist {})))


                        (let [{:keys [artists]} (om/props this)]
                          (apply dom/ul nil (map artist artists)))


                        )

               ))
;
(om/add-root! reconciler
              App2
              (gdom/getElement "app"))