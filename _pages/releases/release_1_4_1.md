---
date: "2015-06-16T10:07:35+02:00"
title: "Release 1.4.1"
layout: page
permalink: /releases/1_4_1/
resource: true
---


* Add a dex method counter, spits out number of methods in all dex files, aids in deciding when to add additional proguard-cache rules, and switching to/from multi-dex
* Enhanced proguard-cache jar processing, no longer messes up conflicting case-sensitive filenames (can now proguard-cache obfuscated jars)
* Fix apklibs source generators when using build flavors
