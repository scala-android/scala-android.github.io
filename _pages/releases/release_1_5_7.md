---
date: "2015-10-27T10:07:35+02:00"
title: "Release 1.5.7"
layout: page
permalink: /releases/1_5_7/
resource: true
---

* Fix `retrolambda-enable` to `retrolambda-enabled` in repl
re-enable `copyResources`
* Fix issue with `RootProjects` and `dependsOn(androidSubProject)` checking
* Honor `android:outputLayout` in more places (everywhere?)
* Bring back `FileFunction.cached` for android res on a best-effort basis
* `android:use-proguard` and `android:use-proguard-in-debug` no longer depend on each other
