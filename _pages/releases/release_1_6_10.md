---
date: "2016-08-02T10:07:35+02:00"
title: "Release 1.6.10"
layout: page
permalink: /releases/1_6_10/
resource: true
---

* Handle `extraResDirectories` and `extraAssetDirectories` when processing resources from dependent projects
* Ignore duplicate `buildConfigOptions`
* Fix inclusion of `compile-internal` artifacts into final dex/apk
* `"test"` configuration artifacts are now included in `androidTest` properly
* No longer include optional platform libraries in proguard and test unless added by `libraryRequests`
* Fix incorrect string concatenation of SDK-related paths
