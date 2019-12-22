import { combineReducers } from 'redux';


import panelsSwitchReducer from './panels-switch-reducer';


let reducers = combineReducers({
    panelsSwitchState: panelsSwitchReducer
});

export default reducers;