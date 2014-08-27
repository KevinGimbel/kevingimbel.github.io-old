---
layout: post
title: "Magento: Add fields to the Admin Backend"
category: coding
tags:
- magento
- xml
---

Today I had a task at work that first sounded rather easy: Add a field to the Admin backend, namely
*System->Config->Catalog* where the user could later insert some SKUs to control which products are shown on the home
page. The first resources I found on how to edit the Backend where all suggesting to create a Module and then create a
settings page. Not only was this rather complex it was also way too "over engineered" for a simple thing like a text
field. So I continued searching and found [this
post](http://prattski.com/2008/09/29/magento-add-custom-module-for-custom-admin-config-options/) about creating fields
in the backend only with XML. 

That was easy and fair enough I thought and so I gave it a try. First however I created a Module in
`app/code/community/Synoa` (*community* because this can be reused and is not directly project specific). My folder
structure is really simple since I don't need much:

{% highlight bash %}
-app/code/community
 -Synoa
  -FeaturedProducts
   -etc
    -config.xml
    -system.xml
{% endhighlight %}

In `config.xml` is the default Module configuration. In my case the following XML.

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
 <config>
   <modules>
     <Synoa_FeaturedProducts>
       <version>0.0.1</version>
     </Synoa_FeaturedProducts>
   </modules>
</config>
{% endhighlight %}

The really important and **amazing** part happens in `system.xml`. The way of adding fiels as shown below shows how
amazingly flexible Magento can be. When I tried it out and found that it worked right away I was really impressed.
Magento's Module System, where the Module Name is equal to the folder it is in, e.g. `Mage_Core_Block_Html_Link` is in
`Mage/Core/Block/Html/Link.php`, also applies to this XML configuration.
{% highlight xml %}
<config>
<sections>
  <catalog>
    <groups>
      <featured_products translate="label">
        <label>Featured Products</label>
        <frontend_type>text</frontend_type>
        <sort_order>50</sort_order>
        <show_in_default>1</show_in_default>
        <show_in_website>1</show_in_website>
        <show_in_store>1</show_in_store>
        <fields>
          <product_skus translate="label">
            <label>Insert product skus here</label>
            <frontend_type>text</frontend_type>
            <sort_order>50</sort_order>
            <show_in_default>1</show_in_default>
            <show_in_website>1</show_in_website>
            <show_in_store>1</show_in_store>
          </product_skus>
        </fields>
      </featured_products>
    </groups>
  </catalog>
</sections>
</config>
{% endhighlight %}

Well quite a lot of stuff happens here, let's break that down. 

### Sections
{% highlight xml %}
 <sections>
  <catalog>
  </catalog>
 </sections>
{% endhighlight %}

This part defines in what menu (in the backend on the left) the new fields will be insertet. In this case it's the
Catalog Menu and there the first Sub-Menu point (which is also named Catalog). 

### Groups
{% highlight xml %}
<groups>
 <group_name>
 </group_name>
</groups>
{% endhighlight %}

Groups define the "containers" for settings. These are the boxes on the right part of the screen. Because describing it
is rather stupid, here's a picture of the new admin menu and it's container (the group).
!["Custom field in the backend."](http://i.kevingimbel.me/sc/Screenshot at 13-52-42.png)

Lastly inside the group the content is defined. The wrapping tag can have any valid XML name you want, in my case it is
`<featured_products>` the `translate="label"` attribute tells Magento to translate the label if there is a translation
available, either in `translate.csv` or `myCompany_MyModule.csv` - that's up to you. 

Inside the container is more stuff that could need some explanation. 

{% highlight xml %}
<my_namespace>
  <label>Featured Products</label>
  <frontend_type>text</frontend_type>
  <sort_order>50</sort_order>
  <show_in_default>1</show_in_default>
  <show_in_website>1</show_in_website>
  <show_in_store>1</show_in_store>
<my_namespace/>
{% endhighlight %}

* `label` - The label to show at the top (headline)
* `frontend_type`- type of the field in the frontend
* `sort_order` - position in the list
* `show_in_default` - available in default view
* `show_in_website` - available in website view
* `show_in_store` - available in default store view
The show tags determine in what store config "scope" (after setting it in the top right) the option is available. 

{% highlight xml %}
<fields>
  <product_skus translate="label">
    <label>Insert product skus here (csv, e.g 123, 144, 255)</label>
    <frontend_type>text</frontend_type>
    <sort_order>50</sort_order>
    <show_in_default>1</show_in_default>
    <show_in_website>1</show_in_website>
    <show_in_store>1</show_in_store>
  </product_skus>
</fields>
{% endhighlight %}

* `label` - Label on the left (field description)
* `sort_order`- position _inside_ the list

I'm not entirely sure what the store variables do here, but I guess they configure if and where the field can be
`echo`ed in the frontend.

And that's it. Without a single line of PHP fields can be added to the backend in Magento. Retrieving the values of
those fields is also easy, as the following example shows.

{% highlight php %}
<?php echo Mage::getStoreConfig('catalog/featured_products/product_skus'); ?>
{% endhighlight %}

The logic here is simply `section/groupname/fieldname`. This fits pretty good with the previously mentioned folder
structure of Magento. 
