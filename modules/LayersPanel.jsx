import React from 'react';
import ol from "openlayers";
import $ from "jquery";
import tooltip from "tooltip"

let config  = {
    showDelay: 0,
    style: {
        padding: 5,
        background: 'white'
    }
};
tooltip(config);
let Un1, Un2, dtr1, dtr2, dop1, dop2, trop1, trop2, dto1, dto2, d1, d2, d3, d4, tr1, tr2;
let format = new ol.format.GeoJSON();
let distsWasteJSON = "";

$.ajax({
    url: 'http://localhost:3978/data/dists.json',
    dataType: 'json',
    async: false,
    success: function(data) {
        distsWasteJSON = data;
    },
    complete: function(){
    }
});
let distWASTEJSONSource = new ol.source.Vector({
    features: format.readFeatures(distsWasteJSON, {
        featureProjection: 'EPSG:4326'
    })
});
let distSource = new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    url: function(extent, resolution, projection) {
        return '/geoserver/wfs?service=WFS&' +
            'version=1.1.0&request=GetFeature&typename=cite:dist223&' +
            'outputFormat=application/json&srsname=EPSG:3857&' +
            'bbox=' + extent.join(',') + ',EPSG:3857';
    },
    strategy: ol.loadingstrategy.tile(ol.tilegrid.createXYZ({
        maxZoom: 7
    }))
});
let tkoSource = new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    url: function(extent, resolution, projection) {
        return '/geoserver/wfs?service=WFS&' +
            'version=1.1.0&request=GetFeature&typename=cite:WasteObject&' +
            'outputFormat=application/json&srsname=EPSG:3857&' +
            'bbox=' + extent.join(',') + ',EPSG:3857';
    },
    strategy: ol.loadingstrategy.tile(ol.tilegrid.createXYZ({
        maxZoom: 7
    }))
});
let Km_35Source = new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    url: function(extent, resolution, projection) {
        return '/geoserver/wfs?service=WFS&' +
            'version=1.1.0&request=GetFeature&typename=cite:Km_35&' +
            'outputFormat=application/json&srsname=EPSG:3857&' +
            'bbox=' + extent.join(',') + ',EPSG:3857';
    },
    strategy: ol.loadingstrategy.tile(ol.tilegrid.createXYZ({
        maxZoom: 7
    }))
});
let Km_55_BufferSource = new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    url: function(extent, resolution, projection) {
        return '/geoserver/wfs?service=WFS&' +
            'version=1.1.0&request=GetFeature&typename=cite:Km_55_Buffer&' +
            'outputFormat=application/json&srsname=EPSG:3857&' +
            'bbox=' + extent.join(',') + ',EPSG:3857';
    },
    strategy: ol.loadingstrategy.tile(ol.tilegrid.createXYZ({
        maxZoom: 7
    }))
});
let Km_55_polygonSource = new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    url: function(extent, resolution, projection) {
        return '/geoserver/wfs?service=WFS&' +
            'version=1.1.0&request=GetFeature&typename=cite:Km_55_polygon&' +
            'outputFormat=application/json&srsname=EPSG:3857&' +
            'bbox=' + extent.join(',') + ',EPSG:3857';
    },
    strategy: ol.loadingstrategy.tile(ol.tilegrid.createXYZ({
        maxZoom: 7
    }))
});
let MSS_55_BufferSource = new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    url: function(extent, resolution, projection) {
        return '/geoserver/wfs?service=WFS&' +
            'version=1.1.0&request=GetFeature&typename=cite:MSS_55_Buffer&' +
            'outputFormat=application/json&srsname=EPSG:3857&' +
            'bbox=' + extent.join(',') + ',EPSG:3857';
    },
    strategy: ol.loadingstrategy.tile(ol.tilegrid.createXYZ({
        maxZoom: 7
    }))
});
let RB_Settlements_100Source = new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    url: function(extent, resolution, projection) {
        return '/geoserver/wfs?service=WFS&' +
            'version=1.1.0&request=GetFeature&typename=cite:RB_Settlements_100&' +
            'outputFormat=application/json&srsname=EPSG:3857&' +
            'bbox=' + extent.join(',') + ',EPSG:3857';
    },
    strategy: ol.loadingstrategy.tile(ol.tilegrid.createXYZ({
        maxZoom: 7
    }))
});
let bolotaSource = new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    url: function(extent, resolution, projection) {
        return '/geoserver/wfs?service=WFS&' +
            'version=1.1.0&request=GetFeature&typename=cite:bolota&' +
            'outputFormat=application/json&srsname=EPSG:3857&' +
            'bbox=' + extent.join(',') + ',EPSG:3857';
    },
    strategy: ol.loadingstrategy.tile(ol.tilegrid.createXYZ({
        maxZoom: 7
    }))
});
let mssSource = new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    url: function(extent, resolution, projection) {
        return '/geoserver/wfs?service=WFS&' +
            'version=1.1.0&request=GetFeature&typename=cite:mss&' +
            'outputFormat=application/json&srsname=EPSG:3857&' +
            'bbox=' + extent.join(',') + ',EPSG:3857';
    },
    strategy: ol.loadingstrategy.tile(ol.tilegrid.createXYZ({
        maxZoom: 7
    }))
});
let nasPunktSource = new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    url: function(extent, resolution, projection) {
        return '/geoserver/wfs?service=WFS&' +
            'version=1.1.0&request=GetFeature&typename=cite:nasPunkt&' +
            'outputFormat=application/json&srsname=EPSG:3857&' +
            'bbox=' + extent.join(',') + ',EPSG:3857';
    },
    strategy: ol.loadingstrategy.tile(ol.tilegrid.createXYZ({
        maxZoom: 7
    }))
});
let riversSource = new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    url: function(extent, resolution, projection) {
        return '/geoserver/wfs?service=WFS&' +
            'version=1.1.0&request=GetFeature&typename=cite:rivers&' +
            'outputFormat=application/json&srsname=EPSG:3857&' +
            'bbox=' + extent.join(',') + ',EPSG:3857';
    },
    strategy: ol.loadingstrategy.tile(ol.tilegrid.createXYZ({
        maxZoom: 7
    }))
});
let roadsSource = new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    url: function(extent, resolution, projection) {
        return '/geoserver/wfs?service=WFS&' +
            'version=1.1.0&request=GetFeature&typename=cite:roads&' +
            'outputFormat=application/json&srsname=EPSG:3857&' +
            'bbox=' + extent.join(',') + ',EPSG:3857';
    },
    strategy: ol.loadingstrategy.tile(ol.tilegrid.createXYZ({
        maxZoom: 7
    }))
});
let trainRoadSource = new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    url: function(extent, resolution, projection) {
        return '/geoserver/wfs?service=WFS&' +
            'version=1.1.0&request=GetFeature&typename=cite:trainRoad&' +
            'outputFormat=application/json&srsname=EPSG:3857&' +
            'bbox=' + extent.join(',') + ',EPSG:3857';
    },
    strategy: ol.loadingstrategy.tile(ol.tilegrid.createXYZ({
        maxZoom: 7
    }))
});
let trainStationSource = new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    url: function(extent, resolution, projection) {
        return '/geoserver/wfs?service=WFS&' +
            'version=1.1.0&request=GetFeature&typename=cite:trainStation&' +
            'outputFormat=application/json&srsname=EPSG:3857&' +
            'bbox=' + extent.join(',') + ',EPSG:3857';
    },
    strategy: ol.loadingstrategy.tile(ol.tilegrid.createXYZ({
        maxZoom: 7
    }))
});


