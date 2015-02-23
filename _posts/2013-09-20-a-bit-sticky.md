---
layout: post
title: A bit sticky
category: coding
---

I just stumbled upon a very handy CSS Property: `position:sticky`. As far as I found out it's only working in Chrome and Chromium with the experimental Webkit Features Flag enabled (see at chrome://flags/#enable-experimental-webkit-features).

`position:sticky` is a pretty handy feature that allows you to stick an element to the top of the page (or wherever you want) until the parent element is moved out of the screen. 

### Basic Markup
To get an idea of how `position:sticky` works I made some basic markup.

#### HTML
{% highlight html %}
<article class="single__article">
    <hgroup class="single__article--header">
        # article header, this one will be sticked
    </hgroup>
    ...
</article>
{% endhighlight %}

#### CSS 
{% highlight css %}
.single__article {
    # classic article styles
}

.single__article--header {
    position:sticky; /* general CSS3 */
    position:-webkit-sticky; /* webkit prefixed */
    top: 20px; /* Space between the element and top */
}
{% endhighlight %}

What `position:sticky` does is:

-   When the elements Parent (`.single__article`) is scrolled
-   It sticks the header to the top of the page (in other words it gets `fixed`)
-   And scrolls it with until the Parent gets out of the way

<br>
That's all. And it is very handy compared to the JavaScript and CSS usually needed for this (taken from HTML5 Rocks).

{% highlight js %}
var header = document.querySelector('.header');
var origOffsetY = header.offsetTop;

function onScroll(e) {
  window.scrollY >= origOffsetY ? header.classList.add('sticky') :
                                  header.classList.remove('sticky');
}

document.addEventListener('scroll', onScroll);
{% endhighlight %}

{% highlight css %}
.sticky {
  position: fixed;
  top: 0;
}
.header {
  width: 100%;
  background: #F6D565;
  padding: 25px 0;
}
{% endhighlight %}

[See the Demo on CodePen](http://codepen.io/kevingimbel/pen/Cybof)

Resources:

-   [HTML5 Rocks](http://updates.html5rocks.com/2012/08/Stick-your-landings-position-sticky-lands-in-WebKit)
