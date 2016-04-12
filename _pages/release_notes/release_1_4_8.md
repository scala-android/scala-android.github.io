+++
date = "2015-08-04"
title = "Release 1.4.8"

+++


* Update to new android gradle/builder 1.3.0
  * Add `libraryRequests` and `packagingOptions` settings
* Warn about performance when using generated `maindexlist.txt`
* Add `androidBuildJar` and `buildJar` for creating jar libraries without resources (anytime `aar` or `apklib` is not required).
* Automatically cleanup resources when `aar`/`apklib` dependencies are changed, no longer requires clean build after changes.
