---
layout: post
title: Is this :valid?
category: coding
---

I recently stumbled upon the `:valid` and `:invalid` class for input fields. It gives you the ability to use visual feedback on inputs that show the user whether the input is - guess what? - valid or not. This is, in fact, a very handy pseudo class in case of UI and UX Design because you can easily give a feedback on input without using JavaScript. Anyway, this pseudo element does not **validate the input**, the entered email for example can still be formated wrong. 

Anyway I thought this is a handy little helper that I could give a try so I started working around with it, checking what I can do and what I can't. 

{% highlight css %}
.contact__form--email {
 
  &:valid {
    color:green;
  }

  &:invalid {
    color:red;
  }
}
{% endhighlight %}

Above you see the basic markup for a simple use case of `:valid` and `:invalid`. You can apply everything you want so far I've tested. In my opinion `color` and `border` are the best and most basic use cases where this makes sense.

### Strange behavior of :valid

While the `:invalid` pseudo class makes perfect sense I found some strange behavior while experimenting with `:valid`.
When the user starts typing the color will be red, as soon as he writes `yourname@g` the color will turn green - because the eMail is now valid, even though it's not finished and here comes the point I start wondering: Why doesn't it check for a dot followed by at least 2 letters? The chances that this would be a valid email and this can be marked valid is much higher then triggering the valid pseudo class right after someone puts a letter behind the @ mark.

Mozilla's Firefox and Google Chrome behave the same way, both trigger the `:valid` class as soon as there is one character behind the @ mark. I wonder if this is specified by W3C - and now I ask: Is this really the best way to handle `:valid` and `:invalid` pseudo classes? Wouldn't it be better to wait until the user types at least one dot followed by a letter **after** the user already wrote an @ mark? This would, in all cases, make sure the email is set up correctly.

{% highlight bash %}
# Firefox and Chrome trigger :valid 
# at this point
#       |
    you@host.com
#             | 
# I suggest triggering after 
# 2 letters have been entered
# because chances that the email
# is valid are much higher here
{% endhighlight %}

At least you have to check the email via JavaScript or PHP with RegEx to make sure it is valid but it would be a nice UX feature to have a visual feedback that checks the email so a user sees that the inputed email is correct - the :valid class doesn't provide this yet because it triggers to early so there is no "guarantee" the email is correct.

I hope that they'll change this behavior in the future so it's save to use :valid on email inputs and it works correctly. 

You can find a working example of :valid and :invalid [here at CodePen](http://codepen.io/kevingimbel/pen/jlhJg).