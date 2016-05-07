---
date: "2015-09-24T10:07:35+02:00"
title: "Release 1.5.0"
layout: page
permalink: /releases/1_5_0/
resource: true
---

* Build outputs completely refactored, `genPath`, `binPath`, and other settings have been removed; outputs are completely configurable by setting `outputLayout in Android` to a function `ProjectLayout => BuildOutput outputLayout in Android := { val base = (outputLayout in Android).value (p: ProjectLayout) => new android.BuildOutput.Wrapped(base(p)) { // example: changes default from "target/android/intermediates" // to "build/steps" override def intermediates = p.base / "build" / "steps" } }`
** Project flavor build outputs also updated (no longer go into `flavor-target`, instead just `flavor/`), no longer work in conjunction with `android.AutoBuild`, `androidBuild` must be explicitly set when working with flavors.
* `apkbuildExcludes` and `apkbuildPickFirsts` have been removed, use `packagingOptions in Android` in conjunction with the `PackagingOptions` object
* Renamed `dexMainFileClasses`, `dexMinimizeMainFile`, and `dexMainFileClassesConfig` to `dexMainClasses`, `dexMinimizeMain`, and `dexMainClassesConfig`, respectively.
* Renamed `retrolambdaEnable` to `retrolambdaEnabled`
* Add `extraAssetDirectories`
* Dex sharding with `minSdkVersion` 21 or higher, dramatically improves incremental build times, enable by setting `dexShards in Android := true`
  * Add `dexLegacyMode` to set when predexing optimizations and sharding are disabled; automatically true when `minSdkVersion` < 21
  * Disabled parallel dx from `1.4.14`, it creates too much of a cpu/memory load
* Add `inProjectScope(project)(settings...) `to make it easier to configure multi-project builds
