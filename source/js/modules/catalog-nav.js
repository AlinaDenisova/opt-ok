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
