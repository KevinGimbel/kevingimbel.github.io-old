---
layout: default
title: Projects
permalink: /projects/
group: site_navigation
credit: "This template is taken from https://github.com/HugoGiraudel/hugogiraudel.github.com/blob/a5906e07358acfc383e9fb008d26622e0abc19e1/projects/index.md"
scripts:
  - /assets/js/viewswitcher.min.js
---

When I can, I try to invest a lot of time in open-source projects. Here are a few of them I initiated myself:

<nav id="nav"></nav>

{% assign groups = site.data.projects|group_by:"category" %}
{% assign groups = groups|sort:"name" %}
{% for category in groups %}
<div data-view="{{category.name}}">
  <h2>{{ category.name }}</h2>
  <ul class="list">
  {% assign projects = category.items|sort:"name" %}
  {% for project in projects %}
    <li class="list__item">
      <p class="list__primary-content">
        <a href="{{ project.link }}" target="_blank">{{ project.name }}</a>
      </p>
      <span class="list__secondary-content">{{ project.description }}</span>
    </li>
  {% endfor %}
  </ul>
</div>
{% endfor %}

<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function() {
  View.setOptions({ changeTitle: false });
  View.initActive('{{ groups[0].name }}');
  var nav = document.getElementById('nav');
  nav.innerHTML = View.getHtmlMenu();
});
</script>
