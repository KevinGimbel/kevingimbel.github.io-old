---
layout: post
title: A closer look to closure
category: coding
tags:
- javascript
---

Closure is a very interesting concept in JavaScript. It basically determinse where and how variables or
functions are accessable and where not. Since this is an essential part of JavaScript and one can run into quite some
problems I want to try and give short introduction to closure and what it can be good for. It's good to have at least
basic understanding of JavaScript. 

So before I start I'd like to say that I consider myself a JavaScript beginner and this is how I understand closure
and scopes at the moment. If you happen to find mistakes please [tweet me](https://twitter.com/_kevinatari) or [open an
issue](https://github.com/kevingimbel/kevingimbel.github.io/issues?page=1&state=open). 

Consider the following example

{% highlight javascript %}
var x = 5;

(function(){
  var x = 10;	
}());

console.log(x);
{% endhighlight %}

What value will `x` have when logged to the console? 5 or 10? The correct answer is 5, because inside the immediate
executing function `var x` does not reference the previously defined `var x`. They're both standalone and do not effect
each other. Let's try this again and see what happens now

{% highlight javascript %}
var x = 5;

(function() {
  x = 10;
}());

console.log(x);
{% endhighlight %}

What value will `x` have now? Still 5, because it's the same function but we only left the `var` keyword? Nope, now `x`
inside the immediate executing function references the previously defined `var x` and will update it's value, so
`console.log(x)` results to 10 this time. As you can see just now, leaving out the single word `var` can change how your
program behaves. The missing var statment, where closure hits hard and overrides the variable, can really be annoying
because JavaScript doesn't throw errors. Overriding values inside a closure, e.g. the immediate executing function, is
perfectly fine.

So what happens if we pass `x`, which is 10 now, to the immediate executing function and declare 'x = 15' inside the
functions body? Will `x` become 15 or stay 10?

{% highlight javascript %}
// x is 10 at this point
(function(x){
	x = 15;	
}(x));
{% endhighlight %}

As the result shows, x is still 10. But wait, wasn't it supposed to be overridden if we don't declare `var x = 15`? Well
that is true, but since we pass x as a parameter, x is "re-defined" as a local variable and, inside the functions body, it is
indeed 15 - outside it is not. 

<p data-height="268" data-theme-id="647" data-slug-hash="nwmCD" data-default-tab="result" class='codepen'>See the Pen <a
href='http://codepen.io/kevingimbel/pen/nwmCD/'>nwmCD</a> by Kevin Gimbel (<a
href='http://codepen.io/kevingimbel'>@kevingimbel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>


### What can closures do for me?

What can it do? Good stuff. Closures can help to organize code and keep the global namespace clear. In general one
shouldn't write variables into the global namespace because they're almost asking to be overriden or changed. Let's say
you one writes a function like this. 

{% highlight javascript %}
var assert = function(con, msg) {
  if(!con) {
    console.error(msg);	
  } else {
    console.log(msg);
  }
}
{% endhighlight %}

That's a super simple assert function to see if a statment (`con`dition) is true or false. If it's false we'll log a
console.error(), if not we'll log a normal console.log() statement. This is great and perfectly fine unless someone else
tries to use a function with the same name. Then there'll be a "conflict" and the last declared function overrides the
other. (In this example I'll use a function called myFunction)

<p data-height="268" data-theme-id="647" data-slug-hash="wuAdv" data-default-tab="result" class='codepen'>See the Pen <a
href='http://codepen.io/kevingimbel/pen/wuAdv/'>wuAdv</a> by Kevin Gimbel (<a
href='http://codepen.io/kevingimbel'>@kevingimbel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

So still, what can closure do for me? It can save my declared functions - inside a closure. So far all closure examples
were immediate executing function, but Objects also create closures, assigning all there properties to a specific
"namespace".

{% highlight javascript %}
var myFunction() = function() {
  return true;	
}

var myNamespace = {
  myFunction: function() {
    return false;
  }
}
{% endhighlight %}
This way we introduce one variable to the global scope: myNamespace and keep all the functions inside this scope.
Therefore, the myFunction() is still accessable within the scope and has the expected results, no matter who
declares myFunction in the globale scope.

<p data-height="268" data-theme-id="647" data-slug-hash="ELfal" data-default-tab="result" class='codepen'>See the Pen <a
href='http://codepen.io/kevingimbel/pen/ELfal/'>ELfal</a> by Kevin Gimbel (<a
href='http://codepen.io/kevingimbel'>@kevingimbel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>
