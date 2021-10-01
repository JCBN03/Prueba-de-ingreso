
import 'leaflet/dist/leaflet.css';
import './map.scss';
const L =require ('leaflet');

// Agregar Map
import {standard_osm_mm} from './layers/control-layers'

export var map = L.map('map', {
    center: [5.335666,  -72.393693],
    zoom: 13,
    layers: [standard_osm_mm]
});

L.control.zoom({position: 'topright'}).addTo(map);


// scale control
new L.control.scale({imperial: false}).addTo(map)


// Agregar marker
var myIcon = L.icon({
  iconUrl: 'https://i.ibb.co/KhZjf1C/marker-icon-2x.png',
  iconSize: [30, 50],
  iconAnchor: [30, 94],
});

L.marker([5.335666,  -72.393693], {icon: myIcon}).addTo(map);


// Agregar minimap
import {carto_light} from './layers/control-layers.js'
import MiniMap from 'leaflet-minimap';
import { holdReady } from 'jquery';

new MiniMap(carto_light, 
  { 
      toggleDisplay: true ,
      minimized:true,
      position: "bottomleft",
      collapsedWidth: 180,
      collapsedHeight: 180,
}).addTo(map);

/* Primer plano */
var wmsGeneral = L.tileLayer.wms("http://34.132.27.64:8080/geoserver/yopal/wms?", {
  layers: "yopal:u_terreno",
  format: 'image/png',
  transparent: true,
  version: '1.1.1',
  attribution: "CAEG"
}).addTo(map);

/* Popup */
 /*var source = L.WMS.source("http://34.132.27.64:8080/geoserver/yopal/wms?", {
   opacity: 0.1,
});
source.getLayer("u_terreno").addTo(map); */

/* Segundo plano */
var wmsGeneral = L.tileLayer.wms("http://34.132.27.64:8080/geoserver/yopal/wms?", {
  layers: "yopal:r_perimetro",
  format: 'image/png',
  transparent: true,
  version: '1.1.1',
  attribution: "CAEG"
}).addTo(map);
 
/*var source2 = L.WMS.source("http://34.132.27.64:8080/geoserver/yopal/wms?", {
   opacity: 0.1,
});
source2.getLayer("r_perimetro").addTo(map);*/

