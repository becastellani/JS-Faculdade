var x = document.getElementById("demo");
var map;

function initMap() {
  map = L.map('map').setView([0, 0], 14);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(map);
}


function addMarker(latitude, longitude) {
    L.marker([latitude, longitude]).addTo(map)
      .bindPopup("Oi né!!").openPopup();
  }




function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Seu navegador não suporta geolocalização";
  }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
  
    if (!map) {
      initMap();
    }
  
    addMarker(position.coords.latitude, position.coords.longitude);
  }