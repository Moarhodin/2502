$(document).ready(function() {

	$('.bildspel-bilder:first').fadeIn();
	setInterval(bytBild, 3000); 
	  
	function bytBild() {
	      	var nuvarande = $('.bildspel-bilder:visible');
	      	var nästa = nuvarande.next('.bildspel-bilder');
	      
      
	      	if (nästa.length === 0) {
			nästa = $('.bildspel-bilder:first');
	      	}
      
	      	fadeOutFadeIn(nuvarande, nästa);
	}
      
	function fadeOutFadeIn(nuvarande, nästa) {
	      	nuvarande.fadeOut();
	      	nästa.fadeIn();
	}
});

