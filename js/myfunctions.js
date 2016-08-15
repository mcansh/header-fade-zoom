$(document).ready(function() {

  var header = $('header'),
      header_img = $('header .bg'),
      nav = $('nav'),
      range = 200,
      pContainerHeight = $('header').height(),
      width = $(window).width(),
      about = $('section').offset(),
      $window = $(window);

  $window.scroll(function(){

      var wScroll = $(this).scrollTop(),
          offset = header.offset().top,
          height = header.outerHeight();
      offset = offset + height / 1.5;
      var calc = 1 - (wScroll - offset + range) / range;


      var size = (wScroll/3000)+1;
      header_img.css({ 'opacity': calc });
      $('header .header-content').css({ 'opacity': calc });
      header_img.css('transform', 'scale3d('+size+', '+size+', '+size+')');

      if ((width >= 800)) {
        if (wScroll <= pContainerHeight) {

          // $('header .header-content h1').css({
          //   'transform' : 'translate(0px, '+ wScroll /5.75 +'%)'
          // });

          $('header .header-container .header-content h1').css({
            'transform' : 'translate3d(0px, '+ wScroll /4 +'%, 0px)'
          });
        }
      }

  });


  var $hamburger = $(".hamburger");
  $hamburger.on("click", function() {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
    $('nav').toggleClass('open');
    $('body').toggleClass('fixed');
  });

  $window.scroll(function(){
    if ($window.scrollTop() >= about.top + (-100)) {
      nav.addClass("scroll");
    } else {
      nav.removeClass("scroll");
    }
  });



});
