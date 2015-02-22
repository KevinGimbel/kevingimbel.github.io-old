---
layout: post
title: "Endless Multi-Dimensional Navigation"
category: coding
tags:
- javascript
---

The past I decided to get my head around multi-dimensional navigations, like navigations that can have (endless) sub navigations nested inside them and so I started to try some ideas on [CodePen](http://codepen.io). My first idea was to have a trigger element that, when clicked, triggeres the nearest Sub Navigation to activate it (e.g. giving it an `open` class). The JavaScript for this looks like this:

{% highlight js %}
var d = document,
    trigger = d.querySelector('#trigger'),
    subNav = trigger.parentNode.querySelector('.sub-nav');

trigger.addEventListener('click', function(e) {
  e.preventDefault(); // cancels reload on <a> tags
  subNav.classList.toggle('open');
});
{% endhighlight %} 

So with this, each time the trigger is clicked the sub navigation will get the class applied or removed
(`classList.toggle()`). The `subNav` class is markup related, because the trigger is inside a `<li>`, as well as the sub
nav, so `this.parentNode` will return the `<li>` element.

{% highlight html %}
<ul>
  <li>
    <span id="trigger">+</span> <!-- this.parentNode returns the <li>
      <ul class="sub-nav">
        ...
      </ul>
  </li>
</ul>
{% endhighlight %}

So the basic markup for navigations is now like this

{% highlight html%}
 <ul class="my-nav-wrapper-class">
    <li data-id="1"> Sub nav <span class="xy" data-id="1">+</span>
      <ul class="sub-nav" data-id="1">
        <li>Sub Nav Item</li>
        <li>Sub Nav Item</li>
        <li>Sub Nav Item</li>
        <li>Sub Nav Item</li>
        <li>Sub Nav Item</li>
      </ul>
    </li>
 </ul>
{% endhighlight %} 
One of the most important things here is the `data-id` attribute which groups the navigations, triggers and (endless)
sub navigations together and is used to reference each of them.

### Event Bubbling
Yet before we get to the actual code it's important to understand event bubbling. If you already know what it is skip
this section and continue with "Finaly: Code" below. 
Event Bubbling is the concept of how the browser handles events. Your're most likly familiar with `e.preventDefault()`
for click events applied to `<a>`-tags. This function stops the normal event bubbling so the browser doesn't reload
the page - which is the default action for `<a>`-tags. 
So in our case the behavior we make use of is event bubbling, as said before. Take a look at the graphic below and then
read on.
!["Event Bubbling for this navigation"](http://i.kevingimbel.me/sc/event_flow_v1.png) 
When the even get's triggered it finds no handler and the event literally goes up the DOM until it finds a handler. Node
by node the little event walks up until finally the navigation wrapper says "Yes little event! I got you, I'll handle
that!" - and that's it. When the handler attached to the navigation handles the event it will also populate it's `el`
variable with whatever `e.target` currently is. `e.target` happens to always be the **triggering element**, so it is
very similar to `this`, yet even more flexible! 
