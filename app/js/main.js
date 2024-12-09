$(function(){
    $('.header__slider').slick({
        Infinity:true,
        fade: true,
        prevArrow: '<img src="img/arrow-left.svg" class="slick-slider prev-arrow" alt=""></img>',
        nextArrow: '<img src="img/arrow-right.svg" class="slick-slider next-arrow" alt=""></img>',
        asNavFor: '.slider-dots',
        autoplay: true,
        autoplaySpeed: 3000
    });
  
    $('.slider-dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
        
    });

    $('.surf__map-slider').slick({
        slidesToShow:8,
        focusOnSelect: true,
        asNavFor:'.surf__slider',
        arrows:false,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 3,
              centerMode: true,
              
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              centerMode:true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              centerMode: true
            }
          }

          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
   
    $('.surf__slider').slick({
        slidesToShow:4,
        slidesToScroll: 1,
        prevArrow: '<img src="img/arrow-left.svg" class="slick-slider prev-arrow" alt=""></img>',
        nextArrow: '<img src="img/arrow-right.svg" class="slick-slider next-arrow" alt=""></img>',
        asNavFor:'.surf__map-slider',
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 3,
              
              
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              centerMode: true
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              centerMode: false
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });

    $('.holder__slider').slick({
        Infinity:true,
        fade: true,
        prevArrow: '<img src="img/arrow-left.svg" class="slick-slider prev-arrow" alt=""></img>',
        nextArrow: '<img src="img/arrow-right.svg" class="slick-slider next-arrow" alt=""></img>',
    })
    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/Plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/Minus.svg" alt=""></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });

    $('.quantity-button').on('click', function(){
        let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val()-1) *  $('.summ').data('guests');
        
        $('.summ').html('$'+ summ);
    })
    let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val()-1) *  $('.summ').data('guests');
        
    $('.summ').html('$'+ summ);

    $('.surfboard__box-circle').on('click', function(){
        $(this).toggleClass('active')
    })
    
    $('.menu__btn').on('click', function(){
        $('.header__menu').toggleClass('active')
    })
  
});