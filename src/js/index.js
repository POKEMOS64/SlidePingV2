$(window).resize(function(){
	var h = $('.top').height();
	var b = document.documentElement.clientHeight;
	var src = $('.sroll_text').height();
	var f = $('.footer').height();
	var one = $('#one').height();
	var img = $('.info_block_img').height();
	var info = b;
	var dos = info - f;
	
	$('.tab_text').css({'height' : one});
	$('.index').css({'height' : info});
	$('.sroll_text').css({'height' : info});
	$('.text_paragraf').css({'height' : info});
	$('iframe').css({'height' : info});
	$('.info_block_text').css({'height' : img});
	$('.tab').css({'height' : info});
	$('#pagepiling').css({'padding-top' : h});
});

function slide() {
  h = document.documentElement.clientHeight
  $(".one, .two, .three, .four").css('height', h);
};
$(window).resize(slide);
$(document).ready(slide);


$(document).bind('mousewheel DOMMouseScroll', function(event) {
  scroll(event);
});

var num = 1;
var scrolling = false;

function scroll(event) {
  event.preventDefault();
  if (!scrolling) {
    scrolling = true;
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
      num--;
      num = num < 1 ? 1 : num;
    } else {
      num++;
      num = num > 4 ? 4 : num;
    }

    $('html, body').animate({
      scrollTop: 
			$(".num" + num).offset().top },
			500, 
			"linear", function() {
      scrolling = false;
    });
  }
};

jQuery(document).ready(function($){
	var animating = false;
	setSlider();
	$(window).on('scroll resize', function(){
		(!window.requestAnimationFrame) ? setSlider() : window.requestAnimationFrame(setSlider);
	});
    $('.cd-vertical-nav .cd-prev').on('click', function(){
    	prevSection();
    });
    $('.cd-vertical-nav .cd-next').on('click', function(){
    	nextSection();
    });
    $(document).keydown(function(event){
		if( event.which=='38' ) {
			prevSection();
			event.preventDefault();
		} else if( event.which=='40' ) {
			nextSection();
			event.preventDefault();
		}
	});

	function nextSection() {
		if (!animating) {
			if ($('.is-visible[data-type="slider-item"]').next().length > 0) smoothScroll($('.is-visible[data-type="slider-item"]').next());
		}
	}

	function prevSection() {
		if (!animating) {
			var prevSection = $('.is-visible[data-type="slider-item"]');
			if(prevSection.length > 0 && $(window).scrollTop() != prevSection.offset().top) {
				smoothScroll(prevSection);
			} else if(prevSection.prev().length > 0 && $(window).scrollTop() == prevSection.offset().top) {
				smoothScroll(prevSection.prev('[data-type="slider-item"]'));
			}
		}
	}

	function setSlider() {
		checkNavigation();
		checkVisibleSection();
	}

	function checkNavigation() {
		( $(window).scrollTop() < $(window).height()/2 ) ? $('.cd-vertical-nav .cd-prev').addClass('inactive') : $('.cd-vertical-nav .cd-prev').removeClass('inactive');
		( $(window).scrollTop() > $(document).height() - 3*$(window).height()/2 ) ? $('.cd-vertical-nav .cd-next').addClass('inactive') : $('.cd-vertical-nav .cd-next').removeClass('inactive');
	}

	function checkVisibleSection() {
		var scrollTop = $(window).scrollTop(),
			windowHeight = $(window).height();

		$('[data-type="slider-item"]').each(function(){
			var actualBlock = $(this),
				offset = scrollTop - actualBlock.offset().top;
			//add/remove .is-visible class if the section is in the viewport - it is used to navigate through the sections
			( offset >= 0 && offset < windowHeight ) ? actualBlock.addClass('is-visible') : actualBlock.removeClass('is-visible');
		});
	}

	function smoothScroll(target) {
		animating = true;
        $('body,html').animate({'scrollTop': target.offset().top}, 500, function(){ animating = false; });
	}
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