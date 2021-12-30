window.onload = init;
function init() {
  const location=[76.6932438,10.6900333]  
  const map = new ol.Map({
    view: new ol.View({
      center: ol.proj.fromLonLat(location),
      zoom:10,
    }),
    layers:[
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
    
    ],
    target: 'js-map'
  })
var Styledot = new ol.style.Style({
  image: new ol.style.Circle({
    radius:6,
    fill: new ol.style.Fill({
      color:'#ff2e05'
    })
  })
})

var Stylepicker = new ol.style.Style({
  image: new ol.style.Icon({
    anchor:[0.5,10],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src:'img/picker.png',
  })
})

 var marker = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat(location)),
  type:'current location',
  name:'test'
 });

  const positionLayer = new ol.layer.VectorImage({
   title:'POI',
   source: new ol.source.Vector({
    features:[marker]
   }),
   style: Styledot
  });
  map.addLayer(positionLayer);
}



   
 
 