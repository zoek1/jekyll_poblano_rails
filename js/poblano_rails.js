$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('red darken-2');
  } else {
    $('nav').removeClass('red darken-2');
  }
});
