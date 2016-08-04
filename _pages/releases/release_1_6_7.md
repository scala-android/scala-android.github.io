---
date: "2016-07-12T10:07:35+02:00"
title: "Release 1.6.7"
layout: page
permalink: /releases/1_6_7/
resource: true
---

* New TypedViewHolder bindings, automatically generated from layout XML to create type-safe and static bindings to layout views
  * `val viewholder: TypedViewHolder.XXX = TypedViewHolder.setContentView(activity, TR.layout.XXX)`
  * `val viewholder: TypedViewHolder.YYY = TypedViewHolder.inflate(inflater, TR.layout.YYY, parent, attachToParent)`
  * Limitations
    * `<fragment>` will be ignored
    * `<merge>` is treated as `android.view.View`
    * `<include>` will be assigned a viewholder val or have all of its views included into the viewholder, depending on whether an id is supplied or the root view type is compatible.
    * Repeated ids will result in only 1 holder val being created. colliding names will otherwise have 2..99 appended automatically
    * View types with type parameters cannot be expressed directly nor handled. This has always been an issue with TR, workaround by using `<view class="viewTypeWithParameter">`. As a result `<view class=...>` will not be processed for the class name and will resolve to `android.view.View`
    * IntelliJ will not properly recognize that the `TypedViewHolder` is correctly typed, force a type ascription as above and ignore the resulting error highlight rather than allowing IntelliJ to infer, see [SCL-10491](https://youtrack.jetbrains.com/oauth?state=%2Fissue%2FSCL-10491)
    * This is compilation-time binding only. Any runtime layout changes: additions/removals will not be handled
  * Enabled by default if scala is present in project, disable by setting `typedViewHolders := false`, requires `typedResources` to be enabled.
* Typed resources are no longer generated for aar by default, re-enable by setting `typedResourcesAar := true`; build performance improvements
