$(function(){
    
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
    });
    
    $('.product-slider').slick({
        slidesToShow: 4,
        prevArrow: '<button class="product__slider-btn product__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="product__slider-btn product__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 1301,
                settings: {
                    dots: true,
                    arrow: false,
                }
            },
            {
                breakpoint: 1201,
                    settings: {
                        slidesToShow: 3,
                        dots: true,
                    }
            },
            {
                breakpoint: 861,
                    settings: {
                        slidesToShow: 2,
                        dots: true,
                    }
            },
            {
                breakpoint: 585,
                    settings: {
                        slidesToShow: 1,
                        dots: true,
                    }
            },
        ]
    });
    
    
    
    
    $('.tab').on('click', function(e){
        e.preventDefault();
        
        $($(this).siblings()).removeClass('tab--active');
        $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');
        
        $(this).addClass('tab--active')
        $($(this).attr('href')).addClass('tabs-content--active');
        
        $('.slick-slider').slick('setPosition');
    });
    
    $('.product-item__favorite').on('click', function(){
        $(this).toggleClass('product-item__favorite--active')
    });
    
    $('.product-item__basket').on('click', function(){
        $(this).toggleClass('product-item__basket--active')
    });
    
    $('.product-card__icon-favorite').on('click', function(){
        $(this).toggleClass('product-card__icon-favorite--active')
    });
    
    $('.catalog__filter-items-btn').on('click', function(){
        $(this).toggleClass('catalog__filter-items-btn--active')
    });
    
    $('.filter-style').styler();
    
    $('.filter__item-drop').on('click', function(){
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle('150');
    });
    
    


    $('.catalog__filter-btngrid').on('click', function(){
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').removeClass('product-item__wrapper--list'); 
    });
    
    
    
    $('.catalog__filter-btnline').on('click', function(){
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').addClass('product-item__wrapper--list')
    });
    
    $(".rate-yo").rateYo({
        multiColor: {
            "startColor": "#bb0000", //RED
            "endColor"  : "#00cf00"  //GREEN
          },
          normalFill: "#777",
          spacing: "10px",
      });
      
      $('.menu__btn').on('click', function(){
          $('.menu-mobile__list').toggleClass('menu-mobile__list--active')
      });
    
    $(".footer__top-title").on('click', function(){
       $(this).next().slideToggle(); 
       $(this).toggleClass('footer__top-drop--active') 
    });

    $(".aside__btn").on('click', function(){
        $('.catalog__inner-aside').slideToggle('catalog__inner-aside--mobile')
     });
     
     $('.aside__btn').on('click', function(){
        $(this).toggleClass('aside__btn--active')
    });
    
});

$(function(){
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 100000,
        max: 5000000,
    });
});