screenSizesSlider = {
  small: 400,
  medium: 768,
  large: 1024
};
sliderFilePath = {
  small: "home-page/slider/400x400/",
  medium: "home-page/slider/800x600/",
  large: "home-page/slider/2560x1142/"
};

function changeMenuIcon() {
  if ($('#toggleImg').attr("src") == "menu.svg")
  {
    $('#toggleImg').attr("src","cross.svg");
  }
  else {
    $('#toggleImg').attr("src","menu.svg");
  }
}
function initSlider(){
$(".slider-items").slick({
	dots: true,
  speed: 300,
  responsive: [{
       breakpoint: 1025,
       settings: {
           dots: false,
           arrows: false,
       }
   }],
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: 'cubic-bezier(0.9,0.1,0.9,1)',
  speed: 1000,
  // customPaging : function(slider, i) {
  //         return '<a href="#"><img class="doted-circle" src="cercle.svg" /><img class="doted-circle"  src="rond.svg" /></a>';
  //     },
  customPaging : function(slider, i) {

},
  arrows: true
});

}
function getUrl(){
  console.log(window.location.pathname);
};

$(function SliderImageResize(){
        if($(window).width() >= 0 && $(window).width() <= screenSizesSlider.small){
          console.log ($(window).width());
          console.log(sliderFilePath.small + "Slider_01_400x400.jpg");
           $(".carousel-one").attr("src", sliderFilePath.small + "Slider_01_400x400.jpg");
           $(".carousel-two").attr("src", sliderFilePath.small + "Slider_02_400x400.jpg");
           $(".carousel-three").attr("src", sliderFilePath.small + "Slider_03_400x400.jpg");
        }
        else if($(window).width() > 400 && $(window).width() <= screenSizesSlider.medium){
          console.log ($(window).width());

          console.log(sliderFilePath.medium + "Slider_01_800x600.jpg");
           $(".carousel-one").attr("src", sliderFilePath.medium + "Slider_01_800x600.jpg");
           $(".carousel-two").attr("src", sliderFilePath.medium + "Slider_02_800x600.jpg");
           $(".carousel-three").attr("src", sliderFilePath.medium + "Slider_03_800x600.jpg");
                 }
        else{
          console.log ($(window).width());
          console.log(sliderFilePath.large + "Slider_01_2560x1142.jpg");
           $(".carousel-one").attr("src", sliderFilePath.large + "Slider_01_2560x1142.jpg");
           $(".carousel-two").attr("src", sliderFilePath.large + "Slider_02_2560x1142.jpg");
           $(".carousel-three").attr("src", sliderFilePath.large + "Slider_03_2560x1142.jpg");
        }
    });



$(document).on('ready', function () {
    initSlider();
    SliderImageResize();
});
$(window).on('resize', function(){
  if($(window).width() >= 0 && $(window).width() <= screenSizesSlider.small){
    console.log ($(window).width());
    console.log(sliderFilePath.small + "Slider_01_400x400.jpg");
     $(".carousel-one").attr("src", sliderFilePath.small + "Slider_01_400x400.jpg");
     $(".carousel-two").attr("src", sliderFilePath.small + "Slider_02_400x400.jpg");
     $(".carousel-three").attr("src", sliderFilePath.small + "Slider_03_400x400.jpg");
  }
  else if($(window).width() > 400 && $(window).width() <= screenSizesSlider.medium){
    console.log ($(window).width());
    console.log(sliderFilePath.medium + "Slider_01_800x600.jpg");
     $(".carousel-one").attr("src", sliderFilePath.medium + "Slider_01_800x600.jpg");
     $(".carousel-two").attr("src", sliderFilePath.medium + "Slider_02_800x600.jpg");
     $(".carousel-three").attr("src", sliderFilePath.medium + "Slider_03_800x600.jpg");
  }
  else{
    console.log ($(window).width());
    console.log(sliderFilePath.large + "Slider_01_2560x1142.jpg");
     $(".carousel-one").attr("src", sliderFilePath.large + "Slider_01_2560x1142.jpg");
     $(".carousel-two").attr("src", sliderFilePath.large + "Slider_02_2560x1142.jpg");
     $(".carousel-three").attr("src", sliderFilePath.large + "Slider_03_2560x1142.jpg");
  }

});
