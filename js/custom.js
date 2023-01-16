(function ($) {

	'use strict'


	AOS.init({
		duration: 800,
		easing: 'slide',
		once: false
	});

	  /**
   * Easy selector helper function
   */
	   const select = (el, all = false) => {
		el = el.trim()
		if (all) {
		  return [...document.querySelectorAll(el)]
		} else {
		  return document.querySelector(el)
		}
	  }
	

/*
	var loader = document.getElementById('preloader');

		window.addEventListener ("load", function() {
			setTimeout(function(){loader.style.display = 'none';}, 1000).fadeOut('slow')
			
		});

*/
		


	var tinyslier = function() {

		var heroSlider = document.querySelectorAll('.hero-slide');
		var propertySlider = document.querySelectorAll('.property-slider');
		var imgPropertySlider = document.querySelectorAll('.img-property-slide');
		var testimonialCenter = document.querySelectorAll('.testimonial-center');
		var teamSlider = document.querySelectorAll('.team-slider')
		var teamInfoSLider = document.querySelectorAll('.main-content')

		if ( heroSlider.length > 0 ) {
			var tnsHeroSlider = tns({
				container: '.hero-slide',
				mode: 'carousel',
				speed: 700,
				autoplay: true,
				controls: false,
				nav: false,
				autoplayButtonOutput: false,
				controlsContainer: '#hero-nav',
			});
		}


		if ( imgPropertySlider.length > 0 ) {
			var tnsPropertyImageSlider = tns({
				container: '.img-property-slide',
				mode: 'carousel',
				speed: 700,
				items: 1,
				autoplay: true,
				controls: false,
				nav: true,
				autoplayButtonOutput: false
			});
		}

		if ( propertySlider.length> 0 ) {
			var tnsSlider = tns({
				container: '.property-slider',
				mode: 'carousel',
				speed: 700,
				items: 3,
				autoplay: true,
				autoplayButtonOutput: false,
				controlsContainer: '#property-nav',
				responsive: {
					0: {
						items: 1
					},
					700: {
						items: 2
					},
					900: {
						items: 3
					}
				}
			});
		}

		if ( imgPropertySlider.length > 0 ) {
			var teamSlider = tns({
				container: '.person',
				mode: 'carousel',
				speed: 700,
				items: 1,
				autoplay: true,
				controls: false,
				nav: true,
				autoplayButtonOutput: false
			});
		}


		if ( testimonialCenter.length> 0 ) {
			var testimonialSlider = tns({
				container: '#testimonial-center',
				items: 1,
				mode: 'carousel',
				slideBy: 'page',
				nav: true,
				controls: true,
				autoplay: true,
				autoplayButtonOutput: false,
				controls: true,
				gutter: 50,
				slideBy: 1,
				edgePadding: 0,
				center: true,
				controlsContainer: '#testimonial-nav',
				autoplayHoverPause: true,
				loop: true,
				swipeAngle: false,
				speed: 700,

				responsive: {
					350: {
						gutter: 10,
						edgePadding: 0,
						items: 1,
					},
					500: {
						gutter: 20,
						edgePadding: 0,
						items: 1,
					},
					700: {
						gutter: 50,
						edgePadding: 20,
						items: 2,
					},
					1000: {
						gutter: 50,
						edgePadding: 50,
						items: 2,
					}
				}

			});
		}

	}

	
	tinyslier();

	
	var lightboxVideo = GLightbox({
		selector: '.glightbox'
	});

})()

$(document).ready(function(){   
	window.setTimeout('fadeout();', 200);
	
});
function fadeout(){
	$('#preloader').delay(200).fadeOut('slow', function() {
	   $('.notLoaded').removeClass('notLoaded');
	});
}

// team slider
$('.team-navi').slick({
	dots: false,
	infinite: true,
	speed: 1000,
	centerMode: true,
	autoplay: true,
	autoplaySpeed: 3000,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
    asNavFor: '.team-dot',
	prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'icon-chevron-left\'></i></button>',
	nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'icon-chevron-right\'></i></button>',
	responsive: [{
		breakpoint: 1024,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  },
	  {
		breakpoint: 991,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  },
	  {
		breakpoint: 767,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	]
  });

  $('.team-dot').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.team-navi',
	dots: false,
	centerMode: true,
	focusOnSelect: true,
	prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'icon-chevron-left\'></i></button>',
	nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'icon-chevron-right\'></i></button>'
  });

  $.js = function (el) {
    return $('[data-js=' + el + ']')
};

  function carousel() {
	$.js('timeline-carousel').slick({
	  infinite: false,
	  arrows: true,
	   arrows: true,
	  prevArrow: '<div class="slick-prev"> <div class="btn mr-3 btn-warning d-flex justify-content-center align-items-center"> <div>Previous</div><svg class="ml-1" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"> <path d="M10.1,19.1l1.5-1.5L7,13h14.1v-2H7l4.6-4.6l-1.5-1.5L3,12L10.1,19.1z"/> </svg></div></div>',
	  nextArrow: '<div class="slick-next"> <div class="btn btn-warning d-flex justify-content-center align-items-center"> <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M 14 4.9296875 L 12.5 6.4296875 L 17.070312 11 L 3 11 L 3 13 L 17.070312 13 L 12.5 17.570312 L 14 19.070312 L 21.070312 12 L 14 4.9296875 z"/> </svg> <div>Next</div></div></div>',
	  dots: true,
	  autoplay: false,
	  speed: 1100,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  responsive: [
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}]
	});
  }
  
  carousel();
  
/*------------------
		Navigation
	--------------------*/
	$(".menu-switch").on('click', function () {
		$('.side-menu-wrapper').addClass('active');
		$('.menu-wrapper').addClass('hide-left');
	});

	$(".menu-close").on('click', function () {
		$('.side-menu-wrapper').removeClass('active');
		$('.menu-wrapper').removeClass('hide-left');
	});

  
// external js: isotope.pkgd.js
// https://isotope.metafizzy.co/

// init Isotope
var iso = new Isotope( '.portfolio-container', {
	itemSelector: '.portfolio-item',
	layoutMode: 'fitRows'
  });
  
  // filter functions
  var filterFns = {
	// show if name ends with -ium
	ium: function( itemElem ) {
	  var name = itemElem.querySelector('.name').textContent;
	  return name.match( /ium$/ );
	}
  };
  
  // bind filter button click
  var filtersElem = document.querySelector('.filters-button-group');
  filtersElem.addEventListener( 'click', function( event ) {
	// only work with buttons
	if ( !matchesSelector( event.target, 'button' ) ) {
	  return;
	}
	var filterValue = event.target.getAttribute('data-filter');
	// use matching filter function
	filterValue = filterFns[ filterValue ] || filterValue;
	iso.arrange({ filter: filterValue });
  });
  
  // change is-checked class on buttons
  var buttonGroups = document.querySelectorAll('.button-group');
  for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
	var buttonGroup = buttonGroups[i];
	radioButtonGroup( buttonGroup );
  }
  function radioButtonGroup( buttonGroup ) {
	buttonGroup.addEventListener( 'click', function( event ) {
	  // only work with buttons
	  if ( !matchesSelector( event.target, 'button' ) ) {
		return;
	  }
	  buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
	  event.target.classList.add('is-checked');
	});
  }
  
  

  
   

