var map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: { lat: 49.496675, lng: -102.65625 },
    });
  
    var georssLayer = new google.maps.KmlLayer({
      url: "http://api.flickr.com/services/feeds/geo/?g=322338@N20&lang=en-us&format=feed-georss",
    });
    georssLayer.setMap(map);
  
    // Create the DIV to hold the control.
    const centerControlDiv = document.createElement("div");
    // Create the control.
    const centerControl = createCenterControl(map);
  
    // Append the control to the DIV.
    centerControlDiv.appendChild(centerControl);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(
      centerControlDiv
    );
  }
  
  window.initMap = initMap;