---
date: "2016-10-13T10:07:35+02:00"
title: "Release 1.7.0"
layout: page
permalink: /releases/1_7_0/
resource: true
---

* Switch to `AutoPlugin` enabling, build android apps by setting `enablePlugins(AndroidApp)`, aar files with `enablePlugins(AndroidLib)` and jar files using enablePlugins(AndroidJar)
  * All previous methods of configuration have been deprecated:
    * `android.Plugin` is deprecated
    * `androidBuild`, `androidBuildWith`, `androidBuildAar`, `androidBuildJar`, `androidBuildApklib`, etc. have all been deprecated (for that matter, stop building apklibs!)
* Utility functions have moved into the `android._` namespace, e.g.
  * `flavorOf (deprecated)`
  * `withVariant`
  * `useSupportVectors`
  * `fail`
  * `useLibrary`
  * `buildTools`
  * `extendFlavor`
  * `flavor`
  * `extendBuildType`
  * `buildType`
  * `buildConfig`
  * `resValue`
  * `signingConfig`
  * `apkExclude`
  * `apkPickFirst`
  * `apkMerge`
  * `manifestPlaceholder`
  * `apkVersionName`
  * `apkVersionCode`
* Remove `android.AutoBuild`
* Fix multiple onLoad calls (should only perform once per load)
* Fix `variant` interaction with session `set` command
* Update to android builder `2.2.0`
* Add support for `pseudoLocalesEnabled` see http://blog.danlew.net/2015/04/06/pseudolocalization-visiting-androids-bizarro-world/ for usages
* Support manifest option for `android:extractNativeLibs`
