---
layout: post
title: Bullgit &hearts; Jekyll
category: coding
---

After having a static HTML Page for about 6 months, we at [bullgit](http://bullg.it) just switched to a brand-new Jekyll page that uses the Github API to display all our repos as well as a list of members with images and links and there are a few reasons why we made this switch:

* Jekyll is built-in Github pages
* Jekyll is easy-to-learn and easy to maintain
* No-Database handling of Data (see [the list of members we use](https://github.com/bullgit/bullgit.github.io/blob/master/_data/members.yml))
* Everyone can clone the repo and run it locally

So basically, as soon as you have a Project on Github or an organization like [bullgit](http://twitter.com/bullgit) you can use the power of Jekyll to make your page easy to use and easy to change even for new members. We don't even use the Blog function of Jekyll (yet), we just have a front-page rendered with some Ajax to load all the Repos. 

### The basic Jekyll code

As I always like to remember in Jekyll posts: Jekyll builds static HTML pages but isn't that static at all. There is a lot of dynamics because files can be included into others, layouts are defined through the [Front Matter](http://kevingimbel.com/jekyll-guide/first-page/) and you're basically free to create whatever Front Matter and Data you want. 

The `index.html` looks like this:
{% highlight yaml %}
    ---
    layout: front-page
    title: 
    ---
{% endhighlight %}
That's it, the whole structure is loaded from a Layout file based in `/_layouts/`, this file is called `front-page.html`. This **only** holds the `<body>` content for the front-page, the header and footer are - equal like you'd do it in PHP or other languages - included from `header.html` and `footer.html` on every page. So even though it is "static", when you change `header.html` all files will get updated and the new header is available everywhere.

You can work like this, with `{%raw%}{% include file.html %}{%endraw%}` and Layouts in the Front Matter for every file and kind of content you like. It is even possible to create a [atom.xml](http://kevingimbel.com/atom.xml) that serves people wo like to subscribe to your posts. 

However, back to the bullgit. I discovered a awesome feature about Jekyll I didn't knew before: Data handling. When you create a folder called `_data` in your root directory you can put every kind of text-based data inside a *.yml file and load it in every page of your site.

{% highlight YAML %}
# let's assume this is members.yml
- name: Tim
  twitter: timpietrusky
  url: timpietrusky.com
  github: timpietrusky
  codepen: timpietrusky
  gravatar: http://www.gravatar.com/avatar/13a9550a854af911366d9f5deb785cd6?s=200

- name: Max
  twitter: MyXoToD
  url: myxotod.de
  github: myxotod
  codepen: MyXoToD
  gravatar: http://www.gravatar.com/avatar/a284083f6f4f9446723adf3b97b90151?s=200

- name: Kevin
  twitter: _kevinatari
  url: kevingimbel.com
  github: kevingimbel
  codepen: kevingimbel
  gravatar: http://www.gravatar.com/avatar/6d391d8c3a528122f3f6c991821350ac?s=200  
{% endhighlight %}

After the file is saved you can loop through its content like:

{% highlight html %}
{% raw %}
{% for member in site.data.member %}
    <h3>{{ member.name }}</h3>
    <a href="https://twitter.com/{{member.twitter}}">{{ member.twitter }}</a>
    <a href="{{ member.url }}"> {{ member.url }} </a>
    <a href="http://codepen.io/{{ member.codepen }}">{{ member.codepen }}</a>
{% endfor %}
{% endraw %}
{% endhighlight %}

That's it, the result is a `h3` for every member holding its name and 3 links holding the Twitter, Personal Website and CodePen URL, this way new members can be added easily - only one of us has to edit the `members.yml` file and the page gets updated a few seconds after.

### Github API

As I mentioned above we're using Github's API to get all our repos on the front-page. This was pretty easy to be honest, even for a JavaScript and API beginner like I am. 

As I always do I avoided jQuery for this because I think it is a waste of Requests to load jQuery if I only use a minimal of its functionality. So I wrote the Ajax request by hand. The comments describe what goes one. 

{% highlight javascript %}
    // Loading a new Ajax Request and saving it
    // to the variable xml
    var xml = new XMLHttpRequest();

    // opening the connection to Github's REPO API
    // Method: GET
    // Source URL: https://api.github.com/orgs/bullgit/repos
    // Asynchronous: false 
    // For some reasons asynch: true results doubled results
    xml.open("GET", "https://api.github.com/orgs/bullgit/repos", false);

    // when the state changed (data received )
    xml.onreadystatechange = function() {
        // controller for the grid system
        var j;
        // we take the response
        var res = xml.responseText;
        // put it into a new var and parse it 
        var obj = JSON.parse(res);

        
        // then run over ALL THE BULLGIT
        // running reverse because github goes from oldest to newest
        for(i = obj.length - 1; i >= 0; i-- ) {

            var url = (obj[i]['homepage'] === null || obj[i]['homepage'] === '' )
                      ? 'https://github.com/' + obj[i]['full_name'] 
                      : obj[i]['homepage']; 

            // if it's the first item
            if(i === obj.length - 1) {
                // create a layout for the first featured project
            var layout = "<article class='content--wrap  featured--article'>" +
                         "<h2>" +
                            replace('<a href="%s">%s</a>', url, obj[i]['name']) + 
                        "</h2>" +
                            replace('<p>%s</p>', obj[i]['description']) +
                         "</article>";

                output = document.querySelector("[data-js=featured-project]"); 

                var j = 1;               
            } else {

              // output = document.querySelector("[data-js=old-projects]");

            // create a layout for all other projects
            var layout = "<article class='project'>" +
                         "<h3 class='project--headline'>" +
                            replace('<a href="%s">%s</a>', url, obj[i]['name']) + 
                        "</h3>" +
                             "<p>"+ obj[i]['description'] + "</p>" +
                         "</article>";

                // select an output @TODO[Kevin]: Re-think logic...
              switch(j) {
                case 1:
                  var output = document.querySelector("[data-column='1']");
                  console.log("case 1: " + j + " --- " + obj[i]['name'])
                  j++;
                  break;
                case 2:
                  var output = document.querySelector("[data-column='2']");
                  console.log("case 2: " + j + " --- " + obj[i]['name'])
                  j = 1;
                  break;
                default:
                  j = 1;
              }  
            }       
            // and adding our brand-new bullshit to it.
            output.innerHTML += layout;
        }
    };

    // sending data
    xml.send();
{% endhighlight %}

Another piece if JavaScript is used to add the Script after the DOM is fully loaded, as suggested by [Tim](http://twitter.com/timpietrusky) to speed up the overall loading speed. 

{% highlight javascript %}
    // Add a script element as a child of the body
    function downloadJSAtOnload() {
        var element = document.createElement('script');
        element.src = 'assets/js/main.js';
        document.body.appendChild(element);
    }

    // Check for browser support of event handling capability
    if (window.addEventListener) {
        window.addEventListener("load", downloadJSAtOnload, false);
    } else if (window.attachEvent) {
        window.attachEvent("onload", downloadJSAtOnload);
    } else {
        window.onload = downloadJSAtOnload;
    }
{% endhighlight %}

Those are just a few of the benefits of Jekyll and, because we're a "Github only" organization we switched so it's easier to scale the site. Building a Blog would now only take a some time because we're already running Jekyll and just have to add one more layout. That's it, the basics of our brand-new [bullgit](http://bullg.it) page.