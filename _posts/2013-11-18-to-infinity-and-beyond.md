---
layout: post
title: To infinity and beyond
category: coding
---

While I was re-designing my Website I decided to finally add some JavaScript to it. I'm learning JavaScript for like 2 months now and - to be honest - I finally understand most of the things I'm doing. Yesterday night's topic was a "Back to Top" Button written in Vanilla JS. Actually the code behind it is *kinda* simple, however, I wrote an endless function that got to infinity and beyond (that's where the title comes from. I'm so funny.)

Because I still like to google around while writing JavaScript I stumbled upon a function that looked okay to me. 
{% highlight js %}
function scrollToTop() {
  if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
    window.scrollBy(0,-50);
    timeOut=setTimeout('scrollToTop()',10);
  }
  else clearTimeout(timeOut);
}
{% endhighlight %}

The problem with this one was: It didn't work. So I looked around and found `setInterval()` which seemed to me a bit like `setTimeout` and - in my opinion - would mix perfect with `scrollBy(x,y)`. I was right, hurray!

So my function then looked a bit like this (I'm not exactly sure, it was kinda late already).
{% highlight js %}
function scrollToTop() {
    if(window.scrollY!=0) {
        var scrollBack = setInterval(function() {
            window.scrollBy(0,-50);
        },10);
    } else {
      clearInterval(scrollBack);
    };
  }   
{% endhighlight %}

I applied the function to a button, the page scrolled up and I was happy. I [tweeted](https://twitter.com/_kevinatari/status/402189289422721024) about it just to find out that my Interval wasn't cleared and I [could never scroll down again](https://twitter.com/_kevinatari/status/402190105533640704) after the function was triggered. Yeah! Awesome.

Well, I thought more about it and read again about `setInterval` and - most important - the actual object I'm checking. `scrollY` was the right direction and I decided it must be the Interval that's wrong. I was right and came up with this sweet function!

{% highlight js %}
// notice: backTop is my back to top button!
  backTop.addEventListener("click",function() {
    // setting an interval 
    var toTop = setInterval(function() {
      // if we're not on top of the page
      if(window.scrollY != 0) {
          // we scroll back to the top [scrollBy(x,y)]
        window.scrollBy(0,-50);

            // in case we're at the top (window.scrollY = 0)
      } else {
              // clear the interval
        clearInterval(toTop);
      }
    },25); // the delay between the steps to go back to top. The smaller the number, the slower it goes
    // prevent the click to reload the page
    event.preventDefault();
  }); // end of the Back to Top function
{% endhighlight %}

That's it! My sweet little Back To Top Function. I'm sure there are points that could be improved and I'm sure one could add easing to it (I already got something in mind) but for now I'm happy with it. 

(Also check out what else I discovered yesterday. It's an [YouTube Eater Egg](https://twitter.com/_kevinatari/status/402197154539651072)!)
