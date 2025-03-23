$( `#banner`).mousemove(function (e){
    let moveX = (e.pageX * -1 / 2) + 300;
    let moveY = (e.pageY * -1 / 3) + 120;
    $( `#drop-box`).css({
        'transform' : 'translate3d(' + moveX +'px, ' + moveY + 'px, 0)'
    });
});
