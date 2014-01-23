$(document).ready(function () {
    $('#navbar').affix();
    $('.dropdown-toggle').dropdown();
    $('[data-toggle=tooltip]').tooltip();
    function parallax() {
        var scrolled = $(window).scrollTop();
        if (scrolled >= 0) {
            $('.container-wrapper-home .summary').css('top', (scrolled * 0.5) + 'px');
            var opacity = scrolled / 100;
            var opacity = opacity / 2;
            $('.container-wrapper-home .summary').css('opacity', 1 - opacity);
        }
    }
    var x = $(window).width();
    if (x > 767) {
        $(window).scroll(function (e) {
            parallax();
        });
    }
});

$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});