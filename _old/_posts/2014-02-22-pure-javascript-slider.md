---
layout: post
title: Pure JavaScript slider
category: coding
tags: 
    - javascript
---

The great thing when you're a beginner in any programming language (or in anything in general) is, that even small successes make you happy and proud of what you did. I'm very  proud of my [back to top script](http://kevingimbel.com/to-infinity-and-beyond/) even though it's not perfect at all. I could make a back to top button with jQuery in a few minutes but it wouldn't be that much fun. However, I made another JavaScript thing I'm proud of: A pure JavaScript slider.

<p data-height="500" data-theme-id="647" data-slug-hash="BxflH" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/kevingimbel/pen/BxflH'>BxflH</a> by Kevin (<a href='http://codepen.io/kevingimbel'>@kevingimbel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

The slider runs forever in a loop, animating images to the left until the last image is reached. When the last image is reached it will animate all back to the first image (I'm not happy with this animation yet) and will start over. Pretty simple. The hardest part for me was - and still is - the animation timing. I'm may over-thinking stuff but I can't figure out a formula to calculate a good timing based on how many images the slider has. If someone has an idea, fork the pen or [tweet me](http://twitter.com/_kevinatari).

First of all I defined some variables. 

{% highlight javascript %}
     // current image is 0
 var current = 0,
     // used for loops
     i,
     // the whole slider element
     slider = document.querySelector('[data-js="sslide"]'),
     // all images inside the slider
     allImages =  slider.querySelectorAll('img'),
     // the width of 1 image based on all images (used in % later)
     imgWidth = Math.ceil(100 / allImages.length),
     // the slider width based on the number of images
     sliderWidth = allImages.length * 100;
{% endhighlight %}

Next I set the width of all images as well as the slider.
{% highlight javascript %}
    
  slider.style.width = sliderWidth + '%';
    
  for(i = 0; i <= allImages.length - 1; i++) {
    allImages[i].style.width = imgWidth + '%';
  }
{% endhighlight %}

Now the slider and images have the correct width (in percent) and I began to make the animation part. It's made with the [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/Window.setInterval) JavaScript function. 

{% highlight javascript %}
    function animateLeft(cur) {
      var i = 0,
          time = 50;
      var animate = setInterval(function() {
      if(i <= imgWidth) {
        allImages[cur].style.marginLeft = "-" + i  + "%";
        i++;
      } else {
        clearInterval(animate);
      }
      }, time);  
   }
{% endhighlight %}

The interval runs as long as `i` is smaller or equal to the image width. Because the interval is set to 50ms it runs "fast" and sets the images `margin-left` rapidly to `-i%` and because it runs as long as `i` is smaller than the image width it hides the image completely to the left. Pretty simple right? However, `time` is at the moment a variable that is set to 50 because I couldn't figure out a good way to calculate it.

Another function I use is `animateRight` that is just the opposite of `animateLeft`. It is only used to animate all images back to the start and has the same markup as `animateLeft` expect it runs revers (`i--`). I combine it with a `reset` function that also resets the `current` variable to 0.

{% highlight javascript %}
  function animateRight(cur) {
      var i = imgWidth,
          time = 50;
      var animate = setInterval(function() {
      if(i <= sliderWidth) {
        allImages[cur].style.marginLeft = "-" + i + "%";
        i--;
      } else {
        clearInterval(animate);
      }
      }, time);  
   } 
    
    function reset() {
      for(i = 0; i <= allImages.length - 1; i++) {
        animateRight(i);
      }
      // resseting the current image to the first image
      current = 0;
    }   
{% endhighlight %}

That's all the functions I needed for this slider - I could've combined the `animateLeft` and `animateRight` function and if I continue developing this slider I'll make it. Last thing to do: Call a final interval that handles the sliding of all images.

{% highlight javascript %}
    setInterval(function () {
      if(current <= allImages.length - 2) {
        animateLeft(current);
        current++;
        
      } else {
        reset();
      }
    }, 3000);
{% endhighlight %}
