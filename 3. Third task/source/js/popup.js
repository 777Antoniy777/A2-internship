var popupSuccess = document.querySelector('.popup-success');
var buttonClose = popupSuccess.querySelector('.popup-success__button--close');
var formPopup = popupSuccess.querySelector('.popup-success__form');
var formButton = formPopup.querySelector('.popup-success__button');

buttonClose.addEventListener('click', function () {
  popupSuccess.style.display = 'none';
});

// cancel form submission
formPopup.addEventListener('submit', function (evt) {
  evt.preventDefault();
});

formButton.addEventListener('click', function () {
  popupSuccess.style.display = 'none';
});
