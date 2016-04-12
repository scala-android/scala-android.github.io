+++
date = "2015-07-28"
title = "Release 1.4.7"

+++


* Proguard + cache improvements:
  * No longer need to clean after updating proguard and/or cache rules
* Add `android:allDevices` for automatically executing `android:install`, `android:run`, and/or `android:test` against all connected devices
* Lots of code cleanup (remove bad uses of `sbt.State`)
* Improve the output of `devices` (include api level and battery status)
* Move the output of `AndroidBuilder` into debug
* Re-expose `sdkPath`, also add `ndkPath` as a setting
* Fix `watchSources` to properly compile on `resource`, `jni`, `ndk`, etc. changes
* Deprecate `androidBuildApklib`, should use `androidBuildAar` instead
* Fail the build when trying to run library projects
* Automatically generate `maindexlist.txt` if `dexMainFileClasses in Android` is not set
