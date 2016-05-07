---
date: "2016-01-22T10:07:35+02:00"
title: "Release 1.5.14"
layout: page
permalink: /releases/1_5_14/
resource: true
---

* Check if JNI sources have changed instead of running ndk-build blindly
* Move `android-sdk-plugin` generated, global content into `~/.android/sbt`, two entries under this location are exploded-aars and predex.
** This speeds up builds by re-using existing aar packaging and allowing aar archives to be pre-dexed for use with protify and v21+ multidex
