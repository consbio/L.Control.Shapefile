var map = L.map('map').setView([43.5,-116.9], 13);

// Basemaps
var topographic=L.esri.basemapLayer("Topographic").addTo(map);

// Shapefile control
var shpControl = L.control.shapefile({ position: 'topleft' });
shpControl.addTo(map);
