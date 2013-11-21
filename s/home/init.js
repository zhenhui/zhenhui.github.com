/**
 * Created by 松松 on 13-11-21.
 */

define(function (require, exports, module) {
    require('./head')
    require('./footer')

    /*加载幻灯片轮播*/
    require('./slider')
    //开始加载作品

    var tpl = require('/works.tpl')
    var tr = tpl.split(/^[\s]*\n$/m)
    var S = KISSY

    var data = []
    S.each(tr, function (str) {
        var obj = {}
        var content = str.replace(/^[\r\n\s]+/gm, '').match(/(.*)(?:\s+)([\s\S]+)/)
        if (content) {
            var first = content[1].split(/[，,]/)
            if (first) {
                obj.fileName = first[0]
                obj.tag = S.filter(first.slice(1), function (item) {
                    return S.trim(item).length > 0
                })
            }
            obj.content = content[2]
            data.push(obj)
        }
    })

    var html = ''
    html = S.map(data, function (item) {
        return '<div class="demo1">' +
            '<div class="line"><!--分割线--></div>' +
            '<a href="work_2012.html#' + item.fileName + '" title="' + item.content.replace(/\s/gmi, '') + '">' +
            '<div class="pic1" style="background: url(/image/list/' + item.fileName + ')"></div></a>' +
            '</div>'
    })

    $('#demo-container').html(html)

})
