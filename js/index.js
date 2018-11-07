$("a.nav-link").hide();

$(document).ready(function() {
  
  // scroll-reveal effect
  ScrollReveal().reveal('#about',{ delay: 150 });
  ScrollReveal().reveal('#myWork',{ delay: 150 });
  ScrollReveal().reveal('.hex');
  ScrollReveal().reveal('#contact',{ delay: 150 });
  ScrollReveal().reveal('.icons');

  $("body").scrollspy({
    target: ".navbar",
    offset: 50
  });

  // custom setting for mobile
  if ($(window).width() <= 667) {
    $("a.nav-link").show();
    $("#home").removeClass("parallax");
    $("#myWork").removeClass("parallax");
  } else {
    // nav-links fadeIn with scroll
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $("a.nav-link").fadeIn();
      } else {
        $("a.nav-link").fadeOut();
      }
    });
  }

  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a, a[href='#home']").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        900,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    }
  });
});

// Init stellar
$.stellar();
