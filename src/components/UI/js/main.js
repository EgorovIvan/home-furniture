
$(function () {
    $('.header__btn-menu').on('click', function () {
        $('.leftside-menu').slideToggle(1500);
    })

    $('.leftside-menu__close').on('click', function () {
        $('.leftside-menu').slideToggle(1500);
    })

    // $('.header__btn-menu').on('click', function () {
    //     $('.menu').toggleClass('menu--open');
    // })
    //
    // $('.leftside-menu__close').on('click', function () {
    //     $('.menu').toggleClass('menu--open)';
    // })

    if ($(window).width() < 651) {
        $('.works-path__item--measuring').appendTo($('.works-path__items-box'));
    }

    // $('.top__slider').slick({
    //     dots: true,
    //     arrows: false,
    //     fade: true,
    //     autoplay: true
    // });

    $('.top__slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 700,
        slidesToShow: 1,
        adaptiveHeight: true,
    });
    $('.products__slider').slick({
        dots: false,
        arrows: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: $('.products__prev-arrow'),
        nextArrow: $('.products__next-arrow'),
    });


    $('.contact-slider').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 8,
                }
            },
            {
                breakpoint: 1510,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6
                }
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 841,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 551,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 376,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // console.log($('.contact-slider').length);

    $('.article-slider__box').slick({
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-left">' +
            '<img src="../../images/arrow-slider-left.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-right">' +
            '<img src="../../images/arrow-slider-right.svg" alt="arrow"></button>',
    });


    var containerEl = document.querySelector('.gallery__inner');
    var mixer;

    if (containerEl)
        mixer = mixitup(containerEl, {
            load: {
                filter: '.living'
            }
        });


})