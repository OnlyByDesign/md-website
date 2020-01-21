window.onload=function() {
    
    window.playVideo1 = function(){
		window.wirewax.playerId = "frame1";
        window.wirewax.triggerEvent(window.wirewax.events.triggers.PLAY); 
    }
    window.pauseVideo1 = function(){
        window.wirewax.playerId = "frame1";
        window.wirewax.triggerEvent(window.wirewax.events.triggers.PAUSE); 
    }

    window.playVideo2 = function(){
        window.wirewax.playerId = "frame2";
        window.wirewax.triggerEvent(window.wirewax.events.triggers.PLAY); 
    }
    window.pauseVideo2 = function(){
        window.wirewax.playerId = "frame2";
        window.wirewax.triggerEvent(window.wirewax.events.triggers.PAUSE); 
    }

    window.playVideo3 = function(){
        window.wirewax.playerId = "frame3";
        window.wirewax.triggerEvent(window.wirewax.events.triggers.PLAY); 
    }
    window.pauseVideo3 = function(){
        window.wirewax.playerId = "frame3";
        window.wirewax.triggerEvent(window.wirewax.events.triggers.PAUSE); 
    }

    window.playVideo4 = function(){
        window.wirewax.playerId = "frame4";
        window.wirewax.triggerEvent(window.wirewax.events.triggers.PLAY); 
    }
    window.pauseVideo4 = function(){
        window.wirewax.playerId = "frame4";
        window.wirewax.triggerEvent(window.wirewax.events.triggers.PAUSE); 
    }

    window.playVideo5 = function(){
        window.wirewax.playerId = "frame5";
        window.wirewax.triggerEvent(window.wirewax.events.triggers.PLAY); 
    }
    window.pauseVideo5 = function(){
        window.wirewax.playerId = "frame5";
        window.wirewax.triggerEvent(window.wirewax.events.triggers.PAUSE); 
    }
    
}

/*jslint browser: true*/
/*global $, jQuery*/
$(document).ready(function() {
    $('#pauseTrigger1, #pauseTrigger2, #pauseTrigger3, #pauseTrigger4, #pauseTrigger5').on('click', function() {
       $('.trigger').show();
       $(this).hide();
    });    
});