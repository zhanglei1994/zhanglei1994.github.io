$('.sel-area-btn').mouseover(function(){
	$('#J_area_content').css('display','block');
	$('.sel-area-btn').css('background','white')
	$('.sel-area-btn').css('border','1px solid #cdcdcd')
})
$('#J_area_content').mouseleave(function(){
	$('.sel-area-btn').css('border','none')
	$('.sel-area-btn').css('background','#f5f5f5')
	$('#J_area_content').css('display','none');
})
$('.J_select-item').click(function(){
	$('.J_select-item').css('background-color','white');
	$('#J_selectd-province').html($(this).html());
	$(this).css('background-color','deeppink');
})
$('#sign').mouseover(function(){
	$('.sign-in').show();
	$('#sign').css('border-top','1px solid #cdcdcd');
	$('#sign').css('border-left','1px solid #cdcdcd');
	$('#sign').css('border-right','1px solid #cdcdcd');
})
$('.sign-in').mouseleave(function(){
	$('.sign-in').hide();
	$('#sign').css('border','none');
})
$('.sale').mouseover(function(){
	$('.collection').show();
	$('.sale').css('border-top','1px solid #cdcdcd');
	$('.sale').css('border-left','1px solid #cdcdcd');
	$('.sale').css('border-right','1px solid #cdcdcd');
})
$('.collection').mouseleave(function(){
	$('.collection').hide();
	$('.sale').css('border','none');
})
$('.vip').mouseover(function(){
	$('.club').show();
	$('.vip').css('border-top','1px solid #cdcdcd');
	$('.vip').css('border-left','1px solid #cdcdcd');
	$('.vip').css('border-right','1px solid #cdcdcd');
})
$('.club').mouseleave(function(){
	$('.club').hide();
	$('.vip').css('border','none');
})
$('.kehu').mouseover(function(){
	$('.service').show();
	$('.kehu').css('border-top','1px solid #cdcdcd');
	$('.kehu').css('border-left','1px solid #cdcdcd');
	$('.kehu').css('border-right','1px solid #cdcdcd');
})
$('.service').mouseleave(function(){
	$('.service').hide();
	$('.kehu').css('border','none');
})
$('#more').mouseover(function(){
	$('.channel-group').show();
})
$('.channel-group').mouseleave(function(){
	$('.channel-group').hide();
})
//图片轮播
var arrImg=['img/31.jpg','img/32.jpg','img/33.jpg','img/34.jpg']
var mu=0;
var timer=null;
fn();
$('.selected').mouseover(function(){
	$('#pic').attr('src',arrImg[$(this).index()])
	$('.fbc-trigger-line').css('left',$(this).index()*195+98+'px');
	mu=$(this).index();
	clearInterval(timer);
})
$('.selected').mouseout(function(){
	clearInterval(timer);
	fn();
});
$('.fbc-btn-right').click(function(){
	if(mu<arrImg.length-1){
		mu=mu+1;
	}else{
		mu=0;
	};
	$('#pic').attr('src',arrImg[mu]);
	$('.fbc-trigger-line').css('left',mu*195+98+'px');
//	clearInterval(timer);
})
$('.fbc-btn-left').click(function(){
	if(mu>0){
		mu=mu-1;
	}else{
		mu=arrImg.length-1;
	};
	$('#pic').attr('src',arrImg[mu]);
	$('.fbc-trigger-line').css('left',mu*195+98+'px');
})
//图片自动轮播
function fn(){
	timer = setInterval(function(){
		if(mu<arrImg.length-1){
			mu=mu+1;
		}else{
			mu=0;
		};
	//	console.log(arrImg.length);
		$('#pic').attr('src',arrImg[mu]);
		$('.fbc-trigger-line').css('left',mu*195+98+'px');
	},3000)
}
$('.sidebarcom-top').click(function(){
//	alert(1);
	$(document).scrollTop(0);
})
