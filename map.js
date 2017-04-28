var map = L.map('map', {
        zoomControl: false,
        attributionControl: false
    }
).setView([43.5021,-116.8868], 13);

// Basemaps
var topographic=L.esri.basemapLayer("Topographic").addTo(map);

// Zoom control
L.control.zoom({
     position: 'topright'
}).addTo(map);

// Shapefile control
L.control.shapefile({ position: 'topleft' }).addTo(map);


