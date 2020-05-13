(function ($){
    $(document).ready(function (){
        $('.banner-slider').slick({
            prevArrow:"<div class='arrow-prev'></div>",
            nextArrow:"<div class='arrow-next'></div>",
            dots:true,
             customPaging : function(slider, i) {
             return ''
            },
        });

       

        $('.recent-post-img-slider').slick({
            arrows:false,
            dots:true,
             customPaging : function(slider, i) {
             return ''
            },
        });

        $('.recent-post-big-slider').slick({
            prevArrow: $(".recent-post-big-arrows .arrow-prev"),
            nextArrow: $(".recent-post-big-arrows .arrow-next"),
            dots:false,
        });

    })
})(jQuery)

