$(window).on('load scroll',function(){
	if(this.scrollY){
		$('.header').addClass('fixed');
	}else{
		$('.header').removeClass('fixed');
	}
})
$('.header__menu a[href^="#"]').click(function(e){
	e.preventDefault();
	if($(this.hash).length){		
		var top = $(this.hash).offset().top - $('.header').outerHeight();
		$('html').animate({
			scrollTop: top
		},600);
	}
	$('.header__menu').removeClass('open');
	$('.menu-btn').removeClass('active');
})
$('.menu-btn').click(function(){
	$(this).toggleClass('active');
	$('.header__menu').toggleClass('open');
})