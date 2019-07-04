'use strict';
(function () {
  var popupScroll = document.querySelector('.popup-scroll');
  var body = document.querySelector('body');
  var wrapper = document.querySelector('.main__wrapper');

  // The function for scrolling window
  window.addEventListener('scroll', function () {
    // Coord popup
    var popupCoord = wrapper.getBoundingClientRect().top < 0;
    // Coord body
    var bodyCoord = body.getBoundingClientRect().top >= 0;

    if (popupCoord) {

      if (popupScroll.classList.contains('popup-scroll-close')) {
        popupScroll.classList.remove('popup-scroll-close');
      }

      popupScroll.classList.add('popup-scroll-show');
    }

    if (bodyCoord) {

      if (popupScroll.classList.contains('popup-scroll-show')) {
        popupScroll.classList.remove('popup-scroll-show');
      }

      popupScroll.classList.add('popup-scroll-close');
    }
  });

  // The function for scrolling popup
  popupScroll.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  });
})();
