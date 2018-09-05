var red = document.querySelectorAll('.poloska');
var doit, intervalloh, linePos = $('.mega-line').offset().top, lineAnimate = true, phototop, photoheight, wintop, winheight, worktop, workheight;
$('.header__music .header__music_sound').click(function () {

    $('.header__music').toggleClass('playing'); //

    doit = $('.header__music').hasClass('playing'); //true / false

    const min = 0.3, max = 0.8;
    var animationDuration = 0.6;

    if(doit) {
        red.forEach(function (element) {
            function setProperty(duration, size) {
                element.style.setProperty('--animation-time', duration + 's');
                element.style.setProperty('--animation-size', size);
            }
            intervalloh = setInterval(function () {
                if (doit){
                animationDuration = Math.random() * (max - min) + min;
                animationSize = Math.random() * (max - min) + min;
                setProperty(animationDuration, animationSize);}}, animationDuration * 1000);
            intervalloh;
        });
    } else {
        clearInterval(intervalloh);
    }



});


//burger

$('document').ready(function () {
    var trigger = $('#hamburger'),
        isClosed = false;

    trigger.click(function () {
        burgerTime();
    });

    function burgerTime() {
        if (isClosed == true) {
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }
});

$(document).scroll(function (e) {
    if(($(window).scrollTop()+600)>linePos && lineAnimate==true) {
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

    if((wintop+winheight)>(phototop) && wintop<phototop+photoheight && (!$('.photo-star__collage_item').hasClass('go-animate'))) {
        $('.photo-star__collage_item').addClass('go-animate');
        console.log('123');
    } else if ((wintop+winheight)>(phototop) && wintop<phototop+photoheight) {
        return false;
    } else {
        $('.photo-star__collage_item').removeClass('go-animate');
    }

    if((wintop+winheight)>(worktop) && wintop<worktop+workheight && (!$('.working__collage_item').hasClass('go-animate'))) {
        $('.working__collage_item').addClass('go-animate');
        console.log('123');
    } else if ((wintop+winheight)>(worktop) && wintop<worktop+workheight) {
        return false;
    } else {
        $('.working__collage_item').removeClass('go-animate');
    }
});