/**
 * Created by Administrator on 2018/1/24.
 */
$(function(){
    /*
    * 共同的点击事件
    * */

  // 性别选择
    $("i.sex").click(function () {
        $(this).addClass("cur").parents(".sexbox").siblings(".sexbox").children("i.sex").removeClass("cur")
    });
 //   选框选择
    $("i[name=cnb-insure]").click(function (e) {
        if ($(this).hasClass("checked")) {
            $(this).removeClass("checked").addClass("unchecked")
        } else if ($(this).hasClass("unchecked")) {
            $(this).removeClass("unchecked").addClass("checked")
        }
        e.preventDefault()
    });
    //新增弹窗功能
    $('#pc-floateWindow .closeTool, #knowBtn').click(function () {
        subMove();

    });
    $("#wap-floateWindow .closeTool,#knowBtn-wap").click(function (e) {
        if($(e.target).closest(".closeTool").length>0 || $(e.target).closest("#knowBtn-wap").length>0){
            submovewap();
        }else {
            return false;
        }
        e.stopPropagation();
    })
});


/*跳转JS*/
function scroll(id) {
    $("#" + id).HoverTreeScroll(1000);
}

/*
 *
 * 移动保障金额选择
 *
 * param el template
 *
 * */
function select(el, template) {
    var index = -1;
    var $Key = $("#" + el);
    var win = new sinosoft.FloatLayer($("#" + template).text(), {width: "90%"});
    var $el = win.getWin(), $list = $el.find(".select-list li");

    index = $Key.data("key");
    if (index != -1) {
        $list.removeClass('on').eq(index).addClass("on");
    }
    // 取消注册事件
    $el.find(".cancle").click(function () {
        win.close();
    });
    // 列表注册事件
    $list.click(function () {
        var item = $(this);
        item.addClass("on").siblings().removeClass("on");
        index = item.data("key");
        $Key.data("key", index);
        $Key.attr("data-key", index);// 处理jquery缓存
        $Key.text(item.data("value"));
        win.close();
    });
}
//新增弹窗功能
function subMove() {
    $('#pc-floateWindow .floateWindow').removeClass('ani').addClass('ani1');
    $("#pc-floateWindow .closeTool").hide();
    $("#pc-floateWindow #knowBtn").hide();
    $("#pc-floateWindow #orderBtn").show();
    $("#pc-floateWindow .mask_bg").hide();
    $("#pc-floateWindow .floateWindow .front").addClass("ani3");
}
function submovewap() {
    $('#wap-floateWindow .floateWindow').removeClass('ani').addClass('ani2');
    $("#wap-floateWindow .closeTool").hide();
    $("#wap-floateWindow  #knowBtn-wap").hide();
    $("#wap-floateWindow  #orderBtn-wap").show();
    $("#wap-floateWindow .mask_bg").hide();
    $("#wap-floateWindow .floateWindow .front").addClass("ani2");
    setTimeout(function () {
        $('#wap-floateWindow .floateWindow').addClass('last');
    },1000);
}
/*
 * 时间控件
 * param  $this    元素的id名
 * */
function timer($this,$val) {
    var calendar = new LCalendar();
    calendar.init({
        'trigger': "." + $this, /*按钮选择器，用于触发弹出插件*/
        'intval':"#"+$val,
        'type': 'date', /*模式：date日期；datetime日期时间；time时间；ym年月；*/
        'minDate': "1929-10-1", /*最小日期*/
        'maxDate': "2099-10-1" /*最大日期*/
    });
}
/*
检测是否为pc设备

*/
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag
}
/*
*
* 获取参数   @param  url   name
* */
function getQueryString(url, name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    url = arguments.length > 1 ? url : window.location.search;
    url = url.indexOf("?") == 0 ? url.substr(1) : url;
    var r = url.match(reg);

    return r ? unescape(r[2]) : "";
}
/*
* 处理source
* */
function doSource(source){
    if(source == "" || source ==null){
        source = "PC";
    } else if(source == "PC" || source =="SEMpz" || source =="SEMwap" || source=="SEMpzwap"){     //DDW新官网专用
        // pc
        var returnStr= IsPC() ? "" :"wap";
        // pz
        returnStr = ((source.indexOf("pz")!=-1) ? "SEMpz":"SEM")+ returnStr;
        source= (returnStr=="SEM") ? "PC" : returnStr;
        return source;
    }
    return source;
}

