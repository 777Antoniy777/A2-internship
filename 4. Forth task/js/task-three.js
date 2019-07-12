'use strict';
(function () {
  var obj1 = {
    firstName: 'Vasya',
    lastName: 'Pupkin',
    father: {
      firstName: 'Ivan',
      lastName: 'Pupkin'
    }
  };
  
  var obj2 = {
    firstName: 'Vasya',
    lastName: 'Pupkin',
    father: {
      firstName: 'Ivan',
      lastName: 'Pupkin'
    }
  };

  var isObjectsEqual = function (student1, student2) {
    var firstLevelfirstEqual = student1.firstName === student2.firstName;
    var firstLevelsecondEqual = student1.lastName === student2.lastName;
    var secondLevelfirstEqual = student1.father.firstName === student2.father.firstName;
    var secondLevelsecondEqual = student1.father.lastName === student2.father.lastName;

    if (firstLevelfirstEqual && firstLevelsecondEqual && secondLevelfirstEqual && secondLevelsecondEqual) {
      console.log(true);
      return;
    }
    
    console.log(false);
    return;
  };
  
  isObjectsEqual(obj1, obj2);
})();
