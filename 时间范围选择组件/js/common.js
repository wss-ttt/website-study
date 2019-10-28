function init() {
	// 定义变量
	var o = {};
	//定义locale汉化插件
	var locale = {
		"format": 'YYYY-MM-DD',
		"separator": "-",
		"applyLabel": "确定",
		"cancelLabel": "取消",
		"fromLabel": "起始时间",
		"toLabel": "结束时间'",
		"customRangeLabel": "自定义",
		"weekLabel": "W",
		"daysOfWeek": ["日", "一", "二", "三", "四", "五", "六"],
		"monthNames": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
		"firstDay": 1,
	};
	//初始化显示当前时间
	$('#daterange-btn span').html(moment().subtract(29, 'days').format('YYYY-MM-DD') + ' - ' + moment().format('YYYY-MM-DD'));
	//日期控件初始化
	$('#daterange-btn').daterangepicker({
			'locale': locale,
			ranges: {
				'最近30日': [moment().subtract(29, 'days'), moment()],
				'最近三个月': [moment().subtract(90, 'days'), moment()],
				'最近半年': [moment().subtract(180, 'days'), moment()],
				'最近一年': [moment().subtract(365, 'days'), moment()]
			},
			linkedCalendars: false,
			maxDate: moment(), // 最大时间		
			startDate: '2018-03-06',
			endDate: '2019-04-09'
		},
		// 注册单击事件
		function(start, end) {
			// moment() 就是当前系统时间
			$('#daterange-btn span').html(start.format('YYYY-MM-DD') + ' - ' + end.format('YYYY-MM-DD'));
			o.start = start.format('YYYY-MM-DD') ;
			o.end = end.format('YYYY-MM-DD');
			console.log(o);
		}
	);
	
	return o;
};