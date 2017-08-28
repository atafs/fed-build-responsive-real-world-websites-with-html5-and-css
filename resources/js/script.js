$(document).ready(function() {

    /* For the sticky navigation */
    var waypoint = new Waypoint({
      element: document.getElementsByClassName('js--section-features'),
      handler: function(direction) {
         if (direction == "down") {
            $('nav').addClass('sticky');
          } else {
            $('nav').removeClass('sticky');
          }
      },
      offset: 150
    });

    /* Scroll of bottons */
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1500);
    });

     $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 700);
    });

    /* Navigation scroll */
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

    /* Animation */
    var waypoint = new Waypoint({
      element: document.getElementsByClassName('js--wp-1'),
      handler: function(direction) {
         $('.js--wp-1').addClass('animated fadeIn');
      },
      offset: '50%'
    })

    var waypoint = new Waypoint({
      element: document.getElementsByClassName('js--wp-2'),
      handler: function(direction) {
         $('.js--wp-2').addClass('animated fadeInUp');
      },
      offset: '50%'
    })

    var waypoint = new Waypoint({
      element: document.getElementsByClassName('js--wp-3'),
      handler: function(direction) {
         $('.js--wp-3').addClass('animated fadeIn');
      },
      offset: '50%'
    })

    var waypoint = new Waypoint({
      element: document.getElementsByClassName('js--wp-4'),
      handler: function(direction) {
         $('.js--wp-4').addClass('animated pulse');
      },
      offset: '50%'
    })

    /* Parallax */
    $('#main').stellar();
});
