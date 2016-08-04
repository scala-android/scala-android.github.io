---
date: "2016-07-19T10:07:35+02:00"
title: "Release 1.6.8"
layout: page
permalink: /releases/1_6_8/
resource: true
---

* TypedViewHolder usability improvements
  * Better error messaging when `<include>` layouts are missing
  * Automatically setTag on TypedViewHolder creation
  * `TypedViewHolder.from(view, TR.layout.XXX)` to retrieve a correctly tagged viewholder
  * When rootView has an associated id, create a named field for the rootView
* Consider `proguardOptions` when forcing a clean build due to config change
* Added test cases to ensure compatibility with `sbt-structure` and `protify`
  * In order to successfully import `sbt-android` projects into IntelliJ until [https://github.com/JetBrains/sbt-structure/pull/41](https://github.com/JetBrains/sbt-structure/pull/41) is merged, download [sbt-structure-0.13.jar](https://github.com/scala-android/sbt-android/blob/master/sbt-test/android-sdk-plugin/sbt-structure-compatibility/project/lib/sbt-structure-0.13.jar) from the test case
