/**
 * Created by 叶子 on 2018/5/29.
 */
$(function () {
    $(".front").fadeIn(400);
//    日期选择
    if (!IsPC()) {
        var date = new Date();
        var minyear = date.setFullYear(date.getFullYear() - 60);
        var mindate = date.getFullYear(minyear) + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        var newdate = new Date();
        var maxday = newdate.setDate(newdate.getDate() - 30);
        var maxdate = newdate.getFullYear() + "-" + (newdate.getMonth() + 1) + "-" + newdate.getDate(maxday);

        var calendar = new LCalendar();
        calendar.init({
            'trigger': '#wap-birthtime', /*按钮选择器，用于触发弹出插件*/
            'type': 'date', /*模式：date日期；datetime日期时间；time时间；ym年月；*/
            'minDate': mindate, /*最小日期*/
            'maxDate': maxdate/*最大日期*/
        });


    } else {
        $("#pc-birthtime").click(function () {
            WdatePicker({
                lang: "zh-cn",
                minDate: '{%y-60}-%M-{%d}',
                maxDate: '{%y}-%M-{%d-30}'
            });
        });
    }
//  tab 切换样式改变
    $(".nav-link li>a").click(function () {
        $(this).addClass("cur").parent("li").siblings("li").find("a").removeClass("cur");
    });
    $(".nav-w li>a").click(function () {
        var $index=$(this).parent("li").index();
        $(this).addClass("cur").parent("li").siblings("li").find("a").removeClass("cur");
        $(".tabcont").hide().eq($index).show();
        if($index==3){
            $(".tabcont").hide();
        }
    });
//    个人信息授权
    $("#person-power").click(function (e) {
        sinosoft.TitleFloatLayer("", $("#personTemplate").html(), {
            width: "90%",
            height: "220px"
        });
        e.preventDefault();
    });
    $("#person-power-wap").click(function (e) {
        sinosoft.TitleFloatLayer("", $("#personTemplate").html(), {
            width: "90%",
            height: "40%"
        });
        e.preventDefault();
    });
    //预约按钮点击
    $("#submitbtn-p").click(function () {
        try{_satellite.track("sem推广着陆页面预约信息提交:保费试算");}catch(e){}
        var params = {
            sex:$("#sexList-p").find(".sex.cur").attr("value"),
            birthday:$("#pc-birthtime").val(),
            name:$("#name-p").val(),
            mobile: $("#phone-p").val(),
            assureAmount: $("#sumsele option:selected").val(),
            cnb: $(".tipinfo-p").find("i[name=cnb-insure]").attr("class"),
            productCategory:"医疗险",
            pageName: $(this).attr("pageName"),
            saleWay:$(this).attr("saleWay")

        };
        if (check(params)) {
            Ajax(params)
        }
    });
    $("#orderBtn").click(function () {
        try{_satellite.track("sem推广着陆页面预约信息提交:保费试算");}catch(e){}
        var params = {
            sex:$("#sexList-p").find(".sex.cur").attr("value"),
            birthday:$("#pc-birthtime").val(),
            name:$("#name-p").val(),
            mobile: $("#phone-p").val(),
            assureAmount: $("#sumsele option:selected").val(),
            cnb: $(".tipinfo-p").find("i[name=cnb-insure]").attr("class"),
            productCategory:"医疗险",
            pageName: $(this).attr("pageName"),
            saleWay:$(this).attr("saleWay")

        };
        try {
            if (params.birthday == "" || typeof(params.birthday) == "undefined") {
                throw new Error("请您选择出生日期")
            }
            if (typeof (params.name) == "undefined" || params.name == "") {
                throw new Error("您输入的姓名不能为空")
            }
            window.sinosoft.Validate.validateMobile(params.mobile);
            if (params.cnb == "unchecked") {
                throw new Error("请您先阅读相关条款")
            }
        } catch (err) {
            if( $("body").scrollTop()>400 || $("html").scrollTop()>400){
                $("html,body").animate({scrollTop: $(".myform.form-p").offset().top-$(".myform.form-p").height() }, 500);
            }else {
                window.sinosoft.Tip(err.message);
            }

            return false;
        }
        Ajax(params);
    });
    $("#submitbtn-w,#fixedSubmitBtn,#wap-floateWindow").click(function (e) {
        if(e.target="wap-floateWindow"){
            if(!$("#wap-floateWindow .front").hasClass("ani2")){
                return false
            }
        }
        try{_satellite.track("sem推广着陆页面预约信息提交:保费试算");}catch(e){}
        var params = {
            sex: $('#sexList-w').find(".sex.cur").attr("value"),
            birthday: $("#wap-birthtime").val(),
            name:$("#name-w").val(),
            mobile: $("#phone-w").val(),
            assureAmount: $("#sumsele option:selected").val(),
            cnb: $(".tipinfo-w").find("i[name=cnb-insure]").attr("class"),
            productCategory:"医疗险",
            pageName: $(this).attr("pageName"),
            saleWay:$(this).attr("saleWay")
        };
        try {
            if (params.birthday == "" || typeof(params.birthday) == "undefined") {
                throw new Error("请您选择出生日期")
            }
            if (typeof (params.name) == "undefined" || params.name == "") {
                throw new Error("您输入的姓名不能为空")
            }
            window.sinosoft.Validate.validateMobile(params.mobile);
            if (params.cnb == "unchecked") {
                throw new Error("请您先阅读相关条款")
            }
        } catch (err) {
            if( $("body").scrollTop()>$(".grid-inner-w").offset().top || $("html").scrollTop()>$(".grid-inner-w").offset().top){
                $("html,body").animate({scrollTop: $(".myform.form-w").offset().top-$(".myform.form-w").height() }, 500);
            }else {
                window.sinosoft.Tip(err.message);
            }

            return false;
        }
        Ajax(params);
    });
});

//校验
function check(params) {
    try {
        if (params.birthday == "" || typeof(params.birthday) == "undefined") {
            throw new Error("请您选择出生日期")
        }
        if (typeof (params.name) == "undefined" || params.name == "") {
            throw new Error("您输入的姓名不能为空")
        }
        window.sinosoft.Validate.validateMobile(params.mobile);
        if (params.cnb == "unchecked") {
            throw new Error("请您先阅读相关条款")
        }
    } catch (err) {
        window.sinosoft.Tip(err.message);
        return false;
    }
    return true;
}