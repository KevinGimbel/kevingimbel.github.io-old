---
layout: guide
title: Jekyll on Ubuntu - The End
permalink: /the-end/
prev_page: /jekyll-guide/layouts
---

By now you should now a bit about Jekyll and how it works. It's always a great idea to look around for Github hosted Jekyll blogs so you can see how others create their blogs.

There is also an [Online Editor for Jekyll](http://prose.io/) so you don't need to write your posts with a Text Editor. (via [erikschwartz.net](http://erikschwartz.net/jekyll-for-the-masses/), contributed by []())

The last thing we need to do is publishing the brand-new Jekyll page to Github. You can use their Apps for [Windows](http://windows.github.com/) or [Mac OS](http://mac.github.com/) to push your site to Github or do it via command line. (Don't be afraid, it's actually not that complicated!)

If you've [Git]() installed you can skip to "Pushing to Github", if not you'll need to install it first. You can read the installation guide if you're not using Ubuntu [here](http://git-scm.com/book/en/Getting-Started-Installing-Git).

{% highlight bash %}
$ sudo apt-get install git
{% endhighlight %}

That's it, git is now installed. Next you'll need to configure it.

{% highlight bash %}
$ git config --global user.name "Your Name here"
# Sets the default name for git to use when you commit

$ git config --global user.email "youname@example.com"
# Sets the default email for git to use when you commit
{% endhighlight %}


### Pushing to Github

First you need to navigate to the folder that holds your site. 

{% highlight bash %}
$ cd /path/to/my/jekyll/page 
{% endhighlight %}

Now you need to initialize a new Git Project

{% highlight bash %}
$ git init 
# A new Git Project will now be initialized

$ git add . 
# adds all files to the current commit

$ git status
# shows the added files, also deleted, changed and new

$ git commit -m "My new Jekyll site"
# the message of your commit. Can be anything you want

$ git remote add origin YOUR_GITHUB_REPO_URL
# the URL for your Repo, 
# e.g. https://github.com/kevingimbel/kevingimbel.github.io
{% endhighlight %}

So far your page is initialized and added to the current commit by git, next it only needs to be published.

{% highlight bash %}
$ git push origin master
# pushs all the files to the previously 
# set Git Repos Master branch
{% endhighlight %}

If your Repo is named your_username.github.io it will be published within minutes and you can see your brand new Jekyll page by brosing to http://your_username.github.io - That's it!

Whenenver you write a new post simply save it in \_posts, navigate to the folder using your command line and then do the following

{% highlight bash %}
$ git add .
$ git commit -m "New Blogpost!"
$ git push origin master
{% endhighlight %}

That's it. Thanks for viewing this guide and I hope I could help you getting started with Jekyll. If you found any issue simply [open a new issue on Github](https://github.com/kevingimbel/kevingimbel.github.io/issues) or [tweet me](http://twitter.com/_kevinatari).