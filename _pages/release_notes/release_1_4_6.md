+++
date = "2015-07-21"
title = "Release 1.4.6"

+++


* Rename `android:packageName` to `android:applicationId`, uses `android:packageName` if set, otherwise falls back to value in `android:manifest`. `android:packageName` is reverted to be a `SettingKey` to fix collision with `sbt-native-packager`; fixes #178
* Add `resValues in Android`; allow specifying res/values from build (for `flavors` and auto-generated `resources`); analogous to `resValue` from the gradle android plugin
