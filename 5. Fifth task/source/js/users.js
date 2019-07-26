'use strict'; 
(function () { 
  // функция подставления данных в гл.стр 
  var userTemplate = document.querySelector('#user'); 
  var usersList = document.querySelector('.blog__list'); 
  var userTemplateContent = userTemplate.content; 

  var setUsers = function (arrUsers) {
    arrUsers.forEach(function (elem, i) { 
      var templateItem = userTemplateContent.cloneNode(true); 

      templateItem.querySelector('.blog__avatar').src = 'img/user-' + elem.id + '.png'; 
      templateItem.querySelector('.blog__user-name').textContent = elem.name;

      usersList.appendChild(templateItem); 
    }); 
  };

  // глобальный вызов 
  window.users = {
    // переменные 
    // imageItem: imageItem, 
    // функции 
    setUsers: setUsers
  }; 
})();
