var header = $('.container');
var range = 200;

$(window).on('scroll', function () {

    var scrollTop = $(this).scrollTop();
    var offset = header.offset().top;
    var height = header.outerHeight();
    offset = offset + height / 1.5;
    var calc = 1 - (scrollTop - offset + range) / range;


    var size = (scrollTop/3000)+1;
    header.css({ 'opacity': calc });
    header.css('transform', 'scale('+size+')');


    if ( calc > '1' ) {
      header.css( 'opacity', '1' );
      $('nav').removeClass( 'scroll' );
    } else if ( calc < '0' ) {
      header.css( 'opacity', '0' );
      $('nav.mobile').addClass( 'scroll' );
    }

});


var $hamburger = $(".hamburger");
$hamburger.on("click", function(e) {
  $hamburger.toggleClass("is-active");
  // Do something else, like open/close menu
  $('nav.mobile').toggleClass('open');
  $('body').toggleClass('fixed');
});
