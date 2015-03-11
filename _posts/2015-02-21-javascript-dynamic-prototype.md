---
layout: post
title: 'Dynamically add functions to Prototype'
category: coding
tags:
 - javascript
---

When creating a Module or Function using it's `Prototype` attribute it can be
useful to dynamically add functions and modules. jQuery is using it's own way of
doing this so Plugin Developers have a way to add new functions to the `jQuery` or
`$` function. I re-build a basic version of this to structure my code for this
sites new JavaScript files.

The basic implementation looks like this. 

{% highlight js %}
var MODULIZE = function() {
  this._proto = MODULIZE.prototype;
  return this;  
}

MODULIZE.prototype.fn = function(alias, callback) {
  this._proto[alias] = callback;  
}
{% endhighlight %}

This is it. The "main" Module simply holds a `fn` function to add new functions
to it. Using it is really simple, as the following example shows.

{% highlight js %}

var _ = new MODULIZE();

_.fn('add', function(a,b) {
  return a + b;  
});
_.add(2,3); // => 5

// adding functions to their own namespace
_.fn('Math', (function() {
  return {
    add: function(a, b) {
      return a + b;  
    },
    subtract: function(a, b) {
      return a - b;  
    }, 
    multiply: function(a, b) {
      return: a * b;  
    },
    divide: function(a, b) {
      return a / b;  
    }
  }
}())

// _.Math.subtract(3,2); // 1
// _.Math.divide(10,2); // 2
// _.Math.multiply(3,3); // 9
{% endhighlight %}

To structure the different modules for my website I use this little script so
the different parts (VIEW, sQuery and Github.js) are combined into one global
namespace - if I want to switch a module, let's say sQuery with another
query selector, I can simply change `_.fn('query', sQuery)` with `_.fn('query',
anotherQueryModule)`. 

