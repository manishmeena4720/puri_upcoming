$(document).ready(function() {
	var height = $(window).height();
	$(".banner_image").height(height + "px");
	var top = (height - $(".house-info-box").height()) / 2;
	$(".house-info-box").css("top", top + "px");
	$(".banner_image").find("img").height(height + "px");
	$("section").css("min-height", height + "px");
	$(window).resize(function() {
		height = $(window).height();
		$(".banner_image").height(height + "px");
		top = (height - $(".house-info-box").height()) / 2;
		$(".house-info-box").css("top", top + "px");
		$(".banner_image").find("img").height(height + "px");
		$("section").css("min-height", height + "px");
	});
	$("section").appear();
	$("section").on("appear", function() {
		var divtop = $(this).offset().top
		var windowtop = $(window).scrollTop();
		if (divtop <= windowtop) {
			if ($(this).attr("id") == "agent_info_block") {
				$(".go_to_next").hide();
			} else {
				$(".go_to_next").show();
				$(".go_to_next").attr("data-id", "#" + $(this).next().attr("id"));
			}
			$(".banner_image").removeClass("banner_image_active");
			$(this).find(".banner_image").addClass("banner_image_active");
		}
	});
	$(".go_to_next").click(function() {
		scrollToElement($(".go_to_next").attr("data-id"), 1000);
	});
	var scrollToElement = function(el, ms) {
		var speed = (ms) ? ms : 600;
		$('html,body').animate({
			scrollTop : $(el).offset().top + 1
		}, speed);
	};
	$(".drop_down_menu_btn").click(function() {
		$(".drop_down_menu_outter").slideToggle();
	});
	function centerModals() {
		$('.modal').each(function(i) {
			var $clone = $(this).clone().css('display', 'block').appendTo('body');
			var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
			top = top > 0 ? top : 0;
			$clone.remove();
			$(this).find('.modal-content').css("margin-top", top);
		});
	}
	$('.modal').on('show.bs.modal', centerModals);
	$(window).on('resize', centerModals);

	$(".banner_image").first().addClass("banner_image_active");
}); 

$(document).ready(function(){
	function centerModals(){
	  $('.modal').each(function(i){
	    var $clone = $(this).clone().css('display', 'block').appendTo('body');
	    var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
	    top = top > 0 ? top : 0;
	    $clone.remove();
	    $(this).find('.modal-content').css("margin-top", top);
	  });
	}
	$('.modal').on('show.bs.modal', centerModals);
	$(window).on('resize', centerModals);
});