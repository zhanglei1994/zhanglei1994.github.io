function $(id){ //获取元素样式封装
			return document.getElementById(id);
		}
function getStyle(obj,attr){ // 获取元素属性封装
			if(obj.currentStyle){
				return (obj.currentStyle[attr]);
			}else{
				return (getComputedStyle(obj)[attr]);
			}
		}
function Go(obj, attr, direct, target, endFn) { //对象 属性 方向 目标 函数封装
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		//为什么要写成obj.timer,为了解决多个元素的动画相互之间影响的问题
		var Distance = parseInt(getStyle(obj, attr)) + direct;
		if(Distance >= target && direct > 0 || Distance < target && direct < 0) { //与运算的优先级大于或运算
			Distance = target;
		}
		//			1+2*3 &&运算符的优先级大于||
		obj.style[attr] = Distance + 'px';
		//				obj.style.marginLeft
		if(Distance == target) {
			clearInterval(obj.timer);
			if(endFn) { //这个if判断是为了解决我们不需要传入endFn参数时的报错问题
				endFn(); //实际调用Go函数的时候，我们有可能需要再Go函数执行完毕之后去做其他事情，这件事就通过回调函数endFn来实现
			}
		}

	}, 40)
}
function fn(obj,math,endFn){ //透明度函数封装
			obj.changeOp =setInterval(function(){
			var op=parseFloat(getStyle(obj,'opacity'))+math;
				if(op>1 || op<0){
//					console.log(op)
					
					math<0? op=0 : op=1;
					if(op<=1){
						obj.style.display='none';
					}
					clearInterval(obj.changeOp)
					if(endFn){
							endFn()
						}
				}
//				console.log(op)
				obj.style.opacity=op;
//				console.log(op)
			},1000)
			
}
function shake(obj,attr,endFn){ //图片抖动函数封装
//			if(obj.s){
//				obj.s=false;
					var Left=parseInt(getStyle(obj,attr));
	//			var arr=[20,-20,18,-18,16,-16,14,-14,12,-12,10,-10,8,-8,6,-6,4,-4,2,-2,0];
				var arr=[];
				for(var i=20;i>=0;i-=2){
					arr.push(i,-i)
				}
				var num=0;
				obj.timer = setInterval(function(){
					obj.style[attr]=Left+arr[num]+'px';
					num++;
					if(num>=arr.length){
						clearInterval(obj.timer);
						obj.s=true;
						if(endFn){
							endFn()
						}
					}
				},40)
//			}
}