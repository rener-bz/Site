
//Menu mobile
$(document).ready(function(){
$('.hamburger').on('click touchstart', function(e){  
    $('.hamburger').toggleClass('is-active');
    $('html').toggleClass('menu-active');
    e.preventDefault();
    });
});
//$(".main-title").typed({
//    strings: ["Desenvolvendo websites para pessoas.","Desenvolvendo lojas virtuais para pessoas.", "Desenvolvendo soluções para pessoas"],
//    typeSpeed: 0
//});