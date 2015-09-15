$(document).ready(function() {
	
	redrawDotNav();
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
    });
    
	/* Next/prev and primary nav btn click handlers */
	$('a.accueil').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
    $('a.parcours').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#parcours').offset().top - 105
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.historique').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#historique').offset().top - 105
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.deroulement').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#deroulement').offset().top - 105
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.origine').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#origine').offset().top - 105
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.definitionEMDR').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#definitionEMDR').offset().top - 105
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.quetraiter').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#quetraiter').offset().top - 105
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });

	/*
	$('a.articles').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#articles').offset().top - 105
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    */


    /* Show/hide dot lav labels on hover */
    $('nav#primary a').hover(
    	function () {
			$(this).prev('h1').show();
		},
		function () {
			$(this).prev('h1').hide();
		}
    );
    
});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
	$('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
	$('#parallax-bg3').css('top',(0-(scrolled*.75))+'px');
}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
	var section1Top =  0;
	// The top of each section is offset by half the distance to the previous section.
	var section2Top =  $('#parcours').offset().top - (($('#historique').offset().top - $('#parcours').offset().top) / 2);
	var section3Top =  $('#historique').offset().top - (($('#deroulement').offset().top - $('#historique').offset().top) / 2);
	var section4Top =  $('#deroulement').offset().top - (($('#origine').offset().top - $('#deroulement').offset().top) / 2);
	var section5Top =  $('#origine').offset().top - (($('#definitionEMDR').offset().top - $('#origine').offset().top) / 2);
	var section6Top =  $('#definitionEMDR').offset().top - (($('#quetraiter').offset().top - $('#definitionEMDR').offset().top) / 2);
	//var section7Top =  $('#quetraiter').offset().top - (($('#articles').offset().top - $('#quetraiter').offset().top) / 2);
	var section7Top =  $('#quetraiter').offset().top - (($(document).height() - $('#quetraiter').offset().top) / 2);
	//var section8Top =  $('#articles').offset().top - (($(document).height() - $('#articles').offset().top) / 2);;



	$('nav#primary a').removeClass('active');

	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav#primary a.accueil').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('nav#primary a.parcours').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('nav#primary a.historique').addClass('active');
	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
		$('nav#primary a.deroulement').addClass('active');
	} else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top){
		$('nav#primary a.origine').addClass('active');
	} else if ($(document).scrollTop() >= section6Top && $(document).scrollTop() < section7Top){
		$('nav#primary a.definitionEMDR').addClass('active');
	}
	else if ($(document).scrollTop() >= section7Top){
		$('nav#primary a.quetraiter').addClass('active');
	}

	/*else if ($(document).scrollTop() >= section8Top){
		$('nav#primary a.articles').addClass('active');
	}
	*/	
	
}
