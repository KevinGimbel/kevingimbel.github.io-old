---
layout: guide
title: Jekyll Guide - Structure
permalink: jekyll-guide/structure/
next_page: /jekyll-guide/first-page/
prev_page: /jekyll-guide/
---

If you used `jekyll new my-site` you'll see a new directory that contains the following folders and files:

{% highlight bash %}
'- \_posts
	'- 2013-08-09-welcome-to-jekyll.markdown 
'- \_includes
	'-
'- \_layouts
	'- default.html
	'- post.html
'- css
	'- main.css
	'- syntax.css
'- index.html
'- \_config.yml 
{% endhighlight %}

This is the basic and minimum markup for your Jekyll site. Every post you write and save in `\_posts` will later be saves as YYYY-MM-DD-your-post-title.html inside the `\_site` folder (which will be automatically created). I'll cover up the basic usage of every folder next.


### \_posts
- holds your posts
- every post needs to be written [Markdown](http://daringfireball.net/projects/markdown/) or [Textile](http://redcloth.org/textile)
- file names must be YYYY-MM-DD-title.file_extension (e.g. 2013-08-09-my-awesome-post.md / 2013-08-09-my-awesome-post.textile )


### \_includes
- holds all files that can be includes
- I use this folder to include header.html and footer.html on all pages


### \_layouts
- holds all your layouts for different page types
- e.g. post.html for blog posts, page.html/default.html for other pages, front-page.html for your index.html
- you can create any layout file you want and later use it with Front Matter (which I'll cover below)


### css
- some basic CSS
- syntax.css is used to highlight syntaxes later, I kept the file because I liked it


### index.html
- the starting point of your website, no need to explain


### \_config.yml
- the main config file
- you can configure a lot of stuff here, the baseurl, the Markdown Processor, the Page Directory (normally the \_site folder, can be anything else) and a lot more
- I'll not cover everything for \_config.yml so please visit the [Official Docs](http://jekyllrb.com/docs/configuration/)

### Front Matters

I mentioned Front Matter before. This is the point where Jekyll gets really cool. Every Post or page needs to contain a Front Matter at the top of the file. This pages Front Matter looks as following

{% highlight yaml %}
---
layout: guide
title: Jekyll on Ubuntu - Structure
permalink: /structure/
next_page: /first-page/
prev_page: /jekyll-guide/
---
{% endhighlight %}

It contains the Layout which tells Jekyll what file from the \_layout directory should be used, the title of the Page that will be displayed with Liquid's syntax later a Permalink (in this case, because this is a Site and not a Post, Posts will get Permalinks automatically) and the next_page and prev_page that act as Navigation.

You can write every Variable you want to your Front Matter. The minimum required is `layout` and `title`.

### Liquid

Liquid, developed by [Shopify](http://wiki.shopify.com/Liquid) is an amazingly easy way to output Variables (such as the Front Matter part) on Websites. Jekyll is build to support Liquid in any way from displaying a date of a Post to displaying own variables from your Front Matter.

A very basic example of Liquid is to display the Posts title.

{% highlight html %}
<h1> {% raw %} {{ page.title }} {% endraw %} </h1>
{% endhighlight %}

I guess the most important thing to understand about Liquid in first place is, that one pair of curly brackets with percentage is used for functions like if/elsif/else. 

{% highlight html %}
{% raw %} {% if page.prev_link %} <a href="{ { page.prev_link } }">Previous</a> {% endif %} {% endraw %}
{% endhighlight %}

The above snippet writes a previous link to the page if there is a prevoius link set in the Front Matter.

To output your post you can (or better must) do the following

{% highlight html %}
{% raw %}
{% for post in site.posts %}
<article class="single-post">
    <h3><a href="{{post.url}}">{{ post.title }}</a></h3>
    {% if post.category %} 
        <span class="single-post__category">{{ post.category }}</span>
   {% endif %}
   <section class="post__body">
		{{ post.excerpt }}
    </section>
</article>
{% endfor %}
{% endraw %}
{% endhighlight %}

Resources for Liquid and Jekyll Variables:   
- [Jekyll Variables](http://jekyllrb.com/docs/variables/)
- [Liquid Docs](http://wiki.shopify.com/Liquid)
