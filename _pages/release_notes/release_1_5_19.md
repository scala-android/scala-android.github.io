+++
date = "2016-03-01"
title = "Release 1.5.19"

+++

* Add `ndkAbiFilter` to exclude unsupported `ABI` native libraries from the final APK. e.g. `ndkAbiFilter := Seq("armeabi")` will include only `armeabi` native libraries. Default is `Nil`, meaning include all `ABI`.
* `gen-android` now creates a `sample.scala` under `src/main/scala` and the java sample under `src/main/java` is no longer generated.
`javacOptions` is also set to target java 1.7 if the current JVM is detected to be running Java 8
* Exclude transitive `bouncycastle` from Android build tools, allows use of latest `sbt-pgp`. Override the dependency on "`org.bouncycastle" % "bcpkix-jdk15on" % "1.51"` as necessary.
