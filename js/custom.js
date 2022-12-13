(function ($) {

	'use strict'


	AOS.init({
		duration: 800,
		easing: 'slide',
		once: true
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
  
  

  
   

