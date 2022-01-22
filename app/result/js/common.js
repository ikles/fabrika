jQuery(document).ready(function( $ ) {

  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".top-mnu").slideToggle();
    return false;
  });

  $('body').click(function () {
    if( $(".toggle-mnu").hasClass("on") ){
      $(".toggle-mnu").removeClass("on");
      $(".top-mnu").fadeOut();
    }
  });


  $(".top-mnu").click(function (e) {
    e.stopPropagation();
  });


  /************************************/

/*$('.wrapper').prepend('<span class="eye-3"></span>');
let pg = parseInt(document.location.pathname.match(/\d+/))
$('body').addClass('active').css('background-image', "url('../img/"+pg+".jpg')");
$('body:not(.active)').css('background-image', "unset");

$('.eye-3').click(function (e) {
  e.preventDefault();  
  $('body').toggleClass('active');
  let pg = parseInt(document.location.pathname.match(/\d+/));
  $('body.active').css('background-image', "url('../img/"+pg+".jpg')");
  $('body:not(.active)').css('background-image', "unset");

});
*/
/************************************/



function popup(openLink, windowEl, closeEl) {  
  $(openLink).click(function(e) {
    e.preventDefault();
    $(windowEl).fadeIn();
    $('body').addClass('ohi');
  });
  $(closeEl).click(function(e) {
    e.preventDefault();
    $(windowEl).fadeOut();
    $('body').removeClass('ohi');
  });
  $('.modal-overlay').click(function () {
    $(this).fadeOut();
    $('body').removeClass('ohi');
  });
  $('.modal-form__block').click(function (e) {
    e.stopPropagation();  
  });
  
}

popup('.link2', '.modal-overlay_2', '.modal-close_2');
popup('.link', '.modal-overlay_1', '.modal-close_1');


$('a[href*=\\#]:not([href=\\#])').click(function () {
  elementClick = $(this).attr("href");
  destination = $(elementClick).offset().top;
  $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 85}, 1100);
  return false;
});


$(window).scroll(function(){
  var wt = $(window).scrollTop();  
  var wh = $(window).height();    
  if (wt > 600) {
    $('.serv-arr-up').show(400);
  }
  else {
   $('.serv-arr-up').hide();
 }
});

if($('select').length) {
  $('select').select2({
    minimumResultsForSearch: -1
  });
}



$('.header__slider').slick({            
  infinite: true,
  centerMode: false,
  slidesToShow: 1,
  speed: 600,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 4000,
  cssEase: 'ease-out',
  dots: false,
  variableWidth: false,   
});

let currentSlide = $('.header__slider').slick('slickCurrentSlide') + 1;
let slideCount = $(".header__slider").slick("getSlick").slideCount;
let sliderCurrent = $('.slider__current').find('span');
let sliderCount = $('.slider__count').find('span');



sliderCount.text(slideCount);

$('.header__slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
  sliderCurrent.html(currentSlide + 1);
});


$('.reviews__slider').slick({            
  infinite: true,
  centerMode: false,
  slidesToShow: 3,
  speed: 600,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 4000,
  cssEase: 'ease-out',
  dots: false,
  variableWidth: false,   
});


$('.answers__header').click(function () {
  $(this).toggleClass('active-header');
  $(this).next().slideToggle().toggleClass('open-content');
});

}); //ready

