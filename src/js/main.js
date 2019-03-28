$(document).ready(function() {
  //slick-slider
  $(".slider").slick({
    autoplay: true,
    dots: true,
    speed: 300
  });

  //burger-меню
  $(".burger-menu").click(function() {
    $(".burger-menu__list").toggle();
  });
});
