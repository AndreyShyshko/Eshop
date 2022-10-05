define([
    'jquery'
], function ($) {
    'use strict';

    $.widget('Eshop.bannerChanger', {

        _create: function () {
            let $links = $('div#link'), counter = 0;
            let interval;
            interval = setInterval(function(){
                $links.removeClass('level');
                $links.eq(counter++ % $links.length).addClass('level');
                if(counter == 2) {
                    counter = 0;
                }
                console.log(counter);
            }, 5000);
        }
    })

    return $.Eshop.bannerChanger;
});
