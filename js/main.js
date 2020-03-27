/* document.addEventListener("DOMContentLoaded", (event) => {
  
  const modal = document.querySelector(".modal"),
      switchModal = () => modal.classList.toggle('modal--visible');


  document.body.addEventListener('click', ev => {
      const {target} = ev;
      if (target.matches('[data-toggle=modal], .modal__close')) {
          switchModal();
      } else if (!target.closest('.modal') && modal.classList.contains('modal--visible')) {
          switchModal();
      }
  });

  document.addEventListener('keydown', e => {
    e.keyCode === 27 && modal.classList.contains('modal--visible') ? switchModal() : false;
});
}); */

(function() {
  var btnScrollDown = document.querySelector('#scroll_down');
  function scrollDown() {
    var windowCoords = document.documentElement.clientHeight;
    (function scroll() {
      if (window.pageYOffset < windowCoords) {
        window.scrollBy(0, 10);
        setTimeout(scroll, 0);
      }
      if (window.pageYOffset > windowCoords) {
        window.scrollTo(0, windowCoords);
      }
    })();
  }
  btnScrollDown.addEventListener('click', scrollDown);
})();



const map = document.querySelector(".map");
const control = document.querySelector('.control')
map.setAttribute('style', 'display: none');
control.setAttribute('style', 'display: none');
window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  (scrollTop>3700) ? map.setAttribute('style', 'display: block') :   map.setAttribute('style', 'display: none');
  (scrollTop>700) ? control.setAttribute('style', 'display: block') :   control.setAttribute('style', 'display: none');
});

$(document).ready(function () {

  $("#top-menu").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({
        scrollTop: top
    }, 1000);
  });

  var modal = $('.modal'),
    modalBtn = $('[data-toggle="modal"]');
    closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  var modalka = $('.modalka'),
    modalkaBtn = $('[data-toggle="modalka"]');
    closelkaBtn = $('.modalka__close');

  modalkaBtn.on('click', function() {
      modalka.toggleClass('modalka--visible');
  });
  closelkaBtn.on('click', function (){
      modalka.toggleClass('modalka--visible');
  });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() +15 +bullets.width() +15)
  bullets.css('left', prev.width() +15)


  $('.modal__form').validate({
    errorElement: "em",
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // compound rule
      userEmail: {
        required: true,
        email: true
      },
      modalCheckbox: "required"
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух символов",
        maxlength: "Имя не больше 15 символов"
      },
      userPhone: "Номер телефона обязательно",
      userEmail: {
        required: " указать адрес электронной почты",
        email: "Введите в фомате: name@domain.com"
      },
      modalCheckbox: "Обработка обязательна"
    },
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
      error.insertAfter($(element));
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modalka.toggleClass('modalka--visible');
          modal.removeClass('modal--visible');
        },
        error: function (response) {
          console.error('Ошибка запроса.', + response);
          
        }
      });
    }
  });

  $('.control__form').validate({
    errorElement: "em",
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      userCheckbox: "required"
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух символов",
        maxlength: "Имя не больше 15 символов"
      },
      userPhone: "Номер телефона",
      userCheckbox: "Обработка обязательна"
    },
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
      error.insertAfter($(element));
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modalka.toggleClass('modalka--visible');
          modal.removeClass('modal--visible');
        },
        error: function (response) {
          console.error('Ошибка запроса.', + response);
          
        }
      });
    }
  });

  $('.footer__form').validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // compound rule
      userQuestion: "required",
      footerCheckbox: "required"
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух символов",
        maxlength: "Имя не больше 15 символов"
      },
      userPhone: "Номер телефона обязательно",
      userQuestion: {
        required: " задать вопрос",
      },
      footerCheckbox: "Обработка обязательна"
    },
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
  
      error.insertAfter($(element));
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modalka.toggleClass('modalka--visible');
          modal.removeClass('modal--visible');
        },
        error: function (response) {
          console.error('Ошибка запроса.', + response);
          
        }
      });
    }
  });
  // маска для телефона
  $('[type=tel]').mask('+7(000) 00-00-000', {placeholder: "+7(___) __-__-___"}) 

  var player;
  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '434',
      width: '100%',
      videoId: 'RHzzLqJWqHs',
      events: {
        'onReady': playVideo,
      }
    });
  })
  function playVideo(event) {
    event.target.playVideo();
  }

});

/* $(document).ready(function () {
  var btnTop = $('.btn-top');
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 350 ) {
      $(btnTop).fadeIn();
    }else {
      $(btnTop).fadeOut();
    }
  });
  $(btnTop).on('click', function () {
    $('html,body').animate({scrollTop:0}, 1000);
  });
}); */