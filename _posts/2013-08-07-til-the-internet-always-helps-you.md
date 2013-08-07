---
layout: post
title: TIL The Internet always helps you
category: personal
---

Today I learned that Jekyll isn't as bitchy as I thought it would. If you follow some steps I pointed out in a [previous test post](/2013/08/jekyll-on-ubuntu) you'll have a great time developing and working with Jekyll.

This post for example is to test highlighting.

### CSS 
{% highlight css %}
	.my-class {
		position:absolute;
		top:0;
		left:0;
		@include transform(rotate(45deg));
		@include box-shadow(0 0 5px rgba(black,.4));
	}
{% endhighlight %}

### PHP
{% highlight ruby %}
	$myVar = new MyClass();

	print $myvar->getContext('YEAAAAH');
{% endhighlight %}

### JavaScript
{% highlight javascript %}
	function getCode() {
		$(this).on('click', function() {
			var code = $(this).parent.data();
			return code;
		});
	}
{% endhighlight %}

### Ruby
{% highlight ruby %}
def mystuff 
	count = 0
	for x from 1..10 do |y|
		puts y * count
		count++ 
	end
end
{% endhighlight %}