$(document).ready(function () {

  $('.menu').click(function (e) { 
    e.preventDefault();
      $(".navigation__wrapper").toggleClass('show-menu');
      $(".navigation__wrapper").focus();
      $("body").toggleClass('bcg-opacity');
  });

  $(".navigation__wrapper").blur(function (e) { 
    e.preventDefault();
    $(".navigation__wrapper").toggleClass('show-menu');
    $("body").toggleClass('bcg-opacity');
  });


});