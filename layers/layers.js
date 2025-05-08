var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MB1292024_final_1 = new ol.format.GeoJSON();
var features_MB1292024_final_1 = format_MB1292024_final_1.readFeatures(json_MB1292024_final_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MB1292024_final_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MB1292024_final_1.addFeatures(features_MB1292024_final_1);
var lyr_MB1292024_final_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MB1292024_final_1, 
                style: style_MB1292024_final_1,
                popuplayertitle: 'MB1292024_final',
                interactive: false,
                title: '<img src="styles/legend/MB1292024_final_1.png" /> MB1292024_final'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_MB1292024_final_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MB1292024_final_1];
lyr_MB1292024_final_1.set('fieldAliases', {'dis': 'dis', });
lyr_MB1292024_final_1.set('fieldImages', {'dis': 'TextEdit', });
lyr_MB1292024_final_1.set('fieldLabels', {'dis': 'no label', });
lyr_MB1292024_final_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});