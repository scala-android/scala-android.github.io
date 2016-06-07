---
date: "2016-01-31T02:38:23+09:00"
title: "Options"
layout: page
permalink: /options/
---

<div class="box">
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
    		<td><code>name := &quot;yourproject&quot;</code></td>
    		<td>-</td>
    		<td>-</td>
    		<td>Name of your project</td>
    	</tr>
    	<tr>
    		<td>organization</td>
    		<td><code>organization := &quot;com.example.yourproject&quot;</code></td>
    		<td>applicationId</td>
    		<td><code>applicationId 'com.example.yourproject'</code></td>
    		<td>Package, id of your project</td>
    	</tr>
    	<tr>
    		<td>versionName</td>
    		<td><code>versionName := &quot;0.0.1&quot;</code></td>
    		<td>versionName</td>
    		<td><code>versionName 1</code></td>
    		<td>Version of your application</td>
    	</tr>
    	<tr>
    		<td>versionCode</td>
    		<td><code>versionCode := Some(1)</code></td>
    		<td>versionCode</td>
    		<td><code>versionCode 1</code></td>
    		<td>Code version of your application</td>
    	</tr>
    	<tr>
    		<td>scalaVersion</td>
    		<td><code>scalaVersion :=&quot;2.11.7&quot;</code></td>
    		<td>-</td>
    		<td>-</td>
    		<td>Scala version which is used in current project</td>
    	</tr>
    	<tr>
    		<td>javacOptions</td>
    		<td><code>javacOptions ++= Seq(&quot;-source&quot;, &quot;1.7&quot;, &quot;-target&quot;, &quot;1.7&quot;)</code></td>
    		<td>compileOptions</td>
    		<td><pre>compileOptions {
  sourceCompatibility JavaVersion.VERSION_1_7
  targetCompatibility JavaVersion.VERSION_1_7
  }</pre></td>
    		<td>Options for Java in current project, Java code version, etc.</td>
    	</tr>
    	<tr>
    		<td>scalacOptions</td>
    		<td><code>scalacOptions ++=Seq(&quot;-feature&quot;, &quot;-Xexperimental&quot; ,&quot;-language:implicitConversions&quot;, &quot;-language:postfixOps&quot;, &quot;-target:jvm-1.7&quot;)</code></td>
    		<td>-</td>
    		<td>-</td>
    		<td>Options for Scala</td>
    	</tr>
    	<tr>
    		<td>platformTarget</td>
    		<td><code>platformTarget in Android :=&quot;android-23&quot;</code></td>
    		<td>targetSdkVersion, compileSdkVersion</td>
    		<td><code>targetSdkVersion 23, compileSdkVersion 23</code></td>
    		<td>Compile and target sdk for project</td>
    	</tr>
    	<tr>
    		<td>minSdkVersion</td>
    		<td><code>minSdkVersion in Android :=&quot;21&quot;</code></td>
    		<td>minSdkVersion</td>
    		<td><code>minSdkVersion 21</code></td>
    		<td>Minimum android SDK version to support</td>
    	</tr>
    	<tr>
    		<td>resolvers</td>
    		<td><code>resolvers ++= Seq(Resolver.mavenLocal, Resolver.sonatypeRepo(&quot;releases&quot;))</code></td>
    		<td>repositories</td>
    		<td><code>repositories {        jcenter()        maven { url 'https://maven.fabric.io/public' }    }</code></td>
    		<td>Repositiories for dependencies</td>
    	</tr>
    	<tr>
    		<td>fork in Test</td>
    		<td><code>fork in Test := true</code></td>
    		<td>-</td>
    		<td>-</td>
    		<td>Fork process for testing</td>
    	</tr>
    	<tr>
    		<td>packagingOptions</td>
    		<td><code>packagingOptions in Android := PackagingOptions(excludes = Seq(&quot;META-INF/LICENSE.txt&quot;))</code></td>
    		<td>packagingOptions</td>
    		<td><code>packagingOptions {        exclude 'META-INF/LICENSE.txt'    }</code></td>
    		<td>Packaging options, i.e. excluding META-INF files</td>
    	</tr>
    	<tr>
    		<td>proguardOptions</td>
    		<td><code>proguardOptions in Android ++= io.Source.fromFile(&quot;proguard-sbt.txt&quot;).getLines.toSeq</code></td>
    		<td>proguardFiles</td>
    		<td></td>
    		<td>Proguard options</td>
    	</tr>
    	<tr>
    		<td>collectJni </td>
    		<td><code>collectJni in Android :={ List() }</code></td>
    		<td>?</td>
    		<td></td>
    		<td>Collecting jni files (not needed to set if not using jni)</td>
    	</tr>
    	<tr>
    		<td>collectResources</td>
    		<td><code>collectResources in Android := {  val (assets, res)=(collectResources in Android).value  (assets ** &quot;*&quot;).get.foreach(_.delete())  (assets, res)}</code></td>
    		<td>?</td>
    		<td></td>
    		<td>Collecting resources from project to apk, settings up paths, deleting resources from apk</td>
    	</tr>
    	<tr>
    		<td>libraryProject </td>
    		<td><code>libraryProject in Android := true</code></td>
    		<td></td>
    		<td><code>dependencies { compile fileTree(dir: 'libs', include: ['*.jar']) }</code></td>
    		<td>Configure current sbt project as library project</td>
    	</tr>
    	<tr>
    		<td>transitiveAndroidLibs </td>
    		<td><code>transitiveAndroidLibs in Android := true</code></td>
    		<td></td>
    		<td><code>compile('dependency'){ transitive=true; }</code></td>
    		<td>Include transitive dependencies</td>
    	</tr>
    	<tr>
    		<td>useProguard </td>
    		<td><code>useProguard in Android := true</code></td>
    		<td>minifyEnabled</td>
    		<td><code>minifyEnabled true</code></td>
    		<td>Enable proguard</td>
    	</tr>
    	<tr>
    		<td>useProguardInDebug </td>
    		<td><code>useProguardInDebug in Android := (useProguard in Android).value</code></td>
    		<td>minifyEnabled</td>
    		<td><code>minifyEnabled true</code></td>
    		<td>Enable proguard in debug mode</td>
    	</tr>
    	<tr>
    		<td>proguardCache</td>
    		<td><code>proguardCache ++= &quot;com.google.common&quot; :: &quot;org.bouncycastle&quot; :: Nil</code></td>
    		<td>-</td>
    		<td>-</td>
    		<td>Proguard caching &lt;link to section&gt;</td>
    	</tr>
    	<tr>
    		<td>typedResources </td>
    		<td><code>typedResources in Android := true</code></td>
    		<td>-</td>
    		<td>-</td>
    		<td>Enable generating typed resource from views (type safe for xml views in scala code)</td>
    	</tr>
    	<tr>
    		<td>dexMulti </td>
    		<td><code>dexMulti in Android := false</code></td>
    		<td>multiDexEnabled</td>
    		<td><code>multiDexEnabled true</code></td>
    		<td>Enable / disable multidex</td>
    	</tr>
    	<tr>
    		<td>dexMaxHeap </td>
    		<td><code>dexMaxHeap in Android :=&quot;2048M&quot;</code></td>
    		<td>dexOptions { javaMaxHeapSize }</td>
    		<td><code>dexOptions {        javaMaxHeapSize &quot;2048M&quot;    }</code></td>
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
    		<td><code>val supportLibVersion=&quot;23.1.1&quot;</code></td>
    		<td>def supportLibVersion</td>
    		<td><code>def supportLibVersion=&quot;23.1.1&quot;</code></td>
    		<td>Sample of creating local variable in build file</td>
    	</tr>
    	<tr>
    		<td>libraryDependencies</td>
    		<td><code>libraryDependencies ++= Seq (  &quot;package&quot; % &quot;id&quot; % &quot;version&quot;)</code></td>
    		<td>dependencies</td>
    		<td><code>dependencies {  compile &quot;&quot;}</code></td>
    		<td>Specify project dependencies</td>
    	</tr>
    	<tr>
    		<td>protifySettings</td>
    		<td><code>protifySettings</code></td>
    		<td>-</td>
    		<td>-</td>
    		<td>Add support for protify (Instant mode but better)</td>
    	</tr>
    	<tr>
    		<td>sdkPath </td>
    		<td><code>sdkPath in Android := &quot;&lt;path&gt;&quot;</code></td>
    		<td>-</td>
    		<td>-</td>
    		<td>Specify sdkPath</td>
    	</tr>
    	<tr>
    		<td>ndkPath </td>
    		<td><code>ndkPath in Android := &quot;&lt;path&gt;&quot;</code></td>
    		<td>-</td>
    		<td>-</td>
    		<td>Specify ndkPath</td>
    	</tr>
    	<tr>
    		<td>resValue</td>
    		<td><code>resValues += ((&quot;string&quot;, &quot;gcm_defaultSenderId&quot;, &quot;yourid&quot;))</code></td>
    		<td>resValue</td>
    		<td><code>defaultConfig { resValue &quot;string&quot;, &quot;gcm_defaultSenderId&quot;, &quot;youid&quot; }</code></td>
    		<td>Add resValue</td>
    	</tr>
    	<tr>
    		<td>flavors</td>
    		<td><code>flavors += ((&quot;flavor1&quot;, List(applicationId := &quot;com.example.flavor1&quot;, versionCode := 20)))</code></td>
    		<td>productFlavors</td>
    		<td><code>productFlavors {        flavor1 {            packageName &quot;com.example.flavor1&quot;            versionCode 20         }         flavor2 {             packageName &quot;com.example.flavor2&quot;                 minSdkVersion 14         }    }</code></td>
    		<td>Setup for product flavors (link to google)</td>
    	</tr>
    	<tr>
    		<td>variant</td>
    		<td><code>variant += ((&quot;release&quot;, List(options...)))</code></td>
    		<td>buildTypes</td>
    		<td><code>buildTypes { release {} debug {} }</code></td>
    		<td>Setup project build types (link to google)</td>
    	</tr>
    	<tr>
    		<td>buildToolsVersion</td>
    		<td><code>buildToolsVersion in Android :=&quot;23.0.2&quot;</code></td>
    		<td>buildToolsVersion</td>
    		<td><code>buildToolsVersion &quot;23.0.2&quot;</code></td>
    		<td>Specify build tools version</td>
    	</tr>
    	<tr>
    		<td>aar</td>
    		<td><code>aar(&quot;com.android.support&quot; % &quot;appcompat-v7&quot; % &quot;23.1.1&quot;)</code></td>
    		<td>-</td>
    		<td>-</td>
    		<td>Add aar dependecy to project</td>
    	</tr>
    	<tr>
    		<td>apklib</td>
    		<td><code>apklib(&quot;package&quot; % &quot;id&quot; % &quot;version&quot;)</code></td>
    		<td>-</td>
    		<td>-</td>
    		<td>Add apklib to dependency </td>
    	</tr>
    	<tr>
    		<td>lintFlags</td>
    		<td><pre>lintFlags := {
  val flags = lintFlags.value
  implicit val output = outputLayout.value
  val layout = projectLayout.value
  layout.bin.mkdirs()
  val config = layout.libraryLintConfig
  config.getParentFile.mkdirs()
  (layout.manifest relativeTo layout.base) foreach { path =>
    val lintconfig =
      &lt;lint&gt;
        &lt;issue id=&quot;ParserError&quot;&gt;
          &lt;ignore path={path.getPath}/&gt;
        &lt;/issue&gt; 
      &lt;/lint&gt;
    xml.XML.save(config.getAbsolutePath, lintconfig, &quot;utf-8&quot;)
    flags.setDefaultConfiguration(config)
  }
  flags
}</pre></td>
    		<td> lintOptions</td>
    		<td><code>lintOptions { abortOnError false}</code></td>
    		<td>Flags for lint</td>
    	</tr>
    	<tr>
    		<td>lintEnabled</td>
    		<td><code>lintEnabled := true</code></td>
    		<td></td>
    		<td></td>
    		<td>Enable, diable lint</td>
    	</tr>
    	<tr>
    		<td>shrinkResources</td>
    		<td><code>shrinkResources := true</code></td>
    		<td>shrinkResources</td>
    		<td><code>shrinkResources true</code></td>
    		<td>Enable shrinking resources</td>
    	</tr>
    </table>
  </div>
</div>
