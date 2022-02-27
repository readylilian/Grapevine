//using my student id to store the information locally
//const prefix = "lr4631-";
//const markerKey = prefix + "markers";
//let storedMarkers = localStorage.getItem(markerKey);

//setting up date part of form
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();
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

//setting up the datapoints
let pointlist = [];

let currentLoc;
let map;
let rating;
//when a form is submitted, create a marker
function checkInfo(){
  console.log("checkInfo called");
  //let where = document.getElementById("where").getAttribute("value");
  let what = document.getElementById("type").value;    
  let when = document.getElementById("day").getAttribute("value");
  let expand = document.getElementById("what").value;
  rating = document.getElementById("rating").value;

  let string = `<div id="content">` + `<h3>${what}</h3><br>${when}<br>${rating}/5<br>${expand}</div>`;

  let window = new google.maps.InfoWindow({content:string, maxWidth:200});
  let marker = new google.maps.Marker({
    position: currentLoc,
    map
  });

  marker.addListener("click", () => {
    window.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });
  pointlist.push(marker);
  heatMap();
  //localStorage.setItem(markerKey, `${pointlist}`);
}
// Set up heatmap
function heatMap(){
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(pointlist),
    map: map
    });
}

//Get pointlist information
function getPoints(pointlist){
  let coords = [];
  for (let i =0; i<pointlist.length; i++){
    coords.push(
      {location:
      new google.maps.LatLng(
        pointlist[i].position.lat(),
        pointlist[i].position.lng()
        ), radius: (((1/rating)+1) * 10)});
  }
  return coords;
}

// Initialize and add the map
function initMap() {
    // RIT
    const rit = { lat: 43.08396582963211, lng: -77.67633695405479 };
    // The map, centered at Uluru
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: rit,
      streetViewControl:false,
      disableDefaultUI: true, // a way to quickly hide all controls
      mapTypeControl: false,
    });

    map.addListener('click', function(event) {
      document.getElementById("where").setAttribute("value",`${event.latLng.lat().toFixed(2)},${event.latLng.lng().toFixed(2)}`);
      currentLoc = event.latLng;
    });
}
/*
//get any stored information for the markers
function getMarkers(){
  if(storedMarkers !=null){
    pointlist = JSON.parse(localStorage.markerKey);
    //Make a marker for each part of the map
    pointlist.forEach(element => {
      new google.maps.Marker({
        position: element.position,
        map: map,
      });
    });
  }
}
*/