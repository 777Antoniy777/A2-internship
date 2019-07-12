'use strict';
(function () {
  var inputElement = document.getElementById('input');

  var lastTimeout;
  var autosave = function (evt) {
    var target = evt.target;

    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }

    lastTimeout = window.setTimeout(function () {
      console.log(target.value);
    }, 3000);
  };

  inputElement.addEventListener('input', autosave);

})();
