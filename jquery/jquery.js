//팝업
$('.close').on('click', function (e) {
    e.preventDefault();
    $('.popup').hide();
})


// 햄버거 메뉴
$('nav .menu').hide();

let spanF = $('.ham span:first-child');
let spanL = $('.ham span:last-child');
let openClose = false;
$('nav .ham').on('click', function () {
    if (!openClose) {
        $('nav .menu').show();
        spanF.addClass('active');
        spanL.addClass('active');
        $('span.sRight').addClass('active');
    } else {
        $('nav .menu').hide();
        spanF.removeClass('active');
        spanL.removeClass('active');
        $('span.sRight').removeClass('active');
    }
    openClose = !openClose;
})

//이미지 호버
const img = $('.img');

img.on('mouseenter', function () {
    $(this).find('.img-hover').fadeIn(400);
})
img.on('mouseleave', function () {
    $(this).find('.img-hover').fadeOut(400);
})

//스크롤 lock구현
const hamBtn = $('.ham');

hamBtn.on('click', function(){
    
})