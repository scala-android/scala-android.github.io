---
date: "2016-05-23T10:07:35+02:00"
title: "Release 1.6.3"
layout: page
permalink: /releases/1_6_3/
resource: true
---

* Further `bugfixes` around android builder initialization
* Add `dexMainClassesRules` to set keep rules for dex main file
* Add `typedResourcesFull` to toggle full TR feature support
* Add `aaptPngCrunch` to toggle automatic pngcrunch in aapt
* Auto-enable `dexInProcess` if max heap assigned to SBT is >= 2gb
* Some performance improvements by memoizing reflective calls
