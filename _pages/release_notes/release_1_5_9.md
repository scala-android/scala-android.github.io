+++
date = "2015-11-20"
title = "Release 1.5.16"

+++


* Update to android builder `1.5.0`
* Fix TypedLayoutInflater when inflating into a container
* Add flavor+buildType source directories/manifest overlays automatically
* Add `apkDebugSigningConfig`, allows custom debug signing configuration
* Support for rendering `VectorDrawable` to png for pre-lollipop, place VectorDrawables into `res/drawable` and they will be converted to `mdpi`, `hdpi`, `xhdpi` and `xxhdpi` rasters automatically when `minSdkVersion` is below `21`. Do not put vectors into `drawable-anydpi-v21`, those will not get rasterized automatically.
  * To clear the lint errors from using `<vector>` images, add this line into lint.xml: `<issue id="NewApi"><ignore path="src/main/res/drawable"/></issue>`
* Can now properly build u2020 automatically using `android-gradle-build` and a few settings in build.sbt:
  * `retrolambdaEnabled := true`
  * `libraryDependencies += "com.squareup.dagger" % "dagger-compiler" % "1.2.2" % "provided"`
  * `android.dsl.apkExclude("META-INF/services/javax.annotation.processing.Processor")`
