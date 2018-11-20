jQuery(document).ready(function($) {
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
