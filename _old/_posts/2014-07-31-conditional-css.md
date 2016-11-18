---
layout: post
tilte: Conditional CSS
category: coding
tags:
- css
- frontend
---

While there's a lot of talking about CSS writing stlyes, organization styles and if it's maybe better or not to avoid
pre-processors or frameworks there's one very powerful thing that gets pretty much no attention at all: Conditional CSS,
i.e. pieces of CSS that serve one specific task the easiest and most known is `.active` given to, well, active elements.
I'd like to talk a bit about conditional CSS that I've been using in production and that I think can improve the overall
logic of CSS.

### Grids 
I'd like to notice that the first example is taken from [inuit.css](http://inuitcss.com) by [Harry
Roberts](http://csswizardry.com/). The grid itself has been adopted into [Bullgrid](http://github.com/synoa/bullgrid) 
which is at the moment a `em` based, stripped down and standalone version of [inuit.css
grids](https://github.com/csswizardry/inuit.css/blob/master/objects/_grids.scss). So all the kudos for the next section
go to [Harry Roberts](http://twitter.com/csswizardry).
One of the most amazing things about inuit.css Grids is its use of viewport-name based classes.

{% highlight html %}
<div class="gw">
<div class="g one-third small-one-whole"></div>
<div class="g one-third small-one-whole"></div>
<div class="g one-third small-one-whole"></div>
</div>
{% endhighlight %}

The above example creates a 3 column grid that'll turn into 3 full-width (one-whole) containers once the viewport
"small" is reached. To achieve this behavior Harry wrote an amazingly logical [mixin to set up the
grids](https://github.com/csswizardry/inuit.css/blob/master/generic/_widths.scss#L13-L102) that can later be used to set
up the grid with a given "viewport" prefix ([see this
function](https://github.com/csswizardry/inuit.css/blob/master/generic/_widths.scss#L121-L141)). While this creates
quite a lot of CSS on one hand it is amazingly flexible when working with this grid. Most of the time 3 classes are
enough to make any component of the page, or better it's container, adjust to the current viewport. I categorize this as
"Conditional CSS" because it has a condition (the viewport prefix, e.g. small-). 

Not only is this grid amazingly simple once you get used to the naming, it is also great for prototyping inside the
browser. If one part of the page looks a bit weird I can directly play around with all grid classes to find the perfect
fiting one.

### JavaScript/Behaviour conditions
JavaScript based conditions are similar to the `active` example from the intro. Mostly they'll be applied to elements
with JavaScript. In general Conditional CSS should be prefered over applying styles directly with JavaScript. Not only
is it cleaner to devide functions and styles, it is also easier to debug, especially when immediate executing functions
change the look of elements. Consider the next example.

{% highlight js %}
// hide all things on load using element.style
(function() {
	var allThings = document.querySelectorAll('.things');
	for(i=0; i <= allThings.length - 1; i++) {
			allThings.style.display = 'none';
		}
}());

// hide all things with a conditional class
(function() {
	var allThings = document.querySelectorAll('.things');
	for(i=0; i <= allThings.length - 1; i++) {
			allThings.classList.add('is-hidden');
		}
}());
{% endhighlight %}
{% highlight css %}
.is-hidden {
	display: none;
}
{% endhighlight %}

When only looking at the result both functions do the same: They hide all `.things`. However, the conditional CSS
approach applies a class to the element. So when looking at the code from the inspector it is clear that this element 
is hidden because of a class name. This way it is easier to find out why an element is not displayed. Also it avoids
inline styles which always have a higher priority than everything else (as the next pen shows).

<p data-height="268" data-theme-id="647" data-slug-hash="hgpAL" data-default-tab="result" class='codepen'>See the Pen <a
href='http://codepen.io/kevingimbel/pen/hgpAL/'>hgpAL</a> by Kevin Gimbel (<a
href='http://codepen.io/kevingimbel'>@kevingimbel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Some of the Conditional CSS classes I use are 
{% highlight css %}
// element is hidden
.is-hidden {
	display: none;	
}
// element is displayed
.is-displayed {
	display: block:	
}
// element is active (most of the time nav items)
.active {
	// styles
}

// used with buttons
.has-icon {
	// styles	
}

/*
 * The following basically works for all 
 * viewports but it's more a hack-y thing.
 * I use it to hide/display the text inside
 *	the header of this blog.
*/
@media all and (max-width: 30em) {
	.small--is-hidden {
		display: none;
	}	

	.small--is-displayed {
			display: block;
	}
}

/*
 * Print specific elements
 * [1]: Depending on the content and layout 
 * 			maybe display: inline|inline-block;
*/

.print-only {
	display: none;
}
@media print {
	.print-only {
		display: block; // [1]	
	}
}
{% endhighlight %}

So far I find Conditional CSS a good idea and really like to work with it. It's easier, at least for me, to see what a
class does and where/how it should be used. Also it's a simple use of DRY (don't repeat yourself) and [Single
Responsibility Principle](http://csswizardry.com/2012/04/the-single-responsibility-principle-applied-to-css/) but as
with everything overusing it won't make your live easier. 
As always I appreciate feedback or improvments via [twitter](http://twitter.com/_kevinatari).
