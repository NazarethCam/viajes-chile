$(document).ready(function () {
  
    $(".card-title").click(function () {
        $(".card-text").toggle("slow", function () {
            // Animation complete.
        });
    });
});

// Movimiento Hover.
$( "h3.movi" ).hover(function() {
	$( this ).fadeOut( 100 );
	$( this ).fadeIn( 500 );

  
  });
// Movimiento Navbar.
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
// Cambio color icono al hacer doble click.
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
// Tooltip
$('[data-toggle="tooltip"]').tooltip();  

// Smooth Scroll.
	$("a").click(function(event) {
	if (this.hash !== "") {
	event.preventDefault();
	
	var gato = this.hash;
	
	$('html, body').animate({
	scrollTop: $(gato).offset().top
	}, 800, function(){
window.location.hash = gato;
});
} 
})