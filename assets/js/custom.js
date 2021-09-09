$(document).ready(function() {
    "use strict";

    $('.mobile-nav a').on('click', function() {
        $('.header-nav .primary-nav').slideToggle(300);
    });

    if($('.venobox').length > 0) {
        $('.venobox').venobox(); 
    }

    $('.faq .accordion .card-header .btn-link').on('click', function() {
        $('.faq .accordion .card-header .btn-link').children('i').removeClass('fa-minus').addClass('fa-plus');
        if($(this).hasClass('collapsed')) {
            $(this).children('i').removeClass('fa-plus').addClass('fa-minus');
        } 
    });

});