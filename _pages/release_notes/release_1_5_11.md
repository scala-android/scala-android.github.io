+++
date = "2015-12-10"
title = "Release 1.5.11"

+++


* classDirectory is no longer in `unmanagedClasspath`, `sbt-idea` legacy
* Android builder error messages are now reported as `sbt` error messages, not warning
* Fix `flavors` and `buildTypes` to set Global config scope-axis when one is not specified in the setting
* Automatically add `src`, `resource` and `manifest` overlays for all `flavors`, `buildTypes`, and combined `variants`
* Update `android.dsl` build script helpers
