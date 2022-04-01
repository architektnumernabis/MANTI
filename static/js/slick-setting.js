$('.carousel').slick({
    mobileFirst: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 819,
            settings: {
                slidesToShow: 3,
                arrows: true
            }
        }
    ]
});

$('.news-carousel').slick({
    mobileFirst: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 819,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 1300,
            settings: {
                arrows: true,
                slidesToShow: 2
            }
        }
    ]
});