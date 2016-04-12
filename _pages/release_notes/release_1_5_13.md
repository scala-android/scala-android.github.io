+++
date = "2016-01-08"
title = "Release 1.5.13"

+++


* Allow duplicate `aar` dependencies in non-diamond project graphs
* Fix `adb-wifi` for Android 6.0
* Universally depend on `bootClasspath` (meaning custom `bootClasspath` is now possible)
* Default `minSdkVersion` to 1 if it is not specified rather than setting to `targetSdkVersion`
