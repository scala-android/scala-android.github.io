---
date: "2015-08-20T10:07:35+02:00"
title: "Release 1.4.10"
layout: page
permalink: /releases/1_4_10/
resource: true
---

* Set `autoScalaLibrary` based on presence of Scala sources
* Set `minSdkVersion` and `targetSdkVersion` based on platformTarget unless explicitly specified in `AndroidManifest.xml`, previously defaulted to 1
* Properly skip `dex` if files unchanged.
* `retrolambdaEnable` is set false by default
* More refactoring to support `Protify`, see live-code demo (link)
