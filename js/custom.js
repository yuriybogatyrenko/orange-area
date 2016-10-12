$(document).ready(function () {

    $(window).bind('orientationchange', function (e) {
        var w = $('#slides').width();
        //alert('hi');
        $('.slidesjs-container, .slidesjs-control').css('width', w);

        setTimeout(function () {
            var h = $('.slidesjs-container img:eq(0)').height();

            $('.slidesjs-container, .slidesjs-control').animate({height: h}, 500);
        }, 1000);

    });

    function bl_fade($bl) {

        var bltop = $bl.offset().top,
                wt = $(window).scrollTop() + $(window).height() / 2;

        if (bltop <= wt && !$bl.hasClass('an_done')) {

            $bl.find('.item').each(function () {
                var $this = $(this);

                setTimeout(function () {
                    $this.animate({opacity: 1}, Math.floor(Math.random() * 1500));
                }, Math.floor(Math.random() * 1500));
            });

            $bl.addClass('an_done');
        }


    }

    function make_op() {
        if ($(window).width() > 1024) {
            if (!$('body').hasClass('animated')) {
                // $('.why .units .item, #head .units .item, .our_cl .units .item, .preferences .units .item').each(function () {
                $('.why .units .item, .our_cl .units .item, .preferences .units .item').each(function () {
                    if (!$(this).hasClass('an_done')) {
                        $(this).css('opacity', '0');
                    }

                });
                /* $('.why .units .item, #head .units .item, .our_cl .units .item, .personell .units .item, .preferences .units .item').css('opacity', '0'); */
                fade_all();
                $('body').addClass('animated');
            }
        } else {
            if ($('body').hasClass('animated')) {
                $('.why .units .item, #head .units .item, .our_cl .units .item, .preferences .units .item').css('opacity', '1');
                /* $('.why .units .item, #head .units .item, .our_cl .units .item, .personell .units .item, .preferences .units .item').css('opacity', '1'); */
                $('body').removeClass('animated');
            }
        }
    }

    function fade_all() {

        bl_fade($('.why .units'));
        // bl_fade($('#head .units'));
        bl_fade($('.our_cl .units'));
        /* bl_fade($('.personell .units')); */
        bl_fade($('.preferences .units'));
    }

    function start_slider() {
        if (!$('#slides').hasClass('activated')) {
            var h = $(window).scrollTop() + $(window).height() / 4,
                    nh = $('#slides').offset().top;

            if (h >= nh) {
                $("#slides").slides("play");

                $('#slides').addClass('activated');
            }
        }
    }

    setTimeout(function () {
        start_slider();
    }, 1000);

    make_op();
    fade_all();

    function slider_size() {

        setTimeout(function () {
            $('.slidesControl img:eq(0)').one("load", function () {
                var h = $('.slidesControl img:eq(0)').height();
                $('.slidesContainer, .slidesControl').animate({height: h}, 100);
            });

        }, 100);
    }

    slider_size();

    $(window).scroll(function () {
        if ($(window).width() > 1024) {
            fade_all();
        }
        start_slider();
    });

    $(window).resize(function () {
        make_op();
        slider_size();
    });
});

$(function () {
    /*$('#slides').slidesjs({
     responsive:true,
     effect: {
     slide: {
     speed: 1000
     }
     },
     play: {
     active: true,
     effect: "slide",
     interval: 4000,
     auto: true,
     swap: true,
     pauseOnHover: true,
     restartDelay: 2500,
     swap:false
     },
     pagination: {
     active: false,
     // [boolean] Create pagination items.
     // You cannot use your own pagination. Sorry.
     effect: "slide"
     // [string] Can be either "slide" or "fade".
     },
     pagination:false,
     callback: {
     loaded: function() {
     setTimeout(function(){
     var h = $('.slidesjs-container img:eq(0)').height();
     
     $('.slidesjs-container, .slidesjs-control').animate({height : h}, 100);
     },100);
     
     if(!$('#slides').hasClass('animated'))
     $(".slidesjs-stop").click();
     }
     }
     });*/

    $('#slides').slides({
        responsive: true,
        height: 667,
        pagination: false
    });
});