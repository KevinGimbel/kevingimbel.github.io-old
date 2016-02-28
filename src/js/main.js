"use strict";

/*
 * isScrolledBelow
 *
 * A function to check if the page has been scrolld
 * below a specified offset. Optional with callbacks for true
 * and false.
 *
 * isScrolledBelow(150, handleBelow150, handleAbove150);
 * @param {Int} - offset (requied)
 * @param {Fn} - Callback for true
 * @param {Fn} - Callback for false
 *
 */
var isScrolledBelow =  function(offset, callbackTrue, callbackFalse) {
    var currentOffset = window.scrollY;
    var isMore = currentOffset > offset ? true : false;

    if(arguments.length === 1) {
      return isMore;
    }

    if(arguments.length === 3) {
        if(isMore) {
          callbackTrue()
        } else {
          callbackFalse();
        }
    }

    if(arguments.length === 0) {
      var argLen = arguments.length;
      throw new Error('Missing arguments. '+ argLen +' arguments given but at least 1 required.')
    }
 };

 var fixedElement = function(element,classToAdd,offsetY){
   var fixedEl = document.querySelector(element);
   document.addEventListener('scroll', function() {
   window.scrollY >= offsetY ? fixedEl.classList.add(classToAdd) :
                              fixedEl.classList.remove(classToAdd);
 });
 }

  //fixedElement('#main_nav', 'nav--fixed', 0)


/*
 * backToTop
 *
 * A IIFE to get the back to top button and assign the handling to it.
 * When there's window.requestAnimationFrame this will be used to handle the
 * animation, otherwise an interval is used.
 */

  var backToTop = (function(window, document, undefined) {
  var backTop = document.querySelector("#back-top");
// adding an event
document.addEventListener("scroll", function() {
  // Get the Nav
  var nav = document.querySelector('#main_nav');
  // Toggle the fixed / unfixed state, the trashhold is
  // 1px. This way the header is fixed on scroll and "released"
  // whenever the page is scrolled back up.
  isScrolledBelow(1,
    function() {
      nav.classList.add('nav--fixed');
    },
    function() {
      nav.classList.remove('nav--fixed');
    }
  );

  // when the window scrolls more than 300px, add class "is-displayed"
  isScrolledBelow(300, function() {
      backTop.classList.add('is-visible');
    }, function() {
      backTop.classList.remove('is-visible');
    });
});
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
