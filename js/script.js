'use strict';

var $desc = $('.tab__desc');
        var $tabMenu = $('.tab__menu a');
        
        $desc.hide();
        $desc.eq(0).show();

        $tabMenu.click(function(){

            var idx = $(this).index();
            $tabMenu.removeClass('selected');
            $(this).addClass('selected');
            $desc.hide();
            $desc.eq(idx).slideDown();
        });