+++
date = "2016-02-26"
title = "Release 1.5.18"

+++


* Fix compatibility with sbt `0.13.11`, see `sbt/sbt#2476` (link) and `sbt/sbt#2354` (link)
* Make rasterizing vector drawables optional, set `renderVectorDrawables` to false if `minSdkVersion < 21` and using the new 23.2 `support-vector-drawable` and `animated-vector-drawable` libraries
* Default `minSdkVersion` to `7` if not set, keeps in line with `appcompat-v7` was previously 1...
