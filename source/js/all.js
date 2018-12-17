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

window.filterLeft = (function () {
    var filterLeft = document.querySelector('.filter-left');
    var filterLeftToggle = document.querySelector('.filter-left__main-toggle');
    var filterLeftForm = document.querySelector('.filter-left__form');
    var filterLeftMoreLink = document.querySelector('.filter-left__link');
    var filterLeftMoreWrapper= document.querySelectorAll('.filter-left__input-wrapper--more');
    var MOBILE_WIDTH_MAX = 1099;

    if (filterLeftForm) {

      filterLeftToggle.addEventListener("click", function(evt) {
        evt.preventDefault();
        if (filterLeftForm.classList.contains("filter-left__form--active")) {
          filterLeftForm.classList.remove("filter-left__form--active");
          filterLeftToggle.classList.remove("filter-left__main-toggle--active");
        } else {
          filterLeftForm.classList.add("filter-left__form--active");
          filterLeftToggle.classList.add("filter-left__main-toggle--active");
        }
      });

    var dropdownItem = function (item) {
      if (item.classList.contains('filter-left__group-title--active')) {
        item.classList.remove('filter-left__group-title--active');
      } else {
        item.classList.add('filter-left__group-title--active');
      }
    };

    filterLeftMoreLink.addEventListener("click", function(evt) {
      for (var i = 0; i < filterLeftMoreWrapper.length; i++) {
      evt.preventDefault();
      if (filterLeftMoreWrapper[i].classList.contains("filter-left__input-wrapper--active")) {
        filterLeftMoreWrapper[i].classList.remove("filter-left__input-wrapper--active");
      } else {
        filterLeftMoreWrapper[i].classList.add("filter-left__input-wrapper--active");
      }
     }
    });

    //выбор выпадающего списка
    var dropdownItemHandler = function (evt) {
      var target = evt.target;
        while (target !== filterLeft) {
          if (target.classList.contains('filter-left__group-title')) {
            dropdownItem(target);
            break;
          }
          target = target.parentNode;
        }
    };

    filterLeft.addEventListener('click', dropdownItemHandler);
  }
})();

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


'use strict';

$(document).ready(function() {
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
  });
});

'use strict';

(function () {
var hiddenToggle = document.querySelector('.sections__hidden');
var sections = document.querySelector('.sections');
  if (sections) {

  hiddenToggle.addEventListener("click", function(evt) {
      sections.classList.remove("sections--active");
  });
  }

  var hiddenBrandsToggle = document.querySelector('.brands__hidden');
  var brands = document.querySelector('.brands');
    if (brands) {

    hiddenBrandsToggle.addEventListener("click", function(evt) {
        brands.classList.remove("brands--active");
    });
    }
})();

jQuery(document).ready(function($) {
  (function() {
    var highlightColor = 'rgba(0, 1, 1, 0.2)',
    highlightColorRed = '#7f0406',
    $table = $('.catalog-table'),
    previousColumnIndex;

    $table
    .on('mouseover','th', function() {
      var $cell = $(this),
        index = previousColumnIndex = $cell.index();

      $table.find('.catalog-table__row').each(function() {
        $(this).children().eq(index).css('background-color', highlightColor);
      })
      $table.find('.catalog-table__title-row').each(function() {
        $(this).children().eq(index).css('background-color', highlightColorRed);
        $(this).children().eq(index).addClass("catalog-table__title--active");
      })
    })

    .on('mouseout','th', function() {
      $table.find('tr').each(function() {
        $(this).children().eq(previousColumnIndex).removeClass("catalog-table__title--active");
        $(this).children().eq(previousColumnIndex).css('background-color', '');
      })
    })
  })();
});

'use strict';
(function () {
  var productInfo = document.querySelector('.product-info');

  if (productInfo) {
  var productInfoTabs = new Tabs({
    wrapperClass: 'product-info',
    tabContainerClass: 'product-info__list',
    tabClass: 'product-info__item',
    activeTabClass: 'product-info__item--active',
    contentClass: 'product-info__content',
    activeContentClass: 'product-info__content--active'
  });

  productInfoTabs.addListener();
  }
})();

