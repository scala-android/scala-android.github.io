---
date: "2016-02-17T10:07:35+02:00"
title: "Release 1.5.17"
layout: page
permalink: /releases/1_5_17/
resource: true
---

* Fix `proguardCache` regression; was requiring both `package.name` and `package/name` to be specified in order to function properly
* Default `targetSdkVersion` to the platform level specified in `platformTarget` if not otherwise specified explicitly
