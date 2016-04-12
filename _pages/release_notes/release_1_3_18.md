+++
date = "2015-03-05"
title = "Release 1.3.18"

+++


* Initial implementation of `android.Plugin.flavorOf` for build flavors.
  * Simple usage is `lazy val flavorproject = android.Plugin.flavorOf(baseproject, "flavor-name", flavorSettings /* copies and override baseproject settings */)`
  * The `flavorproject` is otherwise a normal sbt project and it can be treated as such.
