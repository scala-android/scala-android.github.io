---
date: "2017-02-09T10:07:35+02:00"
title: "Release 1.7.5"
layout: page
permalink: /releases/1_7_5/
resource: true
---

* directly invoking `android:compile` is an error
* delete `proguard-sbt.txt` if encountered
* default generated project template adds it to `.gitignore`
* add `adb-wifi-reconnect` command for automatically reconnecting to a device running `adb-wifi`
* fail-fast when running `android:install`, `android:run`, `android:clean`, `android:debug`, `android:uninstall` if a device is not connected
* initial implementation of `gen-multi-android` for creating multi-project android app builds
* fix `pidcat` to use process identification from android `7.0+`
