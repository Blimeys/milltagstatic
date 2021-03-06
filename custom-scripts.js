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
}
function menuBreadcrumbs() {}
function paneSetup() {
	$('#bibs').removeClass('in active');
	$('#outerwear').removeClass('in active');
	$('#others').removeClass('in active');
}
$(function SliderImageResize() {
	if ($(window).width() >= 0 && $(window).width() <= screenSizesSlider.small) {
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
		$('.shopPop').removeClass('hidden');
	});
	$('#shopOutBox').click(function() {
		$('.shopPop').removeClass('hidden');
	});
});
$(function shopPopUpMini() {
	$('#shopOutMini').click(function() {
		$('.shopPop').removeClass('hidden');
	});
});
$(function closeShope() {
	$('#closeShop').click(function() {
		$('.shopPop').addClass('hidden');
	});
});
$(function hideItemsLinks() {
	$('#bibs-pane').click(function() {
		$('.jersey-link').addClass('hidden');
		$('.bibs-link').removeClass('hidden');
		$('.outerwear-link').addClass('hidden');
		$('others-link').addClass('hidden');
	});
	$('#jersey-pane').click(function() {
		$('.jersey-link').removeClass('hidden');
		$('.bibs-link').addClass('hidden');
		$('.outerwear-link').addClass('hidden');
		$('others-link').addClass('hidden');
	});
	$('#outerwear-pane').click(function() {
		$('.jersey-link').addClass('hidden');
		$('.bibs-link').addClass('hidden');
		$('.outerwear-link').removeClass('hidden');
		$('others-link').addClass('hidden');
	});
	$('#others-pane').click(function() {
		$('.jersey-link').addClass('hidden');
		$('.bibs-link').addClass('hidden');
		$('.outerwear-link').addClass('hidden');
		$('others-link').removeClass('hidden');
	});
});
$(function joinedMailer() {
	$('#mc-embedded-subscribe').click(function() {
		$('#mailerform').addClass('behind');
		$('#thank-you').removeClass('hidden');
	});
});
$(document).on('ready', function() {
	hideItemsLinks();
	SliderImageResize();
	CustomPanelToggleOn();
	OpenCloseArrow();
	subMenuControls();
	shopPopUp();
	closeShope();
	shopPopUpMini();
	joinedMailer();
});
$(window).on('resize', function() {
	if ($(window).width() >= 0 && $(window).width() <= screenSizesSlider.small) {
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
