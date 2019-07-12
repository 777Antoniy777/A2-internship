'use strict';
(function () {
  var arr = [
    {
      name: 'Vasya',
      class: 6,
      mark: 3
    },
    {
      name: 'Vitya',
      class: 4,
      mark: 5
    },
    {
      name: 'Alena',
      class: 4,
      mark: 4
    },
    {
      name: 'Alexey',
      class: 9,
      mark: 3
    },
    {
      name: 'Andrey',
      class: 9,
      mark: 4
    },
    {
      name: 'Gena',
      class: 8,
      mark: 2
    },    
  ]

  console.table(arr);

  // first task
  var averageMark = 0;

  arr.forEach(function (elem, i, arr) {
    averageMark += elem.mark;
    
  });

  // average value all classes
  console.log(averageMark);


  // third task
  arr.sort(function (left, right) {

    if (left.name < right.name) {
      return -1;
    }

    if (left.mark < right.mark) {
      return -2;
    }

    if (left.name > right.name) {
      return 1;
    }
    
    if (left.mark > right.mark) {
      return 2;
    }

    return 0;
  });

  var newArr = arr.slice(-5);
  // the sorting arr
  console.log(newArr);

  
  // second task
  var value = 0;
  var uniqueValue = function (arr, number) {
    var obj = {};
  
    for (var i = 0; i < arr.length; i++) {
      var key = arr[i].class;

      if (obj[key] == !null) {
        number += arr[i].mark;
        obj[key] = number;
      } else {
        number = arr[i].mark;
        obj[key] = number; 
      }

      console.log(key, number);
    }
  
    return obj;
  }

  // console.log(uniqueValue(arr, value));
})();
