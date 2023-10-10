




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