'use strict';
(function () {
  var func = function (index) {
    setTimeout(function () {
      console.log(index);
    }, 0); 
  };

  for (var i = 0; i < 10; i++) {
    func(i);
  }    
})();
