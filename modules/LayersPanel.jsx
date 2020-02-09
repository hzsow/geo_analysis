import React from "react";
import * as actionsSwitch from "../actions/actions-switch";
import * as actions from "../actions/actions-layers-panel";
import {connect} from "react-redux";


class LayersPanel extends React.Component {
    constructor(props){
        super(props);
        this.onFilter = this.onFilter.bind(this);
        this.onGraphClick = this.onGraphClick.bind(this);
    }

    onGraphClick(){
        this.props.dispatch(actionsSwitch.toggleGraphPanel(!this.props.panels.isGraphPanelOn));
        if (this.props.panels.isLegendOn)
            this.props.dispatch(actionsSwitch.toggleLegend(!this.props.panels.isLegendOn));
    }

    onFilter(e){
        if (!this.props.panels.isFilterPanel){
            this.props.dispatch(actionsSwitch.toggleFilterPanel(true));
            this.props.dispatch(actionsSwitch.toggleFilterPanelDISTTKO(e.target.id === "isDist"));
        }
        else{
            this.props.dispatch(actionsSwitch.toggleFilterPanelDISTTKO(e.target.id === "isDist"));
        }
    }
    render() {
        return (
            <div ref="panel" style={{display: this.props.panels.isLayerPanelOn ? "block" : "none"}} className="panel">
                <div className="form-check">
                    <label>
                        <input type="checkbox" name="isDist" defaultChecked={this.props.layers.isDist} onChange={() => this.props.dispatch(actions.toggleDist(!this.props.layers.isDist))}/><span className="label-text">Районы Республики Башкортостан </span>
                        <label className="filtr" id="isDist" onClick={this.onFilter}>Фильтр</label>
                        <label data-tooltip={"Нажать, выбрать полигон"}  onClick={this.onGraphClick} style={{display: this.props.layers.isDist ? "inline-block" : "none"}} className={!this.props.panels.isGraphPanelOn ? "filtr" : "filtr-active"}>Графики отходов</label>
                    </label>
                </div>
                <div className="form-check">
                    <label>
                        <input type="checkbox" name="isTko"  defaultChecked={this.props.layers.isTko} onChange={() => this.props.dispatch(actions.toggleTko(!this.props.layers.isTko))}/><span className="label-text">Полигоны ТКО</span>
                        <label className="filtr" id="isTko" onClick={this.onFilter}>Фильтр</label>
                    </label>
                </div>
                <div className="form-check">
                    <label>
                        <input type="checkbox" name="isMss" defaultChecked={this.props.layers.isMss} onChange={() => this.props.dispatch(actions.toggleMSS(!this.props.layers.isMss))}/><span className="label-text">Мусоросортировочные станции</span>
                    </label>
                </div>
                <div className="form-check">
                    <label>
                        <input id="addTR" type="checkbox" name="isTrainRoad" defaultChecked={this.props.layers.isTrainRoad} onChange={() => this.props.dispatch(actions.toggleTrainRoad(!this.props.layers.isTrainRoad))}/> <span className="label-text">ЖД дороги</span>
                    </label>
                </div>
                <div className="form-check">
                    <label>
                        <input id="addTS" type="checkbox" name="isTrainStation" defaultChecked={this.props.layers.isTrainStation} onChange={() => this.props.dispatch(actions.toggleTrainStation(!this.props.layers.isTrainStation))}/> <span className="label-text">ЖД станции</span>
                    </label>
                </div>
                <div className="form-check">
                    <label>
                        <input id="addBolots" type="checkbox" name="isBolota" defaultChecked={this.props.layers.isBolota} onChange={() => this.props.dispatch(actions.toggleBolota(!this.props.layers.isBolota))}/> <span className="label-text">Болота</span>
                    </label>
                </div>
                <div className="form-check">
                    <label>
                        <input id="addAR" type="checkbox" name="isRoads" defaultChecked={this.props.layers.isRoads} onChange={() => this.props.dispatch(actions.toggleRoads(!this.props.layers.isRoads))}/> <span className="label-text">Автодороги</span>
                    </label>
                </div>

                <div className="form-check">
                    <label>
                        <input id="addNaspy" type="checkbox" name="isNasPunkt" defaultChecked={this.props.layers.isNasPunkt} onChange={() => this.props.dispatch(actions.toggleNasPunkt(!this.props.layers.isNasPunkt))}/> <span className="label-text">Населенные пункты</span>
                    </label>
                </div>
                <div className="form-check">
                    <label>
                        <input id="addReki" type="checkbox" name="isRivers" defaultChecked={this.props.layers.isRivers} onChange={() => this.props.dispatch(actions.toggleRiver(!this.props.layers.isRivers))}/> <span className="label-text">Реки</span>
                    </label>
                </div>
                <div className="form-check">
                    <label>
                        <input id="addSadi" type="checkbox" name="isSadi" defaultChecked={this.props.layers.isSadi} onChange={() => this.props.dispatch(actions.toggleSadi(!this.props.layers.isSadi))}/> <span className="label-text">Области городов, садов, деревень и поселков</span>
                    </label>
                </div>
                <div className="form-check">
                    <label>
                        <input type="checkbox" name="isDsBuf" defaultChecked={this.props.layers.isDsBuf} onChange={() => this.props.dispatch(actions.toggleDsBuf(!this.props.layers.isDsBuf))}/><span className="label-text">Зоны поставок на полигоны ТКО</span>
                    </label>
                </div>
                <div className="form-check">
                    <label>
                        <input type="checkbox" name="isTsBuf" defaultChecked={this.props.layers.isTsBuf} onChange={() => this.props.dispatch(actions.toggleTsBuf(!this.props.layers.isTsBuf))}/><span className="label-text">Зоны поставок на железнодорожные станции</span>
                    </label>
                </div>
                <div className="form-check">
                    <label>
                        <input type="checkbox" name="isMssBuf" defaultChecked={this.props.layers.isMssBuf} onChange={() => this.props.dispatch(actions.toggleMssBuf(!this.props.layers.isMssBuf))}/><span className="label-text">Зоны поставок на мусоросортировочные станции</span>
                    </label>
                </div>
            </div>
        )
    }
}
const mapStateToProps = function(store) {
    return {
        panels: store.panelsSwitchState,
        layers: store.layersPanelState
    };
};
export default connect(mapStateToProps)(LayersPanel);
