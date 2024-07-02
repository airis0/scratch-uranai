$(function(){
    var canvas = document.getElementById('parent');
    var canvas2 = document.getElementById('child');
    if(!canvas || !canvas.getContext) return false;
    if(!canvas2 || !canvas2.getContext) return false;
    var ctx = canvas.getContext('2d');
    var ctx2 = canvas2.getContext('2d');

    var startX,
        startY,
        x,
        y,
        lot,
        borderWidth = 10,
        isDrawing = false;
        lotString = null;

    ctx.font = 'bold 150px Verdana';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'red';
    
    lot = Math.floor(Math.random() * 6);
    if(lot == 6){
        lotString = "大吉";
    }else if(lot == 5){
        lotString = "中吉";
    }else if(lot == 3){
        lotString = "小吉";
    }else if(lot == 0){
        lotString = "吉";
    }else if(lot == 1){
        lotString = "末吉";
    }else if(lot == 2){
        lotString = "凶";
    }else{
        lotString = "大凶";
    }
    ctx.fillText(lotString, 200, 200, 200);
    ctx.strokeText(lotString, 200, 200, 200);

    ctx2.fillStyle = "#999";
    ctx2.fillRect(0,0, canvas.width, canvas.height);
    
    $('#child').mousedown(function(e) {
        isDrawing = true;
        startX = e.pageX - $(this).offset().left - borderWidth;
        startY = e.pageY - $(this).offset().top - borderWidth;
        })
        .mousemove(function(e) {
            if(!isDrawing) return;
            x = e.pageX - $(this).offset().left - borderWidth;
            y = e.pageY - $(this).offset().top - borderWidth;
            ctx2.beginPath();
            ctx2.moveTo(x, y);
            ctx2.clearRect(x,y,20,20);
            startX = x;
            startY = y;
        })
        .mouseup(function(e){
            isDrawing = false;
        })


    canvas2.addEventListener('touchstart', function(e) {
        isDrawing = true;
        startX = e.changedTouches[0].pageX - $(this).offset().left - borderWidth;
        startY = e.changedTouches[0].pageY - $(this).offset().top - borderWidth;
        })
        canvas2.addEventListener('touchmove', function(e) {
            if(!isDrawing) return;
            x = e.changedTouches[0].pageX - $(this).offset().left - borderWidth;
            y = e.changedTouches[0].pageY - $(this).offset().top - borderWidth;
            ctx2.beginPath();
            ctx2.moveTo(x, y);
            ctx2.clearRect(x,y,20,20);
            startX = x;
            startY = y;
        })
        canvas2.addEventListener('	touchend', function(e) {        
            isDrawing = false;
        })
    
});

$(function () {
    $('.js-close').click(function () {
        $('#overlay, .modal-window').fadeOut();
    });
});

window.onload = function() {
    $('#overlay, .modal-window').fadeIn();
}

