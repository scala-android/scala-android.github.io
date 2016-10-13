---
date: "2016-08-31T10:07:35+02:00"
title: "Release 1.6.15"
layout: page
permalink: /releases/1_6_15/
resource: true
---

* Automatically include `scala.Dynamic` in proguard keep rules, low cost (0 methods) but fixes `proguardCache` with any usage of dynamic
* Add a `dexMainRoots` setting to make keep component list configurable
* Fix dex method count warning when multidex is enabled, also clarifies on what the estimated count is when the limit is hit
* Add `installTimeout` setting to control timeout of `android:install`
* Update to `bintray-update-checker` 0.2 for binary compatibility issues (transitively updated to argonaut 6.1a and scalaz 7.2)
