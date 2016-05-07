---
date: "2016-03-19T10:07:35+02:00"
title: "Release 1.5.20"
layout: page
permalink: /releases/1_5_20/
resource: true
---

* Add `aaptAdditialParams` key and `useSupportVectors` setting group. `support-vector-drawable` is now fully usable
* Fix mis-use of `--no-optimize` while dexing, unsupported option and causes thread locking issues and crashes on N preview
* Fix `pidcat` for N preview
* Implement `logcat-grep` and `pidcat-grep` commands
