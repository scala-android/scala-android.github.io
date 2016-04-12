+++
date = "2015-08-25"
title = "Release 1.4.11"

+++


* Include `aars` when generating `proguardConfig`
* Fix `mainDexClasses` on non-Windows platforms
* Implement `android.GradleBuild` in `"com.hanhuy.sbt" % "android-gradle-build" % "0.2"`
  * Automatic building from gradle projects without having to configure SBT
  * See the `gradle-build test cases` (link) for an example of usage
  * Known issue: transitive `aar` libraries that are specified in both library and app modules will fail to build
* Use `AutoPlugin` triggers
