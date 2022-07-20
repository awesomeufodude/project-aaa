/*!
* Start Bootstrap - Modern Business v5.0.6 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});

$(function() {

    $("a").click(function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var gato = this.hash;

            $("html, body").animate({
                scrollTop: $(gato).offset().top
            }, 800, function() {
                window.location.hash = gato;
            });
        }
    });
    $('[data-toggle="popover"]').popover();
});