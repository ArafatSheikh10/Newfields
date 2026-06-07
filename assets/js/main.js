(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {




        // AOS Init
        AOS.init({
            once: true,
            duration: 1500,
        });


        // Nav Menu Active 
        $('.header__menu ul li a').click(function(){
            $('li a').removeClass("active");
            $(this).addClass("active");
        });


        // Counter Up Activation
        $('.counter').counterUp({
          delay: 10,
          time: 2000
        });






    }); //---document-ready-----



}(jQuery));


