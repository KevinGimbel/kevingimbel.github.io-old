---
layout: post
title: "Getting into Performance Measurment"
category: coding
tags: 
  - javascript
  - tools
  - css
---

I've spent the past week developing some features for our own website at work.
We're using WordPress and I almost always enjoy working with WordPress beside
Magento projects, it's way easier to keep an overview and with a good overview
of data flow and available data it's easier to measure and find performance
bottleneck. In the following post I want to examine my workflow and the way I
refactored our code base to increase the speed and overall performance of our
site.

### Mesuring load times

#### WebPageTest.org

With [WebPageTest.org](http://webpagetest.org) it is quite easy to measure load
times, render times, asset loading times and non cached assets. WPT even shows
which assets should be cached or served via a CDN. Initially it checks for First
View  and Repeat View and outputs a table of numbers and fancy graphics. The
thing I've been most interested in were First View and Content Breakdown. The
Content Breakdown showed that ~66% of our landing page consist of images so
optimizing these images (see below) was a natural approach to boost performance.
When testing with WebPageTest I like to select the second fastest Internet
connection and a location somewhere relevant (for this site America, for our own
somewhere in Germany).

Then I watch the videos and see how the loading wents on. At first it was a
blank page and after 2.5s the page "suddenly" rendered all content at once. This
was not the desired behavior and so I started testing more.

#### (Chrome) Developer Tools 

Using the Developer Tools I cleared the cache and measured a "fresh" load of our
site to see how content is loaded and where rendering starts. It turned out that
rendering was blocked by several JavaScript files (third party) and Google
Fonts, which where loaded from within our CSS files as well as the high amount
of non-optimized images. All these things can be seen in the Network Tab. 

In Chrome there are 2 vertical lines - blue and red. The blue line marks the
time at which the `DOMContentLoaded` event is fired, that is when the DOM is
ready to be manipulated by JavaScript. The red line marks the moment where the
`load` event fires. This event indicates that all content (CSS, JavaScript,
Images, etc.) has been loaded.

> Measuring performance and finding obvious bottlenecks has become fairly easy
> nowadays. With Tools like [WebPageTest.org](http://webpagetest.org), Developer
> Tools or automated testing suits there are a ton of ways to analyze a
> the loading behavior of a website.

With these two tools I started tracking down the various performance issues.
First of all the blocking JavaScript and a bit of unused code.

### Unused Code

While checking the Network Tab in Chrome Dev Tools I've seen that out of 16 Requests 
one JavaScript Analytics Library was blocking the
rendering by almost 600-800ms. Because it was barely used I removed this one so
there was already a big improvement by removing unused or barely used code - one
should always check for unused plugins, libs and CSS - this is the most basic
"improvement" and optimization. 

> Regularly refactor your code base to see where unused code exists or
> code can be optimized. By ueing a Pre-Processor it's easy to remove the code 
> from production but keep it for later by using an [import system](http://sass-guidelin.es/#main-file).

 
### Minify

Minifying files is always a good thing. No doubt. Use
[Uglify](https://github.com/mishoo/UglifyJS) for JavaScript
and your favorite pre-proccessor's compress function.

### Images

Next I found that our landing page is pretty image heavy, especially with a big
banner image. To reduce the size I searched for plugins to automate the process
but couldn't find a good one so I tried out [PNGQuant](http://pngquant.org/) a
Command Line tool for PNG optimization. With this tool I could reduce the size
of almost any image by 50-70% which again reduced the load time by 100-200ms.

> Always optimize images, either with a tool before uploading them or with a
Plugin. Not optimizing images is a waste of time (literally) and bad for users.

### Fonts

As I mentioned earlier, rendering was also blocked by Google Fonts being
directly included into our Stylesheets. Out of curiosity I checked if loading it
asynchronously via the provided snippet from Google Fonts would help and indeed
it did! We saved almost 100ms simply by loading the Font files asynchronously.

On the very First View this can make the content 'jump' a bit because the
initial view loads with a fallback font (sans-serif, for example) and then once
the Font is loaded from Google's CDN it replaces the old font with the new font
on-the-fly. This may looks ugly and if you absolutely can not live with it you
must take the 100ms-slower Pill and include the fonts in your CSS where they'll
be loaded before the CSS is rendered - therefore no delay. 

Below is the function that'll load the fonts via a script tag that as the
`async` attribute set. 

{% highlight js%} 
WebFontConfig = {
  google: { families: [ 'Open+Sans:400,300,600:latin' ] }
};
(function() {
 var wf = document.createElement('script');
 wf.src = ('https:' == document.location.protocol ? 'https'
   : 'http') +
 '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
 wf.type = 'text/javascript';
 wf.async = 'true';
 var s =
 document.getElementsByTagName('script')[0];
 s.parentNode.insertBefore(wf, s);
 })(); 
{% endhighlight %}

> Font rendering from within CSS can block the overall load time of the CSS
> file. Splitting out the fonts from the CSS and loading them via JavaScript (if
> possible) may increase the initial load time of the website.

### Server-side optimizations

There's quite a lot to do when optimizing from the server side. From things like
optimizing Queries, Caching Queries to using the variety of Apache or Nginx
Modules and settings to optimize the servers workflow. While we have our site at
a specific WordPress Hoster our access to server features is mainly limited to
their admin interface and using the `.htaccess` - which is what I did.

#### Expire Dates
{% highlight html %}
# caching for 1 month
<IfModule mod_expires.c>
 ExpiresActive On
 ExpiresByType text/css "access plus 1 month"
 ExpiresByType text/javascript "access plus 1 month"
 ExpiresByType text/html "access plus 1 month"
 ExpiresByType application/javascript "access plus 1 month"
 ExpiresByType image/gif "access plus 1 month"
 ExpiresByType image/jpeg "access plus 1 month"
 ExpiresByType image/png "access plus 1 month"
 ExpiresByType image/x-icon "access plus 1 month"

  <FilesMatch "\.(gif|jpe?g|png|ico|css|js)$">
    Header set Cache-Control "public"
  </FilesMatch>
</IfModule>
{% endhighlight %}

#### Compression with mod_deflate
With this snippet above we tell the server to cache certain file types by 1
month (if they don't change of course). This way the server can sent back the
files from its cache instead of re-generating the files all the time. Next I
used `mod_deflate` to compress the files before they are sent to the client. 

{% highlight html %}
# Deflate Compression by FileType
<IfModule mod_deflate.c>
 AddOutputFilterByType DEFLATE text/plain
 AddOutputFilterByType DEFLATE text/html
 AddOutputFilterByType DEFLATE text/xml
 AddOutputFilterByType DEFLATE text/css
 AddOutputFilterByType DEFLATE text/javascript
 AddOutputFilterByType DEFLATE application/xml
 AddOutputFilterByType DEFLATE application/xhtml+xml
 AddOutputFilterByType DEFLATE application/rss+xml
 AddOutputFilterByType DEFLATE application/atom_xml
 AddOutputFilterByType DEFLATE application/javascript
 AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>
{% endhighlight %}

Now all our files are cached and gzip (compressed). Additionally our Hoster has
its own cache (Varnish) which should benefit to our sites overall performance, too.

> Use your servers configuration to serve compressed and/or cached files instead
> of re-generating the files on every request. Make sure to cache static content
> like images, javascript or css.

### Lazy-load JavaScript

We've been using our own delayed load for JavaScript assets ever since I started
working at [Synoa](http://synoa.de). We use the following function to include
our minified JavaScript after the DOM is loaded, if possible.

{% highlight js %}
var loadAfterDom = function() {
  var script = document.createElement('script');
  var body = document.body;
  
  script.type = 'text/javascript';
  script.src = 'path/to/main.min.js';
  
  document.body.appendChild(script);
}
// load the script when the DOM is constructed
if(window.addEventListener) {
  window.addEventListener('DOMContentLoaded', loadAfterDom, false);
} else if(window.attachEvent) {
  window.attachEvent('load', loadAfterDom);  
} else {
  window.onload = loadAfterDom;  
}
{% endhighlight %}

This little script loads the `main.min.js` file after the DOM is constructed so
it doesn't block the rendering of the page.

> Lazy loading JavaScript only works when JavaScript is not needed for the
> initial view (which it shouldn't). When you need JavaScript on render time to
> hide elements, for example, it may be better to hide them initially and show them after the
> page is loaded!


### What could be done next?

Next we could think about inlining our Critical Path CSS using a Grunt or Gulp
task, as Google PageSpeed suggests all the time. I've yet never done this before
and need to try it before I can say if it's worth or not.

In another round we could review the entire code base and replace the legacy
Compass compiler with modern, [node-sass](https://github.com/sass/node-sass) and
[Libsass](https://github.com/sass/libsass), a C++ implementation of Sass that is
a lot faster than Ruby, to increase compile performance. Most of the vendor
prefixing is done using own mixins or compass functions (which are legacy), so
handing the prefixing job to [Autoprefixer](https://github.com/postcss/autoprefixer) 
is another desirable improvement.

### Result

At this point, our website performs at 900ms-1.2s in load time for the front page
and 700-800ms for most sub pages. Yet there is still optimization that need to
be done, especially the question on how to integrate the optimization into
everyone's workflow. While developers could use a grunt/gulp/cli task the people
who actually write content need an easy way to handle the optimization of
uploaded files. The last resort of more optimization is the server respond time
on which we don't have any influence. 
