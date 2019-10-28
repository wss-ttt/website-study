$(document).ready(function() {
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();
		if(scroll >= 50) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});
	$('.work-box').fancybox();
	$('.flexslider').flexslider({
		animation: "fade",
		directionNav: false,
	});
	var sections = $('section')
	nav = $('nav[role="navigation"]');
	$(window).on('scroll', function() {
		var cur_pos = $(this).scrollTop();
		sections.each(function() {
			var top = $(this).offset().top - 76
			bottom = top + $(this).outerHeight();
			if(cur_pos >= top && cur_pos <= bottom) {
				nav.find('a').removeClass('active');
				nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
			}
		});
	});
	nav.find('a').on('click', function() {
		console.log('我要开始滑动了。。。');
		var $el = $(this)
		id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
//			scrollTop: $(id).offset().top;
		}, 500);
		return false;
	});
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});
});