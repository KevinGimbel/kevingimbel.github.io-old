---
layout: post
title: "Snippet: SASS Source Maps with Gulp"
category: coding
tags:
  - gulp
  - sass
---

Yesterday I finally took a few moments to implement Source Maps with Gulp for one of our client projects at work. I
wanted to use the benefits of Source Maps for quite some time but never actually found the time to wrap my head around
it (aka throw in another Gulp plugin). Source Maps are used to connect your pre-compiled files, like Sass, with the
later compiled CSS - so inside the Dev Tools you can see for every line of CSS from which Sass file it comes - this is
super handy once your project get's bigger! Anyway, here's how to implement them with [Gulp](http://gulpjs.com0),
[Gulp-Sass](https://www.npmjs.com/package/gulp-sass) and [Autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer).

First of all, you need to install  the different gulp plugins (and gulp, if you haven't).

{% highlight bash %}
$ npm install --save-dev gulp-sass gulp-sourcemaps gulp-autoprefixer
{% endhighlight %} 

After everything is installed we'll create the basic Gulp setup.
{% highlight js %}
  var gulp = require('gulp'),
      sass = require('gulp-sass'),
      prefix = require('gulp-autoprefixer'),
      maps = require('gulp-sourcemaps');

  var path = {
        scss: './skin/frontend/my-theme/default/scss/',
        css: './skin/frontend/my-theme/default/css/'
      }
{% endhighlight %}

Next the tasks will be created, I split them into 2, one for Sass and Source Maps and one for
Autoprefixer. It's important to create the Source Maps _before_ using Autoprefixer, otherwise the line numbers won't be
right. This happen because Autoprefixer adds more properties to your compiled CSS!

{% highlight js %}
gulp.task('sass', function() {
gulp.src( path.scss + 'styles.scss')
  .pipe(maps.init())
    .pipe(sass({ outputStyle: 'compressed' }))
      .pipe(maps.write())
      .pipe(gulp.dest( path.css ))
});

gulp.task('autoprefix', function() {
gulp.src( path.css )
  .pipe(prefix('last 5 versions', '> 1%', 'ie8'))
  .pipe(gulp.dest( path.css ));  
});
{% endhighlight %}


First of all source maps need to be initalized, next a compressed css file from the SCSS files is created, the source
maps are written and we're all good! In a second task Autoprefixer takes the compiled, mapped CSS file and prefixes it
with whatever needs to be prefixed. The output looks like below (look at the right top of each rule set). Click on each
image to view it in full-size.

<div class="gw">
<div class="g one-half small-one-whole">
<a href="http://i.kevingimbel.me/blog/sourcemaps/source_maps_chrome_dev_tools.png" title="Source Maps inside the Chrome Developer Tools">
  <img src="http://i.kevingimbel.me/blog/sourcemaps/source_maps_chrome_dev_tools.png" alt="Source Maps in Chrome" />
</a>
</div>
<div class="g one-half  small-one-whole">
 <a href="http://i.kevingimbel.me/blog/sourcemaps/source_maps_firefox_dev_tools.png" title="Source Maps inside the Chrome Developer Tools">
  <img src="http://i.kevingimbel.me/blog/sourcemaps/source_maps_firefox_dev_tools.png" alt="Source Maps in Chrome" />
 </a>
</div>
</div>

In case you don't want your source maps in production you could split everything into 3 taks and run them in the order
`["sass", "sourcemaps", "autoprefix"]` using `gulp.task()` and then later have the following production task.
{% highlight js %}
gulp.task('production', ['sass', 'autoprefix'];

// Use the following command to keep out Source Maps.
// $ gulp production
{% endhighlight%}

