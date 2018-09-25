var red = document.querySelectorAll('.poloska');
var doit, intervalloh, linePos = $('.mega-line').offset().top, lineAnimate = true, phototop, minutes,
    seconds, photoheight, wintop,
    winheight, worktop, workheight, isClosed = false, music = new Audio("../img/hymn.mp3");

//functions


function formGo() {
    if ($('.call-back').hasClass('show')) {
        $('.call-back').addClass('hide');
        $('.call-back').removeClass('show');
        setTimeout(function () {
            $('.call-back').removeClass('hide');
        }, 1000);
    } else {
        $('.call-back').addClass('show');
        $('.call-back').removeClass('hide');
    }
}

function successGo() {
    if ($('.success').hasClass('show')) {
        $('.success').addClass('hide');
        $('.success').removeClass('show');
    } else {
        if ($('.call-back').hasClass('show')) {
            formGo();
        }
        $('.success').addClass('show');
        $('.success').removeClass('hide');
    }
}

timeFormat = (function () {
    function num(val) {
        val = Math.floor(val);
        return val < 10 ? '0' + val : val;
    }

    return function (ms) {
        minutes = ms / 60 % 60;
        seconds = ms % 60;
        return num(minutes) + ":" + num(seconds);
    };
})();


$('.header__music .header__music_sound').click(function changePlay() {

    $('.header__music').toggleClass('playing'); //

    doit = $('.header__music').hasClass('playing'); //true / false

    const min = 0.3, max = 0.8;
    var animationDuration = 0.6;

    if (doit) {
        music.volume = 0.5;
        music.play();
        intervalloh = setInterval(function () {
            red.forEach(function (element) {
                function setProperty(duration, size) {
                    element.style.setProperty('--animation-time', duration + 's');
                    element.style.setProperty('--animation-size', size);
                }

                if (doit) {
                    animationDuration = Math.random() * (max - min) + min;
                    animationSize = Math.random() * (max - min) + min;
                    setProperty(animationDuration, animationSize);
                }
            });
            $('.header__music p').html(timeFormat(Math.floor(music.currentTime)));
            if(music.currentTime>=224){
                changePlay();
            }
        }, animationDuration * 1000);

    } else {
        music.pause();
        clearInterval(intervalloh);
    }

});


//burger

$('document').ready(function () {
    setTimeout(function () {
        $('.preloader').addClass('hide');
        // if ($(window).width() > 576) {
        //     $('.header__music').toggleClass('playing');
        //     const min = 0.3, max = 0.8;
        //     var animationDuration = 0.6;
        //     music.play();
        //     setTimeout(function () {
        //         music.play();
        //     },1000);
        //     red.forEach(function (element) {
        //         function setProperty(duration, size) {
        //             element.style.setProperty('--animation-time', duration + 's');
        //             element.style.setProperty('--animation-size', size);
        //         }
        //         intervalloh = setInterval(function () {
        //             // $('.header__music p').html(timeFormat(Math.floor(music.currentTime)));
        //             animationDuration = Math.random() * (max - min) + min;
        //             animationSize = Math.random() * (max - min) + min;
        //             setProperty(animationDuration, animationSize);
        //         }, animationDuration * 1000);
        //         intervalloh;
        //     });
        // }
    }, 2500);

    // carousel
    if ($(window).width() < 576) {
        $('.ow-mob').owlCarousel({
            stagePadding: 90,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            margin: 10,
            smartSpeed: 1000,
            dots: false,
            items: 1
        });
    }

    var trigger = $('#hamburger');

    trigger.click(function () {
        if (trigger.hasClass('disabled')) {
            return false;
        } else {
            trigger.addClass('disabled');
            burgerTime();
            setTimeout(function () {
                trigger.removeClass('disabled');
                $('.item__icon-block').removeClass('hide');
            }, 1400);
        }
    });

    function burgerTime() {
        if (isClosed == true) {
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
            timetoclock = 100;
            for (i = 5; i >= 0; i--) {
                (function (index) {
                    setTimeout(function () {
                        $('.item__icon-block').eq(index).addClass('hide');
                        $('.item__icon-block').eq(index).removeClass('show');
                    }, timetoclock);
                })(i);
                timetoclock = timetoclock + 200;
                setTimeout(function () {
                    $('.item').hide();
                }, 1400);
            }
            ;
        } else {
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
            $('.item').show();
            timetoclock = 100;
            for (i = 0; i < 5; i++) {
                (function (index) {
                    setTimeout(function () {
                        $('.item__icon-block').eq(index).addClass('show');
                        $('.item__icon-block').eq(index).removeClass('hide');
                    }, timetoclock);
                })(i);
                timetoclock = timetoclock + 200;
            }
            ;
        }
    }
});

