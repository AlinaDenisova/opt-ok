$(function() {
$('.main-slider').slick({
     infinite: true,
     slidesToShow: 1,
     slidesToScroll: 1,
     initialSlide: 1,
     arrows: true,
     nextArrow: '<span class="slider__btn slider__btn--next" id="arrow-next"></span>',
     prevArrow: '<span class="slider__btn slider__btn--prev" id="arrow-prev"></span>',
     asNavFor: '.thumb-slider'
 });

$('.thumb-slider').slick({
     infinite: true,
     slidesToShow: 4,
     slidesToScroll: 1,
     arrows: false,
     focusOnSelect: true,
     asNavFor: '.main-slider',
     responsive: [
       {
           breakpoint: 768,
           settings: {
              swipe: true
           }
      }
     ]
 });

$("a[rel=group]").fancybox({
    'transitionIn': 'none',
    'transitionOut': 'none'
  });
});
