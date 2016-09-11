function init() {
  var mapOptions = {
    center: new google.maps.LatLng(35.0060799,135.6909099),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 4
  };
  var venueMap;
  venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function loadScript() {
  var script = document.createElement('script');
  script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
  document.body.appendChild(script);
}

window.onload = loadScript;
