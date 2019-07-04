'use strict';
(function () {
  var links = document.querySelectorAll('.toogle__list .toogle__link');
  var linkTitle = document.querySelector('#link-title');
  var linkPrice = document.querySelector('#link-price');
  var linkPopupScroll = document.querySelector('#link-popup-scroll');

  var arrValues = [
    {
      title: 'Standard ',
      price: '28'
    }, {
      title: 'Priority ',
      price: '37'
    }
  ];

  var linkClickHandler = function (link, index) {
    link.addEventListener('click', function () {

      links.forEach(function (elem , i, arr) {
        elem.href = '#';
        elem.style.cursor = 'pointer';
      });

      link.removeAttribute('href');
      link.style.cursor = 'auto';
        
      linkTitle.textContent = arrValues[index].title;
      linkPrice.textContent = arrValues[index].price;
      linkPopupScroll.textContent = arrValues[index].price;
    });
  };

  for (var i = 0; i < links.length; i++) {
    linkClickHandler(links[i], i);
  }
})();

