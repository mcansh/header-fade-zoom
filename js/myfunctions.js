var header = $('.container');
var range = 200;

$(window).on('scroll', function () {

    var scrollTop = $(this).scrollTop();
    var offset = header.offset().top;
    var height = header.outerHeight();
    offset = offset + height / 1.5;
    var calc = 1 - (scrollTop - offset + range) / range;

    header.css({ 'opacity': calc });

    if ( calc > '1' ) {
      header.css({ 'opacity': 1 });
    } else if ( calc < '0' ) {
      header.css({ 'opacity': 0 });
    }

    // $('nav').toggleClass('scroll');

});



// $().ready(function() {
//   var $fadeaway = $("header .container h1");
//
//   $(window).scroll(function(){
//     $fadeaway
//       .stop()
//       // .animate({"marginTop": ($(window).scrollTop() + 0) + "px"}, "0" );
//       $("header .container h1").animate({margin: "200px 0px 0px 0px"}, 100);
//   });
// });
