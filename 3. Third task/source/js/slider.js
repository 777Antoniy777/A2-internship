'use strict';
(function () {
  var tab = document.querySelector('.content__tab');
  var items = document.querySelectorAll('.content__item');;
  var distance = [0, 159, 333, 476];

  // the function for translating tab
  var linkClickHandler = function (item, distance) {
    item.addEventListener('click', function () {
      tab.style.transform = 'translateX(' + distance + 'px)';
      tab.style.transition = '1s';
    });
  };

  for (var i = 0; i < items.length; i++) {
    linkClickHandler(items[i], distance[i]);
  }
})();
