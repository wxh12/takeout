//import和require都可以
require('../css/reset.css');//初始样式
require('../plug/css/swiper.min.css');//插件的样式
require('../webfont/iconfont.css');//图标样式
require('../css/meituanIndex.css');
//回到顶部的显示与隐藏
$(window).on('scroll', function () {
	var $scrollTop = $(window).scrollTop();
	if ($scrollTop >= 500) {
		$('#gotop').slideDown();
	} else if ($scrollTop < 500) {
		$('#gotop').slideUp();
	}
});
//回到顶部
$('#gotop').click(function () {
	$('html,body').animate({
		scrollTop: 0
	});
});

getData();
var dataList;
function getData() {//获取数据
	var url = "http://localhost:8080/api/list.json";
		$.ajax({
			type: "GET",
			dataType: "json",
			url: url,
			success: addList,
			error: function () {
				alert('error');
			}
		})
}
function addList(data) {
	var str = '';
	data.list.forEach(function (ele, index) {
		str += '<li class="foodspic">\
				<a href = "http://localhost:8080/meituan-detail.html?id='+ ele.id + '" class="clearfix" >\
					<img src="'+ ele.info.imgurl + '" alt=""><dl><dt>' + ele.info.name + '</dt>\
							<dd><p class="foodtitle">'+ ele.info.des + '</p>\
								<p class="price"><span><strong>'+ ele.info.price + '</strong>\
								<i>元</i></span><span>'+ ele.info.newUser + '</span>\
									<span>'+ ele.info.sale + '</span></p></dd></dl></a>\</li>';
	})
	$('.guess-foodlist .list').html(str);
}
