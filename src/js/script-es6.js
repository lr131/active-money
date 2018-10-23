'use strict';

$(document).ready(function () {

	// Адаптивность блока с видео
	var videoWidth = 555;
	var videoHeight = 364;

	window.matchMedia('(max-width: 1124px)').addListener(function (e) {
		if (e.matches) {
			var k = 0.85;
			var w = videoWidth * k;
			var h = videoHeight * k;
			$('#about-video').removeAttr('width');
			$('#about-video').removeAttr('height');
			$('#about-video').prop('width', w.toString());
			$('#about-video').prop('height', h.toString());
		}
	});
	window.matchMedia('(max-width: 991px)').addListener(function (e) {
		if (e.matches) {
			$('#about-video').removeAttr('width');
			$('#about-video').removeAttr('height');
			$('#about-video').prop('width', videoWidth.toString());
			$('#about-video').prop('height', videoHeight.toString());
		}
	});

	// Маска для телефона
	$('input[name=user_phone]').mask("+7 (999) 999-99-99");
	// Отправка формы
	$('.questions-form,.overlay-form,.header-form').submit(function (event) {
		event.preventDefault();
		console.log("$(this).serialize()");
		console.log($(this).serialize());
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function () {
			$(this).find("input").val("");
			$("form").trigger("reset");
			$(".overlay-wrap").hide();
			$(".thanks-wrap").show();
		}).fail(function () {
			alert("Что-то пошло не так! Пожалуйста, отправьте заявку позже");
		});
	});
	// Плавная прокрутка
	$("body").on('click', '[href*="#"]', function (e) {
		var fixed_offset = 100;
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
		e.preventDefault();
	});

	// Модальные окна
	$('.popup-close,.popup-button-close').on("click", function () {
		$(".overlay-wrap").hide();
		$(".thanks-wrap").hide();
		$(".sertificate-wrap").hide();
	});
	$('.popup-show').on("click", function () {
		$(".overlay-wrap").show();
	});
	$('.reasons-sertificate__img').on("click", function () {
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