function showLines() {
    if ((wintop + winheight / 1.5) > linePos && lineAnimate == true && wintop < linePos) {
        $('.line-party').removeClass('line-not-ready');
        $('.mega-line').removeClass('line-not-ready');
        $('.text-party').addClass('text-ready');
    }
    phototop = $('.photo-star__collage').offset().top;
    photoheight = $('.photo-star__collage').height();
    worktop = $('.working__collage').offset().top;
    workheight = $('.working__collage').height();
    winheight = window.innerHeight;
    wintop = $(window).scrollTop();

    if ((wintop + winheight) > (phototop) && wintop < phototop + photoheight && (!$('.photo-star__collage_item').hasClass('go-animate'))) {
        $('.photo-star__collage_item').addClass('go-animate');
    } else if ((wintop + winheight) > (phototop) && wintop < phototop + photoheight) {
        return false;
    } else {
        $('.photo-star__collage_item').removeClass('go-animate');
    }

    if ((wintop + winheight) > (worktop) && wintop < worktop + workheight && (!$('.working__collage_item').hasClass('go-animate'))) {
        $('.working__collage_item').addClass('go-animate');
    } else if ((wintop + winheight) > (worktop) && wintop < worktop + workheight) {
        return false;
    } else {
        $('.working__collage_item').removeClass('go-animate');
    }
};

function showMobileLines() {
    if ($(window).width() < 576) {
        if ((wintop + winheight / 1.5) > $('.dynamics__graph-mobile').offset().top && lineAnimate == true && wintop < $('.dynamics__graph-mobile').offset().top) {
            $('.dynamics__graph-mobile line').removeClass('not-ready');
            $('.dynamics__graph-mobile .mob-party').removeClass('line-not-ready');
            $('.dynamics__graph-mobile .go-text').addClass('text-ready');
        }
    }
}

$('.about-marketing__button').click(function () {
    formGo()
});
$('.call-back .closed').click(function () {
    $('.call-back').addClass('hide');
    $('.call-back').removeClass('show');
    setTimeout(function () {
        $('.call-back').removeClass('hide');
    }, 1000);
});

$('.scroll-weed-everyday').click(function (event) {
    if ($('.menu-fixed__other').hasClass('disabled')) {
        return false;
    }
    $('.menu-fixed__other').addClass('disabled');
    event.preventDefault();
    var id = $(this).data('href')
        , top = $(id).offset().top;
    $('body,html').animate({
        scrollTop: top
    }, 1000);
    setTimeout(function () {
        $('.menu-fixed__other').removeClass('disabled');
    }, 1100);
    if (id == '#dynamic') {
        setTimeout(function () {
            showLines();
        }, 1100);
    }
});
$(document).scroll(function () {
    showLines();
    showMobileLines();
    wintop = $(window).scrollTop();
    if ($('.header').height() > wintop) {
        $('.header__music').removeClass('fixed');
    } else {
        $('.header__music').addClass('fixed');
    }
});


//show video
$('.header__play').click(function () {
    $('html').addClass('overfloff');
    $('.video-modal').addClass('show');
    if ($('.header__music').hasClass('playing')) {
        $('.header__music').toggleClass('playing');
        music.pause();
        clearInterval(intervalloh);
    }
});
$('.header__watch').click(function () {
    $('html').addClass('overfloff');
    $('.video-modal').addClass('show');
    if ($('.header__music').hasClass('playing')) {
        $('.header__music').toggleClass('playing');
        music.pause();
        clearInterval(intervalloh);
    }
});

$('.video-modal__closed').click(function () {
    $('html').removeClass('overfloff');
    $('.video-modal').removeClass('show');

    var video = $(".video-modal iframe").attr("src");
    $(".video-modal iframe").attr("src", "");
    $(".video-modal iframe").attr("src", video);
});

$(document).mousedown(function (e) {
    var div = $(".video-modal__container");
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        $('html').removeClass('overfloff');
        $('.video-modal').removeClass('show');
        var video = $(".video-modal iframe").attr("src");
        $(".video-modal iframe").attr("src", "");
        $(".video-modal iframe").attr("src", video);
    }
});

$(function () {
    $('.input--tel').mask('+7(999)999-99-99');

    $('.input--tel').on('focus', function () {
        if ($(this).val().length === 0) {
            $(this).val('+7(');
        }
    });
    $('.input--tel').on('focusout', function () {
        if ($(this).val().length <= 4) {
            $(this).val('');
        }
    });

    $('.input--tel').keydown(function (e) {
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
            (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            return;
        }

        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
});

$('form').submit(function (e) {
    e.preventDefault();
    var data_info = $(this).serialize();
    var phone = $(this).find('.input--tel');
    if (phone.val().length != 16) {
        alert('Введите номер телефона полностью');
    } else {
        $.ajax({
            type: "POST", //Метод отправки
            url: "/forms/sendmail.php", //путь до php фаила отправителя
            data: data_info,
            success: function () {
                successGo();
                setTimeout(function () {
                    successGo();
                }, 1500);
            },
            error: function () {
                successGo();
                setTimeout(function () {
                    successGo();
                }, 1500);
            },
        });
    }
});