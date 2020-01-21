var menu_mOpen = false;

function swapMenu_m(){
    if(menu_mOpen == false){
        drawNav_m();
    }
    else{
        eraseNav_m();
    }
}

function drawNav_m(){
    menu_mOpen = true;
    
    $('#nav_m').slideDown(400);
    $('#prf_m').delay(200).show("slide", { direction: "right" }, 400);
    $('#abt_m').delay(400).show("slide", { direction: "right" }, 400);
    $('#cnt_m').delay(600).show("slide", { direction: "right" }, 400);
    $('#soc_m').delay(800).show("slide", { direction: "right" }, 400);
    $('#x_m').delay(1000).show("slide", { direction: "right" }, 400);
    
    $('#menu_m').hide();
    $('#menu_x_m').show();
}

function eraseNav_m(){
    menu_mOpen = false;
    $('#x_m').slideUp(100);
    $('#soc_m').delay(120).slideUp(300);
    $('#cnt_m').delay(140).slideUp(100);
    $('#abt_m').delay(160).slideUp(100);
    $('#prf_m').delay(180).slideUp(100);
    $('#nav_m').delay(200).slideUp(100);
    $('#menu_x_m').hide();
    $('#menu_m').show();
}