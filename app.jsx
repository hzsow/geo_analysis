import React from 'react';
import ReactDOM from 'react-dom';
import ol from 'openlayers';
import {addLocaleData, IntlProvider, defineMessages, injectIntl, intlShape} from 'react-intl';

import { Resizable, ResizableBox } from 'react-resizable';

import LoadingPanel from '@boundlessgeo/sdk/components/LoadingPanel';
import MapPanel from '@boundlessgeo/sdk/components/MapPanel';
import Header from '@boundlessgeo/sdk/components/Header';
import Navigation from '@boundlessgeo/sdk/components/Navigation';
import Zoom from '@boundlessgeo/sdk/components/Zoom';
import EditPopup from '@boundlessgeo/sdk/components/EditPopup';
import DrawFeature from '@boundlessgeo/sdk/components/DrawFeature';
import FeatureTable from '@boundlessgeo/sdk/components/FeatureTable';
import enLocaleData from 'react-intl/locale-data/ru';
import enMessages from './data/ru';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Button from '@boundlessgeo/sdk/components/Button';
import Select from '@boundlessgeo/sdk/components/Select';
import Measure from '@boundlessgeo/sdk/components/Measure';
import ImageExport from '@boundlessgeo/sdk/components/ImageExport';
import InfoPopup from '@boundlessgeo/sdk/components/InfoPopup';


import {dist, tko, tsBuf, dsBuf, mssBuf ,sadi, bolota, mss, nasPunkt, rivers, roads, trainRoad ,trainStation, distWASTE, distWASTEJSONSource, select} from './modules/LayersPanel';
import {LayersPanel} from './modules/LayersPanel';
import {TabAnalysis} from './modules/TabAnalysis';
import {TabQuery} from './modules/TabQuery';
import {init} from "./modules/geoserverLog";
import $ from "jquery";
import {Finder} from "./modules/finder2";
import {ComputationPanel} from "./modules/ComputationPanel"
import {dto, dtoun, trop, tropun, dop, dopun, dtr11, dtr22, prD1, prD2, prD3, prD4, tr11, tr22, prostrU1, prostrU2 } from "./modules/LayersPanel";


init();
injectTapEventPlugin();


addLocaleData(
  enLocaleData
);


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



