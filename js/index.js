var red = document.querySelectorAll('.poloska');

const min = 0.3, max = 0.8;
var animationDuration = 0.6;


red.forEach(function(element) {
    function setProperty(duration, size) {
        element.style.setProperty('--animation-time', duration + 's');
        element.style.setProperty('--animation-size', size);
    }

    setInterval(function () {
        animationDuration = Math.random() * (max - min) + min;
        animationSize = Math.random() * (max - min) + min;
        setProperty(animationDuration, animationSize);
    }, animationDuration * 1000);
});

$('.header__music .header__music_sound').click(function () {
    $('.header__music').toggleClass('playing');
});