---
layout: post
title: Codepen and Jekyll
category: coding
---

I found some Jekyll Codepen Plugins, but the only one that worked for me was [this one](https://github.com/jaketrent/jaketrent-blog/blob/master/plugins/codepen.rb) by [Jake Trent](https://github.com/jaketrent). It's a "shameless copy" of [the JsFiddle Plugin](https://github.com/alexanderedge/portfolio/blob/master/plugins/jsfiddle.rb) by [Brian Arnold](http://brianarn.github.io/).

A few minutes I even thought about developing my own Plugin, which would have taken hours, days or weeks because I only have some basic knowledge of Ruby. Anyway, with RDiscount Markdown Converter this Plugin is running great.

The setup is easy, too. Copy/Paste the Source Code from the [this page](https://github.com/jaketrent/jaketrent-blog/blob/master/plugins/codepen.rb), paste it in a new file called `codepen.rb` and save it in your `_plugins` folder. 
After that it's usable via its very own Liquid Syntax
{% highlight bash %}
{% raw %}
{% codepen [HASH] [USER] [TYPE] [HEIGHT] %}
# http://codepen.io/kevingimbel/pen/xGjHw
#                   |                 |
#                 [USER]            [HASH]
{% endraw %}
{% endhighlight %}

*TYPE* defines whether you'd like to have the **CSS**, **HTML**, **JS** or **RESULT** Tab as first-previewed Tap. (Those are the exact values). 
*HEIGHT* can be any numeric value.

It's notable that when you apply a height without a result the height will not apply. So, even if it **should** work with only one optional Argument you need to write "result" when changing the default height.

Some Examples:

{% codepen JsCBz tholman result 500 %}
{% codepen uIzCq reimersjan result 500 %}
{% codepen xGjHw kevingimbel result 500 %}
{% codepen LGsft thebabydino css 500 %}
{% codepen IqnbJ TimPietrusky result 500 %}