var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 41.809652513910486, lng: -87.62942911149604},
    zoom: 12,
  });
}

window.initMap(map);
