+++
date = "2015-04-29"
title = "Release 1.3.22"

+++


* Initial lint support
  * Configured to only detect API level issues by default
  * New setting keys:
      * `android:lintEnabled`: run lint in `compile`, default true
      * `android:lintFlags`: optional flags for lint
      * `android:lintStrict`: fail the build on lint errors, default false
      * `android:lintDetectors`: lint rules to detect, default: API level issues
* New task `android:lint`: run lint independently of compile, will not run compile before-hand, otherwise, behaves according to settings above.
* Available lint detectors can be found documented at http://www.javadoc.io/doc/com.android.tools.lint/lint-checks/24.2.2
* Update to `com.android.tools.build:builder:1.2.0`
* Remove stack traces on build failures (stack traces for errors only)
