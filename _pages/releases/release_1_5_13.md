---
date: "2016-01-08T10:07:35+02:00"
title: "Release 1.5.13"
layout: page
permalink: /releases/1_5_13/
resource: true
---

* Allow duplicate `aar` dependencies in non-diamond project graphs
* Fix `adb-wifi` for Android 6.0
* Universally depend on `bootClasspath` (meaning custom `bootClasspath` is now possible)
* Default `minSdkVersion` to 1 if it is not specified rather than setting to `targetSdkVersion`
