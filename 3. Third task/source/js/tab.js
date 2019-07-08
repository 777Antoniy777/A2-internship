'use strict';
(function () {
  var descriptionContent = {
    first: "When you arrive at One World Trade Center in Lower Manhattan, hop in a Sky Pod (aka elevator) and arrive on the 102nd floor in less than 60 seconds. The Sky Pod provides a virtual time-lapse experience so you can see how New York City has changed over the centuries.",
    second: "If you thought the elevator ride was cool, youll be blown away by the One World Observatory's vantage point, which on a clear day, provides a sight line of about 50 miles (80 kilometers). Watch a video about the making of the 1,776-foot-tall (540-meter) skyscraper, and then look out the panoramic windows for one-of-a-kind New York City views. Upgrade your experience to priority admission and have your own VIP expedited entry to bypass the general admission lines.",
    third: "At the See Forever Theater, see time-lapse photos and aerial imagery during a unique 2-minute video presentation, and then check out the the Main Observatory on the 100th floor, where you can step onto a 14-foot-wide (4-meter) disc in the floor and look down for an incredible perspective of real-time, high-definition footage of Manhattan's streets. And don't leave without stopping by City Pulse, an interactive experience that connects visitors with New York's landmarks and neighborhoods.",
    fourth: "When you're hungry, you can head to the 101st floor for a bite to eat (own expense). Options include pastries and fresh sandwiches at One Café, small plates and artisanal cocktails at the bar, One Mix, and high-end food and wine that matches the stunning view at One Dine (reservations required at One Dine)."
  }

  var tab = document.querySelector('.content__tab');
  var list = document.querySelector('.content__list');
  var items = list.querySelectorAll('.content__item');
  var descriptions = document.querySelectorAll('.content__description');
  var widthItems = [];
  var distanceItems = [];

  items.forEach(function (elem, i, arr) {
    var width = elem.clientWidth;
    widthItems.push(width);

    return widthItems;
  });

  items.forEach(function (elem, i, arr) {
    var distance = elem.offsetLeft;
    distanceItems.push(distance);

    return distanceItems;
  });

  // the function for translating tab
  var linkClickHandler = function (item, width, distance, description, index) {
    item.addEventListener('click', function () {
      tab.style.width = width + 'px';
      tab.style.transform = 'translateX(' + distance + 'px)';
      tab.style.transition = '1s';

      if (index === 0) {
        descriptions.forEach(function (elem, i, arr) {
          arr[0].textContent = descriptionContent.first;
          arr[1].textContent = descriptionContent.second;
          arr[2].textContent = descriptionContent.third;
          arr[3].textContent = descriptionContent.fourth;
        });
      }

      if (index === 1) {
        descriptions.forEach(function (elem, i, arr) {
          elem.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et dolor sodales, dictum enim a, convallis turpis. Donec id ipsum eros. Ut pulvinar, dolor at sagittis tempus, orci est placerat magna, sit amet maximus turpis erat sed eros. In sollicitudin mollis euismod. Suspendisse finibus enim sit amet maximus convallis. Aliquam erat volutpat. Nulla pretium erat mi, sit amet dictum augue euismod vel. Phasellus eget ligula vel metus pharetra sollicitudin. Curabitur sit amet arcu vel neque tempor venenatis quis id mi.'
        });
      }

      if (index === 2) {
        descriptions.forEach(function (elem, i, arr) {
          elem.textContent = 'Cras a lacus tortor. Morbi eget facilisis ligula, sit amet cursus ante. Sed euismod orci sit amet ligula maximus, nec varius mi vulputate. Nam efficitur magna nec fringilla iaculis. Nam a felis velit. Ut faucibus erat orci, convallis dignissim odio interdum vitae. Nullam ultricies ante neque, eget aliquet arcu varius eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque ut ultrices nisl, quis sodales urna. Aenean dolor metus, tempus in eleifend sed, gravida non leo.'
        });
      }

      if (index === 3) {
        descriptions.forEach(function (elem, i, arr) {
          elem.textContent = 'Proin massa justo, convallis sed purus vitae, cursus facilisis erat. Donec tortor nunc, rhoncus in tortor vitae, gravida pretium felis. Phasellus commodo felis at venenatis vestibulum. Mauris porta euismod ex eget fermentum. Vestibulum sed nisl sed turpis facilisis pulvinar non at libero. Aliquam erat volutpat. Nulla interdum faucibus libero, ut porta sem vestibulum et. Integer at elit eget sem cursus feugiat. Phasellus ligula erat, ullamcorper id egestas at, eleifend vitae metus. Proin dignissim sollicitudin ligula, quis gravida lacus volutpat id.'
        });
      }
    });
  };

  for (var i = 0; i < items.length; i++) {
    linkClickHandler(items[i], widthItems[i], distanceItems[i], descriptions[i], i);
  }
})();
