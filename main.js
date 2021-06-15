var mymap = L.map('mapid').setView([44.93529305557968, 6.7282385232890025], 14);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 98,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiY2hlcmF6ZWRkdXJhbmQiLCJhIjoiY2tweHdtdGg1MWFyZDJwcDlsdnQyMXg3ciJ9.DY018IwBvEnjWeOqUaQfTA'
}).addTo(mymap);
var marker = L.marker([44.93529305557968, 6.7282385232890025]).addTo(mymap);
marker.bindPopup("<b>Résidence Club MMV le Hameau des Airelles</b>.").openPopup();

polygon.bindPopup("I am a polygon.");
var polygon = L.polygon([
    [44.93529305557968, 6.7282385232890025],
    [44.93529305557968, 6.7282385232890025],
    [44.93529305557968, 6.7282385232890025]
]).addTo(mymap);