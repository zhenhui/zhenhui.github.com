/**
 * Created by 松松 on 13-11-21.
 */
define(function (require, exports, module) {
    KISSY.use('dom,event', function (S, DOM, Event) {

        Event.on(window, 'hashchange', function () {
        })

        Event.fire(window, 'hashchange')

    })
})