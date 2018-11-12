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
