---
layout: post
title: Vim - first impression
category: software
tags: 
- editor
- vim
---
When I first looked at Vim it was a very short expierence that was literally as followes
{% highlight bash %}
	# from the command line
	vim test.md
	*vim opens*
	"What's that?"
	*CTRL + C* 
	"How do I even close this?!"
	*opens browser, googles "how to close VIM"*
	ESC + :q
{% endhighlight %}

That was it and that was my Vim expierence for quite some time. However, lately I see more and more people talking
about Vim being the single best editor for everything - no matter what language one writes. A site notice here: I
still use Sublime Text (2) daily and love it, I have it configured as I like, have all my Plugin and color schemes
and it just feels great. I tried some other editors like [Brackets](/brackets-vs-sublime-text/) and
[Atom](https://atom.io), also [WebStorm](http://www.jetbrains.com/webstorm/) and [PhpStorm](http://www.jetbrains.com/phpstorm/). The later two are great as IDEs but are not the way I like to write code because both are a lot slower than a
simple text editor like atom, sublime of vim. I guess that's the downside of having an IDE - for me it was too much (I still recommend
trying them, maybe they enhance your workflow). Atom is really like a  clone of Sublime Text running Web Technologies at
it's heart (Sublime Text is written in Python).

!["Vim while writing a article"](http://i.kevingimbel.me/sc/vim_markdown.png "Vim while writing an article")

Anyway, back to Vim. Vim is, what supprised me first, a command line-based editor, there is a Graphic UI version called
gVim but I wanted to see how I can customize the command line one. Just like the normal bash has a
`.bashrc` Vim has its own `.vimrc` which defines the settings for all its (advanced) functionallity and settings. When
you open Vim with from the command line with `vim my-file.md` you'll see a black editor with some "~" on the left.
You're now in "normal" mode and need to tab `i` to start `i`nserting stuff. From within the insert mode its really like
any other editor. When you leave the insert mode (by pressing `ESC`) you're back in the "Normal" mode where you can
easily navigate through your file and delete stuff. Deleting works pretty cool I guess, just double tab `d` to delete a
whole sentence or `x` to delete the character below the cursor. Or fancy stuff like `d + arrow up/down` to delete a
whole paragraph. 

So basically everything in Vim is bound to keys and those keys can be combined (like `d`elete + up) and I am sure
there's even more power inside Vim when it comes to text manipulation, navigation, replacements, etc. Anyway, as long as
I haven't found out what stuff is possible I'll just share my `.vimrc` with you. 

{% highlight vim %}
	{% raw %}
	" vim:fdm=marker
	set nocompatible " required by Vundle
	filetype off " required by Vundle

	" Vundle Settings {{{
	" set the runtime path to include Vundle and initialize
	set rtp+=~/.vim/bundle/Vundle.vim
	call vundle#begin()

	" make Vundle manage itself.
	Plugin 'gmarik/Vundle.vim'

	" Emmet - I just can not work without this powerful helper
	Plugin 'mattn/emmet-vim'

	" Vim Airline is some kind of fancy status bar thingy I guess.
	Plugin 'bling/vim-airline'

	" this needs to be called after all Plugins are loaded
	call vundle#end()
	filetype plugin indent on

	" }}}

	" Syntax highlighting and vim style {{{

	" enable syntax highlighting
	syntax on

	"setting the color scheme to github, which is places in ~/.vim/colors
	set t_Co=256
	colorscheme Tomorrow

	" vim Airline settings
	" set airline to be displayed all the time (default is only in split mode)
	set laststatus=2
	let g:airline_left_sep = '▶'
	let g:airline_right_sep = '◀'

	" line number
	set number
	" }}}

	" write settings {{{
	set tabstop=2
	set shiftwidth=2
	set backspace=indent,eol,start
	set smarttab
	set formatoptions+=t " wikia said I need this
	set tw=120 " text width
	set colorcolumn=120 " addes a ruler to the right side of Vim
	" }}}

	" No backups and no swap file
	set nobackup
	set noswapfile
	{% endraw %}
{% endhighlight %}

So that's quite some stuff I guess. First of all, [Vundle](https://github.com/gmarik/Vundle.vim) is the Plugin manager
for Vim, there are others but I chose this one because it is 99% written in VimL. This little thingy helps me keep track
of Plugins I use. Friendly.
`syntax on` simply turn on syntax highlighting. `set t_Co=256` sets the terminal colors to 256 colors so the
`colorscheme Tomorrow` ([here](https://github.com/chriskempson/tomorrow-theme)) works. Next up is Airline, a "better
statusbar" for Vim. I saw this on a screenshot once and searched for it, what I first found was
[Powerline](https://github.com/Lokaltog/powerline) but I then saw [Airline](https://github.com/bling/vim-airline) and
chose it because it is written in VimL and I - as of now - try to avoid language mixin because I think it's a good idea
to keep Vim "clean" as long as possible. Airline can show in what mode I am, what Git Branch I'm on, and a lot of other
stuff I haven't configured yet. I guess that'll be another blog post. The `airline_left_sep` and `airline_right_sep` are
the seperators of the statusline (see the screenshot below, the seperators are down after "Normal" and before the "1%")  which at the moment don't look as cool as I thought - have to fix this. Next up
tabstops, shiftwidth (self explaining), backspace (I've no idea what this is but saw it in any .vimrc I found)
smarttabs, text width so Vim doesn't write until the end of the screen (I like small gaps to the right) and colorcolumn,
which is a ruler-like thingy to visually show the max text width. Last stuff: No backups, no swap files, according to a blog
post I found this isn't needed when working with version controls such as git. 

The weird looking brackets are used to "auto-close" this section so that when I open my file only the discription is
visible - this makes a long `.vimrc` a lot more readable. 

![Vim with auto-closed sections](http://i.kevingimbel.me/sc/sc-26-01-13.png "Vim with auto-closed sections")

So that's it, my tiny Vim experience and setup. As with every config things you can grab a copy of my `.vimrc` in the
[Github Config Repo](https://github.com/kevingimbel/config/blob/master/.vimrc).
