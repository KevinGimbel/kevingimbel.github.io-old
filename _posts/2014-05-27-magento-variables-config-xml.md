---
layout: post
title: "Magento: get and set variables in config.xml"
category: coding
tags:
- Magento
- MVC
---

The other day I had a kind of easy problem in Magento that still took me quite some time to solve. In the shop I'm
working on we had a contact form module that sents and validates emails which worked perfectly fine on one page (the one it was made for),
however this form should be "cloned" to be present on 4 pages with different email addresses. Since Magentos Core is
MVC-like I  believed there would be an easy way to pass email addresses to the Controller. Indeed I found a way to do
so, and I'm happy if someone finds a better way!

I managed to set the different emails in the config.xml (located in `/mymodule/etc/config.xml`) like so
{% highlight xml %}
 # ... Default Block within the <config> block
	<default>
		<email>
			<contact>contact@standard.com</contact>
			<support>support@standard.com</support>
			<yetanotheremail>mailme@contact.com</yetanotheremail>	
	</email>
	</default>
# ....
# Example of a Router config, 
# these are important for the switch below
<routers>
	<company_contactform_contact>
		<args>
			<module>Company_ContactForm</module>
			<frontName>contact</frontName>
		</args>
	</company_contactform_contact>
</routers>
{% endhighlight %}

This way the variables can be easily changed inside the `config.xml`, later they are retrieved (in the fronend or inside
the Controller.php) with this code

{% highlight javascript %}
	$email = Mage::getStoreConfig('email/contact');
	$email = Mage::getStoreConfig('email/support');
	$email = Mage::getStoreConfig('email/yetanotheremail');
{% endhighlight %}

Those store configs are only accessable from within this Model and its View, so in `compare.phtml` this would throw an error.
Next thing I needed was a `switch()` to determine in what view I am. Again, I'm pretty sure there is a better way of
handling this. 

{% highlight javascript %}
 /* This returns the name set for the Router in the config.xml.
	* (Between <routers> and </routers> 
 */
	$currentRoute = Mage::app()->getFrontController()->getRequest()->getRouterName();

		switch($currentRoute) {
			case "company_contactform_productsupport":
				$email = Mage::getStoreConfig('email/productsupport');
				break;

			case "comapny_contactform_contact":
				$email = Mage::getStoreConfig('email/contact');
				break;

			case "company_contactform_support":
				$email = Mage::getStoreConfig('email/support');
				break;

			default:
				$email = Mage::getStoreConfig('email/fallback');
				break;
	}
{% endhighlight %}

The fallback is used for the case of no match - it should not happen but it still can happen, so it's always save to
have a fallback. In this case it just goes to the generic info eMail of the client. 

I'm not sure if there's a better or easier way but I found that this solution fits my needs pretty good.

