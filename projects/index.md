---
layout: default
title: Projects
permalink: /projects/
group: site_navigation
credit: "This template is taken from https://github.com/HugoGiraudel/hugogiraudel.github.com/blob/a5906e07358acfc383e9fb008d26622e0abc19e1/projects/index.md"
scripts:
  - /assets/js/viewswitcher.min.js
---

Whenever I can I try to build things to get better in languages like JavaScript and Bash. I prefer to learn "pure" languages of frameworks.

A few of the tings I build are listed below, you can find more on [CodePen](http://codepen.io/kevingimbel/) as well as [GitHub](https://github.com/kevingimbel/)

<nav id="nav" class="controls controls--tab"></nav>

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
  View.setOptions({ changeTitle: false, canDisplayAll: true });
  View.initActive('{{ groups[0].name }}');
  var nav = document.getElementById('nav');
  nav.innerHTML = View.getHtmlMenu('control-item');
});
</script>
