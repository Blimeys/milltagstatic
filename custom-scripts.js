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
  // autoplay: true,
  // autoplaySpeed: 4000,

  // customPaging : function(slider, i) {
  //         return '<a href="#"><img class="doted-circle" src="cercle.svg" /><img class="doted-circle"  src="rond.svg" /></a>';
  //     },
  customPaging : function(slider, i) {
    return '<img class="slider-buttons-dots" src="rond.svg ">';

},
  arrows: true

});
  console.log("slider loaded");

}



$(document).on('ready', function () {
    initSlider();
    console.log("slider loaded");
});
