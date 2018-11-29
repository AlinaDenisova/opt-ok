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
    var dotcount = 1;
    jQuery('.product__slides .owl-dot').each(function() {
      jQuery( this ).addClass( 'dotnumber' + dotcount);
      jQuery( this ).attr('data-info', dotcount);
      dotcount=dotcount+1;
    });

    var slidecount = 1;
    jQuery('.product__slides .owl-item').not('.cloned').each(function() {
      jQuery( this ).addClass('slidenumber' + slidecount);
      slidecount = slidecount+1;
    });

    var grab = jQuery('.product__slides .owl-dot').data('info');
    jQuery('.product__slides .owl-dot > span').each(function() {
    var slidegrab = jQuery('.slidenumber'+ grab +' img').attr('src');
    jQuery(this).css("background-image", "url("+slidegrab+")");
    });

    var amount = jQuery('.product__slides .owl-dot').length;
    var gotowidth = 94/amount;
    var MOBILE_WIDTH_MAX = 1099;
    if (window.innerWidth <= MOBILE_WIDTH_MAX){
      jQuery('.product__slides .owl-dot').css("width", gotowidth+"%");
      var newwidth = jQuery('.product__slides .owl-dot').width();
      jQuery('.product__slides .owl-dot').css("height", newwidth/1.2 + "px");
    } else {
      jQuery('.product__slides > .owl-dot').css("width", 114);
      var newwidth = jQuery('.product__slides .owl-dot').width();
      jQuery('.product__slides .owl-dot').css("height", 90);
    }
});
