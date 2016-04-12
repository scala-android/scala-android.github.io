+++
date = "2015-09-29"
title = "Release 1.5.1"

+++


* Add `android:debug` command to wait for debugger to connect on app launch
* Properly include assets from transitive aar and apklibs
* Change `androidBuildWith` and `buildWith` to accept `ProjectReference` arguments instead of `Project`
* Build optimizations for multi-project builds (more transitive library fixes, thanks @tek)
* Ensure consistent usage of `useProguardInDebug`, `proguardScala`, etc.
  * Fix typedResources to default to the value of autoScalaLibrary not proguardScala
* Turn `lintFlags` into a task, rather than setting
* Add `predexSkip` defaults to all local library projects, defines jars which should be included in main dex (for sharding, etc)
