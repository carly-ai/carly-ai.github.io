---
layout: detail
title: Blog
permalink: /blog/
include_type: signup
---

<div class="container">
  <div class="row">
    <div class="col-sm-8 col-sm-offset-2">

      {% for post in site.categories['blog'] %}

        {% if post.image != "" %}
          <a href="{{ post.url }}">
            <img class="img-responsive" src="{{ "assets/images/blog/" | prepend: site.baseurl }}{{ post.image }}" />
          </a>
        {% endif %}

        <h2 class="ctitle"><a href="{{ post.url }}">{{ post.title }}</a></h2>
        <h4>{{ post.subtitle }}</h4>

        <p class="hide">
          <csmall>{{ post.date | date: "%b %-d, %Y" }}. | By: {{ post.author }}</csmall>
        </p>

        {% include share.html %}
        {{ post.content }}

        <hr />

      {% endfor %}

    </div>
  </div>
  <div class="row">
    <div class="col-sm-12">
      Subscribe <a href="{{ "blog/feed.xml" | prepend: site.baseurl }}">via RSS</a>.
    </div>
  </div>
</div>
