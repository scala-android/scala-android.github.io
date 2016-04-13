---
date: "2016-01-31T02:38:23+09:00"
title: "Quickstart"
layout: page
permalink: /quickstart/
---


How to quick start from app (short version of setting up env)

### Creating with gen-android

* Install `sbt`

* Invoke bash script in console:

<pre>bash
$ cd $HOME/.sbt/0.13/plugins/
$ echo 'addSbtPlugin("com.hanhuy.sbt" % "android-sdk-plugin" % "1.5.13")' > android.sbt
$ mkdir myproject
$ sbt
$ gen-android android-23 com.mypackage.test test
$ android:run
</pre>

Done !