$.ajax({
    url: 'http://localhost:3978/data/DTO1.geojson',
    dataType: 'json',
    async: false,
    success: function(data) {
        dto1=data;
    },
    complete: function(){
    }
});
$.ajax({
    url: 'http://localhost:3978/data/DTOUn1.geojson',
    dataType: 'json',
    async: false,
    success: function(data) {
        dto2=data;
    },
    complete: function(){
    }
});
let dto111 = new ol.source.Vector({
    features: format.readFeatures(dto1, {
        featureProjection: 'EPSG:3857'
    })
});
let dto222 = new ol.source.Vector({
    features: format.readFeatures(dto2, {
        featureProjection: 'EPSG:3857'
    })
});

$.ajax({
    url: 'http://localhost:3978/data/TROP1.geojson',
    dataType: 'json',
    async: false,
    success: function(data) {
        trop1=data;
    },
    complete: function(){
    }
});
$.ajax({
    url: 'http://localhost:3978/data/TROPU1.geojson',
    dataType: 'json',
    async: false,
    success: function(data) {
        trop2=data;
    },
    complete: function(){
    }
});
let trop111 = new ol.source.Vector({
    features: format.readFeatures(trop1, {
        featureProjection: 'EPSG:3857'
    })
});
let trop222 = new ol.source.Vector({
    features: format.readFeatures(trop2, {
        featureProjection: 'EPSG:3857'
    })
});

$.ajax({
    url: 'http://localhost:3978/data/DOP1.geojson',
    dataType: 'json',
    async: false,
    success: function(data) {
        dop1=data;
    },
    complete: function(){
    }
});
$.ajax({
    url: 'http://localhost:3978/data/DOPun1.geojson',
    dataType: 'json',
    async: false,
    success: function(data) {
        dop2=data;
    },
    complete: function(){
    }
});
let DOP111 = new ol.source.Vector({
    features: format.readFeatures(dop1, {
        featureProjection: 'EPSG:3857'
    })
});
let DOP222 = new ol.source.Vector({
    features: format.readFeatures(dop2, {
        featureProjection: 'EPSG:3857'
    })
});

