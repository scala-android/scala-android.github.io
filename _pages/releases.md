---
date: "2016-04-13T10:07:35+02:00"
title: "Release Notes"
layout: page
permalink: /releases/
---


<ul>

</ul>

<div class="content body">

  <div class="box box-primary">

    <div class="box-body no-padding">

      <div class="table-responsive mailbox-messages">

          <table class="table table-hover table-striped" onmouseover="cursor: hand ">

            <tbody>
              <tr>
                <th>Version</th>
                <th>Date</th>
              </tr>
              {% assign pages = site.pages | sort: 'date' | reverse %}
              {% for page in pages %}
                {% if page.resource == true %}
                 <tr class="mailbox-subject clickable-row" style="cursor: pointer;"  data-href='{{ page.url }}'>
                      <td> {{ page.title }} </td>
                      <td>{{ page.date | date: "%Y-%m-%d" }} </td>
                 </tr>
                {% endif %}   <!-- resource-p -->
              {% endfor %}  <!-- page -->


            </tbody>

          </table>
      </div>
    </div>
  </div>
</div>
