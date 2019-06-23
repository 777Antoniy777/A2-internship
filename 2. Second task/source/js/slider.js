'use strict';
(function () {
  // Константы
  var SLIDER_INDEX = 0;

  var transformValues = [0 + '%', -100 / 3 + '%', -100 * (2 / 3) + '%'];
  var slider = document.querySelector('.slider');
  var sliderList = slider.querySelector('.slider__list');
  var buttonLeft = slider.querySelector('.slider__button--left');
  var buttonRight = slider.querySelector('.slider__button--right');

  // функция изменения масштаба
  var transformValueIndex = SLIDER_INDEX;

  var changleScale = function (newIndex) {

    if (newIndex >= 0 && newIndex < transformValues.length) {
      transformValueIndex = newIndex;
    } else if (newIndex < 0) {
      transformValueIndex = 2;
    } else if (newIndex > 2) {
      transformValueIndex = 0;
    }

    var value = transformValues[transformValueIndex];
    sliderList.style.transform = 'translateX(' + value + ')';
    sliderList.style.transition = '2s';
  };

  buttonLeft.addEventListener('click', function () {
    changleScale(transformValueIndex - 1);
  });

  buttonRight.addEventListener('click', function () {
    changleScale(transformValueIndex + 1);
  });
})();
