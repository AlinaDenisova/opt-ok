$(function() {
  $('.brands__slides').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    navContainerClass: ['slider-nav', 'slider-nav--brands'],
    navClass: ['slider__btn slider__btn--prev', 'slider__btn slider__btn--next'],
    responsive: {
      768: {
        items: 3
      },
      1140: {
        items: 6
      }
    }
  });

  $('.sections__slides').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    navContainerClass: ['slider-nav', 'slider-nav--sections'],
    navClass: ['slider__btn slider__btn--prev', 'slider__btn slider__btn--next'],
    responsive: {
      768: {
        items: 3
      },
      1140: {
        items: 4
      }
    }
  });
});

$(function(){
  $('.product__slides').owlCarousel({
    items: 1,
  });
});

$(function() {
  // 1) ASSIGN EACH 'DOT' A NUMBER
    var dotcount = 1;
    jQuery('.owl-dot').each(function() {
      jQuery( this ).addClass( 'dotnumber' + dotcount);
      jQuery( this ).attr('data-info', dotcount);
      dotcount=dotcount+1;
    });

     // 2) ASSIGN EACH 'SLIDE' A NUMBER
    var slidecount = 1;

    jQuery('.owl-item').not('.cloned').each(function() {
      jQuery( this ).addClass('slidenumber' + slidecount);
      slidecount = slidecount+1;
    });

    // SYNC THE SLIDE NUMBER IMG TO ITS DOT COUNTERPART (E.G SLIDE 1 IMG TO DOT 1 BACKGROUND-IMAGE)
    var grab = jQuery('.owl-dot').data('info');

    jQuery('.owl-dot > span').each(function() {
    var slidegrab = jQuery('.slidenumber'+ grab +' img').attr('src');
    jQuery(this).css("background-image", "url("+slidegrab+")");
    });

    // THIS FINAL BIT CAN BE REMOVED AND OVERRIDEN WITH YOUR OWN CSS OR FUNCTION, I JUST HAVE IT
      // TO MAKE IT ALL NEAT
    var amount = jQuery('.owl-dot').length;
    var gotowidth = 94/amount;
    var MOBILE_WIDTH_MAX = 1099;

    if (window.innerWidth <= MOBILE_WIDTH_MAX){
      jQuery('.owl-dot').css("width", gotowidth+"%");
      var newwidth = jQuery('.owl-dot').width();
      jQuery('.owl-dot').css("height", newwidth/1.2 + "px");
    } else {
      jQuery('.owl-dot').css("width", 114);
      var newwidth = jQuery('.owl-dot').width();
      jQuery('.owl-dot').css("height", 90);
    }
});
