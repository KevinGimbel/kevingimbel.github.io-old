---
layout: guide
title: Jekyll Guide - Building your first page
permalink: jekyll-guide/first-page/
next_page: /jekyll-guide/layouts/
prev_page: /jekyll-guide/structure/
---

So you came until here, sweet! I'll now give you the basic idea of building own pages for your Jekyll site. 

### Folder-based Pages

This one is actually pretty simple because all you need to do is creating a folder with the name your page should have, for example `yourdomain.com/about` would equal to a folder about that contains a index.html with the contents of your about page. 

Below you see your folder structure with a new folder named "about" that contains an index.html

{% highlight bash %}
- _posts
	'- 2013-08-09-welcome-to-jekyll.markdown 
- _includes
	-
- _layouts
	- default.html
	- post.html
- css
	- main.css
	- syntax.css
- index.html
- about
	- index.html
- _config.yml 
{% endhighlight %}

When you navigate your browser to yourdomain.com/about the index.html should show up. You can continue doing this for all your sub-pages or use the second way.

### Markdown-based Pages

I prefer this way. The starting point is equal, you create a new folder in your root directory but this time instead of an index.html you put and index.md inside. Now you can write your pages in Markdown so as I do with this guide. It's a folder called `jekyll-guide` with a few Markdown files inside.

{% highlight bash %}
'- jekyll-guide
	'- index.md
	'- structure.md
	'- first-page.md
{% endhighlight %}

`index.md` is the first file that will be loaded when you navigate to [kevingimbel.com/jekyll-guide](http://kevingimbel.com/jekyll-guide). The other pages and their permalinks are defined in the Front Matter.

{% highlight yaml %}
---
layout: guide
title: Jekyll on Ubuntu - Building your first page
permalink: /first-page/
next_page: /jekyll-guide/layouts/
prev_page: /jekyll-guide/structure/
---
{% endhighlight %}

I prefer this because I can write in Markdown (I really love Markdown!) and can use the `layout` variable to give those pages an unique look if I want to. 

Whatever technique you choose, here are some resources:
- [Jekyll Docs: Pages with Folders](http://jekyllrb.com/docs/pages/)
- [StackOverflow thread about Pages](http://stackoverflow.com/questions/14668403/how-to-render-a-jekyll-markdown-page-on-sites-index)
