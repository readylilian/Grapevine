// Initialize and add the map
function initMap() {
    // RIT
    const rit = { lat: 43.089390, lng: -77.668762 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: rit,
    });
    /*// The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });*/
  }