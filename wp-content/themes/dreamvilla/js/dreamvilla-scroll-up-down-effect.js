jQuery(document).ready(function() {
	"use strict";
	jQuery(document).on('click', '.searchbychar', function(event) {
		event.preventDefault();
		var target = this.getAttribute('data-target');
		jQuery('html, body').animate({
			scrollTop : jQuery(target).offset().top
		}, 2000);
	});
}); 