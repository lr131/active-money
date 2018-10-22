$(document).ready(function(){

	// Слайдер
  $('.feedback-slider__top').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  centerMode: true,
		  asNavFor: '.feedback-slider__bottom',
		  arrows: true,
		  prevArrow: '<div class="slider-arrow slider-arrow__left"></div>',
		  nextArrow: '<div class="slider-arrow slider-arrow__right"></div>',
		  fade: true
		});
		$('.feedback-slider__bottom').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  centerMode: true,
		  arrows: false,
		  fade: true,
		  asNavFor: '.feedback-slider__top'
		});
});