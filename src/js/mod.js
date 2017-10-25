$(window).resize(function(){
	var h = $('.top').height();
	var b = document.documentElement.clientHeight;
	var src = $('.sroll_text').height();
	var f = $('.footer').height();
	var one = $('#one').height();
	var img = $('.info_block_img').height();
	var info = b - h;
	var dos = info - f;
	
	$('.tab_text').css({'height' : one});
	$('.index').css({'height' : info});
	$('.dostavka_index').css({'padding-top' : h});
	$('.sroll_text').css({'height' : info});
	$('.text_paragraf').css({'height' : info});
	$('iframe').css({'height' : info});
	$('.info_block_text').css({'height' : img});
	$('.tab').css({'height' : info});
	$('#pagepiling').css({'padding-top' : h});
	$('.dostavka_text').css({'height' : info});
});

$(function(){
//Высота

	
$('.next').click( function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
	    return false;
    });
	var deleteLog = false;

		
/*$(window).scroll(function(){
	var scr = $(this).scrollTop();
	$('.red').css({
		"transform" : 'translate(0%,' + scr/100 + '%)' 
	});
	$('.blue').css({
		"transform" : 'translate(0%, -' + scr/10 + '%)' 
	});
});*/
    
});

$(function(){
  $('.red_tab_b').click(function(){
    $('.popup,.popup_overlay').fadeIn(400); //показываем всплывающее окно
  });
	$('.click').click(function(){
    $('.popup_overlay_three').fadeIn(400); //показываем всплывающее окно
  });
	$('.click.blue').click(function(){
    $('.popup_two').addClass("nova"); //показываем всплывающее окно
  });
	$('.click.gold').click(function(){
		$('.popap_three').addClass("nova");
  });
	$('.click.red').click(function(){
		$('.popup_one').addClass("nova");
  });
	
  $('.closer,.popup_overlay,.popup_overlay_three').click(function(){
    $('.popup,.popup_overlay,.popup_overlay_three').fadeOut(400); //скрываем всплывающее окно
		$(".t-1-info-block").removeClass("nova");
  });
	$('.closer,.popup_overlay,.popup_overlay_three').click(function(){
		$('.closer').fadeIn(400);
	});
	
	$('#pull').click(function(){
    $('#pull-close,.mobi').fadeIn(400); //показываем всплывающее окно
	$('#pull').fadeOut(400);
  });
  $('#pull-close,.mobi').click(function(){
    $('.mobi,#pull-close').fadeOut(400); //скрываем всплывающее окно
	$('#pull').fadeIn(400);
  });
});
