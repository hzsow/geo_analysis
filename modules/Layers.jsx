import React from 'react';
import ol from "openlayers";
import $ from "jquery";
import tooltip from "tooltip"
import store from "../store/store";
import * as switchActions from "../actions/actions-switch";



let config  = {
    showDelay: 0,
    style: {
        padding: 5,
        background: 'white'
    }
};
tooltip(config);
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



let dist = new ol.layer.Vector({
    source: distSource,
    isSelectable: true,
    id: 'wfst',
    wfsInfo: {
        featureNS: 'http://www.opengeospatial.net/cite',
        attributes: ['NAME', 'AREA', 'Shape_Leng','Othody','Population'],
        featureType: 'dist223',
        featurePrefix: 'cite',
        geometryType: 'MultiPolygon',
        geometryName: 'the_geom',
        url: '/geoserver/wfs'
    },
    isWFST: true,
    title: 'Районы РБ',

    style: (feature, resolution) =>  {
        if (resolution < 2400)
        style12.getText().setText(feature.get('Name2'));
        else style12.getText().setText('');
        return style12;
    }
});
let distWASTE = new ol.layer.Vector({
    isWFST: false,
    visible: false,
    id: 'waste',
    source: distWASTEJSONSource,
    style: chStyle
});
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
                dist, distWASTE, tsBuf, dsBuf, mssBuf , tko, mss, sadi, bolota,  nasPunkt, rivers, roads, trainRoad ,trainStation
            ]
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([56, 54]),
        zoom: 7
    })
});



let dto = new ol.layer.Vector({
    source:new ol.source.Vector()}),
    dtoun = new ol.layer.Vector({
        source:new ol.source.Vector()}),
    trop = new ol.layer.Vector({
        source:new ol.source.Vector()}),
    tropun = new ol.layer.Vector({
        source:new ol.source.Vector()}),
    dop = new ol.layer.Vector({
        source:new ol.source.Vector()}),
    dopun = new ol.layer.Vector({
        source:new ol.source.Vector()}),
    dtr11 = new ol.layer.Vector({
        source:new ol.source.Vector()}),
    dtr22 = new ol.layer.Vector({
        source:new ol.source.Vector()}),
    prD1 = new ol.layer.Vector({
        source:new ol.source.Vector()}),
    prD2 = new ol.layer.Vector({
        source:new ol.source.Vector()}),
    prD3 = new ol.layer.Vector({
        source:new ol.source.Vector()}),
    prD4 = new ol.layer.Vector({
        source:new ol.source.Vector()}),
    tr11 = new ol.layer.Vector({
        source:new ol.source.Vector()}),
    tr22 = new ol.layer.Vector({
        source:new ol.source.Vector()}),
    prostrU1 = new ol.layer.Vector({
        source:new ol.source.Vector()}),
    prostrU2 = new ol.layer.Vector({
        source:new ol.source.Vector()});



