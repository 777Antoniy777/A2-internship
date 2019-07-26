'use strict'; 
(function () { 
  // получение данных с сервера 
  var users = []; 

  var successPictureHandler = function (response) { 
    users = response; 
    window.users.setUsers(response); 
  }; 

  // var errorPictureHandler = function () {
  //   window.setup.main.appendChild(window.setup.errorTemplate); 
  //     window.setup.errorWrapper.style.display = 'flex'; 
  //     document.addEventListener('keydown', function (evt) { 
  //     window.openClose.isEscEvent(evt, errorPictureClose); 
  //   }); 
  // }; 

  window.backend.getDataUsers(successPictureHandler); 

  // глобальный вызов 
  window.main = { 
    // переменные 
    users: users 
  }; 
})();
