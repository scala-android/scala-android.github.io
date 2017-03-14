---
date: "2017-01-31T10:07:35+02:00"
title: "Release 1.7.4"
layout: page
permalink: /releases/1_7_4/
resource: true
---

* minor bugfixes
  * fix `aar` unpacking on every build
  * no longer perform renaming of classes.jar within unbundled `aar`
  * fix deprecation error in generated `build.sbt` from `gen-android`
  * no longer generate `.d` files when processing `aidl` (`aidl` tool generates the incorrect name with `-a`)
* new `aapt9PngCrunch` setting to toggle whether or not `9-patch` png files should be processed, default to `true=on`
