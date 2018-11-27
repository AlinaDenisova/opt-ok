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

  $("#filters-length-range").click(function () {
    var min_price = $('#filter-length-min').val();
    var max_price = $('#filter-length-max').val();
  });

});
