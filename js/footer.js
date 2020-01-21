var pageIndex_ary = ['index.html', 'vm-ware.html', 'aon.html', 'bw.html', 'adobe.html', 'ikea.html', 'ch-hosp.html', 'idg.html', 'index.html#other_work'];
    function goPrev(){
        location.href= pageIndex_ary[pageIndex-1];
    }
    function goNext(){
        location.href= pageIndex_ary[pageIndex+1];
    }

var workIndex_ary = ['index.html', 'print.html', 'video.html', 'interactive.html', 'ebook.html', 'vrar.html', 'email.html', 'tradeshow.html', 'presentation.html', 'special.html', 'index.html#abt_t'];
    function goPrevWrk(){
        location.href= workIndex_ary[workIndex-1];
    }
    function goNextWrk(){
        location.href= workIndex_ary[workIndex+1];
    }

function goTop(){
    $('html, body').animate({ scrollTop: 0 }, 500);
}