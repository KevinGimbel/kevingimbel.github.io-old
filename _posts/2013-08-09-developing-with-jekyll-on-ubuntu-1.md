---
layout: guide
title: Jekyll on Ubuntu 1
category: coding
permalink: /jekyll-guide/
---

In case you don't know Jekyll, this Blog and Portfolio is build with it. Jekyll says: 

>Jekyll is a simple, blog aware, static site generator. It takes a template directory (representing the raw form of a website), runs it through Textile or Markdown and Liquid converters, and spits out a complete, static website suitable for serving with Apache or your favorite web server. This is also the engine behind GitHub Pages, which you can use to host your project's page or blog right here from GitHub.

"Static Site Generator" was the thing that kept me away from Jekyll for some time. I always thought Jekyll was a System that let's me write static pages and builds an website out of them but in fact I was more wrong then ever before: Jekyll works like any other Markdown-Flavored CMS - only without databases and an amazing easy structur. 

Within the next posts I'll explain how to get Jekyll running on Ubuntu 13.04. (because there are some problems and you can save a lot of time following this tutorial), how to start developing your first page, some tricks I found on my way to create my first site and how to set up your Jekyll Blog repo on Github.

### The Shell

When you're on Ubuntu I assume you know how to handle your Shell. When you follow the installation steps as shown on [Jekyll's Page](http://jekyllrb.com) you'll maybe run into some unexpected problems. After researching for a long time and re-installing Jekyll for a few times I found a solution (Some Sources: [Github Issue #](https://github.com/mojombo/jekyll/issues/762#issuecomment-17779206), [AskUbuntu](http://askubuntu.com/questions/305884/how-to-install-jekyll) and again [AskUbuntu](http://askubuntu.com/questions/259823/installing-jekyll-with-gem/302443#302443)).

I combined these solution to the following steps

First I installed Ruby 1.9.3-dev (because Github points out they're running Ruby 1.9.3 for Jekyll Pages [here](https://help.github.com/articles/using-jekyll-with-pages#troubleshooting))