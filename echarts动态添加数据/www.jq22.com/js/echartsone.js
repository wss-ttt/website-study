var myChart;

function echartStr(names, brower) {
	if(myChart != null && myChart != "" && myChart != undefined) {
		myChart.dispose();
	}
	myChart = echarts.init(document.getElementById('main'));
	var option = {
		title: {
			text: '某站点用户访问来源',
			subtext: '纯属虚构',
			x: 'center'
		},
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			orient: 'vertical',
			left: 'left',
			data: names
		},
		series: [{
			name: '访问来源',
			type: 'pie',
			radius: '55%',
			center: ['50%', '60%'],
			data: brower,
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			},
			label: {
				normal: {
					show: false,
				}
			},
		}]
	};
	myChart.setOption(option);
	// 图表自适应
    $(window).resize(myChart.resize);
};

function qxfl(that) {
	var brower = [],
		names = [];
	var index = $(that).data('index');
	$.ajax({
		type: 'get',
		url: 'js/echartOne.json',
		dataType: "json",
		success: function(result) {
			console.log(result);
			// 将字符串转换成对象
			console.log(eval('result.list1')); 
			
			$.each(eval('result.list' + index), function(index, item) {
				names.push(item.name);
				brower.push({
					name: item.name,
					value: item.value
				});
			});
			
			/*$.each(result.list2,function(index,item){
				names.push(item.name);
				brower.push({
					name: item.name,
					value: item.value
				});	
			})*/
			echartStr(names, brower);
		},
		error: function(errorMsg) {
			alert("图表请求数据失败!");
		}
	});
}