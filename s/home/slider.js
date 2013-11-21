/**
 * Created by 松松 on 13-11-21.
 */



KISSY.use("event, switchable, anim", function (S, Event, Switchable, Anim) {
    //轮播
    //top hover
    S.one('#J_top').on('mouseenter mouseleave', function (e) {
        var type = e.type,
            target = S.one(e.currentTarget);
        if (type == 'mouseenter') {
            target.addClass('top-hover');
        } else {
            target.removeClass('top-hover');
        }
    });

    //top 回滚到头部的动画
    S.one('#J_top').on('click', function (e) {
        S.one(window).animate({
            scrollTop: 0
        }, 0.5, "easeOut");
    });
});
//新轮播

KISSY.use('gallery/slide/1.2/index', function (S, Slide) {
    var C = new Slide('slides', {
        //autoSlide:true,
        effect: 'hSlide',
        autoSlide: true,
        timeout: 3000,
        speed: 700,
        invisibleStop: true,
        eventType: 'mouseover',
        triggerDelay: 0,
        carousel: true,
        defaultTab: 5,
        selectedClass: 'current',
        //	carousel:true,
        touchmove: true
    });
    S.one('#J_pre').on('click', function (e) {
        e.halt();
        C.previous();
        if (C.autoSlide) {
            C.stop().play();
        }
    });
    S.one('#J_next').on('click', function (e) {
        e.halt();
        C.next();
        if (C.autoSlide) {
            C.stop().play();
        }
    });
    S.all('#slides img').on('click', function () {
        // alert(22);
    });

});