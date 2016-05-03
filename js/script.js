$(document).ready(function(){
    
//   анимация кнопки меню 
    $('.cmn-toggle-switch').click(function(){
       $(this).toggleClass('active');
   });
    
    
    
    
//    адаптивное меню   
      $('.cmn-toggle-switch').click(function(){
       $('.menu-header').slideToggle(function(){
      if($(this).is(':visible')){
            $('body,html').css({overflow:'hidden'});
    }else{
         $('body,html').css({overflow:'auto'})
        }
    });
           
});
 

//     меню сайдбара
   $('.menu-sidebar h3').click(function(){$(this).next('.menu-sidebar .submenu').slideToggle();});
 

   
//    слайдер
    $('.bxslider').bxSlider({
        auto: false
    });
    
    
    
//    плавающее меню
$(window).scroll(function() {
    var top = $(document).scrollTop();
    if (top < 210) {$(".batton-menu").css({top: '0', position: 'relative',background: 'rgba(175,19,23,1)' });
$(".menu-header").css({ borderRadius: '5px 5px 0 0'});
                  
     }
    else {$(".batton-menu").css({top: '0', left: '0', position: 'fixed', width:'100%'});
           $(".menu-header").css({ borderRadius: '0',boxShadow: '0 1px 1px rgba(0, 0, 0, 0.5)'});
          
         }
    });
   
    
    
//    каруселька
 $("#owl-example").owlCarousel({
     items:5,
     nav:true,
     navText:'',
     loop:true,
     autoplay:true,
     autoplayTimeout:2000
 });
    
//    всплывающие окно 
     $('.button-training').magnificPopup();

    
    
//    отправка формы
	$("#form_training").submit(function() {
		$.ajax({
			type: "POST",
			url: "../mail.php",
			data: $(this).serialize()
		}).done(function() {
//            window.location.href = "../index.html";
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			setTimeout(function() {
				$("#form_training").trigger("reset");
			}, 700);
			
		});
		return false;
	});
	
    
    
    
    
    
});