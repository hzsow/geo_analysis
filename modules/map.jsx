import ol from "openlayers";
import {
    bolota,
    dist, dop, dopun,
    dsBuf, dto, dtoun, dtr11, dtr22,
    mss,
    mssBuf,
    nasPunkt, prD1, prD2, prD3, prD4, prostrU1, prostrU2,
    rivers,
    roads,
    sadi,
    tko, tr11, tr22,
    trainRoad,
    trainStation, trop, tropun,
    tsBuf
} from "./LayersPanel";

let map = new ol.Map({
    loadTilesWhileAnimating: true,
    controls: [new ol.control.Attribution({collapsible: false})],
    layers: [
        new ol.layer.Tile({
            title: 'OpenStreetMap',
            source: new ol.source.OSM()
        }),
        new ol.layer.Group({
            title: 'Подключенные слои',
            layers: [
                dist, tsBuf, dsBuf, mssBuf , tko, mss, sadi, bolota,  nasPunkt, rivers, roads, trainRoad ,trainStation,
                dto, dtoun, trop, tropun, dop, dopun, dtr11, dtr22, prD1, prD2, prD3, prD4, tr11, tr22, prostrU1, prostrU2
            ]
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([56, 54]),
        zoom: 7
    })
});

export {map};