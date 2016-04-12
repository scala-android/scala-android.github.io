+++
date = "2014-07-08"
title = "New features in 1.2.x (last version: 1.2.20)"

+++

* Add setting `android:debug-includes-tests` (default = true) to automatically include instrumented test cases in the debug APK instead of using a separate test APK. This feature improves IntelliJ testing integration.
  * As a result of this new feature, if there are any `libraryDependencies in test` that must be honored, the setting must be disabled, and a separate test APK must be created. An alternative is to include the test dependencies in the normal compile. Proguard will automatically strip these out in release builds if they are unused.
  * This setting may be ignored, or set to false if one does not have tests or does not want to include the test cases in the debug package.
** If the setting is disabled, test cases will be generated into a test APK when running `android:test`
** When generating release builds, it is important to `clean`, otherwise test artifacts may be left over and present in the released apk.
** When using included tests, it is necessary to add the following proguard options, or else proguard will mistakenly remove test cases from the output:

```
proguardOptions in Android ++= Seq(
  "-keep public class * extends junit.framework.TestCase",
  "-keepclassmembers class * extends junit.framework.TestCase { *; }"
)
```

* Add ability to disable manifest merging if upstream libraries have bad manifest settings, set `mergeManifests in Android := false`, default is `true`
* Disabling manifest merging will remove automatic import of Activities, Services, BroadcastReceivers, etc. from the library's manifest into the main application manifest
* Increase test timeout to 3 minutes, from 5 seconds, configurable by using the `instrumentTestTimeout` setting key, in milliseconds
* `1.2.18`: `zipalignPath` has changed from a Setting into a Task
