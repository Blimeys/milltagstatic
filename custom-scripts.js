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
$(".single-item").slick({
	dots: true,
  speed: 300,
  // customPaging : function(slider, i) {
  //         return '<a href="#"><img src="slide-dot.png" /><img src="slide-dot-active.png" /></a>';
  //     },
  arrows: true
});
}



$(document).on('ready', function () {
    initSlider();
    sliderArrows();
    console.log("slider loaded");
});
