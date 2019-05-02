'use strict';

(function($){
	$(document).ready(function() {
		// Code
		var plus = $('<div class="plus"></div>'),
			triang = $('<div class="triang"></div>');

		$('.slider-wrapper').append(plus, triang)


		$('.slider').slick({
			autoplay: true,
  			autoplaySpeed: 3000,
			variableWidth: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			adaptiveHeight: false,
			responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
			]
		});


	});
})(jQuery);
