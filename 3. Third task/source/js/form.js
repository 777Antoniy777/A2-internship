'use strict';
(function () {
  var selectWrapperTour = document.querySelector('.registration__wrapper--tour');
  var selectWrapperTickets = document.querySelector('.registration__wrapper--tickets');
  var innerPresentWrapperTour = selectWrapperTour.querySelector('.registration__wrapper:nth-child(1)');
  var innerPresentWrapperTickets = selectWrapperTickets.querySelector('.registration__wrapper:nth-child(1)');
  var innerWrapperTour = selectWrapperTour.querySelector('.registration__wrapper:nth-child(2)');
  var innerWrapperTickets = selectWrapperTickets.querySelector('.registration__wrapper:nth-child(2)');

  // form var
  var form = document.querySelector('.registration__form');
  var buttonSubmit = form.querySelector('.registration__button--submit');

  // tour var
  var tourItems = innerWrapperTour.querySelectorAll('.registration__item');
  var tourDescription = innerPresentWrapperTour.querySelector('.registration__description');

  // tickets var
  var persons = ['Adult x ', ' Senior x ', ' Yuth x ', ' Child x '];
  var prices = [28, 26, 13, 0];
  var ticketsInputs = innerWrapperTickets.querySelectorAll('input');
  var ticketsInputWrappers = innerWrapperTickets.querySelectorAll('.registration__input-wrapper');
  var ticketsDescription = innerPresentWrapperTickets.querySelector('.registration__description');
  var ticketsTotlaDescription = form.querySelector('.registration__description--total');
  var ticketsTotlaPrice = ticketsTotlaDescription.querySelector('#total-price');
  var adultPrice = innerWrapperTickets.querySelector('#adults');
  var seniorPrice = innerWrapperTickets.querySelector('#senior');
  var yuthPrice = innerWrapperTickets.querySelector('#yuth');
  var childPrice = innerWrapperTickets.querySelector('#child');

  // popups
  var popupFail = document.querySelector('.popup-fail');
  var popupTotalPrice = document.querySelector('#popup-total-price');
  var adultPopupItem = document.querySelector('#adult-popup');
  var seniorPopupItem = document.querySelector('#senior-popup');
  var yuthPopupItem = document.querySelector('#yuth-popup');
  var childPopupItem = document.querySelector('#children-popup');
  var adultPopup = adultPopupItem.querySelector('#adult-popup span');
  var seniorPopup = seniorPopupItem.querySelector('#senior-popup span');
  var yuthPopup = yuthPopupItem.querySelector('#yuth-popup span');
  var childPopup = childPopupItem.querySelector('#children-popup span');

  // cancel form submission
  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
  });
  
  var adultCount;
  var seniorCount;
  var yuthCount;
  var childCount;
  var adultArr = [];
  var seniorArr = [];
  var yuthArr = [];
  var childArr = [];

  var mainArr = [];
  var totalPrice = 0;

  var countPrice = function () {
    var totalAdultPrice = adultPrice.value * prices[0];
    var totalSeniorPrice = seniorPrice.value * prices[1];
    var totalYuthPrice = yuthPrice.value * prices[2];
    var totalChildPrice = childPrice.value * prices[3];

    if (adultPrice.value > 0) {
      adultPopup.textContent = adultPrice.value;
      adultPopupItem.style.display = 'block';
    } else {
      adultPopupItem.style.display = 'none';
    }

    if (seniorPrice.value > 0) {
      seniorPopup.textContent = seniorPrice.value;
      seniorPopupItem.style.display = 'block';
    } else {
      seniorPopupItem.style.display = 'none';
    }

    if (yuthPrice.value > 0) {
      yuthPopup.textContent = yuthPrice.value;
      yuthPopupItem.style.display = 'block';
    } else {
      yuthPopupItem.style.display = 'none';
    }

    if (childPrice.value > 0) {
      childPopup.textContent = childPrice.value;
      childPopupItem.style.display = 'block';
    } else {
      childPopupItem.style.display = 'none';
    }

    totalPrice = totalAdultPrice + totalSeniorPrice + totalYuthPrice + totalChildPrice;
    
    return totalPrice;
  };

  var buttonClickHandler = function (wrapper, input, person, index) {
    var inputIndex = 0;
    var buttonLeft = wrapper.querySelector('.registration__button--left');
    var buttonRight = wrapper.querySelector('.registration__button--right');
  
    // create choosing persons
    var createPerson = function (number, emptyVar, emptyArr) {
      if (index === number) {
        if (inputIndex >= 1) {
          emptyVar = person + inputIndex;
          emptyArr.splice(0, 2);
          emptyArr.push(emptyVar);
        } else {
          emptyArr.splice(0, 2);
        }
      }
      return emptyArr;
    };

    var createArr = function () {
      var adults = createPerson(0, adultCount, adultArr);
      var seniors = createPerson(1, seniorCount, seniorArr);
      var yuths = createPerson(2, yuthCount, yuthArr);
      var childs = createPerson(3, childCount, childArr);

      mainArr = adults.concat(seniors).concat(yuths).concat(childs);

      if (mainArr.length === 0) {
        ticketsDescription.textContent = 'Select Tickets';
        innerPresentWrapperTickets.classList.remove('success-wrapper');
        ticketsTotlaDescription.style.display = 'none';
      } else {
        ticketsDescription.textContent = mainArr;
        innerPresentWrapperTickets.classList.remove('focus-wrapper');
        innerPresentWrapperTickets.classList.add('success-wrapper');
        ticketsTotlaDescription.style.display = 'block';
        ticketsTotlaPrice.textContent = countPrice();
        // for popup
        popupTotalPrice.textContent = countPrice();
      }
    }

    var changleIndex = function (newIndex) {

      if (newIndex >= 1) {
        inputIndex = newIndex;
        buttonLeft.classList.remove('btn-disabled');
      } else if (newIndex <= 0) {
        inputIndex = 0;
        buttonLeft.classList.add('btn-disabled');
      }
  
      var value = inputIndex;
      input.value = value;
    };
  
    buttonLeft.addEventListener('click', function () {
      changleIndex(inputIndex - 1);

      // create main arr all persons
      createArr();
    });
  
    buttonRight.addEventListener('click', function () {
      changleIndex(inputIndex + 1);

      // create main arr all persons
      createArr();
    });

    input.addEventListener('input', function () {
      var inputIndex = parseInt(input.value);

      if (inputIndex <= 0) {
        changleIndex(inputIndex);
      } else if (inputIndex >= 1) {
        changleIndex(inputIndex);
      }
    });

    input.addEventListener('change', function () {
      // create main arr all persons
      createArr();
    });
  };

  for (var i = 0; i < ticketsInputWrappers.length; i++) {
    buttonClickHandler(ticketsInputWrappers[i], ticketsInputs[i], persons[i], i);
  }

  // function of showing select
  var wrapperClickHandler = function (presentWrapper, innerWrapper) {
    presentWrapper.addEventListener('click', function (evt) {
      evt.preventDefault();
      innerWrapper.style.display = 'block';
      presentWrapper.classList.add('focus-wrapper');

      if (presentWrapper.classList.contains('error-wrapper')) {
        presentWrapper.classList.remove('error-wrapper');
      }
    });
  };

  // function of closing select
  var bodyClickHandler = function (innerWrapper, presentWrapper, name) {
    document.addEventListener('click', function (evt) {
      if (evt.target.closest("." + name)) {
        return;
      }

      if (presentWrapper.classList.contains('focus-wrapper')) {
        presentWrapper.classList.remove('focus-wrapper');
      }

      innerWrapper.style.display = 'none';
    });
  };

  // function of the choosing item of tour select
  var tourItemClickHandler = function (item) {
    item.addEventListener('click', function () {
      tourDescription.textContent = item.textContent;

      innerPresentWrapperTour.classList.remove('focus-wrapper');
      innerPresentWrapperTour.classList.add('success-wrapper');
    });
  };

  tourItems.forEach(function(elem, i, arr) {
    tourItemClickHandler(tourItems[i]);
  })

  // function of form button
  buttonSubmit.addEventListener('click', function (evt) {

    for (var i = 0; i < tourItems.length; i++) {
      if (tourItems[i].textContent === tourDescription.textContent) {
        innerPresentWrapperTour.classList.remove('error-wrapper');
        break;
      } else {
        innerPresentWrapperTour.classList.add('error-wrapper');
      }
    }
    
    var totalErrorValue = 0;
    ticketsInputs.forEach(function (elem, i, arr) {
      totalErrorValue += parseInt(elem.value);

      if (totalErrorValue <= 0) {
        innerPresentWrapperTickets.classList.add('error-wrapper');
      } else if (totalErrorValue > 10) {
        popupFail.style.display = 'block';
      } else if (adultPrice.value <= 0 && seniorPrice.value <= 0) {
        popupFail.style.display = 'block';
      } else {
        innerPresentWrapperTickets.classList.remove('error-wrapper');
        popupFail.style.display = 'none';
      }
    });
  });

  wrapperClickHandler(innerPresentWrapperTour, innerWrapperTour);
  bodyClickHandler(innerWrapperTour, innerPresentWrapperTour, 'registration__wrapper--tour');

  wrapperClickHandler(innerPresentWrapperTickets, innerWrapperTickets);
  bodyClickHandler(innerWrapperTickets, innerPresentWrapperTickets, 'registration__wrapper--tickets');

})();

