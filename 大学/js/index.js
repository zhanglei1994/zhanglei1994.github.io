$('.mui-input-row .inputting span').click(function(){
	$('.mui-input-row .inputting .list').toggle();
})
$('.mui-input-row .inputting .list li').click(function(){
	$('.mui-input-row .inputting input').val($(this).html());
	$('.mui-input-row .inputting .list').hide();
})
$('.mui-bar.mui-bar-nav .chooseAdress').click(function(){
	$('.mui-bar.mui-bar-nav .chooseAdress .list').toggle();
})
$('.mui-bar.mui-bar-nav .chooseAdress .list li').click(function(){
	$('.mui-bar.mui-bar-nav .chooseAdress span').html($(this).html());
	$('.mui-bar.mui-bar-nav .chooseAdress .list').hide();
})
$('.mui-content .btn .btn-link a').click(function(){
//	alert(1)
	$('.mui-content .btn .btn-link a').removeClass('active');
	$(this).addClass('active');
})
