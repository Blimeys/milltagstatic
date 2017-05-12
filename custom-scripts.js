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
  autoplay: true,
  autoplaySpeed: 4000,
  // customPaging : function(slider, i) {
  //         return '<a href="#"><img src="slide-dot.png" /><img src="slide-dot-active.png" /></a>';
  //     },
  arrows: true
});
}



$(document).on('ready', function () {
    initSlider();
    console.log("slider loaded");
});
