+++
date = "2016-02-17"
title = "Release 1.5.17"

+++


* Fix `proguardCache` regression; was requiring both `package.name` and `package/name` to be specified in order to function properly
* Default `targetSdkVersion` to the platform level specified in `platformTarget` if not otherwise specified explicitly