$(document).ready(function(){

  $("#filter-length-min,#filter-length-max").on('change', function () {
    var min_price_range = parseInt($("#filter-length-min").val());
    var max_price_range = parseInt($("#filter-length-max").val());

    if (min_price_range > max_price_range) {
    $('#filter-length-max').val(min_price_range);
    }
    $("filters-length-range").slider({
    values: [min_price_range, max_price_range]
    });
  });

  $("#filter-length-min,#filter-length-max").on("paste keyup", function () {
    var min_price_range = parseInt($("#filter-length-min").val());
    var max_price_range = parseInt($("#filter-length-max").val());
    if(min_price_range == max_price_range){
      max_price_range = min_price_range + 100;
      $("#filter-length-min").val(min_price_range);
      $("#filter-length-max").val(max_price_range);
    }

    $("#filters-length-range").slider({
    values: [min_price_range, max_price_range]
    });
  });


  $(function () {
    $("#filters-length-range").slider({
    range: true,
    orientation: "horizontal",
    min: 0,
    max: 10000,
    values: [1000, 9000],
    step: 100,

    slide: function (event, ui) {
      if (ui.values[0] == ui.values[1]) {
        return false;
      }
      $("#filter-length-min").val(ui.values[0]);
      $("#filter-length-max").val(ui.values[1]);
    }
    });

    $("#filter-length-min").val($("#filters-length-range").slider("values", 0));
    $("#filter-length-max").val($("#filters-length-range").slider("values", 1));
  });

  $("#filter-left-price-range").click(function () {
    var min_price = $('#filter-left-price-min').val();
    var max_price = $('#filter-left-price-max').val();
  });

  $("#filter-left-price-min,#filter-left-price-max").on('change', function () {

    var min_price_range = parseInt($("#filter-left-price-min").val());
    var max_price_range = parseInt($("#filter-left-price-max").val());
    if (min_price_range > max_price_range) {
    $('#filter-left-price-max').val(min_price_range);
    }
    $("filter-left-price-range").slider({
    values: [min_price_range, max_price_range]
    });
  });

  $("#filter-left-price-min,#filter-left-price-max").on("paste keyup", function () {

    var min_price_range = parseInt($("#filter-left-price-min").val());
    var max_price_range = parseInt($("#filter-left-price-max").val());
    if(min_price_range == max_price_range){
      max_price_range = min_price_range + 100;
      $("#filter-left-price-min").val(min_price_range);
      $("#filter-left-price-max").val(max_price_range);
    }

    $("#filter-left-price-range").slider({
    values: [min_price_range, max_price_range]
    });
  });

  $(function () {
    $("#filter-left-price-range").slider({
    range: true,
    orientation: "horizontal",
    min: 0,
    max: 10000,
    values: [4000, 7000],
    step: 100,

    slide: function (event, ui) {
      if (ui.values[0] == ui.values[1]) {
        return false;
      }
      $("#filter-left-price-min").val(ui.values[0]);
      $("#filter-left-price-max").val(ui.values[1]);
    }
    });

    $("#filter-left-price-min").val($("#filter-left-price-range").slider("values", 0));
    $("#filter-left-price-max").val($("#filter-left-price-range").slider("values", 1));
  });

  $("#filter-left-price-range").click(function () {
    var min_price = $('#filter-left-price-min').val();
    var max_price = $('#filter-left-price-max').val();
  });

  $("#filter-left-price-min,#filter-left-price-max").on('change', function () {

    var min_price_range = parseInt($("#filter-left-price-min").val());
    var max_price_range = parseInt($("#filter-left-price-max").val());
    if (min_price_range > max_price_range) {
    $('#filter-left-price-max').val(min_price_range);
    }
    $("filter-left-price-range").slider({
    values: [min_price_range, max_price_range]
    });
  });

  $("#filter-left-length-min,#filter-left-length-max").on("paste keyup", function () {

    var min_price_range = parseInt($("#filter-left-length-min").val());
    var max_price_range = parseInt($("#filter-left-length-max").val());
    if(min_price_range == max_price_range){
      max_price_range = min_price_range + 100;
      $("#filter-left-length-min").val(min_price_range);
      $("#filter-left-length-max").val(max_price_range);
    }

    $("#filter-left-length-range").slider({
    values: [min_price_range, max_price_range]
    });
  });

  $(function () {
    $("#filter-left-length-range").slider({
    range: true,
    orientation: "horizontal",
    min: 0,
    max: 10000,
    values: [4000, 7000],
    step: 100,

    slide: function (event, ui) {
      if (ui.values[0] == ui.values[1]) {
        return false;
      }
      $("#filter-left-length-min").val(ui.values[0]);
      $("#filter-left-length-max").val(ui.values[1]);
    }
    });

    $("#filter-left-length-min").val($("#filter-left-length-range").slider("values", 0));
    $("#filter-left-length-max").val($("#filter-left-length-range").slider("values", 1));
  });

  $("#filter-left-length-range").click(function () {
    var min_price = $('#filter-left-length-min').val();
    var max_price = $('#filter-left-length-max').val();
  });
});

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

//# sourceMappingURL=all.js.map
