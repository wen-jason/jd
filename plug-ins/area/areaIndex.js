(function () {
    function AreaList(ops) {
        this.father = ops.father;
        this.items = ops.items;
        this.rowNum = ops.rowNum || 5;
        this.nowItem = ops.nowItem || ops.items[0].name;
        this.nowItemImg = ops.nowItemImg || '';
        this.initDom();
        this.bindEvent();
    }
    AreaList.prototype.initDom = function () {
        var wrap = $('<div class="areaContent"></div>');
        var nowArea = $('<div class="nowArea"></div>');
        var areaList = $('<div class="areaList"></div>');
        var nowItem = $('<span class="nowItem">' + this.nowItem + '</span>')
        if (this.nowItemImg) {
            var img = new Image();
            img.src = this.nowItemImg;
            img.onload = function () {
                $(img).prependTo(nowArea);
            }
        }
        this.items.forEach(function (ele) {
            var aitem = $('<a href="' + ele.href + '">' + ele.name + '</a>')
            var item = $('<div class="areaItem" data-name="'+ ele.name +'"></div>')
            item.append(aitem).appendTo(areaList)
        })
        nowArea.append(nowItem);
        wrap.append(nowArea).append(areaList).appendTo(this.father);
        $('.areaList').css({
            width: $('.areaItem').outerWidth(true) * this.rowNum,
        })
        $('[data-name='+ this.nowItem +']').addClass('areaActive')
    }
    AreaList.prototype.bindEvent = function(){
        $('.areaList').on('click','.areaItem',function(){
            $('.areaActive').removeClass('areaActive');
            $(this).addClass('areaActive');
            $('.nowItem').text($(this).data('name'))
        })
    }

    $.fn.extend({
        AreaList: function (options) {
            options.father = this;
            new AreaList(options)
        }
    })
}())