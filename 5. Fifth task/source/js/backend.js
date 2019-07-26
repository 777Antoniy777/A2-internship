'use strict'; 
(function () { 
  var URL_USERS = 'https://jsonplaceholder.typicode.com/users'; 

  var Datacode = { 
    SUCCESS: 200 
  }; 

  var TimeoutValue = { 
    USERS_VALUE: 10000 
  }; 

  var getDataUsers = function (onLoad, onError) { 
    var xhr = new XMLHttpRequest(); 
    xhr.responseType = 'json'; 

    xhr.open('GET', URL_USERS); 

    xhr.addEventListener('load', function () { 
      if (xhr.status === Datacode.SUCCESS) { 
        onLoad(xhr.response); 
      } else { 
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText); 
      } 
    }); 

    xhr.addEventListener('error', function () { 
      nError('Произошла ошибка соединения'); 
    }); 

    xhr.addEventListener('timeout', function () { 
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс'); 
    }); 

    xhr.timeout = TimeoutValue.USERS_VALUE; 

    xhr.send(); 
  };

  // глобальный вызов 
  window.backend = { 
    // функции 
    getDataUsers: getDataUsers
  }; 
})();
