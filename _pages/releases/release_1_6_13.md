---
date: "2016-08-15T10:07:35+02:00"
title: "Release 1.6.13"
layout: page
permalink: /releases/1_6_13/
resource: true
---

* Re-implemented `gen-android`
  * Usage is now `gen-android <package> <name>`
  * Project template has been completely rewritten
  * Defaults to `platformTarget` `android-24`
  * Uses a vector drawable for the logo with an animated "Hello world" sample activity.
  * Demonstrates usage of `TypedRes` and `TypedViewHolder`
  * Comes with working junit3 and junit4 sample instrumentation tests (written in java)
  * Automatically reload sbt if `gen-android` is run within a repl or a series of commands
    * e.g., one can now do `sbt "gen-android com.example Hello" android:run android:test android:uninstall` to get a quick hello world run, running of tests and uninstallation
* Add `variantConfiguration` setting to describe current buildType and flavor
* Improve provided proguard rules to handle `androidTest` better
* Set the value of `debugIncludesTests` to the presence of scala source in `androidTest`
* Fix `TypedRes` in the presence of `res/animator`
* Fix compilation of androidTest
