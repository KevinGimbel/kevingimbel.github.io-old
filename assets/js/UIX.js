var UIX = (function(window, document, undefined) {
  var switchContent = function(articleID) {
    var article = document.querySelector('[data-article="'+ articleID +'"]');
    
    var ajax = new XMLHttpRequest();
    
    ajax.open("GET", "/article.json", true);
    ajax.onreadystatechange = function() {
      console.log(ajax.responseText);
    }
  }
}(window, document, undefined));
