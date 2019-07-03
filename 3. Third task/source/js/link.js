'use strict';
(function () {
  var links = document.querySelectorAll('.toogle__list .toogle__link');
  var linkTitle = document.querySelector('#link-title');
  var linkPrice = document.querySelector('#link-price');

  var arrValues = [
    {
      title: 'Standard ',
      price: '28'
    }, {
      title: 'Priority ',
      price: '37'
    }
  ];

  var setHref = function (link, index) {
    if (i === index) {
      link.removeAttribute('href');
    }

    link.href = '#';
  }

  var linkClickHandler = function (link, index) {
    link.addEventListener('click', function () {

      for (var i = 0; i < links.length; i++) {
        setHref(links[i], i);
      }
      

      // for (var i = 0; i < links.length; i++) {
      //   if (i === index) {
      //     link.removeAttribute('href');
      //   }

      //   link.href = '#';
      // }

      // links.forEach(function (elem , i, arr) {
      //   if (i === index) {
      //     link.removeAttribute('href');
      //   }

      //   link.href = '#';
      // });
  
      // link.href = '#';
      // link.removeAttribute('href');
      linkTitle.textContent = arrValues[index].title;
      linkPrice.textContent = arrValues[index].price;
    });
  };

  for (var i = 0; i < links.length; i++) {
    linkClickHandler(links[i], i);
  }
})();

