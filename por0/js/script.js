$( document ).ready(function() {      
                $("#about_scroll").fadeOut();   
                $("#work_scroll").fadeOut();
                $("#contact_scroll").fadeOut();
                $("#about").click(function(){
                    $("#index").fadeOut();
                    $("#about_scroll").fadeIn();
                    $('#about_left').addClass('animated slideInLeft');
                    $('#about_right').addClass('animated slideInRight');
                    });
                $("#work").click(function(){
                    $("#index").fadeOut();
                    $("#work_scroll").fadeIn();
                    $('#work_left').addClass('animated slideInLeft');
                    $('#work_right').addClass('animated slideInRight');
                    });
                $("#contact").click(function(){
                    $("#index").fadeOut();
                    $("#contact_scroll").fadeIn();
                    $('#contact_left').addClass('animated slideInLeft');
                    $('#contact_right').addClass('animated slideInRight');
                    }); 
                $(".back").click(function(){
                    $(".pages").fadeOut();
                    $("#index").fadeIn();
                    $('#index_left').addClass('animated slideInLeft');
                    $('#index_right').addClass('animated slideInRight');
                    });
		});

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('mode-toggle');
    button.addEventListener('click', function() {
        document.body.classList.toggle('night-mode');
        document.body.classList.toggle('day-mode');
        
        // يمكنك تغيير نص الزر بناءً على الوضع الحالي
        if (document.body.classList.contains('night-mode')) {
            button.textContent = 'تبديل إلى الوضع النهاري';
        } else {
            button.textContent = 'تبديل إلى الوضع الليلي';
        }
    });
    
    // تعيين الوضع الافتراضي إلى النهاري
    document.body.classList.add('day-mode');
});
