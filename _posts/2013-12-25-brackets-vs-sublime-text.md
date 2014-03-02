---
layout: post
title: Brackets vs. Sublime Text 
category: coding
---

I first tried [Brackets](http://brackets.io) back in my Windows time. It was a very early version, kinda heavy and wonky and not what I wanted from an editor I use on a daily base at all. Just today I decided to give it a second look because beside [VIM](http://www.vim.org/) it is *the* editor I read quite a lot about latly. My first impression was: "*Wow, that's a simple, clean editor!*" - exactly the thing I liked so much about Sublime Text 2 which I've been using for the last two years or so.

### Functionality

#### Highlighting
Bracket as well as Sublime Text comes with Syntax Highlighting for almost everything one needs: HTML, SCSS, CSS, JavaScript, Ruby, Python - all of these can be highlighted by default which, in my opinion, is a standard these days. However, as far as I can tell it is easier to customize the Highlight settings in Sublime Text (2) and with the standard Monokai Theme Sublime has a better highlighting than Brackets. Another point is that there is no way (as far as I found) to set a highlight language before saving a file in Brackets - so I can't have Markdown Highlighting for this post unless I save it once which is possible in Sublime Text.

#### Plugins + Installation
Both editor support additional plugins to enhance the workflow. Both support [Emmet](http://emmet.io) which is by far my most needed Plugin as well as FTP Solutions to upload on safe. Both of these are important plugin for my workflow because when developing on a (S)FTP Dev System uploading on save without another program running is a lot faster. I love it. In Sublime Text the easiest way to add new Plugin is through the [Package Controller](https://sublime.wbond.net/installation) - Brackets comes with a build-in Package Manager that makes it super easy to add new Plugins. Here the point goes to Brackets for already build-in Package Management. 

#### UI / UX
Both Editors have a clean and simple to understand UI. The only real difference that's notable in my opinion is that Brackets has open files on the top-left sidebar while Sublime Text has them on top organized as tabs (as well as in the sidebar when displayed). This is a difference at first when you come from Sublime Text and in my opinion it's easier to have open files at the top. Nevertheless in both editors it's possible to go through all open files by hitting `CMD + Tab` which comes very handy. A huge downside of Brackets is that it's not possible to have new files unsaved and then close the editor. In Sublime unsaved files stays as unsaved inside the editor until it is opened the next time. I really like this because in case of a sudden system crash, an electricity failure or whatever else files can still be found after re-booting. Highfive Sublime Text.

Another thing I really miss in Brackets and I got unbelievable used to is multi-select. In Sublime Text it's possible to select multiple points inside a document when holding CMD while clicking inside the document so you can edit as many rows as you want at once - unbelievable useful! 

#### Live Preview
Bracket comes with a Live Preview functionality that allows to display a file inside the browser that'll be updated in real time as you type. I couldn't think of a scenario where I'd need a real-time preview of my file to be honest but it's a cool feature anyway.

#### Auto-Complete
Both Sublime Text and Brackets have auto-complete for CSS. While Sublime Text "only" supports basic auto-complete (e.g. typing `'hei' + tab` will get you `height: `) Brackets supports to "Quick Edit" colors (right-click on a color or use `CMD+E` when hovering it) to bring up a color dialog as show below. This is a nice feature when trying to find a color.

![Quick Edit Colors in Brackets](http://i.kevingimbel.me/sc/screenshot-53-24.png "Quick Edit Colors in Brackets")

Another thing both support is the auto-closing of HTML tags (e.g. `<article>` will get you `<article></article>`).
Unfortunately Brackets does not query SCSS variables. When you define your variables in Sublime and type `$color--` Sublime Text shows all variables starting with `$color--` - that's a thing I really miss in Brackets.
 
#### Debugging 
Brackets comes with build-in JSHint support which is really useful especially for JavaScript beginners like I'm one. You can see in-editor what errors you made - really great!
I'm pretty sure there's a Sublime Text Plugin for this, too but having it build-in is just a great feature. What I'm missing on the other hand is spell-checking. As non-native English speaker spell-checking is always a great thing.

### Conclusion
I'm impressed by Brackets, it's a simple and great editor and I'll definitely keep an eye on it. It's a good, free alternative to Sublime Text 2 (which costs 75$) and worth a try. However, depending on my current workflow I'll stick to Sublime Text for most of my work.
