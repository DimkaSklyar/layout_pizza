function AjaxFormRequest(result_id, formMain, url) {
  jQuery.ajax({
    url: url,
    type: "POST",
    dataType: "html",
    data: jQuery("#" + formMain).serialize(),
    success: function (response) {
      $(':input', '#' + formMain)
        .not(':button, :submit, :reset, :hidden')
        .val('')
        .removeAttr('checked')
        .removeAttr('selected');
      setTimeout(() => {
        $("#message").hide();
      }, 5000);
    },
    error: function (response) {
      var par = document.getElementById(result_id);
      var error = document.createElement('p');
      error.classList.add("mt-3");
      error.innerHTML = "Возникла ошибка при отправке формы.";
      par.appendChild(error);
      setTimeout(func, 700);
    }
  });
}

function func() {
  $("p.mt-3").detach();
}
$('#form-orderes').submit(function (e) {
  e.preventDefault();
  AjaxFormRequest('messegeResult-order', 'form-orderes', './order.php');
});


$(document).ready(function () {

  $('.menu').click(function (e) { 
    e.preventDefault();
    $("body").append('<div class="bcg-opacity"></div>');
    $(".navigation__wrapper").addClass('show-menu');
  });


  $(".navigation__wrapper > .close-btn-menu").click(function (e) { 
    $(".navigation__wrapper").removeClass('show-menu');
    $(".bcg-opacity").remove();
  });

  $('[href="#order-popup"]').click(function (e) { 
    e.preventDefault();
    $("body").append('<div class="bcg-opacity-order"></div>');
    $(".cart__wrapper").addClass('show-order');
  });

  $(document).on('click','.bcg-opacity-order',function(){
      $(".cart__wrapper").removeClass('show-order');
      $(".bcg-opacity-order").remove();
  });

  $(document).on('click','.bcg-opacity',function(){
    $(".navigation__wrapper").removeClass('show-menu');
    $(".bcg-opacity").remove();
});

$(".cart__wrapper > .close-btn-menu").click(function (e) { 
  $(".cart__wrapper").removeClass('show-order');
  $(".bcg-opacity-order").remove();
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


    var mixer = mixitup("#menu-shop", {
      pagination: {
          limit: 2 // impose a limit of 8 targets per page
      }
  });
});