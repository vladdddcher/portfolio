
$(function () {
    
    var mixer = mixitup('.tenant__box', {
        load: {
            filter: '.category-5',
        }
    });
    
});
    
    $(function () {
        var mixer = mixitup('.news__box-mixitup', {
            load: {
                filter: '.category-1',
            }
        });
    });    
    

$(function () {
        /* Nav Toggle */
        let nav = $("#nav");
        let navToggle = $("#navToggle");
        
        navToggle.on("click", function() {
    
            nav.toggleClass("show");
        });
});

$(function () {
    $('.reviews__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<img src='images/arrows/arrows-left.svg' class='prev' alt='2'>",
        nextArrow: "<img src='images/arrows/arrows-right.svg' class='next' alt='2'>",
    });
    
});

$(function () {
    $('.bank__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        dots: true,
    });
    
});

$(function () {
    $('.rent__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        initialSlide: 3,
    });
});

$(function () {
    $('.parking__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
    });
});

$(function () {
    
    let intro = $("#intro");
    let header = $("#header");
    let introH = intro.innerHeight();
    
    HeaderScroll();
    
    $(window).on("scroll resize", function() {
        HeaderScroll();
        
    });
    
    function HeaderScroll() {
        introH = intro.innerHeight();
        
        let scrollTop = $(this).scrollTop();
        
        if( scrollTop >= introH -30) {
            header.addClass("header--dark");
        } else {
            header.removeClass("header--dark");
        }    
    }
    
});

$(function () {
    
    let headerPage = $("#header--page");
    let breadcrumbs = $("#breadcrumbs");
    let breadcrumbsH = breadcrumbs.innerHeight();
    
    HeaderScroll();
    
    $(window).on("scroll resize", function() {
        HeaderScroll();
        
    });
    
    function HeaderScroll() {
        breadcrumbsH = breadcrumbs.innerHeight();
        
        let scrollTopPage = $(this).scrollTop();
        
        if( scrollTopPage >= breadcrumbsH) {
            headerPage.addClass("header--dark");
        } else {
            headerPage.removeClass("header--dark");
        }
    }
    
});

$(function () {
    $('[data-modal]').on('click', function(event){
        event.preventDefault();
        
        let modal = $(this).data('modal');
        
        $('body').addClass('no-scroll');
        $(modal).addClass('show');   
        
        setTimeout(function(){
            $(modal).find('.modal__wrapper').css({
                transform: 'scale(1)',
                opacity: '1'
            }, 300);    
        });
        
        
    });
    
    $('[data-modal-close]').on('click', function(event) {
        event.preventDefault();
        
        let modal = $(this).parents('.modal');
        
        modalClose(modal);
    });
    
    $('.modal').on('click', function(){    
        let modal = $(this);
        
        modalClose(modal);
    });
    
    $('.modal__wrapper').on('click', function(event){    
        event.stopPropagation();      
    });
    
    function modalClose(modal) {
        modal.find('.modal__wrapper').css({
            transform: 'scale(0.5)',
            opacity: '0'
        }); 
        
        setTimeout(function(){
            $('body').removeClass('no-scroll');
            modal.removeClass('show');  
        }, 300);
    }
    
});

$(function () {
    // You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
});