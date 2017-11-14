$(window).on('load', function () {

  // check header position
  if ($(this).scrollTop() > 0)
  {
      $('.header').addClass("header--isTransformed");
  }

  // preloader fadeOut
  $preloader = $('.preloader'),
    $loader = $preloader.find('.loader');
  $loader.fadeOut('slow');
  $preloader.delay(350).fadeOut('slow');

});
