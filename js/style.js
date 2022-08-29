$(function() {

    // links
    $('.menu-links').click(function() {
        $('.menu-popup').toggleClass('menu-popup__active');
        $('.menu-links').toggleClass('menu-links__active');
    });

    // menu
    var helpers = {
        addZeros: function(n) {
            return (n < 10) ? '0' + n : '' + n;
        }
    };

    function sliderInit() {
        var $slider = $('.about-slider__blocks');
        $slider.each(function() {
            var $sliderParent = $(this).parent();
            $(this).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                infinite: true,
                prevArrow: $('.about-arrow__prev'),
                nextArrow: $('.about-arrow__next'),
                responsive: [{
                    breakpoint: 576,
                    settings: {
                    }
                }]
            });

            if ($(this).find('.about-slider__block').length > 1) {
                $(this).siblings('.about-slider__num').show();
            }

            $(this).on('afterChange', function(event, slick, currentSlide) {
                $sliderParent.find('.about-slider__num .active').html(helpers.addZeros(currentSlide + 1));
            });

            var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
            $sliderParent.find('.about-slider__num .total').html(helpers.addZeros(sliderItemsNum));
        });
    };

    sliderInit();
    // slider about
    function sliderInit2() {
        var $slider = $('.video-slider__blocks');
        $slider.each(function() {
            var $sliderParent = $(this).parent();
            $(this).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                infinite: true,
                prevArrow: $('.video-arrow__prev'),
                nextArrow: $('.video-arrow__next'),
                responsive: [{
                    breakpoint: 576,
                    settings: {
                    }
                }]
            });

            if ($(this).find('.video-slider__block').length > 1) {
                $(this).siblings('.video-slider__num').show();
            }

            $(this).on('afterChange', function(event, slick, currentSlide) {
                $sliderParent.find('.video-slider__num .active').html(helpers.addZeros(currentSlide + 1));
            });

            var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
            $sliderParent.find('.video-slider__num .total').html(helpers.addZeros(sliderItemsNum));

        });
    };

    sliderInit2();
    // slider video
    $('.reviews-blocks').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.reviews-arrow__prev'),
        nextArrow: $('.reviews-arrow__next'),
        responsive: [{
                breakpoint: 1025,
                settings: {
                }
            },
            {
                breakpoint: 576,
                settings: {
                }
            }
        ]
    });

    $('.reviews-btns__1').on("click", function() {
        $(this).addClass('reviews-btn__active');
        $('.reviews-btns__2').removeClass('reviews-btn__active');

        $('.reviewsvideo-slider').removeClass('reviewsvideo-slider__active');
        $('.reviews-slider').show();

    });

    $('.reviews-btns__2').on("click", function() {
        $(this).addClass('reviews-btn__active');
        $('.reviews-btns__1').removeClass('reviews-btn__active');

        $('.reviewsvideo-slider').addClass('reviewsvideo-slider__active');
        $('.reviews-slider').hide();
    });



    function sliderInit4() {
        var $slider2 = $('.reviewsvideo-slider__blocks');
        $slider2.each(function() {
            var $sliderParent = $(this).parent();
            $(this).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                infinite: true,
                prevArrow: $('.reviewsvideo-arrow__prev'),
                nextArrow: $('.reviewsvideo-arrow__next'),
            });

            if ($(this).find('.reviewsvideo-slider__block').length >= 1) {
                $(this).siblings('.reviewsvideo-slider__num').show();
            }

            $(this).on('afterChange', function(event, slick, currentSlide) {
                $sliderParent.find('.reviewsvideo-slider__num .active').html(helpers.addZeros(currentSlide + 1));
            });

            var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
            $sliderParent.find('.reviewsvideo-slider__num .total').html(helpers.addZeros(sliderItemsNum));

        });
    };

    sliderInit4();
    // slider reviews
    function sliderInit3() {
        var $slider = $('.present-slider__blocks');
        $slider.each(function() {
            var $sliderParent = $(this).parent();
            $(this).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                infinite: true,
                prevArrow: $('.present-arrow__prev'),
                nextArrow: $('.present-arrow__next'),
                responsive: [{
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }]
            });

            if ($(this).find('.present-slider__block').length > 1) {
                $(this).siblings('.present-slider__num').show();
            }

            $(this).on('afterChange', function(event, slick, currentSlide) {
                $sliderParent.find('.present-slider__num .active').html(helpers.addZeros(currentSlide + 1));
            });

            var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
            $sliderParent.find('.present-slider__num .total').html(helpers.addZeros(sliderItemsNum));

        });
    };

    sliderInit3();
    // slider present
    $(".questions-block__btn1").click(function() {
        $(".questions-block__text-1").slideToggle();
    });
    $(".questions-block__btn2").click(function() {
        $(".questions-block__text-2").slideToggle();
    });
    $(".questions-block__btn3").click(function() {
        $(".questions-block__text-3").slideToggle();
    });
    $(".questions-block__btn4").click(function() {
        $(".questions-block__text-4").slideToggle();
    });
    $(".questions-block__btn5").click(function() {
        $(".questions-block__text-5").slideToggle();
    });
    // slide
    $('.questions-block__btn1').on("click", function() {
        $('.questions-block__btn1').toggleClass('questions-block__btn1-active');
    });
    $('.questions-block__btn2').on("click", function() {
        $('.questions-block__btn2').toggleClass('questions-block__btn2-active');
    });
    $('.questions-block__btn3').on("click", function() {
        $('.questions-block__btn3').toggleClass('questions-block__btn3-active');
    });
    $('.questions-block__btn4').on("click", function() {
        $('.questions-block__btn4').toggleClass('questions-block__btn4-active');
    });
    $('.questions-block__btn5').on("click", function() {
        $('.questions-block__btn5').toggleClass('questions-block__btn5-active');
    });
    //  slide
    var main = document.getElementById('main');
    var parallaxInstance = new Parallax(main);
    var header = document.getElementById('header');
    var parallaxInstance = new Parallax(header);
    // paralax
});
$(window).scroll(function() {
    let scrolling1 = -(window.scrollY - $(".about-candle").offset().top) / 5;
    let scrolling2 = -(window.scrollY - $(".about-oil").offset().top) / 5;
    let scrolling3 = -(window.scrollY - $(".prices-oil").offset().top) / 5;
    let scrolling4 = -(window.scrollY - $(".teachers-block__oil-1").offset().top) / 5;
    let scrolling5 = -(window.scrollY - $(".teachers-block__oil-2").offset().top) / 5;
    let scrolling6 = -(window.scrollY - $(".seminars-candle").offset().top) / 5;
    let scrolling7 = -(window.scrollY - $(".contacts-block__img").offset().top) / 5;

    $(".about-candle").css({ "transform": "translateY( " + scrolling1 + "px)" })
    $(".about-oil").css({ "transform": "translateY( " + scrolling2 + "px)" })
    $(".prices-oil").css({ "transform": "translateY( " + scrolling3 + "px)" })
    $(".teachers-block__oil-1").css({ "transform": "translateY( " + scrolling4 + "px)" })
    $(".teachers-block__oil-2").css({ "transform": "translateY( " + scrolling5 + "px)" })
    $(".seminars-candle").css({ "transform": "translateY( " + scrolling6 + "px)" })
    $(".contacts-block__img").css({ "transform": "translateY( " + scrolling7 + "px)" })

    var tick = function($el, duration) {
        'use strict';

        $el.attr('data-duration', duration);
        $el.find('.duration').html(duration);

        if (duration > 60) {
            $el.addClass('full');
        }

        if (duration < -60) {
            $el.addClass('full negative');
        }

    };
    $('.btn').on("click", function() {
        $('.popup').css('display', 'flex');
        document.body.style.overflow = 'hidden';
    });
    // btn
    $('.popup-before').on("click", function() {
        $('.popup').css('display', 'none');
        document.body.style.overflow = 'visible';
    });
    // popup
    $('.phone').mask("+7 (999) 999 - 99 - 99");
    // mask

    $('.popup-form').submit(function(e) {

    let phone = $('#phone').val().length;

    if (phone < 15) {
        e.preventDefault()
        $('.popup-required').addClass('popup-required__error')
        setTimeout(function() {
            $('.popup-required').removeClass('popup-required__error')
        }, 3000);


    }

    });
});

