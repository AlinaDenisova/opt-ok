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
