$(document).ready(function(){

    //slick-slider
    $('.slider').slick({
      autoplay: true,
      dots: true,
      speed: 300
    });

  //burger-меню
  $(".header-nav-burger-menu").click(function(){
    $(".header-nav-burger-menu__ul").toggle();
  });
    
  // первый блок товаров
    $("#product-title-animate1").mouseenter(function(){
        $("#product-image-hover1").css('opacity', '.6');
    });
    $("#product-title-animate1").mouseleave(function(){
        $("#product-image-hover1").css('opacity', '.6');
    });
    $("#product-paragraph-animate1").mouseenter(function(){
        $("#product-image-hover1").css('opacity', '.6');
    });
    $("#product-paragraph-animate1").mouseleave(function(){
        $("#product-image-hover1").css('opacity', '.6');
    });
    $("#product-image-hover1").mouseleave(function(){
        $("#product-image-hover1").css('opacity', '1');
    });
    $("#product-image-hover1").mouseenter(function(){
        $("#product-image-hover1").css('opacity', '.6');
    });
    $("#product-title-animate1").mouseenter(function(){
        $(this).animate({top: '-10.5vw'});
        $("#product-paragraph-animate1").fadeIn('slow');
    });
    $("#product-paragraph-animate1").click(function(){
       $("#product-title-animate1").animate({top: '0px'});
       $(this).fadeOut(200);
    });
    // второй блок товаров
    $("#product-title-animate2").mouseenter(function(){
        $("#product-image-hover2").css('opacity', '.6');
    });
    $("#product-title-animate2").mouseleave(function(){
        $("#product-image-hover2").css('opacity', '.6');
    });
    $("#product-paragraph-animate2").mouseenter(function(){
        $("#product-image-hover2").css('opacity', '.6');
    });
    $("#product-paragraph-animate2").mouseleave(function(){
        $("#product-image-hover2").css('opacity', '.6');
    });
    $("#product-image-hover2").mouseleave(function(){
        $("#product-image-hover2").css('opacity', '1');
    });
    $("#product-image-hover2").mouseenter(function(){
        $("#product-image-hover2").css('opacity', '.6');
    });
    $("#product-title-animate2").mouseenter(function(){
      $(this).animate({top: '-10.5vw'});
      $("#product-paragraph-animate2").fadeIn('slow');
    });
    $("#product-paragraph-animate2").click(function(){
      $("#product-title-animate2").animate({top: '0px'});
      $(this).fadeOut(200);
    });
     // третий блок товаров
     $("#product-title-animate3").mouseenter(function(){
        $("#product-image-hover3").css('opacity', '.6');
    });
    $("#product-title-animate3").mouseleave(function(){
        $("#product-image-hover3").css('opacity', '.6');
    });
    $("#product-paragraph-animate3").mouseenter(function(){
        $("#product-image-hover3").css('opacity', '.6');
    });
    $("#product-paragraph-animate3").mouseleave(function(){
        $("#product-image-hover3").css('opacity', '.6');
    });
    $("#product-image-hover3").mouseleave(function(){
        $("#product-image-hover3").css('opacity', '1');
    });
    $("#product-image-hover3").mouseenter(function(){
        $("#product-image-hover3").css('opacity', '.6');
    });
    $("#product-title-animate3").mouseenter(function(){
      $(this).animate({top: '-10.5vw'});
      $("#product-paragraph-animate3").fadeIn('slow');
    });
    $("#product-paragraph-animate3").click(function(){
      $("#product-title-animate3").animate({top: '0px'});
      $(this).fadeOut(200);
    });
    // четвертый блок товаров
    $("#product-title-animate4").mouseenter(function(){
        $("#product-image-hover4").css('opacity', '.6');
    });
    $("#product-title-animate4").mouseleave(function(){
        $("#product-image-hover4").css('opacity', '.6');
    });
    $("#product-paragraph-animate4").mouseenter(function(){
        $("#product-image-hover4").css('opacity', '.6');
    });
    $("#product-paragraph-animate4").mouseleave(function(){
        $("#product-image-hover4").css('opacity', '.6');
    });
    $("#product-image-hover4").mouseleave(function(){
        $("#product-image-hover4").css('opacity', '1');
    });
    $("#product-image-hover4").mouseenter(function(){
        $("#product-image-hover4").css('opacity', '.6');
    });
    $("#product-title-animate4").mouseenter(function(){
      $(this).animate({top: '-10.5vw'});
      $("#product-paragraph-animate4").fadeIn('slow');
    });
    $("#product-paragraph-animate4").click(function(){
      $("#product-title-animate4").animate({top: '0px'});
      $(this).fadeOut(200);
    });
    // пятый блок товаров
    $("#product-title-animate5").mouseenter(function(){
        $("#product-image-hover5").css('opacity', '.6');
    });
    $("#product-title-animate5").mouseleave(function(){
        $("#product-image-hover5").css('opacity', '.6');
    });
    $("#product-paragraph-animate5").mouseenter(function(){
        $("#product-image-hover5").css('opacity', '.6');
    });
    $("#product-paragraph-animate5").mouseleave(function(){
        $("#product-image-hover5").css('opacity', '.6');
    });
    $("#product-image-hover5").mouseleave(function(){
        $("#product-image-hover5").css('opacity', '1');
    });
    $("#product-image-hover5").mouseenter(function(){
        $("#product-image-hover5").css('opacity', '.6');
    });
    $("#product-title-animate5").mouseenter(function(){
      $(this).animate({top: '-10.5vw'});
      $("#product-paragraph-animate5").fadeIn('slow');
    });
    $("#product-paragraph-animate5").click(function(){
      $("#product-title-animate5").animate({top: '0px'});
      $(this).fadeOut(200);
    });
    // шестой блок товаров
    $("#product-title-animate6").mouseenter(function(){
        $("#product-image-hover6").css('opacity', '.6');
    });
    $("#product-title-animate6").mouseleave(function(){
        $("#product-image-hover6").css('opacity', '.6');
    });
    $("#product-paragraph-animate6").mouseenter(function(){
        $("#product-image-hover6").css('opacity', '.6');
    });
    $("#product-paragraph-animate6").mouseleave(function(){
        $("#product-image-hover6").css('opacity', '.6');
    });
    $("#product-image-hover6").mouseleave(function(){
        $("#product-image-hover6").css('opacity', '1');
    });
    $("#product-image-hover6").mouseenter(function(){
        $("#product-image-hover6").css('opacity', '.6');
    });
     $("#product-title-animate6").mouseenter(function(){
      $(this).animate({top: '-10.5vw'});
      $("#product-paragraph-animate6").fadeIn('slow');
    });
    $("#product-paragraph-animate6").click(function(){
      $("#product-title-animate6").animate({top: '0px'});
      $(this).fadeOut(200);
    });

  });