var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 41.809652513910486, lng: -87.62942911149604},
    zoom: 11,
  });

  var myStation = new google.maps.Marker({
    position: {lat: 41.713607828751904, lng: -87.66782606192993},
    map: map
  });

  var lasalle = new google.maps.Marker({
    position: {lat: 41.87568044414243, lng: -87.63260479912593},
    map: map
  });

  distPoints = [
    {lat: 41.713607828751904, lng: -87.66782606192993},
    {lat: 41.73048039327323, lng: -87.66700241659446},
    {lat: 41.73263487113335, lng: -87.6470821941889},
    {lat: 41.780230385628734, lng: -87.6287498155983},
    {lat: 41.87541286082849, lng: -87.63200039132329}
  ]

  var dist = new google.maps.Polyline({
    path: distPoints,
    geodesic: true,
    strokeColor: "#FE5F55",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  dist.setMap(map);
}

window.initMap(map);
