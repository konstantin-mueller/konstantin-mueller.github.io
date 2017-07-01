"use strict";

function navbarClickListener() {
	const elements = document.querySelectorAll(".navbar .active");
	Array.from(elements).forEach(function(element) {
		element.removeClass("active");
	});
	this.classList.add("active");
}

function initNavbar() {
	const elements = document.querySelectorAll(".navbar li");
	Array.from(elements).forEach(function(element) {
		element.addEventListener("click", navbarClickListener, false);
	});
}

window.addEventListener("load", function() {
	initNavbar();
}, false);
