---
date: "2016-09-11T10:07:35+02:00"
title: "Release 1.6.17"
layout: page
permalink: /releases/1_6_17/
resource: true
---

* Automatically set `platformTarget` to latest version available if it is not specified
* Update to android builder 2.1.3
* Fix `androidTest` aars warning
  * Add `testAarWarning` setting that can be disabled by setting to `false`
* Update `gen-android` template to set `scalaVersion`, `version` and `versionCode`
* Fix `TypedViewHolder` generation when file names collide in the same configuration (libraries)
* Fix `onLoad` initialization to only occur once per load
