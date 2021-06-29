'use strict';

/* ================= 안내 모달 start ===================== */
$('.notice-modal__close').click(function(){
        $('#notice').hide();
    })
    $('#notice').click(function(e){
        if(e.target === e.currentTarget){
            $(this).hide();
        }
    })
    /* ================= 안내 모달 end ===================== */


    /* ================= change theme ===================== */
    $('#buttonDark').click(function(){
        $(this).hide();
        $('body').addClass('dark-theme');
        $('#buttonLight').show();
    })
    $('#buttonLight').click(function(){
        $('body').removeClass('dark-theme');
        $('#buttonDark').show();
        $(this).hide();
    })

// 컨트롤러 생성
$(function(){
// controller 생성
var controller = new ScrollMagic.Controller();
var logoImg = TweenMax.to('.logo-image', 1, {
        x: 10,
}); 
var leftTitleTween = TweenMax.to('.leftTitle', 1, {
        x: -300,
}); 
var rightTitleTween = TweenMax.to('.rightTitle', 1, {
        // x: 100,
        // autoAlpha: 0,
        rotation: 450,
        x: 70,
        y: 100
}); 
var center = TweenMax.to('.center', 1, {
        autoAlpha: 0,
        scale: 0
}); 
var greeting = TweenMax.to('.greeting', 1, {
        autoAlpha: 1,
        scale: 1.5,
        // y: -200
}); 
var greeting2 = TweenMax.to('.greeting', 1, {
        autoAlpha: 0,
        scale: 1.5,
        // y: -200
}); 

var logoImg = new ScrollMagic.Scene({
        triggerElement: 'header', /* 시작 위치 */
        triggerHook: 0, /* 0 ~ 1:  */
        offset: 0, /* start 위치 지정 */
        duration: "300%" /* 화면의 100% 높이 만큼 실행 */
}).setTween(logoImg)
.addTo(controller)
// .addIndicators({
//     name: '왼쪽 텍스트'
// })

var leftTitle = new ScrollMagic.Scene({
        triggerElement: 'header', /* 시작 위치 */
        triggerHook: 0, /* 0 ~ 1:  */
        offset: 0, /* start 위치 지정 */
        duration: "300%" /* 화면의 100% 높이 만큼 실행 */
}).setTween(leftTitleTween)
.addTo(controller)
// .addIndicators({
//     name: '왼쪽 텍스트'
// })
var rightTitle = new ScrollMagic.Scene({
        triggerElement: 'header',
        triggerHook: 0, 
        offset: 0,
        duration: "100%" 
}).setTween(rightTitleTween)
.addTo(controller)
// .addIndicators({
//     name: '오른쪽 텍스트'
// })
var center = new ScrollMagic.Scene({
        triggerElement: 'header', 
        triggerHook: 0, 
        offset: 0, 
        duration: "100%" 
}).setTween(center)
.addTo(controller)
// .addIndicators({
//     name: '비행기'
// })
var greeting = new ScrollMagic.Scene({
        triggerElement: 'header', 
        triggerHook: 0, 
        offset: 0, 
        duration: "100%" 
})
.setTween(greeting)
.addTo(controller)
// .addIndicators({
//     name: '인사'
// })
var greeting = new ScrollMagic.Scene({
        triggerElement: 'header', 
        triggerHook: 0, 
        offset: 1000, 
        duration: "100%" 
})
.setTween(greeting2)
.addTo(controller)
// .addIndicators({
//     name: '인사 end'
// })


})

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

$(document).ready(function(){
$('.main__banner').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
});

// custom slider
$('.custom__slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear'
});
});

var $modal = $('.modal');
        var $overlay = $('.overlay');
        var $btn = $('.detail_modal');
        var $btnClose = $('.close__modal');
        var $modalImg = $('#modalImg');
        $overlay.hide();
        $btn.click(function(){
            var imgSrc = $(this).attr('data-img');
            console.log(imgSrc)
            $modalImg.attr('src', imgSrc);
            $overlay.fadeIn();
        })
        $btnClose.click(function(){
                $overlay.fadeOut();
            })
            $overlay.click(function(e){
                if(e.target == e.currentTarget){
                    $(this).fadeOut();
            }
        });

              $('.slick-container').slick({
                infinite: true, //양방향 무한 모션
                speed:300, // 슬라이드 스피드
                autoplay: true, //자동플레이 유무( false시 자동플레이 안됨 )
                autoplaySpeed:4000, // 자동플레이 스피드
                slidesToShow: 3, //한 화면에 보여줄 아이템수
                slidesToScroll: 3 // 한번에 슬라이드 시킬 아이템 개수
              });
              $(function(){
                // 이미지를 클릭했을때
                var $portfolioImg = $('.portfolio__img');
                var $overlay = $('.overlay');
                $portfolioImg.click(function(){
                    // 모달이 뜨고 이미지를 출력
                    var src = $(this).children('img').attr('src');
                    var $modlaImg = $('.modal img');
                    console.log(src);
                    // modal에 있는 img 엘리먼트 src에 이미지 주소를 세팅
                    $modlaImg.attr('src', src);
                    $overlay.show();
            })
                $overlay.click(function(e){
                        console.log(e);
                        // target은 내가 클릭한 객체
                        // currentTarget은 이벤트가 발생한 객체
                        if(e.target == e.currentTarget){
                            $(this).fadeOut();
                        }
                    })
            })