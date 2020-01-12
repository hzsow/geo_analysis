import { combineReducers } from 'redux';


import panelsSwitchReducer from './panels-switch-reducer';
import tabAnalysisReducer from "./tab-analysis-reducer";
import layersPanelReducer from "./layers-panel-reducer";

let reducers = combineReducers({
    panelsSwitchState: panelsSwitchReducer,
    tabAnalysisState: tabAnalysisReducer,
    layersPanelState: layersPanelReducer
});

export default reducers;