$(document).ready(function(x) {
	$(x).preventDefault();
	  $(".options > p").on('click', function() {
	    $(".text-container").find(this.class + "-content").show();
	});
  
}) ;