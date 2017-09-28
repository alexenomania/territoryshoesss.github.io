$(function() {

	// Custom JS
	//E-mail Ajax Send
	$("form").submit(function() { //Change
			var th = $(this);
			var name = $.trim($('.form-control1').val());
			var nameee = $.trim($('#fio').val());
			if ((nameee  === '')||(name  === '')|| ($(".form-control1").hasClass( "error" ))) {
        	return false;
   				 };
			$.ajax({
				type: "POST",
				url: "mail.php", //Change
				data: th.serialize()

			}).done(function() {
				$(th).find('.succ').addClass('active').css('display','flex').hide().fadeIn();
				setTimeout(function() {
					document.getElementById("registrater-form1").reset();
					// Done Functions
					$(th).find('.succ').removeClass('active').fadeOut();
				}, 3000);
			});
			return false;
			
   	 		
	
		});

	$("form").submit(function() { //Change
			var th = $(this);
			var namee = $.trim($('.form-control2').val());
			var nameeee = $.trim($('#fio1').val());
			if ((nameeee  === '')||(namee  === '')|| ($(".form-control2").hasClass( "error" ))) {
        	return false;
   				 };
			$.ajax({
				type: "POST",
				url: "mail.php", //Change
				data: th.serialize()
			}).done(function() {
				$(th).find('.succ').addClass('active').css('display','flex').hide().fadeIn();
				$( ".callback_end" ).fadeOut( "fast", function() {
   				 });
				$( ".feed_png2" ).fadeOut( "fast", function() {
   				 });
				$( ".feed_png1" ).fadeOut( "fast", function() {
   				 });
				setTimeout(function() {
					document.getElementById("registrater-form2").reset();
					// Done Functions
					$(th).find('.succ').removeClass('active').fadeOut();
					$( ".callback_end" ).fadeIn( "fast", function() {
   				 });
					$( ".feed_png2" ).fadeIn( "fast", function() {
   				 });
					$( ".feed_png1" ).fadeIn( "fast", function() {
   				 });
				}, 3000);
			});
			return false;
		});

		$("form").submit(function() { //Change
			var th = $(this);
			var namie = $.trim($('.form-control3').val());
			var namiee = $.trim($('#fio2').val());
			if ((namiee  === '')||(namie  === '')|| ($(".form-control3").hasClass( "error" ))) {
        	return false;
   				 };
			$.ajax({
				type: "POST",
				url: "mail.php", //Change
				data: th.serialize()
			}).done(function() {
				$(th).find('.succ').addClass('active').css('display','flex').hide().fadeIn();
				setTimeout(function() {
					document.getElementById("registrater-form").reset();
					$.fancybox.close();
					$(th).find('.succ').removeClass('active').fadeOut();
				}, 3000);
			});
			return false;
		});



$('.reviews').owlCarousel({
	loop: true,
	items:1,
	smartSpeed:700,
	nav: true,
	autoHeight : true,
	navText:['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>']
});


	$('nav a').on('click', function() {

    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 28;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 500);

    return false;

	});


	$(window).scroll(function() {
	    var windscroll = $(window).scrollTop();
	    if (windscroll >= 100) {
	        $('section').each(function(i) {
	            if ($(this).position().top <= windscroll + 84) {
	                $('nav a.active').removeClass('active');
	                $('nav a').eq(i).addClass('active');
	            }
	        });
	    } else {
	        $('nav a.active').removeClass('active');
	        $('nav a:first').addClass('active');
	    }
	}).scroll();




$(document).ready(function(){
    $(".modalbox").fancybox();
	$("#registrater-form").validate({
			rules: {
				email: {
					required: true,
					email: true
				},
				firstName: {
					required: true,
					nowhitespace: true
				},
				phone: {
					required: true,
					phoneRU: true
				}
			},
			messages: {
				email: {
					required: 'Заполните адрес электронной почты',
					email: 'Введите корректный email',
					phone: 'Введите корректный номер телефона',
					nowhitespace: 'Имя не содержит пробелы'
				}
			}
		});
	

});
$(document).ready(function(){
    $(".modalbox").fancybox();
	$("#registrater-form1").validate({
			rules: {
				email: {
					required: true,
					email: true
				},
				firstName: {
					required: true,
					nowhitespace: true
				},
				phone: {
					required: true,
					phoneRU: true
				}
			},
			messages: {
				email: {
					required: 'Заполните адрес электронной почты',
					email: 'Введите корректный email',
					phone: 'Введите корректный номер телефона',
					nowhitespace: 'Имя не содержит пробелы'
				}
			}
		});
	

});

$(document).ready(function(){
    $(".modalbox").fancybox();
	$("#registrater-form2").validate({
			rules: {
				email: {
					required: true,
					email: true
				},
				firstName: {
					required: true,
					nowhitespace: true
				},
				phone: {
					required: true,
					phoneRU: true
				}
			},
			messages: {
				email: {
					required: 'Заполните адрес электронной почты',
					email: 'Введите корректный email',
					phone: 'Введите корректный номер телефона',
					nowhitespace: 'Имя не содержит пробелы'
				}
			}
		});
	
});

$(document).ready(function(){
    $(".modalbox").fancybox();
	$("#registrater-form3").validate({
			rules: {
				email: {
					required: true,
					email: true
				},
				firstName: {
					required: true,
					nowhitespace: true
				},
				phone: {
					required: true,
					phoneRU: true
				}
			},
			messages: {
				email: {
					required: 'Заполните адрес электронной почты',
					email: 'Введите корректный email',
					phone: 'Введите корректный номер телефона',
					nowhitespace: 'Имя не содержит пробелы'
				}
			}
		});
	
});

$(document).ready(function(){
    $(".modalbox").fancybox();
	$("#registrater-form4").validate({
			rules: {
				email: {
					required: true,
					email: true
				},
				firstName: {
					required: true,
					nowhitespace: true
				},
				phone: {
					required: true,
					phoneRU: true
				}
			},
			messages: {
				email: {
					required: 'Заполните адрес электронной почты',
					email: 'Введите корректный email',
					phone: 'Введите корректный номер телефона',
					nowhitespace: 'Имя не содержит пробелы'
				}
			}
		});
});

    $.validator.addMethod("phoneRU", function (value, element) {
        return this.optional(element) || /^((\+7)|(8))[0-9]{10}$/.test(value);
    }, "Please specify a valid phone number.");

$(window).scroll(function() {
		if ($(this).scrollTop() > $(window).height()) {
			$('.top').addClass("active");
		} else {
			$('.top').removeClass("active");
		};
	});





$('.btn').click(function(){
  $('.btn.disabled').removeClass('disabled')
        $(this).addClass('disabled');
});

$(window).on('load', function(){
	$('.preloader').delay(1000).fadeOut('slow');
});
$('.top').click(function(){
	$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
});

});