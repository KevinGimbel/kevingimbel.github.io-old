---
layout: post
title: Ghost in the shell
category: coding
---

Finally [Ghost](http://ghost.org) launched to the public! I waited for this CMS since I first heard of, at this time my blog was running on WordPress which always felt overloaded. WordPress has a lot of functions and stuff I don't need when publishing a few articles a month to the Internet. However, I switched to Jekyll as you may know and now there is Ghost. It felt like it'd be my birthday while unpacking the *.zip file. Anyway, I want to write a small installation guide, tell you something about my first impressions and how theming with Ghost works.

Ghost runs on [Node.js](http://nodejs.org) which is basically a installable version of [Google Chrome's v8 JavaScript Engine](https://code.google.com/p/v8/), in other words Ghost doesn't use PHP or Ruby to run it just needs a Node Process.

### Installing Node.js
First of all you have to install Node.js from [http://nodejs.org/](http://nodejs.org/). Afterwards go back to your terminal and run the following

### Installing Ghost
Now you need to sign-up and download the Ghost source code from [https://ghost.org/](https://ghost.org/). Unpack the zip into the directory of your choice (mine is `var/www/`), open a terminal, navigate to the directory and enter the following:

{% highlight bash %}
# prefix with sudo on Ubuntu!
$ npm install --production
{% endhighlight %}

After the installation process is finished run `$ npm start` to start the Node.js Server. Your brand-new Ghost site should now be running on 127.0.0.1:2368.

If you see the Ghost site navigate to 127.0.0.1:2368/ghost and sign-up (again) for your own local Ghost installation. You can, in fact, ignore the eMail warnings (or [read this to set up your eMail Account](http://docs.ghost.org/mail)).
So far your Ghost page is running locally and you can start writing posts.

### Themes
Themes in Ghost are something completely new for me. They're using [Handlebars.js](http://handlebarsjs.com/) which looks like [Liquid](http://docs.shopify.com/themes/liquid-basics) used by Jekyll on first sight. 

After I wrapped my head around Handlebars and the Ghost default Theme "Casper" I found it easy to manipulate and build my first Theme.
Basically Ghost can work with 3 layout files: post.hbs, default.hbs and index.hbs - they're pretty self-explaining though.

#### index.hbs 

{% highlight html %}
{% raw %}
{{#post }}
  <article class="post">
    <hgroup>
      <h2>{{{title}}}</h2>
      {{#if author}}
        written by {{author.name}}
      {{/if}}
    </hgroup>
  </article>
{{/post}}
{% endraw %}
{% endhighlight %}

The above snippet simply outputs the title of the post and the author's name if one is given. A pretty neat thing about Handlebars is, that everything between `{{#post}}` and '{{//post}}' automatically gets pulled from the post it belongs to. As I mentioned above this looks a lot like Liquid as you can see in the [first code example here](http://kevingimbel.com/jekyll-guide/layouts/).

I'll not get into detail on how to style `post.hbs` because it is nearly the same. `default.hbs`, however, is a bit more interesting.

#### default.hbs
First I thought this would be the "default" layout if no format is given (like in Jekyll) but it's a lot more important: `default.hbs` holds the entirely page and all the posts get included into it!

{% highlight html %}
{% raw %}
<html>
  <head>
    ...
  </head>
  <body>
    # build your header and stuff here
    {{body}}
    # build your footer here
  </body>
</html>
{% endraw %}
{% endhighlight %}

The `body` handlebar is the point where another pages content gets included. To tell a layout that it will be included into another file you simply write `{% raw %}{{!< default}}{% endraw %}` in the first line of it.

This is a pretty handy feature I think. So far Ghost and building Themes for it is pretty easy and handy to use. You have to learn Handlebars to get the full potential out of it but that's OK I'd say. However, I'll now show off some things that I don't like or found confusing (still locally, deploying to a server comes later!)

{% highlight html %}
{% raw %}
{{! Ghost outputs important scripts and data with this tag }}
{{ghost_foot}}
{% endraw %}
{% endhighlight %}

So Ghost, please tell me more about "important data and scripts". I haven't found any file that contains this data or scripts and I wasn't sure if this tag is only needed for the Casper Theme or if it's important for other stuff. In the end I just left it there. 

Beside this tag I found another, kinda self-explaining tag: `{{pagination}}`    
{% highlight html %}
{% raw %}
{{!! After all the posts, we have the previous/next pagination links }}
{{pagination}}
{% endraw %}
{% endhighlight %}

Cool, so Ghost builds me a pagination! But wait, I'd like to style it. So...where's the pagination layout? I searched it inside my themes directory (because I copy/pasted the Casper Theme to modify it) but there was no file that holds the pagination. After searching around for quite some time I found it inside `core/server/helper/tpl` - I have no idea why this helper is here. However, it's a `*.bhs` file so customizing it is the same as with any other file. 

That's it on themes and structure for now, let's see how we get this Baby online!

### Deploying

First of all you need two things: 1

* Time
* A server 
  *with SSH connection via Terminal
  * Node.js
  * Daemons
  * sqlite3

In before, I couldn't make Ghost running on my server and I'm not sure why this is so. The Service is running, the logs say it's running, the subdomain works (checked with a index.html inside the Ghost Directory) but for whatever reasons nothing gets compiled.

I could tell you what exactly I did on my server but I'd rather like to redirect you to some posts explaining the installation (all on [Uberspace.de](https://uberspace.de) but most of it should work with your server, too).

* (DE) [Uberspace Wiki](https://uberspace.de/dokuwiki/cool:ghost)
* (EN) [How to Setup Ghost on Uberspace.de](http://christophvoigt.com/how-to-setup-ghost-on-uberspace-de/) by Christoph Voigt
* (EN) [Setting up Ghost in a Sub-Directory](http://ghost.jotbe.io/setting-up-ghost-on-uberspace/) by Jan Beilicke

What I can tell so far is: If you're not familiar with working over SSH and logged-in via your terminal setting up Ghost is a pain in the ass. I'm ashamed to say I wasn't able to get it running even thought the service itself *is* running as my Log-Files tell me. 
![Log file for Ghost Daemon](http://static.kevingimbel.com/blog/ghost/ghost_log_message.png)

The more I worked with Ghost on the server side one thing came to my mind: It's not just a blogging Software, it's made to sell hosting. As some other people already said it is a kinda smart decision to write a great Blog System that is not-so-easy to install so you can sell your own Hosting Services with it.

### Conclusion
Non-Tech People will not be able to install Ghost on their servers, Ghost requires Node.js which isn't a default installation on servers yet (even though some have it), Ghost is at least locally fast and easy to setup. The Theme system with Handlebars is also pretty nice and they have the most beautiful back-end I saw so far. 
Regardless of all the good aspects, overall I'm disappointed by Ghost. I'll stick to Jekyll and Github Hosting. I'll try to deploy Ghost and work around with it just for the sake of learning something new but as engine to build my Blog it has not convinced me so far.


You may have noticed that the Title is a reference to [Ghost in the Shell](http://de.wikipedia.org/wiki/Ghost_in_the_Shell) which is a great Manga from 1989.