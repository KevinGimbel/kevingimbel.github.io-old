---
layout: post
title: "Getting into vim - again"
category: coding
tags: 
  - vim
  - editor
  - tools
---

It's been some time since I first got my fingers on VIM. My first impression was - as everyones I guess - pretty bad.
VIM is not that easy to understand, yet a powerful, shortcut-based, distraction free editor. I've already written about
[turning Sublime Text into VIM mode](/noobish-vim/) and my [very first VIM impression](/vim-first-impressions/), but
back then I just copy & pasted everything I found on the Internet into my `.vimrc`. Now with the new year I thought some
new thing to learn could be fun and I got back into _really_ working with VIM.

## Config first
The past week I've done all my daily work at [Synoa](http://synoa.de) in VIM. My current `.vimrc` is divided into 4
sections which I'll explain below.

### Plugins
{% highlight vim %}
" Enable Pathogen to manage plugins
execute pathogen#infect()
{% endhighlight %}

I've replaced Vundle with Pathogen to load Plugins because to my (still noobish) eye it looks better and more easy to
use. Pathogen auto-loads all Plugins that are placed inside `~/.vim/bundle/` - currently the only Plugin I'm using is
Emmet, because I'd never ever use an editor again that's missing Emmet. The way Emmet works in VIM is a little bit weird
because of the different modes and key mappings when you come from a Sublime Text 2/3 background. Basically, you need to
hit `[CTRL]+[C]+[,]` after every Emmet snippet - beside that it works as expected.

### Writin style and syntax
{% highlight vim %}
" enable syntax highlighting
syntax on

"setting the terminal color to 256 and theme
" to Bad Wolf, which is places in ~/.vim/colors
set t_Co=256
colorscheme badwolf
set showmode
set showcmd
set modeline
set ruler

" line number
set number
set tabstop=2
set shiftwidth=2
set expandtab
set backspace=indent,eol,start
set smartindent
set formatoptions+=t " wikia said I need this
set tw=120 " text width
set colorcolumn=120 " adds a ruler to the right side of Vim
set scrolloff=15
set wmh=0
{% endhighlight %}

I must admit that most of the VIM syntax and writing styles is still copy pasted from all over the Internet. In the
first block I'm setting the colorshemes and basic VIM UI (show mode, show CMD, have a mode line; use a ruler). In the
second block there's settings for line numbers (always nice to have!) and tab width (2 spaces, always), smartindent (so
new lines can be auto-indented), general text width (where to place the ruler), scroll off by X lines so I never scroll
down to the end of the screen and the wmh (window min height) - this one is used so tabs in split view don't take up any
space.

### Key mappings
{% highlight vim %}
" The <Enter> command behind each mapping executes the
" command directly. Otherwise the command would be written
" to the VIM 'console' thing
" start spell checking when hitting F5
map <F5> :set spell spelllang=en_us <Enter>
" switch to previous tab
nmap <F2> :tabp <Enter>
" switch to next tab
nmap <F3> :tabn <Enter>

" hold CTRL + k (up) or j (down)
map <C-J> <C-W>j<C-W>_
map <C-K> <C-W>k<C-W>_
" remove information in which line the non-active file currently is

" auto-expand path (opening files like :tabedit %%/)
cabbr <expr> %% expand('%:p:h')
{% endhighlight %}
Mostly my key mappings have stayed the same, F5 is used for spell checking (which comes very handy!), F2 and F3 are used
to navigate between open tabs. The important part here is the `<Enter>` behind each command. This way the command will
be executed immediately, otherwise it is written into the little command line at the bottom of VIM.

New here is the mapping to switch between split view windows. When opening a new file with `:sp` I can now navigate
using `[CTRL]+[C]` and `j` to go "down" or `k` to go up - this is really handy.

The last line has been the break-through for me in beeing productive with VIM. When working with Magento and CSS, I
often need to open many files in the same directory, yet I tend to start inside the root. Normally I'd have to write all
the path to where I am, like `:tabedit skin/frontend/namespace/default/scss/` when I'm inside a Magento skin folder.
With this little helper I can type `:tabedit %%/` and once I write the `/` the path will expand to the current
directory.

### No backups, no swap!
{% highlight vim %}
" No backups and no swap file
set nobackup
set noswapfile
{% endhighlight %}

The last part is still the same. Since I'm using git and branches for everything I don't need any kind of backup or swap
file since I could always revert anything. 

## Working in VIM

With these configurations I started to work in VIM. I tried changing and adjusting the themes a bit and in the end found my
self with a dark theme (bad wolf; a Doctor Who reference!) after using Tomorrow Night (light) for almost half a year. So
far after seven days the only thing I'm really missing from time to time is Sublime Texts Multi Cursor Feature and
"Search in Folder" to find stuff inside the whole project. There are plugins for the later feature and multi cursor
editing can be archive using weird, cryptic command combinations but I'm not familiar yet with either of these. So far I
enjoy the destraction free enviorment I'm working in and only start Sublime Text when I can't find a particular
template. 

Since I've used Sublime Text in Vintage Mode for almost 6 months I'm feeling comfortable enough with the basic
operations of using `y`ank, `d`elete or `p`ut to move around lines and edit code, `dit` (delete in tags) or `ei"` (edit
iin ") are things I don't use that often because they take too much time when they don't work right from the start. 

Other then some hardcore-users I'm also using my mouse wheel and the arrow keys to navigate inside VIM. I feel a lot
more comfortable doing it this way than I'd feel using only `h, j, k, l`. After all I liked to get into VIM and I'll see
how it can benefit to my workflow or if it'll stay in my way at the end - like all other editors I've tried - and I'll
return to my beloved Sublime Text 3. 

Keep up with my advimtures (ha punny!) by subscribing to the [Atom Feed](/atom.xml) or by following me on
[Twitter](https://twitter.com/_kevinatari): 
