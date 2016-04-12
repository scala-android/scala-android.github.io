+++
date = "2014-12-02"
title = "Release 1.5.16"

+++


* Update to latest android builder `1.0.0-rc1`
* Fix javah bug #131 (link)
* Fix double-tab crash #130 (link)
* Split `test` from `android:test` (better support for robolectric)
* Manifest placeholders, set `manifestPlaceholders in Android`
  * `Map[String,String]` for `key:values` to replace in AndroidManifest.xml
  * Placeholders are expanded using `${key}` syntax
  * Can be dynamically configured as it is implemented as an sbt task
