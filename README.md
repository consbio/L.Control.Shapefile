# L.Control.Shapefile
A shapefile uploading control for Leaflet.<p>
Push the upload button, browse to a zipped shapefile, and it will display in your map. <p>
Tested with Leaflet 1.0. 

# Usage
Include Leaflet and shapefile-js into the head of your webpage.<p>
Include L.Control.Shapefile.js and L.Control.CSS into your webpage after the body tag.<p>
Create the leaflet map<p>
var map = L.map('map', {
        zoomControl: false,
    }
).setView([43,-116], 5);
Add the control<p>
L.control.shapefile({ position: 'topleft' }).addTo(map);
# Credits
Uses <a href="https://github.com/calvinmetcalf/shapefile-js">shapefile-js</a> to convert the shapefile to GeoJSON.<p>
Contributors<p>
Mike Gough<p>
