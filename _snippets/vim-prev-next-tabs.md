---
layout: single-snippet
title: "VIM: Prev & Next Tabs (Key Mapping)"
---

In VIM it's possible to open new tabs by typing `:tabedit myfile.ext` which  will open myfile.ext in
a new tab. Navigation through tabs, however, is not so great because it's also bound to a text by
default: `:tabn` and `:tabp` for tab-next and tab-previous. Below is a simple key mapping to use the
F2 and F3 keys for navigation.

Add the following to your `.vimrc`.
{% highlight vim %}
" map F2 to :tabp
nmap <F2> :tabp <Enter>
" map F3 to tabn
nmap <F3> :tabn <Enter> 
{% endhighlight %}

The `<Enter>` behind the two mappings tell VIM to execute the command directly, otherwise it would
only be written to the command bar and you'd need to hit Enter manually.
