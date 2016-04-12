---
date: "2016-01-31T02:38:23+09:00"
title: "Options"
layout: page
permalink: /options/
---

<div class="box">

<div class="box-header">
<h3 class="box-title"> Options </h3>
</div>

<div class="box-body no-padding">

<table class="table table-bordered table-striped">

	<tr>
		<th>Sbt option</th>
		<th>Example value</th>
		<th>Gradle option</th>
		<th>Example value</th>
		<th style="min-width: 200px">Description</th>
	</tr>
	<tr>
		<td>name</td>
		<td>name :=&quot;yourproject&quot;</td>
		<td>-</td>
		<td>-</td>
		<td>Name of your project</td>
	</tr>
	<tr>
		<td>organization</td>
		<td>organization :=&quot;com.example.yourproject&quot;</td>
		<td>applicationId</td>
		<td>applicationId 'com.example.yourproject'</td>
		<td>Package, id of your project</td>
	</tr>
	<tr>
		<td>versionName</td>
		<td>versionName :=&quot;0.0.1&quot;</td>
		<td>versionName</td>
		<td>versionName 1</td>
		<td>Version of your application</td>
	</tr>
	<tr>
		<td>versionCode</td>
		<td>versionCode :=Some(1)</td>
		<td>versionCode</td>
		<td>versionCode 1</td>
		<td>Code version of your application</td>
	</tr>
	<tr>
		<td>scalaVersion</td>
		<td>scalaVersion :=&quot;2.11.7&quot;</td>
		<td>-</td>
		<td>-</td>
		<td>Scala version which is used in current project</td>
	</tr>
	<tr>
		<td>javacOptions</td>
		<td>javacOptions ++=Seq(&quot;-source&quot;, &quot;1.7&quot;, &quot;-target&quot;, &quot;1.7&quot;)</td>
		<td>compileOptions</td>
		<td>compileOptions {        sourceCompatibility JavaVersion.VERSION_1_7        targetCompatibility JavaVersion.VERSION_1_7    }</td>
		<td>Options for Java in current project, Java code version, etc.</td>
	</tr>
	<tr>
		<td>scalacOptions</td>
		<td>scalacOptions ++=Seq(&quot;-feature&quot;, &quot;-Xexperimental&quot; ,&quot;-language:implicitConversions&quot;, &quot;-language:postfixOps&quot;, &quot;-target:jvm-1.7&quot;)</td>
		<td>-</td>
		<td>-</td>
		<td>Options for Scala</td>
	</tr>
	<tr>
		<td>platformTarget</td>
		<td>platformTarget in Android :=&quot;android-23&quot;</td>
		<td>targetSdkVersion, compileSdkVersion</td>
		<td>targetSdkVersion 23, compileSdkVersion 23</td>
		<td>Compile and target sdk for project</td>
	</tr>
	<tr>
		<td>minSdkVersion</td>
		<td>minSdkVersion in Android :=&quot;21&quot;</td>
		<td>minSdkVersion</td>
		<td>minSdkVersion 21</td>
		<td>Minimum android SDK version to support</td>
	</tr>
	<tr>
		<td>resolvers</td>
		<td>resolvers ++=Seq(Resolver.mavenLocal, Resolver.sonatypeRepo(&quot;releases&quot;))</td>
		<td>repositories</td>
		<td>repositories {        jcenter()        maven { url 'https://maven.fabric.io/public' }    }</td>
		<td>Repositiories for dependencies</td>
	</tr>
	<tr>
		<td>fork in Test</td>
		<td>fork in Test :=true</td>
		<td>-</td>
		<td>-</td>
		<td>Fork process for testing</td>
	</tr>
	<tr>
		<td>publishArtifact in (Compile, packageDoc)</td>
		<td></td>
		<td>packagingOptions</td>
		<td>packagingOptions {        exclude 'META-INF/LICENSE.txt'    }</td>
		<td>Packaging options, i.e. excluding META-INF files</td>
	</tr>
	<tr>
		<td>proguardOptions</td>
		<td>proguardOptions in Android ++=io.Source.fromFile(&quot;proguard-sbt.txt&quot;).getLines.toSeq</td>
		<td>proguardFiles</td>
		<td></td>
		<td>Proguard options</td>
	</tr>
	<tr>
		<td>collectJni </td>
		<td>collectJni in Android :={ List() }</td>
		<td>?</td>
		<td></td>
		<td>Collecting jni files (not needed to set if not using jni)</td>
	</tr>
	<tr>
		<td>collectResources</td>
		<td>collectResources in Android :={  val (assets, res)=(collectResources in Android).value  (assets ** &quot;*&quot;).get.foreach(_.delete())  (assets, res)}</td>
		<td>?</td>
		<td></td>
		<td>Collecting resources from project to apk, settings up paths, deleting resources from apk</td>
	</tr>
	<tr>
		<td>libraryProject </td>
		<td>libraryProject in Android :=true</td>
		<td>dependencies { compile fileTree(dir: 'libs', include: ['*.jar']) }</td>
		<td>dependencies { compile fileTree(dir: 'libs', include: ['*.jar']) }</td>
		<td>Configure current sbt project as library project</td>
	</tr>
	<tr>
		<td>transitiveAndroidLibs </td>
		<td>transitiveAndroidLibs in Android :=true</td>
		<td>compile('dependency'){ transitive=true; }</td>
		<td>compile('dependency'){ transitive=true; }</td>
		<td>Include transitive dependencies</td>
	</tr>
	<tr>
		<td>useProguard </td>
		<td>useProguard in Android :=true</td>
		<td>minifyEnabled</td>
		<td>minifyEnabled true</td>
		<td>Enable proguard</td>
	</tr>
	<tr>
		<td>useProguardInDebug </td>
		<td>useProguardInDebug in Android :=(useProguard in Android).value</td>
		<td>minifyEnabled</td>
		<td>minifyEnabled true</td>
		<td>Enable proguard in debug mode</td>
	</tr>
	<tr>
		<td>proguardCache</td>
		<td>proguardCache ++=&quot;com.google.common&quot; :: &quot;org.bouncycastle&quot; :: Nil</td>
		<td>-</td>
		<td>-</td>
		<td>Proguard caching &lt;link to section&gt;</td>
	</tr>
	<tr>
		<td>typedResources </td>
		<td>typedResources in Android :=true</td>
		<td>-</td>
		<td>-</td>
		<td>Enable generating typed resource from views (type safe for xml views in scala code)</td>
	</tr>
	<tr>
		<td>dexMulti </td>
		<td>dexMulti in Android :=false</td>
		<td>multiDexEnabled</td>
		<td>multiDexEnabled true</td>
		<td>Enable / disable multidex</td>
	</tr>
	<tr>
		<td>dexMaxHeap </td>
		<td>dexMaxHeap in Android :=&quot;2048M&quot;</td>
		<td>dexOptions { javaMaxHeapSize }</td>
		<td>dexOptions {        javaMaxHeapSize &quot;2048M&quot;    }</td>
		<td>Set dex heap size</td>
	</tr>
	<tr>
		<td>dexAdditionalParams </td>
		<td></td>
		<td>dexOptions</td>
		<td></td>
		<td>Set other dex options</td>
	</tr>
	<tr>
		<td>val supportLibVersion</td>
		<td>val supportLibVersion=&quot;23.1.1&quot;</td>
		<td>def supportLibVersion</td>
		<td>def supportLibVersion=&quot;23.1.1&quot;</td>
		<td>Sample of creating local variable in build file</td>
	</tr>
	<tr>
		<td>libraryDependencies</td>
		<td>libraryDependencies ++=Seq (  &quot;package&quot; % &quot;id&quot; % &quot;version&quot;)</td>
		<td>dependencies</td>
		<td>dependencies {  compile &quot;&quot;}</td>
		<td>Specify project dependencies</td>
	</tr>
	<tr>
		<td>protifySettings</td>
		<td>protifySettings</td>
		<td>-</td>
		<td>-</td>
		<td>Add support for protify (Instant mode but better)</td>
	</tr>
	<tr>
		<td>sdkPath </td>
		<td>sdkPath in Android :=&quot;&lt;path&gt;&quot;</td>
		<td>-</td>
		<td>-</td>
		<td>Specify sdkPath</td>
	</tr>
	<tr>
		<td>ndkPath </td>
		<td>ndkPath in Android :=&quot;&lt;path&gt;&quot;</td>
		<td>-</td>
		<td>-</td>
		<td>Specify ndkPath</td>
	</tr>
	<tr>
		<td>resValue</td>
		<td>resValues +=((&quot;string&quot;, &quot;gcm_defaultSenderId&quot;, &quot;yourid&quot;))</td>
		<td>resValue</td>
		<td>defaultConfig { resValue &quot;string&quot;, &quot;gcm_defaultSenderId&quot;, &quot;youid&quot; }</td>
		<td>Add resValue</td>
	</tr>
	<tr>
		<td>flavors</td>
		<td>flavors +=((&quot;flavor1&quot;, List(applicationId :=&quot;com.example.flavor1&quot;, versionCode :=20)))</td>
		<td>productFlavors</td>
		<td>productFlavors {        flavor1 {            packageName &quot;com.example.flavor1&quot;            versionCode 20         }         flavor2 {             packageName &quot;com.example.flavor2&quot;             minSdkVersion 14         }    }</td>
		<td>Setup for product flavors (link to google)</td>
	</tr>
	<tr>
		<td>variant</td>
		<td>variant +=((&quot;release&quot;, List(options...)))</td>
		<td>buildTypes</td>
		<td>buildTypes { release {} debug {} }</td>
		<td>Setup project build types (link to google)</td>
	</tr>
	<tr>
		<td>buildToolsVersion</td>
		<td>buildToolsVersion in Android :=&quot;23.0.2&quot;</td>
		<td>buildToolsVersion</td>
		<td>buildToolsVersion &quot;23.0.2&quot;</td>
		<td>Specify build tools version</td>
	</tr>
	<tr>
		<td>aar</td>
		<td>aar(&quot;com.android.support&quot; % &quot;appcompat-v7&quot; % &quot;23.1.1&quot;)</td>
		<td>-</td>
		<td>-</td>
		<td>Add aar dependecy to project</td>
	</tr>
	<tr>
		<td>apklib</td>
		<td>apklib(&quot;package&quot; % &quot;id&quot; % &quot;version&quot;)</td>
		<td>-</td>
		<td>-</td>
		<td>Add apklib to dependency </td>
	</tr>
	<tr>
		<td>lintFlags</td>
		<td>lintFlags :={      val flags=lintFlags.value      implicit val output=outputLayout.value      val layout=projectLayout.value      layout.bin.mkdirs()      val config=layout.libraryLintConfig      config.getParentFile.mkdirs()      (layout.manifest relativeTo layout.base) foreach { path=&gt;        val lintconfig=&lt;lint&gt;          &lt;issue id=&quot;ParserError&quot;&gt;            &lt;ignore path={path.getPath}/&gt;          &lt;/issue&gt;        &lt;/lint&gt;        scala.xml.XML.save(config.getAbsolutePath, lintconfig, &quot;utf-8&quot;)        flags.setDefaultConfiguration(config)      }      flags    }</td>
		<td> lintOptions</td>
		<td> lintOptions {        abortOnError false}</td>
		<td>Flags for lint</td>
	</tr>
	<tr>
		<td>lintEnabled</td>
		<td>lintEnabled :=true</td>
		<td></td>
		<td></td>
		<td>Enable, diable lint</td>
	</tr>
	<tr>
		<td>shrinkResources</td>
		<td>shrinkResources :=true</td>
		<td>shrinkResources</td>
		<td>shrinkResources true</td>
		<td>Enable shrinking resources</td>
	</tr>
</table>


</div></div>
