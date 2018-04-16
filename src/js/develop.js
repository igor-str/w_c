"use strict";
$(document).ready(function(){
    var prevAr = '<div class="slider-left"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17px" height="31px"> <path fill-rule="evenodd"  fill="rgb(0, 0, 0)"d="M15.092,30.753 L17.002,28.745 L3.930,15.749 L17.002,2.756 L15.093,0.745 L-0.002,15.749 L15.092,30.753 Z"/> </svg></div>';
    var nextAr='<div class="slider-right"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17px" height="31px"> <path fill-rule="evenodd"  fill="rgb(0, 0, 0)"d="M15.092,30.753 L17.002,28.745 L3.930,15.749 L17.002,2.756 L15.093,0.745 L-0.002,15.749 L15.092,30.753 Z"/> </svg></div>';;
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: prevAr,
        nextArrow: nextAr,
    });
    $('.review-slider').slick({
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: '0',
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: prevAr,
        nextArrow: nextAr,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});

$(document).on("click", ".js-navbar-toggler-top", function(e){
    $('.navbar-brand').toggleClass('is-hidden');
    $('.search').toggleClass('is-hidden');
});