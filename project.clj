(defproject om-next-play "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.145"]
                 [devcards "0.2.0-8"]
                 [sablono "0.3.6"]
                 [org.omcljs/om "1.0.0-alpha15-SNAPSHOT"]
                 [datascript "0.13.1"]]

  :plugins [[lein-cljsbuild "1.1.0"]
            [lein-figwheel "0.4.1"]]

  :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                    "target"]
  
  :source-paths ["src"]

  :cljsbuild {
              :builds [{:id "devcards"
                        :source-paths ["src"]
                        :figwheel { :devcards true } ;; <- note this
                        :compiler { :main       "om-next-play.core"
                                    :asset-path "js/compiled/devcards_out"
                                    :output-to  "resources/public/js/compiled/om_next_play_devcards.js"
                                    :output-dir "resources/public/js/compiled/devcards_out"
                                    :source-map-timestamp true }}
                       {:id "dev"
                        :source-paths ["src"]
                        :figwheel true
                        :compiler {:main       "om-next-play.core"
                                   :asset-path "js/compiled/out"
                                   :output-to  "resources/public/js/compiled/om_next_play.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :source-map-timestamp true }}
                       {:id "prod"
                        :source-paths ["src"]
                        :compiler {:main       "om-next-play.core"
                                   :asset-path "js/compiled/out"
                                   :output-to  "resources/public/js/compiled/om_next_play.js"
                                   :optimizations :advanced}}]}

  :figwheel { :css-dirs ["resources/public/css"] })
