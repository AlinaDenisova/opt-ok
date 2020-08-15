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
