'use strict';
(function () {
  var html = document.querySelector('html');
  var filterPopup = document.querySelector('.filter-mobile');
  var filterWrapper = filterPopup.querySelector('.filter-mobile__wrapper');
  var filterPopupButtonClose = filterPopup.querySelector('.filter-mobile__button--close');
  var filterButton = document.querySelector('.filter__button--right');

  var mapPopup = document.querySelector('.map-popup');
  var mapButton = document.querySelector('.filter__button--left');
  var mapPopupButtonFirst = mapPopup.querySelector('.map-popup__button--left');
  var mapPopupButtonSecond = mapPopup.querySelector('.map-popup__button--right');

  var filterShow = function () {
    filterPopup.style.display = 'flex';
    html.style.overflow = 'hidden';
    filterWrapper.classList.add('filter-mobile__wrapper--transform');
  }
  
  var filterClose = function () {
    filterPopup.style.display = 'none';
    html.style.overflow = 'auto';
    filterWrapper.classList.remove('filter-mobile__wrapper--transform');
  }

  // Листенеры для попапа-фильтра
  // Открытие
  filterButton.addEventListener('click', filterShow);

  // Закрытие
  filterPopupButtonClose.addEventListener('click', filterClose);

  // Листенеры для попапа-карты
  // Открытие
  mapButton.addEventListener('click', function () {
    mapPopup.style.display = 'block';
    html.style.overflow = 'hidden';
  });

  // Закрытие
  mapPopupButtonFirst.addEventListener('click', function () {
    mapPopup.style.display = 'none';
    html.style.overflow = 'auto';
  });

  // Открытие фильтра через попап-карту
  mapPopupButtonSecond.addEventListener('click', filterShow);
})();
