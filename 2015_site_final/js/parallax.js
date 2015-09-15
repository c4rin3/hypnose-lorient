$(document).ready(function() {

	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
    });
    

	/* Défilement auto */
	$('a.retour_menu').click(function(){
    	$('html, body').animate({
    		scrollTop:$('body').offset().top
    	}, 1000, 'easeOutExpo', function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.accueil').click(function(){
    	$('html,body').animate({
    		scrollTop:$('#accueil').offset().top -60
    	}, 1000, 'easeOutExpo', function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
    $('a.hypnose-therapeutique').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#hypnose-therapeutique').offset().top -60
    	}, 1000, 'easeOutExpo', function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.hypnose-perinatale').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#hypnose-perinatale').offset().top -60
    	}, 1000, 'easeOutExpo', function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.emdr').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#emdr').offset().top -60
    	}, 1000, 'easeOutExpo', function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.seance').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#seance').offset().top -60
    	}, 1000, 'easeOutExpo', function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.indications').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#indications').offset().top -60
    	}, 1000, 'easeOutExpo', function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.parcours').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#parcours').offset().top -60
    	}, 1000, 'easeOutExpo', function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.blog').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#blog').offset().top -60
    	}, 1000, 'easeOutExpo', function() {
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
	$('#parallax-bg1').css('top',(0-(scrolled*.80))+'px');
	$('#parallax-bg2').css('top',(0-(scrolled*.65))+'px');
	$('#parallax-bg3').css('top',(0-(scrolled*.75))+'px');
}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
	var section1Top =  0;
	var section2Top =  $('#hypnose-therapeutique').offset().top - (($('#hypnose-perinatale').offset().top - $('#hypnose-therapeutique').offset().top) / 3.5);
	var section3Top =  $('#hypnose-perinatale').offset().top - (($('#emdr').offset().top - $('#hypnose-perinatale').offset().top) / 3.5);
	var section4Top =  $('#emdr').offset().top - (($('#seance').offset().top - $('#emdr').offset().top) / 3.5);
	var section5Top =  $('#seance').offset().top - (($('#indications').offset().top - $('#seance').offset().top) / 3.5);
	var section6Top =  $('#indications').offset().top - ( ($('#parcours').offset().top - $('#indications').offset().top) / 3.5);
	var section7Top =  $('#parcours').offset().top - ( ($('#blog').offset().top - $('#parcours').offset().top) / 5.5);
	var section8Top =  $('#blog').offset().top - (($(document).height() - $('#blog').offset().top) / 3.5);

	$('nav#primary a').removeClass('active');
	if($(document).scrollTop() >= 0 && $(document).scrollTop() < 1){
		$('nav#primary a.retour_menu').addClass('active');
	} else if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav#primary a.accueil').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('nav#primary a.hypnose-therapeutique').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('nav#primary a.hypnose-perinatale').addClass('active');
	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
		$('nav#primary a.emdr').addClass('active');
	} else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top){
		$('nav#primary a.seance').addClass('active');
	} else if ($(document).scrollTop() >= section6Top && $(document).scrollTop() < section7Top){
		$('nav#primary a.indications').addClass('active');
	} else if ($(document).scrollTop() >= section7Top && $(document).scrollTop() < section8Top){
		$('nav#primary a.parcours').addClass('active');
	} else if ($(document).scrollTop() >= section8Top){
		$('nav#primary a.blog').addClass('active');
	}
	
}