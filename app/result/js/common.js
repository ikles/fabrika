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


  $(".top-mnu, .subnav__list, .sub-subnav__list").click(function (e) {
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

$('.rating__star').click(function () {
  let starValue = $(this).attr('data-star-value');
  $(this).parent().attr('data-result-value', starValue);
});


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

popup('.open__modal-1', '.modal-overlay_1', '.modal-close_1');
popup('.open__modal-2', '.modal-overlay_2', '.modal-close_2');


$('.form-area__action').click(function () {
  $('.form-area__input').val('');
  if ($(this).hasClass('form-area__action--1')) {
    $('.form-area__plan').removeClass('active');
    $('.form-area__plan--1').addClass('active');
  }
  if ($(this).hasClass('form-area__action--2')) {
    $('.form-area__plan').removeClass('active');
    $('.form-area__plan--2').addClass('active');
  }
  if ($(this).hasClass('form-area__action--3')) {
    $('.form-area__plan').removeClass('active');
    $('.form-area__plan--3').addClass('active');
  }
  if ($(this).hasClass('form-area__action--4')) {
    $('.form-area__plan').removeClass('active');
    $('.form-area__plan--4').addClass('active');
  }
});


function mobileMenu() {
  $('.nav__item--has-subnav').click(function () {
    $(this).find('.subnav__list').slideToggle();
  });
  $('.subnav__item--active').click(function () {
    $(this).toggleClass('active');
    $(this).find('.sub-subnav__list').slideToggle();    
  });
  $('.nav__link--has-arrow, .subnav__link--has-arrow').click(function (e) {
    e.preventDefault();
  });
}



if( $(window).width() < 992 ) {
  mobileMenu();
}




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


function tabs(element) {    
  $(element).find('.tabs__list-item').click(function () {
    $(element).find('.tabs__list-item').removeClass('active');
    $(this).addClass('active');    
    let num = $(this).index();
    $(element).find('.tabs__content-list-item').removeClass('active');
    $(element).find('.tabs__content-list-item').eq(num).addClass('active');    
  });  
}

tabs('.catalog__actions-btns');

$('.catalog__reset-btn').click(function () {
  $('.catalog__filter-item').removeClass('active');
  $('.catalog__actions-btn').removeClass('active');    
});


/*    .catalog__actions-btns {}
    .tabs__list {}
    .tabs__list-item {}
    .tabs__link {}
    .tabs__content-list {}
    .tabs__content-list-item {}*/

    $('.sproduct-color-lbls-2 .sproduct-color-lbl').click(function () {  
      let num = $(this).index();
      $('.sproduct-color-info li').removeClass('active');
      $('.sproduct-color-info li').eq(num).addClass('active');
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

