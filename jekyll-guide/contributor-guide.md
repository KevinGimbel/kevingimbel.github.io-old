---
layout: guide
title: Jekyll Guide - Contributor Guide
permalink: /contributor-guide/
prev_page: /jekyll-guide/the-end
---

So you want to contribute to this Jekyll Guide? Thanks! There are a few "rules" you should consider before contributing.

### 1. Markdown
If you're not familiar with Markdown you should really get familiar now. It's a great language to write without formating text by clicking on fancy icons - it'll be worth it. 

Resources on Markdown:

- [John Gruber's Original Markdown](http://daringfireball.net/projects/markdown/)
- [Github flavored Markdown](https://help.github.com/articles/github-flavored-markdown)


#### 1.2 Front Matter
For sure I want to display your name and URL so your contribution is worth for you. You can give any name and URL your like as long as the websites content is yours (for example your Twitter URL, Github URL, Portfolio/Blog)

Below is an example of a contributors Front Matter
{% highlight bash %}
	{% raw %}
	---
	layout: guide
	title: Jekyll Guide - Explaining Whatever I want
	prev_page: 
	contributor_name: John Doe
	contributor_url: http://john.doe.com
	---
	# the prev_page can be blank, I'll fill it in then
	{% endraw %}
{% endhighlight %}


#### 1.3 Code Snippets
I assume you have some code examples to share, so you may need to highlight them. You can do so adding the Liquid Tags to your markdown.

{% highlight bash %}
{% raw %}
{% highlight html %}
<h1 class="foo">Bar!</h1>
{% endhighlight %}
{% endraw %}
{% endhighlight %}

If you want to use Liquid Tags in your Code Snippet you need to use the [RAW Liquid Tag](http://wiki.shopify.com/Liquid#No_Liquid_Zone:_the_raw_tag).

{% highlight bash %}
{% raw %}
{% highlight html %}
	<h1>{{page.title}}</h1>
	<p>{{ content }}</p>
{% endhighlight %}
{% endraw %}
{% endhighlight %}

### 2. Further Readings
At the end of each page I linked some pages that have related content so any visitor can read on with the topic he's/she's interested in. I'd like you to do so, too. It can be a link to your own website if it's a related article to your topic. 

Below you see an example on how to link your further readings

{% highlight bash %}
{% raw %}
More reads on Jekyll Layouts:

- [Jekyll Docs - Templates](http://jekyllrb.com/docs/templates/)
- You know another good source? [Contribute one on Github](https://github.com/kevingimbel/kevingimbel.github.io/pulls)!
{% endraw %}
{% endhighlight %}

Got your article/page ready? Nice! Contribute via [Pull Request](https://github.com/kevingimbel/kevingimbel.github.io/pulls) on Github.

