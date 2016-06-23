$(document).ready(function() {

  var header = $('header');
  var header_img = $('header .bg');
  var range = 200;
  var pContainerHeight = $('header').height();
  var width = $(window).width();
  var about = $('#about');

  $(window).scroll(function(){

      var wScroll = $(this).scrollTop();
      var offset = header.offset().top;
      var height = header.outerHeight();
      var $window = $(window);
      offset = offset + height / 1.5;
      var calc = 1 - (wScroll - offset + range) / range;

      $window.scroll(function() {
        if ($window.scrollTop() >= about.top) {
            $("nav").addClass("scroll");
        }
      });


      var size = (wScroll/3000)+1;
      header_img.css({ 'opacity': calc });
      header_img.css('transform', 'scale('+size+')');


      if ( calc > '1' ) {
        header_img.css( 'opacity', '1' );
      } else if ( calc < '0' ) {
        header_img.css( 'opacity', '0' );
      }

      if ((width >= 800)) {
        if (wScroll <= pContainerHeight) {

          $('header h1').css({
            'transform' : 'translate(0px, '+ wScroll /2 +'%)'
          });
        }
      }

  });


  var $hamburger = $(".hamburger");
  $hamburger.on("click", function() {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
    $('nav.mobile').toggleClass('open');
    $('body').toggleClass('fixed');
  });
});
