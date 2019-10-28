$(function() {
	var $dragGallery_grid = $(".dragGallery-grid");
	var $gridItem = $(".gridItem");
	var $drag = $(".drag");
	var $drag_prev = $(".drag-prev");
	var $drag_next = $(".drag-next");
	var x = 0;
	var n = ($dragGallery_grid.width() - $(window).width()) / ($(".dragControls").width() - 140);
	$drag.mousedown(function() {
		$drag.css("background-color", "#390");
		$(document).on("mousemove", function(ev) {
			var ev = ev || window.event;
			ev.preventDefault();
			x = ev.pageX;
			if(x <= 70) {
				x = 70;
			} else if(x >= $(".dragControls").width() - 70) {
				x = $(".dragControls").width() - 70;
			}
			trans(x);
		});
		$(document).mouseup(function() {
			$(this).off("mousemove");
			$drag.css("background-color", "#9f3");
		});
	});

	function trans(a) {
		$drag.css("transform", "translate(" + a + "px)");
		$dragGallery_grid.css("transform", "translate(" + (-(a - 70) * n) + "px)");
		for(var i = 0; i < 9; i++) {
			if($gridItem.eq(i).offset().left > $(window).width() / 2) {
				$gridItem.eq(i).find(".gridSubItem").css("transform-origin", "left center 0px");
				if($gridItem.eq(i).offset().left <= $(window).width()) {
					$gridItem.eq(i).find(".gridSubItem").css("transform", "rotateY(0deg)");
				} else {
					$gridItem.eq(i).find(".gridSubItem").css("transform", "rotateY(45deg)");
				}
			} else if($gridItem.eq(i).offset().left < 0) {
				$gridItem.eq(i).find(".gridSubItem").css("transform-origin", "right center 0px");
				if($gridItem.eq(i).offset().left < -$gridItem.width()) {
					$gridItem.eq(i).find(".gridSubItem").css("transform", "rotateY(-45deg)");
				} else {
					$gridItem.eq(i).find(".gridSubItem").css("transform", "rotateY(0deg)");
				}
			}
		}
	}
	var distance = ($(".dragControls").width() - $drag.width()) / 2;
	$(".drag-prev").click(function() {
		var startX = x;
		x -= distance;
		x = Math.max(x, 70);
		move(startX, x);
	});
	$(".drag-next").click(function() {
		var startX = x;
		x += distance;
		x = Math.min(x, $(".dragControls").width() - 70);
		move(startX, x);
	});

	function move(startX, x) {
		var nowTime = new Date();
		var time = 1000;
		var timer = setInterval(function() {
			var prop = (new Date() - nowTime) / time;
			if(prop >= 1) {
				prop = 1;
				clearInterval(timer);
			}
			var movedistance = startX + prop * (x - startX);
			trans(movedistance);
		}, 1000 / 60);
	}
	(function() {
		var $stage = $(".owl-stage");
		var $item = $(".owl-item");
		var $controls = $(".owl-controls ul li");
		var _width = $(window).width();
		var index = 0;
		var x = 0;
		var startX = 0;
		var timer = null;

		function start() {
			$item.css("width", _width);
			$stage.css("width", _width * 9);
			$stage.css("transform", "translate(" + x + "px)");
			startX = x;
		}
		start();
		$(window).resize(function() {
			_width = $(window).width();
			start();
		});
		$controls.click(function() {
			$(this).addClass("active").siblings().removeClass("active");
			index = $(this).index();
			x = -index * _width;
			$stage.css("transform", "translate(" + x + "px)");
		});
		auto();

		function auto() {
			timer = setInterval(function() {
				index++;
				if(index > 7) {
					index = 0;
				}
				$controls.eq(index).addClass("active").siblings().removeClass("active");
				x -= _width;
				if(x == -$stage.width() + _width) {
					$stage.css("transform", "translate(" + x + "px)");
					setTimeout(function() {
						$stage.css("transition", "0s");
					}, 1000);
					setTimeout(function() {
						$stage.css("transform", "translate(" + startX + "px)");
						x = startX;
					}, 1100);
				} else {
					$stage.css("transition", "1s");
					$stage.css("transform", "translate(" + x + "px)");
				}
			}, 2000);
		}
	})()
	var $pageHeader = $(".pageHeader");
	var $fixedNav = $(".fixedNav");
	var $sectioner = $(".sectioner");
	var $nav = $("div.main-menu ul.menu li");
	$(window).scroll(function() {
		var Top = $(window).scrollTop();
		if(Top >= $pageHeader.height()) {
			$fixedNav.addClass("fixed");
		} else {
			$fixedNav.removeClass("fixed");
		}
		$sectioner.each(function(i) {
			if(Top >= $(this).offset().top) {
				$nav.eq(i).find("span").addClass("current").parents($nav).siblings().find("span").removeClass("current");
			}
		});
		if(Top > 0) {
			$("#awwwards").fadeOut();
		} else {
			$("#awwwards").css("display", "block");
		}
	});
	$("div.main-menu ul.menu li,.headNav div.menu ul li").click(function() {
		var index = $(this).index();
		var _top = $sectioner.eq(index).offset().top;
		$("html,body").animate({
			"scrollTop": _top
		}, 1000);
	});
	$("#homePage").click(function() {
		$("html,body").animate({
			"scrollTop": 0
		}, 1000);
	});
	(function() {
		var mark = true;
		var navTrigger1 = $("#navTrigger1");
		navTrigger1.click(function() {
			if(mark) {
				$(".headNav div.menu").css({
					"opacity": 1,
					"transform": "rotateX(0deg)"
				});
				mark = false;
			} else {
				$(".headNav div.menu").css({
					"opacity": 0,
					"transform": "rotateX(-90deg)"
				});
				mark = true;
			}
		});
	})()
})