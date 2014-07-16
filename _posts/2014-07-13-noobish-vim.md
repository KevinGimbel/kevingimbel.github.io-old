---
layout: post
title: Noobish VIM
category: coding
tags:
- vim
- editor
---

Since I'm still trying to really get why so many (Front-End) Devs love VIM I tried to find a "good" way to integrate it
into my daily workflow. Since I'm working in a relativley small company it's most of the time stressy to get all things
done and to keep an overview - so long story short: There's not much time for new tools that don't increase my workflow
directly. VIM is one of these tools that don't fully support my workflow at the moment. While on one hand being good at
dealing with text and stuff, it is on the other hand (not-so-easily) capable of stuff like (S)FTP sync, auto complete
through Emmet (I still don't really get how this works in VIM) and the most important thing: It's hard to switch from
Sublime Text. I'm so used to Sublime Text and it's shortcuts, multi-cursor, easy-to-use UI, plugins and what so not.

Anyway, there is a way to make Sublime Text behave more vim-ish. Originally I was searching for a Plugin or something or
a config file to get some VIM keybindings into my safe-zone Sublime Text enviroment. Turns out Sublime Test has this
built-in. In the "ignore_packages" settings is a package called "Vintage". If this line is changed like seen below
{% highlight bash %}
	// ignore nothing 
	"ignored_packages": []
{% endhighlight %}
Sublime Text will switch into "Vintage" mode which basically is VIM-like. It will have the default VIM modes (Command,
Insert, Visual) and all the keybindings. By default it will still start in Insert Mode, to switch this just set the
following inside the user settings:
{% highlight bash %}
	// always start/open files in Command Mode 
	"vintage_start_in_command_mode": true
{% endhighlight %}

With these two settings Sublime Text is ready to run in Vi(m|n)tage mode. This means in particular most (or all?) Vim
commands are available and can be used such as ci" (change in ""), x or r (delete character; replace character below the
cursor in command mode), y and p (yank and put; copy/paste) and so on. I've been working this way for about one week now
and I must say that I really like it. It doesn't hold me back, I can still enjoy my other plugins and if I'm ever
feeling lost I can still use all of Sublime Text's features. So that's it, my current setup to get a around some VIM
stuff while still being productive and fast daily. In my free-time and when writing articles I've almost switched
completly to VIM to dig into it and see if it can replace Sublime Text one day.
