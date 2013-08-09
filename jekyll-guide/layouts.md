---
layout: guide
title: Jekyll on Ubuntu - Layouts
permalink: /layouts/
next_page: /jekyll-guide/the-end
prev_page: /jekyll-guide/first-page
---

So far you know the basics of Jekyll and how to set up pages. But how to style them? How to apply layouts and how to create them? 

Let's say you want an archive page that should hold all your articles. This one looks similar to our `post.html` because it only need to loop through all your posts.

{% highlight html %}
{% raw %}
{% include header.html %}

<h1>Archives</h1>
{% for post in site.posts %}
    <div class="latest-posts__single-post--archive">
        <h3><a href="{{post.url}}">{{ post.title }}</a></h3>
        <time class="article__date-time" pubdate="{{ post.date | date_to_rfc822 }}">{{ post.date | date_to_long_string }}</time> 
        {% if post.category %} 
           <span class="article__category">{{ post.category }}</span>
        {% endif %}
    </div>
{% endfor %}
{% include footer.html %}
{% endraw %}
{% endhighlight %}

If you know how to build your Layout with Liquid and HTML you're good to go. You only need to decide which data you want to use.

We'll build an archive page step by step now. If you understand the princip of building Layouts you can continue.

First we need the HTML Markup.

{% highlight html %}
<div class="article">
  <h1 class="headline"></h1>
  <time class="date"></time>
  <p class="excerpt"></p>
</div>
{% endhighlight %}

This very basic markup will now be filled with our Liquid Tags.


{% highlight html %}
{% raw %}
<div class="article">
  <h1 class="headline">{{ post.title }}</h1>
  <time class="date"> {{ post.date | date_to_long_string }}</time> <!-- Outputs 09. August 2013 for example -->
  <p class="excerpt">{{ post.excerpt }}</p>
</div>
{% endraw %}
{% endhighlight %}

It's getting better, but we need to loop through our posts, so we need a for-loop.

{% highlight html %}
{% raw %} 
{% for post in site.posts %} // for every post do the following: 
<div class="article">
  <h1 class="headline">{{ post.title }}</h1>
  <time class="date"> {{ post.date | date_to_long_string }}</time> <!-- Outputs 09. August 2013 for example -->
  <p class="excerpt">{{ post.excerpt }}</p>
</div>
{% endfor %}
{% endraw %}
{% endhighlight %}

Wouldn't it be great to have a header and footer on out archive page? It would, so we'll include it.

{% highlight html %}
{% raw %} 
{% include header.html %}
{% for post in site.posts %} // for every post do the following: 
<div class="article">
  <h1 class="headline">{{ post.title }}</h1>
  <time class="date"> {{ post.date | date_to_long_string }}</time> <!-- Outputs 09. August 2013 for example -->
  <p class="excerpt">{{ post.excerpt }}</p>
</div>
{% endfor %}
{% include footer.html %}
{% endraw %}
{% endhighlight %}

The files you want to include most be inside the `\_includes` folder (logically, isn't it?)

More reads on Jekyll Layouts:

- [Jekyll Docs - Templates](http://jekyllrb.com/docs/templates/)
- You know another good source? [Contribute one on Github](https://github.com/kevingimbel/kevingimbel.github.io/pulls)!