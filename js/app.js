$(document).ready(function() {
 
 // hides center hud w/ animated scale effect 
	 function hideHud() {
		$(".hud, .options").removeClass('grow').addClass('hudScale').slideUp();

	
	}; 

 // shows center hud w/ animated scale effect 

	function showHud() {
		$(".hud, .options").removeClass('hudScale').addClass('grow').slideDown();
		 $('.hud').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
    function(e) {
    	$('.hud').removeClass('grow');
    }
);
	};

//shows a miniature version of the hud that can be used to return to main page

	function showX() {
		$(".ex").show();
	}

//main click function
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

//mouseover effects
		$('.contact').mouseleave(function() {
			$(this).parent().find("i").css({"visibility":"hidden"});
		})

	$('.portfolio').children().mouseenter(function() {
			$(this).parent().find("i").css({"visibility":"visible"}).hide().fadeIn();
		})


		$('.portfolio').mouseleave(function() {
			$(this).parent().find("i").css({"visibility":"hidden"});
		})


//shows desired page and hides center hud

		  $(".port-link").on('click', function(x) {
		  	(x).preventDefault();
		  	hideHud();
		  	showX();
		  	
		  
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

//hides miniature hud and returns user to main hud

		    $('.ex').on('click', function(){
		    	showHud();
		    	$(".about-content").hide();
		    	$(".contact-content").hide();
		    	$(".portfolio-content").hide();
		    	
		    	$('.ex').hide();
		    });






  
}) ;