var myMap;
var myPlacemark;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('contacts__map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [59.93643449817495,30.321726043655303], // Москва
        zoom: 16
    }, {
        searchControlProvider: 'yandex#search'
    });

    myPlacemark = new ymaps.Placemark([59.93863106417265,30.3230545], {}, {
        iconLayout: 'default#image',
        iconImageHref: "img/icons/icon-map-pin.svg",
        iconImageSize: [67, 100],
        iconImageOffset: [-90, 130]
    });

      myMap.geoObjects.add(myPlacemark);
    }

var link = document.querySelector(".button");
var popup = document.querySelector(".popup");
var close = document.querySelector(".week-item");

  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("popup-show");
  });

  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("popup-show");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
    if (popup.classList.contains("popup-show")) {
      popup.classList.remove("popup-show");
      }
    }
  })

