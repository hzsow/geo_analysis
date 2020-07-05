import React from "react";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import ReactDOM from "react-dom";
import ol from "openlayers";
import * as switchActions from "../actions/actions-switch";
import LayersPanel from "./LayersPanel";
import Header from "@boundlessgeo/sdk/components/Header";
import {SearchPanel} from "./SearchPanel";
import Select from "@boundlessgeo/sdk/components/Select";
import Measure from "@boundlessgeo/sdk/components/Measure";
import ImageExport from "@boundlessgeo/sdk/components/ImageExport";
import Navigation from "@boundlessgeo/sdk/components/Navigation";
import DrawFeature from "@boundlessgeo/sdk/components/DrawFeature";
import Button from "@boundlessgeo/sdk/components/Button";
import ComputationPanel from "./ComputationPanel";
import MapPanel from "@boundlessgeo/sdk/components/MapPanel";
import EditPopup from "@boundlessgeo/sdk/components/EditPopup";
import FeatureTable from "@boundlessgeo/sdk/components/FeatureTable";
import LoadingPanel from "@boundlessgeo/sdk/components/LoadingPanel";
import InfoPopup from "@boundlessgeo/sdk/components/InfoPopup";
import Zoom from "@boundlessgeo/sdk/components/Zoom";
import ThematicMapsPanel from "./ThematicMapsPanel";
import ForecastPanel from "./ForecastPanel";
import FilterPanel from "./FilterPanel";
import {map} from "./Layers";
import {connect} from "react-redux";
import Modal from "./modal";
import InfoModal from "./infoModal";


class WFSTApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isGraphOn: false,
            isLoading: false,
            isModalShow: true
        };

        this._isLayerPanel = this._isLayerPanel.bind(this);
        this._legendTurn = this._legendTurn.bind(this);
        this._isThematicMap = this._isThematicMap.bind(this);
        this._computationTurn = this._computationTurn.bind(this);
        this._onCloseModal = this._onCloseModal.bind(this);

        map.on("singleclick", (evt) => {
            this.props.dispatch(switchActions.toggleOffAll());
            ReactDOM.findDOMNode(this.refs.tablePanel).style.display = "none";
        });
    }
    getChildContext() {
        return {
            muiTheme: getMuiTheme()
        };
    }

    componentDidMount() {
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

    _homeClick(){
        let coords = ol.proj.fromLonLat([56, 54]);
        map.getView().animate({center:coords, zoom: 7});
    }

    _isLayerPanel(){
        this.props.dispatch(switchActions.toggleLayerPanel(!this.props.panels.isLayerPanelOn));
    }
    _isThematicMap(){
        this.props.dispatch(switchActions.toggleThematicMap(!this.props.panels.isThematicMapsOn));
    }
    _legendTurn(){
        this.props.dispatch(switchActions.toggleLegend(!this.props.panels.isLegendOn));
    }

    _computationTurn(){
        this.props.dispatch(switchActions.toggleComputationPanel(!this.props.panels.isComputationPanelOn));
        this.setState({isLoading: !this.state.isLoading}, () => {
            if(!this.props.layers.isComputationLayersAreReady)
                this.props.dispatch(switchActions.fetchComputationLayers());
        });
    }

    _onCloseModal(){
        this.setState({isModalShow: false});
    }
    render() {
        return (
            <div id='content'>
                <Header showLeftIcon={false}>
                    <SearchPanel/>
                    <Select toggleGroup='nav' map={map}/>
                    <Measure toggleGroup='nav' map={map}/>
                    <ImageExport map={map} />
                    <Navigation toggleGroup='nav' secondary={true} />
                    <DrawFeature toggleGroup='nav' map={map} />
                    <Button toggleGroup='nav' buttonType='Icon' iconClassName='headerIcons ms ms-table' tooltip='Table' onTouchTap={this._toggleTable.bind(this)}/>
                </Header>
                {this.state.isModalShow && <InfoModal onClose={this._onCloseModal}/>}
                <Modal/>
                <ComputationPanel/>
                <MapPanel id='map' map={map} />
                <ThematicMapsPanel/>
                <FilterPanel/>
                <LoadingPanel map={map}/>
                {this.props.panels.isForecastPanelOn && <ForecastPanel />}
                <div id='layerlist'><LayersPanel className={"panel"}/><button id="layerPanelButton" className={this.props.panels.isLayerPanelOn ? "buttonOn" : "buttonOff"} onClick={this._isLayerPanel}><i className="fa fa-plus-square-o"/></button></div>


                <div id='editpopup' className='ol-popup'><EditPopup toggleGroup='nav' map={map} /></div>
                <div  ref='tablePanel' id='table-panel' className='attributes-table'><FeatureTable toggleGroup='navigation' ref='table' map={map} /></div>
                <div id='popup' className='ol-popup'><InfoPopup toggleGroup='navigation' map={map} /></div>
                <div id='legend' style={{display: this.props.panels.isLegendOn ? "block" : "none"}}><img id="leg1" src={"img/legendAll.png"} alt={""}/></div>
                <div style={{display: this.state.isGraphOn ? "block" : "none"}}  id="graph"/>


                <div className="toolbar">
                    <div id='zoom-buttons'><Zoom map={map}/></div>
                    <button title={"Вернуть начальный вид"} id="home" className={"buttonOff"} onClick={this._homeClick} style={{background:this.state.bgColor}}><i className="fa fa-home"/></button>
                    <button title={"Тематические карты"} id="layerTurn2" className={this.props.panels.isThematicMapsOn ? "buttonOn" : "buttonOff"} onClick={this._isThematicMap}><i className="fa fa-asterisk"/></button>
                    <button title={"Легенда"} id="legendTurn" className={this.props.panels.isLegendOn ? "buttonOn" : "buttonOff"} onClick={this._legendTurn}><i className="fa fa-list-alt"/></button>
                    <button id="comput" className={this.props.panels.isComputationPanelOn ? "buttonOn" : "buttonOff"} onClick={this._computationTurn}><i className="fa fa-link"/></button>
                </div>

            </div>
        );
    }
}

WFSTApp.childContextTypes = {
    muiTheme: React.PropTypes.object
};

const mapStateToProps = function(store) {
    return {
        panels: store.panelsSwitchState,
        layers: store.layersPanelState
    };
};
export default connect(mapStateToProps)(WFSTApp);
