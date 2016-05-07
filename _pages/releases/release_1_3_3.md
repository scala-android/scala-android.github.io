---
date: "2014-07-22T10:07:35+02:00"
title: "Release 1.3.3"
layout: page
permalink: /releases/1_3_3/
resource: true
---


* Add `ApkSigningConfig`, `PlainSigningConfig`, `PromptStorepassSigningConfig` and `PromptPasswordsSigningConfig`. These various signing configurations allow control over prompting for `keystore` and `key passwords`. The default is `PlainSigningConfig` which observes the original behavior from ant builds (reads properties out of `local.properties`).
* Set `apkSigningConfig` in Android to one of these variants to perform non-default behavior.
* Also added androidBuildWith() project decorator, replaces androidBuild(projects) and dependsOn(projects)
