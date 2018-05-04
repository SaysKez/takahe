//CURSOR
/* Thanks for the help @tajdidr */

$('body').mouseover(function() {
    $(this).css({
      cursor: 'none'
    });
  });
  
  $(document).on('mousemove', function(e) {
    $('#circle-hover').css({
      left: e.pageX,
      top: e.pageY
    });
    $('#circle').css({
      left: e.pageX,
      top: e.pageY
    });
  });
  $('a').mouseover(function() {
    $('#cursor').addClass('on-link');
  })
  $('a').mouseout(function() {
    $('#cursor').removeClass('on-link');
  })