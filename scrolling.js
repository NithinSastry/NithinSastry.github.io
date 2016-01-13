$(".navbar-header a, .nav a, .down-icon a").on("click", function(){
    $("html, body").stop().animate({
       scrollTop : $($(this).attr("href")).offset().top - 55 
    }, 1500, "easeInOutExpo");
    event.preventDefault();
});

new WOW().init();