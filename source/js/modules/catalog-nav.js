'use strict';

window.catalogNav = (function () {
  if (catalogNav) {
    var catalogNav = document.querySelector('.catalog-nav');

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
