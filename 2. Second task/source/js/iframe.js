'use strict';
(function () {
  var mapIframe = document.querySelector(".map__iframe");
  var mapPopupIframe = document.querySelector(".map-popup__iframe");

  if (mapIframe.classList.contains("map__iframe--nojs")) {
    mapIframe.classList.remove("map__iframe--nojs");
  }

  if (mapPopupIframe.classList.contains("map-popup__iframe--nojs")) {
    mapPopupIframe.classList.remove("map-popup__iframe--nojs");
  }
})();
