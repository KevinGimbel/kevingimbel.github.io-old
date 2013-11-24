document.addEventListener("DOMContentLoaded", function() {
  // '- checking for the DOM to finish loading

  // selecting the Phrases element
  var phraseContainer = document.querySelector('#phrase');
  
  // array of phrases to add
  phrases = [
    'I push to <a href="http://github.com/kevingimbel" class="phrase--link">master</a>.',
    'I play games.',
    'sometimes I use the <code>--force</code>',
    'I make bad puns.',
    'I listen to a lot of <a href="http://soundcloud.com/atarijunge" class="phrase--link">music</a>.',
    'I take <a href="http://eyeem.com/atarijunge" class="phrase--link">pictures</a>.',
    'I create demos on <a href="http://codepen.io/kevingimbel" class="phrase--link">CodePen</a>.',
    'I play games.',
    'I make stupid faces.',
    'I love you. &hearts;'
  ];

// anonymous function for phrases
(function(){

    // get the number of phrases
   var count = phrases.length;

   // initialize a function to loop through the phrases
  var loopThroughPhrases = function() {
  
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
    // change the phrase every 2,5 seconds
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
  backTop.addEventListener("click",function() {
    // setting an interval 
    var toTop = setInterval(function() {
      // if we're not on top of the page
      if(window.scrollY != 0) {
          // we scroll back to the top [scrollBy(x,y)]
        window.scrollBy(0,-50);
            // in case we're at the top (window.scrollY = 0)
      } else {
              // clear the interval
        clearInterval(toTop);
      }
    },25); // the delay between the steps to go back to top. The smaller the number, the faster it goes
    // prevent the click to reload the page
    event.preventDefault();
  }); // end of the Back to Top function


  // mobile menu
  var menuContainer = document.querySelector("#mobileMenu");
  menuContainer.addEventListener("change", function() {
    var destination = this.value;
    window.location = destination;
  });


}); // end of DOMContentLoaded