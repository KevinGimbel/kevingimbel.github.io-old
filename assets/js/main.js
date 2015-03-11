"use strict"; 
// getting the back to top button
var backTop = (function(window, document) { 
  var backTop = document.querySelector("#back-top");
// adding an event
document.addEventListener("scroll", function() {
  // when the window scrolls more than 300px, add class "is-displayed"
window.scrollY >= 300 ? backTop.classList.add("is-displayed") 
    // when we scroll back below 300px, remove the class
                      : backTop.classList.remove("is-displayed");
});

console.log('init');
// back to top function 
  backTop.addEventListener("click",function(e) {
    e.preventDefault();
    // using requestAnimationFrame if possible
    if(window.requestAnimationFrame) {
    var step = null;
    
    function scrollBack(timestamp) {
      if (!step) step = timestamp;
      var progress = step - timestamp;
      window.scrollBy(0, -50);
      if(window.scrollY !== 0) {
        window.requestAnimationFrame(scrollBack);
      } 
    }

    window.requestAnimationFrame(scrollBack);
    } else {
      // using an interval else
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
      }, 16); // the delay between the steps to go back to top. The smaller the number, the faster it goes
    }
    // prevent the click to reload the page
  }); // end of the Back to Top function
}(window, document));
