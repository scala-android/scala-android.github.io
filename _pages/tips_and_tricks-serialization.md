---
date: "2016-04-19T16:22:01+02:00"
title: "Tips and Tricks – Serialization"
layout: page
permalink: /tips_and_tricks-serialization/
---

You are discouraged to use Java serialization on the Android platform for performance reasons. Instead, Android comes with its own serialization tool: <code>Parcelable</code>. A <code>Parcelable</code> class requires you to implement the <code>Parcelable</code> interface and also to fulfill a certain contract as shown below:

{% highlight java %}
import android.os.Parcel;
import android.os.Parcelable;

public class User implements Parcelable {
    private int age;

    private String name;

    // Getters and Setters [...]

    public User(int age, String name) {
        this.age = age;
        this.name = name;
    }

    protected User(Parcel source) {
        this(source.readInt(), source.readString())
    }

    @Override
    public int describeContents() { return 0; }

    @Override
    public void writeToParcel(Parcel destination, int flags) {
        destination.writeInt(age);
        destination.writeString(name);
    }

    // Implemented by contract, if this field is not around you will encounter runtime exceptions
    public static final Parcelable.Creator<User> CREATOR = new Parcelable.Creator<User>() {
        public User createFromParcel(Parcel source) { return new User(source); }

        public User[] newArray(int size) { return new User[size]; }
    };
}
{% endhighlight %}

A <code>Parcelable</code> class forces you to implement a lot of boilerplate code, but offers great performance as it does not rely on runtime reflection like the default Java serialization framework. When it comes to Scala on Android there emerges another problem: the <code>Parcelable</code> contract requires a static class field. At first glance this seems to be an issue in Scala as there is no support for static members.

Luckily, the Scala compiler checks for Android's <code>Parcelable</code> interface and treats it in a special way to support Android development. At the end of the day there is just another contract to implement that relies on the class' companion to overcome the lack of statics. Below is a valid Scala implementation of the previous example.

{% highlight scala %}
import android.os.{ Parcel, Parcelable }

case class User( age: Int, name: String ) extends Parcelable {
  protected this(source: Parcel) = this(source.readInt(), source.readString())

  override def describeContents() = 0

  override def writeToParcel(destination: Parcel, flags: Int) {
    destination.writeInt(age)
    destination.writeString(name)
  }
}

object User {
  // This is by contract:
  // the CREATOR field must exist for every class that implements the Parcelable interface.
  override val CREATOR = new Parcelable.Creator[User] {
    override def createFromParcel(source: Parcel) = new User(source)
    override def newArray(size: Int) = new Array[User](size)
  }
}
{% endhighlight %}
