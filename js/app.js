$(document).ready(function() {
 
	 function hideHud() {
		$(".hud, .options").removeClass('grow').addClass('hudScale').slideUp();

	
	}; 

	function showHud() {
		$(".hud, .options").removeClass('hudScale').addClass('grow').slideDown();
		 $('.hud').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
    function(e) {
    

    $('.hud').removeClass('grow');
    }
);
	};

	function showX() {
		$(".ex").show();
	}


		$('.hud').on('click', function() {
			$(this).css({"border-color": "#9DFCF0"});
     		$('.options').css({"visibility":"visible"}).hide().fadeIn();
     		$('.border').css({"visibility":"visible"}).hide().fadeIn();
     		$('.sub-border').css({"visibility":"visible"}).hide().fadeIn();
     	});


		$('.about').children().mouseenter(function() {
			$(this).parent().find("i").css({"visibility":"visible"});
		})


		$('.about').mouseleave(function() {
			$(this).parent().find("i").css({"visibility":"hidden"});
		})

			$('.contact').children().mouseenter(function() {
			$(this).parent().find("i").css({"visibility":"visible"}).hide().fadeIn();
		})


		$('.contact').mouseleave(function() {
			$(this).parent().find("i").css({"visibility":"hidden"});
		})

	$('.portfolio').children().mouseenter(function() {
			$(this).parent().find("i").css({"visibility":"visible"}).hide().fadeIn();
		})


		$('.portfolio').mouseleave(function() {
			$(this).parent().find("i").css({"visibility":"hidden"});
		})



		  $(".port-link").on('click', function(x) {
		  	(x).preventDefault();
		  	hideHud();
		  	showX();
		  	console.log("cool");
		  
		  	$(".portfolio-content").show();
		});

		   $(".contact-link").on('click', function(x) {
		  	(x).preventDefault();
		  	hideHud();
		  	showX();
		  	$(".contact-content").show();
		});

		    $(".about-link").on('click', function(x) {
		  	(x).preventDefault();
		  	hideHud();
		  	showX();
		  	$(".about-content").show();
		});

		    $('.ex').on('click', function(){
		    	showHud();
		    	$(".about-content").hide();
		    	$(".contact-content").hide();
		    	$(".portfolio-content").hide();
		    	
		    	$('.ex').hide();
		    });






  
}) ;