$.ajax({
    url: 'http://localhost:3978/data/DTR1.geojson',
    dataType: 'json',
    async: false,
    success: function(data) {
        dtr1=data;
    },
    complete: function(){
    }
});
$.ajax({
    url: 'http://localhost:3978/data/DTR2.geojson',
    dataType: 'json',
    async: false,
    success: function(data) {
        dtr2=data;
    },
    complete: function(){
    }
});
let dtr111 = new ol.source.Vector({
    features: format.readFeatures(dtr1, {
        featureProjection: 'EPSG:3857'
    })
});
let dtr222 = new ol.source.Vector({
    features: format.readFeatures(dtr2, {
        featureProjection: 'EPSG:3857'
    })
});

$.ajax({
    url: 'http://localhost:3978/data/D11.geojson',
    dataType: 'json',
    async: false,
    success: function(data) {
        d1=data;
    },
    complete: function(){
    }
});
$.ajax({
    url: 'http://localhost:3978/data/D22.geojson',
    dataType: 'json',
    async: false,
    success: function(data) {
        d2=data;
    },
    complete: function(){
    }
});
$.ajax({
    url: 'http://localhost:3978/data/D33.geojson',
    dataType: 'json',
    async: false,
    success: function(data) {
        d3=data;
    },
    complete: function(){
    }
});
$.ajax({
    url: 'http://localhost:3978/data/D44.geojson',
    dataType: 'json',
    async: false,
    success: function(data) {
        d4=data;
    },
    complete: function(){
    }
});
let D111 = new ol.source.Vector({
    features: format.readFeatures(d1, {
        featureProjection: 'EPSG:3857'
    })
});
let D222 = new ol.source.Vector({
    features: format.readFeatures(d2, {
        featureProjection: 'EPSG:3857'
    })
});
let D333 = new ol.source.Vector({
    features: format.readFeatures(d3, {
        featureProjection: 'EPSG:3857'
    })
});
let D444 = new ol.source.Vector({
    features: format.readFeatures(d4, {
        featureProjection: 'EPSG:3857'
    })
});

$.ajax({
    url: 'http://localhost:3978/data/TR1.geojson',
    dataType: 'json',
    async: false,
    success: function(data) {
        tr1=data;
    },
    complete: function(){
    }
});
$.ajax({
    url: 'http://localhost:3978/data/Buf1.geojson',
    dataType: 'json',
    async: false,
    success: function(data) {
        tr2=data;
    },
    complete: function(){
    }
});
let TR111 = new ol.source.Vector({
    features: format.readFeatures(tr1, {
        featureProjection: 'EPSG:3857'
    })
});
let TR222 = new ol.source.Vector({
    features: format.readFeatures(tr2, {
        featureProjection: 'EPSG:3857'
    })
});

$.ajax({
    url: 'http://localhost:3978/data/U1.geojson',
    dataType: 'json',
    async: false,
    success: function(data) {
        Un1=data;
    },
    complete: function(){
    }
});
$.ajax({
    url: 'http://localhost:3978/data/U2.geojson',
    dataType: 'json',
    async: false,
    success: function(data) {
        Un2=data;
    },
    complete: function(){
    }
});
let U1 = new ol.source.Vector({
    features: format.readFeatures(Un1, {
        featureProjection: 'EPSG:3857'
    })
});
let U2 = new ol.source.Vector({
    features: format.readFeatures(Un2, {
        featureProjection: 'EPSG:3857'
    })
});

