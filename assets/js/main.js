"use strict"; 
// getting the back to top button
var BackTop = (function() { 
  var backTop = document.querySelector("#back-top");
// adding an event
document.addEventListener("scroll", function() {
  // when the window scrolls more than 300px, add class "is-displayed"
window.scrollY >= 300 ? backTop.classList.add("is-displayed") 
    // when we scroll back below 300px, remove the class
                      : backTop.classList.remove("is-displayed");
});

// back to top function 
  backTop.addEventListener("click",function(e) {
    e.preventDefault();
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
  }); // end of the Back to Top function
}());
// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-44634206-1', 'kevingimbel.com');
ga('send', 'pageview');
