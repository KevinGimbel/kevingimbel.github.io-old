---
title: "Snippet: theme-color for Android 5.0"
layout: post
category: coding
tags:
  - android
  - chrome
  - html
---

Just yesterday I got my Android 5.0 update which also features a new way multi-tasking works and Chrome interacts with
this multi-tasking. In fact, all recently opened tabs are available via the multi-tasking button (square to the down 
right on Stock Android) instead of an in-app button like it used to be. This not only is very handy actually since you
can switch between apps and websites seamlessly you can also set your own status bar colors for chrome which are used on
the page and in the multi-tasking overview.

### One-liner!
All it takes is a simple one-liner of HTML: a `<meta>`-tag!
{% highlight html %}
<meta name="theme-color" content="#5677fc">
{% endhighlight %}
The content can be any valid CSS color and that's it - nothing more to do!

### Results

<div class="gw">
 <div class="g one-third small-one-whole">
  <img src="http://i.kevingimbel.me/blog/android5/nexus_kevingimbelcom.png">
 </div> 
 <div class="g one-third small-one-whole">
  <p><em>left/top:</em>View when the website is in-browser, the gray bar with the URL input turns to the desired color.</p>
  <p><em>right/bottom: View when clicking the multi-task button.</em></p>
 </div>
 <div class="g one-third small-one-whole">
  <img src="http://i.kevingimbel.me/blog/android5/nexus_multitasking.png">
 </div>
</div>