let dto = new ol.layer.Vector({
    visible: false,
    source: dto111,
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'black',
            width: 0.5
        }),
        fill: new ol.style.Fill({
            color: 'rgba(0,255,0,0.25)'
        })
    })
});
let dtoun = new ol.layer.Vector({
    visible: false,
    source: dto222,
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'black',
            width: 0.5
        }),
        fill: new ol.style.Fill({
            color: 'rgba(255,0,0,0.25)'
        })
    })
});
let trop = new ol.layer.Vector({
    visible: false,
    source: trop111,
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'black',
            width: 0.5
        }),
        fill: new ol.style.Fill({
            color: 'rgba(0,255,0,0.25)'
        })
    })
});
let tropun = new ol.layer.Vector({
    visible: false,
    source: trop222,
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'black',
            width: 0.5
        }),
        fill: new ol.style.Fill({
            color: 'rgba(255,0,0,0.25)'
        })
    })
});
let dop = new ol.layer.Vector({
    visible: false,
    source: DOP111,
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'black',
            width: 0.5
        }),
        fill: new ol.style.Fill({
            color: 'rgba(0,255,0,0.25)'
        })
    })
});
let dopun = new ol.layer.Vector({
    visible: false,
    source: DOP222,
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'black',
            width: 0.5
        }),
        fill: new ol.style.Fill({
            color: 'rgba(255,0,0,0.25)'
        })
    })
});
let dtr11 = new ol.layer.Vector({
    visible: false,
    source: dtr111,
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'black',
            width: 0.5
        }),
        fill: new ol.style.Fill({
            color: 'rgba(0,255,0, 0.55)'
        })
    })
});
let dtr22 = new ol.layer.Vector({
    visible: false,
    source: dtr222,
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'black',
            width: 0.5
        }),
        fill: new ol.style.Fill({
            color: 'rgba(255,0,0, 0.5)'
        })
    })
});
let prD4 = new ol.layer.Vector({
    visible: false,
    source: D444,

    style: new ol.style.Style({

        stroke: new ol.style.Stroke({
            color: 'black',
            width: 0.5
        }),
        fill: new ol.style.Fill({
            color: 'rgba(77,168,0,0.75)'
        })

    })
});
let prD3 = new ol.layer.Vector({
    visible: false,
    source: D333,
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'black',
            width: 0.5
        }),
        fill: new ol.style.Fill({
            color: 'rgba(168,250,9,0.75)'
        })
    })
});
let prD2 = new ol.layer.Vector({
    visible: false,
    source: D222,
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'black',
            width: 0.5
        }),
        fill: new ol.style.Fill({
            color: 'rgba(254,251,5,0.75)'
        })
    })
});
let prD1 = new ol.layer.Vector({
    visible: false,
    source: D111,
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'black',
            width: 0.5
        }),
        fill: new ol.style.Fill({
            color: 'rgba(239,30,3,0.75)'
        })
    })
});
let tr11 = new ol.layer.Vector({
    visible: false,
    source: TR111,
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'black',
            width: 0.5
        }),
        fill: new ol.style.Fill({
            color: 'rgba(0,255,0,0.5)'
        })
    })
});
let tr22 = new ol.layer.Vector({
    visible: false,
    source: TR222,
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'black',
            width: 0.5
        }),
        fill: new ol.style.Fill({
            color: 'rgba(255,0,0,0.5)'
        })
    })
});
let prostrU1 = new ol.layer.Vector({
    visible: false,
    source: U1,
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'black',
            width: 0.5
        }),
        fill: new ol.style.Fill({
            color: 'rgba(0,255,0,0.5)'
        })
    })
});
let prostrU2 = new ol.layer.Vector({
    visible: false,
    source: U2,
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'black',
            width: 0.5
        }),
        fill: new ol.style.Fill({
            color: 'rgba(255,0,0,0.5)'
        })
    })
});


let dist = new ol.layer.Vector({
    source: distSource,
    isSelectable: true,
    id: 'wfst',
    wfsInfo: {
        featureNS: 'http://www.opengeospatial.net/cite',
        attributes: ['NAME', 'AREA', 'Shape_Leng'],
        featureType: 'dist223',
        featurePrefix: 'cite',
        geometryType: 'MultiPolygon',
        geometryName: 'the_geom',
        url: '/geoserver/wfs'
    },
    isWFST: true,
    title: 'Районы РБ',

   style: (feature) =>  {
        style12.getText().setText(feature.get('Name2'));
       return style12;
    }
});

