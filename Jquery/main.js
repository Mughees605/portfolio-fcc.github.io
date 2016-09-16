$(document).ready(function(){
    $('.nav-pills li').addClass('pull-right');
    $('body .nav-pills').on('click','.sla',function(){
    $('.pageOne').slideUp('slow');
    $('.pageTwo').slideDown('slow');
    })
     $('body .nav-pills').on('click','.slh',function(){
    $('.pageOne').slideDown('slow');
    })
})