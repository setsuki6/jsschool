$.parallax({
    debugMode: true
});

$('.box2').parallaxTiming({
    start: function(e) {
        e.target.addClass('on')
    },
    end: function(e) {
        e.target.removeClass('on')
    },
})

$('.box3').each(function(){
    $(this).parallaxSpeed({
        style: 'top',
        speed: 2,
        fixScrollPosition: 300
    })
})

for(var i = 0 ; i < 100;i++){
    $('.boxes').append('<div class="box3"></div>')
    $('.box3').eq(i).css({
        top: Math.random() * 1000 + 'px',
        left: Math.random() * 1000 + 'px',
        backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.random()})`
    })
    $('.box3').eq(i).parallaxSpeed({
        style: ['top','left'],
        speed: [Math.random() * 3 - 1,Math.random() * 3 - 1],
        fixScrollPosition: 0
    })
}



$('.box').parallaxFit({
    start: 0,
    end: 1000,
    fromStyle: {
        top: '100px',
        left: '10px'
    },
    toStyle: {
        top: '200px',
        left: '200px'
    },
    easing: 'easeOutBounce',
    
    
    motion1Start: 1000,
    motion1End: 2000,
    motion1FromStyle: {
        top: '200px',
        left: '200px',
        backgroundColor:'rgba(255,0,0,1)',
        transform: 'scale(1)'     
    },
    motion1ToStyle: {
        top: '300px',
        left: '300px',
        backgroundColor:'rgba(0,255,0,0.5)',
        transform: 'scale(2)'  
    },
    motion1Easing: 'easeOutBounce',
    
})
