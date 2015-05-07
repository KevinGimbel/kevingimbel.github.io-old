---
layout: post
title: "ReactJS - Hello World!"
category: coding
tags: 
  - react
---

This article is the first in a series about [ReactJS](http://facebook.github.io/react/), a JavaScript library for building user interfaces. It is actively developed at Facebook and Instagram, while Instagram uses React to build their web app. At Facebook, however, React plays a role in the "background", featuring administrative screens such as the Ads Managment.

React itself says one very important and true thing about itself: 

> Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, it's easy to try it out on a small feature in an existing project.

Instead of frameworks such as [Angular](https://angularjs.org/) or [Ember](http://emberjs.com/), React only covers the visual part and state of an UI. It won't help you structure your applicationit will not do anything other than render DOM parts and control their state. At this, however, React is amazingly good!

### JSX-like syntax
React uses a XML like syntax called JSX. JSX seems horrible at first, at least to me, but becomes really powerful once you're used to it. Here is an example of two `div`s, one written in React JSX syntax and one in pure JavaScript. We assume the variable `dynamicContent` will hold some content that is generated before.

{% highlight js %}
// React JSX DIV
var myJSXDiv = <div className="lorem">{dynamicContent}</div>;
// pure JS DIV
var myJSDiv = '<div class="lorem">'+ dynamicContent +'</div>';
{% endhighlight %}

Weird isn't it? Writing junks of HTML without quotes in a JavaScript file looks totally wrong at first, however React is being compiled to pure JavaScript before it will hit your servers. Therefore, it really only is a way of easy writing - when you create a few DOM Elements in React you'll soon start to love the JSX-like syntax.

### Hello World!
As in every framework and language, let's start by outputting a `Hello World!` string. To archive this we will do the following: 

* Create a new React Class or Component
* Invoke a `render()` function within that Component
* Render the Component to the DOM

#### React.createClass({})
Every Class is created with the `React.createClass` function that is passed an Object and at least a `render` function (A Class is basically a UI Component, therefor I'll call it Component from now on). The `render` function is used to return HTML that will be rendered to the DOM later. Every render function needs a `return` with some HTML. Below is the React Script to return a `h1` holding the String "Hello World!". 

{% highlight js%}
var HelloWorld = React.createClass({
  render: function() {
    return <h1>Hello World!</h1>
  }
})
{% endhighlight%}

We can invoke out new React Component by calling the `React.render()` function. This function takes two parameters: first the Component to render and then the DOM Node where it should be rendered. The Component name in this case is the variable `HelloWorld` that'll be passed just like a HTML element: `<HelloWorld />`.

{% highlight js%}
// Renders the HelloWorld Component into the Body.
React.render(<HelloWorld />, document.body);
{% endhighlight%}

And here's a working [Pen](http://codepen.io) with additional comments.

<p data-height="268" data-theme-id="647" data-slug-hash="0383697b947716cd4e759e53710df10b" data-default-tab="result" data-user="kevingimbel" class='codepen'>See the Pen <a href='http://codepen.io/kevingimbel/pen/0383697b947716cd4e759e53710df10b/'>ReactJS Tutorial: Hello World!</a> by Kevin Gimbel (<a href='http://codepen.io/kevingimbel'>@kevingimbel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>


So far, we wrote our first ever React Component and rendered it into the DOM. Anyway, rendering static data is not so cool is it? Using a Framework to render junks of DOM Elements and static Markup isn't fun either. So next, we'll see how we can re-use a Component, pass data to it and embed one Component into another Component so it is repeated based on passed data - fun!

### Hello {friend}!
React has its own template-engine-thingy. Instead of typing static strings you can pass data and use it in the return of the Render Function (or in any other function inside the component for that matter). All passed data is accessible via `this.props` and passed like `<HelloWorld name="Kevin" />`, which would than be accessed like `this.props.name`. Here's an example of this in action.

<p data-height="268" data-theme-id="647" data-slug-hash="e73aba2c9d044c3e94e3bf70195a57e2" data-default-tab="result" data-user="kevingimbel" class='codepen'>See the Pen <a href='http://codepen.io/kevingimbel/pen/e73aba2c9d044c3e94e3bf70195a57e2/'>ReactJS Tutorial: Hello World - Enhanced!</a> by Kevin Gimbel (<a href='http://codepen.io/kevingimbel'>@kevingimbel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

However, to re-use the `HelloWorld` component we need to create another Component and use the [`Array.map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) function to go over an Array of names.

So what we do now is the following: 
* We extend the `<HelloWorld />` component to accept a property
* We create a new Component that renders multiple instances of `<HelloWorld />`
* We render the new Component into the document

This sounds complex but it is quite doable so let's start right away by extending the `HelloWorld` component and re-naming it to `Hello` since it will greet all kinds of people now.

{% highlight js %}
// The new Hello Component
var Hello = React.createClass({
  render: function() {
    return <h1>Hello {this.props.name}!</h1>
  }
});
{% endhighlight %}

With this simple change we can invoke the Component like `<Hello name="Kevin" />` and it will return `<h1>Hello Kevin!</h1>`. However, to create a List of our friends we need a new Component. This Component will be called `FriendList`.

{% highlight js %}
var FriendList = React.createClass({
  render: function() {
    var allGreetings = this.props.folks.map(function(person) {
      return <Hello name={person} />;
    });
    
    return(
      <div>{allGreetings}</div>
    )
  }
});
{% endhighlight %}

Quite a lot going on here. Let's break it down. First, we need to get all the greetings together. This is done by assigning them to a new variable called `allGreetings`. With Array.map() we go through the Array that'll be passed to the `FriendList` component when it is rendered, we call this property `folks`, so it is passed like `<FriendList folks={friendArray} />`.

{% highlight js %}
// this.props.folks.map() goes over every entry in the array
// and returns a new Hello Component.
var allGreetings = this.props.folks.map(function(person) {
  return <Hello name={person} />;
});
{% endhighlight %}

What happens here is: 
* we go through all the names in `this.props.folks`
* For each name, we return a new `<Hello />` Component passing in the name of the person
* All the HTML from all the Components now is assigned to the `allGreetings` variable 

So we have our HTML but we need to return it, right? Right! So the next line returns the generated HTML from the `FriendList` Component.

{% highlight js %}
// the two parentese are optional but I like them for
// "grouping" the return. The div however is required. 
// Every return must be wrapped in an DOM Element.
    return(
      <div>{allGreetings}</div>
    )
{% endhighlight %}

So here we return a `div` holding our generated HTML. The `div` is required because every React Component must return a HTML Container - and the `allGreetings` variable holds multiple containers so we need a new one. The parentese are optional but I prefer them for grouping the output. Next, we need to invoke our new Component.

{% highlight js %}
// Here we create an Array of all the people we want to greet. In this
// case it's members from Team bullgit! http://bullg.it
var allThePeople = [
  "Kevin", "Luky", "Jess", "Felix", "Max", "Nika", "Gregor", "Tim", "Jan"
]
// and then we pass it to the FriendList Component.
React.render(<FriendList folks={allThePeople}/>, document.body);
{% endhighlight %}

We create a normal JavaScript Array with our Friends' names as strings, then pass it to the React component as the attribute `folks`. This array will then be accessible as `this.props.folks` from within the Component. And, as before, here is a Pen showing the output as well as some more comments on the code.

<p data-height="268" data-theme-id="647" data-slug-hash="b605df3b5434999891335c5fda49d992" data-default-tab="result" data-user="kevingimbel" class='codepen'>See the Pen <a href='http://codepen.io/kevingimbel/pen/b605df3b5434999891335c5fda49d992/'>ReactJS Tutorial: Hello - Enhanced & Repeated!</a> by Kevin Gimbel (<a href='http://codepen.io/kevingimbel'>@kevingimbel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

That's it for creating a Component and re-using it inside another Component. For the next tutorial we'll see how we can use a state to give our Components some interaction. If you've got any questions or have found an issue, hit me up at [@_kevinatari](https://twitter.com/_kevinatari).

<script async src="//assets.codepen.io/assets/embed/ei.js"></script>