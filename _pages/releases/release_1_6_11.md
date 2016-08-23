---
date: "2016-08-08T10:07:35+02:00"
title: "Release 1.6.11"
layout: page
permalink: /releases/1_6_11/
resource: true
---

* Minimum SBT version is now `0.13.8`
* new setting `typedResourcesIds` to determine `TR.xxx` ID generation, defaults to enabled
* `androidTest` is now the required configuration for adding dependencies to `androidTest` instrumentation tests
  * `test` and `androidTest` dependencies are now properly isolated
  * E.g. `"com.android.support.test" % "runner" % "0.2" % "androidTest"`
* RenderScript processing improvements
  * No longer depends on `.d` files for detecting generated rs java stubs
  * Include `rsRes` and `rsLib` from library projects
* Retrolambda processing improvements
  * Incremental builds fixed (was generating bad bytecode at times)
  * Retrolambda output can now be sharded, default sharded, modify by setting `predexRetrolambda`
  * Reduced log spam
* Fix incorrect path to `android/.bat` script for the SDK manager, fixes `gen-android` failing to run on `1.6.10`
* Fix proguard failing when the SDK is installed to a directory containing spaces
