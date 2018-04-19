$(document).ready(function(){
    var menuCall = $('[toggle=eventCall]');
    menuCall.click(function(event){
        var targetEvent = $(this).attr('tar');
        if ($(this).attr('id') === 'over'){
            $(targetEvent).toggleClass('active');
            $(this).removeClass('active');
            $('body').toggleClass('overY-h');
        }else{
            if ($(this).attr('overEvent') === "true"){
                $('#over').attr('tar',targetEvent).toggleClass('active');
            }
            $(targetEvent).toggleClass('active');
            $('body').toggleClass('overY-h');
        }
    });
});
$(window).on('scroll', function(event) {
    var scrollValue = $(window).scrollTop();
    // if (scrollValue == settings.scrollTopPx || scrollValue > 70) {
    if (scrollValue > 70) {
        $('#header-top').addClass('header-top');
    }else{
        $('#header-top').removeClass('header-top');
    }
});