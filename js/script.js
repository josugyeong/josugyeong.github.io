'use strict';

var $desc = $('.tab__desc');
        var $tabMenu = $('.tab__menu button');
        
        // 초기 세팅
        $desc.hide();
        $desc.eq(0).show();

        // tab 메뉴를 클릭하면 해당하는 desc를 보여줘
        $tabMenu.click(function(){

            var idx = $(this).index();
            // console.log(idx);
            $tabMenu.removeClass('selected');
            $(this).addClass('selected');
            $desc.hide();
            $desc.eq(idx).slideDown();
            
        });

