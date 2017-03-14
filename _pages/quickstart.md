---
date: "2016-01-31T02:38:23+09:00"
title: "Quickstart"
layout: page
permalink: /quickstart/
---

## 0. Check Your Android SDK installation

- Make sure the Android SDK is fully updated (minimum build-tools 19.1.0 and up).
- Set the environment variable <code>ANDROID_HOME</code> pointing to the path where the Android SDK is unpacked.

## 1. Download and Install _sbt_

_sbt_, the Scala build tool, is required. Follow the instructions on the [_sbt_ website](http://www.scala-sbt.org/0.13/docs/Manual-Installation.html) to install it.

## 2. Configure Your Project

Scala's Android support requires adding _sbt-android_ as a plugin for _sbt_ (Scala's build tool) to your project configuration. To do that:

1. Assuming that your project is called _my-example-project_, create a directory named <code>my-example-project/</code> and enter it.
2. Create a file called <code>build.sbt</code> (if it doesn't exist) inside your <code>my-example-project/</code> directory and add the line <code>androidBuild</code> to that file.
3. Create a directory called <code>project/</code> (or enter that directory if it exists).<br/>
4. Create another file called <code>build.sbt</code> (if it doesn't exist) inside your <code>my-example-project/project/</code> directory.
5. Add the line <code>addSbtPlugin("org.scala-android" % "sbt-android" % "1.7.6")</code> to that file.

## 3. Create an Android Project

1. Run _sbt_.
2. Inside the sbt shell, execute<br/>
   <code>gen-android com.mypackage.test test</code><br/>
   to create an Android project called _test_ which uses version 23 of the Android SDK.

## 4. Run Your Android Application
   <code>android:run</code> builds your application, then installs and runs it on your device.

## Done!
