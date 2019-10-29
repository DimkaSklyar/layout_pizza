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


  
  $('[href="#order-popup"]').click(function (e) { 
    e.preventDefault();
      $(".cart__wrapper").toggleClass('show-order');
      $(".cart__wrapper").focus();
      $("body").toggleClass('bcg-opacity');
  });

  $(".cart__wrapper").blur(function (e) { 
    e.preventDefault();
    $(".cart__wrapper").toggleClass('show-order');
    $("body").toggleClass('bcg-opacity');
  });

  $('.slick-popular-product').slick();

  $('.reviews').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  $('.instagram__inner').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,

        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


    $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Загрузка изображения #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">Изображение #%curr%</a> не загруженно.',
        titleSrc: function(item) {
          return '<small>Автор фотографии: @pizza_riya</small>';
        }
      }
    });
    

    $('.popup-with-move-anim').magnificPopup({
      type: 'inline',
  
      fixedContentPos: false,
      fixedBgPos: true,
  
      overflowY: 'auto',
  
      closeBtnInside: true,
      preloader: false,
      
      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-slide-bottom'
    });
});