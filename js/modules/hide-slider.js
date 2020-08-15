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
