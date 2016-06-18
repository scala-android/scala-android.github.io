---
date: "2016-01-31T02:38:23+09:00"
title: "Setup"
layout: page
permalink: /setup/
---

## Prerequisites

1. Java with `JAVA_HOME` variable must be installed.
2. `ANDROID_HOME` variable must be set and pointing to your android sdk directory.
3. Plugin also requires `sbt`.

<div class="nav-tabs-custom">
  <ul class="nav nav-tabs">
    <li class="active"><a data-toggle="tab" href="#linux-deb">Linux (Debian/Ubuntu)</a></li>
    <li><a data-toggle="tab" href="#linux-rpm">Linux (RPM-based)</a></li>
    <li><a data-toggle="tab" href="#macosx">Mac OS X</a></li>
    <li><a data-toggle="tab" href="#windows">Windows</a></li>
    <li><a data-toggle="tab" href="#manual">Manual</a></li>
  </ul>
  <div class="tab-content">
    <div class="tab-pane active" id="linux-deb">
      <p>Installing sbt on Ubuntu / Debian:</p>
      <pre>
echo "deb https://dl.bintray.com/sbt/debian /" | sudo tee -a /etc/apt/sources.list.d/sbt.list
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 642AC823
sudo apt-get update
sudo apt-get install sbt</pre>
    </div>
    <div class="tab-pane" id="linux-rpm">
      <p>Installing sbt on RPM based Linux:</p>
      <pre>
curl https://bintray.com/sbt/rpm/rpm | sudo tee /etc/yum.repos.d/bintray-sbt-rpm.repo
sudo yum install sbt</pre>
    </div>
    <div class="tab-pane" id="macosx">
      <p>Installing sbt on Mac OS X with brew:</p>
      <pre>brew install sbt</pre>
    </div>
    <div class="tab-pane" id="windows">
      <p>Installing sbt on Windows:</p>
      <ul>
        <li>Download zip from sbt page and add sbt to %PATH% variable</li>
        <li>`http://www.scala-sbt.org/0.13/docs/Installing-sbt-on-Windows.html`</li>
      </ul>
    </div>
    <div class="tab-pane" id="manual">
      <p>Sbt manual installation:</p>
      <p>http://www.scala-sbt.org/0.13/docs/Manual-Installation.html</p>
    </div>
  </div>
</div>

## Creating or Importing an Android Project

There are two ways of working with sbt-android:

1. Creating project with `gen-android` task
2. Using `android gradle build` plugin which can import existing gradle project for you

<div class="nav-tabs-custom">
  <ul class="nav nav-tabs">
    <li class="active"><a data-toggle="tab" href="#create">Create a new project</a></li>
    <li><a data-toggle="tab" href="#import">Import an existing project</a></li>
  </ul>
  <div class="tab-content">
    <div class="tab-pane active" id="create">
      <ul>
        <li>Install `sbt`</li>
        <li>Add `sbt-android` to _sbt_'s global plugins:
            For Mac OS X, Linux (if directory isn’t there, just create it):
<pre>
$ cd $HOME/.sbt/0.13/plugins/
$ echo 'addSbtPlugin("org.scala-android" % "sbt-android" % "1.6.4")' > android.sbt
</pre>
        </li>
        <li>Create your project directory, I.e. myproject
<pre>
$ mkdir myproject
</pre>
        </li>
        <li>create new sbt project with sbt `gen-android` task
<pre>
$ sbt
$ gen-android android-23 com.mypackage.test test
</pre>
        </li>
        <li>Project creation is finished, you can now import your project with intellij, eclipse. To simply run project you can invoke Android run task
<pre>
$ android:run
</pre>
        </li>
      </ul>
    </div>
    <div class="tab-pane" id="import">
      `Gradle build plugin` lets you import settings from your current android gradle project. It generates `00-gradle-generated.sbt` from `build.gradle` file automatically.
      <ul>
        <li>Install sbt</li>
        <li>Create `project` folder in project’s root directory
<pre>
$ mkdir project
</pre>
        </li>
        <li>Add sbt plugin to plugins.sbt
<pre>
$ echo 'addSbtPlugin("org.scala-android" % "sbt-android-gradle" % "1.2.0")' > project/plugins.sbt
</pre>
        </li>
        <li>Enable Gradle build by adding this line to `build.scala`
<pre>
$echo "object Build extends android.GradleBuild" > project/build.scala
</pre>
        </li>
        <li>Run sbt
<pre>
$ sbt
</pre>
        </li>
      </ul>
      You can now run your project with `android:run` task.
    </div>
  </div>
</div>