var seconds = new Date().getTime() / 1000;

let day = new Date().getDay();
let month = new Date().getMonth();

let year = new Date().getFullYear();

if (day < 15) {
    dayStart = 1;
    dayEnd = 15
} else {
    if (month = 2) {
        dayStart = 15;
        dayEnd = 28;
    } else {
        dayStart = 15;
        dayEnd = 30;
    }

}

function monthName() {
    switch (month) {
        case 0:
            return 'января'
            break;

        case 1:
            return 'февраля'
            break;

        case 2:
            return 'марта'
            break;

        case 3:
            return 'апреля'
            break;

        case 4:
            return 'мая'
            break;

        case 5:
            return 'июня'
            break;

        case 6:
            return 'июля'
            break;

        case 7:
            return 'августа'
            break;

        case 8:
            return 'сентября'
            break;

        case 9:
            return 'октября'
            break;

        case 10:
            return 'ноября'
            break;

        case 11:
            return 'декабря'
            break;

        default:
            break;
    }
}

$('.discount-day').text(dayEnd);
$('.discount-month').text(monthName());




let dateStart = new Date(year, month, dayStart).getTime() / 1000
let dateNow = new Date().getTime() / 1000
let dateEnd = new Date(year, month, dayEnd).getTime() / 1000




$('#countdown').final_countdown({
    start: dateStart,
    end: dateEnd,
    now: dateNow,

});