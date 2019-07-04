'use strict';
(function () {
  var tab = document.querySelector('.content__tab');
  var list = document.querySelector('.content__list');
  var items = list.querySelectorAll('.content__item');
  var widthItems = [];
  var distanceItems = [];

  items.forEach(function (elem, i, arr) {
    var width = elem.clientWidth;
    widthItems.push(width);

    return widthItems;
  });

  items.forEach(function (elem, i, arr) {
    var distance = elem.offsetLeft;
    distanceItems.push(distance);

    return distanceItems;
  });

  // the function for translating tab
  var linkClickHandler = function (item, width, distance) {
    item.addEventListener('click', function () {
      tab.style.width = width + 'px';
      tab.style.transform = 'translateX(' + distance + 'px)';
      tab.style.transition = '1s';
    });
  };

  for (var i = 0; i < items.length; i++) {
    linkClickHandler(items[i], widthItems[i], distanceItems[i]);
  }
})();
