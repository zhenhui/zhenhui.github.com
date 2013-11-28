define(function(require,exports,module){
	$('#footer-wrapper').html(require('./footer.tpl'))
	
	KISSY.use("event, switchable, anim,node", function (S, Event, Switchable, Anim) {
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
})// JavaScript Document