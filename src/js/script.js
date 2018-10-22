$(document).ready(function(){

	// Маска для телефона
	$('input[name=user_phone]').mask("+7 (999) 999-99-99");

	// Модальные окна
		$('.popup-close,.popup-button-close').on("click", function(){
			$(".overlay-wrap").hide();
			$(".thanks-wrap").hide();
			$(".sertificate-wrap").hide();
		});
		$('.popup-show').on("click", function(){
			$(".overlay-wrap").show();
		});
		$('.reasons-sertificate__img').on("click", function(){
			$(".sertificate-wrap").show();
		});
		
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