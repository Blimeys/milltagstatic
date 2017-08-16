screenSizesSlider = {
	small: 400,
	medium: 768,
	large: 1024
};
sliderFilePath = {
	small: 'src/img/home-page/slider/400x400/',
	medium: 'src/img/home-page/slider/800x600/',
	large: 'src/img/home-page/slider/2560x1142/'
};

function changeMenuIcon() {
	if ($('#toggleImg').attr('src') == 'src/img/menu/menu.svg') {
		$('#toggleImg').attr('src', 'src/img/menu/cross.svg');
	} else {
		$('#toggleImg').attr('src', 'src/img/menu/menu.svg');
	}
}

function initSlider() {
	$('.slider-items').slick({
		dots: true,
		speed: 300,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					dots: false,
					arrows: false
				}
			}
		],
		autoplay: true,
		autoplaySpeed: 3000,
		cssEase: 'cubic-bezier(0.9,0.1,0.9,1)',
		speed: 1000,
		customPaging: function(slider, i) {},
		arrows: true
	});
}

function initCustomProductSliderBibs() {
	$('.slider-bibs').slick({
		dots: false,
		slidesToShow: 3,
		speed: 300,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 1,
					dots: false,
					arrows: true
				}
			}
		],
		speed: 1000,
		customPaging: function(slider, i) {},
		arrows: true
	});
	console.log('product slider loaded');
}
function initCustomProductSliderJerseys() {
	$('.slider-jerseys').slick({
		dots: false,
		slidesToShow: 3,
		speed: 300,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 1,
					dots: false,
					arrows: false
				}
			}
		],
		speed: 1000,
		customPaging: function(slider, i) {},
		arrows: true
	});
	console.log('product slider loaded');
}
function initCustomProductSliderOuterwear() {
	$('.slider-outerwear').slick({
		dots: false,
		slidesToShow: 3,
		speed: 300,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 1,
					dots: false,
					arrows: false
				}
			}
		],
		speed: 1000,
		customPaging: function(slider, i) {},
		arrows: true
	});
	console.log('product slider loaded');
}
function initCustomProductSliderOthers() {
	$('.slider-others').slick({
		dots: false,
		slidesToShow: 3,
		speed: 300,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 1,
					dots: false,
					arrows: false
				}
			}
		],
		speed: 1000,
		customPaging: function(slider, i) {},
		arrows: true
	});
	console.log('product slider loaded');
}
function menuBreadcrumbs() {
	console.log(window.location.pathname);
}
function paneSetup() {
	$('#bibs').removeClass('in active');
	$('#outerwear').removeClass('in active');
	$('#others').removeClass('in active');
}
$(function SliderImageResize() {
	if ($(window).width() >= 0 && $(window).width() <= screenSizesSlider.small) {
		console.log($(window).width());
		console.log(sliderFilePath.small + 'Slider_01_400x400.jpg');
		$('.carousel-one').attr(
			'src',
			sliderFilePath.small + 'Slider_01_400x400.jpg'
		);
		$('.carousel-two').attr(
			'src',
			sliderFilePath.small + 'Slider_02_400x400.jpg'
		);
		$('.carousel-three').attr(
			'src',
			sliderFilePath.small + 'Slider_03_400x400.jpg'
		);
	} else if (
		$(window).width() > 400 &&
		$(window).width() <= screenSizesSlider.medium
	) {
		console.log($(window).width());

		console.log(sliderFilePath.medium + 'Slider_01_800x600.jpg');
		$('.carousel-one').attr(
			'src',
			sliderFilePath.medium + 'Slider_01_800x600.jpg'
		);
		$('.carousel-two').attr(
			'src',
			sliderFilePath.medium + 'Slider_02_800x600.jpg'
		);
		$('.carousel-three').attr(
			'src',
			sliderFilePath.medium + 'Slider_03_800x600.jpg'
		);
	} else {
		console.log($(window).width());
		console.log(sliderFilePath.large + 'Slider_01_2560x1142.jpg');
		$('.carousel-one').attr(
			'src',
			sliderFilePath.large + 'Slider_01_2560x1142.jpg'
		);
		$('.carousel-two').attr(
			'src',
			sliderFilePath.large + 'Slider_02_2560x1142.jpg'
		);
		$('.carousel-three').attr(
			'src',
			sliderFilePath.large + 'Slider_03_2560x1142.jpg'
		);
	}
});

