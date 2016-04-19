---
date: "2016-04-13T07:35:43+02:00"
title: "Libraries"
layout: page
permalink: /libraries/
---

_sbt_ and _sbt-android_ offer a wide range of possibilities to include external code into your project. Besides pulling library as managed dependencies from the web and dumping <code>*.jar</code> files to a <code>libs/</code> folder, you can also create _sbt_ sub-projects or reference code from a Git repository.

## Managed Dependencies

The preferred way to add dependencies are _managed dependencies_. They are easy to maintain and offer fine-grained control of the dependencies. Library dependencies are maintained via the _sbt_ configuration key <code>libraryDependencies</code>. The [_sbt_ documentation](http://www.scala-sbt.org/0.13/docs/Library-Dependencies.html) provides more detailed information on managing dependencies.

<pre>libraryDependencies ++= Seq(
  "com.android.support" % "appcompat-v7"    % "23.1.0",
  "com.android.support" % "cardview-v7"     % "23.1.0",
  "com.android.support" % "design"          % "23.1.0",
  "com.android.support" % "gridlayout-v7"   % "23.1.0",
  "com.android.support" % "recyclerview-v7" % "23.1.0",
  "com.android.support" % "support-v4"      % "23.1.0")</pre>

Besides simple Scala or Java libraries, you can also reference Android _aar_ or _apklib_ packages. Usually, the _sbt-android_ plugin is able to detect and handle these dependencies correctly, but in some cases it might be necessary to mark them explicitly with <code>aar()</code> or <code>apklib()</code> (e.g. <code>aar( "com.android.support" % "appcompat-v7" % "23.1.0" )</code>).

After adding a _managed dependency_, you have to run <code>sbt reload</code> and you should also run <code>sbt clean</code> to enforce a rebuild of the Proguard cache.

## Unmanaged Dependencies

It is sometimes necessary to drop in a simple <code>*.jar</code> file as a dependency. This jar file is then called an _unmanaged dependency_ and you are generally discouraged to use it. It is harder to maintain than a _managed dependency_ and it does not play well with version control systems.

The _jar_ file may be placed in the <code>src/main/libs/</code> directory and will then be automatically picked up by _sbt_ in order to compile your code. A valid drop in location is also <code>test/main/libs/</code>, if you want to narrow the scope or your _unmanaged dependency_.

## _sbt_ Sub-projects

_sbt_ allows you to split your codebase into sub-modules. This might be a convenient way to manage large codebases. It also works for projects using _sbt-android_. Please refer to the [_sbt_ documentation](http://www.scala-sbt.org/0.13/docs/Multi-Project.html) to learn how such a setup is configured.
