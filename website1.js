$(document).ready(function(){
    $('.navdesign').on('click','a',function(e){
        e.preventDefault();
        $(document).off("scroll");
        $('html,body').stop().animate({scrollTop:($(this.hash).offset().top)-50},'slow');
        });
    $('.drop').mouseenter(function(event){
        $('.hidden').slideDown();
    });
    $('.drop').mouseleave(function(event){
        $('.hidden').slideUp();
    })
        $('.magic').stop().animate({top:'0px',opacity:'1'},{duration:1000});
        $('.startbut').stop().animate({marginTop:'260px',opacity:'1'},{duration:1000});
var h= window.innerHeight;
var i2= $('.img2').offset();
$(window).on('scroll',check_if_in_view);
$(window).trigger('scroll');
function check_if_in_view()
{
    var scroll = $(window).scrollTop();
    if(scroll>50)
    {
        $('nav').addClass('bgc');
        $('.blood').addClass('change');
    }
    if(scroll<50)
    {
        $('nav').removeClass('bgc');
        $('.blood').removeClass('change');
    }
    if(scroll+h>i2.top+70)
    {
        $('.img2').addClass('animate');
        $('.righttext').addClass('rightanimate');
    }
    if (scroll+h>$('.divider').offset().top)
    {
        $('.divider').addClass('dividernew');
    }
}
$('.workimg').mouseenter(function(event){
    $(this).addClass('imganim');
    $('.add1').addClass('applyline1');
    $('.add2').addClass('applyline2');
});
$('.workimg').mouseleave(function(event){
    $(this).removeClass('imganim');
    $('.add1').removeClass('applyline1');
    $('.add2').removeClass('applyline2');
});
});