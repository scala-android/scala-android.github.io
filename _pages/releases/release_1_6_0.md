---
date: "2016-04-16T10:07:35+02:00"
title: "Release 1.6.0"
layout: page
permalink: /releases/1_6_0/
resource: true
---

### no longer published to `com.hanhuy.sbt % android-sdk-plugin`
* TR enhancements
  * On-device performance optimizations (inlining, value classes)
  * Full typed resource treatment for all resource types: animations, attrs, booleans, colors, dimens, drawables, fractions, integers, interpolators, menus, mipmaps, plurals, raws, strings, styles, transitions, xmls and all arrays
  * Typeclass support for calling `.value` on any TR resource
* Updated to android builder `2.0.0`
* Remove direct dependency on proguard, allowing configurability by the consuming project
* NDK build improvements
  * `ndkEnv` setting to pass a list of `(ENV,VALUE)` to `ndk-build`
  * `ndkArgs` setting to pass additional arguments to `ndk-build`
* Performance improvements during `android:dex` (particularly when `dexShards := true` )
* Automatically save last-known `ANDROID_HOME` and `ANDROID_NDK_HOME` values
* `gen-android` no longer generates `Build.scala` using `android.AutoBuild`
  * `android.AutoBuild` is now deprecated [sbt/sbt#2524](https://github.com/sbt/sbt/pull/2524)
* Numerous android-related `TaskKey` converted to `SettingKey`, improves performance
* Performance and usability improvements in tab-completion for repl commands
  * On-device file completion works much more reliably and quickly
* `android-gradle-build` is also renamed to `sbt-android-gradle` and no longer requires `android.GradleBuild`
