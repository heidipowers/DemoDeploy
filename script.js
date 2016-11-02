$(document).ready(function() {
    console.log("sledgehammer...");

    var $work = $('.work');
    var $text = $('.text');
    $work.hover(
        function() {
            $(this).find($text).toggle();
        }
    );


    //Thanks Chris Coyier! http://codepen.io/chriscoyier/pen/dpBMVP
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            $('nav li').removeClass('active');
            $(this).parent('li').addClass('active');
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 800);
                return false;
            }
        }
    });

    function onScroll(event) {
        var previousScrollTop = 0,
            scrollLock = false;
        var scrollPos = $(document).scrollTop() + $(window).height() / 2.5;
        $('nav a').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('nav li').removeClass("active");
                currLink.parent('li').addClass("active");
                if (scrollLock) {
                    $(window).scrollTop(previousScrollTop)
                }
                previousScrollTop = $(window).scrollTop();
            } else {
                currLink.removeClass("active");
            }
        });
    }

    $(document).on("scroll", onScroll);

    var toggle = function(element) {
        $('img.off').css({ 'opacity': element ? '1' : '0' });
    }

    function flicker() {
        toggle(Math.random() > 0.8), setTimeout(flicker, 100 * Math.random() * 0.2);
    };
    flicker();

    //end file
})
