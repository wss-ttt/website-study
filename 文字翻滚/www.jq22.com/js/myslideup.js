(function($) {
	$.fn.extend({
		"slideUp": function(value) {
			var docthis = this;
			value = $.extend({
				"li_h": "30",
				"time": 2000,
				"movetime": 1000
			}, value)

			function autoani() {
				$("li:first", docthis).animate({
					"margin-top": -value.li_h
				}, value.movetime, function() {
					$(this).css("margin-top", 0).appendTo(".line");
				})
			}
			var anifun = setInterval(autoani, value.time);
			
			$(docthis).children("li").hover(function() {
				clearInterval(anifun);
			}, function() {
				anifun = setInterval(autoani, value.time);
			})
		}
	})
})(jQuery)