let distWASTE = new ol.layer.Vector({
        isWFST: false,
        visible: true,
        id: 'waste',
        source: distWASTEJSONSource,
        style: chStyle
    }
);
let tko = new ol.layer.Vector({
    source: tkoSource,
    isSelectable: true,
    id: 'wfst2',
    popupInfo: '<b>Адрес</b>: [address]<br><b>Год эксплуатации</b>: [year_explu]<br><b>Мощность</b>: [capacity]',
    visible: true,
    isWFST: true,
    title: 'Полигоны TKO',
    wfsInfo: {
        featureNS: 'http://www.opengeospatial.net/cite',
        attributes: ['year_explu', 'capacity', 'address'],
        featureType: 'WasteObject',
        featurePrefix: 'cite',
        geometryType: 'Point',
        geometryName: 'the_geom',
        url: '/geoserver/wfs'
    },
    style: new ol.style.Style({
        image: new ol.style.Circle({
            radius: 2,
            fill: new ol.style.Fill({
                color: '#cb1d1d'
            }),
            stroke: new ol.style.Stroke({color: '#cb1d1d', width: 2})
        })
    })
});
let Km_35 = new ol.layer.Vector({
    source: Km_35Source,
    isSelectable: true,
    id: 'wfst3',

    isWFST: true,
    title: 'Km_35',
    style: new ol.style.Style({
        image: new ol.style.Circle({
            radius: 2,
            fill: new ol.style.Fill({
                color: '#cb1d1d'
            }),
            stroke: new ol.style.Stroke({color: '#cb1d1d', width: 2})
        })
    })
});
let tsBuf = new ol.layer.Vector({
    source: Km_55_BufferSource,
    isSelectable: true,
    id: 'wfst4',
    isWFST: true,
    visible: false,
    title: 'Зоны поставок на железнодорожные станции',
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'black',
            width: 0.5
        }),
        fill: new ol.style.Fill({
            color: 'rgba(218,65,32,0.25)'
        })
    })
});
let dsBuf = new ol.layer.Vector({
    source: Km_55_polygonSource,
    isSelectable: true,
    id: 'wfst5',
    isWFST: true,
    visible: false,
    title: 'Зоны поставок на полигоны ТКО',
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'black',
            width: 0.5
        }),
        fill: new ol.style.Fill({
            color: 'rgba(218,165,32,0.25)'
        })
    })
});
let mssBuf = new ol.layer.Vector({
    source: MSS_55_BufferSource,
    isSelectable: true,
    id: 'wfst6',
    isWFST: true,
    visible: false,
    title: 'Зоны поставок на мусоросортировочные станции',
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'black',
            width: 0.5
        }),
        fill: new ol.style.Fill({
            color: 'rgba(218,105,32,0.25)'
        })
    })
});
let sadi = new ol.layer.Vector({
    source: RB_Settlements_100Source,
    isSelectable: true,
    id: 'wfst7',
    isWFST: true,
    visible: false,
    title: 'Области городов, садов, деревень и поселков',
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(255,20,147,0.7)',
            width: 0.5
        }),
        fill: new ol.style.Fill({
            color: 'rgba(0,255,255,0.3)'
        })
    })
});
let bolota = new ol.layer.Vector({
    source: bolotaSource,
    isSelectable: true,
    id: 'wfst8',
    isWFST: true,
    visible: false,
    title: 'Болота',
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'green',
            width: 1
        }),
        fill: new ol.style.Fill({
            color: 'rgba(0,255,255 ,0.3 )'
        })
    })
});
let mss = new ol.layer.Vector({
    source: mssSource,
    isSelectable: true,
    id: 'wfst9',
    popupInfo: '<b>Организация</b>: [Organizati]<br><b>Адрес</b>: [Address]<br><b>Мощность</b>: [Moshnost]',
    isWFST: true,
    visible: true,
    title: 'Мусоросорт-ые станции',
    wfsInfo: {
        featureNS: 'http://www.opengeospatial.net/cite',
        attributes: ['Organizati', 'Address', 'Moshnost'],
        featureType: 'mss',
        featurePrefix: 'cite',
        geometryType: 'Point',
        geometryName: 'the_geom',
        url: '/geoserver/wfs'
    },
    style: new ol.style.Style({
        image: new ol.style.Circle({
            radius: 3,
            fill: new ol.style.Fill({
                color: 'orange'
            }),
            stroke: new ol.style.Stroke({color: 'black', width: 1})
        })
    })
});
let nasPunkt = new ol.layer.Vector({
    source: nasPunktSource,
    isSelectable: true,
    id: 'wfst10',
    isWFST: true,
    visible: false,
    title: 'Населенные пункты',
    style: new ol.style.Style({
        image: new ol.style.Circle({
            radius: 2,
            fill: new ol.style.Fill({
                color: 'black'
            }),
            stroke: new ol.style.Stroke({color: '#cb1d1d', width: 1})
        })
    })
});
let rivers = new ol.layer.Vector({
    source: riversSource,
    isSelectable: true,
    id: 'wfst11',
    isWFST: true,
    visible: false,
    title: 'Реки',
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'blue',
            width: 0
        }),
        fill: new ol.style.Fill({
            color: 'blue'
        })
    })
});
let roads = new ol.layer.Vector({
    source: roadsSource,
    isSelectable: true,
    id: 'wfst12',
    isWFST: true,
    visible: false,
    title: 'Автодороги',
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(50,50,160,0.7)',
            width: 1
        }),
        fill: new ol.style.Fill({
            color: 'rgba(0,128,160,0.9)'
        })
    })
});
let trainRoad = new ol.layer.Vector({
    source: trainRoadSource,
    isSelectable: true,
    id: 'wfst13',
    isWFST: true,
    visible: false,
    title: 'Железные дороги',
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(0,128,100,0.5)',
            width: 1
        }),
        fill: new ol.style.Fill({
            color: 'rgba(0,128,100,0.5)'
        })
    })
});
let trainStation = new ol.layer.Vector({
    source: trainStationSource,
    isSelectable: true,
    id: 'wfst14',
    visible: false,
    isWFST: true,
    title: 'ЖД станции',
    style: new ol.style.Style({
        image: new ol.style.Icon({
            anchor: [0.5, 0.5],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            opacity: 1,
            src: 'train.png'
        })
    })
});

