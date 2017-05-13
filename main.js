"use strict";

function initNavbar() {
	$(".navbar li").click(function() {
		$(".navbar .active").removeClass("active");
		$(this).addClass("active");
	});
}

$(document).ready(function() {
	initNavbar();
});