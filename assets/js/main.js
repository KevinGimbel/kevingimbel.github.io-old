document.addEventListener("DOMContentLoaded", function() {
	
	var header = document.querySelector("#js--sidebar");

	document.addEventListener("scroll", function() {
		window.scrollY >= 300 ? header.classList.add("js--sidebar-fixed") 
							  : header.classList.remove("js--sidebar-fixed");
	});
});