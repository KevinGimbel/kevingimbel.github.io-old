---
layout: post
title: Custom Radio Buttons
category: coding
---

Today I thought about a project I had in mind for some time, it has to do with ratings of different contents and the first thing I thought about was: What's the easiest or best way to create a rating form with custom buttons (stars, hearts, whatever). 

A few years ago I had to do this once and I remember doing it with an image and `background-position` but as of today I really love pseudo elements and "Look-Ma-No-Image!". However I decided to use Icon Fonts this time and play around a bit with them. My HTML Markup is very simple:

{% highlight html %}
  <input type="radio" data-rate="1" name="rating" class="rating--star" />
  <input type="radio" data-rate="2" name="rating" class="rating--star" />
  <input type="radio" data-rate="3" name="rating" class="rating--star" />
  <input type="radio" data-rate="4" name="rating" class="rating--star" />
  <input type="radio" data-rate="5" name="rating" class="rating--star" />
{% endhighlight %}

That's it: A group of `radio inputs` representing a rating system with 1-5 possible choices. The CSS part is a little bit trickier (note that I'm using Sass with SCSS Syntax!)

{% highlight scss %}
.rating--star {
  color:#ff7711;
  &:before {
    content:"\2605";
    font-size:2em;
    font-family:entypo, sans-serif;
  }

  &:checked ~ :before {
    content:"\2606";
  }

  &:focus {
    outline:0;
  }
}
{% endhighlight %}

A small piece of code, yet it can seem complicated. I'll break it down a bit. 
{% highlight scss %}
.rating--star {
  color:#ff7711;

  @include appearance(none);

  &:before {
    content:"\2605";
    font-size:2em;
    font-family:entypo, sans-serif;
  }
{% endhighlight %}
The first part represents the class itself and the `:before` pseudo element that holds the icon (in this case a Star from the entypo icon font served via [We Love Icon Fonts](http://weloveiconfonts.com)), I set the color on the element directly because the `:before` and `:checked ~ :before` are using the same color. `appearance:none;` removes the User Agent style from the input element or, in other words, "hides" the element.

{% highlight scss %}
 &:checked ~ :before {
    content:"\2606";
  }
{% endhighlight %}

The next line says "when the input is `:checked` change the properties of `:before`". So when it is checked I want the filled Star to show up ("\2606"). Seems logical? It's not. `\2606` is the empty star. So the `&:checked ~ :before` pseudo holds the icon that should be included if the button is not checked and the `:before` holds the checked (in this case filled) icon. This is because `:checked ~ :before` selects every element that is preceded of the `:checked` element. This comes handy because this also means all inputs display a filled star if we check the last star (and that's exactly what we want). 

A live demo can be found on [CodePen](http://codepen.io/kevingimbel/pen/kwIgi).