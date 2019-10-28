/**
 * Created by sinarts on 2017/5/11.
 */
(function($) {
    $.fn.toTop = function (callback) {
        //return this.each(function(){
        var that = $(this);
        if ($(document).scrollTop() == 0) {
            that.hide();
        }
        $(window).scroll(function (event) {
            /* Act on the event */
            ($(document).scrollTop() == 0) ? that.hide() : that.show();
            if ($(document).scrollTop() == 0) callback && callback($(document).scrollTop());
        });
        that.on("click", function (event) {
            $("html,body").animate({scrollTop: "0px"}, 300, function() {
                callback && callback($(document).scrollTop());
            });
        });
        //})
    }
})(jQuery);

$(function () {

    jeDate('#ymd01',{
        isinitVal:true,
        festival: true,
        format: 'YYYY年MM月DD日 hh:mm:ss'
    });
    jeDate('#ymd02',{
        format:"YYYY年MM月DD日 hh:mm",
        isTime:true,
        festival: true, //显示节日
        minDate:"2014-09-19 00:00:00"
    })

    jeDate('#ymnian',{
        isinitVal:true,
        format:"YYYY年"
    });

    jeDate('#hm01',{
        isinitVal:true,
        format: 'hh:mm:ss'
    });
    jeDate('#hm02',{
        format: 'hh:mm'
    });
    //直接展示日历
    jeDate("#show01",{
        isShow:false,
        format: "YYYY-MM-DD hh:mm:ss"
    });
    jeDate("#show02",{
        isShow:false,
        format: "YYYY-MM"
    });
    jeDate("#show03",{
        isShow:false,
        format: "YYYY"
    });
    jeDate("#show04",{
        isShow:false,
        format: "hh:mm:ss"
    });
    //蓝色主题色
    jeDate("#theme01",{
        theme:{ bgcolor:"#00A1CB",color:"#ffffff", pnColor:"#00CCFF"},
        format: "YYYY-MM-DD hh:mm:ss"
    });

    //绿色主题色
    jeDate("#theme02",{
        theme:{bgcolor:"#00A680",pnColor:"#00DDAA"},
        format: "YYYY-MM-DD hh:mm:ss"
    });

    //红色主题色
    jeDate("#theme03",{
        multiPane:false,
        theme:{bgcolor:"#D91600",pnColor:"#FF6653"},
        format: "YYYY-MM-DD hh:mm:ss"
    });

    //单面板左边快捷菜单
    jeDate("#shortcut01",{
        shortcut:[
            {name:"一周",val:{DD:7}},
            {name:"一个月",val:{DD:30}},
            {name:"二个月",val:{MM:2}},
            {name:"三个月",val:{MM:3}},
            {name:"一年",val:{DD:365}}
        ],
        format: "YYYY-MM-DD hh:mm:ss"
    });

    //双面板左边快捷菜单
    jeDate("#shortcut02",{
        multiPane:false,
        shortcut:[
            {name:"一周",val:{DD:7}},
            {name:"一个月",val:{DD:30}},
            {name:"二个月",val:{MM:2}},
            {name:"三个月",val:{MM:3}},
            {name:"一年",val:{DD:365}}
        ],
        format: "YYYY-MM-DD hh:mm:ss"
    }); 
    
    // //有效、无效日期限制
    jeDate("#valid01",{
        valiDate:["0[4-7]$,1[1-5]$,2[58]$",true],
        format: "YYYY年MM月DD日"
    });
    jeDate("#valid03",{
        valiDate:["1$,3$,6$,9$",true],
        format: "YYYY年MM月DD日"
    });
    jeDate("#valid05",{
        valiDate:["%1,%3,%6,%9,%12,%15,%25",true],
        format: "YYYY年MM月DD日"
    });
    jeDate("#valid02",{
        valiDate:["0[4-7]$,1[1-5]$,2[58]$",false],
        format: "YYYY年MM月DD日"
    });
    jeDate("#valid04",{
        valiDate:["1$,3$,6$,9$",false],
        format: "YYYY年MM月DD日"
    });
    jeDate("#valid06",{
        valiDate:["%1,%3,%6,%9,%12,%15,%25",false],
        format: "YYYY年MM月DD日"
    });
    // //时分秒设置为 00
    jeDate("#sfmz",{
        isinitVal:true,
        initDate:[{hh:10,mm:00,ss:00},false],
        minDate: '2016-06-16',
        maxDate: '2025-06-16',
        format:"YYYY年MM月DD日 hh:mm:ss",
        zIndex:3000
    });

    //时分秒设置为 10:30:00    
    jeDate("#sfmsd",{
        isinitVal:true,
        initDate:[{hh:10,mm:30,ss:35},false],
        minDate: '2016-06-16',
        maxDate: '2025-06-16',
        format:"hh:mm:ss",
        zIndex:3000
    });
    //设置事件（"click mouseenter"）
    jeDate("#yesclick",{
        trigger: "mouseenter",
        minDate: '2016-06-16',
        maxDate: '2025-06-16',
        format:"YYYY年MM月DD日 hh:mm:ss",
        zIndex:3000
    });

    jeDate("#chus01",{
        isinitVal:true,
        initDate:[{MM:"+3"},true],   //初始化日期加3个月
        festival: true,
        format: 'YYYY年MM月DD日 hh:mm:ss'
    });

    jeDate("#chus02",{
        isinitVal:true,
        initDate:[{DD:"-2",hh:"+1"},true],   //初始化日期减2天加1小时
        festival: true,
        format: 'YYYY年MM月DD日 hh:mm:ss'
    });
    
    var ti = 2;
    document.getElementById("onafter").onclick = function(){
        var charu = document.getElementById("charu"), ps = document.createElement("p"),
            len = charu.childNodes;
        ps.innerHTML = '<span class="wstxt je-fl">'+ti+'、</span><input class="dateinput dateicon je-mr25" type="text" placeholder="YYYY年MM月DD日 hh:mm"  readonly onclick="testShow(this);">';
        ps.className = "je-mb15 je-ovh";
        ti++;
        charu.insertBefore(ps,null);
    };
    
    jeDate("#ranges01",{
        multiPane:false,
        range:" To ",
        minDate:'2017-06-16 10:20:25', 
        maxDate:'2019-06-16 18:30:35',  
        format: 'YYYY-MM-DD hh:mm:ss'
    });
    jeDate("#ranges02",{
        multiPane:false,
        range:" 至 ",
        minDate:'2017-06-16 10:20:25',
        maxDate:'2019-06-16 18:30:35',
        format: 'YYYY年MM月DD日'
    });
    jeDate("#ranges03",{
        multiPane:false,
        range:" ~ ",
        minDate:'2017-06-16 10:20:25',
        maxDate:'2019-06-16 18:30:35',
        format: 'hh:mm:ss'
    });

    jeDate("#yeschoose",{
        onClose:false,
        minDate:'2015-06-16 10:20:25',
        maxDate:'2025-06-16 18:30:35',
        format: 'YYYY-MM-DD hh:mm:ss'
    });
    jeDate("#nochoose",{
        onClose:true,
        minDate:'2015-06-16 10:20:25',
        maxDate:'2025-06-16 18:30:35',
        format: 'YYYY-MM-DD hh:mm:ss'
    });

    jeDate("#multi01",{
        multiPane:false,
        minDate:'2017-06-16 10:20:25',
        maxDate:'2025-06-16 18:30:35',
        format: 'YYYY-MM-DD'
    });
    jeDate("#multi02",{
        multiPane:false,
        minDate:'2017-06-16 10:20:25',
        maxDate:'2025-06-16 18:30:35',
        format: 'YYYY-MM'
    });
    jeDate("#multi03",{
        multiPane:false,
        minDate:'2017-06-16 10:20:25',
        maxDate:'2025-06-16 18:30:35',
        format: 'YYYY'
    });

    //一次绑定多个选择
    $.each($(".moredate"),function(i,elem){
        var mat = $(elem).attr("placeholder");
        jeDate(elem,{
            format: mat
        });
    });


    jeDate('#custom1',{
        isinitVal:true,
        format: 'YYYY/MM' // 分隔符可以任意定义，该例子表示只显示年月 
    });

    jeDate('#custom3',{
        format: 'YYYY-MM-DD', // 分隔符可以任意定义，该例子表示只显示年月
        marks:['2015-01-03','2016-01-01','2016-01-10','2016-01-15','2016-02-15','2016-02-20','2016-03-10','2016-03-18','2017-04-18','2017-04-25','2017-05-10','2017-05-19','2017-06-15','2017-06-25','2017-07-18','2017-07-25','2017-08-10','2017-08-19','2017-09-15','2017-09-25','2017-10-15','2017-10-20','2017-10-28','2017-11-15','2017-11-20','2017-11-28','2017-12-15','2017-12-20','2017-12-28','2018-04-18','2018-04-25','2018-04-28','2018-05-10','2018-05-19','2018-06-15','2018-06-25','2018-07-18','2018-07-25','2018-08-10','2018-08-19','2018-09-15','2018-09-25','2018-10-15','2018-10-20','2018-10-28','2018-11-15','2018-11-20','2018-11-28','2018-12-15','2018-12-20','2018-12-28']
    });

    jeDate('#custom2',{
        format:"YYYY-MM-DD",
        minDate: jeDate.nowDate({DD:"-1"}), //0代表今天，-1代表昨天，-2代表前天，以此类推
        maxDate: jeDate.nowDate({DD:"+1"}) //1代表明天，2代表后天，以此类推
    });

    jeDate('#customToday',{
        format:"YYYY-MM-DD",
        minDate: jeDate.nowDate({DD:0}), //0代表今天，-1代表昨天，-2代表前天，以此类推
        maxDate: jeDate.nowDate({DD:0}) //1代表明天，2代表后天，以此类推
    });
    jeDate('#goweeks',{
        festival: true,
        format: 'YYYY年MM月DD日 hh:mm:ss',
        donefun: function(obj){
            console.log(this);
            alert(jeDate.getLunar(obj.date[0]).cW);
        }
    });

    jeDate('#ymdlimthms',{
        format: 'YYYY-MM-DD hh:mm:ss',
        minDate:"2012-06-16 08:05:05", //最小日期
        maxDate:"2020-06-16 20:50:50" //最大日期
    });
    jeDate('#limthms',{
        format: 'hh:mm:ss',
        minDate:"2012-06-16 08:05:05", //最小日期
        maxDate:"2020-06-16 20:50:50" //最大日期    
    });
    var start = {}, end = {};
    jeDate('#inpstart',{
        format: 'YYYY-MM-DD hh:mm:ss',
        minDate: '2014-06-16 23:59:59', //设定最小日期为当前日期
        maxDate: function (that) {
            //that 指向实例对象
            return jeDate.valText(that.valCell) == "" ? jeDate.nowDate({DD:0}) : start.maxDate;
        }, //设定最大日期为当前日期
        donefun: function(obj){
            end.minDate = obj.val; //开始日选好后，重置结束日的最小日期
            jeDate("#inpend",LinkageEndDate(false));
        }
    });
    jeDate('#inpend',LinkageEndDate);

    function LinkageEndDate(istg) {
        return {
            trigger : istg || "click",
            format: 'YYYY-MM-DD hh:mm:ss',
            minDate: function (that) {
                //that 指向实例对象
                var nowMinDate = jeDate.valText('#inpstart') == "" && jeDate.valText(that.valCell) == "";
                return nowMinDate ? jeDate.nowDate({DD:0}) : end.minDate ;
            }, //设定最小日期为当前日期
            maxDate: '2099-06-16 23:59:59', //设定最大日期为当前日期
            donefun: function(obj){
                start.maxDate = obj.val; //将结束日的初始值设定为开始日的最大日期
            }
        };    
    }
    

    //展示当前版本
    $('#version').html(jeDate.dateVer);

    //获取下载数
    $.get('http://www.jemui.com/downstatis/downstatis.php?name=jedate', function(res){
        $('#downnum').html(res.totals);
    }, 'jsonp');

    //记录下载
    $('.jedatedown').on('click',function(){
        $.get('http://www.jemui.com/downstatis/downstatis.php?name=jedate&type=yes');
    });
    $.each($(".precode"),function(i,cell){
        var editor = CodeMirror.fromTextArea(cell, {
            lineNumbers: true,
            readOnly:true,
            extraKeys: {"Ctrl-Space": "autocomplete"},
            mode: {name: $(cell).attr("name"), globalVars: true}
        });
    });
    
    var lis = $(".apilist").find('li');
    $("#toTop").toTop(function (sg) {
        if(sg == 0) lis.removeClass("on");
    });

    lis.on('click', function(){
        var thisHref = $(this).find("a").attr("href");
        var nametop = $(thisHref.replace(/^#/g,'.')).offset().top;
        $('html,body').animate({scrollTop:nametop-60}, 200);
        lis.removeClass("on");
        $(this).addClass("on");
    });

    setTimeout(function () {
        if(location.hash != ""){
            var locTop = $(location.hash.replace(/^#/g,'.')).offset().top;
            $('html,body').animate({scrollTop:locTop-60}, 200);
            lis.find("[href="+location.hash+"]").parent().addClass("on");
        }
        $('#githubstars').attr("src","https://img.shields.io/github/stars/singod/jeDate.svg?style=social");  
        
    },500)
    
});

function testShow(elem){
    jeDate(elem,{
        trigger:false,
        format: 'YYYY年MM月DD日 hh:mm',
        minDate: '2014-06-16 23:59:59', //设定最小日期为当前日期
        festival: true,
        maxDate: '2099-06-16 23:59:59' //最大日期
    });
}


function loadScript(arr){
    var node = document.createElement("script");
    for (var i=0; i<arr.length;i++){
        node.setAttribute('async','async');
        node.src=arr[i];
        document.head.insertBefore(node, document.head.firstChild); 
    }
}