class WFSTApp extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    colorBn: '#BED3E5',
    isLayerPanelOn: true,
    isTurnOn: false,
    isTurnOn2: false,
    isTurn2On: false,
    isMarkerOn: false,
    isLegendOn: true,
    isComputOn: false,
    wasteLayerOn: false,
    isGraphOn: false,
    legst: "img/legendAll.png"
  };

  this._isLayerPanel = this._isLayerPanel.bind(this);
  this._layerTurn2Click = this._layerTurn2Click.bind(this);
  this._layerTurnClick = this._layerTurnClick.bind(this);
  this._legendTurn = this._legendTurn.bind(this);
  this.callbackOnShow = this.callbackOnShow.bind(this);
  this.callbackOnClear = this.callbackOnClear.bind(this);
  this.tabManager = this.tabManager.bind(this);
  this.hideTabs = this.hideTabs.bind(this);
  this.onGraphClick = this.onGraphClick.bind(this);

    map.on("singleclick", (evt) => this.hideTabs());

  }
  getChildContext() {
    return {
      muiTheme: getMuiTheme()
    };
  }

  _toggle(el) {
    if (el.style.display === 'block') {
      el.style.display = 'none';
    } else {
      el.style.display = 'block';
    }
  }

  _toggleTable() {
    this._toggle(ReactDOM.findDOMNode(this.refs.tablePanel));
    this.refs.table.getWrappedInstance().setDimensionsOnState();
  }

  _isLayerPanel(){
  this.setState(state => ({
    isLayerPanelOn: !state.isLayerPanelOn
  }));
  }

  _homeClick(){
  let coords = ol.proj.fromLonLat([56, 54]);
  map.getView().animate({center:coords, zoom: 7});
  }

  _layerTurn2Click(){
    if (!this.state.isTurn2On)
      this.tabManager(3);
    else
      this.setState(state => ({isTurn2On: !state.isTurn2On}));
  }

  _layerTurnClick(){
    this.setState(state =>({
      isTurnOn: !state.isTurnOn
    }));
  }

  _legendTurn(){
    this.setState(state =>({
      isLegendOn: !state.isLegendOn
    }));
  }

  callbackOnShow() {
    if(!this.state.wasteLayerOn) {
      this.toggleDist();
      map.addLayer(distWASTE);
      this.setState(state =>({wasteLayerOn: !this.state.wasteLayerOn}));
    }
    else{
      map.removeLayer(distWASTE);
      map.addLayer(distWASTE);
      distWASTEJSONSource.changed();
    }
  }

  callbackOnClear() {
    if(this.state.wasteLayerOn) {
      this.toggleDist();
      map.removeLayer(distWASTE);
      this.setState(state =>({wasteLayerOn: !this.state.wasteLayerOn}));
      $("#leg1").attr("src",this.state.legst);
    }
  }


  tabManager(tab){
    this.setState({isComputOn: false});
    this.setState({isTurnOn: false});
    this.setState({isTurn2On: false});
    this.setState({isGraphOn: false});
    map.removeInteraction(select);

    switch (tab) {
      case 1:
        this.setState({isTurnOn: true});
        this.setState({isTurnOn2: true});
        break;
      case 2:
        this.setState({isTurnOn: true});
        this.setState({isTurnOn2: false});
        break;
      case 3:
        this.setState({isTurn2On: true});
        break;
      case 4:
        this.setState({isComputOn: true});
    }
}
  hideTabs(){
    this.setState({isTurnOn: false});
    this.setState({isTurn2On: false});
    this.setState({isComputOn: false});

    ReactDOM.findDOMNode(this.refs.tablePanel).style.display = "none";
  }

  onGraphClick(){
    $("div#graph").empty();
    this.setState(state => ({isGraphOn: !state.isGraphOn}), () => {
      if (this.state.isGraphOn){
        this.setState(state => ({isLegendOn: false}));
        map.addInteraction(select);
        select.on('select', function(e) {
          let selectedFeatures = e.target.getFeatures().getArray();
          if (selectedFeatures.length !== 0)
          {
            let name = selectedFeatures[0].get('NAME');
            let obezvOth = selectedFeatures[0].get('W_u_15');
            let obrOth1 = selectedFeatures[0].get('W_15');
            let obrOth2 = selectedFeatures[0].get('W_16');
            let zahOth = selectedFeatures[0].get('W_d_15');

            $("div#graph").empty();

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
            chart.title( name+'\n'+'Соотношение отходов района');
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
            chart2.title( '\n'+'Динамика образования отходов');
            chart2.container('graph');
            chart2.legend()
                .position('left-bottom')
                .itemsLayout('vertical')
                .align('left');

            chart.draw();
            chart2.draw();
          }
          else{
            this.setState({isGraphOn: false});
            map.removeInteraction(select);
          }
        }.bind(this));
      }
      else {
        map.removeInteraction(select);
      }
    });
  }


  render() {
    return (
      <div id='content'>
        <Header showLeftIcon={false}>
          <Finder/>
          <Select toggleGroup='nav' map={map}/>
          <Measure toggleGroup='nav' map={map}/>
          <ImageExport map={map} />
          <Navigation toggleGroup='nav' secondary={true} />
          <DrawFeature toggleGroup='nav' map={map} />
          <Button toggleGroup='nav' buttonType='Icon' iconClassName='headerIcons ms ms-table' tooltip='Table' onTouchTap={this._toggleTable.bind(this)}/>

        </Header>

        <div className="modal fade" id="exampleModalScrollable" tabIndex="-1" role="dialog"
             aria-labelledby="" aria-hidden="false">
          <div className="modal-dialog modal-dialog-scrollable" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalScrollableTitle">Результаты поиска</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body" id={"modal-body"}>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть</button>
              </div>
            </div>
          </div>
        </div>
        <ComputationPanel state={this.state.isComputOn}/>
        <MapPanel id='map' map={map} />
        <div id='editpopup' className='ol-popup'><EditPopup toggleGroup='nav' map={map} /></div>
        <div  ref='tablePanel' id='table-panel' className='attributes-table'><FeatureTable toggleGroup='navigation' ref='table' map={map} /></div >
        <LoadingPanel map={map} />
        <div id='popup' className='ol-popup'><InfoPopup toggleGroup='navigation' map={map} /></div>
        <div id='legend' style={{display: this.state.isLegendOn ? "block" : "none"}}><img id="leg1" src={this.state.legst}/></div>
        <div className="toolbar">
          <div id='zoom-buttons'><Zoom map={map} /></div>
          <button title={"Вернуть начальный вид"} id="home" className={"buttonOff"} onClick={this._homeClick} style={{background:this.state.bgColor}}><i className="fa fa-home"/></button>
          <button title={"Тематические карты"} id="layerTurn2" className={this.state.isTurn2On ? "buttonOn" : "buttonOff"} onClick={this._layerTurn2Click}><i className="fa fa-asterisk"/></button>
          <button title={"Легенда"} id="legendTurn" className={this.state.isLegendOn ? "buttonOn" : "buttonOff"} onClick={this._legendTurn}><i className="fa fa-list-alt"/></button>
          <button id="comput" className={this.state.isComputOn ? "buttonOn" : "buttonOff"} onClick={() => this.tabManager(4)}><i className="fa fa-link"/></button>
        </div>
        <div id='layerlist'><LayersPanel isGraphOn={this.state.isGraphOn} onGraphClick = {this.onGraphClick} onFiltr1Click = {(component, event) => this.tabManager(1)} onFiltr2Click = {(component, event) => this.tabManager(2)}  f = {(func) => this.toggleDist = func}  className={"panel"} state={this.state.isLayerPanelOn}/><button id="layerPanelButton" className={this.state.isLayerPanelOn ? "buttonOn" : "buttonOff"} onClick={this._isLayerPanel}><i className="fa fa-plus-square-o"></i></button>
        </div>
        <TabAnalysis state={this.state.isTurn2On} toggleDist={this.callbackOnShow} clear={this.callbackOnClear} />
        <TabQuery state={this.state.isTurnOn} state2 = {this.state.isTurnOn2}/>
        <div style={{display: this.state.isGraphOn ? "block" : "none"}}  id={"graph"}/>
      </div>
    );
  }
}

WFSTApp.childContextTypes = {
  muiTheme: React.PropTypes.object
};

ReactDOM.render(<IntlProvider locale='en' messages={enMessages}><WFSTApp /></IntlProvider>, document.getElementById('main'));

tko.setVisible(false);
mss.setVisible(false);

export {map}
