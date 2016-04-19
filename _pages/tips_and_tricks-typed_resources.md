---
date: "2016-01-31T02:38:23+09:00"
title: "Tips and Tricks – Typed Resources"
layout: page
permalink: /tips_and_tricks-typed_resources/
---

As an extension of Android's <code>R</code> class, _sbt-android_ introduces a the <code>TR</code> class. It generates type safe mappings from ids in xml views to their respective class. This is explained best by a simple example:

<xmp><?xml version="1.0" encoding="utf-8"?>

<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android">
  <TextView
    android:id="@+id/my_title"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content" />
</LinearLayout></xmp>

## Java

Based on the xml view definition above, you will typically search for the <code>TextView</code> by its id to specify the title at runtime. This is a very common use case, and in Java it works as shown below:

<pre>public class MyActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.view);

        TextView title = (TextView) findViewById(R.id.my_title);
        title.setText("Hello Java!");
    }
}</pre>

## Scala

It is of course possible to do the exact same thing with Scala:

<pre>class MyActivity extends Activity {
  override def onCreate(savedInstanceState: Bundle) = {
    super.onCreate(savedInstanceState)

    setContentView(R.layout.main)

    val title = findViewById(R.id.my_title).asInstanceOf[TextView]
    title.setText("Hello Scala!")
  }
}</pre>

But thanks to <code>TR</code> you can get rid off the cast and therefore simplify the code and improve type safety at the same time:

<pre>class MyActivity extends Activity with TypedActivity {
  override def onCreate(savedInstanceState: Bundle) = {
    super.onCreate(savedInstanceState)

    setContentView(R.layout.main)

    val title = findView(TR.my_title)
    title.setText("Hello Scala!")
  }
}</pre>

The <code>TR</code> mappings are generated on every compile, when _sbt-android_ detects changes in the {{ command( 'R' ) }} class. Your IDE usually helps you to keep the <code>R</code> up to date behind the scenes, but it won't do that for the <code>TR</code> class. You can still achieve a similar effect if you open your project _sbt_ shell and run <code>~compile</code>. The tilde before the command tells _sbt_ to repeat this task whenever it detects a file change.

<code>TR</code> mappings only work for xml widgets that use the <code>android:id="@+id/xxx"</code> property. If you chose not to use the <code>TR</code> class you may want to disable it for performance reasons in your project's _sbt_ configuration via <code>typedResources := false</code>.

<!--
* Di with macwire
* Di with dagger
* Speed up developing with Protify (instant run)
* Scaloid
* Macroid
* Activator templates
-->