$(function CustomPanelToggleOn() {
	$('.custom-panel-contact').click(function() {
		$(this).toggleClass('custom-contact-on');
	});
	$('.custom-panel-samples').click(function() {
		$(this).toggleClass('custom-samples-on');
	});
	$('.custom-panel-design').click(function() {
		$(this).toggleClass('custom-design-on');
	});
	$('.custom-panel-artwork').click(function() {
		$(this).toggleClass('custom-artwork-on');
	});
	$('.custom-panel-ordering').click(function() {
		$(this).toggleClass('custom-ordering-on');
	});
	$('.custom-panel-production').click(function() {
		$(this).toggleClass('custom-production-on');
	});
	$('.custom-panel-delivery').click(function() {
		$(this).toggleClass('custom-delivery-on');
	});
	$('.custom-panel-payment').click(function() {
		$(this).toggleClass('custom-payment-on');
	});
});

$(function OpenCloseArrow() {
	$('.open-close-arrow').click(function() {
		if ($(this).children('img').attr('src') === 'src/img/menu/Close-01.png') {
			$(this).children('img').attr('src', 'src/img/menu/Open-01.png');
			// $(this).children('img').attr('src') = 'src/img/menu/Open.svg'
		} else {
			$(this).children('img').attr('src', 'src/img/menu/Close-01.png');
		}
	});
});
$(function subMenuControls() {
	$('#menu').hover(
		function() {
			console.log('hover');
			$('.extra-menu').removeClass('hidden');
			$('.more-menu').removeClass('hidden');
		},
		function() {
			$('.extra-menu').addClass('hidden');
			$('.more-menu').addClass('hidden');
		}
	);
	$('.extra-menu').hover(
		function() {
			$(this).removeClass('hidden');
			$('.more-menu').removeClass('hidden');
		},
		function() {
			$(this).addClass('hidden');
			$('.more-menu').addClass('hidden');
		}
	);
});
$(function shopPopUp() {
	$('#shopOut').click(function() {
		console.log('shop click');
		$('.shopPop').removeClass('hidden');
	});
});
$(function shopPopUpMini() {
	$('#shopOutMini').click(function() {
		console.log('shop click');
		$('.shopPop').removeClass('hidden');
	});
});
$(function closeShope() {
	$('#closeShop').click(function() {
		$('.shopPop').addClass('hidden');
	});
});
$(document).on('ready', function() {
	SliderImageResize();
	CustomPanelToggleOn();
	OpenCloseArrow();
	subMenuControls();
	shopPopUp();
	closeShope();
	shopPopUpMini();
});
$(window).on('resize', function() {
	if ($(window).width() >= 0 && $(window).width() <= screenSizesSlider.small) {
		console.log($(window).width());
		console.log(sliderFilePath.small + 'Slider_01_400x400.jpg');
		$('.carousel-one').attr(
			'src',
			sliderFilePath.small + 'Slider_01_400x400.jpg'
		);
		$('.carousel-two').attr(
			'src',
			sliderFilePath.small + 'Slider_02_400x400.jpg'
		);
		$('.carousel-three').attr(
			'src',
			sliderFilePath.small + 'Slider_03_400x400.jpg'
		);
	} else if (
		$(window).width() > 400 &&
		$(window).width() <= screenSizesSlider.medium
	) {
		console.log($(window).width());
		console.log(sliderFilePath.medium + 'Slider_01_800x600.jpg');
		$('.carousel-one').attr(
			'src',
			sliderFilePath.medium + 'Slider_01_800x600.jpg'
		);
		$('.carousel-two').attr(
			'src',
			sliderFilePath.medium + 'Slider_02_800x600.jpg'
		);
		$('.carousel-three').attr(
			'src',
			sliderFilePath.medium + 'Slider_03_800x600.jpg'
		);
	} else {
		console.log($(window).width());
		console.log(sliderFilePath.large + 'Slider_01_2560x1142.jpg');
		$('.carousel-one').attr(
			'src',
			sliderFilePath.large + 'Slider_01_2560x1142.jpg'
		);
		$('.carousel-two').attr(
			'src',
			sliderFilePath.large + 'Slider_02_2560x1142.jpg'
		);
		$('.carousel-three').attr(
			'src',
			sliderFilePath.large + 'Slider_03_2560x1142.jpg'
		);
	}
});
