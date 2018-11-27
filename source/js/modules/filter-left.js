'use strict';

window.filterLeft = (function () {
    var filterLeft = document.querySelector('.filter-left');
    var filterLeftToggle = document.querySelector('.filter-left__main-toggle');
    var filterLeftForm = document.querySelector('.filter-left__form');
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
      var openedItems = document.querySelectorAll('.filter-left__group-title--active');
      [].forEach.call(openedItems, function (openedItem) {
        openedItem !== item && openedItem.classList.remove('filter-left__group-title--active');
      });
      if (item.classList.contains('filter-left__group-title--active')) {
        item.classList.remove('filter-left__group-title--active');
      } else {
        item.classList.add('filter-left__group-title--active');
      }
    };

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
