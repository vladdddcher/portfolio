$(function(){

$('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows/arrows-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows/arrows-right.svg" alt="">',
    asNavFor: '.slider-dotshead', 
});

$('.slider-dotshead').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider', 
});

$('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows/arrows-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows/arrows-right.svg" alt="">',
    asNavFor: '.slider-map', 
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,

        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});

$('.slider-map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    asNavFor: '.surf-slider', 
});

$('.holder__slider').slick({
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows/arrows-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows/arrows-right.svg" alt="">',
});

$('.shop__slider').slick({
  infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows/arrows-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows/arrows-right.svg" alt="">',
});




$('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="images/sleep/plus.svg" alt=""></div><div class="quantity-button quantity-down">  <img src="images/sleep/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
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

$('.quantity-button').on('click', function () {
  var parents = $(this).parents('.holder-slider__info');
  let summ = $('.nights', parents).val() * $('.summ', parents).data('guests') * $('.guests', parents).val();
  $('.summ', parents).html('$' + summ);
});

$('.quantity').each(function () {
  var parents = $(this).parents('.holder-slider__info');
  let summ = $('.nights', parents).val() * $('.summ', parents).data('guests') * $('.guests', parents).val();
  $('.summ', parents).html('$' + summ);
});



$('.surfboard-box__circle').on('click', function(){
  $(this).toggleClass('active')
});

$('.menu-btn').on('click', function(){
  $('.menu').toggleClass('active');
});

$('.burger').on('click', function(){
  $('.menu').toggleClass('active');
});

  

new WOW().init();
});


$(function() {
   
  // --fixed menu-- //
  
  let header =$("#header");
  let menu =$("#menu");
  let burger =$("#burger");
  let headerH = header.innerHeight();
  let scrollPos = $(window).scrollTop();
  
  checkScroll(scrollPos, headerH);

  
  $(window).on("scroll resize", function() {
    let headerH = header.innerHeight();
    scrollPos = $(this).scrollTop();
  
    checkScroll(scrollPos, headerH);
    
  });
  
  function checkScroll(scrollPos, headerH) {
    if( scrollPos > headerH) { 1200
      menu.addClass("fixed")
    } else {
      menu.removeClass("fixed");
    }
    
    if( scrollPos > headerH) {
      burger.addClass("fixed")
    } else {
      burger.removeClass("fixed");
    }
  }
  
  // --Smooth scroll-- //
  
  $("[data-scroll]").on("click", function(event){
    event.preventDefault();
    
    let elementId =     $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;
    
    console.log(elementOffset);
    
    $("html, body").animate({
      scrollTop: elementOffset +80
    }, 700);
  });
  
  
  
});