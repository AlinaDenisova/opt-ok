'use strict';

(function () {
  if (promo && discount && novelties) {
    var promo = document.querySelector('.promo');
    var promoSlides = promo.querySelectorAll('.promo__slide');
    var activePromoSlideIndex = [].indexOf.call(promoSlides, promo.querySelector('.promo__slide--active'));
    var novelties = document.querySelector('.novelties-of-week');
    var noveltiesSlides = novelties.querySelectorAll('.novelties-of-week__slide');
    var activeNoveltiesSlideIndex = [].indexOf.call(noveltiesSlides, novelties.querySelector('.novelties-of-week__slide--active'));
    var discount = document.querySelector('.discount');
    var discountSlides = discount.querySelectorAll('.discount__slide');
    var activeDiscountSlideIndex = [].indexOf.call(discountSlides, discount.querySelector('.discount__slide--active'));
    var dots = null;
    var dotsContainer = promo.querySelector('.slider__dots');
    var btnPromoPrev = promo.querySelector('.promo__btn--prev');
    var btnPromoNext = promo.querySelector('.promo__btn--next');
    var btnNoveltiesPrev = novelties.querySelector('.novelties-of-week__btn--prev');
    var btnNoveltiesNext = novelties.querySelector('.novelties-of-week__btn--next');
    var btnDiscountPrev = discount.querySelector('.discount__btn--prev');
    var btnDiscountNext = discount.querySelector('.discount__btn--next');
    var PREV = 'prev';
    var NEXT = 'next';

    var renderDots = function () {
      var dot = null;
      for (var i = 0; i < promoSlides.length; i++) {
        dot = document.createElement('li');
        dot.classList.add('slider__dot');
        dotsContainer.appendChild(dot);
      }

      dots = dotsContainer.querySelectorAll('.slider__dot');
      dots[activePromoSlideIndex].classList.add('slider__dot--active');
    };

    var activatePromoSlide = function () {
      promoSlides[activePromoSlideIndex].classList.add('promo__slide--active');
      dots[activePromoSlideIndex].classList.add('slider__dot--active');
    };

    var deactivatePromoSlide = function () {
      promoSlides[activePromoSlideIndex].classList.remove('promo__slide--active');
      dots[activePromoSlideIndex].classList.remove('slider__dot--active');
    };

    var activateNoveltiesSlide = function () {
      noveltiesSlides[activeNoveltiesSlideIndex].classList.add('novelties-of-week__slide--active');
    };

    var deactivateNoveltiesSlide = function () {
      noveltiesSlides[activeNoveltiesSlideIndex].classList.remove('novelties-of-week__slide--active');
    };

    var activateDiscountSlide = function () {
      discountSlides[activeDiscountSlideIndex].classList.add('discount__slide--active');
    };

    var deactivateDiscountSlide = function () {
      discountSlides[activeDiscountSlideIndex].classList.remove('discount__slide--active');
    };


    var nextPromoSlide = function (direction) {
      deactivatePromoSlide();
      switch (direction) {
        case PREV:
          if (--activePromoSlideIndex < 0) {
            activePromoSlideIndex = promoSlides.length - 1;
          }
          break;
        case NEXT:
          if (++activePromoSlideIndex > promoSlides.length - 1) {
            activePromoSlideIndex = 0;
          }
          break;
      }
      activatePromoSlide();
    };

    var nextNoveltiesSlide = function (direction) {
      deactivateNoveltiesSlide();
      switch (direction) {
        case PREV:
          if (--activeNoveltiesSlideIndex < 0) {
            activeNoveltiesSlideIndex = noveltiesSlides.length - 1;
          }
          break;
        case NEXT:
          if (++activeNoveltiesSlideIndex > noveltiesSlides.length - 1) {
            activeNoveltiesSlideIndex = 0;
          }
          break;
      }
      activateNoveltiesSlide();
    };

    var nextDiscountSlide = function (direction) {
      deactivateDiscountSlide();
      switch (direction) {
        case PREV:
          if (--activeDiscountSlideIndex < 0) {
            activeDiscountSlideIndex = discountSlides.length - 1;
          }
          break;
        case NEXT:
          if (++activeDiscountSlideIndex > discountSlides.length - 1) {
            activeDiscountSlideIndex = 0;
          }
          break;
      }
      activateDiscountSlide();
    };

    var onDotCLick = function (evt) {
      var target = evt.target;

      while (target !== dotsContainer) {
        if (target.classList.contains('slider__dot')) {
          deactivatePromoSlide();
          activePromoSlideIndex = [].indexOf.call(dots, target);
          activatePromoSlide();
          break;
        }
        target = target.parentNode;
      }
    };

    var onClickPromoPrev = function () {
      nextPromoSlide(PREV);
    };

    var onClickPromoNext = function () {
      nextPromoSlide(NEXT);
    };

    var onClickNoveltiesPrev = function () {
      nextNoveltiesSlide(PREV);
    };

    var onClickNoveltiesNext = function () {
      nextNoveltiesSlide(NEXT);
    };

    var onClickDiscountPrev = function () {
      nextDiscountSlide(PREV);
    };

    var onClickDiscountNext = function () {
      nextDiscountSlide(NEXT);
    };

    renderDots();
    btnPromoPrev.addEventListener('click', onClickPromoPrev);
    dotsContainer.addEventListener('click', onDotCLick);
    btnPromoNext.addEventListener('click', onClickPromoNext);
    btnNoveltiesPrev.addEventListener('click', onClickNoveltiesPrev);
    btnNoveltiesNext.addEventListener('click', onClickNoveltiesNext);
    btnDiscountPrev.addEventListener('click', onClickDiscountPrev);
    btnDiscountNext.addEventListener('click', onClickDiscountNext);
  }
})();

