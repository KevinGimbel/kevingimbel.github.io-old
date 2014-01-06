    "use strict";
      // selecting the Phrases element
    var phraseContainer = document.querySelector('#phrase'),
      
      // array of phrases to add
    phrases = [
            'I push to <a href="http://github.com/kevingimbel" class="phrase--link">master</a>.',
            'I play games.',
            'Sometimes I use the <code>--force</code>',
            'I make bad puns.',
            'I listen to a lot of <a href="http://soundcloud.com/atarijunge" class="phrase--link">music</a>.',
            'I take <a href="http://eyeem.com/kevingimbel" class="phrase--link">pictures</a>.',
            'I create demos on <a href="http://codepen.io/kevingimbel" class="phrase--link">CodePen</a>.',
            'I play games.',
            'I make stupid faces.'
        ];
    
    // anonymous function for phrases
    (function() {
    
        // get the number of phrases
       var count = phrases.length,
    
       // initialize a function to loop through the phrases
       loopThroughPhrases = function () {

          // going through the phrases, reverse
        if(count > 0) {
            // decresing the current count
          count--;
            // updatin the inner HTML of the phrases container
          phraseContainer.innerHTML = phrases[count];
        } else {
            // if we hit 0, start over
          count = phrases.length - 1;
        }
        // change the phrase every 5 seconds
        setTimeout(loopThroughPhrases,5000);

      };
        // and last but not least: call the phrase function...
      loopThroughPhrases();
      // ... as well as the anonymous function
    })();// end
      
    // getting the back to top button
    var backTop = document.querySelector("#back-top");
    
    // adding an event
    document.addEventListener("scroll", function() {
      // when the window scrolls more than 300px, add class "displayed"
    window.scrollY >= 300 ? backTop.classList.add("displayed") 
        // when we scroll back below 300px, remove the class
                          : backTop.classList.remove("displayed");
    });
    
    
    // back to top function 
      backTop.addEventListener("click",function(e) {
        // setting an interval 
        var toTop = setInterval(function() {
          // if we're not on top of the page
          if(window.scrollY !== 0) {
              // we scroll back to the top [scrollBy(x,y)]
            window.scrollBy(0,-50);
                // in case we're at the top (window.scrollY = 0)
          } else {
                  // clear the interval
            clearInterval(toTop);
          }
        },25); // the delay between the steps to go back to top. The smaller the number, the faster it goes
        // prevent the click to reload the page
        e.preventDefault();
      }); // end of the Back to Top function
    
    
      // mobile menu
      var menuContainer = document.querySelector("#mobileMenu");
      menuContainer.addEventListener("change", function () {
        var destination = this.value;
        window.location = destination;
      });

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-44634206-1', 'kevingimbel.com');
ga('send', 'pageview');