$(document).ready(function() {

  var header = $('header');
  var header_img = $('header .bg');
  var nav = $('nav');
  var range = 200;
  var pContainerHeight = $('header').height();
  var width = $(window).width();
  var about = $('section').offset();
  var $window = $(window);

  $window.scroll(function(){

      var wScroll = $(this).scrollTop();
      var offset = header.offset().top;
      var height = header.outerHeight();
      offset = offset + height / 1.5;
      var calc = 1 - (wScroll - offset + range) / range;


      var size = (wScroll/3000)+1;
      header_img.css({ 'opacity': calc });
      $('header .header-content').css({ 'opacity': calc });
      header_img.css('transform', 'scale('+size+')');


      if ( calc > '1' ) {
        header_img.css( 'opacity', '1' );
      } else if ( calc < '0' ) {
        header_img.css( 'opacity', '0' );
      }

      if ((width >= 800)) {
        if (wScroll <= pContainerHeight) {

          $('header .header-content h1').css({
            'transform' : 'translate(0px, '+ wScroll /6 +'%)'
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

  $window.scroll(function(){
    if ($window.scrollTop() >= about.top + (-110)) {
      nav.addClass("scroll");
    } else {
      nav.removeClass("scroll");
    }
  });

  $window.scroll(function(){
    if ($window.scrollTop() >= about.top + 40) {
      nav.css('box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15)');
    } else {
      nav.css('box-shadow: none');
    }
  });



});
