$(window).mousemove(function (e) {
    $('.cursor span').css({
      left: e.pageX,
      top: e.pageY
    })
  })
  $('a').on('mouseenter', function () {
    $('.cursor span').addClass('active');
  })
  $('a').on('mouseleave', function () {
    $('.cursor span').removeClass('active');
  })