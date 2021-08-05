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


