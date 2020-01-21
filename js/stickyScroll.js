window.onload=function() {
    
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top -134
        }, 500);
        return false;
    });
    
    function em(input) {
        var emSize = parseFloat($("div").css("height"));
        return (emSize * input);
    }

    var $navBar = $('#nav-wrapper');
    var navPos = $navBar.offset().top;

    $(window).scroll(function() {
        var scrollPos = $(this).scrollTop() + 104.16;
        if (scrollPos >= navPos) {
            $navBar.addClass('fixed');
        } else {
            $navBar.removeClass('fixed');
        }
    });
        
    var $menu = $('#main-nav'),
        $menulink = $('.mobile-toggle'),
        $menu_a = $('#main-nav a');

        $menulink.click(function() {
            $menulink.toggleClass('active');
            $menu.toggleClass('active');
            return false;
        });
        $menu_a.click(function(event) {
            $menu.removeClass('active');
        });
    
    TweenMax.set('#header_wrap', {display: 'block'});
    TweenMax.set('#work', {display: 'block'});
    
};