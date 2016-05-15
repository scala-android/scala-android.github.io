---
layout: page
title: "IDE Integration"
layout: page
permalink: /ide_integration/
date: "2016-01-31T02:38:23+09:00"
---

You can develop your project just in plain editor and command line, but we recommend using
Intellij IDEA while developing.

- Make sure you have Android SDK fully upgraded and installed.
- On Intellij main screen go to `Configure > Plugins`

<img class="img-responsive" alt="Configure Plugins" src="{{site.baseurl}}/resources/img/intellij01.png">

- Make sure you have `Android Support` enabled and click on `Install JetBrains plugin...`

<img class="img-responsive" alt="Configure Plugins" src="{{site.baseurl}}/resources/img/intellij02.png">

- Find `Scala` plugin and install it.

<img class="img-responsive" alt="Configure Plugins" src="{{site.baseurl}}/resources/img/intellij03.png">

Installing Scala plugin will require Intellij restart, after that you can simply import project as `sbt` project.

<img class="img-responsive" alt="Configure Plugins" src="{{site.baseurl}}/resources/img/intellij04.png">

- Set `Android Sdk` for while importing project

<img class="img-responsive" alt="Configure Plugins" src="{{site.baseurl}}/resources/img/intellij05.png">

When downloading dependencies and indexing is done, add `android:run` task in Intellij.

<img class="img-responsive" alt="Configure Plugins" src="{{site.baseurl}}/resources/img/intellij06.png">

You should now have support for `Java` and `Scala` support in your `Android` project using `sbt` as build system.
