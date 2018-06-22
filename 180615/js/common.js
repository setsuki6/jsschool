function tab(option){
    var currentNum = 0;

    const tabMenuItem = option.el.find('.tabMenuItem');
    const tabItem = option.el.find('.tabItem');
    const prev = option.el.find('.prev');
    const next = option.el.find('.next');

    move(currentNum)
    tabMenuItem.on('click',function(){
        move($(this).index())
    })

    prev.on('click',function(){
        console.log('prev')
        move(currentNum - 1)
    })

    next.on('click',function(){
        console.log('next')
        move(currentNum + 1)
    })

    function move(num){
        if(option.isRoop){
        num = num < 0 ? tabMenuItem.length - 1 : num
        num = num > tabMenuItem.length - 1 ? 0 : num
        } else {
        num = Math.max(num,0)
        num = Math.min(num,tabMenuItem.length - 1)
        }
        currentNum = num
        tabMenuItem.removeClass('on')
        tabItem.removeClass('on')
        tabMenuItem.eq(currentNum).addClass('on')
        tabItem.eq(currentNum).addClass('on')
    }
}

tab({
    el: $('.tab1'),
    isRoop: true
})

tab({
    el: $('.tab2')
})