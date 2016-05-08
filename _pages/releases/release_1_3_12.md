---
date: "2014-12-02T10:07:35+02:00"
title: "Release 1.3.12"
layout: page
permalink: /releases/1_3_12/
resource: true
---



* Update to latest android builder `1.0.0-rc1`
* Fix javah bug #131 (link)
* Fix double-tab crash #130 (link)
* Split `test` from `android:test` (better support for robolectric)
* Manifest placeholders, set `manifestPlaceholders in Android`
  * `Map[String,String]` for `key:values` to replace in AndroidManifest.xml
  * Placeholders are expanded using `${key}` syntax
  * Can be dynamically configured as it is implemented as an sbt task
