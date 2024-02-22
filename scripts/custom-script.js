jQuery(function ($) {
  "use strict";

  /* Pre-loader
   *=============================================================================================================*/
  $(window).on("load", function(){
    $('#page-loader').fadeOut('slow', function() {
      $(this).remove();
    });
  });


  /* Scrolling Navbar (Both Method are correct)
   *=============================================================================================================*/
  /*1st Method
  * --------*/
  $(window).scroll(function() {
    if ($("nav").offset().top > 50) {
      $("nav").addClass("nav-collapse");
      $('#logo').attr("src", "img/logo.svg");
    } else {
      $("nav").removeClass("nav-collapse");
      $('#logo').attr("src", "img/logo-white.svg");
    }
  });

  /*2nd Method
  * --------*/
  /*$(document).on("scroll", function() {
    if($(document).scrollTop() > 50) {
      $("nav").addClass("nav-collapse");
    } else {
      $("nav").removeClass("nav-collapse");
    }
  });*/
  /*==============================================================================================================*/


  $(document).ready(function(){

    /*Materialize Initialization
    *=============================================================================================================*/
    M.AutoInit();

    /*Materialize Parallax
    * ============================================================================================================*/
    $('.parallax').parallax();

    /*WOW Initialization
    *=============================================================================================================*/
     var wow = new WOW({
      boxClass:     'wow',      // default
      animateClass: 'animated',
      offset:       100,
      mobile:       true,       // default
      live:         true,        // default
      callback:     function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
      }
    });
    wow.init();


    /* Page Scrolling Smoothly to Link Target (Both Method are correct)
    *=============================================================================================================*/
    /*1st Method
    * --------*/
    // $('a[href*=#]:not([href=#])').on('click', function() {
    //   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    //     || location.hostname == this.hostname) {
    //     var target = $(this.hash);
    //     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    //     if (target.length) {
    //       $('html,body').animate({
    //           scrollTop: target.offset().top - 0
    //       }, 1000);
    //       return false;
    //     }
    //   }
    // });

    /*2nd Method
    * --------*/
    // $("a").on('click', function(event) {

    //   // Make sure this.hash has a value before overriding default behavior
    //   if (this.hash !== "") {
    //     // Prevent default anchor click behavior
    //     event.preventDefault();

    //     // Store hash
    //     var hash = this.hash;

    //     // Using jQuery's animate() method to add smooth page scroll
    //     // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    //     $('html, body').animate({
    //       scrollTop: $(hash).offset().top
    //     }, 800, function(){

    //       // Add hash (#) to URL when done scrolling (default click behavior)
    //       window.location.hash = hash;
    //     });
    //   } // End if
    // });

    /*$('ul.tabs').tabs({
      swipeable : true,
      responsiveThreshold : 1920
      });*/

    /*Materialize Slider initialization
    * ============================================================================================================*/
      
      // $('.slider').slider();

    /*Materialize Carousel initialization
    * ============================================================================================================*/
      
      // $('.carousel').carousel({
      // 	  indicators: true
      // });
      $('.carousel.carousel-slider').carousel({
	  // duration: 200,
	  // dist: -100,
	  // shift: 0,
	  // padding: 0,
	  // numVisible: 3,	  
	  fullWidth: true,	  
	  indicators: true,
	  // noWrap: false,
	  // onCycleTo: null
      });
      
  });
});


