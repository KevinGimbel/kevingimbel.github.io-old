---
layout: post
title: Passing Arguments in JavaScript
category: coding
tags:
- javascript
---


One of my favorite aspects of JavaScript is that it is unbelievable flexible. I am currently reading "Secrets of the JavaScript Ninja" by the amazing [John Resig](http://ejohn.org) and try to play around with JavaScript whenever I've the time to do so. Just yesteday I needed to pass as many arguments to a function as the user wants which means I can't check for every possible thingy. Anyway, I'll cover this in a small write-up aka a blog post. Yay!

First of all we should have some use case or scenario. I needed the a variable number of options for my [Bulllog](https://github.com/bullgit/Bulllog) script that takes any number of CSS oroperty-value pairs and applies them to your console.logs (Chrome only, sadly). Anyway, CSS is a good example in my opinion so we'll write a small css() function that can be applies to an element.

First of all, what should this function do? It should:

* Take any number of CSS property-value pairs
* apply them to our element
* respond (console.log()) errors if any happen

### The functions
We'll start with the basic: getting an element and manipulating its CSS.
{% highlight javascript %}
	// Getting the element
	var el = document.querySelector( '.test' );
	el.style.background = 'red';
	el.style['background'] = 'black';
{% endhighlight %}

Both of the above ways (`el.style.background` and `el.style['background']`) work the exact same way. But that's not much fun, right? Why should we want to set our styles this way and where's the dynamic functional stuff at all? Lets extend the script with a `css` function.


{% highlight javascript %}
var css = function css( el, options ) {
	/*1 */
  if( typeof(el) === 'object' ) {
    el = el;
  } else {
    el = document.querySelector( el );
  }
	/* 2 */
  el.style[opts] = 'red';
}
{% endhighlight %}

What this script does:

1. check if el is already an object, if so we don't need to select it again. That'd be the case if we pass the previously defined `el` directly to the function.  We can also use `css('.my-class', 'background');`
2. Set the desired property, e.g. background, color to be red.

Alright, that's not bad but why should we want to sett everything to red? You're right - we don't want this. Next up: for in loops!

### For key in obj
For loops are always fun and especially `for in` loops. They're perfect for our needs because we'll pass a list (or better an Object) with property-value pairs to our function and need to process them so they can be applies as styles. Our modified function now looks like this:
{% highlight javascript %}
var css = function css( el, options ) {
	if( typeof( el ) === 'object' ) {
		el = el;
	} else {
		el = document.querySelector(el);
	}
	/* 1 */
  var styleProperties = [],
      styleValues = [];
  /* 2 */
  for(key in options) {
    /* 3 */
		styleProperties.push(key);
    styleValues.push(options[key])
  }
}
{% endhighlight %}

1. We need to create an empty array to store all our property-value pairs in.
2. We start our for in loop. We go over every key in our options object.
3. Every propery-value pair gets pushed into our arrays, the properties into the `styleProperties` array and the values into the `styleValues` array.
I'm sure there is a more elegant way to do this, but I couldn't really think of any - so I'm as always up for improvments!

Our `css()` function just got a lot more flexible! Before we could only set any property to one value (everything we want to `red`), now we can pass a lot of property-value pairs and they'll get processes by our function! Awesome, right?
Calling the function would now look like this:

{% highlight javascript %}
	css('.my-div', {
	  color: 'yellow',
	  background: '#333'
	});
{% endhighlight %}

### Almost there
So far we can pass a list (object) of property-value pairs and process them into two nice arrays. However, the function does not apply these styles yet which is why we have to do one last step.

{% highlight javascript %}
  for(i = 0; i <= styleProperties.length; i++) {
    el.style[styleProperties[i]] = styleValues[i];
  }
{% endhighlight %}

We iterate over the array (doesn't matter which because both are exatctly the same size) and extract the matching properties and values. That's the point where we actually apply the styles.

The result looks like this.

<p data-height="268" data-theme-id="647" data-slug-hash="sJkna" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/kevingimbel/pen/sJkna/'>sJkna</a> by Kevin Gimbel (<a href='http://codepen.io/kevingimbel'>@kevingimbel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>


With this technique you can make any function accept any amount of property-value pairs by simply passing in an object. This would also work when you define the object itsef as a variable (see the second div). It's important to know that properties like `font-size` must be written in quotes (e.g. ` "font-size": "1em" `), otherwise the script will fail.
