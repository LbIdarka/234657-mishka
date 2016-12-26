var navMenu = document.querySelector(".menu");
var navToggle = document.querySelector(".menu__toggle");

  navMenu.classList.remove("menu--nojs");

  navToggle.addEventListener("click", function() {
    if (navMenu.classList.contains("menu--closed")) {
      navMenu.classList.remove("menu--closed");
      navMenu.classList.add("menu--opened");
    }
    else {
      navMenu.classList.add("menu--closed");
      navMenu.classList.remove("menu--opened");
    }
  });



var buy = document.querySelectorAll(".popup-buy");
var popup = document.querySelector(".popup");

  if (buy) {
    for (var i = 0; i < buy.length; i++) {
      buy[i].addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("popup--show");
      });
    }
  }

  window.addEventListener("keydown", function() {
    if (event.keyCode === 27) {
      if (popup.classList.contains("popup--show")) {
        popup.classList.remove("popup--show");
      }
    }
  });



var myMap;
var myPlacemark;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map("contacts__map", {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [59.93643449817495,30.321726043655303], // Москва
        zoom: 17
    }, {
        searchControlProvider: "yandex#search"
    });

    myPlacemark = new ymaps.Placemark([59.93643449817495,30.321726043655303], {}, {
        iconLayout: "default#image",
        iconImageHref: "img/icons/icon-map-pin.svg",
        iconImageSize: [67, 100],
        iconImageOffset: [-30, -55]
    });

      myMap.geoObjects.add(myPlacemark);
    }
