$(function() {
  $('.brands__slides').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    navContainerClass: ['slider-nav', 'slider-nav--brands'],
    navClass: ['slider__btn slider__btn--prev', 'slider__btn slider__btn--next'],
    responsive: {
      768: {
        items: 3
      },
      1140: {
        items: 6
      }
    }
  });

  $('.sections__slides').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    navContainerClass: ['slider-nav', 'slider-nav--sections'],
    navClass: ['slider__btn slider__btn--prev', 'slider__btn slider__btn--next'],
    responsive: {
      768: {
        items: 3
      },
      1140: {
        items: 4
      }
    }
  });
});

