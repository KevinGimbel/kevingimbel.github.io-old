---
layout: post
title: Jekyll on Ubuntu
category: coding
---

> Running Jekyll on Ubuntu was an not-so-funny adventure so far. I first started with installing the gems and updating my system to the latest Ruby. Everything was good so far.

Then, after developing my first Jekyll powered site within a few hours everything broke down and went totally insane - I did, too. At this point I could've switched to another system like [AnchorCMS](http://anchorcms.com) or [Kirby](http://getkirby.com) but I wanted to host my new blog on Github - so Jekyll was my first choice and still is.

### Fixing the main Bugs


Something went wrong with my Jekyll installation on Ubuntu 13.04. and I had no idea what it was so I tried everything

-   re-wrote the blog from scratch
-   re-wrote the \_config.yml
-   copy-pasted from a working blog on Github

Nothing worked so I opened all my files in [Sublime Text](http://sublimetext.com) and tried to find a bug, a spelling mistake or whatever could get me this errors.
Later my research showed that many people running Jekyll on Ubuntu do have the same or equal problems. Finally, a first step to get Jekyll working was to remove Jekyll and Ruby and re-install both (Note: Someone on StackOverflow pointed out that he installed the Ruby Developer Preview to get things to work).


When I now run jekyll build safe I get only one Error. Win? Win! 


So, what's that error? My first thought was it's inside Jekylls core, but my second thought was "Why should I have an error inside the core when others can run Jekyll?". So I started searching. It was, guess where?, inside \_config.yml!
I changed limit_posts to nil because the previous Jekyll errors sad it must be nil and not 0 (like the copy-pasted version I used was). So, at this point everything was working again.

Some notable Links on running Jekyll on Ubuntu:

-   [Installing Rdoc and Ri before Jekyll](http://askubuntu.com/questions/259823/installing-jekyll-with-gem/302443#302443)
-   [Same answere here on Github](https://github.com/mojombo/jekyll/issues/762#issuecomment-17779206)
-   [How to install Jekyll on Ubuntu](http://askubuntu.com/questions/305884/how-to-install-jekyll) 