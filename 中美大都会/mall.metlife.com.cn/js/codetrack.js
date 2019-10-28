/**
 * Created by 叶子 on 2018/3/13.
 */
var _gsq = _gsq || [];
(function () {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    if(IsPC()){
        s.src = 'https://static.gridsumdissector.com/js/Clients/GWD-005212-972697/gs.js';
    }else {
        s.src = 'https://static.gridsumdissector.com/js/Clients/GWD-005213-C2A600/gs.js';
    }
    var firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(s,firstScript);
})();