let style12 = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: 'black',
        width: 1
    }),
    fill: new ol.style.Fill({
        color: 'rgba(255,102,255,0.5) '
    }),
    text: new ol.style.Text({
        font: 'bold 8px "Open Sans", "Arial Unicode MS", "sans-serif"' })
});
let style13 = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: 'blue',
        width: 2
    }),
    fill: new ol.style.Fill({
        color: 'rgba(255,102,255,0.3) '
    }),
    text: new ol.style.Text({
        font: 'bold 9px "Open Sans", "Arial Unicode MS", "sans-serif"',
        overflow: true,
        maxAngle: Infinity, }),

});

let s2 = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: 'black',
        width: 2
    }),
    fill: new ol.style.Fill({
        color: 'rgba(254,251,5,0.8)'
    }),
    text: new ol.style.Text({
        font: 'bold 8px "Open Sans", "Arial Unicode MS", "sans-serif"' })
});
let s1 = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: 'black',
        width: 2
    }),
    fill: new ol.style.Fill({
        color: 'rgba(168,250,9,0.8)'
    }),
    text: new ol.style.Text({
        font: 'bold 8px "Open Sans", "Arial Unicode MS", "sans-serif"' })
});
let s0 = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: 'black',
        width: 2
    }),
    fill: new ol.style.Fill({
        color: 'rgba(77,168,0,0.8)'
    }),
    text: new ol.style.Text({
        font: 'bold 8px "Open Sans", "Arial Unicode MS", "sans-serif"' })
});
let s3 = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: 'black',
        width: 2
    }),
    fill: new ol.style.Fill({
        color: 'rgba(239,30,3,0.8)'
    }),
    text: new ol.style.Text({
        font: 'bold 8px "Open Sans", "Arial Unicode MS", "sans-serif"' })
});
let s4 = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: 'black',
        width: 2
    }),
    fill: new ol.style.Fill({
        color: 'rgba(168,17,0,0.8)'
    }),
    text: new ol.style.Text({
        font: 'bold 8px "Open Sans", "Arial Unicode MS", "sans-serif"' })
});

