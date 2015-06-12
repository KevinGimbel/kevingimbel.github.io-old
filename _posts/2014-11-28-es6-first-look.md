---
layout: post
title: "ES6: First Look"
category: coding
tags:
  - javascript
  - es6
---

I'm super late to the ES6 party but over the last year I was kinda busy getting my hands dirty with casual ES5 and below
JavaScript to learn the basics of the language. I'm still learning the old JavaScript things because I'm sure it will
stick around for some time - even though compilers like Traceur do an amazing job to compile basic ES6 synax. Anyway,
let's have a look at ES6 Classes.

Classes, or abstractions of classes, are a thing most programming languages have these days - JavaScript, however, used
to have Prototype inheritance in the past instead of Classes.

{% highlight js %}
var Animal = function(name, age, race) {
  this.name = name;
  this.age = age;
  this.race = race;  
}

Animal.prototype.greet = function() {
  return 'Hi, I am ' + this.name + ', I am a ' + this.age + ' year old ' + this.race;  
}

var Sally = new Animal('Sally', 5, 'Cat'),
    Spancer = new Animal('Spancer', 10, 'Dog'),
    Alice = new Animal('Alice', 3, 'Pig');
{% endhighlight %}

With the above code we create 3 new Animals and all of them have the `greet()` function assigned to them which results
in them being able to say their name, age and race - that's the "classic" way. With ES6 Classes the above code would be
written as follows.
{% highlight js %}
class Animal {
  constructor(name, age, race) {
    this.name = name;
    this.age = age;
    this.race = race;  
  }

  greet() {
    return 'Hi, I am ' + this.name + ', I am a ' + this.age + ' year old ' + this.race;  
  }
}

var Bob = new Animal('Bob', 12, 'Donky'),
    Stancy = new Animal('Stancy', 6, 'Horse');
{% endhighlight %}

Calling the functions looks exactly the same as before, but declaring the function in the "Class" syntax is, in my
opinion, way easier to read. It's significant that the word "function" is removed entirely from the Class system - the
constructor() is the initial function that's called when a new class is called with "new ClassName()", all other
function cann be called like "Animal().greet()". However, all these Animal Examples are boring so let's see Classes and
extends in action! 


