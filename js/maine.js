(function ($) {
    $(document).ready(function () {
        $('.banner-slider').slick({
            prevArrow: "<div class='arrow-prev'></div>",
            nextArrow: "<div class='arrow-next'></div>",
            dots: true,
            customPaging: function (slider, i) {
                return ''
            },
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }]
        });


        $('.recent-post-big-slider').slick({
            slidesToShow: 3,
            prevArrow: $(".recent-post-big-arrows .arrow-prev"),
            nextArrow: $(".recent-post-big-arrows .arrow-next"),
            dots: false,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2
                    }
                },

                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }

            ]
        });


        $('.header-burger').click(function () {
            $('.nav').toggleClass('active')
        })




    })
})(jQuery)