function chStyle(feature) {
    let ss1 = document.getElementById('m1').selectedIndex;
    let op1 = document.getElementById('m1').options;
    let ss2 = document.getElementById('m2').selectedIndex;
    let op2 = document.getElementById('m2').options;

    let que = op1[ss1].value + op2[ss2].value;
    let tt = feature.get(que);
    let t = feature.get('Name2');
    let r = t.indexOf("район");
    t = t.substring(0,r)+"\n"+t.substring(r);

    if (ss1 === 0){
        if (ss2 === 0) {
            $("#leg1").attr("src","img/obr2015.png");
            if (tt < 8504.34){
                s1.getText().setText(t);
                return s1;
            }
            else if (tt > 8504.34 && tt < 13563.62){
                s2.getText().setText(t);
                return s2;
            }
            else {
                s3.getText().setText(t);
                return s3;
            }
        }
        else if (ss2 === 1) {
            $("#leg1").attr("src","img/obr2016.png");
            if (tt < 12541.73){
                s1.getText().setText(t);
                return s1;
            }
            else if (tt > 12541.73 && tt < 17545.67){
                s2.getText().setText(t);
                return s2;
            }
            else {
                s3.getText().setText(t);
                return s3;}

        }


    }else if (ss1 === 1)
    {
        if (ss2 === 0) {
           $("#leg1").attr("src","img/obrarea2015.png");
            if (tt < 4.51){
                s1.getText().setText(t);
                return s1;
            }
            else if (tt > 4.51 && tt < 6.81){
                s2.getText().setText(t);
                return s2;
            }
            else {
                s3.getText().setText(t);
                return s3;}

        }
        else if (ss2 === 1) {
            $("#leg1").attr("src","img/obrarea2016.png");
            if (tt < 5.6){
                s1.getText().setText(t);
                return s1;
            }
            else if (tt > 5.6 && tt < 8.46){
                s2.getText().setText(t);
                return s2;
            }
            else {
                s3.getText().setText(t);
                return s3;}

        }

    }else if (ss1 === 2)
    {
        if (ss2 === 0) {
            $("#leg1").attr("src","img/obrpop2015.png");
            if (tt < 0.362){
                s1.getText().setText(t);
                return s1;
            }
            else if (tt > 0.362 && tt < 0.373){
                s2.getText().setText(t);
                return s2;
            }
            else {
                s3.getText().setText(t);
                return s3;}

        }
        else if (ss2 === 1) {
            $("#leg1").attr("src","img/obrpop2016.png");
            if (tt < 0.3){
                s1.getText().setText(t);
                return s1;
            }
            else if (tt > 0.3 && tt < 0.58){
                s2.getText().setText(t);
                return s2;
            }
            else {
                s3.getText().setText(t);
                return s3;}

        }

    }else if (ss1 === 3)
    {
        if (ss2 === 0) {
            $("#leg1").attr("src","img/isp2015.png");
            if (tt < 3184.777){
                s1.getText().setText(t);
                return s1;
            }
            else if (tt > 3184.777 && tt < 10740.58){
                s2.getText().setText(t);
                return s2;
            }
            else {
                s3.getText().setText(t);
                return s3;}

        }
        else if (ss2 === 1) {
            $("#leg1").attr("src","img/isp2016.png");
            if (tt < 5174.782){
                s1.getText().setText(t);
                return s1;
            }
            else if (tt > 5174.782 && tt < 12102){
                s2.getText().setText(t);
                return s2;
            }
            else {
                s3.getText().setText(t);
                return s3;}

        }

    }else if (ss1 === 4)
    {
        if (ss2 === 0) {
            $("#leg1").attr("src","img/isparea2015.png");
            if (tt < 1.558){
                s1.getText().setText(t);
                return s1;
            }
            else if (tt > 1.558 && tt < 5.05){
                s2.getText().setText(t);
                return s2;
            }
            else {
                s3.getText().setText(t);
                return s3;}

        }
        else if (ss2 === 1) {
            $("#leg1").attr("src","img/isparea2016.png");
            if (tt < 1.858){
                s1.getText().setText(t);
                return s1;
            }
            else if (tt > 1.858 && tt < 5.47){
                s2.getText().setText(t);
                return s2;
            }
            else {
                s3.getText().setText(t);
                return s3;}

        }

    }else if (ss1 === 5)
    {
        if (ss2 === 0) {
            $("#leg1").attr("src","img/isppop2015.png");
            if (tt < 0.0975){
                s1.getText().setText(t);
                return s1;
            }
            else if (tt > 0.0975 && tt < 0.297384){
                s2.getText().setText(t);
                return s2;
            }
            else {
                s3.getText().setText(t);
                return s3;}

        }
        else if (ss2 === 1) {
           $("#leg1").attr("src","img/isppop2016.png");
            if (tt < 0.162){
                s1.getText().setText(t);
                return s1;
            }
            else if (tt > 0.162 && tt < 0.365){
                s2.getText().setText(t);
                return s2;
            }
            else {
                s3.getText().setText(t);
                return s3;}

        }

    }else if (ss1 === 6)
    {
        $("#leg1").attr("src","img/zah1.png");
        if (tt < 3493.228844){
            s1.getText().setText(t);
            return s1;
        }
        else if (tt > 3493.228844 && tt < 6412.2){
            s2.getText().setText(t);
            return s2;
        }
        else {
            s3.getText().setText(t);
            return s3;
        }

    }else if (ss1 === 7)
    {
        $("#leg1").attr("src","img/zaharea.png");
        if (tt < 1.496735){
            s1.getText().setText(t);
            return s1;
        }
        else if (tt > 1.496735 && tt < 2.259){
            s2.getText().setText(t);
            return s2;
        }
        else {
            s3.getText().setText(t);
            return s3;
        }
    }
    else if (ss1 === 8)
    {
        $("#leg1").attr("src","img/zahpop.png");
        if (tt < 0.118345){
            s1.getText().setText(t);
            return s1;
        }
        else if (tt > 0.118345 && tt < 0.122561){
            s2.getText().setText(t);
            return s2;
        }
        else {
            s3.getText().setText(t);
            return s3;
        }


    }
}

let select = new ol.interaction.Select({
    layers: [dist],
    style: feature => {
        style13.getText().setText(feature.get('Name2'));
        return style13;
    }
});

export {dist, tko, tsBuf, dsBuf, mssBuf ,sadi, bolota, mss, nasPunkt, rivers, roads, trainRoad ,trainStation, distWASTE, distWASTEJSONSource, distSource, tkoSource, select,
    dto, dtoun, trop, tropun, dop, dopun, dtr11, dtr22, prD1, prD2, prD3, prD4, tr11, tr22, prostrU1, prostrU2  };



