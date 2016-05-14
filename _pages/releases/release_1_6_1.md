---
date: "2016-05-05T10:07:35+02:00"
title: "Release 1.6.1"
layout: page
permalink: /releases/1_6_1/
resource: true
---

* `1.6.1`: major new features in a `.1` release!
* Automatic Android SDK installation
  * `sdkPath` will be set to `~/.android/sbt/sdk` if `ANDROID_HOME` or other methods of determining it are not available
  * `platformTarget` will be automatically downloaded if not already installed
  * `build-tools` are automatically installed if not already available
  * google and android support repositories are automatically update-checked and installed if not already installed when using play services or support libs
  * NDK is automatically installed if `ANDROID_NDK_HOME` is not set, `ndk-bundle` is not present, and an NDK build is detected (`Android.mk`)
  * SDK installation has a progress indicator, can be suppressed using `showSdkProgress := false`
  * SDK management commands added: `android:install-sdk`, `android:update-sdk`, and `android-license`
* `activity-alias` is supported for `android:run` with full tab completion
* Default `minSdkVersion` is now set to 9 if it is not otherwise set
* Fix TR generation when `.files` are present in resource directories
* Fix some TR deprecation warnings
* Support looking up `ndk-bundle` in `ANDROID_HOME` when `ANDROID_NDK_HOME` is not set
* Bugfix around resource merging when aars are updated (SNAPSHOTS)
* Bugfix lint no longer fails to run if ANDROID_HOME environment variable is not set
* Bugfix unable to `android:run` after `clean` without `compile` first
* Updated to android builder `2.1.0`
* Update to retrolambda `2.3.0`
* Miscellaneous refactoring and code improvements
* Be more verbose when an SDK java command fails
* Removed use of `useSdkProguard`, Android SDK proguard rules will always be applied in addition to scala-specific rules
  * Missing SDK proguard rules will cause a build failure (incorrectly installed SDK)
