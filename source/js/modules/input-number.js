(function quantityProducts() {
    var quantityArrowsMinus = document.querySelectorAll(".quantity__arrow--minus");
    var quantityArrowsPlus = document.querySelectorAll(".quantity__arrow--plus");
    var quantityFields= document.querySelectorAll(".quantity__field");

    function quantityMinus() {
      for (var i = 0; i < quantityFields.length; i++) {
        if (quantityFields[i].value > 1) {
          quantityFields[i].value + quantityFields[i].value --;
        }
      }
    };

    function quantityPlus() {
      for (var i = 0; i < quantityFields.length; i++) {
        quantityFields[i].value + quantityFields[i].value ++;
      }
    };

    for (var i = 0; i < quantityArrowsMinus.length; i++) {
      quantityArrowsMinus[i].addEventListener('click', quantityMinus);
    }

    for (var i = 0; i < quantityArrowsPlus.length; i++) {
      quantityArrowsPlus[i].addEventListener('click', quantityPlus);
    }
  })();