export function getComputationLayers(){
    let Un1, Un2, dtr1, dtr2, dop1, dop2, trop1, trop2, dto1, dto2, d1, d2, d3, d4, tr1, tr2;


    $.when($.ajax({
        url: 'http://localhost:3978/data/DTO1.geojson',
        dataType: 'json'
    }), $.ajax({
        url: 'http://localhost:3978/data/DTOUn1.geojson',
        dataType: 'json'
    }), $.ajax({url: 'http://localhost:3978/data/TROP1.geojson',
        dataType: 'json'}),
        $.ajax({url: 'http://localhost:3978/data/TROPU1.geojson',
            dataType: 'json'}),
        $.ajax({url: 'http://localhost:3978/data/DOP1.geojson',
            dataType: 'json'}),
        $.ajax({url: 'http://localhost:3978/data/DOPun1.geojson',
            dataType: 'json'}),
        $.ajax({url: 'http://localhost:3978/data/DTR1.geojson',
            dataType: 'json'}),
        $.ajax({url: 'http://localhost:3978/data/DTR2.geojson',
            dataType: 'json'}),
        $.ajax({url: 'http://localhost:3978/data/D11.geojson',
            dataType: 'json'}),
        $.ajax({url: 'http://localhost:3978/data/D22.geojson',
            dataType: 'json'}),
        $.ajax({url: 'http://localhost:3978/data/D33.geojson',
            dataType: 'json'}),
        $.ajax({url: 'http://localhost:3978/data/D44.geojson',
            dataType: 'json'}),
        $.ajax({url: 'http://localhost:3978/data/TR1.geojson',
            dataType: 'json'}),
        $.ajax({url: 'http://localhost:3978/data/Buf1.geojson',
            dataType: 'json'}),
        $.ajax({url: 'http://localhost:3978/data/U1.geojson',
            dataType: 'json'}),
        $.ajax({url: 'http://localhost:3978/data/U2.geojson',
            dataType: 'json'}))
        .done(function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16) {
        dto1 = new ol.source.Vector({
            features: format.readFeatures(a1[0], {
                featureProjection: 'EPSG:3857'
            })
        });
        dto2 = new ol.source.Vector({
            features: format.readFeatures(a2[0],{
                featureProjection: 'EPSG:3857'
            })
        });
        trop1 = new ol.source.Vector({
            features: format.readFeatures(a3[0], {
                featureProjection: 'EPSG:3857'
            })
        });
        trop2 = new ol.source.Vector({
            features: format.readFeatures(a4[0], {
                featureProjection: 'EPSG:3857'
            })
        });
        dop1 = new ol.source.Vector({
            features: format.readFeatures(a5[0], {
                featureProjection: 'EPSG:3857'
            })
        });
        dop2 = new ol.source.Vector({
            features: format.readFeatures(a6[0], {
                featureProjection: 'EPSG:3857'
            })
        });
        dtr1 = new ol.source.Vector({
            features: format.readFeatures(a7[0], {
                featureProjection: 'EPSG:3857'
            })
        });
        dtr2 = new ol.source.Vector({
            features: format.readFeatures(a8[0], {
                featureProjection: 'EPSG:3857'
            })
        });
        d1 = new ol.source.Vector({
            features: format.readFeatures(a9[0], {
                featureProjection: 'EPSG:3857'
            })
        });
        d2 = new ol.source.Vector({
            features: format.readFeatures(a10[0], {
                featureProjection: 'EPSG:3857'
            })
        });
        d3 = new ol.source.Vector({
            features: format.readFeatures(a11[0], {
                featureProjection: 'EPSG:3857'
            })
        });
        d4 = new ol.source.Vector({
            features: format.readFeatures(a12[0], {
                featureProjection: 'EPSG:3857'
            })
        });
        tr1 = new ol.source.Vector({
            features: format.readFeatures(a13[0], {
                featureProjection: 'EPSG:3857'
            })
        });
        tr2 = new ol.source.Vector({
            features: format.readFeatures(a14[0], {
                featureProjection: 'EPSG:3857'
            })
        });
        Un1 = new ol.source.Vector({
                features: format.readFeatures(a15[0], {
                    featureProjection: 'EPSG:3857'
                })
            });
        Un2 = new ol.source.Vector({
                features: format.readFeatures(a16[0], {
                    featureProjection: 'EPSG:3857'
                })
            });

        dto = new ol.layer.Vector({
            visible: false,
            source: dto1,
            id: 'wf1',
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
        dtoun = new ol.layer.Vector({
            visible: false,
            id: 'wf2',
            source: dto2,
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
            trop = new ol.layer.Vector({
                visible: false,
                id: 'wf3',
                source: trop1,
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
            tropun = new ol.layer.Vector({
                visible: false,
                source: trop2,
                id: 'wf4',
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
            dop = new ol.layer.Vector({
                visible: false,
                source: dop1,
                id: 'wf5',
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
            dopun = new ol.layer.Vector({
                visible: false,
                source: dop2,
                id: 'wf6',
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
            dtr11 = new ol.layer.Vector({
                visible: false,
                source: dtr1,
                id: 'wf7',
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
            dtr22 = new ol.layer.Vector({
                visible: false,
                source: dtr2,
                id: 'wf8',
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
            prD4 = new ol.layer.Vector({
                visible: false,
                source: d4,
                id: 'wf9',
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
            prD3 = new ol.layer.Vector({
                visible: false,
                source: d3,
                id: 'wf10',
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
            prD2 = new ol.layer.Vector({
                visible: false,
                source: d2,
                id: 'wf11',
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
            prD1 = new ol.layer.Vector({
                visible: false,
                source: d1,
                id: 'wf12',
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
            tr11 = new ol.layer.Vector({
                visible: false,
                source: tr1,
                id: 'wf13',
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
            tr22 = new ol.layer.Vector({
                visible: false,
                source: tr2,
                id: 'wf14',
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
            prostrU1 = new ol.layer.Vector({
                visible: false,
                source: Un1,
                id: 'wf15',
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
            prostrU2 = new ol.layer.Vector({
                visible: false,
                source: Un2,
                id: 'wf16',
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

        map.addLayer(dto);
        map.addLayer(dtoun);
        map.addLayer(trop);
        map.addLayer(tropun);
        map.addLayer(dop);
        map.addLayer(dopun);
        map.addLayer(dtr11);
        map.addLayer(dtr22);
        map.addLayer(prD4);
        map.addLayer(prD3);
        map.addLayer(prD2);
        map.addLayer(prD1);
        map.addLayer(tr11);
        map.addLayer(tr22);
        map.addLayer(prostrU1);
        map.addLayer(prostrU2);

        console.log("yep");
        store.dispatch(switchActions.computationLayersIsDone());
    });


}

let style12 = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: 'black',
        width: 1
    }),
    fill: new ol.style.Fill({
        color: 'rgba(255,102,255,0.5) '
    }),
    text: new ol.style.Text({
        font: 'bold 10px "Open Sans", "Arial Unicode MS", "sans-serif"'
    }),
    zIndex: 100,
    overflow: true,
    maxAngle: Infinity
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
    let ss1 = store.getState().tabAnalysisState.selectedOne;
    let ss2 = store.getState().tabAnalysisState.selectedTwo;
    let tt = feature.get(store.getState().tabAnalysisState.query);
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

select.on('select', function(e) {
    let selectedFeatures = e.target.getFeatures().getArray();
    if (selectedFeatures.length !== 0) {
        let name = selectedFeatures[0].get('NAME');
        let obezvOth = selectedFeatures[0].get('W_u_15');
        let obrOth1 = selectedFeatures[0].get('W_15');
        let obrOth2 = selectedFeatures[0].get('W_16');
        let zahOth = selectedFeatures[0].get('W_d_15');

        $("div#graph").empty().show();

        let data = anychart.data.set([
            ['Обезвреженные отходы', obezvOth],
            ['Образованные отходы', obrOth1],
            ['Захороненные отходы', zahOth]
        ]);
        let data2 = anychart.data.set([

            ['Образованные отходы за 2015 год', obrOth1],
            ['Образованные отходы за 2016 год', obrOth2]
        ]);
        let wealth = data.mapAs({'x': 0, 'value': 1});
        let wealth2 = data2.mapAs({'x': 0, 'value': 1});
        let chart = anychart.pie(wealth);
        chart.labels()
            .hAlign('center')
            .position('outside')
            .format('{%Value}т.');
        chart.title(name + '\n' + 'Соотношение отходов района');
        chart.container('graph');
        chart.legend()
            .position('left-bottom')
            .itemsLayout('vertical')
            .align('left');
        let chart2 = anychart.column(wealth2);
        chart2.labels()
            .hAlign('center')
            .position('outside')
            .format('{%Value}т.');
        chart2.title('\n' + 'Динамика образования отходов');
        chart2.container('graph');
        chart2.legend()
            .position('left-bottom')
            .itemsLayout('vertical')
            .align('left');

        chart.draw();
        chart2.draw();
    }
});


let addInteraction = () => map.addInteraction(select);
let removeInteraction = () => {
    map.removeInteraction(select);
    $("div#graph").empty().hide();
};

export {dist, tko, tsBuf, dsBuf, mssBuf ,sadi, bolota, mss, nasPunkt, rivers, roads, trainRoad ,trainStation, distWASTE, distWASTEJSONSource, distSource, tkoSource, style13, map, addInteraction, removeInteraction,
    dto, dtoun, trop, tropun, dop, dopun, dtr11, dtr22, prD1, prD2, prD3, prD4, tr11, tr22, prostrU1, prostrU2, getComputationLayers};


