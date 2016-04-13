---
date: "2016-01-31T02:38:23+09:00"
title: "Setting up enviroment"
layout: page
permalink: /setting_up_environment/
---


There are two ways of working with android-sdk-plugin:

1. Creating project with `gen-android` task
2. Using `android gradle build` plugin which can import existing gradle project for you

## Prerequisites

1. Java with `JAVA_HOME` variable must be installed.
2. `ANDROID_HOME` variable must be set and pointing to your android sdk directory.
3. Plugin also requires `sbt`.

### Installing sbt on Mac OS X with brew:
```bash
$ brew install sbt
```

### Installing sbt on Ubuntu / Debian:

```bash
echo "deb https://dl.bintray.com/sbt/debian /" | sudo tee -a /etc/apt/sources.list.d/sbt.list
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 642AC823
sudo apt-get update
sudo apt-get install sbt
```

### Installing sbt on RPM based Linux:

```bash
curl https://bintray.com/sbt/rpm/rpm | sudo tee /etc/yum.repos.d/bintray-sbt-rpm.repo
sudo yum install sbt
```

### Installing sbt on Windows:

Download zip from sbt page and add sbt to %PATH% variable

`http://www.scala-sbt.org/0.13/docs/Installing-sbt-on-Windows.html`

### Sbt manual installation

`http://www.scala-sbt.org/0.13/docs/Manual-Installation.html`

## Creating with gen-android

* Install `sbt`

* Add `android-sdk-plugin` to `sbt` global plugins:

* For Mac OS X, Linux (if directory isn’t there, just create it):

```bash
$ cd $HOME/.sbt/0.13/plugins/
$ echo 'addSbtPlugin("com.hanhuy.sbt" % "android-sdk-plugin" % "1.5.13")' > android.sbt
```

* Create your project directory, I.e. myproject

```bash
$ mkdir myproject
```

* create new sbt project with sbt `gen-android` task

```bash
$ sbt
$ gen-android android-23 com.mypackage.test test
```

Project creation is finished, you can now import your project with intellij, eclipse. To simply run project you can invoke Android run task

```bash
$ android:run
```

## Building with android gradle build plugin
`Gradle build plugin` lets you import settings from your current android gradle project. It generates `00-gradle-generated.sbt` from `build.gradle` file automatically.

* Install sbt
* Create `project` folder in project’s root directory
```bash
$mkdir project
```
* Add sbt plugin to plugins.sbt
```bash
$echo 'addSbtPlugin("com.hanhuy.sbt" % "android-gradle-build" % "1.1.11")' > project/plugins.sbt
```

* Enable Gradle build by adding this line to `build.scala`
```bash
$echo "object Build extends android.GradleBuild" > project/build.scala
```
* run sbt
```bash
$sbt
```
You can now run your project with `android:run` task
