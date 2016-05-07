---
date: "2015-10-06T10:07:35+02:00"
title: "Release 1.5.2"
layout: page
permalink: /releases/1_5_2/
resource: true
---

* Add an entirely new, alternative, `flavors` and `buildTypes` system.
  * Configure by adding `buildTypes in Android += (("name", List(settings)))` or the same for `flavors in Android`.
  * Load the variant configuration by using the `variant[/PROJECT] [BUILD_TYPE] [FLAVOR]` command, run `variant[/PROJECT]` by itself to see current variant status and available flavors and/or build types.
      * Alternatively, load a default variant by adding `android.Plugin.withVariant("PROJECT-ID", Option("BUILD-TYPE"), Option("FLAVOR"))` into `build.sbt`
  * LIMITATIONS: Any `set` command must occur prior to calling `variant` or else the `set` command will reset all variant settings
* Warn if `exportJars` is set incorrectly on dependency projects
* Automatically set project for `pidcat`, `adb-runas`, `adb-kill` when possible. Also allow appending `/<project>` to any of those commands
  * `adb-kill` now uses `am force-stop` when running against a device api 11+
