$(function() {
    $('.all-tab').click(function(){
        $('.all-tab').addClass('is-active');
        $('.web-tab, .graphic-tab, .other-tab').removeClass('is-active');
        $('.contents-web, .contents-graphic, .contents-other').show();
    });
    
    $('.web-tab').click(function(){
        $('.web-tab').addClass('is-active');
        $('.all-tab, .graphic-tab, .other-tab').removeClass('is-active');
        $('.contents-graphic, .contents-other').hide();
        $('.contents-web').show();
    });
    $('.graphic-tab').click(function(){
        $('.graphic-tab').addClass('is-active');
        $('.all-tab, .web-tab, .other-tab').removeClass('is-active');
        $('.contents-web, .contents-other').hide();
        $('.contents-graphic').show();
    });
    $('.other-tab').click(function(){
        $('.other-tab').addClass('is-active');
        $('.all-tab, .web-tab, .graphic-tab').removeClass('is-active');
        $('.contents-web, .contents-graphic').hide();
        $('.contents-other').show();
    });
    
});