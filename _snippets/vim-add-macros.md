---
layout: single-snippet
title: "VIM: Record Macros"
via: 
  name: VIM Wikia
  url: "http://vim.wikia.com/wiki/Macros"
---

In VIM there's a way to record macros which is truely amazing. A macro can be recored (and
automatically be saved) by doing the following:

* ESC
* type `q` followed by a letter, e.g. `qs`
* Do your stuff
* ESC 
* hit `q` 

Now the macro is recored and saved and can be used by typing `@s` from the command mode (`ESC`).

Here's a real-life example I just recored while writing this post:
{% highlight vim %}
  // Everything in < > is a key I pressed!
  <ESC>
  <q><h>
  <i>
   {% raw %}
    {% highlight %}
  
    {% endhighlight %}
   {% endraw %}
  <ESC>
  <q>
{% endhighlight %}

Now when I hit `@h` in command mode VIM will automatically output the Jekyll Highlight Syntax. Neat!
