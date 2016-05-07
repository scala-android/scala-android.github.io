---
date: "2015-10-20T10:07:35+02:00"
title: "Release 1.5.6"
layout: page
permalink: /releases/1_5_6/
resource: true
---

* Fix `logcat`, allow passing arguments
* Load `flavor`, `buildType`, `applicationId`, `versionName` and `code` into `BuildConfig` automatically
* No longer de-duplicate JNI libraries automatically, this must be managed using packagingOptions
* Warn when using `dependsOn(androidSubProject)` incorrectly
