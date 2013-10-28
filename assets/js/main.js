var fixedElement = function(el,cl,of) {
	var header = document.querySelector(el);

	header.addEventListener("scroll", function() {
		window.scrollY >= of ? header.classList.add(cl) 
							  : header.classList.remove(cl);
	});

	console.log(header);
	console.log(el);
	console.log(cl);
	console.log(of);
};