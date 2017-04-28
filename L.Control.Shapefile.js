L.Control.Shapefile = L.Control.extend({
    onAdd: function(map) {
        var controlDiv = L.DomUtil.create('div', 'leaflet-control-command');

        // Create the leaflet control.
        var controlUI = L.DomUtil.create('div', 'leaflet-control-command-interior', controlDiv);

        // Create the form inside of the leaflet control.
        var form = L.DomUtil.create('div', 'leaflet-control-command-form', controlUI);

        // Insert the form HTML into the form.
        form.innerHTML = "<form id='uploadForm' action='' method='post' enctype='multipart/form-data'><input id='file' type='file' name='uploadFile' style='display:none'></form>";

        L.DomEvent
            .addListener(form, 'click', function () {
                document.getElementById("file").click();
            });

        controlUI.title = 'Upload a Shapefile';

        return controlDiv;
    }
});

L.control.shapefile = function(opts) {
    return new L.Control.Shapefile(opts);
};

// Add to map here or in a separate leaflet js file. Will need to change the order of the map.js and L.Control.Shapefile.js
// L.control.shapefile({ position: 'topleft' }).addTo(map);

window.onload = function() {
// When the user uploads a file, convert the file to an Array Buffer.
    $("input[name='uploadFile']").change(function () {

        var file = $('#file').prop('files')[0];
        var reader = new FileReader();

        reader.onloadend = function (e) {
            console.log(e.target.result);
            console.log(e.target.result.byteLength);

            // Pass the Array buffer to the shapfile-js function.
            loadArrayBuffer(e.target.result);
        };

        reader.readAsArrayBuffer(file);

    });

// Convert the array buffer to geojson and add it to the map
    function loadArrayBuffer(buffer) {

        shp(buffer).then(function (geojson) {
            var layer = L.geoJSON(geojson);
            var layers = layer._layers;
            $.each(layers, function () {
                layer.addTo(map);
                //initializePolygon(this);
            });
        });
    }

};
