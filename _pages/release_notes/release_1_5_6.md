+++
date = "2015-10-20"
title = "Release 1.5.6"

+++


* Fix `logcat`, allow passing arguments
* Load `flavor`, `buildType`, `applicationId`, `versionName` and `code` into `BuildConfig` automatically
* No longer de-duplicate JNI libraries automatically, this must be managed using packagingOptions
* Warn when using `dependsOn(androidSubProject)` incorrectly
