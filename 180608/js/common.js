const button_test = document.querySelectorAll('.button');
const button = $('.button');
console.log(button);

button.on('click', function(){
    const ele = $(this)
    ele.css({
        backgroundColor: 'red'
    })
})

$('.addtag').on('click',function(){
    console.log('test')
    $('body').append('<p>わーい</p>')
})

const content = $('.content');
const content_button = $('.content > .content_button');

console.log(content_button, content)

content_button.on('click',function(){
    content.toggleClass('on')
})


//スクロールのjsについて
//var content1 = $('#content1')
//var content1Top = content1.offset().top
//
//$(window).on('scroll', function() {
//const scrollY = window.scrollY
//
//if(scrollY > content1Top && content1.attr('class') !== 'on') {
//console.log('test')
//content1.addClass('on')
//} else if(scrollY < content1Top) {
//content1.removeClass('on')
//}
//})