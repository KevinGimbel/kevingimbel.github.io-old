---
layout: post
title: Pseudo Product Flags
category: coding
---

For a recent client Project I had to create Product Flags that are displayed at the top of each product. The Flags should have different colors and different values (which also have different lengths). The values are applied via the `data` Attribute and the colors are also controlled via a data Attribute. The "Problem" with this task was that it's not only a few different length, it's a multi-language system and therefore can end up in a lot of different width of the product flags - a "fixed" solution, like applying a `max-width` of let's say 20em, isn't the best solution for this so I ended up creating a flexible solution.

### The Setup
First of all I had a Product and a `div` that holds the flag (in this example "Tag").
{% highlight html %}
<article>
  <div class="tag" data-id="1" data-tagname="STAR WARS"></div>
  <hgroup>
    <h2>Awesome Star Wars Cup</h2>
      <img src="http://www.getdigital.de/web/getdigital/gfx/products/__generated__resized/1100x1100/R2D2_Relief_Mug_Titel.jpg" alt="" />
  </hgroup>
  <p>(img via <a href="http://www.getdigital.de/R2D2-3D-Relief-Becher.html">getDigital.de</a>)</p>
</article>
{% endhighlight %}

The `data-id` controls the color of the tag and the `data-tagname` controls the content of it. In the real-world example they're applied via a Content Management System and, as I said before, can vary in length. The HTML Job is done with this setup and now comes the most fun part: The (S)CSS.

### CSS
{% highlight scss %}
  .tag {
    width:auto;
    height:auto;
    position:absolute;
    top:-1em;
    left:0;
    background:#8e44ad; // standard background if there's no data-id
    padding:.5em;
}
{% endhighlight %}

The basic tag should be position absolute on the left of the article and `-1em` on top of the article (this comes because the article has a padding of 1.5em and I want it to be half the way out of the article container). So far there is a tag with auto width and auto height. With the next snippet we'll get the data-tagname inside out pseudo element.
{% highlight scss %}
    &:before {
      content:attr(data-tagname);
    } 
{% endhighlight %}

and a small triangle behind it
{% highlight scss %}
    &:after {
      content:"";
      position:absolute;
      left:100%;
      top:0;
      width:0;
      height:0;
      border-top:1em solid transparent;
      border-left:1em solid darken(#8e44ad,20%); // fallback if no data-id is given
    } 
{% endhighlight %}

Success! The first basic tag is finished, but why the `data-id` you may ask? Because they make the magic! As I said before the color is controlled via `data-id` and here's how this works:
{% highlight scss %}
&[data-id="1"] {
  background:$color-1;
    &:after {
      border-left-color:darken($color-1,20%);
  }
} 
{% endhighlight %}

If you repeat this for all your `data-id`s and colors you'll end up having some sweet Product Flags. The whole code for my product flags looks like this: 
{% highlight scss %}
  .tag {
    width:auto;
    height:auto;
    position:absolute;
    top:-1em;
    left:0; 
    background:#8e44ad; /* fallback if no data-id is given */
    padding:.5em;
    
    &:before {
      content:attr(data-tagname);
    }
    // there's always a triangle behind it
    &:after {
      content:"";
      position:absolute;
      left:100%;
      top:0;
      width:0;
      height:0;
      border-top:1em solid transparent;
      border-left:1em solid darken(#8e44ad,20%);  /* fallback if no data-id is given */
    } 
    
  
    // the data-id controls the colors
    &[data-id="1"] {
      background:$color-1;
      &:after {
        border-left-color:darken($color-1,20%);
      }
    }
    
    &[data-id="2"] {
      background:$color-2;
      
      &:after {
        border-left-color:darken($color-2,20%);
      }
    }
    
    
    &[data-id="3"] {
      background:$color-3;
      
      &:after {
        border-left-color:darken($color-3,20%);
      }
    }
    
    &[data-id="4"] {
      background:$color-4;
      
      &:after {
        border-left-color:darken($color-4,20%);
      }
    }
    } // tag 
{% endhighlight %}
A working example can be found [here on CodePen](http://codepen.io/kevingimbel/pen/Hpazh). Special thanks to [getDigital.de](http://getdigital.de) for letting me use some of their nerdy Product Images! May the force be with you.

In case you've any questions feel free to [tweet me](http://twitter.com/_kevinatari) or comment on the [Pen](http://codepen.io/kevingimbel/pen/Hpazh).
