var isClosed = false;
$('document').ready(function () {

    var trigger = $('#hamburger');

    trigger.click(function () {
        if(trigger.hasClass('disabled')) {
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
            for(i = 5; i >= 0; i--) {
                (function (index){
                    setTimeout(function () {
                        $('.item__icon-block').eq(index).addClass('hide');
                        $('.item__icon-block').eq(index).removeClass('show');
                    }, timetoclock);
                })(i);
                timetoclock = timetoclock+200;
                setTimeout(function () {
                    $('.item').hide();
                }, 1400);
            };
        } else {
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
            $('.item').show();
            timetoclock = 100;
            for(i = 0; i < 5; i++) {
                (function (index){
                    setTimeout(function () {
                        $('.item__icon-block').eq(index).addClass('show');
                        $('.item__icon-block').eq(index).removeClass('hide');
                    }, timetoclock);
                })(i);
                timetoclock = timetoclock+200;
            };
        }
    }
});