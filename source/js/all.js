'use strict';

(function () {
  document.querySelector('.no-js').classList.remove('no-js');
})();

'use strict';

window.navigation = (function () {
  var MOBILE_WIDTH_MAX = 1099;

  var phoneList = document.querySelector('.phone-list');
  var userList = document.querySelector('.user-list');
  var siteList = document.querySelector('.site-list');
  var phoneToggle = document.querySelector('.page-header__toggle--phone');
  var userToggle = document.querySelector('.page-header__toggle--user');
  var siteToggle = document.querySelector('.page-header__toggle--menu');

  var isMobileScreen = function () {
    return window.innerWidth <= MOBILE_WIDTH_MAX;
  };

  var isUserListActive = function () {
    return userList.classList.contains('user-list--active');
  };

  var isPhoneListActive = function () {
    return phoneList.classList.contains('phone-list--active');
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
    phoneList.classList.add('phone-list--active');
    window.addEventListener('resize', resizeWindowHandler);
  };

  var hidePhoneList = function () {
    phoneList.classList.remove('phone-list--active');
    window.removeEventListener('resize', resizeWindowHandler);
  };

  var showUserList = function () {
    userList.classList.add('user-list--active');
    window.addEventListener('resize', resizeWindowHandler);
  };

  var hideUserList = function () {
    userList.classList.remove('user-list--active');
    window.removeEventListener('resize', resizeWindowHandler);
  };

  var onSiteToggleClick = function () {
    if (isSiteListActive()) {
      hideSiteList();
    } else {
      showSiteList();
      siteList.classList.remove('phone-list--active');
      userList.classList.remove('user-list--active');
    }
  };

  var onUserToggleClick = function () {
    if (isUserListActive()) {
      hideUserList();
    } else {
      showUserList();
      phoneList.classList.remove('phone-list--active');
      siteList.classList.remove('site-list--active');
    }
  };

  var onPhoneToggleClick = function () {
    if (isPhoneListActive()) {
      hidePhoneList();
    } else {
      showPhoneList();
      userList.classList.remove('user-list--active');
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

window.catalogNav = (function () {
    var catalogNav = document.querySelector('.catalog-nav');
    var catalogMainToggle = document.querySelector('.catalog-nav__main-toggle');
    var catalogWrapper = document.querySelector('.catalog-nav__wrapper');
    var MOBILE_WIDTH_MAX = 1099;

    if (catalogWrapper) {

      catalogMainToggle.addEventListener("click", function(evt) {
        evt.preventDefault();
        if (catalogWrapper.classList.contains("catalog-nav__wrapper--active")) {
          catalogWrapper.classList.remove("catalog-nav__wrapper--active");
          catalogMainToggle.classList.remove("catalog-nav__main-toggle--active");
        } else {
          catalogWrapper.classList.add("catalog-nav__wrapper--active");
          catalogMainToggle.classList.add("catalog-nav__main-toggle--active");
        }
      });

    var dropdownItem = function (item) {
      var openedItems = document.querySelectorAll('.catalog-nav__toggle--active');
      [].forEach.call(openedItems, function (openedItem) {
        openedItem !== item && openedItem.classList.remove('catalog-nav__toggle--active');
      });
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
  }
})();

'use strict';

(function () {
    var promo = document.querySelector('.promo');
    var novelties = document.querySelector('.novelties-of-week');
    var discount = document.querySelector('.discount');

    if (promo && discount && novelties) {
      var promoSlides = promo.querySelectorAll('.promo__slide');
      var activePromoSlideIndex = [].indexOf.call(promoSlides, promo.querySelector('.promo__slide--active'));
      var noveltiesSlides = novelties.querySelectorAll('.novelties-of-week__slide');
      var activeNoveltiesSlideIndex = [].indexOf.call(noveltiesSlides, novelties.querySelector('.novelties-of-week__slide--active'));
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


'use strict';

jQuery(document).ready(function() {
    $('.quantity > button').on('click', function() {
    var input = $(this).closest('.quantity').find('input');
    var value = parseInt(input.val()) || 0;
    if ($(this).hasClass('quantity__arrow--minus')) {
      if (value > 1) {
      value = value - 1;
      }
    }
    if ($(this).hasClass('quantity__arrow--plus')) {
      value = value + 1;
    }
    input.val(value).change();
  })();
});

jQuery(document).ready(function($) {
  (function() {
    var highlightColor = 'rgba(0, 1, 1, 0.2)',
    highlightColorRed = '#7f0406',
    $table = $('.catalog-table'),
    previousColumnIndex;

    $table
    .on('mouseover','td', function() {
      var $cell = $(this),
        index = previousColumnIndex = $cell.index();

      $table.find('.catalog-table__row').each(function() {
        $(this).children().eq(index).css('background-color', highlightColor);
      })
      $table.find('.catalog-table__title').each(function() {
        $(this).children().eq(index).css('background-color', highlightColorRed);
      })
    })

    .on('mouseout','td', function() {
      $table.find('tr').each(function() {
        $(this).children().eq(previousColumnIndex).css('background-color', '');
      })
    })
  })();
});

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

$(function(){
  $('.product__slides').owlCarousel({
    items: 1,
  });
});

$(function() {
  // 1) ASSIGN EACH 'DOT' A NUMBER
    var dotcount = 1;
    jQuery('.owl-dot').each(function() {
      jQuery( this ).addClass( 'dotnumber' + dotcount);
      jQuery( this ).attr('data-info', dotcount);
      dotcount=dotcount+1;
    });

     // 2) ASSIGN EACH 'SLIDE' A NUMBER
    var slidecount = 1;

    jQuery('.owl-item').not('.cloned').each(function() {
      jQuery( this ).addClass('slidenumber' + slidecount);
      slidecount = slidecount+1;
    });

    // SYNC THE SLIDE NUMBER IMG TO ITS DOT COUNTERPART (E.G SLIDE 1 IMG TO DOT 1 BACKGROUND-IMAGE)
    var grab = jQuery('.owl-dot').data('info');

    jQuery('.owl-dot > span').each(function() {
    var slidegrab = jQuery('.slidenumber'+ grab +' img').attr('src');
    jQuery(this).css("background-image", "url("+slidegrab+")");
    });

    // THIS FINAL BIT CAN BE REMOVED AND OVERRIDEN WITH YOUR OWN CSS OR FUNCTION, I JUST HAVE IT
      // TO MAKE IT ALL NEAT
    var amount = jQuery('.owl-dot').length;
    var gotowidth = 94/amount;
    var MOBILE_WIDTH_MAX = 1099;

    if (window.innerWidth <= MOBILE_WIDTH_MAX){
      jQuery('.owl-dot').css("width", gotowidth+"%");
      var newwidth = jQuery('.owl-dot').width();
      jQuery('.owl-dot').css("height", newwidth/1.2 + "px");
    } else {
      jQuery('.owl-dot').css("width", 114);
      var newwidth = jQuery('.owl-dot').width();
      jQuery('.owl-dot').css("height", 90);
    }
});

'use strict';
(function () {
  var productInfoTabs = new Tabs({
    wrapperClass: 'product-info',
    tabContainerClass: 'product-info__list',
    tabClass: 'product-info__item',
    activeTabClass: 'product-info__item--active',
    contentClass: 'product-info__content',
    activeContentClass: 'product-info__content--active'
  });

  productInfoTabs.addListener();
})();

//# sourceMappingURL=all.js.map
