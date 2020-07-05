import React from 'react';
import $ from "jquery";
import {dto, dtoun, trop, tropun, dop, dopun, dtr11, dtr22, prD1, prD2, prD3, prD4, tr11, tr22, prostrU1, prostrU2 } from "./Layers";
import {connect} from "react-redux";
import * as actions from '../actions/actions-tab-analysis';

class ForecastPanel extends React.Component{
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    
    onClick(e){
        this.props.dispatch(actions.selectForecast(e.currentTarget.value));
        console.log(this.props.tabAnalysis.selectedForecast);
    }

    render() {
        return(
            <div className="panel2">
                <div className="form-check">
                    <label>
                        <input type="radio" value="W_H" checked={this.props.tabAnalysis.selectedForecast === 'W_H'} onChange={this.onClick} name="check"/><span className="label-text">Расчетный прогноз ТКО предприятий</span>
                    </label>
                </div>
                <div className="form-check">
                    <label>
                        <input type="radio" value="W_F" checked={this.props.tabAnalysis.selectedForecast === 'W_F'} name="check" onChange={this.onClick}/> <span className="label-text">Расчетный прогноз ТКО домохозяйств</span>
                    </label>
                </div>
                <div className="form-check">
                    <label>
                        <input type="radio" value="W_S" checked={this.props.tabAnalysis.selectedForecast === 'W_S'} name="check" onChange={this.onClick}/> <span className="label-text">Суммарный расчёт ТКО</span>
                    </label>
                </div>
            </div>
        )
    }
}
const mapStateToProps = function(store) {
    return {
        panels: store.panelsSwitchState,
        layers: store.layersPanelState,
        tabAnalysis: store.tabAnalysisState
    };
};
export default connect(mapStateToProps)(ForecastPanel);
