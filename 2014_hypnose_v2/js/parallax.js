$(document).ready(function() {

	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
    });
    

	/* Défilement doux */
	$('a.accueil').click(function(){
    	$('html, body').animate({
    		scrollTop:$('body').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.bienvenue').click(function(){
    	$('html,body').animate({
    		scrollTop:$('#bienvenue').offset().top -80
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
    $('a.parcours').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#parcours').offset().top -80
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.historique').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#historique').offset().top -80
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.seance').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#seance').offset().top -80
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.origineEMDR').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#origineEMDR').offset().top -80
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.emdr').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#emdr').offset().top -80
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.queTraiter').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#queTraiter').offset().top -80
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.retour_menu').click(function(){
    	$('html, body').animate({
    		scrollTop:$('body').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });



    /* Show/hide dot lav labels on hover */
    $('nav#primary a').hover(
    	function () {
			$(this).prev('h4').show();
		},
		function () {
			$(this).prev('h4').hide();
		}
    );

});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top',(0-(scrolled*.7))+'px');
	$('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
	$('#parallax-bg3').css('top',(0-(scrolled*.75))+'px');
}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
	var section1Top =  0;
	var section2Top =  $('#parcours').offset().top - (($('#historique').offset().top - $('#parcours').offset().top) / 2);
	var section3Top =  $('#historique').offset().top - (($('#seance').offset().top - $('#historique').offset().top) / 2);
	var section4Top =  $('#seance').offset().top - (($('#origineEMDR').offset().top - $('#seance').offset().top) / 2);
	var section5Top =  $('#origineEMDR').offset().top - (($('#emdr').offset().top - $('#origineEMDR').offset().top) / 2);
	var section6Top =  $('#emdr').offset().top - (($('#queTraiter').offset().top - $('#emdr').offset().top) / 2);
	var section7Top =  $('#queTraiter').offset().top - (($(document).height() - $('#queTraiter').offset().top) / 2);

	$('nav#primary a').removeClass('active');
	if($(document).scrollTop() >= 0 && $(document).scrollTop() < 1){
		$('nav#primary a.accueil').addClass('active');

	} else if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav#primary a.bienvenue').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('nav#primary a.parcours').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('nav#primary a.historique').addClass('active');
	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
		$('nav#primary a.seance').addClass('active');
	} else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top){
		$('nav#primary a.origineEMDR').addClass('active');
	} else if ($(document).scrollTop() >= section6Top && $(document).scrollTop() < section7Top){
		$('nav#primary a.emdr').addClass('active');
	} else if ($(document).scrollTop() >= section7Top){
		$('nav#primary a.queTraiter').addClass('active');
	}
	
}