---
layout: post
title: From 0 To Sass
category: coding
---

If you're a Front-End Developer you may have already heard about Pre-Processors such as [Sass](http://sass-lang.com), [LESS](http://lesscss.org/) or [Stylus](http://learnboost.github.io/stylus/). It's fair to say that they're all good and which one you use is up to you or your team. I prefer Sass with the SCSS Syntax (= keeps semicolons and brackets).

Even though Pre-Processors are easy to use and setup some people are still confused: *Do I have to run them on a server? How do I install them? Why should I use them?* - I want to answer all these questions in this article: Getting from 0 to Sass in X Steps! 

**Notice:** This guide covers the installation on Linux and Mac only, for Windows support please take a look at [this tutorial](http://www.impressivewebs.com/sass-on-windows/).

### Sass summary
Sass was build by [Hampton Catlin](http://www.hamptoncatlin.com/) and [Nathan Weizenbaum](http://nex-3.com/). Since late 2008 [Chris Eppstein](http://chriseppstein.github.io/) is also on board, he's also the creator of [Compass](http://compass-style.org/) which is a CSS3 Framework for Sass (I'll cover Compass and other Frameworks for Sass later).

Sass enables you to use Variables, Functions and Mixins inside your CSS. This comes very handy because a stylesheet gets amazingly maintainable with variables and mixins.

Before we start I want you to notice something important about Sass: Sass runs on ruby so you have to install Ruby if it's not (Yeah Windows, I'm looking in your direction!) - on Mac and Linux Ruby should be installed. All code blocks starting with `$` need to be inputed into a Terminal (without the *$*!). On Max OS X and Linux you may need to put a `sudo` command before every command prompt.

Simply check your ruby version by typing the following
{% highlight bash %}
$ ruby --version
ruby 1.9.3p194 (2012-04-20 revision 35410) [i686-linux]
{% endhighlight %}

### Installation
You've maybe tried to install Sass previously and maybe it is still installed.
{% highlight bash %}
# checking the installed Sass Version
$ sass --version
# If up to date the output (as of today, 10/2/13) is
Sass 3.2.9 (Media Mark)
{% endhighlight %}

If you get an error such as "command not found" Sass is not installed, so we start from 0.
{% highlight bash %}
$ gem install sass
{% endhighlight %}

Your Terminal will now show you the download and install process for Sass, depending on your internet connection this may take a while.
After things are finished we'll skip the step of testing Sass directly or using it on its own - trust me here, it's way better to install Compass first. 

### Compass
Compass is a Framework for Sass that comes with a ton of build in Mixins and Functions that you'll love. I'm using compass for every project - no matter if small or large.

{% highlight bash %}
# updating the system first so everything is running correctly
$ gem update system
$ gem install compass
{% endhighlight %}

After compass is installed simply head over to your Local Web Direction (in my case this is `var/www/`) and run 

{% highlight bash %}
$ compass create myproject
{% endhighlight %}

It doesn't matter what you call `myproject` - I've only used this command once in my life. Anyway this will create a config.rb file that you should open next.

The `config.rb` is well commented, below you can see my file (just in case you don't edit the wrong file by accident)
{% highlight ruby %}
# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "assets/css"
sass_dir = "assets/css"
images_dir = "assets/img"
javascripts_dir = "assets/js"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
{% endhighlight %}

I changed the path (`css_dir`,`sass_dir`,...) so that they match my standard folder setup for projects.I do also always compress my files by changing the `output_style` to `:compressed`.

{% highlight bash %}
# You can select your preferred output style here (can be overridden via the command line):
output_style = :compressed
{% endhighlight %}

The `config.rb` is essential for running Compass. You have to Copy and Paste it into every root direction of your project. See and example below:
{% highlight bash %}
# lets say this is the folder var/www/my-new-project
# this is the root of your project where your config.rb
# needs to be placed - NOT inside assets/css as many think!
'- assets
    '- css
        '- style.scss
        '- style.css
    '- js
        '- jquery.min.js
        '- main.js
    '- img
'- about
    '- index.html
'- imprint.html
'- index.html
'- config.rb
#   '- there it is, the config.rb!
{% endhighlight %}

Sass and Compass are now installed and ready to use. This is, in my opinion, best made via the good old Terminal!

So let's navigate to our folders and run our first command. 
{% highlight bash %}
# switching to our project folder
$ cd var/www/my-new-project
# telling compass to compile our files
$ compass watch
{% endhighlight %}

Compass is now watching for changes and everytime you save your `style.scss` it will automatically create an style.css out of it. Still wondering what all of this is about? 

### Variables 

Let's start with Variables because I assume you know what they are and have already seen variables in other programming languages.

{% highlight scss %}
// Variables start with a $, e.g.
$main-color: #85c226;
{% endhighlight %}

Variables must be declared **before** they're used, that's why I recommend to declare all variables at the top of the document (or inside a other stylesheet that can be included, more later on).
To use a variable you simply write it to the place you want it to be used. Logical, isn't it?

{% highlight scss %}
$main-color: #85c226;

.my-class {
    border-top: 1px solid $main-color;
}
{% endhighlight %}

The above snipped will be compiled to

{% highlight css %}
.my-class {
    border-top:1px solid #85c226;
}
{% endhighlight %}

Basically that's it. You can store Strings, Colors, and other variables inside a variables. More on variables can be found inside the [Sass Docs](http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#variables_).

### Mixins

Mixins are getting a little bit more interesting. They're snippets of code you can use, for example, to save the vendor prefixing. Compass comes with build-in Mixins but you can also create your own Mixins. To use the Compass Mixins you have to include Compass on top of your style.scss as followed:
{% highlight scss %}
// import everything that compass has
@import "compass";
// import special library (e.g. css3)
@import "compass/css3";
{% endhighlight %}

{% highlight scss %}
// creating a mixin
@mixin border-radius($r) {
    -webkit-border-radius:$r;
    -moz-border-radius:$r;
    -ms-border-radius:$r;
    -o-border-radius:$r;
}

// using it inside a class
.my-class {
    width:20em;
    height:auto;
    @include border-radius(5px);
}
{% endhighlight %}

The mixin can be created once and then be reused everywhere inside your style.scss - it'll save you a lot of writing whenever you have to apply a border to an object. The `border-radius()` mixin is also build-in to Compass. The output in style.css will be as following:

{% highlight css %}
.my-class {
    width:20em;
    height:auto;
    -webkit-border-radius:5px;
    -moz-border-radius:5px;
    -ms-border-radius:5px;
    -o-border-radius:5px;
}
{% endhighlight %}

There are more super useful build in function in Sass. Some of my favorite are `darken()` and `lighten()` for colors.
{% highlight scss %}
$my-color: red;
$my-color--dark: darken($my-color,10%);
// this will produce a hexadecimal code (e.g. #132644) of a 
// color that is 10% lighter than red.
// syntax: 
# lighten(color,percent)
# darken(color,percent)
{% endhighlight %}

### Structure, Files and Folders
Before this Guideline to Sass ends I want to talk about structures, files and folders. Compass is able to watch a whole directory of files so you can go totally crazy by striping down your CSS file into a lot of small files. Your css folder could look like this:

{% highlight bash %}
'-css
    '_includes
        '- _article.scss
        '- _header.scss
        '- _menu.scss
        '- _imprint.scss
        '- _front-page.scss
        '- _sidebar.scss
        '- _plugins.scss
        '- _mixins.scss
    '- style.scss
    '- style.css
{% endhighlight %}

The amazing thing about Compass is: every file that starts with `_` is not compiled. So in the above folder tree there's still only `style.scss` that will be compiled - but all the others can be included. **Wow but what about performance with all those files?** you'll maybe ask yourself? The point is: There's still just one file, the style.*css* that will be included to the page later - so all the other files only exist locally on your computer. 
If you want to have an example what the `style.scss` would look like, here's the one I [used for my blog](https://github.com/kevingimbel/kevingimbel.github.io/blob/v1/assets/css/style.scss).

Sass and Compass are amazing, powerful tools and you, as a Front-End Developer, should be able to work with both. This small summary of the basic Sass features is just the top of the iceberg - there's a lot more to explore about [Sass](http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html) and [Compass](http://compass-style.org/reference/compass/).

You should also check out [Ana Tudor](http://codepen.io/thebabydino/) on CodePen, she's doing amazing stuff with Sass and Maths!

Further reading:

- [Sass Docs](http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html)
- [Compass Docs](http://compass-style.org/reference/compass/)
- [The Sass Way](http://thesassway.com/)