/**
 *
 * Created by 松松 on 13-11-21.
 */

KISSY.config({
    modules: {
        'sizzle': {
            alias: ['node']
        },
        'ajax': {
            alias: ['io']
        },
        'calendar': {
            alias: ['gallery/calendar-deprecated/1.0/']
        },
        'datalazyload': {
            alias: ['gallery/datalazyload/1.0/']
        },
        'switchable': {
            alias: ['gallery/switchable/1.3.1/']
        },
        'imagezoom': {
            alias: ['gallery/imagezoom/1.0/']
        },
        'waterfall': {
            alias: ['gallery/waterfall/1.0/']
        },
        'flash': {
            alias: ['gallery/flash/1.0/']
        }
    }
});


seajs.config({
    base: "/s/sea-modules/",
    vars: {
        locale: 'zh-cn'
    },
    paths: {
        s: "/s",
        sea: "/s/sea-modules"
    },
    alias: {
    }
});
