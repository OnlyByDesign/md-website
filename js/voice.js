/*jslint browser: true*/
/*global $, jQuery*/

jQuery(document).ready(function ($) {

//Variables
var snd1;
var snd2;
var sndToggle = 1;

//Functions
$(document).ready(function() {
    svgeezy.init(false, 'png');
    init();    
});

function init(){    
    splashInitAnim();
    
    $(window).on("load", function () {
        var headerHeight = $('#header_wrap').height();        
        var urlHash = window.location.href.split("#")[1];
        if(urlHash !== undefined){};
        $('html,body').animate({scrollTop: $('#' + urlHash).offset().top-headerHeight}, 100);
    });
    
    //homeInitAnim();
    snd1 = document.getElementById("snd1");
    snd2 = document.getElementById("snd2");
    snd1.volume = .3;
    snd2.volume = .3;
    
    var btnOutAnim = new TimelineMax();
    btnOutAnim.to(id, .4, {backgroundColor: 'rgba(193,198,200,.8)', delay: .25});
}

//Splash Animations
function splashInitAnim(){
    centerVertDiv('#logo_wrap');
    homeInitAnim();
    $('#logo_wrap').fadeTo(200, 1, function() {
        setTimeout(function(){$('#splash').hide();}, 1400);
        TweenMax.fromTo('#slide3', .6, {height: '0%'}, {height: '100%', delay: .75, onComplete: function(){
            TweenMax.fromTo('#slide3', .5, {height: '100%', top: '0%'}, {height: '0%', top: '100%'});
            $('#slide_white').fadeOut(0);
            $('#logo_wrap').hide(0);
        }});
        TweenMax.fromTo('#slide2', .5, {height: '0%'}, {height: '100%', delay: .9, onComplete: function(){
            TweenMax.fromTo('#slide2', .5, {height: '100%', top: '0%'}, {height: '0%', top: '100%'});
        }});
        TweenMax.fromTo('#slide1', .4, {height: '0%'}, {height: '100%', delay: 1, onComplete: function(){
            TweenMax.fromTo('#slide1', .5, {height: '100%', top: '0%'}, {height: '0%', top: '100%', onComplete: function(){TweenMax.set('#splash_wrap', {height: '0%', display: 'none'})}});
        }});
    });
    
    $(window).resize(function(){
        centerVertDiv('#splash');
        if ($(window).width() > 480) {
            initBkg();
        }
    });
}

//Home Animations
function homeInitAnim(){
    //Set Hom
    TweenMax.set('#header_wrap', {display: 'block'});
    TweenMax.fromTo('#header_wrap', 1, {opacity: 0}, {opacity:1, delay: 1});
    TweenMax.set('#hom', {display: 'block'});
        
    if ($(window).width() > 480) {    
        initBkg();
    }
    else {
        initBkg_m();
    }

}

//Center div vertically on the screen
function centerVertDiv(id){
    var centerHeight = ($(window).height() - $(id).height())/2.2;
    $(id).css("top", centerHeight);
}

//Initiate Bkg
function initBkg(){
    /* $('#reel').vidbg({
      'mp4': 'media/hom/marc.mp4',
      'webm': 'media/hom/marc.mp4',
    }, {
        volume: 0,
        playbackRate: 1,
        muted: true,
        loop: true,
        position: '50% 50%',
        resizing: true,
        overlay: false,
        overlayColor: '#000',
        overlayAlpha: '0.3',
    });*/
} 

//Navigation Slide Down
function navSlideTo(id){
    var headerHeight = $('#header_wrap').height();
    $('html,body').animate({scrollTop: $('#'+id).offset().top-headerHeight}, 500);
}
function navSlideTo_M(id){
    var headerHeight = $('#header_height').height();
    $('html,body').animate({scrollTop: $('#'+id).offset().top-headerHeight}, 500);
    eraseNav_m();
}

//Draw Reel
$('#drawReel').on('click touch touchstart', function drawReel(){
    setTimeout(function(){$('#reel video').remove()}, 800);
    $('#vim_reel').slideDown(800);
    $('#reel').slideUp(800);
    var reelPlayer = new Vimeo.Player('dlreel');
        reelPlayer.play();
});
$('#reelClose').on('click touch touchstart', function eraseReel(){
    $('#reel').slideDown(800);
    $('#vim_reel').slideUp(800);
    var reelPlayer = new Vimeo.Player('dlreel');
        reelPlayer.pause();
    
    if ($(window).width() > 480) {    
        /* $('#reel').vidbg({
          'mp4': 'media/hom/marc.mp4',
          'webm': 'media/hom/marc.mp4',
          'poster': 'media/hom/reel_still.jpg',
        }, {
            volume: 0,
            playbackRate: 1,
            muted: true,
            loop: true,
            position: '50% 50%',
            resizing: true,
            overlay: false,
            overlayColor: '#000',
            overlayAlpha: '0.3',
        }); */
    }
});

//Reel Rollover
function reelBtnOver(id){ 
    if(sndToggle == 1){
        snd1.play();
        sndToggle = 2;
    }
    else{
        snd2.play();
        sndToggle = 1;
    }
    
    var btnOverAnim = new TimelineMax();
    btnOverAnim.fromTo(id, .2, {backgroundColor: 'rgba(80,80,80,.9)', left: 0}, {backgroundColor: 'rgba(120,120,120,.9)', left: '-3%', ease: Power1.easeInOut})
        .to(id, .5, {backgroundColor: 'rgba(255,163,0,.9)', left: 0, ease: Power3.easeInOut});
}
function reelBtnOut(id){
    var btnOutAnim = new TimelineMax();
    btnOutAnim.to(id, .4, {backgroundColor: 'rgba(193,198,200,.8)', delay: .25});
}

//Work Rollover
function btnOver(id){
    if(sndToggle == 1){
        snd1.play();
        sndToggle = 2;
    }
    else{
        snd2.play();
        sndToggle = 1;
    }
    
    var btnOverAnim = new TimelineMax();
    btnOverAnim.set(id, {transformOrigin: '50% 50% 50px', perspectiveOrigin: '50% 50%', perspective:1200});
    btnOverAnim.fromTo(id, .2, {backgroundColor: 'rgba(80,80,80,.9)', rotationY: 0}, {backgroundColor: 'rgba(80,80,80,.9)', rotationY: 7, ease: Power1.easeInOut})
        .to(id, .5, {backgroundColor: 'rgba(255,164,0,.9)', rotationY: 0, ease: Power3.easeInOut});
}

function btnOut(id){
    var btnOutAnim = new TimelineMax();
    btnOutAnim.to(id, .4, {backgroundColor: 'rgba(193,198,200,.8)', delay: .25});
}

function showHistory(){
    $('#contact').slideUp(600);
    $('#history').slideDown(400);
    calDocOffset();
    $('#history_iframe').attr('src', 'http://www.marcolina.com/25years')
    $("html, body").animate({ scrollTop: $('#contact_bkg').offset().top -docOffset }, 1000);
}

function hideHistory(){
    $('#contact').slideDown(400);
    $('#history').slideUp(600);
    var iframeSrc = $('#history_iframe').attr('src');
    setTimeout(function(){$('#history_iframe').attr('src', iframeSrc)}, 1000);
}

function delayStart(){
    setTimeout(function(){
        document.getElementById('abt_video').play();
    }, 5000);
}

function autoPlay() {
    $('#abt_video').get(0).play();
}
    
});