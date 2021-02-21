jQuery(document).ready(function() {
	"use strict";
	var currentImage = "";
	var nextimage = 0;
	var currentBullet="";
	
	if(typeof autoRotateSlider != 'undefined' && autoRotateSlider!="no"){
		doSlideshow();	
	} else {
		jQuery(".image_header").first().addClass("active_image");
	}
	function doSlideshow() {
		moveNextImage();
		setTimeout(doSlideshow, 5000);
	}

	jQuery(".header .next_image_btn").click(function() {
		moveNextImage();
	});
	jQuery(".header .previous_image_btn").click(function() {
		movePreviousImage();
	});
	jQuery(".slider_bullets").on('click','li',function(){
		var index=jQuery(this).index();
		jQuery(".active_image").removeClass("active_image");
		jQuery(".slider_bullets .active").removeClass("active");
		jQuery(this).addClass("active");
		jQuery(".image_header:eq("+index+")").addClass("active_image");		
	});
	if(typeof sliderstyle != 'undefined' && sliderstyle=="bulleted"){
		genrateBullet();	
	}
	function genrateBullet(){
		var noofimage= jQuery(".image_header").length;
		for(var i=0;i<noofimage;i++)
		{
			jQuery(".slider_bullets").append("<li></li>");
		}
		jQuery(".slider_bullets li").first().addClass("active");
	}
	function moveNextImage()
	{
		currentImage = jQuery(".active_image");
		currentBullet = jQuery(".slider_bullets .active").removeClass("active");
		jQuery(currentImage).removeClass("active_image");	
		if (!jQuery(currentImage).next(".image_header").length) 
		{
			jQuery(".image_header").first().addClass("active_image");
			jQuery(".slider_bullets li").first().addClass("active");
		}
		else 
		{
			jQuery(currentImage).next(".image_header").addClass("active_image");
			jQuery(currentBullet).next().addClass("active");
		}		
	}
	function movePreviousImage()
	{
		currentImage = jQuery(".active_image");
		currentBullet = jQuery(".slider_bullets .active").removeClass("active");		
		jQuery(currentImage).removeClass("active_image");	
		if (!jQuery(currentImage).prev(".image_header").length) 
		{
			jQuery(".image_header").last().addClass("active_image");
			jQuery(".slider_bullets li").last().addClass("active");
		}
		else 
		{
			jQuery(currentImage).prev(".image_header").addClass("active_image");
			jQuery(currentBullet).prev().addClass("active");			
		}		
	}
}); 