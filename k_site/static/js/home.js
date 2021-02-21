$(function () {
    setTimeout(function () {
        go_animation('.home_side_right .img_top', 'ease', 'X');
    }, 100);
    setTimeout(function () {
        go_animation('.home_side_right .img_bottom', 'ease', 'X');
        go_animation('.home_title', 'ease', 'Y');
        go_animation('.home_body .img_top', 'ease', 'Y');
    }, 500);
    setTimeout(function () {
        go_animation('.home_body .img_left','speed','X');
    }, 1300);
    setTimeout(function () {
        go_animation('.home_body .img_bottom','speed','Y');
    }, 1600);
    setTimeout(function () {
        go_animation('.home_body .img_right','speed','X');
    }, 1900);
    resizeHomeBody();
})
$(window).resize(function () {
    resizeHomeBody();
})

function resizeHomeBody(){
    console.log($('.home_body').css('width'));
    $('.home_body').css({'height':parseInt($('.home_body').css('width'))*0.37})
}