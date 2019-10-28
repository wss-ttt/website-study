/**
 * Created by SinArts on 2017/4/4.
 */
/*
 解析URL地址
 jem.parsURL( url ).file;     // = 'index.html'  	
 jem.parsURL( url ).hash;     // = 'top'  	
 jem.parsURL( url ).host;     // = 'www.abc.com'
 jem.parsURL( url ).query;    // = '?id=255&m=hello' 	
 jem.parsURL( url ).params;   // = Object = { id: 255, m: hello }  	
 jem.parsURL( url ).prefix;   // = 'www'
 jem.parsURL( url ).path;     // = '/dir/index.html'  	
 jem.parsURL( url ).segments; // = Array = ['dir', 'index.html']  	
 jem.parsURL( url ).port;     // = '8080'  	
 jem.parsURL( url ).protocol; // = 'http'  	
 jem.parsURL( url ).source;   // = 'http://www.abc.com:8080/dir/index.html?id=255&m=hello#top' 
 */
var parsURL = function ( url ) {
    url = arguments[0] == undefined ? window.location.href : url;
    var a =  document.createElement('a');
    a.href = url;
    return {
        source: url,
        protocol: a.protocol.replace(':',''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function(){
            var ret = {},seg = a.search.replace(/\?/,'').split('&'),len = seg.length, i = 0, s;
            for (;i<len;i++) {
                if (!seg[i]) { continue; }
                s = seg[i].split('=');
                var isw = /\?/.test(s[0]) ? s[0].split("?")[1] : s[0];
                ret[isw] = s[1];
            }
            return ret;
        })(),
        prefix: a.hostname.split('.')[0],
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
        hash: a.hash.replace('#',''),
        path: a.pathname.replace(/^([^\/])/,'/$1'),
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],
        segments: a.pathname.replace(/^\//,'').split('/')
    };
}
var navDate = {
    "topnav": [
        {"url":"http://www.jemui.com/","name":"首页"},
        {"url":"http://www.jemui.com/demo/","name":"示例"},
        {"url":"http://bbs.jemui.com/","name":"社区","target":"_blank"}
    ],
    "leftnav": [
        {"name":"基础说明",
            "childlist": [
                {"url":"index.html","name":"JEUI 下载与说明"},
                // {"url":"javascript:;","name":"使用规范"},
                // {"url":"javascript:;","name":"常见问题"}
            ]
        },
        {"name":"基本元素",
            "childlist": [
                {"url":"color.html","name":"颜色 Color"},
                {"url":"icons.html","name":"字体与图标"},
                {"url":"button.html","name":"按钮 Button"},
                {"url":"form.html","name":"表单 Form"},
                {"url":"table.html","name":"表格 Table"},
                {"url":"navs.html","name":"导航 Nav"},
                {"url":"progress.html","name":"进度条 Progress"}
            ]
        },
        {"name":"JS 组件控件",
            "childlist": [
                {"url":"jebox.html","name":"jeBox弹层控件"},
                {"url":"jedate.html","name":"jeDate日期控件"},
                {"url":"jelayout.html","name":"jeLayout布局"},
                {"url":"jetabpane.html","name":"jeTabPane新建标签"},
                {"url":"jecheck.html","name":"jeCheck选择框"},
                {"url":"jeselect.html","name":"jeSelect下拉选择"},
                {"url":"jetable.html","name":"jeTable表格控件"},
                {"url":"jeaccordion.html","name":"jeAccordion折叠面板"},
                //{"url":"jedropdown.html","name":"jedropdown下拉控件"},
                {"url":"jetree.html","name":"jeTree树形菜单"}
            ]
        }
    ]
};
$(function () {
 
    var locfile = parsURL().file;
    $.each(navDate.topnav, function (i,data) {
        var clis = $("<li/>");
        clis.append("<a href='"+data.url+"' target='"+(data.target||"_self")+"'>"+data.name+"</a>");
        $("#topnav").append(clis);
    });
    
    $.each(navDate.leftnav, function (i,data) {
        var clis = $("<li>",{"class":"level"}), inul = $("<ul>",{"class":"levelnext"});
        clis.append("<h3><em class='ico'></em>"+data.name+"<i></i></h3>");
        $.each(data.childlist, function (d,val) {
            var childlis = $("<li/>",{"class":locfile == val.url ? "current" : ""}),
                aurl = $("<a/>",{"href":val.url,"target":data.target||"_self"});
            inul.append(childlis.append(aurl.text(val.name)));
        });
        $("#leftnav").append(clis.append(inul));
    });
    
    //CNZZ统计
    var tjDiv = document.createElement("script");
    tjDiv.src = "http://s95.cnzz.com/stat.php?id=1257125172&web_id=1257125172";
    document.body.appendChild(tjDiv);
})