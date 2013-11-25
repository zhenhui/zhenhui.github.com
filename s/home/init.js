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
    var tr = tpl.split('====')
    var S = KISSY

    var originData = []
    S.each(tr, function (str) {
        var obj = {}
        var content = str.replace(/^[\r\n\s]+/gm, '').match(/(.*)(?:\s+)([\s\S]+)/)
        if (content) {
            var first = content[1].split(/[，,]/)
            if (first) {
                obj.address = first[0]
                obj.fileName = first[1]
                obj.tag = S.filter(first.slice(2), function (item) {
                    return S.trim(item).length > 0
                })
            }
            obj.content = content[2]
            originData.push(obj)
        }
    })

    var step = 5
    var currentPage = 0
    var currentTag = ''

    //过滤数据
    function filter() {
        if (currentTag === '') return originData
        return S.filter(originData, function (item) {
            if (S.indexOf(currentTag, item.tag) > -1) return item
        })
    }

    //渲染数据
    function render() {
        var data = filter()
        S.log('类目：' + currentTag + '共有' + data.length + '条数据')
        var html = S.map(data, function (item) {
            return '<div class="demo1">' +
                '' +
                '<a href="' + item.address + '" title="' + item.content.replace(/\s/gmi, '') + '">' +
                '<div class="pic1" style="background: url(/image/list/' + item.fileName + ')"></div></a><div class="line"><!--分割线--></div>' +
                '</div>'
        })

        if (currentPage <= 0) {
            currentPage = 0
            $('.J-prev').addClass('disabled')
        } else {
            $('.J-prev').removeClass('disabled')
        }

        if (currentPage >= Math.floor(data.length / step)) {
            currentPage = Math.floor(data.length / step)
            $('#demo-container').html(html.slice(data.length - step))
            $('.J-next').addClass('disabled')
        } else {
            $('#demo-container').html(html.slice(currentPage * step, currentPage * step + step))
            $('.J-next').removeClass('disabled')
        }

    }

    render()

    //下一页
    $('#demo-wrapper').on('click', '.J-next', function () {
        currentPage++
        render()
    })
    //上一页
    $('#demo-wrapper').on('click', '.J-prev', function () {
        currentPage--
        render()
    })

    //标签切换
    var $allTab = $('#tag-tab li')
    $allTab.each(function (index, item) {
        $(item).attr('default-text', $(item).find('.J-tag').text())
    })

    $('#tag-tab li').on('click', function () {
        var $this = $(this)
        if ($this.hasClass('active')) {
            $this.siblings('li').add($this).removeClass('active').each(function (i, $li) {
                $li = $($li)
                $li.find('.J-tag').text($li.attr('default-text'))
            })
        } else {
            currentTag = $this.find('.J-tag').text()
            currentPage = 0
            render()
            $this.addClass('active').find('.J-tag').text('显示全部')
            $this.siblings('li').each(function (index, $li) {
                $li = $($li)
                $li.find('.J-tag').text($li.attr('default-text'))
            }).removeClass('active')
        }
    })

})
