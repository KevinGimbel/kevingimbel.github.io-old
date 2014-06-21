---
layout: post
title: Useful Web Developer Tools
category: coding
tags:
- chrome
- tools
- workflow
---

I myself always like to see what other developers use in their workflow: What tools? What plugin? Live-Reload,
Pre-Proccessors, shortcuts - all that stuff. It's always great to save some time, especially for repeating tasks or
challenges. Today I want to share my list of tool that I use on a daily base for all kinds of things. 

## Browser-based
The following tools are all for Chrome because I use Chrome for most of my development. If you're using another browser
this section will not be relevant and you can skip to the next list.

### Web Developer
[Web Developer](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm) is my personal
number 1 Chrome extension. It's packed with all kinds of functions like responsive previews, disable
actions (for JavaScript, Cookies, CSS) and what so not - in fact I'm pretty sure this extension can do anything you'll
ever need on the front-end.

### Awesome Screenshot
Even though it is not my main screenshot tool (more later), [Awesome
Screenshot](https://chrome.google.com/webstore/detail/awesome-screenshot-captur/alelhddbbhepgpmgidjdcjakblofbmce) really
is handy when it comes to quickly taking screenshots inside the browser. It can capture selections, visible parts and
even the whole website into one picture. The main reason I have this plugin is the easy way of writing into the
screenshots, adding notes or drawing rectangles and circles - that's really the only reason I have this extension.

### Wappalyzer
[Wappalyzer](https://chrome.google.com/webstore/detail/wappalyzer/gppongmhjkpfnbhagpmjfkannfbllamg) shows frameworks and
software used to build the page you're currently on. This tool is really sweet and I only use it because I've been
looking into the source code of several websites to find hints on the used software. Wappalyzer can also show CSS
Frameworks (like Bootstrap or Foundation), JavaScript Frameworks (like jQuery and Prototype), Web Servers (Nginx or
Apache), Operating Systems (that one's interesting I've no idea how this works) or programming languages (Ruby, PHP).
Wappalyzer also sends anonymous informations to its [Web Platform](https://wappalyzer.com/) where you can see statistics
on used software. (This can be turned off in the settings).

### ColorZilla
[ColorZilla](https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp) is a really simple
and easy-to-use tool with the purpose to get color informations from a website. It can be used by clicking the icon or
setting a custom shortcut.

### SoundCloud
Not really a development tool but lots of [good music](https://soundcloud.com/atarijunge/likes)

## Non Browser-based
### Sublime Text 3
After trying a lot of different editors (Some IDE-like, some Sublime Text like) I always came back to Sublime Text
after some while. It's stable, easy to use, easy to customize and has tons of plugins that can enhance your workflow.
Some of my absolute favorite plugins are:
- [Emmet](http://emmet.io), Ex-Zen Coding for generating code from stuff like this `(div>.header>.body>p{Test})*5`
- [(S)FTP Plugin](http://wbond.net/sublime_packages/sftp) Like the name says, used for (S)FTP deployment
- [Package Control](https://sublime.wbond.net/installation) easily install packages from within sublime.

### ScreenCloud
[ScreenCloud](http://screencloud.net) is my number 1 in-OS screenshot tool. It's capable of SFTP uploads, Dropbox
uploads, imgur uploads or local file saves so it has everything I need with 3 options of capturing the screen, the active
window or a selection. It's also multi-OS and runs on Mac, Windows and Linux.

## Command Line
Sweet, sweet command line. Since I switched from Windows 7 to Ubuntu somewhere in summer 2013 I absolutely love the
command line. It's so much easier to navigate through files, find stuff, copy/delete/move/rename stuff - it's just way
faster. My Command Line is opened 24/7 and always there to get me access to whatever I want. So here follows some of my
favorite Command Line based tools.

### Gulp
After fiddling around with [Grunt](http://gruntjs.com) for quite some time I just recently switched to [Gulp](http://gulpjs.com) due to the fact that is is A LOT easier, more logical and faster (as I can tell). However, I'll have to see it in real big projects first I guess. As of now, it powers this sites JS and CSS compression and compiling.

### Image Magick
[Image Magick](http://www.imagemagick.org/) is a simple command line tool to convert or even create images. I must admit
that I'm using it mostly to resize images. Usage is as simple as `$ convert myimg.png -resize 100 myimg_100.png`, this
will resize myimg.png to 100px width and save it as myimg_100.png. 

### VIM
It's been about 2-3 weeks now that I've started to use vim more often and I currently really like it for writing
articles or README files and such like.  Developing in it still feels weird but well, maybe someday.
I'm also continuously updating [my .vimrc](https://github.com/kevingimbel/config/blob/master/.vimrc) on GitHub. In Vim
I'm also using the [Emmet](http://emmet.io) Plugin but the handling of it is a bit weird. In fact I haven't really found
out how exactly Emmet works with Vim. I'm used to have Emmet support all the time and no different modes like VISUAL,
INSERT and COMMAND - so in any of these Emmet works. Anyway, if you know how it works give me a shout!

### Bash
That's not a tool. Or is it? Anyway, I'd like to share my Bash Colors with you, they're also in the [config GitHub
repo](https://github.com/kevingimbel/config/blob/master/shell-color) and given the fact they're standard non-fancy they
should work on almost all systems. Just edit your `.bashrc` or `.bash_profile` and add the PS1 line to it to have a
colored, good looking bash prompt.

So, what tools am I missing? Anything that's a absolute must-have? [Hit me up](https://twitter.com/_kevinatari)!
