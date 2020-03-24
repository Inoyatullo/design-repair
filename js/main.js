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

$(document).ready(function () {
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

  new WOW().init();

  $('.modal__form').validate({
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
      userEmail: {
        required: true,
        email: true
      },
      policyCheckbox: "required"
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
      policyCheckbox: ""
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
          alert('Форма отправлен, мы свяжемся с вами через 10 минут.');
          $(form)[0].reset();
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
      policyCheckbox: "required"
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух символов",
        maxlength: "Имя не больше 15 символов"
      },
      userPhone: "Номер телефона обязательно",
      policyCheckbox: ""
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
          alert('Форма отправлен, мы свяжемся с вами через 10 минут.');
          $(form)[0].reset();
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
      policyCheckbox: "required"
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
      policyCheckbox: ""
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
          alert('Форма отправлен, мы свяжемся с вами через 10 минут.');
          $(form)[0].reset();
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

  // Функция ymaps.ready() будет вызвана, когда

  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.750783, 37.592578],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Наш офис',
            balloonContent: 'Вход со двора'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/marker.png',
            // Размеры метки.
            iconImageSize: [32, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects
        .add(myPlacemark);
});

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