function codeDeploy(params) {
    var mark= IsPC() ? "GWD-005212" :"GWD-005213";
    var orderid=Math.random();
    _gsq.push(["T", mark, "addOrder",orderid,1]);
    if(!(params.sex=="" && params.sex ==undefined)){
        _gsq.push(["T", mark, "addProduct",orderid, params.sex,params.sex,1,1, "性别"]);
    }
    if(!(params.birthday=="" && params.birthday ==undefined)){
        _gsq.push(["T", mark, "addProduct",orderid, params.birthday,params.birthday,1,1, "出生日期"]);
    }
    if(!(params.assureAmount=="" && params.assureAmount ==undefined)){
        _gsq.push(["T", mark, "addProduct",orderid, params.assureAmount,params.assureAmount,1,1, "保证金额"]);
    }
    if(!(params.name=="" && params.name ==undefined)){
        _gsq.push(["T", mark, "addProduct",orderid, params.name,params.name,1,1, "您的姓名"]);
    }
    if(!(params.mobile=="" && params.mobile ==undefined)){
        _gsq.push(["T", mark, "addProduct",orderid, params.mobile,params.mobile,1,1, "手机号码"]);
    }
    if(!(params["productCategory"]=="" && params["productCategory"] ==undefined)){
        _gsq.push(["T", mark,"trackEvent",params["productCategory"],params["insureName"],"保费试算3"]);
    }
    if(params["pageName"]==="大都会人寿618年中折扣季"){
        _gsq.push(["T","mark","trackEvent","大都会人寿618年中折扣季 ","预约1折起",""]);
    }
    _gsq.push(["T", mark, "trackECom"]);
}

/*
* ajax  请求
* */
function Ajax(params) {
    var url = window.location.search;
    var surl;
    params["source"] = doSource(getQueryString(url, "source"));
    params["wyethid"] = getQueryString(url, "wyethid");
    $(".loading").show();
    $.ajax({
//    	url:"http://localhost:8080/ipartner/sem/wyeth.htm",
    	url:"https://chanpin.metlife.com.cn/sem/wyeth.htm",
        type: "post",
        dataType: "jsonp",
        data: params,
        success: function (data) {
            $(".loading").hide();
            if (data.status== 0){
                try{  _satellite.track("sem推广着陆页面预约信息提交:保费试算成功");}catch(e){}
                if(params.saleWay=="onlineWay"){
                    surl = "./completeh5.htm?";
                }else if(params.saleWay=="phoneWay"){
                    surl = "./complete5.htm?";
                }
                surl += "source=" + params.source + "&wyethid=" + params.wyethid;
                pubsage_conv.push(['setOrderInfo', [[params.mobile,params["productCategory"], params.name, ""]]]);
                codeDeploy(params);
                setTimeout(function () {
                    window.location.href = surl;
                }, 500)
            }else if(data.status==10106){
                try{_satellite.track("ssem推广着陆页面预约信息提交:保费试算错误");}catch(e){}
                if(params.saleWay=="onlineWay"){
                    surl = "./completeh5.htm?";
                }else if(params.saleWay=="phoneWay"){
                    surl = "./complete5.htm?";
                }
                surl += "source=" + params.source + "&wyethid=" + params.wyethid;
                window.location.href=surl+="&flag=already";

            }else{
                try{_satellite.track("ssem推广着陆页面预约信息提交:保费试算错误");}catch(e){}
                window.sinosoft.Tip(data.message);
            }
        },
        error: function () {
            $(".loading").hide();
            window.sinosoft.Tip("系统错误");
            try{_satellite.track("ssem推广着陆页面预约信息提交:保费试算错误");}catch(e){}
        }
    })
}

