---
layout: post
title: "Speed up your Jekyll workflow"
tags:
  - jekyll
  - ruby
  - development
---

Lately I had a hard time working with my own website. Whenever I wanted to make some updates, write a post or fix a little buggy thing it only took a few minutes of "work" to get me really frustrated. Jekyll, despite my love for it, has become horribly slow. My site, which I consider rather "simple", took 17-20 seconds to build on every change! Changing the CSS? Rebuild entire site. Changed one character in a JavaScript file? Rebuild entire site. Update one article? Rebuild entire site - this is frustrating and unecessary! Luckily, I just found a perfect solution.

I was researching how to speed up a Jekyll site and if there was any news or whatsover from the Community when I found [an old issue](https://github.com/jekyll/jekyll/issues/706) on GitHub with a [comment by Parkr](https://github.com/jekyll/jekyll/issues/706#issuecomment-25411224) that pointed me in the right direction: The `guard-jekyll-plus` Gem. As a person who has no idea of Ruby other that it has a rather beautiful looking syntax and `Gems` are somewhat related to it, I went on and set up the "environment" and programs needed. These were, basically, `bundle`, a `Gemfile` and a `Guardfile`.


{% highlight javascript %}
# on Ubuntu
$ (sudo) apt-get install bundler
{% endhighlight %}

{% highlight ruby %}
# The Gemfile
source 'https://rubygems.org'
gem 'guard-jekyll-plus'
{% endhighlight %}

{% highlight ruby %}
# The Guardfile
# Taken directly from https://github.com/imathis/guard-jekyll-plus

ignore /^_site/ # NOTE: this can interfere with Guard::LiveReload

guard "jekyll-plus", :serve => true do
  watch /.*/
end
{% endhighlight %}

The `Gemfile` - which seems to be a list of dependencies, similar to the `dependencies` list in a `package.json` file for Node - is probably the most basic representation of such a file. I first put in only the `gem 'guard-jekyll-plus'` line but then it started to throw errors and said I need to define a source - which I then did. Case closed, moving on.

The Guardfile is directly taken from [The guard-jekyll-plus GitHub repository]( https://github.com/imathis/guard-jekyll-plus). As far as I understand it runs the watching and serving (normaly done by `jekyll --watch`) through the [`Guard`](https://github.com/guard/guard) task runner (`task runner` might be super simplified here) - so `Guard` and `guard-jekyll-plus` now decide when to rebuild things and what needs to be rebuild.

Once the configuration is set up you can run `$ bundle install` to install the dependencies and then `$ guard` to start the guard process. Guard will then run, serve up the Jekyll site on `localhost:4000` (or whatever is specified in jekyll `_config.yml`) and watch the files. From my previous 17-20 seconds of build time I am now **down to 1.2 seconds**. ONE POINT TWO SECONDS - this is amazing! Roughly 15x faster than just with Jekyll alone.

I have no idea why there is no mention of this method on the official Jekyll Website. Everyone who uses Jekyll and is frustrated with slow build times should consider looking at `Guard` and `jekyll-guard-plus`. I can highly recommend it.
