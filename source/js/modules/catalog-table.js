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
