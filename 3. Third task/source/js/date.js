'use strict';
(function () {
  var dateInput = document.querySelector('.registration__wrapper--date input');
  var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  
  // jQuery plagin 
  $( function() {
    $( "#datepicker" ).datepicker();
  } );

  var d = new Date();

  // function of setting date now
  function formatDate(date) {
  
    var dd = date.getDate();
    if (dd < 10) {
      dd = '0' + dd;
    }
  
    var mm = date.getMonth() + 1;
    if (mm < 10) {
      mm = '0' + mm;
    }
  
    var yy = date.getFullYear();
    if (yy < 10) {
      yy = '0' + yy;
    }
  
    return mm + '/' + dd + '/' + yy;
  }

  var currentDate = formatDate(d);
  dateInput.value = currentDate;

  function getWeekDay() {
    var date = new Date(dateInput.value);
    var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  
    return days[date.getDay()];
  }

  // dateInput.addEventListener('input', function (evt) {
  //   getWeekDay();
  //   console.log(evt.target.value);
  // });
  // console.log(getWeekDay());
})();
