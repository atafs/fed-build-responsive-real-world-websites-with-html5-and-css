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
    // Scroll to specific values; scrollTo is the same;
    window.scroll({
      top: 2500, 
      left: 0, 
      behavior: 'smooth' 
    });

    // Scroll certain amounts from current position 
    window.scrollBy({ 
      top: 100, // could be negative value
      left: 0, 
      behavior: 'smooth' 
    });

    // Scroll to a certain element
    document.querySelector('.hello').scrollIntoView({ 
      behavior: 'smooth' 
    });
        
});