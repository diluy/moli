$(function(){
	$('.navOpen').click(function () {
 		$('.header').addClass('active');
    });
    $('.navClose').click(function () {
 		$('.header').removeClass('active');
	});
});

var scrollTop = $(window).scrollTop(),
$header=$('.header'),
lh =$(window).height()-120;
if(scrollTop>1){
    $header.addClass('scroll');
}else{
    $header.removeClass('scroll');
};
$(document).scroll(function(){
	var scrollTop = $(window).scrollTop(),
    $header=$('.header'),
    lh =$(window).height()-120;
	if(scrollTop>1){
		$header.addClass('scroll');
	}else{
		$header.removeClass('scroll');
 	};
});

