var setIntervalK;
var lingTiao=false;
var xsw_activeIndex;
  var swiper = new Swiper('.swiper-container', {
			//direction: 'vertical', // 垂直切换选项
			loop: false,
			observer:true,
			on: {
				slideChangeTransitionStart: function(){
						clearInterval(setIntervalK)
						index=this.activeIndex
						document.querySelector(".swiper-wrapper").setAttribute('data-activeIndex',index)
						xsw_qeHuan(index)
				},
				slideChangeTransitionEnd: function(){
					setIntervalK=null;
					setIntervalK=setInterval(function(){
						var activeIndex=document.querySelector(".swiper-wrapper").getAttribute('data-activeIndex')
						if(activeIndex!=xsw_activeIndex){
							xsw_qeHuan(activeIndex)
							swiper.slideTo(activeIndex, 1000, false);
							xsw_activeIndex=activeIndex
							if(bianObj!=null){
								return bianObj(activeIndex)
							}
						}
					},200)
				},
			},
		});
	window.onload=function(){
			var child=document.querySelector('.swiper-top').childNodes;
			for(let x=0;x<child.length;x++){
				if(child[x].nodeType==1)
					child[x].setAttribute('onclick','xsw_xuanzhe(this)')
			}
			setIntervalK=setInterval(function(){
				var activeIndex=document.querySelector(".swiper-wrapper").getAttribute('data-activeIndex')
				if(activeIndex!=xsw_activeIndex){
					xsw_qeHuan(activeIndex)
					if(lingTiao==true){
						swiper.slideTo(activeIndex, 0, false);
					}
					else{
						swiper.slideTo(activeIndex, 1000, false);
					}
					
					xsw_activeIndex=activeIndex
						if(bianObj!=null){
							return bianObj(activeIndex)
						}
					}
			},200)
		}
		var bianObj=null;
		function xsw_swiper(obj){
			if(obj){
				if(obj.index){
					lingTiao=true
					document.querySelector(".swiper-wrapper").setAttribute('data-activeIndex',obj.index)
				}
				bianObj=obj.data
			}
		}
	function xsw_qeHuan(index){
			var child=document.querySelector('.swiper-top').childNodes;
			var xunClass;
			var seperArr=[]
				for(var i=0 in child){
							if(child[i].nodeType==1){
								xunClass=child[i].getAttribute('data-xunClass')
								seperArr.push(child[i])
							}
				}
				for(var i=0 in seperArr){
					xsw_removeClass(seperArr[i],xunClass)
					if(index== parseInt(seperArr[i].getAttribute('data-index'))){
							xsw_addClass(seperArr[i],xunClass)
					}
				}
		}
	function xsw_xuanzhe(obj){
				var div=obj
				var thatIndex=div.getAttribute('data-index')
				var xunClass=div.getAttribute('data-xunClass')
				if(document.querySelector("."+xunClass)){
					xsw_removeClass(document.querySelector("."+xunClass),xunClass)
				}
				xsw_addClass(div,xunClass)
				document.querySelector(".swiper-wrapper").setAttribute('data-activeIndex',thatIndex)
				swiper.slideTo(thatIndex, 1000, false);
	}
	function xsw_addClass(obj, cls){
			var obj_class = obj.className,//获取 class 内容.
			blank = (obj_class != '') ? ' ' : '';//判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
			added = obj_class + blank + cls;//组合原来的 class 和需要添加的 class.
			obj.className = added;//替换原来的 class.
	}
  
	function xsw_removeClass(obj, cls){
			//console.log(obj,cls)
			var obj_class = ' '+obj.className+' ';//获取 class 内容, 并在首尾各加一个空格. ex) 'abc    bcd' -> ' abc    bcd '
			obj_class = obj_class.replace(/(\s+)/gi, ' '),//将多余的空字符替换成一个空格. ex) ' abc    bcd ' -> ' abc bcd '
			removed = obj_class.replace(' '+cls+' ', ' ');//在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
			removed = removed.replace(/(^\s+)|(\s+$)/g, '');//去掉首尾空格. ex) 'bcd ' -> 'bcd'
			obj.className = removed;//替换原来的 class.
	}
  
	function xsw_hasClass(obj, cls){
			var obj_class = obj.className,//获取 class 内容.
			obj_class_lst = obj_class.split(/\s+/);//通过split空字符将cls转换成数组.
			x = 0;
			for(x in obj_class_lst) {
				if(obj_class_lst[x] == cls) {//循环数组, 判断是否包含cls
					return true;
				}
			}
			return false;
	}
  