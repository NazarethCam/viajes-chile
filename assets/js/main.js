$(document).ready(function () {
    
    $(".card-title").click(function () {
        $(".card-text").toggle("slow", function () {
            // Animation complete.
        });
    });
});

$("a").click(function (event) {
    if (this.hash !== "")
        event.preventDefault();

    var gato = this.hash;

    $("html, body").animate({
        scrolltop: $(gato).offset().top
    }, 800, function () {
        window.location.hash = gato;
    });
});

$( "h3.movi" ).hover(function() {
	$( this ).fadeOut( 100 );
	$( this ).fadeIn( 500 );

  });

  $(window).scroll(function(){
    var scroll = jQuery(window).scrollTop();
    if (scroll >= 100) {
      $("#menuFijo").addClass("menu-color-fijo-scroll");
    }
  
    else{
      $("#menuFijo").removeClass("menu-color-fijo-scroll");  	
    }
  });

  $( ".mov-1" ).on( "mouseover", function() {
	$( this ).css( "color", "orange" );
  });

  $('.fas').dblclick(function() {
    var theColorIs = $(this).css("background-color");
    theColorIs.split(" ").join('')
    console.log(theColorIs)
    if (theColorIs === 'rgb(25, 163, 184)') { 
        $(this).css('background-color', 'red')
    } 
    else { 
        $(this).css('background-color', '#19A3B8')
    }
});
    
