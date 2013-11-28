/**
 * Created by 松松 on 13-11-21.
 */



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
        defaultTab: 0,
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