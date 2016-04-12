+++
date = "2015-06-09"
title = "Release 1.4.0"

+++


* This version `is not entirely backward compatible` with 1.3.x; `TR.scala` and `proguardCache` have undergone significant changes.
* Some code re-organization, internal settings hidden from public view (can still be accessed by defining SettingKey and TaskKey manually as required)
* Add `android:bootClasspath` for use with robolectric
* Unused resource shrinker, enable with `shrinkResources in Android := true`
* Only runs if proguard is run, typically used for clean, release builds.
* See the resource shrinking documentation (link)
* Conversion of some settings to tasks: `packageName`, `manifest`, `packageForR`, `versionName`, `versionCode`, `minSdkVersion`, `targetSdkVersion`
* See all available keys (link)
* TypedResource improvements, now uses value class extensions for runtime performance improvements (all apps must now use scala 2.10+)
  * Renamed `TypedViewHolder` in favor of a single `TypedFindView`, removed `TypedView`, `TypedActivity`, `TypedActivityHolder`, `TypedDialog`
* Proguard cache improvements, no more `ProguardCache` DSL, instead, add package prefix strings to cache directly to `proguardCache in Android (Seq[String])`
* Add `extraResDirectories` setting for additional overlay-resources. For use with build flavors, etc.
