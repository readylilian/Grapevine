//setting up date part of form
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd;
}
if (mm < 10) {
  mm = '0' + mm;
}  
today = yyyy + '-' + mm + '-' + dd;
function setupDate(){
  document.getElementById("day").setAttribute("max", today);
  document.getElementById("day").setAttribute("value", today);
}

//setting up the datapoint
let daylist = "";

function checkInfo(){
  console.log("checkInfo called");
}
// Initialize the options for location 
function initLocs() {
    const ntid = {lat:43.087637751968124, lng:-77.66824871948182, name: "National Technical Institute for the Deaf"};
    const com = {lat:43.086478105788494, lng:-77.66916603500717, name: "The Commons"};
    const wal = {lat: 43.08396582963211, lng: -77.67633695405479, name: "Wallace Library"};
}

// Initialize and add the map
function initMap() {
    // RIT
    const rit = { lat: 43.08396582963211, lng: -77.67633695405479 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: rit,
    });
    map.addListener('click', function(event) {
      document.getElementById("where").setAttribute("value",`${event.latLng.lat().toFixed(2)},${event.latLng.lng().toFixed(2)}`);
    })
    /*// The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });*/
  }
