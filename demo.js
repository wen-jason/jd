var index;
$('#swiper').sliderImg({
    image:['./img/pic1.jpg','./img/pic2.jpg','./img/pic3.jpg','./img/pic4.jpg','./img/pic4.jpg','./img/pic6.jpg'],
    interVal:2000
})
$('#location').AreaList({
    items: [{
        name: '北京',
        href: '#',
    }, {
        name: '上海',
        href: '#',
    }, {
        name: '黑龙江',
        href: '#',
    }, {
        name: '天津',
        href: '#'
    }, {
        name: '重庆',
        href: '#',
    }, {
        name: '河北',
        href: '#'
    }, {
        name: '山西',
        href: '#',
    }, {
        name: '河南',
        href: '#',
    }, {
        name: '辽宁',
        href: '#',
    }, {
        name: '吉林',
        href: '#'
    }, {
        name: '内蒙古',
        href: '#',
    }, {
        name: '江苏',
        href: '#'
    }, {
        name: '山东',
        href: '#',
    }, {
        name: '安徽',
        href: '#',
    }, {
        name: '浙江',
        href: '#',
    }, {
        name: '福建',
        href: '#'
    }, {
        name: '湖北',
        href: '#',
    }, {
        name: '湖南',
        href: '#'
    }, {
        name: '广东',
        href: '#',
    }, {
        name: '广西',
        href: '#',
    }, {
        name: '江西',
        href: '#',
    }, {
        name: '四川',
        href: '#'
    }, {
        name: '海南',
        href: '#',
    }, {
        name: '贵州',
        href: '#'
    }, {
        name: '云南',
        href: '#'
    }],
    // 每一行显示城市数量
    rowNum: 5,
    // 默认显示值
    nowItem: '北京',
    // 显示图片  图标
    nowItemImg: './img/local.jpg'
});
$('.menu_item').on('mouseenter',function(e){
    $('.JS_popCtn').show();
    index = $(this).data('index');
    $('.active_item').removeClass('active_item')
    $(this).addClass('active_item');
    $('#cate_item' + index).show();
}).on('mouseleave',function(){
    $('.JS_popCtn').hide();
    $('#cate_item' + index).hide();
    $('.active_item').removeClass('active_item');
})
$('.JS_popCtn').on('mouseenter',function(){
    $('.JS_popCtn').show();
    $('.active_item').removeClass('active_item')
    $('.menu_item').eq(index-1).addClass('active_item');
    $('#cate_item' + index).show();
}).on('mouseleave',function(){
    $('.JS_popCtn').hide();
    $('#cate_item' + index).hide();
    $('.active_item').removeClass('active_item');
})
$('.service_list .row1').hover(function(){
    var data = $(this).data('id')
    $('.hover').removeClass('hover');
    $('.content_list').hide();
    $('.service_entry').slideUp();
    $('service_content').slideDown();
    $('#'+ data).addClass('hover');
    $('.'+ data + '_c').show();
})
$('.service_hd span').hover(function(){
    var id = $(this).attr('id');
    $('.hover').removeClass('hover');
    $(this).addClass('hover')
    $('.' + id + '_c').show()
        .siblings('.content_list').hide();
})
$('.close').click(function(){
    $('.service_entry').slideDown();
    $('service_content').slideUp();
})