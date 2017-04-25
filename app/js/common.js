$(function(){

    $('.slide,.header-section').css({height : $( window ).height()});

/***********setting on main*************/
    $(".owl-carousel").owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items:1,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        dots: false
    });
/***********END setting on main*************/
    
});