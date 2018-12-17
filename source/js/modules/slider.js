$(function() {
  $('.promo__slides').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    navContainerClass: ['slider-nav', 'slider-nav--promo'],
    navClass: ['promo__btn promo__btn--prev', 'promo__btn promo__btn--next'],
    responsive: {
      1140: {
        dots: true,
        dotsClass: ['slider__dots'],
        dotClass: ['slider__dot slider__dot--promo']
      }
    }
  });

  $('.novelties-of-week__slides').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    navContainerClass: ['slider-nav', 'slider-nav--novelties-of-week'],
    navClass: ['novelties-of-week__btn novelties-of-week__btn--prev', 'novelties-of-week__btn novelties-of-week__btn--next']
  });

  $('.discount__slides').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    navContainerClass: ['slider-nav', 'slider-nav--discount'],
    navClass: ['discount__btn discount__btn--prev', 'discount__btn discount__btn--next']
  });

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
    navRewind: false,
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

