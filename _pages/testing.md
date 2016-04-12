---
date: "2016-01-31T02:38:23+09:00"
title: "Testing"
layout: page
permalink: /testing/
---


A variety of `pfn` (link) projects can be found on github that use android-sdk-plugin.

In addition to this, a growing collection of tests can be found under `sbt-test/android-sdk-plugin/`.

These projects are examples of how to use the plugin in various configurations.

Tests can be run via sbt scripted, they require `ANDROID_HOME` and `ANDROID_NDK_HOME` to be set in addition to having platform `android-17` installed.

All tests have auto-generated `build.properties` and `auto_plugins.sbt` files that set the current version of `sbt` and the `android-sdk-plugin` to use for testing.
