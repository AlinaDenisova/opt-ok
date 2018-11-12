'use strict';

(function () {
  document.querySelector('.no-js').classList.remove('no-js');
})();

'use strict';

window.navigation = (function () {
  var MOBILE_WIDTH_MAX = 999;

  var phoneList = document.querySelector('.page-header__phones');
  var userList = document.querySelector('.page-header__user');
  var siteList = document.querySelector('.site-list');
  var phoneToggle = document.querySelector('.page-header__toggle--phone');
  var userToggle = document.querySelector('.page-header__toggle--user');
  var siteToggle = document.querySelector('.page-header__toggle--menu');

  var isMobileScreen = function () {
    return window.innerWidth <= MOBILE_WIDTH_MAX;
  };

  var isUserListActive = function () {
    return userList.classList.contains('page-header__user--active');
  };

  var isPhoneListActive = function () {
    return phoneList.classList.contains('page-header__phones--active');
  };

  var isSiteListActive = function () {
    return siteList.classList.contains('site-list--active');
  };

  var showSiteList = function () {
    siteList.classList.add('site-list--active');
    window.addEventListener('resize', resizeWindowHandler);
  };

  var hideSiteList = function () {
    siteList.classList.remove('site-list--active');
    window.removeEventListener('resize', resizeWindowHandler);
  };

  var showPhoneList = function () {
    phoneList.classList.add('page-header__phones--active');
    window.addEventListener('resize', resizeWindowHandler);
  };

  var hidePhoneList = function () {
    phoneList.classList.remove('page-header__phones--active');
    window.removeEventListener('resize', resizeWindowHandler);
  };

  var showUserList = function () {
    userList.classList.add('page-header__user--active');
    window.addEventListener('resize', resizeWindowHandler);
  };

  var hideUserList = function () {
    userList.classList.remove('page-header__user--active');
    window.removeEventListener('resize', resizeWindowHandler);
  };

  var onSiteToggleClick = function () {
    if (isSiteListActive()) {
      hideSiteList();
    } else {
      showSiteList();
      siteList.classList.remove('page-header__phones--active');
      userList.classList.remove('page-header__user--active');
    }
  };

  var onUserToggleClick = function () {
    if (isUserListActive()) {
      hideUserList();
    } else {
      showUserList();
      phoneList.classList.remove('page-header__phones--active');
      siteList.classList.remove('site-list--active');
    }
  };

  var onPhoneToggleClick = function () {
    if (isPhoneListActive()) {
      hidePhoneList();
    } else {
      showPhoneList();
      userList.classList.remove('page-header__user--active');
      siteList.classList.remove('site-list--active');
    }
  };

  var resizeWindowHandler = function () {
    if (!isMobileScreen() && isUserListActive()) {
      hideUserList();
    } if (!isMobileScreen() && isSiteListActive()) {
      hideSiteList();
    } if (!isMobileScreen() && isPhoneListActive()) {
      hidePhoneList();
    }
  };

  phoneToggle.addEventListener('click', onPhoneToggleClick);
  siteToggle.addEventListener('click', onSiteToggleClick);
  userToggle.addEventListener('click', onUserToggleClick);
})();

'use strict';

//управление меню навигации
window.catalogNav = (function () {
  var catalogNav = document.querySelector('.catalog-nav');

  var dropdownItem = function (item) {
    var openedItems = document.querySelectorAll('.catalog-nav__toggle--active');
    if (item.classList.contains('catalog-nav__toggle--active')) {
      item.classList.remove('catalog-nav__toggle--active');
    } else {
      item.classList.add('catalog-nav__toggle--active');
    }
  };

  //выбор выпадающего списка
  var dropdownItemHandler = function (evt) {
    var target = evt.target;
      while (target !== catalogNav) {
        if (target.classList.contains('catalog-nav__toggle')) {
          dropdownItem(target);
          break;
        }
        target = target.parentNode;
      }
  };

  catalogNav.addEventListener('click', dropdownItemHandler);
})();

'use strict';

(function () {
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
})();


(function quantityProducts() {
    var quantityArrowsMinus = document.querySelectorAll(".quantity__arrow--minus");
    var quantityArrowsPlus = document.querySelectorAll(".quantity__arrow--plus");
    var quantityFields= document.querySelectorAll(".quantity__field");

    function quantityMinus() {
      for (var i = 0; i < quantityFields.length; i++) {
        if (quantityFields[i].value > 1) {
          quantityFields[i].value + quantityFields[i].value --;
        }
      }
    };

    function quantityPlus() {
      for (var i = 0; i < quantityFields.length; i++) {
        quantityFields[i].value + quantityFields[i].value ++;
      }
    };

    for (var i = 0; i < quantityArrowsMinus.length; i++) {
      quantityArrowsMinus[i].addEventListener('click', quantityMinus);
    }

    for (var i = 0; i < quantityArrowsPlus.length; i++) {
      quantityArrowsPlus[i].addEventListener('click', quantityPlus);
    }
  })();

//# sourceMappingURL=all.js.map
