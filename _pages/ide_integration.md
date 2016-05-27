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


<img class="img-thumbnail" width="240" height="320" alt="Configure Plugins" src="{{site.baseurl}}/resources/img/intellij01.png">

- Make sure you have `Android Support` enabled and click on `Install JetBrains plugin...`

<img class="img-thumbnail"  width="640" height="480"alt="Configure Plugins" src="{{site.baseurl}}/resources/img/intellij02.png">

- Find `Scala` plugin and install it.

<img class="img-thumbnail" width="640" height="480" alt="Configure Plugins" src="{{site.baseurl}}/resources/img/intellij03.png">

- For the best integration with Android project it's recommended to install `sbt` plugin for Intellij, click on `Browse repositories` button and intall `sbt` plugin.

<img class="img-thumbnail" width="640" height="480" alt="Install sbt plugin" src="{{site.baseurl}}/resources/img/plugin_sbt.png">


Installing Scala and sbt plugins will require Intellij restart, after that you can simply import project as `sbt` project.

<img class="img-thumbnail" width="640" height="480" alt="Configure Plugins" src="{{site.baseurl}}/resources/img/intellij04.png">

- Set `Android Sdk` for while importing project

<img class="img-thumbnail" width="640" height="480" alt="Configure Plugins" src="{{site.baseurl}}/resources/img/intellij05.png">

When downloading dependencies and indexing is done, add new `Android Applicatication` configuration. Remove `sbt` task
and put `android:package` as task to run.

<img class="img-thumbnail" width="640" height="480" alt="Configure sbt part 1" src="{{site.baseurl}}/resources/img/sbt01.png">

<img class="img-thumbnail" width="640" height="480" alt="Configure sbt part 2" src="{{site.baseurl}}/resources/img/sbt02.png">

<img class="img-thumbnail" width="640" height="480" alt="Configure sbt part 3" src="{{site.baseurl}}/resources/img/sbt03.png">


You should now have support for `Java` and `Scala` support in your `Android` project using `sbt` as build system.
