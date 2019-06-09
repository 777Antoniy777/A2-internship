'use strict';
(function () {
  var WIDTH = 1170;

  var list = document.querySelector('.slider__content-list');
  var inputs = document.querySelectorAll('.slider__button-item input');
  var buttons = document.querySelectorAll('.slider__button-item label');
  var buttonLeft = document.querySelector('.slider__button--left');
  var buttonRight = document.querySelector('.slider__button--right');

  buttonLeft.style.display = 'none';

  var buttonHide = function (number, count, hiddenButton) {
    if (number === count) {
      hiddenButton.style.display = 'none';
    } else {
      hiddenButton.style.display = 'block';
    }
  };

  var DEFAULT_SLIDER_INDEX = 0;
  var sliderValues = [0, WIDTH * 1, WIDTH * 2, WIDTH * 3];
  var sliderValueIndex = DEFAULT_SLIDER_INDEX;

  // button change
  var changleScale = function (newIndex) {
    if (newIndex >= 0 && newIndex < sliderValues.length) {
      sliderValueIndex = newIndex;

      inputs[newIndex].checked = true;
    }

    var value = sliderValues[sliderValueIndex];

    list.style.transform = 'translate(' + -value + 'px)';
    list.style.transition = '2s';

    buttonHide(newIndex, 0, buttonLeft);
    buttonHide(newIndex, 3, buttonRight);
  };

  buttonRight.addEventListener('click', function () {
    changleScale(sliderValueIndex + 1);
  });

  buttonLeft.addEventListener('click', function () {
    changleScale(sliderValueIndex - 1);
  });

  // input change
  var slideInputChange = function (number, button) {
    button.addEventListener('click', function () {
      list.style.transform = 'translate(' + -WIDTH * number + 'px)';
      list.style.transition = '2s';

      buttonHide(number, 0, buttonLeft);
      buttonHide(number, 3, buttonRight);
    });
  };

  for (var i = 0; i < buttons.length; i++) {
    slideInputChange(i, buttons[i]);
  }
})();
