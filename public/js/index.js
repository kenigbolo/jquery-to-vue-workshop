$(function() {
  $('.nav-bar li span').click(function() {
    $('.active').removeClass('active');
    $(this).addClass('active');

    $('.container').toggleClass('change');
  });

  $('.circle').click(function() {
    $('.circle').addClass('grow');
  });
});