export class LayersPanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isDist: true,
            isTko: false,
            isTsBuf: false,
            isDsBuf: false,
            isMssBuf: false,
            isSadi: false,
            isBolota: false,
            isMss: false,
            isNasPunkt: false,
            isRivers: false,
            isRoads: false,
            isTrainRoad: false ,
            isTrainStation: false,
            isDistWASTE: false
        };
        this.toggleLayer = this.toggleLayer.bind(this);
        this.toggleDist = this.toggleDist.bind(this);
    }

    componentDidMount() {
    this.props.f(this.toggleDist);
    }

    toggleLayer(layer, state) {
        return function(e) {
            state ? layer.setVisible(false) : layer.setVisible(true);
            let obj= {};
            obj[e.target.name] = !state;
            this.setState(obj);
        }.bind(this);
    }

    toggleDist() {
        this.state.isDist ? dist.setVisible(false) : dist.setVisible(true);
        this.setState(state => ({isDist:!this.state.isDist}));
    }

    render() {
        return (
            <div ref="panel" style={{display: this.props.state ? "block" : "none"}} className="panel">
                <div className="form-check">
                    <label>
                        <input id={"distCh"} type="checkbox" name="isDist" checked={this.state.isDist} onChange={this.toggleLayer(dist, this.state.isDist)}/> <span className="label-text">Районы Республики Башкортостан </span><label
                        className="filtr" onClick={this.props.onFiltr1Click.bind(null, this)}>Фильтр</label><span> </span><label data-tooltip={"Нажать, выбрать полигон"}  style={{backgroundColor:this.props.isGraphOn ? 'aqua' : 'white', display: this.state.isDist ? "block" : "none"}} className="filtr" onClick={this.props.onGraphClick.bind(null, this)}>Графики отходов</label>
                    </label>
                </div>
                <div className="form-check">
                    <label>
                        <input  type="checkbox" name="isTko"  defaultChecked={this.state.isTko} onChange={this.toggleLayer(tko, this.state.isTko)}/> <span className="label-text">Полигоны ТКО </span><label
                        className="filtr" onClick={this.props.onFiltr2Click.bind(null, this)}>Фильтр</label>
                    </label>
                </div>
                <div className="form-check">
                    <label>
                        <input type="checkbox" name="isMss" defaultChecked={this.state.isMss} onChange={this.toggleLayer(mss, this.state.isMss)}/> <span className="label-text">Мусоросортировочные станции </span>
                    </label>
                </div>
                <div className="form-check">
                    <label>
                        <input id="addTR" type="checkbox" name="isTrainRoad" defaultChecked={this.state.isTrainRoad} onChange={this.toggleLayer(trainRoad, this.state.isTrainRoad)}/> <span className="label-text">ЖД дороги</span>
                    </label>
                </div>
                <div className="form-check">
                    <label>
                        <input id="addTS" type="checkbox" name="isTrainStation" defaultChecked={this.state.isTrainStation} onChange={this.toggleLayer(trainStation, this.state.isTrainStation)}/> <span className="label-text">ЖД станции</span>
                    </label>
                </div>
                <div className="form-check">
                    <label>
                        <input id="addBolots" type="checkbox" name="isBolota" defaultChecked={this.state.isBolota} onChange={this.toggleLayer(bolota, this.state.isBolota)}/> <span className="label-text">Болота</span>
                    </label>
                </div>
                <div className="form-check">
                    <label>
                        <input id="addAR" type="checkbox" name="isRoads" defaultChecked={this.state.isRoads} onChange={this.toggleLayer(roads, this.state.isRoads)}/> <span className="label-text">Автодороги</span>
                    </label>
                </div>

                <div className="form-check">
                    <label>
                        <input id="addNaspy" type="checkbox" name="isNasPunkt" defaultChecked={this.state.isNasPunkt} onChange={this.toggleLayer(nasPunkt, this.state.isNasPunkt)}/> <span className="label-text">Населенные пункты</span>
                    </label>
                </div>
                <div className="form-check">
                    <label>
                        <input id="addReki" type="checkbox" name="isRivers" defaultChecked={this.state.isRivers} onChange={this.toggleLayer(rivers, this.state.isRivers)}/> <span className="label-text">Реки</span>
                    </label>
                </div>
                <div className="form-check">
                    <label>
                        <input id="addSadi" type="checkbox" name="isSadi" defaultChecked={this.state.isSadi} onChange={this.toggleLayer(sadi, this.state.isSadi)}/> <span className="label-text">Области городов, садов, деревень и поселков</span>
                    </label>
                </div>
                <div className="form-check">
                    <label>
                        <input type="checkbox" name="isDsBuf" defaultChecked={this.state.isDsBuf} onChange={this.toggleLayer(dsBuf, this.state.isDsBuf)}/> <span className="label-text">Зоны поставок на полигоны ТКО</span>
                    </label>
                </div>
                                <div className="form-check">
                    <label>
                        <input type="checkbox" name="isTsBuf" defaultChecked={this.state.isTsBuf} onChange={this.toggleLayer(tsBuf, this.state.isTsBuf)}/> <span className="label-text">Зоны поставок на железнодорожные станции</span>
                    </label>
                </div>
                                <div className="form-check">
                    <label>
                        <input type="checkbox" name="isMssBuf" defaultChecked={this.state.isMssBuf} onChange={this.toggleLayer(mssBuf, this.state.isMssBuf)}/> <span className="label-text">Зоны поставок на мусоросортировочные станции</span>
                    </label>
                </div>

            </div>
        )
    }
}