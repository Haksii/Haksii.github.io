// Selektuje sve linkove sa #
$('a[href*="#"]')
  // Eliminise linkove koji nemaju svoje odrediste
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // Linkovi na stranici
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Pronalazi element do kog treba da skrola
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Proverava da li postoji target link koji trazimo
      if (target.length) {
        // Zaustavlja defolt animaciju ako ce animacija da se izvrsi
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Vraca vrednost posle animacije
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Proverava da li je cilj u fokusu
            return false;
          } else {
            $target.attr('tabindex','-1'); // Dodaje tabindex za elemente koje ne moze da fokusuje
            $target.focus(); // Postavlja fokus opet
          };
        });
      }
    }
  });