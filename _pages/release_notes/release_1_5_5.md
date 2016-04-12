+++
date = "2015-10-13"
title = "Release 1.5.5"

+++


* Warn when `aar` dependency versions are improperly configured (thanks @tek)
* Colorize `logcat`, force `-v brief` for marshmallow compatibility (fixes pidcat for marshmallow as well)
* Cache all common library predexing into `$HOME/.android/predex`; project-specific libraries, including all aars, remain in `target/intermediates/predex`
* Changed all `android.Keys._` to automatically be `in Android`. It is no longer necessary to specify in Android when configuring android settings
  * If re-using these keys from another configuration using `inConfig(CONFIG)`, then they will need to be explicitly set as `androidKey in CONFIG`. Should not affect normal usage.
