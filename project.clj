(defproject om-next-play "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.145"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 ;[org.omcljs/om "1.0.0-alpha14"]
                 [org.omcljs/om "1.0.0-alpha20-SNAPSHOT"]
                 [bidi "1.20.3"]
                 [ring/ring "1.4.0"]
                 [com.cognitect/transit-clj "0.8.281"]
                 [com.cognitect/transit-cljs "0.8.225"]
                 [cljs-http "0.1.30" :exclusions
                  [org.clojure/clojure org.clojure/clojurescript
                   com.cognitect/transit-cljs]]
                 [figwheel-sidecar "0.4.0" :scope "provided"]
                 [devcards "0.2.0-SNAPSHOT" :scope "provided"]
                 [datascript "0.13.3"]]

  :plugins [[lein-cljsbuild "1.1.0"]
            [lein-figwheel "0.4.1"]]

  :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                    "target"]
  
  :source-paths ["src/main" "src/devcards"]

  :cljsbuild {
              :builds [
                       {:id "dev"
                        :source-paths ["src/main"]

                        :figwheel { :on-jsload "om-next-play.core/on-js-reload" }
                        :compiler {:main       "om-next-play.core"
                                   :asset-path "js/compiled/out"
                                   :output-to  "resources/public/js/compiled/om_next_play.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :source-map-timestamp true }}

                       {:id "devcards"
                        :source-paths ["src/main" "src/devcards"]
                        :figwheel { :devcards true } ;; <- note this
                        :compiler { :main       "om-next-play.devcards"
                                    :asset-path "js/compiled/devcards_out"
                                    :output-to  "resources/public/js/compiled/om_next_play_devcards.js"
                                    :output-dir "resources/public/js/compiled/devcards_out"
                                    :source-map-timestamp true }}

                       {:id "prod"
                        :source-paths ["src/main"]
                        :compiler {:main       "om_next_play.core"
                                   :asset-path "js/compiled/out"
                                   :output-to  "resources/public/js/compiled/om_next_play.js"
                                   :optimizations :advanced}}]}

  :figwheel { :css-dirs ["resources/public/css"] })
